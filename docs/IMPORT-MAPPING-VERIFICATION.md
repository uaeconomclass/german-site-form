# Import Mapping Verification (Almost-Production)

Sources checked:
- `docs/mapping-spec.json`
- `docs/hints-for-import/EA_Verbrauch_WG.csv`
- `docs/hints-for-import/EA_Verbrauch_NWG.csv`
- `docs/hints-for-import/Schnittstellenbeschreibung-Import-Energieausweise.pdf`
- `docs/hints-for-import/EA_Verbrauch_NWG_mod.xlsx` (`Bezüge_Auswahlliste`)

## Summary

- Total unresolved/uncertain items: **11**
- High: **0**
- Medium: **11**
- Low: **0**
- WG: **6**, NWG: **5**

Severity rules:
- `high`: critical import column is not reliably mapped.
- `medium`: partial assumption mapping.
- `low`: unmapped non-critical.

## High Items (0)

- None

## Medium Items (11)

| Schema | Column | Status | Source | Transform | Default | Why unresolved |
|---|---|---|---|---|---|---|
| NWG | fernKuehlung | partial | nwg_kuehlung\|misch_kuehlung | cooling_district_01 | 0 | Mapped with assumptions; business rule not fully confirmed. |
| NWG | Gebäudetyp | partial | gebaeudetyp | map_gebaeudetyp_to_v_or_g | V | Mapped with assumptions; business rule not fully confirmed. |
| NWG | HZ_Solar | partial | pv_dach\|misch_pv_dach | checkbox_01 | 0 | Mapped with assumptions; business rule not fully confirmed. |
| NWG | passiveKuehlung | partial | nwg_kuehlung\|misch_kuehlung | cooling_passive_01 | 0 | Mapped with assumptions; business rule not fully confirmed. |
| NWG | waermeKuehlung | partial | nwg_kuehlung\|misch_kuehlung | cooling_thermal_01 | 0 | Mapped with assumptions; business rule not fully confirmed. |
| WG | fernKuehlung | partial | nwg_kuehlung\|misch_kuehlung | cooling_district_01 | 0 | Mapped with assumptions; business rule not fully confirmed. |
| WG | Gebäudetyp | partial | gebaeudetyp | map_gebaeudetyp_to_v_or_g | V | Mapped with assumptions; business rule not fully confirmed. |
| WG | HZ_Solar | partial | pv_dach\|misch_pv_dach | checkbox_01 | 0 | Mapped with assumptions; business rule not fully confirmed. |
| WG | isGebaeudehuelle | partial | gebaeudetyp | wg_is_gebaeudehuelle_01 | 1 | Mapped with assumptions; business rule not fully confirmed. |
| WG | passiveKuehlung | partial | nwg_kuehlung\|misch_kuehlung | cooling_passive_01 | 0 | Mapped with assumptions; business rule not fully confirmed. |
| WG | waermeKuehlung | partial | nwg_kuehlung\|misch_kuehlung | cooling_thermal_01 | 0 | Mapped with assumptions; business rule not fully confirmed. |

## Low Items (0)

- None

## Interpretation

- Main remaining items are assumption-based mappings (`partial`), not missing form fields.
- ETr1/ETr2 periodized fields are represented in form schema and mapped in `docs/mapping-spec.json`.

## Artifact

- Machine-readable issue list: `docs/mapping-verification.json`
