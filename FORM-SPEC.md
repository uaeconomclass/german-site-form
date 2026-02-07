# Специфікація форми: Energieausweis (Енергетичний паспорт)

> Цей документ — повний текстовий опис веб-форми для замовлення енергетичного паспорту будівлі в Німеччині.
> Джерело: `06.02.26 Energieberater Erklärung.docx`
> Мова інтерфейсу: **німецька (DE)**

---

## Каталог ілюстрацій

Документ містить 20 ілюстрацій, витягнутих з DOCX. Вони розсортовані по папках `assets/images/`.
Всі ілюстрації — **функціональні підказки** для користувача (допомагають ідентифікувати обладнання та матеріали).

### Опалення — `assets/images/heizung/`
Використовуються у секції **A.7.2 Kesseltyp** як візуальні підказки при виборі типу котла.

| Файл | Що зображено | Де використовується |
|------|-------------|---------------------|
| `konstanttemperaturkessel.png` | Схема котла з подачею 70–90°C, зворотом 55–70°C | Tooltip/картка при виборі "Konstanttemperatur" |
| `niedertemperaturkessel.png` | Схема котла з подачею 55–75°C, зворотом 45–60°C | Tooltip/картка при виборі "Niedertemperatur" |
| `brennwertkessel.png` | Схема конденсаційного котла, подача 45–65°C, зворот 35–40°C | Tooltip/картка при виборі "Brennwert" |
| `waermepumpe.png` | Тепловий насос з зовнішнім блоком, подача 30–45°C, зворот 27–35°C | Tooltip/картка при виборі "Wärmepumpe" |

### Вентиляція — `assets/images/lueftung/`
Використовуються у секціях **A.9 Lüftung** (WG) та **B.4.1 Lüftung** (NWG) як візуальні підказки.

| Файл | Що зображено | Де використовується |
|------|-------------|---------------------|
| `fensterlueftung.png` | Схема: холодне повітря через вікно, тепле виходить назовні | Tooltip при виборі "Fensterlüftung" |
| `mechanische-abluft.png` | Схема: витяжний вентилятор + канал через дах | Tooltip при виборі "Mechanische Abluft" |
| `zentrale-lueftungsanlage.png` | Детальна схема будинку: Zuluft/Abluft/Wärmetauscher, кольорові потоки | Tooltip при виборі "Zentrale WRG" |
| `dezentrale-lueftungsanlage.png` | Схема будинку з окремими рекуператорами в кожній кімнаті | Tooltip при виборі "Dezentrale WRG" |

### Типи стін — `assets/images/aussenwand/`
Використовуються у секціях **A.3 Außenwand** (WG) та **B.3.1 Außenwand** (NWG) як фото-підказки для ідентифікації матеріалу.

| Файл | Що зображено | Де використовується |
|------|-------------|---------------------|
| `fachwerk.png` | Ілюстрація фахверкової стіни (дерев'яний каркас + заповнення) | Tooltip при виборі "Fachwerk" |
| `vollziegel.png` | Фото повноцілої червоної цегли | Tooltip при виборі "Vollziegel / Naturstein" |
| `hohlblockstein-bims.png` | Фото пустотілого блоку з бімсу (сірий, 4 порожнини) | Tooltip при виборі "Hohlblock / Bims" |
| `porenbeton-gasbeton.png` | Фото білих блоків газобетону різних розмірів | Tooltip при виборі "Porenbeton / Gasbeton" |
| `ziegel-hochlochziegel.png` | Фото поризованої цегли (оранжева, з вертикальними порожнинами) | Tooltip при виборі "Ziegel" |
| `stahlbeton.png` | Фото залізобетонного блоку в розрізі (видно арматуру) | Tooltip при виборі "Stahlbeton" |
| `wdvs-querschnitt.png` | Фото WDVS в розрізі: цегла → клей → утеплювач → армування → штукатурка | Tooltip при виборі "WDVS vorhanden" |

### Вікна — `assets/images/fenster/`
Використовуються у секції **A.4 Fenster** як візуальні підказки для ідентифікації типу скління та обмірів.

| Файл | Що зображено | Де використовується |
|------|-------------|---------------------|
| `feuertest-2fach.png` | Тест запальничкою: 2 відображення полум'я = двокамерний склопакет | Підказка-мнемоніка для Wärmeschutzglas (2x) |
| `feuertest-3fach.png` | Тест запальничкою: 3 відображення полум'я = трикамерний склопакет | Підказка-мнемоніка для 3-fach Wärmeschutzglas |
| `vermassung-fenster.png` | Схема обмірів вікна: Lichte Höhe + 3cm, Lichte Breite + 3cm | Підказка у полі "Fenster-Vermassung" (Bedarfsausweis) |

### Інфографіка — `assets/images/infografik/`
Загальні довідкові ілюстрації, які можна показувати як окремі блоки на формі або окремій сторінці.

| Файл | Що зображено | Де використовується |
|------|-------------|---------------------|
| `relevanz-check-flowchart.png` | Блок-схема класифікації будівлі: Wohnen → Gewerbe → Gewerbeanteil % → складна техніка → результат (WG/NWG/Misch) | Секція **C.1 Relevanz-Check** (Mischgebäude). Може виводитись як інфографіка поряд з формою |
| `aussenwand-materialien-epochen.png` | Велика інфографіка: матеріали стін по епохах — від Fachwerk (до 1900) через Bims/Ziegel (1945–1980) до WDVS/Hochlochziegel (після 1980) | Секція **A.3 Außenwand**. Може виводитись як довідкове зображення поряд з dropdown вибору стіни, або як окрема довідка |

---

## Загальна архітектура форми

Форма — це **багатокроковий wizard** (покрокова форма), де кожен наступний крок залежить від відповідей на попередніх.
Головний розгалужувач — **тип будівлі** (Wohngebäude / Nichtwohngebäude / Mischgebäude),
від якого залежить ~60% полів.

**Ключові гілки:**
- **WG** (Wohngebäude) — житловий будинок
- **NWG** (Nichtwohngebäude) — нежитлова будівля
- **Mischgebäude** — змішана будівля (житло + комерція)

**Типи енергетичних паспортів:**
- **Verbrauchsausweis** — на основі фактичного споживання (простіший)
- **Bedarfsausweis** — на основі розрахунку потреб (детальніший, більше полів)

---

## КРОК 1 — Anlass & Ausweisart (Привід та тип паспорту)

> Показується всім. Це перший крок.

### 1.1 Anlass (Привід)
- **Тип поля:** Radio / Select
- **Варіанти:**
  - `Vermietung` — оренда
  - `Verkauf` — продаж
  - `Sonstiges` — інше
  - `Neubau` — нове будівництво *(видимий ТІЛЬКИ якщо обрано Bedarfsausweis)*
  - `Modernisierung` — модернізація *(видимий ТІЛЬКИ якщо обрано Bedarfsausweis)*
- **Валідація:** обов'язкове
- **Логіка:**
  - Якщо Verbrauchsausweis → Neubau та Modernisierung **недоступні**
  - Якщо Bedarfsausweis → Neubau та Modernisierung **з'являються**
- **Підказка:** *„Vermietung, Verkauf oder sonstiger Zweck. Für einen Verbrauchsausweis sind die Anlässe Neubau oder Modernisierung nicht zulässig."*

### 1.2 Ausweisart (Тип паспорту)
- **Тип поля:** Radio / Select
- **Варіанти:**
  - `Verbrauchsausweis` — паспорт за споживанням
  - `Bedarfsausweis` — паспорт за потребою
  - `weiß ich nicht` — не знаю
- **Валідація:** обов'язкове
- **Логіка:** Якщо NWG + Bedarfsausweis → пізніше активуються обов'язкові поля Lüftung/Kühlung

---

## КРОК 2 — Gebäude-Stammdaten (Основні дані будівлі)

> Це головний розгалужувач форми.

### 2.1 Gebäudetyp (Тип будівлі)
- **Тип поля:** Radio з іконками
- **Варіанти:**
  - `Wohngebäude` (WG) — житловий
  - `Nichtwohngebäude` (NWG) — нежитловий
  - `Mischgebäude` — змішаний (житло + комерція)
- **Валідація:** обов'язкове
- **Підказка:** *„Der Energieausweis wird grundsätzlich für das gesamte Gebäude oder den kompletten Wohnteil eines Mischgebäudes erstellt. Eine Ausstellung für einzelne Wohnungen oder Teilflächen ist nicht möglich."*

---

## ГІЛКА A: Wohngebäude (WG) — Житлова будівля

> Показується ТІЛЬКИ якщо Gebäudetyp = Wohngebäude

### A.1 Підтип будівлі
- **Тип поля:** Radio / Select
- **Варіанти:**
  - `Einfamilienhaus (EFH)` — одноквартирний
  - `Zweifamilienhaus (ZFH)` — двоквартирний
  - `Mehrfamilienhaus (MFH)` — багатоквартирний
  - `Reihenhaus / Doppelhaushälfte` — рядний / половина подвійного

### A.2 Базові дані (з'являються після обрання підтипу)
| Поле | Тип | Обов'язкове | Примітка |
|------|-----|-------------|----------|
| Baujahr Gebäude (Рік будівництва) | Number | Так | Якщо < 1977 → автопідказка |
| Anzahl Wohneinheiten (К-сть квартир) | Number | Так | |
| Wohnfläche (Житлова площа, м²) | Number | Так | Див. визначення нижче |
| Nutzfläche (Корисна площа, м²) | Number | Так | Див. визначення нижче |
| PLZ (Поштовий індекс) | Text (5 цифр) | Так | |
| Ort (Місто) | Text | Так | |

**Автопідказка при Baujahr < 1977:**
*„Gebäude dieser Bauzeit haben häufig keinen ausreichenden Wärmeschutz."*

**Визначення Wohnfläche:**
*„Die Wohnfläche umfasst alle beheizten Räume, die dem Wohnen dienen (z. B. Wohnzimmer, Schlafzimmer, Küche, Bad, Flur). Nicht zur Wohnfläche zählen unbeheizte Keller, Garagen, Dachräume ohne Heizung sowie Balkone, Terrassen und sonstige Außenflächen."*

**Визначення Nutzfläche:**
*„Die beheizte Nutzfläche umfasst die Wohnfläche sowie zusätzlich beheizte Räume innerhalb der thermischen Gebäudehülle. Beispiel: Wohnfläche 120 m² + beheizter Hobbyraum im Keller 20 m² + beheiztes Büro 15 m² = 155 m²."*

### A.3 Gebäudehülle — Außenwand (Зовнішня стіна)
- **Тип поля:** Dropdown / Select
- **Ілюстрації:** Кожен варіант супроводжується фото матеріалу з `assets/images/aussenwand/`.
  Додатково поряд можна показати загальну інфографіку `assets/images/infografik/aussenwand-materialien-epochen.png` (матеріали по епохах).
- **Варіанти (з детальними описами для tooltip/інфопопапу):**

| Значення | Опис (DE) | Ілюстрація |
|----------|-----------|------------|
| `Fachwerk` | Fachwerkbauten — трагова дерев'яна конструкція з заповненням. Типово для будівель до ~1900 р. | `aussenwand/fachwerk.png` |
| `Vollziegel / Naturstein` | Масивна кладка з природного каменю або повноцілої цегли. Типово для будівель до ~1918 р. | `aussenwand/vollziegel.png` |
| `Hohlblock / Bims` | Пустотілі блоки з бімсу/легкого бетону. Типово ~1919–1960-ті рр. | `aussenwand/hohlblockstein-bims.png` |
| `Kalksandstein` | Силікатна цегла — білий/світло-сірий, дуже щільний. Типово з ~1960 р. | *(немає окремої ілюстрації — схожий на porenbeton, білий)* |
| `Ziegel` | Обпалена цегла — червона/оранжева. Типово з ~1950 р. | `aussenwand/ziegel-hochlochziegel.png` |
| `Porenbeton / Gasbeton` | Пористий бетон — білий, дуже легкий. Типово з ~1980 р. | `aussenwand/porenbeton-gasbeton.png` |
| `Stahlbeton` | Залізобетон — сірий, дуже щільний. З ~1950 р. | `aussenwand/stahlbeton.png` |
| `WDVS vorhanden` | Є система утеплення фасаду (Wärmedämmverbundsystem). З ~1975/1980 р. | `aussenwand/wdvs-querschnitt.png` |
| `unbekannt` | Невідомо | — |

> Кожен варіант має розгорнутий опис з ознаками розпізнавання (матеріал, колір, роки, поведінка при свердлінні, колір пилу тощо). Ці описи показуються як tooltip або інфо-попап для допомоги користувачу ідентифікувати матеріал стіни.
> Фото матеріалу показується поряд з описом у tooltip або як мініатюра в dropdown.

### A.4 Fenster (Вікна)
- **Тип поля:** Dropdown / Select
- **Ілюстрації:** Для визначення кількості камер — тест запальничкою з `assets/images/fenster/`.
- **Варіанти:**

| Значення | Типовий рік | U-значення |
|----------|-------------|------------|
| `Einfachverglasung` (одинарне скло) | до ~1978 | UG: 5–6 W/m²K |
| `Verbundfenster` (здвоєне вікно) | ~1950–1985 | — |
| `Kastenfenster` (коробчасте вікно) | до ~1978 | — |
| `Isolierglas alt` (старе ізоскло, 2x) | ~1978–1994 | UG: 2,5–3 W/m²K |
| `Wärmeschutzglas` (теплозахисне, 2x) | ~1995–2010 | UG: 1–1,3 W/m²K |
| `3-fach Wärmeschutzglas` (3x) | з ~2010 | UG: 0,5–0,7 W/m²K |

**Підказка-мнемоніка (з ілюстраціями):**
*„Farbiges Spiegelbild = Wärmeschutz. Spiegelbilder zählen = Anzahl Scheiben."*
- 2 відображення → `fenster/feuertest-2fach.png`
- 3 відображення → `fenster/feuertest-3fach.png`

### A.5 Додаткові поля вікон
| Поле | Тип | Обов'язкове |
|------|-----|-------------|
| Baujahr Fenster (Рік вікон) | Number | Так |
| Rahmenmaterial (Матеріал рами) | Select | Ні (опціонально) |
| → Holz / Kunststoff / Metall | | |
| Zustand der Fenster | Radio | Так |
| → Alle dicht / Teilweise undicht | | |
| Dichtungen vorhanden | Radio | Так |
| Fenster-Vermassung (Розміри вікон, м²) | Textarea/Repeater | Для Bedarfsausweis |

**Логіка:** Якщо Einfach/Kastenfenster → підказка: *„Bei Austausch gelten GEG-Mindestwerte."*

**Приклад обчислення площі вікна:**
*„Küchenfenster Höhe (1,20m + 0,03m) × Breite (1,46m + 0,03m) = 1,23m × 1,49m = 1,833 m²"*
**Ілюстрація обмірів:** `fenster/vermassung-fenster.png` — показує Lichte Höhe + 3cm та Lichte Breite + 3cm

### A.6 Kellerdecke (Перекриття підвалу)
- **Тип поля:** Radio/Select
- **Варіанти:**
  - `unbeheizter Keller` — неопалюваний підвал
  - `beheizter Keller` — опалюваний підвал
  - `Dämmung vorhanden` — є утеплення
  - `Dämmung nicht vorhanden` — немає утеплення

### A.7 Heizungsanlage (Опалення)

#### A.7.1 Wärmeerzeuger (Джерело тепла)
- **Тип поля:** Select / Radio
- **Варіанти:**

| Значення | Опис (DE) |
|----------|-----------|
| `Öl` | Олійний котел |
| `Gas` | Газовий котел |
| `Fernwärme` | Централізоване теплопостачання (без генерації в будівлі) |
| `Wärmepumpe` | Тепловий насос (повітря/грунт/вода), працює на електриці |
| `Biomasse` | Біомаса (пелети, тріска, дрова) |
| `Elektro` | Електрообігрів (прямий / нічний акумулятор) |
| `Einzelöfen` | Окремі печі / камін |
| `BHKW / KWK` | Блочна теплоелектростанція |
| `Hybridheizung` | Гібрид (два різних джерела тепла) |

> Кожен варіант має розгорнутий опис для tooltip.

#### A.7.2 Kesseltyp (Тип котла)
- **Тип поля:** Select
- **Ілюстрації:** Кожен тип котла має схему з температурами з `assets/images/heizung/`.
- **Варіанти:**

| Значення | Температури | Типові роки | Ілюстрація |
|----------|-------------|-------------|------------|
| `Konstanttemperatur` | Подача 70–90°C, зворот 55–70°C | до ~1995 | `heizung/konstanttemperaturkessel.png` |
| `Niedertemperatur` | Подача 55–75°C, зворот 45–60°C | ~1985–2005 | `heizung/niedertemperaturkessel.png` |
| `Brennwert` | Подача 45–65°C, зворот 35–40°C | з ~1995 | `heizung/brennwertkessel.png` |
| `Wärmepumpe` | Подача 30–45°C, зворот 27–35°C | — | `heizung/waermepumpe.png` |

#### A.7.3 Wärmeabgabe (Тип опалювальних приладів)
- **Тип поля:** Select / Radio
- **Варіанти:**
  - `Radiatoren` — радіатори
  - `Flachheizkörper` — плоскі радіатори
  - `Fußbodenheizung` — тепла підлога
  - `Konvektoren` — конвектори

#### A.7.4 Додаткові поля опалення
| Поле | Тип | Обов'язкове |
|------|-----|-------------|
| Photovoltaik (PV) auf dem Dach | Checkbox | Ні |
| Zirkulation (циркуляція ГВП) | Checkbox | Ні |
| Heizungsrohre gedämmt (трубки утеплені) | Radio: Ja/Nein | Ні |

### A.8 Warmwasser (Гаряча вода)
- **Тип поля:** Select / Radio
- **Варіанти:**

| Значення | Опис |
|----------|------|
| `Zentrale Warmwasserbereitung` | Централізоване ГВП через котел/бойлер |
| `Dezentrale Warmwasserbereitung` | Децентралізоване (бойлери/протокові) |
| `Elektrischer Warmwasserspeicher` | Електричний бойлер |
| `Durchlauferhitzer` | Електричний протоковий нагрівач |
| `Kombiniert mit Heizung` | Комбіноване з опаленням |
| `Solarthermie` | Сонячні термальні колектори |

**Додаткові поля:**
| Поле | Тип | Обов'язкове |
|------|-----|-------------|
| Warmwasserrohre gedämmt (трубки ГВП утеплені) | Radio: Ja/Nein | Ні |

### A.9 Lüftung (Вентиляція)
> Тільки для **Bedarfsausweis** або **NWG**

- **Тип поля:** Select / Radio
- **Ілюстрації:** Схеми систем вентиляції з `assets/images/lueftung/`.
- **Варіанти:**

| Значення | Опис | Ілюстрація |
|----------|------|------------|
| `Fensterlüftung` | Природна вентиляція через вікна | `lueftung/fensterlueftung.png` |
| `Mechanische Abluft / Schachtlüftung` | Механічна витяжка без рекуперації | `lueftung/mechanische-abluft.png` |
| `Zentrale ohne WRG` | Центральна припливно-витяжна без рекуперації | `lueftung/zentrale-lueftungsanlage.png` |
| `Zentrale WRG` | Центральна з рекуперацією тепла | `lueftung/zentrale-lueftungsanlage.png` |
| `Dezentrale WRG` | Децентральна з рекуперацією (окремі пристрої в кімнатах) | `lueftung/dezentrale-lueftungsanlage.png` |
| `Nicht bekannt` | Невідомо | — |

---

## ГІЛКА B: Nichtwohngebäude (NWG) — Нежитлова будівля

> Показується ТІЛЬКИ якщо Gebäudetyp = Nichtwohngebäude.
> Активується "NWG-Wizard".

### B.1 Gebäudenutzung (Призначення)
- **Тип поля:** Select / Radio
- **Варіанти:**
  - `Büro / Verwaltung` — офіс / адміністрація
  - `Praxis / Gesundheit` — медпрактика / охорона здоров'я
  - `Schule / Kita` — школа / дитсадок
  - `Einzelhandel` — роздрібна торгівля
  - `Gastronomie` — ресторан / кафе
  - `Lager / Produktion` — склад / виробництво
  - `Sonstiges NWG` — інше нежитлове

### B.2 Geometrie & Fläche (Геометрія)
| Поле | Тип | Обов'язкове |
|------|-----|-------------|
| Nettogrundfläche (м²) | Number | Так |
| Anzahl Nutzungseinheiten | Number | Так |
| Geschosshöhen (м) | Number | Ні (опц.) |
| Beheiztes Volumen (м³) | Number | Ні (опц.) |

### B.3 Gebäudehülle NWG (спрощена!)

#### B.3.1 Außenwand NWG
- **Тип поля:** Select
- **Варіанти (менше ніж у WG!):**
  - `Massiv` — масивна
  - `Stahlbeton` — залізобетон
  - `Vorhangfassade` — навісний фасад
  - `Glasfassade` — скляний фасад
  - `WDVS` — утеплений фасад
  - `unbekannt` — невідомо

#### B.3.2 Fensteranteil NWG (Частка скління)
- **Тип поля:** Select / Radio
- **Варіанти:**
  - `gering (<30%)` — мало
  - `mittel (30–60%)` — середньо
  - `hoch (>60%)` — багато
- **Підказка:** *„NWG arbeitet mehr mit Glasanteilen."*

### B.4 Lüftung / Klima / Technik NWG (дуже важливо!)

#### B.4.1 Lüftung (Вентиляція NWG)
- **Тип поля:** Select
- **Варіанти:**
  - `Fensterlüftung` — через вікна
  - `Mechanische Abluft` — механічна витяжка
  - `Zentrale Lüftungsanlage` — центральна вентиляція
  - `Lüftung mit Wärmerückgewinnung` — вентиляція з рекуперацією

#### B.4.2 Kühlung (Охолодження NWG)
- **Тип поля:** Select
- **Варіанти:**
  - `keine` — немає
  - `Split-Klima` — спліт-кондиціонер
  - `zentrale Klimaanlage` — центральний кондиціонер
  - `Kaltwasseranlage` — система холодної води (chiller)

#### B.4.3 Beleuchtung (Освітлення NWG)
- **Тип поля:** Select
- **Варіанти:**
  - `Standard` — стандартне
  - `LED` — LED
  - `unbekannt` — невідомо

> Ці поля НЕ потрібні для WG — тільки для NWG.

### B.5 Heizung & Warmwasser NWG
> **Ідентичне WG** — ті ж поля A.7 + A.8.

---

## ГІЛКА C: Mischgebäude — Змішана будівля

> Показується ТІЛЬКИ якщо Gebäudetyp = Mischgebäude

### C.1 Energetischer Relevanz-Check (Попередня класифікація)

Блок для визначення, до якої категорії віднести будівлю.
**Ілюстрація:** `infografik/relevanz-check-flowchart.png` — блок-схема класифікації. Показується поряд з формою або як окремий інфо-блок перед питаннями.

#### C.1.1 Nutzung prüfen
- **Питання:** *„Welche Nutzung liegt im Gebäude vor?"*
- **Варіанти:**
  - Wohnen (EFH, MFH, Ferienwohnung)
  - Gewerbe (Büro, Praxis, Laden, Gastronomie, Schule)
  - Kombination aus Wohnen und Gewerbe

#### C.1.2 Flächenanteil einschätzen
- **Питання:** *„Wie groß ist der gewerbliche Anteil ungefähr?"*
- **Варіанти:**
  - `unter 10%` → зазвичай Wohngebäude
  - `ca. 10–50%` → можливий Mischgebäude
  - `über 50%` → зазвичай Nichtwohngebäude

#### C.1.3 Energetische Relevanz prüfen
- **Питання (чекбокси):**
  - Gibt es eine eigene Lüftungsanlage?
  - Gibt es Kühlung oder Klimaanlagen?
  - Hat der Gewerbeteil lange Öffnungszeiten?
  - Gibt es große Glasflächen oder Küchenabluft?
- **Логіка:** Якщо кілька пунктів = Ja → рекомендація NWG

#### C.1.4 Результат (автоматична рекомендація)
- **Wohngebäude:** переважно житло, без спецтехніки, мало комерції
- **Nichtwohngebäude:** переважно комерція, є вентиляція/охолодження
- **Mischgebäude:** обидві функції суттєві, різна техніка

**Юридичний disclaimer:**
*„Die Einordnung dient der ersten Orientierung. Die endgültige Bewertung erfolgt im Rahmen der Energieausweis-Erstellung nach den geltenden gesetzlichen Vorgaben (GEG). Abweichungen im Einzelfall sind möglich."*

### C.2 Два блоки введення (після класифікації як Mischgebäude)

#### C.2.1 Wohnanteil (Житлова частина)
- Wohnfläche (м²)
- Heizsystem (→ як A.7)

#### C.2.2 Gewerbeanteil (Комерційна частина)
- Nutzfläche (м²)
- Lüftung/Kühlung (→ як B.4)

---

## БЛОК: Upload (Завантаження файлів)

> Вимоги відрізняються залежно від типу паспорту.

### Upload — Heizungsanlage (1–4 зображення)
| Фото | Обов'язкове |
|------|-------------|
| Heizungsraum mit Kessel (приміщення котельні) | **Так** |
| Warmwasserleitungen / Heizungsrohre (трубопроводи) | Ні |
| Detailaufnahme Wärmeerzeuger (деталі котла) | Ні |
| Typenschild (табличка: виробник, тип, рік) | Ні |

**Юридичне обґрунтування:**
*„Auf Grundlage des seit Mai 2021 geltenden GEG sind zur fachgerechten Erstellung des Energieausweises bildliche Informationen zur Anlagentechnik erforderlich."*

**Примітка:** *„Die hochgeladenen Bilder werden nicht Bestandteil des Energieausweises und nicht veröffentlicht."*

### Upload — Fenster / Dachfenster / Türen (2–4 зображення)
| Фото | Обов'язкове |
|------|-------------|
| Exemplarisches Bild eines Fensters (типове вікно) | **Так** |
| Fenster з іншим віком/якістю | Ні |
| Ще одне вікно з відмінним станом | Ні |
| Bild der Haustür (вхідні двері) | **Так** |

**Поради:**
- Якщо всі вікна однакові — одне фото достатньо
- При різних вікнах — по одному фото на тип
- Бажано крупний план фальцу або рами
- Ідеально — видимий штамп дати на склі

### Upload — Wärmedämmung (Утеплення, 2–4 зображення)
| Фото | Обов'язкове |
|------|-------------|
| Деталь даху / підкрівельного простору | **Так** |
| Додатковий знімок даху | Ні |
| Деталь зовнішньої стіни | **Так** |
| Додатковий знімок стіни | Ні |

### Upload — Bedarfsausweis: Gebäudeunterlagen (Документи)

#### Обов'язкові поля (для Bedarfsausweis):
| Поле | Тип |
|------|-----|
| Geschosshöhen (висота поверхів, м) | Number |
| Gebäudevolumen (об'єм, м³) | Number |
| Außenwandflächen (площа стін, м²) | Number |
| Fensteranteile (площа вікон, м²) | Number |

#### Завантаження планів:
| Документ | Обов'язкове |
|----------|-------------|
| Grundrisspläne (поверхові плани) | **Так** |
| Schnitte (розрізи) | **Так** |
| Ansichtspläne (фасади з 4 сторін) | **Так** |
| Bauzeichnungen (будівельні креслення) | Ні |
| Bestandspläne / Sanierungspläne | Ні |
| Aufmaßskizzen (обмірні ескізи) | Ні |

**Формати:** PDF, JPG, PNG

### Upload — NWG Bedarfsausweis (розширений)
Додатково до стандартного:
- Anlagenpläne (плани систем)
- Lüftung / Kälte / Heizung (плани вентиляції/охолодження/опалення)

---

## SMART-СИСТЕМА: Автоматичні пропозиції за роком будівництва

> Ключова фіча: форма **автоматично пропонує типові значення** на основі року будівництва та типу будівлі.
> Користувач **підтверджує або змінює** запропоновані значення.

### SMART для WG (Wohngebäude)

Текст: *„Typische Gebäudeausstattung erkannt – bitte bestätigen"*

Форма автоматично визначає на основі Baujahr:
- Типову зовнішню стіну
- Типові вікна
- Типове опалення

### SMART для NWG (Nichtwohngebäude)

#### За роком будівництва:

| Baujahr | Фасад | Вікна | Вентиляція | Опалення |
|---------|-------|-------|------------|----------|
| **≤ 1978** | Масив / навісний фасад, низький теплозахист | Одинарне скло / старий ізоляційний | Віконна | Константний котел, радіатори |
| **1979–1994** | Перші навісні фасади | 2x ізоскло | Центральні котли | Прості вентсистеми можливі |
| **1995–2008** | Теплозахисне скління | Перші WRG-вентиляції | Низькотемпературний / ранній конденсаційний | Часткове WDVS |
| **≥ 2009** | Сучасні фасади / WDVS | 3x скління можливе | Вентиляція з WRG часто | Конденсаційний / тепловий насос |

**Автопідказки:**
- **≤ 1978:** *„Gebäude dieser Bauzeit besitzen häufig keinen ausreichenden Wärmeschutz."*
- **≥ 2009:** *„Gebäude dieser Bauzeit erfüllen häufig bereits höhere energetische Anforderungen."*

#### За призначенням будівлі:

| Nutzung | Фасад | Вентиляція |
|---------|-------|------------|
| **Büro / Schule / Verwaltung** (1960–1985) | Навісний фасад, високий % скління | Центральна вентиляція |
| **Produktion / Lager** | Бетонні панелі, мало вікон | — |
| **Einzelhandel** | — | Вентиляція + охолодження |
| **Gastronomie** | — | Механічна витяжка |

#### SMART Warnhinweise (попередження):
- Високий % скління → *„Hohe Glasflächen beeinflussen den Energiebedarf maßgeblich."*
- Центральна вентиляція → *„Angaben zur Luftmenge können für den Bedarfsausweis erforderlich sein."*
- Навісний фасад → *„Vorhangfassaden dieser Bauzeit besitzen häufig einen erhöhten Energiebedarf."*

---

## Plausibilitätscheck (Перевірка на правдоподібність)

Автоматичні попередження, які з'являються при нелогічних комбінаціях:

| Комбінація | Повідомлення |
|------------|-------------|
| Старі вікна + нове будівництво | → prüfen (перевірити) |
| Baujahr < 1960 + Fußbodenheizung | → prüfen |
| Wärmepumpe + Radiatoren | → Hinweis (підказка) |

---

## Адреса будівлі

| Поле | Тип | Обов'язкове |
|------|-----|-------------|
| Straße (Вулиця) | Text | Так |
| Hausnummer (Номер будинку) | Text | Так |
| PLZ (Поштовий індекс) | Text (5 цифр) | Так |
| Ort (Місто) | Text | Так |

---

## Загальна логіка відображення полів

```
КРОК 1: Anlass + Ausweisart
   │
КРОК 2: Gebäudetyp
   ├── WG → підтип → базові дані → оболонка → вікна → підвал → опалення → ГВП → вентиляція (Bedarfsausweis) → uploads
   ├── NWG → призначення → геометрія → оболонка (спрощ.) → вент/клімат/освітлення → опалення → ГВП → uploads (розшир.)
   └── Mischgebäude → Relevanz-Check → два блоки (житло + комерція) → uploads

SMART: На кожному кроці — автопропозиції за Baujahr + Nutzung
Plausibilitätscheck: На кожному кроці — перевірка комбінацій
```

---

## Технічні нотатки для розробки

1. **Wizard-підхід:** Кожна секція — окремий "крок" (step) з прогресбаром
2. **Conditional rendering:** ~60% полів залежать від попередніх відповідей
3. **SMART-система:** Потрібна таблиця маппінгу Baujahr → типові значення
4. **Plausibilitätscheck:** Клієнтська валідація з попередженнями (не блокуючими)
5. **Uploads:** Drag&drop зони з превʼю, обмеження розміру, підтримка PDF/JPG/PNG
6. **Tooltip/Infopopup:** Для кожного типу стіни/вікон/опалення — детальний опис з ознаками
7. **i18n:** Весь UI — німецькою, але код/коментарі можна англійською
8. **Юридичні disclaimers:** Мають бути присутні в кількох місцях (GEG посилання)
9. **Збереження прогресу:** Форма довга — потрібен autosave або збереження чернетки
10. **Мобільна версія:** Форма має бути адаптивною — великі кнопки, зручний upload з телефону
