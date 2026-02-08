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

We intentionally keep this UI decoupled from any real domain formulas.
For now, the bar accepts **direct positions** (0..100) and we simply render markers.

Data:
- `nowPct` (number | null): position for `Jetzt` in percent `0..100`
- `potPct` (number | null): position for `Potenz` in percent `0..100`

Direction:
- `0%` = far **left** (greener / A+ side)
- `100%` = far **right** (redder / H side)

Clamping:
- Recommended clamp range: `2..98` (to avoid marker overflow at the edges).
- Hard clamp: `0..100`.

## Positioning Rules

We use a deliberately simple mechanism:
- Markers are regular DOM elements and are moved by changing `padding-left`.
- This makes the “API” understandable for humans and easy to wire from PHP or JS.

### Units

`padding-left` is always expressed in **percent**:
- `padding-left: 0%` .. `padding-left: 100%`

### Markup Contract

The bar area contains:
- top marker: `.potenz.jetzt`
- the segments: `.rating`
- bottom marker: `.potenz` (without `.jetzt`)

Example (simplified):
```html
<div class="eff-right">
  <div class="potenz jetzt" style="padding-left: 66%">
    <span class="muted small">Jetzt</span>
  </div>

  <div class="rating" aria-hidden="true">
    <span class="r r1">A+</span> ... <span class="r r9">H</span>
  </div>

  <div class="potenz" style="padding-left: 40%">
    <span class="muted small">Potenz</span>
  </div>
</div>
```

### Recommended API (CSS Variable)

Instead of writing `padding-left` directly, we can use a CSS variable:
```html
<div class="potenz jetzt" style="--pos: 66%"></div>
<div class="potenz" style="--pos: 40%"></div>
```
and in CSS:
```css
.potenz { padding-left: var(--pos, 0%); }
```

This keeps markup stable while still allowing `0..100%` control.

## Current Repo Implementation (as of 2026-02-07)

Files:
- Markup:
  - WP source of truth: `wp-plugin/energieausweis-form/includes/shortcode.php`
  - Preview mirror: `preview/energieausweis-form.html` (generated)
  - Two marker rows exist:
    - `.potenz.jetzt` (top label)
    - `.potenz` (bottom label)
- CSS:
  - Source of truth: `src/energieausweis-form/style.css`
  - Generated copies:
    - `preview/energieausweis-form.css`
    - `docs/preview/energieausweis-form.css`
    - `wp-plugin/energieausweis-form/assets/form/energieausweis-form.css`

Compatibility plan:
If we need to drive marker positions dynamically:
- Keep the DOM markup as-is.
- Update `.potenz.jetzt` and `.potenz` positions by setting `padding-left` or `--pos`.

## Implementation Notes (Suggested)

Helper (JS):
```js
function setMarkerPct(el, pct) {
  const v = Math.max(0, Math.min(100, Number(pct)));
  el.style.paddingLeft = v + "%";
}
```

Defaults:
- If values are unknown, use a neutral position (e.g. 50% / around class D-E),
  or hide the marker rows entirely.
