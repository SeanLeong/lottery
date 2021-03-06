!
function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    }: t(e)
} ("undefined" != typeof window ? window: this,
function(e, t) {
    var n = [],
    r = n.slice,
    i = n.concat,
    o = n.push,
    a = n.indexOf,
    s = {},
    u = s.toString,
    l = s.hasOwnProperty,
    c = {},
    d = "1.11.2",
    p = function(e, t) {
        return new p.fn.init(e, t)
    },
    f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    h = /^-ms-/,
    g = /-([\da-z])/gi,
    m = function(e, t) {
        return t.toUpperCase()
    };
    p.fn = p.prototype = {
        jquery: d,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return p.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(p.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: o,
        sort: n.sort,
        splice: n.splice
    },
    p.extend = p.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {},
        s++), "object" == typeof a || p.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++) if (null != (i = arguments[s])) for (r in i) e = a[r],
        n = i[r],
        a !== n && (l && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, o = e && p.isArray(e) ? e: []) : o = e && p.isPlainObject(e) ? e: {},
        a[r] = p.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    },
    p.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === p.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === p.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! p.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !l.call(e, "constructor") && !l.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            if (c.ownLast) for (t in e) return l.call(e, t);
            for (t in e);
            return void 0 === t || l.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? s[u.call(e)] || "object": typeof e
        },
        globalEval: function(t) {
            t && p.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(h, "ms-").replace(g, m)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
            o = e.length,
            a = v(e);
            if (n) {
                if (a) {
                    for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break
                } else for (i in e) if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break
            } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "": (e + "").replace(f, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (v(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (a) return a.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, t) {
            var n = +t.length,
            r = 0,
            i = e.length;
            while (n > r) e[i++] = t[r++];
            if (n !== n) while (void 0 !== t[r]) e[i++] = t[r++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o),
            r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, o = 0,
            a = e.length,
            s = v(e),
            u = [];
            if (s) for (; a > o; o++) r = t(e[o], o, n),
            null != r && u.push(r);
            else for (o in e) r = t(e[o], o, n),
            null != r && u.push(r);
            return i.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t], t = e, e = o),
            p.isFunction(e) ? (n = r.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(r.call(arguments)))
            },
            i.guid = e.guid = e.guid || p.guid++, i) : void 0
        },
        now: function() {
            return + new Date
        },
        support: c
    }),
    p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        s["[object " + t + "]"] = t.toLowerCase()
    });
    function v(e) {
        var t = e.length,
        n = p.type(e);
        return "function" === n || p.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    var y = function(e) {
        var t, n, r, i, o, a, s, u, l, c, d, p, f, h, g, m, v, y, b, x = "sizzle" + 1 * new Date,
        w = e.document,
        T = 0,
        C = 0,
        N = st(),
        k = st(),
        E = st(),
        S = function(e, t) {
            return e === t && (d = !0),
            0
        },
        j = 1 << 31,
        A = {}.hasOwnProperty,
        D = [],
        L = D.pop,
        H = D.push,
        M = D.push,
        _ = D.slice,
        q = function(e, t) {
            for (var n = 0,
            r = e.length; r > n; n++) if (e[n] === t) return n;
            return - 1
        },
        F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        O = "[\\x20\\t\\r\\n\\f]",
        B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        R = B.replace("w", "w#"),
        P = "\\[" + O + "*(" + B + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + O + "*\\]",
        W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
        $ = new RegExp(O + "+", "g"),
        z = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
        I = new RegExp("^" + O + "*," + O + "*"),
        X = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
        Q = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
        J = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = {
            ID: new RegExp("^#(" + B + ")"),
            CLASS: new RegExp("^\\.(" + B + ")"),
            TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + F + ")$", "i"),
            needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
        },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        et = /[+~]/,
        tt = /'|\\/g,
        nt = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
        rt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        it = function() {
            p()
        };
        try {
            M.apply(D = _.call(w.childNodes), w.childNodes),
            D[w.childNodes.length].nodeType
        } catch(ot) {
            M = {
                apply: D.length ?
                function(e, t) {
                    H.apply(e, _.call(t))
                }: function(e, t) {
                    var n = e.length,
                    r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        function at(e, t, r, i) {
            var o, s, l, c, d, h, v, y, T, C;
            if ((t ? t.ownerDocument || t: w) !== f && p(t), t = t || f, r = r || [], c = t.nodeType, "string" != typeof e || !e || 1 !== c && 9 !== c && 11 !== c) return r;
            if (!i && g) {
                if (11 !== c && (o = Z.exec(e))) if (l = o[1]) {
                    if (9 === c) {
                        if (s = t.getElementById(l), !s || !s.parentNode) return r;
                        if (s.id === l) return r.push(s),
                        r
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(l)) && b(t, s) && s.id === l) return r.push(s),
                    r
                } else {
                    if (o[2]) return M.apply(r, t.getElementsByTagName(e)),
                    r;
                    if ((l = o[3]) && n.getElementsByClassName) return M.apply(r, t.getElementsByClassName(l)),
                    r
                }
                if (n.qsa && (!m || !m.test(e))) {
                    if (y = v = x, T = t, C = 1 !== c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
                        h = a(e),
                        (v = t.getAttribute("id")) ? y = v.replace(tt, "\\$&") : t.setAttribute("id", y),
                        y = "[id='" + y + "'] ",
                        d = h.length;
                        while (d--) h[d] = y + vt(h[d]);
                        T = et.test(e) && gt(t.parentNode) || t,
                        C = h.join(",")
                    }
                    if (C) try {
                        return M.apply(r, T.querySelectorAll(C)),
                        r
                    } catch(N) {} finally {
                        v || t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(z, "$1"), t, r, i)
        }
        function st() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            return t
        }
        function ut(e) {
            return e[x] = !0,
            e
        }
        function lt(e) {
            var t = f.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ct(e, t) {
            var n = e.split("|"),
            i = e.length;
            while (i--) r.attrHandle[n[i]] = t
        }
        function dt(e, t) {
            var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || j) - (~e.sourceIndex || j);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function pt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ht(e) {
            return ut(function(t) {
                return t = +t,
                ut(function(n, r) {
                    var i, o = e([], n.length, t),
                    a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function gt(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = at.support = {},
        o = at.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        p = at.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e: w;
            return a !== f && 9 === a.nodeType && a.documentElement ? (f = a, h = a.documentElement, i = a.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", it, !1) : i.attachEvent && i.attachEvent("onunload", it)), g = !o(a), n.attributes = lt(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), n.getElementsByTagName = lt(function(e) {
                return e.appendChild(a.createComment("")),
                !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = K.test(a.getElementsByClassName), n.getById = lt(function(e) {
                return h.appendChild(e).id = x,
                !a.getElementsByName || !a.getElementsByName(x).length
            }), n.getById ? (r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            r.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), r.find.TAG = n.getElementsByTagName ?
            function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            },
            r.find.CLASS = n.getElementsByClassName &&
            function(e, t) {
                return g ? t.getElementsByClassName(e) : void 0
            },
            v = [], m = [], (n.qsa = K.test(a.querySelectorAll)) && (lt(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\f]' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + F + ")"),
                e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
            }), lt(function(e) {
                var t = a.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && lt(function(e) {
                n.disconnectedMatch = y.call(e, "div"),
                y.call(e, "[s!='']:x"),
                v.push("!=", W)
            }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return ! 0;
                return ! 1
            },
            S = t ?
            function(e, t) {
                if (e === t) return d = !0,
                0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r: (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === a || e.ownerDocument === w && b(w, e) ? -1 : t === a || t.ownerDocument === w && b(w, t) ? 1 : c ? q(c, e) - q(c, t) : 0 : 4 & r ? -1 : 1)
            }: function(e, t) {
                if (e === t) return d = !0,
                0;
                var n, r = 0,
                i = e.parentNode,
                o = t.parentNode,
                s = [e],
                u = [t];
                if (!i || !o) return e === a ? -1 : t === a ? 1 : i ? -1 : o ? 1 : c ? q(c, e) - q(c, t) : 0;
                if (i === o) return dt(e, t);
                n = e;
                while (n = n.parentNode) s.unshift(n);
                n = t;
                while (n = n.parentNode) u.unshift(n);
                while (s[r] === u[r]) r++;
                return r ? dt(s[r], u[r]) : s[r] === w ? -1 : u[r] === w ? 1 : 0
            },
            a) : f
        },
        at.matches = function(e, t) {
            return at(e, null, null, t)
        },
        at.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Q, "='$1']"), !(!n.matchesSelector || !g || v && v.test(t) || m && m.test(t))) try {
                var r = y.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch(i) {}
            return at(t, f, null, [e]).length > 0
        },
        at.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e),
            b(e, t)
        },
        at.attr = function(e, t) { (e.ownerDocument || e) !== f && p(e);
            var i = r.attrHandle[t.toLowerCase()],
            o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o: n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value: null
        },
        at.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        at.uniqueSort = function(e) {
            var t, r = [],
            i = 0,
            o = 0;
            if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), d) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null,
            e
        },
        i = at.getText = function(e) {
            var t, n = "",
            r = 0,
            o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else while (t = e[r++]) n += i(t);
            return n
        },
        r = at.selectors = {
            cacheLength: 50,
            createPseudo: ut,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(nt, rt),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(nt, rt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && J.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(nt, rt).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && N(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t: t ? (i += "", "=" === t ? i === n: "!=" === t ? i !== n: "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice( - n.length) === n: "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, u) {
                        var l, c, d, p, f, h, g = o !== a ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        y = !u && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    d = t;
                                    while (d = d[g]) if (s ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) return ! 1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? m.firstChild: m.lastChild], a && y) {
                                c = m[x] || (m[x] = {}),
                                l = c[e] || [],
                                f = l[0] === T && l[1],
                                p = l[0] === T && l[2],
                                d = f && m.childNodes[f];
                                while (d = ++f && d && d[g] || (p = f = 0) || h.pop()) if (1 === d.nodeType && ++p && d === t) {
                                    c[e] = [T, f, p];
                                    break
                                }
                            } else if (y && (l = (t[x] || (t[x] = {}))[e]) && l[0] === T) p = l[1];
                            else while (d = ++f && d && d[g] || (p = f = 0) || h.pop()) if ((s ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) && ++p && (y && ((d[x] || (d[x] = {}))[e] = [T, p]), d === t)) break;
                            return p -= i,
                            p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function(e, n) {
                        var r, o = i(e, t),
                        a = o.length;
                        while (a--) r = q(e, o[a]),
                        e[r] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: ut(function(e) {
                    var t = [],
                    n = [],
                    r = s(e.replace(z, "$1"));
                    return r[x] ? ut(function(e, t, n, i) {
                        var o, a = r(e, null, i, []),
                        s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: ut(function(e) {
                    return function(t) {
                        return at(e, t).length > 0
                    }
                }),
                contains: ut(function(e) {
                    return e = e.replace(nt, rt),
                    function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: ut(function(e) {
                    return U.test(e || "") || at.error("unsupported lang: " + e),
                    e = e.replace(nt, rt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = g ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! r.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ht(function() {
                    return [0]
                }),
                last: ht(function(e, t) {
                    return [t - 1]
                }),
                eq: ht(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: ht(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: ht(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: ht(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ht(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; ++r < t;) e.push(r);
                    return e
                })
            }
        },
        r.pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) r.pseudos[t] = pt(t);
        for (t in {
            submit: !0,
            reset: !0
        }) r.pseudos[t] = ft(t);
        function mt() {}
        mt.prototype = r.filters = r.pseudos,
        r.setFilters = new mt,
        a = at.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e,
            u = [],
            l = r.preFilter;
            while (s) { (!n || (i = I.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])),
                n = !1,
                (i = X.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(z, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) ! (i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length: s ? at.error(e) : k(e, u).slice(0)
        };
        function vt(e) {
            for (var t = 0,
            n = e.length,
            r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function yt(e, t, n) {
            var r = t.dir,
            i = n && "parentNode" === r,
            o = C++;
            return t.first ?
            function(t, n, o) {
                while (t = t[r]) if (1 === t.nodeType || i) return e(t, n, o)
            }: function(t, n, a) {
                var s, u, l = [T, o];
                if (a) {
                    while (t = t[r]) if ((1 === t.nodeType || i) && e(t, n, a)) return ! 0
                } else while (t = t[r]) if (1 === t.nodeType || i) {
                    if (u = t[x] || (t[x] = {}), (s = u[r]) && s[0] === T && s[1] === o) return l[2] = s[2];
                    if (u[r] = l, l[2] = e(t, n, a)) return ! 0
                }
            }
        }
        function bt(e) {
            return e.length > 1 ?
            function(t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function xt(e, t, n) {
            for (var r = 0,
            i = t.length; i > r; r++) at(e, t[r], n);
            return n
        }
        function wt(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }
        function Tt(e, t, n, r, i, o) {
            return r && !r[x] && (r = Tt(r)),
            i && !i[x] && (i = Tt(i, o)),
            ut(function(o, a, s, u) {
                var l, c, d, p = [],
                f = [],
                h = a.length,
                g = o || xt(t || "*", s.nodeType ? [s] : s, []),
                m = !e || !o && t ? g: wt(g, p, e, s, u),
                v = n ? i || (o ? e: h || r) ? [] : a: m;
                if (n && n(m, v, s, u), r) {
                    l = wt(v, f),
                    r(l, [], s, u),
                    c = l.length;
                    while (c--)(d = l[c]) && (v[f[c]] = !(m[f[c]] = d))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [],
                            c = v.length;
                            while (c--)(d = v[c]) && l.push(m[c] = d);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)(d = v[c]) && (l = i ? q(o, d) : p[c]) > -1 && (o[l] = !(a[l] = d))
                    }
                } else v = wt(v === a ? v.splice(h, v.length) : v),
                i ? i(null, a, v, u) : M.apply(a, v)
            })
        }
        function Ct(e) {
            for (var t, n, i, o = e.length,
            a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = yt(function(e) {
                return e === t
            },
            s, !0), d = yt(function(e) {
                return q(t, e) > -1
            },
            s, !0), p = [function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                return t = null,
                i
            }]; o > u; u++) if (n = r.relative[e[u].type]) p = [yt(bt(p), n)];
            else {
                if (n = r.filter[e[u].type].apply(null, e[u].matches), n[x]) {
                    for (i = ++u; o > i; i++) if (r.relative[e[i].type]) break;
                    return Tt(u > 1 && bt(p), u > 1 && vt(e.slice(0, u - 1).concat({
                        value: " " === e[u - 2].type ? "*": ""
                    })).replace(z, "$1"), n, i > u && Ct(e.slice(u, i)), o > i && Ct(e = e.slice(i)), o > i && vt(e))
                }
                p.push(n)
            }
            return bt(p)
        }
        function Nt(e, t) {
            var n = t.length > 0,
            i = e.length > 0,
            o = function(o, a, s, u, c) {
                var d, p, h, g = 0,
                m = "0",
                v = o && [],
                y = [],
                b = l,
                x = o || i && r.find.TAG("*", c),
                w = T += null == b ? 1 : Math.random() || .1,
                C = x.length;
                for (c && (l = a !== f && a); m !== C && null != (d = x[m]); m++) {
                    if (i && d) {
                        p = 0;
                        while (h = e[p++]) if (h(d, a, s)) {
                            u.push(d);
                            break
                        }
                        c && (T = w)
                    }
                    n && ((d = !h && d) && g--, o && v.push(d))
                }
                if (g += m, n && m !== g) {
                    p = 0;
                    while (h = t[p++]) h(v, y, a, s);
                    if (o) {
                        if (g > 0) while (m--) v[m] || y[m] || (y[m] = L.call(u));
                        y = wt(y)
                    }
                    M.apply(u, y),
                    c && !o && y.length > 0 && g + t.length > 1 && at.uniqueSort(u)
                }
                return c && (T = w, l = b),
                v
            };
            return n ? ut(o) : o
        }
        return s = at.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = E[e + " "];
            if (!o) {
                t || (t = a(e)),
                n = t.length;
                while (n--) o = Ct(t[n]),
                o[x] ? r.push(o) : i.push(o);
                o = E(e, Nt(i, r)),
                o.selector = e
            }
            return o
        },
        u = at.select = function(e, t, i, o) {
            var u, l, c, d, p, f = "function" == typeof e && e,
            h = !o && a(e = f.selector || e);
            if (i = i || [], 1 === h.length) {
                if (l = h[0] = h[0].slice(0), l.length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && g && r.relative[l[1].type]) {
                    if (t = (r.find.ID(c.matches[0].replace(nt, rt), t) || [])[0], !t) return i;
                    f && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                u = V.needsContext.test(e) ? 0 : l.length;
                while (u--) {
                    if (c = l[u], r.relative[d = c.type]) break;
                    if ((p = r.find[d]) && (o = p(c.matches[0].replace(nt, rt), et.test(l[0].type) && gt(t.parentNode) || t))) {
                        if (l.splice(u, 1), e = o.length && vt(l), !e) return M.apply(i, o),
                        i;
                        break
                    }
                }
            }
            return (f || s(e, h))(o, t, !g, i, et.test(e) && gt(t.parentNode) || t),
            i
        },
        n.sortStable = x.split("").sort(S).join("") === x,
        n.detectDuplicates = !!d,
        p(),
        n.sortDetached = lt(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }),
        lt(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width",
        function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && lt(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ct("value",
        function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        lt(function(e) {
            return null == e.getAttribute("disabled")
        }) || ct(F,
        function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        }),
        at
    } (e);
    p.find = y,
    p.expr = y.selectors,
    p.expr[":"] = p.expr.pseudos,
    p.unique = y.uniqueSort,
    p.text = y.getText,
    p.isXMLDoc = y.isXML,
    p.contains = y.contains;
    var b = p.expr.match.needsContext,
    x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
    function T(e, t, n) {
        if (p.isFunction(t)) return p.grep(e,
        function(e, r) {
            return !! t.call(e, r, e) !== n
        });
        if (t.nodeType) return p.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (w.test(t)) return p.filter(t, e, n);
            t = p.filter(t, e)
        }
        return p.grep(e,
        function(e) {
            return p.inArray(e, t) >= 0 !== n
        })
    }
    p.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? p.find.matchesSelector(r, e) ? [r] : [] : p.find.matches(e, p.grep(t,
        function(e) {
            return 1 === e.nodeType
        }))
    },
    p.fn.extend({
        find: function(e) {
            var t, n = [],
            r = this,
            i = r.length;
            if ("string" != typeof e) return this.pushStack(p(e).filter(function() {
                for (t = 0; i > t; t++) if (p.contains(r[t], this)) return ! 0
            }));
            for (t = 0; i > t; t++) p.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? p.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e: e,
            n
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !! T(this, "string" == typeof e && b.test(e) ? p(e) : e || [], !1).length
        }
    });
    var C, N = e.document,
    k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    E = p.fn.init = function(e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : k.exec(e), !n || !n[1] && t) return ! t || t.jquery ? (t || C).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t: N, !0)), x.test(n[1]) && p.isPlainObject(t)) for (n in t) p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (r = N.getElementById(n[2]), r && r.parentNode) {
                if (r.id !== n[2]) return C.find(e);
                this.length = 1,
                this[0] = r
            }
            return this.context = N,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? "undefined" != typeof C.ready ? C.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
    };
    E.prototype = p.fn,
    C = p(N);
    var S = /^(?:parents|prev(?:Until|All))/,
    j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    p.extend({
        dir: function(e, t, n) {
            var r = [],
            i = e[t];
            while (i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !p(i).is(n))) 1 === i.nodeType && r.push(i),
            i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    p.fn.extend({
        has: function(e) {
            var t, n = p(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (p.contains(this, n[t])) return ! 0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0,
            i = this.length,
            o = [], a = b.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? p.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    });
    function A(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return p.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return p.dir(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return p.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return p.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return p.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return p.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return p.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return p.sibling(e.firstChild)
        },
        contents: function(e) {
            return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: p.merge([], e.childNodes)
        }
    },
    function(e, t) {
        p.fn[e] = function(n, r) {
            var i = p.map(this, t, n);
            return "Until" !== e.slice( - 5) && (r = n),
            r && "string" == typeof r && (i = p.filter(r, i)),
            this.length > 1 && (j[e] || (i = p.unique(i)), S.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    });
    var D = /\S+/g,
    L = {};
    function H(e) {
        var t = L[e] = {};
        return p.each(e.match(D) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    p.Callbacks = function(e) {
        e = "string" == typeof e ? L[e] || H(e) : p.extend({},
        e);
        var t, n, r, i, o, a, s = [],
        u = !e.once && [],
        l = function(d) {
            for (n = e.memory && d, r = !0, o = a || 0, a = 0, i = s.length, t = !0; s && i > o; o++) if (s[o].apply(d[0], d[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break
            }
            t = !1,
            s && (u ? u.length && l(u.shift()) : n ? s = [] : c.disable())
        },
        c = {
            add: function() {
                if (s) {
                    var r = s.length; !
                    function o(t) {
                        p.each(t,
                        function(t, n) {
                            var r = p.type(n);
                            "function" === r ? e.unique && c.has(n) || s.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    } (arguments),
                    t ? i = s.length: n && (a = r, l(n))
                }
                return this
            },
            remove: function() {
                return s && p.each(arguments,
                function(e, n) {
                    var r;
                    while ((r = p.inArray(n, s, r)) > -1) s.splice(r, 1),
                    t && (i >= r && i--, o >= r && o--)
                }),
                this
            },
            has: function(e) {
                return e ? p.inArray(e, s) > -1 : !(!s || !s.length)
            },
            empty: function() {
                return s = [],
                i = 0,
                this
            },
            disable: function() {
                return s = u = n = void 0,
                this
            },
            disabled: function() {
                return ! s
            },
            lock: function() {
                return u = void 0,
                n || c.disable(),
                this
            },
            locked: function() {
                return ! u
            },
            fireWith: function(e, n) {
                return ! s || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : l(n)),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! r
            }
        };
        return c
    },
    p.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", p.Callbacks("once memory"), "resolved"], ["reject", "fail", p.Callbacks("once memory"), "rejected"], ["notify", "progress", p.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return p.Deferred(function(n) {
                        p.each(t,
                        function(t, o) {
                            var a = p.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && p.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? p.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            p.each(t,
            function(e, o) {
                var a = o[2],
                s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0,
            n = r.call(arguments),
            i = n.length,
            o = 1 !== i || e && p.isFunction(e.promise) ? i: 0,
            a = 1 === o ? e: p.Deferred(),
            s = function(e, t, n) {
                return function(i) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? r.call(arguments) : i,
                    n === u ? a.notifyWith(t, n) : --o || a.resolveWith(t, n)
                }
            },
            u,
            l,
            c;
            if (i > 1) for (u = new Array(i), l = new Array(i), c = new Array(i); i > t; t++) n[t] && p.isFunction(n[t].promise) ? n[t].promise().done(s(t, c, n)).fail(a.reject).progress(s(t, l, u)) : --o;
            return o || a.resolveWith(c, n),
            a.promise()
        }
    });
    var M;
    p.fn.ready = function(e) {
        return p.ready.promise().done(e),
        this
    },
    p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? p.readyWait++:p.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--p.readyWait: !p.isReady) {
                if (!N.body) return setTimeout(p.ready);
                p.isReady = !0,
                e !== !0 && --p.readyWait > 0 || (M.resolveWith(N, [p]), p.fn.triggerHandler && (p(N).triggerHandler("ready"), p(N).off("ready")))
            }
        }
    });
    function _() {
        N.addEventListener ? (N.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (N.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
    }
    function q() { (N.addEventListener || "load" === event.type || "complete" === N.readyState) && (_(), p.ready())
    }
    p.ready.promise = function(t) {
        if (!M) if (M = p.Deferred(), "complete" === N.readyState) setTimeout(p.ready);
        else if (N.addEventListener) N.addEventListener("DOMContentLoaded", q, !1),
        e.addEventListener("load", q, !1);
        else {
            N.attachEvent("onreadystatechange", q),
            e.attachEvent("onload", q);
            var n = !1;
            try {
                n = null == e.frameElement && N.documentElement
            } catch(r) {}
            n && n.doScroll && !
            function i() {
                if (!p.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(e) {
                        return setTimeout(i, 50)
                    }
                    _(),
                    p.ready()
                }
            } ()
        }
        return M.promise(t)
    };
    var F = "undefined",
    O;
    for (O in p(c)) break;
    c.ownLast = "0" !== O,
    c.inlineBlockNeedsLayout = !1,
    p(function() {
        var e, t, n, r;
        n = N.getElementsByTagName("body")[0],
        n && n.style && (t = N.createElement("div"), r = N.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== F && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", c.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
    }),
    function() {
        var e = N.createElement("div");
        if (null == c.deleteExpando) {
            c.deleteExpando = !0;
            try {
                delete e.test
            } catch(t) {
                c.deleteExpando = !1
            }
        }
        e = null
    } (),
    p.acceptData = function(e) {
        var t = p.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var B = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    R = /([A-Z])/g;
    function P(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(R, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null: +n + "" === n ? +n: B.test(n) ? p.parseJSON(n) : n
                } catch(i) {}
                p.data(e, t, n)
            } else n = void 0
        }
        return n
    }
    function W(e) {
        var t;
        for (t in e) if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function $(e, t, r, i) {
        if (p.acceptData(e)) {
            var o, a, s = p.expando,
            u = e.nodeType,
            l = u ? p.cache: e,
            c = u ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || void 0 !== r || "string" != typeof t) return c || (c = u ? e[s] = n.pop() || p.guid++:s),
            l[c] || (l[c] = u ? {}: {
                toJSON: p.noop
            }),
            ("object" == typeof t || "function" == typeof t) && (i ? l[c] = p.extend(l[c], t) : l[c].data = p.extend(l[c].data, t)),
            a = l[c],
            i || (a.data || (a.data = {}), a = a.data),
            void 0 !== r && (a[p.camelCase(t)] = r),
            "string" == typeof t ? (o = a[t], null == o && (o = a[p.camelCase(t)])) : o = a,
            o
        }
    }
    function z(e, t, n) {
        if (p.acceptData(e)) {
            var r, i, o = e.nodeType,
            a = o ? p.cache: e,
            s = o ? e[p.expando] : p.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in r ? t = [t] : (t = p.camelCase(t), t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !W(r) : !p.isEmptyObject(r)) return
                } (n || (delete a[s].data, W(a[s]))) && (o ? p.cleanData([e], !0) : c.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    p.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando],
            !!e && !W(e)
        },
        data: function(e, t, n) {
            return $(e, t, n)
        },
        removeData: function(e, t) {
            return z(e, t)
        },
        _data: function(e, t, n) {
            return $(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return z(e, t, !0)
        }
    }),
    p.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
            a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = p.data(o), 1 === o.nodeType && !p._data(o, "parsedAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = p.camelCase(r.slice(5)), P(o, r, i[r])));
                    p._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                p.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                p.data(this, e, t)
            }) : o ? P(o, e, p.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                p.removeData(this, e)
            })
        }
    }),
    p.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = p._data(e, t), n && (!r || p.isArray(n) ? r = p._data(e, t, p.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = p.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = p._queueHooks(e, t),
            a = function() {
                p.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return p._data(e, n) || p._data(e, n, {
                empty: p.Callbacks("once memory").add(function() {
                    p._removeData(e, t + "queue"),
                    p._removeData(e, n)
                })
            })
        }
    }),
    p.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--),
            arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                p.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
            i = p.Deferred(),
            o = this,
            a = this.length,
            s = function() {--r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0),
            e = e || "fx";
            while (a--) n = p._data(o[a], e + "queueHooks"),
            n && n.empty && (r++, n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var I = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    X = ["Top", "Right", "Bottom", "Left"],
    Q = function(e, t) {
        return e = t || e,
        "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
    },
    J = p.access = function(e, t, n, r, i, o, a) {
        var s = 0,
        u = e.length,
        l = null == n;
        if ("object" === p.type(n)) {
            i = !0;
            for (s in n) p.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, p.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(p(e), n)
        })), t)) for (; u > s; s++) t(e[s], n, a ? r: r.call(e[s], s, t(e[s], n)));
        return i ? e: l ? t.call(e) : u ? t(e[0], n) : o
    },
    U = /^(?:checkbox|radio)$/i; !
    function() {
        var e = N.createElement("input"),
        t = N.createElement("div"),
        n = N.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c.leadingWhitespace = 3 === t.firstChild.nodeType, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !!t.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== N.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), c.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick",
        function() {
            c.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == c.deleteExpando) {
            c.deleteExpando = !0;
            try {
                delete t.test
            } catch(r) {
                c.deleteExpando = !1
            }
        }
    } (),
    function() {
        var t, n, r = N.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + t,
        (c[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), c[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    } ();
    var V = /^(?:input|select|textarea)$/i,
    G = /^key/,
    Y = /^(?:mouse|pointer|contextmenu)|click/,
    K = /^(?:focusinfocus|focusoutblur)$/,
    Z = /^([^.]*)(?:\.(.+)|)$/;
    function et() {
        return ! 0
    }
    function tt() {
        return ! 1
    }
    function nt() {
        try {
            return N.activeElement
        } catch(e) {}
    }
    p.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, h, g, m, v = p._data(e);
            if (v) {
                n.handler && (u = n, n = u.handler, i = u.selector),
                n.guid || (n.guid = p.guid++),
                (a = v.events) || (a = v.events = {}),
                (c = v.handle) || (c = v.handle = function(e) {
                    return typeof p === F || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(c.elem, arguments)
                },
                c.elem = e),
                t = (t || "").match(D) || [""],
                s = t.length;
                while (s--) o = Z.exec(t[s]) || [],
                h = m = o[1],
                g = (o[2] || "").split(".").sort(),
                h && (l = p.event.special[h] || {},
                h = (i ? l.delegateType: l.bindType) || h, l = p.event.special[h] || {},
                d = p.extend({
                    type: h,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && p.expr.match.needsContext.test(i),
                    namespace: g.join(".")
                },
                u), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, g, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), p.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, h, g, m, v = p.hasData(e) && p._data(e);
            if (v && (c = v.events)) {
                t = (t || "").match(D) || [""],
                l = t.length;
                while (l--) if (s = Z.exec(t[l]) || [], h = m = s[1], g = (s[2] || "").split(".").sort(), h) {
                    d = p.event.special[h] || {},
                    h = (r ? d.delegateType: d.bindType) || h,
                    f = c[h] || [],
                    s = s[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                    u = o = f.length;
                    while (o--) a = f[o],
                    !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                    u && !f.length && (d.teardown && d.teardown.call(e, g, v.handle) !== !1 || p.removeEvent(e, h, v.handle), delete c[h])
                } else for (h in c) p.event.remove(e, h + t[l], n, r, !0);
                p.isEmptyObject(c) && (delete v.handle, p._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, c, d, f, h = [r || N],
            g = l.call(t, "type") ? t.type: t,
            m = l.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = d = r = r || N, 3 !== r.nodeType && 8 !== r.nodeType && !K.test(g + p.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), a = g.indexOf(":") < 0 && "on" + g, t = t[p.expando] ? t: new p.Event(g, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : p.makeArray(n, [t]), c = p.event.special[g] || {},
            i || !c.trigger || c.trigger.apply(r, n) !== !1)) {
                if (!i && !c.noBubble && !p.isWindow(r)) {
                    for (u = c.delegateType || g, K.test(u + g) || (s = s.parentNode); s; s = s.parentNode) h.push(s),
                    d = s;
                    d === (r.ownerDocument || N) && h.push(d.defaultView || d.parentWindow || e)
                }
                f = 0;
                while ((s = h[f++]) && !t.isPropagationStopped()) t.type = f > 1 ? u: c.bindType || g,
                o = (p._data(s, "events") || {})[t.type] && p._data(s, "handle"),
                o && o.apply(s, n),
                o = a && s[a],
                o && o.apply && p.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = g, !i && !t.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && p.acceptData(r) && a && r[g] && !p.isWindow(r)) {
                    d = r[a],
                    d && (r[a] = null),
                    p.event.triggered = g;
                    try {
                        r[g]()
                    } catch(v) {}
                    p.event.triggered = void 0,
                    d && (r[a] = d)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t, n, i, o, a, s = [],
            u = r.call(arguments),
            l = (p._data(this, "events") || {})[e.type] || [],
            c = p.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = p.event.handlers.call(this, e, l),
                t = 0;
                while ((o = s[t++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem,
                    a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((p.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
            s = t.delegateCount,
            u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (i = [], o = 0; s > o; o++) r = t[o],
                n = r.selector + " ",
                void 0 === i[n] && (i[n] = r.needsContext ? p(n, this).index(u) >= 0 : p.find(n, this, null, [u]).length),
                i[n] && i.push(r);
                i.length && a.push({
                    elem: u,
                    handlers: i
                })
            }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        fix: function(e) {
            if (e[p.expando]) return e;
            var t, n, r, i = e.type,
            o = e,
            a = this.fixHooks[i];
            a || (this.fixHooks[i] = a = Y.test(i) ? this.mouseHooks: G.test(i) ? this.keyHooks: {}),
            r = a.props ? this.props.concat(a.props) : this.props,
            e = new p.Event(o),
            t = r.length;
            while (t--) n = r[t],
            e[n] = o[n];
            return e.target || (e.target = o.srcElement || N),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || N, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement: a),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== nt() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === nt() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = p.extend(new p.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    p.removeEvent = N.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === F && (e[r] = null), e.detachEvent(r, n))
    },
    p.Event = function(e, t) {
        return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? et: tt) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    },
    p.Event.prototype = {
        isDefaultPrevented: tt,
        isPropagationStopped: tt,
        isImmediatePropagationStopped: tt,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = et,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = et,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = et,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                o = e.handleObj;
                return (!i || i !== r && !p.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    c.submitBubbles || (p.event.special.submit = {
        setup: function() {
            return p.nodeName(this, "form") ? !1 : void p.event.add(this, "click._submit keypress._submit",
            function(e) {
                var t = e.target,
                n = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form: void 0;
                n && !p._data(n, "submitBubbles") && (p.event.add(n, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), p._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return p.nodeName(this, "form") ? !1 : void p.event.remove(this, "._submit")
        }
    }),
    c.changeBubbles || (p.event.special.change = {
        setup: function() {
            return V.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (p.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), p.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                p.event.simulate("change", this, e, !0)
            })), !1) : void p.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                V.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e, !0)
                }), p._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return p.event.remove(this, "._change"),
            !V.test(this.nodeName)
        }
    }),
    c.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e), !0)
        };
        p.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                i = p._data(r, t);
                i || r.addEventListener(e, n, !0),
                p._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                i = p._data(r, t) - 1;
                i ? p._data(r, t, i) : (r.removeEventListener(e, n, !0), p._removeData(r, t))
            }
        }
    }),
    p.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = tt;
            else if (!r) return this;
            return 1 === i && (a = r, r = function(e) {
                return p().off(e),
                a.apply(this, arguments)
            },
            r.guid = a.guid || (a.guid = p.guid++)),
            this.each(function() {
                p.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
            p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0),
            n === !1 && (n = tt),
            this.each(function() {
                p.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                p.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? p.event.trigger(e, t, n, !0) : void 0
        }
    });
    function rt(e) {
        var t = it.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }
    var it = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    ot = / jQuery\d+="(?:null|\d+)"/g,
    at = new RegExp("<(?:" + it + ")[\\s/>]", "i"),
    st = /^\s+/,
    ut = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    lt = /<([\w:]+)/,
    ct = /<tbody/i,
    dt = /<|&#?\w+;/,
    pt = /<(?:script|style|link)/i,
    ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ht = /^$|\/(?:java|ecma)script/i,
    gt = /^true\/(.*)/,
    mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    vt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    yt = rt(N),
    bt = yt.appendChild(N.createElement("div"));
    vt.optgroup = vt.option,
    vt.tbody = vt.tfoot = vt.colgroup = vt.caption = vt.thead,
    vt.th = vt.td;
    function xt(e, t) {
        var n, r, i = 0,
        o = typeof e.getElementsByTagName !== F ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== F ? e.querySelectorAll(t || "*") : void 0;
        if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) ! t || p.nodeName(r, t) ? o.push(r) : p.merge(o, xt(r, t));
        return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], o) : o
    }
    function wt(e) {
        U.test(e.type) && (e.defaultChecked = e.checked)
    }
    function Tt(e, t) {
        return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Ct(e) {
        return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function Nt(e) {
        var t = gt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function kt(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) p._data(n, "globalEval", !t || p._data(t[r], "globalEval"))
    }
    function Et(e, t) {
        if (1 === t.nodeType && p.hasData(e)) {
            var n, r, i, o = p._data(e),
            a = p._data(t, o),
            s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) p.event.add(t, n, s[n][r])
            }
            a.data && (a.data = p.extend({},
            a.data))
        }
    }
    function St(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !c.noCloneEvent && t[p.expando]) {
                i = p._data(t);
                for (r in i.events) p.removeEvent(t, r, i.handle);
                t.removeAttribute(p.expando)
            }
            "script" === n && t.text !== e.text ? (Ct(t).text = e.text, Nt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && U.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    p.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = p.contains(e.ownerDocument, e);
            if (c.html5Clone || p.isXMLDoc(e) || !at.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (bt.innerHTML = e.outerHTML, bt.removeChild(o = bt.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e))) for (r = xt(o), s = xt(e), a = 0; null != (i = s[a]); ++a) r[a] && St(i, r[a]);
            if (t) if (n) for (s = s || xt(e), r = r || xt(o), a = 0; null != (i = s[a]); a++) Et(i, r[a]);
            else Et(e, o);
            return r = xt(o, "script"),
            r.length > 0 && kt(r, !u && xt(e, "script")),
            r = s = i = null,
            o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, d, f = e.length,
            h = rt(t), g = [], m = 0; f > m; m++) if (o = e[m], o || 0 === o) if ("object" === p.type(o)) p.merge(g, o.nodeType ? [o] : o);
            else if (dt.test(o)) {
                s = s || h.appendChild(t.createElement("div")),
                u = (lt.exec(o) || ["", ""])[1].toLowerCase(),
                d = vt[u] || vt._default,
                s.innerHTML = d[1] + o.replace(ut, "<$1></$2>") + d[2],
                i = d[0];
                while (i--) s = s.lastChild;
                if (!c.leadingWhitespace && st.test(o) && g.push(t.createTextNode(st.exec(o)[0])), !c.tbody) {
                    o = "table" !== u || ct.test(o) ? "<table>" !== d[1] || ct.test(o) ? 0 : s: s.firstChild,
                    i = o && o.childNodes.length;
                    while (i--) p.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
                }
                p.merge(g, s.childNodes),
                s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = h.lastChild
            } else g.push(t.createTextNode(o));
            s && h.removeChild(s),
            c.appendChecked || p.grep(xt(g, "input"), wt),
            m = 0;
            while (o = g[m++]) if ((!r || -1 === p.inArray(o, r)) && (a = p.contains(o.ownerDocument, o), s = xt(h.appendChild(o), "script"), a && kt(s), n)) {
                i = 0;
                while (o = s[i++]) ht.test(o.type || "") && n.push(o)
            }
            return s = null,
            h
        },
        cleanData: function(e, t) {
            for (var r, i, o, a, s = 0,
            u = p.expando,
            l = p.cache,
            d = c.deleteExpando,
            f = p.event.special; null != (r = e[s]); s++) if ((t || p.acceptData(r)) && (o = r[u], a = o && l[o])) {
                if (a.events) for (i in a.events) f[i] ? p.event.remove(r, i) : p.removeEvent(r, i, a.handle);
                l[o] && (delete l[o], d ? delete r[u] : typeof r.removeAttribute !== F ? r.removeAttribute(u) : r[u] = null, n.push(o))
            }
        }
    }),
    p.fn.extend({
        text: function(e) {
            return J(this,
            function(e) {
                return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(e))
            },
            null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Tt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Tt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? p.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || p.cleanData(xt(n)),
            n.parentNode && (t && p.contains(n.ownerDocument, n) && kt(xt(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && p.cleanData(xt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && p.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return p.clone(this, e, t)
            })
        },
        html: function(e) {
            return J(this,
            function(e) {
                var t = this[0] || {},
                n = 0,
                r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ot, "") : void 0;
                if (! ("string" != typeof e || pt.test(e) || !c.htmlSerialize && at.test(e) || !c.leadingWhitespace && st.test(e) || vt[(lt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(ut, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {},
                        1 === t.nodeType && (p.cleanData(xt(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch(i) {}
                }
                t && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments,
            function(t) {
                e = this.parentNode,
                p.cleanData(xt(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this: this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = i.apply([], e);
            var n, r, o, a, s, u, l = 0,
            d = this.length,
            f = this,
            h = d - 1,
            g = e[0],
            m = p.isFunction(g);
            if (m || d > 1 && "string" == typeof g && !c.checkClone && ft.test(g)) return this.each(function(n) {
                var r = f.eq(n);
                m && (e[0] = g.call(this, n, r.html())),
                r.domManip(e, t)
            });
            if (d && (u = p.buildFragment(e, this[0].ownerDocument, !1, this), n = u.firstChild, 1 === u.childNodes.length && (u = n), n)) {
                for (a = p.map(xt(u, "script"), Ct), o = a.length; d > l; l++) r = u,
                l !== h && (r = p.clone(r, !0, !0), o && p.merge(a, xt(r, "script"))),
                t.call(this[l], r, l);
                if (o) for (s = a[a.length - 1].ownerDocument, p.map(a, Nt), l = 0; o > l; l++) r = a[l],
                ht.test(r.type || "") && !p._data(r, "globalEval") && p.contains(s, r) && (r.src ? p._evalUrl && p._evalUrl(r.src) : p.globalEval((r.text || r.textContent || r.innerHTML || "").replace(mt, "")));
                u = n = null
            }
            return this
        }
    }),
    p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        p.fn[e] = function(e) {
            for (var n, r = 0,
            i = [], a = p(e), s = a.length - 1; s >= r; r++) n = r === s ? this: this.clone(!0),
            p(a[r])[t](n),
            o.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var jt, At = {};
    function Dt(t, n) {
        var r, i = p(n.createElement(t)).appendTo(n.body),
        o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display: p.css(i[0], "display");
        return i.detach(),
        o
    }
    function Lt(e) {
        var t = N,
        n = At[e];
        return n || (n = Dt(e, t), "none" !== n && n || (jt = (jt || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (jt[0].contentWindow || jt[0].contentDocument).document, t.write(), t.close(), n = Dt(e, t), jt.detach()), At[e] = n),
        n
    } !
    function() {
        var e;
        c.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = N.getElementsByTagName("body")[0],
            n && n.style ? (t = N.createElement("div"), r = N.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== F && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(N.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    } ();
    var Ht = /^margin/,
    Mt = new RegExp("^(" + I + ")(?!px)[a-z%]+$", "i"),
    _t,
    qt,
    Ft = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (_t = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    },
    qt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || _t(e),
        a = n ? n.getPropertyValue(t) || n[t] : void 0,
        n && ("" !== a || p.contains(e.ownerDocument, e) || (a = p.style(e, t)), Mt.test(a) && Ht.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)),
        void 0 === a ? a: a + ""
    }) : N.documentElement.currentStyle && (_t = function(e) {
        return e.currentStyle
    },
    qt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || _t(e),
        a = n ? n[t] : void 0,
        null == a && s && s[t] && (a = s[t]),
        Mt.test(a) && !Ft.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em": a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)),
        void 0 === a ? a: a + "" || "auto"
    });
    function Ot(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get: (this.get = t).apply(this, arguments)
            }
        }
    } !
    function() {
        var t, n, r, i, o, a, s;
        if (t = N.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = r && r.style) {
            n.cssText = "float:left;opacity:.5",
            c.opacity = "0.5" === n.opacity,
            c.cssFloat = !!n.cssFloat,
            t.style.backgroundClip = "content-box",
            t.cloneNode(!0).style.backgroundClip = "",
            c.clearCloneStyle = "content-box" === t.style.backgroundClip,
            c.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing,
            p.extend(c, {
                reliableHiddenOffsets: function() {
                    return null == a && u(),
                    a
                },
                boxSizingReliable: function() {
                    return null == o && u(),
                    o
                },
                pixelPosition: function() {
                    return null == i && u(),
                    i
                },
                reliableMarginRight: function() {
                    return null == s && u(),
                    s
                }
            });
            function u() {
                var t, n, r, u;
                n = N.getElementsByTagName("body")[0],
                n && n.style && (t = N.createElement("div"), r = N.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = o = !1, s = !0, e.getComputedStyle && (i = "1%" !== (e.getComputedStyle(t, null) || {}).top, o = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, u = t.appendChild(N.createElement("div")), u.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", u.style.marginRight = u.style.width = "0", t.style.width = "1px", s = !parseFloat((e.getComputedStyle(u, null) || {}).marginRight), t.removeChild(u)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u = t.getElementsByTagName("td"), u[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === u[0].offsetHeight, a && (u[0].style.display = "", u[1].style.display = "none", a = 0 === u[0].offsetHeight), n.removeChild(r))
            }
        }
    } (),
    p.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o],
        e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
    };
    var Bt = /alpha\([^)]*\)/i,
    Rt = /opacity\s*=\s*([^)]*)/,
    Pt = /^(none|table(?!-c[ea]).+)/,
    Wt = new RegExp("^(" + I + ")(.*)$", "i"),
    $t = new RegExp("^([+-])=(" + I + ")", "i"),
    zt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    It = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    Xt = ["Webkit", "O", "Moz", "ms"];
    function Qt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = Xt.length;
        while (i--) if (t = Xt[i] + n, t in e) return t;
        return r
    }
    function Jt(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a],
        r.style && (o[a] = p._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Q(r) && (o[a] = p._data(r, "olddisplay", Lt(r.nodeName)))) : (i = Q(r), (n && "none" !== n || !i) && p._data(r, "olddisplay", i ? n: p.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a],
        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "": "none"));
        return e
    }
    function Ut(e, t, n) {
        var r = Wt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function Vt(e, t, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += p.css(e, n + X[o], !0, i)),
        r ? ("content" === n && (a -= p.css(e, "padding" + X[o], !0, i)), "margin" !== n && (a -= p.css(e, "border" + X[o] + "Width", !0, i))) : (a += p.css(e, "padding" + X[o], !0, i), "padding" !== n && (a += p.css(e, "border" + X[o] + "Width", !0, i)));
        return a
    }
    function Gt(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = _t(e),
        a = c.boxSizing && "border-box" === p.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = qt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Mt.test(i)) return i;
            r = a && (c.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + Vt(e, t, n || (a ? "border": "content"), r, o) + "px"
    }
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = qt(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": c.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = p.camelCase(t),
                u = e.style;
                if (t = p.cssProps[s] || (p.cssProps[s] = Qt(u, s)), a = p.cssHooks[t] || p.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i: u[t];
                if (o = typeof n, "string" === o && (i = $t.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || p.cssNumber[s] || (n += "px"), c.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    u[t] = n
                } catch(l) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = p.camelCase(t);
            return t = p.cssProps[s] || (p.cssProps[s] = Qt(e.style, s)),
            a = p.cssHooks[t] || p.cssHooks[s],
            a && "get" in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = qt(e, t, r)),
            "normal" === o && t in It && (o = It[t]),
            "" === n || n ? (i = parseFloat(o), n === !0 || p.isNumeric(i) ? i || 0 : o) : o
        }
    }),
    p.each(["height", "width"],
    function(e, t) {
        p.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Pt.test(p.css(e, "display")) && 0 === e.offsetWidth ? p.swap(e, zt,
                function() {
                    return Gt(e, t, r)
                }) : Gt(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && _t(e);
                return Ut(e, n, r ? Vt(e, t, r, c.boxSizing && "border-box" === p.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    c.opacity || (p.cssHooks.opacity = {
        get: function(e, t) {
            return Rt.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === p.trim(o.replace(Bt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Bt.test(o) ? o.replace(Bt, i) : o + " " + i)
        }
    }),
    p.cssHooks.marginRight = Ot(c.reliableMarginRight,
    function(e, t) {
        return t ? p.swap(e, {
            display: "inline-block"
        },
        qt, [e, "marginRight"]) : void 0
    }),
    p.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + X[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        Ht.test(e) || (p.cssHooks[e + t].set = Ut)
    }),
    p.fn.extend({
        css: function(e, t) {
            return J(this,
            function(e, t, n) {
                var r, i, o = {},
                a = 0;
                if (p.isArray(t)) {
                    for (r = _t(e), i = t.length; i > a; a++) o[t[a]] = p.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? p.style(e, t, n) : p.css(e, t)
            },
            e, t, arguments.length > 1)
        },
        show: function() {
            return Jt(this, !0)
        },
        hide: function() {
            return Jt(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Q(this) ? p(this).show() : p(this).hide()
            })
        }
    });
    function Yt(e, t, n, r, i) {
        return new Yt.prototype.init(e, t, n, r, i)
    }
    p.Tween = Yt,
    Yt.prototype = {
        constructor: Yt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (p.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = Yt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yt.propHooks[this.prop];
            return this.pos = t = this.options.duration ? p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Yt.propHooks._default.set(this),
            this
        }
    },
    Yt.prototype.init.prototype = Yt.prototype,
    Yt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = p.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    p.fx = Yt.prototype.init,
    p.fx.step = {};
    var Kt, Zt, en = /^(?:toggle|show|hide)$/,
    tn = new RegExp("^(?:([+-])=|)(" + I + ")([a-z%]*)$", "i"),
    nn = /queueHooks$/,
    rn = [ln],
    on = {
        "*": [function(e, t) {
            var n = this.createTween(e, t),
            r = n.cur(),
            i = tn.exec(t),
            o = i && i[3] || (p.cssNumber[e] ? "": "px"),
            a = (p.cssNumber[e] || "px" !== o && +r) && tn.exec(p.css(n.elem, e)),
            s = 1,
            u = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                i = i || [],
                a = +r || 1;
                do s = s || ".5",
                a /= s,
                p.style(n.elem, e, a + o);
                while (s !== (s = n.cur() / r) && 1 !== s && --u)
            }
            return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }]
    };
    function an() {
        return setTimeout(function() {
            Kt = void 0
        }),
        Kt = p.now()
    }
    function sn(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = X[i],
        r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function un(e, t, n) {
        for (var r, i = (on[t] || []).concat(on["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r
    }
    function ln(e, t, n) {
        var r, i, o, a, s, u, l, d, f = this,
        h = {},
        g = e.style,
        m = e.nodeType && Q(e),
        v = p._data(e, "fxshow");
        n.queue || (s = p._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--,
                p.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [g.overflow, g.overflowX, g.overflowY], l = p.css(e, "display"), d = "none" === l ? p._data(e, "olddisplay") || Lt(e.nodeName) : l, "inline" === d && "none" === p.css(e, "float") && (c.inlineBlockNeedsLayout && "inline" !== Lt(e.nodeName) ? g.zoom = 1 : g.display = "inline-block")),
        n.overflow && (g.overflow = "hidden", c.shrinkWrapBlocks() || f.always(function() {
            g.overflow = n.overflow[0],
            g.overflowX = n.overflow[1],
            g.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], en.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (m ? "hide": "show")) {
                if ("show" !== i || !v || void 0 === v[r]) continue;
                m = !0
            }
            h[r] = v && v[r] || p.style(e, r)
        } else l = void 0;
        if (p.isEmptyObject(h))"inline" === ("none" === l ? Lt(e.nodeName) : l) && (g.display = l);
        else {
            v ? "hidden" in v && (m = v.hidden) : v = p._data(e, "fxshow", {}),
            o && (v.hidden = !m),
            m ? p(e).show() : f.done(function() {
                p(e).hide()
            }),
            f.done(function() {
                var t;
                p._removeData(e, "fxshow");
                for (t in h) p.style(e, t, h[t])
            });
            for (r in h) a = un(m ? v[r] : 0, r, f),
            r in v || (v[r] = a.start, m && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function cn(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = p.camelCase(n), i = t[r], o = e[n], p.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = p.cssHooks[r], a && "expand" in a) {
            o = a.expand(o),
            delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }
    function dn(e, t, n) {
        var r, i, o = 0,
        a = rn.length,
        s = p.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (i) return ! 1;
            for (var t = Kt || an(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
            1 > o && u ? n: (s.resolveWith(e, [l]), !1)
        },
        l = s.promise({
            elem: e,
            props: p.extend({},
            t),
            opts: p.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Kt || an(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = p.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? l.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }),
        c = l.props;
        for (cn(c, l.opts.specialEasing); a > o; o++) if (r = rn[o].call(l, e, c, l.opts)) return r;
        return p.map(c, un, l),
        p.isFunction(l.opts.start) && l.opts.start.call(e, l),
        p.fx.timer(p.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    p.Animation = p.extend(dn, {
        tweener: function(e, t) {
            p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0,
            i = e.length; i > r; r++) n = e[r],
            on[n] = on[n] || [],
            on[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? rn.unshift(e) : rn.push(e)
        }
    }),
    p.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? p.extend({},
        e) : {
            complete: n || !n && t || p.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !p.isFunction(t) && t
        };
        return r.duration = p.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            p.isFunction(r.old) && r.old.call(this),
            r.queue && p.dequeue(this, r.queue)
        },
        r
    },
    p.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Q).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = p.isEmptyObject(e),
            o = p.speed(t, n, r),
            a = function() {
                var t = dn(this, p.extend({},
                e), o); (i || p._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                i = null != e && e + "queueHooks",
                o = p.timers,
                a = p._data(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && nn.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); (t || !n) && p.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = p._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = p.timers,
                a = r ? r.length: 0;
                for (n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    p.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = p.fn[t];
        p.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(sn(t, !0), e, r, i)
        }
    }),
    p.each({
        slideDown: sn("show"),
        slideUp: sn("hide"),
        slideToggle: sn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        p.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    p.timers = [],
    p.fx.tick = function() {
        var e, t = p.timers,
        n = 0;
        for (Kt = p.now(); n < t.length; n++) e = t[n],
        e() || t[n] !== e || t.splice(n--, 1);
        t.length || p.fx.stop(),
        Kt = void 0
    },
    p.fx.timer = function(e) {
        p.timers.push(e),
        e() ? p.fx.start() : p.timers.pop()
    },
    p.fx.interval = 13,
    p.fx.start = function() {
        Zt || (Zt = setInterval(p.fx.tick, p.fx.interval))
    },
    p.fx.stop = function() {
        clearInterval(Zt),
        Zt = null
    },
    p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    p.fn.delay = function(e, t) {
        return e = p.fx ? p.fx.speeds[e] || e: e,
        t = t || "fx",
        this.queue(t,
        function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    },
    function() {
        var e, t, n, r, i;
        t = N.createElement("div"),
        t.setAttribute("className", "t"),
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        r = t.getElementsByTagName("a")[0],
        n = N.createElement("select"),
        i = n.appendChild(N.createElement("option")),
        e = t.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px",
        c.getSetAttribute = "t" !== t.className,
        c.style = /top/.test(r.getAttribute("style")),
        c.hrefNormalized = "/a" === r.getAttribute("href"),
        c.checkOn = !!e.value,
        c.optSelected = i.selected,
        c.enctype = !!N.createElement("form").enctype,
        n.disabled = !0,
        c.optDisabled = !i.disabled,
        e = N.createElement("input"),
        e.setAttribute("value", ""),
        c.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        c.radioValue = "t" === e.value
    } ();
    var pn = /\r/g;
    p.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            if (arguments.length) return r = p.isFunction(e),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, p(this).val()) : e, null == i ? i = "": "number" == typeof i ? i += "": p.isArray(i) && (i = p.map(i,
                function(e) {
                    return null == e ? "": e + ""
                })), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            });
            if (i) return t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()],
            t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n: (n = i.value, "string" == typeof n ? n.replace(pn, "") : null == n ? "": n)
        }
    }),
    p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return null != t ? t: p.trim(p.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || 0 > i,
                    a = o ? null: [], s = o ? i + 1 : r.length, u = 0 > i ? s: o ? i: 0; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (c.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && p.nodeName(n.parentNode, "optgroup"))) {
                        if (t = p(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                    o = p.makeArray(t),
                    a = i.length;
                    while (a--) if (r = i[a], p.inArray(p.valHooks.option.get(r), o) >= 0) try {
                        r.selected = n = !0
                    } catch(s) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    p.each(["radio", "checkbox"],
    function() {
        p.valHooks[this] = {
            set: function(e, t) {
                return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) >= 0 : void 0
            }
        },
        c.checkOn || (p.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var fn, hn, gn = p.expr.attrHandle,
    mn = /^(?:checked|selected)$/i,
    vn = c.getSetAttribute,
    yn = c.input;
    p.fn.extend({
        attr: function(e, t) {
            return J(this, p.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                p.removeAttr(this, e)
            })
        }
    }),
    p.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === F ? p.prop(e, t, n) : (1 === o && p.isXMLDoc(e) || (t = t.toLowerCase(), r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? hn: fn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i: (i = p.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i: (e.setAttribute(t, n + ""), n) : void p.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(D);
            if (o && 1 === e.nodeType) while (n = o[i++]) r = p.propFix[n] || n,
            p.expr.match.bool.test(n) ? yn && vn || !mn.test(n) ? e[r] = !1 : e[p.camelCase("default-" + n)] = e[r] = !1 : p.attr(e, n, ""),
            e.removeAttribute(vn ? n: r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!c.radioValue && "radio" === t && p.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    hn = {
        set: function(e, t, n) {
            return t === !1 ? p.removeAttr(e, n) : yn && vn || !mn.test(n) ? e.setAttribute(!vn && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    p.each(p.expr.match.bool.source.match(/\w+/g),
    function(e, t) {
        var n = gn[t] || p.find.attr;
        gn[t] = yn && vn || !mn.test(t) ?
        function(e, t, r) {
            var i, o;
            return r || (o = gn[t], gn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, gn[t] = o),
            i
        }: function(e, t, n) {
            return n ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    yn && vn || (p.attrHooks.value = {
        set: function(e, t, n) {
            return p.nodeName(e, "input") ? void(e.defaultValue = t) : fn && fn.set(e, t, n)
        }
    }),
    vn || (fn = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
            r.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t: void 0
        }
    },
    gn.id = gn.name = gn.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value: null
    },
    p.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value: void 0
        },
        set: fn.set
    },
    p.attrHooks.contenteditable = {
        set: function(e, t, n) {
            fn.set(e, "" === t ? !1 : t, n)
        }
    },
    p.each(["width", "height"],
    function(e, t) {
        p.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })),
    c.style || (p.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var bn = /^(?:input|select|textarea|button|object)$/i,
    xn = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return J(this, p.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = p.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch(t) {}
            })
        }
    }),
    p.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !p.isXMLDoc(e),
            o && (t = p.propFix[t] || t, i = p.propHooks[t]),
            void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: e[t] = n: i && "get" in i && null !== (r = i.get(e, t)) ? r: e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bn.test(e.nodeName) || xn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    c.hrefNormalized || p.each(["href", "src"],
    function(e, t) {
        p.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    c.optSelected || (p.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        p.propFix[this.toLowerCase()] = this
    }),
    c.enctype || (p.propFix.enctype = "encoding");
    var wn = /[\t\r\n\f]/g;
    p.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = 0,
            u = this.length,
            l = "string" == typeof e && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).addClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(D) || []; u > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wn, " ") : " ")) {
                o = 0;
                while (i = t[o++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                a = p.trim(r),
                n.className !== a && (n.className = a)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0,
            u = this.length,
            l = 0 === arguments.length || "string" == typeof e && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).removeClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(D) || []; u > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wn, " ") : "")) {
                o = 0;
                while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                a = e ? p.trim(r) : "",
                n.className !== a && (n.className = a)
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(p.isFunction(e) ?
            function(n) {
                p(this).toggleClass(e.call(this, n, this.className, t), t)
            }: function() {
                if ("string" === n) {
                    var t, r = 0,
                    i = p(this),
                    o = e.match(D) || [];
                    while (t = o[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else(n === F || "boolean" === n) && (this.className && p._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": p._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wn, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        }
    }),
    p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        p.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Tn = p.now(),
    Cn = /\?/,
    Nn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
        i = p.trim(t + "");
        return i && !p.trim(i.replace(Nn,
        function(e, t, i, o) {
            return n && t && (r = 0),
            0 === r ? e: (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : p.error("Invalid JSON: " + t)
    },
    p.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch(i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t),
        n
    };
    var kn, En, Sn = /#.*$/,
    jn = /([?&])_=[^&]*/,
    An = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Dn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ln = /^(?:GET|HEAD)$/,
    Hn = /^\/\//,
    Mn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    _n = {},
    qn = {},
    Fn = "*/".concat("*");
    try {
        En = location.href
    } catch(On) {
        En = N.createElement("a"),
        En.href = "",
        En = En.href
    }
    kn = Mn.exec(En.toLowerCase()) || [];
    function Bn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            o = t.toLowerCase().match(D) || [];
            if (p.isFunction(n)) while (r = o[i++])"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Rn(e, t, n, r) {
        var i = {},
        o = e === qn;
        function a(s) {
            var u;
            return i[s] = !0,
            p.each(e[s] || [],
            function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }),
            u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function Pn(e, t) {
        var n, r, i = p.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e: n || (n = {}))[r] = t[r]);
        return n && p.extend(!0, e, n),
        e
    }
    function Wn(e, t, n) {
        var r, i, o, a, s = e.contents,
        u = e.dataTypes;
        while ("*" === u[0]) u.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (a in s) if (s[a] && s[a].test(i)) {
            u.unshift(a);
            break
        }
        if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }
    function $n(e, t, n, r) {
        var i, o, a, s, u, l = {},
        c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e["throws"]) t = a(t);
            else try {
                t = a(t)
            } catch(d) {
                return {
                    state: "parsererror",
                    error: a ? d: "No conversion from " + u + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: En,
            type: "GET",
            isLocal: Dn.test(kn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Fn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Pn(Pn(e, p.ajaxSettings), t) : Pn(p.ajaxSettings, e)
        },
        ajaxPrefilter: Bn(_n),
        ajaxTransport: Bn(qn),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0),
            t = t || {};
            var n, r, i, o, a, s, u, l, c = p.ajaxSetup({},
            t),
            d = c.context || c,
            f = c.context && (d.nodeType || d.jquery) ? p(d) : p.event,
            h = p.Deferred(),
            g = p.Callbacks("once memory"),
            m = c.statusCode || {},
            v = {},
            y = {},
            b = 0,
            x = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!l) {
                            l = {};
                            while (t = An.exec(o)) l[t[1].toLowerCase()] = t[2]
                        }
                        t = l[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? o: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e, v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (c.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]];
                    else w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || x;
                    return u && u.abort(t),
                    C(0, t),
                    this
                }
            };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, c.url = ((e || c.url || En) + "").replace(Sn, "").replace(Hn, kn[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = p.trim(c.dataType || "*").toLowerCase().match(D) || [""], null == c.crossDomain && (n = Mn.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === kn[1] && n[2] === kn[2] && (n[3] || ("http:" === n[1] ? "80": "443")) === (kn[3] || ("http:" === kn[1] ? "80": "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = p.param(c.data, c.traditional)), Rn(_n, c, t, w), 2 === b) return w;
            s = p.event && c.global,
            s && 0 === p.active++&&p.event.trigger("ajaxStart"),
            c.type = c.type.toUpperCase(),
            c.hasContent = !Ln.test(c.type),
            i = c.url,
            c.hasContent || (c.data && (i = c.url += (Cn.test(i) ? "&": "?") + c.data, delete c.data), c.cache === !1 && (c.url = jn.test(i) ? i.replace(jn, "$1_=" + Tn++) : i + (Cn.test(i) ? "&": "?") + "_=" + Tn++)),
            c.ifModified && (p.lastModified[i] && w.setRequestHeader("If-Modified-Since", p.lastModified[i]), p.etag[i] && w.setRequestHeader("If-None-Match", p.etag[i])),
            (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", c.contentType),
            w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Fn + "; q=0.01": "") : c.accepts["*"]);
            for (r in c.headers) w.setRequestHeader(r, c.headers[r]);
            if (c.beforeSend && (c.beforeSend.call(d, w, c) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            }) w[r](c[r]);
            if (u = Rn(qn, c, t, w)) {
                w.readyState = 1,
                s && f.trigger("ajaxSend", [w, c]),
                c.async && c.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                },
                c.timeout));
                try {
                    b = 1,
                    u.send(v, C)
                } catch(T) {
                    if (! (2 > b)) throw T;
                    C( - 1, T)
                }
            } else C( - 1, "No Transport");
            function C(e, t, n, r) {
                var l, v, y, x, T, C = t;
                2 !== b && (b = 2, a && clearTimeout(a), u = void 0, o = r || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (x = Wn(c, w, n)), x = $n(c, x, w, l), l ? (c.ifModified && (T = w.getResponseHeader("Last-Modified"), T && (p.lastModified[i] = T), T = w.getResponseHeader("etag"), T && (p.etag[i] = T)), 204 === e || "HEAD" === c.type ? C = "nocontent": 304 === e ? C = "notmodified": (C = x.state, v = x.data, y = x.error, l = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", l ? h.resolveWith(d, [v, C, w]) : h.rejectWith(d, [w, C, y]), w.statusCode(m), m = void 0, s && f.trigger(l ? "ajaxSuccess": "ajaxError", [w, c, l ? v: y]), g.fireWith(d, [w, C]), s && (f.trigger("ajaxComplete", [w, c]), --p.active || p.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) {
            return p.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return p.get(e, void 0, t, "script")
        }
    }),
    p.each(["get", "post"],
    function(e, t) {
        p[t] = function(e, n, r, i) {
            return p.isFunction(n) && (i = i || r, r = n, n = void 0),
            p.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }),
    p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    p.fn.extend({
        wrapAll: function(e) {
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(p.isFunction(e) ?
            function(t) {
                p(this).wrapInner(e.call(this, t))
            }: function() {
                var t = p(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each(function(n) {
                p(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    p.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && "none" === (e.style && e.style.display || p.css(e, "display"))
    },
    p.expr.filters.visible = function(e) {
        return ! p.expr.filters.hidden(e)
    };
    var zn = /%20/g,
    In = /\[\]$/,
    Xn = /\r?\n/g,
    Qn = /^(?:submit|button|image|reset|file)$/i,
    Jn = /^(?:input|select|textarea|keygen)/i;
    function Un(e, t, n, r) {
        var i;
        if (p.isArray(t)) p.each(t,
        function(t, i) {
            n || In.test(e) ? r(e, i) : Un(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
        });
        else if (n || "object" !== p.type(t)) r(e, t);
        else for (i in t) Un(e + "[" + i + "]", t[i], n, r)
    }
    p.param = function(e, t) {
        var n, r = [],
        i = function(e, t) {
            t = p.isFunction(t) ? t() : null == t ? "": t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e,
        function() {
            i(this.name, this.value)
        });
        else for (n in e) Un(n, e[n], t, i);
        return r.join("&").replace(zn, "+")
    },
    p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && Jn.test(this.nodeName) && !Qn.test(e) && (this.checked || !U.test(e))
            }).map(function(e, t) {
                var n = p(this).val();
                return null == n ? null: p.isArray(n) ? p.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Xn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Xn, "\r\n")
                }
            }).get()
        }
    }),
    p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ?
    function() {
        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Kn() || Zn()
    }: Kn;
    var Vn = 0,
    Gn = {},
    Yn = p.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload",
    function() {
        for (var e in Gn) Gn[e](void 0, !0)
    }),
    c.cors = !!Yn && "withCredentials" in Yn,
    Yn = c.ajax = !!Yn,
    Yn && p.ajaxTransport(function(e) {
        if (!e.crossDomain || c.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, o = e.xhr(),
                    a = ++Vn;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null),
                    t = function(n, i) {
                        var s, u, l;
                        if (t && (i || 4 === o.readyState)) if (delete Gn[a], t = void 0, o.onreadystatechange = p.noop, i) 4 !== o.readyState && o.abort();
                        else {
                            l = {},
                            s = o.status,
                            "string" == typeof o.responseText && (l.text = o.responseText);
                            try {
                                u = o.statusText
                            } catch(c) {
                                u = ""
                            }
                            s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                        }
                        l && r(s, u, l, o.getAllResponseHeaders())
                    },
                    e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Gn[a] = t: t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    });
    function Kn() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function Zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e),
                e
            }
        }
    }),
    p.ajaxPrefilter("script",
    function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    p.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var t, n = N.head || p("head")[0] || N.documentElement;
            return {
                send: function(r, i) {
                    t = N.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) { (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    },
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var er = [],
    tr = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = er.pop() || p.expando + "_" + Tn++;
            return this[e] = !0,
            e
        }
    }),
    p.ajaxPrefilter("json jsonp",
    function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (tr.test(t.url) ? "url": "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tr.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tr, "$1" + i) : t.jsonp !== !1 && (t.url += (Cn.test(t.url) ? "&": "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || p.error(i + " was not called"),
            a[0]
        },
        t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        },
        r.always(function() {
            e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback, er.push(i)),
            a && p.isFunction(o) && o(a[0]),
            a = o = void 0
        }), "script") : void 0
    }),
    p.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || N;
        var r = x.exec(e),
        i = !n && [];
        return r ? [t.createElement(r[1])] : (r = p.buildFragment([e], t, i), i && i.length && p(i).remove(), p.merge([], r.childNodes))
    };
    var nr = p.fn.load;
    p.fn.load = function(e, t, n) {
        if ("string" != typeof e && nr) return nr.apply(this, arguments);
        var r, i, o, a = this,
        s = e.indexOf(" ");
        return s >= 0 && (r = p.trim(e.slice(s, e.length)), e = e.slice(0, s)),
        p.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"),
        a.length > 0 && p.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            a.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
        }).complete(n &&
        function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }),
        this
    },
    p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    p.expr.filters.animated = function(e) {
        return p.grep(p.timers,
        function(t) {
            return e === t.elem
        }).length
    };
    var rr = e.document.documentElement;
    function ir(e) {
        return p.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    p.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = p.css(e, "position"),
            d = p(e),
            f = {};
            "static" === c && (e.style.position = "relative"),
            s = d.offset(),
            o = p.css(e, "top"),
            u = p.css(e, "left"),
            l = ("absolute" === c || "fixed" === c) && p.inArray("auto", [o, u]) > -1,
            l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0),
            p.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, f) : d.css(f)
        }
    },
    p.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                p.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                top: 0,
                left: 0
            },
            i = this[0],
            o = i && i.ownerDocument;
            if (o) return t = o.documentElement,
            p.contains(t, i) ? (typeof i.getBoundingClientRect !== F && (r = i.getBoundingClientRect()), n = ir(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === p.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - p.css(r, "marginTop", !0),
                    left: t.left - n.left - p.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || rr;
                while (e && !p.nodeName(e, "html") && "static" === p.css(e, "position")) e = e.offsetParent;
                return e || rr
            })
        }
    }),
    p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, t) {
        var n = /Y/.test(t);
        p.fn[e] = function(r) {
            return J(this,
            function(e, r, i) {
                var o = ir(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? p(o).scrollLeft() : i, n ? i: p(o).scrollTop()) : e[r] = i)
            },
            e, r, arguments.length, null)
        }
    }),
    p.each(["top", "left"],
    function(e, t) {
        p.cssHooks[t] = Ot(c.pixelPosition,
        function(e, n) {
            return n ? (n = qt(e, t), Mt.test(n) ? p(e).position()[t] + "px": n) : void 0
        })
    }),
    p.each({
        Height: "height",
        Width: "width"
    },
    function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        },
        function(n, r) {
            p.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                a = n || (r === !0 || i === !0 ? "margin": "border");
                return J(this,
                function(t, n, r) {
                    var i;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? p.css(t, n, a) : p.style(t, n, r, a)
                },
                t, o ? r: void 0, o, null)
            }
        })
    }),
    p.fn.size = function() {
        return this.length
    },
    p.fn.andSelf = p.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return p
    });
    var or = e.jQuery,
    ar = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = ar),
        t && e.jQuery === p && (e.jQuery = or),
        p
    },
    typeof t === F && (e.jQuery = e.$ = p),
    p
});
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
function(e, t, n) {
    function r(n) {
        var r = t.console;
        o[n] || (o[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
    }
    function i(t, i, o, a) {
        if (Object.defineProperty) try {
            return Object.defineProperty(t, i, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return r(a),
                    o
                },
                set: function(e) {
                    r(a),
                    o = e
                }
            }),
            n
        } catch(s) {}
        e._definePropertyBroken = !0,
        t[i] = o
    }
    var o = {};
    e.migrateWarnings = [],
    !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"),
    e.migrateTrace === n && (e.migrateTrace = !0),
    e.migrateReset = function() {
        o = {},
        e.migrateWarnings.length = 0
    },
    "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var a = e("<input/>", {
        size: 1
    }).attr("size") && e.attrFn,
    s = e.attr,
    u = e.attrHooks.value && e.attrHooks.value.get ||
    function() {
        return null
    },
    l = e.attrHooks.value && e.attrHooks.value.set ||
    function() {
        return n
    },
    c = /^(?:input|button)$/i,
    d = /^[238]$/,
    p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    f = /^(?:checked|selected)$/i;
    i(e, "attrFn", a || {},
    "jQuery.attrFn is deprecated"),
    e.attr = function(t, i, o, u) {
        var l = i.toLowerCase(),
        h = t && t.nodeType;
        return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(h) && (a ? i in a: e.isFunction(e.fn[i]))) ? e(t)[i](o) : ("type" === i && o !== n && c.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[l] && p.test(l) && (e.attrHooks[l] = {
            get: function(t, r) {
                var i, o = e.prop(t, r);
                return o === !0 || "boolean" != typeof o && (i = t.getAttributeNode(r)) && i.nodeValue !== !1 ? r.toLowerCase() : n
            },
            set: function(t, n, r) {
                var i;
                return n === !1 ? e.removeAttr(t, r) : (i = e.propFix[r] || r, i in t && (t[i] = !0), t.setAttribute(r, r.toLowerCase())),
                r
            }
        },
        f.test(l) && r("jQuery.fn.attr('" + l + "') may use property instead of attribute")), s.call(e, t, i, o))
    },
    e.attrHooks.value = {
        get: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value: null)
        },
        set: function(e, t) {
            var i = (e.nodeName || "").toLowerCase();
            return "button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
        }
    };
    var h, g, m = e.fn.init,
    v = e.parseJSON,
    y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, n, i) {
        var o;
        return t && "string" == typeof t && !e.isPlainObject(n) && (o = y.exec(e.trim(t))) && o[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), o[3] && r("$(html) HTML text after last tag is ignored"), "#" === o[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? m.call(this, e.parseHTML(o[2], n, !0), n, i) : m.apply(this, arguments)
    },
    e.fn.init.prototype = e.fn,
    e.parseJSON = function(e) {
        return e || null === e ? v.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
    },
    e.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    },
    e.browser || (h = e.uaMatch(navigator.userAgent), g = {},
    h.browser && (g[h.browser] = !0, g.version = h.version), g.chrome ? g.webkit = !0 : g.webkit && (g.safari = !0), e.browser = g),
    i(e, "browser", e.browser, "jQuery.browser is deprecated"),
    e.sub = function() {
        function t(e, n) {
            return new t.fn.init(e, n)
        }
        e.extend(!0, t, this),
        t.superclass = this,
        t.fn = t.prototype = this(),
        t.fn.constructor = t,
        t.sub = this.sub,
        t.fn.init = function(r, i) {
            return i && i instanceof e && !(i instanceof t) && (i = t(i)),
            e.fn.init.call(this, r, i, n)
        },
        t.fn.init.prototype = t.fn;
        var n = t(document);
        return r("jQuery.sub() is deprecated"),
        t
    },
    e.ajaxSetup({
        converters: {
            "text json": e.parseJSON
        }
    });
    var b = e.fn.data;
    e.fn.data = function(t) {
        var i, o, a = this[0];
        return ! a || "events" !== t || 1 !== arguments.length || (i = e.data(a, t), o = e._data(a, t), i !== n && i !== o || o === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), o)
    };
    var x = /\/(java|ecma)script/i,
    w = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        w.apply(this, arguments)
    },
    e.clean || (e.clean = function(t, i, o, a) {
        i = i || document,
        i = !i.nodeType && i[0] || i,
        i = i.ownerDocument || i,
        r("jQuery.clean() is deprecated");
        var s, u, l, c, d = [];
        if (e.merge(d, e.buildFragment(t, i).childNodes), o) for (l = function(e) {
            return ! e.type || x.test(e.type) ? a ? a.push(e.parentNode ? e.parentNode.removeChild(e) : e) : o.appendChild(e) : n
        },
        s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && l(u) || (o.appendChild(u), u.getElementsByTagName !== n && (c = e.grep(e.merge([], u.getElementsByTagName("script")), l), d.splice.apply(d, [s + 1, 0].concat(c)), s += c.length));
        return d
    });
    var T = e.event.add,
    C = e.event.remove,
    N = e.event.trigger,
    k = e.fn.toggle,
    E = e.fn.live,
    S = e.fn.die,
    j = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
    A = RegExp("\\b(?:" + j + ")\\b"),
    D = /(?:^|\s)hover(\.\S+|)\b/,
    L = function(t) {
        return "string" != typeof t || e.event.special.hover ? t: (D.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(D, "mouseenter$1 mouseleave$1"))
    };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"),
    e.event.dispatch && i(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"),
    e.event.add = function(e, t, n, i, o) {
        e !== document && A.test(t) && r("AJAX events should be attached to document: " + t),
        T.call(this, e, L(t || ""), n, i, o)
    },
    e.event.remove = function(e, t, n, r, i) {
        C.call(this, e, L(t) || "", n, r, i)
    },
    e.fn.error = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return r("jQuery.fn.error() is deprecated"),
        e.splice(0, 0, "error"),
        arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
    },
    e.fn.toggle = function(t, n) {
        if (!e.isFunction(t) || !e.isFunction(n)) return k.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var i = arguments,
        o = t.guid || e.guid++,
        a = 0,
        s = function(n) {
            var r = (e._data(this, "lastToggle" + t.guid) || 0) % a;
            return e._data(this, "lastToggle" + t.guid, r + 1),
            n.preventDefault(),
            i[r].apply(this, arguments) || !1
        };
        for (s.guid = o; i.length > a;) i[a++].guid = o;
        return this.click(s)
    },
    e.fn.live = function(t, n, i) {
        return r("jQuery.fn.live() is deprecated"),
        E ? E.apply(this, arguments) : (e(this.context).on(t, this.selector, n, i), this)
    },
    e.fn.die = function(t, n) {
        return r("jQuery.fn.die() is deprecated"),
        S ? S.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    },
    e.event.trigger = function(e, t, n, i) {
        return n || A.test(e) || r("Global events are undocumented and deprecated"),
        N.call(this, e, t, n || document, i)
    },
    e.each(j.split("|"),
    function(t, n) {
        e.event.special[n] = {
            setup: function() {
                var t = this;
                return t !== document && (e.event.add(document, n + "." + e.guid,
                function() {
                    e.event.trigger(n, null, t, !0)
                }), e._data(this, n, e.guid++)),
                !1
            },
            teardown: function() {
                return this !== document && e.event.remove(document, n + "." + e._data(this, n)),
                !1
            }
        }
    })
} (jQuery, window);