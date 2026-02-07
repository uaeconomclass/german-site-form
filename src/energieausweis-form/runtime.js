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
        if (saved.length) list.textContent = "Ausgewählt: " + saved.join(", ");
        inp.addEventListener("change", () => {
          const names = Array.from(inp.files || []).map((f) => f.name);
          state.uploads[key] = names;
          list.textContent = names.length ? "Ausgewählt: " + names.join(", ") : "";
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
        const totalEl = el("div", { class: "rep-total" }, "Summe: ", el("b", null, total.toFixed(3)), " m²");

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
