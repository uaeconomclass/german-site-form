# Energieausweis Form (Data-Driven)

Goal: keep the UI renderer generic, and put all steps/fields/hints/tooltips into a spec that is easy to edit by humans and AI.

## Source Of Truth

- `src/energieausweis-form/spec/meta.json`
  - global metadata (version, locale)
- `src/energieausweis-form/spec/option-sets.json`
  - shared option sets for `select`/`radio`
  - rule: option sets that contain an empty `value: ""` placeholder are meant for `select`
  - for `radio`, use the corresponding `*_radio` set (no placeholder)
- `src/energieausweis-form/spec/steps/*.json`
  - one JSON file per wizard step (sorted by filename)
  - supports `when`, `required`, `blocks` (section titles inside a step)
- `src/energieausweis-form/spec/tooltips-de.json`
  - tooltip texts map: `tipKey -> text` (German)
- `src/energieausweis-form/runtime/*.js`
  - generic renderer runtime (split into modules for maintainability)
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
- `preview/energieausweis-form.js` (spec + tooltips injected, then `runtime/*.js` concatenated)

## Build WP Plugin Assets

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/build-wp-plugin.ps1
```

This regenerates `wp-plugin/energieausweis-form/assets/form/*` from `src/` via `preview/`.

## Navigation (Stepper)

Stepper pills are intentionally restricted:

- current step and previous steps are clickable
- steps after the current one are locked, so moving forward requires submitting the current step

## Validation UI

- Required-field errors render as red text under the field (e.g. `Pflichtfeld`).
- Invalid fields are marked with `aria-invalid="true"` so CSS can highlight:
  - `.control` inputs/selects
  - `.radio-row` groups (chips)
  - `.checkbox-row` containers

## Storage

The "Speichern" button stores the current draft in browser `localStorage` (manual save).
Draft is also saved automatically on "Weiter" after a successful step validation.
Key is per-path to avoid conflicts between pages:

- `ea_wizard_draft_v1:<pathname>`
