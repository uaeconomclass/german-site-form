/* Energieausweis Wizard Demo
 * Mirrors FORM-SPEC.md structure (subset) with conditional fields and a JSON export.
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

const DEFAULTS = {
  anlass: "",
  ausweisart: "",
  gebaeudetyp: "", // WG | NWG | MISCH

  // WG
  wg_subtype: "",
  baujahr: "",
  anzahl_wohneinheiten: "",
  wohnflaeche: "",
  nutzflaeche: "",
  plz: "",
  ort: "",

  // Huelle
  aussenwand_type: "",
  fenster_type: "",

  // Technik
  heizung_type: "",
  warmwasser_type: "",
  lueftung_type: "",

  // NWG
  nwg_nutzung: "",
  nwg_baujahr: "",

  // Misch
  misch_gewerbe_anteil: "",
  misch_tech_lueftung: "",
  misch_tech_kuehlung: "",
  misch_tech_wrg: "",
  misch_reco: "",

  // Bedarf
  geschosshoehen: "",
  gebaeudevolumen: "",
  aussenwandflaechen: "",
  fensteranteile: "",

  uploads: {},
};

let state = deepClone(DEFAULTS);

const TIPS = {
  anlass:
    "Vermietung, Verkauf oder sonstiger Zweck. Für einen Verbrauchsausweis sind die Anlässe Neubau oder Modernisierung nicht zulässig.",
  ausweisart:
    "Verbrauchsausweis: auf Basis tatsächlichen Verbrauchs. Bedarfsausweis: auf Basis Berechnung (mehr Angaben).",
  gebaeudetyp:
    "Der Energieausweis bezieht sich immer auf das gesamte Gebäude oder den kompletten Wohnteil eines Mischgebäudes. Für einzelne Wohnungen ist er nicht möglich.",
  wohnflaeche:
    "Wohnfläche umfasst alle beheizten Räume, die dem Wohnen dienen. Unbeheizte Keller/Garagen/Dachräume ohne Heizung zählen nicht.",
  nutzflaeche:
    "Beheizte Nutzfläche umfasst Wohnfläche plus zusätzlich beheizte Räume innerhalb der thermischen Hülle (z. B. beheizter Hobbyraum im Keller).",
  uploads_heizung:
    "GEG: Für die fachgerechte Erstellung sind bildliche Informationen zur Anlagentechnik erforderlich. Bilder sind nicht Bestandteil des Energieausweises.",
  uploads_fenster:
    "GEG: Fotos der Gebäudehülle helfen Sanierungszustand einzuschätzen. Bilder erscheinen nicht im Energieausweis.",
  uploads_daemmung:
    "GEG: Fotos zur Wärmedämmung dienen ausschließlich fachlicher Bewertung. Bitte mindestens 2 Bilder.",
};

function smartSuggestForWG(baujahr) {
  const y = Number(baujahr);
  if (!Number.isFinite(y)) return null;
  if (y <= 1978)
    return {
      aussenwand_type: "Vollziegel / Naturstein",
      fenster_type: "Einfachverglasung",
      heizung_type: "Konstanttemperaturkessel",
    };
  if (y <= 1994)
    return {
      aussenwand_type: "Ziegel",
      fenster_type: "Zweifachverglasung (alt)",
      heizung_type: "Niedertemperaturkessel",
    };
  if (y <= 2008)
    return {
      aussenwand_type: "WDVS vorhanden",
      fenster_type: "Zweifach Wärmeschutz",
      heizung_type: "Brennwertkessel",
    };
  return {
    aussenwand_type: "WDVS vorhanden",
    fenster_type: "Dreifachverglasung",
    heizung_type: "Wärmepumpe",
  };
}

function smartSuggestForNWG(baujahr) {
  const y = Number(baujahr);
  if (!Number.isFinite(y)) return null;
  if (y <= 1978)
    return {
      fenster_type: "Einfachverglasung",
      lueftung_type: "Fensterlüftung",
      heizung_type: "Konstanttemperaturkessel",
    };
  if (y <= 1994)
    return {
      fenster_type: "Zweifachverglasung (alt)",
      lueftung_type: "Mechanische Abluft",
      heizung_type: "Niedertemperaturkessel",
    };
  if (y <= 2008)
    return {
      fenster_type: "Zweifach Wärmeschutz",
      lueftung_type: "Zentrale ohne WRG",
      heizung_type: "Brennwertkessel",
    };
  return {
    fenster_type: "Dreifachverglasung",
    lueftung_type: "Zentrale WRG",
    heizung_type: "Wärmepumpe",
  };
}
const STEPS = [
  {
    id: "step1",
    title: "Anlass & Ausweisart",
    meta: "KROK 1",
    intro: {
      title: "Start",
      text:
        "Bitte wählen Sie Anlass und Ausweisart. Einige Optionen hängen von der Ausweisart ab.",
    },
    fields: [
      {
        key: "anlass",
        label: "Anlass",
        type: "radio",
        required: true,
        tipKey: "anlass",
        options: (s) => {
          const base = [
            { value: "Vermietung", label: "Vermietung" },
            { value: "Verkauf", label: "Verkauf" },
            { value: "Sonstiges", label: "Sonstiges" },
          ];
          if (s.ausweisart === "Bedarfsausweis") {
            base.push({ value: "Neubau", label: "Neubau" });
            base.push({ value: "Modernisierung", label: "Modernisierung" });
          }
          return base;
        },
      },
      {
        key: "ausweisart",
        label: "Ausweisart",
        type: "radio",
        required: true,
        tipKey: "ausweisart",
        options: () => [
          { value: "Verbrauchsausweis", label: "Verbrauchsausweis" },
          { value: "Bedarfsausweis", label: "Bedarfsausweis" },
          { value: "weiß ich nicht", label: "weiß ich nicht" },
        ],
      },
    ],
  },
  {
    id: "step2",
    title: "Gebäudetyp",
    meta: "KROK 2",
    intro: {
      title: "Gebäudetyp",
      text:
        "Der Gebäudetyp ist der Hauptzweig der Form (WG / NWG / Mischgebäude).",
    },
    fields: [
      {
        key: "gebaeudetyp",
        label: "Gebäudetyp",
        type: "choice",
        required: true,
        tipKey: "gebaeudetyp",
        choices: [
          { value: "WG", label: "Wohngebäude (WG)", desc: "EFH, MFH etc." },
          { value: "NWG", label: "Nichtwohngebäude (NWG)", desc: "Gewerbe, Büro etc." },
          { value: "MISCH", label: "Mischgebäude", desc: "Wohnen + Gewerbe" },
        ],
      },
    ],
  },
  {
    id: "wg_core",
    title: "WG - Stammdaten",
    meta: "WG",
    when: (s) => s.gebaeudetyp === "WG",
    intro: { title: "Wohngebäude", text: "Basisdaten für WG." },
    fields: [
      {
        key: "wg_subtype",
        label: "Gebäudeart (WG)",
        type: "select",
        required: true,
        options: () => [
          { value: "", label: "Bitte wählen…" },
          { value: "EFH", label: "Einfamilienhaus (EFH)" },
          { value: "ZFH", label: "Zweifamilienhaus (ZFH)" },
          { value: "MFH", label: "Mehrfamilienhaus (MFH)" },
          { value: "Reihenhaus", label: "Reihenhaus / Doppelhaushälfte" },
        ],
      },
      { key: "baujahr", label: "Baujahr Gebäude", type: "number", required: true, min: 1800, max: 2100 },
      { key: "anzahl_wohneinheiten", label: "Anzahl Wohneinheiten", type: "number", required: true, min: 1, max: 999 },
      { key: "wohnflaeche", label: "Wohnfläche (m²)", type: "number", required: true, min: 1, max: 20000, tipKey: "wohnflaeche" },
      { key: "nutzflaeche", label: "Beheizte Nutzfläche (m²)", type: "number", required: true, min: 1, max: 20000, tipKey: "nutzflaeche" },
      { key: "plz", label: "PLZ", type: "text", required: true, pattern: "^\\d{5}$", hint: "5-stellig" },
      { key: "ort", label: "Ort", type: "text", required: true },
    ],
    afterChange: (s, changedKey) => {
      if (changedKey !== "baujahr") return;
      const sug = smartSuggestForWG(s.baujahr);
      if (!sug) return;
      for (const [k, v] of Object.entries(sug)) if (isEmpty(state[k])) state[k] = v;
    },
  },
  {
    id: "wg_huelle",
    title: "WG - Gebäudehülle",
    meta: "WG",
    when: (s) => s.gebaeudetyp === "WG",
    intro: { title: "Gebäudehülle", text: "Außenwand + Fenster." },
    fields: [
      {
        key: "aussenwand_type",
        label: "Außenwand (Typ)",
        type: "imgselect",
        required: true,
        options: () => [
          { value: "Fachwerk", label: "Fachwerk", img: "../assets/images/aussenwand/fachwerk.png" },
          { value: "Vollziegel / Naturstein", label: "Vollziegel / Naturstein", img: "../assets/images/aussenwand/vollziegel.png" },
          { value: "Hohlblock / Bims", label: "Hohlblock / Bims", img: "../assets/images/aussenwand/hohlblockstein-bims.png" },
          { value: "Porenbeton / Gasbeton", label: "Porenbeton / Gasbeton", img: "../assets/images/aussenwand/porenbeton-gasbeton.png" },
          { value: "Ziegel", label: "Ziegel", img: "../assets/images/aussenwand/ziegel-hochlochziegel.png" },
          { value: "Stahlbeton", label: "Stahlbeton", img: "../assets/images/aussenwand/stahlbeton.png" },
          { value: "WDVS vorhanden", label: "WDVS vorhanden", img: "../assets/images/aussenwand/wdvs-querschnitt.png" },
        ],
      },
      {
        key: "fenster_type",
        label: "Fenster (Typ)",
        type: "select",
        required: true,
        options: () => [
          { value: "", label: "Bitte wählen…" },
          { value: "Einfachverglasung", label: "Einfachverglasung" },
          { value: "Zweifachverglasung (alt)", label: "Zweifachverglasung (alt)" },
          { value: "Zweifach Wärmeschutz", label: "Zweifach Wärmeschutz" },
          { value: "Dreifachverglasung", label: "Dreifachverglasung" },
        ],
      },
    ],
  },
  {
    id: "wg_technik",
    title: "WG - Anlagentechnik",
    meta: "WG",
    when: (s) => s.gebaeudetyp === "WG",
    intro: { title: "Technik", text: "Heizung, Warmwasser, ggf. Lüftung." },
    fields: [
      {
        key: "heizung_type",
        label: "Heizung (Typ)",
        type: "imgselect",
        required: true,
        options: () => [
          { value: "Konstanttemperaturkessel", label: "Konstanttemperatur", img: "../assets/images/heizung/konstanttemperaturkessel.png" },
          { value: "Niedertemperaturkessel", label: "Niedertemperatur", img: "../assets/images/heizung/niedertemperaturkessel.png" },
          { value: "Brennwertkessel", label: "Brennwert", img: "../assets/images/heizung/brennwertkessel.png" },
          { value: "Wärmepumpe", label: "Wärmepumpe", img: "../assets/images/heizung/waermepumpe.png" },
        ],
      },
      {
        key: "warmwasser_type",
        label: "Warmwasser (Typ)",
        type: "select",
        required: true,
        options: () => [
          { value: "", label: "Bitte wählen…" },
          { value: "Zentral", label: "Zentrale Warmwasserbereitung" },
          { value: "Dezentral", label: "Dezentrale Warmwasserbereitung" },
          { value: "Durchlauferhitzer", label: "Durchlauferhitzer (elektrisch)" },
          { value: "Boiler", label: "Elektrischer Speicher (Boiler)" },
          { value: "Solarthermie", label: "Solarthermie (Warmwasser)" },
        ],
      },
      {
        key: "lueftung_type",
        label: "Lüftung (WG)",
        type: "imgselect",
        required: (s) => s.ausweisart === "Bedarfsausweis",
        when: (s) => s.ausweisart === "Bedarfsausweis",
        options: () => [
          { value: "Fensterlüftung", label: "Fensterlüftung", img: "../assets/images/lueftung/fensterlueftung.png" },
          { value: "Mechanische Abluft", label: "Mechanische Abluft", img: "../assets/images/lueftung/mechanische-abluft.png" },
          { value: "Zentrale WRG", label: "Zentrale WRG", img: "../assets/images/lueftung/zentrale-lueftungsanlage.png" },
          { value: "Dezentrale WRG", label: "Dezentrale WRG", img: "../assets/images/lueftung/dezentrale-lueftungsanlage.png" },
        ],
      },
    ],
  },  {
    id: "nwg_core",
    title: "NWG - Stammdaten",
    meta: "NWG",
    when: (s) => s.gebaeudetyp === "NWG",
    intro: { title: "Nichtwohngebäude", text: "Basisdaten für NWG." },
    fields: [
      {
        key: "nwg_nutzung",
        label: "Gebäudenutzung (NWG)",
        type: "select",
        required: true,
        options: () => [
          { value: "", label: "Bitte wählen…" },
          { value: "Büro/Verwaltung", label: "Büro / Verwaltung" },
          { value: "Schule", label: "Schule" },
          { value: "Produktion/Lager", label: "Produktion / Lager" },
          { value: "Einzelhandel", label: "Einzelhandel" },
          { value: "Gastronomie", label: "Gastronomie" },
        ],
      },
      { key: "nwg_baujahr", label: "Baujahr Gebäude (NWG)", type: "number", required: true, min: 1800, max: 2100 },
      {
        key: "heizung_type",
        label: "Heizung (Typ)",
        type: "select",
        required: true,
        options: () => [
          { value: "", label: "Bitte wählen…" },
          { value: "Konstanttemperaturkessel", label: "Konstanttemperaturkessel" },
          { value: "Niedertemperaturkessel", label: "Niedertemperaturkessel" },
          { value: "Brennwertkessel", label: "Brennwertkessel" },
          { value: "Wärmepumpe", label: "Wärmepumpe" },
          { value: "Fernwärme", label: "Fern-/Nahwärme" },
        ],
      },
      {
        key: "lueftung_type",
        label: "Lüftung/Kühlung (NWG)",
        type: "select",
        required: (s) => s.ausweisart === "Bedarfsausweis",
        options: () => [
          { value: "", label: "Bitte wählen…" },
          { value: "Fensterlüftung", label: "Fensterlüftung" },
          { value: "Mechanische Abluft", label: "Mechanische Abluft / Schachtlüftung" },
          { value: "Zentrale ohne WRG", label: "Zentrale ohne WRG" },
          { value: "Zentrale WRG", label: "Zentrale WRG" },
          { value: "Dezentrale WRG", label: "Dezentrale WRG" },
        ],
      },
    ],
    afterChange: (s, changedKey) => {
      if (changedKey !== "nwg_baujahr") return;
      const sug = smartSuggestForNWG(s.nwg_baujahr);
      if (!sug) return;
      for (const [k, v] of Object.entries(sug)) if (isEmpty(state[k])) state[k] = v;
    },
  },
  {
    id: "misch_relevanz",
    title: "Misch - Relevanz-Check",
    meta: "MISCH",
    when: (s) => s.gebaeudetyp === "MISCH",
    intro: { title: "Relevanz-Check", text: "Vor-Klassifikation (Empfehlung)." },
    fields: [
      { key: "misch_gewerbe_anteil", label: "Gewerbeanteil (%, geschätzt)", type: "number", required: true, min: 0, max: 100, hint: "0..100" },
      { key: "misch_tech_lueftung", label: "Mechanische Lüftung?", type: "radio", required: true, options: () => [{ value: "Ja", label: "Ja" }, { value: "Nein", label: "Nein" }] },
      { key: "misch_tech_kuehlung", label: "Kühlung/Klima?", type: "radio", required: true, options: () => [{ value: "Ja", label: "Ja" }, { value: "Nein", label: "Nein" }] },
      { key: "misch_tech_wrg", label: "WRG vorhanden?", type: "radio", required: true, options: () => [{ value: "Ja", label: "Ja" }, { value: "Nein", label: "Nein" }] },
      {
        key: "misch_reco",
        label: "Empfehlung (automatisch)",
        type: "readonly",
        compute: (s) => {
          const p = Number(s.misch_gewerbe_anteil);
          const tech = [s.misch_tech_lueftung, s.misch_tech_kuehlung, s.misch_tech_wrg].filter((x) => x === "Ja").length;
          if (!Number.isFinite(p)) return "";
          if (p >= 70 || tech >= 2) return "Nichtwohngebäude (NWG) – Empfehlung";
          if (p <= 30 && tech === 0) return "Wohngebäude (WG) – Empfehlung";
          return "Mischgebäude – Empfehlung";
        },
        hint: "Die Einordnung dient nur der Orientierung (GEG).",
      },
    ],
  },
  {
    id: "uploads",
    title: "Uploads",
    meta: "Upload",
    intro: { title: "Dokumente & Fotos", text: "Anforderungen hängen von Ausweisart/Typ ab." },
    fields: [
      { key: "upload_verbrauch_heizkosten", label: "Heizkostenabrechnungen (3 Jahre)", type: "file", required: (s) => s.ausweisart === "Verbrauchsausweis", when: (s) => s.ausweisart === "Verbrauchsausweis", accept: ".pdf,.jpg,.jpeg,.png", multiple: true },
      { key: "upload_verbrauch_daten", label: "Verbrauchsdaten", type: "file", required: (s) => s.ausweisart === "Verbrauchsausweis", when: (s) => s.ausweisart === "Verbrauchsausweis", accept: ".pdf,.jpg,.jpeg,.png", multiple: true },
      { key: "upload_heizung_photos", label: "Heizungsanlage (Fotos)", type: "file", required: true, tipKey: "uploads_heizung", accept: ".jpg,.jpeg,.png", multiple: true },
      { key: "upload_fenster_photos", label: "Fenster/Türen (Fotos)", type: "file", required: true, tipKey: "uploads_fenster", accept: ".jpg,.jpeg,.png", multiple: true },
      { key: "upload_daemmung_photos", label: "Wärmedämmung (Fotos)", type: "file", required: true, tipKey: "uploads_daemmung", accept: ".jpg,.jpeg,.png", multiple: true },
      { key: "geschosshoehen", label: "Geschosshöhen (m)", type: "number", required: (s) => s.ausweisart === "Bedarfsausweis", when: (s) => s.ausweisart === "Bedarfsausweis", min: 0, max: 30 },
      { key: "gebaeudevolumen", label: "Gebäudevolumen (m³)", type: "number", required: (s) => s.ausweisart === "Bedarfsausweis", when: (s) => s.ausweisart === "Bedarfsausweis", min: 0, max: 10000000 },
      { key: "aussenwandflaechen", label: "Außenwandflächen (m²)", type: "number", required: (s) => s.ausweisart === "Bedarfsausweis", when: (s) => s.ausweisart === "Bedarfsausweis", min: 0, max: 2000000 },
      { key: "fensteranteile", label: "Fensterflächen (m²)", type: "number", required: (s) => s.ausweisart === "Bedarfsausweis", when: (s) => s.ausweisart === "Bedarfsausweis", min: 0, max: 2000000 },
      { key: "upload_bedarf_plaene", label: "Pläne (Grundriss/Schnitt/Ansicht)", type: "file", required: (s) => s.ausweisart === "Bedarfsausweis", when: (s) => s.ausweisart === "Bedarfsausweis", accept: ".pdf,.jpg,.jpeg,.png", multiple: true },
      { key: "upload_nwg_extended", label: "NWG Bedarf: Anlagenpläne", type: "file", required: (s) => s.ausweisart === "Bedarfsausweis" && s.gebaeudetyp === "NWG", when: (s) => s.ausweisart === "Bedarfsausweis" && s.gebaeudetyp === "NWG", accept: ".pdf,.jpg,.jpeg,.png", multiple: true },
    ],
  },
  { id: "summary", title: "Zusammenfassung", meta: "Finish", intro: { title: "Fertig", text: "JSON-Export der eingegebenen Daten." }, fields: [] },
];

function visibleSteps() {
  return STEPS.filter((st) => !st.when || st.when(state));
}

const dom = {
  stepper: document.getElementById("stepper"),
  stepCount: document.getElementById("stepCount"),
  progressBar: document.getElementById("progressBar"),
  stepTitle: document.getElementById("stepTitle"),
  stepMeta: document.getElementById("stepMeta"),
  stepIntro: document.getElementById("stepIntro"),
  introTitle: document.getElementById("introTitle"),
  introText: document.getElementById("introText"),
  form: document.getElementById("wizardForm"),
  btnBack: document.getElementById("btnBack"),
  btnNext: document.getElementById("btnNext"),
  btnReset: document.getElementById("btnReset"),
  warnBox: document.getElementById("warnBox"),
  warnText: document.getElementById("warnText"),
  summaryBox: document.getElementById("summaryBox"),
  summaryJson: document.getElementById("summaryJson"),
  btnDownload: document.getElementById("btnDownload"),
};

let stepIndex = 0;

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

function currentStep() {
  const steps = visibleSteps();
  return steps[stepIndex] || steps[0];
}

function fieldWhen(field) {
  if (!field.when) return true;
  return field.when(state);
}

function isRequired(field) {
  if (typeof field.required === "function") return !!field.required(state);
  return !!field.required;
}

function renderLabel(field) {
  const pieces = [el("span", null, field.label)];
  if (isRequired(field)) pieces.push(el("span", { class: "req" }, "req"));
  if (field.tipKey && TIPS[field.tipKey]) {
    pieces.push(
      el(
        "span",
        { class: "tip", role: "button", tabindex: "0", "aria-label": "Info" },
        "i",
        el("span", { class: "tipbox", html: TIPS[field.tipKey].replaceAll("\n", "<br>") })
      )
    );
  }
  return el("label", null, ...pieces);
}

function renderStepper() {
  const steps = visibleSteps();
  dom.stepCount.textContent = String(steps.length);
  dom.stepper.innerHTML = "";

  steps.forEach((st, idx) => {
    const done = idx < stepIndex && validateStep(idx, { silent: true }).ok;
    const item = el(
      "div",
      {
        class:
          "step" + (idx === stepIndex ? " active" : "") + (done ? " done" : ""),
        onclick: () => {
          stepIndex = idx;
          render();
        },
      },
      el("div", { class: "n" }, String(idx + 1)),
      el(
        "div",
        { class: "t" },
        el("span", null, st.title),
        el("small", null, st.meta || "")
      )
    );
    dom.stepper.appendChild(item);
  });

  const pct = steps.length ? (stepIndex / (steps.length - 1)) * 100 : 0;
  dom.progressBar.style.width = clamp(pct, 0, 100).toFixed(1) + "%";
}

function runPlausibilityWarnings() {
  const warnings = [];
  const y = Number(state.baujahr || state.nwg_baujahr);

  if (Number.isFinite(y) && y < 1960 && state.heizung_type === "Wärmepumpe") {
    warnings.push("Baujahr < 1960 + Wärmepumpe: bitte prüfen (ggf. saniert).");
  }

  if (state.heizung_type === "Wärmepumpe" && state.fenster_type === "Einfachverglasung") {
    warnings.push("Wärmepumpe + Einfachverglasung: oft energetisch ungünstig, bitte prüfen.");
  }

  if (warnings.length) {
    dom.warnBox.style.display = "";
    dom.warnText.textContent = warnings.join(" ");
  } else {
    dom.warnBox.style.display = "none";
    dom.warnText.textContent = "";
  }
}

function renderFields(step) {
  const fields = (step.fields || []).filter((f) => fieldWhen(f));
  dom.form.innerHTML = "";

  fields.forEach((field) => {
    const key = field.key;
    const val = state[key];

    const wrap = el(
      "div",
      { class: "field" + (field.type === "choice" || field.type === "readonly" ? " full" : "") },
      renderLabel(field)
    );

    const err = el("div", { class: "errtxt", id: "err_" + key });

    let control;

    if (field.type === "radio") {
      const opts = (typeof field.options === "function" ? field.options(state) : field.options) || [];
      control = el("div", { class: "radio-row", role: "group" });
      opts.forEach((opt) => {
        const id = key + "_" + opt.value;
        const input = el("input", { type: "radio", name: key, id, value: opt.value });
        if (val === opt.value) input.checked = true;
        input.addEventListener("change", () => setValue(key, opt.value));
        control.appendChild(el("label", { class: "chip", for: id }, input, el("span", null, opt.label)));
      });
    } else if (field.type === "select") {
      const opts = (typeof field.options === "function" ? field.options(state) : field.options) || [];
      control = el("select", { class: "control", name: key });
      opts.forEach((opt) => {
        const o = el("option", { value: opt.value }, opt.label);
        if (String(val) === String(opt.value)) o.selected = true;
        control.appendChild(o);
      });
      control.addEventListener("change", () => setValue(key, control.value));
    } else if (field.type === "number" || field.type === "text") {
      control = el("input", { class: "control", name: key, type: field.type === "number" ? "number" : "text", value: val ?? "" });
      if (field.min != null) control.setAttribute("min", String(field.min));
      if (field.max != null) control.setAttribute("max", String(field.max));
      if (field.hint) control.setAttribute("placeholder", field.hint);
      control.addEventListener("input", () => setValue(key, control.value));
    } else if (field.type === "choice") {
      control = el("div", { class: "choice-grid" });
      (field.choices || []).forEach((ch) => {
        const box = el("div", { class: "choice" + (val === ch.value ? " sel" : ""), onclick: () => setValue(key, ch.value) },
          el("div", { class: "badge" }, ch.value),
          el("div", null, el("b", null, ch.label), el("small", null, ch.desc || ""))
        );
        control.appendChild(box);
      });
    } else if (field.type === "imgselect") {
      control = el("div", { class: "img-choices" });
      const opts = (typeof field.options === "function" ? field.options(state) : field.options) || [];
      opts.forEach((opt) => {
        const box = el("div", { class: "img-choice" + (val === opt.value ? " sel" : ""), onclick: () => setValue(key, opt.value) },
          el("img", { src: opt.img, alt: opt.label }),
          el("div", { class: "cap" }, opt.label)
        );
        control.appendChild(box);
      });
    } else if (field.type === "file") {
      control = el("div", { class: "upload" },
        el("div", { class: "row" }, el("b", null, "Upload"), el("span", null, (field.accept || "").replaceAll(",", ", ")))
      );
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
    } else if (field.type === "readonly") {
      const v = field.compute ? field.compute(state) : val ?? "";
      control = el("input", { class: "control", name: key, type: "text", value: v, readonly: true });
      state[key] = v;
    }

    wrap.appendChild(control);
    wrap.appendChild(err);
    dom.form.appendChild(wrap);
  });
}

function setValue(key, value) {
  state[key] = value;

  if (key === "ausweisart" && state.ausweisart !== "Bedarfsausweis") {
    if (state.anlass === "Neubau" || state.anlass === "Modernisierung") state.anlass = "";
  }

  STEPS.forEach((st) => {
    if (!st.afterChange) return;
    if (!st.fields) return;
    if (!st.fields.some((f) => f.key === key)) return;
    st.afterChange(state, key);
  });

  render();
}

function validateStep(idx, { silent } = {}) {
  const steps = visibleSteps();
  const st = steps[idx];
  if (!st) return { ok: true, errors: {} };

  const errors = {};
  const fields = (st.fields || []).filter((f) => fieldWhen(f));

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
  out._meta = { createdAt: new Date().toISOString(), spec: "FORM-SPEC.md", ui: "preview/energieausweis-form.html" };
  return out;
}

function render() {
  const steps = visibleSteps();
  stepIndex = clamp(stepIndex, 0, steps.length - 1);
  const st = currentStep();
  if (!st) return;

  dom.stepTitle.textContent = st.title;
  dom.stepMeta.textContent = st.meta || "";

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
  dom.btnNext.textContent = stepIndex === steps.length - 1 ? "Fertig" : "Weiter";

  renderStepper();
  runPlausibilityWarnings();
}
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

dom.btnReset.addEventListener("click", () => {
  state = deepClone(DEFAULTS);
  stepIndex = 0;
  render();
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

render();