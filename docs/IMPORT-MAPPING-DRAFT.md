# EVEBI Import Mapping Draft

## Что скопировано в проект

Источник: `C:\GIT\energyberatung-development\hints-for-import`

Локальная копия в этом репо: `docs/hints-for-import/`

- `docs/hints-for-import/Schnittstellenbeschreibung-Import-Energieausweise.pdf`
- `docs/hints-for-import/EA_Verbrauch_WG.csv`
- `docs/hints-for-import/EA_Verbrauch_WG_Version3 (1).xls`
- `docs/hints-for-import/EA_Verbrauch_NWG.csv`
- `docs/hints-for-import/EA_Verbrauch_NWG.xls`
- `docs/hints-for-import/EA_Verbrauch_NWG_mod.xlsx`

## Что уже понятно по формату импорта

По PDF:
- формат: `CSV`
- разделитель: `;`
- кодировка: `UTF-8` (в тексте указано "UTF-8 ohne BOM")

По шаблонам CSV:
- WG шаблон: `87` колонок (`EA_Verbrauch_WG.csv`)
- NWG шаблон: `97` колонок (`EA_Verbrauch_NWG.csv`)
- общих колонок: `83`
- только WG: `isGebaeudehuelle`, `Wohneinheiten`, `kuehlWfl`, `ETr2_PrimFaktor`
- только NWG: `nichtWohnGeb`, `Nutzung1_ID`, `Nutzung1_Flaeche`, `Nutzung2_ID`, `Nutzung2_Flaeche`, `Nutzung3_ID`, `Nutzung3_Flaeche`, `ETr2_Kuehlen`, `ETr2_Lueften`, `ETr2_Feuchte`, `ETr2_Licht`, `ETr2_ZusatzHz`, `ETr2_Sonst`, `stromAufzugEnthalten`

## Ключевые поля импорта (минимум)

- Идентификация/контекст: `ID`, `Anlass`, `BedarfVerbrauch`, `Datenerhebung`, `Gebäudetyp`
- Адрес: `PLZ`, `Ort`, `Straße`, `Hausnr`
- Базовые данные: `Baujahr`, `Wohnfläche`, `gebaeudeteil`, `Keller_beheizt`
- Техсистема: `baujahrHzErz`, `TW_Solar`, `HZ_Solar`, `TW_WP`, `HZ_WP`, `Fensterlüftung`, `Schachtlüftung`, `L_Mit_WRG`, `L_Ohne_WRG`
- Энерготräger блоки: `ETr1_*` и опционально `ETr2_*` (периоды, объемы, флаги отопления/ГВС и доли)

## Черновой маппинг из текущей формы (прямые соответствия)

- `anlass` -> `Anlass` (нужен enum mapping в EVEBI-коды, например `AG_VERMIETUNG`)
- `ausweisart` -> `BedarfVerbrauch` (`Verbrauchsausweis` -> `V`, `Bedarfsausweis` -> `B`)
- `plz` -> `PLZ`
- `ort` -> `Ort`
- `strasse` -> `Straße`
- `hausnummer` -> `Hausnr`
- `baujahr` -> `Baujahr`
- `wohnflaeche` / `nwg_nettogrundflaeche` -> `Wohnfläche`
- `anzahl_wohneinheiten` -> `Wohneinheiten` (WG)
- `gebaeudeanteil` -> `gebaeudeteil` (нужен mapping в `GT_*`)
- `heizung_baujahr` -> `baujahrHzErz`
- `pv_dach`/доп. solar поля -> возможно в `TW_Solar`/`HZ_Solar` (нужна бизнес-логика)
- `lueftung_type`/`nwg_lueftung` -> `Fensterlüftung`, `Schachtlüftung`, `L_Mit_WRG`, `L_Ohne_WRG` (через rule mapping)
- `upload_*` -> `bilderStreams_0..2` по фиксированному `slot policy v1`:
  - `slot0`: первый файл `upload_heizung_photos`
  - `slot1`: первый файл `upload_fenster_photos`
  - `slot2`: первый файл `upload_daemmung_photos`
  - если файла нет -> пусто

## Что не закрыто текущей формой (или неявно)

- `Datenerhebung` (в форме сейчас не явное поле)
- `ID` (нужен генератор/правило формирования)
- `ETr1_*`, `ETr2_*` полные три периода потребления (часть данных есть, но маппинг и расчет не зафиксированы)
- NWG-специфика: `Nutzung1_ID` и связанные `Nutzung*_Flaeche`
- Флаги типа `nichtWohnGeb`, `isGebaeudehuelle`, `stromAufzugEnthalten`
- Поля первичных факторов/долей Fernwärme (`ETr*_PrimFaktor`, `ETr*_Anteil_*`, `ETr*_isFw`, `ETr*_gebaeudeNahErzeugt`)

## Обязательные решения перед реализацией экспортера

1. Таблица enum mapping (form values -> EVEBI codes):
   `Anlass`, `gebaeudeteil`, `ETr*_Kategorie`, NWG Nutzung ID, и др.
2. Правило генерации `ID` заявки.
3. Формат дат для периодов `ETr*_Jahr*_von/bis` (`dd.mm.yyyy` по spec).
4. Как заполнять `ETr2_*`:
   всегда, только при 2-м энерготрегере, или оставлять пустым.
5. Стратегия по картинкам/файлам:
   на текущем этапе зафиксирована как `slot policy v1` (только имена в `bilderStreams_*`).
6. WG/NWG routing:
   какой шаблон выбирать для `MISCH` (split, приоритет, или 2 файла).

## Следующий шаг (когда будет ТЗ)

Сделать `mapping-spec.json` в этом проекте:
- `targetSchema`: `WG` / `NWG`
- `fieldMap`: `sourceKey -> targetColumn`
- `valueTransforms`: enum/date/number/boolean
- `defaults`: значения по умолчанию для обязательных колонок
- `validation`: pre-export checks с сообщениями ошибок
