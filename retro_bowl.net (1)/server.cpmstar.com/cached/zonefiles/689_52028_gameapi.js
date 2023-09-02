(function(zonevars) {
    var zonemasters = zonevars.zonemasters;
    var top_loc = null,
        top_href = "",
        top_hash = "";

    function getQueryHash() {
        top_hash = (top_hash = top_href.match(/[\?\&]cpmstarhash=([^\&\#]*)/)) == null ? "" : "#" + top_hash[1];
    }
    try {
        top_loc = window.top.location;
        top_href = top_loc.href;
        top_hash = top_loc.hash;
    } catch (err) {
        var top_win = window;
        try {
            while (top_win.parent && top_win.parent.document !== top_win.document && top_win.parent.document.location.href) {
                top_win = top_win.parent;
            }
        } catch (e) {}
        try {
            top_loc = top_win.location;
            top_href = top_loc.href;
        } catch (e) {}
        getQueryHash();
    }
    if (!top_hash) getQueryHash();

    var x = (10 + ((x * 7) % 26)).toString(36) + (x = window.location.href.split('').reduce(function(a, b) {
        return (a << 5) - a + b.charCodeAt(0) >>> 1
    }, 0));
    var y = window.location.href.split('').reduce(function(a, b) {
        return (a << 5) - a + b.charCodeAt(0) >>> 1
    }, 0);
    y = (10 + ((y * 7) % 26)).toString(36) + y.toString(36);
    var z = window.location.href.split('').reduce(function(a, b) {
        return (a << 5) - a + b.charCodeAt(0) >>> 0
    }, 0);
    z = (10 + ((z * 7) % 26)).toString(36) + z.toString(36);
    var q = window.location.href.split('#')[0].split('').reduce(function(a, b) {
        return (a << 5) - a + b.charCodeAt(0) >>> 1
    }, 0);
    q = (10 + ((q * 7) % 26)).toString(36) + q.toString(36);
    var cpmstarx = "cpmstarx";
    if (window[x]) window[y] = window[x];
    if (window[y]) window[z] = window[y];
    if (window[z]) window[q] = window[z];
    if (window[q]) window[cpmstarx] = window[q];

    var dev = top_hash == "#cpmstarDev";
    var staging = (top_hash == "#cpmstarStaging" || top_hash == "#urlzing");
    if (typeof window[cpmstarx] !== "object") window[x] = window[y] = window[z] = window[q] = window[cpmstarx] = {};

    if (typeof(window[cpmstarx].zonevars) === "object") return;
    window[cpmstarx].zonevars = zonevars;

    var ver = "1263";
    window[cpmstarx].zonevars.ver = ver;


    if (top_hash == "#urlzing") {
        var qs = new URLSearchParams(window.location.search);
        if (qs.has('cpmstarDev')) {
            dev = true;
        }
    }

    for (var i = 0; i < zonemasters.length; i++) { //Insert all the zonemasters
        var zonemasterobj = (typeof zonemasters[i] === "string") ? {
            path: '/cached/zonemasters/' + zonemasters[i]
        } : zonemasters[i];

        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;

        var proto = (window.location.protocol == "http:") ? "http:" : "https:";
        if (zonemasterobj.host == null) {
            if (dev) zonemasterobj.host = "dev.server.cpmstar.com";
            else if (staging) zonemasterobj.host = "staging.server.cpmstar.com";
            else if (proto == "https:") zonemasterobj.host = "ssl.cdne.cpmstar.com";
            else zonemasterobj.host = "cdn.cpmstar.com";
        } else {
            if (staging) {
                if (zonevars.jbcheck) zonevars.jbcheck.host = "staging.urlzing.com";
                zonemasterobj.host = "staging.urlzing.com";
            }
        }

        s.src = proto + "//" + zonemasterobj.host + zonemasterobj.path + "?ver=" + ver;
        var s2 = document.getElementsByTagName('script')[0];
        s2.parentNode.insertBefore(s, s2);
    }
})({
    "zonemasters": [
        "mobilemodules.js",
        {
            "path": "/cached/zonemasters/cpmstarjsgameapi.js",
            "api": "game"
        }
    ],
    "requests": {
        "hb": {
            "kind": "hb",
            "pbjsfile": "starprebid.js",
            "PREBID_TIMEOUT": 850,
            "adUnits": [{
                    "bids": [{
                            "bidder": "consumable",
                            "params": {
                                "unitId": "7027",
                                "unitName": "cnsmbl-audio-160x600-slider",
                                "zoneIds": [
                                    2000865
                                ],
                                "siteId": "2000865",
                                "networkId": "9969"
                            },
                            "campaignid": 447993,
                            "campaignids": {
                                "160x600": 447993
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "appnexus",
                            "params": {
                                "placementId": "21225167"
                            },
                            "campaignid": 467298,
                            "campaignids": {
                                "160x600": 467298
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "openx",
                            "params": {
                                "delDomain": "cpmstar-d.openx.net",
                                "unit": "544001994"
                            },
                            "campaignid": 467474,
                            "campaignids": {
                                "160x600": 467474
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "richaudience",
                            "params": {
                                "pid": "1MXMGsrJ44",
                                "supplyType": "site"
                            },
                            "campaignid": 467551,
                            "campaignids": {
                                "160x600": 467551
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "rubicon",
                            "params": {
                                "accountId": "23330",
                                "siteId": "370186",
                                "zoneId": "2024500"
                            },
                            "campaignid": "467673",
                            "campaignids": {
                                "160x600": 467673
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "rhythmone",
                            "params": {
                                "placementId": "233287",
                                "zone": "1r",
                                "path": "mvo"
                            },
                            "campaignid": 468262,
                            "campaignids": {
                                "160x600": 468262
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "awesomeads",
                            "params": {
                                "endpoint": "proxy",
                                "width": "160",
                                "height": "600",
                                "placementId": "66557",
                                "ip": "%%IP%%"
                            },
                            "campaignid": 470148,
                            "campaignids": {
                                "160x600": 470148
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "sharethrough",
                            "params": {
                                "pkey": "mG8gIAk20sfkUpITT2N2pjNz"
                            },
                            "campaignid": "474556",
                            "campaignids": {
                                "160x600": 474556
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "eplanning",
                            "params": {
                                "ci": "59ca2"
                            },
                            "campaignid": 480725,
                            "campaignids": {
                                "160x600": 480725
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "between",
                            "params": {
                                "s": 4612931,
                                "cur": "USD"
                            },
                            "campaignid": 480752,
                            "campaignids": {
                                "160x600": 480752
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "nobid",
                            "params": {
                                "siteId": "22837493377"
                            },
                            "campaignid": 480991,
                            "campaignids": {
                                "160x600": 480991
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "gumgum",
                            "params": {
                                "inSlot": "438773"
                            },
                            "campaignid": 483697,
                            "campaignids": {
                                "160x600": 483697
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        }
                    ],
                    "mediaTypes": {
                        "banner": {
                            "sizes": [
                                [
                                    160,
                                    600
                                ]
                            ]
                        }
                    },
                    "fallback": {
                        "poolid": 85098,
                        "width": 160,
                        "height": 600
                    },
                    "minBid": 0,
                    "floors": {
                        "currency": "USD",
                        "schema": {
                            "fields": [
                                "mediaType"
                            ]
                        },
                        "values": {
                            "banner": 0
                        }
                    },
                    "code": "/Moana_Games/$85098",
                    "gamFilters": [{
                            "type": "Country",
                            "data": "WORLDWIDE",
                            "exclude": true
                        },
                        {
                            "type": "Domain",
                            "data": "amongus-online.net",
                            "exclude": false
                        },
                        {
                            "type": "Param",
                            "data": "gampb=1",
                            "exclude": true
                        },
                        {
                            "type": "Param",
                            "data": "json=c_o",
                            "exclude": true
                        }
                    ],
                    "gamAdUnitCode": "amongus160x600",
                    "gamCampaignid": 485248,
                    "gamPageUrl": "https://amongus-online.net/",
                    "gamDiscrep": 0.18506610034056098,
                    "gamDiscrepGross": 0.12668700000000002,
                    "gamDiscrepLocalGross": 0.6845500054676086
                },
                {
                    "bids": [{
                            "bidder": "awesomeads",
                            "params": {
                                "endpoint": "proxy",
                                "width": "0",
                                "height": "0",
                                "placementId": "57364",
                                "ip": "%%IP%%"
                            },
                            "campaignid": 466504,
                            "campaignids": {},
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "rubicon",
                            "params": {
                                "accountId": "23330",
                                "siteId": "370186",
                                "zoneId": "2024500",
                                "sizes": [
                                    201
                                ],
                                "video": {
                                    "language": "en",
                                    "minduration": 0,
                                    "maxduration": 30,
                                    "protocols": [
                                        2,
                                        3,
                                        5,
                                        6
                                    ],
                                    "startdelay": 0,
                                    "mimes": [
                                        "video/mp4",
                                        "application/javascript"
                                    ],
                                    "linearity": 1,
                                    "api": [
                                        1,
                                        2
                                    ],
                                    "boxingallowed": 1,
                                    "pos": 1
                                }
                            },
                            "campaignid": "467675",
                            "campaignids": {},
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "awesomeads",
                            "params": {
                                "endpoint": "proxy",
                                "width": "0",
                                "height": "0",
                                "placementId": "66556",
                                "ip": "%%IP%%"
                            },
                            "campaignid": 470043,
                            "campaignids": {},
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                },
                                {
                                    "type": "Param",
                                    "data": "debug=1",
                                    "exclude": false
                                }
                            ]
                        },
                        {
                            "bidder": "onetag",
                            "params": {
                                "pubId": "753930a353d6990",
                                "ext": {
                                    "placement_name": "473434"
                                }
                            },
                            "campaignid": "473434",
                            "campaignids": {},
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "openx",
                            "params": {
                                "delDomain": "cpmstar-d.openx.net",
                                "unit": "557556750",
                                "video": {
                                    "mimes": [
                                        "application/javascript",
                                        "video/mp4"
                                    ]
                                }
                            },
                            "campaignid": 477728,
                            "campaignids": {},
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "eplanning",
                            "params": {
                                "ci": "59ca2"
                            },
                            "campaignid": 480726,
                            "campaignids": {},
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "nobid",
                            "params": {
                                "siteId": "22451380315"
                            },
                            "campaignid": 480992,
                            "campaignids": {},
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        }
                    ],
                    "mediaTypes": {
                        "video": {
                            "placement": 1,
                            "playerSize": [
                                960,
                                540
                            ],
                            "w": 960,
                            "h": 540,
                            "context": "instream",
                            "pos": 1,
                            "api": [
                                1,
                                2
                            ],
                            "protocols": [
                                2,
                                3,
                                5,
                                6
                            ],
                            "mimes": [
                                "video/mp4",
                                "application/json"
                            ],
                            "minduration": 0,
                            "maxduration": 30,
                            "linearity": 1
                        }
                    },
                    "fallback": {
                        "kind": "video",
                        "poolid": 85115,
                        "vast": true
                    },
                    "minBid": 0,
                    "floors": {
                        "currency": "USD",
                        "schema": {
                            "fields": [
                                "mediaType"
                            ]
                        },
                        "values": {
                            "video": 0
                        }
                    },
                    "code": "instream",
                    "gamPageUrl": "amongus-online.net"
                },
                {
                    "bids": [],
                    "mediaTypes": {
                        "banner": {
                            "sizes": [
                                [
                                    728,
                                    90
                                ],
                                [
                                    800,
                                    100
                                ],
                                [
                                    970,
                                    90
                                ],
                                [
                                    320,
                                    50
                                ],
                                [
                                    300,
                                    50
                                ],
                                [
                                    216,
                                    36
                                ]
                            ]
                        }
                    },
                    "fallback": {
                        "poolid": 85116
                    },
                    "minBid": 0,
                    "floors": {
                        "currency": "USD",
                        "schema": {
                            "fields": [
                                "mediaType"
                            ]
                        },
                        "values": {
                            "banner": 0
                        }
                    },
                    "code": "anchor"
                },
                {
                    "bids": [{
                            "bidder": "consumable",
                            "params": {
                                "unitId": "7027",
                                "unitName": "cnsmbl-audio-160x600-slider",
                                "zoneIds": [
                                    2000865
                                ],
                                "siteId": "2000865",
                                "networkId": "9969"
                            },
                            "campaignid": 447993,
                            "campaignids": {
                                "160x600": 447993
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "appnexus",
                            "params": {
                                "placementId": "21231803"
                            },
                            "campaignid": 467299,
                            "campaignids": {
                                "160x600": 467299
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "openx",
                            "params": {
                                "delDomain": "cpmstar-d.openx.net",
                                "unit": "544001993"
                            },
                            "campaignid": 467473,
                            "campaignids": {
                                "160x600": 467473
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "richaudience",
                            "params": {
                                "pid": "0KU2v7J0XM",
                                "supplyType": "site"
                            },
                            "campaignid": 467552,
                            "campaignids": {
                                "160x600": 467552
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "rubicon",
                            "params": {
                                "accountId": "23330",
                                "siteId": "370186",
                                "zoneId": "2024500"
                            },
                            "campaignid": "467673",
                            "campaignids": {
                                "160x600": 467673
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "rhythmone",
                            "params": {
                                "placementId": "233287",
                                "zone": "1r",
                                "path": "mvo"
                            },
                            "campaignid": 468262,
                            "campaignids": {
                                "160x600": 468262
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "awesomeads",
                            "params": {
                                "endpoint": "proxy",
                                "width": "160",
                                "height": "600",
                                "placementId": "66557",
                                "ip": "%%IP%%"
                            },
                            "campaignid": 470148,
                            "campaignids": {
                                "160x600": 470148
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "sharethrough",
                            "params": {
                                "pkey": "mG8gIAk20sfkUpITT2N2pjNz"
                            },
                            "campaignid": "474556",
                            "campaignids": {
                                "160x600": 474556
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "eplanning",
                            "params": {
                                "ci": "59ca2"
                            },
                            "campaignid": 480725,
                            "campaignids": {
                                "160x600": 480725
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "between",
                            "params": {
                                "s": 4612931,
                                "cur": "USD"
                            },
                            "campaignid": 480752,
                            "campaignids": {
                                "160x600": 480752
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "nobid",
                            "params": {
                                "siteId": "22837493377"
                            },
                            "campaignid": 480991,
                            "campaignids": {
                                "160x600": 480991
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        },
                        {
                            "bidder": "gumgum",
                            "params": {
                                "inSlot": "438773"
                            },
                            "campaignid": 483697,
                            "campaignids": {
                                "160x600": 483697
                            },
                            "filters": [{
                                    "type": "Country",
                                    "data": "Northern Mariana Islands",
                                    "exclude": false
                                },
                                {
                                    "type": "Impressions",
                                    "data": "",
                                    "exclude": true
                                }
                            ]
                        }
                    ],
                    "mediaTypes": {
                        "banner": {
                            "sizes": [
                                [
                                    160,
                                    600
                                ]
                            ]
                        }
                    },
                    "fallback": {
                        "poolid": 85119,
                        "width": 160,
                        "height": 600
                    },
                    "minBid": 0,
                    "floors": {
                        "currency": "USD",
                        "schema": {
                            "fields": [
                                "mediaType"
                            ]
                        },
                        "values": {
                            "banner": 0
                        }
                    },
                    "code": "/Moana_Games/$85119",
                    "gamFilters": [{
                            "type": "Country",
                            "data": "WORLDWIDE",
                            "exclude": true
                        },
                        {
                            "type": "Domain",
                            "data": "amongus-online.net",
                            "exclude": false
                        },
                        {
                            "type": "Param",
                            "data": "gampb=1",
                            "exclude": true
                        },
                        {
                            "type": "Param",
                            "data": "json=c_o",
                            "exclude": true
                        }
                    ],
                    "gamAdUnitCode": "amongus160x600",
                    "gamCampaignid": 485248,
                    "gamPageUrl": "https://amongus-online.net/",
                    "gamDiscrep": 0.18506610034056098,
                    "gamDiscrepGross": 0.12668700000000002,
                    "gamDiscrepLocalGross": 0.6845500054676086
                },
                {
                    "fallback": {
                        "kind": "banner"
                    },
                    "code": "banner300x250",
                    "mediaTypes": {
                        "banner": {
                            "sizes": [
                                [
                                    300,
                                    250
                                ]
                            ]
                        }
                    }
                }
            ],
            "PBJS_TIMEOUT": 3000,
            "publisherid": 52028,
            "bidderDiscreps": {
                "consumable": {
                    "tagperadunit": false,
                    "totalgross": 266.72915,
                    "totallocalgross": 270.73877681738463,
                    "discrep": 0.9851900534363086
                },
                "appnexus": {
                    "tagperadunit": true,
                    "totalgross": 38.69583,
                    "totallocalgross": 74.85407153426877,
                    "discrep": 0.5169502367320761
                },
                "openx": {
                    "tagperadunit": true,
                    "totalgross": 1.42036,
                    "totallocalgross": 2.9549569762409735,
                    "discrep": 0.4806702809618746
                },
                "richaudience": {
                    "tagperadunit": true,
                    "totalgross": 0.01,
                    "totallocalgross": 0.01,
                    "discrep": 1
                },
                "rubicon": {
                    "tagperadunit": false,
                    "totalgross": 623.3517,
                    "totallocalgross": 152.07268714833094,
                    "discrep": 4.099037846237214
                },
                "rhythmone": {
                    "tagperadunit": false,
                    "totalgross": 0.01,
                    "totallocalgross": 0.01,
                    "discrep": 1
                },
                "awesomeads": {
                    "tagperadunit": false,
                    "totalgross": 0.01,
                    "totallocalgross": 0.01,
                    "discrep": 1
                },
                "sharethrough": {
                    "tagperadunit": false,
                    "totalgross": 173.0524,
                    "totallocalgross": 131.7061519405231,
                    "discrep": 1.3139279938734247
                },
                "eplanning": {
                    "tagperadunit": false,
                    "totalgross": 0.6199999999999999,
                    "totallocalgross": 3.3556928789564697,
                    "discrep": 0.1847606507401247
                },
                "between": {
                    "tagperadunit": false,
                    "totalgross": 5.0438160000000005,
                    "totallocalgross": 0.9191109967703233,
                    "discrep": 5.487711514412878
                },
                "nobid": {
                    "tagperadunit": false,
                    "totalgross": 19.86048,
                    "totallocalgross": 10.843481305322493,
                    "discrep": 1.8315593895340176
                },
                "gumgum": {
                    "tagperadunit": false,
                    "totalgross": 0.09,
                    "totallocalgross": 0.01,
                    "discrep": 9
                },
                "google": {
                    "tagperadunit": true,
                    "totalgross": 0.12668700000000002,
                    "totallocalgross": 0.6845500054676086,
                    "discrep": 0.18506610034056098
                }
            }
        },
        "banner160x600": {
            "kind": "banner",
            "poolid": 85119
        },
        "instream": {
            "kind": "json",
            "vast": true,
            "poolid": 85115
        },
        "anchor": {
            "kind": "banner",
            "poolid": 85116
        },
        "pageviews": {
            "poolid": 85117
        }
    },
    "modules": [{
            "kind": "banner",
            "info": {
                "name": "POOL 85098"
            },
            "conditions": {
                "target": {
                    "kind": "replace",
                    "find": "$85098"
                }
            },
            "options": {
                "maxHeight": 600,
                "refreshrate": 60000
            },
            "request": "hb",
            "adUnitPath": "/Moana_Games/$85098"
        },
        {
            "kind": "anchor",
            "info": {
                "name": "anchor"
            },
            "conditions": {
                "target": {
                    "kind": "replace",
                    "find": "$85116"
                },
                "wait": true
            },
            "options": {
                "maxHeight": 100
            },
            "request": "hb",
            "adUnitPath": "anchor"
        },
        {
            "kind": "banner",
            "info": {
                "name": "POOL 85119"
            },
            "conditions": {
                "target": {
                    "kind": "replace",
                    "find": "$85119"
                }
            },
            "options": {
                "maxHeight": 600,
                "refreshrate": 60000
            },
            "request": "hb",
            "adUnitPath": "/Moana_Games/$85119"
        },
        {
            "info": {
                "name": "banner300x250"
            },
            "kind": "banner",
            "request": "hb",
            "adUnitPath": "banner300x250",
            "conditions": {
                "wait": true
            },
            "options": {
                "width": 300,
                "height": 250
            }
        },
        {
            "info": {
                "name": "banner728x90"
            },
            "kind": "banner",
            "request": "hb",
            "adUnitPath": "banner728x90",
            "conditions": {
                "wait": true
            },
            "options": {
                "width": 728,
                "height": 90
            }
        },
        {
            "info": {
                "name": "preroll"
            },
            "blueprint": "instreamvideo",
            "request": "hb",
            "adUnitPath": "instream",
            "options": {
                "requireViewable": false,
                "autoSizeToTarget": true
            },
            "conditions": {
                "wait": true
            },
            "css": {
                ".cpmsvideoclosebanner:after": {
                    "content": "'Start Game'"
                }
            }
        },
        {
            "info": {
                "name": "interstitial"
            },
            "blueprint": "instreamvideo"
        },
        {
            "info": {
                "name": "rewardedvideo"
            },
            "blueprint": "instreamvideo",
            "adUnitPath": "instream",
            "options": {
                "autoSkippability": false
            }
        }
    ],
    "options": {
        "referrerRevshare": 1
    },
    "info": {
        "id": 689,
        "tags": [],
        "zonepools": {
            "85098": {
                "module": "POOL 85098"
            },
            "85115": {
                "module": "rewardedvideo"
            },
            "85116": {
                "module": "anchor"
            },
            "85119": {
                "module": "POOL 85119"
            }
        }
    }
});