$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$repoRoot = Split-Path -Parent $PSScriptRoot

# Build preview assets first
& powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $repoRoot "tools/build-preview.ps1")

$distRoot = Join-Path $repoRoot "dist/gh-pages"
if (Test-Path -LiteralPath $distRoot) {
  Remove-Item -LiteralPath $distRoot -Recurse -Force
}
New-Item -ItemType Directory -Path $distRoot | Out-Null

Copy-Item -LiteralPath (Join-Path $repoRoot "preview") -Destination (Join-Path $distRoot "preview") -Recurse -Force
Copy-Item -LiteralPath (Join-Path $repoRoot "assets") -Destination (Join-Path $distRoot "assets") -Recurse -Force

$extraRootFiles = @(
  "EVEBI-Datenimport-Energieausweise.md"
)
foreach ($f in $extraRootFiles) {
  $src = Join-Path $repoRoot $f
  if (Test-Path -LiteralPath $src) {
    Copy-Item -LiteralPath $src -Destination (Join-Path $distRoot $f) -Force
  }
}

$index = @"
<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Energieausweis Form Preview</title>
    <style>
      body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;margin:24px;color:#0f172a}
      a{color:#0ea5e9;text-decoration:none} a:hover{text-decoration:underline}
      .card{border:1px solid #eaecf0;border-radius:12px;padding:16px;max-width:720px}
      .muted{color:#667085}
    </style>
  </head>
  <body>
    <div class="card">
      <h1 style="margin:0 0 8px">Energieausweis Form</h1>
      <p class="muted" style="margin:0 0 12px">Static preview build.</p>
      <ul style="margin:0;padding-left:18px">
        <li><a href="./preview/energieausweis-form.html">Open Form</a></li>
        <li><a href="./EVEBI-Datenimport-Energieausweise.md">EVEBI Import Reference (Gebaeudehuelle)</a></li>
      </ul>
    </div>
  </body>
</html>
"@

$enc = New-Object System.Text.UTF8Encoding($true)
[System.IO.File]::WriteAllText((Join-Path $distRoot "index.html"), $index, $enc)

Write-Host "Built GH Pages site:" -ForegroundColor Green
Write-Host " - $distRoot"
