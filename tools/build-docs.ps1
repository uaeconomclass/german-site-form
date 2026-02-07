$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$repoRoot = Split-Path -Parent $PSScriptRoot

# Build preview assets first (CSS/JS).
& powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $repoRoot "tools/build-preview.ps1")

$docsRoot = Join-Path $repoRoot "docs"
if (Test-Path -LiteralPath $docsRoot) {
  Remove-Item -LiteralPath $docsRoot -Recurse -Force
}
New-Item -ItemType Directory -Path $docsRoot | Out-Null

Copy-Item -LiteralPath (Join-Path $repoRoot "preview") -Destination (Join-Path $docsRoot "preview") -Recurse -Force
Copy-Item -LiteralPath (Join-Path $repoRoot "assets") -Destination (Join-Path $docsRoot "assets") -Recurse -Force

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
      <p class="muted" style="margin:0 0 12px">Static preview (GitHub Pages via /docs).</p>
      <ul style="margin:0;padding-left:18px">
        <li><a href="./preview/energieausweis-form.html">Open Form</a></li>
        <li><a href="./preview/form-overview.html">Overview Page</a></li>
      </ul>
    </div>
  </body>
</html>
"@

$enc = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText((Join-Path $docsRoot "index.html"), $index, $enc)

Write-Host "Built docs site:" -ForegroundColor Green
Write-Host " - $docsRoot"

