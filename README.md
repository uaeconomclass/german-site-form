# Форма для німецького сайту

У цій папці ми готуємо/реалізовуємо веб-форму для німецького сайту на основі наданих документів (вимоги, текст, структура, поля, підказки тощо).

## Вихідні матеріали

Поточні файли-вимоги в корені папки:

- 06.02.26 Energieberater Erklärung.pdf
- 06.02.26 Energieberater Erklärung.docx

> Якщо зʼявляться нові версії документів, додаємо їх поруч і фіксуємо дату/версію в цьому README.

## Документація

| Файл | Опис |
|------|------|
| **[FORM-SPEC.md](FORM-SPEC.md)** | Повна специфікація форми: поля, логіка, валідації, SMART-система, каталог ілюстрацій |
| **[TOOLTIPS-DE.md](TOOLTIPS-DE.md)** | Всі tooltip/info-popup тексти німецькою (дослівно з DOCX), готові до UI |
| **[assets/images/](assets/images/)** | 20 ілюстрацій-підказок: стіни, вікна, котли, вентиляція, інфографіка |
| **[EVEBI-Datenimport-Energieausweise.md](EVEBI-Datenimport-Energieausweise.md)** | Reference extract по EVEBI імпорту (секція Gebäudehülle) для майбутнього мапінгу/експорту |
| **[UI-EFFICIENCY-BAR-SPEC.md](UI-EFFICIENCY-BAR-SPEC.md)** | UI-spec для шкали енергоефективності A+…H (дві мітки: Jetzt/Potenz) |

## Source Of Truth (що редагувати)

- Специфікація форми (кроки/поля/опції/підказки): `src/energieausweis-form/spec/`
- Рантайм (рендер/валідація/стан/збереження): `src/energieausweis-form/runtime/*.js`
- Стилі: `src/energieausweis-form/style.css`

Згенероване (не редагувати руками):
- `preview/` генерується з `src/` через `tools/build-preview.ps1`
- `docs/` генерується для GitHub Pages через `tools/build-docs.ps1`

## Білд і перегляд

Зібрати превʼю і Pages-версію (оновлює `preview/` і `docs/`):

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/build-docs.ps1
```

Локально:
- `docs/index.html`
- `docs/preview/energieausweis-form.html`

Онлайн (GitHub Pages):
- `https://uaeconomclass.github.io/german-site-form/preview/energieausweis-form.html`

## Збереження (localStorage)

Кнопка **Speichern** зберігає чернетку у браузері в `localStorage`.
Ключ **привʼязаний до URL path**, тобто різні сторінки не конфліктують між собою:

- `ea_wizard_draft_v1:/preview/energieausweis-form.html`


## Що маємо зробити

- [x] Зібрати перелік полів і секцій форми з документів.
- [x] Визначити валідації (обовʼязковість, формати, діапазони, залежності між полями).
- [x] Підготувати тексти (лейбли, підказки, помилки) німецькою відповідно до документів.
- [x] Витягнути та каталогізувати ілюстрації з DOCX.
- [x] Зібрати повні tooltip-тексти німецькою (Erkennungsmerkmale, визначення, юр. disclaimers).
- [ ] Узгодити формат результату (куди відправляються дані: email/CRM/API).
- [ ] Додати контактні поля замовника (Imʼя, Email, Телефон) — потрібне уточнення.
- [ ] Реалізувати форму в коді.

## Архітектура форми (стислий огляд)

```
КРОК 1: Anlass (привід) + Ausweisart (тип паспорту)
   │
КРОК 2: Gebäudetyp (тип будівлі)
   ├── WG (житлова) → підтип → дані → стіни → вікна → підвал → опалення → ГВП → вентиляція → uploads
   ├── NWG (нежитлова) → призначення → геометрія → стіни (спрощ.) → вент/клімат → опалення → uploads
   └── Mischgebäude → Relevanz-Check → два блоки (житло + комерція) → uploads

SMART: автопропозиції за Baujahr + Nutzung
Plausibilitätscheck: попередження при нелогічних комбінаціях
```

## Важливі нотатки

- **Два типи паспортів** → різні upload-вимоги:
  - Verbrauchsausweis: потрібні Heizkostenabrechnungen + Verbrauchsdaten
  - Bedarfsausweis: потрібні плани, фото, геометричні дані
- Специфікація повна, але **формат відправки даних** ще не узгоджений (email/CRM/API)
- **Контактні поля замовника** — не описані в DOCX, потребують обговорення
- Форма має бути **адаптивною** (мобільна версія з upload з телефону)
- **Юридичні disclaimers** (GEG) обовʼязкові в кількох місцях — тексти в `TOOLTIPS-DE.md`
- SMART-система потребує **маппінг-таблицю** Baujahr → типові значення для коду
