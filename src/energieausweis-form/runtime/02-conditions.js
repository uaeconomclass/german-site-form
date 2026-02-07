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
