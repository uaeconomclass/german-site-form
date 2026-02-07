/* AUTO-GENERATED FILE. Do not edit directly.
 * Source of truth:
 * - C:\Users\User\Desktop\форма для німецького сайту\src\energieausweis-form\spec
 * - C:\Users\User\Desktop\форма для німецького сайту\src\energieausweis-form\runtime
 * Rebuild:
 * - powershell -NoProfile -ExecutionPolicy Bypass -File tools/build-preview.ps1
 */
const FORM_SPEC = {"version":"v1","product":"Energieausweis","uiLocale":"de-DE","optionSets":{"anlass":[{"value":"","label":"Anlass"},{"value":"Vermietung","label":"Vermietung"},{"value":"Verkauf","label":"Verkauf"},{"value":"Sonstiges","label":"Sonstiges"},{"value":"Neubau","label":"Neubau","when":{"eq":["ausweisart","Bedarfsausweis"]}},{"value":"Modernisierung","label":"Modernisierung","when":{"eq":["ausweisart","Bedarfsausweis"]}}],"ausweisart":[{"value":"","label":"Welchen Ausweis benötigen Sie?"},{"value":"Verbrauchsausweis","label":"Verbrauchsausweis"},{"value":"Bedarfsausweis","label":"Bedarfsausweis"},{"value":"weiß ich nicht","label":"weiß ich nicht"}],"gebaeudetyp":[{"value":"","label":"Gebäudetyp"},{"value":"WG","label":"Wohngebäude (WG)"},{"value":"NWG","label":"Nichtwohngebäude (NWG)"},{"value":"MISCH","label":"Mischgebäude"}],"wg_subtype":[{"value":"","label":"Bitte wählen…"},{"value":"EFH","label":"Einfamilienhaus (EFH)"},{"value":"ZFH","label":"Zweifamilienhaus (ZFH)"},{"value":"MFH","label":"Mehrfamilienhaus (MFH)"},{"value":"REIHE","label":"Reihenhaus / Doppelhaushälfte"}],"fenster_type":[{"value":"","label":"Bitte wählen…"},{"value":"Einfachverglasung","label":"Einfachverglasung","tipKey":"fenster_einfachverglasung"},{"value":"Verbundfenster","label":"Verbundfenster","tipKey":"fenster_verbundfenster"},{"value":"Kastenfenster","label":"Kastenfenster","tipKey":"fenster_kastenfenster"},{"value":"Isolierglas alt","label":"Zweifachverglasung (Isolierverglasung, alt)","tipKey":"fenster_isolierglas_alt"},{"value":"Wärmeschutzglas","label":"Zweifachwärmeschutzverglasung","tipKey":"fenster_waermeschutzglas"},{"value":"3-fach Wärmeschutzglas","label":"Dreifachverglasung","tipKey":"fenster_dreifach"}],"fenster_rahmenmaterial":[{"value":"","label":"Bitte wählen…"},{"value":"Holz","label":"Holz"},{"value":"Kunststoff","label":"Kunststoff"},{"value":"Metall","label":"Metall"}],"kellerdecke_keller":[{"value":"","label":"Bitte wählen…"},{"value":"unbeheizter Keller","label":"unbeheizter Keller"},{"value":"beheizter Keller","label":"beheizter Keller"}],"kellerdecke_daemmung":[{"value":"","label":"Bitte wählen…"},{"value":"Dämmung vorhanden","label":"Dämmung vorhanden"},{"value":"Dämmung nicht vorhanden","label":"Dämmung nicht vorhanden"}],"heizung_waermeerzeuger":[{"value":"","label":"Bitte wählen…"},{"value":"Öl","label":"Öl","tipKey":"heizung_oel"},{"value":"Gas","label":"Gas","tipKey":"heizung_gas"},{"value":"Fernwärme","label":"Fernwärme","tipKey":"heizung_fernwaerme"},{"value":"Wärmepumpe","label":"Wärmepumpe","tipKey":"heizung_waermepumpe"},{"value":"Biomasse","label":"Biomasse","tipKey":"heizung_biomasse"},{"value":"Elektro","label":"Elektro","tipKey":"heizung_elektro"},{"value":"Einzelöfen","label":"Einzelöfen","tipKey":"heizung_einzelofen"},{"value":"BHKW / KWK","label":"BHKW / KWK","tipKey":"heizung_bhkw"},{"value":"Hybridheizung","label":"Hybridheizung","tipKey":"heizung_hybrid"}],"heizung_kesseltyp":[{"value":"","label":"Bitte wählen…"},{"value":"Konstanttemperatur","label":"Konstanttemperatur","tipKey":"heizung_konstanttemperatur"},{"value":"Niedertemperatur","label":"Niedertemperatur","tipKey":"heizung_niedertemperatur"},{"value":"Brennwert","label":"Brennwert","tipKey":"heizung_brennwert"},{"value":"Wärmepumpe","label":"Wärmepumpe","tipKey":"heizung_waermepumpe"}],"heizung_waermeabgabe":[{"value":"","label":"Bitte wählen…"},{"value":"Radiatoren","label":"Radiatoren"},{"value":"Flachheizkörper","label":"Flachheizkörper"},{"value":"Fußbodenheizung","label":"Fußbodenheizung"},{"value":"Konvektoren","label":"Konvektoren"}],"warmwasser":[{"value":"","label":"Bitte wählen…"},{"value":"Zentrale Warmwasserbereitung","label":"Zentrale Warmwasserbereitung","tipKey":"warmwasser_zentral"},{"value":"Dezentrale Warmwasserbereitung","label":"Dezentrale Warmwasserbereitung","tipKey":"warmwasser_dezentral"},{"value":"Elektrischer Warmwasserspeicher","label":"Elektrischer Warmwasserspeicher","tipKey":"warmwasser_speicher"},{"value":"Durchlauferhitzer","label":"Durchlauferhitzer","tipKey":"warmwasser_durchlauferhitzer"},{"value":"Kombiniert mit Heizung","label":"Kombiniert mit Heizung","tipKey":"warmwasser_kombiniert"},{"value":"Solarthermie","label":"Solarthermie","tipKey":"warmwasser_solarthermie"}],"ja_nein":[{"value":"","label":"Bitte wählen…"},{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}],"keller":[{"value":"Nicht vorhanden","label":"Nicht vorhanden"},{"value":"Unbeheizt","label":"Unbeheizt"},{"value":"Beheizt","label":"Beheizt"}],"dachgeschoss":[{"value":"Nicht vorhanden","label":"Nicht vorhanden"},{"value":"Unbeheizt","label":"Unbeheizt"},{"value":"Beheizt","label":"Beheizt"}],"gebaeudeanteil":[{"value":"Gesamtgebäude","label":"Gesamtgebäude"},{"value":"Wohnen","label":"Wohnen"}],"nwg_nutzung":[{"value":"","label":"Bitte wählen…"},{"value":"Büro / Verwaltung","label":"Büro / Verwaltung"},{"value":"Praxis / Gesundheit","label":"Praxis / Gesundheit"},{"value":"Schule / Kita","label":"Schule / Kita"},{"value":"Einzelhandel","label":"Einzelhandel"},{"value":"Gastronomie","label":"Gastronomie"},{"value":"Lager / Produktion","label":"Lager / Produktion"},{"value":"Sonstiges NWG","label":"Sonstiges NWG"}],"nwg_aussenwand_simple":[{"value":"","label":"Bitte wählen…"},{"value":"Massiv","label":"Massiv"},{"value":"Stahlbeton","label":"Stahlbeton"},{"value":"Vorhangfassade","label":"Vorhangfassade"},{"value":"Glasfassade","label":"Glasfassade"},{"value":"WDVS","label":"WDVS"},{"value":"unbekannt","label":"unbekannt"}],"nwg_fensteranteil":[{"value":"","label":"Bitte wählen…"},{"value":"gering (\u003c30%)","label":"gering (\u003c30%)"},{"value":"mittel (30–60%)","label":"mittel (30–60%)"},{"value":"hoch (\u003e60%)","label":"hoch (\u003e60%)"}],"lueftung":[{"value":"","label":"Bitte wählen…"},{"value":"Fensterlüftung","label":"Fensterlüftung"},{"value":"Mechanische Abluft / Schachtlüftung","label":"Mechanische Abluft / Schachtlüftung"},{"value":"Zentrale ohne WRG","label":"Zentrale ohne WRG"},{"value":"Zentrale WRG","label":"Zentrale WRG"},{"value":"Dezentrale WRG","label":"Dezentrale WRG"},{"value":"Nicht bekannt","label":"Nicht bekannt"}],"nwg_lueftung":[{"value":"","label":"Bitte wählen…"},{"value":"Fensterlüftung","label":"Fensterlüftung"},{"value":"Mechanische Abluft","label":"Mechanische Abluft"},{"value":"Zentrale Lüftungsanlage","label":"Zentrale Lüftungsanlage"},{"value":"Lüftung mit Wärmerückgewinnung","label":"Lüftung mit Wärmerückgewinnung"}],"nwg_kuehlung":[{"value":"","label":"Bitte wählen…"},{"value":"keine","label":"keine"},{"value":"Split-Klima","label":"Split-Klima"},{"value":"zentrale Klimaanlage","label":"zentrale Klimaanlage"},{"value":"Kaltwasseranlage","label":"Kaltwasseranlage"}],"nwg_beleuchtung":[{"value":"","label":"Bitte wählen…"},{"value":"Standard","label":"Standard"},{"value":"LED","label":"LED"},{"value":"unbekannt","label":"unbekannt"}]},"steps":[{"id":"anlass_ausweisart","title":"Anlass \u0026 Ausweisart","meta":"1","intro":{"title":"Start","text":"Wählen Sie Anlass und Ausweisart."},"fields":[{"key":"anlass","label":"Anlass","type":"select","required":true,"tipKey":"anlass","optionsRef":"anlass"},{"key":"ausweisart","label":"Ausweisart","type":"select","required":true,"tipKey":"ausweisart","optionsRef":"ausweisart"}]},{"id":"gebaeudetyp","title":"Gebäude-Stammdaten","meta":"2","intro":{"title":"Gebäudetyp","text":"Das ist der wichtigste Abzweig der Form."},"fields":[{"key":"gebaeudetyp","label":"Gebäudetyp","type":"radio","required":true,"tipKey":"gebaeudetyp","optionsRef":"gebaeudetyp","full":true}]},{"id":"adresse","title":"Adresse","meta":"3","intro":{"title":"Adresse","text":"Bitte geben Sie die Gebäudeadresse an."},"fields":[{"key":"strasse","label":"Straße","type":"text","required":true,"hint":"Straße"},{"key":"hausnummer","label":"Hausnummer","type":"text","required":true,"hint":"Nr."},{"key":"plz","label":"PLZ","type":"text","required":true,"pattern":"^\\d{5}$","hint":"z. B. 10115"},{"key":"ort","label":"Ort","type":"text","required":true,"hint":"z. B. München"}]},{"id":"wg_basisdaten","title":"WG: Basisdaten","meta":"A1","when":{"eq":["gebaeudetyp","WG"]},"afterChangeRef":"smart_wg_baujahr","blocks":[{"title":"Untertyp","fields":[{"key":"wg_subtype","label":"Gebäude","type":"select","required":true,"optionsRef":"wg_subtype"}]},{"title":"Basisdaten","fields":[{"key":"baujahr","label":"Baujahr Gebäude","type":"number","required":true,"min":1800,"max":2100,"hint":"z. B. 1985"},{"key":"anzahl_wohneinheiten","label":"Anzahl Wohneinheiten","type":"counter","required":true,"min":1,"max":999,"hint":"z. B. 1"},{"key":"wohnflaeche","label":"Wohnfläche (m²)","type":"number","required":true,"min":1,"max":20000,"tipKey":"wohnflaeche","hint":"z. B. 120"},{"key":"nutzflaeche","label":"Nutzfläche (m²)","type":"number","required":true,"min":1,"max":20000,"tipKey":"nutzflaeche","hint":"z. B. 155"}]},{"title":"Grundprüfung","fields":[{"key":"gebaeudeanteil","label":"Gebäudeteil","type":"radio","required":true,"optionsRef":"gebaeudeanteil"},{"key":"dachgeschoss","label":"Dachgeschoss","type":"radio","required":true,"optionsRef":"dachgeschoss"},{"key":"keller","label":"Keller","type":"radio","required":true,"optionsRef":"keller"}]}]},{"id":"wg_huelle_fenster","title":"WG: Gebäudehülle \u0026 Fenster","meta":"A2","when":{"eq":["gebaeudetyp","WG"]},"intro":{"title":"Gebäudehülle","text":"Außenwand und Fensterangaben.","img":"../assets/images/infografik/aussenwand-materialien-epochen.png"},"fields":[{"key":"aussenwand_type","label":"Außenwand (Typ)","type":"imgselect","required":true,"tipKey":"aussenwand_type","options":[{"value":"Fachwerk","label":"Fachwerk","img":"../assets/images/aussenwand/fachwerk.png","tipKey":"aussenwand_fachwerk"},{"value":"Vollziegel / Naturstein","label":"Vollziegel / Naturstein","img":"../assets/images/aussenwand/vollziegel.png","tipKey":"aussenwand_vollziegel"},{"value":"Hohlblock / Bims","label":"Hohlblock / Bims","img":"../assets/images/aussenwand/hohlblockstein-bims.png","tipKey":"aussenwand_bims"},{"value":"Kalksandstein","label":"Kalksandstein","img":"../assets/images/aussenwand/porenbeton-gasbeton.png","tipKey":"aussenwand_kalksandstein"},{"value":"Ziegel","label":"Ziegel","img":"../assets/images/aussenwand/ziegel-hochlochziegel.png","tipKey":"aussenwand_ziegel"},{"value":"Porenbeton / Gasbeton","label":"Porenbeton / Gasbeton","img":"../assets/images/aussenwand/porenbeton-gasbeton.png","tipKey":"aussenwand_porenbeton"},{"value":"Stahlbeton","label":"Stahlbeton","img":"../assets/images/aussenwand/stahlbeton.png","tipKey":"aussenwand_stahlbeton"},{"value":"WDVS vorhanden","label":"WDVS vorhanden","img":"../assets/images/aussenwand/wdvs-querschnitt.png","tipKey":"aussenwand_wdvs"},{"value":"unbekannt","label":"unbekannt","img":"../assets/images/aussenwand/wdvs-querschnitt.png"}]},{"key":"fenster_type","label":"Fenster (Typ)","type":"select","required":true,"tipKey":"fenster_type","optionsRef":"fenster_type"},{"key":"fenster_baujahr","label":"Baujahr Fenster","type":"number","required":true,"min":1800,"max":2100,"hint":"z. B. 2005"},{"key":"fenster_rahmenmaterial","label":"Rahmenmaterial","type":"select","required":false,"optionsRef":"fenster_rahmenmaterial"},{"key":"fenster_zustand","label":"Zustand der Fenster","type":"radio","required":true,"options":[{"value":"Alle dicht","label":"Alle dicht"},{"value":"Teilweise undicht","label":"Teilweise undicht"}]},{"key":"fenster_dichtungen","label":"Dichtungen vorhanden","type":"radio","required":true,"options":[{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}]},{"key":"fenster_vermassung","label":"Fenster-Vermassung (m²)","type":"repeater","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"tipKey":"fenster_vermassung","hint":"z. B. Küche, 1.23 × 1.49","itemLabel":"Fenster","fields":[{"key":"raum","label":"Raum / Bezeichnung","type":"text","required":false,"hint":"z. B. Küche"},{"key":"hoehe_m","label":"Höhe (m)","type":"number","required":true,"min":0.1,"max":10,"hint":"z. B. 1.23"},{"key":"breite_m","label":"Breite (m)","type":"number","required":true,"min":0.1,"max":10,"hint":"z. B. 1.49"}]}]},{"id":"wg_kellerdecke","title":"WG: Kellerdecke","meta":"A3","when":{"eq":["gebaeudetyp","WG"]},"intro":{"title":"Kellerdecke","text":"Angaben zum Keller und zur Dämmung."},"fields":[{"key":"keller_heizstatus","label":"Keller","type":"radio","required":true,"optionsRef":"kellerdecke_keller"},{"key":"kellerdecke_daemmung","label":"Kellerdecke","type":"radio","required":true,"optionsRef":"kellerdecke_daemmung"}]},{"id":"wg_heizung","title":"WG: Heizungsanlage","meta":"A4","when":{"eq":["gebaeudetyp","WG"]},"intro":{"title":"Heizung","text":"Angaben zur Heizungsanlage."},"blocks":[{"title":"Wärmeerzeuger","fields":[{"key":"heizung_waermeerzeuger","label":"Wärmeerzeuger","type":"select","required":true,"optionsRef":"heizung_waermeerzeuger","tipKey":"heizung_waermeerzeuger"},{"key":"heizung_baujahr","label":"Baujahr der Heizung","type":"number","required":false,"min":1800,"max":2100,"hint":"z. B. 2010"}]},{"title":"Kesseltyp","fields":[{"key":"heizung_kesseltyp","label":"Kesseltyp","type":"imgselect","required":true,"options":[{"value":"Konstanttemperatur","label":"Konstanttemperatur","img":"../assets/images/heizung/konstanttemperaturkessel.png","tipKey":"heizung_konstanttemperatur"},{"value":"Niedertemperatur","label":"Niedertemperatur","img":"../assets/images/heizung/niedertemperaturkessel.png","tipKey":"heizung_niedertemperatur"},{"value":"Brennwert","label":"Brennwert","img":"../assets/images/heizung/brennwertkessel.png","tipKey":"heizung_brennwert"},{"value":"Wärmepumpe","label":"Wärmepumpe","img":"../assets/images/heizung/waermepumpe.png","tipKey":"heizung_waermepumpe"}]}]},{"title":"Wärmeabgabe","fields":[{"key":"heizung_waermeabgabe","label":"Wärmeabgabe","type":"select","required":true,"optionsRef":"heizung_waermeabgabe"}]},{"title":"Zusatz","fields":[{"key":"pv_dach","label":"Photovoltaik (PV) auf dem Dach","type":"checkbox","required":false,"tipKey":"heizung_photovoltaik","full":true},{"key":"zirkulation","label":"Zirkulation (Warmwasser)","type":"checkbox","required":false,"tipKey":"heizung_zirkulation","full":true},{"key":"heizungsrohre_gedaemmt","label":"Heizungsrohre gedämmt","type":"radio","required":false,"optionsRef":"ja_nein","tipKey":"heizung_rohre_gedaemmt"}]}]},{"id":"wg_warmwasser","title":"WG: Warmwasser","meta":"A5","when":{"eq":["gebaeudetyp","WG"]},"intro":{"title":"Warmwasser","text":"Angaben zur Warmwasserbereitung."},"fields":[{"key":"warmwasser_type","label":"Warmwasser","type":"select","required":true,"optionsRef":"warmwasser","tipKey":"warmwasser_type"},{"key":"warmwasserrohre_gedaemmt","label":"Warmwasserrohre gedämmt","type":"radio","required":false,"optionsRef":"ja_nein","tipKey":"warmwasser_rohre_gedaemmt"}]},{"id":"wg_lueftung","title":"WG: Lüftung","meta":"A6","when":{"and":[{"eq":["gebaeudetyp","WG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"intro":{"title":"Lüftung","text":"Nur für Bedarfsausweis."},"fields":[{"key":"lueftung_type","label":"Lüftung","type":"imgselect","required":true,"options":[{"value":"Fensterlüftung","label":"Fensterlüftung","img":"../assets/images/lueftung/fensterlueftung.png","tipKey":"lueftung_fenster"},{"value":"Mechanische Abluft / Schachtlüftung","label":"Mechanische Abluft / Schachtlüftung","img":"../assets/images/lueftung/mechanische-abluft.png","tipKey":"lueftung_abluft"},{"value":"Zentrale ohne WRG","label":"Zentrale ohne WRG","img":"../assets/images/lueftung/zentrale-lueftungsanlage.png","tipKey":"lueftung_zentral_ohne_wrg"},{"value":"Zentrale WRG","label":"Zentrale WRG","img":"../assets/images/lueftung/zentrale-lueftungsanlage.png","tipKey":"lueftung_zentral_wrg"},{"value":"Dezentrale WRG","label":"Dezentrale WRG","img":"../assets/images/lueftung/dezentrale-lueftungsanlage.png","tipKey":"lueftung_dezentral_wrg"},{"value":"Nicht bekannt","label":"Nicht bekannt","img":"../assets/images/lueftung/fensterlueftung.png"}]}]},{"id":"nwg_nutzung_geometrie","title":"NWG: Nutzung \u0026 Geometrie","meta":"B1","when":{"eq":["gebaeudetyp","NWG"]},"afterChangeRef":"smart_nwg","intro":{"title":"Nichtwohngebäude","text":"Nutzung und Flächenangaben."},"fields":[{"key":"baujahr","label":"Baujahr Gebäude","type":"number","required":true,"min":1800,"max":2100,"hint":"z. B. 1998"},{"key":"nwg_nutzung","label":"Gebäudenutzung","type":"select","required":true,"optionsRef":"nwg_nutzung"},{"key":"nwg_nettogrundflaeche","label":"Nettogrundfläche (m²)","type":"number","required":true,"min":1,"max":500000,"hint":"z. B. 350"},{"key":"nwg_anzahl_nutzungseinheiten","label":"Anzahl Nutzungseinheiten","type":"number","required":true,"min":1,"max":50000,"hint":"z. B. 3"},{"key":"nwg_geschosshoehen","label":"Geschosshöhen (m)","type":"number","required":false,"min":1,"max":20,"hint":"optional"},{"key":"nwg_beheiztes_volumen","label":"Beheiztes Volumen (m³)","type":"number","required":false,"min":1,"max":5000000,"hint":"optional"}]},{"id":"nwg_huelle","title":"NWG: Gebäudehülle","meta":"B2","when":{"eq":["gebaeudetyp","NWG"]},"intro":{"title":"Gebäudehülle","text":"Vereinfachte Angaben für NWG."},"fields":[{"key":"nwg_aussenwand_simple","label":"Außenwand","type":"select","required":true,"optionsRef":"nwg_aussenwand_simple"},{"key":"nwg_fensteranteil","label":"Fensteranteil","type":"select","required":true,"tipKey":"nwg_fensteranteil","optionsRef":"nwg_fensteranteil"}]},{"id":"nwg_technik","title":"NWG: Lüftung / Klima / Technik","meta":"B3","when":{"eq":["gebaeudetyp","NWG"]},"intro":{"title":"Technik","text":"Wichtig: Diese Felder sind für NWG (insb. Bedarfsausweis) relevant."},"fields":[{"key":"nwg_lueftung","label":"Lüftung","type":"select","required":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"nwg_lueftung"},{"key":"nwg_kuehlung","label":"Kühlung","type":"select","required":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"nwg_kuehlung"},{"key":"nwg_beleuchtung","label":"Beleuchtung","type":"select","required":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"nwg_beleuchtung"}]},{"id":"nwg_heizung_warmwasser","title":"NWG: Heizung \u0026 Warmwasser","meta":"B4","when":{"eq":["gebaeudetyp","NWG"]},"intro":{"title":"Heizung/Warmwasser","text":"Diese Angaben entsprechen der WG-Logik (A.7 + A.8)."},"blocks":[{"title":"Heizung","fields":[{"key":"heizung_waermeerzeuger","label":"Wärmeerzeuger","type":"select","required":true,"optionsRef":"heizung_waermeerzeuger","tipKey":"heizung_waermeerzeuger"},{"key":"heizung_baujahr","label":"Baujahr der Heizung","type":"number","required":false,"min":1800,"max":2100,"hint":"z. B. 2010"},{"key":"heizung_kesseltyp","label":"Kesseltyp","type":"imgselect","required":true,"options":[{"value":"Konstanttemperatur","label":"Konstanttemperatur","img":"../assets/images/heizung/konstanttemperaturkessel.png","tipKey":"heizung_konstanttemperatur"},{"value":"Niedertemperatur","label":"Niedertemperatur","img":"../assets/images/heizung/niedertemperaturkessel.png","tipKey":"heizung_niedertemperatur"},{"value":"Brennwert","label":"Brennwert","img":"../assets/images/heizung/brennwertkessel.png","tipKey":"heizung_brennwert"},{"value":"Wärmepumpe","label":"Wärmepumpe","img":"../assets/images/heizung/waermepumpe.png","tipKey":"heizung_waermepumpe"}]},{"key":"heizung_waermeabgabe","label":"Wärmeabgabe","type":"select","required":true,"optionsRef":"heizung_waermeabgabe"},{"key":"pv_dach","label":"Photovoltaik (PV) auf dem Dach","type":"checkbox","required":false,"tipKey":"heizung_photovoltaik","full":true},{"key":"zirkulation","label":"Zirkulation (Warmwasser)","type":"checkbox","required":false,"tipKey":"heizung_zirkulation","full":true},{"key":"heizungsrohre_gedaemmt","label":"Heizungsrohre gedämmt","type":"radio","required":false,"optionsRef":"ja_nein","tipKey":"heizung_rohre_gedaemmt"}]},{"title":"Warmwasser","fields":[{"key":"warmwasser_type","label":"Warmwasser","type":"select","required":true,"optionsRef":"warmwasser","tipKey":"warmwasser_type"},{"key":"warmwasserrohre_gedaemmt","label":"Warmwasserrohre gedämmt","type":"radio","required":false,"optionsRef":"ja_nein","tipKey":"warmwasser_rohre_gedaemmt"}]}]},{"id":"misch_relevanz","title":"Mischgebäude: Relevanz-Check","meta":"C1","when":{"eq":["gebaeudetyp","MISCH"]},"intro":{"title":"Einordnung","text":"Die Einordnung dient der ersten Orientierung. Die endgültige Bewertung erfolgt nach GEG.","img":"../assets/images/infografik/relevanz-check-flowchart.png"},"fields":[{"key":"misch_nutzung","label":"Welche Nutzung liegt im Gebäude vor?","type":"radio","required":true,"options":[{"value":"Wohnen","label":"Wohnen"},{"value":"Gewerbe","label":"Gewerbe"},{"value":"Kombination","label":"Kombination aus Wohnen und Gewerbe"}]},{"key":"misch_gewerbe_anteil","label":"Wie groß ist der gewerbliche Anteil ungefähr?","type":"radio","required":true,"options":[{"value":"unter 10%","label":"unter 10%"},{"value":"ca. 10–50%","label":"ca. 10–50%"},{"value":"über 50%","label":"über 50%"}]},{"key":"misch_tech_lueftung","label":"Gibt es eine eigene Lüftungsanlage?","type":"radio","required":true,"optionsRef":"ja_nein"},{"key":"misch_tech_kuehlung","label":"Gibt es Kühlung oder Klimaanlagen?","type":"radio","required":true,"optionsRef":"ja_nein"},{"key":"misch_tech_oeffnungszeiten","label":"Hat der Gewerbeteil lange Öffnungszeiten?","type":"radio","required":true,"optionsRef":"ja_nein"},{"key":"misch_tech_glas","label":"Gibt es große Glasflächen oder Küchenabluft?","type":"radio","required":true,"optionsRef":"ja_nein"}]},{"id":"misch_bloecke","title":"Mischgebäude: Wohn- und Gewerbeteil","meta":"C2","when":{"eq":["gebaeudetyp","MISCH"]},"intro":{"title":"Teile","text":"Bitte füllen Sie Wohnanteil und Gewerbeanteil aus."},"blocks":[{"title":"Wohnanteil","fields":[{"key":"misch_wohnflaeche","label":"Wohnfläche (m²)","type":"number","required":true,"min":1,"max":200000},{"key":"misch_heizung_waermeerzeuger","label":"Heizsystem (Wärmeerzeuger)","type":"select","required":true,"optionsRef":"heizung_waermeerzeuger","tipKey":"heizung_waermeerzeuger"},{"key":"misch_heizung_kesseltyp","label":"Kesseltyp","type":"imgselect","required":true,"options":[{"value":"Konstanttemperatur","label":"Konstanttemperatur","img":"../assets/images/heizung/konstanttemperaturkessel.png","tipKey":"heizung_konstanttemperatur"},{"value":"Niedertemperatur","label":"Niedertemperatur","img":"../assets/images/heizung/niedertemperaturkessel.png","tipKey":"heizung_niedertemperatur"},{"value":"Brennwert","label":"Brennwert","img":"../assets/images/heizung/brennwertkessel.png","tipKey":"heizung_brennwert"},{"value":"Wärmepumpe","label":"Wärmepumpe","img":"../assets/images/heizung/waermepumpe.png","tipKey":"heizung_waermepumpe"}]},{"key":"misch_heizung_waermeabgabe","label":"Wärmeabgabe","type":"select","required":true,"optionsRef":"heizung_waermeabgabe"},{"key":"misch_pv_dach","label":"Photovoltaik (PV) auf dem Dach","type":"checkbox","required":false,"tipKey":"heizung_photovoltaik","full":true},{"key":"misch_zirkulation","label":"Zirkulation (Warmwasser)","type":"checkbox","required":false,"tipKey":"heizung_zirkulation","full":true},{"key":"misch_heizungsrohre_gedaemmt","label":"Heizungsrohre gedämmt","type":"radio","required":false,"optionsRef":"ja_nein","tipKey":"heizung_rohre_gedaemmt"}]},{"title":"Gewerbeanteil","fields":[{"key":"misch_nutzflaeche","label":"Nutzfläche (m²)","type":"number","required":true,"min":1,"max":200000},{"key":"misch_lueftung","label":"Lüftung","type":"select","required":true,"optionsRef":"nwg_lueftung"},{"key":"misch_kuehlung","label":"Kühlung","type":"select","required":true,"optionsRef":"nwg_kuehlung"}]}]},{"id":"uploads","title":"Versand","meta":"6","intro":{"title":"Uploads","text":"Bitte laden Sie die benötigten Unterlagen hoch."},"fields":[{"key":"upload_verbrauch_heizkosten","label":"Heizkostenabrechnungen (letzte 3 Jahre)","type":"file","when":{"eq":["ausweisart","Verbrauchsausweis"]},"required":{"eq":["ausweisart","Verbrauchsausweis"]},"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_verbrauch_heizkosten"},{"key":"upload_verbrauch_verbrauchsdaten","label":"Verbrauchsdaten","type":"file","when":{"eq":["ausweisart","Verbrauchsausweis"]},"required":{"eq":["ausweisart","Verbrauchsausweis"]},"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_verbrauch_verbrauchsdaten"},{"key":"upload_heizung_photos","label":"Heizungsanlage (Fotos)","type":"file","required":true,"accept":".jpg,.jpeg,.png","multiple":true,"tipKey":"uploads_heizung"},{"key":"upload_fenster_photos","label":"Fenster/Dachfenster/Türen (Fotos)","type":"file","required":true,"accept":".jpg,.jpeg,.png","multiple":true,"tipKey":"uploads_fenster"},{"key":"upload_daemmung_photos","label":"Wärmedämmung (Fotos)","type":"file","required":true,"accept":".jpg,.jpeg,.png","multiple":true,"tipKey":"uploads_daemmung"},{"key":"geschosshoehen","label":"Geschosshöhen (m)","type":"number","when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":20},{"key":"gebaeudevolumen","label":"Gebäudevolumen (m³)","type":"number","when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":5000000},{"key":"aussenwandflaechen","label":"Außenwandflächen (m²)","type":"number","when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":500000},{"key":"fensteranteile","label":"Fensteranteile (m²)","type":"number","when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":500000},{"key":"upload_bedarf_plaene","label":"Grundrisspläne / Schnitte / Ansichten","type":"file","when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_bedarf_plaene"},{"key":"upload_nwg_anlagenplaene","label":"Anlagenpläne (Lüftung/Kälte/Heizung)","type":"file","when":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"required":false,"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_nwg_anlagenplaene"}]},{"id":"summary","title":"Zusammenfassung","meta":"7","intro":{"title":"Fertig","text":"JSON-Export der eingegebenen Daten."},"fields":[]}]};
const TOOL_TIPS_DE = {"anlass":"Vermietung, Verkauf oder sonstiger Zweck. Für einen Verbrauchsausweis sind die Anlässe Neubau oder Modernisierung nicht zulässig.","ausweisart":"Verbrauchsausweis: auf Basis tatsächlichen Verbrauchs. Bedarfsausweis: auf Basis Berechnung (mehr Angaben).","relevanz_disclaimer":"Die Einordnung dient der ersten Orientierung. Die endgültige Bewertung erfolgt im Rahmen der Energieausweis-Erstellung nach den geltenden gesetzlichen Vorgaben (GEG). Abweichungen im Einzelfall sind möglich.","gebaeudetyp":"Der Energieausweis wird grundsätzlich für das gesamte Gebäude oder den kompletten Wohnteil eines Mischgebäudes erstellt. Eine Ausstellung für einzelne Wohnungen oder Teilflächen ist nicht möglich.","wohnflaeche":"Die Wohnfläche umfasst alle beheizten Räume, die dem Wohnen dienen (z. B. Wohnzimmer, Schlafzimmer, Küche, Bad, Flur). Nicht zur Wohnfläche zählen unbeheizte Keller, Garagen, Dachräume ohne Heizung sowie Balkone, Terrassen und sonstige Außenflächen.","nutzflaeche":"Die beheizte Nutzfläche umfasst die Wohnfläche sowie zusätzlich beheizte Räume innerhalb der thermischen Gebäudehülle, die nicht zur reinen Wohnfläche zählen. Beispiel: Wohnfläche 120 m² + beheizter Hobbyraum im Keller 20 m² + beheiztes Büro 15 m² = beheizte Nutzfläche gesamt 155 m². Nicht berücksichtigt werden unbeheizte Kellerräume, Garagen, Dachböden ohne Heizung, Balkone oder Terrassen.","aussenwand_type":"Bitte wählen Sie den Außenwand-Typ. Falls Sie unsicher sind, nutzen Sie die Detailinfos je Material.","aussenwand_fachwerk":"Fachwerkbauten bestehen aus einer tragenden Holzkonstruktion mit Gefachen, die je nach Bauzeit mit Lehm, Ziegeln oder anderen Ausfachungsmaterialien gefüllt sind. Sie sind typisch für historische Gebäude und kommen vor allem bei Altbauten vor dem 20. Jahrhundert vor.\n\nTypische Erkennungsmerkmale:\n- Material: Holztragwerk mit Ausfachungen (z. B. Lehm, Ziegel, Bruchstein)\n- Baujahre: häufig vor ca. 1900, regional auch später\n- Optik: sichtbares Holzraster an der Fassade (falls nicht verputzt)\n- Gewicht / Rohdichte: unterschiedlich je nach Gefachmaterial\n- Aufbau: Holzständerwerk mit nichttragenden Gefachen\n- Materialeigenschaft: diffusionsoffene Konstruktion, empfindlich gegenüber Feuchtigkeit\n- Oberfläche: verputzt oder sichtbares Holzfachwerk\n- Bohreigenschaften: stark abhängig vom jeweiligen Gefach (Holz leicht, Ziegel/Lehm mittel)\n- Bohrmehl: je nach Material Holzspäne, lehmig oder rötlich\n\nHinweis zur energetischen Einordnung:\nDie energetische Qualität hängt stark von der Gefachfüllung, Wandstärke sowie vorhandenen Innendämmungen oder Sanierungen ab. Bei Fachwerk ist bauphysikalisch angepasste Dämmung erforderlich.","aussenwand_vollziegel":"Massive Außenwände aus Naturstein oder Vollziegel sind typisch für Altbauten vor dem frühen 20. Jahrhundert. Die Konstruktionen bestehen meist aus dickem, massivem Mauerwerk ohne zusätzliche Dämmung und weisen je nach Region unterschiedliche Steinarten und Mauerwerksverbände auf.\n\nTypische Erkennungsmerkmale:\n- Material: Naturstein (z. B. Feldstein, Sandstein, Granit) oder Vollziegel\n- Baujahre: häufig vor ca. 1918 (Altbau)\n- Farbe: je nach Steinart grau, beige, gelblich oder rötlich\n- Gewicht / Rohdichte: sehr hoch, massives Mauerwerk\n- Aufbau: meist Vollmauerwerk ohne Hohlkammern, große Wandstärken\n- Materialeigenschaft: sehr fest und druckstabil\n- Oberfläche: unregelmäßig bei Naturstein, gleichmäßiger bei Vollziegel; häufig verputzt\n- Bohreigenschaften: hoher Widerstand, Bohren meist mit Schlag erforderlich\n- Bohrmehl: bei Naturstein grau/beige und steinig; bei Vollziegel rötlich\n\nHinweis zur energetischen Einordnung:\nTrotz großer Wandstärken besitzen massive Altbauwände oft eine geringe Wärmedämmwirkung. Die energetische Bewertung erfolgt unter Berücksichtigung von Wanddicke, Putzaufbau sowie eventueller nachträglicher Dämmmaßnahmen.","aussenwand_bims":"Hohlblocksteine aus Bims oder Leichtbeton wurden besonders im frühen bis mittleren 20. Jahrhundert häufig im Wohnungsbau eingesetzt. Durch den porösen Zuschlagstoff (Bims) sind sie leichter als Normalbeton und besitzen bessere Wärmeeigenschaften als massive Betonbauteile.\n\nTypische Erkennungsmerkmale:\n- Material: Leichtbeton bzw. Bimsbeton (Zement mit Bims-Zuschlag)\n- Baujahre: häufig ca. 1919 bis 1960er Jahre\n- Farbe: hellgrau bis beige-grau\n- Gewicht / Rohdichte: leicht bis mittel, deutlich leichter als Beton\n- Aufbau: größere Steinformate mit Hohlkammern\n- Materialeigenschaft: porös, weniger fest als Kalksandstein oder Stahlbeton\n- Oberfläche: oft grobkörnig, sichtbar porige Struktur\n- Bohreigenschaften: relativ gut zu bohren, meist mit wenig Schlag\n- Bohrmehl: hellgrau, leicht körnig und eher „sandig\"\n\nHinweis zur energetischen Einordnung:\nDie Dämmwirkung ist besser als bei Vollbeton, jedoch meist nicht ausreichend nach heutigen Standards. Außenwände aus Bims-Hohlblockstein wurden später häufig mit WDVS oder Vormauerschale ergänzt.","aussenwand_kalksandstein":"Kalksandstein ist ein mineralischer Mauerwerksbaustoff aus Kalk, Sand und Wasser, der unter Dampfdruck gehärtet wird. Er besitzt eine hohe Rohdichte und wird häufig für tragende Innen- und Außenwände eingesetzt, meist in Kombination mit zusätzlicher Wärmedämmung.\n\nTypische Erkennungsmerkmale:\n- Material: Kalk, Sand und Wasser (dampfdruckgehärtet)\n- Baujahre: verbreitet seit vielen Jahrzehnten, häufig ab ca. 1960 bis heute\n- Farbe: weiß bis hellgrau\n- Gewicht / Rohdichte: hoch, schweres Mauerwerk\n- Materialeigenschaft: sehr fest und druckstabil, dichter als Porenbeton oder Ziegel\n- Aufbau: meist Vollstein oder Lochstein mit glatter Oberfläche\n- Bohreigenschaften: hartes Material, Bohren meist mit Schlagfunktion erforderlich\n- Bohrmehl: hellgrau bis weiß, eher sandig\n\nHinweis zur energetischen Einordnung:\nKalksandstein besitzt selbst nur geringe Wärmedämmeigenschaften; die energetische Qualität der Außenwand ergibt sich meist durch zusätzliche Dämmmaßnahmen (z. B. WDVS oder Kerndämmung).","aussenwand_ziegel":"Ziegelmauerwerk besteht aus gebranntem Ton und wurde im Wohnungsbau häufig ab der Nachkriegszeit eingesetzt, kommt jedoch auch bei älteren Gebäuden vor. Typisch sind eine rötliche bis orangefarbene Erscheinung sowie – je nach Bauart – innenliegende Hohlkammern zur Gewichtsreduzierung und Wärmedämmung.\n\nTypische Erkennungsmerkmale:\n- Material: gebrannter Ton (Ziegel)\n- Farbe: rot, orange bis gelblich\n- Baujahre: häufig ab ca. 1950, teilweise auch vor 1945\n- Aufbau: Vollziegel oder Hochlochziegel mit Hohlkammern\n- Rohdichte / Gewicht: mittel bis schwer\n- Materialeigenschaft: druckfest, jedoch weniger hart als Beton\n- Bohrverhalten: Bohren je nach Ziegelart mit oder ohne Schlagfunktion\n- Bohrmehl: meist rötlich bis orangefarben\n\nHinweis zur Energieausweis-Erstellung:\nDie genaue energetische Bewertung hängt zusätzlich von Wandstärke, Putzaufbau sowie vorhandener Dämmung ab.","aussenwand_porenbeton":"Porenbeton (auch Gasbeton genannt) ist ein mineralischer Leichtbaustoff mit hohem Luftporenanteil. Aufgrund seiner geringen Rohdichte besitzt er gute Wärmedämmeigenschaften und wird häufig im modernen Mauerwerksbau eingesetzt.\n\nTypische Erkennungsmerkmale:\n- Material: Porenbeton (zement- bzw. kalkgebundener Leichtbaustoff)\n- Baujahre: vermehrt ab ca. 1980, im Neubau häufig verwendet\n- Farbe: weiß bis hellgrau\n- Gewicht / Rohdichte: gering, sehr leichtes Mauerwerk\n- Materialeigenschaft: weich im Vergleich zu Beton oder Ziegel\n- Oberfläche: gleichmäßig, feinporige Struktur\n- Bohreigenschaften: leicht zu bearbeiten, Bohren meist ohne Schlagfunktion möglich\n- Bohrmehl: weiß bis hellgrau, sehr fein\n\nHinweis zur energetischen Einordnung:\nDie energetische Bewertung im Bedarfsausweis hängt von Wanddicke, Steinformat sowie zusätzlicher Dämmung oder Putzaufbau ab.","aussenwand_stahlbeton":"Stahlbeton besteht aus Beton mit eingelegter Bewehrung aus Stahl zur Aufnahme von Zugkräften. Er wird überwiegend bei tragenden Konstruktionen wie Decken, Stützen, Balkonen oder massiven Außenwänden eingesetzt und kommt sowohl im Geschosswohnungsbau als auch bei Einfamilienhäusern vor.\n\nTypische Erkennungsmerkmale:\n- Material: Beton mit Stahleinlagen (Bewehrung)\n- Baujahre: verbreitet seit ca. 1950 bis heute\n- Farbe: grau bis dunkelgrau\n- Gewicht / Rohdichte: sehr hoch, massives Bauteil\n- Materialeigenschaft: sehr hart, hohe Druck- und Zugfestigkeit durch Bewehrung\n- Oberfläche: glatt (Schalungsstruktur möglich) oder verputzt\n- Bohreigenschaften: Bohren meist nur mit Schlag-/Hammerbohrer; hoher Widerstand\n- Bohrmehl: dunkelgrau, steinig; bei Treffer der Bewehrung metallischer Widerstand\n\nHinweis zur energetischen Einordnung:\nStahlbeton besitzt eine hohe Wärmeleitfähigkeit und geringe Dämmwirkung. Außenbauteile aus Stahlbeton werden energetisch meist erst durch zusätzliche Außendämmung (z. B. WDVS) bewertet.","aussenwand_wdvs":"Ein Wärmedämmverbundsystem (WDVS) ist eine außenliegende Dämmkonstruktion, die auf bestehendes Mauerwerk oder Beton aufgebracht wird, um den Wärmeschutz der Gebäudehülle zu verbessern. Es besteht aus Dämmplatten, Armierungsschicht und Oberputz.\n\nTypische Erkennungsmerkmale:\n- Aufbau: Dämmplatten (z. B. EPS, Mineralwolle, Holzfaser) mit Putzsystem\n- Baujahre: häufig ab ca. 1975/1980, stark verbreitet seit EnEV-Zeit\n- Optik: verputzte Fassade, oft gleichmäßige Oberfläche ohne sichtbares Mauerwerk\n- Material: Dämmstoff + Armierungsgewebe + Oberputz\n- Wandstärke außen: häufig 8–20 cm zusätzliche Dämmschicht (je nach Sanierungsstand)\n- Klopfprobe: eher „dumpfer\" Klang als bei massivem Mauerwerk\n- Bohreigenschaften: zuerst weiche Dämmschicht, dahinter tragendes Mauerwerk\n- Bohrmehl: je nach Dämmstoff weiß (EPS), faserig (Mineralwolle) oder mineralisch\n\nHinweis zur energetischen Einordnung:\nDie energetische Qualität wird wesentlich durch Dämmstoffart, Dämmstärke und Ausführungsjahr bestimmt. Das tragende Mauerwerk allein ist für die U-Wert-Bewertung nicht ausreichend.","fenster_type":"Farbiges Spiegelbild = Wärmeschutz. Spiegelbilder zählen = Anzahl Scheiben.\n\nFeuertest: Halten Sie ein Feuerzeug vor die Scheibe und zählen Sie die Spiegelbilder.\n- 2 Spiegelbilder = Zweifachverglasung (siehe Bild: ../assets/images/fenster/feuertest-2fach.png)\n- 3 Spiegelbilder = Dreifachverglasung (siehe Bild: ../assets/images/fenster/feuertest-3fach.png)","fenster_einfachverglasung":"Fenster mit einer einzelnen Glasscheibe ohne wärmedämmende Zwischenschicht.\nBaujahr: häufig bis ca. 1978\nUG: 5 bis 6 W/(m²·K)\nRahmenmaterial: Holz, Stahl oder Aluminium","fenster_verbundfenster":"Fensterbauart mit zwei getrennten Glasscheiben in zwei Fensterflügeln, die mechanisch miteinander verbunden sind und gemeinsam geöffnet werden. Es handelt sich nicht um eine Isolierverglasung im technischen Sinn; der Scheibenzwischenraum ist nicht gasdicht ausgeführt.\nBaujahr: häufig ca. 1950–1985\nRahmenmaterial: überwiegend Holz (vereinzelt Metallverbund)","fenster_kastenfenster":"Fensterbauart mit zwei getrennten, hintereinander angeordneten Fensterflügeln, die jeweils eine einfache Verglasung besitzen und durch einen größeren Luftzwischenraum („Kasten\") getrennt sind. Es handelt sich nicht um eine Isolierverglasung im technischen Sinn.\nBaujahr: häufig vor 1978 (typisch Altbau / Denkmal)\nRahmenmaterial: überwiegend Holz","fenster_isolierglas_alt":"Fenster mit Isolierglasscheibe aus zwei Glasscheiben, die werkseitig zu einer Einheit verbunden sind. Die Verglasung weist keine Wärmeschutzbeschichtung auf und der Scheibenzwischenraum ist nicht gasgefüllt.\nUG: 2,5 bis 3 W/(m²·K)\nBaujahr: häufig ca. 1978–1994\nRahmenmaterial: Holz, Kunststoff oder Aluminium","fenster_waermeschutzglas":"Fenster mit beschichteter Zweifachverglasung und gasgefülltem Scheibenzwischenraum zur verbesserten Wärmedämmung.\nBaujahr: häufig ab ca. 1995–2010\nRahmenmaterial: Holz, Kunststoff, Aluminium\nWärmedurchgangskoeffizient (U-Wert): typischerweise ca. 1,1–1,3 W/(m²·K)\nUG: 1 bis 1,3 W/(m²·K)","fenster_dreifach":"Fenster mit drei Glasscheiben, beschichteten Scheibenflächen und gasgefüllten Zwischenräumen zur hohen Wärmedämmung.\nBaujahr: häufig ab ca. 2010\nRahmenmaterial: Holz, Kunststoff, Aluminium (meist mit thermischer Trennung)\nWärmedurchgangskoeffizient (U-Wert): typischerweise ≤ 0,9 W/(m²·K)\nUG: 0,5 bis 0,7 W/(m²·K)","fenster_vermassung":"Angabe der Fensterabmessungen (lichte Öffnung Breite × Höhe) zur Ermittlung der Fensterfläche. Die Vermassung dient der rechnerischen Erfassung der transparenten Bauteilflächen im Bedarfsausweis.\n\nUmrechnung: 100 cm = 1 m\nBeispiel: Küchenfenster Höhe (1,20 m + 0,03 m) × Breite (1,46 m + 0,03 m) = 1,23 m × 1,49 m = 1,833 m²","nwg_fensteranteil":"NWG arbeitet mehr mit Glasanteilen.","heizung_waermeerzeuger":"Bitte wählen Sie den Wärmeerzeuger.","heizung_oel":"Ölheizung: Wärmeversorgung über einen Ölkessel (fossiler Brennstoff).","heizung_gas":"Gasheizung: Wärmeversorgung über einen Gaskessel (fossiler Brennstoff).","heizung_fernwaerme":"Fernwärme / Nahwärme\nWärmeversorgung des Gebäudes über ein externes Wärmeversorgungsnetz; keine Wärmeerzeugung im Gebäude.","heizung_biomasse":"Biomasseheizung (z. B. Pellet, Hackschnitzel, Scheitholz)\nZentrale Heizungsanlage zur Wärmebereitstellung unter Nutzung fester biogener Brennstoffe.","heizung_elektro":"Elektroheizung (direkt / Nachtspeicher)\nDirekt wirkende elektrische Heizsysteme ohne Nutzung von Umweltenergie und ohne zentrale Wärmeverteilung.","heizung_einzelofen":"Kaminofen / Einzelraumfeuerstätte\nEinzelraumfeuerstätte zur ergänzenden Raumbeheizung, nicht Bestandteil der zentralen Wärmeversorgung des Gebäudes.","heizung_bhkw":"Blockheizkraftwerk (BHKW / KWK)\nAnlage zur gekoppelten Erzeugung von Wärme und Strom zur zentralen Wärmeversorgung des Gebäudes.","heizung_hybrid":"Hybridheizung\nKombination aus zwei unterschiedlichen Wärmeerzeugern zur gemeinsamen Wärmebereitstellung.","heizung_konstanttemperatur":"Konstanttemperaturkessel\nHeizkessel, der dauerhaft mit hoher Vorlauftemperatur betrieben wird – unabhängig vom Wärmebedarf. Die Abgaswärme (Kondensationswärme) wird nicht genutzt. Typisch für ältere Heizungsanlagen, vor allem aus den 1970er-Jahren bis ca. 1995.\nÜbliche Temperaturen: Vorlauf ca. 70–90 °C, Rücklauf ca. 55–70 °C","heizung_niedertemperatur":"Niedertemperaturkessel\nHeizkessel, der mit niedrigeren Vorlauftemperaturen arbeitet und sich dem Wärmebedarf besser anpasst als ein Konstanttemperaturkessel. Die Abgaswärme (Kondensationswärme) wird jedoch nicht genutzt. Typisch für Heizungsanlagen etwa von ca. 1985 bis 2005.\nÜbliche Temperaturen: Vorlauf ca. 55–75 °C, Rücklauf ca. 45–60 °C","heizung_brennwert":"Brennwertkessel\nHeizkessel, der neben der Heizwärme auch die im Abgas enthaltene Kondensationswärme nutzt. Voraussetzung dafür sind möglichst niedrige Rücklauftemperaturen (ideal unter ca. 55 °C, bei Gasbrennwert oft unter ca. 50 °C). Typisch für moderne Heizungsanlagen, überwiegend ab ca. 1995.\nÜbliche Temperaturen (je nach Heizsystem): Vorlauf ca. 45–65 °C, Rücklauf ca. 35–40 °C","heizung_waermepumpe":"Wärmepumpe\nHeizungsanlage, die Wärme aus der Umwelt (z. B. Außenluft, Erdreich oder Grundwasser) nutzt, um Heizwärme und/oder Warmwasser bereitzustellen. Der Betrieb erfolgt überwiegend mit elektrischer Energie. Durch niedrige Systemtemperaturen arbeitet die Anlage besonders effizient, insbesondere in gut gedämmten Gebäuden oder mit Flächenheizungen.\nÜbliche Temperaturen: Vorlauf ca. 30–45 °C, Rücklauf ca. 27–35 °C","heizung_photovoltaik":"Photovoltaik (PV) auf dem Dach\nAnlage auf dem Dach, die Sonnenlicht in Strom umwandelt. Der Strom kann im Haus genutzt oder ins Netz eingespeist werden.","heizung_zirkulation":"Zirkulation\nKreislauf von Heizungs- oder Warmwasser in den Leitungen, damit Wärme bzw. warmes Wasser schnell und gleichmäßig im Gebäude verfügbar ist.","heizung_rohre_gedaemmt":"Heizungsrohre gedämmt\nGemeint sind die sichtbaren Heizungsrohre des Verteilsystems. Gedämmte Rohre erkennen Sie an einer dunklen Isolierung bzw. Ummantelung (z. B. Manschetten) um das Rohr.","warmwasser_type":"Bitte wählen Sie die Warmwasser-Art.","warmwasser_zentral":"Zentrale Warmwasserbereitung\nDie Trinkwassererwärmung erfolgt über eine zentrale Anlage im Gebäude, z. B. über den Heizkessel oder einen zentralen Warmwasserspeicher. Das erwärmte Wasser wird über Leitungen zu den Entnahmestellen (Bad, Küche) verteilt.","warmwasser_dezentral":"Dezentrale Warmwasserbereitung\nDie Warmwassererzeugung erfolgt direkt an der jeweiligen Entnahmestelle, z. B. durch elektrische Durchlauferhitzer, Boiler oder Untertischgeräte. Eine zentrale Speicherung oder Verteilung im Gebäude findet nicht statt.","warmwasser_speicher":"Elektrischer Warmwasserspeicher (Boiler)\nDezentrale elektrische Warmwasserbereitung über Speichergeräte in den Nutzungseinheiten.","warmwasser_durchlauferhitzer":"Durchlauferhitzer (elektrisch) – nur Warmwasser\nDezentrale elektrische Warmwassererzeugung in den einzelnen Nutzungseinheiten ohne zentrale Speicher- oder Verteilanlage.","warmwasser_kombiniert":"Kombiniert mit Heizung\nDie Warmwasserbereitung ist in die Heizungsanlage integriert. Ein Wärmeerzeuger (z. B. Brennwertkessel oder Wärmepumpe) übernimmt sowohl die Raumheizung als auch die Erwärmung des Trinkwassers.","warmwasser_solarthermie":"Solarthermie (Warmwasser)\nAnlage zur thermischen Nutzung der Sonnenenergie zur Warmwasserbereitung über solarthermische Kollektoren; keine Stromerzeugung (keine Photovoltaik).","warmwasser_rohre_gedaemmt":"Warmwasserrohre gedämmt\nGemeint sind die sichtbaren Warmwasserleitungen im Gebäude. Gedämmte Rohre erkennen Sie an einer dunklen Isolierung bzw. Ummantelung (z. B. Manschetten) um das Rohr.","lueftung_fenster":"Fensterlüftung (Natürliche Lüftung)\nLuftwechsel erfolgt ausschließlich über manuell zu öffnende Fenster; es ist keine mechanische Lüftungsanlage vorhanden.","lueftung_abluft":"Mechanische Abluft / Schachtlüftung\nMechanisches Lüftungssystem, bei dem verbrauchte Raumluft aktiv abgesaugt wird. Die Frischluft strömt ungeregelt über Außenluftöffnungen oder Fenster nach. Eine Wärmerückgewinnung ist nicht vorhanden.","lueftung_zentral_ohne_wrg":"Zentrale ohne WRG\nZentrale mechanische Zu- und Abluftanlage ohne Wärmerückgewinnung (WRG), bei der die Zu- und Abluft zentral geführt wird.","lueftung_zentral_wrg":"Zentrale WRG\nZentrale mechanische Zu- und Abluftanlage mit Wärmerückgewinnung (WRG), bei der die Abluftwärme ganz oder teilweise auf die Zuluft übertragen wird.","lueftung_dezentral_wrg":"Dezentrale WRG\nMechanische Zu- und Abluft über einzelne, raumweise angeordnete Lüftungsgeräte mit integrierter Wärmerückgewinnung (WRG); keine zentrale Luftverteilung vorhanden.","upload_verbrauch_heizkosten":"Für den Verbrauchsausweis werden Heizkostenabrechnungen der letzten 3 Jahre benötigt.","upload_verbrauch_verbrauchsdaten":"Für den Verbrauchsausweis werden Verbrauchsdaten (tatsächliches Verbrauchsverhalten) benötigt.","uploads_heizung":"Auf Grundlage des seit Mai 2021 geltenden Gebäudeenergiegesetzes (GEG) sind zur fachgerechten Erstellung des Energieausweises bildliche Informationen zur Anlagentechnik erforderlich. Die bereitgestellten Bilder dienen ausschließlich der fachlichen Einschätzung des energetischen Zustands und der Ableitung von Modernisierungsempfehlungen.\n\nHinweis:\nDie hochgeladenen Bilder werden nicht Bestandteil des Energieausweises und nicht veröffentlicht.\n\nEmpfehlung:\nEin Übersichtsbild des Heizungsraums mit sichtbarer Heizungsanlage und Rohrleitungen erleichtert die fachliche Bewertung.","uploads_fenster":"Seit Mai 2021 gilt in Deutschland das Gebäudeenergiegesetz (GEG). Für die fachgerechte Erstellung des Energieausweises benötigen wir daher Fotos der Gebäudehülle, um den Sanierungszustand einschätzen und passende Modernisierungsempfehlungen geben zu können.\n\nHinweis:\nDie hochgeladenen Bilder erscheinen nicht auf dem Energieausweis und werden ausschließlich zur fachlichen Bewertung verwendet.\n\nTipps für gute Fotos:\n- Ein Exemplarbild reicht, wenn alle Fenster gleich sind\n- Bei unterschiedlichen Fenstern bitte je Fensterart ein Bild\n- Möglichst eine Nahaufnahme des Fensterfalzes oder Rahmens\n- Ideal ist, wenn ein Datumsaufdruck an der Verglasung erkennbar ist","uploads_daemmung":"Seit Mai 2021 gilt in Deutschland das Gebäudeenergiegesetz (GEG). Für die fachgerechte Erstellung des Energieausweises benötigen wir Fotos zur Wärmedämmung des Gebäudes, um den energetischen Zustand beurteilen und Modernisierungsempfehlungen ableiten zu können.\n\nWichtig:\nDie hochgeladenen Bilder erscheinen nicht auf dem Energieausweis und dienen ausschließlich der fachlichen Bewertung.\n\nHinweise für geeignete Fotos:\n- Die Dämmung (oder fehlende Dämmung) sollte möglichst gut erkennbar sein\n- Ist die Dämmung durch Verkleidung oder Verschalung nicht sichtbar, genügt: ein Bild des ausgebauten Dachgeschosses und/oder ein Außenbild vom Dach-Wand-Anschluss\n- Ist die Dämmung der Außenwand nicht erkennbar, reicht: ein normales Außenbild der Fassade und/oder ein Bild vom Dach-Wand-Anschluss\n- Bitte laden Sie mindestens 2 Bilder hoch.","upload_bedarf_plaene":"Für den Bedarfsausweis werden Angaben zur Gebäudegeometrie und Gebäudehülle benötigt. Dafür sind Gebäudepläne besonders hilfreich.\n\nDateiformate: PDF oder Bild (z. B. JPG, PNG)","upload_nwg_anlagenplaene":"Optional: Anlagenpläne (Lüftung/Kälte/Heizung) können bei NWG hilfreich sein."};
const BUILD_INFO = { commit: "5361e2b", builtAt: "2026-02-07T22:43:48.2405260+02:00" };

/* Runtime for data-driven Energieausweis form.
 *
 * Inputs (injected by build):
 * - FORM_SPEC (object)
 * - TOOL_TIPS_DE (object)
 *
 * Output: binds to DOM ids present in preview/energieausweis-form.html
 */

function el(tag, attrs, ...children) {
  const n = document.createElement(tag);
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
      else if (v === true) n.setAttribute(k, "");
      else if (v !== false && v != null) n.setAttribute(k, String(v));
    }
  }
  for (const c of children) {
    if (c == null) continue;
    if (typeof c === "string") n.appendChild(document.createTextNode(c));
    else n.appendChild(c);
  }
  return n;
}

function clamp(n, a, b) {
  return Math.min(b, Math.max(a, n));
}

function isEmpty(v) {
  return v == null || v === "" || v === false || (Array.isArray(v) && v.length === 0);
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function getStateValue(state, key) {
  return state[key];
}

function evalCond(cond, state) {
  if (!cond) return true;
  if (typeof cond === "boolean") return cond;

  if (cond.eq) {
    const [k, v] = cond.eq;
    return String(getStateValue(state, k) ?? "") === String(v);
  }
  if (cond.neq) {
    const [k, v] = cond.neq;
    return String(getStateValue(state, k) ?? "") !== String(v);
  }
  if (cond.and) return cond.and.every((c) => evalCond(c, state));
  if (cond.or) return cond.or.some((c) => evalCond(c, state));
  if (cond.not) return !evalCond(cond.not, state);

  // Unknown condition shape: fail closed (hide)
  return false;
}

// --- SMART mapping (still coded, but triggered by afterChangeRef from JSON)
function smartSuggestForWG(baujahr) {
  const y = Number(baujahr);
  if (!Number.isFinite(y)) return null;
  if (y <= 1978) return { aussenwand_type: "Vollziegel / Naturstein", fenster_type: "Einfachverglasung", heizung_kesseltyp: "Konstanttemperatur" };
  if (y <= 1994) return { aussenwand_type: "Ziegel", fenster_type: "Isolierglas alt", heizung_kesseltyp: "Niedertemperatur" };
  if (y <= 2008) return { aussenwand_type: "WDVS vorhanden", fenster_type: "WГ¤rmeschutzglas", heizung_kesseltyp: "Brennwert" };
  return { aussenwand_type: "WDVS vorhanden", fenster_type: "3-fach WГ¤rmeschutzglas", heizung_kesseltyp: "WГ¤rmepumpe" };
}

const AFTER_CHANGE = {
  smart_wg_baujahr: (state, changedKey) => {
    if (changedKey !== "baujahr") return;
    const sug = smartSuggestForWG(state.baujahr);
    if (!sug) return;
    for (const [k, v] of Object.entries(sug)) {
      if (isEmpty(state[k])) state[k] = v;
    }
  },
  smart_nwg: (state, changedKey) => {
    if (changedKey !== "baujahr" && changedKey !== "nwg_nutzung" && changedKey !== "ausweisart" && changedKey !== "gebaeudetyp") return;
    if (state.gebaeudetyp !== "NWG") return;

    const y = Number(state.baujahr);
    const nutzung = String(state.nwg_nutzung || "");

    // --- by Baujahr
    if (Number.isFinite(y)) {
      if (y <= 1978) {
        if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "Massiv";
        if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "gering (<30%)";
        if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "FensterlГјftung";
        if (isEmpty(state.heizung_kesseltyp)) state.heizung_kesseltyp = "Konstanttemperatur";
      } else if (y <= 1994) {
        if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "Vorhangfassade";
        if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "mittel (30вЂ“60%)";
        if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "FensterlГјftung";
        if (isEmpty(state.heizung_kesseltyp)) state.heizung_kesseltyp = "Niedertemperatur";
      } else if (y <= 2008) {
        if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "WDVS";
        if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "mittel (30вЂ“60%)";
        if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Zentrale LГјftungsanlage";
        if (isEmpty(state.heizung_kesseltyp)) state.heizung_kesseltyp = "Brennwert";
      } else {
        if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "WDVS";
        if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "mittel (30вЂ“60%)";
        if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "LГјftung mit WГ¤rmerГјckgewinnung";
        if (isEmpty(state.heizung_kesseltyp)) state.heizung_kesseltyp = "Brennwert";
      }
    }

    // --- by Nutzung (overrides only if empty, to avoid fighting user)
    if (nutzung === "BГјro / Verwaltung" || nutzung === "Schule / Kita") {
      if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "Vorhangfassade";
      if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "hoch (>60%)";
      if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Zentrale LГјftungsanlage";
    } else if (nutzung === "Lager / Produktion") {
      if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "Stahlbeton";
      if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "gering (<30%)";
    } else if (nutzung === "Einzelhandel") {
      if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Zentrale LГјftungsanlage";
      if (isEmpty(state.nwg_kuehlung)) state.nwg_kuehlung = "Split-Klima";
    } else if (nutzung === "Gastronomie") {
      if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Mechanische Abluft";
      if (isEmpty(state.nwg_kuehlung)) state.nwg_kuehlung = "Split-Klima";
    }
  },
};

function collectFieldsFromStep(step) {
  const out = [];
  if (!step) return out;
  if (Array.isArray(step.blocks) && step.blocks.length) {
    step.blocks.forEach((b) => (b.fields || []).forEach((f) => out.push(f)));
  } else {
    (step.fields || []).forEach((f) => out.push(f));
  }
  return out;
}

// --- runtime state (derive defaults from spec so we don't forget keys)
const DEFAULTS = { uploads: {} };
for (const st of (FORM_SPEC.steps || [])) {
  for (const f of collectFieldsFromStep(st)) {
    if (!f || !f.key) continue;
    if (f.type === "file") continue; // files are tracked in state.uploads
    if (!(f.key in DEFAULTS)) DEFAULTS[f.key] = f.type === "repeater" ? [] : "";
  }
}

let state = deepClone(DEFAULTS);
let stepIndex = 0;
let maxReachedStep = 0;

const TIPS = TOOL_TIPS_DE || {};

const STORAGE_KEY_BASE = "ea_wizard_draft_v1";
function getStorageKey() {
  // Per-path draft: different pages do not overwrite each other's local drafts.
  // Example: ea_wizard_draft_v1:/preview/energieausweis-form.html
  try {
    return STORAGE_KEY_BASE + ":" + String(location.pathname || "");
  } catch (e) {
    return STORAGE_KEY_BASE;
  }
}

const dom = {
  topStepper: document.getElementById("topStepper"),
  stepTitle: document.getElementById("stepTitle"),
  stepMeta: document.getElementById("stepMeta"),
  stepDesc: document.getElementById("stepDesc"),

  stepIntro: document.getElementById("stepIntro"),
  introTitle: document.getElementById("introTitle"),
  introText: document.getElementById("introText"),

  warnBox: document.getElementById("warnBox"),
  warnText: document.getElementById("warnText"),

  form: document.getElementById("wizardForm"),
  summaryBox: document.getElementById("summaryBox"),
  summaryJson: document.getElementById("summaryJson"),

  btnBack: document.getElementById("btnBack"),
  btnNext: document.getElementById("btnNext"),
  btnSave: document.getElementById("btnSave"),
  btnDownload: document.getElementById("btnDownload"),

  overviewProgress: document.getElementById("overviewProgress"),
  buildInfo: document.getElementById("buildInfo"),
};

if (dom.buildInfo && typeof BUILD_INFO === "object" && BUILD_INFO) {
  const c = BUILD_INFO.commit ? String(BUILD_INFO.commit) : "";
  const t = BUILD_INFO.builtAt ? String(BUILD_INFO.builtAt) : "";
  dom.buildInfo.textContent = c ? ("Build: " + c + (t ? (" (" + t + ")") : "")) : "";
}

function visibleSteps() {
  return (FORM_SPEC.steps || []).filter((st) => !st.when || evalCond(st.when, state));
}

function currentStep() {
  const steps = visibleSteps();
  return steps[stepIndex] || steps[0];
}

function isRequired(field) {
  if (typeof field.required === "boolean") return field.required;
  if (field.required) return evalCond(field.required, state);
  return false;
}

function fieldWhen(field) {
  if (!field.when) return true;
  return evalCond(field.when, state);
}

function optionsForField(field) {
  const raw =
    field.options ||
    (field.optionsRef && FORM_SPEC.optionSets && FORM_SPEC.optionSets[field.optionsRef]) ||
    [];

  return raw.filter((opt) => !opt.when || evalCond(opt.when, state));
}

function selectedOptionFor(field, value) {
  const opts = optionsForField(field);
  const opt = opts.find((o) => String(o.value) === String(value));
  return { opt, opts };
}

function renderSelectedOptionTip(field, value) {
  const { opt } = selectedOptionFor(field, value);
  const key = opt && opt.tipKey;
  if (!key || !TIPS[key]) return null;
  return el("div", { class: "optiontip" }, String(TIPS[key]));
}

function setTipOpen(tipEl, open) {
  tipEl.setAttribute("data-open", open ? "1" : "0");
}

document.addEventListener("click", (e) => {
  const tip = e.target.closest(".tip");
  document.querySelectorAll(".tip[data-open=\"1\"]").forEach((t) => {
    if (t !== tip) setTipOpen(t, false);
  });
  if (tip) {
    const isOpen = tip.getAttribute("data-open") === "1";
    setTipOpen(tip, !isOpen);
  }
});

function renderLabel(field) {
  const pieces = [el("span", null, field.label)];
  if (isRequired(field)) pieces.push(el("span", { class: "req", "aria-hidden": "true" }, "*"));
  if (field.tipKey && TIPS[field.tipKey]) {
    pieces.push(
      el(
        "span",
        { class: "tip", role: "button", tabindex: "0", "aria-label": "Info" },
        "?",
        el("span", { class: "tipbox", html: String(TIPS[field.tipKey]).replaceAll("\n", "<br>") })
      )
    );
  }
  return el("label", null, ...pieces);
}

function renderStepper() {
  const steps = visibleSteps();
  dom.topStepper.innerHTML = "";
  steps.forEach((st, idx) => {
    const locked = idx > maxReachedStep;
    const pill = el(
      "div",
      {
        class: "step-pill" + (idx === stepIndex ? " active" : "") + (idx < stepIndex ? " done" : "") + (locked ? " locked" : ""),
        ...(locked ? {} : { onclick: () => { stepIndex = idx; render(); } }),
      },
      el("span", { class: "num" }, String(idx + 1)),
      el("span", null, st.title)
    );
    dom.topStepper.appendChild(pill);
  });
}

function runPlausibilityWarnings() {
  const warnings = [];
  const y = Number(state.baujahr);
  // Spec examples:
  // - alte Fenster + Neubau -> prГјfen
  // - Baujahr < 1960 + FuГџbodenheizung -> prГјfen
  // - WГ¤rmepumpe + Radiatoren -> Hinweis
  if (Number.isFinite(y) && y >= 2000) {
    if (state.fenster_type === "Einfachverglasung" || state.fenster_type === "Kastenfenster") warnings.push("Alte Fenster + neueres Baujahr: bitte prГјfen.");
  }
  if (Number.isFinite(y) && y < 1960 && state.heizung_waermeabgabe === "FuГџbodenheizung") warnings.push("Baujahr < 1960 + FuГџbodenheizung: bitte prГјfen.");
  if (state.heizung_kesseltyp === "WГ¤rmepumpe" && state.heizung_waermeabgabe === "Radiatoren") warnings.push("WГ¤rmepumpe + Radiatoren: Hinweis (bitte prГјfen).");

  // NWG SMART warnings (from spec examples)
  if (state.gebaeudetyp === "NWG") {
    if (state.nwg_fensteranteil === "hoch (>60%)") warnings.push("Hohe GlasflГ¤chen beeinflussen den Energiebedarf maГџgeblich.");
    if (state.nwg_lueftung === "Zentrale LГјftungsanlage" || state.nwg_lueftung === "LГјftung mit WГ¤rmerГјckgewinnung") warnings.push("Angaben zur Luftmenge kГ¶nnen fГјr den Bedarfsausweis erforderlich sein.");
    if (state.nwg_aussenwand_simple === "Vorhangfassade") warnings.push("Vorhangfassaden dieser Bauzeit besitzen hГ¤ufig einen erhГ¶hten Energiebedarf.");
  }
  if (warnings.length) {
    dom.warnBox.style.display = "";
    dom.warnText.textContent = warnings.join(" ");
  } else {
    dom.warnBox.style.display = "none";
    dom.warnText.textContent = "";
  }
}

function setValue(key, value, step) {
  state[key] = value;

  // Keep spec constraint: if Ausweisart not Bedarf, remove invalid Anlass
  if (key === "ausweisart" && state.ausweisart !== "Bedarfsausweis") {
    if (state.anlass === "Neubau" || state.anlass === "Modernisierung") state.anlass = "";
  }

  // After-change hooks from spec
  const hookName = step && step.afterChangeRef;
  if (hookName && AFTER_CHANGE[hookName]) AFTER_CHANGE[hookName](state, key);

  render();
}

function renderFields(step) {
  dom.form.innerHTML = "";

  const blocks = Array.isArray(step.blocks) && step.blocks.length
    ? step.blocks
    : [{ title: "", fields: step.fields || [] }];

  blocks.forEach((block) => {
    const fields = (block.fields || []).filter((f) => fieldWhen(f));
    if (block.title) dom.form.appendChild(el("div", { class: "block-title" }, block.title));

    fields.forEach((field) => {
      const key = field.key;
      const val = state[key];

      const wrap = el("div", { class: "field" + (field.full ? " full" : "") });
      const err = el("div", { class: "errtxt", id: "err_" + key });

      let control = null;
      let optionTip = null;
      let wantsDefaultLabel = true;

      if (field.type === "select") {
        const opts = optionsForField(field);
        control = el("select", { class: "control", name: key });
        opts.forEach((opt) => {
          const o = el("option", { value: opt.value }, opt.label);
          if (String(val) === String(opt.value)) o.selected = true;
          control.appendChild(o);
        });
        control.addEventListener("change", () => setValue(key, control.value, step));
        optionTip = renderSelectedOptionTip(field, val);
      } else if (field.type === "number" || field.type === "text") {
        control = el("input", { class: "control", name: key, type: field.type === "number" ? "number" : "text", value: val ?? "", placeholder: field.hint || "" });
        if (field.min != null) control.setAttribute("min", String(field.min));
        if (field.max != null) control.setAttribute("max", String(field.max));
        control.addEventListener("input", () => setValue(key, control.value, step));
      } else if (field.type === "counter") {
        const min = field.min != null ? Number(field.min) : 0;
        const max = field.max != null ? Number(field.max) : 999999;
        const cur = Number(val || 0);
        const input = el("input", { class: "control", name: key, type: "number", value: val ?? "", placeholder: field.hint || "" });
        if (field.min != null) input.setAttribute("min", String(field.min));
        if (field.max != null) input.setAttribute("max", String(field.max));
        input.addEventListener("input", () => setValue(key, input.value, step));

        const dec = el("button", { type: "button", class: "pm", onclick: () => setValue(key, String(clamp((Number(state[key] || cur) || 0) - 1, min, max)), step) }, "-");
        const inc = el("button", { type: "button", class: "pm", onclick: () => setValue(key, String(clamp((Number(state[key] || cur) || 0) + 1, min, max)), step) }, "+");
        control = el("div", { class: "counter" }, dec, input, inc);
      } else if (field.type === "radio") {
        const opts = optionsForField(field);
        control = el("div", { class: "radio-row", role: "group" });
        opts.forEach((opt) => {
          const id = key + "_" + opt.value;
          const input = el("input", { type: "radio", name: key, id, value: opt.value });
          if (val === opt.value) input.checked = true;
          input.addEventListener("change", () => setValue(key, opt.value, step));
          control.appendChild(el("label", { class: "chip", for: id }, input, el("span", null, opt.label)));
        });
        optionTip = renderSelectedOptionTip(field, val);
      } else if (field.type === "imgselect") {
        control = el("div", { class: "img-choices" });
        const opts = optionsForField(field);
        opts.forEach((opt) => {
          const box = el(
            "div",
            { class: "img-choice" + (val === opt.value ? " sel" : ""), onclick: () => setValue(key, opt.value, step) },
            el("img", { src: opt.img, alt: opt.label }),
            el("div", { class: "cap" }, opt.label)
          );
          control.appendChild(box);
        });
        optionTip = renderSelectedOptionTip(field, val);
      } else if (field.type === "file") {
        control = el("div", { class: "upload" }, el("div", { class: "row" }, el("b", null, "Upload"), el("span", null, (field.accept || "").replaceAll(",", ", "))));
        const inp = el("input", { type: "file", name: key, accept: field.accept || "", ...(field.multiple ? { multiple: true } : {}) });
        const list = el("div", { class: "filelist", id: "file_" + key });
        const saved = state.uploads[key] || [];
        if (saved.length) list.textContent = "AusgewГ¤hlt: " + saved.join(", ");
        inp.addEventListener("change", () => {
          const names = Array.from(inp.files || []).map((f) => f.name);
          state.uploads[key] = names;
          list.textContent = names.length ? "AusgewГ¤hlt: " + names.join(", ") : "";
        });
        control.appendChild(inp);
        control.appendChild(list);
      } else if (field.type === "repeater") {
        const items = Array.isArray(val) ? val : [];
        const itemLabel = field.itemLabel || "Eintrag";

        const list = el("div", { class: "rep-list" });
        const renderRow = (idx) => {
          const it = items[idx] || {};
          const row = el("div", { class: "rep-row" });
          const head = el(
            "div",
            { class: "rep-head" },
            el("b", null, itemLabel + " " + String(idx + 1)),
            el("button", { type: "button", class: "rep-remove", onclick: () => {
              items.splice(idx, 1);
              setValue(key, items, step);
            } }, "Entfernen")
          );
          row.appendChild(head);

          const grid = el("div", { class: "rep-grid" });
          (field.fields || []).forEach((sf) => {
            const sfKey = sf.key;
            const sfVal = it[sfKey] ?? "";
            const cell = el("div", { class: "rep-cell" });
            cell.appendChild(renderLabel(sf));

            const inp = el("input", {
              class: "control",
              type: sf.type === "number" ? "number" : "text",
              value: sfVal,
              placeholder: sf.hint || ""
            });
            if (sf.min != null) inp.setAttribute("min", String(sf.min));
            if (sf.max != null) inp.setAttribute("max", String(sf.max));
            inp.addEventListener("input", () => {
              const next = { ...(items[idx] || {}) };
              next[sfKey] = inp.value;
              items[idx] = next;
              setValue(key, items, step);
            });
            cell.appendChild(inp);
            grid.appendChild(cell);
          });

          // Derived preview: area + total
          const h = Number(it.hoehe_m);
          const w = Number(it.breite_m);
          if (Number.isFinite(h) && Number.isFinite(w)) {
            const a = h * w;
            row.appendChild(el("div", { class: "rep-math" }, "FlГ¤che: ", el("b", null, a.toFixed(3)), " mВІ"));
          }

          row.appendChild(grid);
          return row;
        };

        items.forEach((_, idx) => list.appendChild(renderRow(idx)));

        const addBtn = el("button", { type: "button", class: "btn secondary rep-add", onclick: () => {
          items.push({});
          setValue(key, items, step);
        } }, "+ " + itemLabel + " hinzufГјgen");

        // Total area
        let total = 0;
        for (const it of items) {
          const h = Number(it && it.hoehe_m);
          const w = Number(it && it.breite_m);
          if (Number.isFinite(h) && Number.isFinite(w)) total += h * w;
        }
        const totalEl = el("div", { class: "rep-total" }, "Summe: ", el("b", null, total.toFixed(3)), " mВІ");

        control = el("div", { class: "repeater" }, list, addBtn, totalEl);
      } else if (field.type === "checkbox") {
        wantsDefaultLabel = false;
        const id = "cb_" + key;
        const input = el("input", { type: "checkbox", id, name: key });
        input.checked = Boolean(val);
        input.addEventListener("change", () => setValue(key, input.checked, step));
        control = el("div", { class: "checkbox-row" }, input, el("label", { for: id, class: "cb-label" }, field.label));
        if (field.tipKey && TIPS[field.tipKey]) optionTip = el("div", { class: "optiontip" }, String(TIPS[field.tipKey]));
      }

      if (wantsDefaultLabel) wrap.appendChild(renderLabel(field));
      if (control) wrap.appendChild(control);
      if (optionTip) wrap.appendChild(optionTip);
      if (key === "fenster_type" && (state.fenster_type === "Einfachverglasung" || state.fenster_type === "Kastenfenster")) {
        wrap.appendChild(el("div", { class: "helptext" }, "Bei Austausch gelten GEG-Mindestwerte."));
      }
      if (field.help) wrap.appendChild(el("div", { class: "helptext" }, field.help));
      wrap.appendChild(err);
      dom.form.appendChild(wrap);
    });
  });
}

function validateStep(idx, { silent } = {}) {
  const steps = visibleSteps();
  const st = steps[idx];
  if (!st) return { ok: true, errors: {} };

  const errors = {};
  const allFields = [];
  if (Array.isArray(st.blocks) && st.blocks.length) {
    st.blocks.forEach((b) => (b.fields || []).forEach((f) => allFields.push(f)));
  } else {
    (st.fields || []).forEach((f) => allFields.push(f));
  }
  const fields = allFields.filter((f) => fieldWhen(f));

  for (const f of fields) {
    const key = f.key;
    const req = isRequired(f);
    const v = f.type === "file" ? state.uploads[key] || [] : state[key];

    if (req && isEmpty(v)) {
      errors[key] = "Pflichtfeld";
      continue;
    }
    if (req && f.type === "checkbox" && v !== true) {
      errors[key] = "Pflichtfeld";
      continue;
    }
    if (f.type === "repeater") {
      const items = Array.isArray(v) ? v : [];
      if (req && items.length === 0) {
        errors[key] = "Mindestens ein Eintrag erforderlich";
        continue;
      }
      // Basic per-row validation: required subfields must be filled.
      for (const it of items) {
        for (const sf of (f.fields || [])) {
          const sfReq = sf.required === true;
          const sfVal = it && it[sf.key];
          if (sfReq && isEmpty(sfVal)) errors[key] = "Bitte alle Pflichtfelder in der Liste ausfГјllen";
          if (sf.type === "number" && !isEmpty(sfVal)) {
            const n = Number(sfVal);
            if (!Number.isFinite(n)) errors[key] = "UngГјltige Zahl in der Liste";
            if (sf.min != null && n < sf.min) errors[key] = "Wert in der Liste ist zu klein";
            if (sf.max != null && n > sf.max) errors[key] = "Wert in der Liste ist zu groГџ";
          }
        }
      }
      continue;
    }
    if (!isEmpty(v) && f.pattern) {
      const re = new RegExp(f.pattern);
      if (!re.test(String(v))) errors[key] = "UngГјltiges Format";
    }
    if (!isEmpty(v) && f.type === "number") {
      const n = Number(v);
      if (!Number.isFinite(n)) errors[key] = "Zahl erforderlich";
      if (f.min != null && n < f.min) errors[key] = "Zu klein";
      if (f.max != null && n > f.max) errors[key] = "Zu groГџ";
    }
  }

  if (!silent) {
    for (const f of fields) {
      const key = f.key;
      const errEl = document.getElementById("err_" + key);
      if (!errEl) continue;
      if (errors[key]) {
        errEl.textContent = errors[key];
        errEl.classList.add("show");
      } else {
        errEl.textContent = "";
        errEl.classList.remove("show");
      }
    }
  }

  return { ok: Object.keys(errors).length === 0, errors };
}

function exportData() {
  const out = deepClone(state);
  for (const k of Object.keys(out)) {
    if (k === "uploads") continue;
    if (isEmpty(out[k])) delete out[k];
  }
  if (out.uploads) {
    const u = {};
    for (const [k, v] of Object.entries(out.uploads)) if (v && v.length) u[k] = v;
    out.uploads = u;
    if (Object.keys(out.uploads).length === 0) delete out.uploads;
  }
  out._meta = { createdAt: new Date().toISOString(), spec: "src/energieausweis-form/spec/*" };
  return out;
}

function updateOverview() {
  const steps = visibleSteps();
  dom.overviewProgress.textContent = String(stepIndex + 1) + "/" + String(steps.length);
}

function render() {
  const steps = visibleSteps();
  stepIndex = clamp(stepIndex, 0, steps.length - 1);
  const st = currentStep();
  if (!st) return;

  dom.stepTitle.textContent = st.title;
  dom.stepMeta.textContent = st.meta || "";
  if (dom.stepDesc) dom.stepDesc.textContent = (st.intro && st.intro.text) ? st.intro.text : "";

  if (st.intro) {
    dom.stepIntro.style.display = "";
    dom.introTitle.textContent = st.intro.title || "Hinweis";
    dom.introText.textContent = st.intro.text || "";
  } else {
    dom.stepIntro.style.display = "none";
  }

  dom.summaryBox.style.display = "none";
  dom.btnDownload.style.display = "none";

  if (st.id === "summary") {
    dom.form.innerHTML = "";
    dom.summaryBox.style.display = "";
    dom.btnDownload.style.display = "";
    dom.summaryJson.textContent = JSON.stringify(exportData(), null, 2);
  } else {
    renderFields(st);
  }

  dom.btnBack.disabled = stepIndex === 0;

  renderStepper();
  runPlausibilityWarnings();
  updateOverview();
}

// Buttons
dom.btnBack.addEventListener("click", () => {
  stepIndex = clamp(stepIndex - 1, 0, visibleSteps().length - 1);
  render();
});

dom.btnNext.addEventListener("click", () => {
  const steps = visibleSteps();
  const res = validateStep(stepIndex, { silent: false });
  if (!res.ok) return;
  stepIndex = clamp(stepIndex + 1, 0, steps.length - 1);
  maxReachedStep = Math.max(maxReachedStep, stepIndex);
  render();
});

dom.btnSave.addEventListener("click", () => {
  const data = exportData();
  try {
    localStorage.setItem(getStorageKey(), JSON.stringify(data));
    const old = dom.btnSave.textContent;
    dom.btnSave.textContent = "Gespeichert";
    setTimeout(() => (dom.btnSave.textContent = old), 900);
  } catch (e) {}
});

dom.btnDownload.addEventListener("click", () => {
  const data = exportData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "energieausweis-form.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

// Load draft if any
try {
  const raw = localStorage.getItem(getStorageKey());
  if (raw) {
    const d = JSON.parse(raw);
    state = { ...deepClone(DEFAULTS), ...d, uploads: d.uploads || {} };
    // Compute maxReachedStep from saved progress
    const steps = visibleSteps();
    for (let i = 0; i < steps.length; i++) {
      const res = validateStep(i, { silent: true });
      if (res.ok) maxReachedStep = i + 1;
      else break;
    }
    maxReachedStep = clamp(maxReachedStep, 0, steps.length - 1);
  }
} catch (e) {}

render();
