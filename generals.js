! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}(function(e) {
    for (var t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
            case "function":
                break;
            case "object":
                e[t] = function(t) {
                    var n = t.slice(1),
                        r = e[t[0]];
                    return function(e, t, o) {
                        r.apply(this, [e, t, o].concat(n))
                    }
                }(e[t]);
                break;
            default:
                e[t] = e[e[t]]
        }
    return e
}([function(e, t, n) {
        "use strict";
        n(1);
        var r = (n(2), n(3)),
            o = n(266),
            i = n(177),
            a = n(4),
            s = n(210),
            l = n(180);
        n(212);
        var c = l.connect(function(e) {
            return {
                state: e
            }
        })(r);
        s.render(a.createElement(l.Provider, {
            store: n(266)
        }, a.createElement(c, null)), document.getElementById("react-container")), window.onbeforeunload = function(e) {
            if (e = e || window.event, o.getState().page === i.PAGE_GAME && !o.getState().game.isReplay) {
                var t = "Are you sure you want to leave a game in progress?";
                return e.returnValue = t, t
            }
        }
    }, function(e, t) {
        "use strict";
        Number.isInteger = Number.isInteger || function(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }, Number.isFinite = Number.isFinite || function(e) {
            return "number" == typeof e && isFinite(e)
        }
    }, function(e, t) {
        "use strict";
        e.exports = {
            VERSION: "12.2.1",
            PLAYER_CAP: 8,
            PLAYER_COLORS: ["red", "blue", "green", "purple", "teal", "darkgreen", "orange", "maroon"],
            MAX_USERNAME_LENGTH: 18,
            MIN_CITY_ARMY: 40,
            MAX_CITY_ARMY: 50,
            DEFAULT_STARS: 0,
            DEFAULT_DEVIATION: 50 / 3,
            RECRUIT_RATE: 2,
            FARM_RATE: 50,
            MIN_GENERAL_SPACING: 9,
            MAX_ALLY_SPACING: 12,
            MIN_ALLY_SPACING: 3,
            CLOSE_CITY_DISTANCE: 6,
            TIMEOUT_CAPTURE_AFK: 25e3,
            CUSTOM_GAME_URL_LENGTH: 4,
            PING_DURATION: 2e3,
            TEAMS_2V2: [0, 0, 1, 1],
            PRE_GAME_START_DELAY: 1500,
            MAX_CHAT_MESSAGE_LENGTH: 500,
            NOT_BOT_KEY: "l1IllII1",
            BOT_TAG: "[Bot] "
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(31),
            i = n(177),
            a = n(178),
            s = n(179),
            l = n(324),
            c = n(327),
            u = n(330),
            p = n(335),
            h = r.createClass({
                displayName: "App",
                render: function() {
                    var e = this.props.state,
                        t = null;
                    return e.page === i.PAGE_MAIN_MENU ? t = r.createElement(s, {
                        key: "main-menu"
                    }) : e.page === i.PAGE_QUEUE ? t = !e.queue.isTeamQueue && a.isCustomGame(e.queue.queue_id) ? r.createElement(c, {
                        key: "custom-queue"
                    }) : r.createElement(l, {
                        key: "queue"
                    }) : e.page === i.PAGE_GAME ? t = r.createElement(u, {
                        key: "game-page"
                    }) : e.page === i.PAGE_INVALID_REPLAY ? t = r.createElement(p, {
                        key: "invalid-replay-page"
                    }) : console.error("Unrecognized page: " + e.page), r.createElement(o, {
                        transitionName: "page",
                        transitionEnterTimeout: 400,
                        transitionLeaveTimeout: 200
                    }, t)
                }
            });
        e.exports = h
    }, function(e, t, n) {
        "use strict";
        e.exports = n(5)
    }, function(e, t, n) {
        "use strict";
        var r = n(6),
            o = n(7),
            i = n(20),
            a = n(23),
            s = n(24),
            l = n(26),
            c = n(11),
            u = n(27),
            p = n(29),
            h = n(30),
            d = (n(13), c.createElement),
            f = c.createFactory,
            m = c.cloneElement,
            v = r,
            y = {
                Children: {
                    map: o.map,
                    forEach: o.forEach,
                    count: o.count,
                    toArray: o.toArray,
                    only: h
                },
                Component: i,
                PureComponent: a,
                createElement: d,
                cloneElement: m,
                isValidElement: c.isValidElement,
                PropTypes: u,
                createClass: s.createClass,
                createFactory: f,
                createMixin: function(e) {
                    return e
                },
                DOM: l,
                version: p,
                __spread: v
            };
        e.exports = y
    }, function(e, t) {
        "use strict";

        function n(e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }

        function r() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                var r = Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                });
                if ("0123456789" !== r.join("")) return !1;
                var o = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    o[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
            } catch (e) {
                return !1
            }
        }
        var o = Object.prototype.hasOwnProperty,
            i = Object.prototype.propertyIsEnumerable;
        e.exports = r() ? Object.assign : function(e, t) {
            for (var r, a, s = n(e), l = 1; l < arguments.length; l++) {
                r = Object(arguments[l]);
                for (var c in r) o.call(r, c) && (s[c] = r[c]);
                if (Object.getOwnPropertySymbols) {
                    a = Object.getOwnPropertySymbols(r);
                    for (var u = 0; u < a.length; u++) i.call(r, a[u]) && (s[a[u]] = r[a[u]])
                }
            }
            return s
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return ("" + e).replace(T, "$&/")
        }

        function o(e, t) {
            this.func = e, this.context = t, this.count = 0
        }

        function i(e, t, n) {
            var r = e.func,
                o = e.context;
            r.call(o, t, e.count++)
        }

        function a(e, t, n) {
            if (null == e) return e;
            var r = o.getPooled(t, n);
            y(e, i, r), o.release(r)
        }

        function s(e, t, n, r) {
            this.result = e, this.keyPrefix = t, this.func = n, this.context = r, this.count = 0
        }

        function l(e, t, n) {
            var o = e.result,
                i = e.keyPrefix,
                a = e.func,
                s = e.context,
                l = a.call(s, t, e.count++);
            Array.isArray(l) ? c(l, o, n, v.thatReturnsArgument) : null != l && (m.isValidElement(l) && (l = m.cloneAndReplaceKey(l, i + (!l.key || t && t.key === l.key ? "" : r(l.key) + "/") + n)), o.push(l))
        }

        function c(e, t, n, o, i) {
            var a = "";
            null != n && (a = r(n) + "/");
            var c = s.getPooled(t, a, o, i);
            y(e, l, c), s.release(c)
        }

        function u(e, t, n) {
            if (null == e) return e;
            var r = [];
            return c(e, r, null, t, n), r
        }

        function p(e, t, n) {
            return null
        }

        function h(e, t) {
            return y(e, p, null)
        }

        function d(e) {
            var t = [];
            return c(e, t, null, v.thatReturnsArgument), t
        }
        var f = n(8),
            m = n(11),
            v = n(14),
            y = n(17),
            g = f.twoArgumentPooler,
            b = f.fourArgumentPooler,
            T = /\/+/g;
        o.prototype.destructor = function() {
            this.func = null, this.context = null, this.count = 0
        }, f.addPoolingTo(o, g), s.prototype.destructor = function() {
            this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
        }, f.addPoolingTo(s, b);
        var S = {
            forEach: a,
            map: u,
            mapIntoWithKeyPrefixInternal: c,
            count: h,
            toArray: d
        };
        e.exports = S
    },
    [336, 9],
    function(e, t) {
        "use strict";

        function n(e) {
            for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            var o = new Error(n);
            throw o.name = "Invariant Violation", o.framesToPop = 1, o
        }
        e.exports = n
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r, o, i, a, s) {
            if (!e) {
                var l;
                if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var c = [n, r, o, i, a, s],
                        u = 0;
                    l = new Error(t.replace(/%s/g, function() {
                        return c[u++]
                    })), l.name = "Invariant Violation"
                }
                throw l.framesToPop = 1, l
            }
        }
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return void 0 !== e.ref
        }

        function o(e) {
            return void 0 !== e.key
        }
        var i = n(6),
            a = n(12),
            s = (n(13), n(15), Object.prototype.hasOwnProperty),
            l = n(16),
            c = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            },
            u = function(e, t, n, r, o, i, a) {
                var s = {
                    $$typeof: l,
                    type: e,
                    key: t,
                    ref: n,
                    props: a,
                    _owner: i
                };
                return s
            };
        u.createElement = function(e, t, n) {
            var i, l = {},
                p = null,
                h = null,
                d = null,
                f = null;
            if (null != t) {
                r(t) && (h = t.ref), o(t) && (p = "" + t.key), d = void 0 === t.__self ? null : t.__self, f = void 0 === t.__source ? null : t.__source;
                for (i in t) s.call(t, i) && !c.hasOwnProperty(i) && (l[i] = t[i])
            }
            var m = arguments.length - 2;
            if (1 === m) l.children = n;
            else if (m > 1) {
                for (var v = Array(m), y = 0; y < m; y++) v[y] = arguments[y + 2];
                l.children = v
            }
            if (e && e.defaultProps) {
                var g = e.defaultProps;
                for (i in g) void 0 === l[i] && (l[i] = g[i])
            }
            return u(e, p, h, d, f, a.current, l)
        }, u.createFactory = function(e) {
            var t = u.createElement.bind(null, e);
            return t.type = e, t
        }, u.cloneAndReplaceKey = function(e, t) {
            var n = u(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
            return n
        }, u.cloneElement = function(e, t, n) {
            var l, p = i({}, e.props),
                h = e.key,
                d = e.ref,
                f = e._self,
                m = e._source,
                v = e._owner;
            if (null != t) {
                r(t) && (d = t.ref, v = a.current), o(t) && (h = "" + t.key);
                var y;
                e.type && e.type.defaultProps && (y = e.type.defaultProps);
                for (l in t) s.call(t, l) && !c.hasOwnProperty(l) && (void 0 === t[l] && void 0 !== y ? p[l] = y[l] : p[l] = t[l])
            }
            var g = arguments.length - 2;
            if (1 === g) p.children = n;
            else if (g > 1) {
                for (var b = Array(g), T = 0; T < g; T++) b[T] = arguments[T + 2];
                p.children = b
            }
            return u(e.type, h, d, f, m, v, p)
        }, u.isValidElement = function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === l
        }, e.exports = u
    },
    function(e, t) {
        "use strict";
        var n = {
            current: null
        };
        e.exports = n
    },
    function(e, t, n) {
        "use strict";
        var r = n(14),
            o = r;
        e.exports = o
    },
    function(e, t) {
        "use strict";

        function n(e) {
            return function() {
                return e
            }
        }
        var r = function() {};
        r.thatReturns = n, r.thatReturnsFalse = n(!1), r.thatReturnsTrue = n(!0), r.thatReturnsNull = n(null), r.thatReturnsThis = function() {
            return this
        }, r.thatReturnsArgument = function(e) {
            return e
        }, e.exports = r
    },
    function(e, t, n) {
        "use strict";
        var r = !1;
        e.exports = r
    },
    function(e, t) {
        "use strict";
        var n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        e.exports = n
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return e && "object" == typeof e && null != e.key ? c.escape(e.key) : t.toString(36)
        }

        function o(e, t, n, i) {
            var h = typeof e;
            if ("undefined" !== h && "boolean" !== h || (e = null), null === e || "string" === h || "number" === h || "object" === h && e.$$typeof === s) return n(i, e, "" === t ? u + r(e, 0) : t), 1;
            var d, f, m = 0,
                v = "" === t ? u : t + p;
            if (Array.isArray(e))
                for (var y = 0; y < e.length; y++) d = e[y], f = v + r(d, y), m += o(d, f, n, i);
            else {
                var g = l(e);
                if (g) {
                    var b, T = g.call(e);
                    if (g !== e.entries)
                        for (var S = 0; !(b = T.next()).done;) d = b.value, f = v + r(d, S++), m += o(d, f, n, i);
                    else
                        for (; !(b = T.next()).done;) {
                            var E = b.value;
                            E && (d = E[1], f = v + c.escape(E[0]) + p + r(d, 0), m += o(d, f, n, i))
                        }
                } else if ("object" === h) {
                    var A = "",
                        C = String(e);
                    a("31", "[object Object]" === C ? "object with keys {" + Object.keys(e).join(", ") + "}" : C, A)
                }
            }
            return m
        }

        function i(e, t, n) {
            return null == e ? 0 : o(e, "", t, n)
        }
        var a = n(9),
            s = (n(12), n(16)),
            l = n(18),
            c = (n(10), n(19)),
            u = (n(13), "."),
            p = ":";
        e.exports = i
    },
    function(e, t) {
        "use strict";

        function n(e) {
            var t = e && (r && e[r] || e[o]);
            if ("function" == typeof t) return t
        }
        var r = "function" == typeof Symbol && Symbol.iterator,
            o = "@@iterator";
        e.exports = n
    },
    function(e, t) {
        "use strict";

        function n(e) {
            var t = /[=:]/g,
                n = {
                    "=": "=0",
                    ":": "=2"
                },
                r = ("" + e).replace(t, function(e) {
                    return n[e]
                });
            return "$" + r
        }

        function r(e) {
            var t = /(=0|=2)/g,
                n = {
                    "=0": "=",
                    "=2": ":"
                },
                r = "." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1);
            return ("" + r).replace(t, function(e) {
                return n[e]
            })
        }
        var o = {
            escape: n,
            unescape: r
        };
        e.exports = o
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            this.props = e, this.context = t, this.refs = a, this.updater = n || i
        }
        var o = n(9),
            i = n(21),
            a = (n(15), n(22));
        n(10), n(13);
        r.prototype.isReactComponent = {}, r.prototype.setState = function(e, t) {
            "object" != typeof e && "function" != typeof e && null != e ? o("85") : void 0, this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t, "setState")
        }, r.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate")
        };
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {}
        var o = (n(13), {
            isMounted: function(e) {
                return !1
            },
            enqueueCallback: function(e, t) {},
            enqueueForceUpdate: function(e) {
                r(e, "forceUpdate")
            },
            enqueueReplaceState: function(e, t) {
                r(e, "replaceState")
            },
            enqueueSetState: function(e, t) {
                r(e, "setState")
            }
        });
        e.exports = o
    },
    function(e, t, n) {
        "use strict";
        var r = {};
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            this.props = e, this.context = t, this.refs = l, this.updater = n || s
        }

        function o() {}
        var i = n(6),
            a = n(20),
            s = n(21),
            l = n(22);
        o.prototype = a.prototype, r.prototype = new o, r.prototype.constructor = r, i(r.prototype, a.prototype), r.prototype.isPureReactComponent = !0, e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e
        }

        function o(e, t) {
            var n = T.hasOwnProperty(t) ? T[t] : null;
            E.hasOwnProperty(t) && ("OVERRIDE_BASE" !== n ? h("73", t) : void 0), e && ("DEFINE_MANY" !== n && "DEFINE_MANY_MERGED" !== n ? h("74", t) : void 0)
        }

        function i(e, t) {
            if (t) {
                "function" == typeof t ? h("75") : void 0, m.isValidElement(t) ? h("76") : void 0;
                var n = e.prototype,
                    r = n.__reactAutoBindPairs;
                t.hasOwnProperty(g) && S.mixins(e, t.mixins);
                for (var i in t)
                    if (t.hasOwnProperty(i) && i !== g) {
                        var a = t[i],
                            s = n.hasOwnProperty(i);
                        if (o(s, i), S.hasOwnProperty(i)) S[i](e, a);
                        else {
                            var u = T.hasOwnProperty(i),
                                p = "function" == typeof a,
                                d = p && !u && !s && t.autobind !== !1;
                            if (d) r.push(i, a), n[i] = a;
                            else if (s) {
                                var f = T[i];
                                !u || "DEFINE_MANY_MERGED" !== f && "DEFINE_MANY" !== f ? h("77", f, i) : void 0, "DEFINE_MANY_MERGED" === f ? n[i] = l(n[i], a) : "DEFINE_MANY" === f && (n[i] = c(n[i], a))
                            } else n[i] = a
                        }
                    }
            } else;
        }

        function a(e, t) {
            if (t)
                for (var n in t) {
                    var r = t[n];
                    if (t.hasOwnProperty(n)) {
                        var o = n in S;
                        o ? h("78", n) : void 0;
                        var i = n in e;
                        i ? h("79", n) : void 0, e[n] = r
                    }
                }
        }

        function s(e, t) {
            e && t && "object" == typeof e && "object" == typeof t ? void 0 : h("80");
            for (var n in t) t.hasOwnProperty(n) && (void 0 !== e[n] ? h("81", n) : void 0, e[n] = t[n]);
            return e
        }

        function l(e, t) {
            return function() {
                var n = e.apply(this, arguments),
                    r = t.apply(this, arguments);
                if (null == n) return r;
                if (null == r) return n;
                var o = {};
                return s(o, n), s(o, r), o
            }
        }

        function c(e, t) {
            return function() {
                e.apply(this, arguments), t.apply(this, arguments)
            }
        }

        function u(e, t) {
            var n = t.bind(e);
            return n
        }

        function p(e) {
            for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
                var r = t[n],
                    o = t[n + 1];
                e[r] = u(e, o)
            }
        }
        var h = n(9),
            d = n(6),
            f = n(20),
            m = n(11),
            v = (n(25), n(21)),
            y = n(22),
            g = (n(10), n(13), "mixins"),
            b = [],
            T = {
                mixins: "DEFINE_MANY",
                statics: "DEFINE_MANY",
                propTypes: "DEFINE_MANY",
                contextTypes: "DEFINE_MANY",
                childContextTypes: "DEFINE_MANY",
                getDefaultProps: "DEFINE_MANY_MERGED",
                getInitialState: "DEFINE_MANY_MERGED",
                getChildContext: "DEFINE_MANY_MERGED",
                render: "DEFINE_ONCE",
                componentWillMount: "DEFINE_MANY",
                componentDidMount: "DEFINE_MANY",
                componentWillReceiveProps: "DEFINE_MANY",
                shouldComponentUpdate: "DEFINE_ONCE",
                componentWillUpdate: "DEFINE_MANY",
                componentDidUpdate: "DEFINE_MANY",
                componentWillUnmount: "DEFINE_MANY",
                updateComponent: "OVERRIDE_BASE"
            },
            S = {
                displayName: function(e, t) {
                    e.displayName = t
                },
                mixins: function(e, t) {
                    if (t)
                        for (var n = 0; n < t.length; n++) i(e, t[n])
                },
                childContextTypes: function(e, t) {
                    e.childContextTypes = d({}, e.childContextTypes, t)
                },
                contextTypes: function(e, t) {
                    e.contextTypes = d({}, e.contextTypes, t)
                },
                getDefaultProps: function(e, t) {
                    e.getDefaultProps ? e.getDefaultProps = l(e.getDefaultProps, t) : e.getDefaultProps = t
                },
                propTypes: function(e, t) {
                    e.propTypes = d({}, e.propTypes, t)
                },
                statics: function(e, t) {
                    a(e, t)
                },
                autobind: function() {}
            },
            E = {
                replaceState: function(e, t) {
                    this.updater.enqueueReplaceState(this, e), t && this.updater.enqueueCallback(this, t, "replaceState")
                },
                isMounted: function() {
                    return this.updater.isMounted(this)
                }
            },
            A = function() {};
        d(A.prototype, f.prototype, E);
        var C = {
            createClass: function(e) {
                var t = r(function(e, n, r) {
                    this.__reactAutoBindPairs.length && p(this), this.props = e, this.context = n, this.refs = y, this.updater = r || v, this.state = null;
                    var o = this.getInitialState ? this.getInitialState() : null;
                    "object" != typeof o || Array.isArray(o) ? h("82", t.displayName || "ReactCompositeComponent") : void 0, this.state = o
                });
                t.prototype = new A, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], b.forEach(i.bind(null, t)), i(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), t.prototype.render ? void 0 : h("83");
                for (var n in T) t.prototype[n] || (t.prototype[n] = null);
                return t
            },
            injection: {
                injectMixin: function(e) {
                    b.push(e)
                }
            }
        };
        e.exports = C
    },
    function(e, t, n) {
        "use strict";
        var r = {};
        e.exports = r
    },
    function(e, t, n) {
        "use strict";
        var r = n(11),
            o = r.createFactory,
            i = {
                a: o("a"),
                abbr: o("abbr"),
                address: o("address"),
                area: o("area"),
                article: o("article"),
                aside: o("aside"),
                audio: o("audio"),
                b: o("b"),
                base: o("base"),
                bdi: o("bdi"),
                bdo: o("bdo"),
                big: o("big"),
                blockquote: o("blockquote"),
                body: o("body"),
                br: o("br"),
                button: o("button"),
                canvas: o("canvas"),
                caption: o("caption"),
                cite: o("cite"),
                code: o("code"),
                col: o("col"),
                colgroup: o("colgroup"),
                data: o("data"),
                datalist: o("datalist"),
                dd: o("dd"),
                del: o("del"),
                details: o("details"),
                dfn: o("dfn"),
                dialog: o("dialog"),
                div: o("div"),
                dl: o("dl"),
                dt: o("dt"),
                em: o("em"),
                embed: o("embed"),
                fieldset: o("fieldset"),
                figcaption: o("figcaption"),
                figure: o("figure"),
                footer: o("footer"),
                form: o("form"),
                h1: o("h1"),
                h2: o("h2"),
                h3: o("h3"),
                h4: o("h4"),
                h5: o("h5"),
                h6: o("h6"),
                head: o("head"),
                header: o("header"),
                hgroup: o("hgroup"),
                hr: o("hr"),
                html: o("html"),
                i: o("i"),
                iframe: o("iframe"),
                img: o("img"),
                input: o("input"),
                ins: o("ins"),
                kbd: o("kbd"),
                keygen: o("keygen"),
                label: o("label"),
                legend: o("legend"),
                li: o("li"),
                link: o("link"),
                main: o("main"),
                map: o("map"),
                mark: o("mark"),
                menu: o("menu"),
                menuitem: o("menuitem"),
                meta: o("meta"),
                meter: o("meter"),
                nav: o("nav"),
                noscript: o("noscript"),
                object: o("object"),
                ol: o("ol"),
                optgroup: o("optgroup"),
                option: o("option"),
                output: o("output"),
                p: o("p"),
                param: o("param"),
                picture: o("picture"),
                pre: o("pre"),
                progress: o("progress"),
                q: o("q"),
                rp: o("rp"),
                rt: o("rt"),
                ruby: o("ruby"),
                s: o("s"),
                samp: o("samp"),
                script: o("script"),
                section: o("section"),
                select: o("select"),
                small: o("small"),
                source: o("source"),
                span: o("span"),
                strong: o("strong"),
                style: o("style"),
                sub: o("sub"),
                summary: o("summary"),
                sup: o("sup"),
                table: o("table"),
                tbody: o("tbody"),
                td: o("td"),
                textarea: o("textarea"),
                tfoot: o("tfoot"),
                th: o("th"),
                thead: o("thead"),
                time: o("time"),
                title: o("title"),
                tr: o("tr"),
                track: o("track"),
                u: o("u"),
                ul: o("ul"),
                var: o("var"),
                video: o("video"),
                wbr: o("wbr"),
                circle: o("circle"),
                clipPath: o("clipPath"),
                defs: o("defs"),
                ellipse: o("ellipse"),
                g: o("g"),
                image: o("image"),
                line: o("line"),
                linearGradient: o("linearGradient"),
                mask: o("mask"),
                path: o("path"),
                pattern: o("pattern"),
                polygon: o("polygon"),
                polyline: o("polyline"),
                radialGradient: o("radialGradient"),
                rect: o("rect"),
                stop: o("stop"),
                svg: o("svg"),
                text: o("text"),
                tspan: o("tspan")
            };
        e.exports = i
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
        }

        function o(e) {
            this.message = e, this.stack = ""
        }

        function i(e) {
            function t(t, n, r, i, a, s, l) {
                i = i || P, s = s || r;
                if (null == n[r]) {
                    var c = E[a];
                    return t ? new o(null === n[r] ? "The " + c + " `" + s + "` is marked as required " + ("in `" + i + "`, but its value is `null`.") : "The " + c + " `" + s + "` is marked as required in " + ("`" + i + "`, but its value is `undefined`.")) : null
                }
                return e(n, r, i, a, s)
            }
            var n = t.bind(null, !1);
            return n.isRequired = t.bind(null, !0), n
        }

        function a(e) {
            function t(t, n, r, i, a, s) {
                var l = t[n],
                    c = g(l);
                if (c !== e) {
                    var u = E[i],
                        p = b(l);
                    return new o("Invalid " + u + " `" + a + "` of type " + ("`" + p + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."))
                }
                return null
            }
            return i(t)
        }

        function s() {
            return i(C.thatReturns(null))
        }

        function l(e) {
            function t(t, n, r, i, a) {
                if ("function" != typeof e) return new o("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                var s = t[n];
                if (!Array.isArray(s)) {
                    var l = E[i],
                        c = g(s);
                    return new o("Invalid " + l + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."))
                }
                for (var u = 0; u < s.length; u++) {
                    var p = e(s, u, r, i, a + "[" + u + "]", A);
                    if (p instanceof Error) return p
                }
                return null
            }
            return i(t)
        }

        function c() {
            function e(e, t, n, r, i) {
                var a = e[t];
                if (!S.isValidElement(a)) {
                    var s = E[r],
                        l = g(a);
                    return new o("Invalid " + s + " `" + i + "` of type " + ("`" + l + "` supplied to `" + n + "`, expected a single ReactElement."))
                }
                return null
            }
            return i(e)
        }

        function u(e) {
            function t(t, n, r, i, a) {
                if (!(t[n] instanceof e)) {
                    var s = E[i],
                        l = e.name || P,
                        c = T(t[n]);
                    return new o("Invalid " + s + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("instance of `" + l + "`."))
                }
                return null
            }
            return i(t)
        }

        function p(e) {
            function t(t, n, i, a, s) {
                for (var l = t[n], c = 0; c < e.length; c++)
                    if (r(l, e[c])) return null;
                var u = E[a],
                    p = JSON.stringify(e);
                return new o("Invalid " + u + " `" + s + "` of value `" + l + "` " + ("supplied to `" + i + "`, expected one of " + p + "."))
            }
            return Array.isArray(e) ? i(t) : C.thatReturnsNull
        }

        function h(e) {
            function t(t, n, r, i, a) {
                if ("function" != typeof e) return new o("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                var s = t[n],
                    l = g(s);
                if ("object" !== l) {
                    var c = E[i];
                    return new o("Invalid " + c + " `" + a + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."))
                }
                for (var u in s)
                    if (s.hasOwnProperty(u)) {
                        var p = e(s, u, r, i, a + "." + u, A);
                        if (p instanceof Error) return p
                    }
                return null
            }
            return i(t)
        }

        function d(e) {
            function t(t, n, r, i, a) {
                for (var s = 0; s < e.length; s++) {
                    var l = e[s];
                    if (null == l(t, n, r, i, a, A)) return null
                }
                var c = E[i];
                return new o("Invalid " + c + " `" + a + "` supplied to " + ("`" + r + "`."))
            }
            return Array.isArray(e) ? i(t) : C.thatReturnsNull
        }

        function f() {
            function e(e, t, n, r, i) {
                if (!v(e[t])) {
                    var a = E[r];
                    return new o("Invalid " + a + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."))
                }
                return null
            }
            return i(e)
        }

        function m(e) {
            function t(t, n, r, i, a) {
                var s = t[n],
                    l = g(s);
                if ("object" !== l) {
                    var c = E[i];
                    return new o("Invalid " + c + " `" + a + "` of type `" + l + "` " + ("supplied to `" + r + "`, expected `object`."))
                }
                for (var u in e) {
                    var p = e[u];
                    if (p) {
                        var h = p(s, u, r, i, a + "." + u, A);
                        if (h) return h
                    }
                }
                return null
            }
            return i(t)
        }

        function v(e) {
            switch (typeof e) {
                case "number":
                case "string":
                case "undefined":
                    return !0;
                case "boolean":
                    return !e;
                case "object":
                    if (Array.isArray(e)) return e.every(v);
                    if (null === e || S.isValidElement(e)) return !0;
                    var t = _(e);
                    if (!t) return !1;
                    var n, r = t.call(e);
                    if (t !== e.entries) {
                        for (; !(n = r.next()).done;)
                            if (!v(n.value)) return !1
                    } else
                        for (; !(n = r.next()).done;) {
                            var o = n.value;
                            if (o && !v(o[1])) return !1
                        }
                    return !0;
                default:
                    return !1
            }
        }

        function y(e, t) {
            return "symbol" === e || ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
        }

        function g(e) {
            var t = typeof e;
            return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : y(t, e) ? "symbol" : t
        }

        function b(e) {
            var t = g(e);
            if ("object" === t) {
                if (e instanceof Date) return "date";
                if (e instanceof RegExp) return "regexp"
            }
            return t
        }

        function T(e) {
            return e.constructor && e.constructor.name ? e.constructor.name : P
        }
        var S = n(11),
            E = n(25),
            A = n(28),
            C = n(14),
            _ = n(18),
            P = (n(13), "<<anonymous>>"),
            w = {
                array: a("array"),
                bool: a("boolean"),
                func: a("function"),
                number: a("number"),
                object: a("object"),
                string: a("string"),
                symbol: a("symbol"),
                any: s(),
                arrayOf: l,
                element: c(),
                instanceOf: u,
                node: f(),
                objectOf: h,
                oneOf: p,
                oneOfType: d,
                shape: m
            };
        o.prototype = Error.prototype, e.exports = w
    },
    function(e, t) {
        "use strict";
        var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        e.exports = n
    },
    function(e, t) {
        "use strict";
        e.exports = "15.4.1"
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return i.isValidElement(e) ? void 0 : o("143"), e
        }
        var o = n(9),
            i = n(11);
        n(10);
        e.exports = r
    },
    function(e, t, n) {
        e.exports = n(32)
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function a(e) {
            var t = "transition" + e + "Timeout",
                n = "transition" + e;
            return function(e) {
                if (e[n]) {
                    if (null == e[t]) return new Error(t + " wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
                    if ("number" != typeof e[t]) return new Error(t + " must be a number (in milliseconds)")
                }
            }
        }
        var s = n(6),
            l = n(5),
            c = n(33),
            u = n(174),
            p = function(e) {
                function t() {
                    var n, i, a;
                    r(this, t);
                    for (var s = arguments.length, c = Array(s), p = 0; p < s; p++) c[p] = arguments[p];
                    return n = i = o(this, e.call.apply(e, [this].concat(c))), i._wrapChild = function(e) {
                        return l.createElement(u, {
                            name: i.props.transitionName,
                            appear: i.props.transitionAppear,
                            enter: i.props.transitionEnter,
                            leave: i.props.transitionLeave,
                            appearTimeout: i.props.transitionAppearTimeout,
                            enterTimeout: i.props.transitionEnterTimeout,
                            leaveTimeout: i.props.transitionLeaveTimeout
                        }, e)
                    }, a = n, o(i, a)
                }
                return i(t, e), t.prototype.render = function() {
                    return l.createElement(c, s({}, this.props, {
                        childFactory: this._wrapChild
                    }))
                }, t
            }(l.Component);
        p.displayName = "ReactCSSTransitionGroup", p.propTypes = {
            transitionName: u.propTypes.name,
            transitionAppear: l.PropTypes.bool,
            transitionEnter: l.PropTypes.bool,
            transitionLeave: l.PropTypes.bool,
            transitionAppearTimeout: a("Appear"),
            transitionEnterTimeout: a("Enter"),
            transitionLeaveTimeout: a("Leave")
        }, p.defaultProps = {
            transitionAppear: !1,
            transitionEnter: !0,
            transitionLeave: !0
        }, e.exports = p
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var a = n(6),
            s = n(5),
            l = (n(34), n(172)),
            c = n(14),
            u = function(e) {
                function t() {
                    var n, i, s;
                    r(this, t);
                    for (var c = arguments.length, u = Array(c), p = 0; p < c; p++) u[p] = arguments[p];
                    return n = i = o(this, e.call.apply(e, [this].concat(u))), i.state = {
                        children: l.getChildMapping(i.props.children)
                    }, i.performAppear = function(e) {
                        i.currentlyTransitioningKeys[e] = !0;
                        var t = i.refs[e];
                        t.componentWillAppear ? t.componentWillAppear(i._handleDoneAppearing.bind(i, e)) : i._handleDoneAppearing(e)
                    }, i._handleDoneAppearing = function(e) {
                        var t = i.refs[e];
                        t.componentDidAppear && t.componentDidAppear(), delete i.currentlyTransitioningKeys[e];
                        var n;
                        n = l.getChildMapping(i.props.children), n && n.hasOwnProperty(e) || i.performLeave(e)
                    }, i.performEnter = function(e) {
                        i.currentlyTransitioningKeys[e] = !0;
                        var t = i.refs[e];
                        t.componentWillEnter ? t.componentWillEnter(i._handleDoneEntering.bind(i, e)) : i._handleDoneEntering(e)
                    }, i._handleDoneEntering = function(e) {
                        var t = i.refs[e];
                        t.componentDidEnter && t.componentDidEnter(), delete i.currentlyTransitioningKeys[e];
                        var n;
                        n = l.getChildMapping(i.props.children), n && n.hasOwnProperty(e) || i.performLeave(e)
                    }, i.performLeave = function(e) {
                        i.currentlyTransitioningKeys[e] = !0;
                        var t = i.refs[e];
                        t.componentWillLeave ? t.componentWillLeave(i._handleDoneLeaving.bind(i, e)) : i._handleDoneLeaving(e)
                    }, i._handleDoneLeaving = function(e) {
                        var t = i.refs[e];
                        t.componentDidLeave && t.componentDidLeave(), delete i.currentlyTransitioningKeys[e];
                        var n;
                        n = l.getChildMapping(i.props.children), n && n.hasOwnProperty(e) ? i.performEnter(e) : i.setState(function(t) {
                            var n = a({}, t.children);
                            return delete n[e], {
                                children: n
                            }
                        })
                    }, s = n, o(i, s)
                }
                return i(t, e), t.prototype.componentWillMount = function() {
                    this.currentlyTransitioningKeys = {}, this.keysToEnter = [], this.keysToLeave = []
                }, t.prototype.componentDidMount = function() {
                    var e = this.state.children;
                    for (var t in e) e[t] && this.performAppear(t)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t;
                    t = l.getChildMapping(e.children);
                    var n = this.state.children;
                    this.setState({
                        children: l.mergeChildMappings(n, t)
                    });
                    var r;
                    for (r in t) {
                        var o = n && n.hasOwnProperty(r);
                        !t[r] || o || this.currentlyTransitioningKeys[r] || this.keysToEnter.push(r)
                    }
                    for (r in n) {
                        var i = t && t.hasOwnProperty(r);
                        !n[r] || i || this.currentlyTransitioningKeys[r] || this.keysToLeave.push(r)
                    }
                }, t.prototype.componentDidUpdate = function() {
                    var e = this.keysToEnter;
                    this.keysToEnter = [], e.forEach(this.performEnter);
                    var t = this.keysToLeave;
                    this.keysToLeave = [], t.forEach(this.performLeave)
                }, t.prototype.render = function() {
                    var e = [];
                    for (var t in this.state.children) {
                        var n = this.state.children[t];
                        n && e.push(s.cloneElement(this.props.childFactory(n), {
                            ref: t,
                            key: t
                        }))
                    }
                    var r = a({}, this.props);
                    return delete r.transitionLeave, delete r.transitionName, delete r.transitionAppear, delete r.transitionEnter, delete r.childFactory, delete r.transitionLeaveTimeout, delete r.transitionEnterTimeout, delete r.transitionAppearTimeout, delete r.component, s.createElement(this.props.component, r, e)
                }, t
            }(s.Component);
        u.displayName = "ReactTransitionGroup", u.propTypes = {
            component: s.PropTypes.any,
            childFactory: s.PropTypes.func
        }, u.defaultProps = {
            component: "span",
            childFactory: c.thatReturnsArgument
        }, e.exports = u
    },
    function(e, t, n) {
        "use strict";
        var r = n(35),
            o = n(113);
        t.getReactDOM = function() {
            return r
        }, t.getReactInstanceMap = function() {
            return o
        }
    },
    function(e, t, n) {
        "use strict";
        var r = n(36),
            o = n(40),
            i = n(163),
            a = n(61),
            s = n(58),
            l = n(168),
            c = n(169),
            u = n(170),
            p = n(171);
        n(13);
        o.inject();
        var h = {
            findDOMNode: c,
            render: i.render,
            unmountComponentAtNode: i.unmountComponentAtNode,
            version: l,
            unstable_batchedUpdates: s.batchedUpdates,
            unstable_renderSubtreeIntoContainer: p
        };
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
            ComponentTree: {
                getClosestInstanceFromNode: r.getClosestInstanceFromNode,
                getNodeFromInstance: function(e) {
                    return e._renderedComponent && (e = u(e)), e ? r.getNodeFromInstance(e) : null
                }
            },
            Mount: i,
            Reconciler: a
        });
        e.exports = h
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            for (var t; t = e._renderedComponent;) e = t;
            return e
        }

        function o(e, t) {
            var n = r(e);
            n._hostNode = t, t[m] = n
        }

        function i(e) {
            var t = e._hostNode;
            t && (delete t[m], e._hostNode = null)
        }

        function a(e, t) {
            if (!(e._flags & f.hasCachedChildNodes)) {
                var n = e._renderedChildren,
                    i = t.firstChild;
                e: for (var a in n)
                    if (n.hasOwnProperty(a)) {
                        var s = n[a],
                            l = r(s)._domID;
                        if (0 !== l) {
                            for (; null !== i; i = i.nextSibling)
                                if (1 === i.nodeType && i.getAttribute(d) === String(l) || 8 === i.nodeType && i.nodeValue === " react-text: " + l + " " || 8 === i.nodeType && i.nodeValue === " react-empty: " + l + " ") {
                                    o(s, i);
                                    continue e
                                }
                            u("32", l)
                        }
                    }
                e._flags |= f.hasCachedChildNodes
            }
        }

        function s(e) {
            if (e[m]) return e[m];
            for (var t = []; !e[m];) {
                if (t.push(e), !e.parentNode) return null;
                e = e.parentNode
            }
            for (var n, r; e && (r = e[m]); e = t.pop()) n = r, t.length && a(r, e);
            return n
        }

        function l(e) {
            var t = s(e);
            return null != t && t._hostNode === e ? t : null
        }

        function c(e) {
            if (void 0 === e._hostNode ? u("33") : void 0, e._hostNode) return e._hostNode;
            for (var t = []; !e._hostNode;) t.push(e), e._hostParent ? void 0 : u("34"), e = e._hostParent;
            for (; t.length; e = t.pop()) a(e, e._hostNode);
            return e._hostNode
        }
        var u = n(37),
            p = n(38),
            h = n(39),
            d = (n(10), p.ID_ATTRIBUTE_NAME),
            f = h,
            m = "__reactInternalInstance$" + Math.random().toString(36).slice(2),
            v = {
                getClosestInstanceFromNode: s,
                getInstanceFromNode: l,
                getNodeFromInstance: c,
                precacheChildNodes: a,
                precacheNode: o,
                uncacheNode: i
            };
        e.exports = v
    },
    9,
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (e & t) === t
        }
        var o = n(37),
            i = (n(10), {
                MUST_USE_PROPERTY: 1,
                HAS_BOOLEAN_VALUE: 4,
                HAS_NUMERIC_VALUE: 8,
                HAS_POSITIVE_NUMERIC_VALUE: 24,
                HAS_OVERLOADED_BOOLEAN_VALUE: 32,
                injectDOMPropertyConfig: function(e) {
                    var t = i,
                        n = e.Properties || {},
                        a = e.DOMAttributeNamespaces || {},
                        l = e.DOMAttributeNames || {},
                        c = e.DOMPropertyNames || {},
                        u = e.DOMMutationMethods || {};
                    e.isCustomAttribute && s._isCustomAttributeFunctions.push(e.isCustomAttribute);
                    for (var p in n) {
                        s.properties.hasOwnProperty(p) ? o("48", p) : void 0;
                        var h = p.toLowerCase(),
                            d = n[p],
                            f = {
                                attributeName: h,
                                attributeNamespace: null,
                                propertyName: p,
                                mutationMethod: null,
                                mustUseProperty: r(d, t.MUST_USE_PROPERTY),
                                hasBooleanValue: r(d, t.HAS_BOOLEAN_VALUE),
                                hasNumericValue: r(d, t.HAS_NUMERIC_VALUE),
                                hasPositiveNumericValue: r(d, t.HAS_POSITIVE_NUMERIC_VALUE),
                                hasOverloadedBooleanValue: r(d, t.HAS_OVERLOADED_BOOLEAN_VALUE)
                            };
                        if (f.hasBooleanValue + f.hasNumericValue + f.hasOverloadedBooleanValue <= 1 ? void 0 : o("50", p), l.hasOwnProperty(p)) {
                            var m = l[p];
                            f.attributeName = m
                        }
                        a.hasOwnProperty(p) && (f.attributeNamespace = a[p]), c.hasOwnProperty(p) && (f.propertyName = c[p]), u.hasOwnProperty(p) && (f.mutationMethod = u[p]), s.properties[p] = f
                    }
                }
            }),
            a = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
            s = {
                ID_ATTRIBUTE_NAME: "data-reactid",
                ROOT_ATTRIBUTE_NAME: "data-reactroot",
                ATTRIBUTE_NAME_START_CHAR: a,
                ATTRIBUTE_NAME_CHAR: a + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
                properties: {},
                getPossibleStandardName: null,
                _isCustomAttributeFunctions: [],
                isCustomAttribute: function(e) {
                    for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
                        var n = s._isCustomAttributeFunctions[t];
                        if (n(e)) return !0
                    }
                    return !1
                },
                injection: i
            };
        e.exports = s
    },
    function(e, t) {
        "use strict";
        var n = {
            hasCachedChildNodes: 1
        };
        e.exports = n
    },
    function(e, t, n) {
        "use strict";

        function r() {
            A || (A = !0, g.EventEmitter.injectReactEventListener(y), g.EventPluginHub.injectEventPluginOrder(s), g.EventPluginUtils.injectComponentTree(h), g.EventPluginUtils.injectTreeTraversal(f), g.EventPluginHub.injectEventPluginsByName({
                SimpleEventPlugin: E,
                EnterLeaveEventPlugin: l,
                ChangeEventPlugin: a,
                SelectEventPlugin: S,
                BeforeInputEventPlugin: i
            }), g.HostComponent.injectGenericComponentClass(p), g.HostComponent.injectTextComponentClass(m), g.DOMProperty.injectDOMPropertyConfig(o), g.DOMProperty.injectDOMPropertyConfig(c), g.DOMProperty.injectDOMPropertyConfig(T), g.EmptyComponent.injectEmptyComponentFactory(function(e) {
                return new d(e)
            }), g.Updates.injectReconcileTransaction(b), g.Updates.injectBatchingStrategy(v), g.Component.injectEnvironment(u))
        }
        var o = n(41),
            i = n(42),
            a = n(57),
            s = n(69),
            l = n(70),
            c = n(75),
            u = n(76),
            p = n(89),
            h = n(36),
            d = n(134),
            f = n(135),
            m = n(136),
            v = n(137),
            y = n(138),
            g = n(141),
            b = n(142),
            T = n(150),
            S = n(151),
            E = n(152),
            A = !1;
        e.exports = {
            inject: r
        }
    },
    function(e, t) {
        "use strict";
        var n = {
            Properties: {
                "aria-current": 0,
                "aria-details": 0,
                "aria-disabled": 0,
                "aria-hidden": 0,
                "aria-invalid": 0,
                "aria-keyshortcuts": 0,
                "aria-label": 0,
                "aria-roledescription": 0,
                "aria-autocomplete": 0,
                "aria-checked": 0,
                "aria-expanded": 0,
                "aria-haspopup": 0,
                "aria-level": 0,
                "aria-modal": 0,
                "aria-multiline": 0,
                "aria-multiselectable": 0,
                "aria-orientation": 0,
                "aria-placeholder": 0,
                "aria-pressed": 0,
                "aria-readonly": 0,
                "aria-required": 0,
                "aria-selected": 0,
                "aria-sort": 0,
                "aria-valuemax": 0,
                "aria-valuemin": 0,
                "aria-valuenow": 0,
                "aria-valuetext": 0,
                "aria-atomic": 0,
                "aria-busy": 0,
                "aria-live": 0,
                "aria-relevant": 0,
                "aria-dropeffect": 0,
                "aria-grabbed": 0,
                "aria-activedescendant": 0,
                "aria-colcount": 0,
                "aria-colindex": 0,
                "aria-colspan": 0,
                "aria-controls": 0,
                "aria-describedby": 0,
                "aria-errormessage": 0,
                "aria-flowto": 0,
                "aria-labelledby": 0,
                "aria-owns": 0,
                "aria-posinset": 0,
                "aria-rowcount": 0,
                "aria-rowindex": 0,
                "aria-rowspan": 0,
                "aria-setsize": 0
            },
            DOMAttributeNames: {},
            DOMPropertyNames: {}
        };
        e.exports = n
    },
    function(e, t, n) {
        "use strict";

        function r() {
            var e = window.opera;
            return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12
        }

        function o(e) {
            return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
        }

        function i(e) {
            switch (e) {
                case "topCompositionStart":
                    return P.compositionStart;
                case "topCompositionEnd":
                    return P.compositionEnd;
                case "topCompositionUpdate":
                    return P.compositionUpdate
            }
        }

        function a(e, t) {
            return "topKeyDown" === e && t.keyCode === b
        }

        function s(e, t) {
            switch (e) {
                case "topKeyUp":
                    return g.indexOf(t.keyCode) !== -1;
                case "topKeyDown":
                    return t.keyCode !== b;
                case "topKeyPress":
                case "topMouseDown":
                case "topBlur":
                    return !0;
                default:
                    return !1
            }
        }

        function l(e) {
            var t = e.detail;
            return "object" == typeof t && "data" in t ? t.data : null
        }

        function c(e, t, n, r) {
            var o, c;
            if (T ? o = i(e) : M ? s(e, n) && (o = P.compositionEnd) : a(e, n) && (o = P.compositionStart), !o) return null;
            A && (M || o !== P.compositionStart ? o === P.compositionEnd && M && (c = M.getData()) : M = m.getPooled(r));
            var u = v.getPooled(o, t, n, r);
            if (c) u.data = c;
            else {
                var p = l(n);
                null !== p && (u.data = p)
            }
            return d.accumulateTwoPhaseDispatches(u), u
        }

        function u(e, t) {
            switch (e) {
                case "topCompositionEnd":
                    return l(t);
                case "topKeyPress":
                    var n = t.which;
                    return n !== C ? null : (w = !0, _);
                case "topTextInput":
                    var r = t.data;
                    return r === _ && w ? null : r;
                default:
                    return null
            }
        }

        function p(e, t) {
            if (M) {
                if ("topCompositionEnd" === e || !T && s(e, t)) {
                    var n = M.getData();
                    return m.release(M), M = null, n
                }
                return null
            }
            switch (e) {
                case "topPaste":
                    return null;
                case "topKeyPress":
                    return t.which && !o(t) ? String.fromCharCode(t.which) : null;
                case "topCompositionEnd":
                    return A ? null : t.data;
                default:
                    return null
            }
        }

        function h(e, t, n, r) {
            var o;
            if (o = E ? u(e, n) : p(e, n), !o) return null;
            var i = y.getPooled(P.beforeInput, t, n, r);
            return i.data = o, d.accumulateTwoPhaseDispatches(i), i
        }
        var d = n(43),
            f = n(50),
            m = n(51),
            v = n(54),
            y = n(56),
            g = [9, 13, 27, 32],
            b = 229,
            T = f.canUseDOM && "CompositionEvent" in window,
            S = null;
        f.canUseDOM && "documentMode" in document && (S = document.documentMode);
        var E = f.canUseDOM && "TextEvent" in window && !S && !r(),
            A = f.canUseDOM && (!T || S && S > 8 && S <= 11),
            C = 32,
            _ = String.fromCharCode(C),
            P = {
                beforeInput: {
                    phasedRegistrationNames: {
                        bubbled: "onBeforeInput",
                        captured: "onBeforeInputCapture"
                    },
                    dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"]
                },
                compositionEnd: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionEnd",
                        captured: "onCompositionEndCapture"
                    },
                    dependencies: ["topBlur", "topCompositionEnd", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
                },
                compositionStart: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionStart",
                        captured: "onCompositionStartCapture"
                    },
                    dependencies: ["topBlur", "topCompositionStart", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
                },
                compositionUpdate: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionUpdate",
                        captured: "onCompositionUpdateCapture"
                    },
                    dependencies: ["topBlur", "topCompositionUpdate", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
                }
            },
            w = !1,
            M = null,
            k = {
                eventTypes: P,
                extractEvents: function(e, t, n, r) {
                    return [c(e, t, n, r), h(e, t, n, r)]
                }
            };
        e.exports = k
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            var r = t.dispatchConfig.phasedRegistrationNames[n];
            return y(e, r)
        }

        function o(e, t, n) {
            var o = r(e, n, t);
            o && (n._dispatchListeners = m(n._dispatchListeners, o), n._dispatchInstances = m(n._dispatchInstances, e))
        }

        function i(e) {
            e && e.dispatchConfig.phasedRegistrationNames && f.traverseTwoPhase(e._targetInst, o, e)
        }

        function a(e) {
            if (e && e.dispatchConfig.phasedRegistrationNames) {
                var t = e._targetInst,
                    n = t ? f.getParentInstance(t) : null;
                f.traverseTwoPhase(n, o, e)
            }
        }

        function s(e, t, n) {
            if (n && n.dispatchConfig.registrationName) {
                var r = n.dispatchConfig.registrationName,
                    o = y(e, r);
                o && (n._dispatchListeners = m(n._dispatchListeners, o), n._dispatchInstances = m(n._dispatchInstances, e))
            }
        }

        function l(e) {
            e && e.dispatchConfig.registrationName && s(e._targetInst, null, e)
        }

        function c(e) {
            v(e, i)
        }

        function u(e) {
            v(e, a)
        }

        function p(e, t, n, r) {
            f.traverseEnterLeave(n, r, s, e, t)
        }

        function h(e) {
            v(e, l)
        }
        var d = n(44),
            f = n(46),
            m = n(48),
            v = n(49),
            y = (n(13), d.getListener),
            g = {
                accumulateTwoPhaseDispatches: c,
                accumulateTwoPhaseDispatchesSkipTarget: u,
                accumulateDirectDispatches: h,
                accumulateEnterLeaveDispatches: p
            };
        e.exports = g
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return "button" === e || "input" === e || "select" === e || "textarea" === e
        }

        function o(e, t, n) {
            switch (e) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                    return !(!n.disabled || !r(t));
                default:
                    return !1
            }
        }
        var i = n(37),
            a = n(45),
            s = n(46),
            l = n(47),
            c = n(48),
            u = n(49),
            p = (n(10), {}),
            h = null,
            d = function(e, t) {
                e && (s.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e))
            },
            f = function(e) {
                return d(e, !0)
            },
            m = function(e) {
                return d(e, !1)
            },
            v = function(e) {
                return "." + e._rootNodeID
            },
            y = {
                injection: {
                    injectEventPluginOrder: a.injectEventPluginOrder,
                    injectEventPluginsByName: a.injectEventPluginsByName
                },
                putListener: function(e, t, n) {
                    "function" != typeof n ? i("94", t, typeof n) : void 0;
                    var r = v(e),
                        o = p[t] || (p[t] = {});
                    o[r] = n;
                    var s = a.registrationNameModules[t];
                    s && s.didPutListener && s.didPutListener(e, t, n)
                },
                getListener: function(e, t) {
                    var n = p[t];
                    if (o(t, e._currentElement.type, e._currentElement.props)) return null;
                    var r = v(e);
                    return n && n[r]
                },
                deleteListener: function(e, t) {
                    var n = a.registrationNameModules[t];
                    n && n.willDeleteListener && n.willDeleteListener(e, t);
                    var r = p[t];
                    if (r) {
                        var o = v(e);
                        delete r[o]
                    }
                },
                deleteAllListeners: function(e) {
                    var t = v(e);
                    for (var n in p)
                        if (p.hasOwnProperty(n) && p[n][t]) {
                            var r = a.registrationNameModules[n];
                            r && r.willDeleteListener && r.willDeleteListener(e, n), delete p[n][t]
                        }
                },
                extractEvents: function(e, t, n, r) {
                    for (var o, i = a.plugins, s = 0; s < i.length; s++) {
                        var l = i[s];
                        if (l) {
                            var u = l.extractEvents(e, t, n, r);
                            u && (o = c(o, u))
                        }
                    }
                    return o
                },
                enqueueEvents: function(e) {
                    e && (h = c(h, e))
                },
                processEventQueue: function(e) {
                    var t = h;
                    h = null, e ? u(t, f) : u(t, m), h ? i("95") : void 0, l.rethrowCaughtError()
                },
                __purge: function() {
                    p = {}
                },
                __getListenerBank: function() {
                    return p
                }
            };
        e.exports = y
    },
    function(e, t, n) {
        "use strict";

        function r() {
            if (s)
                for (var e in l) {
                    var t = l[e],
                        n = s.indexOf(e);
                    if (n > -1 ? void 0 : a("96", e), !c.plugins[n]) {
                        t.extractEvents ? void 0 : a("97", e), c.plugins[n] = t;
                        var r = t.eventTypes;
                        for (var i in r) o(r[i], t, i) ? void 0 : a("98", i, e)
                    }
                }
        }

        function o(e, t, n) {
            c.eventNameDispatchConfigs.hasOwnProperty(n) ? a("99", n) : void 0, c.eventNameDispatchConfigs[n] = e;
            var r = e.phasedRegistrationNames;
            if (r) {
                for (var o in r)
                    if (r.hasOwnProperty(o)) {
                        var s = r[o];
                        i(s, t, n)
                    }
                return !0
            }
            return !!e.registrationName && (i(e.registrationName, t, n), !0)
        }

        function i(e, t, n) {
            c.registrationNameModules[e] ? a("100", e) : void 0, c.registrationNameModules[e] = t, c.registrationNameDependencies[e] = t.eventTypes[n].dependencies
        }
        var a = n(37),
            s = (n(10), null),
            l = {},
            c = {
                plugins: [],
                eventNameDispatchConfigs: {},
                registrationNameModules: {},
                registrationNameDependencies: {},
                possibleRegistrationNames: null,
                injectEventPluginOrder: function(e) {
                    s ? a("101") : void 0, s = Array.prototype.slice.call(e), r()
                },
                injectEventPluginsByName: function(e) {
                    var t = !1;
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var o = e[n];
                            l.hasOwnProperty(n) && l[n] === o || (l[n] ? a("102", n) : void 0, l[n] = o, t = !0)
                        }
                    t && r()
                },
                getPluginModuleForEvent: function(e) {
                    var t = e.dispatchConfig;
                    if (t.registrationName) return c.registrationNameModules[t.registrationName] || null;
                    if (void 0 !== t.phasedRegistrationNames) {
                        var n = t.phasedRegistrationNames;
                        for (var r in n)
                            if (n.hasOwnProperty(r)) {
                                var o = c.registrationNameModules[n[r]];
                                if (o) return o
                            }
                    }
                    return null
                },
                _resetEventPlugins: function() {
                    s = null;
                    for (var e in l) l.hasOwnProperty(e) && delete l[e];
                    c.plugins.length = 0;
                    var t = c.eventNameDispatchConfigs;
                    for (var n in t) t.hasOwnProperty(n) && delete t[n];
                    var r = c.registrationNameModules;
                    for (var o in r) r.hasOwnProperty(o) && delete r[o]
                }
            };
        e.exports = c
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return "topMouseUp" === e || "topTouchEnd" === e || "topTouchCancel" === e
        }

        function o(e) {
            return "topMouseMove" === e || "topTouchMove" === e
        }

        function i(e) {
            return "topMouseDown" === e || "topTouchStart" === e
        }

        function a(e, t, n, r) {
            var o = e.type || "unknown-event";
            e.currentTarget = y.getNodeFromInstance(r), t ? m.invokeGuardedCallbackWithCatch(o, n, e) : m.invokeGuardedCallback(o, n, e), e.currentTarget = null
        }

        function s(e, t) {
            var n = e._dispatchListeners,
                r = e._dispatchInstances;
            if (Array.isArray(n))
                for (var o = 0; o < n.length && !e.isPropagationStopped(); o++) a(e, t, n[o], r[o]);
            else n && a(e, t, n, r);
            e._dispatchListeners = null, e._dispatchInstances = null
        }

        function l(e) {
            var t = e._dispatchListeners,
                n = e._dispatchInstances;
            if (Array.isArray(t)) {
                for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                    if (t[r](e, n[r])) return n[r]
            } else if (t && t(e, n)) return n;
            return null
        }

        function c(e) {
            var t = l(e);
            return e._dispatchInstances = null, e._dispatchListeners = null, t
        }

        function u(e) {
            var t = e._dispatchListeners,
                n = e._dispatchInstances;
            Array.isArray(t) ? f("103") : void 0, e.currentTarget = t ? y.getNodeFromInstance(n) : null;
            var r = t ? t(e) : null;
            return e.currentTarget = null, e._dispatchListeners = null, e._dispatchInstances = null, r
        }

        function p(e) {
            return !!e._dispatchListeners
        }
        var h, d, f = n(37),
            m = n(47),
            v = (n(10), n(13), {
                injectComponentTree: function(e) {
                    h = e
                },
                injectTreeTraversal: function(e) {
                    d = e
                }
            }),
            y = {
                isEndish: r,
                isMoveish: o,
                isStartish: i,
                executeDirectDispatch: u,
                executeDispatchesInOrder: s,
                executeDispatchesInOrderStopAtTrue: c,
                hasDispatches: p,
                getInstanceFromNode: function(e) {
                    return h.getInstanceFromNode(e)
                },
                getNodeFromInstance: function(e) {
                    return h.getNodeFromInstance(e)
                },
                isAncestor: function(e, t) {
                    return d.isAncestor(e, t)
                },
                getLowestCommonAncestor: function(e, t) {
                    return d.getLowestCommonAncestor(e, t)
                },
                getParentInstance: function(e) {
                    return d.getParentInstance(e)
                },
                traverseTwoPhase: function(e, t, n) {
                    return d.traverseTwoPhase(e, t, n)
                },
                traverseEnterLeave: function(e, t, n, r, o) {
                    return d.traverseEnterLeave(e, t, n, r, o)
                },
                injection: v
            };
        e.exports = y
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            try {
                t(n)
            } catch (e) {
                null === o && (o = e)
            }
        }
        var o = null,
            i = {
                invokeGuardedCallback: r,
                invokeGuardedCallbackWithCatch: r,
                rethrowCaughtError: function() {
                    if (o) {
                        var e = o;
                        throw o = null, e
                    }
                }
            };
        e.exports = i
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return null == t ? o("30") : void 0, null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
        }
        var o = n(37);
        n(10);
        e.exports = r
    },
    function(e, t) {
        "use strict";

        function n(e, t, n) {
            Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
        }
        e.exports = n
    },
    function(e, t) {
        "use strict";
        var n = !("undefined" == typeof window || !window.document || !window.document.createElement),
            r = {
                canUseDOM: n,
                canUseWorkers: "undefined" != typeof Worker,
                canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent),
                canUseViewport: n && !!window.screen,
                isInWorker: !n
            };
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            this._root = e, this._startText = this.getText(), this._fallbackText = null
        }
        var o = n(6),
            i = n(52),
            a = n(53);
        o(r.prototype, {
            destructor: function() {
                this._root = null, this._startText = null, this._fallbackText = null
            },
            getText: function() {
                return "value" in this._root ? this._root.value : this._root[a()]
            },
            getData: function() {
                if (this._fallbackText) return this._fallbackText;
                var e, t, n = this._startText,
                    r = n.length,
                    o = this.getText(),
                    i = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++);
                var a = r - e;
                for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
                var s = t > 1 ? 1 - t : void 0;
                return this._fallbackText = o.slice(e, s), this._fallbackText
            }
        }), i.addPoolingTo(r), e.exports = r
    },
    [336, 37],
    function(e, t, n) {
        "use strict";

        function r() {
            return !i && o.canUseDOM && (i = "textContent" in document.documentElement ? "textContent" : "innerText"), i
        }
        var o = n(50),
            i = null;
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return o.call(this, e, t, n, r)
        }
        var o = n(55),
            i = {
                data: null
            };
        o.augmentClass(r, i), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n;
            var o = this.constructor.Interface;
            for (var i in o)
                if (o.hasOwnProperty(i)) {
                    var s = o[i];
                    s ? this[i] = s(n) : "target" === i ? this.target = r : this[i] = n[i]
                }
            var l = null != n.defaultPrevented ? n.defaultPrevented : n.returnValue === !1;
            return l ? this.isDefaultPrevented = a.thatReturnsTrue : this.isDefaultPrevented = a.thatReturnsFalse, this.isPropagationStopped = a.thatReturnsFalse, this
        }
        var o = n(6),
            i = n(52),
            a = n(14),
            s = (n(13), "function" == typeof Proxy, ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"]),
            l = {
                type: null,
                target: null,
                currentTarget: a.thatReturnsNull,
                eventPhase: null,
                bubbles: null,
                cancelable: null,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: null,
                isTrusted: null
            };
        o(r.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = a.thatReturnsTrue)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = a.thatReturnsTrue)
            },
            persist: function() {
                this.isPersistent = a.thatReturnsTrue
            },
            isPersistent: a.thatReturnsFalse,
            destructor: function() {
                var e = this.constructor.Interface;
                for (var t in e) this[t] = null;
                for (var n = 0; n < s.length; n++) this[s[n]] = null
            }
        }), r.Interface = l, r.augmentClass = function(e, t) {
            var n = this,
                r = function() {};
            r.prototype = n.prototype;
            var a = new r;
            o(a, e.prototype), e.prototype = a, e.prototype.constructor = e, e.Interface = o({}, n.Interface, t), e.augmentClass = n.augmentClass, i.addPoolingTo(e, i.fourArgumentPooler)
        }, i.addPoolingTo(r, i.fourArgumentPooler), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return o.call(this, e, t, n, r)
        }
        var o = n(55),
            i = {
                data: null
            };
        o.augmentClass(r, i), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.nodeName && e.nodeName.toLowerCase();
            return "select" === t || "input" === t && "file" === e.type
        }

        function o(e) {
            var t = A.getPooled(w.change, k, e, C(e));
            b.accumulateTwoPhaseDispatches(t), E.batchedUpdates(i, t)
        }

        function i(e) {
            g.enqueueEvents(e), g.processEventQueue(!1)
        }

        function a(e, t) {
            M = e, k = t, M.attachEvent("onchange", o)
        }

        function s() {
            M && (M.detachEvent("onchange", o), M = null, k = null)
        }

        function l(e, t) {
            if ("topChange" === e) return t
        }

        function c(e, t, n) {
            "topFocus" === e ? (s(), a(t, n)) : "topBlur" === e && s()
        }

        function u(e, t) {
            M = e, k = t, x = e.value, I = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"), Object.defineProperty(M, "value", R), M.attachEvent ? M.attachEvent("onpropertychange", h) : M.addEventListener("propertychange", h, !1)
        }

        function p() {
            M && (delete M.value, M.detachEvent ? M.detachEvent("onpropertychange", h) : M.removeEventListener("propertychange", h, !1), M = null, k = null, x = null, I = null)
        }

        function h(e) {
            if ("value" === e.propertyName) {
                var t = e.srcElement.value;
                t !== x && (x = t, o(e))
            }
        }

        function d(e, t) {
            if ("topInput" === e) return t
        }

        function f(e, t, n) {
            "topFocus" === e ? (p(), u(t, n)) : "topBlur" === e && p()
        }

        function m(e, t) {
            if (("topSelectionChange" === e || "topKeyUp" === e || "topKeyDown" === e) && M && M.value !== x) return x = M.value, k
        }

        function v(e) {
            return e.nodeName && "input" === e.nodeName.toLowerCase() && ("checkbox" === e.type || "radio" === e.type)
        }

        function y(e, t) {
            if ("topClick" === e) return t
        }
        var g = n(44),
            b = n(43),
            T = n(50),
            S = n(36),
            E = n(58),
            A = n(55),
            C = n(66),
            _ = n(67),
            P = n(68),
            w = {
                change: {
                    phasedRegistrationNames: {
                        bubbled: "onChange",
                        captured: "onChangeCapture"
                    },
                    dependencies: ["topBlur", "topChange", "topClick", "topFocus", "topInput", "topKeyDown", "topKeyUp", "topSelectionChange"]
                }
            },
            M = null,
            k = null,
            x = null,
            I = null,
            N = !1;
        T.canUseDOM && (N = _("change") && (!document.documentMode || document.documentMode > 8));
        var O = !1;
        T.canUseDOM && (O = _("input") && (!document.documentMode || document.documentMode > 11));
        var R = {
                get: function() {
                    return I.get.call(this)
                },
                set: function(e) {
                    x = "" + e, I.set.call(this, e)
                }
            },
            D = {
                eventTypes: w,
                extractEvents: function(e, t, n, o) {
                    var i, a, s = t ? S.getNodeFromInstance(t) : window;
                    if (r(s) ? N ? i = l : a = c : P(s) ? O ? i = d : (i = m, a = f) : v(s) && (i = y), i) {
                        var u = i(e, t);
                        if (u) {
                            var p = A.getPooled(w.change, u, n, o);
                            return p.type = "change", b.accumulateTwoPhaseDispatches(p), p
                        }
                    }
                    a && a(e, s, t)
                }
            };
        e.exports = D
    },
    function(e, t, n) {
        "use strict";

        function r() {
            w.ReactReconcileTransaction && S ? void 0 : u("123")
        }

        function o() {
            this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = h.getPooled(), this.reconcileTransaction = w.ReactReconcileTransaction.getPooled(!0)
        }

        function i(e, t, n, o, i, a) {
            return r(), S.batchedUpdates(e, t, n, o, i, a)
        }

        function a(e, t) {
            return e._mountOrder - t._mountOrder
        }

        function s(e) {
            var t = e.dirtyComponentsLength;
            t !== y.length ? u("124", t, y.length) : void 0, y.sort(a), g++;
            for (var n = 0; n < t; n++) {
                var r = y[n],
                    o = r._pendingCallbacks;
                r._pendingCallbacks = null;
                var i;
                if (f.logTopLevelRenders) {
                    var s = r;
                    r._currentElement.type.isReactTopLevelWrapper && (s = r._renderedComponent), i = "React update: " + s.getName(), console.time(i)
                }
                if (m.performUpdateIfNecessary(r, e.reconcileTransaction, g), i && console.timeEnd(i), o)
                    for (var l = 0; l < o.length; l++) e.callbackQueue.enqueue(o[l], r.getPublicInstance())
            }
        }

        function l(e) {
            return r(), S.isBatchingUpdates ? (y.push(e), void(null == e._updateBatchNumber && (e._updateBatchNumber = g + 1))) : void S.batchedUpdates(l, e)
        }

        function c(e, t) {
            S.isBatchingUpdates ? void 0 : u("125"), b.enqueue(e, t), T = !0
        }
        var u = n(37),
            p = n(6),
            h = n(59),
            d = n(52),
            f = n(60),
            m = n(61),
            v = n(65),
            y = (n(10), []),
            g = 0,
            b = h.getPooled(),
            T = !1,
            S = null,
            E = {
                initialize: function() {
                    this.dirtyComponentsLength = y.length
                },
                close: function() {
                    this.dirtyComponentsLength !== y.length ? (y.splice(0, this.dirtyComponentsLength), _()) : y.length = 0
                }
            },
            A = {
                initialize: function() {
                    this.callbackQueue.reset()
                },
                close: function() {
                    this.callbackQueue.notifyAll()
                }
            },
            C = [E, A];
        p(o.prototype, v, {
            getTransactionWrappers: function() {
                return C
            },
            destructor: function() {
                this.dirtyComponentsLength = null, h.release(this.callbackQueue), this.callbackQueue = null, w.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null
            },
            perform: function(e, t, n) {
                return v.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n)
            }
        }), d.addPoolingTo(o);
        var _ = function() {
                for (; y.length || T;) {
                    if (y.length) {
                        var e = o.getPooled();
                        e.perform(s, null, e), o.release(e)
                    }
                    if (T) {
                        T = !1;
                        var t = b;
                        b = h.getPooled(), t.notifyAll(), h.release(t)
                    }
                }
            },
            P = {
                injectReconcileTransaction: function(e) {
                    e ? void 0 : u("126"), w.ReactReconcileTransaction = e
                },
                injectBatchingStrategy: function(e) {
                    e ? void 0 : u("127"), "function" != typeof e.batchedUpdates ? u("128") : void 0, "boolean" != typeof e.isBatchingUpdates ? u("129") : void 0, S = e
                }
            },
            w = {
                ReactReconcileTransaction: null,
                batchedUpdates: i,
                enqueueUpdate: l,
                flushBatchedUpdates: _,
                injection: P,
                asap: c
            };
        e.exports = w
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var o = n(37),
            i = n(52),
            a = (n(10), function() {
                function e(t) {
                    r(this, e), this._callbacks = null, this._contexts = null, this._arg = t
                }
                return e.prototype.enqueue = function(e, t) {
                    this._callbacks = this._callbacks || [], this._callbacks.push(e), this._contexts = this._contexts || [], this._contexts.push(t)
                }, e.prototype.notifyAll = function() {
                    var e = this._callbacks,
                        t = this._contexts,
                        n = this._arg;
                    if (e && t) {
                        e.length !== t.length ? o("24") : void 0, this._callbacks = null, this._contexts = null;
                        for (var r = 0; r < e.length; r++) e[r].call(t[r], n);
                        e.length = 0, t.length = 0
                    }
                }, e.prototype.checkpoint = function() {
                    return this._callbacks ? this._callbacks.length : 0
                }, e.prototype.rollback = function(e) {
                    this._callbacks && this._contexts && (this._callbacks.length = e, this._contexts.length = e)
                }, e.prototype.reset = function() {
                    this._callbacks = null, this._contexts = null
                }, e.prototype.destructor = function() {
                    this.reset()
                }, e
            }());
        e.exports = i.addPoolingTo(a)
    },
    function(e, t) {
        "use strict";
        var n = {
            logTopLevelRenders: !1
        };
        e.exports = n
    },
    function(e, t, n) {
        "use strict";

        function r() {
            o.attachRefs(this, this._currentElement)
        }
        var o = n(62),
            i = (n(64), n(13), {
                mountComponent: function(e, t, n, o, i, a) {
                    var s = e.mountComponent(t, n, o, i, a);
                    return e._currentElement && null != e._currentElement.ref && t.getReactMountReady().enqueue(r, e), s
                },
                getHostNode: function(e) {
                    return e.getHostNode()
                },
                unmountComponent: function(e, t) {
                    o.detachRefs(e, e._currentElement), e.unmountComponent(t)
                },
                receiveComponent: function(e, t, n, i) {
                    var a = e._currentElement;
                    if (t !== a || i !== e._context) {
                        var s = o.shouldUpdateRefs(a, t);
                        s && o.detachRefs(e, a), e.receiveComponent(t, n, i), s && e._currentElement && null != e._currentElement.ref && n.getReactMountReady().enqueue(r, e)
                    }
                },
                performUpdateIfNecessary: function(e, t, n) {
                    e._updateBatchNumber === n && e.performUpdateIfNecessary(t)
                }
            });
        e.exports = i
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            "function" == typeof e ? e(t.getPublicInstance()) : i.addComponentAsRefTo(t, e, n)
        }

        function o(e, t, n) {
            "function" == typeof e ? e(null) : i.removeComponentAsRefFrom(t, e, n)
        }
        var i = n(63),
            a = {};
        a.attachRefs = function(e, t) {
            if (null !== t && "object" == typeof t) {
                var n = t.ref;
                null != n && r(n, e, t._owner)
            }
        }, a.shouldUpdateRefs = function(e, t) {
            var n = null,
                r = null;
            null !== e && "object" == typeof e && (n = e.ref, r = e._owner);
            var o = null,
                i = null;
            return null !== t && "object" == typeof t && (o = t.ref, i = t._owner), n !== o || "string" == typeof o && i !== r
        }, a.detachRefs = function(e, t) {
            if (null !== t && "object" == typeof t) {
                var n = t.ref;
                null != n && o(n, e, t._owner)
            }
        }, e.exports = a
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef)
        }
        var o = n(37),
            i = (n(10), {
                addComponentAsRefTo: function(e, t, n) {
                    r(n) ? void 0 : o("119"), n.attachRef(t, e)
                },
                removeComponentAsRefFrom: function(e, t, n) {
                    r(n) ? void 0 : o("120");
                    var i = n.getPublicInstance();
                    i && i.refs[t] === e.getPublicInstance() && n.detachRef(t)
                }
            });
        e.exports = i
    },
    function(e, t, n) {
        "use strict";
        var r = null;
        e.exports = {
            debugTool: r
        }
    },
    function(e, t, n) {
        "use strict";
        var r = n(37),
            o = (n(10), {}),
            i = {
                reinitializeTransaction: function() {
                    this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1
                },
                _isInTransaction: !1,
                getTransactionWrappers: null,
                isInTransaction: function() {
                    return !!this._isInTransaction
                },
                perform: function(e, t, n, o, i, a, s, l) {
                    this.isInTransaction() ? r("27") : void 0;
                    var c, u;
                    try {
                        this._isInTransaction = !0, c = !0, this.initializeAll(0), u = e.call(t, n, o, i, a, s, l), c = !1
                    } finally {
                        try {
                            if (c) try {
                                this.closeAll(0)
                            } catch (e) {} else this.closeAll(0)
                        } finally {
                            this._isInTransaction = !1
                        }
                    }
                    return u
                },
                initializeAll: function(e) {
                    for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                        var r = t[n];
                        try {
                            this.wrapperInitData[n] = o, this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null
                        } finally {
                            if (this.wrapperInitData[n] === o) try {
                                this.initializeAll(n + 1)
                            } catch (e) {}
                        }
                    }
                },
                closeAll: function(e) {
                    this.isInTransaction() ? void 0 : r("28");
                    for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                        var i, a = t[n],
                            s = this.wrapperInitData[n];
                        try {
                            i = !0, s !== o && a.close && a.close.call(this, s), i = !1
                        } finally {
                            if (i) try {
                                this.closeAll(n + 1)
                            } catch (e) {}
                        }
                    }
                    this.wrapperInitData.length = 0
                }
            };
        e.exports = i
    },
    function(e, t) {
        "use strict";

        function n(e) {
            var t = e.target || e.srcElement || window;
            return t.correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
        }
        e.exports = n
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!i.canUseDOM || t && !("addEventListener" in document)) return !1;
            var n = "on" + e,
                r = n in document;
            if (!r) {
                var a = document.createElement("div");
                a.setAttribute(n, "return;"), r = "function" == typeof a[n]
            }
            return !r && o && "wheel" === e && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r
        }
        var o, i = n(50);
        i.canUseDOM && (o = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0), e.exports = r
    },
    function(e, t) {
        "use strict";

        function n(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!r[e.type] : "textarea" === t
        }
        var r = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        e.exports = n
    },
    function(e, t) {
        "use strict";
        var n = ["ResponderEventPlugin", "SimpleEventPlugin", "TapEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"];
        e.exports = n
    },
    function(e, t, n) {
        "use strict";
        var r = n(43),
            o = n(36),
            i = n(71),
            a = {
                mouseEnter: {
                    registrationName: "onMouseEnter",
                    dependencies: ["topMouseOut", "topMouseOver"]
                },
                mouseLeave: {
                    registrationName: "onMouseLeave",
                    dependencies: ["topMouseOut", "topMouseOver"]
                }
            },
            s = {
                eventTypes: a,
                extractEvents: function(e, t, n, s) {
                    if ("topMouseOver" === e && (n.relatedTarget || n.fromElement)) return null;
                    if ("topMouseOut" !== e && "topMouseOver" !== e) return null;
                    var l;
                    if (s.window === s) l = s;
                    else {
                        var c = s.ownerDocument;
                        l = c ? c.defaultView || c.parentWindow : window
                    }
                    var u, p;
                    if ("topMouseOut" === e) {
                        u = t;
                        var h = n.relatedTarget || n.toElement;
                        p = h ? o.getClosestInstanceFromNode(h) : null
                    } else u = null, p = t;
                    if (u === p) return null;
                    var d = null == u ? l : o.getNodeFromInstance(u),
                        f = null == p ? l : o.getNodeFromInstance(p),
                        m = i.getPooled(a.mouseLeave, u, n, s);
                    m.type = "mouseleave", m.target = d, m.relatedTarget = f;
                    var v = i.getPooled(a.mouseEnter, p, n, s);
                    return v.type = "mouseenter", v.target = f, v.relatedTarget = d, r.accumulateEnterLeaveDispatches(m, v, u, p), [m, v]
                }
            };
        e.exports = s
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return o.call(this, e, t, n, r)
        }
        var o = n(72),
            i = n(73),
            a = n(74),
            s = {
                screenX: null,
                screenY: null,
                clientX: null,
                clientY: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                getModifierState: a,
                button: function(e) {
                    var t = e.button;
                    return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0
                },
                buttons: null,
                relatedTarget: function(e) {
                    return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
                },
                pageX: function(e) {
                    return "pageX" in e ? e.pageX : e.clientX + i.currentScrollLeft
                },
                pageY: function(e) {
                    return "pageY" in e ? e.pageY : e.clientY + i.currentScrollTop
                }
            };
        o.augmentClass(r, s), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return o.call(this, e, t, n, r)
        }
        var o = n(55),
            i = n(66),
            a = {
                view: function(e) {
                    if (e.view) return e.view;
                    var t = i(e);
                    if (t.window === t) return t;
                    var n = t.ownerDocument;
                    return n ? n.defaultView || n.parentWindow : window
                },
                detail: function(e) {
                    return e.detail || 0
                }
            };
        o.augmentClass(r, a), e.exports = r
    },
    function(e, t) {
        "use strict";
        var n = {
            currentScrollLeft: 0,
            currentScrollTop: 0,
            refreshScrollValues: function(e) {
                n.currentScrollLeft = e.x, n.currentScrollTop = e.y
            }
        };
        e.exports = n
    },
    function(e, t) {
        "use strict";

        function n(e) {
            var t = this,
                n = t.nativeEvent;
            if (n.getModifierState) return n.getModifierState(e);
            var r = o[e];
            return !!r && !!n[r]
        }

        function r(e) {
            return n
        }
        var o = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        e.exports = r
    },
    function(e, t, n) {
        "use strict";
        var r = n(38),
            o = r.injection.MUST_USE_PROPERTY,
            i = r.injection.HAS_BOOLEAN_VALUE,
            a = r.injection.HAS_NUMERIC_VALUE,
            s = r.injection.HAS_POSITIVE_NUMERIC_VALUE,
            l = r.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
            c = {
                isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + r.ATTRIBUTE_NAME_CHAR + "]*$")),
                Properties: {
                    accept: 0,
                    acceptCharset: 0,
                    accessKey: 0,
                    action: 0,
                    allowFullScreen: i,
                    allowTransparency: 0,
                    alt: 0,
                    as: 0,
                    async: i,
                    autoComplete: 0,
                    autoPlay: i,
                    capture: i,
                    cellPadding: 0,
                    cellSpacing: 0,
                    charSet: 0,
                    challenge: 0,
                    checked: o | i,
                    cite: 0,
                    classID: 0,
                    className: 0,
                    cols: s,
                    colSpan: 0,
                    content: 0,
                    contentEditable: 0,
                    contextMenu: 0,
                    controls: i,
                    coords: 0,
                    crossOrigin: 0,
                    data: 0,
                    dateTime: 0,
                    default: i,
                    defer: i,
                    dir: 0,
                    disabled: i,
                    download: l,
                    draggable: 0,
                    encType: 0,
                    form: 0,
                    formAction: 0,
                    formEncType: 0,
                    formMethod: 0,
                    formNoValidate: i,
                    formTarget: 0,
                    frameBorder: 0,
                    headers: 0,
                    height: 0,
                    hidden: i,
                    high: 0,
                    href: 0,
                    hrefLang: 0,
                    htmlFor: 0,
                    httpEquiv: 0,
                    icon: 0,
                    id: 0,
                    inputMode: 0,
                    integrity: 0,
                    is: 0,
                    keyParams: 0,
                    keyType: 0,
                    kind: 0,
                    label: 0,
                    lang: 0,
                    list: 0,
                    loop: i,
                    low: 0,
                    manifest: 0,
                    marginHeight: 0,
                    marginWidth: 0,
                    max: 0,
                    maxLength: 0,
                    media: 0,
                    mediaGroup: 0,
                    method: 0,
                    min: 0,
                    minLength: 0,
                    multiple: o | i,
                    muted: o | i,
                    name: 0,
                    nonce: 0,
                    noValidate: i,
                    open: i,
                    optimum: 0,
                    pattern: 0,
                    placeholder: 0,
                    playsInline: i,
                    poster: 0,
                    preload: 0,
                    profile: 0,
                    radioGroup: 0,
                    readOnly: i,
                    referrerPolicy: 0,
                    rel: 0,
                    required: i,
                    reversed: i,
                    role: 0,
                    rows: s,
                    rowSpan: a,
                    sandbox: 0,
                    scope: 0,
                    scoped: i,
                    scrolling: 0,
                    seamless: i,
                    selected: o | i,
                    shape: 0,
                    size: s,
                    sizes: 0,
                    span: s,
                    spellCheck: 0,
                    src: 0,
                    srcDoc: 0,
                    srcLang: 0,
                    srcSet: 0,
                    start: a,
                    step: 0,
                    style: 0,
                    summary: 0,
                    tabIndex: 0,
                    target: 0,
                    title: 0,
                    type: 0,
                    useMap: 0,
                    value: 0,
                    width: 0,
                    wmode: 0,
                    wrap: 0,
                    about: 0,
                    datatype: 0,
                    inlist: 0,
                    prefix: 0,
                    property: 0,
                    resource: 0,
                    typeof: 0,
                    vocab: 0,
                    autoCapitalize: 0,
                    autoCorrect: 0,
                    autoSave: 0,
                    color: 0,
                    itemProp: 0,
                    itemScope: i,
                    itemType: 0,
                    itemID: 0,
                    itemRef: 0,
                    results: 0,
                    security: 0,
                    unselectable: 0
                },
                DOMAttributeNames: {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv"
                },
                DOMPropertyNames: {}
            };
        e.exports = c
    },
    function(e, t, n) {
        "use strict";
        var r = n(77),
            o = n(88),
            i = {
                processChildrenUpdates: o.dangerouslyProcessChildrenUpdates,
                replaceNodeWithMarkup: r.dangerouslyReplaceNodeWithMarkup
            };
        e.exports = i
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return Array.isArray(t) && (t = t[1]), t ? t.nextSibling : e.firstChild
        }

        function o(e, t, n) {
            u.insertTreeBefore(e, t, n)
        }

        function i(e, t, n) {
            Array.isArray(t) ? s(e, t[0], t[1], n) : m(e, t, n)
        }

        function a(e, t) {
            if (Array.isArray(t)) {
                var n = t[1];
                t = t[0], l(e, t, n), e.removeChild(n)
            }
            e.removeChild(t)
        }

        function s(e, t, n, r) {
            for (var o = t;;) {
                var i = o.nextSibling;
                if (m(e, o, r), o === n) break;
                o = i
            }
        }

        function l(e, t, n) {
            for (;;) {
                var r = t.nextSibling;
                if (r === n) break;
                e.removeChild(r)
            }
        }

        function c(e, t, n) {
            var r = e.parentNode,
                o = e.nextSibling;
            o === t ? n && m(r, document.createTextNode(n), o) : n ? (f(o, n), l(r, o, t)) : l(r, e, t)
        }
        var u = n(78),
            p = n(84),
            h = (n(36), n(64), n(81)),
            d = n(80),
            f = n(82),
            m = h(function(e, t, n) {
                e.insertBefore(t, n)
            }),
            v = p.dangerouslyReplaceNodeWithMarkup,
            y = {
                dangerouslyReplaceNodeWithMarkup: v,
                replaceDelimitedText: c,
                processUpdates: function(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var s = t[n];
                        switch (s.type) {
                            case "INSERT_MARKUP":
                                o(e, s.content, r(e, s.afterNode));
                                break;
                            case "MOVE_EXISTING":
                                i(e, s.fromNode, r(e, s.afterNode));
                                break;
                            case "SET_MARKUP":
                                d(e, s.content);
                                break;
                            case "TEXT_CONTENT":
                                f(e, s.content);
                                break;
                            case "REMOVE_NODE":
                                a(e, s.fromNode)
                        }
                    }
                }
            };
        e.exports = y
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            if (v) {
                var t = e.node,
                    n = e.children;
                if (n.length)
                    for (var r = 0; r < n.length; r++) y(t, n[r], null);
                else null != e.html ? p(t, e.html) : null != e.text && d(t, e.text)
            }
        }

        function o(e, t) {
            e.parentNode.replaceChild(t.node, e), r(t)
        }

        function i(e, t) {
            v ? e.children.push(t) : e.node.appendChild(t.node)
        }

        function a(e, t) {
            v ? e.html = t : p(e.node, t)
        }

        function s(e, t) {
            v ? e.text = t : d(e.node, t)
        }

        function l() {
            return this.node.nodeName
        }

        function c(e) {
            return {
                node: e,
                children: [],
                html: null,
                text: null,
                toString: l
            }
        }
        var u = n(79),
            p = n(80),
            h = n(81),
            d = n(82),
            f = 1,
            m = 11,
            v = "undefined" != typeof document && "number" == typeof document.documentMode || "undefined" != typeof navigator && "string" == typeof navigator.userAgent && /\bEdge\/\d/.test(navigator.userAgent),
            y = h(function(e, t, n) {
                t.node.nodeType === m || t.node.nodeType === f && "object" === t.node.nodeName.toLowerCase() && (null == t.node.namespaceURI || t.node.namespaceURI === u.html) ? (r(t), e.insertBefore(t.node, n)) : (e.insertBefore(t.node, n), r(t))
            });
        c.insertTreeBefore = y, c.replaceChildWithTree = o, c.queueChild = i, c.queueHTML = a, c.queueText = s, e.exports = c
    },
    function(e, t) {
        "use strict";
        var n = {
            html: "http://www.w3.org/1999/xhtml",
            mathml: "http://www.w3.org/1998/Math/MathML",
            svg: "http://www.w3.org/2000/svg"
        };
        e.exports = n
    },
    function(e, t, n) {
        "use strict";
        var r, o = n(50),
            i = n(79),
            a = /^[ \r\n\t\f]/,
            s = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
            l = n(81),
            c = l(function(e, t) {
                if (e.namespaceURI !== i.svg || "innerHTML" in e) e.innerHTML = t;
                else {
                    r = r || document.createElement("div"), r.innerHTML = "<svg>" + t + "</svg>";
                    for (var n = r.firstChild; n.firstChild;) e.appendChild(n.firstChild)
                }
            });
        if (o.canUseDOM) {
            var u = document.createElement("div");
            u.innerHTML = " ", "" === u.innerHTML && (c = function(e, t) {
                if (e.parentNode && e.parentNode.replaceChild(e, e), a.test(t) || "<" === t[0] && s.test(t)) {
                    e.innerHTML = String.fromCharCode(65279) + t;
                    var n = e.firstChild;
                    1 === n.data.length ? e.removeChild(n) : n.deleteData(0, 1)
                } else e.innerHTML = t
            }), u = null
        }
        e.exports = c
    },
    function(e, t) {
        "use strict";
        var n = function(e) {
            return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
                MSApp.execUnsafeLocalFunction(function() {
                    return e(t, n, r, o)
                })
            } : e
        };
        e.exports = n
    },
    function(e, t, n) {
        "use strict";
        var r = n(50),
            o = n(83),
            i = n(80),
            a = function(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                }
                e.textContent = t
            };
        r.canUseDOM && ("textContent" in document.documentElement || (a = function(e, t) {
            return 3 === e.nodeType ? void(e.nodeValue = t) : void i(e, o(t))
        })), e.exports = a
    },
    function(e, t) {
        "use strict";

        function n(e) {
            var t = "" + e,
                n = o.exec(t);
            if (!n) return t;
            var r, i = "",
                a = 0,
                s = 0;
            for (a = n.index; a < t.length; a++) {
                switch (t.charCodeAt(a)) {
                    case 34:
                        r = "&quot;";
                        break;
                    case 38:
                        r = "&amp;";
                        break;
                    case 39:
                        r = "&#x27;";
                        break;
                    case 60:
                        r = "&lt;";
                        break;
                    case 62:
                        r = "&gt;";
                        break;
                    default:
                        continue
                }
                s !== a && (i += t.substring(s, a)), s = a + 1, i += r
            }
            return s !== a ? i + t.substring(s, a) : i
        }

        function r(e) {
            return "boolean" == typeof e || "number" == typeof e ? "" + e : n(e)
        }
        var o = /["'&<>]/;
        e.exports = r
    },
    function(e, t, n) {
        "use strict";
        var r = n(37),
            o = n(78),
            i = n(50),
            a = n(85),
            s = n(14),
            l = (n(10), {
                dangerouslyReplaceNodeWithMarkup: function(e, t) {
                    if (i.canUseDOM ? void 0 : r("56"), t ? void 0 : r("57"), "HTML" === e.nodeName ? r("58") : void 0, "string" == typeof t) {
                        var n = a(t, s)[0];
                        e.parentNode.replaceChild(n, e)
                    } else o.replaceChildWithTree(e, t)
                }
            });
        e.exports = l
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.match(u);
            return t && t[1].toLowerCase()
        }

        function o(e, t) {
            var n = c;
            c ? void 0 : l(!1);
            var o = r(e),
                i = o && s(o);
            if (i) {
                n.innerHTML = i[1] + e + i[2];
                for (var u = i[0]; u--;) n = n.lastChild
            } else n.innerHTML = e;
            var p = n.getElementsByTagName("script");
            p.length && (t ? void 0 : l(!1), a(p).forEach(t));
            for (var h = Array.from(n.childNodes); n.lastChild;) n.removeChild(n.lastChild);
            return h
        }
        var i = n(50),
            a = n(86),
            s = n(87),
            l = n(10),
            c = i.canUseDOM ? document.createElement("div") : null,
            u = /^\s*<(\w+)/;
        e.exports = o
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.length;
            if (Array.isArray(e) || "object" != typeof e && "function" != typeof e ? a(!1) : void 0, "number" != typeof t ? a(!1) : void 0, 0 === t || t - 1 in e ? void 0 : a(!1), "function" == typeof e.callee ? a(!1) : void 0, e.hasOwnProperty) try {
                return Array.prototype.slice.call(e)
            } catch (e) {}
            for (var n = Array(t), r = 0; r < t; r++) n[r] = e[r];
            return n
        }

        function o(e) {
            return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e)
        }

        function i(e) {
            return o(e) ? Array.isArray(e) ? e.slice() : r(e) : [e]
        }
        var a = n(10);
        e.exports = i
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return a ? void 0 : i(!1), h.hasOwnProperty(e) || (e = "*"), s.hasOwnProperty(e) || ("*" === e ? a.innerHTML = "<link />" : a.innerHTML = "<" + e + "></" + e + ">", s[e] = !a.firstChild), s[e] ? h[e] : null
        }
        var o = n(50),
            i = n(10),
            a = o.canUseDOM ? document.createElement("div") : null,
            s = {},
            l = [1, '<select multiple="true">', "</select>"],
            c = [1, "<table>", "</table>"],
            u = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            p = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
            h = {
                "*": [1, "?<div>", "</div>"],
                area: [1, "<map>", "</map>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                param: [1, "<object>", "</object>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                optgroup: l,
                option: l,
                caption: c,
                colgroup: c,
                tbody: c,
                tfoot: c,
                thead: c,
                td: u,
                th: u
            },
            d = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
        d.forEach(function(e) {
            h[e] = p, s[e] = !0
        }), e.exports = r
    },
    function(e, t, n) {
        "use strict";
        var r = n(77),
            o = n(36),
            i = {
                dangerouslyProcessChildrenUpdates: function(e, t) {
                    var n = o.getNodeFromInstance(e);
                    r.processUpdates(n, t)
                }
            };
        e.exports = i
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            if (e) {
                var t = e._currentElement._owner || null;
                if (t) {
                    var n = t.getName();
                    if (n) return " This DOM node was rendered by `" + n + "`."
                }
            }
            return ""
        }

        function o(e, t) {
            t && (X[e._tag] && (null != t.children || null != t.dangerouslySetInnerHTML ? m("137", e._tag, e._currentElement._owner ? " Check the render method of " + e._currentElement._owner.getName() + "." : "") : void 0), null != t.dangerouslySetInnerHTML && (null != t.children ? m("60") : void 0, "object" == typeof t.dangerouslySetInnerHTML && V in t.dangerouslySetInnerHTML ? void 0 : m("61")), null != t.style && "object" != typeof t.style ? m("62", r(e)) : void 0)
        }

        function i(e, t, n, r) {
            if (!(r instanceof O)) {
                var o = e._hostContainerInfo,
                    i = o._node && o._node.nodeType === W,
                    s = i ? o._node : o._ownerDocument;
                L(t, s), r.getReactMountReady().enqueue(a, {
                    inst: e,
                    registrationName: t,
                    listener: n
                })
            }
        }

        function a() {
            var e = this;
            A.putListener(e.inst, e.registrationName, e.listener)
        }

        function s() {
            var e = this;
            M.postMountWrapper(e)
        }

        function l() {
            var e = this;
            I.postMountWrapper(e)
        }

        function c() {
            var e = this;
            k.postMountWrapper(e)
        }

        function u() {
            var e = this;
            e._rootNodeID ? void 0 : m("63");
            var t = G(e);
            switch (t ? void 0 : m("64"), e._tag) {
                case "iframe":
                case "object":
                    e._wrapperState.listeners = [_.trapBubbledEvent("topLoad", "load", t)];
                    break;
                case "video":
                case "audio":
                    e._wrapperState.listeners = [];
                    for (var n in q) q.hasOwnProperty(n) && e._wrapperState.listeners.push(_.trapBubbledEvent(n, q[n], t));
                    break;
                case "source":
                    e._wrapperState.listeners = [_.trapBubbledEvent("topError", "error", t)];
                    break;
                case "img":
                    e._wrapperState.listeners = [_.trapBubbledEvent("topError", "error", t), _.trapBubbledEvent("topLoad", "load", t)];
                    break;
                case "form":
                    e._wrapperState.listeners = [_.trapBubbledEvent("topReset", "reset", t), _.trapBubbledEvent("topSubmit", "submit", t)];
                    break;
                case "input":
                case "select":
                case "textarea":
                    e._wrapperState.listeners = [_.trapBubbledEvent("topInvalid", "invalid", t)]
            }
        }

        function p() {
            x.postUpdateWrapper(this)
        }

        function h(e) {
            J.call(Q, e) || (z.test(e) ? void 0 : m("65", e), Q[e] = !0)
        }

        function d(e, t) {
            return e.indexOf("-") >= 0 || null != t.is
        }

        function f(e) {
            var t = e.type;
            h(t), this._currentElement = e, this._tag = t.toLowerCase(), this._namespaceURI = null, this._renderedChildren = null, this._previousStyle = null, this._previousStyleCopy = null, this._hostNode = null, this._hostParent = null, this._rootNodeID = 0, this._domID = 0, this._hostContainerInfo = null, this._wrapperState = null, this._topLevelWrapper = null, this._flags = 0
        }
        var m = n(37),
            v = n(6),
            y = n(90),
            g = n(92),
            b = n(78),
            T = n(79),
            S = n(38),
            E = n(100),
            A = n(44),
            C = n(45),
            _ = n(102),
            P = n(39),
            w = n(36),
            M = n(105),
            k = n(108),
            x = n(109),
            I = n(110),
            N = (n(64), n(111)),
            O = n(130),
            R = (n(14), n(83)),
            D = (n(10), n(67), n(119), n(133), n(13), P),
            B = A.deleteListener,
            G = w.getNodeFromInstance,
            L = _.listenTo,
            H = C.registrationNameModules,
            U = {
                string: !0,
                number: !0
            },
            F = "style",
            V = "__html",
            j = {
                children: null,
                dangerouslySetInnerHTML: null,
                suppressContentEditableWarning: null
            },
            W = 11,
            q = {
                topAbort: "abort",
                topCanPlay: "canplay",
                topCanPlayThrough: "canplaythrough",
                topDurationChange: "durationchange",
                topEmptied: "emptied",
                topEncrypted: "encrypted",
                topEnded: "ended",
                topError: "error",
                topLoadedData: "loadeddata",
                topLoadedMetadata: "loadedmetadata",
                topLoadStart: "loadstart",
                topPause: "pause",
                topPlay: "play",
                topPlaying: "playing",
                topProgress: "progress",
                topRateChange: "ratechange",
                topSeeked: "seeked",
                topSeeking: "seeking",
                topStalled: "stalled",
                topSuspend: "suspend",
                topTimeUpdate: "timeupdate",
                topVolumeChange: "volumechange",
                topWaiting: "waiting"
            },
            K = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            },
            Y = {
                listing: !0,
                pre: !0,
                textarea: !0
            },
            X = v({
                menuitem: !0
            }, K),
            z = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
            Q = {},
            J = {}.hasOwnProperty,
            Z = 1;
        f.displayName = "ReactDOMComponent", f.Mixin = {
            mountComponent: function(e, t, n, r) {
                this._rootNodeID = Z++, this._domID = n._idCounter++, this._hostParent = t, this._hostContainerInfo = n;
                var i = this._currentElement.props;
                switch (this._tag) {
                    case "audio":
                    case "form":
                    case "iframe":
                    case "img":
                    case "link":
                    case "object":
                    case "source":
                    case "video":
                        this._wrapperState = {
                            listeners: null
                        }, e.getReactMountReady().enqueue(u, this);
                        break;
                    case "input":
                        M.mountWrapper(this, i, t), i = M.getHostProps(this, i), e.getReactMountReady().enqueue(u, this);
                        break;
                    case "option":
                        k.mountWrapper(this, i, t), i = k.getHostProps(this, i);
                        break;
                    case "select":
                        x.mountWrapper(this, i, t), i = x.getHostProps(this, i), e.getReactMountReady().enqueue(u, this);
                        break;
                    case "textarea":
                        I.mountWrapper(this, i, t), i = I.getHostProps(this, i), e.getReactMountReady().enqueue(u, this)
                }
                o(this, i);
                var a, p;
                null != t ? (a = t._namespaceURI, p = t._tag) : n._tag && (a = n._namespaceURI, p = n._tag), (null == a || a === T.svg && "foreignobject" === p) && (a = T.html), a === T.html && ("svg" === this._tag ? a = T.svg : "math" === this._tag && (a = T.mathml)), this._namespaceURI = a;
                var h;
                if (e.useCreateElement) {
                    var d, f = n._ownerDocument;
                    if (a === T.html)
                        if ("script" === this._tag) {
                            var m = f.createElement("div"),
                                v = this._currentElement.type;
                            m.innerHTML = "<" + v + "></" + v + ">", d = m.removeChild(m.firstChild)
                        } else d = i.is ? f.createElement(this._currentElement.type, i.is) : f.createElement(this._currentElement.type);
                    else d = f.createElementNS(a, this._currentElement.type);
                    w.precacheNode(this, d), this._flags |= D.hasCachedChildNodes, this._hostParent || E.setAttributeForRoot(d), this._updateDOMProperties(null, i, e);
                    var g = b(d);
                    this._createInitialChildren(e, i, r, g), h = g
                } else {
                    var S = this._createOpenTagMarkupAndPutListeners(e, i),
                        A = this._createContentMarkup(e, i, r);
                    h = !A && K[this._tag] ? S + "/>" : S + ">" + A + "</" + this._currentElement.type + ">"
                }
                switch (this._tag) {
                    case "input":
                        e.getReactMountReady().enqueue(s, this), i.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                        break;
                    case "textarea":
                        e.getReactMountReady().enqueue(l, this), i.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                        break;
                    case "select":
                        i.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                        break;
                    case "button":
                        i.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                        break;
                    case "option":
                        e.getReactMountReady().enqueue(c, this)
                }
                return h
            },
            _createOpenTagMarkupAndPutListeners: function(e, t) {
                var n = "<" + this._currentElement.type;
                for (var r in t)
                    if (t.hasOwnProperty(r)) {
                        var o = t[r];
                        if (null != o)
                            if (H.hasOwnProperty(r)) o && i(this, r, o, e);
                            else {
                                r === F && (o && (o = this._previousStyleCopy = v({}, t.style)), o = g.createMarkupForStyles(o, this));
                                var a = null;
                                null != this._tag && d(this._tag, t) ? j.hasOwnProperty(r) || (a = E.createMarkupForCustomAttribute(r, o)) : a = E.createMarkupForProperty(r, o), a && (n += " " + a)
                            }
                    }
                return e.renderToStaticMarkup ? n : (this._hostParent || (n += " " + E.createMarkupForRoot()), n += " " + E.createMarkupForID(this._domID))
            },
            _createContentMarkup: function(e, t, n) {
                var r = "",
                    o = t.dangerouslySetInnerHTML;
                if (null != o) null != o.__html && (r = o.__html);
                else {
                    var i = U[typeof t.children] ? t.children : null,
                        a = null != i ? null : t.children;
                    if (null != i) r = R(i);
                    else if (null != a) {
                        var s = this.mountChildren(a, e, n);
                        r = s.join("")
                    }
                }
                return Y[this._tag] && "\n" === r.charAt(0) ? "\n" + r : r
            },
            _createInitialChildren: function(e, t, n, r) {
                var o = t.dangerouslySetInnerHTML;
                if (null != o) null != o.__html && b.queueHTML(r, o.__html);
                else {
                    var i = U[typeof t.children] ? t.children : null,
                        a = null != i ? null : t.children;
                    if (null != i) b.queueText(r, i);
                    else if (null != a)
                        for (var s = this.mountChildren(a, e, n), l = 0; l < s.length; l++) b.queueChild(r, s[l])
                }
            },
            receiveComponent: function(e, t, n) {
                var r = this._currentElement;
                this._currentElement = e, this.updateComponent(t, r, e, n)
            },
            updateComponent: function(e, t, n, r) {
                var i = t.props,
                    a = this._currentElement.props;
                switch (this._tag) {
                    case "input":
                        i = M.getHostProps(this, i), a = M.getHostProps(this, a);
                        break;
                    case "option":
                        i = k.getHostProps(this, i), a = k.getHostProps(this, a);
                        break;
                    case "select":
                        i = x.getHostProps(this, i), a = x.getHostProps(this, a);
                        break;
                    case "textarea":
                        i = I.getHostProps(this, i), a = I.getHostProps(this, a)
                }
                switch (o(this, a), this._updateDOMProperties(i, a, e), this._updateDOMChildren(i, a, e, r), this._tag) {
                    case "input":
                        M.updateWrapper(this);
                        break;
                    case "textarea":
                        I.updateWrapper(this);
                        break;
                    case "select":
                        e.getReactMountReady().enqueue(p, this)
                }
            },
            _updateDOMProperties: function(e, t, n) {
                var r, o, a;
                for (r in e)
                    if (!t.hasOwnProperty(r) && e.hasOwnProperty(r) && null != e[r])
                        if (r === F) {
                            var s = this._previousStyleCopy;
                            for (o in s) s.hasOwnProperty(o) && (a = a || {}, a[o] = "");
                            this._previousStyleCopy = null
                        } else H.hasOwnProperty(r) ? e[r] && B(this, r) : d(this._tag, e) ? j.hasOwnProperty(r) || E.deleteValueForAttribute(G(this), r) : (S.properties[r] || S.isCustomAttribute(r)) && E.deleteValueForProperty(G(this), r);
                for (r in t) {
                    var l = t[r],
                        c = r === F ? this._previousStyleCopy : null != e ? e[r] : void 0;
                    if (t.hasOwnProperty(r) && l !== c && (null != l || null != c))
                        if (r === F)
                            if (l ? l = this._previousStyleCopy = v({}, l) : this._previousStyleCopy = null, c) {
                                for (o in c) !c.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (a = a || {}, a[o] = "");
                                for (o in l) l.hasOwnProperty(o) && c[o] !== l[o] && (a = a || {}, a[o] = l[o])
                            } else a = l;
                    else if (H.hasOwnProperty(r)) l ? i(this, r, l, n) : c && B(this, r);
                    else if (d(this._tag, t)) j.hasOwnProperty(r) || E.setValueForAttribute(G(this), r, l);
                    else if (S.properties[r] || S.isCustomAttribute(r)) {
                        var u = G(this);
                        null != l ? E.setValueForProperty(u, r, l) : E.deleteValueForProperty(u, r)
                    }
                }
                a && g.setValueForStyles(G(this), a, this)
            },
            _updateDOMChildren: function(e, t, n, r) {
                var o = U[typeof e.children] ? e.children : null,
                    i = U[typeof t.children] ? t.children : null,
                    a = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
                    s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
                    l = null != o ? null : e.children,
                    c = null != i ? null : t.children,
                    u = null != o || null != a,
                    p = null != i || null != s;
                null != l && null == c ? this.updateChildren(null, n, r) : u && !p && this.updateTextContent(""), null != i ? o !== i && this.updateTextContent("" + i) : null != s ? a !== s && this.updateMarkup("" + s) : null != c && this.updateChildren(c, n, r)
            },
            getHostNode: function() {
                return G(this)
            },
            unmountComponent: function(e) {
                switch (this._tag) {
                    case "audio":
                    case "form":
                    case "iframe":
                    case "img":
                    case "link":
                    case "object":
                    case "source":
                    case "video":
                        var t = this._wrapperState.listeners;
                        if (t)
                            for (var n = 0; n < t.length; n++) t[n].remove();
                        break;
                    case "html":
                    case "head":
                    case "body":
                        m("66", this._tag)
                }
                this.unmountChildren(e), w.uncacheNode(this), A.deleteAllListeners(this), this._rootNodeID = 0, this._domID = 0, this._wrapperState = null
            },
            getPublicInstance: function() {
                return G(this)
            }
        }, v(f.prototype, f.Mixin, N.Mixin), e.exports = f
    },
    function(e, t, n) {
        "use strict";
        var r = n(36),
            o = n(91),
            i = {
                focusDOMComponent: function() {
                    o(r.getNodeFromInstance(this))
                }
            };
        e.exports = i
    },
    function(e, t) {
        "use strict";

        function n(e) {
            try {
                e.focus()
            } catch (e) {}
        }
        e.exports = n
    },
    function(e, t, n) {
        "use strict";
        var r = n(93),
            o = n(50),
            i = (n(64), n(94), n(96)),
            a = n(97),
            s = n(99),
            l = (n(13), s(function(e) {
                return a(e)
            })),
            c = !1,
            u = "cssFloat";
        if (o.canUseDOM) {
            var p = document.createElement("div").style;
            try {
                p.font = ""
            } catch (e) {
                c = !0
            }
            void 0 === document.documentElement.style.cssFloat && (u = "styleFloat")
        }
        var h = {
            createMarkupForStyles: function(e, t) {
                var n = "";
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var o = e[r];
                        null != o && (n += l(r) + ":", n += i(r, o, t) + ";")
                    }
                return n || null
            },
            setValueForStyles: function(e, t, n) {
                var o = e.style;
                for (var a in t)
                    if (t.hasOwnProperty(a)) {
                        var s = i(a, t[a], n);
                        if ("float" !== a && "cssFloat" !== a || (a = u), s) o[a] = s;
                        else {
                            var l = c && r.shorthandPropertyExpansions[a];
                            if (l)
                                for (var p in l) o[p] = "";
                            else o[a] = ""
                        }
                    }
            }
        };
        e.exports = h
    },
    function(e, t) {
        "use strict";

        function n(e, t) {
            return e + t.charAt(0).toUpperCase() + t.substring(1)
        }
        var r = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridRow: !0,
                gridColumn: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            },
            o = ["Webkit", "ms", "Moz", "O"];
        Object.keys(r).forEach(function(e) {
            o.forEach(function(t) {
                r[n(t, e)] = r[e]
            })
        });
        var i = {
                background: {
                    backgroundAttachment: !0,
                    backgroundColor: !0,
                    backgroundImage: !0,
                    backgroundPositionX: !0,
                    backgroundPositionY: !0,
                    backgroundRepeat: !0
                },
                backgroundPosition: {
                    backgroundPositionX: !0,
                    backgroundPositionY: !0
                },
                border: {
                    borderWidth: !0,
                    borderStyle: !0,
                    borderColor: !0
                },
                borderBottom: {
                    borderBottomWidth: !0,
                    borderBottomStyle: !0,
                    borderBottomColor: !0
                },
                borderLeft: {
                    borderLeftWidth: !0,
                    borderLeftStyle: !0,
                    borderLeftColor: !0
                },
                borderRight: {
                    borderRightWidth: !0,
                    borderRightStyle: !0,
                    borderRightColor: !0
                },
                borderTop: {
                    borderTopWidth: !0,
                    borderTopStyle: !0,
                    borderTopColor: !0
                },
                font: {
                    fontStyle: !0,
                    fontVariant: !0,
                    fontWeight: !0,
                    fontSize: !0,
                    lineHeight: !0,
                    fontFamily: !0
                },
                outline: {
                    outlineWidth: !0,
                    outlineStyle: !0,
                    outlineColor: !0
                }
            },
            a = {
                isUnitlessNumber: r,
                shorthandPropertyExpansions: i
            };
        e.exports = a
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return o(e.replace(i, "ms-"))
        }
        var o = n(95),
            i = /^-ms-/;
        e.exports = r
    },
    function(e, t) {
        "use strict";

        function n(e) {
            return e.replace(r, function(e, t) {
                return t.toUpperCase()
            })
        }
        var r = /-(.)/g;
        e.exports = n
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            var r = null == t || "boolean" == typeof t || "" === t;
            if (r) return "";
            var o = isNaN(t);
            if (o || 0 === t || i.hasOwnProperty(e) && i[e]) return "" + t;
            if ("string" == typeof t) {
                t = t.trim()
            }
            return t + "px"
        }
        var o = n(93),
            i = (n(13), o.isUnitlessNumber);
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return o(e).replace(i, "-ms-")
        }
        var o = n(98),
            i = /^ms-/;
        e.exports = r
    },
    function(e, t) {
        "use strict";

        function n(e) {
            return e.replace(r, "-$1").toLowerCase()
        }
        var r = /([A-Z])/g;
        e.exports = n
    },
    function(e, t) {
        "use strict";

        function n(e) {
            var t = {};
            return function(n) {
                return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n]
            }
        }
        e.exports = n
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return !!c.hasOwnProperty(e) || !l.hasOwnProperty(e) && (s.test(e) ? (c[e] = !0, !0) : (l[e] = !0, !1))
        }

        function o(e, t) {
            return null == t || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && t < 1 || e.hasOverloadedBooleanValue && t === !1
        }
        var i = n(38),
            a = (n(36), n(64), n(101)),
            s = (n(13), new RegExp("^[" + i.ATTRIBUTE_NAME_START_CHAR + "][" + i.ATTRIBUTE_NAME_CHAR + "]*$")),
            l = {},
            c = {},
            u = {
                createMarkupForID: function(e) {
                    return i.ID_ATTRIBUTE_NAME + "=" + a(e)
                },
                setAttributeForID: function(e, t) {
                    e.setAttribute(i.ID_ATTRIBUTE_NAME, t)
                },
                createMarkupForRoot: function() {
                    return i.ROOT_ATTRIBUTE_NAME + '=""'
                },
                setAttributeForRoot: function(e) {
                    e.setAttribute(i.ROOT_ATTRIBUTE_NAME, "")
                },
                createMarkupForProperty: function(e, t) {
                    var n = i.properties.hasOwnProperty(e) ? i.properties[e] : null;
                    if (n) {
                        if (o(n, t)) return "";
                        var r = n.attributeName;
                        return n.hasBooleanValue || n.hasOverloadedBooleanValue && t === !0 ? r + '=""' : r + "=" + a(t)
                    }
                    return i.isCustomAttribute(e) ? null == t ? "" : e + "=" + a(t) : null
                },
                createMarkupForCustomAttribute: function(e, t) {
                    return r(e) && null != t ? e + "=" + a(t) : ""
                },
                setValueForProperty: function(e, t, n) {
                    var r = i.properties.hasOwnProperty(t) ? i.properties[t] : null;
                    if (r) {
                        var a = r.mutationMethod;
                        if (a) a(e, n);
                        else {
                            if (o(r, n)) return void this.deleteValueForProperty(e, t);
                            if (r.mustUseProperty) e[r.propertyName] = n;
                            else {
                                var s = r.attributeName,
                                    l = r.attributeNamespace;
                                l ? e.setAttributeNS(l, s, "" + n) : r.hasBooleanValue || r.hasOverloadedBooleanValue && n === !0 ? e.setAttribute(s, "") : e.setAttribute(s, "" + n)
                            }
                        }
                    } else if (i.isCustomAttribute(t)) return void u.setValueForAttribute(e, t, n)
                },
                setValueForAttribute: function(e, t, n) {
                    if (r(t)) {
                        null == n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)
                    }
                },
                deleteValueForAttribute: function(e, t) {
                    e.removeAttribute(t)
                },
                deleteValueForProperty: function(e, t) {
                    var n = i.properties.hasOwnProperty(t) ? i.properties[t] : null;
                    if (n) {
                        var r = n.mutationMethod;
                        if (r) r(e, void 0);
                        else if (n.mustUseProperty) {
                            var o = n.propertyName;
                            n.hasBooleanValue ? e[o] = !1 : e[o] = ""
                        } else e.removeAttribute(n.attributeName)
                    } else i.isCustomAttribute(t) && e.removeAttribute(t)
                }
            };
        e.exports = u
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return '"' + o(e) + '"'
        }
        var o = n(83);
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return Object.prototype.hasOwnProperty.call(e, m) || (e[m] = d++, p[e[m]] = {}), p[e[m]]
        }
        var o, i = n(6),
            a = n(45),
            s = n(103),
            l = n(73),
            c = n(104),
            u = n(67),
            p = {},
            h = !1,
            d = 0,
            f = {
                topAbort: "abort",
                topAnimationEnd: c("animationend") || "animationend",
                topAnimationIteration: c("animationiteration") || "animationiteration",
                topAnimationStart: c("animationstart") || "animationstart",
                topBlur: "blur",
                topCanPlay: "canplay",
                topCanPlayThrough: "canplaythrough",
                topChange: "change",
                topClick: "click",
                topCompositionEnd: "compositionend",
                topCompositionStart: "compositionstart",
                topCompositionUpdate: "compositionupdate",
                topContextMenu: "contextmenu",
                topCopy: "copy",
                topCut: "cut",
                topDoubleClick: "dblclick",
                topDrag: "drag",
                topDragEnd: "dragend",
                topDragEnter: "dragenter",
                topDragExit: "dragexit",
                topDragLeave: "dragleave",
                topDragOver: "dragover",
                topDragStart: "dragstart",
                topDrop: "drop",
                topDurationChange: "durationchange",
                topEmptied: "emptied",
                topEncrypted: "encrypted",
                topEnded: "ended",
                topError: "error",
                topFocus: "focus",
                topInput: "input",
                topKeyDown: "keydown",
                topKeyPress: "keypress",
                topKeyUp: "keyup",
                topLoadedData: "loadeddata",
                topLoadedMetadata: "loadedmetadata",
                topLoadStart: "loadstart",
                topMouseDown: "mousedown",
                topMouseMove: "mousemove",
                topMouseOut: "mouseout",
                topMouseOver: "mouseover",
                topMouseUp: "mouseup",
                topPaste: "paste",
                topPause: "pause",
                topPlay: "play",
                topPlaying: "playing",
                topProgress: "progress",
                topRateChange: "ratechange",
                topScroll: "scroll",
                topSeeked: "seeked",
                topSeeking: "seeking",
                topSelectionChange: "selectionchange",
                topStalled: "stalled",
                topSuspend: "suspend",
                topTextInput: "textInput",
                topTimeUpdate: "timeupdate",
                topTouchCancel: "touchcancel",
                topTouchEnd: "touchend",
                topTouchMove: "touchmove",
                topTouchStart: "touchstart",
                topTransitionEnd: c("transitionend") || "transitionend",
                topVolumeChange: "volumechange",
                topWaiting: "waiting",
                topWheel: "wheel"
            },
            m = "_reactListenersID" + String(Math.random()).slice(2),
            v = i({}, s, {
                ReactEventListener: null,
                injection: {
                    injectReactEventListener: function(e) {
                        e.setHandleTopLevel(v.handleTopLevel), v.ReactEventListener = e
                    }
                },
                setEnabled: function(e) {
                    v.ReactEventListener && v.ReactEventListener.setEnabled(e)
                },
                isEnabled: function() {
                    return !(!v.ReactEventListener || !v.ReactEventListener.isEnabled())
                },
                listenTo: function(e, t) {
                    for (var n = t, o = r(n), i = a.registrationNameDependencies[e], s = 0; s < i.length; s++) {
                        var l = i[s];
                        o.hasOwnProperty(l) && o[l] || ("topWheel" === l ? u("wheel") ? v.ReactEventListener.trapBubbledEvent("topWheel", "wheel", n) : u("mousewheel") ? v.ReactEventListener.trapBubbledEvent("topWheel", "mousewheel", n) : v.ReactEventListener.trapBubbledEvent("topWheel", "DOMMouseScroll", n) : "topScroll" === l ? u("scroll", !0) ? v.ReactEventListener.trapCapturedEvent("topScroll", "scroll", n) : v.ReactEventListener.trapBubbledEvent("topScroll", "scroll", v.ReactEventListener.WINDOW_HANDLE) : "topFocus" === l || "topBlur" === l ? (u("focus", !0) ? (v.ReactEventListener.trapCapturedEvent("topFocus", "focus", n), v.ReactEventListener.trapCapturedEvent("topBlur", "blur", n)) : u("focusin") && (v.ReactEventListener.trapBubbledEvent("topFocus", "focusin", n), v.ReactEventListener.trapBubbledEvent("topBlur", "focusout", n)), o.topBlur = !0, o.topFocus = !0) : f.hasOwnProperty(l) && v.ReactEventListener.trapBubbledEvent(l, f[l], n), o[l] = !0)
                    }
                },
                trapBubbledEvent: function(e, t, n) {
                    return v.ReactEventListener.trapBubbledEvent(e, t, n)
                },
                trapCapturedEvent: function(e, t, n) {
                    return v.ReactEventListener.trapCapturedEvent(e, t, n)
                },
                supportsEventPageXY: function() {
                    if (!document.createEvent) return !1;
                    var e = document.createEvent("MouseEvent");
                    return null != e && "pageX" in e
                },
                ensureScrollValueMonitoring: function() {
                    if (void 0 === o && (o = v.supportsEventPageXY()), !o && !h) {
                        var e = l.refreshScrollValues;
                        v.ReactEventListener.monitorScrollValue(e), h = !0
                    }
                }
            });
        e.exports = v
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            o.enqueueEvents(e), o.processEventQueue(!1)
        }
        var o = n(44),
            i = {
                handleTopLevel: function(e, t, n, i) {
                    var a = o.extractEvents(e, t, n, i);
                    r(a)
                }
            };
        e.exports = i
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = {};
            return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n["ms" + e] = "MS" + t, n["O" + e] = "o" + t.toLowerCase(), n
        }

        function o(e) {
            if (s[e]) return s[e];
            if (!a[e]) return e;
            var t = a[e];
            for (var n in t)
                if (t.hasOwnProperty(n) && n in l) return s[e] = t[n];
            return ""
        }
        var i = n(50),
            a = {
                animationend: r("Animation", "AnimationEnd"),
                animationiteration: r("Animation", "AnimationIteration"),
                animationstart: r("Animation", "AnimationStart"),
                transitionend: r("Transition", "TransitionEnd")
            },
            s = {},
            l = {};
        i.canUseDOM && (l = document.createElement("div").style, "AnimationEvent" in window || (delete a.animationend.animation, delete a.animationiteration.animation, delete a.animationstart.animation), "TransitionEvent" in window || delete a.transitionend.transition), e.exports = o
    },
    function(e, t, n) {
        "use strict";

        function r() {
            this._rootNodeID && p.updateWrapper(this);
        }

        function o(e) {
            var t = this._currentElement.props,
                n = l.executeOnChange(t, e);
            u.asap(r, this);
            var o = t.name;
            if ("radio" === t.type && null != o) {
                for (var a = c.getNodeFromInstance(this), s = a; s.parentNode;) s = s.parentNode;
                for (var p = s.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), h = 0; h < p.length; h++) {
                    var d = p[h];
                    if (d !== a && d.form === a.form) {
                        var f = c.getInstanceFromNode(d);
                        f ? void 0 : i("90"), u.asap(r, f)
                    }
                }
            }
            return n
        }
        var i = n(37),
            a = n(6),
            s = n(100),
            l = n(106),
            c = n(36),
            u = n(58),
            p = (n(10), n(13), {
                getHostProps: function(e, t) {
                    var n = l.getValue(t),
                        r = l.getChecked(t),
                        o = a({
                            type: void 0,
                            step: void 0,
                            min: void 0,
                            max: void 0
                        }, t, {
                            defaultChecked: void 0,
                            defaultValue: void 0,
                            value: null != n ? n : e._wrapperState.initialValue,
                            checked: null != r ? r : e._wrapperState.initialChecked,
                            onChange: e._wrapperState.onChange
                        });
                    return o
                },
                mountWrapper: function(e, t) {
                    var n = t.defaultValue;
                    e._wrapperState = {
                        initialChecked: null != t.checked ? t.checked : t.defaultChecked,
                        initialValue: null != t.value ? t.value : n,
                        listeners: null,
                        onChange: o.bind(e)
                    }
                },
                updateWrapper: function(e) {
                    var t = e._currentElement.props,
                        n = t.checked;
                    null != n && s.setValueForProperty(c.getNodeFromInstance(e), "checked", n || !1);
                    var r = c.getNodeFromInstance(e),
                        o = l.getValue(t);
                    if (null != o) {
                        var i = "" + o;
                        i !== r.value && (r.value = i)
                    } else null == t.value && null != t.defaultValue && (r.defaultValue = "" + t.defaultValue), null == t.checked && null != t.defaultChecked && (r.defaultChecked = !!t.defaultChecked)
                },
                postMountWrapper: function(e) {
                    var t = e._currentElement.props,
                        n = c.getNodeFromInstance(e);
                    switch (t.type) {
                        case "submit":
                        case "reset":
                            break;
                        case "color":
                        case "date":
                        case "datetime":
                        case "datetime-local":
                        case "month":
                        case "time":
                        case "week":
                            n.value = "", n.value = n.defaultValue;
                            break;
                        default:
                            n.value = n.value
                    }
                    var r = n.name;
                    "" !== r && (n.name = ""), n.defaultChecked = !n.defaultChecked, n.defaultChecked = !n.defaultChecked, "" !== r && (n.name = r)
                }
            });
        e.exports = p
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            null != e.checkedLink && null != e.valueLink ? s("87") : void 0
        }

        function o(e) {
            r(e), null != e.value || null != e.onChange ? s("88") : void 0
        }

        function i(e) {
            r(e), null != e.checked || null != e.onChange ? s("89") : void 0
        }

        function a(e) {
            if (e) {
                var t = e.getName();
                if (t) return " Check the render method of `" + t + "`."
            }
            return ""
        }
        var s = n(37),
            l = n(5),
            c = n(107),
            u = (n(10), n(13), {
                button: !0,
                checkbox: !0,
                image: !0,
                hidden: !0,
                radio: !0,
                reset: !0,
                submit: !0
            }),
            p = {
                value: function(e, t, n) {
                    return !e[t] || u[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
                },
                checked: function(e, t, n) {
                    return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
                },
                onChange: l.PropTypes.func
            },
            h = {},
            d = {
                checkPropTypes: function(e, t, n) {
                    for (var r in p) {
                        if (p.hasOwnProperty(r)) var o = p[r](t, r, e, "prop", null, c);
                        if (o instanceof Error && !(o.message in h)) {
                            h[o.message] = !0;
                            a(n)
                        }
                    }
                },
                getValue: function(e) {
                    return e.valueLink ? (o(e), e.valueLink.value) : e.value
                },
                getChecked: function(e) {
                    return e.checkedLink ? (i(e), e.checkedLink.value) : e.checked
                },
                executeOnChange: function(e, t) {
                    return e.valueLink ? (o(e), e.valueLink.requestChange(t.target.value)) : e.checkedLink ? (i(e), e.checkedLink.requestChange(t.target.checked)) : e.onChange ? e.onChange.call(void 0, t) : void 0
                }
            };
        e.exports = d
    },
    28,
    function(e, t, n) {
        "use strict";

        function r(e) {
            var t = "";
            return i.Children.forEach(e, function(e) {
                null != e && ("string" == typeof e || "number" == typeof e ? t += e : l || (l = !0))
            }), t
        }
        var o = n(6),
            i = n(5),
            a = n(36),
            s = n(109),
            l = (n(13), !1),
            c = {
                mountWrapper: function(e, t, n) {
                    var o = null;
                    if (null != n) {
                        var i = n;
                        "optgroup" === i._tag && (i = i._hostParent), null != i && "select" === i._tag && (o = s.getSelectValueContext(i))
                    }
                    var a = null;
                    if (null != o) {
                        var l;
                        if (l = null != t.value ? t.value + "" : r(t.children), a = !1, Array.isArray(o)) {
                            for (var c = 0; c < o.length; c++)
                                if ("" + o[c] === l) {
                                    a = !0;
                                    break
                                }
                        } else a = "" + o === l
                    }
                    e._wrapperState = {
                        selected: a
                    }
                },
                postMountWrapper: function(e) {
                    var t = e._currentElement.props;
                    if (null != t.value) {
                        var n = a.getNodeFromInstance(e);
                        n.setAttribute("value", t.value)
                    }
                },
                getHostProps: function(e, t) {
                    var n = o({
                        selected: void 0,
                        children: void 0
                    }, t);
                    null != e._wrapperState.selected && (n.selected = e._wrapperState.selected);
                    var i = r(t.children);
                    return i && (n.children = i), n
                }
            };
        e.exports = c
    },
    function(e, t, n) {
        "use strict";

        function r() {
            if (this._rootNodeID && this._wrapperState.pendingUpdate) {
                this._wrapperState.pendingUpdate = !1;
                var e = this._currentElement.props,
                    t = s.getValue(e);
                null != t && o(this, Boolean(e.multiple), t)
            }
        }

        function o(e, t, n) {
            var r, o, i = l.getNodeFromInstance(e).options;
            if (t) {
                for (r = {}, o = 0; o < n.length; o++) r["" + n[o]] = !0;
                for (o = 0; o < i.length; o++) {
                    var a = r.hasOwnProperty(i[o].value);
                    i[o].selected !== a && (i[o].selected = a)
                }
            } else {
                for (r = "" + n, o = 0; o < i.length; o++)
                    if (i[o].value === r) return void(i[o].selected = !0);
                i.length && (i[0].selected = !0)
            }
        }

        function i(e) {
            var t = this._currentElement.props,
                n = s.executeOnChange(t, e);
            return this._rootNodeID && (this._wrapperState.pendingUpdate = !0), c.asap(r, this), n
        }
        var a = n(6),
            s = n(106),
            l = n(36),
            c = n(58),
            u = (n(13), !1),
            p = {
                getHostProps: function(e, t) {
                    return a({}, t, {
                        onChange: e._wrapperState.onChange,
                        value: void 0
                    })
                },
                mountWrapper: function(e, t) {
                    var n = s.getValue(t);
                    e._wrapperState = {
                        pendingUpdate: !1,
                        initialValue: null != n ? n : t.defaultValue,
                        listeners: null,
                        onChange: i.bind(e),
                        wasMultiple: Boolean(t.multiple)
                    }, void 0 === t.value || void 0 === t.defaultValue || u || (u = !0)
                },
                getSelectValueContext: function(e) {
                    return e._wrapperState.initialValue
                },
                postUpdateWrapper: function(e) {
                    var t = e._currentElement.props;
                    e._wrapperState.initialValue = void 0;
                    var n = e._wrapperState.wasMultiple;
                    e._wrapperState.wasMultiple = Boolean(t.multiple);
                    var r = s.getValue(t);
                    null != r ? (e._wrapperState.pendingUpdate = !1, o(e, Boolean(t.multiple), r)) : n !== Boolean(t.multiple) && (null != t.defaultValue ? o(e, Boolean(t.multiple), t.defaultValue) : o(e, Boolean(t.multiple), t.multiple ? [] : ""))
                }
            };
        e.exports = p
    },
    function(e, t, n) {
        "use strict";

        function r() {
            this._rootNodeID && u.updateWrapper(this)
        }

        function o(e) {
            var t = this._currentElement.props,
                n = s.executeOnChange(t, e);
            return c.asap(r, this), n
        }
        var i = n(37),
            a = n(6),
            s = n(106),
            l = n(36),
            c = n(58),
            u = (n(10), n(13), {
                getHostProps: function(e, t) {
                    null != t.dangerouslySetInnerHTML ? i("91") : void 0;
                    var n = a({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue,
                        onChange: e._wrapperState.onChange
                    });
                    return n
                },
                mountWrapper: function(e, t) {
                    var n = s.getValue(t),
                        r = n;
                    if (null == n) {
                        var a = t.defaultValue,
                            l = t.children;
                        null != l && (null != a ? i("92") : void 0, Array.isArray(l) && (l.length <= 1 ? void 0 : i("93"), l = l[0]), a = "" + l), null == a && (a = ""), r = a
                    }
                    e._wrapperState = {
                        initialValue: "" + r,
                        listeners: null,
                        onChange: o.bind(e)
                    }
                },
                updateWrapper: function(e) {
                    var t = e._currentElement.props,
                        n = l.getNodeFromInstance(e),
                        r = s.getValue(t);
                    if (null != r) {
                        var o = "" + r;
                        o !== n.value && (n.value = o), null == t.defaultValue && (n.defaultValue = o)
                    }
                    null != t.defaultValue && (n.defaultValue = t.defaultValue)
                },
                postMountWrapper: function(e) {
                    var t = l.getNodeFromInstance(e);
                    t.value = t.textContent
                }
            });
        e.exports = u
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return {
                type: "INSERT_MARKUP",
                content: e,
                fromIndex: null,
                fromNode: null,
                toIndex: n,
                afterNode: t
            }
        }

        function o(e, t, n) {
            return {
                type: "MOVE_EXISTING",
                content: null,
                fromIndex: e._mountIndex,
                fromNode: h.getHostNode(e),
                toIndex: n,
                afterNode: t
            }
        }

        function i(e, t) {
            return {
                type: "REMOVE_NODE",
                content: null,
                fromIndex: e._mountIndex,
                fromNode: t,
                toIndex: null,
                afterNode: null
            }
        }

        function a(e) {
            return {
                type: "SET_MARKUP",
                content: e,
                fromIndex: null,
                fromNode: null,
                toIndex: null,
                afterNode: null
            }
        }

        function s(e) {
            return {
                type: "TEXT_CONTENT",
                content: e,
                fromIndex: null,
                fromNode: null,
                toIndex: null,
                afterNode: null
            }
        }

        function l(e, t) {
            return t && (e = e || [], e.push(t)), e
        }

        function c(e, t) {
            p.processChildrenUpdates(e, t)
        }
        var u = n(37),
            p = n(112),
            h = (n(113), n(64), n(12), n(61)),
            d = n(114),
            f = (n(14), n(129)),
            m = (n(10), {
                Mixin: {
                    _reconcilerInstantiateChildren: function(e, t, n) {
                        return d.instantiateChildren(e, t, n)
                    },
                    _reconcilerUpdateChildren: function(e, t, n, r, o, i) {
                        var a, s = 0;
                        return a = f(t, s), d.updateChildren(e, a, n, r, o, this, this._hostContainerInfo, i, s), a
                    },
                    mountChildren: function(e, t, n) {
                        var r = this._reconcilerInstantiateChildren(e, t, n);
                        this._renderedChildren = r;
                        var o = [],
                            i = 0;
                        for (var a in r)
                            if (r.hasOwnProperty(a)) {
                                var s = r[a],
                                    l = 0,
                                    c = h.mountComponent(s, t, this, this._hostContainerInfo, n, l);
                                s._mountIndex = i++, o.push(c)
                            }
                        return o
                    },
                    updateTextContent: function(e) {
                        var t = this._renderedChildren;
                        d.unmountChildren(t, !1);
                        for (var n in t) t.hasOwnProperty(n) && u("118");
                        var r = [s(e)];
                        c(this, r)
                    },
                    updateMarkup: function(e) {
                        var t = this._renderedChildren;
                        d.unmountChildren(t, !1);
                        for (var n in t) t.hasOwnProperty(n) && u("118");
                        var r = [a(e)];
                        c(this, r)
                    },
                    updateChildren: function(e, t, n) {
                        this._updateChildren(e, t, n)
                    },
                    _updateChildren: function(e, t, n) {
                        var r = this._renderedChildren,
                            o = {},
                            i = [],
                            a = this._reconcilerUpdateChildren(r, e, i, o, t, n);
                        if (a || r) {
                            var s, u = null,
                                p = 0,
                                d = 0,
                                f = 0,
                                m = null;
                            for (s in a)
                                if (a.hasOwnProperty(s)) {
                                    var v = r && r[s],
                                        y = a[s];
                                    v === y ? (u = l(u, this.moveChild(v, m, p, d)), d = Math.max(v._mountIndex, d), v._mountIndex = p) : (v && (d = Math.max(v._mountIndex, d)), u = l(u, this._mountChildAtIndex(y, i[f], m, p, t, n)), f++), p++, m = h.getHostNode(y)
                                }
                            for (s in o) o.hasOwnProperty(s) && (u = l(u, this._unmountChild(r[s], o[s])));
                            u && c(this, u), this._renderedChildren = a
                        }
                    },
                    unmountChildren: function(e) {
                        var t = this._renderedChildren;
                        d.unmountChildren(t, e), this._renderedChildren = null
                    },
                    moveChild: function(e, t, n, r) {
                        if (e._mountIndex < r) return o(e, t, n)
                    },
                    createChild: function(e, t, n) {
                        return r(n, t, e._mountIndex)
                    },
                    removeChild: function(e, t) {
                        return i(e, t)
                    },
                    _mountChildAtIndex: function(e, t, n, r, o, i) {
                        return e._mountIndex = r, this.createChild(e, n, t)
                    },
                    _unmountChild: function(e, t) {
                        var n = this.removeChild(e, t);
                        return e._mountIndex = null, n
                    }
                }
            });
        e.exports = m
    },
    function(e, t, n) {
        "use strict";
        var r = n(37),
            o = (n(10), !1),
            i = {
                replaceNodeWithMarkup: null,
                processChildrenUpdates: null,
                injection: {
                    injectEnvironment: function(e) {
                        o ? r("104") : void 0, i.replaceNodeWithMarkup = e.replaceNodeWithMarkup, i.processChildrenUpdates = e.processChildrenUpdates, o = !0
                    }
                }
            };
        e.exports = i
    },
    function(e, t) {
        "use strict";
        var n = {
            remove: function(e) {
                e._reactInternalInstance = void 0
            },
            get: function(e) {
                return e._reactInternalInstance
            },
            has: function(e) {
                return void 0 !== e._reactInternalInstance
            },
            set: function(e, t) {
                e._reactInternalInstance = t
            }
        };
        e.exports = n
    },
    function(e, t, n) {
        (function(t) {
            "use strict";

            function r(e, t, n, r) {
                var o = void 0 === e[n];
                null != t && o && (e[n] = i(t, !0))
            }
            var o = n(61),
                i = n(116),
                a = (n(124), n(120)),
                s = n(125),
                l = (n(13), {
                    instantiateChildren: function(e, t, n, o) {
                        if (null == e) return null;
                        var i = {};
                        return s(e, r, i), i
                    },
                    updateChildren: function(e, t, n, r, s, l, c, u, p) {
                        if (t || e) {
                            var h, d;
                            for (h in t)
                                if (t.hasOwnProperty(h)) {
                                    d = e && e[h];
                                    var f = d && d._currentElement,
                                        m = t[h];
                                    if (null != d && a(f, m)) o.receiveComponent(d, m, s, u), t[h] = d;
                                    else {
                                        d && (r[h] = o.getHostNode(d), o.unmountComponent(d, !1));
                                        var v = i(m, !0);
                                        t[h] = v;
                                        var y = o.mountComponent(v, s, l, c, u, p);
                                        n.push(y)
                                    }
                                }
                            for (h in e) !e.hasOwnProperty(h) || t && t.hasOwnProperty(h) || (d = e[h], r[h] = o.getHostNode(d), o.unmountComponent(d, !1))
                        }
                    },
                    unmountChildren: function(e, t) {
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                var r = e[n];
                                o.unmountComponent(r, t)
                            }
                    }
                });
            e.exports = l
        }).call(t, n(115))
    },
    function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(e) {
            if (u === setTimeout) return setTimeout(e, 0);
            if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
            try {
                return u(e, 0)
            } catch (t) {
                try {
                    return u.call(null, e, 0)
                } catch (t) {
                    return u.call(this, e, 0)
                }
            }
        }

        function i(e) {
            if (p === clearTimeout) return clearTimeout(e);
            if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
            try {
                return p(e)
            } catch (t) {
                try {
                    return p.call(null, e)
                } catch (t) {
                    return p.call(this, e)
                }
            }
        }

        function a() {
            m && d && (m = !1, d.length ? f = d.concat(f) : v = -1, f.length && s())
        }

        function s() {
            if (!m) {
                var e = o(a);
                m = !0;
                for (var t = f.length; t;) {
                    for (d = f, f = []; ++v < t;) d && d[v].run();
                    v = -1, t = f.length
                }
                d = null, m = !1, i(e)
            }
        }

        function l(e, t) {
            this.fun = e, this.array = t
        }

        function c() {}
        var u, p, h = e.exports = {};
        ! function() {
            try {
                u = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                u = n
            }
            try {
                p = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                p = r
            }
        }();
        var d, f = [],
            m = !1,
            v = -1;
        h.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            f.push(new l(e, t)), 1 !== f.length || m || o(s)
        }, l.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, h.cwd = function() {
            return "/"
        }, h.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, h.umask = function() {
            return 0
        }
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            if (e) {
                var t = e.getName();
                if (t) return " Check the render method of `" + t + "`."
            }
            return ""
        }

        function o(e) {
            return "function" == typeof e && "undefined" != typeof e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent
        }

        function i(e, t) {
            var n;
            if (null === e || e === !1) n = c.create(i);
            else if ("object" == typeof e) {
                var s = e;
                !s || "function" != typeof s.type && "string" != typeof s.type ? a("130", null == s.type ? s.type : typeof s.type, r(s._owner)) : void 0, "string" == typeof s.type ? n = u.createInternalComponent(s) : o(s.type) ? (n = new s.type(s), n.getHostNode || (n.getHostNode = n.getNativeNode)) : n = new p(s)
            } else "string" == typeof e || "number" == typeof e ? n = u.createInstanceForText(e) : a("131", typeof e);
            return n._mountIndex = 0, n._mountImage = null, n
        }
        var a = n(37),
            s = n(6),
            l = n(117),
            c = n(121),
            u = n(122),
            p = (n(123), n(10), n(13), function(e) {
                this.construct(e)
            });
        s(p.prototype, l, {
            _instantiateReactComponent: i
        }), e.exports = i
    },
    function(e, t, n) {
        "use strict";

        function r(e) {}

        function o(e, t) {}

        function i(e) {
            return !(!e.prototype || !e.prototype.isReactComponent)
        }

        function a(e) {
            return !(!e.prototype || !e.prototype.isPureReactComponent)
        }
        var s = n(37),
            l = n(6),
            c = n(5),
            u = n(112),
            p = n(12),
            h = n(47),
            d = n(113),
            f = (n(64), n(118)),
            m = n(61),
            v = n(22),
            y = (n(10), n(119)),
            g = n(120),
            b = (n(13), {
                ImpureClass: 0,
                PureClass: 1,
                StatelessFunctional: 2
            });
        r.prototype.render = function() {
            var e = d.get(this)._currentElement.type,
                t = e(this.props, this.context, this.updater);
            return o(e, t), t
        };
        var T = 1,
            S = {
                construct: function(e) {
                    this._currentElement = e, this._rootNodeID = 0, this._compositeType = null, this._instance = null, this._hostParent = null, this._hostContainerInfo = null, this._updateBatchNumber = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedNodeType = null, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._topLevelWrapper = null, this._pendingCallbacks = null, this._calledComponentWillUnmount = !1
                },
                mountComponent: function(e, t, n, l) {
                    this._context = l, this._mountOrder = T++, this._hostParent = t, this._hostContainerInfo = n;
                    var u, p = this._currentElement.props,
                        h = this._processContext(l),
                        f = this._currentElement.type,
                        m = e.getUpdateQueue(),
                        y = i(f),
                        g = this._constructComponent(y, p, h, m);
                    y || null != g && null != g.render ? a(f) ? this._compositeType = b.PureClass : this._compositeType = b.ImpureClass : (u = g, o(f, u), null === g || g === !1 || c.isValidElement(g) ? void 0 : s("105", f.displayName || f.name || "Component"), g = new r(f), this._compositeType = b.StatelessFunctional);
                    g.props = p, g.context = h, g.refs = v, g.updater = m, this._instance = g, d.set(g, this);
                    var S = g.state;
                    void 0 === S && (g.state = S = null), "object" != typeof S || Array.isArray(S) ? s("106", this.getName() || "ReactCompositeComponent") : void 0, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1;
                    var E;
                    return E = g.unstable_handleError ? this.performInitialMountWithErrorHandling(u, t, n, e, l) : this.performInitialMount(u, t, n, e, l), g.componentDidMount && e.getReactMountReady().enqueue(g.componentDidMount, g), E
                },
                _constructComponent: function(e, t, n, r) {
                    return this._constructComponentWithoutOwner(e, t, n, r)
                },
                _constructComponentWithoutOwner: function(e, t, n, r) {
                    var o = this._currentElement.type;
                    return e ? new o(t, n, r) : o(t, n, r)
                },
                performInitialMountWithErrorHandling: function(e, t, n, r, o) {
                    var i, a = r.checkpoint();
                    try {
                        i = this.performInitialMount(e, t, n, r, o)
                    } catch (s) {
                        r.rollback(a), this._instance.unstable_handleError(s), this._pendingStateQueue && (this._instance.state = this._processPendingState(this._instance.props, this._instance.context)), a = r.checkpoint(), this._renderedComponent.unmountComponent(!0), r.rollback(a), i = this.performInitialMount(e, t, n, r, o)
                    }
                    return i
                },
                performInitialMount: function(e, t, n, r, o) {
                    var i = this._instance,
                        a = 0;
                    i.componentWillMount && (i.componentWillMount(), this._pendingStateQueue && (i.state = this._processPendingState(i.props, i.context))), void 0 === e && (e = this._renderValidatedComponent());
                    var s = f.getType(e);
                    this._renderedNodeType = s;
                    var l = this._instantiateReactComponent(e, s !== f.EMPTY);
                    this._renderedComponent = l;
                    var c = m.mountComponent(l, r, t, n, this._processChildContext(o), a);
                    return c
                },
                getHostNode: function() {
                    return m.getHostNode(this._renderedComponent)
                },
                unmountComponent: function(e) {
                    if (this._renderedComponent) {
                        var t = this._instance;
                        if (t.componentWillUnmount && !t._calledComponentWillUnmount)
                            if (t._calledComponentWillUnmount = !0, e) {
                                var n = this.getName() + ".componentWillUnmount()";
                                h.invokeGuardedCallback(n, t.componentWillUnmount.bind(t))
                            } else t.componentWillUnmount();
                        this._renderedComponent && (m.unmountComponent(this._renderedComponent, e), this._renderedNodeType = null, this._renderedComponent = null, this._instance = null), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = 0, this._topLevelWrapper = null, d.remove(t)
                    }
                },
                _maskContext: function(e) {
                    var t = this._currentElement.type,
                        n = t.contextTypes;
                    if (!n) return v;
                    var r = {};
                    for (var o in n) r[o] = e[o];
                    return r
                },
                _processContext: function(e) {
                    var t = this._maskContext(e);
                    return t
                },
                _processChildContext: function(e) {
                    var t, n = this._currentElement.type,
                        r = this._instance;
                    if (r.getChildContext && (t = r.getChildContext()), t) {
                        "object" != typeof n.childContextTypes ? s("107", this.getName() || "ReactCompositeComponent") : void 0;
                        for (var o in t) o in n.childContextTypes ? void 0 : s("108", this.getName() || "ReactCompositeComponent", o);
                        return l({}, e, t)
                    }
                    return e
                },
                _checkContextTypes: function(e, t, n) {},
                receiveComponent: function(e, t, n) {
                    var r = this._currentElement,
                        o = this._context;
                    this._pendingElement = null, this.updateComponent(t, r, e, o, n)
                },
                performUpdateIfNecessary: function(e) {
                    null != this._pendingElement ? m.receiveComponent(this, this._pendingElement, e, this._context) : null !== this._pendingStateQueue || this._pendingForceUpdate ? this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context) : this._updateBatchNumber = null
                },
                updateComponent: function(e, t, n, r, o) {
                    var i = this._instance;
                    null == i ? s("136", this.getName() || "ReactCompositeComponent") : void 0;
                    var a, l = !1;
                    this._context === o ? a = i.context : (a = this._processContext(o), l = !0);
                    var c = t.props,
                        u = n.props;
                    t !== n && (l = !0), l && i.componentWillReceiveProps && i.componentWillReceiveProps(u, a);
                    var p = this._processPendingState(u, a),
                        h = !0;
                    this._pendingForceUpdate || (i.shouldComponentUpdate ? h = i.shouldComponentUpdate(u, p, a) : this._compositeType === b.PureClass && (h = !y(c, u) || !y(i.state, p))), this._updateBatchNumber = null, h ? (this._pendingForceUpdate = !1, this._performComponentUpdate(n, u, p, a, e, o)) : (this._currentElement = n, this._context = o, i.props = u, i.state = p, i.context = a)
                },
                _processPendingState: function(e, t) {
                    var n = this._instance,
                        r = this._pendingStateQueue,
                        o = this._pendingReplaceState;
                    if (this._pendingReplaceState = !1, this._pendingStateQueue = null, !r) return n.state;
                    if (o && 1 === r.length) return r[0];
                    for (var i = l({}, o ? r[0] : n.state), a = o ? 1 : 0; a < r.length; a++) {
                        var s = r[a];
                        l(i, "function" == typeof s ? s.call(n, i, e, t) : s)
                    }
                    return i
                },
                _performComponentUpdate: function(e, t, n, r, o, i) {
                    var a, s, l, c = this._instance,
                        u = Boolean(c.componentDidUpdate);
                    u && (a = c.props, s = c.state, l = c.context), c.componentWillUpdate && c.componentWillUpdate(t, n, r), this._currentElement = e, this._context = i, c.props = t, c.state = n, c.context = r, this._updateRenderedComponent(o, i), u && o.getReactMountReady().enqueue(c.componentDidUpdate.bind(c, a, s, l), c)
                },
                _updateRenderedComponent: function(e, t) {
                    var n = this._renderedComponent,
                        r = n._currentElement,
                        o = this._renderValidatedComponent(),
                        i = 0;
                    if (g(r, o)) m.receiveComponent(n, o, e, this._processChildContext(t));
                    else {
                        var a = m.getHostNode(n);
                        m.unmountComponent(n, !1);
                        var s = f.getType(o);
                        this._renderedNodeType = s;
                        var l = this._instantiateReactComponent(o, s !== f.EMPTY);
                        this._renderedComponent = l;
                        var c = m.mountComponent(l, e, this._hostParent, this._hostContainerInfo, this._processChildContext(t), i);
                        this._replaceNodeWithMarkup(a, c, n)
                    }
                },
                _replaceNodeWithMarkup: function(e, t, n) {
                    u.replaceNodeWithMarkup(e, t, n)
                },
                _renderValidatedComponentWithoutOwnerOrContext: function() {
                    var e, t = this._instance;
                    return e = t.render()
                },
                _renderValidatedComponent: function() {
                    var e;
                    if (this._compositeType !== b.StatelessFunctional) {
                        p.current = this;
                        try {
                            e = this._renderValidatedComponentWithoutOwnerOrContext()
                        } finally {
                            p.current = null
                        }
                    } else e = this._renderValidatedComponentWithoutOwnerOrContext();
                    return null === e || e === !1 || c.isValidElement(e) ? void 0 : s("109", this.getName() || "ReactCompositeComponent"), e
                },
                attachRef: function(e, t) {
                    var n = this.getPublicInstance();
                    null == n ? s("110") : void 0;
                    var r = t.getPublicInstance(),
                        o = n.refs === v ? n.refs = {} : n.refs;
                    o[e] = r
                },
                detachRef: function(e) {
                    var t = this.getPublicInstance().refs;
                    delete t[e]
                },
                getName: function() {
                    var e = this._currentElement.type,
                        t = this._instance && this._instance.constructor;
                    return e.displayName || t && t.displayName || e.name || t && t.name || null
                },
                getPublicInstance: function() {
                    var e = this._instance;
                    return this._compositeType === b.StatelessFunctional ? null : e
                },
                _instantiateReactComponent: null
            };
        e.exports = S
    },
    function(e, t, n) {
        "use strict";
        var r = n(37),
            o = n(5),
            i = (n(10), {
                HOST: 0,
                COMPOSITE: 1,
                EMPTY: 2,
                getType: function(e) {
                    return null === e || e === !1 ? i.EMPTY : o.isValidElement(e) ? "function" == typeof e.type ? i.COMPOSITE : i.HOST : void r("26", e)
                }
            });
        e.exports = i
    },
    function(e, t) {
        "use strict";

        function n(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
        }

        function r(e, t) {
            if (n(e, t)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
            var r = Object.keys(e),
                i = Object.keys(t);
            if (r.length !== i.length) return !1;
            for (var a = 0; a < r.length; a++)
                if (!o.call(t, r[a]) || !n(e[r[a]], t[r[a]])) return !1;
            return !0
        }
        var o = Object.prototype.hasOwnProperty;
        e.exports = r
    },
    function(e, t) {
        "use strict";

        function n(e, t) {
            var n = null === e || e === !1,
                r = null === t || t === !1;
            if (n || r) return n === r;
            var o = typeof e,
                i = typeof t;
            return "string" === o || "number" === o ? "string" === i || "number" === i : "object" === i && e.type === t.type && e.key === t.key
        }
        e.exports = n
    },
    function(e, t) {
        "use strict";
        var n, r = {
                injectEmptyComponentFactory: function(e) {
                    n = e
                }
            },
            o = {
                create: function(e) {
                    return n(e)
                }
            };
        o.injection = r, e.exports = o
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return l ? void 0 : a("111", e.type), new l(e)
        }

        function o(e) {
            return new u(e)
        }

        function i(e) {
            return e instanceof u
        }
        var a = n(37),
            s = n(6),
            l = (n(10), null),
            c = {},
            u = null,
            p = {
                injectGenericComponentClass: function(e) {
                    l = e
                },
                injectTextComponentClass: function(e) {
                    u = e
                },
                injectComponentClasses: function(e) {
                    s(c, e)
                }
            },
            h = {
                createInternalComponent: r,
                createInstanceForText: o,
                isTextComponent: i,
                injection: p
            };
        e.exports = h
    },
    function(e, t) {
        "use strict";

        function n() {
            return r++
        }
        var r = 1;
        e.exports = n
    },
    19,
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return e && "object" == typeof e && null != e.key ? c.escape(e.key) : t.toString(36)
        }

        function o(e, t, n, i) {
            var h = typeof e;
            if ("undefined" !== h && "boolean" !== h || (e = null), null === e || "string" === h || "number" === h || "object" === h && e.$$typeof === s) return n(i, e, "" === t ? u + r(e, 0) : t), 1;
            var d, f, m = 0,
                v = "" === t ? u : t + p;
            if (Array.isArray(e))
                for (var y = 0; y < e.length; y++) d = e[y], f = v + r(d, y), m += o(d, f, n, i);
            else {
                var g = l(e);
                if (g) {
                    var b, T = g.call(e);
                    if (g !== e.entries)
                        for (var S = 0; !(b = T.next()).done;) d = b.value, f = v + r(d, S++), m += o(d, f, n, i);
                    else
                        for (; !(b = T.next()).done;) {
                            var E = b.value;
                            E && (d = E[1], f = v + c.escape(E[0]) + p + r(d, 0), m += o(d, f, n, i))
                        }
                } else if ("object" === h) {
                    var A = "",
                        C = String(e);
                    a("31", "[object Object]" === C ? "object with keys {" + Object.keys(e).join(", ") + "}" : C, A)
                }
            }
            return m
        }

        function i(e, t, n) {
            return null == e ? 0 : o(e, "", t, n)
        }
        var a = n(37),
            s = (n(12), n(126)),
            l = n(127),
            c = (n(10), n(124)),
            u = (n(13), "."),
            p = ":";
        e.exports = i
    },
    16, 18,
    function(e, t, n) {
        "use strict";

        function r(e) {
            var t = Function.prototype.toString,
                n = Object.prototype.hasOwnProperty,
                r = RegExp("^" + t.call(n).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            try {
                var o = t.call(e);
                return r.test(o)
            } catch (e) {
                return !1
            }
        }

        function o(e) {
            var t = c(e);
            if (t) {
                var n = t.childIDs;
                u(e), n.forEach(o)
            }
        }

        function i(e, t, n) {
            return "\n    in " + (e || "Unknown") + (t ? " (at " + t.fileName.replace(/^.*[\\\/]/, "") + ":" + t.lineNumber + ")" : n ? " (created by " + n + ")" : "")
        }

        function a(e) {
            return null == e ? "#empty" : "string" == typeof e || "number" == typeof e ? "#text" : "string" == typeof e.type ? e.type : e.type.displayName || e.type.name || "Unknown"
        }

        function s(e) {
            var t, n = _.getDisplayName(e),
                r = _.getElement(e),
                o = _.getOwnerID(e);
            return o && (t = _.getDisplayName(o)), i(n, r && r._source, t)
        }
        var l, c, u, p, h, d, f, m = n(9),
            v = n(12),
            y = (n(10), n(13), "function" == typeof Array.from && "function" == typeof Map && r(Map) && null != Map.prototype && "function" == typeof Map.prototype.keys && r(Map.prototype.keys) && "function" == typeof Set && r(Set) && null != Set.prototype && "function" == typeof Set.prototype.keys && r(Set.prototype.keys));
        if (y) {
            var g = new Map,
                b = new Set;
            l = function(e, t) {
                g.set(e, t)
            }, c = function(e) {
                return g.get(e)
            }, u = function(e) {
                g.delete(e)
            }, p = function() {
                return Array.from(g.keys())
            }, h = function(e) {
                b.add(e)
            }, d = function(e) {
                b.delete(e)
            }, f = function() {
                return Array.from(b.keys())
            }
        } else {
            var T = {},
                S = {},
                E = function(e) {
                    return "." + e
                },
                A = function(e) {
                    return parseInt(e.substr(1), 10)
                };
            l = function(e, t) {
                var n = E(e);
                T[n] = t
            }, c = function(e) {
                var t = E(e);
                return T[t]
            }, u = function(e) {
                var t = E(e);
                delete T[t]
            }, p = function() {
                return Object.keys(T).map(A)
            }, h = function(e) {
                var t = E(e);
                S[t] = !0
            }, d = function(e) {
                var t = E(e);
                delete S[t]
            }, f = function() {
                return Object.keys(S).map(A)
            }
        }
        var C = [],
            _ = {
                onSetChildren: function(e, t) {
                    var n = c(e);
                    n ? void 0 : m("144"), n.childIDs = t;
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r],
                            i = c(o);
                        i ? void 0 : m("140"), null == i.childIDs && "object" == typeof i.element && null != i.element ? m("141") : void 0, i.isMounted ? void 0 : m("71"), null == i.parentID && (i.parentID = e), i.parentID !== e ? m("142", o, i.parentID, e) : void 0
                    }
                },
                onBeforeMountComponent: function(e, t, n) {
                    var r = {
                        element: t,
                        parentID: n,
                        text: null,
                        childIDs: [],
                        isMounted: !1,
                        updateCount: 0
                    };
                    l(e, r)
                },
                onBeforeUpdateComponent: function(e, t) {
                    var n = c(e);
                    n && n.isMounted && (n.element = t)
                },
                onMountComponent: function(e) {
                    var t = c(e);
                    t ? void 0 : m("144"), t.isMounted = !0;
                    var n = 0 === t.parentID;
                    n && h(e)
                },
                onUpdateComponent: function(e) {
                    var t = c(e);
                    t && t.isMounted && t.updateCount++
                },
                onUnmountComponent: function(e) {
                    var t = c(e);
                    if (t) {
                        t.isMounted = !1;
                        var n = 0 === t.parentID;
                        n && d(e)
                    }
                    C.push(e)
                },
                purgeUnmountedComponents: function() {
                    if (!_._preventPurging) {
                        for (var e = 0; e < C.length; e++) {
                            var t = C[e];
                            o(t)
                        }
                        C.length = 0
                    }
                },
                isMounted: function(e) {
                    var t = c(e);
                    return !!t && t.isMounted
                },
                getCurrentStackAddendum: function(e) {
                    var t = "";
                    if (e) {
                        var n = a(e),
                            r = e._owner;
                        t += i(n, e._source, r && r.getName())
                    }
                    var o = v.current,
                        s = o && o._debugID;
                    return t += _.getStackAddendumByID(s)
                },
                getStackAddendumByID: function(e) {
                    for (var t = ""; e;) t += s(e), e = _.getParentID(e);
                    return t
                },
                getChildIDs: function(e) {
                    var t = c(e);
                    return t ? t.childIDs : []
                },
                getDisplayName: function(e) {
                    var t = _.getElement(e);
                    return t ? a(t) : null
                },
                getElement: function(e) {
                    var t = c(e);
                    return t ? t.element : null
                },
                getOwnerID: function(e) {
                    var t = _.getElement(e);
                    return t && t._owner ? t._owner._debugID : null
                },
                getParentID: function(e) {
                    var t = c(e);
                    return t ? t.parentID : null
                },
                getSource: function(e) {
                    var t = c(e),
                        n = t ? t.element : null,
                        r = null != n ? n._source : null;
                    return r
                },
                getText: function(e) {
                    var t = _.getElement(e);
                    return "string" == typeof t ? t : "number" == typeof t ? "" + t : null
                },
                getUpdateCount: function(e) {
                    var t = c(e);
                    return t ? t.updateCount : 0
                },
                getRootIDs: f,
                getRegisteredIDs: p
            };
        e.exports = _
    },
    function(e, t, n) {
        (function(t) {
            "use strict";

            function r(e, t, n, r) {
                if (e && "object" == typeof e) {
                    var o = e,
                        i = void 0 === o[n];
                    i && null != t && (o[n] = t)
                }
            }

            function o(e, t) {
                if (null == e) return e;
                var n = {};
                return i(e, r, n), n
            }
            var i = (n(124), n(125));
            n(13);
            e.exports = o
        }).call(t, n(115))
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.useCreateElement = !1, this.updateQueue = new s(this)
        }
        var o = n(6),
            i = n(52),
            a = n(65),
            s = (n(64), n(131)),
            l = [],
            c = {
                enqueue: function() {}
            },
            u = {
                getTransactionWrappers: function() {
                    return l
                },
                getReactMountReady: function() {
                    return c
                },
                getUpdateQueue: function() {
                    return this.updateQueue
                },
                destructor: function() {},
                checkpoint: function() {},
                rollback: function() {}
            };
        o(r.prototype, a, u), i.addPoolingTo(r), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {}
        var i = n(132),
            a = (n(13), function() {
                function e(t) {
                    r(this, e), this.transaction = t
                }
                return e.prototype.isMounted = function(e) {
                    return !1
                }, e.prototype.enqueueCallback = function(e, t, n) {
                    this.transaction.isInTransaction() && i.enqueueCallback(e, t, n)
                }, e.prototype.enqueueForceUpdate = function(e) {
                    this.transaction.isInTransaction() ? i.enqueueForceUpdate(e) : o(e, "forceUpdate")
                }, e.prototype.enqueueReplaceState = function(e, t) {
                    this.transaction.isInTransaction() ? i.enqueueReplaceState(e, t) : o(e, "replaceState")
                }, e.prototype.enqueueSetState = function(e, t) {
                    this.transaction.isInTransaction() ? i.enqueueSetState(e, t) : o(e, "setState")
                }, e
            }());
        e.exports = a
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            l.enqueueUpdate(e)
        }

        function o(e) {
            var t = typeof e;
            if ("object" !== t) return t;
            var n = e.constructor && e.constructor.name || t,
                r = Object.keys(e);
            return r.length > 0 && r.length < 20 ? n + " (keys: " + r.join(", ") + ")" : n
        }

        function i(e, t) {
            var n = s.get(e);
            if (!n) {
                return null
            }
            return n
        }
        var a = n(37),
            s = (n(12), n(113)),
            l = (n(64), n(58)),
            c = (n(10), n(13), {
                isMounted: function(e) {
                    var t = s.get(e);
                    return !!t && !!t._renderedComponent
                },
                enqueueCallback: function(e, t, n) {
                    c.validateCallback(t, n);
                    var o = i(e);
                    return o ? (o._pendingCallbacks ? o._pendingCallbacks.push(t) : o._pendingCallbacks = [t], void r(o)) : null
                },
                enqueueCallbackInternal: function(e, t) {
                    e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t], r(e)
                },
                enqueueForceUpdate: function(e) {
                    var t = i(e, "forceUpdate");
                    t && (t._pendingForceUpdate = !0, r(t))
                },
                enqueueReplaceState: function(e, t) {
                    var n = i(e, "replaceState");
                    n && (n._pendingStateQueue = [t], n._pendingReplaceState = !0, r(n))
                },
                enqueueSetState: function(e, t) {
                    var n = i(e, "setState");
                    if (n) {
                        var o = n._pendingStateQueue || (n._pendingStateQueue = []);
                        o.push(t), r(n)
                    }
                },
                enqueueElementInternal: function(e, t, n) {
                    e._pendingElement = t, e._context = n, r(e)
                },
                validateCallback: function(e, t) {
                    e && "function" != typeof e ? a("122", t, o(e)) : void 0
                }
            });
        e.exports = c
    },
    function(e, t, n) {
        "use strict";
        var r = (n(6), n(14)),
            o = (n(13), r);
        e.exports = o
    },
    function(e, t, n) {
        "use strict";
        var r = n(6),
            o = n(78),
            i = n(36),
            a = function(e) {
                this._currentElement = null, this._hostNode = null, this._hostParent = null, this._hostContainerInfo = null, this._domID = 0
            };
        r(a.prototype, {
            mountComponent: function(e, t, n, r) {
                var a = n._idCounter++;
                this._domID = a, this._hostParent = t, this._hostContainerInfo = n;
                var s = " react-empty: " + this._domID + " ";
                if (e.useCreateElement) {
                    var l = n._ownerDocument,
                        c = l.createComment(s);
                    return i.precacheNode(this, c), o(c)
                }
                return e.renderToStaticMarkup ? "" : "<!--" + s + "-->"
            },
            receiveComponent: function() {},
            getHostNode: function() {
                return i.getNodeFromInstance(this)
            },
            unmountComponent: function() {
                i.uncacheNode(this)
            }
        }), e.exports = a
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            "_hostNode" in e ? void 0 : l("33"), "_hostNode" in t ? void 0 : l("33");
            for (var n = 0, r = e; r; r = r._hostParent) n++;
            for (var o = 0, i = t; i; i = i._hostParent) o++;
            for (; n - o > 0;) e = e._hostParent, n--;
            for (; o - n > 0;) t = t._hostParent, o--;
            for (var a = n; a--;) {
                if (e === t) return e;
                e = e._hostParent, t = t._hostParent
            }
            return null
        }

        function o(e, t) {
            "_hostNode" in e ? void 0 : l("35"), "_hostNode" in t ? void 0 : l("35");
            for (; t;) {
                if (t === e) return !0;
                t = t._hostParent
            }
            return !1
        }

        function i(e) {
            return "_hostNode" in e ? void 0 : l("36"), e._hostParent
        }

        function a(e, t, n) {
            for (var r = []; e;) r.push(e), e = e._hostParent;
            var o;
            for (o = r.length; o-- > 0;) t(r[o], "captured", n);
            for (o = 0; o < r.length; o++) t(r[o], "bubbled", n)
        }

        function s(e, t, n, o, i) {
            for (var a = e && t ? r(e, t) : null, s = []; e && e !== a;) s.push(e), e = e._hostParent;
            for (var l = []; t && t !== a;) l.push(t), t = t._hostParent;
            var c;
            for (c = 0; c < s.length; c++) n(s[c], "bubbled", o);
            for (c = l.length; c-- > 0;) n(l[c], "captured", i)
        }
        var l = n(37);
        n(10);
        e.exports = {
            isAncestor: o,
            getLowestCommonAncestor: r,
            getParentInstance: i,
            traverseTwoPhase: a,
            traverseEnterLeave: s
        }
    },
    function(e, t, n) {
        "use strict";
        var r = n(37),
            o = n(6),
            i = n(77),
            a = n(78),
            s = n(36),
            l = n(83),
            c = (n(10), n(133),
                function(e) {
                    this._currentElement = e, this._stringText = "" + e, this._hostNode = null, this._hostParent = null, this._domID = 0, this._mountIndex = 0, this._closingComment = null, this._commentNodes = null
                });
        o(c.prototype, {
            mountComponent: function(e, t, n, r) {
                var o = n._idCounter++,
                    i = " react-text: " + o + " ",
                    c = " /react-text ";
                if (this._domID = o, this._hostParent = t, e.useCreateElement) {
                    var u = n._ownerDocument,
                        p = u.createComment(i),
                        h = u.createComment(c),
                        d = a(u.createDocumentFragment());
                    return a.queueChild(d, a(p)), this._stringText && a.queueChild(d, a(u.createTextNode(this._stringText))), a.queueChild(d, a(h)), s.precacheNode(this, p), this._closingComment = h, d
                }
                var f = l(this._stringText);
                return e.renderToStaticMarkup ? f : "<!--" + i + "-->" + f + "<!--" + c + "-->"
            },
            receiveComponent: function(e, t) {
                if (e !== this._currentElement) {
                    this._currentElement = e;
                    var n = "" + e;
                    if (n !== this._stringText) {
                        this._stringText = n;
                        var r = this.getHostNode();
                        i.replaceDelimitedText(r[0], r[1], n)
                    }
                }
            },
            getHostNode: function() {
                var e = this._commentNodes;
                if (e) return e;
                if (!this._closingComment)
                    for (var t = s.getNodeFromInstance(this), n = t.nextSibling;;) {
                        if (null == n ? r("67", this._domID) : void 0, 8 === n.nodeType && " /react-text " === n.nodeValue) {
                            this._closingComment = n;
                            break
                        }
                        n = n.nextSibling
                    }
                return e = [this._hostNode, this._closingComment], this._commentNodes = e, e
            },
            unmountComponent: function() {
                this._closingComment = null, this._commentNodes = null, s.uncacheNode(this)
            }
        }), e.exports = c
    },
    function(e, t, n) {
        "use strict";

        function r() {
            this.reinitializeTransaction()
        }
        var o = n(6),
            i = n(58),
            a = n(65),
            s = n(14),
            l = {
                initialize: s,
                close: function() {
                    h.isBatchingUpdates = !1
                }
            },
            c = {
                initialize: s,
                close: i.flushBatchedUpdates.bind(i)
            },
            u = [c, l];
        o(r.prototype, a, {
            getTransactionWrappers: function() {
                return u
            }
        });
        var p = new r,
            h = {
                isBatchingUpdates: !1,
                batchedUpdates: function(e, t, n, r, o, i) {
                    var a = h.isBatchingUpdates;
                    return h.isBatchingUpdates = !0, a ? e(t, n, r, o, i) : p.perform(e, null, t, n, r, o, i)
                }
            };
        e.exports = h
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            for (; e._hostParent;) e = e._hostParent;
            var t = p.getNodeFromInstance(e),
                n = t.parentNode;
            return p.getClosestInstanceFromNode(n)
        }

        function o(e, t) {
            this.topLevelType = e, this.nativeEvent = t, this.ancestors = []
        }

        function i(e) {
            var t = d(e.nativeEvent),
                n = p.getClosestInstanceFromNode(t),
                o = n;
            do e.ancestors.push(o), o = o && r(o); while (o);
            for (var i = 0; i < e.ancestors.length; i++) n = e.ancestors[i], m._handleTopLevel(e.topLevelType, n, e.nativeEvent, d(e.nativeEvent))
        }

        function a(e) {
            var t = f(window);
            e(t)
        }
        var s = n(6),
            l = n(139),
            c = n(50),
            u = n(52),
            p = n(36),
            h = n(58),
            d = n(66),
            f = n(140);
        s(o.prototype, {
            destructor: function() {
                this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0
            }
        }), u.addPoolingTo(o, u.twoArgumentPooler);
        var m = {
            _enabled: !0,
            _handleTopLevel: null,
            WINDOW_HANDLE: c.canUseDOM ? window : null,
            setHandleTopLevel: function(e) {
                m._handleTopLevel = e
            },
            setEnabled: function(e) {
                m._enabled = !!e
            },
            isEnabled: function() {
                return m._enabled
            },
            trapBubbledEvent: function(e, t, n) {
                return n ? l.listen(n, t, m.dispatchEvent.bind(null, e)) : null
            },
            trapCapturedEvent: function(e, t, n) {
                return n ? l.capture(n, t, m.dispatchEvent.bind(null, e)) : null
            },
            monitorScrollValue: function(e) {
                var t = a.bind(null, e);
                l.listen(window, "scroll", t)
            },
            dispatchEvent: function(e, t) {
                if (m._enabled) {
                    var n = o.getPooled(e, t);
                    try {
                        h.batchedUpdates(i, n)
                    } finally {
                        o.release(n)
                    }
                }
            }
        };
        e.exports = m
    },
    function(e, t, n) {
        "use strict";
        var r = n(14),
            o = {
                listen: function(e, t, n) {
                    return e.addEventListener ? (e.addEventListener(t, n, !1), {
                        remove: function() {
                            e.removeEventListener(t, n, !1)
                        }
                    }) : e.attachEvent ? (e.attachEvent("on" + t, n), {
                        remove: function() {
                            e.detachEvent("on" + t, n)
                        }
                    }) : void 0
                },
                capture: function(e, t, n) {
                    return e.addEventListener ? (e.addEventListener(t, n, !0), {
                        remove: function() {
                            e.removeEventListener(t, n, !0)
                        }
                    }) : {
                        remove: r
                    }
                },
                registerDefault: function() {}
            };
        e.exports = o
    },
    function(e, t) {
        "use strict";

        function n(e) {
            return e === window ? {
                x: window.pageXOffset || document.documentElement.scrollLeft,
                y: window.pageYOffset || document.documentElement.scrollTop
            } : {
                x: e.scrollLeft,
                y: e.scrollTop
            }
        }
        e.exports = n
    },
    function(e, t, n) {
        "use strict";
        var r = n(38),
            o = n(44),
            i = n(46),
            a = n(112),
            s = n(121),
            l = n(102),
            c = n(122),
            u = n(58),
            p = {
                Component: a.injection,
                DOMProperty: r.injection,
                EmptyComponent: s.injection,
                EventPluginHub: o.injection,
                EventPluginUtils: i.injection,
                EventEmitter: l.injection,
                HostComponent: c.injection,
                Updates: u.injection
            };
        e.exports = p
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = i.getPooled(null), this.useCreateElement = e
        }
        var o = n(6),
            i = n(59),
            a = n(52),
            s = n(102),
            l = n(143),
            c = (n(64), n(65)),
            u = n(132),
            p = {
                initialize: l.getSelectionInformation,
                close: l.restoreSelection
            },
            h = {
                initialize: function() {
                    var e = s.isEnabled();
                    return s.setEnabled(!1), e
                },
                close: function(e) {
                    s.setEnabled(e)
                }
            },
            d = {
                initialize: function() {
                    this.reactMountReady.reset()
                },
                close: function() {
                    this.reactMountReady.notifyAll()
                }
            },
            f = [p, h, d],
            m = {
                getTransactionWrappers: function() {
                    return f
                },
                getReactMountReady: function() {
                    return this.reactMountReady
                },
                getUpdateQueue: function() {
                    return u
                },
                checkpoint: function() {
                    return this.reactMountReady.checkpoint()
                },
                rollback: function(e) {
                    this.reactMountReady.rollback(e)
                },
                destructor: function() {
                    i.release(this.reactMountReady), this.reactMountReady = null
                }
            };
        o(r.prototype, c, m), a.addPoolingTo(r), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return i(document.documentElement, e)
        }
        var o = n(144),
            i = n(146),
            a = n(91),
            s = n(149),
            l = {
                hasSelectionCapabilities: function(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable)
                },
                getSelectionInformation: function() {
                    var e = s();
                    return {
                        focusedElem: e,
                        selectionRange: l.hasSelectionCapabilities(e) ? l.getSelection(e) : null
                    }
                },
                restoreSelection: function(e) {
                    var t = s(),
                        n = e.focusedElem,
                        o = e.selectionRange;
                    t !== n && r(n) && (l.hasSelectionCapabilities(n) && l.setSelection(n, o), a(n))
                },
                getSelection: function(e) {
                    var t;
                    if ("selectionStart" in e) t = {
                        start: e.selectionStart,
                        end: e.selectionEnd
                    };
                    else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                        var n = document.selection.createRange();
                        n.parentElement() === e && (t = {
                            start: -n.moveStart("character", -e.value.length),
                            end: -n.moveEnd("character", -e.value.length)
                        })
                    } else t = o.getOffsets(e);
                    return t || {
                        start: 0,
                        end: 0
                    }
                },
                setSelection: function(e, t) {
                    var n = t.start,
                        r = t.end;
                    if (void 0 === r && (r = n), "selectionStart" in e) e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length);
                    else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                        var i = e.createTextRange();
                        i.collapse(!0), i.moveStart("character", n), i.moveEnd("character", r - n), i.select()
                    } else o.setOffsets(e, t)
                }
            };
        e.exports = l
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return e === n && t === r
        }

        function o(e) {
            var t = document.selection,
                n = t.createRange(),
                r = n.text.length,
                o = n.duplicate();
            o.moveToElementText(e), o.setEndPoint("EndToStart", n);
            var i = o.text.length,
                a = i + r;
            return {
                start: i,
                end: a
            }
        }

        function i(e) {
            var t = window.getSelection && window.getSelection();
            if (!t || 0 === t.rangeCount) return null;
            var n = t.anchorNode,
                o = t.anchorOffset,
                i = t.focusNode,
                a = t.focusOffset,
                s = t.getRangeAt(0);
            try {
                s.startContainer.nodeType, s.endContainer.nodeType
            } catch (e) {
                return null
            }
            var l = r(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
                c = l ? 0 : s.toString().length,
                u = s.cloneRange();
            u.selectNodeContents(e), u.setEnd(s.startContainer, s.startOffset);
            var p = r(u.startContainer, u.startOffset, u.endContainer, u.endOffset),
                h = p ? 0 : u.toString().length,
                d = h + c,
                f = document.createRange();
            f.setStart(n, o), f.setEnd(i, a);
            var m = f.collapsed;
            return {
                start: m ? d : h,
                end: m ? h : d
            }
        }

        function a(e, t) {
            var n, r, o = document.selection.createRange().duplicate();
            void 0 === t.end ? (n = t.start, r = n) : t.start > t.end ? (n = t.end, r = t.start) : (n = t.start, r = t.end), o.moveToElementText(e), o.moveStart("character", n), o.setEndPoint("EndToStart", o), o.moveEnd("character", r - n), o.select()
        }

        function s(e, t) {
            if (window.getSelection) {
                var n = window.getSelection(),
                    r = e[u()].length,
                    o = Math.min(t.start, r),
                    i = void 0 === t.end ? o : Math.min(t.end, r);
                if (!n.extend && o > i) {
                    var a = i;
                    i = o, o = a
                }
                var s = c(e, o),
                    l = c(e, i);
                if (s && l) {
                    var p = document.createRange();
                    p.setStart(s.node, s.offset), n.removeAllRanges(), o > i ? (n.addRange(p), n.extend(l.node, l.offset)) : (p.setEnd(l.node, l.offset), n.addRange(p))
                }
            }
        }
        var l = n(50),
            c = n(145),
            u = n(53),
            p = l.canUseDOM && "selection" in document && !("getSelection" in window),
            h = {
                getOffsets: p ? o : i,
                setOffsets: p ? a : s
            };
        e.exports = h
    },
    function(e, t) {
        "use strict";

        function n(e) {
            for (; e && e.firstChild;) e = e.firstChild;
            return e
        }

        function r(e) {
            for (; e;) {
                if (e.nextSibling) return e.nextSibling;
                e = e.parentNode
            }
        }

        function o(e, t) {
            for (var o = n(e), i = 0, a = 0; o;) {
                if (3 === o.nodeType) {
                    if (a = i + o.textContent.length, i <= t && a >= t) return {
                        node: o,
                        offset: t - i
                    };
                    i = a
                }
                o = n(r(o))
            }
        }
        e.exports = o
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return !(!e || !t) && (e === t || !o(e) && (o(t) ? r(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
        }
        var o = n(147);
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return o(e) && 3 == e.nodeType
        }
        var o = n(148);
        e.exports = r
    },
    function(e, t) {
        "use strict";

        function n(e) {
            return !(!e || !("function" == typeof Node ? e instanceof Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
        }
        e.exports = n
    },
    function(e, t) {
        "use strict";

        function n() {
            if ("undefined" == typeof document) return null;
            try {
                return document.activeElement || document.body
            } catch (e) {
                return document.body
            }
        }
        e.exports = n
    },
    function(e, t) {
        "use strict";
        var n = {
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace"
            },
            r = {
                accentHeight: "accent-height",
                accumulate: 0,
                additive: 0,
                alignmentBaseline: "alignment-baseline",
                allowReorder: "allowReorder",
                alphabetic: 0,
                amplitude: 0,
                arabicForm: "arabic-form",
                ascent: 0,
                attributeName: "attributeName",
                attributeType: "attributeType",
                autoReverse: "autoReverse",
                azimuth: 0,
                baseFrequency: "baseFrequency",
                baseProfile: "baseProfile",
                baselineShift: "baseline-shift",
                bbox: 0,
                begin: 0,
                bias: 0,
                by: 0,
                calcMode: "calcMode",
                capHeight: "cap-height",
                clip: 0,
                clipPath: "clip-path",
                clipRule: "clip-rule",
                clipPathUnits: "clipPathUnits",
                colorInterpolation: "color-interpolation",
                colorInterpolationFilters: "color-interpolation-filters",
                colorProfile: "color-profile",
                colorRendering: "color-rendering",
                contentScriptType: "contentScriptType",
                contentStyleType: "contentStyleType",
                cursor: 0,
                cx: 0,
                cy: 0,
                d: 0,
                decelerate: 0,
                descent: 0,
                diffuseConstant: "diffuseConstant",
                direction: 0,
                display: 0,
                divisor: 0,
                dominantBaseline: "dominant-baseline",
                dur: 0,
                dx: 0,
                dy: 0,
                edgeMode: "edgeMode",
                elevation: 0,
                enableBackground: "enable-background",
                end: 0,
                exponent: 0,
                externalResourcesRequired: "externalResourcesRequired",
                fill: 0,
                fillOpacity: "fill-opacity",
                fillRule: "fill-rule",
                filter: 0,
                filterRes: "filterRes",
                filterUnits: "filterUnits",
                floodColor: "flood-color",
                floodOpacity: "flood-opacity",
                focusable: 0,
                fontFamily: "font-family",
                fontSize: "font-size",
                fontSizeAdjust: "font-size-adjust",
                fontStretch: "font-stretch",
                fontStyle: "font-style",
                fontVariant: "font-variant",
                fontWeight: "font-weight",
                format: 0,
                from: 0,
                fx: 0,
                fy: 0,
                g1: 0,
                g2: 0,
                glyphName: "glyph-name",
                glyphOrientationHorizontal: "glyph-orientation-horizontal",
                glyphOrientationVertical: "glyph-orientation-vertical",
                glyphRef: "glyphRef",
                gradientTransform: "gradientTransform",
                gradientUnits: "gradientUnits",
                hanging: 0,
                horizAdvX: "horiz-adv-x",
                horizOriginX: "horiz-origin-x",
                ideographic: 0,
                imageRendering: "image-rendering",
                in: 0,
                in2: 0,
                intercept: 0,
                k: 0,
                k1: 0,
                k2: 0,
                k3: 0,
                k4: 0,
                kernelMatrix: "kernelMatrix",
                kernelUnitLength: "kernelUnitLength",
                kerning: 0,
                keyPoints: "keyPoints",
                keySplines: "keySplines",
                keyTimes: "keyTimes",
                lengthAdjust: "lengthAdjust",
                letterSpacing: "letter-spacing",
                lightingColor: "lighting-color",
                limitingConeAngle: "limitingConeAngle",
                local: 0,
                markerEnd: "marker-end",
                markerMid: "marker-mid",
                markerStart: "marker-start",
                markerHeight: "markerHeight",
                markerUnits: "markerUnits",
                markerWidth: "markerWidth",
                mask: 0,
                maskContentUnits: "maskContentUnits",
                maskUnits: "maskUnits",
                mathematical: 0,
                mode: 0,
                numOctaves: "numOctaves",
                offset: 0,
                opacity: 0,
                operator: 0,
                order: 0,
                orient: 0,
                orientation: 0,
                origin: 0,
                overflow: 0,
                overlinePosition: "overline-position",
                overlineThickness: "overline-thickness",
                paintOrder: "paint-order",
                panose1: "panose-1",
                pathLength: "pathLength",
                patternContentUnits: "patternContentUnits",
                patternTransform: "patternTransform",
                patternUnits: "patternUnits",
                pointerEvents: "pointer-events",
                points: 0,
                pointsAtX: "pointsAtX",
                pointsAtY: "pointsAtY",
                pointsAtZ: "pointsAtZ",
                preserveAlpha: "preserveAlpha",
                preserveAspectRatio: "preserveAspectRatio",
                primitiveUnits: "primitiveUnits",
                r: 0,
                radius: 0,
                refX: "refX",
                refY: "refY",
                renderingIntent: "rendering-intent",
                repeatCount: "repeatCount",
                repeatDur: "repeatDur",
                requiredExtensions: "requiredExtensions",
                requiredFeatures: "requiredFeatures",
                restart: 0,
                result: 0,
                rotate: 0,
                rx: 0,
                ry: 0,
                scale: 0,
                seed: 0,
                shapeRendering: "shape-rendering",
                slope: 0,
                spacing: 0,
                specularConstant: "specularConstant",
                specularExponent: "specularExponent",
                speed: 0,
                spreadMethod: "spreadMethod",
                startOffset: "startOffset",
                stdDeviation: "stdDeviation",
                stemh: 0,
                stemv: 0,
                stitchTiles: "stitchTiles",
                stopColor: "stop-color",
                stopOpacity: "stop-opacity",
                strikethroughPosition: "strikethrough-position",
                strikethroughThickness: "strikethrough-thickness",
                string: 0,
                stroke: 0,
                strokeDasharray: "stroke-dasharray",
                strokeDashoffset: "stroke-dashoffset",
                strokeLinecap: "stroke-linecap",
                strokeLinejoin: "stroke-linejoin",
                strokeMiterlimit: "stroke-miterlimit",
                strokeOpacity: "stroke-opacity",
                strokeWidth: "stroke-width",
                surfaceScale: "surfaceScale",
                systemLanguage: "systemLanguage",
                tableValues: "tableValues",
                targetX: "targetX",
                targetY: "targetY",
                textAnchor: "text-anchor",
                textDecoration: "text-decoration",
                textRendering: "text-rendering",
                textLength: "textLength",
                to: 0,
                transform: 0,
                u1: 0,
                u2: 0,
                underlinePosition: "underline-position",
                underlineThickness: "underline-thickness",
                unicode: 0,
                unicodeBidi: "unicode-bidi",
                unicodeRange: "unicode-range",
                unitsPerEm: "units-per-em",
                vAlphabetic: "v-alphabetic",
                vHanging: "v-hanging",
                vIdeographic: "v-ideographic",
                vMathematical: "v-mathematical",
                values: 0,
                vectorEffect: "vector-effect",
                version: 0,
                vertAdvY: "vert-adv-y",
                vertOriginX: "vert-origin-x",
                vertOriginY: "vert-origin-y",
                viewBox: "viewBox",
                viewTarget: "viewTarget",
                visibility: 0,
                widths: 0,
                wordSpacing: "word-spacing",
                writingMode: "writing-mode",
                x: 0,
                xHeight: "x-height",
                x1: 0,
                x2: 0,
                xChannelSelector: "xChannelSelector",
                xlinkActuate: "xlink:actuate",
                xlinkArcrole: "xlink:arcrole",
                xlinkHref: "xlink:href",
                xlinkRole: "xlink:role",
                xlinkShow: "xlink:show",
                xlinkTitle: "xlink:title",
                xlinkType: "xlink:type",
                xmlBase: "xml:base",
                xmlns: 0,
                xmlnsXlink: "xmlns:xlink",
                xmlLang: "xml:lang",
                xmlSpace: "xml:space",
                y: 0,
                y1: 0,
                y2: 0,
                yChannelSelector: "yChannelSelector",
                z: 0,
                zoomAndPan: "zoomAndPan"
            },
            o = {
                Properties: {},
                DOMAttributeNamespaces: {
                    xlinkActuate: n.xlink,
                    xlinkArcrole: n.xlink,
                    xlinkHref: n.xlink,
                    xlinkRole: n.xlink,
                    xlinkShow: n.xlink,
                    xlinkTitle: n.xlink,
                    xlinkType: n.xlink,
                    xmlBase: n.xml,
                    xmlLang: n.xml,
                    xmlSpace: n.xml
                },
                DOMAttributeNames: {}
            };
        Object.keys(r).forEach(function(e) {
            o.Properties[e] = 0, r[e] && (o.DOMAttributeNames[e] = r[e])
        }), e.exports = o
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            if ("selectionStart" in e && l.hasSelectionCapabilities(e)) return {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            if (window.getSelection) {
                var t = window.getSelection();
                return {
                    anchorNode: t.anchorNode,
                    anchorOffset: t.anchorOffset,
                    focusNode: t.focusNode,
                    focusOffset: t.focusOffset
                }
            }
            if (document.selection) {
                var n = document.selection.createRange();
                return {
                    parentElement: n.parentElement(),
                    text: n.text,
                    top: n.boundingTop,
                    left: n.boundingLeft
                }
            }
        }

        function o(e, t) {
            if (g || null == m || m !== u()) return null;
            var n = r(m);
            if (!y || !h(y, n)) {
                y = n;
                var o = c.getPooled(f.select, v, e, t);
                return o.type = "select", o.target = m, i.accumulateTwoPhaseDispatches(o), o
            }
            return null
        }
        var i = n(43),
            a = n(50),
            s = n(36),
            l = n(143),
            c = n(55),
            u = n(149),
            p = n(68),
            h = n(119),
            d = a.canUseDOM && "documentMode" in document && document.documentMode <= 11,
            f = {
                select: {
                    phasedRegistrationNames: {
                        bubbled: "onSelect",
                        captured: "onSelectCapture"
                    },
                    dependencies: ["topBlur", "topContextMenu", "topFocus", "topKeyDown", "topKeyUp", "topMouseDown", "topMouseUp", "topSelectionChange"]
                }
            },
            m = null,
            v = null,
            y = null,
            g = !1,
            b = !1,
            T = {
                eventTypes: f,
                extractEvents: function(e, t, n, r) {
                    if (!b) return null;
                    var i = t ? s.getNodeFromInstance(t) : window;
                    switch (e) {
                        case "topFocus":
                            (p(i) || "true" === i.contentEditable) && (m = i, v = t, y = null);
                            break;
                        case "topBlur":
                            m = null, v = null, y = null;
                            break;
                        case "topMouseDown":
                            g = !0;
                            break;
                        case "topContextMenu":
                        case "topMouseUp":
                            return g = !1, o(n, r);
                        case "topSelectionChange":
                            if (d) break;
                        case "topKeyDown":
                        case "topKeyUp":
                            return o(n, r)
                    }
                    return null
                },
                didPutListener: function(e, t, n) {
                    "onSelect" === t && (b = !0)
                }
            };
        e.exports = T
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return "." + e._rootNodeID
        }

        function o(e) {
            return "button" === e || "input" === e || "select" === e || "textarea" === e
        }
        var i = n(37),
            a = n(139),
            s = n(43),
            l = n(36),
            c = n(153),
            u = n(154),
            p = n(55),
            h = n(155),
            d = n(156),
            f = n(71),
            m = n(159),
            v = n(160),
            y = n(161),
            g = n(72),
            b = n(162),
            T = n(14),
            S = n(157),
            E = (n(10), {}),
            A = {};
        ["abort", "animationEnd", "animationIteration", "animationStart", "blur", "canPlay", "canPlayThrough", "click", "contextMenu", "copy", "cut", "doubleClick", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "progress", "rateChange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchMove", "touchStart", "transitionEnd", "volumeChange", "waiting", "wheel"].forEach(function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = "on" + t,
                r = "top" + t,
                o = {
                    phasedRegistrationNames: {
                        bubbled: n,
                        captured: n + "Capture"
                    },
                    dependencies: [r]
                };
            E[e] = o, A[r] = o
        });
        var C = {},
            _ = {
                eventTypes: E,
                extractEvents: function(e, t, n, r) {
                    var o = A[e];
                    if (!o) return null;
                    var a;
                    switch (e) {
                        case "topAbort":
                        case "topCanPlay":
                        case "topCanPlayThrough":
                        case "topDurationChange":
                        case "topEmptied":
                        case "topEncrypted":
                        case "topEnded":
                        case "topError":
                        case "topInput":
                        case "topInvalid":
                        case "topLoad":
                        case "topLoadedData":
                        case "topLoadedMetadata":
                        case "topLoadStart":
                        case "topPause":
                        case "topPlay":
                        case "topPlaying":
                        case "topProgress":
                        case "topRateChange":
                        case "topReset":
                        case "topSeeked":
                        case "topSeeking":
                        case "topStalled":
                        case "topSubmit":
                        case "topSuspend":
                        case "topTimeUpdate":
                        case "topVolumeChange":
                        case "topWaiting":
                            a = p;
                            break;
                        case "topKeyPress":
                            if (0 === S(n)) return null;
                        case "topKeyDown":
                        case "topKeyUp":
                            a = d;
                            break;
                        case "topBlur":
                        case "topFocus":
                            a = h;
                            break;
                        case "topClick":
                            if (2 === n.button) return null;
                        case "topDoubleClick":
                        case "topMouseDown":
                        case "topMouseMove":
                        case "topMouseUp":
                        case "topMouseOut":
                        case "topMouseOver":
                        case "topContextMenu":
                            a = f;
                            break;
                        case "topDrag":
                        case "topDragEnd":
                        case "topDragEnter":
                        case "topDragExit":
                        case "topDragLeave":
                        case "topDragOver":
                        case "topDragStart":
                        case "topDrop":
                            a = m;
                            break;
                        case "topTouchCancel":
                        case "topTouchEnd":
                        case "topTouchMove":
                        case "topTouchStart":
                            a = v;
                            break;
                        case "topAnimationEnd":
                        case "topAnimationIteration":
                        case "topAnimationStart":
                            a = c;
                            break;
                        case "topTransitionEnd":
                            a = y;
                            break;
                        case "topScroll":
                            a = g;
                            break;
                        case "topWheel":
                            a = b;
                            break;
                        case "topCopy":
                        case "topCut":
                        case "topPaste":
                            a = u
                    }
                    a ? void 0 : i("86", e);
                    var l = a.getPooled(o, t, n, r);
                    return s.accumulateTwoPhaseDispatches(l), l
                },
                didPutListener: function(e, t, n) {
                    if ("onClick" === t && !o(e._tag)) {
                        var i = r(e),
                            s = l.getNodeFromInstance(e);
                        C[i] || (C[i] = a.listen(s, "click", T))
                    }
                },
                willDeleteListener: function(e, t) {
                    if ("onClick" === t && !o(e._tag)) {
                        var n = r(e);
                        C[n].remove(), delete C[n]
                    }
                }
            };
        e.exports = _
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return o.call(this, e, t, n, r)
        }
        var o = n(55),
            i = {
                animationName: null,
                elapsedTime: null,
                pseudoElement: null
            };
        o.augmentClass(r, i), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return o.call(this, e, t, n, r)
        }
        var o = n(55),
            i = {
                clipboardData: function(e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData
                }
            };
        o.augmentClass(r, i), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return o.call(this, e, t, n, r)
        }
        var o = n(72),
            i = {
                relatedTarget: null
            };
        o.augmentClass(r, i), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return o.call(this, e, t, n, r)
        }
        var o = n(72),
            i = n(157),
            a = n(158),
            s = n(74),
            l = {
                key: a,
                location: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                repeat: null,
                locale: null,
                getModifierState: s,
                charCode: function(e) {
                    return "keypress" === e.type ? i(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? i(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            };
        o.augmentClass(r, l), e.exports = r
    },
    function(e, t) {
        "use strict";

        function n(e) {
            var t, n = e.keyCode;
            return "charCode" in e ? (t = e.charCode, 0 === t && 13 === n && (t = 13)) : t = n, t >= 32 || 13 === t ? t : 0
        }
        e.exports = n
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            if (e.key) {
                var t = i[e.key] || e.key;
                if ("Unidentified" !== t) return t
            }
            if ("keypress" === e.type) {
                var n = o(e);
                return 13 === n ? "Enter" : String.fromCharCode(n)
            }
            return "keydown" === e.type || "keyup" === e.type ? a[e.keyCode] || "Unidentified" : ""
        }
        var o = n(157),
            i = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            },
            a = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            };
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return o.call(this, e, t, n, r)
        }
        var o = n(71),
            i = {
                dataTransfer: null
            };
        o.augmentClass(r, i), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return o.call(this, e, t, n, r)
        }
        var o = n(72),
            i = n(74),
            a = {
                touches: null,
                targetTouches: null,
                changedTouches: null,
                altKey: null,
                metaKey: null,
                ctrlKey: null,
                shiftKey: null,
                getModifierState: i
            };
        o.augmentClass(r, a), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return o.call(this, e, t, n, r)
        }
        var o = n(55),
            i = {
                propertyName: null,
                elapsedTime: null,
                pseudoElement: null
            };
        o.augmentClass(r, i), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return o.call(this, e, t, n, r)
        }
        var o = n(71),
            i = {
                deltaX: function(e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                },
                deltaZ: null,
                deltaMode: null
            };
        o.augmentClass(r, i), e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++)
                if (e.charAt(r) !== t.charAt(r)) return r;
            return e.length === t.length ? -1 : n
        }

        function o(e) {
            return e ? e.nodeType === R ? e.documentElement : e.firstChild : null
        }

        function i(e) {
            return e.getAttribute && e.getAttribute(I) || ""
        }

        function a(e, t, n, r, o) {
            var i;
            if (S.logTopLevelRenders) {
                var a = e._currentElement.props.child,
                    s = a.type;
                i = "React mount: " + ("string" == typeof s ? s : s.displayName || s.name), console.time(i)
            }
            var l = C.mountComponent(e, n, null, b(e, t), o, 0);
            i && console.timeEnd(i), e._renderedComponent._topLevelWrapper = e, H._mountImageIntoNode(l, t, e, r, n)
        }

        function s(e, t, n, r) {
            var o = P.ReactReconcileTransaction.getPooled(!n && T.useCreateElement);
            o.perform(a, null, e, t, o, n, r), P.ReactReconcileTransaction.release(o)
        }

        function l(e, t, n) {
            for (C.unmountComponent(e, n), t.nodeType === R && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild)
        }

        function c(e) {
            var t = o(e);
            if (t) {
                var n = g.getInstanceFromNode(t);
                return !(!n || !n._hostParent)
            }
        }

        function u(e) {
            return !(!e || e.nodeType !== O && e.nodeType !== R && e.nodeType !== D)
        }

        function p(e) {
            var t = o(e),
                n = t && g.getInstanceFromNode(t);
            return n && !n._hostParent ? n : null
        }

        function h(e) {
            var t = p(e);
            return t ? t._hostContainerInfo._topLevelWrapper : null
        }
        var d = n(37),
            f = n(78),
            m = n(38),
            v = n(5),
            y = n(102),
            g = (n(12), n(36)),
            b = n(164),
            T = n(165),
            S = n(60),
            E = n(113),
            A = (n(64), n(166)),
            C = n(61),
            _ = n(132),
            P = n(58),
            w = n(22),
            M = n(116),
            k = (n(10), n(80)),
            x = n(120),
            I = (n(13), m.ID_ATTRIBUTE_NAME),
            N = m.ROOT_ATTRIBUTE_NAME,
            O = 1,
            R = 9,
            D = 11,
            B = {},
            G = 1,
            L = function() {
                this.rootID = G++
            };
        L.prototype.isReactComponent = {}, L.prototype.render = function() {
            return this.props.child
        }, L.isReactTopLevelWrapper = !0;
        var H = {
            TopLevelWrapper: L,
            _instancesByReactRootID: B,
            scrollMonitor: function(e, t) {
                t()
            },
            _updateRootComponent: function(e, t, n, r, o) {
                return H.scrollMonitor(r, function() {
                    _.enqueueElementInternal(e, t, n), o && _.enqueueCallbackInternal(e, o)
                }), e
            },
            _renderNewRootComponent: function(e, t, n, r) {
                u(t) ? void 0 : d("37"), y.ensureScrollValueMonitoring();
                var o = M(e, !1);
                P.batchedUpdates(s, o, t, n, r);
                var i = o._instance.rootID;
                return B[i] = o, o
            },
            renderSubtreeIntoContainer: function(e, t, n, r) {
                return null != e && E.has(e) ? void 0 : d("38"), H._renderSubtreeIntoContainer(e, t, n, r)
            },
            _renderSubtreeIntoContainer: function(e, t, n, r) {
                _.validateCallback(r, "ReactDOM.render"), v.isValidElement(t) ? void 0 : d("39", "string" == typeof t ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />." : "function" == typeof t ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />." : null != t && void 0 !== t.props ? " This may be caused by unintentionally loading two independent copies of React." : "");
                var a, s = v.createElement(L, {
                    child: t
                });
                if (e) {
                    var l = E.get(e);
                    a = l._processChildContext(l._context)
                } else a = w;
                var u = h(n);
                if (u) {
                    var p = u._currentElement,
                        f = p.props.child;
                    if (x(f, t)) {
                        var m = u._renderedComponent.getPublicInstance(),
                            y = r && function() {
                                r.call(m)
                            };
                        return H._updateRootComponent(u, s, a, n, y), m
                    }
                    H.unmountComponentAtNode(n)
                }
                var g = o(n),
                    b = g && !!i(g),
                    T = c(n),
                    S = b && !u && !T,
                    A = H._renderNewRootComponent(s, n, S, a)._renderedComponent.getPublicInstance();
                return r && r.call(A), A
            },
            render: function(e, t, n) {
                return H._renderSubtreeIntoContainer(null, e, t, n)
            },
            unmountComponentAtNode: function(e) {
                u(e) ? void 0 : d("40");
                var t = h(e);
                if (!t) {
                    c(e), 1 === e.nodeType && e.hasAttribute(N);
                    return !1
                }
                return delete B[t._instance.rootID], P.batchedUpdates(l, t, e, !1), !0
            },
            _mountImageIntoNode: function(e, t, n, i, a) {
                if (u(t) ? void 0 : d("41"), i) {
                    var s = o(t);
                    if (A.canReuseMarkup(e, s)) return void g.precacheNode(n, s);
                    var l = s.getAttribute(A.CHECKSUM_ATTR_NAME);
                    s.removeAttribute(A.CHECKSUM_ATTR_NAME);
                    var c = s.outerHTML;
                    s.setAttribute(A.CHECKSUM_ATTR_NAME, l);
                    var p = e,
                        h = r(p, c),
                        m = " (client) " + p.substring(h - 20, h + 20) + "\n (server) " + c.substring(h - 20, h + 20);
                    t.nodeType === R ? d("42", m) : void 0
                }
                if (t.nodeType === R ? d("43") : void 0, a.useCreateElement) {
                    for (; t.lastChild;) t.removeChild(t.lastChild);
                    f.insertTreeBefore(t, e, null)
                } else k(t, e), g.precacheNode(n, t.firstChild)
            }
        };
        e.exports = H
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = {
                _topLevelWrapper: e,
                _idCounter: 1,
                _ownerDocument: t ? t.nodeType === o ? t : t.ownerDocument : null,
                _node: t,
                _tag: t ? t.nodeName.toLowerCase() : null,
                _namespaceURI: t ? t.namespaceURI : null
            };
            return n
        }
        var o = (n(133), 9);
        e.exports = r
    },
    function(e, t) {
        "use strict";
        var n = {
            useCreateElement: !0,
            useFiber: !1
        };
        e.exports = n
    },
    function(e, t, n) {
        "use strict";
        var r = n(167),
            o = /\/?>/,
            i = /^<\!\-\-/,
            a = {
                CHECKSUM_ATTR_NAME: "data-react-checksum",
                addChecksumToMarkup: function(e) {
                    var t = r(e);
                    return i.test(e) ? e : e.replace(o, " " + a.CHECKSUM_ATTR_NAME + '="' + t + '"$&')
                },
                canReuseMarkup: function(e, t) {
                    var n = t.getAttribute(a.CHECKSUM_ATTR_NAME);
                    n = n && parseInt(n, 10);
                    var o = r(e);
                    return o === n
                }
            };
        e.exports = a
    },
    function(e, t) {
        "use strict";

        function n(e) {
            for (var t = 1, n = 0, o = 0, i = e.length, a = i & -4; o < a;) {
                for (var s = Math.min(o + 4096, a); o < s; o += 4) n += (t += e.charCodeAt(o)) + (t += e.charCodeAt(o + 1)) + (t += e.charCodeAt(o + 2)) + (t += e.charCodeAt(o + 3));
                t %= r, n %= r
            }
            for (; o < i; o++) n += t += e.charCodeAt(o);
            return t %= r, n %= r, t | n << 16
        }
        var r = 65521;
        e.exports = n
    },
    29,
    function(e, t, n) {
        "use strict";

        function r(e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = a.get(e);
            return t ? (t = s(t), t ? i.getNodeFromInstance(t) : null) : void("function" == typeof e.render ? o("44") : o("45", Object.keys(e)))
        }
        var o = n(37),
            i = (n(12), n(36)),
            a = n(113),
            s = n(170);
        n(10), n(13);
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            for (var t;
                (t = e._renderedNodeType) === o.COMPOSITE;) e = e._renderedComponent;
            return t === o.HOST ? e._renderedComponent : t === o.EMPTY ? null : void 0
        }
        var o = n(118);
        e.exports = r
    },
    function(e, t, n) {
        "use strict";
        var r = n(163);
        e.exports = r.renderSubtreeIntoContainer
    },
    function(e, t, n) {
        "use strict";
        var r = n(173),
            o = {
                getChildMapping: function(e, t) {
                    return e ? r(e) : e
                },
                mergeChildMappings: function(e, t) {
                    function n(n) {
                        return t.hasOwnProperty(n) ? t[n] : e[n]
                    }
                    e = e || {}, t = t || {};
                    var r = {},
                        o = [];
                    for (var i in e) t.hasOwnProperty(i) ? o.length && (r[i] = o, o = []) : o.push(i);
                    var a, s = {};
                    for (var l in t) {
                        if (r.hasOwnProperty(l))
                            for (a = 0; a < r[l].length; a++) {
                                var c = r[l][a];
                                s[r[l][a]] = n(c)
                            }
                        s[l] = n(l)
                    }
                    for (a = 0; a < o.length; a++) s[o[a]] = n(o[a]);
                    return s
                }
            };
        e.exports = o
    },
    function(e, t, n) {
        (function(t) {
            "use strict";

            function r(e, t, n, r) {
                if (e && "object" == typeof e) {
                    var o = e,
                        i = void 0 === o[n];
                    i && null != t && (o[n] = t)
                }
            }

            function o(e, t) {
                if (null == e) return e;
                var n = {};
                return i(e, r, n), n
            }
            var i = (n(19), n(17));
            n(13);
            e.exports = o
        }).call(t, n(115))
    },
    function(e, t, n) {
        "use strict";
        var r = n(5),
            o = n(34),
            i = n(175),
            a = n(176),
            s = n(30),
            l = 17,
            c = r.createClass({
                displayName: "ReactCSSTransitionGroupChild",
                propTypes: {
                    name: r.PropTypes.oneOfType([r.PropTypes.string, r.PropTypes.shape({
                        enter: r.PropTypes.string,
                        leave: r.PropTypes.string,
                        active: r.PropTypes.string
                    }), r.PropTypes.shape({
                        enter: r.PropTypes.string,
                        enterActive: r.PropTypes.string,
                        leave: r.PropTypes.string,
                        leaveActive: r.PropTypes.string,
                        appear: r.PropTypes.string,
                        appearActive: r.PropTypes.string
                    })]).isRequired,
                    appear: r.PropTypes.bool,
                    enter: r.PropTypes.bool,
                    leave: r.PropTypes.bool,
                    appearTimeout: r.PropTypes.number,
                    enterTimeout: r.PropTypes.number,
                    leaveTimeout: r.PropTypes.number
                },
                transition: function(e, t, n) {
                    var r = o.getReactDOM().findDOMNode(this);
                    if (!r) return void(t && t());
                    var s = this.props.name[e] || this.props.name + "-" + e,
                        l = this.props.name[e + "Active"] || s + "-active",
                        c = null,
                        u = function(e) {
                            e && e.target !== r || (clearTimeout(c), i.removeClass(r, s), i.removeClass(r, l), a.removeEndEventListener(r, u), t && t())
                        };
                    i.addClass(r, s), this.queueClassAndNode(l, r), n ? (c = setTimeout(u, n), this.transitionTimeouts.push(c)) : a.addEndEventListener(r, u)
                },
                queueClassAndNode: function(e, t) {
                    this.classNameAndNodeQueue.push({
                        className: e,
                        node: t
                    }), this.timeout || (this.timeout = setTimeout(this.flushClassNameAndNodeQueue, l))
                },
                flushClassNameAndNodeQueue: function() {
                    this.isMounted() && this.classNameAndNodeQueue.forEach(function(e) {
                        i.addClass(e.node, e.className)
                    }), this.classNameAndNodeQueue.length = 0, this.timeout = null
                },
                componentWillMount: function() {
                    this.classNameAndNodeQueue = [], this.transitionTimeouts = []
                },
                componentWillUnmount: function() {
                    this.timeout && clearTimeout(this.timeout), this.transitionTimeouts.forEach(function(e) {
                        clearTimeout(e)
                    }), this.classNameAndNodeQueue.length = 0
                },
                componentWillAppear: function(e) {
                    this.props.appear ? this.transition("appear", e, this.props.appearTimeout) : e()
                },
                componentWillEnter: function(e) {
                    this.props.enter ? this.transition("enter", e, this.props.enterTimeout) : e()
                },
                componentWillLeave: function(e) {
                    this.props.leave ? this.transition("leave", e, this.props.leaveTimeout) : e()
                },
                render: function() {
                    return s(this.props.children)
                }
            });
        e.exports = c
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n = e; n.parentNode;) n = n.parentNode;
            var r = n.querySelectorAll(t);
            return Array.prototype.indexOf.call(r, e) !== -1
        }
        var o = n(10),
            i = {
                addClass: function(e, t) {
                    return /\s/.test(t) ? o(!1) : void 0, t && (e.classList ? e.classList.add(t) : i.hasClass(e, t) || (e.className = e.className + " " + t)), e
                },
                removeClass: function(e, t) {
                    return /\s/.test(t) ? o(!1) : void 0, t && (e.classList ? e.classList.remove(t) : i.hasClass(e, t) && (e.className = e.className.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, ""))), e
                },
                conditionClass: function(e, t, n) {
                    return (n ? i.addClass : i.removeClass)(e, t)
                },
                hasClass: function(e, t) {
                    return /\s/.test(t) ? o(!1) : void 0, e.classList ? !!t && e.classList.contains(t) : (" " + e.className + " ").indexOf(" " + t + " ") > -1
                },
                matchesSelector: function(e, t) {
                    var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || function(t) {
                        return r(e, t)
                    };
                    return n.call(e, t)
                }
            };
        e.exports = i
    },
    function(e, t, n) {
        "use strict";

        function r() {
            var e = s("animationend"),
                t = s("transitionend");
            e && l.push(e), t && l.push(t)
        }

        function o(e, t, n) {
            e.addEventListener(t, n, !1)
        }

        function i(e, t, n) {
            e.removeEventListener(t, n, !1)
        }
        var a = n(50),
            s = n(104),
            l = [];
        a.canUseDOM && r();
        var c = {
            addEndEventListener: function(e, t) {
                return 0 === l.length ? void window.setTimeout(t, 0) : void l.forEach(function(n) {
                    o(e, n, t)
                })
            },
            removeEndEventListener: function(e, t) {
                0 !== l.length && l.forEach(function(n) {
                    i(e, n, t)
                })
            }
        };
        e.exports = c
    },
    function(e, t) {
        "use strict";
        var n = "main_menu",
            r = "queue",
            o = "game",
            i = "invalid_replay";
        e.exports = {
            PAGE_MAIN_MENU: n,
            PAGE_QUEUE: r,
            PAGE_GAME: o,
            PAGE_INVALID_REPLAY: i
        }
    },
    function(e, t, n) {
        "use strict";
        var r = "__2v2__";
        e.exports = {
            isCustomGame: function(e) {
                return e && "1v1" !== e && "2v2" !== e && "main" !== e
            },
            chatRoomForCustomGame: function(e) {
                return "chat_custom_queue_" + e
            },
            randomString: function(e) {
                return (Math.random().toString(36) + "00000").slice(2, e + 2)
            },
            hasDuplicate: function(e) {
                return e && e.some(function(t, n) {
                    return e.indexOf(t) !== n
                })
            },
            chatRoomForTeam: function(e, t) {
                return e.chat_room + "_team_" + t
            },
            originalFromTeamChatRoom: function(e) {
                var t = e.indexOf("_team_");
                if (!(t < 0)) return e.substring(0, t)
            },
            idFor2v2Team: function(e, t) {
                return e < t ? e + r + t : t + r + e
            },
            userIdsFrom2v2Id: function(e) {
                var t = e.indexOf(r);
                if (!(t < 0)) return [e.substring(0, t), e.substring(t + r.length)]
            },
            accountRecoveryLink: function(e, t) {
                return {
                    NODE_ENV: "production"
                }.GIO_BASE_URL + "/?user_id=" + encodeURIComponent(e) + "&email=" + encodeURIComponent(t)
            }
        }
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(180),
            i = n(210),
            a = n(211),
            s = n(212),
            l = n(291),
            c = n(2),
            u = n(178),
            p = n(301),
            h = n(273),
            d = n(302),
            f = n(304),
            m = n(292),
            v = n(266),
            y = n(278),
            g = n(305),
            b = n(307),
            T = n(310),
            S = n(311),
            E = n(313),
            A = n(321),
            C = n(322),
            _ = r.createClass({
                displayName: "RankItem",
                render: function() {
                    return this.props.stars || this.props.rank ? r.createElement("div", {
                        className: "rank-item"
                    }, r.createElement("h3", {
                        style: {
                            margin: 0
                        }
                    }, this.props.name), r.createElement("h2", {
                        style: {
                            margin: 0
                        }
                    }, r.createElement(p, {
                        stars: Math.max(0, Math.round(10 * this.props.stars || 0) / 10)
                    })), this.props.rank ? r.createElement("p", {
                        style: {
                            margin: 0,
                            fontSize: "14px"
                        }
                    }, "Rank #", this.props.rank || 0) : null) : null
                }
            }),
            P = r.createClass({
                displayName: "MainMenu",
                getInitialState: function() {
                    return {
                        username: ""
                    }
                },
                componentDidMount: function() {
                    l.username ? (this.state.username = l.username, this.setState({
                        username: l.username
                    })) : i.findDOMNode(this.refs.username).focus();
                    var e = this;
                    setTimeout(function() {
                        h.doWhenVisible(function() {
                            y.isPrivateURL() ? this.props.joinPrivateGame.bind(this)(y.getPrivateID()) : y.isReplayURL() ? s.getReplay(y.getReplayID(), m.startReplay) : y.isTeamURL() && this.props.joinTeam.bind(this)(y.getTeamID())
                        }.bind(e))
                    }, v.getState().game.playAgainUrl ? 400 : 0)
                },
                onPlayClicked: function() {
                    return l.completed_tutorial ? s.isConnected() ? void this.setState({
                        showGameModes: !0
                    }) : void this.setState({
                        showNotConnected: !0
                    }) : void m.startLocalTutorial(this.state.username)
                },
                closeGameModes: function() {
                    this.setState({
                        showGameModes: !1
                    })
                },
                ignoreClick: function(e) {
                    e.preventDefault(), e.stopPropagation()
                },
                serverSetUsername: C(function(e) {
                    s.setUsername(e)
                }, 500),
                onUsernameChange: function(e) {
                    var t = e.target.value.substring(0, c.MAX_USERNAME_LENGTH);
                    this.setState({
                        username: t
                    }), l.username = t, this.serverSetUsername(t)
                },
                onLeaderboardClicked: function() {
                    this.setState({
                        showLeaderboard: !0,
                        showReplayList: !1,
                        showOption: !1
                    }), s.updateStarsAndRank(), s.getLeaderboard("duel"), s.getLeaderboard("ffa")
                },
                onOptionClicked: function() {
                    this.setState({
                        showLeaderboard: !1,
                        showReplayList: !1,
                        showOption: !0
                    })
                },
                hideLeaderboards: function() {
                    this.setState({
                        showLeaderboard: !1
                    })
                },
                hideOptions: function() {
                    this.setState({
                        showOption: !1
                    })
                },
                onReplayListClicked: function() {
                    this.setState({
                        showReplayList: !0,
                        showLeaderboard: !1,
                        showOption: !1
                    }), this.loadMoreReplays()
                },
                hideReplayList: function() {
                    this.setState({
                        showReplayList: !1
                    })
                },
                loadMoreReplays: function() {
                    var e = void 0,
                        t = v.getState().menu.replays;
                    t && t.length > 0 && (e = t[t.length - 1].started - .1), s.getReplayList(e)
                },
                replayRows: function() {
                    var e = v.getState().menu.replays || [];
                    return e.map(function(e, t) {
                        for (var n = [], o = 0; o < e.ranking.length; o++) {
                            var i = e.ranking[o];
                            n.push(r.createElement("span", {
                                key: "replay-list-p-" + o
                            }, i.name + " (", r.createElement(p, {
                                stars: i.stars
                            }), ")")), n.push(r.createElement("br", {
                                key: "replay-list-br-" + o
                            }))
                        }
                        return r.createElement("tr", {
                            key: "replay-row-" + e.id
                        }, r.createElement("td", null, r.createElement("a", {
                            href: "/replays/" + e.id
                        }, new Date(e.started).toLocaleString())), r.createElement("td", null, e.turns / 2 | 0), r.createElement("td", {
                            className: "replay-col-result"
                        }, n))
                    })
                },
                onPrivateClicked: function() {
                    this.props.joinPrivateGame.bind(this)(u.randomString(c.CUSTOM_GAME_URL_LENGTH))
                },
                on2v2Clicked: function() {
                    this.props.joinTeam.bind(this)(u.randomString(c.CUSTOM_GAME_URL_LENGTH))
                },
                on1v1Clicked: function() {
                    this.props.onPlay1v1.bind(this)()
                },
                onFFAClicked: function() {
                    this.props.onPlayFFA.bind(this)()
                },
                onServerChange: function(e) {
                    switch (e.target.value) {
                        case "NA":
                            window.location = "http://generals.io";
                            break;
                        case "EU":
                            window.location = "http://eu.generals.io";
                            break;
                        default:
                            return
                    }
                    this.setState({
                        showChangingServers: !0
                    })
                },
                closeNotConnected: function() {
                    this.setState({
                        showNotConnected: !1
                    })
                },
                render: function() {
                    return r.createElement("div", {
                        id: "main-menu"
                    }, r.createElement("center", null, r.createElement("div", {
                        className: "center",
                        style: {
                            width: "95%"
                        }
                    }, r.createElement("h1", {
                        className: "main-title"
                    }, "generals.io"), r.createElement("div", {
                        className: "rank-list"
                    }, r.createElement(_, {
                        name: "1v1",
                        stars: this.props.stars ? this.props.stars.duel : void 0,
                        rank: this.props.rank ? this.props.rank.duel : void 0
                    }), r.createElement(_, {
                        name: "FFA",
                        stars: this.props.stars ? this.props.stars.ffa : void 0,
                        rank: this.props.rank ? this.props.rank.ffa : void 0
                    }), r.createElement(_, {
                        name: "2v2",
                        stars: this.props.stars ? this.props.stars["2v2"] : void 0,
                        rank: this.props.rank ? this.props.rank["2v2"] : void 0
                    })), r.createElement("input", {
                        id: "main-menu-username-input",
                        style: {
                            border: "none"
                        },
                        ref: "username",
                        type: "text",
                        placeholder: "Anonymous",
                        value: this.state.username,
                        onChange: this.onUsernameChange
                    }), r.createElement("select", {
                        className: "bold",
                        style: {
                            height: "24px",
                            border: "none"
                        },
                        onChange: this.onServerChange,
                        value: "eu." === window.location.hostname.substring(0, 3) ? "EU" : "NA"
                    }, r.createElement("option", {
                        disabled: !0
                    }, "Choose a server:"), r.createElement("option", {
                        value: "NA"
                    }, "North America (New York)"), r.createElement("option", {
                        value: "EU"
                    }, "Europe (Amsterdam)")), r.createElement("br", null), r.createElement("button", {
                        className: "big",
                        onClick: this.onPlayClicked,
                        style: {
                            margin: "10px"
                        }
                    }, "PLAY"), r.createElement("p", {
                        style: {
                            marginBottom: "10px"
                        }
                    }, "Protect your general + Capture enemy generals."), r.createElement("p", null, r.createElement("span", {
                        className: "bold"
                    }, "Click and Drag"), " to move the map."), r.createElement("p", {
                        style: {
                            marginBottom: "10px"
                        }
                    }, r.createElement("span", {
                        className: "bold"
                    }, "Click"), " or use ", r.createElement("span", {
                        className: "bold"
                    }, "WASD"), " to move armies."), b ? null : r.createElement("p", {
                        style: {
                            fontSize: "14px"
                        }
                    }, "[Spacebar] to deselect, [Q] to clear moves, [E] to undo moves."), b ? null : r.createElement("p", {
                        style: {
                            fontSize: "14px"
                        }
                    }, "[9] to zoom out, [0] to zoom in."), r.createElement("p", {
                        style: {
                            fontSize: "14px"
                        }
                    }, "1 click = move 100%"), r.createElement("p", {
                        style: {
                            fontSize: "14px"
                        }
                    }, "2 clicks = move 50%")), r.createElement(d, {
                        id: "main-menu-reddit-button"
                    }), r.createElement(f, {
                        id: "main-menu-discord-button"
                    }), r.createElement("div", {
                        id: "leaderboard-button",
                        onClick: this.onLeaderboardClicked
                    }, r.createElement("img", {
                        src: "/leaderboard.png"
                    })), r.createElement("div", {
                        id: "replaylist-button",
                        onClick: this.onReplayListClicked
                    }, r.createElement("img", {
                        src: "/crown.png"
                    })), r.createElement("div", {
                        className: "option-button",
                        onClick: this.onOptionClicked,
                        style: {
                            position: "fixed",
                            left: 0,
                            bottom: 0
                        }
                    }), r.createElement("a", {
                        className: "main-menu-bottom-link",
                        style: {
                            bottom: "20px"
                        },
                        href: "mailto:generalsiogame@gmail.com"
                    }, "Contact Us"), r.createElement("a", {
                        className: "main-menu-bottom-link",
                        style: {
                            bottom: 0
                        },
                        target: "_blank",
                        href: "/versions"
                    }, "v", c.VERSION, " (Changelog)"), r.createElement("div", {
                        id: "main-menu-leaderboard-ad",
                        className: "center-horizontal",
                        style: {
                            transform: "translateX(-55%)"
                        }
                    }, r.createElement(A, {
                        id: "div-gpt-ad-1484365524244-0",
                        width: 728,
                        height: 90
                    })), this.state.showGameModes ? r.createElement("div", {
                        className: "popup-background",
                        onClick: this.closeGameModes
                    }, r.createElement("div", {
                        id: "game-modes",
                        className: "alert center",
                        onClick: this.ignoreClick
                    }, r.createElement("center", null, g.adBlockEnabled() ? r.createElement("p", {
                        style: {
                            padding: "5px 0",
                            marginBottom: "15px",
                            borderBottom: "1px solid black"
                        }
                    }, "Consider disabling ", r.createElement("span", {
                        style: {
                            color: "red"
                        }
                    }, "AdBlock"), ".", r.createElement("br", null), "Ads help keep updates coming", r.createElement("br", null), "and generals.io servers running!") : null, r.createElement("button", {
                        className: "inverted",
                        onClick: this.onFFAClicked
                    }, "FFA"), r.createElement("p", {
                        style: {
                            marginBottom: "10px"
                        }
                    }, "Up to ", c.PLAYER_CAP, " players battle until only 1 remains."), r.createElement("button", {
                        className: "inverted",
                        onClick: this.on1v1Clicked
                    }, "1v1"), r.createElement("p", {
                        style: {
                            marginBottom: "10px"
                        }
                    }, "2 players duel on a large map."), r.createElement("button", {
                        className: "inverted",
                        onClick: this.on2v2Clicked
                    }, "2v2"), r.createElement("p", {
                        style: {
                            marginBottom: "10px"
                        }
                    }, "Team up with a friend to take down 2 opponents."), r.createElement("button", {
                        className: "inverted",
                        onClick: this.onPrivateClicked
                    }, "Custom"), r.createElement("p", null, "Create a private game.")))) : null, this.state.showLeaderboard ? r.createElement(S, {
                        allLeaderboards: v.getState().menu.leaderboards,
                        data2v2Teammates: v.getState().menu.data2v2Teammates,
                        playerRanks: this.props.rank,
                        playerUsername: this.state.username,
                        getLeaderboard: s.getLeaderboard,
                        get2v2Teammates: s.get2v2Teammates,
                        hideLeaderboards: this.hideLeaderboards
                    }) : null, this.state.showOption ? r.createElement(E, {
                        hideOptions: this.hideOptions
                    }) : null, this.state.showReplayList ? r.createElement("div", {
                        className: "popup-background"
                    }, r.createElement("div", {
                        className: "popup-replays"
                    }, r.createElement("div", {
                        id: "replays",
                        className: "alert center"
                    }, r.createElement("h1", {
                        className: "center-horizontal",
                        style: {
                            textShadow: "1px 1px black"
                        }
                    }, "Replays"), r.createElement("div", {
                        id: "replays-table-container"
                    }, r.createElement("table", {
                        id: "replays-table"
                    }, r.createElement("thead", null, r.createElement("tr", null, r.createElement("th", {
                        style: {
                            width: "12em"
                        }
                    }, "Time"), r.createElement("th", null, "Turns"), r.createElement("th", null, "Result"))), r.createElement("tbody", null, this.replayRows())), v.getState().menu.replaysFinished ? null : r.createElement("button", {
                        className: "small inverted center-horizontal",
                        onClick: this.loadMoreReplays
                    }, "Load More")), r.createElement("button", {
                        className: "small inverted center-horizontal",
                        onClick: this.hideReplayList
                    }, "Exit")))) : null, this.state.showChangingServers ? r.createElement("div", {
                        className: "popup-background"
                    }, r.createElement("div", {
                        className: "alert center"
                    }, r.createElement("h2", {
                        style: {
                            color: "black",
                            textAlign: "center",
                            margin: "10px"
                        }
                    }, "Changing Servers..."))) : null, this.props.showRemovedFrom2v2 ? r.createElement("div", {
                        className: "popup-background"
                    }, r.createElement(T, {
                        title: "Removed from 2v2",
                        body: r.createElement("span", null, "Your teammate left, so you were removed from the 2v2 queue."),
                        button: "Close",
                        onClick: this.props.closeRemovedFrom2v2
                    })) : null, this.props.showNotifyServerRestart ? r.createElement("div", {
                        className: "popup-background"
                    }, r.createElement(T, {
                        title: "Server updating!",
                        body: r.createElement("span", null, "The server is restarting to include new updates to generals.io!", r.createElement("br", null), "If you were just in a game, it will be invalidated - nobody will gain or lose any stars.", r.createElement("br", null), r.createElement("br", null), "Refresh the page in a few seconds to continue playing.")
                    })) : null, this.state.showNotConnected ? r.createElement("div", {
                        className: "popup-background"
                    }, r.createElement(T, {
                        title: "Connecting...",
                        body: r.createElement("span", null, r.createElement("span", null, "We're still trying to establish a websocket connection to the server. Wait a few seconds and try again."), r.createElement("br", null), r.createElement("br", null), r.createElement("span", null, "If you still can't connect, make sure your firewall isn't blocking websockets and refresh the page. If that doesn't work, try disabling any adblockers or other extensions you have that may be interfering with the connection."), r.createElement("br", null), r.createElement("br", null), r.createElement("span", null, "If all else fails, contact us to let us know.")),
                        button: "Close",
                        onClick: this.closeNotConnected
                    })) : null))
                }
            });
        e.exports = o.connect(function(e) {
            return e.menu
        }, function(e) {
            return {
                onPlayFFA: function() {
                    s.play(), this.closeGameModes(), e(a.play())
                },
                onPlay1v1: function() {
                    s.play1v1(), this.closeGameModes(), e(a.play("1v1"))
                },
                joinTeam: function(t) {
                    s.joinTeam(t), this.closeGameModes(), e(a.joinTeam(t))
                },
                joinPrivateGame: function(t) {
                    u.isCustomGame(t) || alert('"' + t + '" is not an allowed custom game id.'), s.playPrivate(t), e(a.play(t))
                },
                closeRemovedFrom2v2: function() {
                    e(a.closeRemovedFrom2v2())
                }
            }
        })(P)
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.__esModule = !0, t.connect = t.Provider = void 0;
        var o = n(181),
            i = r(o),
            a = n(184),
            s = r(a);
        t.Provider = i.default, t.connect = s.default
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0, t.default = void 0;
        var s = n(4),
            l = n(182),
            c = r(l),
            u = n(183),
            p = (r(u), function(e) {
                function t(n, r) {
                    o(this, t);
                    var a = i(this, e.call(this, n, r));
                    return a.store = n.store, a
                }
                return a(t, e), t.prototype.getChildContext = function() {
                    return {
                        store: this.store
                    }
                }, t.prototype.render = function() {
                    return s.Children.only(this.props.children)
                }, t
            }(s.Component));
        t.default = p, p.propTypes = {
            store: c.default.isRequired,
            children: s.PropTypes.element.isRequired
        }, p.childContextTypes = {
            store: c.default.isRequired
        }
    },
    function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(4);
        t.default = r.PropTypes.shape({
            subscribe: r.PropTypes.func.isRequired,
            dispatch: r.PropTypes.func.isRequired,
            getState: r.PropTypes.func.isRequired
        })
    },
    function(e, t) {
        "use strict";

        function n(e) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(e);
            try {
                throw new Error(e)
            } catch (e) {}
        }
        t.__esModule = !0, t.default = n
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e) {
            return e.displayName || e.name || "Component"
        }

        function l(e, t) {
            try {
                return e.apply(t)
            } catch (e) {
                return w.value = e, w
            }
        }

        function c(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                c = Boolean(e),
                h = e || C,
                f = void 0;
            f = "function" == typeof t ? t : t ? (0, y.default)(t) : _;
            var v = n || P,
                g = r.pure,
                b = void 0 === g || g,
                T = r.withRef,
                E = void 0 !== T && T,
                k = b && v !== P,
                x = M++;
            return function(e) {
                function t(e, t, n) {
                    var r = v(e, t, n);
                    return r
                }
                var n = "Connect(" + s(e) + ")",
                    r = function(r) {
                        function s(e, t) {
                            o(this, s);
                            var a = i(this, r.call(this, e, t));
                            a.version = x, a.store = e.store || t.store, (0, A.default)(a.store, 'Could not find "store" in either the context or ' + ('props of "' + n + '". ') + "Either wrap the root component in a <Provider>, " + ('or explicitly pass "store" as a prop to "' + n + '".'));
                            var l = a.store.getState();
                            return a.state = {
                                storeState: l
                            }, a.clearCache(), a
                        }
                        return a(s, r), s.prototype.shouldComponentUpdate = function() {
                            return !b || this.haveOwnPropsChanged || this.hasStoreStateChanged
                        }, s.prototype.computeStateProps = function(e, t) {
                            if (!this.finalMapStateToProps) return this.configureFinalMapState(e, t);
                            var n = e.getState(),
                                r = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(n, t) : this.finalMapStateToProps(n);
                            return r
                        }, s.prototype.configureFinalMapState = function(e, t) {
                            var n = h(e.getState(), t),
                                r = "function" == typeof n;
                            return this.finalMapStateToProps = r ? n : h, this.doStatePropsDependOnOwnProps = 1 !== this.finalMapStateToProps.length, r ? this.computeStateProps(e, t) : n
                        }, s.prototype.computeDispatchProps = function(e, t) {
                            if (!this.finalMapDispatchToProps) return this.configureFinalMapDispatch(e, t);
                            var n = e.dispatch,
                                r = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(n, t) : this.finalMapDispatchToProps(n);
                            return r
                        }, s.prototype.configureFinalMapDispatch = function(e, t) {
                            var n = f(e.dispatch, t),
                                r = "function" == typeof n;
                            return this.finalMapDispatchToProps = r ? n : f, this.doDispatchPropsDependOnOwnProps = 1 !== this.finalMapDispatchToProps.length, r ? this.computeDispatchProps(e, t) : n
                        }, s.prototype.updateStatePropsIfNeeded = function() {
                            var e = this.computeStateProps(this.store, this.props);
                            return (!this.stateProps || !(0, m.default)(e, this.stateProps)) && (this.stateProps = e, !0)
                        }, s.prototype.updateDispatchPropsIfNeeded = function() {
                            var e = this.computeDispatchProps(this.store, this.props);
                            return (!this.dispatchProps || !(0, m.default)(e, this.dispatchProps)) && (this.dispatchProps = e, !0)
                        }, s.prototype.updateMergedPropsIfNeeded = function() {
                            var e = t(this.stateProps, this.dispatchProps, this.props);
                            return !(this.mergedProps && k && (0, m.default)(e, this.mergedProps)) && (this.mergedProps = e, !0)
                        }, s.prototype.isSubscribed = function() {
                            return "function" == typeof this.unsubscribe
                        }, s.prototype.trySubscribe = function() {
                            c && !this.unsubscribe && (this.unsubscribe = this.store.subscribe(this.handleChange.bind(this)), this.handleChange())
                        }, s.prototype.tryUnsubscribe = function() {
                            this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null)
                        }, s.prototype.componentDidMount = function() {
                            this.trySubscribe()
                        }, s.prototype.componentWillReceiveProps = function(e) {
                            b && (0, m.default)(e, this.props) || (this.haveOwnPropsChanged = !0)
                        }, s.prototype.componentWillUnmount = function() {
                            this.tryUnsubscribe(), this.clearCache()
                        }, s.prototype.clearCache = function() {
                            this.dispatchProps = null, this.stateProps = null, this.mergedProps = null, this.haveOwnPropsChanged = !0, this.hasStoreStateChanged = !0, this.haveStatePropsBeenPrecalculated = !1, this.statePropsPrecalculationError = null, this.renderedElement = null, this.finalMapDispatchToProps = null, this.finalMapStateToProps = null
                        }, s.prototype.handleChange = function() {
                            if (this.unsubscribe) {
                                var e = this.store.getState(),
                                    t = this.state.storeState;
                                if (!b || t !== e) {
                                    if (b && !this.doStatePropsDependOnOwnProps) {
                                        var n = l(this.updateStatePropsIfNeeded, this);
                                        if (!n) return;
                                        n === w && (this.statePropsPrecalculationError = w.value), this.haveStatePropsBeenPrecalculated = !0
                                    }
                                    this.hasStoreStateChanged = !0, this.setState({
                                        storeState: e
                                    })
                                }
                            }
                        }, s.prototype.getWrappedInstance = function() {
                            return (0, A.default)(E, "To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call."), this.refs.wrappedInstance
                        }, s.prototype.render = function() {
                            var t = this.haveOwnPropsChanged,
                                n = this.hasStoreStateChanged,
                                r = this.haveStatePropsBeenPrecalculated,
                                o = this.statePropsPrecalculationError,
                                i = this.renderedElement;
                            if (this.haveOwnPropsChanged = !1, this.hasStoreStateChanged = !1, this.haveStatePropsBeenPrecalculated = !1, this.statePropsPrecalculationError = null, o) throw o;
                            var a = !0,
                                s = !0;
                            b && i && (a = n || t && this.doStatePropsDependOnOwnProps, s = t && this.doDispatchPropsDependOnOwnProps);
                            var l = !1,
                                c = !1;
                            r ? l = !0 : a && (l = this.updateStatePropsIfNeeded()), s && (c = this.updateDispatchPropsIfNeeded());
                            var h = !0;
                            return h = !!(l || c || t) && this.updateMergedPropsIfNeeded(), !h && i ? i : (E ? this.renderedElement = (0, p.createElement)(e, u({}, this.mergedProps, {
                                ref: "wrappedInstance"
                            })) : this.renderedElement = (0, p.createElement)(e, this.mergedProps), this.renderedElement)
                        }, s
                    }(p.Component);
                return r.displayName = n, r.WrappedComponent = e, r.contextTypes = {
                    store: d.default
                }, r.propTypes = {
                    store: d.default
                }, (0, S.default)(r, e)
            }
        }
        t.__esModule = !0;
        var u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = c;
        var p = n(4),
            h = n(182),
            d = r(h),
            f = n(185),
            m = r(f),
            v = n(186),
            y = r(v),
            g = n(183),
            b = (r(g), n(189)),
            T = (r(b), n(208)),
            S = r(T),
            E = n(209),
            A = r(E),
            C = function(e) {
                return {}
            },
            _ = function(e) {
                return {
                    dispatch: e
                }
            },
            P = function(e, t, n) {
                return u({}, n, e, t)
            },
            w = {
                value: null
            },
            M = 0
    },
    function(e, t) {
        "use strict";

        function n(e, t) {
            if (e === t) return !0;
            var n = Object.keys(e),
                r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (var o = Object.prototype.hasOwnProperty, i = 0; i < n.length; i++)
                if (!o.call(t, n[i]) || e[n[i]] !== t[n[i]]) return !1;
            return !0
        }
        t.__esModule = !0, t.default = n
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return function(t) {
                return (0, o.bindActionCreators)(e, t)
            }
        }
        t.__esModule = !0, t.default = r;
        var o = n(187)
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
        var o = n(188),
            i = r(o),
            a = n(203),
            s = r(a),
            l = n(205),
            c = r(l),
            u = n(206),
            p = r(u),
            h = n(207),
            d = r(h),
            f = n(204);
        r(f);
        t.createStore = i.default, t.combineReducers = s.default, t.bindActionCreators = c.default, t.applyMiddleware = p.default, t.compose = d.default
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t, n) {
            function r() {
                y === v && (y = v.slice())
            }

            function i() {
                return m
            }

            function s(e) {
                if ("function" != typeof e) throw new Error("Expected listener to be a function.");
                var t = !0;
                return r(), y.push(e),
                    function() {
                        if (t) {
                            t = !1, r();
                            var n = y.indexOf(e);
                            y.splice(n, 1)
                        }
                    }
            }

            function u(e) {
                if (!(0, a.default)(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if ("undefined" == typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (g) throw new Error("Reducers may not dispatch actions.");
                try {
                    g = !0, m = f(m, e)
                } finally {
                    g = !1
                }
                for (var t = v = y, n = 0; n < t.length; n++) t[n]();
                return e
            }

            function p(e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                f = e, u({
                    type: c.INIT
                })
            }

            function h() {
                var e, t = s;
                return e = {
                    subscribe: function(e) {
                        function n() {
                            e.next && e.next(i())
                        }
                        if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");
                        n();
                        var r = t(n);
                        return {
                            unsubscribe: r
                        }
                    }
                }, e[l.default] = function() {
                    return this
                }, e
            }
            var d;
            if ("function" == typeof t && "undefined" == typeof n && (n = t, t = void 0), "undefined" != typeof n) {
                if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
                return n(o)(e, t)
            }
            if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
            var f = e,
                m = t,
                v = [],
                y = v,
                g = !1;
            return u({
                type: c.INIT
            }), d = {
                dispatch: u,
                subscribe: s,
                getState: i,
                replaceReducer: p
            }, d[l.default] = h, d
        }
        t.__esModule = !0, t.ActionTypes = void 0, t.default = o;
        var i = n(189),
            a = r(i),
            s = n(199),
            l = r(s),
            c = t.ActionTypes = {
                INIT: "@@redux/INIT"
            }
    },
    function(e, t, n) {
        function r(e) {
            if (!a(e) || o(e) != s) return !1;
            var t = i(e);
            if (null === t) return !0;
            var n = p.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && u.call(n) == h
        }
        var o = n(190),
            i = n(196),
            a = n(198),
            s = "[object Object]",
            l = Function.prototype,
            c = Object.prototype,
            u = l.toString,
            p = c.hasOwnProperty,
            h = u.call(Object);
        e.exports = r
    },
    function(e, t, n) {
        function r(e) {
            return null == e ? void 0 === e ? l : s : (e = Object(e), c && c in e ? i(e) : a(e))
        }
        var o = n(191),
            i = n(194),
            a = n(195),
            s = "[object Null]",
            l = "[object Undefined]",
            c = o ? o.toStringTag : void 0;
        e.exports = r
    },
    function(e, t, n) {
        var r = n(192),
            o = r.Symbol;
        e.exports = o
    },
    function(e, t, n) {
        var r = n(193),
            o = "object" == typeof self && self && self.Object === Object && self,
            i = r || o || Function("return this")();
        e.exports = i
    },
    function(e, t) {
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(t, function() {
            return this
        }())
    },
    function(e, t, n) {
        function r(e) {
            var t = a.call(e, l),
                n = e[l];
            try {
                e[l] = void 0;
                var r = !0
            } catch (e) {}
            var o = s.call(e);
            return r && (t ? e[l] = n : delete e[l]), o
        }
        var o = n(191),
            i = Object.prototype,
            a = i.hasOwnProperty,
            s = i.toString,
            l = o ? o.toStringTag : void 0;
        e.exports = r
    },
    function(e, t) {
        function n(e) {
            return o.call(e)
        }
        var r = Object.prototype,
            o = r.toString;
        e.exports = n
    },
    function(e, t, n) {
        var r = n(197),
            o = r(Object.getPrototypeOf, Object);
        e.exports = o
    },
    function(e, t) {
        function n(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
        e.exports = n
    },
    function(e, t) {
        function n(e) {
            return null != e && "object" == typeof e
        }
        e.exports = n
    },
    function(e, t, n) {
        e.exports = n(200)
    },
    function(e, t, n) {
        (function(e, r) {
            "use strict";

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, a = n(202),
                s = o(a);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof e ? e : r;
            var l = (0, s.default)(i);
            t.default = l
        }).call(t, function() {
            return this
        }(), n(201)(e))
    },
    function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
        }
    },
    function(e, t) {
        "use strict";

        function n(e) {
            var t, n = e.Symbol;
            return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            var n = t && t.type,
                r = n && '"' + n.toString() + '"' || "an action";
            return "Given action " + r + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function i(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t],
                    r = n(void 0, {
                        type: s.ActionTypes.INIT
                    });
                if ("undefined" == typeof r) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if ("undefined" == typeof n(void 0, {
                        type: o
                    })) throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + s.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function a(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var a = t[r];
                "function" == typeof e[a] && (n[a] = e[a])
            }
            var s, l = Object.keys(n);
            try {
                i(n)
            } catch (e) {
                s = e
            }
            return function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = arguments[1];
                if (s) throw s;
                for (var r = !1, i = {}, a = 0; a < l.length; a++) {
                    var c = l[a],
                        u = n[c],
                        p = e[c],
                        h = u(p, t);
                    if ("undefined" == typeof h) {
                        var d = o(c, t);
                        throw new Error(d)
                    }
                    i[c] = h, r = r || h !== p
                }
                return r ? i : e
            }
        }
        t.__esModule = !0, t.default = a;
        var s = n(188),
            l = n(189),
            c = (r(l), n(204));
        r(c)
    },
    function(e, t) {
        "use strict";

        function n(e) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(e);
            try {
                throw new Error(e)
            } catch (e) {}
        }
        t.__esModule = !0, t.default = n
    },
    function(e, t) {
        "use strict";

        function n(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function r(e, t) {
            if ("function" == typeof e) return n(e, t);
            if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), o = {}, i = 0; i < r.length; i++) {
                var a = r[i],
                    s = e[a];
                "function" == typeof s && (o[a] = n(s, t))
            }
            return o
        }
        t.__esModule = !0, t.default = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function(e) {
                return function(n, r, o) {
                    var a = e(n, r, o),
                        l = a.dispatch,
                        c = [],
                        u = {
                            getState: a.getState,
                            dispatch: function(e) {
                                return l(e)
                            }
                        };
                    return c = t.map(function(e) {
                        return e(u)
                    }), l = s.default.apply(void 0, c)(a.dispatch), i({}, a, {
                        dispatch: l
                    })
                }
            }
        }
        t.__esModule = !0;
        var i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = o;
        var a = n(207),
            s = r(a)
    },
    function(e, t) {
        "use strict";

        function n() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (0 === t.length) return function(e) {
                return e
            };
            if (1 === t.length) return t[0];
            var r = t[t.length - 1],
                o = t.slice(0, -1);
            return function() {
                return o.reduceRight(function(e, t) {
                    return t(e)
                }, r.apply(void 0, arguments))
            }
        }
        t.__esModule = !0, t.default = n
    },
    function(e, t) {
        "use strict";
        var n = {
                childContextTypes: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            },
            r = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                arguments: !0,
                arity: !0
            },
            o = "function" == typeof Object.getOwnPropertySymbols;
        e.exports = function(e, t, i) {
            if ("string" != typeof t) {
                var a = Object.getOwnPropertyNames(t);
                o && (a = a.concat(Object.getOwnPropertySymbols(t)));
                for (var s = 0; s < a.length; ++s)
                    if (!(n[a[s]] || r[a[s]] || i && i[a[s]])) try {
                        e[a[s]] = t[a[s]]
                    } catch (e) {}
            }
            return e
        }
    },
    function(e, t, n) {
        "use strict";
        var r = function(e, t, n, r, o, i, a, s) {
            if (!e) {
                var l;
                if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var c = [n, r, o, i, a, s],
                        u = 0;
                    l = new Error(t.replace(/%s/g, function() {
                        return c[u++]
                    })), l.name = "Invariant Violation"
                }
                throw l.framesToPop = 1, l
            }
        };
        e.exports = r
    },
    function(e, t, n) {
        "use strict";
        e.exports = n(35)
    },
    function(e, t) {
        "use strict";

        function n(e) {
            return {
                type: p,
                queue_id: e
            }
        }

        function r(e) {
            return {
                type: h,
                stars: e
            }
        }

        function o(e) {
            return {
                type: d,
                rank: e
            }
        }

        function i(e) {
            return {
                type: f,
                data: e
            }
        }

        function a(e) {
            return {
                type: m,
                team_id: e
            }
        }

        function s(e) {
            return {
                type: v,
                data: e
            }
        }

        function l(e) {
            return {
                type: y,
                data: e
            }
        }

        function c() {
            return {
                type: g
            }
        }

        function u() {
            return {
                type: b
            }
        }
        var p = "MainMenu_play",
            h = "MainMenu_stars",
            d = "MainMenu_rank",
            f = "MainMenu_replaylist",
            m = "MainMenu_joinTeam",
            v = "MainMenu_leaderboard",
            y = "MainMenu_2v2teammates",
            g = "MainMenu_closeRemovedFrom2v2",
            b = "MainMenu_notifyServerRestart";
        e.exports = {
            ACTION_PLAY: p,
            ACTION_STARS: h,
            ACTION_RANK: d,
            ACTION_REPLAYLIST: f,
            ACTION_JOIN_TEAM: m,
            ACTION_LEADERBOARD: v,
            ACTION_SET_2V2_TEAMMATES: y,
            ACTION_CLOSE_REMOVED_FROM_2V2: g,
            ACTION_NOTIFY_SERVER_RESTART: b,
            play: n,
            stars: r,
            rank: o,
            receiveReplayList: i,
            joinTeam: a,
            leaderboard: s,
            set2v2Teammates: l,
            closeRemovedFrom2v2: c,
            notifyServerRestart: u
        }
    },
    function(e, t, n) {
        "use strict";

        function r() {
            return q.connected
        }

        function o() {
            q.emit("stars_and_rank", F)
        }

        function i(e) {
            q.emit("set_username", F, e, H.NOT_BOT_KEY)
        }

        function a() {
            q.emit("play", F, H.NOT_BOT_KEY)
        }

        function s() {
            q.emit("join_1v1", F, H.NOT_BOT_KEY)
        }

        function l(e) {
            q.emit("join_private", e, F, H.NOT_BOT_KEY)
        }

        function c(e, t) {
            q.emit("set_custom_team", e, t)
        }

        function u(e, t, n, r) {
            M.getState().game.isLocalGame ? B.handleAttack(e, t, n, r) : q.emit("attack", e, t, n, r)
        }

        function p(e) {
            q.emit("ping_tile", e), M.dispatch(x.cleanPings(e)), M.dispatch(x.pingTile(e))
        }

        function h() {
            q.emit("cancel", M.getState().queue.queue_id)
        }

        function d(e) {
            q.emit("set_force_start", M.getState().queue.queue_id, e)
        }

        function f(e, t, n) {
            q.emit("chat_message", e, t, n)
        }

        function m(e) {
            q.emit("leaderboard", e)
        }

        function v() {
            q.emit("get_2v2_teammates", F)
        }

        function y() {
            q.emit("leave_game")
        }

        function g() {
            M.getState().game.isLocalGame ? B.handleUndoMove() : q.emit("undo_move")
        }

        function b() {
            M.getState().game.isLocalGame ? B.handleClearMoves() : q.emit("clear_moves")
        }

        function T(e, t) {
            var n = new XMLHttpRequest;
            n.open("GET", "/" + e + ".gior"), n.responseType = "arraybuffer", n.onload = function() {
                t(n.response ? new Uint8Array(n.response) : null)
            }, n.send()
        }

        function S(e) {
            q.emit("replay_list", {
                user_id: F,
                max_time: e
            })
        }

        function E(e) {
            q.emit("join_team", e, F, H.NOT_BOT_KEY)
        }

        function A(e) {
            q.emit("leave_team", e)
        }

        function C(e, t) {
            q.emit("link_email", F, e, t)
        }

        function _(e, t) {
            q.emit("recover_account", e, t)
        }
        var P, w = n(213),
            M = n(266),
            k = n(211),
            x = n(270),
            I = n(268),
            N = n(281),
            O = n(282),
            R = n(291),
            D = n(177),
            B = n(292),
            G = n(274),
            L = n(278),
            H = n(2),
            U = L.getQueryParams();
        U.user_id && (P = U.user_id, console.log("Setting user_id from query param to " + P), R.user_id = P, delete R.stars, delete R.rank, delete R.GIO_LINKED_EMAIL, U.email && (R.GIO_LINKED_EMAIL = U.email, console.log("Setting linked email from query param to " + U.email)), G.changeURL("/"));
        var F;
        R.user_id ? F = R.user_id : (F = O(), R.user_id = F), console.log("user_id: " + F);
        try {
            if (R.hasOwnProperty("stars")) {
                console.log("cached stars: " + R.stars);
                var V = JSON.parse(R.stars);
                M.dispatch(k.stars(V))
            }
            if (R.hasOwnProperty("rank")) {
                console.log("cached rank: " + R.rank);
                var j = JSON.parse(R.rank);
                M.dispatch(k.rank(j))
            }
        } catch (e) {
            M.dispatch(k.stars({})), M.dispatch(k.rank({}))
        }
        var W = window.location.hostname;
        switch (W) {
            case "localhost":
                W = "//localhost:8080";
                break;
            case "generals.io":
                W = "//ws.generals.io";
                break;
            case "eu.generals.io":
                W = "//euws.generals.io";
        }
        var q = w(W),
            K = !1;
        q.on("connect", function() {
            K ? console.log("Reconnected to server.") : console.log("Connected to server."), K = !0, o()
        }), q.on("disconnect", function() {
            console.log("Disconnected from server."), M.getState().page !== D.PAGE_GAME || M.getState().game.isLocalGame || alert("Disconnected from server. Please refresh the page.")
        }), q.on("pre_game_start", function() {
            M.dispatch(x.prestart())
        }), q.on("game_start", function(e) {
            M.dispatch(x.start(e))
        }), q.on("game_update", function(e) {
            M.dispatch(x.update(e))
        }), q.on("game_over", function() {
            M.dispatch(x.end())
        }), q.on("ping_tile", function(e) {
            M.dispatch(x.pingTile(e))
        }), q.on("queue_update", function(e) {
            M.dispatch(I.update(e))
        }), q.on("team_update", function(e) {
            M.dispatch(I.update({
                numPlayers: e
            }))
        }), q.on("team_joined_queue", function() {
            G.changeURL("/"), M.dispatch(k.play("2v2"))
        }), q.on("removed_from_queue", function() {
            M.dispatch(I.removeFrom2v2())
        }), q.on("chat_message", function(e, t) {
            M.dispatch(N.receiveMessage(e, t))
        }), q.on("game_lost", function(e) {
            M.dispatch(x.lose(e))
        }), q.on("game_won", function(e) {
            M.dispatch(x.win(e))
        }), q.on("replay_list", function(e) {
            M.dispatch(k.receiveReplayList(e))
        }), q.on("server_down", function() {
            window.location.reload(!1)
        }), q.on("leaderboard", function(e) {
            R["leaderboard:" + e.ladder] = JSON.stringify(e), M.dispatch(k.leaderboard(e))
        }), q.on("2v2_teammates", function(e) {
            R["2v2_teammates"] = JSON.stringify(e), M.dispatch(k.set2v2Teammates(e))
        }), q.on("stars", function(e) {
            console.log("stars: " + JSON.stringify(e)), M.dispatch(k.stars(e))
        }), q.on("rank", function(e) {
            console.log("rank: " + JSON.stringify(e)), M.dispatch(k.rank(e))
        }), q.on("error_user_id", function() {
            M.dispatch(I.cancel()), alert("You are already using this account! Make sure you don't have multiple tabs with generals.io open.\n\nIf you believe you are seeing this message in error, please email us at generalsiogame@gmail.com.")
        }), q.on("error_queue_full", function() {
            M.dispatch(I.cancel()), alert("This game is already full.")
        }), q.on("server_restart", function() {
            M.dispatch(k.notifyServerRestart())
        }), e.exports = {
            isConnected: r,
            updateStarsAndRank: o,
            setUsername: i,
            play: a,
            play1v1: s,
            playPrivate: l,
            setCustomTeam: c,
            attack: u,
            pingTile: p,
            cancel: h,
            setForceStart: d,
            sendChatMessage: f,
            getLeaderboard: m,
            get2v2Teammates: v,
            leaveGame: y,
            undoMove: g,
            clearMoves: b,
            getReplay: T,
            getReplayList: S,
            joinTeam: E,
            leaveTeam: A,
            linkEmail: C,
            recoverAccount: _
        }

window.gameCtrl = e.exports;
    },
    function(e, t, n) {
        function r(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r = i(e),
                a = r.source,
                u = r.id,
                p = r.path,
                h = c[u] && p in c[u].nsps,
                d = t.forceNew || t["force new connection"] || !1 === t.multiplex || h;
            return d ? (l("ignoring socket cache for %s", a), n = s(a, t)) : (c[u] || (l("new io instance for %s", a), c[u] = s(a, t)), n = c[u]), r.query && !t.query ? t.query = r.query : t && "object" == typeof t.query && (t.query = o(t.query)), n.socket(r.path, t)
        }

        function o(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }
        var i = n(214),
            a = n(219),
            s = n(229),
            l = n(216)("socket.io-client");
        e.exports = t = r;
        var c = t.managers = {};
        t.protocol = a.protocol, t.connect = r, t.Manager = n(229), t.Socket = n(259)
    },
    function(e, t, n) {
        (function(t) {
            function r(e, n) {
                var r = e;
                n = n || t.location, null == e && (e = n.protocol + "//" + n.host), "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e), /^(https?|wss?):\/\//.test(e) || (i("protocol-less url %s", e), e = "undefined" != typeof n ? n.protocol + "//" + e : "https://" + e), i("parse %s", e), r = o(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
                var a = r.host.indexOf(":") !== -1,
                    s = a ? "[" + r.host + "]" : r.host;
                return r.id = r.protocol + "://" + s + ":" + r.port, r.href = r.protocol + "://" + s + (n && n.port === r.port ? "" : ":" + r.port), r
            }
            var o = n(215),
                i = n(216)("socket.io-client:url");
            e.exports = r
        }).call(t, function() {
            return this
        }())
    },
    function(e, t) {
        var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        e.exports = function(e) {
            var t = e,
                o = e.indexOf("["),
                i = e.indexOf("]");
            o != -1 && i != -1 && (e = e.substring(0, o) + e.substring(o, i).replace(/:/g, ";") + e.substring(i, e.length));
            for (var a = n.exec(e || ""), s = {}, l = 14; l--;) s[r[l]] = a[l] || "";
            return o != -1 && i != -1 && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s
        }
    },
    [337, 217],
    [338, 218],
    function(e, t) {
        function n(e) {
            if (e = String(e), !(e.length > 1e4)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]),
                        r = (t[2] || "ms").toLowerCase();
                    switch (r) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * u;
                        case "days":
                        case "day":
                        case "d":
                            return n * c;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * l;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * s;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * a;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return
                    }
                }
            }
        }

        function r(e) {
            return e >= c ? Math.round(e / c) + "d" : e >= l ? Math.round(e / l) + "h" : e >= s ? Math.round(e / s) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms"
        }

        function o(e) {
            return i(e, c, "day") || i(e, l, "hour") || i(e, s, "minute") || i(e, a, "second") || e + " ms"
        }

        function i(e, t, n) {
            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }
        var a = 1e3,
            s = 60 * a,
            l = 60 * s,
            c = 24 * l,
            u = 365.25 * c;
        e.exports = function(e, t) {
            t = t || {};
            var i = typeof e;
            if ("string" === i && e.length > 0) return n(e);
            if ("number" === i && isNaN(e) === !1) return t.long ? o(e) : r(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    },
    function(e, t, n) {
        function r() {}

        function o(e) {
            var n = "",
                r = !1;
            return n += e.type, t.BINARY_EVENT != e.type && t.BINARY_ACK != e.type || (n += e.attachments, n += "-"), e.nsp && "/" != e.nsp && (r = !0, n += e.nsp), null != e.id && (r && (n += ",", r = !1), n += e.id), null != e.data && (r && (n += ","), n += h.stringify(e.data)), p("encoded %j as %s", e, n), n
        }

        function i(e, t) {
            function n(e) {
                var n = f.deconstructPacket(e),
                    r = o(n.packet),
                    i = n.buffers;
                i.unshift(r), t(i)
            }
            f.removeBlobs(e, n)
        }

        function a() {
            this.reconstructor = null
        }

        function s(e) {
            var n = {},
                r = 0;
            if (n.type = Number(e.charAt(0)), null == t.types[n.type]) return u();
            if (t.BINARY_EVENT == n.type || t.BINARY_ACK == n.type) {
                for (var o = "";
                    "-" != e.charAt(++r) && (o += e.charAt(r), r != e.length););
                if (o != Number(o) || "-" != e.charAt(r)) throw new Error("Illegal attachments");
                n.attachments = Number(o)
            }
            if ("/" == e.charAt(r + 1))
                for (n.nsp = ""; ++r;) {
                    var i = e.charAt(r);
                    if ("," == i) break;
                    if (n.nsp += i, r == e.length) break
                } else n.nsp = "/";
            var a = e.charAt(r + 1);
            if ("" !== a && Number(a) == a) {
                for (n.id = ""; ++r;) {
                    var i = e.charAt(r);
                    if (null == i || Number(i) != i) {
                        --r;
                        break
                    }
                    if (n.id += e.charAt(r), r == e.length) break
                }
                n.id = Number(n.id)
            }
            return e.charAt(++r) && (n = l(n, e.substr(r))), p("decoded %s as %j", e, n), n
        }

        function l(e, t) {
            try {
                e.data = h.parse(t)
            } catch (e) {
                return u()
            }
            return e
        }

        function c(e) {
            this.reconPack = e, this.buffers = []
        }

        function u(e) {
            return {
                type: t.ERROR,
                data: "parser error"
            }
        }
        var p = n(220)("socket.io-parser"),
            h = n(223),
            d = n(225),
            f = n(226),
            m = n(228);
        t.protocol = 4, t.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], t.CONNECT = 0, t.DISCONNECT = 1, t.EVENT = 2, t.ACK = 3, t.ERROR = 4, t.BINARY_EVENT = 5, t.BINARY_ACK = 6, t.Encoder = r, t.Decoder = a, r.prototype.encode = function(e, n) {
            if (p("encoding packet %j", e), t.BINARY_EVENT == e.type || t.BINARY_ACK == e.type) i(e, n);
            else {
                var r = o(e);
                n([r])
            }
        }, d(a.prototype), a.prototype.add = function(e) {
            var n;
            if ("string" == typeof e) n = s(e), t.BINARY_EVENT == n.type || t.BINARY_ACK == n.type ? (this.reconstructor = new c(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
            else {
                if (!m(e) && !e.base64) throw new Error("Unknown type: " + e);
                if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                n = this.reconstructor.takeBinaryData(e), n && (this.reconstructor = null, this.emit("decoded", n))
            }
        }, a.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        }, c.prototype.takeBinaryData = function(e) {
            if (this.buffers.push(e), this.buffers.length == this.reconPack.attachments) {
                var t = f.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(), t
            }
            return null
        }, c.prototype.finishedReconstruction = function() {
            this.reconPack = null, this.buffers = []
        }
    },
    function(e, t, n) {
        function r() {
            return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
        }

        function o() {
            var e = arguments,
                n = this.useColors;
            if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return e;
            var r = "color: " + this.color;
            e = [e[0], r, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
            var o = 0,
                i = 0;
            return e[0].replace(/%[a-z%]/g, function(e) {
                "%%" !== e && (o++, "%c" === e && (i = o))
            }), e.splice(i, 0, r), e
        }

        function i() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function a(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (e) {}
        }

        function s() {
            var e;
            try {
                e = t.storage.debug
            } catch (e) {}
            return e
        }

        function l() {
            try {
                return window.localStorage
            } catch (e) {}
        }
        t = e.exports = n(221), t.log = i, t.formatArgs = o, t.save = a, t.load = s, t.useColors = r, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : l(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
            return JSON.stringify(e)
        }, t.enable(s())
    },
    function(e, t, n) {
        function r() {
            return t.colors[u++ % t.colors.length]
        }

        function o(e) {
            function n() {}

            function o() {
                var e = o,
                    n = +new Date,
                    i = n - (c || n);
                e.diff = i, e.prev = c, e.curr = n, c = n, null == e.useColors && (e.useColors = t.useColors()), null == e.color && e.useColors && (e.color = r());
                var a = Array.prototype.slice.call(arguments);
                a[0] = t.coerce(a[0]), "string" != typeof a[0] && (a = ["%o"].concat(a));
                var s = 0;
                a[0] = a[0].replace(/%([a-z%])/g, function(n, r) {
                    if ("%%" === n) return n;
                    s++;
                    var o = t.formatters[r];
                    if ("function" == typeof o) {
                        var i = a[s];
                        n = o.call(e, i), a.splice(s, 1), s--
                    }
                    return n
                }), "function" == typeof t.formatArgs && (a = t.formatArgs.apply(e, a));
                var l = o.log || t.log || console.log.bind(console);
                l.apply(e, a)
            }
            n.enabled = !1, o.enabled = !0;
            var i = t.enabled(e) ? o : n;
            return i.namespace = e, i
        }

        function i(e) {
            t.save(e);
            for (var n = (e || "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) n[o] && (e = n[o].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }

        function a() {
            t.enable("")
        }

        function s(e) {
            var n, r;
            for (n = 0, r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++)
                if (t.names[n].test(e)) return !0;
            return !1
        }

        function l(e) {
            return e instanceof Error ? e.stack || e.message : e
        }
        t = e.exports = o, t.coerce = l, t.disable = a, t.enable = i, t.enabled = s, t.humanize = n(222), t.names = [], t.skips = [], t.formatters = {};
        var c, u = 0
    },
    function(e, t) {
        function n(e) {
            if (e = "" + e, !(e.length > 1e4)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]),
                        r = (t[2] || "ms").toLowerCase();
                    switch (r) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * u;
                        case "days":
                        case "day":
                        case "d":
                            return n * c;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * l;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * s;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * a;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n
                    }
                }
            }
        }

        function r(e) {
            return e >= c ? Math.round(e / c) + "d" : e >= l ? Math.round(e / l) + "h" : e >= s ? Math.round(e / s) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms"
        }

        function o(e) {
            return i(e, c, "day") || i(e, l, "hour") || i(e, s, "minute") || i(e, a, "second") || e + " ms"
        }

        function i(e, t, n) {
            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }
        var a = 1e3,
            s = 60 * a,
            l = 60 * s,
            c = 24 * l,
            u = 365.25 * c;
        e.exports = function(e, t) {
            return t = t || {}, "string" == typeof e ? n(e) : t.long ? o(e) : r(e)
        }
    },
    function(e, t, n) {
        var r;
        (function(e, o) {
            (function() {
                function i(e, t) {
                    function n(e) {
                        if (n[e] !== v) return n[e];
                        var i;
                        if ("bug-string-char-index" == e) i = "a" != "a" [0];
                        else if ("json" == e) i = n("json-stringify") && n("json-parse");
                        else {
                            var a, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if ("json-stringify" == e) {
                                var c = t.stringify,
                                    u = "function" == typeof c && b;
                                if (u) {
                                    (a = function() {
                                        return 1
                                    }).toJSON = a;
                                    try {
                                        u = "0" === c(0) && "0" === c(new r) && '""' == c(new o) && c(g) === v && c(v) === v && c() === v && "1" === c(a) && "[1]" == c([a]) && "[null]" == c([v]) && "null" == c(null) && "[null,null,null]" == c([v, g, null]) && c({
                                            a: [a, !0, !1, null, "\0\b\n\f\r\t"]
                                        }) == s && "1" === c(null, a) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new l(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == c(new l(864e13)) && '"-000001-01-01T00:00:00.000Z"' == c(new l(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == c(new l(-1))
                                    } catch (e) {
                                        u = !1
                                    }
                                }
                                i = u
                            }
                            if ("json-parse" == e) {
                                var p = t.parse;
                                if ("function" == typeof p) try {
                                    if (0 === p("0") && !p(!1)) {
                                        a = p(s);
                                        var h = 5 == a.a.length && 1 === a.a[0];
                                        if (h) {
                                            try {
                                                h = !p('"\t"')
                                            } catch (e) {}
                                            if (h) try {
                                                h = 1 !== p("01")
                                            } catch (e) {}
                                            if (h) try {
                                                h = 1 !== p("1.")
                                            } catch (e) {}
                                        }
                                    }
                                } catch (e) {
                                    h = !1
                                }
                                i = h
                            }
                        }
                        return n[e] = !!i
                    }
                    e || (e = c.Object()), t || (t = c.Object());
                    var r = e.Number || c.Number,
                        o = e.String || c.String,
                        a = e.Object || c.Object,
                        l = e.Date || c.Date,
                        u = e.SyntaxError || c.SyntaxError,
                        p = e.TypeError || c.TypeError,
                        h = e.Math || c.Math,
                        d = e.JSON || c.JSON;
                    "object" == typeof d && d && (t.stringify = d.stringify, t.parse = d.parse);
                    var f, m, v, y = a.prototype,
                        g = y.toString,
                        b = new l(-0xc782b5b800cec);
                    try {
                        b = b.getUTCFullYear() == -109252 && 0 === b.getUTCMonth() && 1 === b.getUTCDate() && 10 == b.getUTCHours() && 37 == b.getUTCMinutes() && 6 == b.getUTCSeconds() && 708 == b.getUTCMilliseconds()
                    } catch (e) {}
                    if (!n("json")) {
                        var T = "[object Function]",
                            S = "[object Date]",
                            E = "[object Number]",
                            A = "[object String]",
                            C = "[object Array]",
                            _ = "[object Boolean]",
                            P = n("bug-string-char-index");
                        if (!b) var w = h.floor,
                            M = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                            k = function(e, t) {
                                return M[t] + 365 * (e - 1970) + w((e - 1969 + (t = +(t > 1))) / 4) - w((e - 1901 + t) / 100) + w((e - 1601 + t) / 400)
                            };
                        if ((f = y.hasOwnProperty) || (f = function(e) {
                                var t, n = {};
                                return (n.__proto__ = null, n.__proto__ = {
                                    toString: 1
                                }, n).toString != g ? f = function(e) {
                                    var t = this.__proto__,
                                        n = e in (this.__proto__ = null, this);
                                    return this.__proto__ = t, n
                                } : (t = n.constructor, f = function(e) {
                                    var n = (this.constructor || t).prototype;
                                    return e in this && !(e in n && this[e] === n[e])
                                }), n = null, f.call(this, e)
                            }), m = function(e, t) {
                                var n, r, o, i = 0;
                                (n = function() {
                                    this.valueOf = 0
                                }).prototype.valueOf = 0, r = new n;
                                for (o in r) f.call(r, o) && i++;
                                return n = r = null, i ? m = 2 == i ? function(e, t) {
                                    var n, r = {},
                                        o = g.call(e) == T;
                                    for (n in e) o && "prototype" == n || f.call(r, n) || !(r[n] = 1) || !f.call(e, n) || t(n)
                                } : function(e, t) {
                                    var n, r, o = g.call(e) == T;
                                    for (n in e) o && "prototype" == n || !f.call(e, n) || (r = "constructor" === n) || t(n);
                                    (r || f.call(e, n = "constructor")) && t(n)
                                } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], m = function(e, t) {
                                    var n, o, i = g.call(e) == T,
                                        a = !i && "function" != typeof e.constructor && s[typeof e.hasOwnProperty] && e.hasOwnProperty || f;
                                    for (n in e) i && "prototype" == n || !a.call(e, n) || t(n);
                                    for (o = r.length; n = r[--o]; a.call(e, n) && t(n));
                                }), m(e, t)
                            }, !n("json-stringify")) {
                            var x = {
                                    92: "\\\\",
                                    34: '\\"',
                                    8: "\\b",
                                    12: "\\f",
                                    10: "\\n",
                                    13: "\\r",
                                    9: "\\t"
                                },
                                I = "000000",
                                N = function(e, t) {
                                    return (I + (t || 0)).slice(-e)
                                },
                                O = "\\u00",
                                R = function(e) {
                                    for (var t = '"', n = 0, r = e.length, o = !P || r > 10, i = o && (P ? e.split("") : e); n < r; n++) {
                                        var a = e.charCodeAt(n);
                                        switch (a) {
                                            case 8:
                                            case 9:
                                            case 10:
                                            case 12:
                                            case 13:
                                            case 34:
                                            case 92:
                                                t += x[a];
                                                break;
                                            default:
                                                if (a < 32) {
                                                    t += O + N(2, a.toString(16));
                                                    break
                                                }
                                                t += o ? i[n] : e.charAt(n)
                                        }
                                    }
                                    return t + '"'
                                },
                                D = function(e, t, n, r, o, i, a) {
                                    var s, l, c, u, h, d, y, b, T, P, M, x, I, O, B, G;
                                    try {
                                        s = t[e]
                                    } catch (e) {}
                                    if ("object" == typeof s && s)
                                        if (l = g.call(s), l != S || f.call(s, "toJSON")) "function" == typeof s.toJSON && (l != E && l != A && l != C || f.call(s, "toJSON")) && (s = s.toJSON(e));
                                        else if (s > -1 / 0 && s < 1 / 0) {
                                        if (k) {
                                            for (h = w(s / 864e5), c = w(h / 365.2425) + 1970 - 1; k(c + 1, 0) <= h; c++);
                                            for (u = w((h - k(c, 0)) / 30.42); k(c, u + 1) <= h; u++);
                                            h = 1 + h - k(c, u), d = (s % 864e5 + 864e5) % 864e5, y = w(d / 36e5) % 24, b = w(d / 6e4) % 60, T = w(d / 1e3) % 60, P = d % 1e3
                                        } else c = s.getUTCFullYear(), u = s.getUTCMonth(), h = s.getUTCDate(), y = s.getUTCHours(), b = s.getUTCMinutes(), T = s.getUTCSeconds(), P = s.getUTCMilliseconds();
                                        s = (c <= 0 || c >= 1e4 ? (c < 0 ? "-" : "+") + N(6, c < 0 ? -c : c) : N(4, c)) + "-" + N(2, u + 1) + "-" + N(2, h) + "T" + N(2, y) + ":" + N(2, b) + ":" + N(2, T) + "." + N(3, P) + "Z"
                                    } else s = null;
                                    if (n && (s = n.call(t, e, s)), null === s) return "null";
                                    if (l = g.call(s), l == _) return "" + s;
                                    if (l == E) return s > -1 / 0 && s < 1 / 0 ? "" + s : "null";
                                    if (l == A) return R("" + s);
                                    if ("object" == typeof s) {
                                        for (O = a.length; O--;)
                                            if (a[O] === s) throw p();
                                        if (a.push(s), M = [], B = i, i += o, l == C) {
                                            for (I = 0, O = s.length; I < O; I++) x = D(I, s, n, r, o, i, a), M.push(x === v ? "null" : x);
                                            G = M.length ? o ? "[\n" + i + M.join(",\n" + i) + "\n" + B + "]" : "[" + M.join(",") + "]" : "[]"
                                        } else m(r || s, function(e) {
                                            var t = D(e, s, n, r, o, i, a);
                                            t !== v && M.push(R(e) + ":" + (o ? " " : "") + t)
                                        }), G = M.length ? o ? "{\n" + i + M.join(",\n" + i) + "\n" + B + "}" : "{" + M.join(",") + "}" : "{}";
                                        return a.pop(), G
                                    }
                                };
                            t.stringify = function(e, t, n) {
                                var r, o, i, a;
                                if (s[typeof t] && t)
                                    if ((a = g.call(t)) == T) o = t;
                                    else if (a == C) {
                                    i = {};
                                    for (var l, c = 0, u = t.length; c < u; l = t[c++], a = g.call(l), (a == A || a == E) && (i[l] = 1));
                                }
                                if (n)
                                    if ((a = g.call(n)) == E) {
                                        if ((n -= n % 1) > 0)
                                            for (r = "", n > 10 && (n = 10); r.length < n; r += " ");
                                    } else a == A && (r = n.length <= 10 ? n : n.slice(0, 10));
                                return D("", (l = {}, l[""] = e, l), o, i, r, "", [])
                            }
                        }
                        if (!n("json-parse")) {
                            var B, G, L = o.fromCharCode,
                                H = {
                                    92: "\\",
                                    34: '"',
                                    47: "/",
                                    98: "\b",
                                    116: "\t",
                                    110: "\n",
                                    102: "\f",
                                    114: "\r"
                                },
                                U = function() {
                                    throw B = G = null, u()
                                },
                                F = function() {
                                    for (var e, t, n, r, o, i = G, a = i.length; B < a;) switch (o = i.charCodeAt(B)) {
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            B++;
                                            break;
                                        case 123:
                                        case 125:
                                        case 91:
                                        case 93:
                                        case 58:
                                        case 44:
                                            return e = P ? i.charAt(B) : i[B], B++, e;
                                        case 34:
                                            for (e = "@", B++; B < a;)
                                                if (o = i.charCodeAt(B), o < 32) U();
                                                else if (92 == o) switch (o = i.charCodeAt(++B)) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    e += H[o], B++;
                                                    break;
                                                case 117:
                                                    for (t = ++B, n = B + 4; B < n; B++) o = i.charCodeAt(B), o >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || U();
                                                    e += L("0x" + i.slice(t, B));
                                                    break;
                                                default:
                                                    U()
                                            } else {
                                                if (34 == o) break;
                                                for (o = i.charCodeAt(B), t = B; o >= 32 && 92 != o && 34 != o;) o = i.charCodeAt(++B);
                                                e += i.slice(t, B)
                                            }
                                            if (34 == i.charCodeAt(B)) return B++, e;
                                            U();
                                        default:
                                            if (t = B, 45 == o && (r = !0, o = i.charCodeAt(++B)), o >= 48 && o <= 57) {
                                                for (48 == o && (o = i.charCodeAt(B + 1), o >= 48 && o <= 57) && U(), r = !1; B < a && (o = i.charCodeAt(B), o >= 48 && o <= 57); B++);
                                                if (46 == i.charCodeAt(B)) {
                                                    for (n = ++B; n < a && (o = i.charCodeAt(n), o >= 48 && o <= 57); n++);
                                                    n == B && U(), B = n
                                                }
                                                if (o = i.charCodeAt(B), 101 == o || 69 == o) {
                                                    for (o = i.charCodeAt(++B), 43 != o && 45 != o || B++, n = B; n < a && (o = i.charCodeAt(n), o >= 48 && o <= 57); n++);
                                                    n == B && U(), B = n
                                                }
                                                return +i.slice(t, B)
                                            }
                                            if (r && U(), "true" == i.slice(B, B + 4)) return B += 4, !0;
                                            if ("false" == i.slice(B, B + 5)) return B += 5, !1;
                                            if ("null" == i.slice(B, B + 4)) return B += 4, null;
                                            U()
                                    }
                                    return "$"
                                },
                                V = function(e) {
                                    var t, n;
                                    if ("$" == e && U(), "string" == typeof e) {
                                        if ("@" == (P ? e.charAt(0) : e[0])) return e.slice(1);
                                        if ("[" == e) {
                                            for (t = []; e = F(), "]" != e; n || (n = !0)) n && ("," == e ? (e = F(), "]" == e && U()) : U()), "," == e && U(), t.push(V(e));
                                            return t
                                        }
                                        if ("{" == e) {
                                            for (t = {}; e = F(), "}" != e; n || (n = !0)) n && ("," == e ? (e = F(), "}" == e && U()) : U()), "," != e && "string" == typeof e && "@" == (P ? e.charAt(0) : e[0]) && ":" == F() || U(), t[e.slice(1)] = V(F());
                                            return t
                                        }
                                        U()
                                    }
                                    return e
                                },
                                j = function(e, t, n) {
                                    var r = W(e, t, n);
                                    r === v ? delete e[t] : e[t] = r
                                },
                                W = function(e, t, n) {
                                    var r, o = e[t];
                                    if ("object" == typeof o && o)
                                        if (g.call(o) == C)
                                            for (r = o.length; r--;) j(o, r, n);
                                        else m(o, function(e) {
                                            j(o, e, n)
                                        });
                                    return n.call(e, t, o)
                                };
                            t.parse = function(e, t) {
                                var n, r;
                                return B = 0, G = "" + e, n = V(F()), "$" != F() && U(), B = G = null, t && g.call(t) == T ? W((r = {}, r[""] = n, r), "", t) : n
                            }
                        }
                    }
                    return t.runInContext = i, t
                }
                var a = n(224),
                    s = {
                        function: !0,
                        object: !0
                    },
                    l = s[typeof t] && t && !t.nodeType && t,
                    c = s[typeof window] && window || this,
                    u = l && s[typeof e] && e && !e.nodeType && "object" == typeof o && o;
                if (!u || u.global !== u && u.window !== u && u.self !== u || (c = u), l && !a) i(c, l);
                else {
                    var p = c.JSON,
                        h = c.JSON3,
                        d = !1,
                        f = i(c, c.JSON3 = {
                            noConflict: function() {
                                return d || (d = !0, c.JSON = p, c.JSON3 = h, p = h = null), f
                            }
                        });
                    c.JSON = {
                        parse: f.parse,
                        stringify: f.stringify
                    }
                }
                a && (r = function() {
                    return f
                }.call(t, n, t, e), !(void 0 !== r && (e.exports = r)))
            }).call(this)
        }).call(t, n(201)(e), function() {
            return this
        }())
    },
    function(e, t) {
        (function(t) {
            e.exports = t
        }).call(t, {})
    },
    function(e, t) {
        function n(e) {
            if (e) return r(e)
        }

        function r(e) {
            for (var t in n.prototype) e[t] = n.prototype[t];
            return e
        }
        e.exports = n, n.prototype.on = n.prototype.addEventListener = function(e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this
        }, n.prototype.once = function(e, t) {
            function n() {
                r.off(e, n), t.apply(this, arguments)
            }
            var r = this;
            return this._callbacks = this._callbacks || {}, n.fn = t, this.on(e, n), this
        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n = this._callbacks[e];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks[e], this;
            for (var r, o = 0; o < n.length; o++)
                if (r = n[o], r === t || r.fn === t) {
                    n.splice(o, 1);
                    break
                }
            return this
        }, n.prototype.emit = function(e) {
            this._callbacks = this._callbacks || {};
            var t = [].slice.call(arguments, 1),
                n = this._callbacks[e];
            if (n) {
                n = n.slice(0);
                for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, t)
            }
            return this
        }, n.prototype.listeners = function(e) {
            return this._callbacks = this._callbacks || {}, this._callbacks[e] || []
        }, n.prototype.hasListeners = function(e) {
            return !!this.listeners(e).length
        }
    },
    function(e, t, n) {
        (function(e) {
            var r = n(227),
                o = n(228);
            t.deconstructPacket = function(e) {
                function t(e) {
                    if (!e) return e;
                    if (o(e)) {
                        var i = {
                            _placeholder: !0,
                            num: n.length
                        };
                        return n.push(e), i
                    }
                    if (r(e)) {
                        for (var a = new Array(e.length), s = 0; s < e.length; s++) a[s] = t(e[s]);
                        return a
                    }
                    if ("object" == typeof e && !(e instanceof Date)) {
                        var a = {};
                        for (var l in e) a[l] = t(e[l]);
                        return a
                    }
                    return e
                }
                var n = [],
                    i = e.data,
                    a = e;
                return a.data = t(i), a.attachments = n.length, {
                    packet: a,
                    buffers: n
                }
            }, t.reconstructPacket = function(e, t) {
                function n(e) {
                    if (e && e._placeholder) {
                        var o = t[e.num];
                        return o
                    }
                    if (r(e)) {
                        for (var i = 0; i < e.length; i++) e[i] = n(e[i]);
                        return e
                    }
                    if (e && "object" == typeof e) {
                        for (var a in e) e[a] = n(e[a]);
                        return e
                    }
                    return e
                }
                return e.data = n(e.data), e.attachments = void 0, e
            }, t.removeBlobs = function(t, n) {
                function i(t, l, c) {
                    if (!t) return t;
                    if (e.Blob && t instanceof Blob || e.File && t instanceof File) {
                        a++;
                        var u = new FileReader;
                        u.onload = function() {
                            c ? c[l] = this.result : s = this.result, --a || n(s)
                        }, u.readAsArrayBuffer(t)
                    } else if (r(t))
                        for (var p = 0; p < t.length; p++) i(t[p], p, t);
                    else if (t && "object" == typeof t && !o(t))
                        for (var h in t) i(t[h], h, t)
                }
                var a = 0,
                    s = t;
                i(s), a || n(s)
            }
        }).call(t, function() {
            return this
        }())
    },
    function(e, t) {
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        }
    },
    function(e, t) {
        (function(t) {
            function n(e) {
                return t.Buffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer
            }
            e.exports = n
        }).call(t, function() {
            return this
        }())
    },
    function(e, t, n) {
        function r(e, t) {
            return this instanceof r ? (e && "object" == typeof e && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new h({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new s.Encoder, this.decoder = new s.Decoder, this.autoConnect = t.autoConnect !== !1, void(this.autoConnect && this.open())) : new r(e, t)
        }
        var o = n(230),
            i = n(259),
            a = n(260),
            s = n(219),
            l = n(262),
            c = n(263),
            u = n(216)("socket.io-client:manager"),
            p = n(257),
            h = n(265),
            d = Object.prototype.hasOwnProperty;
        e.exports = r, r.prototype.emitAll = function() {
            this.emit.apply(this, arguments);
            for (var e in this.nsps) d.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
        }, r.prototype.updateSocketIds = function() {
            for (var e in this.nsps) d.call(this.nsps, e) && (this.nsps[e].id = this.engine.id)
        }, a(r.prototype), r.prototype.reconnection = function(e) {
            return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
        }, r.prototype.reconnectionAttempts = function(e) {
            return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
        }, r.prototype.reconnectionDelay = function(e) {
            return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
        }, r.prototype.randomizationFactor = function(e) {
            return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
        }, r.prototype.reconnectionDelayMax = function(e) {
            return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
        }, r.prototype.timeout = function(e) {
            return arguments.length ? (this._timeout = e, this) : this._timeout
        }, r.prototype.maybeReconnectOnOpen = function() {
            !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
        }, r.prototype.open = r.prototype.connect = function(e, t) {
            if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
            u("opening %s", this.uri), this.engine = o(this.uri, this.opts);
            var n = this.engine,
                r = this;
            this.readyState = "opening", this.skipReconnect = !1;
            var i = l(n, "open", function() {
                    r.onopen(), e && e()
                }),
                a = l(n, "error", function(t) {
                    if (u("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", t), e) {
                        var n = new Error("Connection error");
                        n.data = t, e(n)
                    } else r.maybeReconnectOnOpen()
                });
            if (!1 !== this._timeout) {
                var s = this._timeout;
                u("connect attempt will timeout after %d", s);
                var c = setTimeout(function() {
                    u("connect attempt timed out after %d", s), i.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", s)
                }, s);
                this.subs.push({
                    destroy: function() {
                        clearTimeout(c)
                    }
                })
            }
            return this.subs.push(i), this.subs.push(a), this
        }, r.prototype.onopen = function() {
            u("open"), this.cleanup(), this.readyState = "open", this.emit("open");
            var e = this.engine;
            this.subs.push(l(e, "data", c(this, "ondata"))), this.subs.push(l(e, "ping", c(this, "onping"))), this.subs.push(l(e, "pong", c(this, "onpong"))), this.subs.push(l(e, "error", c(this, "onerror"))), this.subs.push(l(e, "close", c(this, "onclose"))), this.subs.push(l(this.decoder, "decoded", c(this, "ondecoded")))
        }, r.prototype.onping = function() {
            this.lastPing = new Date, this.emitAll("ping")
        }, r.prototype.onpong = function() {
            this.emitAll("pong", new Date - this.lastPing)
        }, r.prototype.ondata = function(e) {
            this.decoder.add(e)
        }, r.prototype.ondecoded = function(e) {
            this.emit("packet", e)
        }, r.prototype.onerror = function(e) {
            u("error", e), this.emitAll("error", e)
        }, r.prototype.socket = function(e, t) {
            function n() {
                ~p(o.connecting, r) || o.connecting.push(r)
            }
            var r = this.nsps[e];
            if (!r) {
                r = new i(this, e, t), this.nsps[e] = r;
                var o = this;
                r.on("connecting", n), r.on("connect", function() {
                    r.id = o.engine.id
                }), this.autoConnect && n()
            }
            return r
        }, r.prototype.destroy = function(e) {
            var t = p(this.connecting, e);
            ~t && this.connecting.splice(t, 1), this.connecting.length || this.close()
        }, r.prototype.packet = function(e) {
            u("writing packet %j", e);
            var t = this;
            e.query && 0 === e.type && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, function(n) {
                for (var r = 0; r < n.length; r++) t.engine.write(n[r], e.options);
                t.encoding = !1, t.processPacketQueue()
            }))
        }, r.prototype.processPacketQueue = function() {
            if (this.packetBuffer.length > 0 && !this.encoding) {
                var e = this.packetBuffer.shift();
                this.packet(e)
            }
        }, r.prototype.cleanup = function() {
            u("cleanup");
            for (var e = this.subs.length, t = 0; t < e; t++) {
                var n = this.subs.shift();
                n.destroy()
            }
            this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
        }, r.prototype.close = r.prototype.disconnect = function() {
            u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
        }, r.prototype.onclose = function(e) {
            u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
        }, r.prototype.reconnect = function() {
            if (this.reconnecting || this.skipReconnect) return this;
            var e = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
            else {
                var t = this.backoff.duration();
                u("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
                var n = setTimeout(function() {
                    e.skipReconnect || (u("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || e.open(function(t) {
                        t ? (u("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : (u("reconnect success"), e.onreconnect())
                    }))
                }, t);
                this.subs.push({
                    destroy: function() {
                        clearTimeout(n)
                    }
                })
            }
        }, r.prototype.onreconnect = function() {
            var e = this.backoff.attempts;
            this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
        }
    },
    function(e, t, n) {
        e.exports = n(231)
    },
    function(e, t, n) {
        e.exports = n(232), e.exports.parser = n(239)
    },
    function(e, t, n) {
        (function(t) {
            function r(e, n) {
                if (!(this instanceof r)) return new r(e, n);
                n = n || {}, e && "object" == typeof e && (n = e, e = null), e ? (e = u(e), n.hostname = e.host, n.secure = "https" === e.protocol || "wss" === e.protocol, n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = u(n.host).host), this.secure = null != n.secure ? n.secure : t.location && "https:" === location.protocol, n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.agent = n.agent || !1, this.hostname = n.hostname || (t.location ? location.hostname : "localhost"), this.port = n.port || (t.location && location.port ? location.port : this.secure ? 443 : 80), this.query = n.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== n.upgrade, this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!n.forceJSONP, this.jsonp = !1 !== n.jsonp, this.forceBase64 = !!n.forceBase64, this.enablesXDR = !!n.enablesXDR, this.timestampParam = n.timestampParam || "t", this.timestampRequests = n.timestampRequests, this.transports = n.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = n.policyPort || 843, this.rememberUpgrade = n.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = n.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = n.pfx || null, this.key = n.key || null, this.passphrase = n.passphrase || null, this.cert = n.cert || null, this.ca = n.ca || null, this.ciphers = n.ciphers || null, this.rejectUnauthorized = void 0 === n.rejectUnauthorized ? null : n.rejectUnauthorized, this.forceNode = !!n.forceNode;
                var o = "object" == typeof t && t;
                o.global === o && (n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders), n.localAddress && (this.localAddress = n.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
            }

            function o(e) {
                var t = {};
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            }
            var i = n(233),
                a = n(247),
                s = n(251)("engine.io-client:socket"),
                l = n(257),
                c = n(239),
                u = n(215),
                p = n(258),
                h = n(248);
            e.exports = r, r.priorWebsocketSuccess = !1, a(r.prototype), r.protocol = c.protocol, r.Socket = r, r.Transport = n(238), r.transports = n(233), r.parser = n(239), r.prototype.createTransport = function(e) {
                s('creating transport "%s"', e);
                var t = o(this.query);
                t.EIO = c.protocol, t.transport = e, this.id && (t.sid = this.id);
                var n = new i[e]({
                    agent: this.agent,
                    hostname: this.hostname,
                    port: this.port,
                    secure: this.secure,
                    path: this.path,
                    query: t,
                    forceJSONP: this.forceJSONP,
                    jsonp: this.jsonp,
                    forceBase64: this.forceBase64,
                    enablesXDR: this.enablesXDR,
                    timestampRequests: this.timestampRequests,
                    timestampParam: this.timestampParam,
                    policyPort: this.policyPort,
                    socket: this,
                    pfx: this.pfx,
                    key: this.key,
                    passphrase: this.passphrase,
                    cert: this.cert,
                    ca: this.ca,
                    ciphers: this.ciphers,
                    rejectUnauthorized: this.rejectUnauthorized,
                    perMessageDeflate: this.perMessageDeflate,
                    extraHeaders: this.extraHeaders,
                    forceNode: this.forceNode,
                    localAddress: this.localAddress
                });
                return n
            }, r.prototype.open = function() {
                var e;
                if (this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) e = "websocket";
                else {
                    if (0 === this.transports.length) {
                        var t = this;
                        return void setTimeout(function() {
                            t.emit("error", "No transports available")
                        }, 0)
                    }
                    e = this.transports[0]
                }
                this.readyState = "opening";
                try {
                    e = this.createTransport(e)
                } catch (e) {
                    return this.transports.shift(), void this.open()
                }
                e.open(), this.setTransport(e)
            }, r.prototype.setTransport = function(e) {
                s("setting transport %s", e.name);
                var t = this;
                this.transport && (s("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", function() {
                    t.onDrain()
                }).on("packet", function(e) {
                    t.onPacket(e)
                }).on("error", function(e) {
                    t.onError(e)
                }).on("close", function() {
                    t.onClose("transport close")
                })
            }, r.prototype.probe = function(e) {
                function t() {
                    if (h.onlyBinaryUpgrades) {
                        var t = !this.supportsBinary && h.transport.supportsBinary;
                        p = p || t
                    }
                    p || (s('probe transport "%s" opened', e), u.send([{
                        type: "ping",
                        data: "probe"
                    }]), u.once("packet", function(t) {
                        if (!p)
                            if ("pong" === t.type && "probe" === t.data) {
                                if (s('probe transport "%s" pong', e), h.upgrading = !0, h.emit("upgrading", u), !u) return;
                                r.priorWebsocketSuccess = "websocket" === u.name, s('pausing current transport "%s"', h.transport.name), h.transport.pause(function() {
                                    p || "closed" !== h.readyState && (s("changing transport and sending upgrade packet"), c(), h.setTransport(u), u.send([{
                                        type: "upgrade"
                                    }]), h.emit("upgrade", u), u = null, h.upgrading = !1, h.flush())
                                })
                            } else {
                                s('probe transport "%s" failed', e);
                                var n = new Error("probe error");
                                n.transport = u.name, h.emit("upgradeError", n)
                            }
                    }))
                }

                function n() {
                    p || (p = !0, c(), u.close(), u = null)
                }

                function o(t) {
                    var r = new Error("probe error: " + t);
                    r.transport = u.name, n(), s('probe transport "%s" failed because of error: %s', e, t), h.emit("upgradeError", r)
                }

                function i() {
                    o("transport closed")
                }

                function a() {
                    o("socket closed")
                }

                function l(e) {
                    u && e.name !== u.name && (s('"%s" works - aborting "%s"', e.name, u.name), n())
                }

                function c() {
                    u.removeListener("open", t), u.removeListener("error", o), u.removeListener("close", i), h.removeListener("close", a), h.removeListener("upgrading", l)
                }
                s('probing transport "%s"', e);
                var u = this.createTransport(e, {
                        probe: 1
                    }),
                    p = !1,
                    h = this;
                r.priorWebsocketSuccess = !1, u.once("open", t), u.once("error", o), u.once("close", i), this.once("close", a), this.once("upgrading", l), u.open()
            }, r.prototype.onOpen = function() {
                if (s("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
                    s("starting upgrade probes");
                    for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
                }
            }, r.prototype.onPacket = function(e) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (s('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
                    case "open":
                        this.onHandshake(p(e.data));
                        break;
                    case "pong":
                        this.setPing(), this.emit("pong");
                        break;
                    case "error":
                        var t = new Error("server error");
                        t.code = e.data, this.onError(t);
                        break;
                    case "message":
                        this.emit("data", e.data), this.emit("message", e.data)
                } else s('packet received with socket readyState "%s"', this.readyState)
            }, r.prototype.onHandshake = function(e) {
                this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
            }, r.prototype.onHeartbeat = function(e) {
                clearTimeout(this.pingTimeoutTimer);
                var t = this;
                t.pingTimeoutTimer = setTimeout(function() {
                    "closed" !== t.readyState && t.onClose("ping timeout")
                }, e || t.pingInterval + t.pingTimeout)
            }, r.prototype.setPing = function() {
                var e = this;
                clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function() {
                    s("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
                }, e.pingInterval)
            }, r.prototype.ping = function() {
                var e = this;
                this.sendPacket("ping", function() {
                    e.emit("ping")
                })
            }, r.prototype.onDrain = function() {
                this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
            }, r.prototype.flush = function() {
                "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (s("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
            }, r.prototype.write = r.prototype.send = function(e, t, n) {
                return this.sendPacket("message", e, t, n), this
            }, r.prototype.sendPacket = function(e, t, n, r) {
                if ("function" == typeof t && (r = t, t = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                    n = n || {}, n.compress = !1 !== n.compress;
                    var o = {
                        type: e,
                        data: t,
                        options: n
                    };
                    this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
                }
            }, r.prototype.close = function() {
                function e() {
                    r.onClose("forced close"), s("socket closing - telling transport to close"), r.transport.close()
                }

                function t() {
                    r.removeListener("upgrade", t), r.removeListener("upgradeError", t), e()
                }

                function n() {
                    r.once("upgrade", t), r.once("upgradeError", t)
                }
                if ("opening" === this.readyState || "open" === this.readyState) {
                    this.readyState = "closing";
                    var r = this;
                    this.writeBuffer.length ? this.once("drain", function() {
                        this.upgrading ? n() : e()
                    }) : this.upgrading ? n() : e()
                }
                return this
            }, r.prototype.onError = function(e) {
                s("socket error %j", e), r.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
            }, r.prototype.onClose = function(e, t) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                    s('socket close with reason: "%s"', e);
                    var n = this;
                    clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), n.writeBuffer = [], n.prevBufferLen = 0
                }
            }, r.prototype.filterUpgrades = function(e) {
                for (var t = [], n = 0, r = e.length; n < r; n++) ~l(this.transports, e[n]) && t.push(e[n]);
                return t
            }
        }).call(t, function() {
            return this
        }())
    },
    function(e, t, n) {
        (function(e) {
            function r(t) {
                var n, r = !1,
                    s = !1,
                    l = !1 !== t.jsonp;
                if (e.location) {
                    var c = "https:" === location.protocol,
                        u = location.port;
                    u || (u = c ? 443 : 80), r = t.hostname !== location.hostname || u !== t.port, s = t.secure !== c
                }
                if (t.xdomain = r, t.xscheme = s, n = new o(t), "open" in n && !t.forceJSONP) return new i(t);
                if (!l) throw new Error("JSONP disabled");
                return new a(t)
            }
            var o = n(234),
                i = n(236),
                a = n(254),
                s = n(255);
            t.polling = r, t.websocket = s
        }).call(t, function() {
            return this
        }())
    },
    function(e, t, n) {
        (function(t) {
            var r = n(235);
            e.exports = function(e) {
                var n = e.xdomain,
                    o = e.xscheme,
                    i = e.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!n || r)) return new XMLHttpRequest
                } catch (e) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !o && i) return new XDomainRequest
                } catch (e) {}
                if (!n) try {
                    return new(t[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
        }).call(t, function() {
            return this
        }())
    },
    function(e, t) {
        try {
            e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
        } catch (t) {
            e.exports = !1
        }
    },
    function(e, t, n) {
        (function(t) {
            function r() {}

            function o(e) {
                if (l.call(this, e), this.requestTimeout = e.requestTimeout, t.location) {
                    var n = "https:" === location.protocol,
                        r = location.port;
                    r || (r = n ? 443 : 80), this.xd = e.hostname !== t.location.hostname || r !== e.port, this.xs = e.secure !== n
                } else this.extraHeaders = e.extraHeaders
            }

            function i(e) {
                this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = void 0 !== e.data ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
            }

            function a() {
                for (var e in i.requests) i.requests.hasOwnProperty(e) && i.requests[e].abort()
            }
            var s = n(234),
                l = n(237),
                c = n(247),
                u = n(249),
                p = n(251)("engine.io-client:polling-xhr");
            e.exports = o, e.exports.Request = i, u(o, l), o.prototype.supportsBinary = !0, o.prototype.request = function(e) {
                return e = e || {}, e.uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new i(e)
            }, o.prototype.doWrite = function(e, t) {
                var n = "string" != typeof e && void 0 !== e,
                    r = this.request({
                        method: "POST",
                        data: e,
                        isBinary: n
                    }),
                    o = this;
                r.on("success", t), r.on("error", function(e) {
                    o.onError("xhr post error", e)
                }), this.sendXhr = r
            }, o.prototype.doPoll = function() {
                p("xhr poll");
                var e = this.request(),
                    t = this;
                e.on("data", function(e) {
                    t.onData(e)
                }), e.on("error", function(e) {
                    t.onError("xhr poll error", e)
                }), this.pollXhr = e
            }, c(i.prototype), i.prototype.create = function() {
                var e = {
                    agent: this.agent,
                    xdomain: this.xd,
                    xscheme: this.xs,
                    enablesXDR: this.enablesXDR
                };
                e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
                var n = this.xhr = new s(e),
                    r = this;
                try {
                    p("xhr open %s: %s", this.method, this.uri), n.open(this.method, this.uri, this.async);
                    try {
                        if (this.extraHeaders) {
                            n.setDisableHeaderCheck(!0);
                            for (var o in this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this.extraHeaders[o])
                        }
                    } catch (e) {}
                    if (this.supportsBinary && (n.responseType = "arraybuffer"), "POST" === this.method) try {
                        this.isBinary ? n.setRequestHeader("Content-type", "application/octet-stream") : n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } catch (e) {}
                    try {
                        n.setRequestHeader("Accept", "*/*")
                    } catch (e) {}
                    "withCredentials" in n && (n.withCredentials = !0), this.requestTimeout && (n.timeout = this.requestTimeout), this.hasXDR() ? (n.onload = function() {
                        r.onLoad()
                    }, n.onerror = function() {
                        r.onError(n.responseText)
                    }) : n.onreadystatechange = function() {
                        4 === n.readyState && (200 === n.status || 1223 === n.status ? r.onLoad() : setTimeout(function() {
                            r.onError(n.status)
                        }, 0))
                    }, p("xhr data %s", this.data), n.send(this.data)
                } catch (e) {
                    return void setTimeout(function() {
                        r.onError(e)
                    }, 0)
                }
                t.document && (this.index = i.requestsCount++, i.requests[this.index] = this)
            }, i.prototype.onSuccess = function() {
                this.emit("success"), this.cleanup()
            }, i.prototype.onData = function(e) {
                this.emit("data", e), this.onSuccess()
            }, i.prototype.onError = function(e) {
                this.emit("error", e), this.cleanup(!0)
            }, i.prototype.cleanup = function(e) {
                if ("undefined" != typeof this.xhr && null !== this.xhr) {
                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, e) try {
                        this.xhr.abort()
                    } catch (e) {}
                    t.document && delete i.requests[this.index], this.xhr = null
                }
            }, i.prototype.onLoad = function() {
                var e;
                try {
                    var t;
                    try {
                        t = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                    } catch (e) {}
                    if ("application/octet-stream" === t) e = this.xhr.response || this.xhr.responseText;
                    else if (this.supportsBinary) try {
                        e = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                    } catch (t) {
                        for (var n = new Uint8Array(this.xhr.response), r = [], o = 0, i = n.length; o < i; o++) r.push(n[o]);
                        e = String.fromCharCode.apply(null, r)
                    } else e = this.xhr.responseText
                } catch (e) {
                    this.onError(e)
                }
                null != e && this.onData(e)
            }, i.prototype.hasXDR = function() {
                return "undefined" != typeof t.XDomainRequest && !this.xs && this.enablesXDR
            }, i.prototype.abort = function() {
                this.cleanup()
            }, i.requestsCount = 0, i.requests = {}, t.document && (t.attachEvent ? t.attachEvent("onunload", a) : t.addEventListener && t.addEventListener("beforeunload", a, !1))
        }).call(t, function() {
            return this
        }())
    },
    function(e, t, n) {
        function r(e) {
            var t = e && e.forceBase64;
            u && !t || (this.supportsBinary = !1), o.call(this, e)
        }
        var o = n(238),
            i = n(248),
            a = n(239),
            s = n(249),
            l = n(250),
            c = n(251)("engine.io-client:polling");
        e.exports = r;
        var u = function() {
            var e = n(234),
                t = new e({
                    xdomain: !1
                });
            return null != t.responseType
        }();
        s(r, o), r.prototype.name = "polling", r.prototype.doOpen = function() {
            this.poll()
        }, r.prototype.pause = function(e) {
            function t() {
                c("paused"), n.readyState = "paused", e()
            }
            var n = this;
            if (this.readyState = "pausing", this.polling || !this.writable) {
                var r = 0;
                this.polling && (c("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function() {
                    c("pre-pause polling complete"), --r || t()
                })), this.writable || (c("we are currently writing - waiting to pause"), r++, this.once("drain", function() {
                    c("pre-pause writing complete"), --r || t()
                }))
            } else t()
        }, r.prototype.poll = function() {
            c("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
        }, r.prototype.onData = function(e) {
            var t = this;
            c("polling got data %s", e);
            var n = function(e, n, r) {
                return "opening" === t.readyState && t.onOpen(), "close" === e.type ? (t.onClose(), !1) : void t.onPacket(e)
            };
            a.decodePayload(e, this.socket.binaryType, n), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : c('ignoring poll - transport state "%s"', this.readyState))
        }, r.prototype.doClose = function() {
            function e() {
                c("writing close packet"), t.write([{
                    type: "close"
                }])
            }
            var t = this;
            "open" === this.readyState ? (c("transport open - closing"), e()) : (c("transport not open - deferring close"), this.once("open", e))
        }, r.prototype.write = function(e) {
            var t = this;
            this.writable = !1;
            var n = function() {
                t.writable = !0, t.emit("drain")
            };
            a.encodePayload(e, this.supportsBinary, function(e) {
                t.doWrite(e, n)
            })
        }, r.prototype.uri = function() {
            var e = this.query || {},
                t = this.secure ? "https" : "http",
                n = "";
            !1 !== this.timestampRequests && (e[this.timestampParam] = l()), this.supportsBinary || e.sid || (e.b64 = 1), e = i.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (n = ":" + this.port), e.length && (e = "?" + e);
            var r = this.hostname.indexOf(":") !== -1;
            return t + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
        }
    },
    function(e, t, n) {
        function r(e) {
            this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress
        }
        var o = n(239),
            i = n(247);
        e.exports = r, i(r.prototype), r.prototype.onError = function(e, t) {
            var n = new Error(e);
            return n.type = "TransportError", n.description = t, this.emit("error", n), this
        }, r.prototype.open = function() {
            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
        }, r.prototype.close = function() {
            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
        }, r.prototype.send = function(e) {
            if ("open" !== this.readyState) throw new Error("Transport not open");
            this.write(e)
        }, r.prototype.onOpen = function() {
            this.readyState = "open", this.writable = !0, this.emit("open")
        }, r.prototype.onData = function(e) {
            var t = o.decodePacket(e, this.socket.binaryType);
            this.onPacket(t)
        }, r.prototype.onPacket = function(e) {
            this.emit("packet", e)
        }, r.prototype.onClose = function() {
            this.readyState = "closed", this.emit("close")
        }
    },
    function(e, t, n) {
        (function(e) {
            function r(e, n) {
                var r = "b" + t.packets[e.type] + e.data.data;
                return n(r)
            }

            function o(e, n, r) {
                if (!n) return t.encodeBase64Packet(e, r);
                var o = e.data,
                    i = new Uint8Array(o),
                    a = new Uint8Array(1 + o.byteLength);
                a[0] = g[e.type];
                for (var s = 0; s < i.length; s++) a[s + 1] = i[s];
                return r(a.buffer)
            }

            function i(e, n, r) {
                if (!n) return t.encodeBase64Packet(e, r);
                var o = new FileReader;
                return o.onload = function() {
                    e.data = o.result, t.encodePacket(e, n, !0, r)
                }, o.readAsArrayBuffer(e.data)
            }

            function a(e, n, r) {
                if (!n) return t.encodeBase64Packet(e, r);
                if (y) return i(e, n, r);
                var o = new Uint8Array(1);
                o[0] = g[e.type];
                var a = new S([o.buffer, e.data]);
                return r(a)
            }

            function s(e) {
                try {
                    e = f.decode(e)
                } catch (e) {
                    return !1
                }
                return e
            }

            function l(e, t, n) {
                for (var r = new Array(e.length), o = d(e.length, n), i = function(e, n, o) {
                        t(n, function(t, n) {
                            r[e] = n, o(t, r)
                        })
                    }, a = 0; a < e.length; a++) i(a, e[a], o)
            }
            var c, u = n(240),
                p = n(241),
                h = n(242),
                d = n(243),
                f = n(244);
            e && e.ArrayBuffer && (c = n(245));
            var m = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
                v = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
                y = m || v;
            t.protocol = 3;
            var g = t.packets = {
                    open: 0,
                    close: 1,
                    ping: 2,
                    pong: 3,
                    message: 4,
                    upgrade: 5,
                    noop: 6
                },
                b = u(g),
                T = {
                    type: "error",
                    data: "parser error"
                },
                S = n(246);
            t.encodePacket = function(t, n, i, s) {
                "function" == typeof n && (s = n, n = !1), "function" == typeof i && (s = i, i = null);
                var l = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                if (e.ArrayBuffer && l instanceof ArrayBuffer) return o(t, n, s);
                if (S && l instanceof e.Blob) return a(t, n, s);
                if (l && l.base64) return r(t, s);
                var c = g[t.type];
                return void 0 !== t.data && (c += i ? f.encode(String(t.data)) : String(t.data)), s("" + c)
            }, t.encodeBase64Packet = function(n, r) {
                var o = "b" + t.packets[n.type];
                if (S && n.data instanceof e.Blob) {
                    var i = new FileReader;
                    return i.onload = function() {
                        var e = i.result.split(",")[1];
                        r(o + e)
                    }, i.readAsDataURL(n.data)
                }
                var a;
                try {
                    a = String.fromCharCode.apply(null, new Uint8Array(n.data))
                } catch (e) {
                    for (var s = new Uint8Array(n.data), l = new Array(s.length), c = 0; c < s.length; c++) l[c] = s[c];
                    a = String.fromCharCode.apply(null, l)
                }
                return o += e.btoa(a), r(o)
            }, t.decodePacket = function(e, n, r) {
                if (void 0 === e) return T;
                if ("string" == typeof e) {
                    if ("b" == e.charAt(0)) return t.decodeBase64Packet(e.substr(1), n);
                    if (r && (e = s(e), e === !1)) return T;
                    var o = e.charAt(0);
                    return Number(o) == o && b[o] ? e.length > 1 ? {
                        type: b[o],
                        data: e.substring(1)
                    } : {
                        type: b[o]
                    } : T
                }
                var i = new Uint8Array(e),
                    o = i[0],
                    a = h(e, 1);
                return S && "blob" === n && (a = new S([a])), {
                    type: b[o],
                    data: a
                }
            }, t.decodeBase64Packet = function(e, t) {
                var n = b[e.charAt(0)];
                if (!c) return {
                    type: n,
                    data: {
                        base64: !0,
                        data: e.substr(1)
                    }
                };
                var r = c.decode(e.substr(1));
                return "blob" === t && S && (r = new S([r])), {
                    type: n,
                    data: r
                }
            }, t.encodePayload = function(e, n, r) {
                function o(e) {
                    return e.length + ":" + e
                }

                function i(e, r) {
                    t.encodePacket(e, !!a && n, !0, function(e) {
                        r(null, o(e))
                    })
                }
                "function" == typeof n && (r = n, n = null);
                var a = p(e);
                return n && a ? S && !y ? t.encodePayloadAsBlob(e, r) : t.encodePayloadAsArrayBuffer(e, r) : e.length ? void l(e, i, function(e, t) {
                    return r(t.join(""))
                }) : r("0:")
            }, t.decodePayload = function(e, n, r) {
                if ("string" != typeof e) return t.decodePayloadAsBinary(e, n, r);
                "function" == typeof n && (r = n, n = null);
                var o;
                if ("" == e) return r(T, 0, 1);
                for (var i, a, s = "", l = 0, c = e.length; l < c; l++) {
                    var u = e.charAt(l);
                    if (":" != u) s += u;
                    else {
                        if ("" == s || s != (i = Number(s))) return r(T, 0, 1);
                        if (a = e.substr(l + 1, i), s != a.length) return r(T, 0, 1);
                        if (a.length) {
                            if (o = t.decodePacket(a, n, !0), T.type == o.type && T.data == o.data) return r(T, 0, 1);
                            var p = r(o, l + i, c);
                            if (!1 === p) return
                        }
                        l += i, s = ""
                    }
                }
                return "" != s ? r(T, 0, 1) : void 0
            }, t.encodePayloadAsArrayBuffer = function(e, n) {
                function r(e, n) {
                    t.encodePacket(e, !0, !0, function(e) {
                        return n(null, e)
                    })
                }
                return e.length ? void l(e, r, function(e, t) {
                    var r = t.reduce(function(e, t) {
                            var n;
                            return n = "string" == typeof t ? t.length : t.byteLength, e + n.toString().length + n + 2
                        }, 0),
                        o = new Uint8Array(r),
                        i = 0;
                    return t.forEach(function(e) {
                        var t = "string" == typeof e,
                            n = e;
                        if (t) {
                            for (var r = new Uint8Array(e.length), a = 0; a < e.length; a++) r[a] = e.charCodeAt(a);
                            n = r.buffer
                        }
                        t ? o[i++] = 0 : o[i++] = 1;
                        for (var s = n.byteLength.toString(), a = 0; a < s.length; a++) o[i++] = parseInt(s[a]);
                        o[i++] = 255;
                        for (var r = new Uint8Array(n), a = 0; a < r.length; a++) o[i++] = r[a]
                    }), n(o.buffer)
                }) : n(new ArrayBuffer(0))
            }, t.encodePayloadAsBlob = function(e, n) {
                function r(e, n) {
                    t.encodePacket(e, !0, !0, function(e) {
                        var t = new Uint8Array(1);
                        if (t[0] = 1, "string" == typeof e) {
                            for (var r = new Uint8Array(e.length), o = 0; o < e.length; o++) r[o] = e.charCodeAt(o);
                            e = r.buffer, t[0] = 0
                        }
                        for (var i = e instanceof ArrayBuffer ? e.byteLength : e.size, a = i.toString(), s = new Uint8Array(a.length + 1), o = 0; o < a.length; o++) s[o] = parseInt(a[o]);
                        if (s[a.length] = 255, S) {
                            var l = new S([t.buffer, s.buffer, e]);
                            n(null, l)
                        }
                    })
                }
                l(e, r, function(e, t) {
                    return n(new S(t))
                })
            }, t.decodePayloadAsBinary = function(e, n, r) {
                "function" == typeof n && (r = n, n = null);
                for (var o = e, i = [], a = !1; o.byteLength > 0;) {
                    for (var s = new Uint8Array(o), l = 0 === s[0], c = "", u = 1; 255 != s[u]; u++) {
                        if (c.length > 310) {
                            a = !0;
                            break
                        }
                        c += s[u]
                    }
                    if (a) return r(T, 0, 1);
                    o = h(o, 2 + c.length), c = parseInt(c);
                    var p = h(o, 0, c);
                    if (l) try {
                        p = String.fromCharCode.apply(null, new Uint8Array(p))
                    } catch (e) {
                        var d = new Uint8Array(p);
                        p = "";
                        for (var u = 0; u < d.length; u++) p += String.fromCharCode(d[u])
                    }
                    i.push(p), o = h(o, c)
                }
                var f = i.length;
                i.forEach(function(e, o) {
                    r(t.decodePacket(e, n, !0), o, f)
                })
            }
        }).call(t, function() {
            return this
        }())
    },
    function(e, t) {
        e.exports = Object.keys || function(e) {
            var t = [],
                n = Object.prototype.hasOwnProperty;
            for (var r in e) n.call(e, r) && t.push(r);
            return t
        }
    },
    function(e, t, n) {
        (function(t) {
            function r(e) {
                function n(e) {
                    if (!e) return !1;
                    if (t.Buffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer || t.Blob && e instanceof Blob || t.File && e instanceof File) return !0;
                    if (o(e)) {
                        for (var r = 0; r < e.length; r++)
                            if (n(e[r])) return !0
                    } else if (e && "object" == typeof e) {
                        e.toJSON && (e = e.toJSON());
                        for (var i in e)
                            if (Object.prototype.hasOwnProperty.call(e, i) && n(e[i])) return !0
                    }
                    return !1
                }
                return n(e)
            }
            var o = n(227);
            e.exports = r
        }).call(t, function() {
            return this
        }())
    },
    function(e, t) {
        e.exports = function(e, t, n) {
            var r = e.byteLength;
            if (t = t || 0, n = n || r, e.slice) return e.slice(t, n);
            if (t < 0 && (t += r), n < 0 && (n += r), n > r && (n = r), t >= r || t >= n || 0 === r) return new ArrayBuffer(0);
            for (var o = new Uint8Array(e), i = new Uint8Array(n - t), a = t, s = 0; a < n; a++, s++) i[s] = o[a];
            return i.buffer
        }
    },
    function(e, t) {
        function n(e, t, n) {
            function o(e, r) {
                if (o.count <= 0) throw new Error("after called too many times");
                --o.count, e ? (i = !0, t(e), t = n) : 0 !== o.count || i || t(null, r)
            }
            var i = !1;
            return n = n || r, o.count = e, 0 === e ? t() : o
        }

        function r() {}
        e.exports = n
    },
    function(e, t, n) {
        var r;
        (function(e, o) {
            ! function(i) {
                function a(e) {
                    for (var t, n, r = [], o = 0, i = e.length; o < i;) t = e.charCodeAt(o++), t >= 55296 && t <= 56319 && o < i ? (n = e.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--)) : r.push(t);
                    return r
                }

                function s(e) {
                    for (var t, n = e.length, r = -1, o = ""; ++r < n;) t = e[r], t > 65535 && (t -= 65536, o += b(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), o += b(t);
                    return o
                }

                function l(e, t) {
                    return b(e >> t & 63 | 128)
                }

                function c(e) {
                    if (0 == (4294967168 & e)) return b(e);
                    var t = "";
                    return 0 == (4294965248 & e) ? t = b(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (t = b(e >> 12 & 15 | 224), t += l(e, 6)) : 0 == (4292870144 & e) && (t = b(e >> 18 & 7 | 240), t += l(e, 12), t += l(e, 6)), t += b(63 & e | 128)
                }

                function u(e) {
                    for (var t, n = a(e), r = n.length, o = -1, i = ""; ++o < r;) t = n[o], i += c(t);
                    return i
                }

                function p() {
                    if (g >= y) throw Error("Invalid byte index");
                    var e = 255 & v[g];
                    if (g++, 128 == (192 & e)) return 63 & e;
                    throw Error("Invalid continuation byte")
                }

                function h() {
                    var e, t, n, r, o;
                    if (g > y) throw Error("Invalid byte index");
                    if (g == y) return !1;
                    if (e = 255 & v[g], g++, 0 == (128 & e)) return e;
                    if (192 == (224 & e)) {
                        var t = p();
                        if (o = (31 & e) << 6 | t, o >= 128) return o;
                        throw Error("Invalid continuation byte")
                    }
                    if (224 == (240 & e)) {
                        if (t = p(), n = p(), o = (15 & e) << 12 | t << 6 | n, o >= 2048) return o;
                        throw Error("Invalid continuation byte")
                    }
                    if (240 == (248 & e) && (t = p(), n = p(), r = p(), o = (15 & e) << 18 | t << 12 | n << 6 | r, o >= 65536 && o <= 1114111)) return o;
                    throw Error("Invalid WTF-8 detected")
                }

                function d(e) {
                    v = a(e), y = v.length, g = 0;
                    for (var t, n = [];
                        (t = h()) !== !1;) n.push(t);
                    return s(n)
                }
                var f = "object" == typeof t && t,
                    m = ("object" == typeof e && e && e.exports == f && e, "object" == typeof o && o);
                m.global !== m && m.window !== m || (i = m);
                var v, y, g, b = String.fromCharCode,
                    T = {
                        version: "1.0.0",
                        encode: u,
                        decode: d
                    };
                r = function() {
                    return T
                }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
            }(this)
        }).call(t, n(201)(e), function() {
            return this
        }())
    },
    function(e, t) {
        ! function() {
            "use strict";
            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < e.length; r++) n[e.charCodeAt(r)] = r;
            t.encode = function(t) {
                var n, r = new Uint8Array(t),
                    o = r.length,
                    i = "";
                for (n = 0; n < o; n += 3) i += e[r[n] >> 2], i += e[(3 & r[n]) << 4 | r[n + 1] >> 4], i += e[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += e[63 & r[n + 2]];
                return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i
            }, t.decode = function(e) {
                var t, r, o, i, a, s = .75 * e.length,
                    l = e.length,
                    c = 0;
                "=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
                var u = new ArrayBuffer(s),
                    p = new Uint8Array(u);
                for (t = 0; t < l; t += 4) r = n[e.charCodeAt(t)], o = n[e.charCodeAt(t + 1)], i = n[e.charCodeAt(t + 2)], a = n[e.charCodeAt(t + 3)], p[c++] = r << 2 | o >> 4, p[c++] = (15 & o) << 4 | i >> 2, p[c++] = (3 & i) << 6 | 63 & a;
                return u
            }
        }()
    },
    function(e, t) {
        (function(t) {
            function n(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (n.buffer instanceof ArrayBuffer) {
                        var r = n.buffer;
                        if (n.byteLength !== r.byteLength) {
                            var o = new Uint8Array(n.byteLength);
                            o.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = o.buffer
                        }
                        e[t] = r
                    }
                }
            }

            function r(e, t) {
                t = t || {};
                var r = new i;
                n(e);
                for (var o = 0; o < e.length; o++) r.append(e[o]);
                return t.type ? r.getBlob(t.type) : r.getBlob()
            }

            function o(e, t) {
                return n(e), new Blob(e, t || {})
            }
            var i = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder,
                a = function() {
                    try {
                        var e = new Blob(["hi"]);
                        return 2 === e.size
                    } catch (e) {
                        return !1
                    }
                }(),
                s = a && function() {
                    try {
                        var e = new Blob([new Uint8Array([1, 2])]);
                        return 2 === e.size
                    } catch (e) {
                        return !1
                    }
                }(),
                l = i && i.prototype.append && i.prototype.getBlob;
            e.exports = function() {
                return a ? s ? t.Blob : o : l ? r : void 0
            }()
        }).call(t, function() {
            return this
        }())
    },
    function(e, t, n) {
        function r(e) {
            if (e) return o(e)
        }

        function o(e) {
            for (var t in r.prototype) e[t] = r.prototype[t];
            return e
        }
        e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
        }, r.prototype.once = function(e, t) {
            function n() {
                this.off(e, n), t.apply(this, arguments)
            }
            return n.fn = t, this.on(e, n), this
        }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n = this._callbacks["$" + e];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
            for (var r, o = 0; o < n.length; o++)
                if (r = n[o], r === t || r.fn === t) {
                    n.splice(o, 1);
                    break
                }
            return this
        }, r.prototype.emit = function(e) {
            this._callbacks = this._callbacks || {};
            var t = [].slice.call(arguments, 1),
                n = this._callbacks["$" + e];
            if (n) {
                n = n.slice(0);
                for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, t)
            }
            return this
        }, r.prototype.listeners = function(e) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
        }, r.prototype.hasListeners = function(e) {
            return !!this.listeners(e).length
        }
    },
    function(e, t) {
        t.encode = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            return t
        }, t.decode = function(e) {
            for (var t = {}, n = e.split("&"), r = 0, o = n.length; r < o; r++) {
                var i = n[r].split("=");
                t[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
            }
            return t
        }
    },
    function(e, t) {
        e.exports = function(e, t) {
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    },
    function(e, t) {
        "use strict";

        function n(e) {
            var t = "";
            do t = a[e % s] + t, e = Math.floor(e / s); while (e > 0);
            return t
        }

        function r(e) {
            var t = 0;
            for (u = 0; u < e.length; u++) t = t * s + l[e.charAt(u)];
            return t
        }

        function o() {
            var e = n(+new Date);
            return e !== i ? (c = 0, i = e) : e + "." + n(c++)
        }
        for (var i, a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), s = 64, l = {}, c = 0, u = 0; u < s; u++) l[a[u]] = u;
        o.encode = n, o.decode = r, e.exports = o
    },
    [337, 252],
    [338, 253], 218,
    function(e, t, n) {
        (function(t) {
            function r() {}

            function o(e) {
                i.call(this, e), this.query = this.query || {}, s || (t.___eio || (t.___eio = []), s = t.___eio), this.index = s.length;
                var n = this;
                s.push(function(e) {
                    n.onData(e)
                }), this.query.j = this.index, t.document && t.addEventListener && t.addEventListener("beforeunload", function() {
                    n.script && (n.script.onerror = r)
                }, !1)
            }
            var i = n(237),
                a = n(249);
            e.exports = o;
            var s, l = /\n/g,
                c = /\\n/g;
            a(o, i), o.prototype.supportsBinary = !1, o.prototype.doClose = function() {
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), i.prototype.doClose.call(this)
            }, o.prototype.doPoll = function() {
                var e = this,
                    t = document.createElement("script");
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(t) {
                    e.onError("jsonp poll error", t)
                };
                var n = document.getElementsByTagName("script")[0];
                n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), this.script = t;
                var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                r && setTimeout(function() {
                    var e = document.createElement("iframe");
                    document.body.appendChild(e), document.body.removeChild(e)
                }, 100)
            }, o.prototype.doWrite = function(e, t) {
                function n() {
                    r(), t()
                }

                function r() {
                    if (o.iframe) try {
                        o.form.removeChild(o.iframe)
                    } catch (e) {
                        o.onError("jsonp polling iframe removal error", e)
                    }
                    try {
                        var e = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                        i = document.createElement(e)
                    } catch (e) {
                        i = document.createElement("iframe"), i.name = o.iframeId, i.src = "javascript:0"
                    }
                    i.id = o.iframeId, o.form.appendChild(i), o.iframe = i
                }
                var o = this;
                if (!this.form) {
                    var i, a = document.createElement("form"),
                        s = document.createElement("textarea"),
                        u = this.iframeId = "eio_iframe_" + this.index;
                    a.className = "socketio", a.style.position = "absolute", a.style.top = "-1000px", a.style.left = "-1000px", a.target = u, a.method = "POST", a.setAttribute("accept-charset", "utf-8"), s.name = "d", a.appendChild(s), document.body.appendChild(a), this.form = a, this.area = s
                }
                this.form.action = this.uri(), r(), e = e.replace(c, "\\\n"), this.area.value = e.replace(l, "\\n");
                try {
                    this.form.submit()
                } catch (e) {}
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                    "complete" === o.iframe.readyState && n()
                } : this.iframe.onload = n
            }
        }).call(t, function() {
            return this
        }())
    },
    function(e, t, n) {
        (function(t) {
            function r(e) {
                var t = e && e.forceBase64;
                t && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = p && !e.forceNode, this.usingBrowserWebSocket || (h = o), i.call(this, e)
            }
            var o, i = n(238),
                a = n(239),
                s = n(248),
                l = n(249),
                c = n(250),
                u = n(251)("engine.io-client:websocket"),
                p = t.WebSocket || t.MozWebSocket;
            if ("undefined" == typeof window) try {
                o = n(256)
            } catch (e) {}
            var h = p;
            h || "undefined" != typeof window || (h = o), e.exports = r, l(r, i), r.prototype.name = "websocket", r.prototype.supportsBinary = !0, r.prototype.doOpen = function() {
                if (this.check()) {
                    var e = this.uri(),
                        t = void 0,
                        n = {
                            agent: this.agent,
                            perMessageDeflate: this.perMessageDeflate
                        };
                    n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
                    try {
                        this.ws = this.usingBrowserWebSocket ? new h(e) : new h(e, t, n)
                    } catch (e) {
                        return this.emit("error", e)
                    }
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
                }
            }, r.prototype.addEventListeners = function() {
                var e = this;
                this.ws.onopen = function() {
                    e.onOpen()
                }, this.ws.onclose = function() {
                    e.onClose()
                }, this.ws.onmessage = function(t) {
                    e.onData(t.data)
                }, this.ws.onerror = function(t) {
                    e.onError("websocket error", t)
                }
            }, r.prototype.write = function(e) {
                function n() {
                    r.emit("flush"), setTimeout(function() {
                        r.writable = !0, r.emit("drain")
                    }, 0)
                }
                var r = this;
                this.writable = !1;
                for (var o = e.length, i = 0, s = o; i < s; i++) ! function(e) {
                    a.encodePacket(e, r.supportsBinary, function(i) {
                        if (!r.usingBrowserWebSocket) {
                            var a = {};
                            if (e.options && (a.compress = e.options.compress), r.perMessageDeflate) {
                                var s = "string" == typeof i ? t.Buffer.byteLength(i) : i.length;
                                s < r.perMessageDeflate.threshold && (a.compress = !1)
                            }
                        }
                        try {
                            r.usingBrowserWebSocket ? r.ws.send(i) : r.ws.send(i, a)
                        } catch (e) {
                            u("websocket closed before onclose event")
                        }--o || n()
                    })
                }(e[i])
            }, r.prototype.onClose = function() {
                i.prototype.onClose.call(this)
            }, r.prototype.doClose = function() {
                "undefined" != typeof this.ws && this.ws.close()
            }, r.prototype.uri = function() {
                var e = this.query || {},
                    t = this.secure ? "wss" : "ws",
                    n = "";
                this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = c()), this.supportsBinary || (e.b64 = 1), e = s.encode(e), e.length && (e = "?" + e);
                var r = this.hostname.indexOf(":") !== -1;
                return t + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
            }, r.prototype.check = function() {
                return !(!h || "__initialize" in h && this.name === r.prototype.name)
            }
        }).call(t, function() {
            return this
        }())
    },
    function(e, t) {},
    function(e, t) {
        var n = [].indexOf;
        e.exports = function(e, t) {
            if (n) return e.indexOf(t);
            for (var r = 0; r < e.length; ++r)
                if (e[r] === t) return r;
            return -1
        }
    },
    function(e, t) {
        (function(t) {
            var n = /^[\],:{}\s]*$/,
                r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                i = /(?:^|:|,)(?:\s*\[)+/g,
                a = /^\s+/,
                s = /\s+$/;
            e.exports = function(e) {
                return "string" == typeof e && e ? (e = e.replace(a, "").replace(s, ""), t.JSON && JSON.parse ? JSON.parse(e) : n.test(e.replace(r, "@").replace(o, "]").replace(i, "")) ? new Function("return " + e)() : void 0) : null
            }
        }).call(t, function() {
            return this
        }())
    },
    function(e, t, n) {
        function r(e, t, n) {
            this.io = e, this.nsp = t, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
        }
        var o = n(219),
            i = n(260),
            a = n(261),
            s = n(262),
            l = n(263),
            c = n(216)("socket.io-client:socket"),
            u = n(264);
        e.exports = t = r;
        var p = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                connecting: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1,
                ping: 1,
                pong: 1
            },
            h = i.prototype.emit;
        i(r.prototype), r.prototype.subEvents = function() {
            if (!this.subs) {
                var e = this.io;
                this.subs = [s(e, "open", l(this, "onopen")), s(e, "packet", l(this, "onpacket")), s(e, "close", l(this, "onclose"))]
            }
        }, r.prototype.open = r.prototype.connect = function() {
            return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
        }, r.prototype.send = function() {
            var e = a(arguments);
            return e.unshift("message"), this.emit.apply(this, e), this
        }, r.prototype.emit = function(e) {
            if (p.hasOwnProperty(e)) return h.apply(this, arguments), this;
            var t = a(arguments),
                n = o.EVENT;
            u(t) && (n = o.BINARY_EVENT);
            var r = {
                type: n,
                data: t
            };
            return r.options = {}, r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (c("emitting packet with ack id %d", this.ids), this.acks[this.ids] = t.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), delete this.flags, this
        }, r.prototype.packet = function(e) {
            e.nsp = this.nsp, this.io.packet(e)
        }, r.prototype.onopen = function() {
            c("transport is open - connecting"), "/" !== this.nsp && (this.query ? this.packet({
                type: o.CONNECT,
                query: this.query
            }) : this.packet({
                type: o.CONNECT
            }))
        }, r.prototype.onclose = function(e) {
            c("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", e)
        }, r.prototype.onpacket = function(e) {
            if (e.nsp === this.nsp) switch (e.type) {
                case o.CONNECT:
                    this.onconnect();
                    break;
                case o.EVENT:
                    this.onevent(e);
                    break;
                case o.BINARY_EVENT:
                    this.onevent(e);
                    break;
                case o.ACK:
                    this.onack(e);
                    break;
                case o.BINARY_ACK:
                    this.onack(e);
                    break;
                case o.DISCONNECT:
                    this.ondisconnect();
                    break;
                case o.ERROR:
                    this.emit("error", e.data)
            }
        }, r.prototype.onevent = function(e) {
            var t = e.data || [];
            c("emitting event %j", t), null != e.id && (c("attaching ack callback to event"), t.push(this.ack(e.id))), this.connected ? h.apply(this, t) : this.receiveBuffer.push(t)
        }, r.prototype.ack = function(e) {
            var t = this,
                n = !1;
            return function() {
                if (!n) {
                    n = !0;
                    var r = a(arguments);
                    c("sending ack %j", r);
                    var i = u(r) ? o.BINARY_ACK : o.ACK;
                    t.packet({
                        type: i,
                        id: e,
                        data: r
                    })
                }
            }
        }, r.prototype.onack = function(e) {
            var t = this.acks[e.id];
            "function" == typeof t ? (c("calling ack %s with %j", e.id, e.data), t.apply(this, e.data), delete this.acks[e.id]) : c("bad ack %s", e.id)
        }, r.prototype.onconnect = function() {
            this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
        }, r.prototype.emitBuffered = function() {
            var e;
            for (e = 0; e < this.receiveBuffer.length; e++) h.apply(this, this.receiveBuffer[e]);
            for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e]);
            this.sendBuffer = []
        }, r.prototype.ondisconnect = function() {
            c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
        }, r.prototype.destroy = function() {
            if (this.subs) {
                for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
                this.subs = null
            }
            this.io.destroy(this)
        }, r.prototype.close = r.prototype.disconnect = function() {
            return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({
                type: o.DISCONNECT
            })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
        }, r.prototype.compress = function(e) {
            return this.flags = this.flags || {}, this.flags.compress = e, this
        }
    },
    247,
    function(e, t) {
        function n(e, t) {
            var n = [];
            t = t || 0;
            for (var r = t || 0; r < e.length; r++) n[r - t] = e[r];
            return n
        }
        e.exports = n
    },
    function(e, t) {
        function n(e, t, n) {
            return e.on(t, n), {
                destroy: function() {
                    e.removeListener(t, n)
                }
            }
        }
        e.exports = n
    },
    function(e, t) {
        var n = [].slice;
        e.exports = function(e, t) {
            if ("string" == typeof t && (t = e[t]), "function" != typeof t) throw new Error("bind() requires a function");
            var r = n.call(arguments, 2);
            return function() {
                return t.apply(e, r.concat(n.call(arguments)))
            }
        }
    },
    function(e, t, n) {
        (function(t) {
            function r(e) {
                function n(e) {
                    if (!e) return !1;
                    if (t.Buffer && t.Buffer.isBuffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer || t.Blob && e instanceof Blob || t.File && e instanceof File) return !0;
                    if (o(e)) {
                        for (var r = 0; r < e.length; r++)
                            if (n(e[r])) return !0
                    } else if (e && "object" == typeof e) {
                        e.toJSON && "function" == typeof e.toJSON && (e = e.toJSON());
                        for (var i in e)
                            if (Object.prototype.hasOwnProperty.call(e, i) && n(e[i])) return !0
                    }
                    return !1
                }
                return n(e)
            }
            var o = n(227);
            e.exports = r
        }).call(t, function() {
            return this
        }())
    },
    function(e, t) {
        function n(e) {
            e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
        }
        e.exports = n, n.prototype.duration = function() {
            var e = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var t = Math.random(),
                    n = Math.floor(t * this.jitter * e);
                e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
            }
            return 0 | Math.min(e, this.max)
        }, n.prototype.reset = function() {
            this.attempts = 0
        }, n.prototype.setMin = function(e) {
            this.ms = e
        }, n.prototype.setMax = function(e) {
            this.max = e
        }, n.prototype.setJitter = function(e) {
            this.jitter = e
        }
    },
    function(e, t, n) {
        "use strict";
        var r = n(187),
            o = n(267),
            i = n(269),
            a = n(275),
            s = n(279),
            l = n(280),
            c = r.createStore(r.combineReducers({
                menu: o,
                page: i,
                game: a,
                queue: s,
                chat: l
            }));
        e.exports = c
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function o(e, t) {
            switch (e = e || {}, t.type) {
                case i.ACTION_STARS:
                    var n = Object.assign({}, e.stars, t.stars);
                    return localStorage.stars = JSON.stringify(n), Object.assign({}, e, {
                        stars: n,
                        replays: [],
                        replaysFinished: !1
                    });
                case i.ACTION_RANK:
                    var o = Object.assign({}, e.rank, t.rank);
                    return localStorage.rank = JSON.stringify(o), Object.assign({}, e, {
                        rank: o
                    });
                case i.ACTION_REPLAYLIST:
                    var s = e.replays || [];
                    return Object.assign({}, e, {
                        replays: s.concat(t.data),
                        replaysFinished: !t.data.length
                    });
                case i.ACTION_LEADERBOARD:
                    var l = e.leaderboard || {};
                    return Object.assign({}, e, {
                        leaderboard: Object.assign({}, l, r({}, t.data.ladder, t.data))
                    });
                case i.ACTION_SET_2V2_TEAMMATES:
                    return Object.assign({}, e, {
                        data2v2Teammates: t.data
                    });
                case a.ACTION_REMOVE_FROM_2V2:
                    return Object.assign({}, e, {
                        showRemovedFrom2v2: !0
                    });
                case i.ACTION_CLOSE_REMOVED_FROM_2V2:
                    return Object.assign({}, e, {
                        showRemovedFrom2v2: !1
                    });
                case i.ACTION_NOTIFY_SERVER_RESTART:
                    return Object.assign({}, e, {
                        showNotifyServerRestart: !0
                    })
            }
            return e
        }
        var i = n(211),
            a = n(268);
        e.exports = o
    },
    function(e, t) {
        "use strict";

        function n() {
            return {
                type: i
            }
        }

        function r(e) {
            return Object.assign({
                type: a
            }, e)
        }

        function o() {
            return {
                type: s
            }
        }
        var i = "Queue_cancel",
            a = "Queue_update",
            s = "Queue_remove_from_2v2";
        e.exports = {
            ACTION_CANCEL: i,
            ACTION_UPDATE: a,
            ACTION_REMOVE_FROM_2V2: s,
            cancel: n,
            update: r,
            removeFrom2v2: o
        }
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            switch (e = e || s.PAGE_MAIN_MENU, t.type) {
                case o.ACTION_PLAY:
                case o.ACTION_JOIN_TEAM:
                    return s.PAGE_QUEUE;
                case a.ACTION_START:
                    return s.PAGE_GAME;
                case i.ACTION_CANCEL:
                case i.ACTION_REMOVE_FROM_2V2:
                case a.ACTION_EXIT:
                case o.ACTION_NOTIFY_SERVER_RESTART:
                    return l.changeURL("/"), s.PAGE_MAIN_MENU;
                case a.ACTION_PLAY_AGAIN:
                    return l.changeURL(t.playAgainUrl), s.PAGE_MAIN_MENU;
                case a.ACTION_INVALID_REPLAY:
                    return s.PAGE_INVALID_REPLAY
            }
            return e
        }
        var o = n(211),
            i = n(268),
            a = n(270),
            s = n(177),
            l = n(274);
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e || (y.playSound("gong.mp3"), g.notify("Game Starting!", "The game is about to begin.")), {
                type: b
            }
        }

        function o(e, t, n, r) {
            return Object.assign({
                type: T,
                isLocalGame: t,
                isTutorial: n,
                isReplay: r
            }, e)
        }

        function i(e) {
            return Object.assign({
                type: S
            }, e)
        }

        function a(e) {
            return {
                type: E,
                data: e
            }
        }

        function s(e) {
            return {
                type: A,
                data: e
            }
        }

        function l() {
            return {
                type: C
            }
        }

        function c(e) {
            return {
                type: _,
                state: e
            }
        }

        function u() {
            return {
                type: P
            }
        }

        function p() {
            return {
                type: w
            }
        }

        function h(e) {
            return {
                type: M,
                speed: e
            }
        }

        function d(e) {
            return y.playSound("ping.mp3"), {
                type: k,
                index: e
            }
        }

        function f() {
            return {
                type: x
            }
        }

        function m() {
            return {
                type: I
            }
        }

        function v(e) {
            return {
                type: N,
                playAgainUrl: e
            }
        }
        var y = n(271),
            g = n(272),
            b = "Game_prestart",
            T = "Game_start",
            S = "Game_update",
            E = "Game_lose",
            A = "Game_win",
            C = "Game_exit",
            _ = "Game_update_tutorialState",
            P = "Game_toggle_autoPlay",
            w = "Game_invalid_replay",
            M = "Game_set_autoPlay_speed",
            k = "Game_ping",
            x = "Game_clean_pings",
            I = "Game_end",
            N = "Game_play_again";
        e.exports = {
            ACTION_PRESTART: b,
            ACTION_START: T,
            ACTION_UPDATE: S,
            ACTION_LOSE: E,
            ACTION_WIN: A,
            ACTION_EXIT: C,
            ACTION_UPDATE_TUTORIAL_STATE: _,
            ACTION_TOGGLE_AUTOPLAY: P,
            ACTION_INVALID_REPLAY: w,
            ACTION_SET_AUTOPLAY_SPEED: M,
            ACTION_PING_TILE: k,
            ACTION_CLEAN_PINGS: x,
            ACTION_END: I,
            ACTION_PLAY_AGAIN: N,
            prestart: r,
            start: o,
            update: i,
            lose: a,
            win: s,
            exit: l,
            updateTutorialState: c,
            toggleAutoPlay: u,
            invalidReplay: p,
            setAutoPlaySpeed: h,
            pingTile: d,
            cleanPings: f,
            end: m,
            playAgain: v
        }
    },
    function(e, t) {
        "use strict";

        function n(e) {
            r[e] && (r[e].currentTime = 0, r[e].play())
        }
        var r = {};
        "undefined" != typeof Audio && (r["gong.mp3"] = new Audio("/gong.mp3"), r["ping.mp3"] = new Audio("/ping.mp3"), r["ping.mp3"].volume = .5), e.exports = {
            playSound: n
        }
    },
    function(e, t, n) {
        "use strict";
        var r = n(273),
            o = "undefined" != typeof Notification,
            i = {
                request: function(e) {
                    (o && "default" === Notification.permission || e && "denied" === Notification.permission) && Notification.requestPermission()
                },
                notify: function(e, t) {
                    if (o && "granted" === Notification.permission && "hidden" === r.visibility() && "no" !== localStorage.notifications) {
                        var n = new Notification(e, {
                            icon: "http://generals.io/icon.png",
                            body: t
                        });
                        n.onclick = function() {
                            window.focus(), n.close()
                        }, setTimeout(function() {
                            n.close()
                        }, 5e3)
                    }
                },
                option: function(e) {
                    return void 0 === e ? localStorage.notifications || "no" : void(localStorage.notifications = e)
                }
            };
        e.exports = i
    },
    function(e, t) {
        "use strict";

        function n() {
            a = document[o] ? "hidden" : "visible", document[o] || (s.forEach(function(e) {
                e()
            }), s = [])
        }

        function r(e) {
            document[o] ? s.push(e) : e()
        }
        var o, i, a = "visible";
        "undefined" != typeof document.hidden ? (o = "hidden", i = "visibilitychange") : "undefined" != typeof document.msHidden ? (o = "msHidden", i = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (o = "webkitHidden", i = "webkitvisibilitychange");
        var s = [];
        document.addEventListener(i, n, !1), e.exports = {
            doWhenVisible: r,
            visibility: function() {
                return a
            }
        }
    },
    function(e, t) {
        "use strict";

        function n(e) {
            if (o) {
                var t = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + e;
                o.replaceState(null, null, t)
            }
        }

        function r() {
            n(window.location.pathname)
        }
        var o;
        "undefined" != typeof window.history && (o = window.history), e.exports = {
            changeURL: n,
            removeHash: r
        }
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            switch (e = e || {
                map: new a
            }, t.type) {
                case i.ACTION_PLAY:
                    return l.isCustomGame(t.queue_id) ? Object.assign({}, e, {
                        canSpectate: !0,
                        playAgainUrl: u.relativeUrlForPrivate(t.queue_id)
                    }) : "2v2" === t.queue_id ? Object.assign({}, e, {
                        canSpectate: !1
                    }) : Object.assign({}, e, {
                        canSpectate: !1,
                        playAgainUrl: void 0
                    });
                case i.ACTION_JOIN_TEAM:
                    return Object.assign({}, e, {
                        playAgainUrl: u.relativeUrlForTeam(t.team_id)
                    });
                case o.ACTION_START:
                    return delete t.type, Object.assign({}, e, Object.assign({
                        lost: void 0,
                        won: void 0,
                        ended: void 0,
                        generals: void 0,
                        cities: void 0,
                        teams: void 0,
                        tutorialState: s.STATE_WELCOME,
                        autoPlay: !1,
                        autoPlaySpeed: 1,
                        last_map: void 0,
                        chat_room: void 0,
                        team_chat_room: void 0
                    }, t));
                case o.ACTION_UPDATE:
                    var n;
                    var x;
 t.map_diff && (t.map = a.patch(e.last_map, t.map_diff), t.last_map = t.map.concat([]), delete t.map_diff), t.cities_diff && (t.cities = a.patch(e.last_cities, t.cities_diff), t.last_cities = t.cities.concat([]), delete t.cities_diff), t.map instanceof a ? n = t.map : (n = new a, n.setToSerialized(t.map)), t.map = n, delete t.type, x = Object.assign({}, e, t);
window.ai.applyUpdate(x);
return x;
                case o.ACTION_LOSE:
                    return Object.assign({}, e, {
                        lost: !0,
                        gameOverData: t.data
                    });
                case o.ACTION_WIN:
                    return Object.assign({}, e, {
                        won: !0,
                        gameOverData: t.data
                    });
                case o.ACTION_UPDATE_TUTORIAL_STATE:
                    return Object.assign({}, e, {
                        tutorialState: t.state
                    });
                case o.ACTION_TOGGLE_AUTOPLAY:
                    return Object.assign({}, e, {
                        autoPlay: !e.autoPlay
                    });
                case o.ACTION_SET_AUTOPLAY_SPEED:
                    return Object.assign({}, e, {
                        autoPlaySpeed: t.speed
                    });
                case o.ACTION_PING_TILE:
                    var r = e.pings ? e.pings.slice() : [];
                    return r.push({
                        timestamp: Date.now(),
                        tileIndex: t.index
                    }), Object.assign({}, e, {
                        pings: r
                    });
                case o.ACTION_CLEAN_PINGS:
                    if (e.pings && e.pings.length) {
                        var r = e.pings.slice();
                        if (r = r.filter(function(e) {
                                return Date.now() - e.timestamp <= c.PING_DURATION
                            }), r.length < e.pings.length) return Object.assign({}, e, {
                            pings: r
                        })
                    }
                    return e;
                case o.ACTION_END:
                    return Object.assign({}, e, {
                        ended: !0
                    })
            }
            return e
        }
        var o = n(270),
            i = n(211),
            a = n(276),
            s = n(277),
            l = n(178),
            c = n(2),
            u = n(278);
        e.exports = r
    },
    function(e, t) {
        "use strict";

        function n(e, t, r) {
            this.width = e, this.height = t, r && (this.teams = r), this._map = [], this._armies = [];
            for (var o = 0; o < this.height; o++)
                for (var i = 0; i < this.width; i++) this._map.push(n.TILE_EMPTY), this._armies.push(0)
        }
        n.prototype.size = function() {
            return this.width * this.height
        }, n.prototype.indexFrom = function(e, t) {
            return e * this.width + t
        }, n.prototype.isAdjacent = function(e, t) {
            var n = Math.floor(e / this.width),
                r = Math.floor(e % this.width),
                o = Math.floor(t / this.width),
                i = Math.floor(t % this.width);
            return Math.abs(n - o) + Math.abs(r - i) === 1
        }, n.prototype.visibleFrom = function(e, t) {
            for (var n = Math.floor(e / this.width), r = Math.floor(e % this.width), o = -1; o <= 1; o++)
                for (var i = -1; i <= 1; i++)
                    if (!(n + o < 0 || n + o >= this.height || r + i < 0 || r + i >= this.width)) {
                        var a = this.tileAt(this.indexFrom(n + o, r + i));
                        if (a === t || this.teams && a >= 0 && this.teams[a] === this.teams[t]) return !0
                    }
            return !1
        }, n.prototype.computeVisibility = function() {
            var e = new(Uint8Array || Array)(this._map.length);
            if (void 0 === Int8Array)
                for (var t = 0; t < e.length; t++) e[t] = 0;
            var n = [];
            if (this.teams)
                for (var t = 0; t < this.teams.length; t++) {
                    n.push(1 << t);
                    for (var r = 0; r < this.teams.length; r++) t != r && this.teams[t] === this.teams[r] && (n[t] |= 1 << r)
                }
            for (var t = 0; t < this._map.length; t++) {
                var o = this.tileAt(t);
                o >= 0 && (e[t] = this.teams ? n[o] : 1 << o)
            }
            for (var i = 0; i < this.height; i++) {
                for (var t = this.indexFrom(i, 0), a = 0; a < this.width - 1; a++) e[a + t] |= e[a + t + 1];
                for (var a = this.width - 1; a > 0; a--) e[a + t] |= e[a + t - 1]
            }
            for (var i = 0; i < this.height - 1; i++)
                for (var t = this.indexFrom(i, 0), a = 0; a < this.width; a++) e[a + t] |= e[a + t + this.width];
            for (var i = this.height - 1; i > 0; i--)
                for (var t = this.indexFrom(i, 0), a = 0; a < this.width; a++) e[a + t] |= e[a + t - this.width];
            return e
        }, n.prototype.isValidTile = function(e) {
            return e >= 0 && e < this._map.length
        }, n.prototype.tileAt = function(e) {
            return this._map[e]
        }, n.prototype.armyAt = function(e) {
            return this._armies[e]
        }, n.prototype.setTile = function(e, t) {
            this._map[e] = t
        }, n.prototype.setArmy = function(e, t) {
            this._armies[e] = t
        }, n.prototype.incrementArmyAt = function(e) {
            this._armies[e]++
        }, n.prototype.serialized = function(e, t, r) {
            var o = new Array(2 + 2 * this._map.length),
                i = 2,
                a = i + this._map.length,
                s = e < 0;
            o[0] = this.width, o[1] = this.height;
            for (var l = 0; l < this._map.length; l++) s || r[l] & 1 << e ? (o[l + a] = this._map[l], o[l + i] = this._armies[l]) : (o[l + a] = this.tileAt(l) === n.TILE_MOUNTAIN ? n.TILE_FOG_OBSTACLE : n.TILE_FOG, o[l + i] = 0);
            for (var l = 0; l < t.length; l++) {
                var c = t[l];
                o[c + a] === n.TILE_FOG && (o[c + a] = n.TILE_FOG_OBSTACLE)
            }
            return o
        }, n.prototype.setToSerialized = function(e) {
            this.width = e[0], this.height = e[1], this._armies = e.splice(2, this.width * this.height), this._map = e.splice(2, this.width * this.height)
        }, n.prototype.attack = function(e, t, r, o) {
            if (!this.isValidTile(e)) return console.error("Attack has invalid start position " + e), !1;
            if (!this.isValidTile(t)) return console.error("Attack has invalid end position " + t), !1;
            if (!this.isAdjacent(e, t)) return console.error("Attack for non-adjacent tiles " + e + ", " + t), !1;
            if (this.tileAt(t) === n.TILE_MOUNTAIN) return !1;
            var i = r ? Math.ceil(this._armies[e] / 2) : 1;
            if (this.teams && this.teams[this.tileAt(e)] === this.teams[this.tileAt(t)]) this._armies[t] += this._armies[e] - i, o.indexOf(t) < 0 && this.setTile(t, this.tileAt(e));
            else {
                if (this._armies[e] <= 1) return !1;
                this.tileAt(t) === this.tileAt(e) ? this._armies[t] += this._armies[e] - i : this._armies[t] >= this._armies[e] - i ? this._armies[t] -= this._armies[e] - i : (this._armies[t] = this._armies[e] - i - this._armies[t], this.setTile(t, this.tileAt(e)))
            }
            return this._armies[e] = i, !0
        }, n.prototype.replaceAll = function(e, t, n) {
            n = n || 1;
            for (var r = 0; r < this._map.length; r++) this._map[r] === e && (this._map[r] = t, this._armies[r] = Math.round(this._armies[r] * n))
        }, n.prototype.distance = function(e, t) {
            var n = Math.floor(e / this.width),
                r = e % this.width,
                o = Math.floor(t / this.width),
                i = t % this.width;
            return Math.abs(n - o) + Math.abs(r - i)
        }, n.delta = function(e, t) {
            if (!e || e.length != t.length) return [0, t.length].concat(t);
            for (var n = [], r = !0, o = 0, i = 0; i < t.length; i++) r ? e[i] !== t[i] && (n.push(o), o = 0, r = !1) : r || e[i] === t[i] && (n.push(o), Array.prototype.push.apply(n, t.slice(i - o, i)), r = !0, o = 0), o++;
            return r && n.push(o), r || (n.push(o), Array.prototype.push.apply(n, t.slice(t.length - o))), n
        }, n.patch = function(e, t) {
            for (var n = [], r = 0; r < t.length;) t[r] && Array.prototype.push.apply(n, e.slice(n.length, n.length + t[r])), r++, r < t.length && t[r] && (Array.prototype.push.apply(n, t.slice(r + 1, r + 1 + t[r])), r += t[r]), r++;
            return n
        }, n.TILE_EMPTY = -1, n.TILE_MOUNTAIN = -2, n.TILE_FOG = -3, n.TILE_FOG_OBSTACLE = -4, e.exports = n
    },
    function(e, t) {
        "use strict";
        var n = -1,
            r = 0,
            o = 1,
            i = 2,
            a = 3,
            s = 4,
            l = 5;
        e.exports = {
            STATE_WELCOME: n,
            STATE_MOVE: r,
            STATE_WASD: i,
            STATE_DRAG: o,
            STATE_CITY: a,
            STATE_WIN: s,
            STATE_WON: l
        }
    },
    function(e, t) {
        "use strict";

        function n(e) {
            return window.location.pathname.substring(0, e.length) === e
        }

        function r(e) {
            return decodeURIComponent(window.location.pathname.substring(e.length))
        }
        var o = "/games/",
            i = "/replays/",
            a = "/teams/";
        e.exports = {
            getQueryParams: function() {
                var e = {};
                return window.location.search.replace(/([^?=&]+)(=([^&]*))?/g, function(t, n, r, o) {
                    e[n] = decodeURIComponent(o)
                }), e
            },
            isReplayURL: function() {
                return n(i)
            },
            isPrivateURL: function() {
                return n(o)
            },
            isTeamURL: function() {
                return n(a)
            },
            getReplayID: function() {
                return r(i)
            },
            getPrivateID: function() {
                return r(o)
            },
            getTeamID: function() {
                return r(a)
            },
            relativeUrlForPrivate: function(e) {
                return o + e
            },
            relativeUrlForReplay: function(e) {
                return i + e
            },
            relativeUrlForTeam: function(e) {
                return a + e
            }
        }
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            switch (e = e || {
                numPlayers: 0,
                numForce: 0
            }, t.type) {
                case o.ACTION_UPDATE:
                    var n = Object.assign({}, e, t);
                    return delete n.type, n;
                case i.ACTION_PLAY:
                    var n = Object.assign({}, e, t);
                    return delete n.type, n.prestart = !1, n.isTeamQueue = !1, n;
                case i.ACTION_JOIN_TEAM:
                    return Object.assign({}, e, {
                        prestart: !1,
                        isTeamQueue: !0,
                        team_id: t.team_id,
                        queue_id: void 0
                    });
                case a.ACTION_PRESTART:
                    return Object.assign({}, e, {
                        prestart: !0
                    })
            }
            return e
        }
        var o = n(268),
            i = n(211),
            a = n(270);
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            switch (e = e || {}, t.type) {
                case o.ACTION_MESSAGE:
                    var n = t.chat_room,
                        r = i.originalFromTeamChatRoom(n);
                    r && (n = r);
                    var a;
                    a = e[n] ? e[n] : [];
                    var s = {};
                    return s[n] = a.concat(t.data), Object.assign({}, e, s)
            }
            return e
        }
        var o = n(281),
            i = n(178);
        e.exports = r
    },
    function(e, t) {
        "use strict";

        function n(e, t) {
            return {
                type: r,
                chat_room: e,
                data: t
            }
        }
        var r = "Chat_message";
        e.exports = {
            ACTION_MESSAGE: r,
            receiveMessage: n
        }
    },
    function(e, t, n) {
        "use strict";
        e.exports = n(283)
    },
    function(e, t, n) {
        "use strict";

        function r() {
            var e = "",
                t = Math.floor(.001 * (Date.now() - d));
            return t === l ? s++ : (s = 0, l = t), e += u(c.lookup, f), e += u(c.lookup, m), s > 0 && (e += u(c.lookup, s)), e += u(c.lookup, t)
        }

        function o(t) {
            return c.seed(t), e.exports
        }

        function i(t) {
            return m = t, e.exports
        }

        function a(e) {
            return void 0 !== e && c.characters(e), c.shuffled()
        }
        var s, l, c = n(284),
            u = n(286),
            p = n(288),
            h = n(289),
            d = 1459707606518,
            f = 6,
            m = n(290) || 0;
        e.exports = r, e.exports.generate = r, e.exports.seed = o, e.exports.worker = i, e.exports.characters = a, e.exports.decode = p, e.exports.isValid = h
    },
    function(e, t, n) {
        "use strict";

        function r() {
            h = !1
        }

        function o(e) {
            if (!e) return void(u !== f && (u = f, r()));
            if (e !== u) {
                if (e.length !== f.length) throw new Error("Custom alphabet for shortid must be " + f.length + " unique characters. You submitted " + e.length + " characters: " + e);
                var t = e.split("").filter(function(e, t, n) {
                    return t !== n.lastIndexOf(e)
                });
                if (t.length) throw new Error("Custom alphabet for shortid must be " + f.length + " unique characters. These characters were not unique: " + t.join(", "));
                u = e, r()
            }
        }

        function i(e) {
            return o(e), u
        }

        function a(e) {
            d.seed(e), p !== e && (r(), p = e)
        }

        function s() {
            u || o(f);
            for (var e, t = u.split(""), n = [], r = d.nextValue(); t.length > 0;) r = d.nextValue(), e = Math.floor(r * t.length), n.push(t.splice(e, 1)[0]);
            return n.join("")
        }

        function l() {
            return h ? h : h = s()
        }

        function c(e) {
            var t = l();
            return t[e]
        }
        var u, p, h, d = n(285),
            f = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
        e.exports = {
            characters: i,
            seed: a,
            lookup: c,
            shuffled: l
        }
    },
    function(e, t) {
        "use strict";

        function n() {
            return o = (9301 * o + 49297) % 233280, o / 233280
        }

        function r(e) {
            o = e
        }
        var o = 1;
        e.exports = {
            nextValue: n,
            seed: r
        }
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n, r = 0, i = ""; !n;) i += e(t >> 4 * r & 15 | o()), n = t < Math.pow(16, r + 1), r++;
            return i
        }
        var o = n(287);
        e.exports = r
    },
    function(e, t) {
        "use strict";

        function n() {
            if (!r || !r.getRandomValues) return 48 & Math.floor(256 * Math.random());
            var e = new Uint8Array(1);
            return r.getRandomValues(e), 48 & e[0]
        }
        var r = "object" == typeof window && (window.crypto || window.msCrypto);
        e.exports = n
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            var t = o.shuffled();
            return {
                version: 15 & t.indexOf(e.substr(0, 1)),
                worker: 15 & t.indexOf(e.substr(1, 1))
            }
        }
        var o = n(284);
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            if (!e || "string" != typeof e || e.length < 6) return !1;
            for (var t = o.characters(), n = e.length, r = 0; r < n; r++)
                if (t.indexOf(e[r]) === -1) return !1;
            return !0
        }
        var o = n(284);
        e.exports = r
    },
    function(e, t) {
        "use strict";
        e.exports = 0
    },
    function(e, t) {
        "use strict";
        e.exports = function() {
            var e, t, n = Date.now();
            try {
                return (e = window.localStorage).setItem(n, n), t = e.getItem(n) == n, e.removeItem(n), t && e
            } catch (e) {}
        }() || {}
    },
    function(e, t, n) {
        "use strict";

        function r() {}

        function o(e) {
            var t = {
                    id: "player",
                    emit: y,
                    gio_username: e,
                    gio_stars: Math.max(0, Math.round(w.getState().menu.stars || 0))
                },
                n = {
                    id: "ai",
                    emit: r,
                    gio_username: "generals.io Tutorial",
                    gio_stars: 0
                };
            w.dispatch(M.prestart()), S = new _([t, n], !1, _.types.TUTORIAL), S.start(function() {
                S = null, ga("send", "event", "Tutorial", "completed"), k.completed_tutorial = !0
            }, !0)
        }

        function i() {
            return S && S.type === _.types.TUTORIAL ? void(S.tutorialCityCaptureEnabled = !0) : void console.error("enableTutorialCityCapture() called for invalid localGame", S)
        }

        function a(e) {
            var t = P.deserialize(e);
            if (!t) return void w.dispatch(M.invalidReplay());
            var n = 0,
                r = x.getQueryParams(),
                o = parseInt(r.t);
            Number.isInteger(o) && o > 0 && (n = 2 * o), s(t, n)
        }

        function s(e, t) {
            var n = _.createFromReplay(e);
            w.dispatch(M.prestart(!0)), w.dispatch(M.start({
                playerIndex: null,
                replay_id: e.id,
                usernames: e.usernames,
                stars: e.stars,
                teams: e.teams
            }, !0, !1, !0)), S = n, E = e, A = 0, C = 0, m(t), l()
        }

        function l() {
            I || (I = !0, c())
        }

        function c() {
            w.getState().game.autoPlay && p(), I && setTimeout(c, 500 / w.getState().game.autoPlaySpeed)
        }

        function u() {
            I = !1
        }

        function p(e) {
            if (!e) {
                var t = Date.now();
                if (t - N < 40) return;
                N = t
            }
            if (!S.isOver()) {
                for (; E.moves.length > A && E.moves[A].turn <= S.turn;) {
                    var n = E.moves[A++];
                    S.handleAttack(n.index, n.start, n.end, n.is50)
                }
                for (; E.afks.length > C && E.afks[C].turn <= S.turn;) {
                    var r = E.afks[C++],
                        o = r.index;
                    S.deaths.indexOf(S.sockets[o]) >= 0 ? S.tryNeutralizePlayer(o) : (S.deaths.push(S.sockets[o]), S.alivePlayers--)
                }
                S.update(!0), e || h()
            }
        }

        function h() {
            S.recalculateScores(), w.dispatch(M.update({
                turn: S.turn,
                scores: S.scores,
                cities: S.cities,
                generals: S.generals,
                map: S.map
            }))
        }

        function d() {
            var e = Date.now();
            e - O < 250 || (O = e, s(E, Math.max(0, S.turn - 20)))
        }

        function f(e) {
            var t = 2 * e;
            t < S.turn ? s(E, Math.max(0, t)) : t > S.turn && m(t - S.turn)
        }

        function m(e) {
            for (var t = 0; t < e; t++) p(!0);
            h()
        }

        function v() {
            u(), S = null, E = null
        }

        function y(e, t) {
            switch (e) {
                case "game_start":
                    w.dispatch(M.start(t, !0, !0));
                    break;
                case "game_update":
                    w.dispatch(M.update(t));
                    break;
                case "game_won":
                    w.dispatch(M.win(t));
                    break;
                case "game_lost":
                    console.error("ERROR: Lost tutorial game?")
            }
        }

        function g(e, t, n, r) {
            S && S.bufferAttack(S.sockets[0].id, e, t, n, r)
        }

        function b() {
            S.undoMove(S.sockets[0].id)
        }

        function T() {
            S.clearMoves(S.sockets[0].id)
        }
        var S, E, A, C, _ = n(293),
            P = n(294),
            w = n(266),
            M = n(270),
            k = n(291),
            x = (n(274), n(278)),
            I = !1,
            N = Date.now(),
            O = Date.now();
        e.exports = {
            startLocalTutorial: o,
            enableTutorialCityCapture: i,
            startReplay: a,
            handleAttack: g,
            handleUndoMove: b,
            handleClearMoves: T,
            nextReplayTurn: p,
            backReplay: d,
            exitReplay: v,
            jumpToTurn: f
        }
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n, o, i, s) {
            if (e) {
                this.sockets = e, this.type = n || r.types.CLASSIC, this.options = i || {}, this.teams = s, this.turn = 0, this.alivePlayers = e.length, this.ranked = t, this.leftSockets = [], this.inputBuffer = [], this.scores = [], this.startTime = Date.now(), this.chat_room = "game_" + this.startTime + e[0].id, this.attackIndices = [], this.deaths = [];
                for (var u = 0; u < e.length; u++) this.inputBuffer.push([]), this.scores.push({
                    total: 1,
                    tiles: 1
                }), c || (e[u].join(this.chat_room), l.hasDuplicate(this.teams) && e[u].join(l.chatRoomForTeam(this, this.teams[u]))), this.attackIndices.push(0);
                if (!o) {
                    for (var p = !1; !p || !this.validateGame();) p = this.tryInitializeGame(e);
                    this.replay = new a(this)
                }
            }
        }

        function o(e, t) {
            return e - t
        }
        var i = n(276),
            a = n(294),
            s = n(2),
            l = n(178),
            c = n(300),
            u = -1;
        r.prototype.addMountain = function(e) {
            this.map.setTile(e, i.TILE_MOUNTAIN)
        }, r.prototype.addCity = function(e, t) {
            this.cities.push(e), this.map.setArmy(e, t)
        }, r.prototype.addGeneral = function(e) {
            this.generals.push(e), this.map.setTile(e, this.generals.length - 1), this.map.setArmy(e, 1)
        }, r.types = {
            CLASSIC: "classic",
            CUSTOM: "custom",
            "1v1": "1v1",
            TUTORIAL: "tutorial",
            REPLAY: "replay",
            "2v2": "2v2"
        }, r.createFromReplay = function(e) {
            var t = e.generals.map(function(t, n) {
                    return {
                        emit: function() {},
                        gio_username: e.usernames[n],
                        gio_stars: e.stars ? e.stars[n] || 0 : ""
                    }
                }),
                n = a.options(e.version),
                o = new r(t, !1, r.types.REPLAY, !0, n, e.teams);
            o.cities = [], o.generals = [], o.map = new i(e.mapWidth, e.mapHeight, e.teams);
            for (var s = 0; s < e.mountains.length; s++) o.addMountain(e.mountains[s]);
            for (var s = 0; s < e.cities.length; s++) o.addCity(e.cities[s], e.cityArmies[s]);
            for (var s = 0; s < e.generals.length; s++) o.addGeneral(e.generals[s]);
            return o
        }, r.prototype.tryInitializeGame = function(e) {
            if (this.type === r.types.TUTORIAL) return this.initializeTutorial(), !0;
            var t = 16 + e.length,
                n = Math.round(t + Math.pow(Math.random(), 2) * (4 + e.length / 2)),
                o = Math.round(t + Math.pow(Math.random(), 2) * (4 + e.length / 2)),
                a = Math.round(5 + e.length * (2 + Math.random())),
                c = s.MIN_GENERAL_SPACING * (1.8 - .1 * e.length);
            this.map = new i(n, o, this.teams);
            var u = this.map.size();
            if (this.generals = [], this.teams && l.hasDuplicate(this.teams)) {
                for (var p, h = 0;;) {
                    h++, p = [];
                    for (var d = 0; d < e.length; d++) p.push(Math.floor(Math.random() * u));
                    for (var f = !1, m = p.map(function() {
                            return 1 / 0
                        }), d = 0; d < p.length; d++) {
                        for (var v = 0; v < d; v++)
                            if (this.teams[d] === this.teams[v]) {
                                var y = this.map.distance(p[d], p[v]);
                                if (y < s.MIN_ALLY_SPACING) {
                                    f = !0;
                                    break
                                }
                                m[d] = Math.min(y, m[d]), m[v] = Math.min(y, m[v])
                            }
                        if (f) break
                    }
                    for (var d = 0; d < m.length; d++)
                        if (m[d] < 1 / 0 && m[d] > s.MAX_ALLY_SPACING) {
                            f = !0;
                            break
                        }
                    if (!f) break
                }
                for (var d = 0; d < e.length; d++) this.addGeneral(p[d])
            } else
                for (var d = 0; d < e.length; d++) {
                    for (var g, b = !1, h = 0; !b;) {
                        if (h++, h > 5e3) return !1;
                        g = Math.floor(Math.random() * u), b = !0;
                        for (var v = 0; v < this.generals.length; v++)
                            if (this.map.distance(this.generals[v], g) <= c) {
                                b = !1;
                                break
                            }
                    }
                    this.addGeneral(g)
                }
            this.cities = [];
            for (var d = 0; d < a; d++) {
                var T = Math.floor(Math.random() * u);
                if (this.hasCityOrGeneral(T)) d--;
                else {
                    var S = s.MIN_CITY_ARMY,
                        E = s.MAX_CITY_ARMY;
                    this.addCity(T, Math.round(S + Math.random() * (E - S)))
                }
            }
            for (var A = u * (.2 + .08 * Math.random()), d = 0; d < A; d++) {
                var T = Math.floor(Math.random() * u);
                this.hasCityOrGeneral(T) ? d-- : this.addMountain(T)
            }
            return !0
        }, r.prototype.initializeTutorial = function() {
            var e = 10,
                t = 10;
            this.map = new i(e, t), this.generals = [], this.addGeneral(35), this.addGeneral(65), this.map.setArmy(35, 150), this.map.setTile(64, 1), this.map.setTile(66, 1), this.map.setTile(75, 1), this.map.setTile(74, 1), this.map.setTile(76, 1), this.map.setTile(85, 1), this.map.setTile(84, 1), this.map.setTile(86, 1), this.cities = [], this.addCity(46, 40), this.addMountain(55);
            for (var n = 0; n < 20; n++) this.addMountain(n)
        }, r.prototype.hasCityOrGeneral = function(e) {
            return this.cities.indexOf(e) >= 0 || this.map.tileAt(e) >= 0
        }, r.prototype.validateGame = function() {
            if (!this.map || !this.generals) return !1;
            if (this.type === r.types.TUTORIAL) return !0;
            for (var e = 0; e < this.generals.length; e++)
                for (var t = 0; t < e; t++)
                    if ((!this.teams || this.teams[e] !== this.teams[t]) && this.map.distance(this.generals[e], this.generals[t]) <= s.MIN_GENERAL_SPACING) return !1;
            if (l.hasDuplicate(this.cities.concat(this.generals))) return console.error("General/City spawn overlap!", this.generals.concat(this.cities).sort()), !1;
            for (var n = this.generals.map(function() {
                    return 0
                }), e = 0; e < this.cities.length; e++)
                for (var t = 0; t < this.generals.length; t++) this.map.distance(this.cities[e], this.generals[t]) <= s.CLOSE_CITY_DISTANCE && n[t]++;
            if (n = n.sort(o), n[0] < 1) return !1;
            for (var e = 0; e < this.generals.length - 1; e++)
                if (!this.isReachable(this.generals[e], this.generals[e + 1])) return !1;
            return !0
        }, r.prototype.isReachable = function(e, t) {
            var n = this.map;
            if (n.tileAt(e) === i.TILE_MOUNTAIN || n.tileAt(t) === i.TILE_MOUNTAIN) return !1;
            var r = [],
                o = [e];
            r[e] = !0;
            for (var a = this, s = function(e, s) {
                    var l = n.indexFrom(e, s);
                    e >= 0 && e < n.height && s >= 0 && s < n.width && (n.tileAt(l) === i.TILE_EMPTY || l === t) && a.cities.indexOf(l) < 0 && !r[l] && (r[l] = !0, o.push(l))
                }; o.length;) {
                var l = o.shift();
                if (l === t) return !0;
                var c = Math.floor(l / n.width),
                    u = Math.floor(l % n.width);
                s(c - 1, u), s(c + 1, u), s(c, u - 1), s(c, u + 1)
            }
            return !1
        }, r.prototype.start = function(e, t) {
            var n = this;
            setTimeout(function() {
                var t = n.sockets.map(function(e) {
                    return e.gio_username
                });
                return n.sockets.forEach(function(e, r) {
                    e.emit("game_start", {
                        playerIndex: r,
                        replay_id: n.replay.id,
                        chat_room: n.chat_room,
                        team_chat_room: l.hasDuplicate(n.teams) ? l.chatRoomForTeam(n, n.teams[r]) : void 0,
                        usernames: t,
                        teams: n.teams
                    })
                }), n.update() ? void e() : void(n.setIntervalReturn = setInterval(function() {
                    if (n.update()) {
                        clearInterval(n.setIntervalReturn), e();
                        for (var t = n.sockets.filter(function(e) {
                                return n.leftSockets.indexOf(e) < 0
                            }), r = 0; r < t.length; r++) t[r].emit("game_over")
                    }
                }, 500))
            }, t ? 0 : s.PRE_GAME_START_DELAY)
        }, r.prototype.update = function(e) {
            for (var t = 0; t < this.sockets.length; t++) {
                if (this.options.old_priority)
                    if (this.options.priority_cycle) var n = (t + this.turn) % this.sockets.length;
                    else if (this.options.priority_reversed) var n = this.sockets.length - 1 - t;
                else var n = t;
                else var n = this.turn % 2 === 0 ? t : this.sockets.length - 1 - t;
                for (; this.inputBuffer[n].length;) {
                    var r = this.inputBuffer[n].splice(0, 1)[0];
                    if (this.handleAttack(n, r[0], r[1], r[2], r[3]) !== !1) {
                        c || this.replay.addMove(n, r[0], r[1], r[2], this.turn);
                        break
                    }
                }
            }
            if (this.turn++, this.turn % s.RECRUIT_RATE === 0) {
                for (var n = 0; n < this.generals.length; n++) this.map.incrementArmyAt(this.generals[n]);
                for (var n = 0; n < this.cities.length; n++)(this.map.tileAt(this.cities[n]) >= 0 || this.map.armyAt(this.cities[n]) < s.MIN_CITY_ARMY) && this.map.incrementArmyAt(this.cities[n])
            }
            if (this.turn % s.FARM_RATE === 0)
                for (var o = this.map.size(), n = 0; n < o; n++) this.map.tileAt(n) >= 0 && this.map.incrementArmyAt(n);
            if (!e) {
                this.recalculateScores();
                var i = {
                    scores: this.scores,
                    turn: this.turn
                };
                if (!this.starsCompleted || this.starsCompleted < this.sockets.length) {
                    this.stars = [], this.starsCompleted = 0;
                    for (var n = 0; n < this.sockets.length; n++) this.sockets[n].hasOwnProperty("gio_stars") ? (this.starsCompleted++, this.stars.push(this.sockets[n].gio_stars)) : this.stars.push(null);
                    this.starsCompleted === this.sockets.length && (this.replay.stars = this.stars), i.stars = this.stars
                }
                var a = this.map.computeVisibility();
                this.sockets.forEach(this.sendGameUpdate.bind(this, i, a));
                var l = this.isOver();
                if (l) {
                    for (var n = 0; n < l.length; n++) {
                        var u = l[n];
                        this.deaths.indexOf(u) >= 0 || (this.deaths.push(u), u.emit("game_won"))
                    }
                    if (!c) {
                        var p = l.reduce(function(e, t, n) {
                            return n === l.length - 1 ? e + t.gio_username : e + t.gio_username + ", "
                        }, "");
                        io.to(this.chat_room).emit("chat_message", this.chat_room, {
                            text: this.teams ? "The team with [" + p + "] wins!" : p + " wins!"
                        })
                    }
                    return !0
                }
            }
        }, r.prototype.isOver = function() {
            if (this.teams || 1 !== this.alivePlayers) {
                if (this.teams) {
                    for (var e = void 0, t = 0; t < this.generals.length; t++)
                        if (this.deaths.indexOf(this.sockets[t]) < 0)
                            if (void 0 === e) e = this.teams[t];
                            else if (this.teams[t] !== e) return;
                    if (void 0 !== e) {
                        var n = this;
                        return this.winners = this.sockets.filter(function(t, r) {
                            return n.teams[r] === e
                        }), this.winners
                    }
                }
            } else
                for (var t = 0; t < this.generals.length; t++)
                    if (this.deaths.indexOf(this.sockets[t]) < 0) return this.winners = [this.sockets[t]], this.winners
        }, r.prototype.sendGameUpdate = function(e, t, n, o) {
            if (!(this.leftSockets.indexOf(n) >= 0)) {
                e.attackIndex = this.attackIndices[o];
                var a = this.type === r.types.CUSTOM && this.deaths.indexOf(n) >= 0;
                e.map = this.map.serialized(a ? -1 : o, this.cities, t);
                var s = function(e) {
                        return a || t[e] & 1 << o
                    },
                    l = function(e) {
                        return a || t[e] & 1 << o ? e : -1
                    };
                e.cities = this.cities.filter(s), e.generals = this.generals.map(l), e.map_diff = i.delta(n.last_map, e.map), n.last_map = e.map, delete e.map, e.cities_diff = i.delta(n.last_cities, e.cities), n.last_cities = e.cities, delete e.cities, n.emit("game_update", e)
            }
        }, r.prototype.recalculateScores = function() {
            for (var e = 0; e < this.sockets.length; e++) this.scores[e].i = e, this.scores[e].total = 0, this.scores[e].tiles = 0, this.scores[e].dead = this.deaths.indexOf(this.sockets[e]) >= 0;
            for (var e = 0; e < this.map.size(); e++) {
                var t = this.map.tileAt(e);
                t >= 0 && (this.scores[t].total += this.map.armyAt(e), this.scores[t].tiles++)
            }
            var n = this;
            this.scores.sort(function(e, t) {
                return e.dead && !t.dead ? 1 : t.dead && !e.dead ? -1 : e.dead && t.dead ? n.deaths.indexOf(n.sockets[t.i]) - n.deaths.indexOf(n.sockets[e.i]) : t.total === e.total ? t.tiles - e.tiles : t.total - e.total
            })
        }, r.prototype.indexOfSocketID = function(e) {
            for (var t = -1, n = 0; n < this.sockets.length; n++)
                if (this.sockets[n].id == e) {
                    t = n;
                    break
                }
            return t
        }, r.prototype.bufferAttack = function(e, t, n, r, o) {
            var i = this.indexOfSocketID(e);
            return i < 0 ? void console.error("Client Input for socket_id not in game: " + e) : void this.inputBuffer[i].push([t, n, r, o])
        }, r.prototype.handleAttack = function(e, t, n, o, i) {
            if (this.attackIndices[e] = Math.max(this.attackIndices[e], i), this.map.tileAt(t) !== e) return !1;
            if (this.type === r.types.TUTORIAL && this.cities.indexOf(n) >= 0 && !this.tutorialCityCaptureEnabled) return !1;
            var a = this.map.tileAt(n),
                s = this.map.attack(t, n, o, this.generals);
            if (!s) return !1;
            var l = this.map.tileAt(n),
                p = this.generals.indexOf(n);
            if (l !== a && p >= 0) {
                this.map.replaceAll(a, l, .5);
                var h = this.sockets[a];
                this.deaths.indexOf(h) < 0 && (this.deaths.push(h), this.alivePlayers--, h.emit("game_lost", {
                    killer: l
                })), this.cities.push(n), this.generals[p] = u, c || io.to(this.chat_room).emit("chat_message", this.chat_room, {
                    text: this.sockets[l].gio_username + " captured " + this.sockets[p].gio_username + "."
                })
            }
        }, r.prototype.handlePingTile = function(e, t) {
            if (this.teams) {
                var n = this.indexOfSocketID(e);
                if (n < 0) return void console.error("Ping for socket_id not in game: " + e);
                var r = this.leftSockets,
                    o = this.teams,
                    i = this.sockets.filter(function(e, t) {
                        return r.indexOf(e) < 0 && n !== t && o[n] === o[t]
                    });
                i.forEach(function(e) {
                    e.emit("ping_tile", t)
                })
            }
        }, r.prototype.undoMove = function(e) {
            var t = this.indexOfSocketID(e);
            return t < 0 ? void console.error("Client Input for socket_id not in game: " + e) : void(this.inputBuffer[t].length > 0 && (this.inputBuffer[t] = this.inputBuffer[t].slice(0, -1)))
        }, r.prototype.clearMoves = function(e) {
            var t = this.indexOfSocketID(e);
            return t < 0 ? void console.error("Client Input for socket_id not in game: " + e) : void(this.inputBuffer[t] = [])
        }, r.prototype.handleQuit = function(e) {
            var t = this.indexOfSocketID(e);
            if (t < 0) return void console.error("Trying to handleQuit() for socket not in game.");
            if (c || io.to(this.chat_room).emit("chat_message", this.chat_room, {
                    text: this.sockets[t].gio_username + " quit."
                }), this.generals[t] !== u) {
                this.deaths.push(this.sockets[t]), this.alivePlayers--, this.replay.addAFK(t, this.turn);
                var n = this;
                setTimeout(function() {
                    n.tryNeutralizePlayer(t)
                }, s.TIMEOUT_CAPTURE_AFK)
            }
        }, r.prototype.aliveTeammate = function(e) {
            if (this.teams)
                for (var t = 0; t < this.sockets.length; t++)
                    if (this.teams[t] === this.teams[e] && this.deaths.indexOf(this.sockets[t]) < 0) return t
        }, r.prototype.tryNeutralizePlayer = function(e) {
            var t = this.generals[e];
            this.generals[e] = u;
            var n = this.aliveTeammate(e),
                r = Number.isInteger(n) ? n : i.TILE_EMPTY;
            this.map.tileAt(t) === e && (this.map.replaceAll(e, r), this.cities.push(t), c || this.replay.addAFK(e, this.turn))
        }, r.prototype.handleLeave = function(e) {
            var t = this.sockets[this.indexOfSocketID(e)];
            delete t.gio_stars, t.leave(this.chat_room), this.leftSockets.push(t), c || io.to(this.chat_room).emit("chat_message", this.chat_room, {
                text: t.gio_username + " left."
            })
        }, r.prototype.getMetadata = function() {
            for (var e = [], t = this.deaths.length - 1; t >= 0; t--) {
                var n = this.deaths[t];
                e.push({
                    id: n.gio_user_id,
                    name: n.gio_username,
                    stars: this.stars[this.sockets.indexOf(n)]
                })
            }
            return {
                type: this.type,
                id: this.replay.id,
                started: this.startTime,
                turns: this.turn,
                ranking: e
            }
        }, e.exports = r
    },
    function(e, t, n) {
        (function(t) {
            "use strict";

            function r(e) {
                if (e) {
                    this.id = u(), this.mapWidth = e.map.width, this.mapHeight = e.map.height, this.usernames = e.sockets.map(function(e) {
                        return e.gio_username
                    }), this.cities = e.cities.slice(), this.cityArmies = e.cities.map(function(t) {
                        return e.map.armyAt(t)
                    }), this.generals = e.generals.slice(), this.mountains = [];
                    for (var t = 0; t < e.map.size(); t++) e.map.tileAt(t) === l.TILE_MOUNTAIN && this.mountains.push(t);
                    this.teams = e.teams || null, this.moves = [], this.afks = []
                }
            }

            function o(e) {
                return [e.index, e.start, e.end, e.is50 ? 1 : 0, e.turn]
            }

            function i(e) {
                return {
                    index: e[0],
                    start: e[1],
                    end: e[2],
                    is50: e[3],
                    turn: e[4]
                }
            }

            function a(e) {
                return [e.index, e.turn]
            }

            function s(e) {
                return {
                    index: e[0],
                    turn: e[1]
                }
            }
            var l = n(276),
                c = n(299),
                u = n(282),
                p = 5,
                h = {
                    REPLAY_VERSION_1: {
                        old_priority: !0
                    },
                    REPLAY_VERSION_2: {
                        old_priority: !0
                    },
                    REPLAY_VERSION_3: {
                        old_priority: !0
                    },
                    REPLAY_VERSION_4: {
                        old_priority: !0,
                        priority_cycle: !0
                    },
                    REPLAY_VERSION_5: {
                        old_priority: !0,
                        priority_reversed: !0
                    },
                    REPLAY_VERSION_6: {}
                };
            r.prototype.addMove = function(e, t, n, r, o) {
                this.moves.push({
                    index: e,
                    start: t,
                    end: n,
                    is50: r,
                    turn: o
                })
            }, r.prototype.addAFK = function(e, t) {
                this.afks.push({
                    index: e,
                    turn: t
                })
            }, r.prototype.serialize = function() {
                var e = this.moves.map(o),
                    n = this.afks.map(a);
                return new t(c.compressToUint8Array(JSON.stringify([p, this.id, this.mapWidth, this.mapHeight, this.usernames, this.stars, this.cities, this.cityArmies, this.generals, this.mountains, e, n, this.teams])))
            }, r.deserialize = function(e) {
                try {
                    var t = JSON.parse(c.decompressFromUint8Array(new Uint8Array(e)))
                } catch (e) {
                    return
                }
                if (t) {
                    var n = new r,
                        o = 0;
                    return n.version = t[o++], n.id = t[o++], n.mapWidth = t[o++], n.mapHeight = t[o++], n.usernames = t[o++], n.stars = t[o++], n.cities = t[o++], n.cityArmies = t[o++], n.generals = t[o++], n.mountains = t[o++], n.moves = t[o++].map(i), n.afks = t[o++].map(s), n.teams = t[o++], n
                }
            }, r.options = function(e) {
                return h[e] || {}
            }, e.exports = r
        }).call(t, n(295).Buffer)
    },
    function(e, t, n) {
        (function(e, r) {
            "use strict";

            function o() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }

            function i() {
                return e.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function a(t, n) {
                if (i() < n) throw new RangeError("Invalid typed array length");
                return e.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(n), t.__proto__ = e.prototype) : (null === t && (t = new e(n)), t.length = n), t
            }

            function e(t, n, r) {
                if (!(e.TYPED_ARRAY_SUPPORT || this instanceof e)) return new e(t, n, r);
                if ("number" == typeof t) {
                    if ("string" == typeof n) throw new Error("If encoding is specified then the first argument must be a string");
                    return u(this, t)
                }
                return s(this, t, n, r)
            }

            function s(e, t, n, r) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? d(e, t, n, r) : "string" == typeof t ? p(e, t, n) : f(e, t)
            }

            function l(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function c(e, t, n, r) {
                return l(t), t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof r ? a(e, t).fill(n, r) : a(e, t).fill(n) : a(e, t)
            }

            function u(t, n) {
                if (l(n), t = a(t, n < 0 ? 0 : 0 | m(n)), !e.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < n; ++r) t[r] = 0;
                return t
            }

            function p(t, n, r) {
                if ("string" == typeof r && "" !== r || (r = "utf8"), !e.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var o = 0 | y(n, r);
                t = a(t, o);
                var i = t.write(n, r);
                return i !== o && (t = t.slice(0, i)), t
            }

            function h(e, t) {
                var n = t.length < 0 ? 0 : 0 | m(t.length);
                e = a(e, n);
                for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                return e
            }

            function d(t, n, r, o) {
                if (n.byteLength, r < 0 || n.byteLength < r) throw new RangeError("'offset' is out of bounds");
                if (n.byteLength < r + (o || 0)) throw new RangeError("'length' is out of bounds");
                return n = void 0 === r && void 0 === o ? new Uint8Array(n) : void 0 === o ? new Uint8Array(n, r) : new Uint8Array(n, r, o), e.TYPED_ARRAY_SUPPORT ? (t = n, t.__proto__ = e.prototype) : t = h(t, n), t
            }

            function f(t, n) {
                if (e.isBuffer(n)) {
                    var r = 0 | m(n.length);
                    return t = a(t, r), 0 === t.length ? t : (n.copy(t, 0, 0, r), t)
                }
                if (n) {
                    if ("undefined" != typeof ArrayBuffer && n.buffer instanceof ArrayBuffer || "length" in n) return "number" != typeof n.length || Q(n.length) ? a(t, 0) : h(t, n);
                    if ("Buffer" === n.type && $(n.data)) return h(t, n.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function m(e) {
                if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                return 0 | e
            }

            function v(t) {
                return +t != t && (t = 0), e.alloc(+t)
            }

            function y(t, n) {
                if (e.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var r = t.length;
                if (0 === r) return 0;
                for (var o = !1;;) switch (n) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return q(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return X(t).length;
                    default:
                        if (o) return q(t).length;
                        n = ("" + n).toLowerCase(), o = !0
                }
            }

            function g(e, t, n) {
                var r = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if (n >>>= 0, t >>>= 0, n <= t) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return O(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return k(this, t, n);
                    case "ascii":
                        return I(this, t, n);
                    case "latin1":
                    case "binary":
                        return N(this, t, n);
                    case "base64":
                        return M(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return R(this, t, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), r = !0
                }
            }

            function b(e, t, n) {
                var r = e[t];
                e[t] = e[n], e[n] = r
            }

            function T(t, n, r, o, i) {
                if (0 === t.length) return -1;
                if ("string" == typeof r ? (o = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (i) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof n && (n = e.from(n, o)), e.isBuffer(n)) return 0 === n.length ? -1 : S(t, n, r, o, i);
                if ("number" == typeof n) return n &= 255, e.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, n, r) : Uint8Array.prototype.lastIndexOf.call(t, n, r) : S(t, [n], r, o, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function S(e, t, n, r, o) {
                function i(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }
                var a = 1,
                    s = e.length,
                    l = t.length;
                if (void 0 !== r && (r = String(r).toLowerCase(), "ucs2" === r || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, s /= 2, l /= 2, n /= 2
                }
                var c;
                if (o) {
                    var u = -1;
                    for (c = n; c < s; c++)
                        if (i(e, c) === i(t, u === -1 ? 0 : c - u)) {
                            if (u === -1 && (u = c), c - u + 1 === l) return u * a
                        } else u !== -1 && (c -= c - u), u = -1
                } else
                    for (n + l > s && (n = s - l), c = n; c >= 0; c--) {
                        for (var p = !0, h = 0; h < l; h++)
                            if (i(e, c + h) !== i(t, h)) {
                                p = !1;
                                break
                            }
                        if (p) return c
                    }
                return -1
            }

            function E(e, t, n, r) {
                n = Number(n) || 0;
                var o = e.length - n;
                r ? (r = Number(r), r > o && (r = o)) : r = o;
                var i = t.length;
                if (i % 2 !== 0) throw new TypeError("Invalid hex string");
                r > i / 2 && (r = i / 2);
                for (var a = 0; a < r; ++a) {
                    var s = parseInt(t.substr(2 * a, 2), 16);
                    if (isNaN(s)) return a;
                    e[n + a] = s
                }
                return a
            }

            function A(e, t, n, r) {
                return z(q(t, e.length - n), e, n, r)
            }

            function C(e, t, n, r) {
                return z(K(t), e, n, r)
            }

            function _(e, t, n, r) {
                return C(e, t, n, r)
            }

            function P(e, t, n, r) {
                return z(X(t), e, n, r)
            }

            function w(e, t, n, r) {
                return z(Y(t, e.length - n), e, n, r)
            }

            function M(e, t, n) {
                return 0 === t && n === e.length ? J.fromByteArray(e) : J.fromByteArray(e.slice(t, n))
            }

            function k(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], o = t; o < n;) {
                    var i = e[o],
                        a = null,
                        s = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (o + s <= n) {
                        var l, c, u, p;
                        switch (s) {
                            case 1:
                                i < 128 && (a = i);
                                break;
                            case 2:
                                l = e[o + 1], 128 === (192 & l) && (p = (31 & i) << 6 | 63 & l, p > 127 && (a = p));
                                break;
                            case 3:
                                l = e[o + 1], c = e[o + 2], 128 === (192 & l) && 128 === (192 & c) && (p = (15 & i) << 12 | (63 & l) << 6 | 63 & c, p > 2047 && (p < 55296 || p > 57343) && (a = p));
                                break;
                            case 4:
                                l = e[o + 1], c = e[o + 2], u = e[o + 3], 128 === (192 & l) && 128 === (192 & c) && 128 === (192 & u) && (p = (15 & i) << 18 | (63 & l) << 12 | (63 & c) << 6 | 63 & u, p > 65535 && p < 1114112 && (a = p))
                        }
                    }
                    null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), r.push(a), o += s
                }
                return x(r)
            }

            function x(e) {
                var t = e.length;
                if (t <= ee) return String.fromCharCode.apply(String, e);
                for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += ee));
                return n
            }

            function I(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
                return r
            }

            function N(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
                return r
            }

            function O(e, t, n) {
                var r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                for (var o = "", i = t; i < n; ++i) o += W(e[i]);
                return o
            }

            function R(e, t, n) {
                for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                return o
            }

            function D(e, t, n) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function B(t, n, r, o, i, a) {
                if (!e.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (n > i || n < a) throw new RangeError('"value" argument is out of bounds');
                if (r + o > t.length) throw new RangeError("Index out of range")
            }

            function G(e, t, n, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o) e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
            }

            function L(e, t, n, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o) e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255
            }

            function H(e, t, n, r, o, i) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function U(e, t, n, r, o) {
                return o || H(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Z.write(e, t, n, r, 23, 4), n + 4
            }

            function F(e, t, n, r, o) {
                return o || H(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Z.write(e, t, n, r, 52, 8), n + 8
            }

            function V(e) {
                if (e = j(e).replace(te, ""), e.length < 2) return "";
                for (; e.length % 4 !== 0;) e += "=";
                return e
            }

            function j(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function W(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function q(e, t) {
                t = t || 1 / 0;
                for (var n, r = e.length, o = null, i = [], a = 0; a < r; ++a) {
                    if (n = e.charCodeAt(a), n > 55295 && n < 57344) {
                        if (!o) {
                            if (n > 56319) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === r) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && i.push(239, 191, 189), o = n;
                            continue
                        }
                        n = (o - 55296 << 10 | n - 56320) + 65536
                    } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        i.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        i.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return i
            }

            function K(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }

            function Y(e, t) {
                for (var n, r, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, o = n % 256, i.push(o), i.push(r);
                return i
            }

            function X(e) {
                return J.toByteArray(V(e))
            }

            function z(e, t, n, r) {
                for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
                return o
            }

            function Q(e) {
                return e !== e
            }
            var J = n(296),
                Z = n(297),
                $ = n(298);
            t.Buffer = e, t.SlowBuffer = v, t.INSPECT_MAX_BYTES = 50, e.TYPED_ARRAY_SUPPORT = void 0 !== r.TYPED_ARRAY_SUPPORT ? r.TYPED_ARRAY_SUPPORT : o(), t.kMaxLength = i(), e.poolSize = 8192, e._augment = function(t) {
                return t.__proto__ = e.prototype, t
            }, e.from = function(e, t, n) {
                return s(null, e, t, n)
            }, e.TYPED_ARRAY_SUPPORT && (e.prototype.__proto__ = Uint8Array.prototype, e.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && e[Symbol.species] === e && Object.defineProperty(e, Symbol.species, {
                value: null,
                configurable: !0
            })), e.alloc = function(e, t, n) {
                return c(null, e, t, n)
            }, e.allocUnsafe = function(e) {
                return u(null, e)
            }, e.allocUnsafeSlow = function(e) {
                return u(null, e)
            }, e.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, e.compare = function(t, n) {
                if (!e.isBuffer(t) || !e.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
                if (t === n) return 0;
                for (var r = t.length, o = n.length, i = 0, a = Math.min(r, o); i < a; ++i)
                    if (t[i] !== n[i]) {
                        r = t[i], o = n[i];
                        break
                    }
                return r < o ? -1 : o < r ? 1 : 0
            }, e.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, e.concat = function(t, n) {
                if (!$(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return e.alloc(0);
                var r;
                if (void 0 === n)
                    for (n = 0, r = 0; r < t.length; ++r) n += t[r].length;
                var o = e.allocUnsafe(n),
                    i = 0;
                for (r = 0; r < t.length; ++r) {
                    var a = t[r];
                    if (!e.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(o, i), i += a.length
                }
                return o
            }, e.byteLength = y, e.prototype._isBuffer = !0, e.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) b(this, t, t + 1);
                return this
            }, e.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
                return this
            }, e.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4);
                return this
            }, e.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? k(this, 0, e) : g.apply(this, arguments)
            }, e.prototype.equals = function(t) {
                if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === e.compare(this, t)
            }, e.prototype.inspect = function() {
                var e = "",
                    n = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
            }, e.prototype.compare = function(t, n, r, o, i) {
                if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === n && (n = 0), void 0 === r && (r = t ? t.length : 0), void 0 === o && (o = 0), void 0 === i && (i = this.length), n < 0 || r > t.length || o < 0 || i > this.length) throw new RangeError("out of range index");
                if (o >= i && n >= r) return 0;
                if (o >= i) return -1;
                if (n >= r) return 1;
                if (n >>>= 0, r >>>= 0, o >>>= 0, i >>>= 0, this === t) return 0;
                for (var a = i - o, s = r - n, l = Math.min(a, s), c = this.slice(o, i), u = t.slice(n, r), p = 0; p < l; ++p)
                    if (c[p] !== u[p]) {
                        a = c[p], s = u[p];
                        break
                    }
                return a < s ? -1 : s < a ? 1 : 0
            }, e.prototype.includes = function(e, t, n) {
                return this.indexOf(e, t, n) !== -1
            }, e.prototype.indexOf = function(e, t, n) {
                return T(this, e, t, n, !0)
            }, e.prototype.lastIndexOf = function(e, t, n) {
                return T(this, e, t, n, !1)
            }, e.prototype.write = function(e, t, n, r) {
                if (void 0 === t) r = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var o = this.length - t;
                if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var i = !1;;) switch (r) {
                    case "hex":
                        return E(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return A(this, e, t, n);
                    case "ascii":
                        return C(this, e, t, n);
                    case "latin1":
                    case "binary":
                        return _(this, e, t, n);
                    case "base64":
                        return P(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return w(this, e, t, n);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), i = !0
                }
            }, e.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var ee = 4096;
            e.prototype.slice = function(t, n) {
                var r = this.length;
                t = ~~t, n = void 0 === n ? r : ~~n, t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), n < 0 ? (n += r, n < 0 && (n = 0)) : n > r && (n = r), n < t && (n = t);
                var o;
                if (e.TYPED_ARRAY_SUPPORT) o = this.subarray(t, n), o.__proto__ = e.prototype;
                else {
                    var i = n - t;
                    o = new e(i, void 0);
                    for (var a = 0; a < i; ++a) o[a] = this[a + t]
                }
                return o
            }, e.prototype.readUIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || D(e, t, this.length);
                for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
                return r
            }, e.prototype.readUIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || D(e, t, this.length);
                for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o;
                return r
            }, e.prototype.readUInt8 = function(e, t) {
                return t || D(e, 1, this.length), this[e]
            }, e.prototype.readUInt16LE = function(e, t) {
                return t || D(e, 2, this.length), this[e] | this[e + 1] << 8
            }, e.prototype.readUInt16BE = function(e, t) {
                return t || D(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, e.prototype.readUInt32LE = function(e, t) {
                return t || D(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, e.prototype.readUInt32BE = function(e, t) {
                return t || D(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, e.prototype.readIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || D(e, t, this.length);
                for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
                return o *= 128, r >= o && (r -= Math.pow(2, 8 * t)), r
            }, e.prototype.readIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || D(e, t, this.length);
                for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) i += this[e + --r] * o;
                return o *= 128, i >= o && (i -= Math.pow(2, 8 * t)), i
            }, e.prototype.readInt8 = function(e, t) {
                return t || D(e, 1, this.length), 128 & this[e] ? (255 - this[e] + 1) * -1 : this[e]
            }, e.prototype.readInt16LE = function(e, t) {
                t || D(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, e.prototype.readInt16BE = function(e, t) {
                t || D(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, e.prototype.readInt32LE = function(e, t) {
                return t || D(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, e.prototype.readInt32BE = function(e, t) {
                return t || D(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, e.prototype.readFloatLE = function(e, t) {
                return t || D(e, 4, this.length), Z.read(this, e, !0, 23, 4)
            }, e.prototype.readFloatBE = function(e, t) {
                return t || D(e, 4, this.length), Z.read(this, e, !1, 23, 4)
            }, e.prototype.readDoubleLE = function(e, t) {
                return t || D(e, 8, this.length), Z.read(this, e, !0, 52, 8)
            }, e.prototype.readDoubleBE = function(e, t) {
                return t || D(e, 8, this.length), Z.read(this, e, !1, 52, 8)
            }, e.prototype.writeUIntLE = function(e, t, n, r) {
                if (e = +e, t |= 0, n |= 0, !r) {
                    var o = Math.pow(2, 8 * n) - 1;
                    B(this, e, t, n, o, 0)
                }
                var i = 1,
                    a = 0;
                for (this[t] = 255 & e; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
                return t + n
            }, e.prototype.writeUIntBE = function(e, t, n, r) {
                if (e = +e, t |= 0, n |= 0, !r) {
                    var o = Math.pow(2, 8 * n) - 1;
                    B(this, e, t, n, o, 0)
                }
                var i = n - 1,
                    a = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
                return t + n
            }, e.prototype.writeUInt8 = function(t, n, r) {
                return t = +t, n |= 0, r || B(this, t, n, 1, 255, 0), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[n] = 255 & t, n + 1
            }, e.prototype.writeUInt16LE = function(t, n, r) {
                return t = +t, n |= 0, r || B(this, t, n, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : G(this, t, n, !0), n + 2
            }, e.prototype.writeUInt16BE = function(t, n, r) {
                return t = +t, n |= 0, r || B(this, t, n, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : G(this, t, n, !1), n + 2
            }, e.prototype.writeUInt32LE = function(t, n, r) {
                return t = +t, n |= 0, r || B(this, t, n, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : L(this, t, n, !0), n + 4
            }, e.prototype.writeUInt32BE = function(t, n, r) {
                return t = +t, n |= 0, r || B(this, t, n, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : L(this, t, n, !1), n + 4
            }, e.prototype.writeIntLE = function(e, t, n, r) {
                if (e = +e, t |= 0, !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    B(this, e, t, n, o - 1, -o)
                }
                var i = 0,
                    a = 1,
                    s = 0;
                for (this[t] = 255 & e; ++i < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
                return t + n
            }, e.prototype.writeIntBE = function(e, t, n, r) {
                if (e = +e, t |= 0, !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    B(this, e, t, n, o - 1, -o)
                }
                var i = n - 1,
                    a = 1,
                    s = 0;
                for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
                return t + n
            }, e.prototype.writeInt8 = function(t, n, r) {
                return t = +t, n |= 0, r || B(this, t, n, 1, 127, -128), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[n] = 255 & t, n + 1
            }, e.prototype.writeInt16LE = function(t, n, r) {
                return t = +t, n |= 0, r || B(this, t, n, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : G(this, t, n, !0), n + 2
            }, e.prototype.writeInt16BE = function(t, n, r) {
                return t = +t, n |= 0, r || B(this, t, n, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : G(this, t, n, !1), n + 2
            }, e.prototype.writeInt32LE = function(t, n, r) {
                return t = +t, n |= 0, r || B(this, t, n, 4, 2147483647, -2147483648), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : L(this, t, n, !0), n + 4
            }, e.prototype.writeInt32BE = function(t, n, r) {
                return t = +t, n |= 0, r || B(this, t, n, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : L(this, t, n, !1), n + 4
            }, e.prototype.writeFloatLE = function(e, t, n) {
                return U(this, e, t, !0, n)
            }, e.prototype.writeFloatBE = function(e, t, n) {
                return U(this, e, t, !1, n)
            }, e.prototype.writeDoubleLE = function(e, t, n) {
                return F(this, e, t, !0, n)
            }, e.prototype.writeDoubleBE = function(e, t, n) {
                return F(this, e, t, !1, n)
            }, e.prototype.copy = function(t, n, r, o) {
                if (r || (r = 0), o || 0 === o || (o = this.length), n >= t.length && (n = t.length), n || (n = 0), o > 0 && o < r && (o = r), o === r) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (n < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (o < 0) throw new RangeError("sourceEnd out of bounds");
                o > this.length && (o = this.length), t.length - n < o - r && (o = t.length - n + r);
                var i, a = o - r;
                if (this === t && r < n && n < o)
                    for (i = a - 1; i >= 0; --i) t[i + n] = this[i + r];
                else if (a < 1e3 || !e.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < a; ++i) t[i + n] = this[i + r];
                else Uint8Array.prototype.set.call(t, this.subarray(r, r + a), n);
                return a
            }, e.prototype.fill = function(t, n, r, o) {
                if ("string" == typeof t) {
                    if ("string" == typeof n ? (o = n, n = 0, r = this.length) : "string" == typeof r && (o = r, r = this.length), 1 === t.length) {
                        var i = t.charCodeAt(0);
                        i < 256 && (t = i)
                    }
                    if (void 0 !== o && "string" != typeof o) throw new TypeError("encoding must be a string");
                    if ("string" == typeof o && !e.isEncoding(o)) throw new TypeError("Unknown encoding: " + o)
                } else "number" == typeof t && (t &= 255);
                if (n < 0 || this.length < n || this.length < r) throw new RangeError("Out of range index");
                if (r <= n) return this;
                n >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0);
                var a;
                if ("number" == typeof t)
                    for (a = n; a < r; ++a) this[a] = t;
                else {
                    var s = e.isBuffer(t) ? t : q(new e(t, o).toString()),
                        l = s.length;
                    for (a = 0; a < r - n; ++a) this[a + n] = s[a % l]
                }
                return this
            };
            var te = /[^+\/0-9A-Za-z-_]/g
        }).call(t, n(295).Buffer, function() {
            return this
        }())
    },
    function(e, t) {
        "use strict";

        function n(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
        }

        function r(e) {
            return 3 * e.length / 4 - n(e)
        }

        function o(e) {
            var t, r, o, i, a, s, l = e.length;
            a = n(e), s = new u(3 * l / 4 - a), o = a > 0 ? l - 4 : l;
            var p = 0;
            for (t = 0, r = 0; t < o; t += 4, r += 3) i = c[e.charCodeAt(t)] << 18 | c[e.charCodeAt(t + 1)] << 12 | c[e.charCodeAt(t + 2)] << 6 | c[e.charCodeAt(t + 3)], s[p++] = i >> 16 & 255, s[p++] = i >> 8 & 255, s[p++] = 255 & i;
            return 2 === a ? (i = c[e.charCodeAt(t)] << 2 | c[e.charCodeAt(t + 1)] >> 4, s[p++] = 255 & i) : 1 === a && (i = c[e.charCodeAt(t)] << 10 | c[e.charCodeAt(t + 1)] << 4 | c[e.charCodeAt(t + 2)] >> 2, s[p++] = i >> 8 & 255, s[p++] = 255 & i), s
        }

        function i(e) {
            return l[e >> 18 & 63] + l[e >> 12 & 63] + l[e >> 6 & 63] + l[63 & e]
        }

        function a(e, t, n) {
            for (var r, o = [], a = t; a < n; a += 3) r = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], o.push(i(r));
            return o.join("")
        }

        function s(e) {
            for (var t, n = e.length, r = n % 3, o = "", i = [], s = 16383, c = 0, u = n - r; c < u; c += s) i.push(a(e, c, c + s > u ? u : c + s));
            return 1 === r ? (t = e[n - 1], o += l[t >> 2], o += l[t << 4 & 63], o += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o += l[t >> 10], o += l[t >> 4 & 63], o += l[t << 2 & 63], o += "="), i.push(o), i.join("")
        }
        t.byteLength = r, t.toByteArray = o, t.fromByteArray = s;
        for (var l = [], c = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, d = p.length; h < d; ++h) l[h] = p[h], c[p.charCodeAt(h)] = h;
        c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63
    },
    function(e, t) {
        t.read = function(e, t, n, r, o) {
            var i, a, s = 8 * o - r - 1,
                l = (1 << s) - 1,
                c = l >> 1,
                u = -7,
                p = n ? o - 1 : 0,
                h = n ? -1 : 1,
                d = e[t + p];
            for (p += h, i = d & (1 << -u) - 1, d >>= -u, u += s; u > 0; i = 256 * i + e[t + p], p += h, u -= 8);
            for (a = i & (1 << -u) - 1, i >>= -u, u += r; u > 0; a = 256 * a + e[t + p], p += h, u -= 8);
            if (0 === i) i = 1 - c;
            else {
                if (i === l) return a ? NaN : (d ? -1 : 1) * (1 / 0);
                a += Math.pow(2, r), i -= c
            }
            return (d ? -1 : 1) * a * Math.pow(2, i - r)
        }, t.write = function(e, t, n, r, o, i) {
            var a, s, l, c = 8 * i - o - 1,
                u = (1 << c) - 1,
                p = u >> 1,
                h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                d = r ? 0 : i - 1,
                f = r ? 1 : -1,
                m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), t += a + p >= 1 ? h / l : h * Math.pow(2, 1 - p), t * l >= 2 && (a++, l /= 2), a + p >= u ? (s = 0, a = u) : a + p >= 1 ? (s = (t * l - 1) * Math.pow(2, o), a += p) : (s = t * Math.pow(2, p - 1) * Math.pow(2, o), a = 0)); o >= 8; e[n + d] = 255 & s, d += f, s /= 256, o -= 8);
            for (a = a << o | s, c += o; c > 0; e[n + d] = 255 & a, d += f, a /= 256, c -= 8);
            e[n + d - f] |= 128 * m
        }
    },
    function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    },
    function(e, t, n) {
        var r, o = function() {
            function e(e, t) {
                if (!o[e]) {
                    o[e] = {};
                    for (var n = 0; n < e.length; n++) o[e][e.charAt(n)] = n
                }
                return o[e][t]
            }
            var t = String.fromCharCode,
                n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
                o = {},
                i = {
                    compressToBase64: function(e) {
                        if (null == e) return "";
                        var t = i._compress(e, 6, function(e) {
                            return n.charAt(e)
                        });
                        switch (t.length % 4) {
                            default:
                                case 0:
                                return t;
                            case 1:
                                    return t + "===";
                            case 2:
                                    return t + "==";
                            case 3:
                                    return t + "="
                        }
                    },
                    decompressFromBase64: function(t) {
                        return null == t ? "" : "" == t ? null : i._decompress(t.length, 32, function(r) {
                            return e(n, t.charAt(r))
                        })
                    },
                    compressToUTF16: function(e) {
                        return null == e ? "" : i._compress(e, 15, function(e) {
                            return t(e + 32)
                        }) + " "
                    },
                    decompressFromUTF16: function(e) {
                        return null == e ? "" : "" == e ? null : i._decompress(e.length, 16384, function(t) {
                            return e.charCodeAt(t) - 32
                        })
                    },
                    compressToUint8Array: function(e) {
                        for (var t = i.compress(e), n = new Uint8Array(2 * t.length), r = 0, o = t.length; r < o; r++) {
                            var a = t.charCodeAt(r);
                            n[2 * r] = a >>> 8, n[2 * r + 1] = a % 256
                        }
                        return n
                    },
                    decompressFromUint8Array: function(e) {
                        if (null === e || void 0 === e) return i.decompress(e);
                        for (var n = new Array(e.length / 2), r = 0, o = n.length; r < o; r++) n[r] = 256 * e[2 * r] + e[2 * r + 1];
                        var a = [];
                        return n.forEach(function(e) {
                            a.push(t(e))
                        }), i.decompress(a.join(""))
                    },
                    compressToEncodedURIComponent: function(e) {
                        return null == e ? "" : i._compress(e, 6, function(e) {
                            return r.charAt(e)
                        })
                    },
                    decompressFromEncodedURIComponent: function(t) {
                        return null == t ? "" : "" == t ? null : (t = t.replace(/ /g, "+"), i._decompress(t.length, 32, function(n) {
                            return e(r, t.charAt(n))
                        }))
                    },
                    compress: function(e) {
                        return i._compress(e, 16, function(e) {
                            return t(e)
                        })
                    },
                    _compress: function(e, t, n) {
                        if (null == e) return "";
                        var r, o, i, a = {},
                            s = {},
                            l = "",
                            c = "",
                            u = "",
                            p = 2,
                            h = 3,
                            d = 2,
                            f = [],
                            m = 0,
                            v = 0;
                        for (i = 0; i < e.length; i += 1)
                            if (l = e.charAt(i), Object.prototype.hasOwnProperty.call(a, l) || (a[l] = h++, s[l] = !0), c = u + l, Object.prototype.hasOwnProperty.call(a, c)) u = c;
                            else {
                                if (Object.prototype.hasOwnProperty.call(s, u)) {
                                    if (u.charCodeAt(0) < 256) {
                                        for (r = 0; r < d; r++) m <<= 1, v == t - 1 ? (v = 0, f.push(n(m)), m = 0) : v++;
                                        for (o = u.charCodeAt(0), r = 0; r < 8; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, f.push(n(m)), m = 0) : v++, o >>= 1
                                    } else {
                                        for (o = 1, r = 0; r < d; r++) m = m << 1 | o, v == t - 1 ? (v = 0, f.push(n(m)), m = 0) : v++, o = 0;
                                        for (o = u.charCodeAt(0), r = 0; r < 16; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, f.push(n(m)), m = 0) : v++, o >>= 1
                                    }
                                    p--, 0 == p && (p = Math.pow(2, d), d++), delete s[u]
                                } else
                                    for (o = a[u], r = 0; r < d; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, f.push(n(m)), m = 0) : v++, o >>= 1;
                                p--, 0 == p && (p = Math.pow(2, d), d++), a[c] = h++, u = String(l)
                            }
                        if ("" !== u) {
                            if (Object.prototype.hasOwnProperty.call(s, u)) {
                                if (u.charCodeAt(0) < 256) {
                                    for (r = 0; r < d; r++) m <<= 1, v == t - 1 ? (v = 0, f.push(n(m)), m = 0) : v++;
                                    for (o = u.charCodeAt(0), r = 0; r < 8; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, f.push(n(m)), m = 0) : v++, o >>= 1
                                } else {
                                    for (o = 1, r = 0; r < d; r++) m = m << 1 | o, v == t - 1 ? (v = 0, f.push(n(m)), m = 0) : v++, o = 0;
                                    for (o = u.charCodeAt(0), r = 0; r < 16; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, f.push(n(m)), m = 0) : v++, o >>= 1
                                }
                                p--, 0 == p && (p = Math.pow(2, d), d++), delete s[u]
                            } else
                                for (o = a[u], r = 0; r < d; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, f.push(n(m)), m = 0) : v++, o >>= 1;
                            p--, 0 == p && (p = Math.pow(2, d), d++)
                        }
                        for (o = 2, r = 0; r < d; r++) m = m << 1 | 1 & o, v == t - 1 ? (v = 0, f.push(n(m)), m = 0) : v++, o >>= 1;
                        for (;;) {
                            if (m <<= 1, v == t - 1) {
                                f.push(n(m));
                                break
                            }
                            v++
                        }
                        return f.join("")
                    },
                    decompress: function(e) {
                        return null == e ? "" : "" == e ? null : i._decompress(e.length, 32768, function(t) {
                            return e.charCodeAt(t)
                        })
                    },
                    _decompress: function(e, n, r) {
                        var o, i, a, s, l, c, u, p, h = [],
                            d = 4,
                            f = 4,
                            m = 3,
                            v = "",
                            y = [],
                            g = {
                                val: r(0),
                                position: n,
                                index: 1
                            };
                        for (i = 0; i < 3; i += 1) h[i] = i;
                        for (s = 0, c = Math.pow(2, 2), u = 1; u != c;) l = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = r(g.index++)), s |= (l > 0 ? 1 : 0) * u, u <<= 1;
                        switch (o = s) {
                            case 0:
                                for (s = 0, c = Math.pow(2, 8), u = 1; u != c;) l = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = r(g.index++)), s |= (l > 0 ? 1 : 0) * u, u <<= 1;
                                p = t(s);
                                break;
                            case 1:
                                for (s = 0, c = Math.pow(2, 16), u = 1; u != c;) l = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = r(g.index++)), s |= (l > 0 ? 1 : 0) * u, u <<= 1;
                                p = t(s);
                                break;
                            case 2:
                                return ""
                        }
                        for (h[3] = p, a = p, y.push(p);;) {
                            if (g.index > e) return "";
                            for (s = 0, c = Math.pow(2, m), u = 1; u != c;) l = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = r(g.index++)), s |= (l > 0 ? 1 : 0) * u, u <<= 1;
                            switch (p = s) {
                                case 0:
                                    for (s = 0, c = Math.pow(2, 8), u = 1; u != c;) l = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = r(g.index++)), s |= (l > 0 ? 1 : 0) * u, u <<= 1;
                                    h[f++] = t(s), p = f - 1, d--;
                                    break;
                                case 1:
                                    for (s = 0, c = Math.pow(2, 16), u = 1; u != c;) l = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = r(g.index++)), s |= (l > 0 ? 1 : 0) * u, u <<= 1;
                                    h[f++] = t(s), p = f - 1, d--;
                                    break;
                                case 2:
                                    return y.join("")
                            }
                            if (0 == d && (d = Math.pow(2, m), m++), h[p]) v = h[p];
                            else {
                                if (p !== f) return null;
                                v = a + a.charAt(0)
                            }
                            y.push(v), h[f++] = a + v.charAt(0), d--, a = v, 0 == d && (d = Math.pow(2, m), m++)
                        }
                    }
                };
            return i
        }();
        r = function() {
            return o
        }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
    },
    function(e, t) {
        "use strict";
        e.exports = "undefined" != typeof window
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = r.createClass({
                displayName: "StarRating",
                render: function() {
                    return r.createElement("span", null, r.createElement("span", {
                        style: {
                            color: "gold"
                        }
                    }, "★"), this.props.stars)
                }
            });
        e.exports = o
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(303),
            i = r.createClass({
                displayName: "RedditButton",
                onClick: function() {
                    window.open("https://www.reddit.com/r/generalsio")
                },
                render: function() {
                    return r.createElement(o, {
                        src: "/reddit.png",
                        onClick: this.onClick,
                        name: "/r/generalsio",
                        id: this.props.id
                    })
                }
            });
        e.exports = i
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = r.createClass({
                displayName: "ImageButton",
                render: function() {
                    return r.createElement("button", {
                        id: this.props.id,
                        className: "small",
                        onClick: this.props.onClick,
                        style: {
                            padding: "3px 5px"
                        }
                    }, r.createElement("img", {
                        src: this.props.src,
                        style: {
                            height: "20px",
                            width: "20px",
                            margin: 0,
                            padding: 0,
                            display: "inline-block"
                        }
                    }), r.createElement("p", {
                        style: {
                            color: "black",
                            display: "inline-block",
                            fontSize: "13px",
                            margin: "3px",
                            verticalAlign: "top"
                        }
                    }, this.props.name))
                }
            });
        e.exports = o
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(303),
            i = r.createClass({
                displayName: "DiscordButton",
                onClick: function() {
                    window.open("https://discord.gg/a97CQZb")
                },
                render: function() {
                    return this.props.large ? r.createElement(o, {
                        src: "/discord-color.png",
                        onClick: this.onClick,
                        name: "Join us on Discord",
                        id: this.props.id
                    }) : r.createElement("div", {
                        id: this.props.id,
                        className: "discord-button",
                        onClick: this.onClick
                    })
                }
            });
        e.exports = i
    },
    function(e, t, n) {
        "use strict";

        function r() {
            i = !1
        }

        function o() {
            console.log("AdBlock detected."), i = !0
        }
        var i = !1;
        n(306);
        "undefined" == typeof fuckAdBlock ? o() : (fuckAdBlock.onDetected(o), fuckAdBlock.onNotDetected(r)), e.exports = {
            adBlockEnabled: function() {
                return i
            }
        }
    },
    function(e, t) {
        ! function(e) {
            var t = function(t) {
                this._options = {
                    checkOnLoad: !1,
                    resetOnEnd: !1,
                    loopCheckTime: 50,
                    loopMaxNumber: 5,
                    baitClass: "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
                    baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",
                    debug: !1
                }, this._var = {
                    version: "3.2.1",
                    bait: null,
                    checking: !1,
                    loop: null,
                    loopNumber: 0,
                    event: {
                        detected: [],
                        notDetected: []
                    }
                }, void 0 !== t && this.setOption(t);
                var n = this,
                    r = function() {
                        setTimeout(function() {
                            n._options.checkOnLoad === !0 && (n._options.debug === !0 && n._log("onload->eventCallback", "A check loading is launched"), null === n._var.bait && n._creatBait(), setTimeout(function() {
                                n.check()
                            }, 1))
                        }, 1)
                    };
                void 0 !== e.addEventListener ? e.addEventListener("load", r, !1) : e.attachEvent("onload", r)
            };
            t.prototype._options = null, t.prototype._var = null, t.prototype._bait = null, t.prototype._log = function(e, t) {
                console.log("[FuckAdBlock][" + e + "] " + t)
            }, t.prototype.setOption = function(e, t) {
                if (void 0 !== t) {
                    var n = e;
                    e = {}, e[n] = t
                }
                for (var r in e) this._options[r] = e[r], this._options.debug === !0 && this._log("setOption", 'The option "' + r + '" he was assigned to "' + e[r] + '"');
                return this
            }, t.prototype._creatBait = function() {
                var t = document.createElement("div");
                t.setAttribute("class", this._options.baitClass), t.setAttribute("style", this._options.baitStyle), this._var.bait = e.document.body.appendChild(t), this._var.bait.offsetParent, this._var.bait.offsetHeight, this._var.bait.offsetLeft, this._var.bait.offsetTop, this._var.bait.offsetWidth, this._var.bait.clientHeight, this._var.bait.clientWidth, this._options.debug === !0 && this._log("_creatBait", "Bait has been created")
            }, t.prototype._destroyBait = function() {
                e.document.body.removeChild(this._var.bait), this._var.bait = null, this._options.debug === !0 && this._log("_destroyBait", "Bait has been removed")
            }, t.prototype.check = function(e) {
                if (void 0 === e && (e = !0), this._options.debug === !0 && this._log("check", "An audit was requested " + (e === !0 ? "with a" : "without") + " loop"), this._var.checking === !0) return this._options.debug === !0 && this._log("check", "A check was canceled because there is already an ongoing"), !1;
                this._var.checking = !0, null === this._var.bait && this._creatBait();
                var t = this;
                return this._var.loopNumber = 0, e === !0 && (this._var.loop = setInterval(function() {
                    t._checkBait(e)
                }, this._options.loopCheckTime)), setTimeout(function() {
                    t._checkBait(e)
                }, 1), this._options.debug === !0 && this._log("check", "A check is in progress ..."), !0
            }, t.prototype._checkBait = function(t) {
                var n = !1;
                if (null === this._var.bait && this._creatBait(), null === e.document.body.getAttribute("abp") && null !== this._var.bait.offsetParent && 0 != this._var.bait.offsetHeight && 0 != this._var.bait.offsetLeft && 0 != this._var.bait.offsetTop && 0 != this._var.bait.offsetWidth && 0 != this._var.bait.clientHeight && 0 != this._var.bait.clientWidth || (n = !0), void 0 !== e.getComputedStyle) {
                    var r = e.getComputedStyle(this._var.bait, null);
                    !r || "none" != r.getPropertyValue("display") && "hidden" != r.getPropertyValue("visibility") || (n = !0)
                }
                this._options.debug === !0 && this._log("_checkBait", "A check (" + (this._var.loopNumber + 1) + "/" + this._options.loopMaxNumber + " ~" + (1 + this._var.loopNumber * this._options.loopCheckTime) + "ms) was conducted and detection is " + (n === !0 ? "positive" : "negative")), t === !0 && (this._var.loopNumber++, this._var.loopNumber >= this._options.loopMaxNumber && this._stopLoop()),
                    n === !0 ? (this._stopLoop(), this._destroyBait(), this.emitEvent(!0), t === !0 && (this._var.checking = !1)) : null !== this._var.loop && t !== !1 || (this._destroyBait(), this.emitEvent(!1), t === !0 && (this._var.checking = !1))
            }, t.prototype._stopLoop = function(e) {
                clearInterval(this._var.loop), this._var.loop = null, this._var.loopNumber = 0, this._options.debug === !0 && this._log("_stopLoop", "A loop has been stopped")
            }, t.prototype.emitEvent = function(e) {
                this._options.debug === !0 && this._log("emitEvent", "An event with a " + (e === !0 ? "positive" : "negative") + " detection was called");
                var t = this._var.event[e === !0 ? "detected" : "notDetected"];
                for (var n in t) this._options.debug === !0 && this._log("emitEvent", "Call function " + (parseInt(n) + 1) + "/" + t.length), t.hasOwnProperty(n) && t[n]();
                return this._options.resetOnEnd === !0 && this.clearEvent(), this
            }, t.prototype.clearEvent = function() {
                this._var.event.detected = [], this._var.event.notDetected = [], this._options.debug === !0 && this._log("clearEvent", "The event list has been cleared")
            }, t.prototype.on = function(e, t) {
                return this._var.event[e === !0 ? "detected" : "notDetected"].push(t), this._options.debug === !0 && this._log("on", 'A type of event "' + (e === !0 ? "detected" : "notDetected") + '" was added'), this
            }, t.prototype.onDetected = function(e) {
                return this.on(!0, e)
            }, t.prototype.onNotDetected = function(e) {
                return this.on(!1, e)
            }, e.FuckAdBlock = t, void 0 === e.fuckAdBlock && (e.fuckAdBlock = new t({
                checkOnLoad: !0,
                resetOnEnd: !0
            }))
        }(window)
    },
    function(e, t, n) {
        "use strict";
        var r = n(308),
            o = new r(window.navigator.userAgent);
        e.exports = o.mobile()
    },
    function(e, t, n) {
        ! function(e, t) {
            e(function() {
                "use strict";

                function e(e, t) {
                    return null != e && null != t && e.toLowerCase() === t.toLowerCase()
                }

                function n(e, t) {
                    var n, r, o = e.length;
                    if (!o || !t) return !1;
                    for (n = t.toLowerCase(), r = 0; r < o; ++r)
                        if (n === e[r].toLowerCase()) return !0;
                    return !1
                }

                function r(e) {
                    for (var t in e) s.call(e, t) && (e[t] = new RegExp(e[t], "i"))
                }

                function o(e, t) {
                    this.ua = e || "", this._cache = {}, this.maxPhoneWidth = t || 600
                }
                var i = {};
                i.mobileDetectRules = {
                    phones: {
                        iPhone: "\\biPhone\\b|\\biPod\\b",
                        BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                        HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                        Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                        Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                        Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
                        Samsung: "\\bSamsung\\b|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F",
                        LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
                        Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                        Asus: "Asus.*Galaxy|PadFone.*Mobile",
                        NokiaLumia: "Lumia [0-9]{3,4}",
                        Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                        Palm: "PalmSource|Palm",
                        Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                        Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                        Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                        Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                        iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                        SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                        Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                        Alcatel: "Alcatel",
                        Nintendo: "Nintendo 3DS",
                        Amoi: "Amoi",
                        INQ: "INQ",
                        GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                    },
                    tablets: {
                        iPad: "iPad|iPad.*Mobile",
                        NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                        SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y|SM-T280",
                        Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI)\\b",
                        SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                        HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                        AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z",
                        BlackBerryTablet: "PlayBook|RIM Tablet",
                        HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                        MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                        NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                        AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                        ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                        LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                        FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                        PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                        LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                        DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                        YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                        MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                        ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                        IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                        IRUTablet: "M702pro",
                        MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                        EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                        AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                        ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                        AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                        NokiaLumiaTablet: "Lumia 2520",
                        SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                        PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                        CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                        CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                        MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                        MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                        SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                        RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                        FlyTablet: "IQ310|Fly Vision",
                        bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris [E|M]10)|Maxwell.*Lite|Maxwell.*Plus",
                        HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                        NecTablet: "\\bN-06D|\\bN-08D",
                        PantechTablet: "Pantech.*P4100",
                        BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                        VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                        ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                        PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                        NabiTablet: "Android.*\\bNabi",
                        KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                        DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                        TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                        PlaystationTablet: "Playstation.*(Portable|Vita)",
                        TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                        PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                        AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                        DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                        GalapadTablet: "Android.*\\bG1\\b",
                        MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                        KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                        AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                        PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                        YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                        ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                        GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                        PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                        OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                        HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                        DPSTablet: "DPS Dream 9|DPS Dual 7",
                        VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                        CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                        MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                        ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                        GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                        ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                        VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                        ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                        StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                        VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                        EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                        RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                        iMobileTablet: "i-mobile i-note",
                        TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                        AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                        AMPETablet: "Android.* A78 ",
                        SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                        TecnoTablet: "TECNO P9",
                        JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                        iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                        FX2Tablet: "FX2 PAD7|FX2 PAD10",
                        XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                        ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                        OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                        CaptivaTablet: "CAPTIVA PAD",
                        IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                        TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                        OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                        JaytechTablet: "TPC-PA762",
                        BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                        DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                        EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                        LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                        AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                        MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                        CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                        WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                        MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                        NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                        NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                        LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                        UbislateTablet: "UbiSlate[\\s]?7C",
                        PocketBookTablet: "Pocketbook",
                        KocasoTablet: "\\b(TB-1207)\\b",
                        HisenseTablet: "\\b(F5281|E2371)\\b",
                        Hudl: "Hudl HT7S3|Hudl 2",
                        TelstraTablet: "T-Hub2",
                        GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b"
                    },
                    oss: {
                        AndroidOS: "Android",
                        BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                        PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                        SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                        WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                        WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                        iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
                        MeeGoOS: "MeeGo",
                        MaemoOS: "Maemo",
                        JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                        webOS: "webOS|hpwOS",
                        badaOS: "\\bBada\\b",
                        BREWOS: "BREW"
                    },
                    uas: {
                        Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                        Dolfin: "\\bDolfin\\b",
                        Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                        Skyfire: "Skyfire",
                        Edge: "Mobile Safari/[.0-9]* Edge",
                        IE: "IEMobile|MSIEMobile",
                        Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                        Bolt: "bolt",
                        TeaShark: "teashark",
                        Blazer: "Blazer",
                        Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                        UCBrowser: "UC.*Browser|UCWEB",
                        baiduboxapp: "baiduboxapp",
                        baidubrowser: "baidubrowser",
                        DiigoBrowser: "DiigoBrowser",
                        Puffin: "Puffin",
                        Mercury: "\\bMercury\\b",
                        ObigoBrowser: "Obigo",
                        NetFront: "NF-Browser",
                        GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                        PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                    },
                    props: {
                        Mobile: "Mobile/[VER]",
                        Build: "Build/[VER]",
                        Version: "Version/[VER]",
                        VendorID: "VendorID/[VER]",
                        iPad: "iPad.*CPU[a-z ]+[VER]",
                        iPhone: "iPhone.*CPU[a-z ]+[VER]",
                        iPod: "iPod.*CPU[a-z ]+[VER]",
                        Kindle: "Kindle/[VER]",
                        Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                        Coast: ["Coast/[VER]"],
                        Dolfin: "Dolfin/[VER]",
                        Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                        Fennec: "Fennec/[VER]",
                        Edge: "Edge/[VER]",
                        IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                        NetFront: "NetFront/[VER]",
                        NokiaBrowser: "NokiaBrowser/[VER]",
                        Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                        "Opera Mini": "Opera Mini/[VER]",
                        "Opera Mobi": "Version/[VER]",
                        "UC Browser": "UC Browser[VER]",
                        MQQBrowser: "MQQBrowser/[VER]",
                        MicroMessenger: "MicroMessenger/[VER]",
                        baiduboxapp: "baiduboxapp/[VER]",
                        baidubrowser: "baidubrowser/[VER]",
                        SamsungBrowser: "SamsungBrowser/[VER]",
                        Iron: "Iron/[VER]",
                        Safari: ["Version/[VER]", "Safari/[VER]"],
                        Skyfire: "Skyfire/[VER]",
                        Tizen: "Tizen/[VER]",
                        Webkit: "webkit[ /][VER]",
                        PaleMoon: "PaleMoon/[VER]",
                        Gecko: "Gecko/[VER]",
                        Trident: "Trident/[VER]",
                        Presto: "Presto/[VER]",
                        Goanna: "Goanna/[VER]",
                        iOS: " \\bi?OS\\b [VER][ ;]{1}",
                        Android: "Android [VER]",
                        BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                        BREW: "BREW [VER]",
                        Java: "Java/[VER]",
                        "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                        "Windows Phone": "Windows Phone [VER]",
                        "Windows CE": "Windows CE/[VER]",
                        "Windows NT": "Windows NT [VER]",
                        Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                        webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                    },
                    utils: {
                        Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                        MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                        DesktopMode: "WPDesktop",
                        TV: "SonyDTV|HbbTV",
                        WebKit: "(webkit)[ /]([\\w.]+)",
                        Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                        Watch: "SM-V700"
                    }
                }, i.detectMobileBrowsers = {
                    fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    tabletPattern: /android|ipad|playbook|silk/i
                };
                var a, s = Object.prototype.hasOwnProperty;
                return i.FALLBACK_PHONE = "UnknownPhone", i.FALLBACK_TABLET = "UnknownTablet", i.FALLBACK_MOBILE = "UnknownMobile",
                    a = "isArray" in Array ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    function() {
                        var e, t, n, o, l, c, u = i.mobileDetectRules;
                        for (e in u.props)
                            if (s.call(u.props, e)) {
                                for (t = u.props[e], a(t) || (t = [t]), l = t.length, o = 0; o < l; ++o) n = t[o], c = n.indexOf("[VER]"), c >= 0 && (n = n.substring(0, c) + "([\\w._\\+]+)" + n.substring(c + 5)), t[o] = new RegExp(n, "i");
                                u.props[e] = t
                            }
                        r(u.oss), r(u.phones), r(u.tablets), r(u.uas), r(u.utils), u.oss0 = {
                            WindowsPhoneOS: u.oss.WindowsPhoneOS,
                            WindowsMobileOS: u.oss.WindowsMobileOS
                        }
                    }(), i.findMatch = function(e, t) {
                        for (var n in e)
                            if (s.call(e, n) && e[n].test(t)) return n;
                        return null
                    }, i.findMatches = function(e, t) {
                        var n = [];
                        for (var r in e) s.call(e, r) && e[r].test(t) && n.push(r);
                        return n
                    }, i.getVersionStr = function(e, t) {
                        var n, r, o, a, l = i.mobileDetectRules.props;
                        if (s.call(l, e))
                            for (n = l[e], o = n.length, r = 0; r < o; ++r)
                                if (a = n[r].exec(t), null !== a) return a[1];
                        return null
                    }, i.getVersion = function(e, t) {
                        var n = i.getVersionStr(e, t);
                        return n ? i.prepareVersionNo(n) : NaN
                    }, i.prepareVersionNo = function(e) {
                        var t;
                        return t = e.split(/[a-z._ \/\-]/i), 1 === t.length && (e = t[0]), t.length > 1 && (e = t[0] + ".", t.shift(), e += t.join("")), Number(e)
                    }, i.isMobileFallback = function(e) {
                        return i.detectMobileBrowsers.fullPattern.test(e) || i.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
                    }, i.isTabletFallback = function(e) {
                        return i.detectMobileBrowsers.tabletPattern.test(e)
                    }, i.prepareDetectionCache = function(e, n, r) {
                        if (e.mobile === t) {
                            var a, s, l;
                            return (s = i.findMatch(i.mobileDetectRules.tablets, n)) ? (e.mobile = e.tablet = s, void(e.phone = null)) : (a = i.findMatch(i.mobileDetectRules.phones, n)) ? (e.mobile = e.phone = a, void(e.tablet = null)) : void(i.isMobileFallback(n) ? (l = o.isPhoneSized(r), l === t ? (e.mobile = i.FALLBACK_MOBILE, e.tablet = e.phone = null) : l ? (e.mobile = e.phone = i.FALLBACK_PHONE, e.tablet = null) : (e.mobile = e.tablet = i.FALLBACK_TABLET, e.phone = null)) : i.isTabletFallback(n) ? (e.mobile = e.tablet = i.FALLBACK_TABLET, e.phone = null) : e.mobile = e.tablet = e.phone = null)
                        }
                    }, i.mobileGrade = function(e) {
                        var t = null !== e.mobile();
                        return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile") <= 5.2, "C")
                    }, i.detectOS = function(e) {
                        return i.findMatch(i.mobileDetectRules.oss0, e) || i.findMatch(i.mobileDetectRules.oss, e)
                    }, i.getDeviceSmallerSide = function() {
                        return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
                    }, o.prototype = {
                        constructor: o,
                        mobile: function() {
                            return i.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                        },
                        phone: function() {
                            return i.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                        },
                        tablet: function() {
                            return i.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                        },
                        userAgent: function() {
                            return this._cache.userAgent === t && (this._cache.userAgent = i.findMatch(i.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                        },
                        userAgents: function() {
                            return this._cache.userAgents === t && (this._cache.userAgents = i.findMatches(i.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                        },
                        os: function() {
                            return this._cache.os === t && (this._cache.os = i.detectOS(this.ua)), this._cache.os
                        },
                        version: function(e) {
                            return i.getVersion(e, this.ua)
                        },
                        versionStr: function(e) {
                            return i.getVersionStr(e, this.ua)
                        },
                        is: function(t) {
                            return n(this.userAgents(), t) || e(t, this.os()) || e(t, this.phone()) || e(t, this.tablet()) || n(i.findMatches(i.mobileDetectRules.utils, this.ua), t)
                        },
                        match: function(e) {
                            return e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
                        },
                        isPhoneSized: function(e) {
                            return o.isPhoneSized(e || this.maxPhoneWidth)
                        },
                        mobileGrade: function() {
                            return this._cache.grade === t && (this._cache.grade = i.mobileGrade(this)), this._cache.grade
                        }
                    }, "undefined" != typeof window && window.screen ? o.isPhoneSized = function(e) {
                        return e < 0 ? t : i.getDeviceSmallerSide() <= e
                    } : o.isPhoneSized = function() {}, o._impl = i, o.version = "1.3.5 2016-11-14", o
            })
        }(function(t) {
            return "undefined" != typeof e && e.exports ? function(t) {
                e.exports = t()
            } : n(309)
        }())
    },
    function(e, t) {
        e.exports = function() {
            throw new Error("define cannot be used indirect")
        }
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = r.createClass({
                displayName: "Alert",
                render: function() {
                    return r.createElement("div", {
                        className: "alert center"
                    }, r.createElement("center", null, r.createElement("h1", {
                        style: {
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Quicksand-Bold",
                            whiteSpace: "nowrap"
                        }
                    }, this.props.title), r.createElement("p", {
                        style: {
                            textAlign: "center",
                            color: "black"
                        }
                    }, this.props.body), this.props.button3 ? r.createElement("button", {
                        className: "small inverted",
                        onClick: this.props.onClick3
                    }, this.props.button3) : null, r.createElement("br", null), this.props.button2 ? r.createElement("button", {
                        className: "small inverted",
                        onClick: this.props.onClick2
                    }, this.props.button2) : null, r.createElement("br", null), this.props.button ? r.createElement("button", {
                        className: "inverted",
                        onClick: this.props.onClick
                    }, this.props.button) : null))
                }
            });
        e.exports = o
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (e || "Anonymous") === (t || "Anonymous")
        }
        var o = n(4),
            i = n(312),
            a = n(301),
            s = "2v2-teammates",
            l = o.createClass({
                displayName: "Leaderboards",
                getInitialState: function() {
                    return {
                        ladder: "duel"
                    }
                },
                show1v1Leaderboard: function() {
                    this.setState({
                        ladder: "duel"
                    }), this.props.getLeaderboard("duel")
                },
                showFFALeaderboard: function() {
                    this.setState({
                        ladder: "ffa"
                    }), this.props.getLeaderboard("ffa")
                },
                show2v2Leaderboard: function() {
                    this.setState({
                        ladder: "2v2"
                    }), this.props.getLeaderboard("2v2")
                },
                show2v2TeammatesLeaderboard: function() {
                    this.setState({
                        ladder: s
                    }), this.props.get2v2Teammates()
                },
                leaderboardRows: function(e) {
                    var t = this,
                        n = this.props.allLeaderboards,
                        i = n ? n[e] : null;
                    if (!i && localStorage) {
                        var a = localStorage["leaderboard:" + e];
                        if (a) try {
                            i = JSON.parse(a)
                        } catch (e) {}
                    }
                    if (!i) return null;
                    var s = i.users,
                        l = i.stars,
                        c = 0,
                        u = this.props.playerUsername,
                        p = "2v2" === e;
                    return (l || []).map(function(n, i) {
                        var a = t.props.playerRanks && t.props.playerRanks[e] === i + 1,
                            l = p ? r(u, s[2 * i]) || r(u, s[2 * i + 1]) : r(u, s[i]),
                            h = a && l;
                        return o.createElement("tr", {
                            key: "leaderboard-row-" + i,
                            className: h ? "highlighted" : ""
                        }, o.createElement("td", null, i + 1), o.createElement("td", null, s[c++] || "Anonymous"), p ? o.createElement("td", null, s[c++] || "Anonymous") : null, o.createElement("td", null, Math.max(0, Math.round(n || 0))))
                    })
                },
                leaderboard2v2TeammateRows: function() {
                    var e = this.props.data2v2Teammates;
                    if (!e && localStorage) {
                        var t = localStorage["2v2_teammates"];
                        if (t) try {
                            e = JSON.parse(t)
                        } catch (e) {}
                    }
                    return e ? e.map(function(e, t) {
                        return o.createElement("tr", {
                            key: "leaderboard-row-" + t
                        }, o.createElement("td", null, t + 1), o.createElement("td", null, e.username || "Anonymous"), o.createElement("td", null, Math.max(0, Math.round(e.stars || 0))), o.createElement("td", null, e.rank))
                    }) : null
                },
                render: function() {
                    var e = 0;
                    switch (this.state.ladder) {
                        case "ffa":
                            e = 1;
                            break;
                        case "2v2":
                            e = 2;
                            break;
                        case s:
                            e = 3
                    }
                    return o.createElement("div", {
                        className: "popup-background"
                    }, o.createElement("div", {
                        id: "leaderboard",
                        className: "alert center"
                    }, o.createElement("h1", {
                        className: "center-horizontal",
                        style: {
                            textShadow: "1px 1px black"
                        }
                    }, "Leaderboards"), o.createElement("div", {
                        id: "leaderboard-table-container"
                    }, o.createElement(i, {
                        tab_id: "main-menu-leaderboard",
                        selectedTab: e,
                        onClicks: [this.show1v1Leaderboard, this.showFFALeaderboard, this.show2v2Leaderboard, this.show2v2TeammatesLeaderboard],
                        titles: ["1v1", "FFA", "2v2", "2v2 Partners"]
                    }), this.state.ladder === s ? o.createElement("p", {
                        style: {
                            color: "black",
                            margin: "5px"
                        }
                    }, "This leaderboard lists the partners you've played ranked 2v2 with.") : null, o.createElement("table", {
                        id: "leaderboard-table"
                    }, o.createElement("tbody", null, this.state.ladder === s ? o.createElement("tr", null, o.createElement("th", null, "#"), o.createElement("th", null, "Teammate"), o.createElement("th", null, " ", o.createElement(a, null), " "), o.createElement("th", null, "Rank")) : o.createElement("tr", null, o.createElement("th", null, "#"), o.createElement("th", null, "Username"), "2v2" === this.state.ladder ? o.createElement("th", null, "Username") : null, o.createElement("th", null, " ", o.createElement(a, null), " ")), this.state.ladder === s ? this.leaderboard2v2TeammateRows() : this.leaderboardRows(this.state.ladder)))), o.createElement("button", {
                        className: "small inverted center-horizontal",
                        onClick: this.props.hideLeaderboards
                    }, "Exit")))
                }
            });
        e.exports = l
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = r.createClass({
                displayName: "Tabs",
                render: function() {
                    var e = this.props.selectedTab,
                        t = this.props.onClicks || [],
                        n = this.props.tab_id,
                        o = this.props.titles.map(function(o, i) {
                            return r.createElement("div", {
                                className: i === e ? "inline-button inverted" : "inline-button",
                                onClick: t[i],
                                key: n + "-" + i
                            }, o)
                        });
                    return r.createElement("div", {
                        className: "tabs background unselectable"
                    }, o)
                }
            });
        e.exports = o
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(314),
            i = n(272),
            a = n(312),
            s = n(315),
            l = r.createClass({
                displayName: "Options",
                getInitialState: function() {
                    return {
                        selectedTab: 0
                    }
                },
                handleKeyPress: function(e) {
                    e = e || window.event;
                    var t = this.state ? this.state.currentButton : null;
                    if (t) {
                        e.preventDefault(), e.stopPropagation();
                        var n = o(t.key);
                        n[t.num] = e.keyCode, o(t.key, n), console.log("Saving", t.key, "as", n), localStorage[t.key] = n, this.setState({
                            currentButton: void 0
                        })
                    }
                },
                handleButtonPress: function(e, t, n) {
                    n.preventDefault(), this.setState({
                        currentButton: {
                            key: e,
                            num: t
                        }
                    })
                },
                showAccount: function() {
                    this.setState({
                        selectedTab: 0
                    })
                },
                showControls: function() {
                    this.setState({
                        selectedTab: 1
                    })
                },
                showOther: function() {
                    this.setState({
                        selectedTab: 2
                    })
                },
                renderControls: function() {
                    var e = o(),
                        t = [],
                        n = this.state ? this.state.currentButton : void 0;
                    for (var i in e) {
                        var a = [e[i].current[0], e[i].current.length - 1 ? e[i].current[1] : 0],
                            s = n && n.key === i && 0 === n.num,
                            l = n && n.key === i && 1 === n.num;
                        t.push(r.createElement("div", {
                            className: "options-controls-row",
                            key: i
                        }, r.createElement("p", {
                            className: "center-vertical"
                        }, e[i].desc + ": "), r.createElement("div", {
                            className: "center-vertical"
                        }, r.createElement("button", {
                            type: "button",
                            className: s ? "small inverted" : "small",
                            onClick: this.handleButtonPress.bind(null, i, 0)
                        }, s ? "Press a key..." : o(a[0])), "UP" === i || "LEFT" === i || "DOWN" === i || "RIGHT" === i ? r.createElement("button", {
                            type: "button",
                            className: l ? "small inverted" : "small",
                            onClick: this.handleButtonPress.bind(null, i, 1)
                        }, l ? "Press a key..." : o(a[1])) : null)))
                    }
                    return r.createElement("div", null, t)
                },
                handleNotificationPress: function() {
                    var e = "yes" === i.option();
                    e || i.request(), i.option(e ? "no" : "yes"), this.forceUpdate(), console.log("Notifications changed to", i.option())
                },
                handleMovementPress: function() {
                    var e = "enable" === localStorage.old_movement;
                    localStorage.old_movement = e ? "disable" : "enable", this.forceUpdate(), console.log("Movement changed to", localStorage.old_movement)
                },
                renderOther: function() {
                    var e = this.state ? this.state.currentButton : null,
                        t = e && "Notification" === e.key,
                        n = r.createElement("div", {
                            id: "notif-options"
                        }, r.createElement("p", null, r.createElement("span", {
                            className: "bold"
                        }, "Never miss a game start again:"), " if you enable Notifications, we'll notify you once your game starts if you're in a different tab or window."), r.createElement("div", {
                            className: "options-controls-row",
                            key: "enable_notifications"
                        }, r.createElement("p", {
                            className: "center-vertical"
                        }, "Enable Notifications: "), r.createElement("div", {
                            className: "center-vertical"
                        }, r.createElement("button", {
                            type: "button",
                            id: "notification-button",
                            className: t ? "small inverted" : "small",
                            onClick: this.handleNotificationPress
                        }, "yes" === i.option() ? "Enabled" : "Disabled"))), r.createElement("p", null, r.createElement("span", {
                            className: "bold"
                        }, "Miss the old game movement system?"), '  You can enable and disable it here, as well as in-game using the hotkey defined in the "Controls" section (default: [o])'), r.createElement("div", {
                            className: "options-controls-row",
                            key: "enable_old_movement"
                        }, r.createElement("p", {
                            className: "center-vertical"
                        }, "Enable Old Movement System: "), r.createElement("div", {
                            className: "center-vertical"
                        }, r.createElement("button", {
                            type: "button",
                            id: "movement-button",
                            className: t ? "small inverted" : "small",
                            onClick: this.handleMovementPress
                        }, "enable" === localStorage.old_movement ? "Enabled" : "Disabled"))), "   ");
                    return r.createElement("div", null, n)
                },
                render: function() {
                    return document.querySelector("body").onkeydown = this.handleKeyPress, r.createElement("div", {
                        className: "popup-background"
                    }, r.createElement("div", {
                        className: "popup-replays"
                    }, r.createElement("div", {
                        id: "options",
                        className: "alert center"
                    }, r.createElement("h1", {
                        className: "center-horizontal",
                        style: {
                            textShadow: "1px 1px black"
                        }
                    }, "Options"), r.createElement("div", {
                        id: "options-table-container"
                    }, r.createElement(a, {
                        tab_id: "options",
                        selectedTab: this.state.selectedTab,
                        onClicks: [this.showAccount, this.showControls, this.showOther],
                        titles: ["Account", "Controls", "Other"]
                    }), r.createElement("div", {
                        id: "options-body"
                    }, 0 === this.state.selectedTab ? r.createElement(s, null) : 1 === this.state.selectedTab ? this.renderControls() : this.renderOther())), r.createElement("button", {
                        className: "small inverted center-horizontal",
                        onClick: this.props.hideOptions
                    }, "Exit"))))
                }
            });
        e.exports = l
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return o && o[e] ? o[e].split(",").map(function(e) {
                return +e
            }) : void 0
        }
        var o = n(291),
            i = function(e, t) {
                return Array.isArray(t) && (a[e].current = t), "number" != typeof e && isNaN(e) ? t ? a[e][t] : e ? a[e].current : a : (e = parseInt(e), s[e])
            },
            a = {
                UP: {
                    desc: "Move Up",
                    default: [87, 38]
                },
                DOWN: {
                    desc: "Move Down",
                    default: [83, 40]
                },
                LEFT: {
                    desc: "Move Left",
                    default: [65, 37]
                },
                RIGHT: {
                    desc: "Move Right",
                    default: [68, 39]
                },
                CHAT: {
                    desc: "Open Chat",
                    default: [13]
                },
                TEAMCHAT: {
                    desc: "Open Teamchat",
                    default: [84]
                },
                DESELECT: {
                    desc: "Deselect Square",
                    default: [32]
                },
                AUTOPLAY: {
                    desc: "Autoplay Replay",
                    default: [32]
                },
                UNDO: {
                    desc: "Undo Move",
                    default: [69]
                },
                CLEAR: {
                    desc: "Clear Queued Moves",
                    default: [81]
                },
                ZOOMIN: {
                    desc: "Zoom In",
                    default: [48]
                },
                ZOOMOUT: {
                    desc: "Zoom Out",
                    default: [57]
                },
                PING: {
                    desc: "Ping",
                    default: [70]
                },
                TOGGLE_MOVEMENT: {
                    desc: "Old Movement Toggle",
                    default: [79]
                }
            },
            s = {
                3: "break",
                8: "backspace / delete",
                9: "tab",
                12: "clear",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                19: "pause/break",
                20: "caps lock",
                27: "escape",
                32: "spacebar",
                33: "page up",
                34: "page down",
                35: "end",
                36: "home",
                37: "←",
                38: "↑",
                39: "→",
                40: "↓",
                41: "select",
                42: "print",
                43: "execute",
                44: "print screen",
                45: "insert",
                46: "delete",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                58: ":",
                59: "semicolon (firefox), equals",
                60: "<",
                61: "equals (firefox)",
                63: "ß",
                64: "@ (firefox)",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                91: "Windows Key / Left ⌘",
                92: "right window key",
                93: "Windows Menu / Right ⌘",
                96: "numpad 0",
                97: "numpad 1",
                98: "numpad 2",
                99: "numpad 3",
                100: "numpad 4",
                101: "numpad 5",
                102: "numpad 6",
                103: "numpad 7",
                104: "numpad 8",
                105: "numpad 9",
                106: "multiply",
                107: "add",
                108: "numpad period (firefox)",
                109: "subtract",
                110: "decimal point",
                111: "divide",
                112: "f1",
                113: "f2",
                114: "f3",
                115: "f4",
                116: "f5",
                117: "f6",
                118: "f7",
                119: "f8",
                120: "f9",
                121: "f10",
                122: "f11",
                123: "f12",
                124: "f13",
                125: "f14",
                126: "f15",
                127: "f16",
                128: "f17",
                129: "f18",
                130: "f19",
                131: "f20",
                132: "f21",
                133: "f22",
                134: "f23",
                135: "f24",
                144: "num lock ",
                145: "scroll lock",
                160: "^",
                161: "!",
                163: "#",
                164: "$",
                165: "ù",
                166: "page backward",
                167: "page forward",
                169: "closing paren (AZERTY)",
                170: "*",
                171: "~ + * key",
                173: "minus (firefox), mute/unmute",
                174: "decrease volume level",
                175: "increase volume level",
                176: "next",
                177: "previous",
                178: "stop",
                179: "play/pause",
                180: "e-mail",
                181: "mute/unmute (firefox)",
                182: "decrease volume level (firefox)",
                183: "increase volume level (firefox)",
                186: "semi-colon / ñ",
                187: "equal sign ",
                188: "comma",
                189: "dash ",
                190: "period ",
                191: "forward slash / ç",
                192: "grave accent / ñ",
                193: "?, / or °",
                194: "numpad period (chrome)",
                219: "open bracket ",
                220: "back slash ",
                221: "close bracket ",
                222: "single quote ",
                223: "`",
                224: "left or right ⌘ key (firefox)",
                225: "altgr",
                226: "< /git >",
                230: "GNOME Compose Key",
                233: "XF86Forward",
                234: "XF86Back",
                255: "toggle touchpad"
            };
        for (var l in a) a[l].current = r(l) || a[l].default;
        e.exports = i
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(212),
            i = n(291),
            a = n(316),
            s = r.createClass({
                displayName: "AccountOptions",
                getInitialState: function() {
                    var e;
                    return i.GIO_LINKED_EMAIL && (e = i.GIO_LINKED_EMAIL), {
                        linkEmail: "",
                        recoverEmail: "",
                        linkedEmail: e
                    }
                },
                onLinkEmailChange: function(e) {
                    this.setState({
                        linkEmail: e.target.value
                    })
                },
                onRecoverEmailChange: function(e) {
                    this.setState({
                        recoverEmail: e.target.value
                    })
                },
                linkEmail: function() {
                    var e = this.state.linkEmail;
                    if (!a(e)) return void this.setState({
                        linkError: "Please enter a valid email."
                    });
                    if (e === this.state.linkedEmail) return void this.setState({
                        linkError: "This email is already linked to your account."
                    });
                    var t = this;
                    this.setState({
                        linking: !0
                    }), o.linkEmail(e, function(n) {
                        t.setState({
                            linking: !1
                        }), n ? t.setState({
                            linkError: n
                        }) : (i.GIO_LINKED_EMAIL = e, t.setState({
                            linkedEmail: e,
                            linkEmail: "",
                            linkError: void 0
                        }))
                    })
                },
                recoverAccount: function() {
                    var e = this.state.recoverEmail;
                    if (!a(e)) return void this.setState({
                        recoverError: "Please enter a valid email."
                    });
                    var t = this;
                    this.setState({
                        recovering: !0
                    }), o.recoverAccount(e, function(e) {
                        t.setState({
                            recovering: !1
                        }), e ? t.setState({
                            recovered: !0,
                            recoverError: void 0
                        }) : t.setState({
                            recoverError: "We couldn't find an account linked to that email."
                        })
                    })
                },
                render: function() {
                    var e = {
                            backgroundColor: "#eee",
                            padding: "5px"
                        },
                        t = {
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                            padding: "5px"
                        };
                    return r.createElement("div", {
                        id: "account-options",
                        className: "relative"
                    }, r.createElement("center", null, r.createElement("p", {
                        style: {
                            marginBottom: "30px"
                        }
                    }, "Accounts on generals.io are saved ", r.createElement("span", {
                        className: "bold"
                    }, "in your browser"), ". That means that if you switch browsers or clear your browser data, you'll lose your account."), this.state.linkedEmail ? r.createElement("p", {
                        style: e
                    }, "Linked Email: ", r.createElement("span", {
                        className: "bold"
                    }, this.state.linkedEmail), " ", r.createElement("span", {
                        className: "checkmark-green"
                    }, "✓")) : r.createElement("p", null, r.createElement("span", {
                        className: "bold"
                    }, "Linking"), " an email to your account lets you recover your account if you lose your account."), r.createElement("input", {
                        type: "text",
                        placeholder: "name@example.com",
                        value: this.state.linkEmail,
                        onChange: this.onLinkEmailChange
                    }), this.state.linking ? r.createElement("p", null, " Linking... ") : r.createElement("button", {
                        className: "small inverted",
                        onClick: this.linkEmail
                    }, this.state.linkedEmail ? "Link Another Email" : "Link Email"), this.state.linkError ? r.createElement("p", {
                        style: t
                    }, this.state.linkError) : null, r.createElement("div", {
                        style: {
                            marginTop: "30px"
                        }
                    }, this.state.recovered ? r.createElement("p", {
                        style: e
                    }, "Success! Check your email to recover your account.") : r.createElement("p", null, "If you've lost your account, just enter the email linked to your account and we'll send you a link to ", r.createElement("span", {
                        className: "bold"
                    }, "recover"), " it."), this.state.recovered ? null : r.createElement("input", {
                        type: "text",
                        placeholder: "name@example.com",
                        value: this.state.recoverEmail,
                        onChange: this.onRecoverEmailChange
                    }), this.state.recovering ? r.createElement("p", null, " Recovering... ") : r.createElement("button", {
                        className: "small inverted",
                        onClick: this.recoverAccount
                    }, this.state.recovered ? "Resend email" : "Recover Account"), this.state.recoverError ? r.createElement("p", {
                        style: t
                    }, this.state.recoverError) : null)))
                }
            });
        e.exports = s
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if ((0, a.default)(e), t = (0, l.default)(t, d), t.require_display_name || t.allow_display_name) {
                var n = e.match(f);
                if (n) e = n[1];
                else if (t.require_display_name) return !1
            }
            var r = e.split("@"),
                o = r.pop(),
                i = r.join("@"),
                s = o.toLowerCase();
            if ("gmail.com" !== s && "googlemail.com" !== s || (i = i.replace(/\./g, "").toLowerCase()), !(0, u.default)(i, {
                    max: 64
                }) || !(0, u.default)(o, {
                    max: 256
                })) return !1;
            if (!(0, h.default)(o, {
                    require_tld: t.require_tld
                })) return !1;
            if ('"' === i[0]) return i = i.slice(1, i.length - 1), t.allow_utf8_local_part ? g.test(i) : v.test(i);
            for (var c = t.allow_utf8_local_part ? y : m, p = i.split("."), b = 0; b < p.length; b++)
                if (!c.test(p[b])) return !1;
            return !0
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = o;
        var i = n(317),
            a = r(i),
            s = n(318),
            l = r(s),
            c = n(319),
            u = r(c),
            p = n(320),
            h = r(p),
            d = {
                allow_display_name: !1,
                require_display_name: !1,
                allow_utf8_local_part: !0,
                require_tld: !0
            },
            f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,
            m = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
            v = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
            y = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
            g = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
        e.exports = t.default
    },
    function(e, t) {
        "use strict";

        function n(e) {
            if ("string" != typeof e) throw new TypeError("This library (validator.js) validates strings only")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n, e.exports = t.default
    },
    function(e, t) {
        "use strict";

        function n() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
            for (var n in t) "undefined" == typeof e[n] && (e[n] = t[n]);
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n, e.exports = t.default
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            (0, s.default)(e);
            var n = void 0,
                r = void 0;
            "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? (n = t.min || 0, r = t.max) : (n = arguments[1], r = arguments[2]);
            var o = encodeURI(e).split(/%..|./).length - 1;
            return o >= n && ("undefined" == typeof r || o <= r)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.default = o;
        var a = n(317),
            s = r(a);
        e.exports = t.default
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            (0, a.default)(e), t = (0, l.default)(t, c), t.allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1));
            var n = e.split(".");
            if (t.require_tld) {
                var r = n.pop();
                if (!n.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(r)) return !1
            }
            for (var o, i = 0; i < n.length; i++) {
                if (o = n[i], t.allow_underscores && (o = o.replace(/_/g, "")), !/^[a-z\u00a1-\uffff0-9-]+$/i.test(o)) return !1;
                if (/[\uff01-\uff5e]/.test(o)) return !1;
                if ("-" === o[0] || "-" === o[o.length - 1]) return !1
            }
            return !0
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = o;
        var i = n(317),
            a = r(i),
            s = n(318),
            l = r(s),
            c = {
                require_tld: !0,
                allow_underscores: !1,
                allow_trailing_dot: !1
            };
        e.exports = t.default
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = r.createClass({
                displayName: "Ad",
                getInitialState: function() {
                    return {
                        useA4G: 728 === this.props.width && Math.random() < .5
                    }
                },
                componentDidMount: function() {
                    if (this.state.useA4G) ! function(e, t) {
                        var n = document.createElement("SCRIPT"),
                            r = document.body,
                            o = e + "/async-ajs.min.js",
                            i = function(e, t) {
                                for (var n = 0; n < e.length; n++)
                                    if (e[n].src === t) return !0;
                                return !1
                            }(document.getElementsByTagName("SCRIPT"), o);
                        i || (n.type = "text/javascript", n.async = !0, n.src = o, t && n.setAttribute("data-a4g-charset", t), r.appendChild(n))
                    }("https" === location.protocol ? "https://ad4game-a.akamaihd.net" : "http://cdn.ad4game.com", "");
                    else {
                        var e = this.props.id;
                        googletag.cmd.push(function() {
                            googletag.display(e)
                        })
                    }
                },
                render: function() {
                    var e = Object.assign({}, this.props.style, {
                        width: this.props.width + "px",
                        height: this.props.height + "px"
                    });
                    return r.createElement("div", {
                        className: "relative",
                        style: e
                    }, r.createElement("div", {
                        className: "absolute-fill",
                        style: {
                            backgroundColor: "#333"
                        }
                    }, r.createElement("div", {
                        className: "center",
                        style: {
                            textAlign: "center",
                            minWidth: "90%"
                        }
                    }, r.createElement("p", {
                        className: "bold",
                        style: {
                            whiteSpace: "nowrap",
                            margin: "1px",
                            fontSize: "14px"
                        }
                    }, "Advertisement"), r.createElement("p", {
                        style: {
                            margin: "1px",
                            fontSize: "11px"
                        }
                    }, "Ads help keep updates coming and generals.io servers running!"))), this.state.useA4G ? null : r.createElement("div", {
                        id: this.props.id,
                        className: "absolute-fill"
                    }), this.state.useA4G ? r.createElement("ins", {
                        "data-a4g-zone": 61324,
                        "data-a4g-block": !0,
                        "data-a4g-blockcampaign": !0,
                        className: "absolute-fill"
                    }) : null)
                }
            });
        e.exports = o
    },
    function(e, t, n) {
        var r = n(323);
        e.exports = function(e, t, n) {
            function o() {
                var u = r() - l;
                u < t && u > 0 ? i = setTimeout(o, t - u) : (i = null, n || (c = e.apply(s, a), i || (s = a = null)))
            }
            var i, a, s, l, c;
            return null == t && (t = 100),
                function() {
                    s = this, a = arguments, l = r();
                    var u = n && !i;
                    return i || (i = setTimeout(o, t)), u && (c = e.apply(s, a), s = a = null), c
                }
        }
    },
    function(e, t) {
        function n() {
            return (new Date).getTime()
        }
        e.exports = Date.now || n
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(180),
            i = n(268),
            a = n(212),
            s = n(2),
            l = n(274),
            c = n(325),
            u = n(326),
            p = n(321),
            h = r.createClass({
                displayName: "Queue",
                componentDidMount: function() {
                    this.props.isTeamQueue && l.changeURL("/teams/" + encodeURIComponent(this.props.team_id))
                },
                render: function() {
                    var e = Math.floor(this.props.queueTimeLeft / 60),
                        t = this.props.queueTimeLeft % 60;
                    t < 10 && (t = "0" + t);
                    var n = "1v1" === this.props.queue_id,
                        o = "2v2" === this.props.queue_id;
                    return r.createElement("div", {
                        className: "center"
                    }, r.createElement("center", null, this.props.prestart ? r.createElement("h1", {
                        className: "queue-title"
                    }, "Game Starting...") : this.props.isTeamQueue ? r.createElement("div", null, r.createElement("h2", {
                        style: {
                            whiteSpace: "nowrap",
                            marginBottom: "5px"
                        }
                    }, "Share this link:"), r.createElement("p", {
                        className: "share-link"
                    }, "http://" + window.location.hostname + "/teams/" + encodeURIComponent(this.props.team_id))) : r.createElement("h1", {
                        className: "queue-title"
                    }, n ? "Finding a match..." : "Waiting for " + (o ? "teams" : "players") + "..."), n ? null : r.createElement("h2", null, o ? Math.ceil(this.props.numPlayers / 2) : this.props.numPlayers, " of ", this.props.isTeamQueue || o ? 2 : s.PLAYER_CAP, " ", o ? " teams" : ""), !this.props.isTeamQueue && !this.props.prestart && !this.props.queue_id && this.props.numPlayers >= 2 ? r.createElement("p", null, "Game automatically starting in ", e, ":", t) : null, r.createElement("div", null, n && !this.props.prestart ? r.createElement("p", null, "We're searching for an opponent around your skill level.") : null, this.props.isTeamQueue || n ? null : r.createElement("p", {
                        style: {
                            marginRight: "3px",
                            display: "inline"
                        }
                    }, "You are:"), this.props.isTeamQueue || n ? null : r.createElement(u, {
                        playerIndex: this.props.playerIndex
                    }), this.props.prestart ? null : r.createElement("p", {
                        className: "queue-gong-message"
                    }, "We'll play a gong sound when the game starts. Turn your volume up!")), this.props.prestart || n || this.props.isTeamQueue || o || !(this.props.numPlayers > 1) ? null : r.createElement(c, null), r.createElement("br", null), this.props.prestart ? null : r.createElement("button", {
                        className: "small",
                        onClick: this.props.onCancelClicked.bind(this)
                    }, "Cancel"), r.createElement(p, {
                        id: "div-gpt-ad-1484365524244-1",
                        width: 336,
                        height: 280,
                        style: {
                            marginTop: "10px"
                        }
                    })))
                }
            });
        e.exports = o.connect(function(e) {
            return e.queue
        }, function(e) {
            return {
                onCancelClicked: function() {
                    this.props.isTeamQueue ? a.leaveTeam(this.props.team_id) : a.cancel(), e(i.cancel())
                }
            }
        })(h)
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(266),
            i = n(212),
            a = r.createClass({
                displayName: "ForceStartButton",
                getInitialState: function() {
                    return {
                        isForceStarting: !1
                    }
                },
                onForceClicked: function() {
                    i.setForceStart(!this.state.isForceStarting), this.setState({
                        isForceStarting: !this.state.isForceStarting
                    })
                },
                render: function() {
                    var e = o.getState().queue;
                    return r.createElement("button", {
                        onClick: this.onForceClicked,
                        className: this.state.isForceStarting ? "inverted" : ""
                    }, "Force Start ", e.numForce, " / ", Math.ceil(.7 * e.numPlayers))
                }
            });
        e.exports = a
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(2),
            i = r.createClass({
                displayName: "InlineColorBlock",
                render: function() {
                    return !Number.isInteger(this.props.playerIndex) || this.props.playerIndex < 0 || this.props.playerIndex >= o.PLAYER_COLORS.length ? null : r.createElement("span", {
                        className: "inline-color-block " + o.PLAYER_COLORS[this.props.playerIndex]
                    })
                }
            });
        e.exports = i
    },
    function(e, t, n) {
        "use strict";
        for (var r = n(4), o = n(180), i = n(268), a = n(325), s = n(212), l = n(2), c = n(178), u = n(274), p = n(328), h = n(312), d = n(326), f = n(314), m = [], v = 0; v < l.PLAYER_CAP; v++) m.push(v + 1);
        var y = r.createClass({
            displayName: "CustomQueue",
            componentDidMount: function() {
                u.changeURL("/games/" + encodeURIComponent(this.props.queue_id)), window.addEventListener("keydown", this.onKeyDown);
                var e = this;
                this.teamOnClicks = m.map(function(t) {
                    return e.joinTeam.bind(e, t)
                })
            },
            componentWillUnmount: function() {
                window.removeEventListener("keydown", this.onKeyDown)
            },
            onKeyDown: function(e) {
                f("CHAT").indexOf(e.keyCode) !== -1 && (document.getElementById("chatroom-input").focus(), e.preventDefault(), e.stopPropagation())
            },
            joinTeam: function(e) {
                s.setCustomTeam(this.props.queue_id, e)
            },
            renderTeams: function() {
                if (!this.props.teams || !this.props.usernames) return null;
                for (var e = [], t = 0; t < l.PLAYER_CAP; t++) e.push([]);
                for (var t = 0; t < this.props.teams.length; t++) e[this.props.teams[t] - 1].push({
                    username: this.props.usernames[t],
                    playerIndex: t
                });
                for (var n = [], t = 0; t < e.length; t++) e[t].length && n.push(r.createElement("div", {
                    className: "custom-team-container",
                    key: "custom-team-" + t
                }, r.createElement("h4", null, "Team " + (t + 1)), e[t].map(function(e, n) {
                    return r.createElement("div", {
                        key: "custom-team" + t + "-" + n
                    }, r.createElement(d, {
                        playerIndex: e.playerIndex
                    }), r.createElement("p", null, e.username || "Anonymous"))
                })));
                return n
            },
            render: function() {
                var e = c.chatRoomForCustomGame(this.props.queue_id);
                return r.createElement("div", {
                    onKeyDown: this.onKeyDown
                }, r.createElement("div", {
                    className: "center"
                }, r.createElement("center", null, this.props.prestart ? r.createElement("h1", {
                    className: "queue-title"
                }, "Game Starting...") : r.createElement("div", null, r.createElement("h2", {
                    style: {
                        whiteSpace: "nowrap",
                        marginBottom: "5px"
                    }
                }, "Share this link:"), r.createElement("p", {
                    className: "share-link"
                }, "http://" + window.location.hostname + "/games/" + encodeURIComponent(this.props.queue_id))), this.props.prestart ? null : r.createElement("div", {
                    className: "custom-queue-teams-container"
                }, r.createElement("h3", {
                    style: {
                        margin: 0
                    }
                }, "Select your team:"), r.createElement(h, {
                    tab_id: "custom-team",
                    selectedTab: this.props.teams && this.props.teams[this.props.playerIndex] - 1 || 0,
                    onClicks: this.teamOnClicks,
                    titles: m
                }), r.createElement("br", null), this.renderTeams()), r.createElement("div", null, r.createElement("p", {
                    style: {
                        marginRight: "3px",
                        display: "inline"
                    }
                }, "You are:"), r.createElement(d, {
                    playerIndex: this.props.playerIndex
                }), this.props.prestart ? null : r.createElement("p", {
                    className: "queue-gong-message"
                }, "We'll play a gong sound when the game starts. Turn your volume up!")), !this.props.prestart && this.props.numPlayers > 1 ? r.createElement(a, null) : null, r.createElement("br", null), this.props.prestart ? null : r.createElement("button", {
                    className: "small",
                    onClick: this.props.onCancelClicked.bind(this)
                }, "Cancel"))), r.createElement("div", {
                    id: "custom-queue-chat"
                }, r.createElement(p, {
                    chat_room: e,
                    messages: this.props.all_chats[e]
                })))
            }
        });
        e.exports = o.connect(function(e) {
            return Object.assign({
                all_chats: e.chat
            }, e.queue)
        }, function(e) {
            return {
                onCancelClicked: function() {
                    s.cancel(), e(i.cancel())
                }
            }
        })(y)
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(329),
            i = n(212),
            a = "[team] ",
            s = r.createClass({
                displayName: "ChatRoom",
                getInitialState: function() {
                    return {
                        currentMessage: ""
                    }
                },
                handleMessageChange: function(e) {
                    this.props.useTeamChat ? this.setState({
                        currentMessage: e.target.value.substring(a.length)
                    }) : this.setState({
                        currentMessage: e.target.value
                    })
                },
                handleKeyDown: function(e) {
                    e.stopPropagation()
                },
                handleKeyPress: function(e) {
                    e.stopPropagation();
                    var t = e.which || e.keyCode;
                    if (13 === t)
                        if (this.state.currentMessage) {
                            var n = this.props.team_chat_room,
                                r = this.props.chat_room;
                            i.sendChatMessage(this.props.useTeamChat ? n || r : r, this.state.currentMessage, this.props.useTeamChat && n ? a : ""), this.setState({
                                currentMessage: ""
                            })
                        } else this.refs.input.blur()
                },
                handleFocus: function() {
                    this.setState({
                        focused: !0
                    })
                },
                handleBlur: function() {
                    this.setState({
                        focused: !1
                    })
                },
                componentWillUpdate: function() {
                    var e = this.refs.list;
                    this.shouldScrollBottom = e.scrollTop + e.offsetHeight >= e.scrollHeight - 10
                },
                componentDidUpdate: function() {
                    if (this.shouldScrollBottom) {
                        var e = this.refs.list;
                        e.scrollTop = e.scrollHeight
                    }
                },
                toggleMinimizeChat: function() {
                    this.setState({
                        minimizeChat: !this.state.minimizeChat
                    })
                },
                render: function() {
                    if (this.props.messages) var e = this,
                        t = this.props.messages.map(function(t, n) {
                            return r.createElement(o, {
                                message: t,
                                key: "chat_message_" + e.props.chat_room + n
                            })
                        });
                    var n = "chat-messages-container" + (this.state.minimizeChat ? " minimized" : "");
                    return r.createElement("div", null, r.createElement("div", {
                        className: n,
                        onClick: this.toggleMinimizeChat,
                        ref: "list"
                    }, t), r.createElement("input", {
                        id: "chatroom-input",
                        type: "text",
                        ref: "input",
                        placeholder: this.props.team_chat_room ? "[Enter] to chat, [t] to teamchat" : "Press [Enter] to chat.",
                        value: (this.state.focused && this.props.useTeamChat ? a : "") + this.state.currentMessage,
                        onChange: this.handleMessageChange,
                        onKeyPress: this.handleKeyPress,
                        onKeyDown: this.handleKeyDown,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    }))
                }
            });
        e.exports = s
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(2),
            i = n(326),
            a = r.createClass({
                displayName: "ChatMessage",
                render: function() {
                    var e = this.props.message,
                        t = e.hasOwnProperty("playerIndex") ? o.PLAYER_COLORS[e.playerIndex] : null;
                    return e.hasOwnProperty("username") ? r.createElement("p", {
                        className: "chat-message"
                    }, e.prefix ? r.createElement("span", {
                        className: "bold"
                    }, e.prefix) : null, t ? r.createElement(i, {
                        playerIndex: e.playerIndex
                    }) : null, r.createElement("span", {
                        className: "username"
                    }, e.username), ": ", e.text) : r.createElement("p", {
                        className: "chat-message server-chat-message"
                    }, e.text)
                }
            });
        e.exports = a
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(180),
            i = n(270),
            a = n(331),
            s = n(328),
            l = n(266),
            c = (n(2), n(178)),
            u = n(310),
            p = n(333).Tutorial,
            h = n(212),
            d = n(292),
            f = n(307),
            m = (n(274), n(312)),
            v = n(334),
            y = n(321),
            g = r.createClass({
                displayName: "GamePage",
                getInitialState: function() {
                    return {
                        shareReplayStartTurn: "",
                        useShareReplayStartTurn: !1
                    }
                },
                exit: function() {
                    this.props.isReplay ? d.exitReplay() : h.leaveGame(), l.dispatch(i.exit())
                },
                exitOrSpectate: function() {
                    this.props.canSpectate && !this.props.ended ? this.setState({
                        isSpectating: !0
                    }) : this.exit()
                },
                focusChat: function(e) {
                    this.props.isLocalGame || (document.getElementById("chatroom-input").focus(), this.setState({
                        isTeamChat: e
                    }))
                },
                toggleAutoPlay: function() {
                    l.dispatch(i.toggleAutoPlay())
                },
                setAutoPlaySpeed: function(e) {
                    l.dispatch(i.setAutoPlaySpeed(e))
                },
                shareReplay: function() {
                    this.setState({
                        showingShareReplay: !0
                    })
                },
                exitShareReplay: function() {
                    this.setState({
                        showingShareReplay: !1
                    })
                },
                onShareReplayUseTurnChange: function(e) {
                    this.setState({
                        useShareReplayStartTurn: e.target.checked
                    })
                },
                onShareReplayStartTimeKeyDown: function(e) {
                    e.stopPropagation()
                },
                onShareReplayStartTimeChange: function(e) {
                    if (e.target.value.length) {
                        var t = parseInt(e.target.value);
                        Number.isInteger(t) && this.setState({
                            shareReplayStartTurn: t
                        })
                    } else this.setState({
                        shareReplayStartTurn: ""
                    })
                },
                onReplayTurnJump: function() {
                    var e = document.getElementById("replay-turn-jump-input"),
                        t = parseInt(e.value);
                    Number.isInteger(t) && (d.jumpToTurn(t), e.value = "", e.blur())
                },
                onReplayTurnJumpKeyDown: function(e) {
                    e.stopPropagation(), 13 === e.keyCode && this.onReplayTurnJump()
                },
                watchReplay: function() {
                    "undefined" != typeof ga && ga("send", "event", "Replay", "watch");
                    var e = this.props.replay_id;
                    window.open("/replays/" + e)
                },
                closeAd: function() {
                    this.setState({
                        hideReplayAd: !0
                    })
                },
                playAgain: function() {
                    l.dispatch(i.playAgain(this.props.playAgainUrl))
                },
                render: function() {
                    var e = Number.isInteger(this.props.turn) ? Math.floor(this.props.turn / 2) : 0;
                    return r.createElement("div", {
                        id: "game-page"
                    }, r.createElement(a, {
                        scrollable: !this.props.lost && !this.props.won || this.props.canSpectate || this.state.isSpectating,
                        isReplay: this.props.isReplay,
                        toggleAutoPlay: this.toggleAutoPlay,
                        focusChat: this.focusChat
                    }), !this.state.isSpectating && this.props.lost ? r.createElement(u, {
                        title: "Game Over",
                        body: r.createElement("span", null, "You were defeated by ", r.createElement("span", {
                            style: {
                                fontFamily: "Quicksand-Bold"
                            }
                        }, this.props.usernames[this.props.gameOverData.killer]), "."),
                        button: this.props.canSpectate && !this.props.ended ? "Spectate" : "Exit",
                        button2: "Watch Replay",
                        button3: this.props.playAgainUrl ? "Play Again" : null,
                        onClick: this.exitOrSpectate,
                        onClick2: this.watchReplay,
                        onClick3: this.playAgain
                    }) : null, !this.state.isSpectating && this.props.won ? this.props.isTutorial ? r.createElement(u, {
                        title: "You won!",
                        button: "Exit",
                        onClick: this.exit
                    }) : r.createElement(u, {
                        title: "You won!",
                        button: "Exit",
                        button2: "Watch Replay",
                        button3: this.props.playAgainUrl ? "Play Again" : null,
                        onClick: this.exit,
                        onClick2: this.watchReplay,
                        onClick3: this.playAgain
                    }) : null, this.props.isLocalGame ? null : r.createElement("div", {
                        id: "in-game-chat"
                    }, r.createElement(s, {
                        chat_room: this.props.chat_room,
                        team_chat_room: this.props.team_chat_room,
                        messages: this.props.chat_messages,
                        useTeamChat: c.hasDuplicate(this.props.teams) && this.state.isTeamChat
                    })), r.createElement(v, {
                        stars: this.props.stars,
                        scores: this.props.scores,
                        usernames: this.props.usernames,
                        teams: this.props.teams
                    }), r.createElement("div", {
                        id: "turn-counter"
                    }, "Turn ", e), this.props.isReplay ? r.createElement("div", {
                        id: "replay-top-left"
                    }, r.createElement("div", {
                        id: "replay-turn-jump",
                        className: "background"
                    }, "Jump to turn:", r.createElement("input", {
                        type: "text",
                        id: "replay-turn-jump-input",
                        className: "unselectable",
                        placeholder: Math.floor(this.props.turn / 2),
                        onKeyDown: this.onReplayTurnJumpKeyDown
                    }), r.createElement("div", {
                        id: "replay-turn-jump-button",
                        className: "inline-button",
                        onClick: this.onReplayTurnJump
                    }, "→")), r.createElement("button", {
                        className: this.props.autoPlay ? "small inverted" : "small",
                        onClick: this.toggleAutoPlay,
                        style: {
                            display: "block"
                        }
                    }, "AutoPlay"), r.createElement("button", {
                        className: "small",
                        onClick: this.exit,
                        style: {
                            display: "block"
                        }
                    }, "Exit")) : null, this.state.isSpectating ? r.createElement("button", {
                        className: "small",
                        onClick: this.exit,
                        style: {
                            position: "fixed",
                            zIndex: "25",
                            top: "35px",
                            left: "-10px"
                        }
                    }, "Exit") : null, this.props.isReplay ? r.createElement("button", {
                        className: "small",
                        id: "share-replay-button",
                        onClick: this.shareReplay
                    }, "Share Replay") : null, this.state && this.state.showingShareReplay ? r.createElement("div", {
                        className: "popup-background",
                        style: {
                            zIndex: 50
                        }
                    }, r.createElement("div", {
                        id: "share-replay",
                        className: "alert center"
                    }, r.createElement("center", null, r.createElement("h2", {
                        className: "unselectable",
                        style: {
                            color: "black"
                        }
                    }, "Share this Replay:"), r.createElement("p", {
                        className: "share-link inverted",
                        style: {
                            margin: "10px",
                            padding: "5px 20px"
                        }
                    }, "http://" + window.location.hostname + "/replays/" + this.props.replay_id + (this.state.useShareReplayStartTurn ? "?t=" + (this.state.shareReplayStartTurn || Math.floor(this.props.turn / 2)) : "")), r.createElement("input", {
                        type: "checkbox",
                        style: {
                            display: "inline-block"
                        },
                        checked: this.state.useShareReplayStartTurn,
                        onChange: this.onShareReplayUseTurnChange
                    }), r.createElement("p", {
                        className: "unselectable",
                        style: {
                            color: "black",
                            margin: "5px",
                            display: "inline-block"
                        }
                    }, "Start at Turn:"), r.createElement("input", {
                        type: "text",
                        className: "unselectable",
                        style: {
                            display: "inline-block",
                            padding: "5px",
                            fontSize: "16px",
                            width: "75px"
                        },
                        placeholder: Math.floor(this.props.turn / 2),
                        value: this.state.shareReplayStartTurn,
                        onKeyDown: this.onShareReplayStartTimeKeyDown,
                        onChange: this.onShareReplayStartTimeChange
                    }), r.createElement("br", null), r.createElement("button", {
                        className: "small inverted unselectable",
                        style: {
                            marginTop: "15px"
                        },
                        onClick: this.exitShareReplay
                    }, "Exit")))) : null, this.props.isReplay ? r.createElement("div", {
                        id: "replay-bottom",
                        className: "fixed-center-horizontal"
                    }, r.createElement("center", null, this.props.autoPlay ? r.createElement(m, {
                        tab_id: "replay-autoplay",
                        selectedTab: .5 === this.props.autoPlaySpeed ? 0 : 1 === this.props.autoPlaySpeed ? 1 : 2 === this.props.autoPlaySpeed ? 2 : 5 === this.props.autoPlaySpeed ? 3 : 4,
                        onClicks: [this.setAutoPlaySpeed.bind(null, .5), this.setAutoPlaySpeed.bind(null, 1), this.setAutoPlaySpeed.bind(null, 2), this.setAutoPlaySpeed.bind(null, 5), this.setAutoPlaySpeed.bind(null, 10)],
                        titles: ["0.5x", "1x", "2x", "5x", "10x"]
                    }) : null, this.props.autoPlay && !f ? r.createElement("br", null) : null, f ? null : r.createElement("div", {
                        id: "replay-bottom-bar",
                        className: "background"
                    }, r.createElement("div", null, r.createElement("span", {
                        className: "bold"
                    }, "[←]"), r.createElement("br", null), "Back"), r.createElement("div", null, r.createElement("span", {
                        className: "bold"
                    }, "[Spacebar]"), r.createElement("br", null), "Toggle Auto Play"), r.createElement("div", null, r.createElement("span", {
                        className: "bold"
                    }, "[→]"), r.createElement("br", null), "Next Move")), this.state && this.state.hideReplayAd ? null : r.createElement("div", {
                        id: "replay-ad-container"
                    }, r.createElement("button", {
                        onClick: this.closeAd,
                        className: "small",
                        style: {
                            boxShadow: "none",
                            margin: 0,
                            padding: "3px 15px",
                            fontSize: "12px"
                        }
                    }, "Hide ad"), r.createElement(y, {
                        id: "div-gpt-ad-1484365524244-2",
                        width: 728,
                        height: 90
                    })))) : null, this.props.isTutorial ? r.createElement(p, {
                        state: this.props.tutorialState,
                        scores: this.props.scores,
                        playerIndex: this.props.playerIndex,
                        numCities: this.props.cities ? this.props.cities.reduce(function(e, t) {
                            return 0 === this.props.map.tileAt(t) ? e + 1 : e
                        }.bind(this), 0) : 0,
                        playerDidWin: this.props.won
                    }) : null)
                }
            });
        e.exports = o.connect(function(e) {
            var t = e.game.chat_room;
            return Object.assign({
                chat_messages: e.chat[t] || []
            }, e.game)
        })(g)
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            switch (e) {
                case y:
                    return "large";
                case b:
                    return "small";
                case T:
                    return "tiny"
            }
        }
        var o = n(4),
            i = n(180),
            a = n(332),
            s = n(212),
            l = n(276),
            c = n(333),
            u = n(292),
            p = n(307),
            h = n(2),
            d = n(178),
            f = n(291),
            m = n(314),
            v = 3,
            y = -1,
            g = 0,
            b = 1,
            T = 2,
            S = 50,
            E = o.createClass({
                displayName: "GameMap",
                getInitialState: function() {
                    return {
                        selectedIndex: -1,
                        offset: {
                            x: 0,
                            y: 0
                        },
                        attackIndex: 1,
                        queuedAttacks: [],
                        zoom: p ? this.props.isReplay ? T : b : g,
                        wheel: 0
                    }
                },
                undoQueuedAttack: function() {
                    if (this.state.queuedAttacks.length > 0) {
                        var e = this.state.queuedAttacks[this.state.queuedAttacks.length - 1],
                            t = this.state.queuedAttacks.slice(0, -1);
                        this.state.selectedIndex === e.end ? this.setState({
                            queuedAttacks: t,
                            selectedIndex: e.begin
                        }) : this.setState({
                            queuedAttacks: t
                        })
                    }
                    s.undoMove()
                },
                clearQueuedAttacks: function() {
                    this.setState({
                        queuedAttacks: []
                    }), s.clearMoves()
                },
                enablePingMode: function() {
                    this.setState({
                        inPingMode: !0
                    })
                },
                disablePingMode: function() {
                    this.setState({
                        inPingMode: !1
                    })
                },
                pingTile: function(e) {
                    s.pingTile(e), f.has_pinged = !0, this.forceUpdate()
                },
                componentDidMount: function() {
                    window.addEventListener("keydown", this.onKeyDown)
                },
                componentWillUnmount: function() {
                    window.removeEventListener("keydown", this.onKeyDown)
                },
                shouldComponentUpdate: function(e, t) {
                    return this.props !== e || this.state.selectedIndex !== t.selectedIndex || this.state.selectedIs50 !== t.selectedIs50 || this.state.offset !== t.offset || this.state.queuedAttacks !== t.queuedAttacks || this.state.zoom !== t.zoom || this.state.inPingMode !== t.inPingMode
                },
                componentWillReceiveProps: function(e) {
                    if (e.attackIndex > this.props.attackIndex) {
                        var t = this.state.queuedAttacks.filter(function(t) {
                            return t.attackIndex > e.attackIndex
                        });
                        this.setState({
                            queuedAttacks: t
                        })
                    }
                    if (null !== this.props.playerIndex && !this.props.generals && e.generals) {
                        var n = e.generals[this.props.playerIndex],
                            r = e.map.width,
                            o = (e.map.height, 25 + n % r * 50),
                            i = 25 + 50 * Math.floor(n / r),
                            a = window.innerWidth / 2 - o,
                            s = window.innerHeight / 2 - i;
                        this.setState({
                            offset: {
                                x: a,
                                y: s
                            }
                        })
                    }
                },
                onKeyDown: function(e) {
                    var t = "enable" == f.old_movement;
                    if (this.state.inPingMode) return void this.disablePingMode();
                    if (m("ZOOMIN").indexOf(e.keyCode) !== -1) return void(this.state.zoom > y && this.setState({
                        zoom: this.state.zoom - 1
                    }));
                    if (m("ZOOMOUT").indexOf(e.keyCode) !== -1) return void(this.state.zoom < T && this.setState({
                        zoom: this.state.zoom + 1
                    }));
                    if (this.props.isReplay) return void(m("AUTOPLAY").indexOf(e.keyCode) !== -1 ? this.props.toggleAutoPlay() : m("RIGHT").indexOf(e.keyCode) !== -1 ? u.nextReplayTurn() : m("LEFT").indexOf(e.keyCode) !== -1 && u.backReplay());
                    if (e.preventDefault(), e.stopPropagation(), !this.props.isReplay && m("PING").indexOf(e.keyCode) !== -1) {
                        if (!d.hasDuplicate(this.props.teams)) return;
                        return void this.enablePingMode()
                    }
                    if (m("UNDO").indexOf(e.keyCode) !== -1) return void this.undoQueuedAttack();
                    if (m("CLEAR").indexOf(e.keyCode) !== -1) return void this.clearQueuedAttacks();
                    if (m("DESELECT").indexOf(e.keyCode) !== -1) return void this.setState({
                        selectedIndex: -1
                    });
                    if (m("CHAT").indexOf(e.keyCode) !== -1) return void this.props.focusChat(!1);
                    if (m("TEAMCHAT").indexOf(e.keyCode) !== -1) return void this.props.focusChat(!0);
                    if (m("TOGGLE_MOVEMENT").indexOf(e.keyCode) !== -1 && (f.old_movement = "enable" == f.old_movement ? "disable" : "enable"), !(this.state.selectedIndex < 0)) {
                        var n = Math.floor(this.state.selectedIndex / this.props.map.width),
                            r = this.state.selectedIndex % this.props.map.width,
                            o = 0,
                            i = 0;
                        if (m("LEFT").indexOf(e.keyCode) !== -1) i = -1;
                        else if (m("UP").indexOf(e.keyCode) !== -1) o = -1;
                        else if (m("RIGHT").indexOf(e.keyCode) !== -1) i = 1;
                        else {
                            if (m("DOWN").indexOf(e.keyCode) === -1) return;
                            o = 1
                        }
                        var a = n + o,
                            s = r + i,
                            p = this.props.map.tileAt(this.props.map.indexFrom(a, s));
                        p !== l.TILE_MOUNTAIN ? (this.onTileClick(a, s), t && (p === this.props.playerIndex || this.props.teams && this.props.teams[p] === this.props.teams[this.props.playerIndex]) && this.onTileClick(a, s), c.onWASD && c.onWASD()) : t && this.setState({
                            selectedIndex: -1
                        })
                    }
                },
                onTileClick: function(e, t) {
                    var n = this.props.map,
                        r = "enable" == f.old_movement;
                    if (!(e < 0 || t < 0 || e >= n.height || t >= n.width)) {
                        var o = n.indexFrom(e, t);
                        if (this.state.inPingMode) this.pingTile(o), this.disablePingMode();
                        else if (this.state.selectedIndex < 0) this.setState({
                            selectedIndex: o,
                            selectedIs50: !1
                        });
                        else if (this.state.selectedIndex === o) this.state.selectedIs50 ? this.setState({
                            selectedIndex: -1
                        }) : this.setState({
                            selectedIs50: !0
                        });
                        else {
                            if (r) var i = {
                                selectedIndex: -1
                            };
                            else var i = {
                                selectedIndex: o,
                                selectedIs50: !1
                            };
                            if (n.isAdjacent(o, this.state.selectedIndex) && o !== this.state.selectedIndex) {
                                var a = this.state.selectedIndex;
                                s.attack(a, o, this.state.selectedIs50, this.state.attackIndex);
                                Object.assign(i, {
                                    queuedAttacks: this.state.queuedAttacks.concat([{
                                        attackIndex: this.state.attackIndex,
                                        begin: a,
                                        end: o
                                    }]),
                                    attackIndex: this.state.attackIndex + 1
                                })
                            }
                            this.setState(i)
                        }
                    }
                },
                onTileMouseDown: function(e, t, n, r) {
                    r.nativeEvent.which === v ? this.setState({
                        pingCoordinates: {
                            row: e,
                            col: t
                        }
                    }) : n && this.setState({
                        tileCoordinates: {
                            row: e,
                            col: t
                        }
                    }), this.onMouseDown(r, n)
                },
                onMouseDown: function(e, t) {
                    document.activeElement.blur(), e = this.convertTouchIfMobile(e), this.setState({
                        mouseDownLocation: {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }), t || this.setState({
                        selectedIndex: -1
                    }), this.setPrevMouseLocation(e)
                },
                onWheel: function(e) {
                    var t = this.state.wheel + e.deltaY;
                    Math.abs(t) > S && (this.onKeyDown({
                        keyCode: t < 0 ? m("ZOOMIN")[0] : m("ZOOMOUT")[0]
                    }), t = 0), this.setState({
                        wheel: t
                    })
                },
                onMouseMove: function(e) {
                    if (e = this.convertTouchIfMobile(e), this.state.prevMouseLocation && this.state.mouseDownLocation)
                        if (this.state.tileCoordinates || this.state.pingCoordinates) {
                            var t = Math.pow(e.clientX - this.state.mouseDownLocation.x, 2) + Math.pow(e.clientY - this.state.mouseDownLocation.y, 2);
                            t >= 625 && this.setState({
                                tileCoordinates: null,
                                pingCoordinates: null
                            })
                        } else c.onDrag && c.onDrag(), this.setState({
                            offset: {
                                x: this.state.offset.x + e.clientX - this.state.prevMouseLocation.x,
                                y: this.state.offset.y + e.clientY - this.state.prevMouseLocation.y
                            }
                        }), this.setPrevMouseLocation(e)
                },
                onMouseUp: function(e) {
                    this.state.tileCoordinates ? this.onTileClick(this.state.tileCoordinates.row, this.state.tileCoordinates.col) : this.state.pingCoordinates && !this.props.isReplay && d.hasDuplicate(this.props.teams) && this.pingTile(this.props.map.indexFrom(this.state.pingCoordinates.row, this.state.pingCoordinates.col)), this.setState({
                        prevMouseLocation: null,
                        tileCoordinates: null,
                        pingCoordinates: null
                    })
                },
                convertTouchIfMobile: function(e) {
                    return e.preventDefault(), e.stopPropagation(), e.touches && e.touches[0] && (e = e.touches[0]), e
                },
                setPrevMouseLocation: function(e) {
                    this.setState({
                        prevMouseLocation: {
                            x: e.clientX,
                            y: e.clientY
                        }
                    })
                },
                onContextMenu: function(e) {
                    return e.preventDefault(), !1
                },
                render: function() {
                    var e = f && !f.has_pinged;
                    return o.createElement("div", {
                        className: "relative",
                        style: {
                            top: this.state.offset.y,
                            left: this.state.offset.x
                        }
                    }, this.props.scrollable ? o.createElement("div", {
                        className: "game-scroll",
                        onMouseDown: this.onMouseDown,
                        onTouchStart: this.onMouseDown,
                        onMouseMove: this.onMouseMove,
                        onTouchMove: this.onMouseMove,
                        onMouseUp: this.onMouseUp,
                        onTouchEnd: this.onMouseUp,
                        onWheel: this.onWheel,
                        onContextMenu: this.onContextMenu
                    }) : null, o.createElement(A, {
                        props: this.props,
                        queuedAttacks: this.state.queuedAttacks,
                        selectedIndex: this.state.selectedIndex,
                        selectedIs50: this.state.selectedIs50,
                        onTileMouseDown: this.onTileMouseDown,
                        onMouseMove: this.onMouseMove,
                        onMouseUp: this.onMouseUp,
                        onWheel: this.onWheel,
                        zoomClass: this.state ? r(this.state.zoom) : null,
                        inPingMode: this.state && this.state.inPingMode
                    }), this.state && this.state.inPingMode ? o.createElement("div", {
                        className: "background center",
                        style: {
                            zIndex: "30",
                            whiteSpace: "nowrap",
                            position: "fixed",
                            top: "100px",
                            padding: "5px"
                        }
                    }, "Click on a tile to ping it.") : null, d.hasDuplicate(this.props.teams) && e && !p && !this.props.isReplay ? o.createElement("div", {
                        className: "background center",
                        style: {
                            zIndex: "30",
                            textAlign: "center",
                            position: "fixed",
                            top: "50px",
                            padding: "5px"
                        }
                    }, o.createElement("span", {
                        className: "bold"
                    }, "Right click"), " a tile to ping it to your teammate (if any), or ", o.createElement("span", {
                        className: "bold"
                    }, "press [F]"), " to enable ping mode.") : null)
                }
            }),
            A = o.createClass({
                displayName: "Tiles",
                shouldComponentUpdate: function(e) {
                    return this.props.props !== e.props || this.props.queuedAttacks !== e.queuedAttacks || this.props.selectedIndex !== e.selectedIndex || this.props.selectedIs50 !== e.selectedIs50 || this.props.zoomClass !== e.zoomClass
                },
                render: function() {
                    var e = this.props.props,
                        t = e.map,
                        n = e.playerIndex,
                        r = t.height,
                        i = [];
                    this.props.queuedAttacks.forEach(function(e) {
                        var t = e.begin,
                            n = e.end;
                        i[t] || (i[t] = {}), n === t + 1 ? i[t].right = !0 : n === t - 1 ? i[t].left = !0 : n > t ? i[t].down = !0 : i[t].up = !0
                    });
                    var s = e.pings || [];
                    s = s.filter(function(e) {
                        return Date.now() - e.timestamp <= h.PING_DURATION
                    }).map(function(e) {
                        return e.tileIndex
                    });
                    for (var c = [], u = 0; u < r; u++) {
                        for (var p = [], d = 0; d < t.width; d++) {
                            var f = t.indexFrom(u, d),
                                m = t.tileAt(f),
                                v = m === n,
                                y = f === this.props.selectedIndex,
                                g = this.props.selectedIndex >= 0 && t.isAdjacent(this.props.selectedIndex, f) && m !== l.TILE_MOUNTAIN,
                                b = this.props.inPingMode || v;
                            p.push(o.createElement(a, {
                                row: u,
                                col: d,
                                key: u + "tile" + d,
                                number: t.armyAt(t.indexFrom(u, d)),
                                tile: m,
                                isSelectable: b,
                                isSelected: y,
                                isSelected50: y && this.props.selectedIs50,
                                isAttackable: g,
                                isGeneral: e.generals && e.generals.indexOf(f) >= 0,
                                isCity: e.cities && e.cities.indexOf(f) >= 0,
                                isPinged: s.indexOf(f) >= 0,
                                onMouseDown: this.props.onTileMouseDown.bind(null, u, d, v || g || b),
                                onMouseMove: this.props.onMouseMove,
                                onMouseUp: this.props.onMouseUp,
                                onWheel: this.props.onWheel,
                                arrows: i[f],
                                zoomClass: this.props.zoomClass
                            }))
                        }
                        c.push(o.createElement("tr", {
                            key: "row" + u
                        }, p))
                    }
                    return o.createElement("table", {
                        id: "map",
                        className: this.props.inPingMode ? "pingmode" : "",
                        style: {
                            borderSpacing: 0
                        }
                    }, o.createElement("tbody", null, c))
                }
            });
        e.exports = i.connect(function(e) {
            return e.game
        }, null)(E)
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(2),
            i = n(276),
            a = r.createClass({
                displayName: "Tile",
                onContextMenu: function(e) {
                    return e.preventDefault(), !1
                },
                render: function() {
                    var e = "enable" == localStorage.old_movement,
                        t = this.props.tile === i.TILE_FOG || this.props.tile === i.TILE_FOG_OBSTACLE,
                        n = this.props.tile === i.TILE_MOUNTAIN,
                        a = this.props.tile === i.TILE_FOG_OBSTACLE,
                        s = o.PLAYER_COLORS[this.props.tile] || "";
                    return this.props.isSelected50 && (s += " selected50"), this.props.isGeneral ? s += " general" : this.props.isCity ? s += " city" : this.props.number > 0 && (s += " neutral"), e && !this.props.isPinged && this.props.isSelected && (s += " selected"), t && (s = "fog"), a && (s = "fog obstacle"), e || !this.props.isPinged && this.props.isSelected && (s += " selected"), this.props.isAttackable && (s += " attackable"), n ? s = "mountain" : (this.props.isSelectable && (s += " selectable"), this.props.isPinged && (s += " selected")), this.props.zoomClass && (s += " " + this.props.zoomClass), r.createElement("td", {
                        className: s,
                        onMouseDown: this.props.onMouseDown,
                        onTouchStart: this.props.onMouseDown,
                        onMouseMove: this.props.onMouseMove,
                        onTouchMove: this.props.onMouseMove,
                        onMouseUp: this.props.onMouseUp,
                        onTouchEnd: this.props.onMouseUp,
                        onWheel: this.props.onWheel,
                        onContextMenu: this.onContextMenu
                    }, t ? "" : this.props.isSelected50 ? "50%" : this.props.number || "", this.props.arrows && this.props.arrows.right ? r.createElement("div", {
                        className: "center-vertical",
                        style: {
                            right: 0
                        }
                    }, "→") : null, this.props.arrows && this.props.arrows.left ? r.createElement("div", {
                        className: "center-vertical",
                        style: {
                            left: 0
                        }
                    }, "←") : null, this.props.arrows && this.props.arrows.up ? r.createElement("div", {
                        className: "center-horizontal",
                        style: {
                            top: 0
                        }
                    }, "↑") : null, this.props.arrows && this.props.arrows.down ? r.createElement("div", {
                        className: "center-horizontal",
                        style: {
                            bottom: 0
                        }
                    }, "↓") : null, this.props.isPinged ? t || !this.props.number ? r.createElement("div", {
                        className: "ping center"
                    }, "⚑") : r.createElement("div", {
                        className: "ping center",
                        style: {
                            top: "8px",
                            left: "8px"
                        }
                    }, "⚑") : null)
                }
            });
        e.exports = a
    },
    function(e, t, n) {
        "use strict";
        var r = n(277),
            o = n(4),
            i = n(31),
            a = n(266),
            s = n(270),
            l = n(307),
            c = n(292),
            u = o.createClass({
                displayName: "Tutorial",
                moveToState: function(e) {
                    a.dispatch(s.updateTutorialState(e))
                },
                componentDidMount: function() {
                    setTimeout(this.moveToState.bind(this, r.STATE_MOVE), 4e3), ga("send", "event", "Tutorial", "start")
                },
                onDrag: function() {
                    delete p.onDrag;
                    var e = this;
                    setTimeout(function() {
                        c.enableTutorialCityCapture(), e.moveToState(r.STATE_CITY)
                    }, 500)
                },
                onWASD: function() {
                    delete p.onWASD, this.moveToState(r.STATE_DRAG), p.onDrag = this.onDrag
                },
                componentWillReceiveProps: function(e) {
                    this.props.state === r.STATE_MOVE && e.scores[e.playerIndex].tiles > 1 ? l ? (this.moveToState(r.STATE_DRAG), p.onDrag = this.onDrag) : (this.moveToState(r.STATE_WASD), p.onWASD = this.onWASD) : this.props.state === r.STATE_CITY && e.numCities > 0 ? this.moveToState(r.STATE_WIN) : this.props.state === r.STATE_WIN && e.playerDidWin === !0 && this.moveToState(r.STATE_WON)
                },
                render: function() {
                    var e = null;
                    return this.props.state === r.STATE_WELCOME ? e = o.createElement("div", {
                        key: "tutorial-state-welcome",
                        id: "tutorial"
                    }, o.createElement("p", null, "Welcome to ", o.createElement("span", {
                        className: "bold"
                    }, "generals.io"), "!")) : this.props.state === r.STATE_MOVE ? e = o.createElement("div", {
                        key: "tutorial-state-move",
                        id: "tutorial"
                    }, o.createElement("p", null, "First, ", o.createElement("span", {
                        className: "bold"
                    }, "Click on your general"), " to select the army there.", o.createElement("br", null), "Then, ", o.createElement("span", {
                        className: "bold"
                    }, "click on an adjacent tile"), " to capture it.")) : this.props.state === r.STATE_WASD ? e = o.createElement("div", {
                        key: "tutorial-state-wasd",
                        id: "tutorial"
                    }, o.createElement("p", null, "You can also use ", o.createElement("span", {
                        className: "bold"
                    }, "WASD"), " to move armies and capture tiles.", o.createElement("br", null), "Click on a tile you own, then ", o.createElement("span", {
                        className: "bold"
                    }, "press W, A, S, or D"), ".")) : this.props.state === r.STATE_DRAG ? e = o.createElement("div", {
                        key: "tutorial-state-drag",
                        id: "tutorial"
                    }, o.createElement("p", null, "Nice! Every tile you own will ", o.createElement("span", {
                        className: "bold"
                    }, "recruit 1 army every 25 seconds"), " for you.", o.createElement("br", null), "Now, ", o.createElement("span", {
                        className: "bold"
                    }, "Click and Drag"), " to move the map around.")) : this.props.state === r.STATE_CITY ? e = o.createElement("div", {
                        key: "tutorial-state-city",
                        id: "tutorial"
                    }, o.createElement("p", null, "See that gray city to the bottom right of your general?", o.createElement("br", null), "It costs 40 units to capture, but it will recruit 1 army every turn.", o.createElement("br", null), o.createElement("span", {
                        className: "bold"
                    }, "Group up your units and capture the city"), ".")) : this.props.state === r.STATE_WIN ? e = o.createElement("div", {
                        key: "tutorial-state-win",
                        id: "tutorial"
                    }, o.createElement("p", null, "Keep expanding until you find your enemy.", o.createElement("br", null), o.createElement("span", {
                        className: "bold"
                    }, "Capture the blue general to win"), ".", o.createElement("br", null), "You lose if your general gets captured.")) : this.props.state === r.STATE_WON && (e = o.createElement("div", {
                        key: "tutorial-state-won",
                        id: "tutorial"
                    }, o.createElement("p", null, "You're ready to play generals.io!"))), o.createElement(i, {
                        transitionName: "tutorial",
                        transitionEnterTimeout: 800,
                        transitionLeaveTimeout: 400
                    }, e)
                }
            }),
            p = {
                Tutorial: u
            };
        e.exports = p
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = n(301),
            i = n(2),
            a = n(178),
            s = n(307),
            l = r.createClass({
                displayName: "InGameLeaderboard",
                getInitialState: function() {
                    return {
                        minimized: s
                    }
                },
                componentWillMount: function() {
                    this.showTeamsInLeaderboard = a.hasDuplicate(this.props.teams)
                },
                toggleMinimize: function() {
                    this.setState({
                        minimized: !this.state.minimized
                    })
                },
                renderRow: function(e) {
                    var t = this.props.usernames[e.i] || "Anonymous",
                        n = this.props.stars ? this.props.stars[e.i] : "",
                        a = this.props.teams ? this.props.teams[e.i] : void 0;
                    return this.state.minimized && (t = " "), r.createElement("tr", {
                        className: 0 === e.tiles ? "dead" : e.dead ? "afk" : "",
                        key: "game-leaderboard-row" + e.i
                    }, this.showTeamsInLeaderboard && !this.state.minimized ? r.createElement("td", {
                        key: "game-leaderboard-team" + e.i
                    }, a) : null, this.state.minimized ? null : r.createElement("td", {
                        key: "game-leaderboard-stars" + e.i
                    }, " ", null !== n ? r.createElement(o, {
                        stars: n
                    }) : null, " "), r.createElement("td", {
                        key: "game-leaderboard-name" + e.i,
                        className: "leaderboard-name " + i.PLAYER_COLORS[e.i]
                    }, t), r.createElement("td", {
                        key: "game-leaderboard-score" + e.i
                    }, e.total), r.createElement("td", {
                        key: "game-leaderboard-tiles" + e.i
                    }, e.tiles))
                },
                render: function() {
                    if (this.props.scores) var e = this.props.scores.map(this.renderRow);
                    return r.createElement("table", {
                        id: "game-leaderboard",
                        onClick: this.toggleMinimize
                    }, r.createElement("tbody", null, r.createElement("tr", null, this.showTeamsInLeaderboard && !this.state.minimized ? r.createElement("td", null, "Team") : null, this.state.minimized ? null : r.createElement("td", null, " ", r.createElement(o, null), " "), this.state.minimized ? r.createElement("td", null, " ") : r.createElement("td", null, "Player"), r.createElement("td", null, "Army"), r.createElement("td", null, "Land")), e))
                }
            });
        e.exports = l
    },
    function(e, t, n) {
        "use strict";
        var r = n(4),
            o = r.createClass({
                displayName: "InvalidReplayPage",
                keepPlaying: function() {
                    window.open("http://" + window.location.hostname)
                },
                render: function() {
                    return r.createElement("div", {
                        className: "center",
                        style: {
                            textAlign: "center",
                            lineHeight: "1.3",
                            width: "90%"
                        }
                    }, r.createElement("img", {
                        src: "/icon.png",
                        style: {
                            width: "75px",
                            height: "75px"
                        }
                    }), r.createElement("h1", null, "Waiting for game to end..."), r.createElement("h4", null, "If you were just defeated in a game, your replay is not available yet.", r.createElement("br", null), r.createElement("span", {
                        className: "bold underline"
                    }, "Replays become available when the game ends"), ".", r.createElement("br", null), "Leave this tab open and ", r.createElement("span", {
                        className: "bold underline"
                    }, "refresh the page in a few minutes"), ".", r.createElement("br", null), "You can also access this replay later from the Replay List in the main menu."), r.createElement("h4", null, "If you were not just defeated in a game, the URL you entered is probably incorrect."), r.createElement("button", {
                        className: "small",
                        onClick: this.keepPlaying
                    }, "Keep Playing While Waiting"))
                }
            });
        e.exports = o
    },
    function(e, t, n, r) {
        "use strict";
        var o = n(r),
            i = (n(10), function(e) {
                var t = this;
                if (t.instancePool.length) {
                    var n = t.instancePool.pop();
                    return t.call(n, e), n
                }
                return new t(e)
            }),
            a = function(e, t) {
                var n = this;
                if (n.instancePool.length) {
                    var r = n.instancePool.pop();
                    return n.call(r, e, t), r
                }
                return new n(e, t)
            },
            s = function(e, t, n) {
                var r = this;
                if (r.instancePool.length) {
                    var o = r.instancePool.pop();
                    return r.call(o, e, t, n), o
                }
                return new r(e, t, n)
            },
            l = function(e, t, n, r) {
                var o = this;
                if (o.instancePool.length) {
                    var i = o.instancePool.pop();
                    return o.call(i, e, t, n, r), i
                }
                return new o(e, t, n, r)
            },
            c = function(e, t, n, r, o) {
                var i = this;
                if (i.instancePool.length) {
                    var a = i.instancePool.pop();
                    return i.call(a, e, t, n, r, o), a
                }
                return new i(e, t, n, r, o)
            },
            u = function(e) {
                var t = this;
                e instanceof t ? void 0 : o("25"), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
            },
            p = 10,
            h = i,
            d = function(e, t) {
                var n = e;
                return n.instancePool = [], n.getPooled = t || h, n.poolSize || (n.poolSize = p), n.release = u, n
            },
            f = {
                addPoolingTo: d,
                oneArgumentPooler: i,
                twoArgumentPooler: a,
                threeArgumentPooler: s,
                fourArgumentPooler: l,
                fiveArgumentPooler: c
            };
        e.exports = f
    },
    function(e, t, n, r) {
        (function(o) {
            function i() {
                return "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }

            function a() {
                var e = arguments,
                    n = this.useColors;
                if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return e;
                var r = "color: " + this.color;
                e = [e[0], r, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
                var o = 0,
                    i = 0;
                return e[0].replace(/%[a-z%]/g, function(e) {
                    "%%" !== e && (o++, "%c" === e && (i = o))
                }), e.splice(i, 0, r), e
            }

            function s() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function l(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (e) {}
            }

            function c() {
                try {
                    return t.storage.debug
                } catch (e) {}
                if ("undefined" != typeof o && "env" in o) return {
                    NODE_ENV: "production"
                }.DEBUG
            }

            function u() {
                try {
                    return window.localStorage
                } catch (e) {}
            }
            t = e.exports = n(r), t.log = s, t.formatArgs = a, t.save = l, t.load = c, t.useColors = i, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }, t.enable(c())
        }).call(t, n(115))
    },
    function(e, t, n, r) {
        function o() {
            return t.colors[p++ % t.colors.length]
        }

        function i(e) {
            function n() {}

            function r() {
                var e = r,
                    n = +new Date,
                    i = n - (u || n);
                e.diff = i, e.prev = u, e.curr = n, u = n, null == e.useColors && (e.useColors = t.useColors()), null == e.color && e.useColors && (e.color = o());
                for (var a = new Array(arguments.length), s = 0; s < a.length; s++) a[s] = arguments[s];
                a[0] = t.coerce(a[0]), "string" != typeof a[0] && (a = ["%o"].concat(a));
                var l = 0;
                a[0] = a[0].replace(/%([a-z%])/g, function(n, r) {
                    if ("%%" === n) return n;
                    l++;
                    var o = t.formatters[r];
                    if ("function" == typeof o) {
                        var i = a[l];
                        n = o.call(e, i), a.splice(l, 1), l--
                    }
                    return n
                }), a = t.formatArgs.apply(e, a);
                var c = r.log || t.log || console.log.bind(console);
                c.apply(e, a)
            }
            n.enabled = !1, r.enabled = !0;
            var i = t.enabled(e) ? r : n;
            return i.namespace = e, i
        }

        function a(e) {
            t.save(e);
            for (var n = (e || "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) n[o] && (e = n[o].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }

        function s() {
            t.enable("")
        }

        function l(e) {
            var n, r;
            for (n = 0, r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++)
                if (t.names[n].test(e)) return !0;
            return !1
        }

        function c(e) {
            return e instanceof Error ? e.stack || e.message : e
        }
        t = e.exports = i.debug = i, t.coerce = c, t.disable = s, t.enable = a, t.enabled = l, t.humanize = n(r), t.names = [], t.skips = [], t.formatters = {};
        var u, p = 0
    }
]));