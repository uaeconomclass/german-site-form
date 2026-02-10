$ErrorActionPreference = "Stop"

Set-StrictMode -Version Latest

$repoRoot = Split-Path -Parent $PSScriptRoot
$srcRoot = Join-Path $repoRoot "src/energieausweis-form"
$specRoot = Join-Path $srcRoot "spec"
$previewRoot = Join-Path $repoRoot "preview"

function Read-JsonFile([string]$path) {
  if (!(Test-Path -LiteralPath $path)) {
    throw "Missing JSON file: $path"
  }
  $raw = Get-Content -LiteralPath $path -Raw -Encoding UTF8
  return $raw | ConvertFrom-Json
}

function Write-TextUtf8Bom([string]$path, [string]$text) {
  # BOM makes Windows tooling reliably interpret UTF-8 (umlauts) without mojibake.
  $enc = New-Object System.Text.UTF8Encoding($true)

  # Some processes (e.g. preview opened by another tool) can temporarily lock files.
  # Retry a few times instead of failing the whole build.
  $attempts = 30
  for ($i = 1; $i -le $attempts; $i++) {
    try {
      [System.IO.File]::WriteAllText($path, $text, $enc)
      return
    } catch [System.IO.IOException] {
      if ($i -eq $attempts) { throw }
      Start-Sleep -Milliseconds 200
    }
  }
}

if (!(Test-Path -LiteralPath $previewRoot)) {
  New-Item -ItemType Directory -Path $previewRoot | Out-Null
}

# ---- Build FORM_SPEC from modular spec files
$metaPath = Join-Path $specRoot "meta.json"
$optionSetsPath = Join-Path $specRoot "option-sets.json"
$stepsDir = Join-Path $specRoot "steps"
$tooltipsPath = Join-Path $specRoot "tooltips-de.json"

$meta = Read-JsonFile $metaPath
$optionSets = Read-JsonFile $optionSetsPath

if (!(Test-Path -LiteralPath $stepsDir)) {
  throw "Missing steps directory: $stepsDir"
}

$stepFiles =
  Get-ChildItem -LiteralPath $stepsDir -Recurse -Filter "*.json" |
  Sort-Object @{ Expression = { $_.FullName.Replace($stepsDir, "") } }

$steps = @()
foreach ($f in $stepFiles) {
  $steps += Read-JsonFile $f.FullName
}

$formSpec = [ordered]@{}
foreach ($p in $meta.PSObject.Properties) { $formSpec[$p.Name] = $p.Value }
$formSpec["optionSets"] = $optionSets
$formSpec["steps"] = $steps

$tooltips = Read-JsonFile $tooltipsPath

# ---- Copy CSS
$srcCss = Join-Path $srcRoot "style.css"
$dstCss = Join-Path $previewRoot "energieausweis-form.css"
Copy-Item -LiteralPath $srcCss -Destination $dstCss -Force

# ---- Build JS bundle (inject spec + tooltips, then runtime modules)
$runtimeDir = Join-Path $srcRoot "runtime"
if (!(Test-Path -LiteralPath $runtimeDir)) {
  throw "Missing runtime directory: $runtimeDir"
}

$runtimeFiles =
  Get-ChildItem -LiteralPath $runtimeDir -Filter "*.js" |
  Sort-Object @{ Expression = { $_.Name } }

if ($runtimeFiles.Count -eq 0) {
  throw "No runtime module files found in: $runtimeDir"
}

$runtime = ""
foreach ($f in $runtimeFiles) {
  $runtime += (Get-Content -LiteralPath $f.FullName -Raw -Encoding UTF8)
  if (!$runtime.EndsWith("`n")) { $runtime += "`n" }
}

$formSpecJson = ($formSpec | ConvertTo-Json -Depth 100 -Compress)
$tooltipsJson = ($tooltips | ConvertTo-Json -Depth 100 -Compress)

$commit = (git -C $repoRoot rev-parse --short HEAD).Trim()
$builtAt = (Get-Date).ToString("o")

# ---- Cache-bust CSS/JS references in the preview HTML so GitHub Pages updates reliably
$previewHtml = Join-Path $previewRoot "energieausweis-form.html"
if (Test-Path -LiteralPath $previewHtml) {
  $html = Get-Content -LiteralPath $previewHtml -Raw -Encoding UTF8
  # Ensure links always point at the current build commit.
  $html = $html -replace '(\.\/energieausweis-form\.css)(\?v=[^"''>]+)?', ('$1?v=' + $commit)
  $html = $html -replace '(\.\/energieausweis-form\.js)(\?v=[^"''>]+)?', ('$1?v=' + $commit)
  Write-TextUtf8Bom $previewHtml $html
}

$bundle = @"
/* AUTO-GENERATED FILE. Do not edit directly.
 * Source of truth:
 * - $specRoot
 * - $runtimeDir
 * Rebuild:
 * - powershell -NoProfile -ExecutionPolicy Bypass -File tools/build-preview.ps1
 */
const FORM_SPEC = $formSpecJson;
const TOOL_TIPS_DE = $tooltipsJson;
const BUILD_INFO = { commit: "$commit", builtAt: "$builtAt" };

$runtime
"@

$dstJs = Join-Path $previewRoot "energieausweis-form.js"
Write-TextUtf8Bom $dstJs $bundle

Write-Host "Built preview assets:" -ForegroundColor Green
Write-Host " - $dstCss"
Write-Host " - $dstJs"
