# EVEBI Import Mapping Full (Draft v1)

## Scope

This document defines the full export mapping strategy from the current wizard to EVEBI import templates.

Machine-readable source of truth:
- `docs/mapping-spec.json`

Reference inputs:
- `docs/hints-for-import/EA_Verbrauch_WG.csv`
- `docs/hints-for-import/EA_Verbrauch_NWG.csv`
- `docs/hints-for-import/Schnittstellenbeschreibung-Import-Energieausweise.pdf`

## File Contract

- Format: `CSV`
- Delimiter: `;`
- Encoding: `UTF-8`
- Decimal format: German-style comma for numeric text fields where EVEBI expects localized values.
- Date format for consumption periods: `dd.mm.yyyy`

## Routing Rules

- `gebaeudetyp == WG` -> export schema `WG` (`EA_Verbrauch_WG.csv` shape)
- `gebaeudetyp == NWG` -> export schema `NWG` (`EA_Verbrauch_NWG.csv` shape)
- `gebaeudetyp == MISCH` -> current policy: export as `NWG` (documented fallback)

## Coverage Status

From `docs/mapping-spec.json`:

- WG (87 columns):
  - `mapped`: 13
  - `derived`: 8
  - `partial`: 10
  - `defaulted`: 13
  - `unmapped`: 43

- NWG (97 columns):
  - `mapped`: 14
  - `derived`: 10
  - `partial`: 11
  - `defaulted`: 20
  - `unmapped`: 42

Status meaning:
- `mapped`: direct mapping from form field.
- `derived`: deterministic mapping from one or more form fields.
- `partial`: mapped with assumptions that may require business confirmation.
- `defaulted`: set to static default.
- `unmapped`: data not collected yet in current form.

## Core Enum Mapping (implemented in spec)

- `anlass -> Anlass`
  - `Vermietung` -> `AG_VERMIETUNG`
  - `Verkauf` -> `AG_VERMIETUNG`
  - `Sonstiges` -> `AG_SONST`
  - `Neubau` -> `AG_SONST`
  - `Modernisierung` -> `AG_SONST`

- `ausweisart -> BedarfVerbrauch`
  - `Verbrauchsausweis` -> `V`
  - `Bedarfsausweis` -> `B`
  - `weiß ich nicht` -> `V` (fallback)

- `gebaeudeanteil -> gebaeudeteil`
  - `Gesamtgebäude` -> `GT_GANZES_GEB`
  - `Wohnen` -> `GT_TEIL_DES_WG`

- `heizung_waermeerzeuger -> ETr1_Kategorie (BK_*)`
  - `Öl` -> `BK_OEL`
  - `Gas` -> `BK_GAS`
  - `Fernwärme` -> `BK_FW0`
  - `Wärmepumpe` -> `BK_STROM`
  - `Biomasse` -> `BK_HOLZ`
  - `Elektro` -> `BK_STROM`
  - `Einzelöfen` -> `BK_HOLZ`
  - `BHKW / KWK` -> `BK_GAS`
  - `Hybridheizung` -> `BK_GAS`

- `nwg_nutzung -> Nutzung1_ID` (draft mapping)
  - `Büro / Verwaltung` -> `1`
  - `Praxis / Gesundheit` -> `20`
  - `Schule / Kita` -> `33`
  - `Einzelhandel` -> `50`
  - `Gastronomie` -> `53`
  - `Lager / Produktion` -> `51`
  - `Sonstiges NWG` -> `91`

## Critical Columns (must not be empty)

- `ID`
- `Anlass`
- `BedarfVerbrauch`
- `PLZ`
- `Ort`
- `Straße`
- `Hausnr`
- `Baujahr`

If any critical value is missing after transform/default stage, export must fail with validation error.

## Important Partial / Assumed Logic

- Upload fields are currently compressed into `bilderStreams_0..2` filename slots.
- `HZ_Solar` is temporarily derived from `pv_dach` checkbox (proxy, not exact EVEBI semantics).
- Insulation columns (`Dach1_Dämmung`, `Wand1_Dämmung`, `Boden1_Dämmung`) use checkbox-to-value fallback.
- `MISCH` routing currently forced to NWG fallback.

These are intentionally marked as `partial` in `docs/mapping-spec.json`.

## Major Unmapped Areas

- Full consumption blocks:
  - `ETr1_Jahr{1..3}_*`
  - `ETr2_Jahr{1..3}_*`
- Secondary energy carrier details (`ETr2_*` business logic)
- Fernwärme factors/shares:
  - `ETr*_PrimFaktor`
  - `ETr*_Anteil_erneuerbar`
  - `ETr*_Anteil_KWK`
- Multi-usage NWG allocation beyond `Nutzung1_*`

## Implementation Notes

- Use `docs/mapping-spec.json` directly in exporter logic.
- Keep transforms as pure functions (input form data + context -> string/number for target column).
- Emit `export_warnings` for all `partial`, `defaulted`, and `unmapped` columns used during row generation.
- Revisit mapping when client confirms:
  - consumption data collection model,
  - MISCH export policy,
  - exact handling of uploads for EVEBI import.
