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
        const btnPick = el("button", { type: "button", class: "btn secondary up-pick", onclick: () => inp.click() }, "Datei auswählen");
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
        drop.addEventListener("click", () => inp.click());
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
