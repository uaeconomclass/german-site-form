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

