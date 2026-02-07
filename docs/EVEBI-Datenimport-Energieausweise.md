# EVEBI - Datenimport Energieausweise: Gebaeudehuelle (Field Reference Extract)

Source (online): `https://hilfe.evebi.de/latest/EVEBI%20-%20Module/EVEBI%20-%20Datenimport%20Energieausweise/#gebaudehulle`

Retrieved: 2026-02-07

This repository stores a **compressed reference extract** (not a full mirror) to help us implement field mapping and CSV import/export logic.
For full details, examples, and the complete enum lists, refer to the original documentation above.

## CSV Basics

From the EVEBI documentation:

- Encoding: UTF-8
- Decimal separator: `,` (comma)
- Field delimiter: `;` (semicolon)

## Gebaeudehuelle (Building Envelope): Indexed Groups

EVEBI models envelope components as **indexed groups**. You can add more entries by incrementing the index:

- `Boden1`, `Boden2`, `Boden3`, ...
- `Dach1`, `Dach2`, ...
- `Wand1`, `Wand2`, ...
- `Fenster1`, `Fenster2`, ...

Below is the minimal set of fields we care about for mapping our form to EVEBI import/export. Field names are kept **exactly** as shown in EVEBI docs (incl. umlauts like `Fläche`, `Dämmung`).

### BodenN (floor / basement / ground contact)

Typical fields for `Boden1`:

- `Boden1`: label/name (e.g. "Kellerdecke")
- `Boden1_massiv`: construction enum, e.g. `kb_Massiv`, `kb_Holz`, `kb_Stahlbeton`
- `Boden1_Kellerdecke`: transition to unheated basement present: `0`/`1` (otherwise: ground)
- `Boden1_Fläche`: area (m², outside edges)
- `Boden1_U-Wert`: U-value (W/(m²K)); if omitted, EVEBI derives it from catalog (building type + year + insulation)
- `Boden1_Dämmung`: retrofit insulation thickness (cm)

### DachN (roof / ceiling)

Typical fields for `Dach1`:

- `Dach1`: label/name
- `Dach1_massiv`: `0` = wood beam ceiling, `1` = massive ceiling
- `Dach1_Geschossdecke`: transition to unheated attic present (otherwise: outside)
- `Dach1_Fläche`: area (m², outside edges)
- `Dach1_U-Wert`: U-value (W/(m²K)); if omitted EVEBI derives it
- `Dach1_Dämmung`: retrofit insulation thickness (cm)

### WandN (wall)

Typical fields for `Wand1`:

- `Wand1`: label/name (e.g. "Außenwand")
- `Wand1_massiv`: wall construction enum (`kb_*` values; EVEBI lists a lot of variants including thickness buckets and Fachwerk)
- `Wand1_Fläche`: net area (m², without windows; from top of floor to top of top ceiling)
- `Wand1_U-Wert`: U-value (W/(m²K)); if omitted EVEBI derives it
- `Wand1_Dämmung`: retrofit insulation thickness (cm)

### FensterN (windows / doors)

Typical fields for `Fenster1`:

- `Fenster1`: label/name
- `Fenster1_Art`: type enum `fb_*` (wood/plastic/alu, double/triple glazing variants, doors, passive-house, ...)
- `Fenster1_Fläche`: area (m², incl. frame); if omitted EVEBI estimates it
- `Fenster1_U-Wert`: Uw (W/(m²K)); if omitted EVEBI derives it based on `Fenster1_Art`
- `Fenster1_Ausrichtung`: orientation in degrees; EVEBI docs mention typical values `0`/`90`/`180`/`270` with a default if omitted
- `Fenster1_Baujahr`: year of last replacement

## Notes For Our Form Mapping

- WG Bedarfsausweis (Wohngebaeude Bedarf) uses the most detailed envelope data; expect to map wizard answers to `Wand1_massiv` / `Fenster1_Art` etc. (likely via lookup tables).
- The indexed-group approach means we can export **multiple** walls/windows later if our UI moves beyond simplified single-choice inputs.

