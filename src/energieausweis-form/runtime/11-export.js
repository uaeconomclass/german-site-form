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
