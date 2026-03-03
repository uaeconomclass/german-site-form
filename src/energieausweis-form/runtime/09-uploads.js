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
