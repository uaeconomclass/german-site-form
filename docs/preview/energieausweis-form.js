/* AUTO-GENERATED FILE. Do not edit directly.
 * Source of truth:
 * - C:\Users\User\Desktop\форма для німецького сайту\src\energieausweis-form\spec
 * - C:\Users\User\Desktop\форма для німецького сайту\src\energieausweis-form\runtime
 * Rebuild:
 * - powershell -NoProfile -ExecutionPolicy Bypass -File tools/build-preview.ps1
 */
const FORM_SPEC = {"version":"v1","product":"Energieausweis","uiLocale":"de-DE","optionSets":{"anlass":[{"value":"","label":"Anlass"},{"value":"Vermietung","label":"Vermietung"},{"value":"Verkauf","label":"Verkauf"},{"value":"Sonstiges","label":"Sonstiges"},{"value":"Neubau","label":"Neubau","when":{"eq":["ausweisart","Bedarfsausweis"]}},{"value":"Modernisierung","label":"Modernisierung","when":{"eq":["ausweisart","Bedarfsausweis"]}}],"ausweisart":[{"value":"","label":"Welchen Ausweis benötigen Sie?"},{"value":"Verbrauchsausweis","label":"Verbrauchsausweis"},{"value":"Bedarfsausweis","label":"Bedarfsausweis"},{"value":"weiß ich nicht","label":"weiß ich nicht"}],"gebaeudetyp":[{"value":"","label":"Gebäudetyp"},{"value":"WG","label":"Wohngebäude (WG)"},{"value":"NWG","label":"Nichtwohngebäude (NWG)"},{"value":"MISCH","label":"Mischgebäude"}],"gebaeudetyp_radio":[{"value":"WG","label":"Wohngebäude (WG)"},{"value":"NWG","label":"Nichtwohngebäude (NWG)"},{"value":"MISCH","label":"Mischgebäude"}],"wg_subtype":[{"value":"","label":"Bitte wählen…"},{"value":"EFH","label":"Einfamilienhaus (EFH)"},{"value":"ZFH","label":"Zweifamilienhaus (ZFH)"},{"value":"MFH","label":"Mehrfamilienhaus (MFH)"},{"value":"REIHE","label":"Reihenhaus / Doppelhaushälfte"}],"fenster_type":[{"value":"","label":"Bitte wählen…"},{"value":"Einfachverglasung","label":"Einfachverglasung","tipKey":"fenster_einfachverglasung"},{"value":"Verbundfenster","label":"Verbundfenster","tipKey":"fenster_verbundfenster"},{"value":"Kastenfenster","label":"Kastenfenster","tipKey":"fenster_kastenfenster"},{"value":"Isolierglas alt","label":"Zweifachverglasung (Isolierverglasung, alt)","tipKey":"fenster_isolierglas_alt"},{"value":"Wärmeschutzglas","label":"Zweifachwärmeschutzverglasung","tipKey":"fenster_waermeschutzglas"},{"value":"3-fach Wärmeschutzglas","label":"Dreifachverglasung","tipKey":"fenster_dreifach"}],"fenster_rahmenmaterial":[{"value":"","label":"Bitte wählen…"},{"value":"Holz","label":"Holz"},{"value":"Kunststoff","label":"Kunststoff"},{"value":"Metall","label":"Metall"}],"kellerdecke_keller":[{"value":"","label":"Bitte wählen…"},{"value":"unbeheizter Keller","label":"unbeheizter Keller"},{"value":"beheizter Keller","label":"beheizter Keller"}],"kellerdecke_keller_radio":[{"value":"unbeheizter Keller","label":"unbeheizter Keller"},{"value":"beheizter Keller","label":"beheizter Keller"}],"kellerdecke_daemmung":[{"value":"","label":"Bitte wählen…"},{"value":"Dämmung vorhanden","label":"Dämmung vorhanden"},{"value":"Dämmung nicht vorhanden","label":"Dämmung nicht vorhanden"}],"kellerdecke_daemmung_radio":[{"value":"Dämmung vorhanden","label":"Dämmung vorhanden"},{"value":"Dämmung nicht vorhanden","label":"Dämmung nicht vorhanden"}],"heizung_waermeerzeuger":[{"value":"","label":"Bitte wählen…"},{"value":"Öl","label":"Öl","tipKey":"heizung_oel"},{"value":"Gas","label":"Gas","tipKey":"heizung_gas"},{"value":"Fernwärme","label":"Fernwärme","tipKey":"heizung_fernwaerme"},{"value":"Wärmepumpe","label":"Wärmepumpe","tipKey":"heizung_waermepumpe"},{"value":"Biomasse","label":"Biomasse","tipKey":"heizung_biomasse"},{"value":"Elektro","label":"Elektro","tipKey":"heizung_elektro"},{"value":"Einzelöfen","label":"Einzelöfen","tipKey":"heizung_einzelofen"},{"value":"BHKW / KWK","label":"BHKW / KWK","tipKey":"heizung_bhkw"},{"value":"Hybridheizung","label":"Hybridheizung","tipKey":"heizung_hybrid"}],"heizung_kesseltyp":[{"value":"","label":"Bitte wählen…"},{"value":"Konstanttemperatur","label":"Konstanttemperatur","tipKey":"heizung_konstanttemperatur"},{"value":"Niedertemperatur","label":"Niedertemperatur","tipKey":"heizung_niedertemperatur"},{"value":"Brennwert","label":"Brennwert","tipKey":"heizung_brennwert"},{"value":"Wärmepumpe","label":"Wärmepumpe","tipKey":"heizung_waermepumpe"}],"heizung_waermeabgabe":[{"value":"","label":"Bitte wählen…"},{"value":"Radiatoren","label":"Radiatoren"},{"value":"Flachheizkörper","label":"Flachheizkörper"},{"value":"Fußbodenheizung","label":"Fußbodenheizung"},{"value":"Konvektoren","label":"Konvektoren"}],"warmwasser":[{"value":"","label":"Bitte wählen…"},{"value":"Zentrale Warmwasserbereitung","label":"Zentrale Warmwasserbereitung","tipKey":"warmwasser_zentral"},{"value":"Dezentrale Warmwasserbereitung","label":"Dezentrale Warmwasserbereitung","tipKey":"warmwasser_dezentral"},{"value":"Elektrischer Warmwasserspeicher","label":"Elektrischer Warmwasserspeicher","tipKey":"warmwasser_speicher"},{"value":"Durchlauferhitzer","label":"Durchlauferhitzer","tipKey":"warmwasser_durchlauferhitzer"},{"value":"Kombiniert mit Heizung","label":"Kombiniert mit Heizung","tipKey":"warmwasser_kombiniert"},{"value":"Solarthermie","label":"Solarthermie","tipKey":"warmwasser_solarthermie"}],"ja_nein":[{"value":"","label":"Bitte wählen…"},{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}],"ja_nein_radio":[{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}],"keller":[{"value":"Nicht vorhanden","label":"Nicht vorhanden"},{"value":"Unbeheizt","label":"Unbeheizt"},{"value":"Beheizt","label":"Beheizt"}],"dachgeschoss":[{"value":"Nicht vorhanden","label":"Nicht vorhanden"},{"value":"Unbeheizt","label":"Unbeheizt"},{"value":"Beheizt","label":"Beheizt"}],"gebaeudeanteil":[{"value":"Gesamtgebäude","label":"Gesamtgebäude"},{"value":"Wohnen","label":"Wohnen"}],"nwg_nutzung":[{"value":"","label":"Bitte wählen…"},{"value":"Büro / Verwaltung","label":"Büro / Verwaltung"},{"value":"Praxis / Gesundheit","label":"Praxis / Gesundheit"},{"value":"Schule / Kita","label":"Schule / Kita"},{"value":"Einzelhandel","label":"Einzelhandel"},{"value":"Gastronomie","label":"Gastronomie"},{"value":"Lager / Produktion","label":"Lager / Produktion"},{"value":"Sonstiges NWG","label":"Sonstiges NWG"}],"nwg_aussenwand_simple":[{"value":"","label":"Bitte wählen…"},{"value":"Massiv","label":"Massiv"},{"value":"Stahlbeton","label":"Stahlbeton"},{"value":"Vorhangfassade","label":"Vorhangfassade"},{"value":"Glasfassade","label":"Glasfassade"},{"value":"WDVS","label":"WDVS"},{"value":"unbekannt","label":"unbekannt"}],"nwg_fensteranteil":[{"value":"","label":"Bitte wählen…"},{"value":"gering (\u003c30%)","label":"gering (\u003c30%)"},{"value":"mittel (30–60%)","label":"mittel (30–60%)"},{"value":"hoch (\u003e60%)","label":"hoch (\u003e60%)"}],"lueftung":[{"value":"","label":"Bitte wählen…"},{"value":"Fensterlüftung","label":"Fensterlüftung"},{"value":"Mechanische Abluft / Schachtlüftung","label":"Mechanische Abluft / Schachtlüftung"},{"value":"Zentrale ohne WRG","label":"Zentrale ohne WRG"},{"value":"Zentrale WRG","label":"Zentrale WRG"},{"value":"Dezentrale WRG","label":"Dezentrale WRG"},{"value":"Nicht bekannt","label":"Nicht bekannt"}],"nwg_lueftung":[{"value":"","label":"Bitte wählen…"},{"value":"Fensterlüftung","label":"Fensterlüftung"},{"value":"Mechanische Abluft","label":"Mechanische Abluft"},{"value":"Zentrale Lüftungsanlage","label":"Zentrale Lüftungsanlage"},{"value":"Lüftung mit Wärmerückgewinnung","label":"Lüftung mit Wärmerückgewinnung"}],"nwg_kuehlung":[{"value":"","label":"Bitte wählen…"},{"value":"keine","label":"keine"},{"value":"Split-Klima","label":"Split-Klima"},{"value":"zentrale Klimaanlage","label":"zentrale Klimaanlage"},{"value":"Kaltwasseranlage","label":"Kaltwasseranlage"}],"nwg_beleuchtung":[{"value":"","label":"Bitte wählen…"},{"value":"Standard","label":"Standard"},{"value":"LED","label":"LED"},{"value":"unbekannt","label":"unbekannt"}]},"steps":[{"id":"anlass_ausweisart","title":"Anlass \u0026 Ausweisart","meta":"1","intro":{"title":"Start","text":"Wählen Sie Anlass und Ausweisart."},"fields":[{"key":"anlass","label":"Anlass","type":"select","required":true,"tipKey":"anlass","optionsRef":"anlass"},{"key":"ausweisart","label":"Ausweisart","type":"select","required":true,"tipKey":"ausweisart","optionsRef":"ausweisart"}]},{"id":"gebaeudetyp","title":"Gebäude-Stammdaten","meta":"2","afterChangeRef":"smart_wg_baujahr","intro":{"title":"Gebäudetyp","text":"Das ist der wichtigste Abzweig der Form."},"blocks":[{"title":"","fields":[{"key":"gebaeudetyp","label":"Gebäudetyp","type":"radio","required":true,"tipKey":"gebaeudetyp","optionsRef":"gebaeudetyp_radio","full":true}]},{"title":"Untertyp","fields":[{"key":"wg_subtype","label":"Gebäude","type":"select","required":true,"optionsRef":"wg_subtype","when":{"eq":["gebaeudetyp","WG"]},"full":true}]},{"title":"Basisdaten","fields":[{"key":"baujahr","label":"Baujahr Gebäude","type":"number","required":true,"min":1800,"max":2100,"hint":"z. B. 1985","when":{"eq":["gebaeudetyp","WG"]}},{"key":"anzahl_wohneinheiten","label":"Anzahl Wohneinheiten","type":"counter","required":true,"min":1,"max":999,"hint":"z. B. 1","when":{"eq":["gebaeudetyp","WG"]}},{"key":"wohnflaeche","label":"Wohnfläche (m²)","type":"number","required":true,"min":1,"max":20000,"tipKey":"wohnflaeche","hint":"z. B. 120","when":{"eq":["gebaeudetyp","WG"]}},{"key":"nutzflaeche","label":"Nutzfläche (m²)","type":"number","required":true,"min":1,"max":20000,"tipKey":"nutzflaeche","hint":"z. B. 155","when":{"eq":["gebaeudetyp","WG"]}}]},{"title":"Grundprüfung","fields":[{"key":"gebaeudeanteil","label":"Gebäudeteil","type":"radio","required":true,"optionsRef":"gebaeudeanteil","when":{"eq":["gebaeudetyp","WG"]}},{"key":"dachgeschoss","label":"Dachgeschoss","type":"radio","required":true,"optionsRef":"dachgeschoss","when":{"eq":["gebaeudetyp","WG"]}},{"key":"keller","label":"Keller","type":"radio","required":true,"optionsRef":"keller","when":{"eq":["gebaeudetyp","WG"]}}]}]},{"id":"adresse","title":"Gebäudeadresse","meta":"3","intro":{"title":"Gebäudeadresse","text":"Bitte geben Sie die Adresse des Gebäudes an, für das der Energieausweis erstellt wird."},"fields":[{"key":"strasse","label":"Straße","type":"text","required":true,"hint":"Straße"},{"key":"hausnummer","label":"Hausnummer","type":"text","required":true,"hint":"Nr."},{"key":"plz","label":"PLZ","type":"text","required":true,"pattern":"^\\d{5}$","hint":"z. B. 10115"},{"key":"ort","label":"Ort","type":"text","required":true,"hint":"z. B. München"}]},{"id":"wg_basisdaten","title":"WG: Basisdaten (merged into step 2)","meta":"A1","when":{"eq":["__wg_basisdaten_enabled","1"]},"blocks":[]},{"id":"wg_huelle_fenster","title":"WG: Gebäudehülle \u0026 Fenster","meta":"A2","when":{"eq":["gebaeudetyp","WG"]},"intro":{"title":"Gebäudehülle","text":"Außenwand und Fensterangaben.","img":"../assets/images/infografik/aussenwand-materialien-epochen.png"},"fields":[{"key":"aussenwand_type","label":"Außenwand (Typ)","type":"imgselect","required":true,"tipKey":"aussenwand_type","options":[{"value":"Fachwerk","label":"Fachwerk","img":"../assets/images/aussenwand/fachwerk.png","tipKey":"aussenwand_fachwerk"},{"value":"Vollziegel / Naturstein","label":"Vollziegel / Naturstein","img":"../assets/images/aussenwand/vollziegel.png","tipKey":"aussenwand_vollziegel"},{"value":"Hohlblock / Bims","label":"Hohlblock / Bims","img":"../assets/images/aussenwand/hohlblockstein-bims.png","tipKey":"aussenwand_bims"},{"value":"Kalksandstein","label":"Kalksandstein","img":"../assets/images/aussenwand/porenbeton-gasbeton.png","tipKey":"aussenwand_kalksandstein"},{"value":"Ziegel","label":"Ziegel","img":"../assets/images/aussenwand/ziegel-hochlochziegel.png","tipKey":"aussenwand_ziegel"},{"value":"Porenbeton / Gasbeton","label":"Porenbeton / Gasbeton","img":"../assets/images/aussenwand/porenbeton-gasbeton.png","tipKey":"aussenwand_porenbeton"},{"value":"Stahlbeton","label":"Stahlbeton","img":"../assets/images/aussenwand/stahlbeton.png","tipKey":"aussenwand_stahlbeton"},{"value":"WDVS vorhanden","label":"WDVS vorhanden","img":"../assets/images/aussenwand/wdvs-querschnitt.png","tipKey":"aussenwand_wdvs"},{"value":"unbekannt","label":"unbekannt","img":"../assets/images/aussenwand/wdvs-querschnitt.png"}]},{"key":"fenster_type","label":"Fenster (Typ)","type":"select","required":true,"tipKey":"fenster_type","optionsRef":"fenster_type"},{"key":"fenster_baujahr","label":"Baujahr Fenster","type":"number","required":true,"min":1800,"max":2100,"hint":"z. B. 2005"},{"key":"fenster_rahmenmaterial","label":"Rahmenmaterial","type":"select","required":false,"optionsRef":"fenster_rahmenmaterial"},{"key":"fenster_zustand","label":"Zustand der Fenster","type":"radio","required":true,"options":[{"value":"Alle dicht","label":"Alle dicht"},{"value":"Teilweise undicht","label":"Teilweise undicht"}]},{"key":"fenster_dichtungen","label":"Dichtungen vorhanden","type":"radio","required":true,"options":[{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}]},{"key":"fenster_vermassung","label":"Fenster-Vermassung (m²)","type":"repeater","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"tipKey":"fenster_vermassung","hint":"z. B. Küche, 1.23 × 1.49","itemLabel":"Fenster","fields":[{"key":"raum","label":"Raum / Bezeichnung","type":"text","required":false,"hint":"z. B. Küche"},{"key":"hoehe_m","label":"Höhe (m)","type":"number","required":true,"min":0.1,"max":10,"hint":"z. B. 1.23"},{"key":"breite_m","label":"Breite (m)","type":"number","required":true,"min":0.1,"max":10,"hint":"z. B. 1.49"}]}]},{"id":"wg_kellerdecke","title":"WG: Kellerdecke","meta":"A3","when":{"eq":["gebaeudetyp","WG"]},"intro":{"title":"Kellerdecke","text":"Angaben zum Keller und zur Dämmung."},"fields":[{"key":"keller_heizstatus","label":"Keller","type":"radio","required":true,"optionsRef":"kellerdecke_keller_radio"},{"key":"kellerdecke_daemmung","label":"Kellerdecke","type":"radio","required":true,"optionsRef":"kellerdecke_daemmung_radio"}]},{"id":"wg_heizung","title":"WG: Heizungsanlage","meta":"A4","when":{"eq":["gebaeudetyp","WG"]},"intro":{"title":"Heizung","text":"Angaben zur Heizungsanlage."},"blocks":[{"title":"Wärmeerzeuger","fields":[{"key":"heizung_waermeerzeuger","label":"Wärmeerzeuger","type":"select","required":true,"optionsRef":"heizung_waermeerzeuger","tipKey":"heizung_waermeerzeuger"},{"key":"heizung_baujahr","label":"Baujahr der Heizung","type":"number","required":false,"min":1800,"max":2100,"hint":"z. B. 2010"}]},{"title":"Kesseltyp","fields":[{"key":"heizung_kesseltyp","label":"Kesseltyp","type":"imgselect","required":true,"options":[{"value":"Konstanttemperatur","label":"Konstanttemperatur","img":"../assets/images/heizung/konstanttemperaturkessel.png","tipKey":"heizung_konstanttemperatur"},{"value":"Niedertemperatur","label":"Niedertemperatur","img":"../assets/images/heizung/niedertemperaturkessel.png","tipKey":"heizung_niedertemperatur"},{"value":"Brennwert","label":"Brennwert","img":"../assets/images/heizung/brennwertkessel.png","tipKey":"heizung_brennwert"},{"value":"Wärmepumpe","label":"Wärmepumpe","img":"../assets/images/heizung/waermepumpe.png","tipKey":"heizung_waermepumpe"}]}]},{"title":"Wärmeabgabe","fields":[{"key":"heizung_waermeabgabe","label":"Wärmeabgabe","type":"select","required":true,"optionsRef":"heizung_waermeabgabe"}]},{"title":"Zusatz","fields":[{"key":"pv_dach","label":"Photovoltaik (PV) auf dem Dach","type":"checkbox","required":false,"tipKey":"heizung_photovoltaik","full":true},{"key":"zirkulation","label":"Zirkulation (Warmwasser)","type":"checkbox","required":false,"tipKey":"heizung_zirkulation","full":true},{"key":"heizungsrohre_gedaemmt","label":"Heizungsrohre gedämmt","type":"radio","required":false,"optionsRef":"ja_nein_radio","tipKey":"heizung_rohre_gedaemmt"}]}]},{"id":"wg_warmwasser","title":"WG: Warmwasser","meta":"A5","when":{"eq":["gebaeudetyp","WG"]},"intro":{"title":"Warmwasser","text":"Angaben zur Warmwasserbereitung."},"fields":[{"key":"warmwasser_type","label":"Warmwasser","type":"select","required":true,"optionsRef":"warmwasser","tipKey":"warmwasser_type"},{"key":"warmwasserrohre_gedaemmt","label":"Warmwasserrohre gedämmt","type":"radio","required":false,"optionsRef":"ja_nein_radio","tipKey":"warmwasser_rohre_gedaemmt"}]},{"id":"wg_lueftung","title":"WG: Lüftung","meta":"A6","when":{"and":[{"eq":["gebaeudetyp","WG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"intro":{"title":"Lüftung","text":"Nur für Bedarfsausweis."},"fields":[{"key":"lueftung_type","label":"Lüftung","type":"imgselect","required":true,"options":[{"value":"Fensterlüftung","label":"Fensterlüftung","img":"../assets/images/lueftung/fensterlueftung.png","tipKey":"lueftung_fenster"},{"value":"Mechanische Abluft / Schachtlüftung","label":"Mechanische Abluft / Schachtlüftung","img":"../assets/images/lueftung/mechanische-abluft.png","tipKey":"lueftung_abluft"},{"value":"Zentrale ohne WRG","label":"Zentrale ohne WRG","img":"../assets/images/lueftung/zentrale-lueftungsanlage.png","tipKey":"lueftung_zentral_ohne_wrg"},{"value":"Zentrale WRG","label":"Zentrale WRG","img":"../assets/images/lueftung/zentrale-lueftungsanlage.png","tipKey":"lueftung_zentral_wrg"},{"value":"Dezentrale WRG","label":"Dezentrale WRG","img":"../assets/images/lueftung/dezentrale-lueftungsanlage.png","tipKey":"lueftung_dezentral_wrg"},{"value":"Nicht bekannt","label":"Nicht bekannt","img":"../assets/images/lueftung/fensterlueftung.png"}]}]},{"id":"nwg_nutzung_geometrie","title":"NWG: Nutzung \u0026 Geometrie","meta":"B1","when":{"eq":["gebaeudetyp","NWG"]},"afterChangeRef":"smart_nwg","intro":{"title":"Nichtwohngebäude","text":"Nutzung und Flächenangaben."},"fields":[{"key":"baujahr","label":"Baujahr Gebäude","type":"number","required":true,"min":1800,"max":2100,"hint":"z. B. 1998"},{"key":"nwg_nutzung","label":"Gebäudenutzung","type":"select","required":true,"optionsRef":"nwg_nutzung"},{"key":"nwg_nettogrundflaeche","label":"Nettogrundfläche (m²)","type":"number","required":true,"min":1,"max":500000,"hint":"z. B. 350"},{"key":"nwg_anzahl_nutzungseinheiten","label":"Anzahl Nutzungseinheiten","type":"number","required":true,"min":1,"max":50000,"hint":"z. B. 3"},{"key":"nwg_geschosshoehen","label":"Geschosshöhen (m)","type":"number","required":false,"min":1,"max":20,"hint":"optional"},{"key":"nwg_beheiztes_volumen","label":"Beheiztes Volumen (m³)","type":"number","required":false,"min":1,"max":5000000,"hint":"optional"}]},{"id":"nwg_huelle","title":"NWG: Gebäudehülle","meta":"B2","when":{"eq":["gebaeudetyp","NWG"]},"intro":{"title":"Gebäudehülle","text":"Vereinfachte Angaben für NWG."},"fields":[{"key":"nwg_aussenwand_simple","label":"Außenwand","type":"select","required":true,"optionsRef":"nwg_aussenwand_simple"},{"key":"nwg_fensteranteil","label":"Fensteranteil","type":"select","required":true,"tipKey":"nwg_fensteranteil","optionsRef":"nwg_fensteranteil"}]},{"id":"nwg_technik","title":"NWG: Lüftung / Klima / Technik","meta":"B3","when":{"eq":["gebaeudetyp","NWG"]},"intro":{"title":"Technik","text":"Wichtig: Diese Felder sind für NWG (insb. Bedarfsausweis) relevant."},"fields":[{"key":"nwg_lueftung","label":"Lüftung","type":"select","required":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"nwg_lueftung"},{"key":"nwg_kuehlung","label":"Kühlung","type":"select","required":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"nwg_kuehlung"},{"key":"nwg_beleuchtung","label":"Beleuchtung","type":"select","required":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"nwg_beleuchtung"}]},{"id":"nwg_heizung_warmwasser","title":"NWG: Heizung \u0026 Warmwasser","meta":"B4","when":{"eq":["gebaeudetyp","NWG"]},"intro":{"title":"Heizung/Warmwasser","text":"Diese Angaben entsprechen der WG-Logik (A.7 + A.8)."},"blocks":[{"title":"Heizung","fields":[{"key":"heizung_waermeerzeuger","label":"Wärmeerzeuger","type":"select","required":true,"optionsRef":"heizung_waermeerzeuger","tipKey":"heizung_waermeerzeuger"},{"key":"heizung_baujahr","label":"Baujahr der Heizung","type":"number","required":false,"min":1800,"max":2100,"hint":"z. B. 2010"},{"key":"heizung_kesseltyp","label":"Kesseltyp","type":"imgselect","required":true,"options":[{"value":"Konstanttemperatur","label":"Konstanttemperatur","img":"../assets/images/heizung/konstanttemperaturkessel.png","tipKey":"heizung_konstanttemperatur"},{"value":"Niedertemperatur","label":"Niedertemperatur","img":"../assets/images/heizung/niedertemperaturkessel.png","tipKey":"heizung_niedertemperatur"},{"value":"Brennwert","label":"Brennwert","img":"../assets/images/heizung/brennwertkessel.png","tipKey":"heizung_brennwert"},{"value":"Wärmepumpe","label":"Wärmepumpe","img":"../assets/images/heizung/waermepumpe.png","tipKey":"heizung_waermepumpe"}]},{"key":"heizung_waermeabgabe","label":"Wärmeabgabe","type":"select","required":true,"optionsRef":"heizung_waermeabgabe"},{"key":"pv_dach","label":"Photovoltaik (PV) auf dem Dach","type":"checkbox","required":false,"tipKey":"heizung_photovoltaik","full":true},{"key":"zirkulation","label":"Zirkulation (Warmwasser)","type":"checkbox","required":false,"tipKey":"heizung_zirkulation","full":true},{"key":"heizungsrohre_gedaemmt","label":"Heizungsrohre gedämmt","type":"radio","required":false,"optionsRef":"ja_nein_radio","tipKey":"heizung_rohre_gedaemmt"}]},{"title":"Warmwasser","fields":[{"key":"warmwasser_type","label":"Warmwasser","type":"select","required":true,"optionsRef":"warmwasser","tipKey":"warmwasser_type"},{"key":"warmwasserrohre_gedaemmt","label":"Warmwasserrohre gedämmt","type":"radio","required":false,"optionsRef":"ja_nein_radio","tipKey":"warmwasser_rohre_gedaemmt"}]}]},{"id":"misch_relevanz","title":"Mischgebäude: Relevanz-Check","meta":"C1","when":{"eq":["gebaeudetyp","MISCH"]},"intro":{"title":"Einordnung","text":"Die Einordnung dient der ersten Orientierung. Die endgültige Bewertung erfolgt nach GEG.","img":"../assets/images/infografik/relevanz-check-flowchart.png"},"fields":[{"key":"misch_nutzung","label":"Welche Nutzung liegt im Gebäude vor?","type":"radio","required":true,"options":[{"value":"Wohnen","label":"Wohnen"},{"value":"Gewerbe","label":"Gewerbe"},{"value":"Kombination","label":"Kombination aus Wohnen und Gewerbe"}]},{"key":"misch_gewerbe_anteil","label":"Wie groß ist der gewerbliche Anteil ungefähr?","type":"radio","required":true,"options":[{"value":"unter 10%","label":"unter 10%"},{"value":"ca. 10–50%","label":"ca. 10–50%"},{"value":"über 50%","label":"über 50%"}]},{"key":"misch_tech_lueftung","label":"Gibt es eine eigene Lüftungsanlage?","type":"radio","required":true,"optionsRef":"ja_nein_radio"},{"key":"misch_tech_kuehlung","label":"Gibt es Kühlung oder Klimaanlagen?","type":"radio","required":true,"optionsRef":"ja_nein_radio"},{"key":"misch_tech_oeffnungszeiten","label":"Hat der Gewerbeteil lange Öffnungszeiten?","type":"radio","required":true,"optionsRef":"ja_nein_radio"},{"key":"misch_tech_glas","label":"Gibt es große Glasflächen oder Küchenabluft?","type":"radio","required":true,"optionsRef":"ja_nein_radio"}]},{"id":"misch_bloecke","title":"Mischgebäude: Wohn- und Gewerbeteil","meta":"C2","when":{"eq":["gebaeudetyp","MISCH"]},"intro":{"title":"Teile","text":"Bitte füllen Sie Wohnanteil und Gewerbeanteil aus."},"blocks":[{"title":"Wohnanteil","fields":[{"key":"misch_wohnflaeche","label":"Wohnfläche (m²)","type":"number","required":true,"min":1,"max":200000},{"key":"misch_heizung_waermeerzeuger","label":"Heizsystem (Wärmeerzeuger)","type":"select","required":true,"optionsRef":"heizung_waermeerzeuger","tipKey":"heizung_waermeerzeuger"},{"key":"misch_heizung_kesseltyp","label":"Kesseltyp","type":"imgselect","required":true,"options":[{"value":"Konstanttemperatur","label":"Konstanttemperatur","img":"../assets/images/heizung/konstanttemperaturkessel.png","tipKey":"heizung_konstanttemperatur"},{"value":"Niedertemperatur","label":"Niedertemperatur","img":"../assets/images/heizung/niedertemperaturkessel.png","tipKey":"heizung_niedertemperatur"},{"value":"Brennwert","label":"Brennwert","img":"../assets/images/heizung/brennwertkessel.png","tipKey":"heizung_brennwert"},{"value":"Wärmepumpe","label":"Wärmepumpe","img":"../assets/images/heizung/waermepumpe.png","tipKey":"heizung_waermepumpe"}]},{"key":"misch_heizung_waermeabgabe","label":"Wärmeabgabe","type":"select","required":true,"optionsRef":"heizung_waermeabgabe"},{"key":"misch_pv_dach","label":"Photovoltaik (PV) auf dem Dach","type":"checkbox","required":false,"tipKey":"heizung_photovoltaik","full":true},{"key":"misch_zirkulation","label":"Zirkulation (Warmwasser)","type":"checkbox","required":false,"tipKey":"heizung_zirkulation","full":true},{"key":"misch_heizungsrohre_gedaemmt","label":"Heizungsrohre gedämmt","type":"radio","required":false,"optionsRef":"ja_nein_radio","tipKey":"heizung_rohre_gedaemmt"}]},{"title":"Gewerbeanteil","fields":[{"key":"misch_nutzflaeche","label":"Nutzfläche (m²)","type":"number","required":true,"min":1,"max":200000},{"key":"misch_lueftung","label":"Lüftung","type":"select","required":true,"optionsRef":"nwg_lueftung"},{"key":"misch_kuehlung","label":"Kühlung","type":"select","required":true,"optionsRef":"nwg_kuehlung"}]}]},{"id":"uploads","title":"Uploadbereich","meta":"6","intro":{"title":"Uploadbereich","text":"Bitte laden Sie die benötigten Unterlagen hoch."},"fields":[{"key":"upload_verbrauch_heizkosten","label":"Heizkostenabrechnungen (letzte 3 Jahre)","type":"file","full":true,"when":{"eq":["ausweisart","Verbrauchsausweis"]},"required":{"eq":["ausweisart","Verbrauchsausweis"]},"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_verbrauch_heizkosten"},{"key":"upload_verbrauch_verbrauchsdaten","label":"Verbrauchsdaten","type":"file","full":true,"when":{"eq":["ausweisart","Verbrauchsausweis"]},"required":{"eq":["ausweisart","Verbrauchsausweis"]},"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_verbrauch_verbrauchsdaten"},{"key":"checklist_bedarf_heizung","type":"checklist","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true,"title":"Bedarfsausweis – Bild-Upload – Heizungsanlage bzw. des Wärmeerzeugers","text":"Seit Mai 2021 gilt in Deutschland das Gebäudeenergiegesetz (GEG). Für die fachgerechte Erstellung des Energieausweises benötigen wir Fotos, um den energetischen Zustand beurteilen und Modernisierungsempfehlungen ableiten zu können. Wichtig: Die hochgeladenen Bilder erscheinen nicht auf dem Energieausweis und dienen ausschließlich der fachlichen Bewertung.","items":[{"label":"Beispielbild der Heizungsanlage mit Heizkessel","required":true,"note":"Heizungsraum mit Anlage fotografieren."},{"label":"Beispielbild der Rohrleitungen","required":true,"note":"Leitungen/Rohre sichtbar darstellen; Dämmzustand erkennbar."},{"label":"Detailbild Typenschildes","required":true,"note":"Foto des Typenschildes: Typ Wärmeerzeuger, Energieträger, Nennleistung, Baujahr."},{"label":"Beispielbild des Heizkörpers mit Raumtemperaturregelung","required":true,"note":"Falls vorhanden, Thermostate an Heizkörpern oder Wandthermostate fotografieren."}]},{"key":"upload_heizung_photos","label":"Heizungsanlage (Fotos)","type":"file","full":true,"required":true,"accept":".jpg,.jpeg,.png","multiple":true,"tipKey":"uploads_heizung"},{"key":"checklist_bedarf_fenster","type":"checklist","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true,"title":"Bedarfsausweis – Bild-Upload – Fenster / Dachfenster / Türen","text":"Seit Mai 2021 gilt in Deutschland das Gebäudeenergiegesetz (GEG). Für die fachgerechte Erstellung des Energieausweises benötigen wir daher Fotos der Gebäudehülle, um den Sanierungszustand einschätzen und passende Modernisierungsempfehlungen geben zu können. Hinweis: Die hochgeladenen Bilder erscheinen nicht auf dem Energieausweis und werden ausschließlich zur fachlichen Bewertung verwendet.","items":[{"label":"Beispielbild eines Fensters","required":true,"note":"Bei einheitlicher Fensterart genügt ein Beispielbild, sonst je Fenstertyp ein Foto."},{"label":"Nahaufnahme des Verglasungsrahmens","required":true,"note":"Wenn möglich Nahaufnahme von Fenster bzw. Falz mit erkennbarem Datumsaufdruck am Verglasungsrahmen."},{"label":"Fensterlaibung","required":true,"note":"Fensterlaibung innen und außen."},{"label":"Beispielbild eines Dachflächenfensters","required":true,"note":"Bei einheitlicher Fensterart genügt ein Beispielbild, sonst je Fenstertyp ein Foto."},{"label":"Beispielbild der Haustüre","required":true,"note":"Bei einheitlicher Fensterart genügt ein Beispielbild, sonst je Fenstertyp ein Foto."}]},{"key":"upload_fenster_photos","label":"Fenster/Dachfenster/Türen (Fotos)","type":"file","full":true,"required":true,"accept":".jpg,.jpeg,.png","multiple":true,"tipKey":"uploads_fenster"},{"key":"checklist_bedarf_daemmung","type":"checklist","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true,"title":"Bedarfsausweis – Bild-Upload – Wärmedämmung/Gebäude","text":"Seit Mai 2021 gilt in Deutschland das Gebäudeenergiegesetz (GEG). Für die fachgerechte Erstellung des Energieausweises benötigen wir Fotos zur Wärmedämmung des Gebäudes, um den energetischen Zustand beurteilen und Modernisierungsempfehlungen ableiten zu können. Wichtig: Die hochgeladenen Bilder erscheinen nicht auf dem Energieausweis und dienen ausschließlich der fachlichen Bewertung.","items":[{"label":"Detailaufnahme Innenbereich Dach","required":true,"note":"Spitzboden/Dachboden: Dämmung bzw. fehlende Dämmung soll eindeutig erkennbar sein."},{"label":"Bild oberste Geschossdecke","required":true,"note":"Dämmung und Dämmstärke abbilden. Falls nicht möglich: Randbereich und Querschnitt des Dachzugangs fotografieren."},{"label":"Falls kein Dachboden","required":true,"note":"Kein Dachboden (z. B. Flachdach)? Foto eines Dachgeschossraums mit sichtbarer Decke."},{"label":"Detailbild der Außenwand","required":true,"note":"Verkleidung/Dämmung – sofern vorhanden – mit abbilden."},{"label":"Sockelbereich des Hauses","required":true,"note":"Fassadensockel gut sichtbar. Bei WDVS muss der untere Systemabschluss erkennbar sein."},{"label":"Abbildung der Kellerdecke / unterer Gebäudeabschluss","required":true,"note":"Fotos sollen zeigen, ob die Kellerdecke gedämmt ist oder nicht; Kellerdecke eindeutig erkennbar."}]},{"key":"upload_daemmung_photos","label":"Wärmedämmung (Fotos)","type":"file","full":true,"required":true,"accept":".jpg,.jpeg,.png","multiple":true,"tipKey":"uploads_daemmung"},{"key":"geschosshoehen","label":"Geschosshöhen (m)","type":"number","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":20},{"key":"gebaeudevolumen","label":"Gebäudevolumen (m³)","type":"number","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":5000000},{"key":"aussenwandflaechen","label":"Außenwandflächen (m²)","type":"number","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":500000},{"key":"fensteranteile","label":"Fensteranteile (m²)","type":"number","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":500000},{"key":"checklist_bedarf_unterlagen","type":"checklist","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true,"title":"Bedarfsausweis – Bild-Upload – Gebäudeunterlagen","text":"Für den Bedarfsausweis werden Angaben zur Gebäudegeometrie und Gebäudehülle benötigt. Bitte laden Sie – soweit möglich – folgende Unterlagen hoch:","items":[{"label":"Bauunterlagen","required":true,"note":"z. B. Baugenehmigungen, U-Wert-Berechnungen, Anlagentechnik oder alte Energieausweise."},{"label":"Baupläne","required":true,"note":"Grundrisse, Ansichten und Schnitte."},{"label":"Gebäudeansichten","required":true,"note":"Alle vier Gebäudeansichten nach Himmelsrichtungen fotografisch darstellen."}]},{"key":"upload_bedarf_plaene","label":"Grundrisspläne / Schnitte / Ansichten","type":"file","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_bedarf_plaene"},{"key":"upload_nwg_anlagenplaene","label":"Anlagenpläne (Lüftung/Kälte/Heizung)","type":"file","full":true,"when":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"required":false,"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_nwg_anlagenplaene"}]},{"id":"summary","title":"Zahlung \u0026 Bestellung","meta":"7","afterChangeRef":"billing_same_as_object","intro":{"title":"Zahlung \u0026 Bestellung","text":"In nur einem Schritt zu Ihrem Energieausweis."},"blocks":[{"title":"Ihre Bestellung","fields":[{"key":"order_summary","label":"Ihre Bestellung","type":"kvsummary","full":true}]},{"title":"Rechnungsdaten","fields":[{"key":"rechnung_auftragsart","label":"Auftragsart","type":"radio","required":true,"options":[{"value":"Privat-Eigentuemer","label":"Privat-Eigentuemer"},{"value":"Gewerblich","label":"Gewerblich"},{"value":"Gewerblich_ohne_UStId","label":"Gewerblich ohne USt.ID"}]},{"key":"rechnung_vorname","label":"Vorname","type":"text","required":true,"hint":"Vorname"},{"key":"rechnung_nachname","label":"Nachname","type":"text","required":true,"hint":"Nachname"},{"key":"rechnung_email","label":"E-Mail","type":"text","required":true,"pattern":"^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$","hint":"emailexample@gmail.com"},{"key":"rechnung_strasse_hausnummer","label":"Straße \u0026 Hausnummer","type":"text","required":true,"hint":"Musterstraße 12, 23345 Musterstadt"},{"key":"rechnung_plz","label":"PLZ","type":"text","required":true,"pattern":"^\\d{5}$","hint":"23345"},{"key":"rechnung_ort","label":"Ort","type":"text","required":true,"hint":"München"},{"key":"rechnung_gleich_objektadresse","label":"Rechnungsadresse entspricht Objektadresse","type":"checkbox","required":false,"full":true}]}]}]};
const TOOL_TIPS_DE = {"anlass":"Vermietung, Verkauf oder sonstiger Zweck. Für einen Verbrauchsausweis sind die Anlässe Neubau oder Modernisierung nicht zulässig.","ausweisart":"Verbrauchsausweis: auf Basis tatsächlichen Verbrauchs. Bedarfsausweis: auf Basis Berechnung (mehr Angaben).","relevanz_disclaimer":"Die Einordnung dient der ersten Orientierung. Die endgültige Bewertung erfolgt im Rahmen der Energieausweis-Erstellung nach den geltenden gesetzlichen Vorgaben (GEG). Abweichungen im Einzelfall sind möglich.","gebaeudetyp":"Der Energieausweis wird grundsätzlich für das gesamte Gebäude oder den kompletten Wohnteil eines Mischgebäudes erstellt. Eine Ausstellung für einzelne Wohnungen oder Teilflächen ist nicht möglich.","wohnflaeche":"Die Wohnfläche umfasst alle beheizten Räume, die dem Wohnen dienen (z. B. Wohnzimmer, Schlafzimmer, Küche, Bad, Flur). Nicht zur Wohnfläche zählen unbeheizte Keller, Garagen, Dachräume ohne Heizung sowie Balkone, Terrassen und sonstige Außenflächen.","nutzflaeche":"Die beheizte Nutzfläche umfasst die Wohnfläche sowie zusätzlich beheizte Räume innerhalb der thermischen Gebäudehülle, die nicht zur reinen Wohnfläche zählen. Beispiel: Wohnfläche 120 m² + beheizter Hobbyraum im Keller 20 m² + beheiztes Büro 15 m² = beheizte Nutzfläche gesamt 155 m². Nicht berücksichtigt werden unbeheizte Kellerräume, Garagen, Dachböden ohne Heizung, Balkone oder Terrassen.","aussenwand_type":"Bitte wählen Sie den Außenwand-Typ. Falls Sie unsicher sind, nutzen Sie die Detailinfos je Material.","aussenwand_fachwerk":"Fachwerkbauten bestehen aus einer tragenden Holzkonstruktion mit Gefachen, die je nach Bauzeit mit Lehm, Ziegeln oder anderen Ausfachungsmaterialien gefüllt sind. Sie sind typisch für historische Gebäude und kommen vor allem bei Altbauten vor dem 20. Jahrhundert vor.\n\nTypische Erkennungsmerkmale:\n- Material: Holztragwerk mit Ausfachungen (z. B. Lehm, Ziegel, Bruchstein)\n- Baujahre: häufig vor ca. 1900, regional auch später\n- Optik: sichtbares Holzraster an der Fassade (falls nicht verputzt)\n- Gewicht / Rohdichte: unterschiedlich je nach Gefachmaterial\n- Aufbau: Holzständerwerk mit nichttragenden Gefachen\n- Materialeigenschaft: diffusionsoffene Konstruktion, empfindlich gegenüber Feuchtigkeit\n- Oberfläche: verputzt oder sichtbares Holzfachwerk\n- Bohreigenschaften: stark abhängig vom jeweiligen Gefach (Holz leicht, Ziegel/Lehm mittel)\n- Bohrmehl: je nach Material Holzspäne, lehmig oder rötlich\n\nHinweis zur energetischen Einordnung:\nDie energetische Qualität hängt stark von der Gefachfüllung, Wandstärke sowie vorhandenen Innendämmungen oder Sanierungen ab. Bei Fachwerk ist bauphysikalisch angepasste Dämmung erforderlich.","aussenwand_vollziegel":"Massive Außenwände aus Naturstein oder Vollziegel sind typisch für Altbauten vor dem frühen 20. Jahrhundert. Die Konstruktionen bestehen meist aus dickem, massivem Mauerwerk ohne zusätzliche Dämmung und weisen je nach Region unterschiedliche Steinarten und Mauerwerksverbände auf.\n\nTypische Erkennungsmerkmale:\n- Material: Naturstein (z. B. Feldstein, Sandstein, Granit) oder Vollziegel\n- Baujahre: häufig vor ca. 1918 (Altbau)\n- Farbe: je nach Steinart grau, beige, gelblich oder rötlich\n- Gewicht / Rohdichte: sehr hoch, massives Mauerwerk\n- Aufbau: meist Vollmauerwerk ohne Hohlkammern, große Wandstärken\n- Materialeigenschaft: sehr fest und druckstabil\n- Oberfläche: unregelmäßig bei Naturstein, gleichmäßiger bei Vollziegel; häufig verputzt\n- Bohreigenschaften: hoher Widerstand, Bohren meist mit Schlag erforderlich\n- Bohrmehl: bei Naturstein grau/beige und steinig; bei Vollziegel rötlich\n\nHinweis zur energetischen Einordnung:\nTrotz großer Wandstärken besitzen massive Altbauwände oft eine geringe Wärmedämmwirkung. Die energetische Bewertung erfolgt unter Berücksichtigung von Wanddicke, Putzaufbau sowie eventueller nachträglicher Dämmmaßnahmen.","aussenwand_bims":"Hohlblocksteine aus Bims oder Leichtbeton wurden besonders im frühen bis mittleren 20. Jahrhundert häufig im Wohnungsbau eingesetzt. Durch den porösen Zuschlagstoff (Bims) sind sie leichter als Normalbeton und besitzen bessere Wärmeeigenschaften als massive Betonbauteile.\n\nTypische Erkennungsmerkmale:\n- Material: Leichtbeton bzw. Bimsbeton (Zement mit Bims-Zuschlag)\n- Baujahre: häufig ca. 1919 bis 1960er Jahre\n- Farbe: hellgrau bis beige-grau\n- Gewicht / Rohdichte: leicht bis mittel, deutlich leichter als Beton\n- Aufbau: größere Steinformate mit Hohlkammern\n- Materialeigenschaft: porös, weniger fest als Kalksandstein oder Stahlbeton\n- Oberfläche: oft grobkörnig, sichtbar porige Struktur\n- Bohreigenschaften: relativ gut zu bohren, meist mit wenig Schlag\n- Bohrmehl: hellgrau, leicht körnig und eher „sandig\"\n\nHinweis zur energetischen Einordnung:\nDie Dämmwirkung ist besser als bei Vollbeton, jedoch meist nicht ausreichend nach heutigen Standards. Außenwände aus Bims-Hohlblockstein wurden später häufig mit WDVS oder Vormauerschale ergänzt.","aussenwand_kalksandstein":"Kalksandstein ist ein mineralischer Mauerwerksbaustoff aus Kalk, Sand und Wasser, der unter Dampfdruck gehärtet wird. Er besitzt eine hohe Rohdichte und wird häufig für tragende Innen- und Außenwände eingesetzt, meist in Kombination mit zusätzlicher Wärmedämmung.\n\nTypische Erkennungsmerkmale:\n- Material: Kalk, Sand und Wasser (dampfdruckgehärtet)\n- Baujahre: verbreitet seit vielen Jahrzehnten, häufig ab ca. 1960 bis heute\n- Farbe: weiß bis hellgrau\n- Gewicht / Rohdichte: hoch, schweres Mauerwerk\n- Materialeigenschaft: sehr fest und druckstabil, dichter als Porenbeton oder Ziegel\n- Aufbau: meist Vollstein oder Lochstein mit glatter Oberfläche\n- Bohreigenschaften: hartes Material, Bohren meist mit Schlagfunktion erforderlich\n- Bohrmehl: hellgrau bis weiß, eher sandig\n\nHinweis zur energetischen Einordnung:\nKalksandstein besitzt selbst nur geringe Wärmedämmeigenschaften; die energetische Qualität der Außenwand ergibt sich meist durch zusätzliche Dämmmaßnahmen (z. B. WDVS oder Kerndämmung).","aussenwand_ziegel":"Ziegelmauerwerk besteht aus gebranntem Ton und wurde im Wohnungsbau häufig ab der Nachkriegszeit eingesetzt, kommt jedoch auch bei älteren Gebäuden vor. Typisch sind eine rötliche bis orangefarbene Erscheinung sowie – je nach Bauart – innenliegende Hohlkammern zur Gewichtsreduzierung und Wärmedämmung.\n\nTypische Erkennungsmerkmale:\n- Material: gebrannter Ton (Ziegel)\n- Farbe: rot, orange bis gelblich\n- Baujahre: häufig ab ca. 1950, teilweise auch vor 1945\n- Aufbau: Vollziegel oder Hochlochziegel mit Hohlkammern\n- Rohdichte / Gewicht: mittel bis schwer\n- Materialeigenschaft: druckfest, jedoch weniger hart als Beton\n- Bohrverhalten: Bohren je nach Ziegelart mit oder ohne Schlagfunktion\n- Bohrmehl: meist rötlich bis orangefarben\n\nHinweis zur Energieausweis-Erstellung:\nDie genaue energetische Bewertung hängt zusätzlich von Wandstärke, Putzaufbau sowie vorhandener Dämmung ab.","aussenwand_porenbeton":"Porenbeton (auch Gasbeton genannt) ist ein mineralischer Leichtbaustoff mit hohem Luftporenanteil. Aufgrund seiner geringen Rohdichte besitzt er gute Wärmedämmeigenschaften und wird häufig im modernen Mauerwerksbau eingesetzt.\n\nTypische Erkennungsmerkmale:\n- Material: Porenbeton (zement- bzw. kalkgebundener Leichtbaustoff)\n- Baujahre: vermehrt ab ca. 1980, im Neubau häufig verwendet\n- Farbe: weiß bis hellgrau\n- Gewicht / Rohdichte: gering, sehr leichtes Mauerwerk\n- Materialeigenschaft: weich im Vergleich zu Beton oder Ziegel\n- Oberfläche: gleichmäßig, feinporige Struktur\n- Bohreigenschaften: leicht zu bearbeiten, Bohren meist ohne Schlagfunktion möglich\n- Bohrmehl: weiß bis hellgrau, sehr fein\n\nHinweis zur energetischen Einordnung:\nDie energetische Bewertung im Bedarfsausweis hängt von Wanddicke, Steinformat sowie zusätzlicher Dämmung oder Putzaufbau ab.","aussenwand_stahlbeton":"Stahlbeton besteht aus Beton mit eingelegter Bewehrung aus Stahl zur Aufnahme von Zugkräften. Er wird überwiegend bei tragenden Konstruktionen wie Decken, Stützen, Balkonen oder massiven Außenwänden eingesetzt und kommt sowohl im Geschosswohnungsbau als auch bei Einfamilienhäusern vor.\n\nTypische Erkennungsmerkmale:\n- Material: Beton mit Stahleinlagen (Bewehrung)\n- Baujahre: verbreitet seit ca. 1950 bis heute\n- Farbe: grau bis dunkelgrau\n- Gewicht / Rohdichte: sehr hoch, massives Bauteil\n- Materialeigenschaft: sehr hart, hohe Druck- und Zugfestigkeit durch Bewehrung\n- Oberfläche: glatt (Schalungsstruktur möglich) oder verputzt\n- Bohreigenschaften: Bohren meist nur mit Schlag-/Hammerbohrer; hoher Widerstand\n- Bohrmehl: dunkelgrau, steinig; bei Treffer der Bewehrung metallischer Widerstand\n\nHinweis zur energetischen Einordnung:\nStahlbeton besitzt eine hohe Wärmeleitfähigkeit und geringe Dämmwirkung. Außenbauteile aus Stahlbeton werden energetisch meist erst durch zusätzliche Außendämmung (z. B. WDVS) bewertet.","aussenwand_wdvs":"Ein Wärmedämmverbundsystem (WDVS) ist eine außenliegende Dämmkonstruktion, die auf bestehendes Mauerwerk oder Beton aufgebracht wird, um den Wärmeschutz der Gebäudehülle zu verbessern. Es besteht aus Dämmplatten, Armierungsschicht und Oberputz.\n\nTypische Erkennungsmerkmale:\n- Aufbau: Dämmplatten (z. B. EPS, Mineralwolle, Holzfaser) mit Putzsystem\n- Baujahre: häufig ab ca. 1975/1980, stark verbreitet seit EnEV-Zeit\n- Optik: verputzte Fassade, oft gleichmäßige Oberfläche ohne sichtbares Mauerwerk\n- Material: Dämmstoff + Armierungsgewebe + Oberputz\n- Wandstärke außen: häufig 8–20 cm zusätzliche Dämmschicht (je nach Sanierungsstand)\n- Klopfprobe: eher „dumpfer\" Klang als bei massivem Mauerwerk\n- Bohreigenschaften: zuerst weiche Dämmschicht, dahinter tragendes Mauerwerk\n- Bohrmehl: je nach Dämmstoff weiß (EPS), faserig (Mineralwolle) oder mineralisch\n\nHinweis zur energetischen Einordnung:\nDie energetische Qualität wird wesentlich durch Dämmstoffart, Dämmstärke und Ausführungsjahr bestimmt. Das tragende Mauerwerk allein ist für die U-Wert-Bewertung nicht ausreichend.","fenster_type":"Farbiges Spiegelbild = Wärmeschutz. Spiegelbilder zählen = Anzahl Scheiben.\n\nFeuertest: Halten Sie ein Feuerzeug vor die Scheibe und zählen Sie die Spiegelbilder.\n- 2 Spiegelbilder = Zweifachverglasung (siehe Bild: ../assets/images/fenster/feuertest-2fach.png)\n- 3 Spiegelbilder = Dreifachverglasung (siehe Bild: ../assets/images/fenster/feuertest-3fach.png)","fenster_einfachverglasung":"Fenster mit einer einzelnen Glasscheibe ohne wärmedämmende Zwischenschicht.\nBaujahr: häufig bis ca. 1978\nUG: 5 bis 6 W/(m²·K)\nRahmenmaterial: Holz, Stahl oder Aluminium","fenster_verbundfenster":"Fensterbauart mit zwei getrennten Glasscheiben in zwei Fensterflügeln, die mechanisch miteinander verbunden sind und gemeinsam geöffnet werden. Es handelt sich nicht um eine Isolierverglasung im technischen Sinn; der Scheibenzwischenraum ist nicht gasdicht ausgeführt.\nBaujahr: häufig ca. 1950–1985\nRahmenmaterial: überwiegend Holz (vereinzelt Metallverbund)","fenster_kastenfenster":"Fensterbauart mit zwei getrennten, hintereinander angeordneten Fensterflügeln, die jeweils eine einfache Verglasung besitzen und durch einen größeren Luftzwischenraum („Kasten\") getrennt sind. Es handelt sich nicht um eine Isolierverglasung im technischen Sinn.\nBaujahr: häufig vor 1978 (typisch Altbau / Denkmal)\nRahmenmaterial: überwiegend Holz","fenster_isolierglas_alt":"Fenster mit Isolierglasscheibe aus zwei Glasscheiben, die werkseitig zu einer Einheit verbunden sind. Die Verglasung weist keine Wärmeschutzbeschichtung auf und der Scheibenzwischenraum ist nicht gasgefüllt.\nUG: 2,5 bis 3 W/(m²·K)\nBaujahr: häufig ca. 1978–1994\nRahmenmaterial: Holz, Kunststoff oder Aluminium","fenster_waermeschutzglas":"Fenster mit beschichteter Zweifachverglasung und gasgefülltem Scheibenzwischenraum zur verbesserten Wärmedämmung.\nBaujahr: häufig ab ca. 1995–2010\nRahmenmaterial: Holz, Kunststoff, Aluminium\nWärmedurchgangskoeffizient (U-Wert): typischerweise ca. 1,1–1,3 W/(m²·K)\nUG: 1 bis 1,3 W/(m²·K)","fenster_dreifach":"Fenster mit drei Glasscheiben, beschichteten Scheibenflächen und gasgefüllten Zwischenräumen zur hohen Wärmedämmung.\nBaujahr: häufig ab ca. 2010\nRahmenmaterial: Holz, Kunststoff, Aluminium (meist mit thermischer Trennung)\nWärmedurchgangskoeffizient (U-Wert): typischerweise ≤ 0,9 W/(m²·K)\nUG: 0,5 bis 0,7 W/(m²·K)","fenster_vermassung":"Angabe der Fensterabmessungen (lichte Öffnung Breite × Höhe) zur Ermittlung der Fensterfläche. Die Vermassung dient der rechnerischen Erfassung der transparenten Bauteilflächen im Bedarfsausweis.\n\nUmrechnung: 100 cm = 1 m\nBeispiel: Küchenfenster Höhe (1,20 m + 0,03 m) × Breite (1,46 m + 0,03 m) = 1,23 m × 1,49 m = 1,833 m²","nwg_fensteranteil":"NWG arbeitet mehr mit Glasanteilen.","heizung_waermeerzeuger":"Bitte wählen Sie den Wärmeerzeuger.","heizung_oel":"Ölheizung: Wärmeversorgung über einen Ölkessel (fossiler Brennstoff).","heizung_gas":"Gasheizung: Wärmeversorgung über einen Gaskessel (fossiler Brennstoff).","heizung_fernwaerme":"Fernwärme / Nahwärme\nWärmeversorgung des Gebäudes über ein externes Wärmeversorgungsnetz; keine Wärmeerzeugung im Gebäude.","heizung_biomasse":"Biomasseheizung (z. B. Pellet, Hackschnitzel, Scheitholz)\nZentrale Heizungsanlage zur Wärmebereitstellung unter Nutzung fester biogener Brennstoffe.","heizung_elektro":"Elektroheizung (direkt / Nachtspeicher)\nDirekt wirkende elektrische Heizsysteme ohne Nutzung von Umweltenergie und ohne zentrale Wärmeverteilung.","heizung_einzelofen":"Kaminofen / Einzelraumfeuerstätte\nEinzelraumfeuerstätte zur ergänzenden Raumbeheizung, nicht Bestandteil der zentralen Wärmeversorgung des Gebäudes.","heizung_bhkw":"Blockheizkraftwerk (BHKW / KWK)\nAnlage zur gekoppelten Erzeugung von Wärme und Strom zur zentralen Wärmeversorgung des Gebäudes.","heizung_hybrid":"Hybridheizung\nKombination aus zwei unterschiedlichen Wärmeerzeugern zur gemeinsamen Wärmebereitstellung.","heizung_konstanttemperatur":"Konstanttemperaturkessel\nHeizkessel, der dauerhaft mit hoher Vorlauftemperatur betrieben wird – unabhängig vom Wärmebedarf. Die Abgaswärme (Kondensationswärme) wird nicht genutzt. Typisch für ältere Heizungsanlagen, vor allem aus den 1970er-Jahren bis ca. 1995.\nÜbliche Temperaturen: Vorlauf ca. 70–90 °C, Rücklauf ca. 55–70 °C","heizung_niedertemperatur":"Niedertemperaturkessel\nHeizkessel, der mit niedrigeren Vorlauftemperaturen arbeitet und sich dem Wärmebedarf besser anpasst als ein Konstanttemperaturkessel. Die Abgaswärme (Kondensationswärme) wird jedoch nicht genutzt. Typisch für Heizungsanlagen etwa von ca. 1985 bis 2005.\nÜbliche Temperaturen: Vorlauf ca. 55–75 °C, Rücklauf ca. 45–60 °C","heizung_brennwert":"Brennwertkessel\nHeizkessel, der neben der Heizwärme auch die im Abgas enthaltene Kondensationswärme nutzt. Voraussetzung dafür sind möglichst niedrige Rücklauftemperaturen (ideal unter ca. 55 °C, bei Gasbrennwert oft unter ca. 50 °C). Typisch für moderne Heizungsanlagen, überwiegend ab ca. 1995.\nÜbliche Temperaturen (je nach Heizsystem): Vorlauf ca. 45–65 °C, Rücklauf ca. 35–40 °C","heizung_waermepumpe":"Wärmepumpe\nHeizungsanlage, die Wärme aus der Umwelt (z. B. Außenluft, Erdreich oder Grundwasser) nutzt, um Heizwärme und/oder Warmwasser bereitzustellen. Der Betrieb erfolgt überwiegend mit elektrischer Energie. Durch niedrige Systemtemperaturen arbeitet die Anlage besonders effizient, insbesondere in gut gedämmten Gebäuden oder mit Flächenheizungen.\nÜbliche Temperaturen: Vorlauf ca. 30–45 °C, Rücklauf ca. 27–35 °C","heizung_photovoltaik":"Photovoltaik (PV) auf dem Dach\nAnlage auf dem Dach, die Sonnenlicht in Strom umwandelt. Der Strom kann im Haus genutzt oder ins Netz eingespeist werden.","heizung_zirkulation":"Zirkulation\nKreislauf von Heizungs- oder Warmwasser in den Leitungen, damit Wärme bzw. warmes Wasser schnell und gleichmäßig im Gebäude verfügbar ist.","heizung_rohre_gedaemmt":"Heizungsrohre gedämmt\nGemeint sind die sichtbaren Heizungsrohre des Verteilsystems. Gedämmte Rohre erkennen Sie an einer dunklen Isolierung bzw. Ummantelung (z. B. Manschetten) um das Rohr.","warmwasser_type":"Bitte wählen Sie die Warmwasser-Art.","warmwasser_zentral":"Zentrale Warmwasserbereitung\nDie Trinkwassererwärmung erfolgt über eine zentrale Anlage im Gebäude, z. B. über den Heizkessel oder einen zentralen Warmwasserspeicher. Das erwärmte Wasser wird über Leitungen zu den Entnahmestellen (Bad, Küche) verteilt.","warmwasser_dezentral":"Dezentrale Warmwasserbereitung\nDie Warmwassererzeugung erfolgt direkt an der jeweiligen Entnahmestelle, z. B. durch elektrische Durchlauferhitzer, Boiler oder Untertischgeräte. Eine zentrale Speicherung oder Verteilung im Gebäude findet nicht statt.","warmwasser_speicher":"Elektrischer Warmwasserspeicher (Boiler)\nDezentrale elektrische Warmwasserbereitung über Speichergeräte in den Nutzungseinheiten.","warmwasser_durchlauferhitzer":"Durchlauferhitzer (elektrisch) – nur Warmwasser\nDezentrale elektrische Warmwassererzeugung in den einzelnen Nutzungseinheiten ohne zentrale Speicher- oder Verteilanlage.","warmwasser_kombiniert":"Kombiniert mit Heizung\nDie Warmwasserbereitung ist in die Heizungsanlage integriert. Ein Wärmeerzeuger (z. B. Brennwertkessel oder Wärmepumpe) übernimmt sowohl die Raumheizung als auch die Erwärmung des Trinkwassers.","warmwasser_solarthermie":"Solarthermie (Warmwasser)\nAnlage zur thermischen Nutzung der Sonnenenergie zur Warmwasserbereitung über solarthermische Kollektoren; keine Stromerzeugung (keine Photovoltaik).","warmwasser_rohre_gedaemmt":"Warmwasserrohre gedämmt\nGemeint sind die sichtbaren Warmwasserleitungen im Gebäude. Gedämmte Rohre erkennen Sie an einer dunklen Isolierung bzw. Ummantelung (z. B. Manschetten) um das Rohr.","lueftung_fenster":"Fensterlüftung (Natürliche Lüftung)\nLuftwechsel erfolgt ausschließlich über manuell zu öffnende Fenster; es ist keine mechanische Lüftungsanlage vorhanden.","lueftung_abluft":"Mechanische Abluft / Schachtlüftung\nMechanisches Lüftungssystem, bei dem verbrauchte Raumluft aktiv abgesaugt wird. Die Frischluft strömt ungeregelt über Außenluftöffnungen oder Fenster nach. Eine Wärmerückgewinnung ist nicht vorhanden.","lueftung_zentral_ohne_wrg":"Zentrale ohne WRG\nZentrale mechanische Zu- und Abluftanlage ohne Wärmerückgewinnung (WRG), bei der die Zu- und Abluft zentral geführt wird.","lueftung_zentral_wrg":"Zentrale WRG\nZentrale mechanische Zu- und Abluftanlage mit Wärmerückgewinnung (WRG), bei der die Abluftwärme ganz oder teilweise auf die Zuluft übertragen wird.","lueftung_dezentral_wrg":"Dezentrale WRG\nMechanische Zu- und Abluft über einzelne, raumweise angeordnete Lüftungsgeräte mit integrierter Wärmerückgewinnung (WRG); keine zentrale Luftverteilung vorhanden.","upload_verbrauch_heizkosten":"Für den Verbrauchsausweis werden Heizkostenabrechnungen der letzten 3 Jahre benötigt.","upload_verbrauch_verbrauchsdaten":"Für den Verbrauchsausweis werden Verbrauchsdaten (tatsächliches Verbrauchsverhalten) benötigt.","uploads_heizung":"Auf Grundlage des seit Mai 2021 geltenden Gebäudeenergiegesetzes (GEG) sind zur fachgerechten Erstellung des Energieausweises bildliche Informationen zur Anlagentechnik erforderlich. Die bereitgestellten Bilder dienen ausschließlich der fachlichen Einschätzung des energetischen Zustands und der Ableitung von Modernisierungsempfehlungen.\n\nHinweis:\nDie hochgeladenen Bilder werden nicht Bestandteil des Energieausweises und nicht veröffentlicht.\n\nEmpfehlung:\nEin Übersichtsbild des Heizungsraums mit sichtbarer Heizungsanlage und Rohrleitungen erleichtert die fachliche Bewertung.","uploads_fenster":"Seit Mai 2021 gilt in Deutschland das Gebäudeenergiegesetz (GEG). Für die fachgerechte Erstellung des Energieausweises benötigen wir daher Fotos der Gebäudehülle, um den Sanierungszustand einschätzen und passende Modernisierungsempfehlungen geben zu können.\n\nHinweis:\nDie hochgeladenen Bilder erscheinen nicht auf dem Energieausweis und werden ausschließlich zur fachlichen Bewertung verwendet.\n\nTipps für gute Fotos:\n- Ein Exemplarbild reicht, wenn alle Fenster gleich sind\n- Bei unterschiedlichen Fenstern bitte je Fensterart ein Bild\n- Möglichst eine Nahaufnahme des Fensterfalzes oder Rahmens\n- Ideal ist, wenn ein Datumsaufdruck an der Verglasung erkennbar ist","uploads_daemmung":"Seit Mai 2021 gilt in Deutschland das Gebäudeenergiegesetz (GEG). Für die fachgerechte Erstellung des Energieausweises benötigen wir Fotos zur Wärmedämmung des Gebäudes, um den energetischen Zustand beurteilen und Modernisierungsempfehlungen ableiten zu können.\n\nWichtig:\nDie hochgeladenen Bilder erscheinen nicht auf dem Energieausweis und dienen ausschließlich der fachlichen Bewertung.\n\nHinweise für geeignete Fotos:\n- Die Dämmung (oder fehlende Dämmung) sollte möglichst gut erkennbar sein\n- Ist die Dämmung durch Verkleidung oder Verschalung nicht sichtbar, genügt: ein Bild des ausgebauten Dachgeschosses und/oder ein Außenbild vom Dach-Wand-Anschluss\n- Ist die Dämmung der Außenwand nicht erkennbar, reicht: ein normales Außenbild der Fassade und/oder ein Bild vom Dach-Wand-Anschluss\n- Bitte laden Sie mindestens 2 Bilder hoch.","upload_bedarf_plaene":"Für den Bedarfsausweis werden Angaben zur Gebäudegeometrie und Gebäudehülle benötigt. Dafür sind Gebäudepläne besonders hilfreich.\n\nDateiformate: PDF oder Bild (z. B. JPG, PNG)","upload_nwg_anlagenplaene":"Optional: Anlagenpläne (Lüftung/Kälte/Heizung) können bei NWG hilfreich sein."};
const BUILD_INFO = { commit: "50a365c", builtAt: "2026-02-10T23:53:19.5845655+02:00" };

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
  if (y <= 2008) return { aussenwand_type: "WDVS vorhanden", fenster_type: "Wärmeschutzglas", heizung_kesseltyp: "Brennwert" };
  return { aussenwand_type: "WDVS vorhanden", fenster_type: "3-fach Wärmeschutzglas", heizung_kesseltyp: "Wärmepumpe" };
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
        if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Zentrale Lüftungsanlage";
        if (isEmpty(state.heizung_kesseltyp)) state.heizung_kesseltyp = "Brennwert";
      } else {
        if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "WDVS";
        if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "mittel (30вЂ“60%)";
        if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Lüftung mit Wärmerückgewinnung";
        if (isEmpty(state.heizung_kesseltyp)) state.heizung_kesseltyp = "Brennwert";
      }
    }

    // --- by Nutzung (overrides only if empty, to avoid fighting user)
    if (nutzung === "BГјro / Verwaltung" || nutzung === "Schule / Kita") {
      if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "Vorhangfassade";
      if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "hoch (>60%)";
      if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Zentrale Lüftungsanlage";
    } else if (nutzung === "Lager / Produktion") {
      if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "Stahlbeton";
      if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "gering (<30%)";
    } else if (nutzung === "Einzelhandel") {
      if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Zentrale Lüftungsanlage";
      if (isEmpty(state.nwg_kuehlung)) state.nwg_kuehlung = "Split-Klima";
    } else if (nutzung === "Gastronomie") {
      if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Mechanische Abluft";
      if (isEmpty(state.nwg_kuehlung)) state.nwg_kuehlung = "Split-Klima";
    }
  },
  billing_same_as_object: (state, changedKey) => {
    const flagKey = "rechnung_gleich_objektadresse";
    const billingKeys = ["rechnung_strasse_hausnummer", "rechnung_plz", "rechnung_ort"];

    const objStreet = String(state.strasse || "").trim();
    const objNo = String(state.hausnummer || "").trim();
    const objPlz = String(state.plz || "").trim();
    const objOrt = String(state.ort || "").trim();
    const expectedStreet = (objStreet + (objStreet && objNo ? " " : "") + objNo).trim();

    if (changedKey === flagKey) {
      if (state[flagKey] !== true) return;
      // Copy once on toggle.
      if (!isEmpty(expectedStreet)) state.rechnung_strasse_hausnummer = expectedStreet;
      if (!isEmpty(objPlz)) state.rechnung_plz = objPlz;
      if (!isEmpty(objOrt)) state.rechnung_ort = objOrt;
      return;
    }

    // If user edits billing address after copying, uncheck the flag (we do not re-sync).
    if (state[flagKey] === true && billingKeys.includes(changedKey)) {
      const same =
        String(state.rechnung_strasse_hausnummer || "").trim() === expectedStreet &&
        String(state.rechnung_plz || "").trim() === objPlz &&
        String(state.rechnung_ort || "").trim() === objOrt;
      if (!same) state[flagKey] = false;
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

const TIPS = TOOL_TIPS_DE || {};

// WP injects `window.EA_CONFIG` via wp_localize_script. Do NOT redeclare `EA_CONFIG` here
// (it would conflict with the global `var EA_CONFIG` and crash with a SyntaxError).
const EA_CFG = (typeof window !== "undefined" && window.EA_CONFIG) ? window.EA_CONFIG : null;
const EA_ASSETS_BASE = EA_CFG && EA_CFG.assetsBaseUrl ? String(EA_CFG.assetsBaseUrl) : "";

// Upload helpers (WP plugin)
const UPLOAD_FILE_CACHE = new Map(); // localId -> File
const UPLOAD_INFLIGHT = new Set(); // localId

function bytesHuman(n) {
  const b = Number(n || 0);
  if (!Number.isFinite(b) || b <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  let v = b, i = 0;
  while (v >= 1024 && i < units.length - 1) { v /= 1024; i++; }
  return (i === 0 ? String(Math.round(v)) : v.toFixed(1)) + " " + units[i];
}

function extOf(name) {
  const s = String(name || "");
  const m = s.toLowerCase().match(/\.([a-z0-9]{1,8})$/);
  return m ? m[1] : "";
}

function isProbablyImage(mime, name) {
  const mt = String(mime || "").toLowerCase();
  if (mt.startsWith("image/")) return true;
  const e = extOf(name);
  return ["jpg", "jpeg", "png", "webp", "gif", "heic", "heif"].includes(e);
}

function getUploadCfg() {
  if (!EA_CFG || !EA_CFG.orderId) return null;
  const orderId = String(EA_CFG.orderId);
  const nonce = EA_CFG.nonce ? String(EA_CFG.nonce) : "";
  const uploadUrl = EA_CFG.uploadUrl ? String(EA_CFG.uploadUrl) : "";
  const downloadUrl = EA_CFG.uploadDownloadUrl ? String(EA_CFG.uploadDownloadUrl) : "";
  const deleteUrl = EA_CFG.uploadDeleteUrl ? String(EA_CFG.uploadDeleteUrl) : "";
  if (!orderId || !uploadUrl || !downloadUrl || !deleteUrl) return null;
  return { orderId, nonce, uploadUrl, downloadUrl, deleteUrl };
}

function buildUrl(base, params) {
  const u = new URL(String(base), location.href);
  Object.entries(params || {}).forEach(([k, v]) => {
    if (v == null || v === "") return;
    u.searchParams.set(k, String(v));
  });
  return u.toString();
}

async function apiUploadFile(fieldKey, file, localId) {
  const cfg = getUploadCfg();
  if (!cfg) return { ok: false, error: "no_cfg" };

  const fd = new FormData();
  fd.append("fieldKey", String(fieldKey));
  fd.append("file", file, file.name);

  const url = buildUrl(cfg.uploadUrl, { orderId: cfg.orderId });
  const resp = await fetch(url, {
    method: "POST",
    headers: { ...(cfg.nonce ? { "X-WP-Nonce": cfg.nonce } : {}) },
    body: fd,
    credentials: "same-origin",
  });
  const json = await resp.json().catch(() => null);
  if (!resp.ok || !json || !json.fileId) {
    return { ok: false, error: (json && json.message) ? String(json.message) : "upload_failed" };
  }
  return { ok: true, file: json };
}

async function apiDeleteFile(fileId) {
  const cfg = getUploadCfg();
  if (!cfg) return { ok: false, error: "no_cfg" };
  const url = buildUrl(cfg.deleteUrl, { orderId: cfg.orderId, fileId });
  const resp = await fetch(url, {
    method: "POST",
    headers: { ...(cfg.nonce ? { "X-WP-Nonce": cfg.nonce } : {}), "Content-Type": "application/json" },
    body: JSON.stringify({ fileId }),
    credentials: "same-origin",
  });
  const json = await resp.json().catch(() => null);
  if (!resp.ok || !(json && json.ok)) return { ok: false, error: "delete_failed" };
  return { ok: true };
}

function resolveAssetUrl(p) {
  const s = String(p || "");
  if (!s) return s;
  if (/^https?:\/\//i.test(s)) return s;
  if (s.startsWith("/")) return s;
  if (!EA_ASSETS_BASE) return s;

  // preview build uses "../assets/..." relative paths. In WP these break, so rewrite to plugin assets.
  // Map: ../assets/images/foo.png -> {assetsBaseUrl}/images/foo.png
  const m = s.match(/^(?:\.\.\/)+assets\/(.+)$/);
  if (m) return EA_ASSETS_BASE.replace(/\/+$/, "") + "/" + m[1];

  const m2 = s.match(/^(?:\.\/)?assets\/(.+)$/);
  if (m2) return EA_ASSETS_BASE.replace(/\/+$/, "") + "/" + m2[1];

  return s;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function tipToHtml(raw) {
  // Tooltips are authored as plain text, sometimes with inline references to local images.
  // We escape HTML first, then convert newlines and image paths to safe markup.
  let html = escapeHtml(raw == null ? "" : String(raw));

  // Convert any ../assets/images/... image path into an inline image.
  // Example (from spec): ...(siehe Bild: ../assets/images/fenster/feuertest-2fach.png)
  html = html.replace(
    /(\.\.\/assets\/images\/[A-Za-z0-9._/-]+\.(?:png|jpg|jpeg|webp|svg))/gi,
    (m) => '<span class="tipimgwrap"><img class="tipimg" src="' + resolveAssetUrl(m) + '" alt="" loading="lazy" /></span>'
  );

  html = html.replaceAll("\n", "<br>");
  return html;
}

const STORAGE_KEY_BASE = "ea_wizard_draft_v1";
function allowLocalStorage() {
  // In WP we only want localStorage on real order pages (source of truth is server).
  // On landing pages (no orderId yet), do not persist to localStorage.
  // Outside WP (no EA config), keep localStorage enabled (GitHub Pages preview).
  if (!EA_CFG) return true;
  return !!EA_CFG.orderId;
}
function getStorageKey() {
  if (!allowLocalStorage()) return "";
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

function findStepIndexById(stepId) {
  const id = String(stepId || "");
  if (!id) return -1;
  const steps = visibleSteps();
  return steps.findIndex((s) => String(s.id) === id);
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

function buildOrderProductLabel() {
  const a = String(state.ausweisart || "");
  const t = String(state.gebaeudetyp || "");

  const base =
    a === "Verbrauchsausweis" ? "Verbrauchsausweis" :
    a === "Bedarfsausweis" ? "Bedarfsausweis" :
    "Energieausweis";

  const suffix =
    t === "WG" ? "für Wohngebäude" :
    t === "NWG" ? "für Gewerbe" :
    t === "MISCH" ? "für Mischgebäude" :
    "für Gebäude";

  return base + " " + suffix;
}

function buildObjectAddressLabel() {
  const street = String(state.strasse || "").trim();
  const no = String(state.hausnummer || "").trim();
  const plz = String(state.plz || "").trim();
  const ort = String(state.ort || "").trim();

  const l1 = (street + (street && no ? " " : "") + no).trim();
  const l2 = (plz + (plz && ort ? " " : "") + ort).trim();
  const out = (l1 + (l1 && l2 ? ", " : "") + l2).trim();
  return out || "—";
}

function clampPct(n) {
  const v = Number(n);
  if (!Number.isFinite(v)) return 50;
  return clamp(v, 0, 100);
}

function computeEfficiencyMarkerPct() {
  // Heuristic-only: 0% = best (green/A+), 100% = worst (red/H).
  // We base it on a few "big" fields that exist in our form spec.
  //
  // The goal is plausibility, not legal correctness.
  let pct = 58; // neutral-ish default around D/E

  const y = Number(state.baujahr);
  if (Number.isFinite(y)) {
    if (y < 1978) pct += 18;
    else if (y < 1995) pct += 10;
    else if (y >= 2009) pct -= 6;
  }

  const ft = String(state.fenster_type || "");
  if (ft === "Einfachverglasung") pct += 16;
  else if (ft === "Kastenfenster") pct += 13;
  else if (ft === "Isolierglas alt") pct += 8;
  else if (ft === "Wärmeschutzglas") pct -= 6;
  else if (ft === "3-fach Wärmeschutzglas") pct -= 9;

  const aw = String(state.aussenwand_type || "");
  if (aw === "WDVS vorhanden") pct -= 6;
  else if (aw === "Fachwerk") pct += 6;
  else if (aw === "Vollziegel / Naturstein") pct += 4;

  const kt = String(state.heizung_kesseltyp || "");
  if (kt === "Konstanttemperatur") pct += 12;
  else if (kt === "Niedertemperatur") pct += 6;
  else if (kt === "Brennwert") pct -= 4;
  else if (kt === "Wärmepumpe") pct -= 7;

  // Conservative clamp to avoid overflowing outside the bar.
  return clamp(pct, 2, 98);
}

function computeEfficiencyPotenzPct(nowPct) {
  // "Potenz" = improvement potential (better than now -> more left).
  // We give more improvement if key parts aren't in "best" state.
  let delta = 8;

  const ft = String(state.fenster_type || "");
  if (ft && ft !== "3-fach Wärmeschutzglas") delta += 4;

  const aw = String(state.aussenwand_type || "");
  if (aw && aw !== "WDVS vorhanden") delta += 2;

  const kt = String(state.heizung_kesseltyp || "");
  if (kt && kt !== "Wärmepumpe" && kt !== "Brennwert") delta += 2;

  const y = Number(state.baujahr);
  if (Number.isFinite(y) && y < 1978) delta += 2;

  delta = clamp(delta, 6, 18);
  return clamp(nowPct - delta, 2, 98);
}

function updateEfficiencyMarkers() {
  // Markers are present in the header markup (WP shortcode + preview).
  // We move them with percent padding-left via CSS var `--pos`.
  try {
    const root = document.querySelector(".eff-right");
    if (!root) return;

    const elNow = root.querySelector(".potenz.jetzt");
    const elPot = root.querySelector(".potenz:not(.jetzt)");
    if (!elNow && !elPot) return;

    // If author wants manual control, allow opt-out:
    // set `data-manual-pos="1"` on the marker element.
    const manualNow = elNow && elNow.getAttribute("data-manual-pos") === "1";
    const manualPot = elPot && elPot.getAttribute("data-manual-pos") === "1";

    // If key info is missing, keep stable defaults (still visible but neutral).
    const hasAny = !isEmpty(state.baujahr) || !isEmpty(state.fenster_type) || !isEmpty(state.heizung_kesseltyp);
    const nowPct = hasAny ? computeEfficiencyMarkerPct() : 60;
    const potPct = hasAny ? computeEfficiencyPotenzPct(nowPct) : 45;

    if (elNow && !manualNow) elNow.style.setProperty("--pos", clampPct(nowPct) + "%");
    if (elPot && !manualPot) elPot.style.setProperty("--pos", clampPct(potPct) + "%");
  } catch (e) {}
}

function renderSelectedOptionTip(field, value) {
  const { opt } = selectedOptionFor(field, value);
  const key = opt && opt.tipKey;
  if (!key || !TIPS[key]) return null;
  return el("div", { class: "optiontip", html: tipToHtml(TIPS[key]) });
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
        el("span", { class: "tipbox", html: tipToHtml(TIPS[field.tipKey]) })
      )
    );
  }
  return el("label", null, ...pieces);
}

function renderChecklist(field) {
  const wrap = el("div", { class: "checklistbox" + (field.variant ? (" " + String(field.variant)) : "") });

  if (field.title) wrap.appendChild(el("div", { class: "checklist-title" }, String(field.title)));
  if (field.text) wrap.appendChild(el("div", { class: "checklist-text muted small" }, String(field.text)));

  if (field.img) {
    wrap.appendChild(el("img", { class: "checklist-img", src: resolveAssetUrl(String(field.img)), alt: String(field.imgAlt || field.title || "Example") }));
  }

  const items = Array.isArray(field.items) ? field.items : [];
  if (items.length) {
    const ul = el("ul", { class: "checklist-items" });
    items.forEach((it) => {
      const label = (it && it.label != null) ? String(it.label) : "";
      const note = (it && it.note != null) ? String(it.note) : "";
      const req = Boolean(it && it.required);
      ul.appendChild(
        el(
          "li",
          { class: "checklist-item" + (req ? " req" : "") },
          el("div", { class: "checklist-main" }, label, req ? el("span", { class: "checklist-req", "aria-hidden": "true" }, "*") : null),
          note ? el("div", { class: "checklist-note muted small" }, note) : null
        )
      );
    });
    wrap.appendChild(ul);
  }

  return wrap;
}

function renderStepper() {
  const steps = visibleSteps();
  dom.topStepper.innerHTML = "";
  steps.forEach((st, idx) => {
    // Disallow jumping ahead via the stepper. Only current/past steps are clickable.
    const locked = idx > stepIndex;
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
  // - alte Fenster + Neubau -> prüfen
  // - Baujahr < 1960 + Fußbodenheizung -> prüfen
  // - Wärmepumpe + Radiatoren -> Hinweis
  if (Number.isFinite(y) && y >= 2000) {
    if (state.fenster_type === "Einfachverglasung" || state.fenster_type === "Kastenfenster") warnings.push("Alte Fenster + neueres Baujahr: bitte prüfen.");
  }
  if (Number.isFinite(y) && y < 1960 && state.heizung_waermeabgabe === "Fußbodenheizung") warnings.push("Baujahr < 1960 + Fußbodenheizung: bitte prüfen.");
  if (state.heizung_kesseltyp === "Wärmepumpe" && state.heizung_waermeabgabe === "Radiatoren") warnings.push("Wärmepumpe + Radiatoren: Hinweis (bitte prüfen).");

  // NWG SMART warnings (from spec examples)
  if (state.gebaeudetyp === "NWG") {
    if (state.nwg_fensteranteil === "hoch (>60%)") warnings.push("Hohe Glasflächen beeinflussen den Energiebedarf maßgeblich.");
    if (state.nwg_lueftung === "Zentrale Lüftungsanlage" || state.nwg_lueftung === "Lüftung mit Wärmerückgewinnung") warnings.push("Angaben zur Luftmenge können für den Bedarfsausweis erforderlich sein.");
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

function setValue(key, value, step, opts) {
  state[key] = value;

  // Keep spec constraint: if Ausweisart not Bedarf, remove invalid Anlass
  if (key === "ausweisart" && state.ausweisart !== "Bedarfsausweis") {
    if (state.anlass === "Neubau" || state.anlass === "Modernisierung") state.anlass = "";
  }

  // After-change hooks from spec
  const hookName = step && step.afterChangeRef;
  if (hookName && AFTER_CHANGE[hookName]) AFTER_CHANGE[hookName](state, key);

  const shouldRender = !(opts && opts.render === false);
  if (shouldRender) render();
  else {
    // Avoid full re-render while typing; keep UI responsive and cursor stable.
    runPlausibilityWarnings();
    updateOverview();
  }
}

function renderFields(step) {
  dom.form.innerHTML = "";

  const blocks = Array.isArray(step.blocks) && step.blocks.length
    ? step.blocks
    : [{ title: "", fields: step.fields || [] }];

  blocks.forEach((block) => {
    const fields = (block.fields || []).filter((f) => fieldWhen(f));
    if (!fields.length) return;
    if (block.title) dom.form.appendChild(el("div", { class: "block-title" }, block.title));

    fields.forEach((field) => {
      if (field.type === "checklist") {
        const wrap = el("div", { class: "field full checklist-field" });
        wrap.appendChild(renderChecklist(field));
        dom.form.appendChild(wrap);
        return;
      }

      const key = field.key;
      const val = state[key];

      const wrap = el("div", { class: "field" + (field.full ? " full" : ""), "data-key": key });
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
        // While typing, do not re-render (otherwise the input element gets recreated and typing feels broken).
        control.addEventListener("input", () => setValue(key, control.value, step, { render: false }));
        // On commit (blur/enter), re-render so any dependent UI updates can happen.
        control.addEventListener("change", () => setValue(key, control.value, step));
      } else if (field.type === "counter") {
        const min = field.min != null ? Number(field.min) : 0;
        const max = field.max != null ? Number(field.max) : 999999;
        const cur = Number(val || 0);
        const input = el("input", { class: "control", name: key, type: "number", value: val ?? "", placeholder: field.hint || "" });
        if (field.min != null) input.setAttribute("min", String(field.min));
        if (field.max != null) input.setAttribute("max", String(field.max));
        input.addEventListener("input", () => setValue(key, input.value, step, { render: false }));
        input.addEventListener("change", () => setValue(key, input.value, step));

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
            el("img", { src: resolveAssetUrl(opt.img), alt: opt.label }),
            el("div", { class: "cap" }, opt.label)
          );
          control.appendChild(box);
        });
        optionTip = renderSelectedOptionTip(field, val);
      } else if (field.type === "file") {
        const cfg = getUploadCfg(); // null on landing pages or when not logged in
        const accept = String(field.accept || "");
        const maxFiles = field.maxFiles != null ? Number(field.maxFiles) : (field.multiple ? 30 : 1);

        // Normalize legacy string-array uploads to object-array.
        const savedRaw = state.uploads[key] || [];
        const saved = Array.isArray(savedRaw)
          ? savedRaw.map((it) => (typeof it === "string" ? ({ name: it, status: "legacy" }) : it))
          : [];
        state.uploads[key] = saved;

        const note = el("div", { class: "up-note muted small" },
          field.multiple ? ("Upload: bis zu " + String(maxFiles) + " Dateien") : "Upload: 1 Datei",
          accept ? (" · Formate: " + accept.replaceAll(",", ", ")) : ""
        );

        const inp = el("input", { class: "up-input", type: "file", name: key, accept, ...(field.multiple ? { multiple: true } : {}) });
        // IMPORTANT: prevent event bubbling to the drop-zone click handler.
        // Otherwise a click on this button can trigger two `input.click()` calls and reopen the dialog.
        const btnPick = el(
          "button",
          {
            type: "button",
            class: "btn secondary up-pick",
            onclick: (e) => {
              try { e.preventDefault(); e.stopPropagation(); } catch (err) {}
              inp.click();
            },
          },
          "Datei auswählen"
        );
        const drop = el(
          "div",
          { class: "up-drop", role: "button", tabindex: "0" },
          el("div", { class: "up-ico", "aria-hidden": "true" }, "⬆"),
          el("div", { class: "up-t1" }, "Dateien per Drag & Drop hochladen"),
          el("div", { class: "up-t2 muted small" }, "Privat. Nur für Sie sichtbar."),
          btnPick
        );

        const grid = el("div", { class: "up-grid" });

        const renderItem = (item) => {
          const name = String(item.name || "");
          const size = item.size != null ? bytesHuman(item.size) : "";
          const mime = String(item.mime || "");
          const isImg = isProbablyImage(mime, name);

          // Prefer server-backed previews for uploaded files. `blob:` preview URLs are session-only.
          const thumbSrc =
            (item.url ? String(item.url) : "") ||
            (item.fileId && cfg ? buildUrl(cfg.downloadUrl, { orderId: cfg.orderId, fileId: item.fileId, inline: 1 }) : "") ||
            (item.previewUrl ? String(item.previewUrl) : "");

          const thumb = isImg && thumbSrc
            ? el("img", { class: "up-thumb", src: thumbSrc, alt: name, loading: "lazy" })
            : el("div", { class: "up-file" }, el("div", { class: "up-file-ico" }, "PDF"), el("div", { class: "up-file-name" }, name));

          const status =
            item.status === "uploading" ? "Uploading..." :
            item.status === "error" ? "Fehler" :
            item.status === "uploaded" ? "OK" : "";

          const metaLine = el("div", { class: "up-meta muted small" }, [size, status].filter(Boolean).join(" · "));

          const btnDel = el("button", { type: "button", class: "up-del", title: "Entfernen" }, "🗑");
          btnDel.addEventListener("click", async () => {
            // remove locally first (snappy UI)
            const arr = state.uploads[key] || [];
            const idx = arr.indexOf(item);
            if (idx >= 0) arr.splice(idx, 1);
            state.uploads[key] = arr;
            try {
              if (item.previewUrl) URL.revokeObjectURL(String(item.previewUrl));
            } catch (e) {}
            render();

            if (item.fileId && cfg) {
              await apiDeleteFile(String(item.fileId)).catch(() => {});
            }
          });

          const card = el("div", { class: "up-item" }, btnDel, thumb, el("div", { class: "up-cap" }, name), metaLine);
          return card;
        };

        const renderGrid = () => {
          grid.innerHTML = "";
          (state.uploads[key] || []).forEach((it) => grid.appendChild(renderItem(it)));
        };

        const acceptedExts = accept
          .split(",")
          .map((s) => s.trim().toLowerCase())
          .filter(Boolean)
          .map((s) => (s.startsWith(".") ? s.slice(1) : s));

        const addFiles = (files) => {
          const arr = state.uploads[key] || [];
          const list = Array.from(files || []);
          for (const f of list) {
            if (arr.length >= maxFiles) break;
            const e = extOf(f.name);
            if (acceptedExts.length && e && !acceptedExts.includes(e)) {
              arr.push({ name: f.name, size: f.size, mime: f.type, status: "error", error: "format" });
              continue;
            }
            const localId = "l_" + Math.random().toString(36).slice(2);
            const previewUrl = URL.createObjectURL(f);
            const item = { localId, name: f.name, size: f.size, mime: f.type, previewUrl, status: cfg ? "uploading" : "local" };
            UPLOAD_FILE_CACHE.set(localId, f);
            arr.push(item);

            if (cfg) {
              // Kick off upload in background.
              (async () => {
                if (UPLOAD_INFLIGHT.has(localId)) return;
                UPLOAD_INFLIGHT.add(localId);
                try {
                  const res = await apiUploadFile(key, f, localId);
                  if (!res.ok) {
                    item.status = "error";
                    item.error = res.error || "upload_failed";
                  } else {
                    item.status = "uploaded";
                    item.fileId = String(res.file.fileId);
                    if (res.file.url) item.url = String(res.file.url);
                    item.mime = res.file.mime || item.mime;
                    item.size = res.file.size || item.size;
                  }
                } catch (e) {
                  item.status = "error";
                  item.error = "upload_failed";
                } finally {
                  UPLOAD_INFLIGHT.delete(localId);
                  UPLOAD_FILE_CACHE.delete(localId);
                  // Keep server draft in sync (best effort).
                  saveDraftServer(exportData(), { reason: "upload", fieldKey: key, at: new Date().toISOString() });
                  render();
                }
              })();
            }
          }
          state.uploads[key] = arr;
          render();
        };

        inp.addEventListener("change", () => {
          addFiles(inp.files);
          try { inp.value = ""; } catch (e) {}
        });

        const stop = (e) => { e.preventDefault(); e.stopPropagation(); };
        ["dragenter", "dragover"].forEach((ev) => drop.addEventListener(ev, (e) => { stop(e); drop.classList.add("drag"); }));
        ["dragleave", "drop"].forEach((ev) => drop.addEventListener(ev, (e) => { stop(e); drop.classList.remove("drag"); }));
        drop.addEventListener("drop", (e) => addFiles(e.dataTransfer && e.dataTransfer.files));
        drop.addEventListener("click", (e) => {
          // If the click originated from the "pick file" button, do nothing (button handler already ran).
          if (e && e.target && e.target.closest && e.target.closest(".up-pick")) return;
          inp.click();
        });
        drop.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); inp.click(); } });

        renderGrid();
        control = el("div", { class: "upbox" }, note, drop, inp, grid);
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
              setValue(key, items, step, { render: false });
            });
            inp.addEventListener("change", () => setValue(key, items, step));
            cell.appendChild(inp);
            grid.appendChild(cell);
          });

          // Derived preview: area + total
          const h = Number(it.hoehe_m);
          const w = Number(it.breite_m);
          if (Number.isFinite(h) && Number.isFinite(w)) {
            const a = h * w;
            row.appendChild(el("div", { class: "rep-math" }, "Fläche: ", el("b", null, a.toFixed(3)), " m²"));
          }

          row.appendChild(grid);
          return row;
        };

        items.forEach((_, idx) => list.appendChild(renderRow(idx)));

        const addBtn = el("button", { type: "button", class: "btn secondary rep-add", onclick: () => {
          items.push({});
          setValue(key, items, step);
        } }, "+ " + itemLabel + " hinzufügen");

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
      } else if (field.type === "kvsummary") {
        wantsDefaultLabel = false;

        const rows = [
          ["Produkt:", buildOrderProductLabel()],
          ["Adresse:", buildObjectAddressLabel()],
          ["Lieferzeit:", "innerhalb von 24 Stunden"],
          ["Versand:", "PDF per E-Mail"],
        ];

        const list = el(
          "div",
          { class: "kvlist" },
          ...rows.map(([k1, v1]) => el("div", { class: "kv" }, el("span", { class: "k muted" }, k1), el("span", { class: "v" }, v1)))
        );

        control = el("div", { class: "order-summary" }, list);
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
          if (sfReq && isEmpty(sfVal)) errors[key] = "Bitte alle Pflichtfelder in der Liste ausfüllen";
          if (sf.type === "number" && !isEmpty(sfVal)) {
            const n = Number(sfVal);
            if (!Number.isFinite(n)) errors[key] = "Ungültige Zahl in der Liste";
            if (sf.min != null && n < sf.min) errors[key] = "Wert in der Liste ist zu klein";
            if (sf.max != null && n > sf.max) errors[key] = "Wert in der Liste ist zu groß";
          }
        }
      }
      continue;
    }
    if (!isEmpty(v) && f.pattern) {
      const re = new RegExp(f.pattern);
      if (!re.test(String(v))) errors[key] = "Ungültiges Format";
    }
    if (!isEmpty(v) && f.type === "number") {
      const n = Number(v);
      if (!Number.isFinite(n)) errors[key] = "Zahl erforderlich";
      if (f.min != null && n < f.min) errors[key] = "Zu klein";
      if (f.max != null && n > f.max) errors[key] = "Zu groß";
    }
  }

  if (!silent) {
    for (const f of fields) {
      const key = f.key;
      const errEl = document.getElementById("err_" + key);
      if (!errEl) continue;

      // Mark the associated control(s) as invalid for styling + accessibility.
      // We keep it DOM-driven (query within the rendered field wrapper) so it works across all field types.
      const wrap = dom.form.querySelector('.field[data-key="' + CSS.escape(key) + '"]');
      if (wrap) {
        const invalid = Boolean(errors[key]);
        const setInvalid = (el) => {
          if (!el) return;
          if (invalid) el.setAttribute("aria-invalid", "true");
          else el.removeAttribute("aria-invalid");
        };

        // Text/number/select input(s)
        wrap.querySelectorAll(".control").forEach(setInvalid);
        // Radio chip groups
        setInvalid(wrap.querySelector(".radio-row"));
        // Checkbox row container
        setInvalid(wrap.querySelector(".checkbox-row"));
      }

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
    // Persist uploads in a portable format. Do NOT store `blob:` preview URLs or local-only IDs,
    // because they break after reload and can surface as "broken links" in the UI.
    const u = {};
    for (const [k, v] of Object.entries(out.uploads)) {
      const arr = Array.isArray(v) ? v : [];
      const kept = arr
        .map((it) => {
          if (!it || typeof it !== "object") return null;
          const fileId = it.fileId ? String(it.fileId) : "";
          if (!fileId) return null; // only keep server-backed uploads
          return {
            fileId,
            name: it.name ? String(it.name) : "",
            size: it.size != null ? Number(it.size) : undefined,
            mime: it.mime ? String(it.mime) : "",
            ...(it.url ? { url: String(it.url) } : {}),
          };
        })
        .filter(Boolean);
      if (kept.length) u[k] = kept;
    }
    out.uploads = u;
    if (Object.keys(u).length === 0) delete out.uploads;
  }
  out._meta = { createdAt: new Date().toISOString(), spec: "src/energieausweis-form/spec/*" };
  return out;
}

function saveDraftLocal(data) {
  try {
    const k = getStorageKey();
    if (!k) return false;
    localStorage.setItem(k, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
}

function saveDraftServer(data, meta) {
  // Optional: when embedded in WP, PHP can provide a draft endpoint and nonce via window.EA_CONFIG.
  // This is "best effort" and must not block navigation.
  try {
    const url = EA_CFG && (EA_CFG.draftUrl || EA_CFG.draftEndpoint);
    if (!url) return;
    const nonce = EA_CFG.nonce;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(nonce ? { "X-WP-Nonce": String(nonce) } : {}),
      },
      body: JSON.stringify({ data, meta }),
      credentials: "same-origin",
    }).catch(() => {});
  } catch (e) {}
}

function persistDraft(reason) {
  const data = exportData();
  saveDraftLocal(data);
  saveDraftServer(data, {
    reason,
    stepIndex,
    stepId: (currentStep() && currentStep().id) || "",
    at: new Date().toISOString(),
  });
  return data;
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
    // Summary step: render the configured fields (e.g. billing details).
    // NOTE: JSON export box is temporarily disabled (was only for debugging).
    renderFields(st);
  } else {
    renderFields(st);
  }

  dom.btnBack.disabled = stepIndex === 0;

  renderStepper();
  runPlausibilityWarnings();
  updateOverview();
  updateEfficiencyMarkers();
}

// Buttons
dom.btnBack.addEventListener("click", () => {
  stepIndex = clamp(stepIndex - 1, 0, visibleSteps().length - 1);
  render();
});

dom.btnNext.addEventListener("click", async () => {
  const steps = visibleSteps();
  const st = currentStep();
  const res = validateStep(stepIndex, { silent: false });
  if (!res.ok) return;

  // If we're at the branching step and don't have an order yet, create it on the server and redirect.
  // This keeps the plugin autonomous: order creation is handled via EA_CFG.createUrl.
  const createUrl = EA_CFG && EA_CFG.createUrl ? String(EA_CFG.createUrl) : "";
  const hasOrderId = EA_CFG && EA_CFG.orderId;
  if (st && st.id === "gebaeudetyp" && !hasOrderId && createUrl) {
    const old = dom.btnNext.textContent;
    try {
      dom.btnNext.disabled = true;
      dom.btnNext.textContent = "Bitte warten...";

      const data = exportData();
      // Keep a local copy as a fallback.
      saveDraftLocal(data);

      // After order creation we want to land on the next visible step (variant 2).
      // Compute it from current visibility rules.
      const stepsAfter = visibleSteps();
      const next = stepsAfter[clamp(stepIndex + 1, 0, stepsAfter.length - 1)];
      const nextStepId = next && next.id ? String(next.id) : "";

      const nonce = EA_CFG && EA_CFG.nonce ? String(EA_CFG.nonce) : "";
      const resp = await fetch(createUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(nonce ? { "X-WP-Nonce": nonce } : {}),
        },
        body: JSON.stringify({
          gebaeudetyp: state.gebaeudetyp,
          data,
          meta: {
            stepId: nextStepId,
            stepIndex: clamp(stepIndex + 1, 0, 9999),
          },
        }),
        credentials: "same-origin",
      });

      const json = await resp.json().catch(() => null);
      const redirectUrl = json && json.redirectUrl ? String(json.redirectUrl) : "";
      if (!resp.ok || !redirectUrl) {
        alert("Order konnte nicht erstellt werden.");
        dom.btnNext.disabled = false;
        dom.btnNext.textContent = old;
        return;
      }

      location.href = redirectUrl;
      return;
    } catch (e) {
      alert("Order konnte nicht erstellt werden.");
      dom.btnNext.disabled = false;
      dom.btnNext.textContent = old;
      return;
    }
  }

  // Normal step submit: persist and continue.
  persistDraft("next");
  stepIndex = clamp(stepIndex + 1, 0, steps.length - 1);
  render();
});

dom.btnSave.addEventListener("click", () => {
  persistDraft("manual");
  try {
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

async function init() {
  // Local fallback draft
  try {
    const k = getStorageKey();
    if (k) {
      const raw = localStorage.getItem(k);
      if (raw) {
        const d = JSON.parse(raw);
        state = { ...deepClone(DEFAULTS), ...d, uploads: d.uploads || {} };
      }
    }
  } catch (e) {}

  // Server source-of-truth draft (order pages)
  try {
    const draftUrl = EA_CFG && EA_CFG.draftUrl ? String(EA_CFG.draftUrl) : "";
    if (draftUrl) {
      const nonce = EA_CFG && EA_CFG.nonce ? String(EA_CFG.nonce) : "";
      const resp = await fetch(draftUrl, {
        method: "GET",
        headers: { ...(nonce ? { "X-WP-Nonce": nonce } : {}) },
        credentials: "same-origin",
      });
      const json = await resp.json().catch(() => null);
      const d = json && json.data ? json.data : null;
      const meta = json && json.meta ? json.meta : null;
      if (resp.ok && d && typeof d === "object") {
        state = { ...deepClone(DEFAULTS), ...d, uploads: d.uploads || {} };
        // Restore the last (server) step pointer.
        let stepId = meta && typeof meta === "object" && meta.stepId ? String(meta.stepId) : "";

        // Compatibility: older drafts might point at removed/merged steps.
        if (stepId === "wg_basisdaten" && String(state.gebaeudetyp || "") === "WG") stepId = "gebaeudetyp";

        let idx = findStepIndexById(stepId);
        if (idx >= 0) stepIndex = idx;
        else {
          // Safeguard fallback: if we can't restore the step pointer, open a safe start point.
          // - If building type isn't chosen yet: step 1
          // - Otherwise: step 2
          idx = findStepIndexById(isEmpty(state.gebaeudetyp) ? "anlass_ausweisart" : "gebaeudetyp");
          if (idx >= 0) stepIndex = idx;
        }
      }
    }
  } catch (e) {}

  render();
}

function showFatal(err) {
  try {
    const msg = (err && err.message) ? String(err.message) : String(err);
    const target = dom.form || document.getElementById("wizardForm");
    if (target) {
      target.innerHTML =
        '<div class="banner warn" style="display:flex">' +
          '<div class="ico">!</div>' +
          '<div><b>JS-Fehler</b><p>Die Form konnte nicht initialisiert werden. Bitte Konsole pr\u00fcfen.</p>' +
          '<pre class="errtxt" style="white-space:pre-wrap">' + escapeHtml(msg) + '</pre></div>' +
        '</div>';
    }
    // eslint-disable-next-line no-console
    console.error("EA form fatal:", err);
  } catch (e) {}
}

try {
  init();
} catch (e) {
  showFatal(e);
}
