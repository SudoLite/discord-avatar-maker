(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        159: function(o, t, r) {
            "use strict";
            var e = r(0),
                n = (r(514), r(288));
            e.a.use(n.a)
        },
        160: function(o, t, r) {
            "use strict";
            var e = r(0),
                n = r(161);
            r(516);
            e.a.component("VueperSlides", n.VueperSlides), e.a.component("VueperSlide", n.VueperSlide)
        },
        162: function(o, t, r) {
            "use strict";
            r(59), r(194), r(61);
            var e = r(17),
                n = r(0),
                l = {
                    props: {
                        isAnimated: {
                            type: Boolean,
                            default: !1
                        },
                        color: {
                            type: String,
                            default: void 0
                        }
                    },
                    computed: {
                        animationLength: function() {
                            return this.$store.state.customization.animationLength
                        }
                    }
                },
                c = (r(466), r(468), r(6)),
                C = Object(c.a)(l, (function() {
                    var o = this.$createElement,
                        t = this._self._c || o;
                    return t("div", {
                        staticClass: "shiny-effect-wrapper"
                    }, [t("svg", {
                        staticClass: "shiny-effect-animation",
                        class: {
                            animated: this.isAnimated
                        },
                        style: "animation: " + this.animationLength + "s shine infinite linear;",
                        attrs: {
                            width: "182",
                            height: "182",
                            viewBox: "0 0 182 182",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M141.982 8.87433L9.50549 141.351L28.7022 160.547L161.178 28.0711L141.982 8.87433ZM165.066 33.2209L32.5897 165.697L40.0183 173.126L172.494 40.6495L165.066 33.2209Z",
                            fill: this.color ? this.color : "white"
                        }
                    })])])
                }), [], !1, null, "fa06f1be", null).exports,
                f = {
                    props: {
                        isAnimated: {
                            type: Boolean,
                            default: !1
                        },
                        color: {
                            type: String,
                            default: void 0
                        }
                    },
                    computed: {
                        animationLength: function() {
                            return this.$store.state.customization.animationLength
                        }
                    }
                },
                d = (r(470), r(472), Object(c.a)(f, (function() {
                    var o = this.$createElement,
                        t = this._self._c || o;
                    return t("div", {
                        staticClass: "rotating-stripes-wrapper"
                    }, [t("svg", {
                        staticClass: "rotating-stripes-animation",
                        class: {
                            animated: this.isAnimated
                        },
                        style: "animation: " + this.animationLength + "s rotate-stripes infinite linear;",
                        attrs: {
                            width: "256",
                            height: "256",
                            viewBox: "0 0 256 256",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M128.771 128.013L128.771 128.014L251.323 162.192C245.52 183.176 234.508 201.997 219.765 217.175L128.772 128.015L160.592 251.798C150.169 254.54 139.225 256 127.94 256C117.215 256 106.797 254.681 96.841 252.196L128.764 128.015L36.926 218.002C21.8776 202.786 10.6177 183.815 4.67719 162.62L128.764 128.013L128.764 128.013L4.67041 93.4041C10.6074 72.206 21.8653 53.2312 36.9129 38.0111L128.764 128.011L96.8346 3.80585C106.793 1.31978 117.212 0 127.94 0C139.227 0 150.173 1.46088 160.599 4.20387L128.772 128.011L219.779 38.8385C234.52 54.02 245.531 72.8446 251.329 93.8325L128.771 128.013Z",
                            fill: this.color ? this.color : "white"
                        }
                    })])])
                }), [], !1, null, "e8f20812", null).exports),
                h = {
                    props: {
                        isAnimated: {
                            type: Boolean,
                            default: !1
                        },
                        color: {
                            type: String,
                            default: void 0
                        }
                    },
                    computed: {
                        animationLength: function() {
                            return this.$store.state.customization.animationLength
                        }
                    }
                },
                m = (r(474), r(476), Object(c.a)(h, (function() {
                    var o = this,
                        t = o.$createElement,
                        r = o._self._c || t;
                    return r("div", {
                        staticClass: "sparkle-wrapper"
                    }, [r("div", {
                        staticClass: "sparkle-animation"
                    }, [r("svg", {
                        staticClass: "star",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: " + o.animationLength + "s star-1 infinite;",
                        attrs: {
                            id: "star-1",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M31.3097 14.5999C31.2797 22.1229 25.1719 28.2122 17.6419 28.2122C17.6419 28.2122 17.6419 28.2122 17.6418 28.2122C25.1775 28.2122 31.2887 34.3106 31.3096 41.8413C31.3305 34.3147 37.4351 28.2188 44.9651 28.2122C37.4407 28.2055 31.3396 22.1187 31.3097 14.5999Z",
                            fill: o.color || "white"
                        }
                    })]), o._v(" "), r("svg", {
                        staticClass: "star",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: " + o.animationLength + "s star-2 infinite;",
                        attrs: {
                            id: "star-2",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M112.498 55.6536C112.468 63.1765 106.36 69.2657 98.8301 69.2657C98.8301 69.2657 98.8301 69.2657 98.8301 69.2657C106.366 69.2657 112.477 75.3641 112.498 82.8948C112.519 75.3682 118.623 69.2724 126.153 69.2657C118.629 69.259 112.528 63.1724 112.498 55.6536Z",
                            fill: o.color || "white"
                        }
                    })]), o._v(" "), r("svg", {
                        staticClass: "star",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: " + o.animationLength + "s star-3 infinite;",
                        attrs: {
                            id: "star-3",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M31.3097 85.3715C31.2796 92.8944 25.1719 98.9835 17.6419 98.9835C17.6419 98.9835 17.6419 98.9836 17.6418 98.9836C25.1775 98.9836 31.2887 105.082 31.3096 112.613C31.3305 105.086 37.4351 98.9902 44.9651 98.9836C37.4408 98.9769 31.3397 92.8902 31.3097 85.3715Z",
                            fill: o.color || "white"
                        }
                    })])])])
                }), [], !1, null, "71364029", null).exports),
                y = {
                    props: {
                        isAnimated: {
                            type: Boolean,
                            default: !1
                        },
                        color: {
                            type: String,
                            default: void 0
                        }
                    },
                    computed: {
                        animationLength: function() {
                            return this.$store.state.customization.animationLength
                        }
                    }
                },
                v = (r(478), r(480), Object(c.a)(y, (function() {
                    var o = this,
                        t = o.$createElement,
                        r = o._self._c || t;
                    return r("div", {
                        staticClass: "wrapper"
                    }, [r("div", {
                        staticClass: "animation",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: " + o.animationLength + "s move-fade infinite linear;"
                    }, [r("svg", {
                        attrs: {
                            id: "offset-stars",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("circle", {
                        attrs: {
                            cx: "15.6429",
                            cy: "14.008",
                            r: "3.77722",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "77.7465",
                            cy: "37.4402",
                            r: "3.77722",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "41.4186",
                            cy: "91.8162",
                            r: "3.77722",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "107.364",
                            cy: "114.029",
                            r: "3.77722",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "96.1984",
                            cy: "81.5508",
                            r: "2.18596",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "124.961",
                            cy: "8.04478",
                            r: "2.18596",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "100.57",
                            cy: "21.9774",
                            r: "2.18596",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "33.78",
                            cy: "54.2954",
                            r: "2.18596",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "11.8656",
                            cy: "119.993",
                            r: "2.18596",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "30.5725",
                            cy: "81.2899",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "3.50636",
                            cy: "47.4907",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "50.3274",
                            cy: "118.828",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "62.0825",
                            cy: "66.7468",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "108.528",
                            cy: "57.6459",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "116.888",
                            cy: "89.2036",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "52.6565",
                            cy: "17.7852",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    })]), o._v(" "), r("svg", {
                        attrs: {
                            id: "initial-stars",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("circle", {
                        attrs: {
                            cx: "15.6429",
                            cy: "14.008",
                            r: "3.77722",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "77.7465",
                            cy: "37.4402",
                            r: "3.77722",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "41.4186",
                            cy: "91.8162",
                            r: "3.77722",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "107.364",
                            cy: "114.029",
                            r: "3.77722",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "96.1984",
                            cy: "81.5508",
                            r: "2.18596",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "124.961",
                            cy: "8.04478",
                            r: "2.18596",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "100.57",
                            cy: "21.9774",
                            r: "2.18596",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "33.78",
                            cy: "54.2954",
                            r: "2.18596",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "11.8656",
                            cy: "119.993",
                            r: "2.18596",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "30.5725",
                            cy: "81.2899",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "3.50636",
                            cy: "47.4907",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "50.3274",
                            cy: "118.828",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "62.0825",
                            cy: "66.7468",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "108.528",
                            cy: "57.6459",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "116.888",
                            cy: "89.2036",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    }), o._v(" "), r("circle", {
                        attrs: {
                            cx: "52.6565",
                            cy: "17.7852",
                            r: "1.16456",
                            fill: o.color ? o.color : "white"
                        }
                    })])])])
                }), [], !1, null, "0e717c64", null).exports),
                x = {
                    props: {
                        isAnimated: {
                            type: Boolean,
                            default: !1
                        },
                        color: {
                            type: String,
                            default: void 0
                        }
                    },
                    computed: {
                        animationLength: function() {
                            return this.$store.state.customization.animationLength
                        }
                    }
                },
                w = (r(482), r(484), Object(c.a)(x, (function() {
                    var o = this,
                        t = o.$createElement,
                        r = o._self._c || t;
                    return r("div", {
                        staticClass: "wrapper"
                    }, [r("div", {
                        staticClass: "animation",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: " + o.animationLength + "s move-fade infinite linear;"
                    }, [r("svg", {
                        attrs: {
                            id: "offset-top-left",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("g", {
                        attrs: {
                            "clip-path": "url(#clip0)"
                        }
                    }, [r("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M43.1689 14.169L35.8232 7.86822L29.5225 0.522491L36.8682 6.82325L43.1689 14.169ZM105.146 24.1464L93.1464 13.8535L82.8535 1.85354L94.8535 12.1464L105.146 24.1464ZM10.1464 14.5606L22.1464 24.8535L11.8535 12.8536L-0.146484 2.56069L10.1464 14.5606ZM66.1464 20.8535L78.1464 31.1464L67.8535 19.1464L55.8535 8.85354L66.1464 20.8535ZM99.1464 88.8535L111.146 99.1464L100.853 87.1464L88.8535 76.8535L99.1464 88.8535ZM41.1464 82.1464L29.1464 71.8535L18.8535 59.8535L30.8535 70.1464L41.1464 82.1464ZM53.1464 114.853L65.1464 125.146L54.8535 113.146L42.8535 102.854L53.1464 114.853ZM112.146 67.1464L100.146 56.8535L89.8535 44.8535L101.853 55.1464L112.146 67.1464ZM59.8232 68.5303L67.1689 74.8311L60.8682 67.4853L53.5225 61.1846L59.8232 68.5303ZM72.1689 109.169L64.8232 102.868L58.5225 95.5225L65.8682 101.823L72.1689 109.169ZM92.8232 114.868L100.169 121.169L93.8682 113.823L86.5225 107.522L92.8232 114.868ZM123.169 23.169L115.823 16.8682L109.522 9.52249L116.868 15.8232L123.169 23.169ZM116.823 118.868L124.169 125.169L117.868 117.823L110.522 111.522L116.823 118.868ZM22.1689 95.169L14.8232 88.8682L8.52245 81.5225L15.8682 87.8232L22.1689 95.169ZM16.8232 46.8682L24.1689 53.169L17.8682 45.8232L10.5225 39.5225L16.8232 46.8682ZM55.1689 42.169L47.8232 35.8682L41.5225 28.5225L48.8682 34.8232L55.1689 42.169ZM113.823 40.8682L121.169 47.169L114.868 39.8232L107.522 33.5225L113.823 40.8682ZM16.1464 114.853L28.1464 125.146L17.8535 113.146L5.85352 102.854L16.1464 114.853Z",
                            fill: o.color || "white"
                        }
                    })]), o._v(" "), r("defs", [r("clipPath", {
                        attrs: {
                            id: "clip0"
                        }
                    }, [r("rect", {
                        attrs: {
                            width: "128",
                            height: "128",
                            fill: o.color || "white"
                        }
                    })])])]), o._v(" "), r("svg", {
                        attrs: {
                            id: "offset-bottom-left",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("g", {
                        attrs: {
                            "clip-path": "url(#clip0)"
                        }
                    }, [r("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M43.1689 14.169L35.8232 7.86822L29.5225 0.522491L36.8682 6.82325L43.1689 14.169ZM105.146 24.1464L93.1464 13.8535L82.8535 1.85354L94.8535 12.1464L105.146 24.1464ZM10.1464 14.5606L22.1464 24.8535L11.8535 12.8536L-0.146484 2.56069L10.1464 14.5606ZM66.1464 20.8535L78.1464 31.1464L67.8535 19.1464L55.8535 8.85354L66.1464 20.8535ZM101.146 86.8535L113.146 97.1464L102.853 85.1464L90.8535 74.8535L101.146 86.8535ZM41.1464 82.1464L29.1464 71.8535L18.8535 59.8535L30.8535 70.1464L41.1464 82.1464ZM53.1464 114.853L65.1464 125.146L54.8535 113.146L42.8535 102.854L53.1464 114.853ZM112.146 67.1464L100.146 56.8535L89.8535 44.8535L101.853 55.1464L112.146 67.1464ZM59.8232 68.5303L67.1689 74.8311L60.8682 67.4853L53.5225 61.1846L59.8232 68.5303ZM72.1689 109.169L64.8232 102.868L58.5225 95.5225L65.8682 101.823L72.1689 109.169ZM92.8232 114.868L100.169 121.169L93.8682 113.823L86.5225 107.522L92.8232 114.868ZM123.169 23.169L115.823 16.8682L109.522 9.52249L116.868 15.8232L123.169 23.169ZM116.823 118.868L124.169 125.169L117.868 117.823L110.522 111.522L116.823 118.868ZM19.1689 87.169L11.8232 80.8682L5.52244 73.5225L12.8682 79.8232L19.1689 87.169ZM16.8232 46.8682L24.1689 53.169L17.8682 45.8232L10.5225 39.5225L16.8232 46.8682ZM55.1689 42.169L47.8232 35.8682L41.5225 28.5225L48.8682 34.8232L55.1689 42.169ZM113.823 40.8682L121.169 47.169L114.868 39.8232L107.522 33.5225L113.823 40.8682ZM16.1464 114.853L28.1464 125.146L17.8535 113.146L5.85352 102.854L16.1464 114.853Z",
                            fill: o.color || "white"
                        }
                    })]), o._v(" "), r("defs", [r("clipPath", {
                        attrs: {
                            id: "clip0"
                        }
                    }, [r("rect", {
                        attrs: {
                            width: "128",
                            height: "128",
                            fill: o.color || "white"
                        }
                    })])])]), o._v(" "), r("svg", {
                        attrs: {
                            id: "offset-top-right",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("g", {
                        attrs: {
                            "clip-path": "url(#clip0)"
                        }
                    }, [r("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M43.1689 14.169L35.8232 7.86822L29.5225 0.522491L36.8682 6.82325L43.1689 14.169ZM105.146 24.1464L93.1464 13.8535L82.8535 1.85354L94.8535 12.1464L105.146 24.1464ZM10.1464 14.5606L22.1464 24.8535L11.8535 12.8536L-0.146484 2.56069L10.1464 14.5606ZM66.1464 20.8535L78.1464 31.1464L67.8535 19.1464L55.8535 8.85354L66.1464 20.8535ZM101.146 86.8535L113.146 97.1464L102.853 85.1464L90.8535 74.8535L101.146 86.8535ZM41.1464 82.1464L29.1464 71.8535L18.8535 59.8535L30.8535 70.1464L41.1464 82.1464ZM53.1464 114.853L65.1464 125.146L54.8535 113.146L42.8535 102.854L53.1464 114.853ZM112.146 67.1464L100.146 56.8535L89.8535 44.8535L101.853 55.1464L112.146 67.1464ZM59.8232 68.5303L67.1689 74.8311L60.8682 67.4853L53.5225 61.1846L59.8232 68.5303ZM72.1689 109.169L64.8232 102.868L58.5225 95.5225L65.8682 101.823L72.1689 109.169ZM92.8232 114.868L100.169 121.169L93.8682 113.823L86.5225 107.522L92.8232 114.868ZM123.169 23.169L115.823 16.8682L109.522 9.52249L116.868 15.8232L123.169 23.169ZM116.823 118.868L124.169 125.169L117.868 117.823L110.522 111.522L116.823 118.868ZM19.1689 87.169L11.8232 80.8682L5.52244 73.5225L12.8682 79.8232L19.1689 87.169ZM16.8232 46.8682L24.1689 53.169L17.8682 45.8232L10.5225 39.5225L16.8232 46.8682ZM55.1689 42.169L47.8232 35.8682L41.5225 28.5225L48.8682 34.8232L55.1689 42.169ZM113.823 40.8682L121.169 47.169L114.868 39.8232L107.522 33.5225L113.823 40.8682ZM16.1464 114.853L28.1464 125.146L17.8535 113.146L5.85352 102.854L16.1464 114.853Z",
                            fill: o.color || "white"
                        }
                    })]), o._v(" "), r("defs", [r("clipPath", {
                        attrs: {
                            id: "clip0"
                        }
                    }, [r("rect", {
                        attrs: {
                            width: "128",
                            height: "128",
                            fill: o.color || "white"
                        }
                    })])])]), o._v(" "), r("svg", {
                        attrs: {
                            id: "initial",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("g", {
                        attrs: {
                            "clip-path": "url(#clip0)"
                        }
                    }, [r("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M43.1689 14.169L35.8232 7.86822L29.5225 0.522491L36.8682 6.82325L43.1689 14.169ZM105.146 24.1464L93.1464 13.8535L82.8535 1.85354L94.8535 12.1464L105.146 24.1464ZM10.1464 14.5606L22.1464 24.8535L11.8535 12.8536L-0.146484 2.56069L10.1464 14.5606ZM66.1464 20.8535L78.1464 31.1464L67.8535 19.1464L55.8535 8.85354L66.1464 20.8535ZM101.146 86.8535L113.146 97.1464L102.853 85.1464L90.8535 74.8535L101.146 86.8535ZM41.1464 82.1464L29.1464 71.8535L18.8535 59.8535L30.8535 70.1464L41.1464 82.1464ZM53.1464 114.853L65.1464 125.146L54.8535 113.146L42.8535 102.854L53.1464 114.853ZM112.146 67.1464L100.146 56.8535L89.8535 44.8535L101.853 55.1464L112.146 67.1464ZM59.8232 68.5303L67.1689 74.8311L60.8682 67.4853L53.5225 61.1846L59.8232 68.5303ZM72.1689 109.169L64.8232 102.868L58.5225 95.5225L65.8682 101.823L72.1689 109.169ZM92.8232 114.868L100.169 121.169L93.8682 113.823L86.5225 107.522L92.8232 114.868ZM123.169 23.169L115.823 16.8682L109.522 9.52249L116.868 15.8232L123.169 23.169ZM116.823 118.868L124.169 125.169L117.868 117.823L110.522 111.522L116.823 118.868ZM19.1689 87.169L11.8232 80.8682L5.52244 73.5225L12.8682 79.8232L19.1689 87.169ZM16.8232 46.8682L24.1689 53.169L17.8682 45.8232L10.5225 39.5225L16.8232 46.8682ZM55.1689 42.169L47.8232 35.8682L41.5225 28.5225L48.8682 34.8232L55.1689 42.169ZM113.823 40.8682L121.169 47.169L114.868 39.8232L107.522 33.5225L113.823 40.8682ZM16.1464 114.853L28.1464 125.146L17.8535 113.146L5.85352 102.854L16.1464 114.853Z",
                            fill: o.color || "white"
                        }
                    })]), o._v(" "), r("defs", [r("clipPath", {
                        attrs: {
                            id: "clip0"
                        }
                    }, [r("rect", {
                        attrs: {
                            width: "128",
                            height: "128",
                            fill: o.color || "white"
                        }
                    })])])])])])
                }), [], !1, null, "5ce963db", null).exports),
                k = {
                    props: {
                        isAnimated: {
                            type: Boolean,
                            default: !1
                        },
                        color: {
                            type: String,
                            default: void 0
                        }
                    },
                    computed: {
                        animationLength: function() {
                            return this.$store.state.customization.animationLength
                        }
                    }
                },
                L = (r(486), r(488), Object(c.a)(k, (function() {
                    var o = this.$createElement,
                        t = this._self._c || o;
                    return t("div", {
                        staticClass: "wrapper"
                    }, [t("div", {
                        staticClass: "animation"
                    }, [t("svg", {
                        class: {
                            animated: this.isAnimated
                        },
                        style: "animation: " + this.animationLength + "s rotate-animation infinite linear;",
                        attrs: {
                            id: "sawblade",
                            width: "182",
                            height: "182",
                            viewBox: "0 0 182 182",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M182 0H0V182H182V0ZM92.6851 33.3218C91.8986 32.0914 90.1014 32.0914 89.3149 33.3218L87.3658 36.3707C86.6659 37.4655 85.1243 37.6127 84.2299 36.6702L81.739 34.0452C80.7338 32.9859 78.9692 33.326 78.4297 34.683L77.0928 38.0457C76.6128 39.2532 75.1269 39.6895 74.0703 38.9332L71.1276 36.8271C69.9401 35.9772 68.2717 36.6451 67.9988 38.0797L67.3224 41.6346C67.0796 42.9111 65.7031 43.6207 64.5225 43.0781L61.2344 41.567C59.9075 40.9572 58.3957 41.9288 58.3992 43.389L58.4079 47.0078C58.411 48.3071 57.1937 49.2644 55.9317 48.955L52.417 48.0934C50.9988 47.7458 49.6981 48.9859 49.9779 50.4191L50.6713 53.9708C50.9202 55.2461 49.9061 56.4165 48.6084 56.3516L44.9942 56.1707C43.5357 56.0977 42.4933 57.5616 43.0392 58.916L44.3923 62.2723C44.8781 63.4774 44.1037 64.8185 42.8172 65.0004L39.234 65.5068C37.7882 65.7111 37.0416 67.3459 37.834 68.5724L39.7978 71.612C40.5029 72.7034 39.9963 74.1668 38.7674 74.5889L35.3449 75.7642C33.9638 76.2385 33.5401 77.985 34.5504 79.0394L37.0538 81.6525C37.9527 82.5907 37.7323 84.1236 36.6055 84.7705L33.4673 86.5724C32.2009 87.2995 32.1154 89.0946 33.3069 89.9387L36.2597 92.0307C37.3199 92.7819 37.3936 94.3288 36.4096 95.1773L33.669 97.5405C32.5631 98.4941 32.8189 100.273 34.1487 100.876L37.444 102.372C38.6272 102.909 38.9923 104.414 38.1867 105.433L35.9429 108.272C35.0375 109.418 35.6252 111.116 37.0452 111.457L40.5639 112.302C41.8274 112.605 42.4707 114.014 41.8726 115.167L40.2066 118.38C39.5344 119.676 40.433 121.232 41.8917 121.298L45.5068 121.462C46.8048 121.521 47.7031 122.782 47.334 124.028L46.3062 127.498C45.8914 128.898 47.0683 130.256 48.5132 130.045L52.0939 129.521C53.3795 129.333 54.5003 130.402 54.3737 131.695L54.0211 135.296C53.8788 136.75 55.2915 137.861 56.6703 137.38L60.0871 136.188C61.314 135.76 62.6168 136.597 62.7372 137.891L63.0725 141.494C63.2079 142.948 64.8052 143.772 66.0681 143.039L69.1977 141.222C70.3214 140.569 71.7591 141.145 72.1221 142.393L73.1333 145.867C73.5414 147.269 75.2657 147.776 76.367 146.817L79.0962 144.44C80.0761 143.587 81.5968 143.88 82.1894 145.036L83.8399 148.257C84.5059 149.556 86.2949 149.727 87.1948 148.577L89.4249 145.727C90.2257 144.704 91.7743 144.704 92.5751 145.727L94.8052 148.577C95.7051 149.727 97.4941 149.556 98.1601 148.257L99.8106 145.036C100.403 143.88 101.924 143.587 102.904 144.44L105.633 146.817C106.734 147.776 108.459 147.269 108.867 145.867L109.878 142.393C110.241 141.145 111.679 140.569 112.802 141.222L115.932 143.039C117.195 143.772 118.792 142.948 118.927 141.494L119.263 137.891C119.383 136.597 120.686 135.76 121.913 136.188L125.33 137.38C126.709 137.861 128.121 136.75 127.979 135.296L127.626 131.695C127.5 130.402 128.62 129.333 129.906 129.521L133.487 130.045C134.932 130.256 136.109 128.898 135.694 127.498L134.666 124.028C134.297 122.782 135.195 121.521 136.493 121.462L140.108 121.298C141.567 121.232 142.466 119.676 141.793 118.38L140.127 115.167C139.529 114.014 140.173 112.605 141.436 112.302L144.955 111.457C146.375 111.116 146.963 109.418 146.057 108.272L143.813 105.433C143.008 104.414 143.373 102.909 144.556 102.372L147.851 100.876C149.181 100.273 149.437 98.4941 148.331 97.5405L145.59 95.1773C144.606 94.3288 144.68 92.7819 145.74 92.0307L148.693 89.9388C149.885 89.0946 149.799 87.2995 148.533 86.5724L145.394 84.7705C144.268 84.1236 144.047 82.5907 144.946 81.6525L147.45 79.0394C148.46 77.985 148.036 76.2385 146.655 75.7642L143.233 74.5889C142.004 74.1668 141.497 72.7034 142.202 71.612L144.166 68.5724C144.958 67.3459 144.212 65.7111 142.766 65.5068L139.183 65.0004C137.896 64.8185 137.122 63.4774 137.608 62.2723L138.961 58.916C139.507 57.5616 138.464 56.0977 137.006 56.1707L133.392 56.3516C132.094 56.4165 131.08 55.2461 131.329 53.9708L132.022 50.4191C132.302 48.9859 131.001 47.7458 129.583 48.0934L126.068 48.955C124.806 49.2644 123.589 48.3071 123.592 47.0077L123.601 43.389C123.604 41.9288 122.092 40.9572 120.766 41.567L117.478 43.0781C116.297 43.6207 114.92 42.9111 114.678 41.6346L114.001 38.0797C113.728 36.6451 112.06 35.9772 110.872 36.8271L107.93 38.9332C106.873 39.6895 105.387 39.2532 104.907 38.0457L103.57 34.683C103.031 33.326 101.266 32.9859 100.261 34.0452L97.7701 36.6702C96.8757 37.6127 95.3341 37.4655 94.6342 36.3707L92.6851 33.3218Z",
                            fill: this.color ? this.color : "white"
                        }
                    })])])])
                }), [], !1, null, "27472b88", null).exports),
                M = {
                    props: {
                        isAnimated: {
                            type: Boolean,
                            default: !1
                        },
                        color: {
                            type: String,
                            default: void 0
                        }
                    },
                    computed: {
                        animationLength: function() {
                            return this.$store.state.customization.animationLength
                        }
                    }
                },
                Z = (r(490), r(492), Object(c.a)(M, (function() {
                    var o = this,
                        t = o.$createElement,
                        r = o._self._c || t;
                    return r("div", {
                        staticClass: "expanding-circles-wrapper"
                    }, [r("svg", {
                        staticClass: "expanding-circle expanding-circles-1",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: expanding-circles-1 " + o.animationLength + "s infinite;",
                        attrs: {
                            width: "256",
                            height: "256",
                            viewBox: "0 0 256 256",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("circle", {
                        attrs: {
                            cx: "128",
                            cy: "128",
                            r: "128",
                            fill: o.color ? o.color : "white"
                        }
                    })]), o._v(" "), r("svg", {
                        staticClass: "expanding-circle expanding-circles-2",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: expanding-circles-2 " + o.animationLength + "s infinite;",
                        attrs: {
                            width: "256",
                            height: "256",
                            viewBox: "0 0 256 256",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("circle", {
                        attrs: {
                            cx: "128",
                            cy: "128",
                            r: "128",
                            fill: o.color ? o.color : "white"
                        }
                    })]), o._v(" "), r("svg", {
                        staticClass: "expanding-circle expanding-circles-3",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: expanding-circles-3 " + o.animationLength + "s infinite;",
                        attrs: {
                            width: "256",
                            height: "256",
                            viewBox: "0 0 256 256",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("circle", {
                        attrs: {
                            cx: "128",
                            cy: "128",
                            r: "128",
                            fill: o.color ? o.color : "white"
                        }
                    })])])
                }), [], !1, null, "07e78634", null).exports),
                Y = {
                    props: {
                        isAnimated: {
                            type: Boolean,
                            default: !1
                        },
                        color: {
                            type: String,
                            default: void 0
                        }
                    },
                    computed: {
                        animationLength: function() {
                            return this.$store.state.customization.animationLength
                        }
                    }
                },
                _ = (r(494), r(496), Object(c.a)(Y, (function() {
                    var o = this,
                        t = o.$createElement,
                        r = o._self._c || t;
                    return r("div", {
                        staticClass: "wrapper"
                    }, [r("svg", {
                        staticClass: "stripes vertical-stripes",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: move-in-vertical " + o.animationLength + "s infinite;",
                        attrs: {
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M19 0H37V128H19V0ZM55 0H73V128H55V0ZM109 0H91V128H109V0Z",
                            fill: o.color ? o.color : "white"
                        }
                    })]), o._v(" "), r("svg", {
                        staticClass: "stripes horizontal-stripes",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: move-in-horizontal " + o.animationLength + "s infinite;",
                        attrs: {
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M128 19V37L0 37V19L128 19ZM128 55V73L0 73V55L128 55ZM128 109V91L0 91V109L128 109Z",
                            fill: o.color ? o.color : "white"
                        }
                    })])])
                }), [], !1, null, "ca5c3a06", null).exports),
                B = {
                    props: {
                        isAnimated: {
                            type: Boolean,
                            default: !1
                        },
                        color: {
                            type: String,
                            default: void 0
                        }
                    },
                    computed: {
                        animationLength: function() {
                            return this.$store.state.customization.animationLength
                        }
                    }
                },
                S = (r(498), r(500), Object(c.a)(B, (function() {
                    var o = this,
                        t = o.$createElement,
                        r = o._self._c || t;
                    return r("div", {
                        staticClass: "wrapper"
                    }, [r("svg", {
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: stream-down " + o.animationLength + "s infinite;",
                        attrs: {
                            id: "stream",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("rect", {
                        attrs: {
                            x: "62",
                            width: "4",
                            height: "128",
                            fill: o.color ? o.color : "white"
                        }
                    })]), o._v(" "), r("svg", {
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: fill-up " + o.animationLength + "s linear infinite;",
                        attrs: {
                            id: "fill-up",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("rect", {
                        attrs: {
                            width: "128",
                            height: "128",
                            fill: o.color ? o.color : "white"
                        }
                    })])])
                }), [], !1, null, "020cd9e4", null).exports),
                A = {
                    props: {
                        isAnimated: {
                            type: Boolean,
                            default: !1
                        },
                        color: {
                            type: String,
                            default: void 0
                        }
                    },
                    computed: {
                        animationLength: function() {
                            return this.$store.state.customization.animationLength
                        }
                    }
                },
                V = (r(502), r(504), Object(c.a)(A, (function() {
                    var o = this.$createElement,
                        t = this._self._c || o;
                    return t("div", {
                        staticClass: "wrapper"
                    }, [t("svg", {
                        class: {
                            animated: this.isAnimated
                        },
                        style: "animation: move-left-right " + this.animationLength + "s linear infinite;",
                        attrs: {
                            id: "earth",
                            width: "321",
                            height: "128",
                            viewBox: "0 0 321 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M91.8884 119.819C91.2786 119.433 92.5485 118.58 95.6969 117.26C96.5761 116.892 97.9158 116.122 98.6741 115.549C99.9634 114.574 100.07 114.532 100.326 114.896C100.714 115.45 100.485 115.851 99.5378 116.278C99.0851 116.482 98.5159 116.878 98.2729 117.158C98.0299 117.437 97.6389 117.666 97.404 117.666C97.1691 117.666 96.617 117.989 96.177 118.384C94.6711 119.735 92.7636 120.373 91.8884 119.819ZM76.9715 117.05C76.75 116.91 76.7377 116.765 76.9182 116.428C77.0475 116.186 77.1534 115.688 77.1534 115.321C77.1534 114.72 77.2018 114.67 77.6329 114.822C77.8967 114.914 78.4482 115.003 78.8585 115.018C79.2688 115.034 79.6787 115.06 79.7693 115.077C80.1226 115.143 79.1784 116.218 78.33 116.715L78.2448 116.765C77.6394 117.12 77.4433 117.235 77.2732 117.205C77.1917 117.19 77.1161 117.142 77.0043 117.071C76.9937 117.064 76.9828 117.057 76.9715 117.05ZM101.601 115.186C101.527 115.112 101.702 114.865 101.991 114.638C102.426 114.296 102.477 114.152 102.287 113.796C102.012 113.282 102.42 112.73 103.367 112.338C104.1 112.035 104.285 111.418 104.088 109.931C103.953 108.907 103.969 108.843 104.299 109.116C104.558 109.33 104.622 109.6 104.53 110.092C104.428 110.631 104.519 110.912 104.969 111.446C105.455 112.024 105.599 112.086 105.977 111.884C106.354 111.683 106.398 111.701 106.28 112.01C106.203 112.209 106.141 112.41 106.141 112.456C106.141 112.502 105.829 112.699 105.448 112.894C105.067 113.089 104.324 113.605 103.796 114.041C102.938 114.749 102.056 115.321 101.821 115.321C101.774 115.321 101.675 115.26 101.601 115.186ZM79.062 112.433C78.6132 111.956 78.5302 111.937 78.099 112.22C77.5495 112.58 76.517 112.369 75.6894 111.729C75.2479 111.387 75.2172 111.277 75.4448 110.851C75.6391 110.488 75.6456 110.234 75.4702 109.849C75.3409 109.565 75.2351 109.146 75.2351 108.917C75.2351 108.4 74.8998 108.376 74.6222 108.872C74.508 109.076 74.3534 109.182 74.2788 109.107C74.2042 109.033 74.451 108.621 74.8274 108.192C75.7535 107.137 75.3921 106.851 74.1687 107.67C73.6415 108.023 73.1761 108.409 73.1343 108.527C73.0926 108.646 72.8393 108.281 72.5714 107.716C72.2809 107.103 71.7792 106.488 71.3284 106.191C70.6511 105.745 70.4215 105.708 69.1205 105.837C67.2125 106.027 65.3717 106.498 64.1669 107.103C63.6192 107.379 62.5504 107.661 61.7263 107.747C60.9198 107.832 59.6373 108.135 58.8761 108.422C57.7121 108.86 57.3808 108.906 56.7911 108.711C55.9999 108.45 55.6714 107.912 56.1831 107.716C56.3684 107.645 56.7047 107.155 56.9305 106.629C57.2919 105.786 57.3119 105.523 57.0976 104.434C56.9202 103.533 56.9153 102.679 57.0794 101.292C57.2033 100.244 57.2507 99.1805 57.1848 98.9284C57.1189 98.6763 57.2219 98.0591 57.4137 97.5568C57.7519 96.6713 57.8338 96.6134 60.1204 95.6449C61.4173 95.0956 62.7448 94.6462 63.0704 94.6462C63.9514 94.6462 65.0423 93.808 65.6437 92.669C66.0154 91.965 66.2733 91.6971 66.4963 91.7833C67.1189 92.0239 67.2417 91.9767 67.1938 91.5152C67.1629 91.2183 67.2905 91.0023 67.5442 90.9218C67.7637 90.8522 68.1692 90.4641 68.4453 90.0593C68.728 89.645 69.3093 89.1782 69.7757 88.991C70.5538 88.6785 70.6313 88.6832 71.0546 89.0679C71.8355 89.7778 72.3889 89.985 72.6532 89.6665C72.7817 89.5117 72.8259 89.324 72.7514 89.2495C72.5074 89.0055 73.6238 87.6048 74.1694 87.4702C74.4625 87.3979 75.0642 87.1575 75.5066 86.9359C76.1964 86.5903 76.439 86.5674 77.2117 86.7749C78.8781 87.2223 78.9334 87.2954 78.3136 88.232C77.5164 89.4365 77.7278 89.9075 79.683 91.2837C80.5856 91.9191 81.4378 92.401 81.5766 92.3547C81.7155 92.3085 82.1545 91.822 82.5522 91.2737C83.0942 90.5265 83.3044 89.9831 83.3913 89.1045C83.5146 87.8563 84.1117 86.1204 84.4175 86.1204C84.5188 86.1204 84.7508 86.6338 84.9332 87.2612C85.1156 87.8886 85.4978 88.6208 85.7825 88.8883C86.448 89.5134 86.8345 91.2615 86.5357 92.2943C86.3377 92.9787 86.3759 93.0885 87.0545 93.7863C87.4573 94.2006 88.0945 95.211 88.4703 96.0316C88.8462 96.8522 89.5239 98.0133 89.9763 98.6118L90.7989 99.7L90.5651 101.381C90.3954 102.601 90.1328 103.414 89.6084 104.343C88.805 105.766 87.6039 107.123 86.9708 107.324C86.7431 107.396 86.2156 107.93 85.7986 108.511C85.3816 109.091 84.9466 109.566 84.8319 109.566C84.7172 109.566 84.2296 110.064 83.7484 110.673C82.9458 111.688 82.798 111.781 81.9618 111.797C81.32 111.809 80.8286 111.983 80.3017 112.385L79.5532 112.956L79.062 112.433ZM0.0441895 9.79576C1.89016 10.1703 4.52064 10.8447 4.7534 11.0775C4.99271 11.3168 5.75035 10.9976 5.75035 10.6574C5.75035 10.5428 5.32733 10.2435 4.8103 9.99231C3.2072 9.21346 3.10426 7.96607 4.61188 7.58769C5.48686 7.36808 5.86525 7.62141 7.07545 9.23709C7.13283 9.31369 7.18807 9.38736 7.2412 9.45823C8.17389 10.7022 8.4616 11.0859 8.40407 11.408C8.3784 11.5517 8.28403 11.6831 8.14755 11.8731C8.13012 11.8974 8.11201 11.9226 8.09326 11.9489C7.71313 12.4827 7.69025 12.6077 7.95398 12.7089C8.45369 12.9006 9.52318 12.2296 9.67369 11.6299C9.85005 10.9272 9.52075 10.3284 8.73436 9.9217C8.11612 9.602 7.66864 9.0162 7.66864 8.52657C7.66864 8.35966 7.90053 8.31804 8.36136 8.40221C9.05231 8.52842 9.62383 8.27784 11.1885 7.16268C11.5464 6.90765 12.1513 6.7396 12.7613 6.72577C13.9985 6.6977 14.399 6.49 14.0429 6.061C13.9033 5.89276 13.8334 5.71073 13.8877 5.65649C14.1599 5.38428 17.6689 4.89377 18.477 5.01496C19.2546 5.13157 19.4953 5.06849 20.1351 4.58052C20.5467 4.26655 20.8835 3.92514 20.8835 3.82182C20.8835 3.56129 19.0209 3.58456 18.8587 3.84712C18.6354 4.2084 18.346 4.08268 18.4274 3.6598C18.4962 3.30275 18.3158 3.24464 16.7633 3.12377C12.5239 2.79369 12.1794 2.71624 12.6879 2.20766C13.1351 1.76051 14.2318 1.76918 15.1497 2.22712C15.5259 2.41474 16.1489 2.56826 16.5343 2.56826C16.9196 2.56826 17.2942 2.66417 17.3667 2.7814C17.4391 2.89863 17.8124 2.99454 18.1963 2.99454C19.2593 2.99454 21.3147 3.45372 21.1857 3.6624C21.1229 3.76399 21.3217 3.84712 21.6275 3.84712C21.9333 3.84712 22.4905 4.0123 22.8657 4.21418C23.3702 4.48567 24.075 4.58334 25.5727 4.58934C27.1826 4.59578 27.7177 4.67847 28.1837 4.9928C28.5061 5.21024 28.7685 5.44905 28.7668 5.52349C28.7652 5.59793 28.2732 5.92946 27.6737 6.26021C26.2258 7.05902 26.5319 7.40715 28.2832 6.95334C29.4175 6.65941 29.6782 6.65752 30.6173 6.93643C31.3879 7.16526 31.869 7.19464 32.3916 7.04476C32.9133 6.89515 33.4487 6.92727 34.3573 7.1627C35.3053 7.40836 35.7966 7.43335 36.3975 7.26647C37.7687 6.88565 39.4556 6.99321 40.4343 7.52385C40.9207 7.78762 41.8178 8.27566 42.4278 8.60839C43.509 9.19819 43.5561 9.20471 44.3061 8.86849C44.9338 8.58707 45.284 8.56353 46.2099 8.74053C47.1301 8.91647 47.4651 8.89503 47.9834 8.62702C48.4904 8.36481 48.572 8.23593 48.3785 8.00275C48.0042 7.55181 49.3321 7.38418 50.9636 7.6764C51.7108 7.81023 52.6579 7.94383 53.0682 7.97328C53.4785 8.00272 54.2801 8.23654 54.8496 8.49287C55.718 8.88378 56.3734 8.97233 58.9145 9.04213C61.3256 9.10835 62.0931 9.20484 62.6748 9.51483C63.2652 9.82948 63.9381 9.90952 66.1765 9.93134C68.2358 9.95142 69.1584 10.0491 69.7693 10.3116C70.7554 10.7354 71.1498 10.58 70.6131 9.97914C70.227 9.54694 70.2293 9.54634 71.7182 9.69425C74.2131 9.94211 77.2059 10.4881 78.2191 10.8802C78.7466 11.0843 79.7521 11.3216 80.4534 11.4074C81.1547 11.4932 82.1781 11.7912 82.7275 12.0696C83.5615 12.4922 83.8325 12.5389 84.368 12.3522C85.1003 12.0969 85.5754 12.2807 86.6937 13.2521L87.3886 13.8557L86.8649 13.9871C86.3394 14.119 84.9438 13.7735 84.4629 13.3925C84.3215 13.2804 84.1232 13.2398 84.0222 13.3022C83.9213 13.3645 83.4228 13.2723 82.9144 13.0971C81.7238 12.6869 81.1951 12.841 81.7374 13.4402C82.1077 13.8494 82.0997 13.858 81.3934 13.8087C80.0717 13.7165 80.435 14.1069 82.3754 14.8637C83.4305 15.2752 84.3389 15.6556 84.3941 15.7091C84.5941 15.9028 83.9346 16.1428 83.4547 16.0511C82.9278 15.9503 81.6294 16.5158 81.6294 16.846C81.6294 16.9557 81.4242 17.2365 81.1735 17.4702C80.7546 17.8604 80.668 17.8693 80.1078 17.5796C79.5835 17.3084 79.4158 17.3056 78.9118 17.5595C78.5894 17.7219 78.0385 17.9239 77.6874 18.0084C77.3364 18.0929 76.9297 18.2611 76.7838 18.3822C76.3548 18.7382 77.1112 19.7745 78.1765 20.2901C78.7566 20.571 79.1767 20.9473 79.3016 21.298C79.4112 21.6059 79.6436 22.1114 79.8179 22.4215C80.1022 22.9269 80.0998 22.9989 79.7944 23.116C79.5706 23.2019 79.5046 23.3741 79.6021 23.618C79.6837 23.8221 79.776 24.229 79.8071 24.522C79.8382 24.8151 79.9322 25.2141 80.0159 25.4086C80.125 25.6619 80.0349 25.8047 79.6989 25.9113C79.325 26.03 79.073 25.887 78.458 25.2072C78.0335 24.7379 77.3255 24.092 76.8847 23.7716C76.4439 23.4513 75.654 22.6183 75.1295 21.9205C74.2043 20.6896 74.1853 20.6335 74.4923 20.0398C74.6664 19.7032 74.8122 19.2072 74.8163 18.9376C74.8207 18.668 74.9557 18.2092 75.1169 17.9181C75.4247 17.362 75.3061 16.918 74.648 16.163C74.2159 15.6673 73.4471 16.0389 73.641 16.6498C73.8196 17.2125 73.2716 17.3949 72.6413 16.9824C72.3681 16.8036 71.739 16.5926 71.2434 16.5135C70.3926 16.3776 70.3293 16.4038 70.1089 16.9823C69.9805 17.3192 69.9267 17.8518 69.9892 18.1659C70.0867 18.6553 70.0189 18.7554 69.5155 18.866C69.1729 18.9412 68.5863 18.8522 68.1082 18.6524C67.583 18.433 67.0884 18.3667 66.7324 18.4679C66.4266 18.5548 65.3929 18.6337 64.4352 18.6433C62.9182 18.6584 62.6259 18.7246 62.1649 19.1577C61.8738 19.4311 61.5241 20.1025 61.3877 20.6497C61.2514 21.1969 61.0015 21.8581 60.8324 22.119C60.5403 22.5701 60.5685 22.6156 61.4038 23.0418C62.3104 23.5043 63.2989 23.6261 64.0483 23.3677C64.6263 23.1684 66.3896 24.5432 66.9401 25.6223C67.1657 26.0644 67.5384 26.5268 67.7685 26.65C68.6391 27.1159 68.816 30.173 68.088 32.1716C67.5839 33.5554 67.0198 34.0078 66.1914 33.6929C65.8748 33.5725 65.5839 33.4741 65.5447 33.4741C65.5056 33.4741 65.2684 33.8675 65.0178 34.3485C64.6886 34.98 64.6244 35.2981 64.7868 35.4937C65.0974 35.868 64.8675 36.3548 64.2465 36.6378C63.9598 36.7684 63.7253 36.9681 63.7253 37.0816C63.7253 37.1951 64.3922 37.7469 65.2072 38.3078C66.2441 39.0214 66.7982 39.5695 67.0523 40.133C67.252 40.576 67.3765 40.9736 67.3289 41.0166C67.2812 41.0596 66.8455 41.2948 66.3607 41.5392L65.4792 41.9836L64.9488 40.7661C64.3552 39.4035 63.846 38.8555 62.9489 38.6141C62.4973 38.4925 62.3399 38.3202 62.3399 37.947C62.3399 37.6048 62.1187 37.3141 61.649 37.0389C60.9648 36.638 60.9512 36.6385 60.223 37.0885C59.4941 37.539 59.4857 37.5393 59.2619 37.1211C59.1378 36.8891 59.0362 36.5524 59.0362 36.373C59.0362 36.1936 58.857 35.9509 58.6381 35.8337C58.3124 35.6594 58.1068 35.7647 57.5083 36.4124C57.1058 36.8478 56.5903 37.31 56.3626 37.4395C56.0093 37.6404 55.9904 37.7254 56.234 38.0189C56.391 38.208 56.933 38.5939 57.4384 38.8764C58.2423 39.3258 58.3962 39.3513 58.6673 39.0802C58.925 38.8225 59.1347 38.8131 59.9125 39.0242L60.8479 39.2781L60.3266 39.6265C59.3598 40.2727 59.0549 40.612 58.9169 41.1952C58.8037 41.6738 58.8713 41.8178 59.3009 42.0135C59.5877 42.1442 60.0237 42.6655 60.2697 43.172C60.5158 43.6784 61.0073 44.2643 61.362 44.4738C62.1421 44.9346 62.3683 45.4242 61.9178 45.6763C61.4978 45.9114 61.6983 46.2627 62.2526 46.2627C62.9164 46.2627 62.9202 46.6586 62.2786 48.9441C61.5016 51.712 60.8002 52.6355 58.9649 53.3069C58.2421 53.5713 57.363 53.8035 57.0113 53.823C56.1938 53.8682 55.5599 54.2144 55.0068 54.9175L54.5678 55.4756L54.3631 54.9371C54.0959 54.2346 53.4834 54.0579 52.6043 54.4299C51.7986 54.7707 51.2674 55.3143 51.0531 56.0172C50.8614 56.6462 51.5403 57.7525 52.6642 58.6427C53.587 59.3735 54.6222 61.2073 54.8653 62.5418C55.0768 63.7024 54.7022 64.4642 53.6971 64.9174C53.2392 65.1239 52.8107 65.4625 52.7449 65.6699C52.5869 66.1678 51.6405 66.7878 51.467 66.507C51.3947 66.39 51.3918 66.1169 51.4607 65.9C51.5295 65.6831 51.5261 65.35 51.4531 65.1598C51.3481 64.8861 51.2317 64.8614 50.8951 65.0416C50.5446 65.2292 50.4094 65.1816 50.1264 64.7712C49.4307 63.7626 47.4146 62.1418 46.8557 62.1418C46.6588 62.1418 46.5829 62.3786 46.6165 62.8878C46.6436 63.2981 46.56 64.0981 46.4308 64.6655C46.2203 65.59 46.2419 65.7594 46.6386 66.296C46.8821 66.6253 47.1418 67.1359 47.2158 67.4306C47.2909 67.7298 47.9074 68.4132 48.6123 68.9786C49.7872 69.9209 49.911 70.107 50.4055 71.6724C50.6977 72.5972 50.9368 73.4448 50.9368 73.556C50.9368 73.9175 50.4915 73.771 49.5623 73.1037C48.6017 72.4139 47.9881 71.3225 47.4765 69.3934C47.2544 68.5558 47.0108 68.1967 46.3196 67.6883C45.4719 67.0647 45.4463 67.0102 45.5146 65.9784C45.5534 65.3923 45.6495 64.5615 45.7281 64.1322C45.8387 63.5278 45.7472 63.0948 45.3226 62.2139C45.0211 61.5881 44.6645 60.6271 44.5302 60.0782C44.2302 58.852 43.8065 58.6467 43.0574 59.3644C42.7477 59.6611 42.4344 59.9038 42.3613 59.9038C42.0221 59.9038 41.556 59.1817 41.6678 58.8294C41.8708 58.1896 40.6221 55.9594 39.8914 55.6567C39.4916 55.4911 39.126 55.0895 38.8814 54.547C38.4564 53.6044 37.9796 53.2438 37.5032 53.5045C37.3304 53.5991 36.6386 53.7894 35.9659 53.9273C34.7326 54.1803 34.2901 54.5537 34.4589 55.1993C34.5211 55.437 34.3053 55.6666 33.7878 55.9134C33.3683 56.1135 32.9163 56.5158 32.7834 56.8075C32.6505 57.0992 32.3578 57.3963 32.1331 57.4676C31.9083 57.539 31.5616 57.8652 31.3625 58.1925C31.1634 58.5199 30.5706 59.1181 30.045 59.522C29.3258 60.0747 29.1013 60.384 29.137 60.7728C29.346 63.0457 29.0253 64.9474 28.2427 66.0767C27.4794 67.1782 27.4258 67.209 26.7799 66.9147C26.4243 66.7527 26.2055 66.4364 26.1149 65.9534C26.0406 65.5575 25.6114 64.442 25.1609 63.4746C22.4356 57.621 22.0326 56.504 22.2648 55.447C22.4216 54.7327 22.0452 53.6549 21.6815 53.777C21.5357 53.8259 21.4139 54.0016 21.4108 54.1673C21.3926 55.1402 20.2996 55.2896 19.4459 54.4358L18.8802 53.8701L19.3669 53.6901C19.9144 53.4875 19.8642 52.9412 19.3072 53.0414C19.1093 53.0769 18.6562 52.8611 18.3005 52.5618C17.9448 52.2625 17.5716 52.0175 17.4713 52.0175C17.3709 52.0175 17.2276 51.8246 17.1528 51.5889C16.9563 50.9699 15.8257 50.4314 15.259 50.6869C14.749 50.9169 10.1225 50.8689 9.3481 50.6256C9.06917 50.538 8.55319 50.137 8.20151 49.7345C7.56599 49.0071 7.5562 49.0042 6.60292 49.2612C5.69968 49.5047 5.56844 49.4817 4.35175 48.8675C3.30042 48.3368 2.98544 48.0506 2.6609 47.3309C2.24681 46.4126 1.32721 45.7477 0.768021 45.9623C0.591919 46.0298 0.386246 46.3656 0.310959 46.7083C0.202835 47.2006 0.31308 47.5205 0.835663 48.2311C1.19954 48.7259 1.59599 49.4975 1.71669 49.9457C1.97592 50.9084 2.48784 51.1948 2.91217 50.6145C3.16826 50.2643 3.23738 50.2521 3.41074 50.5266C3.52142 50.7018 3.58115 50.9412 3.54343 51.0584C3.42488 51.4268 4.65488 52.0331 5.22873 51.8891C5.51877 51.8163 6.13846 51.3223 6.6058 50.7914C7.34216 49.9549 7.59927 49.8984 7.4734 50.6009C7.38869 51.0737 7.7607 51.6279 8.37648 51.9462C9.32761 52.4379 10.6527 53.5332 10.6527 53.8278C10.6527 53.9636 10.4035 54.3072 10.0991 54.5914C9.79459 54.8756 9.35635 55.4769 9.12523 55.9277C8.56367 57.0229 6.93599 58.625 6.38481 58.625C5.74783 58.625 4.80017 59.1629 4.42297 59.7386C4.24423 60.0114 3.7744 60.3961 3.37889 60.5936C2.27303 61.1456 1.04403 61.7019 0.0441895 62.1142V39.0409L0.982315 39.5223C1.78769 39.9355 2.47537 40.2784 2.5105 40.2841C2.54562 40.2899 2.85736 40.1483 3.20323 39.9694C3.75345 39.6849 3.83208 39.5283 3.83208 38.7167C3.83208 38.1348 3.70767 37.6859 3.49831 37.5121C3.31473 37.3597 3.0173 36.9504 2.83734 36.6024C2.53964 36.0267 2.54091 35.9814 2.85138 36.1006C3.26135 36.2579 3.83206 36.0687 3.83206 35.7754C3.83206 35.6595 3.63377 35.2862 3.3914 34.9459C3.02635 34.4332 2.88005 34.3648 2.53882 34.5474C2.26291 34.6951 2.12691 34.6965 2.12691 34.5516C2.12691 34.4326 1.74648 34.1412 1.28148 33.9039C0.252502 33.379 -0.113678 32.7974 0.207275 32.1977C0.450165 31.7438 1.31795 31.4258 1.68852 31.6548C2.18814 31.9636 2.33539 31.5084 1.92316 30.9295C1.40107 30.1963 0.771997 29.8712 0.0441895 29.9537V9.79576ZM0.0441895 5.81227C0.166058 5.7868 0.29187 5.76243 0.421783 5.73909C2.07611 5.44188 2.36452 5.33795 2.21339 5.09343C2.13562 4.96758 1.71454 4.93495 1.19786 5.01474C0.93104 5.05594 0.502549 5.10798 0.0441895 5.15654V5.81227ZM0.0441895 64.8752V72.1537C0.695213 71.5004 1.08415 70.7745 2.1981 68.638C3.71545 65.7278 3.85484 65.3585 3.72531 64.5918L3.58276 63.7482L2.98232 64.0587C2.65207 64.2295 1.46503 64.5678 0.344467 64.8106C0.239259 64.8334 0.139286 64.8549 0.0441895 64.8752ZM0.0441895 98.0238V89.8087C0.762531 89.2185 1.46749 88.4573 1.71892 87.9136L2.05692 87.1827L2.29185 87.6983C2.88295 88.9956 2.82278 89.5655 1.79442 92.4109C1.24419 93.9334 0.653885 95.7545 0.48262 96.4579C0.323203 97.1126 0.183809 97.6228 0.0441895 98.0238ZM102.326 95.8013C101.646 95.0572 101.239 94.4187 101.239 94.0961C101.239 93.381 101.353 93.4434 101.968 94.4929C102.263 94.9948 102.794 95.6841 103.15 96.0248C103.505 96.3655 103.796 96.7222 103.796 96.8175C103.796 97.2275 103.343 96.914 102.326 95.8013ZM7.24237 95.4988C7.24237 95.3815 7.33827 95.2856 7.45551 95.2856C7.57274 95.2856 7.66866 95.3815 7.66866 95.4988C7.66866 95.616 7.57274 95.7119 7.45551 95.7119C7.33827 95.7119 7.24237 95.616 7.24237 95.4988ZM119.486 95.11C119.41 94.9883 119.453 94.8246 119.58 94.7461C119.896 94.5504 120.008 94.7061 119.797 95.0481C119.684 95.2314 119.574 95.2532 119.486 95.11ZM8.73438 94.7653C8.73438 94.7136 8.83028 94.6121 8.94751 94.5396C9.06474 94.4672 9.16066 94.5095 9.16066 94.6336C9.16066 94.7577 9.06474 94.8593 8.94751 94.8593C8.83028 94.8593 8.73438 94.817 8.73438 94.7653ZM113.943 92.6021C113.735 92.0611 113.999 91.8715 114.586 92.1391C115.093 92.3702 115.104 92.4055 114.751 92.6639C114.257 93.0254 114.101 93.0134 113.943 92.6021ZM115.293 91.6542C114.877 91.3968 115.165 91.1912 115.828 91.2731C116.347 91.3373 116.359 91.3607 115.988 91.5893C115.751 91.7354 115.467 91.7619 115.293 91.6542ZM105.342 90.872C104.904 89.9295 105.057 89.5674 105.51 90.4747C105.981 91.4188 105.989 91.4497 105.768 91.4474C105.68 91.4465 105.488 91.1876 105.342 90.872ZM106.158 90.7208C106.148 90.4961 106.199 90.3702 106.27 90.441C106.34 90.5119 106.348 90.6957 106.286 90.8496C106.218 91.0196 106.168 90.9691 106.158 90.7208ZM123.51 88.6743C123.315 88.3588 123.5 88.1975 123.955 88.2863C124.288 88.3513 124.291 88.3859 123.991 88.6352C123.751 88.8339 123.615 88.8449 123.51 88.6743ZM91.1143 85.6099C89.7654 85.1846 89.1538 84.7895 88.623 84.0005C88.0165 83.0992 86.9068 82.4169 86.3399 82.5968C86.1107 82.6695 85.725 83.065 85.4828 83.4755C85.0704 84.1744 84.9913 84.2129 84.2417 84.0797C83.8014 84.0014 83.1864 83.6999 82.875 83.4096C82.4792 83.0407 82.1758 82.9241 81.8668 83.0222C81.6237 83.0993 81.2715 83.0766 81.0841 82.9718C80.7912 82.8079 80.8199 82.7309 81.2885 82.4239C81.8314 82.0682 81.8322 82.0634 81.468 81.2997C81.1755 80.6863 80.7719 80.3667 79.4523 79.7032C78.5448 79.2469 77.5189 78.8736 77.1725 78.8736C76.3798 78.8736 76.0525 78.143 76.6496 77.7064C77.0048 77.4467 76.9528 77.3821 76.0263 76.932C75.0424 76.454 75.0283 76.4338 75.4983 76.1728C75.7638 76.0253 76.1915 75.9013 76.4486 75.8971C76.948 75.889 77.5797 76.6095 77.5797 77.1871C77.5797 77.3797 77.7869 77.8007 78.0403 78.1228C78.4942 78.6999 78.5058 78.7022 78.8396 78.2855C79.0258 78.053 79.6204 77.6094 80.1608 77.2997L81.1434 76.7366L82.5054 77.351C83.2545 77.689 84.3179 78.1278 84.8685 78.3262C85.419 78.5247 86.5203 79.1144 87.3158 79.6369C88.8348 80.6346 89.4947 81.4758 89.1162 81.9318C88.8077 82.3036 90.0197 83.9969 91.2741 84.947C92.653 85.9912 92.6297 86.0878 91.1143 85.6099ZM100.39 85.5928C100.222 85.3902 100.206 85.2679 100.347 85.2679C100.605 85.2679 100.905 85.6722 100.757 85.8201C100.704 85.8737 100.539 85.7714 100.39 85.5928ZM64.5776 84.7251C64.2689 84.5543 64.1794 84.4286 64.3648 84.4261C64.7455 84.421 65.3543 84.7757 65.2109 84.9191C65.1555 84.9745 64.8705 84.8872 64.5776 84.7251ZM68.1813 84.4435C68.7858 83.5946 69.7318 83.2313 70.6063 83.5122C71.2435 83.7168 71.2535 83.7339 70.7475 83.7541C70.4481 83.7661 69.7494 84.0636 69.1948 84.4153C67.9294 85.2178 67.6239 85.2263 68.1813 84.4435ZM99.1071 84.735C98.8191 84.388 98.888 84.3446 99.4094 84.5447C99.5948 84.6158 99.7466 84.7597 99.7466 84.8644C99.7466 85.1592 99.4012 85.0893 99.1071 84.735ZM100.105 84.547C100.025 84.3381 99.9658 84.0073 99.9732 83.8117C99.9823 83.5762 100.056 83.6299 100.192 83.9707C100.306 84.2538 100.365 84.5846 100.325 84.706C100.284 84.8273 100.186 84.7558 100.105 84.547ZM116.585 84.7476C116.585 84.6959 116.681 84.5943 116.798 84.5219C116.915 84.4494 117.011 84.4917 117.011 84.6159C117.011 84.74 116.915 84.8416 116.798 84.8416C116.681 84.8416 116.585 84.7993 116.585 84.7476ZM62.0722 83.8524C61.9249 83.7903 61.8586 83.6517 61.9249 83.5445C62.0877 83.2811 63.4538 83.2958 63.6188 83.5627C63.6912 83.68 63.625 83.7772 63.4715 83.7788C63.3181 83.7804 63.0007 83.823 62.7662 83.8735C62.5318 83.924 62.2194 83.9145 62.0722 83.8524ZM65.2365 83.6924C64.8492 83.2257 65.2955 83.0837 66.2997 83.354C67.3113 83.6264 67.3079 83.669 66.2593 83.8583C65.7148 83.9566 65.4155 83.908 65.2365 83.6924ZM97.2383 83.5627C97.0909 83.3266 97.0646 83.1364 97.1795 83.1364C97.2937 83.1364 97.4897 83.3283 97.6151 83.5627C97.7406 83.7972 97.7671 83.989 97.6739 83.989C97.5808 83.989 97.3847 83.7972 97.2383 83.5627ZM98.5731 83.3483C98.0033 82.7186 98.3083 82.6196 98.8948 83.2439C99.1697 83.5365 99.2968 83.7759 99.1773 83.7759C99.0579 83.7759 98.7859 83.5835 98.5731 83.3483ZM58.6099 83.3113C57.8479 83.2057 56.7736 82.9713 56.2225 82.7905C55.6714 82.6096 55.022 82.5247 54.7795 82.6016C54.2915 82.7565 52.2156 82.1463 52.2156 81.8479C52.2156 81.1666 54.1264 81.1149 55.1418 81.7687C55.5208 82.0128 55.8196 82.0291 56.6211 81.8495C57.509 81.6505 57.694 81.675 58.2157 82.0607C58.5402 82.3007 58.9023 82.497 59.0203 82.497C59.4417 82.497 60.721 83.21 60.6131 83.3847C60.5526 83.4826 60.3888 83.5494 60.2492 83.5331C60.1096 83.5167 59.3719 83.417 58.6099 83.3113ZM96.8691 82.2839C96.657 82.0494 96.5793 81.8576 96.6965 81.8576C96.8137 81.8576 97.0832 82.0494 97.2954 82.2839C97.5076 82.5183 97.5853 82.7102 97.4681 82.7102C97.3508 82.7102 97.0813 82.5183 96.8691 82.2839ZM95.525 82.0139C95.4039 81.868 95.2431 81.4614 95.1677 81.1104C95.0462 80.545 95.0598 80.5208 95.287 80.8984C95.428 81.1329 95.6801 81.4831 95.8471 81.6766C96.0242 81.8817 96.0663 82.0807 95.948 82.1538C95.8364 82.2227 95.6461 82.1598 95.525 82.0139ZM91.011 81.3362L90.4814 81.0431L91.3024 80.8891C91.7538 80.8044 92.4478 80.4502 92.8443 80.102C93.2773 79.7218 93.5641 79.5841 93.5621 79.7574C93.5573 80.1908 93.2951 80.5248 92.4984 81.1125L92.4375 81.1575C92.0242 81.4627 91.8387 81.5997 91.6507 81.6032C91.4975 81.606 91.3428 81.5202 91.0619 81.3644C91.0454 81.3552 91.0284 81.3458 91.011 81.3362ZM51.0285 80.5063C50.2454 80.0602 48.8331 78.3342 48.3732 77.2614C48.1252 76.6827 47.5568 75.7297 47.1101 75.1436C46.6633 74.5574 46.1506 73.7901 45.9706 73.4384C45.7906 73.0867 45.2438 72.4153 44.7556 71.9464C43.7262 70.9577 43.0931 69.9188 43.5246 69.9262C44.0838 69.9359 45.5235 70.7364 46.141 71.381C47.8445 73.1593 48.1936 73.4758 48.9977 73.9713C49.7738 74.4494 50.1412 74.9471 50.1781 75.5699C50.1851 75.6871 50.4058 76.0228 50.6686 76.3158C50.9314 76.6089 51.4273 77.1601 51.7705 77.5407C52.1138 77.9214 52.4566 78.5152 52.5324 78.8604C52.7806 79.9902 51.8707 80.9861 51.0285 80.5063ZM8.09494 80.3656C8.09494 80.2484 8.19086 80.1524 8.30809 80.1524C8.42532 80.1524 8.52124 80.2484 8.52124 80.3656C8.52124 80.4828 8.42532 80.5787 8.30809 80.5787C8.19086 80.5787 8.09494 80.4828 8.09494 80.3656ZM64.4702 80.3637C64.3971 80.2454 64.3965 79.962 64.468 79.7339C64.5405 79.5056 64.4525 79.0946 64.272 78.8193C63.9752 78.3663 63.978 78.2714 64.3021 77.8087C64.4988 77.5278 64.7309 76.7736 64.8179 76.1327C64.9252 75.342 65.1371 74.8064 65.4772 74.4663C65.9424 74.0011 66.0593 73.9805 67.105 74.1788C68.0029 74.349 68.3562 74.328 68.8449 74.0753C69.6634 73.652 69.7231 73.6709 69.4513 74.2675C69.1058 75.0258 68.4155 75.2681 67.6876 74.8867C66.3878 74.2057 64.6632 75.2178 65.5731 76.1277C65.9075 76.4621 66.0925 76.4925 66.7121 76.3148C67.7738 76.0103 68.1925 76.0662 67.5331 76.4245C66.7867 76.83 66.6451 77.2801 67.0298 78.0239C67.2048 78.3624 67.3479 78.8872 67.3479 79.1902C67.3479 79.6752 67.2969 79.7138 66.9213 79.5128C66.6867 79.3872 66.3481 78.9337 66.169 78.5051C65.8459 77.7316 65.8402 77.7289 65.4266 78.1425C65.0639 78.5052 65.0394 78.6664 65.2379 79.3853C65.4173 80.0351 65.4053 80.2499 65.1814 80.3918C64.8049 80.6305 64.6308 80.6236 64.4702 80.3637ZM93.7136 79.2268C93.5126 78.9202 93.0525 78.5164 92.691 78.3294C92.3295 78.1425 92.0818 77.9416 92.1404 77.883C92.4718 77.5516 94.3214 79.0569 94.1637 79.5298C94.1153 79.675 93.922 79.545 93.7136 79.2268ZM60.2423 78.5174C59.9207 78.349 59.4875 78.2651 59.2796 78.3311C58.7493 78.4994 56.643 78.0707 56.4343 77.7521C56.2683 77.4985 55.78 75.9369 55.5188 74.8238C55.447 74.5178 55.5188 74.1207 55.6866 73.891C55.9306 73.5577 56.0567 73.5324 56.443 73.7391C56.8508 73.9574 56.9372 73.92 57.1608 73.4293C57.3006 73.1224 57.7661 72.6923 58.1951 72.4734C58.6495 72.2416 59.0861 71.8077 59.2409 71.4341C59.4193 71.0033 59.7451 70.7139 60.2329 70.5529C60.6323 70.4211 61.2093 69.9853 61.515 69.5845C61.8207 69.1837 62.1845 68.8558 62.3234 68.8558C62.4624 68.8558 62.8829 69.1724 63.258 69.5594L63.9399 70.263L63.3933 70.9982C62.7723 71.8333 62.8048 72.5515 63.5085 73.5397L63.9345 74.138L63.4036 74.4858C63.1117 74.6772 62.8732 74.9513 62.8737 75.0952C62.8758 75.5834 61.5097 78.3973 61.1674 78.6111C60.929 78.76 60.6516 78.7319 60.2423 78.5174ZM72.6241 78.5135C72.183 78.3983 72.1218 78.021 72.5441 78.021C72.7054 78.021 73.1564 78.0849 73.5466 78.1629C74.1473 78.283 74.1922 78.3297 73.8397 78.4676C73.3769 78.6487 73.1711 78.6564 72.6241 78.5135ZM106.567 75.7956C106.567 75.7439 106.663 75.6423 106.78 75.5699C106.898 75.4974 106.993 75.5397 106.993 75.6639C106.993 75.788 106.898 75.8896 106.78 75.8896C106.663 75.8896 106.567 75.8473 106.567 75.7956ZM71.8774 75.2175C71.707 75.0471 71.697 74.8496 71.8446 74.5737C71.9618 74.3547 72.0008 74.0837 71.9314 73.9713C71.7392 73.6603 72.2207 72.9056 72.6113 72.9056C72.9247 72.9056 72.9235 72.9422 72.5976 73.302C72.316 73.6132 72.2847 73.8191 72.452 74.2593C72.7903 75.1492 72.4225 75.7626 71.8774 75.2175ZM112.642 73.9713C112.569 73.8541 112.612 73.7581 112.736 73.7581C112.86 73.7581 112.961 73.8541 112.961 73.9713C112.961 74.0885 112.919 74.1844 112.867 74.1844C112.816 74.1844 112.714 74.0885 112.642 73.9713ZM68.6298 68.7543C68.2233 67.806 68.1691 67.7633 67.5435 67.9007C66.9198 68.0377 66.898 68.021 67.1317 67.5844C67.3252 67.2228 67.5046 67.151 67.9631 67.2517C68.4051 67.3488 68.6875 67.2507 69.1206 66.8493C69.4356 66.5574 69.6955 66.146 69.6981 65.9353C69.7047 65.3973 70.4962 67.2015 70.6768 68.1661C70.814 68.8984 70.7969 68.9383 70.4638 68.6624C69.9694 68.2528 69.4934 68.6777 69.899 69.1665C70.0609 69.3615 70.0816 69.4953 69.95 69.4953C69.8281 69.4953 69.5774 69.5531 69.393 69.6239C69.1455 69.7189 68.9456 69.491 68.6298 68.7543ZM29.7677 69.1309C29.5294 68.7439 29.3939 67.007 29.566 66.5461C29.7486 66.0573 29.7623 66.0633 30.3053 66.8658C30.9561 67.8277 31.1644 68.4445 30.9497 68.7738C30.7441 69.0891 29.8991 69.3444 29.7677 69.1309ZM77.3665 68.0284C77.3665 67.9112 77.4624 67.756 77.5797 67.6835C77.6969 67.6111 77.7928 67.6477 77.7928 67.765C77.7928 67.8822 77.6969 68.0374 77.5797 68.1098C77.4624 68.1823 77.3665 68.1456 77.3665 68.0284ZM110.83 68.0033C110.83 67.886 110.872 67.7901 110.924 67.7901C110.976 67.7901 111.077 67.886 111.15 68.0033C111.222 68.1205 111.18 68.2164 111.056 68.2164C110.932 68.2164 110.83 68.1205 110.83 68.0033ZM62.4465 66.7718C62.4465 66.6807 62.8738 66.1292 63.3961 65.5463C64.1614 64.6921 64.3475 64.5714 64.3552 64.9243C64.3606 65.1652 64.0401 65.7167 63.6433 66.1499C62.9705 66.8845 62.4465 67.1568 62.4465 66.7718ZM67.063 66.2031C66.9854 66.0008 67.0011 65.6935 67.098 65.5203C67.2482 65.252 67.3107 65.2494 67.5211 65.5028C67.7094 65.7298 67.7011 65.8914 67.486 66.1856C67.2218 66.547 67.1954 66.548 67.063 66.2031ZM68.4932 65.3162C68.4138 65.0943 68.3099 64.8407 68.2625 64.7528C68.215 64.6649 68.2665 64.593 68.3771 64.593C68.5897 64.593 68.8892 65.4682 68.7308 65.6266C68.6796 65.6778 68.5727 65.5381 68.4932 65.3162ZM66.3333 64.7601C66.034 64.3994 66.3257 63.8859 66.7734 63.9858C67.0541 64.0485 67.0644 64.1372 66.8392 64.5541C66.6219 64.9564 66.528 64.9946 66.3333 64.7601ZM68.8533 64.0276C68.6087 63.7166 68.4441 63.4266 68.4876 63.3831C68.6608 63.2099 69.2602 63.5916 69.5789 64.078C70.0691 64.8261 69.4474 64.7829 68.8533 64.0276ZM65.3493 63.2025C65.1595 63.0127 65.0042 62.747 65.0042 62.6121C65.0042 62.4772 65.2147 62.5773 65.4719 62.8345C65.7292 63.0918 65.8845 63.3575 65.817 63.4249C65.7496 63.4924 65.5391 63.3923 65.3493 63.2025ZM67.4932 62.4291C67.2796 62.3085 66.8745 62.2677 66.593 62.3384C66.1804 62.4419 65.8958 62.2759 65.1232 61.481C64.0318 60.3581 63.8197 59.8847 64.1398 59.2864C64.2636 59.0553 64.3648 58.5777 64.3648 58.2253C64.3648 57.0683 65.1397 57.1151 65.7078 58.3063C66.0225 58.9663 66.0245 59.108 65.7287 59.8158C65.4103 60.5779 65.4165 60.6119 65.9845 61.2048C66.3948 61.633 66.7027 61.7784 67.0269 61.697C67.3009 61.6282 67.5965 61.7135 67.7577 61.9078C68.1416 62.3703 67.9741 62.7003 67.4932 62.4291ZM53.9661 57.3061C53.4017 56.7417 53.9603 56.0672 54.9921 56.0672C55.4495 56.0672 55.4498 56.0709 55.0574 56.7428C54.6 57.526 54.3269 57.667 53.9661 57.3061ZM63.5974 53.5578C63.4684 53.4726 63.2466 53.1823 63.1045 52.9125C62.8904 52.5059 62.9126 52.3085 63.2344 51.7574C63.7316 50.9061 64.0673 50.7999 64.2287 51.4428C64.3984 52.1191 63.9078 53.7628 63.5974 53.5578ZM69.6934 44.6804C69.6934 44.5136 69.4605 44.1003 69.176 43.7621C68.5004 42.9593 68.7397 42.4235 69.5397 42.9476C70.1148 43.3244 70.4153 44.0943 70.2032 44.6471C70.0423 45.0664 69.6934 45.0892 69.6934 44.6804ZM70.8812 43.1358C70.743 42.7757 71.0693 42.4353 71.5584 42.4293C71.8971 42.4252 71.9034 42.9017 71.569 43.236C71.2215 43.5835 71.0431 43.5575 70.8812 43.1358ZM72.8286 42.3578C72.4148 41.7262 71.8302 41.6395 70.492 42.0112C69.9478 42.1623 69.5729 42.164 69.3197 42.0165C69.1149 41.8972 69.0599 41.7967 69.1974 41.7931C69.335 41.7895 69.7365 41.5435 70.0897 41.2463C70.5453 40.8629 70.8792 40.7429 71.2392 40.8333C71.6207 40.929 72.0325 40.7458 72.8986 40.095C74.5848 38.828 74.7373 38.4285 74.0513 37.0747C73.3928 35.7753 73.5763 35.3569 74.552 35.9333C75.2621 36.3527 75.9312 37.5543 75.7368 38.0609C75.6668 38.2432 75.7712 38.8154 75.9686 39.3325C76.248 40.0641 76.2745 40.3717 76.0881 40.7201C75.8143 41.2316 75.0525 41.5735 74.1863 41.5735C73.7009 41.5735 73.5559 41.698 73.3972 42.2512L73.2029 42.9289L72.8286 42.3578ZM72.7014 34.5735C72.3113 34.0256 72.3005 33.9246 72.5887 33.5133C72.8717 33.1092 72.8706 32.9881 72.5791 32.4243C72.0996 31.4971 72.1669 31.441 72.9984 32.0752C73.4095 32.3887 74.2206 32.7863 74.801 32.9586C76.0002 33.3147 76.2897 33.5943 75.6644 33.7928C75.4283 33.8677 75.2351 34.0683 75.2351 34.2385C75.2351 34.4703 75.088 34.5103 74.6489 34.3979C73.5244 34.1101 73.2047 34.1804 73.2769 34.6996C73.3653 35.3358 73.2218 35.3043 72.7014 34.5735ZM71.3489 30.3302C71.1681 30.125 70.7322 29.3815 70.3803 28.6779C70.0285 27.9743 69.0982 26.6822 68.3131 25.8066C67.4359 24.8284 66.9902 24.1797 67.1569 24.1242C67.3062 24.0744 67.6262 24.2973 67.8681 24.6194C68.4545 25.4003 69.1766 26.0784 70.3161 26.9181C71.2605 27.6141 71.7276 28.2584 71.1182 28.0245C70.4155 27.7548 70.5908 28.3949 71.5003 29.4189C72.0304 30.0158 72.4642 30.549 72.4642 30.6037C72.4642 30.8629 71.6405 30.6609 71.3489 30.3302ZM181.359 127.813C180.276 127.408 179.973 127.011 180.23 126.335C180.349 126.022 180.578 125.765 180.739 125.765C180.899 125.765 181.602 126.134 182.301 126.586C182.999 127.037 183.853 127.509 184.199 127.635L184.827 127.863L184.054 127.88C183.629 127.889 183.006 127.936 182.669 127.985C182.602 127.995 182.525 128 182.441 128C182.438 128 182.434 128 182.43 128C182.096 127.999 181.662 127.927 181.359 127.813ZM320.044 72.3498V75.1014C319.605 74.5211 319.112 73.7817 318.937 73.4384C318.757 73.0867 318.21 72.4153 317.722 71.9464C316.692 70.9577 316.059 69.9188 316.491 69.9262C317.05 69.9359 318.49 70.7364 319.107 71.381C319.477 71.7673 319.783 72.0846 320.044 72.3498ZM320.044 67.0577V68.4234C319.869 68.1627 319.634 67.9445 319.286 67.6883C318.438 67.0647 318.412 67.0102 318.481 65.9784C318.52 65.3923 318.616 64.5615 318.694 64.1322C318.805 63.5278 318.713 63.0948 318.289 62.2139C317.987 61.5881 317.631 60.6271 317.496 60.0782C317.196 58.852 316.773 58.6467 316.024 59.3644C315.714 59.6611 315.401 59.9038 315.327 59.9038C314.988 59.9038 314.522 59.1817 314.634 58.8294C314.837 58.1896 313.588 55.9594 312.858 55.6567C312.458 55.4911 312.092 55.0895 311.848 54.547C311.423 53.6044 310.946 53.2438 310.469 53.5045C310.297 53.5991 309.605 53.7894 308.932 53.9273C307.699 54.1803 307.256 54.5537 307.425 55.1993C307.487 55.437 307.272 55.6666 306.754 55.9134C306.334 56.1135 305.882 56.5158 305.75 56.8075C305.617 57.0992 305.324 57.3963 305.099 57.4676C304.875 57.539 304.528 57.8652 304.329 58.1925C304.13 58.5199 303.537 59.1181 303.011 59.522C302.292 60.0747 302.067 60.384 302.103 60.7728C302.312 63.0457 301.992 64.9474 301.209 66.0767C300.446 67.1782 300.392 67.209 299.746 66.9147C299.391 66.7527 299.172 66.4364 299.081 65.9534C299.007 65.5575 298.578 64.442 298.127 63.4746C295.402 57.621 294.999 56.504 295.231 55.447C295.388 54.7327 295.011 53.6549 294.648 53.777C294.502 53.8259 294.38 54.0016 294.377 54.1673C294.359 55.1402 293.266 55.2896 292.412 54.4358L291.846 53.8701L292.333 53.6901C292.881 53.4875 292.83 52.9412 292.273 53.0414C292.075 53.0769 291.622 52.8611 291.267 52.5618C290.911 52.2625 290.538 52.0175 290.437 52.0175C290.337 52.0175 290.194 51.8246 290.119 51.5889C289.923 50.9699 288.792 50.4314 288.225 50.6869C287.715 50.9169 283.089 50.8689 282.314 50.6256C282.035 50.538 281.519 50.137 281.168 49.7345C280.532 49.0071 280.522 49.0042 279.569 49.2612C278.666 49.5047 278.535 49.4817 277.318 48.8675C276.267 48.3368 275.952 48.0506 275.627 47.3309C275.213 46.4126 274.293 45.7477 273.734 45.9623C273.558 46.0298 273.352 46.3656 273.277 46.7083C273.169 47.2006 273.279 47.5205 273.802 48.2311C274.166 48.7259 274.562 49.4975 274.683 49.9457C274.942 50.9084 275.454 51.1948 275.878 50.6145C276.134 50.2643 276.204 50.2521 276.377 50.5266C276.488 50.7018 276.547 50.9412 276.51 51.0584C276.391 51.4268 277.621 52.0331 278.195 51.8891C278.485 51.8163 279.105 51.3223 279.572 50.7914C280.308 49.9549 280.565 49.8984 280.44 50.6009C280.355 51.0737 280.727 51.6279 281.343 51.9462C282.294 52.4379 283.619 53.5332 283.619 53.8278C283.619 53.9636 283.37 54.3072 283.065 54.5914C282.761 54.8756 282.323 55.4769 282.091 55.9277C281.53 57.0229 279.902 58.625 279.351 58.625C278.714 58.625 277.766 59.1629 277.389 59.7386C277.21 60.0114 276.741 60.3961 276.345 60.5936C274.319 61.6049 271.88 62.6302 271.194 62.759C270.46 62.8967 270.4 62.8634 270.011 62.0966C269.786 61.6526 269.531 60.7617 269.444 60.117C269.331 59.2784 269.111 58.7454 268.672 58.2446C268.335 57.8595 268.059 57.452 268.059 57.3389C268.059 57.2259 267.675 56.7371 267.205 56.2527C266.619 55.6494 266.241 54.9947 266.004 54.1743C265.813 53.5156 265.426 52.6889 265.143 52.3372C263.186 49.9081 262.607 49.0515 262.316 48.1571C261.929 46.9716 261.602 46.7801 261.451 47.6509L261.344 48.269L260.623 47.3586C259.512 45.9558 259.372 46.5935 260.415 48.3061C260.909 49.1165 261.696 50.5468 262.164 51.4847C262.632 52.4225 263.239 53.4866 263.512 53.8494C263.794 54.2229 264.01 54.8067 264.01 55.1955C264.01 55.9987 264.249 56.5 265.191 57.6658C265.569 58.1347 265.943 58.8194 266.022 59.1872C266.122 59.659 266.534 60.1523 267.418 60.8617C268.762 61.9398 269.633 63.0651 269.85 64.003C269.931 64.3553 270.238 64.7169 270.629 64.9186C271.223 65.226 271.432 65.2176 273.311 64.8106C274.431 64.5678 275.618 64.2295 275.948 64.0587L276.549 63.7482L276.691 64.5918C276.821 65.3585 276.682 65.7278 275.164 68.638C273.533 71.7671 273.456 71.8705 271.834 73.1512C270.921 73.8721 269.966 74.7546 269.711 75.1124C269.456 75.4702 268.641 76.4365 267.899 77.2598C265.736 79.6624 265.441 81.7755 266.877 84.6077C267.241 85.3271 267.384 85.8717 267.297 86.216C267.225 86.5023 267.271 87.2254 267.399 87.823C267.601 88.7638 267.578 89.0154 267.229 89.6997C266.725 90.6872 266.324 91.0421 264.916 91.7481C264.3 92.0565 263.797 92.3999 263.797 92.5113C263.797 92.6226 263.365 93.1997 262.837 93.7936C262.31 94.3876 261.878 94.9701 261.878 95.0881C261.878 95.2061 262.076 95.6902 262.318 96.164C263.042 97.5843 262.555 98.6135 260.819 99.3329C260.086 99.6362 259.846 100.255 260.027 101.371C260.122 101.956 260.062 102.151 259.73 102.328C259.501 102.451 259.088 102.906 258.811 103.341C257.937 104.713 255.426 107.141 254.285 107.717C253.333 108.197 253.089 108.239 252.39 108.046C251.773 107.876 251.275 107.903 250.241 108.162C250.122 108.193 250.012 108.22 249.91 108.246C249.147 108.44 248.861 108.513 248.64 108.424C248.507 108.371 248.398 108.259 248.223 108.081C248.184 108.041 248.142 107.998 248.095 107.952C247.644 107.501 247.569 107.27 247.669 106.648C247.764 106.063 247.674 105.719 247.269 105.122C246.981 104.699 246.745 104.248 246.745 104.12C246.745 103.993 246.368 103.383 245.907 102.766C245.195 101.811 245.049 101.43 244.932 100.223C244.725 98.0924 244.044 95.7866 243.13 94.1152C242.681 93.2936 242.249 92.2268 242.171 91.7445C242.004 90.7184 242.421 89.1911 243.372 87.3407L244.005 86.1097L243.649 85.0391C243.45 84.4402 243.353 83.7315 243.429 83.4306C243.517 83.0783 243.422 82.6588 243.154 82.2152C242.928 81.8427 242.593 81.0103 242.409 80.3656C242.163 79.5044 241.821 78.9444 241.119 78.2554C239.768 76.9301 239.592 76.4083 240.011 74.9661C240.865 72.0303 239.943 70.318 237.69 70.6558C236.814 70.7873 236.78 70.7709 236.656 70.1513C236.561 69.676 236.303 69.3964 235.656 69.0663C234.816 68.6374 234.456 68.6358 233.424 69.0563C233.189 69.1517 232.23 69.4827 231.292 69.7917C229.882 70.2563 229.459 70.3162 228.845 70.1382C228.263 69.9695 227.773 70.0132 226.583 70.3396C225.354 70.677 224.908 70.7132 224.244 70.5297C222.857 70.147 220.476 68.0002 220.137 66.828C219.875 65.921 218.244 63.8071 217.689 63.6548C217.337 63.558 217.293 63.4831 217.509 63.3437C217.726 63.2035 217.689 63.1326 217.349 63.0439C216.811 62.9031 216.757 62.4628 217.278 62.4583C217.597 62.4555 217.604 62.425 217.331 62.2484C217.13 62.1183 217.108 62.0406 217.271 62.0385C217.44 62.0364 217.376 61.7736 217.085 61.2812C216.676 60.5883 216.668 60.4968 216.98 60.1517C217.934 59.098 218.143 56.8292 217.418 55.3998C217.072 54.7175 217.294 53.7749 218.033 52.7949C218.311 52.426 218.854 51.5282 219.239 50.7999C219.913 49.5259 221.416 47.7547 221.823 47.7547C222.273 47.7547 223.726 46.1932 223.726 45.7093C223.726 44.6167 224.379 43.5273 225.444 42.8439C226.016 42.4767 226.687 41.8488 226.934 41.4486C227.44 40.63 227.512 40.6033 228.101 41.0139C228.332 41.1751 228.907 41.3716 229.378 41.4506C230.096 41.5711 230.44 41.4844 231.509 40.9123C233.35 39.9281 234.487 39.6823 236.593 39.8136C237.982 39.9003 238.607 39.8449 239.28 39.5755C240.271 39.1788 241.128 39.4136 240.896 40.0183C240.827 40.2 240.869 40.4687 240.991 40.6154C241.144 40.8001 241.143 41.0646 240.987 41.4747C240.791 41.9899 240.835 42.1433 241.32 42.6498C241.627 42.9703 242.177 43.2921 242.542 43.3651C244.255 43.7077 244.742 43.9296 245.095 44.5284C245.355 44.9671 245.694 45.1923 246.256 45.2976C246.693 45.3796 247.327 45.5898 247.665 45.7648C248.24 46.0619 248.314 46.0511 248.794 45.6009C249.116 45.2983 249.262 44.9778 249.186 44.7397C249.12 44.5311 249.171 44.165 249.298 43.9261C249.628 43.3099 250.564 43.3704 252.026 44.1023C253.619 44.8997 256.64 45.4686 257.71 45.1729C258.225 45.0307 258.721 45.0288 259.171 45.1674C260.644 45.6201 261.398 45.2658 261.599 44.0268C261.666 43.6153 261.78 43.2786 261.853 43.2786C261.991 43.2786 262.063 42.6599 262.083 41.307C262.089 40.8674 262.193 40.5078 262.314 40.5078C262.457 40.5078 262.45 40.3534 262.293 40.0601C262.031 39.5703 261.499 39.5815 260.227 40.1035C259.624 40.3511 259.456 40.3406 258.915 40.0213C258.215 39.6073 257.495 39.5452 257.288 39.8808C257.134 40.1303 256.044 39.9554 255.453 39.5863C255.028 39.3211 254.631 38.5317 254.631 37.9521C254.631 37.7298 254.416 37.3959 254.152 37.2101C253.744 36.9226 253.72 36.8412 253.992 36.6631C254.168 36.548 254.529 36.5051 254.796 36.5677C255.135 36.6476 255.448 36.5138 255.842 36.1196C256.213 35.7486 256.664 35.5439 257.169 35.517C257.591 35.4947 258.201 35.3015 258.525 35.0877C259.229 34.6236 260.828 34.7525 262.069 35.3735C263.742 36.2109 265.228 36.1617 265.826 35.249C266.137 34.7742 266.139 34.6744 265.843 34.2238C265.664 33.9493 264.799 33.3167 263.923 32.8182L262.33 31.9117L262.628 31.3345C262.793 31.017 262.873 30.7035 262.808 30.6378C262.742 30.5721 262.767 30.3921 262.863 30.2378C262.96 30.0834 263.057 29.8333 263.08 29.682C263.129 29.3591 262.785 29.4482 261.09 30.1979C260.106 30.633 259.96 30.7664 260.178 31.0294C260.321 31.2016 260.642 31.3468 260.892 31.352C261.242 31.3593 261.159 31.4598 260.529 31.7919C259.765 32.1951 259.68 32.2004 259.183 31.8748C258.758 31.5964 258.703 31.4669 258.904 31.2243C259.104 30.9835 259.074 30.8908 258.758 30.7722C258.54 30.6901 258.258 30.4859 258.133 30.3183C257.522 29.5046 255.585 31.6453 255.022 33.7563C254.758 34.7472 254.766 34.7987 255.264 35.1742L255.781 35.5638L254.833 35.7593C254.312 35.8668 253.609 35.8793 253.272 35.7872C252.649 35.6171 251.86 35.8734 251.86 36.2457C251.86 36.3551 251.715 36.389 251.538 36.3209C251.361 36.2529 251.079 36.3105 250.912 36.4489C250.654 36.6635 250.683 36.8394 251.112 37.6455C251.576 38.5188 251.59 38.6382 251.301 39.2188C250.938 39.9462 250.6 39.8921 250.088 39.0243C249.73 38.4193 249.733 38.4054 250.206 38.3383C250.802 38.2536 250.841 37.8737 250.262 37.7812C248.941 37.57 248.237 36.8741 248.237 35.7805C248.237 34.927 247.446 33.9862 246.487 33.6988C245.988 33.5494 245.446 33.2358 245.282 33.0018C245.118 32.7679 244.639 32.432 244.216 32.2556C243.794 32.0791 243.321 31.7532 243.166 31.5313C242.943 31.2129 242.796 31.1746 242.47 31.3494C242.242 31.4711 242.056 31.7079 242.056 31.8756C242.056 32.429 244.773 34.9326 246.101 35.6029C247.509 36.3137 247.728 36.5675 246.75 36.3526C245.878 36.1611 245.641 36.3528 245.939 37.0076C246.148 37.4674 246.114 37.6073 245.693 38.0124L245.203 38.4829L245.314 37.848C245.491 36.8401 244.162 35.3923 243.06 35.3923C242.656 35.3923 241.104 33.8869 240.698 33.1006C240.263 32.2605 239.78 32.0982 239.095 32.5626C238.064 33.2621 237.29 33.4985 236.481 33.3618C235.406 33.1802 234.73 33.5551 234.901 34.2376C234.99 34.5939 234.941 34.7529 234.74 34.7529C234.58 34.7529 234.17 34.9926 233.83 35.2855C233.489 35.5784 233.137 35.8182 233.047 35.8184C232.784 35.8187 232.04 37.1653 232.039 37.6437C232.038 38.1013 231.205 39.0028 230.4 39.416C230.144 39.5476 229.548 39.6552 229.076 39.6552C228.426 39.6552 228.159 39.7623 227.981 40.0955C227.747 40.5319 227.74 40.5309 227.194 39.9846C226.682 39.4722 226.387 39.3439 225.352 39.1839C224.809 39.0999 224.717 37.8698 225.124 36.1174C225.297 35.3683 225.383 34.5288 225.313 34.2519C225.111 33.4472 225.743 32.9727 226.801 33.1351C229.243 33.5103 230.672 33.531 231.007 33.1962C231.467 32.7361 231.674 31.2186 231.394 30.3678C231.21 29.8129 230.959 29.586 230.207 29.299C229.102 28.8768 229.078 28.4685 230.159 28.4576C230.571 28.4535 231.165 28.2817 231.479 28.0758C231.793 27.8699 232.141 27.7573 232.251 27.8256C232.552 28.0118 233.693 27.3542 234.072 26.7759C234.255 26.4964 234.616 26.214 234.874 26.1483C235.131 26.0827 235.821 25.5822 236.408 25.0362C237.239 24.2622 237.675 24.0195 238.387 23.9344C239.27 23.8291 240.158 23.1031 239.741 22.8274C239.482 22.6561 239.265 21.624 239.41 21.248C239.478 21.0699 239.78 20.7631 240.08 20.5662L240.626 20.2083L240.486 21.0853C240.365 21.8465 240.396 21.9541 240.721 21.8996C240.928 21.8651 241.314 21.7175 241.579 21.5717C241.984 21.3496 242.083 21.3604 242.189 21.6381C242.372 22.1141 241.864 22.6738 241.514 22.3829C241.32 22.2222 241.197 22.228 241.089 22.403C240.978 22.5835 240.89 22.5737 240.762 22.3662C240.666 22.2106 240.538 22.1321 240.478 22.1919C240.419 22.2517 240.589 22.5757 240.857 22.9119C241.309 23.4786 241.395 23.5055 242.039 23.281C242.591 23.0887 242.855 23.1018 243.325 23.3447C243.855 23.6188 244.034 23.6057 245.053 23.2186C245.946 22.8794 246.298 22.8359 246.693 23.0159C247.056 23.1815 247.325 23.1781 247.663 23.0036C248.622 22.5082 248.887 22.1347 248.768 21.449C248.592 20.4327 248.915 20.0998 249.766 20.421C250.345 20.6396 250.514 20.6309 250.776 20.3692C251.053 20.0921 251.029 19.9897 250.575 19.5063C250.138 19.0412 250.108 18.9256 250.374 18.7459C250.547 18.6293 251.194 18.5876 251.813 18.6531C252.945 18.773 254.356 18.3308 254.11 17.933C253.895 17.5847 252.595 17.4841 251.494 17.7304C250.518 17.9489 250.262 17.9313 249.514 17.5938C248.351 17.0698 248.215 16.4566 249.012 15.3457C250.038 13.9157 250.225 13.46 249.933 13.1078C249.5 12.5863 249.075 12.7564 248.086 13.8462C247.564 14.4221 246.852 15.0111 246.504 15.1551C246.157 15.2991 245.727 15.6984 245.549 16.0426C245.259 16.603 245.259 16.7204 245.553 17.1687C245.734 17.4439 246.075 17.7308 246.313 17.8062C246.967 18.0137 246.838 18.4032 245.902 19.0431C245.615 19.2399 245.231 19.7967 245.05 20.2804C244.823 20.8866 244.477 21.3002 243.939 21.6112C243.179 22.0496 243.145 22.0513 242.725 21.6715C242.488 21.4566 242.236 21.0181 242.165 20.6972C242.095 20.3763 241.774 19.7994 241.454 19.4151L240.87 18.7166L240.131 19.1674C239.724 19.4153 239.2 19.6164 238.965 19.6142C238.289 19.6079 237.506 18.8773 237.453 18.2036C237.427 17.8688 237.34 17.4307 237.26 17.2299C237.069 16.7525 238.024 15.8572 239.016 15.5833C240.011 15.3085 242.03 13.8935 242.374 13.2295C242.527 12.9342 243.046 12.3399 243.526 11.9089C244.007 11.4778 244.4 11.0302 244.4 10.9141C244.4 10.798 244.856 10.5406 245.413 10.3422C245.97 10.1438 246.905 9.78373 247.491 9.54212C248.211 9.2455 249.111 9.08867 250.262 9.05922C252.274 9.00776 253.589 9.27442 254.675 9.95367C255.22 10.2945 255.65 10.4108 256.061 10.3285C256.797 10.1813 260.72 11.3972 260.883 11.8232C261.047 12.2513 259.922 12.6554 258.954 12.516C258.511 12.4521 257.594 12.2814 256.917 12.1365C256.005 11.9415 255.623 11.9354 255.446 12.1128C255.268 12.2902 255.357 12.4212 255.787 12.6173C256.107 12.763 256.507 13.1503 256.677 13.478C257.108 14.3124 258.49 14.9926 259.203 14.7215C259.888 14.4611 259.883 14.3789 259.161 13.9868C258.492 13.6241 258.801 13.5457 259.64 13.8649C260.311 14.1198 261.07 13.8027 260.893 13.3418C260.81 13.1259 261.043 12.97 261.701 12.8016C263.107 12.4413 263.21 12.3898 263.093 12.1046L263.055 12.0109C262.827 11.4547 262.732 11.2233 262.805 11.14C262.858 11.0806 262.996 11.0965 263.232 11.1238L263.288 11.1303C263.63 11.1694 263.88 11.3159 263.852 11.4606C263.824 11.6037 264.002 11.8285 264.249 11.9604C264.619 12.1584 264.91 12.0878 265.928 11.5546C267.42 10.7726 268.581 10.5177 269.014 10.8771C269.255 11.0775 269.656 11.0789 270.815 10.8834C271.635 10.7452 272.398 10.6896 272.512 10.7599C272.626 10.8303 272.782 10.7861 272.859 10.6618C273.027 10.3901 272.562 9.77341 272.308 9.93057C272.001 10.1203 270.993 9.78042 271.212 9.56113C271.433 9.34032 277.365 10.7225 277.72 11.0775C277.959 11.3168 278.717 10.9976 278.717 10.6574C278.717 10.5428 278.294 10.2435 277.776 9.99231C276.173 9.21346 276.07 7.96607 277.578 7.58769C278.453 7.36808 278.831 7.62141 280.042 9.23709L280.207 9.45815C281.14 10.7022 281.428 11.0859 281.37 11.408C281.345 11.5516 281.25 11.683 281.114 11.873C281.096 11.8973 281.078 11.9225 281.059 11.9489C280.679 12.4827 280.656 12.6077 280.92 12.7089C281.42 12.9006 282.489 12.2296 282.64 11.6299C282.816 10.9272 282.487 10.3284 281.701 9.9217C281.082 9.602 280.635 9.0162 280.635 8.52657C280.635 8.35966 280.867 8.31804 281.328 8.40221C282.018 8.52842 282.59 8.27784 284.155 7.16268C284.513 6.90765 285.117 6.7396 285.727 6.72577C286.965 6.6977 287.365 6.49 287.009 6.061C286.869 5.89276 286.8 5.71073 286.854 5.65649C287.126 5.38428 290.635 4.89377 291.443 5.01496C292.221 5.13157 292.462 5.06849 293.101 4.58052C293.513 4.26655 293.85 3.92514 293.85 3.82182C293.85 3.56129 291.987 3.58456 291.825 3.84712C291.602 4.2084 291.312 4.08268 291.394 3.6598C291.462 3.30275 291.282 3.24464 289.729 3.12377C285.49 2.79369 285.146 2.71624 285.654 2.20766C286.101 1.76051 287.198 1.76918 288.116 2.22712C288.492 2.41474 289.115 2.56826 289.5 2.56826C289.886 2.56826 290.26 2.66417 290.333 2.7814C290.405 2.89863 290.779 2.99454 291.162 2.99454C292.226 2.99454 294.281 3.45372 294.152 3.6624C294.089 3.76399 294.288 3.84712 294.594 3.84712C294.9 3.84712 295.457 4.0123 295.832 4.21418C296.336 4.48567 297.041 4.58334 298.539 4.58934C300.149 4.59578 300.684 4.67847 301.15 4.9928C301.472 5.21024 301.735 5.44905 301.733 5.52349C301.731 5.59793 301.239 5.92946 300.64 6.26021C299.192 7.05902 299.498 7.40715 301.249 6.95334C302.384 6.65941 302.644 6.65752 303.584 6.93643C304.354 7.16526 304.835 7.19464 305.358 7.04476C305.879 6.89515 306.415 6.92727 307.323 7.1627C308.271 7.40836 308.763 7.43335 309.364 7.26647C310.735 6.88565 312.422 6.99321 313.4 7.52385C313.887 7.78762 314.784 8.27566 315.394 8.60839C316.475 9.19819 316.522 9.20471 317.272 8.86849C317.9 8.58707 318.25 8.56353 319.176 8.74053C319.542 8.81046 319.815 8.8492 320.044 8.85368V62.1934C319.956 62.1599 319.881 62.1418 319.822 62.1418C319.625 62.1418 319.549 62.3786 319.583 62.8878C319.61 63.2981 319.526 64.0981 319.397 64.6655C319.186 65.59 319.208 65.7594 319.605 66.296C319.763 66.5097 319.928 66.7998 320.044 67.0577ZM200.6 0L199.558 0.129258C198.985 0.200349 197.211 0.341024 195.615 0.441869C192.538 0.636288 187.852 1.07025 187.753 1.17002C187.613 1.30963 190.92 1.5059 191.397 1.38629C192.087 1.21323 192.323 1.62421 191.72 1.94707C191.405 2.1156 190.635 2.16015 189.409 2.08072C187.428 1.95237 186.815 2.09583 187.372 2.55792C187.894 2.99129 187.522 3.24805 186.563 3.11529C185.829 3.01359 185.767 3.03022 186.195 3.21332C187.097 3.59875 186.366 3.95509 184.701 3.94161C183.37 3.93083 183.263 3.95926 183.699 4.20868C184.016 4.3896 184.6 4.44986 185.36 4.37996C186.173 4.30518 186.695 4.36801 187.065 4.58492C187.358 4.75696 187.598 4.8999 187.598 4.90257C187.598 4.90524 188.163 4.62089 188.853 4.27069C189.544 3.92049 190.241 3.63396 190.403 3.63396C190.564 3.63396 191.236 3.34621 191.895 2.99453C192.554 2.64284 193.307 2.3551 193.57 2.3551C194.647 2.3551 197.268 1.60021 198.88 0.825888L200.6 0ZM178.901 125.733C178.697 125.619 178.357 125.581 178.146 125.648C177.88 125.733 177.674 125.607 177.477 125.238C177.32 124.946 177.04 124.654 176.853 124.59C176.426 124.443 175.529 122.991 175.03 121.636C174.778 120.953 174.439 120.48 174.037 120.251C173.323 119.845 173.272 119.661 173.825 119.485C174.457 119.285 174.574 118.17 174.042 117.423C173.788 117.067 173.655 116.648 173.731 116.448C173.822 116.213 173.572 115.8 172.969 115.185C172.207 114.409 172.066 114.127 172.032 113.31C172.01 112.78 171.881 112.214 171.746 112.05C171.575 111.845 171.54 111.107 171.633 109.647C171.732 108.066 171.674 107.09 171.399 105.73C170.991 103.709 170.782 99.9453 170.888 96.5112C170.911 95.7785 170.816 94.7726 170.677 94.2758C170.339 93.0661 168.785 91.5391 166.864 90.5297C165.49 89.8078 165.297 89.6227 164.76 88.5138C164.435 87.8422 163.813 86.8385 163.378 86.2833C162.944 85.7282 162.472 84.9129 162.329 84.4716C161.875 83.071 161.076 81.6637 160.531 81.3066C160.241 81.1166 159.91 80.6225 159.796 80.2086C159.611 79.539 159.66 79.352 160.238 78.5108C160.866 77.5986 160.873 77.5614 160.449 77.4505C159.407 77.178 159.845 75.785 161.716 73.4245C162.959 71.8556 163.324 70.6604 162.979 69.2797C162.848 68.7535 162.73 68.2031 162.718 68.0565C162.706 67.91 162.612 67.7901 162.51 67.7901C162.409 67.7901 162.428 67.5979 162.554 67.3629C162.748 67.0009 162.699 66.8975 162.233 66.6853C161.554 66.3761 160.53 66.6818 160.526 67.1947C160.521 67.8096 160.251 67.8549 159.359 67.3902C158.881 67.1412 158.385 66.9375 158.257 66.9375C158.128 66.9375 157.627 66.597 157.144 66.1808C156.661 65.7647 156.146 65.3293 155.999 65.2133C155.853 65.0973 155.733 64.7813 155.733 64.511C155.733 64.2408 155.545 63.8493 155.315 63.6411C155.085 63.4329 154.786 62.9296 154.652 62.5227C154.476 61.9879 154.343 61.8474 154.175 62.0156C153.824 62.3668 153.304 62.3001 152.042 61.742C151.383 61.4503 150.695 60.952 150.421 60.5665C150.159 60.1985 149.658 59.7493 149.308 59.5684C148.731 59.2698 148.586 59.2721 147.745 59.5933L146.819 59.9472L143.976 58.5695C142.227 57.7221 140.869 56.9137 140.449 56.4691C139.797 55.7798 139.776 55.7049 139.993 54.8505C140.192 54.0677 140.158 53.8255 139.726 52.9327C139.454 52.3708 138.859 51.5076 138.405 51.0145C137.951 50.5215 137.63 50.0346 137.694 49.9325C137.757 49.8305 137.436 49.1425 136.982 48.4037C136.466 47.5645 136.102 46.6655 136.011 46.0075C135.895 45.1642 135.76 44.9061 135.332 44.7112C134.879 44.5045 134.752 44.5309 134.492 44.8856C134.126 45.3853 134.23 45.9128 135.039 47.6605C135.368 48.3707 135.707 49.4235 135.794 50C135.88 50.5766 136.136 51.4103 136.361 51.8526C136.896 52.9004 136.551 52.8819 135.708 51.8176C135.211 51.1899 135.076 50.8457 135.175 50.452C135.281 50.0317 135.177 49.8293 134.66 49.4472C133.876 48.8678 133.711 48.494 133.998 47.9561C134.166 47.6424 134.089 47.2984 133.663 46.4571C133.23 45.6027 133.14 45.1889 133.247 44.5544C133.422 43.5173 132.957 42.5785 132.089 42.2192C131.588 42.0118 131.416 41.7797 131.314 41.1768C131.241 40.7502 131.103 40.0902 131.006 39.7102C130.906 39.3148 130.913 38.968 131.023 38.8997C131.13 38.8341 131.06 38.5417 130.869 38.2499C130.587 37.8202 130.568 37.6168 130.768 37.1793C130.903 36.8823 130.954 36.5427 130.881 36.4248C130.808 36.3068 130.99 35.9543 131.285 35.6414C131.58 35.3286 131.973 34.7046 132.158 34.2549C132.342 33.8051 132.913 32.9714 133.424 32.4021C133.936 31.8329 134.585 30.8357 134.866 30.1862C135.257 29.2847 135.486 29.0044 135.834 29.0017C136.084 28.9997 136.276 29.1179 136.26 29.2644C136.192 29.8751 136.675 29.687 137.217 28.8914C137.537 28.4225 137.709 28.0069 137.6 27.9678C137.492 27.9288 137.403 27.7523 137.403 27.5758C137.403 27.3993 136.961 26.826 136.422 26.3019C135.527 25.4325 135.47 25.3173 135.767 24.9886C136.008 24.7223 136.037 24.5269 135.876 24.2398C135.594 23.7351 136.039 22.605 136.523 22.6005C136.722 22.5985 136.779 22.5306 136.656 22.4406C136.382 22.2386 136.257 21.7799 136.296 21.1117C136.357 20.0445 136.124 19.598 135.33 19.2665C134.902 19.0877 134.249 18.7103 133.879 18.428C133.509 18.1456 133.039 17.9146 132.835 17.9146C132.631 17.9146 131.705 17.7206 130.776 17.4834C129.283 17.1022 129.02 17.0871 128.503 17.3533C127.431 17.905 126.295 18.1299 125.832 17.8821C125.485 17.6962 125.106 17.811 123.784 18.5023C122.892 18.9688 121.827 19.4229 121.417 19.5114C121.006 19.5998 120.221 19.8987 119.672 20.1756C118.113 20.9608 115.881 21.7524 115.264 21.7387C114.865 21.7298 115.134 21.555 116.195 21.1346C117.997 20.4199 119.848 19.4893 120.02 19.2122C120.231 18.8709 119.773 18.7484 119.223 18.999C118.818 19.1836 118.568 19.1663 118.101 18.9214L117.5 18.6065L118.154 18.2684C118.893 17.8862 119.125 17.4538 118.955 16.7772C118.791 16.122 119.698 15.6405 121.651 15.3459C122.701 15.1876 123.499 14.9241 124.036 14.5584C124.983 13.9136 124.82 13.4262 123.799 13.8492C123.315 14.0495 122.963 14.0517 122.247 13.8589C121.377 13.6246 121.346 13.5911 121.735 13.3065C122.387 12.8303 123.734 12.5438 124.619 12.6933C125.179 12.788 125.637 12.7217 126.108 12.4783L126.788 12.1265L126.341 11.6498C126.094 11.3876 125.893 11.1167 125.893 11.0478C125.893 10.85 127.176 10.4545 127.817 10.4545C128.138 10.4545 129.016 10.2227 129.768 9.93939C130.521 9.65606 132.258 9.26925 133.628 9.0798C135.849 8.77255 136.32 8.7688 137.986 9.04505C139.013 9.21537 140.429 9.41851 141.133 9.49647C141.836 9.57443 143.081 9.82189 143.899 10.0464C145.799 10.5678 147.037 10.5614 149.16 10.0193C150.098 9.77998 151.045 9.64142 151.266 9.71144C151.487 9.78145 151.862 9.7346 152.099 9.60731C152.427 9.43194 152.681 9.45315 153.149 9.69492C153.571 9.91337 154.093 9.97572 154.803 9.89267C155.552 9.80505 156.207 9.89579 157.165 10.2195C157.894 10.466 158.703 10.6677 158.964 10.6677C159.426 10.6677 159.427 10.6755 159.024 10.9722C158.629 11.2631 158.628 11.2834 158.999 11.4272C159.212 11.51 159.954 11.5185 160.647 11.4461C161.898 11.3153 161.909 11.319 162.258 11.9937L162.609 12.673L163.065 12.1012C163.327 11.7725 163.95 11.4003 164.529 11.2259C165.405 10.9624 165.671 10.9633 166.55 11.2326C167.171 11.4227 167.913 11.4919 168.47 11.4116C169.178 11.3092 169.507 11.373 169.97 11.7021C170.553 12.1177 170.569 12.1179 171.087 11.7167C171.376 11.4929 171.97 11.21 172.408 11.088C173.455 10.7961 173.811 10.1742 173.182 9.73348C172.737 9.42184 172.756 9.39806 173.926 8.82448C174.798 8.39669 175.191 8.29955 175.361 8.46956C175.531 8.63957 175.529 8.82658 175.354 9.15281C175.057 9.70884 175.427 10.5493 175.891 10.3712C176.058 10.3072 176.335 10.3086 176.506 10.3744C176.776 10.4777 176.771 10.5653 176.475 11.0181C175.655 12.2688 177.492 11.9144 178.736 10.5819C179.242 10.0401 180.025 9.87583 180.76 10.1576C181.234 10.3396 181.19 10.4886 180.404 11.3498C179.468 12.3761 178.989 12.586 177.583 12.586C176.904 12.586 176.102 12.7332 175.728 12.9264C175.211 13.194 174.959 13.2162 174.551 13.0303C173.79 12.6837 173.525 12.9722 174.071 13.5531L174.536 14.0489L173.607 14.3127C173.096 14.4577 172.246 14.5904 171.719 14.6076C170.954 14.6324 170.759 14.7155 170.758 15.0179C170.757 15.2767 170.385 15.549 169.586 15.8757C166.996 16.9341 164.8 18.8424 165.595 19.3427C165.744 19.4364 165.981 19.7743 166.121 20.0934C166.282 20.4609 166.593 20.7172 166.969 20.7925C167.295 20.8578 168.138 21.1947 168.841 21.541C169.545 21.8874 170.408 22.2335 170.759 22.3102C171.728 22.5212 171.736 22.5434 171.285 23.6874C170.899 24.6662 170.892 24.8059 171.191 25.384C171.37 25.7305 171.634 26.0106 171.777 26.0065C172.476 25.9863 173.131 25.3417 173.538 24.274C173.925 23.2564 174.102 23.0666 175.215 22.472C176.858 21.5946 177.541 20.7304 177.359 19.76C177.241 19.1279 177.302 18.9795 177.843 18.5943C178.184 18.3515 178.636 17.7704 178.846 17.303C179.317 16.2582 180.075 15.8961 181.351 16.1048C182.483 16.2899 183.822 17.0086 183.984 17.5182C184.05 17.7273 183.995 18.103 183.861 18.3529C183.659 18.7315 183.697 18.8913 184.091 19.3102L184.563 19.8131L185.334 19.4132C185.759 19.1933 186.439 18.7642 186.846 18.4598L187.585 17.9063L187.759 18.3761C187.855 18.6345 187.882 18.979 187.819 19.1417C187.757 19.3043 187.805 19.6236 187.927 19.8511C188.064 20.1071 188.075 20.3966 187.955 20.6105C187.82 20.8516 187.91 21.2179 188.253 21.8218C188.745 22.687 188.745 22.6877 188.313 22.99C187.746 23.3878 188.11 23.8096 188.733 23.476C189.352 23.1447 190.061 23.1878 190.498 23.5833C191.144 24.168 190.607 24.8674 188.892 25.6741C187.027 26.5516 186.196 26.7254 183.761 26.7469C181.964 26.7628 181.726 26.8201 179.978 27.6579C178.952 28.1496 178.113 28.6363 178.113 28.7395C178.113 29.1793 178.436 29.141 179.676 28.5544C180.407 28.2087 181.349 27.9326 181.797 27.9325C182.563 27.9323 182.591 27.956 182.352 28.4031C182.213 28.662 181.914 29.024 181.688 29.2076C181.331 29.4963 181.31 29.6182 181.534 30.1079C181.868 30.8424 182.742 31.1959 183.788 31.0195L184.614 30.8801L183.979 31.3183C183.629 31.5594 183.054 31.8191 182.7 31.8956C182.346 31.972 181.618 32.2552 181.083 32.5248C180.54 32.7985 179.994 32.9433 179.847 32.8527C179.51 32.6442 179.866 32.3315 180.962 31.8736C181.937 31.4663 181.781 31.0337 180.73 31.2307C180.321 31.3075 178.995 31.8072 177.782 32.3413C175.89 33.1748 175.56 33.3949 175.449 33.8966C175.314 34.5131 174.852 34.8047 173.228 35.2989C172.709 35.4566 172.038 35.8376 171.736 36.1456C171.433 36.4536 170.854 36.9147 170.449 37.1704C170.043 37.426 169.655 37.8738 169.586 38.1656C169.473 38.6464 169.446 38.6578 169.304 38.2874C169.037 37.5934 168.635 38.2719 168.612 39.4553C168.589 40.6678 167.974 41.4949 166.626 42.1282C165.244 42.7775 163.277 44.3119 162.879 45.0518C162.527 45.705 162.512 45.9595 162.729 47.6384C162.931 49.2047 162.919 49.5977 162.653 50.1123C162.455 50.4965 162.223 50.6802 162.03 50.6061C161.573 50.4306 161.013 48.5487 161.17 47.713C161.279 47.1325 161.207 46.9126 160.774 46.5062C160.425 46.1787 160.104 46.0542 159.83 46.141C159.602 46.2135 158.956 46.076 158.395 45.8353C157.535 45.4666 157.26 45.4357 156.646 45.6384C156.23 45.7758 155.816 46.1017 155.68 46.399C155.479 46.8413 155.345 46.8981 154.789 46.7784C154.429 46.7009 153.875 46.5053 153.559 46.3435C152.779 45.9452 152.342 45.973 151.467 46.4765C151.058 46.7114 150.225 47.1609 149.614 47.4755C148.913 47.837 148.431 48.2484 148.305 48.5937C148.195 48.8942 147.802 50.0655 147.431 51.1967L146.758 53.2533L147.102 54.5808C147.734 57.0199 148.613 57.7501 150.446 57.3571C151.827 57.0609 152.656 56.4607 152.961 55.5368C153.155 54.95 153.364 54.7561 153.989 54.5824C154.93 54.3211 155.323 54.3114 155.684 54.5408C155.983 54.7301 155.878 55.0415 154.542 57.9328C153.626 59.9167 153.692 60.0942 155.262 59.8677C156.692 59.6614 158 59.8197 158.152 60.2177C158.212 60.3729 158.115 61.4198 157.937 62.5442C157.619 64.5557 157.621 64.6007 158.079 65.3419C158.335 65.7563 158.815 66.2353 159.146 66.4063C159.674 66.6793 159.84 66.6787 160.504 66.4011C161.56 65.96 162.133 66.0067 162.866 66.5933C163.453 67.0624 163.536 67.0756 163.996 66.7737C164.27 66.5946 164.643 66.1505 164.825 65.7869C165.237 64.9671 165.93 64.3908 166.513 64.3846C166.756 64.382 167.18 64.14 167.456 63.847C168.015 63.2518 168.999 63.0579 168.518 63.6377C168.114 64.1243 167.883 65.6894 168.144 66.1758C168.36 66.5807 168.378 66.5784 168.772 66.0914C169.053 65.7446 169.11 65.5222 168.956 65.3688C168.59 65.0027 168.7 64.6984 169.382 64.1948C170.089 63.6719 170.636 63.7256 171.246 64.3777C171.694 64.8559 174.083 65.5022 174.768 65.3303C175.81 65.0686 178.628 66.7818 179.687 68.3212C180.191 69.0542 181.801 69.7919 182.509 69.6141C183.966 69.2486 185.963 70.7079 186.43 72.4793C186.569 73.0068 186.779 73.4982 186.896 73.5712C187.207 73.7649 186.741 74.5304 185.723 75.4991C185.072 76.118 184.917 76.3844 185.1 76.5674C185.283 76.7505 185.584 76.59 186.306 75.9241C187.357 74.9557 187.707 74.8574 188.234 75.3837C188.554 75.7039 188.544 75.7691 188.105 76.2363C187.844 76.5145 187.479 76.7482 187.294 76.7557C187.1 76.7635 187.178 76.857 187.481 76.978C187.898 77.1443 188.115 77.0974 188.547 76.7483C189.672 75.8391 189.937 75.7954 190.937 76.3539C191.587 76.7169 191.847 76.9933 191.814 77.2857C191.723 78.0984 191.915 78.2784 192.478 77.9092C192.926 77.6158 193.233 77.6018 194.732 77.807C196.326 78.0252 196.534 78.1122 197.299 78.877C197.867 79.4447 198.506 79.8181 199.308 80.0513C200.385 80.3644 200.502 80.4599 200.697 81.1854C200.98 82.2373 200.649 83.4045 199.751 84.5133C199.368 84.9869 198.898 85.6822 198.707 86.0584C198.516 86.4346 198.11 86.9923 197.804 87.2977C197.287 87.8146 197.259 87.9439 197.387 89.1714C197.639 91.5694 196.466 96.0433 195.335 97C194.967 97.3115 194.651 97.3847 194.067 97.2942C193.587 97.2199 193.232 97.2678 193.138 97.4197C193.054 97.5549 192.589 97.8401 192.104 98.0534C191.618 98.2668 190.896 98.7194 190.498 99.0592C189.81 99.6472 189.786 99.7123 190.018 100.414C190.285 101.224 190.105 102.182 189.533 102.999C189.348 103.264 189.196 103.713 189.196 103.999C189.196 104.284 188.974 104.814 188.702 105.177C188.43 105.539 187.906 106.37 187.537 107.022C186.629 108.626 186.083 108.904 184.767 108.433C183.624 108.023 183.015 107.974 183.015 108.292C183.015 108.412 183.243 108.613 183.521 108.74C183.8 108.867 184.233 109.383 184.485 109.887C184.86 110.638 184.9 110.899 184.704 111.328C184.402 111.992 183.244 112.55 182.168 112.55C181.215 112.55 180.979 112.783 181.308 113.398C181.511 113.778 181.374 114.389 180.981 114.857C180.949 114.895 180.616 114.767 180.24 114.573C179.342 114.108 179.024 114.404 179.478 115.281C179.662 115.638 180.013 115.994 180.258 116.071C180.677 116.205 180.682 116.234 180.341 116.611C180.142 116.831 180.039 117.164 180.111 117.353C180.189 117.556 180.015 117.994 179.686 118.426C179.15 119.129 179.142 119.177 179.486 119.701C179.682 120.001 179.988 120.302 180.167 120.37C180.808 120.617 180.915 121.458 180.425 122.418C179.935 123.379 179.86 124.343 180.239 124.8C180.584 125.216 179.423 126.026 178.901 125.733ZM163.193 33.419C163.762 32.2289 164.822 31.3426 165.676 31.3426C166.29 31.3426 166.297 31.4423 165.735 32.1573L165.292 32.7196L165.746 33.087C166.112 33.383 166.3 33.4086 166.717 33.2187C167.002 33.0891 167.293 32.7976 167.365 32.571C167.463 32.2627 167.622 32.1907 167.997 32.2849C168.345 32.3721 168.562 32.2975 168.705 32.042C169.138 31.2682 168.036 30.2784 167.225 30.7127C166.644 31.0233 165.886 30.4052 166.048 29.7533C166.108 29.5117 165.984 29.0912 165.771 28.8091C165.33 28.2276 164.66 28.1664 163.193 28.5736C162.665 28.7201 162.064 28.8333 161.856 28.8253C161.648 28.8173 161.534 28.9008 161.602 29.0109C161.67 29.1211 161.648 29.2133 161.554 29.2159C161.459 29.2185 161.142 29.404 160.851 29.6281L160.32 30.0357L160.916 30.2621C161.382 30.4391 161.656 30.4139 162.173 30.1464C162.781 29.8321 162.894 29.8323 163.557 30.1486C163.957 30.3392 164.502 30.437 164.779 30.3677C165.053 30.2987 165.337 30.3375 165.409 30.4539C165.482 30.5728 165.182 30.7258 164.723 30.8033C163.475 31.0141 162.827 31.5335 161.923 33.0478C161.167 34.3125 161.123 34.4651 161.425 34.7994C161.72 35.1275 161.802 35.1326 162.207 34.8491C162.456 34.675 162.9 34.0314 163.193 33.419ZM167.065 34.7346C167.824 34.3475 167.897 34.2503 167.63 33.9829C167.362 33.7155 167.193 33.7329 166.323 34.1177C165.302 34.5695 164.978 35.1792 165.759 35.1792C165.998 35.1792 166.586 34.9791 167.065 34.7346ZM170.845 33.124C171.289 32.8131 171.305 32.7521 170.992 32.5769C170.531 32.3189 169.161 32.7634 169.161 33.1708C169.161 33.5907 170.22 33.5612 170.845 33.124ZM186.852 125.168C186.852 125.075 186.967 124.883 187.108 124.742C187.248 124.601 187.283 124.486 187.184 124.486C187.086 124.486 186.89 124.644 186.75 124.836C186.548 125.112 186.409 125.136 186.087 124.949C185.857 124.815 185.801 124.71 185.958 124.706C186.112 124.702 186.178 124.603 186.106 124.486C185.967 124.261 186.332 124.2 187.385 124.272C188.324 124.336 188.418 124.473 187.838 124.93C187.297 125.355 186.852 125.463 186.852 125.168ZM276.169 39.9694C276.72 39.6849 276.798 39.5283 276.798 38.7167C276.798 38.1348 276.674 37.6859 276.464 37.5121C276.281 37.3597 275.983 36.9504 275.804 36.6024C275.506 36.0267 275.507 35.9814 275.818 36.1006C276.228 36.2579 276.798 36.0687 276.798 35.7754C276.798 35.6595 276.6 35.2862 276.358 34.9459C275.993 34.4332 275.846 34.3648 275.505 34.5474C275.229 34.6951 275.093 34.6965 275.093 34.5516C275.093 34.4326 274.713 34.1412 274.248 33.9039C273.219 33.379 272.853 32.7974 273.173 32.1977C273.416 31.7438 274.284 31.4258 274.655 31.6548C275.154 31.9636 275.302 31.5084 274.889 30.9295C273.89 29.5256 272.498 29.618 270.771 31.2029C269.658 32.2256 269.561 32.4974 270.191 32.8346C270.425 32.9601 270.617 33.2054 270.617 33.3797C270.617 33.5541 270.996 34.108 271.46 34.6107C272.527 35.7685 272.723 36.2975 272.59 37.6678L272.484 38.7709L273.948 39.5223C274.754 39.9355 275.442 40.2784 275.477 40.2841C275.512 40.2899 275.824 40.1483 276.169 39.9694ZM270.297 99.5069C269.696 99.1657 269.61 98.9855 269.453 97.7274C269.327 96.722 269.38 96.5035 269.981 95.5261C270.592 94.5327 270.636 94.3414 270.502 93.2623C270.307 91.7043 270.638 90.8856 271.544 90.687C272.397 90.4998 274.243 88.8701 274.685 87.9136L275.023 87.1827L275.258 87.6983C275.849 88.9956 275.789 89.5655 274.761 92.4109C274.21 93.9334 273.62 95.7545 273.449 96.4579C272.901 98.7089 272.589 99.2517 271.692 99.5207C271.635 99.5375 271.583 99.5534 271.534 99.5682C271.086 99.7032 270.909 99.7565 270.749 99.7256C270.644 99.7054 270.546 99.6494 270.385 99.5569C270.358 99.5413 270.329 99.5246 270.297 99.5069ZM280.209 95.4988C280.209 95.3815 280.304 95.2856 280.422 95.2856C280.539 95.2856 280.635 95.3815 280.635 95.4988C280.635 95.616 280.539 95.7119 280.422 95.7119C280.304 95.7119 280.209 95.616 280.209 95.4988ZM281.701 94.7653C281.701 94.7136 281.796 94.6121 281.914 94.5396C282.031 94.4672 282.127 94.5095 282.127 94.6336C282.127 94.7577 282.031 94.8593 281.914 94.8593C281.796 94.8593 281.701 94.817 281.701 94.7653ZM270.511 87.6124C270.438 87.4952 270.48 87.3993 270.605 87.3993C270.729 87.3993 270.83 87.4952 270.83 87.6124C270.83 87.7297 270.788 87.8256 270.736 87.8256C270.685 87.8256 270.583 87.7297 270.511 87.6124ZM281.061 80.3656C281.061 80.2484 281.157 80.1524 281.274 80.1524C281.392 80.1524 281.487 80.2484 281.487 80.3656C281.487 80.4828 281.392 80.5787 281.274 80.5787C281.157 80.5787 281.061 80.4828 281.061 80.3656ZM237.793 74.5167C237.793 74.465 237.889 74.3635 238.006 74.291C238.123 74.2186 238.219 74.2608 238.219 74.385C238.219 74.5091 238.123 74.6107 238.006 74.6107C237.889 74.6107 237.793 74.5684 237.793 74.5167ZM239.072 71.959C239.072 71.9073 239.168 71.8057 239.285 71.7333C239.402 71.6608 239.498 71.7031 239.498 71.8273C239.498 71.9514 239.402 72.053 239.285 72.053C239.168 72.053 239.072 72.0107 239.072 71.959ZM302.734 69.1309C302.496 68.7439 302.36 67.007 302.532 66.5461C302.715 66.0573 302.728 66.0633 303.272 66.8658C303.922 67.8277 304.131 68.4445 303.916 68.7738C303.71 69.0891 302.865 69.3444 302.734 69.1309ZM176.806 65.3726C176.937 65.2153 176.98 65.0235 176.903 64.9464C176.826 64.8692 176.962 64.8061 177.205 64.8061C177.542 64.8061 177.62 64.9073 177.535 65.2324C177.47 65.4799 177.244 65.6587 176.996 65.6587C176.663 65.6587 176.621 65.5958 176.806 65.3726ZM171.008 63.172C170.93 63.0939 170.866 62.9308 170.866 62.8097C170.866 62.6761 170.965 62.6887 171.118 62.8416C171.257 62.9804 171.321 63.1434 171.26 63.204C171.2 63.2646 171.086 63.2502 171.008 63.172ZM169.8 62.8878C169.8 62.7706 169.843 62.6747 169.894 62.6747C169.946 62.6747 170.048 62.7706 170.12 62.8878C170.192 63.005 170.15 63.101 170.026 63.101C169.902 63.101 169.8 63.005 169.8 62.8878ZM179.818 62.4615C179.818 62.3443 179.86 62.2484 179.912 62.2484C179.964 62.2484 180.065 62.3443 180.138 62.4615C180.21 62.5788 180.168 62.6747 180.044 62.6747C179.92 62.6747 179.818 62.5788 179.818 62.4615ZM178.539 61.0887C178.539 61.037 178.635 60.9354 178.752 60.863C178.87 60.7905 178.965 60.8328 178.965 60.9569C178.965 61.0811 178.87 61.1827 178.752 61.1827C178.635 61.1827 178.539 61.1404 178.539 61.0887ZM212.003 60.3301C212.003 60.2129 212.099 60.117 212.216 60.117C212.333 60.117 212.429 60.2129 212.429 60.3301C212.429 60.4473 212.333 60.5432 212.216 60.5432C212.099 60.5432 212.003 60.4473 212.003 60.3301ZM177.9 59.5027C177.9 59.3854 177.996 59.2303 178.113 59.1578C178.23 59.0854 178.326 59.122 178.326 59.2392C178.326 59.3565 178.23 59.5116 178.113 59.5841C177.996 59.6566 177.9 59.6199 177.9 59.5027ZM176.09 58.6274C176.015 58.5066 176.1 58.4708 176.29 58.5436C176.659 58.6853 176.727 58.8381 176.42 58.8381C176.31 58.8381 176.161 58.7433 176.09 58.6274ZM209.978 58.625C209.905 58.5077 209.948 58.4118 210.072 58.4118C210.196 58.4118 210.298 58.5077 210.298 58.625C210.298 58.7422 210.255 58.8381 210.204 58.8381C210.152 58.8381 210.05 58.7422 209.978 58.625ZM176.941 58.1987C176.868 58.0814 176.91 57.9855 177.035 57.9855C177.159 57.9855 177.26 58.0814 177.26 58.1987C177.26 58.3159 177.218 58.4118 177.166 58.4118C177.115 58.4118 177.013 58.3159 176.941 58.1987ZM177.9 58.1987C177.9 58.0814 177.942 57.9855 177.994 57.9855C178.045 57.9855 178.147 58.0814 178.219 58.1987C178.292 58.3159 178.25 58.4118 178.125 58.4118C178.001 58.4118 177.9 58.3159 177.9 58.1987ZM163.246 57.6312C163.1 57.5721 162.98 57.4358 162.98 57.3283C162.98 57.021 163.921 57.1001 164.378 57.4459C164.771 57.7432 164.759 57.7583 164.152 57.7488C163.8 57.7432 163.393 57.6903 163.246 57.6312ZM168.64 57.5103C168.448 57.4033 168.026 57.3742 167.701 57.4456C167.376 57.517 166.876 57.4818 166.59 57.3674C166.13 57.1835 166.171 57.1618 166.942 57.1798C168.075 57.2063 168.378 57.0217 168.088 56.4806C167.883 56.0965 167.944 56.0672 168.961 56.0672C169.945 56.0672 171.364 56.5184 171.604 56.9075C171.764 57.1662 169.021 57.7239 168.64 57.5103ZM172.728 57.6451C172.475 57.3925 172.789 57.1329 173.348 57.1329C173.683 57.1329 173.852 57.2334 173.798 57.3994C173.7 57.6978 172.952 57.8694 172.728 57.6451ZM174.489 57.2623C174.489 57.2163 174.633 57.1233 174.809 57.0559C174.985 56.9884 175.129 57.0261 175.129 57.1396C175.129 57.2532 174.985 57.3461 174.809 57.3461C174.633 57.3461 174.489 57.3084 174.489 57.2623ZM165.276 55.7345C165.21 55.6687 164.76 55.6094 164.276 55.6027C163.608 55.5935 163.448 55.5278 163.612 55.3304C163.77 55.1396 163.543 54.8856 162.759 54.3778C161.223 53.3823 160.365 53.1877 159.333 53.6007C158.365 53.988 158.291 53.9989 158.291 53.755C158.291 53.3089 159.987 52.8183 161.208 52.9111C162.377 52.9999 163.031 53.2485 165.324 54.4756C167.21 55.4842 167.212 55.4862 166.603 55.6597C165.912 55.8567 165.425 55.8841 165.276 55.7345ZM166.816 53.9358C167.23 53.6687 167.456 53.6687 167.456 53.9358C167.456 54.053 167.24 54.1475 166.976 54.1457C166.588 54.143 166.558 54.1029 166.816 53.9358ZM168.216 53.2737C168.358 53.0435 169.161 53.0174 169.161 53.2431C169.161 53.331 168.921 53.4167 168.629 53.4336C168.337 53.4504 168.151 53.3785 168.216 53.2737ZM164.001 51.2195C163.66 50.8283 163.71 50.3124 164.088 50.3124C164.209 50.3124 164.259 50.4996 164.199 50.7284C164.14 50.9573 164.2 51.1839 164.334 51.2321C164.469 51.2803 164.522 51.3814 164.453 51.4568C164.384 51.5322 164.18 51.4254 164.001 51.2195ZM165.239 49.545C165.163 49.3474 165.149 49.1377 165.208 49.0791C165.266 49.0204 165.376 49.1342 165.452 49.3319C165.528 49.5296 165.542 49.7393 165.484 49.7979C165.425 49.8565 165.315 49.7427 165.239 49.545ZM163.903 49.3532C163.903 49.1774 164.086 49.0335 164.309 49.0335C164.67 49.0335 164.68 49.069 164.396 49.3532C164.22 49.5291 164.037 49.6729 163.99 49.6729C163.942 49.6729 163.903 49.5291 163.903 49.3532ZM177.26 43.3978C177.26 43.3461 177.356 43.2445 177.473 43.1721C177.591 43.0996 177.687 43.1419 177.687 43.266C177.687 43.3902 177.591 43.4918 177.473 43.4918C177.356 43.4918 177.26 43.4495 177.26 43.3978ZM259.448 41.6303C259.194 41.3759 259.329 41.1472 259.734 41.1472C259.962 41.1472 260.207 41.0513 260.28 40.934C260.478 40.6135 260.816 40.6778 260.688 41.0118C260.556 41.3544 259.633 41.8151 259.448 41.6303ZM252.18 41.2615L251.541 40.9687L252.393 40.9543C253.455 40.9363 254.237 41.1355 254.084 41.3846C253.912 41.662 252.914 41.5975 252.18 41.2615ZM243.57 39.1353C242.717 38.6986 242.677 38.644 243.122 38.5276C243.655 38.3881 244.836 38.5616 244.812 38.776C244.804 38.8492 244.732 39.068 244.652 39.2621C244.521 39.5812 244.417 39.569 243.57 39.1353ZM239.298 36.8293C239.113 36.3001 239.128 36.0976 239.368 35.8579C239.801 35.4245 240.138 35.7291 240.138 36.5544C240.138 37.5292 239.603 37.7042 239.298 36.8293ZM234.3 37.0064C234.451 36.6124 235.099 36.5457 234.969 36.9376C234.92 37.0841 234.721 37.235 234.526 37.2728C234.278 37.3208 234.21 37.2401 234.3 37.0064ZM239.64 34.8239C239.393 34.5767 239.486 34.1637 239.818 34.0364C240.049 33.9478 240.138 34.0597 240.138 34.4399C240.138 34.9515 239.929 35.1126 239.64 34.8239ZM188.344 29.9572C188.344 29.7813 188.437 29.6375 188.55 29.6375C188.664 29.6375 188.701 29.7813 188.634 29.9572C188.566 30.133 188.474 30.2769 188.428 30.2769C188.381 30.2769 188.344 30.133 188.344 29.9572ZM187.23 29.2694L186.436 29.1861L187.93 27.7066C188.752 26.8929 189.532 26.2272 189.663 26.2272C189.802 26.2272 189.76 26.3838 189.564 26.6003C189.12 27.0906 189.423 27.6414 190.234 27.8195C190.588 27.8973 190.941 28.1686 191.077 28.4679C191.296 28.9482 191.259 28.9971 190.52 29.2022C189.746 29.4174 188.821 29.4362 187.23 29.2694ZM135.294 27.7402C134.555 27.0505 134.473 26.76 134.963 26.5721C135.401 26.4038 136.21 26.9523 136.517 27.6256C136.839 28.3321 136.833 28.3586 136.359 28.3586C136.137 28.3586 135.658 28.0803 135.294 27.7402ZM229.161 26.6573C229.395 26.5417 229.857 26.3498 230.186 26.2309C230.912 25.969 230.792 25.6901 229.873 25.5065C229.244 25.3805 229.222 25.3485 229.582 25.085C229.796 24.9281 229.909 24.6987 229.833 24.5751C229.755 24.4488 229.974 24.2528 230.333 24.1276C230.685 24.005 230.972 23.8101 230.972 23.6944C230.972 23.2021 230.528 22.3739 230.281 22.4061C229.712 22.4803 229.449 22.38 229.54 22.1241C229.593 21.9776 229.55 21.6899 229.444 21.4847C229.17 20.9513 229.8 19.8481 230.386 19.8361C230.474 19.8345 230.522 19.9505 230.493 20.0942C230.464 20.238 230.665 20.3897 230.94 20.4315L231.44 20.5074L230.484 21.525L231.023 21.7298C231.601 21.9497 232.159 22.6661 232.726 23.9189C232.998 24.5192 233.177 24.6761 233.495 24.5931C234.146 24.4227 234.223 24.8641 233.612 25.2645C233.198 25.5358 233.12 25.6887 233.301 25.87C233.482 26.0513 233.125 26.173 231.885 26.3519C230.973 26.4836 229.891 26.6534 229.48 26.7294C228.91 26.8351 228.835 26.8181 229.161 26.6573ZM225.566 25.4799C225.493 25.2899 225.577 24.8582 225.751 24.5206C225.951 24.1332 225.99 23.8584 225.856 23.7755C225.487 23.5472 225.625 23.2559 226.168 23.1197C226.456 23.0474 226.804 22.8537 226.94 22.6894C227.224 22.3472 228.537 22.2843 228.734 22.6033C228.807 22.7204 228.716 23.0295 228.534 23.2902C228.351 23.551 228.202 24.0193 228.202 24.331C228.202 24.8064 228.055 24.9485 227.296 25.2122C226.797 25.3851 226.234 25.5939 226.044 25.676C225.822 25.7723 225.652 25.7027 225.566 25.4799ZM229.48 23.3623C229.48 23.3106 229.576 23.209 229.694 23.1366C229.811 23.0641 229.907 23.1064 229.907 23.2306C229.907 23.3547 229.811 23.4563 229.694 23.4563C229.576 23.4563 229.48 23.414 229.48 23.3623ZM134.887 22.3353C134.679 22.0837 134.692 21.9665 134.954 21.7491C135.387 21.3896 135.602 21.6334 135.35 22.1984C135.176 22.5881 135.113 22.6068 134.887 22.3353ZM134.554 20.7323C134.482 20.6159 134.566 20.4021 134.741 20.2572C135.087 19.9696 135.159 20.1951 134.868 20.6549C134.757 20.8306 134.634 20.861 134.554 20.7323ZM120.777 20.5964C120.777 20.4465 121.424 20.1842 122.34 19.9621C122.688 19.8779 122.894 19.8982 122.824 20.0099C122.758 20.1167 122.439 20.2577 122.114 20.3233C121.789 20.3888 121.355 20.5074 121.15 20.5867C120.945 20.6661 120.777 20.6704 120.777 20.5964ZM247.438 18.1997C247.045 18.041 247.114 17.7964 247.562 17.7627C247.777 17.7465 247.953 17.87 247.953 18.0371C247.953 18.3544 247.879 18.3777 247.438 18.1997ZM200.6 17.1103C199.251 16.3748 198.606 15.2447 198.997 14.3012C199.182 13.8546 199.187 13.5738 199.018 13.2569C198.665 12.5974 199.125 11.8246 200.303 11.0999C200.862 10.7558 201.421 10.2858 201.544 10.0555C201.885 9.41758 201.581 8.32434 200.987 8.05362C200.687 7.9166 200.523 7.69995 200.589 7.52681C200.741 7.1325 200.031 5.78579 199.324 5.12596C198.804 4.64033 198.58 4.59197 196.799 4.5803C194.373 4.56442 193.922 4.42958 193.962 3.73361C193.978 3.44451 194.043 3.20791 194.104 3.20782C194.166 3.20774 195.029 3.1077 196.023 2.98551C197.291 2.82949 198.428 2.50774 199.842 1.90486C202.031 0.971434 202.197 0.953194 207.42 1.07595C209.069 1.11471 210.586 0.992663 212.536 0.664433C214.351 0.358765 215.686 0.243539 216.407 0.330388C217.02 0.404181 217.907 0.35551 218.408 0.220631C219.571 -0.0923689 222.591 0.284141 223.779 0.890137C224.481 1.2484 224.852 1.2957 226.037 1.17773C227.317 1.0503 227.414 1.06707 227.029 1.34962C226.795 1.52182 226.075 1.73217 225.431 1.81706C224.032 2.00128 222.746 2.99847 223.087 3.63517C223.234 3.90982 223.128 4.14424 222.653 4.59952C222.308 4.93034 221.975 5.36026 221.913 5.55488C221.765 6.02245 219.88 6.89263 218.946 6.92508C217.908 6.96111 217.8 7.18171 218.602 7.62374C218.981 7.83255 219.535 8.18835 219.832 8.41439L220.373 8.82538L219.884 9.00614C219.509 9.14471 219.205 9.05538 218.582 8.62343C217.736 8.03726 216.826 8.03431 217.312 8.61932C217.501 8.84745 217.456 8.93607 217.101 9.02873C216.309 9.23587 216.869 9.64546 217.743 9.49788C218.299 9.40394 218.612 9.45345 218.785 9.66293C218.992 9.91218 218.722 10.0276 217.17 10.3539C216.145 10.5693 214.779 10.7535 214.134 10.7631C212.936 10.781 212.073 11.1249 210.803 12.0899C210.389 12.4046 209.509 12.7165 208.48 12.9135C206.328 13.3253 205.601 13.8015 204.304 15.6479C203.262 17.1309 202.634 17.6837 201.985 17.6889C201.809 17.6903 201.186 17.4299 200.6 17.1103ZM185.487 15.6848C185.029 15.4035 184.468 14.879 184.24 14.5191C183.795 13.8166 183.385 13.7273 182.184 14.0717C181.778 14.1883 181.322 14.1996 181.139 14.0975C180.508 13.7443 181.648 13.3969 182.918 13.5555C183.884 13.6762 184.098 13.6418 184.211 13.3483C184.437 12.7587 185.472 12.3362 186.048 12.5985C186.403 12.76 186.725 12.7555 187.178 12.5827C187.787 12.3503 187.795 12.3293 187.397 12.0372C187.17 11.8701 186.91 11.7334 186.82 11.7334C186.73 11.7334 186.406 11.3052 186.099 10.7819C185.792 10.2586 185.217 9.63021 184.822 9.38556C184.149 8.96978 184.06 8.96247 183.458 9.27364C182.932 9.54568 182.628 9.56473 181.796 9.37783C181.236 9.25203 180.453 9.20967 180.058 9.28368C179.371 9.41207 178.113 9.07606 178.113 8.76428C178.113 8.19152 179.918 6.9061 180.99 6.7153L181.843 6.56359L181.233 7.21289C180.393 8.10856 180.709 8.52076 181.622 7.71923C182.009 7.37923 182.678 7.03492 183.109 6.95411C183.767 6.83063 184.049 6.91116 184.876 7.45858C185.975 8.18693 186.06 8.20646 186.68 7.87458C187.054 7.67473 187.192 7.72962 187.598 8.23819C187.878 8.58997 188.505 8.97302 189.115 9.16629C190.089 9.47433 190.155 9.54133 190.155 10.2128C190.155 10.7163 190.301 11.034 190.643 11.2785L190.756 11.3594C191.624 11.9801 191.903 12.1793 191.905 12.3818C191.906 12.4774 191.846 12.5738 191.757 12.7156C191.749 12.7283 191.741 12.7414 191.732 12.7548C191.308 13.4343 190.973 13.4836 190.034 13.0044C189.38 12.6711 189.095 12.6254 188.766 12.8014C188.363 13.0168 188.359 13.0628 188.683 13.6894C188.949 14.2036 188.973 14.4633 188.792 14.8599C188.57 15.3486 188.534 15.3561 187.93 15.0435C186.741 14.4288 185.941 14.8333 187.05 15.4883C187.397 15.6935 187.633 15.9397 187.574 16.0354C187.367 16.3694 186.313 16.1922 185.487 15.6848ZM229.267 15.9608C229.267 15.8631 229.411 15.7831 229.587 15.7831C229.763 15.7831 229.907 15.8631 229.907 15.9608C229.907 16.0584 229.763 16.1384 229.587 16.1384C229.411 16.1384 229.267 16.0584 229.267 15.9608ZM177.45 14.8145C177.03 14.5936 176.704 14.5746 176.115 14.7371C175.115 15.0134 174.765 14.8112 175.272 14.2502C175.922 13.532 176.363 13.3908 177.147 13.6495C178.029 13.9407 178.421 14.3735 178.183 14.7944C178.031 15.0627 177.928 15.0656 177.45 14.8145ZM219.782 14.7174C219.431 14.4862 218.983 14.3476 218.788 14.4094C218.518 14.4945 218.459 14.4206 218.541 14.1047C218.668 13.6198 220.541 12.9199 221.174 13.1208C221.395 13.1908 221.959 13.1332 222.428 12.9928C223.164 12.7723 223.359 12.789 223.856 13.115L224.432 13.4925L223.919 13.8925C223.486 14.2301 222.682 14.523 220.742 15.0509C220.566 15.0987 220.134 14.9487 219.782 14.7174ZM161.914 10.7386C161.621 10.6922 160.907 10.4415 160.327 10.1814L159.274 9.70854L160.754 9.60197C161.568 9.54336 162.234 9.39948 162.234 9.28226C162.234 9.16503 161.658 9.01771 160.955 8.95487C160.026 8.87191 159.851 8.81355 160.315 8.74173C161.093 8.62148 161.149 8.28477 160.422 8.10119C159.899 7.96899 159.902 7.96091 160.639 7.64366C161.915 7.09385 163.274 6.98853 164.478 7.34615C165.467 7.63976 165.621 7.63851 166.088 7.33308C166.417 7.11708 166.613 7.08094 166.63 7.23288C166.644 7.36359 166.668 7.58244 166.683 7.7192C166.733 8.18096 167.158 8.12121 167.665 7.58121C168.135 7.0813 168.949 6.84182 168.947 7.20411C168.947 7.29203 168.757 7.67437 168.526 8.05375L168.105 8.74353L169.481 9.4612L168.351 9.97666C167.332 10.4418 167.123 10.4684 166.21 10.2493C165.324 10.0368 165.07 10.0611 164.177 10.4436C163.169 10.8757 162.957 10.9034 161.914 10.7386ZM170.462 10.5884C170.27 10.3564 170.349 10.2423 170.847 10.0362C171.193 9.89275 171.69 9.84494 171.956 9.92942C172.418 10.0759 172.407 10.099 171.705 10.4727C170.81 10.9495 170.766 10.9536 170.462 10.5884ZM229.267 9.60197C229.681 9.33492 229.907 9.33492 229.907 9.60197C229.907 9.7192 229.691 9.81365 229.427 9.81185C229.039 9.80922 229.009 9.76905 229.267 9.60197ZM268.29 8.97535C267.682 8.73556 267.455 8.64602 267.44 8.52904C267.431 8.45934 267.497 8.3799 267.603 8.25312L267.629 8.22169C267.777 8.04302 267.815 7.89378 267.712 7.89005C267.61 7.88631 267.718 7.73832 267.953 7.56116C268.187 7.384 268.381 7.17124 268.383 7.08837C268.39 6.77311 269.258 5.94173 269.871 5.66235C270.223 5.50213 271.134 5.32153 271.896 5.26104C272.658 5.20054 273.679 5.08971 274.164 5.01474C274.681 4.93495 275.102 4.96758 275.18 5.09343C275.331 5.33795 275.042 5.44188 273.388 5.73909C271.746 6.03401 270.76 6.49359 270.11 7.26595C269.425 8.0796 269.402 8.59333 270.031 9.03193L270.511 9.36647L269.871 9.35694C269.519 9.35171 268.848 9.19586 268.379 9.01064L268.29 8.97535ZM156.746 8.39265C156.403 8.0489 156.481 7.97407 158.13 7.07124C160.062 6.01342 161.033 5.873 162.767 6.40069L163.726 6.69272L162.447 6.94629C161.401 7.15368 159.185 7.89486 157.434 8.62253C157.256 8.69676 156.947 8.59375 156.746 8.39265ZM172.145 8.11678C172.145 8.00329 171.881 7.75905 171.559 7.57401L170.973 7.23758L171.757 7.361C172.315 7.4487 172.593 7.39646 172.717 7.18054C172.864 6.92374 174.22 6.4099 174.761 6.40601C174.852 6.40529 174.778 6.69223 174.596 7.04352C174.169 7.8709 172.145 8.75684 172.145 8.11678ZM175.463 7.49444C175.158 7.00034 177.244 6.23549 178.13 6.51668C178.775 6.72162 178.344 7.07377 177.217 7.26098C176.714 7.34476 176.143 7.48067 175.95 7.56302C175.756 7.64537 175.538 7.61451 175.463 7.49444ZM182.269 5.92491C180.862 5.81301 179.685 5.69712 179.653 5.66736C179.463 5.49052 179.938 4.91489 180.449 4.70298C180.952 4.49464 181.184 4.52228 181.873 4.87276C182.544 5.21435 182.977 5.27114 184.224 5.18127C185.064 5.1207 186.023 5.13986 186.355 5.22385L186.958 5.37655L186.212 5.77518C185.802 5.99443 185.322 6.16358 185.147 6.15109C184.971 6.13858 183.676 6.0368 182.269 5.92491ZM243.607 5.05382C242.56 4.51779 242.459 4.27471 243.281 4.27013C243.604 4.26832 244.011 4.16337 244.187 4.03688C244.464 3.83806 244.46 3.8218 244.16 3.91691C243.969 3.97742 243.701 3.91528 243.565 3.77894C243.376 3.59038 243.278 3.59372 243.155 3.79287C243.041 3.97726 242.807 3.99908 242.365 3.86658C241.241 3.52999 240.99 3.38056 240.99 3.04684C240.99 2.76416 241.272 2.73827 243.015 2.8608C244.343 2.95411 245.04 2.92825 245.04 2.78569C245.04 2.36611 245.631 2.57329 245.788 3.04781L245.947 3.52738L246.041 3.04781C246.093 2.78404 246.272 2.56824 246.44 2.56824C246.608 2.56824 246.745 2.45314 246.745 2.31246C246.745 2.11353 246.802 2.11353 247.001 2.31246C247.15 2.46125 247.863 2.56824 248.706 2.56824C250.23 2.56824 250.588 2.84069 249.571 3.22709C249.043 3.42789 248.125 3.37109 247.118 3.07537C246.913 3.01511 246.746 3.0442 246.746 3.14002C246.748 3.33672 247.945 4.06024 248.27 4.06024C248.386 4.06024 248.615 4.1948 248.78 4.35926C249.036 4.61585 249.034 4.67538 248.764 4.77885C248.592 4.84518 248.45 4.79585 248.45 4.66926C248.45 4.52044 248.179 4.48994 247.683 4.58297C247.146 4.68372 246.96 4.65608 247.062 4.49078C247.142 4.36094 247.092 4.11504 246.95 3.94433C246.677 3.61501 245.892 3.51418 245.892 3.80838C245.892 3.90431 245.581 4.32744 245.2 4.74866L244.507 5.51452L243.607 5.05382ZM182.909 2.63761C181.876 2.40903 181.838 2.32305 182.597 1.92962C183.703 1.35614 184.75 1.20915 185.226 1.56048C185.603 1.83863 185.582 1.88163 184.841 2.31837C184.07 2.77356 183.757 2.82527 182.909 2.63761Z",
                            fill: this.color ? this.color : "white"
                        }
                    })])])
                }), [], !1, null, "f280d9fa", null).exports),
                E = {
                    props: {
                        isAnimated: {
                            type: Boolean,
                            default: !1
                        },
                        color: {
                            type: String,
                            default: void 0
                        }
                    },
                    computed: {
                        animationLength: function() {
                            return this.$store.state.customization.animationLength
                        }
                    }
                },
                j = (r(506), r(508), Object(c.a)(E, (function() {
                    var o = this,
                        t = o.$createElement,
                        r = o._self._c || t;
                    return r("div", {
                        staticClass: "wrapper"
                    }, [r("div", {
                        staticClass: "animation"
                    }, [r("svg", {
                        staticClass: "note",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: " + o.animationLength + "s note-1 infinite;",
                        attrs: {
                            id: "note-1",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            d: "M38.4198 13.2073C38.0579 12.9705 37.6015 12.9343 37.2072 13.1106L30.4072 16.1534C29.9467 16.3594 29.65 16.8191 29.65 17.3263V33.4213C28.8992 32.9829 28.0286 32.7305 27.1 32.7305C24.2879 32.7305 22 35.034 22 37.8653C22 40.6966 24.2879 43 27.1 43C29.9121 43 32.2 40.6966 32.2 37.8653V23.2953L38.2428 20.5913C38.7033 20.3854 39 19.9256 39 19.4183V14.2836C39 13.8491 38.7817 13.444 38.4198 13.2073V13.2073Z",
                            fill: o.color || "white"
                        }
                    })]), o._v(" "), r("svg", {
                        staticClass: "note",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: " + o.animationLength + "s note-2 infinite;",
                        attrs: {
                            id: "note-2",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            d: "M120 53.2354C120 52.8254 119.799 52.4422 119.464 52.2125C119.13 51.9826 118.704 51.9361 118.329 52.0884L102.079 58.6767C101.616 58.8642 101.312 59.3185 101.312 59.8236V77.7824C100.595 77.3606 99.7627 77.1177 98.875 77.1177C96.1869 77.1177 94 79.3343 94 82.0588C94 84.7834 96.1869 87 98.875 87C101.563 87 103.75 84.7834 103.75 82.0588V65.601L117.562 60.001V71.1942C116.845 70.7723 116.013 70.5294 115.125 70.5294C112.437 70.5294 110.25 72.746 110.25 75.4706C110.25 78.1952 112.437 80.4118 115.125 80.4118C117.813 80.4118 120 78.1952 120 75.4706V53.2354Z",
                            fill: o.color || "white"
                        }
                    })]), o._v(" "), r("svg", {
                        staticClass: "note",
                        class: {
                            animated: o.isAnimated
                        },
                        style: "animation: " + o.animationLength + "s note-3 infinite;",
                        attrs: {
                            id: "note-3",
                            width: "128",
                            height: "128",
                            viewBox: "0 0 128 128",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            d: "M41.4198 81.2073C41.0579 80.9705 40.6015 80.9343 40.2072 81.1106L33.4072 84.1534C32.9467 84.3594 32.65 84.8191 32.65 85.3263V101.421C31.8992 100.983 31.0286 100.731 30.1 100.731C27.2879 100.731 25 103.034 25 105.865C25 108.697 27.2879 111 30.1 111C32.9121 111 35.2 108.697 35.2 105.865V91.2953L41.2428 88.5913C41.7033 88.3854 42 87.9256 42 87.4183V82.2836C42 81.8491 41.7817 81.444 41.4198 81.2073V81.2073Z",
                            fill: o.color || "white"
                        }
                    })])])])
                }), [], !1, null, "6f204442", null).exports),
                $ = {
                    props: {
                        isAnimated: {
                            type: Boolean,
                            default: !1
                        },
                        color: {
                            type: String,
                            default: void 0
                        }
                    },
                    computed: {
                        animationLength: function() {
                            return this.$store.state.customization.animationLength
                        }
                    }
                },
                O = (r(510), r(512), {
                    ShinyEffect: C,
                    RotatingStripes: d,
                    SparkleEffect: m,
                    StarSky: v,
                    RainSky: w,
                    SawbladeEffect: L,
                    ExpandingCircles: Z,
                    CheckPattern: _,
                    FillUpEffect: S,
                    EarthEffect: V,
                    MusicNotes: j,
                    HeartsEffect: Object(c.a)($, (function() {
                        var o = this,
                            t = o.$createElement,
                            r = o._self._c || t;
                        return r("div", {
                            staticClass: "wrapper"
                        }, [r("div", {
                            staticClass: "animation"
                        }, [r("svg", {
                            staticClass: "heart",
                            class: {
                                animated: o.isAnimated
                            },
                            style: "animation: " + o.animationLength + "s heart-1 infinite;",
                            attrs: {
                                id: "heart-1",
                                width: "128",
                                height: "128",
                                viewBox: "0 0 128 128",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [r("path", {
                            attrs: {
                                d: "M47.7787 21.4466C46.3293 19.8689 44.3405 19 42.1782 19C40.5619 19 39.0817 19.5128 37.7786 20.5241C37.1211 21.0345 36.5253 21.659 36 22.3879C35.4749 21.6592 34.8789 21.0345 34.2212 20.5241C32.9183 19.5128 31.4381 19 29.8218 19C27.6595 19 25.6705 19.8689 24.221 21.4466C22.7889 23.0058 22 25.1359 22 27.4449C22 29.8214 22.8825 31.9967 24.7771 34.2911C26.472 36.3434 28.9079 38.4268 31.7288 40.8393C32.692 41.6632 33.7839 42.5971 34.9176 43.5918C35.2171 43.8551 35.6014 44 36 44C36.3984 44 36.7829 43.8551 37.082 43.5922C38.2157 42.5973 39.3082 41.663 40.2718 40.8387C43.0923 38.4266 45.5282 36.3434 47.2231 34.2909C49.1177 31.9967 50 29.8214 50 27.4447C50 25.1359 49.2111 23.0058 47.7787 21.4466Z",
                                fill: o.color || "white"
                            }
                        })]), o._v(" "), r("svg", {
                            staticClass: "heart",
                            class: {
                                animated: o.isAnimated
                            },
                            style: "animation: " + o.animationLength + "s heart-2 infinite;",
                            attrs: {
                                id: "heart-2",
                                width: "128",
                                height: "128",
                                viewBox: "0 0 128 128",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [r("path", {
                            attrs: {
                                d: "M118.779 59.4466C117.329 57.8689 115.34 57 113.178 57C111.562 57 110.082 57.5128 108.779 58.5241C108.121 59.0345 107.525 59.659 107 60.3879C106.475 59.6592 105.879 59.0345 105.221 58.5241C103.918 57.5128 102.438 57 100.822 57C98.6595 57 96.6705 57.8689 95.221 59.4466C93.7889 61.0058 93 63.1359 93 65.4449C93 67.8214 93.8825 69.9967 95.7771 72.2911C97.472 74.3434 99.9079 76.4268 102.729 78.8393C103.692 79.6632 104.784 80.5971 105.918 81.5918C106.217 81.8551 106.601 82 107 82C107.398 82 107.783 81.8551 108.082 81.5922C109.216 80.5973 110.308 79.663 111.272 78.8387C114.092 76.4266 116.528 74.3434 118.223 72.2909C120.118 69.9967 121 67.8214 121 65.4447C121 63.1359 120.211 61.0058 118.779 59.4466Z",
                                fill: o.color || "white"
                            }
                        })]), o._v(" "), r("svg", {
                            staticClass: "heart",
                            class: {
                                animated: o.isAnimated
                            },
                            style: "animation: " + o.animationLength + "s heart-3 infinite;",
                            attrs: {
                                id: "heart-3",
                                width: "128",
                                height: "128",
                                viewBox: "0 0 128 128",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [r("path", {
                            attrs: {
                                d: "M47.7787 87.4466C46.3293 85.8689 44.3405 85 42.1782 85C40.5619 85 39.0817 85.5128 37.7786 86.5241C37.1211 87.0345 36.5253 87.659 36 88.3879C35.4749 87.6592 34.8789 87.0345 34.2212 86.5241C32.9183 85.5128 31.4381 85 29.8218 85C27.6595 85 25.6705 85.8689 24.221 87.4466C22.7889 89.0058 22 91.1359 22 93.4449C22 95.8214 22.8825 97.9967 24.7771 100.291C26.472 102.343 28.9079 104.427 31.7288 106.839C32.692 107.663 33.7839 108.597 34.9176 109.592C35.2171 109.855 35.6014 110 36 110C36.3984 110 36.7829 109.855 37.082 109.592C38.2157 108.597 39.3082 107.663 40.2718 106.839C43.0923 104.427 45.5282 102.343 47.2231 100.291C49.1177 97.9967 50 95.8214 50 93.4447C50 91.1359 49.2111 89.0058 47.7787 87.4466Z",
                                fill: o.color || "white"
                            }
                        })])])])
                    }), [], !1, null, "31e1b96d", null).exports
                });
            Object.entries(O).forEach((function(o) {
                var t = Object(e.a)(o, 2),
                    r = t[0],
                    component = t[1];
                n.a.component(r, component)
            }))
        },
        199: function(o, t, r) {
            var content = r(350);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("56b15182", content, !0, {
                sourceMap: !1
            })
        },
        260: function(o, t, r) {
            var content = r(467);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("5f53d7ca", content, !0, {
                sourceMap: !1
            })
        },
        261: function(o, t, r) {
            var content = r(469);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("c569b3c8", content, !0, {
                sourceMap: !1
            })
        },
        262: function(o, t, r) {
            var content = r(471);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("4ac36874", content, !0, {
                sourceMap: !1
            })
        },
        263: function(o, t, r) {
            var content = r(473);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("c5a90348", content, !0, {
                sourceMap: !1
            })
        },
        264: function(o, t, r) {
            var content = r(475);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("12edb0a8", content, !0, {
                sourceMap: !1
            })
        },
        265: function(o, t, r) {
            var content = r(477);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("7dae457c", content, !0, {
                sourceMap: !1
            })
        },
        266: function(o, t, r) {
            var content = r(479);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("0deaf205", content, !0, {
                sourceMap: !1
            })
        },
        267: function(o, t, r) {
            var content = r(481);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("ed404d08", content, !0, {
                sourceMap: !1
            })
        },
        268: function(o, t, r) {
            var content = r(483);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("123de72e", content, !0, {
                sourceMap: !1
            })
        },
        269: function(o, t, r) {
            var content = r(485);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("3cbf953c", content, !0, {
                sourceMap: !1
            })
        },
        270: function(o, t, r) {
            var content = r(487);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("81efe70c", content, !0, {
                sourceMap: !1
            })
        },
        271: function(o, t, r) {
            var content = r(489);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("d5d87cbc", content, !0, {
                sourceMap: !1
            })
        },
        272: function(o, t, r) {
            var content = r(491);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("4fa687d0", content, !0, {
                sourceMap: !1
            })
        },
        273: function(o, t, r) {
            var content = r(493);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("3cbe6918", content, !0, {
                sourceMap: !1
            })
        },
        274: function(o, t, r) {
            var content = r(495);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("62848442", content, !0, {
                sourceMap: !1
            })
        },
        275: function(o, t, r) {
            var content = r(497);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("27a96a32", content, !0, {
                sourceMap: !1
            })
        },
        276: function(o, t, r) {
            var content = r(499);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("2b6f53f7", content, !0, {
                sourceMap: !1
            })
        },
        277: function(o, t, r) {
            var content = r(501);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("4c6ec680", content, !0, {
                sourceMap: !1
            })
        },
        278: function(o, t, r) {
            var content = r(503);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("1f431480", content, !0, {
                sourceMap: !1
            })
        },
        279: function(o, t, r) {
            var content = r(505);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("7b5ca2fc", content, !0, {
                sourceMap: !1
            })
        },
        280: function(o, t, r) {
            var content = r(507);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("6fd6f1fe", content, !0, {
                sourceMap: !1
            })
        },
        281: function(o, t, r) {
            var content = r(509);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("f1fe224c", content, !0, {
                sourceMap: !1
            })
        },
        282: function(o, t, r) {
            var content = r(511);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("dc282302", content, !0, {
                sourceMap: !1
            })
        },
        283: function(o, t, r) {
            var content = r(513);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("46bf22c4", content, !0, {
                sourceMap: !1
            })
        },
        290: function(o, t, r) {
            "use strict";
            var e = {
                    computed: {
                        isDarkTheme: function() {
                            return this.$store.state.localStorage.darkMode
                        },
                        isClassicMode: function() {
                            return this.$store.state.localStorage.classicMode
                        }
                    },
                    mounted: function() {
                        this.$forceUpdate(), console.log("NerdOrDie")
                    }
                },
                n = (r(349), r(6)),
                component = Object(n.a)(e, (function() {
                    var o = this.$createElement,
                        t = this._self._c || o;
                    return t("div", {
                        staticClass: "default-layout",
                        class: {
                            "dark-theme": this.isDarkTheme,
                            "classic-theme": this.isClassicMode
                        }
                    }, [t("Nuxt")], 1)
                }), [], !1, null, null, null);
            t.a = component.exports
        },
        294: function(o, t, r) {
            r(295), o.exports = r(296)
        },
        337: function(o, t, r) {
            var content = r(338);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("bab5ccb4", content, !0, {
                sourceMap: !1
            })
        },
        338: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}", ""]), o.exports = t
        },
        339: function(o, t, r) {
            var content = r(340);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("df88d454", content, !0, {
                sourceMap: !1
            })
        },
        340: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ':root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}body{margin:0;padding:0;font-family:"Hind",sans-serif}a{color:#6873f3;color:var(--color-primary);text-decoration:underline;cursor:pointer}a.unstyled{text-decoration:none;color:unset}.custom-radio-group{display:flex;position:relative;border-radius:50px;margin-bottom:20px;--svg-custom-color:var(--color-almost-black)}.custom-radio-group:last-child{margin-bottom:5px}.custom-radio-group__option{border-right:1px solid rgba(183,186,192,.5);border-right:1px solid var(--color-grey-transparent);flex:1}.custom-radio-group__option:last-child{border:none}.custom-radio-group__option .fake-radio{padding:10px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center;background-color:#f2f3f5;background-color:var(--color-almost-white);font-weight:500;transition:all .3s ease}.custom-radio-group__option .fake-radio--first{border-top-left-radius:100px;border-bottom-left-radius:100px}.custom-radio-group__option .fake-radio--last{border-top-right-radius:100px;border-bottom-right-radius:100px}.custom-radio-group__option .fake-radio span{margin-top:4px}.custom-radio-group__option input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.custom-radio-group__option input:checked~.fake-radio{color:#fff;color:var(--color-white);background-color:#3ba55c;background-color:var(--color-success);transition:all .1s;--svg-custom-color:var(--color-white)}.standard-icon{--svg-custom-color:var(--color-grey-dark)}.horizontal-line{width:100%;height:1px;background-color:rgba(183,186,192,.5);background-color:var(--color-grey-transparent);margin:30px 0}.banner{overflow:hidden}.banner .disclaimer{font-size:12px;margin:0 auto;color:#4f5660;color:var(--color-grey-dark);text-align:center}', ""]), o.exports = t
        },
        341: function(o, t, r) {
            var content = r(342);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("6eb5321a", content, !0, {
                sourceMap: !1
            })
        },
        342: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes floating-animation{0%{margin-top:0;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}25%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;margin-top:-7%}50%{margin-top:0;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}75%{margin-top:7%;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes floating-animation{0%{margin-top:0;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}25%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;margin-top:-7%}50%{margin-top:0;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}75%{margin-top:7%;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@-webkit-keyframes jumping-animation{0%{margin-top:0;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scaleY(1)}5%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;margin-top:25%;transform:scaleY(.8)}15%{transform:scaleY(1)}20%{margin-top:-15%;transform:scaleY(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}25%{margin-top:0;transform:scaleY(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}30%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;margin-top:25%;transform:scaleY(.8)}40%{transform:scaleY(1)}45%{margin-top:-15%;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scaleY(1)}50%{margin-top:0;transform:scaleY(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}55%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;margin-top:25%;transform:scaleY(.8)}65%{transform:scaleY(1)}70%{margin-top:-15%;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scaleY(1)}75%{margin-top:0;transform:scaleX(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}80%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;margin-top:25%;transform:scaleY(.8)}90%{transform:scaleY(1)}95%{margin-top:-15%;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;transform:scaleY(1)}to{margin-top:0;transform:scaleY(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes jumping-animation{0%{margin-top:0;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scaleY(1)}5%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;margin-top:25%;transform:scaleY(.8)}15%{transform:scaleY(1)}20%{margin-top:-15%;transform:scaleY(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}25%{margin-top:0;transform:scaleY(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}30%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;margin-top:25%;transform:scaleY(.8)}40%{transform:scaleY(1)}45%{margin-top:-15%;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scaleY(1)}50%{margin-top:0;transform:scaleY(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}55%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;margin-top:25%;transform:scaleY(.8)}65%{transform:scaleY(1)}70%{margin-top:-15%;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scaleY(1)}75%{margin-top:0;transform:scaleX(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}80%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;margin-top:25%;transform:scaleY(.8)}90%{transform:scaleY(1)}95%{margin-top:-15%;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;transform:scaleY(1)}to{margin-top:0;transform:scaleY(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@-webkit-keyframes spinning-animation{0%{transform:rotate(0deg)}10%{transform:rotate(-10deg)}50%{transform:rotate(730deg)}60%{transform:rotate(2turn)}to{transform:rotate(2turn)}}@keyframes spinning-animation{0%{transform:rotate(0deg)}10%{transform:rotate(-10deg)}50%{transform:rotate(730deg)}60%{transform:rotate(2turn)}to{transform:rotate(2turn)}}@-webkit-keyframes scaling-animation{0%{transform:scale(1)}10%{transform:scale(1)}60%{transform:scale(2)}70%{transform:scale(.75)}75%{transform:scale(1.1)}80%{transform:scale(.9)}85%{transform:scale(1.05)}90%{transform:scale(.97)}}@keyframes scaling-animation{0%{transform:scale(1)}10%{transform:scale(1)}60%{transform:scale(2)}70%{transform:scale(.75)}75%{transform:scale(1.1)}80%{transform:scale(.9)}85%{transform:scale(1.05)}90%{transform:scale(.97)}}@-webkit-keyframes scale-fade-animation{0%{transform:scale(1);opacity:1;-webkit-animation-timing-function:linear;animation-timing-function:linear}60%{transform:scale(3);opacity:0;-webkit-animation-timing-function:linear;animation-timing-function:linear}61%{transform:scale(0);opacity:0;-webkit-animation-timing-function:linear;animation-timing-function:linear}}@keyframes scale-fade-animation{0%{transform:scale(1);opacity:1;-webkit-animation-timing-function:linear;animation-timing-function:linear}60%{transform:scale(3);opacity:0;-webkit-animation-timing-function:linear;animation-timing-function:linear}61%{transform:scale(0);opacity:0;-webkit-animation-timing-function:linear;animation-timing-function:linear}}@-webkit-keyframes spinning-y-axis-animation{50%{transform:rotateY(1turn)}}@keyframes spinning-y-axis-animation{50%{transform:rotateY(1turn)}}@-webkit-keyframes running-around-animation{0%{transform:rotate(0deg);margin-left:0}10%{transform:rotate(-10deg);margin-left:0}20%{transform:rotate(13deg)}45%{transform:rotate(13deg);margin-left:100%;margin-top:0}46%{margin-top:100%;margin-left:100%}47%{margin-left:-100%;margin-top:100%;transform:rotate(13deg)}48%{margin-left:-100%;margin-top:0;transform:rotate(13deg)}68%{transform:rotate(13deg);margin-left:0}78%{transform:rotate(0deg);margin-left:0}}@keyframes running-around-animation{0%{transform:rotate(0deg);margin-left:0}10%{transform:rotate(-10deg);margin-left:0}20%{transform:rotate(13deg)}45%{transform:rotate(13deg);margin-left:100%;margin-top:0}46%{margin-top:100%;margin-left:100%}47%{margin-left:-100%;margin-top:100%;transform:rotate(13deg)}48%{margin-left:-100%;margin-top:0;transform:rotate(13deg)}68%{transform:rotate(13deg);margin-left:0}78%{transform:rotate(0deg);margin-left:0}}@-webkit-keyframes rubber-stretch-animation{0%{transform:scale(1)}20%{transform:scale(.2,1.5)}25%{transform:scale(1.5,.2)}30%{transform:scale(.6,1.3)}35%{transform:scale(1.3,.6)}40%{transform:scale(.7,1.2)}45%{transform:scale(1.2,.7)}50%{transform:scale(.9,1.1)}55%{transform:scale(1.1,.9)}60%{transform:scale(.95,1.05)}65%{transform:scale(1.05,.95)}70%{transform:scale(.98,1.02)}75%{transform:scale(1.02,.98)}80%{transform:scale(1)}}@keyframes rubber-stretch-animation{0%{transform:scale(1)}20%{transform:scale(.2,1.5)}25%{transform:scale(1.5,.2)}30%{transform:scale(.6,1.3)}35%{transform:scale(1.3,.6)}40%{transform:scale(.7,1.2)}45%{transform:scale(1.2,.7)}50%{transform:scale(.9,1.1)}55%{transform:scale(1.1,.9)}60%{transform:scale(.95,1.05)}65%{transform:scale(1.05,.95)}70%{transform:scale(.98,1.02)}75%{transform:scale(1.02,.98)}80%{transform:scale(1)}}@-webkit-keyframes teleport-animation{0%{transform:translate(0);opacity:1}10%{transform:translate(0);opacity:1}20%{transform:translate(0);opacity:0}21%{transform:translate(20%,20%);opacity:0}31%{transform:translate(20%,20%);opacity:1}41%{transform:translate(20%,20%);opacity:1}51%{transform:translate(20%,20%);opacity:0}52%{transform:translate(-20%,-20%);opacity:0}62%{transform:translate(-20%,-20%);opacity:1}72%{transform:translate(-20%,-20%);opacity:1}82%{transform:translate(-20%,-20%);opacity:0}83%{transform:translate(0);opacity:0}93%{transform:translate(0);opacity:1}}@keyframes teleport-animation{0%{transform:translate(0);opacity:1}10%{transform:translate(0);opacity:1}20%{transform:translate(0);opacity:0}21%{transform:translate(20%,20%);opacity:0}31%{transform:translate(20%,20%);opacity:1}41%{transform:translate(20%,20%);opacity:1}51%{transform:translate(20%,20%);opacity:0}52%{transform:translate(-20%,-20%);opacity:0}62%{transform:translate(-20%,-20%);opacity:1}72%{transform:translate(-20%,-20%);opacity:1}82%{transform:translate(-20%,-20%);opacity:0}83%{transform:translate(0);opacity:0}93%{transform:translate(0);opacity:1}}@-webkit-keyframes break-out-animation{0%{transform:translate(0) scale(1)}10%{transform:translate(0);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}20%{transform:translate(12%,12%);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}30%{transform:translate(0);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{transform:translate(-12%,-12%);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{transform:translate(0);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{transform:translate(12%,-12%);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}70%{transform:translate(0);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{transform:translate(-12%,12%);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}90%{transform:translate(0);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes break-out-animation{0%{transform:translate(0) scale(1)}10%{transform:translate(0);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}20%{transform:translate(12%,12%);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}30%{transform:translate(0);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{transform:translate(-12%,-12%);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{transform:translate(0);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{transform:translate(12%,-12%);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}70%{transform:translate(0);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{transform:translate(-12%,12%);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}90%{transform:translate(0);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@-webkit-keyframes shake-dance-animation{0%{transform:skewY(0)}20%{transform:skewY(10deg)}25%{transform:skewY(10deg)}45%{transform:skewY(-10deg)}50%{transform:skewY(-10deg)}60%{transform:skewY(10deg)}70%{transform:skewY(-10deg)}80%{transform:skewY(10deg)}90%{transform:skewY(0deg)}}@keyframes shake-dance-animation{0%{transform:skewY(0)}20%{transform:skewY(10deg)}25%{transform:skewY(10deg)}45%{transform:skewY(-10deg)}50%{transform:skewY(-10deg)}60%{transform:skewY(10deg)}70%{transform:skewY(-10deg)}80%{transform:skewY(10deg)}90%{transform:skewY(0deg)}}@-webkit-keyframes rotate-linear-animation{0%{transform:rotate(0);-webkit-animation-timing-function:linear;animation-timing-function:linear}to{transform:rotate(1turn);-webkit-animation-timing-function:linear;animation-timing-function:linear}}@keyframes rotate-linear-animation{0%{transform:rotate(0);-webkit-animation-timing-function:linear;animation-timing-function:linear}to{transform:rotate(1turn);-webkit-animation-timing-function:linear;animation-timing-function:linear}}", ""]), o.exports = t
        },
        343: function(o, t, r) {
            var content = r(344);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("3d191af9", content, !0, {
                sourceMap: !1
            })
        },
        344: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}.svg-animate-icon-dims{width:23px;height:23px}.svg-auto-icon-dims{width:33px;height:14px}.svg-background-type-full-dims{width:18px;height:18px}.svg-background-type-round-dims{width:21px;height:21px}.svg-background-type-transparent-dims{width:18px;height:18px}.svg-break-out-animation-classic-dims,.svg-break-out-animation-dims{width:129px;height:128px}.svg-buy-me-a-coffee-logo-dims{width:229px;height:50px}.svg-check-pattern-dims{width:128px;height:128px}.svg-chevron-left-dims{width:12px;height:15px}.svg-close-dims{width:19px;height:19px}.svg-cog-wheel-dims{width:21px;height:21px}.svg-coin-dims{width:40px;height:40px}.svg-customize-icon-dims{width:23px;height:23px}.svg-download-dims{width:29px;height:29px}.svg-earth-effect-dims{width:128px;height:128px}.svg-effect-order-bottom-classic-dims,.svg-effect-order-bottom-dims,.svg-effect-order-top-classic-dims,.svg-effect-order-top-dims{width:31px;height:32px}.svg-expanding-circles-dims,.svg-fill-up-effect-dims{width:128px;height:128px}.svg-floating-animation-dims{width:129px;height:129px}.svg-floating-animation-classic-dims{width:129px;height:128px}.svg-hearts-effect-dims{width:128px;height:128px}.svg-jumping-animation-dims{width:128px;height:129px}.svg-jumping-animation-classic-dims{width:128px;height:128px}.svg-mode-switcher-classic-dims,.svg-mode-switcher-modern-dims{width:19px;height:18px}.svg-music-notes-dims{width:128px;height:128px}.svg-nerdordie-logo-dims{width:170px;height:40px}.svg-nothing-dims{width:22px;height:22px}.svg-paypal-dims,.svg-paypal-white-dims{width:185px;height:33px}.svg-pipette-dims{width:21px;height:22px}.svg-rain-sky-dims{width:128px;height:128px}.svg-random-dims{width:26px;height:25px}.svg-random-small-dims{width:23px;height:22px}.svg-rotate-linear-animation-classic-dims,.svg-rotate-linear-animation-dims,.svg-rotating-stripes-dims{width:128px;height:128px}.svg-rubber-stretch-animation-classic-dims,.svg-rubber-stretch-animation-dims{width:129px;height:128px}.svg-running-around-animation-dims{width:128px;height:129px}.svg-running-around-animation-classic-dims{width:128px;height:128px}.svg-sale-coin-dims{width:40px;height:40px}.svg-sawblade-effect-dims{width:128px;height:128px}.svg-scale-fade-animation-dims{width:128px;height:129px}.svg-scale-fade-animation-classic-dims{width:128px;height:128px}.svg-scaling-animation-dims{width:128px;height:129px}.svg-scaling-animation-classic-dims,.svg-shake-dance-animation-classic-dims,.svg-shake-dance-animation-dims{width:128px;height:128px}.svg-share-dims{width:24px;height:23px}.svg-shiny-effect-dims,.svg-sparkle-effect-dims{width:128px;height:128px}.svg-spinning-animation-dims{width:128px;height:129px}.svg-spinning-animation-classic-dims{width:128px;height:128px}.svg-spinning-y-axis-animation-dims{width:128px;height:129px}.svg-spinning-y-axis-animation-classic-dims,.svg-star-sky-dims,.svg-teleport-animation-classic-dims,.svg-teleport-animation-dims{width:128px;height:128px}.svg-theme-switcher-moon-dims{width:15px;height:16px}.svg-theme-switcher-sun-dims{width:19px;height:20px}.svg-three-dots-dims{width:23px;height:6px}.svg-three-vertical-dots-dims{width:6px;height:21px}.svg-thumbs-up-dims{width:157px;height:157px}.svg-upload-dims{width:25px;height:25px}", ""]), o.exports = t
        },
        345: function(o, t, r) {
            var content = r(346);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("662d8cfe", content, !0, {
                sourceMap: !1
            })
        },
        346: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}.svg-8-bit-shades-dims{width:128px;height:129px}.svg-alien-dims,.svg-american-indian-dims,.svg-angel-dims{width:128px;height:128px}.svg-angry-dims{width:129px;height:129px}.svg-angry-brows-dims,.svg-annoyed-dims{width:128px;height:129px}.svg-base-eyes-dims,.svg-base-shape-dims,.svg-base-upside-down-dims,.svg-bunny-dims,.svg-cap-dims,.svg-cat-dims{width:128px;height:128px}.svg-cat-eyes-dims,.svg-chubby-dims{width:128px;height:129px}.svg-chubby-shape-dims{width:128px;height:128px}.svg-crazy-eyes-dims{width:129px;height:129px}.svg-crown-dims{width:128px;height:128px}.svg-cute-dims,.svg-cute-downwards-dims,.svg-dead-dims{width:128px;height:129px}.svg-devil-dims{width:128px;height:128px}.svg-evil-eyes-dims{width:128px;height:129px}.svg-face-mask-dims{width:128px;height:128px}.svg-female-lashes-dims,.svg-glasses-1-dims{width:129px;height:129px}.svg-glasses-2-dims{width:128px;height:129px}.svg-hair-1-dims,.svg-hair-2-dims,.svg-hanging-ears-dims,.svg-hannibal-dims{width:128px;height:128px}.svg-happy-dims{width:128px;height:129px}.svg-headphones-dims{width:128px;height:128px}.svg-heart-eyes-dims{width:128px;height:129px}.svg-knit-cap-dims{width:128px;height:128px}.svg-line-eyes-dims,.svg-line-eyes-happy-dims{width:128px;height:129px}.svg-mohawk-dims{width:128px;height:128px}.svg-mono-brow-dims{width:128px;height:129px}.svg-monocle-dims,.svg-mouse-dims,.svg-mustache-dims,.svg-mustache-top-hat-dims,.svg-ninja-band-dims,.svg-ribbon-dims{width:128px;height:128px}.svg-sad-dims{width:129px;height:129px}.svg-samurai-dims{width:128px;height:128px}.svg-scared-dims{width:128px;height:129px}.svg-scarred-laugh-dims{width:128px;height:128px}.svg-sceptical-dims{width:129px;height:129px}.svg-single-eye-dims,.svg-spider-eyes-dims,.svg-squinting-dims,.svg-star-eyes-dims,.svg-sunglasses-dims,.svg-swirly-eyes-dims{width:128px;height:129px}.svg-thick-dims,.svg-thick-upside-down-dims{width:128px;height:128px}.svg-third-eye-dims{width:128px;height:129px}.svg-top-hat-dims,.svg-tounge-shape-dims,.svg-triangle-hair-dims,.svg-vampire-dims,.svg-vampire-ears-dims{width:128px;height:128px}.svg-wink-dims{width:129px;height:128px}", ""]), o.exports = t
        },
        347: function(o, t, r) {
            var content = r(348);
            "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, r(5).default)("330f9c86", content, !0, {
                sourceMap: !1
            })
        },
        348: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}.svg-8-bit-shades-dims,.svg-alien-dims,.svg-american-indian-dims,.svg-angel-dims,.svg-angry-brows-dims,.svg-angry-dims,.svg-annoyed-dims,.svg-base-eyes-dims,.svg-base-shape-dims,.svg-base-upside-down-dims{width:128px;height:128px}.svg-bunny-dims{width:129px;height:128px}.svg-cap-dims,.svg-cat-dims,.svg-cat-eyes-dims,.svg-chubby-dims{width:128px;height:128px}.svg-chubby-shape-dims{width:128px;height:129px}.svg-crazy-eyes-dims{width:128px;height:128px}.svg-crown-dims{width:129px;height:129px}.svg-cute-dims,.svg-cute-downwards-dims,.svg-dead-dims,.svg-devil-dims,.svg-evil-eyes-dims{width:128px;height:128px}.svg-face-mask-dims{width:129px;height:128px}.svg-female-lashes-dims,.svg-glasses-1-dims,.svg-glasses-2-dims,.svg-hair-1-dims,.svg-hair-2-dims,.svg-hanging-ears-dims{width:128px;height:128px}.svg-hannibal-dims{width:129px;height:128px}.svg-happy-dims{width:128px;height:128px}.svg-headphones-dims{width:129px;height:129px}.svg-heart-eyes-dims,.svg-knit-cap-dims,.svg-line-eyes-dims,.svg-line-eyes-happy-dims,.svg-mohawk-dims,.svg-mono-brow-dims{width:128px;height:128px}.svg-monocle-dims{width:129px;height:128px}.svg-mouse-dims,.svg-mustache-dims{width:128px;height:128px}.svg-mustache-top-hat-dims,.svg-ninja-band-dims{width:129px;height:128px}.svg-ribbon-dims,.svg-sad-dims{width:128px;height:128px}.svg-samurai-dims,.svg-scared-dims,.svg-scarred-laugh-dims{width:129px;height:128px}.svg-sceptical-dims{width:128px;height:128px}.svg-single-eye-dims{width:129px;height:128px}.svg-spider-eyes-dims,.svg-squinting-dims,.svg-star-eyes-dims,.svg-sunglasses-dims{width:128px;height:128px}.svg-swirly-eyes-dims{width:129px;height:128px}.svg-thick-dims,.svg-thick-upside-down-dims,.svg-third-eye-dims,.svg-top-hat-dims{width:128px;height:128px}.svg-tounge-shape-dims,.svg-triangle-hair-dims{width:128px;height:129px}.svg-vampire-dims,.svg-vampire-ears-dims{width:129px;height:129px}.svg-wink-dims{width:129px;height:128px}", ""]), o.exports = t
        },
        349: function(o, t, r) {
            "use strict";
            r(199)
        },
        350: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ".default-layout{background-color:var(--color-white);color:var(--color-almost-black);transition:all .3s}", ""]), o.exports = t
        },
        351: function(o, t, r) {
            "use strict";
            r.r(t), r.d(t, "state", (function() {
                return e
            })), r.d(t, "mutations", (function() {
                return n
            }));
            var e = function() {
                    return {
                        isGeneratingGif: !1,
                        generatingGifProgress: 0,
                        cancelGifGeneration: !1,
                        downloadDimensions: 512,
                        gifDownloadDimensions: 128,
                        backgroundType: "full",
                        isAnimationState: !1
                    }
                },
                n = {
                    setIsGeneratingGif: function(o, t) {
                        o.isGeneratingGif = t
                    },
                    setGeneratingGifProgress: function(o, t) {
                        o.generatingGifProgress = t
                    },
                    setCancelGifGeneration: function(o, t) {
                        o.cancelGifGeneration = t
                    },
                    setDownloadDimensions: function(o, t) {
                        o.downloadDimensions = t
                    },
                    setGifDownloadDimensions: function(o, t) {
                        o.gifDownloadDimensions = t
                    },
                    setBackgroundType: function(o, t) {
                        o.backgroundType = t
                    },
                    setIsAnimationState: function(o, t) {
                        o.isAnimationState = t
                    }
                }
        },
        352: function(o, t, r) {
            "use strict";
            r.r(t), r.d(t, "state", (function() {
                return e
            })), r.d(t, "mutations", (function() {
                return n
            }));
            var e = function() {
                    return {
                        colorBackground: void 0,
                        colorForeground: void 0,
                        customEyeColor: void 0,
                        outsideShape: void 0,
                        insideShape: void 0,
                        bodyAnimation: void 0,
                        effectAnimation: void 0,
                        customEffectColor: void 0,
                        customEffectOrder: void 0,
                        shapeFileName: void 0,
                        shapeFileObjectUrl: void 0,
                        shapeFileScale: 1,
                        backgroundFileName: void 0,
                        backgroundFileObjectUrl: void 0,
                        backgroundFileScale: 1,
                        animationLength: 3
                    }
                },
                n = {
                    setColorBackground: function(o, t) {
                        o.colorBackground = t
                    },
                    setColorForeground: function(o, t) {
                        o.colorForeground = t
                    },
                    setCustomEyeColor: function(o, t) {
                        o.customEyeColor = t
                    },
                    setOutsideShape: function(o, t) {
                        o.outsideShape = t
                    },
                    setInsideShape: function(o, t) {
                        o.insideShape = t
                    },
                    setBodyAnimation: function(o, t) {
                        o.bodyAnimation = t
                    },
                    setEffectAnimation: function(o, t) {
                        o.effectAnimation = t
                    },
                    setCustomEffectColor: function(o, t) {
                        o.customEffectColor = t
                    },
                    setCustomEffectOrder: function(o, t) {
                        o.customEffectOrder = t
                    },
                    setShapeFileName: function(o, t) {
                        o.shapeFileName = t
                    },
                    setShapeFileObjectUrl: function(o, t) {
                        o.shapeFileObjectUrl = t
                    },
                    setShapeFileScale: function(o, t) {
                        o.shapeFileScale = t
                    },
                    setBackgroundFileName: function(o, t) {
                        o.backgroundFileName = t
                    },
                    setBackgroundFileObjectUrl: function(o, t) {
                        o.backgroundFileObjectUrl = t
                    },
                    setBackgroundFileScale: function(o, t) {
                        o.backgroundFileScale = t
                    },
                    setAnimationLength: function(o, t) {
                        o.animationLength = t
                    }
                }
        },
        353: function(o, t, r) {
            "use strict";
            r.r(t), r.d(t, "state", (function() {
                return e
            })), r.d(t, "mutations", (function() {
                return n
            }));
            var e = function() {
                    return {
                        darkMode: !0,
                        classicMode: !1,
                        classicModeTooltipSeen: !1,
                        timesVisited: 0
                    }
                },
                n = {
                    toggleDarkMode: function(o) {
                        o.darkMode = !o.darkMode
                    },
                    toggleClassicMode: function(o) {
                        o.classicMode = !o.classicMode
                    },
                    setClassicModeTooltipSeen: function(o, t) {
                        o.classicModeTooltipSeen = t
                    },
                    incrementTimesVisited: function(o) {
                        o.timesVisited++
                    }
                }
        },
        357: function(o, t) {},
        359: function(o, t) {},
        369: function(o, t) {},
        371: function(o, t) {},
        396: function(o, t) {},
        397: function(o, t) {},
        402: function(o, t) {},
        404: function(o, t) {},
        411: function(o, t) {},
        430: function(o, t) {},
        466: function(o, t, r) {
            "use strict";
            r(260)
        },
        467: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, "[data-v-fa06f1be]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-fa06f1be]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-fa06f1be]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-fa06f1be]{--svg-custom-transition:all .3s}.shiny-effect-wrapper[data-v-fa06f1be]{position:absolute;width:100%;height:100%;overflow:hidden}.shiny-effect-animation[data-v-fa06f1be]{position:relative;display:block;width:142%;height:auto;top:-21%;left:-21%;opacity:.4;transform:translate(100%,100%)}", ""]), o.exports = t
        },
        468: function(o, t, r) {
            "use strict";
            r(261)
        },
        469: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes shine{0%{transform:translate(100%,100%)}10%{transform:translate(100%,100%);opacity:.8}50%{transform:translate(-100%,-100%);opacity:0}51%{transform:translate(-100%,100%)}52%{transform:translate(100%,100%)}53%{transform:translate(100%,100%);opacity:.8}93%{transform:translate(-100%,-100%);opacity:0}94%{transform:translate(-100%,100%)}95%{transform:translate(100%,100%)}}@keyframes shine{0%{transform:translate(100%,100%)}10%{transform:translate(100%,100%);opacity:.8}50%{transform:translate(-100%,-100%);opacity:0}51%{transform:translate(-100%,100%)}52%{transform:translate(100%,100%)}53%{transform:translate(100%,100%);opacity:.8}93%{transform:translate(-100%,-100%);opacity:0}94%{transform:translate(-100%,100%)}95%{transform:translate(100%,100%)}}", ""]), o.exports = t
        },
        470: function(o, t, r) {
            "use strict";
            r(262)
        },
        471: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, "[data-v-e8f20812]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-e8f20812]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-e8f20812]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-e8f20812]{--svg-custom-transition:all .3s}.rotating-stripes-wrapper[data-v-e8f20812]{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.rotating-stripes-animation[data-v-e8f20812]{position:relative;display:block;width:200%;height:200%;top:-50%;left:-50%}", ""]), o.exports = t
        },
        472: function(o, t, r) {
            "use strict";
            r(263)
        },
        473: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes rotate-stripes{0%{transform:rotate(0deg);opacity:0}50%{opacity:.7}to{transform:rotate(1turn);opacity:0}}@keyframes rotate-stripes{0%{transform:rotate(0deg);opacity:0}50%{opacity:.7}to{transform:rotate(1turn);opacity:0}}", ""]), o.exports = t
        },
        474: function(o, t, r) {
            "use strict";
            r(264)
        },
        475: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, "[data-v-71364029]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-71364029]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-71364029]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-71364029]{--svg-custom-transition:all .3s}.sparkle-wrapper[data-v-71364029]{width:100%;height:100%;overflow:hidden}.sparkle-wrapper[data-v-71364029],.star[data-v-71364029]{position:absolute;top:0;left:0}.sparkle-animation[data-v-71364029]{position:relative;width:100%;height:100%}.sparkle-animation svg[data-v-71364029]{display:block;width:100%;height:auto}", ""]), o.exports = t
        },
        476: function(o, t, r) {
            "use strict";
            r(265)
        },
        477: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes star-1{0%{opacity:0}10%{opacity:1}20%{opacity:0}to{opacity:0}}@keyframes star-1{0%{opacity:0}10%{opacity:1}20%{opacity:0}to{opacity:0}}@-webkit-keyframes star-2{0%{opacity:0}20%{opacity:0}30%{opacity:1}40%{opacity:0}60%{opacity:0}70%{opacity:1}80%{opacity:0}to{opacity:0}}@keyframes star-2{0%{opacity:0}20%{opacity:0}30%{opacity:1}40%{opacity:0}60%{opacity:0}70%{opacity:1}80%{opacity:0}to{opacity:0}}@-webkit-keyframes star-3{0%{opacity:0}40%{opacity:0}50%{opacity:1}60%{opacity:0}to{opacity:0}}@keyframes star-3{0%{opacity:0}40%{opacity:0}50%{opacity:1}60%{opacity:0}to{opacity:0}}", ""]), o.exports = t
        },
        478: function(o, t, r) {
            "use strict";
            r(266)
        },
        479: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, "[data-v-0e717c64]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-0e717c64]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-0e717c64]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-0e717c64]{--svg-custom-transition:all .3s}.wrapper[data-v-0e717c64]{position:absolute;width:100%;height:100%;overflow:hidden}.animation[data-v-0e717c64]{position:relative}.animation svg[data-v-0e717c64]{display:block;width:100%;height:auto}#offset-stars[data-v-0e717c64]{transform:translateX(-100%)}#initial-stars[data-v-0e717c64],#offset-stars[data-v-0e717c64]{position:absolute}", ""]), o.exports = t
        },
        480: function(o, t, r) {
            "use strict";
            r(267)
        },
        481: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes move-fade{0%{transform:translateX(0);opacity:0}10%{opacity:.6}90%{opacity:.6}to{transform:translateX(100%);opacity:0}}@keyframes move-fade{0%{transform:translateX(0);opacity:0}10%{opacity:.6}90%{opacity:.6}to{transform:translateX(100%);opacity:0}}", ""]), o.exports = t
        },
        482: function(o, t, r) {
            "use strict";
            r(268)
        },
        483: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, "[data-v-5ce963db]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-5ce963db]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-5ce963db]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-5ce963db]{--svg-custom-transition:all .3s}.wrapper[data-v-5ce963db]{position:absolute;width:100%;height:100%;overflow:hidden}.animation[data-v-5ce963db]{position:relative;height:100%}.animation svg[data-v-5ce963db]{display:block;width:100%;height:auto}#offset-top-left[data-v-5ce963db]{transform:translate(-100%,-100%);position:absolute}#offset-bottom-left[data-v-5ce963db]{transform:translate(-100%);position:absolute}#offset-top-right[data-v-5ce963db]{transform:translateY(-100%);position:absolute}#initial-rain[data-v-5ce963db]{position:absolute}", ""]), o.exports = t
        },
        484: function(o, t, r) {
            "use strict";
            r(269)
        },
        485: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes move-fade{0%{transform:translate(0);opacity:0}10%{opacity:.9}90%{opacity:.9}to{transform:translate(100%,100%);opacity:0}}@keyframes move-fade{0%{transform:translate(0);opacity:0}10%{opacity:.9}90%{opacity:.9}to{transform:translate(100%,100%);opacity:0}}", ""]), o.exports = t
        },
        486: function(o, t, r) {
            "use strict";
            r(270)
        },
        487: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, "[data-v-27472b88]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-27472b88]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-27472b88]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-27472b88]{--svg-custom-transition:all .3s}.wrapper[data-v-27472b88]{position:absolute;overflow:hidden}.animation[data-v-27472b88],.wrapper[data-v-27472b88]{width:100%;height:100%}.animation[data-v-27472b88]{position:relative}.animation svg[data-v-27472b88]{display:block;width:142%;height:auto}.animation #sawblade[data-v-27472b88]{position:relative;left:-21%;top:-21%}.animation #surrounder[data-v-27472b88]{position:absolute;top:0;left:0}#offset-stars[data-v-27472b88]{transform:translateX(-100%)}#initial-stars[data-v-27472b88],#offset-stars[data-v-27472b88]{position:absolute}", ""]), o.exports = t
        },
        488: function(o, t, r) {
            "use strict";
            r(271)
        },
        489: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes rotate-animation{0%{transform:rotate(0deg) scale(1.2);opacity:0}10%{transform:rotate(18deg) scale(1.01);opacity:1}90%{transform:rotate(168deg) scale(1.01);opacity:1}to{transform:rotate(180deg) scale(1.2);opacity:0}}@keyframes rotate-animation{0%{transform:rotate(0deg) scale(1.2);opacity:0}10%{transform:rotate(18deg) scale(1.01);opacity:1}90%{transform:rotate(168deg) scale(1.01);opacity:1}to{transform:rotate(180deg) scale(1.2);opacity:0}}", ""]), o.exports = t
        },
        490: function(o, t, r) {
            "use strict";
            r(272)
        },
        491: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, "[data-v-07e78634]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-07e78634]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-07e78634]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-07e78634]{--svg-custom-transition:all .3s}.expanding-circles-wrapper[data-v-07e78634]{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.expanding-circle[data-v-07e78634]{position:absolute;top:0;left:0;display:block;width:200%;height:200%;top:-50%;left:-50%}.expanding-circles-1[data-v-07e78634],.expanding-circles-2[data-v-07e78634],.expanding-circles-3[data-v-07e78634]{transform:scale(0)}", ""]), o.exports = t
        },
        492: function(o, t, r) {
            "use strict";
            r(273)
        },
        493: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes expanding-circles-1{0%{transform:scale(0);opacity:.8}70%{transform:scale(.7);opacity:0}to{transform:scale(.7);opacity:0}}@keyframes expanding-circles-1{0%{transform:scale(0);opacity:.8}70%{transform:scale(.7);opacity:0}to{transform:scale(.7);opacity:0}}@-webkit-keyframes expanding-circles-2{0%{transform:scale(0);opacity:.8}10%{transform:scale(0);opacity:.8}80%{transform:scale(.7);opacity:0}to{transform:scale(.7);opacity:0}}@keyframes expanding-circles-2{0%{transform:scale(0);opacity:.8}10%{transform:scale(0);opacity:.8}80%{transform:scale(.7);opacity:0}to{transform:scale(.7);opacity:0}}@-webkit-keyframes expanding-circles-3{0%{transform:scale(0);opacity:.8}20%{transform:scale(0);opacity:.8}90%{transform:scale(.7);opacity:0}to{transform:scale(.7);opacity:0}}@keyframes expanding-circles-3{0%{transform:scale(0);opacity:.8}20%{transform:scale(0);opacity:.8}90%{transform:scale(.7);opacity:0}to{transform:scale(.7);opacity:0}}", ""]), o.exports = t
        },
        494: function(o, t, r) {
            "use strict";
            r(274)
        },
        495: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, "[data-v-ca5c3a06]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-ca5c3a06]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-ca5c3a06]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-ca5c3a06]{--svg-custom-transition:all .3s}.wrapper[data-v-ca5c3a06]{overflow:hidden}.wrapper[data-v-ca5c3a06],.wrapper .stripes[data-v-ca5c3a06]{position:absolute;width:100%;height:100%}.wrapper .stripes[data-v-ca5c3a06]{left:0;top:0}", ""]), o.exports = t
        },
        496: function(o, t, r) {
            "use strict";
            r(275)
        },
        497: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes move-in-horizontal{0%{margin-left:-100%;opacity:0}20%{margin-left:0;opacity:.5}70%{margin-left:0;opacity:.5}to{margin-left:-100%;opacity:0}}@keyframes move-in-horizontal{0%{margin-left:-100%;opacity:0}20%{margin-left:0;opacity:.5}70%{margin-left:0;opacity:.5}to{margin-left:-100%;opacity:0}}@-webkit-keyframes move-in-vertical{0%{margin-top:-100%;opacity:0}10%{margin-top:-100%;opacity:0}30%{margin-top:0;opacity:.5}80%{margin-top:0;opacity:.5}to{margin-top:-100%;opacity:0}}@keyframes move-in-vertical{0%{margin-top:-100%;opacity:0}10%{margin-top:-100%;opacity:0}30%{margin-top:0;opacity:.5}80%{margin-top:0;opacity:.5}to{margin-top:-100%;opacity:0}}", ""]), o.exports = t
        },
        498: function(o, t, r) {
            "use strict";
            r(276)
        },
        499: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, "[data-v-020cd9e4]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-020cd9e4]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-020cd9e4]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-020cd9e4]{--svg-custom-transition:all .3s}.wrapper[data-v-020cd9e4]{height:100%;overflow:hidden}.wrapper[data-v-020cd9e4],.wrapper svg[data-v-020cd9e4]{position:absolute;width:100%}.wrapper svg[data-v-020cd9e4]{top:0;left:0;display:block;height:auto}#stream[data-v-020cd9e4]{margin-top:-100%}#fill-up[data-v-020cd9e4]{margin-top:100%}", ""]), o.exports = t
        },
        500: function(o, t, r) {
            "use strict";
            r(277)
        },
        501: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes stream-down{0%{margin-top:-100%;opacity:1}10%{margin-top:0;opacity:1}79%{opacity:1}80%{opacity:0}to{margin-top:0;opacity:0}}@keyframes stream-down{0%{margin-top:-100%;opacity:1}10%{margin-top:0;opacity:1}79%{opacity:1}80%{opacity:0}to{margin-top:0;opacity:0}}@-webkit-keyframes fill-up{0%{margin-top:100%}10%{margin-top:100%}80%{margin-top:0}to{margin-top:100%}}@keyframes fill-up{0%{margin-top:100%}10%{margin-top:100%}80%{margin-top:0}to{margin-top:100%}}", ""]), o.exports = t
        },
        502: function(o, t, r) {
            "use strict";
            r(278)
        },
        503: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, "[data-v-f280d9fa]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-f280d9fa]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-f280d9fa]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-f280d9fa]{--svg-custom-transition:all .3s}.wrapper[data-v-f280d9fa]{position:absolute;width:100%;height:100%;overflow:hidden;opacity:.7}.wrapper svg[data-v-f280d9fa]{position:absolute;top:0;left:0;display:block;width:250%;height:auto}", ""]), o.exports = t
        },
        504: function(o, t, r) {
            "use strict";
            r(279)
        },
        505: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes move-left-right{0%{opacity:0;margin-left:-125%}10%{opacity:1}90%{opacity:1}to{margin-left:0;opacity:0}}@keyframes move-left-right{0%{opacity:0;margin-left:-125%}10%{opacity:1}90%{opacity:1}to{margin-left:0;opacity:0}}", ""]), o.exports = t
        },
        506: function(o, t, r) {
            "use strict";
            r(280)
        },
        507: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, "[data-v-6f204442]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-6f204442]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-6f204442]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-6f204442]{--svg-custom-transition:all .3s}.wrapper[data-v-6f204442]{width:100%;height:100%;overflow:hidden}.note[data-v-6f204442],.wrapper[data-v-6f204442]{position:absolute;top:0;left:0}.animation[data-v-6f204442]{position:relative;width:100%;height:100%}.animation svg[data-v-6f204442]{display:block;width:100%;height:auto}", ""]), o.exports = t
        },
        508: function(o, t, r) {
            "use strict";
            r(281)
        },
        509: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes note-1{0%{opacity:0;transform:translateY(10%)}10%{opacity:1;transform:translateY(0)}30%{opacity:0;transform:translateY(0)}to{opacity:0}}@keyframes note-1{0%{opacity:0;transform:translateY(10%)}10%{opacity:1;transform:translateY(0)}30%{opacity:0;transform:translateY(0)}to{opacity:0}}@-webkit-keyframes note-2{0%{opacity:0}20%{opacity:0;transform:translateY(10%)}30%{opacity:1;transform:translateY(0)}50%{opacity:0;transform:translateY(0)}60%{opacity:0;transform:translateY(10%)}70%{opacity:1;transform:translateY(0)}90%{opacity:0;transform:translateY(0)}to{opacity:0}}@keyframes note-2{0%{opacity:0}20%{opacity:0;transform:translateY(10%)}30%{opacity:1;transform:translateY(0)}50%{opacity:0;transform:translateY(0)}60%{opacity:0;transform:translateY(10%)}70%{opacity:1;transform:translateY(0)}90%{opacity:0;transform:translateY(0)}to{opacity:0}}@-webkit-keyframes note-3{0%{opacity:0}40%{opacity:0;transform:translateY(10%)}50%{opacity:1;transform:translateY(0)}70%{opacity:0;transform:translateY(0)}to{opacity:0}}@keyframes note-3{0%{opacity:0}40%{opacity:0;transform:translateY(10%)}50%{opacity:1;transform:translateY(0)}70%{opacity:0;transform:translateY(0)}to{opacity:0}}", ""]), o.exports = t
        },
        510: function(o, t, r) {
            "use strict";
            r(282)
        },
        511: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, "[data-v-31e1b96d]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-31e1b96d]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-31e1b96d]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-31e1b96d]{--svg-custom-transition:all .3s}.wrapper[data-v-31e1b96d]{width:100%;height:100%;overflow:hidden}.heart[data-v-31e1b96d],.wrapper[data-v-31e1b96d]{position:absolute;top:0;left:0}.animation[data-v-31e1b96d]{position:relative;width:100%;height:100%}.animation svg[data-v-31e1b96d]{display:block;width:100%;height:auto}", ""]), o.exports = t
        },
        512: function(o, t, r) {
            "use strict";
            r(283)
        },
        513: function(o, t, r) {
            (t = r(4)(!1)).push([o.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}@-webkit-keyframes heart-1{0%{opacity:0;transform:translateY(10%)}20%{opacity:1}40%{opacity:0;transform:translateY(-10%)}to{opacity:0}}@keyframes heart-1{0%{opacity:0;transform:translateY(10%)}20%{opacity:1}40%{opacity:0;transform:translateY(-10%)}to{opacity:0}}@-webkit-keyframes heart-2{0%{opacity:0}20%{opacity:0;transform:translateY(10%)}40%{opacity:1}60%{opacity:0;transform:translateY(-10%)}to{opacity:0;transform:translateY(10%)}}@keyframes heart-2{0%{opacity:0}20%{opacity:0;transform:translateY(10%)}40%{opacity:1}60%{opacity:0;transform:translateY(-10%)}to{opacity:0;transform:translateY(10%)}}@-webkit-keyframes heart-3{0%{opacity:0}40%{opacity:0;transform:translateY(10%)}60%{opacity:1}90%{opacity:0;transform:translateY(-10%)}to{opacity:0}}@keyframes heart-3{0%{opacity:0}40%{opacity:0;transform:translateY(10%)}60%{opacity:1}90%{opacity:0;transform:translateY(-10%)}to{opacity:0}}", ""]), o.exports = t
        }
    },
    [
        [294, 4, 1, 5]
    ]
]);