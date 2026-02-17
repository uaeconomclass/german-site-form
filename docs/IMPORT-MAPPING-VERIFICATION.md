# Import Mapping Verification (Almost-Production)

Sources checked:
- `docs/mapping-spec.json`
- `docs/hints-for-import/EA_Verbrauch_WG.csv`
- `docs/hints-for-import/EA_Verbrauch_NWG.csv`
- `docs/hints-for-import/Schnittstellenbeschreibung-Import-Energieausweise.pdf`
- `docs/hints-for-import/EA_Verbrauch_NWG_mod.xlsx` (`Bez?ge_Auswahlliste`)

## Summary

- Total unresolved/uncertain items: **100**
- High: **0**
- Medium: **29**
- Low: **71**
- WG: **50**, NWG: **50**

Severity rules:
- `high`: critical import column is not reliably mapped.
- `medium`: partial assumption mapping.
- `low`: unmapped non-critical.

## High Items (0)

- None

## Medium Items (29)

| Schema | Column | Status | Source | Transform | Default | PDF ref found | Why unresolved |
|---|---|---|---|---|---|---|---|
| NWG | Boden1_Dämmung | partial | waermedaemmung_kellerdecke\|waermedaemmung_kelleraussenwand | insulation_checkbox_to_cm_or_0 | 0 | no | Mapped with assumptions; business rule not fully confirmed. |
| NWG | Dach1_Dämmung | partial | waermedaemmung_dachgeschoss\|waermedaemmung_oberste_geschossdecke | insulation_checkbox_to_cm_or_0 | 0 | no | Mapped with assumptions; business rule not fully confirmed. |
| NWG | ETr1_Kategorie | partial | heizung_waermeerzeuger\|misch_heizung_waermeerzeuger | map_heating_to_bk_code | BK_GAS | yes | Mapped with assumptions; business rule not fully confirmed. |
| NWG | ETr2_Licht | partial | nwg_beleuchtung | nwg_etr2_licht_01 | 1 | no | Mapped with assumptions; business rule not fully confirmed. |
| NWG | Gebäudetyp | partial | gebaeudetyp | map_gebaeudetyp_to_v_or_g | V | no | Mapped with assumptions; business rule not fully confirmed. |
| NWG | HZ_Solar | partial | pv_dach\|misch_pv_dach | checkbox_01 | 0 | yes | Mapped with assumptions; business rule not fully confirmed. |
| NWG | Modernisierung | partial | anlass | modernisierung_year_or_0 | 0 | yes | Mapped with assumptions; business rule not fully confirmed. |
| NWG | Nutzung1_ID | partial | nwg_nutzung | map_nutzung_to_id | 1 | yes | Mapped with assumptions; business rule not fully confirmed. |
| NWG | Wand1_Dämmung | partial | waermedaemmung_aussenwand | insulation_checkbox_to_cm_or_0 | 0 | no | Mapped with assumptions; business rule not fully confirmed. |
| NWG | bilderStreams_0 | partial | upload_export.slot0 | basename_or_empty |  | no | Mapped with assumptions; business rule not fully confirmed. |
| NWG | bilderStreams_1 | partial | upload_export.slot1 | basename_or_empty |  | no | Mapped with assumptions; business rule not fully confirmed. |
| NWG | bilderStreams_2 | partial | upload_export.slot2 | basename_or_empty |  | no | Mapped with assumptions; business rule not fully confirmed. |
| NWG | fernKuehlung | partial | nwg_kuehlung\|misch_kuehlung | cooling_district_01 | 0 | no | Mapped with assumptions; business rule not fully confirmed. |
| NWG | passiveKuehlung | partial | nwg_kuehlung\|misch_kuehlung | cooling_passive_01 | 0 | no | Mapped with assumptions; business rule not fully confirmed. |
| NWG | waermeKuehlung | partial | nwg_kuehlung\|misch_kuehlung | cooling_thermal_01 | 0 | no | Mapped with assumptions; business rule not fully confirmed. |
| WG | Boden1_Dämmung | partial | waermedaemmung_kellerdecke\|waermedaemmung_kelleraussenwand | insulation_checkbox_to_cm_or_0 | 0 | no | Mapped with assumptions; business rule not fully confirmed. |
| WG | Dach1_Dämmung | partial | waermedaemmung_dachgeschoss\|waermedaemmung_oberste_geschossdecke | insulation_checkbox_to_cm_or_0 | 0 | no | Mapped with assumptions; business rule not fully confirmed. |
| WG | ETr1_Kategorie | partial | heizung_waermeerzeuger\|misch_heizung_waermeerzeuger | map_heating_to_bk_code | BK_GAS | yes | Mapped with assumptions; business rule not fully confirmed. |
| WG | Gebäudetyp | partial | gebaeudetyp | map_gebaeudetyp_to_v_or_g | V | no | Mapped with assumptions; business rule not fully confirmed. |
| WG | HZ_Solar | partial | pv_dach\|misch_pv_dach | checkbox_01 | 0 | yes | Mapped with assumptions; business rule not fully confirmed. |
| WG | Modernisierung | partial | anlass | modernisierung_year_or_0 | 0 | yes | Mapped with assumptions; business rule not fully confirmed. |
| WG | Wand1_Dämmung | partial | waermedaemmung_aussenwand | insulation_checkbox_to_cm_or_0 | 0 | no | Mapped with assumptions; business rule not fully confirmed. |
| WG | bilderStreams_0 | partial | upload_export.slot0 | basename_or_empty |  | no | Mapped with assumptions; business rule not fully confirmed. |
| WG | bilderStreams_1 | partial | upload_export.slot1 | basename_or_empty |  | no | Mapped with assumptions; business rule not fully confirmed. |
| WG | bilderStreams_2 | partial | upload_export.slot2 | basename_or_empty |  | no | Mapped with assumptions; business rule not fully confirmed. |
| WG | fernKuehlung | partial | nwg_kuehlung\|misch_kuehlung | cooling_district_01 | 0 | no | Mapped with assumptions; business rule not fully confirmed. |
| WG | isGebaeudehuelle | partial | gebaeudetyp | wg_is_gebaeudehuelle_01 | 1 | yes | Mapped with assumptions; business rule not fully confirmed. |
| WG | passiveKuehlung | partial | nwg_kuehlung\|misch_kuehlung | cooling_passive_01 | 0 | no | Mapped with assumptions; business rule not fully confirmed. |
| WG | waermeKuehlung | partial | nwg_kuehlung\|misch_kuehlung | cooling_thermal_01 | 0 | no | Mapped with assumptions; business rule not fully confirmed. |

## Low Items (71)

| Schema | Column | Status | Source | Transform | Default | PDF ref found | Why unresolved |
|---|---|---|---|---|---|---|---|
| NWG | ETr1_Jahr1_Leerstand | unmapped | verbrauch.period1.vacancy_pct | percent_0_100 | 0 | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr1_Menge | unmapped | verbrauch.period1.total | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr1_Menge_TWW | unmapped | verbrauch.period1.tww | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr1_bis | unmapped | verbrauch.period1.to | date_dd_mm_yyyy |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr1_von | unmapped | verbrauch.period1.from | date_dd_mm_yyyy |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr2_Leerstand | unmapped | verbrauch.period2.vacancy_pct | percent_0_100 | 0 | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr2_Menge | unmapped | verbrauch.period2.total | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr2_Menge_TWW | unmapped | verbrauch.period2.tww | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr2_bis | unmapped | verbrauch.period2.to | date_dd_mm_yyyy |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr2_von | unmapped | verbrauch.period2.from | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr3_Leerstand | unmapped | verbrauch.period3.vacancy_pct | percent_0_100 | 0 | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr3_Menge | unmapped | verbrauch.period3.total | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr3_Menge_TWW | unmapped | verbrauch.period3.tww | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr3_bis | unmapped | verbrauch.period3.to | date_dd_mm_yyyy |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_Jahr3_von | unmapped | verbrauch.period3.from | date_dd_mm_yyyy |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr1_PrimFaktor | unmapped | fernwaerme.primfaktor_etr1 | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Heizung | unmapped | etr2.heizung | bool_01 | 0 | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr1_Leerstand | unmapped | etr2.period1.vacancy_pct | percent_0_100 |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr1_Menge | unmapped | etr2.period1.total | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr1_Menge_TWW | unmapped | etr2.period1.tww | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr1_bis | unmapped | etr2.period1.to | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr1_von | unmapped | etr2.period1.from | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr2_Leerstand | unmapped | etr2.period2.vacancy_pct | percent_0_100 |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr2_Menge | unmapped | etr2.period2.total | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr2_Menge_TWW | unmapped | etr2.period2.tww | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr2_bis | unmapped | etr2.period2.to | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr2_von | unmapped | etr2.period2.from | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr3_Leerstand | unmapped | etr2.period3.vacancy_pct | percent_0_100 |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr3_Menge | unmapped | etr2.period3.total | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr3_Menge_TWW | unmapped | etr2.period3.tww | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr3_bis | unmapped | etr2.period3.to | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Jahr3_von | unmapped | etr2.period3.from | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_Kategorie | unmapped | etr2.kategorie | map_to_bk_code |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | ETr2_TWW | unmapped | etr2.tww | bool_01 |  | no | No source field in current form; export depends on placeholder/default/external data. |
| NWG | Straße | unmapped |  | constant |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr1_Leerstand | unmapped | verbrauch.period1.vacancy_pct | percent_0_100 | 0 | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr1_Menge | unmapped | verbrauch.period1.total | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr1_Menge_TWW | unmapped | verbrauch.period1.tww | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr1_bis | unmapped | verbrauch.period1.to | date_dd_mm_yyyy |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr1_von | unmapped | verbrauch.period1.from | date_dd_mm_yyyy |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr2_Leerstand | unmapped | verbrauch.period2.vacancy_pct | percent_0_100 | 0 | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr2_Menge | unmapped | verbrauch.period2.total | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr2_Menge_TWW | unmapped | verbrauch.period2.tww | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr2_bis | unmapped | verbrauch.period2.to | date_dd_mm_yyyy |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr2_von | unmapped | verbrauch.period2.from | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr3_Leerstand | unmapped | verbrauch.period3.vacancy_pct | percent_0_100 | 0 | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr3_Menge | unmapped | verbrauch.period3.total | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr3_Menge_TWW | unmapped | verbrauch.period3.tww | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr3_bis | unmapped | verbrauch.period3.to | date_dd_mm_yyyy |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_Jahr3_von | unmapped | verbrauch.period3.from | date_dd_mm_yyyy |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr1_PrimFaktor | unmapped | fernwaerme.primfaktor_etr1 | number_locale_de |  | yes | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Heizung | unmapped | etr2.heizung | bool_01 | 0 | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr1_Leerstand | unmapped | etr2.period1.vacancy_pct | percent_0_100 |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr1_Menge | unmapped | etr2.period1.total | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr1_Menge_TWW | unmapped | etr2.period1.tww | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr1_bis | unmapped | etr2.period1.to | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr1_von | unmapped | etr2.period1.from | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr2_Leerstand | unmapped | etr2.period2.vacancy_pct | percent_0_100 |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr2_Menge | unmapped | etr2.period2.total | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr2_Menge_TWW | unmapped | etr2.period2.tww | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr2_bis | unmapped | etr2.period2.to | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr2_von | unmapped | etr2.period2.from | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr3_Leerstand | unmapped | etr2.period3.vacancy_pct | percent_0_100 |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr3_Menge | unmapped | etr2.period3.total | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr3_Menge_TWW | unmapped | etr2.period3.tww | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr3_bis | unmapped | etr2.period3.to | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Jahr3_von | unmapped | etr2.period3.from | date_dd_mm_yyyy |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_Kategorie | unmapped | etr2.kategorie | map_to_bk_code |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_PrimFaktor | unmapped | fernwaerme.etr2_primfaktor | number_locale_de |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | ETr2_TWW | unmapped | etr2.tww | bool_01 |  | no | No source field in current form; export depends on placeholder/default/external data. |
| WG | Straße | unmapped |  | constant |  | no | No source field in current form; export depends on placeholder/default/external data. |

## Interpretation

- Structure coverage is complete; unresolved items are semantic/business-level.
- Main gap remains `ETr1_*`/`ETr2_*` periodized consumption data not collected explicitly in form fields.
- `MISCH` policy is still fallback-based and should be validated with import expectations.
- `bilderStreams_*` mapping still needs final decision: filename-only vs integrated file pipeline.

## Artifact

- Machine-readable issue list: `docs/mapping-verification.json`
