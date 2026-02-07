function clamp(n, a, b) {
  return Math.min(b, Math.max(a, n));
}

function isEmpty(v) {
  return v == null || v === "" || v === false || (Array.isArray(v) && v.length === 0);
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

