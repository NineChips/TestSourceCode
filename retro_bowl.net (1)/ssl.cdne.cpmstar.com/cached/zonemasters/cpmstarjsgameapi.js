(function() {
    function h(a) {
        if ("function" === typeof Event) var g = new Event(a);
        else h, g = document.createEvent("Event"), g.initEvent(a, !1, !1);
        return g
    }

    function n(a) {
        a.listenersByType = {};
        a.listenersForAllTypes = [];
        a.dispatchEvent = function(a) {
            a.target = this;
            var g = this.listenersForAllTypes;
            null != g && (g = g.slice(0));
            var b = this.listenersByType[a.type];
            null != b && (b = b.slice(0));
            for (var c = 0; c < g.length; c++) g[c](a);
            if (b)
                for (c = 0; c < b.length; c++) b[c](a)
        };
        a.addEventListener = function(a, b) {
            (this.listenersByType[a] = this.listenersByType[a] || []).push(b)
        };
        a.addAllEventsListener = function(a) {
            this.listenersForAllTypes.push(a)
        };
        a.removeEventListener = function(a, b) {
            a = this.listenersByType[a] = this.listenersByType[a] || [];
            for (var c = a.length - 1; 0 <= c; c--) a[c] == b && a.splice(c, 1)
        }
    }

    function c() {
        if (c.singleton) throw Error("Only one CPMStarAPI may be instantiated");
        this.targetElement = window.document.body;
        this.isFixed = !0
    }

    function d(a) {
        n(this);
        this.placementid = a;
        this.status = 0
    }

    function l(a) {
        l.singleton && (console.log("Only one PrerollView may be instantiated"),
            this.load = function() {});
        l.singleton = this;
        d.call(this, a)
    }

    function e(a) {
        e.static_init || (e.static_init = !0, e.currentInterstitialShowing = null);
        d.call(this, a)
    }

    function f(a) {
        f.static_init || (f.static_init = !0, f.currentRewardedVideoShowing = null);
        d.call(this, a)
    }

    function k(a) {
        void 0 === k.lastinstanceid && (k.lastinstanceid = 0);
        n(this);
        this.instanceid = k.lastinstanceid++;
        this.placementid = a;
        this.status = 0
    }
    c.prototype = c;
    c.prototype.setTarget = function(a) {
        a || (a = window.document.body);
        this.targetElement = a;
        a != window.document.body &&
            (this.isFixed = !1)
    };
    c.prototype.loadZone = function(a) {
        (function(a) {
            var b = Math.round(999999 * Math.random()),
                c = document.createElement("script");
            c.type = "text/javascript";
            c.async = !0;
            var g = window.location.protocol;
            g = "https:" == g ? "https:" : "http:";
            var d = window.location.hash;
            "#cpmstarDev" == d ? (d = "dev.server", b = 0) : d = "#cpmstarStaging" == d ? "staging.server" : "https:" == g ? "ssl.cdne" : "cdn";
            c.src = g + "//" + d + ".cpmstar.com/cached/zonefiles/" + a + ".js?rnd=" + b;
            a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(c,
                a);
            var e = window.cpmstarx = window.cpmstarx || {};
            window.cpmstarAPI = function(a) {
                (e.cmd = e.cmd || []).push(a)
            }
        })(a)
    };
    c.prototype.setContentID = function(a) {
        this.contentid = a;
        window.cpmstarAPI({
            kind: "setrequestdata",
            data: {
                "*": {
                    contentid: a
                }
            }
        })
    };
    c.prototype.setSubpoolID = function(a) {
        this.subpoolid = a;
        window.cpmstarAPI({
            kind: "setrequestdata",
            data: {
                "*": {
                    subpoolid: a
                }
            }
        })
    };
    c.singleton = new c;
    window.CPMStarGameAPI = {};
    window.CPMStarGameAPI.setTarget = c.singleton.setTarget.bind(c.singleton);
    window.CPMStarGameAPI.loadZone = c.singleton.loadZone.bind(c.singleton);
    window.CPMStarGameAPI.setContentID = c.singleton.setContentID.bind(c.singleton);
    window.CPMStarGameAPI.setSubpoolID = c.singleton.setSubpoolID.bind(c.singleton);
    d.prototype.isLoaded = function() {
        return 0 < this.status
    };
    d.prototype.load = function() {
        var a = this;
        if ("pending" == this.lastLoadStatus) console.log("Cannot load a video ad while a video ad load is pending");
        else {
            this.lastLoadStatus = "pending";
            a.status = 0;
            try {
                return cpmstarAPI({
                    kind: "request",
                    module: this.placementid,
                    config: {
                        style: c.singleton.isFixed ? {
                            position: "fixed"
                        } : void 0,
                        target: {
                            el: c.singleton.targetElement,
                            kind: "first"
                        },
                        events: {
                            onstart: a.onStart.bind(a),
                            onclose: a.onClose.bind(a)
                        }
                    },
                    cb: function(b) {
                        a.showfn = b;
                        a.status++;
                        a.lastLoadStatus = "success";
                        a.dispatchEvent(h("loaded"))
                    },
                    fail: function(b) {
                        a.status = 0;
                        a.lastLoadStatus = "failed";
                        a.dispatchEvent(h("load_failed"))
                    }
                }), this
            } catch (g) {}
        }
    };
    d.prototype.onStart = function() {
        this.status++;
        this.dispatchEvent(h("ad_opened"))
    };
    d.prototype.onClose = function() {
        this.status++;
        this.dispatchEvent(h("ad_closed"))
    };
    d.prototype.show =
        function() {
            try {
                if (null != this.showfn) return this.showfn(), this.showfn = null, this.status++, this
            } catch (a) {}
        };
    d.prototype.destroy = function() {
        try {
            this.status = -1
        } catch (a) {}
    };
    l.prototype = Object.create(d.prototype);
    e.prototype = Object.create(d.prototype);
    e.prototype.onClose = function() {
        e.currentInterstitialShowing = null;
        this.status = 0;
        this.dispatchEvent(h("ad_closed"))
    };
    e.prototype.show = function() {
        if (e.currentInterstitialShowing) return console.log("Can't show two interstitials at once"), this;
        try {
            d.prototype.show.call(this),
                e.currentInterstitialShowing = this
        } catch (a) {
            console.log(a)
        }
        return this
    };
    e.prototype.destroy = function() {
        try {
            e.currentInterstitialShowing = null, d.prototype.destroy.call(this)
        } catch (a) {}
    };
    f.prototype = Object.create(d.prototype);
    f.prototype.onClose = function() {
        f.currentRewardedVideoShowing = null;
        this.status = 0;
        this.dispatchEvent(h("ad_closed"))
    };
    f.prototype.show = function() {
        if (f.currentRewardedVideoShowing) return console.log("Can't show two rewarded videos at once"), this;
        try {
            d.prototype.show.call(this), f.currentRewardedVideoShowing =
                this
        } catch (a) {
            console.log(a)
        }
        return this
    };
    f.prototype.destroy = function() {
        try {
            f.currentRewardedVideoShowing = null, d.prototype.destroy.call(this)
        } catch (a) {}
    };
    k.prototype.isReady = function() {
        return 1 == this.status
    };
    k.prototype.load = function(a) {
        try {
            var b = this;
            a || (a = "top");
            if (0 == this.status) return cpmstarAPI({
                id: this.instanceid,
                kind: "request",
                module: this.placementid,
                config: {
                    options: {
                        position: a
                    },
                    target: {
                        el: c.singleton.targetElement,
                        kind: "first"
                    }
                },
                request: {
                    subpoolid: c.singleton.subpoolid
                },
                cb: function(a) {
                    a(function() {
                        b.status =
                            1;
                        b.dispatchEvent(h("loaded"))
                    })
                },
                fail: function(a) {
                    b.status = 0;
                    b.dispatchEvent(h("load_failed"))
                }
            }), this
        } catch (p) {}
    };
    k.prototype.show = function() {
        try {
            if (!(0 > this.status)) return 0 == this.status ? load() : cpmstarAPI({
                kind: "adcmd",
                module: this.instanceid,
                command: "show"
            }), this
        } catch (a) {}
    };
    k.prototype.hide = function() {
        try {
            if (!(0 >= this.status)) return cpmstarAPI({
                kind: "adcmd",
                module: this.instanceid,
                command: "hide"
            }), this
        } catch (a) {}
    };
    this.destroy = function() {
        try {
            this.status = -1
        } catch (a) {}
    };
    var b;
    window.CPMStarGameAPI.PrerollView =
        l;
    window.CPMStarGameAPI.BannerView = k;
    window.CPMStarGameAPI.InterstitialView = e;
    window.CPMStarGameAPI.RewardedVideoView = f;
    window.CPMStarGameAPI.createInterstitial = function(a) {
        b = new e(a && a.placementid ? a.placementid : "interstitial");
        a && (b.addEventListener("ad_opened", function() {
            if (b.isLoaded) {
                if (a && a.onAdOpened) a.onAdOpened()
            } else b.reload && b.load()
        }), b.addEventListener("ad_closed", function() {
            setTimeout(function() {
                window.cpmstarAPI && window.cpmstarAPI({
                    kind: "adcmd",
                    module: "anchor",
                    command: "refresh"
                });
                if (a &&
                    a.onAdClosed) a.onAdClosed()
            }, 700)
        }), b.reload = a.reload, !1 !== b.reload && b.load());
        b.created = (new Date).getTime()
    };
    window.CPMStarGameAPI.displayInterstitial = function(a) {
        null == b && window.CPMStarGameAPI.createInterstitial({
            kind: "game.createInterstitial"
        });
        var c = function() {
                if (a && a.onAdOpened) a.onAdOpened();
                b.removeEventListener("ad_opened", c)
            },
            d = function() {
                if (a && a.onAdClosed) a.onAdClosed();
                b.removeEventListener("ad_closed", d);
                !1 === b.reload || b.isLoaded() || b.load()
            };
        if ("pending" == b.lastLoadStatus) {
            b.addEventListener("ad_opened",
                c);
            b.addEventListener("ad_closed", d);
            var f = function() {
                    b.removeEventListener("loaded", f);
                    b.removeEventListener("load_failed", h);
                    b.show()
                },
                h = function() {
                    b.removeEventListener("loaded", f);
                    b.removeEventListener("load_failed", h);
                    b.removeEventListener("ad_opened", c);
                    b.removeEventListener("ad_closed", d);
                    a && a.fail && a.fail()
                };
            b.addEventListener("loaded", f);
            b.addEventListener("load_failed", h)
        } else b.isLoaded() ? (e.currentInterstitialShowing || (b.addEventListener("ad_opened", c), b.addEventListener("ad_closed", d)),
            b.show()) : (b.load(), a && a.fail && a.fail())
    };
    var m = window.cpmstarx = window.cpmstarx || {};
    m.apis = m.apis || [];
    m.apis.push({
        name: "game",
        api: window.CPMStarGameAPI
    })
})();