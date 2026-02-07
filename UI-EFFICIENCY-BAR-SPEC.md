# UI Spec: Efficiency Bar (A+ ... H) With Two Markers

This document specifies the "Energieeffizienzklasse" bar shown at the top of the form (ref: `Group 391.jpg`).

Goals:
- Be visually consistent with the reference UI.
- Keep implementation isolated so the main wizard logic does not get coupled to bar internals.
- Allow two independent movable markers (top + bottom) without layout conflicts.

Non-goals:
- Implement the *real* energy performance calculation (that belongs to domain logic / backend rules).
- Mirror any 3rd-party code or layouts verbatim.

## Visual Layout

Segments:
- 9 segments: `A+`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`
- Chevron style, minimal gaps (slight overlap allowed).
- Colors: green -> yellow -> orange -> red (like screenshot).

Markers:
- Two movable markers on the same bar:
  - Top marker: label `Jetzt` with a small triangle pointing down to the bar.
  - Bottom marker: label `Potenz` with a small triangle pointing up to the bar.
- Both markers are centered on their position.
- Both markers can be hidden independently (if their value is unknown).

Accessibility:
- The bar itself is decorative unless we expose a textual summary.
- If values exist, render an `aria-label` on the container with the computed class + numeric value.

## API (Component Inputs)

Data:
- `nowKwh` (number | null): position for `Jetzt`
- `potKwh` (number | null): position for `Potenz`

Scale model (configurable, default aligned to common A+..H thresholds):
- `scaleMin` default: `0`
- `scaleMax` default: `250` (values > 250 are still shown, clamped at the right edge)
- `clampMin` default: `5` (avoid sticking to far-left edge)
- `clampMax` default: `250`

Thresholds (for class highlighting / display):
- A+: `<= 30`
- A: `<= 50`
- B: `<= 75`
- C: `<= 100`
- D: `<= 130`
- E: `<= 160`
- F: `<= 200`
- G: `<= 250`
- H: `> 250`

Note: If we later need exact legal thresholds for specific products (WG/NWG, Bedarf/Verbrauch),
keep this table as a per-product config, not hardcoded in CSS.

## Positioning Rules

Convert a kWh value to a percent position on the bar:

1. `v = clamp(value, clampMin, clampMax)`
2. `pos = (v - scaleMin) / (scaleMax - scaleMin) * 100`

Apply to CSS:
- Top marker uses CSS custom property: `--marker-now: <pos>%`
- Bottom marker uses CSS custom property: `--marker-pot: <pos>%`

Marker element styles:
- `left: var(--marker-now)` and `transform: translateX(-50%)`
- Same for `--marker-pot`

## Current Repo Implementation (as of 2026-02-07)

Files:
- Markup: `preview/energieausweis-form.html`
  - One bar element: `.rating`
  - One marker: `.marker` with label `Jetzt`
  - `Potenz` exists only as a label row below (not a movable marker).
  - Marker position is currently static (inline: `style="--marker: 66%"`).
- CSS: `src/energieausweis-form/style.css`
  - `.rating` uses chevron segments with overlap (via `margin-left` negative).
  - `.marker` reads `--marker` and draws a downward triangle.
- JS: `src/energieausweis-form/runtime.js`
  - No dynamic updates for the marker are currently implemented.

Compatibility plan:
- Introduce 2 marker elements:
  - `.marker.marker-now` (top, down triangle, uses `--marker-now`)
  - `.marker.marker-pot` (bottom, up triangle, uses `--marker-pot`)
- Keep existing `.rating`/segment markup intact.
- Replace current single `--marker` with `--marker-now` and optionally `--marker-pot`.
- Add a small helper in runtime to update CSS variables based on `nowKwh` and `potKwh`.

## Implementation Notes (Suggested)

- Implement `valueToPercent(value)` like Powerpass does: clamp + linear mapping.
- Keep marker offsets in CSS (not JS) so the JS only sets percentages.
- Store marker values in state as:
  - `ui_eff_now_kwh`, `ui_eff_pot_kwh` (temporary), OR derive from real computed values later.

