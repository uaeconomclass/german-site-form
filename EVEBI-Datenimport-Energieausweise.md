# EVEBI - Datenimport Energieausweise: Gebäudehülle (Reference Extract)

Source (online): `https://hilfe.evebi.de/latest/EVEBI%20-%20Module/EVEBI%20-%20Datenimport%20Energieausweise/#gebaudehulle`

Retrieved: 2026-02-07

This repository stores a **compressed reference extract** (not a full mirror) to help us implement field mapping and CSV import/export logic.
For the full documentation (including complete enum/value lists), always refer to the source link above.

## CSV Basics

- Encoding: UTF-8
- Decimal separator: `,` (comma)
- Field delimiter: `;` (semicolon)

## Abbreviations (as used in EVEBI docs)

- `WG-V`: Verbrauchsausweis Wohngebäude
- `WG-B`: Bedarfsausweis Wohngebäude
- `NWG-V`: Verbrauchsausweis Nichtwohngebäude
- `NWG-B`: Bedarfsausweis Nichtwohngebäude

## Gebäudehülle: Indexed Groups

EVEBI models building-envelope components as **indexed groups**. You can add more entries by incrementing the index:

- `Boden1`, `Boden2`, `Boden3`, ...
- `Dach1`, `Dach2`, ...
- `Wand1`, `Wand2`, ...
- `Fenster1`, `Fenster2`, ...

Notes:

- Field names in the CSV header include umlauts (e.g. `Fläche`, `Dämmung`). Use UTF-8 end-to-end. If you see mojibake like `FlÃ¤che`, your tooling is decoding UTF-8 as ANSI.
- Many `*_U-Wert` fields support being left empty: EVEBI then derives values from its component catalog (depending on building type, year and insulation).

## Field Reference (Gebäudehülle)

### BodenN (e.g. Boden1)

| Field | Meaning | Used in | Default | Example |
|---|---|---|---|---|
| `Boden1` | Label/name of the first basement/floor component | WG-B |  | `Kellerdecke` |
| `Boden1_massiv` | Construction (enum) | WG-B |  | `kb_massiv` |
| `Boden1_Kellerdecke` | Transition to an unheated basement present (otherwise: to soil): `0` no, `1` yes | WG-B |  | `1` |
| `Boden1_Fläche` | Area (outer edges) in m² | WG-B |  | `144` |
| `Boden1_U-Wert` | U-value in W/(m²K); if omitted EVEBI derives it (catalog-based) | WG-B | Formel | `0,194` |
| `Boden1_Dämmung` | Retrofit insulation thickness in cm (insulation layer thickness) | WG-V, WG-B, NWG-V |  | `10` |

`Boden1_massiv` enum subset shown in EVEBI docs:

- `kb_Massiv`: Ziegel-/Hohlsteinkonstruktion
- `kb_Holz`: Holzkonstruktion
- `kb_Stahlbeton`: Stahlbeton

You can add more Boden components by incrementing the index (`Boden2_*`, `Boden3_*`, ...).

### DachN (e.g. Dach1)

| Field | Meaning | Used in | Default | Example |
|---|---|---|---|---|
| `Dach1` | Label/name of the roof/ceiling component | WG-B |  | `Dach` |
| `Dach1_massiv` | `0` = wooden beam ceiling, `1` = massive ceiling | WG-B |  | `1` |
| `Dach1_Geschossdecke` | Transition to unheated attic present (otherwise: to outside): `0` no, `1` yes | WG-B |  | `0` |
| `Dach1_Fläche` | Area (outer edges) in m² | WG-B |  | `73` |
| `Dach1_U-Wert` | U-value in W/(m²K); if omitted EVEBI derives it (catalog-based) | WG-B | Formel | `0,255` |
| `Dach1_Dämmung` | Retrofit insulation thickness in cm | WG-V, WG-B, NWG-V |  | `10` |

You can add more Dach components by incrementing the index (`Dach2_*`, `Dach3_*`, ...).

### WandN (e.g. Wand1)

| Field | Meaning | Used in | Default | Example |
|---|---|---|---|---|
| `Wand1` | Label/name of the wall component | WG-B |  | `Außenwand` |
| `Wand1_massiv` | Wall construction (enum) | WG-B |  | `kb_Massiv` |
| `Wand1_Fläche` | Wall net area in m² (without windows), from top of floor to top of top ceiling | WG-B |  | `100` |
| `Wand1_U-Wert` | U-value in W/(m²K); if omitted EVEBI derives it (catalog-based) | WG-B | Formel | `1` |
| `Wand1_Dämmung` | Retrofit insulation thickness in cm | WG-V, WG-B, NWG-V |  | `5` |

`Wand1_massiv` values shown in EVEBI docs (non-exhaustive list):

- `kb_Massiv`: massive construction
- `kb_Holz`: wooden construction
- `kb_Massiv20bis30`: massive construction between 20 and 30 cm
- `kb_Massivueber30`: massive construction > 30 cm
- `kb_FachwerkLehm`: half-timbering + clay infill
- `kb_FachwerkVollziegel`: half-timbering + solid-brick infill
- `kb_sonstMassbis20`: other massive construction <= 20 cm
- `kb_sonstMass20bis30`: other massive construction between 20 and 30 cm
- `kb_sonstMassueber30`: other massive construction > 30 cm
- `kb_2schalohneDaemm`: double-shell wall without insulation layer
- `kb_2schalohneDaemmueber40`: double-shell wall without insulation layer, thickness > 40 cm
- `kb_2schalohneDaemmbis40`: double-shell wall without insulation layer, thickness <= 40 cm
- `kb_2schalohneDaemmueber70`: double-shell wall without insulation layer, thickness > 70 cm
- `kb_2schalohneDaemmbis70`: double-shell wall without insulation layer, thickness <= 70 cm
- `kb_Massiv10bis20`: massive construction between 10 and 20 cm

You can add more walls by incrementing the index (`Wand2_*`, `Wand3_*`, ...).

### FensterN (e.g. Fenster1)

| Field | Meaning | Used in | Default | Example |
|---|---|---|---|---|
| `Fenster1` | Label/name of the window/door component | WG-B |  | `Fenster` |
| `Fenster1_Art` | Window/door type (enum `fb_*`) | WG-B | Formel | `fb_Holz2fach` |
| `Fenster1_Fläche` | Area in m² including frames; if omitted EVEBI estimates it based on wall/window share (BBSR 2015) | WG-B | Formel | `20` |
| `Fenster1_U-Wert` | Uw in W/(m²K); if omitted EVEBI derives it from `Fenster1_Art` | WG-B | Formel | `1,1` |
| `Fenster1_Ausrichtung` | Orientation: `0` north, `90` east, `180` south, `270` west | WG-B | `90` | `0` |
| `Fenster1_Baujahr` | Year of last replacement | WG-B |  | `2010` |

`Fenster1_Art` values shown in EVEBI docs (non-exhaustive list):

- `fb_HolzEinfach`: single glazing, wood
- `fb_KunststoffEinfach`: single glazing, plastic
- `fb_AluEinfach`: single glazing, alu
- `fb_Holz2fach`: double glazing, wood
- `fb_Holz2fachWSG`: double glazing WSG, wood
- `fb_Kunststoff2fach`: double glazing, plastic
- `fb_Kunststoff2fachWSG`: double glazing WSG, plastic
- `fb_Alu2fach`: double glazing, alu
- `fb_Alu2fachWSG`: double glazing WSG, alu
- `fb_HolzTuer`: door, wood
- `fb_KunststoffTuer`: door, plastic
- `fb_AluTuer`: door, alu
- `fb_Holz3fachWSG`: triple glazing WSG, wood
- `fb_Kunststoff3fachWSG`: triple glazing WSG, plastic
- `fb_Alu3fachWSG`: triple glazing WSG, alu
- `fb_Passivhaus`: passive-house window, triple glazing

You can add more Fenster components by incrementing the index (`Fenster2_*`, `Fenster3_*`, ...).

## Mapping Notes: Our Wizard -> EVEBI (Draft)

Current form keys live in the generated spec (`preview/energieausweis-form.js`) and source JSON (`src/energieausweis-form/spec/*`).

We currently capture **simplified** envelope inputs, so the EVEBI export will need either:

- conservative defaults (leave `*_U-Wert` empty to use EVEBI formula), or
- a lookup table (our option -> EVEBI enum), or
- a future UI extension (ask for areas, insulation thickness, etc.).

### Proposed mapping (what we can already fill)

| Our field | EVEBI field | Notes |
|---|---|---|
| `fenster_baujahr` | `Fenster1_Baujahr` | direct |
| `fenster_vermassung[] (hoehe_m, breite_m)` | `FensterN_Fläche` | either sum into one `Fenster1_Fläche` or create multiple `FensterN` entries per measured window |
| `fenster_type` + `fenster_rahmenmaterial` | `Fenster1_Art` | needs mapping table; if unknown, set `Fenster1_Art` empty and rely on defaults/formula where possible |
| `aussenwand_type` | `Wand1_massiv` | needs mapping table; our UI does not capture thickness buckets, so prefer generic values like `kb_Massiv`/`kb_Holz`/`kb_Fachwerk*` |
| `dachgeschoss` | `Dach1_Geschossdecke` | `Unbeheizt` -> `1`, else `0` (draft inference) |
| `keller_heizstatus` | `Boden1_Kellerdecke` | `unbeheizter Keller` -> `1`, else `0` (draft inference) |

### Gaps (cannot be exported reliably yet)

- Envelope **areas** (`Wand1_Fläche`, `Dach1_Fläche`, `Boden1_Fläche`) are not collected in our wizard (except window measurements in Bedarf).
- Retrofit insulation thickness (`*_Dämmung`) is not collected (we only ask yes/no in some places).
- Wall/window enums (`Wand1_massiv`, `Fenster1_Art`) require a deliberate mapping decision and may need more user input for correctness.

