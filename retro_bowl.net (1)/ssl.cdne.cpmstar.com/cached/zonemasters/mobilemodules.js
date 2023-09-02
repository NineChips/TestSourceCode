/*
 ******************************************************** !*\
  !*** ./node_modules/detect-gpu/dist/detect-gpu.esm.js ***!
  \******************************************************* exports provided: getGPUTier  *************************************** !*\
  !*** ./src/zonemasters/adstrategy.ts ***!
  \************************************** no static exports found  ******************************************************* !*\
  !*** ./src/zonemasters/components/bannercomponent.ts ***!
  \****************************************************** ./supercomponent  ../adstrategy  ********************************************************* !*\
  !*** ./src/zonemasters/components/createjscomponent.ts ***!
  \******************************************************** ************************************************* !*\
  !*** ./src/zonemasters/components/editorial.ts ***!
  \************************************************ ../utils  ************************************************* !*\
  !*** ./src/zonemasters/components/imaplayer.ts ***!
  \************************************************ ***************************************************** !*\
  !*** ./src/zonemasters/components/instreamvideo.ts ***!
  \**************************************************** ./videoplayer  ./imaplayer  *************************************************** !*\
  !*** ./src/zonemasters/components/onrpghotbox.ts ***!
  \************************************************** ./editorial  ******************************************************* !*\
  !*** ./src/zonemasters/components/scriptcomponent.ts ***!
  \****************************************************** ****************************************************** !*\
  !*** ./src/zonemasters/components/segmentedvideo.ts ***!
  \***************************************************** ************************************************ !*\
  !*** ./src/zonemasters/components/siteskin.ts ***!
  \*********************************************** ****************************************************** !*\
  !*** ./src/zonemasters/components/supercomponent.ts ***!
  \***************************************************** ../requests/superrequest  SuperClasses/rootcomponent  *************************************************** !*\
  !*** ./src/zonemasters/components/videoplayer.ts ***!
  \************************************************** *************************************** !*\
  !*** ./src/zonemasters/data/steam.ts ***!
  \************************************** ****************************************** !*\
  !*** ./src/zonemasters/mobilemodules.ts ***!
  \***************************************** ./utils  ./requests/starbannerrequest  ./requests/starjsonrequest  ./requests/headerbiddingrequest  ./requests/editorialrequest  ./requests/skinrequest  ./components/supercomponent  ./components/bannercomponent  ./components/editorial  ./components/onrpghotbox  ./components/instreamvideo  ./components/scriptcomponent  ./components/siteskin  ./components/createjscomponent  SuperClasses/componentregistry  ./components/segmentedvideo  detect-gpu  ./data/steam  ****************************************************** !*\
  !*** ./src/zonemasters/requests/editorialrequest.ts ***!
  \***************************************************** ./superrequest  ********************************************************** !*\
  !*** ./src/zonemasters/requests/headerbiddingrequest.ts ***!
  \********************************************************* ************************************************* !*\
  !*** ./src/zonemasters/requests/skinrequest.ts ***!
  \************************************************ ./editorialrequest  ******************************************************* !*\
  !*** ./src/zonemasters/requests/starbannerrequest.ts ***!
  \****************************************************** ***************************************************** !*\
  !*** ./src/zonemasters/requests/starjsonrequest.ts ***!
  \**************************************************** ************************************************** !*\
  !*** ./src/zonemasters/requests/superrequest.ts ***!
  \************************************************* ***************************************************************** !*\
  !*** ./src/zonemasters/superclasses/basic/componentregistry.ts ***!
  \**************************************************************** ************************************************************* !*\
  !*** ./src/zonemasters/superclasses/basic/rootcomponent.ts ***!
  \************************************************************ ********************************** !*\
  !*** ./src/zonemasters/utils.ts ***!
  \********************************* ************************************************ !*\
  !*** multi ./src/zonemasters/mobilemodules.ts ***!
  \*********************************************** ./src/zonemasters/mobilemodules.ts */
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, k, p) {
    e != Array.prototype && e != Object.prototype && (e[k] = p.value)
};
$jscomp.getGlobal = function(e) {
    return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.Symbol = function() {
    var e = 0;
    return function(k) {
        return $jscomp.SYMBOL_PREFIX + (k || "") + e++
    }
}();
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var e = $jscomp.global.Symbol.iterator;
    e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.arrayIterator = function(e) {
    var k = 0;
    return $jscomp.iteratorPrototype(function() {
        return k < e.length ? {
            done: !1,
            value: e[k++]
        } : {
            done: !0
        }
    })
};
$jscomp.iteratorPrototype = function(e) {
    $jscomp.initSymbolIterator();
    e = {
        next: e
    };
    e[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return e
};
$jscomp.makeIterator = function(e) {
    $jscomp.initSymbolIterator();
    $jscomp.initSymbol();
    $jscomp.initSymbolIterator();
    var k = e[Symbol.iterator];
    return k ? k.call(e) : $jscomp.arrayIterator(e)
};
$jscomp.underscoreProtoCanBeSet = function() {
    var e = {
            a: !0
        },
        k = {};
    try {
        return k.__proto__ = e, k.a
    } catch (p) {}
    return !1
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(e, k) {
    e.__proto__ = k;
    if (e.__proto__ !== k) throw new TypeError(e + " is not extensible");
    return e
} : null;
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function(e) {
    if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
};
$jscomp.generator.Context = function() {
    this.isRunning_ = !1;
    this.yieldAllIterator_ = null;
    this.yieldResult = void 0;
    this.nextAddress = 1;
    this.finallyAddress_ = this.catchAddress_ = 0;
    this.finallyContexts_ = this.abruptCompletion_ = null
};
$jscomp.generator.Context.prototype.start_ = function() {
    if (this.isRunning_) throw new TypeError("Generator is already running");
    this.isRunning_ = !0
};
$jscomp.generator.Context.prototype.stop_ = function() {
    this.isRunning_ = !1
};
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function() {
    this.nextAddress = this.catchAddress_ || this.finallyAddress_
};
$jscomp.generator.Context.prototype.next_ = function(e) {
    this.yieldResult = e
};
$jscomp.generator.Context.prototype.throw_ = function(e) {
    this.abruptCompletion_ = {
        exception: e,
        isException: !0
    };
    this.jumpToErrorHandler_()
};
$jscomp.generator.Context.prototype.return = function(e) {
    this.abruptCompletion_ = {
        return: e
    };
    this.nextAddress = this.finallyAddress_
};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function(e) {
    this.abruptCompletion_ = {
        jumpTo: e
    };
    this.nextAddress = this.finallyAddress_
};
$jscomp.generator.Context.prototype.yield = function(e, k) {
    this.nextAddress = k;
    return {
        value: e
    }
};
$jscomp.generator.Context.prototype.yieldAll = function(e, k) {
    e = $jscomp.makeIterator(e);
    var p = e.next();
    $jscomp.generator.ensureIteratorResultIsObject_(p);
    if (p.done) this.yieldResult = p.value, this.nextAddress = k;
    else return this.yieldAllIterator_ = e, this.yield(p.value, k)
};
$jscomp.generator.Context.prototype.jumpTo = function(e) {
    this.nextAddress = e
};
$jscomp.generator.Context.prototype.jumpToEnd = function() {
    this.nextAddress = 0
};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function(e, k) {
    this.catchAddress_ = e;
    void 0 != k && (this.finallyAddress_ = k)
};
$jscomp.generator.Context.prototype.setFinallyBlock = function(e) {
    this.catchAddress_ = 0;
    this.finallyAddress_ = e || 0
};
$jscomp.generator.Context.prototype.leaveTryBlock = function(e, k) {
    this.nextAddress = e;
    this.catchAddress_ = k || 0
};
$jscomp.generator.Context.prototype.enterCatchBlock = function(e) {
    this.catchAddress_ = e || 0;
    e = this.abruptCompletion_.exception;
    this.abruptCompletion_ = null;
    return e
};
$jscomp.generator.Context.prototype.enterFinallyBlock = function(e, k, p) {
    p ? this.finallyContexts_[p] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_];
    this.catchAddress_ = e || 0;
    this.finallyAddress_ = k || 0
};
$jscomp.generator.Context.prototype.leaveFinallyBlock = function(e, k) {
    k = this.finallyContexts_.splice(k || 0)[0];
    if (k = this.abruptCompletion_ = this.abruptCompletion_ || k) {
        if (k.isException) return this.jumpToErrorHandler_();
        void 0 != k.jumpTo && this.finallyAddress_ < k.jumpTo ? (this.nextAddress = k.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_
    } else this.nextAddress = e
};
$jscomp.generator.Context.prototype.forIn = function(e) {
    return new $jscomp.generator.Context.PropertyIterator(e)
};
$jscomp.generator.Context.PropertyIterator = function(e) {
    this.object_ = e;
    this.properties_ = [];
    for (var k in e) this.properties_.push(k);
    this.properties_.reverse()
};
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function() {
    for (; 0 < this.properties_.length;) {
        var e = this.properties_.pop();
        if (e in this.object_) return e
    }
    return null
};
$jscomp.generator.Engine_ = function(e) {
    this.context_ = new $jscomp.generator.Context;
    this.program_ = e
};
$jscomp.generator.Engine_.prototype.next_ = function(e) {
    this.context_.start_();
    if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_.next, e, this.context_.next_);
    this.context_.next_(e);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.return_ = function(e) {
    this.context_.start_();
    var k = this.context_.yieldAllIterator_;
    if (k) return this.yieldAllStep_("return" in k ? k["return"] : function(k) {
        return {
            value: k,
            done: !0
        }
    }, e, this.context_.return);
    this.context_.return(e);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.throw_ = function(e) {
    this.context_.start_();
    if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], e, this.context_.next_);
    this.context_.throw_(e);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function(e, k, p) {
    try {
        var t = e.call(this.context_.yieldAllIterator_, k);
        $jscomp.generator.ensureIteratorResultIsObject_(t);
        if (!t.done) return this.context_.stop_(), t;
        var q = t.value
    } catch (r) {
        return this.context_.yieldAllIterator_ = null, this.context_.throw_(r), this.nextStep_()
    }
    this.context_.yieldAllIterator_ = null;
    p.call(this.context_, q);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.nextStep_ = function() {
    for (; this.context_.nextAddress;) try {
        var e = this.program_(this.context_);
        if (e) return this.context_.stop_(), {
            value: e.value,
            done: !1
        }
    } catch (k) {
        this.context_.yieldResult = void 0, this.context_.throw_(k)
    }
    this.context_.stop_();
    if (this.context_.abruptCompletion_) {
        e = this.context_.abruptCompletion_;
        this.context_.abruptCompletion_ = null;
        if (e.isException) throw e.exception;
        return {
            value: e.return,
            done: !0
        }
    }
    return {
        value: void 0,
        done: !0
    }
};
$jscomp.generator.Generator_ = function(e) {
    this.next = function(k) {
        return e.next_(k)
    };
    this.throw = function(k) {
        return e.throw_(k)
    };
    this.return = function(k) {
        return e.return_(k)
    };
    $jscomp.initSymbolIterator();
    $jscomp.initSymbol();
    $jscomp.initSymbolIterator();
    this[Symbol.iterator] = function() {
        return this
    }
};
$jscomp.generator.createGenerator = function(e, k) {
    k = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(k));
    $jscomp.setPrototypeOf && $jscomp.setPrototypeOf(k, e.prototype);
    return k
};
$jscomp.polyfill = function(e, k, p, t) {
    if (k) {
        p = $jscomp.global;
        e = e.split(".");
        for (t = 0; t < e.length - 1; t++) {
            var q = e[t];
            q in p || (p[q] = {});
            p = p[q]
        }
        e = e[e.length - 1];
        t = p[e];
        k = k(t);
        k != t && null != k && $jscomp.defineProperty(p, e, {
            configurable: !0,
            writable: !0,
            value: k
        })
    }
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function(e) {
    function k() {
        this.batch_ = null
    }

    function p(g) {
        return g instanceof q ? g : new q(function(b, m) {
            b(g)
        })
    }
    if (e && !$jscomp.FORCE_POLYFILL_PROMISE) return e;
    k.prototype.asyncExecute = function(g) {
        null == this.batch_ && (this.batch_ = [], this.asyncExecuteBatch_());
        this.batch_.push(g);
        return this
    };
    k.prototype.asyncExecuteBatch_ = function() {
        var g = this;
        this.asyncExecuteFunction(function() {
            g.executeBatch_()
        })
    };
    var t = $jscomp.global.setTimeout;
    k.prototype.asyncExecuteFunction = function(g) {
        t(g,
            0)
    };
    k.prototype.executeBatch_ = function() {
        for (; this.batch_ && this.batch_.length;) {
            var g = this.batch_;
            this.batch_ = [];
            for (var b = 0; b < g.length; ++b) {
                var m = g[b];
                g[b] = null;
                try {
                    m()
                } catch (d) {
                    this.asyncThrow_(d)
                }
            }
        }
        this.batch_ = null
    };
    k.prototype.asyncThrow_ = function(g) {
        this.asyncExecuteFunction(function() {
            throw g;
        })
    };
    var q = function(g) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var b = this.createResolveAndReject_();
        try {
            g(b.resolve, b.reject)
        } catch (m) {
            b.reject(m)
        }
    };
    q.prototype.createResolveAndReject_ =
        function() {
            function g(d) {
                return function(a) {
                    m || (m = !0, d.call(b, a))
                }
            }
            var b = this,
                m = !1;
            return {
                resolve: g(this.resolveTo_),
                reject: g(this.reject_)
            }
        };
    q.prototype.resolveTo_ = function(g) {
        if (g === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof q) this.settleSameAsPromise_(g);
        else {
            a: switch (typeof g) {
                case "object":
                    var b = null != g;
                    break a;
                case "function":
                    b = !0;
                    break a;
                default:
                    b = !1
            }
            b ? this.resolveToNonPromiseObj_(g) : this.fulfill_(g)
        }
    };
    q.prototype.resolveToNonPromiseObj_ = function(g) {
        var b =
            void 0;
        try {
            b = g.then
        } catch (m) {
            this.reject_(m);
            return
        }
        "function" == typeof b ? this.settleSameAsThenable_(b, g) : this.fulfill_(g)
    };
    q.prototype.reject_ = function(g) {
        this.settle_(2, g)
    };
    q.prototype.fulfill_ = function(g) {
        this.settle_(1, g)
    };
    q.prototype.settle_ = function(g, b) {
        if (0 != this.state_) throw Error("Cannot settle(" + g + ", " + b + "): Promise already settled in state" + this.state_);
        this.state_ = g;
        this.result_ = b;
        this.executeOnSettledCallbacks_()
    };
    q.prototype.executeOnSettledCallbacks_ = function() {
        if (null != this.onSettledCallbacks_) {
            for (var g =
                    0; g < this.onSettledCallbacks_.length; ++g) r.asyncExecute(this.onSettledCallbacks_[g]);
            this.onSettledCallbacks_ = null
        }
    };
    var r = new k;
    q.prototype.settleSameAsPromise_ = function(g) {
        var b = this.createResolveAndReject_();
        g.callWhenSettled_(b.resolve, b.reject)
    };
    q.prototype.settleSameAsThenable_ = function(g, b) {
        var m = this.createResolveAndReject_();
        try {
            g.call(b, m.resolve, m.reject)
        } catch (d) {
            m.reject(d)
        }
    };
    q.prototype.then = function(g, b) {
        function m(f, c) {
            return "function" == typeof f ? function(c) {
                    try {
                        d(f(c))
                    } catch (n) {
                        a(n)
                    }
                } :
                c
        }
        var d, a, h = new q(function(f, c) {
            d = f;
            a = c
        });
        this.callWhenSettled_(m(g, d), m(b, a));
        return h
    };
    q.prototype.catch = function(g) {
        return this.then(void 0, g)
    };
    q.prototype.callWhenSettled_ = function(g, b) {
        function m() {
            switch (d.state_) {
                case 1:
                    g(d.result_);
                    break;
                case 2:
                    b(d.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + d.state_);
            }
        }
        var d = this;
        null == this.onSettledCallbacks_ ? r.asyncExecute(m) : this.onSettledCallbacks_.push(m)
    };
    q.resolve = p;
    q.reject = function(g) {
        return new q(function(b, m) {
            m(g)
        })
    };
    q.race = function(g) {
        return new q(function(b,
            m) {
            for (var d = $jscomp.makeIterator(g), a = d.next(); !a.done; a = d.next()) p(a.value).callWhenSettled_(b, m)
        })
    };
    q.all = function(g) {
        var b = $jscomp.makeIterator(g),
            m = b.next();
        return m.done ? p([]) : new q(function(d, a) {
            function h(a) {
                return function(l) {
                    f[a] = l;
                    c--;
                    0 == c && d(f)
                }
            }
            var f = [],
                c = 0;
            do f.push(void 0), c++, p(m.value).callWhenSettled_(h(f.length - 1), a), m = b.next(); while (!m.done)
        })
    };
    return q
}, "es6", "es3");
$jscomp.polyfill("Object.is", function(e) {
    return e ? e : function(k, e) {
        return k === e ? 0 !== k || 1 / k === 1 / e : k !== k && e !== e
    }
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.includes", function(e) {
    return e ? e : function(k, e) {
        var t = this;
        t instanceof String && (t = String(t));
        var q = t.length;
        e = e || 0;
        for (0 > e && (e = Math.max(e + q, 0)); e < q; e++) {
            var r = t[e];
            if (r === k || Object.is(r, k)) return !0
        }
        return !1
    }
}, "es7", "es3");
$jscomp.checkStringArgs = function(e, k, p) {
    if (null == e) throw new TypeError("The 'this' value for String.prototype." + p + " must not be null or undefined");
    if (k instanceof RegExp) throw new TypeError("First argument to String.prototype." + p + " must not be a regular expression");
    return e + ""
};
$jscomp.polyfill("String.prototype.includes", function(e) {
    return e ? e : function(e, p) {
        return -1 !== $jscomp.checkStringArgs(this, e, "includes").indexOf(e, p || 0)
    }
}, "es6", "es3");
$jscomp.findInternal = function(e, k, p) {
    e instanceof String && (e = String(e));
    for (var t = e.length, q = 0; q < t; q++) {
        var r = e[q];
        if (k.call(p, r, q, e)) return {
            i: q,
            v: r
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.polyfill("Array.prototype.find", function(e) {
    return e ? e : function(e, p) {
        return $jscomp.findInternal(this, e, p).v
    }
}, "es6", "es3");
$jscomp.polyfill("Object.setPrototypeOf", function(e) {
    return e || $jscomp.setPrototypeOf
}, "es6", "es5");
$jscomp.iteratorFromArray = function(e, k) {
    $jscomp.initSymbolIterator();
    e instanceof String && (e += "");
    var p = 0,
        t = {
            next: function() {
                if (p < e.length) {
                    var q = p++;
                    return {
                        value: k(q, e[q]),
                        done: !1
                    }
                }
                t.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return t.next()
            }
        };
    t[Symbol.iterator] = function() {
        return t
    };
    return t
};
$jscomp.polyfill("Array.prototype.keys", function(e) {
    return e ? e : function() {
        return $jscomp.iteratorFromArray(this, function(e) {
            return e
        })
    }
}, "es6", "es3");
(function(e) {
    function k(t) {
        if (p[t]) return p[t].exports;
        var q = p[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        e[t].call(q.exports, q, q.exports, k);
        q.l = !0;
        return q.exports
    }
    var p = {};
    k.m = e;
    k.c = p;
    k.d = function(e, q, r) {
        k.o(e, q) || Object.defineProperty(e, q, {
            enumerable: !0,
            get: r
        })
    };
    k.r = function(e) {
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        "undefined" !== typeof Symbol && Symbol.toStringTag && ($jscomp.initSymbol(), Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }));
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    k.t = function(e,
        q) {
        q & 1 && (e = k(e));
        if (q & 8 || q & 4 && "object" === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        k.r(r);
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        });
        if (q & 2 && "string" != typeof e)
            for (var g in e) k.d(r, g, function(b) {
                return e[b]
            }.bind(null, g));
        return r
    };
    k.n = function(e) {
        var q = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        k.d(q, "a", q);
        return q
    };
    k.o = function(e, k) {
        return Object.prototype.hasOwnProperty.call(e, k)
    };
    k.p = "";
    return k(k.s = 0)
})({
    "./node_modules/detect-gpu/dist/detect-gpu.esm.js": function(e,
        k, p) {
        function t(a, l, f, b) {
            return new(f || (f = Promise))(function(c, n) {
                function d(a) {
                    try {
                        v(b.next(a))
                    } catch (z) {
                        n(z)
                    }
                }

                function h(a) {
                    try {
                        v(b.throw(a))
                    } catch (z) {
                        n(z)
                    }
                }

                function v(a) {
                    var l;
                    a.done ? c(a.value) : (l = a.value, l instanceof f ? l : new f(function(a) {
                        a(l)
                    })).then(d, h)
                }
                v((b = b.apply(a, l || [])).next())
            })
        }
        p.r(k);
        p.d(k, "getGPUTier", function() {
            return f
        });
        var q = "geforce 320m;geforce 8600;geforce 8600m gt;geforce 8800 gs;geforce 8800 gt;geforce 9400;geforce 9400m g;geforce 9400m;geforce 9600m gt;geforce 9600m;geforce fx go5200;geforce gt 120;geforce gt 130;geforce gt 330m;geforce gtx 285;google swiftshader;intel g41;intel g45;intel gma 4500mhd;intel gma x3100;intel hd 3000;intel q45;legacy;mali-2;mali-3;mali-4;quadro fx 1500;quadro fx 4;quadro fx 5;radeon hd 2400;radeon hd 2600;radeon hd 4670;radeon hd 4850;radeon hd 4870;radeon hd 5670;radeon hd 5750;radeon hd 6290;radeon hd 6300;radeon hd 6310;radeon hd 6320;radeon hd 6490m;radeon hd 6630m;radeon hd 6750m;radeon hd 6770m;radeon hd 6970m;radeon r9 200;sgx 543;sgx543".split(";"),
            r = function(a) {
                return a.toLowerCase().replace(/^angle ?\((.+)\)*$/, "$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g, "")
            },
            g = "undefined" == typeof window,
            b = function() {
                if (!g) {
                    var a = window.navigator,
                        l = a.userAgent,
                        f = a.platform,
                        b = a.maxTouchPoints;
                    a = /(iphone|ipod|ipad)/i.test(l);
                    f = "iPad" === f || "MacIntel" === f && 0 < b && !window.MSStream;
                    return {
                        isIpad: f,
                        isMobile: /android/i.test(l) || a || f,
                        isSafari12: /Version\/12.+Safari/.test(l)
                    }
                }
            }(),
            m = function(a, l, f) {
                if ("apple gpu" === l) {
                    l = [l];
                    if (f) {
                        var c = a.createShader(35633),
                            n = a.createShader(35632);
                        f = a.createProgram();
                        n && c && f && (a.shaderSource(c, "\n      precision highp float;\n      attribute vec3 aPosition;\n      varying float vvv;\n      void main() {\n        vvv = 0.31622776601683794;\n        gl_Position = vec4(aPosition, 1.0);\n      }\n    "), a.shaderSource(n, "\n      precision highp float;\n      varying float vvv;\n      void main() {\n        vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;\n        enc = fract(enc);\n        enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n        gl_FragColor = enc;\n      }\n    "),
                            a.compileShader(c), a.compileShader(n), a.attachShader(f, c), a.attachShader(f, n), a.linkProgram(f), a.detachShader(f, c), a.detachShader(f, n), a.deleteShader(c), a.deleteShader(n), a.useProgram(f), c = a.createBuffer(), a.bindBuffer(34962, c), a.bufferData(34962, new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 35044), n = a.getAttribLocation(f, "aPosition"), a.vertexAttribPointer(n, 3, 5126, !1, 0, 0), a.enableVertexAttribArray(n), a.clearColor(1, 1, 1, 1), a.clear(16384), a.viewport(0, 0, 1, 1), a.drawArrays(4, 0, 3), n = new Uint8Array(4), a.readPixels(0,
                                0, 1, 1, 6408, 5121, n), a.deleteProgram(f), a.deleteBuffer(c), l = {
                                801621810: (null == b ? 0 : b.isIpad) ? ["apple a12x gpu"] : ["apple a11 gpu", "apple a12 gpu", "apple a13 gpu", "apple a14 gpu"],
                                8016218135: (null == b ? 0 : b.isIpad) ? ["apple a9x gpu", "apple a10 gpu", "apple a10x gpu"] : ["apple a9 gpu", "apple a10 gpu"]
                            }[n.join("")] || l)
                    }
                    a = l
                } else a = [l];
                return a
            },
            d = [],
            a = [],
            h = function(c, l) {
                if (c === l) return 0;
                var f = c;
                c.length > l.length && (c = l, l = f);
                f = c.length;
                for (var b = l.length; 0 < f && c.charCodeAt(~-f) === l.charCodeAt(~-b);) f--, b--;
                for (var h =
                        0; h < f && c.charCodeAt(h) === l.charCodeAt(h);) h++;
                if (f -= h, b -= h, 0 === f) return b;
                for (var m, g, r = 0, e = 0, k = 0; e < f;) a[e] = c.charCodeAt(h + e), d[e] = ++e;
                for (; k < b;)
                    for (c = l.charCodeAt(h + k), m = k++, r = k, e = 0; e < f; e++) g = c === a[e] ? m : m + 1, m = d[e], r = d[e] = m > r ? g > r ? r + 1 : g : g > m ? m + 1 : g;
                return r
            },
            f = function(a) {
                a = void 0 === a ? {} : a;
                var c = void 0 === a.mobileTiers ? [0, 15, 30, 60] : a.mobileTiers,
                    f = void 0 === a.desktopTiers ? [0, 15, 30, 60] : a.desktopTiers,
                    d = void 0 === a.override ? {} : a.override,
                    x = a.glContext,
                    u = void 0 === a.failIfMajorPerformanceCaveat ? !1 : a.failIfMajorPerformanceCaveat,
                    e = void 0 === a.benchmarksURL ? "https://unpkg.com/detect-gpu@3.1.21/dist/benchmarks" : a.benchmarksURL;
                return t(void 0, void 0, void 0, function da() {
                    var a, l, n, v, k, U, p, w, M, W, S, P, oa, C, Z, K, ea, Q, N, qa, ya, O;
                    return $jscomp.generator.createGenerator(da, function(z) {
                        if (1 == z.nextAddress) {
                            a = {};
                            if (g) return z.return({
                                tier: 0,
                                type: "SSR"
                            });
                            l = d;
                            n = void 0 === l.isIpad ? !(null == b || !b.isIpad) : l.isIpad;
                            v = void 0 === l.isMobile ? !(null == b || !b.isMobile) : l.isMobile;
                            k = void 0 === l.screenSize ? window.screen : l.screenSize;
                            U = void 0 === l.loadBenchmarks ?
                                function(a) {
                                    return t(void 0, void 0, void 0, function J() {
                                        var c;
                                        return $jscomp.generator.createGenerator(J, function(l) {
                                            if (1 == l.nextAddress) return l.yield(fetch(e + "/" + a).then(function(a) {
                                                return a.json()
                                            }), 2);
                                            c = l.yieldResult;
                                            return l.return((c.shift(), c))
                                        })
                                    })
                                } : l.loadBenchmarks;
                            p = d;
                            w = p.renderer;
                            M = function(a, c, l, f, b) {
                                return {
                                    device: b,
                                    fps: f,
                                    gpu: l,
                                    isMobile: v,
                                    tier: a,
                                    type: c
                                }
                            };
                            S = "";
                            if (w) w = r(w), W = [w];
                            else {
                                P = x || function(a, c) {
                                    c = {
                                        alpha: !1,
                                        antialias: !1,
                                        depth: !1,
                                        failIfMajorPerformanceCaveat: void 0 === c ? !1 : c,
                                        powerPreference: "high-performance",
                                        stencil: !1
                                    };
                                    a && delete c.powerPreference;
                                    a = window.document.createElement("canvas");
                                    a = a.getContext("webgl", c) || a.getContext("experimental-webgl", c);
                                    return null != a ? a : void 0
                                }(null == b ? void 0 : b.isSafari12, u);
                                if (!P) return z.return(M(0, "WEBGL_UNSUPPORTED"));
                                oa = P.getExtension("WEBGL_debug_renderer_info");
                                if (oa && (w = P.getParameter(oa.UNMASKED_RENDERER_WEBGL)), !w) return z.return(M(1, "FALLBACK"));
                                S = w;
                                w = r(w);
                                W = m(P, w, v)
                            }
                            return z.yield(Promise.all(W.map(function(c) {
                                return t(void 0, void 0, void 0, function J() {
                                    var l,
                                        f, b, d, m, u, g, x, e, r, q, C, z, ma, p, t, w, K, da, D, V, E, Q, B, N, A, P;
                                    return $jscomp.generator.createGenerator(J, function(aa) {
                                        switch (aa.nextAddress) {
                                            case 1:
                                                l = function(a) {
                                                    for (var c = $jscomp.makeIterator(v ? "adreno apple mali-t mali nvidia powervr".split(" ") : ["intel", "amd", "radeon", "nvidia", "geforce"]), l = c.next(); !l.done; l = c.next())
                                                        if (l = l.value, a.includes(l)) return l
                                                }(c);
                                                if (!l) return aa.return();
                                                f = (v ? "m" : "d") + "-" + l + ".json";
                                                b = a[f] = a[f] || U(f);
                                                aa.setCatchFinallyBlocks(2);
                                                return aa.yield(b, 4);
                                            case 4:
                                                d = aa.yieldResult;
                                                aa.leaveTryBlock(3);
                                                break;
                                            case 2:
                                                return aa.enterCatchBlock(), aa.return();
                                            case 3:
                                                m = function(a) {
                                                    var c, l = (a = a.replace(/\([^)]+\)/, "")).match(/\d+/) || a.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);
                                                    return null !== (c = null == l ? void 0 : l.join("").replace(/\W|amd/g, "")) && void 0 !== c ? c : ""
                                                }(c);
                                                u = "apple" === l;
                                                g = d.filter(function(a) {
                                                    a = $jscomp.makeIterator(a);
                                                    a.next();
                                                    return a.next().value === m
                                                });
                                                g.length || (g = d.filter(function(a) {
                                                    return $jscomp.makeIterator(a).next().value.includes(c)
                                                }));
                                                x = g.length;
                                                if (0 === x) return aa.return();
                                                r = $jscomp.makeIterator(1 <
                                                    x ? g.map(function(a) {
                                                        return [a, h(c, a[0])]
                                                    }).sort(function(a, c) {
                                                        a = $jscomp.makeIterator(a);
                                                        a.next();
                                                        a = a.next().value;
                                                        c = $jscomp.makeIterator(c);
                                                        c.next();
                                                        c = c.next().value;
                                                        return a - c
                                                    })[0][0] : g[0]);
                                                q = r.next().value;
                                                r.next();
                                                r.next();
                                                C = r.next().value;
                                                z = Number.MAX_VALUE;
                                                ma = window;
                                                p = ma.devicePixelRatio;
                                                t = k.width * p * k.height * p;
                                                u && v && (C = C.filter(function(a) {
                                                    a = $jscomp.makeIterator(a);
                                                    a.next();
                                                    a.next();
                                                    a.next();
                                                    a = a.next().value;
                                                    var c;
                                                    return -1 < (null !== (c = null == a ? void 0 : a.indexOf(n ? "ipad" : "iphone")) && void 0 !== c ? c :
                                                        -1)
                                                }));
                                                w = $jscomp.makeIterator(C);
                                                for (K = w.next(); !K.done; K = w.next()) da = K.value, D = $jscomp.makeIterator(da), V = D.next().value, E = D.next().value, Q = V * E, B = Math.abs(t - Q), B < z && (z = B, e = da);
                                                if (!e) return aa.return();
                                                N = $jscomp.makeIterator(e);
                                                N.next();
                                                N.next();
                                                A = N.next().value;
                                                P = N.next().value;
                                                return aa.return([z, A, q, P])
                                        }
                                    })
                                })
                            })), 2)
                        }
                        C = z.yieldResult.filter(function(a) {
                            return !!a
                        });
                        if (!C.length) return Z = q.find(function(a) {
                            return w.includes(a)
                        }), z.return(Z ? M(0, "BLOCKLISTED", Z) : M(1, "FALLBACK", w + " (" + S + ")"));
                        K = $jscomp.makeIterator(C.sort(function(a,
                            c) {
                            a = $jscomp.makeIterator(a).next().value;
                            a = void 0 === a ? Number.MAX_VALUE : a;
                            c = $jscomp.makeIterator(c).next().value;
                            return a - (void 0 === c ? Number.MAX_VALUE : c)
                        })[0]);
                        K.next();
                        ea = K.next().value;
                        Q = K.next().value;
                        N = K.next().value;
                        if (-1 === ea) return z.return(M(0, "BLOCKLISTED", Q, ea, N));
                        qa = v ? c : f;
                        for (O = ya = 0; O < qa.length; O++) ea >= qa[O] && (ya = O);
                        return z.return(M(ya, "BENCHMARK", Q, ea, N))
                    })
                })
            }
    },
    "./src/zonemasters/adstrategy.ts": function(e, k, p) {
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        k.TotalCPMStrategy = void 0;
        k.TotalCPMStrategy = function(e) {
            e.refreshrate || (e.refreshrate = 14E4);
            e.minslice || (e.minslice = 1E4);
            e.minslicecpmpercent || (e.minslicecpmpercent = .85);
            return function(k) {
                for (var r, g, b, m, d, a = 0, h = null, f = {}, c = (new Date).getTime(), l = 0; l < k.length; l++)
                    for (var n = k[l], v = 0; v < e.match.length; v++) {
                        var x = e.match[v],
                            u = Math.max(null !== (r = x.multi) && void 0 !== r ? r : 1, null !== (g = x.target) && void 0 !== g ? g : 1);
                        x.bidInfos && x.bidInfos.length == u || x.w && n.w != x.w || x.h && n.h != x.h || x.mediaType && n.mediaType != x.mediaType || x.bidder && n.bidder !=
                            x.bidder || x.minBid && n.cpm < x.minBid || (f[v] || (f[v] = {
                                bidInfos: [],
                                totalCpm: 0,
                                totalMs: 0
                            }), f[v].w && n.w != f[v].w || f[v].h && n.h != f[v].h || (x.fixedSize && (f[v].w = n.w, f[v].h = n.h), f[v].bidInfos.length < u && f[v].bidInfos.push(n)))
                    }
                k = {
                    picks: []
                };
                for (v = 0; v < e.match.length; v++) {
                    l = 0;
                    x = e.match[v];
                    u = Math.max(null !== (b = x.multi) && void 0 !== b ? b : 1, null !== (m = x.target) && void 0 !== m ? m : 1);
                    x = null !== (d = x.target) && void 0 !== d ? d : 1;
                    r = f[v];
                    for (g = 0; g < (-1 == x ? u : x) && g < r.bidInfos.length; g++) l += r.bidInfos[g].cpm;
                    n = [];
                    var q = 0,
                        y = 0;
                    for (g = 0; g < r.bidInfos.length; g++) {
                        var p =
                            r.bidInfos[g],
                            t = Math.max(e.minslice, p.cpm / l);
                        if (p.expires > c + y) {
                            n.push(p);
                            if (-1 == x || n.length <= x) q += p.cpm;
                            y += t;
                            if (n.length >= u || y > e.refreshrate) break
                        }
                    }
                    r.totalCpm = q;
                    r.bidInfos = n;
                    q > a && (h = r, a = q)
                }
                if (h)
                    for (l = k.totalCPM = 0; l < h.bidInfos.length && !(b = h.bidInfos[l], k.picks.push({
                            adId: b.adId,
                            cpm: b.cpm,
                            w: b.w,
                            h: b.h
                        }), b.cpm && (k.totalCPM += b.cpm), e.maxslices && 0 < e.maxslices && k.picks.length >= e.maxslices); l++);
                return k
            }
        }
    },
    "./src/zonemasters/components/bannercomponent.ts": function(e, k, p) {
        var t = this && this.__extends || function() {
            var e =
                function(g, b) {
                    e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(b, d) {
                        b.__proto__ = d
                    } || function(b, d) {
                        for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a])
                    };
                    return e(g, b)
                };
            return function(g, b) {
                function m() {
                    this.constructor = g
                }
                e(g, b);
                g.prototype = null === b ? Object.create(b) : (m.prototype = b.prototype, new m)
            }
        }();
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        e = p("./src/zonemasters/components/supercomponent.ts");
        var q = p("./src/zonemasters/adstrategy.ts");
        p = function(e) {
            function g(b, m) {
                b = e.call(this,
                    b, m) || this;
                b.becameViewable = !1;
                b.isAttached = !0;
                b.isDetachable = !1;
                b.closeDiv = null;
                b.timeSliceBlocked = !1;
                return b
            }
            t(g, e);
            g.prototype.testResponseValidity = function(b) {
                var m, d, a, h, f, c, l, n, v, g, u, r, k = null !== (m = this.module.options.maxslices) && void 0 !== m ? m : -1;
                if (b) {
                    this || b(!1);
                    this.res || b(!1);
                    try {
                        if (this.module.options.areaslice && this.res.pickAds && this.module.options.width && this.module.options.height) {
                            var p = {
                                minslice: null !== (d = this.module.options.minslice) && void 0 !== d ? d : this.DEFAULTMINSLICE,
                                minslicecpmpercent: null !==
                                    (a = this.module.options.minslicecpmpercent) && void 0 !== a ? a : this.DEFAULTMINSLICECPMPERCENT,
                                refreshrate: null !== (h = this.module.options.refreshrate) && void 0 !== h ? h : this.DEFAULTREFRESHRATE,
                                maxslices: k,
                                match: [{
                                    w: null,
                                    h: null,
                                    target: 1
                                }]
                            };
                            970 == this.module.options.width ? p.match.push({
                                fixedSize: !0,
                                w: 300,
                                h: 250,
                                multi: null !== (f = this.module.options.slicemulti) && void 0 !== f ? f : this.DEFAULTSLICEMULTI,
                                target: 3
                            }) : 300 == this.module.options.width && 600 == this.module.options.height && p.match.push({
                                fixedSize: !0,
                                w: 300,
                                h: 250,
                                multi: null !==
                                    (c = this.module.options.slicemulti) && void 0 !== c ? c : this.DEFAULTSLICEMULTI,
                                target: 2
                            });
                            var t = q.TotalCPMStrategy(p);
                            this.pickResult = this.res.pickAds(this.module, t);
                            var z = null === (l = this.pickResult) || void 0 === l ? void 0 : l.picks;
                            this.pickResult && z ? (this.mm.log("Area slicing returned " + z.length + " picks worth $" + this.pickResult.totalCPM.toFixed(2) + " CPM"), e.prototype.testResponseValidity.call(this, b)) : b(!1)
                        } else if (this.module.options.timeslice && !this.timeSliceBlocked && this.res.pickAds) {
                            var L = q.TotalCPMStrategy({
                                minslice: null !==
                                    (n = this.module.options.minslice) && void 0 !== n ? n : this.DEFAULTMINSLICE,
                                refreshrate: null !== (v = this.module.options.refreshrate) && void 0 !== v ? v : this.DEFAULTREFRESHRATE,
                                minslicecpmpercent: null !== (g = this.module.options.minslicecpmpercent) && void 0 !== g ? g : this.DEFAULTMINSLICECPMPERCENT,
                                maxslices: k,
                                match: [{
                                    fixedSize: !0,
                                    multi: null !== (u = this.module.options.slicemulti) && void 0 !== u ? u : this.DEFAULTSLICEMULTI,
                                    target: k
                                }, {
                                    w: null,
                                    h: null,
                                    target: 1
                                }]
                            });
                            this.pickResult = this.res.pickAds(this.module, L);
                            z = null === (r = this.pickResult) ||
                                void 0 === r ? void 0 : r.picks;
                            this.pickResult && z ? e.prototype.testResponseValidity.call(this, b) : b(!1)
                        } else e.prototype.testResponseValidity.call(this, b)
                    } catch (G) {
                        b(!1)
                    }
                }
            };
            g.prototype.getRenderTargetDivID = function(b) {
                void 0 === b && (b = 0);
                var m = e.prototype.getRenderTargetDivID.call(this, b);
                return this.module.options.areaslice ? m + "_" + b : m
            };
            g.prototype.render = function(b, m, d) {
                var a, h, f, c = null === (a = this.pickResult) || void 0 === a ? void 0 : a.picks;
                a = 1 == this.module.options.requireViewable || "true" == this.module.options.requireViewable ?
                    !0 : !1;
                var l = this.module.renderIndex,
                    n = 970 == this.module.options.width ? 3 : 2;
                if (this.module.options.areaslice && c && c.length >= l + n && (this.module.options.width || this.module.options.height)) {
                    n = this.pickResult.picks;
                    m = 1;
                    c = d = "0";
                    var v = null !== (h = this.module.options.width) && void 0 !== h ? h : n[0].w;
                    h = null !== (f = this.module.options.height) && void 0 !== f ? f : n[0].h;
                    for (var g = f = 0, u = 0, r = 0; l < n.length; l++) f + n[l].w <= v && (f += n[l].w, u++), g + n[l].h <= h && (g += n[l].h, r++);
                    1 < u ? (m = u, b.style.display = "inline-block", d = (v - f) / (m - 1) + "px") : 1 < r &&
                        (m = r, b.style.display = "block", c = (h - g) / (m - 1) + "px");
                    if (!a || this.isViewable(b, null))
                        for (b.innerHTML = "", a = 0; a < m; a++)
                            if (l = document.createElement("div"), l.id = this.getRenderTargetDivID(a), b.appendChild(l), this.res.renderAd(this.module, l, null, {
                                    blockGam: !0
                                }), this.res.nextAd(this.module)) a != m - 1 && (l.style.marginRight = d, l.style.marginBottom = c);
                            else break
                } else e.prototype.render.call(this, b, m, d)
            };
            g.prototype.init = function(b, m) {
                function d() {
                    !c.becameViewable && c.isViewable(n, null) && b.renderAd && (c.render(n), c.becameViewable = !0, c.removeEventListener("DOMContentLoaded", d), c.removeEventListener("load", d), c.removeEventListener("scroll", d), c.removeEventListener("resize", d), c.removeEventListener("orientationchange", d))
                }

                function a() {
                    var a = n.ownerDocument ? n.ownerDocument : document;
                    if (c.becameViewable && c.isDetachable)
                        if (c.isViewable(v, null)) c.isAttached || (l = a.getElementById(String(c.module.info.name).replace(/\s/g, "")), l.style.display = "none", n.style.position = "static", c.isAttached = !0);
                        else if (c.isAttached) {
                        if (!c.closeDiv) {
                            c.closeDiv =
                                a.createElement("div");
                            c.closeDiv.style.backgroundColor = "white";
                            c.closeDiv.style.color = "#77b0f2";
                            c.closeDiv.style.height = "20px";
                            c.closeDiv.style.width = "60px";
                            c.closeDiv.style.position = "relative";
                            var l = parseInt(String(n.offsetWidth)) / 2 - 30;
                            c.closeDiv.style.left = "" + l + "px";
                            c.closeDiv.style.top = "1px";
                            c.closeDiv.id = c.module.info.name ? String(c.module.info.name).replace(/\s/g, "") : "closeDiv";
                            c.closeDiv.innerHTML = "Close Ad";
                            c.closeDiv.style.borderRadius = "2px";
                            c.closeDiv.style.cursor = "pointer";
                            c.closeDiv.addEventListener("click",
                                function() {
                                    c.isDetachable = !1;
                                    n.style.position = "static";
                                    c.isAttached = !0;
                                    a.getElementById(String(c.module.info.name).replace(/\s/g, "")).style.display = "none"
                                });
                            n.insertBefore(c.closeDiv, n.firstElementChild)
                        }
                        l = a.getElementById(String(c.module.info.name).replace(/\s/g, ""));
                        l.style.display = "block";
                        n.style.position = "fixed";
                        n.style.bottom = "0px";
                        c.isAttached = !1
                    }
                }
                var h, f;
                e.prototype.init.call(this, b, m);
                var c = this;
                if (c.module.options.maxHeight && ((null === (f = null === (h = c.mm.zonedata) || void 0 === h ? void 0 : h.options) ||
                        void 0 === f ? 0 : f.cls) || c.module.options.cls)) try {
                    var l = "" + parseInt(c.module.options.maxHeight) + "px";
                    c.setCss({
                        ".cls": {
                            display: "flex",
                            "justify-content": "center",
                            "align-items": "center",
                            "min-height": l
                        }
                    });
                    c.module.div.classList.add("cls")
                } catch (x) {}
                var n = this.getRenderTarget(),
                    v = n.parentNode;
                c.timeSliceBlocked = !1;
                if (c.halt || c.mm.isAdBlockerOn()) c.timeSliceBlocked = !0;
                if (this.mm.locationData)
                    for (m = 0; m < c.TIMESLICEGEOSBLOCKED.length; m++)
                        if (h = c.TIMESLICEGEOSBLOCKED[m], h.countryCode && this.mm.locationData.countryCode ==
                            h.countryCode && (null == h.region || h.region == this.mm.locationData.region)) {
                            c.timeSliceBlocked = !0;
                            break
                        }!this.module.options.timeslice || c.timeSliceBlocked || c.mm.isAdBlockerOn() || this.initSliceManager();
                this.isDetachable = 1 == this.module.options.isDetachable || "true" == this.module.options.isDetachable ? !0 : !1;
                1 != this.module.options.requireViewable && "true" != this.module.options.requireViewable || e.prototype.isViewable.call(this, n, null) ? (c.render(n), c.becameViewable = !0) : (c.onEvent(window, "DOMContentLoaded", d), c.onEvent(window,
                    "load", d), c.onEvent(window, "scroll", d), c.onEvent(window, "resize", d), c.onEvent(window, "orientationchange", d));
                this.isDetachable && (c.onEvent(window, "DOMContentLoaded", a), c.onEvent(window, "load", a), c.onEvent(window, "scroll", a), c.onEvent(window, "resize", a), c.onEvent(window, "orientationchange", a))
            };
            return g
        }(e.default);
        k.default = p
    },
    "./src/zonemasters/components/createjscomponent.ts": function(e, k, p) {
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        var t = p("./src/zonemasters/components/supercomponent.ts"),
            q = p("./src/zonemasters/adstrategy.ts");
        k.default = function(e, g) {
            var b = function(b, d) {
                t.default.call(this, b, d)
            };
            b.prototype = Object.create(t.default.prototype);
            b.prototype.constructor = b;
            b.prototype.getRequestData = function() {
                var b = t.default.prototype.getRequestData.call(this);
                if (null != e && e.request)
                    for (var d = Object.keys(e.request), a = 0; a < d.length; a++) {
                        var h = d[a];
                        b[h] = b[h] ? b[h] : e.request[h]
                    }
                return b
            };
            b.prototype.init = function(b, d) {
                t.default.prototype.init.call(this, b, d);
                d = this.module.options;
                if (null != e &&
                    e.options)
                    for (var a = Object.keys(e.options), h = 0; h < a.length; h++) {
                        var f = a[h];
                        d[f] = d[f] ? d[f] : e.options[f]
                    }
                this.module.requestInstance && this.module.requestInstance.config && (d.pid = this.module.requestInstance.config.poolid);
                d.renderAd = b.renderAd.bind(b, this.module);
                d.triggerEvent = this.triggerEvent.bind(this);
                null == d.el && (this.module.el || this.module.target) && this.module.div && (d.el = this.module.div.parentNode);
                this.jsController = window[g](d);
                this.module.options.timeslice && this.initSliceManager()
            };
            b.prototype.tryNextTimeslice =
                function() {
                    var b = (new Date).getTime();
                    if (b < this.nextSliceTimestamp) b -= this.nextSliceTimestamp, this.mm.log("tryNextTimeslice: Did not use all time, adding " + b + "ms"), this.setSliceTimer(b);
                    else {
                        b = this.getRenderTarget();
                        var d = 5E3;
                        this.isViewable(b, null) && (this.res.nextAd(this.module) && (b = {
                            kind: "adcmd",
                            command: "refresh",
                            renderFn: this.res.renderAd.bind(this.res, this.module)
                        }, this.jsController ? this.jsController.adcmd(b) : this.mm.log("CPMStar - CreateJSComponent - Could not find jscontroller")), d = this.getNextTimesliceMs());
                        this.setSliceTimer(d)
                    }
                };
            b.prototype.testResponseValidityHelper = function(b) {
                var d = this;
                t.default.prototype.testResponseValidity.call(this, function(a) {
                    a ? d.res ? window[g].validityTest ? (a = window[g].testValidity(d.res), b(a)) : b(!0) : b(!1) : b(!1)
                })
            };
            b.prototype.testResponseValidity = function(b) {
                var d, a, h, f, c, l, n, v, m = null !== (d = this.module.options.maxslices) && void 0 !== d ? d : -1;
                if (this.module.options.timeslice)
                    if (d = q.TotalCPMStrategy({
                            minslicecpmpercent: null !== (a = this.module.options.minslicecpmpercent) && void 0 !==
                                a ? a : this.DEFAULTMINSLICECPMPERCENT,
                            minslice: null !== (h = this.module.options.minslice) && void 0 !== h ? h : this.DEFAULTMINSLICE,
                            refreshrate: null !== (f = this.module.options.refreshrate) && void 0 !== f ? f : this.DEFAULTREFRESHRATE,
                            match: [{
                                fixedSize: !0,
                                multi: null !== (c = this.module.options.slicemulti) && void 0 !== c ? c : this.DEFAULTSLICEMULTI,
                                target: m
                            }, {
                                fixedSize: !0,
                                multi: null !== (l = this.module.options.slicemulti) && void 0 !== l ? l : this.DEFAULTSLICEMULTI,
                                target: m
                            }, {
                                fixedSize: !0,
                                multi: null !== (n = this.module.options.slicemulti) && void 0 !==
                                    n ? n : this.DEFAULTSLICEMULTI,
                                target: m
                            }, {
                                w: null,
                                h: null,
                                target: 1
                            }]
                        }), this.res.pickAds)
                        if (this.pickResult = this.res.pickAds(this.module, d), a = null === (v = this.pickResult) || void 0 === v ? void 0 : v.picks, 0 < m && (a = a.slice(this.module.options.maxslices)), this.pickResult && a) {
                            for (v = this.pickResult.totalCPM = 0; v < a.length; v++) a[v].cpm && (this.pickResult.totalCPM += a[v].cpm);
                            this.testResponseValidityHelper(b)
                        } else b(!1);
                else b(!1);
                else this.testResponseValidityHelper(b)
            };
            b.prototype.adcmd = function(b) {
                var d = this;
                "object" ===
                typeof b && ("refresh" === b.command ? this.request(function() {
                    b.renderFn = d.res.renderAd.bind(d.res, d.module);
                    d.jsController ? d.jsController.adcmd(b) : d.mm.log("CPMStar - CreateJSComponent - Could not find jscontroller")
                }) : "addEventListener" === b.command ? this.addEventListener.apply(this, b.args) : "removeEventListener" === b.command ? this.removeEventListener.apply(this, b.args) : this.jsController ? this.jsController.adcmd(b) : d.mm.log("CPMStar - CreateJSComponent - Could not find jscontroller"))
            };
            return b
        }
    },
    "./src/zonemasters/components/editorial.ts": function(e,
        k, p) {
        var t = this && this.__extends || function() {
            var e = function(g, b) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a])
                };
                return e(g, b)
            };
            return function(g, b) {
                function m() {
                    this.constructor = g
                }
                e(g, b);
                g.prototype = null === b ? Object.create(b) : (m.prototype = b.prototype, new m)
            }
        }();
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        var q = p("./src/zonemasters/utils.ts");
        e = function(e) {
            function g(b, m) {
                b = e.call(this, b, m) || this;
                b.defaultRequestKind = "json";
                return b
            }
            t(g, e);
            g.prototype.convertCreative = function(b) {
                var m = this;
                b.getLink = function() {
                    return this.click
                }.bind(b);
                b.getTitle = function() {
                    return null == this.creativemacros.TITLE ? null : q.from_utf8(this.creativemacros.TITLE)
                }.bind(b);
                b.getDescription = function(a, l, f, b) {
                    var c = q.getCtx();
                    b ? (a = getComputedStyle(b), a.fontSize && a.fontFamily && (c.font = a.fontSize + " " + a.fontFamily), a = b.offsetWidth - (parseFloat(a.paddingLeft) + parseFloat(a.paddingRight)) - (parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth))) :
                        c.font = "6px Arial";
                    b = this.creativemacros.DESC300 ? q.from_utf8(this.creativemacros.DESC300) : null;
                    var n = this.creativemacros.DESC ? q.from_utf8(this.creativemacros.DESC) : null;
                    n = (b ? b : n ? n : "").split("<br");
                    for (var d = [], h = 0; h < n.length; h++) b = n[h], b = b.trim(), "/" == b[0] && ">" == b[1] && (b = b.slice(2)), b = b.trim(), 0 < b.length && d.push(b);
                    n = "";
                    var v = 0;
                    for (h = 0; h < d.length; h++) {
                        b = d[h];
                        var g = c.measureText(b).width;
                        g = Math.ceil(g / a);
                        if (1 <= v && v + g > l) break;
                        v += g;
                        if (null != f && n.length + b.length > f) {
                            l = !1;
                            if ("false" !== m.module.options.endOnPunctuation)
                                for (c =
                                    f - 1; c >= Math.ceil(f / 1.5); c--)
                                    if (" " == b[c] && ("!" == b[c - 1] || "." == b[c - 1] || "?" == b[c - 1])) {
                                        l = !0;
                                        n += b.slice(0, c);
                                        break
                                    }
                            l || (n += b.slice(0, f - n.length - 3) + "...");
                            break
                        } else n += b + "<br/>"
                    }
                    return n
                }.bind(b);
                b.getMaxLength = function(a, l) {}.bind(b);
                b.availImages = [];
                for (var d = Object.keys(b.creativemacros), a = 0; a < d.length; a++) {
                    var h = d[a],
                        f = null;
                    if ("IMAGE" == h.slice(0, 5)) f = h.slice(5).split("X");
                    else if ("BANNER" == h.slice(0, 6)) f = h.slice(6).split("X");
                    else continue;
                    f && 2 == f.length && b.availImages.push({
                        width: f[0],
                        height: f[1],
                        url: b.creativemacros[h]
                    })
                }
                b.closestAspect = function(a, l, b) {
                    if (0 == b.length) return {
                        url: "",
                        width: a,
                        height: l
                    };
                    for (var c = a / l, f = -1, n = 0; 4 > n && -1 == f; n++)
                        for (var d = 0, h = 0; h < b.length; h++)
                            if (!(a > 2 * b[h].width || a < b[h].width / 2 || l > 2 * b[h].height || a < b[h].height / 2)) {
                                var m = b[h].width / b[h].height / c;
                                1 < m && (m = 1 / m);
                                m > d && (d = m, f = h)
                            } - 1 == f && (f = 0);
                    return b[f]
                };
                b.getImageUrl = function(a, l) {
                    return b.closestAspect(a, l, b.availImages).url
                }
            };
            g.prototype.init = function(b, m) {
                b = b.getResponseData();
                var d = this.module.options,
                    a = window.innerWidth <
                    window.innerHeight ? window.innerWidth : window.innerHeight;
                a = d.descriptionPixelWidth ? d.descriptionPixelWidth : a;
                var h = d.maxDescriptionLines ? d.maxDescriptionLines : 1,
                    f = d.descriptionLength ? d.descriptionLength : 120,
                    c = this.module.iteration ? this.module.iteration : 0,
                    l = d.cap ? d.cap : b.creatives ? b.creatives.length : 20,
                    n = [];
                if (b.creatives) {
                    var v = c % b.creatives.length;
                    for (c = v; c < b.creatives.length && c < v + l; c++) {
                        var g = b.creatives[c];
                        this.convertCreative(g);
                        g.thumbUrl = g.getImageUrl(d.thumbWidth, d.thumbHeight);
                        g.imageUrl = g.getImageUrl(d.imageWidth,
                            d.imageHeight);
                        g.description = g.getDescription(a, h, f);
                        g.title = g.getTitle();
                        g.clickUrl = g.getLink();
                        null == g.title ? (b.creatives.splice(c, 1), c--) : (n.push(b.creatives[c]), c + 1 >= b.creatives.length && n.length < l && (c = -1, v = 0, l -= n.length))
                    }
                }
                this.module.creatives = n;
                e.prototype.init.call(this, b, m);
                if (d.descriptionTarget && void 0 == this.module.options.sandbox)
                    for (m = this.mm.findEls(d.descriptionTarget, this.module.div), c = 0; c < m.length; c++) this.module.creatives && this.module.creatives[c] && (m[c].innerHTML = this.module.creatives[c].getDescription(a,
                        h, f, m[c]))
            };
            return g
        }(p("./src/zonemasters/components/supercomponent.ts").default);
        k.default = e
    },
    "./src/zonemasters/components/imaplayer.ts": function(e, k, p) {
        function t(e) {
            var g = (new MessageChannel).port1;
            e.dispatchEvent = g.dispatchEvent.bind(g);
            e.addEventListener = g.addEventListener.bind(g);
            e.removeEventListener = g.removeEventListener.bind(g)
        }

        function q(e) {
            if ("function" === typeof Event) var g = new Event(e);
            else g = document.createEvent("Event"), g.initEvent(e, !1, !1);
            return g
        }
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        e = function() {
            function e(g) {
                this.mm = g;
                this.paused = this.autoPlayChecked = !1;
                this.pauseBeganTime = 0;
                this.muted = this.ended = this.began = !1;
                this.startTime = 0;
                this.mastervideotagurl = null;
                this.getVolume = function() {
                    return this.adsManager_.getVolume()
                };
                this.setVolume = function(b) {
                    0 > b && (b = 0);
                    1 < b && (b = 1);
                    this.adsManager_ && this.adsManager_.setVolume(b);
                    this.volume = b
                };
                t(this)
            }
            e.prototype.videoEl = function() {
                return this.videoContent_
            };
            e.prototype.dispatchEvent = function(g) {
                return !1
            };
            e.prototype.initInternal =
                function(g, b, m, d) {
                    var a = this;
                    a.mastervideotagurl = g;
                    a.width = b;
                    a.height = m;
                    a.options = d;
                    var h = null;
                    h = this.container_.ownerDocument.getElementById("adContainer");
                    if (null == h) throw this.mm.log("Could not find adcontainer in initInternal"), Error("Could not find adcontainer in initInternal");
                    a.initVideoElement();
                    a.options.clickToPlay ? (a.autoPlayChecked = !0, a.adDisplayContainer = new google.ima.AdDisplayContainer(h, a.videoContent_), a.adDisplayContainer.initialize(), a.startAdRequest(!1)) : (a.autoPlayAdjustMuted(function(b) {
                        a.autoPlayChecked = !0;
                        a.adDisplayContainer = new google.ima.AdDisplayContainer(h, a.videoContent_);
                        a.adDisplayContainer.initialize();
                        a.startAdRequest(b.requiresMuted)
                    }), a.videoContent_.load())
                };
            e.prototype.startAdRequest = function(g) {
                var b = new google.ima.AdsLoader(this.adDisplayContainer);
                b.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), !1);
                b.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onEvent.bind(this, "AdError"), !1);
                var m = new google.ima.AdsRequest;
                m.adTagUrl = this.mastervideotagurl;
                m.linearAdSlotWidth = parseInt("" + 16 / 9 * (0 + this.height));
                m.linearAdSlotHeight = this.height;
                m.nonLinearAdSlotWidth = parseInt("" + 16 / 9 * (0 + this.height));
                m.nonLinearAdSlotHeight = this.height;
                m.forceNonLinearFullSlot = !0;
                m.setAdWillAutoPlay(!1);
                !0 === this.options.muted || g ? (m.setAdWillPlayMuted(!0), this.setMuted(!0)) : (m.setAdWillPlayMuted(!1), this.setMuted(!1));
                b.requestAds(m)
            };
            e.prototype.onTimeout = function() {
                this.timeoutTimer_ = null;
                this.end("error", null)
            };
            e.prototype.initVideoElement =
                function() {
                    var g = this.container_.ownerDocument,
                        b = this.videoContent_;
                    b.setAttribute("playsinline", "true");
                    b.style.left = "0px";
                    b.style.top = "0px";
                    b.style.position = "absolute";
                    b.style.width = "100%";
                    b.style.height = "100%";
                    g = g.createElement("source");
                    g.setAttribute("src", "https://ssl.cdne.cpmstar.com/cached/zonemasters/mp4-with-audio.mp4");
                    g.setAttribute("type", "video/mp4");
                    b.appendChild(g);
                    return b
                };
            e.prototype.autoPlayAdjustMuted = function(g) {
                void 0 === g && (g = null);
                var b = this,
                    m = !1,
                    d = !1,
                    a = b.videoContent_,
                    h = function() {
                        a.removeEventListener("error",
                            h);
                        a.removeEventListener("canplay", f);
                        for (var c = 0; c < a.children.length; c++) "source" == a.children[c].tagName.toLowerCase() && a.children[c].removeEventListener("error", h);
                        d || (d = !0, b.setMuted(!0), g && g({
                            canAutoplay: !1,
                            requiresMuted: !0
                        }))
                    },
                    f = function() {
                        a.removeEventListener("error", h);
                        a.removeEventListener("canplay", f);
                        for (var c = 0; c < a.children.length; c++) "source" == a.children[c].tagName.toLowerCase() && a.children[c].removeEventListener("error", h);
                        m || (m = !0, b.mm.log("did not autoplay, so call play manually"),
                            c = a.play(), void 0 !== c ? c.then(function() {
                                d || (d = !0, g && g({
                                    canAutoplay: !0,
                                    requiresMuted: !1
                                }))
                            }).catch(function(c) {
                                b.mm.log("call to play prevented so had to mute");
                                b.setMuted(!0);
                                a.play().then(function() {
                                    d || (d = !0, g && g({
                                        canAutoplay: !0,
                                        requiresMuted: !0
                                    }))
                                }).catch(function(a) {
                                    b.mm.log("call to play failed even when muted");
                                    d || (d = !0, g && g({
                                        canAutoplay: !1,
                                        requiresMuted: !1
                                    }))
                                })
                            }) : d || (d = !0, g && g({
                                canAutoplay: !0,
                                requiresMuted: !1
                            })))
                    };
                a.addEventListener("error", f);
                a.addEventListener("canplay", f);
                for (var c = 0; c < a.children.length; c++) "source" ==
                    a.children[c].tagName.toLowerCase() && a.children[c].addEventListener("error", h)
            };
            e.prototype.play = function() {
                this.adsManager_ && this.paused ? (this.paused = !1, this.adsManager_.resume()) : !this.adsManager_ || this.began || this.ended || (this.adsManager_.start(), this.began = !0)
            };
            e.prototype.isSkippable = function() {
                return this.adsManager_ ? this.adsManager_.getAdSkippableState() : !1
            };
            e.prototype.replay = function() {};
            e.prototype.pause = function() {
                this.paused || (this.adsManager_.pause(), this.pauseBeganTime = Date.now(), this.paused = !0)
            };
            e.prototype.isPlaying = function() {
                return this.began && !this.paused && !this.ended
            };
            e.prototype.isPaused = function() {
                return this.paused
            };
            e.prototype.isMuted = function() {
                return this.muted
            };
            e.prototype.setMuted = function(g) {
                window.navigator.userAgent && window.navigator.userAgent.toLowerCase();
                this.adsManager_ ? g ? this.adsManager_.setVolume(0) : this.adsManager_.setVolume(1) : this.videoContent_ && (this.videoContent_.muted = g);
                this.muted = g
            };
            e.prototype.getSkipOffset = function() {
                return -1
            };
            e.prototype.setSkipOffset =
                function(g) {};
            e.prototype.getDuration = function() {
                return this.adsManager_ && "function" === typeof this.adsManager_.getDuration ? this.adsManager_.getDuration() : -1
            };
            e.prototype.getRemainingTime = function() {
                return this.adsManager_ ? this.adsManager_.getRemainingTime() : 0
            };
            e.prototype.close = function() {
                this.end("skipped")
            };
            e.prototype.init = function(g, b, m, d, a) {
                this.width = m;
                this.height = d;
                this.options = a;
                this.container_ = b;
                var h = b.ownerDocument,
                    f = h.createElement("div");
                this.videoContainer_ = f;
                f.style.position = "relative";
                f.id = "CPMSTAR_VIDEOCONTAINER";
                f.style.position = "absolute";
                f.style.left = "0";
                f.style.top = "0";
                f.style.bottom = "0";
                f.style.right = "0";
                f.style.zIndex = "2147483638";
                f.style.backgroundColor = "black";
                var c = h.createElement("video");
                c.id = "contentElement";
                c.style.position = "absolute";
                c.style.left = "0";
                c.style.top = "0";
                c.style.bottom = "0";
                c.style.right = "0";
                this.videoContent_ = c;
                a.className && c.classList.add(a.className);
                h = h.createElement("div");
                h.id = "adContainer";
                this.adContainer_ = h;
                b.appendChild(f);
                f.appendChild(c);
                f.appendChild(h);
                this.videoContainer_ = f;
                "undefined" !== typeof google && "undefined" != typeof google.ima ? this.initInternal(g, m, d, a) : (b = "https://imasdk.googleapis.com/js/sdkloader/ima3.js", this.mm.debug && (b = "https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js"), this.mm.getScript(b, this.initInternal.bind(this, g, m, d, a)));
                this.startFailsafeTimeout(15)
            };
            e.prototype.clearFailsafeTimeout = function() {
                this.timeoutTimer_ && (window.clearTimeout(this.timeoutTimer_), this.timeoutTimer_ = null)
            };
            e.prototype.startFailsafeTimeout = function(g) {
                this.clearFailsafeTimeout();
                this.timeoutTimer_ = window.setTimeout(this.onTimeout.bind(this), 1E3 * g)
            };
            e.prototype.end = function(g, b) {
                b && this.mm.log("VAST Error " + b.getError());
                this.timeoutTimer_ && (window.clearTimeout(this.timeoutTimer_), this.timeoutTimer_ = null);
                null != this.adsManager_ && (this.adsManager_.destroy(), this.adsManager_ = null);
                this.videoContainer_ && this.container_ && (this.container_.removeChild(this.videoContainer_), this.videoContainer_ = null);
                this.ended || (this.ended = !0, g && "error" == g ? this.dispatchEvent(q("error")) : this.dispatchEvent(q("complete")))
            };
            e.prototype.setSize = function(g, b) {
                this.adsManager_ && this.adsManager_.resize(g, b, google.ima.ViewMode.NORMAL)
            };
            e.prototype.isVpaidMode = function() {
                return !0
            };
            e.prototype.onEvent = function(g, b) {
                this.mm.log("Ad Event " + g + " " + (b ? b : ""));
                "AdLoaded" == g && (this.mm.log("VPAID video became ready"), this.dispatchEvent(q("ready")));
                "AdStarted" == g && this.dispatchEvent(q("start"));
                "AdVideoComplete" != g && "AllAdsCompleted" != g || this.end("complete");
                "AdSkippableStateChange" == g && this.dispatchEvent(q("skippablestatechange"));
                "AdSkipped" != g && "AdStopped" != g || this.end("skipped");
                "Paused" == g && (this.paused = !0, this.play());
                "UserClose" == g && this.end("userclose");
                "ContentResume" == g && this.end("contentresume", b);
                "AdError" == g && this.end("error", b);
                "Resumed" == g && (this.paused = !1)
            };
            e.prototype.onAdsManagerLoaded = function(g) {
                this.adsManager_ = g.getAdsManager(this.videoContent_);
                this.adsManager_.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onEvent.bind(this, "AdError"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.AD_METADATA,
                    this.onEvent.bind(this, "AdMetaData"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, this.onEvent.bind(this, "AllAdsCompleted"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.COMPLETE, this.onEvent.bind(this, "AdVideoComplete"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onEvent.bind(this, "ContentResume"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, this.onEvent.bind(this, "AdVideoFirstQuartile"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.LOADED, this.onEvent.bind(this, "AdLoaded"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.MIDPOINT, this.onEvent.bind(this, "AdVideoMidpoint"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.PAUSED, this.onEvent.bind(this, "Paused"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.RESUMED, this.onEvent.bind(this, "Resumed"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, this.onEvent.bind(this,
                    "AdSkippableStateChange"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.SKIPPED, this.onEvent.bind(this, "AdSkipped"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, this.onEvent.bind(this, "AdVideoThirdQuartile"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, this.onEvent.bind(this, "UserClose"));
                this.adsManager_.addEventListener(google.ima.AdEvent.Type.STARTED, this.onEvent.bind(this, "AdStarted"));
                try {
                    this.adsManager_.init(this.videoContainer_ &&
                        this.videoContainer_.clientWidth ? this.videoContainer_.clientWidth : this.width, this.videoContainer_ && this.videoContainer_.clientHeight ? this.videoContainer_.clientHeight : this.height, google.ima.ViewMode.NORMAL)
                } catch (b) {
                    this.end("error", null)
                }
                this.muted ? this.adsManager_.setVolume(0) : this.adsManager_.setVolume(1);
                this.timeoutTimer_ && (window.clearTimeout(this.timeoutTimer_), this.timeoutTimer_ = null)
            };
            return e
        }();
        k.default = e
    },
    "./src/zonemasters/components/instreamvideo.ts": function(e, k, p) {
        var t = this && this.__extends ||
            function() {
                var b = function(m, d) {
                    b = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(a, b) {
                        a.__proto__ = b
                    } || function(a, b) {
                        for (var f in b) b.hasOwnProperty(f) && (a[f] = b[f])
                    };
                    return b(m, d)
                };
                return function(m, d) {
                    function a() {
                        this.constructor = m
                    }
                    b(m, d);
                    m.prototype = null === d ? Object.create(d) : (a.prototype = d.prototype, new a)
                }
            }();
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        var q = p("./src/zonemasters/components/supercomponent.ts"),
            r = p("./src/zonemasters/components/videoplayer.ts"),
            g = p("./src/zonemasters/components/imaplayer.ts");
        e = function(b) {
            function m(d, a) {
                var h = b.call(this, d, a) || this;
                h.isHidden = !1;
                h.videoReady = !1;
                h.firstDetectViewable = !0;
                h.becameViewable = !1;
                h.renderAttempts = 0;
                h.px_cr = null;
                h.pb_err = null;
                h.setvolume = void 0;
                h.defaultRequestKind = "json";
                h.api.skip = function() {};
                h.api.setvolume = function(a) {
                    a.volume && h && h.videoObj && h.videoObj.setVolume && h.videoObj.setVolume(a.volume)
                };
                h.api.getduration = function(a) {
                    if (h && h.videoObj && h.videoObj.getDuration) {
                        var c = h.videoObj.getDuration();
                        a.cb && a.cb(function() {}, c)
                    } else a.fail &&
                        a.fail()
                };
                h.api.getremainingtime = function(a) {
                    if (h && h.videoObj && h.videoObj.getRemainingTime) {
                        var c = h.videoObj.getRemainingTime();
                        a.cb && a.cb(function() {}, c)
                    } else a.fail && a.fail()
                };
                return h
            }
            t(m, b);
            m.prototype.isViewable = function(b, a) {
                if (!1 === this.module.options.requireViewable) return !0;
                b = b.getBoundingClientRect();
                a && (b.height = a);
                var h = window.innerWidth;
                a = window.innerHeight;
                var f = document.documentElement.clientWidth,
                    c = document.documentElement.clientHeight,
                    l = h;
                h && f && (l = Math.min(h, f));
                null == l && (l = f);
                null ==
                    l && (l = document.getElementsByTagName("body")[0].clientWidth);
                (h = a) && c && (h = Math.min(a, c));
                null == h && (h = c);
                null == h && (h = document.getElementsByTagName("body")[0].clientHeight);
                return 0 <= b.top && 0 <= b.left && b.top + .6 * b.height <= h && b.left + .8 * b.width <= l ? !0 : !1
            };
            m.prototype.testResponseValidity = function(b) {
                var a = this;
                q.default.prototype.testResponseValidity.call(a, function(h) {
                    if (h)
                        if (a.res.renderAd) switch (a.res.getAdTypeAvailable(a.module)) {
                            case "video":
                            case "banner":
                            case "editorial":
                                h = !0;
                                break;
                            default:
                                h = !1
                        } else h =
                            a.res && a.res.getResponseData ? (h = a.res.getResponseData()) && h.creativemacros && h.creativemacros.HTML5VID_VASTSTRING ? !0 : h && h.creativemacros && h.creativemacros.HTML5VID_ADX ? !0 : !1 : !1;
                    b(h)
                })
            };
            m.prototype.showContainer = function() {
                this.isHidden && (this.firstDetectViewable || this.outercontainer.classList.add("cpmsvideoshow"), this.outercontainer.style.height = this.originalOuterContainerHeight + "px", this.outercontainer.style.display = "block", this.repeatElement && (this.repeatElement.style.display = "block"), this.muteElement &&
                    (this.muteElement.style.display = "block"), this.playElement && (this.playElement.style.display = "block"), this.skipElement && (this.skipElement.style.display = "block"), this.closeElement && (this.closeElement.style.display = "block"), this.isHidden = !1)
            };
            m.prototype.hideContainer = function() {
                var b = this;
                this.isHidden || (b.outercontainer.classList.remove("cpmsvideoshow"), b.outercontainer.classList.add("cpmsvideohide"), b.repeatElement && (b.repeatElement.style.display = "none"), b.muteElement && (b.muteElement.style.display =
                    "none"), b.playElement && (b.playElement.style.display = "none"), b.skipElement && (b.skipElement.style.display = "none"), b.closeElement && (b.closeElement.style.display = "none"), b.setTimeout(function() {
                    b.outercontainer.style.display = "none";
                    b.isHidden = !0
                }, 700))
            };
            m.prototype.closing = function() {
                var b = this;
                null != b.module.options.hideAfter && b.videoObj && 0 == b.videoObj.isVpaidMode() ? b.hideTimer = b.setTimeout(function() {
                    b.triggerEvent("hideafter");
                    b.close()
                }, b.module.options.hideAfter) : b.close()
            };
            m.prototype.close = function() {
                this.triggerEvent("onclose");
                this.videoObj && this.videoObj.close();
                this.hideContainer()
            };
            m.prototype.updateMuteElementCSSClass = function() {
                this.muteElement.className = this.videoObj && this.videoObj.isMuted() ? "cpmsvideosoundoff" : "cpmsvideosoundon"
            };
            m.prototype.attemptRenderPixel = function(b) {
                if (this.outercontainer && null != b && "" != b && (0 <= b.indexOf("http://") || 0 <= b.indexOf("https://") || 0 == b.indexOf("//"))) try {
                    var a = document.createElement("img");
                    a.src = b;
                    a.style.position = "absolute";
                    a.style.top = "0px";
                    a.style.left = "0px";
                    a.style.width = "1px";
                    a.style.height = "1px";
                    a.setAttribute("data-ot-ignore", "1");
                    this.outercontainer.appendChild(a);
                    a.onload = function() {
                        a.style.display = "none";
                        a.style.position = "absolute";
                        a.style.top = "0px";
                        a.style.left = "0px";
                        a.style.width = "1px";
                        a.style.height = "1px"
                    }
                } catch (h) {
                    this.mm.log("Error hitting pixel: " + h)
                }
            };
            m.prototype.initVideoObj = function(b, a) {
                void 0 === a && (a = !1);
                var h = this;
                h.playElement = document.createElement("div");
                h.muteElement = document.createElement("div");
                h.skipElement = document.createElement("div");
                h.videoObj =
                    a ? new g.default(this.mm) : new r.default(this.mm);
                h.videoObj.addEventListener("ready", function(a) {
                    h.videoReady = !0;
                    h.module.options && h.module.options.volume && h.api.setvolume({
                        volume: h.module.options.volume
                    });
                    h.module.div.style.visibility = "visible";
                    h.videoObj.play()
                });
                h.videoObj.addEventListener("start", function() {
                    h.px_cr && h.attemptRenderPixel(h.px_cr);
                    h.showContainer();
                    h.updateMuteElementCSSClass();
                    h.muteElement.onclick = function() {
                        h.videoObj.setMuted(!h.videoObj.isMuted());
                        h.updateMuteElementCSSClass()
                    };
                    h.outercontainer.insertBefore(h.muteElement, h.outercontainer.firstChild);
                    h.playElement.className = "cpmsvideopause";
                    h.playElement.onclick = function() {
                        h.videoObj.isPaused() ? h.videoObj.play() : h.videoObj.pause();
                        h.playElement.className = h.videoObj.isPaused() ? "cpmsvideoplay" : "cpmsvideopause"
                    };
                    h.outercontainer.insertBefore(h.playElement, h.outercontainer.firstChild);
                    h.skipElement.className = "cpmsskipad";
                    h.skipElement.onclick = function() {
                        h.videoObj.skip()
                    };
                    h.outercontainer.insertBefore(h.skipElement, h.outercontainer.firstChild);
                    h.skipElement.style.display = h.videoObj.isSkippable() ? "" : "none";
                    h.triggerEvent("onstart")
                });
                h.videoObj.addEventListener("skippablestatechange", function() {
                    h.skipElement.style.display = h.videoObj.isSkippable() ? "" : "none"
                });
                h.videoObj.addEventListener("error", function() {
                    h.px_cr = null;
                    h.pb_err = null;
                    h.triggerEvent("onend");
                    2 >= h.renderAttempts ? h.nextAd() ? h.attemptRender(null) : h.close() : h.close()
                });
                h.videoObj.addEventListener("complete", function() {
                    h.triggerEvent("onend");
                    h.playElement.style.display = "none";
                    h.muteElement.style.display =
                        "none";
                    null == h.repeatElement && !1 !== h.module.options.replay && 0 == h.videoObj.isVpaidMode() && (h.repeatElement = document.createElement("div"), h.repeatElement.className = "cpmsvideorepeat", h.repeatElement.onclick = function() {
                        null != h.hideTimer && (h.hideTimer(), h.hideTimer = null);
                        h.outercontainer.removeChild(h.repeatElement);
                        h.repeatElement = null;
                        h.videoObj.replay()
                    }, h.outercontainer.insertBefore(h.repeatElement, h.outercontainer.firstChild));
                    h.closing()
                });
                h.onEvent(window, "orientationchange", h.updateVideoSize.bind(h));
                h.onEvent(window, "resize", h.updateVideoSize.bind(h));
                h.videoObj.init(b, h.container, h.currentVideoSize.width, h.currentVideoSize.height, {
                    clickPrefix: h.module.options.clickPrefix,
                    muted: h.module.options.muted,
                    forceSkippability: h.module.options.forceSkippability
                })
            };
            m.prototype.getBannerRenderTarget = function() {
                var b = this.module.div.getElementsByClassName("bannertarget")[0];
                return b ? b : q.default.prototype.getRenderTarget.call(this)
            };
            m.prototype.measureVideoSize = function() {
                var b = null != this.container && 0 < this.container.clientHeight &&
                    0 < this.container.clientWidth ? this.container : this.outercontainer;
                return {
                    width: b.clientWidth,
                    height: b.clientHeight
                }
            };
            m.prototype.updateVideoSize = function() {
                var b = this;
                b.setTimeout(function() {
                    b.currentVideoSize = {
                        width: b.outercontainer.clientWidth * b.originalVideoWidthRatio,
                        height: b.outercontainer.clientHeight * b.originalVideoHeightRatio
                    };
                    b.videoObj.setSize(b.currentVideoSize.width, b.currentVideoSize.height)
                }, 200)
            };
            m.prototype.attemptRender = function(b) {
                var a = this.getRenderTarget();
                this.mm.log("InstreamVideo - attemptRender");
                this.renderAttempts++;
                if (this.res && this.res.renderAd) switch (this.res.getAdTypeAvailable(this.module)) {
                    case "banner":
                    case "editorial":
                        this.render(this.getBannerRenderTarget(), this.onAdRendered.bind(this, b));
                        break;
                    case "video":
                        this.mm.log("InstreamVideo - attemptRender - got ad type video");
                        this.render(a, this.onAdRendered.bind(this, b));
                        break;
                    default:
                        this.mm.log("InstreamVideo - unknown ad type ( default ad? returned)"), this.close()
                } else this.onAdRendered.call(this, b)
            };
            m.prototype.init = function(d, a) {
                function h() {
                    !f.becameViewable &&
                        f.isViewable(c, f.currentVideoSize.height) && (f.becameViewable = !0, f.mm.log("video became viewable"), f.outercontainer.style.overflow = "visible", f.attemptRender(a));
                    f.firstDetectViewable = !1
                }
                console.log("LOG - instreamvideo.ts init called ");
                b.prototype.init.call(this, d, a);
                var f = this,
                    c = this.getRenderTarget();
                f.module.div.style.visibility = "hidden";
                f.outercontainer = c;
                f.container = f.outercontainer.getElementsByClassName("cpmsvideowrapper")[0];
                null == f.container && (f.container = f.outercontainer);
                f.currentVideoSize =
                    f.measureVideoSize();
                f.originalVideoWidthRatio = f.currentVideoSize.width / f.outercontainer.clientWidth;
                f.originalVideoHeightRatio = f.currentVideoSize.height / f.outercontainer.clientHeight;
                f.originalOuterContainerHeight = f.outercontainer.clientHeight;
                f.module.options && f.module.options.startHidden && (f.outercontainer.style.overflow = "hidden", f.outercontainer.style.height = "0px", f.isHidden = !0);
                f.onEvent(window, "DOMContentLoaded", h);
                f.onEvent(window, "load", h);
                f.onEvent(window, "resize", h);
                f.onEvent(window, "scroll",
                    h);
                f.onEvent(window, "orientationchange", h);
                f.setTimeout(function() {
                    h()
                }, 0);
                f.setTimeout(function() {
                    h()
                }, 500)
            };
            m.prototype.renderXButton = function() {
                var b = this;
                b.closeElement = document.createElement("div");
                b.closeElement.className = "cpmsvideoclosebanner";
                b.closeElement.onclick = function() {
                    b.close()
                };
                var a = this.getBannerRenderTarget();
                a || (a = b.outercontainer);
                a.appendChild(b.closeElement);
                b.closeElement.style.display = "block"
            };
            m.prototype.onAdRendered = function(d) {
                b.prototype.onAdRendered.call(this, d);
                this.mm.log("InstreamVideo - onAdRendered");
                var a = this.res.getAdTypeAvailable(this.module, 2 > this.renderAttempts ? null : {
                    fallback: !0
                });
                this.mm.log("getAdTypeAvailable: " + a);
                switch (a) {
                    case "editorial":
                    case "banner":
                        this.module.div.style.visibility = "visible";
                        this.renderXButton();
                        this.triggerEvent("onstart");
                        break;
                    case "video":
                    case "json":
                        this.mm.log(this.res.getResponseData);
                        if (this.res.getResponseData) {
                            a = this.res.getResponseData();
                            this.mm.log(a);
                            if (a && a.creativemacros.HTML5VID_ADX) {
                                this.initVideoObj(a.creativemacros.HTML5VID_ADX, !0);
                                a.px_cr && (this.px_cr =
                                    a.px_cr);
                                a.pb_err && (this.pb_err = a.pb_err);
                                return
                            }
                            if (a && (this.mm.log("onAdRendered - calling initVideoObj for HTML5VID_VASTSTRING " + a.creativemacros.HTML5VID_VASTSTRING), this.initVideoObj(a.creativemacros.HTML5VID_VASTSTRING), a.creativemacros.ROADBLOCK && this.triggerEvent("roadblock", {
                                    roadblock: a.creativemacros.ROADBLOCK
                                }), this.module.options.forceSkippability || this.module.options.autoSkippability && a.creativemacros.HTML5VID_VASTSTRING.match(/<MediaFile\b[^>]*>(.*\.cpmstar\.com.*)<\/MediaFile>/g))) {
                                var h =
                                    0;
                                a.creativemacros.HTML5VID_SKIPSECONDS && (h = a.creativemacros.HTML5VID_SKIPSECONDS ? 1E3 * a.creativemacros.HTML5VID_SKIPSECONDS : 0);
                                0 < h ? this.videoObj.setSkipOffset(h) : 1E3 < this.videoObj.getSkipOffset() && (this.module.options.autoSkipOffset ? this.videoObj.setSkipOffset(this.module.options.autoSkipOffset) : this.videoObj.setSkipOffset(5))
                            }
                        }
                        break;
                    default:
                        this.close()
                }
                d && d()
            };
            return m
        }(q.default);
        k.default = e
    },
    "./src/zonemasters/components/onrpghotbox.ts": function(e, k, p) {
        var t = this && this.__extends || function() {
            var e =
                function(k, g) {
                    e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(b, m) {
                        b.__proto__ = m
                    } || function(b, m) {
                        for (var d in m) m.hasOwnProperty(d) && (b[d] = m[d])
                    };
                    return e(k, g)
                };
            return function(k, g) {
                function b() {
                    this.constructor = k
                }
                e(k, g);
                k.prototype = null === g ? Object.create(g) : (b.prototype = g.prototype, new b)
            }
        }();
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        e = function(e) {
            function k(g, b) {
                g = e.call(this, g, b) || this;
                g.maxMulti = 5;
                g.fadeRate = 0;
                g.hoverFadeRate = 0;
                g.fadeOpacity = .5;
                g.fullOpacity = 1;
                g.iterations =
                    0;
                g.lastIterationTime = 0;
                g.timer = null;
                g.hovering = !1;
                g.moved = 0;
                return g
            }
            t(k, e);
            k.prototype.init = function(g) {
                e.prototype.init.call(this, g);
                var b = this,
                    m = b.mm.$;
                g.getResponseData();
                var d = b.module.div;
                m(d).find(".hotbox_thumbs ul li:first").addClass("selected");
                b.lastIterationTime = (new Date).getTime();
                b.timer = b.setTimeout(function() {
                    b.next()
                }, 7500);
                m(document).ready(function() {
                    m(d).find(".hotbox_thumbs li div").each(function() {
                        m(this).css("opacity", b.fadeOpacity)
                    });
                    m(d).find(".thumb_0 div").css("opacity",
                        b.fullOpacity);
                    var a = m(d).find(".hotbox-widget");
                    a && a.hover(function() {
                        b.hovering = !0;
                        null != b.timer && clearTimeout(b.timer);
                        b.timer = null
                    }, function() {
                        b.hovering = !1;
                        null != b.timer && clearTimeout(b.timer);
                        b.timer = null;
                        b.timer = b.setTimeout(function() {
                            b.next()
                        }, 5E3)
                    });
                    a = m(d).find(".hotbox_thumbs ul li");
                    var h = null,
                        f = null,
                        c = m(d).find(".hotbox_items")[0];
                    c.addEventListener("touchstart", function(a) {
                        h = a.touches[0].clientX;
                        f = a.touches[0].clientY;
                        b.moved = 0
                    });
                    c.addEventListener("touchmove", function(a) {
                        if (null != h &&
                            null != f) {
                            var c = a.touches[0].clientX - h;
                            if (Math.abs(c) > Math.abs(a.touches[0].clientY - f)) {
                                a = m(b.module.div).find(".hotbox_items ul:first");
                                var l = -(100 * m(b.module.div).find(".hotbox_thumbs ul li.selected:first").index() / 4) + c / a[0].clientWidth * 100 + "%";
                                a.animate({
                                    left: l
                                }, 10, "linear");
                                b.moved = Math.abs(c)
                            }
                        }
                    });
                    c.addEventListener("touchend", function(a) {
                        if (null != h && null != f) {
                            var c = a.changedTouches[0].clientX - h;
                            a = a.changedTouches[0].clientY - f;
                            var l = m(b.module.div).find(".hotbox_items ul:first"),
                                d = -(100 * m(b.module.div).find(".hotbox_thumbs ul li.selected:first").index() /
                                    4) + "%";
                            Math.abs(c) > Math.abs(a) && Math.abs(c) >= l[0].clientWidth / 16 ? 0 > c ? b.next(1) : b.next(-1) : 0 < b.moved && l.animate({
                                left: d
                            }, 10, "linear")
                        }
                    });
                    a.hover(function() {
                        null != b.timer && clearTimeout(b.timer);
                        b.timer = null;
                        m(d).find(".hotbox_thumbs ul li div").css("opacity", b.fadeOpacity);
                        m(d).find(".hotbox_thumbs ul li").removeClass("selected");
                        m("div", this).fadeTo(b.hoverFadeRate, b.fullOpacity);
                        m(this).addClass("selected");
                        var a = m(d).find(".hotbox_items ul:first"),
                            c = -288 * m(this).index();
                        a.stop();
                        a.animate({
                                top: c
                            },
                            350)
                    }, function() {
                        m("img", this).fadeTo(b.fadeRate, b.fadeOpacity);
                        null != b.timer && clearTimeout(b.timer);
                        b.timer = null;
                        b.timer = b.setTimeout(function() {
                            b.next()
                        }, 7500)
                    })
                })
            };
            k.prototype.next = function(g) {
                var b = this.mm.$,
                    m = this.module.div;
                if (null == g && (this.iterations++, this.iterations && 16 < this.iterations)) return;
                null != this.timer && clearTimeout(this.timer);
                this.timer = null;
                var d = b(m).find(".hotbox_thumbs ul li.selected:first");
                d.removeClass("selected");
                b("div", d).fadeTo(this.fadeRate, this.fadeOpacity);
                var a =
                    d;
                if (null == g || 1 == g) a = d.next(), 0 == a.length && (a = b(m).find(".hotbox_thumbs ul li:first")); - 1 == g && (a = d.prev(), 0 == a.length && (a = b(m).find(".hotbox_thumbs ul li:last")));
                a.addClass("selected");
                b("div", a).fadeTo(this.hoverFadeRate, this.fullOpacity);
                g = b(m).find(".hotbox_items ul:first");
                a = a.index();
                b(m).find(".hotbox_list").children();
                b = -(100 * a / 4) + "%";
                g.stop();
                g.animate({
                    left: b
                }, 350)
            };
            return k
        }(p("./src/zonemasters/components/editorial.ts").default);
        k.default = e
    },
    "./src/zonemasters/components/scriptcomponent.ts": function(e,
        k, p) {
        var t = this && this.__extends || function() {
            var e = function(g, b) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a])
                };
                return e(g, b)
            };
            return function(g, b) {
                function m() {
                    this.constructor = g
                }
                e(g, b);
                g.prototype = null === b ? Object.create(b) : (m.prototype = b.prototype, new m)
            }
        }();
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        var q = p("./src/zonemasters/components/supercomponent.ts");
        e = function(e) {
            function g(b, m) {
                return e.call(this,
                    b, m) || this
            }
            t(g, e);
            g.prototype.request = function(b) {
                b(this.init.bind(this, this.res))
            };
            g.prototype.init = function(b, m) {
                q.default.prototype.init.call(this, b, m);
                b = this.module.options;
                this.getRequestData();
                var d = m = null;
                null != b && (d = new Function(b.onsuccess), m = b.src, "string" === typeof m && "/" === m[0] && (m = (this.mm.proto ? "//server" : "//cdn") + ".cpmstar.com" + m));
                null != m && this.mm.getScript(m, d)
            };
            return g
        }(q.default);
        k.default = e
    },
    "./src/zonemasters/components/segmentedvideo.ts": function(e, k, p) {
        function t(a) {
            var b = [];
            Object.keys(a).forEach(function(c) {
                b.push({
                    key: c,
                    value: a[c]
                })
            });
            return b
        }
        var q = this && this.__extends || function() {
            var a = function(b, l) {
                a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, b) {
                    a.__proto__ = b
                } || function(a, b) {
                    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
                };
                return a(b, l)
            };
            return function(b, l) {
                function c() {
                    this.constructor = b
                }
                a(b, l);
                b.prototype = null === l ? Object.create(l) : (c.prototype = l.prototype, new c)
            }
        }();
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        var r = p("./src/zonemasters/components/supercomponent.ts"),
            g = p("./src/zonemasters/components/videoplayer.ts"),
            b = p("./src/zonemasters/components/imaplayer.ts"),
            m = function() {
                function a(a) {
                    this.ad = a;
                    this.isHidden = this.outercontainer = void 0;
                    this.firstDetectViewable = !1;
                    this.container = this.currentVideoSize = this.pb_err = this.px_cr = this.videoObj = this.originalVideoHeightRatio = this.originalVideoWidthRatio = this.module = this.hideTimer = this.skipElement = this.playElement = this.muteElement = this.repeatElement = void 0;
                    this.finalizers = [];
                    this.componentInstance = this.mm = this.originalOuterContainerHeight =
                        void 0;
                    this.halt = this.ready = !1;
                    this.imaPlayer = void 0;
                    var b = this;
                    b.componentInstance = b.ad.componentInstance;
                    b.container = b.ad.container;
                    "mm module repeatElement skipElement playElement muteElement outercontainer isHidden module originalVideoWidthRatio originalVideoWeightRatio originalOuterContainerHeight finalizer currentVideoSize".split(" ").forEach(function(a) {
                        b[a] = b.componentInstance[a]
                    });
                    b.componentInstance.module.options.preroll && 0 == b.componentInstance.clipCount && (a = b.getTitle(), b.componentInstance.updateTitle(a))
                }
                a.prototype.setVolume = function(a) {
                    this.videoObj && this.videoObj.setVolume && this.videoObj.setVolume(a)
                };
                a.prototype.setup = function() {
                    var a = this.usesImaPlayer();
                    this.imaPlayer = a;
                    this.init(this.getVastString(), a);
                    this.handlePlayerType(a)
                };
                a.prototype.handlePlayerType = function(a) {
                    var b, c, f;
                    if (null === (f = null === (c = null === (b = this.ad) || void 0 === b ? void 0 : b.responseData) || void 0 === c ? void 0 : c.creativemacros) || void 0 === f ? 0 : f.HALTREFRESH) this.halt = !0;
                    a ? (this.ad.responseData.px_cr && (this.px_cr = this.ad.responseData.px_cr),
                        this.ad.responseData.pb_err && (this.pb_err = this.ad.responseData.pb_err)) : this.module.options.autoSkippability && this.ad.responseData.creativemacros.HTML5VID_VASTSTRING.match(/<MediaFile\b[^>]*>(.*\.cpmstar\.com.*)<\/MediaFile>/g) && (a = 0, this.ad.responseData.creativemacros.HTML5VID_SKIPSECONDS && (a = this.ad.responseData.creativemacros.HTML5VID_SKIPSECONDS ? 1E3 * this.ad.responseData.creativemacros.HTML5VID_SKIPSECONDS : 0), 0 < a ? this.videoObj.setSkipOffset(a) : 1E3 < this.videoObj.getSkipOffset() && (this.module.options.autoSkipOffset ?
                        this.videoObj.setSkipOffset(this.module.options.autoSkipOffset) : this.videoObj.setSkipOffset(5)))
                };
                a.prototype.setMuted = function(a) {
                    this.componentInstance.isMuted = a;
                    this.videoObj.videoEl() && (this.videoObj.setMuted(a), this.updateMuteElementCSSClass());
                    this.ad.componentInstance.videoObj && this.ad.componentInstance.videoObj.setMuted(a)
                };
                a.prototype.getTitle = function() {
                    var a = "";
                    this.componentInstance.module.options.title ? a = this.componentInstance.module.options.title : this.ad && this.ad.responseData && this.ad.responseData.creativemacros &&
                        this.ad.responseData.creativemacros.title ? a = this.ad.responseData.creativemacros.title : this.componentInstance.creativemacros && this.componentInstance.creativemacros.title && (a = this.componentInstance.creativemacros.title);
                    return a
                };
                a.prototype.init = function(a, l) {
                    console.log("LOG - segmentedvideo.ts init called ");
                    var c = this;
                    c.videoObj = l ? new b.default(c.mm) : new g.default(c.mm);
                    c.videoObj.addEventListener("ready", function(a) {
                        c.ready = !0;
                        c.module.options && c.module.options.volume && c.setVolume(c.module.options.volume);
                        c.videoObj.watchdogOff && "hb" == c.module.adRequest && setTimeout(c.videoObj.watchdogOff.bind(c.videoObj), 1E3);
                        c.componentInstance.module.options && c.componentInstance.module.options.intermittentAds && 1 != c.componentInstance.module.options.preroll && c.videoObj && 0 == c.videoObj.isPlaying() && c.componentInstance.queueIntermittentAd(c.componentInstance.module.options.intermittentAds);
                        c.ad.readyCallback && (a = c.ad.readyCallback, c.ad.readyCallback = void 0, c.ad.invalidCallback = void 0, a())
                    });
                    c.videoObj.addEventListener("start",
                        function() {
                            c.ad.componentInstance.hideSpinner();
                            c.videoObj.watchdogOn && "hb" == c.module.adRequest && c.videoObj.watchdogOn(5);
                            c.px_cr && c.attemptRenderPixel(c.px_cr);
                            c.outercontainer.insertBefore(c.muteElement, c.outercontainer.firstChild);
                            c.showContainer();
                            c.setMuted(c.componentInstance.isMuted);
                            c.muteElement.onclick = function() {
                                c.setMuted(!c.componentInstance.isMuted)
                            };
                            c.outercontainer.insertBefore(c.muteElement, c.outercontainer.firstChild);
                            c.playElement.className = "cpmsvideopause";
                            c.playElement.onclick =
                                function() {
                                    c.videoObj.isPaused() ? (c.videoObj.play(), c.componentInstance.userPlayState = "playing") : (c.videoObj.pause(), c.componentInstance.userPlayState = "paused");
                                    c.playElement.className = c.videoObj.isPaused() ? "cpmsvideoplay" : "cpmsvideopause"
                                };
                            c.outercontainer.insertBefore(c.playElement, c.outercontainer.firstChild);
                            c.outercontainer.insertBefore(c.repeatElement, c.outercontainer.firstChild);
                            c.module.options.repeat || (c.repeatElement.style.display = "none");
                            c.repeatElement.className = "cpmsvideorepeat";
                            c.repeatElement.addEventListener("click",
                                function() {
                                    c.componentInstance.repeatVideo()
                                });
                            c.skipElement.className = "cpmsvideoskip";
                            c.skipElement.onclick = function() {
                                c.videoObj.skip()
                            };
                            c.outercontainer.insertBefore(c.skipElement, c.outercontainer.firstChild);
                            c.skipElement.style.display = c.videoObj.isSkippable() ? "" : "none";
                            var a = c.getTitle();
                            c.module.options.titleClass && a && c.componentInstance.updateTitle(a)
                        });
                    c.videoObj.addEventListener("skippablestatechange", function() {
                        c.skipElement.style.display = c.videoObj.isSkippable() ? "" : "none"
                    });
                    c.videoObj.addEventListener("error",
                        function(a) {
                            c.mm.log("Error: " + JSON.stringify(a, function(a, c) {
                                return a + "..."
                            }));
                            0 == c.ad.nextAd() && (c.ad.isValid = !1, c.close())
                        });
                    c.videoObj.addEventListener("complete", function() {
                        c.componentInstance.module.options && c.componentInstance.module.options.preroll && (c.componentInstance.module.options.preroll = !1);
                        0 == c.halt ? (c.componentInstance.showSpinner(), c.close()) : (c.playElement.style.display = "none", c.repeatElement.style.display = "block")
                    });
                    c.onEvent(window, "orientationchange", c.updateVideoSize.bind(c));
                    c.onEvent(window, "resize", c.updateVideoSize.bind(c));
                    c.videoObj.init(a, c.container, c.currentVideoSize.width, c.currentVideoSize.height, {
                        clickPrefix: c.module.options.clickPrefix,
                        muted: c.ad.componentInstance.isMuted,
                        className: c.module.options.videoClass
                    })
                };
                a.prototype.getVastString = function() {
                    return this.usesImaPlayer() ? this.ad.responseData.creativemacros.HTML5VID_ADX : this.ad.responseData.creativemacros.HTML5VID_VASTSTRING
                };
                a.prototype.usesImaPlayer = function() {
                    return function(a, b) {
                        return a.every(function(a) {
                            return a !=
                                b
                        }) ? !1 : !0
                    }(Object.keys(this.ad.responseData.creativemacros), "HTML5VID_ADX")
                };
                a.prototype.setTimeout = function(a, b) {
                    a = window.setTimeout(a, b);
                    a = window.clearTimeout.bind(window, a);
                    this.addFinalizer(a);
                    return a
                };
                a.prototype.onEvent = function(a, b, f, h) {
                    void 0 === h && (h = !1);
                    var c = null;
                    a.addEventListener ? (a.addEventListener(b, f, h), c = function(a, b) {
                        this.removeEventListener(a, b)
                    }.bind(a, b, f)) : a.attachEvent && (a.attachEvent("on", b, f), c = function(c, l) {
                        this.detachEvent(c, l).bind(a, b, f)
                    });
                    this.addFinalizer(c)
                };
                a.prototype.addFinalizer =
                    function(a) {
                        (this.finalizers = this.finalizers || []).push(a)
                    };
                a.prototype.attemptRenderPixel = function(a) {
                    if (this.outercontainer && null != a && "" != a && (0 <= a.indexOf("http://") || 0 <= a.indexOf("https://") || 0 == a.indexOf("//"))) try {
                        var b = document.createElement("img");
                        b.src = a;
                        this.outercontainer.appendChild(b);
                        b.style.position = "absolute";
                        b.style.top = "0px";
                        b.style.left = "0px";
                        b.style.width = "1px";
                        b.style.height = "1px";
                        b.onload = function() {
                            b.style.display = "none";
                            b.style.position = "absolute";
                            b.style.top = "0px";
                            b.style.left =
                                "0px";
                            b.style.width = "1px";
                            b.style.height = "1px"
                        }
                    } catch (n) {
                        this.mm.log("Error hitting pixel: " + n)
                    }
                };
                a.prototype.showContainer = function() {
                    this.isHidden && (this.outercontainer.style.height = "" + this.originalOuterContainerHeight + "px", this.outercontainer.style.display = "block", this.isHidden = !1, this.firstDetectViewable || this.outercontainer.classList.add("cpmsvideoshow"))
                };
                a.prototype.updateMuteElementCSSClass = function() {
                    this.muteElement.className = this.videoObj && this.videoObj.isMuted() ? "cpmsvideosoundoff" : "cpmsvideosoundon"
                };
                a.prototype.destroy = function() {
                    for (; this.finalizers && 0 < this.finalizers.length;) this.finalizers.pop()()
                };
                a.prototype.close = function() {
                    this.container.remove();
                    this.videoObj.close();
                    this.destroy();
                    this.componentInstance.resume()
                };
                a.prototype.updateVideoSize = function() {
                    var a = this;
                    a.setTimeout(function() {
                        var b = {
                            width: a.outercontainer.clientWidth * a.originalVideoWidthRatio,
                            height: a.outercontainer.clientHeight * a.originalVideoHeightRatio
                        };
                        b.width != a.currentVideoSize.width && b.width != a.currentVideoSize.height &&
                            (a.currentVideoSize = b, a.videoObj.setSize(a.currentVideoSize.width, a.currentVideoSize.height))
                    }, 200)
                };
                a.prototype.hideContainer = function() {
                    var a = this;
                    a.isHidden || (a.outercontainer.classList.remove("cpmsvideoshow"), a.outercontainer.classList.add("cpmsvideohide"), a.setTimeout(function() {
                        a.outercontainer.style.display = "none";
                        a.isHidden = !0
                    }, 700))
                };
                return a
            }(),
            d = function() {
                function a(a, b) {
                    this.mm = a;
                    this.componentInstance = b;
                    this.container = this.outercontainer = this.closeElement = this.module = this.adPlayer = this.responseData =
                        this.response = this.request = void 0;
                    this.isValid = !1;
                    this.adtype = "";
                    this.invalidCallback = this.readyCallback = void 0;
                    this.module = this.componentInstance.module;
                    this.getAd()
                }
                a.prototype.nextAd = function() {
                    var a = !1;
                    void 0 != this.container && this.container.remove();
                    this.adPlayer && this.adPlayer.videoObj && (this.adPlayer.destroy(), this.adPlayer.videoObj.close());
                    this.response && this.response.nextAd && (a = this.response.nextAd(this.module), this.renderAd());
                    return a
                };
                a.prototype.isReady = function() {
                    var a = !1;
                    this.isValid &&
                        this.adPlayer && this.adPlayer.videoObj && (a = !0);
                    return a
                };
                a.prototype.getRequest = function() {
                    var a = this.mm.zonedata.requests[this.module.adRequest],
                        b = a.kind ? a.kind : "json";
                    if (null == b) throw Error("Ad request kind was null.");
                    b = this.mm.requestTypes[b];
                    if (null == b) throw Error("Ad request type is not valid.");
                    this.request = new b(this.mm);
                    this.request.init(a)
                };
                a.prototype.createElement = function(a, b) {
                    var c = document.createElement(a);
                    Object.keys(b).forEach(function(a) {
                        c.setAttribute(a, b[a])
                    });
                    return c
                };
                a.prototype.createAdWrapper =
                    function() {
                        this.container = this.createElement("div", {
                            id: "cpmsadwrapper"
                        });
                        this.componentInstance.hide(this.container);
                        this.componentInstance.outercontainer.prepend(this.container)
                    };
                a.prototype.adFrequency = function() {
                    return Math.random() < this.componentInstance.adFrequency ? !0 : !1
                };
                a.prototype.play = function() {
                    this.container && (this.container.style.display = "block");
                    var a = this.adFrequency();
                    this.isValid && this.adPlayer && this.adPlayer.videoObj && (a || 0 == this.componentInstance.clipCount && this.module.options.preroll) ?
                        this.adPlayer.videoObj.play() : this.close()
                };
                a.prototype.close = function() {
                    void 0 != this.container && this.container.remove();
                    this.adPlayer && this.adPlayer.videoObj && this.adPlayer.videoObj.close();
                    this.componentInstance.resume()
                };
                a.prototype.getBannerRenderTarget = function() {
                    var a = this.module.div.getElementsByClassName("bannertarget")[0];
                    return a ? a : r.default.prototype.getRenderTarget.call(this)
                };
                a.prototype.clearBanner = function() {
                    setTimeout(this.close.bind(this), 1E4)
                };
                a.prototype.formatResponseData = function(a) {
                    return "string" ==
                        typeof a ? {
                            creativemacros: {
                                HTML5VID_VASTSTRING: a
                            }
                        } : a
                };
                a.prototype.onAdRendered = function() {
                    var a = this;
                    a.testResponseValidity(function(b) {
                        (a.isValid = b) ? (a.responseData = a.formatResponseData(a.componentInstance.getResponse().getResponseData()), a.createAdWrapper(), a.adPlayer = new m(a), a.adPlayer.setup()) : (a.invalidCallback && (b = a.invalidCallback, a.invalidCallback = void 0, a.readyCallback = void 0, b()), console.log("The response was not valid."))
                    })
                };
                a.prototype.renderAd = function() {
                    this.adtype = this.response.getAdTypeAvailable(this.module);
                    switch (this.adtype) {
                        case "banner":
                        case "editorial":
                            this.response.renderAd(this.module, this.getBannerRenderTarget(), this.clearBanner.bind(this));
                            break;
                        case "video":
                            this.response.renderAd(this.module, this.outercontainer, this.onAdRendered.bind(this));
                            break;
                        default:
                            this.onAdRendered()
                    }
                };
                a.prototype.testResponseValidity = function(a) {
                    var b = !1,
                        c = this.componentInstance.getResponse();
                    if (null != c && "object" == typeof c) switch (c.getAdTypeAvailable(this.module)) {
                        case "editorial":
                        case "banner":
                        case "video":
                            b = !0;
                            break;
                        default:
                            b = !1
                    }
                    a(b)
                };
                a.prototype.getAd = function() {
                    var a = this;
                    a.getRequest();
                    a.request.addCallback(a.componentInstance, function(b) {
                        a.response = b;
                        a.componentInstance.setResponse(a.response);
                        a.renderAd()
                    })
                };
                return a
            }(),
            a = function() {
                function a(a) {
                    this.SegmentedVideo = a;
                    this.index = 0;
                    this.queue = [];
                    this.played = []
                }
                a.prototype.isEnd = function() {
                    return this.index == this.queue.length ? !0 : !1
                };
                a.prototype.next = function() {
                    this.SegmentedVideo.clipCount++;
                    var a = void 0;
                    if (this.isEnd()) throw this.index = 0, Error("There are no more videos to play.");
                    this.index == this.queue.length - 1 && void 0 == this.SegmentedVideo.module.options.maxClips && (void 0 == this.SegmentedVideo.module.options.maxEpisodes || this.SegmentedVideo.module.options.maxEpisodes && this.SegmentedVideo.episodeCount < this.SegmentedVideo.module.options.maxEpisodes) ? (a = this.queue[this.index++], this.index = 0, this.SegmentedVideo.fetchNext()) : this.index == this.queue.length - 1 && (this.SegmentedVideo.module.options.maxEpisodes && this.SegmentedVideo.episodeCount >= this.SegmentedVideo.module.options.maxEpisodes ||
                        this.SegmentedVideo.module.options.maxClips) ? (a = this.queue[this.index++], this.index = 0, this.queue = this.played.sort(function(a, b) {
                        return 5 < 10 * Math.random() ? 1 : -1
                    }), this.queue[0] == a && this.queue.push(this.queue.shift())) : a = this.queue[this.index++];
                    (1 == this.SegmentedVideo.episodeCount && 1 == this.index || this.SegmentedVideo.module.options.hdVideo) && a.urlHD && (a = {
                        url: a.urlHD,
                        subtitles: a.subtitles
                    });
                    return a
                };
                a.prototype.createQueue = function(a) {
                    var b = new RegExp(/^VIDEO[0-9]+$/),
                        c = a.getResponseData().creativemacros;
                    this.index = 0;
                    this.queue = Object.keys(c).filter(function(a) {
                        return b.test(a)
                    }).map(function(a) {
                        var b = a.search(/[0-9]+/),
                            f = void 0; - 1 != b && (f = c["SUBTITLES" + a.substr(b)]);
                        return {
                            key: a,
                            url: c[a],
                            urlHD: c[a + "_HD"],
                            subtitles: f
                        }
                    }).sort(function(a, b) {
                        return parseInt(a.key.split(/[0-9]+/)[1]) - parseInt(b.key.split(/[0-9]+/)[1])
                    });
                    this.SegmentedVideo.module.options.random && (this.queue = this.queue.sort(function(a, b) {
                        return 5 < 10 * Math.random() ? 1 : -1
                    }));
                    this.SegmentedVideo.module.options.maxClips && (this.queue = this.queue.slice(0,
                        this.SegmentedVideo.module.options.maxClips));
                    this.SegmentedVideo.episodeCount++;
                    this.played = this.played.concat(this.queue)
                };
                return a
            }(),
            h = function() {
                function a() {
                    void 0 == localStorage.getItem("cpmsvideoslider_paramRanges") && this.reset()
                }
                a.prototype.getRanges = function() {
                    return JSON.parse(localStorage.getItem("cpmsvideoslider_paramRanges"))
                };
                a.prototype.setRanges = function(a) {
                    localStorage.setItem("cpmsvideoslider_paramRanges", JSON.stringify(a.sort()))
                };
                a.prototype.first = function() {
                    return this.getRanges().sort().slice().pop()
                };
                a.prototype.reset = function() {
                    localStorage.setItem("cpmsvideoslider_paramRanges", "[]")
                };
                a.prototype.concatenateRanges = function(a, b) {
                    var c = [];
                    c[0] = a[0] >= b[0] ? a[0] : b[0];
                    c[1] = a[1] <= b[1] ? a[1] : b[1];
                    return c
                };
                a.prototype.concatenateContinuousRanges = function(a) {
                    a = a.slice().sort();
                    for (var b = 0; b < a.length; ++b) a[b + 1] && (this.contains(a[b][0], a[b + 1]) || this.contains(a[b][1], a[b + 1])) && (a.splice(b, 2, this.concatenateRanges(a[b], a[b + 1])), a.sort(), --b);
                    return a
                };
                a.prototype.set = function(a) {
                    var b = this.getRanges();
                    b.push([a,
                        --a
                    ]);
                    this.setRanges(this.concatenateContinuousRanges(b))
                };
                a.prototype.contains = function(a, b) {
                    var c = !1;
                    b && b[0] >= a && b[1] <= a && (c = !0);
                    return c
                };
                a.prototype.get = function(a) {
                    return this.compare(--a)
                };
                a.prototype.compare = function(a) {
                    var b = this.first();
                    return b && b[0] >= a ? b[1] : a
                };
                return a
            }();
        e = function(b) {
            function c(c, f) {
                var l = b.call(this, c, f) || this;
                l.isHidden = !1;
                l.videoReady = !1;
                l.firstDetectViewable = !0;
                l.becameViewable = !1;
                l.renderAttempts = 0;
                l.px_cr = null;
                l.pb_err = null;
                l.playQueue = void 0;
                l.ad = void 0;
                l.spinner =
                    void 0;
                l.spinnerTimeout = void 0;
                l.intermittentAdTimeout = void 0;
                l.isMuted = !0;
                l.clipEnded = !1;
                l.clipBegan = !1;
                l.existingOnScroll = void 0;
                l.titleEl = void 0;
                l.firstResponse = void 0;
                l.lastViewed = new h;
                l.requestParam = void 0;
                l.lastParam = !1;
                l.adFrequency = 1;
                l.userPlayState = "playing";
                l.pauseTarget = void 0;
                l.lastViewableState = void 0;
                l.episodeCount = 0;
                l.title = "";
                l.bgEl = null;
                l.clipCount = 0;
                l.creativemacros = {};
                l.resumeTimer = void 0;
                l.numClipsShown = 0;
                window.getCssByClass = l.getCssByClass;
                void 0 != f.options.adFrequency && (l.adFrequency =
                    f.options.adFrequency);
                f.options && f.options.muted && (l.isMuted = f.options.muted);
                l.defaultRequestKind = "json";
                l.playQueue = new a(l);
                l.api.skinloaded = function(a) {};
                l.api.skip = function() {};
                l.api.setvolume = function(a) {
                    a.volume && l && l.videoObj && l.videoObj.setVolume && l.videoObj.setVolume(a.volume)
                };
                l.api.getduration = function(a) {
                    if (l && l.videoObj && l.videoObj.getDuration) {
                        var b = l.videoObj.getDuration();
                        a.cb && a.cb(function() {}, b)
                    } else a.fail && a.fail()
                };
                l.api.getremainingtime = function(a) {
                    if (l && l.videoObj && l.videoObj.getRemainingTime) {
                        var b =
                            l.videoObj.getRemainingTime();
                        a.cb && a.cb(function() {}, b)
                    } else a.fail && a.fail()
                };
                return l
            }
            q(c, b);
            c.prototype.setVolume = function(a) {
                this.api.setvolume({
                    volume: a
                })
            };
            c.prototype.hideSpinner = function() {
                void 0 != this.spinnerTimeout && (clearTimeout(this.spinnerTimeout), this.spinnerTimeout = void 0);
                void 0 != this.resumeTimer && (clearTimeout(this.resumeTimer), this.resumeTimer = void 0);
                this.hide(this.spinner)
            };
            c.prototype.showSpinner = function() {
                var a = this;
                a.spinnerTimeout = setTimeout(function() {
                    a.show(a.spinner);
                    a.resumeTimer =
                        setTimeout(function() {
                            a.ad.isReady() ? a.ad.close() : a.resume()
                        }, 5E3)
                }, 100)
            };
            c.prototype.setResponse = function(a) {
                this.res = a
            };
            c.prototype.getResponse = function() {
                return this.res
            };
            c.prototype.isViewable = function(a, b) {
                if (!1 === this.module.options.requireViewable) return !0;
                a = a.getBoundingClientRect();
                b && (a.height = b);
                var c = window.innerWidth;
                b = window.innerHeight;
                var f = document.documentElement.clientWidth,
                    l = document.documentElement.clientHeight,
                    h = c;
                c && f && (h = Math.min(c, f));
                null == h && (h = f);
                null == h && (h = document.getElementsByTagName("body")[0].clientWidth);
                (c = b) && l && (c = Math.min(b, l));
                null == c && (c = l);
                null == c && (c = document.getElementsByTagName("body")[0].clientHeight);
                return 0 <= a.top && 0 <= a.left && a.top + .6 * a.height <= c && a.left + .8 * a.width <= h ? !0 : !1
            };
            c.prototype.testResponseValidity = function(a) {
                var c = this;
                b.prototype.testResponseValidity.call(c, function(b) {
                    if (b)
                        if (c.res.renderAd) switch (c.res.getAdTypeAvailable(c.module)) {
                            case "video":
                                b = !0;
                                break;
                            default:
                                b = !1
                        } else b = c.res && c.res.getResponseData ? (b = c.res.getResponseData()) && b.creativemacros && b.creativemacros.HTML5VID_VASTSTRING ?
                            !0 : !1 : !1;
                    a(b)
                })
            };
            c.prototype.showContainer = function() {
                this.isHidden && (this.firstDetectViewable || this.outercontainer.classList.add("cpmsvideoshow"), this.outercontainer.style.height = this.originalOuterContainerHeight + "px", this.outercontainer.style.display = "block", this.isHidden = !1)
            };
            c.prototype.hideContainer = function() {
                var a = this;
                a.isHidden || (a.outercontainer.classList.remove("cpmsvideoshow"), a.outercontainer.classList.add("cpmsvideohide"), a.setTimeout(function() {
                    a.outercontainer.style.display = "none";
                    a.isHidden = !0
                }, 700))
            };
            c.prototype.close = function() {
                this.outercontainer.parentElement.classList.add("cpmsvideoslideroff");
                this.module.options && this.module.options.nonViewableClasses ? (window.onscroll = this.existingOnScroll, this.removeClasses(this.module.options.nonViewableClasses)) : (this.triggerEvent("onclose"), this.playQueue.queue = [], this.ad.adPlayer && this.ad.adPlayer.videoObj && this.ad.adPlayer.videoObj.close(), this.videoObj && this.videoObj.close())
            };
            c.prototype.setMuted = function(a) {
                this.isMuted = a;
                this.videoObj.videoEl() &&
                    (this.videoObj.setMuted(a), this.updateMuteElementCSSClass());
                this.ad.isReady() && this.ad.adPlayer.videoObj.setMuted(a)
            };
            c.prototype.updateMuteElementCSSClass = function() {
                this.muteElement.className = this.videoObj && this.videoObj.isMuted() ? "cpmsvideosoundoff" : "cpmsvideosoundon"
            };
            c.prototype.attemptRenderPixel = function(a) {
                if (this.outercontainer && null != a && "" != a && (0 <= a.indexOf("http://") || 0 <= a.indexOf("https://") || 0 == a.indexOf("//"))) try {
                    var b = document.createElement("img");
                    b.src = a;
                    b.style.position = "absolute";
                    b.style.top = "0px";
                    b.style.left = "0px";
                    b.style.width = "1px";
                    b.style.height = "1px";
                    this.outercontainer.appendChild(b);
                    b.onload = function() {
                        b.style.display = "none";
                        b.style.position = "absolute";
                        b.style.top = "0px";
                        b.style.left = "0px";
                        b.style.width = "1px";
                        b.style.height = "1px"
                    }
                } catch (v) {
                    this.mm.log("Error hitting pixel: " + v)
                }
            };
            c.prototype.isPlayable = function() {
                return 0 == this.playQueue.isEnd() ? this.videoReady = !0 : this.videoReady = !1
            };
            c.prototype.hide = function(a) {
                a && (a.style.display = "none")
            };
            c.prototype.show = function(a,
                b) {
                a && (a.style.display = b ? b : "block")
            };
            c.prototype.playAd = function() {
                clearTimeout(this.intermittentAdTimeout);
                this.videoObj.isPlaying() && this.videoObj.pause();
                this.hide(this.videoObj.videoEl());
                this.hideSpinner();
                this.ad.play()
            };
            c.prototype.clear = function() {
                var a, b = null === (a = this.videoObj) || void 0 === a ? void 0 : a.videoEl();
                if (a = null === b || void 0 === b ? void 0 : b.parentElement) this.module.options && this.module.options.mobile && (this.outercontainer.style.height = this.measureVideoSize().height.toString() + "px"), a.remove()
            };
            c.prototype.restart = function() {
                this.lastParam ? this.playQueue.createQueue(this.firstResponse) : this.playQueue.index = 0;
                this.lastParam && this.module.playPrevious && this.setParam(this.firstResponse.getResponseData().creativemacros[this.module.playPrevious]);
                this.play()
            };
            c.prototype.setCreativemacros = function(a) {
                a.getResponseData().creativemacros && (this.creativemacros = a.creativemacros)
            };
            c.prototype.handleResponse = function(a) {
                var b = this;
                b.setResponse(a);
                b.testResponseValidity(function(c) {
                    c ? (b.setCreativemacros(a),
                        b.playQueue.createQueue(a)) : (b.lastParam = !0, b.lastViewed.reset(), b.responseValid = c)
                })
            };
            c.prototype.fetchNext = function() {
                this.requestParam && this.module.playPrevious && this.mm.zonedata.requests[this.module.request] && this.mm.zonedata.requests[this.module.request].params && this.mm.zonedata.requests[this.module.request].params[this.module.playPrevious] && (this.lastViewed.set(this.requestParam), this.setParam(this.lastViewed.get(--this.requestParam)), this.module.requestInstance.addCallback(this, this.handleResponse.bind(this)))
            };
            c.prototype.play = function() {
                this.hideSpinner();
                0 == this.videoObj.isPlaying() && (0 < this.playQueue.queue.length ? (this.videoObj.resetQuartiles(), this.videoObj.playUrl(this.playQueue.next())) : this.close())
            };
            c.prototype.queueIntermittentAd = function(a) {
                this.intermittentAdTimeout = setTimeout(this.playAd.bind(this), 1E3 * a)
            };
            c.prototype.onVideoClick = function() {
                var a = this;
                a.container.addEventListener("click", function(b) {
                    "VIDEO" == b.target.nodeName && a.videoObj.isPlaying() && (b.stopPropagation(), b.preventDefault(),
                        a.setMuted(!a.isMuted))
                })
            };
            c.prototype.getTitle = function() {
                var a = void 0;
                this.module.options.title ? a = this.module.options.title : this.creativemacros && this.creativemacros.title && (a = this.creativemacros.title);
                return a
            };
            c.prototype.updateTitle = function(a) {
                a && this.titleEl && (this.titleEl.innerText = a)
            };
            c.prototype.repeatVideo = function() {
                this.playElement.style.display = "block";
                this.module.options.repeat || (this.repeatElement.style.display = "none");
                this.videoObj && this.videoObj.isPlaying() ? (this.videoObj.setBegan(!0),
                    this.videoObj.replay()) : this.ad && this.ad.adPlayer && this.ad.adPlayer.videoObj && 0 == this.ad.adPlayer.imaPlayer && (this.ad.adPlayer.videoObj.setBegan(!0), this.ad.adPlayer.videoObj.replay())
            };
            c.prototype.initVideoObj = function(a, b) {
                void 0 === b && (b = !1);
                var c = this;
                c.module.options.titleClass && (c.titleEl = c.createElement("h2", {
                    class: c.module.options.titleClass
                }), c.outercontainer.insertAdjacentElement("beforebegin", c.titleEl));
                ["playElement", "muteElement", "skipElement", "repeatElement"].forEach(function(a) {
                    c[a] =
                        document.createElement("div")
                });
                c.videoObj = new g.default(this.mm);
                c.videoObj.addEventListener("ready", function(a) {
                    c.module.options && c.module.options.volume && c.setVolume(c.module.options.volume);
                    c.onVideoClick();
                    c.ad = new d(c.mm, c);
                    if (!0 === c.module.options.preroll) c.playPreroll();
                    else if (c.isPlayable()) c.play();
                    else throw c.close(), Error("There was no video to play.");
                });
                c.videoObj.addEventListener("start", function() {
                    c.hideSpinner();
                    c.clipBegan = !0;
                    c.clipEnded = !1;
                    c.setMuted(c.isMuted);
                    c.module.options.titleClass &&
                        (c.title = c.getTitle(), c.updateTitle(c.title));
                    c.showContainer();
                    c.muteElement.onclick = function() {
                        c.setMuted(!c.isMuted)
                    };
                    c.outercontainer.insertBefore(c.repeatElement, c.outercontainer.firstChild);
                    c.module.options.repeat || (c.repeatElement.style.display = "none");
                    c.repeatElement.className = "cpmsvideorepeat";
                    c.repeatElement.addEventListener("click", function() {
                        c.repeatVideo()
                    });
                    c.outercontainer.insertBefore(c.muteElement, c.outercontainer.firstChild);
                    c.playElement.className = "cpmsvideopause";
                    c.playElement.onclick =
                        function() {
                            c.videoObj.isPaused() ? (c.videoObj.play(), c.userPlayState = "playing") : (c.videoObj.pause(), c.userPlayState = "paused");
                            c.playElement.className = c.videoObj.isPaused() ? "cpmsvideoplay" : "cpmsvideopause"
                        };
                    c.outercontainer.insertBefore(c.playElement, c.outercontainer.firstChild);
                    c.module.options.skippable && (c.skipElement.className = "cpmsvideoskip", c.skipElement.style.removeProperty("display"), c.outercontainer.insertBefore(c.skipElement, c.outercontainer.firstChild), c.skipElement.onclick = function() {
                        c.videoObj.close()
                    })
                });
                c.videoObj.addEventListener("skippablestatechange", function() {
                    c.skipElement.style.display = c.videoObj.isSkippable() ? "" : "none"
                });
                c.videoObj.addEventListener("error", function() {
                    c.close()
                });
                c.videoObj.addEventListener("complete", function() {
                    c.clipEnded = !0;
                    c.clipBegan = !1;
                    c.clear();
                    c.showSpinner();
                    c.intermittentAdTimeout && clearTimeout(c.intermittentAdTimeout);
                    c.ad.isReady() ? c.ad.play() : 0 == c.playQueue.isEnd() ? c.resume() : c.playQueue.isEnd() && c.module.options.restart ? c.restart() : c.close()
                });
                c.onEvent(window,
                    "orientationchange", c.updateVideoSize.bind(c));
                c.onEvent(window, "resize", c.updateVideoSize.bind(c));
                c.videoObj.initializeForUrl(c.container, c.currentVideoSize.width, c.currentVideoSize.height, {
                    clickPrefix: c.module.options.clickPrefix,
                    muted: c.isMuted,
                    className: c.module.options.videoClass
                })
            };
            c.prototype.measureVideoSize = function() {
                var a = null != this.container && 0 < this.container.clientHeight && 0 < this.container.clientWidth ? this.container : this.outercontainer;
                return {
                    width: a.clientWidth,
                    height: a.clientHeight
                }
            };
            c.prototype.updateVideoSize = function() {
                var a = this;
                a.setTimeout(function() {
                    a.currentVideoSize = {
                        width: a.outercontainer.clientWidth * a.originalVideoWidthRatio,
                        height: a.outercontainer.clientHeight * a.originalVideoHeightRatio
                    };
                    a.videoObj.setSize(a.currentVideoSize.width, a.currentVideoSize.height);
                    a.ad.isReady() && a.ad.adPlayer.videoObj.setSize(a.currentVideoSize.width, a.currentVideoSize.height)
                }, 200)
            };
            c.prototype.attemptRender = function(a) {
                if ("video" == this.res.getAdTypeAvailable(this.module, 2 > this.renderAttempts ?
                        null : {
                            fallback: !0
                        })) this.initVideoObj(this.res.getResponseData().creativemacros.HTML5VID_VASTSTRING);
                else throw Error("The ad type was not video.");
                a && a()
            };
            c.prototype.playPreroll = function() {
                this.ad && this.ad.isReady() ? this.ad.play() : (this.ad.readyCallback = this.ad.play.bind(this.ad), this.ad.invalidCallback = this.resume.bind(this))
            };
            c.prototype.unpause = function(a) {
                this.pauseTarget = void 0;
                this.playElement.classList.replace("cpmsvideoplay", "cpmsvideopause");
                "content" == a && this.videoObj && this.videoObj.isPaused() ?
                    this.videoObj.play() : "ad" == a && this.ad && this.ad.adPlayer && this.ad.adPlayer.videoObj && this.ad.adPlayer.videoObj.isPaused() && this.ad.adPlayer.videoObj.play()
            };
            c.prototype.resume = function() {
                this.module.options.maxclipcount <= this.numClipsShown ? this.close() : (this.numClipsShown++, sessionStorage && sessionStorage.setItem("cpmstar_clipcount", "" + this.numClipsShown), this.ad.getAd(), 0 == this.videoObj.isPlaying() && 0 == this.clipEnded && 1 == this.clipBegan ? (this.show(this.videoObj.videoEl()), this.hideSpinner(), this.unpause("content")) :
                    this.isPlayable() ? this.play() : this.close())
            };
            c.prototype.between = function(a, b, c) {
                return a > b && a < c
            };
            c.prototype.isInView = function(a) {
                a = a.getBoundingClientRect();
                return (this.between(a.top, 0, window.innerHeight || document.documentElement.clientHeight) || this.between(a.bottom, 0, window.innerHeight || document.documentElement.clientHeight)) && (this.between(a.left, 0, window.innerWidth || document.documentElement.clientWidth) || this.between(a.right, 0, window.innerWidth || document.documentElement.clientWidth))
            };
            c.prototype.getElementAttributes =
                function(a) {
                    return a.getAttributeNames().reduce(function(b, c) {
                        b[c] = a.getAttribute(c);
                        return b
                    }, {})
                };
            c.prototype.createElement = function(a, b) {
                var c = document.createElement(a);
                Object.keys(b).forEach(function(a) {
                    c.setAttribute(a, b[a])
                });
                return c
            };
            c.prototype.applyClasses = function(a) {
                t(a).forEach(function(a) {
                    try {
                        document.querySelector(a.key).classList.add(a.value)
                    } catch (v) {
                        console.log(v.toString ? v.toString() : JSON.stringify(v))
                    }
                })
            };
            c.prototype.removeClasses = function(a) {
                t(a).forEach(function(a) {
                    try {
                        document.querySelector(a.key).classList.remove(a.value)
                    } catch (v) {
                        console.log(v.toString ?
                            v.toString() : JSON.stringify(v))
                    }
                })
            };
            c.prototype.hasClasses = function(a) {
                return t(a).reduce(function(a, b) {
                    var c = document.querySelector(b.key);
                    c && (a = a || c.classList.contains(b.value));
                    return a
                }, !1)
            };
            c.prototype.copySizeAndPosition = function(a, b) {
                var c = document.defaultView.getComputedStyle(b, "");
                "top bottom right left position display margin marginTop marginRight marginLeft marginBottom padding paddingRight paddingLeft paddingTop paddingBottom width height maxHeight maxWidth".split(" ").forEach(function(b) {
                    a.style[b] =
                        c[b]
                })
            };
            c.prototype.toggleNonViewableClasses = function(a) {
                var b = this.hasClasses(this.module.options.nonViewableClasses);
                a || 0 != b ? a && b && this.removeClasses(this.module.options.nonViewableClasses) : this.applyClasses(this.module.options.nonViewableClasses)
            };
            c.prototype.toggleAdFrequency = function(a) {
                void 0 != this.module.options.adFrequency && this.module.options.adFrequency < this.module.options.adVisibility || (this.adFrequency = 0 == a ? this.module.options.adVisibility : void 0 != this.module.options.adFrequency ? this.module.options.adFrequency :
                    1)
            };
            c.prototype.pause = function() {
                this.playElement.classList.replace("cpmsvideoplay", "cpmsvideopause");
                this.videoObj && this.videoObj.isPlaying() ? (this.pauseTarget = "content", this.videoObj.pause()) : this.ad && this.ad.adPlayer && this.ad.adPlayer.videoObj && this.ad.adPlayer.videoObj.isPlaying() && (this.pauseTarget = "ad", this.ad.adPlayer.videoObj.pause())
            };
            c.prototype.toggleContent = function() {
                "playing" == this.userPlayState && void 0 == this.pauseTarget ? this.pause() : "playing" == this.userPlayState && void 0 != this.pauseTarget &&
                    this.unpause(this.pauseTarget)
            };
            c.prototype.onNonViewable = function() {
                var a = this,
                    b = a.outercontainer.parentElement;
                if (a.module.options.nonViewableClasses || void 0 != a.module.options.adVisibility || a.module.options.contentVisibility) {
                    var c = a.createElement(b.tagName, {
                        id: "cpmstarvideosliderplaceholder"
                    });
                    a.copySizeAndPosition(c, b);
                    c.style.boxSizing = "content-box";
                    var f = b.parentNode;
                    f.insertBefore(c, b);
                    c.append(f.removeChild(b));
                    a.existingOnScroll = window.onscroll;
                    var h = a.isInView(c);
                    a.lastViewableState = h;
                    b =
                        function() {
                            a.existingOnScroll && a.existingOnScroll();
                            h = a.isInView(c);
                            if (a.lastViewableState != h || 0 == a.becameViewable) a.lastViewableState = h, a.module.options.nonViewableClasses && (a.becameViewable = !0, a.toggleNonViewableClasses(h), a.updateVideoSize.call(a)), void 0 != a.module.options.adVisibility && a.toggleAdFrequency(h), a.module.options.contentVisibility && a.toggleContent()
                        };
                    window.onscroll = b;
                    b()
                }
            };
            c.prototype.setParam = function(a) {
                this.requestParam = parseInt(a.toString());
                this.mm.zonedata.requests[this.module.request].params[this.module.playPrevious] =
                    this.requestParam
            };
            c.prototype.request = function(a, c) {
                if (this.module.options.maxclipcount) {
                    try {
                        var f = sessionStorage.getItem("cpmstar_clipcount");
                        f && (this.numClipsShown = parseInt(f), isNaN(this.numClipsShown) && (this.numClipsShown = 0))
                    } catch (u) {}
                    if (this.numClipsShown >= this.module.options.maxclipcount) {
                        c && c();
                        return
                    }
                }
                if (this.module.options.sessionclose) try {
                    var h = window.sessionStorage.getItem("cpmstar_videoclosed");
                    if (null != h && "" != h && parseInt(h) > (new Date).getTime() - 864E5) {
                        c && c();
                        return
                    }
                } catch (u) {}
                b.prototype.request.call(this,
                    a, c)
            };
            c.prototype.init = function(a, c) {
                function f() {
                    !d.becameViewable && d.isViewable(l, d.currentVideoSize.height) && (d.becameViewable = !0, d.outercontainer.style.overflow = "visible", d.attemptRender(c), d.onNonViewable());
                    d.firstDetectViewable = !1
                }
                var h;
                b.prototype.init.call(this, a, c);
                var d = this;
                d.playQueue.createQueue(a);
                d.firstResponse = a;
                d.creativemacros = a.getResponseData().creativemacros;
                d.module.playPrevious && d.creativemacros && d.creativemacros[d.module.playPrevious] && d.setParam(d.creativemacros[d.module.playPrevious]);
                var l = d.getRenderTarget();
                d.outercontainer = l;
                d.container = d.outercontainer.getElementsByClassName("cpmsvideowrapper")[0];
                null === (h = document.querySelector("#cpmstarvideosliderclose")) || void 0 === h ? void 0 : h.addEventListener("click", function(a) {
                    d.$el.classList.add("cpmsvideoslideroff");
                    if (d.module.options.sessionclose) try {
                        window.sessionStorage.setItem("cpmstar_videoclosed", "" + (new Date).getTime())
                    } catch (da) {}
                    setTimeout(d.close.bind(d), 1E3)
                });
                null == d.container && (d.container = d.outercontainer);
                d.spinner =
                    d.container.querySelector("#cpmstarloadspinner");
                d.currentVideoSize = d.measureVideoSize();
                d.originalVideoWidthRatio = d.currentVideoSize.width / d.outercontainer.clientWidth;
                d.originalVideoHeightRatio = d.currentVideoSize.height / d.outercontainer.clientHeight;
                d.originalOuterContainerHeight = d.outercontainer.clientHeight;
                d.module.options && d.module.options.startHidden && (d.outercontainer.style.overflow = "hidden", d.outercontainer.style.height = "0px", d.isHidden = !0);
                d.module.options.nonViewableClasses ? (d.attemptRender(c),
                    d.onNonViewable()) : (d.onEvent(window, "DOMContentLoaded", f), d.onEvent(window, "load", f), d.onEvent(window, "resize", f), d.onEvent(window, "scroll", f), d.onEvent(window, "orientationchange", f), d.setTimeout(function() {
                    f()
                }, 0), d.setTimeout(function() {
                    f()
                }, 500))
            };
            return c
        }(r.default);
        k.default = e
    },
    "./src/zonemasters/components/siteskin.ts": function(e, k, p) {
        var t = this && this.__extends || function() {
            var e = function(g, b) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b,
                    d) {
                    for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a])
                };
                return e(g, b)
            };
            return function(g, b) {
                function m() {
                    this.constructor = g
                }
                e(g, b);
                g.prototype = null === b ? Object.create(b) : (m.prototype = b.prototype, new m)
            }
        }();
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        var q = p("./src/zonemasters/components/supercomponent.ts");
        e = function(e) {
            function g(b, m) {
                b = e.call(this, b, m) || this;
                b.cpmstar_siteskin_settings = null;
                b.contentOriginalMarginTop = NaN;
                b.adMarginTop = "218px";
                b.lightboxIframe = null;
                b.vidClosed = !1;
                b.popping = !1;
                b.video =
                    null;
                b.videoCloseX = null;
                b.videoPopoutDiv = null;
                return b
            }
            t(g, e);
            g.prototype.init = function(b, m) {
                var d;
                q.default.prototype.init.call(this, b, m);
                var a = this;
                b = this.module.options;
                m = 99999;
                var h = "985px",
                    f = null,
                    c = 1,
                    l = "0px",
                    g = this.getRequestData();
                if (null != b) {
                    m = null !== (d = b.zIndex) && void 0 !== d ? d : 99999;
                    d = this.getFirstSelector(b.cssSelector);
                    h = b.centerWidth ? b.centerWidth : d ? d.clientWidth : "985px";
                    f = g ? g.poolid : null;
                    f = g && g.poolid ? g.poolid : "?";
                    c = b.fixed ? b.fixed : "1";
                    l = this.getTop(!1);
                    var e = b.stickyPadding ? b.stickyPadding :
                        0;
                    var k = b.footerHeight ? b.footerHeight : 0;
                    a.adMarginTop = b.marginTop ? b.marginTop : "218px"
                }
                a.cpmstar_siteskin_settings = {
                    pid: f,
                    centerWidth: h,
                    fixed: c,
                    topPos: l,
                    zIndex: m,
                    stickyPadding: e,
                    footerHeight: k,
                    root: a.module.options.useModuleDiv ? a.module.div : void 0
                };
                d = this.getRenderTarget();
                this.module.adUnitPath && (d.id = this.module.adUnitPath);
                d = a.res.getAdTypeAvailable(a.module);
                switch (d) {
                    case "premium":
                        var u = this.skinTag = document.createElement("div");
                        this.getRenderTarget().appendChild(u);
                        if (a.res.renderAd) {
                            var r =
                                a.res.renderAd;
                            r(a.module, u, a.onAdRendered.bind(a))
                        }
                        break;
                    case "banner":
                        a.res.renderAd && 0 == b.dual ? (r = a.res.renderAd, u = a.createSkinTag(), r(a.module, u, a.onAdRendered.bind(a))) : a.res.renderAd && 1 == b.dual && (r = a.res.renderAd, u = a.createSkinTag(), r(a.module, u, function(b) {
                            r(a.module, u, function(c) {
                                a.onAdRendered.call(a, [b, c])
                            })
                        }));
                        break;
                    case "json":
                        a.res.renderAd && a.res.renderAd(a.module, null);
                        a.onAdRendered();
                        break;
                    default:
                        a.mm.log("Error - invalid adtype: " + d + " for skin component")
                }
            };
            g.prototype.pxToNumber =
                function(b) {
                    b = /([0-9.]+)(px)?/.exec(b);
                    if (null == b || "" == b[1]) throw Error("siteskin.pxToNumber - Error: Pixel input was not formatted correctly.");
                    return parseInt(b[1])
                };
            g.prototype.getFirstSelector = function(b) {
                if (null == b) return null;
                if (Array.isArray(b))
                    for (var m = 0; m < b.length; m++) {
                        var d = document.querySelector(b[m]);
                        if (d && d.style && "none" != d.style.display) return d
                    } else return document.querySelector(b)
            };
            g.prototype.getTop = function(b, m) {
                var d;
                void 0 === b && (b = !0);
                void 0 === m && (m = !1);
                var a = this.module.options,
                    h = "0px";
                a.headerSelector && b ? (b = this.getFirstSelector(a.headerSelector)) ? (h = b.clientHeight + "px", m && (h = Math.max(b.getBoundingClientRect().bottom, 0) + "px")) : h = null !== (d = a.top) && void 0 !== d ? d : "0px" : a.top && (h = a.top);
                return h
            };
            g.prototype.createSkinTag = function() {
                var b, m = this,
                    d = this.module.options,
                    a = this.getTop(!1),
                    h = m.getFirstSelector(d.cssSelector);
                h = d.centerWidth ? d.centerWidth : h ? h.clientWidth : "985px";
                var f = d.responsive ? d.responsive : "",
                    c = null !== (b = d.zIndexHD) && void 0 !== b ? b : 0;
                b = m.skinTag = document.createElement("div");
                var l = m.skinWrapper = b;
                m.mm.isMobile() || !1 !== m.module.options.alwaysclip ? (m.skinWrapper = l = document.createElement("div"), l.style.overflow = "hidden", l.style.left = "0", l.style.top = "0", l.style.height = "1080px", l.style.width = "100%", l.style.position = "fixed", l.style.zIndex = "0", l.style.transform = "translate3d(0,0,0)", b.style.position = "absolute", l.appendChild(b)) : (b.style.position = "fixed", l = m.skinWrapper = b);
                b.style.width = "1920px";
                b.style.height = "1080px";
                b.style.marginLeft = "-960px";
                b.style.left = "50%";
                l.style.setProperty("top",
                    a, d.topImportant ? "important" : "");
                if (d.sticky && !d.headerSelector) a = function() {
                    var a = 0 < window.scrollY ? "0px" : m.getTop(!0, !0);
                    l.style.setProperty("top", a, d.topImportant ? "important" : "")
                }, a(), window.addEventListener("scroll", a);
                else if (d.sticky && d.headerSelector) {
                    var g = function() {
                        var a = m.getTop(!0, !0);
                        l.style.setProperty("top", a, d.topImportant ? "important" : "")
                    };
                    g();
                    window.addEventListener("scroll", g);
                    a = Array.isArray(d.headerSelector) ? d.headerSelector : [d.headerSelector];
                    for (var e = 0; e < a.length; e++) {
                        var k =
                            m.getFirstSelector(a[e]);
                        k && "undefined" != typeof MutationObserver && (new MutationObserver(function() {
                            setTimeout(g, 0)
                        })).observe(k, {
                            attributes: !0,
                            childList: !1,
                            subtree: !1
                        })
                    }
                }
                b.style.transformOrigin = "center top";
                b.parentElement.style.zIndex = c;
                b.style.display = "block";
                1 == d.dual || m.mm.isMobile() || (c = 1, d.noscale || (d.scaleFactor && (c = d.scaleFactor), c *= m.contentScalar(h)), m.scaleEl(b, c));
                this.getRenderTarget().appendChild(l);
                f && m.resizeToContent(m.res.getResponseData ? m.res.getResponseData() : null, d);
                return b
            };
            g.prototype.contentScalar = function(b) {
                var g = this.res.getResponseData ? this.res.getResponseData() : null;
                b = /([0-9]+)(px)?/.exec(b);
                if (null == b || "" == b[1]) throw Error("siteskin.ts - Error: 'centerWidth' was not defined correctly.");
                b = parseInt(b[1]);
                var d = 1056;
                g && g.creativemacros && g.creativemacros.IMAGE1800X1000 && (d = 988);
                return b == document.body.clientWidth ? 1 : b / d - .001
            };
            g.prototype.scaleEl = function(b, g) {
                b.style.transform = "scale(" + g + ")";
                this.pushdown(g)
            };
            g.prototype.numberToPx = function(b) {
                return b.toString() +
                    "px"
            };
            g.prototype.pushdown = function(b) {
                var g, d = this.module.options,
                    a = null !== (g = this.getFirstSelector(d.cssSelector ? d.cssSelector : "body")) && void 0 !== g ? g : document.body;
                a != document.body && (this.contentOriginalMarginTop = isNaN(this.contentOriginalMarginTop) ? parseInt(getComputedStyle(a).marginTop) : this.contentOriginalMarginTop, isNaN(this.contentOriginalMarginTop) && (this.contentOriginalMarginTop = 0), b = Math.ceil(this.pxToNumber(this.adMarginTop) * b) - 2, 0 != b && d.transition && (a.style.transition = "0.7s ease-in-out",
                    setTimeout(function() {
                        a.style.removeProperty("transition")
                    }, 1E3)), a.style.marginTop = this.numberToPx(this.contentOriginalMarginTop + b))
            };
            g.prototype.checkVisible = function(b) {
                b = b.getBoundingClientRect();
                return 0 <= b.top && 0 <= b.left && b.bottom <= (window.innerHeight || document.documentElement.clientHeight) && b.right <= (window.innerWidth || document.documentElement.clientWidth)
            };
            g.prototype.popOut = function() {
                var b = this;
                b.popping = !0;
                setTimeout(function() {
                    b.popping = !1
                }, 500);
                b.mm.log("clear interval popOut()");
                clearInterval(b.timer);
                b.video.querySelector("#CPMStarVideoCounter").innerHTML = "";
                b.mm.log("watch me pop out");
                var g = b.video;
                if (b.module.options.loopFor) {
                    var d = document.querySelector("#CPMStarSkinVideoTag"),
                        a = parseInt(b.module.options.loopFor);
                    parseInt(document.querySelector("#videoIterations").innerHTML) >= a && d.play()
                }
                d = .95 * window.innerHeight;
                a = .95 * window.innerWidth;
                var h = a / -2,
                    f = (window.innerHeight - .95 * window.innerHeight) / 2;
                b.module.options.gamestream && (a = .75 * window.innerWidth, f = (window.innerHeight - d) / 2, d = .5625 * a, h = a / -2,
                    g = document.createElement("div"), g.style.backgroundColor = "rgba(0,0,0,0.75)", g.innerHTML = "<div style='position:absolute; top:30%; width:100%; z-index:-1'><div style='margin:0 auto; font-size:16px; text-align:center'>Loading Game<br/>Please Wait</div></div>", a = document.createElement("div"), a.style.cssText = "position: absolute; border: 1px; background-color: #dd0000; opacity: .8;font-family: arial; color: white; position: absolute; z-index: 9999999999; top: 0px; right: 0px; font-size: 20px; cursor: pointer;",
                    a.innerHTML = "&nbsp;x&nbsp;", b.onEvent(a, "click", b.closeCPMStarVideo.bind(b)), g.appendChild(a), null == b.lightboxIframe && (b.lightboxIframe = document.createElement("iframe"), b.lightboxIframe.src = "https://gamestream.bioniclogic.com"), a = .75 * window.innerWidth, f = (window.innerHeight - d) / 2, d = .5625 * a, h = a / -2, b.lightboxIframe.width = "" + a, b.lightboxIframe.height = "" + d, b.lightboxIframe.scrolling = "no", b.lightboxIframe.style.visibility = "hidden", setTimeout(function() {
                        b.lightboxIframe.style.visibility = "visible"
                    }, 1200),
                    g.appendChild(b.lightboxIframe));
                g.style.height = d + "px";
                g.style.width = a + "px";
                g.style.marginLeft = h + "px";
                g.style.left = "50%";
                g.style.top = f + "px";
                g.style.position = "fixed";
                if (d = b.videoCloseX) d.style.display = "block", d.style.right = "10px", d.style.fontSize = "20px";
                document.body.style.overflowY = "hidden";
                document.body.appendChild(b.videoPopoutDiv);
                b.videoPopoutDiv && g && (g.parentNode && g.parentNode.removeChild(g), b.videoPopoutDiv.appendChild(g))
            };
            g.prototype.popIn = function() {
                var b, g, d = this.res.getResponseData ? this.res.getResponseData() :
                    null,
                    a = this.module.options,
                    h = null !== (b = parseInt(a.marginTop)) && void 0 !== b ? b : 255;
                a.videoHeight && (h = parseInt(a.videoHeight));
                if (!this.popping) {
                    this.mm.log("watch me pop in");
                    b = this.video;
                    a = 1.78 * h;
                    b.style.height = h + "px";
                    b.style.width = a + "px";
                    b.style.marginLeft = a / -2 + "px";
                    b.style.position = "absolute";
                    b.style.top = "0";
                    b.style.marginLeft = 1.78 * h / -2 + "px";
                    b.style.left = null !== (g = d.creativemacros.VIDEOLEFT) && void 0 !== g ? g : this.module.options.videoLeft ? this.module.options.videoLeft : "50%";
                    if (g = this.videoCloseX) g.style.display =
                        "none";
                    this.pop();
                    document.body.style.overflowY && document.body.style.removeProperty("overflow-y");
                    if (this.videoPopoutDiv && b && b.parentNode == this.videoPopoutDiv) {
                        for (; this.videoPopoutDiv.firstChild;) this.videoPopoutDiv.removeChild(this.videoPopoutDiv.firstChild);
                        this.skinTag && this.skinTag.appendChild(b)
                    }
                    this.videoPopoutDiv && this.videoPopoutDiv.parentNode == document.body && document.body.removeChild(this.videoPopoutDiv)
                }
            };
            g.prototype.pop = function() {
                var b, g, d = this.res.getResponseData ? this.res.getResponseData() :
                    null,
                    a = this.video;
                if (a) {
                    var h = this.module.options,
                        f = h.pop,
                        c = h.popHidden,
                        l = h.cssSelector;
                    if (!(parseInt(a.style.height) > parseInt(document.querySelector(l).style.marginTop) || !f && !c)) {
                        f = null !== (b = parseInt(h.marginTop)) && void 0 !== b ? b : 255;
                        h.videoHeight && (f = parseInt(h.videoHeight));
                        if (window.scrollY > f && !this.vidClosed) {
                            this.mm.log("pop: Video no longer visible");
                            c && (a.style.visibility = "hidden");
                            a.style.position = "fixed";
                            b = this.module.options.railVideoBottom ? String(parseInt(this.module.options.railVideoBottom)) :
                                "10";
                            b += "px";
                            var e = this.module.options.railVideoRight ? String(parseInt(this.module.options.railVideoRight)) : String(-1 * (-1 * e + k));
                            e += "px";
                            a.style.bottom = b;
                            a.style.top = "";
                            parseInt(document.querySelector(l).clientWidth);
                            var k;
                            a.style.right = e;
                            a.style.removeProperty("left");
                            a.style.removeProperty("marginLeft");
                            if (a = this.videoCloseX) a.style.display = "block", a.style.right = "5px"
                        } else if (this.mm.log("pop: Video visible again"), c && (a.style.visibility = "visible"), a.style.position = "absolute", a.style.removeProperty("bottom"),
                            a.style.top = "0px", a.style.removeProperty("right"), a.style.marginLeft = 1.78 * f / -2 + "px", a.style.left = null !== (g = d.creativemacros.VIDEOLEFT) && void 0 !== g ? g : this.module.options.videoLeft ? this.module.options.videoLeft : "50%", a = this.videoCloseX) a.style.display = "none";
                        document.body.style.overflowY && document.body.style.removeProperty("overflow-y")
                    }
                }
            };
            g.prototype.vidmousein = function() {
                var b = this,
                    g = b.video.querySelector("#CPMStarVideoCounter");
                if ("3" != g.innerHTML && "2" != g.innerHTML && "1" != g.innerHTML && !b.popping) {
                    clearInterval(b.timer);
                    g.innerHTML = "3";
                    var d = 3;
                    b.timer = setInterval(function() {
                        d--;
                        0 >= d ? b.popOut() : g.innerHTML = "" + d
                    }, 1E3)
                }
            };
            g.prototype.vidmouseout = function() {
                clearInterval(this.timer);
                this.video.querySelector("#CPMStarVideoCounter").innerHTML = "";
                this.module.options.gamestream || this.popIn()
            };
            g.prototype.closeCPMStarVideo = function() {
                this.vidClosed = !0;
                this.vidmouseout();
                clearInterval(this.timer);
                this.video.querySelector("#CPMStarVideoCounter").innerHTML = "";
                this.popIn()
            };
            g.prototype.getOrientation = function() {
                var b;
                if (window.matchMedia("(orientation: portrait)").matches) return "portrait";
                if (window.matchMedia("(orientation: landscape)").matches) return "landscape";
                var g = null === (b = window.screen) || void 0 === b ? void 0 : b.orientation.angle;
                if (0 === g || 180 === g) return "portrait";
                if (90 === g || 270 === g) return "landscape"
            };
            g.prototype.onAdRendered = function(b) {
                var g, d, a = this,
                    h = this.module.options,
                    f = a.res.getResponseData ? a.res.getResponseData() : null,
                    c = this.getFirstSelector(h.cssSelector),
                    l = null !== (g = h.centerWidth) && void 0 !== g ? g : c ? c.clientWidth : "985px";
                c = a.res.getAdTypeAvailable(a.module);
                g = null !== (d = h.responsive) &&
                    void 0 !== d ? d : "";
                if ("premium" != c) {
                    if ("banner" == c && void 0 != h.dual && void 0 != b) {
                        if (1 != h.dual) throw Error("siteskin.onAdRendered: The module property 'options.dual' is invalid. [ true, false ]");
                        if (void 0 == b) throw Error("siteskin.onAdRendered: The 'ads' input is undefined.");
                        d = (d = this.getFirstSelector(h.cssSelector)) ? d.getBoundingClientRect().left : 0;
                        c = a.pxToNumber(window.getComputedStyle(b[0]).getPropertyValue("width"));
                        b[0].style.marginLeft = a.numberToPx((1800 - document.body.clientWidth) / 2 + d - c);
                        b[1].style.marginLeft =
                            a.numberToPx(l)
                    } else if ("json" == c && f.click && f.creativemacros && (f.creativemacros.IMAGE1800X1000 || f.creativemacros.IMAGE1920X1080 || f.creativemacros.IMAGEURL || f.creativemacros.HTMLURL)) {
                        (function(b, c) {
                            var d, g, l, e;
                            b = c.ownerDocument ? c.ownerDocument : document;
                            var m = b.createElement("iframe");
                            m.style.borderWidth = "0";
                            m.scrolling = "no";
                            m.marginwidth = 0;
                            m.marginheight = 0;
                            m.topmargin = 0;
                            m.leftmargin = 0;
                            m.allowtransparency = !0;
                            m.setAttribute("marginwidth", "0");
                            m.setAttribute("marginheight", "0");
                            m.setAttribute("topmargin",
                                "0");
                            m.setAttribute("leftmargin", "0");
                            m.setAttribute("allowtransparency", "true");
                            "1920" == a.res.getResponseData().width ? (m.width = "1920", m.height = "1080") : (m.width = "1800", m.height = "1000");
                            c.appendChild(m);
                            c = "";
                            c = f.code ? "<html><head></head><body>" + f.code + "</body></html>" : "<html><head></head><body><a target='_blank' href='" + f.click + "'><img src='" + (f.creativemacros.IMAGE1920X1080 ? f.creativemacros.IMAGE1920X1080 : f.creativemacros.IMAGE1800X1000 ? f.creativemacros.IMAGE1800X1000 : f.creativemacros.IMAGEURL) + "'></a></body></html>";
                            m = m.contentWindow.document;
                            m.write(c);
                            m.close();
                            h.background && (c = h.background, "auto" == h.background && f.creativemacros.BACKGROUNDCOLOR ? c = f.creativemacros.BACKGROUNDCOLOR : h.background && (c = "black"), document.body.style.background = c);
                            f.creativemacros.VIDEOURL && (c = a.video = b.createElement("div"), h.top && parseInt(h.top), m = null !== (d = h.expand || f.creativemacros.EXPAND) && void 0 !== d ? d : !1, h.zIndex && parseInt(h.zIndex), a.videoPopoutDiv = b.createElement("div"), d = null !== (g = parseInt(h.marginTop)) && void 0 !== g ? g : 255, h.videoHeight &&
                                (d = parseInt(h.videoHeight)), a.videoPopoutDiv.id = "CPMStarSkinVideoLocation", a.videoPopoutDiv.style.top = "0", a.videoPopoutDiv.style.left = "0", a.videoPopoutDiv.style.zIndex = "2147483647", a.videoPopoutDiv.style.backgroundColor = "rgba(0,0,0,0)", a.videoPopoutDiv.style.position = "fixed", a.videoPopoutDiv.style.width = "100vw", a.videoPopoutDiv.style.height = "100vh", a.videoPopoutDiv.style.backgroundColor = "rgba(0,0,0,0.6)", c.style.zIndex = "2147483647", c.style.position = "absolute", a.mm.isMobile() || (a.onEvent(window, "resize",
                                    a.pop.bind(a)), a.onEvent(window, "scroll", a.pop.bind(a)), m && (a.onEvent(c, "mouseover", a.vidmousein.bind(a)), a.onEvent(c, "mouseleave", a.vidmouseout.bind(a))), c.style.marginLeft = 1.78 * d / -2 + "px", c.style.left = "50%", c.style.height = "" + d + "px", c.style.width = "" + 1.78 * d + "px"), c.style.marginLeft = 1.78 * d / -2 + "px", c.style.left = null !== (l = f.creativemacros.VIDEOLEFT) && void 0 !== l ? l : a.module.options.videoLeft ? a.module.options.videoLeft : "50%", c.style.height = "" + d + "px", c.style.width = "" + 1.78 * d + "px", c.id = "CPMStarSkinVideo", c.style.top =
                                "0px", a.videoCloseX = document.createElement("div"), a.videoCloseX.id = "videoCloseX", a.videoCloseX.style.cssText = "position: absolute; border: 1px; background-color: grey; opacity: .8; display: none;font-family: arial; color: white; position: absolute; z-index: 9999999999; top: 5px; right: 5px; border-radius: 10px; font-size: 15px; cursor: pointer;", a.videoCloseX.innerHTML = "&nbsp;x&nbsp;", a.onEvent(a.videoCloseX, "click", a.closeCPMStarVideo.bind(a)), c.innerHTML = "\n                    \n                    \n                    <A href=" +
                                f.click + ' target="_blank" style="border:0">\n                                        \n                        <style>\n                            #CPMStarSkinVideo {\n                                -moz-transition: height .4s ease-in-out;\n                                -webkit-transition: height .4s ease-in-out;\n                                -moz-transition: height .4s ease-in-out;\n                                -o-transition: height .4s ease-in-out;\n                                transition: height .4s ease-in-out;\n                            }\n                        </style>\n                      \n                            \n                             <VIDEO id=\'CPMStarSkinVideoTag\' autoplay muted\n                            style=\'width: 100%; height: 100%; position: absolute\'>\n                            <SOURCE type="video/mp4" src="' +
                                f.creativemacros.VIDEOURL + "\">\n                            \n                            </VIDEO>\n                            <div id='CPMStarVideoCounter' style='position: absolute;\n                            opacity: .8;\n                            font-family: arial;\n                            color: white;\n                            position: absolute;\n                            z-index: 99999999999999999999999;\n                            font-size: 100px;\n                            margin-left: -25px; \n                            // top: 50%;\n                            bottom: 30%;\n                            left: 50%;'\n                            ></div>         \n                            <span style='display:none' id='videoIterations'>1</span>                                          \n                    </A>\n                    ",
                                c.appendChild(a.videoCloseX), (g = a.skinTag) && g.appendChild(c));
                            if (a.mm.isMobile() && h.mobileSkinSelector && (f.creativemacros.MOBILEIMAGEURL1080X1920 || f.creativemacros.MOBILEIMAGEURL1920X1080)) {
                                var n = h.portraitonly ? h.portraitonly : !1;
                                l = "";
                                f.creativemacros.MOBILEIMAGEURL1080X1920 && f.creativemacros.MOBILEIMAGEURL1920X1080 ? "portrait" == a.getOrientation() ? l = f.creativemacros.MOBILEIMAGEURL1080X1920 : "landscape" == a.getOrientation() && (l = f.creativemacros.MOBILEIMAGEURL1920X1080) : f.creativemacros.MOBILEIMAGEURL1080X1920 &&
                                    (n = !0, l = f.creativemacros.MOBILEIMAGEURL1080X1920);
                                g = document.createElement("div");
                                g.id = "uniqueCPMStarMobileSiteskinDiv";
                                g.style.display = window.innerWidth > (null !== (e = a.module.options.mobileskinbreakpoint) && void 0 !== e ? e : 992) ? "none" : "block";
                                e = h.ignoreMobileTop ? 0 : parseInt(h.top);
                                g.innerHTML = "\n                        <style>\n                        \n                        \n                            #uniqueCPMStarMobileSiteskinDiv .topadbar {\n                        \n                                height : 20px;\n                                margin-top : 10px;\n                                padding : 2px;\n                                background-color : black;\n                                margin-left : calc(50% - 50vw);\n                                margin-right : calc(50% - 50vw);\n                                text-align : center;\n                                font-size : 10pt;\n                            }\n                            #uniqueCPMStarMobileSiteskinDiv .e-with-fixed-bg {\n                            \n                            height: 178vw;\n                            width: 100vw;\n                            margin-left: calc(50% - 50vw);\n                            margin-right: calc(50% - 50vw);\n                            /* Important */\n                            position: relative;\n                            }\n\n                            @media (orientation: landscape) {\n                                #uniqueCPMStarMobileSiteskinDiv .e-with-fixed-bg {\n                                    height: 100vh;\n                                    width:100vw;\n                                }\n                            }\n                            \n                            @media (orientation: portrait) {\n                                #uniqueCPMStarMobileSiteskinDiv .e-with-fixed-bg {\n                                    height: 178vw;\n                                    width: 100vw;\n                                }\n                            } \n\n                            #uniqueCPMStarMobileSiteskinDiv .bg-wrap {\n                                clip: rect(0, auto, auto, 0);\n                                position: absolute;\n                                top: 0;\n                                left: 0;\n                                width: 100%;\n                                height: 100%;\n                            }\n                            \n                            #uniqueCPMStarMobileSiteskinDiv #mobileskindiv {\n                                position: fixed;\n                                display: block;\n                                top: 0;\n                                left: 0;\n                                width: 100%;\n                                height: 100%;\n                                background-size: contain;\n                                background-repeat: no-repeat;\n                                background-color: black;\n                                background-position: center " +
                                    e + "px;\n                                transform: translateZ(0);\n                                will-change: transform;\n                            }\n\n                            #uniqueCPMStarMobileSiteskinDiv .bottomadbar {\n                                height: 20px;\n                                padding: 2px;\n                                margin-top: 0;\n                                background-color: black;\n                                margin-left: calc(50% - 50vw);\n                                margin-right: calc(50% - 50vw);\n                                text-align: center;\n                                font-size: 10pt;\n                                margin-bottom: 10px;\n                            }\n                          \n                            \n                            \n                        </style>\n                        <div class='topadbar'>ADVERTISEMENT</div>\n                        <a target='_blank' href='" +
                                    f.click + '\'>\n                        <div class="e-with-fixed-bg">\n                          <div class="bg-wrap" style="">\n                             <div id="mobileskindiv" style="background-image: url(\'' + l + "')\"></div>\n                          </div>\n                        </div>\n                        </a>\n                        <div class='bottomadbar'>\u21e9 Scroll for more \u21e9</div>\n                        ";
                                window.addEventListener("orientationchange", function() {
                                    setTimeout(function() {
                                        var b,
                                            c = document.getElementById("uniqueCPMStarMobileSiteskinDiv");
                                        c && (c.style.display = window.innerWidth > (null !== (b = a.module.options.mobileskinbreakpoint) && void 0 !== b ? b : 992) ? "none" : "block", b = "", h.headerSelector && (a.skinWrapper.style.top = a.getTop()), "portrait" === a.getOrientation() ? b = f.creativemacros.MOBILEIMAGEURL1080X1920 : "landscape" === a.getOrientation() && (n ? c.style.display = "none" : b = f.creativemacros.MOBILEIMAGEURL1920X1080), c.style.backgroundImage = "url('" + b + "')")
                                    }, 300)
                                }, !1);
                                e = h.mobileSkinSelector.pick ? parseInt(h.mobileSkinSelector.pick) :
                                    0;
                                if ((e = document.querySelectorAll(h.mobileSkinSelector.find)[e]) && e.parentNode) switch (h.mobileSkinSelector.kind) {
                                    case "swaphide":
                                        e.parentNode.insertBefore(g, e);
                                        e.style.display = "none";
                                        break;
                                    case "swap":
                                        e.parentNode.insertBefore(g, e);
                                        e.parentNode.removeChild(e);
                                        break;
                                    case "replace":
                                        for (; e.firstChild;) e.removeChild(e.firstChild);
                                    case "last":
                                    case "into":
                                        e.appendChild(g);
                                        break;
                                    case "first":
                                        e.insertBefore(g, e.firstChild);
                                        break;
                                    case "before":
                                        e.parentNode.insertBefore(g, e);
                                        break;
                                    case "after":
                                        e.parentNode.insertBefore(g,
                                            e.nextSibling)
                                }
                            }
                        })(this.module, this.createSkinTag());
                        a.mm.isMobile() && 1024 > window.innerWidth && (756 < window.innerHeight ? a.scaleEl(a.skinTag, .78) : a.scaleEl(a.skinTag, .7));
                        h.contentColor && (b = a.getFirstSelector(h.cssSelector), b.style.backgroundColor = h.contentColor, b.style.position = "relative");
                        a.triggerEvent("initHD");
                        f.creativemacros.ROADBLOCK && a.triggerEvent("roadblock", {
                            roadblock: f.creativemacros.ROADBLOCK
                        });
                        if (!a.mm.isMobile() && f.creativemacros.VIDEOURL) {
                            b = document.querySelector("#CPMStarSkinVideoTag");
                            if (h.loopFor) {
                                var e = parseInt(h.loopFor);
                                b.addEventListener("ended", function() {
                                    var a = parseInt(document.querySelector("#videoIterations").innerHTML);
                                    a < e && (this.currentTime = 0, this.play(), a++, document.querySelector("#videoIterations").innerHTML = "" + a)
                                }, !1)
                            } else b.loop = !0;
                            a.pop()
                        }
                        a.mm.api({
                            kind: "adcmd",
                            module: "segmentedvideo",
                            command: "skinloaded",
                            data: {
                                imageurl: f.creativemacros.IMAGEURL,
                                clickurl: f.click
                            }
                        })
                    } else if ("json" == c && null != f.creativemacros) {
                        if (!a.cpmstar_siteskin_settings.pid) return;
                        window.cpmstar_siteskin.init(a.cpmstar_siteskin_settings,
                            f);
                        a.triggerEvent("initSD");
                        h.top970X90 && f.click && f.creativemacros && f.creativemacros.IMAGE970X90 ? (b = parseInt(h.centerWidth.replace("px", "")), d = Math.round(b / 970 * 90), b = "<a target='_blank' href='" + f.click + "'><div style='width:" + b + "px;height:" + d + "px;margin:0 auto;background-size:cover;background-image:url(" + f.creativemacros.IMAGE970X90 + ")' ></div></a>", this.module.div.innerHTML = b) : h.top970X250 && f.click && f.creativemacros && f.creativemacros.IMAGE970X250 && (b = parseInt(h.centerWidth.replace("px", "")), d = Math.round(b /
                            970 * 250), b = "<a target='_blank' href='" + f.click + "'><div style='width:" + b + "px;height:" + d + "px;margin:0 auto;background-size:cover;background-image:url(" + f.creativemacros.IMAGE970X250 + ")' ></div></a>", this.module.div.innerHTML = b)
                    }
                    if ("content" == g || "true" == g) {
                        var k = function() {
                            var b = this.getFirstSelector(h.cssSelector);
                            l = b ? b.clientWidth : 985;
                            a.scaleEl(a.skinTag, a.contentScalar(l))
                        }.bind(a);
                        a.setTimeout(k, 101);
                        window.addEventListener("resize", function() {
                            a.setTimeout(k, 101)
                        })
                    } else "window" == g && (window.addEventListener("resize",
                        function() {
                            a.resizeToContent(f, h)
                        }), a.setTimeout(function() {
                        a.resizeToContent(f, h)
                    }.bind(a), 101))
                }
            };
            g.prototype.resizeToContent = function(b, g) {
                if (document.querySelector(g.cssSelector) && (b.creativemacros.IMAGE1800X1000 || b.creativemacros.IMAGE1920X1080 || b.creativemacros.IMAGEURL || b.code)) {
                    var d = g.maxCenterWidth ? g.maxCenterWidth : 1600,
                        a = 1056;
                    b.creativemacros.IMAGE1800X1000 && (a = 988);
                    parseInt(this.skinTag.style.transform.replace(/\(|\)|scale/g, "").split(",")[0]);
                    var h = this.skinTag.clientWidth < window.innerWidth ?
                        (window.innerWidth - this.skinTag.clientWidth) / window.innerWidth + 1 : 1;
                    var f = 1;
                    g.scaleFactor ? f = g.scaleFactor : g.centerWidth && (f = parseInt(g.centerWidth) / 988);
                    h *= f;
                    h >= d / a && (h = d / a);
                    a = g.cssSelector ? g.cssSelector : "body";
                    this.scaleEl(this.skinTag, h);
                    f = 1056 * h;
                    1E3 >= window.innerWidth || (f = b.creativemacros.IMAGE1800X1000 ? d < 988 * h ? d : 988 * h : d < 1056 * h ? d : 1060 * h, document.querySelector(a));
                    d = g.centerWidth ? parseInt(g.centerWidth) : 985;
                    g.contentPaddingLeft || g.contentPaddingRight ? (document.querySelector(a).style.paddingLeft =
                        parseInt(g.contentPaddingRight) + "px", document.querySelector(a).style.paddingRight = parseInt(g.contentPaddingRight) + "px") : (document.querySelector(a).style.paddingLeft = "0px", document.querySelector(a).style.paddingRight = "0px");
                    document.querySelector(a).style.maxWidth = Math.max(d, f) + "px";
                    document.querySelector(a).style.margin = g.marginTop ? g.marginTop + " auto auto" : "0 auto";
                    "true" == g.fillCenterAlways && (b.creativemacros.IMAGE1920X1080 || b.creativemacros.IMAGEURL) && 1056 * h > parseInt(document.querySelector(a).clientWidth) &&
                        (document.querySelector(a).style.width = f + "px");
                    this.mm.isMobile() && 1024 > window.innerWidth && (756 < window.innerHeight ? this.scaleEl(this.skinTag, .78) : this.scaleEl(this.skinTag, .7))
                }
            };
            g.prototype.testResponseValidity = function(b) {
                var g = this;
                e.prototype.testResponseValidity.call(this, function(d) {
                    var a = null;
                    d = d && null != g.res;
                    !g.module.options.mobileskin && g.mm.isMobile() && (g.module.options.mobileSkinSelector || (d = !1));
                    if (d) {
                        var h = g.res.getAdTypeAvailable(g.module);
                        !g.res.renderAd || "banner" != h && "premium" != h ?
                            g.res.getResponseData && (a = g.res.getResponseData()) && null != a.creativemacros && (a.code && "string" === typeof a.code && 0 < a.code.length ? d = !0 : a.creativemacros.IMAGE1800X1000 ? d = !0 : a.creativemacros.IMAGE1920X1080 ? d = !0 : a.creativemacros.IMAGEURL ? d = !0 : (h = a.creativemacros.HTMLRIGHTURL || a.creativemacros.IMAGERIGHTURL || a.creativemacros.FLASHRIGHTURL, (a.creativemacros.HTMLLEFTURL || a.creativemacros.IMAGELEFTURL || a.creativemacros.FLASHLEFTURL) && h || (d = !1))) : d = !0
                    }
                    b(d)
                })
            };
            return g
        }(q.default);
        k.default = e
    },
    "./src/zonemasters/components/supercomponent.ts": function(e,
        k, p) {
        var t = this && this.__extends || function() {
            var b = function(d, a) {
                b = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, b) {
                    a.__proto__ = b
                } || function(a, b) {
                    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
                };
                return b(d, a)
            };
            return function(d, a) {
                function h() {
                    this.constructor = d
                }
                b(d, a);
                d.prototype = null === a ? Object.create(a) : (h.prototype = a.prototype, new h)
            }
        }();
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        var q = p("./src/zonemasters/utils.ts"),
            r = p("./src/zonemasters/requests/superrequest.ts"),
            g =
            0,
            b = !1;
        e = function(e) {
            function d(a, b) {
                var f, c, h = e.call(this, b) || this;
                h.mm = a;
                h.module = b;
                h.res = null;
                h.depCount = 1;
                h.depLoaded = 0;
                h.responseValid = null;
                h.lastRefreshed = (new Date).getTime();
                h.refreshIndex = -1;
                h.pickResult = null;
                h.halt = !1;
                h.api = {
                    hide: function() {
                        this.module.div.style.display = "none"
                    },
                    show: function() {
                        this.module.div.style.display = "block"
                    },
                    refresh: function() {
                        if (!this.module.options.norefresh && !this.halt) {
                            var a = (new Date).getTime();
                            this.module.options.minrefreshrate && a - this.lastRefreshed < this.module.options.minrefreshrate ?
                                this.mm.log("module: " + this.module.info.name + " cant refresh, refreshed " + Math.round((a - this.lastRefreshed) / 1E3) + " secs ago.") : (this.lastRefreshed = (new Date).getTime(), this.request(function(a) {
                                    a && a()
                                }))
                        }
                    },
                    close: function() {
                        this.close ? this.close() : (this.module.div.style.display = "none", this.module.div.innerHTML = "", this.triggerEvent("onclose"))
                    },
                    css: function(a) {
                        null != a.data && this.restyleCSS(a.data);
                        null != a.cb && a.cb(this.module.css)
                    }
                };
                h.DEFAULTREFRESHRATE = 14E4;
                h.DEFAULTMINSLICE = 1E4;
                h.DEFAULTMINSLICECPMPERCENT =
                    .85;
                h.DEFAULTSLICEMULTI = 10;
                h.DEFAULTSLICETARGET = -1;
                h.TIMESLICEGEOSBLOCKED = [{
                    countryCode: "US",
                    region: "California"
                }, {
                    countryCode: "US",
                    region: "New York"
                }, {
                    countryCode: "NL"
                }];
                h.nextSliceTimer = null;
                null == h.module.options && (h.module.options = {});
                h.rnd = Math.round(999999 * Math.random());
                h.defaultRequestKind = "banner";
                h.events = [];
                if (a = b.events) {
                    b = Object.keys(a);
                    for (var d = 0; d < b.length; d++) {
                        var g = h.mm.eventCallback(a[b[d]]);
                        h.addEventListener(b[d], g)
                    }
                }
                h.css = null !== (f = h.module.css) && void 0 !== f ? f : null;
                h.globalCss =
                    null !== (c = h.module.globalCss) && void 0 !== c ? c : null;
                return h
            }
            t(d, e);
            d.prototype.findEvent = function(a) {
                for (var b = 0; b < this.events.length; b++)
                    if (this.events[b].name === a) return this.events[b];
                return null
            };
            d.prototype.triggerEvent = function(a, b) {
                var f = this,
                    c = this.findEvent(a);
                if (c && c.callbacks)
                    for (var h = 0; h < c.callbacks.length; h++) c.callbacks[h].call(b, arguments);
                "onclose" == a && f.setTimeout(function() {
                    f.destroy()
                }, d.COMPONENT_DESTROY_TIMER)
            };
            d.prototype.addEventListener = function(a, b) {
                var f = this.findEvent(a);
                f && f.callbacks ? f.callbacks.push(b) : (a = {
                    name: a,
                    callbacks: []
                }, this.events.push(a), a.callbacks.push(b))
            };
            d.prototype.removeEventListener = function(a, b) {
                (a = this.findEvent(a)) && a.callbacks && (b = a.callbacks.indexOf(b), a.callbacks.splice(b, 1))
            };
            d.prototype.adcmd = function(a) {
                this.api[a.command].bind(this)(a)
            };
            d.prototype.getRequestData = function() {
                var a = this.module.request;
                "string" === typeof a && (a = this.mm.zonedata.requests[this.module.request]);
                return a
            };
            d.prototype.getRequest = function() {
                var a = this.module.requestInstance,
                    b = this.module.request;
                "string" === typeof this.module.request && (a = this.mm.requestInstances[this.module.request], b = this.mm.zonedata.requests[b]);
                if (null != a) return a;
                if (b && null == a) {
                    a = b.kind ? b.kind : this.defaultRequestKind;
                    if (null == a) return null;
                    a = this.mm.requestTypes[a];
                    if (null == a) return null;
                    a = new a(this.mm);
                    this.module.requestInstance = a;
                    "string" === typeof this.module.request && (this.mm.requestInstances[this.module.request] = a);
                    a.init(b);
                    return a
                }
            };
            d.prototype.create = function() {
                this.getRequestData();
                if (null ==
                    this.module.divid)
                    if (this.module.adUnitPath) this.module.divid = this.module.adUnitPath;
                    else {
                        var a = Math.floor(10 + 26 * Math.random()).toString(36) + Math.floor(99999999 * Math.random()).toString(36);
                        this.module.divid = a
                    }
                window[this.module.divid] = this.module
            };
            d.prototype.testResponseValidity = function(a) {
                var b = !1;
                if (null != this.res && "object" === typeof this.res) {
                    b = !0;
                    null == this.res.getAdTypeAvailable && (b = !1);
                    var f = this.res.getAdTypeAvailable(this.module);
                    f && "unknown" != f && "none" != f || (b = !1);
                    null == this.res.renderAd &&
                        null == this.res.getResponseData && (b = !1);
                    this.res.getError && (b = !1)
                }
                a(b)
            };
            d.prototype.request = function(a, b) {
                var f = this,
                    c = this.getRequest();
                if (null == c) f.mm.log("No request found for module");
                else {
                    f.depCount = 1;
                    f.depLoaded = 0;
                    var h = function() {
                        f.depLoaded++;
                        if (f.depLoaded == f.depCount)
                            if (f.responseValid)
                                if (1 == f.module.waitinit) f.module.moduleState = "init", f.module.wait = !0, a();
                                else if (null == f.module.target || "object" !== typeof f.module.target || 1 != f.module.target.found && 1 != f.module.target.slot) a(f.init.bind(f,
                            f.res));
                        else {
                            var c = f.init.bind(f, f.res);
                            1 == f.module.target.slot && f.module.options ? f.mm.pickEl("$G:" + f.module.options.width + "x" + f.module.options.height) && (f.module.target.find = "$G:" + f.module.options.width + "x" + f.module.options.height, a(c)) : f.mm.isDomReady() ? a(c) : document.addEventListener("DOMContentLoaded", function(b) {
                                a(c)
                            })
                        } else window.context && null != window.context.noContentAvailable && window.context.noContentAvailable(), b ? b() : a(null)
                    };
                    if (f.module.request) {
                        var d = this.mm.requestDeps[c.config.kind];
                        if (d)
                            for (var g =
                                    0; g < d.length; g++) {
                                var e = this.mm.deps[d[g]];
                                null == e.used && (e.used = !0, f.depCount++, e(h))
                            }
                    }
                    null != f.module.cssFile && (f.depCount++, null != f.module.cssFile && (d = document.createElement("link"), d.setAttribute("rel", "stylesheet"), d.type = "text/css", d.href = f.mm.cdnroot + f.module.cssFile, document.head.appendChild(d), d.addEventListener("load", h)));
                    c.addCallback(this, function(a) {
                        f.res = a;
                        f.module.renderIndex = null;
                        f.testResponseValidity(function(a) {
                            (f.responseValid = a) && f.refreshIndex++;
                            h()
                        })
                    })
                }
            };
            d.prototype.getRenderTargetDivID =
                function(a) {
                    return this.module.renderTargetID ? this.module.renderTargetID : this.module.divid
                };
            d.prototype.getRenderTarget = function(a) {
                void 0 === a && (a = 0);
                var b = this.module.div;
                if (b) {
                    var f = b.getElementsByClassName(this.module.renderTargetClass ? this.module.renderTargetClass : "cpmsrendertarget");
                    f.length > a ? b = f[a] : f.length && (b = f[0])
                }
                return b
            };
            d.prototype.onAdRendered = function(a) {};
            d.prototype.nextAd = function() {
                return this.res && this.res.nextAd ? this.res.nextAd(this.module) : !1
            };
            d.prototype.render = function(a,
                b, f) {
                this.res.renderAd && this.res.renderAd(this.module, a, null !== b && void 0 !== b ? b : this.onAdRendered.bind(this), f)
            };
            d.prototype.init = function(a, d) {
                var f, c, h, m, k, x = this;
                x.module.lastRan = (new Date).getTime();
                var u = 0;
                if ((null === a || void 0 === a ? 0 : a.getResponseData) && (null === (c = null === (f = null === a || void 0 === a ? void 0 : a.getResponseData()) || void 0 === f ? void 0 : f.creativemacros) || void 0 === c ? 0 : c.HALTREFRESH) || (null === (k = null === (m = null === (h = x.module.bestbid) || void 0 === h ? void 0 : h.bidResponse) || void 0 === m ? void 0 : m.creativeMacros) ||
                        void 0 === k ? 0 : k.HALTREFRESH)) x.halt = !0;
                a = null;
                this.mm.zonedata.mobilemodules && this.mm.zonedata.mobilemodules.pageviewmodule && (a = this.mm.zonedata.mobilemodules.pageviewmodule);
                this.mm.zonedata.requests && null != this.mm.zonedata.requests.pageviews && null != this.mm.zonedata.requests.pageviews.poolid && 0 < this.mm.zonedata.requests.pageviews.poolid ? u = this.mm.zonedata.requests.pageviews.poolid : null != this.mm.zonedata.mobilemodules && null != this.mm.zonedata.mobilemodules.pageviewpoolid && 0 < this.mm.zonedata.mobilemodules.pageviewpoolid &&
                    (u = this.mm.zonedata.mobilemodules.pageviewpoolid);
                (null == a || this.module.info && a == this.module.info.name) && 0 == b && (b = !0, a = Math.floor(10 + 26 * Math.random()).toString(36) + Math.floor(99999999 * Math.random()).toString(36), window[a] = function() {
                    x.mm.log("Pageview recorded to pool " + u)
                }, f = this.mm.serverroot + "/view.aspx?", f += "poolid=" + u + "&script=1&json=nc&callback=" + a + "&rnd=" + Math.round(999999 * Math.random()) + "&", null != this.mm.coppa && (f += "tfcd=" + (this.mm.coppa ? 1 : 0) + "&"), null != this.mm.usp && (f += "us_privacy" + this.mm.usp +
                    "&"), null != this.mm.gdprApplies && (f += "gdpr=" + (this.mm.gdprApplies ? 1 : 0) + "&"), null != this.mm.getPubConsent() && (f += "gdpr_consent=" + this.mm.getPubConsent() + "&"), this.mm.getScript(f));
                g++;
                var p = window.document;
                (a = this.module.target ? this.module.target.el : null) && a.ownerDocument && (p = a.ownerDocument);
                this.css && this.restyleCSS(this.css);
                this.globalCss && this.setGlobalCss(this.globalCss);
                var y = p.createElement("div");
                null != this.module.div && (y = this.module.div, y.innerHTML = "");
                this.module.div = y;
                if (this.module.pushdown) p.documentElement.style.transition =
                    "0.7s ease-in-out", p.documentElement.style.marginTop = "288px", y.style.zIndex = "-999", y.style.top = "" + (-288 + this.module.options.topPos) + "px", p.body.appendChild(y), x.setTimeout(function() {
                        this.div.style.top = this.options.topPos + "px"
                    }.bind(this.module), 0), x.setTimeout(function() {
                        p.documentElement.style.transition = "";
                        y.style.zIndex = "auto"
                    }, 700);
                else if (this.module.insertBefore)(a = x.mm.pickEl(this.module.insertBefore, void 0, void 0, !0)) && a.parentNode && a.parentNode.insertBefore(y, a);
                else if (this.module.target &&
                    (f = this.module, null == a && (a = f.target.topWindow ? x.mm.pickEl(f.target.find, f.target.pick, window.top, !0) : x.mm.pickEl(f.target.find, f.target.pick, void 0, !0)), a)) {
                    switch (this.module.target.kind) {
                        case "swaphide":
                            a.parentNode.insertBefore(y, a);
                            a.style.display = "none";
                            break;
                        case "swap":
                            a.parentNode.insertBefore(y, a);
                            a.parentNode.removeChild(a);
                            break;
                        case "replace":
                            for (; a.firstChild;) a.removeChild(a.firstChild);
                        case "last":
                        case "into":
                            a.appendChild(y);
                            break;
                        case "first":
                            a.insertBefore(y, a.firstChild);
                            break;
                        case "before":
                            a.parentNode.insertBefore(y, a);
                            break;
                        case "after":
                            a.parentNode.insertBefore(y, a.nextSibling)
                    }
                    if (this.module.options && (this.module.options.position || this.module.options.autoSizeToTarget)) {
                        var t = null,
                            V = p.createElement("div");
                        V.style.pointerEvents = "auto";
                        V.classList.add("cpmsrendertarget");
                        if (this.module.style && "fixed" == this.module.style.position) y.style.position = "fixed", y.style.top = "0", y.style.left = "0", y.style.bottom = "0", y.style.right = "0", y.style.zIndex = "2147483638", y.style.pointerEvents =
                            "none", t = y;
                        else if (y.style.position = "relative", y.style.zIndex = "2147483638", t = p.createElement("div"), t.style.position = "absolute", t.style.pointerEvents = "none", t.style.zIndex = "2147483638", t.style.width = getComputedStyle(a).width, t.style.height = getComputedStyle(a).height, y.appendChild(t), f.options.autoSizeToTarget) {
                            f = getComputedStyle(a);
                            V.style.width = f.width ? f.width : a.clientWidth + "px";
                            V.style.height = f.height ? f.height : a.clientHeight + "px";
                            var z = a;
                            window.addEventListener("resize", function(a) {
                                a = getComputedStyle(z);
                                t.style.width = V.style.width = a.width ? a.width : z.clientWidth + "px";
                                t.style.height = V.style.height = a.height ? a.height : z.clientHeight + "px"
                            })
                        }
                        t.appendChild(V);
                        y = V
                    }
                }
                this.module.divid && "anchor" !== this.module.kind && (y.id = this.module.divid);
                if (this.module.class)
                    for (a = Array.isArray(this.module.class) ? this.module.class : [this.module.class], f = 0; f < a.length; f++) y.classList.add(a[f]);
                if (this.module.style)
                    for (a = Object.keys(this.module.style), f = 0; f < a.length; f++) c = a[f], y.style[c] = this.module.style[c];
                if (this.module.pageStyle)
                    for (a =
                        Object.keys(this.module.pageStyle), f = 0; f < a.length; f++)
                        for (c = a[f], h = x.mm.findEls(c), m = Object.keys(this.module.pageStyle[c]), k = 0; k < h.length; k++)
                            for (var L = h[k], G = 0; G < m.length; G++) {
                                var B = m[G];
                                L.style[B] = this.module.pageStyle[c][B]
                            }
                if (null != y) {
                    if (this.module.options && this.module.options.position) switch (a = this.module.options.position, y.style.position = "absolute", typeof a) {
                        case "string":
                            f = a.toLowerCase(), 0 <= f.indexOf("top") ? y.style.top = "0px" : 0 <= f.indexOf("bottom") ? y.style.bottom = "0px" : (y.style.top = "50%",
                                this.module.options.height ? y.style.marginTop = -Math.round(.5 * parseFloat(this.module.options.height)) + "px" : this.module.style && this.module.style.height && (y.style.marginTop = -Math.round(.5 * parseFloat(this.module.style.height)) + "px")), 0 <= f.indexOf("left") ? y.style.left = "0px" : 0 <= f.indexOf("right") ? y.style.right = "0px" : (y.style.left = "50%", this.module.options.width ? y.style.marginLeft = -Math.round(.5 * parseFloat(this.module.options.width)) + "px" : this.module.style && this.module.style.width && (y.style.marginLeft = -Math.round(.5 *
                                parseFloat(this.module.style.width)) + "px"));
                        case "object":
                            null != a.x && null != a.y && (y.style.left = a.x, y.style.top = a.y)
                    }
                    if (void 0 != this.module.options.sandbox) a = document.createElement("div"), (this.module.template || this.module.children) && e.prototype.renderTemplate.call(this, this.module, a), f = "", this.module.css && (c = q.getCssString(this.module.css, this.module.divid), f += "<style>" + c + "</style>"), c = getComputedStyle(y).width, h = getComputedStyle(y).height, f = "<head></head><body><div id='" + y.id + "' style='width:" + c +
                        "; height:" + h + "'>" + f + a.innerHTML + "</div></body>", r.default.insertNewIframe({
                            width: c,
                            height: h,
                            intoEl: y,
                            renderHtml: f,
                            sandbox: this.module.options.sandbox
                        });
                    else if (this.module.template || this.module.children) this.$mount(y), e.prototype.renderTemplate.call(this, this.module, y);
                    a = function() {
                        for (var a = [].slice.call(y.getElementsByClassName("autofit")), b = 0; b < a.length; b++) q.autoFitText(a[b])
                    };
                    x.onEvent(window, "resize", a);
                    x.onEvent(window, "orientationchange", a);
                    a()
                }
                y && window.context && window.context.requestResize &&
                    window.context.requestResize(this.module.options.width, this.module.options.height, !1);
                x.triggerEvent("init");
                d && d()
            };
            d.prototype.setTimeout = function(a, b) {
                a = window.setTimeout(a, b);
                a = window.clearTimeout.bind(window, a);
                this.addFinalizer(a);
                return a
            };
            d.prototype.setInterval = function(a, b) {
                a = setInterval(a, b);
                a = window.clearInterval.bind(window, a);
                this.addFinalizer(a);
                return a
            };
            d.prototype.isViewable = function(a, b) {
                if (!1 === this.module.options.requireViewable) return !0;
                for (var f = a; f;) {
                    if (f.nodeType == Node.ELEMENT_NODE) {
                        var c =
                            getComputedStyle(f);
                        if ("none" == c.display || "hidden" == c.visibility) return !1;
                        try {
                            if (c.opacity && .1 >= parseFloat(c.opacity)) return !1
                        } catch (v) {}
                        if ("fixed" == c.position || "sticky" == c.position) break
                    }
                    f = f.parentNode
                }
                a = a.getBoundingClientRect();
                b && (a.height = b);
                var d = window.innerWidth;
                b = window.innerHeight;
                var h = document.documentElement.clientWidth;
                f = document.documentElement.clientHeight;
                (c = d) && h && (c = Math.min(d, h));
                null == c && (c = h);
                null == c && (c = document.getElementsByTagName("body")[0].clientWidth);
                (d = b) && f && (d = Math.min(b,
                    f));
                null == d && (d = f);
                null == d && (d = document.getElementsByTagName("body")[0].clientHeight);
                return 0 <= a.top && 0 <= a.left && a.top + .6 * a.height <= d && a.left + .8 * a.width <= c ? !0 : !1
            };
            d.prototype.startRefreshTimer = function(a) {
                var b = this;
                a = function() {
                    var a = b.getRenderTarget();
                    document && document.hasFocus && document.hasFocus() && b.lastRefreshed < (new Date).getTime() - b.module.options.refreshrate && a && b.isViewable(a, 0) && (b.lastRefreshed = (new Date).getTime(), b.adcmd({
                        kind: "adcmd",
                        command: "refresh",
                        module: b.module.info.name
                    }))
                };
                b.onEvent(window, "focus", a);
                b.onEvent(window, "resize", a);
                b.onEvent(window, "scroll", a);
                b.onEvent(window, "orientationchange", a);
                b.setInterval(a, b.module.options.refreshrate)
            };
            d.prototype.onEvent = function(a, b, f, c) {
                void 0 === c && (c = !1);
                var d = null;
                a.addEventListener ? (a.addEventListener(b, f, c), d = function(a, b) {
                    this.removeEventListener(a, b)
                }.bind(a, b, f)) : a.attachEvent && (a.attachEvent("on", b, f), d = function(c, d) {
                    this.detachEvent(c, d).bind(a, b, f)
                });
                this.addFinalizer(d);
                return d
            };
            d.prototype.addFinalizer = function(a) {
                (this.finalizers =
                    this.finalizers || []).push(a)
            };
            d.prototype.restyleCSS = function(a) {
                var b = window.document,
                    f = this.module.target ? this.module.target.el : null;
                f && f.ownerDocument && (b = f.ownerDocument);
                this.css = a;
                this.module.styleEl && this.module.styleEl.parentNode && this.module.styleEl.parentNode.removeChild(this.module.styleEl);
                a = b.createElement("style");
                this.module.styleEl = a;
                a.type = "text/css";
                a.styleSheet ? a.styleSheet.cssText = q.getCssString(this.css, this.module.divid) : a.appendChild(b.createTextNode(q.getCssString(this.css,
                    this.module.divid)));
                b.head.appendChild(a)
            };
            d.prototype.destroy = function() {
                for (; this.finalizers && 0 < this.finalizers.length;) this.finalizers.pop()();
                this.module.div && this.module.div.parentNode && this.module.div.parentNode.removeChild(this.module.div);
                this.module.styleEl && this.module.styleEl.parentNode && this.module.styleEl.parentNode.removeChild(this.module.styleEl)
            };
            d.prototype.initSliceManager = function() {
                this.nextSliceTimer && (this.mm.log("Reset slice timer for module: " + this.module.info.name), this.nextSliceTimer(),
                    this.nextSliceTimer = null);
                var a = .5;
                if ("number" == typeof this.module.options.timeslice) try {
                    a = parseFloat(this.module.options.timeslice)
                } catch (h) {}
                this.module.options.timeslice && Math.random() < a && (a = this.getNextTimesliceMs(), 0 < a && this.setSliceTimer(a))
            };
            d.prototype.tryNextTimeslice = function() {
                if (this.mm.isAdBlockerOn()) this.mm.log("Disabling timeslicing due to ad blocker detected");
                else {
                    var a = (new Date).getTime();
                    if (a < this.nextSliceTimestamp) a -= this.nextSliceTimestamp, this.mm.log("tryNextTimeslice: Did not use all time, adding " +
                        a + "ms"), this.setSliceTimer(a);
                    else {
                        a = this.getRenderTarget();
                        var b = 5E3;
                        this.isViewable(a, null) && (this.nextAd() && (a.innerHTML = "", this.render(a)), b = this.getNextTimesliceMs());
                        0 < b && this.setSliceTimer(b)
                    }
                }
            };
            d.prototype.setSliceTimer = function(a) {
                this.nextSliceTimer && (this.nextSliceTimer(), this.nextSliceTimer = null);
                this.nextSliceTimestamp = (new Date).getTime() + a;
                this.nextSliceTimer = this.setTimeout(this.tryNextTimeslice.bind(this), a)
            };
            d.prototype.getNextTimesliceMs = function() {
                var a, b, f, c, d, g, e = null === (a = this.pickResult) ||
                    void 0 === a ? void 0 : a.picks;
                a = null === (b = this.pickResult) || void 0 === b ? void 0 : b.totalCPM;
                b = null !== (f = this.module.options.refreshrate) && void 0 !== f ? f : this.DEFAULTREFRESHRATE;
                f = null !== (c = this.module.options.minslice) && void 0 !== c ? c : this.DEFAULTMINSLICE;
                if (a && e && e[null !== (d = this.module.renderIndex) && void 0 !== d ? d : 0]) return c = e[null !== (g = this.module.renderIndex) && void 0 !== g ? g : 0].cpm, g = c / a * b, g < f && (g = f), this.mm.log("" + this.module.info.name + " auction#" + (this.refreshIndex + 1) + ": slice " + (this.module.renderIndex +
                    1) + "/" + e.length + " is $" + c.toFixed(2) + " out of totalCPM: $" + a.toFixed(2) + ". Next slice in: " + Math.round(g) + "ms!"), g;
                this.mm.log("" + this.module.info.name + " auction#" + (this.refreshIndex + 1) + ":  No slices left.");
                return -1
            };
            d.prototype.setCss = function(a) {
                null == this.css && (this.css = {});
                "string" === typeof this.css ? this.mm.log("Error, cannot setCSS on a legacy string CSS") : (this.css = q.mergeObjects(this.css, a), this.restyleCSS(this.css))
            };
            d.prototype.setStyle = function(a, b) {
                Object.keys(b).forEach(function(f) {
                    a.style[f] =
                        b[f]
                })
            };
            d.prototype.setGlobalCss = function(a) {
                void 0 == this.globalCss && (this.globalCss = {});
                void 0 != a && (this.globalCss = q.mergeObjects(this.globalCss, a));
                a = window.document;
                this.module.globalStyleEl && this.module.globalStyleEl.parentNode && this.module.globalStyleEl.parentNode.removeChild(this.module.globalStyleEl);
                var b = a.createElement("style");
                this.module.globalStyleEl = b;
                b.styleSheet ? b.styleSheet.cssText = q.getCssString(this.globalCss) : b.appendChild(a.createTextNode(q.getCssString(this.globalCss)));
                a.head.appendChild(b)
            };
            d.COMPONENT_DESTROY_TIMER = 1E3;
            return d
        }(p("./src/zonemasters/superclasses/basic/rootcomponent.ts").default);
        k.default = e
    },
    "./src/zonemasters/components/videoplayer.ts": function(e, k, p) {
        function t(e) {
            var g = (new MessageChannel).port1;
            e.dispatchEvent = g.dispatchEvent.bind(g);
            e.addEventListener = g.addEventListener.bind(g);
            e.removeEventListener = g.removeEventListener.bind(g)
        }

        function q(e) {
            if ("function" === typeof Event) var g = new Event(e);
            else g = document.createEvent("Event"), g.initEvent(e, !1, !1);
            return g
        }
        Object.defineProperty(k,
            "__esModule", {
                value: !0
            });
        k.default = function(e) {
            function g(a) {
                var b = {};
                if (1 == a.nodeType)
                    for (var c = 0; c < a.attributes.length; c++) {
                        var f = a.attributes.item(c);
                        b["@" + f.nodeName.toLowerCase()] = f.nodeValue
                    } else 3 == a.nodeType ? b = a.nodeValue : 4 == a.nodeType && (b = a.nodeValue);
                if (a.hasChildNodes())
                    for (c = 0; c < a.childNodes.length; c++) {
                        f = a.childNodes.item(c);
                        var d = f.nodeName.toLowerCase();
                        if ("undefined" == typeof b[d]) b[d] = g(f);
                        else {
                            if ("undefined" == typeof b[d].push) {
                                var h = b[d];
                                b[d] = [];
                                b[d].push(h)
                            }
                            b[d].push(g(f))
                        }
                    }
                return b
            }

            function b(a) {
                (a = a ? a : []) && !Array.isArray(a) && (a = [a]);
                return a
            }

            function m(a) {
                if (!a) return null;
                a = null != a["#cdata-section"] ? a["#cdata-section"] : a["#text"];
                null != a && (a = Array.isArray(a) ? a.join("") : a, a = a.trim());
                return a
            }

            function d(a) {
                a = b(a);
                for (var c = [], f = 0; f < a.length; f++) {
                    var d = m(a[f]);
                    null != d && "" != d && c.push(d)
                }
                return c
            }

            function a(a) {
                if (!ia) {
                    ia = !0;
                    a && "skipped" != a && (E("VAST Error " + a + "\r\n" + a.stack), da(oa));
                    null != M && clearInterval(M);
                    null != W && clearTimeout(W);
                    if (T) try {
                        T.parentNode.removeChild(T), T = null
                    } catch (aa) {}
                    null !=
                        w && 0 < w.readyState && (w.pause(), w.currentTime = w.duration - .7);
                    a && "skipped" != a ? B.dispatchEvent(q("error")) : B.dispatchEvent(q("complete"))
                }
            }

            function h(a, b) {
                var c = document.createElement(a);
                Object.keys(b).forEach(function(a) {
                    c.setAttribute(a, b[a])
                });
                return c
            }

            function f(a, b) {
                b && (b = h("track", {
                    src: b,
                    srclang: "en",
                    kind: "subtitles"
                }), a.prepend(b), b.toggleAttribute("default"), a.setAttribute("crossorigin", "anonymous"))
            }

            function c(a) {
                if ("function" === typeof a) try {
                    return a()
                } catch (aa) {
                    return 0
                } else return a
            }

            function l() {
                if (O &&
                    F) {
                    try {
                        F.adDuration ? K = c(F.adDuration) : F.adRemainingTime && (K = w.currentTime + c(F.adRemainingTime))
                    } catch (ma) {
                        E("Error parsing remaining time in vpaidMode")
                    }
                    E("Vpaid duration updated to: " + K + " seconds")
                } else !isNaN(w.duration) && isFinite(w.duration) && (K = Math.min(60, w.duration))
            }

            function n(a, b) {
                var c = document.createElement("source");
                c.setAttribute("src", a);
                c.setAttribute("type", P);
                w = document.createElement("video");
                w.setAttribute("playsinline", "");
                f(w, b);
                a = window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() :
                    null;
                if (0 <= a.indexOf("ipad") || 0 <= a.indexOf("iphone") || 0 <= a.indexOf("ipod")) w.autoplay = !0;
                B.setMuted(fa);
                ta && (w.volume = ta);
                w.width = sa;
                w.height = ua;
                X && w.classList.add(X);
                w.addEventListener("durationchange", function() {
                    E("video element changed duration to " + w.duration);
                    l()
                });
                w.appendChild(c);
                k();
                c = document.createElement("a");
                c.target = "_blank";
                c.href = Ba + C;
                c.onclick = function() {
                    C && window.open(Ba + C, "_blank");
                    V();
                    return !1
                };
                c.appendChild(w);
                ra.appendChild(c);
                la = Date.now();
                var d = !1;
                w.addEventListener("play",
                    function() {
                        d || (d = !0, E("playing"), l(), z(0))
                    });
                w.addEventListener("timeupdate", function() {
                    B.dispatchEvent(q("timeupdate"))
                });
                w.addEventListener("timeupdate", L);
                M = setInterval(L, 500);
                w.addEventListener("ended", function() {
                    E("video element ended playback");
                    z(4)
                })
            }

            function k(a) {
                void 0 === a && (a = null);
                var b = !1,
                    c = !1,
                    f = function() {
                        w.removeEventListener("error", f);
                        w.removeEventListener("canplay", d);
                        w.removeEventListener("loadedmetadata", d);
                        for (var b = 0; b < w.children.length; b++) "source" == w.children[b].tagName.toLowerCase() &&
                            w.children[b].removeEventListener("error", f);
                        c || (c = !0, B.setMuted(!0), E("caught error -- cannot autoplay at all"), a && a({
                            canAutoplay: !1,
                            requiresMuted: !0
                        }))
                    },
                    d = function() {
                        try {
                            w.removeEventListener("error", f);
                            w.removeEventListener("canplay", d);
                            w.removeEventListener("loadedmetadata", d);
                            for (var g = 0; g < w.children.length; g++) "source" == w.children[g].tagName.toLowerCase() && w.children[g].removeEventListener("error", f)
                        } catch (Ca) {}
                        b || (b = !0, E("did not autoplay, so call play manually"), g = w.play(), void 0 !== g ? g.then(function() {
                            c ||
                                (c = !0, E("can autoplay sound on"), a && a({
                                    canAutoplay: !0,
                                    requiresMuted: !1
                                }))
                        }).catch(function(b) {
                            E("call to play prevented so had to mute");
                            B.setMuted(!0);
                            w.play().then(function() {
                                c || (c = !0, E("call to play allowed when muted"), a && a({
                                    canAutoplay: !0,
                                    requiresMuted: !0
                                }))
                            }).catch(function(b) {
                                E("call to play failed even when muted");
                                c || (c = !0, a && a({
                                    canAutoplay: !1,
                                    requiresMuted: !1
                                }))
                            })
                        }) : c || (c = !0, a && a({
                            canAutoplay: !0,
                            requiresMuted: !1
                        })))
                    };
                w.addEventListener("error", d);
                w.addEventListener("canplay", d);
                w.addEventListener("loadedmetadata",
                    d);
                for (var g = 0; g < w.children.length; g++) "source" == w.children[g].tagName.toLowerCase() && w.children[g].addEventListener("error", f)
            }

            function r(b) {
                E("loadVpaid called");
                u(5);
                la = Date.now();
                var c = 0;
                for (b = b.getElementsByTagName("Linear"); c < b.length; c++) {
                    var f = b[c],
                        d = f.getElementsByTagName("AdParameters");
                    0 < d.length && (A = d[0].textContent.trim());
                    d = 0;
                    for (f = f.getElementsByTagName("MediaFile"); d < f.length; d++) {
                        var g = f[d];
                        if ("VPAID" == g.getAttribute("apiFramework") && "application/javascript" == g.getAttribute("type")) {
                            var h =
                                g.textContent.trim();
                            break
                        }
                    }
                    if (h) break
                }
                E("mediaFileUrl " + h);
                T = document.createElement("iframe");
                T.width = "" + sa;
                T.height = "" + ua;
                T.frameBorder = "0";
                T.scrolling = "no";
                X && T.classList.add(X);
                ra.appendChild(T);
                window.setTimeout(function() {
                    var b = T.contentWindow.document;
                    w = b.createElement("video");
                    w.setAttribute("playsinline", "true");
                    w.style.left = "0px";
                    w.style.top = "0px";
                    w.style.position = "absolute";
                    w.style.width = "100%";
                    w.style.height = "100%";
                    var c = b.createElement("source");
                    c.setAttribute("src", "https://ssl.cdne.cpmstar.com/cached/zonemasters/mp4-with-audio.mp4");
                    c.setAttribute("type", "video/mp4");
                    w.appendChild(c);
                    var f = b.getElementsByTagName("body")[0];
                    f.appendChild(w);
                    w.load();
                    var d = b.createElement("div");
                    d.style.left = "0px";
                    d.style.top = "0px";
                    d.style.position = "absolute";
                    d.style.width = "100%";
                    d.style.height = "100%";
                    f.appendChild(d);
                    f = h;
                    var g = sa,
                        e = ua,
                        m = {
                            AdParameters: A
                        },
                        n = {
                            slot: d,
                            videoSlot: w,
                            videoSlotCanAutoPlay: !0
                        };
                    E("creating script ");
                    var r = !1,
                        v = !1,
                        C = !1;
                    d = b.createElement("script");
                    d.type = "text/javascript";
                    d.async = !0;
                    d.src = f;
                    d.onload = function() {
                        E("vpaid script loaded ");
                        var b = T.contentWindow.getVPAIDAd;
                        if (b && "function" == typeof b) {
                            var c = {
                                    AdStarted: this.onStartAd,
                                    AdStopped: this.onStopAd,
                                    AdSkipped: this.onSkipAd,
                                    AdLoaded: this.onAdLoaded,
                                    AdLinearChange: this.onAdLinearChange,
                                    AdSizeChange: this.onAdSizeChange,
                                    AdExpandedChange: this.onAdExpandedChange,
                                    AdSkippableStateChange: this.onAdSkippableStateChange,
                                    AdDurationChange: this.onAdDurationChange,
                                    AdRemainingTimeChange: this.onAdRemainingTimeChange,
                                    AdVolumeChange: this.onAdVolumeChange,
                                    AdImpression: this.onAdImpression,
                                    AdClickThru: this.onAdClickThru,
                                    AdInteraction: this.onAdInteraction,
                                    AdVideoStart: this.onAdVideoStart,
                                    AdVideoFirstQuartile: this.onAdVideoFirstQuartile,
                                    AdVideoMidpoint: this.onAdVideoMidpoint,
                                    AdVideoThirdQuartile: this.onAdVideoThirdQuartile,
                                    AdVideoComplete: this.onAdVideoComplete,
                                    AdUserAcceptInvitation: this.onAdUserAcceptInvitation,
                                    AdUserMinimize: this.onAdUserMinimize,
                                    AdUserClose: this.onAdUserClose,
                                    AdPaused: this.onAdPaused,
                                    AdPlaying: this.onAdPlaying,
                                    AdError: this.onAdError,
                                    AdLog: this.onAdLog
                                },
                                f = function(b, c) {
                                    E("Ad Event " + b + " " + (c ? c :
                                        ""));
                                    "AdLoaded" == b && (E("VPAID video became ready"), B.dispatchEvent(q("ready")), u(5));
                                    "AdStarted" == b && (z(0), u(15));
                                    "AdVideoFirstQuartile" == b && (z(1), u(15));
                                    "AdVideoMidpoint" == b && (z(2), u(15));
                                    "AdVideoThirdQuartile" == b && (z(3), u(15));
                                    "AdVideoComplete" == b && z(4);
                                    "AdClickThru" == b && (V(), null != c && "" != c && "string" == typeof c && window.open(c, "_blank"));
                                    "AdSkippableStateChange" == b && B.dispatchEvent(q("skippablestatechange"));
                                    "AdSkipped" != b && "AdStopped" != b || a("skipped");
                                    "AdPaused" == b && (B.paused = !0, setTimeout(function() {
                                        B.paused &&
                                            a("skipped")
                                    }, 3500));
                                    "AdError" == b && a(c);
                                    "AdRemainingTimeChange" != b && "AdDurationChange" != b || l()
                                };
                            F = b();
                            E(" vpaidAd gotten ");
                            for (var d in c) F.subscribe(f.bind(null, d), d, null);
                            F.handshakeVersion("2.0");
                            E(" vpaidAd handshaked ");
                            r = !0;
                            C && !v && (B.setVolume(B.getVolume()), v = !0, F.initAd(g, e, "normal", 200, m, n), E(" vpaidAd initAd"))
                        }
                    };
                    b.getElementsByTagName("head")[0].appendChild(d);
                    k(function(a) {
                        w.pause();
                        w.removeChild(c);
                        B.isMuted() || B.setMuted(a.requiresMuted);
                        C = !0;
                        r && !v && (B.setVolume(B.getVolume()), v = !0,
                            F.initAd(g, e, "normal", 200, m, n), E(" vpaidAd initAd"))
                    })
                }, 1)
            }

            function u(a) {
                null != W && clearTimeout(W);
                W = setTimeout(p, 1E3 * a)
            }

            function p() {
                if (!N[0]) {
                    E("Watchdog timer is about to call adstop");
                    try {
                        F.stopAd()
                    } catch (ma) {}
                    a("watchdog timeout")
                }
            }

            function y(a) {
                for (var b = 0; b < a.length; b++) da(a[b])
            }

            function da(a) {
                if (null != a && "" != a && (0 <= a.indexOf("http://") || 0 <= a.indexOf("https://") || 0 == a.indexOf("//"))) try {
                    var b = document.createElement("img");
                    b.src = a;
                    b.style.position = "absolute";
                    b.style.top = "0px";
                    b.style.left = "0px";
                    b.style.width = "1px";
                    b.style.height = "1px";
                    ra.appendChild(b);
                    b.onload = function() {
                        b.style.display = "none";
                        b.style.position = "absolute";
                        b.style.top = "0px";
                        b.style.left = "0px";
                        b.style.width = "1px";
                        b.style.height = "1px"
                    }
                } catch (Ea) {
                    E("Error hitting pixel: " + Ea)
                }
            }

            function V() {
                y(Z);
                B.isPaused() && B.play();
                return !0
            }

            function z(b) {
                J != b - 1 ? E("Out of order quartile call: requested " + b + " but was at " + J) : (J = b, E("quartile " + J), N[J] || (N[J] = !0, 0 == J && (la = Date.now(), B.dispatchEvent(q("start"))), 1 == J && B.dispatchEvent(q("firstquartile")),
                    2 == J && B.dispatchEvent(q("midpoint")), 3 == J && B.dispatchEvent(q("thirdquartile")), y(Q[J]), 4 == J && a()))
            }

            function L() {
                !ca && O || pa == B.isSkippable() || (B.dispatchEvent(q("skippablestatechange")), pa = B.isSkippable());
                N[0] && 3 > J && w.currentTime >= .25 * (J + 1) * K && z(J + 1);
                var b = Date.now();
                !B.isPaused() && 4 > J && (b - la) / 1E3 >= K + 2 && (E("TimerHandler is firing complete"), 3 == J ? z(4) : (E("Had to end ad forcefully by timeout without even getting to third quartile"), N[4] = !0, a()))
            }

            function G(a) {
                var b = 0;
                if (!a) return b;
                a = a.split(":");
                0 <
                    a.length && (b += Number(a.pop()));
                0 < a.length && (b += 60 * Number(a.pop()));
                0 < a.length && (b += 3600 * Number(a.pop()));
                return b
            }
            console.log("LOG - videoplayer.ts default function called ");
            var B = this;
            t(this);
            var E = e.log,
                A, w, M, W, S, P = "video/mp4",
                oa, C, Z = [],
                K = 0,
                ea = 99999,
                Q = [
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                N = [!1, !1, !1, !1, !1],
                qa = [],
                ya = 0,
                O = !1,
                F, T, ta = 1,
                J = -1,
                la, ra, sa, ua, Ba = "",
                I = !1,
                fa = !1,
                ha = !1,
                ka = 0,
                ia = !1,
                pa = !1,
                ca = !1,
                X = void 0;
            this.setBegan = function(a) {
                I = a
            };
            this.videoEl = function() {
                return w
            };
            this.initializeForUrl = function(a, b, c, f) {
                ra = a;
                sa =
                    b;
                ua = c;
                Ba = f && f.clickPrefix ? f.clickPrefix : "";
                fa = f ? !!f.muted : !1;
                X = f.className ? f.className : void 0;
                ca = f ? !!f.forceSkippability : !1;
                B.dispatchEvent(q("ready"))
            };
            this.isVpaidMode = function() {
                return O
            };
            this.init = function(c, f, h, e, l) {
                function n(b) {
                    if (0 == b.indexOf("http://adrtb-cache-use.sundaysky.com")) {
                        var c = b.indexOf("&dns=");
                        0 <= c && (b = b.slice(0, c))
                    }
                    fetch(b, {
                        method: "GET",
                        mode: "cors",
                        cache: "no-cache",
                        redirect: "follow"
                    }).then(function(a) {
                        return a.text()
                    }).then(function(a) {
                        k(a)
                    }).catch(function(c) {
                        a("error making request to wrapperVastAdTagURI " +
                            b)
                    })
                }

                function k(c) {
                    try {
                        if (0 == c.indexOf("http") || 0 == c.indexOf("//")) n(c);
                        else {
                            var f = (new DOMParser).parseFromString(c, "text/xml"),
                                h = g(f);
                            c = [];
                            var e = h.vast.ad;
                            if (null == e) S = null;
                            else {
                                var l = [e.inline, e.wrapper],
                                    k = ["Inline", "Wrapper"];
                                for (e = 0; e < l.length; e++) {
                                    var u = l[e];
                                    u && (E("found Ad." + k[e]), Q[0] = Q[0].concat(d(u.impression)), u.creatives && (c = c.concat(b(u.creatives.creative))), u.error && (oa = m(u.error)))
                                }
                                for (l = 0; l < c.length; l++) {
                                    var v = c[l].linear;
                                    if (null != v) {
                                        if (v.trackingevents) {
                                            var p = b(v.trackingevents.tracking);
                                            for (u = 0; u < p.length; u++) {
                                                var x = p[u],
                                                    t = m(x);
                                                switch (x["@event"]) {
                                                    case "creativeView":
                                                        Q[0].push(t);
                                                        break;
                                                    case "close":
                                                        qa.push(t);
                                                        break;
                                                    case "start":
                                                        Q[0].push(t);
                                                        break;
                                                    case "firstQuartile":
                                                        Q[1].push(t);
                                                        break;
                                                    case "midpoint":
                                                        Q[2].push(t);
                                                        break;
                                                    case "thirdQuartile":
                                                        Q[3].push(t);
                                                        break;
                                                    case "complete":
                                                        Q[4].push(t)
                                                }
                                            }
                                        }
                                        C = v.videoclicks && v.videoclicks.clickthrough ? m(v.videoclicks.clickthrough) : C;
                                        v.videoclicks && (Z = Z.concat(d(v.videoclicks.clicktracking)));
                                        K = v.duration ? G(v.duration["#text"]) : 0;
                                        A = v.adparameters ? m(v.adparameters) :
                                            "";
                                        if (v["@skipoffset"]) {
                                            var y = v["@skipoffset"],
                                                z = y.indexOf("%");
                                            ea = -1 != z ? K * parseFloat(y.substr(0, z)) : G(y)
                                        }
                                        if (v.mediafiles) {
                                            var w = b(v.mediafiles.mediafile);
                                            for (e = 0; e < w.length; e++) {
                                                var U = w[e];
                                                P = U["@type"];
                                                if (null != P) {
                                                    P = P.toLowerCase();
                                                    var N = m(U);
                                                    if (0 == N.indexOf("http") || 0 == N.indexOf("//"))
                                                        if ("video/mp4" == P || "video/webm" == P || "video/ogg" == P) {
                                                            parseInt(U["@width"]);
                                                            parseInt(U["@height"]);
                                                            var J = N;
                                                            break
                                                        } else if (("application/javascript" == P || "application/x-javascript" == P) && U["@apiframework"] && "vpaid" == U["@apiframework"].toLowerCase()) {
                                                        J =
                                                            N;
                                                        O = !0;
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                S = J
                            }
                            var F = h.vast.ad;
                            if (null == S && 3 > ya++ && F && F.wrapper && F.wrapper.vastadtaguri) {
                                var D = m(F.wrapper.vastadtaguri);
                                D ? (E("Wrapper found reloading: " + D), Q[0] = Q[0].concat(d(F.wrapper.impression)), n(D)) : a("no wrapper url")
                            } else K = Math.min(60, K), null != S ? O ? r(f) : (E("VAST video became ready"), B.dispatchEvent(q("ready"))) : a("no video url")
                        }
                    } catch (ab) {
                        a(ab)
                    }
                }
                ra = f;
                sa = h;
                ua = e;
                Ba = l && l.clickPrefix ? l.clickPrefix : "";
                fa = l ? !!l.muted : !1;
                ca = l ? !!l.forceSkippability : !1;
                X = l.className ? l.className : void 0;
                k(c)
            };
            this.skip = function() {
                if (I && !ia && B.isSkippable()) {
                    if (O && F && F.getAdSkippableState && F.getAdSkippableState() && F.skipAd && "function" === typeof F.skipAd) F.skipAd(), B.dispatchEvent(q("skipped"));
                    else if (!O || ca) w && w.pause(), B.dispatchEvent(q("skipped")), a("skipped");
                    y(qa)
                }
            };
            this.close = function() {
                O && F && F.getAdSkippableState && F.getAdSkippableState() && F.skipAd && "function" === typeof F.skipAd ? F.skipAd() : O && this.setMuted(!0);
                a("skipped")
            };
            this.play = function() {
                ha ? (O ? F && F.resumeAd() : w.play(), la += Date.now() - ka, ha = !1) :
                    I || ia || (I = !0, O ? (F && F.startAd(), M = setInterval(L, 500)) : n(S))
            };
            this.replay = function() {
                I && !O && (Q = [
                    [],
                    [],
                    [],
                    [],
                    []
                ], N = [!0, !1, !1, !1, !1], J = 0, la = Date.now(), w.currentTime = 0, w.play(), ia = !1, M = setInterval(L, 500))
            };
            this.pause = function() {
                ha || (O ? F.pauseAd() : w.pause(), ka = Date.now(), ha = !0)
            };
            this.isPlaying = function() {
                return I && !ha && !ia
            };
            this.isPaused = function() {
                return ha
            };
            this.isMuted = function() {
                return fa
            };
            this.setMuted = function(a) {
                var b = window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : null;
                if (w) {
                    if (0 <=
                        b.indexOf("ipad") || 0 <= b.indexOf("iphone") || 0 <= b.indexOf("ipod"))
                        if (a) {
                            w.setAttribute("muted", null);
                            try {
                                w.removeAttribute("muted")
                            } catch (Ea) {}
                        } else w.setAttribute("muted", "");
                    w.muted = a
                }(fa = a) || 1 != ta && 0 != ta || this.setVolume(1)
            };
            this.isSkippable = function() {
                return !I || ia ? !1 : O && !ca ? F ? c(F.adSkippableState) : !1 : B.getDuration() - B.getRemainingTime() >= ea
            };
            this.getSkipOffset = function() {
                return ea
            };
            this.setSkipOffset = function(a) {
                ea = a;
                !ca && O || pa == B.isSkippable() || (B.dispatchEvent(q("skippablestatechange")), pa = this.isSkippable())
            };
            this.setSize = function(a, b) {
                sa = a;
                ua = b;
                w && (w.width = a, w.height = b);
                T && (T.width = "" + a, T.height = "" + b)
            };
            this.getDuration = function() {
                return K
            };
            this.getRemainingTime = function() {
                return O ? F && F.adRemainingTime ? c(F.adRemainingTime) : Math.max(0, K - ((new Date).getTime() - la) / 1E3) : K - w.currentTime
            };
            this.getVolume = function() {
                return ta
            };
            this.setVolume = function(a) {
                0 > a && (a = 0);
                1 < a && (a = 1);
                ta = a;
                O && F ? F.adVolume = fa ? 0 : a : w && (w.volume = a)
            };
            this.resetQuartiles = function() {
                J = -1;
                ia = !1;
                N = [!1, !1, !1, !1, !1]
            };
            this.playUrl = function(a) {
                I = !0;
                n(a.url, a.subtitles)
            };
            this.watchdogOn = function(a) {
                u(a)
            };
            this.watchdogOff = function() {
                clearTimeout(W);
                W = void 0
            }
        }
    },
    "./src/zonemasters/data/steam.ts": function(e, k, p) {
        function t(e) {
            return k.steamgpus[e.toLowerCase()]
        }
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        k.isSteamGPU = k.getSteamGPUInfo = k.steamgpus = void 0;
        k.steamgpus = {
            "nvidia geforce gtx 1060": {
                dx: 12
            },
            "nvidia geforce gtx 1050 Ti": {
                dx: 12
            },
            "nvidia geforce gtx 1650": {
                dx: 12
            },
            "nvidia geforce rtx 2060": {
                dx: 12
            },
            "nvidia geforce gtx 1050": {
                dx: 12
            },
            "nvidia geforce gtx 1660 Ti": {
                dx: 12
            },
            "nvidia geforce gtx 1070": {
                dx: 12
            },
            "nvidia geforce gtx 1660 super": {
                dx: 12
            },
            "nvidia geforce gtx 1660": {
                dx: 12
            },
            "nvidia geforce rtx 2070 super": {
                dx: 12
            },
            "nvidia geforce rtx 3070": {
                dx: 12
            },
            "amd radeon rx vega 11 graphics": {
                dx: 12
            },
            "nvidia geforce gtx 1080": {
                dx: 12
            },
            "nvidia geforce rtx 3090": {
                dx: 12
            },
            "nvidia geforce GT 710": {
                dx: 12
            },
            "nvidia geforce MX250": {
                dx: 12
            },
            "nvidia geforce MX150": {
                dx: 12
            },
            "nvidia geforce gtx 950": {
                dx: 12
            },
            "nvidia geforce gtx 970": {
                dx: 12
            },
            "amd radeon rx 480": {
                dx: 12
            },
            "nvidia geforce gtx 950m": {
                dx: 12
            },
            "amd radeon graphics": {
                dx: 12
            },
            "amd radeon rx 560": {
                dx: 12
            },
            "nvidia geforce gtx 7500": {
                dx: 12
            },
            "amd radeon rx 5500 xt": {
                dx: 12
            },
            "nvidia geforce rtx 2070 with max-q design": {
                dx: 12
            }
        };
        k.getSteamGPUInfo = t;
        k.isSteamGPU = function(e) {
            return null == e ? !1 : t(e) ? !0 : !1
        }
    },
    "./src/zonemasters/mobilemodules.ts": function(e, k, p) {
        function t() {
            ka = null == (ca = ha.match(/[\?&]cpmstarhash=([^&#]*)/)) ? "" : "#" + ca[1]
        }

        function q() {
            var a = window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : null;
            if (null != a) {
                for (var b = 0; b <
                    Ra.length; b++)
                    if (0 <= a.indexOf(Ra[b])) return Ra[b];
                if (0 <= a.indexOf("windows")) return "windows";
                if (0 <= a.indexOf("macintosh")) return "macintosh";
                if (0 <= a.indexOf("linux")) return "linux"
            } else return "other"
        }

        function r() {
            if (Ma) {
                var a = Ja.getParameterByName("cpmstar_mobileoverride");
                if ("1" === a) return !0;
                if ("0" === a) return !1
            }
            a = q();
            return "other" !== a ? 0 <= Ra.indexOf(a) : !1
        }

        function g() {
            if (Ma) {
                var a = Ja.getParameterByName("cpmstar_mobileoverride");
                if ("1" === a) return !1;
                if ("0" === a) return !0
            }
            a = q();
            return "other" !== a ? 0 <= ob.indexOf(a) :
                !1
        }

        function b(a) {
            var c = q();
            if ("string" === typeof a) return a = a.toLowerCase().trim(), "mobile" === a ? r() : "desktop" === a ? g() : a === c;
            if (Array.isArray(a)) {
                c = !1;
                for (var f = 0; f < a.length && !(c = b(a[f])); f++);
                return c
            }
            E("error - invalid condition: " + a);
            return !1
        }

        function m(a) {
            if ("string" === typeof a) return a = a.trim(), ka.toLowerCase() == a.toLowerCase();
            if (Array.isArray(a)) {
                for (var b = 0; b < a.length; b++)
                    if (m(a[b])) return !0;
                return !1
            }
            E("error - invalid condition: " + a);
            return !1
        }

        function d(a) {
            if ("string" === typeof a || "number" ==
                typeof a) {
                if (Ya) {
                    if ("1" == a) return !0;
                    if ("0" == a) return !1
                }
                return Qa == a
            }
            if (Array.isArray(a)) {
                for (var b = 0; b < a.length; b++)
                    if (d(a[b])) return !0;
                return !1
            }
            E("error - invalid condition: " + a);
            return !1
        }

        function a(b, c) {
            if (b && null != c && "number" === typeof c) {
                if (b = wa[b && null != b.id ? b.id : b.info.name], null == b || null == b.lastRan || b.lastRan + c <= (new Date).getTime()) return !0
            } else if (Array.isArray(c))
                for (var f = 0; f < c.length; f++)
                    if (a(b, c[f])) return !0;
            return !1
        }

        function h(a) {
            Ga = H.locationData;
            if ("object" === typeof Ga) {
                if (!Array.isArray(a)) {
                    var b = !1,
                        c = 0 <= C.toStringArrayLower(a.countryCode).indexOf(Ga.countryCode.toLowerCase());
                    b = b || c;
                    c = 0 <= C.toStringArrayLower(a.region).indexOf(Ga.region.toLowerCase());
                    b = b || c;
                    c = 0 <= C.toStringArrayLower(a.city).indexOf(Ga.city.toLowerCase());
                    b = b || c;
                    return a.exclude ? !b : b
                }
                if (Array.isArray(a)) {
                    for (var f = c = b = 0; f < a.length; f++) {
                        var d = h(a[f]);
                        if (a[f].exclude) {
                            if (!d) return !1
                        } else b++, d && c++
                    }
                    if (0 < b) return 0 < c
                }
            }
            return !0
        }

        function f(a) {
            var b = pa;
            Array.isArray(a) || "string" !== typeof a || (a = [a]);
            for (var c = 0, f = 0; f < a.length; f++) {
                if (a[f] ===
                    b) return !0;
                if ("~" === a[f][0] && c++, a[f] === "~" + b) return !1
            }
            return 0 == a.length - c
        }

        function c(a) {
            var b = ia.toLowerCase().trim(),
                f = a.indexOf("*");
            if ("string" === typeof a) {
                a = a.toLowerCase().trim();
                if (0 > f) return a === b;
                if (0 <= f) {
                    do {
                        var d = a.slice(0, f),
                            g = f < a.length - 1 ? a[f + 1] : null;
                        if (0 != b.indexOf(d)) return !1;
                        b = b.slice(d.length);
                        null != g && (d = b.indexOf(g), b = b.slice(d));
                        a = a.slice(f + 1);
                        f = a.indexOf("*")
                    } while (-1 != f);
                    return 0 == a.length || b.indexOf(a) == b.length - a.length ? !0 : !1
                }
            } else if (Array.isArray(a)) {
                for (b = 0; b < a.length; b++)
                    if ("string" ===
                        typeof a[b] && "~" == a[b][0]) {
                        if (c(a[b].slice(1))) break
                    } else if (c(a[b])) return !0;
                return !1
            }
            E("error - invalid condition: " + a);
            return !1
        }

        function l(a) {
            var b, c = D.requests,
                f = null === (b = null === D || void 0 === D ? void 0 : D.info) || void 0 === b ? void 0 : b.zonepools;
            b = void 0;
            if (null == a) return null;
            b = D.modules.find(function(b) {
                var c;
                return (null === (c = null === b || void 0 === b ? void 0 : b.info) || void 0 === c ? void 0 : c.name) == a
            });
            null == b && f && c[a] && c[a].poolid && f[c[a].poolid] && (a = f[c[a].poolid].module, b = D.modules.find(function(b) {
                var c;
                return (null === (c = null === b || void 0 === b ? void 0 : b.info) || void 0 === c ? void 0 : c.name) == a
            }));
            return null !== b && void 0 !== b ? b : null
        }

        function n() {
            setTimeout(function() {
                R.triggerjb && R.triggerjb()
            }, 500)
        }

        function v(a) {
            try {
                if (n(), a)
                    if ("function" === typeof a) a($a);
                    else {
                        var b = "string" === typeof a ? a.split(".") : a.kind ? a.kind.split(".") : [];
                        if (2 == b.length) $a[b[0]][b[1]]("object" === typeof a ? a : void 0);
                        else if ("object" === typeof a) {
                            if (a.cb) {
                                var c = function(a, b, c) {
                                    a(function() {
                                        n();
                                        b && b()
                                    }, c)
                                }.bind(null, a.cb);
                                a.cb = c
                            }
                            switch (a.kind) {
                                case "gpt":
                                    a.data &&
                                        a.data.sizemap && oa(a.data.sizemap, a.data.roadblock);
                                case "showlog":
                                    Za = !Za;
                                case "listmodules":
                                    a.cb(Object.keys(wa));
                                    break;
                                case "setconfig":
                                    a.conditions && (null == D.conditions && (D.conditions = []), D.conditions = C.mergeObjectsWithConditions(D.conditions, a.conditions));
                                    break;
                                case "setmoduledata":
                                    for (var f = Object.keys(a.data), d = 0; d < f.length; d++) {
                                        var g = f[d],
                                            h = l(g),
                                            e = h.css ? h.css : {},
                                            m = h.options ? h.options : {};
                                        a.data[g].css && (h.css = C.mergeObjects(e, a.data[g].css));
                                        a.data[g].options && (h.options = C.mergeObjects(m, a.data[g].options))
                                    }
                                    break;
                                case "setrequestdata":
                                    f = Object.keys(a.data);
                                    for (h = 0; h < f.length; h++)
                                        if (g = f[h], 0 == g.indexOf("hb.")) {
                                            var u = g.slice(g.indexOf("hb.") + 3),
                                                k = D.requests.hb;
                                            if (k && k.adUnits)
                                                for (d = 0; d < k.adUnits.length; d++)("*" == u || k.adUnits[d].code == u) && k.adUnits[d] && (k.adUnits[d] = C.mergeObjects(k.adUnits[d], a.data[g]))
                                        } else {
                                            var Y = Object.keys(D.requests);
                                            for (d = 0; d < Y.length; d++) {
                                                var v = Y[d];
                                                if ("*" == g || v == g) D.requests[v] = C.mergeObjects(D.requests[v], a.data[g])
                                            }
                                        }
                                    break;
                                case "addplacementandgo":
                                    f = !1;
                                    if (null != D.modules)
                                        for (g = 0; g <
                                            D.modules.length; g++) {
                                            h = D.modules[g];
                                            var q = h.conditions;
                                            if (q) {
                                                q = Array.isArray(q) ? q : [q];
                                                for (d = 0; d < q.length && !(f = x(h, q[d], a.pid, a.pindex)); d++);
                                                if (f) break
                                            }
                                        }
                                    f ? null != ba && ba() : a.render();
                                    break;
                                case "request":
                                    var r = l(a.module);
                                    if (!r) break;
                                    a.config && (r = C.deepClone(r), r = C.mergeObjectsWithConditions(r, a.config));
                                    r.ready = !0;
                                    null != ba && ba(r, "request", a);
                                    break;
                                case "cmp":
                                    G(a.cb ? a.cb : null, !0);
                                    break;
                                case "go":
                                    if (null == a.module) null != ba && ba();
                                    else if (r = l(a.module)) a.config && (r = C.deepClone(r), r = C.mergeObjectsWithConditions(r,
                                        a.config)), r.ready = !0, null != ba && ba(r, null, a);
                                    break;
                                case "asynctagfetch":
                                    null == R.libcmd && A(Fa + "/cached/js/lib.js");
                                    if (null != a.el && null != a.pid) {
                                        var p = Ea(La + a.pid, 0);
                                        a.el.className = p;
                                        a.pindex = window.document.getElementsByClassName(p).length - 1;
                                        (R.libcmd = R.libcmd || []).push(a)
                                    }
                                    break;
                                case "createmodule":
                                    if (null == a.config) break;
                                    null == a.once && (a.once = !0);
                                    null == a.config.info && (a.config.info = {}, a.config.info.name = a.module);
                                    var t = l(a.config.info.name);
                                    if (null != t)
                                        if (t = C.deepClone(t), 0 == t.info.overrides) {
                                            var y =
                                                C.deepClone(a.config);
                                            t = C.mergeObjectsWithConditions(y, t)
                                        } else t = C.mergeObjectsWithConditions(t, a.config);
                                    else D.modules.push(a.config), t = l(a.config.info.name), t = C.mergeObjectsWithConditions(t, {
                                        conditions: {
                                            wait: !0
                                        }
                                    });
                                    if (!t) break;
                                    null != ba && Sa(function() {
                                        t.ready = !0;
                                        ba(t, null, a)
                                    });
                                    break;
                                case "refresh":
                                    if (a.data && a.data.modules && Array.isArray(a.data.modules))
                                        for (h = 0; h < a.data.modules.length; h++) {
                                            var z = wa[a.data.modules[h]];
                                            null != z && null != z.js && z.js.adcmd({
                                                kind: "adcmd",
                                                command: "refresh"
                                            })
                                        }
                                    break;
                                case "adcmd":
                                    z =
                                        wa[a.module];
                                    null != z && null != z.js && z.js.adcmd(a);
                                    break;
                                case "cmp_":
                                    var w = a.config;
                                    if (null == w) break;
                                    var U = a.config.type;
                                    if (null == U) break;
                                    switch (U) {
                                        case "showcmp":
                                            var K = w.force,
                                                N = w.usp,
                                                Q = w.forceusp;
                                            "object" != typeof w.config && (w.config = {});
                                            var J = w.config;
                                            J.usp = B(N, Q);
                                            Sa(function() {
                                                G(function() {
                                                    a.cb && a.cb()
                                                }, null != K && K ? !0 : !1, J)
                                            });
                                            break;
                                        case "gdpr":
                                            var P = w.gdprapplies;
                                            "boolean" == typeof P && (H.gdprApplies = P);
                                            "string" == typeof w.consentstring && (document.cookie = "pubconsent=" + a.data.consentstring + "; expires=" +
                                                (new Date((new Date).getTime() + 6048E5)).toUTCString() + "; path=/");
                                            break;
                                        case "usp":
                                            var F = w.usp;
                                            "string" == typeof F && (document.cookie = "usp=" + F + "; expires=" + (new Date((new Date).getTime() + 6048E5)).toUTCString() + "; path=/");
                                            break;
                                        case "coppa":
                                            var S = w.coppa;
                                            if ("boolean" == typeof S) {
                                                H.coppa = S;
                                                var Z = bb.hb;
                                                null != Z && Z.reinit()
                                            }
                                    }
                                    break;
                                case "showcmps":
                                    Sa(function() {
                                        G(function() {
                                            a.cb && a.cb()
                                        }, null != a.force && a.force ? !0 : !1, a.config)
                                    });
                                    break;
                                case "gdpr":
                                    if ("object" != typeof a.data) break;
                                    "boolean" == typeof a.data.gdprapplies &&
                                        (H.gdprApplies = a.data.gdprapplies);
                                    if ("string" != typeof a.data.consentstring) break;
                                    document.cookie = "pubconsent=" + a.data.consentstring + "; expires=" + (new Date((new Date).getTime() + 6048E5)).toUTCString() + "; path=/";
                                    break;
                                case "coppa":
                                    if (null == a.value && "boolean" != typeof a.value) break;
                                    H.coppa = a.value;
                                    E("coppa set to " + H.coppa);
                                    Z = bb.hb;
                                    null != Z && null != Z.reinit && Z.reinit();
                                    break;
                                case "usp":
                                    if (null != a.value || "string" == typeof a.value) document.cookie = "usp=" + a.value + "; expires=" + (new Date((new Date).getTime() +
                                        6048E5)).toUTCString() + "; path=/"
                            }
                        }
                    }
            } catch (ub) {}
        }

        function x(a, b, c, f) {
            if (a && "skin" == a.kind && a.info && a.info.name == "POOL " + c) return !0;
            if (null == b || null == b.target) return !1;
            a = b.target;
            c = "string" == typeof a.find && a.find == "$" + c || Array.isArray(a.find) && 0 < a.find.indexOf("$" + c);
            f = a.pickAll || "all" == a.pick || "last" == a.pick || (null == a.pick || "first" == a.pick) && 0 == f || "number" == typeof a.pick && a.pick == f || Array.isArray(a.pick) && 0 < a.pick.indexOf(f);
            return c && f
        }

        function u(a, b) {
            if (null == a) return null;
            if (null != a.el) return b;
            var c = window;
            a.topWindow && (c = window.top);
            if (a.pickAll && (Array.isArray(a.pick) || Array.isArray(a.find) || "string" === typeof a.pick && "all" === a.pick.toLowerCase().trim())) {
                var f = [],
                    d = 0,
                    g = 20,
                    h;
                Array.isArray(a.pick) ? g = a.pick.length : Array.isArray(a.find) && (g = a.find.length);
                for (var e = 0; e < g; e++)
                    if (h = Array.isArray(a.pick) ? null != S(a.find, a.pick[e], c) : Array.isArray(a.find) ? null != S(a.find[e], a.pick, c) : null != S(a.find, e, c)) h = C.extendLite({}, b), h.target = C.extendLite({}, b.target), Array.isArray(a.pick) ? h.target.pick =
                        a.pick[e] : Array.isArray(a.find) ? h.target.find = a.find[e] : h.target.pick = e, h.iteration = d, d++, f.push(h);
                b = f
            } else {
                c = null != S(a ? a.find : null, a ? a.pick : null, c);
                if (1 == a.slot || 1 == a.found) c = !0;
                if (!c) return null
            }
            return b
        }

        function U(g, e, l) {
            void 0 === l && (l = null);
            var k = {};
            null != I.zone_conditions && null != I.zone_conditions.bypassConditions && (k = I.zone_conditions.bypassConditions);
            if (null == e) return {};
            if (Array.isArray(e)) {
                k = "|";
                var n = 0;
                e.length && "|" == e[0] && (k = "|", n++);
                e.length && "&" == e[0] && (k = "&", n++);
                for (var Y = null; n < e.length; n++) {
                    var v =
                        U(g, e[n], l);
                    if (null != v && (!Array.isArray(v) || 0 < v.length)) {
                        if ("&" == k) {
                            null == Y && (Y = {});
                            Y = C.mergeObjects(Y, v);
                            continue
                        }
                        return v
                    }
                    if ("&" == k) return null
                }
                return Y
            }
            if ("object" === typeof e) {
                if (null != e.gap && !a(g, e.gap) && null == k.gap || null != e.geo && !h(e.geo) && null == k.geo) return null;
                if (n = null != e.percent) n = e.percent, n = ("string" === typeof n || "number" == typeof n) && 100 * Wa <= parseFloat(n) ? !0 : !1, n = !n;
                if (n && null == k.percent) return null;
                if (n = null != e.test) n = e.test, n = "string" === typeof n ? (new Function("return (" + n + ");")).bind(D)() ?
                    !0 : !1 : !1, n = !n;
                if (n && null == k.test) return null;
                if (n = null != e.querystring) {
                    a: {
                        n = e.querystring;
                        if ("string" === typeof n)
                            if ("~" == n[0]) {
                                if (Y = n.slice(1).split("="), v = Ja.getParameterByName(Y[0]), 2 == Y.length && null == v || v != n[0]) {
                                    n = !0;
                                    break a
                                }
                            } else if (Y = n.split("="), v = Ja.getParameterByName(Y[0]), 1 == Y.length && null != v || v == Y[1]) {
                            n = !0;
                            break a
                        }
                        n = !1
                    }
                    n = !n
                }
                if (n && null == k.param || null != e.deviceType && !b(e.deviceType) && null == k.deviceType || null != e.hash && !m(e.hash) && null == k.hash || null != e.host && !f(e.host) && null == k.host || null !=
                    e.path && !c(e.path) && null == k.path || null != e.jbStatus && !d(e.jbStatus)) return null;
                if (e.divExists || e.target) k.target ? e.target = u(k.target, k).target : e = u(e.target, e);
                if (g && (e && e.wait || g.wait) && null == g.ready || g && "init" == g.moduleState && g.initwaitdomready && !Ha) return l && (l.isWaiting = !0), null;
                null == e && null != g.target && (e = u(g.target, {
                    target: g.target
                }));
                return e
            }
            return {}
        }

        function y(a, b) {
            var c, f, d;
            void 0 === b && (b = !1);
            if (window.__tcfapi) a();
            else {
                var g = null === (d = null === (f = null === (c = H.zonedata) || void 0 === c ? void 0 : c.options) ||
                    void 0 === f ? void 0 : f.cmp) || void 0 === d ? void 0 : d.id;
                !cb && g ? (cb = !0, A("https://gdpr.privacymanager.io/1/gdpr.bundle.js", function() {
                    A("https://gdpr-wrapper.privacymanager.io/gdpr/" + g + "/gdpr-liveramp.js", function() {
                        try {
                            b ? window.__tcfapi("toggleConsentTool", 2, function() {
                                a && a()
                            }, 1) : a && a()
                        } catch (pb) {
                            E(pb.toString())
                        }
                    })
                })) : void 0 == g && E("The cmp needs a valid id. (options.cmp.id)")
            }
        }

        function da() {
            var a = C.parsedCookies().pubconsent,
                b = C.parsedCookies().euconsent;
            return a ? a : b
        }

        function V() {
            return null == H.locationData ||
                null == H.locationData.countryCode ? null : -1 == "GB DE PL FR ES NO IT IS RO SE BG GR NL HR IE CH CZ AT HU FI DK BE LI PT MT LU CY LT SK SI EE LV".split(" ").indexOf(H.locationData.countryCode) ? !1 : !0
        }

        function z() {
            var a = window.location.href,
                b = "";
            0 < a.indexOf("pwtv=") && (a = /pwtv=(.*?)(&|$)/g.exec(a), 2 <= a.length && 0 < a[1].length && (b = "/" + a[1]));
            a = document.createElement("script");
            a.async = !0;
            a.type = "text/javascript";
            a.src = "//ads.pubmatic.com/AdServer/js/pwt/160251/3268" + b + "/pwt.js";
            b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b)
        }

        function L() {
            var a, b, c, f = null === (c = null === (b = null === (a = H.zonedata) || void 0 === a ? void 0 : a.options) || void 0 === b ? void 0 : b.cmp) || void 0 === c ? void 0 : c.atsid;
            null != f && A("https://ats-wrapper.privacymanager.io/ats-modules/" + f + "/ats.js", function() {});
            hb = !0
        }

        function G(a, b, c) {
            var f, d, g;
            void 0 === b && (b = !1);
            if (null !== (g = null === (d = null === (f = H.zonedata) || void 0 === f ? void 0 : f.options) || void 0 === d ? void 0 : d.cmp) && void 0 !== g && g.atsid)
                if (b) y(a, !0);
                else {
                    if (V()) {
                        b = da();
                        if ("0" == b || "NA" == b) document.cookie =
                            "pubconsent=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
                        y(a)
                    } else document.cookie = "pubconsent=NA; expires=" + (new Date((new Date).getTime() + 6048E5)).toUTCString() + "; path=/", a && a();
                    (null == H.locationData || null == H.locationData.countryCode ? 0 : -1 != "AU DE ES FR GB IT JP NL SG US".split(" ").indexOf(H.locationData.countryCode)) && L()
                }
            else a && a()
        }

        function B(a, b) {
            null != a && (B.usp = a);
            null != b && (B.forceUsp = b);
            a = a || B.usp;
            if (b = b || B.forceUsp) return !0;
            H.zonedata.options && H.zonedata.options.cmp && null == b && null ==
                a && (a = null != a ? a : H.zonedata.options.cmp.usp, b = null != b ? b : H.zonedata.options.cmp.forceusp);
            if (b) return !0;
            b = null != H.locationData.region && "California" == H.locationData.region ? !0 : !1;
            var c = null != C.parsedCookies().usp;
            return b && a && !c
        }

        function E(a) {
            (Ma || Za) && console.log(a);
            db && db.queue.push({
                message: a,
                timestamp: (new Date).getTime()
            })
        }

        function A(a, b, c) {
            a = a.replace("%%ver%%", !Ca && D.ver ? "?ver=" + D.ver : "");
            var f = document.createElement("script");
            f.setAttribute("data-ot-ignore", "1");
            f.src = a;
            f.async = !0;
            var d = document.getElementsByTagName("head")[0],
                g = !1;
            f.onload = f.onreadystatechange = function() {
                g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, b && b(), f.onload = f.onreadystatechange = null, d.removeChild(f))
            };
            c && (f.onerror = function() {
                c()
            });
            d.appendChild(f)
        }

        function w(a, b) {
            null == b && (b = window);
            var c = R ? R.elements : null,
                f = [];
            if (c)
                for (var d = 0; d < c.length; d++)
                    if (c[d].pid == a) {
                        var g = c[d].eid,
                            h = c[d].el;
                        null == h && (h = b.document.getElementById(g));
                        h && f.push(h)
                    }
            d = (La + a).split("").reduce(function(a, b) {
                return (a << 5) - a + b.charCodeAt(0) >>>
                    0
            }, 0);
            d = (10 + 7 * d % 26).toString(36) + d.toString(36);
            c = [].slice.call(b.document.getElementsByClassName(d));
            0 < c.length || (d = (La + a).split("").reduce(function(a, b) {
                return (a << 5) - a + b.charCodeAt(0) >>> 1
            }, 0), d = (10 + 7 * d % 26).toString(36) + d.toString(36), c = [].slice.call(b.document.getElementsByClassName(d)));
            for (d = 0; d < c.length; d++) c[d] instanceof HTMLElement && f.push(c[d]);
            return f
        }

        function M(a) {
            return "undefined" != typeof CSS && "function" == typeof CSS.escape ? CSS.escape(a) : a.replace(/:/g, "\\:").replace(/\./g, "\\.")
        }

        function W(a,
            b, c, f) {
            null == c && (c = window);
            if (null == a) return [];
            null == b && (b = c.document);
            if ("$" == a[0] && "G" == a[1] && ":" == a[2]) {
                a = a.split(":")[1];
                c = [];
                var d = window.googletag;
                if (d && d.pubads && "function" === typeof d.pubads) {
                    for (var g = d.pubads().getSlots(), h = [], e = 0; e < g.length; e++) {
                        var l = g[e],
                            m = l.getAdUnitPath(),
                            n = l.getSlotElementId(),
                            k = l.getSizes();
                        b.querySelector("#" + M(n));
                        if ("#" == a[0] && n == a.slice(1)) h.push(l), za.push({
                            id: n,
                            path: m,
                            sizes: k
                        });
                        else if (2 == a.split("x").length) {
                            for (var u = a.split("x"), v = !1, r = 0; r < k.length; r++)
                                if (k[r].l ==
                                    u[0] && k[r].j == u[1] || k[r].width == u[0] && k[r].height == u[1]) {
                                    v = !0;
                                    break
                                }
                            v && (h.push(l), za.push({
                                id: n,
                                path: m,
                                sizes: k
                            }))
                        }
                    }
                    f && d.destroySlots(h);
                    for (e = 0; e < za.length; e++)
                        if ("#" == a[0] && za[e].path == a.slice(1))(f = b.querySelector("#" + M(za[e].id))) && c.push(f);
                        else if (2 == a.split("x").length) {
                        u = a.split("x");
                        v = !1;
                        k = za[e].sizes;
                        for (r = 0; r < k.length; r++)
                            if (k[r].l == u[0] && k[r].j == u[1] || k[r].width == u[0] && k[r].height == u[1]) {
                                v = !0;
                                break
                            }
                        v && (f = b.querySelector("#" + M(za[e].id))) && c.push(f)
                    }
                    return c
                }
            } else {
                if ("$" == a[0]) return w(a.slice(1),
                    c);
                b = b.querySelectorAll(a);
                return null != b ? [].slice.call(b) : []
            }
        }

        function S(a, b, c, f) {
            var d = null;
            (a = W(a, null, c, f)) && 0 <= a.length && (null == b || "first" == b ? d = a[0] : "last" == b ? d = a[a.length - 1] : "number" === typeof b && b < a.length && (d = a[Math.floor(b)]));
            return d
        }

        function P(a) {
            for (var b = [], c = 0; c < a.length; c++) a[c].width && a[c].height ? b.push([a[c].width, a[c].height]) : b.push([a[c][0], a[c][1]]);
            return b
        }

        function oa(a, b) {
            void 0 === b && (b = null);
            a && (Ta = a);
            var c = window.googletag = window.googletag || {
                cmd: []
            };
            a = Aa.gptStatus;
            Aa.gptStatus =
                b ? ja.ROADBLOCK : ja.DETECTING;
            if (a == ja.DETECTING) {
                if (Aa.gptStatus == ja.ROADBLOCK)
                    for (var f in Object.keys(c)) a = c[f], "destroySlot" != f && "defineSlot" != f && "function" === typeof a && (c[a] = function() {})
            } else a == ja.NONE && c.cmd.push(function() {
                Aa.gptStatus == ja.ROADBLOCK && (c.cmd = []);
                c.cmd.push = function(a) {
                    try {
                        a()
                    } catch (vb) {}
                };
                var a = c.pubads ? c.pubads() : null;
                if (c.pubadsReady && a && a.getSlots) {
                    a = a.getSlots();
                    for (var f = 0; f < a.length; f++) {
                        var d = a[f],
                            g = d.getAdUnitPath(),
                            h = d.getSlotElementId();
                        d = P(d.getSizes());
                        g = new ib(g,
                            d, h);
                        na.push(g);
                        Ka[h] = g;
                        g.go(b)
                    }
                }
                if (Aa.gptStatus == ja.ROADBLOCK)
                    for (var e in Object.keys(c)) a = c[e], "destroySlot" != e && "defineSlot" != e && "function" === typeof a && (c[a] = function() {});
                var l = c.defineSlot;
                c.defineSlot = function(a, c, f) {
                    var d = Array.isArray(c[0]) ? c : [c];
                    d = new ib(a, d, f);
                    na.push(d);
                    Ka[f] = d;
                    d.go(b);
                    return Aa.gptStatus != ja.ROADBLOCK ? l(a, c, f) : d
                };
                var m = c.destroySlot;
                c.destroySlot = function(a) {
                    Aa.gptStatus != ja.ROADBLOCK && m(a);
                    if (Array.isArray(a))
                        for (var b = 0; b < a.length; b++) {
                            var c = a[b].getSlotElementId();
                            Ka[c] && delete Ka[c];
                            for (var f = 0; f < na.length; f++)
                                if (na[f].getSlotElementId() == c) {
                                    na.splice(f, 1);
                                    break
                                }
                        } else Ka = {}, na = []
                }
            })
        }
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        var C = p("./src/zonemasters/utils.ts"),
            Z = p("./src/zonemasters/requests/starbannerrequest.ts"),
            K = p("./src/zonemasters/requests/starjsonrequest.ts"),
            ea = p("./src/zonemasters/requests/headerbiddingrequest.ts"),
            Q = p("./src/zonemasters/requests/editorialrequest.ts"),
            N = p("./src/zonemasters/requests/skinrequest.ts"),
            qa = p("./src/zonemasters/components/supercomponent.ts"),
            ya = p("./src/zonemasters/components/bannercomponent.ts"),
            O = p("./src/zonemasters/components/editorial.ts"),
            F = p("./src/zonemasters/components/onrpghotbox.ts"),
            T = p("./src/zonemasters/components/instreamvideo.ts"),
            ta = p("./src/zonemasters/components/scriptcomponent.ts"),
            J = p("./src/zonemasters/components/siteskin.ts"),
            la = p("./src/zonemasters/components/createjscomponent.ts"),
            ra = p("./src/zonemasters/superclasses/basic/componentregistry.ts"),
            sa = p("./src/zonemasters/components/segmentedvideo.ts"),
            ua = p("./node_modules/detect-gpu/dist/detect-gpu.esm.js"),
            Ba = p("./src/zonemasters/data/steam.ts"),
            I = window,
            fa = null,
            ha = "",
            ka = "",
            ia = "",
            pa = "",
            ca = null;
        try {
            fa = window.top.location, ha = fa.href, ka = fa.hash, ia = fa.pathname, pa = fa.host
        } catch (Y) {
            var X = window;
            try {
                for (; X.parent && X.parent.document !== X.document && X.parent.document.location.href;) X = X.parent
            } catch (nb) {}
            var ma = "";
            try {
                var aa = X.location.ancestorOrigins;
                ma = aa[aa.length - 1];
                ha = X.location.href
            } catch (nb) {
                ma = X.document.referrer, ha = X.location.href
            }
            t();
            ia = null == (ca = ma.match(/^http[s]?:\/\/[^\/]+(\/[^\?]+)/)) ? "/" : ca[1];
            pa = null == (ca = ma.match(/^http[s]?:\/\/([^\/]+)/)) ? "" : ca[1];
            ma.match(/^https:/)
        }
        ka || t();
        var Ea = function(a, b) {
                a = a.split("").reduce(function(a, c) {
                    return (a << 5) - a + c.charCodeAt(0) >>> b
                }, 0);
                return (10 + 7 * a % 26).toString(36) + a.toString(36)
            },
            La = window.location.href.split("#")[0],
            Va = Ea(La, 1),
            R = window.cpmstarx || window[Va];
        R.zonevars.blueprints = {};
        var D = R.zonevars,
            Ca = "#cpmstarDev" == ka,
            gb = "#cpmstarStaging" == ka || "#urlzing" == ka,
            Ma = Ca || gb,
            Na = "cdn",
            Oa = "http:" == document.location.protocol ? "http:" : "https:";
        Ca ? Na = "dev.server" :
            gb ? Na = "staging.server" : "https:" == Oa && (Na = "ssl.cdne");
        var Wa = Math.random(),
            va = Oa + "//" + Na + ".cpmstar.com",
            Fa = Oa + "//server.cpmstar.com",
            Xa = D.jbcheck ? D.jbcheck.host : "",
            Pa = Xa.split("").reduce(function(a, b) {
                return (a << 5) - a + b.charCodeAt(0) >>> 1
            }, 0).toString(36),
            Qa = "0",
            Ya = !1;
        try {
            sessionStorage && sessionStorage.getItem(Pa) ? sessionStorage.getItem(Pa) : "0"
        } catch (Y) {
            Qa = "0"
        }
        var Ga = null,
            Ha = !1,
            Za = "#cpmstarLog" == ka,
            $a = {},
            wa = {},
            mb = {
                banner: Z.default,
                json: K.default,
                hb: ea.default,
                video: K.default,
                editorial: Q.default,
                skin: N.default
            },
            Ia = {
                banner: ya.default,
                editorial: O.default,
                carousel: F.default,
                video: T.default,
                script: ta.default,
                skin: J.default,
                jsskin: la.default({
                    fixed: "2",
                    centerWidth: "988px",
                    top: "128px",
                    footerHeight: 300,
                    stickyPadding: "10px"
                }, "create_cpmstar_siteskin"),
                anchor: la.default({
                    dir: 1
                }, "create_cpmstar_anchorad"),
                montage: sa.default
            },
            ab = ra.default.GetComponentRegistry();
        Ia = C.mergeObjects(Ia, ab);
        for (var jb = Object.keys(Ia), eb = 0; eb < jb.length; eb++) {
            var kb = jb[eb];
            ra.default.RegisterComponent(kb, Ia[kb])
        }
        var bb = {},
            Da, Ra = "android;blackberry;ipad;iphone;ipod;mobile;nokia;symbian;windows phone".split(";"),
            ob = ["windows", "macintosh", "linux"],
            db = void 0;
        Ca && (I.cpmstarAPI = v);
        var fb = R.cmd = R.cmd || [],
            ba, cb = !1,
            hb = !1,
            lb = null,
            Ua = !1,
            xa = {
                country: function(a) {
                    var b = window.document.location.host,
                        c = Math.floor(10 + 26 * Math.random()).toString(36) + Math.floor(99999999 * Math.random()).toString(36);
                    A("https://server.cpmstar.com/country.aspx?cache=true&referer=" + encodeURIComponent(b) + "&callback=" + c, function() {});
                    window[c] = function(b) {
                        if (b.rt)
                            if (b.rt["0_62"]) Ua = !0;
                            else if (b.rt["0_58"]) Ua = !1;
                        else try {
                            ua.getGPUTier({
                                benchmarksURL: va +
                                    "/cached/zonemasters/marks"
                            }).then(function(a) {
                                if (lb = a)(Ua = Ba.isSteamGPU(lb.gpu)) ? A(Fa + "/tag.aspx?a=0_0176D4A8&group=62") : A(Fa + "/tag.aspx?a=0_0176D4A8&group=58")
                            })
                        } catch (tb) {
                            A(Fa + "/tag.aspx?a=0_0176D4A8&group=58")
                        } else Ua = !1;
                        var c = !1;
                        H.locationData = b;
                        H.zonedata.options && (b = H.zonedata.options, "object" == typeof b.cmp && null != b.cmp.force && (c = b.cmp.force));
                        D.options && D.options.pubmaticid && z();
                        null != D.options && D.options.cmp && ("object" != typeof D.options.cmp || null == D.options.cmp.showcmp || D.options.cmp.showcmp) &&
                            G(function() {}, c);
                        a()
                    }
                },
                blockthrough: function(a) {
                    window.addEventListener("AcceptableAdsInit", function(a) {
                        a.detail && (Ya = !0)
                    });
                    A("https://btloader.com/tag?o=5754235751759872&upapi=true", a)
                },
                lib: function(a) {
                    A(va + "/cached/js/lib.js", a)
                },
                anchor: function(a) {
                    I.cpmstar_anchorad_settings = {
                        manualInit: !0
                    };
                    Ca ? A(va + "/cached/zonemasters/anchorad_v100.js%%ver%%", function() {
                        I.cpmstar_anchorad_settings.manualInit = !1;
                        a()
                    }) : A(va + "/cached/js/anchorad_v100.pack.js%%ver%%", function() {
                        I.cpmstar_anchorad_settings.manualInit = !1;
                        a()
                    })
                },
                dot: function(a) {
                    A(va + "/cached/zonemasters/lib/doT.js", a)
                },
                siteskin: function(a) {
                    I.cpmstar_siteskin_settings = {
                        manualInit: !0
                    };
                    A(va + "/cached/zonemasters/siteskin.js%%ver%%", function() {
                        I.cpmstar_siteskin_settings.manualInit = !1;
                        a()
                    })
                },
                jquery: function(a) {
                    "undefined" == typeof I.jQuery ? A("//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js", function() {
                        "undefined" !== typeof I.jQuery && (Da = I.jQuery.noConflict(), a())
                    }) : (Da = I.jQuery, a())
                },
                ima: function(a) {
                    "undefined" != typeof I.google && "undefined" !=
                        typeof I.google.ima || A("//imasdk.googleapis.com/js/sdkloader/ima3.js", a)
                }
            },
            qb = {
                editorial: ["dot"],
                carousel: ["dot", "jquery"],
                video: [],
                skin: ["siteskin"],
                jsskin: ["siteskin"],
                anchor: ["anchor"]
            },
            rb = {
                editorial: ["dot"],
                skin: ["siteskin", "dot"],
                banner: ["lib"],
                hb: ["lib"]
            },
            Sa = function(a) {
                function b() {
                    for (var b = 0; b < R.apis.length; b++) $a[R.apis[b].name] = R.apis[b].api;
                    a(self)
                }

                function c() {
                    d++;
                    d == g && b()
                }

                function f(a, b) {
                    var f = function() {
                        var c = C.deepClone(D.blueprints[a.blueprint]);
                        C.extendLite(a, C.mergeObjectsWithConditions(c,
                            a));
                        a.blueprintloaded = !0;
                        b()
                    };
                    D.blueprints && D.blueprints[a.blueprint] ? f() : (g++, A(va + "/cached/zonemasters/blueprints/" + a.blueprint + ".js%%ver%%", function() {
                        f();
                        c()
                    }))
                }
                for (var d = 0, g = 0, h = 0; h < R.zonevars.zonemasters.length; h++) R.zonevars.zonemasters[h].api && g++;
                R.apis = R.apis || [];
                for (h = 0; h < R.apis.length; h++) d++;
                var e = R.apis.push;
                R.apis.push = function(a) {
                    e.call(R.apis, a);
                    c()
                };
                A(atob("Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM="), function() {
                        E("successfully loaded adsbygoogle")
                    },
                    function() {
                        Ya = !0
                    });
                null == xa.country.used && (g++, xa.country(c), xa.country.used = !0);
                D.requests && D.requests.hb && D.requests.hb.GAM && D.requests.hb.blockthrough && null == xa.blockthrough.used && (g++, xa.blockthrough(c), xa.blockthrough.used = !0);
                if (D.modules) {
                    var l = function(a) {
                            var b = D.modules[a];
                            b && (a = function() {
                                var a = qb[b.kind];
                                if (a)
                                    for (var f = 0; f < a.length; f++) {
                                        var d = xa[a[f]];
                                        null == d.used && (d.used = !0, g++, d(c))
                                    }
                            }.bind(m), b.blueprint && null == b.blueprintloaded ? f(b, a) : a())
                        },
                        m = this;
                    for (h = 0; h < D.modules.length; h++) l(h)
                }
                g ==
                    d && b()
            },
            sb = function() {
                return function() {
                    this.queue = [];
                    var a = this,
                        b = (Va + (Wa * Math.pow(10, 16)).toString(16) + (new Date).getTime().toString(16)).substring(0, 32),
                        c = r() ? "mobile" : "desktop",
                        f = D.info ? D.info.id : 0;
                    window.addEventListener("visibilitychange", function() {
                        var d = a.queue;
                        if (0 < d.length) {
                            a.queue = [];
                            var g = new FormData;
                            g.append("zoneid", f);
                            g.append("sessionid", b);
                            g.append("host", window.location.host);
                            g.append("path", window.location.pathname);
                            g.append("device", c);
                            g.append("browser", window.navigator.userAgent);
                            g.append("logs", JSON.stringify(d));
                            navigator.sendBeacon("https://errors.cpmstar.com", g)
                        }
                    })
                }
            }(),
            za = [],
            ja;
        (function(a) {
            a[a.NONE = 0] = "NONE";
            a[a.DETECTING = 1] = "DETECTING";
            a[a.ROADBLOCK = 2] = "ROADBLOCK"
        })(ja || (ja = {}));
        var Aa = {
                gptStatus: ja.NONE
            },
            Ta = {},
            na = [],
            Ka = {},
            ib = function() {
                function a(b, c, f) {
                    this.kv = {};
                    this.targeting = {};
                    this.display = !1;
                    this.numdisplays = 0;
                    this.slotName = b;
                    this.divId = f;
                    this.divSelector = "undefined" != typeof CSS && "function" == typeof CSS.escape ? "#" + CSS.escape(this.divId) : "#" + this.divId.replace(/:/g,
                        "\\:").replace(/\./g, "\\.");
                    this.sizes = c = c.sort(function(a, b) {
                        a = a[0] * a[1];
                        b = b[0] * b[1];
                        return a > b ? -1 : a == b ? 0 : 1
                    });
                    for (b = 0; b < c.length && !(this.modulename = a.getModuleForSize(c[b])); b++);
                }
                a.prototype.addService = function() {};
                a.prototype.clearCategoryExclusions = function() {};
                a.prototype.clearTargeting = function(a) {};
                a.prototype.defineSizeMapping = function(a) {};
                a.prototype.get = function(a) {
                    return this.kv[a]
                };
                a.prototype.getAdUnitPath = function() {
                    return this.slotName
                };
                a.prototype.getAttributeKeys = function() {};
                a.prototype.getCategoryExclusions =
                    function() {};
                a.prototype.getResponseInformation = function() {};
                a.prototype.getSlotElementId = function() {
                    return this.divId
                };
                a.prototype.getTargeting = function(a) {};
                a.prototype.getTargetingKeys = function() {};
                a.prototype.set = function(a, b) {
                    this.kv[a] = b
                };
                a.prototype.setCategoryExclusion = function(a) {};
                a.prototype.setClickUrl = function(a) {};
                a.prototype.setCollapseEmptyDiv = function(a, b) {};
                a.prototype.setForceSafeFrame = function(a) {};
                a.prototype.setSafeFrameConfig = function(a) {};
                a.prototype.setTargeting = function(a,
                    b) {};
                a.prototype.updateTargetingFromMap = function(a) {};
                a.prototype.destroy = function() {};
                a.gptSizeToString = function(a) {
                    var b = 0,
                        c = 0;
                    a.width && a.height ? (b = a.width, c = a.height) : a[0] && a[1] && (b = a[0], c = a[1]);
                    return b + "x" + c
                };
                a.getModuleForSize = function(b) {
                    b = a.gptSizeToString(b);
                    return Ta[b] ? Ta[b] : ""
                };
                a.prototype.go = function(a) {
                    void 0 === a && (a = null);
                    if (this.modulename && this.divId) {
                        if (0 <= this.divId.toLowerCase().indexOf("footer")) return;
                        0 == this.numdisplays ? v({
                            kind: "go",
                            module: this.modulename,
                            config: {
                                options: {
                                    roadblock: a
                                },
                                conditions: {
                                    target: {
                                        find: this.divSelector,
                                        kind: "replace"
                                    }
                                }
                            }
                        }) : v({
                            kind: "refresh",
                            module: this.modulename
                        })
                    }
                    this.numdisplays++
                };
                return a
            }(),
            Ja = function() {
                function a() {
                    this.$ = Da;
                    this.modulemap = wa;
                    this.drut = Va;
                    this.proto = Oa;
                    this.serverroot = Fa;
                    this.cdnroot = va;
                    this.zonedata = D;
                    this.requestTypes = mb;
                    this.requestInstances = bb;
                    this.requestDeps = rb;
                    this.deps = xa;
                    this.debug = Ma;
                    this.locationData = {
                        oo: void 0,
                        dm: void 0,
                        bd: void 0,
                        countryName: void 0,
                        countryCode: void 0,
                        region: void 0,
                        city: void 0,
                        ip: void 0,
                        rt: void 0
                    };
                    this.coppa = !1;
                    this.startTime = null
                }
                a.prototype.eventCallback = function(a) {
                    var b = this,
                        c = void 0;
                    if ("function" === typeof a) c = a;
                    else if ("string" === typeof a) c = Function.call(null, a);
                    else if (Array.isArray(a)) c = function() {
                        a.forEach(function(a) {
                            b.eventCallback(a).call(null)
                        })
                    };
                    else if ("object" == typeof a && a.kind && a.module) c = b.api.bind(null, a);
                    else throw Error("The event callback is not a valid type.");
                    return c
                };
                a.prototype.api = function(a) {
                    v(a)
                };
                a.prototype.getTopPageUrl = function() {
                    return ha
                };
                a.prototype.getTopHost = function() {
                    return pa
                };
                a.getParameterByName = function(b) {
                    a.query || (a.query = window.location.search.substr(1).split("&").reduce(function(a, b) {
                        b = b.split("=").map(decodeURIComponent);
                        b[1] && (a[b[0]] = b[1]);
                        return a
                    }, {}));
                    return a.query[b]
                };
                a.prototype.getTimeElapsed = function() {
                    return (new Date).getTime() - this.startTime
                };
                a.prototype.isDomReady = function() {
                    return Ha
                };
                a.prototype.getDeviceType = function() {
                    return q()
                };
                a.prototype.getIP = function() {
                    return this.locationData.ip ? this.locationData.ip : ""
                };
                a.prototype.isMobile = function() {
                    return r()
                };
                a.prototype.isDesktop = function() {
                    return g()
                };
                a.prototype.isOptedOut = function() {
                    var a = null == H.locationData ? !1 : H.locationData.oo ? !0 : !1;
                    return a
                };
                a.prototype.getCountryCode = function() {
                    var a = null == H.locationData ? "--" : H.locationData.countryCode;
                    return a
                };
                a.prototype.isUserInUS = function() {
                    return null == H.locationData ? !1 : "US" == H.locationData.countryCode ? !0 : !1
                };
                a.prototype.isUserInCA = function() {
                    return null == H.locationData ? !1 : "US" == H.locationData.countryCode && "California" == H.locationData.region ? !0 : !1
                };
                a.prototype.isUserInEU =
                    function() {
                        return V()
                    };
                a.prototype.isPubConsentGlobal = function() {
                    var a = C.parsedCookies().pubconsent,
                        b = C.parsedCookies().euconsent;
                    return !a && b ? !0 : !1
                };
                a.prototype.getPubConsent = function() {
                    return da()
                };
                a.prototype.getRand = function() {
                    return Wa
                };
                a.prototype.isATSLoaded = function() {
                    return hb
                };
                a.prototype.isCMPLoaded = function() {
                    return !(!cb && !window.__tcfapi)
                };
                a.prototype.isAdBlockerOn = function() {
                    return d("1")
                };
                a.prototype.init = function() {
                    var b = this;
                    b.startTime = (new Date).getTime();
                    b.log = E;
                    b.debug && (b.forcecampaigngroupid =
                        a.getParameterByName("forcecampaigngroupid"));
                    D.options && D.options.errorPercent && Math.floor(100 * Math.random()) <= D.options.errorPercent && (db = new sb);
                    b.zonedata && b.zonedata.options && b.zonedata.options.coppa && (H.coppa = !0);
                    b.zonedata && b.zonedata.options && b.zonedata.options.referrerRevshare && (b.zonedata.zone_referrer = a.getParameterByName("zone_referrer"), b.zonedata.zone_referrer && document.body.addEventListener("click", function(a) {
                        a = a || event;
                        var b;
                        a: {
                            for (b = a.target || a.srcElement; b;) {
                                if ("a" == (b.nodeName ||
                                        b.tagName).toLowerCase()) break a;
                                b = b.parentNode
                            }
                            b = null
                        }
                        b && b.href && 0 > b.href.indexOf("cpmstar.com") && (!Xa || 0 > b.href.indexOf(Xa)) && a.preventDefault()
                    }));
                    Sa(function() {
                        var c, f;
                        b.zonedata.options && b.zonedata.options.gpt && oa({});
                        for (ba = function(a, c, f) {
                                var d, g, h;
                                n();
                                var e = f ? f.cb : function() {},
                                    l = f ? f.fail : null,
                                    m = null === (d = null === a || void 0 === a ? void 0 : a.events) || void 0 === d ? void 0 : d.fail,
                                    k = l,
                                    u = null;
                                m && (u = m ? b.eventCallback(m) : null, k = function() {
                                    u && u(null);
                                    l && l()
                                });
                                try {
                                    Qa = sessionStorage && sessionStorage.getItem(Pa) ?
                                        sessionStorage.getItem(Pa) : "0"
                                } catch (wb) {
                                    Qa = "0"
                                }
                                d = window.zone_conditions;
                                if (null == d || U(null, window.zone_conditions))
                                    if (null == D.conditions || null != d && null != d.bypassConditions || U(null, D.conditions)) {
                                        d = D.modules;
                                        a && (d = [a]);
                                        for (var v = 0; v < d.length; v++) {
                                            var r = d[v];
                                            if (null == a || r == a)
                                                if (null != a || 1 != r.ran) {
                                                    if (m = null === (g = null === r || void 0 === r ? void 0 : r.events) || void 0 === g ? void 0 : g.fail) u = m ? b.eventCallback(m) : null, k = function() {
                                                        u && u(null);
                                                        l && l()
                                                    };
                                                    if (f && f.once && r.ran) {
                                                        if (1 == d.length && a == r) {
                                                            l && l();
                                                            break
                                                        }
                                                    } else {
                                                        var q = {
                                                                isWaiting: !1
                                                            },
                                                            p = U(r, r.conditions, q);
                                                        if (null == p) {
                                                            k && !q.isWaiting && k();
                                                            if (1 == d.length && a == r) break;
                                                            E("Failed to match conditions for module: " + r.info.name)
                                                        } else {
                                                            Array.isArray(p) || "object" !== typeof p || (p = [p]);
                                                            q = function(a) {
                                                                var d = !r.ran;
                                                                r.ran = !0;
                                                                r = C.extendLite({}, r);
                                                                r = C.extendLite(r, p[a]);
                                                                if (m = null === (h = null === r || void 0 === r ? void 0 : r.events) || void 0 === h ? void 0 : h.fail) u = m ? b.eventCallback(m) : null, k = function() {
                                                                    u && u(null);
                                                                    l && l()
                                                                };
                                                                (function(a) {
                                                                    if (a.kind) {
                                                                        var g = Ia[a.kind];
                                                                        null == g && (g = qa.default);
                                                                        var h = function(h) {
                                                                            b.$ =
                                                                                h;
                                                                            a.js = new g(b, a);
                                                                            wa[f && null != f.id ? f.id : a.info.name] = a;
                                                                            a.js.create();
                                                                            h = function(a) {
                                                                                a && a()
                                                                            };
                                                                            a.options && a.options.refreshrate && !1 !== a.options.autorefresh && d && a.js.startRefreshTimer(h);
                                                                            null == c && a.moduleState && (c = a.moduleState, a.moduleState = null);
                                                                            if ("create" == c) e(a.js.request.bind(a.js));
                                                                            else if ("request" == c) a.js.request(e ? e : h, k);
                                                                            else if ("init" == c) {
                                                                                var l = !0;
                                                                                if (a.target && 1 == a.target.slot && a.options && a.options.width && a.options.height) {
                                                                                    l = !1;
                                                                                    for (var m = 0; m < na.length; m++)
                                                                                        for (var n = 0; n < na[m].sizes.length; n++)
                                                                                            if (na[m].sizes[n][0] ==
                                                                                                a.options.width && na[m].sizes[n][1] == a.options.height) {
                                                                                                l = !0;
                                                                                                break
                                                                                            }
                                                                                }
                                                                                l && a.js.init(a.js, a.js.res, h)
                                                                            } else a.js.request(h, k)
                                                                        };
                                                                        Da ? I.jQuery(h) : h(null)
                                                                    }
                                                                })(r)
                                                            };
                                                            for (var t = 0; t < p.length; t++) q(t)
                                                        }
                                                    }
                                                }
                                        }
                                    } else k && k();
                                else k && k()
                            }; fb.length;) {
                            var d = fb.shift();
                            v(d)
                        }
                        fb.push = v;
                        "undefined" === typeof I.cpmstarAPI && (I.cpmstarAPI = v);
                        if (b.debug) {
                            d = 0;
                            var g = a.getParameterByName("commanddelay");
                            g && (d = parseInt(g));
                            var h = a.getParameterByName("gomodule"),
                                e = a.getParameterByName("cpmstarcommand");
                            h && setTimeout(function() {
                                I.cpmstarAPI({
                                    kind: "go",
                                    module: h
                                })
                            }, d);
                            e && setTimeout(function() {
                                I.cpmstarAPI({
                                    kind: e
                                })
                            }, d);
                            var l = null !== (c = parseInt(a.getParameterByName("scroll_from"))) && void 0 !== c ? c : 0;
                            if (l) {
                                var m = null !== (f = parseInt(a.getParameterByName("scroll_to"))) && void 0 !== f ? f : l + 1E3,
                                    k = (l + m) / 2;
                                window.scrollTo({
                                    top: l,
                                    left: 0,
                                    behavior: "auto"
                                });
                                setInterval(function() {
                                    window.scrollTo({
                                        top: window.scrollY < l + 10 ? k : window.scrollY < m ? m : l,
                                        left: 0,
                                        behavior: "smooth"
                                    })
                                }, 2E3)
                            }
                        }
                        c = "" + document.readyState;
                        if ("complete" === c || "loaded" === c || "interactive" === c) Ha = !0;
                        Da ? Da(document).ready(function() {
                            Ha = !0;
                            ba()
                        }) : (document.addEventListener("DOMContentLoaded", function(a) {
                            Ha = !0;
                            ba()
                        }), ba())
                    })
                };
                a.prototype.log = function(a) {
                    E(a)
                };
                a.prototype.getScript = function(a, b) {
                    return A(a, b)
                };
                a.prototype.pickEl = function(a, b, c, f) {
                    return S(a, b, c, f)
                };
                a.prototype.getPidEls = function(a, b) {
                    return w(a, b)
                };
                a.prototype.findEls = function(a, b, c) {
                    return W(a, b, c)
                };
                a.prototype.getModuleByPath = function(a) {
                    a: {
                        for (var b = Object.keys(wa), c = 0; c < b.length; c++) {
                            var f = wa[b[c]];
                            if (f.adUnitPath == a) {
                                a = f;
                                break a
                            }
                        }
                        a = null
                    }
                    return a
                };
                a.prototype.addToSizeModuleMap =
                    function(a, b, c) {
                        Ta[a + "x" + b] = c
                    };
                a.query = null;
                return a
            }(),
            H = new Ja;
        H.init()
    },
    "./src/zonemasters/requests/editorialrequest.ts": function(e, k, p) {
        var t = this && this.__extends || function() {
            var g = function(b, e) {
                g = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, a) {
                    b.__proto__ = a
                } || function(b, a) {
                    for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d])
                };
                return g(b, e)
            };
            return function(b, e) {
                function d() {
                    this.constructor = b
                }
                g(b, e);
                b.prototype = null === e ? Object.create(e) : (d.prototype = e.prototype, new d)
            }
        }();
        Object.defineProperty(k,
            "__esModule", {
                value: !0
            });
        var q = p("./src/zonemasters/requests/superrequest.ts"),
            r = p("./src/zonemasters/utils.ts");
        e = function(g) {
            function b(b) {
                return g.call(this, b) || this
            }
            t(b, g);
            b.prototype.getMacroMaps = function() {
                return []
            };
            b.prototype.convertCreative = function(b, d) {
                var a = this,
                    g = this.getMacroMaps()[d];
                if (g) {
                    var f = Object.keys(g);
                    for (d = 0; d < f.length; d++) {
                        var c = f[d];
                        b[c] = g[c]
                    }
                }
                b.getLink = function() {
                    return this.click
                }.bind(b);
                b.getTitle = function() {
                    return null == this.creativemacros.TITLE ? null : r.from_utf8(this.creativemacros.TITLE)
                }.bind(b);
                b.getDescription = function(b, c, f, d) {
                    var g = a.getCtx();
                    d ? (b = getComputedStyle(d), b.fontSize && b.fontFamily && (g.font = b.fontSize + " " + b.fontFamily), b = d.offsetWidth - (parseFloat(b.paddingLeft) + parseFloat(b.paddingRight)) - (parseFloat(b.borderLeftWidth) + parseFloat(b.borderRightWidth))) : g.font = "6px Arial";
                    d = this.creativemacros.DESC300 ? r.from_utf8(this.creativemacros.DESC300) : null;
                    var h = this.creativemacros.DESC ? r.from_utf8(this.creativemacros.DESC) : null;
                    h = (d ? d : h ? h : "").split("<br");
                    for (var e = [], l = 0; l < h.length; l++) d =
                        h[l], d = d.trim(), "/" == d[0] && ">" == d[1] && (d = d.slice(2)), d = d.trim(), 0 < d.length && e.push(d);
                    h = "";
                    var m = 0;
                    for (l = 0; l < e.length; l++) {
                        d = e[l];
                        var k = g.measureText(d).width;
                        k = Math.ceil(k / b);
                        if (1 <= m && m + k > c) break;
                        m += k;
                        if (null != f && h.length + d.length > f) {
                            c = !1;
                            if ("false" !== a.config.options.endOnPunctuation)
                                for (g = f - 1; g >= Math.ceil(f / 1.5); g--)
                                    if (" " == d[g] && ("!" == d[g - 1] || "." == d[g - 1] || "?" == d[g - 1])) {
                                        c = !0;
                                        h += d.slice(0, g);
                                        break
                                    }
                            c || (h += d.slice(0, f - h.length - 3) + "...");
                            break
                        } else h += d + "<br/>"
                    }
                    return h
                }.bind(b);
                b.getMaxLength = function(a,
                    b) {}.bind(b);
                b.availImages = [];
                g = Object.keys(b.creativemacros);
                for (d = 0; d < g.length; d++) {
                    f = g[d];
                    c = null;
                    if ("IMAGE" == f.slice(0, 5)) c = f.slice(5).split("X");
                    else if ("BANNER" == f.slice(0, 6)) c = f.slice(6).split("X");
                    else continue;
                    c && 2 == c.length && b.availImages.push({
                        width: c[0],
                        height: c[1],
                        url: b.creativemacros[f]
                    })
                }
                b.closestAspect = function(a, b, c) {
                    if (0 == c.length) return {
                        url: "",
                        width: a,
                        height: b
                    };
                    for (var f = a / b, d = -1, g = 0; 4 > g && -1 == d; g++)
                        for (var h = 0, e = 0; e < c.length; e++)
                            if (!(a > 2 * c[e].width || a < c[e].width / 2 || b > 2 * c[e].height ||
                                    a < c[e].height / 2)) {
                                var l = c[e].width / c[e].height / f;
                                1 < l && (l = 1 / l);
                                l > h && (h = l, d = e)
                            } - 1 == d && (d = 0);
                    return c[d]
                };
                b.getImageUrl = function(a, c) {
                    return b.closestAspect(a, c, b.availImages).url
                }
            };
            b.prototype.getCtx = function() {
                this.ctx || (this.ctxCanvas = document.createElement("canvas"), this.ctx = this.ctxCanvas.getContext("2d"));
                return this.ctx
            };
            b.prototype.makeAttempt = function(b) {
                g.prototype.makeAttempt.call(this, b);
                var d = this,
                    a = Math.floor(10 + 26 * Math.random()).toString(36) + Math.floor(99999999 * Math.random()).toString(36),
                    h = this.getViewAspxBaseUrl();
                h += "poolid=" + this.config.poolid + "&json=" + this.config.json + "&callback=" + a;
                this.config.multi && (h += "&multi=" + this.config.multi);
                this.config.requiredmacros && (h += "&requiredmacros=" + this.config.requiredmacros);
                d.mm.getScript(h);
                window[a] = function(a) {
                    var c = a.creatives;
                    if (null != c && 0 != c.length) {
                        var f = {
                            getAdTypeAvailable: function(a) {
                                return "editorial"
                            },
                            renderAd: function(b, f, g, h) {
                                null == h && (h = {});
                                d.creatives = c;
                                var e = d.config.options,
                                    l = window.innerWidth < window.innerHeight ? window.innerWidth :
                                    window.innerHeight;
                                l = e.descriptionPixelWidth ? e.descriptionPixelWidth : l;
                                var m = e.maxDescriptionLines ? e.maxDescriptionLines : 1,
                                    k = e.descriptionLength ? e.descriptionLength : 120,
                                    n = b.iteration ? b.iteration : 0;
                                e.capIsCalculated || (h.renderCount ? e.cap = Math.floor(a.creatives.length / h.renderCount) : this.getMacroMaps().length && (e.cap = Math.floor(a.creatives.length) / this.getMacroMaps().length), e.capIsCalculated = !0);
                                var u = e.cap ? e.cap : a.creatives ? a.creatives.length : 20,
                                    v = [];
                                if (a.creatives) {
                                    var p = n % a.creatives.length;
                                    null !=
                                        h.renderIndex && (p = u * h.renderIndex);
                                    for (n = p; n < a.creatives.length && n < p + u; n++) {
                                        var t = a.creatives[n];
                                        this.convertCreative(t, h.renderIndex);
                                        t.thumbUrl = t.getImageUrl(e.thumbWidth, e.thumbHeight);
                                        t.imageUrl = t.getImageUrl(e.imageWidth, e.imageHeight);
                                        t.description = t.getDescription(l, m, k);
                                        t.title = t.getTitle();
                                        t.clickUrl = t.getLink();
                                        null == t.title ? (a.creatives.splice(n, 1), n--) : (v.push(a.creatives[n]), n + 1 >= a.creatives.length && v.length < u && (n = -1, p = 0, u -= v.length))
                                    }
                                }
                                b.creatives = v;
                                if (d.config.style)
                                    for (h = Object.keys(d.config.style),
                                        n = 0; n < h.length; n++) u = h[n], f.style[u] = d.config.style[u];
                                if (d.config.pageStyle)
                                    for (h = Object.keys(d.config.pageStyle), n = 0; n < h.length; n++)
                                        for (u = h[n], v = d.mm.findEls(u), p = Object.keys(d.config.pageStyle[u]), t = 0; t < v.length; t++)
                                            for (var x = v[t], w = 0; w < p.length; w++) {
                                                var M = p[w];
                                                x.style[M] = d.config.pageStyle[u][M]
                                            }
                                null != f && (n = "", h = window.doT, "undefined" !== typeof h && ((u = b.rendertemplate ? b.rendertemplate : d.config.rendertemplate) ? d.config.render = h.template(u) : b.template ? d.config.render = h.template(b.template) : d.config.template &&
                                    (d.config.render = h.template(d.config.template))), d.config.render ? n = d.config.render({
                                    creatives: b.creatives
                                }) : b.template ? n = b.template : d.config.template && (n = d.config.template), n = function(a, b, c) {
                                    return a.split(b).join(c)
                                }(n, "@this", b.divid + ".js"), h = "<HTML><BODY>", b.css ? h += "<style>" + r.getCssString(b.css) + "</style>" : d.config.css && (h += "<style>" + r.getCssString(d.config.css) + "</style>"), q.default.insertNewIframe({
                                    width: this.config.style.width,
                                    height: this.config.style.height,
                                    intoEl: f,
                                    renderHtml: h + n + "</BODY></HTML>",
                                    sandbox: b.options.sandbox
                                }), n = function() {
                                    for (var a = [].slice.call(f.getElementsByClassName("autofit")), b = 0; b < a.length; b++) r.autoFitText(a[b])
                                }, b.js.onEvent(window, "resize", n), b.js.onEvent(window, "orientationchange", n), n());
                                if (e.descriptionTarget)
                                    for (e = d.mm.findEls(e.descriptionTarget, b.div), n = 0; n < e.length; n++) b.creatives && b.creatives[n] && (e[n].innerHTML = b.creatives[n].getDescription(l, m, k, e[n]));
                                g && g()
                            }.bind(d)
                        };
                        d.res = f;
                        d.triggerAllModuleCallbacks(b, f)
                    }
                }
            };
            return b
        }(q.default);
        k.default = e
    },
    "./src/zonemasters/requests/headerbiddingrequest.ts": function(e,
        k, p) {
        function t(a, b) {
            return a.force && !b.force ? -1 : b.force && !a.force ? 1 : a.cpm > b.cpm ? -1 : a.cpm == b.cpm ? 0 : 1
        }
        var q = this && this.__extends || function() {
            var a = function(b, d) {
                a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, b) {
                    a.__proto__ = b
                } || function(a, b) {
                    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
                };
                return a(b, d)
            };
            return function(b, d) {
                function c() {
                    this.constructor = b
                }
                a(b, d);
                b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c)
            }
        }();
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        e = p("./src/zonemasters/requests/superrequest.ts");
        var r = p("./src/zonemasters/utils.ts"),
            g = "google cpmstar sharethrough superawesome magnite triplelift openx pubmatic appnexus".split(" "),
            b = ["pubmatic", "rhythmone", "rubicon", "superawesome"],
            m = function() {
                function a(a, b) {
                    this.adPickResult = null;
                    this.fallbackCreativeIndex = this.curRenderIndex = -1;
                    this.hbRequest = b;
                    this.unit = a;
                    this.kind = "none";
                    this.bid = 0;
                    this.hb_adid = this.bidResponse = this.hb_bidder = null;
                    this.bidsById = {};
                    this.bidsByBidder = {};
                    this.bidsBySize = {};
                    this.bidsByCpm = [];
                    this.biddersByCpm = [];
                    this.adIdsSelected = null
                }
                a.prototype.selectAd = function(a) {
                    this.curRenderIndex = a;
                    var b = (new Date).getTime();
                    if (!this.adIdsSelected) return !1;
                    for (var c = null; a < this.adIdsSelected.length; a++)
                        if (c = this.adIdsSelected[a], 0 != c.indexOf("used"))
                            if (0 == c.indexOf("fallback")) break;
                            else {
                                var d = this.bidsById[c];
                                if (d && b - d.responseTimestamp < 1E3 * d.ttl - 1E3) {
                                    this.adIdsSelected[a] = "used";
                                    break
                                }
                            }
                    if (c && a < this.adIdsSelected.length) try {
                        if (0 == c.indexOf("fallback")) this.fallbackCreativeIndex =
                            parseInt(c.slice(9)), this.kind = "fallback", this.bid = this.rawCPM = this.unit.fallback.bid, this.bidResponse = this.hb_adid = this.hb_bidder = null;
                        else {
                            var f = this.bidsById[c];
                            if (null == f || null == f.adId) throw Error();
                            this.kind = "hb";
                            this.hb_bidder = f.bidder;
                            var g = this.hbRequest.config.bidderDiscreps ? this.hbRequest.config.bidderDiscreps[this.hb_bidder] : null,
                                h = g && g.discrep ? g.discrep : 1;
                            .4 > h && (h = .4);
                            1 < h && (h = 1);
                            this.rawCPM = f.cpm;
                            this.bid = f.cpm * h;
                            this.hb_adid = f.adId;
                            this.bidResponse = this.bidsById[c];
                            this.fallbackCreativeIndex = -1
                        }
                        return !0
                    } catch (y) {
                        this.kind = "none", this.bid = this.rawCPM = 0, this.hb_adid = this.hb_bidder = null, this.fallbackCreativeIndex = -1, this.bidResponse = null
                    } else return !1
                };
                a.prototype.getBidResponseById = function(a) {
                    return this.bidsById[a]
                };
                a.prototype.getFallbackCreativeIndex = function() {
                    return this.fallbackCreativeIndex
                };
                a.prototype.isVideoFallback = function() {
                    var a = this.getFallbackCreativeIndex();
                    a = null != this.unit.fallback && null != this.unit.fallback.creatives ? this.unit.fallback.creatives[a] : null;
                    return "fallback" ==
                        this.kind && a && null != a.creativemacros && (null != a.creativemacros.HTML5VID_VASTSTRING || null != a.creativemacros.HTML5VID_ADX)
                };
                a.prototype.isJsonFallback = function() {
                    var a = this.getFallbackCreativeIndex();
                    a = null != this.unit.fallback && null != this.unit.fallback.creatives ? this.unit.fallback.creatives[a] : null;
                    return "fallback" == this.kind && !this.isVideoFallback() && !this.isBannerFallback() && this.unit.fallback && a && a.creativemacros && 0 < Object.keys(a.creativemacros).length && this.unit.fallback.json
                };
                a.prototype.isBannerFallback =
                    function() {
                        var a = this.getFallbackCreativeIndex();
                        a = null != this.unit.fallback && null != this.unit.fallback.creatives ? this.unit.fallback.creatives[a] : null;
                        return "fallback" == this.kind && !this.isVideoFallback() && a && a.code && !this.unit.fallback.json
                    };
                a.prototype.isHB = function() {
                    return "hb" == this.kind && null != this.hb_bidder && null != this.bidResponse
                };
                a.prototype.isPremiumHB = function() {
                    return this.isHB() && ("justpremium" == this.hb_bidder || "sublime" == this.hb_bidder)
                };
                a.prototype.isBannerHB = function() {
                    return this.isHB() &&
                        !this.isPremiumHB() && "banner" == this.bidResponse.mediaType
                };
                a.prototype.isInstreamHB = function() {
                    return this.isHB() && !this.isPremiumHB() && "video" == this.bidResponse.mediaType && null != this.unit.mediaTypes.video && "instream" == this.unit.mediaTypes.video.context && "video" == this.bidResponse.mediaType && (null != this.bidResponse.vastXml || null != this.bidResponse.vastUrl)
                };
                a.prototype.isOutstreamHB = function() {
                    return this.isHB() && !this.isPremiumHB() && "video" == this.bidResponse.mediaType && null != this.unit.mediaTypes.video &&
                        "outstream" == this.unit.mediaTypes.video.context
                };
                a.prototype.getAdType = function() {
                    if (this.isHB()) {
                        if (this.isPremiumHB()) return "premium";
                        if (this.isBannerHB()) return "banner";
                        if (this.isInstreamHB() || this.isOutstreamHB()) return "video"
                    } else return this.isBannerFallback() ? "banner" : this.isVideoFallback() ? "video" : this.isJsonFallback() ? "json" : "unknown"
                };
                return a
            }(),
            d, a = !1,
            h = !1;
        p = function(f) {
            function c(a) {
                a = f.call(this, a) || this;
                a.useGam = !1;
                a.blockGam = !1;
                a.gamclick = !1;
                a.subpoolid = 0;
                a.biddersAllowed = {};
                a.gamSlotRenderListener = !1;
                return a
            }
            q(c, f);
            c.prototype.isBlockedBid = function(a) {
                try {
                    var b = a.meta;
                    if (this.config.bdomain) {
                        var c = r.toStringArrayLower(this.config.bdomain);
                        if (b && null != b.advertiserDomains && Array.isArray(b.advertiserDomains))
                            for (var d = r.toStringArrayLower(b.advertiserDomains), f = 0; f < d.length; f++)
                                for (b = 0; b < c.length; b++)
                                    if (0 <= d[f].indexOf(c[b])) return !0;
                        var g = null != a.ad ? a.ad : a.adUrl;
                        if (g && "string" == typeof g)
                            for (f = 0; f < c.length; f++)
                                if (0 <= g.toLowerCase().indexOf(c[f])) return !0
                    }
                } catch (y) {
                    this.mm.log("Error during isBlockedBid() - should not happen, returning false")
                }
                return !1
            };
            c.prototype.isCrossOriginFrame = function() {
                var a = null;
                if (this.config && this.config.adUnits)
                    for (var b = 0; b < this.config.adUnits.length; b++)
                        if (this.config.adUnits[b].gamPageUrl) {
                            a = this.config.adUnits[b].gamPageUrl;
                            break
                        }
                try {
                    return document.location.hostname !== window.parent.location.hostname || a && 0 > window.parent.location.hostname.indexOf(a)
                } catch (v) {
                    return !0
                }
            };
            c.prototype.matchesFilter = function(a) {
                try {
                    switch (a.type) {
                        case "Header":
                            var b = a.data.split("=");
                            if (2 == b.length) switch (b[0]) {
                                case "referer":
                                    return 0 <=
                                        window.location.href.toLowerCase().indexOf(b[1].toLowerCase())
                            }
                            break;
                        case "OS":
                            return 0 <= this.mm.getDeviceType().toLowerCase().indexOf(a.data.toLowerCase());
                        case "Referer":
                            try {
                                return 0 <= window.location.href.toLowerCase().indexOf(b[1].toLowerCase())
                            } catch (v) {
                                return 0 <= window.location.host.toLowerCase().indexOf(a.data.toLowerCase())
                            }
                        case "Domain":
                            return 0 <= window.location.host.toLowerCase().indexOf(a.data.toLowerCase());
                        case "Country":
                            return 0 <= this.mm.locationData.countryName.toLowerCase().indexOf(a.data.toLowerCase());
                        case "City":
                            return 0 <= this.mm.locationData.city.toLowerCase().indexOf(a.data.toLowerCase())
                    }
                    return !1
                } catch (v) {
                    return !1
                }
            };
            c.prototype.areFiltersAllowed = function(a) {
                var b = !1,
                    c = !1;
                if (a && Array.isArray(a))
                    for (var d = 0; d < a.length; d++) {
                        var f = a[d];
                        if (f.exclude && ("Country" != f.type || "WORLDWIDE" != f.data) && this.matchesFilter(f)) return !1;
                        f.exclude || "Domain" != f.type && "Referer" != f.type || (b = !0, this.matchesFilter(f) && (c = !0))
                    }
                return b ? c ? !0 : !1 : !0
            };
            c.prototype.reinit = function() {
                this.mm.log("hb request re-initialized with original settings");
                var a = window.googletag = window.googletag || {};
                a.cmd = a.cmd || []
            };
            c.prototype.reconfigure = function() {
                var a = null != this.config.GAMPercent ? this.config.GAMPercent : 1,
                    c = this.isCrossOriginFrame();
                this.blockGam = c;
                this.config.GAMWIDTH && (window.innerWidth < this.config.GAMWIDTH && (this.blockGam = !0), window.innerHeight < this.config.GAMHEIGHT && (this.blockGam = !0));
                var d = this.mm.locationData;
                if (1 == d.bd || 0 == d.dm) this.biddersAllowed["*"] = !1, this.blockGam = this.biddersAllowed.cpmstar = !0;
                if (1 == this.mm.coppa)
                    for (this.biddersAllowed["*"] = !1, d = 0; d < g.length; d++) this.biddersAllowed[g[d]] = !0;
                if (c)
                    for (d = 0; d < b.length; d++) this.biddersAllowed[b[d]] = !1;
                this.mm.isUserInEU() && !this.mm.isCMPLoaded() && (this.blockGam = !0);
                if (this.config.BIDDERFILTERS && Array.isArray(this.config.BIDDERFILTERS))
                    for (d = 0; d < this.config.BIDDERFILTERS.length; d++) c = this.config.BIDDERFILTERS[d], c.bidder && !this.areFiltersAllowed([c]) && (this.biddersAllowed[c.bidder] = !1);
                if (this.config.adUnits)
                    for (c = 0; c < this.config.adUnits.length; c++) {
                        var f = this.config.adUnits[c];
                        null == f.bids &&
                            (f.bids = []);
                        for (d = 0; d < f.bids.length; d++) {
                            var h = f.bids[d];
                            null != h.filters && Array.isArray(h.filters) && (this.areFiltersAllowed(h.filters) || (this.biddersAllowed[h.bidder] = !1));
                            !0 === this.biddersAllowed[h.bidder] || !1 !== this.biddersAllowed["*"] && !1 !== this.biddersAllowed[h.bidder] || (f.bids.splice(d, 1), d--)
                        }
                    }
                if (this.config.GAMFILTERS && this.config.adUnits)
                    for (c = 0; c < this.config.adUnits.length; c++) f = this.config.adUnits[c], this.areFiltersAllowed(f.gamFilters) || (f.blockGam = !0);
                this.config.GAM && !this.blockGam &&
                    (1 == a || Math.random() > this.config.GAMPercent) && (this.useGam = !0, this.config.GAMSubpoolid && (this.subpoolid = this.config.GAMSubpoolid))
            };
            c.prototype.init = function(a) {
                f.prototype.init.call(this, a);
                this.originalConfig = r.deepClone(a);
                this.reconfigure()
            };
            c.prototype.getAdUnitByPath = function(a) {
                for (var b = 0; b < this.config.adUnits.length; b++) {
                    var c = this.config.adUnits[b];
                    if (c.code == a) return c
                }
                return null
            };
            c.prototype.makeAttempt = function(b) {
                function c(a) {
                    var b = (a.ownerDocument ? a.ownerDocument : document).createElement("iframe");
                    b.style.borderWidth = "0";
                    b.scrolling = "no";
                    b.marginwidth = 0;
                    b.marginheight = 0;
                    b.topmargin = 0;
                    b.leftmargin = 0;
                    b.allowtransparency = !0;
                    b.setAttribute("marginwidth", "0");
                    b.setAttribute("marginheight", "0");
                    b.setAttribute("topmargin", "0");
                    b.setAttribute("leftmargin", "0");
                    b.setAttribute("allowtransparency", "true");
                    b.width = "0";
                    b.height = "0";
                    null != a && a.appendChild(b);
                    return b
                }

                function f(a, b, c, f, g) {
                    var h, l, k, n, r, q, p, v, C;
                    void 0 === g && (g = null);
                    null == c && (c = 0);
                    f = a.bestBid;
                    if (!f) {
                        var w = (new Date).getTime() + 300,
                            u = e.getAdUnitByPath(b);
                        f = new m(u, e);
                        if (null == u) return f;
                        b = d && d.getBidResponsesForAdUnitCode ? d.getBidResponsesForAdUnitCode(b) : null;
                        if (u.fallback && u.fallback.creatives)
                            for (var z = 0; z < u.fallback.creatives.length; z++) {
                                var x = u.fallback.creatives[z];
                                if (null != x && !("" == x.code && 0 == Object.keys(x.creativemacros).length || 0 <= x.click.indexOf("&campaignid=320&"))) {
                                    var y = "none",
                                        B = 0,
                                        A = 0;
                                    null == x.creativemacros || null == x.creativemacros.HTML5VID_VASTSTRING && null == x.creativemacros.HTML5VID_ADX ? x && x.code && !u.fallback.json ? y = "banner" : x.creativemacros &&
                                        0 < Object.keys(x.creativemacros).length && u.fallback.json && (y = "json") : (y = "video", (A = null === (l = null === (h = null === u || void 0 === u ? void 0 : u.mediaTypes) || void 0 === h ? void 0 : h.video) || void 0 === l ? void 0 : l.playerSize) && Array.isArray(A) && Array.isArray(A[0]) && (A = A[0]), A || (A = [960, 540]), B = A[0], A = A[1]);
                                    "none" != y && f.bidsByCpm.push({
                                        mediaType: y,
                                        rawCPM: u.fallback.bid,
                                        cpm: u.fallback.bid,
                                        adId: "fallback_" + z,
                                        w: parseInt("" + (null !== (k = null === x || void 0 === x ? void 0 : x.width) && void 0 !== k ? k : B)),
                                        h: parseInt("" + (null !== (n = null === x ||
                                            void 0 === x ? void 0 : x.height) && void 0 !== n ? n : A)),
                                        bidder: "fallback",
                                        force: (null === x || void 0 === x ? 0 : x.forcecpmstar) ? !0 : !1,
                                        expires: w + 3E5
                                    })
                                }
                            }
                        if (null != b) {
                            for (l = 0; l < b.bids.length; l++) {
                                k = b.bids[l];
                                h = (h = e.config.bidderDiscreps ? e.config.bidderDiscreps[k.bidder] : null) && h.discrep ? h.discrep : 1;
                                .4 > h && (h = .4);
                                1 < h && (h = 1);
                                h = {
                                    mediaType: k.mediaType,
                                    adId: k.adId,
                                    rawCPM: k.cpm,
                                    cpm: k.cpm * h,
                                    bidder: k.bidder,
                                    w: k.width,
                                    h: k.height,
                                    expires: k.responseTimestamp + 1E3 * k.ttl,
                                    force: !1
                                };
                                n = ["triplelift"];
                                z = !0;
                                if (u.mediaTypes.banner && u.mediaTypes.banner.sizes &&
                                    Array.isArray(u.mediaTypes.banner.sizes))
                                    for (z = !1, x = 0; x < u.mediaTypes.banner.sizes.length; x++) y = u.mediaTypes.banner.sizes[x][1], u.mediaTypes.banner.sizes[x][0] == h.w && (y == h.h || 0 <= n.indexOf(h.bidder)) && (z = !0);
                                z || e.mm.log("adId with invalid size: " + h.adId + " bidder: " + h.bidder + " with w: " + h.w + " and h  " + h.h);
                                h.expires < w + 1E3 && e.mm.log("Bid expired adId: " + h.adId + " bidder: " + h.bidder + " with cpm: " + h.cpm + " and ttl  " + k.ttl);
                                "rendered" != k.status && h.expires > w + 1E3 && z && (f.bidsByCpm.push(h), f.bidsById[k.adId] =
                                    k, n = "" + k.width + "x" + k.height, null == f.bidsBySize[n] ? f.bidsBySize[n] = [h] : (f.bidsBySize[n].push(h), f.bidsBySize[n].sort(t)), null == f.bidsByBidder[k.bidder] ? f.bidsByBidder[k.bidder] = [h] : (f.bidsByBidder[k.bidder].push(h), f.bidsByBidder[k.bidder].sort(t)))
                            }
                            w = Object.keys(f.bidsByBidder);
                            for (b = 0; b < w.length; b++) f.biddersByCpm.push(f.bidsByBidder[w[b]][0]);
                            f.biddersByCpm.sort(t);
                            f.bidsByCpm.sort(t)
                        }
                        if (null == f.adIdsSelected)
                            if (f.adIdsSelected = [], 0 == f.bidsByCpm.length) e.mm.log("Error: no bids or fallbacks for ad unit: " +
                                u.code);
                            else if (g) {
                            if (f.adPickResult = g(f.bidsByCpm), C = null === (r = f.adPickResult) || void 0 === r ? void 0 : r.picks)
                                for (u = 0; u < C.length; u++) f.adIdsSelected.push(C[u].adId)
                        } else
                            for (r = f.bidsByCpm, g = -1, e.config.minBid && ("object" === typeof e.config.minBid ? (g = null !== (q = e.config.minBid.default) && void 0 !== q ? q : -1, e.config.minBid[e.mm.locationData.countryCode] && (g = e.config.minBid[e.mm.locationData.countryCode])) : "number" === typeof e.config.minBid && (g = null !== (p = e.config.minBid) && void 0 !== p ? p : -1)), u.minBid && ("object" ===
                                    typeof u.minBid ? (g = null !== (v = u.minBid.default) && void 0 !== v ? v : -1, u.minBid[e.mm.locationData.countryCode] && (g = u.minBid[e.mm.locationData.countryCode])) : "number" === typeof u.minBid && (g = Math.max(g, u.minBid))), q = 0; q < r.length; q++) {
                                h = r[q];
                                v = null != e.config.FALLBACK_FORCE_PERCENT ? e.config.FALLBACK_FORCE_PERCENT : .05;
                                p = !1;
                                e.config.GAM && (v = 0);
                                Math.random() < v && (p = !0);
                                try {
                                    v = 0, u.fallback.minBid && ("object" === typeof u.fallback.minBid ? (v = null !== (C = u.fallback.minBid.default) && void 0 !== C ? C : -1, u.fallback.minBid[e.mm.locationData.countryCode] &&
                                        (v = u.fallback.minBid[e.mm.locationData.countryCode])) : "number" === typeof u.fallback.minBid && (v = Math.max(g, u.fallback.minBid))), "fallback" == h.bidder || isNaN(h.cpm) || !(-1 == g || h.cpm >= g) || p ? "fallback" == h.bidder && h.cpm >= v && f.adIdsSelected.push(h.adId) : f.adIdsSelected.push(h.adId)
                                } catch (I) {}
                            }
                        a.bestBid = f
                    }
                    f.curRenderIndex != c && f.selectAd(c);
                    return f
                }

                function g(a) {
                    if (!a.initAdserverSet) {
                        a.initAdserverSet = !0;
                        var b = {
                            nextAd: function(a) {
                                null == a.renderIndex && (a.renderIndex = 0);
                                a.renderIndex++;
                                return (a = f(a, a.adUnitPath,
                                    a.renderIndex)) && "none" != a.kind ? !0 : !1
                            },
                            pickAds: function(a, b, c) {
                                null == b.renderIndex && (b.renderIndex = 0, b.bestBid && (b.bestBid = null));
                                (a = b.bestBid = f(b, b.adUnitPath, b.renderIndex, !1, c)) && a.isBannerHB() && "cpmstar" == a.hb_bidder && a.bidResponse && a.bidResponse.creativeMacros ? b && b.js && b.js.res && (b.js.res.getResponseData = function(a) {
                                    return {
                                        creativemacros: a
                                    }
                                }.bind(e, a.bidResponse.creativeMacros)) : b && b.js && b.js.res && (b.js.res.getResponseData = null);
                                return a.adPickResult
                            }.bind(e, d),
                            getAdTypeAvailable: function(a,
                                b) {
                                null == b.renderIndex && (b.renderIndex = 0, b.bestBid && (b.bestBid = null));
                                return (b.bestBid = f(b, b.adUnitPath, b.renderIndex)).getAdType()
                            }.bind(e, d),
                            renderAd: function(a, b, d, g, h) {
                                void 0 === h && (h = {});
                                null == b.renderIndex && (b.renderIndex = 0, b.bestBid && (b.bestBid = null));
                                null == g && (g = function() {});
                                var l = e.getAdUnitByPath(b.adUnitPath),
                                    k = f(b, b.adUnitPath, b.renderIndex),
                                    m = l.fallback,
                                    n = g;
                                g = function() {
                                    n()
                                };
                                e.mm.log("bestbid is kind: " + k.kind);
                                window.context && window.context.reportRenderedEntityIdentifier && ("hb" == k.kind &&
                                    k.hb_bidder ? window.context.reportRenderedEntityIdentifier("cpms_" + k.hb_bidder + "_" + k.hb_bidder) : "fallback" == k.kind && m && m.creative && m.creative.creativemacros && window.context.reportRenderedEntityIdentifier("cpms_cpmstar_" + m.poolid + "_" + m.creative.creativemacros.CLICKURL));
                                var r = k.hb_bidder;
                                if (e.config.checkBid && "number" === typeof e.config.checkBid && Math.random() <= e.config.checkBid) {
                                    for (var q = ["ix", "openx", "pubmatic", "onemobile", "appnexus"], v = !1, p = 0; p < q.length; p++) {
                                        var t = q[p];
                                        if (null != k.bidsByBidder[t] &&
                                            .03 < k.bidsByBidder[t][0].cpm) {
                                            v = !0;
                                            break
                                        }
                                    }
                                    v || (l.blockGam = !0)
                                }!e.useGam || l.blockGam || h && h.blockGam || !(q = a.getAdserverTargetingForAdUnitCode ? a.getAdserverTargetingForAdUnitCode(l.code) : null) || (r = q.hb_bidder);
                                var u = null;
                                if ("hb" == k.kind || !(!e.useGam || l.blockGam || h && h.blockGam) && r)
                                    for (q = 0; q < l.bids.length && !(l.bids[q].bidder == r && (u = l.bids[q], .5 < Math.random())); q++);
                                if (0 != b.renderIndex || !e.useGam || l.blockGam || h && h.blockGam || null == l.gamAdSlot || null == l.gamCampaignid || null == m || null == m.poolid)
                                    if (k.isVideoFallback()) b.js.res.getResponseData =
                                        function() {
                                            k = f(b, b.adUnitPath, b.renderIndex);
                                            return m.creatives[k.fallbackCreativeIndex]
                                        }, g();
                                    else if (k.isInstreamHB()) {
                                    var w = function() {
                                        a.markWinningBidAsUsed({
                                            adUnitCode: l.code,
                                            adId: k.hb_adid
                                        })
                                    };
                                    k.bidResponse ? ((d = k.bidResponse.vastUrl) && "appnexus" != k.bidResponse || !k.bidResponse.videoCacheKey || (d = "https://prebid.adnxs.com/pbc/v1/cache?uuid=" + k.bidResponse.videoCacheKey), k.bidResponse.vastXml ? (b.js.res.getResponseData = function() {
                                            return {
                                                creativemacros: {
                                                    HTML5VID_VASTSTRING: k.bidResponse.vastXml
                                                }
                                            }
                                        },
                                        g(), w()) : d ? fetch(d).then(function(a) {
                                        return a.text()
                                    }).then(function(a) {
                                        b.js.res.getResponseData = function() {
                                            return {
                                                creativemacros: {
                                                    HTML5VID_VASTSTRING: a
                                                }
                                            }
                                        };
                                        g();
                                        w()
                                    }).catch(function(a) {
                                        b.js.res.getResponseData = null;
                                        b.js.res.getError = function() {
                                            return a
                                        };
                                        g();
                                        w()
                                    }) : (b.js.res.getResponseData = null, g(), w())) : (b.js.res.getResponseData = null, g(), w());
                                    null != u && null != m && null != m.poolid && (d = k.rawCPM * m.poolid / 37.47, "cpmstar" != u.bidder && e.mm.getScript(e.mm.serverroot + "/nc.aspx?poolid=" + m.poolid + "&campaignid=" + u.campaignid +
                                        "&sp=" + d))
                                } else if (k.isOutstreamHB()) {
                                    e.mm.getModuleByPath(b.adUnitPath);
                                    a.renderAd(window.document, k.hb_adid);
                                    var x = l.bid;
                                    e.mm.log("winning bidder " + k.hb_bidder + " with bid " + k.bid);
                                    null != u && null != m && null != m.poolid && (d = k.rawCPM * m.poolid / 37.47, "cpmstar" != u.bidder && e.mm.getScript(e.mm.serverroot + "/nc.aspx?poolid=" + m.poolid + "&campaignid=" + u.campaignid + "&sp=" + d));
                                    x && x.adResponse && Array.isArray(x.adResponse.ads) && x.adResponse.ads.length && x.adResponse.ads[0].rtb && x.adResponse.ads[0].rtb.video && x.adResponse.ads[0].rtb.video.content ?
                                        b.js.res.getResponseData = function() {
                                            return x.adResponse.ads[0].rtb.video.content
                                        } : (e.mm.log("Invalid Outstream HB BidResponse - missing bid.adResponse.ads[0].rtb.video.content"), b.js.res.getResponseData = null, b.js.res.getError = function() {
                                            return "Invalid Outstream HB BidResponse - missing bid.adResponse.ads[0].rtb.video.content"
                                        });
                                    g()
                                } else if (k.isBannerFallback() || k.isBannerHB() || k.isPremiumHB())
                                    if (d = c(d), h = d.contentWindow.document, "hb" == k.kind && k.hb_adid) {
                                        try {
                                            e.mm.log("Rendering hb-adid:" + k.hb_adid),
                                                a.renderAd(h, k.hb_adid)
                                        } catch (I) {
                                            e.mm.log("error during renderAd " + I)
                                        }
                                        e.mm.log("winning bidder " + k.hb_bidder + " with bid " + k.bid);
                                        null != u && null != m && null != m.poolid && (d = k.rawCPM * m.poolid / 37.47, "cpmstar" != u.bidder && (d = e.mm.serverroot + "/nc.aspx?poolid=" + m.poolid + "&campaignid=" + u.campaignid + "&sp=" + d, 0 < b.renderIndex && (d += "&defaultcampaignid=" + u.campaignid), e.mm.getScript(d)));
                                        g()
                                    } else {
                                        if ("fallback" == k.kind) {
                                            r = k.fallbackCreativeIndex;
                                            null == r && (r = 0);
                                            var y = m.creatives[r];
                                            (r = y.code) ? (y.px_cr && (r += "\n" + ("<img width=0 height=0 src='" +
                                                y.px_cr + "' />")), d.width = y.width ? y.width : m.width, d.height = y.height ? y.height : m.height, h.write("<HTML><BODY>" + r + "</BODY></HTML>"), h.close()) : b.js.res.getResponseData = function() {
                                                return y
                                            };
                                            g()
                                        }
                                    }
                                else {
                                    if (k.isJsonFallback()) {
                                        r = k.fallbackCreativeIndex;
                                        var C = m.creatives[r];
                                        b.js.res.getResponseData = function() {
                                            return C
                                        }
                                    }
                                    g()
                                } else z.cmd.push(function() {
                                    a.que.push(function() {
                                        var c = document.getElementById(b.js.getRenderTargetDivID());
                                        c && c.classList.add("cpmstar_googlead");
                                        z.display(b.js.getRenderTargetDivID());
                                        a.setTargetingForGPTAsync([l.code]);
                                        l.gamAdSlot.setTargeting("cpms_prebid", "1");
                                        e.mm.log("bidderInfo bidder:" + (u ? u.bidder : "null") + " with campaign id: " + (u ? u.campaignid : "null"));
                                        null != u && "cpmstar" != u.bidder && l.gamAdSlot.setTargeting("cpms_hb_campaignid", "" + u.campaignid);
                                        l.gamAdSlot.setTargeting("cpms_gam_campaignid", "" + l.gamCampaignid);
                                        l.gamAdSlot.setTargeting("cpms_poolid", "" + m.poolid);
                                        z.pubads().refresh([l.gamAdSlot]);
                                        null != m && null != m.poolid && e.mm.getScript(e.mm.serverroot + "/nc.aspx?poolid=" + m.poolid +
                                            "&campaignid=" + l.gamCampaignid + "&sp=" + k.rawCPM * m.poolid / 37.47)
                                    })
                                })
                            }.bind(e, d)
                        };
                        e.res = b;
                        a.status = "complete";
                        a.batchRequestMode && (e.status = a.status);
                        e.triggerAllModuleCallbacks(a.modcb, e.res, function(b) {
                            var c = b.module;
                            b = e.getAdUnitByPath(c.adUnitPath);
                            c = b.fallback ? b.fallback : c.fallback;
                            return e.useGam && !b.blockGam && b.gamAdSlot || null != c && null != c.bid && c.requestId == a.requestId
                        })
                    }
                }
                var e = this;
                this.mm.log("Making attempt for " + b.length + " modules at" + this.mm.getTimeElapsed());
                for (var l = 0; l < b.length; l++) this.mm.log("  - module " +
                    l + ": " + b[l].module.info.name + " kind: " + b[l].module.kind);
                var k = e.config.PREBID_TIMEOUT ? e.config.PREBID_TIMEOUT : 1E3,
                    q = e.config.FAILSAFE_TIMEOUT ? e.config.FAILSAFE_TIMEOUT : k + 2E3,
                    p = {
                        validation: "strict",
                        config: {
                            ver: "1.0",
                            complete: 1,
                            nodes: [{
                                asi: "cpmstar.com",
                                sid: "" + e.config.publisherid,
                                hp: 1
                            }]
                        }
                    };
                e.config.UAM && (window.apstag || (window.apstag = {
                    init: function() {
                        window.apstag._Q.push(["i", arguments])
                    },
                    fetchBids: function() {
                        window.apstag._Q.push(["f", arguments])
                    },
                    setDisplayBids: function() {},
                    targetingKeys: function() {
                        return []
                    },
                    _Q: []
                }), window.apstag.init({
                    pubID: "28665ab5-73ac-478f-8407-81f69645e5c9",
                    adServer: "googletag",
                    schain: p.config
                }));
                d = window.starpbjs = window.starpbjs || {};
                d.que = d.que || [];
                var z = null;
                if (e.useGam || e.mm.coppa) z = window.googletag = window.googletag || {}, z.cmd = z.cmd || [], z.cmd.push(function() {
                    z.pubads().disableInitialLoad()
                }), e.mm.coppa && z.cmd.push(function() {
                    z.pubads().setPrivacySettings({
                        childDirectedTreatment: !!e.mm.coppa
                    })
                }), e.mm.isOptedOut() && z.cmd.push(function() {
                    z.pubads().setPrivacySettings({})
                });
                if (e.config.bidderSettings) {
                    l = {};
                    for (var L = Object.keys(e.config.bidderSettings), G = 0; G < L.length; G++) {
                        var B = L[G],
                            E = e.config.bidderSettings[B];
                        l[B] = {
                            bidCpmAdjustment: function(a, b) {
                                return b * E.bidAdjustment
                            }
                        }
                    }
                    d.bidderSettings = l
                }
                d.que.push(function() {
                    var a, b, c, f = {
                        enableSendAllBids: !1,
                        priceGranularity: "dense",
                        useBidCache: !0,
                        cache: {
                            url: "https://prebid.adnxs.com/pbc/v1/cache"
                        },
                        userSync: {
                            filterSettings: {
                                iframe: {
                                    bidders: "*",
                                    filter: "include"
                                }
                            },
                            syncDelay: 5500
                        },
                        s2sConfig: {
                            accountId: "1",
                            enabled: e.config.PREBID_SERVER ? !0 : !1,
                            bidders: e.config.PREBID_SERVER_BIDDERS ?
                                e.config.PREBID_SERVER_BIDDERS : [],
                            timeout: 3E3,
                            adapter: "prebidServer",
                            endpoint: "https://pbs.cpmstar.com/openrtb2/auction",
                            syncEndpoint: "https://pbs.cpmstar.com/cookie_sync"
                        },
                        bidderSequence: "random",
                        schain: p,
                        floor: {}
                    };
                    e.config.bdomain && (f.bdomain = e.config.bdomain);
                    1 == e.mm.coppa && (e.mm.isUserInEU() || e.mm.isUserInUS() || "IL" == e.mm.getCountryCode()) && (f.coppa = !0);
                    if (null === (c = null === (b = null === (a = e.mm.zonedata) || void 0 === a ? void 0 : a.options) || void 0 === b ? void 0 : b.cmp) || void 0 === c ? 0 : c.atsid) f.userSync.userIds = [{
                        name: "identityLink",
                        params: {
                            pid: "13471"
                        },
                        storage: {
                            type: "cookie",
                            name: "idl_env",
                            expires: 7
                        }
                    }];
                    d.setConfig(f);
                    d.setBidderConfig({
                        bidders: ["oftmedia"],
                        config: {
                            schain: {
                                validation: "relaxed",
                                config: {
                                    ver: "1.0",
                                    complete: 1,
                                    nodes: [{
                                        asi: "152media.info",
                                        sid: "152M36",
                                        hp: 1
                                    }]
                                }
                            }
                        }
                    });
                    a = {
                        gdpr: e.mm.isUserInEU() && e.mm.isCMPLoaded() ? {
                            cmpApi: "iab",
                            timeout: 3E3,
                            allowAuctionWithoutConsent: !0
                        } : {
                            cmpApi: "static",
                            allowAuctionWithoutConsent: !0,
                            consentData: {
                                getConsentData: {
                                    gdprApplies: !1,
                                    hasGlobalScope: !0,
                                    consentData: ""
                                },
                                getVendorConsents: {
                                    metadata: ""
                                }
                            }
                        }
                    };
                    e.mm.isUserInCA() && (a.usp = {
                        timeout: 100
                    });
                    d.setConfig({
                        consentManagement: a
                    })
                });
                var A = (l = b == e.modcb) ? e.requestBidsData : null;
                A || (A = {
                    requestId: Math.floor(10 + 26 * Math.random()).toString(36) + Math.floor(99999999 * Math.random()).toString(36),
                    batchRequestMode: l,
                    requestBidsConfig: {
                        bidsBackHandler: null,
                        timeout: k
                    },
                    attempts: e.attempts,
                    modcb: [],
                    status: "preflight"
                }, A.batchRequestMode && (e.status = A.status), A.batchRequestMode && (e.requestBidsData = A));
                "preflight" !== A.status && e.mm.log("Error -- trying to add new request to requestBidsData while not preflight - this shouldnt happen");
                for (k = 0; k < b.length; k++) {
                    l = b[k];
                    L = !1;
                    for (G = 0; G < A.modcb.length; G++) A.modcb[G].module.info.name == l.module.info.name && (L = !0);
                    L || A.modcb.push(b[k])
                }
                if (0 == this.attempts)
                    for (l = 0; l < e.config.adUnits.length; l++) k = e.config.adUnits[l], null == k.bids && (k.bids = []), k.mediaTypes.video && "outstream" == k.mediaTypes.video.context && (k.renderer = {
                        url: "//imasdk.googleapis.com/js/sdkloader/ima3.js",
                        render: function(a) {
                            this.bid = a
                        }.bind(k)
                    });
                A.requestBidsConfig.adUnitCodes || (A.requestBidsConfig.adUnitCodes = []);
                for (k = 0; k < b.length; k++)(l =
                    b[k].module.adUnitPath) && 0 > A.requestBidsConfig.adUnitCodes.indexOf(l) && A.requestBidsConfig.adUnitCodes.push(l);
                var w = [];
                for (l = 0; l < e.config.adUnits.length; l++) {
                    k = e.config.adUnits[l];
                    if (k.mediaTypes && k.mediaTypes.banner && k.mediaTypes.banner.sizes)
                        for (L = k.mediaTypes.banner.sizes, G = 0; G < L.length; G++)
                            if (e.mm.isDesktop() && 2 == L[G].length) {
                                B = L[G][0];
                                var M = L[G][1];
                                216 == B && 36 == M ? (L.splice(G, 1), G--) : 300 == B && 50 == M ? (L.splice(G, 1), G--) : 320 == B && 50 == M && (L.splice(G, 1), G--)
                            }
                    if (k && k.fallback && k.fallback.poolid && !k.added)
                        for (r.macroReplace(e.mm,
                                k), L = 0; L < b.length; L++)
                            if (G = b[L], G.module && G.module.adUnitPath == k.code && (w.push(k), k.added = !0, e.useGam && !k.blockGam && k.gamAdUnitCode && k.mediaTypes.banner && G.instance)) {
                                B = {
                                    bidder: "cpmstar",
                                    params: {
                                        placementId: k.fallback.poolid
                                    },
                                    campaignid: null
                                };
                                if (M = e.getViewAspxKVPObject()) B.params.kvp = M;
                                k.bids.push(B);
                                z.cmd.push(function(a, b) {
                                    var c = "";
                                    e.config.GAMCHILDNETWORKCODE ? c = "," + e.config.GAMCHILDNETWORKCODE : a.gamChildNetworkCode && (c = "," + a.gamChildNetworkCode);
                                    null == a.gamAdSlot && (a.gamAdSlot = z.defineSlot("/80148797" +
                                        c + "/ca-pub-7020262665364086-tag/" + a.gamAdUnitCode, a.mediaTypes.banner.sizes, b.instance.getRenderTargetDivID()).addService(z.pubads()));
                                    e.config.UAM && (A.apSlots = A.apSlots ? A.apSlots : [], A.apSlots.push({
                                        slotName: "/80148797" + c + "/ca-pub-7020262665364086-tag/" + a.gamAdUnitCode,
                                        slotID: b.instance.getRenderTargetDivID(),
                                        sizes: a.mediaTypes.banner.sizes
                                    }));
                                    z.pubads().enableSingleRequest();
                                    z.enableServices()
                                }.bind(null, k, G))
                            }
                }
                var W = function() {
                    var a, b;
                    if ((null === (b = null === (a = e.mm.zonedata) || void 0 === a ? void 0 : a.options) ||
                            void 0 === b ? 0 : b.pubmaticid) && d.getUserIdsAsEids) {
                        var c = window.PWT;
                        c && "function" == typeof c.getUserIds && w.forEach(function(a) {
                            a.bids.forEach(function(a) {
                                a.userId = c.getUserIds();
                                a.userIdAsEids = d.getUserIdsAsEids()
                            })
                        })
                    }
                    d.addAdUnits(w);
                    "preflight" != e.status || A.inflight || (A.inflight = !0, A.requestBidsConfig.bidsBackHandler = function(a) {
                        e.mm.debug && a && (e.mm.log("Prebid Bid Responses:"), e.mm.log(a));
                        if (e.config.bdomain && a && "object" == typeof a)
                            for (var b = Object.keys(a), c = 0; c < b.length; c++) {
                                var f = a[b[c]];
                                if ("object" ==
                                    typeof f && (f = f.bids) && Array.isArray(f))
                                    for (var h = 0; h < f.length; h++) e.isBlockedBid(f[h]) && (e.mm.debug && e.mm.log("Blocked bid " + f[h]), d.markWinningBidAsUsed(f[h]))
                            }
                        A.prebidBidsBack = !0;
                        e.config.UAM && !A.apsBidsBack || g(this)
                    }.bind(A), setTimeout(function() {
                        e.mm.log("Prebid timeout");
                        g(this)
                    }.bind(A), q), setTimeout(function() {
                        A.status = "pending";
                        A.batchRequestMode && (e.status = A.status);
                        e.mm.log("Requesting bids at:" + e.mm.getTimeElapsed());
                        e.config.UAM && A.apSlots && window.apstag.fetchBids({
                            slots: A.apSlots
                        }, function(a) {
                            z.cmd.push(function() {
                                window.apstag.setDisplayBids();
                                A.apsBidsBack = !0;
                                a && (e.mm.log("Amazon Bid Responses:"), e.mm.log(a));
                                A.prebidBidsBack && g(this)
                            })
                        });
                        d.requestBids(this.requestBidsConfig);
                        e.getFallbackBids(this, this.modcb);
                        e.requestBidsData = null
                    }.bind(this), 50))
                }.bind(A);
                e.useGam ? z.cmd.push(function() {
                    d.que.push(W)
                }) : d.que.push(W);
                a || null == e.config.pbjsfile || (a = !0, e.mm.getScript(e.mm.cdnroot + "/cached/zonemasters/lib/prebid/" + e.config.pbjsfile + "%%ver%%", function() {}));
                !e.useGam && !e.mm.coppa || h || (e.mm.getScript("https://www.googletagservices.com/tag/js/gpt.js",
                    function() {}), e.config.UAM && e.mm.getScript("https://c.amazon-adsystem.com/aax2/apstag.js", function() {}), h = !0)
            };
            c.prototype.getFallbackBids = function(a, b) {
                for (var c = this, f = 0; f < c.config.adUnits.length; f++) {
                    var d = c.config.adUnits[f];
                    if (!(0 > a.requestBidsConfig.adUnitCodes.indexOf(d.code))) {
                        var e = d.fallback;
                        if (null != e && null != e.poolid) {
                            var g = Math.floor(10 + 26 * Math.random()).toString(36) + Math.floor(99999999 * Math.random()).toString(36);
                            window[g] = function(f, d) {
                                return function(e) {
                                    c.mm.log("fallback response");
                                    if (null != e) {
                                        var g = e.creatives;
                                        if (null != g && 0 != g.length) {
                                            var h = g[0];
                                            e = e.pks ? e.pks : h.pks;
                                            null == e && (e = 0);
                                            d.requestId = a.requestId;
                                            d.bid = 37.47 * parseFloat(e) / d.poolid;
                                            d.bid *= null != c.config.FALLBACK_BID_MULTIPLIER ? c.config.FALLBACK_BID_MULTIPLIER : .95;
                                            d.creatives = g;
                                            d.creative = h;
                                            a.initAdserverSet && null != c.res && c.triggerModuleCallback(b, c.res, function(a) {
                                                return a.module.adUnitPath == f.code && null != a.cb
                                            })
                                        }
                                    }
                                }
                            }(d, e);
                            if (!c.useGam || d.blockGam || null == d.gamAdUnitCode) {
                                e = this.getViewAspxBaseUrl() + "poolid=" + e.poolid + "&json=c_mp&mv=1";
                                if (c.blockGam || d.blockGam) e += "&gampb=1";
                                d.mediaTypes && d.mediaTypes.video && d.mediaTypes.video.playerSize && (e += "&multi=3", d = d.mediaTypes.video.playerSize, Array.isArray(d[0]) && (d = d[0]), e += "&w=" + d[0], e += "&h=" + d[1]);
                                e += "&callback=" + g;
                                e += "&referer=" + window.encodeURIComponent(location.protocol + "//" + location.host + location.pathname);
                                c.mm.getScript(e)
                            }
                        }
                    }
                }
            };
            return c
        }(e.default);
        k.default = p
    },
    "./src/zonemasters/requests/skinrequest.ts": function(e, k, p) {
        var t = this && this.__extends || function() {
            var e = function(k, g) {
                e =
                    Object.setPrototypeOf || {
                        __proto__: []
                    }
                instanceof Array && function(b, e) {
                    b.__proto__ = e
                } || function(b, e) {
                    for (var d in e) e.hasOwnProperty(d) && (b[d] = e[d])
                };
                return e(k, g)
            };
            return function(k, g) {
                function b() {
                    this.constructor = k
                }
                e(k, g);
                k.prototype = null === g ? Object.create(g) : (b.prototype = g.prototype, new b)
            }
        }();
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        e = function(e) {
            function k(g) {
                g = e.call(this, g) || this;
                g.getMacroMaps = function() {
                    return [{
                        IMAGEURL: "LEFTIMAGEURL"
                    }, {
                        IMAGEURL: "RIGHTIMAGEURL"
                    }]
                };
                return g
            }
            t(k, e);
            return k
        }(p("./src/zonemasters/requests/editorialrequest.ts").default);
        k.default = e
    },
    "./src/zonemasters/requests/starbannerrequest.ts": function(e, k, p) {
        var t = this && this.__extends || function() {
            var e = function(k, g) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, e) {
                    b.__proto__ = e
                } || function(b, e) {
                    for (var d in e) e.hasOwnProperty(d) && (b[d] = e[d])
                };
                return e(k, g)
            };
            return function(k, g) {
                function b() {
                    this.constructor = k
                }
                e(k, g);
                k.prototype = null === g ? Object.create(g) : (b.prototype = g.prototype, new b)
            }
        }();
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        e = function(e) {
            function k(g) {
                return e.call(this, g) || this
            }
            t(k, e);
            k.prototype.makeAttempt = function(e) {
                var b = this,
                    g = Math.floor(10 + 26 * Math.random()).toString(36) + Math.floor(99999999 * Math.random()).toString(36),
                    d = this.getViewAspxBaseUrl();
                d += "poolid=" + this.config.poolid + "&json=c_mp&callback=" + g;
                this.config.multi && (d += "&multi=" + this.config.multi);
                1 == e.length && e[0].module && e[0].module.options && e[0].module.options.roadblock && (d += "&ROADBLOCK=" + e[0].module.options.roadblock);
                d += "&referer=" + window.encodeURIComponent(location.protocol + "//" + location.host + location.pathname);
                b.mm.getScript(d, function() {});
                b.config.width && b.config.height && window.context && window.context.requestResize(b.config.width, b.config.height);
                window[g] = function(a) {
                    var d = a.creatives;
                    if (null == d || 0 == d.length || null == d[0].code || "" == d[0].code) b.res = null, b.status = "failed";
                    else {
                        var f = {
                            getAdTypeAvailable: function(a) {
                                return "banner"
                            },
                            renderAd: function(a, f) {
                                b.renderBanners(f, d, a)
                            }.bind(b)
                        };
                        window.context && window.context.reportRenderedEntityIdentifier &&
                            a && a.creatives && a.creatives[0] && a.creatives[0].creativemacros && a.creatives[0].creativemacros.CLICKURL && window.context.reportRenderedEntityIdentifier("cpms_cpmstar_" + b.config.poolid + "_" + a.creatives[0].creativemacros.CLICKURL);
                        b.res = f
                    }
                    b.triggerAllModuleCallbacks(e, b.res)
                }.bind(b)
            };
            return k
        }(p("./src/zonemasters/requests/superrequest.ts").default);
        k.default = e
    },
    "./src/zonemasters/requests/starjsonrequest.ts": function(e, k, p) {
        var t = this && this.__extends || function() {
            var e = function(k, g) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, e) {
                    b.__proto__ = e
                } || function(b, e) {
                    for (var d in e) e.hasOwnProperty(d) && (b[d] = e[d])
                };
                return e(k, g)
            };
            return function(k, g) {
                function b() {
                    this.constructor = k
                }
                e(k, g);
                k.prototype = null === g ? Object.create(g) : (b.prototype = g.prototype, new b)
            }
        }();
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        e = function(e) {
            function k(g) {
                return e.call(this, g) || this
            }
            t(k, e);
            k.prototype.makeAttempt = function(g) {
                e.prototype.makeAttempt.call(this, g);
                var b = this,
                    k = Math.floor(10 + 26 * Math.random()).toString(36) +
                    Math.floor(99999999 * Math.random()).toString(36),
                    d = this.getViewAspxBaseUrl();
                d += "poolid=" + this.config.poolid + "&rnd=" + this.rnd;
                if (this.config.vast) {
                    d += "&fv=0&mv=1&json=c_m";
                    if (this.config.width || this.config.w) d += "&w=" + (this.config.w ? this.config.w : this.config.width);
                    if (this.config.height || this.config.h) d += "&h=" + (this.config.h ? this.config.h : this.config.height)
                }
                d += "&callback=" + k;
                this.config.json && (d += "&json=" + this.config.json);
                this.config.multi && (d += "&multi=" + this.config.multi);
                this.config.requiredmacros &&
                    (d += "&requiredmacros=" + this.config.requiredmacros);
                d += "&referer=" + window.encodeURIComponent(location.protocol + "//" + location.host + location.pathname);
                if (this.config.params) {
                    var a = this.config.params;
                    d += Object.keys(a).map(function(b) {
                        return [b, a[b]]
                    }).reduce(function(a, b) {
                        return a += "&" + b[0] + "=" + encodeURIComponent(b[1])
                    }, "")
                }
                this.config.url && (d = this.config.url);
                window[k] = function(a) {
                    var d = {
                        getAdTypeAvailable: function(a) {
                            return "none"
                        }
                    };
                    b.res = d;
                    b.status = "complete";
                    null == a || 0 === Object.keys(a).length && a.constructor ===
                        Object || "" === a ? (b.res = null, b.status = "failed") : null != a.creatives && 0 < a.creatives.length && null != a.creatives[0].code && "" != a.creatives[0].code ? (d.getAdTypeAvailable = function(a) {
                            return "banner"
                        }, d.renderAd = function(c, d, f) {
                            f(b.renderBanners(d, a.creatives, c))
                        }, d.getResponseData = function() {
                            return a
                        }) : null != a.creatives && 0 < a.creatives.length && a.creatives[0].creativemacros && (a.creatives[0].creativemacros.HTML5VID_VASTSTRING || a.creatives[0].creativemacros.HTML5VID_ADX || a.creatives[0].creativemacros.VIDEO1) ? (d.nextAd =
                            function(b) {
                                null == d.renderIndex ? d.renderIndex = 1 : d.renderIndex++;
                                return null == a.creatives || d.renderIndex >= a.creatives.length ? !1 : !0
                            }, d.getAdTypeAvailable = function(a) {
                                return "video"
                            }, d.renderAd = function(a, b, d) {
                                d()
                            }, d.getResponseData = function() {
                                return a.creatives[null != d.renderIndex ? d.renderIndex : 0]
                            }) : (d.getAdTypeAvailable = function(a) {
                            return "json"
                        }, d.getResponseData = function() {
                            return a
                        });
                    b.triggerAllModuleCallbacks(g, d)
                };
                this.config.jsres ? setTimeout(function() {
                        window[k](window[b.config.jsres])
                    }, 0) : this.config.vast &&
                    3 == this.config.vast && this.config.url && "undefined" !== typeof fetch ? fetch(this.config.url).then(function(a) {
                        return a.text()
                    }).then(function(a) {
                        window[k](a)
                    }) : this.mm.getScript(d)
            };
            return k
        }(p("./src/zonemasters/requests/superrequest.ts").default);
        k.default = e
    },
    "./src/zonemasters/requests/superrequest.ts": function(e, k, p) {
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        var t = p("./src/zonemasters/utils.ts");
        e = function() {
            function e(e) {
                this.mm = e;
                this.rnd = Math.round(999999 * Math.random());
                this.status = null;
                this.modcb = [];
                this.attempts = 0
            }
            e.prototype.reinit = function() {};
            e.prototype.init = function(e) {
                this.config = e
            };
            e.prototype.triggerModuleCallback = function(e, g, b) {
                if (e)
                    for (var k = 0; k < e.length; k++)
                        if (b(e[k])) {
                            e = e[k];
                            if (null == e) break;
                            b = e.cb;
                            e.cb = null;
                            null != b && b(g);
                            break
                        }
            };
            e.prototype.triggerAllModuleCallbacks = function(e, g, b) {
                this.status = "complete";
                if (e)
                    for (var k = 0; k < e.length; k++)
                        if (null == b || b(e[k])) {
                            var d = e[k].cb;
                            e[k].cb = null;
                            null != d && d(g)
                        }
            };
            e.prototype.addCallback = function(e, g) {
                var b = e.module;
                this.mm.log("  adding callback for module: " +
                    b.info.name + " kind: " + b.kind + " at " + this.mm.getTimeElapsed());
                var k, d = k || (k = {});
                d[d.NotAdded = 0] = "NotAdded";
                d[d.CallbackCompleted = 1] = "CallbackCompleted";
                d[d.CallbackPending = 2] = "CallbackPending";
                d = k.NotAdded;
                for (var a = 0; a < this.modcb.length; a++) {
                    var h = this.modcb[a];
                    if (h.module.info.name == b.info.name) {
                        d = null == h.cb ? k.CallbackCompleted : k.CallbackPending;
                        break
                    }
                }
                a = this.getStatus();
                d == k.NotAdded && this.modcb.push({
                    module: b,
                    cb: g,
                    instance: e
                });
                if (d == k.CallbackPending) g(null);
                else {
                    if (null != a && "pending" == a) this.makeAttempt([{
                        module: b,
                        cb: g,
                        instance: e
                    }]);
                    else {
                        for (a = 0; a < this.modcb.length; a++) h = this.modcb[a], h.module.info.name == b.info.name && null == h.cb && (h.cb = g);
                        this.makeAttempt(this.modcb)
                    }
                    this.attempts++
                }
            };
            e.prototype.getStatus = function() {
                return this.status
            };
            e.prototype.makeAttempt = function(e) {
                null == this.status && (this.status = "pending")
            };
            e.prototype.getViewAspxKVPObject = function() {
                var e = {};
                1 == this.mm.coppa && (e.tfcd = this.mm.coppa ? "1" : "0");
                this.mm.usp && (e.usp = "" + this.mm.usp);
                null != this.mm.gdprApplies && (e.gpdr = this.mm.gdprApplies ? "1" :
                    "0");
                this.mm.gdprApplies && null != this.mm.getPubConsent() && (e.gdpr_consent = "" + this.mm.getPubConsent());
                this.mm.debug && (e.debug = "1");
                if (this.mm.zonedata.options && this.mm.zonedata.options.modulus) {
                    var g = Math.round(100 * this.mm.getRand()) % 10;
                    e.modulus = "" + g
                }
                this.mm.forcecampaigngroupid && (e.forcecampaigngroupid = this.mm.forcecampaigngroupid);
                return e
            };
            e.prototype.getViewAspxBaseUrl = function() {
                var e = this.mm.serverroot;
                this.mm.zonedata && this.mm.zonedata.options && this.mm.zonedata.options.referrerRevshare && this.mm.zonedata.zone_referrer ?
                    e += "/viewiogame.aspx?iogamereferrerdomain=" + this.mm.zonedata.zone_referrer + "&" : this.config && this.config.contentid ? e += "/viewzonecontent.aspx?contentid=" + this.config.contentid + "&" : (e += "/view.aspx?", this.config.subpoolid && (e += "subpoolid=" + this.config.subpoolid + "&"));
                var g = this.getViewAspxKVPObject();
                (g = t.objectToQueryString(g)) && (e += g + "&");
                return e
            };
            e.generateIframe = function() {
                var e = document.createElement("iframe");
                e.style.borderWidth = "0";
                e.scrolling = "no";
                e.marginwidth = 0;
                e.marginheight = 0;
                e.topmargin =
                    0;
                e.leftmargin = 0;
                e.allowtransparency = !0;
                e.setAttribute("marginwidth", "0");
                e.setAttribute("marginheight", "0");
                e.setAttribute("topmargin", "0");
                e.setAttribute("leftmargin", "0");
                e.setAttribute("allowtransparency", "true");
                return e
            };
            e.insertNewIframe = function(e) {
                var g = this.generateIframe();
                g.width = "0";
                g.height = "0";
                if (null != e.sandbox) g.setAttribute("sandbox", e.sandbox), g.setAttribute("srcdoc", e.renderHtml), e.intoEl.appendChild(g);
                else {
                    e.intoEl.appendChild(g);
                    var b = g.contentWindow.document;
                    b.write(e.renderHtml);
                    b.close()
                }
                g.width = "" + e.width;
                g.height = e.height;
                return g
            };
            e.prototype.renderBanners = function(k, g, b) {
                var m, d, a = this.config.adspacing || 30,
                    h = "",
                    f = 0,
                    c = g[0].height ? g[0].height : this.config.height,
                    l = this.config.multifooter || "</TD></TR></TABLE></TD>",
                    n = this.config.multiheader || "<TABLE border=0 cellpadding=0 cellspacing=0><TR><TD>",
                    q = this.config.multisplitter || "</TD><TD width=" + a + "></TD><TD>";
                this.config.multi && (h += n);
                for (n = 0; n < g.length; n++) {
                    var p = g[n].width ? g[n].width : (null === (m = g[n].creativemacros) || void 0 ===
                        m ? 0 : m.WIDTH) ? g[n].creativemacros.WIDTH : null === (d = this.config) || void 0 === d ? void 0 : d.width;
                    null != p && (0 < n && (h += q, f += a), h += g[n].code, f += p, g[n].px_cr && (h += "\n" + ("<img width=0 height=0 src='" + g[n].px_cr + "' />")))
                }
                this.config.multi && (h += l);
                if (null != k) return e.insertNewIframe({
                    height: c,
                    width: "" + f,
                    intoEl: k,
                    renderHtml: "<HTML><BODY>" + h + "</BODY></HTML>",
                    sandbox: b.options.sandbox
                });
                throw Error("'el' was not defined.");
            };
            return e
        }();
        k.default = e
    },
    "./src/zonemasters/superclasses/basic/componentregistry.ts": function(e,
        k, p) {
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        e = function() {
            function e() {}
            e.GetComponentRegistry = function() {
                return {}
            };
            e.RegisterComponent = function(e, k) {};
            return e
        }();
        k.default = e
    },
    "./src/zonemasters/superclasses/basic/rootcomponent.ts": function(e, k, p) {
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        e = function() {
            function e(e) {}
            e.prototype.$mount = function(e) {
                this.$el = e;
                return this
            };
            e.prototype.renderTemplate = function(e, k) {
                var g = "";
                "undefined" !== typeof window.doT && e.template && (e.render = window.doT.template(e.template));
                e.render ? (g = e.data && "function" === typeof e.data ? e.data() : e, g = e.render(g)) : e.template && (g = e.template);
                e = e.divid + ".js";
                g = g.split("@this").join(e);
                k.innerHTML = g
            };
            return e
        }();
        k.default = e
    },
    "./src/zonemasters/utils.ts": function(e, k, p) {
        function t(a, b) {
            if ("string" != typeof a) {
                var c = "",
                    d;
                for (d in a) {
                    var e = a[d],
                        f;
                    if (f = "@" != d.trim()[0]) f = d.trim().charCodeAt(0), f = !(48 <= f && 57 >= f);
                    f ? (b ? (c += "#" + b + " " + d, "." == d[0] && (c += " , #" + b + d)) : c += d, c += "{") : c += d + "{";
                    for (var g in e)
                        if (e.hasOwnProperty(g))
                            if (f = e[g], "object" == typeof f) {
                                var h = {};
                                h[g] = f;
                                c += t(h, b)
                            } else c += g + ":" + f + ";";
                    c += "}\n"
                }
                return c
            }
            return a
        }

        function q(a) {
            var b = null;
            if (null == a) return b;
            if ("object" == typeof a && a instanceof HTMLElement || a.constructor && "HTMLDivElement" == a.constructor.name) b = a;
            else if (Array.isArray(a)) {
                b = [];
                for (var d = 0; d < a.length; d++) b.push(q(a[d]))
            } else if ("object" == typeof a)
                for (d in b = {}, a) b[d] = q(a[d]);
            else b = a;
            return b
        }

        function r(a, b, d) {
            void 0 === d && (d = null);
            if (null == a) return null;
            if (null == b || "object" !== typeof b) return a;
            for (var c in b) {
                var e = void 0;
                d && void 0 !==
                    (e = d(c, a, b)) ? a[c] = e : null == a[c] || "object" != typeof a[c] || "object" != typeof b[c] || Array.isArray(b[c]) ? Array.isArray(b) || "object" == typeof b[c] ? a[c] = q(b[c]) : (e = b[c], a[c] = "undefined" !== typeof e ? e : a[c]) : a[c] = r(a[c], b[c])
            }
            return a
        }

        function g(a, b, d) {
            if ("conditions" == a && null != b[a] && null != d[a]) return b = b[a], a = d[a], a = Array.isArray(b) && ("&" == b[0] || "|" == b[0]) && Array.isArray(a) ? b.concat(a) : Array.isArray(b) || Array.isArray(a) ? Array.isArray(b) && "|" == b[0] ? b.concat(a) : Array.isArray(a) ? ["&"].concat([b]).concat(a) : ["&",
                b, a
            ] : void 0, a
        }

        function b(a) {
            a = a.split("<br");
            for (var b = "", d = 0; d < a.length; d++) {
                var e = a[d];
                e = e.trim();
                "/" == e[0] && ">" == e[1] && (e = e.slice(2));
                e = e.trim();
                e.length > b.length && (b = e)
            }
            return b
        }

        function m(a, b, d) {
            void 0 === d && (d = null);
            if (null == d) {
                d = {};
                try {
                    d["%%REFERER%%"] = window.location.href, d["%%REFERERHOSTNAME%%"] = window.location.hostname, d["%%IP%%"] = a.getIP()
                } catch (u) {}
            }
            switch (typeof b) {
                case "string":
                    a = Object.keys(d);
                    for (var c = 0; c < a.length; c++) {
                        var e = a[c],
                            f = d[e];
                        b = b.split(e).join(f)
                    }
                    break;
                case "object":
                    for (c =
                        Object.keys(b), e = 0; e < c.length; e++) f = c[e], b[f] = m(a, b[f], d)
            }
            return b
        }

        function d(a) {
            return null == a ? [] : Array.isArray(a) ? a : [a]
        }
        Object.defineProperty(k, "__esModule", {
            value: !0
        });
        k.toStringArrayLower = k.toArray = k.parsedCookies = k.objectToQueryString = k.macroReplace = k.autoFitText = k.getCtx = k.from_utf8 = k.getLongestTextLine = k.mergeObjectsWithConditions = k.extendLite = k.mergeObjects = k.deepClone = k.getCssString = void 0;
        k.getCssString = t;
        k.deepClone = q;
        k.mergeObjects = r;
        k.extendLite = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) &&
                (a[c] = b[c]);
            return a
        };
        k.mergeObjectsWithConditions = function(a, b) {
            return r(a, b, g)
        };
        k.getLongestTextLine = b;
        k.from_utf8 = function(a) {
            try {
                return decodeURIComponent(escape(a))
            } catch (c) {
                return ""
            }
        };
        var a = null,
            h = null;
        k.getCtx = function() {
            a || (h = document.createElement("canvas"), a = h.getContext("2d"));
            return a
        };
        k.autoFitText = function(a) {
            var c = this.getCtx(),
                d = getComputedStyle(a);
            c.font = d.fontSize + " " + d.fontFamily;
            var e = b(a.innerText);
            c = c.measureText(e).width;
            e = parseFloat(d.width);
            isNaN(e) && 0 < a.clientWidth ? e = a.clientWidth :
                isNaN(e) && (e = a.parentElement.clientWidth);
            c >= .95 * e && (c = e / c * .95, a.style.fontSize = parseFloat(d.fontSize) * c + "px")
        };
        k.macroReplace = m;
        k.objectToQueryString = function(a) {
            var b = "";
            if (a && "object" === typeof a)
                for (var d = Object.keys(a), e = 0; e < d.length; e++) {
                    var f = d[e],
                        g = a[f];
                    0 < e && (b += "&");
                    b += f + "=" + g
                }
            return b
        };
        k.parsedCookies = function() {
            return document.cookie.split(";").reduce(function(a, b) {
                b = b.split("=");
                b[0] = b[0].trim();
                b[1] = b.slice(1).join("=");
                a[b[0]] = b[1];
                return a
            }, {})
        };
        k.toArray = d;
        k.toStringArrayLower = function(a) {
            a =
                d(a);
            for (var b = 0; b < a.length; b++) "string" === typeof a[b] && (a[b] = a[b].toLowerCase());
            return a
        }
    },
    0: function(e, k, p) {
        e.exports = p("./src/zonemasters/mobilemodules.ts")
    }
});