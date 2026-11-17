// ../../rust/perspective-js/dist/esm/wasm/registry.js
async function Y(t) {
  let e2;
  t instanceof Response ? e2 = await WebAssembly.instantiateStreaming(t) : typeof t == "string" ? e2 = await WebAssembly.instantiateStreaming(fetch(t)) : t instanceof ArrayBuffer ? e2 = await WebAssembly.instantiate(t) : e2 = t;
  let n = e2.instance.exports, [r3] = WebAssembly.Module.customSections(e2.module, "psp-runtime"), [i7] = WebAssembly.Module.customSections(e2.module, "psp-len"), o = new DataView(i7).getUint32(0, true), a2 = n.resize(r3.byteLength);
  new Uint8Array(n.memory.buffer).set(new Uint8Array(r3), a2);
  let _2 = n.compile(r3.byteLength, o);
  return new Uint8Array(n.memory.buffer).slice(_2, o + _2);
}
if (typeof WebAssembly > "u") throw new Error("WebAssembly not supported.");
async function $(t) {
  t instanceof Function && (t = await t()), t instanceof Promise && (t = await t);
  try {
    return await Y(t);
  } catch {
    return console.warn("Stage 0 wasm loading failed, skipping"), new Uint8Array(t);
  }
}
var q = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 5, 3, 1, 4, 1]);
var j;
function U() {
  return j === void 0 && (j = WebAssembly.validate(q)), j;
}
function K(t, e2, n) {
  try {
    let c2 = f.__wbindgen_add_to_stack_pointer(-16), d3 = h(t, f.__wbindgen_export, f.__wbindgen_export2), m4 = p;
    var r3 = w(e2) ? 0 : h(e2, f.__wbindgen_export, f.__wbindgen_export2), i7 = p;
    f.migrate(c2, d3, m4, r3, i7, u(n));
    var o = l().getInt32(c2 + 0, true), a2 = l().getInt32(c2 + 4, true), _2 = l().getInt32(c2 + 8, true);
    if (_2) throw v(a2);
    return v(o);
  } finally {
    f.__wbindgen_add_to_stack_pointer(16);
  }
}
function V(t, e2, n) {
  try {
    let o = f.__wbindgen_add_to_stack_pointer(-16), a2 = h(t, f.__wbindgen_export, f.__wbindgen_export2), _2 = p;
    f.validate_config(o, a2, _2, u(e2), w(n) ? 16777215 : n ? 1 : 0);
    var r3 = l().getInt32(o + 0, true), i7 = l().getInt32(o + 4, true);
    if (i7) throw v(r3);
  } finally {
    f.__wbindgen_add_to_stack_pointer(16);
  }
}
function H() {
  return { __proto__: null, "./perspective-migrate.wasm_bg.js": { __proto__: null, __wbg_Error_8c4e43fe74559d73: function(e2, n) {
    let r3 = Error(k(e2, n));
    return u(r3);
  }, __wbg_String_8f0eb39a4a4c2f66: function(e2, n) {
    let r3 = String(s(n)), i7 = h(r3, f.__wbindgen_export, f.__wbindgen_export2), o = p;
    l().setInt32(e2 + 4, o, true), l().setInt32(e2 + 0, i7, true);
  }, __wbg___wbindgen_bigint_get_as_i64_8fcf4ce7f1ca72a2: function(e2, n) {
    let r3 = s(n), i7 = typeof r3 == "bigint" ? r3 : void 0;
    l().setBigInt64(e2 + 8, w(i7) ? BigInt(0) : i7, true), l().setInt32(e2 + 0, !w(i7), true);
  }, __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: function(e2) {
    let n = s(e2), r3 = typeof n == "boolean" ? n : void 0;
    return w(r3) ? 16777215 : r3 ? 1 : 0;
  }, __wbg___wbindgen_debug_string_0bc8482c6e3508ae: function(e2, n) {
    let r3 = B(s(n)), i7 = h(r3, f.__wbindgen_export, f.__wbindgen_export2), o = p;
    l().setInt32(e2 + 4, o, true), l().setInt32(e2 + 0, i7, true);
  }, __wbg___wbindgen_in_47fa6863be6f2f25: function(e2, n) {
    return s(e2) in s(n);
  }, __wbg___wbindgen_is_bigint_31b12575b56f32fc: function(e2) {
    return typeof s(e2) == "bigint";
  }, __wbg___wbindgen_is_function_0095a73b8b156f76: function(e2) {
    return typeof s(e2) == "function";
  }, __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: function(e2) {
    let n = s(e2);
    return typeof n == "object" && n !== null;
  }, __wbg___wbindgen_is_string_cd444516edc5b180: function(e2) {
    return typeof s(e2) == "string";
  }, __wbg___wbindgen_jsval_eq_11888390b0186270: function(e2, n) {
    return s(e2) === s(n);
  }, __wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811: function(e2, n) {
    return s(e2) == s(n);
  }, __wbg___wbindgen_number_get_8ff4255516ccad3e: function(e2, n) {
    let r3 = s(n), i7 = typeof r3 == "number" ? r3 : void 0;
    l().setFloat64(e2 + 8, w(i7) ? 0 : i7, true), l().setInt32(e2 + 0, !w(i7), true);
  }, __wbg___wbindgen_string_get_72fb696202c56729: function(e2, n) {
    let r3 = s(n), i7 = typeof r3 == "string" ? r3 : void 0;
    var o = w(i7) ? 0 : h(i7, f.__wbindgen_export, f.__wbindgen_export2), a2 = p;
    l().setInt32(e2 + 4, a2, true), l().setInt32(e2 + 0, o, true);
  }, __wbg___wbindgen_throw_be289d5034ed271b: function(e2, n) {
    throw new Error(k(e2, n));
  }, __wbg_call_389efe28435a9388: function() {
    return O(function(e2, n) {
      let r3 = s(e2).call(s(n));
      return u(r3);
    }, arguments);
  }, __wbg_done_57b39ecd9addfe81: function(e2) {
    return s(e2).done;
  }, __wbg_entries_58c7934c745daac7: function(e2) {
    let n = Object.entries(s(e2));
    return u(n);
  }, __wbg_get_9b94d73e6221f75c: function(e2, n) {
    let r3 = s(e2)[n >>> 0];
    return u(r3);
  }, __wbg_get_b3ed3ad4be2bc8ac: function() {
    return O(function(e2, n) {
      let r3 = Reflect.get(s(e2), s(n));
      return u(r3);
    }, arguments);
  }, __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04: function(e2) {
    let n;
    try {
      n = s(e2) instanceof ArrayBuffer;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_Map_53af74335dec57f4: function(e2) {
    let n;
    try {
      n = s(e2) instanceof Map;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_Uint8Array_9b9075935c74707c: function(e2) {
    let n;
    try {
      n = s(e2) instanceof Uint8Array;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_isArray_d314bb98fcf08331: function(e2) {
    return Array.isArray(s(e2));
  }, __wbg_isSafeInteger_bfbc7332a9768d2a: function(e2) {
    return Number.isSafeInteger(s(e2));
  }, __wbg_iterator_6ff6560ca1568e55: function() {
    return u(Symbol.iterator);
  }, __wbg_length_32ed9a279acd054c: function(e2) {
    return s(e2).length;
  }, __wbg_length_35a7bace40f36eac: function(e2) {
    return s(e2).length;
  }, __wbg_new_361308b2356cecd0: function() {
    let e2 = new Object();
    return u(e2);
  }, __wbg_new_3eb36ae241fe6f44: function() {
    let e2 = new Array();
    return u(e2);
  }, __wbg_new_dca287b076112a51: function() {
    return u(/* @__PURE__ */ new Map());
  }, __wbg_new_dd2b680c8bf6ae29: function(e2) {
    let n = new Uint8Array(s(e2));
    return u(n);
  }, __wbg_next_3482f54c49e8af19: function() {
    return O(function(e2) {
      let n = s(e2).next();
      return u(n);
    }, arguments);
  }, __wbg_next_418f80d8f5303233: function(e2) {
    let n = s(e2).next;
    return u(n);
  }, __wbg_prototypesetcall_bdcdcc5842e4d77d: function(e2, n, r3) {
    Uint8Array.prototype.set.call(X(e2, n), s(r3));
  }, __wbg_set_1eb0999cf5d27fc8: function(e2, n, r3) {
    let i7 = s(e2).set(s(n), s(r3));
    return u(i7);
  }, __wbg_set_3f1d0b984ed272ed: function(e2, n, r3) {
    s(e2)[v(n)] = v(r3);
  }, __wbg_set_f43e577aea94465b: function(e2, n, r3) {
    s(e2)[n >>> 0] = v(r3);
  }, __wbg_value_0546255b415e96c1: function(e2) {
    let n = s(e2).value;
    return u(n);
  }, __wbindgen_cast_0000000000000001: function(e2) {
    return u(e2);
  }, __wbindgen_cast_0000000000000002: function(e2) {
    return u(e2);
  }, __wbindgen_cast_0000000000000003: function(e2, n) {
    let r3 = k(e2, n);
    return u(r3);
  }, __wbindgen_cast_0000000000000004: function(e2) {
    let n = BigInt.asUintN(64, e2);
    return u(n);
  }, __wbindgen_object_drop_ref: function(e2) {
    v(e2);
  } } };
}
function u(t) {
  M === g.length && g.push(g.length + 1);
  let e2 = M;
  return M = g[e2], g[e2] = t, e2;
}
function B(t) {
  let e2 = typeof t;
  if (e2 == "number" || e2 == "boolean" || t == null) return `${t}`;
  if (e2 == "string") return `"${t}"`;
  if (e2 == "symbol") {
    let i7 = t.description;
    return i7 == null ? "Symbol" : `Symbol(${i7})`;
  }
  if (e2 == "function") {
    let i7 = t.name;
    return typeof i7 == "string" && i7.length > 0 ? `Function(${i7})` : "Function";
  }
  if (Array.isArray(t)) {
    let i7 = t.length, o = "[";
    i7 > 0 && (o += B(t[0]));
    for (let a2 = 1; a2 < i7; a2++) o += ", " + B(t[a2]);
    return o += "]", o;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(t)), r3;
  if (n && n.length > 1) r3 = n[1];
  else return toString.call(t);
  if (r3 == "Object") try {
    return "Object(" + JSON.stringify(t) + ")";
  } catch {
    return "Object";
  }
  return t instanceof Error ? `${t.name}: ${t.message}
${t.stack}` : r3;
}
function J(t) {
  t < 132 || (g[t] = M, M = t);
}
function X(t, e2) {
  return t = t >>> 0, W().subarray(t / 1, t / 1 + e2);
}
var y = null;
function l() {
  return (y === null || y.buffer.detached === true || y.buffer.detached === void 0 && y.buffer !== f.memory.buffer) && (y = new DataView(f.memory.buffer)), y;
}
function k(t, e2) {
  return t = t >>> 0, Q(t, e2);
}
var S = null;
function W() {
  return (S === null || S.byteLength === 0) && (S = new Uint8Array(f.memory.buffer)), S;
}
function s(t) {
  return g[t];
}
function O(t, e2) {
  try {
    return t.apply(this, e2);
  } catch (n) {
    f.__wbindgen_export3(u(n));
  }
}
var g = new Array(128).fill(void 0);
g.push(void 0, null, true, false);
var M = g.length;
function w(t) {
  return t == null;
}
function h(t, e2, n) {
  if (n === void 0) {
    let _2 = F.encode(t), c2 = e2(_2.length, 1) >>> 0;
    return W().subarray(c2, c2 + _2.length).set(_2), p = _2.length, c2;
  }
  let r3 = t.length, i7 = e2(r3, 1) >>> 0, o = W(), a2 = 0;
  for (; a2 < r3; a2++) {
    let _2 = t.charCodeAt(a2);
    if (_2 > 127) break;
    o[i7 + a2] = _2;
  }
  if (a2 !== r3) {
    a2 !== 0 && (t = t.slice(a2)), i7 = n(i7, r3, r3 = a2 + t.length * 3, 1) >>> 0;
    let _2 = W().subarray(i7 + a2, i7 + r3), c2 = F.encodeInto(t, _2);
    a2 += c2.written, i7 = n(i7, r3, a2, 1) >>> 0;
  }
  return p = a2, i7;
}
function v(t) {
  let e2 = s(t);
  return J(t), e2;
}
var R = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
R.decode();
var G = 2146435072;
var I = 0;
function Q(t, e2) {
  return I += e2, I >= G && (R = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), R.decode(), I = e2), R.decode(W().subarray(t, t + e2));
}
var F = new TextEncoder();
var p = 0;
var Z;
var f;
function ee(t, e2) {
  return f = t.exports, Z = e2, y = null, S = null, f;
}
async function te(t, e2) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(t, e2);
    } catch (i7) {
      if (t.ok && n(t.type) && t.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", i7);
      else throw i7;
    }
    let r3 = await t.arrayBuffer();
    return await WebAssembly.instantiate(r3, e2);
  } else {
    let r3 = await WebAssembly.instantiate(t, e2);
    return r3 instanceof WebAssembly.Instance ? { instance: r3, module: t } : r3;
  }
  function n(r3) {
    switch (r3) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
async function N(t) {
  if (f !== void 0) return f;
  t !== void 0 && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
  let e2 = H();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  let { instance: n, module: r3 } = await te(await t, e2);
  return ee(n, r3);
}
async function C(t) {
  return await N({ module_or_path: t }), { migrate(e2, n, r3) {
    return K(e2, r3, n);
  }, validate(e2, n, r3) {
    V(e2, n, r3?.strict);
  } };
}
var E = "5.9.3".split(".").slice(0, 2).join(".");
var T = Symbol.for("@perspective-dev/wasm");
var P = ["client", "viewer", "server", "server32", "server64", "migrate"];
var A = ["server", "server32", "server64"];
function D(t) {
  return A.includes(t);
}
function z() {
  let t = globalThis;
  return t[T] ??= /* @__PURE__ */ new Map(), t[T];
}
function b() {
  let t = z(), e2 = t.get(E);
  return e2 === void 0 && (e2 = { versions: /* @__PURE__ */ new Set(), sources: {}, consumed: /* @__PURE__ */ new Set() }, t.set(E, e2)), e2.versions.has("5.9.3") || (e2.versions.size > 0 && console.warn(`Perspective 5.9.3 is sharing a page with Perspective ${[...e2.versions].join(", ")}; releases of one major.minor are compatible, but every Perspective package on a page should be the same version.`), e2.versions.add("5.9.3")), e2;
}
function ie() {
  let t = [...z()].filter(([e2]) => e2 !== E).flatMap(([e2, n]) => n.versions ? [...n.versions] : [e2]);
  if (t.length > 0) throw new Error(`Perspective 5.9.3 cannot share a page with Perspective ${t.join(", ")}`);
}
async function x({ source: t, disable_stage_0: e2 }) {
  let n = typeof t == "function" ? await t() : await t;
  if (n instanceof WebAssembly.Module) return n;
  if (n instanceof Uint8Array && (n = n.slice().buffer), typeof Response < "u" && n instanceof Response) {
    if (!n.ok) throw new Error(`Failed to fetch perspective wasm (HTTP ${n.status} "${n.url}")`);
    if (e2) return await n.arrayBuffer();
  }
  return e2 ? n : (await $(n)).buffer;
}
async function se(t) {
  if (t.server !== void 0) return await x(t.server);
  let { server32: e2, server64: n } = t;
  if (n !== void 0 && (e2 === void 0 || U())) try {
    return await x(n);
  } catch (r3) {
    if (e2 === void 0) throw r3;
    console.warn("Memory64 perspective server wasm failed to load, falling back to wasm32", r3);
  }
  return await x(e2);
}
function oe(t) {
  t.consumed.add("viewer"), t.viewer = x(t.sources.viewer).then(t.viewer_provider), t.client === void 0 && (t.client = t.viewer, t.client_origin = "viewer", t.viewer.then((e2) => {
    t.client_runtime = e2;
  }, () => {
  }));
}
function L(t, e2 = {}, n = "user") {
  n !== "default" && ie();
  let r3 = b(), i7 = Object.keys(t).filter((c2) => !P.includes(c2));
  if (i7.length > 0) throw new Error(`Unknown perspective wasm key(s) ${i7.join(", ")}; expected ${P.join(", ")}`);
  let o = P.filter((c2) => t[c2] !== void 0);
  if (n === "default") {
    let c2 = A.some((d3) => r3.sources[d3] !== void 0);
    o = o.filter((d3) => r3.sources[d3] === void 0 && !r3.consumed.has(d3) && !(c2 && D(d3)));
  } else {
    if (o.length === 0) throw new Error(`init() requires at least one of ${P.join(", ")}`);
    let c2 = [];
    for (let d3 of o) if (r3.consumed.has(d3)) {
      if (n === "user" && r3.sources[d3] !== void 0) {
        c2.push(d3);
        continue;
      }
      throw new Error(`${d3} wasm is already initialized`);
    }
    if (c2.length > 0) {
      o = o.filter((m4) => !c2.includes(m4)), r3.warned_duplicates ??= /* @__PURE__ */ new Set();
      let d3 = c2.filter((m4) => !r3.warned_duplicates.has(m4));
      if (d3.length > 0) {
        for (let m4 of d3) r3.warned_duplicates.add(m4);
        console.warn(`${d3.join(", ")} wasm is already initialized; keeping the existing runtime (Perspective was loaded more than once on this page).`);
      }
    }
    if (o.some(D)) for (let d3 of A) (n === "replace_server" || r3.sources[d3]?.is_default) && delete r3.sources[d3];
  }
  if (o.includes("viewer")) {
    if (r3.client !== void 0) throw new Error("viewer wasm must be registered before any Client is created from client wasm");
    if (r3.viewer_provider === void 0) throw new Error("viewer wasm was registered, but @perspective-dev/viewer is not loaded");
  }
  let a2 = A.filter((c2) => o.includes(c2) || r3.sources[c2] !== void 0);
  if (a2.includes("server") && a2.length > 1) throw new Error("`server` cannot be combined with `server32` or `server64`");
  let _2 = !!e2.disable_stage_0;
  for (let c2 of o) r3.sources[c2] = { source: t[c2], disable_stage_0: _2, is_default: n === "default" };
  o.includes("viewer") && oe(r3);
}
async function ge(t, e2 = {}) {
  L(t, e2), t.viewer !== void 0 && await b().viewer;
}
function pe(t) {
  let e2 = b();
  e2.client_provider ??= t;
}
function me(t) {
  let e2 = b();
  e2.viewer_provider ??= t;
}
function ye(t) {
  let e2 = b();
  if (e2.client !== void 0) throw new Error("client wasm is already initialized");
  e2.consumed.add("client"), e2.client_origin = "glue", e2.client_runtime = { glue: t }, e2.client = Promise.resolve(e2.client_runtime);
}
function ve() {
  let t = b();
  if (t.client === void 0) {
    let e2 = t.sources.client;
    if (e2 === void 0) return Promise.reject(new Error("Missing perspective-js.wasm: register `client` or `viewer` with init()"));
    if (t.client_provider === void 0) return Promise.reject(new Error("client wasm was registered, but @perspective-dev/client is not loaded"));
    t.consumed.add("client"), t.client_origin = "client", t.client = x(e2).then(t.client_provider), t.client.then((n) => {
      t.client_runtime = n;
    }, () => {
    });
  }
  return t.client;
}
function xe() {
  let t = b();
  if (t.server === void 0) {
    if (!A.some((e2) => t.sources[e2] !== void 0)) return Promise.reject(new Error("Missing perspective-server.wasm: register `server` (or `server32` / `server64`) with init()"));
    for (let e2 of A) t.consumed.add(e2);
    t.server = se(t.sources);
  }
  return t.server.then((e2) => e2 instanceof WebAssembly.Module ? e2 : e2.slice(0));
}
function ae() {
  let t = b();
  if (t.migrate_binary === void 0) {
    let e2 = t.sources.migrate;
    if (e2 === void 0) return Promise.reject(new Error("Missing perspective-migrate.wasm: register `migrate` with init()"));
    t.consumed.add("migrate"), t.migrate_binary = x(e2);
  }
  return t.migrate_binary;
}
function Se() {
  let t = b();
  if (t.validator === void 0) {
    let e2 = ae().then(C);
    e2.catch(() => {
      t.validator === e2 && (t.validator = void 0);
    }), t.validator = e2;
  }
  return t.validator;
}

// ../../rust/perspective-js/dist/esm/perspective.js
var ke = Object.defineProperty;
var Se2 = (i7, e2) => {
  for (var t in e2) ke(i7, t, { get: e2[t], enumerable: true });
};
function se2(i7, e2) {
  let t;
  async function n(o, l3) {
    if (l3.data.cmd === "init") try {
      t = new i7.VirtualServer(e2), l3.data.id !== void 0 ? o.postMessage({ id: l3.data.id }) : o.postMessage(null);
    } catch (c2) {
      throw console.error("Error initializing worker:", c2), c2;
    }
    else try {
      let c2 = new Uint8Array(l3.data), f3 = (await t.handleRequest(c2)).slice().buffer;
      o.postMessage(f3, { transfer: [f3] });
    } catch (c2) {
      throw console.error("Error handling request in worker:", c2), c2;
    }
  }
  let _2 = new MessageChannel();
  return _2.port1.onmessage = (o) => {
    n(_2.port1, o);
  }, _2.port2;
}
var re = {};
Se2(re, { Client: () => j2, GenericSQLVirtualServerModel: () => A2, ProxySession: () => U2, Table: () => P2, View: () => M2, VirtualDataSlice: () => S2, VirtualServer: () => W2, default: () => te2, init: () => ee2, initSync: () => Ye });
var j2 = class i {
  static __wrap(e2) {
    e2 = e2 >>> 0;
    let t = Object.create(i.prototype);
    return t.__wbg_ptr = e2, J2.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    let e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, J2.unregister(this), e2;
  }
  free() {
    let e2 = this.__destroy_into_raw();
    r.__wbg_client_free(e2, 0);
  }
  __getClassname() {
    try {
      let _2 = r.__wbindgen_add_to_stack_pointer(-16);
      r.client___getClassname(_2, this.__wbg_ptr);
      var e2 = u2().getInt32(_2 + 0, true), t = u2().getInt32(_2 + 4, true), n = m(e2, t);
      return e2 !== 0 && r.__wbindgen_export4(e2, t, 1), n;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  __unsafe_open_view(e2) {
    let t = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), n = p2, _2 = r.client___unsafe_open_view(this.__wbg_ptr, t, n);
    return M2.__wrap(_2);
  }
  get_hosted_table_names() {
    let e2 = r.client_get_hosted_table_names(this.__wbg_ptr);
    return d(e2);
  }
  handle_error(e2, t) {
    let n = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), _2 = p2, o = r.client_handle_error(this.__wbg_ptr, n, _2, w2(t) ? 0 : a(t));
    return d(o);
  }
  handle_response(e2) {
    let t = r.client_handle_response(this.__wbg_ptr, a(e2));
    return d(t);
  }
  join(e2, t, n, _2) {
    let o = y2(n, r.__wbindgen_export, r.__wbindgen_export2), l3 = p2, c2 = r.client_join(this.__wbg_ptr, a(e2), a(t), o, l3, w2(_2) ? 0 : a(_2));
    return d(c2);
  }
  constructor(e2, t) {
    try {
      let l3 = r.__wbindgen_add_to_stack_pointer(-16);
      r.client_new(l3, a(e2), w2(t) ? 0 : a(t));
      var n = u2().getInt32(l3 + 0, true), _2 = u2().getInt32(l3 + 4, true), o = u2().getInt32(l3 + 8, true);
      if (o) throw d(_2);
      return this.__wbg_ptr = n >>> 0, J2.register(this, this.__wbg_ptr, this), this;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  new_proxy_session(e2) {
    try {
      let t = r.client_new_proxy_session(this.__wbg_ptr, pe2(e2));
      return U2.__wrap(t);
    } finally {
      I2[D2++] = void 0;
    }
  }
  on_error(e2) {
    let t = r.client_on_error(this.__wbg_ptr, a(e2));
    return d(t);
  }
  on_hosted_tables_update(e2) {
    let t = r.client_on_hosted_tables_update(this.__wbg_ptr, a(e2));
    return d(t);
  }
  open_table(e2) {
    let t = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), n = p2, _2 = r.client_open_table(this.__wbg_ptr, t, n);
    return d(_2);
  }
  remove_hosted_tables_update(e2) {
    let t = r.client_remove_hosted_tables_update(this.__wbg_ptr, e2);
    return d(t);
  }
  system_info() {
    let e2 = r.client_system_info(this.__wbg_ptr);
    return d(e2);
  }
  table(e2, t) {
    let n = r.client_table(this.__wbg_ptr, a(e2), w2(t) ? 0 : a(t));
    return d(n);
  }
  terminate() {
    try {
      let _2 = r.__wbindgen_add_to_stack_pointer(-16);
      r.client_terminate(_2, this.__wbg_ptr);
      var e2 = u2().getInt32(_2 + 0, true), t = u2().getInt32(_2 + 4, true), n = u2().getInt32(_2 + 8, true);
      if (n) throw d(t);
      return d(e2);
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
Symbol.dispose && (j2.prototype[Symbol.dispose] = j2.prototype.free);
var A2 = class {
  __destroy_into_raw() {
    let e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ae2.unregister(this), e2;
  }
  free() {
    let e2 = this.__destroy_into_raw();
    r.__wbg_genericsqlvirtualservermodel_free(e2, 0);
  }
  expressionDescribe(e2, t) {
    try {
      let g3 = r.__wbindgen_add_to_stack_pointer(-16), f3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), b4 = p2, h3 = y2(t, r.__wbindgen_export, r.__wbindgen_export2), v3 = p2;
      r.genericsqlvirtualservermodel_expressionDescribe(g3, this.__wbg_ptr, f3, b4, h3, v3);
      var n = u2().getInt32(g3 + 0, true), _2 = u2().getInt32(g3 + 4, true), o = u2().getInt32(g3 + 8, true), l3 = u2().getInt32(g3 + 12, true);
      if (l3) throw d(o);
      var c2 = m(n, _2);
      return n !== 0 && r.__wbindgen_export4(n, _2, 1), c2;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  expressionsDescribe(e2, t) {
    try {
      let g3 = r.__wbindgen_add_to_stack_pointer(-16), f3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), b4 = p2;
      r.genericsqlvirtualservermodel_expressionsDescribe(g3, this.__wbg_ptr, f3, b4, a(t));
      var n = u2().getInt32(g3 + 0, true), _2 = u2().getInt32(g3 + 4, true), o = u2().getInt32(g3 + 8, true), l3 = u2().getInt32(g3 + 12, true);
      if (l3) throw d(o);
      var c2 = m(n, _2);
      return n !== 0 && r.__wbindgen_export4(n, _2, 1), c2;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  getHostedTables() {
    try {
      let l3 = r.__wbindgen_add_to_stack_pointer(-16);
      r.genericsqlvirtualservermodel_getHostedTables(l3, this.__wbg_ptr);
      var e2 = u2().getInt32(l3 + 0, true), t = u2().getInt32(l3 + 4, true), n = u2().getInt32(l3 + 8, true), _2 = u2().getInt32(l3 + 12, true);
      if (_2) throw d(n);
      var o = m(e2, t);
      return e2 !== 0 && r.__wbindgen_export4(e2, t, 1), o;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  constructor(e2) {
    try {
      let o = r.__wbindgen_add_to_stack_pointer(-16);
      r.genericsqlvirtualservermodel_new(o, w2(e2) ? 0 : a(e2));
      var t = u2().getInt32(o + 0, true), n = u2().getInt32(o + 4, true), _2 = u2().getInt32(o + 8, true);
      if (_2) throw d(n);
      return this.__wbg_ptr = t >>> 0, ae2.register(this, this.__wbg_ptr, this), this;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  quoteEntity(e2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), f3 = p2;
      r.genericsqlvirtualservermodel_quoteEntity(c2, this.__wbg_ptr, g3, f3);
      var t = u2().getInt32(c2 + 0, true), n = u2().getInt32(c2 + 4, true), _2 = u2().getInt32(c2 + 8, true), o = u2().getInt32(c2 + 12, true);
      if (o) throw d(_2);
      var l3 = m(t, n);
      return t !== 0 && r.__wbindgen_export4(t, n, 1), l3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  tableDescribe(e2, t, n, _2) {
    try {
      let b4 = r.__wbindgen_add_to_stack_pointer(-16), h3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), v3 = p2;
      r.genericsqlvirtualservermodel_tableDescribe(b4, this.__wbg_ptr, h3, v3, a(t), a(n), w2(_2) ? 16777215 : _2 ? 1 : 0);
      var o = u2().getInt32(b4 + 0, true), l3 = u2().getInt32(b4 + 4, true), c2 = u2().getInt32(b4 + 8, true), g3 = u2().getInt32(b4 + 12, true);
      if (g3) throw d(c2);
      var f3 = m(o, l3);
      return o !== 0 && r.__wbindgen_export4(o, l3, 1), f3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  tableMakeView(e2, t, n, _2, o) {
    try {
      let h3 = r.__wbindgen_add_to_stack_pointer(-16), v3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), k5 = p2, G5 = y2(t, r.__wbindgen_export, r.__wbindgen_export2), K6 = p2;
      r.genericsqlvirtualservermodel_tableMakeView(h3, this.__wbg_ptr, v3, k5, G5, K6, a(n), a(_2), w2(o) ? 16777215 : o ? 1 : 0);
      var l3 = u2().getInt32(h3 + 0, true), c2 = u2().getInt32(h3 + 4, true), g3 = u2().getInt32(h3 + 8, true), f3 = u2().getInt32(h3 + 12, true);
      if (f3) throw d(g3);
      var b4 = m(l3, c2);
      return l3 !== 0 && r.__wbindgen_export4(l3, c2, 1), b4;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  tablePath(e2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = He(e2, r.__wbindgen_export), f3 = p2;
      r.genericsqlvirtualservermodel_tablePath(c2, this.__wbg_ptr, g3, f3);
      var t = u2().getInt32(c2 + 0, true), n = u2().getInt32(c2 + 4, true), _2 = u2().getInt32(c2 + 8, true), o = u2().getInt32(c2 + 12, true);
      if (o) throw d(_2);
      var l3 = m(t, n);
      return t !== 0 && r.__wbindgen_export4(t, n, 1), l3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  tableSchema(e2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), f3 = p2;
      r.genericsqlvirtualservermodel_tableSchema(c2, this.__wbg_ptr, g3, f3);
      var t = u2().getInt32(c2 + 0, true), n = u2().getInt32(c2 + 4, true), _2 = u2().getInt32(c2 + 8, true), o = u2().getInt32(c2 + 12, true);
      if (o) throw d(_2);
      var l3 = m(t, n);
      return t !== 0 && r.__wbindgen_export4(t, n, 1), l3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  tableSize(e2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), f3 = p2;
      r.genericsqlvirtualservermodel_tableSize(c2, this.__wbg_ptr, g3, f3);
      var t = u2().getInt32(c2 + 0, true), n = u2().getInt32(c2 + 4, true), _2 = u2().getInt32(c2 + 8, true), o = u2().getInt32(c2 + 12, true);
      if (o) throw d(_2);
      var l3 = m(t, n);
      return t !== 0 && r.__wbindgen_export4(t, n, 1), l3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  viewCollapse(e2, t, n) {
    try {
      let f3 = r.__wbindgen_add_to_stack_pointer(-16), b4 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), h3 = p2;
      r.genericsqlvirtualservermodel_viewCollapse(f3, this.__wbg_ptr, b4, h3, a(t), n);
      var _2 = u2().getInt32(f3 + 0, true), o = u2().getInt32(f3 + 4, true), l3 = u2().getInt32(f3 + 8, true), c2 = u2().getInt32(f3 + 12, true);
      if (c2) throw d(l3);
      var g3 = m(_2, o);
      return _2 !== 0 && r.__wbindgen_export4(_2, o, 1), g3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  viewColumnSize(e2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), f3 = p2;
      r.genericsqlvirtualservermodel_viewColumnSize(c2, this.__wbg_ptr, g3, f3);
      var t = u2().getInt32(c2 + 0, true), n = u2().getInt32(c2 + 4, true), _2 = u2().getInt32(c2 + 8, true), o = u2().getInt32(c2 + 12, true);
      if (o) throw d(_2);
      var l3 = m(t, n);
      return t !== 0 && r.__wbindgen_export4(t, n, 1), l3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  viewDelete(e2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), f3 = p2;
      r.genericsqlvirtualservermodel_viewDelete(c2, this.__wbg_ptr, g3, f3);
      var t = u2().getInt32(c2 + 0, true), n = u2().getInt32(c2 + 4, true), _2 = u2().getInt32(c2 + 8, true), o = u2().getInt32(c2 + 12, true);
      if (o) throw d(_2);
      var l3 = m(t, n);
      return t !== 0 && r.__wbindgen_export4(t, n, 1), l3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  viewExpand(e2, t, n) {
    try {
      let f3 = r.__wbindgen_add_to_stack_pointer(-16), b4 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), h3 = p2;
      r.genericsqlvirtualservermodel_viewExpand(f3, this.__wbg_ptr, b4, h3, a(t), n);
      var _2 = u2().getInt32(f3 + 0, true), o = u2().getInt32(f3 + 4, true), l3 = u2().getInt32(f3 + 8, true), c2 = u2().getInt32(f3 + 12, true);
      if (c2) throw d(l3);
      var g3 = m(_2, o);
      return _2 !== 0 && r.__wbindgen_export4(_2, o, 1), g3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  viewGetData(e2, t, n, _2) {
    try {
      let b4 = r.__wbindgen_add_to_stack_pointer(-16), h3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), v3 = p2;
      r.genericsqlvirtualservermodel_viewGetData(b4, this.__wbg_ptr, h3, v3, a(t), a(n), a(_2));
      var o = u2().getInt32(b4 + 0, true), l3 = u2().getInt32(b4 + 4, true), c2 = u2().getInt32(b4 + 8, true), g3 = u2().getInt32(b4 + 12, true);
      if (g3) throw d(c2);
      var f3 = m(o, l3);
      return o !== 0 && r.__wbindgen_export4(o, l3, 1), f3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  viewGetMinMax(e2, t, n) {
    try {
      let f3 = r.__wbindgen_add_to_stack_pointer(-16), b4 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), h3 = p2, v3 = y2(t, r.__wbindgen_export, r.__wbindgen_export2), k5 = p2;
      r.genericsqlvirtualservermodel_viewGetMinMax(f3, this.__wbg_ptr, b4, h3, v3, k5, a(n));
      var _2 = u2().getInt32(f3 + 0, true), o = u2().getInt32(f3 + 4, true), l3 = u2().getInt32(f3 + 8, true), c2 = u2().getInt32(f3 + 12, true);
      if (c2) throw d(l3);
      var g3 = m(_2, o);
      return _2 !== 0 && r.__wbindgen_export4(_2, o, 1), g3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  viewMakeTable(e2, t, n, _2, o) {
    try {
      let h3 = r.__wbindgen_add_to_stack_pointer(-16), v3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), k5 = p2, G5 = y2(t, r.__wbindgen_export, r.__wbindgen_export2), K6 = p2;
      r.genericsqlvirtualservermodel_viewMakeTable(h3, this.__wbg_ptr, v3, k5, G5, K6, a(n), a(_2), a(o));
      var l3 = u2().getInt32(h3 + 0, true), c2 = u2().getInt32(h3 + 4, true), g3 = u2().getInt32(h3 + 8, true), f3 = u2().getInt32(h3 + 12, true);
      if (f3) throw d(g3);
      var b4 = m(l3, c2);
      return l3 !== 0 && r.__wbindgen_export4(l3, c2, 1), b4;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  viewSchema(e2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), f3 = p2;
      r.genericsqlvirtualservermodel_viewSchema(c2, this.__wbg_ptr, g3, f3);
      var t = u2().getInt32(c2 + 0, true), n = u2().getInt32(c2 + 4, true), _2 = u2().getInt32(c2 + 8, true), o = u2().getInt32(c2 + 12, true);
      if (o) throw d(_2);
      var l3 = m(t, n);
      return t !== 0 && r.__wbindgen_export4(t, n, 1), l3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  viewSetDepth(e2, t, n) {
    try {
      let f3 = r.__wbindgen_add_to_stack_pointer(-16), b4 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), h3 = p2;
      r.genericsqlvirtualservermodel_viewSetDepth(f3, this.__wbg_ptr, b4, h3, a(t), n);
      var _2 = u2().getInt32(f3 + 0, true), o = u2().getInt32(f3 + 4, true), l3 = u2().getInt32(f3 + 8, true), c2 = u2().getInt32(f3 + 12, true);
      if (c2) throw d(l3);
      var g3 = m(_2, o);
      return _2 !== 0 && r.__wbindgen_export4(_2, o, 1), g3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  viewSize(e2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), f3 = p2;
      r.genericsqlvirtualservermodel_viewSize(c2, this.__wbg_ptr, g3, f3);
      var t = u2().getInt32(c2 + 0, true), n = u2().getInt32(c2 + 4, true), _2 = u2().getInt32(c2 + 8, true), o = u2().getInt32(c2 + 12, true);
      if (o) throw d(_2);
      var l3 = m(t, n);
      return t !== 0 && r.__wbindgen_export4(t, n, 1), l3;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
Symbol.dispose && (A2.prototype[Symbol.dispose] = A2.prototype.free);
var U2 = class i2 {
  static __wrap(e2) {
    e2 = e2 >>> 0;
    let t = Object.create(i2.prototype);
    return t.__wbg_ptr = e2, Y2.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    let e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Y2.unregister(this), e2;
  }
  free() {
    let e2 = this.__destroy_into_raw();
    r.__wbg_proxysession_free(e2, 0);
  }
  close() {
    let e2 = this.__destroy_into_raw(), t = r.proxysession_close(e2);
    return d(t);
  }
  handle_request(e2) {
    let t = r.proxysession_handle_request(this.__wbg_ptr, a(e2));
    return d(t);
  }
  constructor(e2, t) {
    try {
      Ee(e2, j2);
      let n = r.proxysession_new(e2.__wbg_ptr, pe2(t));
      return this.__wbg_ptr = n >>> 0, Y2.register(this, this.__wbg_ptr, this), this;
    } finally {
      I2[D2++] = void 0;
    }
  }
};
Symbol.dispose && (U2.prototype[Symbol.dispose] = U2.prototype.free);
var P2 = class i3 {
  static __wrap(e2) {
    e2 = e2 >>> 0;
    let t = Object.create(i3.prototype);
    return t.__wbg_ptr = e2, ce.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    let e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ce.unregister(this), e2;
  }
  free() {
    let e2 = this.__destroy_into_raw();
    r.__wbg_table_free(e2, 0);
  }
  __getClassname() {
    try {
      let _2 = r.__wbindgen_add_to_stack_pointer(-16);
      r.table___getClassname(_2, this.__wbg_ptr);
      var e2 = u2().getInt32(_2 + 0, true), t = u2().getInt32(_2 + 4, true), n = m(e2, t);
      return e2 !== 0 && r.__wbindgen_export4(e2, t, 1), n;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  clear() {
    let e2 = r.table_clear(this.__wbg_ptr);
    return d(e2);
  }
  columns() {
    let e2 = r.table_columns(this.__wbg_ptr);
    return d(e2);
  }
  delete(e2) {
    let t = this.__destroy_into_raw(), n = r.table_delete(t, w2(e2) ? 0 : a(e2));
    return d(n);
  }
  describe(e2) {
    let t = r.table_describe(this.__wbg_ptr, w2(e2) ? 0 : a(e2));
    return d(t);
  }
  get_client() {
    let e2 = r.table_get_client(this.__wbg_ptr);
    return d(e2);
  }
  get_features() {
    let e2 = r.table_get_features(this.__wbg_ptr);
    return d(e2);
  }
  get_index() {
    let e2 = r.table_get_index(this.__wbg_ptr);
    return d(e2);
  }
  get_limit() {
    let e2 = r.table_get_limit(this.__wbg_ptr);
    return d(e2);
  }
  get_name() {
    let e2 = r.table_get_name(this.__wbg_ptr);
    return d(e2);
  }
  make_port() {
    let e2 = r.table_make_port(this.__wbg_ptr);
    return d(e2);
  }
  on_delete(e2) {
    let t = r.table_on_delete(this.__wbg_ptr, a(e2));
    return d(t);
  }
  remove(e2, t) {
    let n = r.table_remove(this.__wbg_ptr, a(e2), w2(t) ? 0 : a(t));
    return d(n);
  }
  remove_delete(e2) {
    let t = r.table_remove_delete(this.__wbg_ptr, e2);
    return d(t);
  }
  replace(e2, t) {
    let n = r.table_replace(this.__wbg_ptr, a(e2), w2(t) ? 0 : a(t));
    return d(n);
  }
  schema() {
    let e2 = r.table_schema(this.__wbg_ptr);
    return d(e2);
  }
  size() {
    let e2 = r.table_size(this.__wbg_ptr);
    return d(e2);
  }
  update(e2, t) {
    let n = r.table_update(this.__wbg_ptr, a(e2), w2(t) ? 0 : a(t));
    return d(n);
  }
  validate_expressions(e2) {
    let t = r.table_validate_expressions(this.__wbg_ptr, a(e2));
    return d(t);
  }
  view(e2) {
    let t = r.table_view(this.__wbg_ptr, w2(e2) ? 0 : a(e2));
    return d(t);
  }
};
Symbol.dispose && (P2.prototype[Symbol.dispose] = P2.prototype.free);
var M2 = class i4 {
  static __wrap(e2) {
    e2 = e2 >>> 0;
    let t = Object.create(i4.prototype);
    return t.__wbg_ptr = e2, ue.register(t, t.__wbg_ptr, t), t;
  }
  static __unwrap(e2) {
    return e2 instanceof i4 ? e2.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    let e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ue.unregister(this), e2;
  }
  free() {
    let e2 = this.__destroy_into_raw();
    r.__wbg_view_free(e2, 0);
  }
  __get_model() {
    let e2 = r.view___get_model(this.__wbg_ptr);
    return i4.__wrap(e2);
  }
  __unsafe_get_name() {
    try {
      let _2 = r.__wbindgen_add_to_stack_pointer(-16);
      r.view___unsafe_get_name(_2, this.__wbg_ptr);
      var e2 = u2().getInt32(_2 + 0, true), t = u2().getInt32(_2 + 4, true), n = m(e2, t);
      return e2 !== 0 && r.__wbindgen_export4(e2, t, 1), n;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  collapse(e2) {
    let t = r.view_collapse(this.__wbg_ptr, e2);
    return d(t);
  }
  column_paths(e2) {
    let t = r.view_column_paths(this.__wbg_ptr, w2(e2) ? 0 : a(e2));
    return d(t);
  }
  delete() {
    let e2 = this.__destroy_into_raw(), t = r.view_delete(e2);
    return d(t);
  }
  dimensions() {
    let e2 = r.view_dimensions(this.__wbg_ptr);
    return d(e2);
  }
  expand(e2) {
    let t = r.view_expand(this.__wbg_ptr, e2);
    return d(t);
  }
  expression_schema() {
    let e2 = r.view_expression_schema(this.__wbg_ptr);
    return d(e2);
  }
  get_config() {
    let e2 = r.view_get_config(this.__wbg_ptr);
    return d(e2);
  }
  get_min_max(e2) {
    let t = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), n = p2, _2 = r.view_get_min_max(this.__wbg_ptr, t, n);
    return d(_2);
  }
  num_columns() {
    let e2 = r.view_num_columns(this.__wbg_ptr);
    return d(e2);
  }
  num_rows() {
    let e2 = r.view_num_rows(this.__wbg_ptr);
    return d(e2);
  }
  on_delete(e2) {
    let t = r.view_on_delete(this.__wbg_ptr, a(e2));
    return d(t);
  }
  on_remove(e2) {
    let t = r.view_on_remove(this.__wbg_ptr, a(e2));
    return d(t);
  }
  on_update(e2, t) {
    let n = r.view_on_update(this.__wbg_ptr, a(e2), w2(t) ? 0 : a(t));
    return d(n);
  }
  remove_delete(e2) {
    let t = r.view_remove_delete(this.__wbg_ptr, e2);
    return d(t);
  }
  remove_remove(e2) {
    let t = r.view_remove_remove(this.__wbg_ptr, e2);
    return d(t);
  }
  remove_update(e2) {
    let t = r.view_remove_update(this.__wbg_ptr, e2);
    return d(t);
  }
  schema() {
    let e2 = r.view_schema(this.__wbg_ptr);
    return d(e2);
  }
  set_depth(e2) {
    let t = r.view_set_depth(this.__wbg_ptr, e2);
    return d(t);
  }
  to_arrow(e2) {
    let t = r.view_to_arrow(this.__wbg_ptr, w2(e2) ? 0 : a(e2));
    return d(t);
  }
  to_columns(e2) {
    let t = r.view_to_columns(this.__wbg_ptr, w2(e2) ? 0 : a(e2));
    return d(t);
  }
  to_columns_string(e2) {
    let t = r.view_to_columns_string(this.__wbg_ptr, w2(e2) ? 0 : a(e2));
    return d(t);
  }
  to_csv(e2) {
    let t = r.view_to_csv(this.__wbg_ptr, w2(e2) ? 0 : a(e2));
    return d(t);
  }
  to_json(e2) {
    let t = r.view_to_json(this.__wbg_ptr, w2(e2) ? 0 : a(e2));
    return d(t);
  }
  to_json_string(e2) {
    let t = r.view_to_json_string(this.__wbg_ptr, w2(e2) ? 0 : a(e2));
    return d(t);
  }
  to_ndjson(e2) {
    let t = r.view_to_ndjson(this.__wbg_ptr, w2(e2) ? 0 : a(e2));
    return d(t);
  }
  with_typed_arrays(e2, t) {
    let n = r.view_with_typed_arrays(this.__wbg_ptr, w2(e2) ? 0 : a(e2), a(t));
    return d(n);
  }
};
Symbol.dispose && (M2.prototype[Symbol.dispose] = M2.prototype.free);
var S2 = class i5 {
  static __wrap(e2) {
    e2 = e2 >>> 0;
    let t = Object.create(i5.prototype);
    return t.__wbg_ptr = e2, Q2.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    let e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Q2.unregister(this), e2;
  }
  free() {
    let e2 = this.__destroy_into_raw();
    r.__wbg_virtualdataslice_free(e2, 0);
  }
  fromArrowIpc(e2) {
    try {
      let _2 = r.__wbindgen_add_to_stack_pointer(-16);
      r.virtualdataslice_fromArrowIpc(_2, this.__wbg_ptr, a(e2));
      var t = u2().getInt32(_2 + 0, true), n = u2().getInt32(_2 + 4, true);
      if (n) throw d(t);
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  constructor(e2) {
    let t = r.virtualdataslice_new(a(e2));
    return this.__wbg_ptr = t >>> 0, Q2.register(this, this.__wbg_ptr, this), this;
  }
  setBooleanCol(e2, t, n, _2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), f3 = p2;
      r.virtualdataslice_setBooleanCol(c2, this.__wbg_ptr, g3, f3, t, a(n), w2(_2) ? 4294967297 : _2 >>> 0);
      var o = u2().getInt32(c2 + 0, true), l3 = u2().getInt32(c2 + 4, true);
      if (l3) throw d(o);
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  setCol(e2, t, n, _2, o) {
    try {
      let g3 = r.__wbindgen_add_to_stack_pointer(-16), f3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), b4 = p2, h3 = y2(t, r.__wbindgen_export, r.__wbindgen_export2), v3 = p2;
      r.virtualdataslice_setCol(g3, this.__wbg_ptr, f3, b4, h3, v3, n, a(_2), w2(o) ? 4294967297 : o >>> 0);
      var l3 = u2().getInt32(g3 + 0, true), c2 = u2().getInt32(g3 + 4, true);
      if (c2) throw d(l3);
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  setDatetimeCol(e2, t, n, _2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), f3 = p2;
      r.virtualdataslice_setDatetimeCol(c2, this.__wbg_ptr, g3, f3, t, a(n), w2(_2) ? 4294967297 : _2 >>> 0);
      var o = u2().getInt32(c2 + 0, true), l3 = u2().getInt32(c2 + 4, true);
      if (l3) throw d(o);
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  setFloatCol(e2, t, n, _2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), f3 = p2;
      r.virtualdataslice_setFloatCol(c2, this.__wbg_ptr, g3, f3, t, a(n), w2(_2) ? 4294967297 : _2 >>> 0);
      var o = u2().getInt32(c2 + 0, true), l3 = u2().getInt32(c2 + 4, true);
      if (l3) throw d(o);
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  setIntegerCol(e2, t, n, _2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), f3 = p2;
      r.virtualdataslice_setIntegerCol(c2, this.__wbg_ptr, g3, f3, t, a(n), w2(_2) ? 4294967297 : _2 >>> 0);
      var o = u2().getInt32(c2 + 0, true), l3 = u2().getInt32(c2 + 4, true);
      if (l3) throw d(o);
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  setStringCol(e2, t, n, _2) {
    try {
      let c2 = r.__wbindgen_add_to_stack_pointer(-16), g3 = y2(e2, r.__wbindgen_export, r.__wbindgen_export2), f3 = p2;
      r.virtualdataslice_setStringCol(c2, this.__wbg_ptr, g3, f3, t, a(n), w2(_2) ? 4294967297 : _2 >>> 0);
      var o = u2().getInt32(c2 + 0, true), l3 = u2().getInt32(c2 + 4, true);
      if (l3) throw d(o);
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
Symbol.dispose && (S2.prototype[Symbol.dispose] = S2.prototype.free);
var W2 = class {
  __destroy_into_raw() {
    let e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, le.unregister(this), e2;
  }
  free() {
    let e2 = this.__destroy_into_raw();
    r.__wbg_virtualserver_free(e2, 0);
  }
  handleRequest(e2) {
    let t = Ve(e2, r.__wbindgen_export), n = p2, _2 = r.virtualserver_handleRequest(this.__wbg_ptr, t, n);
    return d(_2);
  }
  constructor(e2) {
    try {
      let o = r.__wbindgen_add_to_stack_pointer(-16);
      r.virtualserver_new(o, a(e2));
      var t = u2().getInt32(o + 0, true), n = u2().getInt32(o + 4, true), _2 = u2().getInt32(o + 8, true);
      if (_2) throw d(n);
      return this.__wbg_ptr = t >>> 0, le.register(this, this.__wbg_ptr, this), this;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
Symbol.dispose && (W2.prototype[Symbol.dispose] = W2.prototype.free);
function ee2() {
  r.init();
}
function ge2() {
  return { __proto__: null, "./perspective-js.wasm_bg.js": { __proto__: null, __wbg_Error_8c4e43fe74559d73: function(e2, t) {
    var n = m(e2, t);
    let _2 = Error(n);
    return a(_2);
  }, __wbg_Number_04624de7d0e8332d: function(e2) {
    return Number(s2(e2));
  }, __wbg_String_8f0eb39a4a4c2f66: function(e2, t) {
    let n = String(s2(t)), _2 = y2(n, r.__wbindgen_export, r.__wbindgen_export2), o = p2;
    u2().setInt32(e2 + 4, o, true), u2().setInt32(e2 + 0, _2, true);
  }, __wbg___wbindgen_bigint_get_as_i64_8fcf4ce7f1ca72a2: function(e2, t) {
    let n = s2(t), _2 = typeof n == "bigint" ? n : void 0;
    u2().setBigInt64(e2 + 8, w2(_2) ? BigInt(0) : _2, true), u2().setInt32(e2 + 0, !w2(_2), true);
  }, __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: function(e2) {
    let t = s2(e2), n = typeof t == "boolean" ? t : void 0;
    return w2(n) ? 16777215 : n ? 1 : 0;
  }, __wbg___wbindgen_debug_string_0bc8482c6e3508ae: function(e2, t) {
    let n = Z2(s2(t)), _2 = y2(n, r.__wbindgen_export, r.__wbindgen_export2), o = p2;
    u2().setInt32(e2 + 4, o, true), u2().setInt32(e2 + 0, _2, true);
  }, __wbg___wbindgen_in_47fa6863be6f2f25: function(e2, t) {
    return s2(e2) in s2(t);
  }, __wbg___wbindgen_is_bigint_31b12575b56f32fc: function(e2) {
    return typeof s2(e2) == "bigint";
  }, __wbg___wbindgen_is_function_0095a73b8b156f76: function(e2) {
    return typeof s2(e2) == "function";
  }, __wbg___wbindgen_is_null_ac34f5003991759a: function(e2) {
    return s2(e2) === null;
  }, __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: function(e2) {
    let t = s2(e2);
    return typeof t == "object" && t !== null;
  }, __wbg___wbindgen_is_string_cd444516edc5b180: function(e2) {
    return typeof s2(e2) == "string";
  }, __wbg___wbindgen_is_undefined_9e4d92534c42d778: function(e2) {
    return s2(e2) === void 0;
  }, __wbg___wbindgen_jsval_eq_11888390b0186270: function(e2, t) {
    return s2(e2) === s2(t);
  }, __wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811: function(e2, t) {
    return s2(e2) == s2(t);
  }, __wbg___wbindgen_number_get_8ff4255516ccad3e: function(e2, t) {
    let n = s2(t), _2 = typeof n == "number" ? n : void 0;
    u2().setFloat64(e2 + 8, w2(_2) ? 0 : _2, true), u2().setInt32(e2 + 0, !w2(_2), true);
  }, __wbg___wbindgen_string_get_72fb696202c56729: function(e2, t) {
    let n = s2(t), _2 = typeof n == "string" ? n : void 0;
    var o = w2(_2) ? 0 : y2(_2, r.__wbindgen_export, r.__wbindgen_export2), l3 = p2;
    u2().setInt32(e2 + 4, l3, true), u2().setInt32(e2 + 0, o, true);
  }, __wbg___wbindgen_throw_be289d5034ed271b: function(e2, t) {
    var n = m(e2, t);
    throw new Error(n);
  }, __wbg__wbg_cb_unref_d9b87ff7982e3b21: function(e2) {
    s2(e2)._wbg_cb_unref();
  }, __wbg_apply_ada2ee1a60ac7b3c: function() {
    return x2(function(e2, t, n) {
      let _2 = s2(e2).apply(s2(t), s2(n));
      return a(_2);
    }, arguments);
  }, __wbg_at_dfc235641cc0e40c: function(e2, t) {
    let n = s2(e2).at(t);
    return a(n);
  }, __wbg_buffer_26d0910f3a5bc899: function(e2) {
    let t = s2(e2).buffer;
    return a(t);
  }, __wbg_call_389efe28435a9388: function() {
    return x2(function(e2, t) {
      let n = s2(e2).call(s2(t));
      return a(n);
    }, arguments);
  }, __wbg_call_41bedb84c3e5c0c9: function() {
    return x2(function(e2, t, n, _2, o, l3) {
      let c2 = s2(e2).call(s2(t), s2(n), s2(_2), s2(o), s2(l3));
      return a(c2);
    }, arguments);
  }, __wbg_call_4708e0c13bdc8e95: function() {
    return x2(function(e2, t, n) {
      let _2 = s2(e2).call(s2(t), s2(n));
      return a(_2);
    }, arguments);
  }, __wbg_call_812d25f1510c13c8: function() {
    return x2(function(e2, t, n, _2) {
      let o = s2(e2).call(s2(t), s2(n), s2(_2));
      return a(o);
    }, arguments);
  }, __wbg_client_new: function(e2) {
    let t = j2.__wrap(e2);
    return a(t);
  }, __wbg_debug_46a93995fc6f8820: function(e2, t, n, _2) {
    console.debug(s2(e2), s2(t), s2(n), s2(_2));
  }, __wbg_debug_a4099fa12db6cd61: function(e2) {
    console.debug(s2(e2));
  }, __wbg_done_57b39ecd9addfe81: function(e2) {
    return s2(e2).done;
  }, __wbg_entries_58c7934c745daac7: function(e2) {
    let t = Object.entries(s2(e2));
    return a(t);
  }, __wbg_error_794d0ffc9d00d5c3: function(e2, t, n, _2) {
    console.error(s2(e2), s2(t), s2(n), s2(_2));
  }, __wbg_error_9a7fe3f932034cde: function(e2) {
    console.error(s2(e2));
  }, __wbg_error_f852e41c69b0bd84: function(e2, t) {
    console.error(s2(e2), s2(t));
  }, __wbg_from_bddd64e7d5ff6941: function(e2) {
    let t = Array.from(s2(e2));
    return a(t);
  }, __wbg_getEntriesByName_02488cff0bc7581c: function(e2, t, n, _2, o) {
    var l3 = m(t, n), c2 = m(_2, o);
    let g3 = s2(e2).getEntriesByName(l3, c2);
    return a(g3);
  }, __wbg_getRandomValues_1c61fac11405ffdc: function() {
    return x2(function(e2, t) {
      globalThis.crypto.getRandomValues(R2(e2, t));
    }, arguments);
  }, __wbg_getTime_1e3cd1391c5c3995: function(e2) {
    return s2(e2).getTime();
  }, __wbg_get_76e04509d1922a04: function(e2, t, n) {
    var _2 = m(t, n);
    let o = s2(e2)[_2];
    return w2(o) ? 0 : a(o);
  }, __wbg_get_9b94d73e6221f75c: function(e2, t) {
    let n = s2(e2)[t >>> 0];
    return a(n);
  }, __wbg_get_b3ed3ad4be2bc8ac: function() {
    return x2(function(e2, t) {
      let n = Reflect.get(s2(e2), s2(t));
      return a(n);
    }, arguments);
  }, __wbg_get_with_ref_key_1dc361bd10053bfe: function(e2, t) {
    let n = s2(e2)[s2(t)];
    return a(n);
  }, __wbg_has_d4e53238966c12b6: function() {
    return x2(function(e2, t) {
      return Reflect.has(s2(e2), s2(t));
    }, arguments);
  }, __wbg_info_148d043840582012: function(e2) {
    console.info(s2(e2));
  }, __wbg_info_9e602cf10c5c690b: function(e2, t, n, _2) {
    console.info(s2(e2), s2(t), s2(n), s2(_2));
  }, __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04: function(e2) {
    let t;
    try {
      t = s2(e2) instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Array_d9eac779cd191cbc: function(e2) {
    let t;
    try {
      t = s2(e2) instanceof Array;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Date_1b9f15b87f10aa4c: function(e2) {
    let t;
    try {
      t = s2(e2) instanceof Date;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Error_8573fe0b0b480f46: function(e2) {
    let t;
    try {
      t = s2(e2) instanceof Error;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Map_53af74335dec57f4: function(e2) {
    let t;
    try {
      t = s2(e2) instanceof Map;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Object_1c6af87502b733ed: function(e2) {
    let t;
    try {
      t = s2(e2) instanceof Object;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Promise_0094681e3519d6ec: function(e2) {
    let t;
    try {
      t = s2(e2) instanceof Promise;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Uint8Array_9b9075935c74707c: function(e2) {
    let t;
    try {
      t = s2(e2) instanceof Uint8Array;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Window_ed49b2db8df90359: function(e2) {
    let t;
    try {
      t = s2(e2) instanceof Window;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_isArray_d314bb98fcf08331: function(e2) {
    return Array.isArray(s2(e2));
  }, __wbg_isSafeInteger_bfbc7332a9768d2a: function(e2) {
    return Number.isSafeInteger(s2(e2));
  }, __wbg_iterator_6ff6560ca1568e55: function() {
    return a(Symbol.iterator);
  }, __wbg_keys_b50a709a76add04e: function(e2) {
    let t = Object.keys(s2(e2));
    return a(t);
  }, __wbg_length_32ed9a279acd054c: function(e2) {
    return s2(e2).length;
  }, __wbg_length_35a7bace40f36eac: function(e2) {
    return s2(e2).length;
  }, __wbg_mark_3b530a64b09ba08a: function() {
    return x2(function(e2, t, n) {
      var _2 = m(t, n);
      s2(e2).mark(_2);
    }, arguments);
  }, __wbg_measure_288b48c082eae0fe: function() {
    return x2(function(e2, t, n, _2, o) {
      var l3 = m(t, n), c2 = m(_2, o);
      s2(e2).measure(l3, c2);
    }, arguments);
  }, __wbg_message_9ddc4b9a62a7c379: function(e2) {
    let t = s2(e2).message;
    return a(t);
  }, __wbg_new_361308b2356cecd0: function() {
    let e2 = new Object();
    return a(e2);
  }, __wbg_new_3eb36ae241fe6f44: function() {
    let e2 = new Array();
    return a(e2);
  }, __wbg_new_72b49615380db768: function(e2, t) {
    var n = m(e2, t);
    let _2 = new Error(n);
    return a(_2);
  }, __wbg_new_b5d9e2fb389fef91: function(e2, t) {
    try {
      var n = { a: e2, b: t }, _2 = (l3, c2) => {
        let g3 = n.a;
        n.a = 0;
        try {
          return je(g3, n.b, l3, c2);
        } finally {
          n.a = g3;
        }
      };
      let o = new Promise(_2);
      return a(o);
    } finally {
      n.a = n.b = 0;
    }
  }, __wbg_new_dca287b076112a51: function() {
    return a(/* @__PURE__ */ new Map());
  }, __wbg_new_dd2b680c8bf6ae29: function(e2) {
    let t = new Uint8Array(s2(e2));
    return a(t);
  }, __wbg_new_from_slice_a3d2629dc1826784: function(e2, t) {
    let n = new Uint8Array(R2(e2, t));
    return a(n);
  }, __wbg_new_no_args_1c7c842f08d00ebb: function(e2, t) {
    var n = m(e2, t);
    let _2 = new Function(n);
    return a(_2);
  }, __wbg_next_3482f54c49e8af19: function() {
    return x2(function(e2) {
      let t = s2(e2).next();
      return a(t);
    }, arguments);
  }, __wbg_next_418f80d8f5303233: function(e2) {
    let t = s2(e2).next;
    return a(t);
  }, __wbg_now_ebffdf7e580f210d: function(e2) {
    return s2(e2).now();
  }, __wbg_parse_708461a1feddfb38: function() {
    return x2(function(e2, t) {
      var n = m(e2, t);
      let _2 = JSON.parse(n);
      return a(_2);
    }, arguments);
  }, __wbg_performance_06f12ba62483475d: function(e2) {
    let t = s2(e2).performance;
    return w2(t) ? 0 : a(t);
  }, __wbg_prototypesetcall_bdcdcc5842e4d77d: function(e2, t, n) {
    Uint8Array.prototype.set.call(R2(e2, t), s2(n));
  }, __wbg_push_8ffdcb2063340ba5: function(e2, t) {
    return s2(e2).push(s2(t));
  }, __wbg_queueMicrotask_0aa0a927f78f5d98: function(e2) {
    let t = s2(e2).queueMicrotask;
    return a(t);
  }, __wbg_queueMicrotask_5bb536982f78a56f: function(e2) {
    queueMicrotask(s2(e2));
  }, __wbg_reject_a2176de7f1212be5: function(e2) {
    let t = Promise.reject(s2(e2));
    return a(t);
  }, __wbg_resolve_002c4b7d9d8f6b64: function(e2) {
    let t = Promise.resolve(s2(e2));
    return a(t);
  }, __wbg_run_fbfb3667d8440eaa: function() {
    return x2(function(e2, t) {
      let n = s2(e2).run(s2(t));
      return a(n);
    }, arguments);
  }, __wbg_set_1eb0999cf5d27fc8: function(e2, t, n) {
    let _2 = s2(e2).set(s2(t), s2(n));
    return a(_2);
  }, __wbg_set_3f1d0b984ed272ed: function(e2, t, n) {
    s2(e2)[d(t)] = d(n);
  }, __wbg_set_6cb8631f80447a67: function() {
    return x2(function(e2, t, n) {
      return Reflect.set(s2(e2), s2(t), s2(n));
    }, arguments);
  }, __wbg_set_f43e577aea94465b: function(e2, t, n) {
    s2(e2)[t >>> 0] = d(n);
  }, __wbg_startTime_248495bfbcb427d3: function(e2) {
    return s2(e2).startTime;
  }, __wbg_static_accessor_GLOBAL_12837167ad935116: function() {
    let e2 = typeof global > "u" ? null : global;
    return w2(e2) ? 0 : a(e2);
  }, __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: function() {
    let e2 = typeof globalThis > "u" ? null : globalThis;
    return w2(e2) ? 0 : a(e2);
  }, __wbg_static_accessor_SELF_a621d3dfbb60d0ce: function() {
    let e2 = typeof self > "u" ? null : self;
    return w2(e2) ? 0 : a(e2);
  }, __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: function() {
    let e2 = typeof window > "u" ? null : window;
    return w2(e2) ? 0 : a(e2);
  }, __wbg_stringify_8d1cc6ff383e8bae: function() {
    return x2(function(e2) {
      let t = JSON.stringify(s2(e2));
      return a(t);
    }, arguments);
  }, __wbg_table_new: function(e2) {
    let t = P2.__wrap(e2);
    return a(t);
  }, __wbg_then_0d9fe2c7b1857d32: function(e2, t, n) {
    let _2 = s2(e2).then(s2(t), s2(n));
    return a(_2);
  }, __wbg_then_b9e7b3b5f1a9e1b5: function(e2, t) {
    let n = s2(e2).then(s2(t));
    return a(n);
  }, __wbg_toString_964ff7fe6eca8362: function(e2) {
    let t = s2(e2).toString();
    return a(t);
  }, __wbg_trace_9007714a6fbee374: function(e2) {
    console.trace(s2(e2));
  }, __wbg_trace_bd16b570941b54fb: function(e2, t, n, _2) {
    console.trace(s2(e2), s2(t), s2(n), s2(_2));
  }, __wbg_value_0546255b415e96c1: function(e2) {
    let t = s2(e2).value;
    return a(t);
  }, __wbg_values_5da93bc719d272cf: function(e2) {
    let t = Object.values(s2(e2));
    return a(t);
  }, __wbg_view_new: function(e2) {
    let t = M2.__wrap(e2);
    return a(t);
  }, __wbg_view_unwrap: function(e2) {
    return M2.__unwrap(s2(e2));
  }, __wbg_virtualdataslice_new: function(e2) {
    let t = S2.__wrap(e2);
    return a(t);
  }, __wbg_warn_a40b971467b219c7: function(e2, t, n, _2) {
    console.warn(s2(e2), s2(t), s2(n), s2(_2));
  }, __wbg_warn_f7ae1b2e66ccb930: function(e2) {
    console.warn(s2(e2));
  }, __wbindgen_cast_0000000000000001: function(e2, t) {
    let n = de(e2, t, r.__wasm_bindgen_func_elem_1258, We);
    return a(n);
  }, __wbindgen_cast_0000000000000002: function(e2, t) {
    let n = de(e2, t, r.__wasm_bindgen_func_elem_1258, Me);
    return a(n);
  }, __wbindgen_cast_0000000000000003: function(e2, t) {
    let n = Le(e2, t, r.__wasm_bindgen_func_elem_4661, Fe);
    return a(n);
  }, __wbindgen_cast_0000000000000004: function(e2) {
    return a(e2);
  }, __wbindgen_cast_0000000000000005: function(e2) {
    return a(e2);
  }, __wbindgen_cast_0000000000000006: function(e2, t) {
    var n = m(e2, t);
    return a(n);
  }, __wbindgen_cast_0000000000000007: function(e2, t) {
    let n = Pe(e2, t);
    return a(n);
  }, __wbindgen_cast_0000000000000008: function(e2, t) {
    let n = Re(e2, t);
    return a(n);
  }, __wbindgen_cast_0000000000000009: function(e2, t) {
    let n = Oe(e2, t);
    return a(n);
  }, __wbindgen_cast_000000000000000a: function(e2, t) {
    let n = Be(e2, t);
    return a(n);
  }, __wbindgen_cast_000000000000000b: function(e2, t) {
    let n = R2(e2, t);
    return a(n);
  }, __wbindgen_cast_000000000000000c: function(e2) {
    let t = BigInt.asUintN(64, e2);
    return a(t);
  }, __wbindgen_cast_000000000000000d: function(e2, t) {
    var n = qe(e2, t).slice();
    return r.__wbindgen_export4(e2, t * 4, 4), a(n);
  }, __wbindgen_cast_000000000000000e: function(e2, t) {
    var n = R2(e2, t).slice();
    return r.__wbindgen_export4(e2, t * 1, 1), a(n);
  }, __wbindgen_object_clone_ref: function(e2) {
    let t = s2(e2);
    return a(t);
  }, __wbindgen_object_drop_ref: function(e2) {
    d(e2);
  } } };
}
function Me(i7, e2) {
  r.__wasm_bindgen_func_elem_2039(i7, e2);
}
function We(i7, e2) {
  let t = r.__wasm_bindgen_func_elem_2038(i7, e2);
  return d(t);
}
function Fe(i7, e2, t) {
  r.__wasm_bindgen_func_elem_4678(i7, e2, a(t));
}
function je(i7, e2, t, n) {
  r.__wasm_bindgen_func_elem_12771(i7, e2, a(t), a(n));
}
var J2 = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i7) => r.__wbg_client_free(i7 >>> 0, 1));
var ae2 = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i7) => r.__wbg_genericsqlvirtualservermodel_free(i7 >>> 0, 1));
var Y2 = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i7) => r.__wbg_proxysession_free(i7 >>> 0, 1));
var ce = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i7) => r.__wbg_table_free(i7 >>> 0, 1));
var ue = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i7) => r.__wbg_view_free(i7 >>> 0, 1));
var Q2 = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i7) => r.__wbg_virtualdataslice_free(i7 >>> 0, 1));
var le = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i7) => r.__wbg_virtualserver_free(i7 >>> 0, 1));
function a(i7) {
  N2 === I2.length && I2.push(I2.length + 1);
  let e2 = N2;
  return N2 = I2[e2], I2[e2] = i7, e2;
}
function Ee(i7, e2) {
  if (!(i7 instanceof e2)) throw new Error(`expected instance of ${e2.name}`);
}
function pe2(i7) {
  if (D2 == 1) throw new Error("out of js stack");
  return I2[--D2] = i7, D2;
}
var L2 = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i7) => i7.dtor(i7.a, i7.b));
function Z2(i7) {
  let e2 = typeof i7;
  if (e2 == "number" || e2 == "boolean" || i7 == null) return `${i7}`;
  if (e2 == "string") return `"${i7}"`;
  if (e2 == "symbol") {
    let _2 = i7.description;
    return _2 == null ? "Symbol" : `Symbol(${_2})`;
  }
  if (e2 == "function") {
    let _2 = i7.name;
    return typeof _2 == "string" && _2.length > 0 ? `Function(${_2})` : "Function";
  }
  if (Array.isArray(i7)) {
    let _2 = i7.length, o = "[";
    _2 > 0 && (o += Z2(i7[0]));
    for (let l3 = 1; l3 < _2; l3++) o += ", " + Z2(i7[l3]);
    return o += "]", o;
  }
  let t = /\[object ([^\]]+)\]/.exec(toString.call(i7)), n;
  if (t && t.length > 1) n = t[1];
  else return toString.call(i7);
  if (n == "Object") try {
    return "Object(" + JSON.stringify(i7) + ")";
  } catch {
    return "Object";
  }
  return i7 instanceof Error ? `${i7.name}: ${i7.message}
${i7.stack}` : n;
}
function Ue(i7) {
  i7 < 132 || (I2[i7] = N2, N2 = i7);
}
function Pe(i7, e2) {
  return i7 = i7 >>> 0, Ce().subarray(i7 / 4, i7 / 4 + e2);
}
function Re(i7, e2) {
  return i7 = i7 >>> 0, Te().subarray(i7 / 8, i7 / 8 + e2);
}
function Oe(i7, e2) {
  return i7 = i7 >>> 0, Ne().subarray(i7 / 4, i7 / 4 + e2);
}
function qe(i7, e2) {
  i7 = i7 >>> 0;
  let t = u2(), n = [];
  for (let _2 = i7; _2 < i7 + 4 * e2; _2 += 4) n.push(d(t.getUint32(_2, true)));
  return n;
}
function Be(i7, e2) {
  return i7 = i7 >>> 0, ze().subarray(i7 / 4, i7 / 4 + e2);
}
function R2(i7, e2) {
  return i7 = i7 >>> 0, E2().subarray(i7 / 1, i7 / 1 + e2);
}
function m(i7, e2) {
  return i7 === 0 ? s2(e2) : De(i7, e2);
}
var F2 = null;
function u2() {
  return (F2 === null || F2.buffer.detached === true || F2.buffer.detached === void 0 && F2.buffer !== r.memory.buffer) && (F2 = new DataView(r.memory.buffer)), F2;
}
var O2 = null;
function Ce() {
  return (O2 === null || O2.byteLength === 0) && (O2 = new Float32Array(r.memory.buffer)), O2;
}
var q2 = null;
function Te() {
  return (q2 === null || q2.byteLength === 0) && (q2 = new Float64Array(r.memory.buffer)), q2;
}
var B2 = null;
function Ne() {
  return (B2 === null || B2.byteLength === 0) && (B2 = new Int32Array(r.memory.buffer)), B2;
}
function De(i7, e2) {
  return i7 = i7 >>> 0, Ge(i7, e2);
}
var C2 = null;
function ze() {
  return (C2 === null || C2.byteLength === 0) && (C2 = new Uint32Array(r.memory.buffer)), C2;
}
var T2 = null;
function E2() {
  return (T2 === null || T2.byteLength === 0) && (T2 = new Uint8Array(r.memory.buffer)), T2;
}
function s2(i7) {
  return I2[i7];
}
function x2(i7, e2) {
  try {
    return i7.apply(this, e2);
  } catch (t) {
    r.__wbindgen_export3(a(t));
  }
}
var I2 = new Array(128).fill(void 0);
I2.push(void 0, null, true, false);
var N2 = I2.length;
function w2(i7) {
  return i7 == null;
}
function de(i7, e2, t, n) {
  let _2 = { a: i7, b: e2, cnt: 1, dtor: t }, o = (...l3) => {
    _2.cnt++;
    try {
      return n(_2.a, _2.b, ...l3);
    } finally {
      o._wbg_cb_unref();
    }
  };
  return o._wbg_cb_unref = () => {
    --_2.cnt === 0 && (_2.dtor(_2.a, _2.b), _2.a = 0, L2.unregister(_2));
  }, L2.register(o, _2, _2), o;
}
function Le(i7, e2, t, n) {
  let _2 = { a: i7, b: e2, cnt: 1, dtor: t }, o = (...l3) => {
    _2.cnt++;
    let c2 = _2.a;
    _2.a = 0;
    try {
      return n(c2, _2.b, ...l3);
    } finally {
      _2.a = c2, o._wbg_cb_unref();
    }
  };
  return o._wbg_cb_unref = () => {
    --_2.cnt === 0 && (_2.dtor(_2.a, _2.b), _2.a = 0, L2.unregister(_2));
  }, L2.register(o, _2, _2), o;
}
function Ve(i7, e2) {
  let t = e2(i7.length * 1, 1) >>> 0;
  return E2().set(i7, t / 1), p2 = i7.length, t;
}
function He(i7, e2) {
  let t = e2(i7.length * 4, 4) >>> 0, n = u2();
  for (let _2 = 0; _2 < i7.length; _2++) n.setUint32(t + 4 * _2, a(i7[_2]), true);
  return p2 = i7.length, t;
}
function y2(i7, e2, t) {
  if (t === void 0) {
    let c2 = fe.encode(i7), g3 = e2(c2.length, 1) >>> 0;
    return E2().subarray(g3, g3 + c2.length).set(c2), p2 = c2.length, g3;
  }
  let n = i7.length, _2 = e2(n, 1) >>> 0, o = E2(), l3 = 0;
  for (; l3 < n; l3++) {
    let c2 = i7.charCodeAt(l3);
    if (c2 > 127) break;
    o[_2 + l3] = c2;
  }
  if (l3 !== n) {
    l3 !== 0 && (i7 = i7.slice(l3)), _2 = t(_2, n, n = l3 + i7.length * 3, 1) >>> 0;
    let c2 = E2().subarray(_2 + l3, _2 + n), g3 = fe.encodeInto(i7, c2);
    l3 += g3.written, _2 = t(_2, n, l3, 1) >>> 0;
  }
  return p2 = l3, _2;
}
var D2 = 128;
function d(i7) {
  let e2 = s2(i7);
  return Ue(i7), e2;
}
var z2 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
z2.decode();
var $e = 2146435072;
var X2 = 0;
function Ge(i7, e2) {
  return X2 += e2, X2 >= $e && (z2 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), z2.decode(), X2 = e2), z2.decode(E2().subarray(i7, i7 + e2));
}
var fe = new TextEncoder();
var p2 = 0;
var Ke;
var r;
function be(i7, e2) {
  return r = i7.exports, Ke = e2, F2 = null, O2 = null, q2 = null, B2 = null, C2 = null, T2 = null, r;
}
async function Je(i7, e2) {
  if (typeof Response == "function" && i7 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(i7, e2);
    } catch (_2) {
      if (i7.ok && t(i7.type) && i7.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _2);
      else throw _2;
    }
    let n = await i7.arrayBuffer();
    return await WebAssembly.instantiate(n, e2);
  } else {
    let n = await WebAssembly.instantiate(i7, e2);
    return n instanceof WebAssembly.Instance ? { instance: n, module: i7 } : n;
  }
  function t(n) {
    switch (n) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function Ye(i7) {
  if (r !== void 0) return r;
  i7 !== void 0 && (Object.getPrototypeOf(i7) === Object.prototype ? { module: i7 } = i7 : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  let e2 = ge2();
  i7 instanceof WebAssembly.Module || (i7 = new WebAssembly.Module(i7));
  let t = new WebAssembly.Instance(i7, e2);
  return be(t, i7);
}
async function te2(i7) {
  if (r !== void 0) return r;
  i7 !== void 0 && (Object.getPrototypeOf(i7) === Object.prototype ? { module_or_path: i7 } = i7 : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
  let e2 = ge2();
  (typeof i7 == "string" || typeof Request == "function" && i7 instanceof Request || typeof URL == "function" && i7 instanceof URL) && (i7 = fetch(i7));
  let { instance: t, module: n } = await Je(await i7, e2);
  return be(t, n);
}
function Qe() {
  let i7, e2, t = new Promise((n, _2) => {
    i7 = n, e2 = _2;
  });
  return [i7, t, e2];
}
async function we(i7, e2, t, n) {
  let _2, o;
  async function l3() {
    if (o?.readyState === i7.CONNECTING || o?.readyState === i7.OPEN) {
      console.warn(`Already connected ${o.readyState}`);
      return;
    }
    let [f3, b4, h3] = Qe();
    o = new i7(t, n), o.onopen = f3, o.binaryType = "arraybuffer", o.onerror = (v3) => {
      let k5 = v3.message || "Generic Websocket Error";
      _2.handle_error(k5, l3), h3(k5);
    }, o.onclose = (v3) => {
      let k5 = `WebSocket closed ${v3.code}`;
      _2.handle_error(k5, l3), h3(k5);
    }, o.onmessage = (v3) => {
      _2.handle_response(v3.data);
    }, await b4;
  }
  async function c2(f3) {
    if (o.readyState === i7.CLOSING || o.readyState === i7.CLOSED) {
      let b4 = `WebSocket transport error (${o.readyState})`;
      throw _2.handle_error(b4, l3), new Error(b4);
    } else if (o.readyState === i7.CONNECTING) {
      let b4 = `WebSocket message dropped (${o.readyState})`;
      throw new Error(b4);
    } else {
      let b4 = f3.slice().buffer;
      o.send(b4);
    }
  }
  async function g3() {
    console.debug("Closing WebSocket"), o.close();
  }
  return _2 = new e2(c2, g3), await l3(), _2;
}
function Ze() {
  let i7, e2, t = new Promise((n, _2) => {
    i7 = n, e2 = _2;
  });
  return [i7, t, e2];
}
async function et(i7, e2) {
  let [t, n] = Ze();
  i7.addEventListener("message", function _2(o) {
    i7.removeEventListener("message", _2), t(null);
  }), i7.onmessage = function(o) {
    i7.onmessage = function() {
    }, t(null);
  }, i7.onmessageerror = console.error, i7.postMessage({ cmd: "init", args: [e2] }, { transfer: e2 === void 0 || e2 instanceof WebAssembly.Module ? [] : [e2] }), await n;
}
async function ye2(i7, e2, t) {
  let [n, _2] = await Promise.all([e2, t]), { Client: o } = await i7, l3, c2;
  if (typeof SharedWorker < "u" && _2 instanceof SharedWorker) {
    let f3 = _2.port;
    l3 = f3, c2 = () => f3.close();
  } else if (typeof Worker < "u" && _2 instanceof Worker) l3 = _2, c2 = () => _2.terminate();
  else if (_2 instanceof MessagePort) l3 = _2, c2 = () => _2.close();
  else throw new Error("Unsupported worker type");
  let g3 = new o(async (f3) => {
    let b4 = f3.slice().buffer;
    l3.postMessage(b4, { transfer: [b4] });
  }, async () => {
    console.debug("Closing WebWorker"), c2();
  });
  return await et(l3, n), l3.onmessage = (f3) => {
    g3.handle_response(f3.data);
  }, g3;
}
async function me2(i7, e2) {
  let { Client: t } = await i7;
  return await we(WebSocket, t, e2);
}
var rt = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 5, 3, 1, 4, 1]);
var ne;
function _e() {
  return ne === void 0 && (ne = WebAssembly.validate(rt)), ne;
}
var ie2 = 'var j=Object.defineProperty;var F=(s,r,e)=>r in s?j(s,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[r]=e;var h=(s,r,e)=>F(s,typeof r!="symbol"?r+"":r,e);var x=class{constructor(){h(this,"tail",Promise.resolve())}run(r){let e=this.tail.then(r,r);return this.tail=e.then(()=>{},()=>{}),e}};async function L(s,r,e){let i=s.psp_residency_safepoint;i&&await r.run(()=>i(e))}var M=class{constructor(r){h(this,"poll_handle");h(this,"server");this.server=r}set_poll_handle(){return this.poll_handle=new Promise((r,e)=>setTimeout(()=>this.server.poll().then(r).catch(e).finally(()=>{this.poll_handle=void 0}))),this.poll_handle}async on_poll_request(){this.poll_handle?await this.poll_handle.then(()=>{if(!this.poll_handle)return this.set_poll_handle()}):await this.set_poll_handle()}},k=class{constructor(r,e){h(this,"clients");h(this,"server");h(this,"module");h(this,"on_poll_request");h(this,"lock");this.clients=new Map,this.module=r,this.on_poll_request=e?.on_poll_request,this.lock=new x,this.server=r._psp_new_server(e?.on_poll_request?1:0)}make_session(r){let e=this.module._psp_new_session(this.server);return this.clients.set(e,r),new H(this.module,this.server,e,this.clients,this.lock,this.on_poll_request&&(()=>this.on_poll_request(this)))}async poll(){let r=await this.lock.run(()=>this.module._psp_poll(this.server));await N(this.module,r,async e=>{if(e.client_id===0)for(let i of this.clients.values())await i(e.data);else await this.clients.get(e.client_id)(e.data)}),await L(this.module,this.lock,this.server)}delete(){this.module._psp_delete_server(this.server)}},H=class{constructor(r,e,i,u,_,f){this.mod=r;this.server=e;this.client_id=i;this.client_map=u;this.lock=_;this.on_poll_request=f}async handle_request(r){let e=await V(this.mod,r,async i=>{let u=this.mod._psp_is_memory64()?BigInt(r.byteLength):r.byteLength;return this.lock.run(()=>this.mod._psp_handle_request(this.server,this.client_id,i,u))});await N(this.mod,e,async i=>{await this.client_map.get(i.client_id)(i.data)}),this.on_poll_request?await this.on_poll_request():await this.poll(),await L(this.mod,this.lock,this.server)}async poll(){let r=await this.lock.run(()=>this.mod._psp_poll(this.server));await N(this.mod,r,async e=>{e.client_id===0?await this.client_map.get(this.client_id)(e.data):await this.client_map.get(e.client_id)(e.data)})}close(){this.mod._psp_close_session(this.server,this.client_id)}};async function V(s,r,e){let i=s._psp_is_memory64(),u=s._psp_alloc(i?BigInt(r.byteLength):r.byteLength),_=i?Number(u):Number(u)>>>0;s.HEAPU8.set(r,_);let f=await e(u);return s._psp_free(u),f}async function N(s,r,e){let i=s._psp_is_memory64(),u=i?Number(r):Number(r)>>>0,_=new DataView(s.HEAPU8.buffer,u,i?12:8),f=_.getUint32(0,!0),w=Number(i?_.getBigInt64(4,!0):_.getUint32(4,!0)),m=new DataView(s.HEAPU8.buffer,w,f*(i?16:12)),y=d=>s._psp_free(i?BigInt(d):d),g=[];for(let d=0;d<f;d++)g.push(i?[Number(m.getBigInt64(d*16,!0)),m.getInt32(d*16+8,!0),m.getInt32(d*16+12,!0)]:[m.getUint32(d*12,!0),m.getUint32(d*12+4,!0),m.getInt32(d*12+8,!0)]);try{for(let[d,A,U]of g){let E=new Uint8Array(s.HEAPU8.buffer,d,A);await e({client_id:U,data:E})}}finally{for(let[d]of g)y(d);y(w),y(u)}}var z=console.log.bind(console),D=console.error.bind(console),O=new TextDecoder("utf8"),$=[null,[],[]];function G(s,r=0,e=NaN){for(var i=r+e,u=r;s[u]&&!(u>=i);)++u;return O.decode(s instanceof Uint8Array?s.subarray(r,u):new Uint8Array(s.slice(r,u)))}function q(s,r){var e=$[s];r===0||r===10?((s===1?z:D)(G(e,0)),e.length=0):e.push(r)}async function T(s){let r,e=!1,i,u=()=>new Uint8Array(i.buffer),_=t=>e?Number(t):t>>>0;function f(t){let o=_(t),a=u(),n=o;for(;a[n];)++n;return O.decode(a.subarray(o,n))}let w={heap:u,toAddr:_,readCString:f},m=Object.entries(s.env??{}).filter(([,t])=>typeof t=="string").map(([t,o])=>new TextEncoder().encode(`${t}=${o}\\0`));function y(){async function t(a,n){let c=a.split("/").filter(p=>p.length>0),l=await navigator.storage.getDirectory();for(let p=0;p<c.length-1;p++)l=await l.getDirectoryHandle(c[p],{create:n});return await l.getFileHandle(c[c.length-1],{create:n})}let o=new Map;return{async ensureOpen(a){if(o.has(a))return;let c=await(await t(a,!0)).createSyncAccessHandle();o.set(a,c)},store(a,n,c){try{let l=o.get(f(a));if(!l)return-1;if(l.truncate(c),c>0){let p=_(n);l.write(u().subarray(p,p+c),{at:0})}return l.flush(),c}catch(l){return D("psp_opfs_store failed",l),-1}},load(a,n,c){try{if(c<=0)return 0;let l=o.get(f(a));if(!l)return 0;let p=_(n);return l.read(u().subarray(p,p+c),{at:0})}catch{return 0}},remove(a){try{let n=f(a),c=o.get(n);if(c){try{c.close()}catch{}o.delete(n)}(async()=>{try{let l=n.split("/").filter(b=>b.length>0),p=await navigator.storage.getDirectory();for(let b=0;b<l.length-1;b++)p=await p.getDirectoryHandle(l[b],{create:!1});await p.removeEntry(l[l.length-1])}catch{}})()}catch{}}}}let g=s.make_disk_bridge?s.make_disk_bridge(w):y(),d={psp_opfs_store:g.store,psp_opfs_load:g.load,psp_opfs_remove:g.remove},A={HaveOffsetConverter(){console.error("HaveOffsetConverter")},__syscall_ftruncate64(...t){console.error("__syscall_frtuncate64",t)},__syscall_getdents64(...t){console.error("__syscall_frtuncate64",t)},__syscall_unlinkat(...t){console.error("__syscall_frtuncate64",t)},__throw_exception_with_stack_trace(t){let o=new WebAssembly.Exception(r.__cpp_exception,[t],{traceStack:!0});throw o.message="Unexpected internal error",o},clock_time_get(t,o,a){if(e){if(a=a,a=Number(a),!(t==0||t==1||t==2||t==3))return 28;var n;t===0?n=Date.now():n=performance.now();let l=Math.round(n*1e3*1e3),p=new BigInt64Array(i.buffer);return p[a/8]=BigInt(l),0}else{if(a=a,a>>>=0,!(t==0||t==1||t==2||t==3))return 28;var n;t===0?n=Date.now():n=performance.now();var c=Math.round(n*1e6);let p=new BigInt64Array(i.buffer);return p[a>>>3]=BigInt(c),0}},emscripten_asm_const_int(...t){return 0},emscripten_notify_memory_growth(t){e?t=Number(t):(t=t,t>>>=0),t!=0&&console.error("abort")},environ_get(t,o){let a=new DataView(i.buffer),n=_(t),c=_(o);for(let l of m)e?(a.setBigUint64(n,BigInt(c),!0),n+=8):(a.setUint32(n,c,!0),n+=4),u().set(l,c),c+=l.length;return 0},environ_sizes_get(t,o){let a=new DataView(i.buffer),n=m.reduce((c,l)=>c+l.length,0);return e?(a.setBigUint64(_(t),BigInt(m.length),!0),a.setBigUint64(_(o),BigInt(n),!0)):(a.setUint32(_(t),m.length,!0),a.setUint32(_(o),n,!0)),0},fd_close(...t){return console.error("fd_close",t),0},fd_read(...t){return console.error("fd_read",t),0},fd_seek(...t){return console.error("fs_seek",t),0},fd_write(t,o,a,n){let c=new Uint8Array(i.buffer);if(e){o=Number(o),a=Number(a),n=Number(n);let l=0,p=new BigUint64Array(i.buffer);for(let b=0;b<a;b++){let S=Number(p[o/8]),P=Number(p[(o+8)/8]);o+=16;for(let v=0;v<P;v++)q(t,c[S+v]);l+=P}return p[n/8]=BigInt(l),0}else{o=o,a=a,n=n,o>>>=0,a>>>=0,n>>>=0;let l=0,p=new Uint32Array(i.buffer);for(let b=0;b<a;b++){let S=p[o>>>2>>>0],P=p[o+4>>>2>>>0];o+=8;for(let v=0;v<P;v++)q(t,c[S+v>>>0]);l+=P}return p[n>>>2>>>0]=l,0}},proc_exit(t){return console.error("proc_exit",t),0},...d},U=await s.instantiateWasm({env:A,wasi_snapshot_preview1:A},t=>{r=t.exports,e=!!r.psp_is_memory64(),i=t.exports.memory,r._initialize()}),E={};for(let[t,o]of Object.entries(U))E[`_${t}`]=o;return{...U,...E,psp_residency_safepoint:async t=>{let o=r;if(!o.psp_residency_prepare)return;let a=Number(o.psp_residency_prepare(t));for(let n=0;n<a;n++){let c=e?BigInt(n):n,l=f(o.psp_residency_victim_fname(t,c));l&&await g.ensureOpen(l)}o.psp_residency_commit(t)},get HEAPU8(){return new Uint8Array(i.buffer)}}}async function R(s,r){let e=await T({locateFile(i){return i},make_disk_bridge:r?.make_disk_bridge,env:r?.env,instantiateWasm:async(i,u)=>{i.env={...i.env,psp_stack_trace(){let f=Error().stack||"",m=new TextEncoder().encode(f),y=e._psp_alloc(e._psp_is_memory64()?BigInt(m.byteLength+1):m.byteLength+1);return e.HEAPU8.set(m,Number(y)),e.HEAPU8[Number(y)+m.byteLength]=0,y},psp_heap_size(){return e._psp_is_memory64()?BigInt(e.HEAPU8.buffer.byteLength):e.HEAPU8.buffer.byteLength}};let _=await WebAssembly.instantiate(s,i);return u(_.instance),_.instance.exports}});return e}var B,W,I;async function C(s){if(s.data.cmd==="init"){let r=s.data.id;if(!B){let e=await R(s.data.args[0]);B=new k(e,{on_poll_request:()=>W.on_poll_request()}),W=new M(B)}I=B.make_session(async e=>{let i=e.slice().buffer;this.postMessage(i,{transfer:[i]})}),this.postMessage({id:r})}else if(I)await I?.handle_request(new Uint8Array(s.data));else throw new Error("No session")}function K(s){let r=s.ports[0];r.addEventListener("message",C.bind(r)),r.start()}self.addEventListener("connect",K);self.addEventListener("message",C.bind(self));\n';
var V2 = null;
async function _t() {
  if (V2) return V2;
  let i7 = new Blob([ie2], { type: "application/javascript" });
  return V2 = URL.createObjectURL(i7), V2;
}
async function he() {
  return ie2;
}
function ve2(i7) {
  console.warn("Running perspective in single-threaded mode");
  let e2 = new MessageChannel();
  return Function("const self = arguments[0];" + i7)(e2.port2), e2.port2.start(), e2.port1;
}
async function xe2(i7) {
  let e2 = i7 || { type: "module" };
  try {
    if (typeof window < "u" && window.location && window.location.protocol && window.location.protocol.startsWith("file")) return console.warn("file:// protocol does not reliably support Web Workers"), ve2(await he());
    let t = await _t();
    return new Worker(t, e2);
  } catch (t) {
    return console.error("Error instantiating worker; falling back to single-threaded mode", t), ve2(await he());
  }
}
pe(async (i7) => {
  let e2 = i7 instanceof WebAssembly.Module ? i7 : await WebAssembly.compile(i7);
  return await te2({ module_or_path: e2 }), await ee2(), { glue: re, module: e2 };
});
function $2() {
  return ve().then((i7) => i7.glue);
}
async function ct(i7) {
  return se2(await $2(), i7);
}
function ut(i7) {
  return i7 instanceof Uint8Array || i7 instanceof ArrayBuffer || typeof Response < "u" && i7 instanceof Response || i7 instanceof Promise || i7 instanceof WebAssembly.Module || typeof i7 == "function";
}
function lt(i7, e2 = false) {
  let t = typeof e2 == "boolean" ? e2 : !!e2.disable_stage_0;
  if (ut(i7)) {
    L({ server: i7 }, { disable_stage_0: t }, "replace_server");
    return;
  }
  let { wasm32: n, wasm64: _2, migrate: o } = i7;
  if (n === void 0 && _2 === void 0 && o === void 0) throw new Error("init_server requires a wasm source or a {wasm32, wasm64, migrate} registration");
  (n !== void 0 || _2 !== void 0) && L({ server32: n, server64: _2 }, { disable_stage_0: t }, "replace_server"), o !== void 0 && L({ migrate: o }, { disable_stage_0: t });
}
async function dt() {
  return await Se();
}
async function ft(i7, e2, t) {
  return (await Se()).migrate(i7, e2, t);
}
async function gt(i7, e2, t) {
  (await Se()).validate(i7, e2, t);
}
function pt(i7) {
  return i7 instanceof Uint8Array || i7 instanceof ArrayBuffer || typeof Response < "u" && i7 instanceof Response || i7 instanceof Promise || i7 instanceof WebAssembly.Module;
}
function bt(i7, e2 = false) {
  pt(i7) ? L({ client: i7 }, { disable_stage_0: e2 }) : ye(i7);
}
async function wt(i7, e2) {
  let { Client: t } = await $2();
  return new t(i7, e2);
}
async function yt() {
  let { module: i7 } = await ve();
  if (i7 === void 0) throw new Error("perspective-js was initialized from a pre-initialized module, so its compiled `WebAssembly.Module` is unavailable");
  return i7;
}
async function mt() {
  return await xe2({ type: "module", name: "perspective-server" });
}
async function ht(i7) {
  return await me2($2(), i7);
}
async function vt(i7) {
  return typeof i7 > "u" && (i7 = mt()), await ye2($2(), xe(), i7);
}
var Et = { init: ge, websocket: ht, worker: vt, init_client: bt, init_server: lt, make_client: wt, create_validator: dt, migrate: ft, validate: gt, host_supports_memory64: _e, createMessageHandler: ct, getCompiledClientWasm: yt, GenericSQLVirtualServerModel: A2, VirtualDataSlice: S2, VirtualServer: W2 };

// ../../rust/perspective-viewer/dist/esm/perspective-viewer.js
var O3 = { type: "split-layout", orientation: "horizontal", sizes: [], children: [] };
var m2 = Object.freeze({ CUSTOM_EVENT_NAME_PREFIX: "regular-layout", CHILD_ATTRIBUTE_NAME: "name", MIN_DRAG_DISTANCE: 10, SHOULD_ROUND: false, OVERLAY_CLASSNAME: "overlay", MINIMUM_REDISTRIBUTION_SIZE_THRESHOLD: 0.15, SPLIT_EDGE_TOLERANCE: 0.33, SPLIT_ROOT_EDGE_TOLERANCE: 0.03, GRID_TRACK_COLLAPSE_TOLERANCE: 1e-3, OVERLAY_DEFAULT: "absolute", GRID_DIVIDER_SIZE: 6, GRID_DIVIDER_CHECK_TARGET: true, GRID_DIVIDER_TOUCH_RESIZE: true });
function ct2(t, e2, n) {
  return (e2.length === 0 || Math.abs(n - e2[e2.length - 1]) > t.GRID_TRACK_COLLAPSE_TOLERANCE) && e2.push(n), e2;
}
function lt2(t, e2) {
  return e2.sort((n, r3) => n - r3).reduce(ct2.bind(void 0, t), []);
}
function T3(t, e2, n, r3, _2) {
  if (t.type === "tab-layout") return [n, r3];
  let i7 = [n, r3];
  if (t.orientation === e2) {
    let o = n, a2 = r3 - n;
    for (let c2 = 0; c2 < t.children.length; c2++) {
      let d3 = t.sizes[c2], u4 = o + d3 * a2;
      i7.push(...T3(t.children[c2], e2, o, u4, _2)), o = u4;
    }
  } else for (let o of t.children) i7.push(...T3(o, e2, n, r3, _2));
  return lt2(_2, i7);
}
function I3(t, e2, n) {
  let r3 = e2.findIndex((_2) => Math.abs(_2 - n) < t.GRID_TRACK_COLLAPSE_TOLERANCE);
  return r3 === -1 ? 0 : r3;
}
function F3(t, e2, n, r3, _2, i7, o, a2) {
  if (t.type === "tab-layout") {
    let b4 = t.selected ?? 0, w4 = I3(a2, e2, r3), v3 = I3(a2, e2, _2), D7 = I3(a2, n, i7), ot3 = I3(a2, n, o);
    return t.tabs.map((at3, st3) => ({ child: at3, colStart: w4, colEnd: v3, rowStart: D7, rowEnd: ot3, zIndex: t.tabs.length > 1 && st3 === b4 ? 1 : void 0 }));
  }
  let { children: c2, sizes: d3, orientation: u4 } = t, s3 = u4 === "horizontal", l3 = s3 ? r3 : i7, g3 = s3 ? _2 - r3 : o - i7, f3 = [];
  for (let b4 = 0; b4 < c2.length; b4++) {
    let w4 = l3 + d3[b4] * g3;
    s3 ? f3.push(...F3(c2[b4], e2, n, l3, w4, i7, o, a2)) : f3.push(...F3(c2[b4], e2, n, r3, _2, l3, w4, a2)), l3 = w4;
  }
  return f3;
}
var M3 = (t, e2) => `:host ::slotted(*){display:none}:host{display:grid;grid-template-rows:${t};grid-template-columns:${e2}}`;
var S3 = (t, e2, n, r3, _2) => `:host ::slotted([${t.CHILD_ATTRIBUTE_NAME}="${e2}"]){display:flex;grid-column:${r3};grid-row:${n}${_2 === void 0 ? "" : `;z-index:${_2}`}}`;
function p3(t, e2, n = m2) {
  if (t.type === "tab-layout") {
    let s3 = t.selected ?? 0, l3 = t.tabs.length > 1;
    return [M3("100%", "100%"), ...t.tabs.map((g3, f3) => S3(n, g3, "1", "1", l3 && f3 === s3 ? 1 : void 0))].join(`
`);
  }
  let r3 = (s3) => s3.slice(0, -1).map((l3, g3) => s3[g3 + 1] - l3).map((l3) => `${n.SHOULD_ROUND ? Math.round(l3 * 100) : l3 * 100}fr`).join(" "), _2 = T3(t, "horizontal", 0, 1, n), i7 = r3(_2), o = T3(t, "vertical", 0, 1, n), a2 = r3(o), c2 = (s3, l3) => l3 - s3 === 1 ? `${s3 + 1}` : `${s3 + 1} / ${l3 + 1}`, d3 = F3(t, _2, o, 0, 1, 0, 1, n), u4 = [M3(a2, i7)];
  for (let s3 of d3) {
    let l3 = c2(s3.colStart, s3.colEnd), g3 = c2(s3.rowStart, s3.rowEnd);
    u4.push(S3(n, s3.child, g3, l3, s3.zIndex)), s3.child === e2?.[1] && (u4.push(S3(n, e2[0], g3, l3)), u4.push(`:host ::slotted([${n.CHILD_ATTRIBUTE_NAME}=${e2[0]}]){z-index:2}`));
  }
  return u4.join(`
`);
}
function ut2(t, e2 = m2) {
  return [M3("100%", "100%"), S3(e2, t, "1", "1")].join(`
`);
}
var dt2 = { row_start: 0, row_end: 1, col_start: 0, col_end: 1 };
function h2(t, e2, n, r3 = null) {
  return G2(t, e2, n, r3);
}
function G2(t, e2, n, r3, _2 = null, i7 = structuredClone(dt2), o = []) {
  if (t < 0 || e2 < 0 || t > 1 || e2 > 1) return null;
  if (n.type === "tab-layout") {
    let f3 = n.selected ?? 0, b4 = i7.col_end - i7.col_start, w4 = i7.row_end - i7.row_start;
    return { type: "layout-path", layout: n, slot: n.tabs[f3], path: o, view_window: i7, is_edge: false, column: t, row: e2, column_offset: (t - i7.col_start) / b4, row_offset: (e2 - i7.row_start) / w4, orientation: _2 || "horizontal" };
  }
  let a2 = n.orientation === "vertical", c2 = a2 ? e2 : t, d3 = a2 ? "row_start" : "col_start", u4 = a2 ? "row_end" : "col_end", s3 = a2 ? r3?.rect?.height : r3?.rect?.width, l3 = i7[d3], g3 = i7[u4] - i7[d3];
  for (let f3 = 0; f3 < n.children.length; f3++) {
    let b4 = l3 + g3 * n.sizes[f3];
    if (r3 && s3) {
      let w4 = r3.size / s3;
      if (Math.abs(c2 - b4) < w4) return { path: [...o, f3], type: n.orientation, view_window: { ...i7, [d3]: l3, [u4]: b4 } };
    }
    if (c2 >= l3 && (c2 < b4 || f3 === n.children.length - 1)) return G2(t, e2, n.children[f3], r3, n.orientation, { ...i7, [d3]: l3, [u4]: b4 }, [...o, f3]);
    l3 = b4;
  }
  return null;
}
function k2(t, e2) {
  if (t.type === "tab-layout") {
    if (t.tabs.includes(e2)) {
      let o = t.tabs.filter((a2) => a2 !== e2);
      return o.length === 0 ? structuredClone(O3) : { type: "tab-layout", tabs: o };
    }
    return structuredClone(t);
  }
  let n = structuredClone(t), r3 = n.children.findIndex((o) => o.type === "tab-layout" ? o.tabs.includes(e2) : false);
  if (r3 !== -1) {
    let o = n.children[r3];
    if (o.tabs.length === 1) {
      let a2 = n.children.filter((d3, u4) => u4 !== r3), c2 = gt2(n.sizes, r3);
      if (a2.length === 1) return a2[0];
      n.children = a2, n.sizes = c2;
    } else o.tabs.splice(o.tabs.indexOf(e2), 1), o.selected && o.selected >= o.tabs.length && o.selected--;
    return n;
  }
  let _2 = false, i7 = n.children.map((o) => {
    if (o.type === "split-layout") {
      let a2 = k2(o, e2);
      return a2 !== o && (_2 = true), a2;
    }
    return o;
  });
  return _2 && (n.children = i7), n;
}
function gt2(t, e2) {
  let n = [], r3 = t[e2], _2 = 0;
  for (let i7 = 0; i7 < t.length; i7++) i7 !== e2 && (_2 += t[i7]);
  for (let i7 = 0; i7 < t.length; i7++) if (i7 !== e2) {
    let o = t[i7] / _2;
    n.push(t[i7] + r3 * o);
  }
  return n;
}
function y3(t, e2, n, r3) {
  let _2 = (s3) => ({ type: "tab-layout", tabs: [s3] });
  if (n.length === 0) {
    if (t.type === "tab-layout") return { type: "tab-layout", tabs: [e2, ...t.tabs] };
    if (r3) return { type: "split-layout", orientation: r3, children: [_2(e2), t], sizes: [0.5, 0.5] };
    {
      let s3 = [...t.children, _2(e2)], l3 = [...t.sizes, A3(s3.length)];
      return { ...t, children: s3, sizes: x3(l3) };
    }
  }
  let [i7, ...o] = n;
  if (r3 && o.length === 0) {
    if (t.type === "split-layout" && t.orientation === r3) {
      let l3 = [...t.children];
      l3.splice(i7, 0, _2(e2));
      let g3 = [...t.sizes];
      return g3.splice(i7, 0, A3(l3.length)), { ...t, children: l3, sizes: x3(g3) };
    }
    let s3 = i7 === 0 ? [_2(e2), t] : [t, _2(e2)];
    return { type: "split-layout", orientation: r3, children: s3, sizes: [0.5, 0.5] };
  }
  if (t.type === "tab-layout") {
    if (o.length === 0 && r3 === void 0 && i7 >= 0 && i7 <= t.tabs.length) {
      let s3 = [...t.tabs];
      return s3.splice(i7, 0, e2), { ...t, tabs: s3 };
    }
    return y3({ type: "split-layout", orientation: r3 || "horizontal", children: [t], sizes: [1] }, e2, n, r3);
  }
  if (o.length === 0 || i7 === t.children.length) {
    if (r3 && t.children[i7]) {
      let g3 = { type: "split-layout", orientation: r3, children: [_2(e2), t.children[i7]], sizes: [0.5, 0.5] }, f3 = [...t.children];
      return f3[i7] = g3, { ...t, children: f3, sizes: x3(t.sizes) };
    }
    let s3 = [...t.children];
    s3.splice(i7, 0, _2(e2));
    let l3 = [...t.sizes];
    return l3.splice(i7, 0, A3(s3.length)), { ...t, children: s3, sizes: x3(l3) };
  }
  let a2 = t.children[i7], c2 = a2.type === "tab-layout" && o.length > 0 && r3 !== void 0 ? t.orientation === "horizontal" ? "vertical" : "horizontal" : r3, d3 = y3(a2, e2, o, c2), u4 = [...t.children];
  return u4[i7] = d3, { ...t, children: u4 };
}
function A3(t) {
  return 1 / Math.max(1, t - 1);
}
function x3(t) {
  let e2 = t.reduce((n, r3) => n + r3, 0);
  return !Number.isFinite(e2) || e2 <= 0 ? t.map(() => 1 / t.length) : t.map((n) => n / e2);
}
function L3(t, e2, n, r3 = m2) {
  let _2 = structuredClone(t), i7 = _2, o = { horizontal: n || 0, vertical: n || 0 };
  for (let a2 = 0; a2 < e2.length - 1; a2++) i7.type === "split-layout" && (o[i7.orientation] /= i7.sizes[e2[a2]], i7 = i7.children[e2[a2]]);
  if (i7.type === "split-layout") if (n === void 0) i7.sizes = i7.sizes.map((a2) => 1 / i7.sizes.length);
  else {
    let a2 = o[i7.orientation], c2 = e2[e2.length - 1];
    c2 < i7.sizes.length - 1 && (i7.sizes = ft2(r3, i7.sizes, c2, a2));
  }
  return _2;
}
function ft2(t, e2, n, r3) {
  let _2 = [...e2], i7 = 0;
  for (let a2 = 0; a2 <= n; a2++) i7 += e2[a2];
  let o = 0;
  for (let a2 = n + 1; a2 < e2.length; a2++) o += e2[a2];
  r3 = Math.sign(r3) * Math.min(Math.abs(r3), (1 - t.MINIMUM_REDISTRIBUTION_SIZE_THRESHOLD) * (r3 > 0 ? i7 : o));
  for (let a2 = 0; a2 <= n; a2++) {
    let c2 = e2[a2] / i7;
    _2[a2] = e2[a2] - r3 * c2;
  }
  for (let a2 = n + 1; a2 < e2.length; a2++) {
    let c2 = e2[a2] / o;
    _2[a2] = e2[a2] + r3 * c2;
  }
  return _2;
}
function K2(t, e2, n, r3) {
  let _2 = parseFloat(n.paddingLeft), i7 = parseFloat(n.paddingTop), o = e2.width - _2 - parseFloat(n.paddingRight), a2 = e2.height - i7 - parseFloat(n.paddingBottom), c2 = _2 + t.col_start * o, d3 = i7 + t.row_start * a2, u4 = (t.col_end - t.col_start) * o, s3 = (t.row_end - t.row_start) * a2;
  if (r3) {
    let l3 = parseFloat(r3.marginTop), g3 = parseFloat(r3.marginRight), f3 = parseFloat(r3.marginBottom), b4 = parseFloat(r3.marginLeft);
    u4 -= b4 + g3, s3 -= l3 + f3;
  }
  return { x: c2, y: d3, width: u4, height: s3 };
}
function bt2(t, e2, n, r3, _2 = m2, i7) {
  if (!r3) return `:host ::slotted([${_2.CHILD_ATTRIBUTE_NAME}="${t}"]){display:none;}`;
  let o = K2(r3.view_window, e2, n, i7), a2 = `display:flex;position:absolute!important;z-index:2;top:${o.y}px;left:${o.x}px;height:${o.height}px;width:${o.width}px;`;
  return `::slotted([${_2.CHILD_ATTRIBUTE_NAME}="${t}"]){${a2}}`;
}
function z3(t) {
  if (t.type === "tab-layout") return t.selected = t.selected || 0, t;
  let e2 = [], n = [];
  for (let r3 = 0; r3 < t.children.length; r3++) {
    let _2 = t.children[r3], i7 = t.sizes[r3], o = z3(_2);
    if (o.type === "split-layout" && o.orientation === t.orientation) for (let a2 = 0; a2 < o.children.length; a2++) e2.push(o.children[a2]), n.push(o.sizes[a2] * i7);
    else e2.push(o), n.push(i7);
  }
  return e2.length === 1 ? e2[0] : { type: "split-layout", orientation: t.orientation, children: e2, sizes: n };
}
function wt2(t, e2) {
  return Y3(t, e2, []);
}
function Y3(t, e2, n) {
  if (e2.type === "tab-layout") return e2.tabs.includes(t) ? n : null;
  for (let r3 = 0; r3 < e2.children.length; r3++) {
    let _2 = Y3(t, e2.children[r3], [...n, r3]);
    if (_2) return _2;
  }
  return null;
}
function pt2(t) {
  let e2 = {};
  return Z3(t, e2, [], null, { row_start: 0, row_end: 1, col_start: 0, col_end: 1 }), e2;
}
function Z3(t, e2, n, r3, _2) {
  if (t.type === "tab-layout") {
    let u4 = t.selected ?? 0, s3 = t.tabs[u4], l3 = (_2.col_start + _2.col_end) / 2, g3 = (_2.row_start + _2.row_end) / 2;
    e2[s3] = { type: "layout-path", layout: t, slot: s3, path: n, view_window: _2, is_edge: false, column: l3, row: g3, column_offset: 0.5, row_offset: 0.5, orientation: r3 || "horizontal" };
    return;
  }
  let i7 = t.orientation === "vertical", o = i7 ? "row_start" : "col_start", a2 = i7 ? "row_end" : "col_end", c2 = _2[o], d3 = _2[a2] - _2[o];
  for (let u4 = 0; u4 < t.children.length; u4++) {
    let s3 = c2 + d3 * t.sizes[u4], l3 = { ..._2, [o]: c2, [a2]: s3 };
    Z3(t.children[u4], e2, [...n, u4], t.orientation, l3), c2 = s3;
  }
}
var ht2 = class {
  constructor(t, e2, n) {
    this.S = t, this.P = e2, this.g = n;
  }
  #n = false;
  #t = [];
  #e = null;
  #r = 0;
  run(t, e2, n) {
    return new Promise((r3, _2) => {
      this.#t.push({ layout: t, fn: e2, overlay: n, resolve: r3, reject: _2 }), this.#n || this.#_();
    });
  }
  resume() {
    if (this.#e) {
      let t = this.#e;
      this.#e = null, t();
    }
  }
  cancelPending() {
    this.#r++;
    let t = this.#t;
    this.#t = [];
    for (let e2 of t) e2.resolve();
  }
  async #_() {
    this.#n = true;
    try {
      for (; this.#t.length > 0; ) {
        let t = this.#t;
        this.#t = [];
        let e2 = this.#r, n = t[t.length - 1];
        this.#i(n.layout, n.overlay) || await new Promise((_2) => {
          this.#e = _2;
        });
        let r3 = e2 !== this.#r;
        for (let _2 of t) try {
          r3 || _2.fn(), _2.resolve();
        } catch (i7) {
          _2.reject(i7);
        }
      }
    } finally {
      this.#n = false;
    }
  }
  #i(t, e2) {
    this.g?.();
    let n = { calculatePresizePaths: () => pt2(t), overlay: e2 }, r3 = new CustomEvent(this.P, { cancelable: true, detail: n });
    return this.S.dispatchEvent(r3);
  }
};
function $3(t, e2, n, r3, _2, i7, o = m2) {
  if (t < o.SPLIT_ROOT_EDGE_TOLERANCE) return E3(n, r3, _2, [0], true, "horizontal");
  if (t > 1 - o.SPLIT_ROOT_EDGE_TOLERANCE) return E3(n, r3, _2, _2.path.length > 0 ? _2.path : [1], false, "horizontal");
  if (e2 < o.SPLIT_ROOT_EDGE_TOLERANCE) return E3(n, r3, _2, [0], true, "vertical");
  if (e2 > 1 - o.SPLIT_ROOT_EDGE_TOLERANCE) return E3(n, r3, _2, _2.path.length > 0 ? _2.path : [1], false, "vertical");
  let a2 = _2.column_offset < o.SPLIT_EDGE_TOLERANCE || _2.column_offset > 1 - o.SPLIT_EDGE_TOLERANCE, c2 = _2.row_offset < o.SPLIT_EDGE_TOLERANCE || _2.row_offset > 1 - o.SPLIT_EDGE_TOLERANCE;
  if (a2 && c2) {
    let d3 = Math.abs(_2.column_offset - 0.5), u4 = Math.abs(_2.row_offset - 0.5), s3 = (i7?.width || 1) * (_2.view_window.col_end - _2.view_window.col_start), l3 = (i7?.height || 1) * (_2.view_window.row_end - _2.view_window.row_start), g3 = s3 / 2 - d3 * s3 < l3 / 2 - u4 * l3;
    return C3(n, r3, _2, g3 ? _2.column_offset < o.SPLIT_EDGE_TOLERANCE : _2.row_offset < o.SPLIT_EDGE_TOLERANCE, g3 ? "horizontal" : "vertical");
  }
  return a2 ? C3(n, r3, _2, _2.column_offset < o.SPLIT_EDGE_TOLERANCE, "horizontal") : c2 ? C3(n, r3, _2, _2.row_offset < o.SPLIT_EDGE_TOLERANCE, "vertical") : { ..._2, path: [..._2.path, 0] };
}
function E3(t, e2, n, r3, _2, i7) {
  return C3(t, e2, { ...n, path: r3, orientation: i7 }, _2, i7);
}
function C3(t, e2, n, r3, _2) {
  let i7;
  if (n.orientation === _2) if (n.path.length === 0) i7 = [r3 ? 0 : 1];
  else {
    let c2 = n.path[n.path.length - 1];
    i7 = [...n.path.slice(0, -1), r3 ? c2 : c2 + 1];
  }
  else i7 = [...n.path, r3 ? 0 : 1];
  let o = y3(t, e2, i7, _2), a2 = mt2(o, i7);
  return { ...n, path: i7, slot: n.slot, is_edge: true, orientation: _2, view_window: a2 };
}
function mt2(t, e2) {
  let n = { row_start: 0, row_end: 1, col_start: 0, col_end: 1 }, r3 = t;
  for (let _2 of e2) {
    if (r3.type === "tab-layout") break;
    let i7 = Math.min(_2, r3.children.length - 1), o = r3.orientation === "vertical", a2 = o ? "row_start" : "col_start", c2 = o ? "row_end" : "col_end", d3 = n[c2] - n[a2], u4 = r3.sizes.slice(0, i7).reduce((s3, l3) => s3 + l3 * d3, n[a2]);
    n = { ...n, [a2]: u4, [c2]: u4 + d3 * r3.sizes[i7] }, r3 = r3.children[i7];
  }
  return n;
}
var vt2 = class {
  constructor(t) {
    this.p = t;
  }
  async set(t, { slot: e2 }, n = this.p.physics.OVERLAY_CLASSNAME, r3 = this.p.physics.OVERLAY_DEFAULT) {
    let _2 = this.p, i7 = k2(_2.panel, e2), o = `:scope > [${_2.physics.CHILD_ATTRIBUTE_NAME}="${e2}"]`, a2 = _2.querySelector(o);
    a2 && a2.classList.add(n);
    let [c2, d3, u4, s3] = _2.relativeCoordinates(t, true), l3 = h2(c2, d3, i7);
    l3 && (l3 = $3(c2, d3, i7, e2, l3, u4, _2.physics));
    let g3 = l3 ? { slot: e2, path: l3 } : null;
    await _2.presizeQueue.run(i7, () => {
      if (r3 === "grid" && l3) {
        let w4 = [e2, l3?.slot], v3 = p3(i7, w4, _2.physics);
        _2.stylesheet.replaceSync(v3);
      } else if (r3 === "absolute") {
        let w4 = p3(i7, void 0, _2.physics);
        for (; a2?.tagName === "SLOT" && a2; ) a2 = a2.assignedElements()[0];
        let v3 = a2 ? getComputedStyle(a2) : void 0, D7 = bt2(e2, u4, s3, l3, _2.physics, v3);
        _2.stylesheet.replaceSync([w4, D7].join(`
`));
      }
    }, g3);
    let f3 = `${_2.physics.CUSTOM_EVENT_NAME_PREFIX}-before-update`, b4 = new CustomEvent(f3, { detail: i7 });
    _2.dispatchEvent(b4);
  }
  async clear(t, { slot: e2 }, n = this.p.physics.OVERLAY_CLASSNAME) {
    let r3 = this.p, _2 = `:scope > [${r3.physics.CHILD_ATTRIBUTE_NAME}="${e2}"]`, i7 = r3.querySelector(_2), o = r3.panel;
    if (t !== null) {
      let a2 = k2(r3.panel, e2), [c2, d3, u4] = r3.relativeCoordinates(t, false), s3 = h2(c2, d3, a2);
      if (s3) {
        let l3 = $3(c2, d3, a2, e2, s3, u4, r3.physics), g3 = l3.is_edge ? l3.orientation : void 0;
        o = y3(a2, e2, l3.path, g3);
      }
    }
    await r3.restore(o), i7?.classList.remove(n);
  }
};
var X3 = class extends HTMLElement {
  s;
  n;
  i;
  a;
  d;
  u;
  h;
  o;
  t;
  l;
  E;
  f;
  L;
  constructor() {
    super(), this.t = m2, this.n = structuredClone(O3), this.i = this.n, this.s = this.attachShadow({ mode: "open" }), this.s.innerHTML = "<slot></slot>", this.a = new CSSStyleSheet(), this.d = new CSSStyleSheet(), this.h = false;
    let t = `${this.t.CUSTOM_EVENT_NAME_PREFIX}-before-resize`;
    this.l = new ht2(this, t, () => {
      this.o = void 0;
    }), this.E = new vt2(this.create_overlay_host()), this.s.adoptedStyleSheets = [this.a, this.d];
  }
  connectedCallback() {
    this.L ??= new ResizeObserver(() => {
      this.o = void 0;
    }), this.L.observe(this), this.addEventListener("dblclick", this.onDblClick), this.addEventListener("pointerdown", this.onPointerDown), this.addEventListener("pointerup", this.onPointerUp), this.addEventListener("pointermove", this.onPointerMove), this.addEventListener("pointercancel", this.onPointerCancel), this.addEventListener("lostpointercapture", this.onPointerCancel), this.update_touch_listener();
  }
  disconnectedCallback() {
    this.L?.disconnect(), this.removeEventListener("dblclick", this.onDblClick), this.removeEventListener("pointerdown", this.onPointerDown), this.removeEventListener("pointerup", this.onPointerUp), this.removeEventListener("pointermove", this.onPointerMove), this.removeEventListener("pointercancel", this.onPointerCancel), this.removeEventListener("lostpointercapture", this.onPointerCancel), this.update_touch_listener();
  }
  calculateIntersect = (t) => {
    let [e2, n, r3] = this.relativeCoordinates(t, false);
    return h2(e2, n, this.n);
  };
  calculatePath = (t) => wt2(t, this.n);
  setOverlayState = async (t, e2, n, r3) => {
    await this.E.set(t, e2, n, r3);
  };
  clearOverlayState = async (t, e2, n) => {
    await this.E.clear(t, e2, n);
  };
  insertPanel = async (t, e2 = [], n) => {
    let r3;
    typeof n == "boolean" && n ? r3 = "horizontal" : typeof n == "string" && (r3 = n), await this.restore(y3(this.i, t, e2, r3));
  };
  removePanel = async (t) => {
    await this.restore(k2(this.i, t));
  };
  select = async (t) => {
    let e2 = structuredClone(this.i), n = this.getPanel(t, e2);
    if (!n) return;
    let r3 = n.tabs.indexOf(t);
    r3 !== -1 && n.selected !== r3 && (n.selected = r3, await this.restore(e2));
    let _2 = `${this.t.CUSTOM_EVENT_NAME_PREFIX}-select`;
    this.dispatchEvent(new CustomEvent(_2, { detail: { name: t } }));
  };
  getPanel = (t, e2 = this.n) => {
    if (e2.type === "tab-layout") return e2.tabs.includes(t) ? e2 : null;
    for (let n of e2.children) {
      let r3 = this.getPanel(t, n);
      if (r3) return r3;
    }
    return null;
  };
  clear = async () => {
    await this.restore(O3);
  };
  maximize = async (t) => {
    if (!this.getPanel(t, this.i)) return;
    let e2 = { type: "tab-layout", tabs: [t], selected: 0 };
    await this.l.run(e2, () => {
      this.f = t, this.a.replaceSync(ut2(t, this.t));
    });
  };
  minimize = async () => {
    this.f !== void 0 && await this.l.run(this.i, () => {
      this.f = void 0, this.a.replaceSync(p3(this.n, void 0, this.t));
    });
  };
  restoreSync = (t, e2 = false) => {
    this.l.cancelPending(), this.o = void 0, this.f = void 0, this.n = e2 ? t : z3(t), this.i = this.n;
    let n = p3(this.n, void 0, this.t);
    this.a.replaceSync(n);
    let r3 = `${this.t.CUSTOM_EVENT_NAME_PREFIX}-update`, _2 = new CustomEvent(r3, { detail: this.n });
    this.dispatchEvent(_2);
  };
  restore = async (t, e2 = false) => {
    let n = e2 ? t : z3(t);
    this.i = n, await this.l.run(n, () => {
      this.f = void 0, this.n = n;
      let r3 = p3(this.n, void 0, this.t);
      this.a.replaceSync(r3);
      let _2 = `${this.t.CUSTOM_EVENT_NAME_PREFIX}-update`, i7 = new CustomEvent(_2, { detail: this.n });
      this.dispatchEvent(i7);
    });
  };
  resumeResize = () => {
    this.l.resume();
  };
  save = () => structuredClone(this.n);
  restorePhysics(t) {
    this.t = Object.freeze({ ...this.t, ...t }), this.update_touch_listener();
  }
  savePhysics() {
    return this.t;
  }
  relativeCoordinates = (t, e2 = true) => {
    (e2 || !this.o) && (this.o = { box: this.getBoundingClientRect(), style: getComputedStyle(this) });
    let n = this.o.box, r3 = this.o.style, _2 = parseFloat(r3.paddingLeft), i7 = parseFloat(r3.paddingTop), o = n.width - _2 - parseFloat(r3.paddingRight), a2 = n.height - i7 - parseFloat(r3.paddingBottom), c2 = t.clientX - n.left - _2, d3 = t.clientY - n.top - i7, u4 = Math.max(0, Math.min(1, c2 / o)), s3 = Math.max(0, Math.min(1, d3 / a2));
    return [u4, s3, n, r3];
  };
  realCoordinates = (t, e2) => {
    this.o || (this.o = { box: this.getBoundingClientRect(), style: getComputedStyle(this) });
    let n = this.o.box, r3 = this.o.style, _2;
    e2 && (_2 = getComputedStyle(e2));
    let i7 = K2(t, n, r3, _2);
    return new DOMRect(n.left + i7.x, n.top + i7.y, i7.width, i7.height);
  };
  diffCoordinates = (t, e2) => {
    let [n, r3, _2] = this.relativeCoordinates(t, false), i7 = (n - e2.column) * _2.width, o = (r3 - e2.row) * _2.height;
    return Math.sqrt(i7 ** 2 + o ** 2);
  };
  create_overlay_host() {
    let t = this;
    return { get panel() {
      return t.i;
    }, get physics() {
      return t.t;
    }, get stylesheet() {
      return t.a;
    }, get presizeQueue() {
      return t.l;
    }, relativeCoordinates: (e2, n) => t.relativeCoordinates(e2, n), restore: (e2, n) => t.restore(e2, n), querySelector: (e2) => t.querySelector(e2), dispatchEvent: (e2) => t.dispatchEvent(e2) };
  }
  onDblClick = async (t) => {
    let [e2, n, r3] = this.relativeCoordinates(t, false), _2 = h2(e2, n, this.n, { rect: r3, size: this.t.GRID_DIVIDER_SIZE });
    if (_2?.type === "horizontal" || _2?.type === "vertical") {
      let i7 = L3(this.i, _2.path, void 0);
      await this.restore(i7, true);
    }
  };
  hit_divider(t, e2) {
    if (this.t.GRID_DIVIDER_CHECK_TARGET && e2 !== this) return null;
    let [n, r3, _2] = this.relativeCoordinates(t), i7 = this.t.GRID_DIVIDER_SIZE, o = h2(n, r3, this.n, { rect: _2, size: i7 });
    return o && o.type !== "layout-path" ? [o, n, r3] : null;
  }
  update_touch_listener() {
    this.isConnected && this.t.GRID_DIVIDER_TOUCH_RESIZE ? this.addEventListener("touchstart", this.onTouchStart, { passive: false }) : this.removeEventListener("touchstart", this.onTouchStart);
  }
  onTouchStart = (t) => {
    let e2 = t.changedTouches[0];
    t.cancelable && e2 && this.hit_divider(e2, t.target) && t.preventDefault();
  };
  onPointerDown = (t) => {
    if (t.button !== 0) return;
    let e2 = this.hit_divider(t, t.target);
    e2 && (this.u = [...e2, t.pointerId], this.setPointerCapture(t.pointerId), t.preventDefault());
  };
  onPointerCancel = async (t) => {
    this.u?.[3] === t.pointerId && (this.u = void 0, await this.restore(this.i, true));
  };
  onPointerMove = async (t) => {
    if (this.u) {
      let [i7, o] = this.relativeCoordinates(t, false), [{ path: a2, type: c2 }, d3, u4] = this.u, s3 = c2 === "horizontal" ? d3 - i7 : u4 - o, l3 = L3(this.n, a2, s3);
      await this.l.run(l3, () => {
        this.a.replaceSync(p3(l3, void 0, this.t));
      });
    }
    if (this.t.GRID_DIVIDER_CHECK_TARGET && t.target !== this) {
      this.h && (this.h = false, this.d.replaceSync(""));
      return;
    }
    let [e2, n, r3] = this.relativeCoordinates(t, false), _2 = h2(e2, n, this.n, { rect: r3, size: this.t.GRID_DIVIDER_SIZE });
    _2?.type === "vertical" ? (this.d.replaceSync(":host{cursor:row-resize"), this.h = true) : _2?.type === "horizontal" ? (this.d.replaceSync(":host{cursor:col-resize"), this.h = true) : this.h && (this.h = false, this.d.replaceSync(""));
  };
  onPointerUp = async (t) => {
    let e2 = this.u;
    if (e2) {
      this.u = void 0, this.releasePointerCapture(t.pointerId);
      let [n, r3] = this.relativeCoordinates(t, false), [{ path: _2, type: i7 }, o, a2] = e2, c2 = i7 === "horizontal" ? o - n : a2 - r3, d3 = L3(this.i, _2, c2);
      await this.restore(d3, true);
    }
  };
};
var yt2 = `
:host{box-sizing:border-box;flex-direction:column;pointer-events:none}
[part~="titlebar"]{height:24px;flex-shrink:0;user-select:none;overflow:hidden;touch-action:none}
[part~="container"]{flex:1 1 auto;min-height:0;pointer-events:auto}
[part~="title"]{flex:1 1 auto;pointer-events:none}
[part~="close"]{align-self:stretch}
:host([inactive]) [part~="container"]{display:none}
.tabs{display:grid;width:100%;height:100%}
.tabs slot[name="tab"]{display:grid;grid-row:1;pointer-events:auto}
.tabs regular-layout-tab{display:flex;overflow:hidden}
`;
var It = `
	<div part="titlebar"><div class="tabs" part="titlebar-track"><slot name="tab"><regular-layout-tab></regular-layout-tab></slot></div></div>
	<div part="container"><slot></slot></div>
`;
var xt = (t) => `"${t.replace(/[\\"\n]/g, (e2) => e2 === `
` ? "\\A " : `\\${e2}`)}"`;
var Et2 = (t) => `--regular-layout-${globalThis.CSS.escape(t)}--title`;
var J3 = class extends HTMLElement {
  s;
  v;
  b;
  e;
  _;
  T;
  r = null;
  connectedCallback() {
    this.v ??= new CSSStyleSheet(), this.v.replaceSync(yt2), this.b ??= new CSSStyleSheet(), this.s ??= this.attachShadow({ mode: "open" }), this.s.adoptedStyleSheets = [this.v, this.b], this.s.innerHTML = It, this.e = this.parentElement, this._ = this.s.children[0], this.T = this._.querySelector("regular-layout-tab"), this._.addEventListener("pointerdown", this.onPointerDown), this.addEventListener("pointermove", this.onPointerMove), this.addEventListener("pointerup", this.onPointerUp), this.addEventListener("pointercancel", this.onPointerCancel), this.addEventListener("lostpointercapture", this.onPointerCancel), this.e.addEventListener("regular-layout-update", this.drawTabs), this.e.addEventListener("regular-layout-before-update", this.drawTabs);
  }
  disconnectedCallback() {
    this._.removeEventListener("pointerdown", this.onPointerDown), this.removeEventListener("pointermove", this.onPointerMove), this.removeEventListener("pointerup", this.onPointerUp), this.removeEventListener("pointercancel", this.onPointerCancel), this.removeEventListener("lostpointercapture", this.onPointerCancel), this.e.removeEventListener("regular-layout-update", this.drawTabs), this.e.removeEventListener("regular-layout-before-update", this.drawTabs);
  }
  onPointerDown = (t) => {
    if (t.button === 0 && t.target.part.contains("tab")) {
      let e2 = this.getAttribute(this.e.savePhysics().CHILD_ATTRIBUTE_NAME), n = this.e.calculateIntersect(t);
      n && e2 ? (this.r = { path: { ...n, slot: e2 } }, this.setPointerCapture(t.pointerId), t.preventDefault()) : this.r = null;
    }
  };
  onPointerMove = (t) => {
    if (this.r) {
      let e2 = this.e.savePhysics();
      if (!this.r.moved && this.e.diffCoordinates(t, this.r.path) <= e2.MIN_DRAG_DISTANCE) return;
      this.r.moved = true, this.e.setOverlayState(t, this.r.path);
    }
  };
  onPointerUp = (t) => {
    let e2 = this.r;
    this.r = null, e2?.moved && this.e.clearOverlayState(t, e2.path);
  };
  onPointerCancel = (t) => {
    let e2 = this.r;
    this.r = null, e2?.moved && this.e.clearOverlayState(null, e2.path);
  };
  drawTabs = (t) => {
    let e2 = this.e.savePhysics().CHILD_ATTRIBUTE_NAME, n = this.getAttribute(e2);
    if (!n) return;
    let r3 = this.e.getPanel(n, t.detail);
    r3 || (r3 = { type: "tab-layout", tabs: [n], selected: 0 });
    let _2 = r3.tabs.indexOf(n), i7 = (r3.selected ?? 0) === _2;
    this.toggleAttribute("inactive", !i7), this.T.populate(this.e, r3, _2), this.drawTab(n, _2, r3.tabs.length);
  };
  drawTab = (t, e2, n) => {
    this.b.replaceSync([`.tabs{grid-template-columns:repeat(${n},var(--rl-tab-width,1fr))}`, `.tabs slot[name="tab"]{grid-column:${e2 + 1}}`, `[part~="title"]::before{content:var(${Et2(t)}, ${xt(t)})}`].join(`
`));
  };
};
var Q3 = class extends HTMLElement {
  e;
  c;
  m;
  populate = (t, e2, n) => {
    if (this.setAttribute(t.savePhysics().CHILD_ATTRIBUTE_NAME, e2.tabs[n]), this.c) (n === e2.selected != (n === this.c?.selected) || this.c?.tabs[n] !== e2.tabs[n]) && (e2.selected === n ? (this.children[1].part.add("active-close"), this.part.add("active-tab")) : (this.children[1].part.remove("active-close"), this.part.remove("active-tab")));
    else {
      let r3 = e2.selected === n, _2 = r3 ? "active-close close" : "close";
      this.innerHTML = `<div part="title"></div><button part="${_2}"></button>`, r3 ? this.part.add("tab", "active-tab") : this.part.add("tab"), this.addEventListener("pointerdown", this.onTabClick), this.children[1].addEventListener("pointerdown", this.onTabClose);
    }
    this.c = e2, this.e = t, this.m = n;
  };
  onTabClose = (t) => {
    t instanceof PointerEvent && t?.button !== 0 || this.c !== void 0 && this.m !== void 0 && this.e?.removePanel(this.c.tabs[this.m]);
  };
  onTabClick = (t) => {
    t.button === 0 && this.c !== void 0 && this.m !== void 0 && this.e?.select(this.c.tabs[this.m]);
  };
};
var St = [["regular-layout", X3], ["regular-layout-frame", J3], ["regular-layout-tab", Q3]];
function tt(t = customElements) {
  for (let [e2, n] of St) t.get(e2) || t.define(e2, n);
}
tt();
var _t2 = 'var Ct=Object.defineProperty;var At=(a,t)=>{for(var e in t)Ct(a,e,{get:t[e],enumerable:!0})};var X={};At(X,{Client:()=>F,GenericSQLVirtualServerModel:()=>V,PerspectiveDebugPluginElement:()=>$,PerspectiveViewerElement:()=>G,ProxySession:()=>j,Table:()=>z,View:()=>I,VirtualDataSlice:()=>M,VirtualServer:()=>J,default:()=>It,getColumnConfigDefaults:()=>Ft,getPluginConfigDefaults:()=>Rt,get_wasm_module:()=>Et,get_worker_url:()=>Tt,init:()=>Pt,initSync:()=>oe,registerPlugin:()=>Ot,setColumnConfigDefaults:()=>jt,setPluginConfigDefaults:()=>zt});function ct(a){customElements.get(a)||customElements.define(a,class extends HTMLElement{})}var it=window.ResizeObserver;var st=window.IntersectionObserver;function at(a,t){if(!globalThis.ClipboardItem||!globalThis.navigator?.clipboard?.write)throw new Error("Clipboard API unavailable");return navigator.clipboard.write([new ClipboardItem({[a]:t})])}function ut(a,t,e,n){if(customElements.get(t)){console.warn(`Custom element "${t}" is already registered; skipping duplicate registration (Perspective was loaded more than once on this page).`);return}let _=a[e],i=_.prototype;class b extends HTMLElement{constructor(){super(),this._instance=new _(this)}}let g=Object.getOwnPropertyNames(i);for(let w of g)"get"in Object.getOwnPropertyDescriptor(i,w)?Object.defineProperty(b.prototype,w,{get:function(){return this._instance[w]}}):Object.defineProperty(b.prototype,w,{value:function(...v){return this._instance[w].call(this._instance,...v)}});for(let w of n)Object.defineProperty(b,w,{value:function(...v){return a[w].call(a,...v)}});customElements.define(t,b)}var F=class a{static __wrap(t){t=t>>>0;let e=Object.create(a.prototype);return e.__wbg_ptr=t,Q.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Q.unregister(this),t}free(){let t=this.__destroy_into_raw();r.__wbg_client_free(t,0)}__getClassname(){try{let _=r.__wbindgen_add_to_stack_pointer(-16);r.client___getClassname(_,this.__wbg_ptr);var t=s().getInt32(_+0,!0),e=s().getInt32(_+4,!0),n=d(t,e);return t!==0&&r.__wbindgen_export4(t,e,1),n}finally{r.__wbindgen_add_to_stack_pointer(16)}}__unsafe_open_view(t){let e=m(t,r.__wbindgen_export,r.__wbindgen_export2),n=p,_=r.client___unsafe_open_view(this.__wbg_ptr,e,n);return I.__wrap(_)}get_hosted_table_names(){let t=r.client_get_hosted_table_names(this.__wbg_ptr);return u(t)}handle_error(t,e){let n=m(t,r.__wbindgen_export,r.__wbindgen_export2),_=p,i=r.client_handle_error(this.__wbg_ptr,n,_,f(e)?0:c(e));return u(i)}handle_response(t){let e=r.client_handle_response(this.__wbg_ptr,c(t));return u(e)}join(t,e,n,_){let i=m(n,r.__wbindgen_export,r.__wbindgen_export2),b=p,g=r.client_join(this.__wbg_ptr,c(t),c(e),i,b,f(_)?0:c(_));return u(g)}constructor(t,e){try{let b=r.__wbindgen_add_to_stack_pointer(-16);r.client_new(b,c(t),f(e)?0:c(e));var n=s().getInt32(b+0,!0),_=s().getInt32(b+4,!0),i=s().getInt32(b+8,!0);if(i)throw u(_);return this.__wbg_ptr=n>>>0,Q.register(this,this.__wbg_ptr,this),this}finally{r.__wbindgen_add_to_stack_pointer(16)}}new_proxy_session(t){try{let e=r.client_new_proxy_session(this.__wbg_ptr,ot(t));return j.__wrap(e)}finally{k[O++]=void 0}}on_error(t){let e=r.client_on_error(this.__wbg_ptr,c(t));return u(e)}on_hosted_tables_update(t){let e=r.client_on_hosted_tables_update(this.__wbg_ptr,c(t));return u(e)}open_table(t){let e=m(t,r.__wbindgen_export,r.__wbindgen_export2),n=p,_=r.client_open_table(this.__wbg_ptr,e,n);return u(_)}remove_hosted_tables_update(t){let e=r.client_remove_hosted_tables_update(this.__wbg_ptr,t);return u(e)}system_info(){let t=r.client_system_info(this.__wbg_ptr);return u(t)}table(t,e){let n=r.client_table(this.__wbg_ptr,c(t),f(e)?0:c(e));return u(n)}terminate(){try{let _=r.__wbindgen_add_to_stack_pointer(-16);r.client_terminate(_,this.__wbg_ptr);var t=s().getInt32(_+0,!0),e=s().getInt32(_+4,!0),n=s().getInt32(_+8,!0);if(n)throw u(e);return u(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}}};Symbol.dispose&&(F.prototype[Symbol.dispose]=F.prototype.free);var V=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,ft.unregister(this),t}free(){let t=this.__destroy_into_raw();r.__wbg_genericsqlvirtualservermodel_free(t,0)}expressionDescribe(t,e){try{let w=r.__wbindgen_add_to_stack_pointer(-16),v=m(t,r.__wbindgen_export,r.__wbindgen_export2),h=p,y=m(e,r.__wbindgen_export,r.__wbindgen_export2),x=p;r.genericsqlvirtualservermodel_expressionDescribe(w,this.__wbg_ptr,v,h,y,x);var n=s().getInt32(w+0,!0),_=s().getInt32(w+4,!0),i=s().getInt32(w+8,!0),b=s().getInt32(w+12,!0);if(b)throw u(i);var g=d(n,_);return n!==0&&r.__wbindgen_export4(n,_,1),g}finally{r.__wbindgen_add_to_stack_pointer(16)}}expressionsDescribe(t,e){try{let w=r.__wbindgen_add_to_stack_pointer(-16),v=m(t,r.__wbindgen_export,r.__wbindgen_export2),h=p;r.genericsqlvirtualservermodel_expressionsDescribe(w,this.__wbg_ptr,v,h,c(e));var n=s().getInt32(w+0,!0),_=s().getInt32(w+4,!0),i=s().getInt32(w+8,!0),b=s().getInt32(w+12,!0);if(b)throw u(i);var g=d(n,_);return n!==0&&r.__wbindgen_export4(n,_,1),g}finally{r.__wbindgen_add_to_stack_pointer(16)}}getHostedTables(){try{let b=r.__wbindgen_add_to_stack_pointer(-16);r.genericsqlvirtualservermodel_getHostedTables(b,this.__wbg_ptr);var t=s().getInt32(b+0,!0),e=s().getInt32(b+4,!0),n=s().getInt32(b+8,!0),_=s().getInt32(b+12,!0);if(_)throw u(n);var i=d(t,e);return t!==0&&r.__wbindgen_export4(t,e,1),i}finally{r.__wbindgen_add_to_stack_pointer(16)}}constructor(t){try{let i=r.__wbindgen_add_to_stack_pointer(-16);r.genericsqlvirtualservermodel_new(i,f(t)?0:c(t));var e=s().getInt32(i+0,!0),n=s().getInt32(i+4,!0),_=s().getInt32(i+8,!0);if(_)throw u(n);return this.__wbg_ptr=e>>>0,ft.register(this,this.__wbg_ptr,this),this}finally{r.__wbindgen_add_to_stack_pointer(16)}}quoteEntity(t){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=m(t,r.__wbindgen_export,r.__wbindgen_export2),v=p;r.genericsqlvirtualservermodel_quoteEntity(g,this.__wbg_ptr,w,v);var e=s().getInt32(g+0,!0),n=s().getInt32(g+4,!0),_=s().getInt32(g+8,!0),i=s().getInt32(g+12,!0);if(i)throw u(_);var b=d(e,n);return e!==0&&r.__wbindgen_export4(e,n,1),b}finally{r.__wbindgen_add_to_stack_pointer(16)}}tableDescribe(t,e,n,_){try{let h=r.__wbindgen_add_to_stack_pointer(-16),y=m(t,r.__wbindgen_export,r.__wbindgen_export2),x=p;r.genericsqlvirtualservermodel_tableDescribe(h,this.__wbg_ptr,y,x,c(e),c(n),f(_)?16777215:_?1:0);var i=s().getInt32(h+0,!0),b=s().getInt32(h+4,!0),g=s().getInt32(h+8,!0),w=s().getInt32(h+12,!0);if(w)throw u(g);var v=d(i,b);return i!==0&&r.__wbindgen_export4(i,b,1),v}finally{r.__wbindgen_add_to_stack_pointer(16)}}tableMakeView(t,e,n,_,i){try{let y=r.__wbindgen_add_to_stack_pointer(-16),x=m(t,r.__wbindgen_export,r.__wbindgen_export2),C=p,q=m(e,r.__wbindgen_export,r.__wbindgen_export2),D=p;r.genericsqlvirtualservermodel_tableMakeView(y,this.__wbg_ptr,x,C,q,D,c(n),c(_),f(i)?16777215:i?1:0);var b=s().getInt32(y+0,!0),g=s().getInt32(y+4,!0),w=s().getInt32(y+8,!0),v=s().getInt32(y+12,!0);if(v)throw u(w);var h=d(b,g);return b!==0&&r.__wbindgen_export4(b,g,1),h}finally{r.__wbindgen_add_to_stack_pointer(16)}}tablePath(t){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=yt(t,r.__wbindgen_export),v=p;r.genericsqlvirtualservermodel_tablePath(g,this.__wbg_ptr,w,v);var e=s().getInt32(g+0,!0),n=s().getInt32(g+4,!0),_=s().getInt32(g+8,!0),i=s().getInt32(g+12,!0);if(i)throw u(_);var b=d(e,n);return e!==0&&r.__wbindgen_export4(e,n,1),b}finally{r.__wbindgen_add_to_stack_pointer(16)}}tableSchema(t){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=m(t,r.__wbindgen_export,r.__wbindgen_export2),v=p;r.genericsqlvirtualservermodel_tableSchema(g,this.__wbg_ptr,w,v);var e=s().getInt32(g+0,!0),n=s().getInt32(g+4,!0),_=s().getInt32(g+8,!0),i=s().getInt32(g+12,!0);if(i)throw u(_);var b=d(e,n);return e!==0&&r.__wbindgen_export4(e,n,1),b}finally{r.__wbindgen_add_to_stack_pointer(16)}}tableSize(t){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=m(t,r.__wbindgen_export,r.__wbindgen_export2),v=p;r.genericsqlvirtualservermodel_tableSize(g,this.__wbg_ptr,w,v);var e=s().getInt32(g+0,!0),n=s().getInt32(g+4,!0),_=s().getInt32(g+8,!0),i=s().getInt32(g+12,!0);if(i)throw u(_);var b=d(e,n);return e!==0&&r.__wbindgen_export4(e,n,1),b}finally{r.__wbindgen_add_to_stack_pointer(16)}}viewCollapse(t,e,n){try{let v=r.__wbindgen_add_to_stack_pointer(-16),h=m(t,r.__wbindgen_export,r.__wbindgen_export2),y=p;r.genericsqlvirtualservermodel_viewCollapse(v,this.__wbg_ptr,h,y,c(e),n);var _=s().getInt32(v+0,!0),i=s().getInt32(v+4,!0),b=s().getInt32(v+8,!0),g=s().getInt32(v+12,!0);if(g)throw u(b);var w=d(_,i);return _!==0&&r.__wbindgen_export4(_,i,1),w}finally{r.__wbindgen_add_to_stack_pointer(16)}}viewColumnSize(t){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=m(t,r.__wbindgen_export,r.__wbindgen_export2),v=p;r.genericsqlvirtualservermodel_viewColumnSize(g,this.__wbg_ptr,w,v);var e=s().getInt32(g+0,!0),n=s().getInt32(g+4,!0),_=s().getInt32(g+8,!0),i=s().getInt32(g+12,!0);if(i)throw u(_);var b=d(e,n);return e!==0&&r.__wbindgen_export4(e,n,1),b}finally{r.__wbindgen_add_to_stack_pointer(16)}}viewDelete(t){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=m(t,r.__wbindgen_export,r.__wbindgen_export2),v=p;r.genericsqlvirtualservermodel_viewDelete(g,this.__wbg_ptr,w,v);var e=s().getInt32(g+0,!0),n=s().getInt32(g+4,!0),_=s().getInt32(g+8,!0),i=s().getInt32(g+12,!0);if(i)throw u(_);var b=d(e,n);return e!==0&&r.__wbindgen_export4(e,n,1),b}finally{r.__wbindgen_add_to_stack_pointer(16)}}viewExpand(t,e,n){try{let v=r.__wbindgen_add_to_stack_pointer(-16),h=m(t,r.__wbindgen_export,r.__wbindgen_export2),y=p;r.genericsqlvirtualservermodel_viewExpand(v,this.__wbg_ptr,h,y,c(e),n);var _=s().getInt32(v+0,!0),i=s().getInt32(v+4,!0),b=s().getInt32(v+8,!0),g=s().getInt32(v+12,!0);if(g)throw u(b);var w=d(_,i);return _!==0&&r.__wbindgen_export4(_,i,1),w}finally{r.__wbindgen_add_to_stack_pointer(16)}}viewGetData(t,e,n,_){try{let h=r.__wbindgen_add_to_stack_pointer(-16),y=m(t,r.__wbindgen_export,r.__wbindgen_export2),x=p;r.genericsqlvirtualservermodel_viewGetData(h,this.__wbg_ptr,y,x,c(e),c(n),c(_));var i=s().getInt32(h+0,!0),b=s().getInt32(h+4,!0),g=s().getInt32(h+8,!0),w=s().getInt32(h+12,!0);if(w)throw u(g);var v=d(i,b);return i!==0&&r.__wbindgen_export4(i,b,1),v}finally{r.__wbindgen_add_to_stack_pointer(16)}}viewGetMinMax(t,e,n){try{let v=r.__wbindgen_add_to_stack_pointer(-16),h=m(t,r.__wbindgen_export,r.__wbindgen_export2),y=p,x=m(e,r.__wbindgen_export,r.__wbindgen_export2),C=p;r.genericsqlvirtualservermodel_viewGetMinMax(v,this.__wbg_ptr,h,y,x,C,c(n));var _=s().getInt32(v+0,!0),i=s().getInt32(v+4,!0),b=s().getInt32(v+8,!0),g=s().getInt32(v+12,!0);if(g)throw u(b);var w=d(_,i);return _!==0&&r.__wbindgen_export4(_,i,1),w}finally{r.__wbindgen_add_to_stack_pointer(16)}}viewMakeTable(t,e,n,_,i){try{let y=r.__wbindgen_add_to_stack_pointer(-16),x=m(t,r.__wbindgen_export,r.__wbindgen_export2),C=p,q=m(e,r.__wbindgen_export,r.__wbindgen_export2),D=p;r.genericsqlvirtualservermodel_viewMakeTable(y,this.__wbg_ptr,x,C,q,D,c(n),c(_),c(i));var b=s().getInt32(y+0,!0),g=s().getInt32(y+4,!0),w=s().getInt32(y+8,!0),v=s().getInt32(y+12,!0);if(v)throw u(w);var h=d(b,g);return b!==0&&r.__wbindgen_export4(b,g,1),h}finally{r.__wbindgen_add_to_stack_pointer(16)}}viewSchema(t){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=m(t,r.__wbindgen_export,r.__wbindgen_export2),v=p;r.genericsqlvirtualservermodel_viewSchema(g,this.__wbg_ptr,w,v);var e=s().getInt32(g+0,!0),n=s().getInt32(g+4,!0),_=s().getInt32(g+8,!0),i=s().getInt32(g+12,!0);if(i)throw u(_);var b=d(e,n);return e!==0&&r.__wbindgen_export4(e,n,1),b}finally{r.__wbindgen_add_to_stack_pointer(16)}}viewSetDepth(t,e,n){try{let v=r.__wbindgen_add_to_stack_pointer(-16),h=m(t,r.__wbindgen_export,r.__wbindgen_export2),y=p;r.genericsqlvirtualservermodel_viewSetDepth(v,this.__wbg_ptr,h,y,c(e),n);var _=s().getInt32(v+0,!0),i=s().getInt32(v+4,!0),b=s().getInt32(v+8,!0),g=s().getInt32(v+12,!0);if(g)throw u(b);var w=d(_,i);return _!==0&&r.__wbindgen_export4(_,i,1),w}finally{r.__wbindgen_add_to_stack_pointer(16)}}viewSize(t){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=m(t,r.__wbindgen_export,r.__wbindgen_export2),v=p;r.genericsqlvirtualservermodel_viewSize(g,this.__wbg_ptr,w,v);var e=s().getInt32(g+0,!0),n=s().getInt32(g+4,!0),_=s().getInt32(g+8,!0),i=s().getInt32(g+12,!0);if(i)throw u(_);var b=d(e,n);return e!==0&&r.__wbindgen_export4(e,n,1),b}finally{r.__wbindgen_add_to_stack_pointer(16)}}};Symbol.dispose&&(V.prototype[Symbol.dispose]=V.prototype.free);var $=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,dt.unregister(this),t}free(){let t=this.__destroy_into_raw();r.__wbg_perspectivedebugpluginelement_free(t,0)}clear(){let t=r.perspectivedebugpluginelement_clear(this.__wbg_ptr);return u(t)}get config_column_names(){let t=r.perspectivedebugpluginelement_config_column_names(this.__wbg_ptr);return u(t)}connectedCallback(){r.perspectivedebugpluginelement_connectedCallback(this.__wbg_ptr)}delete(){let t=r.perspectivedebugpluginelement_clear(this.__wbg_ptr);return u(t)}draw(t){rt(t,I);let e=r.perspectivedebugpluginelement_draw(this.__wbg_ptr,t.__wbg_ptr);return u(e)}get min_config_columns(){let t=r.perspectivedebugpluginelement_config_column_names(this.__wbg_ptr);return u(t)}get name(){try{let _=r.__wbindgen_add_to_stack_pointer(-16);r.perspectivedebugpluginelement_name(_,this.__wbg_ptr);var t=s().getInt32(_+0,!0),e=s().getInt32(_+4,!0),n=d(t,e);return t!==0&&r.__wbindgen_export4(t,e,1),n}finally{r.__wbindgen_add_to_stack_pointer(16)}}constructor(t){let e=r.perspectivedebugpluginelement_new(c(t));return this.__wbg_ptr=e>>>0,dt.register(this,this.__wbg_ptr,this),this}resize(){let t=r.perspectivedebugpluginelement_clear(this.__wbg_ptr);return u(t)}restore(t){try{let _=r.__wbindgen_add_to_stack_pointer(-16);r.perspectivedebugpluginelement_restore(_,this.__wbg_ptr,f(t)?0:c(t));var e=s().getInt32(_+0,!0),n=s().getInt32(_+4,!0);if(n)throw u(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}restyle(){r.perspectivedebugpluginelement_connectedCallback(this.__wbg_ptr)}save(){try{let _=r.__wbindgen_add_to_stack_pointer(-16);r.perspectivedebugpluginelement_save(_,this.__wbg_ptr);var t=s().getInt32(_+0,!0),e=s().getInt32(_+4,!0),n=s().getInt32(_+8,!0);if(n)throw u(e);return u(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}}get select_mode(){try{let _=r.__wbindgen_add_to_stack_pointer(-16);r.perspectivedebugpluginelement_select_mode(_,this.__wbg_ptr);var t=s().getInt32(_+0,!0),e=s().getInt32(_+4,!0),n=d(t,e);return t!==0&&r.__wbindgen_export4(t,e,1),n}finally{r.__wbindgen_add_to_stack_pointer(16)}}update(t){rt(t,I);let e=r.perspectivedebugpluginelement_update(this.__wbg_ptr,t.__wbg_ptr);return u(e)}};Symbol.dispose&&($.prototype[Symbol.dispose]=$.prototype.free);var G=class a{static __wrap(t){t=t>>>0;let e=Object.create(a.prototype);return e.__wbg_ptr=t,Z.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Z.unregister(this),t}free(){let t=this.__destroy_into_raw();r.__wbg_perspectiveviewerelement_free(t,0)}__get_model(){let t=r.perspectiveviewerelement___get_model(this.__wbg_ptr);return a.__wrap(t)}addPanel(t,e){let n=r.perspectiveviewerelement_addPanel(this.__wbg_ptr,c(t),f(e)?0:c(e));return u(n)}agentConfig(t){try{let _=r.__wbindgen_add_to_stack_pointer(-16);r.perspectiveviewerelement_agentConfig(_,this.__wbg_ptr,c(t));var e=s().getInt32(_+0,!0),n=s().getInt32(_+4,!0);if(n)throw u(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}agentPrompt(t){let e=m(t,r.__wbindgen_export,r.__wbindgen_export2),n=p,_=r.perspectiveviewerelement_agentPrompt(this.__wbg_ptr,e,n);return u(_)}agentReset(){let t=r.perspectiveviewerelement_agentReset(this.__wbg_ptr);return u(t)}connectedCallback(){try{let n=r.__wbindgen_add_to_stack_pointer(-16);r.perspectiveviewerelement_connectedCallback(n,this.__wbg_ptr);var t=s().getInt32(n+0,!0),e=s().getInt32(n+4,!0);if(e)throw u(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}}copy(t){let e=r.perspectiveviewerelement_copy(this.__wbg_ptr,f(t)?0:c(t));return u(e)}delete(){let t=this.__destroy_into_raw(),e=r.perspectiveviewerelement_delete(t);return u(e)}download(t){let e=r.perspectiveviewerelement_download(this.__wbg_ptr,f(t)?0:c(t));return u(e)}eject(t){let e=r.perspectiveviewerelement_eject(this.__wbg_ptr,f(t)?0:c(t));return u(e)}export(t){let e=r.perspectiveviewerelement_export(this.__wbg_ptr,f(t)?0:c(t));return u(e)}flush(){let t=r.perspectiveviewerelement_flush(this.__wbg_ptr);return u(t)}getActivePanel(){let t=r.perspectiveviewerelement_getActivePanel(this.__wbg_ptr);return u(t)}getAllPlugins(){let t=r.perspectiveviewerelement_getAllPlugins(this.__wbg_ptr);return u(t)}getClient(t){let e=r.perspectiveviewerelement_getClient(this.__wbg_ptr,f(t)?0:c(t));return u(e)}getEditPort(t){try{let i=r.__wbindgen_add_to_stack_pointer(-16);r.perspectiveviewerelement_getEditPort(i,this.__wbg_ptr,f(t)?0:c(t));var e=s().getFloat64(i+0,!0),n=s().getInt32(i+8,!0),_=s().getInt32(i+12,!0);if(_)throw u(n);return e}finally{r.__wbindgen_add_to_stack_pointer(16)}}getPanelNames(){let t=r.perspectiveviewerelement_getPanelNames(this.__wbg_ptr);return u(t)}getPlugin(t){try{let g=r.__wbindgen_add_to_stack_pointer(-16);var e=f(t)?0:m(t,r.__wbindgen_export,r.__wbindgen_export2),n=p;r.perspectiveviewerelement_getPlugin(g,this.__wbg_ptr,e,n);var _=s().getInt32(g+0,!0),i=s().getInt32(g+4,!0),b=s().getInt32(g+8,!0);if(b)throw u(i);return u(_)}finally{r.__wbindgen_add_to_stack_pointer(16)}}getRenderStats(t){try{let i=r.__wbindgen_add_to_stack_pointer(-16);r.perspectiveviewerelement_getRenderStats(i,this.__wbg_ptr,f(t)?0:c(t));var e=s().getInt32(i+0,!0),n=s().getInt32(i+4,!0),_=s().getInt32(i+8,!0);if(_)throw u(n);return u(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}getSelection(t){try{let i=r.__wbindgen_add_to_stack_pointer(-16);r.perspectiveviewerelement_getSelection(i,this.__wbg_ptr,f(t)?0:c(t));var e=s().getInt32(i+0,!0),n=s().getInt32(i+4,!0),_=s().getInt32(i+8,!0);if(_)throw u(n);return u(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}getTable(t){let e=r.perspectiveviewerelement_getTable(this.__wbg_ptr,f(t)?0:c(t));return u(e)}getThemes(){let t=r.perspectiveviewerelement_getThemes(this.__wbg_ptr);return u(t)}getView(t){let e=r.perspectiveviewerelement_getView(this.__wbg_ptr,f(t)?0:c(t));return u(e)}getViewConfig(t){let e=r.perspectiveviewerelement_getViewConfig(this.__wbg_ptr,f(t)?0:c(t));return u(e)}invalidate(t){try{let i=r.__wbindgen_add_to_stack_pointer(-16);r.perspectiveviewerelement_invalidate(i,this.__wbg_ptr,f(t)?0:c(t));var e=s().getInt32(i+0,!0),n=s().getInt32(i+4,!0),_=s().getInt32(i+8,!0);if(_)throw u(n);return u(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}invokeCommand(t,e){try{let i=r.__wbindgen_add_to_stack_pointer(-16),b=m(t,r.__wbindgen_export,r.__wbindgen_export2),g=p;r.perspectiveviewerelement_invokeCommand(i,this.__wbg_ptr,b,g,c(e));var n=s().getInt32(i+0,!0),_=s().getInt32(i+4,!0);if(_)throw u(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}load(t){try{let i=r.__wbindgen_add_to_stack_pointer(-16);r.perspectiveviewerelement_load(i,this.__wbg_ptr,c(t));var e=s().getInt32(i+0,!0),n=s().getInt32(i+4,!0),_=s().getInt32(i+8,!0);if(_)throw u(n);return u(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}constructor(t){let e=r.perspectiveviewerelement_new(c(t));return this.__wbg_ptr=e>>>0,Z.register(this,this.__wbg_ptr,this),this}queryCommands(t,e,n,_){try{let w=r.__wbindgen_add_to_stack_pointer(-16);r.perspectiveviewerelement_queryCommands(w,this.__wbg_ptr,c(t),c(e),c(n),c(_));var i=s().getInt32(w+0,!0),b=s().getInt32(w+4,!0),g=s().getInt32(w+8,!0);if(g)throw u(b);return u(i)}finally{r.__wbindgen_add_to_stack_pointer(16)}}removePanel(t){let e=m(t,r.__wbindgen_export,r.__wbindgen_export2),n=p,_=r.perspectiveviewerelement_removePanel(this.__wbg_ptr,e,n);return u(_)}reset(t,e){let n=r.perspectiveviewerelement_reset(this.__wbg_ptr,f(t)?16777215:t?1:0,f(e)?0:c(e));return u(n)}resetError(){let t=r.perspectiveviewerelement_resetError(this.__wbg_ptr);return u(t)}resetThemes(t){var e=f(t)?0:yt(t,r.__wbindgen_export),n=p;let _=r.perspectiveviewerelement_resetThemes(this.__wbg_ptr,e,n);return u(_)}resize(t){let e=r.perspectiveviewerelement_resize(this.__wbg_ptr,f(t)?0:c(t));return u(e)}restore(t,e){let n=r.perspectiveviewerelement_restore(this.__wbg_ptr,c(t),f(e)?0:c(e));return u(n)}restoreWorkspace(t,e){let n=r.perspectiveviewerelement_restoreWorkspace(this.__wbg_ptr,c(t),f(e)?0:c(e));return u(n)}restyleElement(){let t=r.perspectiveviewerelement_restyleElement(this.__wbg_ptr);return u(t)}save(t){let e=r.perspectiveviewerelement_save(this.__wbg_ptr,f(t)?0:c(t));return u(e)}saveWorkspace(t){let e=r.perspectiveviewerelement_saveWorkspace(this.__wbg_ptr,f(t)?0:c(t));return u(e)}setActivePanel(t){let e=m(t,r.__wbindgen_export,r.__wbindgen_export2),n=p,_=r.perspectiveviewerelement_setActivePanel(this.__wbg_ptr,e,n);return u(_)}setAutoPause(t){let e=r.perspectiveviewerelement_setAutoPause(this.__wbg_ptr,t);return u(e)}setAutoSize(t){r.perspectiveviewerelement_setAutoSize(this.__wbg_ptr,t)}setCommandSchema(t,e){try{let b=r.__wbindgen_add_to_stack_pointer(-16);r.perspectiveviewerelement_setCommandSchema(b,this.__wbg_ptr,f(t)?0:c(t),f(e)?0:c(e));var n=s().getInt32(b+0,!0),_=s().getInt32(b+4,!0),i=s().getInt32(b+8,!0);if(i)throw u(_);return u(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}setSelection(t,e){try{let i=r.__wbindgen_add_to_stack_pointer(-16);r.perspectiveviewerelement_setSelection(i,this.__wbg_ptr,f(t)?0:c(t),f(e)?0:c(e));var n=s().getInt32(i+0,!0),_=s().getInt32(i+4,!0);if(_)throw u(n)}finally{r.__wbindgen_add_to_stack_pointer(16)}}setThrottle(t){r.perspectiveviewerelement_setThrottle(this.__wbg_ptr,!f(t),f(t)?0:t)}showCommandMenu(t,e,n){let _=r.perspectiveviewerelement_showCommandMenu(this.__wbg_ptr,c(t),c(e),c(n));return u(_)}toggleColumnSettings(t,e){let n=m(t,r.__wbindgen_export,r.__wbindgen_export2),_=p,i=r.perspectiveviewerelement_toggleColumnSettings(this.__wbg_ptr,n,_,f(e)?0:c(e));return u(i)}toggleConfig(t){let e=r.perspectiveviewerelement_toggleConfig(this.__wbg_ptr,f(t)?16777215:t?1:0);return u(e)}};Symbol.dispose&&(G.prototype[Symbol.dispose]=G.prototype.free);var j=class a{static __wrap(t){t=t>>>0;let e=Object.create(a.prototype);return e.__wbg_ptr=t,tt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,tt.unregister(this),t}free(){let t=this.__destroy_into_raw();r.__wbg_proxysession_free(t,0)}close(){let t=this.__destroy_into_raw(),e=r.proxysession_close(t);return u(e)}handle_request(t){let e=r.proxysession_handle_request(this.__wbg_ptr,c(t));return u(e)}constructor(t,e){try{rt(t,F);let n=r.proxysession_new(t.__wbg_ptr,ot(e));return this.__wbg_ptr=n>>>0,tt.register(this,this.__wbg_ptr,this),this}finally{k[O++]=void 0}}};Symbol.dispose&&(j.prototype[Symbol.dispose]=j.prototype.free);var z=class a{static __wrap(t){t=t>>>0;let e=Object.create(a.prototype);return e.__wbg_ptr=t,wt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,wt.unregister(this),t}free(){let t=this.__destroy_into_raw();r.__wbg_table_free(t,0)}__getClassname(){try{let _=r.__wbindgen_add_to_stack_pointer(-16);r.table___getClassname(_,this.__wbg_ptr);var t=s().getInt32(_+0,!0),e=s().getInt32(_+4,!0),n=d(t,e);return t!==0&&r.__wbindgen_export4(t,e,1),n}finally{r.__wbindgen_add_to_stack_pointer(16)}}clear(){let t=r.table_clear(this.__wbg_ptr);return u(t)}columns(){let t=r.table_columns(this.__wbg_ptr);return u(t)}delete(t){let e=this.__destroy_into_raw(),n=r.table_delete(e,f(t)?0:c(t));return u(n)}describe(t){let e=r.table_describe(this.__wbg_ptr,f(t)?0:c(t));return u(e)}get_client(){let t=r.table_get_client(this.__wbg_ptr);return u(t)}get_features(){let t=r.table_get_features(this.__wbg_ptr);return u(t)}get_index(){let t=r.table_get_index(this.__wbg_ptr);return u(t)}get_limit(){let t=r.table_get_limit(this.__wbg_ptr);return u(t)}get_name(){let t=r.table_get_name(this.__wbg_ptr);return u(t)}make_port(){let t=r.table_make_port(this.__wbg_ptr);return u(t)}on_delete(t){let e=r.table_on_delete(this.__wbg_ptr,c(t));return u(e)}remove(t,e){let n=r.table_remove(this.__wbg_ptr,c(t),f(e)?0:c(e));return u(n)}remove_delete(t){let e=r.table_remove_delete(this.__wbg_ptr,t);return u(e)}replace(t,e){let n=r.table_replace(this.__wbg_ptr,c(t),f(e)?0:c(e));return u(n)}schema(){let t=r.table_schema(this.__wbg_ptr);return u(t)}size(){let t=r.table_size(this.__wbg_ptr);return u(t)}update(t,e){let n=r.table_update(this.__wbg_ptr,c(t),f(e)?0:c(e));return u(n)}validate_expressions(t){let e=r.table_validate_expressions(this.__wbg_ptr,c(t));return u(e)}view(t){let e=r.table_view(this.__wbg_ptr,f(t)?0:c(t));return u(e)}};Symbol.dispose&&(z.prototype[Symbol.dispose]=z.prototype.free);var I=class a{static __wrap(t){t=t>>>0;let e=Object.create(a.prototype);return e.__wbg_ptr=t,lt.register(e,e.__wbg_ptr,e),e}static __unwrap(t){return t instanceof a?t.__destroy_into_raw():0}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,lt.unregister(this),t}free(){let t=this.__destroy_into_raw();r.__wbg_view_free(t,0)}__get_model(){let t=r.view___get_model(this.__wbg_ptr);return a.__wrap(t)}__unsafe_get_name(){try{let _=r.__wbindgen_add_to_stack_pointer(-16);r.view___unsafe_get_name(_,this.__wbg_ptr);var t=s().getInt32(_+0,!0),e=s().getInt32(_+4,!0),n=d(t,e);return t!==0&&r.__wbindgen_export4(t,e,1),n}finally{r.__wbindgen_add_to_stack_pointer(16)}}collapse(t){let e=r.view_collapse(this.__wbg_ptr,t);return u(e)}column_paths(t){let e=r.view_column_paths(this.__wbg_ptr,f(t)?0:c(t));return u(e)}delete(){let t=this.__destroy_into_raw(),e=r.view_delete(t);return u(e)}dimensions(){let t=r.view_dimensions(this.__wbg_ptr);return u(t)}expand(t){let e=r.view_expand(this.__wbg_ptr,t);return u(e)}expression_schema(){let t=r.view_expression_schema(this.__wbg_ptr);return u(t)}get_config(){let t=r.view_get_config(this.__wbg_ptr);return u(t)}get_min_max(t){let e=m(t,r.__wbindgen_export,r.__wbindgen_export2),n=p,_=r.view_get_min_max(this.__wbg_ptr,e,n);return u(_)}num_columns(){let t=r.view_num_columns(this.__wbg_ptr);return u(t)}num_rows(){let t=r.view_num_rows(this.__wbg_ptr);return u(t)}on_delete(t){let e=r.view_on_delete(this.__wbg_ptr,c(t));return u(e)}on_remove(t){let e=r.view_on_remove(this.__wbg_ptr,c(t));return u(e)}on_update(t,e){let n=r.view_on_update(this.__wbg_ptr,c(t),f(e)?0:c(e));return u(n)}remove_delete(t){let e=r.view_remove_delete(this.__wbg_ptr,t);return u(e)}remove_remove(t){let e=r.view_remove_remove(this.__wbg_ptr,t);return u(e)}remove_update(t){let e=r.view_remove_update(this.__wbg_ptr,t);return u(e)}schema(){let t=r.view_schema(this.__wbg_ptr);return u(t)}set_depth(t){let e=r.view_set_depth(this.__wbg_ptr,t);return u(e)}to_arrow(t){let e=r.view_to_arrow(this.__wbg_ptr,f(t)?0:c(t));return u(e)}to_columns(t){let e=r.view_to_columns(this.__wbg_ptr,f(t)?0:c(t));return u(e)}to_columns_string(t){let e=r.view_to_columns_string(this.__wbg_ptr,f(t)?0:c(t));return u(e)}to_csv(t){let e=r.view_to_csv(this.__wbg_ptr,f(t)?0:c(t));return u(e)}to_json(t){let e=r.view_to_json(this.__wbg_ptr,f(t)?0:c(t));return u(e)}to_json_string(t){let e=r.view_to_json_string(this.__wbg_ptr,f(t)?0:c(t));return u(e)}to_ndjson(t){let e=r.view_to_ndjson(this.__wbg_ptr,f(t)?0:c(t));return u(e)}with_typed_arrays(t,e){let n=r.view_with_typed_arrays(this.__wbg_ptr,f(t)?0:c(t),c(e));return u(n)}};Symbol.dispose&&(I.prototype[Symbol.dispose]=I.prototype.free);var M=class a{static __wrap(t){t=t>>>0;let e=Object.create(a.prototype);return e.__wbg_ptr=t,et.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,et.unregister(this),t}free(){let t=this.__destroy_into_raw();r.__wbg_virtualdataslice_free(t,0)}fromArrowIpc(t){try{let _=r.__wbindgen_add_to_stack_pointer(-16);r.virtualdataslice_fromArrowIpc(_,this.__wbg_ptr,c(t));var e=s().getInt32(_+0,!0),n=s().getInt32(_+4,!0);if(n)throw u(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}constructor(t){let e=r.virtualdataslice_new(c(t));return this.__wbg_ptr=e>>>0,et.register(this,this.__wbg_ptr,this),this}setBooleanCol(t,e,n,_){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=m(t,r.__wbindgen_export,r.__wbindgen_export2),v=p;r.virtualdataslice_setBooleanCol(g,this.__wbg_ptr,w,v,e,c(n),f(_)?4294967297:_>>>0);var i=s().getInt32(g+0,!0),b=s().getInt32(g+4,!0);if(b)throw u(i)}finally{r.__wbindgen_add_to_stack_pointer(16)}}setCol(t,e,n,_,i){try{let w=r.__wbindgen_add_to_stack_pointer(-16),v=m(t,r.__wbindgen_export,r.__wbindgen_export2),h=p,y=m(e,r.__wbindgen_export,r.__wbindgen_export2),x=p;r.virtualdataslice_setCol(w,this.__wbg_ptr,v,h,y,x,n,c(_),f(i)?4294967297:i>>>0);var b=s().getInt32(w+0,!0),g=s().getInt32(w+4,!0);if(g)throw u(b)}finally{r.__wbindgen_add_to_stack_pointer(16)}}setDatetimeCol(t,e,n,_){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=m(t,r.__wbindgen_export,r.__wbindgen_export2),v=p;r.virtualdataslice_setDatetimeCol(g,this.__wbg_ptr,w,v,e,c(n),f(_)?4294967297:_>>>0);var i=s().getInt32(g+0,!0),b=s().getInt32(g+4,!0);if(b)throw u(i)}finally{r.__wbindgen_add_to_stack_pointer(16)}}setFloatCol(t,e,n,_){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=m(t,r.__wbindgen_export,r.__wbindgen_export2),v=p;r.virtualdataslice_setFloatCol(g,this.__wbg_ptr,w,v,e,c(n),f(_)?4294967297:_>>>0);var i=s().getInt32(g+0,!0),b=s().getInt32(g+4,!0);if(b)throw u(i)}finally{r.__wbindgen_add_to_stack_pointer(16)}}setIntegerCol(t,e,n,_){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=m(t,r.__wbindgen_export,r.__wbindgen_export2),v=p;r.virtualdataslice_setIntegerCol(g,this.__wbg_ptr,w,v,e,c(n),f(_)?4294967297:_>>>0);var i=s().getInt32(g+0,!0),b=s().getInt32(g+4,!0);if(b)throw u(i)}finally{r.__wbindgen_add_to_stack_pointer(16)}}setStringCol(t,e,n,_){try{let g=r.__wbindgen_add_to_stack_pointer(-16),w=m(t,r.__wbindgen_export,r.__wbindgen_export2),v=p;r.virtualdataslice_setStringCol(g,this.__wbg_ptr,w,v,e,c(n),f(_)?4294967297:_>>>0);var i=s().getInt32(g+0,!0),b=s().getInt32(g+4,!0);if(b)throw u(i)}finally{r.__wbindgen_add_to_stack_pointer(16)}}};Symbol.dispose&&(M.prototype[Symbol.dispose]=M.prototype.free);var J=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,pt.unregister(this),t}free(){let t=this.__destroy_into_raw();r.__wbg_virtualserver_free(t,0)}handleRequest(t){let e=te(t,r.__wbindgen_export),n=p,_=r.virtualserver_handleRequest(this.__wbg_ptr,e,n);return u(_)}constructor(t){try{let i=r.__wbindgen_add_to_stack_pointer(-16);r.virtualserver_new(i,c(t));var e=s().getInt32(i+0,!0),n=s().getInt32(i+4,!0),_=s().getInt32(i+8,!0);if(_)throw u(n);return this.__wbg_ptr=e>>>0,pt.register(this,this.__wbg_ptr,this),this}finally{r.__wbindgen_add_to_stack_pointer(16)}}};Symbol.dispose&&(J.prototype[Symbol.dispose]=J.prototype.free);function Ft(){try{let n=r.__wbindgen_add_to_stack_pointer(-16);r.getColumnConfigDefaults(n);var a=s().getInt32(n+0,!0),t=s().getInt32(n+4,!0),e=s().getInt32(n+8,!0);if(e)throw u(t);return u(a)}finally{r.__wbindgen_add_to_stack_pointer(16)}}function Rt(){try{let n=r.__wbindgen_add_to_stack_pointer(-16);r.getPluginConfigDefaults(n);var a=s().getInt32(n+0,!0),t=s().getInt32(n+4,!0),e=s().getInt32(n+8,!0);if(e)throw u(t);return u(a)}finally{r.__wbindgen_add_to_stack_pointer(16)}}function Et(){try{let n=r.__wbindgen_add_to_stack_pointer(-16);r.get_wasm_module(n);var a=s().getInt32(n+0,!0),t=s().getInt32(n+4,!0),e=s().getInt32(n+8,!0);if(e)throw u(t);return u(a)}finally{r.__wbindgen_add_to_stack_pointer(16)}}function Tt(){try{let n=r.__wbindgen_add_to_stack_pointer(-16);r.get_worker_url(n);var a=s().getInt32(n+0,!0),t=s().getInt32(n+4,!0),e=s().getInt32(n+8,!0);if(e)throw u(t);return u(a)}finally{r.__wbindgen_add_to_stack_pointer(16)}}function Pt(a,t){r.init(c(a),c(t))}function Ot(a){let t=m(a,r.__wbindgen_export,r.__wbindgen_export2),e=p;r.registerPlugin(t,e)}function jt(a,t){try{let _=r.__wbindgen_add_to_stack_pointer(-16);r.setColumnConfigDefaults(_,c(a),f(t)?0:c(t));var e=s().getInt32(_+0,!0),n=s().getInt32(_+4,!0);if(n)throw u(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}function zt(a,t){try{let _=r.__wbindgen_add_to_stack_pointer(-16);r.setPluginConfigDefaults(_,c(a),f(t)?0:c(t));var e=s().getInt32(_+0,!0),n=s().getInt32(_+4,!0);if(n)throw u(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}function ht(){return{__proto__:null,"./perspective-viewer.wasm_bg.js":{__proto__:null,__wbg_Error_8c4e43fe74559d73:function(t,e){var n=d(t,e);let _=Error(n);return c(_)},__wbg_Number_04624de7d0e8332d:function(t){return Number(o(t))},__wbg_String_8f0eb39a4a4c2f66:function(t,e){let n=String(o(e)),_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg___wbindgen_bigint_get_as_i64_8fcf4ce7f1ca72a2:function(t,e){let n=o(e),_=typeof n=="bigint"?n:void 0;s().setBigInt64(t+8,f(_)?BigInt(0):_,!0),s().setInt32(t+0,!f(_),!0)},__wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25:function(t){let e=o(t),n=typeof e=="boolean"?e:void 0;return f(n)?16777215:n?1:0},__wbg___wbindgen_debug_string_0bc8482c6e3508ae:function(t,e){let n=_t(o(e)),_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg___wbindgen_in_47fa6863be6f2f25:function(t,e){return o(t)in o(e)},__wbg___wbindgen_is_bigint_31b12575b56f32fc:function(t){return typeof o(t)=="bigint"},__wbg___wbindgen_is_function_0095a73b8b156f76:function(t){return typeof o(t)=="function"},__wbg___wbindgen_is_null_ac34f5003991759a:function(t){return o(t)===null},__wbg___wbindgen_is_object_5ae8e5880f2c1fbd:function(t){let e=o(t);return typeof e=="object"&&e!==null},__wbg___wbindgen_is_string_cd444516edc5b180:function(t){return typeof o(t)=="string"},__wbg___wbindgen_is_undefined_9e4d92534c42d778:function(t){return o(t)===void 0},__wbg___wbindgen_jsval_eq_11888390b0186270:function(t,e){return o(t)===o(e)},__wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811:function(t,e){return o(t)==o(e)},__wbg___wbindgen_number_get_8ff4255516ccad3e:function(t,e){let n=o(e),_=typeof n=="number"?n:void 0;s().setFloat64(t+8,f(_)?0:_,!0),s().setInt32(t+0,!f(_),!0)},__wbg___wbindgen_string_get_72fb696202c56729:function(t,e){let n=o(e),_=typeof n=="string"?n:void 0;var i=f(_)?0:m(_,r.__wbindgen_export,r.__wbindgen_export2),b=p;s().setInt32(t+4,b,!0),s().setInt32(t+0,i,!0)},__wbg___wbindgen_throw_be289d5034ed271b:function(t,e){var n=d(t,e);throw new Error(n)},__wbg__wbg_cb_unref_d9b87ff7982e3b21:function(t){o(t)._wbg_cb_unref()},__wbg_abort_2f0584e03e8e3950:function(t){o(t).abort()},__wbg_addEventListener_3acb0aad4483804c:function(){return l(function(t,e,n,_){var i=d(e,n);o(t).addEventListener(i,o(_))},arguments)},__wbg_addEventListener_5ef04ffb1d3af066:function(){return l(function(t,e,n,_,i){var b=d(e,n);o(t).addEventListener(b,o(_),i!==0)},arguments)},__wbg_addEventListener_c917b5aafbcf493f:function(){return l(function(t,e,n,_,i){var b=d(e,n);o(t).addEventListener(b,o(_),o(i))},arguments)},__wbg_add_2b0552fe2d2151c8:function(t,e){let n=o(t).add(o(e));return c(n)},__wbg_add_5be83378df680c25:function(){return l(function(t,e,n){var _=d(e,n);o(t).add(_)},arguments)},__wbg_adoptedStyleSheets_542d651fbb47685f:function(t){let e=o(t).adoptedStyleSheets;return c(e)},__wbg_adoptedStyleSheets_d149afb005470855:function(t){let e=o(t).adoptedStyleSheets;return c(e)},__wbg_appendChild_dea38765a26d346d:function(){return l(function(t,e){let n=o(t).appendChild(o(e));return c(n)},arguments)},__wbg_append_a992ccc37aa62dc4:function(){return l(function(t,e,n,_,i){var b=d(e,n),g=d(_,i);o(t).append(b,g)},arguments)},__wbg_apply_2e22c45cb4f12415:function(){return l(function(t,e,n){let _=Reflect.apply(o(t),o(e),o(n));return c(_)},arguments)},__wbg_apply_ada2ee1a60ac7b3c:function(){return l(function(t,e,n){let _=o(t).apply(o(e),o(n));return c(_)},arguments)},__wbg_assign_6170c0d04d5c26f4:function(t,e){let n=Object.assign(o(t),o(e));return c(n)},__wbg_asyncIterator_58dd45e58aa3721e:function(){return c(Symbol.asyncIterator)},__wbg_at_dfc235641cc0e40c:function(t,e){let n=o(t).at(e);return c(n)},__wbg_attachShadow_d31cd520620b24d6:function(){return l(function(t,e){let n=o(t).attachShadow(o(e));return c(n)},arguments)},__wbg_blur_07f34335e06e5234:function(){return l(function(t){o(t).blur()},arguments)},__wbg_body_3a0b4437dadea6bf:function(t){let e=o(t).body;return f(e)?0:c(e)},__wbg_body_f67922363a220026:function(t){let e=o(t).body;return f(e)?0:c(e)},__wbg_bootstrap_42d43e695fafafc0:function(t,e,n,_,i,b){var g=d(e,n),w=d(_,i);let v=ut(o(t),g,w,u(b));return c(v)},__wbg_bottom_c7ec510a18034add:function(t){return o(t).bottom},__wbg_bubbles_ad88192d3c29e6f9:function(t){return o(t).bubbles},__wbg_buffer_26d0910f3a5bc899:function(t){let e=o(t).buffer;return c(e)},__wbg_button_d86841d0a03adc44:function(t){return o(t).button},__wbg_cache_key_b02185c5bc89ef2a:function(t){let e=o(t).__yew_subtree_cache_key;return f(e)?4294967297:e>>>0},__wbg_calculatePath_ab4c887f662b5df4:function(t,e,n){var _=d(e,n);let i=o(t).calculatePath(_);return c(i)},__wbg_calculatePresizePaths_62115f841e838f25:function(t){let e=o(t).calculatePresizePaths();return c(e)},__wbg_call_389efe28435a9388:function(){return l(function(t,e){let n=o(t).call(o(e));return c(n)},arguments)},__wbg_call_41bedb84c3e5c0c9:function(){return l(function(t,e,n,_,i,b){let g=o(t).call(o(e),o(n),o(_),o(i),o(b));return c(g)},arguments)},__wbg_call_4708e0c13bdc8e95:function(){return l(function(t,e,n){let _=o(t).call(o(e),o(n));return c(_)},arguments)},__wbg_call_812d25f1510c13c8:function(){return l(function(t,e,n,_){let i=o(t).call(o(e),o(n),o(_));return c(i)},arguments)},__wbg_cancelBubble_d93ec09e9c46cd6f:function(t){return o(t).cancelBubble},__wbg_checked_04db83ac6810bc82:function(t){return o(t).checked},__wbg_childNodes_75d35de33c9f6fbb:function(t){let e=o(t).childNodes;return c(e)},__wbg_children_54099e7692eefa29:function(t){let e=o(t).children;return c(e)},__wbg_classList_1a87c34c6d81421e:function(t){let e=o(t).classList;return c(e)},__wbg_className_2a1be685f5d518d5:function(t,e){let n=o(e).className,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_clear_3670f9a21860e1b4:function(){return l(function(t){let e=o(t).clear();return c(e)},arguments)},__wbg_click_0e9c20848b655ed3:function(t){o(t).click()},__wbg_clientHeight_6432ff0d61ccfe7d:function(t){return o(t).clientHeight},__wbg_clientX_a3c5f4ff30e91264:function(t){return o(t).clientX},__wbg_clientY_e28509acb9b4a42a:function(t){return o(t).clientY},__wbg_client_new:function(t){let e=F.__wrap(t);return c(e)},__wbg_clipboard_98c5a32249fa8416:function(t){let e=o(t).clipboard;return c(e)},__wbg_clipboard_write_c6bf0ce4d62b890b:function(){return l(function(t,e,n){var _=d(t,e);let i=at(_,o(n));return c(i)},arguments)},__wbg_cloneNode_b85e9102a9a31b29:function(){return l(function(t,e){let n=o(t).cloneNode(e!==0);return c(n)},arguments)},__wbg_cloneNode_eaf4ea08ebf633a5:function(){return l(function(t){let e=o(t).cloneNode();return c(e)},arguments)},__wbg_close_fad2f0ee451926ed:function(t){o(t).close()},__wbg_closest_11206fe6e0fb4e4e:function(){return l(function(t,e,n){var _=d(e,n);let i=o(t).closest(_);return f(i)?0:c(i)},arguments)},__wbg_code_dee0dae4730408e1:function(t,e){let n=o(e).code,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_column_config_schema_af474819ed93c24b:function(){return l(function(t,e,n,_,i,b,g,w,v,h,y,x){var C=d(e,n),q=d(_,i),D=d(b,g),kt=d(y,x);let St=o(t).column_config_schema(C,q,D,o(w),o(v),o(h),kt);return c(St)},arguments)},__wbg_composedPath_9154ab2547c668d5:function(t){let e=o(t).composedPath();return c(e)},__wbg_contains_1056459c33f961e8:function(t,e){return o(t).contains(o(e))},__wbg_contains_6f4d5df35ef8a13a:function(t,e,n){var _=d(e,n);return o(t).contains(_)},__wbg_contentRect_4f90c37fc7eb4cf4:function(t){let e=o(t).contentRect;return c(e)},__wbg_contentWindow_9efd0073ff9fa45b:function(t){let e=o(t).contentWindow;return f(e)?0:c(e)},__wbg_createElementNS_ee00621496b30ec2:function(){return l(function(t,e,n,_,i){var b=d(e,n),g=d(_,i);let w=o(t).createElementNS(b,g);return c(w)},arguments)},__wbg_createElement_49f60fdcaae809c8:function(){return l(function(t,e,n){var _=d(e,n);let i=o(t).createElement(_);return c(i)},arguments)},__wbg_createObjectURL_918185db6a10a0c8:function(){return l(function(t,e){let n=URL.createObjectURL(o(e)),_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},arguments)},__wbg_createTextNode_55029686c9591bf3:function(t,e,n){var _=d(e,n);let i=o(t).createTextNode(_);return c(i)},__wbg_cssRules_554f47f3049cf066:function(){return l(function(t){let e=o(t).cssRules;return c(e)},arguments)},__wbg_cssRules_85954e7c284ec53b:function(t){let e=o(t).cssRules;return c(e)},__wbg_cssText_8f3f27e60c824421:function(t,e){let n=o(e).cssText,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_dataTransfer_d924a622fbe51b06:function(t){let e=o(t).dataTransfer;return f(e)?0:c(e)},__wbg_data_5330da50312d0bc1:function(t){let e=o(t).data;return c(e)},__wbg_dataset_20cb5c72458ae3fc:function(t){let e=o(t).dataset;return c(e)},__wbg_debug_46a93995fc6f8820:function(t,e,n,_){console.debug(o(t),o(e),o(n),o(_))},__wbg_debug_a4099fa12db6cd61:function(t){console.debug(o(t))},__wbg_decode_a28a47c6d83f2594:function(){return l(function(t,e,n,_,i){let b=o(e).decode(E(n,_),o(i)),g=m(b,r.__wbindgen_export,r.__wbindgen_export2),w=p;s().setInt32(t+4,w,!0),s().setInt32(t+0,g,!0)},arguments)},__wbg_define_panel_tab_e9985bcdee9c9099:function(t,e){var n=d(t,e);ct(n)},__wbg_delete_8318b529ff42aa20:function(t,e,n){var _=d(e,n);delete o(t)[_]},__wbg_delete_adc77d4d1bfc4aed:function(t){o(t).delete()},__wbg_deselect_4dd3e55a130cfd6b:function(){return l(function(t){let e=o(t).deselect();return c(e)},arguments)},__wbg_detail_934cf9545e3214d3:function(t){let e=o(t).detail;return c(e)},__wbg_dispatchEvent_dc8dcc7ddca11378:function(){return l(function(t,e){return o(t).dispatchEvent(o(e))},arguments)},__wbg_document_ee35a3d3ae34ef6c:function(t){let e=o(t).document;return f(e)?0:c(e)},__wbg_done_57b39ecd9addfe81:function(t){return o(t).done},__wbg_draw_757250a2517be502:function(){return l(function(t,e,n,_,i){let b=o(t).draw(I.__wrap(e),n===4294967297?void 0:n,_===4294967297?void 0:_,i!==0);return c(b)},arguments)},__wbg_entries_58c7934c745daac7:function(t){let e=Object.entries(o(t));return c(e)},__wbg_error_3c7d958458bf649b:function(t,e){var n=vt(t,e).slice();r.__wbindgen_export4(t,e*4,4),console.error(...n)},__wbg_error_7534b8e9a36f1ab4:function(t,e){var n=d(t,e);t!==0&&r.__wbindgen_export4(t,e,1),console.error(n)},__wbg_error_794d0ffc9d00d5c3:function(t,e,n,_){console.error(o(t),o(e),o(n),o(_))},__wbg_error_9a7fe3f932034cde:function(t){console.error(o(t))},__wbg_error_f852e41c69b0bd84:function(t,e){console.error(o(t),o(e))},__wbg_fetch_e6e8e0a221783759:function(t,e){let n=o(t).fetch(o(e));return c(n)},__wbg_focus_128ff465f65677cc:function(){return l(function(t){o(t).focus()},arguments)},__wbg_fonts_ba4bc521c555025e:function(t){let e=o(t).fonts;return c(e)},__wbg_format_7c97ddc401dae52f:function(t){let e=o(t).format;return c(e)},__wbg_from_bddd64e7d5ff6941:function(t){let e=Array.from(o(t));return c(e)},__wbg_getAttribute_b9f6fc4b689c71b0:function(t,e,n,_){var i=d(n,_);let b=o(e).getAttribute(i);var g=f(b)?0:m(b,r.__wbindgen_export,r.__wbindgen_export2),w=p;s().setInt32(t+4,w,!0),s().setInt32(t+0,g,!0)},__wbg_getBoundingClientRect_b5c8c34d07878818:function(t){let e=o(t).getBoundingClientRect();return c(e)},__wbg_getComputedStyle_2d1f9dfe4ee7e0b9:function(){return l(function(t,e){let n=o(t).getComputedStyle(o(e));return f(n)?0:c(n)},arguments)},__wbg_getContext_2a5764d48600bc43:function(){return l(function(t,e,n){var _=d(e,n);let i=o(t).getContext(_);return f(i)?0:c(i)},arguments)},__wbg_getEntriesByName_02488cff0bc7581c:function(t,e,n,_,i){var b=d(e,n),g=d(_,i);let w=o(t).getEntriesByName(b,g);return c(w)},__wbg_getPropertyValue_d6911b2a1f9acba9:function(){return l(function(t,e,n,_){var i=d(n,_);let b=o(e).getPropertyValue(i),g=m(b,r.__wbindgen_export,r.__wbindgen_export2),w=p;s().setInt32(t+4,w,!0),s().setInt32(t+0,g,!0)},arguments)},__wbg_getRandomValues_1c61fac11405ffdc:function(){return l(function(t,e){globalThis.crypto.getRandomValues(E(t,e))},arguments)},__wbg_getReader_804829cfb24eb4dd:function(t){let e=o(t).getReader();return c(e)},__wbg_getRootNode_193e544ed534e810:function(t){let e=o(t).getRootNode();return c(e)},__wbg_getSelection_d345357cda220f17:function(){return l(function(t){let e=o(t).getSelection();return f(e)?0:c(e)},arguments)},__wbg_getTime_1e3cd1391c5c3995:function(t){return o(t).getTime()},__wbg_getTimezoneOffset_81776d10a4ec18a8:function(t){return o(t).getTimezoneOffset()},__wbg_get_0bdeda968867e10e:function(){return l(function(t,e){let n=Reflect.get(o(t),e>>>0);return c(n)},arguments)},__wbg_get_5dd1ee4c9f462865:function(t,e,n,_){var i=d(n,_);let b=o(e)[i];var g=f(b)?0:m(b,r.__wbindgen_export,r.__wbindgen_export2),w=p;s().setInt32(t+4,w,!0),s().setInt32(t+0,g,!0)},__wbg_get_76e04509d1922a04:function(t,e,n){var _=d(e,n);let i=o(t)[_];return f(i)?0:c(i)},__wbg_get_941633a1d2f510cb:function(){return l(function(t,e,n,_){var i=d(n,_);let b=o(e).get(i);var g=f(b)?0:m(b,r.__wbindgen_export,r.__wbindgen_export2),w=p;s().setInt32(t+4,w,!0),s().setInt32(t+0,g,!0)},arguments)},__wbg_get_9b94d73e6221f75c:function(t,e){let n=o(t)[e>>>0];return c(n)},__wbg_get_b3ed3ad4be2bc8ac:function(){return l(function(t,e){let n=Reflect.get(o(t),o(e));return c(n)},arguments)},__wbg_get_d8db2ad31d529ff8:function(t,e){let n=o(t)[e>>>0];return f(n)?0:c(n)},__wbg_get_static_config_3afbfffa63ba5580:function(t){let e=o(t).get_static_config();return c(e)},__wbg_get_with_index_d26da38d2c038e1a:function(t,e){let n=o(t)[e>>>0];return f(n)?0:c(n)},__wbg_get_with_ref_key_1dc361bd10053bfe:function(t,e){let n=o(t)[o(e)];return c(n)},__wbg_hasAttribute_5d8f52cb4c739280:function(t,e,n){var _=d(e,n);return o(t).hasAttribute(_)},__wbg_has_991efccb5a701a27:function(t,e){return o(t).has(o(e))},__wbg_has_d4e53238966c12b6:function(){return l(function(t,e){return Reflect.has(o(t),o(e))},arguments)},__wbg_headers_59a2938db9f80985:function(t){let e=o(t).headers;return c(e)},__wbg_height_45209601b4c4ede6:function(t){return o(t).height},__wbg_height_c2027cf67d1c9b11:function(t){return o(t).height},__wbg_hidden_8ce6a98b8c12451c:function(t){return o(t).hidden},__wbg_hidePopover_f52b72171825485d:function(){return l(function(t){o(t).hidePopover()},arguments)},__wbg_hit_test_b0552ff1c5208cab:function(){return l(function(t,e,n){let _=o(t).hit_test(e,n);return c(_)},arguments)},__wbg_host_fb29f8be35c2517d:function(t){let e=o(t).host;return c(e)},__wbg_includes_32215c836f1cd3fb:function(t,e,n){return o(t).includes(o(e),n)},__wbg_indexOf_e5f91887d9e5023e:function(t,e,n){return o(t).indexOf(o(e),n)},__wbg_info_148d043840582012:function(t){console.info(o(t))},__wbg_info_9e602cf10c5c690b:function(t,e,n,_){console.info(o(t),o(e),o(n),o(_))},__wbg_innerHeight_54aa104da08becd2:function(){return l(function(t){let e=o(t).innerHeight;return c(e)},arguments)},__wbg_innerWidth_fa95c57321f4f033:function(){return l(function(t){let e=o(t).innerWidth;return c(e)},arguments)},__wbg_insertBefore_1468142836e61a51:function(){return l(function(t,e,n){let _=o(t).insertBefore(o(e),o(n));return c(_)},arguments)},__wbg_insertPanel_141024f02dba50af:function(t,e,n,_,i){var b=d(e,n);let g=o(t).insertPanel(b,u(_),u(i));return c(g)},__wbg_instanceof_ArrayBuffer_c367199e2fa2aa04:function(t){let e;try{e=o(t)instanceof ArrayBuffer}catch{e=!1}return e},__wbg_instanceof_Array_d9eac779cd191cbc:function(t){let e;try{e=o(t)instanceof Array}catch{e=!1}return e},__wbg_instanceof_CanvasRenderingContext2d_4bb052fd1c3d134d:function(t){let e;try{e=o(t)instanceof CanvasRenderingContext2D}catch{e=!1}return e},__wbg_instanceof_CssGroupingRule_875241920a85dfd7:function(t){let e;try{e=o(t)instanceof CSSGroupingRule}catch{e=!1}return e},__wbg_instanceof_CssImportRule_21bd264cef048043:function(t){let e;try{e=o(t)instanceof CSSImportRule}catch{e=!1}return e},__wbg_instanceof_CssStyleRule_23e59108346af0df:function(t){let e;try{e=o(t)instanceof CSSStyleRule}catch{e=!1}return e},__wbg_instanceof_CssStyleSheet_622aeba16e7e2d66:function(t){let e;try{e=o(t)instanceof CSSStyleSheet}catch{e=!1}return e},__wbg_instanceof_CustomEvent_7dc010f377596c94:function(t){let e;try{e=o(t)instanceof CustomEvent}catch{e=!1}return e},__wbg_instanceof_Date_1b9f15b87f10aa4c:function(t){let e;try{e=o(t)instanceof Date}catch{e=!1}return e},__wbg_instanceof_Element_9e662f49ab6c6beb:function(t){let e;try{e=o(t)instanceof Element}catch{e=!1}return e},__wbg_instanceof_Error_8573fe0b0b480f46:function(t){let e;try{e=o(t)instanceof Error}catch{e=!1}return e},__wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792:function(t){let e;try{e=o(t)instanceof HTMLCanvasElement}catch{e=!1}return e},__wbg_instanceof_HtmlElement_5abfac207260fd6f:function(t){let e;try{e=o(t)instanceof HTMLElement}catch{e=!1}return e},__wbg_instanceof_HtmlInputElement_c10b7260b4e0710a:function(t){let e;try{e=o(t)instanceof HTMLInputElement}catch{e=!1}return e},__wbg_instanceof_HtmlLinkElement_5eb5b0855a17d0fc:function(t){let e;try{e=o(t)instanceof HTMLLinkElement}catch{e=!1}return e},__wbg_instanceof_HtmlSelectElement_a1820832b22b0d1e:function(t){let e;try{e=o(t)instanceof HTMLSelectElement}catch{e=!1}return e},__wbg_instanceof_Map_53af74335dec57f4:function(t){let e;try{e=o(t)instanceof Map}catch{e=!1}return e},__wbg_instanceof_Node_da04bd8df43deba3:function(t){let e;try{e=o(t)instanceof Node}catch{e=!1}return e},__wbg_instanceof_Object_1c6af87502b733ed:function(t){let e;try{e=o(t)instanceof Object}catch{e=!1}return e},__wbg_instanceof_Promise_0094681e3519d6ec:function(t){let e;try{e=o(t)instanceof Promise}catch{e=!1}return e},__wbg_instanceof_Response_ee1d54d79ae41977:function(t){let e;try{e=o(t)instanceof Response}catch{e=!1}return e},__wbg_instanceof_ShadowRoot_5285adde3587c73e:function(t){let e;try{e=o(t)instanceof ShadowRoot}catch{e=!1}return e},__wbg_instanceof_Uint8Array_9b9075935c74707c:function(t){let e;try{e=o(t)instanceof Uint8Array}catch{e=!1}return e},__wbg_instanceof_Window_ed49b2db8df90359:function(t){let e;try{e=o(t)instanceof Window}catch{e=!1}return e},__wbg_isArray_d314bb98fcf08331:function(t){return Array.isArray(o(t))},__wbg_isCollapsed_617e9be3f62f5a25:function(t){return o(t).isCollapsed},__wbg_isConnected_6110bc2c5462f90e:function(t){return o(t).isConnected},__wbg_isContentEditable_f5b0ce009dbd035b:function(t){return o(t).isContentEditable},__wbg_isIntersecting_4edac2db8e5bdcfd:function(t){return o(t).isIntersecting},__wbg_isSafeInteger_bfbc7332a9768d2a:function(t){return Number.isSafeInteger(o(t))},__wbg_isSameNode_3caa48d6eb3c880e:function(t,e){return o(t).isSameNode(o(e))},__wbg_is_f29129f676e5410c:function(t,e){return Object.is(o(t),o(e))},__wbg_item_48715d3212ed96cb:function(t,e){let n=o(t).item(e>>>0);return f(n)?0:c(n)},__wbg_item_5c82f52b014b3056:function(t,e){let n=o(t).item(e>>>0);return f(n)?0:c(n)},__wbg_item_64b77e6a26f7de76:function(t,e){let n=o(t).item(e>>>0);return f(n)?0:c(n)},__wbg_item_ca823df8214b9e2b:function(t,e){let n=o(t).item(e>>>0);return f(n)?0:c(n)},__wbg_iterator_6ff6560ca1568e55:function(){return c(Symbol.iterator)},__wbg_keyCode_155291a11654466e:function(t){return o(t).keyCode},__wbg_key_d41e8e825e6bb0e9:function(t,e){let n=o(e).key,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_keys_b50a709a76add04e:function(t){let e=Object.keys(o(t));return c(e)},__wbg_languages_5a69df7551d1a803:function(t){let e=o(t).languages;return c(e)},__wbg_lastChild_132d67597d5e4aef:function(t){let e=o(t).lastChild;return f(e)?0:c(e)},__wbg_left_3b7c3c1030d5ca7a:function(t){return o(t).left},__wbg_length_25851a48867b2afc:function(t){return o(t).length},__wbg_length_32ed9a279acd054c:function(t){return o(t).length},__wbg_length_35a7bace40f36eac:function(t){return o(t).length},__wbg_length_3f12bc1cab862cc3:function(t){return o(t).length},__wbg_length_e455564ce5cbf46e:function(t){return o(t).length},__wbg_length_edae0cd13a8d3b71:function(t){return o(t).length},__wbg_listener_id_3f13203bf7de1e4d:function(t){let e=o(t).__yew_listener_id;return f(e)?4294967297:e>>>0},__wbg_load_f8d29f3c1bda8dd1:function(t,e,n,_,i){var b=d(e,n),g=d(_,i);let w=o(t).load(b,g);return c(w)},__wbg_mark_3b530a64b09ba08a:function(){return l(function(t,e,n){var _=d(e,n);o(t).mark(_)},arguments)},__wbg_maximize_5914d240f9720c92:function(t,e,n){var _=d(e,n);o(t).maximize(_)},__wbg_measureText_9d64a92333bd05ee:function(){return l(function(t,e,n){var _=d(e,n);let i=o(t).measureText(_);return c(i)},arguments)},__wbg_measure_288b48c082eae0fe:function(){return l(function(t,e,n,_,i){var b=d(e,n),g=d(_,i);o(t).measure(b,g)},arguments)},__wbg_message_9ddc4b9a62a7c379:function(t){let e=o(t).message;return c(e)},__wbg_minimize_b6797cde233b147a:function(t){o(t).minimize()},__wbg_namespaceURI_86e2062c65f0f341:function(t,e){let n=o(e).namespaceURI;var _=f(n)?0:m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_navigator_43be698ba96fc088:function(t){let e=o(t).navigator;return c(e)},__wbg_new_1123ec9eac9107f9:function(t){let e=new it(o(t));return c(e)},__wbg_new_16c83877745f8d12:function(){return l(function(t,e){var n=d(t,e);let _=new InputEvent(n);return c(_)},arguments)},__wbg_new_1d5bd472c706b768:function(){return l(function(){let t=new CSSStyleSheet;return c(t)},arguments)},__wbg_new_245cd5c49157e602:function(t){let e=new Date(o(t));return c(e)},__wbg_new_2ec3ec8c398b20d2:function(){return l(function(){let t=new TextDecoder;return c(t)},arguments)},__wbg_new_361308b2356cecd0:function(){let t=new Object;return c(t)},__wbg_new_384a230f8673183c:function(){return l(function(t,e){var n=d(t,e);let _=new CustomEvent(n);return c(_)},arguments)},__wbg_new_3eb36ae241fe6f44:function(){let t=new Array;return c(t)},__wbg_new_406106b44b3d11fa:function(t){let e=new Set(o(t));return c(e)},__wbg_new_64284bd487f9d239:function(){return l(function(){let t=new Headers;return c(t)},arguments)},__wbg_new_6f0524fbfa300c47:function(){return l(function(){let t=new MessageChannel;return c(t)},arguments)},__wbg_new_72b49615380db768:function(t,e){var n=d(t,e);let _=new Error(n);return c(_)},__wbg_new_86c8f0b79e48927d:function(t,e){let n=new Intl.NumberFormat(o(t),o(e));return c(n)},__wbg_new_8a6f238a6ece86ea:function(){let t=new Error;return c(t)},__wbg_new_b5d9e2fb389fef91:function(t,e){try{var n={a:t,b:e},_=(b,g)=>{let w=n.a;n.a=0;try{return Ht(w,n.b,b,g)}finally{n.a=w}};let i=new Promise(_);return c(i)}finally{n.a=n.b=0}},__wbg_new_b949e7f56150a5d1:function(){return l(function(){let t=new AbortController;return c(t)},arguments)},__wbg_new_c155239f1b113b68:function(t,e){let n=new Intl.DateTimeFormat(o(t),o(e));return c(n)},__wbg_new_c734e4e60dd53338:function(t){let e=new st(o(t));return c(e)},__wbg_new_dca287b076112a51:function(){return c(new Map)},__wbg_new_dd2b680c8bf6ae29:function(t){let e=new Uint8Array(o(t));return c(e)},__wbg_new_from_slice_a3d2629dc1826784:function(t,e){let n=new Uint8Array(E(t,e));return c(n)},__wbg_new_no_args_1c7c842f08d00ebb:function(t,e){var n=d(t,e);let _=new Function(n);return c(_)},__wbg_new_with_event_init_dict_48877e7ca125f3c1:function(){return l(function(t,e,n){var _=d(t,e);let i=new CustomEvent(_,o(n));return c(i)},arguments)},__wbg_new_with_str_and_init_a61cbc6bdef21614:function(){return l(function(t,e,n){var _=d(t,e);let i=new Request(_,o(n));return c(i)},arguments)},__wbg_new_with_str_sequence_and_options_9b8b0bee99ec6b0f:function(){return l(function(t,e){let n=new Blob(o(t),o(e));return c(n)},arguments)},__wbg_new_with_u8_array_sequence_08b2096a9f3117c0:function(){return l(function(t){let e=new Blob(o(t));return c(e)},arguments)},__wbg_nextSibling_2e988d9bbe3e06f0:function(t){let e=o(t).nextSibling;return f(e)?0:c(e)},__wbg_next_3482f54c49e8af19:function(){return l(function(t){let e=o(t).next();return c(e)},arguments)},__wbg_next_418f80d8f5303233:function(t){let e=o(t).next;return c(e)},__wbg_now_a3af9a2f4bbaa4d1:function(){return Date.now()},__wbg_now_ebffdf7e580f210d:function(t){return o(t).now()},__wbg_observe_1def4936df655a12:function(t,e){o(t).observe(o(e))},__wbg_observe_73e16bff92bd62ba:function(t,e){o(t).observe(o(e))},__wbg_of_f915f7cd925b21a5:function(t){let e=Array.of(o(t));return c(e)},__wbg_offsetHeight_34f7abc1686733cc:function(t){return o(t).offsetHeight},__wbg_offsetParent_9627ebca6b03e8b2:function(t){let e=o(t).offsetParent;return f(e)?0:c(e)},__wbg_offsetWidth_f37b33a53e513101:function(t){return o(t).offsetWidth},__wbg_offsetX_b76b9bb1f9235de9:function(t){return o(t).offsetX},__wbg_offsetY_db5c1ddb866e1b82:function(t){return o(t).offsetY},__wbg_ok_87f537440a0acf85:function(t){return o(t).ok},__wbg_overlay_d0f9712f0824bcd5:function(t){let e=o(t).overlay;return c(e)},__wbg_parentElement_75863410a8617953:function(t){let e=o(t).parentElement;return f(e)?0:c(e)},__wbg_parentNode_d44bd5ec58601e45:function(t){let e=o(t).parentNode;return f(e)?0:c(e)},__wbg_parse_708461a1feddfb38:function(){return l(function(t,e){var n=d(t,e);let _=JSON.parse(n);return c(_)},arguments)},__wbg_performance_06f12ba62483475d:function(t){let e=o(t).performance;return f(e)?0:c(e)},__wbg_plugin_config_schema_0bc5c9a74e20833a:function(){return l(function(t,e,n){let _=o(t).plugin_config_schema(o(e),o(n));return c(_)},arguments)},__wbg_pointerId_466b1bdcaf2fe835:function(t){return o(t).pointerId},__wbg_pop_80fa29128215a463:function(t){let e=o(t).pop();return c(e)},__wbg_port1_6251ddc5cf5c9287:function(t){let e=o(t).port1;return c(e)},__wbg_port2_b2a294b0ede1e13c:function(t){let e=o(t).port2;return c(e)},__wbg_postMessage_99dab4742cd26c46:function(){return l(function(t,e,n,_,i){var b=d(n,_);o(t).postMessage(o(e),b,o(i))},arguments)},__wbg_prepend_12ed960547d9dfe1:function(){return l(function(t,e){o(t).prepend(o(e))},arguments)},__wbg_presize_6e76abae26f1a4b1:function(){return l(function(t,e,n){let _=o(t).presize(e,n);return c(_)},arguments)},__wbg_preventDefault_cdcfcd7e301b9702:function(t){o(t).preventDefault()},__wbg_prototypesetcall_bdcdcc5842e4d77d:function(t,e,n){Uint8Array.prototype.set.call(E(t,e),o(n))},__wbg_push_8ffdcb2063340ba5:function(t,e){return o(t).push(o(e))},__wbg_querySelectorAll_1283aae52043a951:function(){return l(function(t,e,n){var _=d(e,n);let i=o(t).querySelectorAll(_);return c(i)},arguments)},__wbg_querySelectorAll_5875742f4e11f759:function(){return l(function(t,e,n){var _=d(e,n);let i=o(t).querySelectorAll(_);return c(i)},arguments)},__wbg_querySelector_1be4292f202b1597:function(){return l(function(t,e,n){var _=d(e,n);let i=o(t).querySelector(_);return f(i)?0:c(i)},arguments)},__wbg_querySelector_4dc619d02f6cb079:function(){return l(function(t,e,n){var _=d(e,n);let i=o(t).querySelector(_);return f(i)?0:c(i)},arguments)},__wbg_queueMicrotask_0aa0a927f78f5d98:function(t){let e=o(t).queueMicrotask;return c(e)},__wbg_queueMicrotask_5bb536982f78a56f:function(t){queueMicrotask(o(t))},__wbg_readText_b9ac81623f153a62:function(t){let e=o(t).readText();return c(e)},__wbg_read_68fd377df67e19b0:function(t){let e=o(t).read();return c(e)},__wbg_readyState_cf11f0728fc7b46c:function(t,e){let n=o(e).readyState,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_realCoordinates_0cfcec58efa302f7:function(t,e){let n=o(t).realCoordinates(o(e));return c(n)},__wbg_reject_a2176de7f1212be5:function(t){let e=Promise.reject(o(t));return c(e)},__wbg_relatedTarget_1557cded94b97af2:function(t){let e=o(t).relatedTarget;return f(e)?0:c(e)},__wbg_releasePointerCapture_420ef33c7c5fb6f4:function(){return l(function(t,e){o(t).releasePointerCapture(e)},arguments)},__wbg_removeAllRanges_39254b77dc6257ab:function(){return l(function(t){o(t).removeAllRanges()},arguments)},__wbg_removeAttribute_87259aab06d9f286:function(){return l(function(t,e,n){var _=d(e,n);o(t).removeAttribute(_)},arguments)},__wbg_removeChild_2f0b06213dbc49ca:function(){return l(function(t,e){let n=o(t).removeChild(o(e));return c(n)},arguments)},__wbg_removeEventListener_0c0902ed5009dd9f:function(){return l(function(t,e,n,_,i){var b=d(e,n);o(t).removeEventListener(b,o(_),i!==0)},arguments)},__wbg_removeEventListener_e63328781a5b9af9:function(){return l(function(t,e,n,_){var i=d(e,n);o(t).removeEventListener(i,o(_))},arguments)},__wbg_removePanel_e1df14823e9d01a4:function(t,e,n){var _=d(e,n);let i=o(t).removePanel(_);return c(i)},__wbg_removeProperty_a0d2ff8a76ffd2b1:function(){return l(function(t,e,n,_){var i=d(n,_);let b=o(e).removeProperty(i),g=m(b,r.__wbindgen_export,r.__wbindgen_export2),w=p;s().setInt32(t+4,w,!0),s().setInt32(t+0,g,!0)},arguments)},__wbg_remove_31c39325eee968fc:function(t){o(t).remove()},__wbg_remove_f9451697e0bc6ca0:function(){return l(function(t,e,n){var _=d(e,n);o(t).remove(_)},arguments)},__wbg_render_5dc8930acb0ebe29:function(){return l(function(t,e,n){let _=o(t).render(I.__wrap(e),u(n));return c(_)},arguments)},__wbg_replaceSync_54e9ce897fe6ab6a:function(){return l(function(t,e,n){var _=d(e,n);o(t).replaceSync(_)},arguments)},__wbg_requestAnimationFrame_43682f8e1c5e5348:function(){return l(function(t,e){return o(t).requestAnimationFrame(o(e))},arguments)},__wbg_resize_bf0dd2806933aa71:function(){return l(function(t){let e=o(t).resize();return c(e)},arguments)},__wbg_resolve_002c4b7d9d8f6b64:function(t){let e=Promise.resolve(o(t));return c(e)},__wbg_resolvedOptions_4c36dbfa1c4ba2bf:function(t){let e=o(t).resolvedOptions();return c(e)},__wbg_restorePhysics_7eeaa6f6122db051:function(t,e){o(t).restorePhysics(o(e))},__wbg_restoreSync_c7fdcd99c95b3b1c:function(t,e){o(t).restoreSync(o(e))},__wbg_restore_992a001be7186609:function(){return l(function(t,e,n){o(t).restore(o(e),o(n))},arguments)},__wbg_restyle_1fe2eb27d31218ad:function(t){o(t).restyle()},__wbg_resumeResize_4d9f7b006c1294a4:function(t){o(t).resumeResize()},__wbg_right_154af6c2b1bf0c89:function(t){return o(t).right},__wbg_run_fbfb3667d8440eaa:function(){return l(function(t,e){let n=o(t).run(o(e));return c(n)},arguments)},__wbg_save_6093cc98267143ad:function(t){let e=o(t).save();return c(e)},__wbg_scrollHeight_25e40881bfad55b6:function(t){return o(t).scrollHeight},__wbg_scrollLeft_2b817c7719d17438:function(t){return o(t).scrollLeft},__wbg_scrollTop_0a3a77f9fcbe038e:function(t){return o(t).scrollTop},__wbg_scrollTop_4161d2a08060cb06:function(t){return o(t).scrollTop},__wbg_select_de848e6023a15ec8:function(t,e,n){var _=d(e,n);let i=o(t).select(_);return c(i)},__wbg_select_f96715f412d93f23:function(t){o(t).select()},__wbg_selectedIndex_b1465d243fcb7142:function(t){return o(t).selectedIndex},__wbg_selectionEnd_f3cba543517b4aa8:function(){return l(function(t){let e=o(t).selectionEnd;return f(e)?4294967297:e>>>0},arguments)},__wbg_selectionStart_9cd0aeff14a21252:function(){return l(function(t){let e=o(t).selectionStart;return f(e)?4294967297:e>>>0},arguments)},__wbg_selectorText_4ebdf4f8074dafea:function(t,e){let n=o(e).selectorText,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_setAttribute_cc8e4c8a2a008508:function(){return l(function(t,e,n,_,i){var b=d(e,n),g=d(_,i);o(t).setAttribute(b,g)},arguments)},__wbg_setDragImage_76defbcc7ff30178:function(t,e,n,_){o(t).setDragImage(o(e),n,_)},__wbg_setPointerCapture_420db6f6826eb74b:function(){return l(function(t,e){o(t).setPointerCapture(e)},arguments)},__wbg_setProperty_cbb25c4e74285b39:function(){return l(function(t,e,n,_,i){var b=d(e,n),g=d(_,i);o(t).setProperty(b,g)},arguments)},__wbg_setSelectionRange_301eef1c51e01d2a:function(){return l(function(t,e,n){o(t).setSelectionRange(e>>>0,n>>>0)},arguments)},__wbg_setTimeout_21d8cc2869b34c58:function(t,e){return setTimeout(o(t),e)},__wbg_setTimeout_eff32631ea138533:function(){return l(function(t,e,n){return o(t).setTimeout(o(e),n)},arguments)},__wbg_set_1eb0999cf5d27fc8:function(t,e,n){let _=o(t).set(o(e),o(n));return c(_)},__wbg_set_3f1d0b984ed272ed:function(t,e,n){o(t)[u(e)]=u(n)},__wbg_set_6cb8631f80447a67:function(){return l(function(t,e,n){return Reflect.set(o(t),o(e),o(n))},arguments)},__wbg_set_body_9a7e00afe3cfe244:function(t,e){o(t).body=o(e)},__wbg_set_bubbles_739f291693b2bbec:function(t,e){o(t).bubbles=e!==0},__wbg_set_cache_key_ace1fa875f02b7cd:function(t,e){o(t).__yew_subtree_cache_key=e>>>0},__wbg_set_capture_d52e7a585f2933c8:function(t,e){o(t).capture=e!==0},__wbg_set_checked_4b2468680005fbf7:function(t,e){o(t).checked=e!==0},__wbg_set_className_c1d9e7362164af61:function(t,e,n){var _=d(e,n);o(t).className=_},__wbg_set_composed_e4a9826a628ca7f8:function(t,e){o(t).composed=e!==0},__wbg_set_cssText_18380c97092caefa:function(t,e,n){var _=d(e,n);o(t).cssText=_},__wbg_set_defaultValue_ad528b0a65ceef4a:function(){return l(function(t,e,n){var _=d(e,n);o(t).defaultValue=_},arguments)},__wbg_set_detail_fa3b358526be3a85:function(t,e){o(t).detail=o(e)},__wbg_set_dropEffect_042402609f0b7c6b:function(t,e,n){var _=d(e,n);o(t).dropEffect=_},__wbg_set_f43e577aea94465b:function(t,e,n){o(t)[e>>>0]=u(n)},__wbg_set_fb27b296001e2de9:function(){return l(function(t,e,n,_,i){var b=d(e,n),g=d(_,i);o(t)[b]=g},arguments)},__wbg_set_font_575685c8f7e56957:function(t,e,n){var _=d(e,n);o(t).font=_},__wbg_set_headers_cfc5f4b2c1f20549:function(t,e){o(t).headers=o(e)},__wbg_set_innerHTML_edd39677e3460291:function(t,e,n){var _=d(e,n);o(t).innerHTML=_},__wbg_set_innerText_2f1502f2d0780499:function(t,e,n){var _=d(e,n);o(t).innerText=_},__wbg_set_listener_id_8b77f7eb9adb712b:function(t,e){o(t).__yew_listener_id=e>>>0},__wbg_set_method_c3e20375f5ae7fac:function(t,e,n){var _=d(e,n);o(t).method=_},__wbg_set_mode_6a55f972d62a3c88:function(t,e){o(t).mode=Bt[e]},__wbg_set_nodeValue_d947eb0a476b80d7:function(t,e,n){var _=d(e,n);o(t).nodeValue=_},__wbg_set_onload_7f48f88f0514211d:function(t,e){o(t).onload=o(e)},__wbg_set_onmessage_0e1ffb1c0d91d2ad:function(t,e){o(t).onmessage=o(e)},__wbg_set_passive_f411e67e6f28687b:function(t,e){o(t).passive=e!==0},__wbg_set_scrollLeft_8de8fc187e3a6808:function(t,e){o(t).scrollLeft=e},__wbg_set_scrollTop_bebe746cd217a3d1:function(t,e){o(t).scrollTop=e},__wbg_set_scrollTop_fb454582dda63417:function(t,e){o(t).scrollTop=e},__wbg_set_selectionEnd_01e3269db03d5d2e:function(){return l(function(t,e){o(t).selectionEnd=e===4294967297?void 0:e},arguments)},__wbg_set_selectionStart_d68d6955c07c2be1:function(){return l(function(t,e){o(t).selectionStart=e===4294967297?void 0:e},arguments)},__wbg_set_signal_f2d3f8599248896d:function(t,e){o(t).signal=o(e)},__wbg_set_stream_8a7c5f563fa185b4:function(t,e){o(t).stream=e!==0},__wbg_set_subtree_id_8be88ea477740786:function(t,e){o(t).__yew_subtree_id=e>>>0},__wbg_set_type_148de20768639245:function(t,e,n){var _=d(e,n);o(t).type=_},__wbg_set_value_62a965e38b22b38c:function(t,e,n){var _=d(e,n);o(t).value=_},__wbg_set_value_c3556fce049236f0:function(t,e,n){var _=d(e,n);o(t).value=_},__wbg_set_value_ddc3bd01a8467bf1:function(t,e,n){var _=d(e,n);o(t).value=_},__wbg_shadowRoot_14828067c5922da7:function(t){let e=o(t).shadowRoot;return f(e)?0:c(e)},__wbg_sheet_38c9043b5f37d85d:function(t){let e=o(t).sheet;return f(e)?0:c(e)},__wbg_shiftKey_5558a3288542c985:function(t){return o(t).shiftKey},__wbg_shiftKey_564be91ec842bcc4:function(t){return o(t).shiftKey},__wbg_showPicker_ba1d36381dae3011:function(){return l(function(t){o(t).showPicker()},arguments)},__wbg_showPopover_7166cd0808998024:function(){return l(function(t){o(t).showPopover()},arguments)},__wbg_signal_d1285ecab4ebc5ad:function(t){let e=o(t).signal;return c(e)},__wbg_slot_7d421d6c9d6c8352:function(t,e){let n=o(e).slot,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_stack_0ed75d68575b0f3c:function(t,e){let n=o(e).stack,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_startTime_248495bfbcb427d3:function(t){return o(t).startTime},__wbg_static_accessor_GLOBAL_12837167ad935116:function(){let t=typeof self>"u"?null:self;return f(t)?0:c(t)},__wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f:function(){let t=typeof globalThis>"u"?null:globalThis;return f(t)?0:c(t)},__wbg_static_accessor_PSP_b8e6af6bc5765039:function(){return c(X)},__wbg_static_accessor_SELF_a621d3dfbb60d0ce:function(){let t=typeof self>"u"?null:self;return f(t)?0:c(t)},__wbg_static_accessor_WINDOW_f8727f0cf888e0bd:function(){let t=typeof window>"u"?null:window;return f(t)?0:c(t)},__wbg_statusText_556131a02d60f5cd:function(t,e){let n=o(e).statusText,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_status_89d7e803db911ee7:function(t){return o(t).status},__wbg_stopPropagation_6e5e2a085214ac63:function(t){o(t).stopPropagation()},__wbg_stringify_2fdc12d5545a89d9:function(){return l(function(t,e,n){let _=JSON.stringify(o(t),o(e),o(n));return c(_)},arguments)},__wbg_stringify_8d1cc6ff383e8bae:function(){return l(function(t){let e=JSON.stringify(o(t));return c(e)},arguments)},__wbg_styleSheet_66d04471448b344e:function(t){let e=o(t).styleSheet;return f(e)?0:c(e)},__wbg_styleSheets_54de627270238f6f:function(t){let e=o(t).styleSheets;return c(e)},__wbg_styleSheets_f6881090d63936f3:function(t){let e=o(t).styleSheets;return c(e)},__wbg_style_0b7c9bd318f8b807:function(t){let e=o(t).style;return c(e)},__wbg_style_fa56cf251a93275a:function(t){let e=o(t).style;return c(e)},__wbg_subtree_id_1739fcadc43deeca:function(t){let e=o(t).__yew_subtree_id;return f(e)?4294967297:e>>>0},__wbg_supportedValuesOf_e65486576a5dfffe:function(t){let e=Intl.supportedValuesOf(o(t));return c(e)},__wbg_table_new:function(t){let e=z.__wrap(t);return c(e)},__wbg_tagName_0cf6d7b647352f04:function(t,e){let n=o(e).tagName,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_target_521be630ab05b11e:function(t){let e=o(t).target;return f(e)?0:c(e)},__wbg_text_083b8727c990c8c0:function(){return l(function(t){let e=o(t).text();return c(e)},arguments)},__wbg_then_0d9fe2c7b1857d32:function(t,e,n){let _=o(t).then(o(e),o(n));return c(_)},__wbg_then_b9e7b3b5f1a9e1b5:function(t,e){let n=o(t).then(o(e));return c(n)},__wbg_timeStamp_ddfe1bf5c2346d68:function(t){return o(t).timeStamp},__wbg_toString_964ff7fe6eca8362:function(t){let e=o(t).toString();return c(e)},__wbg_toggleAttribute_d89e5c9e9053c9c4:function(){return l(function(t,e,n,_){var i=d(e,n);return o(t).toggleAttribute(i,_!==0)},arguments)},__wbg_toggle_52417ca95b874e83:function(){return l(function(t,e,n){var _=d(e,n);return o(t).toggle(_)},arguments)},__wbg_toggle_b8e3ebf1a7aaeb11:function(){return l(function(t,e,n,_){var i=d(e,n);return o(t).toggle(i,_!==0)},arguments)},__wbg_top_3d27ff6f468cf3fc:function(t){return o(t).top},__wbg_trace_9007714a6fbee374:function(t){console.trace(o(t))},__wbg_trace_bd16b570941b54fb:function(t,e,n,_){console.trace(o(t),o(e),o(n),o(_))},__wbg_type_4edffca24c42b74d:function(t,e){let n=o(e).type,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_unobserve_6b943d83215ce857:function(t,e){o(t).unobserve(o(e))},__wbg_unobserve_a18b5f61042cc982:function(t,e){o(t).unobserve(o(e))},__wbg_update_161f4eaafd1733f1:function(){return l(function(t,e,n,_,i){let b=o(t).update(I.__wrap(e),n===4294967297?void 0:n,_===4294967297?void 0:_,i!==0);return c(b)},arguments)},__wbg_valueAsNumber_5292e7ed56db5658:function(t){return o(t).valueAsNumber},__wbg_value_0546255b415e96c1:function(t){let e=o(t).value;return c(e)},__wbg_value_15684899da869c95:function(t,e){let n=o(e).value,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_value_d402dce7dcb16251:function(t,e){let n=o(e).value,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_value_e506a07878790ca0:function(t,e){let n=o(e).value,_=m(n,r.__wbindgen_export,r.__wbindgen_export2),i=p;s().setInt32(t+4,i,!0),s().setInt32(t+0,_,!0)},__wbg_values_5da93bc719d272cf:function(t){let e=Object.values(o(t));return c(e)},__wbg_view_new:function(t){let e=I.__wrap(t);return c(e)},__wbg_view_unwrap:function(t){return I.__unwrap(o(t))},__wbg_virtualdataslice_new:function(t){let e=M.__wrap(t);return c(e)},__wbg_warn_a40b971467b219c7:function(t,e,n,_){console.warn(o(t),o(e),o(n),o(_))},__wbg_warn_f7ae1b2e66ccb930:function(t){console.warn(o(t))},__wbg_which_78ecd90ab7c6bdd6:function(t){return o(t).which},__wbg_width_7444cca5dfea0645:function(t){return o(t).width},__wbg_width_9bbf873307a2ac4e:function(t){return o(t).width},__wbg_width_ae46cb8e98ee102f:function(t){return o(t).width},__wbindgen_cast_0000000000000001:function(t,e){let n=T(t,e,r.__wasm_bindgen_func_elem_5188,bt);return c(n)},__wbindgen_cast_0000000000000002:function(t,e){let n=S(t,e,r.__wasm_bindgen_func_elem_5188,R);return c(n)},__wbindgen_cast_0000000000000003:function(t,e){let n=S(t,e,r.__wasm_bindgen_func_elem_5188,R);return c(n)},__wbindgen_cast_0000000000000004:function(t,e){let n=S(t,e,r.__wasm_bindgen_func_elem_5188,R);return c(n)},__wbindgen_cast_0000000000000005:function(t,e){let n=S(t,e,r.__wasm_bindgen_func_elem_5188,R);return c(n)},__wbindgen_cast_0000000000000006:function(t,e){let n=T(t,e,r.__wasm_bindgen_func_elem_5188,bt);return c(n)},__wbindgen_cast_0000000000000007:function(t,e){let n=S(t,e,r.__wasm_bindgen_func_elem_5188,R);return c(n)},__wbindgen_cast_0000000000000008:function(t,e){let n=S(t,e,r.__wasm_bindgen_func_elem_5188,R);return c(n)},__wbindgen_cast_0000000000000009:function(t,e){let n=T(t,e,r.__wasm_bindgen_func_elem_5188,Lt);return c(n)},__wbindgen_cast_000000000000000a:function(t,e){let n=T(t,e,r.__wasm_bindgen_func_elem_21029,Nt);return c(n)},__wbindgen_cast_000000000000000b:function(t,e){let n=S(t,e,r.__wasm_bindgen_func_elem_21729,gt);return c(n)},__wbindgen_cast_000000000000000c:function(t,e){let n=S(t,e,r.__wasm_bindgen_func_elem_21729,gt);return c(n)},__wbindgen_cast_000000000000000d:function(t,e){let n=S(t,e,r.__wasm_bindgen_func_elem_21729,Mt);return c(n)},__wbindgen_cast_000000000000000e:function(t,e){let n=T(t,e,r.__wasm_bindgen_func_elem_22952,Dt);return c(n)},__wbindgen_cast_000000000000000f:function(t,e){let n=T(t,e,r.__wasm_bindgen_func_elem_22952,qt);return c(n)},__wbindgen_cast_0000000000000010:function(t,e){let n=S(t,e,r.__wasm_bindgen_func_elem_27789,Wt);return c(n)},__wbindgen_cast_0000000000000011:function(t){return c(t)},__wbindgen_cast_0000000000000012:function(t){return c(t)},__wbindgen_cast_0000000000000013:function(t,e){var n=d(t,e);return c(n)},__wbindgen_cast_0000000000000014:function(t,e){let n=Vt(t,e);return c(n)},__wbindgen_cast_0000000000000015:function(t,e){let n=$t(t,e);return c(n)},__wbindgen_cast_0000000000000016:function(t,e){let n=Gt(t,e);return c(n)},__wbindgen_cast_0000000000000017:function(t,e){let n=Jt(t,e);return c(n)},__wbindgen_cast_0000000000000018:function(t,e){let n=E(t,e);return c(n)},__wbindgen_cast_0000000000000019:function(t){let e=BigInt.asUintN(64,t);return c(e)},__wbindgen_cast_000000000000001a:function(t,e){var n=vt(t,e).slice();return r.__wbindgen_export4(t,e*4,4),c(n)},__wbindgen_cast_000000000000001b:function(t,e){var n=E(t,e).slice();return r.__wbindgen_export4(t,e*1,1),c(n)},__wbindgen_object_clone_ref:function(t){let e=o(t);return c(e)},__wbindgen_object_drop_ref:function(t){u(t)},__wbindgen_object_is_undefined:function(t){return o(t)===void 0}}}}function Mt(a,t){r.__wasm_bindgen_func_elem_21735(a,t)}function qt(a,t){r.__wasm_bindgen_func_elem_23751(a,t)}function Dt(a,t){let e=r.__wasm_bindgen_func_elem_23750(a,t);return u(e)}function bt(a,t,e){r.__wasm_bindgen_func_elem_8948(a,t,c(e))}function R(a,t,e){r.__wasm_bindgen_func_elem_8949(a,t,c(e))}function Lt(a,t){try{let i=r.__wbindgen_add_to_stack_pointer(-16);r.__wasm_bindgen_func_elem_8950(i,a,t);var e=s().getInt32(i+0,!0),n=s().getInt32(i+4,!0),_=s().getInt32(i+8,!0);if(_)throw u(n);return u(e)}finally{r.__wbindgen_add_to_stack_pointer(16)}}function Nt(a,t,e){try{r.__wasm_bindgen_func_elem_21146(a,t,ot(e))}finally{k[O++]=void 0}}function gt(a,t,e){r.__wasm_bindgen_func_elem_21736(a,t,c(e))}function Wt(a,t,e){r.__wasm_bindgen_func_elem_27806(a,t,c(e))}function Ht(a,t,e,n){r.__wasm_bindgen_func_elem_36136(a,t,c(e),c(n))}var Bt=["open","closed"],Q=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(a=>r.__wbg_client_free(a>>>0,1)),ft=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(a=>r.__wbg_genericsqlvirtualservermodel_free(a>>>0,1)),dt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(a=>r.__wbg_perspectivedebugpluginelement_free(a>>>0,1)),Z=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(a=>r.__wbg_perspectiveviewerelement_free(a>>>0,1)),tt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(a=>r.__wbg_proxysession_free(a>>>0,1)),wt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(a=>r.__wbg_table_free(a>>>0,1)),lt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(a=>r.__wbg_view_free(a>>>0,1)),et=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(a=>r.__wbg_virtualdataslice_free(a>>>0,1)),pt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(a=>r.__wbg_virtualserver_free(a>>>0,1));function c(a){U===k.length&&k.push(k.length+1);let t=U;return U=k[t],k[t]=a,t}function rt(a,t){if(!(a instanceof t))throw new Error(`expected instance of ${t.name}`)}function ot(a){if(O==1)throw new Error("out of js stack");return k[--O]=a,O}var K=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(a=>a.dtor(a.a,a.b));function _t(a){let t=typeof a;if(t=="number"||t=="boolean"||a==null)return`${a}`;if(t=="string")return`"${a}"`;if(t=="symbol"){let _=a.description;return _==null?"Symbol":`Symbol(${_})`}if(t=="function"){let _=a.name;return typeof _=="string"&&_.length>0?`Function(${_})`:"Function"}if(Array.isArray(a)){let _=a.length,i="[";_>0&&(i+=_t(a[0]));for(let b=1;b<_;b++)i+=", "+_t(a[b]);return i+="]",i}let e=/\\[object ([^\\]]+)\\]/.exec(toString.call(a)),n;if(e&&e.length>1)n=e[1];else return toString.call(a);if(n=="Object")try{return"Object("+JSON.stringify(a)+")"}catch{return"Object"}return a instanceof Error?`${a.name}: ${a.message}\n${a.stack}`:n}function Ut(a){a<132||(k[a]=U,U=a)}function Vt(a,t){return a=a>>>0,Xt().subarray(a/4,a/4+t)}function $t(a,t){return a=a>>>0,Yt().subarray(a/8,a/8+t)}function Gt(a,t){return a=a>>>0,Kt().subarray(a/4,a/4+t)}function vt(a,t){a=a>>>0;let e=s(),n=[];for(let _=a;_<a+4*t;_+=4)n.push(u(e.getUint32(_,!0)));return n}function Jt(a,t){return a=a>>>0,Zt().subarray(a/4,a/4+t)}function E(a,t){return a=a>>>0,P().subarray(a/1,a/1+t)}function d(a,t){return a===0?o(t):Qt(a,t)}var A=null;function s(){return(A===null||A.buffer.detached===!0||A.buffer.detached===void 0&&A.buffer!==r.memory.buffer)&&(A=new DataView(r.memory.buffer)),A}var L=null;function Xt(){return(L===null||L.byteLength===0)&&(L=new Float32Array(r.memory.buffer)),L}var N=null;function Yt(){return(N===null||N.byteLength===0)&&(N=new Float64Array(r.memory.buffer)),N}var W=null;function Kt(){return(W===null||W.byteLength===0)&&(W=new Int32Array(r.memory.buffer)),W}function Qt(a,t){return a=a>>>0,ne(a,t)}var H=null;function Zt(){return(H===null||H.byteLength===0)&&(H=new Uint32Array(r.memory.buffer)),H}var B=null;function P(){return(B===null||B.byteLength===0)&&(B=new Uint8Array(r.memory.buffer)),B}function o(a){return k[a]}function l(a,t){try{return a.apply(this,t)}catch(e){r.__wbindgen_export3(c(e))}}var k=new Array(128).fill(void 0);k.push(void 0,null,!0,!1);var U=k.length;function f(a){return a==null}function T(a,t,e,n){let _={a,b:t,cnt:1,dtor:e},i=(...b)=>{_.cnt++;try{return n(_.a,_.b,...b)}finally{i._wbg_cb_unref()}};return i._wbg_cb_unref=()=>{--_.cnt===0&&(_.dtor(_.a,_.b),_.a=0,K.unregister(_))},K.register(i,_,_),i}function S(a,t,e,n){let _={a,b:t,cnt:1,dtor:e},i=(...b)=>{_.cnt++;let g=_.a;_.a=0;try{return n(g,_.b,...b)}finally{_.a=g,i._wbg_cb_unref()}};return i._wbg_cb_unref=()=>{--_.cnt===0&&(_.dtor(_.a,_.b),_.a=0,K.unregister(_))},K.register(i,_,_),i}function te(a,t){let e=t(a.length*1,1)>>>0;return P().set(a,e/1),p=a.length,e}function yt(a,t){let e=t(a.length*4,4)>>>0,n=s();for(let _=0;_<a.length;_++)n.setUint32(e+4*_,c(a[_]),!0);return p=a.length,e}function m(a,t,e){if(e===void 0){let g=mt.encode(a),w=t(g.length,1)>>>0;return P().subarray(w,w+g.length).set(g),p=g.length,w}let n=a.length,_=t(n,1)>>>0,i=P(),b=0;for(;b<n;b++){let g=a.charCodeAt(b);if(g>127)break;i[_+b]=g}if(b!==n){b!==0&&(a=a.slice(b)),_=e(_,n,n=b+a.length*3,1)>>>0;let g=P().subarray(_+b,_+n),w=mt.encodeInto(a,g);b+=w.written,_=e(_,n,b,1)>>>0}return p=b,_}var O=128;function u(a){let t=o(a);return Ut(a),t}var Y=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Y.decode();var ee=2146435072,nt=0;function ne(a,t){return nt+=t,nt>=ee&&(Y=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Y.decode(),nt=t),Y.decode(P().subarray(a,a+t))}var mt=new TextEncoder,p=0,re,r;function xt(a,t){return r=a.exports,re=t,A=null,L=null,N=null,W=null,H=null,B=null,r}async function _e(a,t){if(typeof Response=="function"&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(a,t)}catch(_){if(a.ok&&e(a.type)&&a.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n",_);else throw _}let n=await a.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{let n=await WebAssembly.instantiate(a,t);return n instanceof WebAssembly.Instance?{instance:n,module:a}:n}function e(n){switch(n){case"basic":case"cors":case"default":return!0}return!1}}function oe(a){if(r!==void 0)return r;a!==void 0&&(Object.getPrototypeOf(a)===Object.prototype?{module:a}=a:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));let t=ht();a instanceof WebAssembly.Module||(a=new WebAssembly.Module(a));let e=new WebAssembly.Instance(a,t);return xt(e,a)}async function It(a){if(r!==void 0)return r;a!==void 0&&(Object.getPrototypeOf(a)===Object.prototype?{module_or_path:a}=a:console.warn("using deprecated parameters for the initialization function; pass a single object instead"));let t=ht();(typeof a=="string"||typeof Request=="function"&&a instanceof Request||typeof URL=="function"&&a instanceof URL)&&(a=fetch(a));let{instance:e,module:n}=await _e(await a,t);return xt(e,n)}export{F as Client,V as GenericSQLVirtualServerModel,$ as PerspectiveDebugPluginElement,G as PerspectiveViewerElement,j as ProxySession,z as Table,I as View,M as VirtualDataSlice,J as VirtualServer,It as default,Ft as getColumnConfigDefaults,Rt as getPluginConfigDefaults,Et as get_wasm_module,Tt as get_worker_url,Pt as init,oe as initSync,Ot as registerPlugin,jt as setColumnConfigDefaults,zt as setPluginConfigDefaults};\n';
var R3 = null;
async function it() {
  if (R3) return R3;
  let t = new Blob([_t2], {
    type: "application/javascript"
  });
  return R3 = URL.createObjectURL(t), R3;
}
async function P3(t, e2) {
  await ge(t, e2);
}
var j3;
me(async (t) => {
  let e2 = await it(), [n, r3] = await Promise.all([
    j3 === void 0 ? import(
      /* webpackIgnore: true */
      /* @vite-ignore */
      e2
    ) : j3,
    t instanceof WebAssembly.Module ? t : WebAssembly.compile(t)
  ]);
  return await n.default({ module_or_path: r3 }), await n.init(r3, e2), { glue: n, module: r3 };
});
function Ut(t) {
  return typeof t == "object" && !(t instanceof Promise) && !(t instanceof Response) && !(t instanceof ArrayBuffer) && !ArrayBuffer.isView(t);
}
async function H2(t, e2) {
  let n = Ut(t) ? t : { viewer: t }, { viewer: r3, migrate: _2 } = n;
  if (r3 === void 0 && _2 === void 0)
    throw new Error(
      "init_client requires a wasm source or a {viewer, migrate} registration"
    );
  e2 !== void 0 && (j3 = e2), await P3({ viewer: r3, migrate: _2 });
}
async function q3() {
  return await Se();
}
async function W3(t, e2, n) {
  return (await Se()).migrate(t, e2, n);
}
async function B3(t, e2, n) {
  (await Se()).validate(t, e2, n);
}
var oe2 = { create_validator: q3, init: P3, init_client: H2, migrate: W3, validate: B3 };

// ../../node_modules/.pnpm/regular-table@0.9.2/node_modules/regular-table/dist/esm/regular-table.js
var G3 = 0;
var k3 = 0;
var te3 = performance.now();
function ie3() {
  let w4 = performance.now(), e2 = w4 - te3, t = G3, i7 = k3 * 1e3 / e2, s3 = 1e3 / t, n = k3;
  return G3 = 0, k3 = 0, te3 = w4, { avg: t, real_fps: i7, virtual_fps: s3, num_frames: n, elapsed: e2 };
}
function se3(w4) {
  G3 = (G3 * k3 + w4) / (k3 + 1), k3 += 1;
}
var D3 = /* @__PURE__ */ new Map();
async function ne2(w4) {
  return await new Promise(requestAnimationFrame), await D3.get(w4)?.promise;
}
async function $4(w4, e2) {
  if (D3.has(w4) && (await D3.get(w4)?.promise, D3.has(w4))) {
    await D3.get(w4)?.promise;
    return;
  }
  D3.set(w4, Promise.withResolvers());
  try {
    return await e2();
  } finally {
    let t = D3.get(w4);
    D3.delete(w4), t?.resolve(void 0);
  }
}
var ue2 = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
var re2 = ue2 ? 5e6 : 1e7;
var oe3 = ":host{position:absolute;top:0px;left:0px;right:0px;bottom:0px;overflow:scroll;overflow-anchor:none;overscroll-behavior:none;-webkit-overflow-scrolling:touch;}div.rt-virtual-panel{position:absolute;top:0;left:0;right:0;pointer-events:none;}div.rt-scroll-table-clip{position:sticky;contain:strict;overflow-anchor:none;width:100%;height:100%;}slot{position:absolute;overflow:hidden;overflow-anchor:none;}";
var fe2 = "--regular-table--clip-x";
var _e2 = "--regular-table--clip-y";
var be2 = "--regular-table--transform-x";
var pe3 = "--regular-table--transform-y";
var we2 = '<div class="rt-virtual-panel"></div><div class="rt-scroll-table-clip"><slot></slot></div>';
var ge3 = 1;
var q4 = class extends HTMLElement {
  a;
  i;
  r;
  X;
  G;
  f;
  _;
  b;
  q;
  s;
  e;
  t;
  it;
  st;
  table_model;
  n;
  C;
  U;
  h;
  o;
  async draw(e2 = {}) {
    return typeof e2.throttle < "u" && !e2.throttle ? await ae3.call(this, e2) : await $4(this, () => ae3.call(this, e2));
  }
  async flush() {
    do
      await ne2(this);
    while (this.C);
  }
  async predraw(e2, t, i7 = {}) {
    let { invalid_viewport: s3 = true, preserve_width: n = false, cache: r3 = false, scroll_left: o = this.scrollLeft, scroll_top: l3 = this.scrollTop, container_height: u4 = t, throttle: d3 } = i7, h3 = () => Object.assign(() => true, { inline: true }), a2 = async () => (await this.draw({ invalid_viewport: s3, preserve_width: n, cache: r3, throttle: d3 }), h3());
    if (!this.t) return console.warn("data listener not configured"), h3();
    let { num_columns: _2, num_rows: p6 } = await this.Y(r3);
    if (!this.e.row_height) return await a2();
    let c2 = p6 || 0, g3 = _2 || 0, f3 = this.j(() => e2, () => t, () => u4);
    this.r = f3;
    let m4 = Math.round(this.A(c2)), v3 = Number.isFinite(f3.containerHeight) ? Math.min(l3, Math.max(0, m4 - f3.containerHeight)) : l3, b4, M4, R5 = false, z6 = false;
    for (let T5 = 0; T5 < 2; T5++) {
      let V4 = this.t.row_headers_length, H4 = this.K(c2, g3, v3, o), A4 = this.Ce(H4, g3);
      if (A4 === void 0) return await a2();
      if (H4.end_col = Math.min(g3, A4 + ge3), T5 === 0) {
        let { invalid_row: E5, invalid_column: x5 } = this.Z(H4);
        z6 = !!(this.b || x5), R5 = z6 || E5 || s3;
      } else if (Math.floor(H4.start_col) === Math.floor(b4.start_col) && Math.ceil(H4.end_col) <= Math.ceil(b4.end_col)) {
        H4.end_col = b4.end_col, b4 = H4;
        break;
      }
      if (b4 = H4, !R5) break;
      M4 = await this.t.view(Math.floor(b4.start_col), Math.floor(b4.start_row), Math.ceil(b4.end_col), Math.ceil(b4.end_row));
      let C5 = M4.num_row_headers ?? M4.row_headers?.[0]?.length ?? 0;
      if (C5 === V4) break;
      this.t.row_headers_length = C5;
    }
    let y5 = this.t;
    return Object.assign(() => {
      if (this.r = f3, this.J(b4), this.Q(s3, c2, g3, n), !R5 || M4 === void 0) return this.p(b4), true;
      let T5 = true, V4 = () => {
        T5 && (this.p(b4), T5 = false);
        for (let A4 of this.n) A4({ detail: this });
      }, H4 = this.table_model.draw_sync(f3, y5, this.q, n, b4, g3, M4, V4);
      return this.ee(b4, c2, g3, n, z6), y5 === this.t && (this.b = false), H4 || this.draw({ invalid_viewport: true }), H4;
    }, { inline: false });
  }
  async Y(e2) {
    e2 || this.table_model.Te();
    let t = await this.table_model.Ee(this.t);
    return this.U = t.num_columns || 0, this.e.row_height = t.row_height || this.e.row_height, t.num_row_headers !== void 0 && (this.t.row_headers_length = t.num_row_headers), t.num_column_headers !== void 0 && (this.t.column_headers_length = t.num_column_headers), t;
  }
  j(e2, t, i7) {
    let s3 = this.i === "none" || this.i === "horizontal";
    return { width: this.i === "none" || this.i === "vertical" ? 1 / 0 : e2(), height: s3 ? 1 / 0 : t(), containerHeight: s3 ? 1 / 0 : i7() };
  }
  Q(e2, t, i7, s3) {
    this.te(t), s3 || this.ie(e2, i7);
  }
  ee(e2, t, i7, s3, n) {
    this.p(e2);
    let r3 = this.e.row_height;
    this.table_model.header.reset_header_cache(), r3 !== this.e.row_height && this.te(t), s3 || this.ie(n, i7);
  }
  Ce(e2, t) {
    if (this.i === "none" || this.i === "vertical") return e2.end_col;
    let { indices: i7, override: s3 } = this.e, n = (h3) => s3[h3] ?? i7[h3], r3 = this.t.row_headers_length, o = 0;
    for (let h3 = 0; h3 < r3; h3++) {
      let a2 = n(h3);
      if (a2 === void 0) return;
      o += a2;
    }
    let l3 = Math.floor(e2.start_col), u4 = i7[r3 + l3] ?? 0, d3 = l3;
    for (; d3 < t && o - u4 <= this.r.width; ) {
      let h3 = n(r3 + d3);
      if (h3 === void 0) return;
      o += h3, d3++;
    }
    return d3;
  }
  Se() {
    if (this.f === void 0 || this._ === void 0 || !this.t || this.i === "none" || this.i === "vertical" || this._ >= (this.U ?? 0)) return;
    let { indices: e2, override: t } = this.e, i7 = this.t.row_headers_length, s3 = 0;
    for (let r3 = 0; r3 < i7; r3++) s3 += e2[r3] || 0;
    for (let r3 = this.f; r3 < this._; r3++) {
      let o = i7 + r3, l3 = t[o] ?? e2[o];
      if (l3 === void 0) return;
      s3 += l3;
    }
    let n = e2[i7 + this.f];
    s3 - (n ?? 0) <= this.r.width && this.draw({ invalid_viewport: true });
  }
  Le() {
    if (!this.o) {
      this.o = [document.createElement("table"), document.createElement("td")], this.o[0].style.visibility = "hidden", this.o[0].style.position = "absolute";
      let e2 = document.createElement("tbody"), t = document.createElement("tr");
      this.o[1].textContent = "X", t.appendChild(this.o[1]), e2.appendChild(t), this.o[0].appendChild(e2);
    }
    this.appendChild(this.o[0]), this.e.row_height = this.o[1].offsetHeight, this.o[0].remove();
  }
  xe() {
    if (this.attachShadow({ mode: "open" }), !this.shadowRoot) return;
    let e2 = new CSSStyleSheet();
    e2.replaceSync(oe3), this.shadowRoot.adoptedStyleSheets = [e2], this.shadowRoot.innerHTML = we2;
    let [t, i7] = this.shadowRoot.children;
    this.s = i7, this.a = t, this.se();
  }
  se() {
    this.s && (this.i === "both" || this.i === "vertical" ? this.s.style.top = "0px" : this.s.style.removeProperty("top"), this.i === "both" || this.i === "horizontal" ? this.s.style.left = "0px" : this.s.style.removeProperty("left"), this.i !== "both" ? this.s.style.contain = "none" : this.s.style.removeProperty("contain"));
  }
  K(e2, t, i7, s3) {
    let { start_row: n, end_row: r3 } = this.He(e2, i7), { start_col: o, end_col: l3 } = this.P(t, s3);
    return { start_col: o, end_col: l3, start_row: n, end_row: r3 };
  }
  Z({ start_col: e2, end_col: t, start_row: i7, end_row: s3 }) {
    i7 = Math.floor(i7), s3 = Math.ceil(s3), e2 = Math.floor(e2), t = Math.ceil(t);
    let n = this.f !== e2, r3 = this.X !== i7 || this.G !== s3 || this._ !== t;
    return { invalid_column: n, invalid_row: r3 };
  }
  J({ start_col: e2, end_col: t, start_row: i7, end_row: s3 }) {
    this.f = Math.floor(e2), this._ = Math.ceil(t), this.X = Math.floor(i7), this.G = Math.ceil(s3);
  }
  ie(e2, t) {
    if (e2) if (this.i === "vertical" || this.i === "none") {
      let i7 = 0;
      for (let s3 of this.e.indices) i7 += s3 || 0;
      this.a.style.width = i7.toPrecision(10) + "px";
    } else {
      let i7 = this.Re(t);
      if (i7 !== 0) {
        let s3 = this.r.width + i7 + 2;
        this.a.style.width = s3.toPrecision(10) + "px";
      } else this.a.style.width = "1px";
    }
  }
  te(e2) {
    let t = this.A(e2);
    this.a.style.height = `${t.toPrecision(10)}px`;
  }
  A(e2) {
    let { row_height: t = 0 } = this.e, i7 = this.t.column_headers_length * t;
    return Math.min(re2, e2 * t + i7);
  }
  ne(e2, t) {
    let i7 = this.table_model.table.style;
    i7.setProperty(fe2, `${e2}px`), i7.setProperty(_e2, `${t}px`), i7.setProperty(be2, `${-e2}px`), i7.setProperty(pe3, `${-t}px`);
  }
  p(e2) {
    let t = (this.e.row_height || 0) * (e2.start_row % 1) || 0, i7 = (this.table_model.c || 0) + Math.floor(e2.start_col), s3 = (this.e.indices[i7] ?? this.table_model.Ae()) * (e2.start_col % 1) || 0;
    this.ne(s3, t);
  }
  P(e2, t) {
    if (this.i === "none" || this.i === "vertical") return { start_col: 0, end_col: 1 / 0 };
    {
      let i7 = this.Pe(t), s3 = this.table_model.num_columns() || Math.min(e2, Math.ceil(this.r.width / 60)), n = i7 + s3 + 1;
      return { start_col: i7, end_col: n };
    }
  }
  He(e2, t) {
    let { height: i7, containerHeight: s3 } = this.r, n = this.e.row_height || 0, r3 = this.t.column_headers_length, o = Math.round(this.A(e2)), l3 = Math.max(1, o - s3), u4 = Math.max(Math.ceil(t), 0) / l3, d3 = i7 / n - r3, _2 = Math.max(0, (e2 || 0) - d3) * u4, p6 = Math.max(0, Math.min(_2 + d3, e2));
    return { start_row: _2, end_row: p6 };
  }
  Pe(e2) {
    let t = this.t.row_headers_length, i7 = 0, s3 = 0, n = 0;
    for (; s3 < e2; ) {
      let r3 = this.e.indices[i7 + t];
      n = e2 - s3, i7 += 1, s3 += r3 !== void 0 ? r3 : 60;
    }
    return i7 += n / (this.e.indices[i7 + t - 1] || 60), Math.max(0, i7 - 1);
  }
  Ve(e2) {
    let t = 0;
    if (this.t.row_headers_length > 0) for (let n of this.e.indices.slice(0, this.t.row_headers_length)) t += n || 0;
    let i7 = this.t.row_headers_length, s3 = e2;
    for (; t < this.r.width && s3 >= 0; ) s3--, t += this.e.indices[s3 + i7] || 60;
    return Math.min(e2 - 1, s3 + 1);
  }
  Re(e2) {
    let t = this.t.row_headers_length, i7 = this.Ve(e2), s3 = t, n = 0;
    for (; s3 < i7 + t; ) n += this.e.indices[s3] || 60, s3++;
    if (s3 < this.e.indices.length) {
      let r3 = 0, o = this.t.row_headers_length;
      for (let l3 = 0; l3 < o && l3 < this.e.indices.length; l3++) r3 += this.e.indices[l3] || 0;
      n += Math.max(0, (this.e.indices[s3] || 0) - (this.r.width - (r3 || 0)) || 0);
    }
    return n;
  }
};
async function ae3(w4) {
  let e2 = performance.now(), { invalid_viewport: t = true, preserve_width: i7 = false } = w4, { num_columns: s3, num_rows: n } = await this.Y(w4.cache);
  this.e.row_height || this.Le();
  let r3 = n || 0, o = s3 || 0;
  this.r = this.j(() => this.s.clientWidth, () => this.s.clientHeight, () => this.clientHeight), this.Q(t, r3, o, i7);
  let l3 = this.K(r3, o, this.scrollTop, this.scrollLeft), { invalid_row: u4, invalid_column: d3 } = this.Z(l3);
  this.J(l3);
  let h3 = this.b || d3;
  if (h3 || u4 || t) {
    let a2 = true;
    await this.table_model.draw(this.r, this.t, this.q, i7, l3, o, async () => {
      a2 && (this.p(l3), a2 = false);
      for (let _2 of this.n) await _2({ detail: this });
    }), this.ee(l3, r3, o, i7, h3), this.b = false;
  } else this.p(l3);
  se3(performance.now() - e2);
}
var P4 = /* @__PURE__ */ new WeakMap();
var B4 = /* @__PURE__ */ new WeakMap();
var F4 = class {
  e;
  De;
  table;
  cells;
  rows;
  constructor(e2, t, i7) {
    this.e = e2, this.De = t, this.table = i7, this.cells = [], this.rows = [];
  }
  num_columns() {
    return this.T(Math.max(0, this.rows.length - 1)).row_container.length;
  }
  num_rows() {
    return this.cells.length;
  }
  nt(e2, t) {
    P4.set(e2, t);
  }
  V(e2, t) {
    let i7 = B4.get(e2);
    i7 !== t && (i7 !== void 0 && e2.classList.remove(`rt-col-${i7}`), e2.classList.add(`rt-col-${t}`), B4.set(e2, t));
  }
  w(e2) {
    let t = B4.get(e2);
    t !== void 0 && (e2.classList.remove(`rt-col-${t}`), B4.delete(e2));
  }
  g(e2) {
    if (!e2) return { value: void 0 };
    let t = P4.get(e2);
    return t || (t = { value: void 0 }, P4.set(e2, t)), t;
  }
  re(e2, t) {
    let { tr: i7, row_container: s3 } = this.T(e2), n = s3[t];
    return n && (i7.removeChild(n), s3.splice(t, 1, void 0)), n;
  }
  M(e2, t) {
    if (!(e2 < 0 || t < 0)) return this.cells[e2]?.[t];
  }
  T(e2) {
    let t = this.rows[e2];
    t || (t = this.rows[e2] = document.createElement("tr"), this.table.appendChild(t));
    let i7 = this.cells[e2];
    return i7 || (i7 = this.cells[e2] = []), { tr: t, row_container: i7 };
  }
  D(e2 = "TD", t, i7) {
    let { tr: s3, row_container: n } = this.T(t), r3 = n[i7];
    if (!r3) if (i7 < n.length) {
      r3 = n[i7] = document.createElement(e2);
      let o = n.slice(i7 + 1).find((l3) => l3);
      s3.insertBefore(r3, o || null);
    } else r3 = n[i7] = document.createElement(e2), s3.appendChild(r3);
    if (r3.tagName !== e2) {
      let o = document.createElement(e2);
      s3.replaceChild(o, r3), this.cells[t].splice(i7, 1, o), r3 = o;
    }
    return r3;
  }
  oe(e2) {
    for (let t = 0; t < this.rows.length; t++) {
      let i7 = this.rows[t], s3 = this.cells[t];
      s3.length = (Array.isArray(e2) ? e2[t] : e2) || 0;
      let n = this.cells[t].filter((o) => o !== void 0).length, r3 = [];
      for (let o = n; o < i7.children.length; o++) r3.push(i7.children[o]);
      for (let o of r3) o.remove();
    }
  }
  E(e2) {
    e2 = Math.min(e2, this.rows.length);
    let t = [];
    for (let i7 = e2; i7 < this.table.children.length; i7++) t.push(this.table.children[i7]);
    for (let i7 of t) i7.remove();
    this.rows.length = e2, this.cells.length = e2;
  }
};
var Me2 = false;
var U3 = class extends q4 {
  le;
  ae;
  he;
  de;
  S;
  z;
  ce;
  ue;
  register_listeners() {
    this.addEventListener("mousedown", this.ze.bind(this)), this.addEventListener("scroll", this.O.bind(this), { passive: true }), this.Oe();
  }
  async O(e2) {
    if (e2.stopPropagation(), this.ce = this.scrollLeft, this.ue = this.scrollTop, this.C) {
      this.z = true;
      return;
    }
    this.C = true;
    let t = this.s.clientWidth, i7 = this.s.clientHeight, s3 = this.clientHeight;
    try {
      await $4(this, async () => {
        do {
          this.z = false;
          let n = await this.predraw(t, i7, { invalid_viewport: false, cache: true, throttle: false, container_height: s3, scroll_left: this.ce, scroll_top: this.ue });
          n.inline || (await new Promise(requestAnimationFrame), n());
        } while (this.z);
      });
    } finally {
      this.C = false;
    }
    this.dispatchEvent(new CustomEvent("regular-table-scroll"));
  }
  Oe() {
    this.addEventListener("mousewheel", this.We.bind(this), { passive: true }), Me2 && (this.addEventListener("touchmove", this.ke.bind(this)), this.addEventListener("touchstart", this.Be.bind(this), { passive: true }));
  }
  We(e2) {
    if (!window.hasOwnProperty("safari")) return;
    let t = e2, { clientWidth: i7, clientHeight: s3, scrollTop: n, scrollLeft: r3 } = this;
    t.preventDefault(), t.returnValue = false;
    let o = Math.max(1, this.a.offsetHeight - s3), l3 = Math.max(1, this.a.offsetWidth - i7);
    this.scrollTop = Math.max(0, Math.min(o, n + t.deltaY)), this.scrollLeft = Math.max(0, Math.min(l3, r3 + t.deltaX)), this.O(t);
  }
  ke(e2) {
    e2.stopPropagation(), e2.preventDefault(), e2.returnValue = false;
    let { clientWidth: t, clientHeight: i7 } = this, s3 = Math.max(1, this.a.offsetHeight - i7), n = Math.max(1, this.a.offsetWidth - t);
    this.scrollTop = Math.min(s3, (this.le || 0) + ((this.he || 0) - e2.touches[0].pageY)), this.scrollLeft = Math.min(n, (this.ae || 0) + ((this.de || 0) - e2.touches[0].pageX)), this.O(e2);
  }
  Be(e2) {
    this.he = e2.touches[0].pageY, this.de = e2.touches[0].pageX, this.le = this.scrollTop, this.ae = this.scrollLeft;
  }
  async Fe(e2) {
    let t = e2.target, i7 = t.classList.contains("rt-column-resize");
    for (; t.tagName !== "TD" && t.tagName !== "TH"; ) if (t = t.parentElement, !this.contains(t)) return;
    let s3 = P4.get(t);
    if (i7 && s3) {
      e2.stopImmediatePropagation(), e2.shiftKey ? (this.e.override = {}, this.e.auto = [], this.e.indices = []) : (delete this.e.override[s3.size_key], this.e.auto[s3.size_key] = void 0, this.e.indices[s3.size_key] = void 0), this.table_model.updateColumnWidthStyles({ start_row: 0, end_row: 0, ...this.P(0, this.scrollLeft) }, this.t.row_headers_length);
      for (let n of e2.shiftKey ? [this.table_model.header.cells[this.table_model.header.cells.length - 1], ...this.table_model.body.cells] : this.table_model.body.cells) for (let r3 of e2.shiftKey ? n : [n[s3.virtual_x]]) r3 && (r3.classList.remove("rt-cell-clip"), this.h || this.table_model.body.w(r3));
      await this.draw({ cache: true });
    }
  }
  async $e(e2) {
    if (e2.button !== 0) return;
    let t = e2.target, i7 = t.classList.contains("rt-column-resize");
    for (; t.tagName !== "TD" && t.tagName !== "TH"; ) if (t = t.parentElement, !this.contains(t)) return;
    let s3 = P4.get(t);
    i7 && s3 && (this.Ne(e2, t, s3), e2.stopImmediatePropagation());
  }
  async ze(e2) {
    let t = performance.now();
    this.S && t - this.S < 500 ? (this.S = t, await this.Fe(e2)) : (this.S = t, await this.$e(e2));
  }
  Ne(e2, t, i7) {
    let { virtual_x: s3, size_key: n } = i7, r3 = e2.pageX, o = (s3 || 0) + t.colSpan - 1, l3 = this.table_model.header.get_column_header(o), u4 = this.e.indices[n || 0] || 0, d3 = (a2) => $4(this, async () => await this.Ie(a2, l3, r3, u4, n || 0, o)), h3 = () => {
      document.removeEventListener("mousemove", d3), document.removeEventListener("mouseup", h3);
      let a2 = this.e.override[n || 0], _2 = this.e.indices[n || 0] !== a2;
      this.e.indices[n || 0] = a2, _2 && this.draw({ cache: true });
    };
    document.addEventListener("mousemove", d3), document.addEventListener("mouseup", h3);
  }
  async Ie(e2, t, i7, s3, n, r3) {
    await new Promise(requestAnimationFrame);
    let o = e2.pageX - i7, l3 = Math.max(1, s3 + o);
    if (this.e.override[n] = l3, o < 0) await this.draw({ preserve_width: true, throttle: false, cache: true });
    else {
      this.table_model.updateColumnWidthStyles({ start_row: 0, end_row: 0, ...this.P(0, this.scrollLeft) }, this.t.row_headers_length);
      let d3 = (this.e.auto[n] || 0) > l3;
      t.classList.toggle("rt-cell-clip", d3);
      for (let h3 of this.table_model.body.cells) {
        let a2 = h3[r3];
        a2 && (a2.classList.toggle("rt-cell-clip", d3), this.h || (d3 ? this.table_model.body.V(a2, n) : this.table_model.body.w(a2)));
      }
    }
  }
};
var he2 = /* @__PURE__ */ new WeakMap();
var Y4 = class extends F4 {
  l;
  d;
  L;
  constructor(e2, t, i7, s3) {
    super(e2, t, i7), this.l = [], this.d = [], this.L = s3;
  }
  me(e2, t, i7) {
    let s3 = this.D("TH", t, e2[t] || 0);
    e2[t] += 1;
    let n = he2.get(s3);
    if (n !== void 0 && n.value === i7 && s3.lastChild === n.resize && s3.firstChild === (i7 instanceof HTMLElement ? i7 : n.span)) return s3;
    if (s3.removeAttribute("colspan"), s3.textContent = "", n === void 0) {
      let r3 = document.createElement("span");
      r3.className = "rt-column-resize", n = { value: void 0, span: document.createElement("span"), resize: r3 }, he2.set(s3, n);
    }
    return i7 instanceof HTMLElement ? s3.appendChild(i7) : (n.span.textContent = String(i7 ?? ""), s3.appendChild(n.span)), s3.appendChild(n.resize), n.value = i7, s3;
  }
  Xe(e2, t, i7) {
    let s3 = this.g(i7);
    return this.w(i7), s3.column_header = e2, s3.value = t, s3;
  }
  Ge(e2, t, i7, s3) {
    let n = this.g(i7);
    if (n.column_header = e2, n.value = t, n.size_key = Array.isArray(s3) ? s3[0] : s3, !Array.isArray(s3) || s3.length <= 1) {
      this.V(i7, n.size_key || 0), this.L?.(i7);
      let r3 = this.e.override[n.size_key || 0], o = this.e.auto[n.size_key || 0] || 0;
      i7.classList.toggle("rt-cell-clip", !!r3 && o > r3);
    } else this.w(i7);
    return n;
  }
  get_column_header(e2) {
    return this.D("TH", this.num_rows() - 1, e2);
  }
  draw(e2, t, i7, s3, n, r3, o, l3, u4) {
    let d3 = t?.length;
    if (d3 === 0) return;
    let h3, a2, _2, p6;
    l3 = typeof l3 > "u" ? d3 - 1 : l3;
    for (let c2 = 0; c2 < d3; c2++) {
      if (_2 = t[c2] ? t[c2] : "", this.d[c2] = this.d[c2] || 0, c2 < l3) u4 && this.l?.[c2]?.[0]?.value === _2 ? (h3 = this.l[c2][1], this.l[c2][2] += 1, i7 === 1 && (this.l[c2][0].row_header_x = Array.isArray(n) ? n[0] : n)) : (this.fe(c2), h3 = this.me(this.d, c2, _2), a2 = this.Xe(t, _2, h3), this.l[c2] = [a2, h3, 1]);
      else {
        h3 = this.me(this.d, c2, _2), a2 = this.Ge(e2.length > 0 ? e2 : t, _2, h3, n), typeof p6 > "u" && (p6 = { th: h3, metadata: a2 });
        for (let [g3] of this.l) g3.size_key = a2.size_key;
        h3.removeAttribute("colspan");
      }
      this.T(c2).tr.classList.toggle("rt-autosize", c2 === l3), h3.classList.toggle("rt-group-corner", s3 === void 0), a2 && (a2.x = typeof s3 > "u" ? s3 : Math.floor(s3), a2.column_header_y = c2, a2.x0 = Math.floor(r3), a2.virtual_x = o, i7 === 1 ? (a2.type = "corner", a2.row_header_x = Array.isArray(n) ? n[0] : n) : (a2.type = "column_header", delete a2.row_header_x));
    }
    return this.E(this.d.length), p6 = p6 || { th: h3, metadata: a2 }, p6;
  }
  fe(e2) {
    let t = this.l[e2];
    if (!t) return;
    let [, i7, s3] = t;
    if (s3 > 1) {
      let n = String(s3);
      i7.getAttribute("colspan") !== n && i7.setAttribute("colspan", n);
    } else i7.hasAttribute("colspan") && i7.removeAttribute("colspan");
  }
  flush_colspans() {
    for (let e2 = 0; e2 < this.l.length; e2++) this.fe(e2);
  }
  clean() {
    this.flush_colspans(), this.oe(this.d);
  }
  reset_header_cache() {
    this.d = [], this.l = [];
  }
};
var j4 = class extends F4 {
  h;
  _e(e2, t, i7, s3, { column_name: n }, { ridx_offset: r3 }, o) {
    let l3 = this.D(e2, t, s3), u4 = this.g(l3);
    u4.y = t + Math.floor(r3);
    let d3 = u4.size_key = o || 0;
    e2 === "TD" && (u4.column_header = n);
    let h3 = this.e.override[d3], a2 = !!h3 && (this.e.auto[d3] || 0) > h3;
    return l3.classList.toggle("rt-cell-clip", a2), this.h || a2 ? this.V(l3, d3) : this.w(l3), u4.value !== i7 && (i7 instanceof HTMLElement ? (l3.textContent = "", l3.appendChild(i7)) : l3.textContent = String(i7 ?? "")), u4.value = i7, { td: l3, metadata: u4 };
  }
  draw(e2, t, i7, s3 = false, n, r3, o, l3) {
    let { cidx: u4, column_data: d3, row_headers: h3, column_data_listener_metadata: a2 } = t, { row_height: _2 } = i7, p6, c2 = [], g3 = [], f3 = 0, m4 = [], v3 = s3 ? i7.row_headers_length ?? 1 : 1, b4 = (i7.ridx_offset ?? 0) % 1 !== 0 ? 1 : 0, M4 = false, R5 = Math.floor(i7.ridx_offset), z6 = Math.ceil(i7.y1), y5 = Math.ceil(i7.x1), T5 = n === void 0 ? n : Math.floor(n), V4 = r3 === void 0 ? void 0 : Math.floor(r3), H4 = Math.floor((n ?? 0) - (r3 ?? 0));
    for (let C5 = 0; C5 < v3; C5++) {
      f3 = 0, M4 = false;
      let E5 = u4 + C5;
      for (let x5 of d3) {
        let S5;
        if (s3) {
          let L5 = x5, N5 = L5[C5], Q5 = c2[C5] || 1, I5 = this.M(f3 - Q5, E5), de4 = this.g(I5), ee5 = m4[f3] || 1, X5 = this.M(f3, E5 - ee5), ce4 = this.g(X5);
          if (l3 && X5 && (ce4.value === N5 || N5 === void 0) && !X5.hasAttribute("rowspan")) {
            let O5 = m4[f3] = ee5 + 1;
            X5.setAttribute("colspan", String(O5)), this.re(f3, E5);
          } else if (l3 && I5 && de4.value === N5 && !I5.hasAttribute("colspan")) {
            let O5 = c2[C5] = Q5 + 1;
            I5.setAttribute("rowspan", String(O5)), this.re(f3, E5);
          } else {
            S5 = this._e("TH", f3, N5, E5, t, i7, C5);
            let O5 = S5.td, W6 = S5.metadata;
            O5.style.display = "", O5.removeAttribute("rowspan"), O5.removeAttribute("colspan"), W6.type = "row_header", W6.row_header = L5, W6.row_header_x = C5, W6.y0 = R5, W6.y1 = z6, W6.virtual_x = C5, V4 !== void 0 && (W6.x0 = V4), c2[C5] = 1, m4[f3] = 1, g3[C5] = S5;
          }
        } else {
          S5 = this._e("TD", f3, x5, u4, t, i7, o ?? 0);
          let L5 = S5.metadata;
          a2 && (L5.user = a2[f3]), L5.type = "body", L5.x = T5 || 0, L5.x1 = y5, L5.row_header = h3?.[f3] || [], L5.y0 = R5, L5.y1 = z6, L5.dx = H4, L5.dy = (L5.y ?? 0) - R5, L5.virtual_x = u4, V4 !== void 0 && (L5.x0 = V4), g3[0] = S5;
        }
        if (f3++, p6 = S5 ? S5.metadata : p6, _2 = _2 || S5?.td.offsetHeight, (f3 - b4) * (_2 ?? 0) > e2) {
          M4 = true;
          break;
        }
      }
    }
    let A4 = M4 ? f3 : f3 + b4;
    if (A4 > f3) {
      let C5 = this.rows[f3], E5 = this.rows[f3 - 1];
      (!!l3 && (i7.row_headers_length ?? 0) > 0 || !C5 || !E5 || C5.children.length !== E5.children.length || C5.querySelector("[colspan],[rowspan]") !== null || E5.querySelector("[colspan],[rowspan]") !== null) && (A4 = f3);
    }
    return this.E(A4), { tds: g3, ridx: A4, drawn_ridx: f3, row_height: _2 };
  }
  clean({ ridx: e2, cidx: t, drawn_ridx: i7 = e2 }) {
    if (this.E(e2), this.oe(t), i7 < this.rows.length) {
      let s3 = this.rows[i7], n = this.rows[i7 - 1], r3 = (h3) => h3?.children[h3.children.length - 1], o = r3(s3), l3 = r3(n), u4 = o && P4.get(o), d3 = l3 && P4.get(l3);
      (!u4 || !d3 || u4.x !== d3.x || s3.children.length !== n.children.length) && this.E(i7);
    }
  }
};
var Z4 = class {
  e;
  c = 0;
  header;
  body;
  qe(e2, t) {
    let { start_row: i7 = 0, start_col: s3 = 0, end_col: n = 0, end_row: r3 = 0 } = e2, o = this.e.indices[(this.c || 0) + Math.floor(e2.start_col)] ?? 0;
    return { viewport_width: 0, selected_id: t, ridx_offset: i7, sub_cell_offset: o, x0: s3, x1: n, y1: r3, row_height: this.e.row_height, row_headers_length: this.c };
  }
  Ae() {
    let e2 = 0, t = 0;
    for (let i7 of this.e.indices) i7 && (e2 += i7, t++);
    return t ? e2 / t : 60;
  }
  Ue(e2, t, i7, s3, n, r3, o, l3, u4, d3) {
    let h3 = [`${t}`], a2 = [], _2 = { column_name: h3, cidx: 0, column_data: e2, row_headers: e2, first_col: true }, p6 = Math.floor(o), c2 = this.body.draw(s3, _2, { ...n, x0: 0 }, true, void 0, void 0, p6, d3), g3 = [];
    for (let m4 = 0; m4 < t; m4++) {
      let v3 = this.header.draw(h3, Array(i7).fill(""), 1, void 0, m4, o, m4, l3, u4);
      v3 && g3.push(v3);
    }
    for (let m4 = 0; m4 < g3.length; m4++) {
      let { th: v3 } = g3[m4];
      n.viewport_width += this.e.indices[m4] || v3.offsetWidth;
    }
    n.row_height = n.row_height || c2.row_height;
    let f3 = t;
    if (!r3) for (let m4 = 0; m4 < t; m4++) {
      let { td: v3, metadata: b4 } = c2.tds[m4] || {}, { th: M4, metadata: R5 } = g3[m4] || {};
      (v3 || M4) && a2.push([M4 || v3, R5 || b4]);
    }
    return { cont_body: c2, first_col: false, Ye: f3, last_cells: a2 };
  }
  je(e2, t, i7, s3, n, r3) {
    let o = 0, l3 = 0;
    for (; this.e.indices.length > n + r3 + o + 1 && l3 + t.viewport_width < i7; ) o++, l3 += this.e.indices[n + r3 + o] || 0;
    if (l3 + t.viewport_width < i7) {
      let u4 = Math.min(s3, e2.start_col + 5);
      e2.end_col = Math.max(1, Math.min(s3, u4));
    } else e2.end_col = Math.max(1, Math.min(s3, e2.start_col + o));
  }
  Ke(e2, t, i7, s3, n, r3, o, l3, u4, d3) {
    let h3 = t.column_headers?.[e2] || [], a2 = t.data[e2], _2 = t.metadata?.[e2], p6 = { column_name: h3, cidx: i7, column_data: a2, column_data_listener_metadata: _2, row_headers: t.row_headers, first_col: o }, c2 = e2 + s3, g3 = i7 + Math.floor(s3), f3 = this.header.draw(h3, h3, void 0, c2, g3, s3, i7, l3, u4), m4 = this.body.draw(n, p6, r3, false, c2, s3, g3, d3);
    return { cont_head: f3, cont_body: m4 };
  }
  async Ze(e2, t, i7, s3, n, r3, o, l3, u4) {
    let d3 = Math.max(s3 + Math.floor(u4), 0), h3 = structuredClone(e2);
    h3.start_col = d3, this.je(h3, n, r3, o, l3, u4);
    let a2 = await t(Math.floor(h3.start_col), Math.floor(h3.start_row), Math.ceil(h3.end_col), Math.ceil(h3.end_row)), _2, p6;
    if (typeof a2.column_header_merge_depth < "u" && (_2 = a2.column_header_merge_depth), typeof a2.merge_headers < "u" && (p6 = a2.merge_headers), a2.data.length === 0) return { column_header_merge_depth: _2, merge_headers: p6 };
    e2.end_col = h3.start_col + a2.data.length;
    for (let c2 = 0; c2 < a2.data.length; c2++) i7.data[s3 + c2] = a2.data[c2], a2.metadata && i7.metadata && (i7.metadata[s3 + c2] = a2.metadata[c2]), i7.column_headers && a2.column_headers?.[c2] && (i7.column_headers[s3 + c2] = a2.column_headers[c2]);
    return { column_header_merge_depth: _2, merge_headers: p6 };
  }
  H(e2, t) {
    this.body.clean({ ridx: e2?.ridx || 0, cidx: t, drawn_ridx: e2?.drawn_ridx ?? e2?.ridx ?? 0 }), this.header.clean();
  }
};
var ve3 = 0;
var K3 = class extends Z4 {
  table;
  u;
  W = /* @__PURE__ */ new Map();
  R = /* @__PURE__ */ new Map();
  k;
  v;
  Je;
  m;
  be = /* @__PURE__ */ new WeakSet();
  pe = {};
  B = false;
  we;
  constructor(e2, t, i7) {
    super(), this.e = t, this.clear(i7);
    let [s3] = i7.children, [n, r3] = s3.children;
    this.table = s3, this.k = `rt-scope-${ve3++}`, this.table.classList.add(this.k), this.m = new ResizeObserver(this.Qe.bind(this)), this.header = new Y4(t, e2, n, (o) => this.L(o)), this.body = new j4(t, e2, r3);
  }
  dispose() {
    this.m?.disconnect();
  }
  L(e2) {
    !this.m || this.be.has(e2) || (this.be.add(e2), this.m.observe(e2));
  }
  Qe(e2) {
    if (this.B) {
      for (let s3 of e2) this.m.unobserve(s3.target), this.m.observe(s3.target);
      return;
    }
    let t = this.table.currentCSSZoom ?? 1, i7 = [];
    for (let s3 of e2) {
      let n = B4.get(s3.target);
      if (n === void 0 || this.e.override[n] !== void 0) continue;
      let r3 = s3.target.getBoundingClientRect().width / t;
      r3 && this.e.indices[n] !== r3 && i7.push([n, r3]);
    }
    if (i7.length > 0) {
      this.ge();
      for (let [s3, n] of i7) this.e.indices[s3] = n, this.e.auto[s3] = n, this.F(s3);
      this.we?.();
    }
  }
  num_columns() {
    return this.header.num_columns();
  }
  clear(e2) {
    e2.innerHTML = '<table cellspacing="0"><thead></thead><tbody></tbody></table>';
  }
  $(e2) {
    for (let [, t] of e2) {
      let i7 = t?.size_key;
      if (i7 === void 0) return true;
      let s3 = this.e.override[i7];
      if (s3 !== void 0) {
        if (this.pe[i7] !== s3) return true;
      } else if (!this.e.indices[i7]) return true;
    }
    return false;
  }
  autosize_cells(e2, t) {
    let i7 = this.table.currentCSSZoom ?? 1, s3 = [];
    for (let [n, r3] of e2) {
      let o = n.getBoundingClientRect();
      s3.push({ cell: n, metadata: r3, box: o });
    }
    for (let { metadata: n, box: r3 } of s3) if (this.e.row_height = t ?? Math.max(10, Math.min(this.e.row_height ?? r3.height / i7, r3.height / i7)), n?.size_key !== void 0) {
      this.e.indices[n.size_key] = r3.width / i7;
      let o = this.e.override[n.size_key];
      r3.width / i7 && o === void 0 && (this.e.auto[n.size_key] = r3.width / i7), o !== void 0 && (this.pe[n.size_key] = o);
    }
  }
  updateColumnWidthStyles(e2, t) {
    if (!this.ge()) return;
    let i7;
    for (i7 = 0; i7 < t; i7++) this.F(i7);
    let s3 = Math.floor(e2.start_col);
    for (let n = i7; n < i7 + (Math.floor(e2.end_col) - s3); n++) this.F(n + s3);
  }
  F(e2) {
    let t = this.e.override[e2], i7 = this.e.auto[e2];
    t !== void 0 ? this.Me(e2, t, t) : i7 !== void 0 ? this.Me(e2, i7, void 0) : this.et(e2);
  }
  ge() {
    let e2 = this.table.getRootNode();
    if (!(!e2 || !e2.adoptedStyleSheets)) return this.u || (this.u = new CSSStyleSheet()), e2.adoptedStyleSheets.includes(this.u) || (e2.adoptedStyleSheets = [...e2.adoptedStyleSheets, this.u]), this.u;
  }
  tt(e2) {
    let t = this.W.get(e2);
    if (t) return t;
    let i7 = this.u;
    if (!i7) return;
    let s3 = i7.cssRules.length;
    return i7.insertRule(`.${this.k} .rt-col-${e2}{}`, s3), t = i7.cssRules[s3], this.W.set(e2, t), t;
  }
  Me(e2, t, i7) {
    let s3 = i7 === void 0 ? `${t}` : `${t}|${i7}`;
    if (this.R.get(e2) === s3) return;
    let n = this.tt(e2);
    n && (n.style.minWidth = `${t}px`, i7 === void 0 ? n.style.removeProperty("max-width") : n.style.maxWidth = `${i7}px`, this.R.set(e2, s3));
  }
  et(e2) {
    if (this.R.get(e2) === "") return;
    let t = this.W.get(e2);
    t && (t.style.removeProperty("min-width"), t.style.removeProperty("max-width")), this.R.set(e2, "");
  }
  async Ee(e2) {
    return this.v ? this.v : await e2.view(0, 0, 0, 0);
  }
  Te() {
    this.v = void 0, this.Je = void 0;
  }
  async draw(e2, t, i7, s3, n, r3, o) {
    let l3 = this.v = await t.view(Math.floor(n.start_col), Math.floor(n.start_row), Math.ceil(n.end_col), Math.ceil(n.end_row)), u4 = this.ve(e2, t, i7, s3, n, r3, l3);
    this.B = true;
    try {
      let d3 = u4.next();
      for (; !d3.done; ) await o(), d3 = u4.next(d3.value === "style" ? void 0 : await d3.value.fetch());
    } finally {
      this.B = false, u4.return(false);
    }
  }
  draw_sync(e2, t, i7, s3, n, r3, o, l3) {
    this.v = o;
    let u4 = this.ve(e2, t, i7, s3, n, r3, o), d3 = u4.next();
    for (; !d3.done; ) d3.value === "style" && l3(), d3 = u4.next();
    return d3.value;
  }
  *ve(e2, t, i7, s3, n, r3, o) {
    let { width: l3, height: u4 } = e2, { column_header_merge_depth: d3, merge_headers: h3 = "both" } = o, a2 = h3 === "both" || h3 === "row", _2 = h3 === "both" || h3 === "column", p6 = n.start_col ?? 0;
    if (o.row_headers) {
      let y5 = 0;
      for (let T5 of o.row_headers) T5.length > y5 && (y5 = T5.length);
      this.c = o.num_row_headers ?? y5;
      for (let T5 = 0; T5 < o.row_headers.length; T5++) o.row_headers[T5].length = this.c || 0;
    }
    t.row_headers_length = o.num_row_headers ?? o.row_headers?.[0]?.length ?? 0, t.column_headers_length = o.num_column_headers ?? o.column_headers?.[0]?.length ?? 0;
    let { view: c2, row_headers_length: g3, column_headers_length: f3 } = t, m4 = this.qe(n, i7), v3, b4 = 0, M4 = [], R5 = true;
    if (!!o.row_headers && (o.row_headers.length > 0 || g3 > 0)) {
      let y5 = this.Ue(o.row_headers, g3, f3, u4, m4, s3, p6, d3, _2, a2);
      v3 = y5.cont_body, R5 = y5.first_col, b4 = y5.Ye, M4 = y5.last_cells;
    }
    try {
      let y5 = 0, T5 = 0, V4 = r3 - n.start_col, H4 = this.e.indices.some(Boolean);
      for (; y5 < V4; ) {
        if (!o.data[y5]) {
          this.header.flush_colspans(), this.updateColumnWidthStyles(n, t.row_headers_length);
          let x5 = yield { fetch: () => this.Ze(n, c2, o, y5, m4, l3, r3, b4, p6) };
          if (x5?.column_header_merge_depth !== void 0 && (d3 = x5.column_header_merge_depth), x5?.merge_headers !== void 0 && (h3 = x5.merge_headers), !o.data[y5]) return this.H(v3, b4), this.updateColumnWidthStyles(n, t.row_headers_length), yield "style", this.$(M4) && this.autosize_cells(M4, this.e.row_height), this.N(m4, l3);
        }
        let { cont_head: A4, cont_body: C5 } = this.Ke(y5, o, b4, p6, u4, m4, R5, d3, _2, a2);
        if (v3 = C5, R5 = false, !s3) for (let { td: x5, metadata: S5 } of v3.tds) M4.push([A4?.th || x5, A4?.metadata || S5]);
        let E5 = this.e.indices[b4 + Math.floor(p6)] || (H4 ? T5 : 0);
        if (!E5) {
          if (E5 = A4?.th?.offsetWidth || 0, !E5) for (let { td: x5 } of v3.tds) E5 += x5?.offsetWidth || 0;
          T5 = E5;
        }
        if (m4.viewport_width += E5, m4.row_height = m4.row_height || v3.row_height, b4++, y5++, this.N(m4, l3)) {
          if (this.H(v3, b4), this.updateColumnWidthStyles(n, t.row_headers_length), yield "style", s3) return true;
          m4.viewport_width = 0, this.$(M4) && this.autosize_cells(M4, this.e.row_height), T5 = 0;
          let x5 = m4.row_headers_length || 0;
          for (let S5 = 0; S5 < M4.length; S5++) {
            let L5 = S5 < x5 ? S5 : Math.floor(p6) + S5;
            m4.viewport_width += this.e.indices[L5] || 0;
          }
          if (this.N(m4, l3)) return true;
        }
      }
      return this.H(v3, b4), this.updateColumnWidthStyles(n, t.row_headers_length), yield "style", this.$(M4) && this.autosize_cells(M4, this.e.row_height), true;
    } finally {
      this.H(v3, b4);
    }
  }
  N(e2, t) {
    return e2.viewport_width - e2.sub_cell_offset > t;
  }
};
var ye3 = ["both", "horizontal", "vertical", "none"];
var J4 = class extends U3 {
  I;
  constructor() {
    super(), this.e = { auto: [], override: {}, indices: [] }, this.n = [], this.I = false;
  }
  connectedCallback() {
    this.I || (this.xe(), this.register_listeners(), this.setAttribute("tabindex", "0"), this.I = true, this.ye());
  }
  ye() {
    this.table_model?.dispose(), this.table_model = new K3(this.s, this.e, this), this.table_model.we = () => this.Se(), this.table_model.body.h = this.h, this.ne(0, 0);
  }
  resetAutoSize(e2) {
    (!e2 || e2.auto) && (this.e.auto = []), (!e2 || e2.override) && (this.e.override = {}), (!e2 || e2.indices) && (this.e.indices = []), (!e2 || e2.row_height) && (this.e.row_height = void 0);
  }
  saveColumnSizes() {
    return structuredClone(this.e.override);
  }
  restoreColumnSizes(e2) {
    this.e.override = structuredClone(e2);
  }
  clear() {
    this.ye();
  }
  addStyleListener(e2) {
    this.n.push(e2);
    let t = true;
    return () => {
      if (!t) return;
      t = false, this.n = this.n.slice();
      let s3 = this.n.indexOf(e2);
      this.n.splice(s3, 1);
    };
  }
  removeStyleListener(e2) {
    let t = this.n.length;
    this.n = this.n.filter((i7) => i7 !== e2), console.assert(this.n.length === t - 1, "No listener found");
  }
  getMeta(e2) {
    if (e2 !== void 0) {
      if (e2 instanceof HTMLElement) return P4.get(e2);
      if ("row_header_x" in e2 && e2.row_header_x && e2.row_header_x >= 0) {
        if (e2.row_header_x < this.t.row_headers_length) {
          let t = this.table_model.body.M(e2.y, e2.row_header_x);
          return this.getMeta(t);
        }
      } else if ("column_header_y" in e2 && e2.column_header_y >= 0) {
        if (e2.column_header_y < this.t.column_headers_length) {
          let t = this.table_model.header.M(e2.column_header_y, e2.x);
          return this.getMeta(t);
        }
      } else if ("dx" in e2) return this.getMeta(this.table_model.body.M(e2.dy, e2.dx + (this.table_model.c || 0)));
    }
  }
  getDrawFPS() {
    return ie3();
  }
  async scrollToCell(e2, t) {
    if (!this.t) {
      console.warn("data listener not configured");
      return;
    }
    let i7 = this.e.row_height || 0;
    this.scrollTop = Math.ceil(i7 * t);
    let s3 = 0;
    for (; e2 > 0; ) e2--, s3 += this.e.indices[e2 + this.t.row_headers_length] || 60;
    this.scrollLeft = Math.ceil(s3), await new Promise(requestAnimationFrame), await this.flush();
  }
  setDataListener(e2, { virtual_mode: t = "both", preserve_state: i7 = false, column_classes: s3 = false } = {}) {
    console.assert(ye3.indexOf(t) > -1, `Unknown virtual_mode ${t};  valid options are "both" (default), "horizontal", "vertical" or "none"`);
    let n = this.i !== t;
    i7 ? (console.assert(!n, "preserve_state called with modified virtual_mode"), this.t.view = e2) : (this.i = t, this.h = s3, this.table_model && (this.table_model.body.h = s3), this.b = true, this.t = { view: e2, row_headers_length: 0, column_headers_length: 0 }, n && this.se());
  }
};
document.createElement("regular-table").constructor === HTMLElement && window.customElements.define("regular-table", J4);

// ../../rust/perspective-viewer/dist/esm/select-detail.js
var i6 = class {
  selected;
  row;
  column_names;
  removeConfigs;
  insertConfigs;
  panel;
  constructor(e2, t, n, r3, s3, o) {
    this.selected = e2, this.row = t, this.column_names = n, this.removeConfigs = r3, this.insertConfigs = s3, this.panel = o;
  }
  get removeFilters() {
    return this.removeConfigs.flatMap((e2) => e2.filter ?? []);
  }
  get insertFilters() {
    return this.insertConfigs.flatMap((e2) => e2.filter ?? []);
  }
};

// ../../rust/perspective-viewer/dist/esm/column-format.js
var f2 = ["dateStyle", "timeStyle", "weekday", "year", "month", "day", "hour", "minute", "second", "fractionalSecondDigits"];
var F5 = ["timeZone", "hour12"];
function c(t) {
  return f2.some((e2) => t?.[e2] !== void 0);
}
var g2 = { float: { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 } };
var l2 = { dateStyle: "short", timeStyle: "medium" };
var u3 = { dateStyle: "short" };
var D4 = [["style", "currency", "currencyDisplay", "currencySign", "unit", "unitDisplay"], ["notation", "compactDisplay"], ["minimumFractionDigits", "maximumFractionDigits"], ["minimumSignificantDigits", "maximumSignificantDigits"]];
function p4(t, e2) {
  let n = {};
  for (let [i7, o] of Object.entries(e2 ?? {})) o != null && (n[i7] = o);
  let r3 = { ...t };
  for (let i7 of D4) if (i7.some((o) => o in n)) for (let o of i7) delete r3[o];
  return Object.assign(r3, n);
}
function C4(t, e2, n) {
  let r3 = n ?? g2[t] ?? {}, i7 = e2 ? p4(r3, e2) : r3;
  return new Intl.NumberFormat(navigator.languages, i7);
}
function d2(t, e2, n) {
  let r3 = [t, e2, n], i7 = r3.find(c) ?? {}, o = {}, s3 = (a2, m4) => {
    m4 !== void 0 && m4[a2] !== void 0 && (o[a2] = m4[a2]);
  };
  for (let a2 of f2) s3(a2, i7);
  for (let a2 of F5) s3(a2, r3.find((m4) => m4?.[a2] !== void 0));
  return o;
}
function N3(t, e2) {
  return new Intl.DateTimeFormat(navigator.languages, d2(t, e2, l2));
}
function b2(t, e2) {
  let { dateStyle: n } = d2(t, e2, u3);
  return new Intl.DateTimeFormat(navigator.languages, { timeZone: "utc", dateStyle: n ?? u3.dateStyle });
}

// ../../packages/viewer-datagrid/dist/esm/perspective-viewer-datagrid.js
function j5(e2, t) {
  return t.type === "body" || t.type === "column_header" || t.type === "corner" ? e2._column_types[t.x] : e2._row_header_types[(t.row_header_x ?? 0) - 1];
}
var ir = ["disabled", "color", "bar", "label-bar"];
var lr = ["disabled", "color", "gradient", "pulse"];
var St2 = ["disabled", "color", "series"];
var Tt = ["disabled", "color"];
function Ue2(e2) {
  switch (e2) {
    case "integer":
    case "float":
      return ir;
    case "string":
      return St2;
    case "date":
    case "datetime":
      return Tt;
    default:
      return [];
  }
}
function $e2(e2) {
  switch (e2) {
    case "integer":
    case "float":
      return lr;
    case "string":
      return St2;
    case "date":
    case "datetime":
      return Tt;
    default:
      return [];
  }
}
function je2(e2) {
  return e2 === "integer" || e2 === "float" ? "color" : "disabled";
}
function Ye2(e2) {
  return "disabled";
}
function Y5(e2, t) {
  return Ue2(e2).includes(t) ? t : void 0;
}
function q5(e2, t) {
  return $e2(e2).includes(t) ? t : void 0;
}
var D5 = Symbol("Perspective Column Config");
function B5(e2, t, o = false) {
  let r3 = e2._config.group_by.length === 0 && e2._config.split_by.length === 0, n = o || e2._edit_mode === "EDIT";
  return r3 && n;
}
var ar = /^__(?:ROW_PATH(?:_\d+)?|ID|GROUPING_ID)__$/;
function ne3(e2) {
  return ar.test(e2);
}
function _e3(e2, t, o, r3) {
  let n = t.saveColumnSizes();
  if (e2._config.split_by.length > 0) return n;
  let s3 = e2._column_overrides, i7 = e2._projected, l3 = e2._num_row_headers, a2 = Math.min(r3, e2._column_paths.length), c2 = false, p6 = (m4, d3) => {
    d3 === void 0 ? delete n[m4] : n[m4] = d3, c2 = true;
  };
  for (let m4 = o; m4 < a2; m4++) {
    let d3 = e2._column_paths[m4];
    if (d3 === void 0) continue;
    let g3 = l3 + m4, u4 = n[g3], h3 = i7.get(g3), v3 = s3.get(d3);
    h3 !== void 0 && h3.path === d3 && u4 !== h3.px ? (u4 === void 0 ? s3.delete(d3) : s3.set(d3, u4), e2._unpersisted_widths.add(d3), i7.set(g3, { path: d3, px: u4 })) : (v3 !== u4 && p6(g3, v3), i7.set(g3, { path: d3, px: v3 }));
  }
  return c2 && t.restoreColumnSizes(n), n;
}
function Ke2(e2, t) {
  let o = {};
  for (let r3 of t) {
    let n = structuredClone(e2._columns_config[r3] ?? {});
    delete n.column_size_override;
    let s3 = e2._column_overrides.get(r3);
    s3 !== void 0 && (n.column_size_override = s3), o[r3] = n;
  }
  return o;
}
function Rt(e2, t, o) {
  for (; e2.length < t.length; ) e2.push([]);
  e2.length = t.length;
  for (let r3 = 0; r3 < t.length; r3++) {
    let n = t[r3];
    for (let s3 = 0; s3 < n.length; s3++) e2[r3][o + s3] = n[s3];
  }
}
function Lt(e2, t, o) {
  e2.length = 1, e2[0] ??= [];
  for (let r3 = 0; r3 < t.length; r3++) e2[0][o + r3] = t[r3];
}
function Je2(e2, t) {
  let o = e2._column_path_area, r3 = o[o.length - 1]?.[t];
  return r3 == null ? "" : String(r3);
}
function ve4(e2, t) {
  let o = e2._column_path_area, r3 = 0;
  for (let n = 0; n + 1 < o.length; n++) o[n][t] !== null && o[n][t] !== void 0 && r3++;
  return r3;
}
function Dt(e2, t) {
  let o = e2._column_path_area, r3 = [];
  for (let n = 0; n + 1 < o.length; n++) {
    let s3 = o[n][t];
    if (s3 == null) break;
    r3.push(s3);
  }
  return r3;
}
function we3(e2, t) {
  let o = e2._column_path_area;
  return o[o.length - 1]?.[t] !== void 0;
}
var Xe = class {
  format(t) {
    return t ? "true" : "false";
  }
};
var Ee2 = class {
  _formatters;
  constructor() {
    this._formatters = /* @__PURE__ */ new Map();
  }
  create_datetime_formatter(t, o) {
    return N3(o.date_format);
  }
  create_date_formatter(t, o) {
    return b2(o.date_format);
  }
  create_number_formatter(t, o) {
    return C4(t, o.number_format);
  }
  create_boolean_formatter(t, o) {
    return new Xe();
  }
  get(t, o) {
    let r3 = JSON.stringify([t, o.date_format ?? null, o.number_format ?? null]);
    return this._formatters.has(r3) || (t === "date" ? this._formatters.set(r3, this.create_date_formatter(t, o)) : t === "datetime" ? this._formatters.set(r3, this.create_datetime_formatter(t, o)) : t === "integer" || t === "float" ? this._formatters.set(r3, this.create_number_formatter(t, o)) : t === "boolean" ? this._formatters.set(r3, this.create_boolean_formatter(t, o)) : this._formatters.set(r3, false)), this._formatters.get(r3);
  }
};
var Pt = new Ee2();
function Ce2(e2, t) {
  return Pt.get(e2, t);
}
function K4(e2, t, o = {}, r3 = false) {
  if (t === null) return null;
  let n = r3 && this._table_schema[e2] || this._schema[e2] || this._window_schema?.[e2] || "string", s3 = o[e2] || {};
  if ((n === "integer" || n === "float") && !r3 && (s3.fg_mode === "bar" || s3.fg_mode === "label-bar")) return "";
  if (s3?.link === true && n === "string") {
    let l3 = document.createElement("a");
    return l3.setAttribute("href", t), l3.setAttribute("target", "_blank"), l3.textContent = t, l3;
  } else {
    let l3 = Pt.get(n, s3);
    return l3 ? l3.format(t) : String(t);
  }
}
var Ot = "__COMMANDS__";
var Ht = "psp-command-cell";
var xe3 = "psp-command-button";
var Qe2 = Symbol("Perspective Command Context");
var At = Symbol("Perspective Command Specs");
function Nt(e2, t, o, r3, n) {
  let s3 = Math.min(n, e2._column_paths.length);
  return { start_row: r3, start_col: o, paths: e2._column_paths.slice(o, s3), column_paths: e2._column_path_area.map((i7) => i7.slice(o, s3).map((l3) => l3 ?? null)), data: t };
}
function Ze2(e2) {
  return e2.parentElement;
}
function et2(e2, t, o, r3) {
  let n = Ze2(e2);
  if (!(!n?.queryCommands || r3.length === 0)) try {
    return n.queryCommands(e2, t, o, r3);
  } catch (s3) {
    return console.error(`Failed to query "${t}" commands`, s3), r3.map(() => {
    });
  }
}
function ge4(e2, t) {
  let o = Ze2(e2);
  if (!o?.queryCommands || !e2.model) return false;
  let r3 = { start_row: 0, start_col: 0, paths: [], column_paths: [], data: {} };
  return o.queryCommands(e2, t, r3, []) !== void 0;
}
function mr(e2, t) {
  let o = document.createElement("button");
  return o.className = xe3, o.type = "button", o.dataset.key = e2.key, o.title = e2.kind === "Command" && e2.title || e2.label, o.tabIndex = -1, o[Qe2] = t, o.textContent = e2.label, e2.kind === "Command" && e2.icon && (o.dataset.icon = e2.icon, o.style.setProperty("--psp-command-button--mask-image", `var(--psp-icon--${e2.icon}--mask-image)`)), e2.kind === "Command" && e2.disabled && (o.disabled = true), e2.kind === "Group" && (o.dataset.group = ""), o;
}
function zt(e2, t) {
  let o = t ?? document.createElement("div");
  return o.className = Ht, It2(o, e2), o;
}
function ur(e2, t) {
  let o = e2.querySelector(":scope > .psp-command-value");
  if (t instanceof HTMLElement) t.classList.add("psp-command-value"), o ? o.replaceWith(t) : e2.prepend(t);
  else if (t) if (o instanceof HTMLSpanElement) o.textContent !== String(t) && (o.textContent = String(t));
  else {
    let r3 = document.createElement("span");
    r3.className = "psp-command-value", r3.textContent = String(t), o?.remove(), e2.prepend(r3);
  }
  else o?.remove();
}
function Vt(e2, t, o) {
  if (!t || t.commands.length === 0) return e2;
  let r3 = o ?? document.createElement("div");
  return r3.className = Ht, ur(r3, e2), It2(r3, t), r3;
}
function It2(e2, t) {
  let o = JSON.stringify(t?.commands ?? []), r3 = Array.from(e2.querySelectorAll(`:scope > .${xe3}`));
  if (e2[At] === o) {
    for (let n of r3) n[Qe2] = t;
    return;
  }
  for (let n of r3) n.remove();
  for (let n of t?.commands ?? []) e2.appendChild(mr(n, t));
  e2[At] = o;
}
function _r(e2) {
  return !!e2.target?.closest?.(`.${xe3}`);
}
function Bt(e2, t) {
  let o = (r3) => {
    _r(r3) && (r3.stopImmediatePropagation(), r3.type === "mousedown" && r3.preventDefault());
  };
  for (let r3 of ["pointerdown", "mousedown", "mouseup", "dblclick"]) t.addEventListener(r3, o, { capture: true });
  t.addEventListener("click", (r3) => {
    let n = r3.target?.closest?.(`.${xe3}`);
    if (!n) return;
    r3.stopImmediatePropagation();
    let s3 = n[Qe2], i7 = Ze2(e2);
    if (!s3 || !i7 || n.disabled) return;
    let l3 = n.dataset.key ?? "";
    if (n.dataset.group !== void 0) {
      let a2 = s3.commands.find((c2) => c2.kind === "Group" && c2.key === l3);
      if (a2?.kind === "Group") {
        let c2 = r3;
        i7.showCommandMenu(s3.context, a2.commands, { x: c2.clientX, y: c2.clientY });
      }
    } else i7.invokeCommand(l3, s3.context);
  }, { capture: true });
}
function tt2(e2) {
  return { row: e2._command_column !== "none" && ge4(e2, "datagrid-row"), cell: e2._command_cells && ge4(e2, "datagrid-cell") };
}
function Wt(e2) {
  let t = e2.model?._command_drawn;
  if (!t) return false;
  let o = tt2(e2);
  return t.row !== o.row || t.cell !== o.cell;
}
var ke2 = class {
  _view;
  _labels = /* @__PURE__ */ new Map();
  format(t, o, r3, n) {
    let s3 = t._config.split_by[r3], i7 = o[r3], l3 = i7 == null ? "" : String(i7), a2 = K4.call(t, s3, i7, n, true);
    if (typeof a2 != "string") return l3;
    this._view !== t._view && (this._view = t._view, this._labels.clear());
    let c2 = JSON.stringify([o.slice(0, r3 + 1), a2]), p6 = this._labels.get(c2);
    return p6 === void 0 && (p6 = { toString: () => a2 }, this._labels.set(c2, p6)), p6;
  }
};
function gr(e2) {
  return e2 instanceof HTMLElement || e2 === null ? e2 : { toString: () => String(e2) };
}
function* Gt(e2 = [], t, o) {
  let r3 = o[D5] || {};
  for (let n of e2) {
    let s3 = ["TOTAL", ...n], i7 = s3[s3.length - 1], l3 = s3.slice(0, s3.length - 1).fill(""), a2 = K4.call(this, t[l3.length - 1], i7, r3, true);
    l3 = l3.concat(gr(a2)), l3.length = t.length + 1, yield l3;
  }
}
function* Ft(e2 = [], t, o) {
  let r3 = o[D5] || {};
  for (let n of e2) yield n.map((s3, i7) => K4.call(this, t[i7], s3, r3, true));
}
function* Ut2(e2 = [], t, o) {
  let r3 = o[D5] || {};
  for (let n of e2) {
    let s3 = [""];
    for (let i7 in n) s3.push(K4.call(this, t[i7], n[i7], r3, true));
    yield n;
  }
}
function $t(e2, t) {
  let o, r3, n, s3, i7, l3 = new ke2();
  return async function(c2, p6, m4, d3, g3) {
    let u4 = {}, h3 = { start_row: m4, start_col: p6, end_row: g3, end_col: d3, id: true }, v3 = null, { row: _2, cell: f3 } = tt2(t), E5 = _2 && this._command_column === "right";
    if (d3 - p6 > 0 && g3 - m4 > 0) {
      this._is_old_viewport = this._last_window?.start_row === m4 && this._last_window?.end_row === g3 && this._last_window?.start_col === p6 && this._last_window?.end_col === d3;
      let x5 = this._config.group_by.length > 0 && g3 < this._num_rows ? 1 : 0, [L5, N5] = await Promise.all([this._view.to_columns_string({ ...h3, end_row: g3 + x5 }), this._view.num_columns()]);
      v3 = N5, u4 = JSON.parse(L5);
      let V4 = this._config.group_rollup_mode === "flat";
      if (this._row_header_depths = { start_row: m4, depths: (u4.__ROW_PATH__ ?? []).map((k5) => V4 ? k5.length : k5.length + 1) }, x5 > 0) for (let k5 of Object.keys(u4)) u4[k5] = u4[k5]?.slice(0, g3 - m4);
      let I5 = Object.keys(u4).filter((k5) => !ne3(k5)), ue4 = false;
      for (let k5 = 0; k5 < I5.length; k5++) this._column_paths[h3.start_col + k5] !== I5[k5] && (ue4 = true, this._column_paths[h3.start_col + k5] = I5[k5]);
      if (ue4) {
        let k5 = this._config.split_by.length > 0, [U5, Q5, re4] = await Promise.all([this._view.schema(), this._view.expression_schema(), k5 ? this._view.column_paths({ start_col: p6, end_col: d3 }) : Promise.resolve(null)]);
        re4 === null ? Lt(this._column_path_area, I5, h3.start_col) : Rt(this._column_path_area, re4, h3.start_col), this._schema = { ...U5, ...Q5 };
        for (let A4 = 0; A4 < I5.length; A4++) {
          let Z6 = Je2(this, A4 + h3.start_col);
          this._is_editable[A4 + h3.start_col] = !!this._table_schema[Z6], this._column_types[A4 + h3.start_col] = this._schema[Z6];
        }
      }
      this._last_window = h3, this._ids = u4.__ID__ || Array(g3 - m4).fill(null).map((k5, U5) => [U5 + m4]), this._reverse_columns = this._column_paths.slice(p6, d3).reduce((k5, U5, Q5) => (k5.set(U5, Q5), k5), /* @__PURE__ */ new Map()), this._reverse_ids = this._ids?.reduce((k5, U5, Q5) => (k5.set(U5?.join("|"), Q5), k5), /* @__PURE__ */ new Map());
    } else v3 = await this._view.num_columns();
    let w4 = [], S5 = [], y5 = [], M4 = [], b4 = this._column_menus && e2.hasAttribute("settings") && (this._panel === void 0 || e2.getActivePanel() === this._panel), T5 = d3 - p6 > 0 && g3 - m4 > 0, G5 = u4.__ROW_PATH__ !== void 0, O5 = this._config.group_rollup_mode === "flat", R5 = T5 ? this._ids.length : 0, H4 = T5 ? Nt(this, u4, p6, m4, d3) : void 0, C5 = this._command_blocks ?? /* @__PURE__ */ new Map(), F7 = /* @__PURE__ */ new Map();
    H4 && (this._command_blocks = F7, this._command_drawn = { row: _2, cell: f3, column: this._command_column });
    let J5 = (x5, L5) => {
      let N5 = String(m4 + x5), V4 = zt(L5, C5.get(N5));
      return F7.set(N5, V4), V4;
    }, rr = Array.from({ length: R5 }, (x5, L5) => ({ y: m4 + L5 })), be4 = H4 && _2 ? et2(t, "datagrid-row", H4, rr) : void 0, X5 = Array.from((G5 ? O5 ? Ft : Gt : Ut2).call(this, u4.__ROW_PATH__, this._config.group_by, c2)), yt3 = _2 && this._command_column !== "right", We3 = this._command_column === "tree" && this._config.group_by.length > 0;
    if (this._command_header_x = void 0, yt3 && be4) {
      X5.length === 0 && (X5 = Array.from({ length: R5 }, () => []));
      for (let x5 = 0; x5 < R5; x5++) {
        let L5 = J5(x5, be4[x5]);
        We3 ? X5[x5].push(L5) : X5[x5].unshift(L5);
      }
      this._command_header_x = We3 ? X5[0]?.length - 1 : 0, this._command_header_leaf = We3 || this._config.group_by.length === 0;
    }
    let vt3 = T5 ? X5[0]?.length : hr(this._config) + (yt3 ? 1 : 0);
    this._num_row_headers = vt3 ?? 0;
    let nr = T5 ? _e3(this, c2, p6, d3) : {}, Ge3 = c2[D5] || {}, wt3 = Math.min(d3, this._column_paths.length), Et3 = [];
    if (H4 && f3) for (let x5 = p6; x5 < wt3; ++x5) for (let L5 = 0; L5 < R5; L5++) Et3.push({ y: m4 + L5, x: x5 });
    let Ct = H4 && f3 ? et2(t, "datagrid-cell", H4, Et3) : void 0;
    for (let x5 = p6; x5 < wt3; ++x5) {
      let L5 = this._column_paths[x5], N5 = Je2(this, x5), V4 = Dt(this, x5), oe5 = V4.length, I5 = V4.slice(0);
      if (oe5 < this._config.split_by.length) {
        let A4 = "\u200B".repeat(oe5 + 1);
        for (; I5.length < this._config.split_by.length; ) I5.push(A4);
      }
      I5.push(N5);
      let ue4 = u4[L5] || new Array(g3 - m4).fill(null), k5 = Ge3[N5], U5 = (k5?.word_wrap ?? this._word_wrap) && nr[x5 + this._num_row_headers] !== void 0, Q5 = Math.min(k5?.aggregate_depth || 0, this._config.group_by.length);
      w4.push(ue4.map((A4, Z6) => {
        if ((u4?.__ROW_PATH__?.[Z6]?.length ?? 0) < Q5) return "";
        let kt = K4.call(this, N5, A4, Ge3), Fe3 = U5 ? fr(kt) : kt;
        if (!Ct || Z6 >= R5) return Fe3;
        let sr = (x5 - p6) * R5 + Z6, Mt = `${m4 + Z6}|${L5}`, ye5 = Vt(Fe3, Ct[sr], C5.get(Mt));
        return ye5 !== Fe3 && ye5 instanceof HTMLElement && F7.set(Mt, ye5), ye5;
      })), S5.push(ue4);
      let re4 = I5.slice();
      for (let A4 = 0; A4 < oe5; A4++) re4[A4] = l3.format(this, V4, A4, Ge3);
      b4 && re4.push(""), y5.push(re4), M4.push(L5);
    }
    if (E5 && v3 !== null) {
      v3 += 1;
      let x5 = v3 - 1;
      if (be4 && d3 > x5) {
        w4.push(be4.map((V4, oe5) => J5(oe5, V4))), S5.push([]);
        let L5 = "\u200B".repeat(this._config.split_by.length + 2), N5 = Array(this._config.split_by.length).fill(L5);
        N5.push(""), b4 && N5.push(""), y5.push(N5), M4.push(Ot);
      }
    }
    T5 && (this.last_column_paths = r3, this.last_meta = o, this.last_ids = n, this.last_reverse_ids = s3, this.last_reverse_columns = i7, r3 = M4, o = S5, n = this._ids, s3 = this._reverse_ids, i7 = this._reverse_columns);
    let xt2 = { num_column_headers: this._config.split_by.length + (b4 ? 2 : 1), num_row_headers: vt3, num_rows: this._num_rows, num_columns: v3, row_headers: X5, column_headers: y5, data: w4, metadata: S5, column_header_merge_depth: Math.max(0, this._config.split_by.length) };
    return this._row_height !== void 0 && (xt2.row_height = this._row_height), xt2;
  };
}
function fr(e2) {
  if (!e2) return e2;
  let t = document.createElement("div");
  return t.className = "psp-wrap", e2 instanceof HTMLElement ? t.appendChild(e2) : t.textContent = e2, t;
}
function hr(e2) {
  return e2.group_rollup_mode === "flat" ? e2.group_by.length : e2.group_rollup_mode === "total" || e2.group_by.length === 0 ? 0 : e2.group_by.length + 1;
}
var jt = /* @__PURE__ */ new Map();
var se4 = null;
function rt2(e2) {
  let t = e2.startsWith("#") ? e2.slice(1) : e2;
  if (t.length === 3 || t.length === 4) {
    let o = parseInt(t[0] + t[0], 16), r3 = parseInt(t[1] + t[1], 16), n = parseInt(t[2] + t[2], 16);
    if (!isNaN(o) && !isNaN(r3) && !isNaN(n)) return [o, r3, n];
  } else if (t.length === 6 || t.length === 8) {
    let o = parseInt(t.slice(0, 2), 16), r3 = parseInt(t.slice(2, 4), 16), n = parseInt(t.slice(4, 6), 16);
    if (!isNaN(o) && !isNaN(r3) && !isNaN(n)) return [o, r3, n];
  }
  return null;
}
function qt(e2) {
  let t = e2.match(/^rgba?\(\s*([\d.]+)\s*[, ]\s*([\d.]+)\s*[, ]\s*([\d.]+)/i);
  return t ? [Math.round(parseFloat(t[1])), Math.round(parseFloat(t[2])), Math.round(parseFloat(t[3]))] : null;
}
function br(e2) {
  if (!se4) {
    let o = document.createElement("canvas");
    o.width = o.height = 1, se4 = o.getContext("2d");
  }
  if (!se4) return [0, 0, 0];
  se4.fillStyle = "#000", se4.fillStyle = e2;
  let t = se4.fillStyle;
  return rt2(t) ?? qt(t) ?? [0, 0, 0];
}
function z4(e2) {
  let t = e2.trim(), o = jt.get(t);
  if (o) return o;
  let r3 = rt2(t) ?? qt(t) ?? br(t);
  return jt.set(t, r3), r3;
}
function ot(e2) {
  return Math.max(0, Math.min(255, Math.round(e2))).toString(16).padStart(2, "0");
}
function P5([e2, t, o]) {
  return `#${ot(e2)}${ot(t)}${ot(o)}`;
}
function Kt(e2, t) {
  if (e2.length === 0) return [0, 0, 0];
  if (t <= e2[0].offset) return e2[0].rgb;
  let o = e2[e2.length - 1];
  if (t >= o.offset) return o.rgb;
  for (let r3 = 0; r3 + 1 < e2.length; r3++) {
    let n = e2[r3], s3 = e2[r3 + 1];
    if (t > s3.offset) continue;
    let i7 = s3.offset - n.offset, l3 = i7 > 0 ? (t - n.offset) / i7 : 0;
    return [n.rgb[0] + (s3.rgb[0] - n.rgb[0]) * l3, n.rgb[1] + (s3.rgb[1] - n.rgb[1]) * l3, n.rgb[2] + (s3.rgb[2] - n.rgb[2]) * l3];
  }
  return o.rgb;
}
function yr([e2, t, o]) {
  let r3 = e2 / 255, n = t / 255, s3 = o / 255, i7 = Math.max(r3, n, s3), l3 = Math.min(r3, n, s3), a2 = (i7 + l3) / 2, c2 = i7 - l3, p6 = 0, m4 = 0;
  return c2 !== 0 && (m4 = a2 > 0.5 ? c2 / (2 - i7 - l3) : c2 / (i7 + l3), i7 === r3 ? p6 = ((n - s3) / c2 + (n < s3 ? 6 : 0)) * 60 : i7 === n ? p6 = ((s3 - r3) / c2 + 2) * 60 : p6 = ((r3 - n) / c2 + 4) * 60), [p6, m4, a2];
}
function Yt([e2, t, o]) {
  let r3 = (e2 % 360 + 360) % 360 / 360;
  if (t === 0) {
    let l3 = Math.round(o * 255);
    return [l3, l3, l3];
  }
  let n = o < 0.5 ? o * (1 + t) : o + t - o * t, s3 = 2 * o - n, i7 = (l3) => (l3 < 0 && (l3 += 1), l3 > 1 && (l3 -= 1), l3 < 1 / 6 ? s3 + (n - s3) * 6 * l3 : l3 < 1 / 2 ? n : l3 < 2 / 3 ? s3 + (n - s3) * (2 / 3 - l3) * 6 : s3);
  return [Math.round(i7(r3 + 1 / 3) * 255), Math.round(i7(r3) * 255), Math.round(i7(r3 - 1 / 3) * 255)];
}
function nt(e2, t, o = 0.5) {
  return [Math.round(Math.sqrt(e2[0] * e2[0] * (1 - o) + t[0] * t[0] * o)), Math.round(Math.sqrt(e2[1] * e2[1] * (1 - o) + t[1] * t[1] * o)), Math.round(Math.sqrt(e2[2] * e2[2] * (1 - o) + t[2] * t[2] * o))];
}
function st(e2, t) {
  return P5(nt(z4(e2), [t[0], t[1], t[2]], 0.5));
}
function ie4([e2, t, o, r3], n = [255, 255, 255]) {
  function s3(i7, l3) {
    return ((1 - r3) * (n[i7] / 255) + r3 * (l3 / 255)) * 255;
  }
  return [s3(0, e2), s3(1, t), s3(2, o)];
}
function ee3([e2, t, o]) {
  return Math.sqrt(e2 * e2 * 0.299 + t * t * 0.587 + o * o * 0.114) > 130 ? "#161616" : "#ffffff";
}
function vr(e2) {
  let t = e2.trim();
  if (t.startsWith("#")) return /^#[0-9a-f]+$/i.test(t) ? rt2(t) : null;
  let o = t.match(/^rgba?\(([^)]*)\)$/i);
  if (!o) return null;
  let r3 = o[1].split("/")[0].split(/[\s,]+/).filter((a2) => a2.length > 0);
  if (r3.length < 3 || r3.length > 4) return null;
  let n = (a2) => {
    let c2 = a2.endsWith("%"), p6 = parseFloat(c2 ? a2.slice(0, -1) : a2);
    return isFinite(p6) ? Math.max(0, Math.min(255, Math.round(c2 ? p6 / 100 * 255 : p6))) : null;
  }, s3 = n(r3[0]), i7 = n(r3[1]), l3 = n(r3[2]);
  return s3 === null || i7 === null || l3 === null ? null : [s3, i7, l3];
}
function Jt(e2) {
  let t = e2.trim().match(/^linear-gradient\s*\((.*)\)$/is);
  if (!t) return null;
  let o = t[1], r3 = [], n = 0, s3 = 0;
  for (let l3 = 0; l3 < o.length; l3++) {
    let a2 = o[l3];
    a2 === "(" ? n++ : a2 === ")" ? n-- : a2 === "," && n === 0 && (r3.push(o.substring(s3, l3)), s3 = l3 + 1);
  }
  r3.push(o.substring(s3));
  let i7 = [];
  for (let l3 = 0; l3 < r3.length; l3++) {
    let a2 = r3[l3].trim();
    if (!a2) return null;
    let c2 = a2.toLowerCase();
    if (l3 === 0 && (c2.startsWith("to ") || /^[-\d.]+(deg|rad|grad|turn)$/.test(c2))) continue;
    let p6 = a2.match(/\s([^\s)]+)$/), m4 = a2, d3 = null;
    if (p6) {
      let u4 = p6[1];
      if (u4.endsWith("%")) {
        let h3 = parseFloat(u4.slice(0, -1));
        if (!isFinite(h3)) return null;
        m4 = a2.substring(0, p6.index).trim(), d3 = h3 / 100;
      } else if (/^[-\d.]/.test(u4)) return null;
    }
    let g3 = vr(m4);
    if (!g3) return null;
    i7.push([g3, d3]);
  }
  return i7;
}
function Xt(e2) {
  let t = Jt(e2);
  if (!t || t.length < 2) return null;
  let o = t.map(([, s3]) => s3), r3 = o.length - 1;
  o[0] === null && (o[0] = 0), o[r3] === null && (o[r3] = 1);
  for (let s3 = 1; s3 < r3; s3++) {
    if (o[s3] !== null) continue;
    let i7 = s3 + 1;
    for (; o[i7] === null; ) i7++;
    let l3 = o[s3 - 1], a2 = o[i7], c2 = i7 - (s3 - 1);
    for (let p6 = s3; p6 < i7; p6++) o[p6] = l3 + (p6 - (s3 - 1)) / c2 * (a2 - l3);
    s3 = i7 - 1;
  }
  let n = t.map(([s3], i7) => ({ rgb: s3, offset: Math.max(0, Math.min(1, o[i7])) }));
  return n.sort((s3, i7) => s3.offset - i7.offset), n;
}
function Qt(e2) {
  let t = Jt(e2);
  if (!t || t.length === 0) return null;
  let o = [];
  for (let [r3, n] of t) {
    if (n !== null) return null;
    o.push(r3);
  }
  return o;
}
function it2(e2) {
  return `linear-gradient(to right, ${[...e2].sort((o, r3) => o.offset - r3.offset).map((o) => {
    let r3 = Math.round(Math.max(0, Math.min(1, o.offset)) * 1e3) / 10;
    return `${o.color} ${r3}%`;
  }).join(", ")})`;
}
function Zt(e2) {
  return `linear-gradient(to right, ${e2.join(", ")})`;
}
function wr(e2) {
  let [t, o, r3] = yr(e2), [n, s3, i7] = e2, [l3, a2, c2] = Yt([t - 15, o, r3]), [p6, m4, d3] = Yt([t + 15, o, r3]);
  return `linear-gradient(to right top,rgb(${l3},${a2},${c2}),rgb(${n},${s3},${i7}) 50%,rgb(${p6},${m4},${d3}))`;
}
function W4(e2) {
  let t = z4(e2), o = wr(t);
  return [e2, t[0], t[1], t[2], o, `rgba(${t[0]},${t[1]},${t[2]},1)`, `rgba(${t[0]},${t[1]},${t[2]},0)`];
}
var Er = /* @__PURE__ */ new Set(["sum", "avg", "stddev", "var", "diff", "rate", "ema"]);
function Cr(e2, t, o) {
  return e2 === "count" || e2 === "row_number" ? "integer" : Er.has(e2) ? "float" : o[t] ?? "string";
}
function lt3(e2, t) {
  if (e2.length !== t.length) return true;
  for (let o = 0; o < e2.length; o++) if (e2[o] !== t[o]) return true;
  return false;
}
function eo(e2, t) {
  if (e2.length !== t.length) return true;
  for (let o = 0; o < e2.length; o++) {
    if (e2[o].length !== t[o].length) return true;
    for (let r3 = 0; r3 < e2[o].length; r3++) if (e2[o][r3] !== t[o][r3]) return true;
  }
  return false;
}
var xr = "rgba(0, 0, 0, 0)";
function le2(e2, t, o) {
  let r3 = window.getComputedStyle(e2).getPropertyValue(t).trim();
  return r3.length > 0 && r3 !== xr ? r3 : o;
}
function kr(e2, t) {
  let o = (s3) => {
    let i7 = [];
    for (let l3 = 1; ; l3++) {
      let a2 = le2(e2, `${s3}${l3}--color`, "");
      if (!a2) break;
      i7.push(P5(z4(a2)));
    }
    return i7;
  }, r3 = o("--psp-datagrid--series-");
  if (r3.length > 0) return r3;
  let n = o("--psp-charts--series-");
  return n.length > 0 ? n : [P5(z4(t))];
}
function ae4(e2) {
  let t = le2(e2, "--psp-theme-name", ""), o = z4(le2(e2, "--psp--background-color", "#FFFFFF")), r3 = W4(le2(e2, "--psp-datagrid--pos-cell--color", "#338DCD")), n = W4(le2(e2, "--psp-datagrid--neg-cell--color", "#FF5942")), s3 = W4(st(r3[0], o)), i7 = W4(st(n[0], o)), l3 = W4(le2(e2, "--psp-active--color", "#ff0000")), a2 = kr(e2, l3[0]), c2 = [{ rgb: [i7[1], i7[2], i7[3]], offset: 0 }, { rgb: o, offset: 0.5 }, { rgb: [s3[1], s3[2], s3[3]], offset: 1 }];
  return { _theme: t, _plugin_background: o, _color: l3, _pos_fg_color: r3, _neg_fg_color: n, _pos_bg_color: s3, _neg_bg_color: i7, _default_bg_color_stops: c2, _series_palette: a2 };
}
async function Me3(e2, t, o, r3 = {}) {
  let n = await o.get_config(), s3 = ae4(e2);
  if (this?.model?._config) {
    let y5 = this.model._config, M4 = lt3(y5.group_by, n.group_by), b4 = (y5.group_by.length === 0 || n.group_by.length === 0) && M4, T5 = lt3(y5.split_by, n.split_by), G5 = lt3(y5.columns, n.columns), O5 = eo(y5.filter, n.filter), R5 = eo(y5.sort, n.sort), H4 = y5.group_rollup_mode !== n.group_rollup_mode, C5 = y5.split_rollup_mode !== n.split_rollup_mode, F7 = this.model._theme !== s3._theme;
    this._reset_scroll_top = M4, this._reset_scroll_left = T5, this._reset_select = M4 || T5 || O5 || R5 || G5, this._reset_column_size = H4 || C5 || T5 || M4 || G5 || F7 || b4;
  }
  let i7 = this.getAttribute("slot") ?? void 0, [l3, a2, c2, p6, m4, d3] = await Promise.all([t.schema(), o.num_rows(), o.schema(), o.expression_schema(), this.parentElement.getEditPort({ panel: i7 }), t.get_features()]), g3 = { ...c2, ...p6 }, u4 = { ...l3, ...p6 }, h3 = Object.fromEntries(Object.entries(n.windows ?? {}).map(([y5, M4]) => [y5, Cr(M4.aggregate, M4.column, u4)])), v3 = [], _2 = Array.from({ length: n.split_by.length + 1 }, () => []), f3 = [], E5 = [], w4 = this._edit_mode || "READ_ONLY";
  w4 === "EDIT" && !d3.update ? (w4 = "READ_ONLY", this._edit_mode = w4) : w4 === "SELECT_ROW_TREE" && n.group_by.length === 0 ? (w4 = "READ_ONLY", this._edit_mode = w4) : w4 === "SELECT_ROW_TREE" && n.group_rollup_mode === "flat" && (w4 = "SELECT_ROW", this._edit_mode = w4), this._edit_button !== void 0 && (this._edit_button.dataset.editMode = w4);
  let S5 = Object.assign(r3, { _panel: i7, _edit_port: m4, _view: o, _table: t, _expand_collapse: !!d3.expand_collapse, _update: !!d3.update, _table_schema: u4, _config: n, _num_rows: a2, _schema: g3, _window_schema: h3, _ids: [], ...s3, _column_paths: v3, _column_path_area: _2, _column_types: E5, _is_editable: f3, _edit_mode: w4, _row_height: this?._row_height, _word_wrap: this?._word_wrap ?? false, _column_menus: this?._column_menus ?? true, _command_column: this?._command_column ?? "left", _command_cells: this?._command_cells ?? true, _align: this?._align, _column_overrides: this?._column_overrides ?? /* @__PURE__ */ new Map(), _projected: /* @__PURE__ */ new Map(), _num_row_headers: 0, _unpersisted_widths: /* @__PURE__ */ new Set(), _selection_state: { selected_areas: [], dirty: false }, _row_header_types: n.group_by.map((y5) => u4[y5] ?? h3[y5]), _series_color_map: /* @__PURE__ */ new Map(), _series_color_seed: /* @__PURE__ */ new Map() });
  return e2.setDataListener($t(this.parentElement, this).bind(S5, e2), { virtual_mode: window.getComputedStyle(e2).getPropertyValue("--datagrid-virtual-mode")?.trim() || "both", column_classes: true }), S5;
}
var ce2 = ["READ_ONLY", "EDIT", "SELECT_ROW", "SELECT_COLUMN", "SELECT_REGION", "SELECT_ROW_TREE"];
function Mr(e2) {
  return e2 ? e2._config.group_by.length > 0 && e2._config.group_rollup_mode !== "flat" : false;
}
function Sr(e2, t) {
  return e2 === "SELECT_ROW_TREE" ? Mr(t) : e2 === "EDIT" ? t?._update ?? true : true;
}
function pe4(e2, t = true) {
  if (typeof e2 > "u") {
    let r3 = ce2.indexOf(this._edit_mode);
    do
      r3 = (r3 + 1) % ce2.length;
    while (!Sr(ce2[r3], this.model));
    e2 = ce2[r3];
  } else e2 === "EDIT" && this.model?._update === false && (e2 = "READ_ONLY");
  let o = this.getAttribute("slot") ?? void 0;
  this.parentElement?.setSelection?.(void 0, { panel: o }), this._edit_mode = e2, this.model && (this.model._edit_mode = e2, this.model._tree_selection_id = void 0, this.model._selection_state = { selected_areas: [], dirty: true }), t && this.parentElement?.restore?.({ plugin_config: { edit_mode: e2 } }, { panel: o }), this._edit_button !== void 0 && (this._edit_button.dataset.editMode = e2);
}
function Se3(e2) {
  typeof e2 > "u" && (e2 = !this._is_scroll_lock), this._is_scroll_lock = e2, this.classList.toggle("sub-cell-scroll-disabled", e2), this._scroll_lock !== void 0 && this._scroll_lock.classList.toggle("lock-scroll", e2);
}
var Te2 = { top: "none", right: "none", bottom: "none", left: "none" };
function at(e2, t, o) {
  let r3 = [];
  for (let n = 0; n < t && n < e2.length; n++) {
    let s3 = e2[n][o];
    if (s3 == null) break;
    r3.push(s3);
  }
  return r3;
}
function to(e2) {
  return e2[e2.length - 1]?.length ?? 0;
}
function ct3(e2, t) {
  return e2[e2.length - 1]?.[t] !== void 0;
}
function Tr(e2, t, o) {
  if (!ct3(e2, o)) return null;
  if (o + 1 >= to(e2)) return 0;
  if (!ct3(e2, o + 1)) return null;
  let r3 = at(e2, t, o), n = at(e2, t, o + 1), s3 = 0;
  for (; s3 < r3.length && s3 < n.length && r3[s3] === n[s3]; ) s3++;
  return s3 === r3.length && s3 === n.length ? t : s3;
}
function Rr(e2, t, o, r3) {
  return ct3(e2, o) ? r3 < at(e2, t, o).length : false;
}
function Re2(e2) {
  if (e2.single_header_row || e2.split_by_len === 0) return Te2;
  if (e2.is_corner) return e2.corner_needs_border ? { ...Te2, right: e2.y === 0 && e2.row_kind === "group" ? "miter-start" : e2.is_last_header_row ? "miter-end" : "full" } : Te2;
  if (e2.x === void 0) return Te2;
  let t = e2.x + e2.colspan - 1, o = Tr(e2.area, e2.split_by_len, t), r3 = t >= to(e2.area) - 1, n = "none";
  o !== null && (e2.row_kind === "group" ? o <= e2.y && (n = o === e2.y ? "miter-start" : "full") : (o < e2.split_by_len || r3) && (n = e2.is_last_header_row ? "miter-end" : "full"));
  let s3 = e2.row_kind === "group" && Rr(e2.area, e2.split_by_len, e2.x, e2.y) ? "miter-both" : "none";
  return { top: "none", right: n, bottom: s3, left: "none" };
}
var oo = { top: { full: "psp-b-t", "miter-start": "psp-b-t-ml", "miter-end": "psp-b-t-mr", "miter-both": "psp-b-t-mlr" }, right: { full: "psp-b-r", "miter-start": "psp-b-r-mt", "miter-end": "psp-b-r-mb", "miter-both": "psp-b-r-mtb" }, bottom: { full: "psp-b-b", "miter-start": "psp-b-b-ml", "miter-end": "psp-b-b-mr", "miter-both": "psp-b-b-mlr" }, left: { full: "psp-b-l", "miter-start": "psp-b-l-mt", "miter-end": "psp-b-l-mb", "miter-both": "psp-b-l-mtb" } };
var rs = Object.values(oo).map((e2) => Object.values(e2)).flat();
function Le2(e2, t) {
  for (let o of ["top", "right", "bottom", "left"]) {
    let r3 = t[o];
    for (let [n, s3] of Object.entries(oo[o])) e2.classList.toggle(s3, n === r3);
  }
}
function pt3(e2) {
  return e2._config.group_by.length - (e2._config.group_rollup_mode === "flat" ? 1 : 0);
}
function ro(e2, t, o) {
  let r3 = e2._config.split_by.length, n = t.length <= 1, s3 = pt3(e2);
  for (let i7 = 0; i7 < t.length; i7++) {
    let { cells: l3 } = t[i7], a2 = i7 < r3;
    for (let c2 = 0; c2 < l3.length; c2++) {
      let { element: p6, metadata: m4 } = l3[c2];
      if (!m4 || (p6.style.backgroundColor = "", p6.classList.toggle("psp-header-group", true), p6.classList.toggle("psp-header-leaf", false), p6.classList.toggle("psp-header-group-corner", m4.type === "corner"), p6.classList.toggle("psp-color-mode-bar", false), p6.classList.toggle("psp-color-mode-label-bar", false), p6.classList.toggle("psp-header-sort-asc", false), p6.classList.toggle("psp-header-sort-desc", false), p6.classList.toggle("psp-header-sort-col-asc", false), p6.classList.toggle("psp-header-sort-col-desc", false), p6.classList.toggle("psp-header-sort-abs-asc", false), p6.classList.toggle("psp-header-sort-abs-desc", false), p6.classList.toggle("psp-header-sort-abs-col-asc", false), p6.classList.toggle("psp-header-sort-abs-col-desc", false), p6.classList.toggle("psp-sort-enabled", false), p6.classList.toggle("psp-menu-enabled", false), p6.classList.toggle("psp-menu-open", false), !a2)) continue;
      let d3 = m4.type === "corner", g3 = m4.type === "column_header" && m4.x >= 0, u4 = Re2({ area: e2._column_path_area, split_by_len: r3, x: g3 ? m4.x : void 0, colspan: p6.colSpan || 1, y: i7, row_kind: "group", is_corner: d3, corner_needs_border: d3 && e2._config.group_by.length > 0 && m4.row_header_x === s3, is_last_header_row: false, single_header_row: n });
      Le2(p6, u4), p6.classList.toggle("psp-header-border", u4.right !== "none"), p6.classList.toggle("psp-is-top", u4.right === "miter-start");
    }
  }
}
function no(e2, t, o, r3) {
  let n = Array.from(t.children[0].children[0].children), s3 = n.length, i7 = o.hasAttribute("settings"), l3 = e2._config.split_by.length, a2 = s3 === l3 + 2;
  if (s3 <= 1 ? n[0]?.removeAttribute("id") : n.forEach((c2, p6) => {
    let m4 = p6 === l3 ? "psp-column-titles" : a2 && p6 === l3 + 1 ? "psp-column-edit-buttons" : null;
    m4 ? c2.setAttribute("id", m4) : c2.removeAttribute("id");
  }), o.classList.toggle("psp-menu-open", !!r3), i7 && l3 < s3) {
    let c2 = Array.from(n[l3].children), p6 = a2 ? Array.from(n[l3 + 1].children) : [];
    n.slice(0, l3).forEach((m4) => {
      Array.from(m4.children).forEach((d3) => {
        d3.classList.toggle("psp-menu-open", false);
      });
    });
    for (let m4 = 0; m4 < c2.length; m4++) {
      let d3 = c2[m4].textContent === r3;
      c2[m4].classList.toggle("psp-menu-open", d3), p6[m4]?.classList.toggle("psp-menu-open", d3);
    }
    if (e2._config.columns.length > 1) for (let m4 of t.querySelectorAll("td")) {
      let d3 = t.getMeta(m4);
      if (!d3?.column_header) continue;
      let g3 = d3.column_header[l3] === r3;
      m4.classList.toggle("psp-menu-open", g3);
    }
  }
}
function dt3(e2, t, o, r3, n, s3) {
  let i7 = pt3(e2), l3 = e2._config.split_by.length, a2 = e2._column_settings_selected_column;
  for (let { element: c2, metadata: p6 } of t.cells) {
    if (!p6 || p6.type === "body" || p6.type === "row_header") continue;
    let m4 = p6.column_header?.[e2._config.split_by.length], d3 = e2._config.sort.find((M4) => M4[0] === m4), g3 = typeof p6.x > "u", u4 = Re2({ area: e2._column_path_area, split_by_len: l3, x: g3 ? void 0 : p6.x, colspan: c2.colSpan || 1, y: l3 + (r3 ? 1 : 0), row_kind: r3 ? "menu" : "name", is_corner: p6.type === "corner", corner_needs_border: p6.type === "corner" && e2._config.group_by.length > 0 && p6.row_header_x === i7, is_last_header_row: n, single_header_row: s3 });
    Le2(c2, u4), c2.classList.toggle("psp-header-border", u4.right !== "none"), c2.classList.toggle("psp-header-group", false), c2.classList.toggle("psp-header-leaf", true);
    let h3 = g3 || !we3(e2, p6.x) ? void 0 : ve4(e2, p6.x), v3 = e2._config.split_by.length > 0 && h3 !== void 0 && h3 < e2._config.split_by.length;
    c2.classList.toggle("psp-split-total", v3 && h3 === 0), c2.classList.toggle("psp-split-subtotal", v3 && h3 > 0), c2.classList.toggle("psp-is-top", false), c2.classList.toggle("psp-header-corner", g3), c2.classList.toggle("psp-header-sort-asc", !r3 && !!d3 && d3[1] === "asc"), c2.classList.toggle("psp-header-sort-desc", !r3 && !!d3 && d3[1] === "desc"), c2.classList.toggle("psp-header-sort-col-asc", !r3 && !!d3 && d3[1] === "col asc"), c2.classList.toggle("psp-header-sort-col-desc", !r3 && !!d3 && d3[1] === "col desc"), c2.classList.toggle("psp-header-sort-abs-asc", !r3 && !!d3 && d3[1] === "asc abs"), c2.classList.toggle("psp-header-sort-abs-desc", !r3 && !!d3 && d3[1] === "desc abs"), c2.classList.toggle("psp-header-sort-abs-col-asc", !r3 && !!d3 && d3[1] === "col asc abs"), c2.classList.toggle("psp-header-sort-abs-col-desc", !r3 && !!d3 && d3[1] === "col desc abs");
    let _2 = j5(e2, p6), f3 = _2 === "integer" || _2 === "float", E5 = _2 === "string", w4 = _2 === "date", S5 = _2 === "datetime", y5 = !g3 && p6.x !== void 0 && p6.x >= e2._column_paths.length;
    if (c2.classList.toggle("psp-command-column", y5), c2.classList.toggle("psp-menu-enabled", (E5 || f3 || w4 || S5) && !g3 && !y5 && p6.column_header_y === e2._config.split_by.length + 1), c2.classList.toggle("psp-sort-enabled", (E5 || f3 || w4 || S5) && !g3 && !y5 && p6.column_header_y === e2._config.split_by.length), c2.classList.toggle("psp-is-width-override", o.saveColumnSizes()[p6.size_key] !== void 0), e2._config.columns.length > 1 && a2) {
      let M4 = p6.column_header?.[l3] === a2;
      c2.classList.toggle("psp-menu-open", M4);
    }
  }
}
var Lr = { desc: "asc", asc: void 0, "desc abs": "asc abs", "asc abs": void 0 };
var Dr = { desc: "asc", asc: void 0, "desc abs": "asc abs", "asc abs": void 0 };
async function so(e2, t, o, r3, n) {
  let s3 = t.getMeta(n);
  if (!s3?.column_header) return;
  let i7 = s3.column_header[e2._config.split_by.length], l3 = r3.ctrlKey || r3.metaKey || r3.altKey ? Pr : Ar, a2 = r3.shiftKey, c2 = l3(e2, `${i7}`, a2);
  await o.restore({ sort: c2 }, { panel: e2._panel });
}
function Pr(e2, t, o) {
  let r3 = [], n = false;
  for (let s3 of e2._config.sort) {
    let [i7, l3] = s3;
    if (i7 === t) {
      n = true;
      let a2 = io(e2, t, l3, o);
      a2 && r3.push(a2);
    } else r3.push(s3);
  }
  return n || r3.push([t, o ? "desc abs" : "desc"]), r3;
}
function Ar(e2, t, o) {
  for (let [r3, n] of e2._config.sort) if (r3 === t) {
    let s3 = io(e2, t, n, o);
    return s3 ? [s3] : [];
  }
  return [[t, o ? "desc abs" : "desc"]];
}
function io(e2, t, o, r3) {
  let s3 = e2._config.split_by.length > 0 ? Dr : Lr, i7 = o ? s3[o] : "desc";
  if (i7) return [t, i7];
}
async function mt3(e2, t, o) {
  let r3 = t.getMeta(o.target);
  if (!r3 || r3.type !== "row_header") return;
  if (!e2._expand_collapse) {
    console.warn("Expand/collapse not supported by this server");
    return;
  }
  let n = o.target.classList.contains("psp-tree-label-collapse"), s3 = r3.row_header.filter((i7, l3) => i7 !== void 0 && l3 !== e2._command_header_x).length;
  o.shiftKey && n ? e2._view.set_depth(s3 - 2) : o.shiftKey ? e2._view.set_depth(s3 - 1) : n ? e2._view.collapse(r3.y) : e2._view.expand(r3.y), e2._num_rows = await e2._view.num_rows(), e2._num_columns = await e2._view.num_columns(), t.draw();
}
function lo(e2, t, o) {
  return async (r3) => {
    let n = r3;
    if (n.which !== 1) return;
    let s3 = n.target;
    if (s3?.tagName !== "A") {
      for (; s3 && s3.tagName !== "TD" && s3.tagName !== "TH"; ) if (s3 = s3.parentElement, !s3 || !t.contains(s3)) return;
      if (s3) {
        if (s3.classList.contains("psp-tree-label")) {
          e2._edit_mode !== "SELECT_ROW_TREE" && mt3(e2, t, n);
          return;
        }
        if (s3.classList.contains("psp-menu-enabled")) {
          let l3 = t.getMeta(s3)?.column_header?.[e2._config.split_by.length];
          await o.toggleColumnSettings(`${l3}`, { panel: e2._panel });
        } else s3.classList.contains("psp-sort-enabled") && so(e2, t, o, n, s3);
      }
    }
  };
}
function ao(e2, t, o) {
  return async (r3) => {
    let n = r3;
    if (n.which !== 1) return;
    let s3 = n.target;
    if (s3?.tagName !== "A") {
      for (; s3 && s3.tagName !== "TD" && s3.tagName !== "TH"; ) if (s3 = s3.parentElement, !s3 || !t.contains(s3)) return;
      s3 && s3.classList.contains("psp-tree-label") && e2._edit_mode === "SELECT_ROW_TREE" && mt3(e2, t, n);
    }
  };
}
function co(e2) {
  return (t) => {
    let o = t;
    if (o.which !== 1) return;
    let r3 = o.target;
    for (; r3 && r3.tagName !== "TD" && r3.tagName !== "TH"; ) if (r3 = r3.parentElement, !r3 || !e2.contains(r3)) return;
    r3 && (r3.classList.contains("psp-tree-label") && o.offsetX < 26 || r3.classList.contains("psp-header-leaf") && !r3.classList.contains("psp-header-corner")) && o.stopImmediatePropagation();
  };
}
function ut3(e2, t, o) {
  let r3 = e2.getMeta(o);
  if (!r3) return false;
  let n = t._schema[t._column_paths[r3.x]], s3 = o.textContent || "", i7 = t._ids[r3.y - r3.y0][0];
  if (n === "float" || n === "integer") {
    let a2 = parseFloat(s3.replace(/,/g, ""));
    if (isNaN(a2)) return false;
    s3 = a2;
  } else if (n === "date" || n === "datetime") {
    let a2 = Date.parse(s3);
    if (isNaN(a2)) return false;
    s3 = a2;
  } else n === "boolean" && (s3 = s3 === "true" ? false : s3 === "false" ? true : null);
  let l3 = { __INDEX__: i7, [t._column_paths[r3.x]]: s3 };
  return t._table.update([l3], { port_id: t._edit_port, format: null }), true;
}
function po(e2, t, o, r3) {
  let n = t.getMeta(r3.target);
  if (n?.type === "body" || n?.type === "column_header") {
    let s3 = e2._is_editable[n.x], i7 = j5(e2, n) === "boolean", l3 = r3.target.classList.contains("psp-null");
    s3 && i7 && !l3 && ut3(t, e2, r3.target);
  }
}
var De2 = /* @__PURE__ */ new WeakMap();
function _t3(e2, t) {
  return e2 !== "boolean" && !(e2 === "string" && t === true);
}
function mo(e2, t, o) {
  let r3 = t.getMeta(o);
  if (r3?.type !== "body" || !B5(e2, void 0) || !e2._is_editable[r3.x]) return false;
  let n = j5(e2, r3), s3 = t[D5] || {}, i7 = r3.column_header?.[e2._config.split_by.length], l3 = i7 ? s3[i7.toString()]?.link : void 0;
  return _t3(n, l3);
}
function uo(e2, t) {
  let o = De2.get(e2);
  o !== t && (o?.removeAttribute("contenteditable"), t.setAttribute("contenteditable", "true"), De2.set(e2, t));
}
function _o(e2, t) {
  t.removeAttribute("contenteditable"), De2.get(e2) === t && De2.delete(e2);
}
function go(e2, t, o) {
  return (r3) => {
    let n = r3.target;
    n?.tagName === "TD" && mo(e2, t, n) && uo(t, n);
  };
}
function fe3(e2, t, o) {
  mo(e2, t, o) && uo(t, o);
}
function fo(e2, t, o, r3) {
  return (n) => {
    let i7 = n.target, l3 = false;
    if (B5(e2, o) && r3.has(t)) {
      i7.classList.remove("psp-error");
      let a2 = r3.get(t);
      r3.delete(t), a2.content !== i7.textContent && (ut3(t, e2, i7) || (i7.textContent = a2.content || "", i7.classList.add("psp-error"), i7.focus(), l3 = true));
    }
    !l3 && i7?.hasAttribute?.("contenteditable") && _o(t, i7);
  };
}
function ho(e2, t, o, r3) {
  return (n) => {
    let i7 = n.target;
    fe3(e2, t, i7);
    let l3 = t.getMeta(i7);
    if (l3?.type === "body") {
      let a2 = { x: l3.x, y: l3.y, content: i7.textContent || void 0 };
      r3.set(t, a2);
    }
  };
}
function bo(e2, t, o, r3) {
  let n = r3.get(o), s3 = o.getRootNode();
  if (n) {
    for (let { element: i7, metadata: l3 } of t) if (l3.type === "body" && l3.x === n.x && l3.y === n.y) {
      s3.activeElement !== i7 && (fe3(e2, o, i7), i7.focus({ preventScroll: true }));
      return;
    }
    document.activeElement !== document.body && o.contains(s3.activeElement) && s3.activeElement.blur();
  }
}
function yo(e2, t, o) {
  let r3 = t.get(e2);
  if (!r3) return false;
  let n = e2.getRootNode(), s3 = e2.children[0]?.children[1];
  if (s3) for (let i7 of s3.children) for (let l3 of i7.children) {
    let a2 = e2.getMeta(l3);
    if (a2?.type === "body" && a2.x === r3.x && a2.y === r3.y) return n.activeElement !== l3 && (o && fe3(o, e2, l3), l3.focus({ preventScroll: true })), true;
  }
  return document.activeElement !== document.body && e2.contains(n.activeElement) && n.activeElement.blur(), false;
}
function Hr(e2) {
  let t;
  return async function(o, r3, n, s3, i7, l3) {
    if (t) {
      await t;
      return;
    }
    let a2;
    t = new Promise((p6) => a2 = p6);
    let c2 = await e2(o, r3, n, s3, i7, l3);
    return t = void 0, a2(), c2;
  };
}
function vo(e2) {
  if (e2.isContentEditable) {
    let t = e2.getRootNode().getSelection()?.getRangeAt(0);
    if (!t) return 0;
    let o = t.cloneRange();
    return o.selectNodeContents(e2), o.setEnd(t.endContainer, t.endOffset), o.toString().length;
  } else return e2.selectionStart || 0;
}
var de2 = Hr(async function(e2, t, o, r3, n, s3) {
  let i7 = t.getMeta(r3);
  if (!i7 || i7.type !== "body") return;
  let l3 = e2._column_paths.length, a2 = e2._num_rows, c2 = o.get(t);
  if (!c2) return;
  i7.x + n < l3 && 0 <= i7.x + n && (c2.x = i7.x + n), i7.y + s3 < a2 && 0 <= i7.y + s3 && (c2.y = i7.y + s3);
  let p6 = Math.max(i7.x0 - 10, 0), m4 = Math.min(i7.x0 + 10, l3), d3 = Math.max(i7.y0 - 5, 0), g3 = Math.min(i7.y0 + 10, a2), u4 = i7.x0 + n, h3 = i7.y0 + s3;
  for (; !yo(t, o, e2) && u4 >= p6 && u4 < m4 && h3 >= d3 && h3 < g3; ) await t.scrollToCell(u4, h3), o.set(t, c2), u4 += n, h3 += s3;
});
function Nr(e2, t, o) {
  let r3 = t.getMeta(o);
  return r3?.type === "body" && r3.y === e2._num_rows - 1;
}
function wo(e2, t, o, r3, n) {
  let s3 = t.getRootNode().activeElement;
  switch (n.target.classList.remove("psp-error"), n.key) {
    case "Enter":
      n.preventDefault(), Nr(e2, t, s3) ? (s3.blur(), r3.delete(t)) : n.shiftKey ? de2(e2, t, r3, s3, 0, -1) : de2(e2, t, r3, s3, 0, 1);
      break;
    case "ArrowLeft":
      vo(s3) === 0 && (n.preventDefault(), de2(e2, t, r3, s3, -1, 0));
      break;
    case "ArrowUp":
      n.preventDefault(), de2(e2, t, r3, s3, 0, -1);
      break;
    case "ArrowRight":
      vo(s3) === (s3.textContent?.length || 0) && (n.preventDefault(), de2(e2, t, r3, s3, 1, 0));
      break;
    case "ArrowDown":
      n.preventDefault(), de2(e2, t, r3, s3, 0, 1);
      break;
    default:
  }
}
function Eo(e2, t, o, r3) {
  return (n) => {
    let s3 = n;
    if (e2._edit_mode === "EDIT") {
      if (!B5(e2, o)) return;
      wo(e2, t, o, r3, s3);
    }
  };
}
function Co(e2, t, o) {
  return (r3) => {
    let n = r3;
    if (e2._edit_mode === "EDIT") {
      if (!B5(e2, o)) return;
      po(e2, t, o, n);
    }
  };
}
function Vr(e2, t) {
  return t === null ? [e2, "is null", null] : [e2, "==", t];
}
async function he3({ _view: e2, _config: t }, o, r3) {
  let n = t.group_by, s3 = t.split_by, i7 = o >= 0 ? o : 0, l3 = i7 + 1, a2 = await e2.to_json({ start_row: i7, end_row: l3 }), p6 = a2.map((_2) => _2.__ROW_PATH__)[0] || [], m4 = p6.map((_2, f3) => Vr(n[f3], _2)), d3 = Object.keys(a2[0]).filter((_2) => !ne3(_2)), g3 = r3 === void 0 ? void 0 : d3[r3], u4 = { row: a2[0], column_names: [], config: { filter: [] }, row_path: p6, column_path: [] }, h3 = [];
  if (g3 && r3 !== void 0) {
    let _2 = await e2.column_paths({ start_col: r3, end_col: r3 + 1 });
    u4.column_names = [String(_2[_2.length - 1]?.[0] ?? "")], u4.value = a2[0][g3], u4.column_path = s3.map((f3, E5) => _2[E5]?.[0] ?? null), h3 = s3.map((f3, E5) => {
      let w4 = _2[E5]?.[0];
      return w4 == null ? void 0 : [f3, "==", w4];
    }).filter((f3) => f3 !== void 0);
  }
  let v3 = t.filter.concat(m4).concat(h3);
  return u4.config = { filter: v3 }, u4;
}
function xo(e2, t, o, r3) {
  return async (n) => {
    let s3 = n, i7 = t.getMeta(s3.target);
    if (!i7 || i7.type !== "body" || e2._edit_mode === "SELECT_ROW_TREE") return;
    let { x: l3, y: a2 } = i7, { row: c2, column_names: p6, config: m4 } = await he3(e2, a2, l3), d3 = r3.getAttribute("slot") ?? void 0;
    o.dispatchEvent(new CustomEvent("perspective-click", { bubbles: true, composed: true, detail: { row: c2, column_names: p6, config: m4, panel: d3 } }));
  };
}
var Ir = "mouse-selected-area";
var So = (e2, t, { className: o = Ir, selected: r3 = [], onSelect: n } = {}) => (e2.model._selection_state = { selected_areas: r3, dirty: true }, t.addEventListener("mousedown", Br(e2, t, o)), t.addEventListener("mouseover", Wr(e2, t, o)), t.addEventListener("mouseup", Gr(e2, t, o, n)), t.addStyleListener(() => te4(e2, t, o)), t);
function Pe2(e2) {
  return e2 === "SELECT_ROW_TREE";
}
var Br = (e2, t, o) => (r3) => {
  let n = r3;
  if (n.button === 0 && Ae(e2.model._edit_mode)) {
    if (Pe2(e2.model._edit_mode)) return;
    e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES = {};
    let s3 = t.getMeta(n.target);
    if (s3?.type === "body" && s3.x !== void 0 && s3.y !== void 0) {
      e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES = { x: s3.x, y: s3.y }, e2.model._selection_state.old_selected_areas = e2.model._selection_state.selected_areas, e2.model._selection_state.selected_areas = [];
      let i7 = { x0: s3.x, x1: s3.x, y0: s3.y, y1: s3.y };
      e2.model._selection_state.potential_selection = i7, te4(e2, t, o, e2.model._selection_state.selected_areas.concat([i7]));
      return;
    }
  }
  e2.model._selection_state.selected_areas = [];
};
var Wr = (e2, t, o) => (r3) => {
  let n = r3, s3 = e2.model._edit_mode;
  if (Ae(s3) && !Pe2(s3) && e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES && e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES.x !== void 0) {
    let i7 = t.getMeta(n.target);
    if (i7?.type === "body" && i7.x !== void 0 && i7.y !== void 0) {
      let l3 = { x0: Math.min(i7.x, e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES.x), x1: Math.max(i7.x, e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES.x), y0: Math.min(i7.y, e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES.y), y1: Math.max(i7.y, e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES.y) };
      e2.model._selection_state.potential_selection = l3, te4(e2, t, o, e2.model._selection_state.selected_areas.concat([l3]));
    }
  }
};
var Gr = (e2, t, o, r3) => (n) => {
  let s3 = n, i7 = e2.model._edit_mode;
  if (Ae(i7)) {
    let l3 = t.getMeta(s3.target);
    if (!l3) return;
    if (Pe2(i7)) {
      if ((l3.type === "body" || l3.type === "row_header") && l3.y !== void 0 && l3.y >= 0) {
        let a2 = e2.model._selection_state.selected_areas;
        if (a2.length > 0 && a2[0].y0 === l3.y) e2.model._selection_state.selected_areas = [], e2.model._selection_state.dirty = true, te4(e2, t, o, []), r3?.(a2[0], true);
        else {
          let p6 = { x0: 0, x1: 0, y0: l3.y, y1: l3.y };
          e2.model._selection_state.selected_areas = [p6], e2.model._selection_state.dirty = true, te4(e2, t, o), r3?.(p6, false);
        }
      }
      e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES = {}, e2.model._selection_state.potential_selection = void 0;
      return;
    }
    if ((e2.model._selection_state.old_selected_areas?.length ?? 0) > 0) {
      let a2 = e2.model._selection_state.old_selected_areas[0];
      if (a2.x0 === a2.x1 && a2.y0 === a2.y1 && l3?.type === "body" && a2.x0 === l3.x && a2.y0 === l3.y) {
        e2.model._selection_state.selected_areas = [], e2.model._selection_state.old_selected_areas = [], e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES = {}, e2.model._selection_state.potential_selection = void 0, te4(e2, t, o, []);
        return;
      }
    }
    if (e2.model._selection_state.old_selected_areas = [], e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES && e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES.x !== void 0 && l3?.type === "body" && l3.x !== void 0 && l3.y !== void 0) {
      let a2 = { x0: Math.min(l3.x, e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES.x), x1: Math.max(l3.x, e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES.x), y0: Math.min(l3.y, e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES.y), y1: Math.max(l3.y, e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES.y) };
      e2.model._selection_state.selected_areas.push(a2), te4(e2, t, o);
    }
    e2.model._selection_state.CURRENT_MOUSEDOWN_COORDINATES = {}, e2.model._selection_state.potential_selection = void 0;
  }
};
function ko(e2) {
  return e2 === "SELECT_COLUMN" || e2 === "SELECT_REGION";
}
function Mo(e2) {
  return e2 === "SELECT_ROW" || e2 === "SELECT_REGION" || e2 === "SELECT_ROW_TREE";
}
function Fr(e2, t, { x0: o, x1: r3, y0: n, y1: s3 }) {
  let i7 = {}, l3 = t.model._edit_mode;
  o !== void 0 && ko(l3) && (i7.start_col = o), r3 !== void 0 && ko(l3) && (i7.end_col = r3 + 1), n !== void 0 && Mo(l3) && (i7.start_row = n), s3 !== void 0 && Mo(l3) && (i7.end_row = s3 + 1), e2.setSelection(i7, { panel: t.model._panel });
}
var Ur = { SELECT_REGION: (e2, t) => t.x0 <= e2.x && e2.x <= t.x1 && t.y0 <= e2.y && e2.y <= t.y1, SELECT_ROW: (e2, t) => t.y0 <= e2.y && e2.y <= t.y1, SELECT_ROW_TREE: (e2, t) => t.y0 <= e2.y && e2.y <= t.y1, SELECT_COLUMN: (e2, t) => t.x0 <= e2.x && e2.x <= t.x1 };
function Ae(e2) {
  return e2 === "SELECT_REGION" || e2 === "SELECT_ROW" || e2 === "SELECT_COLUMN" || e2 === "SELECT_ROW_TREE";
}
var te4 = (e2, t, o, r3) => {
  let n = e2.model._edit_mode;
  if (Ae(n)) if (r3 = e2.model._selection_state.selected_areas.slice(0), e2.model._selection_state.potential_selection && r3.push(e2.model._selection_state.potential_selection), r3.length > 0) Fr(e2.parentElement, e2, r3[0]), Pe2(n) || $r(e2, t, r3, o);
  else {
    e2.parentElement.setSelection(void 0, { panel: e2.model._panel });
    let s3 = t.querySelectorAll("tbody td");
    for (let i7 of s3) i7.classList.remove(o);
  }
  else if (e2.model._selection_state.dirty) {
    e2.model._selection_state.dirty = false;
    let s3 = t.querySelectorAll("tbody td, tbody th");
    for (let i7 of s3) i7.classList.remove(o);
  }
};
var $r = (e2, t, o, r3) => {
  let n = Ur[e2.model._edit_mode];
  if (!n || o.length === 0) return;
  let s3 = t.querySelectorAll("tbody td");
  for (let i7 of s3) {
    let l3 = t.getMeta(i7);
    if (!l3 || l3.type !== "body") continue;
    let a2 = false;
    for (let c2 of o) c2.x0 !== void 0 && c2.y0 !== void 0 && c2.x1 !== void 0 && c2.y1 !== void 0 && n(l3, c2) && (a2 = true, e2.model._selection_state.dirty = true, i7.classList.add(r3));
    a2 || i7.classList.remove(r3);
  }
};
function To(e2, t, o, r3) {
  if (t.length === 0) return;
  let n = e2._column_settings_selected_column, s3 = t.length, i7 = r3.hasAttribute("settings") && r3.getActivePanel() === e2._panel, l3 = e2._config.split_by.length, a2 = s3 === l3 + 2;
  if (s3 <= 1 ? t[0]?.row.removeAttribute("id") : t.forEach(({ row: d3 }, g3) => {
    let u4 = g3 === l3 ? "psp-column-titles" : a2 && g3 === l3 + 1 ? "psp-column-edit-buttons" : null;
    u4 ? d3.setAttribute("id", u4) : d3.removeAttribute("id");
  }), r3.classList.toggle("psp-menu-open", !!n), i7 && l3 < s3) {
    let d3 = t[l3], g3 = a2 ? t[l3 + 1] : void 0;
    if (d3) {
      t.slice(0, l3).forEach(({ cells: u4 }) => {
        u4.forEach(({ element: h3 }) => {
          h3.classList.toggle("psp-menu-open", false);
        });
      });
      for (let u4 = 0; u4 < d3.cells.length; u4++) {
        let h3 = d3.cells[u4]?.element;
        if (!h3) continue;
        let v3 = h3.textContent === n;
        h3.classList.toggle("psp-menu-open", v3), g3?.cells[u4]?.element.classList.toggle("psp-menu-open", v3);
      }
    }
  }
  let c2 = s3 <= 1, p6 = e2._config.split_by.length, m4 = e2._config.split_by.length + 1;
  if (p6 < t.length) {
    let d3 = t[p6];
    d3 && dt3(e2, d3, o, false, m4 >= t.length, c2);
  }
  if (m4 < t.length) {
    let d3 = t[m4];
    d3 && dt3(e2, d3, o, true, true, c2);
  }
}
var jr = ["top-left", "top", "top-right", "left", "center", "right", "bottom-left", "bottom", "bottom-right"];
var Yr = ["none", "left", "right", "tree"];
function Ro(e2) {
  return Yr.includes(e2) ? e2 : "left";
}
function Oe2(e2) {
  return jr.includes(e2) ? e2 : void 0;
}
var qr = ["inherit", "monospace", "sans-serif", "serif", "system-ui"];
function He2(e2) {
  return qr.includes(e2) ? e2 : `"${e2.replace(/["\\]/g, "\\$&")}"`;
}
var Kr = 1.2;
function Ne2(e2, t) {
  return Math.max(1, Math.floor((e2 - 1) / (t * Kr)));
}
function $5(e2, t, o) {
  let r3 = window.getComputedStyle(e2).getPropertyValue(t), n = parseFloat(r3);
  return Number.isFinite(n) && n > 0 ? Math.round(n) : o;
}
var Jr = "rgba(0, 0, 0, 0)";
function Xr(e2) {
  let t = window.getComputedStyle(e2), o = (i7) => {
    let l3 = t.getPropertyValue(i7).trim();
    return l3 === Jr ? "" : l3;
  }, r3 = o("--psp-datagrid--zebra--color");
  if (r3) return P5(z4(r3));
  let n = z4(o("--psp--background-color") || "#ffffff"), s3 = z4(o("--psp--color") || "#000000");
  return P5(nt(n, s3, 0.06));
}
function Qr(e2, t) {
  return t && typeof t == "object" ? t : { zebra_rows: e2._zebra_rows };
}
function gt3(e2, t) {
  let o = Qr(this, t), r3 = [];
  r3.push({ kind: "Enum", key: "edit_mode", default: "READ_ONLY", variants: [...this.model?._update === false ? [] : [{ value: "EDIT", label: "Edit" }], { value: "READ_ONLY", label: "Read-only" }, { value: "SELECT_ROW", label: "Row Select" }, { value: "SELECT_COLUMN", label: "Column Select" }, { value: "SELECT_REGION", label: "Region Select" }, { value: "SELECT_ROW_TREE", label: "Tree Select" }] }), r3.push({ kind: "Bool", key: "scroll_lock", default: false }), r3.push({ kind: "Bool", key: "column_menus", default: true }), ge4(this, "datagrid-row") && r3.push({ kind: "Enum", key: "command_column", default: "left", variants: [{ value: "none", label: "None" }, { value: "left", label: "Left" }, { value: "tree", label: "After Tree" }, { value: "right", label: "Right" }] }), ge4(this, "datagrid-cell") && r3.push({ kind: "Bool", key: "command_cells", default: true }), r3.push({ kind: "Group", key: "font", fields: [{ kind: "Font", key: "font_family", default: "inherit", size: { key: "font_size", default: $5(this, "font-size", 12), min: 4, max: 96, step: 1 }, bold: { key: "bold", default: false }, italic: { key: "italic", default: false } }, { kind: "Alignment", key: "align" }, { kind: "Bool", key: "word_wrap", default: false }] });
  let n = [{ kind: "Number", key: "row_height", default: $5(this, "--psp-datagrid--row--height", 23), min: 8, max: 512, step: 1 }, { kind: "Number", key: "zebra_rows", default: 0, min: 0, step: 1 }];
  return (typeof o.zebra_rows == "number" ? o.zebra_rows : 0) >= 1 && n.push({ kind: "Color", key: "zebra_color", default: Xr(this) }), r3.push({ kind: "Group", key: "rows", fields: n }), { fields: r3 };
}
function Lo(e2, t, o, [, , , , , r3, n], [, , , , , s3, i7]) {
  let l3 = e2._ids?.[t.dy ?? 0]?.join("|"), a2 = e2._column_paths[t.x];
  if (e2.last_reverse_columns?.has(a2) && e2.last_reverse_ids?.has(l3)) {
    let c2 = e2.last_reverse_ids?.get(l3), p6 = e2.last_reverse_columns.get(a2);
    e2._is_old_viewport ? p6 !== void 0 && c2 !== void 0 && e2.last_meta?.[p6]?.[c2] !== void 0 && e2.last_meta[p6][c2] > (t.user ?? 0) ? (o.style.setProperty("--pulse--background-color-start", s3), o.style.setProperty("--pulse--background-color-end", i7), o.style.animationName === "pulse_neg" ? o.style.animation = "pulse_neg2 0.5s linear" : o.style.animation = "pulse_neg 0.5s linear") : p6 !== void 0 && c2 !== void 0 && e2.last_meta?.[p6]?.[c2] !== void 0 && e2.last_meta[p6][c2] < (t.user ?? 0) ? (o.style.setProperty("--pulse--background-color-start", r3), o.style.setProperty("--pulse--background-color-end", n), o.style.animationName === "pulse_pos" ? o.style.animation = "pulse_pos2 0.5s linear" : o.style.animation = "pulse_pos 0.5s linear") : c2 !== t.dy && (o.style.animation = "") : o.style.animation = "";
  } else o.style.animation = "";
}
var Do = 1;
function Zr(e2, t, o, r3, n) {
  if (r3 == null) {
    e2.style.removeProperty("--psp-bar-size"), e2.removeAttribute("data-psp-label");
    return;
  }
  let s3 = Math.max(0, Math.min(Do, Math.abs(r3 / t.fg_gradient) * Do)), i7 = Number.isFinite(s3) ? (s3 * 100).toFixed(2) : "100";
  if (e2.style.setProperty("--psp-bar-size", `${i7}%`), e2.style.setProperty("--psp-bar-anchor", r3 < 0 ? "100%" : "0%"), n) {
    let l3 = Ce2(o ?? "float", t);
    e2.setAttribute("data-psp-label", l3 ? l3.format(r3) : String(r3));
  } else e2.removeAttribute("data-psp-label");
}
function Po(e2) {
  return ["", e2._plugin_background[0], e2._plugin_background[1], e2._plugin_background[2], "", "", ""];
}
function Ao(e2, t, o, r3, n, s3) {
  let i7 = Y5("float", t?.fg_mode) ?? "color", l3 = q5("float", t?.bg_mode) ?? "disabled", a2 = (n.user ?? 0) > 0, c2 = (n.user ?? 0) < 0, p6 = t?.pos_bg_color ?? e2._pos_bg_color, m4 = t?.neg_bg_color ?? e2._neg_bg_color, d3 = a2 ? p6 : c2 ? m4 : Po(e2);
  if (r3.style.position = "", n._is_hidden_by_aggregate_depth) r3.style.animation = "", r3.style.backgroundColor = "";
  else switch (l3) {
    case "color":
      r3.style.animation = "", r3.style.backgroundColor = d3[0];
      break;
    case "gradient": {
      let f3 = t?.bg_stops ?? e2._default_bg_color_stops, E5 = 0.5 + 0.5 * Math.max(-1, Math.min(1, (n.user ?? 0) / (t?.bg_gradient ?? 1))), w4 = Kt(f3, E5);
      r3.style.animation = "", r3.style.color = ee3(w4), r3.style.backgroundColor = P5(w4);
      break;
    }
    case "pulse":
      Lo(e2, n, r3, p6, m4), r3.style.backgroundColor = "";
      break;
    case "disabled":
      r3.style.animation = "", r3.style.backgroundColor = "";
      break;
  }
  let g3 = t?.pos_fg_color ?? e2._pos_fg_color, u4 = t?.neg_fg_color ?? e2._neg_fg_color, h3 = a2 ? g3 : c2 ? u4 : Po(e2), [v3, , , , _2] = h3;
  if (n._is_hidden_by_aggregate_depth) {
    r3.style.backgroundColor = "", r3.style.color = "", r3.style.removeProperty("--psp-bar-size"), r3.removeAttribute("data-psp-label");
    return;
  }
  switch (i7) {
    case "disabled":
      if (l3 === "color") {
        let f3 = e2._plugin_background;
        r3.style.color = ee3(ie4([d3[1], d3[2], d3[3], 1], f3));
      } else l3 !== "gradient" && (r3.style.color = "");
      break;
    case "bar":
    case "label-bar":
      r3.style.color = "", r3.style.setProperty("--psp-label-bar-color", _2), r3.style.setProperty("--psp-label-bar-bg", v3), Zr(r3, t, o, n.user, i7 === "label-bar");
      break;
    case "color":
      r3.style.color = v3;
      break;
  }
}
function en(e2, t, o) {
  e2._series_color_map.has(t) || (e2._series_color_map.set(t, /* @__PURE__ */ new Map()), e2._series_color_seed.set(t, 0));
  let r3 = e2._series_color_map.get(t);
  if (!r3.has(o)) {
    let n = e2._series_color_seed.get(t) ?? 0;
    r3.set(o, n), e2._series_color_seed.set(t, n + 1);
  }
  return r3.get(o) ?? 0;
}
function Oo(e2, t, o) {
  let r3 = t && t.length > 0 ? t : e2._series_palette;
  return r3[o % r3.length];
}
function Ho(e2, t, o, r3) {
  let n = Y5("string", t?.fg_mode) ?? "disabled", s3 = q5("string", t?.bg_mode) ?? "disabled", i7 = r3.column_header?.[e2._config.split_by.length], l3 = r3.user, a2 = "", c2 = "";
  if (!r3._is_hidden_by_aggregate_depth && l3 !== null && l3 !== void 0 && i7) {
    let p6 = n === "series" || s3 === "series" ? en(e2, i7, l3) : 0, m4;
    if (s3 === "color") {
      let [d3, g3, u4, h3] = t?.bg_color ?? e2._color;
      c2 = d3, m4 = [g3, u4, h3];
    } else s3 === "series" && (c2 = Oo(e2, t?.bg_palette, p6), m4 = z4(c2));
    if (n === "color") a2 = (t?.fg_color ?? e2._color)[0];
    else if (n === "series") a2 = Oo(e2, t?.fg_palette, p6);
    else if (m4 !== void 0) {
      let d3 = e2._plugin_background;
      a2 = ee3(ie4([...m4, 1], d3));
    }
  }
  o.style.color = a2, o.style.backgroundColor = c2, t?.link === true && o.children[0] && (o.children[0].style.color = a2);
}
function No(e2, t, o, r3) {
  let n = Y5("datetime", t?.fg_mode) ?? "disabled", s3 = q5("datetime", t?.bg_mode) ?? "disabled", i7 = "", l3 = "";
  if (!r3._is_hidden_by_aggregate_depth && r3.user !== null) {
    if (s3 === "color") {
      let [a2, c2, p6, m4] = t?.bg_color ?? e2._color;
      if (l3 = a2, n !== "color") {
        let d3 = e2._plugin_background;
        i7 = ee3(ie4([c2, p6, m4, 1], d3));
      }
    }
    n === "color" && (i7 = (t?.fg_color ?? e2._color)[0]);
  }
  o.style.color = i7, o.style.backgroundColor = l3;
}
function zo(e2, t, o, r3) {
  if (r3._is_hidden_by_aggregate_depth) o.style.backgroundColor = "", o.style.color = "";
  else {
    let [n] = r3.user === true ? e2._pos_fg_color : r3.user === false ? e2._neg_fg_color : ["", 0, 0, 0, ""];
    o.style.backgroundColor = "", o.style.color = n;
  }
}
function Vo(e2, t, o) {
  let r3 = o.row_header_x ?? 0, n = e2._command_header_x, s3 = n !== void 0 && r3 === n;
  if (t.classList.toggle("psp-command-header", s3), t.classList.toggle("psp-command-header-leaf", s3 && !!e2._command_header_leaf), s3) {
    for (let v3 of ["psp-tree-spacer", "psp-tree-label", "psp-tree-label-expand", "psp-tree-label-collapse", "psp-tree-leaf"]) t.classList.remove(v3);
    return;
  }
  let i7 = n !== void 0 && r3 > n ? r3 - 1 : r3, l3 = n === void 0 ? o.row_header : o.row_header?.filter((v3, _2) => _2 !== n), a2 = e2._config.group_rollup_mode === "flat", c2 = a2 ? i7 : tn(l3), p6 = o.value !== void 0 && i7 === c2, m4 = !a2 && i7 < c2, d3 = i7 >= e2._config.group_by.length, g3 = e2._row_header_depths, h3 = (g3?.depths[(o.y ?? 0) - g3.start_row + 1] ?? 0) > i7 + 1;
  t.classList.toggle("psp-tree-spacer", m4), t.classList.toggle("psp-tree-label", p6 && !d3), t.classList.toggle("psp-tree-label-expand", p6 && !d3 && !h3), t.classList.toggle("psp-tree-label-collapse", p6 && !d3 && h3), t.classList.toggle("psp-tree-leaf", p6 && d3);
}
function tn(e2) {
  if (!e2) return -1;
  for (let t = e2.length - 1; t >= 0; t--) if (e2[t] !== void 0) return t;
  return -1;
}
var Io = /* @__PURE__ */ new WeakMap();
var ze2 = { left: "flex-start", top: "flex-start", center: "center", middle: "center", right: "flex-end", bottom: "flex-end" };
function on(e2) {
  return `text-align:${e2.text};--psp-label-justify:${ze2[e2.text]};--psp-label-align:${ze2[e2.vertical]}`;
}
function Bo(e2, t) {
  let o = e2.getRootNode();
  if (!o || !o.adoptedStyleSheets) return;
  let r3 = Io.get(e2);
  r3 || (r3 = { table: void 0, scope: void 0, sheet: new CSSStyleSheet(), rules: /* @__PURE__ */ new Map() }, Io.set(e2, r3));
  let n = e2.children[0];
  if (n && (r3.table !== n && (r3.table = n, r3.scope = Array.from(n.classList).find((s3) => s3.startsWith("rt-scope-")), r3.sheet.replaceSync(""), r3.rules.clear()), !!r3.scope)) {
    o.adoptedStyleSheets.includes(r3.sheet) || (o.adoptedStyleSheets = [...o.adoptedStyleSheets, r3.sheet]);
    for (let [s3, i7] of t) {
      let l3 = r3.rules.get(s3);
      if (l3 === void 0) {
        let a2 = r3.scope, c2 = r3.sheet.cssRules.length;
        r3.sheet.insertRule(`.${a2} td.rt-col-${s3}, .${a2} th.rt-col-${s3}{${on(i7)}}`, c2), r3.sheet.insertRule(`.${a2} tbody td.rt-col-${s3}, .${a2} tbody th.rt-col-${s3}{vertical-align:${i7.vertical}}`, c2 + 1), l3 = { text: r3.sheet.cssRules[c2], vertical: r3.sheet.cssRules[c2 + 1], last: i7 }, r3.rules.set(s3, l3);
      } else l3.last.text !== i7.text && (l3.text.style.textAlign = i7.text, l3.text.style.setProperty("--psp-label-justify", ze2[i7.text])), l3.last.vertical !== i7.vertical && (l3.vertical.style.verticalAlign = i7.vertical, l3.text.style.setProperty("--psp-label-align", ze2[i7.vertical])), l3.last = i7;
    }
  }
}
var rn = 1;
var nn = 2;
var sn = 4;
var ln = 8;
var an = 16;
var cn = 32;
var pn = 64;
var dn = { text: "left", vertical: "middle" };
function mn(e2, t) {
  return e2 === void 0 ? { text: t ? "right" : "left", vertical: "middle" } : { text: e2.endsWith("left") ? "left" : e2.endsWith("right") ? "right" : "center", vertical: e2.startsWith("top") ? "top" : e2.startsWith("bottom") ? "bottom" : "middle" };
}
function un(e2, t) {
  return Array.isArray(e2) && Array.isArray(t) ? e2.length === t.length && e2.every((o, r3) => o === t[r3]) : e2 === t;
}
function _n(e2, t) {
  if (!e2) return 0;
  let o = 0;
  for (let r3 = 0; r3 < e2.length; r3++) e2[r3] !== void 0 && r3 !== t && o++;
  return o;
}
function Wo(e2, t, o, r3, n, s3, i7) {
  let l3 = n ? e2._tree_selection_id : void 0;
  i7.classList.toggle("flat-group-rollup-mode", e2._config.group_rollup_mode === "flat");
  let a2 = e2._config.group_rollup_mode === "rollup", c2 = e2._config.split_by.length, p6 = e2._config.group_by.length, m4 = e2._pos_bg_color, d3 = e2._config.columns.length > 1 ? e2._column_settings_selected_column : void 0, g3 = /* @__PURE__ */ new Map(), u4, h3 = (_2, f3, E5, w4) => {
    let S5 = g3.get(_2);
    if (S5) return S5;
    let y5 = E5 ? o[E5.toString()] : void 0, M4 = f3 === void 0 || !we3(e2, f3) ? void 0 : ve4(e2, f3), b4 = c2 > 0 && M4 !== void 0 && M4 < c2, T5 = w4 === "integer" || w4 === "float", G5 = T5 && (y5?.bg_mode === "gradient" || y5?.bg_mode === "pulse" || y5?.fg_mode === "bar" || y5?.fg_mode === "label-bar") || w4 === "string" && (y5?.fg_mode === "series" || y5?.bg_mode === "series" || y5?.link === true), O5 = s3 && !!e2._is_editable[f3 ?? -1], R5 = typeof y5?.font_size == "number" && y5.font_size > 0 ? y5.font_size : void 0;
    return R5 !== void 0 && (u4 ??= e2._row_height ?? $5(i7, "--psp-datagrid--row--height", 23)), S5 = { plugin: y5, type: w4, is_numeric: T5, is_rollup_col: b4, n_split_levels: M4, column_name: E5?.toString(), mods: (r3 ? 1 : 0) | (n ? 2 : 0) | (O5 ? 4 : 0) | (b4 ? 8 : 0) | (M4 === 0 ? 16 : 0) | (E5 === d3 ? 32 : 0) | (d3 ? 64 : 0) | (a2 ? 128 : 0) | (T5 && y5?.fg_mode === "bar" ? 256 : 0) | (T5 && y5?.fg_mode === "label-bar" ? 512 : 0), value_styled: G5, text_editable: O5 && _t3(w4, y5?.link), boolean_editable: O5 && w4 === "boolean", font_family: y5?.font_family !== void 0 && y5.font_family !== "inherit" ? He2(y5.font_family) : void 0, font_size: R5 !== void 0 ? `${R5}px` : void 0, font_weight: y5?.bold === void 0 ? void 0 : y5.bold ? "bold" : "normal", font_style: y5?.italic === void 0 ? void 0 : y5.italic ? "italic" : "normal", wrap_lines: R5 !== void 0 ? String(Ne2(u4, R5)) : void 0, align: y5?.align }, g3.set(_2, S5), S5;
  }, v3 = /* @__PURE__ */ new Map();
  for (let { element: _2, metadata: f3, isHeader: E5 } of t) {
    let w4 = f3.column_header?.[c2]?.toString?.() ?? f3.column_header?.[c2], S5 = f3.x, y5 = j5(e2, f3), M4 = S5 ?? -1 - (f3.row_header_x ?? 0), b4 = h3(M4, S5, w4, y5), T5 = f3.size_key;
    T5 !== void 0 && !v3.has(T5) && v3.set(T5, E5 ? dn : mn(b4.align ?? e2._align, b4.is_numeric));
    let G5 = a2 && ((C5) => C5 === 0 ? false : C5 - 1 < Math.min(p6, b4.plugin?.aggregate_depth || 0))(_n(f3.row_header, e2._command_header_x));
    f3._is_hidden_by_aggregate_depth = G5;
    let O5 = (f3.value === null ? rn : 0) | (f3.user === null ? nn : 0) | (G5 ? sn : 0);
    if (b4.is_numeric || b4.type === "boolean") {
      let C5 = f3.user;
      O5 |= (C5 === true || C5 > 0 ? ln : 0) | (C5 === false || C5 < 0 ? an : 0);
    }
    let R5 = false, H4 = false;
    if (n && l3) {
      let C5 = e2._ids[(f3.y ?? 0) - (f3.y0 ?? 0)], F7 = true;
      for (let J5 = 0; J5 < l3.length; J5++) if (!un(l3[J5], C5[J5])) {
        F7 = false;
        break;
      }
      R5 = C5.length === l3.length && F7, H4 = C5.length !== l3.length && F7, O5 |= (R5 ? cn : 0) | (H4 ? pn : 0);
    }
    if (!E5) {
      let C5 = f3.__psp_style_memo;
      if (C5 !== void 0 && C5.plugin === b4.plugin && C5.type === b4.type && C5.mods === b4.mods && C5.theme === m4 && C5.bits === O5 && (!b4.value_styled || C5.value === f3.user)) continue;
      C5 !== void 0 ? (C5.plugin = b4.plugin, C5.type = b4.type, C5.mods = b4.mods, C5.theme = m4, C5.bits = O5, C5.value = b4.value_styled ? f3.user : void 0) : f3.__psp_style_memo = { plugin: b4.plugin, type: b4.type, mods: b4.mods, theme: m4, bits: O5, value: b4.value_styled ? f3.user : void 0 };
    }
    _2.classList.toggle("psp-split-total", b4.is_rollup_col && b4.n_split_levels === 0), _2.classList.toggle("psp-split-subtotal", b4.is_rollup_col && b4.n_split_levels > 0), b4.is_numeric ? Ao(e2, b4.plugin, b4.type, _2, f3, r3) : b4.type === "boolean" ? zo(e2, b4.plugin, _2, f3) : b4.type === "string" ? Ho(e2, b4.plugin, _2, f3) : b4.type === "date" || b4.type === "datetime" ? No(e2, b4.plugin, _2, f3) : (_2.style.backgroundColor = "", _2.style.color = ""), _2.classList.toggle("psp-bool-type", b4.type === "boolean" && f3.user !== null), _2.classList.toggle("psp-null", f3.value === null), _2.classList.toggle("psp-menu-open", !!d3 && w4 === d3), _2.classList.toggle("psp-color-mode-bar", b4.plugin?.fg_mode === "bar" && b4.is_numeric), _2.classList.toggle("psp-color-mode-label-bar", b4.plugin?.fg_mode === "label-bar" && b4.is_numeric), E5 && Vo(e2, _2, f3), _2.classList.toggle("psp-select-region-inactive", false), n && (l3 ? E5 && f3.type === "row_header" && f3.row_header_x !== void 0 && f3.row_header_x < e2._ids[(f3.y ?? 0) - (f3.y0 ?? 0)].length ? _2.classList.toggle("psp-select-region", false) : (_2.classList.toggle("psp-select-region", R5), _2.classList.toggle("psp-select-region-inactive", H4)) : _2.classList.toggle("psp-select-region", false)), !E5 && f3.type === "body" && (_2.style.fontFamily = b4.font_family ?? "", _2.style.fontSize = b4.font_size ?? "", _2.style.fontWeight = b4.font_weight ?? "", _2.style.fontStyle = b4.font_style ?? "", b4.wrap_lines !== void 0 ? _2.style.setProperty("--psp-datagrid--wrap-lines", b4.wrap_lines) : _2.style.removeProperty("--psp-datagrid--wrap-lines"), _2.classList.toggle("psp-editable", b4.text_editable), b4.text_editable ? _2.setAttribute("tabindex", "-1") : _2.hasAttribute("tabindex") && _2.removeAttribute("tabindex"), _2.classList.toggle("boolean-editable", b4.boolean_editable && f3.user !== null));
  }
  Bo(i7, v3);
}
function Go(e2, t, o, r3, n) {
  return function() {
    let i7 = o[D5] || {}, l3 = r3.hasAttribute("settings"), a2 = t._edit_mode === "SELECT_ROW_TREE", c2 = B5(t, r3), p6 = B5(t, r3, true);
    e2.classList.toggle("edit-mode-allowed", p6);
    let m4 = [], d3 = [], g3 = e2._zebra_rows, u4 = o.children[0]?.children[1];
    if (u4) for (let v3 of u4.children) {
      let _2;
      for (let f3 of v3.children) {
        let E5 = o.getMeta(f3);
        if (E5 && (E5.type === "body" || E5.type === "row_header")) {
          _2 ??= E5.y;
          let w4 = f3.tagName === "TH";
          m4.push({ element: f3, metadata: E5, isHeader: w4 });
        }
      }
      v3.classList.toggle("psp-zebra", g3 >= 1 && _2 !== void 0 && Math.floor(_2 / g3) % 2 === 1);
    }
    let h3 = o.children[0]?.children[0];
    if (h3) for (let v3 of h3.children) {
      let _2 = { row: v3, cells: [] };
      for (let f3 of v3.children) {
        let E5 = o.getMeta(f3);
        _2.cells.push({ element: f3, metadata: E5 });
      }
      d3.push(_2);
    }
    Wo(t, m4, i7, l3, a2, c2, o), ro(t, d3, o), To(t, d3, o, r3), bo(t, m4, o, n);
  };
}
async function Fo(e2) {
  let t = this.parentElement, o = this.getAttribute("slot") ?? void 0, r3 = await t.getTable({ panel: o });
  if (this._initialized) await Me3.call(this, this.regular_table, r3, e2, this.model);
  else {
    if (this.innerHTML = "", this.shadowRoot.appendChild(this.regular_table), this.model = await Me3.call(this, this.regular_table, r3, e2), !this.model) return;
    let n = this.model, s3 = this.regular_table, i7 = async (a2, c2) => {
      if (n._edit_mode !== "SELECT_ROW_TREE") return;
      if (c2) n._tree_selection_id = void 0;
      else {
        let h3 = a2.y0 - (n._last_window?.start_row ?? 0);
        h3 >= 0 && h3 < n._ids.length && (n._tree_selection_id = n._ids[h3]);
      }
      let p6 = n._config.group_by.length > 0 ? void 0 : 0, { row: m4, column_names: d3, config: g3 } = await he3(n, a2.y0, p6), u4;
      if (c2) {
        if ((n._last_insert_configs?.length || 0) > 0) u4 = new i6(false, m4, [], n._last_insert_configs ?? [], []);
        else throw new Error("Suprious deselect");
        n._last_insert_configs = void 0;
      } else u4 = new i6(true, m4, d3, n._last_insert_configs ?? [], [g3]), n._last_insert_configs = [g3];
      u4.panel = this.getAttribute("slot") ?? void 0, await s3.draw({ preserve_width: true }), t.dispatchEvent(new CustomEvent("perspective-global-filter", { bubbles: true, composed: true, detail: u4 }));
    };
    Bt(this, this.regular_table), So(this, this.regular_table, { className: "psp-select-region", onSelect: i7 });
    let l3 = /* @__PURE__ */ new WeakMap();
    this.regular_table.addStyleListener(Go(this, this.model, this.regular_table, t, l3)), this.regular_table.addEventListener("click", co(this.regular_table)), this.regular_table.addEventListener("click", xo(this.model, this.regular_table, t, this)), this.regular_table.addEventListener("mousedown", lo(this.model, this.regular_table, t)), this.regular_table.addEventListener("dblclick", ao(this.model, this.regular_table, t)), this.regular_table.addEventListener("click", Co(this.model, this.regular_table, t)), this.regular_table.addEventListener("pointerdown", go(this.model, this.regular_table, t)), this.regular_table.addEventListener("focusin", ho(this.model, this.regular_table, t, l3)), this.regular_table.addEventListener("focusout", fo(this.model, this.regular_table, t, l3)), this.regular_table.addEventListener("keydown", Eo(this.model, this.regular_table, t, l3)), t.addEventListener("perspective-toggle-column-settings", (a2) => {
      let c2 = a2;
      if (!this.isConnected) return;
      let m4 = c2.detail.open && a2.target === this ? c2.detail.column_name ?? void 0 : void 0;
      no(this.model, this.regular_table, t, m4), this.model._column_settings_selected_column = m4;
    }), this._initialized = true;
  }
}
function me3(e2) {
  return typeof e2 == "number" && Number.isFinite(e2) && e2 > 0 ? e2 : void 0;
}
function Uo(e2) {
  let t = "";
  for (let [o, r3] of Object.entries(e2)) {
    let n = me3(r3.font_size);
    (r3.font_family !== void 0 || n !== void 0) && (t += `${o} ${r3.font_family ?? ""} ${n ?? ""}`);
  }
  return t;
}
function ft3() {
  let e2 = this._row_height ?? $5(this, "--psp-datagrid--row--height", 23), t = this._font_size ?? $5(this, "font-size", 12);
  this.regular_table.style.setProperty("--psp-datagrid--wrap-lines", String(Ne2(e2, t)));
}
function Ve2(e2, t, o) {
  o ? e2.style.setProperty(t, o, "important") : e2.style.removeProperty(t);
}
function gn(e2, t) {
  let o = [this._font_family, this._font_size], r3 = this._row_height, n = Uo(this._columns_config), s3 = Uo(t);
  this._font_family = typeof e2.font_family == "string" && e2.font_family !== "inherit" ? e2.font_family : void 0, this._font_size = me3(e2.font_size), this._word_wrap = e2.word_wrap === true, this._column_menus = e2.column_menus !== false;
  let i7 = this._command_column;
  this._command_column = Ro(e2.command_column), i7 !== this._command_column && this.model && (this.regular_table.resetAutoSize(), this.model._projected.clear(), this.model._command_blocks = void 0), this._command_cells = e2.command_cells !== false, this._bold = e2.bold === true, this._italic = e2.italic === true, this._align = Oe2(e2.align), this._row_height = me3(e2.row_height), this._zebra_rows = Math.max(0, Math.floor(me3(e2.zebra_rows) ?? 0)), this._zebra_color = this._zebra_rows >= 1 && typeof e2.zebra_color == "string" ? e2.zebra_color : void 0;
  let l3 = this.regular_table;
  Ve2(l3, "font-family", this._font_family ? He2(this._font_family) : void 0), Ve2(l3, "font-size", this._font_size ? `${this._font_size}px` : void 0), Ve2(l3, "font-weight", this._bold ? "bold" : void 0), Ve2(l3, "font-style", this._italic ? "italic" : void 0), this._row_height ? l3.style.setProperty("--psp-datagrid--row--height", `${this._row_height}px`) : l3.style.removeProperty("--psp-datagrid--row--height"), this._zebra_color ? l3.style.setProperty("--psp-datagrid--zebra--color", this._zebra_color) : l3.style.removeProperty("--psp-datagrid--zebra--color"), this.model && (this.model._row_height = this._row_height, this.model._word_wrap = this._word_wrap, this.model._column_menus = this._column_menus, this.model._command_column = this._command_column, this.model._command_cells = this._command_cells, this.model._align = this._align), ft3.call(this);
  let a2 = o[0] !== this._font_family || o[1] !== this._font_size || n !== s3;
  return r3 !== void 0 && this._row_height === void 0 || a2 && this._row_height === void 0;
}
function $o(e2) {
  if (typeof e2 != "string") return {};
  let t = Xt(e2) ?? void 0, o = Qt(e2)?.map(P5) ?? void 0;
  return { color: fn(e2) ? W4(e2) : void 0, stops: t, palette: o };
}
function fn(e2) {
  return !e2.trim().toLowerCase().startsWith("linear-gradient(");
}
function jo(e2) {
  return e2 ? [W4(P5(e2[0].rgb)), W4(P5(e2[e2.length - 1].rgb))] : [void 0, void 0];
}
function hn(e2) {
  let { fg_color: t, bg_color: o, ...r3 } = e2, n = $o(t), s3 = $o(o), [i7, l3] = jo(n.stops), [a2, c2] = jo(s3.stops);
  return { ...r3, fg_color: n.color, bg_color: s3.color, fg_stops: n.stops, bg_stops: s3.stops, pos_fg_color: l3, neg_fg_color: i7, pos_bg_color: c2, neg_bg_color: a2, fg_palette: n.palette, bg_palette: s3.palette };
}
function Yo(e2, t) {
  e2 = JSON.parse(JSON.stringify(e2)), t = JSON.parse(JSON.stringify(t));
  let o = gn.call(this, e2, t);
  this._column_overrides.clear();
  for (let [n, s3] of Object.entries(t)) {
    let i7 = s3.column_size_override;
    i7 !== void 0 && (typeof i7 == "number" && Number.isFinite(i7) && i7 > 0 && this._column_overrides.set(n, i7), delete s3.column_size_override);
  }
  this._columns_config = structuredClone(t);
  let r3 = {};
  for (let [n, s3] of Object.entries(t)) r3[n] = hn(s3);
  "edit_mode" in e2 ? ce2.indexOf(e2.edit_mode) !== -1 ? pe4.call(this, e2.edit_mode, false) : console.error("Unknown edit mode " + e2.edit_mode) : pe4.call(this, "READ_ONLY", false), "scroll_lock" in e2 ? Se3.call(this, e2.scroll_lock) : Se3.call(this, false), o && this.regular_table.resetAutoSize({ auto: false, indices: false, override: false, row_height: true }), this.regular_table[D5] = r3;
}
function qo() {
  if (this.regular_table) {
    let e2 = { scroll_lock: !!this._is_scroll_lock, edit_mode: this._edit_mode, column_menus: this._column_menus ? void 0 : false, command_column: this._command_column === "left" ? void 0 : this._command_column, font_family: this._font_family, font_size: this._font_size, word_wrap: this._word_wrap || void 0, bold: this._bold || void 0, italic: this._italic || void 0, align: this._align, row_height: this._row_height, zebra_rows: this._zebra_rows >= 1 ? this._zebra_rows : void 0, zebra_color: this._zebra_rows >= 1 ? this._zebra_color : void 0 };
    return JSON.parse(JSON.stringify(e2));
  }
  return {};
}
async function Ko(e2, t) {
  let o = this.model, r3 = this.shadowRoot?.elementFromPoint(e2, t)?.closest("td, th");
  if (!o || !r3 || !this.regular_table.contains(r3)) return;
  let n = this.regular_table.getMeta(r3), s3 = (i7) => i7 >= o._column_paths.length;
  if (n?.type === "body") {
    let i7 = s3(n.x) ? { y: n.y } : { y: n.y, x: n.x };
    return { frame: ht3(o, n, i7), ref: i7 };
  } else if (n?.type === "row_header") {
    let i7 = { y: n.y };
    return { frame: ht3(o, n, i7), ref: i7 };
  } else if (n?.type === "column_header" && !s3(n.x)) {
    let i7 = { x: n.x };
    return { frame: ht3(o, n, i7), ref: i7 };
  }
}
function ht3(e2, t, o) {
  let r3 = o.x ?? 0, n = e2._column_paths[r3], s3 = {};
  if (o.y !== void 0) {
    let i7 = e2._ids[o.y - t.y0];
    s3.__ID__ = [i7], e2._config.group_by.length > 0 && (s3.__ROW_PATH__ = [i7]), o.x !== void 0 && n !== void 0 && (s3[n] = [t.user]);
  }
  return { start_row: o.y ?? 0, start_col: r3, paths: n === void 0 ? [] : [n], column_paths: e2._column_path_area.map((i7) => [i7[r3] ?? null]), data: s3 };
}
async function Jo(e2) {
  if (this.parentElement && await this.activate(e2), !this.isConnected || this.offsetParent == null || !this.model) return;
  let t = this.regular_table.draw({ invalid_columns: true });
  this._reset_scroll_top && (this.regular_table.scrollTop = 0, this._reset_scroll_top = false), this._reset_scroll_left && (this.regular_table.scrollLeft = 0, this._reset_scroll_left = false), this._reset_select && (this.regular_table.dispatchEvent(new CustomEvent("psp-deselect-all", { bubbles: false })), this._reset_select = false), this._reset_column_size && (this.regular_table.resetAutoSize(), this.model._projected.clear(), this._reset_column_size = false), await t, this._toolbar?.classList.toggle("aggregated", this.model._config.group_by.length > 0 || this.model._config.split_by.length > 0);
}
function Xo(e2) {
  return e2 === "integer" || e2 === "float" ? [{ kind: "NumberFormat" }] : e2 === "date" || e2 === "datetime" ? [{ kind: "DatetimeFormat" }] : [];
}
function bt3(e2, t, o, r3, n, s3, i7) {
  if (i7 === "group_by" || i7 === "split_by") return { fields: Xo(e2) };
  let l3 = s3 == null ? { font_family: this._font_family, font_size: this._font_size, bold: this._bold, italic: this._italic, align: this._align, word_wrap: this._word_wrap } : { font_family: typeof s3.font_family == "string" ? s3.font_family : void 0, font_size: me3(s3.font_size), bold: s3.bold === true, italic: s3.italic === true, align: Oe2(s3.align), word_wrap: s3.word_wrap === true }, a2 = [], c2 = { kind: "Group", key: "column", fields: [] };
  a2.push(c2), (n?.split_by?.length ?? 0) === 0 && c2.fields.push({ kind: "Number", key: "column_size_override", default: 0, min: 1 });
  let p6 = n?.group_by ?? [], m4 = (n?.group_rollup_mode ?? "rollup") === "rollup";
  p6.length > 0 && m4 && c2.fields.push({ kind: "AggregateDepth" }), a2.push({ kind: "Group", key: "font", fields: [{ kind: "Font", key: "font_family", default: l3.font_family ?? "inherit", size: { key: "font_size", default: l3.font_size ?? $5(this, "font-size", 12), min: 4, max: 96, step: 1 }, bold: { key: "bold", default: l3.bold }, italic: { key: "italic", default: l3.italic } }, { kind: "Alignment", key: "align", ...l3.align !== void 0 ? { default: l3.align } : {} }, { kind: "Bool", key: "word_wrap", default: l3.word_wrap }] });
  let d3 = Ue2(e2), g3 = $e2(e2);
  if (d3.length > 0 || g3.length > 0) {
    let u4 = Y5(e2, r3?.fg_mode) ?? je2(e2), h3 = q5(e2, r3?.bg_mode) ?? Ye2(e2), v3 = [Qo("fg_mode", d3, je2(e2)), ...Zo.call(this, e2, "fg", u4), Qo("bg_mode", g3, Ye2(e2)), ...Zo.call(this, e2, "bg", h3)];
    a2.push({ kind: "Group", key: "color", fields: v3 });
  }
  return a2.push(...Xo(e2)), e2 === "string" && a2.push({ kind: "Bool", key: "link", default: false }), { fields: a2 };
}
var bn = { disabled: "Disabled", color: "Color", bar: "Bar", "label-bar": "Gradient", gradient: "Gradient", pulse: "Pulse", series: "Series" };
function Qo(e2, t, o) {
  return { kind: "Enum", key: e2, default: o, variants: t.map((r3) => ({ value: r3, label: bn[r3] })) };
}
function Zo(e2, t, o) {
  if (o === "disabled") return [];
  let r3 = this.model ?? ae4(this.regular_table), n = `${t}_color`;
  if (e2 === "integer" || e2 === "float") {
    let s3 = r3[`_pos_${t}_color`][0], i7 = r3[`_neg_${t}_color`][0], l3 = o === "gradient" || o === "pulse" ? { kind: "GradientStops", key: n, default: it2([{ color: i7, offset: 0 }, { color: P5(r3._plugin_background), offset: 0.5 }, { color: s3, offset: 1 }]) } : { kind: "GradientStops", key: n, default: it2([{ color: i7, offset: 0 }, { color: s3, offset: 1 }]), discrete: true };
    return o === "bar" || o === "label-bar" || o === "gradient" ? [l3, { kind: "Number", key: `${t}_gradient`, include: true, default: 0, default_stat: "abs_max" }] : [l3];
  } else return o === "series" ? [{ kind: "Palette", key: n, default: Zt(r3._series_palette) }] : [{ kind: "Color", key: n, default: r3._color[0] }];
}
var er = 'regular-table{--psp-datagrid--hover--border-color:var(--psp-inactive--color,#c5c9d080);margin:12px 0 0 12px;padding:0;font-family:inherit;& div[tabindex]{outline:none}&>div{position:absolute;inset:0;overflow:hidden}& th{text-align:center}& thead tr:not(.rt-autosize) th{max-width:0;overflow:hidden}& thead tr:last-child .rt-float,& tbody .rt-float,& thead .rt-integer,& tbody .rt-integer{text-align:right}& tbody th{text-align:left}& span.rt-tree-container{align-items:center;height:100%;display:flex}& thead .rt-string,& tbody .rt-string,& thead .rt-date,& tbody .rt-date,& thead .rt-datetime,& tbody .rt-datetime{text-align:left}& thead tr:last-child th{border-bottom:1px solid #8b868045}& tbody tr:first-child td,& tbody tr:first-child th{border-top:1px solid #0000!important}& th{position:relative}& tr th span.rt-tree-group{border-left:1px solid #eee;height:100%;margin-left:5px;margin-right:15px}& td,& th{white-space:nowrap;height:var(--psp-datagrid--row--height,19px);padding:0 5px}& table *{box-sizing:border-box}& table{color:#666;outline:none;position:absolute}& span.rt-row-header-icon{color:#aaa;font-family:var(--psp-button--font-family);padding-right:4px}& span.rt-column-header-icon{width:10px;font-size:10px;font-family:var(--psp-button--font-family);padding-left:3px;display:inline-block}& span.rt-row-header-icon:hover{color:#1a7da1;text-shadow:0 0 3px #1a7da1}& .rt-selected td{background-color:#eee}& .rt-cell-clip{text-overflow:ellipsis;overflow:hidden}& td span.rt-group-name,& th span.rt-group-name{flex:1;height:100%;margin-right:-5px;padding-left:8px;padding-right:5px}& th span.rt-group-name{text-align:left}& td th span.rt-group-leaf,& th span.rt-group-leaf{height:100%;margin-left:16px}& .rt-column-resize{cursor:col-resize;width:10px;height:100%;position:absolute;top:0;right:0}& a{color:var(--psp-datagrid--pos-cell--color)}& a:visited{color:var(--psp-active--color)}& td.psp-null:after,& th.psp-null:after{content:var(--psp-label--null--content,"-");color:var(--psp-label--null--color,inherit);font-size:var(--psp-label--null--font-size,inherit)}}regular-table{--psp-mh-color:var(--psp-inactive--border-color,#8b868045);--psp-mh-gap:8px}regular-table thead th{box-shadow:var(--psp-miter-top,0 0 0 0 transparent), var(--psp-miter-right,0 0 0 0 transparent), var(--psp-miter-bottom,0 0 0 0 transparent), var(--psp-miter-left,0 0 0 0 transparent)}.psp-b-r{--psp-miter-right:1px 0px 0px 0px var(--psp-mh-color)}.psp-b-r-mt{--psp-miter-right:calc(var(--psp-mh-gap) / 2 + 1px) calc(var(--psp-mh-gap) / 2) 0px calc(var(--psp-mh-gap) / -2) var(--psp-mh-color)}.psp-b-r-mb{--psp-miter-right:calc(var(--psp-mh-gap) / 2 + 1px) calc(var(--psp-mh-gap) / -2) 0px calc(var(--psp-mh-gap) / -2) var(--psp-mh-color)}.psp-b-r-mtb{--psp-miter-right:calc(var(--psp-mh-gap) + 1px) 0px 0px calc(-1 * var(--psp-mh-gap)) var(--psp-mh-color)}.psp-b-l{--psp-miter-left:-1px 0px 0px 0px var(--psp-mh-color)}.psp-b-l-mt{--psp-miter-left:calc(var(--psp-mh-gap) / -2 - 1px) calc(var(--psp-mh-gap) / 2) 0px calc(var(--psp-mh-gap) / -2) var(--psp-mh-color)}.psp-b-l-mb{--psp-miter-left:calc(var(--psp-mh-gap) / -2 - 1px) calc(var(--psp-mh-gap) / -2) 0px calc(var(--psp-mh-gap) / -2) var(--psp-mh-color)}.psp-b-l-mtb{--psp-miter-left:calc(-1 * var(--psp-mh-gap) - 1px) 0px 0px calc(-1 * var(--psp-mh-gap)) var(--psp-mh-color)}.psp-b-b{--psp-miter-bottom:0px 1px 0px 0px var(--psp-mh-color)}.psp-b-b-ml{--psp-miter-bottom:calc(var(--psp-mh-gap) / 2) calc(var(--psp-mh-gap) / 2 + 1px) 0px calc(var(--psp-mh-gap) / -2) var(--psp-mh-color)}.psp-b-b-mr{--psp-miter-bottom:calc(var(--psp-mh-gap) / -2) calc(var(--psp-mh-gap) / 2 + 1px) 0px calc(var(--psp-mh-gap) / -2) var(--psp-mh-color)}.psp-b-b-mlr{--psp-miter-bottom:0px calc(var(--psp-mh-gap) + 1px) 0px calc(-1 * var(--psp-mh-gap)) var(--psp-mh-color)}.psp-b-t{--psp-miter-top:0px -1px 0px 0px var(--psp-mh-color)}.psp-b-t-ml{--psp-miter-top:calc(var(--psp-mh-gap) / 2) calc(var(--psp-mh-gap) / -2 - 1px) 0px calc(var(--psp-mh-gap) / -2) var(--psp-mh-color)}.psp-b-t-mr{--psp-miter-top:calc(var(--psp-mh-gap) / -2) calc(var(--psp-mh-gap) / -2 - 1px) 0px calc(var(--psp-mh-gap) / -2) var(--psp-mh-color)}.psp-b-t-mlr{--psp-miter-top:0px calc(-1 * var(--psp-mh-gap) - 1px) 0px calc(-1 * var(--psp-mh-gap)) var(--psp-mh-color)}regular-table{& tbody{& tr:hover th.psp-tree-leaf:not(.psp-select-region):not(.psp-select-region-inactive),& tr:hover th.psp-tree-label:not(.psp-select-region):not(.psp-select-region-inactive),& tr:hover th.psp-command-header-leaf:not(.psp-select-region):not(.psp-select-region-inactive),& tr:hover td:not(.psp-select-region):not(.psp-select-region-inactive),& tr:hover:after{box-shadow:0px 1px 0px var(--psp-datagrid--hover--border-color,#c5c9d080);border-color:var(--psp-datagrid--hover--border-color,#c5c9d080)!important;&.psp-menu-open{box-shadow:inset -2px 0px 0px var(--psp--color), inset 2px 0px 0px var(--psp--color), 0px 1px 0px var(--psp-datagrid--hover--border-color,#c5c9d080)}}& tr:last-child:hover td:not(.psp-select-region):not(.psp-select-region-inactive).psp-menu-open{box-shadow:inset -2px 0px 0px var(--psp--color), inset 2px 0px 0px var(--psp--color), inset 0px -2px 0px var(--psp--color), 0px 1px 0px var(--psp-datagrid--hover--border-color,#c5c9d080)}& tr:hover+tr th.psp-tree-leaf:not(.psp-select-region):not(.psp-select-region-inactive),& tr:hover+tr th.psp-tree-label:not(.psp-select-region):not(.psp-select-region-inactive),& tr:hover+tr th.psp-command-header-leaf:not(.psp-select-region):not(.psp-select-region-inactive),& tr:hover+tr td:not(.psp-select-region):not(.psp-select-region-inactive){border-top-color:#0000}& tr{& th:first-child:not(.psp-tree-spacer,.psp-command-header:not(.psp-command-header-leaf)),& th:is(.psp-tree-spacer,.psp-command-header:not(.psp-command-header-leaf)):first-child+th:not(.psp-tree-spacer),& th:is(.psp-tree-spacer,.psp-command-header:not(.psp-command-header-leaf)):first-child~th.psp-tree-spacer+th:not(.psp-tree-spacer),& td:first-child{border-left-width:1px;border-left-color:#0000}& th:last-child,& td:last-child{border-right-width:0;border-right-color:#0000}}& tr:hover{color:inherit;& th:first-child:not(.psp-tree-spacer,.psp-command-header:not(.psp-command-header-leaf)),& th:is(.psp-tree-spacer,.psp-command-header:not(.psp-command-header-leaf)):first-child+th:not(.psp-tree-spacer),& th:is(.psp-tree-spacer,.psp-command-header:not(.psp-command-header-leaf)):first-child~th.psp-tree-spacer+th:not(.psp-tree-spacer),& td:first-child{border-left-color:var(--psp-datagrid--hover--border-color,#c5c9d080)!important}& th:last-child,& td:last-child{border-right-color:var(--psp-datagrid--hover--border-color,#c5c9d080)!important}}}}perspective-viewer-datagrid:not(.sub-cell-scroll-disabled) regular-table table,:host(:not(.sub-cell-scroll-disabled)) regular-table table{& tbody td,& thead th:not(.rt-group-corner){transform:translate(var(--regular-table--transform-x,0px))}& tbody{transform:translate(0, var(--regular-table--transform-y,0px))}& tbody tr:first-child{& td,& th,&:after{clip-path:polygon(0 var(--regular-table--clip-y,0), 0 200%, 200% 200%, 200% var(--regular-table--clip-y,0))}}& tbody tr td:first-of-type{clip-path:polygon(var(--regular-table--clip-x,0) 0, var(--regular-table--clip-x,0) 200%, 200% 200%, 200% 0)}& tbody tr:first-child td:first-of-type{clip-path:polygon(var(--regular-table--clip-x,0) var(--regular-table--clip-y,0), var(--regular-table--clip-x,0) 200%, 200% 200%, 200% var(--regular-table--clip-y,0))}& thead tr:last-child:after,& tbody tr:not(:first-child):after{transform:translate(var(--regular-table--transform-x,0px))}& tbody tr:hover:first-child:after{clip-path:polygon(0 var(--regular-table--clip-y,0), 0 200%, 200% 200%, 200% var(--regular-table--clip-y,0))}& thead tr th.rt-group-corner+th:not(.rt-group-corner){clip-path:polygon(var(--regular-table--clip-x,0) 0, var(--regular-table--clip-x,0) 200%, 200% 200%, 200% 0)}}regular-table{outline:none;&::-webkit-scrollbar,&::-webkit-scrollbar-corner{background-color:#0000;width:12px;height:12px}&::-webkit-scrollbar-thumb{background-clip:content-box;background:var(--psp--color);border:5.5px solid var(--psp--background-color);min-width:10%;max-width:50%;min-height:10%;max-height:50%}}perspective-viewer,:host{& .psp-menu-enabled{border-radius:3px 3px 0 0;padding:0 6px;font-size:8px}& .psp-menu-enabled:hover,& tr:not(.rt-autosize) th.psp-menu-open{color:var(--psp--background-color);background-color:var(--psp--color);border-bottom-color:var(--psp--color);cursor:pointer}& tr:not(.rt-autosize) th.psp-menu-open{&:before{background-repeat:no-repeat;background-color:var(--psp--color);content:"";width:10px;height:8px;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-image:var(--psp-icon--column-settings--mask-image);mask-image:var(--psp-icon--column-settings--mask-image);background-color:var(--psp--background-color);margin-right:4px;display:inline-block}}& td.psp-menu-open{box-shadow:inset -2px 0px 0px var(--psp--color), inset 2px 0px 0px var(--psp--color)}& tr:first-child td.psp-menu-open{border-top-color:var(--psp--color)!important}& tr:last-child td.psp-menu-open{box-shadow:inset -2px 0px 0px var(--psp--color), inset 2px 0px 0px var(--psp--color), inset 0px -2px 0px var(--psp--color)}& regular-table table tbody td,& regular-table table tbody th,& regular-table table thead th{line-height:min(1.2em, calc(var(--psp-datagrid--row--height,23px) - 5px));overflow:hidden}& regular-table table tbody td{padding:2px 5px}}regular-table table thead tr:last-child th{border-bottom-width:1px;border-bottom-color:var(--psp-inactive--border-color,#8b868045)}.psp-sort-enabled:hover{cursor:pointer}regular-table.flat-group-rollup-mode.vertical-row-headers th.psp-tree-label:not(:last-of-type){writing-mode:vertical-lr}.psp-select-region-inactive,:hover .psp-select-region-inactive,:hover th.psp-tree-leaf.psp-select-region-inactive,:hover th.psp-tree-label.psp-select-region-inactive{background-color:var(--psp-inactive--color)!important;color:var(--psp--background-color)!important;border-color:var(--psp--background-color)!important}.psp-error{color:red}td:focus{outline:1px dotted #666}.psp-header-border:last-child{border-right-width:0}.psp-header-sort-desc:after{background-repeat:no-repeat;background-color:var(--psp--color);content:"";width:14px;height:11px;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-image:var(--psp-icon--sort-desc--mask-image);mask-image:var(--psp-icon--sort-desc--mask-image);margin-left:4px;display:inline-block}.psp-header-sort-asc:after{background-repeat:no-repeat;background-color:var(--psp--color);content:"";width:14px;height:11px;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-image:var(--psp-icon--sort-asc--mask-image);mask-image:var(--psp-icon--sort-asc--mask-image);margin-left:4px;display:inline-block}.psp-header-sort-col-desc:after{background-repeat:no-repeat;background-color:var(--psp--color);content:"";width:14px;height:11px;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-image:var(--psp-icon--sort-col-desc--mask-image);mask-image:var(--psp-icon--sort-col-desc--mask-image);margin-left:4px;display:inline-block}.psp-header-sort-col-asc:after{background-repeat:no-repeat;background-color:var(--psp--color);content:"";width:14px;height:11px;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-image:var(--psp-icon--sort-col-asc--mask-image);mask-image:var(--psp-icon--sort-col-asc--mask-image);margin-left:4px;display:inline-block}.psp-header-sort-abs-desc:after{background-repeat:no-repeat;background-color:var(--psp--color);content:"";width:14px;height:11px;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-image:var(--psp-icon--sort-abs-desc--mask-image);mask-image:var(--psp-icon--sort-abs-desc--mask-image);margin-left:4px;display:inline-block}.psp-header-sort-abs-asc:after{background-repeat:no-repeat;background-color:var(--psp--color);content:"";width:14px;height:11px;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-image:var(--psp-icon--sort-abs-asc--mask-image);mask-image:var(--psp-icon--sort-abs-asc--mask-image);margin-left:4px;display:inline-block}.psp-header-sort-abs-col-desc:after{background-repeat:no-repeat;background-color:var(--psp--color);content:"";width:14px;height:11px;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-image:var(--psp-icon--sort-abs-col-desc--mask-image);mask-image:var(--psp-icon--sort-abs-col-desc--mask-image);margin-left:4px;display:inline-block}.psp-header-sort-abs-col-asc:after{background-repeat:no-repeat;background-color:var(--psp--color);content:"";width:14px;height:11px;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-image:var(--psp-icon--sort-abs-col-asc--mask-image);mask-image:var(--psp-icon--sort-abs-col-asc--mask-image);margin-left:4px;display:inline-block}:host(.shift-active) :is(.psp-header-sort-asc,.psp-header-sort-desc,.psp-header-sort-col-asc,.psp-header-sort-col-desc):after{background-color:var(--shift-active--color,var(--psp-datagrid--pos-cell--color,#1078d1))}:host(.shift-active) :is(.psp-tree-label-expand,.psp-tree-label-collapse):before{color:var(--shift-active--color,var(--psp-datagrid--pos-cell--color,#1078d1))}tbody th:last-of-type{border-right:1px solid var(--psp-inactive--border-color,#8b868045);text-overflow:ellipsis;overflow:hidden}tbody th.psp-tree-spacer{background-image:linear-gradient(to right, transparent 9px, var(--psp-inactive--border-color,#eee) 10px, transparent 11px);pointer-events:none;background-repeat:no-repeat;min-width:20px;max-width:20px}regular-table:not(.flat-group-rollup-mode){& .psp-tree-label{min-width:0;max-width:0}& .psp-tree-label:before{color:var(--psp--color);font-family:var(--psp-button--font-family,inherit);padding-right:11px}& .psp-tree-label-expand:before{content:var(--psp-label--tree-expand--content,"+")}& .psp-tree-label-collapse:before{content:var(--psp-label--tree-collapse--content,"-")}& .psp-tree-label-expand,& .psp-tree-label-collapse{cursor:pointer}& .psp-tree-label:hover:before{color:var(--psp-active--color);text-shadow:0px 0px 5px var(--psp-active--color)}}.psp-tree-leaf{padding-left:24px}.psp-align-right{text-align:right}.psp-color-mode-bar,.psp-color-mode-label-bar{background-image:var(--psp-label-bar-color);background-repeat:no-repeat;background-origin:padding-box;background-size:var(--psp-bar-size,0%) 80%;background-position-x:var(--psp-bar-anchor,0%);background-position-y:50%;padding:0 2px}.psp-color-mode-label-bar{isolation:isolate;position:relative}.psp-color-mode-label-bar:before{color:#0000;content:attr(data-psp-label);white-space:nowrap;height:0;padding:0 5px;display:block}.psp-color-mode-label-bar:after{color:var(--psp-label-bar-bg);content:attr(data-psp-label);mix-blend-mode:difference;justify-content:var(--psp-label-justify,flex-end);align-items:var(--psp-label-align,center);padding:0 5px;display:inline-flex;position:absolute;inset:0}.psp-align-left{text-align:left}.psp-positive:not(:focus){color:var(--psp-datagrid--pos-cell--color)}.psp-negative:not(:focus){color:var(--psp-datagrid--neg-cell--color)}:host(.shift-active) .psp-is-width-override .rt-column-resize{border:1px dashed var(--shift-active--color,var(--psp-datagrid--pos-cell--color,#1078d1));border-bottom-width:0;border-left-width:0}.psp-is-width-override .rt-column-resize,.rt-column-resize:hover{border:1px dashed var(--psp--color);border-bottom-width:0;border-left-width:0}.boolean-editable{cursor:pointer}regular-table table tbody td.psp-editable{user-select:text}regular-table table{user-select:none;color:inherit;border-collapse:separate;font-size:1em;& th{font-weight:400}& td,& th{border-color:var(--psp-inactive--border-color,#8b868045);height:var(--psp-datagrid--row--height,23px)}& .psp-header-group{text-overflow:ellipsis}& th.psp-header-leaf{border-bottom-width:0;& span{height:var(--psp-datagrid--row--height,23px);min-height:var(--psp-datagrid--row--height,23px)}}& td,& th.psp-tree-label,& th.psp-tree-label,& th.psp-tree-leaf,& th.psp-command-header-leaf,& tbody tr:first-child th{border-style:solid;border-width:1px 0 0}& tbody th.psp-tree-spacer{background-position:0 -10px}& td.psp-select-region,& th.psp-select-region{background-color:var(--psp--color)!important;color:var(--psp--background-color)!important;border-color:var(--psp--background-color)!important}}regular-table tbody tr:hover td.psp-select-region:not(.psp-select-region-inactive),regular-table tbody tr:hover+tr td.psp-select-region:not(.psp-select-region-inactive){border-color:var(--psp--background-color)!important}regular-table tbody tr:hover{& td.psp-select-region.psp-menu-open{&:not(.psp-select-region-inactive){box-shadow:inset -2px 0px 0px var(--psp--background-color), inset 2px 0px 0px var(--psp--background-color)}}}:host([settings]) td.psp-select-region.psp-menu-open{box-shadow:inset -2px 0px 0px var(--psp--background-color), inset 2px 0px 0px var(--psp--background-color)}:host(.active) regular-table #psp-column-edit-buttons th:not(.rt-group-corner) span:not(.rt-column-resize):before{content:var(--psp-datagrid--column-edit-button--content,var(--psp-missing))}:host(:not([settings])) regular-table #psp-column-edit-buttons:after{content:none}regular-table table thead tr:last-child:after{box-sizing:border-box;width:10000px;height:var(--psp-datagrid--row--height,23px);content:" ";border-bottom:1px solid var(--psp-inactive--border-color);display:block}regular-table table tbody tr:after{box-sizing:border-box;width:10000px;height:var(--psp-datagrid--row--height,23px);content:" ";border-top:1px solid #0000;display:block}regular-table table tbody tr:not(:first-child):after{border-top:1px solid var(--psp-inactive--border-color)}regular-table table tbody td .psp-wrap{-webkit-line-clamp:var(--psp-datagrid--wrap-lines,1);max-height:calc(var(--psp-datagrid--row--height,23px) - 5px);white-space:normal;overflow-wrap:break-word;-webkit-box-orient:vertical;line-height:1.2;display:-webkit-box;overflow:hidden}regular-table table tbody tr.psp-zebra td,regular-table table tbody tr.psp-zebra th:not(.psp-tree-spacer),regular-table table tbody tr.psp-zebra:after{background-color:var(--psp-datagrid--zebra--color,color-mix(in srgb, var(--psp--color,#000) 6%, transparent))}regular-table table tbody tr:hover:not(:first-child):after,regular-table table tbody tr:hover+tr:after{border-top:1px solid var(--psp-datagrid--hover--border-color)}@keyframes pulse_pos{0%{background-color:var(--pulse--background-color-start,#0080ff80)}to{background-color:var(--pulse--background-color-end,#0080ff00)}}@keyframes pulse_pos2{0%{background-color:var(--pulse--background-color-start,#0080ff80)}to{background-color:var(--pulse--background-color-end,#0080ff00)}}@keyframes pulse_neg{0%{background-color:var(--pulse--background-color-start,#ff190080)}to{background-color:var(--pulse--background-color-end,#ff190000)}}@keyframes pulse_neg2{0%{background-color:var(--pulse--background-color-start,#ff190080)}to{background-color:var(--pulse--background-color-end,#ff190000)}}regular-table .psp-command-cell{align-items:stretch;gap:4px;min-width:0;height:100%;display:flex}regular-table td .psp-command-cell{justify-content:space-between}regular-table .psp-command-cell>.psp-command-value{text-overflow:ellipsis;flex:auto;min-width:0;overflow:hidden}regular-table .psp-command-button{box-sizing:border-box;border:1px solid var(--psp-inactive--border-color,#ababab);background:var(--psp--background-color,transparent);min-width:0;color:var(--psp--color,inherit);font:inherit;text-align:start;white-space:nowrap;text-overflow:ellipsis;cursor:pointer;user-select:none;border-radius:3px;flex:auto;margin:0;padding:0 4px;font-size:10px;line-height:1;display:block;overflow:hidden}regular-table .psp-command-button:hover:not(:disabled){border-color:var(--psp--color);color:var(--psp--background-color);background-color:var(--psp--color)}regular-table .psp-command-button:disabled{opacity:.5;cursor:default}regular-table .psp-command-button[data-icon]:before{content:"";vertical-align:top;width:10px;height:10px;-webkit-mask-image:var(--psp-command-button--mask-image);mask-image:var(--psp-command-button--mask-image);background-color:currentColor;margin-right:3px;display:inline-block;-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}regular-table th.psp-command-header{writing-mode:horizontal-tb;padding:0 4px}regular-table th.psp-command-header .psp-command-cell{gap:2px}';
var Ie = class e extends HTMLElement {
  static _sheet;
  regular_table;
  model;
  _toolbar;
  _edit_button;
  _scroll_lock;
  _is_scroll_lock;
  _edit_mode;
  _font_family;
  _font_size;
  _bold = false;
  _italic = false;
  _word_wrap = false;
  _column_menus = true;
  _command_column = "left";
  _command_cells = true;
  _align;
  _row_height;
  _zebra_rows = 0;
  _zebra_color;
  _column_overrides = /* @__PURE__ */ new Map();
  _initialized;
  _reset_scroll_top;
  _reset_scroll_left;
  _reset_select;
  _reset_column_size;
  _columns_config = {};
  _persist_column_sizes = () => {
    let t = this.model;
    if (!t || t._config.split_by?.length > 0) return;
    let o = t._last_window;
    if (_e3(t, this.regular_table, o?.start_col ?? 0, o?.end_col ?? 0), t._unpersisted_widths.size === 0) return;
    let r3 = Ke2(this, t._unpersisted_widths);
    t._unpersisted_widths.clear(), this.parentElement?.restore?.({ columns_config: JSON.parse(JSON.stringify(r3)) }, { panel: t._panel });
  };
  _on_column_resize = (t) => {
    t.composedPath().some((r3) => r3 instanceof HTMLElement && r3.classList.contains("rt-column-resize")) && document.addEventListener("mouseup", this._persist_column_sizes, { once: true });
  };
  constructor() {
    super(), this.regular_table = document.createElement("regular-table"), this.regular_table.part = "regular-table", this._is_scroll_lock = false, this._edit_mode = "READ_ONLY";
    let t = e;
    t._sheet || (t._sheet = new CSSStyleSheet(), t._sheet.replaceSync(er)), this.attachShadow({ mode: "open" }).adoptedStyleSheets.push(t._sheet);
  }
  connectedCallback() {
    this.regular_table.addEventListener("mousedown", this._on_column_resize, { capture: true }), this._toolbar || (this._toolbar = document.createElement("perspective-viewer-datagrid-toolbar")), this.parentElement && this.insertAdjacentElement("afterend", this._toolbar);
  }
  disconnectedCallback() {
    this.regular_table.removeEventListener("mousedown", this._on_column_resize, { capture: true }), document.removeEventListener("mouseup", this._persist_column_sizes), this._toolbar?.parentElement?.removeChild?.(this._toolbar);
  }
  async activate(t) {
    return await Fo.call(this, t);
  }
  get_static_config() {
    return { name: "Datagrid", category: "Basic", select_mode: "toggle", config_column_names: ["Columns"], group_rollup_modes: ["rollup", "flat", "total"], split_rollup_modes: ["flat", "rollup"], priority: 1, can_render_column_styles: true };
  }
  plugin_config_schema(t, o) {
    return gt3.call(this, t, o);
  }
  column_config_schema(t, o, r3, n, s3, i7, l3) {
    return bt3.call(this, t, o, r3, n, s3, i7, l3);
  }
  async draw(t) {
    return await Jo.call(this, t);
  }
  async update(t) {
    if (this.model === void 0) {
      await this.draw(t);
      return;
    }
    if (Wt(this) && (this.regular_table.resetAutoSize(), this.model._projected.clear(), this.model._command_blocks = void 0), this.model._config.split_by?.length > 0) {
      let o = await t.dimensions();
      this.model._num_rows = o.num_view_rows, await this.regular_table.draw();
    } else this.model._num_rows = await t.num_rows(), await this.regular_table.draw();
  }
  async render(t, o) {
    let [r3, n] = await Promise.all([t.to_columns(o), t.column_paths(o)]), s3 = Object.keys(r3).filter((m4) => !ne3(m4)), i7 = n[n.length - 1] ?? [], l3 = o?.end_row !== void 0 && o?.end_row !== null && o?.start_row !== void 0 && o?.start_row !== null ? o.end_row - o.start_row : await t.num_rows(), a2 = this.regular_table[D5], c2 = s3.map((m4, d3) => {
      let g3 = String(i7[d3] ?? "");
      return Ce2(this.model._schema[g3], a2?.[g3] || {});
    }), p6 = "";
    for (let m4 = 0; m4 < l3; m4++) {
      for (let d3 = 0; d3 < s3.length; d3++) {
        let g3 = r3[s3[d3]], u4 = c2[d3];
        u4 ? p6 += u4.format(g3[m4]) + "	" : p6 += g3[m4] + "	";
      }
      p6 += `
`;
    }
    return p6.trim();
  }
  async resize(t) {
    !this.isConnected || this.offsetParent == null || this._initialized && await this.regular_table.draw();
  }
  async presize(t, o) {
    if (!this.isConnected || this.offsetParent == null || !this._initialized) return;
    let r3 = this.getBoundingClientRect();
    return await this.regular_table.predraw(Math.max(0, this.regular_table.clientWidth + (t - r3.width)), Math.max(0, this.regular_table.clientHeight + (o - r3.height)));
  }
  async clear() {
    this.regular_table.resetAutoSize(), this.regular_table.clear();
  }
  save() {
    return qo.call(this);
  }
  restore(t, o) {
    return Yo.call(this, t, o ?? {});
  }
  async deselect() {
    let t = this.model;
    t?._selection_state && (t._selection_state.selected_areas = [], t._selection_state.old_selected_areas = [], t._selection_state.potential_selection = void 0, t._selection_state.CURRENT_MOUSEDOWN_COORDINATES = {}, t._selection_state.dirty = true, t._tree_selection_id = void 0, this._initialized && await this.regular_table.draw({ preserve_width: true }));
  }
  async hit_test(t, o) {
    return await Ko.call(this, t, o);
  }
  restyle() {
    !this.model || !this.isConnected || (Object.assign(this.model, ae4(this.regular_table)), ft3.call(this));
  }
  delete() {
    this.disconnectedCallback(), this._toolbar = void 0, this.regular_table.table_model && this.regular_table.resetAutoSize(), this.regular_table.clear();
  }
};
var tr = ':host{height:100%;display:block;position:relative}:host #container{flex-direction:column;justify-content:stretch;align-items:stretch;display:flex;position:absolute;inset:0}:host #toolbar{align-items:stretch;height:100%;display:flex}:host #toolbar .hover-target{cursor:pointer;align-items:center;margin:0;display:inline-flex;&:hover{box-shadow:-4px 0 0 var(--psp--color), 4px 0 0 var(--psp--color);background-color:var(--psp--color)}}:host #slot-container{flex:1;position:relative}#scroll_lock.lock-scroll:before{-webkit-mask-image:var(--psp-toolbar-scroll-lock-active--content);mask-image:var(--psp-toolbar-scroll-lock-active--content)}#scroll_lock:before{-webkit-mask-image:var(--psp-toolbar-scroll-lock--content);mask-image:var(--psp-toolbar-scroll-lock--content)}#select_mode:before{content:"highlight_alt"}#edit_mode:before{-webkit-mask-image:"";mask-image:""}#edit_mode[data-edit-mode=READ_ONLY]:before{-webkit-mask-image:var(--psp-toolbar-edit-mode-read-only--content);mask-image:var(--psp-toolbar-edit-mode-read-only--content)}#edit_mode[data-edit-mode=EDIT]:before{-webkit-mask-image:var(--psp-toolbar-edit-mode-edit--content);mask-image:var(--psp-toolbar-edit-mode-edit--content)}:host(.aggregated) #toolbar #edit_mode[data-edit-mode=EDIT]:before{-webkit-mask-image:var(--psp-toolbar-edit-mode-read-only--content);mask-image:var(--psp-toolbar-edit-mode-read-only--content)}#edit_mode[data-edit-mode=SELECT_ROW]:before{-webkit-mask-image:var(--psp-toolbar-edit-mode-select-row--content);mask-image:var(--psp-toolbar-edit-mode-select-row--content)}#edit_mode[data-edit-mode=SELECT_COLUMN]:before{-webkit-mask-image:var(--psp-toolbar-edit-mode-select-column--content);mask-image:var(--psp-toolbar-edit-mode-select-column--content)}#edit_mode[data-edit-mode=SELECT_REGION]:before{-webkit-mask-image:var(--psp-toolbar-edit-mode-select-region--content);mask-image:var(--psp-toolbar-edit-mode-select-region--content)}#edit_mode[data-edit-mode=SELECT_ROW_TREE]:before{-webkit-mask-image:var(--psp-toolbar-edit-mode-select-row-tree--content);mask-image:var(--psp-toolbar-edit-mode-select-row-tree--content)}#edit_mode[data-edit-mode=READ_ONLY] span:before{content:var(--psp-label--edit-mode-read-only--content,"Read Only")}#edit_mode[data-edit-mode=EDIT] span:before{content:var(--psp-label--edit-mode-edit--content,"Editable")}#edit_mode[data-edit-mode=SELECT_ROW] span:before{content:var(--psp-label--edit-mode-select-row--content,"Row Select")}#edit_mode[data-edit-mode=SELECT_COLUMN] span:before{content:var(--psp-label--edit-mode-select-column--content,"Column Select")}#edit_mode[data-edit-mode=SELECT_REGION] span:before{content:var(--psp-label--edit-mode-select-region--content,"Region Select")}#edit_mode[data-edit-mode=SELECT_ROW_TREE] span:before{content:var(--psp-label--edit-mode-select-row-tree--content,"Tree Select")}#scroll_lock span:before{content:var(--psp-label--scroll-lock-toggle--content,"Free Scroll")}#scroll_lock.lock-scroll span:before{content:var(--psp-label--scroll-lock-alt-toggle--content,"Align Scroll")}.button:before{content:"";background-color:var(--psp--color);width:21px;height:21px;-webkit-mask-size:cover;mask-size:cover}.button.editable:before,.button.lock-scroll:before{color:inherit}.button{user-select:none;box-sizing:border-box;font-size:var(--label--font-size,.75em);white-space:nowrap;border:1px solid #0000;border-radius:3px;justify-content:center;align-items:center;width:33px;height:22px;padding:0 5px;display:inline-flex}.button>span{margin:0;padding:0;display:none}.hover-target:focus-within .button,.hover-target:hover .button{background-color:var(--psp--color);color:var(--psp--background-color);opacity:1;cursor:pointer;align-items:center;display:flex;position:relative}.hover-target:focus-within .button:before,.hover-target:hover .button:before{background-color:var(--psp--background-color)}.hover-target:focus-within .button>span,.hover-target:hover .button>span{white-space:pre-wrap;background-color:var(--psp--color);text-align:center;border-radius:0 0 3px 3px;width:31px;height:auto;margin:0;padding:5px;font-size:9px;line-height:1;display:block;position:absolute;top:calc(100% + 3px);left:50%;translate:-50%}';
var or = new CSSStyleSheet();
or.replaceSync(tr);
var Be2 = class extends HTMLElement {
  _initialized = false;
  connectedCallback() {
    if (this._initialized) return;
    this._initialized = true;
    let t = this.previousElementSibling?.getAttribute("slot");
    this.setAttribute("slot", t ? `statusbar-extra-${t}` : "statusbar-extra"), this.attachShadow({ mode: "open" }), this.shadowRoot.adoptedStyleSheets.push(or), this.shadowRoot.innerHTML = `
            <div id="toolbar">
                <span class="hover-target">
                    <span id="edit_mode" class="button" data-edit-mode="READ_ONLY">
                        <span></span>
                    </span>
                </span>
            </div>
        `;
    let o = this.parentElement, r3 = this.previousElementSibling, n = r3?.tagName === "PERSPECTIVE-VIEWER-DATAGRID" ? r3 : o.getPlugin("Datagrid");
    n._edit_button = this.shadowRoot.querySelector("#edit_mode"), n._edit_button.dataset.editMode = n._edit_mode ?? "READ_ONLY", n._edit_button.addEventListener("click", () => {
      pe4.call(n), n.regular_table.draw();
    });
  }
};
async function wn() {
  if (customElements.get("perspective-viewer-datagrid")) {
    console.warn('Custom element "perspective-viewer-datagrid" is already registered; skipping duplicate registration (Perspective was loaded more than once on this page).');
    return;
  }
  customElements.define("perspective-viewer-datagrid-toolbar", Be2), customElements.define("perspective-viewer-datagrid", Ie), await customElements.whenDefined("perspective-viewer"), customElements.get("perspective-viewer").registerPlugin("perspective-viewer-datagrid");
}
wn();

// ../../packages/viewer-charts/dist/esm/perspective-viewer-charts.js
var T4 = "Series Charts";
var U4 = "Cartesian Charts";
var H3 = "Hierarchical Charts";
var ie5 = "Financial Charts";
var Y6 = "Map Charts";
var We2 = ["X Axis"];
var P6 = ["Y Axis"];
var x4 = "select";
var y4 = "toggle";
var b3 = [
  "legend_mode",
  "legend_size_mode",
  "legend_width_px",
  "legend_height_px",
  "legend_anchor",
  "legend_x",
  "legend_y",
  "legend_opacity"
];
var _ = [
  "tooltip_max_column_px",
  "tooltip_opacity",
  "tooltip_commands"
];
var E4 = [
  "auto_alt_y_axis",
  "facet_mode",
  "series_zoom_mode",
  "include_zero",
  "domain_mode",
  "line_width_px",
  "point_size_px",
  "band_inner_frac",
  "bar_inner_pad",
  "group_pad",
  ...b3,
  ..._
];
var F6 = { facet_mode: "overlay" };
var X4 = [
  "grid",
  "overlay"
];
var he4 = [
  ...X4,
  "last_group_by_grid",
  "last_group_by_overlay"
];
var V3 = {
  ...F6,
  include_zero: true
};
var ne4 = [
  "facet_mode",
  "facet_zoom_mode",
  "domain_mode",
  "line_width_px",
  "point_size_px",
  ...b3,
  ..._
];
var re3 = [
  "facet_mode",
  "series_zoom_mode",
  "domain_mode",
  "band_inner_frac",
  "bar_inner_pad",
  "wick_width_px",
  "ohlc_line_width_px",
  ..._
];
var le3 = [
  ...b3,
  ..._
];
var Oe3 = [
  "facet_zoom_mode",
  ...b3,
  ..._
];
var j6 = [
  "facet_mode",
  "facet_zoom_mode",
  "domain_mode",
  "map_tile_provider",
  "map_tile_alpha",
  "numeric_axes",
  ...b3,
  ..._
];
var ze3 = [
  ...j6,
  "point_size_px"
];
var Ue3 = [
  ...j6,
  "line_width_px"
];
var He3 = [
  ...j6,
  "gradient_color_mode",
  "gradient_radius_px",
  "gradient_intensity",
  "gradient_heat_max"
];
var Ye3 = [
  "facet_mode",
  "facet_zoom_mode",
  "domain_mode",
  "gradient_color_mode",
  "gradient_radius_px",
  "gradient_intensity",
  "gradient_heat_max",
  ...b3,
  ..._
];
function m3(r3, e2, t, i7, n, l3, o, a2) {
  return {
    name: r3,
    tag: e2,
    category: t,
    selectMode: i7,
    initial: { count: n, names: l3 },
    max_cells: a2?.max_cells ?? 1e7,
    max_columns: a2?.max_columns ?? 1e4,
    applicable_plugin_fields: o,
    ...a2?.default_chart_type ? { default_chart_type: a2.default_chart_type } : {},
    ...a2?.plugin_field_defaults ? { plugin_field_defaults: a2.plugin_field_defaults } : {},
    ...a2?.facet_modes ? { facet_modes: a2.facet_modes } : {},
    ...a2?.group_by_role ? { group_by_role: a2.group_by_role } : {},
    ...a2?.split_by_role ? { split_by_role: a2.split_by_role } : {},
    ...a2?.connects_row_order ? { connects_row_order: a2.connects_row_order } : {}
  };
}
var oe4 = ["Open", "Close", "High", "Low", "Tooltip"];
var se5 = ["Size", "Color", "Tooltip"];
var B6 = {
  group_by_role: "X Axis",
  split_by_role: "Series",
  facet_modes: he4
};
var Ve3 = {
  group_by_role: "Y Axis",
  split_by_role: "Series",
  facet_modes: he4
};
var G4 = {};
var ae5 = { group_by_role: "Hierarchy", split_by_role: "Facets" };
var Ge2 = { group_by_role: "X Axis", split_by_role: "Y Axis" };
var ue3 = { group_by_role: "X Axis", split_by_role: "Series" };
var $6 = {};
var $e3 = [
  m3("X Bar", "x-bar", T4, x4, 1, We2, E4, {
    ...Ve3,
    default_chart_type: "bar",
    plugin_field_defaults: V3
  }),
  m3("Y Bar", "y-bar", T4, x4, 1, P6, E4, {
    ...B6,
    default_chart_type: "bar",
    plugin_field_defaults: V3
  }),
  m3("Y Line", "y-line", T4, x4, 1, P6, E4, {
    ...B6,
    default_chart_type: "line",
    plugin_field_defaults: F6
  }),
  m3("Y Scatter", "y-scatter", T4, x4, 1, P6, E4, {
    ...B6,
    default_chart_type: "scatter",
    plugin_field_defaults: F6
  }),
  m3("Y Area", "y-area", T4, x4, 1, P6, E4, {
    ...B6,
    default_chart_type: "area",
    plugin_field_defaults: V3
  }),
  m3(
    "X/Y Scatter",
    "scatter",
    U4,
    y4,
    2,
    ["X Axis", "Y Axis", "Color", "Size", "Label", "Tooltip"],
    ne4,
    { ...G4 }
  ),
  m3(
    "X/Y Line",
    "line",
    U4,
    x4,
    2,
    ["X Axis", "Y Axis", "Tooltip"],
    ne4,
    { ...G4, connects_row_order: true }
  ),
  m3(
    "Density",
    "density",
    U4,
    y4,
    2,
    ["X Axis", "Y Axis", "Color", "Tooltip"],
    Ye3,
    { ...G4 }
  ),
  m3("Treemap", "treemap", H3, y4, 1, se5, le3, {
    ...ae5,
    plugin_field_defaults: { legend_mode: "sidebar" }
  }),
  m3("Sunburst", "sunburst", H3, y4, 1, se5, le3, {
    ...ae5
  }),
  m3("Heatmap", "heatmap", H3, x4, 1, ["Color"], Oe3, {
    ...Ge2,
    plugin_field_defaults: { legend_mode: "sidebar" }
  }),
  m3("Candlestick", "candlestick", ie5, y4, 1, oe4, re3, {
    ...ue3,
    default_chart_type: "candlestick",
    plugin_field_defaults: F6
  }),
  m3("OHLC", "ohlc", ie5, y4, 1, oe4, re3, {
    ...ue3,
    default_chart_type: "ohlc",
    plugin_field_defaults: F6
  }),
  m3(
    "Map Scatter",
    "map-scatter",
    Y6,
    y4,
    2,
    ["Longitude", "Latitude", "Color", "Size", "Label", "Tooltip"],
    ze3,
    { ...$6 }
  ),
  m3(
    "Map Line",
    "map-line",
    Y6,
    x4,
    2,
    ["Longitude", "Latitude", "Tooltip"],
    Ue3,
    { ...$6, connects_row_order: true }
  ),
  m3(
    "Map Density",
    "map-density",
    Y6,
    y4,
    2,
    ["Longitude", "Latitude", "Color", "Tooltip"],
    He3,
    { ...$6 }
  )
];
var q6 = $e3;
function L4(r3) {
  let e2 = r3.trim();
  if (e2.startsWith("#")) {
    let i7 = e2.slice(1);
    return i7.length === 3 && (i7 = i7[0] + i7[0] + i7[1] + i7[1] + i7[2] + i7[2]), [
      parseInt(i7.slice(0, 2), 16) / 255,
      parseInt(i7.slice(2, 4), 16) / 255,
      parseInt(i7.slice(4, 6), 16) / 255
    ];
  }
  let t = e2.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  return t ? [+t[1] / 255, +t[2] / 255, +t[3] / 255] : [0.5, 0.5, 0.5];
}
function R4(r3) {
  let e2 = (t) => Math.round(Math.max(0, Math.min(1, t)) * 255).toString(16).padStart(2, "0");
  return `#${e2(r3[0])}${e2(r3[1])}${e2(r3[2])}`;
}
var w3 = [
  { offset: 0, color: [3 / 255, 102 / 255, 214 / 255, 1] },
  { offset: 1, color: [255 / 255, 127 / 255, 14 / 255, 1] }
];
function ce3(r3) {
  if (!r3)
    return w3.slice();
  let e2 = r3.trim();
  if (!e2)
    return w3.slice();
  let t = e2.indexOf("(");
  if (t < 0 || !/^linear-gradient\s*\(/i.test(e2))
    return w3.slice();
  let i7 = e2.lastIndexOf(")");
  if (i7 <= t)
    return w3.slice();
  let n = e2.substring(t + 1, i7), l3 = [], o = 0, a2 = 0;
  for (let u4 = 0; u4 < n.length; u4++) {
    let f3 = n[u4];
    f3 === "(" ? o++ : f3 === ")" ? o-- : f3 === "," && o === 0 && (l3.push(n.substring(a2, u4)), a2 = u4 + 1);
  }
  l3.push(n.substring(a2));
  let s3 = [], h3 = 0;
  if (l3.length > 0) {
    let u4 = l3[0].trim().toLowerCase();
    (u4.startsWith("to ") || /^[-\d.]+(deg|rad|grad|turn)/.test(u4)) && (h3 = 1);
  }
  for (let u4 = h3; u4 < l3.length; u4++) {
    let f3 = l3[u4].trim();
    if (!f3)
      continue;
    let g3 = f3.match(/\s([\-\d.]+)%\s*$/), A4 = g3 ? f3.substring(0, g3.index).trim() : f3, M4 = g3 ? parseFloat(g3[1]) / 100 : null;
    try {
      let C5 = L4(A4);
      s3.push({ color: C5, offset: M4 });
    } catch {
    }
  }
  if (s3.length === 0)
    return w3.slice();
  if (s3.length === 1) {
    let [u4, f3, g3] = s3[0].color;
    return [
      { offset: 0, color: [u4, f3, g3, 1] },
      { offset: 1, color: [u4, f3, g3, 1] }
    ];
  }
  s3[0].offset === null && (s3[0].offset = 0), s3[s3.length - 1].offset === null && (s3[s3.length - 1].offset = 1);
  for (let u4 = 1; u4 < s3.length - 1; u4++) {
    if (s3[u4].offset !== null)
      continue;
    let f3 = u4 + 1;
    for (; f3 < s3.length && s3[f3].offset === null; )
      f3++;
    let g3 = s3[u4 - 1].offset, A4 = s3[f3].offset, M4 = f3 - (u4 - 1);
    for (let C5 = u4; C5 < f3; C5++)
      s3[C5].offset = g3 + (C5 - (u4 - 1)) / M4 * (A4 - g3);
    u4 = f3 - 1;
  }
  let c2 = 0;
  return s3.map((u4) => {
    let f3 = Math.max(c2, Math.min(1, u4.offset));
    return c2 = f3, {
      offset: f3,
      color: [u4.color[0], u4.color[1], u4.color[2], 1]
    };
  });
}
function Xe2(r3) {
  return `${Math.round(Math.max(0, Math.min(1, r3)) * 1e3) / 10}%`;
}
function fe4(r3) {
  return `linear-gradient(to right, ${[...r3].sort((t, i7) => t.offset - i7.offset).map(
    (t) => `${R4([t.color[0], t.color[1], t.color[2]])} ${Xe2(t.offset)}`
  ).join(", ")})`;
}
function de3(r3) {
  return `linear-gradient(to right, ${r3.map(R4).join(", ")})`;
}
function me4(r3, e2) {
  if (r3.length === 0)
    return [0, 0, 0, 1];
  if (e2 <= r3[0].offset)
    return r3[0].color.slice();
  let t = r3[r3.length - 1];
  if (e2 >= t.offset)
    return t.color.slice();
  let i7 = 0, n = r3.length - 1;
  for (; n - i7 > 1; ) {
    let h3 = i7 + n >> 1;
    r3[h3].offset <= e2 ? i7 = h3 : n = h3;
  }
  let l3 = r3[i7], o = r3[n], a2 = o.offset - l3.offset, s3 = a2 > 0 ? (e2 - l3.offset) / a2 : 0;
  return [
    l3.color[0] + (o.color[0] - l3.color[0]) * s3,
    l3.color[1] + (o.color[1] - l3.color[1]) * s3,
    l3.color[2] + (o.color[2] - l3.color[2]) * s3,
    l3.color[3] + (o.color[3] - l3.color[3]) * s3
  ];
}
var ge5 = ':host{--psp-charts--tooltip--color:var(--psp--color);--psp-charts--tooltip--background:var(--psp--background-color);--psp-charts--tooltip--border-color:var(--psp-inactive--border-color);width:100%;height:100%;font-family:inherit;display:block;position:relative;overflow:hidden}.webgl-container{position:absolute;inset:6px}.webgl-canvas{width:100%;height:100%;position:absolute;top:0;left:0}.webgl-gridlines,.webgl-chrome{pointer-events:none;width:100%;height:100%;position:absolute;top:0;left:0}.zoom-controls{z-index:2;pointer-events:auto;display:none;position:absolute;top:8px;left:50%;transform:translate(-50%)}.zoom-controls.visible{gap:6px;display:flex}.zoom-reset{background:var(--psp-charts--tooltip--background);color:var(--psp-charts--tooltip--color);border:1px solid var(--psp-charts--tooltip--border-color);font:11px var(--psp-charts--font-family);cursor:pointer;opacity:.7;border-radius:4px;padding:4px 12px;transition:opacity .15s}.zoom-reset:hover{opacity:1}.webgl-tooltip{pointer-events:auto;font:11px var(--psp-charts--font-family);background:var(--psp-charts--tooltip--background);color:var(--psp-charts--tooltip--color);border:1px solid var(--psp-charts--tooltip--border-color);z-index:10;border-radius:3px;padding:3px;line-height:16px;position:absolute;overflow-y:auto}.webgl-tooltip-commands{border-top:1px solid var(--psp-charts--tooltip--border-color);flex-wrap:wrap;gap:4px;margin-top:4px;padding-top:4px;display:flex}.webgl-tooltip .psp-command-button{box-sizing:border-box;border:1px solid var(--psp-charts--tooltip--border-color);min-width:18px;max-width:100%;height:18px;color:inherit;font:inherit;text-align:center;white-space:nowrap;text-overflow:ellipsis;cursor:pointer;background:0 0;border-radius:3px;margin:0;padding:0 6px;line-height:1;display:inline-block;overflow:hidden}.webgl-tooltip .psp-command-button:hover:not(:disabled){border-color:var(--psp--color);color:var(--psp--background-color);background-color:var(--psp--color)}.webgl-tooltip .psp-command-button:disabled{opacity:.5;cursor:default}.webgl-tooltip .psp-command-button[data-icon]:before{content:"";vertical-align:middle;width:12px;height:12px;-webkit-mask-image:var(--psp-command-button--mask-image);mask-image:var(--psp-command-button--mask-image);background-color:currentColor;margin-right:4px;display:inline-block;-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}';
var pe5 = [
  {
    id: "osm",
    label: "OpenStreetMap",
    template: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "\xA9 OpenStreetMap contributors",
    tile_size: 256,
    max_zoom: 19
  },
  {
    id: "versatiles-satellite",
    label: "Satellite (VersaTiles)",
    template: "https://tiles.versatiles.org/tiles/satellite/{z}/{x}/{y}",
    attribution: "\xA9 VersaTiles (versatiles.org/sources)",
    tile_size: 256,
    max_zoom: 12
  }
];
var Z5 = class {
  constructor(e2, t, i7, n = 256, l3 = 19, o = []) {
    this.id = e2;
    this.template = t;
    this.attribution = i7;
    this.tileSize = n;
    this.maxZoom = l3;
    this.subdomains = o;
  }
  urlFor(e2, t, i7) {
    let n = this.template.replace("{z}", String(e2)).replace("{x}", String(t)).replace("{y}", String(i7));
    if (this.subdomains.length > 0) {
      let l3 = (t + i7) % this.subdomains.length;
      n = n.replace("{s}", this.subdomains[l3]);
    }
    return n;
  }
};
function _e4(r3) {
  if (typeof r3 != "object" || r3 === null)
    throw new TypeError("TileSourceSpec must be an object");
  let e2 = r3, t = (c2) => {
    let d3 = e2[c2];
    if (typeof d3 != "string" || d3.length === 0)
      throw new TypeError(
        `TileSourceSpec.${c2} must be a non-empty string`
      );
    return d3;
  }, i7 = t("id"), n = t("label"), l3 = t("template"), o = t("attribution");
  for (let c2 of ["{z}", "{x}", "{y}"])
    if (!l3.includes(c2))
      throw new TypeError(
        `TileSourceSpec.template must contain "${c2}"`
      );
  let a2 = e2.subdomains ?? [];
  if (!Array.isArray(a2) || a2.some((c2) => typeof c2 != "string" || c2.length === 0))
    throw new TypeError(
      "TileSourceSpec.subdomains must be an array of non-empty strings"
    );
  let s3 = Object.freeze([...a2]);
  if (l3.includes("{s}") && s3.length === 0)
    throw new TypeError(
      'TileSourceSpec.template uses "{s}" but no subdomains were given'
    );
  let h3 = (c2, d3) => {
    let u4 = e2[c2];
    if (u4 === void 0)
      return d3;
    if (typeof u4 != "number" || !Number.isFinite(u4) || u4 <= 0)
      throw new TypeError(
        `TileSourceSpec.${c2} must be a positive number`
      );
    return u4;
  };
  return Object.freeze({
    id: i7,
    label: n,
    template: l3,
    subdomains: s3,
    attribution: o,
    tile_size: h3("tile_size", 256),
    max_zoom: h3("max_zoom", 19)
  });
}
function Ze3(r3) {
  let e2 = 2166136261;
  for (let t = 0; t < r3.length; t++)
    e2 ^= r3.charCodeAt(t), e2 = Math.imul(e2, 16777619);
  return (e2 >>> 0).toString(16);
}
var K5 = class {
  _specs = /* @__PURE__ */ new Map();
  constructor(e2) {
    for (let t of e2) {
      let i7 = _e4(t);
      this._specs.set(i7.id, i7);
    }
  }
  /**
   * Add (or replace, by id) a provider. Validates via
   * {@link parseTileSourceSpec} and returns the normalized spec.
   * Replacement is safe for live charts: the cache identity below is
   * content-derived, so a changed template yields a new cache key
   * and the tile layer drops its stale textures on next bind.
   */
  register(e2) {
    let t = _e4(e2);
    return this._specs.set(t.id, t), t;
  }
  /** Every known spec, bundled first, in insertion order. */
  list() {
    return [...this._specs.values()];
  }
  /** The spec registered under `id`, or `undefined` if unknown. */
  specFor(e2) {
    return this._specs.get(e2);
  }
  /**
   * Resolve a `map_tile_provider` id to a concrete `TileSource`.
   * Unknown ids fall back to the first bundled entry so a
   * misconfigured `plugin_config` never produces a blank map — and
   * so a config restored *before* its custom source is registered
   * degrades to the default basemap until the next config forward
   * carries the registered spec.
   */
  sourceFor(e2) {
    let t = this._specs.get(e2) ?? this._specs.values().next().value, i7 = Ze3(
      `${t.template}\0${t.subdomains.join(",")}`
    );
    return new Z5(
      `${t.id}@${i7}`,
      t.template,
      t.attribution,
      t.tile_size,
      t.max_zoom,
      t.subdomains
    );
  }
};
var p5 = new K5(pe5);
function xe4(r3) {
  return r3 === "overlay" || r3 === "last_group_by_overlay" ? "overlay" : "grid";
}
var ye4 = {
  facet_mode: "grid",
  shared_x_axis: true,
  shared_y_axis: true,
  coordinated_tooltip: false,
  zoom_mode: "shared",
  facet_padding: 6
};
var be3 = {
  auto_alt_y_axis: false,
  facet_mode: "grid",
  facet_zoom_mode: "shared",
  series_zoom_mode: "dynamic",
  include_zero: false,
  domain_mode: "expand",
  line_width_px: 2,
  point_size_px: 8,
  band_inner_frac: 0.5,
  bar_inner_pad: 0.1,
  group_pad: 0,
  wick_width_px: 1,
  ohlc_line_width_px: 1,
  gradient_radius_px: 32,
  gradient_intensity: 0.6,
  gradient_heat_max: 4,
  gradient_color_mode: "mean",
  map_tile_provider: p5.list()[0].id,
  map_tile_alpha: 1,
  numeric_axes: true,
  legend_mode: "auto",
  legend_size_mode: "auto",
  legend_width_px: 0,
  legend_height_px: 160,
  legend_anchor: "top-right",
  legend_x: 0,
  legend_y: 0,
  legend_opacity: 0.8,
  tooltip_max_column_px: 160,
  tooltip_opacity: 0.8,
  tooltip_commands: true
};
var ve5 = {
  notation: "compact",
  compactDisplay: "short",
  minimumFractionDigits: 0,
  maximumFractionDigits: 1
};
var Ce3 = {
  dateStyle: "medium"
};
var we4 = {
  dateStyle: "medium"
};
var k4 = class {
  _element = null;
  _emit = null;
  _pointerId = null;
  _onWheel = null;
  _onPointerDown = null;
  _onPointerMove = null;
  _onPointerUp = null;
  _onPointerLeave = null;
  _onClick = null;
  _onDblClick = null;
  attach(e2, t) {
    this.detach(), this._element = e2, this._emit = t, this._onWheel = (i7) => {
      let n = e2.getBoundingClientRect(), l3 = i7.clientX - n.left, o = i7.clientY - n.top;
      i7.preventDefault(), t({ type: "wheel", mx: l3, my: o, deltaY: i7.deltaY });
    }, this._onPointerDown = (i7) => {
      if (i7.button !== 0)
        return;
      let n = e2.getBoundingClientRect(), l3 = i7.clientX - n.left, o = i7.clientY - n.top;
      e2.setPointerCapture(i7.pointerId), this._pointerId = i7.pointerId, t({ type: "pointerdown", mx: l3, my: o, pointerId: i7.pointerId });
    }, this._onPointerMove = (i7) => {
      let n = e2.getBoundingClientRect(), l3 = i7.clientX - n.left, o = i7.clientY - n.top;
      t({ type: "pointermove", mx: l3, my: o });
    }, this._onPointerUp = (i7) => {
      if (this._pointerId !== null) {
        try {
          e2.releasePointerCapture(this._pointerId);
        } catch {
        }
        this._pointerId = null;
      }
      t({ type: "pointerup" });
    }, this._onPointerLeave = () => {
      t({ type: "pointerleave" });
    }, this._onClick = (i7) => {
      let n = e2.getBoundingClientRect();
      t({
        type: "click",
        mx: i7.clientX - n.left,
        my: i7.clientY - n.top
      });
    }, this._onDblClick = (i7) => {
      let n = e2.getBoundingClientRect();
      t({
        type: "dblclick",
        mx: i7.clientX - n.left,
        my: i7.clientY - n.top
      });
    }, e2.addEventListener("wheel", this._onWheel, { passive: false }), e2.addEventListener("pointerdown", this._onPointerDown), e2.addEventListener("pointermove", this._onPointerMove), e2.addEventListener("pointerup", this._onPointerUp), e2.addEventListener("pointerleave", this._onPointerLeave), e2.addEventListener("click", this._onClick), e2.addEventListener("dblclick", this._onDblClick);
  }
  detach() {
    this._element && (this._onWheel && this._element.removeEventListener("wheel", this._onWheel), this._onPointerDown && this._element.removeEventListener(
      "pointerdown",
      this._onPointerDown
    ), this._onPointerMove && this._element.removeEventListener(
      "pointermove",
      this._onPointerMove
    ), this._onPointerUp && this._element.removeEventListener(
      "pointerup",
      this._onPointerUp
    ), this._onPointerLeave && this._element.removeEventListener(
      "pointerleave",
      this._onPointerLeave
    ), this._onClick && this._element.removeEventListener("click", this._onClick), this._onDblClick && this._element.removeEventListener("dblclick", this._onDblClick)), this._element = null, this._emit = null, this._pointerId = null, this._onPointerLeave = null, this._onClick = null, this._onDblClick = null;
  }
};
var Je3 = [
  "--psp-charts--font-family",
  "font-family",
  "--psp--background-color",
  "--psp-charts--axis-ticks--color",
  "--psp--color",
  "--psp-charts--axis-lines--color",
  "--psp-charts--gridline--color",
  "--psp-charts--gradient--background",
  "--psp-charts--full-gradient--background",
  "--psp-charts--legend--color",
  "--psp-charts--legend-border--color",
  "--psp-charts--tooltip--background",
  "--psp-charts--tooltip--color",
  "--psp-charts--tooltip--border-color",
  "--psp-charts--area--opacity",
  "--psp-charts--heatmap-gap--px",
  "--psp-charts--sunburst-gap--px"
];
var Qe3 = "rgba(0, 0, 0, 0)";
function S4(r3) {
  let e2 = getComputedStyle(r3), t = (n) => {
    let l3 = e2.getPropertyValue(n).trim();
    return l3 === Qe3 ? "" : l3;
  }, i7 = {};
  for (let n of Je3) {
    let l3 = t(n);
    l3 && (i7[n] = l3);
  }
  for (let n = 1; ; n++) {
    let l3 = `--psp-charts--series-${n}--color`, o = t(l3);
    if (!o)
      break;
    i7[l3] = o;
  }
  return i7;
}
function Ae2() {
  let r3 = [];
  for (let e2 of Array.from(document.styleSheets)) {
    let t;
    try {
      t = e2.cssRules;
    } catch {
      continue;
    }
    let i7 = e2.href ?? document.baseURI;
    for (let n of Array.from(t)) {
      if (!(n instanceof CSSFontFaceRule))
        continue;
      let l3 = n.style, o = l3.getPropertyValue("font-family").trim(), a2 = l3.getPropertyValue("src").trim();
      !o || !a2 || r3.push({
        // CSSOM serializes multi-word family names with their
        // CSS quotes preserved (e.g. `"Roboto Mono"`). The
        // `FontFace` constructor *doesn't* unquote on parse —
        // Chromium stores the literal input and re-quotes /
        // escapes on `face.family` getter access, yielding
        // `"\"Roboto Mono\""` and a name that no `ctx.font`
        // lookup can match. Strip one layer of matching outer
        // quotes here so the worker's font set keys align
        // with how Canvas2D resolves family names.
        family: et3(o),
        src: tt3(a2, i7),
        style: v2(l3, "font-style"),
        weight: v2(l3, "font-weight"),
        stretch: v2(l3, "font-stretch"),
        unicodeRange: v2(l3, "unicode-range"),
        variant: v2(l3, "font-variant"),
        featureSettings: v2(l3, "font-feature-settings"),
        display: v2(l3, "font-display")
      });
    }
  }
  return r3;
}
function v2(r3, e2) {
  return r3.getPropertyValue(e2).trim() || void 0;
}
function et3(r3) {
  if (r3.length >= 2) {
    let e2 = r3.charCodeAt(0), t = r3.charCodeAt(r3.length - 1);
    if (e2 === t && (e2 === 34 || e2 === 39))
      return r3.slice(1, -1);
  }
  return r3;
}
function tt3(r3, e2) {
  return r3.replace(
    /url\(\s*(['"]?)([^'")]+)\1\s*\)/g,
    (t, i7, n) => {
      try {
        return `url(${new URL(n, e2).href})`;
      } catch {
        return t;
      }
    }
  );
}
var Me4 = {
  opacity: 1,
  maxColumnPx: 160
};
var Te3 = /^[-+−]?[$€£¥]?\s?\d[\d.,  \s]*(?:[eE][-+]?\d+|[KMB%])?$/;
var Ee3 = 8;
var D6 = class {
  _glCanvas;
  _parent;
  _div = null;
  _hit = null;
  /** `plugin_config.tooltip_commands`: whether pins carry command buttons. */
  commandsEnabled = true;
  constructor(e2, t) {
    this._glCanvas = e2, this._parent = t;
  }
  /** The plugin element hosting the canvas, which identifies its panel. */
  _plugin() {
    let e2 = this._glCanvas.getRootNode();
    return e2 instanceof ShadowRoot ? e2.host : null;
  }
  _viewer() {
    return this._plugin()?.parentElement ?? null;
  }
  /**
   * The app's commands for the pinned mark, or `undefined` when the
   * `"chart-tooltip"` scope is off or the host is too old to ask.
   */
  _queryCommands(e2) {
    let t = this._plugin(), i7 = this._viewer();
    if (!(!t || !i7?.queryCommands))
      return i7.queryCommands(t, "chart-tooltip", e2.frame, [
        e2.ref
      ])?.[0];
  }
  _renderCommands(e2, t) {
    let i7 = e2.querySelector(
      `:scope > .${Q4}`
    ), n = t && this.commandsEnabled ? this._queryCommands(t) : void 0;
    if (!n || n.commands.length === 0) {
      i7?.remove();
      return;
    }
    let l3 = JSON.stringify(n.commands);
    if (i7 && i7[Fe2] === l3) {
      for (let a2 of Array.from(i7.children))
        a2[ee4] = n;
      return;
    }
    let o = this._viewer();
    i7 || (i7 = document.createElement("div"), i7.className = Q4, i7.style.gridColumn = "1 / -1", e2.appendChild(i7)), i7.replaceChildren();
    for (let a2 of n.commands)
      i7.appendChild(nt2(a2, n, o));
    i7[Fe2] = l3;
  }
  /** Re-query and swap the pinned tooltip's buttons, with no redraw. */
  refreshCommands() {
    this._div && this._renderCommands(this._div, this._hit);
  }
  pin(e2, t, i7, n = Me4, l3) {
    let o = this._div ?? document.createElement("div"), a2 = o.querySelector(`:scope > .${Q4}`);
    for (let u4 of Array.from(o.children))
      u4 !== a2 && u4.remove();
    o.className = "webgl-tooltip", o.style.maxHeight = `${Math.round(i7.cssHeight * 0.6)}px`, it3(o, e2, n, a2), this._hit = l3 ?? null, this._renderCommands(o, this._hit), getComputedStyle(this._parent).position === "static" && (this._parent.style.position = "relative"), o.style.left = "-9999px", o.style.top = "0px", this._div || (this._parent.appendChild(o), this._div = o);
    let s3 = o.getBoundingClientRect().width, h3 = o.getBoundingClientRect().height, c2 = t.px + 12, d3 = t.py - h3 - 8;
    c2 + s3 > i7.cssWidth && (c2 = t.px - s3 - 12), c2 < 0 && (c2 = 4), d3 < 0 && (d3 = t.py + 12), d3 + h3 > i7.cssHeight && (d3 = i7.cssHeight - h3 - 4), o.style.left = `${c2}px`, o.style.top = `${d3}px`;
  }
  dismiss() {
    this._div && (this._div.remove(), this._div = null), this._hit = null;
  }
  setCursor(e2) {
    this._glCanvas.style.cursor = e2;
  }
};
function it3(r3, e2, t, i7 = null) {
  let n = e2.reduce((o, a2) => Math.max(o, a2.length), 0);
  if (r3.style.display = "grid", r3.style.gridTemplateColumns = `repeat(${Math.max(1, n)}, minmax(0, max-content))`, r3.style.columnGap = `${Ee3}px`, t.opacity < 1) {
    let o = Math.max(0, Math.round(t.opacity * 100));
    r3.style.background = `color-mix(in srgb, var(--psp-charts--tooltip--background) ${o}%, transparent)`;
  }
  let l3 = [];
  for (let o of e2)
    if (!(o.length <= 1))
      for (let a2 = 1; a2 < o.length; a2++) {
        if (o[a2] === "")
          continue;
        let s3 = Te3.test(o[a2]);
        l3[a2] = (l3[a2] === void 0 || l3[a2]) && s3;
      }
  for (let o of e2) {
    let a2 = o.length <= 1;
    for (let s3 = 0; s3 < Math.max(1, o.length); s3++) {
      let h3 = document.createElement("div");
      if (h3.textContent = o[s3] ?? "", h3.style.maxWidth = `${t.maxColumnPx * (a2 ? 2 : 1)}px`, h3.style.overflow = "hidden", h3.style.textOverflow = "ellipsis", h3.style.whiteSpace = "nowrap", a2 ? h3.style.gridColumn = "1 / -1" : l3[s3] && (h3.style.textAlign = "right"), r3.insertBefore(h3, i7), a2)
        break;
    }
  }
}
var Q4 = "webgl-tooltip-commands";
var Fe2 = Symbol("Perspective Command Specs");
var ee4 = Symbol("Perspective Command Result");
function nt2(r3, e2, t) {
  let i7 = document.createElement("button");
  i7[ee4] = e2, i7.className = "psp-command-button", i7.type = "button", i7.dataset.key = r3.key, i7.title = r3.kind === "Command" && r3.title || r3.label, i7.textContent = r3.label, r3.kind === "Command" && r3.icon && (i7.dataset.icon = r3.icon, i7.style.setProperty(
    "--psp-command-button--mask-image",
    `var(--psp-icon--${r3.icon}--mask-image)`
  )), r3.kind === "Command" && r3.disabled && (i7.disabled = true), i7.addEventListener("click", (n) => {
    n.stopPropagation();
    let l3 = (i7[ee4] ?? e2).context;
    r3.kind === "Group" ? t.showCommandMenu(l3, r3.commands, {
      x: n.clientX,
      y: n.clientY
    }) : t.invokeCommand(r3.key, l3);
  });
  for (let n of ["pointerdown", "mousedown", "mouseup", "dblclick"])
    i7.addEventListener(n, (l3) => l3.stopPropagation());
  return i7;
}
var Re3 = 'var al=Object.defineProperty;var km=(e,t,n)=>t in e?al(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var U=(e,t)=>()=>(e&&(t=e(e=0)),t);var Wm=(e,t)=>{for(var n in t)al(e,n,{get:t[n],enumerable:!0})};var d=(e,t,n)=>km(e,typeof t!="symbol"?t+"":t,n);var mi,Eo=U(()=>{mi="attribute vec2 a_start;attribute vec2 a_end;attribute float a_color_start;attribute float a_color_end;attribute float a_corner;uniform mat4 u_projection;uniform vec2 u_resolution;uniform float u_line_width;uniform vec2 u_color_range;uniform sampler2D u_gradient_lut;varying float v_edge_dist;varying vec3 v_color;float A(float B,float C,float D){if(D<=C){return 0.5;}else if(C<0.&&D>0.){float E=max(-C,D);return clamp(0.5+0.5*(B/E),0.,1.);}return clamp((B-C)/(D-C),0.,1.);}void main(){float C=u_color_range.x;float D=u_color_range.y;float F=0.5*(a_color_start+a_color_end);float G=A(F,C,D);v_color=texture2D(u_gradient_lut,vec2(G,0.5)).rgb;vec4 H=u_projection*vec4(a_start,0.,1.);vec4 I=u_projection*vec4(a_end,0.,1.);vec2 J=H.xy*u_resolution*0.5;vec2 K=I.xy*u_resolution*0.5;vec2 L=K-J;float M=length(L);L=M>0.001?L/M:vec2(1.,0.);vec2 N=vec2(-L.y,L.x);float O=step(1.5,a_corner);float P=1.-mod(a_corner,2.)*2.;vec4 Q=mix(H,I,O);float R=(u_line_width+1.5)*0.5;vec2 S=(N*P*R)/(u_resolution*0.5);gl_Position=Q+vec4(S,0.,0.);v_edge_dist=P;}"});var fi,Po=U(()=>{fi="precision highp float;uniform float u_line_width;varying float v_edge_dist;varying vec3 v_color;void main(){float A=abs(v_edge_dist);float B=u_line_width/(u_line_width+1.5);float C=1.-smoothstep(B,1.,A);gl_FragColor=vec4(v_color,C);}"});var ci,Bo=U(()=>{ci="attribute vec2 a_position;attribute float a_color_value;attribute float a_size_value;uniform mat4 u_projection;uniform float u_point_size;uniform vec2 u_color_range;uniform vec2 u_size_range;uniform vec2 u_point_size_range;varying float v_color_t;varying float v_point_size;void main(){gl_Position=u_projection*vec4(a_position,0.,1.);float A=u_size_range.y-u_size_range.x;if(A>0.){float B=clamp((a_size_value-u_size_range.x)/A,0.,1.);gl_PointSize=mix(u_point_size_range.x,u_point_size_range.y,B);}else{gl_PointSize=u_point_size;}v_point_size=gl_PointSize;float C=u_color_range.x;float D=u_color_range.y;if(D<=C){v_color_t=0.5;}else if(C<0.&&D>0.){float E=max(-C,D);v_color_t=clamp(0.5+0.5*(a_color_value/E),0.,1.);}else{v_color_t=clamp((a_color_value-C)/(D-C),0.,1.);}}"});var di,Go=U(()=>{di="precision highp float;varying float v_color_t;varying float v_point_size;uniform sampler2D u_gradient_lut;void main(){vec2 A=gl_PointCoord-vec2(0.5);float B=length(A);if(B>0.5){discard;}float C=1.5/max(v_point_size,1.);float D=1.-smoothstep(0.5-C,0.5,B);vec4 E=texture2D(u_gradient_lut,vec2(clamp(v_color_t,0.,1.),0.5));gl_FragColor=vec4(E.rgb,E.a*D);}"});var Ut,ko=U(()=>{Ut="attribute vec2 a_corner;attribute vec2 a_position;attribute float a_color_value;uniform vec2 u_radius_ndc;uniform mat4 u_projection;uniform vec2 u_color_range;varying vec2 v_uv;varying float v_color_t;void main(){vec4 A=u_projection*vec4(a_position,0.,1.);gl_Position=A+vec4(a_corner*u_radius_ndc*A.w,0.,0.);v_uv=a_corner;float B=u_color_range.x;float C=u_color_range.y;if(C<=B){v_color_t=0.5;}else if(B<0.&&C>0.){float D=max(-B,C);v_color_t=clamp(0.5+0.5*(a_color_value/D),0.,1.);}else{v_color_t=clamp((a_color_value-B)/(C-B),0.,1.);}}"});var Mi,Wo=U(()=>{Mi="precision highp float;uniform float u_intensity;varying vec2 v_uv;varying float v_color_t;void main(){float A=length(v_uv);float B=max(0.,1.-A);B=B*B*u_intensity;if(B<=0.){discard;}gl_FragColor=vec4(B,B*v_color_t,0.,0.);}"});var wi,No=U(()=>{wi="precision highp float;varying vec2 v_uv;varying float v_color_t;void main(){float A=length(v_uv);if(A>=1.){discard;}float B=(v_color_t-0.5)*2.;gl_FragColor=vec4(max(0.,B),max(0.,-B),0.,0.);}"});var Ri,Oo=U(()=>{Ri="attribute vec2 a_corner;varying vec2 v_uv;void main(){v_uv=a_corner*0.5+0.5;gl_Position=vec4(a_corner,0.,1.);}"});var Fi,Uo=U(()=>{Fi="precision highp float;uniform sampler2D u_heat;uniform sampler2D u_extreme;uniform sampler2D u_gradient_lut;uniform float u_heat_max;uniform int u_color_mode;varying vec2 v_uv;void main(){vec4 A=texture2D(u_heat,v_uv);float B=A.r;float C=A.g;if(B<=0.){discard;}float D;float E;float F=clamp(B/max(u_heat_max,1e-4),0.,1.);if(u_color_mode==0){D=pow(F,0.6);E=clamp(B,0.,1.);}else if(u_color_mode==2){vec4 G=texture2D(u_extreme,v_uv);float H=G.r;float I=G.g;float J=max(H,I);if(J<=0.){D=0.5;}else if(H>=I){D=clamp(0.5+H*0.5,0.5,1.);}else{D=clamp(0.5-I*0.5,0.,0.5);}E=F;}else if(u_color_mode==3){float K=C-0.5*B;float L=clamp(abs(K)/max(u_heat_max,1e-4),0.,1.);float M=K>=0.?1.:-1.;D=clamp(0.5+0.5*M*L,0.,1.);E=L;}else{D=clamp(C/B,0.,1.);E=F;}vec4 N=texture2D(u_gradient_lut,vec2(D,0.5));gl_FragColor=vec4(N.rgb,N.a*E);}"});var Si,Ho=U(()=>{Si="attribute vec2 a_corner;uniform mat4 u_projection;uniform vec2 u_extent_min;uniform vec2 u_extent_max;uniform vec2 u_uv_min;uniform vec2 u_uv_max;varying vec2 v_uv;void main(){vec2 A=mix(u_extent_min,u_extent_max,a_corner);vec2 B=mix(u_uv_min,u_uv_max,vec2(a_corner.x,1.-a_corner.y));v_uv=B;gl_Position=u_projection*vec4(A,0.,1.);}"});var Ii,Vo=U(()=>{Ii="precision highp float;varying vec2 v_uv;uniform sampler2D u_tile;uniform float u_alpha;void main(){vec4 A=texture2D(u_tile,v_uv);gl_FragColor=vec4(A.rgb,A.a*u_alpha);}"});function bf(e,t){if(t.width<=0||t.height<=0)return e;let n=e.xMax-e.xMin,i=e.yMax-e.yMin;if(n<=0||i<=0)return e;let r=t.width/t.height;if(n/i<r){let s=(e.xMin+e.xMax)/2,l=i*r/2;return{xMin:s-l,xMax:s+l,yMin:e.yMin,yMax:e.yMax}}else{let s=(e.yMin+e.yMax)/2,l=n/r/2;return{xMin:e.xMin,xMax:e.xMax,yMin:s-l,yMax:s+l}}}var Ht,Ei=U(()=>{"use strict";Ht=class{constructor(){d(this,"Ae",1);d(this,"Le",1);d(this,"Ue",0);d(this,"He",0);d(this,"Et",0);d(this,"Pt",1);d(this,"Bt",0);d(this,"Gt",1);d(this,"Qe",null);d(this,"Yr",!1);d(this,"er",!1);d(this,"tr",!1);d(this,"kt",null);d(this,"Wt",null);d(this,"di",null);d(this,"nr",!1);d(this,"ir",0);d(this,"rr",0);d(this,"rn",null);d(this,"on",null);d(this,"sn",null);d(this,"ln",null)}get lockedAxis(){return this.Qe}get scaleX(){return this.Ae}get scaleY(){return this.Le}set scaleX(t){this.Ae=t}set scaleY(t){this.Le=t}get normTranslateX(){return this.Ue}get normTranslateY(){return this.He}set normTranslateX(t){this.Ue=t}set normTranslateY(t){this.He=t}get baseXRange(){return this.Pt-this.Et}get baseYRange(){return this.Gt-this.Bt}setBaseDomain(t,n,i,r){let o=n-t;if(this.isXDefault()||!this.er)this.Et=t,this.Pt=n;else{let l=this.Pt-this.Et,a=(this.Et+this.Pt)/2+this.Ue*l;this.Et=t,this.Pt=n,this.Ue=o>0?(a-(t+n)/2)/o:0}let s=r-i;if(this.isYDefault()||!this.tr)this.Bt=i,this.Gt=r;else{let l=this.Gt-this.Bt,a=(this.Bt+this.Gt)/2+this.He*l;this.Bt=i,this.Gt=r,this.He=s>0?(a-(i+r)/2)/s:0}}pinAxis(t){t==="x"?this.er=!0:this.tr=!0}unpinAxis(t){t==="x"?this.er=!1:this.tr=!1}configure(t){this.Qe=t.lockAxis??null,this.Yr=t.lockAspect??!1,this.Qe==="x"?(this.Ae=1,this.Ue=0):this.Qe==="y"&&(this.Le=1,this.He=0)}isXDefault(){return this.Ae===1&&this.Ue===0}isYDefault(){return this.Le===1&&this.He===0}isDefault(){return this.isXDefault()&&this.isYDefault()}getVisibleDomain(){let t=this.Pt-this.Et,n=this.Gt-this.Bt,i=t/this.Ae,r=n/this.Le,o=(this.Et+this.Pt)/2+this.Ue*t,s=(this.Bt+this.Gt)/2+this.He*n,l={xMin:o-i/2,xMax:o+i/2,yMin:s-r/2,yMax:s+r/2};return this.Yr&&this.Wt?bf(l,this.Wt.e):l}attach(t,n,i){this.detach(),this.kt=t,this.Wt=n,this.di=i,this.rn=r=>{r.preventDefault();let o=t.getBoundingClientRect(),s=r.clientX-o.left,l=r.clientY-o.top,a=this.Wt.e;if(s<a.x||s>a.x+a.width||l<a.y||l>a.y+a.height)return;let u=(s-a.x)/a.width,m=(l-a.y)/a.height,f=this.Ae,c=this.Le,p=Math.pow(1.1,-r.deltaY/100);this.Qe!=="x"&&(this.Ae=Math.max(1,Math.min(1e5,this.Ae*p))),this.Qe!=="y"&&(this.Le=Math.max(1,Math.min(1e5,this.Le*p))),this.Qe!=="x"&&f!==this.Ae&&(this.Ue+=(u-.5)*(1/f-1/this.Ae)),this.Qe!=="y"&&c!==this.Le&&(this.He+=(.5-m)*(1/c-1/this.Le)),this.di()},this.on=r=>{if(r.button!==0)return;let o=t.getBoundingClientRect(),s=r.clientX-o.left,l=r.clientY-o.top,a=this.Wt.e;s>=a.x&&s<=a.x+a.width&&l>=a.y&&l<=a.y+a.height&&(this.nr=!0,this.ir=r.clientX,this.rr=r.clientY,t.setPointerCapture(r.pointerId))},this.sn=r=>{if(!this.nr)return;let o=r.clientX-this.ir,s=r.clientY-this.rr;this.ir=r.clientX,this.rr=r.clientY;let l=this.Wt.e;this.Qe!=="x"&&l.width>0&&(this.Ue-=o/(l.width*this.Ae)),this.Qe!=="y"&&l.height>0&&(this.He+=s/(l.height*this.Le)),this.di()},this.ln=()=>{this.nr=!1},t.addEventListener("wheel",this.rn,{passive:!1}),t.addEventListener("pointerdown",this.on),t.addEventListener("pointermove",this.sn),t.addEventListener("pointerup",this.ln)}updateLayout(t){this.Wt=t}detach(){this.kt&&(this.rn&&this.kt.removeEventListener("wheel",this.rn),this.on&&this.kt.removeEventListener("pointerdown",this.on),this.sn&&this.kt.removeEventListener("pointermove",this.sn),this.ln&&this.kt.removeEventListener("pointerup",this.ln)),this.kt=null,this.di=null}reset(){this.Ae=1,this.Le=1,this.Ue=0,this.He=0}serialize(){return{scaleX:this.Ae,scaleY:this.Le,normTranslateX:this.Ue,normTranslateY:this.He}}restore(t){this.Ae=t.scaleX,this.Le=t.scaleY,this.Ue=t.normTranslateX,this.He=t.normTranslateY}}});function ie(e){return{opacity:e.tooltip_opacity,maxColumnPx:e.tooltip_max_column_px}}function Pi(e,t,n){let i=n*2+Yo,r=[],o=[],s=[],l=0;for(let m of t){if(m.length<=1){let c=dl(e,m[0]??"",i);s.push([c]),l=Math.max(l,e.measureText(c).width);continue}let f=[];for(let c=0;c<m.length;c++){let p=m[c]??"",b=dl(e,p,n);if(f.push(b),r[c]=Math.max(r[c]??0,e.measureText(b).width),c>=1&&p!==""){let g=gf.test(p);o[c]=(o[c]===void 0||o[c])&&g}}s.push(f)}let a=0;for(let m=0;m<r.length;m++)a+=r[m]+(m>0?Yo:0);let u=Math.max(l,a);return{rows:s,colWidths:r,colRightAlign:r.map((m,f)=>(o[f]??!1)&&f>=1),boxW:u+Ln*2,boxH:t.length*pl+Ln*2-4}}function Bi(e,t,n,i,r,o){let{rows:s,colWidths:l,colRightAlign:a,boxW:u,boxH:m}=t;e.globalAlpha=Math.min(1,Math.max(0,o)),e.fillStyle=r.pi,e.strokeStyle=r.Xr,e.lineWidth=1,e.beginPath(),e.rect(n,i,u,m),e.fill(),e.stroke(),e.globalAlpha=1,e.fillStyle=r.$r,e.textBaseline="top";for(let f=0;f<s.length;f++){let c=s[f],p=i+Ln+f*pl;if(c.length<=1){e.textAlign="left",e.fillText(c[0],n+Ln,p);continue}let b=n+Ln;for(let g=0;g<c.length;g++){let h=l[g]??0;a[g]?(e.textAlign="right",e.fillText(c[g],b+h,p)):(e.textAlign="left",e.fillText(c[g],b,p)),b+=h+Yo}}e.textAlign="left"}function dl(e,t,n){if(e.measureText(t).width<=n)return t;let i=0,r=t.length;for(;i<r;){let o=i+r+1>>1;e.measureText(t.slice(0,o)+"\\u2026").width<=n?i=o:r=o-1}return t.slice(0,i)+"\\u2026"}var Qe,gf,pl,Ln,Yo,ge=U(()=>{"use strict";Qe={opacity:1,maxColumnPx:160};gf=/^[-+\u2212]?[$\u20AC\xA3\xA5]?\\s?\\d[\\d.,\xA0\u202F\\s]*(?:[eE][-+]?\\d+|[KMB%])?$/,pl=16,Ln=8,Yo=8});var bl=U(()=>{"use strict"});function yt(e){let t=[...e.splitByValues,e.columnName].map(r=>r==null?"":String(r)).join("|"),n=e.rowIdx!=null&&e.rowIdx>=0?e.rowIdx:void 0,i={};return n!==void 0&&(i.__ROW_PATH__=[e.groupByValues]),{frame:{start_row:n??0,start_col:0,paths:[t],column_paths:[...e.splitByValues.map(r=>[r]),[e.columnName]],data:i},ref:n===void 0?{x:0}:{y:n,x:0}}}var ki=U(()=>{"use strict";bl()});function Wi(e){return hl.some(t=>e?.[t]!==void 0)}function yl(e){let t={};return e?.timeZone!==void 0&&(t.timeZone=e.timeZone),e?.hour12!==void 0&&(t.hour12=e.hour12),Object.keys(t).length>0?t:void 0}function _f(e,t){let n={};for(let[r,o]of Object.entries(t??{}))o!=null&&(n[r]=o);let i={...e};for(let r of Cf)if(r.some(o=>o in n))for(let o of r)delete i[o];return Object.assign(i,n)}function Xo(e,t,n){let i=n??yf[e]??{},r=t?_f(i,t):i;return new Intl.NumberFormat(navigator.languages,r)}function xl(e,t,n){let i=[e,t,n],r=i.find(Wi)??{},o={},s=(l,a)=>{a!==void 0&&a[l]!==void 0&&(o[l]=a[l])};for(let l of hl)s(l,r);for(let l of hf)s(l,i.find(a=>a?.[l]!==void 0));return o}function Ni(e,t){return new Intl.DateTimeFormat(navigator.languages,xl(e,t,xf))}function Cl(e,t){let{dateStyle:n}=xl(e,t,gl);return new Intl.DateTimeFormat(navigator.languages,{timeZone:"utc",dateStyle:n??gl.dateStyle})}function Tn(e){return e.split("|").at(-1)??e}var hl,hf,yf,xf,gl,Cf,_l=U(()=>{"use strict";hl=["dateStyle","timeStyle","weekday","year","month","day","hour","minute","second","fractionalSecondDigits"],hf=["timeZone","hour12"];yf={float:{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}},xf={dateStyle:"short",timeStyle:"medium"},gl={dateStyle:"short"},Cf=[["style","currency","currencyDisplay","currencySign","unit","unitDisplay"],["notation","compactDisplay"],["minimumFractionDigits","maximumFractionDigits"],["minimumSignificantDigits","maximumSignificantDigits"]]});var Oi,vl=U(()=>{"use strict";Oi=class{constructor(t,n=128){d(this,"un");d(this,"h",new Map);d(this,"De",new Map);d(this,"jr");this.un=t,this.jr=n}async fetchRow(t){if(!this.un)throw new Error("LazyRowFetcher disposed");let n=this.h.get(t);if(n)return this.h.delete(t),this.h.set(t,n),n;let i=this.De.get(t);if(i)return i;let r=this.Go(t);this.De.set(t,r);try{let o=await r;if(!this.un)return o;if(this.h.set(t,o),this.h.size>this.jr){let s=this.h.keys().next().value;s!==void 0&&this.h.delete(s)}return o}finally{this.De.delete(t)}}async Go(t){let n=this.un;if(!n)throw new Error("LazyRowFetcher disposed");let i=new Map;return await n.with_typed_arrays({start_row:t,end_row:t+1,float32:!0},(r,o,s,l)=>{for(let a=0;a<r.length;a++){let u=r[a];if(u.startsWith("__"))continue;let m=o[a],f=s[a],c=l[a];(f?!(f[0]>>0&1):!1)?i.set(u,null):c?i.set(u,c[m[0]]):i.set(u,m[0])}}),i}dispose(){this.un=null,this.h.clear(),this.De.clear()}get isDisposed(){return this.un===null}}});var $o,Ui,Al,Ll=U(()=>{"use strict";$o={notation:"compact",compactDisplay:"short",minimumFractionDigits:0,maximumFractionDigits:1},Ui={dateStyle:"medium"},Al={dateStyle:"medium"}});var Ml,Tl=U(()=>{Ml=[{id:"osm",label:"OpenStreetMap",template:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\\xA9 OpenStreetMap contributors",tile_size:256,max_zoom:19},{id:"versatiles-satellite",label:"Satellite (VersaTiles)",template:"https://tiles.versatiles.org/tiles/satellite/{z}/{x}/{y}",attribution:"\\xA9 VersaTiles (versatiles.org/sources)",tile_size:256,max_zoom:12}]});function wl(e){if(typeof e!="object"||e===null)throw new TypeError("TileSourceSpec must be an object");let t=e,n=m=>{let f=t[m];if(typeof f!="string"||f.length===0)throw new TypeError(`TileSourceSpec.${m} must be a non-empty string`);return f},i=n("id"),r=n("label"),o=n("template"),s=n("attribution");for(let m of["{z}","{x}","{y}"])if(!o.includes(m))throw new TypeError(`TileSourceSpec.template must contain "${m}"`);let l=t.subdomains??[];if(!Array.isArray(l)||l.some(m=>typeof m!="string"||m.length===0))throw new TypeError("TileSourceSpec.subdomains must be an array of non-empty strings");let a=Object.freeze([...l]);if(o.includes("{s}")&&a.length===0)throw new TypeError(\'TileSourceSpec.template uses "{s}" but no subdomains were given\');let u=(m,f)=>{let c=t[m];if(c===void 0)return f;if(typeof c!="number"||!Number.isFinite(c)||c<=0)throw new TypeError(`TileSourceSpec.${m} must be a positive number`);return c};return Object.freeze({id:i,label:r,template:o,subdomains:a,attribution:s,tile_size:u("tile_size",256),max_zoom:u("max_zoom",19)})}function Af(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0).toString(16)}var jo,Zo,et,Hi=U(()=>{"use strict";Tl();jo=class{constructor(t,n,i,r=256,o=19,s=[]){this.id=t;this.template=n;this.attribution=i;this.tileSize=r;this.maxZoom=o;this.subdomains=s}urlFor(t,n,i){let r=this.template.replace("{z}",String(t)).replace("{x}",String(n)).replace("{y}",String(i));if(this.subdomains.length>0){let o=(n+i)%this.subdomains.length;r=r.replace("{s}",this.subdomains[o])}return r}};Zo=class{constructor(t){d(this,"mn",new Map);for(let n of t){let i=wl(n);this.mn.set(i.id,i)}}register(t){let n=wl(t);return this.mn.set(n.id,n),n}list(){return[...this.mn.values()]}specFor(t){return this.mn.get(t)}sourceFor(t){let n=this.mn.get(t)??this.mn.values().next().value,i=Af(`${n.template}\\0${n.subdomains.join(",")}`);return new jo(`${n.id}@${i}`,n.template,n.attribution,n.tile_size,n.max_zoom,n.subdomains)}},et=new Zo(Ml)});function Rl(e){return e==="overlay"||e==="last_group_by_overlay"?"overlay":"grid"}var Fl,Oe,qo=U(()=>{"use strict";Hi();Fl={facet_mode:"grid",shared_x_axis:!0,shared_y_axis:!0,coordinated_tooltip:!1,zoom_mode:"shared",facet_padding:6},Oe={auto_alt_y_axis:!1,facet_mode:"grid",facet_zoom_mode:"shared",series_zoom_mode:"dynamic",include_zero:!1,domain_mode:"expand",line_width_px:2,point_size_px:8,band_inner_frac:.5,bar_inner_pad:.1,group_pad:0,wick_width_px:1,ohlc_line_width_px:1,gradient_radius_px:32,gradient_intensity:.6,gradient_heat_max:4,gradient_color_mode:"mean",map_tile_provider:et.list()[0].id,map_tile_alpha:1,numeric_axes:!0,legend_mode:"auto",legend_size_mode:"auto",legend_width_px:0,legend_height_px:160,legend_anchor:"top-right",legend_x:0,legend_y:0,legend_opacity:.8,tooltip_max_column_px:160,tooltip_opacity:.8,tooltip_commands:!0}});function Ue(e,t,n,i,r,o,s={}){if(!e)return;let l=e.getContext("2d");if(!l)return;l.save(),l.setTransform(1,0,0,1,0,0),l.scale(o,o),l.font=`11px ${r.fontFamily}`;let a=Pi(l,n,s.maxColumnPx??Qe.maxColumnPx),{boxW:u,boxH:m}=a,f=t.px+12,c=t.py-m-8;f+u>i.cssWidth&&(f=t.px-u-12),c<0&&(c=t.py+12),c+m>i.cssHeight&&(c=i.cssHeight-m-4),s.crosshair&&(l.strokeStyle=r.At,l.globalAlpha=.3,l.lineWidth=1,l.setLineDash([4,4]),l.beginPath(),l.moveTo(t.px,i.e.y),l.lineTo(t.px,i.e.y+i.e.height),l.moveTo(i.e.x,t.py),l.lineTo(i.e.x+i.e.width,t.py),l.stroke(),l.setLineDash([]),l.globalAlpha=1),s.highlightRadius&&s.highlightRadius>0&&(l.strokeStyle=r.At,l.globalAlpha=.8,l.lineWidth=2,l.beginPath(),l.arc(t.px,t.py,s.highlightRadius,0,Math.PI*2),l.stroke(),l.globalAlpha=1),n.length>0&&Bi(l,a,f,c,r,s.opacity??Qe.opacity),l.restore()}var Vi,Vt=U(()=>{"use strict";ge();Vi=class{constructor(){d(this,"Ee",null);d(this,"fn",0);d(this,"cn",null);d(this,"Fn",null);d(this,"rt",!1);d(this,"hitAt",null);d(this,"Zr",null);d(this,"Sn",null)}get isPinned(){return this.rt}setHost(t){this.rt&&(this.Fn?.dismiss(),this.rt=!1),this.Fn=t}setCursor(t){this.Fn?.setCursor(t)}attach(t){this.detach(),this.Ee=t}detach(){this.fn&&(cancelAnimationFrame(this.fn),this.fn=0),this.cn!==null&&(clearTimeout(this.cn),this.cn=null),this.Ee=null}dispatchHover(t,n){if(this.Sn={mx:t,my:n},this.rt||!this.Ee||this.fn||this.cn!==null)return;let i=()=>{this.fn=0,this.cn=null,this.Ee?.onHover(t,n)};typeof requestAnimationFrame=="function"?this.fn=requestAnimationFrame(i):this.cn=setTimeout(i,16)}dispatchLeave(){this.Sn=null,!(this.rt||!this.Ee)&&this.Ee.onLeave()}rehover(){this.rt||!this.Ee||!this.Sn||this.Ee.onHover(this.Sn.mx,this.Sn.my)}dispatchClick(t,n){if(this.Ee&&!this.Ee.onClickPre?.(t,n)){if(this.rt){let i=this.Ee;this.dismiss(),i.onUnpin?.();return}this.Zr=this.hitAt?.(t,n)??null,this.Ee.onPin?.(t,n)}}dispatchDblClick(t,n){this.Ee?.onDblClick?.(t,n)}pin(t,n,i,r=Qe,o=this.Zr??void 0){t.length!==0&&(this.Fn?.pin(t,n,i,r,o),this.rt=!0)}dismiss(){this.Fn?.dismiss(),this.rt=!1}}});function ve(e,t,n){return Math.min(n,Math.max(t,e))}function Ko(e){return Number.isFinite(e)?ve(e,0,1):0}function Il(e,t){if(t<=0)return 0;let n=Math.round(e);return n<=0?0:n>=Math.round(t)?1:Ko(n/t)}function Dl(e){return e==="top-right"||e==="bottom-right"}function El(e){return e==="bottom-left"||e==="bottom-right"}function Me(e,t){return e.legend_width_px>0?ve(e.legend_width_px,Ct,Yi):t}function le(e,t){return e.legend_mode!=="auto"?e.legend_mode:t<=Ff?"floating":"sidebar"}function nt(e,t,n=80,i=0){return!t||le(e,i)!=="sidebar"?16:Me(e,n)}function ji(e,t,n,i=0){return!t||le(e,i)!=="sidebar"?0:Me(e,n)}function zt(e){return Math.round(e*1e4)/1e4}var Ct,Yi,zi,Lf,Tf,tt,Mn,Pl,Jo,$i,Qo,Bl,Mf,xt,Sl,wf,Rf,Ff,Sf,Xi,He=U(()=>{"use strict";qo();Ct=48,Yi=512,zi=48,Lf=160,Tf=160,tt=18,Mn=18,Pl=8,Jo=12,$i=8,Qo=16,Bl=16,Mf=10,xt=5,Sl=12,wf=10,Rf=3;Ff=7;Sf=["legend_mode","legend_size_mode","legend_width_px","legend_height_px","legend_anchor","legend_x","legend_y","legend_opacity"],Xi=class e{constructor(){d(this,"Te",null);d(this,"Nt",0);d(this,"je",null);d(this,"dn",!1);d(this,"or",!1);d(this,"qr","")}clampScroll(t,n){return this.Nt=ve(this.Nt,0,Math.max(0,n-t)),this.Nt}setPainted(t){this.Te=t}clearPainted(){this.Te=null}floatingBox(t,n,i,r){let o=t.legend_size_mode!=="fixed",s=o?r?.boxWidth?.()??0:0,l=o?r?.entryCount??0:0,a=s>0?s:t.legend_width_px>0&&!o?t.legend_width_px:Lf,u=l>0?tt+$i+l*Mn:t.legend_height_px>0&&!o?t.legend_height_px:Tf,m=ve(u,zi,Math.max(zi,i-8)),f=m<u,c=ve(a+(f&&s>0?Mf:0),Ct,Math.max(Ct,Math.floor(n/2))),p=Math.max(0,n-c),b=Math.max(0,i-m),g=Ko(t.legend_x)*p,h=Ko(t.legend_y)*b;return{x:Math.round(Dl(t.legend_anchor)?p-g:g),y:Math.round(El(t.legend_anchor)?b-h:h),width:c,height:m}}reconcileConfig(t,n){if(this.je){for(let i of Sf)if(t[i]!==n[i]){this.je=null;return}}}cancelGesture(){this.je=null,this.dn=!1}handleEvent(t,n){switch(t.type){case"wheel":return this.rn(t.mx,t.my,t.deltaY,n);case"pointerdown":return this.on(t.mx,t.my,n);case"pointermove":return this.sn(t.mx,t.my,n);case"pointerup":return this.ln(n);case"click":return this.ko(t.mx,t.my,n);case"dblclick":return this.Wo(t.mx,t.my,n);case"pointerleave":return this.or=!1,this.bi("",n),!1}}hitTest(t,n){let i=this.Te;if(!i)return"none";let r=i.box;if(i.mode==="floating"){let s=t>=r.x-xt&&t<=r.x+r.width+xt,l=n>=r.y-xt&&n<=r.y+r.height+xt;if(!s||!l)return"none";let a=Math.abs(t-r.x)<=xt,u=Math.abs(t-(r.x+r.width))<=xt,m=Math.abs(n-(r.y+r.height))<=xt;return u&&n>=r.y+r.height-Sl||m&&t>=r.x+r.width-Sl?"resize-se":u?"resize-e":a?"resize-w":m?"resize-s":this.Kr(t,n)?"scrollbar":n<=r.y+tt?"move":"body"}let o=n>=r.y&&n<=r.y+r.height;return o&&t>=r.x-14&&t<=r.x+2?"resize-w":o&&t>=r.x&&t<=r.x+r.width?this.Kr(t,n)?"scrollbar":"body":"none"}Jr(){let t=this.Te;return!!t&&t.contentHeight>t.content.height+.5}Kr(t,n){let i=this.Te;if(!i||!this.Jr())return!1;let r=i.content;return t>=r.x+r.width-wf&&t<=r.x+r.width&&n>=r.y&&n<=r.y+r.height}rn(t,n,i,r){return this.je?!0:this.hitTest(t,n)==="none"?!1:(this.Jr()&&this.Qr(this.Nt+i,r),!0)}on(t,n,i){let r=this.hitTest(t,n);if(r==="none")return!1;let o=this.Te;if(this.dn=!1,r==="scrollbar")return this.je={kind:"scrollbar",startMy:n,startScroll:this.Nt},!0;let s={legend_size_mode:i.cfg.legend_size_mode,legend_width_px:i.cfg.legend_width_px,legend_height_px:i.cfg.legend_height_px,legend_x:i.cfg.legend_x,legend_y:i.cfg.legend_y};return r==="resize-w"||r==="resize-e"||r==="resize-s"||r==="resize-se"?(this.je={kind:r,startMx:t,startMy:n,startBox:{...o.box},startGutter:o.sidebarGutter??o.box.width,snapshot:s},this.bi(r==="resize-s"?"ns-resize":r==="resize-se"?"nwse-resize":"ew-resize",i),!0):(o.mode==="floating"&&(this.je={kind:"move",startMx:t,startMy:n,startBox:{...o.box},moved:!1,snapshot:s}),!0)}sn(t,n,i){if(this.je)return this.No(t,n,i),!0;let r=this.hitTest(t,n),o=r!=="none";return o&&!this.or&&i.dispatchLeave(),this.or=o,this.bi(e.Oo(r),i),o&&this.Te.mode==="floating"}ln(t){let n=this.je;if(!n)return!1;if(this.je=null,n.kind==="scrollbar")return this.dn=!0,!0;if(n.kind==="move"&&!n.moved)return!0;this.dn=!0;let i={},r=t.cfg;return r.legend_size_mode!==n.snapshot.legend_size_mode&&(i.legend_size_mode=r.legend_size_mode),r.legend_width_px!==n.snapshot.legend_width_px&&(i.legend_width_px=Math.round(r.legend_width_px)),r.legend_height_px!==n.snapshot.legend_height_px&&(i.legend_height_px=Math.round(r.legend_height_px)),zt(r.legend_x)!==zt(n.snapshot.legend_x)&&(i.legend_x=zt(r.legend_x)),zt(r.legend_y)!==zt(n.snapshot.legend_y)&&(i.legend_y=zt(r.legend_y)),Object.keys(i).length>0&&t.postDelta(i),!0}Wo(t,n,i){let r=this.hitTest(t,n);if(r==="none")return!1;let o=r==="resize-w"||r==="resize-e"||r==="resize-se",s=r==="resize-s"||r==="resize-se";if(!o&&!s)return this.Te.mode==="floating";let l=i.cfg,a={};return this.Te.mode==="floating"&&l.legend_size_mode!==Oe.legend_size_mode&&(l.legend_size_mode=Oe.legend_size_mode,a.legend_size_mode=l.legend_size_mode),o&&l.legend_width_px!==Oe.legend_width_px&&(l.legend_width_px=Oe.legend_width_px,a.legend_width_px=l.legend_width_px),s&&l.legend_height_px!==Oe.legend_height_px&&(l.legend_height_px=Oe.legend_height_px,a.legend_height_px=l.legend_height_px),Object.keys(a).length>0&&(i.repaint(this.Te.mode==="sidebar"),i.postDelta(a)),!0}ko(t,n,i){if(this.dn)return this.dn=!1,!0;let r=this.hitTest(t,n);if(r==="none")return!1;if(r==="scrollbar")return!0;if(this.Te.mode==="floating"){for(let o of i.legendRects){let s=o.rect;if(t>=s.x&&t<=s.x+s.width&&n>=s.y&&n<=s.y+s.height)return!1}return!0}return!1}No(t,n,i){let r=this.je,o=i.cfg,{cssWidth:s,cssHeight:l}=i,a=Math.max(Ct,Math.floor(s/2));switch(r.kind){case"scrollbar":{let u=this.Te;if(!u||u.content.height<=0)return;let m=u.contentHeight/u.content.height;this.Qr(r.startScroll+(n-r.startMy)*m,i);return}case"move":{if(!r.moved){if(Math.hypot(t-r.startMx,n-r.startMy)<Rf)return;r.moved=!0,this.bi("grabbing",i)}let u=r.startBox.width,m=r.startBox.height,f=ve(r.startBox.x+(t-r.startMx),0,Math.max(0,s-u)),c=ve(r.startBox.y+(n-r.startMy),0,Math.max(0,l-m));this.gi(i,f,c,u,m),i.repaint(!1);return}case"resize-w":{if(this.Te?.mode==="sidebar"){o.legend_width_px=ve(Math.round(r.startGutter+(r.startMx-t)),Ct,Math.min(Yi,a)),i.repaint(!0);return}this.sr(i,r.startBox);let u=r.startBox.x+r.startBox.width,m=ve(Math.round(r.startBox.width+(r.startMx-t)),Ct,Math.min(Yi,a));o.legend_width_px=m,this.gi(i,u-m,r.startBox.y,m,r.startBox.height),i.repaint(!1);return}case"resize-e":case"resize-se":{this.sr(i,r.startBox);let u=ve(Math.round(r.startBox.width+(t-r.startMx)),Ct,Math.min(Yi,a));o.legend_width_px=u;let m=r.kind==="resize-se"?this.eo(r.startBox,r.startMy,n,i):r.startBox.height;this.gi(i,r.startBox.x,r.startBox.y,u,m),i.repaint(!1);return}case"resize-s":{this.sr(i,r.startBox);let u=this.eo(r.startBox,r.startMy,n,i);this.gi(i,r.startBox.x,r.startBox.y,r.startBox.width,u),i.repaint(!1);return}}}sr(t,n){t.cfg.legend_size_mode!=="fixed"&&(t.cfg.legend_size_mode="fixed",t.cfg.legend_width_px=Math.round(n.width),t.cfg.legend_height_px=Math.round(n.height))}eo(t,n,i,r){let o=ve(Math.round(t.height+(i-n)),zi,Math.max(zi,r.cssHeight-8));return r.cfg.legend_height_px=o,o}gi(t,n,i,r,o){let s=Math.max(0,t.cssWidth-r),l=Math.max(0,t.cssHeight-o),a=t.cfg.legend_anchor;t.cfg.legend_x=Il(Dl(a)?s-n:n,s),t.cfg.legend_y=Il(El(a)?l-i:i,l)}Qr(t,n){let i=this.Te;if(!i)return;let r=ve(t,0,Math.max(0,i.contentHeight-i.content.height));r!==this.Nt&&(this.Nt=r,n.repaint(!1))}static Oo(t){switch(t){case"resize-w":case"resize-e":return"ew-resize";case"resize-s":return"ns-resize";case"resize-se":return"nwse-resize";case"move":return"grab";default:return""}}bi(t,n){t!==this.qr&&(this.qr=t,n.setCursor(t))}}});function Zi(e){let t=e.trim();if(t.startsWith("#")){let i=t.slice(1);return i.length===3&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]),[parseInt(i.slice(0,2),16)/255,parseInt(i.slice(2,4),16)/255,parseInt(i.slice(4,6),16)/255]}let n=t.match(/rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)/);return n?[+n[1]/255,+n[2]/255,+n[3]/255]:[.5,.5,.5]}var es=U(()=>{"use strict"});function Gl(e){if(!e)return _t.slice();let t=e.trim();if(!t)return _t.slice();let n=t.indexOf("(");if(n<0||!/^linear-gradient\\s*\\(/i.test(t))return _t.slice();let i=t.lastIndexOf(")");if(i<=n)return _t.slice();let r=t.substring(n+1,i),o=[],s=0,l=0;for(let c=0;c<r.length;c++){let p=r[c];p==="("?s++:p===")"?s--:p===","&&s===0&&(o.push(r.substring(l,c)),l=c+1)}o.push(r.substring(l));let a=[],u=0;if(o.length>0){let c=o[0].trim().toLowerCase();(c.startsWith("to ")||/^[-\\d.]+(deg|rad|grad|turn)/.test(c))&&(u=1)}for(let c=u;c<o.length;c++){let p=o[c].trim();if(!p)continue;let b=p.match(/\\s([\\-\\d.]+)%\\s*$/),g=b?p.substring(0,b.index).trim():p,h=b?parseFloat(b[1])/100:null;try{let y=Zi(g);a.push({color:y,offset:h})}catch{}}if(a.length===0)return _t.slice();if(a.length===1){let[c,p,b]=a[0].color;return[{offset:0,color:[c,p,b,1]},{offset:1,color:[c,p,b,1]}]}a[0].offset===null&&(a[0].offset=0),a[a.length-1].offset===null&&(a[a.length-1].offset=1);for(let c=1;c<a.length-1;c++){if(a[c].offset!==null)continue;let p=c+1;for(;p<a.length&&a[p].offset===null;)p++;let b=a[c-1].offset,g=a[p].offset,h=p-(c-1);for(let y=c;y<p;y++)a[y].offset=b+(y-(c-1))/h*(g-b);c=p-1}let m=0;return a.map(c=>{let p=Math.max(m,Math.min(1,c.offset));return m=p,{offset:p,color:[c.color[0],c.color[1],c.color[2],1]}})}function ts(e){let t=e.trim();if(t.startsWith("#")){let a=t.slice(1);return/^[0-9a-f]+$/i.test(a)?a.length===3||a.length===4?[parseInt(a[0]+a[0],16)/255,parseInt(a[1]+a[1],16)/255,parseInt(a[2]+a[2],16)/255]:a.length===6||a.length===8?[parseInt(a.slice(0,2),16)/255,parseInt(a.slice(2,4),16)/255,parseInt(a.slice(4,6),16)/255]:null:null}let n=t.match(/^rgba?\\(([^)]*)\\)$/i);if(!n)return null;let i=n[1].split("/")[0].split(/[\\s,]+/).filter(a=>a.length>0);if(i.length<3||i.length>4)return null;let r=a=>{let u=a.endsWith("%"),m=parseFloat(u?a.slice(0,-1):a);if(!isFinite(m))return null;let f=u?m/100*255:m;return Math.max(0,Math.min(255,Math.round(f)))/255},o=r(i[0]),s=r(i[1]),l=r(i[2]);return o===null||s===null||l===null?null:[o,s,l]}function kl(e){let t=e.trim().match(/^linear-gradient\\s*\\((.*)\\)$/is);if(!t)return null;let n=t[1],i=[],r=0,o=0;for(let l=0;l<n.length;l++){let a=n[l];a==="("?r++:a===")"?r--:a===","&&r===0&&(i.push(n.substring(o,l)),o=l+1)}i.push(n.substring(o));let s=[];for(let l=0;l<i.length;l++){let a=i[l].trim();if(!a)return null;let u=a.toLowerCase();if(l===0&&(u.startsWith("to ")||/^[-\\d.]+(deg|rad|grad|turn)$/.test(u)))continue;let m=a.match(/\\s([^\\s)]+)$/),f=a,c=null;if(m){let b=m[1];if(b.endsWith("%")){let g=parseFloat(b.slice(0,-1));if(!isFinite(g))return null;f=a.substring(0,m.index).trim(),c=g/100}else if(/^[-\\d.]/.test(b))return null}let p=ts(f);if(!p)return null;s.push([p,c])}return s}function Wl(e){let t=kl(e);if(!t||t.length<2)return null;let n=t.map(([,o])=>o),i=n.length-1;n[0]===null&&(n[0]=0),n[i]===null&&(n[i]=1);for(let o=1;o<i;o++){if(n[o]!==null)continue;let s=o+1;for(;n[s]===null;)s++;let l=n[o-1],a=n[s],u=s-(o-1);for(let m=o;m<s;m++)n[m]=l+(m-(o-1))/u*(a-l);o=s-1}let r=t.map(([o],s)=>({offset:Math.max(0,Math.min(1,n[s])),color:[o[0],o[1],o[2],1]}));return r.sort((o,s)=>o.offset-s.offset),r}function qi(e){let t=kl(e);if(!t||t.length===0)return null;let n=[];for(let[i,r]of t){if(r!==null)return null;n.push(i)}return n}function Ee(e,t){if(e.length===0)return[0,0,0,1];if(t<=e[0].offset)return e[0].color.slice();let n=e[e.length-1];if(t>=n.offset)return n.color.slice();let i=0,r=e.length-1;for(;r-i>1;){let u=i+r>>1;e[u].offset<=t?i=u:r=u}let o=e[i],s=e[r],l=s.offset-o.offset,a=l>0?(t-o.offset)/l:0;return[o.color[0]+(s.color[0]-o.color[0])*a,o.color[1]+(s.color[1]-o.color[1])*a,o.color[2]+(s.color[2]-o.color[2])*a,o.color[3]+(s.color[3]-o.color[3])*a]}function vt(e,t,n){if(!isFinite(e)||t===n)return .5;let i;if(t>=0?i=n:n<=0?i=-t:i=Math.max(-t,n),i<=0)return .5;let r=.5+.5*(e/i);return r<0?0:r>1?1:r}function Ki(e,t){if(!isFinite(e)||!isFinite(t)||e>=t)return[0,0];let n;return e>=0?n=t:t<=0?n=-e:n=Math.max(-e,t),n<=0?[0,0]:[-n,n]}function Nl(e){if(e.length===0)return _t.slice();if(e.length===1){let[n,i,r]=e[0];return[{offset:0,color:[n,i,r,1]},{offset:1,color:[n,i,r,1]}]}let t=e.length-1;return e.map(([n,i,r],o)=>({offset:o/t,color:[n,i,r,1]}))}function Ol(e,t=256){let n=new Uint8Array(t*4);for(let i=0;i<t;i++){let r=t===1?0:i/(t-1),o=Ee(e,r);n[i*4]=Math.round(o[0]*255),n[i*4+1]=Math.round(o[1]*255),n[i*4+2]=Math.round(o[2]*255),n[i*4+3]=Math.round(o[3]*255)}return n}var _t,he=U(()=>{"use strict";es();_t=[{offset:0,color:[3/255,102/255,214/255,1]},{offset:1,color:[255/255,127/255,14/255,1]}]});function If(e){return isFinite(e)?e<0?0:e>1?1:e:.5}function Ul(e){return!isFinite(e)||e<0?1:e}function Hl(e){let t=(o,s)=>e[o]||s,n=e["--psp-charts--gradient--background"]||e["--psp-charts--full-gradient--background"]||"linear-gradient(#0366d6 0%, #ff7f0e 100%)",i=Gl(n),r=[];for(let o=1;;o++){let s=e[`--psp-charts--series-${o}--color`];if(!s)break;r.push(Zi(s))}return{fontFamily:t("--psp-charts--font-family",t("font-family","monospace")),backgroundColor:t("--psp--background-color","rgba(255, 255, 255, 1)"),At:t("--psp-charts--axis-ticks--color","rgba(160, 0, 0, 0.8)"),Pe:t("--psp--color","rgba(180, 0, 0, 0.9)"),yi:t("--psp-charts--axis-lines--color","rgba(160, 0, 0, 0.4)"),In:t("--psp-charts--gridline--color","rgba(255, 0, 0, 1)"),O:i,pn:t("--psp-charts--legend--color","rgba(180, 180, 180, 0.9)"),lr:t("--psp-charts--legend-border--color","rgba(128,128,128,0.3)"),pi:t("--psp-charts--tooltip--background","rgba(155,155,155,0.8)"),$r:t("--psp-charts--tooltip--color","#161616"),Xr:t("--psp-charts--tooltip--border-color","#fff"),xi:If(parseFloat(t("--psp-charts--area--opacity","0.85"))),to:Ul(parseFloat(t("--psp-charts--heatmap-gap--px","0"))),no:Ul(parseFloat(t("--psp-charts--sunburst-gap--px","1"))),Ve:r}}var Vl=U(()=>{"use strict";es();he()});function zl(e,t,n){if(!n)return e;let i=t?.[n];if(!i)return e;let r=e,o=Ef(i.gradient);o&&(r={...r,O:o});let s=Df(i.palette);return s&&(r={...r,Ve:s}),r}function Df(e){return typeof e!="string"?null:qi(e)}function Ef(e){return typeof e!="string"?null:Wl(e)}var Yl=U(()=>{"use strict";he()});function $l(e,t,n){let i=At.get(e);i?(i.fullRender=t,i.render2D=n):(i={glManager:e,fullRender:t,render2D:n,waiters:[]},At.set(e,i));let r=Promise.withResolvers();return i.waiters.push(r),Ji||(Ji=Kl(ql)),r.promise}function jl(e,t){if(!Qi.has(e)){t();return}let n=wn.get(e);n||(n=[],wn.set(e,n)),n.push(t)}function Zl(e){let t=At.get(e);if(t){At.delete(e);for(let n of t.waiters)n.resolve()}wn.delete(e),Qi.delete(e)}async function ql(){let e=Array.from(At.values());At.clear();let t=new Map;for(let n of e){if(n.glManager.isContextLost()){for(let o of n.waiters)o.resolve();continue}let i=n.glManager.backendId,r=t.get(i);r?r.push(n):t.set(i,[n])}await Promise.all(Array.from(t.values()).map(Pf)),Ji=0,At.size>0&&(Ji=Kl(ql))}async function Pf(e){for(let t of e)await Bf(t)}async function Bf(e){Qi.add(e.glManager);try{e.glManager.beginFrame(),e.fullRender()}catch(t){console.error("scheduler: fullRender threw",t);for(let n of e.waiters)n.reject(t);Xl(e.glManager);return}try{await e.glManager.awaitGpuFence(),e.render2D(),await e.glManager.endFrame();for(let t of e.waiters)t.resolve()}catch(t){console.error("scheduler: present failed",t);try{await e.glManager.endFrame()}catch{}for(let n of e.waiters)n.reject(t)}finally{Xl(e.glManager)}}function Xl(e){Qi.delete(e);let t=wn.get(e);if(t){wn.delete(e);for(let n of t)try{n()}catch(i){console.error("scheduler: deferred op threw",i)}}}function Kl(e){return typeof requestAnimationFrame=="function"?requestAnimationFrame(e):setTimeout(e,16)}var At,Ji,Qi,wn,ns=U(()=>{"use strict";At=new Map,Ji=0,Qi=new Set,wn=new Map});var Gf,kf,Pe,Rn=U(()=>{"use strict";_l();vl();Ll();Ei();qo();Vt();He();ki();Vl();Yl();ns();Gf=(()=>{let e=Xo("float",void 0,$o);return t=>e.format(t)})(),kf=(()=>{let e=Ni(void 0,Ui);return t=>e.format(t)})(),Pe=class{constructor(){d(this,"i",null);d(this,"ne",null);d(this,"l",null);d(this,"io",null);d(this,"Dn",[]);d(this,"ro",{});d(this,"C",null);d(this,"En",[]);d(this,"T",[]);d(this,"p",[]);d(this,"P",[]);d(this,"ot",{});d(this,"Ci",!1);d(this,"_i",!1);d(this,"st",{});d(this,"Pn",{});d(this,"ar",new Map);d(this,"Lt",new Map);d(this,"ur",new Map);d(this,"vi");d(this,"W",{...Fl});d(this,"t",{...Oe});d(this,"I",new Xi);d(this,"v",(()=>{let t=new Vi;return t.hitAt=(n,i)=>{let r=this.clickTargetAt(n,i);return r?yt(r):null},t})());d(this,"Ai",null);d(this,"Li",Promise.resolve());d(this,"bn",null);d(this,"oo",null);d(this,"ze",null)}setGridlineCanvas(t){this.ne=t}setChromeCanvas(t){this.l=t}setOverlayPresenter(t){this.io=t}presentOverlay(){this.io?.()}setTheme(t){this.ro=t,this.bn=null}setZoomController(t){this.C=t,t.configure(this.getZoomConfig())}getZoomControllerForFacet(t){if(this.W.zoom_mode==="shared")return this.C;if(!this.C)return null;let n=this.En[t];return n||(n=new Ht,n.configure(this.getZoomConfig()),this.En[t]=n),n}computeEffectiveFacetFlags(){let t=this.W.zoom_mode==="independent",n=!t&&this.W.shared_x_axis,i=!t&&this.W.shared_y_axis;return this.Ci=n,this._i=i,{independentZoom:t,effectiveSharedX:n,effectiveSharedY:i}}syncFacetZoomLayouts(t){let n=this.W.zoom_mode==="independent";for(let i=0;i<t.length;i++)if(this.getZoomControllerForFacet(i)?.updateLayout(t[i].layout),!n)return}setZoomBaseDomain(t,n,i,r){this.C&&this.C.setBaseDomain(t,n,i,r);for(let o of this.En)o&&o.setBaseDomain(t,n,i,r)}getZoomConfig(){return{}}setColumnSlots(t){this.T=t}setViewPivots(t,n){this.p=t,this.P=n}setColumnTypes(t){this.ot=t,this.mr()}resetExpandedDomain(){}setGroupByTypes(t){this.st=t,this.mr()}setColumnsConfig(t){this.Pn=t??{},this.mr(),this.bn=null}mr(){this.ar=new Map,this.Lt=new Map,this.ur=new Map;for(let[t,n]of Object.entries(this.Pn)){let i=this.ot[t]??this.st[t],r=this.Uo(i,n);r&&this.ar.set(t,r);let o=n?.date_format,s=yl(o);if(i==="datetime"&&s&&!r){this.Lt.set(t,s);let l=Ni(o,Ui);this.ur.set(t,a=>l.format(a))}}}Uo(t,n){if(!(!t||!n)){if(t==="integer"||t==="float"){let i=n.number_format;if(!i)return;let r=Xo(t,i,$o);return o=>r.format(o)}if(t==="datetime"){let i=n.date_format;if(!Wi(i))return;let r=Ni(i,Ui);return o=>r.format(o)}if(t==="date"){let i=n.date_format;if(!Wi(i))return;let r=Cl(i,Al);return o=>r.format(o)}}}getColumnFormatter(t,n="value"){if(t){let s=this.ar.get(Tn(t));if(s)return s}if(n==="tick")return;let i=t?this.ur.get(Tn(t)):void 0;if(i)return i;let r=t?Tn(t):void 0,o=r?this.ot[r]??this.st[r]:void 0;return o==="date"||o==="datetime"?kf:Gf}getDateModifiers(t){return t?this.Lt.get(Tn(t)):void 0}setDefaultChartType(t){this.vi=t}setFacetConfig(t){this.W={...t}}setPluginConfig(t){this.I.reconcileConfig(this.t,t),this.t={...t},this.W={...this.W,facet_mode:Rl(t.facet_mode),zoom_mode:t.facet_zoom_mode},this.Ti=t.series_zoom_mode==="dynamic"}colorScaleColumn(){return null}A(){let t=this.colorScaleColumn();return(!this.bn||this.oo!==t)&&(this.oo=t,this.bn=zl(Hl(this.ro),this.Pn,t)),this.bn}invalidateTheme(){this.bn=null}setView(t){this.ze&&this.ze.dispose(),this.ze=new Oi(t);let n=this.v.isPinned;this.v.dismiss(),n&&this.emitUnselect()}refreshInteraction(){this.v.isPinned&&!this.repin()&&(this.v.dismiss(),this.emitUnselect())}repin(){return!1}deselect(){this.v.dismiss()}tooltipCallbacks(){return{onHover:()=>{},onLeave:()=>{}}}attachTooltip(t){this.v.attach(this.tooltipCallbacks()),this.v.setHost(t),this.Ai=t}async buildClickDetail(t){let n={};if(t.rowIdx!=null&&t.rowIdx>=0&&this.ze)try{let r=await this.ze.fetchRow(t.rowIdx);n=Object.fromEntries(r)}catch{n={}}let i=[];for(let r=0;r<this.p.length;r++){let o=t.groupByValues[r];o!=null&&o!==""&&i.push([this.p[r],"==",o])}for(let r=0;r<this.P.length;r++){let o=t.splitByValues[r];o!=null&&o!==""&&i.push([this.P[r],"==",o])}return{row:n,column_names:[t.columnName],config:{filter:i}}}clickTargetAt(t,n){return null}async resolveHit(t,n){let i=this.clickTargetAt(t,n);return i?yt(i):null}emitUserClick(t){let n={row:t.row,column_names:t.column_names,config:t.config};this.Ai?.emitUserClick?.(n)}emitUserSelect(t){let n={selected:t.selected,row:t.row,column_names:t.column_names,insertConfig:t.insertConfig};this.Ai?.emitUserSelect?.(n)}emitClickAndSelect(t){let n=this.Li.then(async()=>{let i=await this.buildClickDetail(t);this.emitUserClick(i),this.emitUserSelect({selected:!0,row:i.row,column_names:i.column_names,insertConfig:i.config})});return this.Li=n.catch(i=>{console.error("emitClickAndSelect failed",i)}),n}emitUnselect(t={}){let n=this.Li.then(()=>{this.emitUserSelect({selected:!1,row:t.row??{},column_names:t.column_names??[],insertConfig:{filter:[]}})});this.Li=n.catch(i=>{console.error("emitUnselect failed",i)})}requestRender(t){return $l(t,()=>{this.Dn=[],this.Ot(t)},()=>this.so())}Me(t){this.Dn.push(t)}so(){let t=this.Dn;this.Dn=[];for(let n of t)n()}renderFrameSync(t){this.Dn=[],this.Ot(t),this.so()}destroy(){this.v.detach(),this.v.dismiss(),this.ze&&(this.ze.dispose(),this.ze=null),this.destroyInternal()}}});var er,Jl=U(()=>{"use strict";er=class{constructor(t,n,i,r,o){d(this,"lt",new Map);d(this,"we");d(this,"Be");d(this,"Ut");d(this,"ao");this.we=t,this.Be=i,this.Ut=o,this.ao=Math.max(1,Math.ceil((n-t)/o))}uo(t,n){return n*this.ao+t}insert(t,n,i){let r=Math.floor((n-this.we)/this.Ut),o=Math.floor((i-this.Be)/this.Ut),s=this.uo(r,o),l=this.lt.get(s);l||(l=[],this.lt.set(s,l)),l.push(t)}query(t,n,i,r,o,s,l){let a=Math.ceil(i/r/this.Ut),u=Math.ceil(i/o/this.Ut),m=Math.floor((t-this.we)/this.Ut),f=Math.floor((n-this.Be)/this.Ut),c=-1,p=i*i;for(let b=f-u;b<=f+u;b++)for(let g=m-a;g<=m+a;g++){let h=this.lt.get(this.uo(g,b));if(h)for(let y of h){let C=(s[y]-t)*r,_=(l[y]-n)*o,x=C*C+_*_;x<p&&(p=x,c=y)}}return c}}});var tr,Ql=U(()=>{"use strict";Jl();tr=class{constructor(){d(this,"Bn",null);d(this,"Gn",!0)}markDirty(){this.Gn=!0}get isDirty(){return this.Gn}rebuild(t,n,i){if(n===0){this.Bn=null,this.Gn=!1;return}let r=t.xMax-t.xMin||1,o=t.yMax-t.yMin||1,l=(r+o)/2/Math.max(1,Math.sqrt(n)),a=new er(t.xMin,t.xMax,t.yMin,t.yMax,l);i((u,m,f)=>a.insert(u,m,f)),this.Bn=a,this.Gn=!1}query(t,n,i,r,o,s,l){return!this.Bn||!s||!l?-1:this.Bn.query(t,n,i,r,o,s,l)}clear(){this.Bn=null,this.Gn=!0}}});function it(e,t,n=[]){let i=new Map;for(let o of e.keys()){if(o.startsWith("__"))continue;let s=o.lastIndexOf("|");if(s===-1)continue;let l=o.substring(0,s);i.has(l)||i.set(l,new Set),i.get(l).add(o)}let r=[];for(let[o,s]of i){let l=new Map,a=!0;for(let u of t){if(!u)continue;let m=`${o}|${u}`,f=e.get(m);if(!s.has(m)||!f?.values){a=!1;break}l.set(u,m)}if(a){for(let u of n){if(!u)continue;let m=`${o}|${u}`;s.has(m)&&e.get(m)?.values&&l.set(u,m)}r.push({prefix:o,colNames:l})}}return r}var Fn=U(()=>{"use strict"});var nr,ea=U(()=>{"use strict";nr=class{constructor(t){d(this,"data");d(this,"dictionary",[]);d(this,"dictMap",new Map);this.data=new Int32Array(t),this.data.fill(-1)}set(t,n){let i=this.dictMap.get(n);return i===void 0&&(i=this.dictionary.length,this.dictionary.push(n),this.dictMap.set(n,i)),this.data[t]=i,i}get(t){let n=this.data[t];return n<0?null:this.dictionary[n]}}});function ta(e,t,n,i){let r;if(!e)r="(null)";else{let s=e.valid;if(!(s?!!(s[t>>3]>>(t&7)&1):!0))r="(null)";else if(e.indices&&e.dictionary)r=e.dictionary[e.indices[t]]??"(null)";else if(e.values){let a=e.values[t];r=a==null?"(null)":String(a)}else r="(null)"}let o=i.get(r);return o===void 0&&(o=n.length,n.push(r),i.set(r,o)),o}function Wf(e,t,n,i,r,o){let s=t?[t,n]:[n],l=[];return i&&l.push(i),r&&l.push(r),o&&l.push(o),it(e,s,l).map(a=>({prefix:a.prefix,xColName:t?a.colNames.get(t):"",yColName:a.colNames.get(n),colorColName:i?`${a.prefix}|${i}`:"",sizeColName:r?`${a.prefix}|${r}`:"",labelColName:o?`${a.prefix}|${o}`:""}))}function na(e,t,n,i){e.glyph.ensureProgram(e,t);let r=e.s,o=e.N;e.t.domain_mode==="expand"?(e.we=e.kn,e.ut=e.Wn,e.Be=e.Nn,e.mt=e.On,e.b=e.Mi,e.c=e.wi,e.ft=e.Ri,e.ct=e.Fi):(e.we=1/0,e.ut=-1/0,e.Be=1/0,e.mt=-1/0,e.b=1/0,e.c=-1/0,e.ft=1/0,e.ct=-1/0,e.kn=1/0,e.Wn=-1/0,e.Nn=1/0,e.On=-1/0,e.Mi=1/0,e.wi=-1/0,e.Ri=1/0,e.Fi=-1/0),e.D=NaN,e.E=NaN,e.dt=0,e.gn.clear(),e.fr=0;let l=e.T,a=l[0]||"",u=l[1]||"",m=l[2]||"",f=l[3]||"",c=l[4]||"";e.et=a,e.Ze=u,e.mo=!a,e.Ye=!!a&&e.ot[a]==="string",e.Re=!!u&&e.ot[u]==="string",e.hn=[],e.yn=[],e.fo=new Map,e.co=new Map,e.pt=null,e.bt=null,e.Ye&&(e.D=0,e.we=0,e.ut=0,e.kn=1/0,e.Wn=-1/0),e.Re&&(e.E=0,e.Be=0,e.mt=0,e.Nn=1/0,e.On=-1/0);let p=t.L.totalCapacity||i;if(e.P.length>0){if(e.w=Wf(n,a,u,m,f,c),e.w.length===0){e.F=0,e.U=[];return}if(e.Xe=e.w[0].xColName,e.Ge=e.w[0].yColName,e.s=m,e.ue=f,e.Si=c,e.N=!1,m){let h=n.get(e.w[0].colorColName);e.N=h?.type==="string"}t.ensureBufferCapacity(p*e.w.length)}else if(e.w=[],e.Xe=a,e.Ge=u,e.s=m,e.ue=f,e.Si=c,e.N=!1,e.s){let h=n.get(e.s);e.N=h?.type==="string"}(e.s!==r||e.N!==o)&&(e.u=new Map);let b=Math.max(1,e.w.length);e.F=p,e.U=new Array(b).fill(0);let g=b*p;e.Z=new Float32Array(g),e.q=new Float32Array(g),e.Tt=new Float32Array(g),e.Ht=new Int32Array(g),e.Vt=c?new nr(g):null}function ia(e,t,n,i,r,o){if(!e.Ge)return;let s=r;if(s===0||e.F===0)return;let l=e.w.length>0,a=[];if(l)for(let b of e.w){let g=b.xColName?n.get(b.xColName):null,h=n.get(b.yColName);if(!h||!e.Re&&!h.values)continue;let y=b.sizeColName?n.get(b.sizeColName):null,C=b.colorColName?n.get(b.colorColName)??null:null,_=b.labelColName?n.get(b.labelColName)??null:null;a.push({xCol:g?.values??null,yCol:h.values??null,xColData:g??null,yColData:h,xValid:g?.valid,yValid:h.valid,colorCol:C,sizeCol:y?.values??null,labelCol:_})}else{let b=e.Xe?n.get(e.Xe):null,g=e.Ge?n.get(e.Ge):null;if(!g||!e.Re&&!g.values)return;let h=e.s?n.get(e.s)??null:null,y=e.Si?n.get(e.Si)??null:null;a.push({xCol:b?.values??null,yCol:g.values??null,xColData:b??null,yColData:g,xValid:b?.valid,yValid:g?.valid,colorCol:h,sizeCol:null,labelCol:y})}if(a.length===0)return;e.po<s&&(e.cr=new Float32Array(s*2),e.dr=new Float32Array(s),e.pr=new Float32Array(s),e.po=s);let u=e.cr,m=e.dr,f=e.pr,c=!l&&e.ue?n.get(e.ue)?.values??null:null;if(e.N&&e.s){for(let b of a){let g=b.colorCol?.dictionary;if(g)for(let h=0;h<g.length;h++){let y=g[h];e.u.has(y)||e.u.set(y,e.u.size)}}e.u.size>0&&(e.b=0,e.c=e.u.size-1)}!e.s&&e.w.length>1&&(e.b=0,e.c=e.w.length-1);for(let b=0;b<a.length;b++){let g=a[b],h=e.U[b]??0,y=b*e.F,C=e.F-h;if(C<=0)continue;let _=g.colorCol?.valid,x=0;for(let T=0;T<s&&x<C;T++){let L=T;if(!e.Re&&g.yValid&&!(g.yValid[L>>3]>>(L&7)&1)||!e.Ye&&g.xCol&&g.xValid&&!(g.xValid[L>>3]>>(L&7)&1))continue;let D=_!==void 0&&!(_[L>>3]>>(L&7)&1),M;if(e.Re)M=ta(g.yColData,L,e.yn,e.co);else if(g.yCol){if(M=g.yCol[L],isNaN(M))continue}else continue;let P;if(e.Ye)P=ta(g.xColData,L,e.hn,e.fo);else if(g.xCol){if(P=g.xCol[L],isNaN(P))continue}else P=i+L;let[w,I]=e.projectPoint(P,M);if(isNaN(w)||isNaN(I))continue;w<e.we&&(e.we=w),w>e.ut&&(e.ut=w),I<e.Be&&(e.Be=I),I>e.mt&&(e.mt=I),isNaN(e.D)&&(e.D=w),isNaN(e.E)&&(e.E=I);let G=w-e.D,E=I-e.E,S=y+h+x;e.Z[S]=G,e.q[S]=E,e.Ht[S]=i+L,u[x*2]=G,u[x*2+1]=E;let k=g.colorCol;if(D)m[x]=.5,e.Tt[S]=.5;else if(k&&!e.N&&k.values){let B=k.values[L];m[x]=B,e.Tt[S]=B,B<e.b&&(e.b=B),B>e.c&&(e.c=B)}else if(k&&e.N&&k.indices&&k.dictionary){let B=k.dictionary[k.indices[L]];e.u.has(B)||(e.u.set(B,e.u.size),e.c=e.u.size-1);let V=e.u.get(B);m[x]=V,e.Tt[S]=V}else m[x]=b,e.Tt[S]=b;if(e.Vt&&g.labelCol){let B=g.labelCol,V=B.valid;!(V!==void 0&&!(V[L>>3]>>(L&7)&1))&&B.indices&&B.dictionary&&e.Vt.set(S,B.dictionary[B.indices[L]])}if(g.sizeCol){let B=g.sizeCol[L];f[x]=B,B<e.ft&&(e.ft=B),B>e.ct&&(e.ct=B)}else if(c){let B=c[L];f[x]=B,B<e.ft&&(e.ft=B),B>e.ct&&(e.ct=B)}else f[x]=0;x++}if(x===0)continue;let v=(y+h)*2*Float32Array.BYTES_PER_ELEMENT;t.L.upload("a_position",u.subarray(0,x*2),v,2);let A=(y+h)*Float32Array.BYTES_PER_ELEMENT;t.L.upload("a_color_value",m.subarray(0,x),A),t.L.upload("a_size_value",f.subarray(0,x),A),e.U[b]=h+x,e.U[b]>e.fr&&(e.fr=e.U[b])}let p=0;for(let b of e.U)p+=b;e.dt=p,t.uploadedCount=p,e.gn.markDirty(),isFinite(e.we)&&e.setZoomBaseDomain(e.we,e.ut,e.Be,e.mt)}var ra=U(()=>{"use strict";Fn();ea()});function Yt(e,t,n,i,r){let o=e.getContext("2d");o&&(o.save(),o.setTransform(1,0,0,1,0,0),o.scale(r,r),o.font=`11px ${i.fontFamily}`,o.fillStyle=i.Pe,o.textAlign="center",o.textBaseline="middle",o.fillText(t,n.x+n.width/2,n.y+n.height/2),o.restore())}var ir=U(()=>{"use strict"});var re,rt=U(()=>{"use strict";re=class{constructor(t,n,i){d(this,"margins");d(this,"e");d(this,"cssWidth");d(this,"cssHeight");d(this,"H",0);d(this,"K",1);d(this,"J",0);d(this,"ie",1);this.cssWidth=t,this.cssHeight=n;let o=(i.leftExtra??55)+(i.hasYLabel?16:0),l=(i.bottomExtra??24)+(i.hasXLabel?18:0),a=0,u=i.rightExtra??(i.hasLegend?80:16),m=i.originX??0,f=i.originY??0,c=i.cellWidth??t,p=i.cellHeight??n,b=m+o,g=f+a,h=Math.max(1,c-o-u),y=Math.max(1,p-a-l),C=t-(b+h),_=n-(g+y);this.margins={top:g,right:C,bottom:_,left:b},this.e={x:b,y:g,width:h,height:y}}buildProjectionMatrix(t,n,i,r,o,s,l=.02,a=0,u=0){let m=n-t,f=r-i;m===0&&(m=1),f===0&&(f=1);let c=m*l,p=f*l,b=s&&o==="y"&&i>=0,g=s&&o==="y"&&r<=0,h=s&&o==="x"&&t>=0,y=s&&o==="x"&&n<=0;t-=c,n+=c,i-=p,r+=p,b?(i=0,r+=p):g&&(r=0,i-=p),h?(t=0,n+=c):y&&(n=0,t-=c),this.H=t,this.K=n,this.J=i,this.ie=r;let C=2*this.margins.left/this.cssWidth-1,_=1-2*this.margins.right/this.cssWidth,x=2*this.margins.bottom/this.cssHeight-1,v=1-2*this.margins.top/this.cssHeight,A=(_-C)/(n-t),T=(v-x)/(r-i),L=C-A*(t-a),D=x-T*(i-u);return new Float32Array([A,0,0,0,0,T,0,0,0,0,-1,0,L,D,0,1])}R(t,n){let{x:i,y:r,width:o,height:s}=this.e,l=(t-this.H)/(this.K-this.H),a=(n-this.J)/(this.ie-this.J);return{px:i+l*o,py:r+(1-a)*s}}}});function Sn(e){return e.cells.filter(t=>t.isBottomEdge).map(t=>t.layout)}function In(e){return e.cells.filter(t=>t.isLeftEdge).map(t=>t.layout)}function Yf(e,t,n,i){if(e<=1)return{cols:1,rows:1};let r=1,o=e,s=1/0,l=e;for(let a=1;a<=e;a++){let u=Math.ceil(e/a),m=Math.max(1,(t-(a-1)*i)/a),f=Math.max(1,(n-(u-1)*i)/u),c=m/f,p=Math.max(c,1/c),b=a*u;(p<s||p===s&&b<l)&&(r=a,o=u,s=p,l=b)}return{cols:r,rows:o}}function Be(e,t){let n=e.length,{cssWidth:i,cssHeight:r}=t;if(n<=0||i<=0||r<=0)return{cells:[]};let o=t.titleBand??Vf,s=t.hasLegend?t.legendWidth??zf:0,l=t.xAxis??"cell",a=t.yAxis??"cell",u=l==="none"&&a==="none",m=a==="outer"?Nf+(t.hasYLabel?Uf:0):0,f=l==="outer"?Of+(t.hasXLabel?Hf:0):0,c=0,p=s,b=m,g=c,h=Math.max(1,i-m-p),y=Math.max(1,r-c-f),C=Math.max(0,t.gap??0),{cols:_,rows:x}=Yf(n,h,y,C),v=Math.max(0,_-1)*C,A=Math.max(0,x-1)*C,T=Math.max(1,(h-v)/_),L=Math.max(1,(y-A)/x),D=[];for(let I=0;I<n;I++){let G=Math.floor(I/_),E=I-G*_,S=G===x-1||I+_>=n,k=E===0,B=b+E*(T+C),V=g+G*(L+C),N=V+o,H=B,z=T,K=Math.max(1,L-o),ue=new re(i,r,{hasXLabel:l==="cell"&&t.hasXLabel===!0,hasYLabel:a==="cell"&&t.hasYLabel===!0,hasLegend:!1,leftExtra:a==="cell"?void 0:0,bottomExtra:l==="cell"?void 0:0,rightExtra:u?0:void 0,originX:H,originY:N,cellWidth:z,cellHeight:K}),Fe=o>0?{x:H,y:V,width:z,height:o}:void 0;D.push({index:I,label:e[I],layout:ue,titleRect:Fe,isLeftEdge:k,isBottomEdge:S})}let M=t.hasLegend?{x:b+h,y:c,width:s,height:y}:void 0,P=l==="outer"?{x:b,y:g+y,width:h,height:f}:void 0;return{cells:D,legendRect:M,outerXAxisRect:P,outerYAxisRect:a==="outer"?{x:0,y:g,width:m,height:y}:void 0}}var Nf,Of,Uf,Hf,Vf,zf,Xt=U(()=>{"use strict";rt();Nf=55,Of=24,Uf=16,Hf=18,Vf=18,zf=96});function Xf(e,t){if(t<=0)return[];let n=new Array(t);for(let i=0;i<t;i++){let r=t===1?.5:i/(t-1),o=Ee(e,r);n[i]=[o[0],o[1],o[2]]}return n}function ye(e,t,n){if(e.length>0){if(e.length>=n)return e.slice(0,n);let i=new Array(n);for(let r=0;r<n;r++)i[r]=e[r%e.length];return i}return Xf(t,n)}var Dn=U(()=>{"use strict";he()});function Lt(e){e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA)}function Tt(e,t,n,i){e.enable(e.SCISSOR_TEST),e.scissor(Math.round(t.margins.left*n),Math.round(t.margins.bottom*n),Math.round(t.e.width*n),Math.round(t.e.height*n));try{i()}finally{e.disable(e.SCISSOR_TEST)}}function ot(e,t,n,i){Lt(e),Tt(e,t,n,i)}var En=U(()=>{"use strict"});function Pn(e,t,n){let i=e.gl,r;if(t?.texture){if(r=t.texture,t.lastStops===n)return t}else r=i.createTexture();let o=Ol(n,oa);return i.bindTexture(i.TEXTURE_2D,r),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,oa,1,0,i.RGBA,i.UNSIGNED_BYTE,o),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),{texture:r,lastStops:n}}function Ve(e,t,n,i=0){let r=e.gl;r.activeTexture(r.TEXTURE0+i),r.bindTexture(r.TEXTURE_2D,t),r.uniform1i(n,i)}var oa,$t=U(()=>{"use strict";he();oa=256});function ze(e,t,n,i,r,o=1){if(!e||r.length===0)return;let s=e.getContext("2d");if(!s)return;let l=t.e;s.save(),s.setTransform(1,0,0,1,0,0),s.scale(i,i),s.font=`11px ${n.fontFamily}`;for(let a of r)a.px<l.x||a.px>l.x+l.width||a.py<l.y||a.py>l.y+l.height||($f(s,a,l,n),jf(s,a,t,n,o));s.restore()}function $f(e,t,n,i){e.strokeStyle=i.At,e.lineWidth=1,e.setLineDash([4,4]),e.beginPath(),e.moveTo(t.px,t.py),t.side==="bottom"?e.lineTo(t.px,n.y+n.height):t.side==="left"?e.lineTo(n.x,t.py):e.lineTo(n.x+n.width,t.py),e.stroke(),e.setLineDash([])}function jf(e,t,n,i,r){let o=n.e,s=e.measureText(t.text).width+8,l=17,a,u;t.side==="bottom"?(a=t.px-s/2,u=o.y+o.height+4):t.side==="left"?(a=o.x-4-s,u=t.py-l/2):(a=o.x+o.width+4,u=t.py-l/2),a=Math.min(Math.max(a,0),Math.max(0,n.cssWidth-s)),u=Math.min(Math.max(u,0),Math.max(0,n.cssHeight-l)),e.globalAlpha=Math.min(1,Math.max(0,r)),e.fillStyle=i.pi,e.strokeStyle=i.Xr,e.lineWidth=1,e.beginPath(),e.rect(a,u,s,l),e.fill(),e.stroke(),e.globalAlpha=1,e.fillStyle=i.$r,e.textAlign="left",e.textBaseline="middle",e.fillText(t.text,a+4,u+l/2+1)}var Bn=U(()=>{"use strict"});function sa(e,t){let n=Math.floor(Math.log10(e)),i=e/Math.pow(10,n),r;return t?i<1.5?r=1:i<3?r=2:i<7?r=5:r=10:i<=1?r=1:i<=2?r=2:i<=5?r=5:r=10,r*Math.pow(10,n)}function J(e,t,n){n<1&&(n=1);let i=sa(t-e,!1),r=sa(i/n,!0),o=Math.ceil(e/r)*r,s=Math.floor(t/r)*r,l=[];for(let a=o;a<=s+r*.001;a+=r)l.push(a);return l}function ce(e,t,n){if(!e)return Mt;let i=t&&t.length>1?t[1]-t[0]:0;return r=>rr(r,i,n)}function Mt(e){if(!Number.isFinite(e))return"-";let t=Math.abs(e);return t===0?"0":t>=1e9?(e/1e9).toFixed(1)+"B":t>=1e6?(e/1e6).toFixed(1)+"M":t>=1e3?(e/1e3).toFixed(1)+"K":Number.isInteger(e)?e.toString():t>=1?e.toFixed(1):e.toFixed(2)}function jt(e,t,n){let i=`${e}|${n?.timeZone??""}|${n?.hour12??""}`,r=la.get(i);return r||(r=new Intl.DateTimeFormat(void 0,{...t,...n}),la.set(i,r)),r}function rr(e,t,n){let i=new Date(e);return isNaN(i.getTime())?Mt(e):t!==void 0&&t>0?t>=864e5*28?jt("ym",{year:"numeric",month:"short"},n).format(i):t>=864e5?jt("md",{month:"short",day:"numeric"},n).format(i):t>=36e5?jt("mdh",{month:"short",day:"numeric",hour:"numeric"},n).format(i):t>=6e4?jt("hm",{hour:"numeric",minute:"2-digit"},n).format(i):jt("hms",{hour:"numeric",minute:"2-digit",second:"2-digit"},n).format(i):jt("ymd",{year:"numeric",month:"short",day:"numeric"},n).format(i)}var la,we=U(()=>{"use strict";la=new Map});function de(e,t,n){e.width=Math.round(t.cssWidth*n),e.height=Math.round(t.cssHeight*n);let i=e.getContext("2d");return i?(i.scale(n,n),i.clearRect(0,0,t.cssWidth,t.cssHeight),i):null}function ae(e,t){let n=e.getContext("2d");return n?(n.setTransform(t,0,0,t,0,0),n):null}var wt=U(()=>{"use strict"});function or(e,t,n,i,r,o,s){let l=r==="bottom"?1:-1;e.textAlign="center",e.textBaseline=r==="bottom"?"top":"bottom";let a=l*8;for(let u of n){let m=o(u);m<t.x-1||m>t.x+t.width+1||(e.beginPath(),e.moveTo(m,i),e.lineTo(m,i+l*5),e.stroke(),e.fillText(s(u),m,i+a))}}function sr(e,t,n,i,r,o,s){let l=r==="left"?-1:1;e.textAlign=r==="left"?"right":"left",e.textBaseline="middle";let a=l*8;for(let u of n){let m=o(u);m<t.y-1||m>t.y+t.height+1||(e.beginPath(),e.moveTo(i,m),e.lineTo(i+l*5,m),e.stroke(),e.fillText(s(u),i+a,m))}}function Zt(e,t,n,i){for(let r of n){let o=Math.round(i(r))+.5;o<t.x||o>t.x+t.width||(e.beginPath(),e.moveTo(o,t.y),e.lineTo(o,t.y+t.height),e.stroke())}}function qt(e,t,n,i){for(let r of n){let o=Math.round(i(r))+.5;o<t.y||o>t.y+t.height||(e.beginPath(),e.moveTo(t.x,o),e.lineTo(t.x+t.width,o),e.stroke())}}var lr=U(()=>{"use strict"});function Kt(e,t,n){let{e:i}=n,r=Math.max(2,Math.floor(i.width/90)),o=Math.max(2,Math.floor(i.height/60));return{xTicks:J(e.min,e.max,r),yTicks:J(t.min,t.max,o)}}function is(e,t,n,i,r,o){let s=ae(e,o);if(!s)return;let{e:l}=t;s.strokeStyle=r.In,s.lineWidth=1,Zt(s,l,n,a=>t.R(a,0).px),qt(s,l,i,a=>t.R(0,a).py)}function aa(e,t,n){return n||ce(e.isDate,t,e.dateModifiers)}function ua(e,t,n,i,r,o,s,l,a){let{At:u,Pe:m,yi:f,fontFamily:c}=s,p=aa(t,n,a);e.strokeStyle=f,e.lineWidth=1,e.beginPath(),e.moveTo(o.x,r),e.lineTo(o.x+o.width,r),e.stroke(),e.fillStyle=u,e.strokeStyle=u,e.font=`11px ${c}`;for(let b of i)or(e,b.e,n,r,"bottom",g=>b.R(g,0).px,p);l&&t.label&&(e.fillStyle=m,e.font=`13px ${c}`,e.textAlign="center",e.textBaseline="bottom",e.fillText(t.label,l.cx,l.baselineY))}function ma(e,t,n,i,r,o,s,l,a){let{At:u,Pe:m,yi:f,fontFamily:c}=s,p=aa(t,n,a);e.strokeStyle=f,e.lineWidth=1,e.beginPath(),e.moveTo(r,o.y),e.lineTo(r,o.y+o.height),e.stroke(),e.fillStyle=u,e.strokeStyle=u,e.font=`11px ${c}`;for(let b of i)sr(e,b.e,n,r,"left",g=>b.R(0,g).py,p);l&&t.label&&(e.fillStyle=m,e.font=`13px ${c}`,e.save(),e.translate(14,l.pivotY),e.rotate(-Math.PI/2),e.textAlign="center",e.textBaseline="bottom",e.fillText(t.label,0,0),e.restore())}function ar(e,t,n,i,r,o,s,l){let a=ae(e,s);if(!a)return;let{e:u}=n;ua(a,t,i,[n],u.y+u.height,u,r,o?{cx:u.x+u.width/2,baselineY:n.cssHeight-2}:null,l)}function ur(e,t,n,i,r,o,s,l){let a=ae(e,s);if(!a)return;let{e:u}=n;ma(a,t,i,[n],u.x,u,r,o?{pivotY:u.y+u.height/2}:null,l)}function Gn(e,t,n,i,r,o,s,l,a){let u=ae(e,l);u&&ua(u,n,i,r,t.y,t,o,s?{cx:t.x+t.width/2,baselineY:t.y+t.height-2}:null,a)}function kn(e,t,n,i,r,o,s,l,a){let u=ae(e,l);u&&ma(u,n,i,r,t.x+t.width,t,o,s?{pivotY:t.y+t.height/2}:null,a)}var rs=U(()=>{"use strict";we();wt();lr()});function mr(e,t){if(t>Wn||t<-Wn)return[NaN,NaN];let n=e*Math.PI*6378137/180,i=t*Math.PI/180,r=6378137*Math.log(Math.tan(Math.PI/4+i/2));return[n,r]}function Jt(e,t){let n=e*180/(Math.PI*6378137),i=Math.atan(Math.exp(t/6378137))*360/Math.PI-90;return[n,i]}function fa(e,t,n){let i=1<<e,r=2*Ae/i,o=-Ae+t*r,s=o+r,l=Ae-n*r,a=l-r;return{xMin:o,yMin:a,xMax:s,yMax:l}}function ca(e,t=256,n=19){if(!isFinite(e)||e<=0)return 0;let i=Math.log2(2*Ae/(t*e));return Math.max(0,Math.min(n,Math.floor(i)))}function da(e,t){let n=1<<t,i=2*Ae/n,r=Math.floor((e.xMin+Ae)/i),o=Math.floor((e.xMax+Ae)/i),s=Math.floor((Ae-e.yMax)/i),l=Math.floor((Ae-e.yMin)/i),a=[];for(let u=s;u<=l;u++)if(!(u<0||u>=n))for(let m=r;m<=o;m++)m<0||m>=n||a.push({z:t,x:m,y:u});return a}var Ae,Wn,Nn=U(()=>{"use strict";Ae=Math.PI*6378137,Wn=85.0511287798066});function On(e){let t=e.e,n=Math.max(2,Math.floor(t.width/90)),i=Math.max(2,Math.floor(t.height/60)),r=os(e.H),o=os(e.K),s=pa(Jt(0,e.J)[1]),l=pa(Jt(0,e.ie)[1]),a=ba(r,o,n),u=ba(s,l,i),m=ga(a),f=ga(u);return{xTicks:a.map(c=>c/180*Ae),yTicks:u.map(c=>mr(0,c)[1]),formatX:c=>ha(os(c),m,"E","W"),formatY:c=>ha(Jt(0,c)[1],f,"N","S")}}function os(e){return e/Ae*180}function pa(e){return Math.max(-Wn,Math.min(Wn,e))}function ba(e,t,n){return!isFinite(e)||!isFinite(t)||t<=e?[]:J(e,t,n)}function ga(e){return e.length>1?Math.abs(e[1]-e[0]):1}function ha(e,t,n,i){let r=t>=1?0:Math.min(6,Math.ceil(-Math.log10(t)+1e-9)),o=String(parseFloat(Math.abs(e).toFixed(r)));return parseFloat(o)===0?"0\\xB0":`${o}\\xB0${e>0?n:i}`}var ya=U(()=>{"use strict";we();Nn()});function ss(e,t,n,i,r){if(r===0)return{x:e-n/2,y:t,width:n,height:i};if(r===90)return{x:e-i/2,y:t,width:i,height:n};let o=(n+i)/Math.SQRT2;return{x:e-o,y:t,width:o,height:o}}function ls(e,t){return e.x<=t.x+t.width&&t.x<=e.x+e.width&&e.y<=t.y+t.height&&t.y<=e.y+e.height}function xa(e,t){return e.x+e.width+14>t.x+t.width}function as(e,t){return e.x>=t.x&&e.x+e.width<=t.x+t.width&&e.y>=t.y&&e.y+e.height<=t.y+t.height}function Rt(e,t,n){if(n<=0)return"";if(e.measureText(t).width<=n)return t;let i=0,r=t.length;for(;i<r;){let o=i+r+1>>1,s=t.slice(0,o)+"\\u2026";e.measureText(s).width<=n?i=o:r=o-1}return i===0?"":t.slice(0,i)+"\\u2026"}function Ca(e,t,n,i){if(i<=0||n<=0)return[];if(e.measureText(t).width<=n)return[t];let r=[],o=t;for(;o.length>0&&r.length<i;){let s=r.length===i-1,l=o.length;for(;l>0&&e.measureText(o.slice(0,l)).width>n;)l--;if(l===0&&(l=1),l===o.length){r.push(o);break}let a=l,u=o.lastIndexOf(" ",l);if(u>0&&(a=u),s){r.push(Rt(e,o,n));break}r.push(o.slice(0,a)),o=o.slice(a).trimStart()}return r.length===1&&r[0].length<=2?[]:r}var fr=U(()=>{"use strict"});function cr(e,t,n,i){let r=[];if(i<=n)return r;let o=n,s=e[n];for(let l=n+1;l<i;l++){let a=e[l];a!==s&&(r.push({startIdx:o,endIdx:l-1,label:t[s]??""}),o=l,s=a)}return r.push({startIdx:o,endIdx:i-1,label:t[s]??""}),r}function Un(e,t,n){if(n<t)return[];let i=[];for(let r of e){if(r.endIdx<t||r.startIdx>n)continue;let o=r.startIdx<t?t:r.startIdx,s=r.endIdx>n?n:r.endIdx;o===r.startIdx&&s===r.endIdx?i.push(r):i.push({startIdx:o,endIdx:s,label:r.label})}return i}function Qt(e,t,n,i){let r=0,o=t;for(;r<o;){let l=r+o>>>1;e[l]<n?r=l+1:o=l}let s=r;for(o=t;r<o;){let l=r+o>>>1;e[l]<=i?r=l+1:o=l}return[s,r-1]}function _a(e,t,n){if(t===0)return-1;let i=0,r=t;for(;i<r;){let o=i+r>>>1;e[o]<n?i=o+1:r=o}return i===0?0:i===t?t-1:n-e[i-1]<=e[i]-n?i-1:i}var Ft=U(()=>{"use strict"});function pr(e,t){return e?e[t]:t}function va(e,t,n){return e.R(pr(t,n),0).px}function Aa(e,t,n){return e.R(0,pr(t,n)).py}function ec(e,t,n){let i=Math.max(0,n-100);return e*16>i?{size:t*6.62+10,rotation:90}:e*(t*6+10)>i?{size:t*4+20,rotation:45}:{size:Zf,rotation:0}}function La(e,t){let n=e.levels.length,i=[];for(let r=0;r<n;r++){let o=e.levels[r];r===n-1?i.push(ec(e.numRows,o.maxLabelChars,t)):i.push({size:qf,rotation:0})}return i}function Ta(e){let t=e.levels.length,n=[],i=6.2;for(let r=0;r<t;r++)if(r===t-1){let o=e.levels[r].maxLabelChars;n.push(Math.max(Kf,o*i+Qf))}else n.push(Jf);return n}function Ma(e){let t=0;for(let n of e)t+=n;return t}function Ye(e,t){return e.numRows===0||e.levels.length===0?24:Ma(La(e,t).map(n=>n.size))}function tn(e){return e.numRows===0||e.levels.length===0?55:Ma(Ta(e))}function tc(e,t,n,i){let r=t-e+1;if(r<=0)return[];let o=Math.max(1,Math.floor(n/i));if(r<=o){let a=[];for(let u=e;u<=t;u++)a.push(u);return a}let s=Math.ceil(r/o),l=[];for(let a=e;a<=t;a+=s)l.push(a);return l}function wa(e,t){return e.labels[t]??""}function Ra(e,t,n,i,r){let o=i?Math.min(t,n):t,s=i?Math.max(t,n):n;if(r){let[u,m]=Qt(r,e,o,s);return m<u?null:[u,m]}let l=Math.max(0,Math.ceil(o)),a=Math.min(e-1,Math.floor(s));return a<l?null:[l,a]}function Fa(e,t,n,i,r){let o=[];for(let s of e){let l=n(pr(t,s.startIdx)-.5),a=n(pr(t,s.endIdx)+.5),u=Math.max(i,Math.min(l,a)),m=Math.min(r,Math.max(l,a));m>u&&o.push({run:s,nearEdge:l,farEdge:a,nearClip:u,farClip:m})}return o}function xe(e,t,n,i){if(n.numRows===0||n.levels.length===0)return;let{At:r,Pe:o,fontFamily:s}=i,{e:l}=t,a=l.y+l.height;e.strokeStyle=r,e.fillStyle=r,e.lineWidth=1,e.font=`${en}px ${s}`;let u=La(n,l.width),m=Ra(n.numRows,t.H,t.K,!1,n.positions);if(!m)return;let[f,c]=m,p=n.levels.length,b=a;for(let h=p-1;h>=0;h--){let y=n.levels[h],C=u[h],_=b;b+=C.size,h===p-1?nc(e,t,y,n.positions,f,c,_,C,s,r):ic(e,t,y,n.positions,f,c,_,s,r)}let g=n.levelLabels.filter(h=>!!h).join(" / ");g&&(e.fillStyle=o,e.font=`13px ${s}`,e.textAlign="center",e.textBaseline="bottom",e.fillText(g,l.x+l.width/2,t.cssHeight-2))}function nc(e,t,n,i,r,o,s,l,a,u){let{e:m}=t,c=Math.max(40,Math.min(n.maxLabelChars*6.2+8,m.width/2)),p=l.rotation===0?tc(r,o,m.width,c):rc(r,o);e.strokeStyle=u,e.fillStyle=u,e.beginPath();for(let y of p){let C=va(t,i,y);C<m.x-1||C>m.x+m.width+1||(e.moveTo(C,s),e.lineTo(C,s+dr))}e.stroke(),e.font=`${en}px ${a}`;let b=s+dr+3,g={x:m.x,width:m.width,y:s,height:9999},h=[];for(let y of p){let C=va(t,i,y);if(C<m.x-1||C>m.x+m.width+1)continue;let _=wa(n,y);if(!_)continue;let x=e.measureText(_).width,v=ss(C,b,x,us,l.rotation);if(as(v,g)){if(l.rotation===0){if(h.some(A=>ls(A,v)))continue}else if(h.some(A=>xa(A,v)))continue;h.push(v),Sa(e,_,C,b,l.rotation,"center")}}}function ic(e,t,n,i,r,o,s,l,a){let{e:u}=t,m=Un(n.runs,r,o);if(m.length===0)return;let f=Fa(m,i,g=>t.R(g,0).px,u.x,u.x+u.width);if(f.length===0)return;e.strokeStyle=a,e.fillStyle=a,e.beginPath();for(let g of f)e.moveTo(g.nearClip,s+3),e.lineTo(g.farClip,s+3),e.moveTo(g.nearEdge,s),e.lineTo(g.nearEdge,s+3),e.moveTo(g.farEdge,s),e.lineTo(g.farEdge,s+3);e.stroke(),e.font=`${en}px ${l}`;let c=s+3+4,p=[],b={x:u.x,width:u.width,y:s,height:9999};for(let g of f){let h=(g.nearClip+g.farClip)/2,y=g.run.label;if(!y)continue;let C=g.farClip-g.nearClip-4,_=Rt(e,y,C);if(!_)continue;let x=e.measureText(_).width,v=ss(h,c,x,us,0);as(v,b)&&(p.some(A=>ls(A,v))||(p.push(v),Sa(e,_,h,c,0,"center")))}}function rc(e,t){let n=[];for(let i=e;i<=t;i++)n.push(i);return n}function Ge(e,t,n,i){if(n.numRows===0||n.levels.length===0)return;let{At:r,Pe:o,fontFamily:s}=i,{e:l}=t,a=l.x;e.strokeStyle=r,e.fillStyle=r,e.lineWidth=1,e.font=`${en}px ${s}`;let u=Ta(n),m=Ra(n.numRows,t.J,t.ie,!0,n.positions);if(!m)return;let[f,c]=m,p=n.levels.length,b=a;for(let h=p-1;h>=0;h--){let y=n.levels[h],C=u[h],_=b;b-=C,h===p-1?oc(e,t,y,n.positions,f,c,_,s,r):sc(e,t,y,n.positions,f,c,_,C,s,r)}let g=n.levelLabels.filter(h=>!!h).join(" / ");g&&(e.fillStyle=o,e.font=`13px ${s}`,e.save(),e.translate(14,l.y+l.height/2),e.rotate(-Math.PI/2),e.textAlign="center",e.textBaseline="bottom",e.fillText(g,0,0),e.restore())}function oc(e,t,n,i,r,o,s,l,a){let{e:u}=t,m=us+4,f=o-r+1,c=Math.max(1,Math.floor(u.height/m)),p=f<=c?1:Math.ceil(f/c);e.strokeStyle=a,e.fillStyle=a,e.beginPath();for(let b=r;b<=o;b+=p){let g=Aa(t,i,b);g<u.y-1||g>u.y+u.height+1||(e.moveTo(s-dr,g),e.lineTo(s,g))}e.stroke(),e.font=`${en}px ${l}`,e.textAlign="right",e.textBaseline="middle";for(let b=r;b<=o;b+=p){let g=Aa(t,i,b);if(g<u.y-1||g>u.y+u.height+1)continue;let h=wa(n,b);h&&e.fillText(h,s-dr-3,g)}}function sc(e,t,n,i,r,o,s,l,a,u){let{e:m}=t,f=Un(n.runs,r,o);if(f.length===0)return;let c=Fa(f,i,b=>t.R(0,b).py,m.y,m.y+m.height);if(c.length===0)return;e.strokeStyle=u,e.fillStyle=u;let p=s-3;e.beginPath();for(let b of c)e.moveTo(p,b.nearClip),e.lineTo(p,b.farClip),e.moveTo(p,b.nearEdge),e.lineTo(s,b.nearEdge),e.moveTo(p,b.farEdge),e.lineTo(s,b.farEdge);e.stroke(),e.font=`${en}px ${a}`,e.textAlign="right",e.textBaseline="middle";for(let b of c){let g=(b.nearClip+b.farClip)/2,h=b.run.label;if(!h)continue;let y=l-6,C=Rt(e,h,y);C&&e.fillText(C,p-3,g)}}function Sa(e,t,n,i,r,o){if(r===0){e.textAlign=o==="end"?"right":"center",e.textBaseline="top",e.fillText(t,n,i);return}e.save(),e.translate(n,i),e.rotate(-r*Math.PI/180),e.textAlign="right",e.textBaseline="middle",e.fillText(t,-2,0),e.restore()}var Zf,qf,dr,en,us,Kf,Jf,Qf,nn=U(()=>{"use strict";fr();Ft();Zf=25,qf=22,dr=5,en=11,us=14,Kf=55,Jf=60,Qf=10});function lc(e){return`rgb(${Math.round(e[0]*255)},${Math.round(e[1]*255)},${Math.round(e[2]*255)})`}function st(e,t,n,i,r={}){return{entryCount:n,boxWidth:()=>{let o=e?.getContext("2d");if(!o)return 0;o.save();let s=0,l=0;o.font=`${r.fontPx??11}px ${t.fontFamily}`;for(let m of i())if(s=Math.max(s,o.measureText(m).width),++l>=ac)break;let a=0;r.title&&(o.font=`bold 10px ${t.fontFamily}`,a=o.measureText(r.title).width+Qo),o.restore();let u=r.leading??Bl;return Math.ceil(Math.max(a,u+s+Jo))}}}function It(e,t,n,i=Mt,r){return st(e,t,0,()=>[i(n.max),i((n.min+n.max)/2),i(n.min)],{title:r,leading:Ia+Da,fontPx:10})}function gr(e,t,n,i,r=1){return e.save(),e.fillStyle=n.backgroundColor,e.strokeStyle=n.lr,e.lineWidth=1,e.beginPath(),e.rect(t.x+.5,t.y+.5,t.width-1,t.height-1),e.globalAlpha=Math.min(1,Math.max(0,r)),e.fill(),e.globalAlpha=1,e.stroke(),e.beginPath(),e.moveTo(t.x+.5,t.y+tt+.5),e.lineTo(t.x+t.width-.5,t.y+tt+.5),e.stroke(),i&&(e.fillStyle=n.pn,e.font=`bold 10px ${n.fontFamily}`,e.textAlign="left",e.textBaseline="middle",e.fillText(St(e,i,Math.max(0,t.width-Qo)),t.x+8,t.y+tt/2+.5)),e.restore(),{x:t.x+Pl,y:t.y+tt+$i/2,width:Math.max(0,t.width-Jo),height:Math.max(0,t.height-tt-$i)}}function ms(e,t,n,i,r){if(i<=t.height)return;let o=t.x+t.width-br,s=Math.max(20,t.height/i*t.height),l=t.height-s,a=i-t.height,u=t.y+(a>0?n/a*l:0);e.save(),e.fillStyle=r.lr,e.fillRect(o,t.y,br,t.height),e.fillStyle=r.pn,e.fillRect(o,u,br,s),e.restore()}function St(e,t,n){if(n<=0)return"";if(e.measureText(t).width<=n)return t;let i=0,r=t.length;for(;i<r;){let o=Math.ceil((i+r)/2);e.measureText(t.slice(0,o)+"\\u2026").width<=n?i=o:r=o-1}return i>0?t.slice(0,i)+"\\u2026":"\\u2026"}function rn(e,t,n,i,r,o,s){let l={x:t.e.x+t.e.width+12,y:t.margins.top+20,width:Math.max(1,t.cssWidth-t.e.x-t.e.width-12),height:Math.max(1,t.e.height)};Xe(e,l,n,i,r,o,s&&{...s,sidebarGutter:t.margins.right})}function Xe(e,t,n,i,r,o=Mt,s){let l=e.getContext("2d");if(!l)return;let a=r.pn,u=r.lr,m=r.fontFamily,f=s?.mode==="floating",c,p,b,g=t,h=Ia;f?(g=gr(l,t,r,n.label,s?.opacity),c=g.x,p=g.y+4,b=Math.max(8,g.height-12)):(c=t.x,p=t.y,b=Math.min(120,t.height*.4),l.fillStyle=a,l.font=`9px ${m}`,l.textAlign="left",l.textBaseline="bottom",l.fillText(n.label,c,p-4));let y=n.max,C=n.min,_=l.createLinearGradient(0,p,0,p+b),x=16;for(let T=0;T<=x;T++){let L=T/x,D=y+L*(C-y),M=vt(D,n.min,n.max),P=Ee(i,M);_.addColorStop(L,lc(P))}l.fillStyle=_,l.fillRect(c,p,h,b),l.strokeStyle=u,l.lineWidth=1,l.strokeRect(c,p,h,b),l.fillStyle=a,l.font=`10px ${m}`,l.textAlign="left",l.textBaseline="middle";let v=c+h+Da,A=Math.max(0,g.x+g.width-v);if(l.fillText(St(l,o(n.max),A),v,p+2),l.fillText(St(l,o((n.min+n.max)/2),A),v,p+b/2),l.fillText(St(l,o(n.min),A),v,p+b-2),n.min<0&&n.max>0){let T=(n.max-0)/(n.max-n.min),L=p+T*b;l.strokeStyle=a,l.lineWidth=1,l.beginPath(),l.moveTo(c+h,L),l.lineTo(c+h+4,L),l.stroke(),l.fillStyle=a,l.fillText("0",v,L)}s&&s.legend.setPainted({mode:s.mode,box:t,content:g,contentHeight:Math.min(g.height,b+8),sidebarGutter:s.sidebarGutter})}function hr(e,t,n,i,r,o){let s={x:t.e.x+t.e.width+12,y:t.margins.top+10,width:Math.max(1,t.cssWidth-t.e.x-t.e.width-12),height:Math.max(1,t.e.height)};Dt(e,s,n,i,r,o&&{...o,sidebarGutter:t.margins.right})}function Dt(e,t,n,i,r,o){let s=e.getContext("2d");if(!s)return;if(n.size===0){o?.legend.clearPainted();return}let l=r.pn,a=r.fontFamily,u=o?.mode==="floating",m=t;u&&(m=gr(s,t,r,o?.title??"Legend",o?.opacity));let f=10,c=Mn,p=n.size*c,b=o?o.legend.clampScroll(m.height,p):0,g=p>m.height,h=Math.max(0,m.width-f-6-(g?br+4:0));s.save(),s.beginPath(),s.rect(m.x,m.y,m.width,m.height),s.clip(),s.font=`11px ${a}`,s.textAlign="left",s.textBaseline="middle";let y=Math.floor(b/c),C=m.x,_=0,x=m.y+c/2+y*c-b;for(let[v,A]of n){if(_<y){_++;continue}if(x-c/2>=m.y+m.height)break;let T=i[A]??i[A%i.length]??[0,0,0];s.fillStyle=`rgb(${Math.round(T[0]*255)},${Math.round(T[1]*255)},${Math.round(T[2]*255)})`,s.fillRect(C,x-f/2,f,f),s.fillStyle=l,s.fillText(St(s,v,h),C+f+6,x),x+=c,_++}s.restore(),ms(s,m,b,p,r),o&&o.legend.setPainted({mode:o.mode,box:t,content:m,contentHeight:p,sidebarGutter:o.sidebarGutter})}var br,Ia,Da,ac,Hn=U(()=>{"use strict";we();He();he();br=4,Ia=16,Da=5;ac=64});function lt(e){return isNaN(e)?0:e}function Vn(e){return e.N?e.u.size:0}function Ea(e,t){let n=e.s??void 0;return e.N?st(e.l,t,e.u.size,()=>e.u.keys(),{title:n}):It(e.l,t,{min:e.b,max:e.c},e.s?e.getColumnFormatter(e.s,"value"):void 0,n)}function Pa(e,t){let n=t.gl,i=t.dpr,r=n.canvas.width/i,o=n.canvas.height/i;if(r<=0||o<=0)return;let s=e.w.length>0,l=e.W.facet_mode,a=s&&l==="grid";e.computeEffectiveFacetFlags();let u=e.s!==""&&e.b<e.c,m=a&&e.W.zoom_mode==="independent",f;if(e.C&&!m?f=e.C.getVisibleDomain():f={xMin:e.we,xMax:e.ut,yMin:e.Be,yMax:e.mt},!isFinite(f.xMin)||!isFinite(f.yMin))return;let c=e.A(),p=c.Ve,b=e.ot[e.et]||"",g=e.ot[e.Ze]||"",h=b==="date"||b==="datetime",y=g==="date"||g==="datetime",C=e.N,_=!C&&!e.s,x=c.O;if(C||_){let v=_?Math.max(1,e.w.length):Math.max(1,e.u.size);if(e.Ii&&e.br===p&&e.gr===v)x=e.Ii;else{let A=ye(p,c.O,v);x=Nl(A),e.Ii=x,e.br=p,e.gr=v}}else e.Ii=null,e.br=null,e.gr=-1;e.me=Pn(t,e.me,x),a?fc(e,t,f,c,{xIsDate:h,yIsDate:y,cssWidth:r,cssHeight:o}):(e.g=null,mc(e,t,f,c,{xIsDate:h,yIsDate:y,cssWidth:r,cssHeight:o,hasColorCol:u})),e.Me(()=>$e(e))}function yr(e,t,n,i){return{min:t,max:n,label:e.et||(e.mo?"Row":e.Xe||""),isDate:i,dateModifiers:i?e.getDateModifiers(e.Xe):void 0}}function xr(e,t,n,i){return{min:t,max:n,label:e.Ze||e.Ge,isDate:i,dateModifiers:i?e.getDateModifiers(e.Ge):void 0}}function Cr(e,t){let n=0;for(let r of e)r.length>n&&(n=r.length);return{levels:[{labels:e.slice(),runs:[],maxLabelChars:n}],numRows:e.length,levelLabels:[t]}}function uc(e,t,n,i,r,o,s,l,a){if(e.Ye&&e.pt){let u=ae(t,a);u&&xe(u,n,e.pt,l)}else ar(t,i,n,o,l,!0,a,e.getColumnFormatter(e.Xe,"tick"));if(e.Re&&e.bt){let u=ae(t,a);u&&Ge(u,n,e.bt,l)}else ur(t,r,n,s,l,!0,a,e.getColumnFormatter(e.Ge,"tick"))}function mc(e,t,n,i,r){let o=t.gl,{cssWidth:s,cssHeight:l,xIsDate:a,yIsDate:u,hasColorCol:m}=r;e.pt=e.Ye&&e.hn.length>0?Cr(e.hn,e.et||e.Xe||""):null,e.bt=e.Re&&e.yn.length>0?Cr(e.yn,e.Ze||e.Ge||""):null;let f=nt(e.t,m,80,Vn(e)),c=55+(e.Ze?16:0),p=Math.max(1,s-c-f),b=e.bt?tn(e.bt):void 0,g=e.pt?Ye(e.pt,p):void 0,h=e.zt==="map",y=h&&!e.t.numeric_axes,C=new re(s,l,y?{hasXLabel:!1,hasYLabel:!1,hasLegend:m,leftExtra:0,bottomExtra:0,rightExtra:m&&le(e.t,Vn(e))==="sidebar"?Me(e.t,80):0}:{hasXLabel:!!e.et,hasYLabel:!!e.Ze,hasLegend:m,leftExtra:b,bottomExtra:g,rightExtra:f});e.f=C,e.C&&e.C.updateLayout(C);let _=C.buildProjectionMatrix(n.xMin,n.xMax,n.yMin,n.yMax,void 0,void 0,void 0,lt(e.D),lt(e.E)),x=yr(e,n.xMin,n.xMax,a),v=xr(e,n.yMin,n.yMax,u),A=Kt(x,v,C),T=e.Ye?[]:A.xTicks,L=e.Re?[]:A.yTicks,D=t.dpr,M=e.ne;M&&!h?e.Me(()=>{de(M,C,D),is(M,C,T,L,i,D)}):M&&h&&e.Me(()=>de(M,C,D)),ot(o,C,t.dpr,()=>{h&&e.renderBackground(t,C,_,n,lt(e.D),lt(e.E)),e.glyph.draw(e,t,_)}),e.oe=x,e.Q=v,e.Un=T,e.fe=L,e.Di=i.O,e.Ei=m}function fc(e,t,n,i,r){let o=t.gl,{cssWidth:s,cssHeight:l,xIsDate:a,yIsDate:u}=r;e.pt=e.Ye&&e.hn.length>0?Cr(e.hn,e.et||e.Xe||""):null,e.bt=e.Re&&e.yn.length>0?Cr(e.yn,e.Ze||e.Ge||""):null;let m=e.w.map(M=>M.prefix),f=e.N&&e.u.size>1,c=!!e.s&&!e.N&&e.b<e.c,p=f||c,b=e.zt==="map",g=b&&!e.t.numeric_axes,h=Be(m,{cssWidth:s,cssHeight:l,xAxis:g?"none":e.Ci?"outer":"cell",yAxis:g?"none":e._i?"outer":"cell",hasLegend:p&&le(e.t,Vn(e))==="sidebar",legendWidth:Me(e.t,96),hasXLabel:!g&&!!e.et,hasYLabel:!g&&!!e.Ze,gap:e.W.facet_padding});if(e.g=h,h.cells.length>1){let M=h.cells[0].layout.e;for(let P=1;P<h.cells.length;P++){let w=h.cells[P].layout.e;if(w.width!==M.width||w.height!==M.height){console.warn(`facet-grid: cell ${P} size (${w.width}\\xD7${w.height}) differs from cell 0 (${M.width}\\xD7${M.height})`);break}}}e.f=h.cells[0]?.layout??null,e.syncFacetZoomLayouts(h.cells);let y=e.W.zoom_mode==="independent",C=yr(e,n.xMin,n.xMax,a),_=xr(e,n.yMin,n.yMax,u),x=h.cells[0]?.layout,v=x?Kt(C,_,x):{xTicks:[],yTicks:[]},A=e.Ye?[]:v.xTicks,T=e.Re?[]:v.yTicks,L=t.dpr,D=e.ne;D&&x&&e.Me(()=>de(D,x,L)),Lt(o);for(let M=0;M<h.cells.length;M++){let P=h.cells[M],w=e.getZoomControllerForFacet(M),I=y&&w?w.getVisibleDomain():n,G=P.layout.buildProjectionMatrix(I.xMin,I.xMax,I.yMin,I.yMax,void 0,void 0,void 0,lt(e.D),lt(e.E));D&&!b&&e.Me(()=>{let E=y?Kt(yr(e,I.xMin,I.xMax,a),xr(e,I.yMin,I.yMax,u),P.layout).xTicks:A,S=y?Kt(yr(e,I.xMin,I.xMax,a),xr(e,I.yMin,I.yMax,u),P.layout).yTicks:T;is(D,P.layout,E,S,i,L)}),Tt(o,P.layout,t.dpr,()=>{b&&e.renderBackground(t,P.layout,G,I,lt(e.D),lt(e.E)),e.glyph.drawSeries(e,t,G,M)})}e.oe=C,e.Q=_,e.Un=A,e.fe=T,e.Di=i.O,e.Ei=p}function $e(e){cc(e),e.presentOverlay()}function cc(e){!e.l||!e.f||!e.oe||!e.Q||!e.i||(de(e.l,e.f,e.i.dpr),e.g?pc(e):dc(e))}function dc(e){let t=e.f,n=e.A(),i=e.i?.dpr??1;if(e.zt==="map"){if(e.t.numeric_axes){let l=On(t);ar(e.l,e.oe,t,l.xTicks,n,!!e.et,i,l.formatX),ur(e.l,e.Q,t,l.yTicks,n,!!e.Ze,i,l.formatY)}e.renderMapChrome(e.l,t,n,i)}else uc(e,e.l,t,e.oe,e.Q,e.Un,e.fe,n,i);let o=le(e.t,Vn(e)),s=!1;if(e.Ei&&o!=="none"){let l=e.Di??n.O,a=o==="floating",u={mode:a?"floating":"sidebar",legend:e.I,title:e.s??void 0,opacity:e.t.legend_opacity},m=a?e.I.floatingBox(e.t,t.cssWidth,t.cssHeight,Ea(e,n)):null;if(e.N&&e.u.size>0){let f=ye(n.Ve,l,e.u.size);m?Dt(e.l,m,e.u,f,n,u):hr(e.l,t,e.u,f,n,u),s=!0}else if(e.s){let f={min:e.b,max:e.c,label:e.s},c=e.getColumnFormatter(e.s,"value");m?Xe(e.l,m,f,l,n,c,u):rn(e.l,t,f,l,n,c,u),s=!0}}s||e.I.clearPainted(),Ba(e,e.l,t,0,1),e.se>=0&&e.Z&&e.q&&hc(e,e.l,t)}function pc(e){let t=e.g,n=e.l,i=e.A(),r=e.i?.dpr??1,o=e.Un,s=e.fe,l=e.oe,a=e.Q,u=e.zt==="map",m=e.Ci&&!e.Ye,f=e._i&&!e.Re,c=e.W.zoom_mode==="independent",p=u&&e.t.numeric_axes,b=p&&t.cells.length>0?On(t.cells[0].layout):null;u&&e.renderMapChrome(n,e.f,i,r),(!u||b)&&m&&t.outerXAxisRect&&Gn(n,t.outerXAxisRect,l,b?b.xTicks:o,Sn(t),i,!!e.et,r,b?b.formatX:e.getColumnFormatter(e.Xe,"tick")),(!u||b)&&f&&t.outerYAxisRect&&kn(n,t.outerYAxisRect,a,b?b.yTicks:s,In(t),i,!!e.Ze,r,b?b.formatY:e.getColumnFormatter(e.Ge,"tick"));for(let _=0;_<t.cells.length;_++){let x=t.cells[_],v=c?e.getZoomControllerForFacet(_):null,A=v?v.getVisibleDomain():null,T=A?{...l,min:A.xMin,max:A.xMax}:l,L=A?{...a,min:A.yMin,max:A.yMax}:a,D=p?On(x.layout):null,M=D||(c?Kt(T,L,x.layout):{xTicks:o,yTicks:s});if((!u||D)&&!m)if(e.Ye&&e.pt){let P=ae(n,r);P&&xe(P,x.layout,e.pt,i)}else ar(n,T,x.layout,M.xTicks,i,!!e.et,r,D?D.formatX:e.getColumnFormatter(e.Xe,"tick"));if((!u||D)&&!f)if(e.Re&&e.bt){let P=ae(n,r);P&&Ge(P,x.layout,e.bt,i)}else ur(n,L,x.layout,M.yTicks,i,!!e.Ze,r,D?D.formatY:e.getColumnFormatter(e.Ge,"tick"));x.titleRect&&Yt(n,x.label,x.titleRect,i,r),Ba(e,n,x.layout,_,_+1)}let g=le(e.t,Vn(e)),h=g==="floating",y=h?e.I.floatingBox(e.t,e.f.cssWidth,e.f.cssHeight,Ea(e,i)):t.legendRect,C=!1;if(e.Ei&&g!=="none"&&y){let _=e.Di??i.O,x={mode:h?"floating":"sidebar",legend:e.I,title:e.s??void 0,sidebarGutter:h?void 0:t.legendRect?.width,opacity:e.t.legend_opacity};if(e.N&&e.u.size>0){let v=ye(i.Ve,_,Math.max(1,e.u.size));Dt(n,y,e.u,v,i,x),C=!0}else e.s&&(Xe(n,h?y:{x:y.x,y:y.y+20,width:y.width,height:y.height-20},{min:e.b,max:e.c,label:e.s},_,i,e.getColumnFormatter(e.s,"value"),x),C=!0)}if(C||e.I.clearPainted(),e.se>=0&&e.Z&&e.q){let _=isNaN(e.D)?0:e.D,x=isNaN(e.E)?0:e.E,v=e.Z[e.se]+_,A=e.q[e.se]+x,T=bc(e,e.se),L=e.glyph.tooltipOptions(),D=Ga(e,L),M=ie(e.t),P=e.V.grid??[];for(let w=0;w<t.cells.length;w++){let I=t.cells[w],G=w===T,E=I.layout.R(v,A),S=I.layout.e;if(E.px<S.x||E.px>S.x+S.width||E.py<S.y||E.py>S.y+S.height)continue;G&&D&&ze(n,I.layout,i,r,ka(e,I.layout,E,v,A),M.opacity);let k=e.W.coordinated_tooltip;Ue(n,E,G||k?P:[],I.layout,i,r,{...M,crosshair:L.crosshair&&(!G||!D),highlightRadius:G?L.highlightRadius:0})}}}function bc(e,t){return e.F<=0?0:Math.floor(t/e.F)}function Ba(e,t,n,i,r){if(!e.Vt||!e.Z||!e.q)return;let o=e.Vt.dictionary,s=e.Vt.data,l=e.Z,a=e.q,u=isNaN(e.D)?0:e.D,m=isNaN(e.E)?0:e.E,f=e.F;if(f<=0)return;let c=0;for(let C=i;C<r;C++)c+=e.U[C]??0;if(c===0)return;let p=e.i?.dpr??1,b=ae(t,p);if(!b)return;let g=e.A(),h=n.e,y=Math.max(1,Math.ceil(c/gc));b.save(),b.font=`11px ${g.fontFamily}`,b.fillStyle=g.Pe,b.textAlign="left",b.textBaseline="middle";for(let C=i;C<r;C++){let _=e.U[C]??0,x=C*f;for(let v=0;v<_;v+=y){let A=x+v,T=s[A];if(T<0)continue;let{px:L,py:D}=n.R(l[A]+u,a[A]+m);L<h.x||L>h.x+h.width||D<h.y||D>h.y+h.height||b.fillText(o[T],L+8,D-4)}}b.restore()}function hc(e,t,n){let i=e.se;if(i<0||!e.Z||!e.q)return;let r=isNaN(e.D)?0:e.D,o=isNaN(e.E)?0:e.E,s=e.Z[i]+r,l=e.q[i]+o,a=n.R(s,l),u=e.V.grid??[],m=e.A(),f=e.i?.dpr??1,c=e.glyph.tooltipOptions(),p=Ga(e,c);p&&ze(t,n,m,f,ka(e,n,a,s,l),e.t.tooltip_opacity),Ue(t,a,u,n,m,f,{...ie(e.t),crosshair:c.crosshair&&!p,highlightRadius:c.highlightRadius})}function Ga(e,t){return t.axisIndicators&&(e.zt!=="map"||!!e.t.numeric_axes)}function ka(e,t,n,i,r){let o,s,l=e.getColumnFormatter(e.Xe,"tick"),a=e.getColumnFormatter(e.Ge,"tick");if(e.zt==="map"){let u=On(t),[m,f]=Jt(i,r);o=l?l(m):u.formatX(i),s=a?a(f):u.formatY(r)}else{let u=l??ce(e.oe?.isDate,e.Un,e.oe?.dateModifiers),m=a??ce(e.Q?.isDate,e.fe,e.Q?.dateModifiers);o=u(i),s=m(r)}return[{side:"bottom",px:n.px,py:n.py,text:o},{side:"left",px:n.px,py:n.py,text:s}]}var gc,fs=U(()=>{"use strict";ir();rt();Xt();Dn();he();En();$t();Vt();ge();Bn();rs();wt();ya();Nn();we();nn();Hn();He();gc=5e3});function yc(e){if(!e.gn.isDirty||!e.Z||!e.q)return;let t=e.Z,n=e.q,i=Math.max(1,e.w.length),r=e.F,o=isNaN(e.D)?0:e.D,s=isNaN(e.E)?0:e.E;e.gn.rebuild({xMin:e.we-o,xMax:e.ut-o,yMin:e.Be-s,yMax:e.mt-s},e.dt,l=>{for(let a=0;a<i;a++){let u=e.U[a]??0,m=a*r;for(let f=0;f<u;f++)l(m+f,t[m+f],n[m+f])}})}function _r(e,t,n){if(!e.Z||!e.q)return;let{layout:i,facetIdx:r}=xc(e,t,n);if(!i){Wa(e);return}let o=i.e;if(t<o.x||t>o.x+o.width||n<o.y||n>o.y+o.height){Wa(e);return}let s=i.H,l=i.K,a=i.J,u=i.ie,m=s+(t-o.x)/o.width*(l-s),f=u-(n-o.y)/o.height*(u-a),c=o.width/(l-s),p=o.height/(u-a),b=isNaN(e.D)?0:e.D,g=isNaN(e.E)?0:e.E,h=m-b,y=f-g,C=r<0?Cc(e,h,y,c,p):_c(e,r,h,y,c,p);if(C!==e.se||r!==e.Hn){if(e.se=C,e.Hn=r,C>=0){let _=e.V.beginHover(C);e.glyph.buildTooltipLines(e,C).then(x=>{e.V.commitHover(_,x)&&$e(e)})}else e.V.clearHover();$e(e)}}function Wa(e){(e.se!==-1||e.Hn!==-1)&&(e.se=-1,e.Hn=-1,$e(e))}function xc(e,t,n){if(e.g){let i=e.g.cells;for(let r=0;r<i.length;r++){let o=i[r].layout.e;if(t>=o.x&&t<=o.x+o.width&&n>=o.y&&n<=o.y+o.height)return{layout:i[r].layout,facetIdx:r}}return{layout:null,facetIdx:-1}}return{layout:e.f,facetIdx:-1}}function Cc(e,t,n,i,r){yc(e);let o=e.gn.query(t,n,zn,i,r,e.Z,e.q);if(o>=0)return o;let s=zn*zn,l=Math.max(1,e.w.length),a=e.F,u=e.Z,m=e.q;for(let f=0;f<l;f++){let c=e.U[f]??0,p=f*a;for(let b=0;b<c;b++){let g=p+b,h=(u[g]-t)*i,y=(m[g]-n)*r,C=h*h+y*y;C<s&&(s=C,o=g)}}return o}function _c(e,t,n,i,r,o){let s=e.U[t]??0;if(s===0)return-1;let l=e.F,a=t*l,u=e.Z,m=e.q,f=zn*zn,c=-1;for(let p=0;p<s;p++){let b=a+p,g=(u[b]-n)*r,h=(m[b]-i)*o,y=g*g+h*h;y<f&&(f=y,c=b)}return c}function cs(e,t,n){if(e.Vn!==t&&e.v.dismiss(),e.Vn=t,t<0||!e.Z||!e.q)return;let i=vc(e,t);if(!i)return;let r=isNaN(e.D)?0:e.D,o=isNaN(e.E)?0:e.E,s=i.R(e.Z[t]+r,e.q[t]+o),l=e.V.beginPin();e.glyph.buildTooltipLines(e,t).then(a=>{e.V.isPinFresh(l)&&e.Vn===t&&a.length!==0&&e.v.pin(a,s,i,ie(e.t),n)}),e.se=-1,e.Hn=-1,$e(e)}function vc(e,t){if(e.g&&e.F>0){let n=Math.floor(t/e.F),i=e.g.cells[n];if(i)return i.layout}return e.f}function Na(e,t){if(t<0||!e.Z||!e.q)return!1;if(e.F>0){let n=Math.floor(t/e.F);return t%e.F<(e.U[n]??0)}return t<e.dt}function Oa(e){e.v.dismiss(),e.Vn=-1}var zn,Ua=U(()=>{"use strict";fs();ge();zn=24});var on,ds=U(()=>{"use strict";on=class{constructor(){d(this,"grid",null);d(this,"hoveredTarget",null);d(this,"hr",0);d(this,"yr",0)}beginHover(t){return this.grid=null,this.hoveredTarget=t,++this.hr}commitHover(t,n){return t!==this.hr?!1:(this.grid=n,!0)}clearHover(){this.grid=null,this.hoveredTarget=null,this.hr++}beginPin(){return++this.yr}isPinFresh(t){return t===this.yr}invalidatePin(){this.yr++}}});function Z(e,t,n,i,r,o){let s=e.shaders.getOrCreate(t,n,i),l=e.gl,a={program:s};for(let u of r)a[u]=l.getUniformLocation(s,u);for(let u of o)a[u]=l.getAttribLocation(s,u);return a}var pe=U(()=>{"use strict"});async function sn(e,t){let n=[];if(!e.Ht||!e.ze)return n;let i=e.Ht[t];if(i<0)return n;if(e.w.length>0&&e.F>0){let s=Math.floor(t/e.F),l=e.w[s];l?.prefix&&n.push([l.prefix])}let r=await e.ze.fetchRow(i),o=e.w.length>0&&e.F>0?e.w[Math.floor(t/e.F)]?.prefix??null:null;for(let[s,l]of r){if(l==null)continue;let a=s;if(o!==null){let u=`${o}|`;if(!s.startsWith(u))continue;a=s.substring(u.length)}else if(s.includes("|"))continue;if(typeof l=="number"){let u=e.getColumnFormatter(s,"value")(l);n.push([a,u])}else n.push([a,String(l)])}return n}var vr=U(()=>{"use strict"});function Ac(e,t,n,i,r){if(t.uniformMatrix4fv(e.u_projection,!1,n),t.uniform1f(e.u_point_size,i.t.point_size_px*r),i.b>=i.c)t.uniform2f(e.u_color_range,0,0);else if(i.s&&!i.N){let[s,l]=Ki(i.b,i.c);t.uniform2f(e.u_color_range,s,l)}else t.uniform2f(e.u_color_range,i.b,i.c);i.ft<i.ct?t.uniform2f(e.u_size_range,i.ft,i.ct):t.uniform2f(e.u_size_range,0,0);let o=Math.min(i.t.point_size_px,3);t.uniform2f(e.u_point_size_range,Math.max(2*r,i.t.point_size_px/o*r),i.t.point_size_px*o*r)}function Ha(e,t,n,i){let r=n.gl;if(!t.me)return!1;r.useProgram(e.program),Ac(e,r,i,t,n.dpr),Ve(n,t.me.texture,e.u_gradient_lut,0);let o=n.L.peek("a_position"),s=n.L.peek("a_color_value"),l=n.L.peek("a_size_value");return!o||!s||!l?!1:(r.bindBuffer(r.ARRAY_BUFFER,o.buffer),r.enableVertexAttribArray(e.a_position),r.vertexAttribPointer(e.a_position,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,s.buffer),r.enableVertexAttribArray(e.a_color_value),r.vertexAttribPointer(e.a_color_value,1,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,l.buffer),r.enableVertexAttribArray(e.a_size_value),r.vertexAttribPointer(e.a_size_value,1,r.FLOAT,!1,0,0),!0)}var ln,ps=U(()=>{"use strict";$t();he();pe();vr();Bo();Go();ln=class{constructor(){d(this,"name","point");d(this,"h",null)}ensureProgram(t,n){this.h||(this.h=Z(n,"scatter",ci,di,["u_projection","u_point_size","u_color_range","u_gradient_lut","u_size_range","u_point_size_range"],["a_position","a_color_value","a_size_value"]))}draw(t,n,i){let r=this.h;if(!r||!Ha(r,t,n,i))return;let o=n.gl,s=Math.max(1,t.w.length),l=t.F;for(let a=0;a<s;a++){let u=t.U[a]??0;u<=0||o.drawArrays(o.POINTS,a*l,u)}}drawSeries(t,n,i,r){let o=this.h;if(!o||!Ha(o,t,n,i))return;let s=t.U[r]??0;if(s<=0)return;let l=n.gl,a=t.F;l.drawArrays(l.POINTS,r*a,s)}buildTooltipLines(t,n){return sn(t,n)}tooltipOptions(){return{crosshair:!0,highlightRadius:6,axisIndicators:!0}}destroy(t){this.h=null}}});function ee(e){let t=e.gl;if(e.isWebGL2){let i=t;return{setDivisor(r,o){r<0||i.vertexAttribDivisor(r,o)},drawArraysInstanced(r,o,s,l){i.drawArraysInstanced(r,o,s,l)}}}let n=t.getExtension("ANGLE_instanced_arrays");return{setDivisor(i,r){i<0||n?.vertexAttribDivisorANGLE(i,r)},drawArraysInstanced(i,r,o,s){n?.drawArraysInstancedANGLE(i,r,o,s)}}}function at(e){let t=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,1,2,3]),e.STATIC_DRAW),t}function Ar(e){let t=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),t}function ut(e,t,n,i,r,o=0){if(n<0)return!0;let s=e.L.peek(i);if(!s)return!1;let l=e.gl;return l.bindBuffer(l.ARRAY_BUFFER,s.buffer),l.enableVertexAttribArray(n),l.vertexAttribPointer(n,r,l.FLOAT,!1,0,o*r*Float32Array.BYTES_PER_ELEMENT),t.setDivisor(n,1),!0}var ke=U(()=>{"use strict"});function Va(e,t,n,i){let r=n.gl;if(!t.me)return!1;let o=n.dpr;if(r.useProgram(e.program),r.uniformMatrix4fv(e.u_projection,!1,i),r.uniform2f(e.u_resolution,r.canvas.width,r.canvas.height),r.uniform1f(e.u_line_width,t.t.line_width_px*o),t.b>=t.c)r.uniform2f(e.u_color_range,0,0);else if(t.s&&!t.N){let[a,u]=Ki(t.b,t.c);r.uniform2f(e.u_color_range,a,u)}else r.uniform2f(e.u_color_range,t.b,t.c);Ve(n,t.me.texture,e.u_gradient_lut,0);let s=ee(n),{setDivisor:l}=s;return r.bindBuffer(r.ARRAY_BUFFER,e.cornerBuffer),r.enableVertexAttribArray(e.a_corner),r.vertexAttribPointer(e.a_corner,1,r.FLOAT,!1,0,0),l(e.a_corner,0),r.enableVertexAttribArray(e.a_start),l(e.a_start,1),r.enableVertexAttribArray(e.a_end),l(e.a_end,1),r.enableVertexAttribArray(e.a_color_start),l(e.a_color_start,1),r.enableVertexAttribArray(e.a_color_end),l(e.a_color_end,1),!0}function za(e,t,n,i){let r=t.U[i]??0;if(r<2)return;let o=n.gl,s=t.F,l=2*Float32Array.BYTES_PER_ELEMENT,a=Float32Array.BYTES_PER_ELEMENT,u=n.L.peek("a_position"),m=n.L.peek("a_color_value");if(!u||!m)return;let f=i*s*l;o.bindBuffer(o.ARRAY_BUFFER,u.buffer),o.vertexAttribPointer(e.a_start,2,o.FLOAT,!1,l,f),o.vertexAttribPointer(e.a_end,2,o.FLOAT,!1,l,f+l);let c=i*s*a;o.bindBuffer(o.ARRAY_BUFFER,m.buffer),o.vertexAttribPointer(e.a_color_start,1,o.FLOAT,!1,a,c),o.vertexAttribPointer(e.a_color_end,1,o.FLOAT,!1,a,c+a),ee(n).drawArraysInstanced(o.TRIANGLE_STRIP,0,4,r-1)}function Ya(e,t){let{setDivisor:n}=ee(t);n(e.a_start,0),n(e.a_end,0),n(e.a_color_start,0),n(e.a_color_end,0)}var an,bs=U(()=>{"use strict";$t();ke();pe();he();vr();Eo();Po();an=class{constructor(){d(this,"name","line");d(this,"h",null)}ensureProgram(t,n){if(this.h)return;let i=Z(n,"line",mi,fi,["u_projection","u_resolution","u_line_width","u_color_range","u_gradient_lut"],["a_start","a_end","a_color_start","a_color_end","a_corner"]);this.h={...i,cornerBuffer:at(n.gl)}}draw(t,n,i){let r=this.h;if(!r||!Va(r,t,n,i))return;let s=Math.max(1,t.w.length);for(let l=0;l<s;l++)za(r,t,n,l);Ya(r,n)}drawSeries(t,n,i,r){let o=this.h;o&&Va(o,t,n,i)&&(za(o,t,n,r),Ya(o,n))}buildTooltipLines(t,n){return sn(t,n)}tooltipOptions(){return{crosshair:!0,highlightRadius:5,axisIndicators:!0}}destroy(t){let n=this.h;n?.cornerBuffer&&t.i&&t.i.gl.deleteBuffer(n.cornerBuffer),this.h=null}}});var $a,Xa=U(()=>{$a=`#version 300 es\nin vec2 a_corner;in vec2 a_position;in float a_color_value;uniform mat4 u_projection;uniform vec2 u_radius_ndc;uniform vec2 u_color_range;out vec2 v_uv;out float v_color_t;void main(){vec4 A=u_projection*vec4(a_position,0.,1.);gl_Position=A+vec4(a_corner*u_radius_ndc*A.w,0.,0.);v_uv=a_corner;float B=u_color_range.x;float C=u_color_range.y;if(C<=B){v_color_t=0.5;}else if(B<0.&&C>0.){float D=max(-B,C);v_color_t=clamp(0.5+0.5*(a_color_value/D),0.,1.);}else{v_color_t=clamp((a_color_value-B)/(C-B),0.,1.);}}`});var Za,ja=U(()=>{Za=`#version 300 es\nprecision highp float;uniform float u_intensity;in vec2 v_uv;in float v_color_t;layout(location=0)out vec4 A;layout(location=1)out vec4 B;void main(){float C=length(v_uv);float D=max(0.0f,1.0f-C);D=D*D*u_intensity;if(D<=0.0f){discard;}A=vec4(D,D*v_color_t,0.0f,0.0f);float E=(v_color_t-0.5f)*2.0f;B=vec4(max(0.0f,E),max(0.0f,-E),0.0f,0.0f);}`});function Sc(e){switch(e){case"density":return Mc;case"extreme":return Rc;case"signed":return Fc;case"mean":default:return wc}}function qa(e){let t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),t}function gs(e,t,n,i){return Z(e,t,n,i,["u_projection","u_radius_ndc","u_intensity","u_color_range"],["a_corner","a_position","a_color_value"])}function Ic(e){let t=e.gl;if(e.isWebGL2){let n=t;if(n.getExtension("EXT_color_buffer_float"))return{internalFormat:n.RGBA16F,format:n.RGBA,type:n.HALF_FLOAT,isFloat:!0}}return{internalFormat:t.RGBA,format:t.RGBA,type:t.UNSIGNED_BYTE,isFloat:!1}}function Ka(e){let t=e.L.peek("a_position"),n=e.L.peek("a_color_value");return!!t&&!!n}function Ec(e,t){if(!e.s||e.N)return t.robustBounds=null,null;let n=t.robustBounds;if(n&&n.dataCount===e.dt&&n.colorName===e.s&&n.colorIsString===e.N)return{lo:n.lo,hi:n.hi};let i=Pc(e);return i?(t.robustBounds={lo:i.lo,hi:i.hi,dataCount:e.dt,colorName:e.s,colorIsString:e.N},i):(t.robustBounds=null,null)}function Pc(e){if(!e.Tt||e.dt<2)return null;let t=e.F,n=Math.max(1,e.w.length),i=Math.max(1,Math.ceil(e.dt/Dc)),r=[],o=e.Tt;for(let m=0;m<n;m++){let f=e.U[m]??0,c=m*t;for(let p=0;p<f;p+=i){let b=o[c+p];Number.isFinite(b)&&r.push(b)}}if(r.length<2)return null;r.sort((m,f)=>m-f);let s=Math.floor(r.length*.05),l=Math.min(r.length-1,Math.ceil(r.length*.95)),a=r[s],u=r[l];return u>a?{lo:a,hi:u}:e.c>e.b?{lo:e.b,hi:e.c}:null}var Mc,wc,Rc,Fc,un,Dc,hs=U(()=>{"use strict";$t();ke();pe();vr();ko();Wo();No();Xa();ja();Oo();Uo();Mc=0,wc=1,Rc=2,Fc=3,un=class{constructor(){d(this,"name","density");d(this,"h",null)}ensureProgram(t,n){if(this.h){this.ensureHeatTarget(t,n);return}let i=n.gl,r=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,r),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),i.STATIC_DRAW);let o=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,o),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),i.STATIC_DRAW);let{internalFormat:s,format:l,type:a,isFloat:u}=Ic(n),m=qa(i),f=i.createFramebuffer();this.h={splat:gs(n,"density-splat",Ut,Mi),extremeSplat:null,mrtSplat:null,resolve:Z(n,"density-resolve",Ri,Fi,["u_heat","u_extreme","u_gradient_lut","u_heat_max","u_color_mode"],["a_corner"]),quadCornerBuffer:r,tripleCornerBuffer:o,heatTexture:m,heatFramebuffer:f,extremeTexture:null,extremeFramebuffer:null,mrtFramebuffer:null,heatWidth:0,heatHeight:0,heatType:a,heatInternalFormat:s,heatFormat:l,floatFbo:u,indexedBlend:null,signedDowngradeWarned:!1,robustBounds:null},this.ensureHeatTarget(t,n)}draw(t,n,i){let r=this.h;if(!r||!Ka(n))return;let o=Math.max(1,t.w.length),s=t.F,l=0;for(let a=0;a<o;a++)l+=t.U[a]??0;l!==0&&this.runSplatAndResolve(t,n,r,i,a=>{for(let u=0;u<o;u++){let m=t.U[u]??0;m<=0||a(u*s,m)}})}drawSeries(t,n,i,r){let o=this.h;if(!o||!Ka(n))return;let s=t.U[r]??0;if(s<=0)return;let l=t.F;this.runSplatAndResolve(t,n,o,i,a=>a(r*l,s))}buildTooltipLines(t,n){return sn(t,n)}tooltipOptions(){return{crosshair:!0,highlightRadius:0,axisIndicators:!0}}destroy(t){let n=this.h;if(!n||!t.i){this.h=null;return}let i=t.i.gl;i.deleteBuffer(n.quadCornerBuffer),i.deleteBuffer(n.tripleCornerBuffer),i.deleteTexture(n.heatTexture),i.deleteFramebuffer(n.heatFramebuffer),n.extremeTexture&&i.deleteTexture(n.extremeTexture),n.extremeFramebuffer&&i.deleteFramebuffer(n.extremeFramebuffer),n.mrtFramebuffer&&i.deleteFramebuffer(n.mrtFramebuffer),this.h=null}ensureHeatTarget(t,n){let i=this.h;if(!i)return;let r=n.gl,o=r.canvas.width,s=r.canvas.height;if(!(o===i.heatWidth&&s===i.heatHeight)&&!(o<=0||s<=0)){if(this.allocAccumTexture(r,i,i.heatTexture,o,s),r.bindFramebuffer(r.FRAMEBUFFER,i.heatFramebuffer),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,i.heatTexture,0),i.extremeTexture&&(this.allocAccumTexture(r,i,i.extremeTexture,o,s),i.extremeFramebuffer&&(r.bindFramebuffer(r.FRAMEBUFFER,i.extremeFramebuffer),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,i.extremeTexture,0)),i.mrtFramebuffer)){let l=r;l.bindFramebuffer(l.FRAMEBUFFER,i.mrtFramebuffer),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,i.heatTexture,0),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT1,l.TEXTURE_2D,i.extremeTexture,0)}r.bindFramebuffer(r.FRAMEBUFFER,null),i.heatWidth=o,i.heatHeight=s}}allocAccumTexture(t,n,i,r,o){t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,n.heatInternalFormat,r,o,0,n.heatFormat,n.heatType,null)}ensureExtremeTarget(t,n){let i=t.gl;if(n.extremeTexture)return;let r=qa(i);if(n.extremeTexture=r,n.extremeFramebuffer=i.createFramebuffer(),this.allocAccumTexture(i,n,r,n.heatWidth,n.heatHeight),i.bindFramebuffer(i.FRAMEBUFFER,n.extremeFramebuffer),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,r,0),n.indexedBlend===null){let o=t.isWebGL2?i.getExtension("OES_draw_buffers_indexed"):null;n.indexedBlend=o??!1}if(n.indexedBlend){let o=i;n.mrtFramebuffer=o.createFramebuffer(),o.bindFramebuffer(o.FRAMEBUFFER,n.mrtFramebuffer),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,n.heatTexture,0),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT1,o.TEXTURE_2D,r,0)}i.bindFramebuffer(i.FRAMEBUFFER,null)}ensureExtremeSplatProgram(t,n){return n.extremeSplat||(n.extremeSplat=gs(t,"density-extreme",Ut,wi)),n.extremeSplat}ensureMrtSplatProgram(t,n){return n.mrtSplat||(n.mrtSplat=gs(t,"density-mrt",$a,Za)),n.mrtSplat}activeMode(t,n,i){let r=n.t.gradient_color_mode;return r==="signed"&&!i.floatFbo?(this.warnDowngradeOnce(i,"signed mode requires a float framebuffer (EXT_color_buffer_float); falling back to mean."),"mean"):r==="extreme"&&!t.isWebGL2?(this.warnDowngradeOnce(i,"extreme mode requires WebGL2 (for MAX blend and a second color attachment); falling back to mean."),"mean"):r}warnDowngradeOnce(t,n){t.signedDowngradeWarned||(t.signedDowngradeWarned=!0,console.warn(`Density: ${n}`))}runSplatAndResolve(t,n,i,r,o){if(this.ensureHeatTarget(t,n),i.heatWidth===0||i.heatHeight===0||!t.me)return;let s=this.activeMode(n,t,i),l=t.b<t.c&&(!!t.s||t.w.length>1),a=0,u=0;if(s!=="density"&&l&&(a=t.b,u=t.c,!t.N&&(s==="mean"||s==="extreme"))){let f=Ec(t,i);f&&(a=f.lo,u=f.hi)}s==="extreme"&&this.ensureExtremeTarget(n,i),s==="extreme"&&i.indexedBlend?this.runMrtExtremePass(n,i,r,t.t.gradient_intensity,n.dpr*t.t.gradient_radius_px,a,u,o):(this.runHeatPass(n,i,r,t.t.gradient_intensity,n.dpr*t.t.gradient_radius_px,a,u,o),s==="extreme"&&this.runExtremePass(n,i,r,t.t.gradient_intensity,n.dpr*t.t.gradient_radius_px,a,u,o)),this.runResolvePass(n,i,t,s)}runHeatPass(t,n,i,r,o,s,l,a){let u=t.gl,m=!!u.getParameter(u.SCISSOR_TEST);u.bindFramebuffer(u.FRAMEBUFFER,n.heatFramebuffer),u.viewport(0,0,n.heatWidth,n.heatHeight),this.clearTarget(u,m),u.blendFunc(u.ONE,u.ONE),u.blendEquation(u.FUNC_ADD),this.bindSplatProgram(u,n.splat,i,r,o,n.heatWidth,n.heatHeight,s,l),this.bindAndDispatchInstanced(t,n,n.splat,a),this.unbindSplatInstancing(t,n.splat)}runExtremePass(t,n,i,r,o,s,l,a){let u=t.gl,m=!!u.getParameter(u.SCISSOR_TEST),f=this.ensureExtremeSplatProgram(t,n);u.bindFramebuffer(u.FRAMEBUFFER,n.extremeFramebuffer),u.viewport(0,0,n.heatWidth,n.heatHeight),this.clearTarget(u,m),u.blendFunc(u.ONE,u.ONE);let c=u;c.blendEquation(c.MAX),this.bindSplatProgram(u,f,i,r,o,n.heatWidth,n.heatHeight,s,l),this.bindAndDispatchInstanced(t,n,f,a),this.unbindSplatInstancing(t,f),u.blendEquation(u.FUNC_ADD)}runMrtExtremePass(t,n,i,r,o,s,l,a){let u=t.gl,m=n.indexedBlend,f=!!u.getParameter(u.SCISSOR_TEST),c=this.ensureMrtSplatProgram(t,n);u.bindFramebuffer(u.FRAMEBUFFER,n.mrtFramebuffer),u.viewport(0,0,n.heatWidth,n.heatHeight),u.drawBuffers([u.COLOR_ATTACHMENT0,u.COLOR_ATTACHMENT1]),this.clearTarget(u,f),m.enableiOES(u.BLEND,0),m.enableiOES(u.BLEND,1),m.blendEquationiOES(0,u.FUNC_ADD),m.blendFunciOES(0,u.ONE,u.ONE),m.blendEquationiOES(1,u.MAX),m.blendFunciOES(1,u.ONE,u.ONE),this.bindSplatProgram(u,c,i,r,o,n.heatWidth,n.heatHeight,s,l),this.bindAndDispatchInstanced(t,n,c,a),this.unbindSplatInstancing(t,c),m.blendEquationiOES(0,u.FUNC_ADD),m.blendEquationiOES(1,u.FUNC_ADD),m.blendFunciOES(0,u.SRC_ALPHA,u.ONE_MINUS_SRC_ALPHA),m.blendFunciOES(1,u.SRC_ALPHA,u.ONE_MINUS_SRC_ALPHA),u.drawBuffers([u.COLOR_ATTACHMENT0])}clearTarget(t,n){n&&t.disable(t.SCISSOR_TEST),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),n&&t.enable(t.SCISSOR_TEST)}bindSplatProgram(t,n,i,r,o,s,l,a,u){t.useProgram(n.program),t.uniformMatrix4fv(n.u_projection,!1,i),t.uniform1f(n.u_intensity,r);let m=2*o/Math.max(1,s),f=2*o/Math.max(1,l);t.uniform2f(n.u_radius_ndc,m,f),t.uniform2f(n.u_color_range,a,u)}bindAndDispatchInstanced(t,n,i,r){let o=t.gl;o.bindBuffer(o.ARRAY_BUFFER,n.quadCornerBuffer),o.enableVertexAttribArray(i.a_corner),o.vertexAttribPointer(i.a_corner,2,o.FLOAT,!1,0,0);let s=ee(t);s.setDivisor(i.a_corner,0),s.setDivisor(i.a_position,1),s.setDivisor(i.a_color_value,1);let l=t.L.peek("a_position"),a=t.L.peek("a_color_value");r((u,m)=>{let f=2*Float32Array.BYTES_PER_ELEMENT,c=Float32Array.BYTES_PER_ELEMENT;o.bindBuffer(o.ARRAY_BUFFER,l.buffer),o.enableVertexAttribArray(i.a_position),o.vertexAttribPointer(i.a_position,2,o.FLOAT,!1,f,u*f),o.bindBuffer(o.ARRAY_BUFFER,a.buffer),o.enableVertexAttribArray(i.a_color_value),o.vertexAttribPointer(i.a_color_value,1,o.FLOAT,!1,c,u*c),s.drawArraysInstanced(o.TRIANGLE_STRIP,0,4,m)})}unbindSplatInstancing(t,n){let i=ee(t);i.setDivisor(n.a_position,0),i.setDivisor(n.a_color_value,0)}runResolvePass(t,n,i,r){let o=t.gl;o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA);let s=n.resolve;o.useProgram(s.program),o.uniform1f(s.u_heat_max,i.t.gradient_heat_max),o.uniform1i(s.u_color_mode,Sc(r)),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,n.heatTexture),o.uniform1i(s.u_heat,0),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,n.extremeTexture??n.heatTexture),o.uniform1i(s.u_extreme,1),Ve(t,i.me.texture,s.u_gradient_lut,2),o.bindBuffer(o.ARRAY_BUFFER,n.tripleCornerBuffer),o.enableVertexAttribArray(s.a_corner),o.vertexAttribPointer(s.a_corner,2,o.FLOAT,!1,0,0),o.drawArrays(o.TRIANGLES,0,3)}};Dc=5e4});var Et,Lr,Tr,Mr,ys=U(()=>{"use strict";ki();Rn();Ql();ra();fs();Ua();ds();ps();bs();hs();Et=class extends Pe{constructor(n){super();d(this,"glyph");d(this,"zt","cartesian");d(this,"me",null);d(this,"Xe","");d(this,"Ge","");d(this,"et","");d(this,"Ze","");d(this,"mo",!1);d(this,"s","");d(this,"ue","");d(this,"Si","");d(this,"N",!1);d(this,"Ye",!1);d(this,"Re",!1);d(this,"hn",[]);d(this,"yn",[]);d(this,"fo",new Map);d(this,"co",new Map);d(this,"pt",null);d(this,"bt",null);d(this,"w",[]);d(this,"we",1/0);d(this,"ut",-1/0);d(this,"Be",1/0);d(this,"mt",-1/0);d(this,"D",NaN);d(this,"E",NaN);d(this,"b",1/0);d(this,"c",-1/0);d(this,"ft",1/0);d(this,"ct",-1/0);d(this,"kn",1/0);d(this,"Wn",-1/0);d(this,"Nn",1/0);d(this,"On",-1/0);d(this,"Mi",1/0);d(this,"wi",-1/0);d(this,"Ri",1/0);d(this,"Fi",-1/0);d(this,"F",0);d(this,"U",[]);d(this,"fr",0);d(this,"Z",null);d(this,"q",null);d(this,"Tt",null);d(this,"Ht",null);d(this,"Vt",null);d(this,"dt",0);d(this,"u",new Map);d(this,"V",new on);d(this,"cr",null);d(this,"dr",null);d(this,"pr",null);d(this,"po",0);d(this,"gn",new tr);d(this,"f",null);d(this,"se",-1);d(this,"Vn",-1);d(this,"Hn",-1);d(this,"g",null);d(this,"oe",null);d(this,"Q",null);d(this,"Un",null);d(this,"fe",null);d(this,"Di",null);d(this,"Ei",!1);d(this,"Ii",null);d(this,"br",null);d(this,"gr",-1);this.glyph=n}colorScaleColumn(){return this.s||null}repaintChrome(){$e(this)}projectPoint(n,i){return[n,i]}renderBackground(n,i,r,o,s,l){}renderMapChrome(n,i,r,o){}tooltipCallbacks(){return{onHover:(n,i)=>_r(this,n,i),onLeave:()=>{this.se!==-1&&(this.se=-1,$e(this))},onPin:(n,i)=>{if(_r(this,n,i),this.se>=0){let r=this.se;cs(this,r),this.Ho(r)}},onUnpin:()=>{this.emitUnselect()}}}repin(){let n=this.Vn;if(!Na(this,n))return!1;let i=this.xr(n);return cs(this,n,i?yt(i):void 0),!0}async Ho(n){let i=this.xr(n);i&&await this.emitClickAndSelect(i)}clickTargetAt(n,i){return _r(this,n,i),this.se>=0?this.xr(this.se):null}xr(n){if(!this.Ht)return null;let i=this.Ht[n],r=this.T[1]||this.T[0]||"",o=[];if(this.w.length>0&&this.F>0){let s=Math.floor(n/this.F),l=this.w[s];l?.prefix&&this.P.length>0&&(o=l.prefix.split("|"))}return{rowIdx:i!=null&&i>=0?i:null,columnName:r,groupByValues:[],splitByValues:o}}async uploadAndRender(n,i,r,o){let s=o-r;this.i=n,r===0&&na(this,n,i,o),s!==0&&(ia(this,n,i,r,s,o),this.t.domain_mode==="expand"&&(this.Ye||(this.kn=this.we,this.Wn=this.ut),this.Re||(this.Nn=this.Be,this.On=this.mt),this.Mi=this.b,this.wi=this.c,this.Ri=this.ft,this.Fi=this.ct),await this.requestRender(n))}resetExpandedDomain(){this.kn=1/0,this.Wn=-1/0,this.Nn=1/0,this.On=-1/0,this.Mi=1/0,this.wi=-1/0,this.Ri=1/0,this.Fi=-1/0}Ot(n){n.uploadedCount===0&&this.dt===0||(this.i=n,Pa(this,n))}destroyInternal(){this.glyph.destroy(this),this.me=null,this.Z=null,this.q=null,this.Tt=null,this.Ht=null,this.Vt=null,this.V.clearHover(),this.u.clear(),this.gn.clear(),this.cr=null,this.dr=null,this.pr=null,this.w=[],this.U=[],Oa(this)}},Lr=class extends Et{constructor(){super(new ln)}},Tr=class extends Et{constructor(){super(new an)}},Mr=class extends Et{constructor(){super(new un)}}});var Ao,Cm=U(()=>{"use strict";Ao=class{constructor(t=256){d(this,"Ie",new Map);d(this,"wo");this.wo=t}get(t){let n=this.Ie.get(t);return n!==void 0&&(this.Ie.delete(t),this.Ie.set(t,n)),n}set(t,n,i){if(this.Ie.has(n)){let r=this.Ie.get(n);t.deleteTexture(r),this.Ie.delete(n)}for(this.Ie.set(n,i);this.Ie.size>this.wo;){let r=this.Ie.keys().next().value;if(r===void 0)break;let o=this.Ie.get(r);t.deleteTexture(o),this.Ie.delete(r)}}has(t){return this.Ie.has(t)}dispose(t){for(let n of this.Ie.values())t.deleteTexture(n);this.Ie.clear()}}});function yn(e,t,n,i){return`${e}/${t}/${n}/${i}`}var Lo,_m=U(()=>{"use strict";Lo=class{constructor(){d(this,"De",new Map);d(this,"Ro",()=>{})}setOnLoad(t){this.Ro=t}load(t,n,i,r){let o=yn(t.id,n,i,r),s=this.De.get(o);if(s)return s.promise;let l=new AbortController,a=t.urlFor(n,i,r),u=this.Xo(a,l.signal).then(m=>(this.De.delete(o),m&&this.Ro(),m)).catch(()=>(this.De.delete(o),null));return this.De.set(o,{promise:u,abort:l}),u}cancelAll(){for(let t of this.De.values())t.abort.abort();this.De.clear()}cancelExcept(t){for(let[n,i]of this.De)t.has(n)||(i.abort.abort(),this.De.delete(n))}async Xo(t,n){let i=self.origin?.startsWith("http")?`${self.origin}/`:void 0,r=await fetch(t,{signal:n,referrer:i});if(!r.ok)return null;let o=await r.blob();return await createImageBitmap(o)}}});var To,vm=U(()=>{"use strict";Nn();Cm();_m();Ho();Vo();pe();To=class{constructor(){d(this,"r",null);d(this,"Y",null);d(this,"h",new Ao);d(this,"oi",new Lo);d(this,"si",null);d(this,"Fo",1);d(this,"So",()=>{})}setOnTileLoad(t){this.So=t,this.oi.setOnLoad(t)}setSource(t,n){this.si?.id!==n.id&&(this.h.dispose(t),this.oi.cancelAll(),this.si=n)}setAlpha(t){this.Fo=Math.max(0,Math.min(1,t))}get source(){return this.si}render(t,n,i,r,o,s){let l=this.si;if(!l)return;this.$o(t);let a=this.r,u=this.Y;if(!a||!u)return;let m=t.gl,f=t.dpr,c=Math.max(1,n.e.width*f),p=r.xMax-r.xMin;if(!isFinite(p)||p<=0)return;let b=p/c,g=ca(b,l.tileSize,l.maxZoom),h=da(r,g),y=new Set;for(let _ of h)y.add(yn(l.id,_.z,_.x,_.y));this.oi.cancelExcept(y),m.useProgram(a.program),m.uniformMatrix4fv(a.u_projection,!1,i),m.uniform1f(a.u_alpha,this.Fo),m.bindBuffer(m.ARRAY_BUFFER,u),m.enableVertexAttribArray(a.a_corner),m.vertexAttribPointer(a.a_corner,2,m.FLOAT,!1,0,0),m.activeTexture(m.TEXTURE0),m.uniform1i(a.u_tile,0);let C=m.isEnabled(m.BLEND);m.enable(m.BLEND),m.blendFunc(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA);for(let _ of h)this.jo(m,a,l,_,o,s);C||m.disable(m.BLEND)}destroy(t){this.oi.cancelAll(),this.h.dispose(t),this.Y&&(t.deleteBuffer(this.Y),this.Y=null),this.r=null}jo(t,n,i,r,o,s){let l=fa(r.z,r.x,r.y),a={xMin:l.xMin-o,xMax:l.xMax-o,yMin:l.yMin-s,yMax:l.yMax-s},u=yn(i.id,r.z,r.x,r.y),m=this.h.get(u);if(m){this.Io(t,n,m,a,[0,0],[1,1]);return}this.Zo(t,i,r);for(let f=1;f<=6;f++){let c=r.z-f;if(c<0)return;let p=r.x>>f,b=r.y>>f,g=yn(i.id,c,p,b),h=this.h.get(g);if(!h)continue;let y=1<<f,C=r.x-p*y,_=r.y-b*y,x=1/y,v=[C*x,_*x],A=[v[0]+x,v[1]+x];this.Io(t,n,h,a,v,A);return}}Io(t,n,i,r,o,s){t.bindTexture(t.TEXTURE_2D,i),t.uniform2f(n.u_extent_min,r.xMin,r.yMin),t.uniform2f(n.u_extent_max,r.xMax,r.yMax),t.uniform2f(n.u_uv_min,o[0],o[1]),t.uniform2f(n.u_uv_max,s[0],s[1]),t.drawArrays(t.TRIANGLE_STRIP,0,4)}Zo(t,n,i){let r=yn(n.id,i.z,i.x,i.y);this.h.has(r)||this.oi.load(n,i.z,i.x,i.y).then(o=>{if(!o)return;if(this.si?.id!==n.id){o.close();return}let s=t.createTexture();if(!s){o.close();return}t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,s),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,o),this.h.set(t,r,s),this.So()})}$o(t){if(this.r&&this.Y)return;let n=t.gl;this.r=Z(t,"map-tile",Si,Ii,["u_projection","u_extent_min","u_extent_max","u_uv_min","u_uv_max","u_tile","u_alpha"],["a_corner"]);let i=n.createBuffer();i&&(n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),n.STATIC_DRAW),this.Y=i)}}});var Mo={};Wm(Mo,{MapChart:()=>xn,MapDensityChart:()=>nl,MapLineChart:()=>tl,MapScatterChart:()=>el});var xn,el,tl,nl,wo=U(()=>{"use strict";ys();ps();bs();hs();vm();Hi();Nn();wt();xn=class extends Et{constructor(n){super(n);d(this,"zt","map");d(this,"it");this.it=new To,this.it.setOnTileLoad(()=>{this.i&&this.requestRender(this.i)})}projectPoint(n,i){return mr(n,i)}getZoomConfig(){return{lockAspect:!0}}setPluginConfig(n){super.setPluginConfig(n),this.i&&this.it.setSource(this.i.gl,et.sourceFor(n.map_tile_provider)),this.it.setAlpha(n.map_tile_alpha)}renderBackground(n,i,r,o,s,l){this.it.source||(this.it.setSource(n.gl,et.sourceFor(this.t.map_tile_provider)),this.it.setAlpha(this.t.map_tile_alpha)),this.it.render(n,i,r,o,s,l)}renderMapChrome(n,i,r,o){if(!n)return;let s=ae(n,o);if(!s)return;let l=this.it.source?.attribution??"";if(!l)return;let a=i.e;s.save(),s.font=`10px ${r.fontFamily}`,s.textAlign="right",s.textBaseline="bottom";let u=4,f=s.measureText(l).width,c=12,p=a.x+a.width-4,b=a.y+a.height-4;s.fillStyle="rgba(255, 255, 255, 0.75)",s.fillRect(p-f-u*2,b-c-u,f+u*2,c+u),s.fillStyle=r.Pe,s.fillText(l,p-u,b-u/2),s.restore()}destroyInternal(){this.i&&this.it.destroy(this.i.gl),super.destroyInternal()}},el=class extends xn{constructor(){super(new ln)}},tl=class extends xn{constructor(){super(new an)}},nl=class extends xn{constructor(){super(new un)}}});typeof window>"u"&&(globalThis.window={});var _n=class{constructor(t){d(this,"Ct");d(this,"o",new Map);d(this,"wn",0);d(this,"li",0);this.Ct=t}get totalCapacity(){return this.wn}get maxCapacity(){return this.li}set maxCapacity(t){this.li=t}ensureCapacity(t){this.wn=this.li>0?Math.min(t,this.li):t}peek(t){return this.o.get(t)}getOrCreate(t,n,i){let r=this.wn*n*i,o=this.o.get(t);if(o&&o.byteCapacity>=r)return o;let s=this.Ct;o&&s.deleteBuffer(o.buffer);let l=s.createBuffer();return s.bindBuffer(s.ARRAY_BUFFER,l),s.bufferData(s.ARRAY_BUFFER,r,s.DYNAMIC_DRAW),o={buffer:l,byteCapacity:r},this.o.set(t,o),o}upload(t,n,i,r=1){let o=this.Ct,s=this.getOrCreate(t,r,n.BYTES_PER_ELEMENT);if(!1){let l=i+n.byteLength;if(l>s.byteCapacity)throw new Error(`BufferPool.upload("${t}"): write ${i}..${l} exceeds capacity ${s.byteCapacity} (_totalCapacity=${this.wn}, components=${r}, bytes=${n.BYTES_PER_ELEMENT}). Did you pass the full scratch buffer instead of a subarray(0, n)?`)}return o.bindBuffer(o.ARRAY_BUFFER,s.buffer),o.bufferSubData(o.ARRAY_BUFFER,i,n),s.buffer}releaseAll(){for(let t of this.o.values())this.Ct.deleteBuffer(t.buffer);this.o.clear(),this.wn=0}};var vn=class{constructor(t){d(this,"Ct");d(this,"ai",new Map);this.Ct=t}precompile(t){for(let n of t)this.getOrCreate(n.name,n.vert,n.frag)}getOrCreate(t,n,i){let r=this.ai.get(t);if(r)return r;let o=this.Ct,s=o.createShader(o.VERTEX_SHADER);if(o.shaderSource(s,n),o.compileShader(s),!o.getShaderParameter(s,o.COMPILE_STATUS)){let a=o.getShaderInfoLog(s);throw o.deleteShader(s),new Error(`Vertex shader compile error [${t}]: ${a}`)}let l=o.createShader(o.FRAGMENT_SHADER);if(o.shaderSource(l,i),o.compileShader(l),!o.getShaderParameter(l,o.COMPILE_STATUS)){let a=o.getShaderInfoLog(l);throw o.deleteShader(s),o.deleteShader(l),new Error(`Fragment shader compile error [${t}]: ${a}`)}if(r=o.createProgram(),o.attachShader(r,s),o.attachShader(r,l),o.linkProgram(r),!o.getProgramParameter(r,o.LINK_STATUS)){let a=o.getProgramInfoLog(r);throw o.deleteProgram(r),o.deleteShader(s),o.deleteShader(l),new Error(`Shader link error [${t}]: ${a}`)}return o.deleteShader(s),o.deleteShader(l),this.ai.set(t,r),r}releaseAll(){for(let t of this.ai.values())this.Ct.deleteProgram(t);this.ai.clear()}};var ai="attribute vec2 a_corner;attribute float a_x_center;attribute float a_half_width;attribute float a_y0;attribute float a_y1;attribute vec3 a_color;attribute float a_series_id;attribute float a_axis;uniform mat4 u_proj_left;uniform mat4 u_proj_right;uniform float u_hover_series;uniform float u_horizontal;varying vec3 v_color;varying float v_hover;varying vec2 v_local;void main(){vec2 A;if(u_horizontal>0.5){A=vec2(mix(a_y0,a_y1,a_corner.x),a_x_center+(a_corner.y-0.5)*2.*a_half_width);}else{A=vec2(a_x_center+(a_corner.x-0.5)*2.*a_half_width,mix(a_y0,a_y1,a_corner.y));}mat4 B=a_axis<0.5?u_proj_left:u_proj_right;gl_Position=B*vec4(A,0.,1.);v_color=a_color;v_hover=abs(a_series_id-u_hover_series)<0.5?1.:0.;v_local=a_corner;}";var ui="precision highp float;varying vec3 v_color;varying float v_hover;varying vec2 v_local;void main(){vec3 A=v_color;if(v_hover>0.5){A=mix(A,vec3(1.),0.25);}gl_FragColor=vec4(A,1.);}";Eo();Po();Bo();Go();var pi="attribute vec2 a_position;uniform mat4 u_projection;void main(){gl_Position=u_projection*vec4(a_position,0.,1.);}";var bi="precision highp float;uniform vec3 u_color;uniform float u_opacity;void main(){gl_FragColor=vec4(u_color,u_opacity);}";var Ke="attribute vec2 a_start;attribute vec2 a_end;attribute float a_corner;attribute float a_real_start;attribute float a_real_end;uniform mat4 u_projection;uniform vec2 u_resolution;uniform float u_line_width;uniform float u_interp_alpha;varying float v_edge_dist;varying float v_seg_alpha;void main(){vec4 A=u_projection*vec4(a_start,0.,1.);vec4 B=u_projection*vec4(a_end,0.,1.);vec2 C=A.xy*u_resolution*0.5;vec2 D=B.xy*u_resolution*0.5;vec2 E=D-C;float F=length(E);E=F>0.001?E/F:vec2(1.,0.);vec2 G=vec2(-E.y,E.x);float H=step(1.5,a_corner);float I=1.-mod(a_corner,2.)*2.;vec4 J=mix(A,B,H);float K=(u_line_width+1.5)*0.5;vec2 L=(G*I*K)/(u_resolution*0.5);gl_Position=J+vec4(L,0.,0.);v_edge_dist=I;float M=a_real_start*a_real_end;v_seg_alpha=mix(u_interp_alpha,1.,step(0.5,M));}";var Je="precision highp float;uniform vec4 u_color;uniform float u_line_width;varying float v_edge_dist;varying float v_seg_alpha;void main(){float A=abs(v_edge_dist);float B=u_line_width/(u_line_width+1.5);float C=1.-smoothstep(B,1.,A);gl_FragColor=vec4(u_color.rgb,u_color.a*C*v_seg_alpha);}";var gi="attribute vec2 a_position;attribute vec3 a_color;uniform mat4 u_projection;uniform float u_point_size;varying vec3 v_color;varying float v_point_size;void main(){gl_Position=u_projection*vec4(a_position,0.,1.);gl_PointSize=u_point_size;v_point_size=u_point_size;v_color=a_color;}";var hi="precision highp float;varying vec3 v_color;varying float v_point_size;void main(){vec2 A=gl_PointCoord-vec2(0.5);float B=length(A);if(B>0.5)discard;float C=1.5/max(v_point_size,1.);float D=1.-smoothstep(0.5-C,0.5,B);gl_FragColor=vec4(v_color,D);}";var yi="attribute vec2 a_corner;attribute float a_x_center;attribute float a_half_width;attribute float a_y0;attribute float a_y1;attribute vec3 a_color;uniform mat4 u_projection;varying vec3 v_color;void main(){float A=a_x_center+(a_corner.x-0.5)*2.*a_half_width;float B=mix(a_y0,a_y1,a_corner.y);gl_Position=u_projection*vec4(A,B,0.,1.);v_color=a_color;}";var xi="precision highp float;varying vec3 v_color;void main(){gl_FragColor=vec4(v_color,1.);}";var Ci="attribute vec2 a_corner;attribute vec2 a_cell;attribute float a_color_t;uniform mat4 u_projection;uniform vec2 u_cell_inset;uniform vec2 u_cell_size;varying float v_color_t;void main(){vec2 A=0.5*u_cell_size;vec2 B=u_cell_size-2.*u_cell_inset;float C=a_cell.x-A.x+u_cell_inset.x+a_corner.x*B.x;float D=a_cell.y-A.y+u_cell_inset.y+a_corner.y*B.y;gl_Position=u_projection*vec4(C,D,0.,1.);v_color_t=a_color_t;}";var _i="precision highp float;uniform sampler2D u_gradient_lut;varying float v_color_t;void main(){float A=clamp(v_color_t,0.,1.);vec4 B=texture2D(u_gradient_lut,vec2(A,0.5));gl_FragColor=vec4(B.rgb,1.);}";var vi="attribute float a_strip_t;attribute float a_side;attribute vec2 a_angles;attribute vec2 a_radii;attribute vec4 a_color;uniform vec2 u_center;uniform vec2 u_resolution;uniform float u_border_px;varying vec4 v_color;varying vec2 v_edge;void main(){float A=u_border_px*0.5;float B=a_radii.x+A;float C=a_radii.y-A;if(C<=B){gl_Position=vec4(2.,2.,2.,1.);v_color=vec4(0.);v_edge=vec2(0.);return;}float D=mix(B,C,a_side);float E=A/max(D,1.);float F=a_angles.y-a_angles.x;E=min(E,F*0.5);float G=mix(a_angles.x+E,a_angles.y-E,a_strip_t);vec2 H=u_center+vec2(cos(G),sin(G))*D;vec2 I=(H/u_resolution)*2.-1.;gl_Position=vec4(I.x,-I.y,0.,1.);v_color=a_color;v_edge=vec2(a_strip_t,a_side);}";var Ai="precision highp float;varying vec4 v_color;void main(){gl_FragColor=v_color;}";var Li="attribute vec2 a_position;attribute vec4 a_color;uniform vec2 u_resolution;varying vec4 v_color;void main(){vec2 A=(a_position/u_resolution)*2.-1.;A.y=-A.y;gl_Position=vec4(A,0.,1.);v_color=a_color;}";var Ti="precision highp float;varying vec4 v_color;void main(){gl_FragColor=v_color;}";ko();Wo();No();Oo();Uo();Ho();Vo();var zo=[{name:"bar",vert:ai,frag:ui},{name:"line",vert:mi,frag:fi},{name:"scatter",vert:ci,frag:di},{name:"bar-area",vert:pi,frag:bi},{name:"bar-scatter",vert:gi,frag:hi},{name:"line-uniform",vert:Ke,frag:Je},{name:"candlestick-body",vert:yi,frag:xi},{name:"heatmap",vert:Ci,frag:_i},{name:"sunburst-arc",vert:vi,frag:Ai},{name:"treemap",vert:Li,frag:Ti},{name:"density-splat",vert:Ut,frag:Mi},{name:"density-extreme",vert:Ut,frag:wi},{name:"density-resolve",vert:Ri,frag:Fi},{name:"map-tile",vert:Si,frag:Ii}];var pf=1,ht=class{constructor(t,n={}){d(this,"id");d(this,"canvas");d(this,"gl");d(this,"isWebGL2");d(this,"shaders");d(this,"Nr");d(this,"Or",null);d(this,"en");d(this,"_t",!1);d(this,"ui",new Set);this.id=pf++,this.canvas=t,this.en=n.precompile??!1;let i=t.getContext("webgl2",{antialias:!0,alpha:!0,premultipliedAlpha:!1});if(i)this.gl=i,this.isWebGL2=!0;else{let r=t.getContext("webgl",{antialias:!0,alpha:!0,premultipliedAlpha:!1});if(!r)throw new Error("WebGL is not supported");this.gl=r,this.isWebGL2=!1}this.shaders=new vn(this.gl),this.en&&this.shaders.precompile(zo),this.Nr=this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),this.isWebGL2||(this.Or=this.gl.getExtension("ANGLE_instanced_arrays")),t.addEventListener("webglcontextlost",r=>{this._t||r.preventDefault()}),t.addEventListener("webglcontextrestored",()=>{this.shaders.releaseAll(),this.shaders=new vn(this.gl),this.en&&this.shaders.precompile(zo);for(let r of this.ui)r()})}resetVertexArrayState(){let t=this.gl;for(let n=0;n<this.Nr;n++)t.disableVertexAttribArray(n),this.isWebGL2?t.vertexAttribDivisor(n,0):this.Or?.vertexAttribDivisorANGLE(n,0)}onRestore(t){return this.ui.add(t),()=>this.ui.delete(t)}isContextLost(){return this._t||this.gl.isContextLost()}get destroyed(){return this._t}destroy(){this._t=!0,this.ui.clear(),this.shaders.releaseAll();let t=this.gl.getExtension("WEBGL_lose_context");t&&t.loseContext()}};var An=class{constructor(t,n={}){d(this,"G");d(this,"mi");d(this,"Ur");d(this,"o");d(this,"fi",0);d(this,"Ki",0);d(this,"Ji",0);d(this,"Qi",1);d(this,"_t",!1);d(this,"ci",null);d(this,"vt",null);d(this,"Rn",null);d(this,"tn",null);t instanceof ht?(this.G=t,this.mi=!1):(this.G=new ht(t,{precompile:n.precompile??!1}),this.mi=!0),this.o=new _n(this.G.gl),this.Ur=this.G.onRestore(()=>{this.o.releaseAll(),this.o=new _n(this.G.gl),this.fi=0})}get gl(){return this.G.gl}get backendId(){return this.G.id}isContextLost(){return this._t||this.G.isContextLost()}get isWebGL2(){return this.G.isWebGL2}get shaders(){return this.G.shaders}get L(){return this.o}get uploadedCount(){return this.fi}set uploadedCount(t){this.fi=t}resize(t,n,i){this.Ki=t,this.Ji=n,this.Qi=i;let r=Math.max(1,Math.round(t*i)),o=Math.max(1,Math.round(n*i)),s=this.G.canvas;(s.width!==r||s.height!==o)&&(s.width=r,s.height=o,this.G.gl.viewport(0,0,r,o))}requestResize(t,n,i){this.tn={cssWidth:t,cssHeight:n,dpr:i}}applyPendingResize(){if(!this.tn)return!1;let{cssWidth:t,cssHeight:n,dpr:i}=this.tn;return this.tn=null,this.resize(t,n,i),!0}beginFrame(){if(this.mi){this.applyPendingResize();return}let t=this.tn;this.tn=null,t?this.resize(t.cssWidth,t.cssHeight,t.dpr):this.resize(this.Ki,this.Ji,this.Qi);let n=this.G.gl,i=this.G.canvas;n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,i.width,i.height),n.disable(n.SCISSOR_TEST),n.disable(n.DEPTH_TEST),this.G.resetVertexArrayState()}get cssWidth(){return this.Ki}get cssHeight(){return this.Ji}get dpr(){return this.Qi}clear(){this.G.gl.clearColor(0,0,0,0),this.G.gl.clear(this.G.gl.COLOR_BUFFER_BIT|this.G.gl.DEPTH_BUFFER_BIT),this.fi=0}setFrameCallback(t){this.ci=t}async endFrame(){if(!this.ci||this.isContextLost())return;let t=this.G.canvas;if(typeof t.transferToImageBitmap!="function")return;let n=await createImageBitmap(t);this.ci(n)}async awaitGpuFence(){if(!this.G.isWebGL2){this.G.gl.finish();return}let t=this.G.gl,n=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0);if(!n){t.finish();return}try{for(;;){let i=t.clientWaitSync(n,t.SYNC_FLUSH_COMMANDS_BIT,0);if(i===t.ALREADY_SIGNALED||i===t.CONDITION_SATISFIED)return;if(i===t.WAIT_FAILED){t.finish();return}if(await this.Bo(),this._t)return}}finally{t.deleteSync(n)}}ensureBufferCapacity(t){this.o.ensureCapacity(t)}Bo(){return this.vt||(this.vt=new MessageChannel,this.vt.port1.start()),new Promise(t=>{let n=this.vt;this.Rn=t,n.port1.addEventListener("message",()=>{this.Rn=null,t()},{once:!0}),n.port2.postMessage(null)})}destroy(){if(this._t=!0,this.ci=null,this.Ur(),this.o.releaseAll(),this.Rn){let t=this.Rn;this.Rn=null,t()}this.vt&&(this.vt.port1.close(),this.vt.port2.close(),this.vt=null),this.mi&&this.G.destroy()}};var Di=class{constructor(t,n={}){d(this,"Hr");d(this,"en");d(this,"nn",[]);d(this,"Vr",0);this.Hr=Math.max(1,t),this.en=n.precompile??!1}acquire(){let t;if(this.nn.length<this.Hr)t=this.zr(),this.nn.push(t);else{let n=this.Vr%this.nn.length;this.Vr++,this.nn[n].isContextLost()&&(this.nn[n]=this.zr()),t=this.nn[n]}return t}zr(){let t=new OffscreenCanvas(1,1);return new ht(t,{precompile:this.en})}};Ei();Ei();function fl(e,t,n,i){let{controller:r,layout:o}=e,s=o.e,l=r.getVisibleDomain(),a=l.xMin+(t-s.x)/s.width*(l.xMax-l.xMin),u=l.yMax-(n-s.y)/s.height*(l.yMax-l.yMin),m=Math.pow(1.1,-i/100),f=r.lockedAxis;f!=="x"&&(r.scaleX=Math.max(1,Math.min(1e5,r.scaleX*m))),f!=="y"&&(r.scaleY=Math.max(1,Math.min(1e5,r.scaleY*m)));let c=r.getVisibleDomain(),p=c.xMin+(t-s.x)/s.width*(c.xMax-c.xMin),b=c.yMax-(n-s.y)/s.height*(c.yMax-c.yMin),g=r.baseXRange,h=r.baseYRange;f!=="x"&&g>0&&(r.normTranslateX+=(a-p)/g),f!=="y"&&h>0&&(r.normTranslateY+=(u-b)/h)}function cl(e,t,n){let{controller:i,layout:r}=e,o=i.getVisibleDomain(),s=r.e,l=(o.xMax-o.xMin)/s.width,a=(o.yMax-o.yMin)/s.height,u=i.lockedAxis,m=i.baseXRange,f=i.baseYRange;u!=="x"&&m>0&&(i.normTranslateX-=t*l/m),u!=="y"&&f>0&&(i.normTranslateY+=n*a/f)}ge();var Gi=class{constructor(t){d(this,"an");this.an=t}pin(t,n,i,r=Qe,o){this.an({kind:"pinTooltip",grid:t,style:r,pos:n,bounds:i,hit:o})}dismiss(){this.an({kind:"dismissTooltip"})}setCursor(t){this.an({kind:"setCursor",cursor:t})}emitUserClick(t){this.an({kind:"userClick",detail:t})}emitUserSelect(t){this.an({kind:"userSelect",selected:t.selected,row:t.row,column_names:t.column_names,insertConfig:t.insertConfig})}};ys();Rn();var wr=class{constructor(t=1024){d(this,"size");d(this,"value");d(this,"colorValue");d(this,"sizeSign");d(this,"x0");d(this,"y0");d(this,"x1");d(this,"y1");d(this,"a0");d(this,"a1");d(this,"r0");d(this,"r1");d(this,"depth");d(this,"parent");d(this,"firstChild");d(this,"nextSibling");d(this,"lastChild");d(this,"childCount");d(this,"leafRowIdx");d(this,"name");d(this,"colorLabel");d(this,"count",0);d(this,"capacity",0);this.bo(t)}reset(){this.count>0&&(this.x0.fill(0,0,this.count),this.y0.fill(0,0,this.count),this.x1.fill(0,0,this.count),this.y1.fill(0,0,this.count),this.a0.fill(0,0,this.count),this.a1.fill(0,0,this.count),this.r0.fill(0,0,this.count),this.r1.fill(0,0,this.count)),this.count=0}allocate(){this.count===this.capacity&&this.bo(this.capacity*2);let t=this.count++;return this.firstChild[t]=-1,this.nextSibling[t]=-1,this.lastChild[t]=-1,this.childCount[t]=0,this.leafRowIdx[t]=-1,this.size[t]=0,this.value[t]=0,this.colorValue[t]=NaN,this.sizeSign[t]=1,this.name[t]="",this.colorLabel[t]="",t}appendChild(t,n){this.parent[n]=t,this.depth[n]=this.depth[t]+1,this.nextSibling[n]=-1;let i=this.lastChild[t];i===-1?this.firstChild[t]=n:this.nextSibling[i]=n,this.lastChild[t]=n,this.childCount[t]++}isLeaf(t){return this.firstChild[t]===-1}bo(t){let n=Math.max(t,1024),i=(r,o)=>{let s=new o(n);return r&&r.length>0&&s.set(r),s};this.size=i(this.size,Float32Array),this.value=i(this.value,Float32Array),this.colorValue=i(this.colorValue,Float32Array),this.sizeSign=i(this.sizeSign,Int8Array),this.x0=i(this.x0,Float32Array),this.y0=i(this.y0,Float32Array),this.x1=i(this.x1,Float32Array),this.y1=i(this.y1,Float32Array),this.a0=i(this.a0,Float32Array),this.a1=i(this.a1,Float32Array),this.r0=i(this.r0,Float32Array),this.r1=i(this.r1,Float32Array),this.depth=i(this.depth,Int32Array),this.parent=i(this.parent,Int32Array),this.firstChild=i(this.firstChild,Int32Array),this.nextSibling=i(this.nextSibling,Int32Array),this.lastChild=i(this.lastChild,Int32Array),this.childCount=i(this.childCount,Int32Array),this.leafRowIdx=i(this.leafRowIdx,Int32Array),this.name?this.name.length=n:this.name=new Array(n),this.colorLabel?this.colorLabel.length=n:this.colorLabel=new Array(n),this.capacity=n}};function Ja(e,t){let n=[],i=t;for(;e.parent[i]!==-1;)n.push(e.name[i]),i=e.parent[i];return n.reverse()}ds();function Rr(e){for(let t of e.keys())if(!t.startsWith("__"))return t;return""}var mn=class extends Pe{constructor(){super(...arguments);d(this,"ue","");d(this,"s","");d(this,"ce","empty");d(this,"m",new wr);d(this,"$",-1);d(this,"_",-1);d(this,"he",[]);d(this,"Yt",new Map);d(this,"Pi",0);d(this,"b",1/0);d(this,"c",-1/0);d(this,"u",new Map);d(this,"ee",null);d(this,"de",0);d(this,"V",new on)}colorScaleColumn(){return this.T[1]||null}};Fn();Ft();we();function Pt(e,t,n,i,r,o){if(!e||t<=0)return null;let s=new Float64Array(t),l=1/0,a=-1/0;for(let m=0;m<t;m++){let f=e[m+n];s[m]=f,f<l&&(l=f),f>a&&(a=f)}let u=1/0;for(let m=1;m<t;m++){let f=Math.abs(s[m]-s[m-1]);f>0&&f<u&&(u=f)}return(!isFinite(u)||u===0)&&(u=Math.max(1,a-l)),{categoryPositions:s,numericCategoryDomain:{min:l-u/2,max:a+u/2,isDate:r,label:i,bandWidth:u,dateModifiers:r?o:void 0}}}function Qa(e,t,n){if(!(n>0)||e.length<2||t===0)return null;let i=new Float64Array(t);for(let o=0;o<e.length-1;o++)for(let s of e[o].runs)s.startIdx>0&&s.startIdx<t&&(i[s.startIdx]+=n);let r=0;for(let o=0;o<t;o++)r+=i[o],i[o]=o+r;return i}function fn(e,t){if(e.length!==1)return{mode:"category"};let n=t[e[0]];return n==="date"||n==="datetime"||n==="integer"||n==="float"?{mode:"numeric",numericType:n}:{mode:"category"}}function xs(e,t,n,i){return!t||e==null||Number.isNaN(e)?"":n==="boolean"?e?"true":"false":n==="date"?rr(e):n==="datetime"?rr(e,void 0,i):n==="integer"?String(e|0):n==="float"?Mt(e):String(e)}function Cs(e,t,n,i){let r=e.values,o=e.valid,s=new Int32Array(t),l=[""],a=new Map;a.set("",0);let u=new Map;for(let m=0;m<t;m++){if(!(o?!!(o[m>>3]>>(m&7)&1):!0)){s[m]=0;continue}let c=r[m],p=u.get(c);if(p===void 0){let b=xs(c,!0,n,i);p=a.get(b),p===void 0&&(p=l.length,l.push(b),a.set(b,p)),u.set(c,p)}s[m]=p}return{indices:s,dictionary:l}}function cn(e,t,n,i=[],r,o=[]){if(r?.mode==="numeric"){let f=e.get("__ROW_PATH_0__");if(f&&f.type!=="string"&&f.values){let c=0,p=f.values,b=f.valid;for(;c<t;){let g=b?!!(b[c>>3]>>(c&7)&1):!0,h=p[c];if(g&&h!=null&&!Number.isNaN(h))break;c++}return{rowPaths:[],numCategories:Math.max(0,t-c),rowOffset:c}}}let s=[];for(let f=0;;f++){let c=e.get(`__ROW_PATH_${f}__`);if(!c)break;if(c.type==="string"&&c.indices&&c.dictionary)s.push({indices:c.indices,dictionary:c.dictionary});else if(c.values){let p=i[f]??"string";s.push(Cs(c,t,p,o[f]))}else break}let l=0;if(n>0&&s.length>0)for(;l<t;){let f=!1;for(let c of s){let p=c.dictionary[c.indices[l]];if(p!=null&&p!==""){f=!0;break}}if(f)break;l++}let a=Math.max(0,t-l),u=s.length;return{rowPaths:n>0&&u>0?s.map((f,c)=>{let p=new Array(a),b=0;for(let h=0;h<a;h++){let y=f.dictionary[f.indices[h+l]]??"";p[h]=y,y.length>b&&(b=y.length)}let g=c===u-1?[]:cr(f.indices,f.dictionary,l,l+a).map(h=>({startIdx:h.startIdx-l,endIdx:h.endIdx-l,label:h.label}));return{labels:p,runs:g,maxLabelChars:b}}):[],numCategories:a,rowOffset:l}}function _s(e,t,n,i){if(e.length===0)return null;for(let c of e)if(c.type!=="string")return null;let r=Math.max(0,t-n),o=[],s=new Map,l=e.map(()=>new Int32Array(r)),a=c=>{let p=s.get(c);return p===void 0&&(p=o.length,o.push(c),s.set(c,p)),p};for(let c=0;c<e.length;c++){let p=e[c].data,b=l[c];for(let g=0;g<r;g++){let h=g+n,y;if(!p)y="(null)";else{let C=p.valid;if(!(C?!!(C[h>>3]>>(h&7)&1):!0))y="(null)";else if(p.indices&&p.dictionary)y=p.dictionary[p.indices[h]]??"(null)";else if(p.values){let x=p.values[h];y=x==null?"(null)":String(x)}else y="(null)"}b[g]=a(y)}}let u=0;for(let c of o)c.length>u&&(u=c.length);return{domain:{levels:[{labels:o.slice(),runs:[],maxLabelChars:u}],numRows:o.length,levelLabels:[i]},perColumnSlots:l}}function Yn(e){e.m.reset(),e.Yt.clear();let t=e.m.allocate();e.m.name[t]="Total",e.m.depth[t]=0,e.m.parent[t]=-1,e.Yt.set(t,new Map),e.$=t,e._=t,e.he=[t],e.Pi=0,e.b=1/0,e.c=-1/0,e.u.clear(),e.ee=null,e.de=0}function Bc(e,t,n){let i=e.Yt.get(t);i||(i=new Map,e.Yt.set(t,i));let r=i.get(n);if(r!==void 0)return r;let o=e.m.allocate();return e.m.name[o]=n,e.m.appendChild(t,o),i.set(n,o),o}function Fr(e,t,n,i,r,o,s){let l=e.$,a=t.length;for(let u=0;u<a;u++){let m=Bc(e,l,t[u]);u===a-1&&((s===0||a===s)&&(e.m.size[m]=Math.abs(n),e.m.sizeSign[m]=n<0?-1:1,e.m.leafRowIdx[m]=o),isNaN(i)||(e.m.colorValue[m]=i,i<e.b&&(e.b=i),i>e.c&&(e.c=i)),r&&(e.m.colorLabel[m]=r,e.u.has(r)||e.u.set(r,e.u.size))),l=m}}function tu(e,t){let n=e.valid;return!n||!!(n[t>>3]>>(t&7)&1)}function Sr(e,t){return e?.values?tu(e,t)?e.values[t]:0:1}function Ir(e,t,n){let i=NaN,r="";return!t||!tu(t,n)?{colorValue:i,colorLabel:r}:(e.ce==="numeric"&&t.values?i=t.values[n]:e.ce==="series"&&t.indices&&t.dictionary&&(r=t.dictionary[t.indices[n]]),{colorValue:i,colorLabel:r})}function eu(e,t){if(e.ce!=="series"||!t?.dictionary)return;let n=t.dictionary;for(let i=0;i<n.length;i++){let r=n[i];e.u.has(r)||e.u.set(r,e.u.size)}}function Gc(e,t){if(e.P.length===0)return null;let n=e.ue?[e.ue]:[],i=e.s?[e.s]:[],r=it(t,n,i);return r.length===0?null:r.map(o=>({prefix:o.prefix,sizeCol:e.ue?t.get(`${o.prefix}|${e.ue}`)??null:null,colorCol:e.s?t.get(`${o.prefix}|${e.s}`)??null:null}))}function Xn(e,t){let n=[];for(let g=0;;g++){let h=t.get(`__ROW_PATH_${g}__`);if(!h)break;if(h.type==="string"&&h.indices&&h.dictionary)n.push({indices:h.indices,dictionary:h.dictionary,valid:h.valid});else if(h.values){let y=e.p[g],C=e.st[y]??"string";n.push(Cs(h,h.values.length,C,e.getDateModifiers(y)))}else break}let i=n.length>0,r=e.p.length,o=Gc(e,t),s=o!==null,l=e.ue?t.get(e.ue):null,a=e.s?t.get(e.s):null,u=s?o[0].sizeCol:l,m=i?n[0].indices.length:u?.values?.length??0;if(m===0)return;if(s)for(let g of o)eu(e,g.colorCol);else eu(e,a);let f=e.Pi,c=s&&i?r+1:r;if(!i){let g;for(let[y,C]of t){if(y.startsWith("__")||s&&y.includes("|"))continue;let _=y.lastIndexOf("|"),x=_===-1?y:y.substring(_+1);if(!(x===e.ue||x===e.s)&&C.type==="string"&&C.indices&&C.dictionary){g=C;break}}let h=s?o:null;for(let y=0;y<m;y++){let C=g?.indices&&g?.dictionary?g.dictionary[g.indices[y]]:`Row ${f+y}`;if(h)for(let _ of h){let x=Sr(_.sizeCol,y),{colorValue:v,colorLabel:A}=Ir(e,_.colorCol,y);Fr(e,[_.prefix,C],x,v,A,f+y,c)}else{let _=Sr(l,y),{colorValue:x,colorLabel:v}=Ir(e,a,y);Fr(e,[C],_,x,v,f+y,c)}}e.Pi=f+m;return}let p=s?1:0,b=new Array(n.length+p);for(let g=0;g<m;g++){let h=0;for(let y=0;y<n.length;y++){let C=n[y];if(C.valid&&!(C.valid[g>>3]>>(g&7)&1))break;let _=C.dictionary[C.indices[g]];if(!_&&_!=="0")break;b[p+h++]=_}if(h!==0)if(s)for(let y of o){b[0]=y.prefix;let C=b.slice(0,h+1),_=Sr(y.sizeCol,g),{colorValue:x,colorLabel:v}=Ir(e,y.colorCol,g);Fr(e,C,_,x,v,f+g,c)}else{let y=b.slice(0,h),C=Sr(l,g),{colorValue:_,colorLabel:x}=Ir(e,a,g);Fr(e,y,C,_,x,f+g,c)}}e.Pi=f+m}function $n(e){let t=e.m,n=t.value,i=t.size,r=t.firstChild,o=t.nextSibling,s=new Int32Array(128);s[0]=e.$,s[1]=0;let l=1;for(let a=0;a<t.count;a++)n[a]=0;for(;l>0;){l--;let a=s[l*2];if(s[l*2+1]===0){s[l*2+1]=1,l++;for(let m=r[a];m!==-1;m=o[m]){if((l+1)*2>s.length){let f=new Int32Array(s.length*2);f.set(s),s=f}s[l*2]=m,s[l*2+1]=0,l++}}else if(r[a]===-1){let m=i[a];n[a]=m>0?m:0}else{let m=0;for(let f=r[a];f!==-1;f=o[f])m+=n[f];n[a]=m}}if(e.he.length>1){let a=[];for(let f=1;f<e.he.length;f++)a.push(t.name[e.he[f]]);let u=e.$,m=!0;for(let f of a){let p=e.Yt.get(u)?.get(f);if(p===void 0){m=!1;break}u=p}if(m&&t.firstChild[u]!==-1){e._=u,Dr(e,u);return}}e._=e.$,e.he=[e.$]}function Dr(e,t){let n=[],i=t;for(;i!==-1;)n.unshift(i),i=e.m.parent[i];e.he=n}var kc=1,vs=14,nu=1,iu=4;function Er(e,t,n,i,r,o,s,l,a){if(e.x0[t]=Math.round(n),e.y0[t]=Math.round(i),e.x1[t]=Math.round(r),e.y1[t]=Math.round(o),e.firstChild[t]===-1||(r-n)*(o-i)<iu)return;let m=e.depth[t]-s,f=a&&m===1&&e.firstChild[t]!==-1,c=f?vs:nu,p=f?kc:nu,b=e.x0[t]+p,g=e.y0[t]+c,h=e.x1[t]-p,y=e.y1[t]-p;if(h<=b||y<=g)return;let C=0;for(let _=e.firstChild[t];_!==-1;_=e.nextSibling[_])e.value[_]>0&&(l[C++]=_);C!==0&&jn(e,l,0,C,b,g,h,y,s,l.subarray(C),a)}function jn(e,t,n,i,r,o,s,l,a,u,m){let f=i-n;if(f===0)return;if(f===1){Er(e,t[n],r,o,s,l,a,u,m);return}let c=0;for(let v=n;v<i;v++)c+=e.value[t[v]];let p=c/2,b=0,g=n+1,h=1/0;for(let v=n;v<i-1;v++){b+=e.value[t[v]];let A=Math.abs(b-p);A<h&&(h=A,g=v+1)}let y=0;for(let v=n;v<g;v++)y+=e.value[t[v]];let C=y/c,_=s-r,x=l-o;if(_>=x){let v=Math.round(r+_*C);jn(e,t,n,g,r,o,v,l,a,u,m),jn(e,t,g,i,v,o,s,l,a,u,m)}else{let v=Math.round(o+x*C);jn(e,t,n,g,r,o,s,v,a,u,m),jn(e,t,g,i,r,v,s,l,a,u,m)}}function ru(e,t,n,i){e.de=As(e,t,n,i,0)}function As(e,t,n,i,r){let o=e.m,s=o.x0,l=o.y0,a=o.x1,u=o.y1,m=o.depth,f=o.firstChild,c=o.nextSibling,p=o.value;(!e.ee||e.ee.length<o.count)&&(e.ee=new Int32Array(o.count));let b=e.ee,g=r,h=new Int32Array(128);h[0]=t;let y=1;for(;y>0;){y--;let C=h[y];if(p[C]<=0||(m[C]>=i&&(b[g++]=C),m[C]-i>=n))continue;let _=a[C]-s[C],x=u[C]-l[C];if(!(_*x<iu))for(let v=f[C];v!==-1;v=c[v]){if(y>=h.length){let A=new Int32Array(h.length*2);A.set(h),h=A}h[y++]=v}}return g}Dn();Xt();He();he();function Pr(e,t,n){return .299*e+.587*t+.114*n}function Wc(e,t){let n=Ee(e,t);return[n[0],n[1],n[2]]}function Zn(e,t,n,i){let r=e.m,o=r.colorValue[t];if(e.ce==="numeric"&&!isNaN(o)&&e.c>e.b)return Wc(n,vt(o,e.b,e.c));let s=e.u.get(r.colorLabel[t])??0;return i[s%i.length]??[0,0,0]}function Br(e,t,n,i,r){let o=Zn(e,t,n,i),s=e.m.sizeSign[t]<0?r:1;return[o[0],o[1],o[2],s]}pe();function Gr(e,t,n,i,r,o,s){let l=Math.round(i*n),a=Math.round(r*n);(t.width!==l||t.height!==a)&&(t.width=l,t.height=a,e.Mt=!0);let u=t.getContext("2d");if(u){if(e.Mt){e.ye?.close(),e.ye=null,e.Mt=!1;let m=++e.zn;o(u),createImageBitmap(t).then(f=>{e.zn===m?(e.ye?.close(),e.ye=f):f.close()})}else e.ye&&(u.clearRect(0,0,t.width,t.height),u.drawImage(e.ye,0,0));s&&(u.save(),u.scale(n,n),s(u),u.restore())}}fr();rt();Hn();He();ge();function ou(e,t,n,i,r,o,s,l,a=Qe){if(n.length===0)return;e.font=`11px ${l}`;let u=Pi(e,n,a.maxColumnPx),{boxW:m,boxH:f}=u,c=i+12,p=r-f-8;c+m>o&&(c=i-m-12),c<0&&(c=4),p<0&&(p=r+12),p+f>s&&(p=s-f-4),Bi(e,u,c,p,t,a.opacity)}ge();var su=24,Nc=8,lu=12,au=2,uu=" \\u203A ";function kr(e,t,n,i,r){e.ke=[];let o=e.A().pi;t.fillStyle=o,t.fillRect(0,0,n,su),t.font=`11px ${i}`,t.textAlign="left",t.textBaseline="middle";let s=Nc,l=e.m;for(let a=0;a<e.he.length;a++){let u=e.he[a],m=a===e.he.length-1,f=l.name[u];t.fillStyle=r;let c=t.measureText(f).width;t.fillText(f,s,lu),e.ke.push({nodeId:u,x0:s-au,y0:0,x1:s+c+au,y1:su}),s+=c,m||(t.fillText(uu,s,lu),s+=t.measureText(uu).width)}}function Wr(e,t,n,i,r,o,s,l){let a=e.V.hoveredTarget===n?e.V.grid??[]:[];a.length!==0&&ou(t,e.A(),a,i,r,o,s,l,ie(e.t))}function Nr(e,t,n,i,r,o,s,l=null){let a=e.t,u=e.ce==="series"&&e.u.size>1,m=e.ce==="numeric"&&e.b<e.c,f=le(a,u?e.u.size:0);if(f==="none"||!u&&!m){e.I.clearPainted();return}let c=f==="floating",p={mode:c?"floating":"sidebar",legend:e.I,title:e.s||"Legend",opacity:a.legend_opacity},b=c?e.I.floatingBox(a,o,s,u?st(t,r,e.u.size,()=>e.u.keys(),{title:p.title}):It(t,r,{min:e.b,max:e.c},void 0,p.title)):null;if(u)b?Dt(t,b,e.u,n,r,p):l?Dt(t,l,e.u,n,r,{...p,sidebarGutter:l.width}):hr(t,mu(o,s,a),e.u,n,r,p);else{let g={min:e.b,max:e.c,label:e.s},h=e.getColumnFormatter(e.s,"value");b?Xe(t,b,g,i,r,h,p):rn(t,mu(o,s,a),g,i,r,h,p)}}function mu(e,t,n){return new re(e,t,{hasXLabel:!1,hasYLabel:!1,hasLegend:!0,rightExtra:Me(n,80)})}function fu(e,t){if(e._===-1)return;let n=t.gl,i=t.cssWidth,r=t.cssHeight;if(i<=0||r<=0)return;let o=e.m,s=e.P.length>0&&e.W.facet_mode==="grid",l=e.he.length>1?28:0,a=e.ce==="series"?e.u.size>1:e.ce==="numeric"&&e.b<e.c,u=ji(e.t,a,90,e.ce==="series"?e.u.size:0),m=new Int32Array(Math.max(o.count,64));if(s)Oc(e,m,i,r,l,u);else{e.g=null;let b=o.depth[e._];Er(o,e._,0,l,i-u,r,b,m,e.Bi),ru(e,e._,100,b),Ts(e);let g=e.$e,h=e.qe;for(let y=0;y<e.de;y++)g[y]=b,h[y]=e._}if(!e.r){let b=Z(t,"treemap",Li,Ti,["u_resolution"],["a_position","a_color"]);e.r=b.program,e.B=b}let f=e.A(),c=f.O,p=ye(f.Ve,c,Math.max(1,e.u.size));if(e.ne){let b=e.ne.getContext("2d");b&&b.clearRect(0,0,e.ne.width,e.ne.height)}e.Mt=!0,Uc(e,n,c,p,f.xi),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.useProgram(e.r),n.uniform2f(e.B.u_resolution,i,r),n.bindBuffer(n.ARRAY_BUFFER,e.Xt),n.enableVertexAttribArray(e.B.a_position),n.vertexAttribPointer(e.B.a_position,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,e.$t),n.enableVertexAttribArray(e.B.a_color),n.vertexAttribPointer(e.B.a_color,4,n.FLOAT,!1,0,0),n.drawArrays(n.TRIANGLES,0,e.Cr),e.Me(()=>dn(e))}function Oc(e,t,n,i,r,o){let s=e.m,l=[],a=[];for(let b=s.firstChild[e.$];b!==-1;b=s.nextSibling[b])s.value[b]<=0||(l.push(b),a.push(s.name[b]));let u=Math.max(1,i-r),m=Math.max(1,n-o),f=Be(a,{cssWidth:m,cssHeight:u,hasLegend:!1,xAxis:"none",yAxis:"none",gap:e.W.facet_padding});e.g=f,Ts(e);let c=e.$e,p=0;for(let b=0;b<l.length;b++){let g=l[b],h=f.cells[b];if(!h)continue;let y=s.name[g],C=e.gt.get(y)??g,_=s.depth[C],x=h.layout.e;Er(s,C,x.x,x.y+r,x.x+x.width,x.y+r+x.height,_,t,e.Bi);let v=As(e,C,100,_,p);c.length<v&&Ts(e);let A=e.$e,T=e.qe;for(let L=p;L<v;L++)A[L]=_,T[L]=C;p=v}e.de=p}function Ts(e){let t=e.ee?.length??e.m.count;(!e.$e||e.$e.length<t)&&(e.$e=new Int32Array(t)),(!e.qe||e.qe.length<t)&&(e.qe=new Int32Array(t))}function Uc(e,t,n,i,r){let o=e.m,s=e.ee,l=e.de,a=e.$e,u=e.qe,m=h=>a?a[h]:o.depth[e._],f=h=>u?u[h]:e._,c=0;for(let h=0;h<l;h++){let y=s[h];if(y===f(h))continue;let C=o.x1[y]-o.x0[y],_=o.y1[y]-o.y0[y];C<1||_<1||(o.firstChild[y]===-1?c++:o.depth[y]-m(h)===1&&(c+=2))}let p=new Float32Array(c*6*2),b=new Float32Array(c*6*4),g=0;for(let h=0;h<l;h++){let y=s[h];if(y===f(h))continue;let C=o.x0[y],_=o.y0[y],x=o.x1[y],v=o.y1[y],A=x-C,T=v-_;if(!(A<1||T<1)){if(o.firstChild[y]===-1){let L=Br(e,y,n,i,r);g=Ls(p,b,g,C,_,x-1,v-1,L)}else if(o.depth[y]-m(h)===1){let D=[.25,.25,.25,1];g=Ls(p,b,g,C,v-1,x,v,D),g=Ls(p,b,g,x-1,_,x,v,D)}}}e.Cr=g,e.Xt||(e.Xt=t.createBuffer()),t.bindBuffer(t.ARRAY_BUFFER,e.Xt),t.bufferData(t.ARRAY_BUFFER,p.subarray(0,g*2),t.DYNAMIC_DRAW),e.$t||(e.$t=t.createBuffer()),t.bindBuffer(t.ARRAY_BUFFER,e.$t),t.bufferData(t.ARRAY_BUFFER,b.subarray(0,g*4),t.DYNAMIC_DRAW)}function Ls(e,t,n,i,r,o,s,l){let a=n*2,u=n*4;e[a+0]=i,e[a+1]=r,e[a+2]=o,e[a+3]=r,e[a+4]=i,e[a+5]=s,e[a+6]=o,e[a+7]=r,e[a+8]=o,e[a+9]=s,e[a+10]=i,e[a+11]=s;for(let m=0;m<6;m++)t[u+m*4+0]=l[0],t[u+m*4+1]=l[1],t[u+m*4+2]=l[2],t[u+m*4+3]=l[3];return n+6}function dn(e){Hc(e),e.presentOverlay()}function Hc(e){if(!e.l||e._===-1)return;let t=e.i;if(!t)return;let{dpr:n,cssWidth:i,cssHeight:r}=t,o=e.pe!==-1?e.pe:e.k;Gr(e,e.l,n,i,r,s=>Vc(e,s,n,i,r),o!==-1?s=>{let l=e.A(),{fontFamily:a}=l,u=e.m;zc(s,u,o);let m=e.ee,f=e.de,c=e.$e,p=e.qe;for(let b=0;b<f;b++){let g=m[b],h=p?p[b]:e._;if(g===h||u.firstChild[g]===-1)continue;let y=u.x1[g]-u.x0[g],C=u.y1[g]-u.y0[g],_=c?c[b]:u.depth[e._],x=u.depth[g]-_;x===1?Or(s,u,g,y,C,l,!e.Bi):x===2&&Or(s,u,g,y,C,l,!0)}if(u.firstChild[o]===-1){let b=l.O,g=ye(l.Ve,b,Math.max(1,e.u.size)),h=u.x1[o]-u.x0[o],y=u.y1[o]-u.y0[o];cu(e,s,o,h,y,a,b,g,!0)}e.pe===-1&&e.k!==-1&&Yc(e,s,e.k,i,r,a)}:null)}function Vc(e,t,n,i,r){let o=e.l;t.clearRect(0,0,o.width,o.height),t.save(),t.scale(n,n);let s=e.A(),{fontFamily:l,Pe:a}=s,u=s.O,m=ye(s.Ve,u,Math.max(1,e.u.size)),f=e.m,c=e.ee,p=e.de,b=e.$e,g=e.qe;for(let h=0;h<p;h++){let y=c[h],C=g?g[h]:e._;if(y===C||f.firstChild[y]!==-1)continue;let _=f.x1[y]-f.x0[y],x=f.y1[y]-f.y0[y];cu(e,t,y,_,x,l,u,m)}for(let h=0;h<p;h++){let y=c[h],C=g?g[h]:e._;if(y===C||f.firstChild[y]===-1)continue;let _=f.x1[y]-f.x0[y],x=f.y1[y]-f.y0[y],v=b?b[h]:f.depth[e._],A=f.depth[y]-v;A===1?Or(t,f,y,_,x,s,!e.Bi):A===2&&Or(t,f,y,_,x,s,!0)}if(e.he.length>1&&kr(e,t,i,l,a),Nr(e,o,m,u,s,i,r),e.g){t.font=`11px ${l}`,t.fillStyle=a,t.textAlign="center",t.textBaseline="top";for(let h of e.g.cells){let y=h.layout.e;t.fillText(h.label,y.x+y.width/2,y.y-14)}}t.restore()}function cu(e,t,n,i,r,o,s,l,a=!1){if(i<30||r<14)return;let c=e.m,p=Zn(e,n,s,l),b=Pr(p[0],p[1],p[2]),g=a?b>.5?"rgba(0,0,0,0.85)":"rgba(255,255,255,0.9)":b>.5?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.55)",h=Math.min(11,Math.floor(r/2));if(h<7)return;t.font=`${h}px ${o}`;let y=i-8,C=h*1.3,_=Math.max(1,Math.floor((r-8)/C)),x=Ca(t,c.name[n],y,_);if(x.length===0)return;let v=x.length*C,A=c.y0[n]+(r-v)/2+C/2;t.fillStyle=g,t.textAlign="center",t.textBaseline="middle";let T=c.x0[n]+i/2;for(let L=0;L<x.length;L++)t.fillText(x[L],T,A+L*C)}function Or(e,t,n,i,r,{fontFamily:o,Pe:s,backgroundColor:l},a){let u=t.x0[n],m=t.y0[n],f=t.name[n];if(a){if(i<60||r<30)return;let c=12;e.font=`${c}px ${o}`;let p=f,b=i-16;if(e.measureText(p).width>b){for(;p.length>1;)if(p=p.slice(0,-1),e.measureText(p+"\\u2026").width<=b){p+="\\u2026";break}}if(p.length<=3)return;e.save(),e.beginPath(),e.rect(u,m,i,r),e.clip();let h=u+i/2,y=m+r/2;e.textAlign="center",e.textBaseline="middle",e.lineWidth=2,e.strokeStyle=s,e.lineJoin="round",e.strokeText(p,h,y),e.fillStyle=l,e.fillText(p,h,y),e.restore()}else{if(i<40||r<22)return;let c=11;e.font=`${c}px ${o}`;let p=f,b=i-10;if(e.measureText(p).width>b){for(;p.length>1;)if(p=p.slice(0,-1),e.measureText(p+"\\u2026").width<=b){p+="\\u2026";break}}e.fillStyle=s,e.globalAlpha=.85,e.textAlign="left",e.textBaseline="top",e.fillText(p,u+5,m+4),e.globalAlpha=1}}function zc(e,t,n){e.strokeStyle="rgba(255,255,255,0.9)",e.lineWidth=2,e.strokeRect(t.x0[n],t.y0[n],t.x1[n]-t.x0[n],t.y1[n]-t.y0[n])}function Yc(e,t,n,i,r,o){let s=e.m,l=(s.x0[n]+s.x1[n])/2,a=(s.y0[n]+s.y1[n])/2;Wr(e,t,n,l,a,i,r,o)}ge();async function je(e,t,n){await e.emitClickAndSelect(Bt(e,t,n))}function Bt(e,t,n){let i=e.m,r=Ja(i,t),o=e.P.length>0&&e.W.facet_mode==="grid",s=o?r.slice(0,e.P.length):[],l=o?r.slice(e.P.length,e.P.length+e.p.length):r.slice(0,e.p.length),a=n==="leaf"?i.leafRowIdx[t]??null:null;return{rowIdx:a!=null&&a>=0?a:null,columnName:e.ue,groupByValues:l,splitByValues:s}}async function Gt(e,t){let n=e.m,i=[],r=[],o=t;for(;n.parent[o]!==-1;)r.push(n.name[o]),o=n.parent[o];r.reverse(),r.length>0?i.push([r.join(" \\u203A ")]):i.push([n.name[t]]);let s=e.getColumnFormatter(e.ue,"value");if(i.push(["Value",s(n.value[t])]),e.s&&!isNaN(n.colorValue[t])){let u=e.getColumnFormatter(e.s,"value");i.push([e.s,u(n.colorValue[t])])}let l=n.leafRowIdx[t];if(n.firstChild[t]===-1&&l!==-1&&e.ze){let u=await e.ze.fetchRow(l);for(let[m,f]of u)f!=null&&(m===e.s&&!isNaN(n.colorValue[t])||(typeof f=="number"?i.push([m,e.getColumnFormatter(m,"value")(f)]):i.push([m,String(f)])))}return n.firstChild[t]!==-1&&i.push(["Children",String(n.childCount[t])]),i}function Ur(e,t,n,i){e.v.dismiss(),e.pe=t;let r=e.i?.cssWidth??0,o=e.i?.cssHeight??0;Gt(e,t).then(s=>{e.pe===t&&s.length!==0&&e.v.pin(s,{px:n.cx,py:n.cy},{cssWidth:r,cssHeight:o},ie(e.t))}),e.k=-1,i()}function Hr(e){e.v.dismiss(),e.pe=-1}function Vr(e,t,n){let i=e.m;if(e.P.length>0&&e.W.facet_mode==="grid"){let r=t;for(;r!==-1&&i.parent[r]!==e.$;)r=i.parent[r];r!==-1&&e.gt.set(i.name[r],t),e.k=-1,n();return}e._=t,Dr(e,t),e.k=-1,n()}function Yr(e,t,n){let i=e.m,r=i.x0,o=i.y0,s=i.x1,l=i.y1,a=i.depth,u=i.firstChild,m=e.ee,f=e.de,c=e.$e,p=e.qe,b=-1,g=1/0,h=-1,y=1/0,C=-1;if(!m)return{leafId:-1,branchId:-1,inHeader:!1};for(let _=0;_<f;_++){let x=m[_],v=p?p[_]:e._;if(x===v||!(t>=r[x]&&t<=s[x]&&n>=o[x]&&n<=l[x]))continue;let A=(s[x]-r[x])*(l[x]-o[x]);if(u[x]!==-1){A<y&&(y=A,h=x);let T=c?c[_]:a[e._],L=a[x]-T;if(L===1&&n<=o[x]+vs&&(C=x),L===2){let D=s[x]-r[x],M=l[x]-o[x];if(D>=60&&M>=30){let P=o[x]+M/2,w=r[x]+D/2;Math.abs(n-P)<10&&Math.abs(t-w)<D*.4&&(C=x)}}}else A<g&&(g=A,b=x)}return C!==-1?{leafId:-1,branchId:C,inHeader:!0}:{leafId:b,branchId:h,inHeader:!1}}function du(e,t,n){if(e.pe!==-1)return;for(let l of e.ke)if(t>=l.x0&&t<=l.x1&&n>=l.y0&&n<=l.y1){e.v.setCursor("pointer"),e.k=-1,dn(e);return}let{leafId:i,branchId:r,inHeader:o}=Yr(e,t,n),s=o?r:i!==-1?i:r;if(s!==e.k){if(e.k=s,e.v.setCursor(r!==-1?"pointer":"default"),s!==-1){let l=e.V.beginHover(s);Gt(e,s).then(a=>{e.V.commitHover(l,a)&&dn(e)})}else e.V.clearHover();dn(e)}}function pu(e,t,n){if(e.ke.some(l=>t>=l.x0&&t<=l.x1&&n>=l.y0&&n<=l.y1))return null;let{leafId:r,branchId:o,inHeader:s}=Yr(e,t,n);return o!==-1&&s?Bt(e,o,"branch"):r!==-1?Bt(e,r,"leaf"):o!==-1?Bt(e,o,"branch"):null}function bu(e,t,n){if(e.pe!==-1){qn(e),e.emitUnselect();return}for(let s of e.ke)if(t>=s.x0&&t<=s.x1&&n>=s.y0&&n<=s.y1){s.nodeId!==e._&&(zr(e,s.nodeId),e.emitUnselect());return}let{leafId:i,branchId:r,inHeader:o}=Yr(e,t,n);r!==-1&&o?(zr(e,r),je(e,r,"branch")):i!==-1?(hu(e,i),je(e,i,"leaf")):r!==-1&&(zr(e,r),je(e,r,"branch"))}function gu(e,t,n){let i=e.pe!==-1;qn(e),i&&e.emitUnselect();let{leafId:r,branchId:o}=Yr(e,t,n),s=e.m,l=o;if(l===-1&&r!==-1){let a=s.parent[r];a!==e._&&a!==-1&&(l=a)}l!==-1&&l!==e._&&s.firstChild[l]!==-1&&(zr(e,l),je(e,l,"branch"),r!==-1&&s.firstChild[r]===-1&&(hu(e,r),je(e,r,"leaf")))}function zr(e,t){Vr(e,t,()=>{e.i&&e.requestRender(e.i)})}function hu(e,t){let n=e.m,i=(n.x0[t]+n.x1[t])/2,r=(n.y0[t]+n.y1[t])/2;Ur(e,t,{cx:i,cy:r},()=>dn(e))}function qn(e){Hr(e)}var Xr=class extends mn{constructor(){super(...arguments);d(this,"r",null);d(this,"B",null);d(this,"Xt",null);d(this,"$t",null);d(this,"Cr",0);d(this,"k",-1);d(this,"pe",-1);d(this,"ke",[]);d(this,"ye",null);d(this,"Mt",!0);d(this,"zn",0);d(this,"gt",new Map);d(this,"g",null);d(this,"Bi",!1);d(this,"$e",null);d(this,"qe",null)}tooltipCallbacks(){return{onHover:(n,i)=>du(this,n,i),onLeave:()=>{this.k!==-1&&this.pe===-1&&(this.k=-1,this.i&&this.requestRender(this.i))},onClickPre:(n,i)=>(bu(this,n,i),!0),onDblClick:(n,i)=>gu(this,n,i)}}clickTargetAt(n,i){return pu(this,n,i)}async uploadAndRender(n,i,r,o){if(this.i=n,r===0){let s=this.T;if(this.ue=s[0]||Rr(i)||"",this.s=s[1]||"",!this.s)this.ce="empty";else{let l=this.ot[this.s],a=l==="float"||l==="integer"||l==="date"||l==="datetime";this.ce=a?"numeric":"series"}this.k=-1,this.pe=-1,this.ke=[],this.gt.clear(),this.g=null,this.$e=null,this.qe=null,this.Cr=0,this.V.clearHover(),this.V.invalidatePin(),qn(this),this.ye?.close(),this.ye=null,this.Mt=!0,this.zn++,Yn(this)}Xn(this,i),$n(this),this.$!==-1&&await this.requestRender(n)}Ot(n){this.$!==-1&&(this.i=n,fu(this,n))}destroyInternal(){qn(this),this.ye?.close(),this.ye=null;let n=this.i?.gl;n&&(this.Xt&&n.deleteBuffer(this.Xt),this.$t&&n.deleteBuffer(this.$t)),this.Xt=null,this.$t=null,this.r=null,this.B=null,this.$=-1,this._=-1,this.he=[],this.Yt.clear(),this.ee=null,this.de=0,this.ke=[],this.gt.clear(),this.g=null,this.$e=null,this.qe=null}};Dn();ke();pe();var yu=4,Kn=30;function Xc(e,t){let n=0,i=e.depth[t],r=new Int32Array(128);r[0]=t;let o=1;for(;o>0;){o--;let s=r[o],l=e.depth[s]-i;l>n&&(n=l);for(let a=e.firstChild[s];a!==-1;a=e.nextSibling[a]){if(o>=r.length){let u=new Int32Array(r.length*2);u.set(r),r=u}r[o++]=a}}return n}function Ms(e,t,n){let i=e.depth[t],r=Math.max(1,Xc(e,t)),s=Math.max(0,n-Kn)/r;e.a0[t]=0,e.a1[t]=2*Math.PI,e.r0[t]=0,e.r1[t]=Kn,xu(e,t,0,2*Math.PI,Kn,s,i)}function xu(e,t,n,i,r,o,s){let l=e.value[t];if(l<=0)return;let a=i-n,u=n;for(let m=e.firstChild[t];m!==-1;m=e.nextSibling[m]){let f=e.value[m];if(f<=0)continue;let c=f/l,p=u,b=u+a*c;u=b;let g=r,h=r+o;e.a0[m]=p,e.a1[m]=b,e.r0[m]=g,e.r1[m]=h;let y=b-p,C=(g+h)/2;y*C*o<yu||e.firstChild[m]!==-1&&xu(e,m,p,b,h,o,s)}}function Cu(e,t){e.de=ws(e,t,0)}function ws(e,t,n){let i=e.m,r=i.a0,o=i.a1,s=i.r0,l=i.r1,a=i.firstChild,u=i.nextSibling,m=i.value;(!e.ee||e.ee.length<i.count)&&(e.ee=new Int32Array(i.count));let f=e.ee,c=n,p=new Int32Array(128);p[0]=t;let b=1;for(;b>0;){b--;let g=p[b];if(m[g]<=0)continue;f[c++]=g;let h=o[g]-r[g],y=(s[g]+l[g])/2,C=h*y,_=l[g]-s[g];if(!(C*_<yu))for(let x=a[g];x!==-1;x=u[x]){if(b>=p.length){let v=new Int32Array(p.length*2);v.set(p),p=v}p[b++]=x}}return c}Xt();He();var $r=32,$c=28,jc=90;function jr(e,t){if(e.d.length===0)return{centerX:e.ht,centerY:e.yt};let n=e.m;for(let i of e.d){let r=t;for(;r!==-1;){if(r===i.drillRoot)return{centerX:i.centerX,centerY:i.centerY};r=n.parent[r]}}return{centerX:e.ht,centerY:e.yt}}function Au(e,t){if(e._===-1)return;let n=t.gl,i=t.cssWidth,r=t.cssHeight;if(i<=0||r<=0)return;let o=e.P.length>0&&e.W.facet_mode==="grid",s=e.ce==="series"?e.u.size>1:e.ce==="numeric"&&e.b<e.c,l=!o&&e.he.length>1?$c:0,a=ji(e.t,s,jc,e.ce==="series"?e.u.size:0);if(o)Zc(e,i,r,a);else{e.g=null,e.d=[];let b=i-a,g=r-l;e.ht=b/2,e.yt=l+g/2,e._r=Math.max(0,Math.min(b,g)/2-4),Ms(e.m,e._,e._r),Cu(e,e._)}qc(e,t);let u=e.A(),m=u.O,f=ye(u.Ve,m,Math.max(1,e.u.size));if(e.ne){let b=e.ne.getContext("2d");b&&b.clearRect(0,0,e.ne.width,e.ne.height)}let c=t.dpr;e.Mt=!0,Kc(e,n,m,f,u.xi,c),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.useProgram(e.r);let p=e.B;if(n.uniform2f(p.u_resolution,n.canvas.width,n.canvas.height),n.uniform1f(p.u_border_px,u.no*c),e.d.length>0)for(let b of e.d)b.instanceCount!==0&&(n.uniform2f(p.u_center,b.centerX*c,b.centerY*c),_u(e,n,t,b.instanceStart,b.instanceCount));else n.uniform2f(p.u_center,e.ht*c,e.yt*c),_u(e,n,t,0,e.vr);e.Me(()=>mt(e))}function Zc(e,t,n,i){let r=e.m,o=[],s=[];for(let f=r.firstChild[e.$];f!==-1;f=r.nextSibling[f])r.value[f]<=0||(o.push(f),s.push(r.name[f]));let l=Math.max(1,t-i),a=Be(s,{cssWidth:l,cssHeight:n,hasLegend:!1,xAxis:"none",yAxis:"none",gap:e.W.facet_padding});e.g=a;let u=[],m=0;for(let f=0;f<o.length;f++){let c=o[f],p=a.cells[f];if(!p)continue;let b=r.name[c],g=e.gt.get(b)??c,h=p.layout.e,y=h.x+h.width/2,C=h.y+h.height/2,_=Math.max(0,Math.min(h.width,h.height)/2-4);Ms(r,g,_);let x=ws(e,g,m),v=m,A=x-m;u.push({label:b,centerX:y,centerY:C,maxRadius:_,drillRoot:g,instanceStart:v,instanceCount:A,nodeStart:v,nodeCount:A}),m=x}e.de=m,e.d=u,u.length>0&&(e.ht=u[0].centerX,e.yt=u[0].centerY,e._r=u[0].maxRadius)}function qc(e,t){if(e.r)return;let n=t.gl,i=Z(t,"sunburst-arc",vi,Ai,["u_center","u_resolution","u_border_px"],["a_strip_t","a_side","a_angles","a_radii","a_color"]);e.r=i.program,e.B=i;let r=new Float32Array(($r+1)*2*2);for(let o=0;o<=$r;o++){let s=o/$r,l=o*4;r[l+0]=s,r[l+1]=0,r[l+2]=s,r[l+3]=1}e.xn=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,e.xn),n.bufferData(n.ARRAY_BUFFER,r,n.STATIC_DRAW),e.Cn=n.createBuffer()}function Kc(e,t,n,i,r,o){let s=e.m,l=e.ee,a=e.d.length>0,u=a?e.d.reduce((p,b)=>p+b.instanceCount,0):e.de,m=new Float32Array(u*8),f=0,c=(p,b,g)=>{let h=f;for(let y=p;y<b;y++){let C=l[y];if(C===g)continue;let _=s.a0[C],x=s.a1[C],v=s.r0[C],A=s.r1[C];if(x<=_||A<=v)continue;let T=Br(e,C,n,i,r),L=f*8;m[L+0]=_,m[L+1]=x,m[L+2]=v*o,m[L+3]=A*o,m[L+4]=T[0],m[L+5]=T[1],m[L+6]=T[2],m[L+7]=T[3],f++}return{rangeStart:h,rangeCount:f-h}};if(a)for(let p of e.d){let b=p.instanceStart,g=b+p.instanceCount,{rangeStart:h,rangeCount:y}=c(b,g,p.drillRoot);p.instanceStart=h,p.instanceCount=y}else c(0,e.de,e._);e.vr=f,t.bindBuffer(t.ARRAY_BUFFER,e.Cn),t.bufferData(t.ARRAY_BUFFER,m.subarray(0,f*8),t.DYNAMIC_DRAW)}function _u(e,t,n,i,r){if(r===0)return;let o=e.B;t.bindBuffer(t.ARRAY_BUFFER,e.xn);let s=2*Float32Array.BYTES_PER_ELEMENT;t.enableVertexAttribArray(o.a_strip_t),t.vertexAttribPointer(o.a_strip_t,1,t.FLOAT,!1,s,0),t.enableVertexAttribArray(o.a_side),t.vertexAttribPointer(o.a_side,1,t.FLOAT,!1,s,Float32Array.BYTES_PER_ELEMENT);let l=ee(n),{setDivisor:a}=l;a(o.a_strip_t,0),a(o.a_side,0),t.bindBuffer(t.ARRAY_BUFFER,e.Cn);let u=8*Float32Array.BYTES_PER_ELEMENT,m=Float32Array.BYTES_PER_ELEMENT,f=i*u;t.enableVertexAttribArray(o.a_angles),t.vertexAttribPointer(o.a_angles,2,t.FLOAT,!1,u,f),a(o.a_angles,1),t.enableVertexAttribArray(o.a_radii),t.vertexAttribPointer(o.a_radii,2,t.FLOAT,!1,u,f+2*m),a(o.a_radii,1),t.enableVertexAttribArray(o.a_color),t.vertexAttribPointer(o.a_color,4,t.FLOAT,!1,u,f+4*m),a(o.a_color,1),l.drawArraysInstanced(t.TRIANGLE_STRIP,0,2*($r+1),r),a(o.a_angles,0),a(o.a_radii,0),a(o.a_color,0)}function mt(e){Jc(e),e.presentOverlay()}function Jc(e){if(!e.l||e._===-1)return;let t=e.i;if(!t)return;let{dpr:n,cssWidth:i,cssHeight:r}=t;Gr(e,e.l,n,i,r,o=>Qc(e,o,n,i,r),e.k!==-1?o=>{ed(o,e,e.k),td(e,o,e.k,i,r,e.A().fontFamily)}:null)}function Qc(e,t,n,i,r){let o=e.l;t.clearRect(0,0,o.width,o.height),t.save(),t.scale(n,n);let s=e.A(),{fontFamily:l,Pe:a,pi:u}=s,m=s.O,f=ye(s.Ve,m,Math.max(1,e.u.size)),c=e.m,p=e.ee,b=e.de,g=e.d.length>0;if(g)for(let y of e.d){let C=y.nodeStart+y.nodeCount;for(let _=y.nodeStart;_<C;_++){let x=p[_];x!==y.drillRoot&&vu(e,t,x,l,m,f,y.centerX,y.centerY)}}else for(let y=0;y<b;y++){let C=p[y];C!==e._&&vu(e,t,C,l,m,f,e.ht,e.yt)}let h=Math.max(0,Kn-s.no*.5);if(t.fillStyle=u,t.textAlign="center",t.textBaseline="middle",g){for(let y of e.d)if(t.beginPath(),t.fillStyle=u,t.arc(y.centerX,y.centerY,h,0,2*Math.PI),t.fill(),t.fillStyle=a,t.font=`11px ${l}`,t.fillText(c.name[y.drillRoot],y.centerX,y.centerY),e.g){let C=e.g.cells.find(_=>_.label===y.label);C?.titleRect&&(t.fillStyle=a,t.font=`11px ${l}`,t.textBaseline="middle",t.fillText(y.label,C.titleRect.x+C.titleRect.width/2,C.titleRect.y+C.titleRect.height/2))}}else t.beginPath(),t.arc(e.ht,e.yt,h,0,2*Math.PI),t.fill(),t.fillStyle=a,t.font=`11px ${l}`,t.fillText(c.name[e._],e.ht,e.yt);!g&&e.he.length>1&&kr(e,t,i,l,a),Nr(e,o,f,m,s,i,r,g?e.g?.legendRect??null:null),t.restore()}function vu(e,t,n,i,r,o,s,l){let a=e.m,u=a.a0[n],m=a.a1[n],f=a.r0[n],c=a.r1[n],p=c-f,b=(f+c)/2,h=(m-u)*b;if(p<16||h<8)return;let y=Math.min(11,Math.floor(h*.7));if(y<7)return;t.font=`${y}px ${i}`;let C=a.name[n],_=p-4,x=C;if(t.measureText(x).width>_){for(;x.length>1;)if(x=x.slice(0,-1),t.measureText(x+"\\u2026").width<=_){x+="\\u2026";break}}if(x.length<2)return;let v=(u+m)/2;t.save(),t.translate(s,l);let A=v,T=v>Math.PI/2&&v<3*Math.PI/2;e.go==="upright"&&T&&(A+=Math.PI),t.rotate(A);let L=Zn(e,n,r,o),D=Pr(L[0],L[1],L[2]);t.fillStyle=D>.5?"rgba(0,0,0,0.85)":"rgba(255,255,255,0.9)",t.textAlign="center",t.textBaseline="middle";let M=e.go==="upright"&&T?-b:b;t.fillText(x,M,0),t.restore()}function ed(e,t,n){let i=t.m,r=i.a0[n],o=i.a1[n],s=i.r0[n],l=i.r1[n],{centerX:a,centerY:u}=jr(t,n);e.strokeStyle="rgba(255,255,255,0.9)",e.lineWidth=2,e.beginPath(),e.arc(a,u,l,r,o),e.arc(a,u,s,o,r,!0),e.closePath(),e.stroke()}function td(e,t,n,i,r,o){let s=e.m,l=(s.a0[n]+s.a1[n])/2,a=(s.r0[n]+s.r1[n])/2,{centerX:u,centerY:m}=jr(e,n),f=u+Math.cos(l)*a,c=m+Math.sin(l)*a;Wr(e,t,n,f,c,i,r,o)}function Fs(e,t,n){if(e.d.length===0)return{centerX:e.ht,centerY:e.yt,drillRoot:e._};for(let i of e.d){let r=t-i.centerX,o=n-i.centerY;if(!(Math.sqrt(r*r+o*o)>i.maxRadius+4))return{centerX:i.centerX,centerY:i.centerY,drillRoot:i.drillRoot}}return null}function nd(e,t,n){let i=e.m,r=t;for(;r!==-1;){if(r===n)return!0;r=i.parent[r]}return!1}function Ss(e,t,n){let i=Fs(e,t,n);if(!i)return-1;let r=e.m,o=e.ee,s=e.de;if(!o)return-1;let l=t-i.centerX,a=n-i.centerY,u=Math.sqrt(l*l+a*a),m=Math.atan2(a,l);if(m<0&&(m+=2*Math.PI),u<r.r1[e.$]+.001&&i.drillRoot!==e.$)return i.drillRoot;let f=e.d.length>0;for(let c=0;c<s;c++){let p=o[c];if(p===i.drillRoot||f&&!nd(e,p,i.drillRoot))continue;let b=r.a0[p],g=r.a1[p],h=r.r0[p],y=r.r1[p];if(!(u<h||u>y)&&!(m<b||m>g))return p}return-1}function Lu(e,t,n){if(e.pe!==-1)return;for(let o of e.ke)if(t>=o.x0&&t<=o.x1&&n>=o.y0&&n<=o.y1){e.v.setCursor("pointer"),e.k!==-1&&(e.k=-1,mt(e));return}let i=Ss(e,t,n),r=e.m;if(e.v.setCursor(i!==-1&&r.firstChild[i]!==-1?"pointer":"default"),i!==e.k){if(e.k=i,i!==-1){let o=e.V.beginHover(i);Gt(e,i).then(s=>{e.V.commitHover(o,s)&&mt(e)})}else e.V.clearHover();mt(e)}}function Tu(e,t,n){if(e.ke.some(a=>t>=a.x0&&t<=a.x1&&n>=a.y0&&n<=a.y1))return null;let r=e.m,o=Fs(e,t,n);if(o&&Math.hypot(t-o.centerX,n-o.centerY)<r.r1[e.$]+.001)return null;let s=Ss(e,t,n);if(s===-1)return null;let l=r.firstChild[s]!==-1?"branch":"leaf";return Bt(e,s,l)}function Mu(e,t,n){if(e.pe!==-1){Zr(e),e.emitUnselect();return}for(let s of e.ke)if(t>=s.x0&&t<=s.x1&&n>=s.y0&&n<=s.y1){s.nodeId!==e._&&(Rs(e,s.nodeId),e.emitUnselect());return}let i=e.m,r=Fs(e,t,n);if(r){let s=t-r.centerX,l=n-r.centerY;if(Math.sqrt(s*s+l*l)<i.r1[e.$]+.001){let u=i.parent[r.drillRoot];if(u!==-1&&u!==e.$)Rs(e,u),e.emitUnselect();else if(e.d.length>0){let m=e.d.find(f=>f.drillRoot===r.drillRoot);m&&(e.gt.delete(m.label),e.emitUnselect()),e.i&&e.requestRender(e.i)}return}}let o=Ss(e,t,n);o!==-1&&(i.firstChild[o]!==-1?(Rs(e,o),je(e,o,"branch")):(id(e,o),je(e,o,"leaf")))}function Rs(e,t){Vr(e,t,()=>{e.i&&e.requestRender(e.i)})}function id(e,t){let n=e.m,i=(n.a0[t]+n.a1[t])/2,r=(n.r0[t]+n.r1[t])/2,{centerX:o,centerY:s}=jr(e,t),l=o+Math.cos(i)*r,a=s+Math.sin(i)*r;Ur(e,t,{cx:l,cy:a},()=>mt(e))}function Zr(e){Hr(e)}var qr=class extends mn{constructor(){super(...arguments);d(this,"r",null);d(this,"B",null);d(this,"xn",null);d(this,"Cn",null);d(this,"vr",0);d(this,"go","upright");d(this,"ht",0);d(this,"yt",0);d(this,"_r",0);d(this,"k",-1);d(this,"pe",-1);d(this,"ke",[]);d(this,"ye",null);d(this,"Mt",!0);d(this,"zn",0);d(this,"g",null);d(this,"gt",new Map);d(this,"d",[])}tooltipCallbacks(){return{onHover:(n,i)=>Lu(this,n,i),onLeave:()=>{this.k!==-1&&this.pe===-1&&(this.k=-1,mt(this))},onClickPre:(n,i)=>(Mu(this,n,i),!0)}}clickTargetAt(n,i){return Tu(this,n,i)}async uploadAndRender(n,i,r,o){if(this.i=n,r===0){let s=this.T;if(this.ue=s[0]||Rr(i)||"",this.s=s[1]||"",!this.s)this.ce="empty";else{let l=this.ot[this.s],a=l==="float"||l==="integer"||l==="date"||l==="datetime";this.ce=a?"numeric":"series"}this.k=-1,this.pe=-1,this.ke=[],this.gt.clear(),this.g=null,this.d=[],this.vr=0,this.V.clearHover(),this.V.invalidatePin(),Zr(this),this.ye?.close(),this.ye=null,this.Mt=!0,this.zn++,Yn(this)}Xn(this,i),$n(this),this.$!==-1&&await this.requestRender(n)}Ot(n){this.$!==-1&&(this.i=n,Au(this,n))}destroyInternal(){Zr(this),this.ye?.close(),this.ye=null;let n=this.i?.gl;n&&(this.xn&&n.deleteBuffer(this.xn),this.Cn&&n.deleteBuffer(this.Cn)),this.xn=null,this.Cn=null,this.r=null,this.B=null,this.$=-1,this._=-1,this.he=[],this.Yt.clear(),this.ee=null,this.de=0,this.ke=[],this.g=null,this.gt.clear(),this.d=[]}};ki();Rn();var pn=class extends Pe{constructor(){super(...arguments);d(this,"Fe",[]);d(this,"j",0);d(this,"tt",0);d(this,"r",null);d(this,"Y",null);d(this,"f",null);d(this,"oe",null);d(this,"Q",null);d(this,"fe",null);d(this,"Ti",!0)}getZoomConfig(){return{lockAxis:"y"}}};Fn();function Kr(e,t=.5,n=.1){let i=t/Math.max(1,e),r=i*(1-n)/2;return{slotWidth:i,halfWidth:r}}he();function wu(e,t,n="bar"){let i=t?.[e]?.chart_type?.toLowerCase?.();return i==="bar"||i==="line"||i==="scatter"||i==="area"?i:n}function Ru(e,t,n){let i=n?.[e]?.stack;return typeof i=="boolean"?i:t==="bar"||t==="area"}function Is(e,t){return t?.[e]?.alt_axis===!0}function Fu(e,t,n){let i=n?.[e.aggName];if(!i)return null;let r=typeof i.palette=="string"?rd(i.palette):null;if(r&&r.length>0){let o=t?0:e.splitIdx%r.length;return r[o]}return typeof i.color=="string"?ts(i.color)??null:null}var Jr=new Map;function rd(e){let t=Jr.get(e);return t===void 0&&(t=qi(e),Jr.size>256&&Jr.clear(),Jr.set(e,t)),t}function Su(e,t,n){if(t!=="line"&&t!=="area")return"skip";let i=n?.[e]?.interpolate;return i===void 0||t==="area"?"solid":i}var Iu=50,kt=0,Qr=1;function eo(){return{count:0,catIdx:new Int32Array(0),seriesId:new Int32Array(0),axis:new Uint8Array(0),chartType:new Uint8Array(0),xCenter:new Float64Array(0),halfWidth:new Float64Array(0),y0:new Float64Array(0),y1:new Float64Array(0)}}function od(e,t){return e&&e.catIdx.length>=t?(e.count=0,e):{count:0,catIdx:new Int32Array(t),seriesId:new Int32Array(t),axis:new Uint8Array(t),chartType:new Uint8Array(t),xCenter:new Float64Array(t),halfWidth:new Float64Array(t),y0:new Float64Array(t),y1:new Float64Array(t)}}function Wt(e,t,n,i,r){let o=e.seriesId[t],s=e.catIdx[t];return{catIdx:s,aggIdx:Math.floor(o/n),splitIdx:o%n,seriesId:o,xCenter:e.xCenter[t],halfWidth:e.halfWidth[t],y0:e.y0[t],y1:e.y1[t],value:i[s*r+o],axis:e.axis[t],chartType:e.chartType[t]===kt?"bar":"area"}}function Du(e,t){return e&&e.length>=t?e:new Float64Array(Math.max(t,e?.length??0))}function Eu(e,t){e[t>>3]|=1<<(t&7)}function Pu(e){let{columns:t,numRows:n,columnSlots:i,groupBy:r,splitBy:o,groupByTypes:s,dateModifiers:l,columnsConfig:a,defaultChartType:u,autoAltYAxis:m,bandInnerFrac:f,barInnerPad:c,groupPad:p,includeZero:b,facetSplits:g,scratchBars:h,scratchPosStack:y,scratchNegStack:C}=e,_=fn(r,s),x={aggregates:[],splitPrefixes:[],rowPaths:[],numCategories:0,rowOffset:0,axisMode:_,numericCategoryDomain:null,categoryPositions:null,series:[],bars:eo(),posStack:y??null,negStack:C??null,samples:new Float32Array(0),sampleValid:new Uint8Array(0),leftDomain:{min:0,max:0},rightDomain:null,hasRightAxis:!1,leftValueAxisMode:"numeric",rightValueAxisMode:null,leftValueCategoryDomain:null,rightValueCategoryDomain:null},v=i.filter(F=>!!F);if(v.length===0)return x;let A=[];if(o.length>0){for(let F of it(t,[],v))F.colNames.size>0&&A.push(F.prefix);A.length===0&&A.push("")}else A.push("");let T=r.map(F=>s[F]??"string"),{rowPaths:L,numCategories:D,rowOffset:M}=cn(t,n,r.length,T,_,r.map(F=>l?.get(F)));if(D===0)return{...x,rowPaths:L,rowOffset:M};let P=[],w=v.length,I=A.length;for(let F=0;F<w;F++)for(let W=0;W<I;W++){let O=v[F],Y=A[W],$=Y===""?O:`${Y}${w>1?` | ${O}`:""}`,X=wu(O,a,u),q=Ru(O,X,a),_e=Su(O,X,a);P.push({seriesId:F*I+W,aggIdx:F,splitIdx:W,aggName:O,splitKey:Y,label:$,color:[.5,.5,.5],axis:0,chartType:X,stack:q,start:-1,end:-1,interpolateMode:_e})}let G=[];for(let F=0;F<w;F++)G.push(b?{min:0,max:0}:{min:1/0,max:-1/0});let E=D,S=P.length,k=g?E*w*I:E*w,B=Du(y??null,k),V=Du(C??null,k);B.fill(0,0,k),V.fill(0,0,k);let N=new Float32Array(E*S),H=new Uint8Array(E*S+7>>3),z=null,K=null,ue=1;if(_.mode==="numeric"&&E>0){let F=t.get("__ROW_PATH_0__"),W=Pt(F?.values,E,M,r[0]??"",_.numericType==="date"||_.numericType==="datetime",_.numericType==="datetime"?l?.get(r[0]):void 0);W&&(z=W.categoryPositions,K=W.numericCategoryDomain,ue=W.numericCategoryDomain.bandWidth)}else _.mode==="category"&&(z=Qa(L,E,p));let Fe=Kr(w,f,c),pt=Fe.slotWidth*ue,Se=Fe.halfWidth*ue,qe=new Float64Array(w),oi=(w-1)/2;for(let F=0;F<w;F++)qe[F]=(F-oi)*pt;let Cn=new Array(w*I),si=new Array(w*I);for(let F=0;F<w;F++){let W=v[F];for(let O=0;O<I;O++){let Y=A[O],$=Y===""?W:`${Y}|${W}`,X=t.get($),q=F*I+O;Cn[q]=X?.values??null,si[q]=X?.valid??null}}let Ce=new Array(w),me=new Array(w),se=!1;for(let F=0;F<w;F++){let W=v[F],O=A[0],Y=O===""?W:`${O}|${W}`;Ce[F]=t.get(Y)?.type==="string",me[F]=Is(W,a)?1:0,Ce[F]&&(se=!0)}let oe=[],Ie=[],We=[],li=[];for(let F=0;F<w;F++){let W=v[F];for(let O=0;O<I;O++){let Y=A[O],$=Y===""?W:`${Y}|${W}`,X=F*I+O,q={name:$,type:Ce[F]?"string":"numeric",data:t.get($)};me[F]===0?(oe.push(q),We.push(X)):(Ie.push(q),li.push(X))}}let So=oe.map(F=>F.name).filter((F,W,O)=>O.indexOf(F)===W).join(", "),Io=Ie.map(F=>F.name).filter((F,W,O)=>O.indexOf(F)===W).join(", "),Q=oe.length>0?_s(oe,n,M,So):null,De=Ie.length>0?_s(Ie,n,M,Io):null,Do=new Array(w*I).fill(null);if(Q)for(let F=0;F<We.length;F++)Do[We[F]]=Q.perColumnSlots[F];if(De)for(let F=0;F<li.length;F++)Do[li[F]]=De.perColumnSlots[F];let Fm=E*w*I,j=od(h??null,Fm),te=0;for(let F=0;F<E;F++){let W=F+M;for(let O=0;O<w;O++)for(let Y=0;Y<I;Y++){let $=O*I+Y,X=Do[$];if(X){let fe=O*I+Y,Le=F*S+fe;N[Le]=X[F],Eu(H,Le);continue}let q=Cn[$];if(!q)continue;let _e=si[$];if(_e&&!(_e[W>>3]>>(W&7)&1))continue;let ne=q[W];if(!isFinite(ne))continue;let Ot=O*I+Y,gt=F*S+Ot;N[gt]=ne,Eu(H,gt)}}for(let F=0;F<S;F++){let W=-1,O=-1;for(let Y=0;Y<E;Y++){let $=Y*S+F;H[$>>3]>>($&7)&1&&(W===-1&&(W=Y),O=Y)}P[F].start=W,P[F].end=O}for(let F=0;F<S;F++){let W=P[F];if(!(W.start<0)&&W.interpolateMode!=="skip"){if(W.chartType==="line"){let O=W.start;for(let Y=W.start+1;Y<=W.end;Y++){let $=Y*S+F;if(H[$>>3]>>($&7)&1){if(Y-O>1){let q=O*S+F,_e=N[q],ne=N[$],Ot=z?z[O]:O,fe=(z?z[Y]:Y)-Ot;for(let Le=1;Le<Y-O;Le++){let be=O+Le,Te=z?z[be]:be,Gm=fe===0?0:(Te-Ot)/fe;N[be*S+F]=_e+(ne-_e)*Gm}}O=Y}}}else if(W.chartType==="area"){for(let O=0;O<W.start;O++)N[O*S+F]=0;for(let O=W.end+1;O<E;O++)N[O*S+F]=0;W.start=0,W.end=E-1}}}for(let F=0;F<E;F++){let W=z?z[F]:F;for(let O=0;O<w;O++){let Y=qe[O],$=W+Y,X=G[O];for(let q=0;q<I;q++){let _e=O*I+q,ne=P[_e];if(F<ne.start||F>ne.end)continue;let Ot=ne.chartType==="line"||ne.chartType==="area"&&ne.interpolateMode!=="skip",gt=F*S+_e;if(!Ot&&!(H[gt>>3]>>(gt&7)&1))continue;let fe=N[gt];if((ne.chartType==="bar"||ne.chartType==="area")&&ne.stack){if(fe===0&&(ne.chartType!=="area"||ne.interpolateMode==="skip"))continue;let Le=g?(F*w+O)*I+q:F*w+O,be,Te;fe>=0?(be=B[Le],Te=be+fe,B[Le]=Te):(be=V[Le],Te=be+fe,V[Le]=Te),be<X.min&&(X.min=be),Te<X.min&&(X.min=Te),be>X.max&&(X.max=be),Te>X.max&&(X.max=Te),j.catIdx[te]=F,j.seriesId[te]=_e,j.axis[te]=0,j.chartType[te]=ne.chartType==="bar"?kt:Qr,j.xCenter[te]=$,j.halfWidth[te]=Se,j.y0[te]=be,j.y1[te]=Te,te++}else if(fe<X.min&&(X.min=fe),fe>X.max&&(X.max=fe),b&&(0<X.min&&(X.min=0),0>X.max&&(X.max=0)),ne.chartType==="bar"||ne.chartType==="area"){if(fe===0)continue;j.catIdx[te]=F,j.seriesId[te]=_e,j.axis[te]=0,j.chartType[te]=ne.chartType==="bar"?kt:Qr,j.xCenter[te]=$,j.halfWidth[te]=Se,j.y0[te]=0,j.y1[te]=fe,te++}}}}j.count=te;let Nt=!1;if(m&&w>=2&&!se){let F=new Array(w),W=0,O=1/0;for(let Y=0;Y<w;Y++){let $=G[Y],X=Math.max(Math.abs($.min),Math.abs($.max),1e-12);F[Y]=X,X>W&&(W=X),X<O&&(O=X)}if(W/O>Iu){let Y=W/Math.sqrt(Iu);for(let $=0;$<w;$++)if(F[$]<Y)for(let q of P)q.aggIdx===$&&(q.axis=1);for(let $=0;$<j.count;$++)j.axis[$]=P[j.seriesId[$]].axis;Nt=P.some($=>$.axis===1)}}let ll=!1;for(let F=0;F<w;F++)if(Is(v[F],a))for(let W of P)W.aggIdx===F&&(W.axis=1,ll=!0);if(ll){for(let F=0;F<j.count;F++)j.axis[F]=P[j.seriesId[F]].axis;Nt=!0}let Ne=b?{min:0,max:0}:{min:1/0,max:-1/0},bt=b?{min:0,max:0}:{min:1/0,max:-1/0};for(let F=0;F<j.count;F++){let W=j.axis[F]===0?Ne:bt,O=j.y0[F],Y=j.y1[F];O<W.min&&(W.min=O),Y<W.min&&(W.min=Y),O>W.max&&(W.max=O),Y>W.max&&(W.max=Y)}for(let F=0;F<S;F++){let W=P[F];if(W.stack&&(W.chartType==="bar"||W.chartType==="area")||W.start<0)continue;let O=W.chartType==="line"||W.chartType==="area"&&W.interpolateMode!=="skip",Y=W.axis===0?Ne:bt;for(let $=W.start;$<=W.end;$++){let X=$*S+F;if(!O&&!(H[X>>3]>>(X&7)&1))continue;let q=N[X];q<Y.min&&(Y.min=q),q>Y.max&&(Y.max=q)}}(!isFinite(Ne.min)||!isFinite(Ne.max)||Ne.min===0&&Ne.max===0)&&(Ne.min=0,Ne.max=1);let Sm=!isFinite(bt.min)||!isFinite(bt.max)||bt.min===0&&bt.max===0,Im=Nt?Sm?{min:0,max:1}:bt:null,Dm=Q?"category":"numeric",Em=Nt?De?"category":"numeric":null,Pm=Q&&Q.domain.numRows>0?{min:0,max:Math.max(0,Q.domain.numRows-1)}:Ne,Bm=De&&De.domain.numRows>0&&Nt?{min:0,max:Math.max(0,De.domain.numRows-1)}:Im;return{aggregates:v,splitPrefixes:A,rowPaths:L,numCategories:D,rowOffset:M,axisMode:_,numericCategoryDomain:K,categoryPositions:z,series:P,bars:j,posStack:B,negStack:V,samples:N,sampleValid:H,leftDomain:Pm,rightDomain:Bm,hasRightAxis:Nt,leftValueAxisMode:Dm,rightValueAxisMode:Em,leftValueCategoryDomain:Q?.domain??null,rightValueCategoryDomain:De?.domain??null}}rt();En();Vt();ge();Bn();ke();var Ds=kt;function Bu(e,t,n,i){let r=i?.start??0,o=i?.count??e.Yn;if(e.Yn===0||o===0)return;let s=e.B,l=ee(n),{setDivisor:a}=l;t.bindBuffer(t.ARRAY_BUFFER,e.Y),t.enableVertexAttribArray(s.a_corner),t.vertexAttribPointer(s.a_corner,2,t.FLOAT,!1,0,0),a(s.a_corner,0),ut(n,l,s.a_x_center,"bar_x",1,r)&&ut(n,l,s.a_half_width,"bar_hw",1,r)&&ut(n,l,s.a_y0,"bar_y0",1,r)&&ut(n,l,s.a_y1,"bar_y1",1,r)&&ut(n,l,s.a_color,"bar_color",3,r)&&ut(n,l,s.a_series_id,"bar_sid",1,r)&&ut(n,l,s.a_axis,"bar_axis",1,r)&&l.drawArraysInstanced(t.TRIANGLE_STRIP,0,4,o),a(s.a_x_center,0),a(s.a_half_width,0),a(s.a_y0,0),a(s.a_y1,0),a(s.a_color,0),a(s.a_series_id,0),a(s.a_axis,0)}ge();Ft();var Es=10;function bn(e){return e.xe>=0?Wt(e.be,e.xe,e.le.length,e.We,e.a.length):e.Ce}function to(e,t,n){if(!e.f)return;let i=e.f,r;if(e.g){let x=e.g.cells,v=-1;for(let A=0;A<x.length;A++){let T=x[A].layout.e;if(t>=T.x&&t<=T.x+T.width&&n>=T.y&&n<=T.y+T.height){v=A;break}}if(v<0){Gu(e);return}i=x[v].layout,r=v}let o=i.e;if(t<o.x||t>o.x+o.width||n<o.y||n>o.y+o.height){Gu(e);return}let s=i.H,l=i.K,a=i.J,u=i.ie,m,f,c,p;if(e.Ne){let x=s,v=l,A=Math.min(a,u),T=Math.max(a,u),L=x+(t-o.x)/o.width*(v-x);m=A+(n-o.y)/o.height*(T-A),f=L,c=o.height/(T-A),p=o.width/(v-x)}else m=s+(t-o.x)/o.width*(l-s),f=u-(n-o.y)/o.height*(u-a),c=o.width/(l-s),p=o.height/(u-a);let b=e._n&&e.ae&&!e.Ne?e.ae.max-(n-o.y)/o.height*(e.ae.max-e.ae.min):f,g=e._n&&e.ae&&!e.Ne?o.height/(e.ae.max-e.ae.min):p,h=-1,y=null,C=e.jt,_=C.length<=1;for(let x=C.length-1;x>=0;x--){let v=C[x],A=_?void 0:{start:v.aggStart,end:v.aggEnd};switch(v.chartType){case"scatter":case"line":y=ld(e,v.chartType,m,f,b,c,p,g,r,A);break;case"bar":h=sd(e,m,f,b,r,A);break;case"area":{let T=ad(e,m,f,b,r,A);T&&(T.idx>=0?h=T.idx:y=T.bar);break}}if(h>=0||y)break}ud(e,h,y)}function sd(e,t,n,i,r,o){let s=e.be,l=s.chartType,a=s.seriesId,u=s.xCenter,m=s.halfWidth,f=s.y0,c=s.y1,p=s.axis,b=e.re,g=Math.max(1,e.le.length);for(let h=0;h<s.count;h++){if(l[h]!==kt||b.has(a[h])||r!==void 0&&a[h]%g!==r)continue;if(o!==void 0){let L=Math.floor(a[h]/g);if(L<o.start||L>o.end)continue}let y=u[h],C=m[h];if(t<y-C||t>y+C)continue;let _=p[h]===0?n:i,x=f[h],v=c[h],A=x<v?x:v,T=x<v?v:x;if(_>=A&&_<=T)return h}return-1}function ld(e,t,n,i,r,o,s,l,a,u){let m=e.j,f=e.a.length;if(m===0||f===0)return null;let c=e.We,p=e.wt,g=Es*Es,h=null,y=e.S,C=Es/o,_,x;y?e.te==="category"?[_,x]=Qt(y,m,n-C,n+C):(_=0,x=m-1):(_=Math.max(0,Math.floor(n-C)),x=Math.min(m-1,Math.ceil(n+C)));for(let v of e.a){if(v.chartType!==t||e.re.has(v.seriesId)||a!==void 0&&v.splitIdx!==a||u!==void 0&&(v.aggIdx<u.start||v.aggIdx>u.end))continue;let A=v.axis===1?r:i,T=v.axis===1?l:s;for(let L=_;L<=x;L++){let D=L*f+v.seriesId;if(!(p[D>>3]>>(D&7)&1))continue;let M=c[D],P=y?y[L]:L,w=(P-n)*o,I=(M-A)*T,G=w*w+I*I;G<g&&(g=G,h={catIdx:L,aggIdx:v.aggIdx,splitIdx:v.splitIdx,seriesId:v.seriesId,xCenter:P,halfWidth:0,y0:0,y1:M,value:M,axis:v.axis,chartType:"bar"})}}return h}function ad(e,t,n,i,r,o){let s=e.te==="category"?e.S:null,l=s?_a(s,e.j,t):Math.round(t);if(l<0||l>=e.j)return null;let a=s?s[l]:l;if(Math.abs(t-a)>.5)return null;let u=e.a.length,m=e.We,f=e.wt,c=e.be,p=c.chartType,b=c.catIdx,g=c.seriesId,h=c.axis,y=c.y0,C=c.y1,_=e.le.length;for(let x=0;x<c.count;x++){if(p[x]!==Qr||b[x]!==l||e.re.has(g[x])||r!==void 0&&g[x]%_!==r)continue;if(o!==void 0){let M=Math.floor(g[x]/Math.max(1,_));if(M<o.start||M>o.end)continue}let v=h[x]===0?n:i,A=y[x],T=C[x],L=A<T?A:T,D=A<T?T:A;if(v>=L&&v<=D)return{idx:x,bar:null}}for(let x of e.a){if(x.chartType!=="area"||x.stack||e.re.has(x.seriesId)||r!==void 0&&x.splitIdx!==r||o!==void 0&&(x.aggIdx<o.start||x.aggIdx>o.end))continue;let v=l*u+x.seriesId;if(!(f[v>>3]>>(v&7)&1))continue;let A=m[v],T=x.axis===1?i:n,L=Math.min(0,A),D=Math.max(0,A);if(T>=L&&T<=D)return{idx:-1,bar:{catIdx:l,aggIdx:x.aggIdx,splitIdx:x.splitIdx,seriesId:x.seriesId,xCenter:a,halfWidth:.5,y0:0,y1:A,value:A,axis:x.axis,chartType:"area"}}}return null}function Gu(e){(e.xe!==-1||e.Ce!==null)&&(e.xe=-1,e.Ce=null,e.i&&e.requestRender(e.i))}function ud(e,t,n){let i=e.xe===t,r=(e.Ce?.seriesId??-1)===(n?.seriesId??-1)&&(e.Ce?.catIdx??-1)===(n?.catIdx??-1);i&&r||(e.xe=t,e.Ce=n,e.i&&e.requestRender(e.i))}function ku(e,t,n){if(e.vn.length===0)return!1;for(let i of e.vn){let r=i.rect;if(t>=r.x&&t<=r.x+r.width&&n>=r.y&&n<=r.y+r.height){let o=i.seriesIds.some(s=>!e.re.has(s));for(let s of i.seriesIds)o?e.re.add(s):e.re.delete(s);return e.Rt=null,e.ho=!1,e.Gi=null,e.i&&(no(e,e.i),io(e,e.i),e.requestRender(e.i)),!0}}return!1}function Ps(e,t){let n=[],i=e.a[t.seriesId],r=Bs(e,t.catIdx);r&&n.push([r]);let o=e.getColumnFormatter(i.aggName,"value");n.push([i.aggName,o(t.value)]);let s=e.ki,l=s?.prefixes.get(i.splitKey);return s&&l?(n.push([e.p[e.p.length-1],s.values[l.value]]),l.facet!==""&&n.push(["Split",l.facet])):i.splitKey&&n.push(["Split",i.splitKey]),t.y0!==0&&(n.push(["Base",o(t.y0)]),n.push(["Top",o(t.y1)])),n}function Bs(e,t){if(e.te==="numeric"&&e.S){let i=e.S[t];if(i==null)return"";let r=e.p[0];return e.getColumnFormatter(r,"value")(i)}if(e.Fe.length===0)return"";let n=[];for(let i of e.Fe){let r=i.labels[t];r!=null&&r!==""&&n.push(r)}return n.join(" / ")}function Gs(e,t,n){t<0||t>=e.be.count||(e.Ar=t,Ou(e,Wt(e.be,t,e.le.length,e.We,e.a.length),n))}function ks(e,t,n){e.Ar=-1,Ou(e,t,n)}function Wu(e,t){return e.te==="numeric"&&e.S?[e.S[t]??null]:e.Fe.map(n=>n.labels[t]??null)}function md(e,t){let n=e.a[t.seriesId];return n?{category:Wu(e,t.catIdx),aggName:n.aggName,splitKey:n.splitKey}:null}function Nu(e,t){let n=e.a.find(u=>u.aggName===t.aggName&&u.splitKey===t.splitKey);if(!n)return null;let i=-1;for(let u=0;u<e.j;u++){let m=Wu(e,u);if(m.length===t.category.length&&m.every((f,c)=>f===t.category[c])){i=u;break}}if(i<0)return null;let r=e.be;for(let u=0;u<r.count;u++)if(r.catIdx[u]===i&&r.seriesId[u]===n.seriesId)return{barIdx:u,rec:Wt(r,u,e.le.length,e.We,e.a.length)};let o=e.a.length,s=i*o+n.seriesId;if(!(e.wt[s>>3]>>(s&7)&1))return null;let l=e.te==="category"?e.S:null,a=e.We[s];return{barIdx:-1,rec:{catIdx:i,aggIdx:n.aggIdx,splitIdx:n.splitIdx,seriesId:n.seriesId,xCenter:l?l[i]:i,halfWidth:.5,y0:0,y1:a,value:a,axis:n.axis,chartType:"area"}}}function Ou(e,t,n){if(e.Wi=md(e,t),!e.f)return;let i=Ws(e,t);if(!i)return;let o=(e.a[t.seriesId]?.chartType??"bar")==="bar"?(t.y0+t.y1)/2:t.y1,s=t.axis===0?e.Ne?i.R(o,t.xCenter):i.R(t.xCenter,o):ro(e,t.xCenter,o,i),l=Ps(e,t);l.length!==0&&(e.v.pin(l,s,i,ie(e.t),n),e.xe=-1,e.Ce=null,e.i&&e.requestRender(e.i))}we();rs();we();wt();nn();lr();function Uu(e,t,n){return n||ce(e.isDate,t,e.dateModifiers)}function Ns(e,t,n,i,r,o,s){let{Pe:l,fontFamily:a}=o,{e:u}=t,m=r==="bottom"?u.y+u.height:u.y;e.fillStyle=l,e.font=`11px ${a}`,e.lineWidth=1,or(e,u,i,m,r,f=>t.R(f,0).px,Uu(n,i,s)),e.font=`13px ${a}`,e.textAlign="center",e.textBaseline="bottom",e.fillText(n.label,u.x+u.width/2,r==="bottom"?t.cssHeight-2:10)}function Os(e,t,n,i,r,o,s){let{Pe:l,fontFamily:a}=o,{e:u}=t,m=r==="left"?u.x:u.x+u.width;e.fillStyle=l,e.font=`11px ${a}`,e.lineWidth=1,sr(e,u,i,m,r,f=>t.R(0,f).py,Uu(n,i,s)),e.font=`13px ${a}`,e.save(),r==="left"?(e.translate(14,u.y+u.height/2),e.rotate(-Math.PI/2)):(e.translate(t.cssWidth-10,u.y+u.height/2),e.rotate(Math.PI/2)),e.textAlign="center",e.textBaseline="bottom",e.fillText(n.label,0,0),e.restore()}function oo(e,t,n,i,r,o){Ns(e,t,n,i,"bottom",r,o)}function so(e,t,n,i,r,o){Os(e,t,n,i,"left",r,o)}function lo(e,t,n,i,r,o,s,l=!1,a={}){let u=de(e,i,o);if(!u)return;let{e:m}=i;if(u.strokeStyle=r.yi,u.lineWidth=1,u.beginPath(),u.moveTo(m.x,m.y),u.lineTo(m.x,m.y+m.height),u.lineTo(m.x+m.width,m.y+m.height),s&&(l?(u.moveTo(m.x,m.y),u.lineTo(m.x+m.width,m.y)):(u.moveTo(m.x+m.width,m.y),u.lineTo(m.x+m.width,m.y+m.height))),u.stroke(),l){if(t.mode==="category"?Ge(u,i,t.domain,r):so(u,i,t.domain,t.ticks,r,a.category),n.mode==="category"?xe(u,i,n.domain,r):Ns(u,i,n.domain,n.ticks,"bottom",r,a.value),s)if(s.mode==="category")xe(u,i,s.domain,r);else{let f=i.H,c=i.K;i.H=s.domain.min,i.K=s.domain.max,Ns(u,i,s.domain,s.ticks,"top",r,a.alt),i.H=f,i.K=c}}else if(t.mode==="category"?xe(u,i,t.domain,r):oo(u,i,t.domain,t.ticks,r,a.category),n.mode==="category"?Ge(u,i,n.domain,r):Os(u,i,n.domain,n.ticks,"left",r,a.value),s)if(s.mode==="category")Ge(u,i,s.domain,r);else{let f=i.J,c=i.ie;i.J=s.domain.min,i.ie=s.domain.max,Os(u,i,s.domain,s.ticks,"right",r,a.alt),i.J=f,i.ie=c}}function ao(e,t,n,i,r,o=!1){let s=de(e,t,r);s&&(s.strokeStyle=i.In,s.lineWidth=1,o?Zt(s,t.e,n,l=>t.R(l,0).px):qt(s,t.e,n,l=>t.R(0,l).py))}nn();Ft();Xt();ir();wt();lr();Hn();He();var ft=null;function Hu(e){if(ft&&ft.xCenters.length>=e&&ft.colors.length>=e*3)return ft;let t=Math.max(e,ft?.xCenters.length??0);return ft={xCenters:new Float32Array(t),halfWidths:new Float32Array(t),y0s:new Float32Array(t),y1s:new Float32Array(t),seriesIds:new Float32Array(t),axes:new Float32Array(t),colors:new Float32Array(t*3)},ft}function no(e,t){let n=e.be,i=n.count,r=e.le.length,o=e.Zt&&r>0,s=0;if(e.Ni=null,e.Xn=null,e.$n=null,i>0){let a=Hu(i);(!e.jn||e.jn.length<i)&&(e.jn=new Int32Array(i));let u=e.jn,m=e.ge,f=e.a,c=e.re,p=n.chartType,b=n.seriesId,g=n.xCenter,h=n.halfWidth,y=n.y0,C=n.y1,_=n.axis,x=Math.max(1,e.Ke.length),v=o?w=>w%r*x+Math.floor(w/r):w=>r>0?Math.floor(w/r):w,A=o?r*x:x,T=new Array(A).fill(0);for(let w=0;w<i;w++)p[w]!==Ds||c.has(b[w])||T[v(b[w])]++;let L=[],D=new Int32Array(A),M=0;for(let w=0;w<A;w++)L.push({start:M,count:T[w]}),D[w]=M,M+=T[w];o?(e.$n=null,e.Xn=Array.from({length:r},(w,I)=>L.slice(I*x,(I+1)*x)),e.Ni=Array.from({length:r},(w,I)=>{let G=L[I*x],E=L[(I+1)*x-1];return{start:G.start,count:E.start+E.count-G.start}})):(e.$n=L,e.Xn=null);let P=w=>D[v(w)]++;for(let w=0;w<i;w++){if(p[w]!==Ds)continue;let I=b[w];if(c.has(I))continue;let G=P(I);a.xCenters[G]=g[w]-m,a.halfWidths[G]=h[w],a.y0s[G]=y[w],a.y1s[G]=C[w],a.seriesIds[G]=I,a.axes[G]=_[w];let E=f[I].color;a.colors[G*3]=E[0],a.colors[G*3+1]=E[1],a.colors[G*3+2]=E[2],u[G]=w,s++}}else o&&(e.Ni=Array.from({length:r},()=>({start:0,count:0})));if(e.Yn=s,s===0){e.Je=null;return}let l=ft;t.L.ensureCapacity(s),t.L.upload("bar_x",l.xCenters.subarray(0,s),0,1),t.L.upload("bar_hw",l.halfWidths.subarray(0,s),0,1),t.L.upload("bar_y0",l.y0s.subarray(0,s),0,1),t.L.upload("bar_y1",l.y1s.subarray(0,s),0,1),t.L.upload("bar_sid",l.seriesIds.subarray(0,s),0,1),t.L.upload("bar_axis",l.axes.subarray(0,s),0,1),t.L.upload("bar_color",l.colors.subarray(0,s*3),0,3),(!e.Je||e.Je.length<s*3)&&(e.Je=new Float32Array(Math.max(s*3,e.Je?.length??0))),e.Je.set(l.colors.subarray(0,s*3))}function fd(e,t){let n=e.Yn;if(n===0)return;let i=e.jn,r=e.a,o=e.be.seriesId,s=Hu(n);for(let a=0;a<n;a++){let u=r[o[i[a]]].color;s.colors[a*3]=u[0],s.colors[a*3+1]=u[1],s.colors[a*3+2]=u[2]}let l=e.Je;if(l&&l.length>=n*3){let a=!0;for(let u=0;u<n*3;u++)if(l[u]!==s.colors[u]){a=!1;break}if(a)return}t.L.upload("bar_color",s.colors.subarray(0,n*3),0,3),(!l||l.length<n*3)&&(e.Je=new Float32Array(n*3)),e.Je.set(s.colors.subarray(0,n*3))}function Vu(e){e.X.lines.invalidateBuffers(e),e.X.scatter.invalidateBuffers(e),e.X.areas.invalidateBuffers(e)}function io(e,t){e.X.lines.rebuildBuffers(e,t),e.X.scatter.rebuildBuffers(e,t),e.X.areas.rebuildBuffers(e,t)}function zu(e,t){let n=t.gl,i=t.dpr,r=n.canvas.width/i,o=n.canvas.height/i;if(r<=0||o<=0||e.j===0)return;let s=e.A();Us(e)&&e.Yn>0&&fd(e,t);let l=e.Ne,a=e.te==="numeric",u=e.S,m=a?e.M.min:u?u[0]-.5:-.5,f=a?e.M.max:u?u[e.j-1]+.5:e.j-.5,c=e.Lr.min,p=e.Lr.max;e.C&&(l?e.C.setBaseDomain(c,p,m,f):e.C.setBaseDomain(m,f,c,p));let b=m,g=f,h=c,y=p,C=e.ae?.min??0,_=e.ae?.max??1;if(e.C){let N=e.C.getVisibleDomain();l?(h=N.xMin,y=N.xMax,b=N.yMin,g=N.yMax):(b=N.xMin,g=N.xMax,h=N.yMin,y=N.yMax)}let x=l?!e.C?.isYDefault():!e.C?.isXDefault();if(e.Ti&&e.C&&x){let N=Cd(e,b,g);N.hasLeft&&(h=N.leftMin,y=N.leftMax),e.ae&&N.hasRight&&(C=N.rightMin,_=N.rightMax)}if(e.t.include_zero&&(h>0&&(h=0),y<0&&(y=0),e.ae&&(C>0&&(C=0),_<0&&(_=0))),e.Zt&&e.le.length>1){dd(e,t,{horizontal:l,numericCat:a,cssWidth:r,cssHeight:o,visCatMin:b,visCatMax:g,visValMin:h,visValMax:y,visRightMin:C,visRightMax:_});return}e.g=null;let v=e.a.length>1,A=e.qt.length>0,T={levels:e.Fe,numRows:e.j,levelLabels:e.qt.slice(),positions:ju(e)},L=e.An,D=e.Zn==="category"&&L!==null&&L.numRows>0,M;if(l){let N=a?55:tn(T),H=N+(A?16:0),z=nt(e.t,v,80,e.a.length),K=Math.max(1,r-H-z),ue=D?Ye(L,K):void 0;M=new re(r,o,{hasXLabel:!0,hasYLabel:A,hasLegend:v,leftExtra:N,bottomExtra:ue,rightExtra:z})}else if(a){let N=D?tn(L):void 0;M=new re(r,o,{hasXLabel:A,hasYLabel:!0,hasLegend:v,bottomExtra:24,leftExtra:N,rightExtra:nt(e.t,v,80,e.a.length)})}else{let N=D?tn(L):55,H=N+16,z=nt(e.t,v,80,e.a.length),K=Math.max(1,r-H-z),ue=Ye(T,K);M=new re(r,o,{hasXLabel:A,hasYLabel:!0,hasLegend:v,bottomExtra:ue,leftExtra:D?N:void 0,rightExtra:z})}e.f=M,e.C&&e.C.updateLayout(M);let P=e.t.include_zero,w=l?M.buildProjectionMatrix(h,y,g,b,"x",P,void 0,0,e.ge):M.buildProjectionMatrix(b,g,h,y,"y",P,void 0,e.ge,0),I;if(e._n&&e.ae&&!l){let N=M.H,H=M.K,z=M.J,K=M.ie;I=M.buildProjectionMatrix(b,g,C,_,"y",P,void 0,e.ge,0),M.H=N,M.K=H,M.J=z,M.ie=K}else I=w;let G=J(h,y,6),E=e._n&&e.ae&&!l?J(C,_,6):null,S=T,k={min:h,max:y,label:e.Tr},B=e.ae&&!l?{min:C,max:_,label:e.yo}:null;e.ne&&ao(e.ne,M,G,s,t.dpr,l);let V=e.a.length>1?bn(e):null;ot(n,M,t.dpr,()=>{Yu(e,n,t,w,I,s.xi,l,V?V.seriesId:-1)}),e.oe=S,e.Q=k,e.fe=G,e.qn=B,e.Kn=E,e.Oe=a?J(b,g,6):null,e.Me(()=>uo(e))}function Yu(e,t,n,i,r,o,s,l,a){let u=e.jt,m=u.length<=1;for(let f of u){let c=m?void 0:{start:f.aggStart,end:f.aggEnd};switch(f.chartType){case"area":s||e.X.areas.draw(e,t,n,i,r,o,a,c);break;case"bar":{t.useProgram(e.r);let p=e.B;t.uniformMatrix4fv(p.u_proj_left,!1,i),t.uniformMatrix4fv(p.u_proj_right,!1,r),t.uniform1f(p.u_horizontal,s?1:0),t.uniform1f(p.u_hover_series,l),Bu(e,t,n,cd(e,f,a));break}case"line":s||e.X.lines.draw(e,t,n,i,r,a,c);break;case"scatter":s||e.X.scatter.draw(e,t,n,i,r,a,c);break}}}function cd(e,t,n){let i=n!==void 0?e.Xn?.[n]:e.$n;if(!i)return n!==void 0?{start:0,count:0}:void 0;let r=i[t.aggStart],o=i[t.aggEnd];return{start:r.start,count:o.start+o.count-r.start}}function dd(e,t,n){let i=t.gl,r=t.dpr,o=e.A(),{horizontal:s,numericCat:l,cssWidth:a,cssHeight:u,visCatMin:m,visCatMax:f,visValMin:c,visValMax:p,visRightMin:b,visRightMax:g}=n,h=e.qt.length>0,y=e.An,C=e.Zn==="category"&&y!==null&&y.numRows>0,_=e.Ke.length>1,x=l?"outer":"cell",v=C?"cell":"outer",A=Be(e.le,{cssWidth:a,cssHeight:u,xAxis:s?v:x,yAxis:s?x:v,hasLegend:_&&le(e.t,e.Ke.length)==="sidebar",legendWidth:Me(e.t,96),hasXLabel:s?!0:h,hasYLabel:s?h:!0,gap:e.W.facet_padding});if(e.g=A,e.f=A.cells[0]?.layout??null,A.cells.length===0||!e.f)return;e.syncFacetZoomLayouts(A.cells);let T=J(c,p,6),L=l?J(m,f,6):null,D=A.cells[0].layout,M=e.ne;M&&e.Me(()=>de(M,D,r));let P=e.t.include_zero,w=e.a.length>1?bn(e):null,I=e._n&&e.ae!==null&&!s;Lt(i);for(let G=0;G<A.cells.length;G++){let S=A.cells[G].layout,k=s?S.buildProjectionMatrix(c,p,f,m,"x",P,void 0,0,e.ge):S.buildProjectionMatrix(m,f,c,p,"y",P,void 0,e.ge,0),B=k;if(I){let V=S.H,N=S.K,H=S.J,z=S.ie;B=S.buildProjectionMatrix(m,f,b,g,"y",P,void 0,e.ge,0),S.H=V,S.K=N,S.J=H,S.ie=z}M&&e.Me(()=>pd(M,S,T,o,r,s)),Tt(i,S,r,()=>{Yu(e,i,t,k,B,o.xi,s,w&&w.splitIdx===G?w.seriesId:-1,G)})}e.oe={levels:e.Fe,numRows:e.j,levelLabels:e.qt.slice(),positions:ju(e)},e.Q={min:c,max:p,label:e.Tr},e.fe=T,e.qn=null,e.Kn=null,e.Oe=L,e.Me(()=>uo(e))}function pd(e,t,n,i,r,o){let s=ae(e,r);s&&(s.strokeStyle=i.In,s.lineWidth=1,o?Zt(s,t.e,n,l=>t.R(l,0).px):qt(s,t.e,n,l=>t.R(0,l).py))}function Ws(e,t){return e.g?e.g.cells[t.splitIdx]?.layout??null:e.f}function uo(e){bd(e),e.presentOverlay()}function bd(e){if(!e.l||!e.f||!e.Q||!e.fe)return;if(e.g){gd(e);return}let t=e.A(),n;if(e.te==="numeric"&&e.M&&e.Oe)n={mode:"numeric",domain:{min:e.M.min,max:e.M.max,isDate:e.M.isDate,label:e.M.label,dateModifiers:e.M.dateModifiers},ticks:e.Oe};else if(e.oe)n={mode:"category",domain:e.oe};else return;let i=e.a.find(a=>a.axis===0),r=e.a.find(a=>a.axis===1),o=e.p[0],s=e.Zn==="category"&&e.An?{mode:"category",domain:e.An}:{mode:"numeric",domain:e.Q,ticks:e.fe},l;e.qn&&e.Kn&&(l=e.xo==="category"&&e.Mr?{mode:"category",domain:e.Mr}:{mode:"numeric",domain:e.qn,ticks:e.Kn}),lo(e.l,n,s,e.f,t,e.i?.dpr??1,l,e.Ne,{value:e.getColumnFormatter(i?.aggName??null,"tick"),alt:e.getColumnFormatter(r?.aggName??null,"tick"),category:e.getColumnFormatter(o,"tick")}),yd(e),bn(e)&&$u(e)}function gd(e){let t=e.g,n=e.l,i=e.A(),r=e.i?.dpr??1,o=e.Ne,s=e.qt.length>0,l=e.te==="numeric"&&e.M!==null&&e.Oe!==null;if(!de(n,e.f,r))return;let a=e.oe,u=e.Q,m=e.fe,f=e.An,c=e.Zn==="category"&&f!==null&&f.numRows>0,p=e.a.find(y=>y.axis===0),b=e.getColumnFormatter(p?.aggName??null,"tick"),g=e.getColumnFormatter(e.p[0],"tick");for(let y of t.cells){let C=y.layout,_=C.e,x=ae(n,r);x&&(x.strokeStyle=i.yi,x.lineWidth=1,x.beginPath(),x.moveTo(_.x,_.y),x.lineTo(_.x,_.y+_.height),x.lineTo(_.x+_.width,_.y+_.height),x.stroke(),o?(!l&&a&&Ge(x,C,a,i),c&&xe(x,C,f,i)):(!l&&a&&xe(x,C,a,i),c&&Ge(x,C,f,i)),y.titleRect&&Yt(n,y.label,y.titleRect,i,r))}let h=l?{min:e.M.min,max:e.M.max,isDate:e.M.isDate,label:e.M.label,dateModifiers:e.M.dateModifiers}:null;o?(h&&t.outerYAxisRect&&kn(n,t.outerYAxisRect,h,e.Oe,In(t),i,s,r,g),!c&&t.outerXAxisRect&&Gn(n,t.outerXAxisRect,u,m,Sn(t),i,!0,r,b)):(h&&t.outerXAxisRect&&Gn(n,t.outerXAxisRect,h,e.Oe,Sn(t),i,s,r,g),!c&&t.outerYAxisRect&&kn(n,t.outerYAxisRect,u,m,In(t),i,!0,r,b)),hd(e,t),bn(e)&&$u(e)}function Xu(e,t,n,i,r){let o=e.l.getContext("2d");if(!o)return;o.save();let s=e.A(),l=t;n.mode==="floating"&&(l=gr(o,t,s,n.title,n.opacity));let a=10,u=Mn,m=i*u,f=e.I.clampScroll(l.height,m),c=m>l.height,p=Math.max(0,l.width-a-6-(c?10:0));o.beginPath(),o.rect(l.x,l.y,l.width,l.height),o.clip(),o.font=`11px ${s.fontFamily}`,o.textAlign="left",o.textBaseline="middle";let b=l.x,g=Math.floor(f/u),h=l.y+u/2+g*u-f;for(let y=g;y<i&&h-u/2<l.y+l.height;y++){let C=r(y),_=Math.round(C.color[0]*255),x=Math.round(C.color[1]*255),v=Math.round(C.color[2]*255);o.globalAlpha=C.hidden?.3:1,o.fillStyle=`rgb(${_},${x},${v})`,o.fillRect(b,h-a/2,a,a);let A=St(o,C.label,p),T=o.measureText(A).width;o.fillStyle=s.pn,o.fillText(A,b+a+6,h),C.hidden&&(o.strokeStyle=s.pn,o.lineWidth=1,o.beginPath(),o.moveTo(b+a+6,h),o.lineTo(b+a+6+T,h),o.stroke()),o.globalAlpha=1,e.vn.push({seriesIds:C.seriesIds,rect:{x:b-2,y:h-u/2,width:Math.min(a+6+T+4,Math.max(1,l.width)),height:u}}),h+=u}o.restore(),ms(o,l,f,m,s),e.I.setPainted({mode:n.mode,box:t,content:l,contentHeight:m,sidebarGutter:n.sidebarGutter})}function hd(e,t){if(e.vn=[],!e.l||!e.f)return;let n=e.t,i=e.Ke.length,r=le(n,i),o=r==="floating";if(i<=1||r==="none"||!o&&!t.legendRect){e.I.clearPainted();return}let s=Array.from({length:i},()=>[]),l=Array.from({length:i},()=>[.5,.5,.5]);for(let m of e.a)m.aggIdx>=0&&m.aggIdx<i&&(s[m.aggIdx].push(m.seriesId),l[m.aggIdx]=m.color);let a=e.f,u=o?e.I.floatingBox(n,a.cssWidth,a.cssHeight,st(e.l,e.A(),i,()=>e.Ke.slice(0,i),{title:"Legend"})):{x:t.legendRect.x+12,y:t.legendRect.y+10,width:Math.max(1,t.legendRect.width-16),height:Math.max(1,t.legendRect.height-20)};Xu(e,u,{mode:o?"floating":"sidebar",legend:e.I,title:"Legend",sidebarGutter:o?void 0:t.legendRect.width,opacity:n.legend_opacity},i,m=>({label:e.Ke[m],color:l[m],seriesIds:s[m],hidden:s[m].every(f=>e.re.has(f))}))}function yd(e){if(e.vn=[],!e.l||!e.f)return;let t=e.t,n=e.a,i=le(t,n.length);if(n.length<=1||i==="none"){e.I.clearPainted();return}let r=e.f,o=i==="floating",s=xd(e),l=o?e.I.floatingBox(t,r.cssWidth,r.cssHeight,st(e.l,e.A(),n.length,function*(){for(let a of n)yield a.label},{title:s})):{x:r.e.x+r.e.width+12,y:r.margins.top+10,width:Math.max(1,r.cssWidth-r.e.x-r.e.width-16),height:Math.max(1,r.e.height-10)};Xu(e,l,{mode:o?"floating":"sidebar",legend:e.I,title:s,sidebarGutter:o?void 0:r.margins.right,opacity:t.legend_opacity},n.length,a=>({label:n[a].label,color:n[a].color,seriesIds:[n[a].seriesId],hidden:e.re.has(n[a].seriesId)}))}function xd(e){return(e.ki?[...e.P,e.p[e.p.length-1]]:e.P).join(" / ")||"Legend"}function $u(e){if(!e.l||!e.f)return;let t=bn(e);if(!t)return;let n=Ws(e,t);if(!n)return;let r=(e.a[t.seriesId]?.chartType??"bar")==="bar"?(t.y0+t.y1)/2:t.y1,o=t.axis===0?e.Ne?n.R(r,t.xCenter):n.R(t.xCenter,r):ro(e,t.xCenter,r,n),s=Ps(e,t),l=e.A(),a=e.i?.dpr??1,u=t.axis===0?e.Ne?n.R(t.y1,t.xCenter):n.R(t.xCenter,t.y1):ro(e,t.xCenter,t.y1,n),m=[],f;e.te==="numeric"&&e.S&&e.S[t.catIdx]!=null?f=(e.getColumnFormatter(e.p[0],"tick")??ce(e.M?.isDate,e.Oe,e.M?.dateModifiers))(e.S[t.catIdx]):f=Bs(e,t.catIdx),f!==""&&m.push({side:e.Ne?"left":"bottom",px:u.px,py:u.py,text:f});let c=t.axis===1?e.qn:e.Q,p=t.axis===1?e.Kn:e.fe,b=e.getColumnFormatter(e.a[t.seriesId]?.aggName,"tick")??ce(c?.isDate,p);m.push({side:e.Ne?"bottom":t.axis===1?"right":"left",px:u.px,py:u.py,text:b(t.y1)}),ze(e.l,n,l,a,m,e.t.tooltip_opacity),Ue(e.l,o,s,n,l,a,ie(e.t))}function ro(e,t,n,i){let r=i??e.f,{x:o,y:s,width:l,height:a}=r.e,u=(t-r.H)/(r.K-r.H),m=e.ae,f=(n-m.min)/(m.max-m.min);return{px:o+u*l,py:s+(1-f)*a}}function Cd(e,t,n){let i=e.Rt;if(i&&i.catMin===t&&i.catMax===n&&i.hidden===e.re)return i;let r=Ad(e),o=1/0,s=-1/0,l=!1,a=1/0,u=-1/0,m=!1;if(r.n>0){let c=e.S,p,b;if(c){let v=_d(c,r.n,t,n);p=v.lo,b=v.hi}else p=Math.max(0,Math.floor(t)),b=Math.min(r.n-1,Math.ceil(n));let g=r.leftMin,h=r.leftMax,y=r.rightMin,C=r.rightMax,_=r.hasLeft,x=r.hasRight;for(let v=p;v<=b;v++)_[v]&&(g[v]<o&&(o=g[v]),h[v]>s&&(s=h[v]),l=!0),x[v]&&(y[v]<a&&(a=y[v]),C[v]>u&&(u=C[v]),m=!0)}let f=i??vd();return f.catMin=t,f.catMax=n,f.hidden=e.re,f.leftMin=o,f.leftMax=s,f.hasLeft=l,f.rightMin=a,f.rightMax=u,f.hasRight=m,e.Rt=f,f}function _d(e,t,n,i){if(t===0||n>i)return{lo:0,hi:-1};let[r,o]=Qt(e,t,n,i);return{lo:Math.max(0,r-1),hi:Math.min(t-1,o+1)}}function ju(e){return e.te==="category"?e.S??void 0:void 0}function vd(){return{catMin:0,catMax:0,hidden:new Set,leftMin:0,leftMax:0,hasLeft:!1,rightMin:0,rightMax:0,hasRight:!1}}function Ad(e){let t=e.j,n=e.Co,i=n&&n.leftMin.length>=t;if(n&&i&&e.Gi===e.re)return n;!n||!i?(n={leftMin:new Float64Array(t),leftMax:new Float64Array(t),rightMin:new Float64Array(t),rightMax:new Float64Array(t),hasLeft:new Uint8Array(t),hasRight:new Uint8Array(t),n:t},e.Co=n):n.n=t;for(let g=0;g<t;g++)n.leftMin[g]=1/0,n.leftMax[g]=-1/0,n.rightMin[g]=1/0,n.rightMax[g]=-1/0,n.hasLeft[g]=0,n.hasRight[g]=0;let r=e.be,o=e.re,s=r.catIdx,l=r.seriesId,a=r.y0,u=r.y1,m=r.axis;for(let g=0;g<r.count;g++){if(o.has(l[g]))continue;let h=s[g];if(h<0||h>=t)continue;let y=a[g],C=u[g],_=y<C?y:C,x=y<C?C:y;m[g]===1?(_<n.rightMin[h]&&(n.rightMin[h]=_),x>n.rightMax[h]&&(n.rightMax[h]=x),n.hasRight[h]=1):(_<n.leftMin[h]&&(n.leftMin[h]=_),x>n.leftMax[h]&&(n.leftMax[h]=x),n.hasLeft[h]=1)}let f=[e.Jn,e.Qn],c=e.We,p=e.wt,b=e.a.length;for(let g of f)for(let h of g){if(o.has(h.seriesId))continue;let y=h.axis===1,C=h.seriesId;for(let _=0;_<t;_++){let x=_*b+C;if(!(p[x>>3]>>(x&7)&1))continue;let v=c[x];y?(v<n.rightMin[_]&&(n.rightMin[_]=v),v>n.rightMax[_]&&(n.rightMax[_]=v),n.hasRight[_]=1):(v<n.leftMin[_]&&(n.leftMin[_]=v),v>n.leftMax[_]&&(n.leftMax[_]=v),n.hasLeft[_]=1)}}return e.Gi=o,n}Dn();ke();pe();var Jn=new Float32Array(0),Qn=new Uint8Array(0);function Ld(e){return Jn.length>=e||(Jn=new Float32Array(Math.max(e,Jn.length*2))),Jn}function Td(e){return Qn.length>=e||(Qn=new Uint8Array(Math.max(e,Qn.length*2))),Qn}function Md(e){return e==="solid"?1:e==="transparent"?.5:0}var mo=class{constructor(){d(this,"r",null);d(this,"o",null)}ensureProgram(t){if(this.r)return this.r;let n=at(t.gl),i=Z(t,"bar-line",Ke,Je,["u_projection","u_color","u_resolution","u_line_width","u_interp_alpha"],["a_start","a_end","a_corner","a_real_start","a_real_end"]);return this.r={...i,cornerBuffer:n},this.r}invalidateBuffers(t){let n=this.o;if(!n||!t.i){this.o=null;return}let i=t.i.gl;for(let r of n.series)i.deleteBuffer(r.gpuBuffer),i.deleteBuffer(r.gpuRealBuffer);this.o=null}rebuildBuffers(t,n){let i=t.Jn;if(i.length===0){this.o=null;return}if(t.j===0){this.o=null;return}this.ensureProgram(n);let o=n.gl,s=t.We,l=t.wt,a=t.ge,u=t.S,m=t.a.length,f=[];for(let c of i){let p=t.a[c.seriesId],b=p.start,g=p.end;if(b<0||g<b)continue;let h=g-b+1;if(h<2)continue;let y=Ld(h*2),C=Td(h),_=0;for(let A=b;A<=g;A++){let T=u?u[A]-a:A,L=A*m+c.seriesId;y[_*2]=T,y[_*2+1]=s[L],C[_]=l[L>>3]>>(L&7)&1,_++}let x=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,x),o.bufferData(o.ARRAY_BUFFER,y.subarray(0,_*2),o.STATIC_DRAW);let v=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,v),o.bufferData(o.ARRAY_BUFFER,C.subarray(0,_),o.STATIC_DRAW),f.push({seriesId:c.seriesId,axis:c.axis,color:[c.color[0],c.color[1],c.color[2]],gpuBuffer:x,gpuRealBuffer:v,count:h,interpolateMode:p.interpolateMode})}this.o={series:f}}draw(t,n,i,r,o,s,l){let a=this.o,u=this.r;if(!a||!u||a.series.length===0)return;let m=i.dpr;n.useProgram(u.program),n.uniform2f(u.u_resolution,n.canvas.width,n.canvas.height),n.uniform1f(u.u_line_width,t.t.line_width_px*m);let f=ee(i),{setDivisor:c,drawArraysInstanced:p}=f;n.bindBuffer(n.ARRAY_BUFFER,u.cornerBuffer),n.enableVertexAttribArray(u.a_corner),n.vertexAttribPointer(u.a_corner,1,n.FLOAT,!1,0,0),c(u.a_corner,0);let b=2*Float32Array.BYTES_PER_ELEMENT,g=Uint8Array.BYTES_PER_ELEMENT,h=t.re;for(let y of a.series){if(h.has(y.seriesId)||s!==void 0&&t.a[y.seriesId].splitIdx!==s)continue;let C=t.a[y.seriesId].aggIdx;if(l!==void 0&&(C<l.start||C>l.end))continue;n.uniformMatrix4fv(u.u_projection,!1,y.axis===1?o:r);let _=t.a[y.seriesId].color;n.uniform4f(u.u_color,_[0],_[1],_[2],1),n.uniform1f(u.u_interp_alpha,Md(y.interpolateMode)),n.enableVertexAttribArray(u.a_start),c(u.a_start,1),n.enableVertexAttribArray(u.a_end),c(u.a_end,1),n.enableVertexAttribArray(u.a_real_start),c(u.a_real_start,1),n.enableVertexAttribArray(u.a_real_end),c(u.a_real_end,1),n.bindBuffer(n.ARRAY_BUFFER,y.gpuBuffer),n.vertexAttribPointer(u.a_start,2,n.FLOAT,!1,b,0),n.vertexAttribPointer(u.a_end,2,n.FLOAT,!1,b,b),n.bindBuffer(n.ARRAY_BUFFER,y.gpuRealBuffer),n.vertexAttribPointer(u.a_real_start,1,n.UNSIGNED_BYTE,!1,g,0),n.vertexAttribPointer(u.a_real_end,1,n.UNSIGNED_BYTE,!1,g,g),p(n.TRIANGLE_STRIP,0,4,y.count-1)}c(u.a_start,0),c(u.a_end,0),c(u.a_real_start,0),c(u.a_real_end,0)}destroy(t){let n=t.i?.gl;if(n){this.invalidateBuffers(t);let i=this.r;i&&n.deleteBuffer(i.cornerBuffer)}this.r=null,this.o=null}};pe();var Ze=new Float32Array(0),Re=new Float32Array(0);function wd(e){Ze.length<e*2&&(Ze=new Float32Array(Math.max(e*2,Ze.length*2))),Re.length<e*3&&(Re=new Float32Array(Math.max(e*3,Re.length*2)))}var fo=class{constructor(){d(this,"r",null);d(this,"o",null)}ensureProgram(t){if(this.r)return this.r;let n=t.gl,i=Z(t,"bar-scatter",gi,hi,["u_projection","u_point_size"],["a_position","a_color"]);return this.r={...i,posLeftBuffer:n.createBuffer(),posRightBuffer:n.createBuffer(),colorLeftBuffer:n.createBuffer(),colorRightBuffer:n.createBuffer()},this.r}invalidateBuffers(t){this.o=null}rebuildBuffers(t,n){let i=t.Qn;if(i.length===0){this.o=null;return}let r=t.j,o=t.a.length;if(r===0||o===0){this.o=null;return}let s=this.ensureProgram(n),l=n.gl,a=t.We,u=t.wt,m=t.S,f=t.ge,c=t.re,p=0,b=0;for(let _ of i)if(!c.has(_.seriesId))for(let x=0;x<r;x++){let v=x*o+_.seriesId;u[v>>3]>>(v&7)&1&&(_.axis===1?b++:p++)}let g=p+b;if(g===0){this.o=null;return}wd(g);let h=[],y=0,C=p;for(let _ of i){if(c.has(_.seriesId))continue;let x=_.axis===1?C-p:y,v=_.color[0],A=_.color[1],T=_.color[2];for(let D=0;D<r;D++){let M=D*o+_.seriesId;if(!(u[M>>3]>>(M&7)&1))continue;let P=m?m[D]-f:D,w=a[M];_.axis===1?(Ze[C*2]=P,Ze[C*2+1]=w,Re[C*3]=v,Re[C*3+1]=A,Re[C*3+2]=T,C++):(Ze[y*2]=P,Ze[y*2+1]=w,Re[y*3]=v,Re[y*3+1]=A,Re[y*3+2]=T,y++)}let L=_.axis===1?C-p:y;L>x&&h.push({seriesId:_.seriesId,axis:_.axis,first:x,count:L-x})}p>0&&(l.bindBuffer(l.ARRAY_BUFFER,s.posLeftBuffer),l.bufferData(l.ARRAY_BUFFER,Ze.subarray(0,p*2),l.STATIC_DRAW),l.bindBuffer(l.ARRAY_BUFFER,s.colorLeftBuffer),l.bufferData(l.ARRAY_BUFFER,Re.subarray(0,p*3),l.STATIC_DRAW)),b>0&&(l.bindBuffer(l.ARRAY_BUFFER,s.posRightBuffer),l.bufferData(l.ARRAY_BUFFER,Ze.subarray(p*2,g*2),l.STATIC_DRAW),l.bindBuffer(l.ARRAY_BUFFER,s.colorRightBuffer),l.bufferData(l.ARRAY_BUFFER,Re.subarray(p*3,g*3),l.STATIC_DRAW)),this.o={leftCount:p,rightCount:b,seriesRanges:h}}draw(t,n,i,r,o,s,l){let a=this.o,u=this.r;if(!a||!u||a.leftCount===0&&a.rightCount===0)return;let m=i.dpr;if(n.useProgram(u.program),n.uniform1f(u.u_point_size,t.t.point_size_px*m),s!==void 0||l!==void 0){for(let f of a.seriesRanges){if(s!==void 0&&t.a[f.seriesId].splitIdx!==s)continue;let c=t.a[f.seriesId].aggIdx;l!==void 0&&(c<l.start||c>l.end)||Hs(n,u,f.axis===1?u.posRightBuffer:u.posLeftBuffer,f.axis===1?u.colorRightBuffer:u.colorLeftBuffer,f.count,f.axis===1?o:r,f.first)}return}Hs(n,u,u.posLeftBuffer,u.colorLeftBuffer,a.leftCount,r),Hs(n,u,u.posRightBuffer,u.colorRightBuffer,a.rightCount,o)}destroy(t){let n=t.i?.gl;if(n){let i=this.r;i&&(n.deleteBuffer(i.posLeftBuffer),n.deleteBuffer(i.posRightBuffer),n.deleteBuffer(i.colorLeftBuffer),n.deleteBuffer(i.colorRightBuffer))}this.r=null,this.o=null}};function Hs(e,t,n,i,r,o,s=0){r!==0&&(e.uniformMatrix4fv(t.u_projection,!1,o),e.bindBuffer(e.ARRAY_BUFFER,n),e.enableVertexAttribArray(t.a_position),e.vertexAttribPointer(t.a_position,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,i),e.enableVertexAttribArray(t.a_color),e.vertexAttribPointer(t.a_color,3,e.FLOAT,!1,0,0),e.drawArrays(e.POINTS,s,r))}pe();var ei=new Float32Array(0);function Rd(e){return ei.length>=e||(ei=new Float32Array(Math.max(e,ei.length*2))),ei}var co=class{constructor(){d(this,"r",null);d(this,"o",null)}ensureProgram(t){return this.r?this.r:(this.r=Z(t,"bar-area",pi,bi,["u_projection","u_color","u_opacity"],["a_position"]),this.r)}invalidateBuffers(t){let n=this.o;if(!n||!t.i){this.o=null;return}let i=t.i.gl;for(let r of n.series)i.deleteBuffer(r.gpuBuffer);this.o=null}rebuildBuffers(t,n){let i=t.Oi;if(i.length===0){this.o=null;return}let r=t.j,o=t.a.length;if(r===0||o===0){this.o=null;return}this.ensureProgram(n);let s=n.gl,l=t.We,a=t.wt,u=t.S,m=t.ge,f=t.wr,c=t.be,p=[];for(let b of i){let g=t.a[b.seriesId],h=Fd(b,r,o,l,a,f,c.y0,c.y1,u,m,g.start,g.end,g.interpolateMode);if(h.totalVertices===0)continue;let y=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,y),s.bufferData(s.ARRAY_BUFFER,h.scratch.subarray(0,h.totalVertices*2),s.STATIC_DRAW),p.push({seriesId:b.seriesId,axis:b.axis,color:[b.color[0],b.color[1],b.color[2]],gpuBuffer:y,strips:h.descriptors})}this.o={series:p}}draw(t,n,i,r,o,s,l,a){let u=this.o,m=this.r;if(!u||!m||u.series.length===0)return;n.useProgram(m.program),n.uniform1f(m.u_opacity,s);let f=t.re;for(let c of u.series){if(f.has(c.seriesId)||l!==void 0&&t.a[c.seriesId].splitIdx!==l)continue;let p=t.a[c.seriesId].aggIdx;if(a!==void 0&&(p<a.start||p>a.end))continue;n.uniformMatrix4fv(m.u_projection,!1,c.axis===1?o:r);let b=t.a[c.seriesId].color;n.uniform3f(m.u_color,b[0],b[1],b[2]),n.bindBuffer(n.ARRAY_BUFFER,c.gpuBuffer),n.enableVertexAttribArray(m.a_position),n.vertexAttribPointer(m.a_position,2,n.FLOAT,!1,0,0);for(let g of c.strips)n.bindBuffer(n.ARRAY_BUFFER,c.gpuBuffer),n.vertexAttribPointer(m.a_position,2,n.FLOAT,!1,0,g.offsetBytes),n.drawArrays(n.TRIANGLE_STRIP,0,g.vertexCount)}}destroy(t){this.invalidateBuffers(t),this.r=null}};function Fd(e,t,n,i,r,o,s,l,a,u,m,f,c){let p=Rd(t*4),b=[],g=e.seriesId*1e9,h=c!=="skip",y=0,C=0;for(let _=0;_<t;_++){let x=0,v=0,A=!1;if(e.stack){let T=o?.get(g+_);T!==void 0&&(x=s[T],v=l[T],A=!0)}else{let T=_*n+e.seriesId;h?_>=m&&_<=f&&(v=i[T],A=!0):r[T>>3]>>(T&7)&1&&(v=i[T],A=!0)}if(A){let T=a?a[_]-u:_;p[y++]=T,p[y++]=x,p[y++]=T,p[y++]=v}else if(y>C){let T=(y-C)/2;T>=4&&b.push({offsetBytes:C*4,vertexCount:T}),C=y}}if(y>C){let _=(y-C)/2;_>=4&&b.push({offsetBytes:C*4,vertexCount:_})}return{descriptors:b,totalVertices:y/2,scratch:p}}ke();pe();function ti(e,t){return e&&(t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max)),{min:t.min,max:t.max}}function Ku(){return{categoryOf:new Int32Array(0),valueOf:new Int32Array(0),firstRowOf:new Int32Array(0),sourceRow:new Int32Array(0),slots:[]}}function Ju(e,t,n,i,r,o){let s=n.length;if(s<2)return null;let l=e.get(`__ROW_PATH_${s-1}__`);if(!l)return null;let a=[];for(let E=0;E<s-1;E++){let S=e.get(`__ROW_PATH_${E}__`);if(!S)return null;a.push(S)}let u=o.categoryOf=po(o.categoryOf,t),m=o.firstRowOf=po(o.firstRowOf,t),f=new Map,c=0;for(let E=0;E<t;E++){if(E>0&&Sd(a,E,E-1)){u[E]=u[E-1];continue}let S=Id(a,E),k=f.get(S);k===void 0&&(k=c++,f.set(S,k),m[k]=E),u[E]=k}let p=o.valueOf=po(o.valueOf,t),b=[],g=[],h=i[s-1]??"string",y=-1,C=()=>(y===-1&&(y=b.length,b.push(""),g.push(l.type==="string"?"":Number.NEGATIVE_INFINITY)),y);if(l.type==="string"&&l.indices&&l.dictionary){let E=l.indices,S=l.dictionary,k=new Int32Array(S.length).fill(-1);for(let B=0;B<t;B++){if(!gn(l,B)){p[B]=C();continue}let V=E[B],N=k[V];if(N===-1){N=b.length,k[V]=N;let H=S[V]??"";b.push(H),g.push(H)}p[B]=N}}else{let E=l.values,S=new Map,k=new Map;for(let B=0;B<t;B++){if(!gn(l,B)){p[B]=C();continue}let V=E[B],N=S.get(V);if(N===void 0){let H=xs(V,!0,h,r);N=k.get(H),N===void 0&&(N=b.length,k.set(H,N),b.push(H),g.push(V)),S.set(V,N)}p[B]=N}}let _=b.map((E,S)=>S).sort((E,S)=>{let k=g[E],B=g[S];return typeof k=="number"&&typeof B=="number"?k-B:k<B?-1:k>B?1:0}),x=new Int32Array(_.length);for(let E=0;E<_.length;E++)x[_[E]]=E;let v=_.map(E=>b[E]),A=v.length,T=o.sourceRow=po(o.sourceRow,c*A);T.fill(-1,0,c*A);for(let E=0;E<t;E++){let S=x[p[E]];p[E]=S;let k=u[E]*A+S;T[k]===-1&&(T[k]=E)}let L=[];for(let[E,S]of e)E.startsWith("__")||L.push({name:E,col:S});let D=new Map,M=new Map,P=c+7>>3,w=0;for(let E=0;E<s-1;E++){let S=a[E],k=Zu(o,w++,S,c),B=bo(S);for(let V=0;V<c;V++){let N=m[V];k.data[V]=B[N],gn(S,N)&&(k.valid[V>>3]|=1<<(V&7))}D.set(`__ROW_PATH_${E}__`,qu(S,k,c,P))}let I=w,G=[];for(let E=0;E<L.length;E++){let{name:S,col:k}=L[E],B=S.lastIndexOf("|"),V=B===-1?"":S.substring(0,B),N=B===-1?S:S.substring(B+1);for(let H=0;H<A;H++){let z=Zu(o,I+E*A+H,k,c);G.push(z);let K=V===""?v[H]:`${V}|${v[H]}`;D.set(`${K}|${N}`,qu(k,z,c,P)),M.set(K,{value:H,facet:V})}}for(let E=0;E<L.length;E++){let S=L[E].col,k=bo(S),B=S.valid;for(let V=0;V<t;V++){let N=u[V],H=p[V];if(T[N*A+H]!==V)continue;let z=G[E*A+H];z.data[N]=k[V],(!B||B[V>>3]>>(V&7)&1)&&(z.valid[N>>3]|=1<<(N&7))}}return{columns:D,numRows:c,groupBy:n.slice(0,s-1),values:v,sourceRow:T,prefixes:M}}function gn(e,t){let n=e.valid;return!n||(n[t>>3]>>(t&7)&1)===1}function bo(e){return e.type==="string"?e.indices:e.values}function Sd(e,t,n){for(let i of e){let r=gn(i,t);if(r!==gn(i,n))return!1;if(r){let o=bo(i);if(o[t]!==o[n])return!1}}return!0}function Id(e,t){let n="";for(let i of e)n+=gn(i,t)?`${bo(i)[t]}\\0`:"";return n}function po(e,t){return e.length>=t?e:new Int32Array(t)}function Zu(e,t,n,i){let r=n.type==="float64"?Float64Array:n.type==="float32"?Float32Array:Int32Array,o=e.slots[t];return!o||!(o.data instanceof r)||o.data.length<i?(o={data:new r(i),valid:new Uint8Array(i+7>>3)},e.slots[t]=o):o.valid.length<i+7>>3&&(o.valid=new Uint8Array(i+7>>3)),o.data.fill(0,0,i),o.valid.fill(0,0,i+7>>3),o}function qu(e,t,n,i){let r=t.valid.subarray(0,i);return e.type==="string"?{type:"string",indices:t.data.subarray(0,n),dictionary:e.dictionary,valid:r}:{type:e.type,values:t.data.subarray(0,n),valid:r}}var ct=class extends pn{constructor(n="vertical"){super();d(this,"Ne");d(this,"B",null);d(this,"Ke",[]);d(this,"le",[]);d(this,"a",[]);d(this,"qt",[]);d(this,"ki",null);d(this,"Vo",Ku());d(this,"Zt",!1);d(this,"g",null);d(this,"Ni",null);d(this,"jt",[]);d(this,"$n",null);d(this,"Xn",null);d(this,"be",eo());d(this,"Rr",[]);d(this,"Jn",[]);d(this,"Qn",[]);d(this,"Oi",[]);d(this,"Tr","");d(this,"yo","");d(this,"Zn","numeric");d(this,"xo",null);d(this,"An",null);d(this,"Mr",null);d(this,"wr",null);d(this,"Je",null);d(this,"Ui",null);d(this,"Hi",null);d(this,"Fr",null);d(this,"Sr",null);d(this,"Lr",{min:0,max:1});d(this,"ae",null);d(this,"_n",!1);d(this,"ei",null);d(this,"ti",null);d(this,"Vi",null);d(this,"te","category");d(this,"M",null);d(this,"ge",0);d(this,"Oe",null);d(this,"S",null);d(this,"re",new Set);d(this,"xe",-1);d(this,"Ar",-1);d(this,"Wi",null);d(this,"Ce",null);d(this,"We",new Float32Array(0));d(this,"wt",new Uint8Array(0));d(this,"X",{lines:new mo,scatter:new fo,areas:new co});d(this,"qn",null);d(this,"Kn",null);d(this,"Yn",0);d(this,"jn",new Int32Array(0));d(this,"vn",[]);d(this,"ho",!1);d(this,"Rt",null);d(this,"Co",null);d(this,"Gi",null);this.Ne=n==="horizontal"}getZoomConfig(){return{lockAxis:this.Ne?"x":"y"}}repaintChrome(){uo(this)}tooltipCallbacks(){return{onHover:(n,i)=>to(this,n,i),onLeave:()=>{(this.xe!==-1||this.Ce)&&(this.xe=-1,this.Ce=null,this.i&&this.requestRender(this.i))},onClickPre:(n,i)=>ku(this,n,i),onPin:(n,i)=>{if(to(this,n,i),this.xe>=0){let r=this.xe;Gs(this,r);let o=Wt(this.be,r,this.le.length,this.We,this.a.length);this._o(o)}else if(this.Ce){let r=this.Ce;ks(this,r),this._o(r)}},onUnpin:()=>{this.emitUnselect()}}}repin(){if(!this.Wi)return!1;let n=Nu(this,this.Wi);if(!n)return!1;let i=this.zi(n.rec),r=i?yt(i):void 0;return n.barIdx>=0?Gs(this,n.barIdx,r):ks(this,n.rec,r),!0}async _o(n){let i=this.zi(n);i&&await this.emitClickAndSelect(i)}clickTargetAt(n,i){if(to(this,n,i),this.xe>=0){let r=Wt(this.be,this.xe,this.le.length,this.We,this.a.length);return this.zi(r)}return this.Ce?this.zi(this.Ce):null}zi(n){if(!this.Ke[n.aggIdx])return null;let i=this.te==="numeric"&&this.S?[this.S[n.catIdx]??null]:this.Fe.map(l=>l.labels[n.catIdx]??null),r=this.le[n.splitIdx]??"",o=this.ki;if(o){let l=o.prefixes.get(r),a=o.values.length,u=l?o.sourceRow[(n.catIdx+this.tt)*a+l.value]:-1;return i.push(l?o.values[l.value]:null),{rowIdx:u>=0?u:null,columnName:this.Ke[n.aggIdx],groupByValues:i,splitByValues:l&&l.facet!==""?l.facet.split("|"):[]}}let s=this.P.length>0&&r!==""?r.split("|"):[];return{rowIdx:n.catIdx+this.tt,columnName:this.Ke[n.aggIdx],groupByValues:i,splitByValues:s}}async uploadAndRender(n,i,r,o){this.i=n;let s=n.gl;if(r!==0)return;if(!this.r){let c=Z(n,"bar",ai,ui,["u_proj_left","u_proj_right","u_hover_series","u_horizontal"],["a_corner","a_x_center","a_half_width","a_y0","a_y1","a_color","a_series_id","a_axis"]);this.r=c.program,this.B=c,this.Y=Ar(s)}let l=this.p.map(c=>this.st[c]??"string"),a=this.t.facet_mode==="last_group_by_grid"||this.t.facet_mode==="last_group_by_overlay"?Ju(i,o,this.p,l,this.Lt.get(this.p[this.p.length-1]),this.Vo):null;this.ki=a,this.qt=a?.groupBy??this.p;let u=a?[...this.P,this.p[this.p.length-1]]:this.P,m=u.length>0&&this.W.facet_mode==="grid",f=Pu({columns:a?.columns??i,numRows:a?.numRows??o,columnSlots:this.T,groupBy:this.qt,splitBy:u,groupByTypes:this.st,dateModifiers:this.Lt,columnsConfig:this.Pn,defaultChartType:this.vi,autoAltYAxis:this.t.auto_alt_y_axis,bandInnerFrac:this.t.band_inner_frac,barInnerPad:this.t.bar_inner_pad,groupPad:this.t.group_pad,includeZero:this.t.include_zero,facetSplits:m,scratchBars:this.be,scratchPosStack:this.Fr,scratchNegStack:this.Sr});if(this.t.domain_mode==="expand"){let c=Ed(f);this.Vi!==c&&(this.ei=null,this.ti=null,this.Vi=c),this.ei=ti(this.ei,f.leftDomain),f.rightDomain&&(this.ti=ti(this.ti,f.rightDomain))}else this.ei=null,this.ti=null,this.Vi=null;this.Ke=f.aggregates,this.le=f.splitPrefixes,this.Zt=m&&f.splitPrefixes.length>1,this.Fe=f.rowPaths,this.j=f.numCategories,this.tt=f.rowOffset,this.te=f.axisMode.mode,this.M=f.numericCategoryDomain,this.S=f.categoryPositions,this.ge=f.numericCategoryDomain?.min??0,this.a=f.series,this.be=f.bars,this.Fr=f.posStack,this.Sr=f.negStack,this.We=f.samples,this.Rr.length=0,this.Jn.length=0,this.Qn.length=0,this.Oi.length=0;for(let c of f.series)switch(c.chartType){case"bar":this.Rr.push(c);break;case"line":this.Jn.push(c);break;case"scatter":this.Qn.push(c);break;case"area":this.Oi.push(c);break}this.Tr=Qu(f.series,0),this.yo=Qu(f.series,1),this.jt.length=0;{let c=Math.max(1,f.splitPrefixes.length);for(let p=0;p<f.aggregates.length;p++){let b=f.series[p*c].chartType,g=this.jt[this.jt.length-1];g&&g.chartType===b?g.aggEnd=p:this.jt.push({chartType:b,aggStart:p,aggEnd:p})}}this.wr=Dd(this.be),this.Rt=null,this.ho=!1,this.Ui=null,this.Hi=null,this.Gi=null,this.Je=null,this.xe=-1,this.Ce=null,this.wt=f.sampleValid,this.Lr=f.leftDomain,this.ae=f.rightDomain,this._n=f.hasRightAxis,this.Zn=f.leftValueAxisMode,this.xo=f.rightValueAxisMode,this.An=f.leftValueCategoryDomain,this.Mr=f.rightValueCategoryDomain,Us(this),no(this,n),Vu(this),io(this,n),this.v.rehover(),await this.requestRender(n)}Ot(n){this.r&&(this.i=n,zu(this,n))}setPluginConfig(n){n.facet_mode!==this.t.facet_mode&&this.resetExpandedDomain(),super.setPluginConfig(n)}resetExpandedDomain(){this.ei=null,this.ti=null,this.Vi=null}destroyInternal(){if(this.i){let n=this.i.gl;this.Y&&n.deleteBuffer(this.Y),Bd(this)}this.r=null,this.B=null,this.Y=null,this.Zt=!1,this.g=null,this.Ni=null,this.Xn=null,this.$n=null,this.jt.length=0,this.be=eo(),this.a=[],this.Rr=[],this.Jn=[],this.Qn=[],this.Oi=[],this.wr=null,this.Ui=null,this.Hi=null,this.Je=null,this.Fr=null,this.Sr=null,this.Fe=[],this.j=0,this.re.clear(),this.xe=-1,this.Ce=null}};function Dd(e){let t=new Map;for(let n=0;n<e.count;n++)e.chartType[n]===1&&t.set(e.seriesId[n]*1e9+e.catIdx[n],n);return t}function Qu(e,t){let n=new Set,i=[];for(let r of e)r.axis===t&&(n.has(r.aggName)||(n.add(r.aggName),i.push(r.aggName)));return i.join(", ")}function Ed(e){let t=Math.max(1,e.splitPrefixes.length),n=[];for(let i=0;i<e.aggregates.length;i++)n.push(`${e.aggregates[i]}:${e.series[i*t].axis}`);return n.join("\\0")}function Us(e){let t=e.A(),n=t.Ve,i=t.O,r=e.Pn,o=e.Zt?Math.max(1,e.Ke.length):e.a.length,s=e.Hi;if(e.Ui&&s&&s.Ve===n&&s.O===i&&s.seriesLength===o&&s.columnsConfig===r)return!1;let l=Pd(n,i,o);e.Ui=l,e.Hi={Ve:n,O:i,seriesLength:o,columnsConfig:r};for(let a=0;a<e.a.length;a++){let u=e.a[a],m=e.Zt?l[u.aggIdx]:l[a];u.color=Fu(u,e.Zt,r)??m}return!0}function Pd(e,t,n){return ye(e,t,n)}function Bd(e){e.X.lines.destroy(e),e.X.scatter.destroy(e),e.X.areas.destroy(e)}var go=class extends ct{constructor(){super("horizontal")}};Rn();rt();Ft();function Vs(e){let{columns:t,numRows:n,groupBy:i,splitBy:r,groupByTypes:o,dateModifiers:s}=e,l=fn(i,o),a={xLevels:[],yColumnNames:[],yLevels:[],numX:0,numY:0,rowOffset:0,cells:[],cells2D:[],colorMin:0,colorMax:1,xAxisMode:l,yAxisMode:{mode:"category"},xPositions:null,yPositions:null,xNumericDomain:null,yNumericDomain:null},u=i.map(M=>o[M]??"string"),{rowPaths:m,numCategories:f,rowOffset:c}=cn(t,n,i.length,u,l,i.map(M=>s?.get(M))),p=null,b=null;if(l.mode==="numeric"&&f>0){let M=t.get("__ROW_PATH_0__"),P=Pt(M?.values,f,c,i[0]??"",l.numericType==="date"||l.numericType==="datetime",l.numericType==="datetime"?s?.get(i[0]):void 0);P&&(p=P.categoryPositions,b=P.numericCategoryDomain)}let g=[];for(let M of t.keys())M.startsWith("__")||!t.get(M)?.values||g.push(M);let h=g.length;if(f===0||h===0)return{...a,xLevels:m,rowOffset:c};let y=Wd(g),C=Gd(r,o),_={mode:"category"},x=null,v=null;if(C.mode==="numeric"){let M=kd(g,C.numericType);if(M){let P=Pt(M,h,0,r[0]??"",C.numericType==="date"||C.numericType==="datetime",C.numericType==="datetime"?s?.get(r[0]):void 0);P&&(_=C,x=P.categoryPositions,v=P.numericCategoryDomain)}}let A=[],T=new Array(f*h).fill(null),L=1/0,D=-1/0;for(let M=0;M<h;M++){let P=t.get(g[M]),w=P.values,I=P.valid;for(let G=0;G<f;G++){let E=G+c;if(I&&!(I[E>>3]>>(E&7)&1))continue;let S=w[E];if(!isFinite(S))continue;let k={xIdx:G,yIdx:M,value:S};A.push(k),T[M*f+G]=k,S<L&&(L=S),S>D&&(D=S)}}return!isFinite(L)||!isFinite(D)?(L=0,D=1):L===D&&(D=L+1),{xLevels:m,yColumnNames:g,yLevels:y,numX:f,numY:h,rowOffset:c,cells:A,cells2D:T,colorMin:L,colorMax:D,xAxisMode:l,yAxisMode:_,xPositions:p,yPositions:x,xNumericDomain:b,yNumericDomain:v}}function Gd(e,t){if(e.length!==1)return{mode:"category"};let n=t[e[0]];return n==="date"||n==="datetime"||n==="integer"||n==="float"?{mode:"numeric",numericType:n}:{mode:"category"}}function kd(e,t){let n=new Float64Array(e.length);for(let i=0;i<e.length;i++){let r=e[i],o=r.indexOf("|"),s=o===-1?r:r.slice(0,o),l;if(t==="date"||t==="datetime"?(l=Date.parse(s),isFinite(l)||(l=Date.parse(s.replace(" ","T")))):l=Number(s),!isFinite(l))return null;n[i]=l}return n}function em(e,t){return t.map(n=>{let i=new Map;for(let[r,o]of e){if(r.startsWith("__ROW_PATH_")||r==="__GROUPING_ID__"){i.set(r,o);continue}let s=r.lastIndexOf("|");(s===-1?r:r.slice(s+1))===n&&i.set(r,o)}return{label:n,columns:i}})}function Wd(e){if(e.length===0)return[];let t=0,n=e.map(r=>r.split("|"));for(let r of n)r.length>t&&(t=r.length);if(t===0)return[];let i=[];for(let r=0;r<t;r++){let o=[],s=new Map,l=new Int32Array(e.length),a=new Array(e.length),u=0;for(let c=0;c<e.length;c++){let p=n[c][r]??"",b=s.get(p);b===void 0&&(b=o.length,o.push(p),s.set(p,b)),l[c]=b,a[c]=p,p.length>u&&(u=p.length)}let f=r===t-1?[]:cr(l,o,0,e.length);i.push({labels:a,runs:f,maxLabelChars:u})}return i}rt();ir();En();ke();pe();wt();Xt();nn();Ft();fr();function Ys(e,t){return t?.skipLeafLevel&&e.length>0?e.slice(0,-1):e}var Nd=80,Od=20,zs=5,Xs=11;function hn(e,t){return e.R(0,t).py}function tm(e,t){let n=Ys(e.levels,t),i=n.length,r=[];for(let o=0;o<i;o++){let s=n[o].maxLabelChars;if(o===i-1){let l=Math.max(Nd,s*6.5+16);r.push({size:l})}else{let l=Math.max(Od,s*6.5+16);r.push({size:l})}}return r}function nm(e,t){let n=Ys(e.levels,t);if(e.numRows===0||n.length===0)return 55;let i=tm(e,t),r=0;for(let o of i)r+=o.size;return r}function Ud(e,t){return e.labels[t]??""}function $s(e,t,n,i,r){let o=Ys(n.levels,r);if(n.numRows===0||o.length===0)return;let{At:s,Pe:l,fontFamily:a}=i,{e:u}=t;e.strokeStyle=s,e.fillStyle=s,e.lineWidth=1,e.font=`${Xs}px ${a}`;let m=tm(n,r),f=Math.max(0,Math.ceil(t.J)),c=Math.min(n.numRows-1,Math.floor(t.ie));if(c<f)return;let p=o.length,b=u.x;for(let h=p-1;h>=0;h--){let y=o[h],C=m[h],_=b,x=b-C.size;b=x,h===p-1?Hd(e,t,y,f,c,_,x,a,s):Vd(e,t,y,f,c,x,_,a,s)}let g=n.levelLabels.filter(h=>!!h).join(" / ");g&&(e.fillStyle=l,e.font=`13px ${a}`,e.save(),e.translate(14,u.y+u.height/2),e.rotate(-Math.PI/2),e.textAlign="center",e.textBaseline="top",e.fillText(g,0,0),e.restore())}function Hd(e,t,n,i,r,o,s,l,a){let u=t.e;e.strokeStyle=a,e.fillStyle=a,e.beginPath();for(let f=i;f<=r;f++){let c=hn(t,f);c<u.y-1||c>u.y+u.height+1||(e.moveTo(o,c),e.lineTo(o-zs,c))}e.stroke(),e.font=`${Xs}px ${l}`,e.textAlign="right",e.textBaseline="middle";let m=o-zs-4-s-4;for(let f=i;f<=r;f++){let c=hn(t,f);if(c<u.y-1||c>u.y+u.height+1)continue;let p=Ud(n,f);if(!p)continue;let b=Rt(e,p,m);b&&e.fillText(b,o-zs-4,c)}}function Vd(e,t,n,i,r,o,s,l,a){let u=t.e,m=Un(n.runs,i,r);if(m.length===0)return;e.strokeStyle=a,e.fillStyle=a;let f=s-3;e.beginPath();for(let c of m){let p=hn(t,c.endIdx+.5),b=hn(t,c.startIdx-.5),g=Math.min(p,b),h=Math.max(p,b),y=Math.max(u.y,g),C=Math.min(u.y+u.height,h);C<=y||(e.moveTo(f,y),e.lineTo(f,C),e.moveTo(f,y),e.lineTo(f+3,y),e.moveTo(f,C),e.lineTo(f+3,C))}e.stroke(),e.font=`${Xs}px ${l}`;for(let c of m){let p=hn(t,c.endIdx+.5),b=hn(t,c.startIdx-.5),g=Math.min(p,b),h=Math.max(p,b),y=Math.max(u.y,g),C=Math.min(u.y+u.height,h);if(C<=y)continue;let _=(y+C)/2,x=o+(s-o-3)/2,v=c.label;if(!v)continue;let A=C-y-4,T=Rt(e,v,Math.max(0,A));T&&(e.save(),e.translate(x,_),e.rotate(-Math.PI/2),e.textAlign="center",e.textBaseline="middle",e.fillText(T,0,0),e.restore())}}we();Hn();He();he();$t();Vt();Bn();we();ge();function ho(e,t,n){if(e.vo=t,e.Ao=n,e.d.length>0){for(let r=0;r<e.d.length;r++){let o=e.d[r],s=o.layout.e;if(t<s.x||t>s.x+s.width||n<s.y||n>s.y+s.height)continue;let l=rm(o.layout,o.pipeline.numX,o.pipeline.numY,o.pipeline.cells2D,o.pipeline.xPositions,o.pipeline.yPositions,o.pipeline.xNumericDomain?.bandWidth??1,o.pipeline.yNumericDomain?.bandWidth??1,t,n);js(e,l,r);return}js(e,null,-1);return}if(!e.f)return;let i=rm(e.f,e.Ft,e.St,e.Yi,e.It,e.Ln,e.nt?.bandWidth??1,e.xt?.bandWidth??1,t,n);js(e,i,-1)}function im(e,t,n){if(e.length===0)return-1;let i=0,r=e.length-1;for(;i<r;){let s=i+r>>1;e[s]<t?i=s+1:r=s}let o=i;return o>0&&Math.abs(e[o-1]-t)<Math.abs(e[o]-t)&&(o-=1),Math.abs(e[o]-t)>n*.5?-1:o}function rm(e,t,n,i,r,o,s,l,a,u){let m=e.e;if(a<m.x||a>m.x+m.width||u<m.y||u>m.y+m.height)return null;let f=e.H,c=e.K,p=e.J,b=e.ie,g=f+(a-m.x)/m.width*(c-f),h=b-(u-m.y)/m.height*(b-p),y=r?im(r,g,s):Math.round(g),C=o?im(o,h,l):Math.round(h);return y<0||y>=t||C<0||C>=n?null:i[C*t+y]??null}function js(e,t,n){let i=e._e;(i?.xIdx??-1)===(t?.xIdx??-1)&&(i?.yIdx??-1)===(t?.yIdx??-1)&&e.ni===n||(e._e=t,e.ni=n,e.i&&e.Ir&&e.Ir())}function om(e,t){let n=[];for(let i of e){let r=i.labels[t];r!=null&&r!==""&&n.push(r)}return n.join(" / ")}function Zs(e){if(!e.l||!e._e)return;let t,n,i,r,o,s,l=null;if(e.ni>=0){let _=e.d[e.ni];if(!_)return;t=_.layout,n=_.pipeline.xLevels,i=_.pipeline.yLevels,r=_.pipeline.xPositions,o=_.pipeline.yPositions,s=_.pipeline.xNumericDomain,l=_.label}else{if(!e.f)return;t=e.f,n=e.Kt,i=e.Jt,r=e.It,o=e.Ln,s=e.nt}let a=e._e,u={px:e.vo,py:e.Ao},m=[];l&&m.push([l]);let f=e.Dt.mode==="numeric"&&r?e.getColumnFormatter(e.p[0],"value")(r[a.xIdx]):om(n,a.xIdx),c=om(i,a.yIdx);f&&m.push([f]),c&&m.push([c]);let p=e.getColumnFormatter(e.T[0],"value");m.push(["Value",p(a.value)]);let b=e.A(),g=e.i?.dpr??1,h=t.R(r?r[a.xIdx]:a.xIdx,o?o[a.yIdx]:a.yIdx),y=e.Dt.mode==="numeric"&&r?(e.getColumnFormatter(e.p[0],"tick")??ce(s?.isDate,J(t.H,t.K,6),s?.dateModifiers))(r[a.xIdx]):f,C=[];y&&C.push({side:"bottom",px:h.px,py:h.py,text:y}),c&&C.push({side:"left",px:h.px,py:h.py,text:c}),ze(e.l,t,b,g,C,e.t.tooltip_opacity),Ue(e.l,u,m,t,b,g,ie(e.t))}var qs={skipLeafLevel:!0};function sm(e,t){let n=t.gl,i=t.dpr,r=n.canvas.width/i,o=n.canvas.height/i;if(r<=0||o<=0)return;if(e.d.length>0){Yd(e,t,r,o);return}if(e.Ft===0||e.St===0)return;let s=e.A(),l={levels:e.Kt,numRows:e.Ft,levelLabels:e.p.slice()},a={levels:e.Jt,numRows:e.St,levelLabels:[]},u=e.Dt.mode==="numeric",m=e.ii.mode==="numeric",f=nt(e.t,!0,80,0),c=m?55:nm(a,qs),p=u?24:Ye(l,Math.max(1,r-c-30-f)),b=new re(r,o,{hasXLabel:e.p.length>0,hasYLabel:!1,hasLegend:!0,bottomExtra:p,leftExtra:c,rightExtra:f});e.f=b,e.C&&e.C.updateLayout(b);let g=u?e.nt.min:-.5,h=u?e.nt.max:e.Ft-.5,y=m?e.xt.min:-.5,C=m?e.xt.max:e.St-.5;e.C&&e.C.setBaseDomain(g,h,y,C);let _=e.C?e.C.getVisibleDomain():{xMin:g,xMax:h,yMin:y,yMax:C},x=b.buildProjectionMatrix(_.xMin,_.xMax,_.yMin,_.yMax,void 0,void 0,0,e.D,e.E),v=b.e,A=v.width/(_.xMax-_.xMin),T=v.height/(_.yMax-_.yMin),L=s.to*.5,D=u?e.nt.bandWidth:1,M=m?e.xt.bandWidth:1,P=Math.min(D*.5,A>0?L/A:0),w=Math.min(M*.5,T>0?L/T:0);if(e.ne){let I=de(e.ne,b,t.dpr)}lm(e,t),am(e,t),e.me=Pn(t,e.me,s.O),ot(n,b,t.dpr,()=>{n.useProgram(e.r);let I=e.B;n.uniformMatrix4fv(I.u_projection,!1,x),n.uniform2f(I.u_cell_inset,P,w),n.uniform2f(I.u_cell_size,D,M),Ve(t,e.me.texture,I.u_gradient_lut,0),um(e,n,t,0,e.Lo)}),e.Me(()=>yo(e))}function lm(e,t){if(e.r)return;let n=t.gl,i=Z(t,"heatmap",Ci,_i,["u_projection","u_cell_inset","u_cell_size","u_gradient_lut"],["a_corner","a_cell","a_color_t"]);e.r=i.program,e.B=i;let r=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),n.STATIC_DRAW),e.Y=r}function am(e,t){let n=e.lt.length;if(e.Lo=n,n===0)return;let i=new Float32Array(n*2),r=new Float32Array(n);if(e.d.length>0){let o=0;for(let s of e.d){let l=s.pipeline.xPositions,a=s.pipeline.yPositions,u=s.xOrigin,m=s.yOrigin;for(let f of s.pipeline.cells)i[o*2]=l?l[f.xIdx]-u:f.xIdx,i[o*2+1]=a?a[f.yIdx]-m:f.yIdx,r[o]=vt(f.value,e.b,e.c),o++}}else{let o=e.It,s=e.Ln,l=e.D,a=e.E;for(let u=0;u<n;u++){let m=e.lt[u];i[u*2]=o?o[m.xIdx]-l:m.xIdx,i[u*2+1]=s?s[m.yIdx]-a:m.yIdx,r[u]=vt(m.value,e.b,e.c)}}t.L.ensureCapacity(n),t.L.upload("heatmap_cell",i,0,2),t.L.upload("heatmap_t",r,0,1)}function um(e,t,n,i,r){if(r===0)return;let o=e.B,s=ee(n),{setDivisor:l}=s,a=Float32Array.BYTES_PER_ELEMENT;t.bindBuffer(t.ARRAY_BUFFER,e.Y),t.enableVertexAttribArray(o.a_corner),t.vertexAttribPointer(o.a_corner,2,t.FLOAT,!1,0,0),l(o.a_corner,0);let u=n.L.peek("heatmap_cell"),m=n.L.peek("heatmap_t");!u||!m||(t.bindBuffer(t.ARRAY_BUFFER,u.buffer),t.enableVertexAttribArray(o.a_cell),t.vertexAttribPointer(o.a_cell,2,t.FLOAT,!1,0,i*2*a),l(o.a_cell,1),t.bindBuffer(t.ARRAY_BUFFER,m.buffer),t.enableVertexAttribArray(o.a_color_t),t.vertexAttribPointer(o.a_color_t,1,t.FLOAT,!1,0,i*a),l(o.a_color_t,1),s.drawArraysInstanced(t.TRIANGLE_STRIP,0,4,r),l(o.a_cell,0),l(o.a_color_t,0))}function yo(e){zd(e),e.presentOverlay()}function zd(e){if(!e.l)return;if(e.d.length>0){Xd(e);return}if(!e.f)return;let t=e.f,n=e.A(),i=e.i?.dpr??1,r=de(e.l,t,i);if(!r)return;r.strokeStyle=n.In,r.lineWidth=1,r.beginPath(),r.moveTo(t.e.x,t.e.y),r.lineTo(t.e.x,t.e.y+t.e.height),r.lineTo(t.e.x+t.e.width,t.e.y+t.e.height),r.stroke();let o={levels:e.Kt,numRows:e.Ft,levelLabels:e.p.slice()},s={levels:e.Jt,numRows:e.St,levelLabels:[]},l=e.p[0],a=e.p[1]??e.P[0];if(e.Dt.mode==="numeric"&&e.nt){let m=J(t.H,t.K,6);oo(r,t,e.nt,m,n,e.getColumnFormatter(l,"tick"))}else xe(r,t,o,n);if(e.ii.mode==="numeric"&&e.xt){let m=J(t.J,t.ie,6);so(r,t,e.xt,m,n,e.getColumnFormatter(a,"tick"))}else $s(r,t,s,n,qs);let u=le(e.t,0);if(u==="none")e.I.clearPainted();else{let m={min:e.b,max:e.c,label:e.Qt},f=e.getColumnFormatter(e.T[0],"value"),c={mode:u==="floating"?"floating":"sidebar",legend:e.I,title:e.Qt,opacity:e.t.legend_opacity};u==="floating"?Xe(e.l,e.I.floatingBox(e.t,t.cssWidth,t.cssHeight,It(e.l,n,m,f,e.Qt)),m,n.O,n,f,c):rn(e.l,t,m,n.O,n,f,c)}e._e&&Zs(e)}function Yd(e,t,n,i){let r=t.gl,o=e.A(),{effectiveSharedX:s,effectiveSharedY:l}=e.computeEffectiveFacetFlags(),a=Be(e.d.map(m=>m.label),{cssWidth:n,cssHeight:i,xAxis:s?"outer":"cell",yAxis:l?"outer":"cell",hasLegend:le(e.t,0)==="sidebar",legendWidth:Me(e.t,96),hasXLabel:e.p.length>0,hasYLabel:!1,gap:8});e.g=a;for(let m=0;m<e.d.length;m++){let f=a.cells[m];f&&(e.d[m].layout=f.layout)}e.syncFacetZoomLayouts(a.cells),lm(e,t),am(e,t),e.me=Pn(t,e.me,o.O),r.useProgram(e.r);let u=e.B;Ve(t,e.me.texture,u.u_gradient_lut,0),Lt(r);for(let m=0;m<e.d.length;m++){let f=e.d[m];if(f.instanceCount===0)continue;let{numX:c,numY:p}=f.pipeline;if(c===0||p===0)continue;let b=f.layout,g=f.pipeline.xAxisMode.mode==="numeric",h=f.pipeline.yAxisMode.mode==="numeric",y=g?f.pipeline.xNumericDomain.min:-.5,C=g?f.pipeline.xNumericDomain.max:c-.5,_=h?f.pipeline.yNumericDomain.min:-.5,x=h?f.pipeline.yNumericDomain.max:p-.5,v=e.getZoomControllerForFacet(m);v&&v.setBaseDomain(y,C,_,x);let A=v?v.getVisibleDomain():{xMin:y,xMax:C,yMin:_,yMax:x},T=b.buildProjectionMatrix(A.xMin,A.xMax,A.yMin,A.yMax,void 0,void 0,0,f.xOrigin,f.yOrigin),L=b.e,D=L.width/(A.xMax-A.xMin),M=L.height/(A.yMax-A.yMin),P=o.to*.5,w=g?f.pipeline.xNumericDomain.bandWidth:1,I=h?f.pipeline.yNumericDomain.bandWidth:1,G=Math.min(w*.5,D>0?P/D:0),E=Math.min(I*.5,M>0?P/M:0);Tt(r,b,t.dpr,()=>{r.uniformMatrix4fv(u.u_projection,!1,T),r.uniform2f(u.u_cell_inset,G,E),r.uniform2f(u.u_cell_size,w,I),um(e,r,t,f.instanceStart,f.instanceCount)})}e.Me(()=>yo(e))}function Xd(e){if(!e.l||!e.g)return;let t=e.A(),n=e.i?.dpr??1,i=de(e.l,e.d[0].layout,n);if(!i)return;let r=e.Ci,o=e._i,s=e.g;for(let f=0;f<e.d.length;f++){let c=e.d[f],p=s.cells[f],b=c.layout,g=b.e;i.strokeStyle=t.In,i.lineWidth=1,i.beginPath(),i.moveTo(g.x,g.y),i.lineTo(g.x,g.y+g.height),i.lineTo(g.x+g.width,g.y+g.height),i.stroke();let h={levels:c.pipeline.xLevels,numRows:c.pipeline.numX,levelLabels:e.p.slice()},y={levels:c.pipeline.yLevels,numRows:c.pipeline.numY,levelLabels:[]},C=e.p[0],_=e.p[1]??e.P[0];if(!r||p.isBottomEdge)if(c.pipeline.xAxisMode.mode==="numeric"&&c.pipeline.xNumericDomain){let x=J(b.H,b.K,6);oo(i,b,c.pipeline.xNumericDomain,x,t,e.getColumnFormatter(C,"tick"))}else xe(i,b,h,t);if(!o||p.isLeftEdge)if(c.pipeline.yAxisMode.mode==="numeric"&&c.pipeline.yNumericDomain){let x=J(b.J,b.ie,6);so(i,b,c.pipeline.yNumericDomain,x,t,e.getColumnFormatter(_,"tick"))}else $s(i,b,y,t,qs)}for(let f=0;f<s.cells.length;f++){let c=s.cells[f],p=e.d[f];!p||!c.titleRect||Yt(e.l,p.label,c.titleRect,t,n)}let l=le(e.t,0),a=l==="floating",u=e.d[0].layout,m=a?e.I.floatingBox(e.t,u.cssWidth,u.cssHeight,It(e.l,t,{min:e.b,max:e.c},e.getColumnFormatter(e.T[0],"value"),e.Qt)):s.legendRect;l!=="none"&&m?Xe(e.l,a?m:{x:m.x,y:m.y+20,width:m.width,height:Math.max(1,m.height-20)},{min:e.b,max:e.c,label:""},t.O,t,e.getColumnFormatter(e.T[0],"value"),{mode:a?"floating":"sidebar",legend:e.I,title:e.Qt,sidebarGutter:a?void 0:s.legendRect?.width,opacity:e.t.legend_opacity}):e.I.clearPainted(),e._e&&Zs(e)}var xo=class extends Pe{constructor(){super(...arguments);d(this,"r",null);d(this,"B",null);d(this,"Y",null);d(this,"me",null);d(this,"Kt",[]);d(this,"Jt",[]);d(this,"Dr",[]);d(this,"Ft",0);d(this,"St",0);d(this,"tt",0);d(this,"Dt",{mode:"category"});d(this,"ii",{mode:"category"});d(this,"It",null);d(this,"Ln",null);d(this,"nt",null);d(this,"xt",null);d(this,"D",0);d(this,"E",0);d(this,"lt",[]);d(this,"Yi",[]);d(this,"Lo",0);d(this,"b",0);d(this,"c",1);d(this,"Qt","");d(this,"_e",null);d(this,"f",null);d(this,"vo",0);d(this,"Ao",0);d(this,"d",[]);d(this,"g",null);d(this,"ni",-1);d(this,"Ir",()=>yo(this))}colorScaleColumn(){return this.T[0]||null}tooltipCallbacks(){return{onHover:(n,i)=>ho(this,n,i),onLeave:()=>{this._e&&(this._e=null,this.Ir())},onPin:(n,i)=>{ho(this,n,i),this._e&&this.zo(this._e.xIdx,this._e.yIdx)},onUnpin:()=>{this.emitUnselect()}}}async zo(n,i){await this.emitClickAndSelect(this.To(n,i))}clickTargetAt(n,i){return ho(this,n,i),this._e?this.To(this._e.xIdx,this._e.yIdx):null}To(n,i){let r=this.Dt.mode==="numeric"&&this.It?[this.It[n]??null]:this.Kt.map(l=>l.labels[n]??null),o=this.Jt.slice(0,this.P.length).map(l=>l.labels[i]??null),s=this.T[0]??"";return{rowIdx:n+this.tt,columnName:s,groupByValues:r,splitByValues:o}}async uploadAndRender(n,i,r,o){if(this.i=n,r!==0)return;let s=this.T.filter(l=>!!l);if(s.length>1){let l=em(i,s),a=[],u=[],m=1/0,f=-1/0;for(let c of l){let p=Vs({columns:c.columns,numRows:o,groupBy:this.p,splitBy:this.P,groupByTypes:this.st,dateModifiers:this.Lt}),b=u.length;for(let g of p.cells)u.push({xIdx:g.xIdx,yIdx:g.yIdx,value:g.value});a.push({label:c.label,pipeline:p,layout:new re(1,1,{hasXLabel:!1,hasYLabel:!1,hasLegend:!1}),instanceStart:b,instanceCount:p.cells.length,xOrigin:p.xNumericDomain?.min??0,yOrigin:p.yNumericDomain?.min??0}),isFinite(p.colorMin)&&p.colorMin<m&&(m=p.colorMin),isFinite(p.colorMax)&&p.colorMax>f&&(f=p.colorMax)}!isFinite(m)||!isFinite(f)?(m=0,f=1):m===f&&(f=m+1),this.Kt=[],this.Jt=[],this.Dr=[],this.Ft=0,this.St=0,this.tt=0,this.Yi=[],this.f=null,this.Dt={mode:"category"},this.ii={mode:"category"},this.It=null,this.Ln=null,this.nt=null,this.xt=null,this.D=0,this.E=0,this.d=a,this.lt=u,this.b=m,this.c=f,this.Qt=s.join(", ")}else{let l=Vs({columns:i,numRows:o,groupBy:this.p,splitBy:this.P,groupByTypes:this.st,dateModifiers:this.Lt});this.d=[],this.g=null,this.Kt=l.xLevels,this.Jt=l.yLevels,this.Dr=l.yColumnNames,this.Ft=l.numX,this.St=l.numY,this.tt=l.rowOffset,this.lt=l.cells,this.Yi=l.cells2D,this.b=l.colorMin,this.c=l.colorMax,this.Qt=s[0]??"Color",this.Dt=l.xAxisMode,this.ii=l.yAxisMode,this.It=l.xPositions,this.Ln=l.yPositions,this.nt=l.xNumericDomain,this.xt=l.yNumericDomain,this.D=l.xNumericDomain?.min??0,this.E=l.yNumericDomain?.min??0}await this.requestRender(n)}Ot(n){this.i=n;let i=this.Ft>0&&this.St>0,r=this.d.length>0;!i&&!r||sm(this,n)}destroyInternal(){this.Y&&this.i&&this.i.gl.deleteBuffer(this.Y),this.r=null,this.B=null,this.Y=null,this.Kt=[],this.Jt=[],this.Dr=[],this.lt=[],this.Yi=[],this._e=null,this.d=[],this.g=null,this.ni=-1,this.Dt={mode:"category"},this.ii={mode:"category"},this.It=null,this.Ln=null,this.nt=null,this.xt=null}};Fn();function ni(){return{count:0,catIdx:new Int32Array(0),splitIdx:new Int32Array(0),seriesId:new Int32Array(0),xCenter:new Float64Array(0),halfWidth:new Float64Array(0),open:new Float64Array(0),close:new Float64Array(0),high:new Float64Array(0),low:new Float64Array(0),isUp:new Uint8Array(0)}}function $d(e,t){return e&&e.catIdx.length>=t?(e.count=0,e):{count:0,catIdx:new Int32Array(t),splitIdx:new Int32Array(t),seriesId:new Int32Array(t),xCenter:new Float64Array(t),halfWidth:new Float64Array(t),open:new Float64Array(t),close:new Float64Array(t),high:new Float64Array(t),low:new Float64Array(t),isUp:new Uint8Array(t)}}var mm={splitPrefixes:[],rowPaths:[],numCategories:0,rowOffset:0,axisMode:{mode:"category"},numericCategoryDomain:null,categoryPositions:null,series:[],yDomain:{min:0,max:1}};function fm(e){let{columns:t,numRows:n,columnSlots:i,groupBy:r,splitBy:o,groupByTypes:s,dateModifiers:l,bandInnerFrac:a,barInnerPad:u,scratchCandles:m}=e,f=fn(r,s),c=i[0]||"";if(!c)return{...mm,candles:ni()};let p=i[1]||"",b=i[2]||"",g=i[3]||"",h=[];if(o.length>0){let H=[c];p&&H.push(p),b&&H.push(b),g&&H.push(g);for(let z of it(t,[c],H))z.colNames.has(c)&&h.push(z.prefix);h.length===0&&h.push("")}else h.push("");let y=r.map(H=>s[H]??"string"),{rowPaths:C,numCategories:_,rowOffset:x}=cn(t,n,r.length,y,f,r.map(H=>l?.get(H)));if(_===0)return{...mm,axisMode:f,splitPrefixes:h,rowPaths:C,rowOffset:x,candles:ni()};let v=h.length,A=[];for(let H=0;H<v;H++){let z=h[H];A.push({seriesId:H,splitIdx:H,splitKey:z,label:z===""?c:z})}let T=null,L=null,D=1;if(f.mode==="numeric"&&_>0){let H=t.get("__ROW_PATH_0__"),z=Pt(H?.values,_,x,r[0]??"",f.numericType==="date"||f.numericType==="datetime",f.numericType==="datetime"?l?.get(r[0]):void 0);z&&(T=z.categoryPositions,L=z.numericCategoryDomain,D=z.numericCategoryDomain.bandWidth)}let M=Kr(v,a,u),P=M.slotWidth*D,w=M.halfWidth*D,I=(v-1)/2,G=[];for(let H=0;H<v;H++){let z=h[H],K=qe=>z===""?qe:`${z}|${qe}`,ue=t.get(K(c));if(!ue?.values){G.push({openCol:null,closeCol:null,highCol:null,lowCol:null,openValid:null,closeValid:null,highValid:null,lowValid:null});continue}let Fe=p?t.get(K(p)):null,pt=b?t.get(K(b)):null,Se=g?t.get(K(g)):null;G.push({openCol:ue.values,closeCol:Fe?.values??null,highCol:pt?.values??null,lowCol:Se?.values??null,openValid:ue.valid??null,closeValid:Fe?.valid??null,highValid:pt?.valid??null,lowValid:Se?.valid??null})}let E=_*v,S=$d(m??null,E),k=0,B=1/0,V=-1/0,N=_;for(let H=0;H<v;H++){let z=G[H],K=z.openCol;if(!K)continue;let ue=z.closeCol,Fe=z.highCol,pt=z.lowCol,Se=z.openValid,qe=z.closeValid,oi=z.highValid,Cn=z.lowValid,si=(H-I)*P;for(let Ce=0;Ce<N;Ce++){let me=Ce+x;if(Se&&!(Se[me>>3]>>(me&7)&1))continue;let se=K[me];if(!isFinite(se))continue;let oe;if(ue&&(!qe||(qe[me>>3]>>(me&7)&1)!==0)){let Q=ue[me];oe=isFinite(Q)?Q:se}else{let Q=Ce<N-1?Ce+1+x:me;if(!Se||(Se[Q>>3]>>(Q&7)&1)!==0){let De=K[Q];oe=isFinite(De)?De:se}else oe=se}let Ie;if(Fe&&(!oi||(oi[me>>3]>>(me&7)&1)!==0)){let Q=Fe[me];Ie=isFinite(Q)?Q:se>oe?se:oe}else Ie=se>oe?se:oe;let We;if(pt&&(!Cn||(Cn[me>>3]>>(me&7)&1)!==0)){let Q=pt[me];We=isFinite(Q)?Q:se<oe?se:oe}else We=se<oe?se:oe;let So=(T?T[Ce]:Ce)+si,Io=oe>=se?1:0;S.catIdx[k]=Ce,S.splitIdx[k]=H,S.seriesId[k]=H,S.xCenter[k]=So,S.halfWidth[k]=w,S.open[k]=se,S.close[k]=oe,S.high[k]=Ie,S.low[k]=We,S.isUp[k]=Io,k++,We<B&&(B=We),Ie>V&&(V=Ie)}}if(S.count=k,!isFinite(B)||!isFinite(V))B=0,V=1;else if(B===V){let H=Math.max(Math.abs(B),1)*.05;B-=H,V+=H}return{splitPrefixes:h,rowPaths:C,numCategories:_,rowOffset:x,axisMode:f,numericCategoryDomain:L,categoryPositions:T,series:A,candles:S,yDomain:{min:B,max:V}}}rt();he();En();Vt();ge();Bn();we();nn();ge();var jd=3;function cm(e,t,n){let i=0,r=t;for(;i<r;){let o=i+r>>>1;e[o]<n?i=o+1:r=o}return i}function Co(e,t,n){if(e.Er!==-1)return;let i=e.f;if(!i)return;let r=e.Se;if(r.count===0){e.ve!==-1&&(e.ve=-1,dt(e));return}let o=i.e,s=i.H,l=i.K,a=i.J,u=i.ie;if(t<o.x||t>o.x+o.width||n<o.y||n>o.y+o.height){e.ve!==-1&&(e.ve=-1,dt(e));return}let m=s+(t-o.x)/o.width*(l-s),f=u-(n-o.y)/o.height*(u-a),c=o.width/(l-s),p=jd/c,b=r.xCenter,g=r.halfWidth,h=r.open,y=r.close,C=r.high,_=r.low,x=r.count>0?g[0]:0,v=Math.max(x,p),A=cm(b,r.count,m-v),T=cm(b,r.count,m+v+1e-12),L=-1;for(let D=T-1;D>=A;D--){let M=b[D],P=g[D],w=m>=M-P&&m<=M+P,I=Math.abs(m-M)<=p;if(!w&&!I)continue;let G=h[D],E=y[D],S=G<E?G:E,k=G<E?E:G,B=w&&f>=S&&f<=k,V=f>=_[D]&&f<=C[D];if(B||V){L=D;break}}L!==e.ve&&(e.ve=L,dt(e))}function dm(e,t){e.v.dismiss(),e.Er=t;let n=e.Se;if(t<0||t>=n.count||!e.f)return;let i=Ks(e,t);if(i.length===0)return;let r=n.xCenter[t],o=(n.high[t]+n.low[t])/2,s=e.f.R(r,o),l=e.f.cssWidth,a=e.f.cssHeight;e.v.pin(i,s,{cssWidth:l,cssHeight:a},ie(e.t)),e.ve=-1,dt(e)}function Ks(e,t){let n=[],i=e.Se;if(t<0||t>=i.count)return n;let r=i.catIdx[t],o=i.splitIdx[t],s=i.open[t],l=i.close[t],a=i.high[t],u=i.low[t],m=Js(e,r);if(m!==""&&n.push([m]),o>=0&&e.le.length>1){let g=e.le[o];g&&n.push([g])}let f=e.getColumnFormatter(e.T[0],"value"),c=e.getColumnFormatter(e.T[1],"value"),p=e.getColumnFormatter(e.T[2],"value"),b=e.getColumnFormatter(e.T[3],"value");return n.push(["Open",f(s)]),n.push(["Close",c(l)]),n.push(["High",p(a)]),n.push(["Low",b(u)]),n}function Js(e,t){if(e.te==="numeric"&&e.M&&e.S){let n=e.S[t],i=e.p[0];return e.getColumnFormatter(i,"value")(n)}if(e.Fe.length>0){let n=[];for(let i of e.Fe){let r=i.labels[t]??"";r&&n.push(r)}return n.join(" \\u203A ")}return`Row ${t+e.tt}`}function pm(e,t,n,i,r){let o=1/0,s=-1/0,l={cat:0,lo:0,hi:0,skip:!1};for(let u=0;u<e.length;u++)l.skip=!1,i(e[u],l),!l.skip&&(l.cat<t||l.cat>n||(l.lo<o&&(o=l.lo),l.hi>s&&(s=l.hi)));let a=isFinite(o)&&isFinite(s);if(a&&o===s){let u=Math.abs(o)||1;o-=u,s+=u}return r.min=o,r.max=s,r.hasFit=a,r}function Qs(e){let n=e.A().O;if(e.Xi===n)return;let i=Ee(n,1),r=Ee(n,0);e.$i=[i[0],i[1],i[2]],e.ji=[r[0],r[1],r[2]],e.Xi=n}function bm(e){e.X.bodyWick.invalidateBuffers(e),e.X.ohlc.invalidateBuffers(e)}function gm(e,t){e.X.bodyWick.rebuildBuffers(e,t),e.X.ohlc.rebuildBuffers(e,t)}function hm(e,t){let n=t.gl,i=t.dpr,r=n.canvas.width/i,o=n.canvas.height/i;if(r<=0||o<=0||e.j===0)return;let s=e.A();Qs(e);let l=e.te==="numeric",a=l?e.M.min:-.5,u=l?e.M.max:e.j-.5;e.C&&e.C.setBaseDomain(a,u,e.ri.min,e.ri.max);let m=e.C?e.C.getVisibleDomain():{xMin:a,xMax:u,yMin:e.ri.min,yMax:e.ri.max};if(e.Ti&&e.C&&!e.C.isXDefault()){let _=Kd(e,m.xMin,m.xMax);_.hasFit&&(m.yMin=_.min,m.yMax=_.max)}let f=e.p.length>0,c={levels:e.Fe,numRows:e.j,levelLabels:e.p.slice()},p;if(l)p=new re(r,o,{hasXLabel:f,hasYLabel:!0,hasLegend:!1,bottomExtra:24});else{let v=Math.max(1,r-71-16),A=Ye(c,v);p=new re(r,o,{hasXLabel:f,hasYLabel:!0,hasLegend:!1,bottomExtra:A})}e.f=p,e.C&&e.C.updateLayout(p);let b=p.buildProjectionMatrix(m.xMin,m.xMax,m.yMin,m.yMax,"y",void 0,void 0,e.ge,0),g=J(m.yMin,m.yMax,6),h=e.T[0]||"",y=c,C={min:m.yMin,max:m.yMax,label:h};e.ne&&ao(e.ne,p,g,s,t.dpr),ot(n,p,t.dpr,()=>{e.vi==="ohlc"?e.X.ohlc.draw(e,n,t,b):e.X.bodyWick.draw(e,n,t,b)}),e.oe=y,e.Q=C,e.fe=g,e.Oe=l?J(m.xMin,m.xMax,6):null,e.Me(()=>dt(e))}function dt(e){Zd(e),e.presentOverlay()}function Zd(e){if(!e.l||!e.f||!e.Q||!e.fe)return;let t=e.A(),n;if(e.te==="numeric"&&e.M&&e.Oe)n={mode:"numeric",domain:{min:e.M.min,max:e.M.max,isDate:e.M.isDate,label:e.M.label,dateModifiers:e.M.dateModifiers},ticks:e.Oe};else if(e.oe)n={mode:"category",domain:e.oe};else return;let i=e.T[0]??e.T[1]??e.T[2]??e.T[3],r=e.p[0];lo(e.l,n,{mode:"numeric",domain:e.Q,ticks:e.fe},e.f,t,e.i?.dpr??1,void 0,!1,{value:e.getColumnFormatter(i,"tick"),category:e.getColumnFormatter(r,"tick")}),e.ve>=0&&e.ve<e.Se.count&&qd(e)}function qd(e){if(!e.l||!e.f)return;let t=e.ve,n=e.Se;if(t<0||t>=n.count)return;let i=e.f,r=n.xCenter[t],o=(n.high[t]+n.low[t])/2,s=i.R(r,o),l=Ks(e,t),a=e.A(),u=e.i?.dpr??1,m=e.T[1],f=n.close[t];(m==null||!Number.isFinite(f))&&(m=e.T[0]??e.T[2]??e.T[3],f=n.open[t]);let c=i.R(r,f),p=[],b;if(e.te==="numeric"&&e.M&&e.S?b=(e.getColumnFormatter(e.p[0],"tick")??ce(e.M.isDate,e.Oe,e.M.dateModifiers))(e.S[n.catIdx[t]]):b=Js(e,n.catIdx[t]),b!==""&&p.push({side:"bottom",px:c.px,py:c.py,text:b}),Number.isFinite(f)){let g=e.getColumnFormatter(m,"tick")??ce(e.Q?.isDate,e.fe);p.push({side:"left",px:c.px,py:c.py,text:g(f)})}ze(e.l,i,a,u,p,e.t.tooltip_opacity),Ue(e.l,s,l,i,a,u,{...ie(e.t),crosshair:!1,highlightRadius:0})}function Kd(e,t,n){let i=e.Rt;if(i&&i.xMin===t&&i.xMax===n)return i;let r=i??Jd();r.xMin=t,r.xMax=n;let o=e.Se,s=1/0,l=-1/0,a=!1,u=o.xCenter,m=o.low,f=o.high;for(let c=0;c<o.count;c++){let p=u[c];p<t||p>n||(m[c]<s&&(s=m[c]),f[c]>l&&(l=f[c]),a=!0)}return r.min=a?s:0,r.max=a?l:1,r.hasFit=a,e.Rt=r,r}function Jd(){return{xMin:0,xMax:0,min:0,max:1,hasFit:!1}}ke();pe();var _o=class{constructor(){d(this,"r",null);d(this,"o",null)}ensureProgram(t){if(this.r)return this.r;let n=t.gl,i=Ar(n),o={...Z(t,"candlestick-body",yi,xi,["u_projection"],["a_corner","a_x_center","a_half_width","a_y0","a_y1","a_color"]),quadBuffer:i,instanceBuffer:n.createBuffer()},s=at(n),a={...Z(t,"line-uniform",Ke,Je,["u_projection","u_color","u_resolution","u_line_width","u_interp_alpha"],["a_corner","a_start","a_end","a_real_start","a_real_end"]),cornerBuffer:s,segmentBuffer:n.createBuffer()};return this.r={body:o,wick:a},this.r}invalidateBuffers(t){let n=this.o;if(!n||!t.i){this.o=null;return}let i=t.i.gl;i.deleteBuffer(n.upWickBuffer),i.deleteBuffer(n.downWickBuffer),this.o=null}rebuildBuffers(t,n){let i=t.Se,r=this.ensureProgram(n),o=n.gl,s=t.ge;if(i.count===0){let M=o.createBuffer(),P=o.createBuffer();this.o={bodyCount:0,upWickCount:0,downWickCount:0,upWickBuffer:M,downWickBuffer:P};return}let l=new Float32Array(i.count*7),a=0,u=0,m=i.xCenter,f=i.halfWidth,c=i.open,p=i.close,b=i.isUp,g=t.$i,h=t.ji;for(let M=0;M<i.count;M++){let P=c[M],w=p[M],I=P<w?P:w,G=P<w?w:P,E=b[M]!==0,S=E?g:h,k=M*7;l[k+0]=m[M]-s,l[k+1]=f[M]*.7,l[k+2]=I,l[k+3]=G,l[k+4]=S[0],l[k+5]=S[1],l[k+6]=S[2],E?a++:u++}o.bindBuffer(o.ARRAY_BUFFER,r.body.instanceBuffer),o.bufferData(o.ARRAY_BUFFER,l,o.STATIC_DRAW);let y=new Float32Array(a*4),C=new Float32Array(u*4),_=0,x=0,v=i.low,A=i.high;for(let M=0;M<i.count;M++){let P=m[M]-s,w=v[M],I=A[M];b[M]!==0?(y[_+0]=P,y[_+1]=w,y[_+2]=P,y[_+3]=I,_+=4):(C[x+0]=P,C[x+1]=w,C[x+2]=P,C[x+3]=I,x+=4)}let T=this.o,L=T?.upWickBuffer??o.createBuffer(),D=T?.downWickBuffer??o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,L),o.bufferData(o.ARRAY_BUFFER,y,o.STATIC_DRAW),o.bindBuffer(o.ARRAY_BUFFER,D),o.bufferData(o.ARRAY_BUFFER,C,o.STATIC_DRAW),this.o={bodyCount:i.count,upWickCount:a,downWickCount:u,upWickBuffer:L,downWickBuffer:D}}draw(t,n,i,r){let o=this.o;if(!o||o.bodyCount===0)return;let s=this.ensureProgram(i);Qd(n,i,s.body,o.bodyCount,r),ep(t,n,i,s.wick,o,r)}destroy(t){let n=t.i?.gl;if(n){this.invalidateBuffers(t);let i=this.r;i&&(n.deleteBuffer(i.body.quadBuffer),n.deleteBuffer(i.body.instanceBuffer),n.deleteBuffer(i.wick.cornerBuffer),n.deleteBuffer(i.wick.segmentBuffer))}this.r=null,this.o=null}};function Qd(e,t,n,i,r){if(i===0)return;let o=7*Float32Array.BYTES_PER_ELEMENT;e.useProgram(n.program),e.uniformMatrix4fv(n.u_projection,!1,r);let s=ee(t),{setDivisor:l}=s;e.bindBuffer(e.ARRAY_BUFFER,n.quadBuffer),e.enableVertexAttribArray(n.a_corner),e.vertexAttribPointer(n.a_corner,2,e.FLOAT,!1,0,0),l(n.a_corner,0),e.bindBuffer(e.ARRAY_BUFFER,n.instanceBuffer);let a=Float32Array.BYTES_PER_ELEMENT,u=(m,f,c)=>{e.enableVertexAttribArray(m),e.vertexAttribPointer(m,f,e.FLOAT,!1,o,c),l(m,1)};u(n.a_x_center,1,0),u(n.a_half_width,1,1*a),u(n.a_y0,1,2*a),u(n.a_y1,1,3*a),u(n.a_color,3,4*a),s.drawArraysInstanced(e.TRIANGLE_STRIP,0,4,i),l(n.a_x_center,0),l(n.a_half_width,0),l(n.a_y0,0),l(n.a_y1,0),l(n.a_color,0)}function ep(e,t,n,i,r,o){if(r.upWickCount===0&&r.downWickCount===0)return;let s=n.dpr;t.useProgram(i.program),t.uniformMatrix4fv(i.u_projection,!1,o),t.uniform2f(i.u_resolution,t.canvas.width,t.canvas.height),t.uniform1f(i.u_line_width,e.t.wick_width_px*s),t.disableVertexAttribArray(i.a_real_start),t.disableVertexAttribArray(i.a_real_end),t.vertexAttrib1f(i.a_real_start,1),t.vertexAttrib1f(i.a_real_end,1),t.uniform1f(i.u_interp_alpha,1);let l=ee(n),{setDivisor:a}=l;t.bindBuffer(t.ARRAY_BUFFER,i.cornerBuffer),t.enableVertexAttribArray(i.a_corner),t.vertexAttribPointer(i.a_corner,1,t.FLOAT,!1,0,0),a(i.a_corner,0),ym(t,l,i,r.upWickBuffer,r.upWickCount,e.$i),ym(t,l,i,r.downWickBuffer,r.downWickCount,e.ji),a(i.a_start,0),a(i.a_end,0)}function ym(e,t,n,i,r,o){if(r===0)return;let s=2*Float32Array.BYTES_PER_ELEMENT,{setDivisor:l}=t;e.uniform4f(n.u_color,o[0],o[1],o[2],1),e.bindBuffer(e.ARRAY_BUFFER,i),e.enableVertexAttribArray(n.a_start),e.vertexAttribPointer(n.a_start,2,e.FLOAT,!1,2*s,0),l(n.a_start,1),e.enableVertexAttribArray(n.a_end),e.vertexAttribPointer(n.a_end,2,e.FLOAT,!1,2*s,s),l(n.a_end,1),t.drawArraysInstanced(e.TRIANGLE_STRIP,0,4,r)}ke();pe();var vo=class{constructor(){d(this,"r",null);d(this,"o",null)}ensureProgram(t){if(this.r)return this.r;let n=t.gl,i=at(n),r=Z(t,"line-uniform",Ke,Je,["u_projection","u_color","u_resolution","u_line_width","u_interp_alpha"],["a_corner","a_start","a_end","a_real_start","a_real_end"]);return this.r={...r,cornerBuffer:i,segmentBuffer:n.createBuffer()},this.r}invalidateBuffers(t){let n=this.o;if(!n||!t.i){this.o=null;return}let i=t.i.gl;i.deleteBuffer(n.upBuffer),i.deleteBuffer(n.downBuffer),this.o=null}rebuildBuffers(t,n){if(t.vi!=="ohlc")return;let i=t.Se,r=n.gl;this.ensureProgram(n);let o=t.ge,s=i.xCenter,l=i.halfWidth,a=i.open,u=i.close,m=i.high,f=i.low,c=i.isUp,p=0,b=0;for(let A=0;A<i.count;A++)c[A]!==0?p++:b++;let g=new Float32Array(p*3*4),h=new Float32Array(b*3*4),y=0,C=0;for(let A=0;A<i.count;A++){let T=s[A]-o,L=a[A],D=u[A],M=f[A],P=m[A],w=l[A],I=c[A]!==0?g:h,G=c[A]!==0?y:C;I[G++]=T,I[G++]=M,I[G++]=T,I[G++]=P,I[G++]=T-w,I[G++]=L,I[G++]=T,I[G++]=L,I[G++]=T,I[G++]=D,I[G++]=T+w,I[G++]=D,c[A]!==0?y=G:C=G}let _=this.o,x=_?.upBuffer??r.createBuffer(),v=_?.downBuffer??r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,x),r.bufferData(r.ARRAY_BUFFER,g,r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,v),r.bufferData(r.ARRAY_BUFFER,h,r.STATIC_DRAW),this.o={upBuffer:x,downBuffer:v,upInstanceCount:p*3,downInstanceCount:b*3}}draw(t,n,i,r){let o=this.o;if(!o||o.upInstanceCount===0&&o.downInstanceCount===0)return;let s=this.ensureProgram(i),l=i.dpr;n.useProgram(s.program),n.uniformMatrix4fv(s.u_projection,!1,r),n.uniform2f(s.u_resolution,n.canvas.width,n.canvas.height),n.uniform1f(s.u_line_width,t.t.ohlc_line_width_px*l),n.disableVertexAttribArray(s.a_real_start),n.disableVertexAttribArray(s.a_real_end),n.vertexAttrib1f(s.a_real_start,1),n.vertexAttrib1f(s.a_real_end,1),n.uniform1f(s.u_interp_alpha,1);let a=ee(i),{setDivisor:u}=a;n.bindBuffer(n.ARRAY_BUFFER,s.cornerBuffer),n.enableVertexAttribArray(s.a_corner),n.vertexAttribPointer(s.a_corner,1,n.FLOAT,!1,0,0),u(s.a_corner,0),xm(n,a,s,o.upBuffer,o.upInstanceCount,t.$i),xm(n,a,s,o.downBuffer,o.downInstanceCount,t.ji),u(s.a_start,0),u(s.a_end,0)}destroy(t){let n=t.i?.gl;if(n){this.invalidateBuffers(t);let i=this.r;i&&(n.deleteBuffer(i.cornerBuffer),n.deleteBuffer(i.segmentBuffer))}this.r=null,this.o=null}};function xm(e,t,n,i,r,o){if(r===0)return;let s=4*Float32Array.BYTES_PER_ELEMENT,l=2*Float32Array.BYTES_PER_ELEMENT,{setDivisor:a}=t;e.uniform4f(n.u_color,o[0],o[1],o[2],1),e.bindBuffer(e.ARRAY_BUFFER,i),e.enableVertexAttribArray(n.a_start),e.vertexAttribPointer(n.a_start,2,e.FLOAT,!1,s,0),a(n.a_start,1),e.enableVertexAttribArray(n.a_end),e.vertexAttribPointer(n.a_end,2,e.FLOAT,!1,s,l),a(n.a_end,1),t.drawArraysInstanced(e.TRIANGLE_STRIP,0,4,r)}var ii=class extends pn{constructor(){super(...arguments);d(this,"B",null);d(this,"le",[]);d(this,"a",[]);d(this,"Se",ni());d(this,"ri",{min:0,max:1});d(this,"Zi",null);d(this,"te","category");d(this,"M",null);d(this,"S",null);d(this,"Oe",null);d(this,"ge",0);d(this,"$i",[0,.8,.4]);d(this,"ji",[.8,.2,.2]);d(this,"Xi",null);d(this,"ve",-1);d(this,"Er",-1);d(this,"X",{bodyWick:new _o,ohlc:new vo});d(this,"Ti",!0);d(this,"Rt",null)}tooltipCallbacks(){return{onHover:(n,i)=>Co(this,n,i),onLeave:()=>{this.ve!==-1&&(this.ve=-1,dt(this))},onPin:(n,i)=>{if(Co(this,n,i),this.ve>=0){let r=this.ve;dm(this,r),this.Yo(r)}},onUnpin:()=>{this.emitUnselect()}}}async Yo(n){let i=this.Mo(n);i&&await this.emitClickAndSelect(i)}clickTargetAt(n,i){return Co(this,n,i),this.Mo(this.ve)}Mo(n){if(n<0||n>=this.Se.count)return null;let i=this.Se.catIdx[n],r=this.Se.splitIdx[n],o=this.te==="numeric"&&this.S?[this.S[i]??null]:this.Fe.map(u=>u.labels[i]??null),s=this.le[r]??"",l=this.P.length>0&&s!==""?s.split("|"):[],a=this.T[1]||this.T.find(u=>!!u)||"";return{rowIdx:i+this.tt,columnName:a,groupByValues:o,splitByValues:l}}invalidateTheme(){super.invalidateTheme(),this.Xi=null}async uploadAndRender(n,i,r,o){if(this.i=n,r!==0)return;let s=fm({columns:i,numRows:o,columnSlots:this.T,groupBy:this.p,splitBy:this.P,groupByTypes:this.st,dateModifiers:this.Lt,bandInnerFrac:this.t.band_inner_frac,barInnerPad:this.t.bar_inner_pad,scratchCandles:this.Se});this.t.domain_mode==="expand"?this.Zi=ti(this.Zi,s.yDomain):this.Zi=null,this.Fe=s.rowPaths,this.j=s.numCategories,this.tt=s.rowOffset,this.le=s.splitPrefixes,this.a=s.series,this.Se=s.candles,this.ri=s.yDomain,this.te=s.axisMode.mode,this.M=s.numericCategoryDomain,this.S=s.categoryPositions,this.ge=s.numericCategoryDomain?.min??0,this.Rt=null,Qs(this),bm(this),gm(this,n),await this.requestRender(n)}Ot(n){this.i=n,hm(this,n)}resetExpandedDomain(){this.Zi=null}destroyInternal(){if(this.i){let n=this.i.gl;this.Y&&n.deleteBuffer(this.Y),this.X.bodyWick.destroy(this),this.X.ohlc.destroy(this)}this.r=null,this.B=null,this.Y=null,this.Se=ni(),this.a=[],this.Fe=[],this.j=0,this.Xi=null}};var Am={scatter:async()=>Lr,line:async()=>Tr,density:async()=>Mr,treemap:async()=>Xr,sunburst:async()=>qr,heatmap:async()=>xo,"y-bar":async()=>ct,"y-line":async()=>ct,"y-scatter":async()=>ct,"y-area":async()=>ct,"x-bar":async()=>go,candlestick:async()=>ii,ohlc:async()=>ii,"map-scatter":async()=>(await Promise.resolve().then(()=>(wo(),Mo))).MapScatterChart,"map-line":async()=>(await Promise.resolve().then(()=>(wo(),Mo))).MapLineChart,"map-density":async()=>(await Promise.resolve().then(()=>(wo(),Mo))).MapDensityChart};async function Lm(e,t,n){let i=new Map;await e.with_typed_arrays(n??{},async(r,o,s,l)=>{for(let u=0;u<r.length;u++){let m=r[u],f=o[u],c=s[u]??void 0,p=l[u];p!==null?i.set(m,{type:"string",indices:f,dictionary:p,valid:c}):f instanceof Float32Array?i.set(m,{type:"float32",values:f,valid:c}):f instanceof Int32Array?i.set(m,{type:"int32",values:f,valid:c}):f instanceof Float64Array?i.set(m,{type:"float64",values:f,valid:c}):i.set(m,{type:"float32",values:new Float32Array(f),valid:c})}let a=0;if(i.size>0){a=1/0;for(let u of i.values()){let m=u.indices?.length??u.values?.length??0;m<a&&(a=m)}}await t(i,a)})}Hi();var Tm=new Map;async function Mm(e){let t=[e.family,e.src,e.weight??"",e.style??""].join("|"),n=Tm.get(t);if(n){await n;return}n=(async()=>{try{let i={};e.style&&(i.style=e.style),e.weight&&(i.weight=e.weight),e.stretch&&(i.stretch=e.stretch);let r=new FontFace(e.family,e.src,i);await r.load(),self.fonts.add(r)}catch(i){console.warn(`Failed to load font ${e.family}:`,i)}})(),Tm.set(t,n),await n}function Ro(e,t){switch(t.kind){case"setViewByName":e.setViewByName(t.name);break;case"setColumnsConfig":e.chartImpl.setColumnsConfig?.(t.cfg);break;case"setPluginConfig":e.setPluginConfig(t.cfg,t.tileSource),e.redraw();break;case"setBufferMaxCapacity":e.glManager.L.maxCapacity=t.n;break;case"loadAndRender":e.loadAndRender(t);break;case"redraw":e.redraw();break;case"deselect":e.chartImpl.deselect?.();break;case"resize":e.resize(t.cssWidth,t.cssHeight,t.dpr),e.redrawAck(t.msgId);break;case"clear":e.clear();break;case"invalidateTheme":e.chartImpl.setTheme?.(t.themeVars),e.chartImpl.invalidateTheme?.(),e.resize(e.cssWidth,e.cssHeight,e.dpr);break;case"restoreZoom":e.restoreZoom(t.state);break;case"resetAllZooms":e.resetAllZooms(),e.redraw(),e.post({kind:"zoomChanged",isDefault:e.allZoomsDefault()});break;case"resetExpandedDomain":e.resetExpandedDomain();break;case"interaction":e.onInteraction(t.event);break;case"saveZoom":e.post({kind:"saveZoomReply",requestId:t.requestId,state:e.saveZoom()});break;case"hitTest":{let n=t.requestId,i=e.chartImpl.resolveHit?.(t.mx,t.my);Promise.resolve(i??null).then(r=>{e.post({kind:"hitTestReply",requestId:n,hit:r})}).catch(r=>{e.post({kind:"hitTestReply",requestId:n,hit:null,error:String(r)})});break}case"destroy":e.destroy();break;case"init":break;case"snapshotPng":{let n=t.requestId;e.snapshotPng().then(i=>{e.post({kind:"snapshotPngReply",requestId:n,blob:i})}).catch(i=>{e.post({kind:"snapshotPngReply",requestId:n,error:String(i)})});break}}}var ri=new Map,il=new Set;function rl(e,t,n){let i={sessionId:e,msg:t};n&&n.length>0?self.postMessage(i,n):self.postMessage(i)}function tp(e){return{postMessage:(t,n)=>rl(e,t,n),addEventListener:()=>{},removeEventListener:()=>{},start:()=>{},close:()=>{},dispatchEvent:()=>!1,onmessage:null,onmessageerror:null}}function wm(e){self.addEventListener("message",function(t){let n=t.data,{sessionId:i,msg:r}=n;if(r.kind==="init"){if(ri.has(i)){rl(i,{kind:"error",message:`sessionId ${i} already initialized`});return}e(r,tp(i)).then(s=>{if(il.delete(i)){Ro(s,{kind:"destroy"});return}ri.set(i,s)}).catch(s=>{il.delete(i),rl(i,{kind:"error",message:String(s)})});return}if(r.kind==="destroy"){let s=ri.get(i);s?(Ro(s,r),ri.delete(i)):il.add(i);return}let o=ri.get(i);o&&Ro(o,r)})}ns();var Fo=class extends Error{constructor(){super("StaleGenerationError")}};async function np(e){let t=Am[e];if(!t)throw new Error(`Unknown chart tag: ${e}`);return await t()}var ol=null;function ip(e){return ol||(ol=new Di(4,{precompile:e})),ol}var sl=class{constructor(t,n,i,r,o,s){d(this,"chartImpl");d(this,"glManager");d(this,"zoomController",null);d(this,"gridlines");d(this,"chrome");d(this,"cssWidth");d(this,"cssHeight");d(this,"dpr");d(this,"qi",null);d(this,"Do",null);d(this,"Tn",null);d(this,"Pr",0);d(this,"Br",!1);d(this,"client");d(this,"view");d(this,"table");d(this,"controlPort");d(this,"Gr",0);d(this,"Mn",null);d(this,"kr",0);d(this,"Wr",0);if(this.client=n,this.view=i,this.table=r,this.controlPort=o,this.chartImpl=new s,t.tileSource&&et.register(t.tileSource),t.renderMode==="blit"&&!t.glCanvas&&!0)this.glManager=new An(ip(t.precompileShaders??!1).acquire());else{let m=t.glCanvas??new OffscreenCanvas(Math.max(1,Math.round(t.cssWidth*t.dpr)),Math.max(1,Math.round(t.cssHeight*t.dpr)));this.glManager=new An(m,{precompile:t.precompileShaders??!1})}let a=Math.max(1,Math.round(t.cssWidth*t.dpr)),u=Math.max(1,Math.round(t.cssHeight*t.dpr));this.gridlines=t.gridlinesCanvas??new OffscreenCanvas(a,u),this.chrome=t.chromeCanvas??new OffscreenCanvas(a,u),t.renderMode==="blit"&&(this.glManager.setFrameCallback(m=>{this.Pr+=1;let f=this.Eo(m);this.post({kind:"frameBitmap",bitmap:f},[f])}),this.chartImpl.setOverlayPresenter?.(()=>this.qo())),this.cssWidth=t.cssWidth,this.cssHeight=t.cssHeight,this.dpr=t.dpr,this.chartImpl.setGridlineCanvas?.(this.gridlines),this.chartImpl.setChromeCanvas?.(this.chrome),this.chartImpl.setTheme?.(t.themeVars),t.defaultChartType&&this.chartImpl.setDefaultChartType?.(t.defaultChartType),this.chartImpl.setFacetConfig?.(t.facetConfig),this.chartImpl.setPluginConfig?.(t.pluginConfig),t.columnsConfig&&this.chartImpl.setColumnsConfig?.(t.columnsConfig),this.chartImpl.setZoomController&&(this.zoomController=new Ht,this.chartImpl.setZoomController(this.zoomController)),this.chartImpl.setView?.(i),this.glManager.L.maxCapacity=t.bufferMaxCapacity,this.glManager.resize(t.cssWidth,t.cssHeight,t.dpr),this.chartImpl.attachTooltip?.(new Gi(m=>this.post(m)))}setViewByName(t){this.view=this.client.__unsafe_open_view(t),this.chartImpl.setView?.(this.view)}setPluginConfig(t,n){n&&et.register(n),this.chartImpl.setPluginConfig?.(t)}async loadAndRender(t){let n=++this.Gr,i;try{let[r,o,s,l]=await Promise.all([this.view.num_rows(),this.view.schema(),this.view.expression_schema(),this.table?.schema()??Promise.resolve({})]);if(this.Gr!==n)return;this.chartImpl.setViewPivots?.(t.viewerConfig.group_by,t.viewerConfig.split_by),this.chartImpl.setColumnTypes?.(o),this.chartImpl.setGroupByTypes?.({...l,...s}),this.chartImpl.setColumnSlots?.(t.viewerConfig.columns);let a=Object.keys(o).length||1,u=Math.floor(this.glManager.L.maxCapacity/a),m=Math.min(r,u);this.glManager.ensureBufferCapacity(m);try{await Lm(this.view,async(f,c)=>{if(this.Gr!==n)throw new Fo;await this.chartImpl.uploadAndRender(this.glManager,f,0,Math.min(m,c)),this.chartImpl.refreshInteraction?.()},{end_row:m,float32:t.options.float32})}catch(f){if(!(f instanceof Fo))throw f}}catch(r){(r+"").indexOf("View not found")===-1&&(console.error("loadAndRender failed",r),i=String(r))}finally{this.post({kind:"loadAndRenderAck",msgId:t.msgId,error:i})}}redraw(){this.chartImpl.requestRender(this.glManager)}redrawAck(t){this.chartImpl.requestRender(this.glManager).catch(()=>{}).finally(()=>this.post({kind:"resizeAck",msgId:t}))}resize(t,n,i){this.cssWidth=t,this.cssHeight=n,this.dpr=i,this.glManager.requestResize(t,n,i),this.chartImpl.requestRender(this.glManager)}clear(){jl(this.glManager,()=>{this.glManager.clear(),this.gridlines.getContext("2d")?.clearRect(0,0,this.gridlines.width,this.gridlines.height)})}saveZoom(){return this.zoomController?.serialize()}restoreZoom(t){t&&this.zoomController?.restore(t)}allZoomsDefault(){if(this.zoomController&&!this.zoomController.isDefault())return!1;let t=this.chartImpl?.En;if(t){for(let n of t)if(n&&!n.isDefault())return!1}return!0}resetAllZooms(){this.zoomController?.reset();let t=this.chartImpl?.En;if(t)for(let n of t)n?.reset();this.resetExpandedDomain()}resetExpandedDomain(){this.chartImpl.resetExpandedDomain?.()}Po(t,n){let i=this.chartImpl,r=i?.g;if(r){for(let l=0;l<r.cells.length;l++){let a=r.cells[l],u=a.layout.e;if(t>=u.x&&t<=u.x+u.width&&n>=u.y&&n<=u.y+u.height){let m=i.getZoomControllerForFacet?.(l)??this.zoomController;return m?{controller:m,layout:a.layout}:null}}return null}if(!this.zoomController)return null;let o=i?.f;if(!o)return null;let s=o.e;return t<s.x||t>s.x+s.width||n<s.y||n>s.y+s.height?null:{controller:this.zoomController,layout:o}}Ko(t){let n=this.chartImpl,i=n?.I,r=n?.t;return!i||!r?!1:i.handleEvent(t,{cfg:r,cssWidth:this.cssWidth,cssHeight:this.cssHeight,legendRects:n.vn??[],repaint:o=>{!o&&typeof n.repaintChrome=="function"?n.repaintChrome():this.chartImpl.requestRender(this.glManager)},postDelta:o=>this.post({kind:"pluginConfigDelta",fields:o}),setCursor:o=>n.Ai?.setCursor?.(o),dispatchLeave:()=>this.v()?.dispatchLeave()})}onInteraction(t){try{this.Jo(t)}catch(n){this.Mn=null,this.chartImpl?.I?.cancelGesture?.(),console.error("interaction dispatch failed",n)}}Jo(t){if(!(!(this.Mn!==null&&(t.type==="pointermove"||t.type==="pointerup"))&&this.Ko(t)))switch(t.type){case"wheel":{let i=this.Po(t.mx,t.my);if(!i)return;fl(i,t.mx,t.my,t.deltaY),this.chartImpl.requestRender(this.glManager),this.post({kind:"zoomChanged",isDefault:this.allZoomsDefault()});break}case"pointerdown":{let i=this.Po(t.mx,t.my);if(!i)return;this.Mn=i,this.kr=t.mx,this.Wr=t.my;break}case"pointermove":{if(this.Mn){let i=t.mx-this.kr,r=t.my-this.Wr;this.kr=t.mx,this.Wr=t.my,cl(this.Mn,i,r),this.chartImpl.requestRender(this.glManager),this.post({kind:"zoomChanged",isDefault:this.allZoomsDefault()})}else this.v()?.dispatchHover(t.mx,t.my);break}case"pointerup":{this.Mn=null;break}case"pointerleave":{this.v()?.dispatchLeave();break}case"click":{this.v()?.dispatchClick(t.mx,t.my);break}case"dblclick":{this.v()?.dispatchDblClick(t.mx,t.my);break}}}v(){return this.chartImpl?.v??null}Eo(t){let n=t.width,i=t.height;this.qi||(this.qi=new OffscreenCanvas(n,i),this.Do=this.qi.getContext("2d"));let r=this.qi,o=this.Do;return o?(r.width!==n||r.height!==i?(r.width=n,r.height=i):o.clearRect(0,0,n,i),this.gridlines.width===n&&this.gridlines.height===i&&o.drawImage(this.gridlines,0,0),o.drawImage(t,0,0),this.Tn!==t&&(this.Tn?.close(),this.Tn=t),this.chrome.width===n&&this.chrome.height===i&&o.drawImage(this.chrome,0,0),r.transferToImageBitmap()):t}qo(){if(this.Br)return;this.Br=!0;let t=this.Pr;queueMicrotask(()=>{this.Br=!1;let n=this.Tn;if(this.Pr!==t||!n)return;let i=Math.max(1,Math.round(this.cssWidth*this.dpr)),r=Math.max(1,Math.round(this.cssHeight*this.dpr));if(n.width!==i||n.height!==r)return;let o=this.Eo(n);o!==n&&this.post({kind:"frameBitmap",bitmap:o},[o])})}async snapshotPng(){this.glManager.beginFrame(),this.chartImpl.renderFrameSync(this.glManager);let t=this.glManager.gl,n=t.canvas,i=n.width,r=n.height,o=new Uint8ClampedArray(i*r*4);t.readPixels(0,0,i,r,t.RGBA,t.UNSIGNED_BYTE,o);let s=new OffscreenCanvas(i,r),l=s.getContext("2d");if(!l)throw new Error("snapshotPng: 2D context unavailable");let u=this.chartImpl.A?.()?.backgroundColor??"transparent";u!=="transparent"&&(l.fillStyle=u,l.fillRect(0,0,i,r)),l.drawImage(this.gridlines,0,0);let m=new OffscreenCanvas(i,r),f=m.getContext("2d");if(!f)throw new Error("snapshotPng: 2D context unavailable for GL blit");return f.putImageData(new ImageData(o,i,r),0,0),l.save(),l.scale(1,-1),l.drawImage(m,0,-r),l.restore(),l.drawImage(this.chrome,0,0),await s.convertToBlob({type:"image/png"})}destroy(){Zl(this.glManager),this.Tn?.close(),this.Tn=null,this.chartImpl.destroy(),this.glManager.destroy()}post(t,n){n&&n.length>0?this.controlPort.postMessage(t,n):this.controlPort.postMessage(t)}};async function rp(e,t){let n=await import(e.clientWorkerURL.toString());await n.initSync({module:e.clientWasm}),e.fontFaces?.length&&await Promise.all(e.fontFaces.map(Mm));let i=e.proxyPort,r=new n.Client(async u=>{let m=u.slice().buffer;i.postMessage(m,[m])},async()=>i.close());i.addEventListener("message",u=>{r.handle_response(new Uint8Array(u.data))}),i.start();let o=r.__unsafe_open_view(e.viewName),s=e.tableName?await r.open_table(e.tableName):null,l=await np(e.chartTag),a=new sl(e,r,o,s,t,l);return a.post({kind:"ready"}),a}wm(rp);export{sl as WorkerRenderer};\n';
var N4 = null;
async function lt4() {
  if (N4) return N4;
  let r3 = new Blob([Re3], {
    type: "application/javascript"
  });
  return N4 = URL.createObjectURL(r3), N4;
}
var Se4 = lt4;
var I4 = null;
var W5 = /* @__PURE__ */ new Map();
var ot2 = 0;
async function st2() {
  return I4 || (I4 = (async () => {
    let r3 = await Se4(), e2 = new Worker(r3, { type: "module", name: "viewer-charts" });
    e2.addEventListener("message", (i7) => {
      let n = i7.data;
      W5.get(n.sessionId)?.(n.msg);
    });
    let t = false;
    return e2.addEventListener("error", (i7) => {
      if (t)
        return;
      t = true, I4 = null;
      let l3 = `perspective-viewer-charts renderer worker error: ${i7.message || `failed to load ${r3}`}`;
      console.error(l3, i7.error ?? "");
      let o = { kind: "error", message: l3 };
      for (let a2 of W5.values())
        a2(o);
    }), e2;
  })(), I4);
}
var O4 = class {
  _handle = null;
  /**
   * Set by {@link destroy}. Requests allocated after teardown settle
   * immediately in `_allocPending` — `_post` is already a no-op once
   * `_handle` is null, so a late request would otherwise never
   * receive its reply and pend forever.
   */
  _destroyed = false;
  _proxyChannel = null;
  _proxySession = null;
  _client;
  _view;
  /** The name of the view the worker currently holds, from `init` or `setViewByName`. */
  _postedViewName = null;
  _tableName;
  /** Source panel `slot`, tagged onto dispatched interaction events so the
   * host can route them (master/detail, global filter) to the right panel. */
  _panel;
  _clientWorkerURL;
  _clientWasm;
  _chartTag;
  _maxCells;
  _precompileShaders;
  _ready;
  _resolveReady;
  _rejectReady;
  /**
   * Pending request/reply promises across all worker round-trips —
   * `saveZoom`, `uploadChunk` ACKs, and `snapshotPng`. Each entry
   * carries its `kind` so `destroy()` can apply per-kind teardown
   * semantics (uploadChunk resolves silently, the rest reject with
   * a teardown error).
   *
   * Keyed by a single monotonic counter; the worker's reply messages
   * carry that id back verbatim. One counter for all kinds is safe
   * because the host's switch already keys on `msg.kind` before
   * resolving.
   */
  _pending = /* @__PURE__ */ new Map();
  _pendingCounter = 0;
  _onZoomChanged = null;
  _onPluginConfigDelta = null;
  /**
   * Cached zoom-default flag pushed by the renderer after each zoom
   * mutation. Surfaced sync via `allZoomsDefault()`; updates between
   * calls are best-effort.
   */
  _allZoomsDefault = true;
  _hostGlCanvas = null;
  /**
   * Blit-mode only: the visible `.webgl-canvas`'s 2D context. The
   * worker emits each completed GL frame as a `FrameBitmapMsg`; on
   * receipt we `drawImage` the bitmap into this context and `close()`
   * it to release the GPU surface. Null in direct mode (the visible
   * canvas's drawing buffer is the worker's transferred GL canvas).
   */
  _displayCtx = null;
  /**
   * Present-hold state for the staged-present presize protocol
   * ({@link presize}). While holding, inbound `frameBitmap`s are
   * STAGED (latest wins) instead of blitted, so the on-screen frame
   * — old dimensions in the old, unchanged box — stays put until the
   * host invokes the present closure `presize` resolved to, in the
   * same task as its layout commit. Entered only by `presize`;
   * exited by the present closure, by `presize`'s rejection path, or
   * by `destroy` — every settle path releases the hold or hands the
   * caller the release.
   */
  /**
   * The last `(cssWidth, cssHeight, dpr)` posted to the worker — at init
   * or any resize — i.e. the dimensions the worker has already rendered
   * (or has an in-flight render for). {@link resize} short-circuits when
   * its measurement matches (±0.5px, the presize protocol's own
   * threshold): reactive resizes fan in from several host paths per
   * layout transition (the post-commit fan-out, activation nudges, the
   * fresh-restore tail), and every worker resize is an unconditional
   * full re-render.
   */
  _lastPostedSize = null;
  _holdPresent = false;
  _stagedFrame = null;
  /**
   * Host-side sink for tooltip + cursor side-effects. The chart
   * inside the renderer calls into a `MessageHostSink` that posts
   * `pinTooltip` / `dismissTooltip` / `setCursor` over the control
   * channel; this sink applies them to the DOM. Initialized lazily
   * on first signal so we don't pay for the parent-style lookup
   * unless a user interacts.
   */
  _hostSink = null;
  /** `plugin_config.tooltip_commands`, applied to the host sink. */
  _tooltipCommands = true;
  /**
   * Last `insertConfig` accepted by a `userSelect { selected: true }`
   * message. Used to populate `removeConfigs` on the next
   * `selected: false` (unpin / drill-up / view-change) — mirrors
   * datagrid's `model._last_insert_configs` so coordinated-filter
   * consumers can roll back the previous select when a new one
   * supplants it.
   */
  _lastInsertConfig = void 0;
  constructor(e2) {
    this._client = e2.client, this._view = e2.view, this._tableName = e2.tableName, this._panel = e2.panel, this._clientWorkerURL = e2.clientWorkerURL, this._clientWasm = e2.clientWasm, this._chartTag = e2.chartTag, this._maxCells = e2.maxCells, this._precompileShaders = e2.precompileShaders ?? false, this._onZoomChanged = e2.onZoomChanged ?? null, this._onPluginConfigDelta = e2.onPluginConfigDelta ?? null, this._ready = new Promise((t, i7) => {
      this._resolveReady = t, this._rejectReady = i7;
    });
  }
  async init(e2) {
    this._hostGlCanvas = e2.gl;
    let t = new MessageChannel();
    this._proxyChannel = t, this._proxySession = this._client.new_proxy_session(
      (u4) => {
        let f3 = u4.slice().buffer;
        t.port1.postMessage(f3, [f3]);
      }
    ), t.port1.addEventListener("message", (u4) => {
      this._proxySession.handle_request(new Uint8Array(u4.data));
    }), t.port1.start();
    let i7, n, l3;
    e2.renderBlitMode === "blit" ? this._displayCtx = e2.gl.getContext("2d") : (i7 = e2.gl.transferControlToOffscreen(), n = e2.gridlines.transferControlToOffscreen(), l3 = e2.chrome.transferControlToOffscreen());
    let o = e2.gl.getBoundingClientRect(), a2 = window.devicePixelRatio || 1, s3 = S4(e2.gl), h3 = Ae2(), c2 = {
      kind: "init",
      renderMode: e2.renderBlitMode,
      glCanvas: i7,
      gridlinesCanvas: n,
      chromeCanvas: l3,
      proxyPort: t.port2,
      clientWorkerURL: this._clientWorkerURL,
      clientWasm: this._clientWasm,
      chartTag: this._chartTag,
      viewName: this._view.__unsafe_get_name(),
      tableName: this._tableName,
      facetConfig: e2.facetConfig,
      pluginConfig: e2.pluginConfig,
      columnsConfig: e2.columnsConfig,
      defaultChartType: e2.defaultChartType,
      tileSource: p5.specFor(
        e2.pluginConfig.map_tile_provider
      ),
      themeVars: s3,
      fontFaces: h3,
      cssWidth: o.width,
      cssHeight: o.height,
      dpr: a2,
      bufferMaxCapacity: 0,
      precompileShaders: this._precompileShaders
    };
    this._postedViewName = c2.viewName, this._lastPostedSize = {
      cssWidth: o.width,
      cssHeight: o.height,
      dpr: a2
    }, this._handle = await this._createHandle(), this._handle.addMessageListener(
      (u4) => this._handleRendererMsg(u4)
    );
    let d3 = [t.port2];
    l3 && d3.unshift(l3), n && d3.unshift(n), i7 && d3.unshift(i7), this._handle.post(c2, d3), await this._ready;
  }
  /**
   * Opens a session on the module-shared renderer `Worker`.
   */
  async _createHandle() {
    let e2 = await st2(), t = ++ot2;
    return {
      post: (i7, n) => e2.postMessage({ sessionId: t, msg: i7 }, n),
      addMessageListener: (i7) => {
        W5.set(t, i7);
      },
      terminate: () => {
        W5.delete(t);
      }
    };
  }
  setView(e2) {
    this._view = e2;
    let t = e2.__unsafe_get_name();
    t !== this._postedViewName && (this._postedViewName = t, this._post({ kind: "setViewByName", name: t }));
  }
  setColumnsConfig(e2) {
    this._post({ kind: "setColumnsConfig", cfg: e2 });
  }
  setPluginConfig(e2) {
    this._tooltipCommands = e2.tooltip_commands !== false, this._hostSink && (this._hostSink.commandsEnabled = this._tooltipCommands, this._hostSink.refreshCommands()), this._post({
      kind: "setPluginConfig",
      cfg: e2,
      tileSource: p5.specFor(e2.map_tile_provider)
    });
  }
  setBufferMaxCapacity(e2) {
    this._post({ kind: "setBufferMaxCapacity", n: e2 });
  }
  /**
   * Trigger a worker-side data fetch + render cycle. The worker
   * resolves all schema / row-count metadata against its own `View`
   * and `Table`, runs `view.with_typed_arrays`, and pipes the
   * resulting `ColumnDataMap` directly into `chartImpl.uploadAndRender`
   * — no host-side `Client`/`Table`/`View` await, no `postMessage` of
   * column buffers.
   *
   * The returned promise resolves when the worker replies with
   * `loadAndRenderAck`. Per the worker's "resolve on stale"
   * contract, a mid-flight cancellation (a newer `loadAndRender`
   * superseding this one) still acks — the host's awaiter just
   * resolves quietly. Calls issued after `destroy()` resolve
   * immediately (see `_allocPending`).
   */
  loadAndRender(e2) {
    let { id: t, promise: i7 } = this._allocPending("loadAndRender"), n = {
      kind: "loadAndRender",
      msgId: t,
      viewerConfig: e2.viewerConfig,
      options: { float32: e2.options?.float32 ?? true }
    };
    return this._post(n), i7;
  }
  redraw() {
    this._post({ kind: "redraw" });
  }
  /**
   * Silently clear the worker chart's selection state (pinned tooltip) —
   * no selection events are emitted; the worker echoes `dismissTooltip`
   * to drop the host-side pinned artifact. See `DeselectMsg`.
   */
  deselect() {
    this._post({ kind: "deselect" });
  }
  /**
   * Resize the chart to the GL canvas's CURRENT CSS box and resolve
   * once the resized frame has PRESENTED (the worker's `resizeAck`) —
   * not at message-post, which would let callers proceed while the
   * old-dimensions bitmap is still on screen. Reactive geometry
   * changes only; anticipated ones go through {@link presize}.
   *
   * A measurement matching {@link _lastPostedSize} resolves immediately
   * WITHOUT a worker round trip: the worker has already rendered (or is
   * presenting) that exact frame, and re-posting would be a full
   * re-render of an identical bitmap.
   */
  resize() {
    if (!this._hostGlCanvas)
      return Promise.resolve();
    let e2 = this._hostGlCanvas.getBoundingClientRect(), t = window.devicePixelRatio || 1, i7 = this._lastPostedSize;
    return i7 && Math.abs(i7.cssWidth - e2.width) <= 0.5 && Math.abs(i7.cssHeight - e2.height) <= 0.5 && i7.dpr === t ? Promise.resolve() : this._postResize(e2.width, e2.height);
  }
  /**
   * Staged-present variant of {@link resize}: render at the given
   * TARGET canvas CSS box (no measurement — the caller supplies the
   * box the pending layout commit will produce), HOLDING the
   * resulting frame (and any others that arrive meanwhile) offscreen
   * instead of blitting, so nothing on screen changes. Resolves,
   * once the resized frame is staged, to a present closure: calling
   * it blits the latest staged frame and exits the hold — the host
   * runs it in the same task as its layout commit so geometry and
   * pixels land in one paint. On rejection (teardown) the hold is
   * released here, so every settle path either frees the display or
   * hands the caller the release.
   */
  presize(e2, t) {
    if (!this._hostGlCanvas)
      return Promise.resolve();
    let i7 = window.devicePixelRatio || 1, n = this._lastPostedSize;
    return n && Math.abs(n.cssWidth - e2) <= 0.5 && Math.abs(n.cssHeight - t) <= 0.5 && n.dpr === i7 ? Promise.resolve() : (this._holdPresent = true, this._postResize(e2, t).then(
      () => () => this._presentStaged(),
      (l3) => {
        throw this._presentStaged(), l3;
      }
    ));
  }
  _postResize(e2, t) {
    let i7 = window.devicePixelRatio || 1, { id: n, promise: l3 } = this._allocPending("resize");
    return this._lastPostedSize = { cssWidth: e2, cssHeight: t, dpr: i7 }, this._post({
      kind: "resize",
      msgId: n,
      cssWidth: e2,
      cssHeight: t,
      dpr: i7
    }), l3;
  }
  _presentStaged() {
    this._holdPresent = false;
    let e2 = this._stagedFrame;
    this._stagedFrame = null, e2 && this._drawFrameBitmap(e2);
  }
  clear() {
    this._post({ kind: "clear" });
  }
  invalidateTheme() {
    if (!this._hostGlCanvas)
      return;
    let e2 = S4(this._hostGlCanvas);
    this._post({ kind: "invalidateTheme", themeVars: e2 });
  }
  async saveZoom() {
    let { id: e2 } = this._allocPending("saveZoom");
    this._post({ kind: "saveZoom", requestId: e2 });
  }
  /**
   * Allocate a pending request slot of the given `kind`. Returns the
   * id (encoded into the outgoing `ControlMsg`) and a promise that
   * resolves / rejects when the matching reply arrives or
   * `destroy()` drains the table. Requests issued *after* `destroy()`
   * settle immediately with the same per-kind semantics as the drain.
   */
  _allocPending(e2) {
    if (this._destroyed) {
      if (e2 === "loadAndRender")
        return {
          id: -1,
          promise: Promise.resolve(void 0)
        };
      let n = Promise.reject(
        new Error("RendererTransport destroyed")
      );
      return n.catch(() => {
      }), { id: -1, promise: n };
    }
    let t = ++this._pendingCounter, i7 = new Promise((n, l3) => {
      this._pending.set(t, { kind: e2, resolve: n, reject: l3 });
    });
    return { id: t, promise: i7 };
  }
  restoreZoom(e2) {
    this._post({ kind: "restoreZoom", state: e2 });
  }
  allZoomsDefault() {
    return this._allZoomsDefault;
  }
  resetAllZooms() {
    this._post({ kind: "resetAllZooms" });
  }
  resetExpandedDomain() {
    this._post({ kind: "resetExpandedDomain" });
  }
  /**
   * Request a PNG snapshot of the current frame. The worker flushes a
   * synchronous render across the GL + gridlines + chrome layers,
   * composites them into a single `OffscreenCanvas`, fills the theme
   * background, and replies with the `convertToBlob` result.
   */
  snapshotPng() {
    let { id: e2, promise: t } = this._allocPending("snapshotPng");
    return this._post({ kind: "snapshotPng", requestId: e2 }), t;
  }
  /**
   * The `{ frame, ref }` of the mark at canvas-relative `(mx, my)`, or
   * `null` over nothing.
   */
  hitTest(e2, t) {
    let { id: i7, promise: n } = this._allocPending("hitTest");
    return this._post({ kind: "hitTest", requestId: i7, mx: e2, my: t }), n;
  }
  forwardInteraction(e2) {
    this._post({ kind: "interaction", event: e2 });
  }
  destroy() {
    this._destroyed = true, this._post({ kind: "destroy" }), this._proxySession && this._proxySession.close().catch(() => {
    }), this._proxyChannel && (this._proxyChannel.port1.close(), this._proxyChannel = null), this._handle && (this._handle.terminate(), this._handle = null), this._hostSink?.dismiss(), this._hostSink = null, this._hostGlCanvas = null, this._displayCtx = null, this._holdPresent = false, this._stagedFrame?.close(), this._stagedFrame = null;
    let e2 = new Error("RendererTransport destroyed");
    for (let t of this._pending.values())
      t.kind === "loadAndRender" ? t.resolve(void 0) : t.reject(e2);
    this._pending.clear();
  }
  _post(e2) {
    this._postRaw(e2, []);
  }
  _postRaw(e2, t) {
    this._handle && this._handle.post(e2, t);
  }
  _handleRendererMsg(e2) {
    switch (e2.kind) {
      case "ready":
        this._resolveReady();
        break;
      case "zoomChanged":
        this._allZoomsDefault = e2.isDefault, this._onZoomChanged?.(e2.isDefault);
        break;
      case "saveZoomReply":
        this._resolvePending(e2.requestId, "saveZoom", e2.state);
        break;
      case "pinTooltip":
        this._ensureHostSink()?.pin(
          e2.grid,
          e2.pos,
          e2.bounds,
          e2.style,
          e2.hit
        );
        break;
      case "dismissTooltip":
        this._hostSink?.dismiss();
        break;
      case "setCursor":
        this._ensureHostSink()?.setCursor(e2.cursor);
        break;
      case "pluginConfigDelta":
        this._onPluginConfigDelta?.(e2.fields);
        break;
      case "userClick":
        this._dispatchOnViewer(
          new CustomEvent(
            "perspective-click",
            {
              bubbles: true,
              composed: true,
              // Tag with the source panel so a multi-panel host
              // can attribute the click to the right panel.
              detail: { ...e2.detail, panel: this._panel }
            }
          )
        );
        break;
      case "userSelect": {
        let t = this._lastInsertConfig ? [this._lastInsertConfig] : [], i7 = e2.selected ? [e2.insertConfig] : [];
        this._lastInsertConfig = e2.selected ? e2.insertConfig : void 0;
        let n = new i6(
          e2.selected,
          e2.row,
          e2.column_names,
          // `Partial<ViewConfig>` (what the chart emits) is
          // structurally a `ViewConfigUpdate` for the
          // `filter`-only patches we ship; the only
          // incompatible field (`group_by_depth: number |
          // null`) is never set by our emitters.
          t,
          i7
        );
        n.panel = this._panel, this._dispatchOnViewer(
          new CustomEvent(
            "perspective-global-filter",
            {
              bubbles: true,
              composed: true,
              detail: n
            }
          )
        );
        break;
      }
      case "frameBitmap":
        this._holdPresent ? (this._stagedFrame?.close(), this._stagedFrame = e2.bitmap) : this._drawFrameBitmap(e2.bitmap);
        break;
      case "error":
        this._rejectReady(new Error(e2.message));
        break;
      case "loadAndRenderAck":
        e2.error !== void 0 ? this._rejectPending(
          e2.msgId,
          "loadAndRender",
          new Error(e2.error)
        ) : this._resolvePending(e2.msgId, "loadAndRender", void 0);
        break;
      case "resizeAck":
        this._resolvePending(e2.msgId, "resize", void 0);
        break;
      case "hitTestReply":
        e2.error !== void 0 ? this._rejectPending(
          e2.requestId,
          "hitTest",
          new Error(e2.error)
        ) : this._resolvePending(e2.requestId, "hitTest", e2.hit);
        break;
      case "snapshotPngReply":
        e2.error !== void 0 ? this._rejectPending(
          e2.requestId,
          "snapshotPng",
          new Error(e2.error)
        ) : this._resolvePending(
          e2.requestId,
          "snapshotPng",
          e2.blob
        );
        break;
    }
  }
  /**
   * Look up a pending request by id, verify the recorded kind
   * matches the inbound reply, resolve, and remove. Mismatches are
   * silently dropped — they would only fire if the worker echoed
   * the wrong kind for a given id, which would itself be a bug
   * worth catching at the worker side.
   */
  _resolvePending(e2, t, i7) {
    let n = this._pending.get(e2);
    !n || n.kind !== t || (this._pending.delete(e2), n.resolve(i7));
  }
  _rejectPending(e2, t, i7) {
    let n = this._pending.get(e2);
    !n || n.kind !== t || (this._pending.delete(e2), n.reject(i7));
  }
  /**
   * Blit-mode handler: draw a renderer-emitted frame into the
   * visible 2D-context display canvas, then close the bitmap so its
   * GPU-backed surface is released. Resizes the visible canvas's
   * drawing buffer to the bitmap dimensions on first frame and
   * after any worker-side resize — the host doesn't directly
   * control GL canvas size in blit mode, so we follow whatever the
   * renderer emits.
   */
  _drawFrameBitmap(e2) {
    if (this._displayCtx && this._hostGlCanvas) {
      let t = e2.width, i7 = e2.height;
      this._hostGlCanvas.width !== t && (this._hostGlCanvas.width = t), this._hostGlCanvas.height !== i7 && (this._hostGlCanvas.height = i7), this._displayCtx.globalCompositeOperation = "copy", this._displayCtx.drawImage(e2, 0, 0);
    }
    e2.close();
  }
  /**
   * Dispatch a `CustomEvent` on the `<perspective-viewer>` ancestor
   * of this transport's GL canvas. Walks the parent chain so the
   * event bubbles from the viewer (matching where datagrid
   * dispatches its `perspective-click` / `perspective-global-filter`
   * events). No-op when the canvas is detached or no viewer ancestor
   * exists (test harnesses, snapshot mode).
   */
  _dispatchOnViewer(e2) {
    if (!this._hostGlCanvas)
      return;
    let t = this._hostGlCanvas;
    for (; t; ) {
      if (t instanceof HTMLElement && t.tagName === "PERSPECTIVE-VIEWER") {
        t.dispatchEvent(e2);
        return;
      }
      t = t.host ?? t.parentNode ?? null;
    }
  }
  /**
   * Lazily construct a `DomHostSink` rooted at the host GL canvas
   * (cursor mutations) and its parent (pinned-tooltip `<div>`).
   * Returns `null` if the canvas has been detached.
   */
  _ensureHostSink() {
    if (this._hostSink)
      return this._hostSink;
    let e2 = this._hostGlCanvas?.parentElement;
    return !e2 || !this._hostGlCanvas ? null : (this._hostSink = new D6(this._hostGlCanvas, e2), this._hostSink.commandsEnabled = this._tooltipCommands, this._hostSink);
  }
};
var Ie2 = "blit";
function at2(r3) {
  return isFinite(r3) ? r3 < 0 ? 0 : r3 > 1 ? 1 : r3 : 0.5;
}
function Pe3(r3) {
  return !isFinite(r3) || r3 < 0 ? 1 : r3;
}
function Be3(r3) {
  let e2 = (l3, o) => r3[l3] || o, t = r3["--psp-charts--gradient--background"] || r3["--psp-charts--full-gradient--background"] || "linear-gradient(#0366d6 0%, #ff7f0e 100%)", i7 = ce3(t), n = [];
  for (let l3 = 1; ; l3++) {
    let o = r3[`--psp-charts--series-${l3}--color`];
    if (!o)
      break;
    n.push(L4(o));
  }
  return {
    fontFamily: e2(
      "--psp-charts--font-family",
      e2("font-family", "monospace")
    ),
    backgroundColor: e2(
      "--psp--background-color",
      "rgba(255, 255, 255, 1)"
    ),
    tickColor: e2(
      "--psp-charts--axis-ticks--color",
      "rgba(160, 0, 0, 0.8)"
    ),
    labelColor: e2("--psp--color", "rgba(180, 0, 0, 0.9)"),
    axisLineColor: e2(
      "--psp-charts--axis-lines--color",
      "rgba(160, 0, 0, 0.4)"
    ),
    gridlineColor: e2(
      "--psp-charts--gridline--color",
      "rgba(255, 0, 0, 1)"
    ),
    gradientStops: i7,
    legendText: e2(
      "--psp-charts--legend--color",
      "rgba(180, 180, 180, 0.9)"
    ),
    legendBorder: e2(
      "--psp-charts--legend-border--color",
      "rgba(128,128,128,0.3)"
    ),
    tooltipBg: e2(
      "--psp-charts--tooltip--background",
      "rgba(155,155,155,0.8)"
    ),
    tooltipText: e2("--psp-charts--tooltip--color", "#161616"),
    tooltipBorder: e2("--psp-charts--tooltip--border-color", "#fff"),
    areaOpacity: at2(
      parseFloat(e2("--psp-charts--area--opacity", "0.85"))
    ),
    heatmapGapPx: Pe3(
      parseFloat(e2("--psp-charts--heatmap-gap--px", "0"))
    ),
    sunburstGapPx: Pe3(
      parseFloat(e2("--psp-charts--sunburst-gap--px", "1"))
    ),
    seriesPalette: n
  };
}
function ut4(r3, e2) {
  if (e2 <= 0)
    return [];
  let t = new Array(e2);
  for (let i7 = 0; i7 < e2; i7++) {
    let n = e2 === 1 ? 0.5 : i7 / (e2 - 1), l3 = me4(r3, n);
    t[i7] = [l3[0], l3[1], l3[2]];
  }
  return t;
}
function te5(r3, e2, t) {
  if (r3.length > 0) {
    if (r3.length >= t)
      return r3.slice(0, t);
    let i7 = new Array(t);
    for (let n = 0; n < t; n++)
      i7[n] = r3[n % r3.length];
    return i7;
  }
  return ut4(e2, t);
}
var ht4 = { ...ye4 };
function Ne3(r3) {
  return p5.register(r3);
}
var ct4 = {
  auto_alt_y_axis: { kind: "Bool" },
  include_zero: { kind: "Bool" },
  domain_mode: {
    kind: "Enum",
    variants: [
      { value: "fit", label: "Fit" },
      { value: "expand", label: "Expand" }
    ]
  },
  facet_mode: {
    kind: "Enum",
    variants: [
      { value: "grid", label: "Grid" },
      { value: "overlay", label: "Overlay" },
      { value: "last_group_by_grid", label: "Last Group By Grid" },
      {
        value: "last_group_by_overlay",
        label: "Last Group By Overlay"
      }
    ]
  },
  facet_zoom_mode: {
    kind: "Enum",
    variants: [
      { value: "shared", label: "Shared" },
      { value: "independent", label: "Independent" }
    ]
  },
  series_zoom_mode: {
    kind: "Enum",
    variants: [
      { value: "dynamic", label: "Dynamic" },
      { value: "fixed", label: "Fixed" }
    ]
  },
  line_width_px: { kind: "Number", min: 0.5, step: 0.5, max: 16 },
  point_size_px: { kind: "Number", min: 1, max: 32 },
  band_inner_frac: { kind: "Number", min: 0.1, max: 1, step: 0.01 },
  bar_inner_pad: { kind: "Number", min: 0, max: 0.9, step: 0.01 },
  group_pad: { kind: "Number", min: 0, max: 2, step: 0.01 },
  wick_width_px: { kind: "Number", min: 0.5, step: 0.5, max: 8 },
  ohlc_line_width_px: { kind: "Number", min: 0.5, step: 0.5, max: 8 },
  gradient_radius_px: { kind: "Number", min: 2, step: 1, max: 256 },
  gradient_intensity: { kind: "Number", min: 0.05, step: 0.05, max: 4 },
  gradient_heat_max: { kind: "Number", min: 0.1, step: 0.1, max: 64 },
  gradient_color_mode: {
    kind: "Enum",
    variants: [
      { value: "mean", label: "Mean (density-weighted)" },
      { value: "density", label: "Density only" },
      { value: "extreme", label: "Extremes" },
      { value: "signed", label: "Signed sum" }
    ]
  },
  map_tile_provider: () => ({
    kind: "Enum",
    variants: p5.list().map((r3) => ({
      value: r3.id,
      label: r3.label
    }))
  }),
  map_tile_alpha: { kind: "Number", min: 0, max: 1, step: 0.05 },
  numeric_axes: { kind: "Bool" },
  legend_mode: {
    kind: "Enum",
    variants: [
      { value: "auto", label: "Auto" },
      { value: "sidebar", label: "Sidebar" },
      { value: "none", label: "None" },
      { value: "floating", label: "Floating" }
    ]
  },
  legend_size_mode: {
    kind: "Enum",
    variants: [
      { value: "auto", label: "Auto" },
      { value: "fixed", label: "Fixed" }
    ]
  },
  // 0 = auto (the chart family's historical gutter width).
  legend_width_px: { kind: "Number", min: 0, max: 512, step: 1 },
  legend_height_px: { kind: "Number", min: 48, max: 1024, step: 1 },
  legend_anchor: { kind: "Alignment", corners: true },
  legend_x: { kind: "Number", min: 0, max: 1, step: 0.01 },
  legend_y: { kind: "Number", min: 0, max: 1, step: 0.01 },
  legend_opacity: { kind: "Number", min: 0, max: 1, step: 0.05 },
  tooltip_max_column_px: { kind: "Number", min: 40, max: 512, step: 1 },
  tooltip_opacity: { kind: "Number", min: 0, max: 1, step: 0.05 },
  tooltip_commands: { kind: "Bool" }
};
function Le3(r3, e2, t) {
  let i7 = ct4[r3], n = typeof i7 == "function" ? i7() : i7;
  if (r3 === "facet_mode" && n.kind === "Enum") {
    let l3 = t.facet_modes ?? X4;
    return {
      ...n,
      variants: n.variants.filter((o) => l3.includes(o.value)),
      key: r3,
      default: e2[r3]
    };
  }
  return { ...n, key: r3, default: e2[r3] };
}
var ft4 = [
  {
    key: "axes",
    fields: [
      "auto_alt_y_axis",
      "include_zero",
      "domain_mode",
      "numeric_axes"
    ]
  },
  {
    key: "facets",
    fields: ["facet_mode", "facet_zoom_mode", "series_zoom_mode"]
  },
  {
    key: "glyph",
    fields: [
      "line_width_px",
      "point_size_px",
      "band_inner_frac",
      "bar_inner_pad",
      "group_pad",
      "wick_width_px",
      "ohlc_line_width_px"
    ]
  },
  {
    key: "density",
    fields: [
      "gradient_color_mode",
      "gradient_radius_px",
      "gradient_intensity",
      "gradient_heat_max"
    ]
  },
  { key: "basemap", fields: ["map_tile_provider", "map_tile_alpha"] },
  { key: "legend", fields: b3 },
  { key: "tooltip", fields: _ }
];
var dt4 = (() => {
  let r3 = new CSSStyleSheet();
  return r3.replaceSync(ge5), [r3];
})();
var ke3 = Ie2;
function De3(r3) {
  return r3 === "integer" || r3 === "float" ? [{ kind: "NumberFormat", default: ve5 }] : r3 === "datetime" ? [{ kind: "DatetimeFormat", default: Ce3 }] : r3 === "date" ? [{ kind: "DatetimeFormat", default: we4 }] : [];
}
var z5 = class r2 extends HTMLElement {
  _initialized = false;
  _glCanvas;
  _gridlineCanvas;
  _chromeCanvas;
  _renderer = null;
  _rendererPromise = null;
  _rawEventForwarder = null;
  _resetClickAbort = null;
  /**
   * Plugin-scoped global config. Seeded lazily from
   * `_effectiveDefaults()` (which folds
   * `_chartType.plugin_field_defaults` over `DEFAULT_PLUGIN_CONFIG`)
   * because base-class field initializers run before the subclass
   * `_chartType` assignment. `restore({ plugin_config })` merges
   * incoming values on top of the same effective defaults so fields
   * the host omits fall back to the chart-type default
   * (`include_zero = true` for Y Bar / Y Area / X Bar, `false`
   * elsewhere). Held on the element (not just inside the worker) so
   * a `_buildRenderer` triggered after a `restore` ships the
   * resolved values in the `InitMsg`.
   */
  _pluginConfigStore = null;
  /**
   * Per-column config (`alt_axis`, `chart_type`, formats, …), held on
   * the element for the same reason as `_pluginConfigStore`: the host
   * calls `restore()` BEFORE the first draw builds the renderer, so
   * forwarding only to a live renderer silently drops the initial
   * `columns_config` — `_buildRenderer` ships it in the `InitMsg`
   * instead.
   */
  _columnsConfig = {};
  get _pluginConfig() {
    return this._pluginConfigStore || (this._pluginConfigStore = this._effectiveDefaults()), this._pluginConfigStore;
  }
  set _pluginConfig(e2) {
    this._pluginConfigStore = e2;
  }
  _effectiveDefaults() {
    return {
      ...be3,
      ...this._chartType.plugin_field_defaults ?? {}
    };
  }
  connectedCallback() {
    if (!this._initialized) {
      this.attachShadow({ mode: "open" });
      for (let e2 of dt4)
        this.shadowRoot.adoptedStyleSheets.push(e2);
      this.shadowRoot.innerHTML = '<div class="webgl-container"><div class="zoom-controls"><button class="zoom-reset">Reset Zoom</button></div></div>', this._initialized = true;
    }
    this._glCanvas?.isConnected || this._buildCanvasStack();
  }
  _buildCanvasStack() {
    let e2 = this.shadowRoot.querySelector(".webgl-container");
    e2.insertAdjacentHTML(
      "afterbegin",
      '<canvas class="webgl-gridlines"></canvas><canvas class="webgl-canvas"></canvas><canvas class="webgl-chrome"></canvas>'
    ), this._glCanvas = e2.querySelector(".webgl-canvas"), this._gridlineCanvas = e2.querySelector(".webgl-gridlines"), this._chromeCanvas = e2.querySelector(".webgl-chrome");
  }
  _clearCanvasStack() {
    let e2 = this.shadowRoot?.querySelector(".webgl-container");
    if (e2)
      for (let t of Array.from(e2.querySelectorAll("canvas")))
        t.remove();
    this._glCanvas = null, this._gridlineCanvas = null, this._chromeCanvas = null;
  }
  /**
   * Fires when the host (`<perspective-viewer>`) removes this plugin
   * from the DOM on chart-type switch — see
   * `renderer/activate.rs::remove_inactive_plugin`. Without this,
   * inactive plugin instances retain their `RendererTransport`
   * (worker + WebGL context + compiled shader programs) until the
   * entire viewer is torn down, so a user cycling all 12 chart kinds
   * holds 12 GL contexts per viewer and routinely exceeds the
   * browser's per-page context cap (~16) in workspaces.
   */
  disconnectedCallback() {
    this.delete(), this._clearCanvasStack();
  }
  /**
   * Lazy renderer construction. Memoizes the in-flight `init()`
   * promise so concurrent `draw()` calls during async setup await
   * the same initialization rather than racing.
   */
  _ensureRenderer(e2) {
    if (this._initialized || this.connectedCallback(), this._rendererPromise)
      return this._rendererPromise;
    let t = this._buildRenderer(e2).then(
      (i7) => {
        if (this._rendererPromise !== t)
          throw i7.destroy(), new Error("renderer disposed during init");
        return this._renderer = i7, this._setupInteraction(i7), i7;
      }
    );
    return t.catch(() => {
    }), this._rendererPromise = t, t;
  }
  /**
   * Capture raw DOM events on the GL canvas with `RawEventForwarder`
   * and post them over the control channel. The renderer dispatches
   * them through its own resolver + `applyWheel` / `applyPan` for
   * zoom/pan, and through `TooltipController` virtual dispatch for
   * hover/click; `zoomChanged` updates push back so the reset-zoom
   * button visibility tracks the renderer-side state.
   *
   * The `zoomChanged` callback was wired at `RendererTransport`
   * construction time; here we just attach the event forwarder and
   * the reset-button click handler.
   */
  _setupInteraction(e2) {
    if (this._rawEventForwarder)
      return;
    let t = this.shadowRoot.querySelector(
      ".zoom-controls"
    );
    this._rawEventForwarder = new k4(), this._rawEventForwarder.attach(this._glCanvas, (n) => {
      e2.forwardInteraction(n);
    });
    let i7 = this.shadowRoot.querySelector(".zoom-reset");
    i7 && (this._resetClickAbort = new AbortController(), i7.addEventListener(
      "click",
      () => {
        e2.resetAllZooms(), t && t.classList.remove("visible");
      },
      { signal: this._resetClickAbort.signal }
    ));
  }
  async _buildRenderer(e2) {
    let t = this.parentElement, i7 = this.getAttribute("slot") ?? void 0, n = await t.getClient({ panel: i7 }), l3 = customElements.get("perspective-viewer"), o = l3.get_wasm_module(), a2 = l3.get_worker_url(), s3 = await t?.getTable?.({ panel: i7 }), h3 = s3 ? await s3.get_name() : void 0, c2 = this.shadowRoot.querySelector(
      ".zoom-controls"
    ), d3 = new O4({
      client: n,
      view: e2,
      tableName: h3,
      panel: i7,
      clientWorkerURL: a2,
      clientWasm: o,
      chartTag: this._chartType.tag,
      maxCells: this._chartType.max_cells,
      precompileShaders: true,
      onZoomChanged: (u4) => {
        c2 && c2.classList.toggle("visible", !u4);
      },
      onPluginConfigDelta: (u4) => {
        this._pluginConfig = { ...this._pluginConfig, ...u4 }, this.parentElement?.restore(
          { plugin_config: u4 },
          i7 ? { panel: i7 } : void 0
        )?.catch((g3) => {
          console.error("legend config persistence failed", g3);
        });
      }
    });
    return await d3.init({
      gl: this._glCanvas,
      gridlines: this._gridlineCanvas,
      chrome: this._chromeCanvas,
      facetConfig: {
        ...ht4,
        facet_mode: xe4(this._pluginConfig.facet_mode),
        zoom_mode: this._pluginConfig.facet_zoom_mode
      },
      pluginConfig: this._pluginConfig,
      columnsConfig: this._columnsConfig,
      defaultChartType: this._chartType.default_chart_type,
      renderBlitMode: ke3
    }), d3;
  }
  /**
   * Select the GL presentation strategy for *all* chart-type plugins
   * in this renderer. Static + process-global: the value is shared by
   * every per-chart-type subclass, so it must be set once before the
   * charts that should use it build their renderers (a renderer reads
   * {@link BLIT_MODE} at construction in `_buildRenderer`; charts
   * already built keep their mode until torn down and rebuilt).
   *
   * - `"direct"` — each chart owns a GL context 1:1 with its visible
   *   canvas (lowest latency; bounded by the browser's ~16-context
   *   cap).
   * - `"blit"` — charts render off-screen and share a pool of GL
   *   contexts ([webgl/context-pool.ts]), so a page can exceed the cap.
   */
  static setBlitMode(e2) {
    ke3 = e2;
  }
  static registerTileSource(e2) {
    return Ne3(e2);
  }
  static tileSources() {
    return p5.list();
  }
  get_static_config() {
    return {
      name: this._chartType.name,
      category: this._chartType.category,
      select_mode: this._chartType.selectMode,
      min_config_columns: this._chartType.initial.count,
      config_column_names: this._chartType.initial.names,
      max_cells: this._chartType.max_cells,
      max_columns: this._chartType.max_columns,
      group_rollup_modes: ["flat"],
      split_rollup_modes: ["flat"],
      group_by_role: this._chartType.group_by_role,
      split_by_role: this._chartType.split_by_role,
      connects_row_order: !!this._chartType.connects_row_order,
      priority: 0,
      can_render_column_styles: !!this._chartType.default_chart_type || this._chartType.category === "Cartesian Charts" || this._chartType.category === "Hierarchical Charts" || this._chartType.category === "Map Charts"
    };
  }
  column_config_schema(e2, t, i7, n, l3, o, a2) {
    let s3 = [];
    if (a2 === "group_by" || a2 === "split_by")
      return { fields: De3(e2) };
    t === "Color" && ((this._chartType.category === "Hierarchical Charts" ? e2 === "integer" || e2 === "float" || e2 === "date" || e2 === "datetime" : e2 !== "string") ? s3.push({
      kind: "GradientStops",
      key: "gradient",
      default: this._themeGradientStopsSpec()
    }) : s3.push({
      kind: "Palette",
      key: "palette",
      default: this._themeSeriesPaletteHex()
    }));
    let h3 = this._chartType.default_chart_type;
    if (h3 && (e2 === "integer" || e2 === "float")) {
      let c2 = h3 === "bar" || h3 === "line" || h3 === "scatter" || h3 === "area";
      if (c2)
        if ((l3?.split_by?.length ?? 0) > 0)
          s3.push({
            kind: "Palette",
            key: "palette",
            default: this._themeSeriesPaletteHex()
          });
        else {
          let A4 = (l3?.columns ?? []).filter((M4) => !!M4).indexOf(i7);
          s3.push({
            kind: "Color",
            key: "color",
            default: this._themeSeriesColorHex(Math.max(0, A4))
          });
        }
      s3.push({
        kind: "Enum",
        key: "chart_type",
        default: h3,
        variants: [
          { value: "bar", label: "Bar" },
          { value: "line", label: "Line" },
          { value: "scatter", label: "Scatter" },
          { value: "area", label: "Area" }
        ]
      });
      let d3 = n?.chart_type ?? h3, u4 = d3 === "bar" || d3 === "area";
      if (u4 && s3.push({
        kind: "Bool",
        key: "stack",
        default: u4
      }), c2 && s3.push({
        kind: "Bool",
        key: "alt_axis",
        default: false
      }), d3 === "line" || d3 === "area") {
        let g3 = d3 === "area" ? [
          { value: "skip", label: "Skip" },
          { value: "solid", label: "Solid" }
        ] : [
          { value: "skip", label: "Skip" },
          { value: "solid", label: "Solid" },
          { value: "transparent", label: "Transparent" }
        ];
        s3.push({
          kind: "Enum",
          key: "interpolate",
          default: "solid",
          variants: g3
        });
      }
    }
    return s3.push(...De3(e2)), { fields: s3 };
  }
  plugin_config_schema(e2) {
    let t = this._effectiveDefaults(), i7 = this._chartType.applicable_plugin_fields.filter(
      (s3) => s3 !== "tooltip_commands" || this._hasTooltipCommandScope()
    ), n = new Set(i7), l3 = /* @__PURE__ */ new Set(), o = [];
    for (let s3 of ft4) {
      let h3 = s3.fields.filter((c2) => n.has(c2));
      if (h3.length >= 1) {
        for (let c2 of h3)
          l3.add(c2);
        o.push({
          kind: "Group",
          key: s3.key,
          fields: h3.map(
            (c2) => Le3(c2, t, this._chartType)
          )
        });
      }
    }
    return { fields: [...i7.filter((s3) => !l3.has(s3)).map((s3) => Le3(s3, t, this._chartType)), ...o] };
  }
  /**
   * Whether the host's command schema is scoped to `"chart-tooltip"`,
   * asked with an empty frame so no schema call runs.
   */
  _hasTooltipCommandScope() {
    let e2 = this.parentElement;
    if (!e2?.queryCommands)
      return false;
    let t = {
      start_row: 0,
      start_col: 0,
      paths: [],
      column_paths: [],
      data: {}
    };
    return e2.queryCommands(this, "chart-tooltip", t, []) !== void 0;
  }
  _resolvedTheme() {
    return Be3(S4(this));
  }
  static GRADIENT_PALETTE_FALLBACK_COUNT = 6;
  _themeSeriesPaletteHex() {
    let e2 = this._resolvedTheme(), t = e2.seriesPalette.length || r2.GRADIENT_PALETTE_FALLBACK_COUNT;
    return de3(
      te5(e2.seriesPalette, e2.gradientStops, t)
    );
  }
  _themeSeriesColorHex(e2) {
    let t = this._resolvedTheme(), i7 = Math.max(t.seriesPalette.length, e2 + 1);
    return R4(
      te5(t.seriesPalette, t.gradientStops, i7)[e2]
    );
  }
  _themeGradientStopsSpec() {
    return fe4(this._resolvedTheme().gradientStops);
  }
  async draw(e2) {
    return this._renderer?.resetExpandedDomain(), this._renderer?.resetAllZooms(), this._drawImpl(e2);
  }
  async update(e2) {
    return this._drawImpl(e2);
  }
  /**
   * Shared body of `draw` / `update`. No re-entrancy guard: the host
   * serializes every rendering call (`draw`, `update`, `render`,
   * `resize`) and `delete` on its per-renderer draw lock, so this
   * method never overlaps itself or a teardown. The one exception —
   * an external DOM disconnect `delete()`ing the element mid-draw —
   * is absorbed by `RendererTransport`, whose post-`destroy()`
   * requests settle immediately instead of pending forever.
   */
  async _drawImpl(e2) {
    let t;
    try {
      t = await this._ensureRenderer(e2);
    } catch {
      return;
    }
    t.setView(e2), t.setBufferMaxCapacity(this._chartType.max_cells);
    let i7 = this.getAttribute("slot") ?? void 0, n = this.parentElement;
    if (n === null)
      return;
    let l3 = await n.getViewConfig({ panel: i7 });
    await t.loadAndRender({
      viewerConfig: {
        group_by: l3?.group_by ?? [],
        split_by: l3?.split_by ?? [],
        columns: l3?.columns ?? []
      },
      options: { float32: true }
    });
  }
  async clear() {
    this._renderer?.clear();
  }
  async resize() {
    !this.isConnected || this.offsetParent == null || await this._renderer?.resize();
  }
  /**
   * OPTIONAL host presize protocol: render at the TARGET element box
   * `(width, height)` — the box the host's pending layout commit will
   * produce — holding the resulting frame offscreen, so nothing on
   * screen changes during the round-trip. Resolves, once the resized
   * frame is staged, to a present closure; the host calls it in the
   * same task as the layout commit, landing geometry and pixels in
   * one paint. Plugins without this method get the host's held
   * style-override presize path instead.
   */
  async presize(e2, t) {
    if (!this.isConnected || this.offsetParent == null || !this._renderer || !this._glCanvas)
      return;
    let i7 = this.getBoundingClientRect(), n = this._glCanvas.getBoundingClientRect();
    return await this._renderer.presize(
      Math.max(0, n.width + (e2 - i7.width)),
      Math.max(0, n.height + (t - i7.height))
    );
  }
  restyle() {
    this._renderer?.invalidateTheme();
  }
  /**
   * Clear any active selection state (pinned tooltip) WITHOUT emitting
   * selection events — the host calls this when a global filter
   * contributed by this panel's selection is removed from the global
   * filter bar, so the pin can't outlive the filter it produced. The
   * transport's `_lastInsertConfig` (remove-set memory) is deliberately
   * RETAINED so a subsequent selection still replaces any leftover
   * clauses rather than accumulating.
   */
  async deselect() {
    this._renderer?.deselect();
  }
  async hit_test(e2, t) {
    let i7 = this._glCanvas?.getBoundingClientRect(), n = i7 !== void 0 && e2 >= i7.left && e2 <= i7.right && t >= i7.top && t <= i7.bottom;
    return !this._renderer || !n ? void 0 : await this._renderer.hitTest(e2 - i7.left, t - i7.top) ?? void 0;
  }
  async render(e2) {
    return await this._ensureRenderer(e2), await this.draw(e2), this._renderer.snapshotPng();
  }
  restore(e2, t) {
    this._pluginConfig = {
      ...this._effectiveDefaults(),
      ...e2
    }, this._columnsConfig = t ?? {}, this._renderer?.setPluginConfig(this._pluginConfig), this._renderer?.setColumnsConfig(this._columnsConfig);
  }
  delete() {
    this._rawEventForwarder && (this._rawEventForwarder.detach(), this._rawEventForwarder = null), this._resetClickAbort && (this._resetClickAbort.abort(), this._resetClickAbort = null), this._renderer && (this._renderer.destroy(), this._renderer = null), this._rendererPromise = null;
  }
};
function mt4(...r3) {
  let e2 = new Set(
    r3.length > 0 ? r3 : q6.map((i7) => i7.name)
  ), t = [];
  q6.forEach((i7) => {
    if (e2.has(i7.name)) {
      let n = `perspective-viewer-charts-${i7.tag}`;
      if (customElements.get(n)) {
        t.push(n);
        return;
      }
      customElements.define(
        n,
        class extends z5 {
          _chartType = i7;
          static _chartType = i7;
        }
      ), customElements.whenDefined("perspective-viewer").then(async () => {
        await customElements.get("perspective-viewer").registerPlugin(n);
      });
    }
  }), t.length > 0 && console.warn(
    `viewer-charts plugins already registered (${t.length}); skipping duplicate registration (Perspective was loaded more than once on this page).`
  );
}
mt4();

// ../../rust/perspective-server/dist/wasm/perspective-server.wasm
var perspective_server_default = "./perspective-server.wasm";

// ../../rust/perspective-viewer/dist/wasm/perspective-viewer.wasm
var perspective_viewer_default = "./perspective-viewer.wasm";

// src/expressions.js
function indent(text, depth) {
  return text.replaceAll("\n", `
${"    ".repeat(depth)}`);
}
function each_neighbour(width, height, x5, y5, n, body) {
  return `for (var ${n}_dx := -1; ${n}_dx <= 1; ${n}_dx += 1) {
    for (var ${n}_dy := -1; ${n}_dy <= 1; ${n}_dy += 1) {
        var ${n}_x := ${x5} + ${n}_dx;
        var ${n}_y := ${y5} + ${n}_dy;
        if ((${n}_dx != 0 or ${n}_dy != 0) and ${n}_x >= 0 and ${n}_x < ${height} and ${n}_y >= 0 and ${n}_y < ${width}) {
            var ${n} := ${n}_x * ${width} + ${n}_y;
            ${indent(body, 3)}
        }
    }
}`;
}
function mine_count(width, height, square, total) {
  return `var ${total} := 0;
var ${total}_x := floor(${square} / ${width});
var ${total}_y := ${square} - ${total}_x * ${width};
${each_neighbour(
    width,
    height,
    `${total}_x`,
    `${total}_y`,
    `${total}_n`,
    `if (vlookup('mine', integer(${total}_n))) {
    ${total} += 1;
}`
  )};`;
}
function grid_expressions(width) {
  return {
    row: `integer(floor("index" / ${width}))`,
    col: `integer("index" % ${width})`
  };
}
function neighbour_count(width, height) {
  return `var i := float("index");
${mine_count(width, height, "i", "total")}
total`;
}
function flood_from(width, height, start) {
  const cells = width * height;
  return `var seen[${cells}];
var queue[${cells}];
for (var j := 0; j < ${cells}; j += 1) {
    seen[j] := 0;
    queue[j] := 0;
};
var me := float("index");
var head := 0;
var tail := 1;
var found := 0;
queue[0] := ${start};
seen[${start}] := 1;
if (me == ${start}) {
    found := 1;
};
while (head < tail and found == 0) {
    var c := queue[head];
    head += 1;
    ${indent(mine_count(width, height, "c", "k"), 1)}
    if (k == 0) {
        ${indent(
    each_neighbour(
      width,
      height,
      "k_x",
      "k_y",
      "n",
      `if (seen[n] == 0) {
    seen[n] := 1;
    if (vlookup('flagged', integer(n))) {
        seen[n] := 2;
    } else {
        queue[tail] := n;
        tail += 1;
        if (n == me) {
            found := 1;
        }
    }
}`
    ),
    2
  )}
    }
};
found == 1`;
}
function cell_display() {
  return `if ("revealed") {
    if ("mine" != True) {
        integer("count")
    } else {
        null
    }
} else {
    null
}`;
}

// src/game.js
var WIDTH = 16;
var HEIGHT = 16;
var MINES = 40;
var TABLE_NAME = "minesweeper";
var SCHEMA = {
  index: "integer",
  mine: "boolean",
  revealed: "boolean",
  flagged: "boolean"
};
var SQUARES = Array.from({ length: WIDTH * HEIGHT }, (_2, index) => index);
function neighbours(index) {
  const row = Math.floor(index / WIDTH);
  const col = index % WIDTH;
  const result = [];
  for (let r3 = Math.max(row - 1, 0); r3 <= Math.min(row + 1, HEIGHT - 1); r3++) {
    for (let c2 = Math.max(col - 1, 0); c2 <= Math.min(col + 1, WIDTH - 1); c2++) {
      if (r3 !== row || c2 !== col) {
        result.push(r3 * WIDTH + c2);
      }
    }
  }
  return result;
}
function place_mines(safe) {
  const zone = /* @__PURE__ */ new Set([safe, ...neighbours(safe)]);
  const pool = SQUARES.filter((index) => !zone.has(index));
  for (let i7 = pool.length - 1; i7 > 0; i7--) {
    const j7 = Math.floor(Math.random() * (i7 + 1));
    [pool[i7], pool[j7]] = [pool[j7], pool[i7]];
  }
  return new Set(pool.slice(0, MINES));
}
var Minesweeper = class _Minesweeper {
  #table;
  #mines = /* @__PURE__ */ new Set();
  #revealed = /* @__PURE__ */ new Set();
  #flagged = /* @__PURE__ */ new Set();
  state = "ready";
  static async create(client) {
    const table = await client.table(SCHEMA, {
      index: "index",
      name: TABLE_NAME
    });
    const game2 = new _Minesweeper(table);
    await game2.#write();
    return game2;
  }
  constructor(table) {
    this.#table = table;
  }
  get live() {
    return this.state === "ready" || this.state === "playing";
  }
  get flags() {
    return this.#flagged.size;
  }
  /** What square `index` shows the player: `"flagged"`, `"mine"`, `"revealed"` or `"hidden"`. */
  square(index) {
    if (this.#flagged.has(index)) {
      return "flagged";
    } else if (this.state === "lost" && this.#mines.has(index)) {
      return "mine";
    } else if (this.#revealed.has(index)) {
      return "revealed";
    }
    return "hidden";
  }
  new_game() {
    this.state = "ready";
    this.#mines.clear();
    this.#revealed.clear();
    this.#flagged.clear();
    return this.#write();
  }
  async reveal(index) {
    if (!this.live || this.square(index) !== "hidden") {
      return;
    }
    if (this.state === "ready") {
      this.#mines = place_mines(index);
      this.state = "playing";
      await this.#write();
    }
    if (this.#mines.has(index)) {
      this.#revealed.add(index);
      this.state = "lost";
    } else {
      for (const square of await this.#flood(index)) {
        this.#revealed.add(square);
      }
      if (this.#revealed.size === SQUARES.length - MINES) {
        this.#flagged = new Set(this.#mines);
        this.state = "won";
      }
    }
    await this.#write();
  }
  toggle_flag(index) {
    if (!this.live || this.#revealed.has(index)) {
      return;
    }
    if (!this.#flagged.delete(index)) {
      this.#flagged.add(index);
    }
    return this.#write();
  }
  async #flood(start) {
    const view = await this.#table.view({
      columns: ["index"],
      expressions: { flood: flood_from(WIDTH, HEIGHT, start) },
      filter: [["flood", "==", true]]
    });
    try {
      const { index } = await view.to_columns();
      return index ?? [];
    } finally {
      await view.delete();
    }
  }
  #write() {
    return this.#table.update({
      index: SQUARES,
      mine: SQUARES.map((index) => this.#mines.has(index)),
      revealed: SQUARES.map((index) => this.#revealed.has(index)),
      flagged: SQUARES.map((index) => this.#flagged.has(index))
    });
  }
};

// src/workspace.js
var COUNTS_TABLE = "minesweeper_counts";
var LAYOUT = {
  type: "split-layout",
  children: [
    {
      type: "tab-layout",
      tabs: ["board"],
      selected: 0
    },
    {
      type: "split-layout",
      children: [
        {
          type: "tab-layout",
          tabs: ["radar"],
          selected: 0
        },
        {
          type: "tab-layout",
          tabs: ["flags"],
          selected: 0
        }
      ],
      sizes: [0.5, 0.5],
      orientation: "vertical"
    }
  ],
  sizes: [0.5999999999999999, 0.4],
  orientation: "horizontal"
};
function workspace() {
  const { row, col } = grid_expressions(WIDTH);
  return {
    layout: LAYOUT,
    derived_tables: {
      [COUNTS_TABLE]: {
        table: TABLE_NAME,
        columns: ["index", "mine", "revealed", "flagged", "count"],
        expressions: { count: neighbour_count(WIDTH, HEIGHT) }
      }
    },
    panels: {
      board: {
        table: COUNTS_TABLE,
        title: "Board",
        plugin: "Datagrid",
        group_by: ["row"],
        split_by: ["col"],
        columns: ["cell"],
        group_rollup_mode: "flat",
        aggregates: { cell: "last" },
        expressions: { row, col, cell: cell_display() },
        plugin_config: { align: "center", command_column: "none" },
        columns_config: {
          cell: {
            fg_mode: "disabled",
            bg_mode: "gradient",
            bg_gradient: 8
          }
        }
      },
      flags: {
        table: TABLE_NAME,
        title: "Flag log (cheat)",
        plugin: "Datagrid",
        columns: ["row", "col", "mine"],
        filter: [["flagged", "==", true]],
        sort: [
          ["row", "asc"],
          ["col", "asc"]
        ],
        expressions: { row, col }
      },
      radar: {
        plugin: "Heatmap",
        table: COUNTS_TABLE,
        theme: "Pro",
        title: "Radar view (cheat)",
        group_by: ["col"],
        split_by: ["row"],
        expressions: {
          cell: 'if ("revealed") {\n    if ("mine" != True) {\n        integer("count")\n    } else {\n        null\n    }\n} else {\n    null\n}',
          col: 'integer("index" % 16)',
          row: '-integer(floor("index" / 16))',
          "New Column 1": 'if ("mine") {\n    1.0\n} else if ("revealed") {\n    0.5\n} else {\n    0.0\n}'
        },
        columns: ["New Column 1"],
        aggregates: {
          "New Column 1": "dominant"
        }
      }
    }
  };
}

// src/index.js
var STATUS = {
  ready: "Reveal any square to start",
  playing: "Playing",
  won: "Cleared!",
  lost: "Boom"
};
await oe2.init({
  server: fetch(perspective_server_default),
  viewer: fetch(perspective_viewer_default)
});
var viewer = document.getElementById("viewer");
var mines_left = document.getElementById("mines-left");
var status = document.getElementById("status");
var worker = await Et.worker();
var game = await Minesweeper.create(worker);
function square_index({ panel, location, hit }) {
  if (panel === "board" && hit?.kind === "cell") {
    return Number(hit.row_path[0]) * WIDTH + Number(hit.column_path[0]);
  } else if (panel === "flags" && location !== "datagrid-cell" && hit?.id) {
    return Number(hit.id[0]);
  }
  return void 0;
}
function command_schema(context) {
  const cell = context.location === "datagrid-cell";
  const menu = context.location === "context-menu";
  const disabled = !game.live;
  const index = square_index(context);
  const square = index === void 0 ? void 0 : game.square(index);
  const commands = [];
  if (square === "hidden") {
    commands.push({
      kind: "Command",
      key: "reveal",
      label: cell ? "" : "Reveal",
      title: "Reveal",
      disabled
    });
    if (menu) {
      commands.push({
        kind: "Command",
        key: "flag",
        label: "Flag",
        disabled
      });
    }
  } else if (square === "flagged") {
    commands.push({
      kind: "Command",
      key: "flag",
      label: cell ? "" : "Unflag",
      title: "Unflag",
      icon: "flag",
      disabled
    });
  } else if (square === "mine" && cell) {
    commands.push({
      kind: "Command",
      key: "mine",
      label: "",
      title: "Mine",
      icon: "mine",
      disabled: true
    });
  }
  if (menu) {
    commands.push({ kind: "Command", key: "new-game", label: "New game" });
  }
  return { commands };
}
async function render() {
  mines_left.textContent = String(MINES - game.flags);
  status.textContent = STATUS[game.state];
  document.body.dataset.state = game.state;
  await viewer.invalidate();
}
async function run(key, index) {
  if (key === "new-game") {
    await game.new_game();
  } else if (key === "reveal" && index !== void 0) {
    await game.reveal(index);
  } else if (key === "flag" && index !== void 0) {
    await game.toggle_flag(index);
  }
  await render();
}
await viewer.load(worker);
await viewer.setCommandSchema(command_schema, {
  scopes: ["context-menu", "datagrid-cell", "datagrid-row"]
});
await viewer.restoreWorkspace(workspace());
await render();
viewer.addEventListener("perspective-command", (event) => {
  const { key, context } = event.detail;
  run(key, square_index(context));
});
document.getElementById("new-game").addEventListener("click", () => run("new-game"));
