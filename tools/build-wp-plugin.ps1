$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$repoRoot = Split-Path -Parent $PSScriptRoot

# Build preview assets first (CSS/JS) since the plugin uses the same bundle.
& powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $repoRoot "tools/build-preview.ps1")

$pluginRoot = Join-Path $repoRoot "wp-plugin/energieausweis-form"
$pluginAssets = Join-Path $pluginRoot "assets"
$pluginFormAssets = Join-Path $pluginAssets "form"

if (!(Test-Path -LiteralPath $pluginFormAssets)) {
  New-Item -ItemType Directory -Path $pluginFormAssets -Force | Out-Null
}

# Clean up from older builds (accidental nesting).
$nested = Join-Path $pluginAssets "assets"
if (Test-Path -LiteralPath $nested) {
  Remove-Item -LiteralPath $nested -Recurse -Force
}

# Copy JS/CSS bundle from preview build.
Copy-Item -LiteralPath (Join-Path $repoRoot "preview/energieausweis-form.css") -Destination (Join-Path $pluginFormAssets "energieausweis-form.css") -Force
Copy-Item -LiteralPath (Join-Path $repoRoot "preview/energieausweis-form.js") -Destination (Join-Path $pluginFormAssets "energieausweis-form.js") -Force

# Copy images (tooltips / imgselect).
$srcImages = Join-Path $repoRoot "assets/images"
$dstImages = Join-Path $pluginAssets "images"
if (Test-Path -LiteralPath $srcImages) {
  if (Test-Path -LiteralPath $dstImages) {
    Remove-Item -LiteralPath $dstImages -Recurse -Force
  }
  Copy-Item -LiteralPath $srcImages -Destination $dstImages -Recurse -Force
}

Write-Host "Built WP plugin assets:" -ForegroundColor Green
Write-Host " - $pluginFormAssets"
Write-Host " - $pluginAssets\\images"
