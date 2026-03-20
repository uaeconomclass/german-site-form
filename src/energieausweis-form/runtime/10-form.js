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
  if (!step || String(step.id || "") !== "anlass_ausweisart") return;
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
          c1.appendChild(inpM);
          grid.appendChild(c1);
          row.appendChild(grid);
          rows.appendChild(row);
        }

        control = el("div", { class: "repeater" }, topGrid, rows);
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
            el("span", { class: "cb-label" }, field.label)
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
        const addBtn = el("button", { type: "button", class: "btn secondary rep-add", onclick: () => {
          if (!canAddMore) return;
          items.push({});
          setValue(key, items, step);
        } }, "+ " + itemLabel + " hinzufügen");
        if (!canAddMore) addBtn.setAttribute("disabled", "disabled");

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
          control = el("div", { class: "repeater" }, list, addBtn, totalEl);
        } else {
          control = el("div", { class: "repeater" }, list, addBtn);
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
          el("span", { class: "cb-label" }, field.label)
        );
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
      if (field.infoText) {
        wrap.appendChild(
          el(
            "div",
            { class: "field-info" },
            el("span", { class: "field-info-ico", "aria-hidden": "true" }),
            el("span", { class: "field-info-text" }, String(field.infoText))
          )
        );
      }
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
    validateEtrPeriodsField("etr1_periods", "Energieträger 1", errors);
    if (countCompleteEtrPeriods("etr1_periods") < 3) {
      errors.etr1_periods = makeGoAusweisartError();
    }
    if (state.etr2_enabled === true) {
      validateEtrPeriodsField("etr2_periods", "Energieträger 2", errors);
      if (countCompleteEtrPeriods("etr2_periods") < 3) {
        errors.etr2_periods = makeGoAusweisartError();
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
            const idx = findStepIndexById("anlass_ausweisart");
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

  dom.stepTitle.textContent = st.title;
  dom.stepMeta.textContent = st.meta || "";
  if (st.intro) {
    dom.stepIntro.style.display = "";
    dom.introText.textContent = st.intro.text || "";
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
        stepTitle: st && st.title ? String(st.title) : "",
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
