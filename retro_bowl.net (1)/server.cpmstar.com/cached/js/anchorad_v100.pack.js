var cpmstar_anchorad_settings = cpmstar_anchorad_settings || {},
    create_cpmstar_anchorad = function(a) {
        function y(b) {
            if (b || !D && !w) b = -1 * a.slideDistance + "px", q.isIOS() ? q.setAnimationStyle(e, "Transform", "translate(0px," + b + ")") : e.style[r] = b, w = !0
        }
        var q = function() {
                var a = ["webkit", "Moz", "O", "ms", "Khtml"];
                return {
                    setAnimationStyle: function(b, g, e) {
                        for (var d = !1, f = 0; f < a.length; f++)
                            if (void 0 !== b.style[a[f] + g]) {
                                b.style[a[f] + g] = e;
                                d = !0;
                                break
                            }
                        return d
                    },
                    setCSSStyle: function(a, b, e) {
                        var d = !1;
                        try {
                            void 0 !== a.style[b] && (a.style[b] =
                                e, d = !0)
                        } catch (f) {
                            d = !1
                        }
                        return d
                    },
                    ieVersion: function() {
                        var a = -1;
                        "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1));
                        return a
                    },
                    isIOS: function() {
                        var a = !1;
                        if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)) a = !0;
                        return a
                    }
                }
            }(),
            E, H = function() {
                E = setInterval(function() {
                    a.d.getElementsByTagName("body")[0] && (clearInterval(E), B())
                }, 10)
            },
            C = function() {
                w && (e.style.color = "#FFF", q.setAnimationStyle(e, "Transition",
                    "2s ease"), q.isIOS() ? q.setAnimationStyle(e, "Transform", "translate(0px,0px)") : e.style[r] = "0px", w = !1)
            },
            A = function() {
                var b;
                void 0 != m.contentDocument && void 0 != m.contentDocument.body ? b = m.contentDocument.body : t && (b = t);
                if (void 0 != b) {
                    for (var d = b.getElementsByTagName("object"), g = b.getElementsByTagName("img"), k = b.getElementsByTagName("iframe"), l = b.getElementsByTagName("div"), f = 0, n = 0, c = 0; c < d.length; c++) d[c].height > f && (f = d[c].height), d[c].width > n && (n = d[c].width);
                    for (c = 0; c < g.length; c++) g[c].height > f && (f = g[c].height),
                        g[c].width > n && (n = g[c].width);
                    for (c = 0; c < k.length; c++) k[c].height > f && (f = k[c].height), k[c].width > n && (n = k[c].width);
                    for (c = 0; c < k.length; c++) k[c].height > f && (f = k[c].height), k[c].width > n && (n = k[c].width);
                    for (c = 0; c < l.length; c++) {
                        g = d = 0;
                        try {
                            d = parseInt(l[c].style.height), g = parseInt(l[c].style.width)
                        } catch (J) {}
                        d > f && (f = d);
                        g > n && (n = g);
                        l[c].innerHeight > f && (f = l[c].clientHeight);
                        l[c].innerWidth > n && (n = l[c].clientWidth)
                    }
                    if (0 === f) {
                        a: if (b.classList && b.classList.contains && 0 < b.classList.contains("cpmstar_googlead")) b = !0;
                            else {
                                b =
                                    b.getElementsByTagName("script");
                                for (l = 0; l < b.length; l++)
                                    if (0 <= b[l].src.indexOf("//pagead2.googlesyndication.com/pagead/show_ads.js")) {
                                        b = !0;
                                        break a
                                    }
                                b = !1
                            }b && (f = 90, 0 === n && (n = 728))
                    }
                    a.slideDistance = "height" == z ? f : n;
                    m.height = f;
                    m.width = n
                }
                0 < a.slideDistance ? (p.style[r] = a.slideDistance - 26 + "px", h.style[r] = a.slideDistance - 36 + "px") : (p.style[r] = "0px", h.style[r] = "0px");
                p.style.backgroundColor = a.bgColorBase;
                q.setCSSStyle(p, "opacity", "0.25") || q.setCSSStyle(p, "filter", "alpha(opacity=25)");
                q.setAnimationStyle(e, "Transition",
                    "all 2s ease");
                y()
            },
            t, m, e, p, h, v, D = !1,
            w = !1,
            F = "bottom",
            r = "top",
            z = "height",
            x = "width",
            u = "left",
            G = function(a) {
                a = a.toString();
                return "%" == a.slice(a.length - 1) ? "%" : "px" == a.slice(a.length - 2) ? "px" : ""
            },
            I = function() {
                var b = a.el == a.d.getElementsByTagName("body")[0];
                b || "static" != getComputedStyle(a.el).position || (a.el.style.position = "relative", a.el.style.overflow = "hidden");
                var d = a.d.createElement("div");
                d.name = "cpmstar_anchor";
                d.style.zIndex = "2147483647";
                d.style.position = b ? "fixed" : "absolute";
                d.style[x] = "100%";
                d.style[F] =
                    "0px";
                d.style[u] = "0px";
                b = a.d.createElement("div");
                b.name = "cpmstar_anchor_container";
                b.style.position = "relative";
                b.style.width = "100%";
                b.style.height = "100%";
                e = a.d.createElement("div");
                e.name = "cpmstar_anchor_slide";
                e.style.position = "absolute"; - 1 != a.dir && (e.style[z] = "0px");
                e.style[r] = "0px";
                a.closeBarSize ? (e.style["margin" + u.charAt(0).toUpperCase() + u.substr(1)] = -Math.round(parseFloat(a.closeBarSize) / 2) + ("%" == G(a.closeBarSize) ? "%" : "px"), e.style[u] = "50%", e.style[x] = Math.round(parseFloat(a.closeBarSize)) +
                    ("%" == G(a.closeBarSize) ? "%" : "px")) : (e.style[u] = "0px", e.style[x] = "100%");
                e.style.backgroundColor = "Transparent";
                var g = a.d.createElement("div");
                g.name = "cpmstar_anchor_ad";
                g.style.backgroundColor = "Transparent";
                g.style.position = "absolute";
                g.style.zIndex = "2147483647";
                a.horizontal ? (g.style.top = "50%", g.style.transform = "translate(0, -50%)") : (g.style.left = "50%", g.style.transform = "translate(-50%, 0)");
                g.style[r] = "0px";
                v = a.d.createElement("div");
                v.style.position = "relative";
                v.style.zIndex = "2147483647";
                m = a.d.createElement("iframe");
                m.name = "cpmstar_anchor_ifrad";
                m.scrolling = "no";
                m.frameBorder = 0;
                m.marginHeight = 0;
                m.marginWidth = 0;
                t = a.d.createElement("div");
                t.id = a.divid;
                p = a.d.createElement("div");
                p.name = "cpmstar_anchor_close";
                p.style.position = "absolute";
                p.style[r] = "30px";
                p.style[z] = "30px";
                p.style[x] = "100%";
                p.style[u] = "0px";
                p.style.backgroundColor = a.bgColorBase;
                var k = a.d.createElement("div");
                7 == q.ieVersion() || 8 == q.ieVersion() ? k.style.styleFloat = "right" : k.style.cssFloat = "right";
                k.style.position = "relative";
                k.style.zIndex = "2147483647";
                var l = a.d.createElement("a");
                l.href = "#";
                l.onclick = "";
                l.style.color = "black";
                h = a.d.createElement("img");
                h.src = ("https:" == a.d.location.protocol ? "https://ssl.cdne" : "http://cdn") + ".cpmstar.com/cached/x.png";
                h.name = "cpmstar_anchor_close_button";
                h.alt = "Close Ad";
                h.style.borderWidth = "0px";
                h.style.position = "absolute";
                h.style.zIndex = "2147483647";
                h.style.right = "5px";
                h.style.margin = "10px";
                h.style.cursor = "pointer";
                h.style.verticalAlign = "middle";
                h.style["min-width"] = "24px";
                h.style["min-height"] = "24px";
                h.style.width =
                    "24px";
                h.style.height = "24px";
                h.style.visibility = "visible";
                h.style.display = "block";
                var f = a.d.createElement("div");
                f.onclick = function() {
                    D = !0;
                    C();
                    a.triggerEvent && a.triggerEvent("onclose");
                    return !1
                };
                f.appendChild(h);
                v.appendChild(t);
                g.appendChild(v);
                k.appendChild(l);
                p.appendChild(k);
                e.appendChild(g);
                e.appendChild(p);
                e.appendChild(f);
                b.appendChild(e);
                d.appendChild(b);
                a.el.appendChild(d)
            },
            B = function() {
                I();
                var b = a.renderAd;
                if (b) b(t), A(), a.triggerEvent && a.triggerEvent("onready");
                else {
                    b = '<script type="text/javascript">function adloaded(){var chkRdyInterval;var chkBodyRdy = function(){if(document.getElementsByTagName(\'body\')[0]){clearInterval(chkRdyInterval);cpmstar_anchorad.anchorReady();}};var adReady = function(){chkRdyInterval = setInterval(function(){chkBodyRdy();}, 10);};adReady();}function ieLoadBugFix(scriptElement, callback){if(scriptElement.readyState == "loaded" || scriptElement.readyState == "complete"){callback();}else{setTimeout(function (){ ieLoadBugFix(scriptElement, callback); }, 100);}}\x3c/script><script type="text/javascript" id=\'adscript\' name=\'adscript\' src="' +
                        ("https:" == window.location.protocol ? "https:" : "http:") + "//server.cpmstar.com/view.aspx?poolid=" + a.poolid + "&subpoolid=" + a.subpoolid + "&script=1&rnd=" + Math.round(999999 * Math.random()) + "\" onload='adloaded();'>\x3c/script>";
                    if (7 == q.ieVersion() || 8 == q.ieVersion()) b += "<script type=\"text/javascript\">var s = document.getElementById('adscript');ieLoadBugFix(s, function(){ adloaded(); });\x3c/script>";
                    m.parentNode || v.appendChild(m);
                    var d = m.contentWindow.document;
                    (m.contentWindow || m.contentDocument.defaultView).cpmstar_anchorad =
                        cpmstar_anchorad;
                    d.open();
                    d.write(b);
                    (10 <= q.ieVersion() || -1 == q.ieVersion()) && d.close()
                }
            };
        a.manualInit || (a.el ? a.d = a.el.ownerDocument : (a.d = a.d || document, a.el = a.d.getElementsByTagName("body")[0]), a = {
                poolid: a.poolid,
                subpoolid: a.subpoolid || 0,
                d: a.d,
                el: a.el,
                divid: a.divid || "cpmstar_anchor_divad",
                bgColorBase: a.bgColorBase || "black",
                closeBarSize: a.width || a.closeBarSize,
                slideDistance: a.height || a.slideDistance || 0,
                dir: a.dir || 1,
                horizontal: a.horizontal || !1,
                renderAd: a.renderAd,
                triggerEvent: a.triggerEvent,
                manualInit: a.manualInit
            },
            F = a.horizontal ? 1 == a.dir ? "right" : "left" : 1 == a.dir ? "bottom" : "top", r = a.horizontal ? 1 != a.dir ? "right" : "left" : 1 != a.dir ? "bottom" : "top", z = a.horizontal ? "width" : "height", x = a.horizontal ? "height" : "width", u = a.horizontal ? "top" : "left", H());
        return {
            initAd: function() {
                B()
            },
            anchorReady: function() {
                A()
            },
            showAnchor: function() {
                y(!0)
            },
            hideAnchor: function() {
                C()
            },
            adcmd: function(b) {
                ({
                    init: B,
                    ready: A,
                    show: function() {
                        y(!0)
                    },
                    hide: C,
                    refresh: function() {
                        a.renderAd = b.renderFn;
                        var d = t;
                        d.innerHTML = "";
                        b.renderFn(d);
                        A();
                        w && y(!0)
                    }
                })[b.command].apply(this,
                    b.args)
            }
        }
    },
    cpmstar_anchorad = create_cpmstar_anchorad(cpmstar_anchorad_settings);