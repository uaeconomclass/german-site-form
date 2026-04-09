/* AUTO-GENERATED FILE. Do not edit directly.
 * Source of truth:
 * - C:\GIT\german-site-form\src\energieausweis-form\spec
 * - C:\GIT\german-site-form\src\energieausweis-form\runtime
 * Rebuild:
 * - powershell -NoProfile -ExecutionPolicy Bypass -File tools/build-preview.ps1
 */
const FORM_SPEC = {"version":"v1","product":"Energieausweis","uiLocale":"de-DE","optionSets":{"anlass":[{"value":"","label":"Bitte wählen…"},{"value":"Vermietung","label":"Vermietung"},{"value":"Verkauf","label":"Verkauf"},{"value":"Sonstiges","label":"Sonstiges"},{"value":"Neubau","label":"Neubau","when":{"eq":["ausweisart","Bedarfsausweis"]}},{"value":"Modernisierung","label":"Modernisierung"}],"ausweisart":[{"value":"","label":"Welchen Ausweis benötigen Sie?"},{"value":"Verbrauchsausweis","label":"Verbrauchsausweis"},{"value":"Bedarfsausweis","label":"Bedarfsausweis"},{"value":"weiß ich nicht","label":"weiß ich nicht"}],"gebaeudetyp":[{"value":"","label":"Gebäudetyp"},{"value":"WG","label":"Wohngebäude (WG)"},{"value":"NWG","label":"Nichtwohngebäude (NWG)","when":{"eq":["ausweisart","Verbrauchsausweis"]}},{"value":"MISCH","label":"Mischgebäude"}],"gebaeudetyp_radio":[{"value":"WG","label":"Wohngebäude (WG)"},{"value":"NWG","label":"Nichtwohngebäude (NWG)","when":{"eq":["ausweisart","Verbrauchsausweis"]}},{"value":"MISCH","label":"Mischgebäude"}],"wg_subtype":[{"value":"","label":"Bitte wählen…"},{"value":"EFH","label":"Freistehendes Einfamilienhaus"},{"value":"DHH","label":"Doppelhaushälfte"},{"value":"REIHE_MITTE","label":"Reihenmittelhaus"},{"value":"REIHE_ENDE","label":"Reihenendhaus"},{"value":"MFH","label":"Mehrfamilienhaus (MFH)"}],"fenster_type":[{"value":"","label":"Bitte wählen…"},{"value":"Einfachverglasung","label":"Einfachverglasung","tipKey":"fenster_einfachverglasung"},{"value":"Verbundfenster","label":"Verbundfenster","tipKey":"fenster_verbundfenster"},{"value":"Kastenfenster","label":"Kastenfenster","tipKey":"fenster_kastenfenster"},{"value":"Isolierglas alt","label":"Zweifachverglasung (Isolierverglasung, alt)","tipKey":"fenster_isolierglas_alt"},{"value":"Wärmeschutzglas","label":"Zweifachwärmeschutzverglasung","tipKey":"fenster_waermeschutzglas"},{"value":"3-fach Wärmeschutzglas","label":"Dreifachverglasung","tipKey":"fenster_dreifach"}],"fenster_rahmenmaterial":[{"value":"","label":"Bitte wählen…"},{"value":"Holz","label":"Holz"},{"value":"Kunststoff","label":"Kunststoff"},{"value":"Aluminium","label":"Aluminium"},{"value":"Holz-Alu","label":"Holz-Alu"}],"kellerdecke_keller":[{"value":"","label":"Bitte wählen…"},{"value":"unbeheizter Keller","label":"unbeheizter Keller"},{"value":"beheizter Keller","label":"beheizter Keller"}],"kellerdecke_keller_radio":[{"value":"unbeheizter Keller","label":"unbeheizter Keller"},{"value":"beheizter Keller","label":"beheizter Keller"}],"kellerdecke_daemmung":[{"value":"","label":"Bitte wählen…"},{"value":"Dämmung vorhanden","label":"Dämmung vorhanden"},{"value":"Dämmung nicht vorhanden","label":"Dämmung nicht vorhanden"}],"kellerdecke_daemmung_radio":[{"value":"Dämmung vorhanden","label":"Dämmung vorhanden"},{"value":"Dämmung nicht vorhanden","label":"Dämmung nicht vorhanden"}],"heizung_waermeerzeuger":[{"value":"","label":"Bitte wählen…"},{"value":"Öl","label":"Heizöl","tipKey":"heizung_oel"},{"value":"Gas","label":"Erdgas","tipKey":"heizung_gas"},{"value":"Fernwärme","label":"Fernwärme","tipKey":"heizung_fernwaerme"},{"value":"Wärmepumpe","label":"Wärmepumpe","tipKey":"heizung_waermepumpe"},{"value":"Biomasse","label":"Holz / Pellets","tipKey":"heizung_biomasse"},{"value":"Elektro","label":"Strom","tipKey":"heizung_elektro"},{"value":"Sonstiges","label":"Sonstiges"},{"value":"Einzelöfen","label":"Einzelöfen","tipKey":"heizung_einzelofen"},{"value":"BHKW / KWK","label":"BHKW / KWK","tipKey":"heizung_bhkw"},{"value":"Hybridheizung","label":"Hybridheizung","tipKey":"heizung_hybrid"}],"heizung_kesseltyp":[{"value":"","label":"Bitte wählen…"},{"value":"Konstanttemperatur","label":"Konstanttemperatur","tipKey":"heizung_konstanttemperatur"},{"value":"Niedertemperatur","label":"Niedertemperatur","tipKey":"heizung_niedertemperatur"},{"value":"Brennwert","label":"Brennwert","tipKey":"heizung_brennwert"},{"value":"Wärmepumpe","label":"Wärmepumpe","tipKey":"heizung_waermepumpe"}],"heizung_waermeabgabe":[{"value":"","label":"Bitte wählen…"},{"value":"Heizkörper","label":"Heizkörper"},{"value":"Fußbodenheizung","label":"Fußbodenheizung"},{"value":"Wandheizung","label":"Wandheizung"},{"value":"Kombination","label":"Kombination"}],"warmwasser":[{"value":"","label":"Bitte wählen…"},{"value":"kein Warmwasser","label":"Kein Warmwasser vorhanden"},{"value":"zentral","label":"Zentral über die Heizungsanlage"},{"value":"dezentral elektrisch","label":"Dezentral elektrisch (z. B. Durchlauferhitzer / Boiler)"},{"value":"teilweise zentral","label":"Teilweise zentral / teilweise dezentral"}],"ja_nein":[{"value":"","label":"Bitte wählen…"},{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}],"ja_nein_radio":[{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}],"keller":[{"value":"Nicht vorhanden","label":"Nicht vorhanden"},{"value":"Unbeheizt","label":"Unbeheizt"},{"value":"Beheizt","label":"Beheizt"}],"dachgeschoss":[{"value":"Nicht vorhanden","label":"Nicht vorhanden"},{"value":"Unbeheizt","label":"Unbeheizt"},{"value":"Beheizt","label":"Beheizt"}],"gebaeudeanteil":[{"value":"Gesamtgebäude","label":"Gesamtgebäude"},{"value":"Wohnen","label":"Wohnen"}],"nwg_nutzung":[{"value":"","label":"Bitte wählen…"},{"value":"Büro / Verwaltung","label":"Büro / Verwaltung"},{"value":"Praxis / Gesundheit","label":"Praxis / Gesundheit"},{"value":"Schule / Kita","label":"Schule / Kita"},{"value":"Einzelhandel","label":"Einzelhandel"},{"value":"Gastronomie","label":"Hotel / Gastronomie"},{"value":"Lager / Produktion","label":"Lager / Produktion"},{"value":"Sonstiges NWG","label":"Sonstiges NWG"}],"nwg_aussenwand_simple":[{"value":"","label":"Bitte wählen…"},{"value":"Massiv","label":"Massiv"},{"value":"Stahlbeton","label":"Stahlbeton"},{"value":"Vorhangfassade","label":"Vorhangfassade"},{"value":"Glasfassade","label":"Glasfassade"},{"value":"WDVS","label":"WDVS"},{"value":"unbekannt","label":"unbekannt"}],"nwg_fensteranteil":[{"value":"","label":"Bitte wählen…"},{"value":"gering (\u003c30%)","label":"gering (\u003c30%)"},{"value":"mittel (30–60%)","label":"mittel (30–60%)"},{"value":"hoch (\u003e60%)","label":"hoch (\u003e60%)"}],"lueftung":[{"value":"","label":"Bitte wählen…"},{"value":"Fensterlüftung","label":"Fensterlüftung"},{"value":"Mechanische Abluft / Schachtlüftung","label":"Mechanische Abluft / Schachtlüftung"},{"value":"Zentrale ohne WRG","label":"Zentrale ohne WRG"},{"value":"Zentrale WRG","label":"Zentrale WRG"},{"value":"Dezentrale WRG","label":"Dezentrale WRG"},{"value":"Nicht bekannt","label":"Nicht bekannt"}],"nwg_lueftung":[{"value":"","label":"Bitte wählen…"},{"value":"Fensterlüftung","label":"Fensterlüftung"},{"value":"Mechanische Abluft","label":"Mechanische Abluft"},{"value":"Zentrale Lüftungsanlage","label":"Zentrale Lüftungsanlage"},{"value":"Lüftung mit Wärmerückgewinnung","label":"Lüftung mit Wärmerückgewinnung"}],"nwg_beleuchtung":[{"value":"","label":"Bitte wählen…"},{"value":"Standard","label":"Standard"},{"value":"LED","label":"LED"},{"value":"unbekannt","label":"unbekannt"}],"baualtersklasse":[{"value":"vor 1977","label":"vor 1977"},{"value":"1977–1994","label":"1977–1994"},{"value":"nach 1995","label":"nach 1995"}],"heizung_heizsystem":[{"value":"Zentralheizung","label":"Zentralheizung"},{"value":"Etagenheizung","label":"Etagenheizung"},{"value":"Einzelöfen","label":"Einzelöfen"},{"value":"Sonstiges","label":"Sonstiges"}],"wohnflaeche_basis":[{"value":"Wohnflächenberechnung","label":"Wohnflächenberechnung"},{"value":"Bauunterlagen","label":"Bauunterlagen"},{"value":"Schätzung","label":"Schätzung"}],"etr_abrechnungsart":[{"value":"Heizkostenabrechnung","label":"Heizkostenabrechnung"},{"value":"Gasrechnung","label":"Gasrechnung"},{"value":"Öllieferung","label":"Öllieferung"},{"value":"Holzlieferung","label":"Holzlieferung"},{"value":"Fernwärmeabrechnung","label":"Fernwärmeabrechnung"}],"etr_verbrauch_betrifft_wg":[{"value":"Gesamtgebäude","label":"Gesamtes Gebäude"},{"value":"Teilverbrauch","label":"Nur einzelne Wohneinheiten (Teilverbrauch)"}],"nwg_heizsystem":[{"value":"Zentralheizung","label":"Zentralheizung"},{"value":"Einzelheizgeräte / Einzelöfen","label":"Einzelheizgeräte / Einzelöfen"},{"value":"Etagenheizung","label":"Etagenheizung"},{"value":"Sonstiges","label":"Sonstiges"}],"nwg_flaeche_basis":[{"value":"Flächenberechnung","label":"Flächenberechnung"},{"value":"Bauunterlagen","label":"Bauunterlagen"},{"value":"Schätzung","label":"Schätzung"}],"etr_verbrauch_betrifft_nwg":[{"value":"Gesamtgebäude","label":"Gesamtes Gebäude"},{"value":"Teilflächen","label":"Teilflächen des Gebäudes"}],"etr_abrechnungsart_nwg":[{"value":"Heizkostenabrechnung","label":"Heizkostenabrechnung"},{"value":"Gasrechnung","label":"Gasrechnung"},{"value":"Öllieferung","label":"Öllieferung"},{"value":"Biomasse / Holzlieferung","label":"Biomasse / Holzlieferung"},{"value":"Fernwärmeabrechnung","label":"Fernwärmeabrechnung"}],"nwg_strom_betrifft":[{"value":"Gesamtgebäude","label":"Gesamtes Gebäude"},{"value":"Teilflächen","label":"Nur Teilflächen"}],"ja_nein_unbekannt":[{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"},{"value":"Unbekannt","label":"Unbekannt"}],"nwg_lueftung_verbrauch":[{"value":"keine","label":"Keine"},{"value":"Lüftungsanlage","label":"Lüftungsanlage"},{"value":"Lüftungsanlage mit WRG","label":"Lüftungsanlage mit Wärmerückgewinnung"}],"keller_in_wohnflaeche":[{"value":"Nein","label":"Nein"},{"value":"Teilweise","label":"Teilweise"},{"value":"Vollständig","label":"Vollständig"}],"aussenwand_konstruktion":[{"value":"Fachwerk","label":"Fachwerk"},{"value":"Vollziegel / Naturstein","label":"Vollziegel / Naturstein"},{"value":"Hohlblock / Bims","label":"Hohlblock / Bims"},{"value":"Kalksandstein","label":"Kalksandstein"},{"value":"Ziegel","label":"Ziegel"},{"value":"Porenbeton / Gasbeton","label":"Porenbeton / Gasbeton"},{"value":"Stahlbeton","label":"Stahlbeton"},{"value":"WDVS vorhanden","label":"WDVS vorhanden"},{"value":"Unbekannt","label":"Unbekannt"}],"dach_typ":[{"value":"","label":"Bitte wählen…"},{"value":"Steildach ungedämmt","label":"Steildach ungedämmt"},{"value":"Steildach gedämmt","label":"Steildach gedämmt"},{"value":"Flachdach","label":"Flachdach"},{"value":"Oberste Geschossdecke gedämmt","label":"Oberste Geschossdecke gedämmt"},{"value":"Oberste Geschossdecke ungedämmt","label":"Oberste Geschossdecke ungedämmt"},{"value":"Unbekannt","label":"Unbekannt"}],"dachraum_zustand":[{"value":"","label":"Bitte wählen…"},{"value":"Unbeheizt","label":"Dachraum unbeheizt"},{"value":"Ausgebaut / beheizt","label":"Dachraum ausgebaut / beheizt"},{"value":"Teilweise ausgebaut","label":"Teilweise ausgebaut"},{"value":"Unbekannt","label":"Unbekannt"}],"keller_bodenplatte":[{"value":"","label":"Bitte wählen…"},{"value":"Unbeheizter Keller","label":"Unbeheizter Keller vorhanden"},{"value":"Beheizter Keller","label":"Beheizter Keller"},{"value":"Kellerdecke gedämmt","label":"Kellerdecke gedämmt"},{"value":"Kellerdecke ungedämmt","label":"Kellerdecke ungedämmt"},{"value":"Bodenplatte ohne Keller","label":"Bodenplatte ohne Keller"}],"verglasung":[{"value":"Einfachverglasung","label":"Einfachverglasung"},{"value":"Verbundfenster","label":"Verbundfenster"},{"value":"Kastenfenster","label":"Kastenfenster"},{"value":"Isolierverglasung (alt)","label":"Isolierverglasung (alt)"},{"value":"Wärmeschutzverglasung","label":"Wärmeschutzverglasung"},{"value":"3-fach Verglasung","label":"3-fach Verglasung"}],"fenster_abstandhalter":[{"value":"Aluminium","label":"Aluminium-Abstandhalter"},{"value":"Warme Kante","label":"Warme Kante (Kunststoff / Edelstahl)"},{"value":"Unbekannt","label":"Unbekannt"}],"fenster_einbauzeitraum":[{"value":"vor 1995","label":"vor 1995"},{"value":"1995–2005","label":"1995–2005"},{"value":"2005–2015","label":"2005–2015"},{"value":"nach 2015","label":"nach 2015"},{"value":"Unbekannt","label":"Unbekannt"}],"fenster_rahmen":[{"value":"Holz","label":"Holz"},{"value":"Kunststoff","label":"Kunststoff"},{"value":"Aluminium","label":"Aluminium"},{"value":"Holz-Alu","label":"Holz-Alu"}],"lueftungssystem_wg":[{"value":"Fensterlüftung","label":"Fensterlüftung"},{"value":"Mechanische Abluftanlage","label":"Mechanische Abluftanlage"},{"value":"Zentrale Lüftungsanlage","label":"Zentrale Lüftungsanlage"},{"value":"Dezentrale Lüftungsgeräte","label":"Dezentrale Lüftungsgeräte"},{"value":"Nicht bekannt","label":"Nicht bekannt"}],"heizung_waermeverteilung":[{"value":"","label":"Bitte wählen…"},{"value":"Leitungen im beheizten Bereich","label":"Heizkörperleitungen im beheizten Bereich"},{"value":"Leitungen im unbeheizten Bereich","label":"Heizkörperleitungen im unbeheizten Bereich"},{"value":"Teilweise gedämmt","label":"Teilweise gedämmt"},{"value":"Unbekannt","label":"Unbekannt"}],"warmwasser_integriert":[{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"},{"value":"Teilweise","label":"Teilweise"}],"etr_kategorie_bk":[{"value":"","label":"Bitte waehlen..."},{"value":"BK_GAS","label":"Erdgas"},{"value":"BK_OEL","label":"Heizoel"},{"value":"BK_STROM","label":"Strom"},{"value":"BK_BIOGAS","label":"Biogas"},{"value":"BK_BIOOEL","label":"Biooel"},{"value":"BK_HOLZ","label":"Holz"},{"value":"BK_HHS","label":"Holzhackschnitzel"},{"value":"BK_PELLET","label":"Holzpellets"},{"value":"BK_KOHLE","label":"Steinkohle"},{"value":"BK_BRAUNKOHLE","label":"Braunkohle"},{"value":"BK_FLUESSIGGAS","label":"Fluessiggas"},{"value":"BK_NACHTSTR","label":"Strom (Niedertarif)"},{"value":"BK_FW0","label":"Fernwaerme (ohne KWK)"},{"value":"BK_FW70","label":"Fernwaerme (mit 70% KWK)"}]},"steps":[{"id":"adresse","title":"Gebäudeadresse","meta":"3","intro":{"title":"Gebäudeadresse","text":"Bitte geben Sie die Adresse des Gebäudes an, für das der Energieausweis erstellt wird."},"fields":[{"key":"strasse","label":"Straße","type":"text","required":true,"hint":"Straße"},{"key":"hausnummer","label":"Hausnummer","type":"text","required":true,"hint":"Nr."},{"key":"plz","label":"PLZ","type":"text","required":true,"pattern":"^\\d{5}$","hint":"z. B. 10115"},{"key":"ort","label":"Ort","type":"text","required":true,"hint":"z. B. München"},{"key":"bundesland","label":"Bundesland","type":"text","required":false,"hint":"z. B. Bayern"},{"key":"eigentuemer_verhaeltnis","label":"Eigentümer des Gebäudes","type":"radio","required":true,"full":true,"options":[{"value":"Auftraggeber","label":"Auftraggeber = Eigentümer"},{"value":"Abweichend","label":"Abweichender Eigentümer"}]}],"group":"Gebäude"},{"id":"gebaeudetyp","title":"Gebäude-Stammdaten","meta":"1","afterChangeRef":"smart_step2_split","intro":{"title":"Start","text":"Ausweisart und Gebäudetyp."},"blocks":[{"title":"","fields":[{"key":"anlass","label":"Anlass","type":"select","required":true,"tipKey":"anlass","optionsRef":"anlass","infoText":"Wofür benötigen Sie den Ausweis?"},{"key":"ausweisart","label":"Ausweisart","type":"select","required":true,"tipKey":"ausweisart","optionsRef":"ausweisart"},{"key":"modernisierungsjahr","label":"Modernisierungsjahr","type":"number","min":1900,"max":2026,"hint":"z. B. 2019","tipKey":"modernisierungsjahr","when":{"eq":["anlass","Modernisierung"]},"required":{"eq":["anlass","Modernisierung"]}},{"key":"wei_check_gebaeudetyp","label":"Gebäudetyp","type":"radio","full":true,"when":{"eq":["ausweisart","weiß ich nicht"]},"required":{"eq":["ausweisart","weiß ich nicht"]},"options":[{"value":"wg_lt5","label":"Wohngebäude mit weniger als 5 Wohnungen"},{"value":"wg_ge5","label":"Wohngebäude mit 5 oder mehr Wohnungen"},{"value":"nwg","label":"Nichtwohngebäude"}]},{"key":"wei_check_baugenehmigung","label":"Datum der Baugenehmigung","type":"radio","full":true,"when":{"eq":["ausweisart","weiß ich nicht"]},"required":{"eq":["ausweisart","weiß ich nicht"]},"options":[{"value":"vor_1977","label":"Vor 01.11.1977"},{"value":"nach_1977","label":"Nach 01.11.1977"}]},{"key":"wei_check_modernisierung","label":"Modernisierung","type":"radio","full":true,"when":{"eq":["ausweisart","weiß ich nicht"]},"required":{"eq":["ausweisart","weiß ich nicht"]},"options":[{"value":"keine","label":"Keine"},{"value":"unbekannt","label":"Unbekannt"},{"value":"wschv_1977","label":"Gemäß Wärmeschutzverordnung vom 01.11.1977"}]},{"key":"wei_check_leerstand","label":"Leerstand","type":"radio","full":true,"when":{"eq":["ausweisart","weiß ich nicht"]},"required":{"eq":["ausweisart","weiß ich nicht"]},"options":[{"value":"ge_30","label":"30% oder mehr der Gesamtfläche"},{"value":"lt_30","label":"Weniger als 30% der Gesamtfläche"}]}]},{"title":"","fields":[{"key":"misch_nutzung","label":"Welche Nutzung liegt im Gebäude vor?","type":"radio","required":true,"full":true,"options":[{"value":"Wohnen","label":"Wohnen"},{"value":"Gewerbe","label":"Gewerbe","when":{"eq":["ausweisart","Verbrauchsausweis"]}},{"value":"Kombination","label":"Kombination aus Wohnen und Gewerbe"}]},{"key":"misch_gewerbe_anteil","label":"Wie groß ist der gewerbliche Anteil ungefähr?","type":"radio","full":true,"when":{"eq":["misch_nutzung","Kombination"]},"required":{"eq":["misch_nutzung","Kombination"]},"options":[{"value":"unter 10%","label":"unter 10%"},{"value":"ca. 10–50%","label":"ca. 10–50%"},{"value":"über 50%","label":"über 50%","when":{"eq":["ausweisart","Verbrauchsausweis"]}}]}]},{"title":"","fields":[{"key":"gebaeudetyp","label":"Gebäudenutzung","type":"radio","required":true,"tipKey":"gebaeudetyp","optionsRef":"gebaeudetyp_radio","full":true,"infoText":"Wählen Sie den Typ Ihres Gebäudes."}]},{"title":"Komplexe Technik?","fields":[{"key":"misch_tech_lueftung","label":"Gibt es eine eigene Lüftungsanlage?","type":"radio","required":true,"optionsRef":"ja_nein_radio","when":{"eq":["gebaeudetyp","MISCH"]}},{"key":"misch_tech_kuehlung","label":"Gibt es Kühlung oder Klimaanlagen?","type":"radio","required":true,"optionsRef":"ja_nein_radio","when":{"eq":["gebaeudetyp","MISCH"]}},{"key":"misch_tech_oeffnungszeiten","label":"Hat der Gewerbeteil lange Öffnungszeiten?","type":"radio","required":true,"optionsRef":"ja_nein_radio","when":{"eq":["gebaeudetyp","MISCH"]}},{"key":"misch_tech_glas","label":"Gibt es große Glasflächen oder Küchenabluft?","type":"radio","required":true,"optionsRef":"ja_nein_radio","when":{"eq":["gebaeudetyp","MISCH"]}}]},{"title":"","fields":[{"key":"wg_subtype","label":"Gebäudetyp","type":"select","required":true,"optionsRef":"wg_subtype","when":{"eq":["gebaeudetyp","WG"]},"full":true}]},{"title":"Basisdaten","fields":[{"key":"baualtersklasse","label":"Baualtersklasse","type":"radio","required":true,"optionsRef":"baualtersklasse","when":{"eq":["gebaeudetyp","WG"]}},{"key":"baujahr","label":"Baujahr Gebäude","type":"number","required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1800,"max":2100,"hint":"z. B. 1985","when":{"eq":["gebaeudetyp","WG"]}},{"key":"anzahl_wohneinheiten","label":"Anzahl der Wohnungen","type":"counter","required":true,"min":1,"max":999,"hint":"z. B. 1","when":{"eq":["gebaeudetyp","WG"]}},{"key":"wohnflaeche","label":"Beheizte Wohnfläche (m²)","type":"number","required":true,"min":1,"max":20000,"tipKey":"wohnflaeche","hint":"z. B. 120","when":{"eq":["gebaeudetyp","WG"]}},{"key":"wohnflaeche_basis","label":"Angabe basiert auf","type":"radio","required":true,"optionsRef":"wohnflaeche_basis","when":{"eq":["gebaeudetyp","WG"]}},{"key":"nutzflaeche","label":"Nettogrundfläche – NGF (m²)","type":"number","required":false,"min":1,"max":20000,"tipKey":"nutzflaeche","hint":"z. B. 155","when":{"eq":["gebaeudetyp","WG"]}},{"key":"keller_in_wohnflaeche","label":"Ist ein Keller oder Untergeschoss in der beheizten Wohnfläche enthalten?","type":"radio","required":{"eq":["ausweisart","Bedarfsausweis"]},"when":{"and":[{"eq":["gebaeudetyp","WG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"optionsRef":"keller_in_wohnflaeche","full":true}]}],"group":"Gebäude"},{"id":"wg_basisdaten","title":"WG: Basisdaten (merged into step 2)","meta":"A1","when":{"eq":["__wg_basisdaten_enabled","1"]},"blocks":[],"group":"Gebäude"},{"id":"wg_huelle_fenster","title":"Gebäudehülle \u0026 Fenster","meta":"A3","when":{"and":[{"eq":["gebaeudetyp","WG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"intro":{"title":"Gebäudehülle","text":"Angaben zur Konstruktion der Gebäudehülle und den Fenstern.","img":"../assets/images/infografik/aussenwand-materialien-epochen.png"},"blocks":[{"title":"","fields":[{"key":"aussenwand_type","label":"Außenwand (Typ)","type":"select","full":true,"required":true,"tipGrid":[{"img":"../assets/images/aussenwand/fachwerk.png","label":"Fachwerk"},{"img":"../assets/images/aussenwand/vollziegel.png","label":"Vollziegel / Naturstein"},{"img":"../assets/images/aussenwand/hohlblockstein-bims.png","label":"Hohlblock / Bims"},{"img":"../assets/images/aussenwand/ziegel-hochlochziegel.png","label":"Ziegel"},{"img":"../assets/images/aussenwand/porenbeton-gasbeton.png","label":"Porenbeton / Gasbeton"},{"img":"../assets/images/aussenwand/stahlbeton.png","label":"Stahlbeton"},{"img":"../assets/images/aussenwand/wdvs-querschnitt.png","label":"WDVS vorhanden"}],"options":[{"value":"Fachwerk","label":"Fachwerk"},{"value":"Vollziegel / Naturstein","label":"Vollziegel / Naturstein"},{"value":"Hohlblock / Bims","label":"Hohlblock / Bims"},{"value":"Kalksandstein","label":"Kalksandstein"},{"value":"Ziegel","label":"Ziegel"},{"value":"Porenbeton / Gasbeton","label":"Porenbeton / Gasbeton"},{"value":"Stahlbeton","label":"Stahlbeton"},{"value":"WDVS vorhanden","label":"WDVS vorhanden"},{"value":"Unbekannt","label":"Unbekannt"}]},{"key":"aussenwand_baujahr","label":"Baujahr der Außenwand (falls abweichend vom Gebäude)","type":"number","required":false,"min":1800,"max":2100,"hint":"z. B. 1995"}]},{"title":"","fields":[{"key":"dach_typ","label":"Dach / oberste Geschossdecke","type":"select","required":true,"full":true,"optionsRef":"dach_typ"},{"key":"dach_daemmstaerke_cm","label":"Dämmstärke in cm","type":"number","full":true,"min":1,"hint":"z. B. 10","when":{"or":[{"eq":["dach_typ","Steildach gedämmt"]},{"eq":["dach_typ","Oberste Geschossdecke gedämmt"]}]},"required":{"or":[{"eq":["dach_typ","Steildach gedämmt"]},{"eq":["dach_typ","Oberste Geschossdecke gedämmt"]}]}},{"key":"dachraum_zustand","label":"Ist der Dachraum beheizt oder ausgebaut?","type":"select","required":true,"full":true,"optionsRef":"dachraum_zustand"}]},{"title":"","fields":[{"key":"keller_bodenplatte","label":"Kellerdecke / Bodenplatte","type":"select","required":true,"full":true,"optionsRef":"keller_bodenplatte"},{"key":"kellerdecke_daemmstaerke_cm","label":"Dämmstärke in cm","type":"number","full":true,"min":1,"hint":"z. B. 10","when":{"eq":["keller_bodenplatte","Kellerdecke gedämmt"]},"required":{"eq":["keller_bodenplatte","Kellerdecke gedämmt"]}}]},{"title":"Fenster / Türen","fields":[{"key":"fenster_type","label":"Verglasungsart","type":"select","full":true,"required":true,"tipKey":"fenster_type","optionsRef":"fenster_type"},{"key":"fenster_abstandhalter","label":"Abstandhalter der Fenster","type":"radio","required":false,"full":true,"optionsRef":"fenster_abstandhalter"},{"key":"fenster_einbauzeitraum","label":"Einbauzeitraum (Falls Baujahr bekannt)","type":"radio","required":false,"full":true,"optionsRef":"fenster_einbauzeitraum"},{"key":"fenster_rahmenmaterial","label":"Rahmenmaterial","type":"select","full":true,"required":false,"optionsRef":"fenster_rahmenmaterial"},{"key":"fenster_vermassung","label":"Fenster- und Türvermassung","type":"repeater","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"tipKey":"fenster_vermassung","itemLabel":"Element","minItems":1,"defaultItems":1,"addButtons":[{"label":"Fenster hinzufügen","defaults":{"typ":"Fenster"}},{"label":"Tür hinzufügen","defaults":{"typ":"Tür"}}],"fields":[{"key":"typ","label":"Typ","hideLabel":true,"type":"radio","required":true,"options":[{"value":"Fenster","label":"Fenster"},{"value":"Tür","label":"Tür"}]},{"key":"raum","label":"Raum / Bezeichnung","type":"text","required":false,"hint":"z. B. Küche, Haustür"},{"key":"ausrichtung","label":"Ausrichtung","type":"select","required":false,"when":{"eq":["typ","Fenster"]},"options":[{"value":"","label":"Bitte wählen…"},{"value":"Nord","label":"Nord"},{"value":"Nord-Ost","label":"Nord-Ost"},{"value":"Ost","label":"Ost"},{"value":"Süd-Ost","label":"Süd-Ost"},{"value":"Süd","label":"Süd"},{"value":"Süd-West","label":"Süd-West"},{"value":"West","label":"West"},{"value":"Nord-West","label":"Nord-West"}]},{"key":"hoehe_m","label":"Höhe (m)","type":"number","required":true,"min":0.1,"max":10,"hint":"z. B. 1.23"},{"key":"breite_m","label":"Breite (m)","type":"number","required":true,"min":0.1,"max":10,"hint":"z. B. 1.49"},{"key":"baujahr","label":"Baujahr","type":"number","required":false,"min":1800,"max":2100,"hint":"z. B. 2005"}]}]}],"group":"Gebäude"},{"id":"wg_geometrie","title":"Gebäudegeometrie","meta":"A3a","when":{"and":[{"eq":["gebaeudetyp","WG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"intro":{"title":"Gebäudegeometrie","text":"Maßangaben zur rechnerischen Bewertung des Gebäudes.","img":"../assets/images/fenster/vermassung-fenster.png","imgAlt":"Fenster-Vermassung (lichte Maße + 3 cm)"},"blocks":[{"title":"","fields":[{"key":"anzahl_vollgeschosse","label":"Anzahl der Vollgeschosse","type":"number","required":true,"min":1,"max":20,"hint":"z. B. 2"},{"key":"geschosshoehen","label":"Geschosshöhen (m)","type":"number","required":true,"min":1,"max":20,"hint":"z. B. 2.50"}]},{"title":"Rechentool-Gebäudevolumen beheizt","fields":[{"key":"dachvolumen","label":"1) Dachvolumen (m³)","type":"number","required":true,"min":0,"max":5000000,"hint":"z. B. 250"},{"key":"wohnvolumen","label":"2) Wohnvolumen (m³)","type":"number","required":true,"min":0,"max":5000000,"hint":"z. B. 450"},{"key":"kellervolumen","label":"3) Kellervolumen (m³)","type":"number","required":true,"min":0,"max":5000000,"hint":"z. B. 100"},{"key":"gebaeudevolumen","label":"Gebäudevolumen (m³)","type":"number","required":true,"min":1,"max":5000000,"hint":"z. B. 800","calcSumOf":["dachvolumen","wohnvolumen","kellervolumen"],"readonly":true}]},{"title":"Rechentool-Außenflächen beheizt","fields":[{"key":"aussenflaeche_dach","label":"1) Dachfläche / Oberste Geschossdecke (m²)","type":"number","required":true,"min":0,"max":500000,"hint":"z. B. 120"},{"key":"aussenflaeche_aussenwand","label":"2) Außenwand (m²)","type":"number","required":true,"min":0,"max":500000,"hint":"z. B. 160"},{"key":"aussenflaeche_bodenplatte","label":"3) Bodenplatte / Kellerdecke (m²)","type":"number","required":true,"min":0,"max":500000,"hint":"z. B. 40"},{"key":"aussenwandflaechen","label":"Außenwandflächen (m²)","type":"number","required":true,"min":1,"max":500000,"hint":"z. B. 320","calcSumOf":["aussenflaeche_dach","aussenflaeche_aussenwand","aussenflaeche_bodenplatte"],"readonly":true}]},{"title":"","fields":[{"key":"gebaeudelaenge","label":"Gebäudelänge (m) – Außenmaß","type":"number","required":false,"min":1,"max":500,"hint":"optional, z. B. 10"},{"key":"gebaeudebreite","label":"Gebäudebreite (m) – Außenmaß","type":"number","required":false,"min":1,"max":500,"hint":"optional, z. B. 8"}]}],"group":"Gebäude"},{"id":"wg_heizung","title":"Heizungsanlage","meta":"A4","singleColumn":true,"when":{"eq":["gebaeudetyp","WG"]},"intro":{"title":"Heizung","text":"Angaben zur Heizungsanlage."},"blocks":[{"title":"Wärmeerzeuger","fields":[{"key":"heizung_waermeerzeuger","label":"Energieträger","type":"select","required":true,"optionsRef":"heizung_waermeerzeuger","tipKey":"heizung_waermeerzeuger"},{"key":"heizung_heizsystem","label":"Heizsystem","type":"radio","required":true,"optionsRef":"heizung_heizsystem"},{"key":"heizung_baujahr","label":"Baujahr der Heizungsanlage","type":"number","required":false,"min":1800,"max":2100,"hint":"z. B. 2010"},{"key":"heizung_nennleistung","label":"Nennleistung der Heizungsanlage (kW)","type":"number","required":false,"min":1,"max":9999,"hint":"optional / falls bekannt, z. B. 20"}]},{"title":"","fields":[{"key":"heizung_waermeabgabe","label":"Art der Wärmeübergabe","type":"select","when":{"neq":["ausweisart","Verbrauchsausweis"]},"required":{"neq":["ausweisart","Verbrauchsausweis"]},"optionsRef":"heizung_waermeabgabe"},{"key":"heizung_waermeverteilung","label":"Art der Wärmeverteilung","type":"select","when":{"neq":["ausweisart","Verbrauchsausweis"]},"required":{"neq":["ausweisart","Verbrauchsausweis"]},"optionsRef":"heizung_waermeverteilung"}]},{"title":"Verbrauchsdaten (für Verbrauchsausweis)","fields":[{"type":"checklist","full":true,"when":{"eq":["ausweisart","Verbrauchsausweis"]},"title":"Hauptenergieträger","text":"Nutzen Sie die Einheit direkt aus der Abrechnung (z. B. kWh, m3, l)."},{"key":"etr_traeger_gewechselt","label":"Wurde der Energieträger in den letzten 3 Jahren gewechselt?","type":"radio","full":true,"when":{"eq":["ausweisart","Verbrauchsausweis"]},"required":{"eq":["ausweisart","Verbrauchsausweis"]},"optionsRef":"ja_nein_radio"},{"key":"etr_traeger_von","label":"Früherer Energieträger","type":"text","full":true,"when":{"and":[{"eq":["ausweisart","Verbrauchsausweis"]},{"eq":["etr_traeger_gewechselt","Ja"]}]},"hint":"z. B. Heizöl"},{"key":"etr_traeger_zu","label":"Neuer Energieträger","type":"text","full":true,"when":{"and":[{"eq":["ausweisart","Verbrauchsausweis"]},{"eq":["etr_traeger_gewechselt","Ja"]}]},"hint":"z. B. Wärmepumpe"},{"key":"etr_abrechnungsart","label":"Abrechnungsart","type":"radio","full":true,"when":{"eq":["ausweisart","Verbrauchsausweis"]},"required":{"eq":["ausweisart","Verbrauchsausweis"]},"optionsRef":"etr_abrechnungsart"},{"key":"etr_verbrauch_betrifft","label":"Verbrauch betrifft","type":"radio","full":true,"when":{"eq":["ausweisart","Verbrauchsausweis"]},"required":{"eq":["ausweisart","Verbrauchsausweis"]},"optionsRef":"etr_verbrauch_betrifft_wg"},{"key":"etr1_periods","label":"Energieverbrauch der letzten 3 Jahre","type":"periods3","full":true,"infoTextTop":"Der Heizenergieverbrauch muss mindestens 36 Monate zusammenhängend umfassen (die jüngste Abrechnung max. 18 Monate alt).","when":{"eq":["ausweisart","Verbrauchsausweis"]},"required":{"eq":["ausweisart","Verbrauchsausweis"]},"startKey":"etr1_start","unitKey":"etr1_einheit","defaultUnit":"kWh","startMonthsBack":36,"unitOptions":[{"value":"kWh","label":"kWh"},{"value":"m3","label":"m3"},{"value":"l","label":"l"}],"tipKey":"etr_perioden","fields":[]}]},{"title":"Kühlung","fields":[{"key":"klimatisiert","label":"Gibt es eine Kühlung im Gebäude?","type":"radio","when":{"neq":["ausweisart","Verbrauchsausweis"]},"required":{"neq":["ausweisart","Verbrauchsausweis"]},"optionsRef":"ja_nein_radio"},{"key":"fernKuehlung","label":"Erfolgt Kuehlung ueber Fernkaelte?","type":"radio","indent":true,"required":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]}]},"when":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]}]},"optionsRef":"ja_nein_radio"},{"key":"passiveKuehlung","label":"Gibt es passive Kuehlung?","type":"radio","indent":true,"required":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]}]},"when":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]}]},"optionsRef":"ja_nein_radio"},{"key":"waermeKuehlung","label":"Gibt es thermische Kuehlung?","type":"radio","indent":true,"required":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]}]},"when":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]}]},"optionsRef":"ja_nein_radio"},{"key":"stromKuehlung","label":"Gibt es elektrische Kompressionskuehlung?","type":"radio","indent":true,"required":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]}]},"when":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]}]},"optionsRef":"ja_nein_radio"},{"key":"kuehlWfl","label":"Gekuehlte Flaeche (m2)","type":"number","indent":true,"required":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]}]},"when":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]}]},"min":1,"max":500000,"hint":"z. B. 120"}]}],"group":"Technik"},{"id":"wg_warmwasser","title":"Warmwasser \u0026 Lüftung","meta":"A5","when":{"eq":["gebaeudetyp","WG"]},"titleByCond":[{"when":{"eq":["ausweisart","Verbrauchsausweis"]},"value":"Warmwasserbereitung"}],"intro":{"title":"Warmwasser \u0026 Lüftung","text":"Angaben zur Warmwasserbereitung und zum Lüftungssystem."},"introByCond":[{"when":{"eq":["ausweisart","Verbrauchsausweis"]},"value":{"title":"Warmwasserbereitung","text":"Angaben zur Warmwasserbereitung."}}],"blocks":[{"title":"Warmwasserbereitung","fields":[{"key":"warmwasser_type","label":"Wie wird das Warmwasser erzeugt?","type":"select","full":true,"required":true,"optionsRef":"warmwasser","tipKey":"warmwasser_type"},{"key":"warmwasser_im_verbrauch","label":"Warmwasser im Energieverbrauch enthalten?","type":"radio","full":true,"required":{"eq":["ausweisart","Verbrauchsausweis"]},"when":{"eq":["ausweisart","Verbrauchsausweis"]},"optionsRef":"ja_nein_radio"},{"key":"warmwasser_integriert","label":"Ist die Warmwasserbereitung über die Heizungsanlage integriert?","type":"radio","full":true,"required":{"eq":["ausweisart","Bedarfsausweis"]},"when":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"warmwasser_integriert"},{"key":"bewohner_anzahl","label":"Wie viele Personen leben im Gebäude?","type":"number","full":true,"required":false,"min":1,"max":999,"hint":"z. B. 3"}]},{"title":"Lüftung","fields":[{"key":"lueftung_type","label":"Welches Lüftungssystem ist im Gebäude vorhanden?","type":"select","full":true,"required":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"tipGrid":[{"img":"../assets/images/lueftung/fensterlueftung.png","label":"Fensterlüftung"},{"img":"../assets/images/lueftung/mechanische-abluft.png","label":"Mechanische Abluftanlage"},{"img":"../assets/images/lueftung/zentrale-lueftungsanlage.png","label":"Zentrale Lüftungsanlage"},{"img":"../assets/images/lueftung/dezentrale-lueftungsanlage.png","label":"Dezentrale Lüftungsgeräte"}],"options":[{"value":"Fensterlüftung","label":"Fensterlüftung"},{"value":"Mechanische Abluftanlage","label":"Mechanische Abluftanlage"},{"value":"Zentrale Lüftungsanlage","label":"Zentrale Lüftungsanlage"},{"value":"Dezentrale Lüftungsgeräte","label":"Dezentrale Lüftungsgeräte"},{"value":"Nicht bekannt","label":"Nicht bekannt"}]},{"key":"lueftung_waermerueckgewinnung","label":"Wärmerückgewinnung vorhanden?","type":"radio","required":false,"when":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"ja_nein_unbekannt"},{"key":"lueftung_baujahr","label":"Baujahr der Lüftungsanlage","type":"number","required":false,"when":{"eq":["ausweisart","Bedarfsausweis"]},"min":1900,"max":2100,"hint":"optional, z. B. 2018"}]}],"group":"Technik"},{"id":"wg_bedarf_zusatz","title":"Gebäudezustand","meta":"A5b","when":{"and":[{"eq":["gebaeudetyp","WG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"intro":{"title":"Zusatzangaben zum Gebäudezustand","text":"Diese Angaben helfen bei der genauen Bewertung des energetischen Zustands."},"blocks":[{"title":"","fields":[{"key":"bedarf_z_modernisierung","label":"Wurden in den letzten Jahren energetische Modernisierungen durchgeführt?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"bedarf_z_modern_jahr","label":"Jahr der Maßnahme","type":"number","indent":true,"required":{"eq":["bedarf_z_modernisierung","Ja"]},"when":{"eq":["bedarf_z_modernisierung","Ja"]},"min":2000,"max":2100,"hint":"z. B. 2020"},{"key":"bedarf_z_modern_art","label":"Art der Maßnahme","type":"text","indent":true,"required":{"eq":["bedarf_z_modernisierung","Ja"]},"when":{"eq":["bedarf_z_modernisierung","Ja"]},"hint":"z. B. Fenstertausch / Fassadendämmung / Dachdämmung","full":true}]},{"title":"","fields":[{"key":"bedarf_z_heizung_erneuert","label":"Wurde die Heizungsanlage erneuert oder wesentlich verändert?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"bedarf_z_heizung_jahr","label":"Jahr der Änderung","type":"number","indent":true,"required":{"eq":["bedarf_z_heizung_erneuert","Ja"]},"when":{"eq":["bedarf_z_heizung_erneuert","Ja"]},"min":2000,"max":2100,"hint":"z. B. 2022"},{"key":"bedarf_z_heizung_art","label":"Art der Anlage","type":"text","indent":true,"required":{"eq":["bedarf_z_heizung_erneuert","Ja"]},"when":{"eq":["bedarf_z_heizung_erneuert","Ja"]},"hint":"z. B. Wärmepumpe, Gasbrennwert","full":true}]},{"title":"","fields":[{"key":"bedarf_z_alle_raeume_beheizt","label":"Werden alle Räume innerhalb der Gebäudehülle beheizt?","labelHtml":"Werden \u003cstrong\u003ealle Räume\u003c/strong\u003e innerhalb der Gebäudehülle beheizt?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"bedarf_z_unbeheizt_bereich","label":"Welche Bereiche werden nicht beheizt?","type":"text","indent":true,"required":{"eq":["bedarf_z_alle_raeume_beheizt","Nein"]},"when":{"eq":["bedarf_z_alle_raeume_beheizt","Nein"]},"full":true},{"key":"bedarf_z_unbeheizt_flaeche","label":"Ungefähre Fläche (m²)","type":"number","indent":true,"required":{"eq":["bedarf_z_alle_raeume_beheizt","Nein"]},"when":{"eq":["bedarf_z_alle_raeume_beheizt","Nein"]},"min":1,"max":20000,"hint":"z. B. 30"}]},{"title":"","fields":[{"key":"bedarf_z_bau_veraendert","label":"Gab es größere bauliche Veränderungen am Gebäude?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"bedarf_z_bau_art","label":"Art der Veränderung","type":"text","indent":true,"required":{"eq":["bedarf_z_bau_veraendert","Ja"]},"when":{"eq":["bedarf_z_bau_veraendert","Ja"]},"hint":"z. B. Anbau / Dachausbau / Umbau","full":true},{"key":"bedarf_z_bau_jahr","label":"Jahr der Änderung","type":"number","indent":true,"required":{"eq":["bedarf_z_bau_veraendert","Ja"]},"when":{"eq":["bedarf_z_bau_veraendert","Ja"]},"min":2000,"max":2100,"hint":"z. B. 2019"}]},{"title":"","fields":[{"key":"bedarf_z_bauteil_gedaemmt","label":"Wurden Außenbauteile nachträglich gedämmt?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"bedarf_z_daemmung_fassade","label":"Fassadendämmung","type":"checkbox","indent":true,"required":false,"when":{"eq":["bedarf_z_bauteil_gedaemmt","Ja"]},"full":true},{"key":"bedarf_z_daemmung_dach","label":"Dachdämmung","type":"checkbox","indent":true,"required":false,"when":{"eq":["bedarf_z_bauteil_gedaemmt","Ja"]},"full":true},{"key":"bedarf_z_daemmung_keller","label":"Kellerdeckendämmung","type":"checkbox","indent":true,"required":false,"when":{"eq":["bedarf_z_bauteil_gedaemmt","Ja"]},"full":true},{"key":"bedarf_z_daemmung_jahr","label":"Jahr der Maßnahme","type":"number","indent":true,"required":{"eq":["bedarf_z_bauteil_gedaemmt","Ja"]},"when":{"eq":["bedarf_z_bauteil_gedaemmt","Ja"]},"min":2000,"max":2100,"hint":"z. B. 2021"}]}],"group":"Zusatz"},{"id":"wg_bedarf_verbrauch","title":"Energieverbrauch","meta":"A5c","when":{"and":[{"eq":["gebaeudetyp","WG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"intro":{"title":"Energieverbrauch","text":"Falls vorhanden, können Sie freiwillig Energieverbrauchsdaten angeben. Diese dienen ausschließlich der Plausibilitätsprüfung und sind nicht Grundlage des Bedarfsausweises."},"fields":[{"key":"etr_traeger_gewechselt","label":"Wurde der Energieträger in den letzten 3 Jahren gewechselt?","type":"radio","full":true,"required":false,"optionsRef":"ja_nein_radio"},{"key":"etr_traeger_von","label":"Früherer Energieträger","type":"text","full":true,"when":{"eq":["etr_traeger_gewechselt","Ja"]},"required":false,"hint":"z. B. Heizöl"},{"key":"etr_traeger_zu","label":"Neuer Energieträger","type":"text","full":true,"when":{"eq":["etr_traeger_gewechselt","Ja"]},"required":false,"hint":"z. B. Wärmepumpe"},{"key":"etr_abrechnungsart","label":"Abrechnungsart","type":"radio","full":true,"required":false,"optionsRef":"etr_abrechnungsart"},{"key":"etr_verbrauch_betrifft_wg","label":"Verbrauch betrifft","type":"radio","full":true,"required":false,"optionsRef":"etr_verbrauch_betrifft_wg"},{"key":"etr1_kategorie","label":"Energieträger","type":"select","full":true,"required":false,"optionsRef":"etr_kategorie_bk","tipKey":"etr_kategorie"},{"key":"etr1_periods","label":"Abrechnungszeiträume","type":"periods3","full":true,"required":false,"startKey":"etr1_start","unitKey":"etr1_einheit","defaultUnit":"kWh","startMonthsBack":36,"unitOptions":[{"value":"kWh","label":"kWh"},{"value":"m3","label":"m3"},{"value":"l","label":"l"}],"tipKey":"etr_perioden","fields":[]}],"group":"Zusatz"},{"id":"wg_zusatzfragen","title":"Zusatzfragen","meta":"A6","when":{"and":[{"eq":["gebaeudetyp","WG"]},{"eq":["ausweisart","Verbrauchsausweis"]}]},"intro":{"title":"Zusatzfragen","text":"Diese Angaben dienen der Plausibilitätsprüfung des Energieverbrauchs."},"blocks":[{"title":"","fields":[{"key":"zf_leerstand","label":"Gab es Leerstand in den letzten 3 Jahren?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"zf_leerstand_zeitraum","label":"Zeitraum des Leerstands","type":"text","indent":true,"required":{"eq":["zf_leerstand","Ja"]},"when":{"eq":["zf_leerstand","Ja"]},"hint":"z. B. Jan 2022 – Jun 2022","full":true},{"key":"zf_leerstand_flaeche","label":"Betroffene Fläche (m² oder Anteil)","type":"text","indent":true,"required":{"eq":["zf_leerstand","Ja"]},"when":{"eq":["zf_leerstand","Ja"]},"hint":"z. B. 80 m² oder ca. 30%","full":true},{"key":"zf_leerstand_nutzungsart","label":"Art der Nutzung","type":"text","indent":true,"required":false,"when":{"eq":["zf_leerstand","Ja"]},"hint":"z. B. Büro, Wohnung, Ladenfläche","full":true}]},{"title":"","fields":[{"key":"zf_ueberwiegend_beheizt","label":"Wurde das Gebäude während des gesamten Abrechnungszeitraums überwiegend beheizt?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"zf_nicht_beheizt_bereich","label":"Welche Bereiche wurden nicht beheizt?","type":"text","indent":true,"required":{"eq":["zf_ueberwiegend_beheizt","Nein"]},"when":{"eq":["zf_ueberwiegend_beheizt","Nein"]},"full":true},{"key":"zf_nicht_beheizt_flaeche","label":"Ungefähre Fläche der unbeheizten Bereiche (m² oder Anteil)","type":"text","indent":true,"required":{"eq":["zf_ueberwiegend_beheizt","Nein"]},"when":{"eq":["zf_ueberwiegend_beheizt","Nein"]},"hint":"z. B. 40 m² oder ca. 15%","full":true}]},{"title":"","fields":[{"key":"zf_alle_raeume_beheizt","label":"Wurden alle Räume dauerhaft beheizt?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"zf_nicht_dauernd_zeitraum","label":"Zeitraum","type":"text","indent":true,"required":{"eq":["zf_alle_raeume_beheizt","Nein"]},"when":{"eq":["zf_alle_raeume_beheizt","Nein"]},"hint":"z. B. Okt 2021 – Mär 2022","full":true},{"key":"zf_nicht_dauernd_flaeche","label":"Betroffene Fläche (m² oder Anteil)","type":"text","indent":true,"required":{"eq":["zf_alle_raeume_beheizt","Nein"]},"when":{"eq":["zf_alle_raeume_beheizt","Nein"]},"hint":"z. B. 30 m² oder ca. 20%","full":true}]},{"title":"","fields":[{"key":"zf_nutzung_geaendert","label":"Hat sich die Nutzung des Gebäudes in den letzten drei Jahren wesentlich verändert?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"zf_nutzung_frueher","label":"Frühere Nutzung","type":"text","indent":true,"required":{"eq":["zf_nutzung_geaendert","Ja"]},"when":{"eq":["zf_nutzung_geaendert","Ja"]},"full":true},{"key":"zf_nutzung_heute","label":"Heutige Nutzung","type":"text","indent":true,"required":{"eq":["zf_nutzung_geaendert","Ja"]},"when":{"eq":["zf_nutzung_geaendert","Ja"]},"full":true},{"key":"zf_nutzung_zeitpunkt","label":"Zeitpunkt der Änderung","type":"text","indent":true,"required":false,"when":{"eq":["zf_nutzung_geaendert","Ja"]},"hint":"z. B. 2022","full":true}]},{"title":"","fields":[{"key":"zf_heizung_erneuert","label":"Wurde die Heizungsanlage innerhalb der letzten drei Jahre erneuert oder wesentlich verändert?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"zf_heizung_erneuerung_jahr","label":"Jahr der Änderung","type":"number","indent":true,"required":{"eq":["zf_heizung_erneuert","Ja"]},"when":{"eq":["zf_heizung_erneuert","Ja"]},"min":2000,"max":2100,"hint":"z. B. 2022"},{"key":"zf_heizung_erneuerung_art","label":"Art der Anlage","type":"text","indent":true,"required":{"eq":["zf_heizung_erneuert","Ja"]},"when":{"eq":["zf_heizung_erneuert","Ja"]},"hint":"z. B. Wärmepumpe, Gasbrennwert","full":true}]},{"title":"","fields":[{"key":"zf_sanierung","label":"Wurden größere energetische Sanierungen durchgeführt?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"zf_sanierung_jahr","label":"Jahr der Maßnahme","type":"number","indent":true,"required":{"eq":["zf_sanierung","Ja"]},"when":{"eq":["zf_sanierung","Ja"]},"min":2000,"max":2100,"hint":"z. B. 2021"},{"key":"zf_sanierung_massnahme","label":"Welche Maßnahme?","type":"text","indent":true,"required":{"eq":["zf_sanierung","Ja"]},"when":{"eq":["zf_sanierung","Ja"]},"hint":"z. B. Fassadendämmung, Fenstertausch","full":true}]}],"group":"Zusatz"},{"id":"nwg_nutzung_geometrie","title":"Gebäudedaten","meta":"B1","when":{"eq":["gebaeudetyp","NWG"]},"afterChangeRef":"smart_nwg","intro":{"title":"Nichtwohngebäude","text":"Nutzung und Flächenangaben."},"fields":[{"key":"nwg_nutzung","label":"Art der Gebäudenutzung","type":"select","required":true,"optionsRef":"nwg_nutzung"},{"key":"baualtersklasse","label":"Baualtersklasse","type":"radio","required":true,"optionsRef":"baualtersklasse"},{"key":"baujahr","label":"Baujahr Gebäude","type":"number","required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1800,"max":2100,"hint":"z. B. 1998"},{"key":"nwg_nettogrundflaeche","label":"Nettogrundfläche – NGF (m²)","type":"number","required":true,"min":1,"max":500000,"hint":"z. B. 350","infoText":"Die Nettogrundfläche (NGF) umfasst die nutzbaren Flächen des Gebäudes innerhalb der Außenwände nach DIN 277. Für den Energieverbrauchsausweis werden in der Regel nur beheizte oder gekühlte Gebäudebereiche berücksichtigt."},{"key":"nwg_flaeche_basis","label":"Angabe basiert auf","type":"radio","required":true,"optionsRef":"nwg_flaeche_basis"},{"key":"nwg_anzahl_nutzungseinheiten","label":"Anzahl Nutzungseinheiten","type":"number","required":{"eq":["ausweisart","Bedarfsausweis"]},"when":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":50000,"hint":"z. B. 3"},{"key":"anzahl_vollgeschosse","label":"Anzahl der Vollgeschosse","type":"number","required":{"eq":["ausweisart","Bedarfsausweis"]},"when":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":20,"hint":"z. B. 2"},{"key":"geschosshoehen","label":"Geschosshöhen (m)","type":"number","required":false,"when":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":20,"hint":"optional, z. B. 3.00"},{"key":"gebaeudevolumen","label":"Beheiztes Volumen (m³)","type":"number","required":false,"when":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":5000000,"hint":"optional"},{"key":"aussenwandflaechen","label":"Außenwandflächen (m²)","type":"number","required":{"eq":["ausweisart","Bedarfsausweis"]},"when":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":500000,"hint":"z. B. 450"},{"key":"fensteranteile","label":"Fensteranteile (m²)","type":"number","required":{"eq":["ausweisart","Bedarfsausweis"]},"when":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":500000,"hint":"z. B. 80"},{"key":"nwg_nutzungstage_woche","label":"Nutzungstage pro Woche","type":"number","required":{"eq":["ausweisart","Verbrauchsausweis"]},"when":{"eq":["ausweisart","Verbrauchsausweis"]},"min":1,"max":7,"hint":"z. B. 5"},{"key":"nwg_nutzungszeit_von","label":"Nutzungszeit von (Uhr)","type":"text","required":{"eq":["ausweisart","Verbrauchsausweis"]},"when":{"eq":["ausweisart","Verbrauchsausweis"]},"hint":"z. B. 07:00"},{"key":"nwg_nutzungszeit_bis","label":"Nutzungszeit bis (Uhr)","type":"text","required":{"eq":["ausweisart","Verbrauchsausweis"]},"when":{"eq":["ausweisart","Verbrauchsausweis"]},"hint":"z. B. 18:00"},{"key":"nwg_nutzungsdauer_woche","label":"Geschätzte Nutzungsdauer pro Woche (Stunden)","type":"number","required":false,"when":{"eq":["ausweisart","Verbrauchsausweis"]},"min":1,"max":168,"hint":"optional, z. B. 45"}],"group":"Gebäude"},{"id":"nwg_huelle","title":"NWG: Gebäudehülle","meta":"B2","when":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"intro":{"title":"Gebäudehülle","text":"Vereinfachte Angaben für NWG."},"fields":[{"key":"nwg_aussenwand_simple","label":"Außenwand","type":"select","required":true,"optionsRef":"nwg_aussenwand_simple"},{"key":"nwg_fensteranteil","label":"Fensteranteil","type":"select","required":true,"tipKey":"nwg_fensteranteil","optionsRef":"nwg_fensteranteil"}],"group":"Gebäude"},{"id":"nwg_technik","title":"Gebäudetechnik","meta":"B3","when":{"eq":["gebaeudetyp","NWG"]},"intro":{"title":"Gebäudetechnik","text":"Angaben zu Lüftung und Kühlung."},"blocks":[{"title":"","fields":[{"key":"nwg_lueftung_verbrauch","label":"Lüftung","type":"radio","required":true,"when":{"eq":["ausweisart","Verbrauchsausweis"]},"optionsRef":"nwg_lueftung_verbrauch"},{"key":"nwg_lueftung","label":"Lüftung","type":"select","required":{"eq":["ausweisart","Bedarfsausweis"]},"when":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"nwg_lueftung"}]},{"title":"Kühlung","fields":[{"key":"nwg_kuehlung_klimaanlage","label":"Klimaanlage vorhanden","type":"radio","required":{"eq":["ausweisart","Verbrauchsausweis"]},"when":{"eq":["ausweisart","Verbrauchsausweis"]},"optionsRef":"ja_nein_unbekannt","full":true},{"key":"nwg_kuehlung_klimaanlage_umfang","label":"Umfang der Klimaanlage","type":"radio","required":{"eq":["nwg_kuehlung_klimaanlage","Ja"]},"when":{"and":[{"eq":["ausweisart","Verbrauchsausweis"]},{"eq":["nwg_kuehlung_klimaanlage","Ja"]}]},"options":[{"value":"Gesamtgebäude","label":"Gesamtes Gebäude klimatisiert"},{"value":"Teilflächen","label":"Nur Teilflächen klimatisiert"}],"indent":true,"full":true},{"key":"nwg_kuehlung_klimaanlage_flaeche_m2","label":"Fläche ca. (m²)","type":"number","required":{"eq":["nwg_kuehlung_klimaanlage_umfang","Teilflächen"]},"when":{"and":[{"eq":["ausweisart","Verbrauchsausweis"]},{"eq":["nwg_kuehlung_klimaanlage_umfang","Teilflächen"]}]},"indent":true,"min":1,"max":500000,"hint":"z. B. 200"},{"key":"nwg_kuehlung_kaelteanlage","label":"Zentrale Kälteanlage","type":"radio","required":{"eq":["ausweisart","Verbrauchsausweis"]},"when":{"eq":["ausweisart","Verbrauchsausweis"]},"optionsRef":"ja_nein_unbekannt","full":true},{"key":"nwg_kuehlung_kaelteanlage_umfang","label":"Umfang der zentralen Kälteanlage","type":"radio","required":{"eq":["nwg_kuehlung_kaelteanlage","Ja"]},"when":{"and":[{"eq":["ausweisart","Verbrauchsausweis"]},{"eq":["nwg_kuehlung_kaelteanlage","Ja"]}]},"options":[{"value":"Gesamtgebäude","label":"Gesamtes Gebäude"},{"value":"Teilflächen","label":"Nur Teilflächen"}],"indent":true,"full":true},{"key":"nwg_kuehlung_kaelteanlage_flaeche_m2","label":"Fläche ca. (m²)","type":"number","required":{"eq":["nwg_kuehlung_kaelteanlage_umfang","Teilflächen"]},"when":{"and":[{"eq":["ausweisart","Verbrauchsausweis"]},{"eq":["nwg_kuehlung_kaelteanlage_umfang","Teilflächen"]}]},"indent":true,"min":1,"max":500000,"hint":"z. B. 200"},{"key":"fernKuehlung","label":"Erfolgt Kühlung über Fernkälte?","type":"radio","required":{"eq":["klimatisiert","Ja"]},"when":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"optionsRef":"ja_nein_radio"},{"key":"passiveKuehlung","label":"Gibt es passive Kühlung?","type":"radio","required":{"eq":["klimatisiert","Ja"]},"when":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"optionsRef":"ja_nein_radio"},{"key":"waermeKuehlung","label":"Gibt es thermische Kühlung?","type":"radio","required":{"eq":["klimatisiert","Ja"]},"when":{"and":[{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["klimatisiert","Ja"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"optionsRef":"ja_nein_radio"},{"key":"stromKuehlung","label":"Gibt es elektrische Kompressionskühlung?","type":"radio","required":{"eq":["klimatisiert","Ja"]},"when":{"and":[{"eq":["klimatisiert","Ja"]},{"neq":["ausweisart","Verbrauchsausweis"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"optionsRef":"ja_nein_radio"}]},{"title":"","fields":[{"key":"nwg_beleuchtung","label":"Beleuchtung","type":"select","required":{"eq":["ausweisart","Bedarfsausweis"]},"when":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"nwg_beleuchtung"}]}],"group":"Technik"},{"id":"nwg_heizung_warmwasser","title":"Heizungsanlage \u0026 Warmwasserbereitung","meta":"B4","when":{"eq":["gebaeudetyp","NWG"]},"intro":{"title":"Heizung \u0026 Warmwasser","text":"Angaben zur Heizungsanlage und Warmwasserbereitung."},"blocks":[{"title":"Heizungsanlage","fields":[{"key":"heizung_waermeerzeuger","label":"Energieträger","type":"select","required":true,"optionsRef":"heizung_waermeerzeuger","tipKey":"heizung_waermeerzeuger"},{"key":"nwg_heizsystem","label":"Heizsystem","type":"radio","required":{"eq":["ausweisart","Verbrauchsausweis"]},"when":{"eq":["ausweisart","Verbrauchsausweis"]},"optionsRef":"nwg_heizsystem"},{"key":"heizung_baujahr","label":"Baujahr der Heizungsanlage","type":"number","required":false,"min":1800,"max":2100,"hint":"z. B. 2010"},{"key":"heizung_nennleistung","label":"Nennleistung (kW)","type":"number","required":false,"min":1,"max":9999,"hint":"z. B. 50"},{"key":"heizung_kesseltyp","label":"Kesseltyp","type":"select","when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"tipGrid":[{"img":"../assets/images/heizung/konstanttemperaturkessel.png","label":"Konstanttemperatur"},{"img":"../assets/images/heizung/niedertemperaturkessel.png","label":"Niedertemperatur"},{"img":"../assets/images/heizung/brennwertkessel.png","label":"Brennwert"},{"img":"../assets/images/heizung/waermepumpe.png","label":"Wärmepumpe"}],"options":[{"value":"Konstanttemperatur","label":"Konstanttemperatur"},{"value":"Niedertemperatur","label":"Niedertemperatur"},{"value":"Brennwert","label":"Brennwert"},{"value":"Wärmepumpe","label":"Wärmepumpe"}]},{"key":"heizung_waermeabgabe","label":"Wärmeabgabe","type":"select","when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"heizung_waermeabgabe"},{"key":"pv_dach","label":"Photovoltaik (PV) auf dem Dach","type":"checkbox","required":false,"when":{"eq":["ausweisart","Bedarfsausweis"]},"infoText":"Anlage auf dem Dach, die Sonnenlicht in Strom umwandelt.","full":true},{"key":"hz_solar","label":"Solarthermie für Heizung vorhanden","type":"radio","required":false,"when":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"ja_nein_radio","tipKey":"heizung_hz_solar"},{"key":"heizungsrohre_gedaemmt","label":"Heizungsrohre gedämmt","type":"radio","required":false,"when":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"ja_nein_radio","tipKey":"heizung_rohre_gedaemmt"}]},{"title":"","fields":[{"key":"warmwasser_type","label":"Warmwasserbereitung","type":"select","required":true,"optionsRef":"warmwasser","tipKey":"warmwasser_type"},{"key":"warmwasser_im_verbrauch","label":"Ist das Warmwasser im Energieverbrauch enthalten?","type":"radio","required":{"eq":["ausweisart","Verbrauchsausweis"]},"when":{"eq":["ausweisart","Verbrauchsausweis"]},"optionsRef":"ja_nein_radio"},{"key":"warmwasser_sep_verbrauch","label":"Separater Verbrauch (falls bekannt)","type":"number","required":false,"when":{"and":[{"eq":["ausweisart","Verbrauchsausweis"]},{"eq":["warmwasser_im_verbrauch","Nein"]}]},"hint":"kWh/Jahr","min":0,"max":9999999},{"key":"warmwasserrohre_gedaemmt","label":"Warmwasserrohre gedämmt","type":"radio","required":false,"when":{"eq":["ausweisart","Bedarfsausweis"]},"optionsRef":"ja_nein_radio","tipKey":"warmwasser_rohre_gedaemmt"}]}],"group":"Technik"},{"id":"nwg_nutzungszeiten","title":"Nutzungszeiten","meta":"B2","when":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"intro":{"title":"Nutzungszeiten","text":"Angaben zur Betriebszeit des Gebäudes."},"fields":[{"key":"nwg_nutzungstage_woche","label":"Nutzungstage pro Woche","type":"number","required":true,"min":1,"max":7,"hint":"z. B. 5"},{"key":"nwg_nutzungszeit_von","label":"Nutzungszeit von (Uhr)","type":"text","required":true,"hint":"z. B. 07:00"},{"key":"nwg_nutzungszeit_bis","label":"Nutzungszeit bis (Uhr)","type":"text","required":true,"hint":"z. B. 18:00"},{"key":"nwg_nutzungsdauer_woche","label":"Geschätzte Nutzungsdauer pro Woche (Stunden)","type":"number","required":false,"min":1,"max":168,"hint":"optional, z. B. 45"}],"group":"Technik"},{"id":"nwg_stromverbrauch","title":"Strom- \u0026 Energieverbrauch","meta":"B5","when":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Verbrauchsausweis"]}]},"intro":{"title":"Energieverbrauch","text":"Strom- und Wärmeverbrauch der letzten 3 Jahre. Der Verbrauch muss mindestens 36 Monate zusammenhängend umfassen (die jüngste Abrechnung max. 18 Monate alt)."},"blocks":[{"title":"Stromverbrauch","fields":[{"key":"nwg_strom_betrifft","label":"Stromverbrauch betrifft","type":"radio","required":true,"optionsRef":"nwg_strom_betrifft","full":true},{"key":"nwg_strom_sep_kwh","label":"Separater Stromverbrauch dieser Anlagen (kWh/Jahr)","type":"number","required":false,"min":0,"max":99999999,"hint":"optional, falls bekannt"},{"key":"nwg_strom_periods","label":"Stromverbrauch (letzte 3 Jahre)","type":"periods3","full":true,"required":true,"startKey":"nwg_strom_start","unitKey":"nwg_strom_einheit","defaultUnit":"kWh","startMonthsBack":36,"unitOptions":[{"value":"kWh","label":"kWh"}],"tipKey":"etr_perioden","fields":[]}]},{"title":"Stromverbrauch enthält:","fields":[{"key":"nwg_strom_enthaelt_beleuchtung","label":"Beleuchtung","type":"radio","required":true,"optionsRef":"ja_nein_unbekannt"},{"key":"nwg_strom_enthaelt_lueftung","label":"Lüftung","type":"radio","required":true,"optionsRef":"ja_nein_unbekannt"},{"key":"nwg_strom_enthaelt_kuehlung","label":"Kühlung","type":"radio","required":true,"optionsRef":"ja_nein_unbekannt"},{"key":"nwg_strom_enthaelt_sonstiges","label":"Sonstige Gebäudetechnik","type":"radio","required":true,"optionsRef":"ja_nein_unbekannt"}]},{"title":"Wärmeverbrauch","fields":[{"key":"etr_traeger_gewechselt","label":"Wurde der Energieträger in den letzten 3 Jahren gewechselt?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"etr_traeger_von","label":"Früherer Energieträger","type":"text","required":false,"when":{"eq":["etr_traeger_gewechselt","Ja"]},"hint":"z. B. Heizöl","full":true},{"key":"etr_traeger_zu","label":"Neuer Energieträger","type":"text","required":false,"when":{"eq":["etr_traeger_gewechselt","Ja"]},"hint":"z. B. Wärmepumpe","full":true},{"key":"etr_abrechnungsart_nwg","label":"Abrechnungsart","type":"radio","required":true,"optionsRef":"etr_abrechnungsart_nwg","full":true},{"key":"etr_verbrauch_betrifft_nwg","label":"Verbrauch betrifft","type":"radio","required":true,"optionsRef":"etr_verbrauch_betrifft_nwg","full":true},{"key":"etr1_kategorie","label":"Energieträger","type":"select","full":true,"required":true,"optionsRef":"etr_kategorie_bk","tipKey":"etr_kategorie"},{"key":"etr1_heizung","label":"Für Heizung genutzt?","type":"radio","full":true,"required":true,"optionsRef":"ja_nein_radio"},{"key":"etr1_tww","label":"Für Warmwasser genutzt?","type":"radio","full":true,"required":true,"optionsRef":"ja_nein_radio"},{"key":"etr1_periods","label":"Wärmeverbrauch (letzte 3 Jahre)","type":"periods3","full":true,"required":true,"startKey":"etr1_start","unitKey":"etr1_einheit","defaultUnit":"kWh","startMonthsBack":36,"unitOptions":[{"value":"kWh","label":"kWh"},{"value":"m3","label":"m3"},{"value":"l","label":"l"}],"tipKey":"etr_perioden","fields":[]},{"key":"etr2_enabled","label":"Zweiten Energieträger erfassen","type":"checkbox","full":true,"tipKey":"etr2_optional"},{"key":"etr2_kategorie","label":"Energieträger 2","type":"select","full":true,"when":{"eq":["etr2_enabled",true]},"required":{"eq":["etr2_enabled",true]},"optionsRef":"etr_kategorie_bk"},{"key":"etr2_heizung","label":"Für Heizung genutzt?","type":"radio","full":true,"when":{"eq":["etr2_enabled",true]},"required":{"eq":["etr2_enabled",true]},"optionsRef":"ja_nein_radio"},{"key":"etr2_tww","label":"Für Warmwasser genutzt?","type":"radio","full":true,"when":{"eq":["etr2_enabled",true]},"required":{"eq":["etr2_enabled",true]},"optionsRef":"ja_nein_radio"},{"key":"etr2_periods","label":"Wärmeverbrauch Energieträger 2 (letzte 3 Jahre)","type":"periods3","full":true,"when":{"eq":["etr2_enabled",true]},"required":{"eq":["etr2_enabled",true]},"startKey":"etr2_start","unitKey":"etr2_einheit","defaultUnit":"kWh","startMonthsBack":36,"unitOptions":[{"value":"kWh","label":"kWh"},{"value":"m3","label":"m3"},{"value":"l","label":"l"}],"tipKey":"etr_perioden","fields":[]}]}],"group":"Technik"},{"id":"nwg_zusatzfragen","title":"Zusatzfragen","meta":"B6","when":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Verbrauchsausweis"]}]},"intro":{"title":"Zusatzfragen","text":"Diese Angaben dienen der Plausibilitätsprüfung des Energieverbrauchs."},"blocks":[{"title":"","fields":[{"key":"nwg_zf_leerstand","label":"Gab es Leerstand in den letzten 3 Jahren?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"nwg_zf_leerstand_zeitraum","label":"Zeitraum des Leerstands","type":"text","indent":true,"required":{"eq":["nwg_zf_leerstand","Ja"]},"when":{"eq":["nwg_zf_leerstand","Ja"]},"hint":"z. B. Jan 2022 – Jun 2022","full":true},{"key":"nwg_zf_leerstand_flaeche","label":"Betroffene Fläche (m² oder Anteil)","type":"text","indent":true,"required":{"eq":["nwg_zf_leerstand","Ja"]},"when":{"eq":["nwg_zf_leerstand","Ja"]},"hint":"z. B. 80 m² oder ca. 30%","full":true},{"key":"nwg_zf_leerstand_nutzungsart","label":"Art der Nutzung","type":"text","indent":true,"required":false,"when":{"eq":["nwg_zf_leerstand","Ja"]},"hint":"z. B. Büro, Ladenfläche","full":true}]},{"title":"","fields":[{"key":"nwg_zf_ueberwiegend_beheizt","label":"Wurde das Gebäude während des gesamten Abrechnungszeitraums überwiegend beheizt?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"nwg_zf_nicht_beheizt_bereich","label":"Welche Bereiche wurden nicht beheizt?","type":"text","indent":true,"required":{"eq":["nwg_zf_ueberwiegend_beheizt","Nein"]},"when":{"eq":["nwg_zf_ueberwiegend_beheizt","Nein"]},"full":true},{"key":"nwg_zf_nicht_beheizt_flaeche","label":"Ungefähre Fläche der unbeheizten Bereiche (m² oder Anteil)","type":"text","indent":true,"required":{"eq":["nwg_zf_ueberwiegend_beheizt","Nein"]},"when":{"eq":["nwg_zf_ueberwiegend_beheizt","Nein"]},"hint":"z. B. 40 m² oder ca. 15%","full":true}]},{"title":"","fields":[{"key":"nwg_zf_alle_raeume_beheizt","label":"Wurden alle Räume dauerhaft beheizt?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"nwg_zf_nicht_dauernd_zeitraum","label":"Zeitraum","type":"text","indent":true,"required":{"eq":["nwg_zf_alle_raeume_beheizt","Nein"]},"when":{"eq":["nwg_zf_alle_raeume_beheizt","Nein"]},"hint":"z. B. Okt 2021 – Mär 2022","full":true},{"key":"nwg_zf_nicht_dauernd_flaeche","label":"Betroffene Fläche (m² oder Anteil)","type":"text","indent":true,"required":{"eq":["nwg_zf_alle_raeume_beheizt","Nein"]},"when":{"eq":["nwg_zf_alle_raeume_beheizt","Nein"]},"hint":"z. B. 30 m² oder ca. 20%","full":true}]},{"title":"","fields":[{"key":"nwg_zf_nutzung_geaendert","label":"Hat sich die Nutzung des Gebäudes in den letzten drei Jahren wesentlich verändert?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"nwg_zf_nutzung_frueher","label":"Frühere Nutzung","type":"text","indent":true,"required":{"eq":["nwg_zf_nutzung_geaendert","Ja"]},"when":{"eq":["nwg_zf_nutzung_geaendert","Ja"]},"full":true},{"key":"nwg_zf_nutzung_heute","label":"Heutige Nutzung","type":"text","indent":true,"required":{"eq":["nwg_zf_nutzung_geaendert","Ja"]},"when":{"eq":["nwg_zf_nutzung_geaendert","Ja"]},"full":true},{"key":"nwg_zf_nutzung_zeitpunkt","label":"Zeitpunkt der Änderung","type":"text","indent":true,"required":false,"when":{"eq":["nwg_zf_nutzung_geaendert","Ja"]},"hint":"z. B. 2022","full":true}]},{"title":"","fields":[{"key":"nwg_zf_heizung_erneuert","label":"Wurde die Heizungsanlage innerhalb der letzten drei Jahre erneuert oder wesentlich verändert?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"nwg_zf_heizung_erneuerung_jahr","label":"Jahr der Änderung","type":"number","indent":true,"required":{"eq":["nwg_zf_heizung_erneuert","Ja"]},"when":{"eq":["nwg_zf_heizung_erneuert","Ja"]},"min":2000,"max":2100,"hint":"z. B. 2022"},{"key":"nwg_zf_heizung_erneuerung_art","label":"Art der Anlage","type":"text","indent":true,"required":{"eq":["nwg_zf_heizung_erneuert","Ja"]},"when":{"eq":["nwg_zf_heizung_erneuert","Ja"]},"hint":"z. B. Wärmepumpe, Gasbrennwert","full":true}]},{"title":"","fields":[{"key":"nwg_zf_sanierung","label":"Wurden größere energetische Sanierungen durchgeführt?","type":"radio","required":true,"optionsRef":"ja_nein_radio","full":true},{"key":"nwg_zf_sanierung_jahr","label":"Jahr der Maßnahme","type":"number","indent":true,"required":{"eq":["nwg_zf_sanierung","Ja"]},"when":{"eq":["nwg_zf_sanierung","Ja"]},"min":2000,"max":2100,"hint":"z. B. 2021"},{"key":"nwg_zf_sanierung_massnahme","label":"Welche Maßnahme?","type":"text","indent":true,"required":{"eq":["nwg_zf_sanierung","Ja"]},"when":{"eq":["nwg_zf_sanierung","Ja"]},"hint":"z. B. Fassadendämmung, Fenstertausch","full":true}]}],"group":"Zusatz"},{"id":"misch_relevanz","title":"Mischgebäude: Komplexe Technik?","meta":"C1","when":{"eq":["__step30_enabled","1"]},"intro":{"title":"Prüfung","text":"Bei Mischgebäuden hängt die energetische Einordnung oft von der Technik ab. Hinweis: Die endgültige Bewertung erfolgt nach GEG.","img":"../assets/images/infografik/relevanz-check-flowchart.png"},"fields":[{"key":"misch_tech_lueftung","label":"Gibt es eine eigene Lüftungsanlage?","type":"radio","required":true,"optionsRef":"ja_nein_radio"},{"key":"misch_tech_kuehlung","label":"Gibt es Kühlung oder Klimaanlagen?","type":"radio","required":true,"optionsRef":"ja_nein_radio"},{"key":"misch_tech_oeffnungszeiten","label":"Hat der Gewerbeteil lange Öffnungszeiten?","type":"radio","required":true,"optionsRef":"ja_nein_radio"},{"key":"misch_tech_glas","label":"Gibt es große Glasflächen oder Küchenabluft?","type":"radio","required":true,"optionsRef":"ja_nein_radio"}],"group":"Gebäude"},{"id":"misch_bloecke","title":"Mischgebäude: Wohn- und Gewerbeteil","meta":"C2","when":{"eq":["gebaeudetyp","MISCH"]},"intro":{"title":"Teile","text":"Bitte füllen Sie Wohnanteil und Gewerbeanteil aus."},"blocks":[{"title":"Wohnanteil","fields":[{"key":"misch_wohnflaeche","label":"Wohnfläche (m²)","type":"number","required":true,"min":1,"max":200000},{"key":"misch_heizung_waermeerzeuger","label":"Heizsystem (Wärmeerzeuger)","type":"select","required":true,"optionsRef":"heizung_waermeerzeuger","tipKey":"heizung_waermeerzeuger"},{"key":"misch_heizung_kesseltyp","label":"Kesseltyp","type":"select","required":true,"full":true,"tipGrid":[{"img":"../assets/images/heizung/konstanttemperaturkessel.png","label":"Konstanttemperatur"},{"img":"../assets/images/heizung/niedertemperaturkessel.png","label":"Niedertemperatur"},{"img":"../assets/images/heizung/brennwertkessel.png","label":"Brennwert"},{"img":"../assets/images/heizung/waermepumpe.png","label":"Wärmepumpe"}],"options":[{"value":"Konstanttemperatur","label":"Konstanttemperatur"},{"value":"Niedertemperatur","label":"Niedertemperatur"},{"value":"Brennwert","label":"Brennwert"},{"value":"Wärmepumpe","label":"Wärmepumpe"}]},{"key":"misch_heizung_waermeabgabe","label":"Wärmeabgabe","type":"select","required":true,"optionsRef":"heizung_waermeabgabe"},{"key":"misch_pv_dach","label":"Photovoltaik (PV) auf dem Dach","type":"checkbox","required":false,"infoText":"Anlage auf dem Dach, die Sonnenlicht in Strom umwandelt. Der Strom kann im Haus genutzt oder ins Netz eingespeist werden.","full":true},{"key":"hz_solar","label":"Solarthermie für Heizung vorhanden","type":"radio","required":false,"optionsRef":"ja_nein_radio","tipKey":"heizung_hz_solar"},{"key":"misch_zirkulation","label":"Zirkulation (Warmwasser)","type":"checkbox","required":false,"infoText":"Kreislauf von Heizungs- oder Warmwasser in den Leitungen, damit Wärme bzw. warmes Wasser schnell und gleichmäßig im Gebäude verfügbar ist.","full":true},{"key":"misch_heizungsrohre_gedaemmt","label":"Heizungsrohre gedämmt","type":"radio","required":false,"optionsRef":"ja_nein_radio","tipKey":"heizung_rohre_gedaemmt"}]},{"title":"Gewerbeanteil","fields":[{"key":"misch_nutzflaeche","label":"Nutzfläche (m²)","type":"number","required":true,"min":1,"max":200000},{"key":"misch_lueftung","label":"Lüftung","type":"select","required":true,"optionsRef":"nwg_lueftung"},{"key":"klimatisiert","label":"Gibt es eine Kühlung im Gebäude?","type":"radio","required":true,"optionsRef":"ja_nein_radio"},{"key":"fernKuehlung","label":"Erfolgt Kühlung über Fernkälte?","type":"radio","required":{"eq":["klimatisiert","Ja"]},"when":{"eq":["klimatisiert","Ja"]},"optionsRef":"ja_nein_radio"},{"key":"passiveKuehlung","label":"Gibt es passive Kühlung?","type":"radio","required":{"eq":["klimatisiert","Ja"]},"when":{"eq":["klimatisiert","Ja"]},"optionsRef":"ja_nein_radio"},{"key":"waermeKuehlung","label":"Gibt es thermische Kühlung?","type":"radio","required":{"eq":["klimatisiert","Ja"]},"when":{"eq":["klimatisiert","Ja"]},"optionsRef":"ja_nein_radio"},{"key":"stromKuehlung","label":"Gibt es elektrische Kompressionskühlung?","type":"radio","required":{"eq":["klimatisiert","Ja"]},"when":{"eq":["klimatisiert","Ja"]},"optionsRef":"ja_nein_radio"}]}],"group":"Technik"},{"id":"uploads","title":"Unterlagen","meta":"6","intro":{"title":"Unterlagen","text":"Bitte laden Sie möglichst folgende Unterlagen hoch."},"fields":[{"key":"upload_verbrauch_heizkosten","label":"Heizkostenabrechnungen","labelByCond":[{"when":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Verbrauchsausweis"]}]},"value":"Heizkostenabrechnungen (falls vorhanden)"},{"when":{"eq":["ausweisart","Bedarfsausweis"]},"value":"Energieabrechnungen der letzten Jahre"}],"type":"file","full":true,"when":{"or":[{"eq":["ausweisart","Verbrauchsausweis"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"required":{"and":[{"eq":["ausweisart","Verbrauchsausweis"]},{"neq":["gebaeudetyp","NWG"]}]},"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"helpByCond":[{"when":{"eq":["ausweisart","Bedarfsausweis"]},"value":"Nur zur Plausibilitätsprüfung."}],"tipKey":"upload_verbrauch_heizkosten"},{"key":"upload_nwg_stromabrechnungen","label":"Stromabrechnungen (letzte 3 Jahre)","type":"file","full":true,"when":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Verbrauchsausweis"]}]},"required":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Verbrauchsausweis"]}]},"accept":".pdf,.jpg,.jpeg,.png","multiple":true},{"key":"upload_schornsteinfeger","label":"Schornsteinfegerprotokoll (optional)","type":"file","full":true,"when":{"or":[{"eq":["ausweisart","Verbrauchsausweis"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"required":false,"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_schornsteinfeger"},{"key":"upload_verbrauch_verbrauchsdaten","label":"Energieabrechnungen der letzten 3 Jahre","type":"file","full":true,"when":{"eq":["ausweisart","Verbrauchsausweis"]},"required":false,"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_verbrauch_verbrauchsdaten"},{"key":"checklist_bedarf_heizung","type":"checklist","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true,"title":"Bedarfsausweis – Bild-Upload – Heizungsanlage bzw. des Wärmeerzeugers","text":"Seit Mai 2021 gilt in Deutschland das Gebäudeenergiegesetz (GEG). Für die fachgerechte Erstellung des Energieausweises benötigen wir Fotos, um den energetischen Zustand beurteilen und Modernisierungsempfehlungen ableiten zu können. Wichtig: Die hochgeladenen Bilder erscheinen nicht auf dem Energieausweis und dienen ausschließlich der fachlichen Bewertung.","items":[{"label":"Beispielbild der Heizungsanlage mit Heizkessel","required":true,"note":"Heizungsraum mit Anlage fotografieren."},{"label":"Beispielbild der Rohrleitungen","required":true,"note":"Leitungen/Rohre sichtbar darstellen; Dämmzustand erkennbar."},{"label":"Detailbild Typenschildes","required":true,"note":"Foto des Typenschildes: Typ Wärmeerzeuger, Energieträger, Nennleistung, Baujahr."},{"label":"Beispielbild des Heizkörpers mit Raumtemperaturregelung","required":true,"note":"Falls vorhanden, Thermostate an Heizkörpern oder Wandthermostate fotografieren."}]},{"key":"upload_heizung_photos","label":"Heizungsanlage (Fotos)","type":"file","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"accept":".jpg,.jpeg,.png","multiple":true,"tipKey":"uploads_heizung"},{"key":"checklist_bedarf_fenster","type":"checklist","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true,"title":"Bedarfsausweis – Bild-Upload – Fenster / Dachfenster / Türen","text":"Seit Mai 2021 gilt in Deutschland das Gebäudeenergiegesetz (GEG). Für die fachgerechte Erstellung des Energieausweises benötigen wir daher Fotos der Gebäudehülle, um den Sanierungszustand einschätzen und passende Modernisierungsempfehlungen geben zu können. Hinweis: Die hochgeladenen Bilder erscheinen nicht auf dem Energieausweis und werden ausschließlich zur fachlichen Bewertung verwendet.","items":[{"label":"Beispielbild eines Fensters","required":true,"note":"Bei einheitlicher Fensterart genügt ein Beispielbild, sonst je Fenstertyp ein Foto."},{"label":"Nahaufnahme des Verglasungsrahmens","required":true,"note":"Wenn möglich Nahaufnahme von Fenster bzw. Falz mit erkennbarem Datumsaufdruck am Verglasungsrahmen."},{"label":"Fensterlaibung","required":true,"note":"Fensterlaibung innen und außen."},{"label":"Beispielbild eines Dachflächenfensters","required":true,"note":"Bei einheitlicher Fensterart genügt ein Beispielbild, sonst je Fenstertyp ein Foto."},{"label":"Beispielbild der Haustüre","required":true,"note":"Bei einheitlicher Fensterart genügt ein Beispielbild, sonst je Fenstertyp ein Foto."}]},{"key":"upload_fenster_photos","label":"Fenster/Dachfenster/Türen (Fotos)","type":"file","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"accept":".jpg,.jpeg,.png","multiple":true,"tipKey":"uploads_fenster"},{"key":"checklist_bedarf_daemmung","type":"checklist","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true,"title":"Bedarfsausweis – Bild-Upload – Wärmedämmung/Gebäude","text":"Seit Mai 2021 gilt in Deutschland das Gebäudeenergiegesetz (GEG). Für die fachgerechte Erstellung des Energieausweises benötigen wir Fotos zur Wärmedämmung des Gebäudes, um den energetischen Zustand beurteilen und Modernisierungsempfehlungen ableiten zu können. Wichtig: Die hochgeladenen Bilder erscheinen nicht auf dem Energieausweis und dienen ausschließlich der fachlichen Bewertung.","items":[{"label":"Detailaufnahme Innenbereich Dach","required":true,"note":"Spitzboden/Dachboden: Dämmung bzw. fehlende Dämmung soll eindeutig erkennbar sein."},{"label":"Bild oberste Geschossdecke","required":true,"note":"Dämmung und Dämmstärke abbilden. Falls nicht möglich: Randbereich und Querschnitt des Dachzugangs fotografieren."},{"label":"Falls kein Dachboden","required":true,"note":"Kein Dachboden (z. B. Flachdach)? Foto eines Dachgeschossraums mit sichtbarer Decke."},{"label":"Detailbild der Außenwand","required":true,"note":"Verkleidung/Dämmung – sofern vorhanden – mit abbilden."},{"label":"Sockelbereich des Hauses","required":true,"note":"Fassadensockel gut sichtbar. Bei WDVS muss der untere Systemabschluss erkennbar sein."},{"label":"Abbildung der Kellerdecke / unterer Gebäudeabschluss","required":true,"note":"Fotos sollen zeigen, ob die Kellerdecke gedämmt ist oder nicht; Kellerdecke eindeutig erkennbar."}]},{"key":"upload_daemmung_photos","label":"Wärmedämmung (Fotos)","type":"file","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"accept":".jpg,.jpeg,.png","multiple":true,"tipKey":"uploads_daemmung"},{"type":"checklist","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true,"title":"Angaben zur Wärmedämmung:","text":"Bitte markieren Sie, welche Bauteile gedämmt sind."},{"key":"waermedaemmung_aussenwand","label":"Außenwand gedämmt","type":"checkbox","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true},{"key":"daemmstaerke_aussenwand_cm","label":"Dämmstärke Außenwand (cm)","type":"number","full":true,"when":{"and":[{"eq":["ausweisart","Bedarfsausweis"]},{"eq":["waermedaemmung_aussenwand",true]}]},"required":{"eq":["waermedaemmung_aussenwand",true]},"min":1,"max":80,"hint":"z. B. 14"},{"key":"waermedaemmung_kelleraussenwand","label":"Kelleraußenwand gedämmt","type":"checkbox","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true},{"key":"waermedaemmung_kellerdecke","label":"Kellerdecke gedämmt","type":"checkbox","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true},{"key":"daemmstaerke_boden_cm","label":"Dämmstärke Kellerdecke / Kelleraußenwand (cm)","type":"number","full":true,"when":{"and":[{"eq":["ausweisart","Bedarfsausweis"]},{"or":[{"eq":["waermedaemmung_kellerdecke",true]},{"eq":["waermedaemmung_kelleraussenwand",true]}]}]},"required":{"or":[{"eq":["waermedaemmung_kellerdecke",true]},{"eq":["waermedaemmung_kelleraussenwand",true]}]},"min":1,"max":80,"hint":"z. B. 10"},{"key":"waermedaemmung_dachgeschoss","label":"Dachgeschoss gedämmt","type":"checkbox","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true},{"key":"waermedaemmung_oberste_geschossdecke","label":"Oberste Geschossdecke gedämmt","type":"checkbox","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true},{"key":"daemmstaerke_dach_cm","label":"Dämmstärke Dach / oberste Geschossdecke (cm)","type":"number","full":true,"when":{"and":[{"eq":["ausweisart","Bedarfsausweis"]},{"or":[{"eq":["waermedaemmung_dachgeschoss",true]},{"eq":["waermedaemmung_oberste_geschossdecke",true]}]}]},"required":{"or":[{"eq":["waermedaemmung_dachgeschoss",true]},{"eq":["waermedaemmung_oberste_geschossdecke",true]}]},"min":1,"max":80,"hint":"z. B. 20"},{"key":"checklist_bedarf_unterlagen","type":"checklist","when":{"eq":["ausweisart","Bedarfsausweis"]},"full":true,"title":"Bedarfsausweis – Bild-Upload – Gebäudeunterlagen","text":"Für den Bedarfsausweis werden Angaben zur Gebäudegeometrie und Gebäudehülle benötigt. Bitte laden Sie – soweit möglich – folgende Unterlagen hoch:","items":[{"label":"Bauunterlagen","required":true,"note":"z. B. Baugenehmigungen, U-Wert-Berechnungen, Anlagentechnik oder alte Energieausweise."},{"label":"Baupläne","required":true,"note":"Grundrisse, Ansichten und Schnitte."},{"label":"Gebäudeansichten","required":true,"note":"Alle vier Gebäudeansichten nach Himmelsrichtungen fotografisch darstellen."}]},{"key":"upload_bedarf_plaene","label":"Grundrisspläne / Schnitte / Ansichten","type":"file","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_bedarf_plaene"},{"key":"upload_nwg_anlagenplaene","label":"Anlagenpläne (Lüftung/Kälte/Heizung)","type":"file","full":true,"when":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"required":false,"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_nwg_anlagenplaene"}],"group":"Abschluss"},{"id":"erklaerung","title":"Erklärung","meta":"A7","intro":{"title":"Erklärung des Auftraggebers","text":"Bitte bestätigen Sie die Richtigkeit Ihrer Angaben."},"fields":[{"key":"erklaerung_bestaetigung","label":"Ich bestätige, dass die gemachten Angaben sowie die bereitgestellten Unterlagen vollständig und nach bestem Wissen korrekt sind.","type":"checkbox","required":true,"full":true},{"type":"checklist","full":true,"when":{"eq":["ausweisart","Verbrauchsausweis"]},"title":"","text":"Die Erstellung des Energieverbrauchsausweises erfolgt auf Grundlage der vom Auftraggeber bereitgestellten Angaben zum Gebäude, zur Nutzung und zum Energieverbrauch. Eine technische Überprüfung der Anlagen oder der übermittelten Daten erfolgt im Rahmen des Energieverbrauchsausweises in der Regel nicht.\n\nDer Auftraggeber ist verpflichtet, alle für die Erstellung des Energieausweises erforderlichen Angaben vollständig und wahrheitsgemäß bereitzustellen. Für die Richtigkeit und Vollständigkeit der bereitgestellten Daten und Unterlagen ist der Auftraggeber verantwortlich."},{"type":"checklist","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"title":"","text":"Die Erstellung des Energiebedarfsausweises erfolgt auf Grundlage der vom Auftraggeber bereitgestellten Angaben zum Gebäude, zur Nutzung sowie zur Anlagentechnik. Eine technische Überprüfung der Bauteile, Anlagen oder der übermittelten Daten vor Ort erfolgt in der Regel nicht.\n\nDer Auftraggeber ist verpflichtet, alle erforderlichen Angaben vollständig und wahrheitsgemäß bereitzustellen. Für die Richtigkeit und Vollständigkeit ist der Auftraggeber verantwortlich."},{"type":"checklist","full":true,"when":{"and":[{"eq":["ausweisart","Verbrauchsausweis"]},{"neq":["gebaeudetyp","NWG"]}]},"title":"Rechtliche Hinweise","text":"1. Datengrundlage – Der Energieverbrauchsausweis wird auf Grundlage der vom Auftraggeber bereitgestellten Gebäude-, Nutzungs- und Verbrauchsdaten erstellt. Eine technische Überprüfung der Angaben erfolgt nicht.\n2. Mitwirkungspflicht des Auftraggebers – Der Auftraggeber ist verpflichtet, alle Angaben vollständig und nach bestem Wissen bereitzustellen.\n3. Nutzerabhängigkeit – Das Ergebnis kann durch die Nutzung des Gebäudes, Betriebszeiten und das Verhalten der Nutzer beeinflusst werden.\n4. Erforderliche Verbrauchsdaten – Mindestens drei zusammenhängende Abrechnungsjahre. Bei Wohngebäuden: Heizenergieverbrauch der letzten drei Jahre.\n5. Einsatzbereich – Für viele bestehende Wohngebäude möglich. In bestimmten Fällen ist ein Bedarfsausweis erforderlich.\n6. Registrierungsnummer – Gemäß GEG erhält jeder Energieausweis eine Registriernummer des DIBt.\n7. Vor-Ort-Begehung – Beim Verbrauchsausweis in der Regel keine Vor-Ort-Begehung."},{"type":"checklist","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"title":"Rechtliche Hinweise","text":"1. Datengrundlage – Berechnung auf Grundlage der bereitgestellten Angaben zu Gebäudehülle, Technik und Geometrie. Plausibilitätsprüfung, keine Vor-Ort-Überprüfung.\n2. Mitwirkungspflicht – Vollständige und wahrheitsgemäße Angaben sind Pflicht des Auftraggebers.\n3. Berechnungsgrundlage – Rechnerische Bewertung; unabhängig vom individuellen Heiz- und Nutzungsverhalten.\n4. Angaben zum Gebäudezustand – Nachträgliche Änderungen können das Ergebnis beeinflussen.\n5. Einsatzbereich – Insbesondere für: Neubauten, Gebäude \u003c 5 WE mit Bauantrag vor 01.11.1977, Gebäude ohne ausreichende Verbrauchsdaten.\n6. Registriernummer – Jeder Energieausweis erhält eine Registriernummer des DIBt.\n7. Vor-Ort-Begehung – Kann erforderlich sein, ist aber nicht in jedem Fall zwingend notwendig."},{"type":"checklist","full":true,"when":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Verbrauchsausweis"]}]},"title":"Rechtliche Hinweise","text":"1. Datengrundlage – Erstellung auf Grundlage der bereitgestellten Gebäude-, Nutzungs- und Verbrauchsdaten. Plausibilitätsprüfung, keine technische Überprüfung.\n2. Mitwirkungspflicht – Vollständige und wahrheitsgemäße Angaben sind Pflicht des Auftraggebers.\n3. Nutzerabhängigkeit – Ergebnis kann durch Nutzung, Betriebszeiten und Nutzerverhalten beeinflusst werden.\n4. Erforderliche Verbrauchsdaten – Mindestens drei zusammenhängende Abrechnungsjahre; bei NWG: Wärme- und Stromverbräuche.\n5. Einsatzbereich – Für viele bestehende NWG möglich; bei fehlenden Daten ggf. Bedarfsausweis erforderlich.\n6. Registrierungsnummer – Jeder Energieausweis erhält eine Registriernummer des DIBt.\n7. Vor-Ort-Begehung – In der Regel keine Vor-Ort-Begehung beim Verbrauchsausweis."}],"group":"Abschluss"},{"id":"summary","title":"Zahlung \u0026 Bestellung","meta":"7","afterChangeRef":"billing_same_as_object","intro":{"title":"Zahlung \u0026 Bestellung","text":"In nur einem Schritt zu Ihrem Energieausweis."},"blocks":[{"title":"","fields":[{"key":"order_summary","label":"Ihre Bestellung","type":"kvsummary","full":true}]},{"title":"Rechnungsdaten","fields":[{"key":"rechnung_auftragsart","label":"Auftragsart","type":"radio","full":true,"required":true,"options":[{"value":"Privat-Eigentuemer","label":"Privat-Eigentuemer"},{"value":"Gewerblich","label":"Gewerblich"},{"value":"Gewerblich_ohne_UStId","label":"Gewerblich ohne USt.ID"}]},{"key":"rechnung_vorname","label":"Vorname","type":"text","required":true,"hint":"Vorname"},{"key":"rechnung_nachname","label":"Nachname","type":"text","required":true,"hint":"Nachname"},{"key":"rechnung_email","label":"E-Mail","type":"text","required":true,"pattern":"^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$","hint":"emailexample@gmail.com"},{"key":"rechnung_telefon","label":"Telefon","type":"text","required":false,"hint":"z. B. +49 89 123456"},{"key":"rechnung_strasse_hausnummer","label":"Straße \u0026 Hausnummer","type":"text","required":true,"hint":"Musterstraße 12, 23345 Musterstadt"},{"key":"rechnung_plz","label":"PLZ","type":"text","required":true,"pattern":"^\\d{5}$","hint":"23345"},{"key":"rechnung_ort","label":"Ort","type":"text","required":true,"hint":"München"},{"key":"rechnung_ust_id","label":"USt. ID","type":"text","required":{"eq":["rechnung_auftragsart","Gewerblich"]},"when":{"eq":["rechnung_auftragsart","Gewerblich"]},"hint":"z. B. DE123456789"},{"key":"rechnung_gleich_objektadresse","label":"Rechnungsadresse entspricht Objektadresse","type":"checkbox","required":false,"full":true}]}],"group":"Abschluss"},{"id":"thank_you","title":"Bestätigung","meta":"8","intro":{"title":"Vielen Dank","text":"Ihre Anfrage wurde erfolgreich übermittelt. Wir prüfen die Angaben und melden uns bei Ihnen."},"fields":[{"type":"checklist","variant":"thankyou-card","full":true,"img":"../assets/images/overview/group-390.png","imgAlt":"Bestätigung","title":"Ihr Antrag wurde erfolgreich übermittelt.","text":"Wir setzen uns zeitnah mit Ihnen in Verbindung. Bitte prüfen Sie auch Ihren E-Mail-Posteingang.","note":"Den Status Ihres Antrags können Sie in Ihrem persönlichen Benutzerkonto einsehen. Sollten Sie noch nicht registriert sein, bitten wir Sie, ein Benutzerkonto zu erstellen.","ctaLabel":"Zur Startseite","ctaHref":"/"}],"group":"Abschluss"}]};
const TOOL_TIPS_DE = {"anlass":"Vermietung, Verkauf oder sonstiger Zweck. Für einen Verbrauchsausweis sind die Anlässe Neubau oder Modernisierung nicht zulässig.","ausweisart":"Verbrauchsausweis: auf Basis tatsächlichen Verbrauchs. Bedarfsausweis: auf Basis Berechnung (mehr Angaben).","modernisierungsjahr":"Bitte geben Sie das Jahr der letzten relevanten Modernisierung an (vierstellig).","relevanz_disclaimer":"Die Einordnung dient der ersten Orientierung. Die endgültige Bewertung erfolgt im Rahmen der Energieausweis-Erstellung nach den geltenden gesetzlichen Vorgaben (GEG). Abweichungen im Einzelfall sind möglich.","gebaeudetyp":"Der Energieausweis wird grundsätzlich für das gesamte Gebäude oder den kompletten Wohnteil eines Mischgebäudes erstellt. Eine Ausstellung für einzelne Wohnungen oder Teilflächen ist nicht möglich.","wohnflaeche":"Beheizte Wohnfläche - Fläche der Räume, die dauerhaft zum Wohnen genutzt und beheizt werden (z. B. Wohnzimmer, Schlafzimmer, Küche, Bad).","nutzflaeche":"Nettogrundfläche (NGF) nach DIN 277 - Gesamte nutzbare Fläche des Gebäudes innerhalb der Außenwände (z. B. Wohnen, Flure, Abstellräume, Technikräume).","aussenwand_type":"Bitte wählen Sie den Außenwand-Typ. Falls Sie unsicher sind, nutzen Sie die Detailinfos je Material.","aussenwand_fachwerk":"../assets/images/aussenwand/fachwerk.png\n\nFachwerkbauten bestehen aus einer tragenden Holzkonstruktion mit Gefachen, die je nach Bauzeit mit Lehm, Ziegeln oder anderen Ausfachungsmaterialien gefüllt sind. Sie sind typisch für historische Gebäude und kommen vor allem bei Altbauten vor dem 20. Jahrhundert vor.\n\nTypische Erkennungsmerkmale:\n- Material: Holztragwerk mit Ausfachungen (z. B. Lehm, Ziegel, Bruchstein)\n- Baujahre: häufig vor ca. 1900, regional auch später\n- Optik: sichtbares Holzraster an der Fassade (falls nicht verputzt)\n- Gewicht / Rohdichte: unterschiedlich je nach Gefachmaterial\n- Aufbau: Holzständerwerk mit nichttragenden Gefachen\n- Materialeigenschaft: diffusionsoffene Konstruktion, empfindlich gegenüber Feuchtigkeit\n- Oberfläche: verputzt oder sichtbares Holzfachwerk\n- Bohreigenschaften: stark abhängig vom jeweiligen Gefach (Holz leicht, Ziegel/Lehm mittel)\n- Bohrmehl: je nach Material Holzspäne, lehmig oder rötlich\n\nHinweis zur energetischen Einordnung:\nDie energetische Qualität hängt stark von der Gefachfüllung, Wandstärke sowie vorhandenen Innendämmungen oder Sanierungen ab. Bei Fachwerk ist bauphysikalisch angepasste Dämmung erforderlich.","aussenwand_vollziegel":"../assets/images/aussenwand/vollziegel.png\n\nMassive Außenwände aus Naturstein oder Vollziegel sind typisch für Altbauten vor dem frühen 20. Jahrhundert. Die Konstruktionen bestehen meist aus dickem, massivem Mauerwerk ohne zusätzliche Dämmung und weisen je nach Region unterschiedliche Steinarten und Mauerwerksverbände auf.\n\nTypische Erkennungsmerkmale:\n- Material: Naturstein (z. B. Feldstein, Sandstein, Granit) oder Vollziegel\n- Baujahre: häufig vor ca. 1918 (Altbau)\n- Farbe: je nach Steinart grau, beige, gelblich oder rötlich\n- Gewicht / Rohdichte: sehr hoch, massives Mauerwerk\n- Aufbau: meist Vollmauerwerk ohne Hohlkammern, große Wandstärken\n- Materialeigenschaft: sehr fest und druckstabil\n- Oberfläche: unregelmäßig bei Naturstein, gleichmäßiger bei Vollziegel; häufig verputzt\n- Bohreigenschaften: hoher Widerstand, Bohren meist mit Schlag erforderlich\n- Bohrmehl: bei Naturstein grau/beige und steinig; bei Vollziegel rötlich\n\nHinweis zur energetischen Einordnung:\nTrotz großer Wandstärken besitzen massive Altbauwände oft eine geringe Wärmedämmwirkung. Die energetische Bewertung erfolgt unter Berücksichtigung von Wanddicke, Putzaufbau sowie eventueller nachträglicher Dämmmaßnahmen.","aussenwand_bims":"../assets/images/aussenwand/hohlblockstein-bims.png\n\nHohlblocksteine aus Bims oder Leichtbeton wurden besonders im frühen bis mittleren 20. Jahrhundert häufig im Wohnungsbau eingesetzt. Durch den porösen Zuschlagstoff (Bims) sind sie leichter als Normalbeton und besitzen bessere Wärmeeigenschaften als massive Betonbauteile.\n\nTypische Erkennungsmerkmale:\n- Material: Leichtbeton bzw. Bimsbeton (Zement mit Bims-Zuschlag)\n- Baujahre: häufig ca. 1919 bis 1960er Jahre\n- Farbe: hellgrau bis beige-grau\n- Gewicht / Rohdichte: leicht bis mittel, deutlich leichter als Beton\n- Aufbau: größere Steinformate mit Hohlkammern\n- Materialeigenschaft: porös, weniger fest als Kalksandstein oder Stahlbeton\n- Oberfläche: oft grobkörnig, sichtbar porige Struktur\n- Bohreigenschaften: relativ gut zu bohren, meist mit wenig Schlag\n- Bohrmehl: hellgrau, leicht körnig und eher „sandig\"\n\nHinweis zur energetischen Einordnung:\nDie Dämmwirkung ist besser als bei Vollbeton, jedoch meist nicht ausreichend nach heutigen Standards. Außenwände aus Bims-Hohlblockstein wurden später häufig mit WDVS oder Vormauerschale ergänzt.","aussenwand_kalksandstein":"Kalksandstein ist ein mineralischer Mauerwerksbaustoff aus Kalk, Sand und Wasser, der unter Dampfdruck gehärtet wird. Er besitzt eine hohe Rohdichte und wird häufig für tragende Innen- und Außenwände eingesetzt, meist in Kombination mit zusätzlicher Wärmedämmung.\n\nTypische Erkennungsmerkmale:\n- Material: Kalk, Sand und Wasser (dampfdruckgehärtet)\n- Baujahre: verbreitet seit vielen Jahrzehnten, häufig ab ca. 1960 bis heute\n- Farbe: weiß bis hellgrau\n- Gewicht / Rohdichte: hoch, schweres Mauerwerk\n- Materialeigenschaft: sehr fest und druckstabil, dichter als Porenbeton oder Ziegel\n- Aufbau: meist Vollstein oder Lochstein mit glatter Oberfläche\n- Bohreigenschaften: hartes Material, Bohren meist mit Schlagfunktion erforderlich\n- Bohrmehl: hellgrau bis weiß, eher sandig\n\nHinweis zur energetischen Einordnung:\nKalksandstein besitzt selbst nur geringe Wärmedämmeigenschaften; die energetische Qualität der Außenwand ergibt sich meist durch zusätzliche Dämmmaßnahmen (z. B. WDVS oder Kerndämmung).","aussenwand_ziegel":"../assets/images/aussenwand/ziegel-hochlochziegel.png\n\nZiegelmauerwerk besteht aus gebranntem Ton und wurde im Wohnungsbau häufig ab der Nachkriegszeit eingesetzt, kommt jedoch auch bei älteren Gebäuden vor. Typisch sind eine rötliche bis orangefarbene Erscheinung sowie – je nach Bauart – innenliegende Hohlkammern zur Gewichtsreduzierung und Wärmedämmung.\n\nTypische Erkennungsmerkmale:\n- Material: gebrannter Ton (Ziegel)\n- Farbe: rot, orange bis gelblich\n- Baujahre: häufig ab ca. 1950, teilweise auch vor 1945\n- Aufbau: Vollziegel oder Hochlochziegel mit Hohlkammern\n- Rohdichte / Gewicht: mittel bis schwer\n- Materialeigenschaft: druckfest, jedoch weniger hart als Beton\n- Bohrverhalten: Bohren je nach Ziegelart mit oder ohne Schlagfunktion\n- Bohrmehl: meist rötlich bis orangefarben\n\nHinweis zur Energieausweis-Erstellung:\nDie genaue energetische Bewertung hängt zusätzlich von Wandstärke, Putzaufbau sowie vorhandener Dämmung ab.","aussenwand_porenbeton":"../assets/images/aussenwand/porenbeton-gasbeton.png\n\nPorenbeton (auch Gasbeton genannt) ist ein mineralischer Leichtbaustoff mit hohem Luftporenanteil. Aufgrund seiner geringen Rohdichte besitzt er gute Wärmedämmeigenschaften und wird häufig im modernen Mauerwerksbau eingesetzt.\n\nTypische Erkennungsmerkmale:\n- Material: Porenbeton (zement- bzw. kalkgebundener Leichtbaustoff)\n- Baujahre: vermehrt ab ca. 1980, im Neubau häufig verwendet\n- Farbe: weiß bis hellgrau\n- Gewicht / Rohdichte: gering, sehr leichtes Mauerwerk\n- Materialeigenschaft: weich im Vergleich zu Beton oder Ziegel\n- Oberfläche: gleichmäßig, feinporige Struktur\n- Bohreigenschaften: leicht zu bearbeiten, Bohren meist ohne Schlagfunktion möglich\n- Bohrmehl: weiß bis hellgrau, sehr fein\n\nHinweis zur energetischen Einordnung:\nDie energetische Bewertung im Bedarfsausweis hängt von Wanddicke, Steinformat sowie zusätzlicher Dämmung oder Putzaufbau ab.","aussenwand_stahlbeton":"../assets/images/aussenwand/stahlbeton.png\n\nStahlbeton besteht aus Beton mit eingelegter Bewehrung aus Stahl zur Aufnahme von Zugkräften. Er wird überwiegend bei tragenden Konstruktionen wie Decken, Stützen, Balkonen oder massiven Außenwänden eingesetzt und kommt sowohl im Geschosswohnungsbau als auch bei Einfamilienhäusern vor.\n\nTypische Erkennungsmerkmale:\n- Material: Beton mit Stahleinlagen (Bewehrung)\n- Baujahre: verbreitet seit ca. 1950 bis heute\n- Farbe: grau bis dunkelgrau\n- Gewicht / Rohdichte: sehr hoch, massives Bauteil\n- Materialeigenschaft: sehr hart, hohe Druck- und Zugfestigkeit durch Bewehrung\n- Oberfläche: glatt (Schalungsstruktur möglich) oder verputzt\n- Bohreigenschaften: Bohren meist nur mit Schlag-/Hammerbohrer; hoher Widerstand\n- Bohrmehl: dunkelgrau, steinig; bei Treffer der Bewehrung metallischer Widerstand\n\nHinweis zur energetischen Einordnung:\nStahlbeton besitzt eine hohe Wärmeleitfähigkeit und geringe Dämmwirkung. Außenbauteile aus Stahlbeton werden energetisch meist erst durch zusätzliche Außendämmung (z. B. WDVS) bewertet.","aussenwand_wdvs":"../assets/images/aussenwand/wdvs-querschnitt.png\n\nEin Wärmedämmverbundsystem (WDVS) ist eine außenliegende Dämmkonstruktion, die auf bestehendes Mauerwerk oder Beton aufgebracht wird, um den Wärmeschutz der Gebäudehülle zu verbessern. Es besteht aus Dämmplatten, Armierungsschicht und Oberputz.\n\nTypische Erkennungsmerkmale:\n- Aufbau: Dämmplatten (z. B. EPS, Mineralwolle, Holzfaser) mit Putzsystem\n- Baujahre: häufig ab ca. 1975/1980, stark verbreitet seit EnEV-Zeit\n- Optik: verputzte Fassade, oft gleichmäßige Oberfläche ohne sichtbares Mauerwerk\n- Material: Dämmstoff + Armierungsgewebe + Oberputz\n- Wandstärke außen: häufig 8–20 cm zusätzliche Dämmschicht (je nach Sanierungsstand)\n- Klopfprobe: eher „dumpfer\" Klang als bei massivem Mauerwerk\n- Bohreigenschaften: zuerst weiche Dämmschicht, dahinter tragendes Mauerwerk\n- Bohrmehl: je nach Dämmstoff weiß (EPS), faserig (Mineralwolle) oder mineralisch\n\nHinweis zur energetischen Einordnung:\nDie energetische Qualität wird wesentlich durch Dämmstoffart, Dämmstärke und Ausführungsjahr bestimmt. Das tragende Mauerwerk allein ist für die U-Wert-Bewertung nicht ausreichend.","fenster_type":"Farbiges Spiegelbild = Wärmeschutz. Spiegelbilder zählen = Anzahl Scheiben.\n\nFeuertest: Halten Sie ein Feuerzeug vor die Scheibe und zählen Sie die Spiegelbilder.\n- 2 Spiegelbilder = Zweifachverglasung (siehe Bild: ../assets/images/fenster/feuertest-2fach.png)\n- 3 Spiegelbilder = Dreifachverglasung (siehe Bild: ../assets/images/fenster/feuertest-3fach.png)","fenster_einfachverglasung":"Fenster mit einer einzelnen Glasscheibe ohne wärmedämmende Zwischenschicht.\nBaujahr: häufig bis ca. 1978\nUG: 5 bis 6 W/(m²·K)\nRahmenmaterial: Holz, Stahl oder Aluminium","fenster_verbundfenster":"Fensterbauart mit zwei getrennten Glasscheiben in zwei Fensterflügeln, die mechanisch miteinander verbunden sind und gemeinsam geöffnet werden. Es handelt sich nicht um eine Isolierverglasung im technischen Sinn; der Scheibenzwischenraum ist nicht gasdicht ausgeführt.\nBaujahr: häufig ca. 1950–1985\nRahmenmaterial: überwiegend Holz (vereinzelt Metallverbund)","fenster_kastenfenster":"Fensterbauart mit zwei getrennten, hintereinander angeordneten Fensterflügeln, die jeweils eine einfache Verglasung besitzen und durch einen größeren Luftzwischenraum („Kasten\") getrennt sind. Es handelt sich nicht um eine Isolierverglasung im technischen Sinn.\nBaujahr: häufig vor 1978 (typisch Altbau / Denkmal)\nRahmenmaterial: überwiegend Holz","fenster_isolierglas_alt":"Fenster mit Isolierglasscheibe aus zwei Glasscheiben, die werkseitig zu einer Einheit verbunden sind. Die Verglasung weist keine Wärmeschutzbeschichtung auf und der Scheibenzwischenraum ist nicht gasgefüllt.\nUG: 2,5 bis 3 W/(m²·K)\nBaujahr: häufig ca. 1978–1994\nRahmenmaterial: Holz, Kunststoff oder Aluminium","fenster_waermeschutzglas":"Fenster mit beschichteter Zweifachverglasung und gasgefülltem Scheibenzwischenraum zur verbesserten Wärmedämmung.\nBaujahr: häufig ab ca. 1995–2010\nRahmenmaterial: Holz, Kunststoff, Aluminium\nWärmedurchgangskoeffizient (U-Wert): typischerweise ca. 1,1–1,3 W/(m²·K)\nUG: 1 bis 1,3 W/(m²·K)","fenster_dreifach":"Fenster mit drei Glasscheiben, beschichteten Scheibenflächen und gasgefüllten Zwischenräumen zur hohen Wärmedämmung.\nBaujahr: häufig ab ca. 2010\nRahmenmaterial: Holz, Kunststoff, Aluminium (meist mit thermischer Trennung)\nWärmedurchgangskoeffizient (U-Wert): typischerweise ≤ 0,9 W/(m²·K)\nUG: 0,5 bis 0,7 W/(m²·K)","fenster_vermassung":"Angabe der Fensterabmessungen (lichte Öffnung Breite × Höhe) zur Ermittlung der Fensterfläche. Die Vermassung dient der rechnerischen Erfassung der transparenten Bauteilflächen im Bedarfsausweis.\n\nUmrechnung: 100 cm = 1 m\nBeispiel: Küchenfenster Höhe (1,20 m + 0,03 m) × Breite (1,46 m + 0,03 m) = 1,23 m × 1,49 m = 1,833 m²","nwg_fensteranteil":"NWG arbeitet mehr mit Glasanteilen.","heizung_waermeerzeuger":"Bitte wählen Sie den Wärmeerzeuger.","heizung_oel":"Ölheizung: Wärmeversorgung über einen Ölkessel (fossiler Brennstoff).","heizung_gas":"Gasheizung: Wärmeversorgung über einen Gaskessel (fossiler Brennstoff).","heizung_fernwaerme":"Fernwärme / Nahwärme\nWärmeversorgung des Gebäudes über ein externes Wärmeversorgungsnetz; keine Wärmeerzeugung im Gebäude.","heizung_biomasse":"Biomasseheizung (z. B. Pellet, Hackschnitzel, Scheitholz)\nZentrale Heizungsanlage zur Wärmebereitstellung unter Nutzung fester biogener Brennstoffe.","heizung_elektro":"Elektroheizung (direkt / Nachtspeicher)\nDirekt wirkende elektrische Heizsysteme ohne Nutzung von Umweltenergie und ohne zentrale Wärmeverteilung.","heizung_einzelofen":"Kaminofen / Einzelraumfeuerstätte\nEinzelraumfeuerstätte zur ergänzenden Raumbeheizung, nicht Bestandteil der zentralen Wärmeversorgung des Gebäudes.","heizung_bhkw":"Blockheizkraftwerk (BHKW / KWK)\nAnlage zur gekoppelten Erzeugung von Wärme und Strom zur zentralen Wärmeversorgung des Gebäudes.","heizung_hybrid":"Hybridheizung\nKombination aus zwei unterschiedlichen Wärmeerzeugern zur gemeinsamen Wärmebereitstellung.","heizung_konstanttemperatur":"Konstanttemperaturkessel\nHeizkessel, der dauerhaft mit hoher Vorlauftemperatur betrieben wird – unabhängig vom Wärmebedarf. Die Abgaswärme (Kondensationswärme) wird nicht genutzt. Typisch für ältere Heizungsanlagen, vor allem aus den 1970er-Jahren bis ca. 1995.\nÜbliche Temperaturen: Vorlauf ca. 70–90 °C, Rücklauf ca. 55–70 °C","heizung_niedertemperatur":"Niedertemperaturkessel\nHeizkessel, der mit niedrigeren Vorlauftemperaturen arbeitet und sich dem Wärmebedarf besser anpasst als ein Konstanttemperaturkessel. Die Abgaswärme (Kondensationswärme) wird jedoch nicht genutzt. Typisch für Heizungsanlagen etwa von ca. 1985 bis 2005.\nÜbliche Temperaturen: Vorlauf ca. 55–75 °C, Rücklauf ca. 45–60 °C","heizung_brennwert":"Brennwertkessel\nHeizkessel, der neben der Heizwärme auch die im Abgas enthaltene Kondensationswärme nutzt. Voraussetzung dafür sind möglichst niedrige Rücklauftemperaturen (ideal unter ca. 55 °C, bei Gasbrennwert oft unter ca. 50 °C). Typisch für moderne Heizungsanlagen, überwiegend ab ca. 1995.\nÜbliche Temperaturen (je nach Heizsystem): Vorlauf ca. 45–65 °C, Rücklauf ca. 35–40 °C","heizung_waermepumpe":"Wärmepumpe\nHeizungsanlage, die Wärme aus der Umwelt (z. B. Außenluft, Erdreich oder Grundwasser) nutzt, um Heizwärme und/oder Warmwasser bereitzustellen. Der Betrieb erfolgt überwiegend mit elektrischer Energie. Durch niedrige Systemtemperaturen arbeitet die Anlage besonders effizient, insbesondere in gut gedämmten Gebäuden oder mit Flächenheizungen.\nÜbliche Temperaturen: Vorlauf ca. 30–45 °C, Rücklauf ca. 27–35 °C","heizung_photovoltaik":"Photovoltaik (PV) auf dem Dach\nAnlage auf dem Dach, die Sonnenlicht in Strom umwandelt. Der Strom kann im Haus genutzt oder ins Netz eingespeist werden.","heizung_hz_solar":"Solarthermie für Heizung\nGeben Sie an, ob eine Solaranlage vorhanden ist, die die Raumheizung unterstützt (nicht Photovoltaik).","heizung_zirkulation":"Zirkulation\nKreislauf von Heizungs- oder Warmwasser in den Leitungen, damit Wärme bzw. warmes Wasser schnell und gleichmäßig im Gebäude verfügbar ist.","heizung_rohre_gedaemmt":"Heizungsrohre gedämmt\nGemeint sind die sichtbaren Heizungsrohre des Verteilsystems. Gedämmte Rohre erkennen Sie an einer dunklen Isolierung bzw. Ummantelung (z. B. Manschetten) um das Rohr.","warmwasser_type":"Bitte wählen Sie die Warmwasser-Art.","warmwasser_zentral":"Zentrale Warmwasserbereitung\nDie Trinkwassererwärmung erfolgt über eine zentrale Anlage im Gebäude, z. B. über den Heizkessel oder einen zentralen Warmwasserspeicher. Das erwärmte Wasser wird über Leitungen zu den Entnahmestellen (Bad, Küche) verteilt.","warmwasser_dezentral":"Dezentrale Warmwasserbereitung\nDie Warmwassererzeugung erfolgt direkt an der jeweiligen Entnahmestelle, z. B. durch elektrische Durchlauferhitzer, Boiler oder Untertischgeräte. Eine zentrale Speicherung oder Verteilung im Gebäude findet nicht statt.","warmwasser_speicher":"Elektrischer Warmwasserspeicher (Boiler)\nDezentrale elektrische Warmwasserbereitung über Speichergeräte in den Nutzungseinheiten.","warmwasser_durchlauferhitzer":"Durchlauferhitzer (elektrisch) – nur Warmwasser\nDezentrale elektrische Warmwassererzeugung in den einzelnen Nutzungseinheiten ohne zentrale Speicher- oder Verteilanlage.","warmwasser_kombiniert":"Kombiniert mit Heizung\nDie Warmwasserbereitung ist in die Heizungsanlage integriert. Ein Wärmeerzeuger (z. B. Brennwertkessel oder Wärmepumpe) übernimmt sowohl die Raumheizung als auch die Erwärmung des Trinkwassers.","warmwasser_solarthermie":"Solarthermie (Warmwasser)\nAnlage zur thermischen Nutzung der Sonnenenergie zur Warmwasserbereitung über solarthermische Kollektoren; keine Stromerzeugung (keine Photovoltaik).","warmwasser_waermepumpe":"Wärmepumpe (Warmwasser)\nEine Wärmepumpe, die ausschließlich oder vorrangig zur Trinkwassererwärmung eingesetzt wird (Brauchwasserwärmepumpe). Die Wärmepumpe entzieht der Umgebungsluft Wärme und überträgt diese auf das Warmwasser.","warmwasser_rohre_gedaemmt":"Warmwasserrohre gedämmt\nGemeint sind die sichtbaren Warmwasserleitungen im Gebäude. Gedämmte Rohre erkennen Sie an einer dunklen Isolierung bzw. Ummantelung (z. B. Manschetten) um das Rohr.","lueftung_fenster":"Fensterlüftung (Natürliche Lüftung)\nLuftwechsel erfolgt ausschließlich über manuell zu öffnende Fenster; es ist keine mechanische Lüftungsanlage vorhanden.","lueftung_abluft":"Mechanische Abluft / Schachtlüftung\nMechanisches Lüftungssystem, bei dem verbrauchte Raumluft aktiv abgesaugt wird. Die Frischluft strömt ungeregelt über Außenluftöffnungen oder Fenster nach. Eine Wärmerückgewinnung ist nicht vorhanden.","lueftung_zentral_ohne_wrg":"Zentrale ohne WRG\nZentrale mechanische Zu- und Abluftanlage ohne Wärmerückgewinnung (WRG), bei der die Zu- und Abluft zentral geführt wird.","lueftung_zentral_wrg":"Zentrale WRG\nZentrale mechanische Zu- und Abluftanlage mit Wärmerückgewinnung (WRG), bei der die Abluftwärme ganz oder teilweise auf die Zuluft übertragen wird.","lueftung_dezentral_wrg":"Dezentrale WRG\nMechanische Zu- und Abluft über einzelne, raumweise angeordnete Lüftungsgeräte mit integrierter Wärmerückgewinnung (WRG); keine zentrale Luftverteilung vorhanden.","upload_verbrauch_heizkosten":"Für den Verbrauchsausweis werden Heizkostenabrechnungen der letzten 3 Jahre benötigt.","upload_verbrauch_verbrauchsdaten":"Für den Verbrauchsausweis werden Verbrauchsdaten (tatsächliches Verbrauchsverhalten) benötigt.","uploads_heizung":"Auf Grundlage des seit Mai 2021 geltenden Gebäudeenergiegesetzes (GEG) sind zur fachgerechten Erstellung des Energieausweises bildliche Informationen zur Anlagentechnik erforderlich. Die bereitgestellten Bilder dienen ausschließlich der fachlichen Einschätzung des energetischen Zustands und der Ableitung von Modernisierungsempfehlungen.\n\nHinweis:\nDie hochgeladenen Bilder werden nicht Bestandteil des Energieausweises und nicht veröffentlicht.\n\nEmpfehlung:\nEin Übersichtsbild des Heizungsraums mit sichtbarer Heizungsanlage und Rohrleitungen erleichtert die fachliche Bewertung.","uploads_fenster":"Seit Mai 2021 gilt in Deutschland das Gebäudeenergiegesetz (GEG). Für die fachgerechte Erstellung des Energieausweises benötigen wir daher Fotos der Gebäudehülle, um den Sanierungszustand einschätzen und passende Modernisierungsempfehlungen geben zu können.\n\nHinweis:\nDie hochgeladenen Bilder erscheinen nicht auf dem Energieausweis und werden ausschließlich zur fachlichen Bewertung verwendet.\n\nTipps für gute Fotos:\n- Ein Exemplarbild reicht, wenn alle Fenster gleich sind\n- Bei unterschiedlichen Fenstern bitte je Fensterart ein Bild\n- Möglichst eine Nahaufnahme des Fensterfalzes oder Rahmens\n- Ideal ist, wenn ein Datumsaufdruck an der Verglasung erkennbar ist","uploads_daemmung":"Seit Mai 2021 gilt in Deutschland das Gebäudeenergiegesetz (GEG). Für die fachgerechte Erstellung des Energieausweises benötigen wir Fotos zur Wärmedämmung des Gebäudes, um den energetischen Zustand beurteilen und Modernisierungsempfehlungen ableiten zu können.\n\nWichtig:\nDie hochgeladenen Bilder erscheinen nicht auf dem Energieausweis und dienen ausschließlich der fachlichen Bewertung.\n\nHinweise für geeignete Fotos:\n- Die Dämmung (oder fehlende Dämmung) sollte möglichst gut erkennbar sein\n- Ist die Dämmung durch Verkleidung oder Verschalung nicht sichtbar, genügt: ein Bild des ausgebauten Dachgeschosses und/oder ein Außenbild vom Dach-Wand-Anschluss\n- Ist die Dämmung der Außenwand nicht erkennbar, reicht: ein normales Außenbild der Fassade und/oder ein Bild vom Dach-Wand-Anschluss\n- Bitte laden Sie mindestens 2 Bilder hoch.","upload_bedarf_plaene":"Für den Bedarfsausweis werden Angaben zur Gebäudegeometrie und Gebäudehülle benötigt. Dafür sind Gebäudepläne besonders hilfreich.\n\nDateiformate: PDF oder Bild (z. B. JPG, PNG)","upload_nwg_anlagenplaene":"Optional: Anlagenpläne (Lüftung/Kälte/Heizung) können bei NWG hilfreich sein.","etr_kategorie":"Bitte wählen Sie den Energieträger, der in den Abrechnungen angegeben ist (z. B. Gas, Öl, Fernwärme).","etr_perioden":"Bitte geben Sie bis zu 3 Abrechnungszeiträume an (TT.MM.JJJJ), jeweils mit Gesamtmenge und Leerstand.","etr_fw_flags":"Diese Angaben sind relevant, wenn der Energieträger Fernwärme ist.","etr_primfaktor":"Primärenergiefaktor des Energieträgers. Nur bei Fernwärme erforderlich.","etr_anteile":"Anteile in Prozent. Wertebereich 0 bis 100.","etr2_optional":"Nur ausfüllen, wenn ein zweiter Energieträger tatsächlich vorhanden ist."};
const EXPORT_MAPPING_SPEC = {"version":"1.0.0-draft","source":{"schema_files":["docs/hints-for-import/EA_Verbrauch_WG.csv","docs/hints-for-import/EA_Verbrauch_NWG.csv","docs/hints-for-import/Schnittstellenbeschreibung-Import-Energieausweise.pdf"],"format":{"delimiter":";","encoding":"utf-8","decimal":","}},"routing":{"WG":{"when":"gebaeudetyp == \u0027WG\u0027"},"NWG":{"when":"gebaeudetyp == \u0027NWG\u0027"},"MISCH":{"policy":"default_to_NWG","note":"Can be switched to split export later"}},"upload_slot_policy":{"version":"v1","applies_to":["WG","NWG"],"rules":{"slot0":"first_file(upload_heizung_photos)","slot1":"first_file(upload_fenster_photos)","slot2":"first_file(upload_daemmung_photos)"},"missing_file_behavior":"empty_string","note":"Based on provided CSV examples (Ansicht/Fenster/Anlage pattern)."},"schemas":{"WG":{"columns":[{"column":"BOM","source":null,"transform":"constant","default":"","status":"defaulted"},{"column":"ID","source":"export_meta.order_id","transform":"id_safe_filename","default":null,"status":"derived"},{"column":"Anlass","source":"anlass","transform":"map_anlass_to_ag_code","default":"AG_VERMIETUNG","status":"mapped"},{"column":"PLZ","source":"plz","transform":"string_trim","default":null,"status":"mapped"},{"column":"Ort","source":"ort","transform":"string_trim","default":null,"status":"mapped"},{"column":"Straße","source":"strasse","transform":"string_trim","default":null,"status":"mapped"},{"column":"Hausnr","source":"hausnummer","transform":"string_trim","default":null,"status":"mapped"},{"column":"isGebaeudehuelle","source":null,"transform":"constant","default":1,"status":"mapped"},{"column":"Baujahr","source":"baujahr","transform":"year_int","default":null,"status":"mapped"},{"column":"Wohneinheiten","source":"anzahl_wohneinheiten","transform":"int_or_1","default":1,"status":"mapped"},{"column":"Wohnfläche","source":"wohnflaeche|nwg_nettogrundflaeche","transform":"schema_dependent_area","default":null,"status":"mapped"},{"column":"gebaeudeteil","source":"gebaeudeanteil|gebaeudetyp","transform":"map_gebaeudeteil_gt","default":"GT_GANZES_GEB","status":"mapped"},{"column":"Keller_beheizt","source":"keller|keller_heizstatus","transform":"map_keller_beheizt_01","default":0,"status":"mapped"},{"column":"bilderStreams_0","source":"upload_export.slot0","transform":"basename_or_empty","default":"","status":"mapped"},{"column":"bilderStreams_1","source":"upload_export.slot1","transform":"basename_or_empty","default":"","status":"mapped"},{"column":"bilderStreams_2","source":"upload_export.slot2","transform":"basename_or_empty","default":"","status":"mapped"},{"column":"Klimatisiert","source":"klimatisiert","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"kuehlWfl","source":"kuehlWfl","transform":"number_locale_de","default":0,"status":"mapped"},{"column":"passiveKuehlung","source":"passiveKuehlung","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"fernKuehlung","source":"fernKuehlung","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"stromKuehlung","source":"stromKuehlung","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"waermeKuehlung","source":"waermeKuehlung","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"kaiAnzahl","source":null,"transform":"constant","default":0,"status":"defaulted"},{"column":"kaiDatum","source":null,"transform":"constant","default":"00.01.1900","status":"defaulted"},{"column":"baujahrHzErz","source":"heizung_baujahr|misch_heizung_baujahr","transform":"year_or_fallback_baujahr","default":null,"status":"mapped"},{"column":"TW_Solar","source":"warmwasser_type","transform":"warmwasser_solar_01","default":0,"status":"derived"},{"column":"HZ_Solar","source":"hz_solar","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"TW_WP","source":"warmwasser_type","transform":"warmwasser_wp_01","default":0,"status":"defaulted"},{"column":"HZ_WP","source":"heizung_waermeerzeuger|misch_heizung_waermeerzeuger","transform":"heating_wp_01","default":0,"status":"derived"},{"column":"Fensterlüftung","source":"lueftung_type|nwg_lueftung|misch_lueftung","transform":"vent_window_01","default":0,"status":"mapped"},{"column":"Schachtlüftung","source":"lueftung_type|nwg_lueftung|misch_lueftung","transform":"vent_shaft_01","default":0,"status":"mapped"},{"column":"L_Mit_WRG","source":"lueftung_type|nwg_lueftung|misch_lueftung","transform":"vent_wrg_yes_01","default":0,"status":"mapped"},{"column":"L_Ohne_WRG","source":"lueftung_type|nwg_lueftung|misch_lueftung","transform":"vent_without_wrg_01","default":0,"status":"mapped"},{"column":"Modernisierung","source":"modernisierungsjahr|anlass","transform":"modernisierung_year_from_field_or_0","default":0,"status":"mapped"},{"column":"Dach1_Dämmung","source":"daemmstaerke_dach_cm","transform":"number_locale_de","default":0,"status":"mapped"},{"column":"Wand1_Dämmung","source":"daemmstaerke_aussenwand_cm","transform":"number_locale_de","default":0,"status":"mapped"},{"column":"Boden1_Dämmung","source":"daemmstaerke_boden_cm","transform":"number_locale_de","default":0,"status":"mapped"},{"column":"bjFensterAustausch","source":"fenster_baujahr","transform":"year_or_0","default":0,"status":"mapped"},{"column":"ETr1_Kategorie","source":"etr1_kategorie","transform":"bk_code_identity","default":"BK_GAS","status":"mapped"},{"column":"ETr1_Anteil_erneuerbar","source":"etr1_anteil_erneuerbar","transform":"number_locale_de","default":0,"status":"mapped"},{"column":"ETr1_Anteil_KWK","source":"etr1_anteil_kwk","transform":"number_locale_de","default":0,"status":"mapped"},{"column":"ETr1_isFw","source":"etr1_is_fw","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"ETr1_gebaeudeNahErzeugt","source":"etr1_gebaeude_nah","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"ETr1_Jahr1_von","source":"etr1_periods[0].von","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr1_bis","source":"etr1_periods[0].bis","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr1_Menge","source":"etr1_periods[0].menge","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_TWW","source":"etr1_tww","transform":"ja_nein_to_01","default":1,"status":"mapped"},{"column":"ETr1_Jahr1_Menge_TWW","source":"etr1_periods[0].menge_tww","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr1_Jahr1_Leerstand","source":"etr1_periods[0].leerstand_pct","transform":"from_repeater_period","default":0,"status":"mapped"},{"column":"ETr1_Jahr2_von","source":"etr1_periods[1].von","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr2_bis","source":"etr1_periods[1].bis","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr2_Menge","source":"etr1_periods[1].menge","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr2_Menge_TWW","source":"etr1_periods[1].menge_tww","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr1_Jahr2_Leerstand","source":"etr1_periods[1].leerstand_pct","transform":"from_repeater_period","default":0,"status":"mapped"},{"column":"ETr1_Jahr3_von","source":"etr1_periods[2].von","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr3_bis","source":"etr1_periods[2].bis","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr3_Menge","source":"etr1_periods[2].menge","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr3_Menge_TWW","source":"etr1_periods[2].menge_tww","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr1_Jahr3_Leerstand","source":"etr1_periods[2].leerstand_pct","transform":"from_repeater_period","default":0,"status":"mapped"},{"column":"ETr1_PrimFaktor","source":"etr1_primfaktor","transform":"number_locale_de","default":"","status":"mapped"},{"column":"ETr2_Kategorie","source":"etr2_kategorie","transform":"bk_code_identity","default":"","status":"mapped"},{"column":"ETr2_Jahr1_von","source":"etr2_periods[0].von","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr1_bis","source":"etr2_periods[0].bis","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr1_Menge","source":"etr2_periods[0].menge","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_TWW","source":"etr2_tww","transform":"ja_nein_to_01","default":"","status":"mapped"},{"column":"ETr2_Jahr1_Menge_TWW","source":"etr2_periods[0].menge_tww","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr1_Leerstand","source":"etr2_periods[0].leerstand_pct","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr2_von","source":"etr2_periods[1].von","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr2_bis","source":"etr2_periods[1].bis","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr2_Menge","source":"etr2_periods[1].menge","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr2_Menge_TWW","source":"etr2_periods[1].menge_tww","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr2_Leerstand","source":"etr2_periods[1].leerstand_pct","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr3_von","source":"etr2_periods[2].von","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr3_bis","source":"etr2_periods[2].bis","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr3_Menge","source":"etr2_periods[2].menge","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr3_Menge_TWW","source":"etr2_periods[2].menge_tww","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr3_Leerstand","source":"etr2_periods[2].leerstand_pct","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr1_Heizung","source":"etr1_heizung","transform":"ja_nein_to_01","default":1,"status":"mapped"},{"column":"ETr2_Heizung","source":"etr2_heizung","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"ETr2_PrimFaktor","source":"etr2_primfaktor","transform":"number_locale_de","default":"","status":"mapped"},{"column":"Gebäudetyp","source":null,"transform":"constant","default":0,"status":"mapped"},{"column":"Datenerhebung","source":null,"transform":"constant","default":0,"status":"defaulted"},{"column":"BedarfVerbrauch","source":"ausweisart","transform":"map_ausweisart_to_bv","default":"V","status":"mapped"},{"column":"ETr2_Anteil_KWK","source":"etr2_anteil_kwk","transform":"number_locale_de","default":"","status":"mapped"},{"column":"ETr2_Anteil_erneuerbar","source":"etr2_anteil_erneuerbar","transform":"number_locale_de","default":"","status":"mapped"},{"column":"ETr2_isFw","source":"etr2_is_fw","transform":"ja_nein_to_01","default":"","status":"mapped"},{"column":"ETr2_gebaeudeNahErzeugt","source":"etr2_gebaeude_nah","transform":"ja_nein_to_01","default":"","status":"mapped"}]},"NWG":{"columns":[{"column":"BOM","source":null,"transform":"constant","default":"","status":"defaulted"},{"column":"ID","source":"export_meta.order_id","transform":"id_safe_filename","default":null,"status":"derived"},{"column":"nichtWohnGeb","source":"gebaeudetyp","transform":"nwg_flag_01","default":1,"status":"mapped"},{"column":"Anlass","source":"anlass","transform":"map_anlass_to_ag_code","default":"AG_VERMIETUNG","status":"mapped"},{"column":"PLZ","source":"plz","transform":"string_trim","default":null,"status":"mapped"},{"column":"Ort","source":"ort","transform":"string_trim","default":null,"status":"mapped"},{"column":"Straße","source":"strasse","transform":"string_trim","default":null,"status":"mapped"},{"column":"Hausnr","source":"hausnummer","transform":"string_trim","default":null,"status":"mapped"},{"column":"Baujahr","source":"baujahr","transform":"year_int","default":null,"status":"mapped"},{"column":"Nutzung1_ID","source":"nwg_nutzung","transform":"map_nutzung_to_id","default":"1","status":"mapped"},{"column":"Nutzung1_Flaeche","source":"nwg_nettogrundflaeche","transform":"number_locale_de","default":null,"status":"mapped"},{"column":"Nutzung2_ID","source":null,"transform":"constant","default":"","status":"defaulted"},{"column":"Nutzung2_Flaeche","source":null,"transform":"constant","default":"","status":"defaulted"},{"column":"Nutzung3_ID","source":null,"transform":"constant","default":"","status":"defaulted"},{"column":"Nutzung3_Flaeche","source":null,"transform":"constant","default":"","status":"defaulted"},{"column":"Wohnfläche","source":"wohnflaeche|nwg_nettogrundflaeche","transform":"schema_dependent_area","default":null,"status":"mapped"},{"column":"gebaeudeteil","source":"gebaeudeanteil|gebaeudetyp","transform":"map_gebaeudeteil_gt","default":"GT_GANZES_GEB","status":"mapped"},{"column":"Keller_beheizt","source":"keller|keller_heizstatus","transform":"map_keller_beheizt_01","default":0,"status":"mapped"},{"column":"bilderStreams_0","source":"upload_export.slot0","transform":"basename_or_empty","default":"","status":"mapped"},{"column":"bilderStreams_1","source":"upload_export.slot1","transform":"basename_or_empty","default":"","status":"mapped"},{"column":"bilderStreams_2","source":"upload_export.slot2","transform":"basename_or_empty","default":"","status":"mapped"},{"column":"Klimatisiert","source":"klimatisiert","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"passiveKuehlung","source":"passiveKuehlung","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"fernKuehlung","source":"fernKuehlung","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"stromKuehlung","source":"stromKuehlung","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"waermeKuehlung","source":"waermeKuehlung","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"kaiAnzahl","source":null,"transform":"constant","default":0,"status":"defaulted"},{"column":"kaiDatum","source":null,"transform":"constant","default":"00.01.1900","status":"defaulted"},{"column":"baujahrHzErz","source":"heizung_baujahr|misch_heizung_baujahr","transform":"year_or_fallback_baujahr","default":null,"status":"mapped"},{"column":"TW_Solar","source":"warmwasser_type","transform":"warmwasser_solar_01","default":0,"status":"derived"},{"column":"HZ_Solar","source":"hz_solar","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"TW_WP","source":"warmwasser_type","transform":"warmwasser_wp_01","default":0,"status":"defaulted"},{"column":"HZ_WP","source":"heizung_waermeerzeuger|misch_heizung_waermeerzeuger","transform":"heating_wp_01","default":0,"status":"derived"},{"column":"Fensterlüftung","source":"lueftung_type|nwg_lueftung|misch_lueftung","transform":"vent_window_01","default":0,"status":"mapped"},{"column":"Schachtlüftung","source":"lueftung_type|nwg_lueftung|misch_lueftung","transform":"vent_shaft_01","default":0,"status":"mapped"},{"column":"L_Mit_WRG","source":"lueftung_type|nwg_lueftung|misch_lueftung","transform":"vent_wrg_yes_01","default":0,"status":"mapped"},{"column":"L_Ohne_WRG","source":"lueftung_type|nwg_lueftung|misch_lueftung","transform":"vent_without_wrg_01","default":0,"status":"mapped"},{"column":"Modernisierung","source":"modernisierungsjahr|anlass","transform":"modernisierung_year_from_field_or_0","default":0,"status":"mapped"},{"column":"Dach1_Dämmung","source":"daemmstaerke_dach_cm","transform":"number_locale_de","default":0,"status":"mapped"},{"column":"Wand1_Dämmung","source":"daemmstaerke_aussenwand_cm","transform":"number_locale_de","default":0,"status":"mapped"},{"column":"Boden1_Dämmung","source":"daemmstaerke_boden_cm","transform":"number_locale_de","default":0,"status":"mapped"},{"column":"bjFensterAustausch","source":"fenster_baujahr","transform":"year_or_0","default":0,"status":"mapped"},{"column":"ETr1_Kategorie","source":"etr1_kategorie","transform":"bk_code_identity","default":"BK_GAS","status":"mapped"},{"column":"ETr1_Anteil_erneuerbar","source":"etr1_anteil_erneuerbar","transform":"number_locale_de","default":0,"status":"mapped"},{"column":"ETr1_Anteil_KWK","source":"etr1_anteil_kwk","transform":"number_locale_de","default":0,"status":"mapped"},{"column":"ETr1_isFw","source":"etr1_is_fw","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"ETr1_gebaeudeNahErzeugt","source":"etr1_gebaeude_nah","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"ETr1_Jahr1_von","source":"etr1_periods[0].von","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr1_bis","source":"etr1_periods[0].bis","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr1_Menge","source":"etr1_periods[0].menge","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_TWW","source":"etr1_tww","transform":"ja_nein_to_01","default":1,"status":"mapped"},{"column":"ETr1_Jahr1_Menge_TWW","source":"etr1_periods[0].menge_tww","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr1_Jahr1_Leerstand","source":"etr1_periods[0].leerstand_pct","transform":"from_repeater_period","default":0,"status":"mapped"},{"column":"ETr1_Jahr2_von","source":"etr1_periods[1].von","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr2_bis","source":"etr1_periods[1].bis","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr2_Menge","source":"etr1_periods[1].menge","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr2_Menge_TWW","source":"etr1_periods[1].menge_tww","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr1_Jahr2_Leerstand","source":"etr1_periods[1].leerstand_pct","transform":"from_repeater_period","default":0,"status":"mapped"},{"column":"ETr1_Jahr3_von","source":"etr1_periods[2].von","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr3_bis","source":"etr1_periods[2].bis","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr3_Menge","source":"etr1_periods[2].menge","transform":"from_repeater_period","default":null,"status":"mapped"},{"column":"ETr1_Jahr3_Menge_TWW","source":"etr1_periods[2].menge_tww","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr1_Jahr3_Leerstand","source":"etr1_periods[2].leerstand_pct","transform":"from_repeater_period","default":0,"status":"mapped"},{"column":"ETr1_PrimFaktor","source":"etr1_primfaktor","transform":"number_locale_de","default":"","status":"mapped"},{"column":"ETr2_Kategorie","source":"etr2_kategorie","transform":"bk_code_identity","default":"","status":"mapped"},{"column":"ETr2_Kuehlen","source":"klimatisiert","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"ETr2_Lueften","source":"nwg_lueftung","transform":"nwg_etr2_lueften_01","default":0,"status":"derived"},{"column":"ETr2_Feuchte","source":null,"transform":"constant","default":0,"status":"defaulted"},{"column":"ETr2_Licht","source":"nwg_beleuchtung","transform":"nwg_etr2_licht_01","default":1,"status":"mapped"},{"column":"ETr2_ZusatzHz","source":null,"transform":"constant","default":0,"status":"defaulted"},{"column":"ETr2_Sonst","source":null,"transform":"constant","default":1,"status":"defaulted"},{"column":"ETr2_Jahr1_von","source":"etr2_periods[0].von","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr1_bis","source":"etr2_periods[0].bis","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr1_Menge","source":"etr2_periods[0].menge","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_TWW","source":"etr2_tww","transform":"ja_nein_to_01","default":"","status":"mapped"},{"column":"ETr2_Jahr1_Menge_TWW","source":"etr2_periods[0].menge_tww","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr1_Leerstand","source":"etr2_periods[0].leerstand_pct","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr2_von","source":"etr2_periods[1].von","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr2_bis","source":"etr2_periods[1].bis","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr2_Menge","source":"etr2_periods[1].menge","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr2_Menge_TWW","source":"etr2_periods[1].menge_tww","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr2_Leerstand","source":"etr2_periods[1].leerstand_pct","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr3_von","source":"etr2_periods[2].von","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr3_bis","source":"etr2_periods[2].bis","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr3_Menge","source":"etr2_periods[2].menge","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr3_Menge_TWW","source":"etr2_periods[2].menge_tww","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr2_Jahr3_Leerstand","source":"etr2_periods[2].leerstand_pct","transform":"from_repeater_period","default":"","status":"mapped"},{"column":"ETr1_Heizung","source":"etr1_heizung","transform":"ja_nein_to_01","default":1,"status":"mapped"},{"column":"ETr2_Heizung","source":"etr2_heizung","transform":"ja_nein_to_01","default":0,"status":"mapped"},{"column":"Gebäudetyp","source":null,"transform":"constant","default":0,"status":"mapped"},{"column":"Datenerhebung","source":null,"transform":"constant","default":0,"status":"defaulted"},{"column":"BedarfVerbrauch","source":"ausweisart","transform":"map_ausweisart_to_bv","default":"V","status":"mapped"},{"column":"ETr2_Anteil_KWK","source":"etr2_anteil_kwk","transform":"number_locale_de","default":"","status":"mapped"},{"column":"ETr2_Anteil_erneuerbar","source":"etr2_anteil_erneuerbar","transform":"number_locale_de","default":"","status":"mapped"},{"column":"ETr2_isFw","source":"etr2_is_fw","transform":"ja_nein_to_01","default":"","status":"mapped"},{"column":"ETr2_gebaeudeNahErzeugt","source":"etr2_gebaeude_nah","transform":"ja_nein_to_01","default":"","status":"mapped"},{"column":"stromAufzugEnthalten","source":null,"transform":"constant","default":0,"status":"defaulted"}]}},"enums":{"anlass_to_ag_code":{"Vermietung":"AG_VERMIETUNG","Verkauf":"AG_VERMIETUNG","Sonstiges":"AG_SONST","Neubau":"AG_SONST","Modernisierung":"AG_SONST"},"ausweisart_to_bv":{"Verbrauchsausweis":"V","Bedarfsausweis":"B","weiß ich nicht":"V"},"gebaeudeteil_to_gt":{"Gesamtgebäude":"GT_GANZES_GEB","Wohnen":"GT_TEIL_DES_WG"},"heizung_to_bk":{"Öl":"BK_OEL","Gas":"BK_GAS","Fernwärme":"BK_FW0","Wärmepumpe":"BK_STROM","Biomasse":"BK_HOLZ","Elektro":"BK_STROM","Einzelöfen":"BK_HOLZ","BHKW / KWK":"BK_GAS","Hybridheizung":"BK_GAS"},"nwg_nutzung_to_id":{"Büro / Verwaltung":"1","Praxis / Gesundheit":"20","Schule / Kita":"33","Einzelhandel":"50","Gastronomie":"53","Lager / Produktion":"51","Sonstiges NWG":"91"},"nwg_beleuchtung_to_etr2_licht":{"Standard":1,"LED":1,"unbekannt":1}},"validation":{"critical_columns":["ID","Anlass","BedarfVerbrauch","PLZ","Ort","Straße","Hausnr","Baujahr"],"date_format":"dd.mm.yyyy","warnings":{"unmapped_columns":"Include in export_warnings block","defaulted_columns":"Log default application with column name"}}};
const BUILD_INFO = { commit: "0ecdbc4", builtAt: "2026-04-09T18:36:07.4286407+03:00" };

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
  smart_step2_split: (state, changedKey) => {
    // If the user explicitly changes the building type, do not fight them with auto-classification.
    if (changedKey === "gebaeudetyp") state.__gebaeudetyp_manual = "1";

    // Keep existing WG smart-suggestions (only on Baujahr changes).
    if (changedKey === "baujahr") {
      const sug = smartSuggestForWG(state.baujahr);
      if (sug) {
        for (const [k, v] of Object.entries(sug)) {
          if (isEmpty(state[k])) state[k] = v;
        }
      }
    }

    // Auto-classification (Relevanz-Check) per 06.02 spec.
    // If user edits the relevanz-check inputs, re-enable auto classification (manual override is no longer trusted).
    if (changedKey === "ausweisart") {
      if (state.ausweisart === "Bedarfsausweis") {
        if (String(state.misch_nutzung || "") === "Gewerbe") state.misch_nutzung = "";
        if (String(state.misch_gewerbe_anteil || "") === "über 50%") state.misch_gewerbe_anteil = "";
        if (String(state.gebaeudetyp || "") === "NWG") state.gebaeudetyp = "";
      }
      return;
    }

    if (changedKey !== "misch_nutzung" && changedKey !== "misch_gewerbe_anteil") return;
    state.__gebaeudetyp_manual = "";

    const nutzung = String(state.misch_nutzung || "");
    if (nutzung && nutzung !== "Kombination") {
      // Not needed if there's no combination.
      state.misch_gewerbe_anteil = "";
    }

    const infer = () => {
      if (nutzung === "Wohnen") return "WG";
      if (nutzung === "Gewerbe") return "NWG";
      if (nutzung === "Kombination") {
        const a = String(state.misch_gewerbe_anteil || "");
        if (a === "unter 10%") return "WG";      // <= 10%
        if (a === "ca. 10–50%") return "MISCH";  // 10–50%
        if (a === "über 50%") return "NWG";      // > 50%
      }
      return "";
    };

    const nextType = infer();
    if (nextType) state.gebaeudetyp = nextType;
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
        if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Fensterlüftung";
        if (isEmpty(state.heizung_kesseltyp)) state.heizung_kesseltyp = "Konstanttemperatur";
      } else if (y <= 1994) {
        if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "Vorhangfassade";
        if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "mittel (30–60%)";
        if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Fensterlüftung";
        if (isEmpty(state.heizung_kesseltyp)) state.heizung_kesseltyp = "Niedertemperatur";
      } else if (y <= 2008) {
        if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "WDVS";
        if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "mittel (30–60%)";
        if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Zentrale Lüftungsanlage";
        if (isEmpty(state.heizung_kesseltyp)) state.heizung_kesseltyp = "Brennwert";
      } else {
        if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "WDVS";
        if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "mittel (30–60%)";
        if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Lüftung mit Wärmerückgewinnung";
        if (isEmpty(state.heizung_kesseltyp)) state.heizung_kesseltyp = "Brennwert";
      }
    }

    // --- by Nutzung (overrides only if empty, to avoid fighting user)
    if (nutzung === "Büro / Verwaltung" || nutzung === "Schule / Kita") {
      if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "Vorhangfassade";
      if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "hoch (>60%)";
      if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Zentrale Lüftungsanlage";
    } else if (nutzung === "Lager / Produktion") {
      if (isEmpty(state.nwg_aussenwand_simple)) state.nwg_aussenwand_simple = "Stahlbeton";
      if (isEmpty(state.nwg_fensteranteil)) state.nwg_fensteranteil = "gering (<30%)";
    } else if (nutzung === "Einzelhandel") {
      if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Zentrale Lüftungsanlage";
      if (isEmpty(state.klimatisiert)) state.klimatisiert = "Ja";
      if (isEmpty(state.stromKuehlung)) state.stromKuehlung = "Ja";
    } else if (nutzung === "Gastronomie") {
      if (isEmpty(state.nwg_lueftung)) state.nwg_lueftung = "Mechanische Abluft";
      if (isEmpty(state.klimatisiert)) state.klimatisiert = "Ja";
      if (isEmpty(state.stromKuehlung)) state.stromKuehlung = "Ja";
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

// Upload helpers (WP plugin)
// Kept as a separate module to keep the main form orchestrator slimmer.
const EAUpload = (() => {
  const EA_UPLOAD_CFG = (typeof window !== "undefined" && window.EA_CONFIG) ? window.EA_CONFIG : null;
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
    if (!EA_UPLOAD_CFG || !EA_UPLOAD_CFG.orderId) return null;
    const orderId = String(EA_UPLOAD_CFG.orderId);
    const nonce = EA_UPLOAD_CFG.nonce ? String(EA_UPLOAD_CFG.nonce) : "";
    const uploadUrl = EA_UPLOAD_CFG.uploadUrl ? String(EA_UPLOAD_CFG.uploadUrl) : "";
    const downloadUrl = EA_UPLOAD_CFG.uploadDownloadUrl ? String(EA_UPLOAD_CFG.uploadDownloadUrl) : "";
    const deleteUrl = EA_UPLOAD_CFG.uploadDeleteUrl ? String(EA_UPLOAD_CFG.uploadDeleteUrl) : "";
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

  async function apiUploadFile(fieldKey, file) {
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

  return {
    UPLOAD_FILE_CACHE,
    UPLOAD_INFLIGHT,
    bytesHuman,
    extOf,
    isProbablyImage,
    getUploadCfg,
    buildUrl,
    apiUploadFile,
    apiDeleteFile,
  };
})();
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
    if (!(f.key in DEFAULTS)) {
      if (f.type === "repeater") {
        const defaultItems = Math.max(0, Number(f.defaultItems) || 0);
        DEFAULTS[f.key] = Array.from({ length: defaultItems }, () => ({}));
      } else if (f.type === "periods3") {
        DEFAULTS[f.key] = [];
      } else {
        DEFAULTS[f.key] = "";
      }
    }
  }
}

let state = deepClone(DEFAULTS);
let stepIndex = 0;
const ENABLE_GET_PREFILL = true;

const FIELD_DEFS = {};
for (const st of (FORM_SPEC.steps || [])) {
  for (const f of collectFieldsFromStep(st)) {
    if (!f || !f.key) continue;
    FIELD_DEFS[f.key] = f;
  }
}

const TIPS = TOOL_TIPS_DE || {};

// WP injects `window.EA_CONFIG` via wp_localize_script. Do NOT redeclare `EA_CONFIG` here
// (it would conflict with the global `var EA_CONFIG` and crash with a SyntaxError).
const EA_CFG = (typeof window !== "undefined" && window.EA_CONFIG) ? window.EA_CONFIG : null;
const EA_ASSETS_BASE = EA_CFG && EA_CFG.assetsBaseUrl ? String(EA_CFG.assetsBaseUrl) : "";

const {
  UPLOAD_FILE_CACHE,
  UPLOAD_INFLIGHT,
  bytesHuman,
  extOf,
  isProbablyImage,
  getUploadCfg,
  buildUrl,
  apiUploadFile,
  apiDeleteFile,
} = EAUpload;

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

function resolveHomeUrl(p) {
  const s = String(p || "").trim();
  if (/^https?:\/\//i.test(s) || s.startsWith("/")) return s || "/";
  if (EA_CFG && EA_CFG.homeUrl) return String(EA_CFG.homeUrl);
  return "/";
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
  groupStepper: document.getElementById("groupStepper"),
  stepTitle: document.getElementById("stepTitle"),
  stepMeta: document.getElementById("stepMeta"),
  stepDesc: document.getElementById("stepDesc"),

  stepIntro: document.getElementById("stepIntro"),
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
  footerBar: document.getElementById("footerBar"),
  btnAdminExportCsv: document.getElementById("btnAdminExportCsv"),

  overviewProgress: document.getElementById("overviewProgress"),
  overviewPriceWrap: document.getElementById("overviewPriceWrap"),
  overviewPriceSpacer: document.getElementById("overviewPriceSpacer"),
  overviewPrice: document.getElementById("overviewPrice"),
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

function resolveStepTitle(step) {
  const variants = Array.isArray(step && step.titleByCond) ? step.titleByCond : [];
  for (const variant of variants) {
    if (!variant || !variant.when) continue;
    if (evalCond(variant.when, state)) return String(variant.value || "");
  }
  return step && step.title ? String(step.title) : "";
}

function resolveStepIntro(step) {
  const variants = Array.isArray(step && step.introByCond) ? step.introByCond : [];
  for (const variant of variants) {
    if (!variant || !variant.when) continue;
    if (evalCond(variant.when, state)) return variant.value || null;
  }
  return step && step.intro ? step.intro : null;
}

function resolveFieldProp(field, prop) {
  if (!field || !prop) return undefined;
  const variants = Array.isArray(field[prop + "ByCond"]) ? field[prop + "ByCond"] : [];
  for (const variant of variants) {
    if (!variant || !variant.when) continue;
    if (evalCond(variant.when, state)) return variant.value;
  }
  return field[prop];
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

function repeaterFieldWhen(field, itemState) {
  if (!field || !field.when) return true;
  return evalCond(field.when, { ...state, ...(itemState || {}) });
}

function calcSumValue(field) {
  if (!field || !Array.isArray(field.calcSumOf) || !field.calcSumOf.length) return null;
  let any = false;
  let sum = 0;
  field.calcSumOf.forEach((k) => {
    const n = Number(state[k]);
    if (Number.isFinite(n)) {
      sum += n;
      any = true;
    }
  });
  return any ? String(sum) : "";
}

function optionsForField(field) {
  const raw =
    field.options ||
    (field.optionsRef && FORM_SPEC.optionSets && FORM_SPEC.optionSets[field.optionsRef]) ||
    [];

  return raw.filter((opt) => !opt.when || evalCond(opt.when, state));
}

function rawOptionsForField(field) {
  return field.options ||
    (field.optionsRef && FORM_SPEC.optionSets && FORM_SPEC.optionSets[field.optionsRef]) ||
    [];
}

function isJaNeinField(field) {
  if (!field) return false;
  if (field.optionsRef === "ja_nein_radio") return true;
  const opts = rawOptionsForField(field);
  return Array.isArray(opts)
    && opts.length === 2
    && String(opts[0] && opts[0].value) === "Ja"
    && String(opts[1] && opts[1].value) === "Nein";
}

function parseBoolish(raw) {
  const s = normalizeLookupKey(raw);
  if (!s) return null;
  if (["1", "true", "yes", "ja", "on"].includes(s)) return true;
  if (["0", "false", "no", "nein", "off"].includes(s)) return false;
  return null;
}

function normalizeGetPrefillValue(field, rawValue) {
  if (!field) return undefined;
  const raw = rawValue == null ? "" : String(rawValue);

  if (field.type === "number" || field.type === "counter") {
    const n = Number(raw);
    return Number.isFinite(n) ? String(raw) : undefined;
  }

  if (field.type === "checkbox") {
    const b = parseBoolish(raw);
    return b == null ? undefined : b;
  }

  if (field.type === "select" || field.type === "radio") {
    if (isJaNeinField(field)) {
      const b = parseBoolish(raw);
      const normalized = b == null ? raw : (b ? "Ja" : "Nein");
      return ["Ja", "Nein"].includes(String(normalized)) ? String(normalized) : undefined;
    }
    const opts = rawOptionsForField(field);
    return opts.some((opt) => String(opt && opt.value) === raw) ? raw : undefined;
  }

  if (field.type === "text") return raw;
  return undefined;
}

function applyGetPrefillToEmptyFields() {
  if (!ENABLE_GET_PREFILL) return;
  let params = null;
  try {
    params = new URLSearchParams(String(location.search || ""));
  } catch (e) {
    return;
  }
  params.forEach((rawValue, rawKey) => {
    const key = String(rawKey || "");
    if (!key.startsWith("ea_")) return;
    const fieldKey = key.slice(3);
    if (!fieldKey || !(fieldKey in state) || !isEmpty(state[fieldKey])) return;
    const field = FIELD_DEFS[fieldKey];
    if (!field) return;
    if (["file", "repeater", "periods3"].includes(String(field.type || ""))) return;
    const next = normalizeGetPrefillValue(field, rawValue);
    if (next === undefined) return;
    state[fieldKey] = next;
  });
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

function getPriceConfig() {
  const fallback = {
    verbrauch_wg: 59,
    verbrauch_gewerbe: 79,
    bedarf_wg: 129,
    bedarf_gewerbe: 139,
  };
  const cfg = EA_CFG && EA_CFG.prices && typeof EA_CFG.prices === "object" ? EA_CFG.prices : {};
  const out = { ...fallback };
  for (const k of Object.keys(fallback)) {
    const n = Number(cfg[k]);
    if (Number.isFinite(n) && n >= 0) out[k] = n;
  }
  return out;
}

function computeOverviewPrice() {
  const prices = getPriceConfig();
  const a = String(state.ausweisart || "");
  const t = String(state.gebaeudetyp || "");

  if (a === "Verbrauchsausweis") {
    if (t === "WG") return prices.verbrauch_wg;
    if (t === "NWG" || t === "MISCH") return prices.verbrauch_gewerbe;
    return null;
  }
  if (a === "Bedarfsausweis") {
    if (t === "WG") return prices.bedarf_wg;
    if (t === "NWG" || t === "MISCH") return prices.bedarf_gewerbe;
    return null;
  }
  return null;
}

function formatOverviewPrice(v) {
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0) return "—";
  const whole = Math.abs(n - Math.round(n)) < 0.000001;
  const formatted = new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(n);
  return formatted + " € inkl. MwSt.";
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
  return clamp(pct, 2, 87);
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
  return el("div", { class: "field-info" },
    el("span", { class: "field-info-ico", "aria-hidden": "true" }),
    el("span", { class: "field-info-text", html: tipToHtml(TIPS[key]) })
  );
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

function renderFieldLabelSpan(field, className) {
  const attrs = className ? { class: className } : null;
  const labelHtml = resolveFieldProp(field, "labelHtml");
  const label = resolveFieldProp(field, "label");
  if (labelHtml) return el("span", Object.assign({}, attrs || {}, { html: String(labelHtml) }));
  return el("span", attrs, label != null ? String(label) : "");
}

function renderLabel(field) {
  const pieces = [renderFieldLabelSpan(field)];
  if (isRequired(field)) pieces.push(el("span", { class: "req", "aria-hidden": "true" }, "*"));
  if (field.tipGrid && Array.isArray(field.tipGrid) && field.tipGrid.length) {
    const grid = el("span", { class: "tipgrid" });
    field.tipGrid.forEach(function (item) {
      const card = el("span", { class: "tipgrid-item" });
      card.appendChild(el("img", { src: resolveAssetUrl(String(item.img || "")), alt: String(item.label || ""), loading: "lazy" }));
      card.appendChild(el("span", null, String(item.label || "")));
      grid.appendChild(card);
    });
    pieces.push(
      el("span", { class: "tip", role: "button", tabindex: "0", "aria-label": "Info" },
        el("span", { class: "tipbox" }, grid)
      )
    );
  } else if (field.tipKey && TIPS[field.tipKey]) {
    pieces.push(
      el(
        "span",
        { class: "tip", role: "button", tabindex: "0", "aria-label": "Info" },
        el("span", { class: "tipbox", html: tipToHtml(TIPS[field.tipKey]) })
      )
    );
  }
  return el("label", null, ...pieces);
}

function renderChecklist(field) {
  const wrap = el("div", { class: "checklistbox" + (field.variant ? (" " + String(field.variant)) : "") });
  const isThankYouCard = String(field.variant || "") === "thankyou-card";

  const titleEl = field.title ? el("div", { class: "checklist-title" }, String(field.title)) : null;
  const textEl = field.text ? el("div", { class: "checklist-text muted small" }, String(field.text)) : null;
  const imgEl = field.img
    ? el("img", { class: "checklist-img", src: resolveAssetUrl(String(field.img)), alt: String(field.imgAlt || field.title || "Example") })
    : null;

  if (isThankYouCard) {
    if (imgEl) wrap.appendChild(imgEl);
    if (titleEl) wrap.appendChild(titleEl);
    if (textEl) wrap.appendChild(textEl);
  } else {
    if (titleEl) wrap.appendChild(titleEl);
    if (textEl) wrap.appendChild(textEl);
    if (imgEl) wrap.appendChild(imgEl);
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

  if (field.note) {
    wrap.appendChild(el("div", { class: "checklist-note-block muted small" }, String(field.note)));
  }

  if (field.ctaLabel) {
    const href = resolveHomeUrl(field.ctaHref);
    wrap.appendChild(
      el(
        "div",
        { class: "checklist-actions" },
        el(
          "a",
          { class: "btn primary thankyou-home-btn", href },
          el("span", null, String(field.ctaLabel)),
          el(
            "span",
            { class: "btn-icon", "aria-hidden": "true" },
            el(
              "svg",
              { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
              el("path", { d: "M3.75 9H14.25", stroke: "#2F4109", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
              el("path", { d: "M9.75 13.5L14.25 9", stroke: "#2F4109", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
              el("path", { d: "M9.75 4.5L14.25 9", stroke: "#2F4109", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })
            )
          )
        )
      )
    );
  }

  return wrap;
}

function isJaNeinRadio(field) {
  return field
    && field.type === "radio"
    && field.optionsRef === "ja_nein_radio";
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
      el("span", null, resolveStepTitle(st))
    );
    dom.topStepper.appendChild(pill);
  });
}

var GROUP_ORDER = ["Gebäude", "Technik", "Zusatz", "Abschluss"];

function renderGroupStepper() {
  if (!dom.groupStepper) return;
  const steps = visibleSteps();
  const currentSt = steps[stepIndex];
  const currentGroup = currentSt && currentSt.group ? currentSt.group : null;

  // Count total and done steps per group
  var groupData = {};
  GROUP_ORDER.forEach(function(g) { groupData[g] = { total: 0, done: 0 }; });
  steps.forEach(function(st, idx) {
    var g = st.group;
    if (!g || !groupData[g]) return;
    groupData[g].total++;
    if (idx < stepIndex) groupData[g].done++;
  });

  dom.groupStepper.innerHTML = "";
  GROUP_ORDER.forEach(function(g) {
    var d = groupData[g];
    if (!d || d.total === 0) return;
    var isActive = g === currentGroup;
    var isDone = d.done === d.total;
    var groupIdx = GROUP_ORDER.indexOf(g) + 1;
    var firstIdx = -1;
    steps.forEach(function(st, idx) { if (firstIdx === -1 && st.group === g) firstIdx = idx; });
    var locked = firstIdx > stepIndex;
    var badge = el("div", {
      class: "group-pill" + (isActive ? " active" : "") + (isDone ? " done" : "") + (locked ? " locked" : ""),
      ...(locked ? {} : { onclick: function() { stepIndex = firstIdx; render(); } }),
    },
      el("span", { class: "num" }, String(groupIdx)),
      el("span", { class: "group-label" }, g),
      el("span", { class: "group-count" }, String(d.done) + "/" + String(d.total))
    );
    dom.groupStepper.appendChild(badge);
  });
}

function runPlausibilityWarnings() {
  const warnings = [];
  const y = Number(state.baujahr);
  // Spec examples:
  // - alte Fenster + Neubau -> prüfen
  // - Baujahr < 1960 + Fußbodenheizung -> prüfen
  // - Wärmepumpe + Heizkörper -> Hinweis
  if (Number.isFinite(y) && y >= 2000) {
    if (state.fenster_type === "Einfachverglasung" || state.fenster_type === "Kastenfenster") warnings.push("Alte Fenster + neueres Baujahr: bitte prüfen.");
  }
  if (Number.isFinite(y) && y < 1960 && state.heizung_waermeabgabe === "Fußbodenheizung") warnings.push("Baujahr < 1960 + Fußbodenheizung: bitte prüfen.");
  if (state.heizung_kesseltyp === "Wärmepumpe" && state.heizung_waermeabgabe === "Heizkörper") warnings.push("Wärmepumpe + Heizkörper: Hinweis (bitte prüfen).");

  // NWG SMART warnings (from spec examples)
  if (state.gebaeudetyp === "NWG") {
    if (state.nwg_fensteranteil === "hoch (>60%)") warnings.push("Hohe Glasflächen beeinflussen den Energiebedarf maßgeblich.");
    if (state.nwg_lueftung === "Zentrale Lüftungsanlage" || state.nwg_lueftung === "Lüftung mit Wärmerückgewinnung") warnings.push("Angaben zur Luftmenge können für den Bedarfsausweis erforderlich sein.");
    if (state.nwg_aussenwand_simple === "Vorhangfassade") warnings.push("Vorhangfassaden dieser Bauzeit besitzen häufig einen erhöhten Energiebedarf.");
  }
  if (warnings.length) {
    dom.warnBox.style.display = "";
    dom.warnText.textContent = warnings.join(" ");
  } else {
    dom.warnBox.style.display = "none";
    dom.warnText.textContent = "";
  }
}

function getAusweisAdvisorResult() {
  if (String(state.ausweisart || "") !== "weiß ich nicht") return null;

  const geb = String(state.wei_check_gebaeudetyp || "");
  const bg = String(state.wei_check_baugenehmigung || "");
  const mod = String(state.wei_check_modernisierung || "");
  const leer = String(state.wei_check_leerstand || "");
  const ready = !isEmpty(geb) && !isEmpty(bg) && !isEmpty(mod) && !isEmpty(leer);

  if (!ready) {
    return {
      ready: false,
      allowed: [],
      reason: "Bitte beantworten Sie zuerst alle vier Fragen des Energieausweis-Checks.",
    };
  }

  // Heuristic from "Welcher Energieausweis" check.
  const needBedarfByLeerstand = leer === "ge_30";
  const needBedarfByAltWG =
    geb === "wg_lt5" &&
    bg === "vor_1977" &&
    (mod === "keine" || mod === "unbekannt");

  if (needBedarfByLeerstand || needBedarfByAltWG) {
    return {
      ready: true,
      allowed: ["Bedarfsausweis"],
      reason: "Ergebnis: Bedarfsausweis erforderlich.",
    };
  }

  return {
    ready: true,
    allowed: ["Verbrauchsausweis", "Bedarfsausweis"],
    reason: "Ergebnis: Wahlfreiheit zwischen Verbrauchsausweis und Bedarfsausweis.",
  };
}

function renderAusweisAdvisor(step) {
  if (!step || String(step.id || "") !== "gebaeudetyp") return;
  if (String(state.ausweisart || "") !== "weiß ich nicht") return;

  const res = getAusweisAdvisorResult();
  if (!res) return;

  const box = el("div", { class: "banner full info field ausweis-advice" });
  box.appendChild(el("div", { class: "ico" }, "i"));
  const right = el("div", { class: "ausweis-advice-content" });
  right.appendChild(el("div", { class: "kicker" }, "Energieausweis-Check"));
  right.appendChild(el("p", null, String(res.reason || "")));

  if (res.ready && Array.isArray(res.allowed) && res.allowed.length) {
    right.appendChild(el("p", { class: "small muted" }, "Erlaubte Optionen: " + res.allowed.join(" / ")));
    const actions = el("div", { class: "ausweis-advice-actions" });
    res.allowed.forEach((opt) => {
      const b = el("button", { type: "button", class: "btn secondary" }, "Auswählen: " + opt);
      b.addEventListener("click", () => setValue("ausweisart", opt, step));
      actions.appendChild(b);
    });
    right.appendChild(actions);
  }

  box.appendChild(right);
  dom.form.appendChild(box);
}

function setValue(key, value, step, opts) {
  state[key] = value;

  // Keep spec constraint: if Ausweisart not Bedarf, remove invalid Anlass
  if (key === "ausweisart" && state.ausweisart !== "Bedarfsausweis") {
    if (state.anlass === "Neubau" || state.anlass === "Modernisierung") state.anlass = "";
  }
  // Keep Modernisierungsjahr consistent with visible conditions.
  if (key === "ausweisart" || key === "anlass") {
    if (state.ausweisart !== "Bedarfsausweis" || state.anlass !== "Modernisierung") {
      state.modernisierungsjahr = "";
    }
  }
  if (key === "ausweisart" && state.ausweisart !== "weiß ich nicht") {
    state.wei_check_gebaeudetyp = "";
    state.wei_check_baugenehmigung = "";
    state.wei_check_modernisierung = "";
    state.wei_check_leerstand = "";
  }
  // Cooling consistency: when no cooling, reset dependent flags/area.
  if (key === "klimatisiert" && state.klimatisiert === "Nein") {
    state.fernKuehlung = "Nein";
    state.passiveKuehlung = "Nein";
    state.waermeKuehlung = "Nein";
    state.stromKuehlung = "Nein";
    state.kuehlWfl = "";
  }
  if ((key === "fernKuehlung" || key === "passiveKuehlung" || key === "waermeKuehlung" || key === "stromKuehlung")
    && state[key] === "Ja" && isEmpty(state.klimatisiert)) {
    state.klimatisiert = "Ja";
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
      const calcVal = calcSumValue(field);
      if (calcVal !== null) state[key] = calcVal;
      const val = state[key];
      const isReadOnly = Boolean(field.readonly || field.calcSumOf);

      const wrap = el("div", { class: "field" + (field.full ? " full" : "") + (field.indent ? " field-indent" : ""), "data-key": key });
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
      } else if (field.type === "periods3") {
        const startKey = String(field.startKey || (key + "_start"));
        const unitKey = String(field.unitKey || (key + "_unit"));
        const startVal = String(state[startKey] || "");
        const unitVal = String(state[unitKey] || (field.defaultUnit || "kWh"));
        const oldItems = Array.isArray(state[key]) ? state[key] : [];
        const items = startVal ? makePeriodsFromStartToken(startVal, oldItems) : oldItems;
        if (startVal && JSON.stringify(items) !== JSON.stringify(oldItems)) state[key] = items;

        const startSel = el("select", { class: "control", name: startKey });
        startSel.appendChild(el("option", { value: "" }, "Abrechnungsstart wählen"));
        const now = new Date();
        const monthsBack = Number(field.startMonthsBack || 36);
        // Only starts where all 3 yearly periods are fully completed.
        const latestCompletedStart = addMonthsUTC(new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)), -36);
        for (let i = 0; i <= monthsBack; i++) {
          const st = addMonthsUTC(latestCompletedStart, -i);
          const token = String(st.getUTCFullYear()) + "-" + String(st.getUTCMonth() + 1).padStart(2, "0");
          const p1From = st;
          const p1To = endOfMonthUTC(addMonthsUTC(st, 11));
          const lbl = monthYearLabelDE(p1From) + " - " + monthYearLabelDE(p1To);
          const opt = el("option", { value: token }, lbl);
          if (token === startVal) opt.selected = true;
          startSel.appendChild(opt);
        }
        startSel.addEventListener("change", () => {
          const nextStart = String(startSel.value || "");
          const nextItems = nextStart ? makePeriodsFromStartToken(nextStart, Array.isArray(state[key]) ? state[key] : []) : [];
          state[startKey] = nextStart;
          setValue(key, nextItems, step);
        });

        const unitSel = el("select", { class: "control", name: unitKey });
        const unitOpts = Array.isArray(field.unitOptions) && field.unitOptions.length
          ? field.unitOptions
          : [{ value: "kWh", label: "kWh" }, { value: "m3", label: "m3" }, { value: "l", label: "l" }];
        unitOpts.forEach((u) => {
          const o = el("option", { value: u.value }, u.label);
          if (String(u.value) === unitVal) o.selected = true;
          unitSel.appendChild(o);
        });
        unitSel.addEventListener("change", () => setValue(unitKey, unitSel.value, step));

        const topGrid = el(
          "div",
          { class: "rep-grid rep-grid-periods3-top" },
          el("div", { class: "rep-cell" }, el("label", null, "Abrechnungsstart (Monat/Jahr)"), startSel),
          el("div", { class: "rep-cell" }, el("label", null, "Einheit"), unitSel)
        );

        const rows = el("div", { class: "rep-list rep-list-periods3" });
        const curItems = Array.isArray(state[key]) ? state[key] : [];
        for (let i = 0; i < 3; i++) {
          const p = curItems[i] || {};
          const row = el("div", { class: "rep-row rep-row-periods3" });
          const title = (!isEmpty(p.von) && !isEmpty(p.bis))
            ? ("Verbrauch für " + monthYearLabelDE(parseDateDE(p.von) || new Date()) + " - " + monthYearLabelDE(parseDateDE(p.bis) || new Date()))
            : ("Verbrauch Periode " + String(i + 1));
          row.appendChild(el("div", { class: "rep-head" }, el("b", null, title)));
          const grid = el("div", { class: "rep-grid rep-grid-periods3" });
          const c1 = el("div", { class: "rep-cell" });
          const inpM = el("input", { class: "control", type: "number", value: p.menge ?? "", placeholder: "z. B. 1000" });
          const unitText = String(unitOpts.find((u) => String(u.value) === unitVal)?.label || unitVal || "");
          inpM.setAttribute("aria-label", "Verbrauch Periode " + String(i + 1));
          inpM.setAttribute("min", "0.001");
          inpM.setAttribute("max", "999999999");
          inpM.addEventListener("input", () => {
            const next = Array.isArray(state[key]) ? [...state[key]] : [];
            const base = next[i] || { von: "", bis: "", menge_tww: "", leerstand_pct: 0 };
            next[i] = { ...base, menge: inpM.value };
            setValue(key, next, step, { render: false });
          });
          inpM.addEventListener("change", () => {
            const next = Array.isArray(state[key]) ? [...state[key]] : [];
            const base = next[i] || { von: "", bis: "", menge_tww: "", leerstand_pct: 0 };
            next[i] = { ...base, menge: inpM.value };
            setValue(key, next, step);
          });
          c1.appendChild(el("div", { class: "control-suffix-wrap" }, inpM, el("span", { class: "control-suffix" }, unitText)));
          grid.appendChild(c1);
          row.appendChild(grid);
          rows.appendChild(row);
        }

        control = el("div", { class: "repeater" }, topGrid, rows);
      } else if (field.type === "number" || field.type === "text") {
        control = el("input", { class: "control", name: key, type: field.type === "number" ? "number" : "text", value: val ?? "", placeholder: resolveFieldProp(field, "hint") || "" });
        if (field.min != null) control.setAttribute("min", String(field.min));
        if (field.max != null) control.setAttribute("max", String(field.max));
        if (isReadOnly) {
          control.readOnly = true;
          control.classList.add("readonly");
        } else {
          // While typing, do not re-render (otherwise the input element gets recreated and typing feels broken).
          control.addEventListener("input", () => setValue(key, control.value, step, { render: false }));
          // On commit (blur/enter), re-render so any dependent UI updates can happen.
          control.addEventListener("change", () => setValue(key, control.value, step));
        }
      } else if (field.type === "counter") {
        const min = field.min != null ? Number(field.min) : 0;
        const max = field.max != null ? Number(field.max) : 999999;
        const cur = Number(val || 0);
        const input = el("input", { class: "control", name: key, type: "number", value: val ?? "", placeholder: resolveFieldProp(field, "hint") || "" });
        if (field.min != null) input.setAttribute("min", String(field.min));
        if (field.max != null) input.setAttribute("max", String(field.max));
        input.addEventListener("input", () => setValue(key, input.value, step, { render: false }));
        input.addEventListener("change", () => setValue(key, input.value, step));

        const dec = el("button", { type: "button", class: "pm", onclick: () => setValue(key, String(clamp((Number(state[key] || cur) || 0) - 1, min, max)), step) }, "-");
        const inc = el("button", { type: "button", class: "pm", onclick: () => setValue(key, String(clamp((Number(state[key] || cur) || 0) + 1, min, max)), step) }, "+");
        control = el("div", { class: "counter" }, dec, input, inc);
      } else if (field.type === "radio") {
        if (isJaNeinRadio(field)) {
          wantsDefaultLabel = false;
          const id = key + "_ja";
          const currentVal = String(val || "") === "Ja" ? "Ja" : "Nein";
          if (val !== currentVal) state[key] = currentVal;
          const input = el("input", { type: "checkbox", id, name: key });
          input.checked = currentVal === "Ja";
          input.addEventListener("change", () => setValue(key, input.checked ? "Ja" : "Nein", step));
          control = el(
            "label",
            { class: "checkbox-row", for: id },
            input,
            el("span", { class: "cb-box", "aria-hidden": "true" }),
            renderFieldLabelSpan(field, "cb-label")
          );
          optionTip = renderSelectedOptionTip(field, currentVal);
        } else {
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
        }
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
            class: "btn secondary",
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
          el("div", { class: "up-ico", "aria-hidden": "true" }, el("img", { src: resolveAssetUrl("../assets/images/upload/library-photo.png"), alt: "" })),
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

        const repeaterWindowDoors = key === "fenster_vermassung";
        const list = el("div", { class: "rep-list" + (repeaterWindowDoors ? " rep-list-window-doors" : "") });
        const renderRow = (idx) => {
          const it = items[idx] || {};
          const typeLabel = String(it.typ || "").trim();
          const row = el("div", { class: "rep-row" + (repeaterWindowDoors ? " rep-row-window-doors" : "") });
          const head = el(
            "div",
            { class: "rep-head" },
            el("b", null, (typeLabel || itemLabel) + " " + String(idx + 1)),
            el("button", { type: "button", class: "rep-remove", onclick: () => {
              items.splice(idx, 1);
              setValue(key, items, step);
            } }, "Entfernen")
          );
          row.appendChild(head);

          const grid = el("div", { class: "rep-grid" + (repeaterWindowDoors ? " rep-grid-window-doors" : "") });
          (field.fields || []).forEach((sf) => {
            if (!repeaterFieldWhen(sf, it)) return;
            const sfKey = sf.key;
            const sfVal = it[sfKey] ?? "";
            const cell = el("div", { class: "rep-cell rep-cell-" + sfKey });
            if (!sf.hideLabel) cell.appendChild(renderLabel(sf));

            if (sf.type === "radio") {
              const opts = Array.isArray(sf.options) ? sf.options : [];
              const radioWrap = el("div", { class: "radio-row", role: "group" });
              opts.forEach((opt) => {
                const id = key + "_" + idx + "_" + sfKey + "_" + String(opt.value);
                const input = el("input", { type: "radio", name: key + "_" + idx + "_" + sfKey, id, value: opt.value });
                if (String(sfVal) === String(opt.value)) input.checked = true;
                input.addEventListener("change", () => {
                  const next = { ...(items[idx] || {}) };
                  next[sfKey] = opt.value;
                  items[idx] = next;
                  setValue(key, items, step);
                });
                radioWrap.appendChild(el("label", { class: "chip", for: id }, input, el("span", null, opt.label)));
              });
              cell.appendChild(radioWrap);
            } else if (sf.type === "select") {
              const inp = el("select", { class: "control" });
              const opts = Array.isArray(sf.options) ? sf.options : [];
              opts.forEach((opt) => {
                const optionEl = el("option", { value: opt.value }, opt.label);
                if (String(sfVal) === String(opt.value)) optionEl.selected = true;
                inp.appendChild(optionEl);
              });
              inp.addEventListener("change", () => {
                const next = { ...(items[idx] || {}) };
                next[sfKey] = inp.value;
                items[idx] = next;
                setValue(key, items, step);
              });
              cell.appendChild(inp);
            } else {
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
            }
            grid.appendChild(cell);
          });

          // Derived preview is only relevant for window measurement repeaters.
          const hasAreaFields = (field.fields || []).some((sf) => sf.key === "hoehe_m")
            && (field.fields || []).some((sf) => sf.key === "breite_m");
          if (hasAreaFields) {
            const h = Number(it.hoehe_m);
            const w = Number(it.breite_m);
            if (Number.isFinite(h) && Number.isFinite(w)) {
              const a = h * w;
              row.appendChild(el("div", { class: "rep-math" }, "Fläche: ", el("b", null, a.toFixed(3)), " m²"));
            }
          }

          row.appendChild(grid);
          return row;
        };

        items.forEach((_, idx) => list.appendChild(renderRow(idx)));

        const maxItems = Number(field.maxItems);
        const canAddMore = !Number.isFinite(maxItems) || items.length < maxItems;
        let addControls = null;
        if (Array.isArray(field.addButtons) && field.addButtons.length) {
          const addRow = el("div", { class: "rep-add-row" });
          field.addButtons.forEach((btnCfg) => {
            const addBtn = el("button", { type: "button", class: "btn secondary rep-add", onclick: () => {
              if (!canAddMore) return;
              items.push({ ...(btnCfg.defaults || {}) });
              setValue(key, items, step);
            } }, "+ " + String(btnCfg.label || (itemLabel + " hinzufügen")));
            if (!canAddMore) addBtn.setAttribute("disabled", "disabled");
            addRow.appendChild(addBtn);
          });
          addControls = addRow;
        } else {
          const addBtn = el("button", { type: "button", class: "btn secondary rep-add", onclick: () => {
            if (!canAddMore) return;
            items.push({});
            setValue(key, items, step);
          } }, "+ " + itemLabel + " hinzufügen");
          if (!canAddMore) addBtn.setAttribute("disabled", "disabled");
          addControls = addBtn;
        }

        const hasAreaFields = (field.fields || []).some((sf) => sf.key === "hoehe_m")
          && (field.fields || []).some((sf) => sf.key === "breite_m");
        if (hasAreaFields) {
          let total = 0;
          for (const it of items) {
            const h = Number(it && it.hoehe_m);
            const w = Number(it && it.breite_m);
            if (Number.isFinite(h) && Number.isFinite(w)) total += h * w;
          }
          const totalEl = el("div", { class: "rep-total" }, "Summe: ", el("b", null, total.toFixed(3)), " m²");
          control = el("div", { class: "repeater" + (repeaterWindowDoors ? " repeater-window-doors" : "") }, list, addControls, totalEl);
        } else {
          control = el("div", { class: "repeater" + (repeaterWindowDoors ? " repeater-window-doors" : "") }, list, addControls);
        }
      } else if (field.type === "checkbox") {
        wantsDefaultLabel = false;
        const id = "cb_" + key;
        const input = el("input", { type: "checkbox", id, name: key });
        input.checked = Boolean(val);
        input.addEventListener("change", () => setValue(key, input.checked, step));
        control = el(
          "label",
          { class: "checkbox-row", for: id },
          input,
          el("span", { class: "cb-box", "aria-hidden": "true" }),
          renderFieldLabelSpan(field, "cb-label")
        );
        if (field.tipKey && TIPS[field.tipKey]) optionTip = el("div", { class: "field-info" },
          el("span", { class: "field-info-ico", "aria-hidden": "true" }),
          el("span", { class: "field-info-text" }, String(TIPS[field.tipKey]))
        );
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
      const infoTextTop = resolveFieldProp(field, "infoTextTop");
      if (infoTextTop) {
        wrap.appendChild(
          el(
            "div",
            { class: "field-info" },
            el("span", { class: "field-info-ico", "aria-hidden": "true" }),
            el("span", { class: "field-info-text" }, String(infoTextTop))
          )
        );
      }
      if (control) wrap.appendChild(control);
      const infoText = resolveFieldProp(field, "infoText");
      if (infoText) {
        wrap.appendChild(
          el(
            "div",
            { class: "field-info" },
            el("span", { class: "field-info-ico", "aria-hidden": "true" }),
            el("span", { class: "field-info-text" }, String(infoText))
          )
        );
      }
      if (optionTip) wrap.appendChild(optionTip);
      if (key === "fenster_type" && (state.fenster_type === "Einfachverglasung" || state.fenster_type === "Kastenfenster")) {
        wrap.appendChild(el("div", { class: "helptext" }, "Bei Austausch gelten GEG-Mindestwerte."));
      }
      const help = resolveFieldProp(field, "help");
      if (help) wrap.appendChild(el("div", { class: "helptext" }, help));
      wrap.appendChild(err);
      dom.form.appendChild(wrap);
    });
  });
}

function parseDateDE(value) {
  const s = String(value || "").trim();
  const m = s.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!m) return null;
  const d = Number(m[1]);
  const mo = Number(m[2]);
  const y = Number(m[3]);
  const dt = new Date(Date.UTC(y, mo - 1, d));
  if (
    dt.getUTCFullYear() !== y ||
    dt.getUTCMonth() !== mo - 1 ||
    dt.getUTCDate() !== d
  ) return null;
  return dt;
}

function monthsInclusive(fromDate, toDate) {
  const fromIdx = fromDate.getUTCFullYear() * 12 + fromDate.getUTCMonth();
  const toIdx = toDate.getUTCFullYear() * 12 + toDate.getUTCMonth();
  return toIdx - fromIdx + 1;
}

function fmtDateDE(dt) {
  const d = String(dt.getUTCDate()).padStart(2, "0");
  const m = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const y = String(dt.getUTCFullYear());
  return d + "." + m + "." + y;
}

function parseYearMonthToken(token) {
  const m = String(token || "").match(/^(\d{4})-(\d{2})$/);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  if (!Number.isFinite(y) || !Number.isFinite(mo) || mo < 1 || mo > 12) return null;
  return new Date(Date.UTC(y, mo - 1, 1));
}

function addMonthsUTC(dt, months) {
  return new Date(Date.UTC(dt.getUTCFullYear(), dt.getUTCMonth() + months, 1));
}

function endOfMonthUTC(dt) {
  return new Date(Date.UTC(dt.getUTCFullYear(), dt.getUTCMonth() + 1, 0));
}

function monthYearLabelDE(dt) {
  return new Intl.DateTimeFormat("de-DE", { month: "short", year: "2-digit", timeZone: "UTC" }).format(dt);
}

function makePeriodsFromStartToken(token, oldItems) {
  const start = parseYearMonthToken(token);
  if (!start) return [];
  const prev = Array.isArray(oldItems) ? oldItems : [];
  const out = [];
  for (let i = 0; i < 3; i++) {
    const from = addMonthsUTC(start, i * 12);
    const to = endOfMonthUTC(addMonthsUTC(from, 11));
    const pOld = prev[i] || {};
    out.push({
      von: fmtDateDE(from),
      bis: fmtDateDE(to),
      menge: pOld.menge == null ? "" : pOld.menge,
      menge_tww: pOld.menge_tww == null ? "" : pOld.menge_tww,
      leerstand_pct: isEmpty(pOld.leerstand_pct) ? 0 : pOld.leerstand_pct,
    });
  }
  return out;
}

function validateEtrPeriodsField(fieldKey, label, errors) {
  const periods = Array.isArray(state[fieldKey]) ? state[fieldKey] : [];
  if (periods.length === 0) return;
  if (periods.length > 3) {
    errors[fieldKey] = label + ": Maximal 3 Zeiträume erlaubt";
    return;
  }

  let prevTo = null;

  for (let i = 0; i < periods.length; i++) {
    const p = periods[i] || {};
    const von = p.von;
    const bis = p.bis;
    const menge = p.menge;
    const mengeTww = p.menge_tww;

    if (isEmpty(von) || isEmpty(bis) || isEmpty(menge)) {
      errors[fieldKey] = label + ": Zeitraum " + String(i + 1) + " ist unvollständig";
      return;
    }

    const fromDate = parseDateDE(von);
    const toDate = parseDateDE(bis);
    if (!fromDate || !toDate) {
      errors[fieldKey] = label + ": Datum muss im Format TT.MM.JJJJ sein";
      return;
    }
    if (toDate.getTime() < fromDate.getTime()) {
      errors[fieldKey] = label + ": \"Bis\" darf nicht vor \"Von\" liegen";
      return;
    }
    if (prevTo && fromDate.getTime() <= prevTo.getTime()) {
      errors[fieldKey] = label + ": Zeiträume dürfen sich nicht überschneiden";
      return;
    }
    prevTo = toDate;

    const m = Number(menge);
    if (!Number.isFinite(m) || m <= 0) {
      errors[fieldKey] = label + ": Gesamtmenge muss > 0 sein";
      return;
    }

    if (!isEmpty(mengeTww)) {
      const tww = Number(mengeTww);
      if (!Number.isFinite(tww) || tww < 0) {
        errors[fieldKey] = label + ": TWW-Menge muss >= 0 sein";
        return;
      }
      if (tww > m) {
        errors[fieldKey] = label + ": TWW-Menge darf die Gesamtmenge nicht überschreiten";
        return;
      }
    }
  }
}

function countCompleteEtrPeriods(fieldKey) {
  const periods = Array.isArray(state[fieldKey]) ? state[fieldKey] : [];
  let complete = 0;
  for (let i = 0; i < periods.length; i++) {
    const p = periods[i] || {};
    if (!isEmpty(p.von) && !isEmpty(p.bis) && !isEmpty(p.menge)) complete++;
  }
  return complete;
}

function validatePeriodsSpanAndRecency(fieldKey, label, errors) {
  if (errors[fieldKey]) return; // already has an error from field-level validation
  const periods = Array.isArray(state[fieldKey]) ? state[fieldKey] : [];
  const complete = periods.filter(function (p) {
    return !isEmpty((p || {}).von) && !isEmpty((p || {}).bis) && !isEmpty((p || {}).menge);
  });
  if (complete.length < 3) return; // not enough periods to check span
  const firstFrom = parseDateDE(complete[0].von);
  const lastTo = parseDateDE(complete[complete.length - 1].bis);
  if (!firstFrom || !lastTo) return;
  const spanMonths = monthsInclusive(firstFrom, lastTo);
  if (spanMonths < 36) {
    errors[fieldKey] = label + ": Die Abrechnungszeiträume müssen mindestens 36 zusammenhängende Monate umfassen (aktuell " + spanMonths + " Monate)";
    return;
  }
  const now = new Date();
  const cutoff = addMonthsUTC(new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)), -18);
  if (lastTo.getTime() < cutoff.getTime()) {
    errors[fieldKey] = label + ": Die jüngste Abrechnung darf nicht älter als 18 Monate sein";
  }
}

function makeGoAusweisartError() {
  return {
    message: "Für den Verbrauchsausweis sind 3 vollständige Zeiträume erforderlich. Bitte Bedarfsausweis wählen.",
    action: "goto_ausweisart",
    actionLabel: "Zum Ausweisart-Schritt",
  };
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
      if (f.minItems != null && items.length < Number(f.minItems)) {
        errors[key] = "Zu wenige Einträge";
        continue;
      }
      if (f.maxItems != null && items.length > Number(f.maxItems)) {
        errors[key] = "Zu viele Einträge";
        continue;
      }
      // Basic per-row validation: required subfields must be filled.
      for (const it of items) {
        for (const sf of (f.fields || [])) {
          const sfReq = sf.required === true;
          const sfVal = it && it[sf.key];
          if (sfReq && isEmpty(sfVal)) errors[key] = "Bitte alle Pflichtfelder in der Liste ausfüllen";
          if (sf.pattern && !isEmpty(sfVal)) {
            const re = new RegExp(sf.pattern);
            if (!re.test(String(sfVal))) errors[key] = "Ungültiges Format in der Liste";
          }
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

  // Verbrauch/legacy-upload step: cross-field validation for ETr period blocks.
  if (String(st.id || "") === "wg_heizung" && String(state.ausweisart || "") === "Verbrauchsausweis") {
    validateEtrPeriodsField("etr1_periods", "Energieverbrauch", errors);
    if (countCompleteEtrPeriods("etr1_periods") < 3) {
      errors.etr1_periods = makeGoAusweisartError();
    } else {
      validatePeriodsSpanAndRecency("etr1_periods", "Energieverbrauch", errors);
    }
  }

  // NWG Verbrauchsausweis: validate electricity and heat periods.
  if (String(st.id || "") === "nwg_stromverbrauch" && String(state.ausweisart || "") === "Verbrauchsausweis") {
    validateEtrPeriodsField("nwg_strom_periods", "Stromverbrauch", errors);
    if (countCompleteEtrPeriods("nwg_strom_periods") < 3) {
      errors.nwg_strom_periods = makeGoAusweisartError();
    } else {
      validatePeriodsSpanAndRecency("nwg_strom_periods", "Stromverbrauch", errors);
    }
    validateEtrPeriodsField("etr1_periods", "Wärmeverbrauch Energieträger 1", errors);
    if (countCompleteEtrPeriods("etr1_periods") < 3) {
      errors.etr1_periods = makeGoAusweisartError();
    } else {
      validatePeriodsSpanAndRecency("etr1_periods", "Wärmeverbrauch Energieträger 1", errors);
    }
    if (state.etr2_enabled === true) {
      validateEtrPeriodsField("etr2_periods", "Wärmeverbrauch Energieträger 2", errors);
      if (countCompleteEtrPeriods("etr2_periods") < 3) {
        errors.etr2_periods = makeGoAusweisartError();
      } else {
        validatePeriodsSpanAndRecency("etr2_periods", "Wärmeverbrauch Energieträger 2", errors);
      }
    }
  }

  // Cooling cross-checks (applies to WG/NWG/MISCH direct cooling fields).
  if (["WG", "NWG", "MISCH"].includes(String(state.gebaeudetyp || ""))) {
    if (String(state.klimatisiert || "") === "Ja") {
      const flags = [state.fernKuehlung, state.passiveKuehlung, state.waermeKuehlung, state.stromKuehlung];
      if (!flags.some((v) => String(v || "") === "Ja")) {
        errors.klimatisiert = "Bitte mindestens eine Art der Kühlung auswählen";
      }
      if (String(state.gebaeudetyp || "") === "WG") {
        const n = Number(state.kuehlWfl);
        if (!Number.isFinite(n) || n <= 0) errors.kuehlWfl = "Bitte gekühlte Fläche > 0 angeben";
      }
    }
  }

  if (String(st.id || "") === "anlass_ausweisart" && String(state.ausweisart || "") === "weiß ich nicht") {
    const advice = getAusweisAdvisorResult();
    if (!advice || !advice.ready) {
      errors.ausweisart = "Bitte den Energieausweis-Check vollständig ausfüllen.";
    } else {
      errors.ausweisart = "Bitte über den Check eine Ausweisart auswählen.";
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
        const err = errors[key];
        errEl.textContent = "";
        if (err && typeof err === "object" && err.action === "goto_ausweisart") {
          const msg = String(err.message || "");
          if (msg) errEl.appendChild(document.createTextNode(msg + " "));
          const btn = el("button", { type: "button", class: "errlink" }, String(err.actionLabel || "Zum Ausweisart-Schritt"));
          btn.addEventListener("click", () => {
            const idx = findStepIndexById("gebaeudetyp");
            if (idx >= 0) {
              stepIndex = idx;
              render();
              setTimeout(() => {
                const a = document.querySelector('select[name="ausweisart"]');
                if (a && typeof a.focus === "function") a.focus();
              }, 0);
            }
          });
          errEl.appendChild(btn);
        } else {
          errEl.textContent = String(err);
        }
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

function csvEscape(v) {
  const s = String(v == null ? "" : v);
  if (!/[;"\r\n]/.test(s)) return s;
  return "\"" + s.replaceAll("\"", "\"\"") + "\"";
}

function hasRealValue(v) {
  return !(v == null || v === "" || (Array.isArray(v) && v.length === 0));
}

function normalizeLookupKey(v) {
  return String(v == null ? "" : v)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
}

function enumLookup(enumMap, value, fallback) {
  if (!enumMap || typeof enumMap !== "object") return fallback;
  const k = normalizeLookupKey(value);
  if (!k) return fallback;
  for (const [ek, ev] of Object.entries(enumMap)) {
    if (normalizeLookupKey(ek) === k) return ev;
  }
  return fallback;
}

function pathGet(obj, rawPath) {
  if (!obj || !rawPath) return undefined;
  const path = String(rawPath).replace(/\[(\d+)\]/g, ".$1");
  const parts = path.split(".").filter(Boolean);
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function pickSourceValue(sourceExpr, ctx) {
  if (!sourceExpr) return undefined;
  const variants = String(sourceExpr).split("|").map((s) => s.trim()).filter(Boolean);
  for (const key of variants) {
    const v = pathGet(ctx, key);
    if (hasRealValue(v)) return v;
  }
  return undefined;
}

function numberToDe(v) {
  if (!hasRealValue(v)) return "";
  const n = Number(String(v).replace(",", "."));
  if (!Number.isFinite(n)) return "";
  if (Math.floor(n) === n) return String(n);
  return String(n).replace(".", ",");
}

function safeId(v) {
  const raw = String(v == null ? "" : v).trim();
  if (!raw) return "";
  return raw.replace(/[^a-zA-Z0-9._-]/g, "_");
}

function firstUploadName(uploadArr) {
  const arr = Array.isArray(uploadArr) ? uploadArr : [];
  if (!arr.length) return "";
  const first = arr[0] || {};
  const byName = first.name ? String(first.name) : "";
  if (byName) return byName;
  const byUrl = first.url ? String(first.url) : "";
  if (!byUrl) return "";
  const parts = byUrl.split("/");
  return parts[parts.length - 1] || "";
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
  if (dom.overviewPrice) {
    const v = computeOverviewPrice();
    const show = Number.isFinite(Number(v));
    if (dom.overviewPriceWrap) dom.overviewPriceWrap.style.display = show ? "" : "none";
    if (dom.overviewPriceSpacer) dom.overviewPriceSpacer.style.display = show ? "" : "none";
    dom.overviewPrice.textContent = show ? formatOverviewPrice(v) : "";
  }
}

function render() {
  const steps = visibleSteps();
  stepIndex = clamp(stepIndex, 0, steps.length - 1);
  const st = currentStep();
  if (!st) return;

  const forceSingleColumn = Boolean(st.singleColumn || st.oneColumn || st.layout === "single");
  dom.form.classList.toggle("single-col", forceSingleColumn);

  dom.stepTitle.textContent = resolveStepTitle(st);
  dom.stepMeta.textContent = st.meta || "";
  const intro = resolveStepIntro(st);
  if (intro) {
    dom.stepIntro.style.display = "";
    dom.introText.textContent = intro.text || "";
  } else {
    dom.stepIntro.style.display = "none";
  }

  dom.summaryBox.style.display = "none";
  dom.btnDownload.style.display = "none";
  const isThankYou = String(st.id || "") === "thank_you";
  const isSummary = String(st.id || "") === "summary";
  document.body.classList.toggle("ea-thank-you-step", isThankYou);
  if (dom.btnNext) {
    const nextLabel = dom.btnNext.querySelector(".btn-next-label");
    if (nextLabel) nextLabel.textContent = isSummary ? "Anfrage absenden" : "Weitermachen";
    dom.btnNext.setAttribute("aria-label", isSummary ? "Anfrage absenden" : "Weitermachen");
  }
  if (dom.footerBar) dom.footerBar.style.display = isThankYou ? "none" : "";
  if (dom.btnBack) {
    dom.btnBack.style.visibility = stepIndex === 0 ? "hidden" : "";
    dom.btnBack.style.pointerEvents = stepIndex === 0 ? "none" : "";
  }
  if (dom.btnAdminExportCsv) dom.btnAdminExportCsv.style.display = isThankYou ? "" : "none";

  if (st.id === "summary") {
    // Summary step: render the configured fields (e.g. billing details).
    // NOTE: JSON export box is temporarily disabled (was only for debugging).
    renderFields(st);
  } else {
    renderFields(st);
  }
  renderAusweisAdvisor(st);

  dom.btnBack.disabled = stepIndex === 0;

  renderStepper();
  renderGroupStepper();
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
  if (!res.ok) {
    try {
      const currentFields = collectFieldsFromStep(st);
      const labelsByKey = Object.fromEntries(
        currentFields
          .filter((f) => f && f.key)
          .map((f) => [String(f.key), String(f.label || f.title || f.key)])
      );
      const details = Object.entries(res.errors || {}).map(([key, err]) => ({
        key,
        label: labelsByKey[key] || key,
        error: (err && typeof err === "object") ? String(err.message || err.action || "Validation error") : String(err),
      }));
      console.warn("[EA Form] Validation blocked next step", {
        stepIndex,
        stepId: st && st.id ? String(st.id) : "",
        stepTitle: resolveStepTitle(st),
        details,
      });
    } catch (e) {}
    return;
  }

  // If we're at the branching step and don't have an order yet, create it on the server and redirect.
  // This keeps the plugin autonomous: order creation is handled via EA_CFG.createUrl.
  const createUrl = EA_CFG && EA_CFG.createUrl ? String(EA_CFG.createUrl) : "";
  const hasOrderId = EA_CFG && EA_CFG.orderId;
  if (st && st.id === "gebaeudetyp" && !hasOrderId && createUrl) {
    const nextLabel = dom.btnNext.querySelector(".btn-next-label");
    const old = nextLabel ? nextLabel.textContent : "";
    try {
      dom.btnNext.disabled = true;
      if (nextLabel) nextLabel.textContent = "Bitte warten...";

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
        if (nextLabel) nextLabel.textContent = old;
        return;
      }

      location.href = redirectUrl;
      return;
    } catch (e) {
      alert("Order konnte nicht erstellt werden.");
      dom.btnNext.disabled = false;
      if (nextLabel) nextLabel.textContent = old;
      return;
    }
  }

  // Normal step submit: persist and continue.
  const isSubmitStep = st && st.id === "summary";
  if (isSubmitStep) state.submitted_at = new Date().toISOString();
  persistDraft(isSubmitStep ? "submit" : "next");
  stepIndex = clamp(stepIndex + 1, 0, steps.length - 1);
  // Keep user on the thank-you step after page reloads.
  if (isSubmitStep) persistDraft("thank_you");
  render();
});

dom.btnSave.addEventListener("click", () => {
  persistDraft("manual");
  try {
    const label = dom.btnSave.querySelector(".btn-save-label");
    if (!label) return;
    const old = label.textContent;
    label.textContent = "Gespeichert";
    setTimeout(() => (label.textContent = old), 900);
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

if (dom.btnAdminExportCsv) {
  dom.btnAdminExportCsv.addEventListener("click", async () => {
    const old = dom.btnAdminExportCsv.textContent;
    dom.btnAdminExportCsv.disabled = true;
    dom.btnAdminExportCsv.textContent = "Export wird erstellt...";
    try {
      await exportAdminCsv();
    } finally {
      dom.btnAdminExportCsv.disabled = false;
      dom.btnAdminExportCsv.textContent = old;
    }
  });
}

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

  applyGetPrefillToEmptyFields();

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
function mapJaNein01(v) {
  const s = normalizeLookupKey(v);
  if (!s) return 0;
  if (v === true || s === "ja" || s === "yes" || s === "true" || s === "1") return 1;
  return 0;
}

function mapVentWindow(v) {
  const s = normalizeLookupKey(v);
  return (s.includes("fenster") || s === "lafrei" || s === "freieluftung") ? 1 : 0;
}

function mapVentShaft(v) {
  const s = normalizeLookupKey(v);
  return (s.includes("schacht") || s.includes("abluft")) ? 1 : 0;
}

function mapVentWrg(v) {
  const s = normalizeLookupKey(v);
  if (s.includes("ohnewrg")) return 0; // "Zentrale ohne WRG" is NOT with WRG
  return (s.includes("wrg") || s.includes("warmruckgewinnung")) ? 1 : 0;
}

function mapVentNoWrg(v) {
  const s = normalizeLookupKey(v);
  if (!s) return 0;
  if (s.includes("ohnewrg")) return 1; // "Zentrale ohne WRG" → L_Ohne_WRG = 1
  if (s.includes("wrg") || s.includes("warmruckgewinnung")) return 0; // with WRG → not L_Ohne_WRG
  return s.includes("zentrale") ? 1 : 0; // "Zentrale Lüftungsanlage" (NWG)
}

function mapKeller01(v) {
  const s = normalizeLookupKey(v);
  if (!s) return 0;
  if (v === true || s === "ja" || s === "yes" || s === "true" || s === "1") return 1;
  if (s === "nein" || s === "no" || s === "false" || s === "0") return 0;
  if (s.includes("unbeheiz")) return 0;
  return s.includes("beheiz") ? 1 : 0;
}

function applyExportTransform(colSpec, ctx, schemaId, enums) {
  const t = String(colSpec.transform || "");
  const src = colSpec.source;
  const def = Object.prototype.hasOwnProperty.call(colSpec, "default") ? colSpec.default : "";
  const raw = pickSourceValue(src, ctx);

  if (t === "constant") return def;
  if (t === "string_trim") return hasRealValue(raw) ? String(raw).trim() : "";
  if (t === "id_safe_filename") return safeId(raw || ctx.export_meta.order_id || "");
  if (t === "map_anlass_to_ag_code") return enumLookup(enums.anlass_to_ag_code, raw, def || "AG_VERMIETUNG");
  if (t === "map_ausweisart_to_bv") return enumLookup(enums.ausweisart_to_bv, raw, def || "V");
  if (t === "year_int") {
    const n = Number(raw);
    return Number.isFinite(n) ? String(Math.floor(n)) : "";
  }
  if (t === "int_or_1") {
    const n = Number(raw);
    return (Number.isFinite(n) && n > 0) ? String(Math.floor(n)) : String(def || 1);
  }
  if (t === "schema_dependent_area") {
    if (schemaId === "WG") return numberToDe(ctx.wohnflaeche);
    return numberToDe(ctx.nwg_nettogrundflaeche || ctx.wohnflaeche);
  }
  if (t === "map_gebaeudeteil_gt") return enumLookup(enums.gebaeudeteil_to_gt, raw, def || "GT_GANZES_GEB");
  if (t === "map_keller_beheizt_01") return mapKeller01(raw);
  if (t === "basename_or_empty") return hasRealValue(raw) ? String(raw) : "";
  if (t === "ja_nein_to_01") return hasRealValue(raw) ? mapJaNein01(raw) : (def == null ? 0 : def);
  if (t === "number_locale_de") return numberToDe(raw);
  if (t === "year_or_fallback_baujahr") {
    const n = Number(raw);
    if (Number.isFinite(n) && n > 1000) return String(Math.floor(n));
    const b = Number(ctx.baujahr);
    return Number.isFinite(b) ? String(Math.floor(b)) : (def == null ? "" : String(def));
  }
  if (t === "year_or_0") {
    const n = Number(raw);
    return (Number.isFinite(n) && n > 1000) ? String(Math.floor(n)) : String(def == null ? 0 : def);
  }
  if (t === "warmwasser_solar_01") {
    const s = normalizeLookupKey(raw);
    return s.includes("solar") ? 1 : 0;
  }
  if (t === "warmwasser_wp_01") {
    const s = normalizeLookupKey(raw);
    return s.includes("warmepumpe") ? 1 : 0;
  }
  if (t === "heating_wp_01") {
    const s = normalizeLookupKey(raw);
    return s.includes("warmepumpe") ? 1 : 0;
  }
  if (t === "vent_window_01") return mapVentWindow(raw);
  if (t === "vent_shaft_01") return mapVentShaft(raw);
  if (t === "vent_wrg_yes_01") return mapVentWrg(raw);
  if (t === "vent_without_wrg_01") return mapVentNoWrg(raw);
  if (t === "bk_code_identity") {
    const s = String(raw == null ? "" : raw).trim();
    if (s.startsWith("BK_")) return s;
    return enumLookup(enums.heizung_to_bk, raw, def == null ? "" : String(def));
  }
  if (t === "modernisierung_year_from_field_or_0") {
    const n = Number(raw);
    if (Number.isFinite(n) && n > 1000) return String(Math.floor(n));
    return String(def == null ? 0 : def);
  }
  if (t === "from_repeater_period") {
    // Source already points to etr*_periods[i].field, so pathGet from ctx handles it.
    if (!hasRealValue(raw)) return def == null ? "" : def;
    if (typeof raw === "number") return numberToDe(raw);
    return String(raw);
  }
  if (t === "map_nutzung_to_id") return enumLookup(enums.nwg_nutzung_to_id, raw, def || "91");
  if (t === "nwg_flag_01") return 1;
  if (t === "nwg_etr2_lueften_01") return mapVentNoWrg(raw) || mapVentWrg(raw) || mapVentShaft(raw);
  if (t === "nwg_etr2_licht_01") return enumLookup(enums.nwg_beleuchtung_to_etr2_licht, raw, def == null ? 1 : def);

  return hasRealValue(raw) ? raw : (def == null ? "" : def);
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function exportAdminCsv() {
  if (typeof EXPORT_MAPPING_SPEC !== "object" || !EXPORT_MAPPING_SPEC || !EXPORT_MAPPING_SPEC.schemas) {
    alert("Export-Mapping nicht verfügbar.");
    return;
  }

  const schemaId = String(state.gebaeudetyp || "") === "WG" ? "WG" : "NWG"; // MISCH -> NWG fallback
  const schema = EXPORT_MAPPING_SPEC.schemas[schemaId];
  if (!schema || !Array.isArray(schema.columns) || !schema.columns.length) {
    alert("Export-Schema nicht verfügbar.");
    return;
  }

  const orderId = EA_CFG && EA_CFG.orderId ? String(EA_CFG.orderId) : "draft";
  const ctx = {
    ...state,
    export_meta: { order_id: orderId },
    upload_export: {
      slot0: firstUploadName(state.uploads && state.uploads.upload_heizung_photos),
      slot1: firstUploadName(state.uploads && state.uploads.upload_fenster_photos),
      slot2: firstUploadName(state.uploads && state.uploads.upload_daemmung_photos),
    },
  };
  const enums = EXPORT_MAPPING_SPEC.enums || {};

  const headers = schema.columns.map((c) => String(c.column || ""));
  const row = schema.columns.map((c) => {
    const val = applyExportTransform(c, ctx, schemaId, enums);
    const out = hasRealValue(val) ? val : (c.default == null ? "" : c.default);
    return csvEscape(out);
  });

  const csv = headers.map(csvEscape).join(";") + "\r\n" + row.join(";") + "\r\n";
  const stamp = new Date().toISOString().slice(0, 19).replaceAll(":", "-");
  const csvFileName = "EA_Verbrauch_" + schemaId + "_" + orderId + "_" + stamp + ".csv";

  // Prefer server-side ZIP bundle (CSV + images). Fallback to plain CSV if unavailable.
  const bundleUrl = EA_CFG && EA_CFG.exportBundleUrl ? String(EA_CFG.exportBundleUrl) : "";
  const nonce = EA_CFG && EA_CFG.nonce ? String(EA_CFG.nonce) : "";
  if (bundleUrl && EA_CFG && EA_CFG.orderId) {
    try {
      const reqUrl = buildUrl(bundleUrl, { orderId: orderId });
      const resp = await fetch(reqUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(nonce ? { "X-WP-Nonce": nonce } : {}),
        },
        body: JSON.stringify({
          orderId: orderId,
          csvName: csvFileName,
          csvContent: csv,
        }),
        credentials: "same-origin",
      });
      if (resp.ok) {
        const zipBlob = await resp.blob();
        downloadBlob(zipBlob, csvFileName.replace(/\.csv$/i, ".zip"));
        return;
      }
    } catch (e) {}
  }

  // Add UTF-8 BOM so Excel detects encoding like in reference files.
  const csvBlob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" });
  downloadBlob(csvBlob, csvFileName);
}
