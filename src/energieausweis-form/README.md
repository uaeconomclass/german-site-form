# Energieausweis Form (Data-Driven)

Goal: keep the UI renderer generic, and put all steps/fields/hints/tooltips into a spec that is easy to edit by humans and AI.

## Source Of Truth

- `src/energieausweis-form/spec/meta.json`
  - global metadata (version, locale)
- `src/energieausweis-form/spec/option-sets.json`
  - shared option sets for `select`/`radio`
- `src/energieausweis-form/spec/steps/*.json`
  - one JSON file per wizard step (sorted by filename)
  - supports `when`, `required`, `blocks` (section titles inside a step)
- `src/energieausweis-form/spec/tooltips-de.json`
  - tooltip texts map: `tipKey -> text` (German)
- `src/energieausweis-form/runtime.js`
  - generic renderer runtime (conditions, validation, autosave, summary export)
- `src/energieausweis-form/style.css`
  - "Group 391" look and layout (light UI)

## Build Preview

This repo keeps `preview/energieausweis-form.html` as a simple static page that loads the built assets.

Run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/build-preview.ps1
```

This updates:

- `preview/energieausweis-form.css` (copied from `src/energieausweis-form/style.css`)
- `preview/energieausweis-form.js` (spec + tooltips injected, then `runtime.js` appended)

