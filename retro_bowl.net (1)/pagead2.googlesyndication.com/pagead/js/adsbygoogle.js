(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var aa = {},
        n = this || self;

    function ba(a) {
        a = a.split(".");
        for (var b = n, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ca(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function da(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ea(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function fa(a) {
        return Object.prototype.hasOwnProperty.call(a, ha) && a[ha] || (a[ha] = ++ia)
    }
    var ha = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ia = 0;

    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function la(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function ma(a, b, c) {
        ma = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : la;
        return ma.apply(null, arguments)
    }

    function na(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function oa(a, b, c) {
        a = a.split(".");
        c = c || n;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function pa(a) {
        return a
    };
    let qa = (new Date).getTime();

    function ra(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function sa(a, b) {
        let c = 0;
        a = ra(String(a)).split(".");
        b = ra(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = ta(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || ta(0 == e[2].length, 0 == f[2].length) || ta(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function ta(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var ua, va = ba("CLOSURE_FLAGS"),
        wa = va && va[610401301];
    ua = null != wa ? wa : !1;

    function xa() {
        var a = n.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var ya;
    const za = n.navigator;
    ya = za ? za.userAgentData || null : null;

    function Aa(a) {
        return ua ? ya ? ya.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function p(a) {
        return -1 != xa().indexOf(a)
    };

    function Ba() {
        return ua ? !!ya && 0 < ya.brands.length : !1
    }

    function Ca() {
        return Ba() ? !1 : p("Trident") || p("MSIE")
    }

    function Da() {
        return Ba() ? Aa("Microsoft Edge") : p("Edg/")
    }

    function Ea() {
        !p("Safari") || Fa() || (Ba() ? 0 : p("Coast")) || (Ba() ? 0 : p("Opera")) || (Ba() ? 0 : p("Edge")) || Da() || Ba() && Aa("Opera")
    }

    function Fa() {
        return Ba() ? Aa("Chromium") : (p("Chrome") || p("CriOS")) && !(Ba() ? 0 : p("Edge")) || p("Silk")
    }

    function Ga(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function Ia() {
        var a = xa();
        if (Ca()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Ga(b);
        return (Ba() ? 0 : p("Opera")) ? a(["Version",
            "Opera"
        ]) : (Ba() ? 0 : p("Edge")) ? a(["Edge"]) : Da() ? a(["Edg"]) : p("Silk") ? a(["Silk"]) : Fa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ka(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function La(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ma(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Na(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Oa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Pa(a, b) {
        a: {
            var c = a.length;
            const d = "string" === typeof a ? a.split("") : a;
            for (--c; 0 <= c; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Qa(a, b) {
        return 0 <= Ka(a, b)
    }

    function Ra(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Sa(a) {
        Sa[" "](a);
        return a
    }
    Sa[" "] = function() {};
    var Ta = Ca();
    !p("Android") || Fa();
    Fa();
    Ea();
    var Ua = null;

    function Wa(a) {
        var b = [];
        Xa(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Xa(a, b) {
        function c(m) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    k = Ua[l];
                if (null != k) return k;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return m
        }
        Ya();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function Ya() {
        if (!Ua) {
            Ua = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Ua[f] && (Ua[f] = e)
                }
        }
    };

    function Za(a) {
        return Array.prototype.slice.call(a)
    };
    const q = Symbol();

    function $a(a) {
        const b = a[q] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Za(a)), a[q] = b | 1)
    }

    function ab(a, b) {
        Object.isFrozen(a) && (a = Za(a));
        a[q] = b;
        return a
    }

    function bb(a) {
        a[q] |= 1;
        return a
    }

    function cb(a) {
        a[q] |= 32;
        return a
    }

    function db(a, b) {
        b[q] = (a | 0) & -255
    }

    function eb(a, b) {
        b[q] = (a | 34) & -221
    }

    function fb(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    };
    var hb = {};

    function ib(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let jb;
    var kb;
    const lb = [];
    lb[q] = 39;
    kb = Object.freeze(lb);

    function mb(a) {
        if (a & 2) throw Error();
    };

    function nb(a) {
        if (null != a) {
            if ("boolean" !== typeof a) throw Error(`Expected boolean but got ${ca(a)}: ${a}`);
            a = !!a
        }
        return a
    }

    function ob(a) {
        return "number" === typeof a && Number.isFinite(a) || !!a && "string" === typeof a && isFinite(a)
    }

    function pb(a) {
        return a
    }

    function rb(a) {
        if ("number" !== typeof a) throw Error();
        return a
    }

    function sb(a) {
        return null == a ? a : rb(a)
    }

    function tb(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    }

    function ub(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    }

    function vb(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    }

    function wb(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function yb(a, b, c, d) {
        var e = !1;
        if (null != a && "object" === typeof a && !(e = Array.isArray(a)) && a.oa === hb) return a;
        if (!e) return c ? d & 2 ? (a = b[zb]) ? b = a : (a = new b, d = a.u, d[q] |= 34, b = b[zb] = a) : b = new b : b = void 0, b;
        e = c = a[q] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[q] = e);
        return new b(a)
    }
    const zb = Symbol();
    let Ab;

    function Bb(a, b) {
        Ab = b;
        a = new a(b);
        Ab = void 0;
        return a
    };

    function Cb(a, b) {
        return Db(b)
    }

    function Db(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a && !Array.isArray(a) && null != a && a instanceof Uint8Array) {
                    let b = "",
                        c = 0;
                    const d = a.length - 10240;
                    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    };

    function Eb(a, b, c) {
        a = Za(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function Fb(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[q] | 0) & 1 ? void 0 : f && (a[q] | 0) & 2 ? a : Gb(a, b, c, void 0 !== d, e, f);
            else if (ib(a)) {
                const g = {};
                for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = Fb(a[h], b, c, d, e, f));
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Gb(a, b, c, d, e, f) {
        const g = d || c ? a[q] | 0 : 0;
        d = d ? !!(g & 32) : void 0;
        a = Za(a);
        for (let h = 0; h < a.length; h++) a[h] = Fb(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }

    function Hb(a) {
        return a.oa === hb ? Ib(a, Gb(a.u, Hb, void 0, void 0, !1, !1), !0) : null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    }

    function Jb(a) {
        return a.oa === hb ? a.toJSON() : Db(a)
    }
    var Kb = "undefined" != typeof structuredClone ? structuredClone : a => Gb(a, Hb, void 0, void 0, !1, !1);

    function Lb(a, b, c = eb) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                const d = a[q] | 0;
                return d & 2 ? a : !b || d & 68 || !(d & 32 || 0 === d) ? Gb(a, Lb, d & 4 ? eb : c, !0, !1, !0) : (a[q] = d | 34, a)
            }
            a.oa === hb && (b = a.u, c = b[q], a = c & 2 ? a : Bb(a.constructor, Mb(b, c, !0)));
            return a
        }
    }

    function Mb(a, b, c) {
        const d = c || b & 2 ? eb : db,
            e = !!(b & 32);
        a = Eb(a, b, f => Lb(f, e, d));
        a[q] = a[q] | 32 | (c ? 2 : 0);
        return a
    }

    function Nb(a) {
        const b = a.u,
            c = b[q];
        return c & 2 ? Bb(a.constructor, Mb(b, c, !1)) : a
    };

    function r(a, b) {
        a = a.u;
        return Ob(a, a[q], b)
    }

    function Ob(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= fb(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function u(a, b, c) {
        const d = a.u,
            e = d[q];
        mb(e);
        y(d, e, b, c);
        return a
    }

    function y(a, b, c, d, e) {
        var f = fb(b);
        if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return;
                f = a[f + (+!!(b & 512) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && (a[q] = e)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function Rb(a, b, c) {
        return void 0 !== Sb(a, b, c, !1)
    }

    function Tb(a, b, c) {
        var d = b & 2;
        a = Ob(a, b, c);
        Array.isArray(a) || (a = kb);
        b = a[q] | 0;
        b & 1 || bb(a);
        d ? b & 2 || (a[q] |= 34) : b & 32 && !(b & 2) && (d = a, d[q] &= -33);
        return a
    }

    function Ub(a, b) {
        a = r(a, b);
        return null == a ? a : "boolean" === typeof a || "number" === typeof a ? !!a : void 0
    }

    function Vb(a, b, c) {
        a = a.u;
        const d = a[q],
            e = d & 2;
        let f = Tb(a, d, b),
            g = f[q] | 0;
        if (!(g & 4)) {
            Object.isFrozen(f) && (g = 0, f = Za(f), y(a, d, b, f));
            let h = 0,
                m = 0;
            for (; h < f.length; h++) {
                const l = c(f[h]);
                null != l && (f[m++] = l)
            }
            m < h && (f.length = m);
            g |= 5;
            e && (g |= 34);
            f[q] = g;
            g & 2 && Object.freeze(f)
        }!e && (g & 2 || Object.isFrozen(f)) && (c = f = Za(f), c[q] |= 5, y(a, d, b, f));
        return f
    }

    function Wb(a, b, c) {
        {
            const d = a.u,
                e = d[q];
            mb(e);
            if (null == c) y(d, e, b);
            else {
                if (!((c[q] | 0) & 4)) {
                    Object.isFrozen(c) && (c = Za(c));
                    for (let f = 0; f < c.length; f++) c[f] = rb(c[f]);
                    c[q] = 5
                }
                y(d, e, b, c)
            }
        }
        return a
    }

    function A(a, b, c, d) {
        const e = a.u,
            f = e[q];
        mb(f);
        y(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }

    function Xb(a, b, c, d) {
        const e = a.u,
            f = e[q];
        mb(f);
        (c = Yb(e, f, c)) && c !== b && null != d && y(e, f, c);
        y(e, f, b, d);
        return a
    }

    function Zb(a, b, c) {
        a = a.u;
        return Yb(a, a[q], b) === c ? c : -1
    }

    function $b(a, b) {
        a = a.u;
        return Yb(a, a[q], b)
    }

    function Yb(a, b, c) {
        let d = 0;
        for (let e = 0; e < c.length; e++) {
            const f = c[e];
            null != Ob(a, b, f) && (0 !== d && y(a, b, d), d = f)
        }
        return d
    }

    function ac(a) {
        var b = bc;
        a = a.u;
        const c = a[q];
        mb(c);
        const d = Ob(a, c, 3);
        b = Nb(yb(d, b, !0, c));
        d !== b && y(a, c, 3, b);
        return b
    }

    function Sb(a, b, c, d) {
        a = a.u;
        const e = a[q],
            f = Ob(a, e, c, d);
        b = yb(f, b, !1, e);
        b !== f && null != b && y(a, e, c, b, d);
        return b
    }

    function B(a, b, c) {
        b = Sb(a, b, c, !1);
        if (null == b) return b;
        a = a.u;
        const d = a[q];
        if (!(d & 2)) {
            const e = Nb(b);
            e !== b && (b = e, y(a, d, c, b, !1))
        }
        return b
    }

    function cc(a, b, c, d, e) {
        var f = !!(b & 2),
            g = Tb(a, b, d);
        if (g === kb || !((g[q] | 0) & 4)) {
            var h = g;
            g = !!(b & 2);
            var m = !!((h[q] | 0) & 2);
            f = h;
            !g && m && (h = Za(h));
            var l = b | (m ? 2 : 0);
            m = m || void 0;
            let k = 0,
                t = 0;
            for (; k < h.length; k++) {
                const v = yb(h[k], c, !1, l);
                void 0 !== v && (m = m || v.u[q] & 2, h[t++] = v)
            }
            t < k && (h.length = t);
            c = h;
            h = c[q] | 0;
            l = h | 5;
            m = m ? l & -9 : l | 8;
            h != m && (c = ab(c, m));
            h = c;
            f !== h && y(a, b, d, h);
            (g && 2 !== e || 1 === e) && Object.freeze(h);
            return h
        }
        if (3 === e) return g;
        f ? 2 === e && (e = g[q] | 0, g = Za(g), g[q] = e, y(a, b, d, g)) : (f = Object.isFrozen(g), 1 === e ? f || Object.freeze(g) :
            (e = g[q] | 0, c = e & -35, f && (g = Za(g), e = 0, y(a, b, d, g)), e !== c && (g[q] = c)));
        return g
    }

    function C(a, b, c) {
        var d = a.u;
        const e = d[q];
        a = !!(e & 2);
        b = cc(d, e, b, c, a ? 1 : 2);
        if (!(a || (b[q] | 0) & 8)) {
            for (c = 0; c < b.length; c++) a = b[c], d = Nb(a), a !== d && (b[c] = d);
            b[q] |= 8
        }
        return b
    }

    function dc(a, b, c) {
        null == c && (c = void 0);
        return u(a, b, c)
    }

    function ec(a, b, c, d) {
        null == d && (d = void 0);
        return Xb(a, b, c, d)
    }

    function fc(a, b, c) {
        const d = a.u,
            e = d[q];
        mb(e);
        if (null != c) {
            var f = !!c.length;
            for (var g = 0; g < c.length; g++) {
                var h = c[g];
                f = f && !((h.u[q] | 0) & 2)
            }
            g = c[q] | 0;
            h = g | 1;
            f = (f ? h | 8 : h & -9) | 4;
            f != g && (c = ab(c, f))
        }
        null == c && (c = void 0);
        y(d, e, b, c);
        return a
    }

    function gc(a, b) {
        return tb(r(a, b))
    }

    function hc(a, b) {
        a = r(a, b);
        a = null == a ? a : ob(a) ? "number" === typeof a ? a : a : void 0;
        return a
    }

    function D(a, b) {
        return wb(r(a, b))
    }

    function ic(a, b) {
        return r(a, b)
    }

    function jc(a) {
        return a ? ? 0
    }

    function F(a, b, c = !1) {
        return Ub(a, b) ? ? c
    }

    function kc(a, b) {
        return jc(gc(a, b))
    }

    function lc(a, b) {
        a = a.u;
        const c = a[q],
            d = Ob(a, c, b);
        var e = null == d ? d : "number" === typeof d || "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && y(a, c, b, e);
        return e ? ? 0
    }

    function G(a, b) {
        return D(a, b) ? ? ""
    }

    function H(a, b) {
        return r(a, b) ? ? 0
    }

    function mc(a, b, c, d) {
        return B(a, b, Zb(a, d, c))
    }

    function nc(a, b, c) {
        if (null != c) {
            if (!ob(c)) throw Error(`Expected an int64 value encoded as a number or a string but got ${c} a ${ca(c)}`);
            c = "string" === typeof c ? c : c
        }
        return A(a, b, c, "0")
    }

    function oc(a, b) {
        var c = performance.now();
        if (null != c && "number" !== typeof c) throw Error(`Value of float/double field must be a number, found ${typeof c}: ${c}`);
        A(a, b, c, 0)
    }

    function I(a, b, c) {
        return A(a, b, c, 0)
    };
    var J = class {
        constructor(a) {
            a: {
                null == a && (a = Ab);Ab = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[q] | 0;
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d) {
                        var e = d - 1;
                        d = c[e];
                        if (ib(d)) {
                            b |= 256;
                            const f = +!!(b & 512) - 1;
                            e -= f;
                            if (1024 <= e) {
                                e = 1023 + f;
                                const g = c.length;
                                for (let h = e; h < g; h++) {
                                    const m = c[h];
                                    null != m && m !== d && (d[h - f] = m)
                                }
                                c.length = e + 1;
                                c[e] = d;
                                e = 1023
                            }
                            b = b & -2095105 | (e & 1023) << 11
                        }
                    }
                }
                a[q] = b
            }
            this.u = a
        }
        toJSON() {
            if (jb) var a = Ib(this, this.u, !1);
            else a = Gb(this.u, Jb, void 0, void 0, !1, !1), a = Ib(this,
                a, !0);
            return a
        }
    };
    J.prototype.oa = hb;

    function Ib(a, b, c) {
        var d = a.constructor.m,
            e = fb((c ? a.u : b)[q]),
            f = !1;
        if (d) {
            if (!c) {
                b = Za(b);
                var g;
                if (b.length && ib(g = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            Object.assign(b[b.length - 1] = {}, g);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            g = a.u[q];
            a = fb(g);
            g = +!!(g & 512) - 1;
            var h;
            for (let z = 0; z < d.length; z++) {
                var m = d[z];
                if (m < a) {
                    m += g;
                    var l = e[m];
                    null == l ? e[m] = c ? kb : bb([]) : c && l !== kb && $a(l)
                } else {
                    if (!h) {
                        var k = void 0;
                        e.length && ib(k = e[e.length - 1]) ? h = k : e.push(h = {})
                    }
                    l = h[m];
                    null == h[m] ? h[m] = c ? kb : bb([]) : c && l !== kb && $a(l)
                }
            }
        }
        d = b.length;
        if (!d) return b;
        let t, v;
        if (ib(h = b[d - 1])) {
            a: {
                var w = h;k = {};e = !1;
                for (let z in w) Object.prototype.hasOwnProperty.call(w, z) && (c = w[z], Array.isArray(c) && c != c && (e = !0), null != c ? k[z] = c : e = !0);
                if (e) {
                    for (let z in k) {
                        w = k;
                        break a
                    }
                    w = null
                }
            }
            w != h && (t = !0);d--
        }
        for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h) break;
            v = !0
        }
        if (!t && !v) return b;
        var x;
        f ? x = b : x = Array.prototype.slice.call(b, 0, d);
        b = x;
        f && (b.length = d);
        w && b.push(w);
        return b
    }

    function pc(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[q] |= 128;
        return Bb(a, cb(b))
    };

    function qc(a, b) {
        const c = rc;
        rc = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    }
    const sc = a => null !== a && void 0 !== a;
    let rc = void 0;

    function tc(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Bb(a, cb(b))
            }
            return b
        }
    };
    var uc = class extends J {};
    var vc = class extends J {};
    vc.m = [2, 3, 4];

    function wc(a, b) {
        this.h = a === xc && b || "";
        this.g = yc
    }
    var yc = {},
        xc = {};

    function zc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ac(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Cc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function Dc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Ec(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function Fc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Gc(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Hc(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Ic(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    var Jc;
    var Kc = class {
        constructor(a) {
            this.h = a
        }
        toString() {
            return this.h + ""
        }
    };

    function Lc(a, b) {
        a = Mc.exec(Nc(a).toString());
        var c = a[3] || "";
        return Oc(a[1] + Pc("?", a[2] || "", b) + Pc("#", c))
    }

    function Nc(a) {
        return a instanceof Kc && a.constructor === Kc ? a.h : "type_error:TrustedResourceUrl"
    }
    var Mc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Qc = {};

    function Oc(a) {
        if (void 0 === Jc) {
            var b = null;
            var c = n.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: pa,
                        createScript: pa,
                        createScriptURL: pa
                    })
                } catch (d) {
                    n.console && n.console.error(d.message)
                }
                Jc = b
            } else Jc = b
        }
        a = (b = Jc) ? b.createScriptURL(a) : a;
        return new Kc(a, Qc)
    }

    function Pc(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var Rc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };

    function Sc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Tc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!da(f) || ea(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ea(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                La(g ? Ra(f) : f, d)
            }
        }
    }

    function Uc(a) {
        this.g = a || n.document || document
    }
    Uc.prototype.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    Uc.prototype.createElement = function(a) {
        var b = this.g;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    Uc.prototype.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };
    Uc.prototype.append = function(a, b) {
        Tc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    Uc.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Vc() {
        return ua && ya ? ya.mobile : !Wc() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"))
    }

    function Wc() {
        return ua && ya ? !ya.mobile && (p("iPad") || p("Android") || p("Silk")) : p("iPad") || p("Android") && !p("Mobile") || p("Silk")
    };
    var Xc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Yc = /#|$/;

    function Zc(a, b) {
        var c = a.search(Yc);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };

    function $c(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    const ad = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function bd(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Sa(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function cd(a) {
        return bd(a.top) ? a.top : null
    }

    function dd(a, b) {
        const c = ed("SCRIPT", a);
        c.src = Nc(b);
        (void 0) ? .kc || (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function fd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function gd() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function L(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function hd(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var id = /^([0-9.]+)px$/,
        jd = /^(-?[0-9.]{1,30})$/;

    function kd(a) {
        if (!jd.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function M(a) {
        return (a = id.exec(a)) ? +a[1] : null
    }
    var ld = (a, b) => {
            for (let e = 0; 50 > e; ++e) {
                try {
                    var c = !(!a.frames || !a.frames[b])
                } catch {
                    c = !1
                }
                if (c) return a;
                a: {
                    try {
                        const f = a.parent;
                        if (f && f != a) {
                            var d = f;
                            break a
                        }
                    } catch {}
                    d = null
                }
                if (!(a = d)) break
            }
            return null
        },
        md = Ac(() => Vc() ? 2 : Wc() ? 1 : 0),
        nd = (a, b) => {
            L(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    let od = [];
    const pd = () => {
        const a = od;
        od = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var qd = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        rd = a => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: qd(),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        td = a => {
            var b = sd;
            "complete" === b.readyState || "interactive" === b.readyState ? (od.push(a), 1 == od.length && (window.Promise ? Promise.resolve().then(pd) : window.setImmediate ? setImmediate(pd) : setTimeout(pd, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function ed(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function ud(a, b, c = null, d = !1, e = !1) {
        vd(a, b, c, d, e)
    }

    function vd(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = ed("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const m = Ka(h, f);
                    0 <= m && Array.prototype.splice.call(h, m, 1)
                }
                Ec(f, "load", g);
                Ec(f, "error", g)
            };
            Dc(f, "load", g);
            Dc(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var xd = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            L(a, (c, d) => {
                if (c || 0 === c) b += `&${d}=${encodeURIComponent(""+c)}`
            });
            wd(b)
        },
        wd = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : ud(b, a, void 0, !1, !1)
        };
    let yd = null;
    var sd = document,
        N = window;
    let zd = null;
    var Ad = (a, b = []) => {
        let c = !1;
        n.google_logging_queue || (c = !0, n.google_logging_queue = []);
        n.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == zd) {
                zd = !1;
                try {
                    var d = cd(n);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (zd = !0);
                    n.localStorage.getItem("google_logging") && (zd = !0)
                } catch (e) {}
            }
            a = zd
        }
        a && (d = n.document, a = new wc(xc, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = Oc(a instanceof wc && a.constructor === wc && a.g === yc ? a.h : "type_error:Const"), dd(d, a))
    };

    function Bd(a = n) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Cd(a = Bd()) {
        return a ? bd(a.master) ? a.master : null : null
    };

    function Dd(a, ...b) {
        if (0 === b.length) return Oc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Oc(c)
    };
    var Ed = a => {
            a = Cd(Bd(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        Fd = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        Gd = () => {
            if (!N) return !1;
            try {
                return !(!N.navigator.standalone && !N.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        Hd = a => {
            if (!a) return "";
            a = a.toLowerCase();
            "ca-" != a.substring(0, 3) && (a = "ca-" + a);
            return a
        };
    class Jd {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    var Kd = a => !!(a.error && a.meta && a.id);
    const Ld = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Md = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        Nd = class {
            constructor(a, b, c) {
                this.url = a;
                this.l = b;
                this.Va = !!c;
                this.depth = null
            }
        };
    let Od = null;

    function Pd() {
        if (null === Od) {
            Od = "";
            try {
                let a = "";
                try {
                    a = n.top.location.hash
                } catch (b) {
                    a = n.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Od = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Od
    };

    function Qd() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Rd() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    var Sd = class {
        constructor(a, b) {
            var c = Rd() || Qd();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Td = n.performance,
        Ud = !!(Td && Td.mark && Td.measure && Td.clearMarks),
        Vd = Ac(() => {
            var a;
            if (a = Ud) a = Pd(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Wd(a) {
        a && Td && Vd() && (Td.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Td.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Xd(a) {
        a.g = !1;
        a.h != a.i.google_js_reporting_queue && (Vd() && La(a.h, Wd), a.h.length = 0)
    }
    class Yd {
        constructor(a) {
            this.h = [];
            this.i = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Vd() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Sd(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Td && Vd() && Td.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Rd() || Qd()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Td && Vd() && Td.mark(b);
                !this.g || 2048 < this.h.length ||
                    this.h.push(a)
            }
        }
    };

    function Zd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function $d(a, b, c, d, e) {
        const f = [];
        L(a, function(g, h) {
            (g = ae(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function ae(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(ae(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent($d(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function be(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function ce(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = be(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.h[g];
            for (let m = 0; m < h.length; m++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = $d(h[m], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.i;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class de {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function ee(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    var ge = class {
        constructor(a, b, c = null) {
            this.v = a;
            this.A = b;
            this.h = c;
            this.g = null;
            this.i = !1;
            this.s = this.G
        }
        eb(a) {
            this.s = a
        }
        Ca(a) {
            this.g = a
        }
        j(a) {
            this.i = a
        }
        ga(a, b, c) {
            let d, e;
            try {
                this.h && this.h.g ? (e = this.h.start(a.toString(), 3), d = b(), this.h.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    Wd(e), b = this.s(a, new Jd(f, {
                        message: ee(f)
                    }), void 0, c)
                } catch (g) {
                    this.G(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        qa(a, b) {
            return (...c) => this.ga(a, () => b.apply(void 0, c))
        }
        G(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const K = new de;
                K.g.push(1);
                K.h[1] = Zd("context", a);
                Kd(b) || (b = new Jd(b, {
                    message: ee(b)
                }));
                if (b.msg) {
                    var g = b.msg.substring(0, 512);
                    K.g.push(2);
                    K.h[2] = Zd("msg", g)
                }
                const qb = b.meta || {};
                if (this.g) try {
                    this.g(qb)
                } catch (Ha) {}
                if (d) try {
                    d(qb)
                } catch (Ha) {}
                b = [qb];
                K.g.push(3);
                K.h[3] = b;
                d = n;
                b = [];
                g = null;
                do {
                    var h = d;
                    if (bd(h)) {
                        var m = h.location.href;
                        g = h.document && h.document.referrer || null
                    } else m = g, g = null;
                    b.push(new Nd(m || "", h));
                    try {
                        d = h.parent
                    } catch (Ha) {
                        d = null
                    }
                } while (d && h != d);
                for (let Ha = 0, Bc = b.length - 1; Ha <= Bc; ++Ha) b[Ha].depth = Bc - Ha;
                h = n;
                if (h.location &&
                    h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                    for (m = 1; m < b.length; ++m) {
                        var l = b[m];
                        l.url || (l.url = h.location.ancestorOrigins[m - 1] || "", l.Va = !0)
                    }
                var k = b;
                let Pb = new Nd(n.location.href, n, !1);
                h = null;
                const Qb = k.length - 1;
                for (l = Qb; 0 <= l; --l) {
                    var t = k[l];
                    !h && Ld.test(t.url) && (h = t);
                    if (t.url && !t.Va) {
                        Pb = t;
                        break
                    }
                }
                t = null;
                const Id = k.length && k[Qb].url;
                0 != Pb.depth && Id && (t = k[Qb]);
                f = new Md(Pb, t);
                if (f.h) {
                    var v = f.h.url || "";
                    K.g.push(4);
                    K.h[4] = Zd("top", v)
                }
                var w = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var x =
                        f.g.url.match(Xc),
                        z = x[1],
                        E = x[3],
                        P = x[4];
                    k = "";
                    z && (k += z + ":");
                    E && (k += "//", k += E, P && (k += ":" + P));
                    var ka = k
                } else ka = "";
                w = [w, {
                    url: ka
                }];
                K.g.push(5);
                K.h[5] = w;
                fe(this.v, e, K, this.i, c)
            } catch (K) {
                try {
                    fe(this.v, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: ee(K),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (qb) {}
            }
            return this.A
        }
        ca(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.G(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    var he = a => "string" === typeof a,
        ie = a => void 0 === a;
    var je = class extends J {};
    je.m = [2, 8];
    var ke = [3, 4, 5],
        le = [6, 7];

    function me(a) {
        return null != a ? !a : a
    }

    function ne(a, b) {
        let c = !1;
        for (let d = 0; d < a.length; d++) {
            const e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function oe(a, b) {
        var c = C(a, je, 2);
        if (!c.length) return pe(a, b);
        a = H(a, 1);
        if (1 === a) return me(oe(c[0], b));
        c = Na(c, d => () => oe(d, b));
        switch (a) {
            case 2:
                return ne(c, !1);
            case 3:
                return ne(c, !0)
        }
    }

    function pe(a, b) {
        const c = $b(a, ke);
        a: {
            switch (c) {
                case 3:
                    var d = H(a, Zb(a, ke, 3));
                    break a;
                case 4:
                    d = H(a, Zb(a, ke, 4));
                    break a;
                case 5:
                    d = H(a, Zb(a, ke, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b(...Vb(a, 8, wb))
            } catch (f) {
                return
            }
            b = H(a, 1);
            if (4 === b) return !!e;
            if (5 === b) return null != e;
            if (12 === b) a = G(a, Zb(a, le, 7));
            else a: {
                switch (c) {
                    case 4:
                        a = lc(a, Zb(a, le, 6));
                        break a;
                    case 5:
                        a = G(a, Zb(a, le, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === sa(String(e), a);
                if (null != e) switch (b) {
                    case 7:
                        return e <
                            a;
                    case 8:
                        return e > a;
                    case 12:
                        return he(a) && he(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === sa(String(e), a);
                    case 11:
                        return null != e && 1 === sa(String(e), a)
                }
            }
        }
    }

    function qe(a, b) {
        return !a || !(!b || !oe(a, b))
    };
    var re = class extends J {};
    re.m = [4];
    var se = class extends J {
        getValue() {
            return B(this, re, 2)
        }
    };
    var te = class extends J {},
        ue = tc(te);
    te.m = [5];
    var ve = [1, 2, 3, 6, 7];
    var we = class extends J {
        constructor() {
            super()
        }
    };
    we.m = [2];

    function xe(a) {
        var b = new ye;
        return u(b, 1, a)
    }
    var ye = class extends J {
        constructor() {
            super()
        }
        getValue() {
            return H(this, 1)
        }
    };

    function ze(a, b) {
        return nc(a, 1, b)
    }

    function Ae(a, b) {
        return nc(a, 2, b)
    }
    var Be = class extends J {
        constructor() {
            super()
        }
        getWidth() {
            return jc(hc(this, 1))
        }
        getHeight() {
            return jc(hc(this, 2))
        }
    };

    function Ce(a, b) {
        return dc(a, 1, b)
    }

    function De(a, b) {
        return dc(a, 2, b)
    }

    function Fe(a, b) {
        dc(a, 3, b)
    }

    function Ge(a, b) {
        return A(a, 5, nb(b), !1)
    }
    var He = class extends J {
        constructor() {
            super()
        }
        getContentUrl() {
            return G(this, 4)
        }
    };
    var bc = class extends J {};
    var Ie = class extends J {};
    var Je = class extends J {
        constructor() {
            super()
        }
        getContentUrl() {
            return G(this, 1)
        }
    };

    function Ke(a, b) {
        return ec(a, 4, Le, b)
    }
    var Me = class extends J {
            constructor() {
                super()
            }
        },
        Le = [4, 5, 6, 8, 9, 10, 11];
    var Ne = class extends J {
        constructor() {
            super()
        }
    };

    function Oe(a, b) {
        return I(a, 1, b)
    }

    function Pe(a, b) {
        return I(a, 2, b)
    }
    var Qe = class extends J {
        constructor() {
            super()
        }
    };
    var Re = class extends J {
            constructor() {
                super()
            }
        },
        Se = [1, 2];

    function Te(a, b) {
        return dc(a, 1, b)
    }

    function Ue(a, b) {
        return fc(a, 2, b)
    }

    function Ve(a, b) {
        return Wb(a, 4, b)
    }

    function We(a, b) {
        return fc(a, 5, b)
    }

    function Xe(a, b) {
        return I(a, 6, b)
    }
    var Ye = class extends J {
        constructor() {
            super()
        }
    };
    Ye.m = [2, 4, 5];
    var Ze = class extends J {
        constructor() {
            super()
        }
    };
    Ze.m = [5];
    var $e = [1, 2, 3, 4];
    var af = class extends J {
        constructor() {
            super()
        }
    };
    af.m = [2, 3];

    function bf(a) {
        var b = new cf;
        return ec(b, 4, df, a)
    }
    var cf = class extends J {
            constructor() {
                super()
            }
            getTagSessionCorrelator() {
                return jc(hc(this, 2))
            }
        },
        df = [4, 5, 7, 8];

    function ef(a, ...b) {
        ff(a, ...b.map(c => ({
            hb: 4,
            Ya: c.toJSON()
        })))
    }

    function gf(a, ...b) {
        ff(a, ...b.map(c => ({
            hb: 7,
            Ya: c.toJSON()
        })))
    };

    function hf(a) {
        return JSON.stringify([a.map(b => [{
            [b.hb]: b.Ya
        }]), null])
    };
    var jf = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function kf() {
        this.s = this.s;
        this.i = this.i
    }
    kf.prototype.s = !1;

    function lf(a, b) {
        a.s ? b() : (a.i || (a.i = []), a.i.push(b))
    };

    function mf(a, b, c, d) {
        Dc(b, c, d);
        lf(a, () => Ec(b, c, d))
    }

    function nf(a, b) {
        1 !== a.g && (a.g = 1, a.H && a.H(b))
    }

    function of (a) {
        a.l.document.visibilityState ? mf(a, a.l.document, "visibilitychange", b => {
            "hidden" === a.l.document.visibilityState && nf(a, b);
            "visible" === a.l.document.visibilityState && (a.g = 0)
        }) : "onpagehide" in a.l ? (mf(a, a.l, "pagehide", b => {
            nf(a, b)
        }), mf(a, a.l, "pageshow", () => {
            a.g = 0
        })) : mf(a, a.l, "beforeunload", b => {
            nf(a, b)
        })
    }

    function pf(a, b) {
        a.H || of (a);
        a.H = b
    }
    var qf = class extends kf {
        constructor(a) {
            super();
            this.l = a;
            this.g = 0;
            this.H = null
        }
    };

    function ff(a, ...b) {
        a.v && 65536 <= hf(a.g.concat(b)).length && rf(a);
        a.g.push(...b);
        a.g.length >= a.s && rf(a);
        a.g.length && null === a.h && (a.h = setTimeout(() => {
            rf(a)
        }, a.B))
    }

    function sf(a, b, c, d) {
        a.i || (a.i = new qf(b), pf(a.i, () => {
            for (const e of a.j) e();
            c()
        }));
        d && 1 !== a.i.g && a.j.push(d)
    }

    function rf(a) {
        null !== a.h && (clearTimeout(a.h), a.h = null);
        if (a.g.length) {
            var b = hf(a.g);
            a.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }

    function tf(a, b, c) {
        sf(a, b, () => {
            rf(a)
        }, c)
    }
    var uf = class {
            constructor(a, b, c) {
                this.A = jf;
                this.B = a;
                this.s = b;
                this.v = c;
                this.j = [];
                this.g = [];
                this.h = null
            }
        },
        vf = class extends uf {
            constructor(a = 1E3, b = 100, c = !1) {
                super(a, b, c && !0)
            }
        };

    function wf(a, b) {
        b = nc(b, 1, Date.now());
        var c = rd(window);
        b = nc(b, 2, c);
        return nc(b, 6, a.s)
    }

    function xf(a, b, c, d, e, f) {
        if (a.i) {
            var g = Pe(Oe(new Qe, b), c);
            b = Xe(Ue(Te(We(Ve(new Ye, d), e), g), a.g.slice()), f);
            b = bf(b);
            ef(a.h, wf(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(h => H(h, 1) === H(g, 1) && H(h, 2) === c)) a.g.push(g), 100 < a.g.length && a.g.shift()
        }
    }

    function yf(a, b, c, d) {
        if (a.i && a.j) {
            var e = new af;
            b = fc(e, 2, b);
            c = fc(b, 3, c);
            d && A(c, 1, sb(d), 0);
            d = new cf;
            d = ec(d, 7, df, c);
            ef(a.h, wf(a, d))
        }
    }

    function zf(a, b, c, d) {
        if (a.i) {
            var e = new Ne;
            b = u(e, 1, sb(b));
            c = u(b, 2, sb(c));
            d = u(c, 3, d);
            c = new cf;
            d = ec(c, 8, df, d);
            ef(a.h, wf(a, d))
        }
    }
    var Af = class {
        constructor(a, b, c, d = new vf(b)) {
            this.s = a;
            this.j = c;
            this.h = d;
            this.g = [];
            this.i = 0 < a && gd() < 1 / a
        }
    };
    var Q = a => {
        var b = "Aa";
        if (a.Aa && a.hasOwnProperty(b)) return a.Aa;
        b = new a;
        return a.Aa = b
    };
    var Bf = class {
        constructor() {
            this.F = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    };
    var Cf = /^true$/.test("false");

    function Df(a, b) {
        switch (b) {
            case 1:
                return H(a, Zb(a, ve, 1));
            case 2:
                return H(a, Zb(a, ve, 2));
            case 3:
                return H(a, Zb(a, ve, 3));
            case 6:
                return H(a, Zb(a, ve, 6));
            default:
                return null
        }
    }

    function Ef(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return F(a, 1);
            case 7:
                return G(a, 3);
            case 2:
                return lc(a, 2);
            case 3:
                return G(a, 3);
            case 6:
                return Vb(a, 4, wb);
            default:
                return null
        }
    }
    const Ff = Ac(() => {
        if (!Cf) return {};
        try {
            const a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch {}
        return {}
    });

    function Gf(a, b, c, d = 0) {
        Q(Hf).i[d] = Q(Hf).i[d] ? .add(b) ? ? (new Set).add(b);
        const e = Ff();
        if (null != e[b]) return e[b];
        b = If(d)[b];
        if (!b) return c;
        b = ue(JSON.stringify(b));
        b = Jf(b);
        a = Ef(b, a);
        return null != a ? a : c
    }

    function Jf(a) {
        const b = Q(Bf).F;
        if (b) {
            const c = Pa(C(a, se, 5), d => qe(B(d, je, 1), b));
            if (c) return c.getValue() ? ? null
        }
        return B(a, re, 4) ? ? null
    }
    class Hf {
        constructor() {
            this.h = {};
            this.j = [];
            this.i = {};
            this.g = new Map
        }
    }

    function Kf(a, b = !1, c) {
        return !!Gf(1, a, b, c)
    }

    function Lf(a, b = 0, c) {
        a = Number(Gf(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Mf(a, b = "", c) {
        a = Gf(3, a, b, c);
        return "string" === typeof a ? a : b
    }

    function Nf(a, b = [], c) {
        a = Gf(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function If(a) {
        return Q(Hf).h[a] || (Q(Hf).h[a] = {})
    }

    function Of(a, b) {
        const c = If(b);
        L(a, (d, e) => c[e] = d)
    }

    function Pf(a, b, c, d, e = !1) {
        const f = [],
            g = [];
        La(b, h => {
            const m = If(h);
            La(a, l => {
                var k = $b(l, ve);
                const t = Df(l, k);
                if (t) {
                    var v = Q(Hf).g.get(h) ? .get(t) ? .slice(0) ? ? [];
                    a: {
                        const w = new Ze;
                        switch (k) {
                            case 1:
                                Xb(w, 1, $e, t);
                                break;
                            case 2:
                                Xb(w, 2, $e, t);
                                break;
                            case 3:
                                Xb(w, 3, $e, t);
                                break;
                            case 6:
                                Xb(w, 4, $e, t);
                                break;
                            default:
                                k = void 0;
                                break a
                        }
                        Wb(w, 5, v);k = w
                    }
                    if (v = k) v = !!Q(Hf).i[h] ? .has(t);
                    v && f.push(k);
                    if (v = k) v = !!Q(Hf).g.get(h) ? .has(t);
                    v && g.push(k);
                    e || (k = Q(Hf), k.g.has(h) || k.g.set(h, new Map), k.g.get(h).has(t) || k.g.get(h).set(t, []), d &&
                        k.g.get(h).get(t).push(d));
                    m[t] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && yf(c, f, g, d ? ? void 0)
    }

    function Qf(a, b) {
        const c = If(b);
        La(a, d => {
            var e = ue(JSON.stringify(d));
            const f = $b(e, ve);
            (e = Df(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function Rf() {
        return Na(Object.keys(Q(Hf).h), a => Number(a))
    }

    function Sf(a) {
        Qa(Q(Hf).j, a) || Of(If(4), a)
    };

    function R(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function Tf(a, b, c) {
        return b[a] || c
    }

    function Uf(a) {
        R(5, Kf, a);
        R(6, Lf, a);
        R(7, Mf, a);
        R(8, Nf, a);
        R(13, Qf, a);
        R(15, Sf, a)
    }

    function Vf(a) {
        R(4, b => {
            Q(Bf).F = b
        }, a);
        R(9, (b, c) => {
            var d = Q(Bf);
            null == d.F[3][b] && (d.F[3][b] = c)
        }, a);
        R(10, (b, c) => {
            var d = Q(Bf);
            null == d.F[4][b] && (d.F[4][b] = c)
        }, a);
        R(11, (b, c) => {
            var d = Q(Bf);
            null == d.F[5][b] && (d.F[5][b] = c)
        }, a);
        R(14, b => {
            var c = Q(Bf);
            for (const d of [3, 4, 5]) Object.assign(c.F[d], b[d])
        }, a)
    }

    function Wf(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Xf(a, b, c) {
        a.i = Tf(1, b, () => {});
        a.j = (d, e) => Tf(2, b, () => [])(d, c, e);
        a.g = () => Tf(3, b, () => [])(c);
        a.h = d => {
            Tf(16, b, () => {})(d, c)
        }
    }
    class Yf {
        i() {}
        h() {}
        j() {
            return []
        }
        g() {
            return []
        }
    };

    function fe(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof de ? f = c : (f = new de, L(c, (h, m) => {
                var l = f;
                const k = l.j++;
                h = Zd(m, h);
                l.g.push(k);
                l.h[k] = h
            }));
            const g = ce(f, "/pagead/gen_204?id=" + b + "&");
            g && ud(n, g)
        } catch (f) {}
    }

    function Zf(a, b) {
        0 <= b && 1 >= b && (a.g = b)
    }
    class $f {
        constructor() {
            this.g = Math.random()
        }
    };
    let ag, bg;
    const cg = new Yd(window);
    (a => {
        ag = a ? ? new $f;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Zf(ag, window.google_srt);
        bg = new ge(ag, !0, cg);
        bg.Ca(() => {});
        bg.j(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || Xd(cg) : cg.g && Dc(window, "load", () => {
            window.google_measure_js_timing || Xd(cg)
        })
    })();
    var dg = {
        Ub: 0,
        Tb: 1,
        Qb: 2,
        Lb: 3,
        Rb: 4,
        Mb: 5,
        Sb: 6,
        Ob: 7,
        Pb: 8,
        Kb: 9,
        Nb: 10,
        Vb: 11
    };
    var eg = {
        Xb: 0,
        Yb: 1,
        Wb: 2
    };

    function fg(a) {
        if (0 != a.g) throw Error("Already resolved/rejected.");
    }
    var ig = class {
        constructor() {
            this.h = new gg(this);
            this.g = 0
        }
        resolve(a) {
            fg(this);
            this.g = 1;
            this.j = a;
            hg(this.h)
        }
    };

    function hg(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.h && a.h(a.g.j);
                break;
            case 2:
                a.i && a.i(a.g.i);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var gg = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.h) throw Error("Then functions already set.");
            this.h = a;
            this.i = b;
            hg(this)
        }
    };
    const jg = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new jg(Ma(this.g, a))
        }
        apply(a) {
            return new jg(a(this.g.slice(0)))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new jg(b)
        }
    };

    function kg(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const mg = class {
        constructor() {
            this.g = {};
            this.h = {}
        }
        set(a, b) {
            const c = lg(a);
            this.g[c] = b;
            this.h[c] = a
        }
        get(a, b) {
            a = lg(a);
            return void 0 !== this.g[a] ? this.g[a] : b
        }
        clear() {
            this.g = {};
            this.h = {}
        }
    };

    function lg(a) {
        return a instanceof Object ? String(fa(a)) : a + ""
    };

    function ng(a) {
        return new og({
            value: a
        }, null)
    }

    function pg(a) {
        return new og(null, a)
    }

    function qg(a) {
        try {
            return ng(a())
        } catch (b) {
            return pg(b)
        }
    }

    function rg(a) {
        return null != a.g ? a.getValue() : null
    }

    function sg(a, b) {
        null != a.g && b(a.getValue());
        return a
    }

    function tg(a, b) {
        null != a.g || b(a.h);
        return a
    }
    class og {
        constructor(a, b) {
            this.g = a;
            this.h = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return null != this.g ? (a = a(this.getValue()), a instanceof og ? a : ng(a)) : this
        }
    };
    const ug = class {
        constructor(a) {
            this.g = new mg;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return void 0 !== this.g.g[lg(a)]
        }
    };
    class vg {
        constructor() {
            this.g = new mg
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new ug, this.g.set(a, c));
            c.add(b)
        }
    };
    var S = class extends J {
        getId() {
            return D(this, 3)
        }
    };
    S.m = [4];
    class wg {
        constructor({
            jb: a,
            Zb: b,
            jc: c,
            Ab: d
        }) {
            this.g = b;
            this.j = new jg(a || []);
            this.i = d;
            this.h = c
        }
    };
    const yg = a => {
            const b = [],
                c = a.j;
            c && c.g.length && b.push({
                V: "a",
                fa: xg(c)
            });
            null != a.g && b.push({
                V: "as",
                fa: a.g
            });
            null != a.h && b.push({
                V: "i",
                fa: String(a.h)
            });
            null != a.i && b.push({
                V: "rp",
                fa: String(a.i)
            });
            b.sort(function(d, e) {
                return d.V.localeCompare(e.V)
            });
            b.unshift({
                V: "t",
                fa: "aa"
            });
            return b
        },
        xg = a => {
            a = a.g.slice(0).map(zg);
            a = JSON.stringify(a);
            return hd(a)
        },
        zg = a => {
            const b = {};
            null != D(a, 7) && (b.q = D(a, 7));
            null != gc(a, 2) && (b.o = gc(a, 2));
            null != gc(a, 5) && (b.p = gc(a, 5));
            return b
        };
    var Ag = class extends J {
        setLocation(a) {
            return u(this, 1, a)
        }
    };

    function Bg(a) {
        const b = [].slice.call(arguments).filter(zc(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Sa || []);
            d = Object.assign(d, e.bb)
        });
        return new Cg(c, d)
    }

    function Dg(a) {
        switch (a) {
            case 1:
                return new Cg(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Cg(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Cg(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Cg(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Eg(a) {
        if (null == a) var b = null;
        else {
            var c = yg(a);
            a = [];
            for (b of c) c = String(b.fa), a.push(b.V + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
            b = new Cg(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class Cg {
        constructor(a, b) {
            this.Sa = a;
            this.bb = b
        }
    };
    const Fg = new Cg(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var Gg = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function Hg(a) {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function Ig(a) {
        return Hg(a).clientWidth
    };
    var Jg = a => {
            a = a.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        Kg = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        Lg = a => {
            const b = Hg(a).clientHeight || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        },
        Mg = (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    var Ng = class extends J {};
    var Og = class extends J {
        constructor() {
            super()
        }
    };
    var Pg = class extends J {
        constructor() {
            super()
        }
    };
    Pg.m = [1];
    var Qg = class extends J {
        g() {
            return F(this, 2)
        }
    };
    var Rg = class extends J {};
    var Sg = class extends J {};
    var Tg = class extends J {
        g() {
            return C(this, Sg, 1)
        }
    };
    Tg.m = [1];
    var Ug = class extends J {};
    var Vg = class extends J {};
    var Wg = class extends J {};
    Wg.m = [6, 7, 9, 10, 11];

    function Xg(a) {
        var b = [];
        kg(a.getElementsByTagName("p"), function(c) {
            100 <= Yg(c) && b.push(c)
        });
        return b
    }

    function Yg(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        kg(a.childNodes, function(c) {
            b += Yg(c)
        });
        return b
    }

    function Zg(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function $g(a, b) {
        if (null == a.g) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const ah = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.h = b;
            this.i = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.j)
            } catch (f) {}
            if (!b.length) return [];
            a = Ra(b);
            a = $g(this, a);
            "number" === typeof this.h && (b = this.h, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.i) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Xg(a[c]),
                        e = this.i;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.j,
                occurrenceIndex: this.h,
                paragraphIndex: this.i,
                ignoreMode: this.g
            })
        }
    };

    function bh(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };
    var T = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        ch = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        dh = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var eh = new T(1082, !0),
        fh = new T(1271),
        gh = new ch(1130, 100),
        hh = new class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        }(14),
        ih = new T(1247, !0),
        jh = new T(1272),
        kh = new T(316),
        lh = new T(1207, !0),
        mh = new T(313),
        nh = new T(369),
        oh = new T(1289),
        ph = new T(1298),
        qh = new T(1230),
        rh = new T(1229),
        sh = new T(1231),
        th = new T(1171, !0),
        uh = new T(1276),
        vh = new T(217),
        wh = new T(1288),
        xh = new T(1295),
        yh = new dh(556791602),
        zh = new T(547450892),
        Ah = new T(544317767, !0),
        Bh = new T(558761323),
        Ch = new T(529362570, !0),
        Dh = new T(546245766),
        Eh = new T(506914611),
        Fh = new T(542187945, !0),
        Gh = new T(506852289),
        Hh = new T(1120),
        Ih = new ch(1079, 5),
        Jh = new dh(1934, ["A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf/RP0paks+RoTYbXHxceT/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
            "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="
        ]),
        Kh = new T(203),
        Lh = new T(84);
    var Mh = class {
        constructor() {
            const a = {};
            this.i = (b, c) => null != a[b] ? a[b] : c;
            this.g = (b, c) => null != a[b] ? a[b] : c;
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.h = (b, c) => null != a[b] ? a[b] : c;
            this.s = () => {}
        }
    };

    function U(a) {
        return Q(Mh).i(a.g, a.defaultValue)
    }

    function Nh() {
        return Q(Mh).j(hh.g, hh.defaultValue)
    };

    function Qh(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        bh(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Rh(a, b) {
        const c = e => {
                e = Sh(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = Sh(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: Th(a.previousSibling, c),
                    ka: e => Th(e.previousSibling, c),
                    pa: 0
                };
            case 2:
                return {
                    init: Th(a.lastChild, c),
                    ka: e => Th(e.previousSibling, c),
                    pa: 0
                };
            case 3:
                return {
                    init: Th(a.nextSibling, d),
                    ka: e => Th(e.nextSibling, d),
                    pa: 3
                };
            case 1:
                return {
                    init: Th(a.firstChild, d),
                    ka: e => Th(e.nextSibling, d),
                    pa: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Sh(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Th(a, b) {
        return a && b(a) ? a : null
    };
    var Uh = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Vh = a => {
        if (a == a.top) return 0;
        for (; a && a != a.top && bd(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var Wh = (a, b) => {
        do {
            const c = fd(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function Xh(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = M(a[c[e]]);
                d = null === d ? null : Math.round(d);
                null != d && (b[f] = d)
            }
        }
    }
    var Yh = (a, b) => !((jd.test(b.google_ad_width) || id.test(a.style.width)) && (jd.test(b.google_ad_height) || id.test(a.style.height))),
        $h = (a, b) => (a = Zh(a, b)) ? a.y : 0,
        Zh = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        ai = a => {
            let b = 0;
            for (let c in Uh) - 1 != a.indexOf(c) && (b |= Uh[c]);
            return b
        },
        bi = (a, b, c, d, e) => {
            if (a !== a.top) return cd(a) ? 3 : 16;
            if (!(488 > Ig(a))) return 4;
            if (!(a.innerHeight >= a.innerWidth)) return 5;
            const f = Ig(a);
            if (!f || (f - c) / f > d) a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive) a: {
                    c = b.parentElement;
                    for (b = Ig(a); c; c = c.parentElement)
                        if ((d = fd(c, a)) && (e = M(d.width)) && !(e >= b) && "visible" != d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
                a = c ? 7 : !0
            }
            return a
        },
        ci = (a, b, c, d) => {
            const e = bi(b, c, a, .3, d);
            !0 !== e ? a = e : "true" == d.google_full_width_responsive || Wh(c, b) ? (b = Ig(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
            return a
        },
        di = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const ei = (a, b) => {
            if (3 == b.nodeType) return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName)) return !1;
                let c;
                try {
                    c = fd(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        },
        fi = (a, b, c) => {
            a = Zh(b, a);
            return "rtl" == c ? -a.x : a.x
        };
    var gi = (a, b) => {
        var c;
        c = (c = b.parentElement) ? (c = fd(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            di(b, c, "0px");
            b.style.width = Ig(a) + "px";
            if (0 !== fi(a, b, c)) {
                di(b, c, "0px");
                var d = fi(a, b, c);
                di(b, c, -1 * d + "px");
                a = fi(a, b, c);
                0 !== a && a !== d && di(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };
    var hi = class {
        constructor(a, b) {
            this.I = a;
            this.i = b
        }
        height() {
            return this.i
        }
        g(a) {
            return 300 < a && 300 < this.i ? this.I : Math.min(1200, Math.round(a))
        }
        h() {}
    };
    var ii = (a, b, c, d = e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = fd(a, b)) && e[c] && d(e[c]) || null
        },
        ji = a => b => b.I <= a,
        mi = (a, b, c, d) => {
            const e = a && ki(c, b),
                f = li(b, d);
            return g => !(e && g.height() >= f)
        },
        ni = a => b => b.height() <= a,
        ki = (a, b) => $h(a, b) < Hg(b).clientHeight - 100,
        oi = (a, b) => {
            var c = ii(b, a, "height", M);
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = ii(b, a, "height", M);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && M(b.style.height)) && (c = Math.min(c, d)), (d = ii(b, a, "maxHeight", M)) && (c =
                Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const li = (a, b) => {
        const c = 0 == Fd(a);
        return b && c ? Math.max(250, 2 * Hg(a).clientHeight / 3) : 250
    };
    var pi = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_shadow_mode: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0,
        google_overlays: !0
    };
    const qi = RegExp("(^| )adsbygoogle($| )");

    function ri(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Sc(d.property);
            a[e] = d.value
        }
    };
    class si {
        constructor() {
            var a = Dd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.s = Math.random();
            this.h = this.G;
            this.v = a
        }
        Ca(a) {
            this.g = a
        }
        j(a) {
            this.i = a
        }
        eb(a) {
            this.h = a
        }
        G(a, b, c = .01, d, e = "jserror") {
            if ((this.i ? this.s : Math.random()) > c) return !1;
            Kd(b) || (b = new Jd(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            n.google_js_errors = n.google_js_errors || [];
            n.google_js_errors.push(b);
            n.error_rep_loaded || (dd(n.document, this.v), n.error_rep_loaded = !0);
            return !1
        }
        ga(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.h(a, d, .01, c, "jserror")) throw d;
            }
        }
        qa(a, b) {
            return (...c) => this.ga(a, () => b.apply(void 0, c))
        }
        ca(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.G(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    const ti = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var ui = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = "undefined" !== typeof queueMicrotask;
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = Rd();
                let m, l = 3;
                try {
                    m = b.apply(this, arguments)
                } catch (k) {
                    l = 13;
                    if (!c) throw k;
                    c(a, k)
                } finally {
                    f.google_measure_js_timing && h && ti({
                        label: a.toString(),
                        value: h,
                        duration: (Rd() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return m
            }
        },
        vi = (a, b) => ui(a, b, (c, d) => {
            (new si).G(c, d)
        }, void 0, !1);

    function wi(a, b, c) {
        return ui(a, b, void 0, c, !0).apply()
    }

    function xi(a) {
        if (!a) return null;
        var b = D(a, 7);
        if (D(a, 1) || a.getId() || 0 < Vb(a, 4, wb).length) {
            var c = Vb(a, 4, wb);
            b = gc(a, 2);
            var d = gc(a, 5),
                e = yi(r(a, 6)),
                f = D(a, 3),
                g = D(a, 1);
            a = "";
            g && (a += g);
            f && (a += "#" + Zg(f));
            if (c)
                for (f = 0; f < c.length; f++) a += "." + Zg(c[f]);
            b = (c = a) ? new ah(c, b, d, e) : null
        } else b = b ? new ah(b, gc(a, 2), gc(a, 5), yi(r(a, 6))) : null;
        return b
    }
    var zi = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function yi(a) {
        return null == a ? a : zi[a]
    }
    var Ai = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Bi(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Ci(a) {
        a = Bi(a);
        return a.optimization = a.optimization || {}
    };
    var Di = tc(class extends J {});
    var Ei = a => {
        switch (r(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = B(a, S, 1), null == b ? b = null : (a = r(a, 2), b = null == a ? null : new wg({
                    jb: [b],
                    Ab: a
                }));
                return null != b ? ng(b) : pg(Error("Missing dimension when creating placement id"));
            case 3:
                return pg(Error("Missing dimension when creating placement id"));
            default:
                return pg(Error("Invalid type: " + r(a, 8)))
        }
    };
    var Fi = class extends J {};
    var Gi = class extends J {};
    var Hi = class extends J {
        g() {
            return Ub(this, 23)
        }
    };
    var Ii = class extends J {};
    var Ji = class extends J {};
    var Ki = class extends J {};
    var Li = class extends J {};
    var Mi = class extends J {};
    var Ni = class extends J {
            getName() {
                return D(this, 4)
            }
        },
        Oi = [1, 2, 3];
    var Pi = class extends J {};
    Pi.m = [2, 5, 6, 11];
    var Qi = class extends J {};
    var Si = class extends J {
            g() {
                return mc(this, Qi, 2, Ri)
            }
        },
        Ri = [1, 2];
    var Ti = class extends J {
        g() {
            return B(this, Si, 3)
        }
    };
    Ti.m = [1, 4];
    var Ui = class extends J {},
        Vi = tc(Ui);
    Ui.m = [1, 2, 5, 7];
    var Wi = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Xi(a, b) {
        const c = new vg,
            d = new ug;
        b.forEach(e => {
            if (mc(e, Li, 1, Oi)) {
                e = mc(e, Li, 1, Oi);
                if (B(e, Ug, 1) && B(B(e, Ug, 1), S, 1) && B(e, Ug, 2) && B(B(e, Ug, 2), S, 1)) {
                    const g = Yi(a, B(B(e, Ug, 1), S, 1)),
                        h = Yi(a, B(B(e, Ug, 2), S, 1));
                    if (g && h)
                        for (var f of Wi({
                                anchor: g,
                                position: ic(B(e, Ug, 1), 2)
                            }, {
                                anchor: h,
                                position: ic(B(e, Ug, 2), 2)
                            })) c.set(fa(f.anchor), f.position)
                }
                B(e, Ug, 3) && B(B(e, Ug, 3), S, 1) && (f = Yi(a, B(B(e, Ug, 3), S, 1))) && c.set(fa(f), ic(B(e, Ug, 3), 2))
            } else mc(e, Mi, 2, Oi) ? Zi(a, mc(e, Mi, 2, Oi), c) : mc(e, Ki, 3, Oi) && $i(a, mc(e, Ki, 3, Oi), d)
        });
        return new aj(c,
            d)
    }
    class aj {
        constructor(a, b) {
            this.h = a;
            this.g = b
        }
    }
    const Zi = (a, b, c) => {
            B(b, Ug, 2) ? (b = B(b, Ug, 2), (a = Yi(a, B(b, S, 1))) && c.set(fa(a), r(b, 2))) : B(b, S, 1) && (a = bj(a, B(b, S, 1))) && a.forEach(d => {
                d = fa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        $i = (a, b, c) => {
            B(b, S, 1) && (a = bj(a, B(b, S, 1))) && a.forEach(d => {
                c.add(fa(d))
            })
        },
        Yi = (a, b) => (a = bj(a, b)) && 0 < a.length ? a[0] : null,
        bj = (a, b) => (b = xi(b)) ? b.query(a) : null;
    class V extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, V) : this.stack = Error().stack || ""
        }
    };
    let cj, W;
    const dj = new Yd(n);
    var ej = a => {
        null != a && (n.google_measure_js_timing = a);
        n.google_measure_js_timing || Xd(dj)
    };
    ((a, b = !0) => {
        cj = a || new $f;
        "number" !== typeof n.google_srt && (n.google_srt = Math.random());
        Zf(cj, n.google_srt);
        W = new ge(cj, b, dj);
        W.j(!0);
        "complete" == n.document.readyState ? ej() : dj.g && Dc(n, "load", () => {
            ej()
        })
    })();
    var fj = (a, b, c) => W.ga(a, b, c),
        gj = (a, b, c) => {
            const d = Q(Yf).g();
            !b.eid && d.length && (b.eid = d.toString());
            fe(cj, a, b, !0, c)
        },
        hj = (a, b) => {
            W.ca(a, b)
        },
        ij = (a, b, c, d) => {
            let e;
            Kd(b) ? e = b.msg || ee(b.error) : e = ee(b);
            return 0 == e.indexOf("TagError") ? (c = b instanceof Jd ? b.error : b, U(xh) ? c.pbr = !0 : c.pbr || (c.pbr = !0, W.G(a, b, .1, d, "puberror")), !1) : W.G(a, b, c, d)
        };
    var jj = class {
        constructor() {
            this.g = qd();
            this.h = 0
        }
    };

    function kj(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (lj(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function mj(a) {
        a = nj(a);
        return a.has("all") || a.has("after")
    }

    function oj(a) {
        a = nj(a);
        return a.has("all") || a.has("before")
    }

    function nj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function lj(a) {
        const b = nj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var pj = class {
        constructor() {
            this.g = new Set;
            this.h = new jj
        }
    };

    function qj(a, b) {
        if (!a) return !1;
        a = fd(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function rj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function sj(a) {
        return !!a.nextSibling || !!a.parentNode && sj(a.parentNode)
    };

    function tj(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = uj(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function uj(a) {
        let b = "";
        L(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };

    function vj(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    const wj = a => {
        const b = vj(a);
        return b ? Ma(Na(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
    };
    var xj = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };

    function yj(a, b) {
        if (a.j) return !0;
        a.j = !0;
        const c = C(a.h, Wg, 1);
        a.i = 0;
        const d = zj(a.B);
        if (tj(a.g.location, "google_audio_sense")) {
            var e = new Rg;
            e = u(e, 1, 1);
            var f = new Qg;
            f = u(f, 2, nb(!0));
            e = dc(e, 2, f);
            f = new Pg;
            var g = new Ng;
            g = u(g, 1, 1);
            var h = f.u,
                m = h[q];
            mb(m);
            h = cc(h, m, Ng, 1, 2);
            g = null != g ? g : new Ng;
            h.push(g);
            (g.u[q] | 0) & 2 && (h[q] &= -9);
            g = new Og;
            g = u(g, 1, nb(!0));
            f = dc(f, 2, g);
            e = dc(e, 3, f)
        } else e = B(a.h, Rg, 27);
        if (f = e)
            if (g = B(a.h, Tg, 6) ? .g() || [], e = a.g, 1 == H(f, 1) && B(f, Qg, 2) ? .g() && 0 != g.length) {
                var l;
                f = [];
                for (l of g)
                    if (g = xi(B(l, S, 1) ||
                            null)) g = g.query(e.document), 0 < g.length && f.push(g[0]);
                f = f.filter(Jg).filter(Kg(f)).filter(Lg(e));
                f.sort(Mg);
                if (l = f[0] || null) f = e.document.createElement("div"), f.id = "google-auto-placed-read-aloud-player-reserved", nd(f, {
                    width: "100%",
                    height: "65px"
                }), l.insertBefore(f, l.firstChild), Bi(e).audioSenseSpaceReserved = !0
            }
        l = a.g;
        var k;
        try {
            var t = (k = l.localStorage.getItem("google_ama_settings")) ? Di(k) : null
        } catch (w) {
            t = null
        }
        k = null !== t && F(t, 2, !1);
        t = Bi(l);
        k && (t.eatf = !0, Ad(7, [!0, 0, !1]));
        b: {
            e = {
                qb: !1,
                rb: !1
            };g = Ra(l.document.querySelectorAll(".google-auto-placed"));
            h = Ra(l.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"));m = Ra(l.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));f = (wj(l) || Ra(l.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Ra(l.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const w = Ra(l.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                x = Ra(l.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                z = Ra(l.document.querySelectorAll("div.googlepublisherpluginad")),
                E = Ra(l.document.querySelectorAll("html > ins.adsbygoogle"));
            let P = [].concat(Ra(l.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ra(l.document.querySelectorAll("body ins.adsbygoogle")));k = [];
            for (const [ka, K] of [
                    [e.cc, g],
                    [e.qb, h],
                    [e.hc, m],
                    [e.dc, f],
                    [e.ic, w],
                    [e.bc, x],
                    [e.ec, z],
                    [e.rb, E]
                ]) !1 === ka ? k = k.concat(K) : P = P.concat(K);e = xj(P);k = xj(k);e =
            e.slice(0);
            for (v of k)
                for (k = 0; k < e.length; k++)(v.contains(e[k]) || e[k].contains(v)) && e.splice(k, 1);
            var v = e;k = Hg(l).clientHeight;
            for (l = 0; l < v.length; l++)
                if (!(v[l].getBoundingClientRect().top > k)) {
                    v = !0;
                    break b
                }
            v = !1
        }
        v = v ? t.eatfAbg = !0 : !1;
        if (v) return !0;
        v = new ug([2]);
        for (t = 0; t < c.length; t++) {
            k = a;
            e = c[t];
            l = t;
            f = b;
            if (B(e, Ag, 4) && v.contains(ic(B(e, Ag, 4), 1)) && 1 === r(e, 8) && Aj(e, d)) {
                k.i++;
                if (f = Bj(k, e, f, d)) g = Bi(k.g), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0), B(e, S, 1) && null != gc(B(e, S, 1), 5) && (g.numPostPlacementsPlaced ? g.numPostPlacementsPlaced++ :
                    g.numPostPlacementsPlaced = 1), null == g.placed && (g.placed = []), g.numAutoAdsPlaced++, g.placed.push({
                    index: l,
                    element: f.ja
                }), Ad(7, [!1, k.i, !0]);
                k = f
            } else k = null;
            if (k) return !0
        }
        Ad(7, [!1, a.i, !1]);
        return !1
    }

    function Bj(a, b, c, d) {
        if (!Aj(b, d) || 1 != r(b, 8)) return null;
        d = B(b, S, 1);
        if (!d) return null;
        d = xi(d);
        if (!d) return null;
        d = d.query(a.g.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = Ai[r(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = qj(rj(d), f);
                        break a;
                    case 3:
                        f = qj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = qj(g ? 1 == g.nodeType ? g : rj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !sj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !bh(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.v;
            f = r(b, 2);
            g = fa(d);
            g = c.h.g.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(fa(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(fa(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.A;
            g = r(b, 2);
            a: switch (g) {
                case 1:
                    f = mj(d.previousElementSibling) || oj(d);
                    break a;
                case 4:
                    f = mj(d) || oj(d.nextElementSibling);
                    break a;
                case 2:
                    f = oj(d.firstElementChild);
                    break a;
                case 3:
                    f = mj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + g);
            }
            g = kj(c, d, g);
            c = c.h;
            gj("ama_exclusion_zone", {
                typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
                cor: c.g,
                num: c.h++,
                dvc: md()
            }, .1);
            c = f || g
        }
        if (c) return null;
        f = B(b, Vg, 3);
        c = {};
        f && (c.gb = D(f, 1), c.Ra = D(f, 2), c.mb = !!Ub(f, 3));
        f = B(b, Ag, 4) && ic(B(b, Ag, 4), 2) ? ic(B(b, Ag, 4), 2) : null;
        f = Dg(f);
        g = null != gc(b, 12) ? gc(b, 12) : null;
        g = null == g ? null : new Cg(null, {
            google_ml_rank: g
        });
        b = Cj(a, b);
        b = Bg(a.s, f, g, b);
        f = a.g;
        a = a.L;
        var h = f.document,
            m = c.mb || !1;
        g = (new Uc(h)).createElement("DIV");
        const l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = m ? "both" : "none";
        m = g.style;
        m.textAlign =
            "center";
        c.zb && ri(m, c.zb);
        h = (new Uc(h)).createElement("INS");
        m = h.style;
        m.display = "block";
        m.margin = "auto";
        m.backgroundColor = "transparent";
        c.gb && (m.marginTop = c.gb);
        c.Ra && (m.marginBottom = c.Ra);
        c.ib && ri(m, c.ib);
        g.appendChild(h);
        c = {
            xa: g,
            ja: h
        };
        c.ja.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Sa) c.xa.className = h.join(" ");
        h = c.ja;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var k = c.xa;
                if (U(mh)) {
                    {
                        const z = Rh(d, e);
                        if (z.init) {
                            var t =
                                z.init;
                            for (d = t; d = z.ka(d);) t = d;
                            var v = {
                                anchor: t,
                                position: z.pa
                            }
                        } else v = {
                            anchor: d,
                            position: e
                        }
                    }
                    k["google-ama-order-assurance"] = 0;
                    Qh(k, v.anchor, v.position)
                } else Qh(k, d, e);
                b: {
                    var w = c.ja;w.dataset.adsbygoogleStatus = "reserved";w.className += " adsbygoogle-noablate";k = {
                        element: w
                    };
                    var x = b && b.bb;
                    if (w.hasAttribute("data-pub-vars")) {
                        try {
                            x = JSON.parse(w.getAttribute("data-pub-vars"))
                        } catch (z) {
                            break b
                        }
                        w.removeAttribute("data-pub-vars")
                    }
                    x && (k.params = x);
                    (f.adsbygoogle = f.adsbygoogle || []).push(k)
                }
            } catch (z) {
                (w = c.xa) && w.parentNode &&
                    (x = w.parentNode, x.removeChild(w), bh(x) && (x.style.display = x.getAttribute("data-init-display") || "none"));
                w = !1;
                break a
            }
            w = !0
        }
        return w ? c : null
    }

    function Cj(a, b) {
        return rg(tg(Ei(b).map(Eg), c => {
            Bi(a.g).exception = c
        }))
    }
    const Dj = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.L = b;
            this.h = c;
            this.s = e || null;
            this.v = (this.B = d) ? Xi(a.document, C(d, Ni, 5)) : Xi(a.document, []);
            this.A = new pj;
            this.i = 0;
            this.j = !1
        }
    };

    function zj(a) {
        const b = {};
        a && Vb(a, 6, pb).forEach(c => {
            b[c] = !0
        });
        return b
    }

    function Aj(a, b) {
        return a && Rb(a, Ag, 4) && b[ic(B(a, Ag, 4), 2)] ? !1 : !0
    };
    var Ej = tc(class extends J {});

    function Fj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? qg(() => Ej(c)) : ng(null)
    };

    function Gj() {
        if (Hj) return Hj;
        const a = Cd() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Hj = b : a.google_persistent_state_async = Hj = new Ij
    }

    function Jj(a) {
        return Kj[a] || "google_ps_" + a
    }

    function Lj(a, b, c) {
        b = Jj(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Mj(a, b, c) {
        return Lj(a, b, () => c)
    }
    class Ij {
        constructor() {
            this.S = {}
        }
    }
    var Hj = null;
    const Kj = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function Nj(a) {
        this.g = a || {
            cookie: ""
        }
    }
    Nj.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.lc, g = c.mc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.wb);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    Nj.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = ra(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Nj.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    Nj.prototype.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = ra(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--) a = b[c], this.get(a), this.set(a, "", {
            wb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Oj(a, b = window) {
        if (F(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    };

    function Pj(a) {
        var b = new Qj;
        return u(b, 5, nb(a))
    }
    var Qj = class extends J {
        constructor() {
            super()
        }
    };
    Qj.m = [10];
    const Rj = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function Sj(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Rj(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (xd({
            e: String(a.internalErrorState)
        }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function Tj(a) {
        if (a.g) return a.g;
        a.g = ld(a.h, "__tcfapiLocator");
        return a.g
    }

    function Uj(a) {
        return "function" === typeof a.h.__tcfapi || null != Tj(a)
    }

    function Vj(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (Tj(a)) {
            Wj(a);
            const e = ++a.L;
            a.A[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function Wj(a) {
        a.j || (a.j = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.A[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Dc(a.h, "message", a.j))
    }
    class Xj extends kf {
        constructor(a) {
            var b = {};
            super();
            this.h = a;
            this.g = null;
            this.A = {};
            this.L = 0;
            this.B = b.timeoutMs ? ? 500;
            this.v = b.ac ? ? !1;
            this.j = null
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.v
            };
            const c = Cc(() => a(b));
            let d = 0; - 1 !== this.B && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.B));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Rj(b), b.internalBlockOnErrors = this.v, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState =
                    3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Vj(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Vj(this, "removeEventListener", null, a.listenerId)
        }
    };
    var ck = ({
            l: a,
            T: b,
            timeoutMs: c,
            H: d,
            la: e = !1,
            ma: f = !1
        }) => {
            b = Yj({
                l: a,
                T: b,
                la: e,
                ma: f
            });
            null != b.g || "tcunav" != b.h.message ? d(b) : Zj(a, c).then(g => g.map(ak)).then(g => g.map(h => bk(a, h))).then(d)
        },
        Yj = ({
            l: a,
            T: b,
            la: c = !1,
            ma: d = !1
        }) => {
            if (!dk({
                    l: a,
                    T: b,
                    la: c,
                    ma: d
                })) return bk(a, Pj(!0));
            b = Gj();
            return (b = Mj(b, 24)) ? bk(a, ak(b)) : pg(Error("tcunav"))
        };

    function dk({
        l: a,
        T: b,
        la: c,
        ma: d
    }) {
        if (!(d = !d && Uj(new Xj(a)))) {
            if (c = !c) {
                if (b) {
                    a = Fj(a);
                    if (null != a.g)
                        if ((a = a.getValue()) && null != r(a, 1)) b: switch (a = r(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else W.G(806, a.h, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function Zj(a, b) {
        return Promise.race([ek(), fk(a, b)])
    }

    function ek() {
        return (new Promise(a => {
            var b = Gj();
            a = {
                resolve: a
            };
            const c = Mj(b, 25, []);
            c.push(a);
            b.S[Jj(25)] = c
        })).then(gk)
    }

    function fk(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, pg(Error("tcto")))
        })
    }

    function gk(a) {
        return a ? ng(a) : pg(Error("tcnull"))
    }

    function ak(a) {
        if (Sj(a))
            if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
                b: {
                    if (a.publisher && a.publisher.restrictions) {
                        var b = a.publisher.restrictions["1"];
                        if (void 0 !== b) {
                            b = b["755"];
                            break b
                        }
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
            }
        else a = !0;
        else a = !1;
        return Pj(a)
    }

    function bk(a, b) {
        return (a = Oj(b, a)) ? ng(a) : pg(Error("unav"))
    };
    var hk = class extends J {};
    hk.m = [1, 2, 3];
    var ik = class extends J {};
    ik.m = [1, 2, 3];
    var jk = class extends J {
        g() {
            return B(this, hk, 2)
        }
        h() {
            return B(this, ik, 3)
        }
    };
    const kk = class {
        constructor(a) {
            this.exception = a
        }
    };

    function lk(a, b) {
        try {
            var c = a.h,
                d = c.resolve,
                e = a.g;
            Bi(e.g);
            C(e.h, Wg, 1);
            d.call(c, new kk(b))
        } catch (f) {
            a = a.h, b = f, fg(a), a.g = 2, a.i = b, hg(a.h)
        }
    }
    var mk = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.h = c
        }
        start() {
            this.j()
        }
        j() {
            try {
                switch (this.i.document.readyState) {
                    case "complete":
                    case "interactive":
                        yj(this.g, !0);
                        lk(this);
                        break;
                    default:
                        yj(this.g, !1) ? lk(this) : this.i.setTimeout(ma(this.j, this), 100)
                }
            } catch (a) {
                lk(this, a)
            }
        }
    };
    var nk = class extends J {
        constructor() {
            super()
        }
    };
    const ok = {
            "-": 0,
            Y: 2,
            N: 1
        },
        pk = {
            [0]: "-",
            [2]: "Y",
            [1]: "N"
        };
    var qk = class extends J {
        constructor() {
            super()
        }
        getVersion() {
            return kc(this, 2)
        }
    };
    qk.m = [3];

    function rk(a) {
        return Wa(2 > (a.length + 3) % 4 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function sk(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function tk(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function uk(a) {
        var b = rk(a + "A"),
            c = sk(b.slice(0, 6));
        a = sk(b.slice(6, 12));
        var d = new qk;
        c = A(d, 1, sb(c), 0);
        a = A(c, 2, sb(a), 0);
        b = b.slice(12);
        c = sk(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let m = 0; m < c; m++) {
            if (0 === e.length) throw Error(`Found ${m} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = 0 === sk(e[0]);
            e = e.slice(1);
            var g = vk(e, b),
                h = 0 === d.length ? 0 : d[d.length - 1];
            h = tk(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = vk(e, b);
                g = tk(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (0 <
            e.length) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return Wb(a, 3, d)
    }

    function vk(a, b) {
        const c = a.indexOf("11");
        if (-1 === c) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var wk = class extends J {
        constructor() {
            super()
        }
    };
    var xk = class extends J {
        constructor() {
            super()
        }
    };

    function yk(a) {
        var b = new zk;
        return A(b, 1, sb(a), 0)
    }
    var zk = class extends J {
        getVersion() {
            return kc(this, 1)
        }
    };
    var Ak = class extends J {
        constructor() {
            super()
        }
    };

    function Bk(a) {
        var b = new Ck;
        return dc(b, 1, a)
    }
    var Ck = class extends J {
        constructor() {
            super()
        }
    };
    const Dk = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        Ek = Dk.reduce((a, b) => a + b);
    var Fk = "a".charCodeAt(),
        Gk = Hc(dg),
        Hk = Hc(eg);

    function Ik() {
        var a = new Jk;
        return nc(a, 1, 0)
    }

    function Kk(a) {
        const b = jc(hc(a, 1));
        a = kc(a, 2);
        return new Date(1E3 * b + a / 1E6)
    }
    var Jk = class extends J {};

    function Lk(a, b) {
        if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.h.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function Mk(a) {
        let b = Lk(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!Lk(a, 1),
                e = Lk(a, 16);
            if (d)
                for (d = Lk(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function Nk(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (Lk(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function Ok(a) {
        const b = Lk(a, 16);
        return !0 === !!Lk(a, 1) ? (a = Mk(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : Nk(a, b)
    }
    class Pk {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.h = a;
            this.g = 0
        }
    };
    var Rk = (a, b) => {
        try {
            var c = Wa(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new Pk(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.g += 78;
            c.cmpId = Lk(d, 12);
            c.cmpVersion = Lk(d, 12);
            d.g += 30;
            c.tcfPolicyVersion = Lk(d, 6);
            c.isServiceSpecific = !!Lk(d, 1);
            c.useNonStandardStacks = !!Lk(d, 1);
            c.specialFeatureOptins = Qk(Nk(d, 12, Hk), Hk);
            c.purpose = {
                consents: Qk(Nk(d, 24, Gk), Gk),
                legitimateInterests: Qk(Nk(d, 24, Gk), Gk)
            };
            c.purposeOneTreatment = !!Lk(d, 1);
            c.publisherCC = String.fromCharCode(Fk + Lk(d, 6)) + String.fromCharCode(Fk +
                Lk(d, 6));
            c.vendor = {
                consents: Qk(Ok(d), b),
                legitimateInterests: Qk(Ok(d), b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const Qk = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var Sk = class extends J {
        g() {
            return null != D(this, 2)
        }
    };
    var Tk = class extends J {
        g() {
            return null != D(this, 2)
        }
    };
    var Uk = class extends J {};
    var Vk = class extends J {
            g() {
                return C(this, Sk, 7)
            }
        },
        Wk = tc(Vk);
    Vk.m = [7];

    function Xk() {
        const a = Yk(N.document);
        return a ? B(a, Uk, 4) : null
    }

    function Yk(a) {
        a = Zk(a);
        try {
            return a ? Wk(a) : null
        } catch (b) {
            return null
        }
    }

    function Zk(a) {
        a = (new Nj(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    }

    function $k(a) {
        return (a = Yk(a)) ? B(a, Tk, 5) || null : null
    };
    [...(new Map([
        [8, "usca"],
        [9, "usva"],
        [10, "usco"],
        [12, "usct"]
    ]))].sort((a, b) => a[0] - b[0]).map(a => a[1]);
    const al = Bk(yk(1));

    function bl(a) {
        try {
            if (0 === a.length) throw Error("Cannot decode empty USCA section string");
            const xb = a.split(".");
            if (2 < xb.length) throw Error(`Expected at most 1 sub-section but got ${xb.length-1} when decoding ${a}`);
            let Va = rk(xb[0]);
            const Ee = sk(Va.slice(0, 6));
            Va = Va.slice(6);
            if (1 !== Ee) throw Error(`Unable to decode unsupported USCA Section specification version ${Ee} - only version 1 is supported.`);
            if (Va.length < Ek)
                if (Va.length + 8 >= Ek) Va += "00000000";
                else throw Error(`Expected core segment bitstring minus version plus padding to be at least of length ${Ek} but was ${Va.length+8}`);
            a = 0;
            const O = [];
            for (let Ja = 0; Ja < Dk.length; Ja++) {
                const gb = Dk[Ja];
                O.push(sk(Va.slice(a, a + gb)));
                a += gb
            }
            var b = yk(Ee),
                c = O.shift();
            var d = I(b, 2, c);
            var e = O.shift();
            var f = I(d, 3, e);
            var g = O.shift();
            var h = I(f, 4, g);
            var m = O.shift();
            var l = I(h, 5, m);
            var k = O.shift();
            var t = I(l, 6, k);
            var v = new xk,
                w = O.shift();
            var x = I(v, 1, w);
            var z = O.shift();
            var E = I(x, 2, z);
            var P = O.shift();
            var ka = I(E, 3, P);
            var K = O.shift();
            var qb = I(ka, 4, K);
            var Pb = O.shift();
            var Qb = I(qb, 5, Pb);
            var Id = O.shift();
            var Ha = I(Qb, 6, Id);
            var Bc = O.shift();
            var an = I(Ha, 7, Bc);
            var bn = O.shift();
            var cn = I(an, 8, bn);
            var dn = O.shift();
            var en = I(cn, 9, dn);
            var fn = dc(t, 7, en);
            var gn = new wk,
                hn = O.shift();
            var jn = I(gn, 1, hn);
            var kn = O.shift();
            var ln = I(jn, 2, kn);
            var mn = dc(fn, 8, ln);
            var nn = O.shift();
            var on = I(mn, 9, nn);
            var pn = O.shift();
            var qn = I(on, 10, pn);
            var rn = O.shift();
            var sn = I(qn, 11, rn);
            var tn = O.shift();
            var Oh = I(sn, 12, tn);
            if (1 === xb.length) var Ph = Bk(Oh);
            else {
                var un = Bk(Oh);
                const Ja = rk(xb[1]);
                if (3 > Ja.length) throw Error(`Invalid GPC Segment [${Ja}]. Expected length ${3}, but was ${Ja.length}.`);
                const gb = sk(Ja.slice(0, 2));
                if (0 > gb || 1 < gb) throw Error(`Attempting to decode unknown GPC segment subsection type ${gb}.`);
                var vn = gb + 1;
                const wn = sk(Ja.charAt(2));
                var xn = new Ak;
                var yn = I(xn, 2, vn);
                var zn = A(yn, 1, nb(!!wn), !1);
                Ph = dc(un, 2, zn)
            }
            return Ph
        } catch (xb) {
            return null
        }
    }

    function cl(a) {
        var b = new nk;
        b = A(b, 1, sb(1), 0);
        var c = H(B(a.g, zk, 1), 2);
        const d = H(B(a.g, zk, 1), 3);
        0 === c && 0 === d ? I(b, 2, 0) : 2 === c || 2 === d ? I(b, 2, 1) : I(b, 2, 2);
        c = H(B(a.g, zk, 1), 5);
        a = H(B(a.g, zk, 1), 6);
        0 === c && 0 === a ? I(b, 3, 0) : 1 === c || 1 === a ? I(b, 3, 2) : I(b, 3, 1);
        I(b, 4, 1);
        a = [kc(b, 1), pk[H(b, 2)], pk[H(b, 3)], pk[H(b, 4)]].join("");
        return 4 === a.length && (-1 === a.indexOf("-") || "---" === a.substring(1)) && "1" <= a[0] && "9" >= a[0] && ok.hasOwnProperty(a[1]) && ok.hasOwnProperty(a[2]) && ok.hasOwnProperty(a[3]) ? a : null
    }
    var dl = class {
        constructor(a = al, b = new Jk) {
            this.g = a;
            this.timestamp = b
        }
        getTimestamp() {
            return this.timestamp
        }
    };
    Hc(dg).map(a => Number(a));
    Hc(eg).map(a => Number(a));

    function el(a) {
        a.__tcfapiPostMessageReady || fl(new gl(a))
    }

    function fl(a) {
        a.h = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.g.addEventListener("message", a.h);
        a.g.__tcfapiPostMessageReady = !0
    }
    var gl = class {
        constructor(a) {
            this.g = a;
            this.h = null
        }
    };
    var hl = class extends J {
        g() {
            return Rb(this, Jk, 2)
        }
    };
    var il = class extends J {
            g() {
                return null != D(this, 1)
            }
        },
        jl = tc(il);
    il.m = [2];
    var kl = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = ed("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };

    function ll() {
        var a = U(th),
            b = U(uh),
            c = U(uh);
        c && N !== N.top || N.__uspapi || N.frames.__uspapiLocator || (b = new ml(b, c), nl(b), a && ol(b))
    }

    function nl(a) {
        !a.j || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", kl(a.g, "__uspapiLocator"), oa("__uspapi", (...b) => pl(a, ...b), a.g))
    }

    function ol(a) {
        !a.h || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", kl(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], oa("__tcfapi", (...b) => ql(a, ...b), a.g), el(a.g))
    }

    function pl(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.j
        }, !0)
    }

    function rl(a) {
        if (!a ? .g() || 0 === G(a, 1).length) return null;
        var b = C(a, hl, 2).find(d => 8 === kc(d, 1));
        b = b ? .g() ? B(b, Jk, 2) : Ik();
        a = G(a, 1);
        try {
            if (!a.includes("~")) throw Error(`GPP String [${a}] contains no sections`);
            const d = uk(a.split("~")[0]);
            if (!a.includes("~")) throw Error(`GPP String [${a}] contains no sections`);
            var c = a.split("~").slice(1);
            const e = Vb(d, 3, tb).indexOf(8);
            return -1 === e ? null : {
                uspString: cl(new dl(bl(c[e]) ? ? al, b)),
                wa: Kk(b)
            }
        } catch (d) {
            return null
        }
    }

    function sl(a) {
        a = a.find(b => 13 === H(b, 1));
        if (a ? .g()) try {
            return jl(G(a, 2))
        } catch (b) {}
        return null
    }

    function ql(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && (2.1 < c || 1 >= c)) d(null, !1);
            else switch (c = a.g.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(tl(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.1",
                        cmpVersion: 2,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(tl(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function tl(a, b, c) {
        if (!a.h) return null;
        b = Rk(a.h, b);
        b.addtlConsent = null != a.i ? a.i : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class ml {
        constructor(a, b) {
            this.g = N;
            if (a) {
                if (b) {
                    a = Zk(this.g.document);
                    try {
                        var c = a ? Wk(a) : null
                    } catch (d) {
                        c = null
                    }(a = c) ? (c = B(a, Tk, 5) || null, a = a.g() ? ? [], a = sl(a), c = {
                        ua: c,
                        za: a
                    }) : c = {
                        ua: null,
                        za: null
                    }
                } else c = $k(this.g.document), a = Yk(this.g.document) ? .g() ? ? [], a = sl(a), c = {
                    ua: c,
                    za: a
                };
                a = c;
                c = rl(a.za);
                a = a.ua;
                a ? .g() && 0 !== G(a, 2).length ? (b = Rb(a, Jk, 1) ? B(a, Jk, 1) : Ik(), a = {
                    uspString: G(a, 2),
                    wa: Kk(b)
                }) : a = null;
                c = a && c ? c.wa > a.wa ? c.uspString : a.uspString : a ? a.uspString : c ? c.uspString : null
            } else c = (c = $k(this.g.document)) ? D(c, 2) : null;
            this.j =
                c;
            this.h = (c = Xk()) && null != D(c, 1) ? D(c, 1) : null;
            this.i = (c = Xk()) && null != D(c, 2) ? D(c, 2) : null
        }
    };
    const ul = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var vl = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            gj("ama", b, .01)
        },
        wl = a => {
            const b = {};
            L(ul, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    const xl = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        yl = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var zl = a => {
            a = Vb(a, 2, pb);
            if (!a) return !1;
            for (let b = 0; b < a.length; b++)
                if (1 == a[b]) return !0;
            return !1
        },
        Bl = (a, b) => {
            a = yl(xl(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = hd(a),
                d = Al(a);
            return b.find(e => {
                if (Rb(e, Ji, 7)) {
                    var f = B(e, Ji, 7);
                    f = ub(r(f, 1))
                } else f = ub(r(e, 1));
                e = Rb(e, Ji, 7) ? ic(B(e, Ji, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        };
    const Al = a => {
        const b = {};
        for (;;) {
            b[hd(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var Cl = a => {
        a = B(a, Ii, 3);
        return !a || hc(a, 1) <= Date.now() ? !1 : !0
    };

    function Dl(a) {
        if (U(kh)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Vi(b) : null
        } catch (d) {
            c = null
        }
        return c
    };
    var El = class extends J {
        g() {
            return B(this, jk, 2)
        }
        h() {
            return F(this, 3)
        }
    };
    var Fl = class extends J {
        g() {
            return Vb(this, 1, wb)
        }
        h() {
            return B(this, El, 2)
        }
    };
    Fl.m = [1];
    var Gl = class extends J {
        getId() {
            return kc(this, 1)
        }
    };
    Gl.m = [2];
    var Hl = class extends J {};
    Hl.m = [2];
    var Il = class extends J {};
    Il.m = [2];
    var Jl = class extends J {
        g() {
            return jc(hc(this, 2))
        }
        h() {
            return jc(hc(this, 4))
        }
        i() {
            return F(this, 3)
        }
    };
    var Kl = class extends J {};
    Kl.m = [1, 4, 2, 3];
    var Ml = class extends J {
        h() {
            return mc(this, El, 13, Ll)
        }
        j() {
            return void 0 !== Sb(this, El, Zb(this, Ll, 13))
        }
        g() {
            return mc(this, Fl, 14, Ll)
        }
        i() {
            return void 0 !== Sb(this, Fl, Zb(this, Ll, 14))
        }
    };
    Ml.m = [19];
    var Ll = [13, 14];
    let Nl = void 0;

    function Ol(a) {
        qc(Nl, ie);
        Nl = a
    };

    function X(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function Pl(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Qa: !0,
            Fb: b,
            ta: a.ablation_viewport_offset
        } : null
    }

    function Ql(a, b) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function Rl(a) {
        X(N).allow_second_reactive_tag = a
    }

    function Sl() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function Tl(a) {
        return X(a) ? .head_tag_slot_vars ? .google_ad_host ? ? Ul(a)
    }

    function Ul(a) {
        return a.document ? .querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null
    };
    const Vl = [2, 7, 1];
    var Yl = (a, b, c = "", d = null) => 1 === b && Wl(c, d) ? !0 : Xl(a, c, e => Oa(C(e, uc, 2), f => r(f, 1) === b)),
        Wl = (a, b) => b ? b.j() ? F(b.h(), 1) : b.i() && "" !== a && 1 === b.g().g().length && b.g().g()[0] === a ? F(b.g().h(), 1) : !1 : !1,
        Zl = (a, b) => {
            b = kc(b, 18); - 1 !== b && (a.tmod = b)
        },
        am = a => {
            const b = cd(N) || N;
            return $l(b, a) ? !0 : Xl(N, "", c => Oa(Vb(c, 3, pb), d => d === a))
        };

    function $l(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Qa(a.split(","), b.toString())
    }

    function Xl(a, b, c) {
        a = cd(a) || a;
        const d = bm(a);
        b && (b = Hd(String(b)));
        return Gc(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function bm(a) {
        a = cm(a);
        const b = {};
        L(a, (c, d) => {
            try {
                const e = new vc(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var cm = a => U(eh) ? (qc(Nl, sc), a = Yj({
        l: a,
        T: Nl
    }), null != a.g ? dm(a.getValue()) : {}) : dm(a.localStorage);

    function dm(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Fc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function em(a) {
        gj("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const fm = a => {
            gj("overlay_settings_from_ppabg", {
                p_s: a
            }, .01)
        },
        gm = (a, b) => {
            if (Tl(n)) return Vl;
            if (b ? .j()) {
                var c = G(b.h(), 9);
                b = b ? .h() ? .g() ? .h();
                if (!a || c != a || !b) return Vl;
                fm(!1);
                return Vb(b, 3, pb)
            }
            if (b ? .i()) {
                c = b ? .g() ? .g();
                if (!c || 1 !== c.length || !a || c[0] !== a || G(b, 17) != n.location.host) return Vl;
                a = b ? .g() ? .h() ? .g() ? .h();
                if (!a) return Vl;
                fm(!0);
                return Vb(a, 3, pb)
            }
            return Vl
        };
    var hm = (a, b) => {
        const c = [];
        let d = Vl;
        if (U(rh) || U(qh) || U(sh)) d = gm(a, b);
        U(rh) && !d.includes(1) && c.push(1);
        U(qh) && !d.includes(2) && c.push(2);
        U(sh) && !d.includes(7) && c.push(7);
        return c
    };

    function im(a, b, c, d) {
        jm(new km(a, b, c, d))
    }

    function jm(a) {
        tg(sg(Yj({
            l: a.l,
            T: F(a.h, 6)
        }), b => {
            lm(a, b, !0)
        }), () => {
            mm(a)
        })
    }

    function lm(a, b, c) {
        tg(sg(nm(b), d => {
            om("ok");
            a.g(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.l;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                vl(d, {
                    lserr: 1
                })
            }
            c ? mm(a) : a.g(null, null)
        })
    }

    function mm(a) {
        tg(sg(pm(a), b => {
            a.g(b, {
                fromPABGSettings: !0
            })
        }), () => {
            qm(a)
        })
    }

    function nm(a) {
        return (a = (a = Dl(a)) ? Cl(a) ? a : null : null) ? ng(a) : pg(Error("invlocst"))
    }

    function pm(a) {
        if (Tl(a.l) && !F(a.h, 22)) return pg(Error("invtag"));
        a: {
            var b = a.l;
            var c = a.i;a = a.h;
            if (a ? .j())(b = a ? .h() ? .g() ? .g()) && (0 < C(b, Wg, 1).length || U(lh) && 0 < C(b, Sg, 3).length) ? em(!1) : b = null;
            else {
                if (a ? .i()) {
                    const d = a ? .g() ? .g(),
                        e = a ? .g() ? .h() ? .g() ? .g();
                    if (d && 1 === d.length && d[0] === c && e && (0 < C(e, Wg, 1).length || U(lh) && 0 < C(e, Sg, 3).length) && G(a, 17) === b.location.host) {
                        em(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new Ui, a = C(b, Wg, 1), c = fc(c, 1, a), a = C(b, Pi, 2), c = fc(c, 7, a), U(lh) && 0 < C(b, Sg, 3).length && (a = new Tg, b = C(b, Sg, 3), b = fc(a,
            1, b), dc(c, 6, b)), b = ng(c)) : b = pg(Error("invtag"));
        return b
    }

    function qm(a) {
        ck({
            l: a.l,
            T: F(a.h, 6),
            timeoutMs: 50,
            H: b => {
                rm(a, b)
            }
        })
    }

    function rm(a, b) {
        tg(sg(b, c => {
            lm(a, c, !1)
        }), c => {
            om(c.message);
            a.g(null, null)
        })
    }

    function om(a) {
        gj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class km {
        constructor(a, b, c, d) {
            this.l = a;
            this.h = b;
            this.i = c;
            this.g = d
        }
    };
    var um = (a, b, c, d) => {
        try {
            const e = Bl(a, C(c, Pi, 7));
            if (e && zl(e)) {
                D(e, 4) && (d = Bg(d, new Cg(null, {
                    google_package: D(e, 4)
                })));
                const f = new Dj(a, b, c, e, d);
                wi(1E3, () => {
                    var g = new ig;
                    (new mk(a, f, g)).start();
                    return g.h
                }, a).then(na(sm, a), na(tm, a))
            }
        } catch (e) {
            vl(a, {
                atf: -1
            })
        }
    };
    const sm = a => {
            vl(a, {
                atf: 1
            })
        },
        tm = (a, b) => {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            vl(a, {
                atf: 0
            })
        };

    function vm(a) {
        a.easpi = U(Hh);
        a.asla = .4;
        a.asaa = -1;
        a.asro = U(Eh);
        U(Ch) && (a.asiscm = !0);
        U(Fh) && (a.srtr = !0);
        U(zh) || (a.sedf = !1);
        U(Ah) && (a.sefa = !0);
        U(Dh) && (a.srldp = !0);
        U(Gh) && (a.sugawps = !0);
        U(Bh) && (a.sepiia = !0);
        const b = Q(Mh).h(yh.g, yh.defaultValue);
        b.length && (a.seiel = b.join("~"))
    };
    Ta || Ea();
    class wm {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function xm() {
        const {
            promise: a,
            resolve: b
        } = new wm;
        return {
            promise: a,
            resolve: b
        }
    };

    function ym(a = () => {}) {
        n.google_llp || (n.google_llp = {});
        const b = n.google_llp;
        let c = b[7];
        if (c) return c;
        c = xm();
        b[7] = c;
        a();
        return c
    }

    function zm(a) {
        return ym(() => {
            dd(n.document, a)
        }).promise
    };

    function Am(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new Bm;
        return a.google_reactive_ads_global_state
    }
    class Bm {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Cm;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var Cm = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var Dm = a => {
        if (n.google_apltlad || n !== n.top || !a.google_ad_client) return null;
        n.google_apltlad = !0;
        const b = {
                enable_page_level_ads: {
                    pltais: !0
                },
                google_ad_client: a.google_ad_client
            },
            c = b.enable_page_level_ads;
        L(a, (d, e) => {
            pi[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        vm(c);
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };
    var Gm = (a, b) => {
        X(N).ama_ran_on_page || wi(1001, () => Em(new Fm(a, b)), n)
    };

    function Em(a) {
        im(a.g, a.i, a.h.google_ad_client || "", (b, c) => {
            var d = a.g,
                e = a.h;
            X(N).ama_ran_on_page || b && Hm(d, e, b, c)
        })
    }
    class Fm {
        constructor(a, b) {
            this.g = n;
            this.h = a;
            this.i = b
        }
    }

    function Hm(a, b, c, d) {
        d && (Bi(a).configSourceInAbg = d);
        Rb(c, Ti, 24) && (d = Ci(a), d.availableAbg = !0, d.ablationFromStorage = !!B(c, Ti, 24) ? .g() ? .g());
        if (ea(b.enable_page_level_ads) && 7 === b.enable_page_level_ads.google_pgb_reactive) {
            d = Bl(a, C(c, Pi, 7));
            if (!d || !Ub(d, 8)) {
                gj("amaait", {
                    value: "true"
                });
                return
            }
            gj("amaait", {
                value: "false"
            })
        }
        X(N).ama_ran_on_page = !0;
        B(c, Hi, 15) ? .g() && (X(a).enable_overlap_observer = !0);
        var e = B(c, Gi, 13);
        e && 1 === r(e, 1) ? (d = 0, (e = B(e, Fi, 6)) && gc(e, 3) && (d = gc(e, 3) || 0), Ql(a, d)) : B(c, Ti, 24) ? .g() ? .g() && (Ci(a).ablatingThisPageview = !0, Ql(a, 1));
        Ad(3, [c.toJSON()]);
        const f = b.google_ad_client || "";
        b = wl(ea(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        const g = Bg(Fg, new Cg(null, b));
        fj(782, () => {
            um(a, f, c, g)
        })
    };

    function Im(a) {
        return b => !!(b.ha & a)
    }
    class Y extends hi {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.ha = c;
            this.tb = d
        }
        ra() {
            return this.ha
        }
        h(a, b, c) {
            if (!b.google_ad_resize || U(ph)) c.style.height = this.height() + "px", b.rpe = !0
        }
    };
    const Jm = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        Km = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        Lm = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function Mm(a) {
        var b = 0;
        a.R && b++;
        a.J && b++;
        a.K && b++;
        if (3 > b) return {
            O: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.R.split(",");
        const c = a.K.split(",");
        a = a.J.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            O: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            O: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f) return {
                O: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f) return {
                O: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            K: d,
            J: e,
            Xa: b
        }
    }

    function Nm(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    const Om = Sa("script");

    function Pm(a, b, c) {
        null != a.ha && (c.google_responsive_formats = a.ha);
        null != a.aa && (c.google_safe_for_responsive_override = a.aa);
        null != a.h && (!0 === a.h ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.h));
        null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
        var d = a.s || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.j || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().g(b);
        const e = a.size().height();
        if (!c.google_ad_resize || U(ph)) {
            c.google_ad_width =
                d;
            c.google_ad_height = e;
            var f = a.size();
            b = f.g(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.v;
            null != a.g && (c.armr = a.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.h && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.L && (c.gfwroml = a.L);
        null != a.X && (c.gfwromr = a.X);
        null != a.j && (c.gfwroh = a.j);
        null != a.s && (c.gfwrow = a.s);
        null != a.Z && (c.gfwroz = a.Z);
        null != a.A && (c.gml = a.A);
        null != a.B && (c.gmr = a.B);
        null != a.ba && (c.gzi = a.ba);
        b = cd(window) || window;
        tj(b.location,
            "google_responsive_dummy_ad") && (Qa([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.g) && 2 !== a.g && (a = JSON.stringify({
            googMsgType: "adpnt",
            key_value: [{
                key: "qid",
                value: "DUMMY_AD"
            }]
        }), c.dash = `<${Om}>window.top.postMessage('${a}', '*'); 
          </${Om}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`)
    }
    class Qm {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, m = null, l = null, k = null, t = null) {
            this.v = a;
            this.ia = b;
            this.ha = c;
            this.g = d;
            this.aa = e;
            this.h = f;
            this.i = g;
            this.L = h;
            this.X = m;
            this.j = l;
            this.s = k;
            this.Z = t;
            this.ba = this.B = this.A = null
        }
        size() {
            return this.ia
        }
    };
    const Rm = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var Sm = class extends hi {
            g(a) {
                return Math.min(1200, Math.max(this.I, Math.round(a)))
            }
        },
        Vm = (a, b) => {
            Tm(a, b);
            if ("pedestal" == b.google_content_recommendation_ui_type) return new Qm(9, new Sm(a, Math.floor(a * b.google_phwr)));
            var c = Vc();
            468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Jm.mobile_banner_image_sidebyside + Km.mobile_banner_image_sidebyside) + 96), a = {
                ea: a,
                da: c,
                J: 1,
                K: 12,
                R: "mobile_banner_image_sidebyside"
            }) : (a = Nm(a), a = {
                ea: a.width,
                da: a.height,
                J: 1,
                K: 13,
                R: "image_sidebyside"
            }) : (a = Nm(a), a = {
                ea: a.width,
                da: a.height,
                J: 4,
                K: 2,
                R: "image_stacked"
            });
            Um(b, a);
            return new Qm(9, new Sm(a.ea, a.da))
        },
        Wm = (a, b) => {
            Tm(a, b);
            var c = Mm({
                K: b.google_content_recommendation_rows_num,
                J: b.google_content_recommendation_columns_num,
                R: b.google_content_recommendation_ui_type
            });
            if (c.O) a = {
                ea: 0,
                da: 0,
                J: 0,
                K: 0,
                R: "image_stacked",
                O: c.O
            };
            else {
                var d = 2 === c.Xa.length && 468 <= a ? 1 : 0;
                var e = c.Xa[d];
                e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
                var f = Lm[e];
                let g = c.J[d];
                for (; a / g < f && 1 < g;) g--;
                f = g;
                d = c.K[d];
                c = Math.floor(((a - 8 * f - 8) / f * Jm[e] + Km[e]) *
                    d + 8 * d + 8);
                a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    Db: "Calculated slot width is too large: " + a
                } : 1500 < c ? {
                    width: 0,
                    height: 0,
                    Db: "Calculated slot height is too large: " + c
                } : {
                    width: a,
                    height: c
                };
                a = {
                    ea: a.width,
                    da: a.height,
                    J: f,
                    K: d,
                    R: e
                }
            }
            if (a.O) throw new V(a.O);
            Um(b, a);
            return new Qm(9, new Sm(a.ea, a.da))
        };

    function Tm(a, b) {
        if (0 >= a) throw new V("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Um(a, b) {
        a.google_content_recommendation_ui_type = b.R;
        a.google_content_recommendation_columns_num = b.J;
        a.google_content_recommendation_rows_num = b.K
    };
    class Xm extends hi {
        g() {
            return this.I
        }
        h(a, b, c) {
            gi(a, c);
            if (!b.google_ad_resize || U(ph)) c.style.height = this.height() + "px", b.rpe = !0
        }
    };
    const Ym = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var Zm = class extends hi {
            g() {
                return Math.min(1200, this.I)
            }
        },
        $m = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f) {
                var g = a;
                if ("false" == e.google_full_width_responsive) a = g;
                else if (a = bi(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
                else if (a = Ig(b))
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        b: {
                            g = c;
                            for (let h = 0; 100 > h && g.parentElement; ++h) {
                                const m = g.parentElement.childNodes;
                                for (let l = 0; l < m.length; ++l) {
                                    const k = m[l];
                                    if (k != g && ei(b, k)) break b
                                }
                                g = g.parentElement;
                                g.style.width = "100%";
                                g.style.height = "auto"
                            }
                        }
                        gi(b, c)
                    }
                else a = g;
                else a = g
            }
            if (250 > a) throw new V("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f) throw new V("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new Qm(11, new hi(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
                else b = null;
                if (!b) throw new V("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++) c += b[g] * d, d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f)) throw new V("Invalid height: height=" + f);
                if (50 > f) throw new V("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f) throw new V("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new Qm(11, new hi(a, f))
            }
            d = Ym[f];
            if (!d) throw new V("Invalid data-ad-layout value: " + f);
            c = ki(c, b);
            b = Ig(b);
            b = "in-article" !== f ||
                c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new Qm(11, "in-article" == f ? new Zm(a, b) : new hi(a, b))
        };
    var An = a => b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        },
        Cn = (a, b) => {
            var c = Bn.slice(0);
            const d = c.length;
            let e = null;
            for (let f = 0; f < d; ++f) {
                const g = c[f];
                if (a(g)) {
                    if (!b || b(g)) return g;
                    null === e && (e = g)
                }
            }
            return e
        };
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        Bn = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];
    var En = (a, b, c, d, e) => {
            "false" == e.google_full_width_responsive ? c = {
                C: a,
                D: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || Dn(b) || e.google_ad_resize ? (b = ci(a, c, d, e), c = !0 !== b ? {
                C: a,
                D: b
            } : {
                C: Ig(c) || a,
                D: !0
            }) : c = {
                C: a,
                D: 2
            };
            const {
                C: f,
                D: g
            } = c;
            return !0 !== g ? {
                C: a,
                D: g
            } : d.parentElement ? {
                C: f,
                D: g
            } : {
                C: a,
                D: g
            }
        },
        Hn = (a, b, c, d, e) => {
            const {
                C: f,
                D: g
            } = fj(247, () => En(a, b, c, d, e));
            var h = !0 === g;
            const m = M(d.style.width),
                l = M(d.style.height),
                {
                    W: k,
                    U: t,
                    ra: v,
                    Wa: w
                } = Fn(f, b, c, d, e, h);
            h = Gn(b, v);
            var x;
            const z = (x = ii(d, c, "marginLeft", M)) ? x + "px" :
                "",
                E = (x = ii(d, c, "marginRight", M)) ? x + "px" : "";
            x = ii(d, c, "zIndex") || "";
            return new Qm(h, k, v, null, w, g, t, z, E, l, m, x)
        },
        Dn = a => "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a),
        Fn = (a, b, c, d, e, f) => {
            b = "auto" == b ? .25 >= a / Math.min(1200, Ig(c)) ? 4 : 3 : ai(b);
            let g;
            var h = !1;
            let m = !1;
            var l = 488 > Ig(c);
            if (l) {
                g = Wh(d, c);
                var k = ki(d, c);
                h = !k && g;
                m = k && g
            }
            k = [ji(a), Im(b)];
            k.push(mi(l, c, d, m));
            null != e.google_max_responsive_height && k.push(ni(e.google_max_responsive_height));
            l = [x => !x.tb];
            if (h || m) h = oi(c, d), l.push(ni(h));
            let t =
                Cn(An(k), An(l));
            if (!t) throw new V("No slot size for availableWidth=" + a);
            const {
                W: v,
                U: w
            } = fj(248, () => {
                var x;
                a: if (f) {
                    if (e.gfwrnh && (x = M(e.gfwrnh))) {
                        x = {
                            W: new Xm(a, x),
                            U: !0
                        };
                        break a
                    }
                    x = a / 1.2;
                    var z = Math;
                    var E = z.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var P = Infinity;
                    else {
                        P = d;
                        let K = Infinity;
                        do {
                            var ka = ii(P, c, "height", M);
                            ka && (K = Math.min(K, ka));
                            (ka = ii(P, c, "maxHeight", M)) && (K = Math.min(K, ka))
                        } while ((P = P.parentElement) && "HTML" != P.tagName);
                        P = K
                    }
                    z = E.call(z, x, P);
                    if (z < .5 * x || 100 > z) z = x;
                    x = {
                        W: new Xm(a, Math.floor(z)),
                        U: z < x ? 102 : !0
                    }
                } else x = {
                    W: t,
                    U: 100
                };
                return x
            });
            return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
                W: In(a, c, d, v, e),
                U: !1,
                ra: b,
                Wa: g
            } : {
                W: v,
                U: w,
                ra: b,
                Wa: g
            }
        };
    const Gn = (a, b) => {
            if ("auto" == a) return 1;
            switch (b) {
                case 2:
                    return 2;
                case 1:
                    return 3;
                case 4:
                    return 4;
                case 3:
                    return 5;
                case 6:
                    return 6;
                case 5:
                    return 7;
                case 7:
                    return 8
            }
            throw Error("bad mask");
        },
        In = (a, b, c, d, e) => {
            const f = e.google_ad_height || ii(c, b, "height", M);
            b = $m(a, b, c, f, e).size();
            return b.I * b.height() > a * d.height() ? new Y(b.I, b.height(), 1) : d
        };
    var Jn = (a, b, c, d, e) => {
        var f;
        (f = Ig(b)) ? 488 > Ig(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, gi(b, c), f = {
            C: f,
            D: !0
        }) : f = {
            C: a,
            D: 5
        } : f = {
            C: a,
            D: 4
        }: f = {
            C: a,
            D: 10
        };
        const {
            C: g,
            D: h
        } = f;
        if (!0 !== h || a == g) return new Qm(12, new hi(a, d), null, null, !0, h, 100);
        const {
            W: m,
            U: l,
            ra: k
        } = Fn(g, "auto", b, c, e, !0);
        return new Qm(1, m, k, 2, !0, h, l)
    };
    var Ln = (a, b) => {
            const c = b.google_ad_format;
            if ("autorelaxed" == c) {
                a: {
                    if ("pedestal" != b.google_content_recommendation_ui_type)
                        for (const d of Rm)
                            if (null != b[d]) {
                                a = !0;
                                break a
                            }
                    a = !1
                }
                return a ? 9 : 5
            }
            if (Dn(c)) return 1;
            if ("link" === c) return 4;
            if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (Kn(b), 1);
            if (27 === b.google_reactive_ad_format) return Kn(b), 1
        },
        Nn = (a, b, c, d, e = !1) => {
            e = b.offsetWidth || (c.google_ad_resize || e) && ii(b, d, "width",
                M) || c.google_ad_width || 0;
            4 === a && (c.google_ad_format = "auto", a = 1);
            var f = (f = Mn(a, e, b, c, d)) ? f : Hn(e, c.google_ad_format, d, b, c);
            f.size().h(d, c, b);
            Pm(f, e, c);
            1 != a && (a = f.size().height(), b.style.height = a + "px")
        };
    const Mn = (a, b, c, d, e) => {
            const f = d.google_ad_height || ii(c, e, "height", M);
            switch (a) {
                case 5:
                    const {
                        C: g,
                        D: h
                    } = fj(247, () => En(b, d.google_ad_format, e, c, d));
                    !0 === h && b != g && gi(e, c);
                    !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return Vm(g, d);
                case 9:
                    return Wm(b, d);
                case 8:
                    return $m(b, e, c, f, d);
                case 10:
                    return Jn(b, e, c, f, d)
            }
        },
        Kn = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function On(a, b) {
        a.google_resizing_allowed = !0;
        a.ovlp = !0;
        a.google_ad_format = "auto";
        a.iaaso = !0;
        a.armr = b
    };
    var Pn = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Qn(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function Rn(a, b) {
        var c = cd(b);
        if (c) {
            c = Ig(c);
            const d = fd(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var Sn = {
            google_analytics_domain_name: !0,
            google_analytics_uacct: !0,
            google_pause_ad_requests: !0,
            google_user_agent_client_hint: !0
        },
        Tn = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        Un = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        Vn = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };

    function Wn(a) {
        if (a.google_ad_client) var b = String(a.google_ad_client);
        else {
            if (null == (b = X(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                b: {
                    b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) &&
                    /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Gd() ? Tn : Un;
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }
                if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b);) c[d[1]] = Vn(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else b = ""
            }
            b = b ? ? ""
        }
        return b
    };
    async function Xn(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function Yn(a) {
        const b = a.g.pc;
        return null !== b && 0 !== b ? b : a.g.pc = rd(a.l)
    }

    function Zn(a) {
        const b = a.g.wpc;
        return null !== b && "" !== b ? b : a.g.wpc = Wn(a.l)
    }

    function $n(a, b) {
        var c = new Me;
        var d = Yn(a);
        c = nc(c, 1, d);
        d = Zn(a);
        c = A(c, 2, vb(d), "");
        c = nc(c, 3, a.g.sd);
        return nc(c, 7, Math.round(b || a.l.performance.now()))
    }
    async function ao(a) {
        await Xn(a.l, () => !(!Yn(a) || !Zn(a)))
    }

    function bo(a) {
        var b = Q(co);
        b.j && fj(1178, () => {
            const c = b.s;
            a(c);
            b.g.psi = c.toJSON()
        })
    }
    async function eo(a) {
        var b = Q(co);
        if (b.j && !b.g.le.includes(1)) {
            b.g.le.push(1);
            var c = b.l.performance.now();
            await ao(b);
            a = Ce(De(Ge(new He, a), Ae(ze(new Be, Hg(b.l).scrollWidth), Hg(b.l).scrollHeight)), Ae(ze(new Be, Ig(b.l)), Hg(b.l).clientHeight));
            var d = new Je;
            U(ih) ? (A(a, 4, vb(b.i), ""), A(d, 1, vb(b.i), "")) : (A(a, 4, vb(b.l ? .document ? .URL), ""), A(d, 1, vb(b.l ? .document ? .URL), ""));
            var e = Vh(b.l);
            0 !== e && Fe(a, xe(e));
            gf(b.h, Ke($n(b, c), a));
            tf(b.h, b.l, () => {
                try {
                    if (null != b.g ? .psi) {
                        var f = pc(Ie, Kb(b.g.psi));
                        dc(d, 2, f)
                    }
                } catch {}
                f =
                    b.h;
                var g = $n(b);
                g = ec(g, 8, Le, d);
                gf(f, g)
            })
        }
    }
    async function fo(a, b, c) {
        if (a.j && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.l.performance.now();
            await ao(a);
            var e = a.h;
            a = $n(a, d);
            d = new we;
            b = I(d, 1, b);
            c = Wb(b, 2, c);
            c = ec(a, 9, Le, c);
            gf(e, c)
        }
    }
    var co = class {
        constructor(a) {
            this.l = Cd() || window;
            this.h = a ? ? new vf(100, 100, !0);
            this.g = Lj(Gj(), 33, () => {
                const b = Q(Mh).g(gh.g, gh.defaultValue);
                return {
                    sd: b,
                    ssp: 0 < b && gd() < 1 / b,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null
                }
            })
        }
        get j() {
            return this.g.ssp
        }
        get i() {
            return this.g.cu
        }
        set i(a) {
            this.g.cu = a
        }
        get s() {
            return null === this.g.psi ? new Ie : pc(Ie, Kb(this.g.psi))
        }
    };

    function go() {
        var a = window;
        return "on" === n.google_adtest || "on" === n.google_adbreak_test || a.location.host.endsWith("h5games.usercontent.goog") ? a.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && 0 < b) || [] : []
    };

    function ho(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function io(a) {
        var b = N.document;
        if (b.currentScript) return ho(b.currentScript, a);
        for (const c of b.scripts)
            if (0 === ho(c, a)) return 0;
        return 1
    };

    function jo(a, b) {
        return {
            [3]: {
                [55]: () => 0 === a,
                [23]: c => Yl(N, Number(c)),
                [24]: c => am(Number(c)),
                [61]: () => F(b, 6),
                [63]: () => F(b, 6) || ".google.ch" === G(b, 8)
            },
            [4]: {},
            [5]: {
                [6]: () => G(b, 15)
            }
        }
    };

    function ko(a = n) {
        return a.ggeac || (a.ggeac = {})
    };

    function lo() {
        var a = Q(Mh).h(Jh.g, Jh.defaultValue),
            b = N.document;
        if (a.length && b.head)
            for (const c of a) c && b.head && (a = ed("META"), b.head.appendChild(a), a.httpEquiv = "origin-trial", a.content = c)
    }

    function mo(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function no(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };

    function oo(a, b) {
        try {
            const d = a.split(".");
            a = n;
            let e = 0,
                f;
            for (; null != a && e < d.length; e++) f = a, a = a[d[e]], "function" === typeof a && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch {}
    }
    var po = {
        [3]: {
            [8]: a => {
                try {
                    return null != ba(a)
                } catch {}
            },
            [9]: a => {
                try {
                    var b = ba(a)
                } catch {
                    return
                }
                if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]");
                return a
            },
            [10]: () => window === window.top,
            [6]: a => Qa(Q(Yf).g(), Number(a)),
            [27]: a => {
                a = oo(a, "boolean");
                return void 0 !== a ? a : void 0
            },
            [60]: a => {
                try {
                    return !!n.document.querySelector(a)
                } catch {}
            },
            [69]: a => mo(a, n.document),
            [70]: a => no(a, n.document)
        },
        [4]: {
            [3]: () => md(),
            [6]: a => {
                a = oo(a, "number");
                return void 0 !== a ? a : void 0
            }
        },
        [5]: {
            [2]: () => window.location.href,
            [3]: () => {
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            },
            [4]: a => {
                a = oo(a, "string");
                return void 0 !== a ? a : void 0
            }
        }
    };

    function qo(a, b) {
        const c = new Map;
        for (const [f, g] of a[1].entries()) {
            var d = f,
                e = g;
            const {
                fb: h,
                Za: m,
                ab: l
            } = e[e.length - 1];
            c.set(d, h + m * l)
        }
        for (const f of b)
            for (const g of C(f, Hl, 2))
                if (0 !== C(g, Gl, 2).length) {
                    b = jc(ub(r(g, 8)));
                    H(g, 4) && !H(g, 13) && (b = c.get(H(g, 4)) ? ? 0, d = jc(ub(r(g, 1))) * C(g, Gl, 2).length, c.set(H(g, 4), b + d));
                    d = [];
                    for (e = 0; e < C(g, Gl, 2).length; e++) {
                        const h = {
                            fb: b,
                            Za: jc(ub(r(g, 1))),
                            ab: C(g, Gl, 2).length,
                            xb: e,
                            Ua: H(f, 1),
                            sa: g,
                            P: C(g, Gl, 2)[e]
                        };
                        d.push(h)
                    }
                    ro(a[2], H(g, 10), d) || ro(a[1], H(g, 4), d) || ro(a[0], C(g, Gl, 2)[0].getId(),
                        d)
                }
        return a
    }

    function ro(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        a.get(b).push(...c);
        return !0
    };

    function so(a = gd()) {
        return b => hd(`${b} + ${a}`) % 1E3
    };
    const to = [12, 13, 20];

    function uo(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        a.includes(b) || a.push(b)
    }

    function vo(a, b, c, d) {
        const e = [];
        var f;
        if (f = 9 !== b) a.j[b] ? f = !0 : (a.j[b] = !0, f = !1);
        if (f) return xf(a.M, b, c, e, [], 4), e;
        f = to.includes(b);
        const g = [],
            h = Q(Bf).F,
            m = [];
        for (const v of [0, 1, 2])
            for (const [w, x] of a.na[v].entries()) {
                var l = w,
                    k = x;
                const z = new Re;
                var t = k.filter(E => E.Ua === b && !!a.h[E.P.getId()] && qe(B(E.sa, je, 3), h) && qe(B(E.P, je, 3), h));
                if (t.length)
                    for (const E of t) m.push(E.P);
                else if (!a.ya && (2 === v ? (t = d[1], Xb(z, 2, Se, l)) : t = d[0], l = t ? .(String(l)) ? ? (2 === v && 1 === H(k[0].sa, 11) ? void 0 : d[0](String(l))), void 0 !== l)) {
                    for (const E of k)
                        if (E.Ua ===
                            b) {
                            k = l - E.fb;
                            t = E.Za;
                            const P = E.ab,
                                ka = E.xb;
                            0 <= k && k < t * P && k % P === ka && qe(B(E.sa, je, 3), h) && qe(B(E.P, je, 3), h) && (k = H(E.sa, 13), 0 !== k && void 0 !== k && (t = a.i[String(k)], void 0 !== t && t !== E.P.getId() ? zf(a.M, a.i[String(k)], E.P.getId(), k) : a.i[String(k)] = E.P.getId()), m.push(E.P))
                        }
                    0 !== $b(z, Se) && (A(z, 3, sb(l), 0), g.push(z))
                }
            }
        for (const v of m) d = v.getId(), e.push(d), uo(a, d, f ? 4 : c), Pf(C(v, te, 2), f ? Rf() : [c], a.M, d);
        xf(a.M, b, c, e, g, 1);
        return e
    }

    function wo(a, b) {
        b = b.map(c => new Il(c)).filter(c => !to.includes(H(c, 1)));
        a.na = qo(a.na, b)
    }

    function xo(a, b) {
        R(1, c => {
            a.h[c] = !0
        }, b);
        R(2, (c, d, e) => vo(a, c, d, e), b);
        R(3, c => (a.g[c] || []).concat(a.g[4]), b);
        R(12, c => void wo(a, c), b);
        R(16, (c, d) => void uo(a, c, d), b)
    }
    var yo = class {
        constructor(a, b, c, {
            ya: d = !1,
            nc: e = []
        } = {}) {
            this.na = a;
            this.M = c;
            this.j = {};
            this.ya = d;
            this.g = {
                [b]: [],
                [4]: []
            };
            this.h = {};
            this.i = {};
            if (a = Pd()) {
                a = a.split(",") || [];
                for (const f of a)(a = Number(f)) && (this.h[a] = !0)
            }
            for (const f of e) this.h[f] = !0
        }
    };

    function zo(a, b) {
        a.g = Tf(14, b, () => {})
    }
    class Ao {
        constructor() {
            this.g = () => {}
        }
    }

    function Bo(a) {
        Q(Ao).g(a)
    };

    function Co({
        ob: a,
        F: b,
        config: c,
        kb: d = ko(),
        lb: e = 0,
        M: f = new Af(B(a, Jl, 5) ? .g() ? ? 0, B(a, Jl, 5) ? .h() ? ? 0, B(a, Jl, 5) ? .i() ? ? !1),
        na: g = qo({
            [0]: new Map,
            [1]: new Map,
            [2]: new Map
        }, C(a, Il, 2))
    }) {
        d.hasOwnProperty("init-done") ? (Tf(12, d, () => {})(C(a, Il, 2).map(h => h.toJSON())), Tf(13, d, () => {})(C(a, te, 1).map(h => h.toJSON()), e), b && Tf(14, d, () => {})(b), Do(e, d)) : (xo(new yo(g, e, f, c), d), Uf(d), Vf(d), Wf(d), Do(e, d), Pf(C(a, te, 1), [e], f, void 0, !0), Cf = Cf || !(!c || !c.sb), Bo(po), b && Bo(b))
    }

    function Do(a, b = ko()) {
        Xf(Q(Yf), b, a);
        Eo(b, a);
        zo(Q(Ao), b);
        Q(Mh).s()
    }

    function Eo(a, b) {
        const c = Q(Mh);
        c.i = (d, e) => Tf(5, a, () => !1)(d, e, b);
        c.g = (d, e) => Tf(6, a, () => 0)(d, e, b);
        c.j = (d, e) => Tf(7, a, () => "")(d, e, b);
        c.h = (d, e) => Tf(8, a, () => [])(d, e, b);
        c.s = () => {
            Tf(15, a, () => {})(b)
        }
    };

    function Fo(a, b) {
        b = {
            [0]: so(rd(b).toString())
        };
        b = Q(Yf).j(a, b);
        bg.ca(1085, fo(Q(co), a, b))
    }
    var Go = (a, b, c) => {
        var d = X(a);
        if (d.plle) Do(1, ko(a));
        else {
            d.plle = !0;
            d = B(b, Kl, 12);
            var e = F(b, 9);
            Co({
                ob: d,
                F: jo(c, b),
                config: {
                    ya: e && !!a.google_disable_experiments,
                    sb: e
                },
                kb: ko(a),
                lb: 1
            });
            if (c = G(b, 15)) c = Number(c), Q(Yf).i(c);
            for (const f of Vb(b, 19, tb)) Q(Yf).h(f);
            Fo(12, a);
            Fo(10, a);
            a = cd(a) || a;
            tj(a.location, "google_mc_lab") && Q(Yf).h(44738307);
            tj(a.location, "google_auto_storify_swipeable") && Q(Yf).h(44773747);
            tj(a.location, "google_auto_storify_scrollable") && Q(Yf).h(44773746)
        }
    };

    function Ho({
        va: a,
        Ba: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };

    function Io(a) {
        W.Ca(b => {
            b.shv = String(a);
            b.mjsv = Ho({
                va: "m202308290101",
                Ba: a
            });
            const c = Q(Yf).g(),
                d = go();
            b.eid = c.concat(d).join(",")
        })
    };
    var Jo = "undefined" === typeof sttc ? void 0 : sttc;

    function Ko(a) {
        var b = W;
        try {
            return qc(a, he), new Ml(JSON.parse(a))
        } catch (c) {
            b.G(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new Ml
    };

    function Lo(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function Mo(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function No() {
        const a = new Set,
            b = vj();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function Oo(a) {
        a = a.id;
        return null != a && (No().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function Po(a, b, c) {
        if (!a.sources) return !1;
        switch (Qo(a)) {
            case 2:
                const d = Ro(a);
                if (d) return c.some(f => So(d, f));
                break;
            case 1:
                const e = To(a);
                if (e) return b.some(f => So(e, f))
        }
        return !1
    }

    function Qo(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function To(a) {
        return Uo(a, b => b.currentRect)
    }

    function Ro(a) {
        return Uo(a, b => b.previousRect)
    }

    function Uo(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function So(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function Vo() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(Oo),
            b = [...No()].map(c => document.getElementById(c)).filter(c => null !== c);
        Wo = window.scrollX;
        Xo = window.scrollY;
        return Yo = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function Zo() {
        var a = new $o;
        if (U(Kh)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                a.ia.Ta && b.push("event");
                for (const c of b) ap(a).observe({
                    type: c,
                    buffered: !0
                });
                bp(a)
            }
        }
    }

    function ap(a) {
        a.M || (a.M = new PerformanceObserver(vi(640, b => {
            const c = Wo !== window.scrollX || Xo !== window.scrollY ? [] : Yo,
                d = Vo();
            for (const f of b.getEntries()) switch (b = f.entryType, b) {
                case "layout-shift":
                    b = a;
                    if (!f.hadRecentInput) {
                        b.A += Number(f.value);
                        Number(f.value) > b.X && (b.X = Number(f.value));
                        b.Z += 1;
                        var e = Po(f, c, d);
                        e && (b.s += f.value, b.Ka++);
                        if (5E3 < f.startTime - b.Ja || 1E3 < f.startTime - b.Ma) b.Ja = f.startTime, b.g = 0, b.j = 0;
                        b.Ma = f.startTime;
                        b.g += f.value;
                        e && (b.j += f.value);
                        b.g > b.ba && (b.ba = b.g, b.Pa = b.j, b.Oa = f.startTime +
                            f.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    b = f;
                    a.Ia = Math.floor(b.renderTime || b.loadTime);
                    a.Ha = b.size;
                    break;
                case "first-input":
                    b = f;
                    a.Ea = Number((b.processingStart - b.startTime).toFixed(3));
                    a.Fa = !0;
                    break;
                case "longtask":
                    b = Math.max(0, f.duration - 50);
                    a.v += b;
                    a.L = Math.max(a.L, b);
                    a.aa += 1;
                    break;
                case "pointerdown":
                case "pointerup":
                case "click":
                    cp(a, f);
                    break;
                default:
                    $c(b, void 0)
            }
        })));
        return a.M
    }

    function bp(a) {
        const b = vi(641, () => {
                var d = document;
                2 === (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && dp(a)
            }),
            c = vi(641, () => void dp(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.Da = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            ap(a).disconnect()
        }
    }

    function dp(a) {
        if (!a.La) {
            a.La = !0;
            ap(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Mo("cls", a.A), b += Mo("mls", a.X), b += Lo("nls", a.Z), window.LayoutShiftAttribution && (b += Mo("cas", a.s), b += Lo("nas", a.Ka), b += Mo("was", a.Pa)), b += Mo("wls", a.ba), b += Mo("tls", a.Oa));
            window.LargestContentfulPaint && (b += Lo("lcp", a.Ia), b += Lo("lcps", a.Ha));
            window.PerformanceEventTiming && a.Fa && (b += Lo("fid", a.Ea));
            window.PerformanceLongTaskTiming && (b += Lo("cbt", a.v),
                b += Lo("mbt", a.L), b += Lo("nlt", a.aa));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) Oo(c) && d++;
            b += Lo("nif", d);
            b += Lo("ifi", Fd(window));
            c = Q(Yf).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${n===n.top?1:0}`;
            b += a.Na ? `&${"qqid"}=${encodeURIComponent(a.Na)}` : Lo("pvsid", rd(n));
            window.googletag && (b += "&gpt=1");
            c = Math.max(a.h, a.B);
            0 <= c && (b += Lo("inp", c));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.Da()
        }
    }

    function cp(a, {
        interactionId: b,
        duration: c
    }) {
        a.ia.Ta && b && (c >= a.h ? (a.i = a.h, a.h = c) : c >= a.i && (a.i = c), 50 === ++a.Ga && (a.B = Math.max(a.B, a.i), a.Ga = 0, a.h = Number.NEGATIVE_INFINITY, a.i = Number.NEGATIVE_INFINITY))
    }
    var $o = class {
            constructor() {
                this.j = this.g = this.Z = this.X = this.A = 0;
                this.Ma = this.Ja = Number.NEGATIVE_INFINITY;
                this.Ga = 0;
                this.i = this.h = this.B = Number.NEGATIVE_INFINITY;
                this.Ea = this.Ha = this.Ia = this.Ka = this.Pa = this.s = this.Oa = this.ba = 0;
                this.Fa = !1;
                this.aa = this.L = this.v = 0;
                this.M = null;
                this.La = !1;
                this.Da = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.Na = a ? a.getAttribute("data-google-query-id") : null;
                this.ia = {
                    Ta: !1
                }
            }
        },
        Wo, Xo, Yo = [];
    var ep = class extends J {
        constructor() {
            super()
        }
        getVersion() {
            return G(this, 2)
        }
    };

    function fp(a, b) {
        return u(a, 2, vb(b))
    }

    function gp(a, b) {
        return u(a, 3, vb(b))
    }

    function hp(a, b) {
        return u(a, 4, vb(b))
    }

    function ip(a, b) {
        return u(a, 5, vb(b))
    }

    function jp(a, b) {
        return u(a, 9, vb(b))
    }

    function kp(a, b) {
        return fc(a, 10, b)
    }

    function lp(a, b) {
        return u(a, 11, nb(b))
    }

    function mp(a, b) {
        return u(a, 1, vb(b))
    }

    function np(a, b) {
        return u(a, 7, nb(b))
    }
    var op = class extends J {
        constructor() {
            super()
        }
    };
    op.m = [10, 6];
    const pp = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function qp() {
        if ("function" !== typeof N.navigator ? .userAgentData ? .getHighEntropyValues) return null;
        const a = N.google_tag_data ? ? (N.google_tag_data = {});
        if (a.uach_promise) return a.uach_promise;
        const b = N.navigator.userAgentData.getHighEntropyValues(pp).then(c => {
            a.uach ? ? (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }

    function rp(a) {
        return lp(kp(ip(fp(mp(hp(np(jp(gp(new op, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList ? .map(b => {
            var c = new ep;
            c = u(c, 1, vb(b.brand));
            return u(c, 2, vb(b.version))
        }) || []), a.wow64 || !1)
    }

    function sp() {
        return qp() ? .then(a => rp(a)) ? ? null
    };

    function tp(a, b) {
        b.google_ad_host || (a = Ul(a)) && (b.google_ad_host = a)
    }

    function up(a, b, c = "") {
        N.google_sa_impl && !N.document.getElementById("google_shimpl") && (delete N.google_sa_queue, delete N.google_sa_impl);
        N.google_sa_queue || (N.google_sa_queue = [], N.google_process_slots = W.qa(215, () => vp(N.google_sa_queue)), a = wp(c, a, b), dd(N.document, a).id = "google_shimpl")
    }

    function vp(a) {
        const b = a.shift();
        "function" === typeof b && W.ga(216, b);
        a.length && n.setTimeout(W.qa(215, () => vp(a)), 0)
    }

    function xp(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function wp(a, b, c) {
        b = F(c, 4) ? b.Bb : b.Cb;
        const d = {};
        a: {
            if (F(c, 4)) {
                if (a = a || Wn(N)) {
                    a = {
                        client: a,
                        plah: N.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            a = {}
        }
        yp(a, d);
        yp(Nh() ? {
            bust: Nh()
        } : {}, d);
        return Lc(b, d)
    }

    function yp(a, b) {
        L(a, (c, d) => {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function zp(a) {
        a: {
            var b = [n.top];
            var c = [];
            let e = 0,
                f;
            for (; f = b[e++];) {
                c.push(f);
                try {
                    if (f.frames)
                        for (let g = 0; g < f.frames.length && 1024 > b.length; ++g) b.push(f.frames[g])
                } catch {}
            }
            b = c;
            for (c = 0; c < b.length; c++) try {
                var d = b[c].frames.google_esf;
                if (d) {
                    yd = d;
                    break a
                }
            } catch (g) {}
            yd = null
        }
        if (yd) return null;d = ed("IFRAME");d.id = "google_esf";d.name = "google_esf";a = U(wh) ? a.Ib : a.Jb;U(oh) && (a = Lc(a, {
            hello: "world"
        }));d.src = Nc(a).toString();d.style.display = "none";
        return d
    }

    function Ap(a, b, c, d, e) {
        const f = e.pb;
        Bp(a, c, b);
        c = b.google_start_time ? ? qa;
        const g = (new Date).getTime();
        b.google_lrv = Ho({
            va: "m202308290101",
            Ba: G(d, 2)
        });
        b.google_async_iframe_id = f;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[f] = b;
        d = a.document.getElementById(f + "_host") ? h => h() : h => window.setTimeout(h, 0);
        xp(a, () => {
            var {
                Hb: h
            } = e;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), null == h) throw Error("no_div");
            (h =
                a.google_sa_impl({
                    pubWin: a,
                    vars: b,
                    innerInsElement: h
                })) && W.ca(911, h)
        }, d)
    }

    function Bp(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Pn[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = hd(e.join(":")).toString();
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let m = 0;
                        for (let l = 0; l < h.length; ++l) {
                            const k = h[l];
                            if (k.nodeName && k.nodeName.toString().toLowerCase() === g) {
                                if (b === k) {
                                    g = "." + m;
                                    break a
                                }++m
                            }
                        }
                    }
                    g =
                    ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a) try {
                let h = a.parent;
                for (d = 0; h && h !== a && 25 > d; ++d) {
                    const m = h.frames;
                    for (f = 0; f < m.length; ++f)
                        if (a === m[f]) {
                            e.push(f);
                            break
                        }
                    a = h;
                    h = a.parent
                }
            } catch (h) {}
            c.google_ad_dom_fingerprint = hd(b + e.join()).toString()
        }
    }

    function Cp() {
        var a = cd(n);
        a && (a = Am(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Dp() {
        const a = sp();
        null != a && a.then(b => {
            a: {
                jb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), Cb);
                    break a
                } finally {
                    jb = !1
                }
                c = void 0
            }
            N.google_user_agent_client_hint = c
        });
        lo()
    };

    function Ep(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function Fp(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = Zc(c, "client");
            d && (b.google_ad_client = Ep("google_ad_client", d));
            (c = Zc(c, "host")) && (b.google_ad_host = Ep("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = ra(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Ep(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function Gp(a) {
        if (a = Bd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Hp(a, b, c, d) {
        Fp(a, b);
        if (c.document && c.document.body && !Ln(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = Rn(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Pn[e + "x" + g];
                var h = f;
                if (e) {
                    const m = Qn(f, g);
                    if (m) h = m, b.google_ad_format = m + "x" + g + "_0ads_al";
                    else throw new V("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                U(ph) ? On(b, 4) : (h = Hn(f, "auto", c, a, b),
                    g = f, h.size().h(c, b, a), Pm(h, g, b), g = h.size(), b.google_responsive_formats = null, g.I > f && !e && (b.google_ad_width = g.I, a.style.width = `${g.I}px`))
            }
        }(e = a.offsetWidth) || (e = ii(a, c, "width", M));
        e = e || b.google_ad_width || 0;
        if (488 > Ig(c)) {
            f = cd(c) || c;
            g = b.google_ad_client;
            if (d = tj(f.location, "google_responsive_slot_preview") || U(vh) || Yl(f, 1, g, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || Ln(c, b) || Yh(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = fd(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Qa(["static", "relative"],
                                f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    d = bi(c, a, e, .3, b);
                    !0 !== d ? (b.gfwrnwer = d, d = !1) : d = c === c.top ? !0 : !1
                }
            d ? (On(b, 1), d = !0) : d = !1
        } else d = !1;
        if (e = Ln(c, b)) Nn(e, a, b, c, d);
        else {
            if (Yh(a, b)) {
                if (d = fd(a, c)) a.style.width = d.width, a.style.height = d.height, Xh(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Gp(c)
            } else Xh(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format &&
                "true" == b.google_full_width_responsive ? Nn(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = ci(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Ip(a) {
        if (a.g) return a.g;
        a.v && a.v(a.h) ? a.g = a.h : a.g = ld(a.h, a.B);
        return a.g ? ? null
    }
    var Jp = class extends kf {
        constructor(a, b) {
            super();
            this.B = a;
            this.v = b;
            this.A = new Map;
            this.j = new Map;
            this.h = N
        }
    };
    const Kp = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.H({
                    consentData: c ? ? void 0,
                    nb: d ? void 0 : 2
                })
            })
        },
        Lp = {
            ub: a => a.H,
            vb: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            yb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    nb: b.success ? void 0 : 2
                })
            }
        };
    var Mp = class extends kf {
        constructor() {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new Jp("__uspapiLocator", a => "function" === typeof a.__uspapi);
            this.caller.A.set("getDataWithCallback", Kp);
            this.caller.j.set("getDataWithCallback", Lp)
        }
    };
    var Np = tc(class extends J {});
    const Op = (a, b) => {
            const c = {
                cb: d => {
                    d = Np(d);
                    b.H({
                        consentData: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        Pp = {
            ub: a => a.H,
            vb: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            yb: (a, b) => {
                a({
                    consentData: b
                })
            }
        };
    var Qp = class extends kf {
        constructor() {
            super();
            this.g = this.h = !1;
            this.caller = new Jp("googlefcPresent");
            this.caller.A.set("getDataWithCallback", Op);
            this.caller.j.set("getDataWithCallback", Pp)
        }
    };
    var Rp = a => {
        Dc(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "sc-cnf" !== c.googMsgType || a(c, b)
        })
    };
    let Sp = null;
    const Tp = [],
        Up = new Map;
    let Vp = -1;

    function Wp(a) {
        return qi.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }

    function Xp(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        Yp(a, b, c)
    }

    function Yp(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Hp);
        var e = b.google_reactive_ads_config;
        e || Hp(a, b, d, c);
        tp(d, b);
        if (!Zp(a, b, d)) {
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(N).page_contains_reactive_tag && !X(N).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Rl(!1);
                        return
                    }
                    throw new V("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(N).page_contains_reactive_tag = !0;
                Rl(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = Ed(d);
            L(Sn, (f, g) => {
                b[g] = b[g] || d[g]
            });
            "sd" !== b.google_loader_used && (b.google_loader_used =
                "aa");
            b.google_reactive_tag_first = 1 === (X(N).first_tag_on_page || 0);
            fj(164, () => {
                var f = d.document;
                for (var g = void 0, h = 0; !g || f.getElementById(g + "_host");) g = "aswift_" + h++;
                f = g;
                g = Number(b.google_ad_width || 0);
                h = Number(b.google_ad_height || 0);
                const m = ed("DIV");
                m.id = f + "_host";
                const l = m.style;
                l.border = "none";
                l.height = `${h}px`;
                l.width = `${g}px`;
                l.margin = "0px";
                l.padding = "0px";
                l.position = "relative";
                l.visibility = "visible";
                l.backgroundColor = "transparent";
                m.style.display = "inline-block";
                a.appendChild(m);
                Ap(d, b, a, c, {
                    pb: f,
                    Hb: m
                })
            })
        }
    }

    function Zp(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = Pl(c);
        if (f && f.Qa && "on" !== b.google_adtest && !e) {
            e = $h(a, c);
            const g = Hg(c).clientHeight;
            e = 0 == g ? null : e / g;
            if (!f.ta || f.ta && (e || 0) >= f.ta) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = fa(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), "slot" === f.Fb && (null !== kd(a.getAttribute("width")) &&
                a.setAttribute("width", "0"), null !== kd(a.getAttribute("height")) && a.setAttribute("height", "0"), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = fd(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function $p(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (Wp(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a)) return e
        }
        return null
    }

    function aq(a, b, c) {
        if (a && "shift" in a) {
            bo(e => {
                lc(ac(e), 2) || (e = ac(e), oc(e, 2))
            });
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    bq(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }--d
            }
        }
    }

    function cq() {
        const a = ed("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        nd(a, {
            display: "none"
        });
        return a
    }

    function dq(a, b) {
        const c = {},
            d = hm(a.google_ad_client, b);
        L(Gg, (g, h) => {
            !1 === a.enable_page_level_ads ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        });
        ea(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = cq();
        sd.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(N).pause_ad_requests;
        Xp(e, f, b);
        bo(g => {
            lc(ac(g), 6) || (g = ac(g), oc(g, 6))
        })
    }

    function eq(a, b) {
        Am(n).wasPlaTagProcessed = !0;
        const c = () => {
                dq(a, b)
            },
            d = n.document;
        if (d.body || "complete" === d.readyState || "interactive" === d.readyState) dq(a, b);
        else {
            const e = Cc(W.qa(191, c));
            Dc(d, "DOMContentLoaded", e);
            (new n.MutationObserver((f, g) => {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function bq(a, b, c) {
        const d = {};
        fj(165, () => fq(a, d, b, c), e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function gq(a) {
        delete a.google_checked_head;
        L(a, (b, c) => {
            pi[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), n.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        })
    }

    function hq(a, b) {
        var c = N.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || N.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars) iq(c);
            else {
                bo(g => {
                    g = ac(g);
                    A(g, 7, nb(!0), !1)
                });
                var e = {};
                Fp(c, e);
                gq(e);
                var f = Ic(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                "bottom" ===
                e.google_overlays && (c.overlays = {
                    bottom: !0
                });
                delete e.google_overlays;
                N.adsbygoogle || (N.adsbygoogle = []);
                d = N.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.h() ? .h() ? jq(f, a) : Rp(() => {
                    jq(f, a)
                })
            }
        }
    }

    function iq(a) {
        const b = X(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Zc(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new V("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function kq(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function fq(a, b, c, d) {
        if (null == a) throw new V("push() called with no parameters.");
        bo(f => {
            lc(ac(f), 3) || (f = ac(f), oc(f, 3))
        });
        d.i() && lq(a, d.g().g(), G(d, 2));
        var e = kq(a);
        if (0 !== e)
            if (d = Sl(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = qa), null == Sp) mq(a), Tp.push(a);
            else if (3 === e) {
            const f = Sp;
            fj(787, () => {
                f.handleAdConfig(a)
            })
        } else hj(730, Sp.handleAdBreak(a));
        else {
            qa = (new Date).getTime();
            up(c, d, nq(a));
            oq();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" ===
                        typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new V("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) bo(f => {
                lc(ac(f), 4) || (f = ac(f), oc(f, 4))
            }), pq(a, d);
            else if ((e = a.params) && L(e, (f, g) => {
                    b[g] = f
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = qq(a.element);
                Fp(e, b);
                c = X(n).head_tag_slot_vars || {};
                L(c, (f, g) => {
                    b.hasOwnProperty(g) || (b[g] = f)
                });
                if (e.hasAttribute("data-require-head") &&
                    !X(n).head_tag_slot_vars) throw new V("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new V("Ad client is missing from the slot.");
                if (c = 0 === (X(N).first_tag_on_page || 0) && Dm(b)) bo(f => {
                    lc(ac(f), 5) || (f = ac(f), oc(f, 5))
                }), rq(c);
                0 === (X(N).first_tag_on_page || 0) && (X(N).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(N).pause_ad_requests;
                Xp(e, b, d)
            }
        }
    }
    let sq = !1;

    function lq(a, b, c) {
        sq || (sq = !0, a = nq(a) || Wn(N), gj("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function nq(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function oq() {
        if (U(nh)) {
            var a = Pl(N);
            if (!(a = a && a.Qa)) {
                try {
                    var b = N.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? Dl(b) : null;
                a = !(b && Cl(b) && b)
            }
            a || Ql(N, 1)
        }
    }

    function rq(a) {
        td(() => {
            Am(n).wasPlaTagProcessed || n.adsbygoogle && n.adsbygoogle.push(a)
        })
    }

    function pq(a, b) {
        0 === (X(N).first_tag_on_page || 0) && (X(N).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(n);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        Gm(a, b);
        eq(a, b)
    }

    function qq(a) {
        if (a) {
            if (!Wp(a) && (a.id ? a = $p(a.id) : a = null, !a)) throw new V("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new V("'element' is not a good DOM element.");
        } else if (a = $p(), !a) throw new V("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function tq() {
        var a = new Xj(N),
            b = new Mp;
        const c = new Qp;
        var d = N.__cmp ? 1 : 0;
        a = Uj(a) ? 1 : 0;
        b = Ip(b.caller) ? 1 : 0;
        c.h || (c.g = !!Ip(c.caller), c.h = !0);
        gj("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: b,
            fc: c.g ? 1 : 0,
            ptt: 9
        }, .001)
    }

    function uq(a) {
        Gj().S[Jj(26)] = !!Number(a)
    }

    function vq(a) {
        Number(a) ? X(N).pause_ad_requests = !0 : (X(N).pause_ad_requests = !1, a = () => {
            if (!X(N).pause_ad_requests) {
                var b = {};
                let c;
                "function" === typeof window.CustomEvent ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                N.dispatchEvent(c)
            }
        }, n.setTimeout(a, 0), n.setTimeout(a, 1E3))
    }

    function wq(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function jq(a, b) {
        b = zm(Lc(b.Eb, Nh() ? {
            bust: Nh()
        } : {})).then(c => {
            null == Sp && (c.init(a), Sp = c, xq(c))
        });
        W.ca(723, b);
        b.finally(() => {
            Tp.length = 0;
            gj("slotcar", {
                event: "api_ld",
                time: Date.now() - qa,
                time_pr: Date.now() - Vp
            })
        })
    }

    function xq(a) {
        for (const [c, d] of Up) {
            var b = c;
            const e = d; - 1 !== e && (n.clearTimeout(e), Up.delete(b))
        }
        for (b = 0; b < Tp.length; b++) {
            if (Up.has(b)) continue;
            const c = Tp[b],
                d = kq(c);
            fj(723, () => {
                if (3 === d) a.handleAdConfig(c);
                else if (2 === d) {
                    var e = a.handleAdBreakBeforeReady(c);
                    W.ca(730, e)
                }
            })
        }
    }

    function mq(a) {
        var b = Tp.length;
        if (2 === kq(a) && "preroll" === a.type && null != a.adBreakDone) {
            var c = a.adBreakDone; - 1 === Vp && (Vp = Date.now());
            var d = n.setTimeout(() => {
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), Up.set(b, -1), gj("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }, 1E3 * Q(Mh).g(Ih.g, Ih.defaultValue));
            Up.set(b, d)
        }
    }

    function yq() {
        var a = N.document,
            b = Dd `https://googleads.g.doubleclick.net`;
        const c = a.createElement("LINK");
        c.crossOrigin = "";
        a: {
            if (b instanceof Kc) c.href = Nc(b).toString();
            else {
                if (-1 === ad.indexOf("preconnect")) throw Error('TrustedResourceUrl href attribute required with rel="preconnect"');
                if (b instanceof Rc) b = b instanceof Rc && b.constructor === Rc ? b.g : "type_error:SafeUrl";
                else {
                    c: {
                        try {
                            var d = new URL(b)
                        } catch (e) {
                            d = "https:";
                            break c
                        }
                        d = d.protocol
                    }
                    b = "javascript:" !== d ? b : void 0
                }
                if (void 0 === b) break a;
                c.href = b
            }
            c.rel =
            "preconnect"
        }
        a.head.appendChild(c)
    };
    (function(a, b, c, d = () => {}) {
        W.eb(ij);
        fj(166, () => {
            const e = Ko(b);
            Io(G(e, 2));
            Ol(F(e, 6));
            d();
            Ad(16, [1, e.toJSON()]);
            var f = Cd(Bd(N)) || N;
            const g = c(Ho({
                va: a,
                Ba: G(e, 2)
            }), e);
            var h = null === N.document.currentScript ? 1 : io(g.Gb);
            Zl(f, e);
            Go(f, e, h);
            U(fh) && yq();
            bo(k => {
                var t = kc(k, 1) + 1;
                A(k, 1, sb(t), 0);
                N.top === N && (t = kc(k, 2) + 1, A(k, 2, sb(t), 0));
                lc(ac(k), 1) || (k = ac(k), oc(k, 1))
            });
            hj(1086, eo(0 === h));
            if (!Ca() || 0 <= sa(Ia(), 11)) {
                ej(U(Lh));
                Dp();
                ll();
                try {
                    Zo()
                } catch {}
                Cp();
                hq(g, e);
                f = window;
                h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    gj("new_abg_tag", {
                        value: `${F(e,16)}`,
                        host_v: `${F(e,22)}`,
                        frequency: .01
                    }, .01);
                    tq();
                    var m = {
                        push: k => {
                            bq(k, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(m, "requestNonPersonalizedAds", {
                            set: uq
                        }), Object.defineProperty(m, "pauseAdRequests", {
                            set: vq
                        }), Object.defineProperty(m, "onload", {
                            set: wq
                        })
                    } catch {}
                    if (h)
                        for (var l of ["requestNonPersonalizedAds", "pauseAdRequests"]) void 0 !== h[l] && (m[l] = h[l]);
                    aq(h, g, e);
                    f.adsbygoogle = m;
                    h && (m.onload = h.onload);
                    U(jh) || (l = zp(g)) && document.documentElement.appendChild(l)
                }
            }
        })
    })("m202308290101", Jo, function(a,
        b) {
        const c = 2012 < kc(b, 1) ? `_fy${kc(b,1)}` : "";
        var d = G(b, 3);
        const e = G(b, 2);
        b = Dd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`;
        const f = Dd `https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`;
        d = Dd `https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup${c}.html`;
        return {
            Eb: b,
            Cb: Dd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${c}.js`,
            Bb: Dd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${c}.js`,
            Jb: f,
            Ib: d,
            Gb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20230830\",\"r20190131\",null,null,null,null,null,null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[1270,null,null,[1]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1247,null,null,[1]],[1252,null,null,[1]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1236,null,null,[1]],[1287,null,null,[1]],[1285,null,null,[1]],[null,null,null,[null,null,null,[\"en\",\"de\"]],null,1273],[1223,null,null,[1]],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[1167,null,null,[1]],[1129,null,null,[1]],[1171,null,null,[1]],[1276,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[1198,null,null,[1]],[1206,null,null,[1]],[1147,null,null,[1]],[1190,null,null,[1]],[null,1245,null,[null,3600]],[null,506864295,null,[null,300]],[null,508040914,null,[null,100]],[null,547455356,null,[null,49]],[null,null,null,[null,null,null,[\"1\"]],null,556791602],[547450892,null,null,[]],[547131098,null,null,[1]],[544317767,null,null,[1]],[529362570,null,null,[1]],[null,null,549581487,[null,null,\"#1A73E8\"]],[null,null,549581486,[null,null,\"#FFFFFF\"]],[null,561668774,null,[null,0.1]],[546231822,null,null,[1]],[542187945,null,null,[1]],[537288587,null,null,[1]],[null,469675170,null,[null,30000]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1086,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[1033,null,null,[1]],[555237685,null,null,[1]],[null,472785970,null,[null,500]],[null,null,null,[null,null,null,[\"A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo\/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8\/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf\/RP0paks+RoTYbXHxceT\/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[null,1972,null,[]],[485990406,null,null,[]]],[[12,[[100,[[20222282,[[31077334,null,null,[1]]]],[20222283]],null,91],[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31067146,null,[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]],[1000,[[31067147,null,[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]],[1000,[[31067148,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]],[1000,[[31068556,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]]],[50,[[44800311,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44800312,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,77]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776369],[44792510]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[null,[[31076800],[31076801,[[1275,null,null,[1]]]]]],[100,[[31076838],[31076839,[[542046278,null,null,[1]]]]]],[50,[[31076994],[31076995,[[1229,null,null,[1]]]],[31076996,[[1230,null,null,[1]]]],[31076997,[[1231,null,null,[1]]]],[31076998,[[1230,null,null,[1]],[1229,null,null,[1]],[1231,null,null,[1]]]]],null,87],[10,[[31077221],[31077222,[[1292,null,null,[1]]]]]],[100,[[31077327],[31077328,[[555237685,null,null,[]]]]]],[10,[[31077329],[31077330,[[542187945,null,null,[]]]]]],[100,[[31077369],[31077370,[[1293,null,null,[1]]]]]],[100,[[31077371],[31077372,[[558119297,null,null,[1]]]]]],[100,[[31077441],[31077442,[[1295,null,null,[1]]]]]],[100,[[31077443],[31077444,[[1294,null,null,[1]]]]]],[10,[[31077488],[31077489,[[1282,null,null,[1]]]]]],[100,[[31077522],[31077523,[[546245766,null,null,[1]]]]]],[100,[[31077524],[31077525,[[1297,null,null,[1]]]]]],[100,[[31077526],[31077527,[[1296,null,null,[1]]]]]],[1000,[[31077549,[[null,null,14,[null,null,\"31077549\"]]],[6,null,null,null,6,null,\"31077549\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31077550,[[null,null,14,[null,null,\"31077550\"]]],[6,null,null,null,6,null,\"31077550\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31077559],[31077560,[[553764172,null,null,[1]]]]]],[1000,[[31077587,[[null,null,14,[null,null,\"31077587\"]]],[6,null,null,null,6,null,\"31077587\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31077588,[[null,null,14,[null,null,\"31077588\"]]],[6,null,null,null,6,null,\"31077588\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[1,[[42532262],[42532263,[[null,1263,null,[null,16]]]],[42532264,[[null,1263,null,[null,4294967296]]]],[42532265,[[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532266,[[null,1263,null,[null,4294967296]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532267,[[null,1263,null,[null,16]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532268,[[1266,null,null,[1]]]]]],[10,[[42532314],[42532315,[[1267,null,null,[1]]]],[42532316,[[1268,null,null,[1]]]],[42532317,[[1267,null,null,[1]],[1268,null,null,[1]]]]]],[10,[[42532334],[42532335,[[1280,null,null,[1]]]]]],[1,[[42532360],[42532361,[[1260,null,null,[1]],[1291,null,null,[1]]]]],null,90],[1,[[42532362],[42532363]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44776368],[44779257],[44784478]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[10,[[44785294],[44785295]]],[10,[[44792012],[44792013,[[1233,null,null,[1]],[1185,null,null,[1]]]]],null,76],[1,[[44795552],[44795553,[[1260,null,null,[1]]]]],null,90],[1,[[44795554],[44795555]]],[100,[[44795921],[44795922,[[1222,null,null,[1]]]],[44798934,[[1222,null,null,[1]]]]]],[50,[[44796632],[44796700,[[1185,null,null,[1]]]]],null,76],[10,[[44796634,[[1185,null,null,[1]]]],[44796684]],null,76],[10,[[44799955],[44799956,[[553800014,null,null,[1]]]]],[4,null,55]],[50,[[44800658],[44800659,[[1185,null,null,[1]]]]],null,76],[10,[[44801484],[44801485,[[1298,null,null,[1]]]]]],[null,[[44801758],[44801759,[[1284,null,null,[1]]]]],null,93],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[1,[[44801992],[44801993,[[1289,null,null,[1]],[1288,null,null,[1]]]]]]]],[11,[[1000,[[31077025,null,[4,null,6,null,null,null,null,[\"31076800\"]]]],[4,null,8,null,null,null,null,[\"__gpp\"]],88,null,null,null,null,null,null,null,null,9],[1000,[[31077026,null,[4,null,6,null,null,null,null,[\"31076801\"]]]],[4,null,8,null,null,null,null,[\"__gpp\"]],88,null,null,null,null,null,null,null,null,9]]],[17,[[10,[[31077094],[31077097,[[541943501,null,null,[1]],[null,1245,null,[null,600]]]]],null,null,null,null,null,350,null,120],[5,[[31077406],[31077407,[[541943501,null,null,[1]]]],[31077408,[[541943501,null,null,[1]],[null,550718588,null,[null,500]]]],[31077409,[[557143911,null,null,[1]],[541943501,null,null,[1]]]],[31077410,[[557143911,null,null,[1]],[541943501,null,null,[1]],[null,550718588,null,[null,500]]]]],null,null,null,null,null,325,null,120],[48,[[44796896,[[541943501,null,null,[1]],[null,1245,null,[null,600]]]]],[2,[[4,null,55],[7,null,null,15,null,20230711]]],null,null,null,null,440,null,120,1],[504,[[44796897,[[541943501,null,null,[1]],[null,1245,null,[null,600]]],[4,null,71,null,null,null,null,[\"120\",\"14\"]]]],[2,[[4,null,55],[7,null,null,15,null,20230711]]],null,null,null,null,488,null,120,1],[20,[[44797663,[[null,506871937,null,[null,44797663]],[1120,null,null,[1]]]],[44797664,[[null,506871937,null,[null,44797664]],[160889229,null,null,[1]],[1120,null,null,[1]]]]],[4,null,55],null,null,null,null,732,null,121],[20,[[44798321,[[null,506871937,null,[null,44798321]]]],[44798322,[[545453532,null,null,[1]],[null,506871937,null,[null,44798322]],[1120,null,null,[1]]]],[44798323,[[null,506871937,null,[null,44798323]],[1120,null,null,[1]]]]],[4,null,55],null,null,null,null,2,null,121],[14,[[44801877]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,null,null,120,1],[14,[[44801878]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,15,null,120,1],[139,[[44801879]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,30,null,120,1],[14,[[44801880]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,170,null,120,1],[139,[[44801881]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,185,null,120,1]]]],null,null,[null,\"1000\",1,\"1000\"]],null,null,null,null,null,2124403903,[44759876,44759927,44759837]]");