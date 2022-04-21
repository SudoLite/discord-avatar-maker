(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        522: function(t, e, n) {
            "use strict";
            var r = n(22),
                o = n(9),
                h = n(103),
                l = n(27),
                c = n(23),
                f = n(45),
                d = n(292),
                m = n(102),
                v = n(11),
                w = n(105),
                y = n(163).f,
                x = n(63).f,
                k = n(31).f,
                C = n(788).trim,
                M = o.Number,
                _ = M.prototype,
                E = "Number" == f(w(_)),
                P = function(t) {
                    var e, n, r, o, h, l, c, code, f = m(t, !1);
                    if ("string" == typeof f && f.length > 2)
                        if (43 === (e = (f = C(f)).charCodeAt(0)) || 45 === e) {
                            if (88 === (n = f.charCodeAt(2)) || 120 === n) return NaN
                        } else if (48 === e) {
                        switch (f.charCodeAt(1)) {
                            case 66:
                            case 98:
                                r = 2, o = 49;
                                break;
                            case 79:
                            case 111:
                                r = 8, o = 55;
                                break;
                            default:
                                return +f
                        }
                        for (l = (h = f.slice(2)).length, c = 0; c < l; c++)
                            if ((code = h.charCodeAt(c)) < 48 || code > o) return NaN;
                        return parseInt(h, r)
                    }
                    return +f
                };
            if (h("Number", !M(" 0o1") || !M("0b1") || M("+0x1"))) {
                for (var L, S = function(t) {
                        var e = arguments.length < 1 ? 0 : t,
                            n = this;
                        return n instanceof S && (E ? v((function() {
                            _.valueOf.call(n)
                        })) : "Number" != f(n)) ? d(new M(P(e)), n, S) : P(e)
                    }, T = r ? y(M) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), A = 0; T.length > A; A++) c(M, L = T[A]) && !c(S, L) && k(S, L, x(M, L));
                S.prototype = _, _.constructor = S, l(o, "Number", S)
            }
        },
        617: function(t, e, n) {
            ! function(e) {
                "use strict";
                var n = function() {
                        return {
                            escape: function(t) {
                                return t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
                            },
                            parseExtension: e,
                            mimeType: function(t) {
                                var n = e(t).toLowerCase();
                                return (r = "application/font-woff", {
                                    woff: r,
                                    woff2: r,
                                    ttf: "application/font-truetype",
                                    eot: "application/vnd.ms-fontobject",
                                    png: "image/png",
                                    jpg: "image/jpeg",
                                    jpeg: "image/jpeg",
                                    gif: "image/gif",
                                    tiff: "image/tiff",
                                    svg: "image/svg+xml"
                                })[n] || "";
                                var r
                            },
                            dataAsUrl: function(content, t) {
                                return "data:" + t + ";base64," + content
                            },
                            isDataUrl: function(t) {
                                return -1 !== t.search(/^(data:)/)
                            },
                            canvasToBlob: function(canvas) {
                                return canvas.toBlob ? new Promise((function(t) {
                                    canvas.toBlob(t)
                                })) : function(canvas) {
                                    return new Promise((function(t) {
                                        for (var e = window.atob(canvas.toDataURL().split(",")[1]), n = e.length, r = new Uint8Array(n), i = 0; i < n; i++) r[i] = e.charCodeAt(i);
                                        t(new Blob([r], {
                                            type: "image/png"
                                        }))
                                    }))
                                }(canvas)
                            },
                            resolveUrl: function(t, e) {
                                var n = document.implementation.createHTMLDocument(),
                                    base = n.createElement("base");
                                n.head.appendChild(base);
                                var a = n.createElement("a");
                                return n.body.appendChild(a), base.href = e, a.href = t, a.href
                            },
                            getAndEncode: function(t) {
                                c.impl.options.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (new Date).getTime());
                                return new Promise((function(e) {
                                    var n, r = new XMLHttpRequest;
                                    if (r.onreadystatechange = function() {
                                            if (4 !== r.readyState) return;
                                            if (200 !== r.status) return void(n ? e(n) : h("cannot fetch resource: " + t + ", status: " + r.status));
                                            var o = new FileReader;
                                            o.onloadend = function() {
                                                var content = o.result.split(/,/)[1];
                                                e(content)
                                            }, o.readAsDataURL(r.response)
                                        }, r.ontimeout = function() {
                                            n ? e(n) : h("timeout of 30000ms occured while fetching resource: " + t)
                                        }, r.responseType = "blob", r.timeout = 3e4, r.open("GET", t, !0), r.send(), c.impl.options.imagePlaceholder) {
                                        var o = c.impl.options.imagePlaceholder.split(/,/);
                                        o && o[1] && (n = o[1])
                                    }

                                    function h(t) {
                                        console.error(t), e("")
                                    }
                                }))
                            },
                            uid: (t = 0, function() {
                                return "u" + ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4) + t++
                            }),
                            delay: function(t) {
                                return function(e) {
                                    return new Promise((function(n) {
                                        setTimeout((function() {
                                            n(e)
                                        }), t)
                                    }))
                                }
                            },
                            asArray: function(t) {
                                for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
                                return e
                            },
                            escapeXhtml: function(t) {
                                return t.replace(/#/g, "%23").replace(/\n/g, "%0A")
                            },
                            makeImage: function(t) {
                                return new Promise((function(e, n) {
                                    var image = new Image;
                                    image.onload = function() {
                                        e(image)
                                    }, image.onerror = n, image.src = t
                                }))
                            },
                            width: function(t) {
                                var e = n(t, "border-left-width"),
                                    r = n(t, "border-right-width");
                                return t.scrollWidth + e + r
                            },
                            height: function(t) {
                                var e = n(t, "border-top-width"),
                                    r = n(t, "border-bottom-width");
                                return t.scrollHeight + e + r
                            }
                        };
                        var t;

                        function e(t) {
                            var e = /\.([^\.\/]*?)$/g.exec(t);
                            return e ? e[1] : ""
                        }

                        function n(t, e) {
                            var n = window.getComputedStyle(t).getPropertyValue(e);
                            return parseFloat(n.replace("px", ""))
                        }
                    }(),
                    r = function() {
                        var t = /url\(['"]?([^'"]+?)['"]?\)/g;
                        return {
                            inlineAll: function(t, n, h) {
                                return function() {
                                    return !e(t)
                                }() ? Promise.resolve(t) : Promise.resolve(t).then(r).then((function(e) {
                                    var r = Promise.resolve(t);
                                    return e.forEach((function(t) {
                                        r = r.then((function(e) {
                                            return o(e, t, n, h)
                                        }))
                                    })), r
                                }))
                            },
                            shouldProcess: e,
                            impl: {
                                readUrls: r,
                                inline: o
                            }
                        };

                        function e(e) {
                            return -1 !== e.search(t)
                        }

                        function r(e) {
                            for (var r, o = []; null !== (r = t.exec(e));) o.push(r[1]);
                            return o.filter((function(t) {
                                return !n.isDataUrl(t)
                            }))
                        }

                        function o(t, e, r, o) {
                            return Promise.resolve(e).then((function(t) {
                                return r ? n.resolveUrl(t, r) : t
                            })).then(o || n.getAndEncode).then((function(data) {
                                return n.dataAsUrl(data, n.mimeType(e))
                            })).then((function(r) {
                                return t.replace(function(t) {
                                    return new RegExp("(url\\(['\"]?)(" + n.escape(t) + ")(['\"]?\\))", "g")
                                }(e), "$1" + r + "$3")
                            }))
                        }
                    }(),
                    o = function() {
                        return {
                            resolveAll: function() {
                                return t(document).then((function(t) {
                                    return Promise.all(t.map((function(t) {
                                        return t.resolve()
                                    })))
                                })).then((function(t) {
                                    return t.join("\n")
                                }))
                            },
                            impl: {
                                readAll: t
                            }
                        };

                        function t() {
                            return Promise.resolve(n.asArray(document.styleSheets)).then((function(t) {
                                var e = [];
                                return t.forEach((function(t) {
                                    try {
                                        n.asArray(t.cssRules || []).forEach(e.push.bind(e))
                                    } catch (e) {
                                        console.log("Error while reading CSS rules from " + t.href, e.toString())
                                    }
                                })), e
                            })).then((function(t) {
                                return t.filter((function(t) {
                                    return t.type === CSSRule.FONT_FACE_RULE
                                })).filter((function(t) {
                                    return r.shouldProcess(t.style.getPropertyValue("src"))
                                }))
                            })).then((function(e) {
                                return e.map(t)
                            }));

                            function t(t) {
                                return {
                                    resolve: function() {
                                        var e = (t.parentStyleSheet || {}).href;
                                        return r.inlineAll(t.cssText, e)
                                    },
                                    src: function() {
                                        return t.style.getPropertyValue("src")
                                    }
                                }
                            }
                        }
                    }(),
                    h = function() {
                        return {
                            inlineAll: function e(o) {
                                return o instanceof Element ? function(t) {
                                    var e = t.style.getPropertyValue("background");
                                    return e ? r.inlineAll(e).then((function(e) {
                                        t.style.setProperty("background", e, t.style.getPropertyPriority("background"))
                                    })).then((function() {
                                        return t
                                    })) : Promise.resolve(t)
                                }(o).then((function() {
                                    return o instanceof HTMLImageElement ? t(o).inline() : Promise.all(n.asArray(o.childNodes).map((function(t) {
                                        return e(t)
                                    })))
                                })) : Promise.resolve(o)
                            },
                            impl: {
                                newImage: t
                            }
                        };

                        function t(element) {
                            return {
                                inline: function(t) {
                                    return n.isDataUrl(element.src) ? Promise.resolve() : Promise.resolve(element.src).then(t || n.getAndEncode).then((function(data) {
                                        return n.dataAsUrl(data, n.mimeType(element.src))
                                    })).then((function(t) {
                                        return new Promise((function(e, n) {
                                            element.onload = e, element.onerror = n, element.src = t
                                        }))
                                    }))
                                }
                            }
                        }
                    }(),
                    l = {
                        imagePlaceholder: void 0,
                        cacheBust: !1
                    },
                    c = {
                        toSvg: f,
                        toPng: function(t, e) {
                            return d(t, e || {}).then((function(canvas) {
                                return canvas.toDataURL()
                            }))
                        },
                        toJpeg: function(t, e) {
                            return d(t, e = e || {}).then((function(canvas) {
                                return canvas.toDataURL("image/jpeg", e.quality || 1)
                            }))
                        },
                        toBlob: function(t, e) {
                            return d(t, e || {}).then(n.canvasToBlob)
                        },
                        toPixelData: function(t, e) {
                            return d(t, e || {}).then((function(canvas) {
                                return canvas.getContext("2d").getImageData(0, 0, n.width(t), n.height(t)).data
                            }))
                        },
                        impl: {
                            fontFaces: o,
                            images: h,
                            util: n,
                            inliner: r,
                            options: {}
                        }
                    };

                function f(t, e) {
                    return function(t) {
                        void 0 === t.imagePlaceholder ? c.impl.options.imagePlaceholder = l.imagePlaceholder : c.impl.options.imagePlaceholder = t.imagePlaceholder;
                        void 0 === t.cacheBust ? c.impl.options.cacheBust = l.cacheBust : c.impl.options.cacheBust = t.cacheBust
                    }(e = e || {}), Promise.resolve(t).then((function(t) {
                        return function t(e, filter, r) {
                            return r || !filter || filter(e) ? Promise.resolve(e).then((function(t) {
                                return t instanceof HTMLCanvasElement ? n.makeImage(t.toDataURL()) : t.cloneNode(!1)
                            })).then((function(t) {
                                return o(e, t, filter)
                            })).then((function(t) {
                                return function(t, e) {
                                    return e instanceof Element ? Promise.resolve().then(r).then(o).then(h).then(l).then((function() {
                                        return e
                                    })) : e;

                                    function r() {
                                        var source, r;
                                        source = window.getComputedStyle(t), r = e.style, source.cssText ? r.cssText = source.cssText : function(source, t) {
                                            n.asArray(source).forEach((function(e) {
                                                t.setProperty(e, source.getPropertyValue(e), source.getPropertyPriority(e))
                                            }))
                                        }(source, r)
                                    }

                                    function o() {
                                        [":before", ":after"].forEach((function(element) {
                                            ! function(element) {
                                                var style = window.getComputedStyle(t, element),
                                                    content = style.getPropertyValue("content");
                                                if ("" === content || "none" === content) return;
                                                var r = n.uid();
                                                e.className = e.className + " " + r;
                                                var o = document.createElement("style");
                                                o.appendChild(function(t, element, style) {
                                                    var e = "." + t + ":" + element,
                                                        r = style.cssText ? function(style) {
                                                            var content = style.getPropertyValue("content");
                                                            return style.cssText + " content: " + content + ";"
                                                        }(style) : function(style) {
                                                            return n.asArray(style).map((function(t) {
                                                                return t + ": " + style.getPropertyValue(t) + (style.getPropertyPriority(t) ? " !important" : "")
                                                            })).join("; ") + ";"
                                                        }(style);
                                                    return document.createTextNode(e + "{" + r + "}")
                                                }(r, element, style)), e.appendChild(o)
                                            }(element)
                                        }))
                                    }

                                    function h() {
                                        t instanceof HTMLTextAreaElement && (e.innerHTML = t.value), t instanceof HTMLInputElement && e.setAttribute("value", t.value)
                                    }

                                    function l() {
                                        e instanceof SVGElement && (e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e instanceof SVGRectElement && ["width", "height"].forEach((function(t) {
                                            var n = e.getAttribute(t);
                                            n && e.style.setProperty(t, n)
                                        })))
                                    }
                                }(e, t)
                            })) : Promise.resolve();

                            function o(e, r, filter) {
                                var o = e.childNodes;
                                return 0 === o.length ? Promise.resolve(r) : h(r, n.asArray(o), filter).then((function() {
                                    return r
                                }));

                                function h(e, n, filter) {
                                    var r = Promise.resolve();
                                    return n.forEach((function(n) {
                                        r = r.then((function() {
                                            return t(n, filter)
                                        })).then((function(t) {
                                            t && e.appendChild(t)
                                        }))
                                    })), r
                                }
                            }
                        }(t, e.filter, !0)
                    })).then(m).then(v).then((function(t) {
                        e.bgcolor && (t.style.backgroundColor = e.bgcolor);
                        e.width && (t.style.width = e.width + "px");
                        e.height && (t.style.height = e.height + "px");
                        e.style && Object.keys(e.style).forEach((function(n) {
                            t.style[n] = e.style[n]
                        }));
                        return t
                    })).then((function(r) {
                        return function(t, e, r) {
                            return Promise.resolve(t).then((function(t) {
                                return t.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), (new XMLSerializer).serializeToString(t)
                            })).then(n.escapeXhtml).then((function(t) {
                                return '<foreignObject x="0" y="0" width="100%" height="100%">' + t + "</foreignObject>"
                            })).then((function(foreignObject) {
                                return '<svg xmlns="http://www.w3.org/2000/svg" width="' + e + '" height="' + r + '">' + foreignObject + "</svg>"
                            })).then((function(svg) {
                                return "data:image/svg+xml;charset=utf-8," + svg
                            }))
                        }(r, e.width || n.width(t), e.height || n.height(t))
                    }))
                }

                function d(t, e) {
                    return f(t, e).then(n.makeImage).then(n.delay(100)).then((function(image) {
                        var canvas = function(t) {
                            var canvas = document.createElement("canvas");
                            if (canvas.width = e.width || n.width(t), canvas.height = e.height || n.height(t), e.bgcolor) {
                                var r = canvas.getContext("2d");
                                r.fillStyle = e.bgcolor, r.fillRect(0, 0, canvas.width, canvas.height)
                            }
                            return canvas
                        }(t);
                        return canvas.getContext("2d").drawImage(image, 0, 0), canvas
                    }))
                }

                function m(t) {
                    return o.resolveAll().then((function(e) {
                        var n = document.createElement("style");
                        return t.appendChild(n), n.appendChild(document.createTextNode(e)), t
                    }))
                }

                function v(t) {
                    return h.inlineAll(t).then((function() {
                        return t
                    }))
                }
                t.exports = c
            }()
        },
        788: function(t, e, n) {
            var r = n(26),
                o = "[" + n(789) + "]",
                h = RegExp("^" + o + o + "*"),
                l = RegExp(o + o + "*$"),
                c = function(t) {
                    return function(e) {
                        var n = String(r(e));
                        return 1 & t && (n = n.replace(h, "")), 2 & t && (n = n.replace(l, "")), n
                    }
                };
            t.exports = {
                start: c(1),
                end: c(2),
                trim: c(3)
            }
        },
        789: function(t, e) {
            t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        797: function(t, e, n) {
            "use strict";
            var r = n(7),
                o = n(46).findIndex,
                h = n(104),
                l = n(28),
                c = !0,
                f = l("findIndex");
            "findIndex" in [] && Array(1).findIndex((function() {
                c = !1
            })), r({
                target: "Array",
                proto: !0,
                forced: c || !f
            }, {
                findIndex: function(t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), h("findIndex")
        },
        798: function(t, e, n) {
            "use strict";
            (function(t) {
                var component = function(template, style, t, e, n, r, o, h) {
                    var l, component = ("function" == typeof t ? t.options : t) || {};
                    if (component.__file = "color-picker.vue", component.render || (component.render = template.render, component.staticRenderFns = template.staticRenderFns, component._compiled = !0, n && (component.functional = !0)), component._scopeId = e, style && (l = function(t) {
                            style.call(this, o(t))
                        }), void 0 !== l)
                        if (component.functional) {
                            var c = component.render;
                            component.render = function(t, e) {
                                return l.call(e), c(t, e)
                            }
                        } else {
                            var f = component.beforeCreate;
                            component.beforeCreate = f ? [].concat(f, l) : [l]
                        } return component
                }({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            ref: "color-wheel",
                            staticClass: "cpw_container",
                            class: {
                                s_disabled: t.disabled
                            },
                            style: {
                                width: t.width + "px",
                                height: t.height + "px",
                                position: "relative"
                            },
                            attrs: {
                                id: "color-wheel"
                            }
                        }, [n("div", {
                            ref: "farbtastic-solid",
                            staticClass: "farbtastic-solid",
                            staticStyle: {
                                position: "absolute"
                            },
                            style: t.solidStyle
                        }), t._v(" "), n("canvas", {
                            ref: "farbtastic-mask",
                            staticClass: "farbtastic-mask",
                            style: {
                                width: t.width,
                                height: t.height
                            },
                            attrs: {
                                width: t.width,
                                height: t.height
                            }
                        }), t._v(" "), n("canvas", {
                            ref: "farbtastic-overlay",
                            staticClass: "farbtastic-overlay",
                            style: {
                                width: t.width,
                                height: t.height
                            },
                            attrs: {
                                width: t.width,
                                height: t.height
                            },
                            on: {
                                mousedown: t.mousedown,
                                touchstart: t.touchHandleStart,
                                touchmove: t.touchHandleMove,
                                touchend: t.touchHandleEnd
                            }
                        })])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-58e7c5c8_0", {
                        source: "\n.s_disabled[data-v-58e7c5c8]{opacity:.5\n}\n.cpw_container[data-v-58e7c5c8]{-webkit-touch-callout:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;tap-highlight-color:transparent;tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}\n.cpw_container .farbtastic-mask[data-v-58e7c5c8]{position:absolute;left:0\n}\n.cpw_container .farbtastic-overlay[data-v-58e7c5c8]{position:absolute;left:0\n}",
                        map: void 0,
                        media: void 0
                    })
                }), {
                    name: "color-picker",
                    props: {
                        width: {
                            required: !1,
                            type: Number,
                            default: 300
                        },
                        height: {
                            required: !1,
                            type: Number,
                            default: 300
                        },
                        disabled: {
                            required: !1,
                            type: Boolean,
                            default: !1
                        },
                        startColor: {
                            required: !1,
                            type: String
                        },
                        value: {
                            required: !1,
                            type: String
                        }
                    },
                    mounted: function() {
                        this.hasCamelCaseColorChangeListener && console.warn("Using the colorChange event is deprecated since version 0.4.0. It will be deleted in version 1.0.0. 'v-model' or the kebab-case variant 'color-change' should be used."), this.initWidget(), this.setColor(this.value || this.startColor || "#000000")
                    },
                    data: function() {
                        return {
                            debug: !1,
                            dragging: !1,
                            circleDrag: !1,
                            color: "",
                            rgb: "",
                            hsl: "",
                            radius: "",
                            square: "",
                            mid: "",
                            markerSize: "",
                            ctxMask: "",
                            ctxOverlay: "",
                            cnvMask: "",
                            cnvOverlay: "",
                            offset: {
                                left: "",
                                top: ""
                            }
                        }
                    },
                    watch: {
                        value: function(t, e) {
                            t !== e && this.setColor(t)
                        }
                    },
                    computed: {
                        hasCamelCaseColorChangeListener: function() {
                            return this.$listeners && this.$listeners.colorChange
                        },
                        solidStyle: function() {
                            return {
                                "background-color": this.pack(this.HSLToRGB([this.hsl[0], 1, .5])),
                                width: 2 * this.square - 1 + "px",
                                height: 2 * this.square - 1 + "px",
                                left: this.mid - this.square + "px",
                                top: this.mid - this.square + "px"
                            }
                        },
                        wheelWidth: function() {
                            return (this.width || 300) / 10
                        }
                    },
                    methods: {
                        setColor: function(t, e) {
                            void 0 === e && (e = !1);
                            var n = this.unpack(t);
                            return this.color !== t && n && (this.color = t, this.rgb = n, this.hsl = this.RGBToHSL(this.rgb), this.updateDisplay(e)), this
                        },
                        setHSL: function(t) {
                            return this.hsl = t, this.rgb = this.HSLToRGB(t), this.color = this.pack(this.rgb), this.updateDisplay(), this
                        },
                        initWidget: function() {
                            this.radius = (this.width - this.wheelWidth) / 2 - 1, this.square = Math.floor(.7 * (this.radius - this.wheelWidth / 2)) - 1, this.mid = Math.floor(this.width / 2), this.markerSize = .3 * this.wheelWidth, this.cnvMask = this.$refs["farbtastic-mask"], this.ctxMask = this.cnvMask.getContext("2d"), this.cnvOverlay = this.$refs["farbtastic-overlay"], this.ctxOverlay = this.cnvOverlay.getContext("2d"), this.devicePixelRatio = window.devicePixelRatio || 1, this.upscaleCanvas(this.cnvMask), this.upscaleCanvas(this.cnvOverlay), this.ctxMask.translate(this.mid, this.mid), this.ctxOverlay.translate(this.mid, this.mid), this.drawCircle(), this.drawMask()
                        },
                        upscaleCanvas: function(t) {
                            var e = t.getContext("2d"),
                                n = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
                            if (this.devicePixelRatio !== n) {
                                var r = this.devicePixelRatio / n,
                                    o = t.width,
                                    h = t.height;
                                t.width = o * r, t.height = h * r, t.style.width = o + "px", t.style.height = h + "px", e.scale(r, r)
                            }
                        },
                        drawCircle: function() {
                            var t, e, n, r = +new Date,
                                o = this.radius,
                                h = this.wheelWidth,
                                l = 8 / o / 24 * Math.PI,
                                c = this.ctxMask,
                                f = 0;
                            c.save(), c.lineWidth = h / o, c.scale(o, o);
                            for (var i = 0; i <= 24; ++i) {
                                var d = i / 24;
                                t = d * Math.PI * 2;
                                var m = Math.sin(f),
                                    v = -Math.cos(f),
                                    w = Math.sin(t),
                                    y = -Math.cos(t),
                                    x = (f + t) / 2,
                                    k = 1 / Math.cos((t - f) / 2),
                                    C = Math.sin(x) * k,
                                    M = -Math.cos(x) * k;
                                if (n = this.pack(this.HSLToRGB([d, 1, .5])), i > 0) {
                                    var _ = c.createLinearGradient(m, v, w, y);
                                    _.addColorStop(0, e), _.addColorStop(1, n), c.strokeStyle = _, c.beginPath(), c.moveTo(m, v), c.quadraticCurveTo(C, M, w, y), c.stroke()
                                }
                                f = t - l, e = n
                            }
                            if (c.restore(), this.debug) {
                                var E = document.createElement("div");
                                E.textContent = "drawCircle " + (+new Date - r) + " ms", document.body.appendChild(E)
                            }
                        },
                        drawMask: function() {
                            var t, e = this,
                                n = +new Date,
                                r = 2 * this.square,
                                o = this.square;

                            function h(t, e, n) {
                                for (var r = 1 / t, o = 1 / e, h = 0; h <= e; ++h)
                                    for (var l = 1 - h * o, c = 0; c <= t; ++c) {
                                        var s = 1 - c * r,
                                            a = 1 - 2 * Math.min(l * s, (1 - l) * s);
                                        n(c, h, a > 0 ? (2 * l - 1 + a) * (.5 / a) : 0, a)
                                    }
                            }
                            if (this.ctxMask.getImageData) {
                                var l = Math.floor(r / 2),
                                    c = document.createElement("canvas");
                                c.width = l + 1, c.height = l + 1;
                                var f = c.getContext("2d"),
                                    d = f.getImageData(0, 0, l + 1, l + 1),
                                    i = 0;
                                h(l, l, (function(t, e, n, a) {
                                    d.data[i++] = d.data[i++] = d.data[i++] = 255 * n, d.data[i++] = 255 * a
                                })), f.putImageData(d, 0, 0), this.ctxMask.drawImage(c, 0, 0, l + 1, l + 1, -o, -o, 2 * o, 2 * o)
                            } else if (t = window.navigator.userAgent, /MSIE|Trident/.test(t)) {
                                var m, v;
                                h(Math.floor(r / 6), 6, (function(t, n, r, a) {
                                    if (0 === t && (m = v, v = []), r = Math.round(255 * r), a = Math.round(255 * a), n > 0) {
                                        var h = m[t][0],
                                            l = m[t][1],
                                            c = e.packDX(h, l),
                                            f = e.packDX(r, a),
                                            d = Math.round(e.mid + (.333 * (n - 1) - 1) * o),
                                            w = Math.round(e.mid + (.333 * n - 1) * o),
                                            div = document.createElement("div");
                                        div.style.position = "absolute", div.style.filter = "progid:DXImageTransform.Microsoft.Gradient(StartColorStr=" + c + ", EndColorStr=" + f + ", GradientType=0)", div.style.top = d, div.style.height = w - d, div.style.left = e.mid + (6 * t - o - 1), div.style.width = e.mid + (6 * t - o - 1), e.cnvMask.appendChild(div)
                                    }
                                    v.push([r, a])
                                }))
                            } else {
                                var w = Math.floor(r / 2);
                                h(w, w, (function(t, n, r, a) {
                                    var h = Math.round(255 * r);
                                    e.ctxMask.fillStyle = "rgba(" + h + ", " + h + ", " + h + ", " + a + ")", e.ctxMask.fillRect(2 * t - o - 1, 2 * n - o - 1, 2, 2)
                                }))
                            }
                            if (this.debug) {
                                var y = document.createElement("div");
                                y.textContent = "drawMask " + (+new Date - n) + " ms", document.body.appendChild(y)
                            }
                        },
                        drawMarkers: function() {
                            var t = this.width,
                                e = Math.ceil(this.markerSize / 4),
                                n = this.markerSize - e + 1,
                                r = 6.28 * this.hsl[0],
                                o = Math.sin(r) * this.radius,
                                h = -Math.cos(r) * this.radius,
                                l = 2 * this.square * (.5 - this.hsl[1]),
                                c = 2 * this.square * (.5 - this.hsl[2]),
                                f = this.invert ? "#fff" : "#000",
                                d = this.invert ? "#000" : "#fff",
                                m = [{
                                    x: o,
                                    y: h,
                                    r: n,
                                    c: "#000",
                                    lw: e + 1
                                }, {
                                    x: o,
                                    y: h,
                                    r: this.markerSize,
                                    c: "#fff",
                                    lw: e
                                }, {
                                    x: l,
                                    y: c,
                                    r: n,
                                    c: d,
                                    lw: e + 1
                                }, {
                                    x: l,
                                    y: c,
                                    r: this.markerSize,
                                    c: f,
                                    lw: e
                                }];
                            this.ctxOverlay.clearRect(-this.mid, -this.mid, t, t);
                            for (var i = 0; i < m.length; i += 1) {
                                var v = m[i];
                                this.ctxOverlay.lineWidth = v.lw, this.ctxOverlay.strokeStyle = v.c, this.ctxOverlay.beginPath(), this.ctxOverlay.arc(v.x, v.y, v.r, 0, 2 * Math.PI, !0), this.ctxOverlay.stroke()
                            }
                        },
                        updateDisplay: function(t) {
                            this.invert = .3 * this.rgb[0] + .59 * this.rgb[1] + .11 * this.rgb[2] <= .6, this.drawMarkers(), t || (this.$emit("input", this.color), this.$emit("colorChange", this.color), this.$emit("color-change", this.color))
                        },
                        widgetCoords: function(t) {
                            return {
                                x: t.clientX - this.offset.left - this.mid,
                                y: t.clientY - this.offset.top - this.mid
                            }
                        },
                        mousedown: function(t) {
                            if (this.disabled) return !1;
                            this.dragging || (document.addEventListener("mousemove", this.mousemove), document.addEventListener("mouseup", this.mouseup), this.dragging = !0), this.offset = {
                                left: this.$refs["color-wheel"].getBoundingClientRect().left,
                                top: this.$refs["color-wheel"].getBoundingClientRect().top
                            };
                            var e = this.widgetCoords(t);
                            return this.circleDrag = Math.max(Math.abs(e.x), Math.abs(e.y)) > this.square + 2, this.mousemove(t), !1
                        },
                        mousemove: function(t) {
                            var e = this.widgetCoords(t);
                            if (this.circleDrag) {
                                var n = Math.atan2(e.x, -e.y) / 6.28;
                                this.setHSL([(n + 1) % 1, this.hsl[1], this.hsl[2]])
                            } else {
                                var r = Math.max(0, Math.min(1, -e.x / this.square / 2 + .5)),
                                    o = Math.max(0, Math.min(1, -e.y / this.square / 2 + .5));
                                this.setHSL([this.hsl[0], r, o])
                            }
                            return !1
                        },
                        mouseup: function() {
                            document.removeEventListener("mousemove", this.mousemove), document.removeEventListener("mouseup", this.mouseup), this.dragging = !1
                        },
                        dec2hex: function(t) {
                            return (t < 16 ? "0" : "") + t.toString(16)
                        },
                        packDX: function(t, a) {
                            return "#" + (this.dec2hex(a) + this.dec2hex(t) + this.dec2hex(t) + this.dec2hex(t))
                        },
                        pack: function(t) {
                            var e = Math.round(255 * t[0]),
                                g = Math.round(255 * t[1]),
                                b = Math.round(255 * t[2]);
                            return "#" + (this.dec2hex(e) + this.dec2hex(g) + this.dec2hex(b))
                        },
                        unpack: function(t) {
                            return 7 === t.length ? [1, 3, 5].map((function(i) {
                                return parseInt(t.substring(i, i + 2), 16) / 255
                            })) : 4 === t.length && [1, 2, 3].map((function(i) {
                                return parseInt(t.substring(i, i + 1), 16) / 15
                            }))
                        },
                        HSLToRGB: function(t) {
                            var e = t[0],
                                s = t[1],
                                n = t[2],
                                r = n <= .5 ? n * (s + 1) : n + s - n * s,
                                o = 2 * n - r;
                            return [this.hueToRGB(o, r, e + .33333), this.hueToRGB(o, r, e), this.hueToRGB(o, r, e - .33333)]
                        },
                        hueToRGB: function(t, e, n) {
                            return 6 * (n = (n + 1) % 1) < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (.66666 - n) * 6 : t
                        },
                        RGBToHSL: function(t) {
                            var e = t[0],
                                g = t[1],
                                b = t[2],
                                n = Math.min(e, g, b),
                                r = Math.max(e, g, b),
                                o = r - n,
                                h = 0,
                                s = 0,
                                l = (n + r) / 2;
                            return l > 0 && l < 1 && (s = o / (l < .5 ? 2 * l : 2 - 2 * l)), o > 0 && (r === e && r !== g && (h += (g - b) / o), r === g && r !== b && (h += 2 + (b - e) / o), r === b && r !== e && (h += 4 + (e - g) / o), h /= 6), [h, s, l]
                        },
                        widgetCoordsTouch: function(t) {
                            return {
                                x: t.targetTouches[0].clientX - this.offset.left - this.mid,
                                y: t.targetTouches[0].clientY - this.offset.top - this.mid
                            }
                        },
                        touchHandleStart: function(t) {
                            if (!this.touchHandled) {
                                this.touchHandled = !0, this._touchMoved = !1, this.offset = {
                                    left: this.$refs["color-wheel"].getBoundingClientRect().left,
                                    top: this.$refs["color-wheel"].getBoundingClientRect().top
                                };
                                var e = this.widgetCoordsTouch(t);
                                this.circleDrag = Math.max(Math.abs(e.x), Math.abs(e.y)) > this.square + 2
                            }
                        },
                        touchHandleMove: function(t) {
                            if (this.touchHandled) {
                                t.preventDefault(), this._touchMoved = !0;
                                var e = this.widgetCoordsTouch(t);
                                if (this.circleDrag) {
                                    var n = Math.atan2(e.x, -e.y) / 6.28;
                                    this.setHSL([(n + 1) % 1, this.hsl[1], this.hsl[2]])
                                } else {
                                    var r = Math.max(0, Math.min(1, -e.x / this.square / 2 + .5)),
                                        o = Math.max(0, Math.min(1, -e.y / this.square / 2 + .5));
                                    this.setHSL([this.hsl[0], r, o])
                                }
                            }
                        },
                        touchHandleEnd: function() {
                            this.touchHandled && (this.touchHandled = !1)
                        }
                    }
                }, "data-v-58e7c5c8", !1, 0, (function t() {
                    var head = document.head || document.getElementsByTagName("head")[0],
                        e = t.styles || (t.styles = {}),
                        n = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
                    return function(t, r) {
                        if (!document.querySelector('style[data-vue-ssr-id~="' + t + '"]')) {
                            var o = n ? r.media || "default" : t,
                                style = e[o] || (e[o] = {
                                    ids: [],
                                    parts: [],
                                    element: void 0
                                });
                            if (!style.ids.includes(t)) {
                                var code = r.source,
                                    h = style.ids.length;
                                if (style.ids.push(t), r.map && (code += "\n/*# sourceURL=" + r.map.sources[0] + " */", code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r.map)))) + " */"), n && (style.element = style.element || document.querySelector("style[data-group=" + o + "]")), !style.element) {
                                    var l = style.element = document.createElement("style");
                                    l.type = "text/css", r.media && l.setAttribute("media", r.media), n && (l.setAttribute("data-group", o), l.setAttribute("data-next-index", "0")), head.appendChild(l)
                                }
                                if (n && (h = parseInt(style.element.getAttribute("data-next-index")), style.element.setAttribute("data-next-index", h + 1)), style.element.styleSheet) style.parts.push(code), style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
                                else {
                                    var c = document.createTextNode(code),
                                        f = style.element.childNodes;
                                    f[h] && style.element.removeChild(f[h]), f.length ? style.element.insertBefore(c, f[h]) : style.element.appendChild(c)
                                }
                            }
                        }
                    }
                }));
                var n = {
                        install: function t(e) {
                            t.installed || (t.installed = !0, e.component("ColorPicker", component))
                        }
                    },
                    r = null;
                "undefined" != typeof window ? r = window.Vue : void 0 !== t && (r = t.Vue), r && r.use(n), e.a = component
            }).call(this, n(12))
        },
        818: function(t, e, n) {
            (function(n) {
                var r, o, h;
                o = [], void 0 === (h = "function" == typeof(r = function() {
                    "use strict";

                    function e(a, b, t) {
                        var e = new XMLHttpRequest;
                        e.open("GET", a), e.responseType = "blob", e.onload = function() {
                            g(e.response, b, t)
                        }, e.onerror = function() {
                            console.error("could not download file")
                        }, e.send()
                    }

                    function r(a) {
                        var b = new XMLHttpRequest;
                        b.open("HEAD", a, !1);
                        try {
                            b.send()
                        } catch (a) {}
                        return 200 <= b.status && 299 >= b.status
                    }

                    function o(a) {
                        try {
                            a.dispatchEvent(new MouseEvent("click"))
                        } catch (t) {
                            var b = document.createEvent("MouseEvents");
                            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b)
                        }
                    }
                    var h = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof n && n.global === n ? n : void 0,
                        a = h.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
                        g = h.saveAs || ("object" != typeof window || window !== h ? function() {} : "download" in HTMLAnchorElement.prototype && !a ? function(b, g, t) {
                            var i = h.URL || h.webkitURL,
                                n = document.createElement("a");
                            g = g || b.name || "download", n.download = g, n.rel = "noopener", "string" == typeof b ? (n.href = b, n.origin === location.origin ? o(n) : r(n.href) ? e(b, g, t) : o(n, n.target = "_blank")) : (n.href = i.createObjectURL(b), setTimeout((function() {
                                i.revokeObjectURL(n.href)
                            }), 4e4), setTimeout((function() {
                                o(n)
                            }), 0))
                        } : "msSaveOrOpenBlob" in navigator ? function(t, g, n) {
                            if (g = g || t.name || "download", "string" != typeof t) navigator.msSaveOrOpenBlob(function(a, b) {
                                return void 0 === b ? b = {
                                    autoBom: !1
                                } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
                                    autoBom: !b
                                }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\ufeff", a], {
                                    type: a.type
                                }) : a
                            }(t, n), g);
                            else if (r(t)) e(t, g, n);
                            else {
                                var i = document.createElement("a");
                                i.href = t, i.target = "_blank", setTimeout((function() {
                                    o(i)
                                }))
                            }
                        } : function(b, t, n, g) {
                            if ((g = g || open("", "_blank")) && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return e(b, t, n);
                            var r = "application/octet-stream" === b.type,
                                i = /constructor/i.test(h.HTMLElement) || h.safari,
                                o = /CriOS\/[\d]+/.test(navigator.userAgent);
                            if ((o || r && i || a) && "undefined" != typeof FileReader) {
                                var l = new FileReader;
                                l.onloadend = function() {
                                    var a = l.result;
                                    a = o ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null
                                }, l.readAsDataURL(b)
                            } else {
                                var c = h.URL || h.webkitURL,
                                    f = c.createObjectURL(b);
                                g ? g.location = f : location.href = f, g = null, setTimeout((function() {
                                    c.revokeObjectURL(f)
                                }), 4e4)
                            }
                        });
                    h.saveAs = g.saveAs = g, t.exports = g
                }) ? r.apply(e, o) : r) || (t.exports = h)
            }).call(this, n(12))
        },
        819: function(t, e, n) {
            t.exports = function(t) {
                function e(n) {
                    if (i[n]) return i[n].exports;
                    var r = i[n] = {
                        exports: {},
                        id: n,
                        loaded: !1
                    };
                    return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
                }
                var i = {};
                return e.m = t, e.c = i, e.p = "", e(0)
            }([function(t, e, i) {
                var n, r, a = {}.hasOwnProperty,
                    o = [].indexOf || function(t) {
                        for (var e = 0, i = this.length; e < i; e++)
                            if (e in this && this[e] === t) return e;
                        return -1
                    };
                n = i(1).EventEmitter, i(2), r = function(t) {
                    function e(t) {
                        var e, n, r;
                        for (n in this.running = !1, this.options = {}, this.frames = [], this.groups = new Map, this.freeWorkers = [], this.activeWorkers = [], this.setOptions(t), i) r = i[n], null == (e = this.options)[n] && (e[n] = r)
                    }
                    var i, n;
                    return function(t, e) {
                        function i() {
                            this.constructor = t
                        }
                        for (var n in e) a.call(e, n) && (t[n] = e[n]);
                        i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype
                    }(e, t), i = {
                        workerScript: "gif.worker.js",
                        workers: 2,
                        repeat: 0,
                        background: "#fff",
                        quality: 10,
                        width: null,
                        height: null,
                        transparent: null,
                        debug: !1
                    }, n = {
                        delay: 500,
                        copy: !1
                    }, e.prototype.setOption = function(t, e) {
                        if (this.options[t] = e, null != this._canvas && ("width" === t || "height" === t)) return this._canvas[t] = e
                    }, e.prototype.setOptions = function(t) {
                        var e, i, n;
                        for (e in i = [], t) a.call(t, e) && (n = t[e], i.push(this.setOption(e, n)));
                        return i
                    }, e.prototype.addFrame = function(t, e) {
                        var i, r, s;
                        for (s in null == e && (e = {}), (i = {}).transparent = this.options.transparent, n) i[s] = e[s] || n[s];
                        if (null == this.options.width && this.setOption("width", t.width), null == this.options.height && this.setOption("height", t.height), "undefined" != typeof ImageData && null !== ImageData && t instanceof ImageData) i.data = t.data;
                        else if ("undefined" != typeof CanvasRenderingContext2D && null !== CanvasRenderingContext2D && t instanceof CanvasRenderingContext2D || "undefined" != typeof WebGLRenderingContext && null !== WebGLRenderingContext && t instanceof WebGLRenderingContext) e.copy ? i.data = this.getContextData(t) : i.context = t;
                        else {
                            if (null == t.childNodes) throw new Error("Invalid image");
                            e.copy ? i.data = this.getImageData(t) : i.image = t
                        }
                        return (r = this.frames.length) > 0 && i.data && (this.groups.has(i.data) ? this.groups.get(i.data).push(r) : this.groups.set(i.data, [r])), this.frames.push(i)
                    }, e.prototype.render = function() {
                        var t, i, e;
                        if (this.running) throw new Error("Already running");
                        if (null == this.options.width || null == this.options.height) throw new Error("Width and height must be set prior to rendering");
                        if (this.running = !0, this.nextFrame = 0, this.finishedFrames = 0, this.imageParts = function() {
                                var t, i, e;
                                for (e = [], t = 0, i = this.frames.length; 0 <= i ? t < i : t > i; 0 <= i ? ++t : --t) e.push(null);
                                return e
                            }.call(this), i = this.spawnWorkers(), !0 === this.options.globalPalette) this.renderNextFrame();
                        else
                            for (t = 0, e = i; 0 <= e ? t < e : t > e; 0 <= e ? ++t : --t) this.renderNextFrame();
                        return this.emit("start"), this.emit("progress", 0)
                    }, e.prototype.abort = function() {
                        for (var t; null != (t = this.activeWorkers.shift());) this.log("killing active worker"), t.terminate();
                        return this.running = !1, this.emit("abort")
                    }, e.prototype.spawnWorkers = function() {
                        var t, e, i;
                        return t = Math.min(this.options.workers, this.frames.length),
                            function() {
                                i = [];
                                for (var n = e = this.freeWorkers.length; e <= t ? n < t : n > t; e <= t ? n++ : n--) i.push(n);
                                return i
                            }.apply(this).forEach(function(t) {
                                return function(e) {
                                    var i;
                                    return t.log("spawning worker " + e), (i = new Worker(t.options.workerScript)).onmessage = function(e) {
                                        return t.activeWorkers.splice(t.activeWorkers.indexOf(i), 1), t.freeWorkers.push(i), t.frameFinished(e.data, !1)
                                    }, t.freeWorkers.push(i)
                                }
                            }(this)), t
                    }, e.prototype.frameFinished = function(t, e) {
                        var n, r, s, h;
                        if (this.finishedFrames++, e ? (n = this.frames.indexOf(t), r = this.groups.get(t.data)[0], this.log("frame " + (n + 1) + " is duplicate of " + r + " - " + this.activeWorkers.length + " active"), this.imageParts[n] = {
                                indexOfFirstInGroup: r
                            }) : (this.log("frame " + (t.index + 1) + " finished - " + this.activeWorkers.length + " active"), this.emit("progress", this.finishedFrames / this.frames.length), this.imageParts[t.index] = t), !0 === this.options.globalPalette && !e && (this.options.globalPalette = t.globalPalette, this.log("global palette analyzed"), this.frames.length > 2))
                            for (s = 1, h = this.freeWorkers.length; 1 <= h ? s < h : s > h; 1 <= h ? ++s : --s) this.renderNextFrame();
                        return o.call(this.imageParts, null) >= 0 ? this.renderNextFrame() : this.finishRendering()
                    }, e.prototype.finishRendering = function() {
                        var t, e, i, n, r, s, o, a, h, l, c, p, u, f, d, g, m, v, w, y;
                        for (r = s = 0, l = (m = this.imageParts).length; s < l; r = ++s)(e = m[r]).indexOfFirstInGroup && (this.imageParts[r] = this.imageParts[e.indexOfFirstInGroup]);
                        for (h = 0, o = 0, c = (v = this.imageParts).length; o < c; o++) h += ((e = v[o]).data.length - 1) * e.pageSize + e.cursor;
                        for (h += e.pageSize - e.cursor, this.log("rendering finished - filesize " + Math.round(h / 1e3) + "kb"), t = new Uint8Array(h), d = 0, a = 0, p = (w = this.imageParts).length; a < p; a++)
                            for (i = f = 0, u = (y = (e = w[a]).data).length; f < u; i = ++f) g = y[i], t.set(g, d), d += i === e.data.length - 1 ? e.cursor : e.pageSize;
                        return n = new Blob([t], {
                            type: "image/gif"
                        }), this.emit("finished", n, t)
                    }, e.prototype.renderNextFrame = function() {
                        var t, e, i, n;
                        if (0 === this.freeWorkers.length) throw new Error("No free workers");
                        if (!(this.nextFrame >= this.frames.length)) return t = this.frames[this.nextFrame++], (e = this.frames.indexOf(t)) > 0 && this.groups.has(t.data) && this.groups.get(t.data)[0] !== e ? void setTimeout(function(e) {
                            return function() {
                                return e.frameFinished(t, !0)
                            }
                        }(this), 0) : (n = this.freeWorkers.shift(), i = this.getTask(t), this.log("starting frame " + (i.index + 1) + " of " + this.frames.length), this.activeWorkers.push(n), n.postMessage(i))
                    }, e.prototype.getContextData = function(t) {
                        return t.getImageData(0, 0, this.options.width, this.options.height).data
                    }, e.prototype.getImageData = function(t) {
                        var e;
                        return null == this._canvas && (this._canvas = document.createElement("canvas"), this._canvas.width = this.options.width, this._canvas.height = this.options.height), (e = this._canvas.getContext("2d")).setFill = this.options.background, e.fillRect(0, 0, this.options.width, this.options.height), e.drawImage(t, 0, 0), this.getContextData(e)
                    }, e.prototype.getTask = function(t) {
                        var e, i;
                        if (i = {
                                index: e = this.frames.indexOf(t),
                                last: e === this.frames.length - 1,
                                delay: t.delay,
                                transparent: t.transparent,
                                width: this.options.width,
                                height: this.options.height,
                                quality: this.options.quality,
                                dither: this.options.dither,
                                globalPalette: this.options.globalPalette,
                                repeat: this.options.repeat,
                                canTransfer: !0
                            }, null != t.data) i.data = t.data;
                        else if (null != t.context) i.data = this.getContextData(t.context);
                        else {
                            if (null == t.image) throw new Error("Invalid frame");
                            i.data = this.getImageData(t.image)
                        }
                        return i
                    }, e.prototype.log = function(t) {
                        if (this.options.debug) return console.log(t)
                    }, e
                }(n), t.exports = r
            }, function(t, e) {
                function i() {
                    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
                }

                function n(t) {
                    return "function" == typeof t
                }

                function s(t) {
                    return "object" == typeof t && null !== t
                }

                function r(t) {
                    return void 0 === t
                }
                t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(t) {
                    if (! function(t) {
                            return "number" == typeof t
                        }(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
                    return this._maxListeners = t, this
                }, i.prototype.emit = function(t) {
                    var e, i, o, a, h, l;
                    if (this._events || (this._events = {}), "error" === t && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
                        if ((e = arguments[1]) instanceof Error) throw e;
                        var c = new Error('Uncaught, unspecified "error" event. (' + e + ")");
                        throw c.context = e, c
                    }
                    if (r(i = this._events[t])) return !1;
                    if (n(i)) switch (arguments.length) {
                        case 1:
                            i.call(this);
                            break;
                        case 2:
                            i.call(this, arguments[1]);
                            break;
                        case 3:
                            i.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            a = Array.prototype.slice.call(arguments, 1), i.apply(this, a)
                    } else if (s(i))
                        for (a = Array.prototype.slice.call(arguments, 1), o = (l = i.slice()).length, h = 0; h < o; h++) l[h].apply(this, a);
                    return !0
                }, i.prototype.addListener = function(t, e) {
                    var o;
                    if (!n(e)) throw TypeError("listener must be a function");
                    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, n(e.listener) ? e.listener : e), this._events[t] ? s(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, s(this._events[t]) && !this._events[t].warned && (o = r(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[t].length > o && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this
                }, i.prototype.on = i.prototype.addListener, i.prototype.once = function(t, e) {
                    function i() {
                        this.removeListener(t, i), r || (r = !0, e.apply(this, arguments))
                    }
                    if (!n(e)) throw TypeError("listener must be a function");
                    var r = !1;
                    return i.listener = e, this.on(t, i), this
                }, i.prototype.removeListener = function(t, e) {
                    var i, r, o, a;
                    if (!n(e)) throw TypeError("listener must be a function");
                    if (!this._events || !this._events[t]) return this;
                    if (o = (i = this._events[t]).length, r = -1, i === e || n(i.listener) && i.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
                    else if (s(i)) {
                        for (a = o; a-- > 0;)
                            if (i[a] === e || i[a].listener && i[a].listener === e) {
                                r = a;
                                break
                            } if (r < 0) return this;
                        1 === i.length ? (i.length = 0, delete this._events[t]) : i.splice(r, 1), this._events.removeListener && this.emit("removeListener", t, e)
                    }
                    return this
                }, i.prototype.removeAllListeners = function(t) {
                    var e, i;
                    if (!this._events) return this;
                    if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
                    if (0 === arguments.length) {
                        for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                        return this.removeAllListeners("removeListener"), this._events = {}, this
                    }
                    if (n(i = this._events[t])) this.removeListener(t, i);
                    else if (i)
                        for (; i.length;) this.removeListener(t, i[i.length - 1]);
                    return delete this._events[t], this
                }, i.prototype.listeners = function(t) {
                    return this._events && this._events[t] ? n(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
                }, i.prototype.listenerCount = function(t) {
                    if (this._events) {
                        var e = this._events[t];
                        if (n(e)) return 1;
                        if (e) return e.length
                    }
                    return 0
                }, i.listenerCount = function(t, e) {
                    return t.listenerCount(e)
                }
            }, function(t, e) {
                var i, n, r, s, o;
                o = navigator.userAgent.toLowerCase(), s = navigator.platform.toLowerCase(), r = "ie" === (i = o.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0])[1] && document.documentMode, (n = {
                    name: "version" === i[1] ? i[3] : i[1],
                    version: r || parseFloat("opera" === i[1] && i[4] ? i[4] : i[2]),
                    platform: {
                        name: o.match(/ip(?:ad|od|hone)/) ? "ios" : (o.match(/(?:webos|android)/) || s.match(/mac|win|linux/) || ["other"])[0]
                    }
                })[n.name] = !0, n[n.name + parseInt(n.version, 10)] = !0, n.platform[n.platform.name] = !0, t.exports = n
            }])
        }
    }
]);