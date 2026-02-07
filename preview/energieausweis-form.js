/* AUTO-GENERATED FILE. Do not edit directly.
 * Source of truth:
 * - C:\Users\User\Desktop\форма для німецького сайту\src\energieausweis-form\spec
 * - C:\Users\User\Desktop\форма для німецького сайту\src\energieausweis-form\runtime.js
 * Rebuild:
 * - powershell -NoProfile -ExecutionPolicy Bypass -File tools/build-preview.ps1
 */
const FORM_SPEC = {"version":"v1","product":"Energieausweis","uiLocale":"de-DE","optionSets":{"anlass":[{"value":"","label":"Anlass"},{"value":"Vermietung","label":"Vermietung"},{"value":"Verkauf","label":"Verkauf"},{"value":"Sonstiges","label":"Sonstiges"},{"value":"Neubau","label":"Neubau","when":{"eq":["ausweisart","Bedarfsausweis"]}},{"value":"Modernisierung","label":"Modernisierung","when":{"eq":["ausweisart","Bedarfsausweis"]}}],"ausweisart":[{"value":"","label":"Welchen Ausweis benötigen Sie?"},{"value":"Verbrauchsausweis","label":"Verbrauchsausweis"},{"value":"Bedarfsausweis","label":"Bedarfsausweis"},{"value":"weiß ich nicht","label":"weiß ich nicht"}],"gebaeudetyp":[{"value":"","label":"Gebäudetyp"},{"value":"WG","label":"Wohngebäude (WG)"},{"value":"NWG","label":"Nichtwohngebäude (NWG)"},{"value":"MISCH","label":"Mischgebäude"}],"wg_subtype":[{"value":"","label":"Bitte wählen…"},{"value":"EFH","label":"Einfamilienhaus (EFH)"},{"value":"ZFH","label":"Zweifamilienhaus (ZFH)"},{"value":"MFH","label":"Mehrfamilienhaus (MFH)"},{"value":"REIHE","label":"Reihenhaus / Doppelhaushälfte"}],"fenster_type":[{"value":"","label":"Bitte wählen…"},{"value":"Einfachverglasung","label":"Einfachverglasung"},{"value":"Verbundfenster","label":"Verbundfenster"},{"value":"Kastenfenster","label":"Kastenfenster"},{"value":"Isolierglas alt","label":"Zweifachverglasung (Isolierverglasung, alt)"},{"value":"Wärmeschutzglas","label":"Zweifachwärmeschutzverglasung"},{"value":"3-fach Wärmeschutzglas","label":"Dreifachverglasung"}],"ja_nein":[{"value":"","label":"Bitte wählen…"},{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}],"keller":[{"value":"Nicht vorhanden","label":"Nicht vorhanden"},{"value":"Unbeheizt","label":"Unbeheizt"},{"value":"Beheizt","label":"Beheizt"}],"dachgeschoss":[{"value":"Nicht vorhanden","label":"Nicht vorhanden"},{"value":"Unbeheizt","label":"Unbeheizt"},{"value":"Beheizt","label":"Beheizt"}],"gebaeudeanteil":[{"value":"Gesamtgebäude","label":"Gesamtgebäude"},{"value":"Wohnen","label":"Wohnen"}],"nwg_nutzung":[{"value":"","label":"Bitte wählen…"},{"value":"Büro / Verwaltung","label":"Büro / Verwaltung"},{"value":"Praxis / Gesundheit","label":"Praxis / Gesundheit"},{"value":"Schule / Kita","label":"Schule / Kita"},{"value":"Einzelhandel","label":"Einzelhandel"},{"value":"Gastronomie","label":"Gastronomie"},{"value":"Lager / Produktion","label":"Lager / Produktion"},{"value":"Sonstiges NWG","label":"Sonstiges NWG"}],"nwg_aussenwand_simple":[{"value":"","label":"Bitte wählen…"},{"value":"Massiv","label":"Massiv"},{"value":"Stahlbeton","label":"Stahlbeton"},{"value":"Vorhangfassade","label":"Vorhangfassade"},{"value":"Glasfassade","label":"Glasfassade"},{"value":"WDVS","label":"WDVS"},{"value":"unbekannt","label":"unbekannt"}],"nwg_fensteranteil":[{"value":"","label":"Bitte wählen…"},{"value":"gering (\u003c30%)","label":"gering (\u003c30%)"},{"value":"mittel (30–60%)","label":"mittel (30–60%)"},{"value":"hoch (\u003e60%)","label":"hoch (\u003e60%)"}],"lueftung":[{"value":"","label":"Bitte wählen…"},{"value":"Fensterlüftung","label":"Fensterlüftung"},{"value":"Mechanische Abluft / Schachtlüftung","label":"Mechanische Abluft / Schachtlüftung"},{"value":"Zentrale ohne WRG","label":"Zentrale ohne WRG"},{"value":"Zentrale WRG","label":"Zentrale WRG"},{"value":"Dezentrale WRG","label":"Dezentrale WRG"},{"value":"Nicht bekannt","label":"Nicht bekannt"}],"nwg_lueftung":[{"value":"","label":"Bitte wählen…"},{"value":"Fensterlüftung","label":"Fensterlüftung"},{"value":"Mechanische Abluft","label":"Mechanische Abluft"},{"value":"Zentrale Lüftungsanlage","label":"Zentrale Lüftungsanlage"},{"value":"Lüftung mit Wärmerückgewinnung","label":"Lüftung mit Wärmerückgewinnung"}],"nwg_kuehlung":[{"value":"","label":"Bitte wählen…"},{"value":"keine","label":"keine"},{"value":"Split-Klima","label":"Split-Klima"},{"value":"zentrale Klimaanlage","label":"zentrale Klimaanlage"},{"value":"Kaltwasseranlage","label":"Kaltwasseranlage"}],"nwg_beleuchtung":[{"value":"","label":"Bitte wählen…"},{"value":"Standard","label":"Standard"},{"value":"LED","label":"LED"},{"value":"unbekannt","label":"unbekannt"}]},"steps":[{"id":"gebaeudedaten_grundpruefung","title":"Gebäudedaten \u0026 Grundprüfung","meta":"1","intro":{"title":"Gebäudedaten","text":"Damit wir Ihren Energieausweis erstellen können, benötigen wir ein paar Angaben zu Ihrem Gebäude."},"afterChangeRef":"smart_wg_baujahr","blocks":[{"title":"Gebäudedaten","fields":[{"key":"anlass","label":"Anlass","type":"select","required":true,"tipKey":"anlass","optionsRef":"anlass"},{"key":"ausweisart","label":"Welchen Ausweis benötigen Sie?","type":"select","required":true,"tipKey":"ausweisart","optionsRef":"ausweisart"},{"key":"gebaeudetyp","label":"Gebäudetyp","type":"select","required":true,"tipKey":"gebaeudetyp","optionsRef":"gebaeudetyp"},{"key":"wg_subtype","label":"Gebäude (Untertyp)","type":"select","required":{"eq":["gebaeudetyp","WG"]},"when":{"eq":["gebaeudetyp","WG"]},"optionsRef":"wg_subtype"},{"key":"anzahl_wohneinheiten","label":"Anzahl Wohnungen","type":"counter","required":{"eq":["gebaeudetyp","WG"]},"when":{"eq":["gebaeudetyp","WG"]},"min":1,"max":999,"hint":"z. B. 1"},{"key":"baujahr","label":"Baujahr des Gebäudes","type":"number","required":true,"min":1800,"max":2100,"hint":"z. B. 1985"},{"key":"heizung_baujahr","label":"Baujahr der Heizung","type":"number","required":false,"min":1800,"max":2100,"hint":"z. B. 2010"}]},{"title":"Grundprüfung","fields":[{"key":"strasse","label":"Straße","type":"text","required":true,"hint":"Straße"},{"key":"hausnummer","label":"Hausnummer","type":"text","required":true,"hint":"Nr."},{"key":"plz","label":"PLZ","type":"text","required":true,"pattern":"^\\d{5}$","hint":"z. B. 23534"},{"key":"ort","label":"Ort","type":"text","required":true,"hint":"z. B. München"},{"key":"wohnflaeche","label":"Wohnfläche m²","type":"number","required":true,"min":1,"max":20000,"tipKey":"wohnflaeche","hint":"z. B. 120"},{"key":"nutzflaeche","label":"Nutzfläche m²","type":"number","required":true,"min":1,"max":20000,"tipKey":"nutzflaeche","hint":"z. B. 120"},{"key":"gebaeudeanteil","label":"Gebäudeteil","type":"radio","required":true,"optionsRef":"gebaeudeanteil"},{"key":"dachgeschoss","label":"Dachgeschoss","type":"radio","required":true,"optionsRef":"dachgeschoss"},{"key":"keller","label":"Keller","type":"radio","required":true,"optionsRef":"keller"}]}]},{"id":"wg_bauteile_daemmung","title":"Bauteile \u0026 Dämmung","meta":"2","when":{"eq":["gebaeudetyp","WG"]},"intro":{"title":"Gebäudehülle","text":"Außenwand und Fenster. Bitte wählen Sie, was am besten passt."},"fields":[{"key":"aussenwand_type","label":"Außenwand (Typ)","type":"imgselect","required":true,"tipKey":"aussenwand_type","options":[{"value":"Fachwerk","label":"Fachwerk","img":"../assets/images/aussenwand/fachwerk.png","tipKey":"aussenwand_fachwerk"},{"value":"Vollziegel / Naturstein","label":"Vollziegel / Naturstein","img":"../assets/images/aussenwand/vollziegel.png","tipKey":"aussenwand_vollziegel"},{"value":"Hohlblock / Bims","label":"Hohlblock / Bims","img":"../assets/images/aussenwand/hohlblockstein-bims.png","tipKey":"aussenwand_bims"},{"value":"Kalksandstein","label":"Kalksandstein","img":"../assets/images/aussenwand/porenbeton-gasbeton.png","tipKey":"aussenwand_kalksandstein"},{"value":"Ziegel","label":"Ziegel","img":"../assets/images/aussenwand/ziegel-hochlochziegel.png","tipKey":"aussenwand_ziegel"},{"value":"Porenbeton / Gasbeton","label":"Porenbeton / Gasbeton","img":"../assets/images/aussenwand/porenbeton-gasbeton.png","tipKey":"aussenwand_porenbeton"},{"value":"Stahlbeton","label":"Stahlbeton","img":"../assets/images/aussenwand/stahlbeton.png","tipKey":"aussenwand_stahlbeton"},{"value":"WDVS vorhanden","label":"WDVS vorhanden","img":"../assets/images/aussenwand/wdvs-querschnitt.png","tipKey":"aussenwand_wdvs"},{"value":"unbekannt","label":"unbekannt","img":"../assets/images/aussenwand/wdvs-querschnitt.png"}]},{"key":"fenster_type","label":"Fenster (Typ)","type":"select","required":true,"tipKey":"fenster_type","optionsRef":"fenster_type"},{"key":"fenster_baujahr","label":"Baujahr Fenster","type":"number","required":true,"min":1800,"max":2100,"hint":"z. B. 2005"},{"key":"fenster_zustand","label":"Zustand der Fenster","type":"radio","required":true,"options":[{"value":"Alle dicht","label":"Alle dicht"},{"value":"Teilweise undicht","label":"Teilweise undicht"}]},{"key":"fenster_dichtungen","label":"Dichtungen vorhanden","type":"radio","required":true,"options":[{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}]},{"key":"fenster_vermassung","label":"Fenster-Vermassung (m²)","type":"text","full":true,"when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"tipKey":"fenster_vermassung","hint":"z. B. 1,833 m²"}]},{"id":"nwg_basis","title":"NWG Stammdaten","meta":"2","when":{"eq":["gebaeudetyp","NWG"]},"intro":{"title":"Nichtwohngebäude","text":"Bitte geben Sie Nutzung und Flächen an."},"fields":[{"key":"nwg_nutzung","label":"Gebäudenutzung","type":"select","required":true,"optionsRef":"nwg_nutzung"},{"key":"nwg_nettogrundflaeche","label":"Nettogrundfläche (m²)","type":"number","required":true,"min":1,"max":500000,"hint":"z. B. 350"},{"key":"nwg_anzahl_nutzungseinheiten","label":"Anzahl Nutzungseinheiten","type":"number","required":true,"min":1,"max":50000,"hint":"z. B. 3"},{"key":"nwg_geschosshoehen","label":"Geschosshöhen (m)","type":"number","required":false,"min":1,"max":20,"hint":"optional"},{"key":"nwg_beheiztes_volumen","label":"Beheiztes Volumen (m³)","type":"number","required":false,"min":1,"max":5000000,"hint":"optional"},{"key":"nwg_aussenwand_simple","label":"Außenwand (NWG, vereinfacht)","type":"select","required":true,"optionsRef":"nwg_aussenwand_simple"},{"key":"nwg_fensteranteil","label":"Fensteranteil","type":"select","required":true,"tipKey":"nwg_fensteranteil","optionsRef":"nwg_fensteranteil"},{"key":"nwg_lueftung","label":"Lüftung","type":"select","required":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"optionsRef":"nwg_lueftung"},{"key":"nwg_kuehlung","label":"Kühlung","type":"select","required":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"optionsRef":"nwg_kuehlung"},{"key":"nwg_beleuchtung","label":"Beleuchtung","type":"select","required":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"optionsRef":"nwg_beleuchtung"}]},{"id":"misch_relevanz","title":"Relevanz-Check","meta":"2","when":{"eq":["gebaeudetyp","MISCH"]},"intro":{"title":"Mischgebäude","text":"Kurzer Check zur Einordnung. Die endgültige Bewertung erfolgt nach GEG."},"fields":[{"key":"misch_nutzung","label":"Welche Nutzung liegt im Gebäude vor?","type":"radio","required":true,"options":[{"value":"Wohnen","label":"Wohnen"},{"value":"Gewerbe","label":"Gewerbe"},{"value":"Kombination","label":"Kombination aus Wohnen und Gewerbe"}]},{"key":"misch_gewerbe_anteil","label":"Wie groß ist der gewerbliche Anteil ungefähr?","type":"radio","required":true,"options":[{"value":"unter 10%","label":"unter 10%"},{"value":"ca. 10–50%","label":"ca. 10–50%"},{"value":"über 50%","label":"über 50%"}]},{"key":"misch_tech_lueftung","label":"Gibt es eine eigene Lüftungsanlage?","type":"radio","required":true,"options":[{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}]},{"key":"misch_tech_kuehlung","label":"Gibt es Kühlung oder Klimaanlagen?","type":"radio","required":true,"options":[{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}]},{"key":"misch_tech_oeffnungszeiten","label":"Hat der Gewerbeteil lange Öffnungszeiten?","type":"radio","required":true,"options":[{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}]},{"key":"misch_tech_glas","label":"Gibt es große Glasflächen oder Küchenabluft?","type":"radio","required":true,"options":[{"value":"Ja","label":"Ja"},{"value":"Nein","label":"Nein"}]}]},{"id":"uploads","title":"Versand","meta":"6","intro":{"title":"Uploads","text":"Bitte laden Sie die benötigten Unterlagen hoch."},"fields":[{"key":"upload_verbrauch_heizkosten","label":"Heizkostenabrechnungen (letzte 3 Jahre)","type":"file","when":{"eq":["ausweisart","Verbrauchsausweis"]},"required":{"eq":["ausweisart","Verbrauchsausweis"]},"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_verbrauch_heizkosten"},{"key":"upload_verbrauch_verbrauchsdaten","label":"Verbrauchsdaten","type":"file","when":{"eq":["ausweisart","Verbrauchsausweis"]},"required":{"eq":["ausweisart","Verbrauchsausweis"]},"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_verbrauch_verbrauchsdaten"},{"key":"upload_heizung_photos","label":"Heizungsanlage (Fotos)","type":"file","required":true,"accept":".jpg,.jpeg,.png","multiple":true,"tipKey":"uploads_heizung"},{"key":"upload_fenster_photos","label":"Fenster/Dachfenster/Türen (Fotos)","type":"file","required":true,"accept":".jpg,.jpeg,.png","multiple":true,"tipKey":"uploads_fenster"},{"key":"upload_daemmung_photos","label":"Wärmedämmung (Fotos)","type":"file","required":true,"accept":".jpg,.jpeg,.png","multiple":true,"tipKey":"uploads_daemmung"},{"key":"geschosshoehen","label":"Geschosshöhen (m)","type":"number","when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":20},{"key":"gebaeudevolumen","label":"Gebäudevolumen (m³)","type":"number","when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":5000000},{"key":"aussenwandflaechen","label":"Außenwandflächen (m²)","type":"number","when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":500000},{"key":"fensteranteile","label":"Fensteranteile (m²)","type":"number","when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"min":1,"max":500000},{"key":"upload_bedarf_plaene","label":"Grundrisspläne / Schnitte / Ansichten","type":"file","when":{"eq":["ausweisart","Bedarfsausweis"]},"required":{"eq":["ausweisart","Bedarfsausweis"]},"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_bedarf_plaene"},{"key":"upload_nwg_anlagenplaene","label":"Anlagenpläne (Lüftung/Kälte/Heizung)","type":"file","when":{"and":[{"eq":["gebaeudetyp","NWG"]},{"eq":["ausweisart","Bedarfsausweis"]}]},"required":false,"accept":".pdf,.jpg,.jpeg,.png","multiple":true,"tipKey":"upload_nwg_anlagenplaene"}]},{"id":"summary","title":"Zusammenfassung","meta":"7","intro":{"title":"Fertig","text":"JSON-Export der eingegebenen Daten."},"fields":[]}]};
const TOOL_TIPS_DE = {"anlass":"Vermietung, Verkauf oder sonstiger Zweck. Für einen Verbrauchsausweis sind die Anlässe Neubau oder Modernisierung nicht zulässig.","ausweisart":"Verbrauchsausweis: auf Basis tatsächlichen Verbrauchs. Bedarfsausweis: auf Basis Berechnung (mehr Angaben).","gebaeudetyp":"Der Energieausweis wird grundsätzlich für das gesamte Gebäude oder den kompletten Wohnteil eines Mischgebäudes erstellt. Eine Ausstellung für einzelne Wohnungen oder Teilflächen ist nicht möglich.","wohnflaeche":"Die Wohnfläche umfasst alle beheizten Räume, die dem Wohnen dienen (z. B. Wohnzimmer, Schlafzimmer, Küche, Bad, Flur). Nicht zur Wohnfläche zählen unbeheizte Keller, Garagen, Dachräume ohne Heizung sowie Balkone, Terrassen und sonstige Außenflächen.","nutzflaeche":"Die beheizte Nutzfläche umfasst die Wohnfläche sowie zusätzlich beheizte Räume innerhalb der thermischen Gebäudehülle. Beispiel: Wohnfläche 120 m² + beheizter Hobbyraum im Keller 20 m² + beheiztes Büro 15 m² = 155 m².","aussenwand_type":"Bitte wählen Sie den Außenwand-Typ. Falls Sie unsicher sind, nutzen Sie die Bilder und die Detailinfos je Material.","aussenwand_fachwerk":"Fachwerkbauten bestehen aus einer tragenden Holzkonstruktion mit Gefachen. Typisch für Altbauten; energetische Qualität hängt stark von Wandaufbau und Sanierungen ab.","aussenwand_vollziegel":"Massive Außenwände aus Naturstein oder Vollziegel sind typisch für Altbauten vor ca. 1918. Trotz großer Wandstärken oft geringe Dämmwirkung.","aussenwand_bims":"Hohlblocksteine aus Bims/Leichtbeton: häufig ca. 1919 bis 1960er Jahre. Bessere Dämmung als Vollbeton, meist aber nicht nach heutigem Standard.","aussenwand_kalksandstein":"Kalksandstein ist sehr fest und schwer, aber selbst nur gering dämmend. Energetische Qualität meist durch zusätzliche Dämmung (z. B. WDVS).","aussenwand_ziegel":"Ziegelmauerwerk: häufig ab ca. 1950, je nach Bauart Vollziegel oder Hochlochziegel. Bewertung hängt von Wandstärke und vorhandener Dämmung ab.","aussenwand_porenbeton":"Porenbeton/Gasbeton: sehr leicht, häufig ab ca. 1980. Gute Dämmung, abhängig von Wanddicke und Zusatzdämmung.","aussenwand_stahlbeton":"Stahlbeton: sehr hart, hohe Wärmeleitfähigkeit und geringe Dämmwirkung. Außenbauteile werden energetisch oft erst durch Zusatzdämmung bewertet.","aussenwand_wdvs":"WDVS (Wärmedämmverbundsystem): außenliegende Dämmung mit Armierung und Oberputz. Qualität hängt von Dämmstoff, Stärke und Ausführungsjahr ab.","fenster_type":"Fenster-Typ (Verglasung). Tipp: Farbiges Spiegelbild = Wärmeschutz; Spiegelbilder zählen = Anzahl Scheiben.","fenster_vermassung":"Angabe der Fensterabmessungen (lichte Öffnung Breite × Höhe) zur Ermittlung der Fensterfläche im Bedarfsausweis. Beispiel: (1,20m+0,03m)×(1,46m+0,03m)=1,833 m².","nwg_fensteranteil":"NWG arbeitet häufig stärker mit Glasanteilen. Bitte wählen Sie eine grobe Kategorie.","upload_verbrauch_heizkosten":"Für den Verbrauchsausweis werden Heizkostenabrechnungen der letzten 3 Jahre benötigt.","upload_verbrauch_verbrauchsdaten":"Für den Verbrauchsausweis werden Verbrauchsdaten (tatsächliches Verbrauchsverhalten) benötigt.","uploads_heizung":"Auf Grundlage des seit Mai 2021 geltenden GEG sind zur fachgerechten Erstellung des Energieausweises bildliche Informationen zur Anlagentechnik erforderlich. Die hochgeladenen Bilder werden nicht Bestandteil des Energieausweises und nicht veröffentlicht.","uploads_fenster":"Bitte laden Sie exemplarische Bilder von Fenstern und der Haustür hoch. Wenn alle Fenster gleich sind, reicht ein Foto. Bei unterschiedlichen Fenstern bitte pro Typ ein Bild.","uploads_daemmung":"Bitte laden Sie Bilder zur Wärmedämmung hoch: Dach/Unterdach sowie Außenwand. Die Bilder werden nur zur Einschätzung verwendet und nicht veröffentlicht.","upload_bedarf_plaene":"Für den Bedarfsausweis werden Pläne benötigt: Grundrisse, Schnitte und Ansichten (PDF/JPG/PNG).","upload_nwg_anlagenplaene":"Optional: Anlagenpläne für Lüftung/Kälte/Heizung können bei NWG hilfreich sein."};

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
  return v == null || v === "" || (Array.isArray(v) && v.length === 0);
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
  if (y <= 1978) return { aussenwand_type: "Vollziegel / Naturstein", fenster_type: "Einfachverglasung", heizung_type: "Konstanttemperaturkessel" };
  if (y <= 1994) return { aussenwand_type: "Ziegel", fenster_type: "Zweifachverglasung (alt)", heizung_type: "Niedertemperaturkessel" };
  if (y <= 2008) return { aussenwand_type: "WDVS vorhanden", fenster_type: "Zweifach Wärmeschutz", heizung_type: "Brennwertkessel" };
  return { aussenwand_type: "WDVS vorhanden", fenster_type: "Dreifachverglasung", heizung_type: "Wärmepumpe" };
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
    if (!(f.key in DEFAULTS)) DEFAULTS[f.key] = "";
  }
}

let state = deepClone(DEFAULTS);
let stepIndex = 0;

const TIPS = TOOL_TIPS_DE || {};

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
};

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
  if (isRequired(field)) pieces.push(el("span", { class: "req" }, "req"));
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
    const pill = el(
      "div",
      {
        class: "step-pill" + (idx === stepIndex ? " active" : "") + (idx < stepIndex ? " done" : ""),
        onclick: () => {
          stepIndex = idx;
          render();
        },
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
  if (Number.isFinite(y) && y < 1960 && state.heizung_type === "Wärmepumpe") warnings.push("Baujahr < 1960 + Wärmepumpe: bitte prüfen (ggf. saniert).");
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
    if (block.title) {
      dom.form.appendChild(el("div", { class: "block-title" }, block.title));
    }

    fields.forEach((field) => {
      const key = field.key;
      const val = state[key];

      const wrap = el("div", { class: "field" + (field.full ? " full" : "") }, renderLabel(field));
      const err = el("div", { class: "errtxt", id: "err_" + key });

      let control;
      if (field.type === "select") {
      const opts = optionsForField(field);
      control = el("select", { class: "control", name: key });
      opts.forEach((opt) => {
        const o = el("option", { value: opt.value }, opt.label);
        if (String(val) === String(opt.value)) o.selected = true;
        control.appendChild(o);
      });
      control.addEventListener("change", () => setValue(key, control.value, step));
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

      const dec = el("button", { type: "button", class: "pm", onclick: () => setValue(key, String(clamp((Number(state[key] || cur) || 0) - 1, min, max)), step) }, "−");
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
      } else if (field.type === "file") {
      control = el("div", { class: "upload" }, el("div", { class: "row" }, el("b", null, "Upload"), el("span", null, (field.accept || "").replaceAll(",", ", "))));
      const inp = el("input", { type: "file", name: key, accept: field.accept || "", ...(field.multiple ? { multiple: true } : {}) });
      const list = el("div", { class: "filelist", id: "file_" + key });
      const saved = state.uploads[key] || [];
      if (saved.length) list.textContent = "Ausgewählt: " + saved.join(", ");
      inp.addEventListener("change", () => {
        const names = Array.from(inp.files || []).map((f) => f.name);
        state.uploads[key] = names;
        list.textContent = names.length ? "Ausgewählt: " + names.join(", ") : "";
      });
      control.appendChild(inp);
      control.appendChild(list);
      }

      if (control) wrap.appendChild(control);
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
  render();
});

dom.btnSave.addEventListener("click", () => {
  const data = exportData();
  try {
    localStorage.setItem("ea_wizard_draft_v1", JSON.stringify(data));
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
  const raw = localStorage.getItem("ea_wizard_draft_v1");
  if (raw) {
    const d = JSON.parse(raw);
    state = { ...deepClone(DEFAULTS), ...d, uploads: d.uploads || {} };
  }
} catch (e) {}

render();
