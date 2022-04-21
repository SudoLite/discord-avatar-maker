(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], Array(520).concat([function(t, e, o) {
        "use strict";
        o.r(e);
        var l = {
                props: {
                    name: {
                        type: String,
                        default: "close"
                    },
                    size: {
                        type: String,
                        default: void 0
                    },
                    isShape: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    isClassicMode: function() {
                        return this.$store.state.localStorage.classicMode
                    },
                    spritePath: function() {
                        return this.isShape ? this.isClassicMode ? o(791) : o(792) : o(790)
                    }
                }
            },
            n = o(6),
            component = Object(n.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return t.size ? o("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t.size,
                        height: t.size
                    }
                }, [o("use", {
                    staticStyle: {
                        transition: ".3s all"
                    },
                    attrs: {
                        href: t.spritePath + "#" + t.name
                    }
                })]) : o("svg", {
                    class: "svg-" + t.name + "-dims",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [o("use", {
                    staticStyle: {
                        transition: ".3s all"
                    },
                    attrs: {
                        href: t.spritePath + "#" + t.name
                    }
                })])
            }), [], !1, null, "64030ab3", null);
        e.default = component.exports
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = o(520),
            n = o(525),
            r = {
                name: "SelectableItem",
                components: {
                    ChameleonIcon: l.default,
                    EffectWrapper: n.default
                },
                props: {
                    type: {
                        type: String,
                        default: "color"
                    },
                    selected: {
                        type: Boolean,
                        default: !1
                    },
                    color: {
                        type: String,
                        default: "#000"
                    },
                    shape: {
                        type: Object,
                        default: void 0
                    },
                    animation: {
                        type: Object,
                        default: void 0
                    },
                    showCloseIcon: {
                        type: Boolean,
                        default: !1
                    },
                    iconName: {
                        type: String,
                        default: ""
                    }
                },
                computed: {
                    animationLength: function() {
                        return this.$store.state.customization.animationLength
                    },
                    isClassicMode: function() {
                        return this.$store.state.localStorage.classicMode
                    }
                }
            },
            c = (o(799), o(6)),
            component = Object(c.a)(r, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "selectable-item"
                }, [t.selected ? o("div", {
                    staticClass: "selection-ring"
                }) : t._e(), t._v(" "), "color" === t.type ? o("div", {
                    staticClass: "selectable-item__inner",
                    style: "background-color: " + t.color + ";"
                }) : "outside-shape" === t.type ? o("div", {
                    staticClass: "selectable-item__inner outside-shape"
                }, [o("chameleon-icon", {
                    staticClass: "svg-shape",
                    attrs: {
                        name: t.shape.name,
                        "is-shape": !0
                    }
                })], 1) : "inside-shape" === t.type ? o("div", {
                    staticClass: "selectable-item__inner inside-shape"
                }, [o("chameleon-icon", {
                    staticClass: "svg-shape",
                    attrs: {
                        name: t.shape.name,
                        "is-shape": !0
                    }
                })], 1) : "colorpicker" === t.type ? o("div", {
                    staticClass: "selectable-item__inner icon-select",
                    style: "background-color: " + t.color + ";"
                }, [t.showCloseIcon ? o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "close"
                    }
                }) : o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "pipette"
                    }
                })], 1) : "nothing" === t.type ? o("div", {
                    staticClass: "selectable-item__inner icon-select"
                }, [o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "nothing"
                    }
                })], 1) : "icon" === t.type ? o("div", {
                    staticClass: "selectable-item__inner icon-select"
                }, [o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: t.iconName
                    }
                })], 1) : "fake-shape" === t.type ? o("div", {
                    staticClass: "selectable-item__inner outside-shape"
                }, [o("chameleon-icon", {
                    staticClass: "svg-shape",
                    attrs: {
                        name: t.isClassicMode ? t.iconName + "-classic" : t.iconName
                    }
                })], 1) : "upload" === t.type ? o("div", {
                    staticClass: "selectable-item__inner icon-select"
                }, [t.showCloseIcon ? o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "close"
                    }
                }) : o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "upload"
                    }
                })], 1) : "body-animation" === t.type ? o("div", {
                    staticClass: "selectable-item__inner animation"
                }, [o("div", {
                    staticClass: "animation-wrapper"
                }, [o("chameleon-icon", {
                    staticClass: "svg-shape animation-icon",
                    attrs: {
                        name: t.isClassicMode ? t.animation.name + "-classic" : t.animation.name
                    }
                }), t._v(" "), o("chameleon-icon", {
                    staticClass: "svg-shape animation-moving",
                    style: "animation: " + t.animationLength + "s " + t.animation.name + " infinite;",
                    attrs: {
                        name: "base-shape",
                        "is-shape": !0
                    }
                })], 1)]) : "effect-animation" === t.type ? o("div", {
                    staticClass: "selectable-item__inner animation"
                }, [o("chameleon-icon", {
                    staticClass: "svg-shape animation-icon",
                    attrs: {
                        name: t.animation.name
                    }
                }), t._v(" "), o("div", {
                    staticClass: "animation-wrapper animation-moving"
                }, [o("effect-wrapper", {
                    attrs: {
                        "component-name": t.animation.componentName
                    }
                })], 1)], 1) : t._e()])
            }), [], !1, null, "58bd003e", null);
        e.default = component.exports;
        installComponents(component, {
            ChameleonIcon: o(520).default,
            EffectWrapper: o(525).default
        })
    }, , function(t, e, o) {
        t.exports = o.p + "img/discord-avatar-maker-logo.12acf34.gif"
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(59), o(58), o(61);
        var l = {
                name: "SvgWrapper",
                props: {
                    name: {
                        type: String,
                        default: void 0
                    },
                    color: {
                        type: String,
                        default: void 0
                    },
                    size: {
                        type: String,
                        default: "128"
                    },
                    clipPath: {
                        type: String,
                        default: void 0
                    },
                    useClipPath: {
                        type: String,
                        default: void 0
                    }
                },
                computed: {
                    isClassicMode: function() {
                        return this.$store.state.localStorage.classicMode
                    },
                    getSvgPath: function() {
                        return this.isClassicMode && this.name ? o(647)("./".concat(this.name, ".svg")) : this.name ? o(714)("./".concat(this.name, ".svg")) : void 0
                    },
                    getSvgClipPath: function() {
                        return this.isClassicMode && this.clipPath && this.name ? o(782)("./".concat(this.name, "-clip-path.svg")) : this.clipPath && this.name ? o(783)("./".concat(this.name, "-clip-path.svg")) : void 0
                    }
                },
                watch: {
                    color: function() {
                        this.applyColor(this.color)
                    },
                    clipPath: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.removeWrapper()
                        }))
                    }
                },
                mounted: function() {
                    this.color && this.applyColor(this.color), this.removeWrapper()
                },
                updated: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.color && t.applyColor(t.color), t.removeWrapper()
                    }))
                },
                methods: {
                    applyColor: function(t) {
                        var e = this.$refs.shape;
                        e && e.childNodes && this.deepFillAllChildren(e.childNodes, t)
                    },
                    removeWrapper: function() {
                        if (this.clipPath) {
                            var t, e = this.$refs.wrapper;
                            if (e && "svg" === (null === (t = e.firstElementChild) || void 0 === t ? void 0 : t.nodeName) && e.parentNode) {
                                var o = e.firstElementChild.innerHTML;
                                e.parentNode.innerHTML = o
                            }
                        } else {
                            var l, n = this.$refs.shape;
                            if (n && "svg" === (null === (l = n.firstElementChild) || void 0 === l ? void 0 : l.nodeName)) {
                                var r = n.firstElementChild.innerHTML;
                                n.innerHTML = r
                            }
                        }
                    },
                    deepFillAllChildren: function(t, e) {
                        var o = this;
                        t.forEach((function(t) {
                            t.attributes && t.hasAttribute("fill") && t.setAttribute("fill", e), t.childNodes && o.deepFillAllChildren(t.childNodes, e)
                        }))
                    }
                }
            },
            n = o(6),
            component = Object(n.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return !t.clipPath && t.name ? o("g", {
                    ref: "shape",
                    attrs: {
                        "clip-path": t.useClipPath ? "url(#" + t.useClipPath + ")" : ""
                    },
                    domProps: {
                        innerHTML: t._s(t.getSvgPath)
                    }
                }) : o("defs", [o("clipPath", {
                    attrs: {
                        id: t.clipPath
                    }
                }, [t.name ? o("g", {
                    ref: "wrapper",
                    domProps: {
                        innerHTML: t._s(t.getSvgClipPath)
                    }
                }) : t._e()])])
            }), [], !1, null, "25ee1d09", null);
        e.default = component.exports
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = {
                props: {
                    componentName: {
                        type: String,
                        default: "ShinyEffect"
                    },
                    isInAvatar: {
                        type: Boolean,
                        default: !1
                    },
                    effectColor: {
                        type: String,
                        default: void 0
                    }
                }
            },
            n = o(6),
            component = Object(n.a)(l, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return this.componentName ? e(this.componentName, {
                    tag: "component",
                    attrs: {
                        "is-animated": this.isInAvatar,
                        color: this.effectColor
                    }
                }) : this._e()
            }), [], !1, null, "7ea5f80e", null);
        e.default = component.exports
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(797), o(522);
        var l = o(798),
            n = {
                name: "ColorChooser",
                components: {
                    SelectableItem: o(521).default,
                    ColorPicker: l.a
                },
                props: {
                    title: {
                        type: String,
                        default: "Color"
                    },
                    colors: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    selectedColor: {
                        type: String,
                        default: void 0
                    },
                    initialCustomColor: {
                        type: String,
                        default: void 0
                    },
                    allowNone: {
                        type: Boolean,
                        default: !1
                    },
                    allowAuto: {
                        type: Boolean,
                        default: !1
                    },
                    uploadPossible: {
                        type: Boolean,
                        default: !1
                    },
                    isUploaded: {
                        type: Boolean,
                        default: !1
                    },
                    fileObjectUrl: {
                        type: String,
                        default: void 0
                    },
                    fileName: {
                        type: String,
                        default: void 0
                    },
                    fileScale: {
                        type: Number,
                        default: 1
                    }
                },
                data: function() {
                    return {
                        showColorPicker: !1,
                        showUpload: !1,
                        customColor: "#BF4040"
                    }
                },
                computed: {
                    isCustomColor: function() {
                        if (!this.selectedColor) return !1;
                        for (var i = 0; i < this.colors.length; i++)
                            if (this.colors[i].hex === this.selectedColor) return !1;
                        return !0
                    }
                },
                watch: {
                    initialCustomColor: function() {
                        this.isCustomColor && (this.customColor = this.initialCustomColor || this.selectedColor)
                    },
                    colors: function(t, e) {
                        var o = this,
                            l = e.findIndex((function(t) {
                                return o.selectedColor === t.hex
                            }));
                        l >= 0 && this.$emit("color-change", t[l].hex)
                    }
                },
                mounted: function() {
                    this.isCustomColor && (this.customColor = this.initialCustomColor || this.selectedColor)
                },
                methods: {
                    toggleColorPicker: function() {
                        this.showColorPicker = !this.showColorPicker
                    },
                    closeColorPicker: function() {
                        this.showColorPicker = !1
                    },
                    handleRegularClick: function(t) {
                        this.closeColorPicker(), this.$emit("color-change", t), this.$emit("is-upload", !1)
                    },
                    handleUploadClick: function() {
                        this.showUpload = !this.showUpload, this.$emit("is-upload", !0)
                    },
                    handleColorPickerClick: function() {
                        this.toggleColorPicker(), this.$emit("is-upload", !1)
                    },
                    closeUpload: function() {
                        this.showUpload = !1
                    }
                }
            },
            r = (o(801), o(6)),
            component = Object(r.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "color-chooser"
                }, [o("h3", {
                    staticClass: "title"
                }, [t._v("\n    " + t._s(t.title) + "\n  ")]), t._v(" "), o("div", {
                    staticClass: "options"
                }, [t.allowNone ? o("selectable-item", {
                    attrs: {
                        type: "nothing",
                        selected: !t.selectedColor && !t.isUploaded
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.handleRegularClick(void 0)
                        }
                    }
                }) : t._e(), t._v(" "), t.allowAuto ? o("selectable-item", {
                    attrs: {
                        type: "icon",
                        "icon-name": "auto-icon",
                        selected: !t.selectedColor && !t.isUploaded
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.handleRegularClick(void 0)
                        }
                    }
                }) : t._e(), t._v(" "), t.uploadPossible ? o("selectable-item", {
                    attrs: {
                        type: "upload",
                        selected: t.isUploaded,
                        "show-close-icon": t.showUpload
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.handleUploadClick(e)
                        }
                    }
                }) : t._e(), t._v(" "), t.showUpload ? o("upload-component", {
                    attrs: {
                        "file-object-url": t.fileObjectUrl,
                        "file-name": t.fileName,
                        "file-scale": t.fileScale
                    },
                    on: {
                        change: function(e) {
                            return t.$emit("file-change", e)
                        },
                        "scale-change": function(e) {
                            return t.$emit("file-scale-change", e)
                        }
                    }
                }) : t._e(), t._v(" "), t._l(t.colors, (function(e) {
                    return o("selectable-item", {
                        key: e.id,
                        attrs: {
                            type: "color",
                            color: e.hex,
                            selected: e.hex === t.selectedColor && !t.isUploaded
                        },
                        nativeOn: {
                            click: function(o) {
                                return t.handleRegularClick(e.hex)
                            }
                        }
                    })
                })), t._v(" "), o("selectable-item", {
                    attrs: {
                        type: "colorpicker",
                        selected: t.isCustomColor && !t.isUploaded,
                        color: t.isCustomColor ? t.selectedColor : "",
                        "show-close-icon": t.showColorPicker
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.handleColorPickerClick()
                        }
                    }
                }), t._v(" "), t.showColorPicker ? o("div", {
                    staticClass: "color-picker-wrapper"
                }, [o("color-picker", {
                    staticClass: "color-picker",
                    attrs: {
                        width: 260,
                        height: 260
                    },
                    on: {
                        "color-change": function(e) {
                            return t.$emit("color-change", e)
                        }
                    },
                    model: {
                        value: t.customColor,
                        callback: function(e) {
                            t.customColor = e
                        },
                        expression: "customColor"
                    }
                }), t._v(" "), o("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.customColor,
                        expression: "customColor"
                    }],
                    staticClass: "color-input",
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.customColor
                    },
                    on: {
                        focus: function(e) {
                            return t.$emit("color-input-focus")
                        },
                        blur: function(e) {
                            return t.$emit("color-input-blur")
                        },
                        input: function(e) {
                            e.target.composing || (t.customColor = e.target.value)
                        }
                    }
                })], 1) : t._e()], 2)])
            }), [], !1, null, "e5af882e", null);
        e.default = component.exports;
        installComponents(component, {
            SelectableItem: o(521).default,
            UploadComponent: o(531).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(522);
        var l = {
                name: "RangeSliderComponent",
                props: {
                    value: {
                        type: Number,
                        default: 1
                    },
                    min: {
                        type: Number,
                        default: .1
                    },
                    max: {
                        type: Number,
                        default: 5
                    },
                    step: {
                        type: Number,
                        default: .01
                    },
                    lazy: {
                        type: Boolean,
                        default: !1
                    }
                },
                methods: {
                    setBodyScroll: function(t) {
                        if ("ontouchstart" in document.documentElement) {
                            var body = document.getElementsByTagName("body")[0];
                            body.style.overflow = t ? "auto" : "hidden"
                        }
                    }
                }
            },
            n = (o(803), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("no-ssr", [o("vue-range-slider", {
                    ref: "slider",
                    attrs: {
                        value: t.value,
                        min: t.min,
                        max: t.max,
                        step: t.step,
                        tooltip: "hover",
                        "dot-size": 24,
                        height: 2,
                        speed: .3,
                        lazy: t.lazy
                    },
                    on: {
                        input: function(e) {
                            return t.$emit("change", e)
                        },
                        "drag-start": function(e) {
                            return t.setBodyScroll(!1)
                        },
                        "drag-end": function(e) {
                            return t.setBodyScroll(!0)
                        }
                    }
                })], 1)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t) {
        t.exports = JSON.parse('[{"hex":"#FFFFFF"},{"hex":"#000000"}]')
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = {
                props: {
                    onWhiteBg: {
                        type: Boolean,
                        default: !1
                    }
                }
            },
            n = (o(828), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "wrapper"
                }, [e("a", {
                    staticClass: "nerdordie-button",
                    class: {
                        "nerdordie-button--light-bg": this.onWhiteBg
                    },
                    attrs: {
                        href: "https://github.com/SudoLite",
                        target: "_blank"
                    }
                }, [e("div", {
                    staticClass: "nerdordie-button__inner"
                }, [e("chameleon-icon", {
                    staticClass: "logo",
                    attrs: {
                        name: "nerdordie-logo"
                    }
                })], 1)])])
            }), [], !1, null, "8a44713e", null);
        e.default = component.exports;
        installComponents(component, {
            ChameleonIcon: o(520).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = {
                props: {
                    blocking: {
                        type: Boolean,
                        default: !1
                    }
                },
                methods: {
                    handleClose: function() {
                        this.blocking || this.$emit("close")
                    }
                }
            },
            n = (o(832), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "overlay",
                    on: {
                        mousedown: this.handleClose
                    }
                }, [e("div", {
                    staticClass: "overlay__scroll-wrapper"
                }, [e("div", {
                    staticClass: "overlay__inner",
                    on: {
                        mousedown: function(t) {
                            t.stopPropagation()
                        }
                    }
                }, [this._t("default")], 2)])])
            }), [], !1, null, "4e26bc2a", null);
        e.default = component.exports
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(522), o(62);
        var l = {
                name: "UploadComponent",
                components: {
                    RangeSliderComponent: o(527).default
                },
                props: {
                    fileObjectUrl: {
                        type: String,
                        default: void 0
                    },
                    fileName: {
                        type: String,
                        default: void 0
                    },
                    fileScale: {
                        type: Number,
                        default: 1
                    }
                },
                data: function() {
                    return {
                        id: void 0,
                        showUploadError: !1,
                        isDraggingOver: !1
                    }
                },
                mounted: function() {
                    this.id = this._uid
                },
                methods: {
                    handleInputChange: function(t) {
                        this.$emit("change", t.target.files)
                    },
                    handleDrop: function(t) {
                        var e = this;
                        this.isDraggingOver = !1;
                        var o = t.dataTransfer.files;
                        if (o.length) {
                            for (var i = 0; i < t.dataTransfer.files.length; i++)
                                if ("image/x-png" !== o.item(i).type && "image/png" !== o.item(i).type && "image/jpeg" !== o.item(i).type) return this.showUploadError = !0, void setTimeout((function() {
                                    e.showUploadError = !1
                                }), 3e3);
                            this.$emit("change", t.dataTransfer.files)
                        }
                    }
                }
            },
            n = (o(805), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "upload-wrapper"
                }, [o("div", {
                    staticClass: "drop-area",
                    class: {
                        "drop-area--highlighted": t.isDraggingOver
                    },
                    on: {
                        dragover: function(e) {
                            e.preventDefault(), t.isDraggingOver = !0
                        },
                        dragleave: function(e) {
                            e.preventDefault(), t.isDraggingOver = !1
                        },
                        drop: function(e) {
                            return e.preventDefault(), t.handleDrop(e)
                        }
                    }
                }, [o("input", {
                    ref: "file",
                    staticClass: "file-input",
                    attrs: {
                        id: t.id,
                        type: "file",
                        accept: "image/x-png,image/png,image/jpeg"
                    },
                    on: {
                        change: t.handleInputChange
                    }
                }), t._v(" "), o("label", {
                    staticClass: "label",
                    attrs: {
                        for: t.id
                    }
                }, [t.fileObjectUrl ? o("div", {
                    staticClass: "file-preview"
                }, [o("img", {
                    staticClass: "file-preview__img",
                    attrs: {
                        src: t.fileObjectUrl
                    }
                }), t._v(" "), o("p", {
                    staticClass: "file-preview__name"
                }, [t._v(t._s(t.fileName))])]) : o("div", {
                    staticClass: "drag-text"
                }, [t._v("\n        Drag file here"), o("br"), t._v("\n        or click to open file chooser\n      ")])]), t._v(" "), o("div", {
                    staticClass: "error",
                    class: {
                        "error--visible": t.showUploadError
                    }
                }, [t._m(0)])]), t._v(" "), t._m(1), t._v(" "), t.fileObjectUrl ? o("div", {
                    staticClass: "scale"
                }, [o("p", {
                    staticClass: "scale__label"
                }, [t._v("\n      Image scale\n    ")]), t._v(" "), o("range-slider-component", {
                    attrs: {
                        value: t.fileScale
                    },
                    on: {
                        change: function(e) {
                            return t.$emit("scale-change", e)
                        }
                    }
                }), t._v(" "), o("div", {
                    staticClass: "scale__reset",
                    class: {
                        "scale__reset--visible": 1 !== t.fileScale
                    }
                }, [o("span", {
                    on: {
                        click: function(e) {
                            return t.$emit("scale-change", 1)
                        }
                    }
                }, [t._v("\n        Reset to default\n      ")])])], 1) : t._e()])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "error__inner"
                }, [e("span", [this._v("Wrong file format.")])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "description"
                }, [this._v("\n    Allowed formats: PNG, JPEG"), e("br"), this._v("\n    works best with squares (e.g. 512x512)\n  ")])
            }], !1, null, "50360983", null);
        e.default = component.exports;
        installComponents(component, {
            RangeSliderComponent: o(527).default
        })
    }, , function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM34.386 59.853H93.614V63.0337H91.2312V66.2146H88.8486V69.3951H86.4659V72.5757H84.0833V75.7569H74.2119V72.5757H71.8291V69.3951H69.4463V66.2146H67.4038V63.0337H60.5962V66.2146H58.5537V69.3951H56.171V72.5757H53.7883V75.7569H43.917V72.5757H41.5342V69.3951H39.1514V66.2146H36.7688V63.0337H34.386V59.853ZM41.8747 63.0339H39.492V66.2146H41.8747V63.0339ZM72.1694 63.0339H69.7867V66.2146H72.1694V69.3949H74.5522L74.5522 72.5756H76.9349L76.9349 69.3949H79.3176V72.5756H81.7004V69.3949H79.3176V66.2142H76.9349L76.9349 63.0339H74.5522L74.5522 66.2142H72.1694V63.0339ZM76.9349 69.3949V66.2146H74.5522V69.3949H76.9349ZM44.2575 63.0339H46.6402V66.2142H49.0229L49.0229 69.3949H51.4057V72.5756H49.0229L49.0229 69.3949H46.6402V72.5756H44.2575V69.3949H41.8748V66.2142H44.2575V63.0339ZM46.6402 66.2146V69.3949H44.2575V66.2146H46.6402Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM38.2438 56.1648L61.2587 62.9869L60.5583 65.3495L56.0994 64.0278C56.9667 65.4113 57.4619 67.0828 57.4325 68.877C57.4325 73.6051 53.9446 77.4805 49.5265 77.4805C45.186 77.4805 41.6206 73.6051 41.6206 68.877C41.6206 65.4426 43.4609 62.4581 46.1612 61.082L37.5435 58.5275L38.2438 56.1648ZM66.0853 62.9869L89.1002 56.1648L89.8005 58.5275L81.1828 61.082C83.8831 62.4581 85.7234 65.4426 85.7234 68.877C85.7234 73.6051 82.2355 77.4805 77.8174 77.4805C73.4769 77.4805 69.9115 73.6051 69.9115 68.877C69.9115 67.0774 70.4168 65.4013 71.2863 64.0155L66.7857 65.3495L66.0853 62.9869Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM78.061 77.4806C82.3144 77.4806 85.7626 73.5321 85.7626 68.6614C85.7626 66.5666 85.1248 64.6424 84.0595 63.1296C81.7921 64.5449 75.8777 67.6327 70.3594 68.6614C70.3594 73.5321 73.8075 77.4806 78.061 77.4806ZM42.2374 68.6614C42.2374 73.5321 45.6856 77.4806 49.939 77.4806C54.1925 77.4806 57.6406 73.5321 57.6406 68.6614C52.1223 67.6327 46.2079 64.5449 43.9405 63.1296C42.8752 64.6424 42.2374 66.5666 42.2374 68.6614Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM49.5898 74.4806C53.8612 74.4806 57.3238 70.5155 57.3238 65.6243H41.8559C41.8559 70.5155 45.3185 74.4806 49.5898 74.4806ZM86.1441 65.6243C86.1441 70.5155 82.6815 74.4806 78.4102 74.4806C74.1388 74.4806 70.6762 70.5155 70.6762 65.6243H86.1441Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM78.1454 60.2734C73.7274 60.2734 70.2395 64.1489 70.2395 68.877C70.2395 73.6051 73.8049 77.4805 78.1454 77.4805C82.5635 77.4805 86.0514 73.6051 86.0514 68.877C86.0514 64.1489 82.5635 60.2734 78.1454 60.2734ZM41.9486 68.877C41.9486 64.1489 45.4365 60.2734 49.8545 60.2734C54.2726 60.2734 57.838 64.1489 57.7605 68.877C57.7605 73.6051 54.2726 77.4805 49.8545 77.4805C45.514 77.4805 41.9486 73.6051 41.9486 68.877Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM40.3896 68.8769C40.3896 63.2166 44.5652 58.577 49.8544 58.577C55.1435 58.577 59.4119 63.2166 59.3192 68.8769C59.3192 74.5372 55.1435 79.1768 49.8544 79.1768C44.6581 79.1768 40.3896 74.5372 40.3896 68.8769ZM50.855 62.8772L50.855 62.8772C48.975 64.6772 46.3432 69.597 50.855 74.8767C55.3668 69.597 52.7349 64.6772 50.855 62.8772ZM78.1439 58.577C72.8548 58.577 68.6792 63.2166 68.6792 68.8769C68.6792 74.5372 72.9476 79.1768 78.1439 79.1768C83.4331 79.1768 87.6087 74.5372 87.6087 68.8769C87.7015 63.2166 83.4331 58.577 78.1439 58.577ZM76.8166 62.8772C74.9366 64.6772 72.3048 69.597 76.8166 74.8767C81.3284 69.597 78.6965 64.6772 76.8166 62.8772Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM38.2415 70.0985C44.1711 71.7627 48.8214 75.0089 52.6422 79.3979C57.4042 77.8044 60.8798 72.8061 60.8798 66.8868C60.8798 59.6839 55.7334 53.8447 49.3851 53.8447C43.0367 53.8447 37.8904 59.6839 37.8904 66.8868C37.8904 67.9951 38.0122 69.0711 38.2415 70.0985ZM54.0232 71.6268C56.3389 71.6268 58.2161 69.5046 58.2161 66.8869C58.2161 64.2691 56.3389 62.147 54.0232 62.147C51.7074 62.147 49.8302 64.2691 49.8302 66.8869C49.8302 69.5046 51.7074 71.6268 54.0232 71.6268ZM76.3581 79.3979C80.1788 75.0089 84.8292 71.7627 90.7587 70.0985C90.988 69.0711 91.1099 67.9951 91.1099 66.8868C91.1099 59.6839 85.9635 53.8447 79.6152 53.8447C73.2668 53.8447 68.1205 59.6839 68.1205 66.8868C68.1205 72.8061 71.596 77.8044 76.3581 79.3979ZM70.7841 66.8869C70.7841 69.5046 72.6614 71.6268 74.9771 71.6268C77.2928 71.6268 79.1701 69.5046 79.1701 66.8869C79.1701 64.2691 77.2928 62.147 74.9771 62.147C72.6614 62.147 70.7841 64.2691 70.7841 66.8869Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM40 69C40 62.4054 44.8525 57 50.9991 57C57.1457 57 62.1061 62.4054 61.9983 69C61.9983 72.0645 60.9504 74.8722 59.2117 77H42.8239C41.0712 74.8722 40 72.0645 40 69ZM79.1454 63.2734C74.7274 63.2734 71.2395 67.1489 71.2395 71.877C71.2395 73.7913 71.824 75.5658 72.8077 77H85.5059C86.4796 75.5658 87.0514 73.7913 87.0514 71.877C87.0514 67.1489 83.5635 63.2734 79.1454 63.2734Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM48.8851 79.9288C55.2334 79.9288 60.3798 74.0897 60.3798 66.8868C60.3798 59.6839 55.2334 53.8447 48.8851 53.8447C42.5367 53.8447 37.3904 59.6839 37.3904 66.8868C37.3904 74.0897 42.5367 79.9288 48.8851 79.9288ZM53.5232 72.6342C56.3312 72.6342 58.6074 70.061 58.6074 66.8868C58.6074 63.7127 56.3312 61.1395 53.5232 61.1395C50.7153 61.1395 48.439 63.7127 48.439 66.8868C48.439 70.061 50.7153 72.6342 53.5232 72.6342ZM67.6205 66.8868C67.6205 74.0897 72.7668 79.9288 79.1152 79.9288C85.4635 79.9288 90.6099 74.0897 90.6099 66.8868C90.6099 59.6839 85.4635 53.8447 79.1152 53.8447C72.7668 53.8447 67.6205 59.6839 67.6205 66.8868ZM69.4264 66.8868C69.4264 70.061 71.7027 72.6342 74.5106 72.6342C77.3185 72.6342 79.5948 70.061 79.5948 66.8868C79.5948 63.7127 77.3185 61.1395 74.5106 61.1395C71.7027 61.1395 69.4264 63.7127 69.4264 66.8868Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM48.8848 79.9288C55.2332 79.9288 60.3795 74.0897 60.3795 66.8868C60.3795 59.6839 55.2332 53.8447 48.8848 53.8447C42.5365 53.8447 37.3901 59.6839 37.3901 66.8868C37.3901 74.0897 42.5365 79.9288 48.8848 79.9288ZM50.9677 77.2335C53.7757 77.2335 56.0519 74.6603 56.0519 71.4862C56.0519 68.312 53.7757 65.7388 50.9677 65.7388C48.1598 65.7388 45.8835 68.312 45.8835 71.4862C45.8835 74.6603 48.1598 77.2335 50.9677 77.2335ZM67.6204 66.8868C67.6204 74.0897 72.7667 79.9288 79.1151 79.9288C85.4634 79.9288 90.6098 74.0897 90.6098 66.8868C90.6098 59.6839 85.4634 53.8447 79.1151 53.8447C72.7667 53.8447 67.6204 59.6839 67.6204 66.8868ZM71.948 71.4862C71.948 74.6603 74.2242 77.2335 77.0322 77.2335C79.8401 77.2335 82.1163 74.6603 82.1163 71.4862C82.1163 68.312 79.8401 65.7388 77.0322 65.7388C74.2242 65.7388 71.948 68.312 71.948 71.4862Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM54.3427 61.5646L49.8347 66.0726L45.3267 61.5646L42.5223 64.3689L47.0303 68.877L42.5222 73.3851L45.3266 76.1894L49.8347 71.6813L54.3428 76.1894L57.1471 73.385L52.6391 68.877L57.147 64.369L54.3427 61.5646ZM78.1657 66.0727L82.6737 61.5647L85.4781 64.369L80.9701 68.877L85.4782 73.3851L82.6738 76.1895L78.1657 71.6814L73.6576 76.1895L70.8533 73.3851L75.3614 68.877L70.8534 64.369L73.6577 61.5646L78.1657 66.0727Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM45.3568 59.8015C42.3817 61.5447 40.3896 64.9674 40.3896 68.877C40.3896 71.196 41.1061 73.3437 42.3094 75.0712C42.937 75.2076 43.5675 75.3583 44.2 75.5237C47.2765 76.3284 50.1433 77.413 52.7225 78.701C56.5771 77.3804 59.3192 73.4638 59.3192 68.877C59.3223 68.6841 59.3204 68.4925 59.3136 68.3021C57.3716 67.7726 55.3487 66.9792 53.3418 65.923C53.2823 68.3112 52.6076 70.9893 50.855 73.7402C48.3071 69.741 48.0373 65.8957 48.6238 62.8711C47.3831 61.8919 46.2864 60.8571 45.3568 59.8015ZM87.6101 68.877C87.6101 64.9674 85.618 61.5447 82.6429 59.8015C81.7134 60.8571 80.6166 61.8919 79.3759 62.8711C79.9624 65.8957 79.6927 69.741 77.1448 73.7402C75.3922 70.9893 74.7175 68.3112 74.6579 65.923C72.6511 66.9792 70.6282 67.7726 68.6862 68.3021C68.6793 68.4925 68.6774 68.6841 68.6806 68.877C68.6806 73.4638 71.4226 77.3804 75.2773 78.701C77.8564 77.413 80.7233 76.3284 83.7998 75.5237C84.4322 75.3583 85.0627 75.2076 85.6904 75.0712C86.8936 73.3437 87.6101 71.196 87.6101 68.877Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM42.185 66.7717C42.03 67.4461 41.9479 68.1515 41.9479 68.877C41.9479 73.6051 45.5133 77.4805 49.8538 77.4805C54.2719 77.4805 57.7598 73.6051 57.7598 68.877C57.8373 64.1489 54.2719 60.2734 49.8538 60.2734C47.969 60.2734 46.2535 60.9788 44.9059 62.1547C46.9816 62.8669 49.218 62.7559 50.9939 62.5286C50.4307 63.1639 46.9386 64.1133 43.4507 63.8175L43.4486 63.8207C40.8484 63.5145 38.1048 62.4864 36.6263 60.5668C36.7466 61.7692 37.6147 65.2352 42.185 66.7717ZM85.815 66.7717C85.97 67.4461 86.0521 68.1515 86.0521 68.877C86.0521 73.6051 82.4867 77.4805 78.1462 77.4805C73.7281 77.4805 70.2402 73.6051 70.2402 68.877C70.1627 64.1489 73.7281 60.2734 78.1462 60.2734C80.031 60.2734 81.7465 60.9788 83.0941 62.1547C81.0184 62.8669 78.782 62.7559 77.0061 62.5286C77.5693 63.1639 81.0614 64.1133 84.5493 63.8175C84.55 63.8186 84.5507 63.8196 84.5514 63.8207C87.1516 63.5145 89.8952 62.4864 91.3737 60.5668C91.2534 61.7692 90.3853 65.2352 85.815 66.7717Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM50.3373 74.0727C53.028 74.0727 55.2092 71.5749 55.2092 68.4938C55.2092 65.4127 53.028 62.9149 50.3373 62.9149C47.6467 62.9149 45.4655 65.4127 45.4655 68.4938C45.4655 71.5749 47.6467 74.0727 50.3373 74.0727ZM72.7908 68.4938C72.7908 71.5749 74.972 74.0727 77.6627 74.0727C80.3533 74.0727 82.5345 71.5749 82.5345 68.4938C82.5345 65.4127 80.3533 62.9149 77.6627 62.9149C74.972 62.9149 72.7908 65.4127 72.7908 68.4938ZM57.7432 68.4938C57.7432 73.1633 53.9578 76.9486 49.2884 76.9486C44.6189 76.9486 40.8336 73.1633 40.8336 68.4938C40.8336 63.8244 44.6189 60.039 49.2884 60.039C53.9578 60.039 57.7432 63.8244 57.7432 68.4938ZM60.8898 68.4938C60.8898 74.9011 55.6957 80.0952 49.2884 80.0952C42.8811 80.0952 37.687 74.9011 37.687 68.4938C37.687 62.0866 42.8811 56.8925 49.2884 56.8925C53.4327 56.8925 57.0695 59.0655 59.1214 62.3344C60.1186 61.962 61.5599 61.596 63.1903 61.4775C64.9171 61.352 66.9427 61.4981 68.9105 62.2836C70.9682 59.043 74.5887 56.8924 78.7115 56.8924C85.1188 56.8924 90.3129 62.0865 90.3129 68.4938C90.3129 74.9011 85.1188 80.0952 78.7115 80.0952C72.3043 80.0952 67.1102 74.9011 67.1102 68.4938C67.1102 67.3313 67.2811 66.2088 67.5993 65.1499C66.2327 64.6357 64.7693 64.5176 63.4184 64.6158C62.1975 64.7045 61.1344 64.9654 60.4189 65.2116C60.7254 66.2523 60.8898 67.3539 60.8898 68.4938ZM78.7115 76.9486C74.0421 76.9486 70.2567 73.1633 70.2567 68.4938C70.2567 63.8243 74.0421 60.039 78.7115 60.039C83.381 60.039 87.1663 63.8243 87.1663 68.4938C87.1663 73.1633 83.381 76.9486 78.7115 76.9486Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM53.9042 71.3397C54.2367 70.555 54.4232 69.6742 54.4232 68.7434C54.4232 65.4546 52.0949 62.7885 49.2229 62.7885C46.3509 62.7885 44.0227 65.4546 44.0227 68.7434C44.0227 69.6742 44.2091 70.555 44.5416 71.3397H39.6577V61.4724H58.9329V71.3397H53.9042ZM62.2915 61.4735V60.3529C62.2915 59.1163 61.2891 58.1138 60.0524 58.1138H38.5382C37.3016 58.1138 36.2991 59.1163 36.2991 60.3529V72.4593C36.2991 73.6959 37.3016 74.6984 38.5382 74.6984H60.0524C61.2891 74.6984 62.2915 73.6959 62.2915 72.4593V64.8767C62.6157 64.8145 62.9729 64.7642 63.3518 64.7366C64.1231 64.6806 64.9317 64.7228 65.7085 64.9185V72.4593C65.7085 73.6959 66.711 74.6984 67.9476 74.6984H89.4619C90.6985 74.6984 91.701 73.6959 91.701 72.4593V60.3529C91.701 59.1163 90.6985 58.1138 89.4619 58.1138H67.9476C66.711 58.1138 65.7085 59.1163 65.7085 60.3529V61.4922C64.7934 61.3435 63.9073 61.3287 63.1083 61.3868C62.8286 61.4071 62.5557 61.4366 62.2915 61.4735ZM74.0958 71.3397C73.7633 70.5551 73.5768 69.6742 73.5768 68.7434C73.5768 65.4546 75.9051 62.7885 78.7771 62.7885C81.6491 62.7885 83.9773 65.4546 83.9773 68.7434C83.9773 69.6742 83.7909 70.5551 83.4584 71.3397H88.3423V61.4725H69.0672V71.3397H74.0958Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM49.6375 60.2786C45.3802 60.2786 41.929 64.2306 41.929 69.1057C41.929 69.9914 42.0429 70.8467 42.2549 71.6534C44.6174 68.9999 50.8779 65.2851 57.0201 71.6534C57.2321 70.8467 57.346 69.9914 57.346 69.1057C57.346 64.2306 53.8948 60.2786 49.6375 60.2786ZM86.071 69.1057C86.071 64.2306 82.6198 60.2786 78.3625 60.2786C74.1052 60.2786 70.654 64.2306 70.654 69.1057C70.654 69.9914 70.7679 70.8467 70.9799 71.6534C77.1221 65.2851 83.3826 68.9999 85.7451 71.6534C85.9571 70.8467 86.071 69.9914 86.071 69.1057Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM57.3275 62.674C56.4079 61.6767 55.1462 61.1274 53.7745 61.1274C52.7491 61.1274 51.81 61.4516 50.9833 62.0909C50.5662 62.4136 50.1882 62.8083 49.855 63.2691C49.5219 62.8085 49.1438 62.4136 48.7265 62.0909C47.8999 61.4516 46.9609 61.1274 45.9355 61.1274C44.5637 61.1274 43.3019 61.6767 42.3824 62.674C41.4738 63.6597 40.9733 65.0063 40.9733 66.4658C40.9733 67.9681 41.5332 69.3433 42.7351 70.7936C43.8104 72.091 45.3557 73.408 47.1453 74.9331L47.1462 74.9338C47.757 75.4544 48.4494 76.0445 49.1683 76.6731C49.3583 76.8395 49.6021 76.9311 49.855 76.9311C50.1077 76.9311 50.3517 76.8395 50.5414 76.6733C51.2544 76.0498 51.9416 75.4641 52.549 74.9463L52.565 74.9327L52.5651 74.9326L52.5652 74.9325C54.3545 73.4078 55.8998 72.091 56.975 70.7935C58.1769 69.3433 58.7366 67.9681 58.7366 66.4657C58.7366 65.0063 58.2362 63.6597 57.3275 62.674ZM82.0645 61.1274C83.4363 61.1274 84.698 61.6767 85.6175 62.674C86.5262 63.6597 87.0267 65.0063 87.0267 66.4657C87.0267 67.9681 86.467 69.3433 85.265 70.7935C84.1898 72.091 82.6445 73.4078 80.8553 74.9325L80.8551 74.9327L80.8391 74.9463C80.2317 75.4641 79.5444 76.0498 78.8314 76.6733C78.6417 76.8395 78.3978 76.9311 78.145 76.9311C77.8921 76.9311 77.6483 76.8395 77.4583 76.6731C76.7393 76.0444 76.0468 75.4542 75.4358 74.9335L75.4354 74.9331C73.6458 73.408 72.1004 72.091 71.0252 70.7936C69.8232 69.3433 69.2634 67.9681 69.2634 66.4658C69.2634 65.0063 69.7638 63.6597 70.6724 62.674C71.5919 61.6767 72.8538 61.1274 74.2255 61.1274C75.2509 61.1274 76.19 61.4516 77.0165 62.0909C77.4338 62.4136 77.8119 62.8085 78.145 63.2691C78.4783 62.8083 78.8562 62.4136 79.2734 62.0909C80.1001 61.4516 81.0391 61.1274 82.0645 61.1274Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM88.8587 69.5155L71.0438 74.8297L69.8432 70.805L87.6581 65.4907L88.8587 69.5155ZM56.9563 74.8297L39.1414 69.5155L40.342 65.4907L58.1569 70.805L56.9563 74.8297Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM49.8547 62.4275L59.0185 71.5913L56.3862 74.2236L49.8547 67.6922L43.3232 74.2236L40.6909 71.5913L49.8547 62.4275ZM87.3295 71.5913L78.1657 62.4275L69.0019 71.5913L71.6342 74.2236L78.1657 67.6922L84.6972 74.2236L87.3295 71.5913Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM83.5172 62.9025H90.9456V59.9025L37.0542 59.9025V62.9025H43.8267C42.4559 64.4536 41.6206 66.5632 41.6206 68.877C41.6206 73.6051 45.186 77.4805 49.5265 77.4805C53.9446 77.4805 57.4325 73.6051 57.4325 68.877C57.4704 66.5632 56.6359 64.4536 55.256 62.9025L72.1175 62.9025C70.7467 64.4536 69.9114 66.5632 69.9114 68.877C69.9114 73.6051 73.4768 77.4805 77.8173 77.4805C82.2354 77.4805 85.7233 73.6051 85.7233 68.877C85.7233 66.5632 84.888 64.4536 83.5172 62.9025Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM50.6265 79.0066C56.6886 79.0066 61.6029 74.0923 61.6029 68.0302C61.6029 61.968 56.6886 57.0537 50.6265 57.0537C44.5643 57.0537 39.65 61.968 39.65 68.0302C39.65 74.0923 44.5643 79.0066 50.6265 79.0066ZM50.6265 83.0917C58.9447 83.0917 65.688 76.3484 65.688 68.0302C65.688 59.7119 58.9447 52.9686 50.6265 52.9686C42.3082 52.9686 35.5649 59.7119 35.5649 68.0302C35.5649 76.3484 42.3082 83.0917 50.6265 83.0917ZM32.6844 70.0108C33.7783 70.0108 34.665 69.1241 34.665 68.0303C34.665 66.9364 33.7783 66.0497 32.6844 66.0497C31.5906 66.0497 30.7039 66.9364 30.7039 68.0303C30.7039 69.1241 31.5906 70.0108 32.6844 70.0108ZM34.665 73.4392C34.665 74.5331 33.7783 75.4198 32.6844 75.4198C31.5906 75.4198 30.7039 74.5331 30.7039 73.4392C30.7039 72.3454 31.5906 71.4586 32.6844 71.4586C33.7783 71.4586 34.665 72.3454 34.665 73.4392ZM32.6844 80.8284C33.7783 80.8284 34.665 79.9416 34.665 78.8478C34.665 77.7539 33.7783 76.8672 32.6844 76.8672C31.5906 76.8672 30.7039 77.7539 30.7039 78.8478C30.7039 79.9416 31.5906 80.8284 32.6844 80.8284ZM34.665 84.2482C34.665 85.342 33.7783 86.2287 32.6844 86.2287C31.5906 86.2287 30.7039 85.342 30.7039 84.2482C30.7039 83.1543 31.5906 82.2676 32.6844 82.2676C33.7783 82.2676 34.665 83.1543 34.665 84.2482ZM32.6844 91.6289C33.7783 91.6289 34.665 90.7422 34.665 89.6483C34.665 88.5545 33.7783 87.6677 32.6844 87.6677C31.5906 87.6677 30.7039 88.5545 30.7039 89.6483C30.7039 90.7422 31.5906 91.6289 32.6844 91.6289ZM34.665 95.0485C34.665 96.1423 33.7783 97.029 32.6844 97.029C31.5906 97.029 30.7039 96.1423 30.7039 95.0485C30.7039 93.9546 31.5906 93.0679 32.6844 93.0679C33.7783 93.0679 34.665 93.9546 34.665 95.0485ZM42.6206 67.943C42.6206 63.215 46.1085 59.3395 50.5265 59.3395C54.9446 59.3395 58.51 63.215 58.4325 67.943C58.4325 72.6711 54.9446 76.5466 50.5265 76.5466C46.186 76.5466 42.6206 72.6711 42.6206 67.943ZM70.9115 67.943C70.9115 63.215 74.3995 59.3395 78.8175 59.3395C83.2355 59.3395 86.7234 63.215 86.7234 67.943C86.7234 72.6711 83.2355 76.5466 78.8175 76.5466C74.4769 76.5466 70.9115 72.6711 70.9115 67.943Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM78.3433 77.4806C74.0916 77.4806 70.645 73.5338 70.645 68.6652C70.645 66.5714 71.2825 64.648 72.3473 63.1358C74.6138 64.5505 80.5256 67.6369 86.0415 68.6652C86.0415 73.5338 82.5949 77.4806 78.3433 77.4806ZM57.355 68.6652C57.355 73.5338 53.9084 77.4806 49.6567 77.4806C45.4051 77.4806 41.9585 73.5338 41.9585 68.6652C47.4744 67.6369 53.3862 64.5505 55.6527 63.1358C56.7175 64.648 57.355 66.5714 57.355 68.6652Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM50.0265 60.2734C45.6085 60.2734 42.1206 64.1489 42.1206 68.877C42.1206 73.6051 45.686 77.4805 50.0265 77.4805C54.4446 77.4805 57.9325 73.6051 57.9325 68.877C58.01 64.1489 54.4446 60.2734 50.0265 60.2734ZM37.0923 68.877C37.0923 63.3486 40.2514 58.5924 44.7751 56.7292C41.8539 59.8059 40.0552 64.1216 40.0552 68.877C40.0552 73.6362 41.8969 77.955 44.8407 81.0322C40.3303 79.1743 37.0923 74.4128 37.0923 68.877ZM78.3186 60.2734C82.7366 60.2734 86.2245 64.1489 86.2245 68.877C86.2245 73.6051 82.6591 77.4805 78.3186 77.4805C73.9005 77.4805 70.4126 73.6051 70.4126 68.877C70.3351 64.1489 73.9005 60.2734 78.3186 60.2734ZM91.2528 68.877C91.2528 63.3486 88.0937 58.5924 83.57 56.7292C86.4912 59.8059 88.2899 64.1216 88.2899 68.877C88.2899 73.6362 86.4482 77.955 83.5044 81.0322C88.0148 79.1743 91.2528 74.4128 91.2528 68.877Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM69.4783 62.2558C69.8706 61.3933 70.7861 60.0199 72.2041 58.8754C73.6055 57.7442 75.449 56.8724 77.7422 56.8724C80.0404 56.8724 81.955 57.7481 83.4451 58.8938C84.948 60.0493 85.9578 61.4354 86.4087 62.3083L88.6969 61.2585C88.0958 60.0946 86.8622 58.4256 85.0538 57.0352C83.2325 55.6349 80.7678 54.4739 77.7422 54.4739C74.7115 54.4739 72.3015 55.6388 70.5487 57.0536C68.8124 58.455 67.6731 60.1367 67.1392 61.3109L69.4783 62.2558ZM42.8769 64.21C41.8598 63.9091 41.0174 63.5771 40.3857 63.2646L41.6024 60.8049C44.1028 62.0416 51.4269 63.9145 59.5663 60.7556L60.5592 63.3139C59.1511 63.8604 57.7634 64.2716 56.4126 64.5706C57.0844 65.8394 57.4582 67.3115 57.4325 68.877C57.4325 73.6051 53.9446 77.4805 49.5265 77.4805C45.186 77.4805 41.6206 73.6051 41.6206 68.877C41.6206 67.1608 42.0801 65.557 42.8769 64.21ZM69.9115 68.877C69.9115 64.1489 73.3995 60.2734 77.8175 60.2734C82.2355 60.2734 85.7234 64.1489 85.7234 68.877C85.7234 73.6051 82.2355 77.4805 77.8175 77.4805C73.4769 77.4805 69.9115 73.6051 69.9115 68.877Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM76.4722 67.0872C76.4722 74.5892 71.1121 80.6709 64.5001 80.6709C57.8881 80.6709 52.5281 74.5892 52.5281 67.0872C52.5281 59.5852 57.8881 53.5035 64.5001 53.5035C71.1121 53.5035 76.4722 59.5852 76.4722 67.0872ZM69.5655 60.8712C69.5655 64.1771 67.1947 66.8572 64.2702 66.8572C61.3456 66.8572 58.9749 64.1771 58.9749 60.8712C58.9749 57.5652 61.3456 54.8851 64.2702 54.8851C67.1947 54.8851 69.5655 57.5652 69.5655 60.8712Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM73.6246 60.2734C69.2066 60.2734 65.7188 64.1489 65.7188 68.877C65.7188 73.6051 69.2841 77.4805 73.6246 77.4805C78.0427 77.4805 81.5306 73.6051 81.5306 68.877C81.5306 64.1489 78.0427 60.2734 73.6246 60.2734ZM46.4685 68.877C46.4685 64.1489 49.9563 60.2734 54.3744 60.2734C58.7924 60.2734 62.3579 64.1489 62.2804 68.877C62.2804 73.6051 58.7924 77.4805 54.3744 77.4805C50.0339 77.4805 46.4685 73.6051 46.4685 68.877ZM37.3132 61.0043C34.1181 61.0043 31.5957 63.807 31.5957 67.2263C31.5957 70.6456 34.1741 73.4483 37.3132 73.4483C40.5083 73.4483 43.0307 70.6456 43.0307 67.2263C43.0868 63.807 40.5083 61.0043 37.3132 61.0043ZM84.9678 67.2263C84.9678 63.807 87.4902 61.0043 90.6853 61.0043C93.8804 61.0043 96.4593 63.807 96.4033 67.2263C96.4033 70.6456 93.8804 73.4483 90.6853 73.4483C87.5463 73.4483 84.9678 70.6456 84.9678 67.2263Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM85.9246 62.6241L87.0354 66.7697L79.1705 68.8771L87.0354 70.9845L85.9246 75.13L70.8795 71.0987L70.4206 70.9757L69.3581 70.691L68.8721 68.8771L69.3581 67.0632L70.8795 66.6555L70.8902 66.6584L70.889 66.6559L85.9246 62.6241ZM40.9644 66.7697L42.0751 62.6241L57.1108 66.6559L57.1096 66.6584L57.1203 66.6555L58.6417 67.0632L59.1277 68.8771L58.6417 70.691L57.5791 70.9757L57.1203 71.0987L42.0751 75.13L40.9644 70.9845L48.8293 68.8771L40.9644 66.7697Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM48.6624 59.3891C49.0479 58.7252 50.0067 58.7252 50.3921 59.3891L52.8967 63.7033C53.0382 63.947 53.2758 64.1197 53.5513 64.1789L58.4283 65.2278C59.1789 65.3892 59.4751 66.301 58.9628 66.8728L55.6337 70.588C55.4457 70.7978 55.3549 71.0772 55.3837 71.3575L55.8933 76.3199C55.9717 77.0836 55.196 77.6472 54.4939 77.3366L49.9318 75.3185C49.6742 75.2045 49.3804 75.2045 49.1227 75.3185L44.5606 77.3366C43.8586 77.6472 43.0829 77.0836 43.1613 76.3199L43.6709 71.3575C43.6997 71.0772 43.6089 70.7978 43.4209 70.588L40.0917 66.8728C39.5794 66.301 39.8757 65.3892 40.6262 65.2278L45.5033 64.1789C45.7787 64.1197 46.0164 63.947 46.1578 63.7033L48.6624 59.3891ZM78.6821 59.3891C78.2967 58.7252 77.3379 58.7252 76.9525 59.3891L74.4479 63.7033C74.3064 63.947 74.0688 64.1197 73.7933 64.1789L68.9163 65.2278C68.1657 65.3892 67.8695 66.301 68.3818 66.8728L71.7109 70.588C71.8989 70.7978 71.9897 71.0772 71.9609 71.3575L71.4513 76.3199C71.3729 77.0836 72.1486 77.6472 72.8507 77.3366L77.4128 75.3185C77.6704 75.2045 77.9642 75.2045 78.2219 75.3185L82.784 77.3366C83.486 77.6472 84.2617 77.0836 84.1833 76.3199L83.6737 71.3575C83.6449 71.0772 83.7357 70.7978 83.9237 70.588L87.2529 66.8728C87.7652 66.301 87.4689 65.3892 86.7184 65.2278L81.8413 64.1789C81.5659 64.1197 81.3282 63.947 81.1867 63.7033L78.6821 59.3891Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM59.4238 59.2827C60.8164 59.3427 61.9536 60.3454 62.2303 61.6591C62.5236 61.6025 62.8313 61.558 63.1494 61.5303C63.942 61.4614 64.8385 61.4933 65.7571 61.724C66.0094 60.3785 67.161 59.3437 68.5765 59.2827L85.5075 58.5534C88.3508 58.431 90.7227 60.7029 90.7227 63.5488V70.5111C90.7227 73.6118 87.9295 75.9649 84.8738 75.4385L69.0265 72.7081C67.1077 72.3775 65.7056 70.7133 65.7056 68.7662V65.1278C64.9838 64.7739 64.1904 64.6846 63.4297 64.7508C63.0039 64.7879 62.6155 64.8717 62.2947 64.9669V68.7662C62.2947 70.7133 60.8926 72.3776 58.9738 72.7082L43.1265 75.4385C40.0708 75.965 37.2776 73.6118 37.2776 70.5111V63.5488C37.2776 60.703 39.6495 58.431 42.4928 58.5535L59.4238 59.2827ZM51.5666 60.8571C50.6751 60.8112 49.9152 61.4967 49.8693 62.3882C49.8234 63.2796 50.5088 64.0396 51.4003 64.0855L58.323 64.442C59.2145 64.4879 59.9744 63.8024 60.0203 62.911C60.0662 62.0195 59.3807 61.2596 58.4892 61.2136L51.5666 60.8571ZM77.0596 62.3878C77.017 61.4961 77.7052 60.7388 78.5969 60.6961L85.5208 60.3651C86.4125 60.3224 87.1699 61.0107 87.2125 61.9024C87.2551 62.794 86.5668 63.5514 85.6752 63.594L78.7513 63.9251C77.8596 63.9677 77.1022 63.2794 77.0596 62.3878Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM92.392 69.3759C92.2097 63.6001 86.6243 58.501 80.8853 58.6822L80.8616 58.6829H80.838C75.8286 58.6829 70.3239 62.2682 70.3239 68.8921C70.3239 74.3134 74.3654 77.2539 78.5181 77.1237C82.7185 76.9782 85.8275 73.9873 85.7001 69.9497C85.6208 67.4387 83.3105 65.2712 80.8853 65.3477C79.5912 65.3885 78.6388 65.845 78.0199 66.5067C77.4008 67.1687 77.0006 68.159 77.0423 69.4813C77.0634 70.1498 77.795 70.8613 78.6961 70.8613C78.8649 70.8613 79.1463 70.7775 79.3675 70.5841C79.5515 70.4232 79.6773 70.2065 79.6666 69.8675C79.6405 69.0395 80.2905 68.3471 81.1185 68.321C81.9466 68.2949 82.639 68.9449 82.6651 69.7729C82.7514 72.5076 80.3737 73.8613 78.6961 73.8613C76.5658 73.8613 74.1275 72.2279 74.0438 69.576C73.9808 67.5779 74.5922 65.7798 75.8288 64.4575C77.0656 63.1351 78.813 62.4116 80.7907 62.3492C84.909 62.2192 88.5683 65.7253 88.6986 69.8551C88.8855 75.7779 84.2313 79.9291 78.6187 80.122L78.6145 80.1221C72.9526 80.3008 67.3239 76.1872 67.3239 68.8921C67.3239 60.1998 74.61 55.6943 80.8144 55.6829C88.1537 55.4654 95.1548 61.8109 95.3905 69.2813C95.4166 70.1093 94.7666 70.8017 93.9386 70.8278C93.1106 70.854 92.4181 70.2039 92.392 69.3759ZM48.1149 58.6822C42.3759 58.501 36.7904 63.6001 36.6082 69.3759C36.582 70.2039 35.8896 70.854 35.0616 70.8278C34.2336 70.8017 33.5835 70.1093 33.6096 69.2813C33.8454 61.8109 40.8464 55.4654 48.1858 55.6829C54.3902 55.6943 61.6762 60.1998 61.6762 68.8921C61.6762 76.1872 56.0476 80.3008 50.3857 80.1221L50.3815 80.122C44.7688 79.9291 40.1147 75.7779 40.3016 69.8551C40.4319 65.7253 44.0912 62.2192 48.2095 62.3492C50.1871 62.4116 51.9346 63.1351 53.1714 64.4575C54.408 65.7798 55.0194 67.5779 54.9563 69.576C54.8727 72.2279 52.4343 73.8613 50.3041 73.8613C48.6264 73.8613 46.2487 72.5076 46.3351 69.7729C46.3612 68.9449 47.0536 68.2949 47.8816 68.321C48.7096 68.3471 49.3597 69.0395 49.3336 69.8675C49.3229 70.2065 49.4487 70.4232 49.6327 70.5841C49.8539 70.7775 50.1353 70.8613 50.3041 70.8613C51.2052 70.8613 51.9367 70.1498 51.9578 69.4813C51.9996 68.159 51.5994 67.1687 50.9803 66.5067C50.3614 65.845 49.409 65.3885 48.1149 65.3477C45.6897 65.2712 43.3793 67.4387 43.3001 69.9497C43.1727 73.9873 46.2817 76.9782 50.4821 77.1237C54.6348 77.2539 58.6762 74.3134 58.6762 68.8921C58.6762 62.2682 53.1715 58.6829 48.1622 58.6829H48.1385L48.1149 58.6822Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM49.8545 62.5931C45.4365 62.5931 41.9486 66.4686 41.9486 71.1967C41.9486 75.9248 45.514 79.8002 49.8545 79.8002C54.2726 79.8002 57.7605 75.9248 57.7605 71.1967C57.838 66.4686 54.2726 62.5931 49.8545 62.5931ZM78.1454 62.5931C73.7274 62.5931 70.2395 66.4686 70.2395 71.1967C70.2395 75.9248 73.8049 79.8002 78.1454 79.8002C82.5635 79.8002 86.0514 75.9248 86.0514 71.1967C86.0514 66.4686 82.5635 62.5931 78.1454 62.5931ZM56.0935 58.9861C56.0935 54.2581 59.5814 50.3826 63.9994 50.3826C68.4175 50.3826 71.9829 54.2581 71.9054 58.9861C71.9054 63.7142 68.4175 67.5897 63.9994 67.5897C59.6589 67.5897 56.0935 63.7142 56.0935 58.9861Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM85.5605 62.6241L86.6713 66.7697L78.8063 68.8771L86.6713 70.9845L85.5605 75.13L70.5153 71.0987L70.0565 70.9757L68.994 70.691L68.5079 68.8771L68.994 67.0632L70.5153 66.6555L70.526 66.6584L70.5248 66.6559L85.5605 62.6241ZM41.3287 68.8771C41.3287 64.149 44.8166 60.2735 49.2347 60.2735C53.6527 60.2735 57.2181 64.149 57.1406 68.8771C57.1406 73.6051 53.6527 77.4806 49.2347 77.4806C44.8941 77.4806 41.3287 73.6051 41.3287 68.8771Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM38.5293 60.4656H89.4707V63.2013H87.4212V65.9371H85.372V68.6726H83.3227V71.4083H81.2734V74.1444H72.7832V71.4083H70.7337V68.6726H68.6843V65.9371H66.9276V63.2013H61.0724V65.9372H59.3157V68.6725H57.2664V71.4082H55.2171V74.1444H46.7268V71.4082H44.6774V68.6725H42.628V65.9372H40.5788V63.2013H38.5293V60.4656ZM71.0264 63.2015H68.9771V65.9371H71.0264L71.0264 68.6726H73.0758L73.0758 71.4082H75.1252V68.6726H77.1745L77.1745 71.4082H79.2239V68.6726H77.1745L77.1745 65.9369H75.1252V63.2015H73.0758L73.0758 65.9369H71.0264L71.0264 63.2015ZM75.1252 68.6726V65.9371H73.0758V68.6726H75.1252ZM44.9703 63.2018H42.9209V65.9374H44.9703V63.2018ZM47.0197 63.2015H49.069V65.9369H51.1184L51.1184 68.6726H53.1678V71.4082H51.1184L51.1184 68.6726H49.069V71.4082H47.0197V68.6726H44.9703V65.9369H47.0197V63.2015ZM49.069 65.9371V68.6726H47.0197V65.9371H49.069Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM44.0151 66.8883C44.0151 71.1846 47.1945 74.677 51.0428 74.677C54.9648 74.677 57.9968 71.1846 58.0643 66.8883C58.0959 64.8804 57.4237 63.0415 56.2958 61.6521L61.2524 63.1213L61.8704 61.0364L41.5613 55.0164L40.9433 57.1013L48.8517 59.4455C46.0102 60.4628 44.0151 63.4242 44.0151 66.8883ZM76.9684 74.677C73.1139 74.677 69.9469 71.1846 69.9469 66.8883C69.9469 64.8747 70.6209 63.031 71.7441 61.6402L66.7476 63.1213L66.1296 61.0364L86.4387 55.0164L87.0567 57.1013L79.1523 59.4443C82.0123 60.4605 84.0382 63.4228 83.9838 66.8883C83.9163 71.1846 80.8904 74.677 76.9684 74.677Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM45.4446 62.0925C44.5262 63.4197 43.9861 65.086 43.9861 66.8884C43.9861 71.1848 47.1655 74.6771 51.0138 74.6771C54.703 74.6771 57.6048 71.587 57.9924 67.6443C52.8468 66.4082 48.4732 64.4398 45.4446 62.0925ZM83.9242 66.8884C83.9242 65.086 83.3841 63.4197 82.4657 62.0925C79.4371 64.4398 75.0635 66.4082 69.9179 67.6443C70.3055 71.587 73.2073 74.6771 76.8965 74.6771C80.7448 74.6771 83.9242 71.1848 83.9242 66.8884Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM44.0151 65.873L44.0151 65.8884C44.0151 70.1848 47.1945 73.6771 51.0428 73.6771C54.9648 73.6771 57.9968 70.1848 58.0643 65.8884L58.0645 65.873H44.0151ZM69.9469 65.8884L69.9469 65.873H83.9963L83.9961 65.8884C83.9286 70.1848 80.8965 73.6771 76.9746 73.6771C73.1262 73.6771 69.9469 70.1848 69.9469 65.8884Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM51.0428 74.677C47.1945 74.677 44.0151 71.1847 44.0151 66.8883C44.0151 62.5919 47.084 59.0689 51.0305 59.0689C54.9771 59.0689 58.1318 62.5919 58.0643 66.8883C57.9968 71.1847 54.9648 74.677 51.0428 74.677ZM76.9684 74.677C73.1139 74.677 69.9469 71.1847 69.9469 66.8883C69.9469 62.5919 73.0157 59.0689 76.9684 59.0689C80.9211 59.0689 84.0513 62.5919 83.9838 66.8883C83.9163 71.1847 80.8904 74.677 76.9684 74.677Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM43.9317 66.8729C43.9317 62.0617 47.4808 58.1182 51.9765 58.1182C56.4722 58.1182 60.1002 62.0617 60.0214 66.8729C60.0214 71.684 56.4722 75.6276 51.9765 75.6276C47.5597 75.6276 43.9317 71.684 43.9317 66.8729ZM52.827 61.7733C51.2291 63.3032 48.992 67.4849 52.827 71.9726V71.9726C56.6619 67.485 54.4249 63.3033 52.827 61.7733V61.7733ZM76.022 58.1182C71.5264 58.1182 67.9772 62.0618 67.9772 66.8729C67.9772 71.684 71.6053 75.6276 76.022 75.6276C80.5177 75.6276 84.0669 71.684 84.0669 66.8729C84.1458 62.0618 80.5177 58.1182 76.022 58.1182ZM74.8938 71.9726C71.0589 67.4849 73.2959 63.3032 74.8938 61.7733V61.7733C76.4917 63.3033 78.7288 67.485 74.8938 71.9727V71.9726Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM41.8554 69.6834C46.8559 71.0869 50.7777 73.8245 53.9998 77.5259C58.0158 76.1821 60.9468 71.9669 60.9468 66.9749C60.9468 60.9005 56.6068 55.9762 51.253 55.9762C45.8993 55.9762 41.5592 60.9005 41.5592 66.9749C41.5592 67.9096 41.662 68.817 41.8554 69.6834ZM55.1645 70.9724C57.1174 70.9724 58.7005 69.1827 58.7005 66.9751C58.7005 64.7674 57.1174 62.9778 55.1645 62.9778C53.2116 62.9778 51.6284 64.7674 51.6284 66.9751C51.6284 69.1827 53.2116 70.9724 55.1645 70.9724ZM74.0002 77.5259C77.2223 73.8245 81.1441 71.0869 86.1446 69.6834C86.338 68.817 86.4408 67.9096 86.4408 66.9749C86.4408 60.9005 82.1007 55.9762 76.7469 55.9762C71.3932 55.9762 67.0531 60.9005 67.0531 66.9749C67.0531 71.9669 69.9842 76.1821 74.0002 77.5259ZM69.2995 66.9751C69.2995 69.1827 70.8826 70.9724 72.8355 70.9724C74.7884 70.9724 76.3716 69.1827 76.3716 66.9751C76.3716 64.7674 74.7884 62.9778 72.8355 62.9778C70.8826 62.9778 69.2995 64.7674 69.2995 66.9751Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM42.5388 71.5093C41.5041 69.7472 40.9004 67.6475 40.9004 65.3952C40.9004 59.1765 45.3424 54.0771 51.0547 54.0771C56.767 54.0771 61.3333 59.1765 61.2355 65.3952C61.2001 67.6475 60.6019 69.7472 59.5834 71.5093H42.5388ZM69.9754 67.3885C69.9754 68.9008 70.3678 70.3135 71.0444 71.5093H82.9313C83.5982 70.3135 83.9885 68.9008 84.0123 67.3885C84.0798 63.0921 80.9496 59.5691 76.9969 59.5691C73.0442 59.5691 69.9754 63.0921 69.9754 67.3885Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM51.5369 78.1268C56.7714 78.1268 61.0148 73.3121 61.0148 67.373C61.0148 61.4338 56.7714 56.6191 51.5369 56.6191C46.3024 56.6191 42.0589 61.4338 42.0589 67.373C42.0589 73.3121 46.3024 78.1268 51.5369 78.1268ZM55.3613 72.1119C57.6766 72.1119 59.5535 69.9902 59.5535 67.373C59.5535 64.7557 57.6766 62.634 55.3613 62.634C53.046 62.634 51.1691 64.7557 51.1691 67.373C51.1691 69.9902 53.046 72.1119 55.3613 72.1119ZM66.9852 67.3729C66.9852 73.3121 71.2286 78.1267 76.4631 78.1267C81.6976 78.1267 85.9411 73.3121 85.9411 67.3729C85.9411 61.4337 81.6976 56.6191 76.4631 56.6191C71.2286 56.6191 66.9852 61.4337 66.9852 67.3729ZM68.4743 67.3729C68.4743 69.9902 70.3512 72.1119 72.6664 72.1119C74.9817 72.1119 76.8586 69.9902 76.8586 67.3729C76.8586 64.7557 74.9817 62.6339 72.6664 62.6339C70.3512 62.6339 68.4743 64.7557 68.4743 67.3729Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM51.1513 78.4045C56.521 78.4045 60.874 73.4656 60.874 67.3731C60.874 61.2805 56.521 56.3416 51.1513 56.3416C45.7816 56.3416 41.4286 61.2805 41.4286 67.3731C41.4286 73.4656 45.7816 78.4045 51.1513 78.4045ZM53.1325 76.0511C55.5076 76.0511 57.4329 73.8746 57.4329 71.1898C57.4329 68.5049 55.5076 66.3284 53.1325 66.3284C50.7575 66.3284 48.8321 68.5049 48.8321 71.1898C48.8321 73.8746 50.7575 76.0511 53.1325 76.0511ZM66.9984 67.3731C66.9984 73.4656 71.3514 78.4045 76.7211 78.4045C82.0908 78.4045 86.4438 73.4656 86.4438 67.3731C86.4438 61.2805 82.0908 56.3416 76.7211 56.3416C71.3514 56.3416 66.9984 61.2805 66.9984 67.3731ZM70.4395 71.1898C70.4395 73.8746 72.3648 76.0511 74.7399 76.0511C77.115 76.0511 79.0403 73.8746 79.0403 71.1898C79.0403 68.5049 77.115 66.3284 74.7399 66.3284C72.3648 66.3284 70.4395 68.5049 70.4395 71.1898Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM55.5483 59.5605L51.0403 64.0685L46.5323 59.5604L43.7279 62.3648L48.2359 66.8728L43.7278 71.3809L46.5322 74.1853L51.0403 69.6772L55.5484 74.1853L58.3527 71.3809L53.8447 66.8728L58.3526 62.3648L55.5483 59.5605ZM76.9659 64.0685L81.4739 59.5605L84.2783 62.3649L79.7703 66.8729L84.2784 71.381L81.474 74.1853L76.9659 69.6773L72.4578 74.1854L69.6534 71.381L74.1615 66.8729L69.6535 62.3649L72.4579 59.5605L76.9659 64.0685Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM48.1544 59.1352C45.6252 60.6169 43.9317 63.5264 43.9317 66.8499C43.9317 68.8207 44.5404 70.646 45.5628 72.1143C46.0966 72.2302 46.6328 72.3584 47.1706 72.4991C49.7861 73.1832 52.2234 74.1053 54.416 75.2003C57.6921 74.0775 60.0225 70.7485 60.0225 66.8499C60.0252 66.6857 60.0236 66.5225 60.0177 66.3605C58.3667 65.9103 56.6469 65.2358 54.9408 64.3378C54.8902 66.3678 54.3168 68.6443 52.827 70.9827V70.9827C50.6612 67.5832 50.432 64.3145 50.9307 61.7436C49.8764 60.9115 48.9444 60.0321 48.1544 59.1352ZM84.0709 66.8497C84.0709 63.5262 82.3774 60.6167 79.8483 59.135C79.0583 60.032 78.1263 60.9115 77.0719 61.7436C77.5705 64.3145 77.3413 67.583 75.1756 70.9824V70.9825C73.6858 68.6442 73.1124 66.3678 73.0618 64.3378C71.3557 65.2358 69.6358 65.9103 67.9848 66.3605C67.979 66.5225 67.9774 66.6856 67.9801 66.8497C67.9801 70.7484 70.3106 74.0775 73.5868 75.2002C75.7793 74.1053 78.2165 73.1832 80.8319 72.4991C81.3697 72.3585 81.9058 72.2303 82.4395 72.1143C83.4621 70.646 84.0709 68.8206 84.0709 66.8497Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM44.2655 64.5746C44.0647 65.3067 43.9572 66.0839 43.9572 66.8883C43.9572 71.1847 47.1365 74.677 50.9848 74.677C54.9068 74.677 57.9388 71.1847 58.0063 66.8883C58.0738 62.5919 54.9191 59.0688 50.9725 59.0688C49.5518 59.0688 48.2449 59.5254 47.1539 60.3102C48.9425 60.747 50.9206 60.7971 52.6104 60.5255C51.165 61.2913 48.4327 61.941 45.6519 61.7693L45.6514 61.7699C43.0837 61.5527 40.2726 60.5831 38.7996 58.6705C38.9146 59.8206 39.7585 63.1768 44.2655 64.5746ZM83.6308 64.5746C83.8316 65.3067 83.9391 66.0839 83.9391 66.8883C83.9391 71.1847 80.7598 74.677 76.9115 74.677C72.9895 74.677 69.9575 71.1847 69.89 66.8883C69.8225 62.5919 72.9772 59.0688 76.9238 59.0688C78.3445 59.0688 79.6514 59.5254 80.7424 60.3102C78.9538 60.747 76.9757 60.7971 75.2859 60.5255C76.7313 61.2913 79.4636 61.941 82.2444 61.7693C82.2446 61.7695 82.2447 61.7697 82.2449 61.7699C84.8126 61.5527 87.6237 60.5831 89.0967 58.6705C88.9817 59.8206 88.1378 63.1768 83.6308 64.5746Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM51.4836 72.2337C53.9485 72.2337 55.9468 69.9455 55.9468 67.1228C55.9468 64.3002 53.9485 62.012 51.4836 62.012C49.0186 62.012 47.0204 64.3002 47.0204 67.1228C47.0204 69.9455 49.0186 72.2337 51.4836 72.2337ZM72.0535 67.1228C72.0535 69.9455 74.0517 72.2337 76.5166 72.2337C78.9816 72.2337 80.9798 69.9455 80.9798 67.1228C80.9798 64.3002 78.9816 62.012 76.5166 62.012C74.0517 62.012 72.0535 64.3002 72.0535 67.1228ZM58.2682 67.1229C58.2682 71.4006 54.8004 74.8684 50.5227 74.8684C46.2449 74.8684 42.7771 71.4006 42.7771 67.1229C42.7771 62.8452 46.2449 59.3774 50.5227 59.3774C54.8004 59.3774 58.2682 62.8452 58.2682 67.1229ZM61.1508 67.1229C61.1508 72.9927 56.3924 77.7511 50.5227 77.7511C44.6529 77.7511 39.8945 72.9927 39.8945 67.1229C39.8945 61.2531 44.6529 56.4948 50.5227 56.4948C54.3193 56.4948 57.651 58.4855 59.5308 61.4802C60.4443 61.139 61.7647 60.8037 63.2584 60.6951C64.8402 60.5802 66.6959 60.714 68.4987 61.4336C70.3837 58.4649 73.7005 56.4947 77.4775 56.4947C83.3473 56.4947 88.1057 61.2531 88.1057 67.1229C88.1057 72.9926 83.3473 77.751 77.4775 77.751C71.6078 77.751 66.8494 72.9926 66.8494 67.1229C66.8494 66.0579 67.006 65.0295 67.2975 64.0595C66.0455 63.5884 64.7049 63.4802 63.4673 63.5702C62.3489 63.6515 61.3749 63.8904 60.7195 64.116C61.0002 65.0694 61.1508 66.0786 61.1508 67.1229ZM77.4775 74.8684C73.1998 74.8684 69.732 71.4006 69.732 67.1229C69.732 62.8451 73.1998 59.3773 77.4775 59.3773C81.7553 59.3773 85.2231 62.8451 85.2231 67.1229C85.2231 71.4006 81.7553 74.8684 77.4775 74.8684Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM55.0537 71.559C55.3527 70.8534 55.5203 70.0614 55.5203 69.2246C55.5203 66.2674 53.4269 63.8702 50.8444 63.8702C48.262 63.8702 46.1686 66.2674 46.1686 69.2246C46.1686 70.0614 46.3362 70.8534 46.6352 71.559H42.2439V62.6867H59.5753V71.559H55.0537ZM50.8266 74.579L50.8444 74.579L50.8623 74.579H60.5819C61.6939 74.579 62.5952 73.6776 62.5952 72.5656V65.7478C62.8867 65.6918 63.2079 65.6466 63.5486 65.6218C64.2421 65.5714 64.9691 65.6094 65.6676 65.7853V72.5657C65.6676 73.6776 66.569 74.579 67.681 74.579H77.4046C77.4092 74.579 77.4138 74.579 77.4184 74.579C77.423 74.579 77.4276 74.579 77.4322 74.579H87.0257C88.1376 74.579 89.039 73.6776 89.039 72.5657V61.6801C89.039 60.5682 88.1376 59.6668 87.0257 59.6668H67.681C66.569 59.6668 65.6676 60.5682 65.6676 61.6801V62.7045C64.8448 62.5708 64.048 62.5575 63.3297 62.6098C63.0781 62.628 62.8327 62.6546 62.5952 62.6877V61.6801C62.5952 60.5681 61.6939 59.6667 60.5819 59.6667H41.2372C40.1253 59.6667 39.2239 60.5681 39.2239 61.6801V72.5656C39.2239 73.6776 40.1253 74.579 41.2372 74.579H50.8266ZM81.6276 71.559H86.019V62.6867H68.6876V71.559H73.2091C72.9102 70.8535 72.7425 70.0614 72.7425 69.2246C72.7425 66.2674 74.836 63.8702 77.4184 63.8702C80.0008 63.8702 82.0942 66.2674 82.0942 69.2246C82.0942 70.0614 81.9266 70.8535 81.6276 71.559Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM70.1835 68.9245C70.0253 68.2772 69.9408 67.5968 69.9408 66.8949C69.9408 62.5986 73.0096 59.0755 76.9623 59.0755C80.9149 59.0755 84.0452 62.5986 83.9777 66.8949C83.9667 67.5913 83.8781 68.2665 83.7205 68.9092C81.9215 67.1347 79.5538 66.0571 76.9597 66.0571C74.3582 66.0571 71.9843 67.1409 70.1835 68.9245ZM44.0213 66.8949C44.0213 67.5968 44.1058 68.2772 44.264 68.9245C46.0648 67.1409 48.4387 66.0571 51.0403 66.0571C53.6344 66.0571 56.0021 67.1347 57.801 68.9092C57.9586 68.2665 58.0472 67.5913 58.0582 66.8949C58.1257 62.5986 54.9955 59.0755 51.0428 59.0755C47.0901 59.0755 44.0213 62.5986 44.0213 66.8949Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM57.8472 60.6598C56.9993 59.7401 55.8359 59.2336 54.5709 59.2336C53.6254 59.2336 52.7595 59.5326 51.9972 60.122C51.6126 60.4196 51.2641 60.7836 50.9568 61.2085C50.6496 60.7837 50.3009 60.4196 49.9162 60.122C49.154 59.5326 48.2881 59.2336 47.3426 59.2336C46.0777 59.2336 44.9141 59.7401 44.0662 60.6598C43.2284 61.5687 42.7669 62.8103 42.7669 64.1562C42.7669 65.5415 43.2831 66.8095 44.3915 68.1469C45.383 69.3432 46.808 70.5577 48.4582 71.9639L48.4595 71.965L48.4618 71.967C49.0243 72.4465 49.6618 72.9898 50.3236 73.5684C50.4988 73.7218 50.7236 73.8063 50.9568 73.8063C51.1898 73.8063 51.4148 73.7218 51.5897 73.5686C52.2477 72.9932 52.882 72.4526 53.4425 71.9749L53.4557 71.9636L53.4558 71.9635L53.4559 71.9634C55.1058 70.5574 56.5307 69.3432 57.5222 68.1468C58.6305 66.8095 59.1466 65.5415 59.1466 64.1561C59.1466 62.8103 58.6851 61.5687 57.8472 60.6598ZM80.6574 59.2336C81.9223 59.2336 83.0858 59.7401 83.9337 60.6598C84.7716 61.5687 85.2331 62.8103 85.2331 64.1561C85.2331 65.5415 84.717 66.8095 83.6086 68.1468C82.6172 69.3432 81.1923 70.5574 79.5424 71.9634L79.5422 71.9636L79.5286 71.9752C78.9682 72.4528 78.3341 72.9933 77.6762 73.5686C77.5012 73.7218 77.2763 73.8063 77.0432 73.8063C76.81 73.8063 76.5852 73.7218 76.41 73.5684C75.747 72.9887 75.1085 72.4445 74.5452 71.9644L74.5446 71.9639C72.8944 70.5577 71.4694 69.3432 70.478 68.1469C69.3696 66.8095 68.8534 65.5415 68.8534 64.1562C68.8534 62.8103 69.3149 61.5687 70.1527 60.6598C71.0006 59.7401 72.1641 59.2336 73.4291 59.2336C74.3746 59.2336 75.2405 59.5326 76.0026 60.122C76.3874 60.4196 76.7361 60.7837 77.0432 61.2085C77.3505 60.7836 77.6991 60.4196 78.0837 60.122C78.846 59.5326 79.7119 59.2336 80.6574 59.2336Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM85.8052 66.3073L70.1786 70.9687L69.1255 67.4384L84.752 62.7769L85.8052 66.3073ZM57.8215 70.9687L42.1949 66.3073L43.248 62.7769L58.8746 67.4384L57.8215 70.9687Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM51.2525 61.0615L59.5048 69.3139L57.1343 71.6844L51.2525 65.8026L45.3707 71.6844L43.0001 69.3139L51.2525 61.0615ZM85 69.3139L76.7476 61.0615L68.4953 69.3139L70.8658 71.6844L76.7476 65.8026L82.6295 71.6844L85 69.3139Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM51.0428 74.677C47.1945 74.677 44.0151 71.1847 44.0151 66.8883C44.0151 64.9586 44.6342 63.1849 45.6738 61.8163H40.1362V59.0688H51.0271C51.0283 59.0688 51.0294 59.0688 51.0305 59.0688C51.0317 59.0688 51.0328 59.0688 51.0339 59.0688L76.9622 59.0689C76.9642 59.0689 76.9663 59.0688 76.9684 59.0688C76.9705 59.0688 76.9726 59.0689 76.9747 59.0689H87.8638V61.8163H82.3547C83.3994 63.1849 84.0141 64.9586 83.9838 66.8883C83.9163 71.1847 80.8904 74.677 76.9684 74.677C73.1139 74.677 69.9469 71.1847 69.9469 66.8883C69.9469 64.9586 70.566 63.1849 71.6061 61.8163L56.4254 61.8163C57.4749 63.1849 58.0946 64.9586 58.0643 66.8883C57.9968 71.1847 54.9648 74.677 51.0428 74.677Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM51.0428 74.677C47.1945 74.677 44.0151 71.1847 44.0151 66.8883C44.0151 62.5919 47.084 59.0688 51.0305 59.0688C54.9771 59.0688 58.1318 62.5919 58.0643 66.8883C57.9968 71.1847 54.9648 74.677 51.0428 74.677ZM69.9469 66.8883C69.9469 71.1847 73.1139 74.677 76.9684 74.677C80.8904 74.677 83.9163 71.1847 83.9838 66.8883C84.0513 62.5919 80.9211 59.0688 76.9684 59.0688C73.0157 59.0688 69.9469 62.5919 69.9469 66.8883ZM61.3531 66.8729C61.3531 72.5686 56.7359 77.1858 51.0403 77.1858C45.3446 77.1858 40.7274 72.5686 40.7274 66.8729C40.7274 61.1773 45.3446 56.56 51.0403 56.56C56.7359 56.56 61.3531 61.1773 61.3531 66.8729ZM65.1912 66.8729C65.1912 74.6883 58.8556 81.0239 51.0403 81.0239C43.2249 81.0239 36.8893 74.6883 36.8893 66.8729C36.8893 59.0575 43.2249 52.7219 51.0403 52.7219C58.8556 52.7219 65.1912 59.0575 65.1912 66.8729ZM36.1376 66.9316C36.1376 67.9594 35.3045 68.7925 34.2768 68.7925C33.2491 68.7925 32.416 67.9594 32.416 66.9316C32.416 65.9039 33.2491 65.0708 34.2768 65.0708C35.3045 65.0708 36.1376 65.9039 36.1376 66.9316ZM34.2768 73.8745C35.3045 73.8745 36.1376 73.0414 36.1376 72.0137C36.1376 70.986 35.3045 70.1528 34.2768 70.1528C33.2491 70.1528 32.416 70.986 32.416 72.0137C32.416 73.0414 33.2491 73.8745 34.2768 73.8745ZM36.1376 77.0952C36.1376 78.1229 35.3045 78.9561 34.2768 78.9561C33.2491 78.9561 32.416 78.1229 32.416 77.0952C32.416 76.0675 33.2491 75.2344 34.2768 75.2344C35.3045 75.2344 36.1376 76.0675 36.1376 77.0952ZM34.2768 84.03C35.3045 84.03 36.1376 83.1969 36.1376 82.1692C36.1376 81.1415 35.3045 80.3083 34.2768 80.3083C33.2491 80.3083 32.416 81.1415 32.416 82.1692C32.416 83.1969 33.2491 84.03 34.2768 84.03ZM36.1376 87.2428C36.1376 88.2705 35.3045 89.1037 34.2768 89.1037C33.2491 89.1037 32.416 88.2705 32.416 87.2428C32.416 86.2151 33.2491 85.382 34.2768 85.382C35.3045 85.382 36.1376 86.2151 36.1376 87.2428ZM34.2768 94.1774C35.3045 94.1774 36.1376 93.3443 36.1376 92.3165C36.1376 91.2888 35.3045 90.4557 34.2768 90.4557C33.2491 90.4557 32.416 91.2888 32.416 92.3165C32.416 93.3443 33.2491 94.1774 34.2768 94.1774Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM43.98 66.2481C43.9649 66.4593 43.9572 66.6728 43.9572 66.8883C43.9572 71.1847 47.1365 74.677 50.9848 74.677C54.9068 74.677 57.9388 71.1847 58.0063 66.8883C58.0398 64.76 57.2825 62.8215 56.03 61.407C55.8499 61.5086 55.6686 61.6095 55.4863 61.7095C51.5771 63.8544 47.6349 65.3727 43.98 66.2481ZM83.8952 66.8883C83.8952 66.6728 83.8875 66.4593 83.8723 66.2481C80.2174 65.3727 76.2753 63.8544 72.3661 61.7095C72.1837 61.6095 72.0025 61.5086 71.8224 61.407C70.5698 62.8215 69.8126 64.76 69.846 66.8883C69.9135 71.1847 72.9455 74.677 76.8675 74.677C80.7159 74.677 83.8952 71.1847 83.8952 66.8883Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM44.0151 67.3883C44.0151 71.6847 47.1945 75.177 51.0428 75.177C54.9648 75.177 57.9968 71.6847 58.0643 67.3883C58.1318 63.0919 54.9771 59.5688 51.0305 59.5688C47.084 59.5688 44.0151 63.0919 44.0151 67.3883ZM76.9684 75.177C73.1139 75.177 69.9469 71.6847 69.9469 67.3883C69.9469 63.0919 73.0157 59.5688 76.9684 59.5688C80.9211 59.5688 84.0513 63.0919 83.9838 67.3883C83.9163 71.6847 80.8904 75.177 76.9684 75.177ZM45.9407 56.3729C41.8539 58.0595 39 62.365 39 67.3695C39 72.3808 41.9252 76.6911 46 78.3729C43.3405 75.5874 41.6767 71.6778 41.6767 67.3695C41.6767 63.0648 43.3017 59.158 45.9407 56.3729ZM89 67.3695C89 62.365 86.1461 58.0595 82.0593 56.3729C84.6983 59.158 86.3233 63.0648 86.3233 67.3695C86.3233 71.6778 84.6595 75.5874 82 78.3729C86.0748 76.6911 89 72.3808 89 67.3695Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM43.9861 66.8883C43.9861 71.1847 47.1655 74.677 51.0138 74.677C54.9358 74.677 57.9678 71.1847 58.0353 66.8883C58.062 65.1873 57.5837 63.6076 56.7511 62.3197C57.902 62.0514 59.0807 61.6937 60.2754 61.23L59.3635 58.8804C51.8879 61.7817 45.161 60.0615 42.8645 58.9256L41.7471 61.1848C42.5643 61.589 43.7656 62.029 45.2585 62.3743C44.4537 63.6521 43.9861 65.2113 43.9861 66.8883ZM76.9394 74.677C73.0849 74.677 69.9179 71.1847 69.9179 66.8883C69.9179 62.5919 72.9867 59.0688 76.9394 59.0688C80.8921 59.0688 84.0223 62.5919 83.9548 66.8883C83.8873 71.1847 80.8614 74.677 76.9394 74.677ZM71.4367 57.6346C70.0718 58.7363 69.1905 60.0583 68.8129 60.8886L66.5613 59.9791C67.0753 58.8488 68.1719 57.23 69.8432 55.881C71.5304 54.5192 73.8503 53.3978 76.7676 53.3978C79.68 53.3978 82.0524 54.5154 83.8056 55.8633C85.5464 57.2017 86.7338 58.8083 87.3125 59.9286L85.1098 60.9391C84.6759 60.0989 83.7038 58.7647 82.2571 57.6523C80.8228 56.5496 78.9798 55.7066 76.7676 55.7066C74.5602 55.7066 72.7857 56.5458 71.4367 57.6346Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM73.8948 66.0872C73.8948 72.601 69.2408 77.8814 63.4999 77.8814C57.7589 77.8814 53.105 72.601 53.105 66.0872C53.105 59.5734 57.7589 54.293 63.4999 54.293C69.2408 54.293 73.8948 59.5734 73.8948 66.0872ZM67.898 60.69C67.898 63.5605 65.8395 65.8875 63.3002 65.8875C60.761 65.8875 58.7025 63.5605 58.7025 60.69C58.7025 57.8195 60.761 55.4926 63.3002 55.4926C65.8395 55.4926 67.898 57.8195 67.898 60.69Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM48.8558 66.8883C48.8558 71.1847 52.0351 74.677 55.8834 74.677C59.8054 74.677 62.8374 71.1847 62.9049 66.8883C62.9725 62.5919 59.8177 59.0688 55.8712 59.0688C51.9246 59.0688 48.8558 62.5919 48.8558 66.8883ZM41.7308 71.1045C38.7633 71.1045 36.3116 68.4115 36.3116 65.0985C36.3116 61.7855 38.6781 59.0688 41.7213 59.0688C44.7646 59.0688 47.1973 61.7855 47.1452 65.0985C47.0931 68.4115 44.7551 71.1045 41.7308 71.1045ZM80.854 65.0985C80.854 68.4115 83.3056 71.1045 86.2731 71.1045C89.2974 71.1045 91.6355 68.4115 91.6875 65.0985C91.7396 61.7855 89.3069 59.0688 86.2637 59.0688C83.2204 59.0688 80.854 61.7855 80.854 65.0985ZM72.1278 74.677C68.2733 74.677 65.1063 71.1847 65.1063 66.8883C65.1063 62.5919 68.1751 59.0688 72.1278 59.0688C76.0804 59.0688 79.2107 62.5919 79.1432 66.8883C79.0756 71.1847 76.0498 74.677 72.1278 74.677Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM83.8544 61.469L84.8144 65.0516L78.0174 66.8729L84.8144 68.6941L83.8544 72.2767L70.8522 68.7928L70.4557 68.6865L69.5374 68.4405L69.1174 66.8729L69.5374 65.3053L70.8522 64.953L70.8615 64.9554L70.8604 64.9533L83.8544 61.469ZM43.1918 65.0516L44.1517 61.469L57.1458 64.9533L57.1447 64.9554L57.154 64.953L58.4687 65.3053L58.8888 66.8729L58.4687 68.4405L57.5505 68.6865L57.154 68.7928L44.1517 72.2767L43.1918 68.6941L49.9888 66.8729L43.1918 65.0516Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM50.1096 57.7606C50.495 57.0967 51.4538 57.0967 51.8392 57.7606L54.0596 61.5852C54.201 61.8289 54.4387 62.0016 54.7142 62.0608L59.0378 62.9906C59.7883 63.152 60.0846 64.0639 59.5723 64.6356L56.6209 67.9292C56.4329 68.139 56.3421 68.4184 56.3709 68.6987L56.8227 73.098C56.9011 73.8617 56.1254 74.4252 55.4233 74.1147L51.3789 72.3256C51.1213 72.2116 50.8275 72.2116 50.5698 72.3256L46.5254 74.1147C45.8234 74.4252 45.0477 73.8617 45.1261 73.098L45.5779 68.6987C45.6067 68.4184 45.5159 68.139 45.3279 67.9292L42.3765 64.6356C41.8642 64.0639 42.1605 63.152 42.911 62.9906L47.2346 62.0608C47.5101 62.0016 47.7477 61.8289 47.8892 61.5852L50.1096 57.7606ZM77.8905 57.7606C77.505 57.0967 76.5462 57.0967 76.1608 57.7606L73.9404 61.5852C73.799 61.8289 73.5613 62.0016 73.2859 62.0608L68.9623 62.9906C68.2117 63.152 67.9155 64.0639 68.4278 64.6356L71.3791 67.9292C71.5671 68.139 71.6579 68.4184 71.6291 68.6987L71.1774 73.098C71.0989 73.8617 71.8746 74.4252 72.5767 74.1147L76.6211 72.3256C76.8787 72.2116 77.1725 72.2116 77.4302 72.3256L81.4746 74.1147C82.1766 74.4252 82.9523 73.8617 82.8739 73.098L82.4221 68.6987C82.3934 68.4184 82.4841 68.139 82.6722 67.9292L85.6235 64.6356C86.1358 64.0639 85.8395 63.152 85.089 62.9906L80.7654 62.0608C80.49 62.0016 80.2523 61.8289 80.1108 61.5852L77.8905 57.7606Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM59.7169 60.9969C60.9776 61.0512 62.0289 61.8779 62.4221 63.0086C62.6983 62.9509 62.9912 62.9059 63.2957 62.8794C63.9817 62.8197 64.7619 62.8513 65.5587 63.0668C65.9356 61.9064 67.0012 61.0521 68.2834 60.9969L80.9144 60.4529C83.7576 60.3304 86.1295 62.6024 86.1295 65.4482V69.2964C86.1295 72.3972 83.3364 74.7503 80.2806 74.2238L68.7333 72.2343C66.8145 71.9037 65.4125 70.2395 65.4125 68.2924V65.8586C64.8147 65.5655 64.1577 65.4915 63.5278 65.5464C63.1752 65.577 62.8535 65.6464 62.5878 65.7253V68.2924C62.5878 70.2395 61.1858 71.9037 59.267 72.2343L47.7197 74.2238C44.6639 74.7503 41.8707 72.3972 41.8707 69.2964V65.4482C41.8707 62.6024 44.2427 60.3304 47.0859 60.4529L59.7169 60.9969ZM53.7037 62.3219C52.9654 62.2838 52.3361 62.8515 52.2981 63.5898C52.2601 64.328 52.8278 64.9573 53.566 64.9953L59.2988 65.2906C60.037 65.3286 60.6663 64.7609 60.7044 64.0227C60.7424 63.2844 60.1747 62.6551 59.4365 62.6171L53.7037 62.3219ZM74.8149 63.5895C74.7796 62.8511 75.3496 62.2239 76.088 62.1886L81.8218 61.9144C82.5602 61.8791 83.1874 62.4491 83.2227 63.1875C83.258 63.9259 82.688 64.5531 81.9496 64.5884L76.2158 64.8625C75.4774 64.8978 74.8502 64.3279 74.8149 63.5895Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM86.3331 68.5791C86.1839 63.851 81.6115 59.6767 76.9134 59.825L76.8941 59.8256H76.8747C72.7739 59.8256 68.2677 62.7606 68.2677 68.183C68.2677 72.6211 71.5761 75.0282 74.9756 74.9216C78.4141 74.8026 80.9592 72.3542 80.8549 69.0489C80.79 66.9933 78.8987 65.2189 76.9134 65.2816C75.8541 65.315 75.0744 65.6886 74.5677 66.2304C74.0609 66.7722 73.7333 67.5829 73.7675 68.6654C73.7848 69.2127 74.3837 69.7951 75.1213 69.7951C75.2595 69.7951 75.4899 69.7265 75.6709 69.5682C75.8216 69.4365 75.9245 69.2591 75.9158 68.9816C75.8944 68.3038 76.4265 67.7369 77.1044 67.7156C77.7822 67.6942 78.349 68.2263 78.3704 68.9041C78.4411 71.1428 76.4947 72.251 75.1213 72.251C73.3774 72.251 71.3814 70.9138 71.3129 68.7429C71.2612 67.1073 71.7617 65.6352 72.7741 64.5528C73.7866 63.4703 75.217 62.878 76.836 62.8269C80.2073 62.7205 83.2029 65.5907 83.3096 68.9714C83.4626 73.8199 79.6526 77.2182 75.0579 77.3761L75.0545 77.3762C70.4196 77.5225 65.8118 74.155 65.8118 68.183C65.8118 61.0674 71.7763 57.3791 76.8554 57.3698C82.8635 57.1917 88.5947 62.3863 88.7877 68.5017C88.8091 69.1795 88.277 69.7463 87.5991 69.7677C86.9213 69.7891 86.3545 69.257 86.3331 68.5791ZM50.0868 59.825C45.3888 59.6767 40.8164 63.851 40.6672 68.5791C40.6458 69.257 40.079 69.7891 39.4012 69.7677C38.7233 69.7463 38.1912 69.1795 38.2126 68.5017C38.4056 62.3863 44.1367 57.1917 50.1449 57.3698C55.224 57.3791 61.1885 61.0674 61.1885 68.183C61.1885 74.155 56.5807 77.5225 51.9458 77.3762L51.9424 77.3761C47.3477 77.2182 43.5377 73.8199 43.6907 68.9714C43.7974 65.5907 46.793 62.7205 50.1643 62.8269C51.7832 62.878 53.2137 63.4703 54.2262 64.5528C55.2385 65.6352 55.739 67.1073 55.6874 68.7429C55.6189 70.9138 53.6229 72.251 51.879 72.251C50.5056 72.251 48.5592 71.1428 48.6299 68.9041C48.6512 68.2263 49.2181 67.6942 49.8959 67.7156C50.5737 67.7369 51.1059 68.3038 51.0845 68.9816C51.0757 69.2591 51.1787 69.4365 51.3293 69.5682C51.5104 69.7265 51.7408 69.7951 51.879 69.7951C52.6166 69.7951 53.2155 69.2127 53.2328 68.6654C53.267 67.5829 52.9394 66.7722 52.4326 66.2304C51.9259 65.6886 51.1462 65.315 50.0868 65.2816C48.1015 65.2189 46.2102 66.9933 46.1454 69.0489C46.0411 72.3542 48.5861 74.8026 52.0247 74.9216C55.4242 75.0282 58.7326 72.6211 58.7326 68.183C58.7326 62.7606 54.2263 59.8256 50.1256 59.8256H50.1062L50.0868 59.825Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0H0V128H128V0ZM51.0428 77.177C47.1945 77.177 44.0151 73.6846 44.0151 69.3883C44.0151 65.0919 47.084 61.5688 51.0305 61.5688C54.9771 61.5688 58.1318 65.0919 58.0643 69.3883C57.9968 73.6846 54.9648 77.177 51.0428 77.177ZM56.9749 58.7113C56.9749 63.0077 60.1542 66.5 64.0025 66.5C67.9245 66.5 70.9565 63.0077 71.0241 58.7113C71.0916 54.4149 67.9368 50.8918 63.9903 50.8918C60.0437 50.8918 56.9749 54.4149 56.9749 58.7113ZM76.9684 77.177C73.1139 77.177 69.9469 73.6846 69.9469 69.3883C69.9469 65.0919 73.0157 61.5688 76.9684 61.5688C80.9211 61.5688 84.0513 65.0919 83.9838 69.3883C83.9163 73.6846 80.8904 77.177 76.9684 77.177Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H128V128H0V0ZM44.0151 66.8883C44.0151 71.1847 47.1945 74.6771 51.0428 74.6771C54.9648 74.6771 57.9968 71.1847 58.0643 66.8883C58.1318 62.5919 54.9771 59.0689 51.0305 59.0689C47.084 59.0689 44.0151 62.5919 44.0151 66.8883ZM84.8144 65.0517L83.8544 61.4691L70.8604 64.9534L70.8615 64.9556L70.8522 64.9531L69.5374 65.3054L69.1174 66.873L69.5374 68.4406L70.4556 68.6867L70.8522 68.7929L83.8544 72.2769L84.8144 68.6942L78.0174 66.873L84.8144 65.0517Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e, o) {
        var content = o(785);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("33386d4f", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(787);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("98149038", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(794);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("c7942d5e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(796);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("a8888834", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(800);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("7574e68e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(802);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("24d60a8a", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(804);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("8682003c", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(806);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("72bc2bb7", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(808);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("7801315a", content, !0, {
            sourceMap: !1
        })
    }, function(t) {
        t.exports = JSON.parse('[{"hex":"#757E8A"},{"hex":"#5865F2"},{"hex":"#3BA3E8"},{"hex":"#3AB8BA"},{"hex":"#3BA55C"},{"hex":"#88C800"},{"hex":"#FAA61A"},{"hex":"#FA7A0B"},{"hex":"#ED4245"},{"hex":"#EB459E"},{"hex":"#A072ED"}]')
    }, function(t) {
        t.exports = JSON.parse('[{"hex":"#FFFFFF"},{"hex":"#000000"}]')
    }, function(t) {
        t.exports = JSON.parse("[]")
    }, function(t) {
        t.exports = JSON.parse('[{"name":"base-shape"},{"name":"thick"},{"name":"chubby-shape"},{"name":"hanging-ears"},{"name":"triangle-hair"},{"name":"tounge-shape"},{"name":"devil"},{"name":"angel"},{"name":"top-hat"},{"name":"ribbon"},{"name":"hair-1"},{"name":"hair-2"},{"name":"mohawk"},{"name":"headphones"},{"name":"face-mask"},{"name":"cap"},{"name":"knit-cap"},{"name":"mustache"},{"name":"mustache-top-hat"},{"name":"crown"},{"name":"american-indian"},{"name":"cat"},{"name":"mouse"},{"name":"bunny"},{"name":"ninja-band"},{"name":"samurai"},{"name":"alien"},{"name":"scarred-laugh"},{"name":"vampire"},{"name":"vampire-ears"},{"name":"hannibal"},{"name":"base-upside-down"},{"name":"thick-upside-down"}]')
    }, function(t) {
        t.exports = JSON.parse('[{"name":"base-eyes"},{"name":"wink"},{"name":"squinting"},{"name":"happy"},{"name":"angry"},{"name":"sad"},{"name":"annoyed"},{"name":"angry-brows"},{"name":"sceptical"},{"name":"mono-brow"},{"name":"female-lashes"},{"name":"scared"},{"name":"cute"},{"name":"cute-downwards"},{"name":"chubby"},{"name":"third-eye"},{"name":"single-eye"},{"name":"line-eyes"},{"name":"line-eyes-happy"},{"name":"dead"},{"name":"glasses-1"},{"name":"glasses-2"},{"name":"8-bit-shades"},{"name":"sunglasses"},{"name":"monocle"},{"name":"cat-eyes"},{"name":"evil-eyes"},{"name":"spider-eyes"},{"name":"star-eyes"},{"name":"heart-eyes"},{"name":"swirly-eyes"},{"name":"crazy-eyes"}]')
    }, function(t, e, o) {
        var content = o(811);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("df2c3fb6", content, !0, {
            sourceMap: !1
        })
    }, function(t) {
        t.exports = JSON.parse('[{"name":"floating-animation"},{"name":"spinning-animation"},{"name":"rotate-linear-animation"},{"name":"jumping-animation"},{"name":"spinning-y-axis-animation"},{"name":"rubber-stretch-animation"},{"name":"scaling-animation"},{"name":"scale-fade-animation"},{"name":"running-around-animation"},{"name":"teleport-animation"},{"name":"break-out-animation"},{"name":"shake-dance-animation"}]')
    }, function(t) {
        t.exports = JSON.parse('[{"name":"shiny-effect","componentName":"ShinyEffect","isOnTop":"true"},{"name":"rotating-stripes","componentName":"RotatingStripes"},{"name":"expanding-circles","componentName":"ExpandingCircles"},{"name":"star-sky","componentName":"StarSky"},{"name":"rain-sky","componentName":"RainSky"},{"name":"earth-effect","componentName":"EarthEffect"},{"name":"fill-up-effect","componentName":"FillUpEffect"},{"name":"check-pattern","componentName":"CheckPattern"},{"name":"sparkle-effect","componentName":"SparkleEffect","isOnTop":"true"},{"name":"music-notes","componentName":"MusicNotes","isOnTop":"true"},{"name":"hearts-effect","componentName":"HeartsEffect","isOnTop":"true"},{"name":"sawblade-effect","componentName":"SawbladeEffect","isOnTop":"true"}]')
    }, function(t, e, o) {
        var content = o(813);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("5e4f2536", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(815);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("0063f913", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(817);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("622ba15e", content, !0, {
            sourceMap: !1
        })
    }, , function(t, e, o) {
        var content = o(821);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("4aa157dc", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(823);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("b493e874", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(825);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("a72fdc30", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(827);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("0b862d9c", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(829);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("6a20d86c", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(831);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("dea081f6", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(833);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("6d43d14c", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(835);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("183a37e8", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(837);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("f0adf350", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(839);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("e8a879f6", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(841);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(5).default)("0e725012", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(106);
        var l = o(524),
            n = {
                methods: {
                    getCroppedImage: function(t, e, o, l) {
                        var canvas = document.createElement("canvas"),
                            n = canvas.getContext("2d");
                        canvas.width = e, canvas.height = o;
                        var image = document.createElement("img");
                        image.src = t;
                        var r = canvas.width / image.width,
                            c = canvas.height / image.height,
                            d = Math.min(r, c),
                            v = (canvas.width - image.width * d * l) / 2,
                            h = (canvas.height - image.height * d * l) / 2;
                        return n.drawImage(image, 0, 0, image.width, image.height, v, h, image.width * d * l, image.height * d * l), canvas.toDataURL()
                    }
                }
            },
            r = o(525),
            c = {
                name: "AnimatedAvatar",
                components: {
                    SvgWrapper: l.default,
                    EffectWrapper: r.default
                },
                mixins: [n],
                props: {
                    isBackgroundUpload: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        rerenderFlag: !1
                    }
                },
                computed: {
                    cancelGifGeneration: function() {
                        return this.$store.state.cancelGifGeneration
                    },
                    isGeneratingGif: function() {
                        return this.$store.state.isGeneratingGif
                    },
                    isCustomShapeUpload: function() {
                        return "custom-upload" === this.shapeOutside
                    },
                    colorBackground: function() {
                        return this.$store.state.customization.colorBackground
                    },
                    colorForeground: function() {
                        return this.$store.state.customization.colorForeground
                    },
                    colorEyes: function() {
                        return this.$store.state.customization.customEyeColor
                    },
                    shapeOutside: function() {
                        return this.$store.state.customization.outsideShape
                    },
                    shapeInside: function() {
                        return this.$store.state.customization.insideShape
                    },
                    bodyAnimation: function() {
                        return this.$store.state.customization.bodyAnimation
                    },
                    effectAnimation: function() {
                        return this.$store.state.customization.effectAnimation
                    },
                    effectColor: function() {
                        return this.$store.state.customization.customEffectColor || this.$store.state.customization.colorForeground
                    },
                    shapeFileObjectUrl: function() {
                        return this.$store.state.customization.shapeFileObjectUrl
                    },
                    shapeFileCroppedObjectUrl: function() {
                        return this.getCroppedImage(this.shapeFileObjectUrl, this.$store.state.gifDownloadDimensions, this.$store.state.gifDownloadDimensions, this.shapeFileScale)
                    },
                    backgroundFileObjectUrl: function() {
                        return this.$store.state.customization.backgroundFileObjectUrl
                    },
                    backgroundFileCroppedObjectUrl: function() {
                        return this.getCroppedImage(this.backgroundFileObjectUrl, this.$store.state.gifDownloadDimensions, this.$store.state.gifDownloadDimensions, this.backgroundFileScale)
                    },
                    shapeFileScale: function() {
                        return this.$store.state.customization.shapeFileScale
                    },
                    backgroundFileScale: function() {
                        return this.$store.state.customization.backgroundFileScale
                    },
                    animationLength: function() {
                        return this.$store.state.customization.animationLength
                    },
                    customEffectOrder: function() {
                        return this.$store.state.customization.customEffectOrder
                    },
                    actualEffectOrder: function() {
                        return this.customEffectOrder ? this.customEffectOrder : Object.keys(this.effectAnimation).length && this.effectAnimation.isOnTop ? "top" : "bottom"
                    },
                    isClassicMode: function() {
                        return this.$store.state.localStorage.classicMode
                    }
                },
                watch: {
                    isGeneratingGif: function(t) {
                        !1 === t && this.forceRerender()
                    },
                    bodyAnimation: function() {
                        this.forceRerender()
                    },
                    effectAnimation: function() {
                        this.forceRerender()
                    },
                    animationLength: function() {
                        this.forceRerender()
                    },
                    actualEffectOrder: function() {
                        this.forceRerender()
                    },
                    isClassicMode: function() {
                        this.forceRerender()
                    }
                },
                methods: {
                    forceRerender: function() {
                        var t = this;
                        this.rerenderFlag = !0, this.$nextTick((function() {
                            t.rerenderFlag = !1
                        }))
                    }
                }
            },
            d = (o(786), o(6)),
            component = Object(d.a)(c, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "avatar-wrapper"
                }, [t.cancelGifGeneration || t.rerenderFlag ? t._e() : o("div", {
                    staticClass: "display-background",
                    style: t.isBackgroundUpload ? "" : "background-color: " + t.colorBackground + ";",
                    attrs: {
                        id: "avatarGif"
                    }
                }, [t.isBackgroundUpload && t.backgroundFileObjectUrl ? o("div", {
                    staticClass: "custom-background-upload"
                }, [o("img", {
                    attrs: {
                        src: t.backgroundFileCroppedObjectUrl
                    }
                })]) : t._e(), t._v(" "), o("div", {
                    staticClass: "lower-effect-animation"
                }, [Object.keys(t.effectAnimation).length && "bottom" === t.actualEffectOrder ? o("effect-wrapper", {
                    attrs: {
                        "component-name": t.effectAnimation.componentName,
                        "is-in-avatar": !0,
                        "effect-color": t.effectColor
                    }
                }) : t._e()], 1), t._v(" "), o("div", {
                    staticClass: "body-animation animated",
                    style: "animation: " + t.animationLength + "s " + t.bodyAnimation.name + " infinite;"
                }, [t.isCustomShapeUpload ? t._e() : o("svg", {
                    staticStyle: {
                        display: "block"
                    },
                    attrs: {
                        id: "avatarSvg",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "128",
                        height: "128",
                        viewbox: "0 0 128 128"
                    }
                }, [o("svg-wrapper", {
                    ref: "shapeOutside",
                    staticClass: "svg-wrapper",
                    attrs: {
                        "use-clip-path": t.colorEyes ? "" : "animated-eyes-clip-path",
                        name: t.shapeOutside,
                        color: t.colorForeground
                    }
                }), t._v(" "), o("svg-wrapper", {
                    ref: "shapeInside",
                    staticClass: "svg-wrapper",
                    attrs: {
                        "clip-path": t.colorEyes ? "" : "animated-eyes-clip-path",
                        name: t.shapeInside,
                        color: t.colorEyes || "black"
                    }
                })], 1), t._v(" "), t.isCustomShapeUpload && t.shapeFileObjectUrl ? o("div", {
                    staticClass: "custom-shape-upload"
                }, [o("img", {
                    attrs: {
                        src: t.shapeFileCroppedObjectUrl
                    }
                })]) : t._e()]), t._v(" "), o("div", {
                    staticClass: "upper-effect-animation"
                }, [Object.keys(t.effectAnimation).length && "top" === t.actualEffectOrder ? o("effect-wrapper", {
                    attrs: {
                        "component-name": t.effectAnimation.componentName,
                        "is-in-avatar": !0,
                        "effect-color": t.effectColor
                    }
                }) : t._e()], 1)]), t._v(" "), o("div", {
                    staticClass: "black-background"
                })])
            }), [], !1, null, "f9077e76", null);
        e.default = component.exports;
        installComponents(component, {
            EffectWrapper: o(525).default,
            SvgWrapper: o(524).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = {
                name: "Avatar",
                components: {
                    SvgWrapper: o(524).default
                },
                props: {
                    backgroundType: {
                        type: String,
                        default: "full"
                    },
                    isBackgroundUpload: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        rerenderFlag: !1
                    }
                },
                computed: {
                    isCustomShapeUpload: function() {
                        return "custom-upload" === this.shapeOutside
                    },
                    colorBackground: function() {
                        return this.$store.state.customization.colorBackground
                    },
                    colorForeground: function() {
                        return this.$store.state.customization.colorForeground
                    },
                    colorEyes: function() {
                        return this.$store.state.customization.customEyeColor
                    },
                    shapeOutside: function() {
                        return this.$store.state.customization.outsideShape
                    },
                    shapeInside: function() {
                        return this.$store.state.customization.insideShape
                    },
                    shapeFileObjectUrl: function() {
                        return this.$store.state.customization.shapeFileObjectUrl
                    },
                    backgroundFileObjectUrl: function() {
                        return this.$store.state.customization.backgroundFileObjectUrl
                    },
                    shapeFileScale: function() {
                        return this.$store.state.customization.shapeFileScale
                    },
                    backgroundFileScale: function() {
                        return this.$store.state.customization.backgroundFileScale
                    },
                    isClassicMode: function() {
                        return this.$store.state.localStorage.classicMode
                    }
                },
                watch: {
                    shapeOutside: function() {
                        this.forceRerender()
                    },
                    shapeInside: function() {
                        this.forceRerender()
                    },
                    isClassicMode: function() {
                        this.forceRerender()
                    }
                },
                methods: {
                    forceRerender: function() {
                        var t = this;
                        this.rerenderFlag = !0, this.$nextTick((function() {
                            t.rerenderFlag = !1
                        }))
                    }
                }
            },
            n = (o(784), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "avatar-wrapper"
                }, [t.rerenderFlag ? t._e() : o("div", {
                    staticClass: "display-background",
                    style: t.isBackgroundUpload ? "" : "background-color: " + t.colorBackground + ";"
                }, [o("div", {
                    attrs: {
                        id: "avatarPng"
                    }
                }, [t.isBackgroundUpload && t.backgroundFileObjectUrl ? o("div", {
                    staticClass: "custom-background-upload"
                }, [o("img", {
                    style: "transform: scale(" + t.backgroundFileScale + ")",
                    attrs: {
                        src: t.backgroundFileObjectUrl
                    }
                })]) : t._e(), t._v(" "), o("svg", {
                    staticStyle: {
                        display: "block"
                    },
                    attrs: {
                        id: "avatarSvg",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "128",
                        height: "128",
                        viewbox: "0 0 128 128"
                    }
                }, ["full" !== t.backgroundType || t.isBackgroundUpload ? t._e() : o("rect", {
                    attrs: {
                        x: "0",
                        y: "0",
                        width: "128",
                        height: "128",
                        fill: t.colorBackground
                    }
                }), t._v(" "), "round" !== t.backgroundType || t.isBackgroundUpload ? t._e() : o("circle", {
                    staticClass: "background-circle",
                    attrs: {
                        cx: "64",
                        cy: "64",
                        r: "64",
                        fill: t.colorBackground
                    }
                }), t._v(" "), t.isCustomShapeUpload ? t._e() : o("svg-wrapper", {
                    ref: "shapeOutside",
                    staticClass: "svg-wrapper",
                    attrs: {
                        "use-clip-path": t.colorEyes ? "" : "eyes-clip-path",
                        name: t.shapeOutside,
                        color: t.colorForeground
                    }
                }), t._v(" "), t.isCustomShapeUpload ? t._e() : o("svg-wrapper", {
                    ref: "shapeInside",
                    staticClass: "svg-wrapper",
                    attrs: {
                        "clip-path": t.colorEyes ? "" : "eyes-clip-path",
                        name: t.shapeInside,
                        color: t.colorEyes || "black"
                    }
                })], 1), t._v(" "), t.isCustomShapeUpload && t.shapeFileObjectUrl ? o("div", {
                    staticClass: "custom-shape-upload"
                }, [o("img", {
                    style: "transform: scale(" + t.shapeFileScale + ")",
                    attrs: {
                        src: t.shapeFileObjectUrl
                    }
                })]) : t._e()])])])
            }), [], !1, null, "b559ba66", null);
        e.default = component.exports;
        installComponents(component, {
            SvgWrapper: o(524).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(522);
        var l = {
                name: "DownloadButton",
                components: {
                    ChameleonIcon: o(520).default
                },
                props: {
                    downloadType: {
                        type: String,
                        default: ""
                    },
                    downloadDimensions: {
                        type: Number,
                        default: 128
                    }
                }
            },
            n = (o(793), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "download-button"
                }, [o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "download"
                    }
                }), t._v(" "), o("div", {
                    staticClass: "text"
                }, [o("h2", [t._v("Download")]), t._v(" "), o("p", [t._v(t._s(t.downloadDimensions + "x" + t.downloadDimensions + " " + t.downloadType))])]), t._v(" "), o("div", {
                    staticClass: "settings",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.$emit("settings-click")
                        }
                    }
                }, [o("chameleon-icon", {
                    staticClass: "cog-wheel-icon",
                    attrs: {
                        name: "cog-wheel"
                    }
                })], 1)], 1)
            }), [], !1, null, "8ffaf124", null);
        e.default = component.exports;
        installComponents(component, {
            ChameleonIcon: o(520).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = {
                name: "RoundButton"
            },
            n = (o(795), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this.$createElement;
                return (this._self._c || t)("div", {
                    staticClass: "round-button"
                }, [this._t("default")], 2)
            }), [], !1, null, "eb056eee", null);
        e.default = component.exports
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(58), o(21), o(60), o(82), o(291);
        var l = o(526),
            n = o(640),
            r = o(606),
            c = o(809),
            d = o(607),
            v = o(528),
            h = o(608),
            C = o(609),
            f = o(610),
            m = {
                name: "Customizer",
                components: {
                    ColorChooser: l.default,
                    ShapeChooser: n.default
                },
                props: {
                    initialCustomBackgroundColor: {
                        type: String,
                        default: void 0
                    },
                    initialCustomForegroundColor: {
                        type: String,
                        default: void 0
                    },
                    initialCustomEyeColor: {
                        type: String,
                        default: void 0
                    },
                    isBackgroundUpload: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        foregroundColors: d,
                        customEyeColors: h,
                        customEffectColors: v,
                        outsideShapes: C,
                        insideShapes: f
                    }
                },
                computed: {
                    isUploadedShape: function() {
                        return "custom-upload" === this.selectedOutsideShape
                    },
                    selectedBackgroundColor: function() {
                        return this.$store.state.customization.colorBackground
                    },
                    selectedForegroundColor: function() {
                        return this.$store.state.customization.colorForeground
                    },
                    selectedOutsideShape: function() {
                        return this.$store.state.customization.outsideShape
                    },
                    selectedInsideShape: function() {
                        return this.$store.state.customization.insideShape
                    },
                    selectedCustomEyeColor: function() {
                        return this.$store.state.customization.customEyeColor
                    },
                    shapeFileName: function() {
                        return this.$store.state.customization.shapeFileName
                    },
                    shapeFileObjectUrl: function() {
                        return this.$store.state.customization.shapeFileObjectUrl
                    },
                    shapeFileScale: function() {
                        return this.$store.state.customization.shapeFileScale
                    },
                    backgroundFileName: function() {
                        return this.$store.state.customization.backgroundFileName
                    },
                    backgroundFileObjectUrl: function() {
                        return this.$store.state.customization.backgroundFileObjectUrl
                    },
                    backgroundFileScale: function() {
                        return this.$store.state.customization.backgroundFileScale
                    },
                    isClassicMode: function() {
                        return this.$store.state.localStorage.classicMode
                    },
                    backgroundColors: function() {
                        return this.isClassicMode ? c : r
                    }
                },
                methods: {
                    closeAllExpanded: function() {
                        this.$refs.bg.closeColorPicker(), this.$refs.bg.closeUpload(), this.$refs.fg.closeColorPicker(), this.$refs.eyc.closeColorPicker(), this.$refs.os.closeUpload()
                    },
                    changeBackgroundColor: function(t) {
                        this.$store.commit("customization/setColorBackground", t)
                    },
                    changeForegroundColor: function(t) {
                        this.$store.commit("customization/setColorForeground", t)
                    },
                    changeInsideShape: function(t) {
                        this.$store.commit("customization/setInsideShape", t)
                    },
                    changeOutsideShape: function(t) {
                        this.$store.commit("customization/setOutsideShape", t)
                    },
                    changeCustomEyeColor: function(t) {
                        this.$store.commit("customization/setCustomEyeColor", t)
                    },
                    handleShapeFileUpload: function(t) {
                        t && t.length ? (this.$store.commit("customization/setShapeFileName", t[0].name), this.$store.commit("customization/setShapeFileObjectUrl", URL.createObjectURL(t[0])), this.outsideShape = "custom-upload") : (this.$store.commit("customization/setShapeFileName", void 0), this.$store.commit("customization/setShapeFileObjectUrl", void 0))
                    },
                    handleBackgroundFileUpload: function(t) {
                        t && t.length ? (this.$store.commit("customization/setBackgroundFileName", t[0].name), this.$store.commit("customization/setBackgroundFileObjectUrl", URL.createObjectURL(t[0]))) : (this.$store.commit("customization/setBackgroundFileName", void 0), this.$store.commit("customization/setBackgroundFileObjectUrl", void 0))
                    },
                    changeBackgroundFileScale: function(t) {
                        this.$store.commit("customization/setBackgroundFileScale", t)
                    },
                    changeShapeFileScale: function(t) {
                        this.$store.commit("customization/setShapeFileScale", t)
                    }
                }
            },
            w = (o(810), o(6)),
            component = Object(w.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "customizer"
                }, [o("div", {
                    staticClass: "choosers-wrapper"
                }, [o("color-chooser", {
                    ref: "bg",
                    staticClass: "chooser",
                    attrs: {
                        title: "Background",
                        colors: t.backgroundColors,
                        "selected-color": t.selectedBackgroundColor,
                        "initial-custom-color": t.initialCustomBackgroundColor,
                        "upload-possible": !0,
                        "is-uploaded": t.isBackgroundUpload,
                        "file-object-url": t.backgroundFileObjectUrl,
                        "file-name": t.backgroundFileName,
                        "file-scale": t.backgroundFileScale
                    },
                    on: {
                        "color-change": function(e) {
                            return t.changeBackgroundColor(e)
                        },
                        "color-input-focus": function(e) {
                            return t.$emit("color-input-focus")
                        },
                        "color-input-blur": function(e) {
                            return t.$emit("color-input-blur")
                        },
                        "is-upload": function(e) {
                            return t.$emit("is-background-upload", e)
                        },
                        "file-change": function(e) {
                            return t.handleBackgroundFileUpload(e)
                        },
                        "file-scale-change": function(e) {
                            return t.changeBackgroundFileScale(e)
                        }
                    }
                }), t._v(" "), o("color-chooser", {
                    ref: "fg",
                    staticClass: "chooser",
                    class: {
                        disabled: t.isUploadedShape
                    },
                    attrs: {
                        title: "Body color",
                        colors: t.foregroundColors,
                        "selected-color": t.selectedForegroundColor,
                        "initial-custom-color": t.initialCustomForegroundColor
                    },
                    on: {
                        "color-change": function(e) {
                            return t.changeForegroundColor(e)
                        },
                        "color-input-focus": function(e) {
                            return t.$emit("color-input-focus")
                        },
                        "color-input-blur": function(e) {
                            return t.$emit("color-input-blur")
                        }
                    }
                }), t._v(" "), o("color-chooser", {
                    ref: "eyc",
                    staticClass: "chooser",
                    class: {
                        disabled: t.isUploadedShape
                    },
                    attrs: {
                        title: "Custom eye color",
                        colors: t.customEyeColors,
                        "selected-color": t.selectedCustomEyeColor,
                        "initial-custom-color": t.initialCustomEyeColor,
                        "allow-none": !0
                    },
                    on: {
                        "color-change": function(e) {
                            return t.changeCustomEyeColor(e)
                        }
                    }
                })], 1), t._v(" "), o("div", {
                    staticClass: "choosers-wrapper"
                }, [o("shape-chooser", {
                    ref: "os",
                    staticClass: "chooser",
                    attrs: {
                        title: "Body",
                        type: "outside-shape",
                        shapes: t.outsideShapes,
                        "selected-shape": t.selectedOutsideShape,
                        "upload-possible": !0,
                        "file-object-url": t.shapeFileObjectUrl,
                        "file-name": t.shapeFileName,
                        "file-scale": t.shapeFileScale
                    },
                    on: {
                        "shape-change": function(e) {
                            return t.changeOutsideShape(e)
                        },
                        "file-change": function(e) {
                            return t.handleShapeFileUpload(e)
                        },
                        "file-scale-change": function(e) {
                            return t.changeShapeFileScale(e)
                        }
                    }
                }), t._v(" "), o("shape-chooser", {
                    staticClass: "chooser",
                    class: {
                        disabled: t.isUploadedShape
                    },
                    attrs: {
                        title: "Eyes",
                        type: "inside-shape",
                        shapes: t.insideShapes,
                        "selected-shape": t.selectedInsideShape
                    },
                    on: {
                        "shape-change": function(e) {
                            return t.changeInsideShape(e)
                        }
                    }
                })], 1)])
            }), [], !1, null, "78ccdc5a", null);
        e.default = component.exports;
        installComponents(component, {
            ColorChooser: o(526).default,
            ShapeChooser: o(640).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = o(528),
            n = o(612),
            r = o(613),
            c = o(526),
            d = o(641),
            v = o(527),
            h = o(642),
            C = {
                name: "AnimationCustomizer",
                components: {
                    AnimationChooser: d.default,
                    ColorChooser: c.default,
                    RangeSliderComponent: v.default,
                    EffectOrderChooser: h.default
                },
                props: {
                    initialCustomEffectColor: {
                        type: String,
                        default: void 0
                    }
                },
                data: function() {
                    return {
                        customEffectColors: l,
                        bodyAnimations: n,
                        effectAnimations: r
                    }
                },
                computed: {
                    selectedBodyAnimation: function() {
                        return this.$store.state.customization.bodyAnimation
                    },
                    selectedEffectAnimation: function() {
                        return this.$store.state.customization.effectAnimation
                    },
                    selectedCustomEffectColor: function() {
                        return this.$store.state.customization.customEffectColor
                    },
                    animationLength: function() {
                        return this.$store.state.customization.animationLength
                    }
                },
                methods: {
                    changeBodyAnimation: function(t) {
                        this.$store.commit("customization/setBodyAnimation", t)
                    },
                    changeEffectAnimation: function(t) {
                        this.$store.commit("customization/setEffectAnimation", t)
                    },
                    changeCustomEffectColor: function(t) {
                        this.$store.commit("customization/setCustomEffectColor", t)
                    },
                    changeAnimationLength: function(t) {
                        var e = Math.round(100 * (6 - t)) / 100;
                        this.$store.commit("customization/setAnimationLength", e)
                    }
                }
            },
            f = (o(816), o(6)),
            component = Object(f.a)(C, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "customizer"
                }, [o("div", {
                    staticClass: "choosers-wrapper"
                }, [o("animation-chooser", {
                    staticClass: "chooser",
                    attrs: {
                        title: "Effect",
                        animations: t.effectAnimations,
                        "selected-animation": t.selectedEffectAnimation,
                        type: "effect-animation"
                    },
                    on: {
                        "animation-change": function(e) {
                            return t.changeEffectAnimation(e)
                        }
                    }
                }), t._v(" "), o("color-chooser", {
                    staticClass: "chooser",
                    attrs: {
                        title: "Effect color",
                        colors: t.customEffectColors,
                        "selected-color": t.selectedCustomEffectColor,
                        "initial-custom-color": t.initialCustomEffectColor,
                        "allow-auto": !0
                    },
                    on: {
                        "color-change": function(e) {
                            return t.changeCustomEffectColor(e)
                        }
                    }
                }), t._v(" "), o("effect-order-chooser", {
                    staticClass: "chooser"
                })], 1), t._v(" "), o("div", {
                    staticClass: "choosers-wrapper"
                }, [o("animation-chooser", {
                    staticClass: "chooser",
                    attrs: {
                        title: "Body animation",
                        animations: t.bodyAnimations,
                        "selected-animation": t.selectedBodyAnimation,
                        type: "body-animation"
                    },
                    on: {
                        "animation-change": function(e) {
                            return t.changeBodyAnimation(e)
                        }
                    }
                }), t._v(" "), o("div", {
                    staticClass: "animation-length-wrapper"
                }, [o("div", {
                    staticClass: "chooser"
                }, [o("h3", {
                    staticClass: "title"
                }, [t._v("\n          Animation speed\n        ")]), t._v(" "), o("range-slider-component", {
                    staticClass: "slider",
                    attrs: {
                        value: Math.round(100 * (6 - t.animationLength)) / 100,
                        min: 1,
                        max: 5,
                        lazy: !0
                    },
                    on: {
                        change: function(e) {
                            return t.changeAnimationLength(e)
                        }
                    }
                }), t._v(" "), o("div", {
                    staticClass: "reset",
                    class: {
                        "reset--visible": 3 !== parseFloat(t.animationLength)
                    }
                }, [o("span", {
                    on: {
                        click: function(e) {
                            return t.changeAnimationLength(3)
                        }
                    }
                }, [t._v("\n            Reset to recommended\n          ")])])], 1)])], 1)])
            }), [], !1, null, "5e8f4002", null);
        e.default = component.exports;
        installComponents(component, {
            AnimationChooser: o(641).default,
            ColorChooser: o(526).default,
            EffectOrderChooser: o(642).default,
            RangeSliderComponent: o(527).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = {},
            n = (o(820), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    l = t._self._c || e;
                return l("div", {
                    staticClass: "about"
                }, [l("div", {
                    staticClass: "about__inner"
                }, [l("h2", {
                    staticClass: "about__title"
                }, [t._v("\n      About this profile picture logo maker\n    ")]), t._v(" "), l("div", {
                    staticClass: "announcement"
                }, [l("img", {
                    attrs: {
                        src: o(523)
                    }
                }), t._v(" "), l("p", [t._v("\n        Want to stay up to date when new features and shapes are added? Have you experienced a bug or have an idea for an awesome feature?"), l("br"), t._v(" "), l("no-ssr", [t._v("\n          Join our "), l("a", {
                    attrs: {
                        href: "https://github.com/SudoLite",
                        alt: "join my discord server"
                    }
                }, [t._v("community server on Discord")]), t._v(".\n        ")])], 1)]), t._v(" "), l("h3", [t._v("Create your custom Profile Picture / PFP")]), t._v(" "), l("p", [t._v("\n      The Discord Avatar Maker lets you create a cool, cute or funny avatar, perfect to use as a profile picture in the Discord app. Simply choose out of hundreds of possible shape combinations,\n      set the color to your liking, and hit the download button! Or just upload custom images! The recommended download specs for your pfp / logo are 512x512px PNG, but download with smaller or bigger dimensions are also possible.\n    ")]), t._v(" "), l("h3", [t._v("Create your custom Discord Server Logo or Icon")]), t._v(" "), l("p", [t._v("\n      The images created with this tool can be used as a custom logo for your Discord server. Once your server has enough boosts, you can even use the animated versions. If you don't want to use a predefined shape, you can upload your own logo\n      and animate it with effects and movements!\n    ")]), t._v(" "), l("h3", [t._v("Make an animated GIF")]), t._v(" "), l("p", [t._v("\n      Choose out of many animations to get your PFP moving! These can be used with a Nitro subscription or if your server is boosted enough. The GIF will be generated in the browser,\n      so it may take a while once you hit the download button.\n    ")]), t._v(" "), l("h3", [t._v("About")]), t._v(" "), t._m(0)])])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("p", [this._v("\n      The Maker is specifically tailored for your pfp or server logo in Discord."), e("br"), this._v("\n      Ongoing development and support by "), e("a", {
                    attrs: {
                        href: "https://github.com/SudoLite"
                    }
                }, [this._v("Nerd Or Die")]), this._v(". Discover new "), e("a", {
                    attrs: {
                        href: "https://github.com/SudoLite"
                    }
                }, [this._v("Twitch Overlay Templates and Live Stream Alerts")]), this._v(" to help you elevate your content.\n      We hope you enjoy your new profile picture or Discord server logo!\n    ")])
            }], !1, null, "e5813870", null);
        e.default = component.exports
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = {
                name: "LoadingSpinner",
                components: {
                    ChameleonIcon: o(520).default
                }
            },
            n = (o(822), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "loading-wrapper"
                }, [e("chameleon-icon", {
                    staticClass: "icon icon-shape",
                    attrs: {
                        name: "thick"
                    }
                }), this._v(" "), e("chameleon-icon", {
                    staticClass: "icon icon-eyes",
                    attrs: {
                        name: "cute"
                    }
                })], 1)
            }), [], !1, null, "44253766", null);
        e.default = component.exports;
        installComponents(component, {
            ChameleonIcon: o(520).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = o(520),
            n = o(643),
            r = {
                components: {
                    ChameleonIcon: l.default,
                    ToggleSwitch: n.default
                },
                props: {
                    animationActive: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        navigationItems: [{
                            id: 0,
                            label: "Customize",
                            iconName: "customize-icon"
                        }, {
                            id: 1,
                            label: "Animate",
                            iconName: "animate-icon"
                        }],
                        showTopSettings: !1
                    }
                },
                computed: {
                    isDarkMode: function() {
                        return this.$store.state.localStorage.darkMode
                    },
                    isClassicMode: function() {
                        return this.$store.state.localStorage.classicMode
                    },
                    localStorageLoaded: function() {
                        return this.$store.state.localStorage.status
                    },
                    activeItem: function() {
                        return this.animationActive ? 1 : 0
                    }
                },
                methods: {
                    handleClick: function(t) {
                        this.$emit("animation-state-change", 1 === t)
                    },
                    toggleDarkMode: function() {
                        this.$store.commit("localStorage/toggleDarkMode")
                    },
                    toggleClassicMode: function() {
                        this.$store.commit("localStorage/toggleClassicMode"), this.$store.commit("localStorage/setClassicModeTooltipSeen", !0)
                    },
                    toggleTopSettingsVisible: function() {
                        this.showTopSettings = !this.showTopSettings, this.$store.commit("localStorage/setClassicModeTooltipSeen", !0)
                    }
                }
            },
            c = (o(826), o(6)),
            component = Object(c.a)(r, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "navigation-bar"
                }, [o("ul", t._l(t.navigationItems, (function(e) {
                    return o("li", {
                        key: e.id
                    }, [o("div", {
                        staticClass: "navigation-bar__item",
                        class: {
                            "navigation-bar__item--active": e.id === t.activeItem
                        },
                        on: {
                            click: function(o) {
                                return t.handleClick(e.id)
                            }
                        }
                    }, [o("chameleon-icon", {
                        staticClass: "item-icon",
                        attrs: {
                            name: e.iconName
                        }
                    }), t._v(" "), o("span", {
                        staticClass: "label"
                    }, [t._v(t._s(e.label))]), t._v(" "), e.beta ? o("div", {
                        staticClass: "beta-badge"
                    }, [o("span", [t._v("Beta")])]) : t._e()], 1)])
                })), 0), t._v(" "), o("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.localStorageLoaded,
                        expression: "localStorageLoaded"
                    }],
                    staticClass: "settings"
                }, [o("chameleon-icon", {
                    staticClass: "dots-menu",
                    attrs: {
                        name: "three-vertical-dots"
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.toggleTopSettingsVisible(e)
                        }
                    }
                }), t._v(" "), t.showTopSettings ? o("div", {
                    staticClass: "top-settings-menu-wrapper",
                    on: {
                        mousedown: t.toggleTopSettingsVisible
                    }
                }, [o("div", {
                    staticClass: "top-settings-menu",
                    on: {
                        mousedown: function(t) {
                            t.stopPropagation()
                        }
                    }
                }, [o("div", {
                    staticClass: "settings-switch"
                }, [o("span", {
                    staticClass: "settings-switch__label"
                }, [t._v("Classic Mode")]), t._v(" "), o("toggle-switch", {
                    staticClass: "toggle",
                    attrs: {
                        "is-classic-mode-switcher": !0
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.toggleClassicMode(e)
                        }
                    },
                    model: {
                        value: t.isClassicMode,
                        callback: function(e) {
                            t.isClassicMode = e
                        },
                        expression: "isClassicMode"
                    }
                })], 1), t._v(" "), o("div", {
                    staticClass: "settings-switch"
                }, [o("span", {
                    staticClass: "settings-switch__label"
                }, [t._v("Dark Mode")]), t._v(" "), o("toggle-switch", {
                    staticClass: "toggle",
                    attrs: {
                        "is-theme-switcher": !0
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.toggleDarkMode(e)
                        }
                    },
                    model: {
                        value: t.isDarkMode,
                        callback: function(e) {
                            t.isDarkMode = e
                        },
                        expression: "isDarkMode"
                    }
                })], 1)])]) : t._e(), t._v(" "), o("div", {
                    staticClass: "settings-switch settings-switch--desktop"
                }, [o("span", {
                    staticClass: "settings-switch__label"
                }, [t._v("Classic Mode")]), t._v(" "), o("toggle-switch", {
                    staticClass: "toggle",
                    attrs: {
                        "is-classic-mode-switcher": !0
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.toggleClassicMode(e)
                        }
                    },
                    model: {
                        value: t.isClassicMode,
                        callback: function(e) {
                            t.isClassicMode = e
                        },
                        expression: "isClassicMode"
                    }
                })], 1), t._v(" "), o("div", {
                    staticClass: "settings-switch settings-switch--desktop"
                }, [o("span", {
                    staticClass: "settings-switch__label"
                }, [t._v("Dark Mode")]), t._v(" "), o("toggle-switch", {
                    staticClass: "toggle",
                    attrs: {
                        "is-theme-switcher": !0
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.toggleDarkMode(e)
                        }
                    },
                    model: {
                        value: t.isDarkMode,
                        callback: function(e) {
                            t.isDarkMode = e
                        },
                        expression: "isDarkMode"
                    }
                })], 1)], 1)])
            }), [], !1, null, "4f3c02be", null);
        e.default = component.exports;
        installComponents(component, {
            ChameleonIcon: o(520).default,
            ToggleSwitch: o(643).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = {
                name: "DownloadSettingsOverlay",
                computed: {
                    downloadDimensions: {
                        get: function() {
                            return this.$store.state.downloadDimensions
                        },
                        set: function(t) {
                            this.$store.commit("setDownloadDimensions", t)
                        }
                    },
                    gifDownloadDimensions: {
                        get: function() {
                            return this.$store.state.gifDownloadDimensions
                        },
                        set: function(t) {
                            this.$store.commit("setGifDownloadDimensions", t)
                        }
                    },
                    backgroundType: {
                        get: function() {
                            return this.$store.state.backgroundType
                        },
                        set: function(t) {
                            this.$store.commit("setBackgroundType", t)
                        }
                    },
                    isAnimationState: function() {
                        return this.$store.state.isAnimationState
                    },
                    hasRecommendedSettings: function() {
                        return this.isAnimationState ? 128 === this.gifDownloadDimensions : 512 === this.downloadDimensions && "full" === this.backgroundType
                    }
                },
                methods: {
                    resetSettings: function() {
                        this.downloadDimensions = 512, this.gifDownloadDimensions = 128, this.backgroundType = "full"
                    }
                }
            },
            n = (o(830), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("overlay", {
                    on: {
                        close: function(e) {
                            return t.$emit("close")
                        }
                    }
                }, [o("h3", {
                    staticClass: "settings-heading"
                }, [t._v("\n    Size\n  ")]), t._v(" "), t.isAnimationState ? o("div", {
                    staticClass: "custom-radio-group"
                }, [o("div", {
                    staticClass: "custom-radio-group__option"
                }, [o("label", {
                    attrs: {
                        for: "gif-settings-128"
                    }
                }, [o("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.gifDownloadDimensions,
                        expression: "gifDownloadDimensions"
                    }],
                    attrs: {
                        id: "gif-settings-128",
                        type: "radio"
                    },
                    domProps: {
                        value: 128,
                        checked: t._q(t.gifDownloadDimensions, 128)
                    },
                    on: {
                        change: function(e) {
                            t.gifDownloadDimensions = 128
                        }
                    }
                }), t._v(" "), o("div", {
                    staticClass: "fake-radio fake-radio--first"
                }, [o("span", [t._v("128px")])])])]), t._v(" "), o("div", {
                    staticClass: "custom-radio-group__option"
                }, [o("label", {
                    attrs: {
                        for: "gif-settings-256"
                    }
                }, [o("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.gifDownloadDimensions,
                        expression: "gifDownloadDimensions"
                    }],
                    attrs: {
                        id: "gif-settings-256",
                        type: "radio"
                    },
                    domProps: {
                        value: 256,
                        checked: t._q(t.gifDownloadDimensions, 256)
                    },
                    on: {
                        change: function(e) {
                            t.gifDownloadDimensions = 256
                        }
                    }
                }), t._v(" "), o("div", {
                    staticClass: "fake-radio"
                }, [o("span", [t._v("256px")])])])]), t._v(" "), o("div", {
                    staticClass: "custom-radio-group__option"
                }, [o("label", {
                    attrs: {
                        for: "gif-settings-512"
                    }
                }, [o("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.gifDownloadDimensions,
                        expression: "gifDownloadDimensions"
                    }],
                    attrs: {
                        id: "gif-settings-512",
                        type: "radio"
                    },
                    domProps: {
                        value: 512,
                        checked: t._q(t.gifDownloadDimensions, 512)
                    },
                    on: {
                        change: function(e) {
                            t.gifDownloadDimensions = 512
                        }
                    }
                }), t._v(" "), o("div", {
                    staticClass: "fake-radio fake-radio--last"
                }, [o("span", [t._v("512px")])])])])]) : o("div", {
                    staticClass: "custom-radio-group"
                }, [o("div", {
                    staticClass: "custom-radio-group__option"
                }, [o("label", {
                    attrs: {
                        for: "settings-128"
                    }
                }, [o("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.downloadDimensions,
                        expression: "downloadDimensions"
                    }],
                    attrs: {
                        id: "settings-128",
                        type: "radio"
                    },
                    domProps: {
                        value: 128,
                        checked: t._q(t.downloadDimensions, 128)
                    },
                    on: {
                        change: function(e) {
                            t.downloadDimensions = 128
                        }
                    }
                }), t._v(" "), o("div", {
                    staticClass: "fake-radio fake-radio--first"
                }, [o("span", [t._v("128px")])])])]), t._v(" "), o("div", {
                    staticClass: "custom-radio-group__option"
                }, [o("label", {
                    attrs: {
                        for: "settings-512"
                    }
                }, [o("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.downloadDimensions,
                        expression: "downloadDimensions"
                    }],
                    attrs: {
                        id: "settings-512",
                        type: "radio"
                    },
                    domProps: {
                        value: 512,
                        checked: t._q(t.downloadDimensions, 512)
                    },
                    on: {
                        change: function(e) {
                            t.downloadDimensions = 512
                        }
                    }
                }), t._v(" "), o("div", {
                    staticClass: "fake-radio"
                }, [o("span", [t._v("512px")])])])]), t._v(" "), o("div", {
                    staticClass: "custom-radio-group__option"
                }, [o("label", {
                    attrs: {
                        for: "settings-1024"
                    }
                }, [o("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.downloadDimensions,
                        expression: "downloadDimensions"
                    }],
                    attrs: {
                        id: "settings-1024",
                        type: "radio"
                    },
                    domProps: {
                        value: 1024,
                        checked: t._q(t.downloadDimensions, 1024)
                    },
                    on: {
                        change: function(e) {
                            t.downloadDimensions = 1024
                        }
                    }
                }), t._v(" "), o("div", {
                    staticClass: "fake-radio fake-radio--last"
                }, [o("span", [t._v("1024px")])])])])]), t._v(" "), t.isAnimationState ? t._e() : o("h3", {
                    staticClass: "settings-heading"
                }, [t._v("\n    Background\n  ")]), t._v(" "), t.isAnimationState ? t._e() : o("div", {
                    staticClass: "custom-radio-group"
                }, [o("div", {
                    staticClass: "custom-radio-group__option"
                }, [o("label", {
                    attrs: {
                        for: "settings-full"
                    }
                }, [o("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.backgroundType,
                        expression: "backgroundType"
                    }],
                    attrs: {
                        id: "settings-full",
                        type: "radio",
                        value: "full"
                    },
                    domProps: {
                        checked: t._q(t.backgroundType, "full")
                    },
                    on: {
                        change: function(e) {
                            t.backgroundType = "full"
                        }
                    }
                }), t._v(" "), o("div", {
                    staticClass: "fake-radio fake-radio--first"
                }, [o("chameleon-icon", {
                    staticClass: "radio-icon",
                    attrs: {
                        name: "background-type-full"
                    }
                }), t._v(" "), o("span", [t._v("Full")])], 1)])]), t._v(" "), o("div", {
                    staticClass: "custom-radio-group__option"
                }, [o("label", {
                    attrs: {
                        for: "settings-round"
                    }
                }, [o("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.backgroundType,
                        expression: "backgroundType"
                    }],
                    attrs: {
                        id: "settings-round",
                        type: "radio",
                        value: "round"
                    },
                    domProps: {
                        checked: t._q(t.backgroundType, "round")
                    },
                    on: {
                        change: function(e) {
                            t.backgroundType = "round"
                        }
                    }
                }), t._v(" "), o("div", {
                    staticClass: "fake-radio"
                }, [o("chameleon-icon", {
                    staticClass: "radio-icon",
                    attrs: {
                        name: "background-type-round"
                    }
                }), t._v(" "), o("span", [t._v("Round")])], 1)])]), t._v(" "), o("div", {
                    staticClass: "custom-radio-group__option"
                }, [o("label", {
                    attrs: {
                        for: "settings-transparent"
                    }
                }, [o("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.backgroundType,
                        expression: "backgroundType"
                    }],
                    attrs: {
                        id: "settings-transparent",
                        type: "radio",
                        value: "transparent"
                    },
                    domProps: {
                        checked: t._q(t.backgroundType, "transparent")
                    },
                    on: {
                        change: function(e) {
                            t.backgroundType = "transparent"
                        }
                    }
                }), t._v(" "), o("div", {
                    staticClass: "fake-radio fake-radio--last"
                }, [o("chameleon-icon", {
                    staticClass: "radio-icon",
                    attrs: {
                        name: "background-type-transparent"
                    }
                }), t._v(" "), o("span", [t._v("None")])], 1)])])]), t._v(" "), o("div", {
                    staticClass: "recommended-reset",
                    class: {
                        "recommended-reset--visible": !t.hasRecommendedSettings
                    }
                }, [o("span", {
                    on: {
                        click: t.resetSettings
                    }
                }, [t._v("Reset to recommended Settings")])])])
            }), [], !1, null, "272eed92", null);
        e.default = component.exports;
        installComponents(component, {
            ChameleonIcon: o(520).default,
            Overlay: o(530).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(522);
        var l = o(521),
            n = o(520),
            r = o(530),
            c = o(644),
            d = {
                name: "DownloadOverlay",
                components: {
                    ChameleonIcon: n.default,
                    Overlay: r.default,
                    CustomLoader: c.default,
                    SelectableItem: l.default
                },
                props: {
                    isGeneratingGif: {
                        type: Boolean,
                        default: !1
                    },
                    generatingGifProgress: {
                        type: Number,
                        default: 0
                    }
                }
            },
            v = (o(836), o(838), o(6)),
            component = Object(v.a)(d, (function() {
                var t = this,
                    e = t.$createElement,
                    l = t._self._c || e;
                return l("overlay", {
                    staticClass: "after-download",
                    attrs: {
                        blocking: t.isGeneratingGif
                    },
                    on: {
                        close: function(e) {
                            return t.$emit("close")
                        }
                    }
                }, [t.isGeneratingGif ? l("div", [l("custom-loader", {
                    staticClass: "gif-loader",
                    attrs: {
                        percentage: t.generatingGifProgress
                    }
                }), t._v(" "), l("h3", {
                    staticClass: "after-download__title"
                }, [t._v("\n      Generating GIF...\n    ")]), t._v(" "), 100 !== t.generatingGifProgress ? l("p", [t._v("\n      Please do not switch tabs, as this slows down the rendering process heavily. "), l("br"), t._v(" "), l("span", {
                    staticClass: "cancel-gif-generation",
                    on: {
                        click: function(e) {
                            return t.$emit("cancel-gif")
                        }
                    }
                }, [t._v("Cancel")])]) : l("p", [t._v("\n      Finishing up."), l("br"), t._v("\n      This may take a few seconds...\n    ")])], 1) : l("div", [l("chameleon-icon", {
                    staticClass: "after-download__thumbs-up",
                    attrs: {
                        name: "thumbs-up"
                    }
                }), t._v(" "), l("h3", {
                    staticClass: "after-download__title"
                }, [t._v("\n      There you go!\n    ")]), t._v(" "), l("p", {
                    staticClass: "after-download__subtitle"
                }, [t._v("\n      That's a nice creation you got there!\n    ")])], 1), t._v(" "), l("div", {
                    staticClass: "horizontal-line"
                }), t._v(" "), l("vueper-slides", {
                    staticClass: "slider no-shadow",
                    attrs: {
                        "fixed-height": "200px",
                        arrows: !1,
                        autoplay: !0,
                        duration: 7e3,
                        "prevent-y-scroll": !0,
                        "dragging-distance": 70
                    }
                }, [l("vueper-slide", {
                    staticClass: "slide",
                    scopedSlots: t._u([{
                        key: "content",
                        fn: function() {
                            return [l("div", {
                                staticClass: "slide-inner-wrapper"
                            }, [l("h3", {
                                staticClass: "after-download__title"
                            }, [t._v("\n            Support future updates\n          ")]), t._v(" "), l("p", [t._v("\n            We're actively working on new animations, designs, and features.\n            Visit our main website:\n          ")]), t._v(" "), l("nerd-or-die-button", {
                                attrs: {
                                    "on-white-bg": !0
                                }
                            })], 1)]
                        },
                        proxy: !0
                    }])
                }), t._v(" "), l("vueper-slide", {
                    staticClass: "slide",
                    scopedSlots: t._u([{
                        key: "content",
                        fn: function() {
                            return [l("div", {
                                staticClass: "slide-inner-wrapper"
                            }, [l("h3", {
                                staticClass: "after-download__title"
                            }, [t._v("\n            Come say hello 👋\n          ")]), t._v(" "), l("p", [t._v("\n            Share your creations, stay up to date and enjoy chatting with the community!\n          ")]), t._v(" "), l("no-ssr", [l("div", {
                                staticClass: "community-button"
                            }, [l("a", {
                                staticClass: "community-button__link",
                                attrs: {
                                    href: "https://github.com/SudoLite",
                                    alt: "join my discord server",
                                    target: "_blank"
                                }
                            }, [l("img", {
                                staticClass: "community-button__logo",
                                attrs: {
                                    src: o(523)
                                }
                            }), t._v("\n                Join Community Server\n              ")])])])], 1)]
                        },
                        proxy: !0
                    }])
                }), t._v(" "), l("vueper-slide", {
                    staticClass: "slide",
                    scopedSlots: t._u([{
                        key: "content",
                        fn: function() {
                            return [l("div", {
                                staticClass: "slide-inner-wrapper"
                            }, [l("h3", {
                                staticClass: "after-download__title"
                            }, [t._v("\n            Did you know?\n          ")]), t._v(" "), l("p", [t._v("\n            You can use custom images by selecting the upload icon from the options.\n          ")]), t._v(" "), l("div", {
                                staticClass: "upload-fake"
                            }, [l("selectable-item", {
                                attrs: {
                                    type: "upload"
                                }
                            })], 1)])]
                        },
                        proxy: !0
                    }])
                })], 1)], 1)
            }), [], !1, null, "7d79d536", null);
        e.default = component.exports;
        installComponents(component, {
            ChameleonIcon: o(520).default,
            CustomLoader: o(644).default,
            NerdOrDieButton: o(529).default,
            SelectableItem: o(521).default,
            Overlay: o(530).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(58), o(522);
        var l = o(520),
            n = o(521),
            r = o(531),
            c = {
                name: "ShapeChooser",
                components: {
                    SelectableItem: n.default,
                    ChameleonIcon: l.default,
                    UploadComponent: r.default
                },
                props: {
                    title: {
                        type: String,
                        default: "Shape"
                    },
                    shapes: {
                        type: Array,
                        default: void 0
                    },
                    selectedShape: {
                        type: String,
                        default: void 0
                    },
                    type: {
                        type: String,
                        default: void 0
                    },
                    uploadPossible: {
                        type: Boolean,
                        default: !1
                    },
                    fileObjectUrl: {
                        type: String,
                        default: void 0
                    },
                    fileName: {
                        type: String,
                        default: void 0
                    },
                    fileScale: {
                        type: Number,
                        default: 1
                    }
                },
                data: function() {
                    return {
                        isExpanded: !1,
                        showUpload: !1
                    }
                },
                computed: {
                    isUploadedShape: function() {
                        return "custom-upload" === this.selectedShape
                    },
                    countInitialVisible: function() {
                        return this.uploadPossible ? 15 : 16
                    }
                },
                methods: {
                    toggleExpanded: function() {
                        this.isExpanded = !this.isExpanded, this.closeUpload()
                    },
                    emitRandomShape: function() {
                        var t = this.shapes[Math.floor(Math.random() * this.shapes.length)].name;
                        this.$emit("shape-change", t)
                    },
                    handleUploadClick: function() {
                        this.showUpload = !this.showUpload, this.$emit("shape-change", "custom-upload")
                    },
                    closeUpload: function() {
                        this.showUpload = !1
                    }
                }
            },
            d = (o(807), o(6)),
            component = Object(d.a)(c, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "shape-chooser"
                }, [o("h3", {
                    staticClass: "title"
                }, [t._v("\n    " + t._s(t.title) + "\n  ")]), t._v(" "), o("div", {
                    staticClass: "options"
                }, [o("div", {
                    staticClass: "item-button",
                    on: {
                        click: t.emitRandomShape
                    }
                }, [o("div", {
                    staticClass: "item-button__inner"
                }, [o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "random-small"
                    }
                })], 1)]), t._v(" "), t.uploadPossible ? o("selectable-item", {
                    attrs: {
                        type: "upload",
                        selected: t.isUploadedShape,
                        "show-close-icon": t.showUpload
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.handleUploadClick(e)
                        }
                    }
                }) : t._e(), t._v(" "), t.showUpload ? o("upload-component", {
                    attrs: {
                        "file-object-url": t.fileObjectUrl,
                        "file-name": t.fileName,
                        "file-scale": t.fileScale
                    },
                    on: {
                        change: function(e) {
                            return t.$emit("file-change", e)
                        },
                        "scale-change": function(e) {
                            return t.$emit("file-scale-change", e)
                        }
                    }
                }) : t._e(), t._v(" "), t._l(t.shapes, (function(e, l) {
                    return o("div", {
                        key: l
                    }, [l < t.countInitialVisible && !t.isExpanded || t.isExpanded ? o("selectable-item", {
                        attrs: {
                            type: t.type,
                            shape: e,
                            selected: t.selectedShape === e.name
                        },
                        nativeOn: {
                            click: function(o) {
                                return t.$emit("shape-change", e.name)
                            }
                        }
                    }) : t._e()], 1)
                })), t._v(" "), t.shapes.length > t.countInitialVisible ? o("div", {
                    staticClass: "item-button",
                    on: {
                        click: t.toggleExpanded
                    }
                }, [o("div", {
                    staticClass: "item-button__inner"
                }, [t.isExpanded ? o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "chevron-left"
                    }
                }) : o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "three-dots"
                    }
                })], 1)]) : t._e()], 2)])
            }), [], !1, null, "f5612d80", null);
        e.default = component.exports;
        installComponents(component, {
            ChameleonIcon: o(520).default,
            SelectableItem: o(521).default,
            UploadComponent: o(531).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(58);
        var l = o(520),
            n = {
                name: "AnimationChooser",
                components: {
                    SelectableItem: o(521).default,
                    ChameleonIcon: l.default
                },
                props: {
                    title: {
                        type: String,
                        default: "Shape"
                    },
                    animations: {
                        type: Array,
                        default: void 0
                    },
                    selectedAnimation: {
                        type: Object,
                        default: void 0
                    },
                    type: {
                        type: String,
                        default: void 0
                    }
                },
                data: function() {
                    return {
                        countInitialVisible: 16,
                        isExpanded: !1
                    }
                },
                methods: {
                    toggleExpanded: function() {
                        this.isExpanded = !this.isExpanded
                    },
                    emitRandomShape: function() {
                        var t = this.shapes[Math.floor(Math.random() * this.shapes.length)].name;
                        this.$emit("shape-change", t)
                    }
                }
            },
            r = (o(812), o(6)),
            component = Object(r.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "animation-chooser chooser"
                }, [o("h3", {
                    staticClass: "title"
                }, [t._v("\n    " + t._s(t.title) + "\n  ")]), t._v(" "), o("div", {
                    staticClass: "options"
                }, [o("selectable-item", {
                    attrs: {
                        type: "nothing",
                        selected: !Object.keys(t.selectedAnimation).length
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.$emit("animation-change", {})
                        }
                    }
                }), t._v(" "), t._l(t.animations, (function(e, l) {
                    return o("div", {
                        key: l
                    }, [l < t.countInitialVisible && !t.isExpanded || t.isExpanded ? o("selectable-item", {
                        attrs: {
                            type: t.type,
                            animation: e,
                            selected: t.selectedAnimation.name === e.name
                        },
                        nativeOn: {
                            click: function(o) {
                                return t.$emit("animation-change", e)
                            }
                        }
                    }) : t._e()], 1)
                })), t._v(" "), t.animations.length > t.countInitialVisible ? o("div", {
                    staticClass: "item-button",
                    on: {
                        click: t.toggleExpanded
                    }
                }, [o("div", {
                    staticClass: "item-button__inner"
                }, [t.isExpanded ? o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "chevron-left"
                    }
                }) : o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "three-dots"
                    }
                })], 1)]) : t._e()], 2)])
            }), [], !1, null, "27d48aec", null);
        e.default = component.exports;
        installComponents(component, {
            SelectableItem: o(521).default,
            ChameleonIcon: o(520).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = {
                name: "EffectOrderChooser",
                computed: {
                    customEffectOrder: {
                        get: function() {
                            return this.$store.state.customization.customEffectOrder
                        },
                        set: function(t) {
                            this.$store.commit("customization/setCustomEffectOrder", t)
                        }
                    }
                },
                methods: {
                    setCustomEffectOrder: function(t) {
                        this.customEffectOrder = t
                    }
                }
            },
            n = (o(814), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "effect-order-chooser"
                }, [o("h3", {
                    staticClass: "title"
                }, [t._v("\n    Effect position (front or back)\n  ")]), t._v(" "), o("div", {
                    staticClass: "options"
                }, [o("selectable-item", {
                    attrs: {
                        type: "icon",
                        "icon-name": "auto-icon",
                        selected: void 0 === t.customEffectOrder
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.setCustomEffectOrder(void 0)
                        }
                    }
                }), t._v(" "), o("selectable-item", {
                    attrs: {
                        type: "fake-shape",
                        "icon-name": "effect-order-top",
                        selected: "top" === t.customEffectOrder
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.setCustomEffectOrder("top")
                        }
                    }
                }), t._v(" "), o("selectable-item", {
                    attrs: {
                        type: "fake-shape",
                        "icon-name": "effect-order-bottom",
                        selected: "bottom" === t.customEffectOrder
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.setCustomEffectOrder("bottom")
                        }
                    }
                })], 1)])
            }), [], !1, null, "c84c9980", null);
        e.default = component.exports;
        installComponents(component, {
            SelectableItem: o(521).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        var l = {
                name: "ToggleSwitch",
                components: {
                    ChameleonIcon: o(520).default
                },
                props: {
                    value: {
                        type: Boolean,
                        default: void 0
                    },
                    isThemeSwitcher: {
                        type: Boolean,
                        default: !1
                    },
                    isClassicModeSwitcher: {
                        type: Boolean,
                        default: !1
                    }
                }
            },
            n = (o(824), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: null != t.value,
                        expression: "value != undefined"
                    }],
                    staticClass: "toggle-switch",
                    class: {
                        "toggle-switch--active": t.value
                    }
                }, [o("div", {
                    staticClass: "toggle-switch__inner"
                }, [o("div", {
                    staticClass: "toggle-switch__background",
                    class: {
                        "toggle-switch__background--active": t.value
                    }
                }), t._v(" "), o("div", {
                    staticClass: "toggle-switch__circle"
                }, [o("chameleon-icon", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.value && t.isThemeSwitcher,
                        expression: "value && isThemeSwitcher"
                    }],
                    attrs: {
                        name: "theme-switcher-moon"
                    }
                }), t._v(" "), o("chameleon-icon", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.value && t.isThemeSwitcher,
                        expression: "!value && isThemeSwitcher"
                    }],
                    attrs: {
                        name: "theme-switcher-sun"
                    }
                }), t._v(" "), o("chameleon-icon", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.value && t.isClassicModeSwitcher,
                        expression: "value && isClassicModeSwitcher"
                    }],
                    attrs: {
                        name: "mode-switcher-classic"
                    }
                }), t._v(" "), o("chameleon-icon", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.value && t.isClassicModeSwitcher,
                        expression: "!value && isClassicModeSwitcher"
                    }],
                    attrs: {
                        name: "mode-switcher-modern"
                    }
                })], 1)])])
            }), [], !1, null, "7e51565e", null);
        e.default = component.exports;
        installComponents(component, {
            ChameleonIcon: o(520).default
        })
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(522);
        var l = {
                name: "CustomLoader",
                props: {
                    isLoading: {
                        type: Boolean,
                        default: !1
                    },
                    percentage: {
                        type: Number,
                        default: 0
                    }
                },
                computed: {
                    dashOffset: function() {
                        return 313 - 313 * this.percentage / 100
                    },
                    isClassicMode: function() {
                        return this.$store.state.localStorage.classicMode
                    }
                }
            },
            n = (o(834), o(6)),
            component = Object(n.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", [o("div", {
                    staticClass: "loader"
                }, [o("svg", {
                    attrs: {
                        id: "background-loading-circle",
                        width: "106",
                        height: "106",
                        viewBox: "0 0 106 106",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [o("path", {
                    attrs: {
                        d: "M53 103C80.6142 103 103 80.6142 103 53C103 25.3858 80.6142 3 53 3C25.3858 3 3 25.3858 3 53C3 80.6142 25.3858 103 53 103Z",
                        stroke: t.isClassicMode ? "#7289DA" : "#5865F2",
                        "stroke-opacity": "0.17",
                        "stroke-width": "3",
                        "stroke-dasharray": "40 10"
                    }
                })]), t._v(" "), o("svg", {
                    attrs: {
                        id: "main-circle",
                        "stroke-dashoffset": t.dashOffset,
                        width: "106",
                        height: "106",
                        viewBox: "0 0 106 106",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [o("path", {
                    attrs: {
                        d: "M53 103C80.6142 103 103 80.6142 103 53C103 25.3858 80.6142 3 53 3C25.3858 3 3 25.3858 3 53C3 80.6142 25.3858 103 53 103Z",
                        stroke: t.isClassicMode ? "#7289DA" : "#5865F2",
                        "stroke-width": "7"
                    }
                })]), t._v(" "), o("div", {
                    staticClass: "percentage"
                }, [t._v("\n      " + t._s(t.percentage) + "%\n    ")])])])
            }), [], !1, null, "38e07f1a", null);
        e.default = component.exports
    }, , , function(t, e, o) {
        var map = {
            "./8-bit-shades.svg": 648,
            "./alien.svg": 649,
            "./american-indian.svg": 650,
            "./angel.svg": 651,
            "./angry-brows.svg": 652,
            "./angry.svg": 653,
            "./annoyed.svg": 654,
            "./base-eyes.svg": 655,
            "./base-shape.svg": 656,
            "./base-upside-down.svg": 657,
            "./bunny.svg": 658,
            "./cap.svg": 659,
            "./cat-eyes.svg": 660,
            "./cat.svg": 661,
            "./chameleon-sprite/chameleon-sprite.svg": 662,
            "./chubby-shape.svg": 663,
            "./chubby.svg": 664,
            "./clip-paths/8-bit-shades-clip-path.svg": 533,
            "./clip-paths/angry-brows-clip-path.svg": 534,
            "./clip-paths/angry-clip-path.svg": 535,
            "./clip-paths/annoyed-clip-path.svg": 536,
            "./clip-paths/base-eyes-clip-path.svg": 537,
            "./clip-paths/cat-eyes-clip-path.svg": 538,
            "./clip-paths/chubby-clip-path.svg": 539,
            "./clip-paths/crazy-eyes-clip-path.svg": 540,
            "./clip-paths/cute-clip-path.svg": 541,
            "./clip-paths/cute-downwards-clip-path.svg": 542,
            "./clip-paths/dead-clip-path.svg": 543,
            "./clip-paths/evil-eyes-clip-path.svg": 544,
            "./clip-paths/female-lashes-clip-path.svg": 545,
            "./clip-paths/glasses-1-clip-path.svg": 546,
            "./clip-paths/glasses-2-clip-path.svg": 547,
            "./clip-paths/happy-clip-path.svg": 548,
            "./clip-paths/heart-eyes-clip-path.svg": 549,
            "./clip-paths/line-eyes-clip-path.svg": 550,
            "./clip-paths/line-eyes-happy-clip-path.svg": 551,
            "./clip-paths/mono-brow-clip-path.svg": 552,
            "./clip-paths/monocle-clip-path.svg": 553,
            "./clip-paths/sad-clip-path.svg": 554,
            "./clip-paths/scared-clip-path.svg": 555,
            "./clip-paths/sceptical-clip-path.svg": 556,
            "./clip-paths/single-eye-clip-path.svg": 557,
            "./clip-paths/spider-eyes-clip-path.svg": 558,
            "./clip-paths/squinting-clip-path.svg": 559,
            "./clip-paths/star-eyes-clip-path.svg": 560,
            "./clip-paths/sunglasses-clip-path.svg": 561,
            "./clip-paths/swirly-eyes-clip-path.svg": 562,
            "./clip-paths/third-eye-clip-path.svg": 563,
            "./clip-paths/wink-clip-path.svg": 564,
            "./crazy-eyes.svg": 665,
            "./crown.svg": 666,
            "./cute-downwards.svg": 667,
            "./cute.svg": 668,
            "./dead.svg": 669,
            "./devil.svg": 670,
            "./evil-eyes.svg": 671,
            "./face-mask.svg": 672,
            "./female-lashes.svg": 673,
            "./glasses-1.svg": 674,
            "./glasses-2.svg": 675,
            "./hair-1.svg": 676,
            "./hair-2.svg": 677,
            "./hanging-ears.svg": 678,
            "./hannibal.svg": 679,
            "./happy.svg": 680,
            "./headphones.svg": 681,
            "./heart-eyes.svg": 682,
            "./knit-cap.svg": 683,
            "./line-eyes-happy.svg": 684,
            "./line-eyes.svg": 685,
            "./mohawk.svg": 686,
            "./mono-brow.svg": 687,
            "./monocle.svg": 688,
            "./mouse.svg": 689,
            "./mustache-top-hat.svg": 690,
            "./mustache.svg": 691,
            "./ninja-band.svg": 692,
            "./ribbon.svg": 693,
            "./sad.svg": 694,
            "./samurai.svg": 695,
            "./scared.svg": 696,
            "./scarred-laugh.svg": 697,
            "./sceptical.svg": 698,
            "./single-eye.svg": 699,
            "./spider-eyes.svg": 700,
            "./squinting.svg": 701,
            "./star-eyes.svg": 702,
            "./sunglasses.svg": 703,
            "./swirly-eyes.svg": 704,
            "./thick-upside-down.svg": 705,
            "./thick.svg": 706,
            "./third-eye.svg": 707,
            "./top-hat.svg": 708,
            "./tounge-shape.svg": 709,
            "./triangle-hair.svg": 710,
            "./vampire-ears.svg": 711,
            "./vampire.svg": 712,
            "./wink.svg": 713
        };

        function l(t) {
            var e = n(t);
            return o(e)
        }

        function n(t) {
            if (!o.o(map, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return map[t]
        }
        l.keys = function() {
            return Object.keys(map)
        }, l.resolve = n, t.exports = l, l.id = 647
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M93.614 59.853H34.386V63.0337H36.7688V66.2146H39.1514V69.3951H41.5342V72.5757H43.917V75.7569H53.7883V72.5757H56.171V69.3951H58.5537V66.2146H60.5962V63.0337H67.4038V66.2146H69.4463V69.3951H71.8291V72.5757H74.2119V75.7569H84.0833V72.5757H86.4659V69.3951H88.8486V66.2146H91.2312V63.0337H93.614V59.853ZM39.492 63.0339H41.8747V66.2146H39.492V63.0339ZM69.7867 63.0339H72.1694L72.1694 66.2142H74.5522L74.5522 63.0339H76.9349L76.9349 66.2142H79.3176L79.3176 69.3949H81.7004V72.5756H79.3176L79.3176 69.3949H76.9349L76.9349 72.5756H74.5522L74.5522 69.3949H72.1694L72.1694 66.2146H69.7867V63.0339ZM76.9349 66.2146V69.3949H74.5522V66.2146H76.9349ZM46.6402 63.0339H44.2575V66.2142H41.8748V69.3949H44.2575V72.5756H46.6402V69.3949H49.023L49.0229 72.5756H51.4057V69.3949H49.0229L49.023 66.2142H46.6402V63.0339ZM46.6402 69.3949V66.2146H44.2575V69.3949H46.6402Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M85.5068 96.4925C85.5068 96.4925 82.7217 93.1659 80.4009 90.2261C90.5353 87.3637 94.4034 81.02 94.4034 81.02C91.2316 83.1088 88.2145 84.5787 85.5068 85.5844C81.6387 87.209 77.9253 88.2921 74.2893 88.911C66.8625 90.3035 60.0546 89.9167 54.2524 88.8336C49.8428 87.9826 46.0521 86.7448 42.8802 85.507C41.1009 84.8108 39.1668 83.9598 37.2328 82.8767C37.1167 82.7994 37.0007 82.7413 36.8846 82.6833C36.7687 82.6253 36.6525 82.5672 36.5365 82.4899C36.3818 82.4125 36.3044 82.3352 36.2271 82.2578C34.8345 81.4842 34.0609 80.9426 34.0609 80.9426C34.0609 80.9426 37.7743 87.1316 47.5993 90.0714C45.2784 93.0112 42.416 96.4925 42.416 96.4925C25.319 95.9509 18.8206 84.7334 18.8206 84.7334C18.8206 68.0931 23.7915 51.5586 27.0923 43.7419C28.1823 42.7362 30.9028 41.2089 32.1269 40.571C32.1269 40.571 33.8288 39.6426 36.6912 38.3275C44.969 34.6915 51.5448 33.6858 54.2524 33.4537C54.3114 33.4438 54.3691 33.434 54.4258 33.4244L54.4259 33.4243C54.8161 33.3579 55.1625 33.2989 55.5676 33.2989C60.2867 32.68 65.6247 32.5253 71.1948 33.1442C78.5442 33.9952 86.4351 36.1613 94.4808 40.571C96.0269 41.4471 99.5791 43.5543 101.419 44.9737C104.697 53.0283 109.18 68.9314 109.18 84.7334C109.18 84.7334 102.604 95.9509 85.5068 96.4925Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M40.6424 32.0779C41.7266 35.1506 42.1853 38.1915 42.2746 40.1132L38.279 40.299C38.2062 38.7336 37.8134 36.0817 36.8703 33.4089C35.9183 30.7111 34.4892 28.2282 32.498 26.715L34.9184 23.5303C37.7929 25.7149 39.567 29.0303 40.6424 32.0779Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M87.3579 32.0779C86.2737 35.1506 85.815 38.1915 85.7256 40.1132L89.7213 40.299C89.7941 38.7336 90.1868 36.0817 91.1299 33.4089C92.0819 30.7111 93.511 28.2282 95.5022 26.715L93.0819 23.5303C90.2074 25.7149 88.4333 29.0303 87.3579 32.0779Z" fill="white"/>\n<path d="M40.2766 25.1226C40.2766 28.1958 37.7853 30.6871 34.7122 30.6871C31.639 30.6871 29.1477 28.1958 29.1477 25.1226C29.1477 22.0495 31.639 19.5582 34.7122 19.5582C37.7853 19.5582 40.2766 22.0495 40.2766 25.1226Z" fill="white"/>\n<path d="M87.7234 25.1226C87.7234 28.1958 90.2147 30.6871 93.2878 30.6871C96.361 30.6871 98.8523 28.1958 98.8523 25.1226C98.8523 22.0495 96.361 19.5582 93.2878 19.5582C90.2147 19.5582 87.7234 22.0495 87.7234 25.1226Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M48.2323 21.4021C46.2305 14.8839 42.1816 10.4336 39.0769 8.33827C35.0205 13.6663 30.5195 27.0919 41.2378 41.5798L47.7556 40.3089C48.2177 42.1167 50.9256 39.2257 51.6966 41.1776C55.5278 37.7541 56.188 39.0455 58.1195 35.6387C64.7112 24.0119 61.6423 13.2336 58.4862 8.4297C55.1469 10.3604 50.6353 14.7132 48.2323 21.4021ZM45.1963 37.7028L40.6929 19.3855L48.8898 33.45L55.9838 19.3855L53.1371 36.8162C52.8327 36.8542 53.6681 36.759 53.1371 36.8162C50.6539 37.0837 47.4743 36.9197 45.1963 37.7028Z" fill="white"/>\n<path d="M64.0001 44.6674C50.5314 44.6674 38.4097 43.4953 29.9698 41.6256C39.6235 35.6597 51.6995 33.5082 51.6995 33.5082C63.0143 31.7983 72.8148 32.7957 76.3007 33.5082C76.3007 33.5082 86.9026 35.284 98.0298 41.6258C89.5899 43.4953 77.4685 44.6674 64.0001 44.6674Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M97.2448 44.859C88.64 46.6078 76.8878 47.6674 64.0001 47.6674C51.1124 47.6674 39.3603 46.6078 30.7555 44.859C30.0127 44.708 29.2887 44.551 28.5853 44.3879C27.2164 47.2996 25.0444 52.3701 23.0961 58.8863L34.23 61.3508L21.6688 64.1312C21.6122 64.362 21.556 64.5941 21.5004 64.8275L32.23 67.2025L20.4404 69.8121C19.4635 75.0372 18.8206 80.7491 18.8206 86.7334C18.8206 86.7334 25.319 97.9509 42.416 98.4925C42.416 98.4925 45.2784 95.0112 47.5993 92.0714C37.7743 89.1316 34.0609 82.9427 34.0609 82.9427C34.0609 82.9427 34.8345 83.4842 36.2271 84.2578L36.2271 84.2579C36.3044 84.3352 36.3818 84.4126 36.5365 84.4899C36.6525 84.5672 36.7686 84.6253 36.8846 84.6833L36.8846 84.6833C37.0007 84.7413 37.1167 84.7994 37.2328 84.8767C39.1668 85.9598 41.1009 86.8108 42.8802 87.507C46.0521 88.7448 49.8428 89.9826 54.2524 90.8336C60.0546 91.9167 66.8625 92.3035 74.2893 90.911C77.9253 90.2921 81.6387 89.209 85.5068 87.5844C88.2145 86.5787 91.2316 85.1088 94.4034 83.02C94.4034 83.02 90.5353 89.3637 80.4009 92.2261C82.7217 95.1659 85.5068 98.4925 85.5068 98.4925C102.604 97.9509 109.18 86.7334 109.18 86.7334C109.18 80.7492 108.537 75.0372 107.56 69.8122L95.77 67.2025L106.5 64.8275C106.444 64.5941 106.388 64.362 106.331 64.1312L93.77 61.3508L104.904 58.8862C102.956 52.3701 100.784 47.2996 99.4149 44.3879C98.7115 44.551 97.9875 44.7081 97.2448 44.859Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M44.4707 30.721C43.8436 30.2875 43.6749 30.0055 43.632 29.9099C43.6749 29.8143 43.8436 29.5323 44.4707 29.0988C45.3445 28.495 46.7468 27.8665 48.6694 27.3044C52.4866 26.1886 57.8842 25.4692 63.9343 25.4692C69.9845 25.4692 75.3821 26.1886 79.1993 27.3044C81.1218 27.8665 82.5242 28.495 83.3979 29.0988C84.0251 29.5323 84.1938 29.8143 84.2367 29.9099C84.1938 30.0055 84.0251 30.2875 83.3979 30.721C82.655 31.2344 81.5301 31.7656 80.0282 32.2586C75.5569 31.3501 70.1008 30.7712 63.489 30.7712C57.3293 30.7712 52.1387 31.3597 47.8313 32.2556C46.334 31.7634 45.2121 31.2333 44.4707 30.721ZM63.9343 21.2412C57.6006 21.2412 51.7866 21.9891 47.4882 23.2456C45.353 23.8698 43.4715 24.6537 42.076 25.6182C40.7457 26.5376 39.402 27.9524 39.402 29.9099C39.402 31.8674 40.7457 33.2822 42.076 34.2016C43.4715 35.1661 45.353 35.95 47.4882 36.5742C51.7866 37.8307 57.6006 38.5785 63.9343 38.5785C70.2681 38.5785 76.0821 37.8307 80.3805 36.5742C82.5157 35.95 84.3971 35.1661 85.7927 34.2016C87.123 33.2822 88.4667 31.8674 88.4667 29.9099C88.4667 27.9524 87.123 26.5376 85.7927 25.6182C84.3971 24.6537 82.5157 23.8698 80.3805 23.2456C76.0821 21.9891 70.2681 21.2412 63.9343 21.2412ZM90.483 35.6382C92.8945 36.8093 94.6577 38.0485 95.8934 39.1801C96.4779 39.5867 96.7938 39.8323 96.7938 39.8323C96.7938 39.8323 107.313 54.9855 109.18 84.7305L109.165 84.7241L109.18 84.7334C109.18 84.7334 102.604 95.9509 85.5068 96.4924C85.5068 96.4924 82.7217 93.1658 80.4009 90.2261C90.5353 87.3637 94.4034 81.02 94.4034 81.02C91.2316 83.1088 88.2145 84.5786 85.5068 85.5844C81.6387 87.209 77.9253 88.292 74.2893 88.9109C66.8625 90.3035 60.0546 89.9166 54.2524 88.8336C49.8428 87.9826 46.0521 86.7448 42.8802 85.507C41.1009 84.8107 39.1668 83.9597 37.2328 82.8767C37.1167 82.7993 37.0007 82.7413 36.8846 82.6833C36.7687 82.6253 36.6525 82.5672 36.5365 82.4899C36.3818 82.4125 36.3044 82.3351 36.2271 82.2578C34.8345 81.4841 34.0609 80.9426 34.0609 80.9426C34.0609 80.9426 37.7743 87.1316 47.5993 90.0714C45.2784 93.0111 42.416 96.4924 42.416 96.4924C25.9332 95.9704 19.3011 85.5256 18.8459 84.7758L18.8206 84.786C18.8215 84.7701 18.8225 84.7542 18.8235 84.7383C18.8215 84.735 18.8206 84.7334 18.8206 84.7334L18.8239 84.7309C20.6432 55.0222 31.0187 39.8323 31.0187 39.8323C31.0187 39.8323 31.1524 39.7258 31.4087 39.5369C32.4335 38.4883 34.3797 37.0434 37.3779 35.629C38.1553 36.5337 39.0043 37.2133 39.6812 37.6812C41.5984 39.006 43.9588 39.9453 46.3071 40.6318C51.0867 42.0288 57.317 42.8051 63.9344 42.8051C70.5518 42.8051 76.7821 42.0288 81.5617 40.6318C83.91 39.9453 86.2705 39.006 88.1876 37.6812C88.8623 37.2149 89.7077 36.5383 90.483 35.6382Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="24.0047" height="2.4643" transform="matrix(-0.958766 -0.284197 -0.284197 0.958766 61.5867 62.9868)" fill="#4F5660"/>\n<rect width="24.0047" height="2.4643" transform="matrix(-0.958766 -0.284197 -0.284197 0.958766 61.5867 62.9868)" fill="#4F5660"/>\n<rect x="66.4133" y="62.9868" width="24.0047" height="2.4643" transform="rotate(-16.5109 66.4133 62.9868)" fill="#4F5660"/>\n<rect x="66.4133" y="62.9868" width="24.0047" height="2.4643" transform="rotate(-16.5109 66.4133 62.9868)" fill="#4F5660"/>\n<path d="M49.8544 60.2734C45.4364 60.2734 41.9485 64.1489 41.9485 68.877C41.9485 73.6051 45.5139 77.4805 49.8544 77.4805C54.2725 77.4805 57.7604 73.6051 57.7604 68.877C57.8379 64.1489 54.2725 60.2734 49.8544 60.2734Z" fill="#4F5660"/>\n<path d="M78.1453 60.2734C73.7273 60.2734 70.2394 64.1489 70.2394 68.877C70.2394 73.6051 73.8048 77.4805 78.1453 77.4805C82.5634 77.4805 86.0513 73.6051 86.0513 68.877C86.0513 64.1489 82.5634 60.2734 78.1453 60.2734Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M78.061 77.4806C82.3144 77.4806 85.7626 73.5321 85.7626 68.6614C85.7626 66.5666 85.1248 64.6425 84.0595 63.1296C81.7921 64.5449 75.8777 67.6327 70.3594 68.6614C70.3594 73.5321 73.8075 77.4806 78.061 77.4806Z" fill="#4F5660"/>\n<path d="M49.939 77.4806C45.6856 77.4806 42.2374 73.5321 42.2374 68.6614C42.2374 66.5666 42.8752 64.6425 43.9405 63.1296C46.2079 64.5449 52.1223 67.6327 57.6406 68.6614C57.6406 73.5321 54.1925 77.4806 49.939 77.4806Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M49.5899 74.4806C53.8613 74.4806 57.3239 70.5155 57.3239 65.6243H41.856C41.856 70.5155 45.3186 74.4806 49.5899 74.4806Z" fill="#4F5660"/>\n<path d="M78.4103 74.4806C82.6816 74.4806 86.1442 70.5155 86.1442 65.6243H70.6763C70.6763 70.5155 74.1389 74.4806 78.4103 74.4806Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M78.1454 60.2734C73.7274 60.2734 70.2395 64.1489 70.2395 68.877C70.2395 73.6051 73.8049 77.4805 78.1454 77.4805C82.5635 77.4805 86.0514 73.6051 86.0514 68.877C86.0514 64.1489 82.5635 60.2734 78.1454 60.2734Z" fill="#4F5660"/>\n<path d="M49.8545 60.2734C45.4365 60.2734 41.9486 64.1489 41.9486 68.877C41.9486 73.6051 45.514 77.4805 49.8545 77.4805C54.2726 77.4805 57.7605 73.6051 57.7605 68.877C57.838 64.1489 54.2726 60.2734 49.8545 60.2734Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M85.5068 96.4924C85.5068 96.4924 82.7217 93.1659 80.4009 90.2261C90.5353 87.3637 94.4034 81.02 94.4034 81.02C91.2316 83.1088 88.2145 84.5787 85.5068 85.5844C81.6387 87.209 77.9253 88.292 74.2893 88.9109C66.8625 90.3035 60.0546 89.9166 54.2524 88.8336C49.8428 87.9826 46.0521 86.7448 42.8802 85.507C41.1009 84.8107 39.1668 83.9598 37.2328 82.8767C37.1167 82.7993 37.0007 82.7413 36.8846 82.6833C36.7687 82.6253 36.6525 82.5672 36.5365 82.4899C36.3818 82.4125 36.3044 82.3352 36.2271 82.2578C34.8345 81.4842 34.0609 80.9426 34.0609 80.9426C34.0609 80.9426 37.7743 87.1316 47.5993 90.0714C45.2784 93.0111 42.416 96.4924 42.416 96.4924C25.319 95.9509 18.8206 84.7334 18.8206 84.7334C18.8206 59.8228 29.9607 39.6312 29.9607 39.6312C41.1009 31.2761 51.6995 31.5082 51.6995 31.5082L52.4731 32.4365C38.5479 36.4594 32.1269 42.571 32.1269 42.571C32.1269 42.571 33.8288 41.6426 36.6912 40.3275C44.969 36.6915 51.5448 35.6857 54.2524 35.4537C54.3114 35.4438 54.3691 35.434 54.4258 35.4243C54.816 35.3579 55.1624 35.2989 55.5676 35.2989C60.2867 34.68 65.6247 34.5253 71.1948 35.1442C78.5442 35.9952 86.4351 38.1613 94.4808 42.571C94.4808 42.571 88.3692 36.7688 75.2176 32.746L76.3007 31.5082C76.3007 31.5082 86.8993 31.2761 98.0395 39.6312C98.0395 39.6312 109.18 59.8228 109.18 84.7334C109.18 84.7334 102.604 95.9509 85.5068 96.4924Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M42.4935 31.5075C42.4935 31.5075 45.2785 34.8341 47.5994 37.7739C37.4649 40.6363 33.5968 46.98 33.5968 46.98C36.7687 44.8912 39.7858 43.4213 42.4935 42.4156C46.3616 40.791 50.075 39.7079 53.711 39.089C61.1378 37.6965 67.9456 38.0834 73.7478 39.1664C78.1574 40.0174 81.9482 41.2552 85.12 42.493C86.8994 43.1892 88.8334 44.0402 90.7675 45.1233C90.8835 45.2007 90.9996 45.2587 91.1156 45.3167C91.2316 45.3747 91.3478 45.4328 91.4637 45.5101C91.6185 45.5875 91.6958 45.6648 91.7732 45.7422C93.1657 46.5158 93.9393 47.0574 93.9393 47.0574C93.9393 47.0574 90.226 40.8684 80.401 37.9286C82.7218 34.9889 85.5842 31.5076 85.5842 31.5076C102.681 32.0491 109.18 43.2666 109.18 43.2666C109.18 68.1772 98.0395 88.3688 98.0395 88.3688C86.8994 96.7239 76.3008 96.4918 76.3008 96.4918L75.5271 95.5635C89.4523 91.5406 95.8734 85.429 95.8734 85.429C95.8734 85.429 94.1714 86.3574 91.309 87.6725C83.0313 91.3085 76.4555 92.3143 73.7478 92.5463C73.6889 92.5562 73.6312 92.566 73.5744 92.5757C73.1842 92.6421 72.8378 92.7011 72.4326 92.7011C67.7135 93.32 62.3755 93.4747 56.8055 92.8558C49.4561 92.0048 41.5651 89.8387 33.5194 85.429C33.5194 85.429 39.6311 91.2312 52.7826 95.254L51.6996 96.4918C51.6996 96.4918 41.1009 96.7239 29.9608 88.3688C29.9608 88.3688 18.8206 68.1772 18.8206 43.2666C18.8206 43.2666 25.3964 32.0491 42.4935 31.5075Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M45.4094 9.16257C62.2751 5.78328 63.274 32.5699 61.3958 42.4373L48.0196 43.9654C40.0544 32.6319 32.114 11.8265 45.4094 9.16257Z" fill="white"/>\n<path d="M84.3545 9.16257C67.4888 5.78328 66.4899 32.5699 68.3681 42.4373L81.7443 43.9654C89.7095 32.6319 97.6499 11.8265 84.3545 9.16257Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M65.5745 93.8066C68.6146 93.7802 71.8083 93.5025 75.1227 92.8833V98.8704C75.1227 98.8704 72.528 99.3949 70.3486 99.3949C68.1691 99.3949 65.5745 98.8704 65.5745 98.8704V93.8066ZM53.8777 92.6996C54.0421 92.7327 54.2074 92.7653 54.3735 92.7974L54.3855 92.7996C57.1812 93.3215 60.2086 93.6879 63.4259 93.7838V98.8704C63.4259 98.8704 60.8313 99.3949 58.6518 99.3949C56.4723 99.3949 53.8777 98.8704 53.8777 98.8704L53.8777 92.6996Z" fill="white"/>\n<path d="M94.9808 44.6046C89.9154 41.8284 84.9114 39.9415 80.0652 38.7121C68.7292 35.7929 54.5883 37.3157 48.9348 38.442C45.7736 39.1597 41.7393 40.3634 37.1912 42.3611C34.3288 43.6763 32.6269 44.6046 32.6269 44.6046C31.56 45.1356 29.0839 46.4556 27.7144 47.4876C24.4157 55.2319 19.3206 69.9203 19.3206 86.767C19.3206 86.767 25.819 97.9846 42.916 98.5261C42.916 98.5261 45.7784 95.0448 48.0993 92.105C38.2743 89.1653 34.5609 82.9763 34.5609 82.9763C34.5609 82.9763 35.3345 83.5178 36.7271 84.2915L36.7271 84.2915C36.8044 84.3688 36.8818 84.4462 37.0365 84.5235C37.1525 84.6009 37.2687 84.659 37.3846 84.717C37.5007 84.775 37.6167 84.833 37.7328 84.9103C39.6668 85.9934 41.6009 86.8444 43.3802 87.5407C46.5521 88.7785 50.3428 90.0162 54.7524 90.8672C60.5546 91.9503 67.3625 92.3371 74.7893 90.9446C78.4253 90.3257 82.1387 89.2426 86.0068 87.618C88.7145 86.6123 91.7316 85.1424 94.9034 83.0537C94.9034 83.0537 91.0353 89.3974 80.9009 92.2598C83.2217 95.1995 86.0068 98.5261 86.0068 98.5261C103.104 97.9846 109.68 86.767 109.68 86.767C109.68 70.7712 105.086 56.7213 101.799 48.7137C100.925 47.9866 96.8896 45.6713 94.9808 44.6046Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M63.9087 38.1453C42.6315 38.1453 32.231 51.0066 29.7778 56.8244C29.0487 58.5534 27.0561 59.3639 25.3271 58.6349C23.5981 57.9058 22.7875 55.9132 23.5166 54.1842C26.8984 46.1643 39.5716 31.3503 63.9087 31.3503C88.2383 31.3503 101.068 46.154 104.538 54.1524C105.284 55.8738 104.494 57.8746 102.773 58.6213C101.051 59.3679 99.0503 58.5777 98.3036 56.8562C95.7709 51.0169 85.1936 38.1453 63.9087 38.1453Z" fill="white"/>\n<path d="M63.9088 41.1453C43.9805 41.1453 34.5845 53.1464 32.5421 57.99C31.1693 61.2457 27.4171 62.772 24.1615 61.3992C23.7879 61.2416 23.4371 61.0528 23.1108 60.8369C20.812 68.5126 18.8206 78.2012 18.8206 88.7334C18.8206 88.7334 25.319 99.9509 42.416 100.492C42.416 100.492 45.2784 97.0112 47.5993 94.0714C37.7743 91.1316 34.0609 84.9426 34.0609 84.9426C34.0609 84.9426 34.8345 85.4842 36.2271 86.2578C36.3044 86.3352 36.3818 86.4125 36.5365 86.4899C36.6525 86.5672 36.7687 86.6253 36.8846 86.6833C37.0007 86.7413 37.1167 86.7993 37.2328 86.8767C39.1668 87.9598 41.1009 88.8107 42.8802 89.507C46.0521 90.7448 49.8428 91.9826 54.2524 92.8336C60.0546 93.9166 66.8625 94.3035 74.2893 92.9109C77.9253 92.292 81.6387 91.209 85.5068 89.5844C88.2145 88.5787 91.2316 87.1088 94.4034 85.02C94.4034 85.02 90.5353 91.3637 80.4009 94.2261C82.7217 97.1659 85.5068 100.492 85.5068 100.492C102.604 99.9509 109.18 88.7334 109.18 88.7334C109.18 78.2181 107.195 68.5436 104.9 60.8739C104.608 61.0629 104.296 61.2304 103.966 61.3735C100.725 62.7795 96.9573 61.2915 95.5514 58.05C93.433 53.1659 83.8513 41.1453 63.9088 41.1453Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M27.0908 43.505C29.9518 28.6164 45.3874 17.243 63.9998 17.243C82.626 17.243 98.0707 28.6333 100.915 43.5383C93.8797 35.9179 81.7582 28.3503 63.9087 28.3503C46.0977 28.3503 34.0616 35.8864 27.0908 43.505Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M58.1428 14.6028C58.8315 11.9933 61.208 10.0693 64.0339 10.0693C66.863 10.0693 69.2416 11.9976 69.9273 14.6116C67.9876 14.3685 66.0078 14.243 63.9999 14.243C62.0162 14.243 60.06 14.3655 58.1428 14.6028Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M40.3896 68.8769C40.3896 63.2166 44.5652 58.577 49.8544 58.577C55.1435 58.577 59.4119 63.2166 59.3192 68.8769C59.3192 74.5372 55.1435 79.1768 49.8544 79.1768C44.658 79.1768 40.3896 74.5372 40.3896 68.8769ZM50.855 62.8772L50.855 62.8772L50.855 62.8772V62.8772C48.975 64.6772 46.3432 69.597 50.855 74.8767V74.8767L50.855 74.8767L50.855 74.8767V74.8767C55.3668 69.597 52.7349 64.6772 50.855 62.8772V62.8772Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M68.6792 68.8769C68.6792 63.2166 72.8548 58.577 78.1439 58.577C83.4331 58.577 87.7015 63.2166 87.6087 68.8769C87.6087 74.5372 83.4331 79.1768 78.1439 79.1768C72.9476 79.1768 68.6792 74.5372 68.6792 68.8769ZM76.8166 62.8772L76.8166 62.8772L76.8166 62.8772V62.8772C74.9366 64.6772 72.3048 69.597 76.8166 74.8767V74.8767L76.8166 74.8767L76.8166 74.8767V74.8767C81.3284 69.597 78.6965 64.6772 76.8166 62.8772V62.8772Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M30.6106 19.1821L29.9658 39.6438L51.4319 31.6098L30.6106 19.1821Z" fill="white"/>\n<path d="M97.405 19.1821L98.0498 39.6438L76.5838 31.6098L97.405 19.1821Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M80.4009 90.2261C82.7217 93.1659 85.5068 96.4924 85.5068 96.4924C102.604 95.9509 109.18 84.7334 109.18 84.7334C109.18 83.4583 109.15 82.1955 109.095 80.9472L96.3622 77.0391L108.908 77.9066C108.755 75.9698 108.543 74.0735 108.283 72.2258L95.6141 71.5037L107.782 69.0442C104.791 51.8691 98.0395 39.6312 98.0395 39.6312C86.8993 31.2761 76.3007 31.5082 76.3007 31.5082L75.2176 32.746C88.3692 36.7688 94.4808 42.571 94.4808 42.571C86.4351 38.1613 78.5442 35.9952 71.1948 35.1442C65.6247 34.5253 60.2867 34.68 55.5676 35.2989C55.1624 35.2989 54.8161 35.3579 54.4259 35.4243L54.4258 35.4243C54.3798 35.4322 54.3332 35.4401 54.2859 35.4481L54.2524 35.4537C51.5448 35.6857 44.969 36.6915 36.6912 40.3275C33.8288 41.6426 32.1269 42.571 32.1269 42.571C32.1269 42.571 38.5479 36.4594 52.4731 32.4365L51.6995 31.5082C51.6995 31.5082 41.1009 31.2761 29.9607 39.6312C29.9607 39.6312 23.2088 51.8691 20.2179 69.0442L32.3859 71.5037L19.717 72.2258C19.4573 74.0734 19.2452 75.9698 19.0926 77.9066L31.6378 77.0391L18.9051 80.9472C18.8497 82.1955 18.8206 83.4583 18.8206 84.7334C18.8206 84.7334 25.319 95.9509 42.416 96.4924C42.416 96.4924 45.2784 93.0111 47.5993 90.0714C37.7743 87.1316 34.0609 80.9426 34.0609 80.9426C34.0609 80.9426 34.8345 81.4842 36.2271 82.2578C36.3044 82.3352 36.3818 82.4125 36.5365 82.4899C36.6525 82.5672 36.7687 82.6253 36.8846 82.6833C37.0007 82.7413 37.1167 82.7993 37.2328 82.8767C39.1668 83.9598 41.1009 84.8107 42.8802 85.507C46.0521 86.7448 49.8428 87.9826 54.2524 88.8336C60.0546 89.9166 66.8625 90.3035 74.2893 88.9109C77.9253 88.292 81.6387 87.209 85.5068 85.5844C88.2145 84.5787 91.2316 83.1088 94.4034 81.02C94.4034 81.02 90.5353 87.3637 80.4009 90.2261Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol fill="none" viewBox="0 0 128 128" id="8-bit-shades" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M93.614 59.853H34.386v3.18h2.383v3.182h2.382v3.18h2.383v3.18h2.383v3.182h9.871v-3.181h2.383v-3.18h2.383v-3.181h2.042v-3.181h6.808v3.18h2.042v3.181h2.383v3.18h2.383v3.182h9.871v-3.181h2.383v-3.18h2.383v-3.181h2.382v-3.181h2.383v-3.181zm-54.122 3.18h2.383v3.182h-2.383v-3.181zm30.295 0h2.382v3.181h2.383v-3.18h2.383v3.18h2.383v3.18H81.7v3.182h-2.382v-3.181h-2.383v3.18h-2.383v-3.18H72.17v-3.18h-2.382v-3.181zm7.148 3.182v3.18h-2.383v-3.18h2.383zM46.64 63.034h-2.383v3.18h-2.382v3.18h2.383v3.182h2.382v-3.181h2.383v3.18h2.383v-3.18h-2.383v-3.18H46.64v-3.181zm0 6.36v-3.18h-2.383v3.18h2.383z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="alien" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M85.507 96.493s-2.785-3.327-5.106-6.267c10.134-2.862 14.002-9.206 14.002-9.206-3.171 2.089-6.189 3.559-8.896 4.564-3.868 1.625-7.582 2.708-11.218 3.327-7.427 1.392-14.234 1.006-20.037-.077-4.41-.851-8.2-2.09-11.372-3.327-1.78-.696-3.713-1.547-5.647-2.63a3.136 3.136 0 00-.348-.194 3.286 3.286 0 01-.349-.193 1.067 1.067 0 01-.309-.232c-1.392-.774-2.166-1.315-2.166-1.315s3.713 6.189 13.538 9.128a494.172 494.172 0 01-5.183 6.422c-17.097-.542-23.595-11.76-23.595-11.76 0-16.64 4.97-33.174 8.271-40.991 1.09-1.006 3.81-2.533 5.035-3.171 0 0 1.702-.928 4.564-2.243 8.278-3.637 14.854-4.642 17.561-4.874l.174-.03c.39-.066.736-.125 1.142-.125a65.458 65.458 0 0115.627-.155c7.35.851 15.24 3.017 23.286 7.427 1.546.876 5.098 2.983 6.938 4.403 3.278 8.054 7.761 23.957 7.761 39.76 0 0-6.576 11.217-23.673 11.759z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40.642 32.078c1.085 3.073 1.543 6.113 1.633 8.035l-3.996.186c-.073-1.565-.466-4.217-1.409-6.89-.952-2.698-2.38-5.18-4.372-6.694l2.42-3.185c2.875 2.185 4.649 5.5 5.724 8.548zm46.716 0c-1.084 3.073-1.543 6.113-1.632 8.035l3.995.186c.073-1.565.466-4.217 1.409-6.89.952-2.698 2.381-5.18 4.372-6.694l-2.42-3.185c-2.875 2.185-4.649 5.5-5.724 8.548z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M40.277 25.123a5.564 5.564 0 11-11.13 0 5.564 5.564 0 0111.13 0zm47.446 0a5.564 5.564 0 1011.13 0 5.564 5.564 0 00-11.13 0z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="american-indian" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.232 21.402c-2.002-6.518-6.05-10.968-9.155-13.064-4.056 5.328-8.557 18.754 2.16 33.242l6.519-1.271c.462 1.808 3.17-1.083 3.94.869 3.832-3.424 4.492-2.133 6.424-5.54 6.591-11.626 3.522-22.404.366-27.208-3.34 1.93-7.85 6.283-10.254 12.972zm-3.036 16.3l-4.503-18.316L48.89 33.45l7.094-14.065-2.847 17.431c-.304.038.531-.057 0 0-2.483.268-5.663.104-7.94.887z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M64 44.667c-13.469 0-25.59-1.172-34.03-3.041 9.654-5.966 21.73-8.118 21.73-8.118 11.314-1.71 21.115-.712 24.6 0 0 0 10.603 1.776 21.73 8.118-8.44 1.87-20.561 3.041-34.03 3.041z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M97.245 44.859C88.64 46.608 76.888 47.667 64 47.667c-12.888 0-24.64-1.06-33.245-2.808a81.443 81.443 0 01-2.17-.471c-1.369 2.912-3.54 7.982-5.489 14.498l11.134 2.465-12.561 2.78-.169.697 10.73 2.374-11.79 2.61c-.977 5.225-1.62 10.937-1.62 16.921 0 0 6.499 11.218 23.596 11.76 0 0 2.862-3.482 5.183-6.422-9.825-2.94-13.538-9.128-13.538-9.128s.773.541 2.166 1.315c.077.077.155.155.31.232.116.077.232.135.348.193.116.058.232.116.348.194 1.934 1.083 3.868 1.934 5.647 2.63 3.172 1.238 6.963 2.476 11.372 3.327 5.803 1.083 12.61 1.47 20.037.077 3.636-.619 7.35-1.702 11.218-3.327 2.707-1.005 5.725-2.475 8.896-4.564 0 0-3.868 6.344-14.002 9.206 2.32 2.94 5.106 6.267 5.106 6.267 17.097-.542 23.673-11.76 23.673-11.76 0-5.984-.643-11.696-1.62-16.92l-11.79-2.61 10.73-2.376-.169-.696-12.561-2.78 11.134-2.465c-1.948-6.516-4.12-11.586-5.49-14.498a81.31 81.31 0 01-2.17.471z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="angel" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M44.47 30.721c-.626-.433-.795-.715-.838-.811.043-.096.212-.378.839-.811.873-.604 2.276-1.233 4.198-1.795 3.818-1.115 9.215-1.835 15.265-1.835 6.05 0 11.448.72 15.265 1.835 1.923.563 3.325 1.191 4.199 1.795.627.433.796.715.839.81-.043.097-.212.379-.84.812-.742.513-1.867 1.045-3.369 1.538-4.471-.909-9.927-1.488-16.539-1.488-6.16 0-11.35.589-15.658 1.485-1.497-.493-2.619-1.023-3.36-1.535zm19.464-9.48c-6.333 0-12.147.748-16.446 2.005-2.135.624-4.017 1.408-5.412 2.372-1.33.92-2.674 2.334-2.674 4.292 0 1.957 1.344 3.372 2.674 4.292 1.395.964 3.277 1.748 5.412 2.372 4.299 1.257 10.113 2.005 16.446 2.005 6.334 0 12.148-.748 16.447-2.005 2.135-.624 4.016-1.408 5.412-2.372 1.33-.92 2.674-2.335 2.674-4.292 0-1.958-1.344-3.372-2.674-4.292-1.396-.964-3.277-1.748-5.413-2.372-4.298-1.257-10.112-2.005-16.446-2.005zm26.549 14.397c2.411 1.171 4.175 2.41 5.41 3.542.585.407.9.652.9.652s10.52 15.154 12.387 44.899l-.015-.007.015.01s-6.576 11.217-23.673 11.758c0 0-2.785-3.326-5.106-6.266 10.134-2.862 14.002-9.206 14.002-9.206-3.171 2.089-6.189 3.559-8.896 4.564-3.868 1.625-7.582 2.708-11.218 3.327-7.427 1.392-14.234 1.006-20.037-.077-4.41-.851-8.2-2.09-11.372-3.327-1.78-.696-3.713-1.547-5.647-2.63a3.12 3.12 0 00-.348-.194 3.286 3.286 0 01-.349-.193 1.088 1.088 0 01-.309-.232c-1.392-.774-2.166-1.315-2.166-1.315s3.713 6.189 13.538 9.128a485.207 485.207 0 01-5.183 6.421c-16.483-.522-23.115-10.966-23.57-11.716l-.025.01.002-.048a.198.198 0 01-.002-.005l.003-.002c1.82-29.709 12.195-44.899 12.195-44.899s.133-.106.39-.295c1.025-1.049 2.97-2.494 5.969-3.908a12.188 12.188 0 002.303 2.052c1.917 1.325 4.278 2.264 6.626 2.95 4.78 1.398 11.01 2.174 17.627 2.174 6.618 0 12.848-.776 17.628-2.173 2.348-.687 4.709-1.626 6.626-2.95a12.192 12.192 0 002.295-2.044z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="angry" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M78.061 77.48c4.253 0 7.702-3.948 7.702-8.819 0-2.094-.638-4.019-1.704-5.531-2.267 1.415-8.181 4.503-13.7 5.531 0 4.871 3.449 8.82 7.702 8.82zm-28.122 0c-4.253 0-7.702-3.948-7.702-8.819 0-2.094.638-4.019 1.703-5.531 2.268 1.415 8.182 4.503 13.7 5.531 0 4.871-3.447 8.82-7.701 8.82z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="angry-brows" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill="var(--svg-custom-color, #4F5660)" d="M61.587 62.987l-23.015-6.822-.7 2.362 23.014 6.822z" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M61.587 62.987l-23.015-6.822-.7 2.362 23.014 6.822zm4.826 0l23.015-6.822.7 2.362-23.015 6.822z" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M66.413 62.987l23.015-6.822.7 2.362-23.015 6.822zm-16.559-2.714c-4.418 0-7.905 3.876-7.905 8.604s3.565 8.604 7.905 8.604c4.419 0 7.906-3.876 7.906-8.604.078-4.728-3.487-8.604-7.906-8.604z" style="transition: var(--svg-custom-transition);"/><path d="M78.145 60.273c-4.418 0-7.906 3.876-7.906 8.604s3.566 8.604 7.906 8.604c4.418 0 7.906-3.876 7.906-8.604s-3.488-8.604-7.906-8.604z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="annoyed" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M49.59 74.48c4.271 0 7.734-3.965 7.734-8.856H41.856c0 4.892 3.463 8.857 7.734 8.857zm28.82 0c4.272 0 7.734-3.965 7.734-8.856H70.676c0 4.892 3.463 8.857 7.734 8.857z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="base-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M78.145 60.273c-4.418 0-7.905 3.876-7.905 8.604s3.565 8.604 7.905 8.604c4.419 0 7.906-3.876 7.906-8.604s-3.487-8.604-7.906-8.604zm-28.29 0c-4.418 0-7.906 3.876-7.906 8.604s3.565 8.604 7.906 8.604c4.418 0 7.906-3.876 7.906-8.604.077-4.728-3.488-8.604-7.907-8.604z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="base-shape" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M85.507 96.492s-2.785-3.326-5.106-6.266c10.134-2.862 14.002-9.206 14.002-9.206-3.171 2.089-6.189 3.559-8.896 4.564-3.868 1.625-7.582 2.708-11.218 3.327-7.427 1.392-14.234 1.006-20.037-.077-4.41-.851-8.2-2.09-11.372-3.327-1.78-.696-3.713-1.547-5.647-2.63a3.12 3.12 0 00-.348-.194 3.286 3.286 0 01-.349-.193 1.067 1.067 0 01-.309-.232c-1.392-.774-2.166-1.315-2.166-1.315s3.713 6.189 13.538 9.128a485.207 485.207 0 01-5.183 6.421c-17.097-.541-23.595-11.759-23.595-11.759 0-24.91 11.14-45.102 11.14-45.102C41.1 31.276 51.7 31.508 51.7 31.508l.773.929C38.548 36.459 32.127 42.57 32.127 42.57s1.702-.928 4.564-2.243c8.278-3.637 14.854-4.642 17.561-4.874l.174-.03c.39-.066.736-.125 1.142-.125a65.458 65.458 0 0115.627-.155c7.35.851 15.24 3.017 23.286 7.427 0 0-6.112-5.802-19.263-9.825l1.083-1.238s10.598-.232 21.739 8.123c0 0 11.14 20.192 11.14 45.102 0 0-6.576 11.218-23.673 11.76z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="base-upside-down" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M42.493 31.508s2.785 3.326 5.106 6.266c-10.134 2.862-14.002 9.206-14.002 9.206 3.172-2.089 6.189-3.559 8.896-4.564 3.869-1.625 7.582-2.708 11.218-3.327 7.427-1.392 14.235-1.006 20.037.077 4.41.851 8.2 2.09 11.372 3.327 1.78.696 3.713 1.547 5.647 2.63.117.078.233.136.349.194.116.058.232.116.348.193.154.078.232.155.31.232 1.392.774 2.165 1.315 2.165 1.315s-3.713-6.189-13.538-9.128c2.32-2.94 5.183-6.421 5.183-6.421 17.097.541 23.596 11.759 23.596 11.759 0 24.91-11.14 45.102-11.14 45.102-11.14 8.355-21.74 8.123-21.74 8.123l-.773-.928c13.925-4.023 20.346-10.135 20.346-10.135s-1.702.928-4.564 2.243c-8.278 3.636-14.853 4.642-17.561 4.874l-.174.03c-.39.066-.736.125-1.141.125a65.457 65.457 0 01-15.628.155c-7.349-.851-15.24-3.017-23.286-7.427 0 0 6.112 5.802 19.264 9.825L51.7 96.492s-10.6.232-21.74-8.123c0 0-11.14-20.192-11.14-45.102 0 0 6.576-11.218 23.673-11.76z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="bunny" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M45.41 9.163c16.865-3.38 17.864 23.407 15.986 33.274L48.02 43.965c-7.966-11.333-15.906-32.139-2.61-34.802zm38.945 0C67.489 5.783 66.49 32.57 68.368 42.437l13.376 1.528c7.966-11.333 15.906-32.139 2.61-34.802z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M65.575 93.807a54.49 54.49 0 009.548-.924v5.987s-2.595.525-4.774.525c-2.18 0-4.775-.525-4.775-.525v-5.063zM53.877 92.7l.495.097.013.003c2.795.522 5.823.888 9.04.984v5.086s-2.595.525-4.774.525c-2.18 0-4.774-.525-4.774-.525V92.7z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M94.98 44.605a63.288 63.288 0 00-14.915-5.893c-11.336-2.92-25.477-1.396-31.13-.27-3.161.718-7.196 1.921-11.744 3.92-2.862 1.314-4.564 2.243-4.564 2.243-1.067.53-3.543 1.85-4.913 2.883-3.298 7.744-8.393 22.432-8.393 39.279 0 0 6.498 11.218 23.595 11.76 0 0 2.862-3.482 5.183-6.422-9.825-2.94-13.538-9.129-13.538-9.129s.773.542 2.166 1.316c.077.077.155.154.31.231.116.078.232.136.348.194.116.058.232.116.348.193 1.934 1.083 3.868 1.934 5.647 2.63 3.172 1.238 6.963 2.476 11.372 3.327 5.803 1.083 12.61 1.47 20.037.078 3.636-.62 7.35-1.702 11.218-3.327 2.707-1.006 5.725-2.476 8.896-4.564 0 0-3.868 6.343-14.002 9.206 2.32 2.94 5.106 6.266 5.106 6.266 17.097-.541 23.673-11.759 23.673-11.759 0-15.996-4.594-30.046-7.881-38.053-.874-.727-4.91-3.043-6.818-4.11z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="cap" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M63.909 38.145c-21.277 0-31.678 12.862-34.131 18.68a3.398 3.398 0 01-6.261-2.64c3.381-8.02 16.055-22.835 40.392-22.835 24.33 0 37.159 14.804 40.629 22.802a3.398 3.398 0 01-6.234 2.704c-2.533-5.84-13.11-18.71-34.395-18.71z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M63.909 41.145c-19.928 0-29.325 12.001-31.367 16.845a6.398 6.398 0 01-9.431 2.847c-2.299 7.676-4.29 17.364-4.29 27.896 0 0 6.498 11.218 23.595 11.759 0 0 2.862-3.48 5.183-6.42-9.825-2.94-13.538-9.13-13.538-9.13s.773.542 2.166 1.316c.077.077.155.154.31.232.116.077.232.135.348.193.116.058.232.116.348.194 1.934 1.083 3.868 1.934 5.647 2.63 3.172 1.238 6.963 2.476 11.372 3.327 5.803 1.083 12.61 1.47 20.037.077 3.636-.619 7.35-1.702 11.218-3.327 2.707-1.005 5.725-2.475 8.896-4.564 0 0-3.868 6.344-14.002 9.206 2.32 2.94 5.106 6.266 5.106 6.266 17.097-.541 23.673-11.759 23.673-11.759 0-10.515-1.985-20.19-4.28-27.86a6.397 6.397 0 01-9.349-2.824c-2.118-4.883-11.7-16.904-31.642-16.904z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.09 43.505C29.953 28.616 45.388 17.243 64 17.243c18.626 0 34.07 11.39 36.915 26.295-7.035-7.62-19.157-15.188-37.006-15.188-17.811 0-29.847 7.536-36.818 15.155zm31.053-28.902a6.095 6.095 0 0111.784.009A47.668 47.668 0 0064 14.243c-1.984 0-3.94.123-5.857.36z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="cat" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M30.61 19.182l-.644 20.462 21.466-8.034L30.61 19.182zm66.795 0l.645 20.462-21.466-8.034 20.821-12.428z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M80.4 90.226a332.977 332.977 0 005.107 6.266c17.097-.541 23.673-11.759 23.673-11.759 0-1.275-.03-2.538-.085-3.786L96.362 77.04l12.546.868a93.786 93.786 0 00-.625-5.681l-12.669-.722 12.168-2.46c-2.991-17.175-9.742-29.413-9.742-29.413-11.14-8.355-21.74-8.123-21.74-8.123l-1.082 1.238c13.151 4.023 19.263 9.825 19.263 9.825-8.046-4.41-15.937-6.576-23.286-7.427a65.458 65.458 0 00-15.627.155c-.406 0-.752.059-1.142.125l-.14.024-.034.006c-2.707.232-9.283 1.237-17.56 4.873-2.863 1.316-4.565 2.244-4.565 2.244s6.42-6.112 20.346-10.134l-.773-.929s-10.6-.232-21.74 8.123c0 0-6.751 12.238-9.742 29.413l12.168 2.46-12.669.722a93.702 93.702 0 00-.624 5.68l12.545-.867-12.733 3.908a85.404 85.404 0 00-.084 3.786s6.498 11.218 23.595 11.76c0 0 2.862-3.482 5.183-6.422-9.825-2.94-13.538-9.128-13.538-9.128s.773.541 2.166 1.315c.077.077.155.154.31.232.116.077.232.135.348.193.116.058.232.116.348.194 1.934 1.083 3.868 1.934 5.647 2.63 3.172 1.238 6.963 2.476 11.372 3.327 5.803 1.083 12.61 1.47 20.037.077 3.636-.619 7.35-1.702 11.218-3.327 2.707-1.005 5.725-2.475 8.896-4.564 0 0-3.868 6.344-14.002 9.206z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="cat-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M40.39 68.877c0-5.66 4.175-10.3 9.464-10.3 5.29 0 9.558 4.64 9.465 10.3 0 5.66-4.175 10.3-9.465 10.3-5.196 0-9.464-4.64-9.464-10.3zm10.465-6c-1.88 1.8-4.512 6.72 0 12 4.512-5.28 1.88-10.2 0-12zm17.825 6c0-5.66 4.175-10.3 9.464-10.3 5.29 0 9.557 4.64 9.465 10.3 0 5.66-4.176 10.3-9.465 10.3-5.196 0-9.465-4.64-9.465-10.3zm8.137-6c-1.88 1.8-4.512 6.72 0 12 4.511-5.28 1.88-10.2 0-12z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="chubby" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.742 70.099c5.93 1.664 10.58 4.91 14.4 9.299 4.762-1.594 8.238-6.592 8.238-12.511 0-7.203-5.147-13.042-11.495-13.042-6.348 0-11.495 5.839-11.495 13.042 0 1.108.122 2.184.352 3.212zm15.781 1.528c2.316 0 4.193-2.122 4.193-4.74 0-2.618-1.877-4.74-4.193-4.74s-4.193 2.122-4.193 4.74c0 2.618 1.877 4.74 4.193 4.74zm36.736-1.528c-5.93 1.664-10.58 4.91-14.4 9.299-4.763-1.594-8.238-6.592-8.238-12.511 0-7.203 5.146-13.042 11.494-13.042 6.349 0 11.495 5.839 11.495 13.042a14.74 14.74 0 01-.351 3.212zm-15.782 1.528c-2.316 0-4.193-2.122-4.193-4.74 0-2.618 1.877-4.74 4.193-4.74s4.193 2.122 4.193 4.74c0 2.618-1.877 4.74-4.193 4.74z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="chubby-shape" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.568 33.265A65.284 65.284 0 0164 32.717c2.96.001 5.793.202 8.432.548.406 0 .752.06 1.142.126l.174.029c2.707.232 9.283 1.238 17.56 4.874 2.863 1.315 4.565 2.243 4.565 2.243s-6.42-6.111-20.346-10.134l.773-.928s10.6-.233 21.74 8.123c0 0 16.89 24.862 11.139 45.102 0 0-3.56 23.39-23.632 4.062C76.63 89.96 70.407 91.489 64 91.386c-6.407.103-12.631-1.426-21.547-4.624C22.381 106.09 18.821 82.7 18.821 82.7c-5.75-20.24 11.14-45.102 11.14-45.102C41.1 29.242 51.7 29.475 51.7 29.475l.773.928c-13.925 4.023-20.346 10.134-20.346 10.134s1.702-.928 4.564-2.243c8.278-3.636 14.854-4.642 17.561-4.874l.174-.03c.39-.066.736-.125 1.142-.125z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="crazy-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 66c0-6.595 4.852-12 11-12 6.146 0 11.106 5.405 10.998 12 0 3.064-1.048 5.872-2.786 8H41.824C40.07 71.872 39 69.064 39 66zm31.24 2.877c0-4.728 3.487-8.604 7.905-8.604 4.419 0 7.906 3.876 7.906 8.604 0 1.914-.571 3.689-1.545 5.123H71.808a9.048 9.048 0 01-1.569-5.123z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 129" id="crown" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M63.526 31.523a2.112 2.112 0 012.987 0l4.297 4.296a2.112 2.112 0 010 2.987l-4.297 4.297a2.112 2.112 0 01-2.987 0l-4.296-4.297a2.112 2.112 0 010-2.987l4.296-4.297z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M27.105 38.738l-.002 8.049c4.48-3.268 15.451-9.129 28.527-10.87a5.257 5.257 0 011.36-2.338l4.296-4.297a5.263 5.263 0 013.734-1.546h.05c1.35 0 2.702.515 3.733 1.546l4.297 4.297a5.256 5.256 0 011.36 2.337c13.075 1.742 24.047 7.603 28.526 10.87l-.002-8.048-28.525-9.456-9.44-4.248-9.39 4.248-28.525 9.456z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M33.58 47.247c6.524-3.296 12.996-6.436 22.386-7.64.25.52.592 1.007 1.024 1.439l4.296 4.297a5.28 5.28 0 007.467 0l4.297-4.297c.392-.393.71-.831.953-1.3 12.167 1.74 15.022 3.595 21.75 7.04 1.59.815 5.183 3.143 6.229 4.104 3.185 7.285 6.724 19.705 7.821 37.147l-3.001 1.584-12.7-6.463-62.09-.513-9.643 7.695-3.172-2.303c1.064-17.442 5.132-29.862 8.31-37.147a75.212 75.212 0 016.074-3.643z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M86.06 99.78c17.144-.542 23.737-11.76 23.737-11.76l-12.302-7.98-65.109-1.49-13.19 9.47s6.516 11.218 23.66 11.76c0 0 2.87-3.482 5.196-6.422-9.85-2.94-13.574-9.128-13.574-9.128s.776.541 2.172 1.315c.077.077.155.154.31.232.116.077.233.135.35.193.115.058.232.116.348.194 1.94 1.083 3.878 1.934 5.663 2.63 3.18 1.238 6.98 2.476 11.402 3.327 5.818 1.083 12.644 1.47 20.09.077 3.646-.619 7.37-1.702 11.248-3.327 2.715-1.005 5.74-2.475 8.92-4.564 0 0-3.878 6.344-14.04 9.206 2.327 2.94 5.12 6.266 5.12 6.266zM65 11.568l14.29 19.1-7.343-1.474L65 26.301l-6.434 2.893-7.855 1.473L65 11.567zM27 27.715l.107 11.09L39 36.28l-12-8.565z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M43.831 18.653l-8.292 17.41 19.774-4.803-11.482-12.607zm59.156 9.062V38.87l-12-2.59 12-8.564z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M86.155 18.653l8.293 17.41-19.774-4.803 11.481-12.607z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="cute" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.885 79.929c6.348 0 11.495-5.84 11.495-13.042 0-7.203-5.147-13.042-11.495-13.042-6.348 0-11.495 5.839-11.495 13.042 0 7.203 5.147 13.042 11.495 13.042zm4.638-7.295c2.808 0 5.084-2.573 5.084-5.747s-2.276-5.748-5.084-5.748-5.084 2.574-5.084 5.748c0 3.174 2.276 5.747 5.084 5.747zm25.592 7.295c-6.348 0-11.494-5.84-11.494-13.042 0-7.203 5.146-13.042 11.494-13.042 6.349 0 11.495 5.839 11.495 13.042 0 7.203-5.147 13.042-11.495 13.042zm-4.604-7.295c-2.808 0-5.085-2.573-5.085-5.747s2.277-5.748 5.085-5.748 5.084 2.574 5.084 5.748c0 3.174-2.276 5.747-5.084 5.747z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="cute-downwards" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.885 79.929c6.348 0 11.495-5.84 11.495-13.042 0-7.203-5.147-13.042-11.495-13.042-6.349 0-11.495 5.839-11.495 13.042 0 7.203 5.146 13.042 11.495 13.042zm2.083-2.695c2.808 0 5.084-2.574 5.084-5.748 0-3.174-2.276-5.747-5.084-5.747s-5.085 2.573-5.085 5.747 2.277 5.748 5.085 5.748zm28.147 2.695c-6.348 0-11.495-5.84-11.495-13.042 0-7.203 5.147-13.042 11.495-13.042 6.348 0 11.495 5.839 11.495 13.042 0 7.203-5.147 13.042-11.495 13.042zm-2.083-2.695c-2.808 0-5.084-2.574-5.084-5.748 0-3.174 2.276-5.747 5.084-5.747s5.084 2.573 5.084 5.747-2.276 5.748-5.084 5.748z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="dead" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill="var(--svg-custom-color, #4F5660)" d="M54.343 61.565l-11.82 11.82 2.803 2.805 11.821-11.821z" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M54.343 61.565l-11.82 11.82 2.803 2.805 11.821-11.821zm28.331 0l-11.82 11.82 2.803 2.805 11.821-11.82z" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M82.674 61.565l-11.82 11.82 2.803 2.805 11.821-11.82zm-25.527 11.82l-11.82-11.82-2.805 2.804 11.82 11.82z" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M57.147 73.385l-11.82-11.82-2.805 2.804 11.82 11.82zm28.331 0l-11.82-11.82-2.805 2.804 11.82 11.82z" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M85.478 73.385l-11.82-11.82-2.805 2.804 11.82 11.82z" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="devil" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M34.702 36.637c-2.442-5.145-.963-11.002 3.28-13.387-.176 1.8.15 3.777 1.045 5.662.982 2.068 2.481 3.677 4.17 4.668.686-.209 1.402-.41 2.149-.602a36.973 36.973 0 014.525-.972c3.89-.683 8.434-1.112 13.686-1.112 5.3 0 9.855.373 13.752.99 2.023.228 3.98.66 5.821 1.21.54.143 1.063.29 1.568.442 1.66-.995 3.13-2.586 4.097-4.624.894-1.885 1.221-3.861 1.045-5.662 4.243 2.385 5.722 8.242 3.28 13.387l-.008.016a28.843 28.843 0 014.928 2.978s11.14 20.192 11.14 45.102c0 0-6.576 11.218-23.673 11.76 0 0-2.785-3.327-5.106-6.267 10.134-2.862 14.002-9.206 14.002-9.206-3.171 2.089-6.189 3.559-8.896 4.564-3.868 1.625-7.582 2.708-11.218 3.327-7.427 1.392-14.234 1.006-20.037-.077-4.41-.851-8.2-2.09-11.372-3.327-1.78-.696-3.713-1.547-5.647-2.63a3.12 3.12 0 00-.348-.194 3.286 3.286 0 01-.349-.193 1.067 1.067 0 01-.309-.232c-1.392-.774-2.166-1.315-2.166-1.315s3.713 6.189 13.538 9.128a485.207 485.207 0 01-5.183 6.421c-17.097-.541-23.595-11.759-23.595-11.759 0-8.735 1.37-16.89 3.148-23.797 3.295-12.791 7.992-21.305 7.992-21.305a28.974 28.974 0 014.78-2.911 10.528 10.528 0 01-.039-.083z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="evil-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M45.357 59.801c-2.975 1.744-4.967 5.166-4.967 9.076 0 2.319.716 4.467 1.92 6.194.627.137 1.258.287 1.89.453a44.102 44.102 0 018.522 3.177c3.855-1.32 6.597-5.237 6.597-9.824.003-.193.001-.384-.005-.575a29.665 29.665 0 01-5.972-2.379c-.06 2.388-.734 5.066-2.487 7.817-2.548-3.999-2.818-7.844-2.231-10.869a24.958 24.958 0 01-3.267-3.07zm37.286 0c2.975 1.744 4.967 5.166 4.967 9.076a10.82 10.82 0 01-1.92 6.194c-.627.137-1.258.287-1.89.453a44.1 44.1 0 00-8.523 3.177c-3.854-1.32-6.596-5.237-6.596-9.824-.004-.193-.002-.384.005-.575a29.664 29.664 0 005.972-2.379c.06 2.388.734 5.066 2.487 7.817 2.548-3.999 2.817-7.844 2.23-10.869a24.952 24.952 0 003.268-3.07z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="face-mask" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M109.655 71.023l-2.096 1.673c-2.403 1.918-6.154 3.954-10.294 6.201-.926.503-1.872 1.016-2.826 1.541-2.609 1.435-5.226 2.675-7.65 3.529-2.46.866-4.525 1.263-6.094 1.191-2.87-.13-4.79-.521-6.168-.961-1.37-.438-2.31-.953-3.319-1.512l-.075-.042c-1.502-.832-3.282-1.818-6.133-1.818-2.85 0-4.631.986-6.133 1.818l-.075.042c-1.01.559-1.948 1.074-3.319 1.512-1.378.44-3.297.83-6.168.961-1.569.072-3.634-.325-6.094-1.191-2.424-.854-5.041-2.094-7.65-3.529-.953-.524-1.898-1.037-2.823-1.54h-.002c-4.141-2.248-7.892-4.284-10.295-6.202l-1.974-1.576c2.288-20.087 10.56-35.08 10.56-35.08 11.14-8.355 21.739-8.123 21.739-8.123l.773.929C39.614 32.868 33.193 38.98 33.193 38.98s1.702-.928 4.565-2.243c8.277-3.637 14.853-4.642 17.56-4.874l.174-.03c.39-.066.737-.125 1.142-.125a65.458 65.458 0 0115.627-.155c7.35.851 15.24 3.017 23.286 7.427 0 0-6.111-5.802-19.263-9.825l1.083-1.238s10.599-.232 21.739 8.123c0 0 8.245 14.945 10.549 34.983z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.57 75.04c3.757 3 10.635 7.431 17.342 10.3-.373 2.153-.61 4.965-.662 7.807-.05 2.771.073 5.721.472 8.263a82.79 82.79 0 01-4-2.102c-.606-.344-1.289-.66-2.017-.996-5.047-2.333-11.135-7.82-11.135-23.272zm19.68 18.161c.045-2.523.242-4.904.519-6.736 3.159 1.13 6.17 1.804 8.672 1.69 6.172-.28 8.746-1.706 10.804-2.846 1.473-.815 2.681-1.484 4.755-1.484s3.282.669 4.755 1.484c2.059 1.14 4.632 2.566 10.804 2.846 2.502.114 5.514-.56 8.673-1.69.276 1.832.473 4.213.519 6.736.066 3.648-.19 7.325-.866 9.823-7.736 3.546-17.949 7.351-23.885 7.351s-16.15-3.805-23.885-7.351c-.675-2.498-.932-6.175-.866-9.823zm52.028 8.209a82.742 82.742 0 004-2.102c.606-.344 1.29-.66 2.017-.996 5.047-2.333 11.135-5.839 11.135-23.272-3.757 3-10.635 7.431-17.342 10.3.373 2.153.611 4.965.663 7.807.05 2.771-.074 5.72-.473 8.263zm-9.047-5.164H46.77v-2h36.46v2zM50.773 102.9h28.454v-2H50.773v2z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="female-lashes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M36.627 60.567c2.174 2.823 7.084 3.718 10.25 3.224l-.454 3.709c-8.32-.362-9.646-5.426-9.797-6.933z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44.906 62.155c1.348-1.176 3.063-1.882 4.948-1.882 4.418 0 7.983 3.876 7.906 8.604 0 4.728-3.488 8.604-7.906 8.604-4.34 0-7.906-3.876-7.906-8.604 0-1.886.555-3.637 1.503-5.06 3.488.296 6.98-.653 7.543-1.288-1.776.227-4.012.338-6.088-.374z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M91.374 60.567c-2.174 2.823-7.084 3.718-10.25 3.224l.453 3.709c8.32-.362 9.646-5.426 9.797-6.933z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M83.094 62.155c-1.347-1.176-3.063-1.882-4.948-1.882-4.418 0-7.983 3.876-7.906 8.604 0 4.728 3.488 8.604 7.906 8.604 4.34 0 7.906-3.876 7.906-8.604 0-1.886-.555-3.637-1.503-5.06-3.488.296-6.98-.653-7.543-1.288 1.776.227 4.013.338 6.088-.374z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="glasses-1" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><ellipse cx="50.337" cy="68.494" rx="4.872" ry="5.579" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><ellipse rx="4.872" ry="5.579" transform="matrix(-1 0 0 1 77.663 68.494)" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.288 76.949a8.455 8.455 0 100-16.91 8.455 8.455 0 000 16.91zm0 3.146c6.408 0 11.602-5.194 11.602-11.601 0-6.407-5.194-11.602-11.602-11.602-6.407 0-11.601 5.195-11.601 11.602s5.194 11.601 11.601 11.601zm29.424-3.146a8.455 8.455 0 110-16.91 8.455 8.455 0 010 16.91zm0 3.146c-6.408 0-11.602-5.194-11.602-11.601 0-6.407 5.194-11.602 11.602-11.602 6.407 0 11.601 5.195 11.601 11.602s-5.194 11.601-11.601 11.601z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M63.419 64.616c-1.538.112-2.826.496-3.484.781l-1.25-2.887c.985-.427 2.618-.895 4.505-1.032 1.893-.138 4.144.05 6.285 1.05l-1.33 2.851c-1.517-.708-3.194-.875-4.726-.763z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="glasses-2" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><ellipse cx="49.223" cy="68.743" rx="5.2" ry="5.955" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M63.352 64.737c-1.12.08-2.05.362-2.501.557l-1.335-3.082c.801-.347 2.1-.717 3.592-.825 1.499-.11 3.303.038 5.032.844l-1.42 3.044c-1.063-.495-2.254-.62-3.368-.538z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39.658 61.472v9.868h19.275v-9.868H39.658zm-1.12-3.358a2.24 2.24 0 00-2.239 2.239v12.106a2.24 2.24 0 002.24 2.24h21.513a2.24 2.24 0 002.24-2.24V60.353a2.24 2.24 0 00-2.24-2.24H38.538z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><ellipse rx="5.2" ry="5.955" transform="matrix(-1 0 0 1 78.777 68.743)" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M88.342 61.472v9.868H69.067v-9.868h19.275zm1.12-3.358a2.24 2.24 0 012.239 2.239v12.106a2.24 2.24 0 01-2.24 2.24H67.949a2.24 2.24 0 01-2.24-2.24V60.353a2.24 2.24 0 012.24-2.24h21.514z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="hair-1" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M34.138 28.863c1.265-3.989 6.072-8.111 11.678-6.582 5.606 1.529 9.456 1.81 21.134-3.078-.445 2.582-3.097 5.578-6.05 7.707 6.222-.811 14.772-.911 20.733 1.45 9.004 3.568 19.285 5.141 20.771 4.434-2.548 1.91-5.653 8.386-15.817 6.687-4.817-.805-5.803 2.887-16.138 1.698-14.768-1.698-21.872-9.555-32.065-3.185-8.154 5.097-6.228-3.964-4.246-9.13z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M30.49 40.736c-2.192 3.595-10.232 18.379-11.794 43.99l2.078 1.81 13.753-7.87 60.823.78 12.548 6.31 1.405-1.03c-1.569-24.957-9.25-39.633-11.67-43.693-2.869 1.552-6.598 2.403-11.568 1.572-1.197-.2-1.775-.01-3.318.5h-.001c-.348.114-.744.245-1.208.39-2.535.799-5.812 1.48-11.451.832-5.705-.657-10.54-2.242-14.455-3.527-1.378-.452-2.642-.866-3.79-1.19-2.308-.65-4.223-.985-6.044-.882-1.764.1-3.608.624-5.735 1.953-2.114 1.32-4.497 2.37-6.766 1.852-1.303-.298-2.198-.983-2.808-1.797z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M85.56 96.463c17.144-.541 23.737-11.759 23.737-11.759l-12.302-7.98-65.109-1.49-13.19 9.47s6.516 11.218 23.66 11.76c0 0 2.87-3.482 5.196-6.422-9.85-2.94-13.574-9.129-13.574-9.129s.776.542 2.172 1.316c.077.077.155.154.31.232.116.077.233.135.35.193.115.058.232.116.348.193 1.94 1.084 3.878 1.934 5.663 2.63 3.18 1.239 6.98 2.476 11.402 3.327 5.818 1.083 12.644 1.47 20.09.078 3.646-.62 7.37-1.702 11.248-3.327 2.715-1.006 5.74-2.476 8.92-4.564 0 0-3.878 6.344-14.04 9.206 2.327 2.94 5.12 6.266 5.12 6.266z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="hair-2" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M64.016 17.352c-9.435-.368-30.806 2.904-40.804 18.931-12.498 20.035-16.246 29.157-9.398 30.97 2.083.552 10.133 2.041 14.545-.459l6.8-28.305h11.406l4.363-6.493 3.88 6.493h38.065l6.8 28.306c4.412 2.5 11.1 1.01 13.183.458 7.592-2.01 4.463-10.935-8.036-30.97-9.998-16.027-31.369-19.3-40.804-18.931z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M87.262 17.325l2.451 7.448 4.412 3.629 6.312-3.629-7.047-.764-6.128-6.684zM37.646 41.644l-6.22 25.888a3.155 3.155 0 01-1.512 2.008c-3.105 1.759-6.86 1.722-9.65 1.739-.648 3.967-.775 8.884-1.062 13.587l2.096 1.574 11.829-7.367h61.322l12.867 7.367 2.131-1.574c-.296-4.704-.739-9.619-1.394-13.587h-.044c-2.889.06-6.58.137-9.891-1.74a3.155 3.155 0 01-1.512-2.007l-6.22-25.888H53.2l-2.113-3.853-2.318 3.853H37.646z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M85.804 96.563c17.075-.54 23.643-11.713 23.643-11.713L97.193 76.9 32.34 75.417 19.202 84.85s6.49 11.173 23.566 11.713c0 0 2.858-3.468 5.176-6.396-9.812-2.928-13.521-9.093-13.521-9.093s.773.54 2.163 1.31c.078.077.155.154.31.231.115.077.231.135.347.193.116.058.232.115.348.192 1.931 1.08 3.863 1.927 5.64 2.62 3.168 1.233 6.954 2.466 11.358 3.314 5.795 1.079 12.594 1.464 20.012.077 3.631-.616 7.34-1.695 11.203-3.313 2.704-1.002 5.718-2.466 8.885-4.547 0 0-3.863 6.319-13.985 9.17 2.318 2.928 5.1 6.242 5.1 6.242z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="hanging-ears" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M53.521 88.834c3.208.598 6.722.984 10.479.974 3.757.01 7.271-.376 10.479-.974 4.41-.851 8.2-2.09 11.372-3.327 1.78-.696 3.713-1.547 5.647-2.63.116-.078.232-.136.348-.194.116-.058.233-.116.349-.193.154-.078.232-.155.309-.232 1.392-.774 2.166-1.315 2.166-1.315s0 13.138 7.992 13.085c7.991-.053 7.248-9.295 7.248-9.295 0-9.27-1.542-17.886-3.48-25.052-3.268-12.09-7.66-20.05-7.66-20.05-11.14-8.355-21.739-8.123-21.739-8.123l-.773.929C90.183 36.459 96.604 42.57 96.604 42.57s-1.702-.928-4.564-2.243c-8.278-3.637-14.854-4.642-17.561-4.874a60.44 60.44 0 01-.174-.03c-.39-.066-.736-.125-1.142-.125A65.38 65.38 0 0064 34.754a65.38 65.38 0 00-9.163.545c-.406 0-.752.059-1.142.125l-.174.03c-2.707.232-9.283 1.237-17.56 4.873-2.863 1.316-4.565 2.244-4.565 2.244s6.42-6.112 20.346-10.134l-.773-.929s-10.6-.232-21.74 8.123c0 0-4.39 7.96-7.66 20.05-1.937 7.166-3.48 15.782-3.48 25.052 0 0-.742 9.242 7.25 9.295 7.99.053 7.99-13.085 7.99-13.085s.774.541 2.167 1.315c.077.077.155.154.31.232.115.077.232.135.348.193.116.058.232.116.348.194 1.934 1.083 3.868 1.934 5.647 2.63 3.172 1.238 6.963 2.476 11.372 3.327z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="hannibal" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M109.155 71.056l-2.096 1.673c-2.403 1.918-6.154 3.954-10.294 6.202-.926.503-1.872 1.016-2.826 1.54-2.609 1.435-5.226 2.676-7.65 3.53-2.46.865-4.525 1.262-6.094 1.191-2.87-.13-4.79-.521-6.168-.961-1.37-.438-2.31-.953-3.319-1.512l-.075-.042c-1.502-.832-3.282-1.819-6.133-1.819-2.85 0-4.631.987-6.133 1.819l-.075.042c-1.01.559-1.948 1.074-3.319 1.512-1.378.44-3.297.83-6.168.961-1.569.071-3.634-.325-6.094-1.192-2.424-.853-5.041-2.094-7.65-3.528a575.072 575.072 0 00-2.823-1.54l-.002-.001c-4.141-2.248-7.892-4.284-10.295-6.202l-1.974-1.576c2.288-20.086 10.56-35.08 10.56-35.08 11.14-8.354 21.739-8.122 21.739-8.122l.773.928c-13.925 4.023-20.346 10.135-20.346 10.135s1.702-.929 4.565-2.244c8.277-3.636 14.853-4.642 17.56-4.874l.174-.029c.39-.066.737-.125 1.142-.125a65.458 65.458 0 0115.627-.155c7.35.85 15.24 3.017 23.286 7.427 0 0-6.111-5.803-19.263-9.825l1.083-1.238s10.599-.232 21.739 8.123c0 0 8.245 14.945 10.549 34.982z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M48.941 88.189c-8.469.385-22.776-8.25-28.871-13.115 0 15.452 6.088 20.939 11.135 23.272.728.336 1.411.652 2.017.996 6.722 3.808 23.08 11.067 31.278 11.067 8.199 0 24.556-7.259 31.278-11.067.606-.344 1.29-.66 2.017-.996 5.047-2.333 11.135-5.839 11.135-23.272-6.095 4.865-20.402 13.5-28.871 13.115-6.172-.28-8.745-1.706-10.804-2.846-1.472-.815-2.681-1.485-4.755-1.485s-3.282.67-4.755 1.485c-2.058 1.14-4.632 2.565-10.804 2.846zm28.646 10.346a4.636 4.636 0 01-4.166 4.611v-9.223a4.636 4.636 0 014.166 4.612zM66.163 93.9h4.258v9.27h-4.258V93.9zm-7.258 9.27h4.258V93.9h-4.258v9.27zm-3-9.268a4.635 4.635 0 000 9.265v-9.265z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="happy" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M49.637 60.279c-4.257 0-7.708 3.952-7.708 8.827 0 .885.114 1.74.326 2.547 2.362-2.653 8.623-6.368 14.765 0a10.02 10.02 0 00.326-2.547c0-4.875-3.451-8.827-7.709-8.827zm28.725 0c4.258 0 7.709 3.952 7.709 8.827 0 .885-.114 1.74-.326 2.547-2.363-2.653-8.623-6.368-14.765 0a10.02 10.02 0 01-.326-2.547c0-4.875 3.451-8.827 7.708-8.827z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 129" id="headphones" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M26.226 60.225c-3.77 15.176-4.295 15.46-9.132 14.259-5.867-1.457-8.894-9.6-6.762-18.186 2.133-8.587 8.617-14.366 14.484-12.91 5.082 1.263 5.178 1.66 1.41 16.837zm75.156 0c3.769 15.176 4.295 15.46 9.132 14.259 5.867-1.457 8.894-9.6 6.762-18.186-2.133-8.587-8.618-14.366-14.484-12.91-5.082 1.263-5.179 1.66-1.41 16.837z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M86.007 96.526S83.222 93.2 80.9 90.26c10.134-2.863 14.002-9.206 14.002-9.206-3.172 2.088-6.189 3.558-8.897 4.564-3.868 1.625-7.581 2.708-11.217 3.327-7.427 1.392-14.235 1.005-20.037-.078-4.41-.85-8.2-2.089-11.372-3.326-1.78-.697-3.713-1.548-5.648-2.63-.115-.078-.232-.136-.348-.194a3.126 3.126 0 01-.348-.193 1.091 1.091 0 01-.31-.233c-1.392-.773-2.165-1.315-2.165-1.315s3.713 6.19 13.538 9.129a485.207 485.207 0 01-5.183 6.421c-17.097-.541-23.596-11.759-23.596-11.759 0-2.467.1-4.889.278-7.248a6.15 6.15 0 00.744-.04c1.694-.204 2.95-1.138 3.884-2.545.829-1.248 1.488-2.985 2.15-5.15.677-2.217 1.432-5.144 2.373-8.932.938-3.78 1.654-6.71 2.11-8.97.443-2.2.7-4.036.57-5.52-.147-1.693-.823-3.12-2.257-4.095a6.11 6.11 0 00-.737-.425c.616-1.413.998-2.177.998-2.177 5.546-3.416 18.839-11.023 34.57-11.023 13.846 0 28.927 7.607 34.536 11.023 0 0 .387.7 1.016 2.002a6.618 6.618 0 00-1.12.6c-1.434.975-2.11 2.402-2.257 4.096-.13 1.483.128 3.32.571 5.52.455 2.259 1.171 5.189 2.11 8.969.94 3.788 1.696 6.715 2.374 8.933.661 2.164 1.32 3.901 2.149 5.15.933 1.406 2.19 2.34 3.884 2.543.697.084 1.415.029 2.097-.082.203 2.398.316 4.86.316 7.371 0 0-6.575 11.218-23.672 11.76zM52.973 33.2c-13.925 3.43-20.346 9.405-20.346 9.405s1.702-.792 4.564-1.913c8.278-3.1 14.854-3.958 17.561-4.155l.174-.025c.39-.057.737-.107 1.142-.107a76.706 76.706 0 0115.627-.132c7.35.725 15.24 2.572 23.286 6.332 0 0-6.112-5.711-19.263-9.141-3.489-.946-12.921-2.322-22.745-.264z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="heart-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M57.328 62.674a4.777 4.777 0 00-3.553-1.547 4.469 4.469 0 00-2.792.964 5.71 5.71 0 00-1.128 1.178 5.71 5.71 0 00-1.128-1.178 4.468 4.468 0 00-2.791-.964 4.78 4.78 0 00-3.554 1.547c-.908.986-1.409 2.332-1.409 3.792 0 1.502.56 2.877 1.762 4.328 1.075 1.297 2.62 2.614 4.41 4.14.611.52 1.304 1.11 2.023 1.74a1.042 1.042 0 001.373 0c.72-.63 1.413-1.22 2.024-1.741 1.79-1.525 3.335-2.842 4.41-4.14 1.202-1.45 1.762-2.825 1.762-4.327 0-1.46-.5-2.806-1.41-3.792zm28.29 0a4.777 4.777 0 00-3.553-1.547 4.468 4.468 0 00-2.791.964 5.707 5.707 0 00-1.129 1.178 5.708 5.708 0 00-1.128-1.178 4.468 4.468 0 00-2.791-.964c-1.372 0-2.634.55-3.553 1.547-.91.986-1.41 2.332-1.41 3.792 0 1.502.56 2.877 1.762 4.328 1.075 1.297 2.62 2.614 4.41 4.14.611.52 1.304 1.11 2.023 1.74a1.042 1.042 0 001.374 0c.719-.63 1.412-1.22 2.023-1.741 1.79-1.525 3.335-2.842 4.41-4.14 1.202-1.45 1.762-2.825 1.762-4.327 0-1.46-.5-2.806-1.41-3.792z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="knit-cap" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M24.562 41.039c-1.275.325-3.505 2.301-3.187 3.623.116.479.241 1.062.379 1.702.625 2.903 1.502 6.977 2.808 7.776.458.28 1.91-.326 4.32-1.333 5.973-2.495 17.832-7.448 35.03-7.448 17.197 0 29.057 4.953 35.03 7.448 2.41 1.007 3.862 1.614 4.321 1.333 1.305-.8 2.182-4.873 2.807-7.776.138-.64.264-1.223.379-1.701.225-.936-1.912-3.299-3.186-3.624-16.059-6.913-32.981-7.387-39.351-7.387-6.37 0-23.292.474-39.35 7.387z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.908 35.967C32.83 28.82 43.15 19.245 63.912 19.028c20.762.217 31.082 9.793 35.003 16.939-14.832-5.113-29.247-5.483-35.003-5.483s-20.171.37-35.004 5.483z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M24.166 57.316a4.314 4.314 0 001.362.014 8.315 8.315 0 001.47-.37c.831-.28 1.884-.72 3.004-1.187l.101-.042c5.865-2.45 17.252-7.203 33.809-7.203s27.945 4.753 33.81 7.203l.1.042c1.12.468 2.173.907 3.004 1.186a8.29 8.29 0 001.471.37c.253.036.833.184 1.499.044 2.421 7.298 4.722 17.133 5.507 29.624l-4.638 1.583-10.028-7.636H34.47l-12.788 8.372-2.986-2.32c.76-12.477 3.06-22.385 5.47-29.68zM62.7 11.297c-.983.093-1.917.291-2.777.576l.34 3.493-3.14-2.068c-1.207.897-2.038 2.03-2.328 3.286a63.45 63.45 0 019.084-.723h.066c3.327.034 6.411.3 9.266.752-.283-1.266-1.117-2.409-2.33-3.312L67.996 15.2l.317-3.246a12.32 12.32 0 00-2.347-.577l-1.847 3.371-1.42-3.451z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M85.56 98.722c17.143-.542 23.736-11.76 23.736-11.76l-12.302-7.98-65.108-1.489-13.19 9.47s6.516 11.217 23.659 11.759c0 0 2.87-3.481 5.197-6.421-9.852-2.94-13.575-9.129-13.575-9.129s.776.542 2.172 1.315c.078.078.155.155.31.232.116.078.233.136.35.194.116.058.232.116.348.193 1.94 1.083 3.879 1.934 5.663 2.63 3.18 1.238 6.981 2.476 11.402 3.327 5.818 1.083 12.644 1.47 20.09.077 3.646-.618 7.37-1.702 11.248-3.326 2.715-1.006 5.74-2.476 8.92-4.565 0 0-3.878 6.344-14.04 9.207 2.328 2.94 5.12 6.266 5.12 6.266z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="line-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M88.859 69.515L71.044 74.83l-1.2-4.025 17.814-5.314 1.2 4.024zm-49.718 0l17.815 5.315 1.2-4.025-17.814-5.314-1.2 4.024z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="line-eyes-happy" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M49.855 62.428l9.164 9.163-2.633 2.633-6.531-6.532-6.532 6.532-2.632-2.633 9.164-9.163zm28.311 0l9.163 9.163-2.632 2.633-6.531-6.532-6.532 6.532-2.632-2.633 9.164-9.163z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="mohawk" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M76.565 29.995v11.657h-25.13V29.817a36.78 36.78 0 012.817-.363l.174-.03c.39-.066.736-.125 1.142-.125a65.458 65.458 0 0115.627-.155c1.76.204 3.553.484 5.37.851z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M79.565 36.678v7.974h-31.13v-8.244c-3.161.718-7.196 1.922-11.744 3.92-2.862 1.315-4.564 2.243-4.564 2.243-1.067.531-3.543 1.851-4.913 2.883-3.298 7.744-8.393 22.433-8.393 39.28 0 0 6.498 11.217 23.595 11.758 0 0 2.862-3.48 5.183-6.42-9.825-2.94-13.538-9.13-13.538-9.13s.773.542 2.166 1.316c.077.077.155.154.31.232.116.077.232.135.348.193.116.058.232.116.348.194 1.934 1.083 3.868 1.934 5.647 2.63 3.172 1.238 6.963 2.476 11.372 3.327 5.803 1.083 12.61 1.47 20.037.077 3.636-.619 7.35-1.702 11.218-3.327 2.707-1.005 5.725-2.475 8.896-4.564 0 0-3.868 6.344-14.002 9.206 2.32 2.94 5.106 6.266 5.106 6.266 17.097-.541 23.673-11.759 23.673-11.759 0-15.995-4.594-30.045-7.881-38.053-.874-.727-4.91-3.042-6.818-4.109-5.066-2.776-10.07-4.663-14.916-5.893z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="mono-brow" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M77.817 60.273c-4.418 0-7.906 3.876-7.906 8.604s3.566 8.604 7.906 8.604c4.418 0 7.906-3.876 7.906-8.604s-3.488-8.604-7.906-8.604zm-28.291 0c-4.418 0-7.905 3.876-7.905 8.604s3.565 8.604 7.905 8.604c4.419 0 7.906-3.876 7.906-8.604.078-4.728-3.487-8.604-7.906-8.604z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M90.946 62.903H37.054v-3h53.892v3z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="monocle" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M50.627 79.007c6.062 0 10.976-4.915 10.976-10.977s-4.914-10.976-10.977-10.976c-6.062 0-10.976 4.914-10.976 10.976 0 6.062 4.914 10.977 10.977 10.977zm0 4.085c8.318 0 15.061-6.744 15.061-15.062s-6.743-15.06-15.062-15.06c-8.318 0-15.061 6.743-15.061 15.061s6.743 15.062 15.062 15.062z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><circle cx="32.684" cy="68.03" r="1.981" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><circle cx="32.684" cy="73.439" r="1.981" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><circle cx="32.684" cy="78.848" r="1.981" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><circle cx="32.684" cy="84.248" r="1.981" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><circle cx="32.684" cy="89.648" r="1.981" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><circle cx="32.684" cy="95.049" r="1.981" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M50.526 59.34c-4.418 0-7.905 3.875-7.905 8.603s3.565 8.604 7.905 8.604c4.419 0 7.906-3.876 7.906-8.604.078-4.728-3.487-8.603-7.906-8.603zm28.291 0c-4.417 0-7.905 3.875-7.905 8.603s3.565 8.604 7.905 8.604c4.419 0 7.906-3.876 7.906-8.604s-3.487-8.603-7.906-8.603z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="mouse" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M52.45 32.408l.023.029-.013.003c-13.916 4.023-20.333 10.131-20.333 10.131s1.702-.928 4.564-2.243c8.278-3.637 14.854-4.642 17.561-4.874l.174-.03c.39-.066.736-.125 1.142-.125a65.458 65.458 0 0115.627-.155c7.35.851 15.24 3.017 23.286 7.427 0 0-6.112-5.802-19.263-9.825l.368-.42c2.25-6.539 8.455-11.237 15.757-11.237 9.202 0 16.661 7.46 16.661 16.66a16.62 16.62 0 01-5.392 12.273c-2.413-6.49-4.566-10.39-4.566-10.39-10.564-7.924-20.64-8.125-21.655-8.124 1.051 0 11.108.218 21.648 8.123 0 0 11.141 20.192 11.141 45.102 0 0-6.576 11.218-23.673 11.76 0 0-2.785-3.327-5.106-6.267 10.134-2.862 14.002-9.206 14.002-9.206-3.171 2.089-6.189 3.559-8.896 4.564-3.868 1.625-7.582 2.708-11.218 3.327-7.427 1.392-14.234 1.006-20.037-.077-4.41-.851-8.2-2.09-11.372-3.327-1.78-.696-3.713-1.547-5.647-2.63a3.12 3.12 0 00-.348-.194 3.286 3.286 0 01-.349-.193 1.067 1.067 0 01-.309-.232c-1.392-.774-2.166-1.315-2.166-1.315s3.713 6.189 13.538 9.128a494.172 494.172 0 01-5.183 6.422c-17.097-.542-23.595-11.76-23.595-11.76 0-13.96 3.498-26.439 6.574-34.712a16.617 16.617 0 01-5.392-12.271c0-9.202 7.46-16.66 16.66-16.66 7.334 0 13.56 4.737 15.787 11.318zm0 0l-.75-.9.75.9z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="mustache" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M45.453 102.879c-4.808 0-16.139-7.542-26.757-19.681l17.027-8.788 59.729 1.046 13.851 7.742c-10.618 12.139-21.039 19.681-26.757 19.681-2.66 0-5.223-.92-7.964-1.905-3.152-1.133-6.54-2.35-10.582-2.35-3.895 0-7.65 1.28-11.041 2.437-2.791.951-5.335 1.818-7.506 1.818zm44.912-8.146c-2.476 1.656-6.358 2.496-11.537 2.496-8.688 0-12.637-3.92-14.431-5.701a32.233 32.233 0 00-.397-.39c-.119.114-.25.245-.397.39-1.794 1.78-5.743 5.701-14.431 5.701-5.18 0-9.061-.84-11.537-2.496-3.317-2.22-2.052-6.698-1.922-7.159l.01-.036c.077-.34.596-.582 1.178-.555.583.028 1.025.32 1.005.662 0 .02-.005.058-.012.112-.079.597-.408 3.093 2.788 3.137h.036c1.56 0 3.216-1.534 4.817-3.018 2.405-2.227 7.91-5.304 12.414-5.304 3.616 0 4.505 1.548 5.209 2.773.262.457.5.869.842 1.14.343-.271.58-.683.842-1.14.704-1.225 1.593-2.773 5.209-2.773 4.505 0 10.009 3.077 12.414 5.305 1.6 1.483 3.257 3.017 4.817 3.017h.036c3.193-.044 2.867-2.536 2.788-3.142a1.327 1.327 0 01-.013-.116c-.02-.342.423-.63 1.006-.657.578-.028 1.1.22 1.178.559l.01.036c.13.462 1.395 4.94-1.922 7.159z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M18.707 83.188c0-24.98 11.16-45.268 11.16-45.268 11.17-8.379 21.798-8.146 21.798-8.146l.776.931C38.478 34.74 32.039 40.867 32.039 40.867s1.706-.93 4.577-2.25c8.3-3.645 14.894-4.654 17.61-4.886l.173-.03c.391-.066.739-.126 1.145-.126a65.638 65.638 0 0115.67-.155c7.37.854 15.282 3.026 23.35 7.447 0 0-6.128-5.818-19.316-9.851l1.086-1.242s10.628-.233 21.798 8.146c0 0 11.166 20.3 11.166 45.279l-15.521-5.544H38.93l-20.223 5.532z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="mustache-top-hat" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M45.953 104.879c-4.808 0-16.139-7.542-26.757-19.681l17.027-8.788 59.729 1.046 13.851 7.742c-10.618 12.139-21.039 19.681-26.757 19.681-2.66 0-5.223-.92-7.964-1.905-3.152-1.132-6.54-2.349-10.582-2.349-3.895 0-7.65 1.28-11.041 2.436-2.791.951-5.335 1.818-7.506 1.818zm44.912-8.146c-2.476 1.656-6.358 2.496-11.537 2.496-8.688 0-12.637-3.92-14.431-5.701a32.233 32.233 0 00-.397-.39c-.119.114-.25.245-.397.39-1.794 1.78-5.743 5.701-14.431 5.701-5.18 0-9.061-.84-11.537-2.496-3.317-2.22-2.052-6.698-1.922-7.159l.01-.036c.077-.34.596-.582 1.178-.555.583.028 1.025.32 1.005.662 0 .02-.005.058-.012.112-.079.597-.408 3.093 2.788 3.137h.036c1.56 0 3.216-1.534 4.817-3.018 2.405-2.227 7.91-5.304 12.414-5.304 3.616 0 4.505 1.548 5.209 2.773.262.457.5.869.842 1.14.343-.271.58-.683.842-1.14.704-1.225 1.593-2.773 5.209-2.773 4.505 0 10.009 3.077 12.414 5.305 1.6 1.483 3.257 3.017 4.817 3.017h.036c3.193-.044 2.867-2.536 2.788-3.142a1.327 1.327 0 01-.013-.116c-.02-.342.423-.63 1.006-.657.578-.028 1.1.22 1.178.559l.01.036c.13.462 1.395 4.94-1.922 7.159zM44.172 30.15c.043.096.212.378.84.81.874.604 2.279 1.232 4.204 1.793 3.822 1.115 9.226 1.834 15.284 1.834s11.463-.719 15.285-1.834c1.925-.561 3.329-1.189 4.204-1.792.628-.433.797-.715.84-.81-.043-.096-.212-.378-.84-.81-.875-.604-2.28-1.232-4.204-1.794-3.822-1.114-9.227-1.833-15.285-1.833s-11.462.719-15.284 1.833c-1.925.562-3.33 1.19-4.204 1.793-.628.433-.797.715-.84.81zm3.86-6.658c4.305-1.255 10.126-2.002 16.468-2.002 6.342 0 12.164.747 16.468 2.002 2.137.624 4.021 1.407 5.419 2.37 1.332.92 2.677 2.333 2.677 4.288 0 1.956-1.345 3.37-2.677 4.288-1.398.964-3.282 1.747-5.42 2.37-4.303 1.256-10.125 2.003-16.467 2.003-6.342 0-12.163-.747-16.467-2.003-2.138-.623-4.022-1.406-5.42-2.37-1.331-.919-2.677-2.332-2.677-4.288 0-1.955 1.346-3.369 2.678-4.287 1.397-.964 3.281-1.747 5.419-2.37z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M31.723 40.181c.96-1.06 2.974-2.61 6.205-4.127.78.904 1.633 1.583 2.313 2.05 1.925 1.324 4.296 2.263 6.654 2.948 4.8 1.396 11.056 2.172 17.702 2.172 6.646 0 12.902-.776 17.702-2.172 2.359-.685 4.73-1.624 6.654-2.948a12.217 12.217 0 002.305-2.04c2.843 1.373 4.789 2.84 6.034 4.117l-1.03 6.53H33.415l-1.693-6.53z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><ellipse cx="64.5" cy="14.291" rx="16.996" ry="5.689" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M64.5 31.358c10.752 0 19.468-2.547 19.468-5.689H45.032c0 3.142 8.716 5.69 19.468 5.69z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #fff)" d="M47.504 14.133h33.992v11.936H47.504zm18.404 30.873c14.327 0 21.13-4.815 29.455-.61-1.826-1.617-3.62-3.124-5.687-4.503l2.524-2.846c3.22 1.747 5.202 3.284 5.202 3.284s10.533 15.14 12.401 44.856l-1.889 1.26-12.551-6.27-60.973-.99-11.814 8.844-3.38-2.844C21.01 55.47 31.543 40.33 31.543 40.33s1.931-1.534 5.177-3.284l2.319 3.05c-1.986 1.343-3.762 2.797-5.457 4.3 8.324-4.206 18 .609 32.327.609z" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="ninja-band" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M103.667 51.163c-9.764-3.51-23.615-5.787-39.179-5.787-15.564 0-29.415 2.277-39.18 5.787-.468.169-.925.34-1.37.511.468-1.732 2.166-6.794 5.217-13.181 10.095-2.622 22.301-4.117 35.333-4.117 13.122 0 25.408 1.516 35.543 4.172 3.053 6.438 4.626 11.44 5.031 13.136a59.29 59.29 0 00-1.395-.521z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M64.5 29.595l-8.237-7.431-6.708 7.431-7.648-4.967-3.891 6.337-10.063-3.118.928 1.748 2.32 5.308c9.786-2.265 21.212-3.527 33.287-3.527 12.084 0 23.517 1.263 33.31 3.531l2.321-5.312.928-1.748-10.063 3.118-3.89-6.337-7.649 4.967-6.709-7.431-8.236 7.431zm-40.235 25.17l.756-.293c.421-.163.856-.325 1.303-.486 9.36-3.365 22.852-5.61 38.164-5.61 15.311 0 28.804 2.245 38.164 5.61.455.164.897.329 1.326.495l.761.295c2.56 7.97 4.941 18.476 4.941 29.991 0 0-6.576 11.218-23.673 11.76 0 0-2.785-3.328-5.106-6.267 10.134-2.863 14.002-9.206 14.002-9.206-3.171 2.088-6.189 3.558-8.896 4.564-3.868 1.625-7.582 2.708-11.218 3.327-7.427 1.392-14.234 1.005-20.037-.078-4.41-.85-8.2-2.089-11.372-3.326-1.78-.697-3.713-1.548-5.647-2.63a3.12 3.12 0 00-.348-.194 3.13 3.13 0 01-.349-.194 1.07 1.07 0 01-.309-.231c-1.392-.774-2.166-1.316-2.166-1.316s3.713 6.19 13.538 9.129a485.207 485.207 0 01-5.183 6.421c-17.097-.541-23.595-11.759-23.595-11.759 0-11.52 2.382-22.031 4.944-30.002zm-2.698-1.411l-.159.493c-2.165 6.737-4.218 15.282-4.873 24.755L9.92 72.916l8.624-8.867-10.747 3.845-3.079-10.7 16.849-3.84z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="ribbon" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><ellipse cx="89.01" cy="37.108" rx="8.077" ry="6.953" transform="rotate(15 89.01 37.108)" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M71.121 24.118a2 2 0 013.26-.977l10.677 9.49a2 2 0 01.603 2.012l-.759 2.83a2 2 0 01-1.664 1.465l-13.714 1.85a2 2 0 01-2.2-2.5l3.797-14.17zm39.875 10.685c.385-1.437-.878-2.777-2.335-2.477l-13.99 2.88a2 2 0 00-1.529 1.442l-.758 2.83a2 2 0 00.71 2.1l10.951 8.46a2 2 0 003.155-1.066l3.796-14.17z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M64.427 37.511c-.924 3.449 1.96 6.727 5.498 6.25l10.058-1.357c1.542 2.058 3.848 3.62 6.45 4.317 2.604.698 5.382.498 7.746-.513l8.032 6.204a5.03 5.03 0 001.374.756c2.793 8.167 5.595 19.472 5.595 31.964 0 0-6.576 11.217-23.673 11.759 0 0-2.785-3.327-5.106-6.267 10.134-2.862 14.002-9.206 14.002-9.206-3.171 2.089-6.189 3.559-8.896 4.564-3.868 1.625-7.582 2.708-11.218 3.327-7.427 1.393-14.234 1.006-20.037-.077-4.41-.851-8.2-2.09-11.372-3.327-1.78-.696-3.713-1.547-5.647-2.63-.116-.078-.232-.136-.348-.194a3.286 3.286 0 01-.349-.193 1.067 1.067 0 01-.309-.232c-1.392-.774-2.166-1.315-2.166-1.315s3.713 6.189 13.538 9.129a494.172 494.172 0 01-5.183 6.42c-17.097-.541-23.595-11.758-23.595-11.758 0-24.911 11.14-45.103 11.14-45.103C41.1 31.674 51.7 31.906 51.7 31.906l.773.929c-13.925 4.023-20.346 10.134-20.346 10.134s1.702-.928 4.564-2.243c8.278-3.636 14.854-4.642 17.561-4.874l.174-.03c.39-.066.736-.125 1.142-.125a65.398 65.398 0 019.49-.54l-.631 2.354z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="sad" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M78.343 77.48c-4.251 0-7.698-3.946-7.698-8.815 0-2.094.638-4.017 1.702-5.53 2.267 1.416 8.179 4.502 13.695 5.53 0 4.869-3.447 8.816-7.699 8.816zm-28.686 0c4.251 0 7.698-3.946 7.698-8.815 0-2.094-.637-4.017-1.702-5.53-2.267 1.416-8.179 4.502-13.694 5.53 0 4.869 3.446 8.816 7.698 8.816z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="samurai" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.982 59.886c-3.31 14.408-3.11 15.044-3.11 24.15.434 1.75 4.47 5.507 6.159 7.424.303.344.244.636-.433 2.547-7.695-1.475-11.258-4.219-14.019-5.909l11.403-28.212zm84.999 0c3.31 14.408 3.197 15.044 3.197 24.15-.434 1.75-4.471 5.507-6.159 7.424-.304.344-.244.636.432 2.547 7.696-1.475 11.258-4.219 14.019-5.909l-11.489-28.212zm-41.992-16.16a8.216 8.216 0 01-.082.01c-4.833-.01-13.863-.482-17.232-7.928-3.898-8.614-10.653-16.207-13.4-17.376 0 0 3.353-2.172 7.807-2.7 4.455-.529 8.28.492 8.28.492.019.225.04.465.06.719.415 4.913 1.264 14.977 6.162 17.68 2.276 1.257 4.207 1.232 6.913 1.197.472-.006.967-.013 1.492-.013v7.92zm0 0l.081.01c4.834-.01 13.864-.482 17.233-7.928 3.897-8.614 10.653-16.207 13.4-17.376 0 0-3.353-2.172-7.808-2.7-4.454-.529-8.279.492-8.279.492-.02.225-.04.465-.06.719-.415 4.913-1.264 14.977-6.162 17.68-2.277 1.257-4.207 1.232-6.913 1.197-.472-.006-.967-.013-1.492-.013v7.92z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M30.522 43.406s7.128-1.633 16.907-2.762c2.109 2.374 4.804 3.798 7.441 4.642 3.726 1.192 7.563 1.306 10.031 1.312h.176c2.468-.005 6.305-.12 10.03-1.312 2.616-.837 5.29-2.244 7.39-4.584 9.495 1.126 15.981 2.704 15.981 2.704 2.934 6.339 9.112 21.839 9.112 39.956 0 0-6.271 10.699-22.578 11.215 0 0-2.656-3.173-4.87-5.976 9.666-2.73 13.356-8.78 13.356-8.78-3.026 1.991-5.903 3.393-8.486 4.353-3.689 1.549-7.23 2.582-10.698 3.172-7.084 1.328-13.577.96-19.11-.074-4.206-.811-7.822-1.992-10.847-3.172-1.697-.664-3.541-1.476-5.386-2.509a2.81 2.81 0 00-.332-.184c-.11-.056-.222-.111-.332-.185a1.019 1.019 0 01-.295-.221c-1.328-.738-2.066-1.255-2.066-1.255s3.541 5.903 12.912 8.707c-2.214 2.804-4.944 6.124-4.944 6.124-16.306-.516-22.504-11.215-22.504-11.215 0-18.117 6.178-33.617 9.112-39.956zM75.27 26.34c-3.786-.416-7.404-.523-10.281-.445-2.877-.078-6.495.03-10.281.444.384 1.422.85 2.679 1.409 3.687.617 1.116 1.254 1.764 1.85 2.093 1.534.846 2.737.876 5.493.84h.007c.468-.006.979-.013 1.522-.013s1.054.007 1.521.013h.008c2.756.036 3.96.006 5.493-.84.596-.33 1.233-.977 1.85-2.093.558-1.008 1.025-2.265 1.41-3.687zm-34.408 3.221c-5.422 2.241-9.384 5.71-9.384 10.937 0 0 5.745-1.369 14.112-2.466a15.11 15.11 0 01-.522-1.045c-1.186-2.622-2.663-5.158-4.206-7.426zm43.526 8.471c8.366 1.097 14.112 2.466 14.112 2.466 0-5.227-3.963-8.696-9.384-10.937-1.543 2.268-3.02 4.804-4.206 7.426-.164.362-.338.71-.522 1.045z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="scared" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M50.526 60.273c-4.418 0-7.905 3.876-7.905 8.604s3.565 8.604 7.905 8.604c4.419 0 7.906-3.876 7.906-8.604.078-4.728-3.487-8.604-7.906-8.604z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M45.275 56.73c-4.524 1.862-7.683 6.619-7.683 12.147 0 5.536 3.238 10.297 7.749 12.155-2.944-3.077-4.786-7.396-4.786-12.155 0-4.755 1.799-9.071 4.72-12.148z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M78.819 60.273c4.418 0 7.906 3.876 7.906 8.604s-3.566 8.604-7.906 8.604c-4.418 0-7.906-3.876-7.906-8.604-.078-4.728 3.488-8.604 7.906-8.604z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M84.07 56.73c4.524 1.862 7.683 6.619 7.683 12.147 0 5.536-3.238 10.297-7.749 12.155 2.944-3.077 4.786-7.396 4.786-12.155 0-4.755-1.799-9.071-4.72-12.148z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="scarred-laugh" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M56.068 35.299a65.302 65.302 0 018.432-.549c2.96.002 5.793.203 8.432.549.406 0 .752.059 1.142.125l.078.014.096.016c2.707.232 9.283 1.237 17.56 4.873 2.863 1.316 4.565 2.244 4.565 2.244s-6.42-6.112-20.346-10.134l.773-.929s10.6-.232 21.74 8.123c0 0 11.139 20.192 11.139 45.102 0 0-6.498 11.218-23.595 11.76 0 0-2.862-3.482-5.183-6.422 4.519-1.173 8.077-2.76 10.873-4.578l4.11 3.932-1.961-5.49a21.736 21.736 0 003.862-4.013l4.444 1.709-3.154-3.7a19.785 19.785 0 001.724-4.038l3.684.09-3.172-2.176c.222-1.164.33-2.264.366-3.262l2.895-.633-2.902-1.163c-.091-2.053-.439-3.357-.439-3.357s.303 1.264.1 3.361l-2.945.645 2.686 1.076a19.03 19.03 0 01-.885 3.012l-3.704-.09 2.875 1.972a24.88 24.88 0 01-2.065 3.408l-4.21-1.618 2.86 3.355a34.88 34.88 0 01-3.385 3.49l-3.92-3.75 1.81 5.069a47.09 47.09 0 01-4.828 2.185c-3.172 1.238-6.963 2.476-11.372 3.327-2.999.56-6.266.933-9.748.971a56.488 56.488 0 01-9.748-.971c-4.41-.851-8.2-2.09-11.372-3.327a47.07 47.07 0 01-4.829-2.185l1.811-5.069-3.92 3.75a34.88 34.88 0 01-3.386-3.49l2.86-3.356-4.21 1.619a24.88 24.88 0 01-2.064-3.408l2.875-1.971-3.704.09a18.989 18.989 0 01-.885-3.013l2.686-1.076-2.945-.645c-.203-2.097.1-3.36.1-3.36s-.348 1.303-.44 3.356l-2.9 1.163 2.894.633c.036.998.144 2.098.366 3.262l-3.172 2.175 3.684-.089a19.769 19.769 0 001.724 4.038l-3.154 3.7 4.444-1.709a21.736 21.736 0 003.862 4.013l-1.962 5.49 4.111-3.932c2.796 1.819 6.354 3.405 10.873 4.578a485.207 485.207 0 01-5.183 6.421c-17.097-.541-23.595-11.759-23.595-11.759 0-24.91 11.14-45.102 11.14-45.102C41.6 31.276 52.2 31.508 52.2 31.508l.773.929C39.048 36.459 32.627 42.57 32.627 42.57s1.702-.928 4.564-2.243c8.278-3.637 14.854-4.642 17.561-4.874l.036-.006.138-.024c.39-.066.736-.125 1.142-.125z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="sceptical" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M72.204 58.875c-1.418 1.145-2.333 2.518-2.726 3.38l-2.339-.944c.534-1.174 1.673-2.856 3.41-4.257 1.752-1.415 4.162-2.58 7.193-2.58 3.026 0 5.49 1.16 7.312 2.561 1.808 1.39 3.042 3.06 3.643 4.224l-2.288 1.05c-.451-.874-1.461-2.26-2.964-3.415-1.49-1.146-3.405-2.022-5.703-2.022-2.293 0-4.136.872-5.538 2.003zM60.56 63.314c-8.957 3.476-17.086 1.478-20.174-.05l1.216-2.46c2.5 1.238 9.825 3.11 17.964-.048l.993 2.558z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M41.62 68.877c0 4.728 3.566 8.604 7.907 8.604 4.418 0 7.905-3.876 7.905-8.604.037-2.227-.735-4.265-2.024-5.798-1.446-1.721-3.181.798-5.518.798-2.495 0-5.057-2.367-6.498-.44-1.11 1.486-1.771 3.382-1.771 5.44zm36.197-8.604c-4.417 0-7.905 3.876-7.905 8.604s3.565 8.604 7.905 8.604c4.419 0 7.906-3.876 7.906-8.604s-3.487-8.603-7.906-8.603z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="single-eye" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M64.5 80.67c6.612 0 11.972-6.08 11.972-13.583 0-7.502-5.36-13.584-11.972-13.584-6.612 0-11.972 6.082-11.972 13.584s5.36 13.584 11.972 13.584zm-.23-13.813c2.925 0 5.296-2.68 5.296-5.986 0-3.306-2.371-5.986-5.296-5.986-2.924 0-5.295 2.68-5.295 5.986 0 3.306 2.37 5.986 5.295 5.986z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="spider-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M73.625 60.273c-4.418 0-7.906 3.876-7.906 8.604s3.565 8.604 7.906 8.604c4.418 0 7.906-3.876 7.906-8.604s-3.488-8.604-7.906-8.604zm-19.251 0c-4.418 0-7.906 3.876-7.906 8.604s3.566 8.604 7.906 8.604c4.418 0 7.906-3.876 7.906-8.604.078-4.728-3.488-8.604-7.906-8.604zm-17.061.731c-3.195 0-5.717 2.803-5.717 6.222 0 3.42 2.578 6.222 5.717 6.222 3.195 0 5.718-2.802 5.718-6.222.056-3.419-2.523-6.222-5.718-6.222zm53.372 0c-3.195 0-5.717 2.803-5.717 6.222 0 3.42 2.578 6.222 5.717 6.222 3.195 0 5.718-2.802 5.718-6.222.056-3.419-2.523-6.222-5.718-6.222z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="squinting" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M85.925 62.624l1.11 4.146-14.183 3.8-1.963-3.914 15.036-4.032z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M85.925 75.13l1.11-4.145-15.593-4.179-1.021 4.17 15.504 4.154z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M79.17 68.877l-8.29-2.221-1.522.407-.486 1.814.486 1.814 1.521.408 8.291-2.222z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M79.17 68.877l-8.29-2.221-1.522.407-.486 1.814.486 1.814 1.521.408 8.291-2.222z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M42.075 62.624l-1.11 4.146 14.183 3.8 1.963-3.914-15.036-4.032z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M42.075 75.13l-1.11-4.145 15.592-4.179 1.022 4.17-15.504 4.154z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M48.83 68.877l8.29-2.221 1.522.407.486 1.814-.486 1.814-1.522.408-8.29-2.222z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M48.83 68.877l8.29-2.221 1.522.407.486 1.814-.486 1.814-1.522.408-8.29-2.222z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="star-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M48.99 59.39a1 1 0 011.73 0l2.504 4.313a1 1 0 00.655.476l4.877 1.049a1 1 0 01.535 1.645l-3.33 3.715a1 1 0 00-.25.77l.51 4.962a1 1 0 01-1.4 1.017l-4.561-2.019a1 1 0 00-.81 0l-4.562 2.019a1 1 0 01-1.4-1.017l.51-4.962a1 1 0 00-.25-.77l-3.329-3.715a1 1 0 01.535-1.645l4.877-1.05a1 1 0 00.654-.475l2.505-4.314zm28.29 0a1 1 0 011.73 0l2.504 4.313a1 1 0 00.655.476l4.877 1.049a1 1 0 01.534 1.645l-3.329 3.715a1 1 0 00-.25.77l.51 4.962a1 1 0 01-1.4 1.017l-4.562-2.019a1 1 0 00-.809 0l-4.562 2.019a1 1 0 01-1.399-1.017l.51-4.962a1 1 0 00-.25-.77l-3.33-3.715a1 1 0 01.535-1.645l4.877-1.05a1 1 0 00.654-.475l2.505-4.314z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="sunglasses" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M63.43 64.75c-.834.073-1.525.325-1.845.491l-1.488-2.87c.687-.356 1.787-.73 3.052-.84 1.279-.112 2.828.04 4.304.864l-1.577 2.822c-.766-.428-1.625-.538-2.446-.466z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42.493 58.553a5 5 0 00-5.215 4.996v6.962a5 5 0 005.849 4.927l15.847-2.73a4 4 0 003.32-3.942V62.28a3 3 0 00-2.87-2.997l-16.931-.73zm9.074 2.304a1.616 1.616 0 00-.167 3.228l6.923.357a1.616 1.616 0 10.166-3.228l-6.922-.357zm33.94-2.304a5 5 0 015.216 4.996v6.962a5 5 0 01-5.85 4.927l-15.847-2.73a4 4 0 01-3.32-3.942V62.28a3 3 0 012.87-2.997l16.931-.73zm-6.91 2.143a1.616 1.616 0 10.154 3.229l6.924-.331a1.616 1.616 0 00-.154-3.229l-6.924.331z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="swirly-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M92.392 69.376C92.21 63.6 86.624 58.5 80.885 58.682h-.047c-5.01 0-10.514 3.586-10.514 10.21 0 5.421 4.041 8.362 8.194 8.232 4.2-.146 7.31-3.137 7.182-7.174-.08-2.511-2.39-4.679-4.815-4.602-1.294.04-2.246.497-2.865 1.159-.62.662-1.02 1.652-.978 2.974.022.669.753 1.38 1.654 1.38.169 0 .45-.084.672-.277.184-.16.31-.377.299-.716a1.5 1.5 0 012.998-.095c.086 2.735-2.291 4.088-3.969 4.088-2.13 0-4.569-1.633-4.652-4.285-.063-1.998.548-3.796 1.785-5.118 1.237-1.323 2.984-2.046 4.962-2.109 4.118-.13 7.777 3.376 7.908 7.506.186 5.923-4.468 10.074-10.08 10.267h-.004c-5.662.179-11.291-3.935-11.291-11.23 0-8.692 7.286-13.198 13.49-13.21 7.34-.217 14.34 6.129 14.577 13.6a1.5 1.5 0 01-2.999.094zm-55.784 0c.183-5.776 5.768-10.875 11.507-10.694h.047c5.01 0 10.514 3.586 10.514 10.21 0 5.421-4.041 8.362-8.194 8.232-4.2-.146-7.31-3.137-7.182-7.174.08-2.511 2.39-4.679 4.815-4.602 1.294.04 2.246.497 2.865 1.159.62.662 1.02 1.652.978 2.974-.021.669-.753 1.38-1.654 1.38a1.12 1.12 0 01-.671-.277c-.184-.16-.31-.377-.3-.716a1.5 1.5 0 10-2.998-.095c-.086 2.735 2.291 4.088 3.97 4.088 2.13 0 4.568-1.633 4.651-4.285.063-1.998-.548-3.796-1.785-5.118-1.236-1.323-2.984-2.046-4.962-2.109-4.118-.13-7.777 3.376-7.907 7.506-.187 5.923 4.467 10.074 10.08 10.267h.004c5.662.179 11.29-3.935 11.29-11.23 0-8.692-7.286-13.198-13.49-13.21-7.34-.217-14.34 6.129-14.576 13.6a1.5 1.5 0 102.998.094z" fill="var(--svg-custom-color, #010202)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="thick" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M85.507 96.492s-2.785-3.326-5.106-6.266l-1.686-2.291a47.304 47.304 0 01-4.426.976c-7.427 1.392-14.234 1.006-20.037-.077a61.775 61.775 0 01-4.79-1.126L47.6 90.072a485.207 485.207 0 01-5.183 6.421c-17.097-.541-23.595-11.759-23.595-11.759 0-24.91 11.14-45.102 11.14-45.102C41.1 31.276 51.7 31.508 51.7 31.508l.773.929 2.367 2.92c.236-.034.47-.058.728-.058a65.458 65.458 0 0115.627-.155c.587.068 1.178.145 1.772.23l2.25-2.628 1.084-1.238s10.598-.232 21.739 8.123c0 0 11.14 20.192 11.14 45.102 0 0-6.576 11.218-23.673 11.76z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="thick-upside-down" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M42.493 31.508s2.785 3.326 5.106 6.266l1.686 2.291a47.305 47.305 0 014.426-.976c7.427-1.392 14.235-1.006 20.037.077 1.687.326 3.284.708 4.79 1.126l1.863-2.363c2.32-2.94 5.183-6.421 5.183-6.421 17.097.541 23.596 11.759 23.596 11.759 0 24.91-11.14 45.102-11.14 45.102-11.14 8.355-21.74 8.123-21.74 8.123l-.773-.928-2.367-2.921a4.99 4.99 0 01-.727.058 65.457 65.457 0 01-15.628.155 65.696 65.696 0 01-1.771-.23l-2.251 2.628-1.083 1.238s-10.6.232-21.74-8.123c0 0-11.14-20.192-11.14-45.102 0 0 6.576-11.218 23.673-11.76z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="third-eye" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M49.855 62.593c-4.418 0-7.906 3.876-7.906 8.604s3.565 8.603 7.906 8.603c4.418 0 7.906-3.875 7.906-8.603.077-4.728-3.488-8.604-7.907-8.604zm28.29 0c-4.417 0-7.905 3.876-7.905 8.604s3.565 8.603 7.906 8.603c4.418 0 7.906-3.875 7.906-8.603s-3.489-8.604-7.907-8.604zM64 50.383c-4.419 0-7.907 3.875-7.907 8.603S59.66 67.59 64 67.59c4.419 0 7.906-3.876 7.906-8.604.078-4.728-3.487-8.603-7.906-8.603z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="top-hat" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M65.408 47.604c14.327 0 21.13-4.815 29.455-.61-1.826-1.618-3.62-3.124-5.687-4.503l2.524-2.846c3.22 1.747 5.202 3.284 5.202 3.284s10.533 15.139 12.401 44.856l-1.889 1.26-12.551-6.27-60.973-.99-11.814 8.844-3.38-2.844c1.813-29.717 12.346-44.856 12.346-44.856s1.931-1.534 5.177-3.284l2.319 3.05c-1.986 1.343-3.762 2.797-5.457 4.3 8.324-4.206 18 .609 32.327.609z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M43.672 33.457c.043.096.212.378.84.81.874.604 2.279 1.232 4.204 1.793 3.822 1.115 9.226 1.834 15.284 1.834s11.463-.719 15.285-1.834c1.925-.561 3.329-1.189 4.204-1.792.628-.433.797-.715.84-.81-.043-.096-.212-.378-.84-.81-.875-.604-2.28-1.232-4.204-1.794-3.822-1.114-9.227-1.833-15.285-1.833s-11.462.719-15.284 1.834c-1.925.56-3.33 1.189-4.204 1.792-.628.433-.797.715-.84.81zm3.86-6.658c4.305-1.255 10.126-2.002 16.468-2.002 6.342 0 12.164.747 16.468 2.002 2.137.624 4.021 1.407 5.419 2.37 1.332.92 2.677 2.333 2.677 4.288 0 1.956-1.345 3.37-2.677 4.288-1.398.964-3.282 1.747-5.42 2.37-4.303 1.256-10.125 2.003-16.467 2.003-6.342 0-12.163-.747-16.467-2.003-2.138-.623-4.022-1.406-5.42-2.37-1.331-.918-2.677-2.332-2.677-4.288 0-1.955 1.346-3.369 2.678-4.287 1.397-.964 3.281-1.747 5.419-2.37z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M31.223 42.857c.957-1.06 2.966-2.611 6.186-4.127a12.19 12.19 0 002.307 2.05c1.92 1.324 4.283 2.262 6.634 2.948C51.136 45.124 57.374 45.9 64 45.9c6.626 0 12.864-.776 17.65-2.172 2.351-.686 4.715-1.624 6.634-2.948a12.195 12.195 0 002.299-2.041c2.834 1.373 4.774 2.84 6.015 4.118l-1.027 6.53H32.91l-1.688-6.53z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><ellipse cx="64" cy="17.598" rx="16.996" ry="5.689" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M64 34.666c10.752 0 19.468-2.548 19.468-5.69H44.532c0 3.142 8.716 5.69 19.468 5.69z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #fff)" d="M47.004 17.44h33.992v11.936H47.004zm38.556 82.1c17.144-.542 23.737-11.76 23.737-11.76L96.995 79.8l-65.109-1.489-13.19 9.47s6.516 11.217 23.66 11.759c0 0 2.87-3.481 5.196-6.421-9.85-2.94-13.574-9.129-13.574-9.129s.776.542 2.172 1.315c.077.078.155.155.31.232.116.078.233.136.35.194.115.058.232.116.348.193 1.94 1.083 3.878 1.934 5.663 2.63 3.18 1.238 6.98 2.476 11.402 3.327 5.818 1.083 12.644 1.47 20.09.077 3.646-.618 7.37-1.701 11.248-3.326 2.715-1.006 5.74-2.476 8.92-4.565 0 0-3.878 6.344-14.04 9.207 2.327 2.94 5.12 6.266 5.12 6.266z" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="tounge-shape" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.82 84.7s6.505 7.526 23.596 11.759c2.283.854 5.836 1.823 10.234 2.504a11.634 11.634 0 01-.261-2.458v-5.267c-2.903-.719-5.257-1.616-6.866-2.431l1.355-2.676c5.126 2.595 19.348 6.344 34.192-.04l1.186 2.756a45.982 45.982 0 01-6.645 2.275v5.383c0 .842-.09 1.663-.26 2.454a62.856 62.856 0 0010.156-2.5c18.175-4.755 23.673-11.76 23.673-11.76 0-24.91-11.14-45.101-11.14-45.101-11.14-8.356-21.74-8.123-21.74-8.123l-1.082 1.237c13.151 4.023 19.263 9.825 19.263 9.825-8.046-4.41-15.937-6.575-23.286-7.426a65.458 65.458 0 00-15.627.154c-.405 0-.752.06-1.142.126l-.174.029c-2.707.232-9.283 1.238-17.56 4.874-2.863 1.315-4.565 2.243-4.565 2.243s6.42-6.111 20.346-10.134l-.773-.928s-10.6-.233-21.74 8.123c0 0-11.14 20.191-11.14 45.102zm43.68 8.084v4.599a1.5 1.5 0 103 0v-4.61a47.143 47.143 0 007.111-.79v4.522a8.612 8.612 0 01-17.222 0v-4.442a48.3 48.3 0 007.111.72z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="triangle-hair" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M101.434 46.94l-8.407-16.7-9.077 8.26-10.245-11.26L64.03 38.5 53.35 27.24 43.003 38.5l-8.005-8.26-7.725 15.309a5.576 5.576 0 00-.18.16c-3.302 7.816-8.272 24.35-8.272 40.99 0 0 6.498 11.218 23.595 11.76 0 0 2.862-3.481 5.183-6.421-9.825-2.94-13.538-9.129-13.538-9.129s.773.541 2.166 1.315c.077.078.155.155.31.232.116.078.232.136.348.194.116.058.232.116.348.193 1.934 1.083 3.868 1.934 5.647 2.63 3.172 1.238 6.963 2.476 11.372 3.327 5.803 1.083 12.61 1.47 20.037.077 3.636-.619 7.35-1.702 11.218-3.326 2.707-1.006 5.725-2.476 8.896-4.565 0 0-3.868 6.344-14.002 9.206 2.32 2.94 5.106 6.267 5.106 6.267 17.097-.542 23.673-11.76 23.673-11.76 0-15.801-4.483-31.704-7.761-39.758h.015z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 129" id="vampire" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M86.007 96.526S83.222 93.2 80.9 90.26c2.921-.825 5.322-1.94 7.26-3.108l3.538 6.87 2.943-12.584c.177-.246.261-.384.261-.384-3.171 2.088-6.189 3.558-8.896 4.564-3.868 1.625-7.582 2.708-11.218 3.327-7.427 1.392-14.234 1.005-20.037-.078-4.41-.85-8.2-2.089-11.372-3.326-1.78-.697-3.713-1.548-5.647-2.63a3.12 3.12 0 00-.348-.194 3.286 3.286 0 01-.349-.193 1.07 1.07 0 01-.309-.233c-1.392-.773-2.166-1.315-2.166-1.315s.058.097.178.27l-.003-.001 2.988 12.777 3.56-6.911c1.836 1.114 4.09 2.179 6.815 2.994a485.207 485.207 0 01-5.183 6.421C25.818 95.985 19.32 84.767 19.32 84.767c0-24.91 11.14-45.102 11.14-45.102C41.6 31.31 52.2 31.542 52.2 31.542l.773.928c-13.925 4.023-20.346 10.135-20.346 10.135s1.702-.929 4.564-2.244c8.278-3.636 14.854-4.642 17.561-4.874l.174-.029c.39-.066.736-.125 1.142-.125a65.458 65.458 0 0115.627-.155c7.35.85 15.24 3.017 23.286 7.427 0 0-6.112-5.802-19.263-9.825l1.083-1.238s10.598-.232 21.739 8.123c0 0 11.14 20.191 11.14 45.102 0 0-6.576 11.218-23.673 11.76z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 129" id="vampire-ears" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M86.007 96.526S83.222 93.2 80.9 90.26c2.921-.825 5.322-1.94 7.26-3.108l3.538 6.87 2.943-12.584c.177-.246.261-.384.261-.384-3.171 2.088-6.189 3.558-8.896 4.564-3.868 1.625-7.582 2.708-11.218 3.327-7.427 1.392-14.234 1.005-20.037-.078-4.41-.85-8.2-2.089-11.372-3.326-1.78-.697-3.713-1.548-5.647-2.63a3.12 3.12 0 00-.348-.194 3.286 3.286 0 01-.349-.193 1.07 1.07 0 01-.309-.233c-1.392-.773-2.166-1.315-2.166-1.315s.058.097.178.27l-.003-.001 2.988 12.777 3.56-6.911c1.836 1.114 4.09 2.179 6.815 2.994a485.207 485.207 0 01-5.183 6.421C25.818 95.985 19.32 84.767 19.32 84.767c0-24.91 11.14-45.102 11.14-45.102C41.6 31.31 52.2 31.542 52.2 31.542l.773.928c-13.925 4.023-20.346 10.135-20.346 10.135s1.702-.929 4.564-2.244c8.278-3.636 14.854-4.642 17.561-4.874l.174-.029c.39-.066.736-.125 1.142-.125a65.458 65.458 0 0115.627-.155c7.35.85 15.24 3.017 23.286 7.427 0 0-6.112-5.802-19.263-9.825l1.083-1.238s10.598-.232 21.739 8.123c0 0 11.14 20.191 11.14 45.102 0 0-6.576 11.218-23.673 11.76zm-65.543-38.7c-1.853-5.55-4.48-12.125-7.496-16.625-4.205-6.277-2.124 5.361-.613 13.818.63 3.516 1.16 6.482 1.099 7.383-.547 8.172 1.02 11.096 3.923 10.349a106.359 106.359 0 013.087-14.925zm-4.16 6.015c-.518.444-.896.134-.789-1.748.04-.698.077-1.346.077-1.786 0-1.121-.216-2.766-.45-4.55-.052-.399-.105-.803-.156-1.211.381-2.01 2.51 2.759 2.612 3.977.101 1.218-.585 4.71-1.295 5.318zm92.232-6.015c1.853-5.55 4.48-12.125 7.496-16.625 4.205-6.277 2.125 5.361.612 13.818-.628 3.516-1.158 6.482-1.098 7.383.547 8.172-1.021 11.096-3.923 10.349a106.361 106.361 0 00-3.087-14.925zm4.161 6.015c.517.444.895.134.788-1.748a36.463 36.463 0 01-.077-1.786c0-1.121.216-2.766.449-4.55.053-.399.106-.803.157-1.211-.381-2.01-2.51 2.759-2.612 3.977-.101 1.218.585 4.71 1.295 5.318z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="wink" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M86.06 62.624l1.111 4.146-14.183 3.8-1.963-3.914 15.035-4.032z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M86.06 75.13l1.111-4.145-15.593-4.179-1.022 4.17L86.06 75.13z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M79.306 68.877l-8.29-2.221-1.522.407-.486 1.814.486 1.814 1.521.408 8.291-2.222z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M79.306 68.877l-8.29-2.221-1.522.407-.486 1.814.486 1.814 1.521.408 8.291-2.222z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M49.734 60.273c-4.418 0-7.905 3.876-7.905 8.604s3.565 8.604 7.905 8.604c4.419 0 7.907-3.876 7.907-8.604.077-4.728-3.488-8.603-7.907-8.603z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol></svg>'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M55.5676 33.2653C58.2073 32.9191 61.0407 32.7181 64 32.7166C66.9593 32.7181 69.7927 32.9191 72.4324 33.2653C72.8375 33.2653 73.1839 33.3242 73.574 33.3907L73.5742 33.3907C73.6309 33.4004 73.6886 33.4102 73.7475 33.42C76.4552 33.6521 83.031 34.6578 91.3088 38.2938C94.1712 39.609 95.8732 40.5373 95.8732 40.5373C95.8732 40.5373 89.4521 34.4257 75.5269 30.4029L76.3005 29.4745C76.3005 29.4745 86.8991 29.2424 98.0393 37.5976C98.0393 37.5976 114.93 62.46 109.179 82.6997C109.179 82.6997 105.619 106.09 85.5467 86.7616C76.6313 89.9596 70.4068 91.4887 64 91.3861C57.5932 91.4887 51.3687 89.9596 42.4533 86.7616C22.3811 106.09 18.8206 82.6997 18.8206 82.6997C13.0702 62.46 29.9607 37.5976 29.9607 37.5976C41.1009 29.2424 51.6995 29.4745 51.6995 29.4745L52.4731 30.4029C38.5479 34.4257 32.1268 40.5373 32.1268 40.5373C32.1268 40.5373 33.8288 39.609 36.6912 38.2938C44.969 34.6578 51.5448 33.6521 54.2525 33.42C54.3114 33.4102 54.3691 33.4004 54.4258 33.3907L54.426 33.3907C54.8161 33.3242 55.1625 33.2653 55.5676 33.2653Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M37.7415 70.0985C43.6711 71.7627 48.3214 75.0089 52.1422 79.3979C56.9042 77.8044 60.3798 72.8061 60.3798 66.8868C60.3798 59.6839 55.2334 53.8447 48.8851 53.8447C42.5367 53.8447 37.3904 59.6839 37.3904 66.8868C37.3904 67.9951 37.5122 69.0711 37.7415 70.0985ZM53.5232 71.6268C55.8389 71.6268 57.7161 69.5046 57.7161 66.8869C57.7161 64.2691 55.8389 62.147 53.5232 62.147C51.2074 62.147 49.3302 64.2691 49.3302 66.8869C49.3302 69.5046 51.2074 71.6268 53.5232 71.6268Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M90.2587 70.0985C84.3292 71.7627 79.6788 75.0089 75.8581 79.3979C71.096 77.8044 67.6205 72.8061 67.6205 66.8868C67.6205 59.6839 72.7668 53.8447 79.1152 53.8447C85.4635 53.8447 90.6099 59.6839 90.6099 66.8868C90.6099 67.9951 90.488 69.0711 90.2587 70.0985ZM74.4771 71.6268C72.1614 71.6268 70.2841 69.5046 70.2841 66.8869C70.2841 64.2691 72.1614 62.147 74.4771 62.147C76.7928 62.147 78.6701 64.2691 78.6701 66.8869C78.6701 69.5046 76.7928 71.6268 74.4771 71.6268Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M39 66C39 59.4054 43.8525 54 49.9991 54C56.1457 54 61.1061 59.4054 60.9983 66C60.9983 69.0645 59.9504 71.8722 58.2117 74H41.8239C40.0712 71.8722 39 69.0645 39 66Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M70.2395 68.877C70.2395 64.1489 73.7274 60.2734 78.1454 60.2734C82.5635 60.2734 86.0514 64.1489 86.0514 68.877C86.0514 70.7913 85.4796 72.5658 84.5059 74H71.8077C70.824 72.5658 70.2395 70.7913 70.2395 68.877Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M63.5263 31.5225C64.3511 30.6977 65.6883 30.6977 66.5131 31.5225L70.8097 35.8191C71.6345 36.6439 71.6345 37.9811 70.8097 38.8059L66.5131 43.1025C65.6883 43.9273 64.3511 43.9273 63.5263 43.1025L59.2297 38.8059C58.4049 37.9811 58.4049 36.6439 59.2297 35.8191C59.2297 35.8191 62.7015 32.3472 63.5263 31.5225Z" fill="white"/>\n<path d="M27.1051 38.7376L27.1035 46.7866C31.5824 43.519 42.554 37.658 55.6301 35.9164C55.864 35.0603 56.3171 34.2515 56.9896 33.579L61.2863 29.2823C62.3172 28.2514 63.6685 27.7359 65.0197 27.7359C65.0285 27.7358 65.0373 27.736 65.0462 27.736L65.0707 27.7362C66.4219 27.7362 67.7732 28.2514 68.8041 29.2824L73.1008 33.579C73.7733 34.2515 74.2264 35.0603 74.4603 35.9165C87.5364 37.658 98.508 43.519 102.987 46.7866L102.985 38.7376L74.4603 29.2824L65.0197 25.0337L55.6301 29.2824L27.1051 38.7376Z" fill="white"/>\n<path d="M33.5808 47.2466C40.1043 43.9512 46.5758 40.8106 55.9657 39.6061C56.2167 40.1265 56.5579 40.6142 56.9896 41.0459L61.2862 45.3425C63.3481 47.4044 66.6912 47.4044 68.7531 45.3425L73.0497 41.0459C73.4422 40.6534 73.76 40.2145 74.003 39.7469C86.1702 41.4864 89.0247 43.3411 95.7528 46.7866C97.3425 47.6007 100.936 49.9291 101.982 50.8903C105.167 58.1746 108.706 70.5946 109.803 88.0369L106.802 89.6215L94.1021 83.1582L32.0129 82.6452L22.3693 90.3396L19.197 88.0369C20.2607 70.5946 24.3288 58.1746 27.5079 50.8903C29.8799 49.2902 32.5448 47.7945 33.5808 47.2466Z" fill="white"/>\n<path d="M86.0609 99.7794C103.204 99.2379 109.797 88.0204 109.797 88.0204L97.4952 80.0396L32.3865 78.5509L19.1968 88.0204C19.1968 88.0204 25.7125 99.2379 42.8552 99.7794C42.8552 99.7794 45.7252 96.2981 48.0523 93.3584C38.2011 90.4186 34.4778 84.2296 34.4778 84.2296C34.4778 84.2296 35.2535 84.7712 36.6497 85.5448C36.7273 85.6222 36.8048 85.6995 36.96 85.7769C37.0763 85.8542 37.1928 85.9123 37.3091 85.9703C37.4254 86.0283 37.5418 86.0863 37.6581 86.1637C39.5973 87.2468 41.5365 88.0977 43.3206 88.794C46.5009 90.0318 50.3018 91.2696 54.7232 92.1206C60.5408 93.2036 67.3669 93.5905 74.8134 92.1979C78.4592 91.579 82.1825 90.496 86.0609 88.8714C88.7758 87.8657 91.801 86.3958 94.9813 84.307C94.9813 84.307 91.1029 90.6507 80.9414 93.5131C83.2684 96.4529 86.0609 99.7794 86.0609 99.7794Z" fill="white"/>\n<path d="M65.0001 11.5679L79.2895 30.6673L71.9466 29.194L65.0001 26.3009L58.5662 29.194L50.7107 30.6673L65.0001 11.5679Z" fill="white"/>\n<path d="M27 27.7152L27.1069 38.8049L39 36.2798L27 27.7152Z" fill="white"/>\n<path d="M43.8314 18.6531L35.5391 36.0632L55.3131 31.2604L43.8314 18.6531Z" fill="white"/>\n<path d="M102.987 27.7152V38.8694L90.9868 36.2798L102.987 27.7152Z" fill="white"/>\n<path d="M86.1554 18.6531L94.4478 36.0632L74.6737 31.2604L86.1554 18.6531Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M48.8848 79.9288C55.2332 79.9288 60.3795 74.0897 60.3795 66.8868C60.3795 59.6839 55.2332 53.8447 48.8848 53.8447C42.5365 53.8447 37.3901 59.6839 37.3901 66.8868C37.3901 74.0897 42.5365 79.9288 48.8848 79.9288ZM50.9677 77.2335C53.7757 77.2335 56.0519 74.6603 56.0519 71.4862C56.0519 68.312 53.7757 65.7388 50.9677 65.7388C48.1598 65.7388 45.8835 68.312 45.8835 71.4862C45.8835 74.6603 48.1598 77.2335 50.9677 77.2335Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M79.115 79.9288C72.7667 79.9288 67.6204 74.0897 67.6204 66.8868C67.6204 59.6839 72.7667 53.8447 79.115 53.8447C85.4634 53.8447 90.6097 59.6839 90.6097 66.8868C90.6097 74.0897 85.4634 79.9288 79.115 79.9288ZM77.0321 77.2335C74.2242 77.2335 71.948 74.6603 71.948 71.4862C71.948 68.312 74.2242 65.7388 77.0321 65.7388C79.8401 65.7388 82.1163 68.312 82.1163 71.4862C82.1163 74.6603 79.8401 77.2335 77.0321 77.2335Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M48.8851 79.9288C55.2334 79.9288 60.3798 74.0897 60.3798 66.8867C60.3798 59.6838 55.2334 53.8447 48.8851 53.8447C42.5367 53.8447 37.3904 59.6838 37.3904 66.8867C37.3904 74.0897 42.5367 79.9288 48.8851 79.9288ZM53.5232 72.6341C56.3312 72.6341 58.6074 70.0609 58.6074 66.8868C58.6074 63.7126 56.3312 61.1394 53.5232 61.1394C50.7153 61.1394 48.4391 63.7126 48.4391 66.8868C48.4391 70.0609 50.7153 72.6341 53.5232 72.6341Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M79.1152 79.9288C72.7668 79.9288 67.6205 74.0897 67.6205 66.8867C67.6205 59.6838 72.7668 53.8447 79.1152 53.8447C85.4635 53.8447 90.6099 59.6838 90.6099 66.8867C90.6099 74.0897 85.4635 79.9288 79.1152 79.9288ZM74.5106 72.6341C71.7027 72.6341 69.4264 70.0609 69.4264 66.8868C69.4264 63.7126 71.7027 61.1394 74.5106 61.1394C77.3185 61.1394 79.5948 63.7126 79.5948 66.8868C79.5948 70.0609 77.3185 72.6341 74.5106 72.6341Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 0.707107 0.707107 0.707107 54.3428 61.5646)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 0.707107 0.707107 0.707107 54.3428 61.5646)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 0.707107 0.707107 0.707107 82.6738 61.5647)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 0.707107 0.707107 0.707107 82.6738 61.5647)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 57.1472 73.3851)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 57.1472 73.3851)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 85.4783 73.3851)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 85.4783 73.3851)" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M34.7021 36.637C32.2599 31.4916 33.7393 25.6346 37.982 23.2502C37.8055 25.0509 38.1328 27.0271 39.0274 28.9118C40.0091 30.98 41.508 32.5887 43.1978 33.5798C43.8829 33.3715 44.5988 33.1703 45.346 32.978C46.7833 32.5756 48.297 32.2399 49.871 32.0058C53.7608 31.3234 58.3048 30.8944 63.5567 30.8944C68.8575 30.8944 73.4118 31.2675 77.3086 31.8843C79.3319 32.1124 81.2883 32.5445 83.13 33.0946C83.6699 33.237 84.1925 33.3842 84.6982 33.5358C86.3577 32.5415 87.8272 30.9497 88.7945 28.9118C89.689 27.0271 90.0164 25.0509 89.8399 23.2502C94.0826 25.6346 95.562 31.4916 93.1198 36.637C93.1172 36.6425 93.1146 36.6479 93.112 36.6534C94.7617 37.4379 96.4193 38.4161 98.0395 39.6312C98.0395 39.6312 109.18 59.8227 109.18 84.7334C109.18 84.7334 102.604 95.9509 85.5068 96.4924C85.5068 96.4924 82.7217 93.1659 80.4009 90.2261C90.5353 87.3637 94.4034 81.02 94.4034 81.02C91.2316 83.1088 88.2145 84.5787 85.5068 85.5844C81.6387 87.209 77.9253 88.292 74.2893 88.9109C66.8625 90.3035 60.0546 89.9166 54.2524 88.8336C49.8428 87.9826 46.0521 86.7448 42.8802 85.507C41.1009 84.8107 39.1668 83.9598 37.2328 82.8767C37.1167 82.7993 37.0007 82.7413 36.8846 82.6833C36.7687 82.6253 36.6525 82.5672 36.5365 82.4899C36.3818 82.4125 36.3044 82.3352 36.2271 82.2578C34.8345 81.4842 34.0609 80.9426 34.0609 80.9426C34.0609 80.9426 37.7743 87.1316 47.5993 90.0714C45.2784 93.0111 42.416 96.4924 42.416 96.4924C25.319 95.9509 18.8206 84.7334 18.8206 84.7334C18.8206 75.9981 20.1904 67.8431 21.9694 60.9356C25.2636 48.1447 29.9607 39.6312 29.9607 39.6312C31.5355 38.4501 33.1428 37.4928 34.7417 36.7198C34.7284 36.6923 34.7152 36.6647 34.7021 36.637Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M45.3568 59.8015C42.3817 61.5447 40.3896 64.9674 40.3896 68.877C40.3896 71.196 41.1061 73.3437 42.3094 75.0712C42.937 75.2076 43.5675 75.3583 44.2 75.5237C47.2765 76.3284 50.1433 77.413 52.7225 78.701C56.5771 77.3804 59.3192 73.4638 59.3192 68.877C59.3223 68.6841 59.3204 68.4925 59.3136 68.3021C57.3716 67.7726 55.3487 66.9792 53.3418 65.923C53.2823 68.3112 52.6076 70.9893 50.855 73.7402V73.7402L50.855 73.7402L50.855 73.7402V73.7402C48.3071 69.741 48.0373 65.8957 48.6238 62.8711C47.3831 61.8919 46.2864 60.8571 45.3568 59.8015Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M82.6429 59.8015C85.6181 61.5447 87.6101 64.9674 87.6101 68.877C87.6101 71.196 86.8936 73.3437 85.6904 75.0712C85.0627 75.2076 84.4322 75.3583 83.7998 75.5237C80.7233 76.3284 77.8564 77.413 75.2773 78.701C71.4226 77.3804 68.6806 73.4638 68.6806 68.877C68.6774 68.6841 68.6793 68.4925 68.6862 68.3021C70.6281 67.7726 72.6511 66.9792 74.6579 65.923C74.7175 68.3112 75.3922 70.9893 77.1448 73.7402V73.7402L77.1448 73.7402L77.1448 73.7402V73.7402C79.6927 69.741 79.9624 65.8957 79.3759 62.8711C80.6166 61.8919 81.7134 60.8571 82.6429 59.8015Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M109.655 71.0226L107.559 72.6957C105.156 74.6135 101.405 76.6496 97.2647 78.8973L97.2645 78.8974C96.3386 79.4 95.3932 79.9132 94.439 80.4381C91.8303 81.8729 89.2128 83.1134 86.7894 83.9667C84.3294 84.8328 82.2637 85.2297 80.6949 85.1584C77.8244 85.0279 75.9052 84.6369 74.5268 84.1968C73.1562 83.7592 72.2177 83.244 71.2083 82.685L71.1326 82.6431C69.6312 81.8112 67.8506 80.8246 65 80.8246C62.1494 80.8246 60.3688 81.8112 58.8674 82.6431L58.7917 82.685C57.7823 83.244 56.8438 83.7592 55.4732 84.1968C54.0949 84.6369 52.1756 85.0279 49.3051 85.1584C47.7363 85.2297 45.6706 84.8328 43.2107 83.9667C40.7872 83.1134 38.1697 81.8729 35.5611 80.4381C34.6079 79.9138 33.6634 79.4011 32.7384 78.8989L32.7355 78.8974C28.5949 76.6497 24.8439 74.6135 22.4413 72.6957L20.467 71.1197C22.7549 51.0335 31.027 36.0402 31.027 36.0402C42.1672 27.6851 52.7658 27.9172 52.7658 27.9172L53.5394 28.8456C39.6142 32.8684 33.1932 38.98 33.1932 38.98C33.1932 38.98 34.8951 38.0517 37.7575 36.7365C46.0353 33.1005 52.6111 32.0948 55.3188 31.8627C55.3777 31.8529 55.4354 31.843 55.4921 31.8334L55.4923 31.8333C55.8824 31.7669 56.2288 31.708 56.6339 31.708C61.353 31.0891 66.691 30.9343 72.2611 31.5532C79.6105 32.4042 87.5014 34.5704 95.5471 38.98C95.5471 38.98 89.4355 33.1778 76.2839 29.155L77.367 27.9172C77.367 27.9172 87.9656 27.6851 99.1058 36.0402C99.1058 36.0402 107.351 50.9852 109.655 71.0226Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5698 75.0403C24.3271 78.0395 31.205 82.471 37.9123 85.3391C37.5395 87.4935 37.3013 90.3051 37.2497 93.1471C37.1995 95.9182 37.3234 98.868 37.7217 101.41C36.1824 100.648 34.8232 99.9317 33.7225 99.3079C33.116 98.9642 32.4331 98.6486 31.7052 98.3122C26.6579 95.9793 20.5698 90.4921 20.5698 75.0403ZM40.2492 93.2015C40.295 90.6776 40.4925 88.2969 40.7687 86.4645C43.9276 87.5955 46.9393 88.269 49.4414 88.1553C55.613 87.8748 58.1867 86.4494 60.2452 85.3095C61.7177 84.494 62.9265 83.8245 65.0001 83.8245C67.0737 83.8245 68.2825 84.494 69.755 85.3095C71.8135 86.4494 74.3872 87.8748 80.5588 88.1553C83.0609 88.269 86.0726 87.5955 89.2316 86.4645C89.5078 88.2969 89.7053 90.6776 89.751 93.2015C89.8171 96.8487 89.5603 100.526 88.8855 103.024C81.1494 106.57 70.9362 110.375 65.0001 110.375C59.064 110.375 48.8508 106.57 41.1147 103.024C40.4399 100.526 40.1831 96.8487 40.2492 93.2015ZM92.2785 101.41C93.8179 100.648 95.177 99.9317 96.2777 99.3079C96.8842 98.9642 97.5671 98.6486 98.295 98.3122C103.342 95.9793 109.43 92.4734 109.43 75.0403C105.673 78.0395 98.7952 82.471 92.088 85.3391C92.4608 87.4935 92.699 90.3051 92.7505 93.1471C92.8008 95.9182 92.6769 98.8679 92.2785 101.41ZM83.2311 96.2459H46.7687V94.2459H83.2311V96.2459ZM50.7732 102.901H79.2266V100.901H50.7732V102.901Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M36.6265 60.5668C38.8006 63.3896 43.7105 64.2846 46.8769 63.791L46.4232 67.4999C38.1031 67.1382 36.7772 62.074 36.6265 60.5668Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M44.906 62.1547C46.2536 60.9788 47.9691 60.2734 49.8539 60.2734C54.272 60.2734 57.8374 64.1489 57.7599 68.877C57.7599 73.6051 54.272 77.4805 49.8539 77.4805C45.5134 77.4805 41.948 73.6051 41.948 68.877C41.948 66.9908 42.5031 65.2404 43.4508 63.8175C46.9388 64.1133 50.4308 63.1639 50.994 62.5286C49.2181 62.7559 46.9817 62.8669 44.906 62.1547Z" fill="#4F5660"/>\n<path d="M91.3738 60.5668C89.1997 63.3896 84.2898 64.2846 81.1233 63.791L81.577 67.4999C89.8971 67.1382 91.2231 62.074 91.3738 60.5668Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M83.0943 62.1547C81.7466 60.9788 80.0311 60.2734 78.1463 60.2734C73.7283 60.2734 70.1628 64.1489 70.2403 68.877C70.2403 73.6051 73.7283 77.4805 78.1463 77.4805C82.4868 77.4805 86.0522 73.6051 86.0522 68.877C86.0522 66.9908 85.4972 65.2404 84.5494 63.8175C81.0615 64.1133 77.5695 63.1639 77.0062 62.5286C78.7821 62.7559 81.0185 62.8669 83.0943 62.1547Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<ellipse cx="50.3372" cy="68.4938" rx="4.87187" ry="5.57887" fill="#4F5660"/>\n<ellipse rx="4.87187" ry="5.57887" transform="matrix(-1 0 0 1 77.6628 68.4938)" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M49.2884 76.9486C53.9578 76.9486 57.7432 73.1633 57.7432 68.4938C57.7432 63.8244 53.9578 60.039 49.2884 60.039C44.6189 60.039 40.8336 63.8244 40.8336 68.4938C40.8336 73.1633 44.6189 76.9486 49.2884 76.9486ZM49.2884 80.0952C55.6957 80.0952 60.8898 74.9011 60.8898 68.4938C60.8898 62.0866 55.6957 56.8925 49.2884 56.8925C42.8811 56.8925 37.687 62.0866 37.687 68.4938C37.687 74.9011 42.8811 80.0952 49.2884 80.0952Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M78.7116 76.9486C74.0422 76.9486 70.2568 73.1633 70.2568 68.4938C70.2568 63.8244 74.0422 60.039 78.7116 60.039C83.3811 60.039 87.1664 63.8244 87.1664 68.4938C87.1664 73.1633 83.3811 76.9486 78.7116 76.9486ZM78.7116 80.0952C72.3043 80.0952 67.1102 74.9011 67.1102 68.4938C67.1102 62.0866 72.3043 56.8925 78.7116 56.8925C85.1189 56.8925 90.313 62.0866 90.313 68.4938C90.313 74.9011 85.1189 80.0952 78.7116 80.0952Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M63.4185 64.6158C61.8805 64.7276 60.5929 65.1125 59.9352 65.3972L58.6851 62.5096C59.6701 62.0832 61.3035 61.6147 63.1904 61.4775C65.0828 61.34 67.3342 61.5286 69.4751 62.5277L68.1445 65.3791C66.628 64.6714 64.9509 64.5045 63.4185 64.6158Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<ellipse cx="49.223" cy="68.7434" rx="5.20026" ry="5.95492" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M63.3517 64.7365C62.2318 64.8179 61.3023 65.0988 60.8506 65.2943L59.5161 62.2121C60.3173 61.8653 61.6159 61.4952 63.1083 61.3867C64.6066 61.2778 66.4113 61.425 68.1395 62.2315L66.7191 65.275C65.6575 64.7796 64.4657 64.6556 63.3517 64.7365Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M39.6577 61.4724V71.3396H58.9329V61.4724H39.6577ZM38.5382 58.1137C37.3016 58.1137 36.2991 59.1162 36.2991 60.3528V72.4592C36.2991 73.6958 37.3016 74.6983 38.5382 74.6983H60.0524C61.2891 74.6983 62.2915 73.6958 62.2915 72.4592V60.3528C62.2915 59.1162 61.2891 58.1137 60.0524 58.1137H38.5382Z" fill="#4F5660"/>\n<ellipse rx="5.20026" ry="5.95492" transform="matrix(-1 0 0 1 78.777 68.7434)" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M88.3423 61.4724V71.3396H69.0671V61.4724H88.3423ZM89.4618 58.1137C90.6984 58.1137 91.7009 59.1162 91.7009 60.3528V72.4592C91.7009 73.6958 90.6984 74.6983 89.4618 74.6983H67.9476C66.7109 74.6983 65.7085 73.6958 65.7085 72.4592V60.3528C65.7085 59.1162 66.7109 58.1137 67.9476 58.1137H89.4618Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M34.1375 28.8633C35.4034 24.874 40.2103 20.7518 45.8163 22.2806C51.4223 23.8095 55.2718 24.0911 66.9496 19.2027C66.5054 21.785 63.8532 24.7805 60.8993 26.9102C67.1223 26.099 75.6718 25.9986 81.6333 28.3607C90.6368 31.9282 100.918 33.5014 102.404 32.7936C99.856 34.7047 96.7513 41.1795 86.5869 39.4807C81.7697 38.6756 80.7835 42.3684 70.4486 41.1795C55.6812 39.4807 48.5769 31.6239 38.3842 37.9943C30.2301 43.0906 32.1556 34.0304 34.1375 28.8633Z" fill="white"/>\n<path d="M30.4891 40.736C28.2979 44.3312 20.2579 59.1145 18.696 84.7268L20.774 86.5355L34.5267 78.6667L95.3505 79.4465L107.898 85.7557L109.303 84.7268C107.734 59.7686 100.053 45.0934 97.6328 41.0333C94.7642 42.5847 91.0349 43.4359 86.0648 42.6053C84.8681 42.4053 84.2895 42.5959 82.7473 43.1042L82.7457 43.1047C82.3982 43.2192 82.0018 43.3498 81.5384 43.4957C79.0033 44.2939 75.7257 44.9753 70.0867 44.3266C64.3822 43.6704 59.5477 42.0847 55.6318 40.8003C54.2539 40.3484 52.9898 39.9337 51.8415 39.61C49.5336 38.9594 47.6188 38.6246 45.798 38.7284C44.0338 38.8288 42.1899 39.3516 40.0634 40.6807C37.9495 42.0019 35.5663 43.0506 33.2972 42.5327C31.9942 42.2353 31.0986 41.5496 30.4891 40.736Z" fill="white"/>\n<path d="M85.5609 96.4632C102.704 95.9217 109.297 84.7041 109.297 84.7041L96.9952 76.7234L31.8865 75.2347L18.6968 84.7041C18.6968 84.7041 25.2125 95.9217 42.3552 96.4632C42.3552 96.4632 45.2252 92.9819 47.5523 90.0421C37.7011 87.1024 33.9778 80.9134 33.9778 80.9134C33.9778 80.9134 34.7535 81.4549 36.1497 82.2285C36.2273 82.3059 36.3048 82.3833 36.46 82.4606C36.5763 82.5379 36.6928 82.596 36.8091 82.654C36.9254 82.7121 37.0418 82.7701 37.1581 82.8474C39.0973 83.9305 41.0365 84.7815 42.8206 85.4777C46.0009 86.7155 49.8018 87.9533 54.2232 88.8043C60.0408 89.8874 66.8669 90.2742 74.3134 88.8817C77.9592 88.2628 81.6825 87.1797 85.5609 85.5551C88.2758 84.5494 91.301 83.0795 94.4813 80.9907C94.4813 80.9907 90.6029 87.3345 80.4414 90.1968C82.7684 93.1366 85.5609 96.4632 85.5609 96.4632Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M64.0161 17.3515C54.5808 16.9839 33.2105 20.2556 23.2118 36.2832C10.7135 56.3177 6.96593 65.4405 13.8139 67.2532C15.8971 67.8046 23.9474 69.2942 28.3586 66.7945L35.1593 38.4889H46.5652L50.9276 31.9963L54.8085 38.4889H64.0161H92.873L99.6737 66.7945C104.085 69.2942 110.773 67.8046 112.856 67.2532C120.448 65.2435 117.319 56.3177 104.82 36.2832C94.8218 20.2556 73.4513 16.9839 64.0161 17.3515Z" fill="white"/>\n<path d="M87.262 17.3247L89.7131 24.7731L94.125 28.4018L100.437 24.7731L93.3896 24.0092L87.262 17.3247Z" fill="white"/>\n<path d="M37.6461 41.6442L31.4264 67.5316C31.2222 68.3816 30.6746 69.1087 29.9141 69.5397C26.8094 71.299 23.0545 71.2623 20.2644 71.2789C19.6161 75.2461 19.4887 80.1633 19.2019 84.8658L21.2981 86.4404L33.1268 79.0734H94.4493L107.316 86.4404L109.447 84.8658C109.151 80.1616 108.708 75.2473 108.053 71.2789L108.009 71.2798C105.12 71.3397 101.429 71.4161 98.1179 69.5397C97.3574 69.1087 96.8097 68.3816 96.6055 67.5316L90.3858 41.6442H53.2L51.0874 37.7907L48.7688 41.6442H37.6461Z" fill="white"/>\n<path d="M85.8039 96.5628C102.879 96.0234 109.447 84.8499 109.447 84.8499L97.1934 76.9004L32.3399 75.4175L19.2019 84.8499C19.2019 84.8499 25.6921 96.0234 42.7676 96.5628C42.7676 96.5628 45.6264 93.0952 47.9443 90.1669C38.1317 87.2387 34.423 81.074 34.423 81.074C34.423 81.074 35.1957 81.6134 36.5864 82.384C36.6637 82.461 36.7409 82.5381 36.8955 82.6152C37.0113 82.6922 37.1273 82.7501 37.2432 82.8078L37.2432 82.8078C37.3591 82.8656 37.475 82.9234 37.5909 83.0005C39.5225 84.0793 41.4541 84.9269 43.2312 85.6205C46.399 86.8534 50.185 88.0863 54.589 88.934C60.3839 90.0128 67.1832 90.3981 74.6006 89.0111C78.232 88.3946 81.9407 87.3158 85.8039 85.6975C88.5082 84.6958 91.5215 83.2316 94.6893 81.151C94.6893 81.151 90.8261 87.4699 80.7044 90.3211C83.0224 93.2493 85.8039 96.5628 85.8039 96.5628Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M53.5214 88.8336C56.7288 89.4323 60.2434 89.8182 64 89.8085C67.7566 89.8182 71.2712 89.4323 74.4786 88.8336C78.8882 87.9826 82.679 86.7448 85.8508 85.507C87.6302 84.8107 89.5642 83.9598 91.4983 82.8767C91.6143 82.7993 91.7304 82.7413 91.8464 82.6833C91.9624 82.6253 92.0786 82.5672 92.1945 82.4899C92.3493 82.4125 92.4266 82.3352 92.504 82.2578C93.8965 81.4842 94.6701 80.9426 94.6701 80.9426C94.6701 80.9426 94.6701 94.0814 102.662 94.028C110.653 93.9746 109.91 84.7334 109.91 84.7334C109.91 75.4632 108.368 66.8466 106.43 59.6808C103.162 47.591 98.7703 39.6312 98.7703 39.6312C87.6302 31.2761 77.0315 31.5082 77.0315 31.5082L76.2579 32.4365C90.1831 36.4594 96.6042 42.571 96.6042 42.571C96.6042 42.571 94.9022 41.6426 92.0398 40.3275C83.7621 36.6915 77.1862 35.6857 74.4786 35.4537C74.4196 35.4438 74.362 35.434 74.3052 35.4243L74.3051 35.4243C73.9149 35.3579 73.5686 35.2989 73.1634 35.2989C70.3071 34.9243 67.224 34.7198 64 34.7539C60.776 34.7198 57.6929 34.9243 54.8366 35.2989C54.4314 35.2989 54.0851 35.3579 53.6949 35.4243L53.6948 35.4243C53.638 35.434 53.5804 35.4438 53.5214 35.4537C50.8138 35.6857 44.2379 36.6915 35.9602 40.3275C33.0978 41.6426 31.3958 42.571 31.3958 42.571C31.3958 42.571 37.8169 36.4594 51.7421 32.4365L50.9685 31.5082C50.9685 31.5082 40.3698 31.2761 29.2297 39.6312C29.2297 39.6312 24.8381 47.591 21.5696 59.6808C19.6323 66.8466 18.0895 75.4632 18.0895 84.7334C18.0895 84.7334 17.3469 93.9746 25.3384 94.028C33.3299 94.0814 33.3299 80.9426 33.3299 80.9426C33.3299 80.9426 34.1035 81.4842 35.496 82.2578L35.4961 82.2578C35.5734 82.3352 35.6508 82.4125 35.8055 82.4899C35.9214 82.5672 36.0376 82.6253 36.1536 82.6833C36.2696 82.7413 36.3857 82.7993 36.5017 82.8767C38.4358 83.9598 40.3698 84.8107 42.1492 85.507C45.321 86.7448 49.1118 87.9826 53.5214 88.8336Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M109.155 71.0563L107.059 72.7293C104.656 74.6471 100.905 76.6833 96.7647 78.9309L96.7645 78.931C95.8386 79.4337 94.8932 79.9469 93.939 80.4717C91.3303 81.9065 88.7128 83.1471 86.2894 84.0003C83.8294 84.8665 81.7637 85.2633 80.1949 85.192C77.3244 85.0616 75.4052 84.6705 74.0268 84.2305C72.6562 83.7929 71.7177 83.2777 70.7083 82.7187L70.6326 82.6768C69.1312 81.8448 67.3506 80.8582 64.5 80.8582C61.6494 80.8582 59.8688 81.8448 58.3674 82.6768L58.2917 82.7187C57.2823 83.2777 56.3438 83.7929 54.9732 84.2305C53.5949 84.6705 51.6756 85.0616 48.8051 85.192C47.2363 85.2633 45.1706 84.8665 42.7107 84.0003C40.2872 83.1471 37.6697 81.9065 35.0611 80.4717C34.1079 79.9474 33.1634 79.4347 32.2384 78.9326L32.2355 78.931C28.0949 76.6833 24.3439 74.6472 21.9413 72.7293L19.967 71.1534C22.2549 51.0672 30.527 36.0739 30.527 36.0739C41.6672 27.7188 52.2658 27.9509 52.2658 27.9509L53.0394 28.8792C39.1142 32.902 32.6932 39.0136 32.6932 39.0136C32.6932 39.0136 34.3951 38.0853 37.2575 36.7701C45.5353 33.1341 52.1111 32.1284 54.8188 31.8963C54.8777 31.8865 54.9354 31.8767 54.9921 31.867L54.9923 31.867C55.3824 31.8006 55.7288 31.7416 56.1339 31.7416C60.853 31.1227 66.191 30.968 71.7611 31.5869C79.1105 32.4379 87.0014 34.604 95.0471 39.0136C95.0471 39.0136 88.9355 33.2115 75.7839 29.1886L76.867 27.9509C76.867 27.9509 87.4656 27.7188 98.6058 36.0739C98.6058 36.0739 106.851 51.0189 109.155 71.0563Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M48.9414 88.1889C40.4723 88.5739 26.1649 79.9393 20.0698 75.0739C20.0698 90.5257 26.1579 96.0129 31.2052 98.3458C31.9331 98.6822 32.616 98.9979 33.2225 99.3416C39.9441 103.15 56.3015 110.409 64.5001 110.409C72.6987 110.409 89.0561 103.15 95.7777 99.3416C96.3842 98.9979 97.0671 98.6822 97.795 98.3458C102.842 96.0129 108.93 92.5071 108.93 75.0739C102.835 79.9393 88.5279 88.5739 80.0588 88.1889C73.8872 87.9084 71.3135 86.4831 69.255 85.3431C67.7825 84.5276 66.5737 83.8582 64.5001 83.8582C62.4265 83.8582 61.2177 84.5276 59.7452 85.3431C57.6867 86.4831 55.113 87.9084 48.9414 88.1889ZM77.5874 98.5346C77.5874 100.936 75.7606 102.911 73.4207 103.146V93.9229C75.7606 94.1577 77.5874 96.1328 77.5874 98.5346ZM66.1626 93.8996H70.4207V103.17H66.1626V93.8996ZM58.9046 103.17H63.1626V93.8996H58.9046V103.17ZM55.9046 93.9017C53.4112 93.9776 51.4131 96.0228 51.4131 98.5346C51.4131 101.046 53.4112 103.092 55.9046 103.167V93.9017Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M49.6374 60.2786C45.3802 60.2786 41.929 64.2306 41.929 69.1057C41.929 69.9914 42.0429 70.8467 42.2549 71.6534C44.6174 68.9999 50.8779 65.2851 57.02 71.6534C57.232 70.8467 57.3459 69.9914 57.3459 69.1057C57.3459 64.2306 53.8947 60.2786 49.6374 60.2786Z" fill="#4F5660"/>\n<path d="M78.3623 60.2786C82.6196 60.2786 86.0708 64.2306 86.0708 69.1057C86.0708 69.9914 85.9569 70.8467 85.7449 71.6534C83.3824 68.9999 77.1219 65.2851 70.9797 71.6534C70.7677 70.8467 70.6538 69.9914 70.6538 69.1057C70.6538 64.2306 74.105 60.2786 78.3623 60.2786Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M26.2255 60.225C22.4564 75.4015 21.9314 75.6852 17.094 74.4838C11.2271 73.0268 8.19975 64.8848 10.3322 56.2982C12.4647 47.7115 18.9494 41.9318 24.8163 43.3889C29.8982 44.6509 29.9945 45.0486 26.2255 60.225Z" fill="white"/>\n<path d="M101.382 60.225C105.151 75.4015 105.677 75.6852 110.514 74.4838C116.381 73.0268 119.408 64.8848 117.276 56.2982C115.143 47.7115 108.658 41.9318 102.792 43.3889C97.7097 44.6509 97.6134 45.0486 101.382 60.225Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M86.0065 96.5261C86.0065 96.5261 83.2215 93.1995 80.9006 90.2598C91.0351 87.3974 94.9032 81.0537 94.9032 81.0537C91.7313 83.1424 88.7142 84.6123 86.0065 85.618C82.1384 87.2426 78.425 88.3257 74.789 88.9446C67.3622 90.3371 60.5544 89.9503 54.7522 88.8672C50.3426 88.0163 46.5518 86.7785 43.38 85.5407C41.6006 84.8444 39.6666 83.9934 37.7325 82.9104C37.6165 82.833 37.5004 82.775 37.3844 82.717C37.2684 82.659 37.1522 82.6009 37.0363 82.5236C36.8815 82.4462 36.8042 82.3688 36.7268 82.2915C35.3343 81.5178 34.5607 80.9763 34.5607 80.9763C34.5607 80.9763 38.2741 87.1653 48.0991 90.105C45.7782 93.0448 42.9158 96.5261 42.9158 96.5261C25.8187 95.9846 19.3203 84.7671 19.3203 84.7671C19.3203 82.2996 19.4195 79.8784 19.5983 77.5186C19.847 77.5201 20.0956 77.5079 20.3418 77.4783C22.0355 77.2746 23.2923 76.3407 24.2262 74.9343C25.055 73.6862 25.7135 71.9488 26.3751 69.7846C27.053 67.5673 27.8078 64.6403 28.7486 60.8517C29.6874 57.0716 30.4033 54.1419 30.8586 51.8829C31.3021 49.6821 31.5595 47.8464 31.4299 46.3628C31.282 44.6692 30.6061 43.2424 29.1719 42.2675C28.9387 42.1089 28.6911 41.9681 28.4349 41.8419C29.0511 40.4285 29.4335 39.6649 29.4335 39.6649C34.9794 36.2488 48.2716 28.6416 64.0034 28.6416C77.8489 28.6416 92.9301 36.2488 98.5392 39.6649C98.5392 39.6649 98.9257 40.3654 99.5548 41.6666C99.1626 41.8343 98.7833 42.0313 98.4357 42.2675C97.0015 43.2424 96.3257 44.6692 96.1777 46.3628C96.0481 47.8464 96.3056 49.6821 96.7491 51.8829C97.2043 54.1419 97.9203 57.0716 98.859 60.8517C99.7999 64.6403 100.555 67.5673 101.233 69.7846C101.894 71.9488 102.553 73.6862 103.382 74.9343C104.315 76.3407 105.572 77.2746 107.266 77.4783C107.963 77.5621 108.681 77.5065 109.363 77.3955C109.566 79.7942 109.679 82.2567 109.679 84.7671C109.679 84.7671 103.104 95.9846 86.0065 96.5261ZM52.9732 33.2C39.048 36.6298 32.627 42.6046 32.627 42.6046C32.627 42.6046 34.3289 41.8132 37.1913 40.6919C45.4691 37.5919 52.0449 36.7344 54.7525 36.5366C54.8115 36.5282 54.8692 36.5198 54.9259 36.5116L54.926 36.5115C55.3162 36.4549 55.6626 36.4046 56.0677 36.4046C60.7868 35.877 66.1248 35.7451 71.6949 36.2727C79.0443 36.9983 86.9352 38.8451 94.9809 42.6046C94.9809 42.6046 88.8693 36.8936 75.7177 33.4638C72.2294 32.5184 62.7968 31.1421 52.9732 33.2Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M57.3275 62.674C56.408 61.6767 55.1463 61.1274 53.7745 61.1274C52.7492 61.1274 51.8101 61.4516 50.9834 62.0909C50.5663 62.4136 50.1883 62.8083 49.8551 63.2691C49.5219 62.8085 49.1438 62.4136 48.7265 62.0909C47.9 61.4516 46.9609 61.1274 45.9356 61.1274C44.5638 61.1274 43.302 61.6767 42.3824 62.674C41.4739 63.6597 40.9734 65.0063 40.9734 66.4658C40.9734 67.9681 41.5332 69.3433 42.7352 70.7936C43.8104 72.091 45.3558 73.408 47.1454 74.9331C47.7565 75.4539 48.4491 76.0442 49.1684 76.6731C49.3584 76.8395 49.6022 76.9311 49.8551 76.9311C50.1078 76.9311 50.3517 76.8395 50.5415 76.6733C51.2607 76.0444 51.9538 75.4538 52.5651 74.9327C54.3544 73.4079 55.8998 72.091 56.975 70.7935C58.177 69.3433 58.7367 67.9681 58.7367 66.4657C58.7367 65.0063 58.2362 63.6597 57.3275 62.674Z" fill="#4F5660"/>\n<path d="M85.6176 62.674C84.6981 61.6767 83.4363 61.1274 82.0646 61.1274C81.0392 61.1274 80.1001 61.4516 79.2735 62.0909C78.8563 62.4136 78.4783 62.8083 78.1451 63.2691C77.812 62.8085 77.4339 62.4136 77.0166 62.0909C76.19 61.4516 75.251 61.1274 74.2256 61.1274C72.8538 61.1274 71.592 61.6767 70.6725 62.674C69.7639 63.6597 69.2634 65.0063 69.2634 66.4658C69.2634 67.9681 69.8233 69.3433 71.0252 70.7936C72.1005 72.091 73.6458 73.408 75.4354 74.9331C76.0465 75.4539 76.7392 76.0442 77.4584 76.6731C77.6484 76.8395 77.8922 76.9311 78.1451 76.9311C78.3978 76.9311 78.6418 76.8395 78.8315 76.6733C79.5507 76.0444 80.2438 75.4538 80.8552 74.9327C82.6445 73.4079 84.1898 72.091 85.2651 70.7935C86.467 69.3433 87.0268 67.9681 87.0268 66.4657C87.0268 65.0063 86.5263 63.6597 85.6176 62.674Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M24.5616 41.0389C23.287 41.3641 21.0574 43.3404 21.3754 44.6625C21.4906 45.141 21.6161 45.7242 21.754 46.3643C22.3789 49.2668 23.2561 53.3407 24.5616 54.1401C25.0197 54.4206 26.4718 53.8141 28.882 52.8074C34.8555 50.3125 46.7143 45.3595 63.9118 45.3595C81.1094 45.3595 92.9686 50.3125 98.9422 52.8074C101.352 53.8141 102.804 54.4206 103.263 54.1401C104.568 53.3407 105.445 49.2669 106.07 46.3643L106.07 46.3643C106.208 45.7242 106.334 45.141 106.449 44.6625C106.674 43.7274 104.537 41.3641 103.263 41.0389C87.2042 34.126 70.282 33.6521 63.9118 33.652C57.5417 33.6521 40.6199 34.126 24.5616 41.0389Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M28.9084 35.9667C32.8295 28.8209 43.1502 19.2446 63.9119 19.0284C84.6735 19.2446 94.9942 28.8208 98.9155 35.9665C84.083 30.8542 69.6677 30.4841 63.912 30.4841C58.1562 30.4841 43.741 30.8542 28.9084 35.9667Z" fill="white"/>\n<path d="M24.166 57.3156C24.7781 57.4244 25.2897 57.3626 25.5277 57.3295C26.057 57.2558 26.5753 57.1017 26.9987 56.9595C27.8292 56.6805 28.8817 56.2409 30.0024 55.7727L30.1031 55.7307C35.9677 53.2812 47.3555 48.5275 63.912 48.5275C80.4685 48.5275 91.8568 53.2812 97.7214 55.7307L97.8219 55.7726C98.9427 56.2408 99.9952 56.6805 100.826 56.9595C101.249 57.1017 101.767 57.2558 102.297 57.3295C102.55 57.3648 103.13 57.5132 103.796 57.3726C106.217 64.6707 108.518 74.5055 109.303 86.9966L104.665 88.5803L94.6374 80.9444H34.4696L21.6817 89.3163L18.696 86.9966C19.4569 74.5189 21.7553 64.6114 24.166 57.3156Z" fill="white"/>\n<path d="M62.6998 11.297C61.7167 11.3903 60.7826 11.5881 59.9227 11.8732L60.2636 15.3663L57.1221 13.298C55.9164 14.195 55.0847 15.3286 54.795 16.5845C57.5986 16.149 60.6225 15.8946 63.8786 15.8607L63.9116 15.8603L63.9446 15.8607C67.2715 15.8953 70.3561 16.1602 73.2109 16.6132C72.9276 15.3471 72.0938 14.204 70.8808 13.3006L67.9961 15.1999L68.3127 11.9543C67.5821 11.6943 66.7944 11.4982 65.9659 11.3771L64.1188 14.7484L62.6998 11.297Z" fill="white"/>\n<path d="M85.5602 98.7219C102.703 98.1803 109.296 86.9628 109.296 86.9628L96.9945 78.9821L31.8858 77.4934L18.696 86.9628C18.696 86.9628 25.2118 98.1803 42.3545 98.7219C42.3545 98.7219 45.2245 95.2406 47.5516 92.3008C37.7003 89.361 33.9771 83.1721 33.9771 83.1721C33.9771 83.1721 34.7527 83.7136 36.149 84.4872C36.2265 84.5646 36.3041 84.6419 36.4593 84.7193C36.5755 84.7966 36.692 84.8547 36.8083 84.9127C36.9247 84.9708 37.041 85.0288 37.1574 85.1061C39.0966 86.1892 41.0358 87.0402 42.8199 87.7364C46.0002 88.9742 49.801 90.212 54.2225 91.063C60.0401 92.1461 66.8661 92.5329 74.3127 91.1404C77.9584 90.5215 81.6817 89.4384 85.5602 87.8138C88.2751 86.8081 91.3002 85.3382 94.4805 83.2494C94.4805 83.2494 90.6021 89.5931 80.4406 92.4555C82.7677 95.3953 85.5602 98.7219 85.5602 98.7219Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M49.8547 62.4275L59.0185 71.5913L56.3862 74.2236L49.8547 67.6922L43.3232 74.2236L40.6909 71.5913L49.8547 62.4275Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M78.1657 62.4275L87.3295 71.5913L84.6972 74.2236L78.1657 67.6922L71.6343 74.2236L69.002 71.5913L78.1657 62.4275Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M88.8588 69.5154L71.0439 74.8297L69.8433 70.8049L87.6582 65.4907L88.8588 69.5154Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M39.1412 69.5154L56.9561 74.8297L58.1567 70.8049L40.3418 65.4907L39.1412 69.5154Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M76.5652 29.9951V41.6516H51.4348V29.8175C52.605 29.6241 53.5565 29.5133 54.2524 29.4537C54.3114 29.4438 54.3691 29.434 54.4258 29.4243C54.816 29.3579 55.1625 29.2989 55.5676 29.2989C60.2867 28.68 65.6247 28.5253 71.1948 29.1442C72.9556 29.3481 74.7475 29.6275 76.5652 29.9951Z" fill="white"/>\n<path d="M79.5652 36.6784V44.6516H48.4348V36.4084C45.2736 37.126 41.2393 38.3297 36.6912 40.3275C33.8288 41.6426 32.1269 42.571 32.1269 42.571C31.06 43.102 28.5839 44.422 27.2144 45.454C23.9157 53.1982 18.8206 67.8866 18.8206 84.7334C18.8206 84.7334 25.319 95.9509 42.416 96.4924C42.416 96.4924 45.2784 93.0111 47.5993 90.0714C37.7743 87.1316 34.0609 80.9426 34.0609 80.9426C34.0609 80.9426 34.8345 81.4842 36.2271 82.2578L36.2271 82.2578C36.3044 82.3352 36.3818 82.4125 36.5365 82.4899C36.6525 82.5672 36.7687 82.6253 36.8846 82.6833C37.0007 82.7413 37.1167 82.7993 37.2328 82.8767C39.1668 83.9598 41.1009 84.8107 42.8802 85.507C46.0521 86.7448 49.8428 87.9826 54.2524 88.8336C60.0546 89.9166 66.8625 90.3035 74.2893 88.9109C77.9253 88.292 81.6387 87.209 85.5068 85.5844C88.2145 84.5787 91.2316 83.1088 94.4034 81.02C94.4034 81.02 90.5353 87.3637 80.4009 90.2261C82.7217 93.1659 85.5068 96.4924 85.5068 96.4924C102.604 95.9509 109.18 84.7334 109.18 84.7334C109.18 68.7376 104.586 54.6876 101.299 46.68C100.425 45.9529 96.3896 43.6377 94.4808 42.571C89.4154 39.7948 84.4114 37.9078 79.5652 36.6784Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M77.8173 60.2734C73.3993 60.2734 69.9114 64.1489 69.9114 68.877C69.9114 73.6051 73.4768 77.4805 77.8173 77.4805C82.2354 77.4805 85.7233 73.6051 85.7233 68.877C85.7233 64.1489 82.2354 60.2734 77.8173 60.2734Z" fill="#4F5660"/>\n<path d="M49.5265 60.2734C45.1085 60.2734 41.6206 64.1489 41.6206 68.877C41.6206 73.6051 45.186 77.4805 49.5265 77.4805C53.9446 77.4805 57.4325 73.6051 57.4325 68.877C57.51 64.1489 53.9446 60.2734 49.5265 60.2734Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M90.9456 62.9025L37.0542 62.9025L37.0542 59.9025L90.9456 59.9025L90.9456 62.9025Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M50.6265 79.0066C56.6886 79.0066 61.6029 74.0922 61.6029 68.0301C61.6029 61.968 56.6886 57.0536 50.6265 57.0536C44.5643 57.0536 39.65 61.968 39.65 68.0301C39.65 74.0922 44.5643 79.0066 50.6265 79.0066ZM50.6265 83.0916C58.9447 83.0916 65.688 76.3484 65.688 68.0301C65.688 59.7118 58.9447 52.9686 50.6265 52.9686C42.3082 52.9686 35.5649 59.7118 35.5649 68.0301C35.5649 76.3484 42.3082 83.0916 50.6265 83.0916Z" fill="#4F5660"/>\n<circle cx="32.6844" cy="68.0303" r="1.98058" fill="#4F5660"/>\n<circle cx="32.6844" cy="73.4391" r="1.98058" fill="#4F5660"/>\n<circle cx="32.6844" cy="78.8478" r="1.98058" fill="#4F5660"/>\n<circle cx="32.6844" cy="84.2481" r="1.98058" fill="#4F5660"/>\n<circle cx="32.6844" cy="89.6482" r="1.98058" fill="#4F5660"/>\n<circle cx="32.6844" cy="95.0485" r="1.98058" fill="#4F5660"/>\n<path d="M50.5265 59.3395C46.1085 59.3395 42.6206 63.215 42.6206 67.943C42.6206 72.6711 46.186 76.5466 50.5265 76.5466C54.9446 76.5466 58.4325 72.6711 58.4325 67.943C58.51 63.215 54.9446 59.3395 50.5265 59.3395Z" fill="#4F5660"/>\n<path d="M78.8175 59.3395C74.3995 59.3395 70.9115 63.215 70.9115 67.943C70.9115 72.6711 74.4769 76.5466 78.8175 76.5466C83.2355 76.5466 86.7234 72.6711 86.7234 67.943C86.7234 63.215 83.2355 59.3395 78.8175 59.3395Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M52.4496 32.4083L52.4732 32.4365L52.4731 32.4365L52.4604 32.4402L52.4604 32.4402C38.544 36.4631 32.1269 42.571 32.1269 42.571C32.1269 42.571 33.8288 41.6426 36.6912 40.3275C44.969 36.6915 51.5448 35.6857 54.2524 35.4537C54.3114 35.4438 54.3691 35.434 54.4258 35.4243L54.4259 35.4243C54.8161 35.3579 55.1625 35.2989 55.5676 35.2989C60.2867 34.68 65.6247 34.5253 71.1948 35.1442C78.5442 35.9952 86.4351 38.1613 94.4808 42.571C94.4808 42.571 88.3692 36.7688 75.2176 32.746L75.5858 32.3253C77.836 25.7871 84.041 21.0892 91.3432 21.0892C100.545 21.0892 108.004 28.5484 108.004 37.7497C108.004 42.6056 105.926 46.9764 102.612 50.0216C100.199 43.5327 98.0463 39.6312 98.0463 39.6312C87.4822 31.7082 77.4051 31.5071 76.3911 31.5075C77.4425 31.5081 87.4986 31.7255 98.0395 39.6312C98.0395 39.6312 109.18 59.8228 109.18 84.7334C109.18 84.7334 102.604 95.9509 85.5068 96.4925C85.5068 96.4925 82.7217 93.1659 80.4009 90.2261C90.5353 87.3637 94.4034 81.02 94.4034 81.02C91.2316 83.1088 88.2145 84.5787 85.5068 85.5844C81.6387 87.209 77.9253 88.2921 74.2893 88.911C66.8625 90.3035 60.0546 89.9167 54.2524 88.8336C49.8428 87.9826 46.0521 86.7448 42.8802 85.507C41.1009 84.8108 39.1668 83.9598 37.2328 82.8767C37.1167 82.7993 37.0007 82.7413 36.8846 82.6833C36.7687 82.6253 36.6525 82.5672 36.5365 82.4899C36.3818 82.4125 36.3044 82.3352 36.2271 82.2578L36.2271 82.2578L36.2271 82.2578C34.8345 81.4842 34.0609 80.9426 34.0609 80.9426C34.0609 80.9426 37.7743 87.1316 47.5993 90.0714C45.2784 93.0112 42.416 96.4925 42.416 96.4925C25.319 95.9509 18.8206 84.7334 18.8206 84.7334C18.8206 70.7728 22.3195 58.2943 25.3955 50.0215C22.0809 46.9763 20.0034 42.6056 20.0034 37.7497C20.0034 28.5484 27.4626 21.0892 36.6639 21.0892C43.9969 21.0892 50.2235 25.8269 52.4496 32.4083ZM52.4496 32.4083L51.6996 31.5082L51.6995 31.5082L52.4497 32.4085L52.4496 32.4083Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M45.9535 104.879C41.1452 104.879 29.8141 97.3366 19.196 85.1975L36.2226 76.4098L95.9517 77.4564L109.803 85.1975C99.1852 97.3366 88.7643 104.879 83.0458 104.879C80.3856 104.879 77.8228 103.959 75.0816 102.974C71.9299 101.842 68.5423 100.625 64.4996 100.625C60.6054 100.625 56.8497 101.905 53.4587 103.061C50.668 104.012 48.1242 104.879 45.9535 104.879ZM90.865 96.7327C88.389 98.3892 84.5074 99.229 79.3279 99.229C70.6397 99.229 66.6912 95.3093 64.8969 93.528C64.7507 93.3829 64.6189 93.2519 64.4999 93.1385C64.381 93.2519 64.2492 93.3827 64.1031 93.5278C62.309 95.3089 58.3603 99.229 49.6718 99.229C44.4923 99.229 40.6107 98.3892 38.1348 96.7327C34.8179 94.5134 36.0825 90.0351 36.2127 89.574C36.2179 89.5556 36.2215 89.543 36.2226 89.5381C36.2996 89.1985 36.8187 88.9561 37.4009 88.9826C37.9836 89.0111 38.4257 89.3021 38.4062 89.6446C38.406 89.6642 38.4009 89.7027 38.3938 89.7568C38.315 90.3543 37.9861 92.8502 41.1825 92.8938L41.2176 92.8941C42.7777 92.8939 44.4341 91.3596 46.0354 89.8765C48.44 87.6486 53.9442 84.572 58.4491 84.572C62.0646 84.572 62.9538 86.1196 63.6578 87.3448C63.9204 87.8017 64.1571 88.2138 64.4999 88.4841C64.8426 88.2138 65.0794 87.8018 65.342 87.3449C66.046 86.1196 66.9354 84.572 70.5507 84.572C75.0556 84.572 80.56 87.6492 82.9647 89.8769C84.5659 91.3602 86.2218 92.8941 87.7822 92.8939L87.8176 92.8936C91.0112 92.85 90.6853 90.3583 90.606 89.7522C90.5987 89.6966 90.5935 89.6569 90.5933 89.6364C90.5735 89.2939 91.0161 89.0069 91.5988 88.9785C92.1775 88.9505 92.6999 89.1983 92.7772 89.5379C92.7783 89.5429 92.7818 89.5551 92.7871 89.574C92.9175 90.036 94.1816 94.5136 90.865 96.7327Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M44.1717 30.1504C44.2147 30.2459 44.3836 30.5276 45.0116 30.9607C45.8865 31.564 47.2906 32.1919 49.2156 32.7533C53.0377 33.8681 58.4423 34.5869 64.5002 34.5869C70.5581 34.5869 75.9627 33.8681 79.7848 32.7533C81.7098 32.1919 83.1139 31.564 83.9888 30.9607C84.6168 30.5276 84.7857 30.2459 84.8286 30.1504C84.7857 30.0549 84.6168 29.7731 83.9888 29.3401C83.1139 28.7368 81.7098 28.1089 79.7848 27.5474C75.9627 26.4326 70.5581 25.7139 64.5002 25.7139C58.4423 25.7139 53.0377 26.4326 49.2156 27.5474C47.2906 28.1089 45.8865 28.7368 45.0116 29.3401C44.3836 29.7731 44.2147 30.0549 44.1717 30.1504ZM48.0329 23.4924C52.3368 22.2371 58.1583 21.4899 64.5002 21.4899C70.8421 21.4899 76.6636 22.2371 80.9675 23.4924C83.1054 24.116 84.9893 24.8992 86.3867 25.8627C87.7187 26.7813 89.0641 28.1948 89.0641 30.1504C89.0641 32.106 87.7187 33.5195 86.3867 34.438C84.9893 35.4016 83.1054 36.1847 80.9675 36.8083C76.6636 38.0636 70.8421 38.8108 64.5002 38.8108C58.1583 38.8108 52.3368 38.0636 48.0329 36.8083C45.895 36.1847 44.0111 35.4016 42.6137 34.438C41.2817 33.5195 39.9363 32.106 39.9363 30.1504C39.9363 28.1948 41.2817 26.7813 42.6137 25.8627C44.0111 24.8992 45.895 24.116 48.0329 23.4924Z" fill="white"/>\n<path d="M31.7229 40.181C32.6831 39.1214 34.6974 37.5702 37.9277 36.054C38.7084 36.958 39.561 37.637 40.2408 38.1044C42.1661 39.4281 44.5366 40.3666 46.8949 41.0524C51.6948 42.4482 57.9515 43.2238 64.5971 43.2238C71.2426 43.2238 77.4994 42.4482 82.2993 41.0524C84.6576 40.3666 87.0281 39.4281 88.9533 38.1044C89.6309 37.6386 90.4799 36.9626 91.2585 36.0632C94.1013 37.4367 96.047 38.9041 97.2916 40.181L96.2614 46.7112L33.4155 46.7112L31.7229 40.181Z" fill="white"/>\n<ellipse cx="64.5" cy="14.2906" rx="16.9959" ry="5.68925" fill="white"/>\n<path d="M64.5001 31.3584C75.252 31.3584 83.9682 28.8112 83.9682 25.6691H45.032C45.032 28.8112 53.7481 31.3584 64.5001 31.3584Z" fill="white"/>\n<rect x="47.5042" y="14.1333" width="33.9917" height="11.9358" fill="white"/>\n<path d="M65.9081 45.0059C80.2352 45.0059 87.0385 40.1911 95.363 44.3964C93.5368 42.7785 91.7428 41.2724 89.6756 39.8929L92.1999 37.0474C95.4205 38.7938 97.4017 40.3313 97.4017 40.3313C97.4017 40.3313 107.935 55.4701 109.803 85.1869L107.914 86.4471L95.363 80.1771L34.3903 79.1871L22.5764 88.0311L19.1968 85.1869C21.0089 55.4701 31.5419 40.3313 31.5419 40.3313C31.5419 40.3313 33.4731 38.7968 36.7192 37.0474L39.038 40.0972C37.0515 41.4404 35.2761 42.8943 33.5806 44.3964C41.9051 40.1911 51.5809 45.0059 65.9081 45.0059Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M45.4535 102.879C40.6452 102.879 29.3141 95.3366 18.696 83.1975L35.7226 74.4098L95.4517 75.4564L109.303 83.1975C98.6852 95.3366 88.2643 102.879 82.5458 102.879C79.8856 102.879 77.3228 101.959 74.5816 100.974C71.4299 99.8415 68.0423 98.6246 63.9996 98.6246C60.1054 98.6246 56.3497 99.9048 52.9587 101.061C50.168 102.012 47.6242 102.879 45.4535 102.879ZM90.365 94.7327C87.889 96.3892 84.0074 97.229 78.8279 97.229C70.1397 97.229 66.1912 93.3093 64.3969 91.528C64.2507 91.3829 64.1189 91.2519 63.9999 91.1385C63.881 91.2519 63.7492 91.3827 63.6031 91.5278C61.809 93.3089 57.8603 97.229 49.1718 97.229C43.9923 97.229 40.1107 96.3892 37.6348 94.7327C34.3179 92.5134 35.5825 88.0351 35.7127 87.574C35.7179 87.5556 35.7215 87.543 35.7226 87.5381C35.7996 87.1985 36.3187 86.9561 36.9009 86.9826C37.4836 87.0111 37.9257 87.3021 37.9062 87.6446C37.906 87.6642 37.9009 87.7027 37.8938 87.7568C37.815 88.3543 37.4861 90.8502 40.6825 90.8938L40.7176 90.8941C42.2777 90.8939 43.9341 89.3596 45.5354 87.8765C47.94 85.6486 53.4442 82.572 57.9491 82.572C61.5646 82.572 62.4538 84.1196 63.1578 85.3448C63.4204 85.8017 63.6571 86.2138 63.9999 86.4841C64.3426 86.2138 64.5794 85.8018 64.842 85.3449C65.546 84.1196 66.4354 82.572 70.0507 82.572C74.5556 82.572 80.06 85.6492 82.4647 87.8769C84.0659 89.3602 85.7218 90.8941 87.2822 90.8939L87.3176 90.8936C90.5112 90.85 90.1853 88.3583 90.106 87.7522C90.0987 87.6966 90.0935 87.6569 90.0933 87.6364C90.0735 87.2939 90.5161 87.0069 91.0988 86.9785C91.6775 86.9505 92.1999 87.1983 92.2772 87.5379C92.2783 87.5429 92.2818 87.5551 92.2871 87.574C92.4175 88.036 93.6816 92.5136 90.365 94.7327Z" fill="white"/>\n<path d="M18.707 83.1875C18.707 58.2085 29.8668 37.9196 29.8668 37.9196C41.0375 29.5415 51.6653 29.7743 51.6653 29.7743L52.441 30.7052C38.4776 34.739 32.0389 40.8674 32.0389 40.8674C32.0389 40.8674 33.7455 39.9365 36.6158 38.6178C44.9163 34.9718 51.5101 33.9633 54.2252 33.7306C54.2843 33.7207 54.3421 33.7109 54.399 33.7012L54.3992 33.7012C54.7904 33.6345 55.1377 33.5754 55.544 33.5754C60.276 32.9548 65.6287 32.7997 71.2141 33.4203C78.5836 34.2736 86.4963 36.4457 94.564 40.8674C94.564 40.8674 88.4356 35.0493 75.248 31.0155L76.334 29.7743C76.334 29.7743 86.9617 29.5415 98.1325 37.9196C98.1325 37.9196 109.298 58.2199 109.298 83.1989L93.777 77.6545H38.9303L18.707 83.1875Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M103.667 51.1629C93.9034 47.6529 80.0521 45.3761 64.4881 45.3761C48.924 45.3761 35.0727 47.6529 25.3088 51.1629C24.8398 51.3315 24.3828 51.5021 23.938 51.6742C24.4056 49.9418 26.1035 44.8802 29.1546 38.493C39.2499 35.8712 51.4562 34.3761 64.4881 34.3761C77.6104 34.3761 89.8956 35.892 100.031 38.5478C103.084 44.9855 104.657 49.9873 105.062 51.6835C104.61 51.5082 104.145 51.3346 103.667 51.1629Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M64.4999 29.5951L56.2634 22.1639L49.5546 29.5952L41.9067 24.6283L38.0156 30.9652L27.9526 27.8471L28.8807 29.5952L31.2003 34.9025C40.9874 32.6377 52.4125 31.3761 64.488 31.3761C76.572 31.3761 88.005 32.6395 97.7973 34.9075L100.119 29.5952L101.047 27.8471L90.9841 30.9652L87.0931 24.6283L79.4451 29.5952L72.7364 22.1639L64.4999 29.5951Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M24.2645 54.7647L25.0208 54.472C25.4425 54.3087 25.8767 54.1467 26.3236 53.986C35.6843 50.6209 49.1765 48.3761 64.488 48.3761C79.7994 48.3761 93.2916 50.6209 102.652 53.986C103.107 54.1496 103.549 54.3146 103.978 54.4808L104.739 54.7759C107.299 62.7458 109.68 73.2523 109.68 84.767C109.68 84.767 103.104 95.9846 86.0068 96.5261C86.0068 96.5261 83.2217 93.1995 80.9009 90.2598C91.0353 87.3974 94.9034 81.0537 94.9034 81.0537C91.7316 83.1424 88.7145 84.6123 86.0068 85.618C82.1387 87.2426 78.4253 88.3257 74.7893 88.9446C67.3625 90.3371 60.5546 89.9503 54.7524 88.8672C50.3428 88.0163 46.5521 86.7785 43.3802 85.5407C41.6009 84.8444 39.6668 83.9934 37.7328 82.9104C37.6167 82.833 37.5007 82.775 37.3846 82.717C37.2687 82.659 37.1525 82.6009 37.0365 82.5235C36.8818 82.4462 36.8044 82.3688 36.7271 82.2915L36.7271 82.2915C35.3345 81.5178 34.5609 80.9763 34.5609 80.9763C34.5609 80.9763 38.2743 87.1653 48.0993 90.105C45.7784 93.0448 42.916 96.5261 42.916 96.5261C25.819 95.9846 19.3206 84.767 19.3206 84.767C19.3206 73.2469 21.7031 62.736 24.2645 54.7647Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5669 53.3536L21.4083 53.8469C19.2435 60.584 17.1896 69.129 16.5355 78.602L9.92035 72.9163L18.5441 64.0486L7.79725 67.8944L4.71802 57.1942L21.5669 53.3536Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<ellipse cx="89.0098" cy="37.1078" rx="8.07738" ry="6.95264" transform="rotate(15 89.0098 37.1078)" fill="white"/>\n<path d="M71.1213 24.1184C71.5064 22.6813 73.2699 22.1528 74.3819 23.1413L85.0576 32.6309C85.6231 33.1336 85.8565 33.9125 85.6607 34.6434L84.9024 37.4734C84.6936 38.2525 84.0372 38.83 83.2378 38.9378L69.5238 40.7874C68.1085 40.9783 66.955 39.6671 67.3246 38.2877L71.1213 24.1184Z" fill="white"/>\n<path d="M110.996 34.8029C111.381 33.3657 110.118 32.0263 108.661 32.3263L94.6708 35.2068C93.9297 35.3594 93.3382 35.9172 93.1423 36.6481L92.384 39.478C92.1753 40.2572 92.455 41.0855 93.0933 41.5785L104.045 50.0374C105.175 50.9103 106.83 50.3516 107.2 48.9721L110.996 34.8029Z" fill="white"/>\n<path d="M64.4267 37.5112C63.5027 40.9598 66.3865 44.2376 69.9247 43.7604L79.9833 42.4038C81.5246 44.4619 83.8306 46.0237 86.4339 46.7213C89.0372 47.4188 91.8149 47.2192 94.1788 46.2077L102.211 52.4116C102.644 52.7458 103.107 52.9961 103.585 53.1679C106.378 61.3352 109.18 72.64 109.18 85.1315C109.18 85.1315 102.604 96.349 85.5068 96.8906C85.5068 96.8906 82.7217 93.564 80.4009 90.6242C90.5353 87.7618 94.4034 81.4181 94.4034 81.4181C91.2316 83.5069 88.2145 84.9768 85.5068 85.9825C81.6387 87.6071 77.9253 88.6902 74.2893 89.3091C66.8625 90.7016 60.0546 90.3148 54.2524 89.2317C49.8428 88.3807 46.0521 87.1429 42.8802 85.9051C41.1009 85.2089 39.1668 84.3579 37.2328 83.2748C37.1167 83.1975 37.0007 83.1395 36.8846 83.0814C36.7687 83.0234 36.6525 82.9653 36.5365 82.888C36.3818 82.8106 36.3044 82.7333 36.2271 82.6559C34.8345 81.8823 34.0609 81.3408 34.0609 81.3408C34.0609 81.3408 37.7743 87.5297 47.5993 90.4695C45.2784 93.4093 42.416 96.8906 42.416 96.8906C25.319 96.349 18.8206 85.1315 18.8206 85.1315C18.8206 60.2209 29.9607 40.0294 29.9607 40.0294C41.1009 31.6742 51.6995 31.9063 51.6995 31.9063L52.4731 32.8347C38.5479 36.8575 32.1269 42.9691 32.1269 42.9691C32.1269 42.9691 33.8288 42.0408 36.6912 40.7256C44.969 37.0896 51.5448 36.0839 54.2524 35.8518C54.3114 35.842 54.3691 35.8321 54.4258 35.8225L54.4259 35.8225C54.8161 35.756 55.1624 35.6971 55.5676 35.6971C58.5203 35.3098 61.7152 35.1043 65.0577 35.1563L64.4267 37.5112Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M78.3433 77.4806C74.0916 77.4806 70.645 73.5338 70.645 68.6652C70.645 66.5714 71.2825 64.648 72.3473 63.1358C74.6137 64.5505 80.5256 67.6369 86.0415 68.6652C86.0415 73.5338 82.5949 77.4806 78.3433 77.4806Z" fill="#4F5660"/>\n<path d="M49.6567 77.4806C53.9084 77.4806 57.355 73.5338 57.355 68.6652C57.355 66.5714 56.7175 64.648 55.6527 63.1358C53.3863 64.5505 47.4744 67.6369 41.9585 68.6652C41.9585 73.5338 45.4051 77.4806 49.6567 77.4806Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M21.9824 59.8864C18.6724 74.2939 18.8715 74.9295 18.8715 84.0365C19.3058 85.7851 23.3427 89.543 25.031 91.4597C25.3344 91.8041 25.2745 92.096 24.5984 94.0069C16.903 92.532 13.3404 89.7882 10.5793 88.098L21.9824 59.8864Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M106.981 59.8864C110.291 74.2939 110.178 74.9295 110.178 84.0365C109.744 85.7851 105.707 89.543 104.019 91.4597C103.715 91.8041 103.775 92.096 104.451 94.0069C112.147 92.532 115.709 89.7882 118.47 88.098L106.981 59.8864Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M64.9889 43.7263C64.9621 43.7298 64.9349 43.7332 64.9075 43.7365C60.0742 43.7263 51.044 43.2543 47.6746 35.8075C43.7773 27.1941 37.0222 19.6014 34.2754 18.4316C34.2754 18.4316 37.6282 16.2603 42.0824 15.7318C46.5366 15.2033 50.3614 16.2239 50.3614 16.2239C50.381 16.4486 50.4012 16.6888 50.4226 16.9427C50.837 21.8564 51.6857 31.92 56.5836 34.6236C58.8603 35.8803 60.7906 35.8552 63.4969 35.8201C63.9687 35.8139 64.464 35.8075 64.9889 35.8075V43.7263ZM64.9889 43.7263C65.0157 43.7298 65.0428 43.7332 65.0702 43.7365C69.9035 43.7263 78.9338 43.2543 82.3032 35.8075C86.2004 27.1941 92.9555 19.6014 95.7023 18.4316C95.7023 18.4316 92.3495 16.2603 87.8953 15.7318C83.4411 15.2033 79.6163 16.2239 79.6163 16.2239C79.5967 16.4486 79.5765 16.6888 79.5551 16.9427C79.1407 21.8564 78.292 31.92 73.3941 34.6236C71.1174 35.8803 69.1871 35.8552 66.4808 35.8201C66.009 35.8139 65.5137 35.8075 64.9889 35.8075V43.7263Z" fill="white"/>\n<path d="M30.5224 43.4055C30.5224 43.4055 37.6498 41.7729 47.4287 40.6437C49.5378 43.0184 52.2334 44.4424 54.8705 45.286C58.5959 46.4776 62.4331 46.5925 64.9011 46.5977L64.9041 46.5981L64.989 46.5979L65.0738 46.5981L65.0769 46.5977C67.5449 46.5925 71.3821 46.4776 75.1075 45.286C77.723 44.4493 80.3961 43.0416 82.4975 40.7017C91.9919 41.828 98.4781 43.4055 98.4781 43.4055C101.412 49.7449 107.59 65.2448 107.59 83.3619C107.59 83.3619 101.319 94.0606 85.0123 94.5771C85.0123 94.5771 82.3561 91.4044 80.1425 88.6006C89.8083 85.8706 93.4975 79.8203 93.4975 79.8203C90.4723 81.8124 87.5947 83.2143 85.0123 84.1735C81.3231 85.723 77.7814 86.756 74.3136 87.3463C67.2303 88.6744 60.7372 88.3055 55.2034 87.2725C50.9977 86.4608 47.3823 85.2803 44.3571 84.0997C42.6601 83.4357 40.8155 82.6241 38.9708 81.5911C38.8602 81.5173 38.7495 81.462 38.6388 81.4066C38.5282 81.3513 38.4174 81.2959 38.3068 81.2222C38.1592 81.1484 38.0854 81.0746 38.0116 81.0008C36.6835 80.263 35.9457 79.7465 35.9457 79.7465C35.9457 79.7465 39.4873 85.6492 48.8579 88.453C46.6444 91.2568 43.9144 94.5771 43.9144 94.5771C27.608 94.0606 21.4102 83.3619 21.4102 83.3619C21.4102 65.2448 27.5884 49.7449 30.5224 43.4055Z" fill="white"/>\n<path d="M75.2701 26.3391C71.4838 25.9245 67.8659 25.8172 64.989 25.8955C62.112 25.8172 58.4941 25.9245 54.7077 26.3391C55.0915 27.7608 55.5586 29.0176 56.1166 30.0262C56.7337 31.1416 57.3705 31.7897 57.9664 32.1186C59.5005 32.9653 60.704 32.9948 63.4599 32.9591L63.4673 32.959L63.4676 32.959C63.935 32.9529 64.446 32.9463 64.9889 32.9463C65.532 32.9463 66.0427 32.9529 66.5102 32.959L66.5179 32.9591C69.2738 32.9948 70.4773 32.9653 72.0114 32.1186C72.6073 31.7897 73.2441 31.1416 73.8612 30.0262C74.4192 29.0176 74.8864 27.7608 75.2701 26.3391Z" fill="white"/>\n<path d="M40.8621 29.5613C35.4404 31.8023 31.478 35.2705 31.478 40.4977C31.478 40.4977 37.2233 39.1294 45.5896 38.0317C45.4057 37.6967 45.2314 37.3487 45.0678 36.987C43.8815 34.3653 42.4052 31.8287 40.8621 29.5613Z" fill="white"/>\n<path d="M84.3882 38.0317C92.7545 39.1294 98.4998 40.4977 98.4998 40.4977C98.4998 35.2705 94.5374 31.8023 89.1157 29.5613C87.5726 31.8287 86.0963 34.3653 84.91 36.987C84.7464 37.3487 84.5722 37.6967 84.3882 38.0317Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M50.5265 60.2734C46.1085 60.2734 42.6206 64.1489 42.6206 68.877C42.6206 73.6051 46.186 77.4805 50.5265 77.4805C54.9446 77.4805 58.4325 73.6051 58.4325 68.877C58.51 64.1489 54.9446 60.2734 50.5265 60.2734Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2751 56.7292C40.7514 58.5924 37.5923 63.3486 37.5923 68.877C37.5923 74.4128 40.8303 79.1743 45.3407 81.0322C42.3969 77.955 40.5552 73.6362 40.5552 68.877C40.5552 64.1216 42.3539 59.8059 45.2751 56.7292Z" fill="#4F5660"/>\n<path d="M78.8187 60.2734C83.2367 60.2734 86.7246 64.1489 86.7246 68.877C86.7246 73.6051 83.1592 77.4805 78.8187 77.4805C74.4006 77.4805 70.9127 73.6051 70.9127 68.877C70.8352 64.1489 74.4006 60.2734 78.8187 60.2734Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M84.0701 56.7292C88.5938 58.5924 91.7529 63.3486 91.7529 68.877C91.7529 74.4128 88.5149 79.1743 84.0045 81.0322C86.9483 77.955 88.79 73.6362 88.79 68.877C88.79 64.1216 86.9913 59.8059 84.0701 56.7292Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M56.0676 35.2989C58.7073 34.9527 61.5407 34.7518 64.5 34.7502C67.4593 34.7518 70.2927 34.9527 72.9324 35.2989C73.3375 35.2989 73.6839 35.3579 74.0741 35.4243L74.0742 35.4243L74.1518 35.4375L74.2476 35.4537C76.9552 35.6857 83.531 36.6915 91.8088 40.3275C94.6712 41.6426 96.3731 42.571 96.3731 42.571C96.3731 42.571 89.9521 36.4594 76.0269 32.4365L76.8005 31.5082C76.8005 31.5082 87.3991 31.2761 98.5393 39.6312C98.5393 39.6312 109.679 59.8228 109.679 84.7334C109.679 84.7334 103.181 95.9509 86.084 96.4924C86.084 96.4924 83.2216 93.0111 80.9007 90.0714C85.4199 88.8983 88.9781 87.3116 91.7735 85.4931L95.8847 89.4252L93.9226 83.9346C95.4995 82.6587 96.7678 81.3038 97.7847 79.9222L102.229 81.631L99.0752 77.931C99.8454 76.5705 100.402 75.2084 100.799 73.8933L104.483 73.9824L101.311 71.8072C101.533 70.6432 101.641 69.5427 101.677 68.5449L104.572 67.9116L101.67 66.7485C101.579 64.696 101.231 63.3924 101.231 63.3924C101.231 63.3924 101.534 64.656 101.331 66.753L98.386 67.3976L101.072 68.4741C100.886 69.3873 100.604 70.3985 100.187 71.4863L96.4828 71.3966L99.3577 73.3678C98.8172 74.4534 98.1399 75.5952 97.2932 76.7759L93.0839 75.1575L95.9439 78.5127C94.9876 79.6538 93.868 80.8219 92.5584 82.0029L88.6376 78.253L90.4489 83.3216C88.7904 84.1968 87.148 84.909 85.6198 85.507C82.4479 86.7448 78.6572 87.9826 74.2476 88.8336C71.2491 89.3933 67.9822 89.767 64.5 89.8054C61.0178 89.767 57.7509 89.3933 54.7524 88.8336C50.3428 87.9826 46.5521 86.7448 43.3802 85.507C41.852 84.909 40.2096 84.1969 38.5511 83.3216L40.3624 78.253L36.4416 82.0029C35.132 80.8219 34.0124 79.6538 33.0561 78.5127L35.9161 75.1575L31.7068 76.7759C30.8601 75.5952 30.1828 74.4534 29.6423 73.3678L32.5172 71.3966L28.8135 71.4863C28.3961 70.3985 28.1144 69.3873 27.9284 68.4741L30.614 67.3976L27.6688 66.753C27.4658 64.656 27.7693 63.3924 27.7693 63.3924C27.7693 63.3924 27.4213 64.696 27.3296 66.7485L24.4282 67.9116L27.3225 68.5449C27.3591 69.5427 27.4672 70.6432 27.6894 71.8072L24.5169 73.9824L28.2009 73.8933C28.5976 75.2084 29.1546 76.5705 29.9248 77.931L26.7709 81.631L31.2153 79.9222C32.2322 81.3038 33.5005 82.6587 35.0774 83.9346L33.1153 89.4252L37.2265 85.4931C40.0219 87.3116 43.5801 88.8983 48.0993 90.0714C45.7784 93.0111 42.916 96.4924 42.916 96.4924C25.819 95.9509 19.3206 84.7334 19.3206 84.7334C19.3206 59.8228 30.4607 39.6312 30.4607 39.6312C41.6009 31.2761 52.1995 31.5082 52.1995 31.5082L52.9731 32.4365C39.0479 36.4594 32.6269 42.571 32.6269 42.571C32.6269 42.571 34.3288 41.6426 37.1912 40.3275C45.469 36.6915 52.0448 35.6857 54.7524 35.4537L54.7882 35.4477L54.9258 35.4243L54.9259 35.4243C55.3161 35.3579 55.6624 35.2989 56.0676 35.2989Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M72.2041 58.8754C70.7861 60.0199 69.8706 61.3933 69.4783 62.2558L67.1392 61.3109C67.6731 60.1367 68.8124 58.455 70.5487 57.0536C72.3015 55.6388 74.7115 54.4739 77.7422 54.4739C80.7678 54.4739 83.2325 55.6349 85.0538 57.0352C86.8622 58.4256 88.0958 60.0946 88.6969 61.2585L86.4087 62.3083C85.9578 61.4354 84.948 60.0493 83.4451 58.8938C81.955 57.7481 80.0404 56.8724 77.7422 56.8724C75.449 56.8724 73.6055 57.7442 72.2041 58.8754Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M60.5592 63.3139C51.6027 66.7899 43.4745 64.7924 40.3857 63.2646L41.6024 60.8049C44.1028 62.0416 51.4269 63.9145 59.5663 60.7556L60.5592 63.3139Z" fill="#4F5660"/>\n<path d="M41.6206 68.877C41.6206 73.6051 45.186 77.4806 49.5265 77.4806C53.9446 77.4806 57.4325 73.6051 57.4325 68.877C57.469 66.6497 56.6971 64.6116 55.4085 63.0788C53.9616 61.3577 52.227 63.8771 49.8902 63.8771C47.3949 63.8771 44.8326 61.5098 43.3916 63.4377C42.2812 64.9232 41.6206 66.8194 41.6206 68.877Z" fill="#4F5660"/>\n<path d="M77.8175 60.2735C73.3995 60.2735 69.9115 64.149 69.9115 68.877C69.9115 73.6051 73.4769 77.4806 77.8175 77.4806C82.2355 77.4806 85.7234 73.6051 85.7234 68.877C85.7234 64.149 82.2355 60.2735 77.8175 60.2735Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M64.5001 80.6709C71.1121 80.6709 76.4722 74.5892 76.4722 67.0872C76.4722 59.5852 71.1121 53.5035 64.5001 53.5035C57.8881 53.5035 52.5281 59.5852 52.5281 67.0872C52.5281 74.5892 57.8881 80.6709 64.5001 80.6709ZM64.2702 66.8572C67.1947 66.8572 69.5655 64.1771 69.5655 60.8712C69.5655 57.5652 67.1947 54.8851 64.2702 54.8851C61.3456 54.8851 58.9749 57.5652 58.9749 60.8712C58.9749 64.1771 61.3456 66.8572 64.2702 66.8572Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M73.6246 60.2734C69.2066 60.2734 65.7188 64.1489 65.7188 68.877C65.7188 73.6051 69.2841 77.4805 73.6246 77.4805C78.0427 77.4805 81.5306 73.6051 81.5306 68.877C81.5306 64.1489 78.0427 60.2734 73.6246 60.2734Z" fill="#4F5660"/>\n<path d="M54.3744 60.2734C49.9563 60.2734 46.4685 64.1489 46.4685 68.877C46.4685 73.6051 50.0339 77.4805 54.3744 77.4805C58.7924 77.4805 62.2804 73.6051 62.2804 68.877C62.3579 64.1489 58.7924 60.2734 54.3744 60.2734Z" fill="#4F5660"/>\n<path d="M37.3132 61.0043C34.1181 61.0043 31.5957 63.807 31.5957 67.2263C31.5957 70.6456 34.1741 73.4483 37.3132 73.4483C40.5083 73.4483 43.0307 70.6456 43.0307 67.2263C43.0868 63.807 40.5083 61.0043 37.3132 61.0043Z" fill="#4F5660"/>\n<path d="M90.6853 61.0043C87.4902 61.0043 84.9678 63.807 84.9678 67.2263C84.9678 70.6456 87.5463 73.4483 90.6853 73.4483C93.8804 73.4483 96.4033 70.6456 96.4033 67.2263C96.4593 63.807 93.8804 61.0043 90.6853 61.0043Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M85.9246 62.6241L87.0354 66.7697L72.8518 70.5701L70.8889 66.6559L85.9246 62.6241Z" fill="#4F5660"/>\n<path d="M85.9246 75.13L87.0354 70.9845L71.4425 66.8064L70.4206 70.9757L85.9246 75.13Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M79.1705 68.8771L70.8794 66.6555L69.3581 67.0632L68.8721 68.8771L69.3581 70.691L70.8794 71.0987L79.1705 68.8771Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M79.1705 68.8771L70.8794 66.6555L69.3581 67.0632L68.8721 68.8771L69.3581 70.691L70.8794 71.0987L79.1705 68.8771Z" fill="#4F5660"/>\n<path d="M42.0752 62.6241L40.9644 66.7697L55.1479 70.5701L57.1109 66.6559L42.0752 62.6241Z" fill="#4F5660"/>\n<path d="M42.0752 75.13L40.9644 70.9845L56.5573 66.8064L57.5792 70.9757L42.0752 75.13Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M48.8293 68.8771L57.1203 66.6555L58.6416 67.0632L59.1277 68.8771L58.6416 70.691L57.1203 71.0987L48.8293 68.8771Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M48.8293 68.8771L57.1203 66.6555L58.6416 67.0632L59.1277 68.8771L58.6416 70.691L57.1203 71.0987L48.8293 68.8771Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M48.9901 59.3891C49.3755 58.7252 50.3343 58.7252 50.7197 59.3891L53.2243 63.7033C53.3658 63.947 53.6035 64.1197 53.8789 64.1789L58.756 65.2278C59.5065 65.3892 59.8028 66.301 59.2905 66.8728L55.9613 70.588C55.7733 70.7978 55.6825 71.0772 55.7113 71.3575L56.2209 76.3199C56.2993 77.0836 55.5236 77.6472 54.8216 77.3366L50.2595 75.3185C50.0018 75.2045 49.708 75.2045 49.4504 75.3185L44.8882 77.3366C44.1862 77.6472 43.4105 77.0836 43.4889 76.3199L43.9985 71.3575C44.0273 71.0772 43.9365 70.7978 43.7485 70.588L40.4194 66.8728C39.9071 66.301 40.2033 65.3892 40.9539 65.2278L45.8309 64.1789C46.1064 64.1197 46.344 63.947 46.4855 63.7033L48.9901 59.3891Z" fill="#4F5660"/>\n<path d="M77.2801 59.3891C77.6656 58.7252 78.6244 58.7252 79.0098 59.3891L81.5144 63.7033C81.6558 63.947 81.8935 64.1197 82.169 64.1789L87.046 65.2278C87.7965 65.3892 88.0928 66.301 87.5805 66.8728L84.2514 70.588C84.0634 70.7978 83.9726 71.0772 84.0014 71.3575L84.5109 76.3199C84.5894 77.0836 83.8137 77.6472 83.1116 77.3366L78.5495 75.3185C78.2918 75.2045 77.9981 75.2045 77.7404 75.3185L73.1783 77.3366C72.4762 77.6472 71.7006 77.0836 71.779 76.3199L72.2886 71.3575C72.3173 71.0772 72.2265 70.7978 72.0385 70.588L68.7094 66.8728C68.1971 66.301 68.4934 65.3892 69.2439 65.2278L74.1209 64.1789C74.3964 64.1197 74.6341 63.947 74.7755 63.7033L77.2801 59.3891Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M63.4297 64.7508C62.5956 64.8234 61.9049 65.0752 61.5849 65.2411L60.0969 62.3713C60.7839 62.0151 61.884 61.6404 63.1494 61.5303C64.4279 61.419 65.9771 61.5704 67.4531 62.3953L65.876 65.2171C65.1099 64.789 64.2507 64.6793 63.4297 64.7508Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M42.4928 58.5534C39.6495 58.4309 37.2776 60.7029 37.2776 63.5487V70.511C37.2776 73.6118 40.0708 75.9649 43.1265 75.4384L58.9738 72.7081C60.8926 72.3775 62.2947 70.7132 62.2947 68.7661V62.2799C62.2947 60.6732 61.0289 59.3518 59.4238 59.2826L42.4928 58.5534ZM51.5666 60.857C50.6751 60.8111 49.9152 61.4966 49.8693 62.3881C49.8234 63.2796 50.5088 64.0395 51.4003 64.0854L58.323 64.4419C59.2145 64.4878 59.9744 63.8024 60.0203 62.9109C60.0662 62.0194 59.3807 61.2595 58.4892 61.2136L51.5666 60.857Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M85.5075 58.5534C88.3507 58.4309 90.7227 60.7029 90.7227 63.5487V70.511C90.7227 73.6118 87.9295 75.9649 84.8737 75.4384L69.0264 72.7081C67.1076 72.3775 65.7056 70.7132 65.7056 68.7661V62.2799C65.7056 60.6732 66.9713 59.3518 68.5765 59.2826L85.5075 58.5534ZM78.5968 60.6961C77.7052 60.7387 77.0169 61.4961 77.0596 62.3877C77.1022 63.2794 77.8596 63.9676 78.7512 63.925L85.6751 63.594C86.5668 63.5513 87.2551 62.7939 87.2124 61.9023C87.1698 61.0106 86.4124 60.3224 85.5208 60.365L78.5968 60.6961Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M92.392 69.3759C92.2098 63.6001 86.6243 58.501 80.8853 58.6822L80.8617 58.6829L80.838 58.6829C75.8287 58.6829 70.324 62.2682 70.324 68.8921C70.324 74.3134 74.3654 77.2539 78.5181 77.1237C82.7185 76.9782 85.8275 73.9873 85.7001 69.9497C85.6209 67.4387 83.3105 65.2712 80.8853 65.3477C79.5912 65.3885 78.6388 65.845 78.0199 66.5067C77.4008 67.1687 77.0006 68.159 77.0424 69.4813C77.0635 70.1498 77.795 70.8613 78.6961 70.8613C78.8649 70.8613 79.1463 70.7775 79.3675 70.5841C79.5516 70.4232 79.6773 70.2065 79.6666 69.8675C79.6405 69.0395 80.2906 68.3471 81.1186 68.321C81.9466 68.2949 82.639 68.9449 82.6651 69.7729C82.7515 72.5076 80.3738 73.8613 78.6961 73.8613C76.5659 73.8613 74.1275 72.2279 74.0439 69.576C73.9808 67.5779 74.5922 65.7798 75.8288 64.4575C77.0657 63.1351 78.8131 62.4116 80.7907 62.3492C84.909 62.2192 88.5683 65.7253 88.6986 69.8551C88.8855 75.7779 84.2314 79.9291 78.6187 80.122L78.6145 80.1221C72.9526 80.3008 67.324 76.1872 67.324 68.8921C67.324 60.1998 74.61 55.6943 80.8144 55.6829C88.1538 55.4654 95.1548 61.8109 95.3906 69.2813C95.4167 70.1093 94.7666 70.8017 93.9386 70.8278C93.1106 70.854 92.4182 70.2039 92.392 69.3759Z" fill="#010202"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M36.6082 69.3759C36.7905 63.6001 42.376 58.501 48.1149 58.6822L48.1386 58.6829L48.1622 58.6829C53.1716 58.6829 58.6763 62.2682 58.6763 68.8921C58.6763 74.3134 54.6348 77.2539 50.4821 77.1237C46.2817 76.9782 43.1727 73.9873 43.3001 69.9497C43.3794 67.4387 45.6897 65.2712 48.1149 65.3477C49.409 65.3885 50.3614 65.845 50.9803 66.5067C51.5994 67.1687 51.9996 68.159 51.9579 69.4813C51.9368 70.1498 51.2052 70.8613 50.3041 70.8613C50.1353 70.8613 49.8539 70.7775 49.6327 70.5841C49.4487 70.4232 49.3229 70.2065 49.3336 69.8675C49.3597 69.0395 48.7097 68.3471 47.8817 68.321C47.0536 68.2949 46.3612 68.9449 46.3351 69.7729C46.2488 72.5076 48.6265 73.8613 50.3041 73.8613C52.4344 73.8613 54.8727 72.2279 54.9564 69.576C55.0194 67.5779 54.408 65.7798 53.1714 64.4575C51.9346 63.1351 50.1872 62.4116 48.2095 62.3492C44.0912 62.2192 40.4319 65.7253 40.3016 69.8551C40.1147 75.7779 44.7689 79.9291 50.3815 80.122L50.3857 80.1221C56.0476 80.3008 61.6763 76.1872 61.6763 68.8921C61.6763 60.1998 54.3902 55.6943 48.1858 55.6829C40.8465 55.4654 33.8454 61.8109 33.6097 69.2813C33.5836 70.1093 34.2336 70.8017 35.0616 70.8278C35.8896 70.854 36.5821 70.2039 36.6082 69.3759Z" fill="#010202"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M42.4935 31.5075C42.4935 31.5075 45.2785 34.8341 47.5994 37.7739L49.2852 40.065C50.7763 39.6614 52.2499 39.3377 53.711 39.089C61.1378 37.6965 67.9456 38.0834 73.7478 39.1664C75.4351 39.492 77.0317 39.8743 78.5377 40.2915L80.401 37.9286C82.7218 34.9889 85.5842 31.5076 85.5842 31.5076C102.681 32.0491 109.18 43.2666 109.18 43.2666C109.18 68.1772 98.0395 88.3688 98.0395 88.3688C86.8994 96.7239 76.3008 96.4918 76.3008 96.4918L75.5271 95.5635L73.1599 92.6429C72.9237 92.6773 72.69 92.7011 72.4326 92.7011C67.7135 93.32 62.3755 93.4747 56.8055 92.8558C56.2183 92.7878 55.6276 92.7114 55.0337 92.6262L52.7826 95.254L51.6996 96.4918C51.6996 96.4918 41.1009 96.7239 29.9608 88.3688C29.9608 88.3688 18.8206 68.1772 18.8206 43.2666C18.8206 43.2666 25.3964 32.0491 42.4935 31.5075Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M85.5068 96.4924C85.5068 96.4924 82.7217 93.1659 80.4009 90.2261L78.7151 87.935C77.224 88.3386 75.7504 88.6622 74.2893 88.9109C66.8625 90.3035 60.0546 89.9166 54.2524 88.8336C52.5652 88.508 50.9685 88.1257 49.4625 87.7085L47.5993 90.0714C45.2784 93.0111 42.416 96.4924 42.416 96.4924C25.319 95.9509 18.8206 84.7334 18.8206 84.7334C18.8206 59.8228 29.9607 39.6312 29.9607 39.6312C41.1009 31.2761 51.6995 31.5082 51.6995 31.5082L52.4731 32.4365L54.8403 35.3571C55.0765 35.3227 55.3102 35.2989 55.5676 35.2989C60.2867 34.68 65.6247 34.5253 71.1948 35.1442C71.782 35.2122 72.3726 35.2886 72.9665 35.3738L75.2176 32.746L76.3007 31.5082C76.3007 31.5082 86.8993 31.2761 98.0395 39.6312C98.0395 39.6312 109.18 59.8228 109.18 84.7334C109.18 84.7334 102.604 95.9509 85.5068 96.4924Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M49.8545 62.5931C45.4365 62.5931 41.9486 66.4686 41.9486 71.1967C41.9486 75.9248 45.514 79.8002 49.8545 79.8002C54.2726 79.8002 57.7605 75.9248 57.7605 71.1967C57.838 66.4686 54.2726 62.5931 49.8545 62.5931Z" fill="#4F5660"/>\n<path d="M78.1455 62.5931C73.7275 62.5931 70.2395 66.4686 70.2395 71.1967C70.2395 75.9248 73.8049 79.8002 78.1455 79.8002C82.5635 79.8002 86.0515 75.9248 86.0515 71.1967C86.0515 66.4686 82.5635 62.5931 78.1455 62.5931Z" fill="#4F5660"/>\n<path d="M63.9994 50.3826C59.5814 50.3826 56.0935 54.2581 56.0935 58.9861C56.0935 63.7142 59.6589 67.5897 63.9994 67.5897C68.4175 67.5897 71.9054 63.7142 71.9054 58.9861C71.9829 54.2581 68.4175 50.3826 63.9994 50.3826Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M65.4081 47.6037C79.7352 47.6037 86.5385 42.789 94.863 46.9942C93.0368 45.3764 91.2428 43.8702 89.1756 42.4907L91.6999 39.6452C94.9205 41.3917 96.9017 42.9292 96.9017 42.9292C96.9017 42.9292 107.435 58.0679 109.303 87.7847L107.414 89.0449L94.863 82.7749L33.8903 81.7849L22.0764 90.6289L18.6968 87.7847C20.5089 58.0679 31.0419 42.9292 31.0419 42.9292C31.0419 42.9292 32.9731 41.3946 36.2192 39.6452L38.538 42.6951C36.5515 44.0382 34.7761 45.4922 33.0806 46.9942C41.4051 42.789 51.0809 47.6037 65.4081 47.6037Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M43.6717 33.4574C43.7147 33.5529 43.8836 33.8347 44.5116 34.2677C45.3865 34.871 46.7906 35.499 48.7156 36.0604C52.5377 37.1752 57.9423 37.8939 64.0002 37.8939C70.0581 37.8939 75.4627 37.1752 79.2848 36.0604C81.2098 35.499 82.6139 34.871 83.4888 34.2677C84.1168 33.8347 84.2857 33.5529 84.3286 33.4574C84.2857 33.3619 84.1168 33.0802 83.4888 32.6472C82.6139 32.0439 81.2098 31.4159 79.2848 30.8545C75.4627 29.7397 70.0581 29.021 64.0002 29.021C57.9423 29.021 52.5377 29.7397 48.7156 30.8545C46.7906 31.4159 45.3865 32.0439 44.5116 32.6472C43.8836 33.0802 43.7147 33.362 43.6717 33.4574ZM47.5329 26.7995C51.8368 25.5442 57.6583 24.797 64.0002 24.797C70.3421 24.797 76.1636 25.5442 80.4675 26.7995C82.6054 27.4231 84.4893 28.2062 85.8867 29.1698C87.2187 30.0883 88.5641 31.5019 88.5641 33.4574C88.5641 35.413 87.2187 36.8266 85.8867 37.7451C84.4893 38.7087 82.6054 39.4918 80.4675 40.1154C76.1636 41.3707 70.3421 42.1179 64.0002 42.1179C57.6583 42.1179 51.8368 41.3707 47.5329 40.1154C45.395 39.4918 43.5111 38.7087 42.1137 37.7451C40.7817 36.8266 39.4363 35.413 39.4363 33.4574C39.4363 31.5019 40.7817 30.0883 42.1137 29.1698C43.5111 28.2062 45.395 27.4231 47.5329 26.7995Z" fill="white"/>\n<path d="M31.2229 42.8567C32.1803 41.7971 34.1886 40.2459 37.4094 38.7298C38.1878 39.6337 39.0379 40.3127 39.7157 40.7801C41.6353 42.1038 43.9988 43.0423 46.3501 43.7281C51.1358 45.1239 57.3741 45.8995 64.0001 45.8995C70.626 45.8995 76.8643 45.1239 81.65 43.7281C84.0014 43.0423 86.3648 42.1038 88.2844 40.7801C88.96 40.3143 89.8065 39.6383 90.5828 38.739C93.4172 40.1124 95.3572 41.5798 96.5981 42.8567L95.5709 49.3869L32.9105 49.3869L31.2229 42.8567Z" fill="white"/>\n<ellipse cx="64" cy="17.5977" rx="16.9959" ry="5.68925" fill="white"/>\n<path d="M64.0001 34.6655C74.752 34.6655 83.4682 32.1183 83.4682 28.9762H44.532C44.532 32.1183 53.2481 34.6655 64.0001 34.6655Z" fill="white"/>\n<rect x="47.0042" y="17.4403" width="33.9917" height="11.9358" fill="white"/>\n<path d="M85.5609 99.5399C102.704 98.9984 109.297 87.7808 109.297 87.7808L96.9952 79.8001L31.8865 78.3114L18.6968 87.7808C18.6968 87.7808 25.2125 98.9984 42.3552 99.5399C42.3552 99.5399 45.2252 96.0586 47.5523 93.1188C37.7011 90.1791 33.9778 83.9901 33.9778 83.9901C33.9778 83.9901 34.7535 84.5316 36.1497 85.3053C36.2273 85.3826 36.3048 85.46 36.46 85.5373C36.5763 85.6147 36.6928 85.6728 36.8091 85.7308C36.9254 85.7888 37.0418 85.8468 37.1581 85.9242C39.0973 87.0072 41.0365 87.8582 42.8206 88.5545C46.0009 89.7923 49.8018 91.0301 54.2232 91.881C60.0408 92.9641 66.8669 93.3509 74.3134 91.9584C77.9592 91.3395 81.6825 90.2565 85.5609 88.6318C88.2758 87.6261 91.301 86.1562 94.4813 84.0675C94.4813 84.0675 90.6029 90.4112 80.4414 93.2736C82.7684 96.2133 85.5609 99.5399 85.5609 99.5399Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18.8206 84.6997C18.8206 84.6997 25.3245 92.2261 42.416 96.4588C44.6986 97.3133 48.2524 98.2823 52.6496 98.9635C52.4788 98.1712 52.3889 97.3488 52.3889 96.5054V91.238C49.4859 90.5195 47.1325 89.622 45.5229 88.807L46.8781 86.1306C52.0044 88.7262 66.2264 92.4753 81.0703 86.0909L82.2557 88.8468C80.0192 89.8087 77.7962 90.556 75.6112 91.1219V96.5054C75.6112 97.3473 75.5216 98.1682 75.3514 98.9592C78.6879 98.4218 82.0984 97.6122 85.5068 96.4588C103.682 91.7037 109.18 84.6997 109.18 84.6997C109.18 59.7891 98.0395 39.5976 98.0395 39.5976C86.8993 31.2424 76.3007 31.4745 76.3007 31.4745L75.2176 32.7123C88.3692 36.7352 94.4808 42.5373 94.4808 42.5373C86.4351 38.1277 78.5442 35.9615 71.1948 35.1106C65.6247 34.4917 60.2867 34.6464 55.5676 35.2653C55.1625 35.2653 54.816 35.3243 54.4258 35.3907C54.3691 35.4004 54.3114 35.4102 54.2524 35.42C51.5448 35.6521 44.969 36.6578 36.6912 40.2938C33.8288 41.609 32.1269 42.5373 32.1269 42.5373C32.1269 42.5373 38.5479 36.4257 52.4731 32.4029L51.6995 31.4745C51.6995 31.4745 41.1009 31.2424 29.9607 39.5976C29.9607 39.5976 18.8206 59.7891 18.8206 84.6997ZM62.5 92.7837V97.3827C62.5 98.2112 63.1716 98.8827 64 98.8827C64.8285 98.8827 65.5 98.2112 65.5 97.3827V92.7721C67.7816 92.6922 70.1642 92.4455 72.6112 91.9827V96.5054C72.6112 101.261 68.7558 105.117 64 105.117C59.2443 105.117 55.3889 101.261 55.3889 96.5054V92.0629C57.5602 92.4479 59.95 92.7144 62.5 92.7837Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M101.434 46.9406L93.0273 30.2392L83.9504 38.4991L73.7046 27.2392L64.0298 38.4991L53.3513 27.2392L43.0026 38.4991L34.998 30.2392L27.2731 45.549C27.2088 45.6033 27.1484 45.6565 27.0923 45.7082C23.7915 53.525 18.8206 70.0595 18.8206 86.6997C18.8206 86.6997 25.319 97.9173 42.416 98.4588C42.416 98.4588 45.2784 94.9775 47.5993 92.0377C37.7743 89.098 34.0609 82.909 34.0609 82.909C34.0609 82.909 34.8345 83.4505 36.2271 84.2241L36.2271 84.2242C36.3044 84.3015 36.3818 84.3789 36.5365 84.4562C36.6525 84.5336 36.7687 84.5917 36.8846 84.6496C37.0007 84.7077 37.1167 84.7657 37.2328 84.843C39.1668 85.9261 41.1009 86.7771 42.8802 87.4734C46.0521 88.7112 49.8428 89.9489 54.2524 90.7999C60.0546 91.883 66.8625 92.2698 74.2893 90.8773C77.9253 90.2584 81.6387 89.1753 85.5068 87.5507C88.2145 86.545 91.2316 85.0751 94.4034 82.9864C94.4034 82.9864 90.5353 89.3301 80.4009 92.1925C82.7217 95.1322 85.5068 98.4588 85.5068 98.4588C102.604 97.9173 109.18 86.6997 109.18 86.6997C109.18 70.898 104.697 54.9953 101.419 46.9405L101.434 46.9406Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M86.0068 96.5261C86.0068 96.5261 83.2217 93.1995 80.9009 90.2598C83.8222 89.4347 86.2229 88.3203 88.1603 87.152L91.6992 94.0225L94.6419 81.4381C94.8188 81.1924 94.9034 81.0537 94.9034 81.0537C91.7316 83.1425 88.7145 84.6123 86.0068 85.618C82.1387 87.2426 78.4253 88.3257 74.7893 88.9446C67.3625 90.3371 60.5546 89.9503 54.7524 88.8672C50.3428 88.0163 46.5521 86.7785 43.3802 85.5407C41.6009 84.8444 39.6668 83.9934 37.7328 82.9104C37.6167 82.833 37.5007 82.775 37.3846 82.717C37.2687 82.659 37.1525 82.6009 37.0365 82.5236C36.8818 82.4462 36.8044 82.3688 36.7271 82.2915C35.3345 81.5178 34.5609 80.9763 34.5609 80.9763C34.5609 80.9763 34.6187 81.0726 34.7389 81.2469L34.7356 81.2447L37.7235 94.0225L41.2837 87.1106C43.1196 88.2245 45.3744 89.2897 48.0993 90.105C45.7784 93.0448 42.916 96.5261 42.916 96.5261C25.819 95.9846 19.3206 84.7671 19.3206 84.7671C19.3206 59.8564 30.4607 39.6649 30.4607 39.6649C41.6009 31.3098 52.1995 31.5418 52.1995 31.5418L52.9731 32.4702C39.0479 36.493 32.6269 42.6046 32.6269 42.6046C32.6269 42.6046 34.3288 41.6763 37.1912 40.3611C45.469 36.7251 52.0448 35.7194 54.7524 35.4873C54.8114 35.4775 54.8691 35.4677 54.9258 35.458L54.9259 35.458C55.3161 35.3916 55.6625 35.3326 56.0676 35.3326C60.7867 34.7137 66.1247 34.559 71.6948 35.1779C79.0442 36.0289 86.9351 38.195 94.9808 42.6046C94.9808 42.6046 88.8692 36.8025 75.7176 32.7796L76.8007 31.5418C76.8007 31.5418 87.3993 31.3098 98.5395 39.6649C98.5395 39.6649 109.68 59.8564 109.68 84.7671C109.68 84.7671 103.104 95.9846 86.0068 96.5261Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4636 57.8263C18.6111 52.2752 15.9837 45.7012 12.9683 41.2009C8.76279 34.9243 10.8435 46.5621 12.3555 55.0193C12.9841 58.5348 13.5144 61.5008 13.454 62.4019C12.9066 70.5738 14.4749 73.4983 17.3769 72.7507C18.0906 67.31 19.2129 62.2714 20.4636 57.8263ZM16.3034 63.8412C15.7856 64.2854 15.4079 63.9753 15.5152 62.0928C15.555 61.3948 15.5919 60.7475 15.5919 60.3072C15.5919 59.1859 15.3764 57.5408 15.1425 55.7563C15.0904 55.3583 15.0373 54.9535 14.9856 54.5459C15.3671 52.5351 17.4962 57.3049 17.5976 58.5229C17.699 59.7408 17.0131 63.2322 16.3034 63.8412Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M108.536 57.8263C110.389 52.2752 113.016 45.7012 116.032 41.2009C120.237 34.9243 118.157 46.5621 116.644 55.0193C116.016 58.5348 115.486 61.5008 115.546 62.4019C116.093 70.5738 114.525 73.4983 111.623 72.7507C110.909 67.31 109.787 62.2714 108.536 57.8263ZM112.697 63.8412C113.214 64.2854 113.592 63.9753 113.485 62.0928C113.445 61.3948 113.408 60.7475 113.408 60.3072C113.408 59.1859 113.624 57.5408 113.857 55.7563C113.91 55.3583 113.963 54.9535 114.014 54.5459C113.633 52.5351 111.504 57.3049 111.402 58.5229C111.301 59.7408 111.987 63.2322 112.697 63.8412Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M86.0068 96.5261C86.0068 96.5261 83.2217 93.1995 80.9009 90.2598C83.8222 89.4347 86.2229 88.3203 88.1603 87.152L91.6992 94.0225L94.6419 81.4381C94.8188 81.1924 94.9034 81.0537 94.9034 81.0537C91.7316 83.1425 88.7145 84.6123 86.0068 85.618C82.1387 87.2426 78.4253 88.3257 74.7893 88.9446C67.3625 90.3371 60.5546 89.9503 54.7524 88.8672C50.3428 88.0163 46.5521 86.7785 43.3802 85.5407C41.6009 84.8444 39.6668 83.9934 37.7328 82.9104C37.6167 82.833 37.5007 82.775 37.3846 82.717C37.2687 82.659 37.1525 82.6009 37.0365 82.5236C36.8818 82.4462 36.8044 82.3688 36.7271 82.2915C35.3345 81.5178 34.5609 80.9763 34.5609 80.9763C34.5609 80.9763 34.6187 81.0726 34.7389 81.2469L34.7356 81.2447L37.7235 94.0225L41.2837 87.1106C43.1196 88.2245 45.3744 89.2897 48.0993 90.105C45.7784 93.0448 42.916 96.5261 42.916 96.5261C25.819 95.9846 19.3206 84.7671 19.3206 84.7671C19.3206 59.8564 30.4607 39.6649 30.4607 39.6649C41.6009 31.3098 52.1995 31.5418 52.1995 31.5418L52.9731 32.4702C39.0479 36.493 32.6269 42.6046 32.6269 42.6046C32.6269 42.6046 34.3288 41.6763 37.1912 40.3611C45.469 36.7251 52.0448 35.7194 54.7524 35.4873C54.8114 35.4775 54.8691 35.4677 54.9258 35.458L54.9259 35.458C55.3161 35.3916 55.6625 35.3326 56.0676 35.3326C60.7867 34.7137 66.1247 34.559 71.6948 35.1779C79.0442 36.0289 86.9351 38.195 94.9808 42.6046C94.9808 42.6046 88.8692 36.8025 75.7176 32.7796L76.8007 31.5418C76.8007 31.5418 87.3993 31.3098 98.5395 39.6649C98.5395 39.6649 109.68 59.8564 109.68 84.7671C109.68 84.7671 103.104 95.9846 86.0068 96.5261Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M86.0603 62.6241L87.1711 66.7697L72.9876 70.5701L71.0246 66.6559L86.0603 62.6241Z" fill="#4F5660"/>\n<path d="M86.0603 75.13L87.1711 70.9845L71.5782 66.8064L70.5563 70.9757L86.0603 75.13Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M79.3062 68.8771L71.0152 66.6555L69.4939 67.0632L69.0078 68.8771L69.4939 70.691L71.0152 71.0987L79.3062 68.8771Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M79.3062 68.8771L71.0152 66.6555L69.4939 67.0632L69.0078 68.8771L69.4939 70.691L71.0152 71.0987L79.3062 68.8771Z" fill="#4F5660"/>\n<path d="M49.7345 60.2735C45.3165 60.2735 41.8286 64.149 41.8286 68.877C41.8286 73.6051 45.394 77.4806 49.7345 77.4806C54.1526 77.4806 57.6405 73.6051 57.6405 68.877C57.718 64.149 54.1526 60.2735 49.7345 60.2735Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e, o) {
        var map = {
            "./8-bit-shades.svg": 715,
            "./alien.svg": 716,
            "./american-indian.svg": 717,
            "./angel.svg": 718,
            "./angry-brows.svg": 719,
            "./angry.svg": 720,
            "./annoyed.svg": 721,
            "./base-eyes.svg": 722,
            "./base-shape.svg": 723,
            "./base-upside-down.svg": 724,
            "./bunny.svg": 725,
            "./cap.svg": 726,
            "./cat-eyes.svg": 727,
            "./cat.svg": 728,
            "./chameleon-sprite/chameleon-sprite.svg": 729,
            "./chubby-shape.svg": 730,
            "./chubby.svg": 731,
            "./clip-paths/8-bit-shades-clip-path.svg": 565,
            "./clip-paths/angry-brows-clip-path.svg": 566,
            "./clip-paths/angry-clip-path.svg": 567,
            "./clip-paths/annoyed-clip-path.svg": 568,
            "./clip-paths/base-eyes-clip-path.svg": 569,
            "./clip-paths/cat-eyes-clip-path.svg": 570,
            "./clip-paths/chubby-clip-path.svg": 571,
            "./clip-paths/crazy-eyes-clip-path.svg": 572,
            "./clip-paths/cute-clip-path.svg": 573,
            "./clip-paths/cute-downwards-clip-path.svg": 574,
            "./clip-paths/dead-clip-path.svg": 575,
            "./clip-paths/evil-eyes-clip-path.svg": 576,
            "./clip-paths/female-lashes-clip-path.svg": 577,
            "./clip-paths/glasses-1-clip-path.svg": 578,
            "./clip-paths/glasses-2-clip-path.svg": 579,
            "./clip-paths/happy-clip-path.svg": 580,
            "./clip-paths/heart-eyes-clip-path.svg": 581,
            "./clip-paths/line-eyes-clip-path.svg": 582,
            "./clip-paths/line-eyes-happy-clip-path.svg": 583,
            "./clip-paths/mono-brow-clip-path.svg": 584,
            "./clip-paths/monocle-clip-path.svg": 585,
            "./clip-paths/sad-clip-path.svg": 586,
            "./clip-paths/scared-clip-path.svg": 587,
            "./clip-paths/sceptical-clip-path-1.svg": 732,
            "./clip-paths/sceptical-clip-path.svg": 588,
            "./clip-paths/single-eye-clip-path.svg": 589,
            "./clip-paths/spider-eyes-clip-path.svg": 590,
            "./clip-paths/squinting-clip-path.svg": 591,
            "./clip-paths/star-eyes-clip-path.svg": 592,
            "./clip-paths/sunglasses-clip-path.svg": 593,
            "./clip-paths/swirly-eyes-clip-path.svg": 594,
            "./clip-paths/third-eye-clip-path.svg": 595,
            "./clip-paths/wink-clip-path.svg": 596,
            "./crazy-eyes.svg": 733,
            "./crown.svg": 734,
            "./cute-downwards.svg": 735,
            "./cute.svg": 736,
            "./dead.svg": 737,
            "./devil.svg": 738,
            "./evil-eyes.svg": 739,
            "./face-mask.svg": 740,
            "./female-lashes.svg": 741,
            "./glasses-1.svg": 742,
            "./glasses-2.svg": 743,
            "./hair-1.svg": 744,
            "./hair-2.svg": 745,
            "./hanging-ears.svg": 746,
            "./hannibal.svg": 747,
            "./happy.svg": 748,
            "./headphones.svg": 749,
            "./heart-eyes.svg": 750,
            "./knit-cap.svg": 751,
            "./line-eyes-happy.svg": 752,
            "./line-eyes.svg": 753,
            "./mohawk.svg": 754,
            "./mono-brow.svg": 755,
            "./monocle.svg": 756,
            "./mouse.svg": 757,
            "./mustache-top-hat.svg": 758,
            "./mustache.svg": 759,
            "./ninja-band.svg": 760,
            "./ribbon.svg": 761,
            "./sad.svg": 762,
            "./samurai.svg": 763,
            "./scared.svg": 764,
            "./scarred-laugh.svg": 765,
            "./sceptical.svg": 766,
            "./single-eye.svg": 767,
            "./spider-eyes.svg": 768,
            "./squinting.svg": 769,
            "./star-eyes.svg": 770,
            "./sunglasses.svg": 771,
            "./swirly-eyes.svg": 772,
            "./thick-upside-down.svg": 773,
            "./thick.svg": 774,
            "./third-eye.svg": 775,
            "./top-hat.svg": 776,
            "./tounge-shape.svg": 777,
            "./triangle-hair.svg": 778,
            "./vampire-ears.svg": 779,
            "./vampire.svg": 780,
            "./wink.svg": 781
        };

        function l(t) {
            var e = n(t);
            return o(e)
        }

        function n(t) {
            if (!o.o(map, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return map[t]
        }
        l.keys = function() {
            return Object.keys(map)
        }, l.resolve = n, t.exports = l, l.id = 714
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M89.4707 60.9656H38.5293V63.7013H40.5787V66.4372H42.628V69.1725H44.6774V71.9082H46.7268V74.6444H55.2171V71.9082H57.2664V69.1725H59.3157V66.4372H61.0724V63.7013H66.9276V66.4371H68.6843V69.1726H70.7337V71.9083H72.7832V74.6444H81.2734V71.9083H83.3227V69.1726H85.372V66.4371H87.4212V63.7013H89.4707V60.9656ZM68.9771 63.7015H71.0264L71.0264 66.4369H73.0758L73.0758 63.7015H75.1252V66.4369H77.1745L77.1745 69.1726H79.2239V71.9082H77.1745L77.1745 69.1726H75.1252V71.9082H73.0758L73.0758 69.1726H71.0264L71.0264 66.4371H68.9771V63.7015ZM75.1252 66.4371V69.1726H73.0758V66.4371H75.1252ZM42.9209 63.7018H44.9703V66.4374H42.9209V63.7018ZM49.069 63.7015H47.0197L47.0197 66.4369H44.9703V69.1726H47.0197L47.0197 71.9082H49.069V69.1726H51.1184L51.1184 71.9082H53.1678V69.1726H51.1184L51.1184 66.4369H49.069V63.7015ZM49.069 69.1726V66.4371H47.0197V69.1726H49.069Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M46.8859 30.9077C47.6803 33.159 48.0164 35.3871 48.0819 36.795L45.1543 36.9312C45.1009 35.7842 44.8132 33.8412 44.1222 31.8829C43.4247 29.9062 42.3776 28.087 40.9186 26.9783L42.692 24.6449C44.7981 26.2455 46.098 28.6747 46.8859 30.9077Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M81.1141 30.9077C80.3197 33.159 79.9836 35.3871 79.9181 36.795L82.8457 36.9312C82.8991 35.7842 83.1868 33.8412 83.8778 31.8829C84.5753 29.9062 85.6224 28.087 87.0814 26.9783L85.308 24.6449C83.2019 26.2455 81.902 28.6747 81.1141 30.9077Z" fill="white"/>\n<path d="M46.6181 25.8116C46.6181 28.0633 44.7927 29.8886 42.541 29.8886C40.2893 29.8886 38.464 28.0633 38.464 25.8116C38.464 23.5599 40.2893 21.7345 42.541 21.7345C44.7927 21.7345 46.6181 23.5599 46.6181 25.8116Z" fill="white"/>\n<path d="M81.3819 25.8116C81.3819 28.0633 83.2073 29.8886 85.459 29.8886C87.7107 29.8886 89.536 28.0633 89.536 25.8116C89.536 23.5599 87.7107 21.7345 85.459 21.7345C83.2073 21.7345 81.3819 23.5599 81.3819 25.8116Z" fill="white"/>\n<path d="M90.6803 39.75C85.63 37.4379 80.2985 35.7976 74.822 34.871C74.0726 36.2107 73.3945 37.5891 72.7906 39.0003C66.957 38.1213 61.0246 38.1213 55.191 39.0003C54.5868 37.5892 53.9087 36.2109 53.1596 34.871C47.6796 35.8054 42.3446 37.4496 37.2892 39.7621C27.2531 54.6108 24.5324 69.0906 25.8928 83.3649C31.7702 87.7074 38.3487 91.0099 45.3423 93.129C46.9171 91.011 48.3105 88.7641 49.5079 86.412C47.2337 85.5626 45.0386 84.5147 42.9482 83.2803C43.4983 82.8812 44.0364 82.4701 44.5564 82.0711C50.6391 84.9317 57.2781 86.4148 63.9999 86.4148C70.7217 86.4148 77.3606 84.9317 83.4434 82.0711C83.9694 82.5003 84.5074 82.9115 85.0516 83.2803C82.9571 84.5167 80.758 85.5666 78.4797 86.4181C79.6756 88.769 81.0692 91.0141 82.6453 93.129C89.6449 91.0185 96.2285 87.7175 102.107 83.371C103.703 66.8174 99.3803 52.4705 90.6803 39.75Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M37.3059 39.7573C46.4554 35.535 56.5681 33.8207 64 33.8207C71.4319 33.8207 81.5446 35.535 90.6941 39.7573L90.9373 41.6884L64 40.3616L37.0627 41.6884L37.3059 39.7573Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M49.649 25.0291C48.1 19.9853 44.967 16.5417 42.5646 14.9204C39.4258 19.0432 35.9429 29.4318 44.2367 40.6424L49.2802 39.659C49.6377 41.058 51.7331 38.8209 52.3297 40.3313C55.2942 37.6821 55.8051 38.6815 57.2996 36.0453C62.4002 27.0485 60.0256 18.7084 57.5834 14.9911C54.9994 16.4851 51.5084 19.8533 49.649 25.0291ZM47.2998 37.6425L43.815 23.4687L50.1577 34.3517L55.647 23.4687L53.4443 36.9564C53.2088 36.9858 53.8552 36.9121 53.4443 36.9564C51.5228 37.1634 49.0624 37.0366 47.2998 37.6425Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M90.7257 40.8166C90.7159 40.8021 90.706 40.7877 90.6961 40.7732L90.6941 40.7573L90.6812 40.7513L90.6803 40.75C90.5785 40.7034 90.4765 40.6571 90.3745 40.611C89.3567 40.1489 88.3275 39.7175 87.292 39.3159C84.5416 38.2445 81.72 37.366 78.8478 36.6867C73.4726 35.3918 68.2897 34.8207 64 34.8207C59.7041 34.8207 54.5124 35.3935 49.1287 36.6924C46.4399 37.3309 43.7952 38.1429 41.2113 39.1232C40.187 39.5103 39.1682 39.9261 38.1596 40.3718C37.8686 40.4997 37.5784 40.6298 37.2892 40.7621C37.2778 40.7791 37.2663 40.7961 37.2548 40.813C44.1185 42.0661 53.5436 42.8524 64 42.8524C74.4465 42.8524 83.8637 42.0676 90.7257 40.8166ZM35.6674 43.2598C32.1407 48.9207 29.6567 54.5291 28.0346 60.094L38.23 62.3508L26.8477 64.8703C26.7649 65.2716 26.6864 65.6727 26.612 66.0736L36.23 68.2025L25.9595 70.4759C25.4398 75.1306 25.4538 79.7585 25.8928 84.3649C31.7702 88.7074 38.3487 92.01 45.3423 94.129C46.9171 92.011 48.3105 89.7641 49.5079 87.412C47.2337 86.5626 45.0386 85.5147 42.9482 84.2803C43.4983 83.8812 44.0364 83.4701 44.5564 83.0711C50.6391 85.9317 57.2781 87.4148 63.9999 87.4148C70.7217 87.4148 77.3606 85.9317 83.4434 83.0711C83.9694 83.5004 84.5074 83.9115 85.0516 84.2803C82.9571 85.5167 80.758 86.5666 78.4797 87.4181C79.6756 89.769 81.0692 92.0141 82.6453 94.129C89.6449 92.0185 96.2285 88.7175 102.107 84.371C102.571 79.557 102.535 74.9298 102.036 70.4748L91.77 68.2025L101.383 66.0746C101.309 65.6714 101.23 65.2696 101.148 64.8693L89.77 62.3508L99.9655 60.094C98.2471 54.175 95.6652 48.5774 92.3269 43.2609C85.172 44.6736 75.1254 45.5524 64 45.5524C52.8717 45.5524 42.8227 44.6731 35.6674 43.2598Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M46.8535 36.2824C53.038 34.5655 59.1014 33.8207 64 33.8207C69.0186 33.8207 75.2597 34.6024 81.6011 36.4103L67.8685 39.3755H64L59.1343 39.1733L46.8535 36.2824Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M47.1705 31.9283C46.338 32.5178 46.2556 32.9071 46.2556 33.0197C46.2556 33.1324 46.338 33.5217 47.1705 34.1112C47.9662 34.6746 49.2084 35.2393 50.8695 35.7368C54.1738 36.7265 58.8225 37.3589 64.0169 37.3589C69.2113 37.3589 73.86 36.7265 77.1643 35.7368C78.8254 35.2393 80.0677 34.6746 80.8634 34.1112C81.6958 33.5217 81.7782 33.1324 81.7782 33.0197C81.7782 32.9071 81.6958 32.5178 80.8634 31.9283C80.0677 31.3648 78.8254 30.8002 77.1643 30.3026C73.86 29.3129 69.2113 28.6805 64.0169 28.6805C58.8225 28.6805 54.1738 29.3129 50.8695 30.3026C49.2084 30.8002 47.9662 31.3648 47.1705 31.9283ZM50.0661 27.6204C53.6968 26.5329 58.6288 25.8805 64.0169 25.8805C69.405 25.8805 74.337 26.5329 77.9677 27.6204C79.7741 28.1614 81.338 28.8335 82.4815 29.6432C83.5883 30.427 84.5782 31.5476 84.5782 33.0197C84.5782 34.4919 83.5883 35.6125 82.4815 36.3962C81.338 37.206 79.7741 37.878 77.9677 38.4191C74.337 39.5066 69.405 40.1589 64.0169 40.1589C58.6288 40.1589 53.6968 39.5066 50.0661 38.4191C48.2597 37.878 46.6958 37.206 45.5523 36.3962C44.4455 35.6125 43.4556 34.4919 43.4556 33.0197C43.4556 31.5476 44.4455 30.427 45.5523 29.6432C46.6958 28.8335 48.2597 28.1614 50.0661 27.6204Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M42.4431 37.6702C42.907 38.1509 43.3903 38.5413 43.8186 38.8445C45.3346 39.9181 47.243 40.7052 49.2053 41.293C53.1858 42.4852 58.4213 43.1589 64.0169 43.1589C69.6125 43.1589 74.848 42.4852 78.8285 41.293C80.7909 40.7052 82.6992 39.9181 84.2153 38.8445C84.6411 38.543 85.1214 38.1553 85.583 37.6782C86.1569 37.883 86.7279 38.0961 87.2959 38.3174C88.3263 38.7171 89.3504 39.1463 90.3632 39.6059C90.469 39.6536 90.5747 39.7017 90.6803 39.75L90.6812 39.7513L90.6941 39.7573L90.6962 39.7732C99.3855 52.488 103.702 66.8274 102.107 83.371C96.2285 87.7175 89.6449 91.0185 82.6453 93.129C81.0692 91.0141 79.6756 88.769 78.4797 86.4181C80.758 85.5666 82.9571 84.5167 85.0516 83.2803C84.5074 82.9115 83.9694 82.5003 83.4434 82.0711C77.3606 84.9317 70.7217 86.4148 63.9999 86.4148C57.2781 86.4148 50.6391 84.9317 44.5564 82.0711C44.0364 82.4701 43.4983 82.8812 42.9482 83.2803C45.0386 84.5147 47.2337 85.5626 49.5079 86.412C48.3105 88.7641 46.9171 91.011 45.3423 93.129C38.3487 91.0099 31.7702 87.7074 25.8928 83.3649C24.5324 69.0906 27.2531 54.6108 37.2892 39.7621C37.5794 39.6294 37.8705 39.4988 38.1626 39.3705C39.1685 38.9261 40.1847 38.5113 41.2062 38.1251C41.617 37.9692 42.0293 37.8176 42.4431 37.6702Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M44.0151 67.3883C44.0151 71.6847 47.1945 75.177 51.0428 75.177C54.9648 75.177 57.9968 71.6847 58.0643 67.3883C58.1318 63.0919 54.9771 59.5688 51.0305 59.5688C47.084 59.5688 44.0151 63.0919 44.0151 67.3883Z" fill="#4F5660"/>\n<path d="M69.9469 67.3883C69.9469 71.6847 73.1139 75.177 76.9684 75.177C80.8904 75.177 83.9163 71.6847 83.9838 67.3883C84.0513 63.0919 80.9211 59.5688 76.9684 59.5688C73.0157 59.5688 69.9469 63.0919 69.9469 67.3883Z" fill="#4F5660"/>\n<rect width="21.1825" height="2.17458" transform="matrix(-0.958766 -0.284197 -0.284197 0.958766 61.8704 61.5364)" fill="#4F5660"/>\n<rect width="21.1825" height="2.17458" transform="matrix(-0.958766 -0.284197 -0.284197 0.958766 61.8704 61.5364)" fill="#4F5660"/>\n<rect x="66.1296" y="61.5364" width="21.1825" height="2.17458" transform="rotate(-16.5109 66.1296 61.5364)" fill="#4F5660"/>\n<rect x="66.1296" y="61.5364" width="21.1825" height="2.17458" transform="rotate(-16.5109 66.1296 61.5364)" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M46.4446 62.5925C45.5262 63.9196 44.9861 65.5859 44.9861 67.3883C44.9861 71.6847 48.1655 75.1771 52.0138 75.1771C55.703 75.1771 58.6048 72.0869 58.9924 68.1442C53.8468 66.9082 49.4732 64.9397 46.4446 62.5925Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M83.4657 62.5925C84.3841 63.9196 84.9242 65.5859 84.9242 67.3883C84.9242 71.6847 81.7448 75.1771 77.8965 75.1771C74.2073 75.1771 71.3055 72.0869 70.9179 68.1442C76.0635 66.9082 80.4371 64.9397 83.4657 62.5925Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M44.0151 66.373C44.0151 66.3781 44.0151 66.3832 44.0151 66.3883C44.0151 70.6847 47.1945 74.1771 51.0428 74.1771C54.9648 74.1771 57.9968 70.6847 58.0643 66.3883C58.0644 66.3832 58.0645 66.3781 58.0645 66.373H44.0151Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M69.9469 66.373C69.9469 66.3781 69.9469 66.3832 69.9469 66.3883C69.9469 70.6847 73.1262 74.1771 76.9746 74.1771C80.8965 74.1771 83.9286 70.6847 83.9961 66.3883C83.9962 66.3832 83.9962 66.3781 83.9963 66.373H69.9469Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M44.0151 66.8883C44.0151 71.1847 47.1945 74.6771 51.0428 74.6771C54.9648 74.6771 57.9968 71.1847 58.0643 66.8883C58.1318 62.5919 54.9771 59.0689 51.0305 59.0689C47.084 59.0689 44.0151 62.5919 44.0151 66.8883Z" fill="#4F5660"/>\n<path d="M69.9469 66.8883C69.9469 71.1847 73.1139 74.6771 76.9684 74.6771C80.8904 74.6771 83.9163 71.1847 83.9838 66.8883C84.0513 62.5919 80.9211 59.0689 76.9684 59.0689C73.0157 59.0689 69.9469 62.5919 69.9469 66.8883Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M90.6803 39.75C85.63 37.4379 80.2985 35.7976 74.822 34.871C74.0726 36.2107 73.3945 37.5891 72.7906 39.0003C66.957 38.1213 61.0246 38.1213 55.191 39.0003C54.5868 37.5892 53.9087 36.2109 53.1596 34.871C47.6796 35.8054 42.3446 37.4496 37.2892 39.7621C27.2531 54.6108 24.5324 69.0906 25.8928 83.3649C31.7702 87.7074 38.3487 91.0099 45.3423 93.129C46.9171 91.011 48.3105 88.7641 49.5079 86.412C47.2337 85.5626 45.0386 84.5147 42.9482 83.2803C43.4983 82.8812 44.0364 82.4701 44.5564 82.0711C50.6391 84.9317 57.2781 86.4148 63.9999 86.4148C70.7217 86.4148 77.3606 84.9317 83.4434 82.0711C83.9694 82.5003 84.5074 82.9115 85.0516 83.2803C82.9571 84.5167 80.758 85.5666 78.4797 86.4181C79.6756 88.769 81.0692 91.0141 82.6453 93.129C89.6449 91.0184 96.2285 87.7175 102.107 83.371C103.703 66.8174 99.3803 52.4705 90.6803 39.75Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M37.3197 88.25C42.37 90.5621 47.7015 92.2024 53.178 93.129C53.9274 91.7893 54.6055 90.4109 55.2094 88.9997C61.043 89.8787 66.9754 89.8787 72.809 88.9997C73.4132 90.4108 74.0913 91.7891 74.8404 93.129C80.3204 92.1946 85.6554 90.5504 90.7108 88.2379C100.747 73.3892 103.468 58.9094 102.107 44.6351C96.2298 40.2926 89.6513 36.9901 82.6577 34.871C81.0829 36.989 79.6895 39.2359 78.4921 41.588C80.7663 42.4374 82.9614 43.4853 85.0518 44.7197C84.5017 45.1188 83.9636 45.5299 83.4436 45.9289C77.3609 43.0683 70.7219 41.5852 64.0001 41.5852C57.2784 41.5852 50.6394 43.0683 44.5566 45.9289C44.0306 45.4996 43.4926 45.0885 42.9484 44.7197C45.0429 43.4833 47.242 42.4334 49.5203 41.5819C48.3244 39.231 46.9308 36.9859 45.3547 34.871C38.3551 36.9815 31.7715 40.2825 25.893 44.629C24.2969 61.1826 28.6197 75.5295 37.3197 88.25Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M72.7926 40.9956C82.5829 42.3682 91.3634 45.4712 93.5516 46.2824C100.311 57.8577 103.516 70.754 102.107 85.3709C96.2285 89.7175 89.6449 93.0184 82.6453 95.129C81.0692 93.0141 79.6756 90.769 78.4797 88.4181C80.758 87.5666 82.9571 86.5167 85.0516 85.2803C84.5074 84.9115 83.9694 84.5003 83.4434 84.0711C77.3606 86.9317 70.7217 88.4148 63.9999 88.4148C57.2781 88.4148 50.6391 86.9317 44.5564 84.0711C44.0364 84.4701 43.4983 84.8812 42.9482 85.2803C45.0386 86.5147 47.2337 87.5626 49.5079 88.412C48.3105 90.764 46.9171 93.011 45.3423 95.129C38.3487 93.0099 31.7702 89.7074 25.8928 85.3649C24.6708 72.5424 26.7419 59.5541 34.4505 46.2816C36.6411 45.4696 45.41 42.3714 55.1901 40.998C55.1904 40.9988 55.1907 40.9996 55.191 41.0003C55.274 40.9878 55.3571 40.9755 55.4401 40.9633C57.5606 40.6725 59.7262 40.4641 61.8805 40.3788C63.3542 40.3261 64.8293 40.3286 66.3028 40.3863C68.2937 40.4716 70.2927 40.6609 72.2556 40.9222C72.434 40.9474 72.6123 40.9735 72.7906 41.0003C72.7912 40.9988 72.7919 40.9972 72.7926 40.9956Z" fill="white"/>\n<path d="M46.9314 13.3937C61.715 10.4316 62.5905 33.9113 60.9442 42.5606L49.2194 43.9C42.2375 33.9657 35.2774 15.7288 46.9314 13.3937Z" fill="white"/>\n<path d="M81.0686 13.3937C66.285 10.4316 65.4095 33.9113 67.0558 42.5606L78.7806 43.9C85.7625 33.9657 92.7226 15.7288 81.0686 13.3937Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M64.9217 90.8737C67.5301 90.851 70.2702 90.6128 73.1138 90.0815V95.2183C73.1138 95.2183 70.8877 95.6684 69.0178 95.6684C67.1478 95.6684 64.9217 95.2183 64.9217 95.2183V90.8737ZM54.8862 89.924C55.0272 89.9524 55.1691 89.9803 55.3116 90.0078L55.3219 90.0097C57.7205 90.4575 60.3179 90.7719 63.0783 90.8541V95.2183C63.0783 95.2183 60.8522 95.6684 58.9822 95.6684C57.1123 95.6684 54.8862 95.2183 54.8862 95.2183L54.8862 89.924Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M63.8928 39.3825C45.6727 39.3825 36.7666 50.3959 34.6658 55.3778C34.0415 56.8583 32.3352 57.5524 30.8547 56.9281C29.3741 56.3038 28.68 54.5975 29.3043 53.1169C32.2002 46.2494 43.0525 33.5638 63.8928 33.5638C84.7267 33.5638 95.7133 46.2405 98.6841 53.0897C99.3234 54.5638 98.6467 56.2771 97.1726 56.9165C95.6985 57.5558 93.9852 56.8792 93.3458 55.405C91.177 50.4047 82.1195 39.3825 63.8928 39.3825Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M63.8928 42.5752C46.7705 42.5752 38.6818 52.8886 36.9154 57.0777C35.7672 59.8007 32.629 61.0772 29.9061 59.929C29.329 59.6857 28.8168 59.3529 28.3789 58.9537C25.7033 67.5171 25.0934 75.9765 25.8928 84.3649C31.7702 88.7074 38.3487 92.0099 45.3423 94.129C46.9171 92.011 48.3105 89.764 49.5079 87.412C47.2337 86.5626 45.0386 85.5146 42.9482 84.2803C43.4983 83.8812 44.0364 83.4701 44.5564 83.0711C50.6391 85.9316 57.2781 87.4148 63.9999 87.4148C70.7217 87.4148 77.3606 85.9316 83.4434 83.0711C83.9694 83.5003 84.5074 83.9115 85.0516 84.2803C82.9571 85.5166 80.758 86.5666 78.4797 87.4181C79.6756 89.769 81.0692 92.0141 82.6453 94.129C89.6449 92.0184 96.2285 88.7175 102.107 84.3709C102.985 75.2622 102.071 66.8217 99.6222 58.9526C99.1971 59.3405 98.7016 59.6658 98.1441 59.9076C95.433 61.0835 92.282 59.839 91.1061 57.1279C89.2744 52.9049 81.0271 42.5752 63.8928 42.5752Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M32.365 43.3865C34.8149 30.6371 48.0326 20.8979 63.9708 20.8979C79.9208 20.8979 93.1464 30.6516 95.5821 43.4151C89.5576 36.8896 79.1777 30.4092 63.8928 30.4092C48.6409 30.4092 38.3342 36.8626 32.365 43.3865Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M58.9554 18.637C59.5451 16.4025 61.5802 14.7549 64 14.7549C66.4226 14.7549 68.4595 16.4062 69.0467 18.6445C67.3856 18.4364 65.6904 18.3289 63.9709 18.3289C62.2722 18.3289 60.5971 18.4338 58.9554 18.637Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M43.9317 67.3729C43.9317 62.5617 47.4808 58.6182 51.9765 58.6182C56.4722 58.6182 60.1002 62.5617 60.0214 67.3729C60.0214 72.184 56.4722 76.1276 51.9765 76.1276C47.5597 76.1276 43.9317 72.184 43.9317 67.3729ZM52.827 62.2732C51.2291 63.8032 48.992 67.9849 52.827 72.4726V72.4726C56.6619 67.985 54.4249 63.8033 52.827 62.2733V62.2732Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M67.9772 67.3729C67.9772 62.5617 71.5264 58.6182 76.022 58.6182C80.5177 58.6182 84.1458 62.5617 84.0669 67.3729C84.0669 72.184 80.5177 76.1276 76.022 76.1276C71.6053 76.1276 67.9772 72.184 67.9772 67.3729ZM74.8938 62.2732C73.2959 63.8032 71.0589 67.9849 74.8938 72.4726V72.4726C78.7288 67.985 76.4917 63.8033 74.8938 62.2733V62.2732Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M35.7061 24.5249L33.4073 46.1252L33.4163 46.1225C28.6856 54.8357 26.3473 63.4283 25.7339 71.934L38.1769 74.4491L25.5824 75.1669C25.541 77.0473 25.5803 78.9235 25.6928 80.7961L37.4287 79.9845L26.0464 83.4781C31.8848 87.7648 38.4096 91.0284 45.3423 93.129C46.9171 91.011 48.3105 88.7641 49.5079 86.412C47.2337 85.5626 45.0386 84.5147 42.9482 83.2803C43.4983 82.8812 44.0364 82.4701 44.5564 82.0711C50.6391 84.9317 57.2781 86.4148 63.9999 86.4148C70.7217 86.4148 77.3606 84.9317 83.4434 82.0711C83.9694 82.5004 84.5074 82.9115 85.0516 83.2803C82.9571 84.5167 80.758 85.5666 78.4797 86.4181C79.6756 88.769 81.0692 91.0141 82.6453 93.129C89.5864 91.0361 96.1183 87.7726 101.959 83.4798L90.5713 79.9845L102.309 80.7962C102.423 78.8904 102.459 77.0143 102.417 75.1669L89.8232 74.4491L102.263 71.9347C101.586 62.6312 98.9185 54.0694 94.5911 46.1248L94.5927 46.1252L92.2939 24.5249L74.0751 37.0138C75.6157 37.3974 77.1574 37.893 78.6797 38.5199C80.954 39.3693 83.149 40.4173 85.2395 41.6517C84.6893 42.0507 84.1512 42.4618 83.6313 42.8608C77.5486 40.0003 70.9096 38.5171 64.1878 38.5171C57.466 38.5171 50.827 40.0003 44.7443 42.8608C44.2183 42.4316 43.6802 42.0205 43.1361 41.6517C45.2306 40.4153 47.4297 39.3653 49.7079 38.5139C50.813 38.0661 52.3173 37.5777 54.1173 37.1457L35.7061 24.5249Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol fill="none" viewBox="0 0 128 129" id="8-bit-shades" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M89.47 60.966H38.53V63.7h2.049v2.736h2.049v2.736h2.05v2.735h2.049v2.736h8.49v-2.736h2.05v-2.736h2.049v-2.735h1.756V63.7h5.856v2.736h1.756v2.736h2.05v2.735h2.05v2.736h8.49v-2.736h2.049v-2.735h2.049v-2.736h2.05V63.7h2.049v-2.735zm-20.493 2.736h2.05v2.735h2.049v-2.735h2.05v2.735h2.048v2.736h2.05v2.735h-2.05v-2.735h-2.049v2.735h-2.05v-2.735h-2.049v-2.736h-2.049v-2.735zm6.148 2.735v2.736h-2.05v-2.736h2.05zm-32.204-2.735h2.05v2.735h-2.05v-2.735zm6.148 0h-2.05v2.735H44.97v2.736h2.05v2.735h2.049v-2.735h2.05v2.735h2.049v-2.735h-2.05v-2.736H49.07v-2.735zm0 5.47v-2.735h-2.05v2.736h2.05z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="alien" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M46.886 30.908c.794 2.251 1.13 4.48 1.196 5.887l-2.928.136c-.053-1.147-.34-3.09-1.032-5.048-.697-1.977-1.744-3.796-3.203-4.905l1.773-2.333c2.106 1.6 3.406 4.03 4.194 6.263zm34.228 0c-.794 2.251-1.13 4.48-1.196 5.887l2.928.136c.053-1.147.34-3.09 1.032-5.048.697-1.977 1.744-3.796 3.203-4.905l-1.773-2.333c-2.106 1.6-3.406 4.03-4.194 6.263z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M46.618 25.812a4.077 4.077 0 11-8.154 0 4.077 4.077 0 018.154 0zm34.764 0a4.077 4.077 0 108.154 0 4.077 4.077 0 00-8.154 0zM90.68 39.75a63.576 63.576 0 00-15.858-4.879 43.574 43.574 0 00-2.031 4.13 59.06 59.06 0 00-17.6 0 43.755 43.755 0 00-2.031-4.13 64.021 64.021 0 00-15.87 4.891C27.252 54.611 24.531 69.091 25.892 83.365a63.924 63.924 0 0019.45 9.764 46.971 46.971 0 004.165-6.717 41.363 41.363 0 01-6.56-3.132 74.83 74.83 0 001.608-1.209 45.688 45.688 0 0038.887 0 22.8 22.8 0 001.609 1.21 41.527 41.527 0 01-6.572 3.137 46.557 46.557 0 004.165 6.711c7-2.11 13.584-5.412 19.462-9.758 1.596-16.554-2.727-30.9-11.427-43.621z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M37.306 39.757c9.15-4.222 19.262-5.936 26.694-5.936 7.432 0 17.545 1.714 26.694 5.936l.243 1.931L64 40.362l-26.937 1.326.243-1.93z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="american-indian" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M49.649 25.03c-1.549-5.045-4.682-8.488-7.084-10.11-3.14 4.123-6.622 14.512 1.672 25.722l5.043-.983c.358 1.399 2.453-.838 3.05.672 2.964-2.649 3.475-1.65 4.97-4.286 5.1-8.997 2.726-17.337.283-21.054C55 16.485 51.508 19.853 49.65 25.03zm-2.35 12.612L43.816 23.47l6.343 10.883 5.489-10.883-2.203 13.487c-.235.03.411-.044 0 0-1.921.207-4.382.08-6.144.686z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M90.726 40.817l-.03-.044-.002-.016-.013-.006v-.001a59.507 59.507 0 00-3.388-1.434 63.578 63.578 0 00-8.445-2.63C73.473 35.393 68.29 34.822 64 34.822c-4.296 0-9.488.573-14.871 1.871a64.018 64.018 0 00-11.84 4.07 9.06 9.06 0 01-.034.051c6.863 1.253 16.289 2.04 26.745 2.04 10.447 0 19.864-.785 26.726-2.036zM35.667 43.26c-3.526 5.66-6.01 11.27-7.632 16.834l10.195 2.257-11.382 2.52a61.37 61.37 0 00-.236 1.203l9.618 2.129-10.27 2.273c-.52 4.655-.506 9.282-.067 13.889a63.922 63.922 0 0019.45 9.764 46.971 46.971 0 004.165-6.717 41.363 41.363 0 01-6.56-3.132 74.83 74.83 0 001.608-1.209 45.688 45.688 0 0038.887 0c.526.43 1.064.84 1.609 1.21a41.527 41.527 0 01-6.572 3.137 46.557 46.557 0 004.165 6.711c7-2.11 13.584-5.412 19.462-9.758.464-4.814.428-9.441-.071-13.896L91.77 68.203l9.613-2.128a59.791 59.791 0 00-.235-1.206L89.77 62.351l10.196-2.257c-1.719-5.919-4.3-11.517-7.64-16.833-7.154 1.413-17.2 2.291-28.326 2.291-11.128 0-21.177-.879-28.333-2.292z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="angel" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M46.853 36.282c6.185-1.716 12.248-2.461 17.147-2.461 5.019 0 11.26.781 17.601 2.59l-13.733 2.965H64l-4.866-.203-12.28-2.89z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M47.17 31.928c-.832.59-.914.98-.914 1.092 0 .112.082.502.914 1.091.796.564 2.038 1.128 3.7 1.626 3.304.99 7.953 1.622 13.147 1.622s9.843-.633 13.147-1.622c1.661-.498 2.904-1.062 3.7-1.626.832-.59.914-.979.914-1.091 0-.113-.082-.502-.915-1.092-.795-.563-2.038-1.128-3.699-1.625-3.304-.99-7.953-1.623-13.147-1.623s-9.843.633-13.147 1.623c-1.662.497-2.904 1.062-3.7 1.625zm2.896-4.308c3.63-1.087 8.563-1.74 13.95-1.74 5.389 0 10.321.653 13.952 1.74 1.806.541 3.37 1.213 4.513 2.023 1.107.784 2.097 1.905 2.097 3.377 0 1.472-.99 2.592-2.097 3.376-1.143.81-2.707 1.482-4.513 2.023-3.631 1.088-8.563 1.74-13.951 1.74s-10.32-.652-13.95-1.74c-1.807-.541-3.371-1.213-4.515-2.023-1.106-.784-2.096-1.904-2.096-3.376s.99-2.593 2.096-3.377c1.144-.81 2.708-1.482 4.514-2.023z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42.443 37.67c.464.48.947.871 1.376 1.174 1.516 1.074 3.424 1.861 5.386 2.449 3.98 1.192 9.216 1.866 14.812 1.866s10.831-.674 14.812-1.866c1.962-.588 3.87-1.375 5.386-2.449a9.725 9.725 0 001.368-1.166 63.594 63.594 0 015.097 2.072l.001.001.013.006.002.016c8.69 12.715 13.006 27.054 11.411 43.598a63.633 63.633 0 01-19.462 9.758 46.557 46.557 0 01-4.165-6.71 41.527 41.527 0 006.572-3.139 22.8 22.8 0 01-1.609-1.209 45.688 45.688 0 01-38.887 0c-.52.4-1.058.81-1.608 1.21a41.363 41.363 0 006.56 3.131 46.971 46.971 0 01-4.166 6.717 63.924 63.924 0 01-19.45-9.764C24.533 69.09 27.254 54.61 37.29 39.762a63.727 63.727 0 015.154-2.092z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 129" id="angry" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M46.445 62.593c-.919 1.327-1.459 2.993-1.459 4.795 0 4.297 3.18 7.79 7.028 7.79 3.689 0 6.59-3.091 6.978-7.034-5.145-1.236-9.519-3.204-12.547-5.552zm37.021 0c.918 1.327 1.458 2.993 1.458 4.795 0 4.297-3.18 7.79-7.028 7.79-3.689 0-6.59-3.091-6.978-7.034 5.145-1.236 9.52-3.204 12.548-5.552z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="angry-brows" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M44.015 67.388c0 4.297 3.18 7.789 7.028 7.789 3.922 0 6.954-3.492 7.021-7.789.068-4.296-3.087-7.82-7.033-7.82-3.947 0-7.016 3.524-7.016 7.82zm25.932 0c0 4.297 3.167 7.789 7.021 7.789 3.922 0 6.948-3.492 7.016-7.789.067-4.296-3.063-7.82-7.016-7.82-3.952 0-7.021 3.524-7.021 7.82z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M61.87 61.536l-20.31-6.02-.617 2.086 20.31 6.02z" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M61.87 61.536l-20.31-6.02-.617 2.086 20.31 6.02zm4.26 0l20.31-6.02.618 2.085-20.31 6.02z" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M66.13 61.536l20.31-6.02.618 2.085-20.31 6.02z" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="annoyed" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M44.015 66.373v.015c0 4.297 3.18 7.79 7.028 7.79 3.922 0 6.954-3.493 7.021-7.79v-.015H44.016zm25.932 0v.015c0 4.297 3.18 7.79 7.028 7.79 3.922 0 6.954-3.493 7.021-7.79v-.015h-14.05z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="base-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M44.015 66.888c0 4.297 3.18 7.79 7.028 7.79 3.922 0 6.954-3.493 7.021-7.79.068-4.296-3.087-7.82-7.033-7.82-3.947 0-7.016 3.524-7.016 7.82zm25.932 0c0 4.297 3.167 7.79 7.021 7.79 3.922 0 6.948-3.493 7.016-7.79.067-4.296-3.063-7.82-7.016-7.82-3.952 0-7.021 3.524-7.021 7.82z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="base-shape" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M90.68 39.75a63.576 63.576 0 00-15.858-4.879 43.574 43.574 0 00-2.031 4.13 59.06 59.06 0 00-17.6 0 43.755 43.755 0 00-2.031-4.13 64.021 64.021 0 00-15.87 4.891C27.252 54.611 24.531 69.091 25.892 83.365a63.924 63.924 0 0019.45 9.764 46.971 46.971 0 004.165-6.717 41.363 41.363 0 01-6.56-3.132 74.83 74.83 0 001.608-1.209 45.688 45.688 0 0038.887 0 22.8 22.8 0 001.609 1.21 41.527 41.527 0 01-6.572 3.137 46.557 46.557 0 004.165 6.711c7-2.11 13.584-5.412 19.462-9.758 1.596-16.554-2.727-30.9-11.427-43.621z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="base-upside-down" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M37.32 88.25a63.576 63.576 0 0015.858 4.879 43.574 43.574 0 002.031-4.13 59.06 59.06 0 0017.6 0 43.755 43.755 0 002.031 4.13 64.021 64.021 0 0015.87-4.891c10.037-14.849 12.758-29.329 11.397-43.603a63.92 63.92 0 00-19.45-9.764 46.971 46.971 0 00-4.165 6.717 41.36 41.36 0 016.56 3.132c-.55.399-1.088.81-1.608 1.209a45.688 45.688 0 00-38.887 0 22.77 22.77 0 00-1.609-1.21 41.527 41.527 0 016.572-3.137 46.557 46.557 0 00-4.165-6.711 63.633 63.633 0 00-19.462 9.758c-1.596 16.554 2.727 30.9 11.427 43.621z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="bunny" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M72.793 40.996c9.79 1.372 18.57 4.475 20.759 5.286 6.759 11.576 9.964 24.472 8.555 39.089a63.633 63.633 0 01-19.462 9.758 46.557 46.557 0 01-4.165-6.71 41.527 41.527 0 006.572-3.139 22.8 22.8 0 01-1.609-1.209 45.688 45.688 0 01-38.887 0c-.52.4-1.058.81-1.608 1.21a41.363 41.363 0 006.56 3.131 46.977 46.977 0 01-4.166 6.717 63.924 63.924 0 01-19.45-9.764c-1.221-12.823.85-25.81 8.558-39.083 2.191-.812 10.96-3.91 20.74-5.284l.001.002.25-.037c2.12-.29 4.285-.499 6.44-.584a59.069 59.069 0 014.422.007c1.99.086 3.99.275 5.953.536l.535.078c0-.001 0-.003.002-.004z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M46.931 13.394c14.784-2.962 15.66 20.517 14.013 29.167L49.22 43.9c-6.982-9.934-13.942-28.171-2.288-30.506zm34.138 0C66.285 10.432 65.409 33.91 67.056 42.56L78.78 43.9c6.981-9.934 13.942-28.171 2.288-30.506z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M64.922 90.874a46.75 46.75 0 008.192-.792v5.136s-2.226.45-4.096.45-4.096-.45-4.096-.45v-4.344zm-10.036-.95l.426.084.01.002c2.398.447 4.996.762 7.756.844v4.364s-2.226.45-4.096.45-4.096-.45-4.096-.45v-5.294z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="cap" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M63.893 39.383c-18.22 0-27.126 11.013-29.227 15.995a2.91 2.91 0 11-5.362-2.261c2.896-6.868 13.749-19.553 34.589-19.553 20.834 0 31.82 12.676 34.791 19.526a2.91 2.91 0 01-5.338 2.315c-2.169-5-11.227-16.023-29.453-16.023z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M63.893 42.575c-17.123 0-25.211 10.314-26.978 14.503a5.35 5.35 0 01-8.536 1.876c-2.676 8.563-3.286 17.023-2.486 25.41a63.924 63.924 0 0019.45 9.765 46.977 46.977 0 004.165-6.717 41.372 41.372 0 01-6.56-3.132 74.83 74.83 0 001.608-1.209 45.69 45.69 0 0038.887 0 22.8 22.8 0 001.609 1.21 41.536 41.536 0 01-6.572 3.137 46.557 46.557 0 004.165 6.711c7-2.11 13.584-5.412 19.462-9.758.878-9.109-.036-17.55-2.485-25.418a5.35 5.35 0 01-8.516-1.825c-1.832-4.223-10.079-14.553-27.213-14.553z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.365 43.386c2.45-12.749 15.668-22.488 31.606-22.488 15.95 0 29.175 9.754 31.611 22.517-6.024-6.525-16.404-13.006-31.69-13.006-15.251 0-25.558 6.454-31.527 12.977zm26.59-24.749a5.22 5.22 0 0110.092.008 40.834 40.834 0 00-10.092-.008z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="cat" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.706 24.525l-2.299 21.6.01-.002c-4.731 8.713-7.07 17.305-7.683 25.811l12.443 2.515-12.595.718a68.633 68.633 0 00.11 5.63l11.737-.813-11.383 3.494a63.925 63.925 0 0019.296 9.651 46.971 46.971 0 004.166-6.717 41.363 41.363 0 01-6.56-3.132 74.83 74.83 0 001.608-1.209 45.688 45.688 0 0038.887 0c.526.43 1.064.84 1.609 1.21a41.527 41.527 0 01-6.572 3.137 46.557 46.557 0 004.165 6.711 63.628 63.628 0 0019.314-9.65l-11.388-3.495 11.738.812c.114-1.906.15-3.782.108-5.63l-12.594-.717 12.44-2.514c-.677-9.304-3.345-17.866-7.672-25.81h.002l-2.3-21.6-18.218 12.489a33.03 33.03 0 014.605 1.506 41.401 41.401 0 016.56 3.132c-.55.399-1.089.81-1.609 1.209a45.69 45.69 0 00-38.887 0 22.98 22.98 0 00-1.608-1.21 41.521 41.521 0 016.572-3.137c1.105-.448 2.61-.936 4.41-1.368L35.705 24.525z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="cat-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M43.932 67.373c0-4.811 3.549-8.755 8.044-8.755 4.496 0 8.124 3.944 8.045 8.755 0 4.811-3.549 8.755-8.044 8.755-4.417 0-8.045-3.944-8.045-8.755zm8.895-5.1c-1.598 1.53-3.835 5.712 0 10.2 3.835-4.488 1.598-8.67 0-10.2zm15.15 5.1c0-4.811 3.55-8.755 8.045-8.755 4.496 0 8.124 3.944 8.045 8.755 0 4.811-3.55 8.755-8.045 8.755-4.417 0-8.045-3.944-8.045-8.755zm6.917-5.1c-1.598 1.53-3.835 5.712 0 10.2 3.835-4.488 1.598-8.67 0-10.2z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="chubby" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M41.855 69.683c5 1.404 8.923 4.141 12.145 7.843 4.016-1.344 6.947-5.56 6.947-10.551 0-6.074-4.34-10.999-9.694-10.999-5.354 0-9.694 4.925-9.694 10.999 0 .935.103 1.842.296 2.708zm13.31 1.29c1.952 0 3.535-1.79 3.535-3.998s-1.583-3.997-3.536-3.997c-1.952 0-3.536 1.79-3.536 3.997 0 2.208 1.584 3.997 3.536 3.997zm30.98-1.29c-5 1.404-8.923 4.141-12.145 7.843-4.016-1.344-6.947-5.56-6.947-10.551 0-6.074 4.34-10.999 9.694-10.999 5.354 0 9.694 4.925 9.694 10.999 0 .935-.103 1.842-.296 2.708zm-13.31 1.29c-1.952 0-3.535-1.79-3.535-3.998s1.583-3.997 3.535-3.997c1.953 0 3.537 1.79 3.537 3.997 0 2.208-1.584 3.997-3.537 3.997z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="chubby-shape" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.243 39a58.358 58.358 0 0117.514 0c.174-.41.23-.75.28-1.051.122-.738.208-1.26 1.898-2.076 4.162-2.009 12.166-1.003 15.618 3.888 9.976 14.85 13.327 29.422 11.329 43.605-1.231 8.73-15.864 10.395-19.367 8.353-3.002-1.75-5.74-5.351-5.74-5.351-4.343 1.354-8.205 2.048-12.775 2.048s-8.432-.694-12.774-2.048c0 0-2.74 3.601-5.74 5.351-3.504 2.043-18.137.376-19.368-8.353-1.998-14.183 1.353-28.755 11.33-43.605 3.451-4.891 11.455-5.897 15.617-3.888 1.69.816 1.776 1.338 1.898 2.076.05.302.106.64.28 1.05z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 129" id="crazy-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M42.539 71.51a12.062 12.062 0 01-1.639-6.115c0-6.218 4.442-11.318 10.155-11.318 5.712 0 10.278 5.1 10.18 11.318-.035 2.252-.633 4.352-1.652 6.114H42.54zm28.505 0a8.36 8.36 0 01-1.069-4.122c0-4.296 3.07-7.819 7.022-7.819 3.953 0 7.083 3.523 7.015 7.82a8.74 8.74 0 01-1.08 4.12H71.043z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="crown" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M62.732 35.053a1.82 1.82 0 012.574 0l3.704 3.704c.71.71.71 1.864 0 2.575l-3.704 3.703a1.82 1.82 0 01-2.574 0l-3.704-3.703a1.82 1.82 0 010-2.575l3.704-3.704z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M31.338 41.273l-.002 6.938c3.86-2.817 13.318-7.869 24.59-9.37a4.53 4.53 0 011.171-2.015l3.704-3.703a4.536 4.536 0 013.218-1.333h.043a4.54 4.54 0 013.22 1.333l3.703 3.703c.58.58.97 1.277 1.171 2.015 11.272 1.501 20.729 6.553 24.59 9.37l-.002-6.938-24.588-8.15-8.137-3.663-8.094 3.663-24.587 8.15z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M64.002 17.853l12.317 16.463-6.33-1.27-5.987-2.493-5.546 2.493-6.771 1.27 12.317-16.463zM31.247 31.772l.092 9.559 10.252-2.177-10.344-7.382z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M45.755 23.96l-7.148 15.007 17.045-4.14-9.897-10.867zm50.991 7.812v9.614l-10.344-2.232 10.344-7.382z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M82.237 23.96l7.148 15.007-17.044-4.14 9.896-10.867z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.636 51.63l1.433-1.045c3.484-2.541 12.3-7.278 22.826-8.773a4.74 4.74 0 001.055 1.598l3.703 3.704a4.76 4.76 0 006.732 0l3.703-3.704a4.743 4.743 0 001.058-1.604c10.544 1.488 19.379 6.234 22.867 8.78l1.321.963c4.83 10.193 6.972 21.384 5.773 33.822a63.633 63.633 0 01-19.462 9.758 46.557 46.557 0 01-4.165-6.71 41.527 41.527 0 006.572-3.139 22.77 22.77 0 01-1.609-1.209 45.688 45.688 0 01-38.887 0c-.52.4-1.058.81-1.608 1.21a41.363 41.363 0 006.56 3.131 46.971 46.971 0 01-4.166 6.717 63.922 63.922 0 01-19.45-9.764c-1.057-11.095.352-22.314 5.744-33.735z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="cute" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.04 78.127c5.235 0 9.478-4.815 9.478-10.754 0-5.94-4.243-10.754-9.478-10.754-5.234 0-9.478 4.815-9.478 10.754 0 5.94 4.244 10.754 9.478 10.754zm3.825-6.015c2.315 0 4.192-2.122 4.192-4.739s-1.877-4.739-4.192-4.739c-2.316 0-4.193 2.122-4.193 4.739s1.877 4.739 4.193 4.739zm22.101 6.015c-5.235 0-9.478-4.815-9.478-10.754 0-5.94 4.243-10.754 9.478-10.754 5.234 0 9.478 4.815 9.478 10.754 0 5.94-4.244 10.754-9.478 10.754zm-3.797-6.015c-2.315 0-4.192-2.122-4.192-4.739s1.877-4.739 4.192-4.739c2.316 0 4.192 2.122 4.192 4.739s-1.877 4.739-4.192 4.739z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="cute-downwards" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.151 78.405c5.37 0 9.723-4.94 9.723-11.032 0-6.093-4.353-11.031-9.723-11.031-5.37 0-9.722 4.939-9.722 11.031 0 6.093 4.353 11.032 9.722 11.032zm1.981-2.354c2.376 0 4.3-2.176 4.3-4.861 0-2.685-1.924-4.862-4.3-4.862-2.374 0-4.3 2.177-4.3 4.862s1.925 4.861 4.3 4.861zm23.589 2.354c-5.37 0-9.723-4.94-9.723-11.032 0-6.093 4.353-11.031 9.723-11.031 5.37 0 9.723 4.939 9.723 11.031 0 6.093-4.353 11.032-9.723 11.032zM74.74 76.05c-2.375 0-4.3-2.176-4.3-4.861 0-2.685 1.925-4.862 4.3-4.862s4.3 2.177 4.3 4.862-1.925 4.861-4.3 4.861z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="dead" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill="var(--svg-custom-color, #4F5660)" d="M55.548 60.06l-11.82 11.821 2.804 2.804 11.82-11.82z" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M55.548 60.06l-11.82 11.821 2.804 2.804 11.82-11.82zm25.926 0l-11.82 11.821 2.804 2.805 11.82-11.821z" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M81.474 60.06l-11.82 11.821 2.804 2.805 11.82-11.821zM58.353 71.88L46.532 60.06l-2.804 2.805 11.82 11.82z" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M58.353 71.88L46.532 60.06l-2.804 2.805 11.82 11.82zm25.925.001l-11.82-11.82-2.805 2.804 11.821 11.82z" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #4F5660)" d="M84.278 71.881l-11.82-11.82-2.805 2.804 11.821 11.82z" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="devil" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M90.68 39.75a63.576 63.576 0 00-15.858-4.879 43.574 43.574 0 00-2.031 4.13 59.06 59.06 0 00-17.6 0 43.755 43.755 0 00-2.031-4.13 64.021 64.021 0 00-15.87 4.891C27.252 54.611 24.531 69.091 25.892 83.365a63.924 63.924 0 0019.45 9.764 46.971 46.971 0 004.165-6.717 41.363 41.363 0 01-6.56-3.132 74.83 74.83 0 001.608-1.209 45.688 45.688 0 0038.887 0 22.8 22.8 0 001.609 1.21 41.527 41.527 0 01-6.572 3.137 46.557 46.557 0 004.165 6.711c7-2.11 13.584-5.412 19.462-9.758 1.596-16.554-2.727-30.9-11.427-43.621z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M55.073 39.2c-.305.023-.614.035-.926.035-6.574 0-11.905-5.32-11.922-11.89A8.988 8.988 0 1055.073 39.2zm17.854 0c.305.023.614.035.926.035 6.574 0 11.905-5.32 11.922-11.89A8.988 8.988 0 1172.927 39.2z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M37.306 39.757c9.15-4.222 19.262-5.936 26.694-5.936 7.432 0 17.545 1.714 26.694 5.936l.243 1.931L64 40.362l-26.937 1.326.243-1.93z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="evil-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.154 59.635c-2.529 1.482-4.222 4.392-4.222 7.715 0 1.97.608 3.796 1.63 5.264.535.116 1.07.245 1.609.385a37.489 37.489 0 017.245 2.701c3.276-1.122 5.607-4.451 5.607-8.35a9.263 9.263 0 00-.005-.49 25.217 25.217 0 01-5.077-2.022c-.05 2.03-.624 4.306-2.114 6.645-2.166-3.4-2.395-6.668-1.896-9.24a21.222 21.222 0 01-2.777-2.608zm31.694 0c2.53 1.482 4.223 4.391 4.223 7.715a9.2 9.2 0 01-1.632 5.264c-.533.116-1.07.245-1.607.385a37.492 37.492 0 00-7.245 2.701c-3.276-1.123-5.607-4.452-5.607-8.35a9.366 9.366 0 01.005-.49 25.22 25.22 0 005.077-2.022c.05 2.03.624 4.306 2.114 6.645 2.165-3.4 2.394-6.669 1.896-9.24a21.211 21.211 0 002.776-2.608z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="face-mask" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M74.822 34.44a63.573 63.573 0 0115.858 4.879c6.31 9.227 10.318 19.309 11.434 30.468l-1.423 1.137c-2.481 1.98-6.728 4.796-11.23 7.063-4.625 2.33-8.997 3.81-11.9 3.678-2.472-.113-4.12-.449-5.3-.826-1.173-.374-1.976-.814-2.847-1.297l-.067-.037c-1.299-.72-2.858-1.584-5.348-1.584-2.49 0-4.05.864-5.348 1.584l-.067.037c-.871.483-1.674.923-2.847 1.297-1.18.377-2.828.713-5.3.826-2.903.132-7.275-1.348-11.9-3.678-4.502-2.267-8.749-5.083-11.23-7.063l-1.426-1.138c.997-10.01 4.439-20.144 11.408-30.455a64.019 64.019 0 0115.87-4.891 43.755 43.755 0 012.032 4.13 59.06 59.06 0 0117.6 0 43.574 43.574 0 012.03-4.13zM25.624 73.422a49.674 49.674 0 01-.001-.388 51.887 51.887 0 002.745 2.03 76.65 76.65 0 009.008 5.361c-.55 2.212-.911 5.733-.976 9.314a60.002 60.002 0 00.055 3.974 38.09 38.09 0 00-1.213-.578h-.001a15.54 15.54 0 01-1.095-.559c-2.583-1.448-5.296-3.97-6.949-8.703-.705-2.02-1.217-4.44-1.444-7.353a44.291 44.291 0 01-.129-3.098zM39.1 89.788c.059-3.237.367-6.25.774-8.177 3.852 1.718 7.693 2.887 10.687 2.751 5.331-.242 7.554-1.473 9.332-2.458 1.272-.704 2.316-1.283 4.107-1.283 1.791 0 2.835.579 4.107 1.283 1.778.985 4 2.216 9.332 2.458 2.995.136 6.836-1.034 10.689-2.752.407 1.928.715 4.94.774 8.178a53.72 53.72 0 01-.161 5.428c-.087.045-.174.09-.263.134-6.69 3.404-18.282 8.204-24.478 8.204-.885 0-1.88-.098-2.956-.275-6.55-1.084-16.073-5.132-21.782-8.062a53.712 53.712 0 01-.162-5.43zm52.446 3.924c.345-.175.712-.346 1.094-.523l.118-.054c3.048-1.409 6.535-3.313 8.358-9.476.57-1.93.978-4.278 1.157-7.159.068-1.078.103-2.232.103-3.466l-.019.015a51.961 51.961 0 01-2.716 2.009 76.642 76.642 0 01-9.016 5.366c.55 2.212.912 5.734.976 9.315a60.038 60.038 0 01-.055 3.973zM80.07 90.967H47.93v-2h32.14v2zm-28.61 6.025h25.08v-2H51.46v2z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 129" id="female-lashes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M39.8 59.17c2.04 2.65 6.648 3.49 9.62 3.027l-.426 3.48c-7.809-.339-9.053-5.092-9.194-6.507z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M48.154 60.81c1.788.437 3.767.487 5.456.215-1.445.766-4.177 1.416-6.958 1.244-1.061 1.375-1.695 3.167-1.695 5.12 0 4.296 3.18 7.788 7.028 7.788 3.922 0 6.954-3.492 7.021-7.789.068-4.296-3.087-7.82-7.034-7.82-1.42 0-2.727.457-3.818 1.242z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M90.097 59.17c-2.04 2.65-6.65 3.49-9.621 3.027l.426 3.48c7.809-.339 9.053-5.092 9.195-6.507z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M81.742 60.81a14.248 14.248 0 01-5.456.215c1.445.766 4.178 1.416 6.958 1.244 1.062 1.375 1.695 3.167 1.695 5.12 0 4.296-3.18 7.788-7.027 7.788-3.922 0-6.955-3.492-7.022-7.789-.067-4.296 3.087-7.82 7.034-7.82 1.42 0 2.727.457 3.818 1.242z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 129" id="glasses-1" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><ellipse cx="52.484" cy="67.623" rx="4.463" ry="5.111" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><ellipse rx="4.463" ry="5.111" transform="matrix(-1 0 0 1 77.517 67.623)" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M51.523 75.368a7.746 7.746 0 100-15.49 7.746 7.746 0 000 15.49zm0 2.883c5.87 0 10.628-4.758 10.628-10.628s-4.759-10.628-10.628-10.628c-5.87 0-10.629 4.758-10.629 10.628s4.76 10.627 10.629 10.627zm26.955-2.883a7.746 7.746 0 110-15.49 7.746 7.746 0 010 15.49zm0 2.883c-5.87 0-10.629-4.758-10.629-10.628s4.759-10.628 10.629-10.628c5.87 0 10.628 4.758 10.628 10.628S84.347 78.25 78.478 78.25z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M64.467 64.07c-1.409.103-2.588.455-3.19.716l-1.146-2.645c.902-.391 2.399-.82 4.127-.946 1.734-.126 3.797.047 5.758.962l-1.22 2.612c-1.388-.648-2.925-.8-4.329-.699z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="glasses-2" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><ellipse cx="50.844" cy="69.725" rx="4.676" ry="5.354" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M63.549 66.122c-1.008.073-1.843.325-2.25.501l-1.2-2.771c.721-.312 1.889-.645 3.23-.742 1.348-.098 2.97.034 4.524.76l-1.277 2.736c-.954-.445-2.026-.557-3.027-.484z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42.244 63.187v8.872h17.331v-8.872H42.244zm-1.007-3.02a2.013 2.013 0 00-2.013 2.013v10.886c0 1.112.901 2.013 2.013 2.013h19.345a2.013 2.013 0 002.013-2.013V62.18a2.013 2.013 0 00-2.013-2.013H41.237z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><ellipse rx="4.676" ry="5.354" transform="matrix(-1 0 0 1 77.418 69.725)" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M86.019 63.187v8.872H68.688v-8.872h17.331zm1.007-3.02c1.112 0 2.013.901 2.013 2.013v10.886a2.013 2.013 0 01-2.013 2.013H67.68a2.013 2.013 0 01-2.013-2.013V62.18c0-1.112.901-2.013 2.013-2.013h19.345z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="hair-1" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.156 43.092c-8.287 13.686-10.522 27.067-9.263 40.273a63.922 63.922 0 0019.45 9.764 46.971 46.971 0 004.165-6.717 41.363 41.363 0 01-6.56-3.132 74.83 74.83 0 001.608-1.209 45.688 45.688 0 0038.887 0c.526.43 1.064.84 1.609 1.21a41.527 41.527 0 01-6.572 3.137 46.557 46.557 0 004.165 6.711c7-2.11 13.584-5.412 19.462-9.758 1.425-14.775-1.866-27.792-8.776-39.463-2.419 1.166-5.51 1.763-9.552 1.1-1.071-.176-1.601-.004-2.95.432-.302.098-.646.21-1.045.333-2.197.678-5.038 1.26-9.936.706-4.959-.56-9.156-1.91-12.567-3.008-1.203-.388-2.31-.744-3.316-1.022-2.016-.558-3.698-.848-5.302-.758-1.558.087-3.18.54-5.043 1.683-1.845 1.131-3.89 2.005-5.821 1.573-1.29-.289-2.118-1.02-2.643-1.855z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M38.507 33.263c1.103-3.412 5.293-6.938 10.178-5.63 4.886 1.307 8.24 1.548 18.417-2.633-.387 2.209-2.698 4.77-5.273 6.592 5.424-.694 12.874-.78 18.07 1.24C87.745 35.885 96.705 37.23 98 36.625c-2.22 1.635-4.926 7.172-13.784 5.72-4.198-.69-5.058 2.47-14.065 1.452-12.869-1.453-19.06-8.172-27.943-2.724-7.106 4.359-5.428-3.39-3.7-7.81z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="hair-2" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M63.981 23.32c-8.433-.328-27.533 2.596-36.47 16.922-11.17 17.906-14.52 26.06-8.4 27.68 1.863.493 9.058 1.824 13-.41l6.079-25.3h10.194l3.9-5.802 3.468 5.803h34.021l6.079 25.299c3.942 2.234 9.92.903 11.782.41 6.785-1.796 3.988-9.774-7.182-27.68-8.937-14.326-28.038-17.25-36.47-16.921z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40.397 45.013L34.55 69.348l-1.058.6c-2.284 1.294-5.122 1.623-7.543 1.619-.509 4.624-.492 9.221-.056 13.798a63.924 63.924 0 0019.45 9.764 46.977 46.977 0 004.165-6.717 41.363 41.363 0 01-6.56-3.132 74.83 74.83 0 001.608-1.209 45.688 45.688 0 0038.887 0 22.8 22.8 0 001.609 1.21 41.527 41.527 0 01-6.572 3.137 46.557 46.557 0 004.165 6.711c7-2.11 13.584-5.412 19.462-9.758.461-4.783.428-9.382-.062-13.811-2.322.058-5.142-.234-7.574-1.612l-1.058-.6-5.847-24.335H54.163l-2.018-3.377-2.269 3.377h-9.48z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M84.758 23.297l2.19 6.657 3.944 3.243 5.641-3.243-6.298-.683-5.477-5.974z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="hanging-ears" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.191 39a59.1 59.1 0 018.818-.659 59.1 59.1 0 018.818.66 43.755 43.755 0 012.032-4.13 64.019 64.019 0 0115.87 4.891c10.036 14.849 11.701 29.133 11.701 43.367 0 4.424-1.996 7.686-7.154 7.686-5.386 0-5.753-5.1-6.137-10.446l-.06-.809a130.826 130.826 0 00-5.617 2.511 45.688 45.688 0 01-19.444 4.344H64a45.688 45.688 0 01-19.443-4.344 130.841 130.841 0 00-5.618-2.51l-.059.808c-.384 5.346-.75 10.446-6.137 10.446-5.157 0-7.154-3.262-7.154-7.686 0-14.234 1.665-28.518 11.701-43.367a64.019 64.019 0 0115.87-4.891 43.78 43.78 0 012.032 4.13z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="hannibal" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M74.822 34.443a63.572 63.572 0 0115.858 4.879c6.31 9.226 10.318 19.309 11.435 30.468l-1.424 1.137c-2.481 1.98-6.728 4.795-11.23 7.063-4.625 2.33-8.997 3.81-11.9 3.678-2.472-.113-4.12-.45-5.3-.826-1.173-.374-1.976-.815-2.847-1.297l-.067-.037c-1.299-.72-2.858-1.584-5.348-1.584-2.49 0-4.049.864-5.348 1.584l-.067.037c-.871.482-1.674.923-2.847 1.297-1.18.377-2.828.713-5.3.826-2.903.132-7.275-1.349-11.9-3.678-4.502-2.267-8.749-5.083-11.23-7.063l-1.426-1.139c.997-10.01 4.439-20.143 11.408-30.454a64.021 64.021 0 0115.87-4.891 43.745 43.745 0 012.032 4.13 59.054 59.054 0 0117.6 0 43.564 43.564 0 012.031-4.13zM25.624 73.424l-.001-.387a51.884 51.884 0 002.745 2.03c6.046 4.198 15.953 9.582 22.192 9.298 5.331-.242 7.554-1.474 9.332-2.458 1.272-.704 2.316-1.283 4.107-1.283 1.791 0 2.835.579 4.107 1.283 1.778.984 4 2.216 9.332 2.458 6.242.284 16.157-5.106 22.202-9.304a52.015 52.015 0 002.716-2.01l.019-.014c0 1.234-.035 2.387-.103 3.466-.177 2.844-.576 5.169-1.136 7.085-1.816 6.222-5.319 8.135-8.379 9.55l-.117.054c-.585.27-1.134.528-1.625.806-.726.411-1.582.869-2.538 1.355-6.69 3.404-18.282 8.204-24.478 8.204-.885 0-1.88-.098-2.956-.276-7.527-1.245-18.98-6.405-24.06-9.283-.523-.297-1.113-.57-1.742-.86a15.69 15.69 0 01-1.104-.564c-2.604-1.462-5.338-4.017-6.985-8.83-.682-1.992-1.177-4.371-1.4-7.221a44.35 44.35 0 01-.128-3.099zm49.679 19.877a4.004 4.004 0 01-3.599 3.983v-7.966a4.004 4.004 0 013.599 3.983zm-9.868-4.004h3.678v8.007h-3.678v-8.007zm-6.27 8.007h3.679v-8.007h-3.678v8.007zm-2.59-8.005a4.003 4.003 0 000 8.003V89.3z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="happy" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M70.19 69.418a8.544 8.544 0 01-.243-2.03c0-4.296 3.069-7.82 7.021-7.82 3.953 0 7.083 3.524 7.016 7.82a9.057 9.057 0 01-.257 2.015c-1.8-1.775-4.167-2.853-6.761-2.853-2.602 0-4.975 1.084-6.776 2.868zm-25.92 0a8.539 8.539 0 01-.243-2.03c0-4.296 3.07-7.82 7.022-7.82 3.953 0 7.083 3.524 7.015 7.82-.01.697-.1 1.372-.257 2.015-1.799-1.775-4.166-2.853-6.76-2.853-2.602 0-4.976 1.084-6.777 2.868z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="headphones" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M93.51 44.267c-2.257-.835-10.989-3.908-20.717-5.271L72.79 39a60.99 60.99 0 00-.535-.078 67.008 67.008 0 00-5.953-.536 59.069 59.069 0 00-4.422-.007 67.15 67.15 0 00-6.69.621v-.002c-9.723 1.365-18.446 4.435-20.7 5.269.522.723.798 1.587.882 2.548.114 1.312-.113 2.935-.506 4.881-.402 1.998-1.035 4.589-1.865 7.931-.832 3.35-1.5 5.939-2.1 7.9-.584 1.913-1.167 3.45-1.9 4.553-.818 1.233-1.918 2.055-3.396 2.245a69.63 69.63 0 00.287 9.04 63.924 63.924 0 0019.45 9.764 46.977 46.977 0 004.165-6.717 41.372 41.372 0 01-6.56-3.132 74.83 74.83 0 001.608-1.209 45.69 45.69 0 0038.887 0 22.8 22.8 0 001.609 1.21 41.536 41.536 0 01-6.572 3.137 46.557 46.557 0 004.165 6.711c7-2.11 13.584-5.412 19.462-9.758.298-3.091.39-6.105.285-9.046-1.477-.19-2.576-1.012-3.395-2.245-.733-1.104-1.315-2.64-1.9-4.554-.6-1.96-1.267-4.549-2.099-7.899-.83-3.342-1.463-5.933-1.866-7.93-.392-1.947-.62-3.57-.505-4.882.084-.96.36-1.825.883-2.548z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M30.77 59.073c-3.332 13.42-3.797 13.671-8.074 12.609-5.188-1.289-7.865-8.488-5.98-16.081 1.886-7.593 7.62-12.704 12.808-11.416 4.494 1.116 4.58 1.468 1.246 14.888zm66.46 0c3.332 13.42 3.797 13.671 8.074 12.609 5.188-1.289 7.865-8.488 5.98-16.081-1.886-7.593-7.62-12.704-12.808-11.416-4.494 1.116-4.58 1.468-1.246 14.888z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M63.89 33.285c-21.25 0-30.541 8.7-32.476 12.524l-2.41-1.22c2.54-5.018 12.985-14.004 34.885-14.004 21.909 0 33.043 8.985 35.961 13.928l-2.325 1.373c-2.302-3.9-12.394-12.601-33.636-12.601z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="heart-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M57.847 61.16a4.404 4.404 0 00-3.276-1.426c-.946 0-1.811.299-2.574.888a5.268 5.268 0 00-1.04 1.087 5.266 5.266 0 00-1.04-1.087 4.12 4.12 0 00-2.574-.888 4.405 4.405 0 00-3.277 1.426c-.838.909-1.3 2.15-1.3 3.496 0 1.385.517 2.653 1.626 3.99.991 1.197 2.416 2.412 4.066 3.818.564.48 1.202 1.025 1.866 1.604a.96.96 0 001.266 0 178.29 178.29 0 011.866-1.604c1.65-1.406 3.075-2.62 4.066-3.817 1.108-1.338 1.625-2.606 1.625-3.99 0-1.347-.462-2.588-1.3-3.497zm26.087 0a4.404 4.404 0 00-3.277-1.426c-.945 0-1.811.299-2.573.888a5.268 5.268 0 00-1.04 1.087 5.26 5.26 0 00-1.041-1.087 4.12 4.12 0 00-2.574-.888 4.405 4.405 0 00-3.276 1.426c-.838.909-1.3 2.15-1.3 3.496 0 1.385.517 2.653 1.625 3.99.992 1.197 2.416 2.412 4.067 3.818.563.48 1.202 1.025 1.865 1.604a.96.96 0 001.266 0 178.29 178.29 0 011.866-1.604c1.65-1.406 3.075-2.62 4.067-3.817 1.108-1.338 1.624-2.606 1.624-3.99 0-1.347-.461-2.588-1.3-3.497z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="knit-cap" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.002 55.386c.157-.009.283-.025.369-.037a7.521 7.521 0 001.332-.334c.737-.248 1.667-.636 2.645-1.045l.094-.04c3.636-1.518 9.686-4.043 18.045-5.39a72.365 72.365 0 0111.52-.91c14.474 0 24.428 4.156 29.564 6.3l.093.04.217.09c.898.375 1.746.725 2.428.955.376.126.847.267 1.333.334.084.012.209.028.363.037 3.639 9.15 5.153 19.09 4.102 29.985a63.633 63.633 0 01-19.462 9.758 46.557 46.557 0 01-4.165-6.71 41.527 41.527 0 006.572-3.139 22.77 22.77 0 01-1.609-1.209 45.688 45.688 0 01-38.887 0 74.6 74.6 0 01-1.608 1.21 41.363 41.363 0 006.56 3.131 46.971 46.971 0 01-4.166 6.717 63.922 63.922 0 01-19.45-9.764c-.94-9.876.072-19.851 4.11-29.979z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M29.491 40.828c-1.118.285-3.074 2.019-2.795 3.178.101.42.211.931.332 1.493.549 2.546 1.318 6.12 2.463 6.82.402.246 1.675-.286 3.79-1.169 5.24-2.188 15.64-6.532 30.725-6.532 15.084 0 25.487 4.344 30.726 6.532 2.114.883 3.388 1.415 3.79 1.17 1.145-.702 1.914-4.275 2.462-6.821.121-.562.231-1.073.332-1.493.198-.82-1.677-2.893-2.794-3.178-14.086-6.064-28.928-6.48-34.516-6.48-5.587 0-20.43.416-34.515 6.48z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M33.304 36.379c3.439-6.268 12.491-14.667 30.702-14.857 18.21.19 27.263 8.59 30.703 14.857-13.01-4.484-25.654-4.809-30.703-4.809-5.048 0-17.692.325-30.702 4.809z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M62.943 14.74c-.862.082-1.682.256-2.436.506l.299 3.064-2.755-1.814c-1.058.786-1.788 1.78-2.041 2.882a55.63 55.63 0 017.967-.634h.058c2.918.03 5.623.262 8.127.66-.248-1.111-.98-2.114-2.043-2.906l-2.53 1.666.277-2.847c-.64-.228-1.332-.4-2.058-.506l-1.62 2.957-1.245-3.027z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="line-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M85.805 66.807L70.178 71.47l-1.053-3.53 15.627-4.662 1.053 3.53zm-43.61 0l15.627 4.662 1.053-3.53-15.627-4.662-1.053 3.53z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="line-eyes-happy" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.252 61.062l8.253 8.252-2.37 2.37-5.883-5.881-5.881 5.881-2.37-2.37 8.252-8.252zm25.496 0L85 69.314l-2.37 2.37-5.882-5.881-5.882 5.881-2.37-2.37 8.252-8.252z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="mohawk" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M74.705 34.906v9.93h-21.41v-10.08a31.39 31.39 0 012.4-.31l.148-.025c.333-.057.628-.107.973-.107 4.02-.528 8.568-.66 13.314-.132 1.5.174 3.026.412 4.575.725z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M77.405 47.537h-26.81v-7.764c-7.823 1.531-14.304 3.827-16.145 4.509-7.708 13.272-9.78 26.26-8.557 39.083a63.922 63.922 0 0019.45 9.764 46.971 46.971 0 004.165-6.717 41.363 41.363 0 01-6.56-3.132 74.83 74.83 0 001.608-1.209 45.688 45.688 0 0038.887 0c.526.43 1.064.84 1.609 1.21a41.527 41.527 0 01-6.572 3.137 46.557 46.557 0 004.165 6.711c7-2.11 13.584-5.412 19.462-9.758 1.409-14.617-1.796-27.513-8.555-39.089-1.837-.68-8.32-2.977-16.147-4.508v7.763z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="mono-brow" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M44.015 67.388c0 4.297 3.18 7.789 7.028 7.789 3.922 0 6.954-3.492 7.021-7.789.068-4.296-3.087-7.82-7.033-7.82-3.947 0-7.016 3.524-7.016 7.82zm25.932 0c0 4.297 3.167 7.789 7.021 7.789 3.922 0 6.948-3.492 7.016-7.789.067-4.296-3.063-7.82-7.016-7.82-3.952 0-7.021 3.524-7.021 7.82z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M87.864 62.316H40.136V59.57h47.728v2.747z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="monocle" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M44.015 66.888c0 4.297 3.18 7.789 7.028 7.789 3.922 0 6.954-3.492 7.021-7.789.068-4.296-3.087-7.82-7.033-7.82-3.947 0-7.016 3.524-7.016 7.82zm25.932 0c0 4.297 3.167 7.789 7.021 7.789 3.922 0 6.948-3.492 7.016-7.789.067-4.296-3.063-7.82-7.016-7.82-3.952 0-7.021 3.524-7.021 7.82z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M51.04 77.186c5.696 0 10.313-4.617 10.313-10.313 0-5.696-4.617-10.313-10.313-10.313-5.695 0-10.313 4.617-10.313 10.313 0 5.696 4.618 10.313 10.313 10.313zm0 3.838c7.816 0 14.151-6.336 14.151-14.151 0-7.816-6.335-14.151-14.15-14.151-7.816 0-14.152 6.335-14.152 14.15 0 7.816 6.336 14.152 14.151 14.152z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><circle cx="34.277" cy="66.932" r="1.861" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><circle cx="34.277" cy="72.014" r="1.861" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><circle cx="34.277" cy="77.095" r="1.861" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><circle cx="34.277" cy="82.169" r="1.861" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><circle cx="34.277" cy="87.243" r="1.861" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><circle cx="34.277" cy="92.317" r="1.861" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="mouse" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.094 36.924c-2.235.48-4.087 1.063-5.386 1.59a41.521 41.521 0 00-6.572 3.138c.544.368 1.082.78 1.608 1.209a45.69 45.69 0 0138.887 0c.52-.4 1.058-.81 1.609-1.21a41.365 41.365 0 00-6.56-3.131 33.456 33.456 0 00-5.747-1.77c1.136-6.933 7.154-12.222 14.408-12.222 8.064 0 14.6 6.537 14.6 14.6a14.57 14.57 0 01-5.24 11.207c4.571 9.981 6.574 20.917 5.406 33.036a63.633 63.633 0 01-19.462 9.758 46.557 46.557 0 01-4.165-6.71 41.527 41.527 0 006.572-3.139 22.77 22.77 0 01-1.609-1.209 45.688 45.688 0 01-38.887 0c-.52.4-1.058.81-1.608 1.21a41.363 41.363 0 006.56 3.131 46.971 46.971 0 01-4.166 6.717 63.922 63.922 0 01-19.45-9.764c-1.035-10.865.294-21.85 5.414-33.025a14.57 14.57 0 01-5.248-11.212c0-8.063 6.537-14.6 14.6-14.6 7.315 0 13.373 5.378 14.436 12.396z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="mustache" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M74.822 34.871A63.576 63.576 0 0190.68 39.75c8.7 12.72 13.023 27.067 11.427 43.621-5.879 4.347-11.534-6.825-18.534-4.714-18.445 3.446-32.94 1.436-37.689 0-6.993-2.12-14.114 9.05-19.991 4.708-1.36-14.274 1.36-28.754 11.396-43.603a64.021 64.021 0 0115.87-4.891 43.755 43.755 0 012.032 4.13 59.06 59.06 0 0117.6 0 43.574 43.574 0 012.031-4.13z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M48.404 99.92c-4.045 0-13.576-6.342-22.507-16.55l14.322-7.39 50.24.88 11.65 6.51c-8.93 10.208-17.696 16.55-22.506 16.55-2.238 0-4.393-.773-6.699-1.602-2.65-.952-5.5-1.975-8.9-1.975-3.276 0-6.435 1.076-9.288 2.049-2.347.8-4.487 1.529-6.312 1.529zm37.776-6.85c-2.083 1.393-5.348 2.1-9.704 2.1-7.308 0-10.63-3.297-12.139-4.795a24.6 24.6 0 00-.334-.328c-.1.096-.21.206-.333.328-1.51 1.498-4.83 4.794-12.139 4.794-4.356 0-7.621-.706-9.704-2.099-2.79-1.866-1.726-5.632-1.617-6.02a.831.831 0 00.009-.03c.064-.286.501-.49.99-.467.49.023.863.268.846.556 0 .017-.004.05-.01.095-.066.502-.343 2.601 2.346 2.638h.03c1.311 0 2.705-1.29 4.051-2.538 2.023-1.873 6.653-4.46 10.442-4.46 3.041 0 3.79 1.3 4.381 2.331.221.385.42.731.709.958.288-.227.487-.573.708-.958.592-1.03 1.34-2.331 4.381-2.331 3.79 0 8.42 2.587 10.442 4.46 1.347 1.248 2.74 2.538 4.052 2.538h.03c2.686-.037 2.412-2.132 2.345-2.642a1.13 1.13 0 01-.01-.098c-.017-.288.355-.529.845-.553.487-.023.926.185.991.47l.009.03c.11.39 1.173 4.155-1.617 6.021z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="mustache-top-hat" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M47.17 31.928c-.832.59-.914.98-.914 1.092 0 .112.082.502.914 1.091.796.564 2.038 1.128 3.7 1.626 3.304.99 7.953 1.622 13.147 1.622s9.843-.632 13.147-1.622c1.661-.498 2.904-1.062 3.7-1.626.832-.59.914-.979.914-1.091 0-.113-.082-.502-.915-1.092-.795-.563-2.038-1.128-3.699-1.625-3.304-.99-7.953-1.622-13.147-1.622s-9.843.632-13.147 1.622c-1.662.497-2.904 1.062-3.7 1.625zm2.896-4.308c3.63-1.087 8.563-1.74 13.95-1.74 5.389 0 10.321.653 13.952 1.74 1.806.541 3.37 1.213 4.513 2.023 1.107.784 2.097 1.905 2.097 3.377 0 1.472-.99 2.592-2.097 3.376-1.143.81-2.707 1.482-4.513 2.023-3.631 1.088-8.563 1.74-13.951 1.74s-10.32-.652-13.95-1.74c-1.807-.54-3.371-1.213-4.515-2.023-1.106-.784-2.096-1.904-2.096-3.376s.99-2.593 2.096-3.377c1.144-.81 2.708-1.482 4.514-2.023z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42.443 37.67c.464.48.947.871 1.376 1.174 1.516 1.074 3.424 1.861 5.386 2.449 3.98 1.192 9.216 1.866 14.812 1.866s10.831-.674 14.812-1.866c1.962-.588 3.87-1.375 5.386-2.449a9.725 9.725 0 001.368-1.166 63.594 63.594 0 015.097 2.072l.001.001.013.006.002.016c8.69 12.715 13.006 27.054 11.411 43.598l-38.01-3.77-38.204 3.764c-1.36-14.274 1.36-28.754 11.396-43.603a63.727 63.727 0 015.154-2.092z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><ellipse cx="64" cy="20.486" rx="14.228" ry="4.763" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><ellipse cx="64" cy="29.4" rx="15.122" ry="5.062" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #fff)" d="M49.772 20.486h28.456v8.16H49.772z" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M48.404 99.884c-4.045 0-13.576-6.343-22.507-16.552l14.322-7.39 50.24.88 11.65 6.51c-8.93 10.209-17.696 16.552-22.506 16.552-2.238 0-4.393-.774-6.699-1.603-2.65-.952-5.5-1.975-8.9-1.975-3.276 0-6.435 1.076-9.288 2.049-2.347.8-4.487 1.529-6.312 1.529zm37.776-6.851c-2.083 1.393-5.348 2.1-9.704 2.1-7.308 0-10.63-3.297-12.139-4.795a24.6 24.6 0 00-.334-.328c-.1.096-.21.206-.333.328-1.51 1.498-4.83 4.794-12.139 4.794-4.356 0-7.621-.706-9.704-2.099-2.79-1.866-1.726-5.632-1.617-6.02a.791.791 0 00.009-.03c.064-.286.501-.49.99-.467.49.023.863.268.846.556 0 .017-.004.05-.01.095-.066.502-.343 2.601 2.346 2.638h.03c1.311 0 2.705-1.29 4.051-2.538 2.023-1.873 6.653-4.46 10.442-4.46 3.041 0 3.79 1.3 4.381 2.331.221.384.42.731.709.958.288-.227.487-.574.708-.958.592-1.03 1.34-2.332 4.381-2.332 3.79 0 8.42 2.588 10.442 4.462 1.347 1.247 2.74 2.537 4.052 2.537h.03c2.686-.037 2.412-2.133 2.345-2.642a1.133 1.133 0 01-.01-.098c-.017-.288.355-.529.845-.553.487-.023.926.185.991.47l.009.03c.11.39 1.173 4.155-1.617 6.021z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="ninja-band" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M96.588 49.89c-8.105-2.913-19.603-4.803-32.522-4.803-12.92 0-24.418 1.89-32.523 4.803-.39.14-.768.282-1.138.425.388-1.438 1.798-5.64 4.33-10.942 8.38-2.176 18.513-3.417 29.33-3.417 10.893 0 21.091 1.258 29.505 3.463 2.534 5.344 3.84 9.496 4.176 10.904-.376-.146-.762-.29-1.158-.432z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.087 52.822l.357-.13c8-2.875 19.532-4.794 32.621-4.794 13.09 0 24.622 1.92 32.621 4.795l.211.076c4.432 9.864 6.362 20.659 5.21 32.602a63.635 63.635 0 01-19.462 9.758 46.557 46.557 0 01-4.165-6.71 41.527 41.527 0 006.572-3.139 22.77 22.77 0 01-1.609-1.209 45.688 45.688 0 01-38.887 0c-.52.4-1.058.81-1.608 1.21a41.363 41.363 0 006.56 3.131 46.971 46.971 0 01-4.166 6.717 63.924 63.924 0 01-19.45-9.764c-1.02-10.709.257-21.533 5.195-32.542zm60.628-16.866c-8.128-1.883-17.619-2.931-27.65-2.931-10.023 0-19.507 1.047-27.631 2.927l-1.926-4.406-.77-1.45 8.353 2.587 3.23-5.26 6.349 4.123 5.568-6.168 6.837 6.168 6.837-6.168 5.57 6.168 6.348-4.123 3.23 5.26 8.353-2.588-.77 1.451-1.928 4.41zM28.238 51.593l-.177.487c-2.416 6.65-4.79 15.112-5.8 24.554l-6.397-5.93 8.951-8.538-10.884 3.44-2.674-10.809 16.98-3.204z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="ribbon" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M66.161 38.38c-.698 3.181 2.036 6.166 5.345 5.631l7.676-1.24c1.209 2.266 3.375 4.058 6.015 4.908 2.622.844 5.404.661 7.697-.451l4.322 4.261c4.205 9.669 6.015 20.229 4.891 31.882a63.635 63.635 0 01-19.462 9.758 46.557 46.557 0 01-4.165-6.71 41.527 41.527 0 006.572-3.139 22.8 22.8 0 01-1.609-1.209 45.688 45.688 0 01-38.887 0c-.52.4-1.058.81-1.608 1.21a41.363 41.363 0 006.56 3.131 46.971 46.971 0 01-4.166 6.717 63.924 63.924 0 01-19.45-9.764C24.533 69.09 27.254 54.61 37.29 39.762a64.021 64.021 0 0115.87-4.891 43.755 43.755 0 012.032 4.13 59.062 59.062 0 0110.97-.62z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><ellipse cx="87.913" cy="39.244" rx="7.158" ry="6.161" transform="rotate(17.85 87.913 39.244)" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M72.487 27.474c.468-1.454 2.328-1.868 3.368-.748l8.267 8.895a2 2 0 01.464 1.89l-.134.49a2 2 0 01-1.61 1.444l-11.766 1.9c-1.475.24-2.68-1.165-2.223-2.587l3.634-11.284zm34.821 11.216c.468-1.455-.803-2.877-2.301-2.573l-12.01 2.431a2 2 0 00-1.516 1.377l-.143.47a2 2 0 00.509 2.008l8.514 8.396c1.061 1.046 2.852.607 3.308-.81l3.639-11.299z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 129" id="sad" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M44.98 66.748a8.976 8.976 0 00-.023.64c0 4.297 3.18 7.789 7.028 7.789 3.922 0 6.954-3.492 7.021-7.789.034-2.128-.724-4.067-1.976-5.481-.18.102-.361.203-.544.303-3.909 2.144-7.851 3.663-11.506 4.538zm39.892 0c.016.211.023.425.023.64 0 4.297-3.18 7.789-7.027 7.789-3.922 0-6.954-3.492-7.022-7.789-.033-2.128.724-4.067 1.976-5.481.18.102.362.203.544.303 3.91 2.144 7.851 3.663 11.506 4.538z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="samurai" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.192 65.38L14.93 90.545c1.812 1.56 10.518 4.947 16.489 5.05l.133-3.39a66.612 66.612 0 01-7.263-4.67l-.969-.716-.114-1.199c-.637-6.683-.411-13.43.987-20.242zM96.45 92.212l.133 3.382c5.971-.102 14.677-3.49 16.489-5.049l-9.273-25.193c1.314 6.401 1.684 13.15.997 20.277l-.116 1.197-.967.715a66.322 66.322 0 01-7.263 4.671z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M63.93 48.627a4.36 4.36 0 00.07-.009l.07.009c2.168-.005 5.332-.119 8.257-1.157a200.895 200.895 0 00-8.705-.17l.153 1.327H63.7l-.142-1.326c-2.709.005-5.346.064-7.886.17 2.823 1.001 5.869 1.142 8.028 1.155l.3 2.801h-.098c-2.106-.005-5.404-.105-8.617-1.133-1.663-.531-3.36-1.332-4.874-2.529-5.229.373-9.897.952-13.721 1.68a55.36 55.36 0 00-4.496 1.031c-5.854 11.819-7.395 23.42-6.302 34.889a63.924 63.924 0 0019.45 9.764 46.971 46.971 0 004.165-6.717 41.363 41.363 0 01-6.56-3.132 74.83 74.83 0 001.608-1.209 45.688 45.688 0 0038.887 0 22.8 22.8 0 001.609 1.21 41.527 41.527 0 01-6.572 3.137 46.557 46.557 0 004.165 6.711c7-2.11 13.584-5.412 19.462-9.758 1.241-12.874-1.098-24.414-6.291-34.892a55.3 55.3 0 00-4.507-1.034c-3.824-.728-8.492-1.307-13.721-1.68-1.513 1.197-3.212 1.998-4.874 2.53-3.213 1.027-6.511 1.127-8.617 1.132l-.322-2.8h.156zm16.071-3.382c5.482.465 10.302 1.162 14.117 2.025l-.085-.151a5.68 5.68 0 00.388-2.047c0-3.56-3.468-6.777-9.055-9.08-1.498 2.104-2.956 4.53-4.095 7.048a12.773 12.773 0 01-1.27 2.205zm2.644-10.25c-1.434 2.086-2.816 4.44-3.925 6.891a9.773 9.773 0 01-2.197 3.101 197.49 197.49 0 00-13.211-.386L63 41.893c.32-.004.652-.007 1-.007.446 0 .866.006 1.267.01h.001c2.301.03 3.942.052 5.878-1.016 2.27-1.254 3.518-4.369 4.24-7.62 2.62.436 5.06 1.023 7.26 1.736zm-10.04-2.131c-.04.174-.082.347-.126.519-.338 1.34-.757 2.505-1.258 3.41-.504.912-1.002 1.4-1.428 1.635-1.21.668-2.139.7-4.488.669h-.009c-.397-.005-.832-.01-1.296-.01-.464 0-.9.005-1.297.01h-.024c-2.337.03-3.266-.003-4.472-.669-.426-.235-.924-.723-1.428-1.635-.501-.905-.92-2.07-1.258-3.41-.036-.14-.07-.282-.103-.424a68.737 68.737 0 018.972-.576c2.848 0 5.604.168 8.215.48zm-29.791 3.382c-5.234 2.284-8.455 5.396-8.455 8.826 0 .39.041.775.123 1.156-.202.347-.4.694-.595 1.04 3.814-.862 8.632-1.558 14.112-2.023a12.84 12.84 0 01-1.27-2.205c-1.093-2.416-2.481-4.75-3.915-6.794zm8.663 8.741a197.34 197.34 0 0111.792-.386l-.29-2.707H63l-.321-2.797.3 2.797c-.084 0-.166.002-.247.003-2.301.03-3.942.05-5.878-1.017-2.24-1.237-3.484-4.286-4.21-7.49-2.588.466-4.99 1.08-7.145 1.817 1.383 2.032 2.71 4.31 3.781 6.68a9.775 9.775 0 002.197 3.1zm12.62 6.44H64h.096z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M64 48.618a4.36 4.36 0 01-.07.009c-4.108-.009-11.785-.41-14.65-6.74-3.313-7.324-9.056-13.779-11.392-14.773 0 0 2.851-1.846 6.638-2.296 3.787-.449 7.038.419 7.038.419l.052.61c.353 4.178 1.074 12.734 5.238 15.032 1.936 1.069 3.577 1.048 5.878 1.018.4-.005.822-.01 1.268-.01v6.731zm0 0l.07.009c4.108-.009 11.786-.41 14.65-6.74 3.313-7.324 9.056-13.779 11.392-14.773 0 0-2.851-1.846-6.638-2.296-3.787-.449-7.038.419-7.038.419l-.052.61c-.353 4.178-1.074 12.734-5.238 15.033-1.936 1.068-3.577 1.047-5.878 1.017-.4-.005-.822-.01-1.268-.01v6.731z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="scared" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M44.015 67.388c0 4.297 3.18 7.789 7.028 7.789 3.922 0 6.954-3.492 7.021-7.789.068-4.296-3.087-7.82-7.033-7.82-3.947 0-7.016 3.524-7.016 7.82zm25.932 0c0 4.297 3.167 7.789 7.021 7.789 3.922 0 6.948-3.492 7.016-7.789.067-4.296-3.063-7.82-7.016-7.82-3.952 0-7.021 3.524-7.021 7.82z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M45.94 56.373C41.855 58.06 39 62.365 39 67.37c0 5.01 2.925 9.321 7 11.003-2.66-2.786-4.323-6.695-4.323-11.004 0-4.304 1.625-8.211 4.264-10.996zm36.12 0C86.145 58.06 89 62.365 89 67.37c0 5.01-2.925 9.321-7 11.003 2.66-2.786 4.323-6.695 4.323-11.004 0-4.304-1.625-8.211-4.264-10.996z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="scarred-laugh" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.191 39a59.104 59.104 0 0117.618.001 43.755 43.755 0 012.031-4.13 64.021 64.021 0 0115.87 4.891c10.037 14.849 12.758 29.329 11.397 43.603a63.92 63.92 0 01-19.45 9.764 46.971 46.971 0 01-4.165-6.717 41.363 41.363 0 006.56-3.132c.637-.335 1.24-.689 1.808-1.058l3.74 3.165-1.423-4.904a19.417 19.417 0 002.748-2.92l4.112 1.253-2.614-3.548a19.43 19.43 0 001.436-3.265l3.085-.126-2.51-1.972a19.42 19.42 0 00.39-2.694l2.44-.752-2.41-1.208a12.545 12.545 0 00-.122-1.283 24.82 24.82 0 01-.198 1.257l-2.577.793 2.155 1.08a24.09 24.09 0 01-.788 2.428l-3.244.133 2.371 1.863a24.639 24.639 0 01-1.643 2.843l-3.617-1.103 2.21 3.002a25.327 25.327 0 01-2.423 2.58l-3.596-3.043 1.404 4.842a16.271 16.271 0 01-2.342 1.428 45.688 45.688 0 01-38.887 0 16.265 16.265 0 01-2.343-1.428l1.404-4.842-3.596 3.043a25.327 25.327 0 01-2.424-2.58l2.211-3.002-3.617 1.103a24.639 24.639 0 01-1.643-2.843l2.371-1.863-3.244-.133a24.09 24.09 0 01-.788-2.428l2.155-1.08-2.577-.793a24.82 24.82 0 01-.198-1.257c-.058.385-.1.815-.121 1.283l-2.412 1.208 2.441.752c.061.84.185 1.747.39 2.694l-2.51 1.972 3.085.126a19.43 19.43 0 001.436 3.265l-2.614 3.548 4.112-1.254a19.417 19.417 0 002.748 2.921L37.4 85.386l3.74-3.164c.568.37 1.17.723 1.807 1.058a41.363 41.363 0 006.56 3.132 46.971 46.971 0 01-4.166 6.717 63.924 63.924 0 01-19.45-9.764C24.533 69.09 27.254 54.61 37.29 39.762a64.021 64.021 0 0115.87-4.891 43.755 43.755 0 012.032 4.13z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 129" id="sceptical" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M44.986 67.388c0 4.297 3.18 7.79 7.028 7.79 3.922 0 6.954-3.493 7.021-7.79.038-2.403-.932-4.564-2.485-6.002-1.224-1.133-2.906 0-4.646 0-1.739 0-3.21-1.133-4.421 0-1.537 1.438-2.497 3.6-2.497 6.002zm25.932 0c0 4.297 3.167 7.789 7.021 7.789 3.922 0 6.948-3.492 7.016-7.789.067-4.296-3.063-7.82-7.016-7.82-3.952 0-7.021 3.524-7.021 7.82z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M72.437 58.135c-1.365 1.101-2.246 2.423-2.624 3.254l-2.252-.91c.514-1.13 1.61-2.749 3.282-4.098 1.687-1.362 4.007-2.483 6.925-2.483 2.912 0 5.284 1.117 7.038 2.465 1.74 1.339 2.928 2.945 3.507 4.066l-2.203 1.01c-.434-.84-1.406-2.174-2.853-3.287-1.434-1.102-3.277-1.945-5.49-1.945-2.207 0-3.981.839-5.33 1.928zM61.275 61.73c-8.226 3.193-15.691 1.358-18.528-.045l1.117-2.26c2.297 1.137 9.024 2.857 16.5-.045l.911 2.35z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="single-eye" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M63.5 77.881c5.74 0 10.395-5.28 10.395-11.794S69.24 54.293 63.5 54.293s-10.395 5.28-10.395 11.794S57.759 77.881 63.5 77.881zm-.2-11.993c2.54 0 4.598-2.328 4.598-5.198 0-2.87-2.058-5.197-4.598-5.197-2.539 0-4.597 2.326-4.597 5.197 0 2.87 2.058 5.198 4.597 5.198z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="spider-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M48.856 67.388c0 4.297 3.18 7.789 7.027 7.789 3.922 0 6.954-3.492 7.022-7.789.067-4.296-3.087-7.82-7.034-7.82-3.946 0-7.015 3.524-7.015 7.82zm-12.544-1.789c0 3.313 2.451 6.005 5.419 6.005 3.024 0 5.362-2.692 5.414-6.005.052-3.314-2.38-6.03-5.424-6.03-3.043 0-5.41 2.716-5.41 6.03zm44.542 0c0 3.313 2.452 6.005 5.42 6.005 3.023 0 5.361-2.692 5.413-6.005.053-3.314-2.38-6.03-5.423-6.03-3.044 0-5.41 2.716-5.41 6.03zm-15.748 1.789c0 4.297 3.167 7.789 7.022 7.789 3.922 0 6.948-3.492 7.015-7.789.068-4.296-3.063-7.82-7.015-7.82-3.953 0-7.022 3.524-7.022 7.82z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="squinting" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M83.854 61.969l.96 3.583-12.257 3.284-1.697-3.383 12.994-3.484z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M83.854 72.777l.96-3.583-13.475-3.61-.883 3.602 13.398 3.59z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M78.017 67.373l-7.165-1.92-1.315.352-.42 1.568.42 1.567 1.315.353 7.165-1.92z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M78.017 67.373l-7.165-1.92-1.315.352-.42 1.568.42 1.567 1.315.353 7.165-1.92z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M44.152 61.969l-.96 3.583 12.257 3.284 1.697-3.383-12.994-3.484z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M44.152 72.777l-.96-3.583 13.475-3.61.883 3.602-13.398 3.59z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.989 67.373l7.165-1.92 1.315.352.42 1.568-.42 1.567-1.315.353-7.165-1.92z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.989 67.373l7.165-1.92 1.315.352.42 1.568-.42 1.567-1.315.353-7.165-1.92z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="star-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M50.11 58.26a1 1 0 011.73 0l2.22 3.825a1 1 0 00.654.476l4.324.93a1 1 0 01.534 1.645l-2.951 3.293a1 1 0 00-.25.77l.452 4.399a1 1 0 01-1.4 1.017l-4.044-1.79a1 1 0 00-.81 0l-4.044 1.79a1 1 0 01-1.399-1.017l.452-4.4a1 1 0 00-.25-.769l-2.952-3.293a1 1 0 01.535-1.645l4.324-.93a1 1 0 00.654-.476l2.22-3.824zm26.05 0a1 1 0 011.73 0l2.22 3.825a1 1 0 00.655.476l4.324.93a1 1 0 01.535 1.645l-2.952 3.293a1 1 0 00-.25.77l.452 4.399a1 1 0 01-1.4 1.017l-4.044-1.79a1 1 0 00-.809 0l-4.044 1.79a1 1 0 01-1.4-1.017l.452-4.4a1 1 0 00-.25-.769l-2.951-3.293a1 1 0 01.534-1.645l4.324-.93a1 1 0 00.654-.476l2.22-3.824z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="sunglasses" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M63.528 65.546c-.691.06-1.263.27-1.528.406l-1.232-2.376c.569-.295 1.48-.605 2.528-.697 1.058-.092 2.341.034 3.564.717l-1.306 2.337c-.635-.355-1.346-.446-2.026-.387z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M47.086 60.453a5 5 0 00-5.215 4.995v3.848a5 5 0 005.849 4.928l11.547-1.99a4 4 0 003.32-3.942v-4.298a3 3 0 00-2.87-2.997l-12.631-.544zm6.618 1.869a1.338 1.338 0 10-.138 2.673l5.733.296a1.339 1.339 0 00.138-2.674l-5.733-.295zm27.21-1.869a5 5 0 015.216 4.995v3.848a5 5 0 01-5.85 4.928l-11.547-1.99a4 4 0 01-3.32-3.942v-4.298a3 3 0 012.87-2.997l12.631-.544zm-4.826 1.736a1.339 1.339 0 00.128 2.673l5.734-.274a1.339 1.339 0 00-.128-2.674l-5.734.275z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="swirly-eyes" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M86.333 68.579c-.15-4.728-4.721-8.902-9.42-8.754h-.039c-4.1 0-8.606 2.935-8.606 8.358 0 4.438 3.308 6.845 6.708 6.738 3.438-.119 5.983-2.567 5.879-5.872-.065-2.056-1.956-3.83-3.942-3.768-1.059.034-1.839.407-2.345.95-.507.541-.835 1.352-.8 2.434.017.548.616 1.13 1.353 1.13a.917.917 0 00.55-.227.696.696 0 00.245-.587 1.228 1.228 0 112.454-.077c.071 2.239-1.875 3.347-3.249 3.347-1.744 0-3.74-1.337-3.808-3.508-.052-1.636.449-3.108 1.461-4.19 1.013-1.083 2.443-1.675 4.062-1.726 3.371-.107 6.367 2.764 6.474 6.144.153 4.849-3.657 8.247-8.252 8.405h-.004c-4.634.146-9.242-3.221-9.242-9.193 0-7.116 5.964-10.804 11.043-10.813 6.008-.178 11.74 5.016 11.933 11.132a1.228 1.228 0 11-2.455.077zm-45.666 0c.15-4.728 4.722-8.902 9.42-8.754h.039c4.1 0 8.607 2.935 8.607 8.358 0 4.438-3.309 6.845-6.708 6.738-3.439-.119-5.984-2.567-5.88-5.872.065-2.056 1.956-3.83 3.942-3.768 1.06.034 1.839.407 2.346.95.506.541.834 1.352.8 2.434-.017.548-.616 1.13-1.354 1.13a.918.918 0 01-.55-.227.696.696 0 01-.245-.587 1.228 1.228 0 00-2.454-.077c-.07 2.239 1.876 3.347 3.249 3.347 1.744 0 3.74-1.337 3.808-3.508.052-1.636-.448-3.108-1.46-4.19-1.013-1.083-2.444-1.675-4.063-1.726-3.371-.107-6.367 2.764-6.473 6.144-.153 4.849 3.657 8.247 8.251 8.405h.004c4.635.146 9.242-3.221 9.242-9.193 0-7.116-5.964-10.804-11.043-10.813-6.008-.178-11.74 5.016-11.932 11.132a1.228 1.228 0 102.454.077z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="thick" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M64 38.34c2.945 0 5.89.22 8.81.66a43.723 43.723 0 012.03-4.13 64.02 64.02 0 0115.872 4.891c10.036 14.85 12.757 29.33 11.397 43.605a63.932 63.932 0 01-19.45 9.764 46.98 46.98 0 01-4.166-6.717c-.256-.51-.806-1.635-.968-2.045a45.69 45.69 0 01-27.05 0c-.162.41-.712 1.534-.968 2.045a46.98 46.98 0 01-4.165 6.717 63.927 63.927 0 01-19.45-9.764c-1.36-14.275 1.36-28.755 11.396-43.605A64.02 64.02 0 0153.16 34.87 43.723 43.723 0 0155.191 39c2.92-.44 5.864-.66 8.809-.66z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="thick-upside-down" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M64 89.66c-2.945 0-5.89-.22-8.81-.66a43.723 43.723 0 01-2.03 4.13 64.02 64.02 0 01-15.872-4.891c-10.036-14.85-12.757-29.33-11.397-43.605a63.926 63.926 0 0119.45-9.764 46.98 46.98 0 014.166 6.717c.256.51.806 1.635.968 2.045a45.69 45.69 0 0127.05 0c.161-.41.712-1.534.968-2.045a46.98 46.98 0 014.165-6.717 63.932 63.932 0 0119.451 9.764c1.36 14.275-1.361 28.755-11.397 43.605A64.02 64.02 0 0174.84 93.13 43.723 43.723 0 0172.809 89c-2.92.44-5.864.66-8.809.66z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 129" id="third-eye" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M44.015 69.388c0 4.297 3.18 7.789 7.028 7.789 3.922 0 6.954-3.492 7.021-7.789.068-4.296-3.087-7.82-7.033-7.82-3.947 0-7.016 3.524-7.016 7.82zm12.96-10.677c0 4.297 3.18 7.789 7.027 7.789 3.922 0 6.955-3.492 7.022-7.789.068-4.296-3.087-7.82-7.034-7.82-3.946 0-7.015 3.524-7.015 7.82zm12.972 10.677c0 4.297 3.167 7.789 7.021 7.789 3.922 0 6.948-3.492 7.016-7.789.067-4.296-3.063-7.82-7.016-7.82-3.952 0-7.021 3.524-7.021 7.82z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="top-hat" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M47.17 33.928c-.832.59-.914.98-.914 1.092 0 .112.082.502.914 1.091.796.564 2.038 1.128 3.7 1.626 3.304.99 7.953 1.622 13.147 1.622s9.843-.633 13.147-1.622c1.661-.498 2.904-1.062 3.7-1.626.832-.59.914-.979.914-1.091 0-.113-.082-.502-.915-1.092-.795-.563-2.038-1.128-3.699-1.625-3.304-.99-7.953-1.622-13.147-1.622s-9.843.632-13.147 1.622c-1.662.497-2.904 1.062-3.7 1.625zm2.896-4.308c3.63-1.087 8.563-1.74 13.95-1.74 5.389 0 10.321.653 13.952 1.74 1.806.541 3.37 1.213 4.513 2.023 1.107.784 2.097 1.905 2.097 3.377 0 1.472-.99 2.592-2.097 3.376-1.143.81-2.707 1.482-4.513 2.023-3.631 1.088-8.563 1.74-13.951 1.74s-10.32-.652-13.95-1.74c-1.807-.541-3.371-1.213-4.515-2.023-1.106-.784-2.096-1.904-2.096-3.376s.99-2.593 2.096-3.377c1.144-.81 2.708-1.482 4.514-2.023z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42.443 39.67c.464.48.947.871 1.376 1.174 1.516 1.074 3.424 1.861 5.386 2.449 3.98 1.192 9.216 1.866 14.812 1.866s10.831-.674 14.812-1.866c1.962-.588 3.87-1.375 5.386-2.449a9.725 9.725 0 001.368-1.166 63.594 63.594 0 015.097 2.072l.001.001.013.006.002.016c8.69 12.715 13.006 27.054 11.411 43.598a63.633 63.633 0 01-19.462 9.758 46.557 46.557 0 01-4.165-6.71 41.527 41.527 0 006.572-3.139 22.8 22.8 0 01-1.609-1.209 45.688 45.688 0 01-38.887 0c-.52.4-1.058.81-1.608 1.21a41.363 41.363 0 006.56 3.131 46.971 46.971 0 01-4.166 6.717 63.924 63.924 0 01-19.45-9.764C24.533 71.09 27.254 56.61 37.29 41.762a63.727 63.727 0 015.154-2.092z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><ellipse cx="64" cy="22.486" rx="14.228" ry="4.763" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><ellipse cx="64" cy="31.4" rx="15.122" ry="5.062" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill="var(--svg-custom-color, #fff)" d="M49.772 22.486h28.456v8.16H49.772z" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="tounge-shape" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M62.471 89.082a25.864 25.864 0 01-4.575-.66l-2.852-.682v4.374a8.956 8.956 0 0017.912 0v-4.458l-2.873.715a25.345 25.345 0 01-4.612.704v4.777a1.5 1.5 0 11-3 0v-4.77z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M90.68 39.75a63.576 63.576 0 00-15.858-4.879 43.574 43.574 0 00-2.031 4.13 59.06 59.06 0 00-17.6 0 43.755 43.755 0 00-2.031-4.13 64.021 64.021 0 00-15.87 4.891C27.252 54.611 24.531 69.091 25.892 83.365a63.924 63.924 0 0019.45 9.764c1.525.462 4.018.982 7.311 1.362a11.618 11.618 0 01-.21-2.206l.173-4.807a32.527 32.527 0 01-3.109-1.098 41.364 41.364 0 01-6.56-3.132 71.66 71.66 0 001.608-1.21 45.69 45.69 0 0038.888 0c.525.43 1.064.841 1.608 1.21a41.528 41.528 0 01-6.572 3.138 28.45 28.45 0 01-2.924.981v4.918c0 .669-.057 1.323-.165 1.96 2.33-.281 4.752-.648 7.254-1.116 7-2.11 13.584-5.412 19.462-9.758 1.596-16.554-2.727-30.9-11.427-43.621zM55.044 92.285v-4.18a39.04 39.04 0 007.43.879 1.519 1.519 0 00-.003.098v4.77c0 .478.224.904.572 1.179h-.007a91.912 91.912 0 01-7.647-.275 8.96 8.96 0 01-.345-2.47zm9.887 2.72a106.87 106.87 0 007.739-.464 8.97 8.97 0 00.286-2.256v-4.28a46.117 46.117 0 01-7.49.95c.003.041.005.084.005.127v4.77c0 .463-.21.878-.54 1.153z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="triangle-hair" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M72.793 38.996c9.79 1.372 18.57 4.475 20.759 5.286 6.759 11.576 9.964 24.472 8.555 39.089a63.633 63.633 0 01-19.462 9.758 46.557 46.557 0 01-4.165-6.71 41.527 41.527 0 006.572-3.139 22.8 22.8 0 01-1.609-1.209 45.688 45.688 0 01-38.887 0c-.52.4-1.058.81-1.608 1.21a41.363 41.363 0 006.56 3.131 46.977 46.977 0 01-4.166 6.717 63.924 63.924 0 01-19.45-9.764c-1.221-12.823.85-25.81 8.558-39.083 2.191-.812 10.96-3.91 20.74-5.284l.001.002.25-.037c2.12-.29 4.285-.499 6.44-.584a59.069 59.069 0 014.422.007c1.99.086 3.99.275 5.953.536l.535.078c0-.001 0-.003.002-.004z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/><path d="M84.104 31.286l9.61 13.267-59.329-.207 8.869-13.06 5.075 6.323 8.206-8.795 7.486 8.795 7.092-8.795 7.722 8.795 5.27-6.323z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="vampire" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.191 39a59.104 59.104 0 0117.618.001 43.755 43.755 0 012.031-4.13 64.021 64.021 0 0115.87 4.891c10.037 14.849 12.758 29.329 11.397 43.603a63.92 63.92 0 01-19.45 9.764 46.971 46.971 0 01-4.165-6.717 41.352 41.352 0 004.058-1.768l3.747 4.826 3.419-9.703.008-.009-1.845-.76c-1.403 1.272-3.541 2.579-4.435 3.073a45.688 45.688 0 01-38.887 0c-.895-.494-3.033-1.8-4.436-3.074l-1.845.761.01.011 3.419 9.701 3.746-4.826a41.459 41.459 0 004.057 1.768 46.971 46.971 0 01-4.166 6.717 63.924 63.924 0 01-19.45-9.764C24.533 69.09 27.254 54.61 37.29 39.762a64.021 64.021 0 0115.87-4.891 43.755 43.755 0 012.032 4.13z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 128 128" id="vampire-ears" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.191 39a59.104 59.104 0 0117.618.001 43.755 43.755 0 012.031-4.13 64.021 64.021 0 0115.87 4.891c10.037 14.849 12.758 29.329 11.397 43.603a63.92 63.92 0 01-19.45 9.764 46.971 46.971 0 01-4.165-6.717 41.352 41.352 0 004.058-1.768l3.747 4.826 3.419-9.703.008-.009-1.845-.76c-1.403 1.272-3.541 2.579-4.435 3.073a45.688 45.688 0 01-38.887 0c-.895-.494-3.033-1.8-4.436-3.074l-1.845.761.01.011 3.419 9.701 3.746-4.826a41.459 41.459 0 004.057 1.768 46.971 46.971 0 01-4.166 6.717 63.924 63.924 0 01-19.45-9.764C24.533 69.09 27.254 54.61 37.29 39.762a64.021 64.021 0 0115.87-4.891 43.755 43.755 0 012.032 4.13zM25.567 57.643c-2.018-5.493-4.84-11.986-7.99-16.394-4.39-6.148-1.963 5.422-.199 13.83.734 3.496 1.352 6.444 1.32 7.347-.304 8.184 1.351 11.06 4.23 10.227.55-5.46 1.522-10.53 2.639-15.01zm-3.979 6.136c-.504.46-.89.161-.84-1.724.019-.699.037-1.347.023-1.787-.033-1.12-.298-2.758-.585-4.535l-.193-1.205c.321-2.022 2.592 2.682 2.73 3.897.138 1.214-.444 4.724-1.135 5.354zm80.741-6.165c2.049-5.482 4.91-11.958 8.084-16.348 4.426-6.122 1.932 5.434.119 13.832-.754 3.49-1.39 6.436-1.361 7.338.255 8.187-1.417 11.053-4.29 10.203-.519-5.463-1.461-10.539-2.552-15.025zm3.943 6.159c.501.462.89.166.85-1.72-.015-.698-.029-1.346-.013-1.786.04-1.121.314-2.757.611-4.532.067-.396.134-.799.2-1.204-.309-2.023-2.607 2.667-2.752 3.88-.145 1.214.416 4.728 1.104 5.362z" fill="var(--svg-custom-color, #fff)" style="transition: var(--svg-custom-transition);"/></symbol><symbol fill="none" viewBox="0 0 129 128" id="wink" xmlns="http://www.w3.org/2000/svg" style="transition: var(--svg-custom-transition);"><path d="M44.044 66.888c0 4.297 3.179 7.79 7.027 7.79 3.922 0 6.954-3.493 7.022-7.79.067-4.296-3.087-7.82-7.034-7.82-3.947 0-7.015 3.524-7.015 7.82zm39.839-5.418l.96 3.582-12.258 3.284-1.696-3.383 12.994-3.484z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path d="M83.883 72.277l.96-3.583-13.476-3.61-.883 3.603 13.399 3.59z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M78.046 66.873l-7.165-1.92-1.315.352-.42 1.568.42 1.568 1.315.352 7.165-1.92z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/><path fill-rule="evenodd" clip-rule="evenodd" d="M78.046 66.873l-7.165-1.92-1.315.352-.42 1.568.42 1.568 1.315.352 7.165-1.92z" fill="var(--svg-custom-color, #4F5660)" style="transition: var(--svg-custom-transition);"/></symbol></svg>'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M55.2432 38.9995C58.1457 38.5595 61.0729 38.3397 64 38.3402C66.9271 38.3397 69.8543 38.5595 72.7568 38.9995C72.9313 38.5894 72.9872 38.2508 73.0371 37.9485C73.1589 37.2105 73.2449 36.689 74.9349 35.8733C79.097 33.8644 87.1007 34.87 90.5526 39.7613C100.529 54.6105 103.88 69.1828 101.882 83.3656C100.651 92.0953 86.0178 93.7615 82.5147 91.7192C79.5133 89.9694 76.7742 86.3679 76.7742 86.3679C72.4316 87.7218 68.5704 88.4156 64.0001 88.4156H64H63.9999C59.4296 88.4156 55.5684 87.7218 51.2258 86.3679C51.2258 86.3679 48.4867 89.9694 45.4853 91.7192C41.9822 93.7615 27.3488 92.0953 26.1184 83.3656C24.1195 69.1828 27.4707 54.6105 37.4474 39.7613C40.8993 34.87 48.903 33.8644 53.0651 35.8733C54.7551 36.689 54.8411 37.2105 54.9629 37.9485C55.0128 38.2508 55.0687 38.5894 55.2432 38.9995Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M41.8554 69.6834C46.8559 71.0869 50.7777 73.8245 53.9998 77.5259C58.0158 76.1821 60.9468 71.9669 60.9468 66.9749C60.9468 60.9005 56.6068 55.9762 51.253 55.9762C45.8993 55.9762 41.5592 60.9005 41.5592 66.9749C41.5592 67.9096 41.662 68.817 41.8554 69.6834ZM55.1645 70.9724C57.1174 70.9724 58.7005 69.1827 58.7005 66.9751C58.7005 64.7674 57.1174 62.9778 55.1645 62.9778C53.2116 62.9778 51.6284 64.7674 51.6284 66.9751C51.6284 69.1827 53.2116 70.9724 55.1645 70.9724Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M86.1446 69.6834C81.1441 71.0869 77.2223 73.8245 74.0002 77.5259C69.9842 76.1821 67.0531 71.9669 67.0531 66.9749C67.0531 60.9005 71.3932 55.9762 76.747 55.9762C82.1007 55.9762 86.4408 60.9005 86.4408 66.9749C86.4408 67.9096 86.338 68.817 86.1446 69.6834ZM72.8355 70.9724C70.8826 70.9724 69.2995 69.1827 69.2995 66.9751C69.2995 64.7674 70.8826 62.9778 72.8355 62.9778C74.7884 62.9778 76.3716 64.7674 76.3716 66.9751C76.3716 69.1827 74.7884 70.9724 72.8355 70.9724Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0)">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M128 0.5H0V128.5H128V0.5ZM51.0428 75.177C47.1945 75.177 44.0151 71.6847 44.0151 67.3883C44.0151 65.4586 44.6342 63.6849 45.6738 62.3163H40.1362V59.5688H51.0271C51.0283 59.5688 51.0294 59.5688 51.0305 59.5688C51.0317 59.5688 51.0328 59.5688 51.0339 59.5688L76.9622 59.5689C76.9642 59.5689 76.9663 59.5688 76.9684 59.5688C76.9705 59.5688 76.9726 59.5689 76.9747 59.5689H87.8638V62.3163H82.3547C83.3994 63.6849 84.0141 65.4586 83.9838 67.3883C83.9163 71.6847 80.8904 75.177 76.9684 75.177C73.1139 75.177 69.9469 71.6847 69.9469 67.3883C69.9469 65.4586 70.566 63.6849 71.6061 62.3163L56.4254 62.3163C57.4749 63.6849 58.0946 65.4586 58.0643 67.3883C57.9968 71.6847 54.9648 75.177 51.0428 75.177Z" fill="#4F5660"/>\n</g>\n<defs>\n<clipPath id="clip0">\n<rect width="128" height="128" fill="white" transform="translate(0 0.5)"/>\n</clipPath>\n</defs>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M42.5388 71.5093C41.5041 69.7472 40.9004 67.6475 40.9004 65.3952C40.9004 59.1765 45.3424 54.0771 51.0547 54.0771C56.767 54.0771 61.3333 59.1765 61.2355 65.3952C61.2002 67.6475 60.6019 69.7472 59.5834 71.5093H42.5388Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M71.0444 71.5093C70.3678 70.3135 69.9754 68.9008 69.9754 67.3885C69.9754 63.0921 73.0442 59.5691 76.9969 59.5691C80.9496 59.5691 84.0798 63.0921 84.0123 67.3885C83.9885 68.9008 83.5982 70.3135 82.9313 71.5093H71.0444Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M62.7317 35.0534C63.4426 34.3425 64.5953 34.3425 65.3062 35.0534L69.0098 38.757C69.7207 39.4679 69.7207 40.6206 69.0098 41.3315L65.3062 45.0351C64.5953 45.746 63.4426 45.746 62.7317 45.0351L59.0281 41.3315C58.3172 40.6206 58.3172 39.4679 59.0281 38.757C59.0281 38.757 62.0208 35.7644 62.7317 35.0534Z" fill="white"/>\n<path d="M31.3376 41.2726L31.3362 48.2107C35.1969 45.3941 44.6541 40.3421 55.9254 38.8409C56.127 38.1029 56.5176 37.4058 57.0973 36.8261L60.8009 33.1225C61.6895 32.2338 62.8542 31.7895 64.019 31.7895L64.0418 31.7896L64.0629 31.7897C65.2277 31.7897 66.3924 32.2339 67.2811 33.1225L70.9846 36.8261C71.5643 37.4058 71.9549 38.1029 72.1565 38.8409C83.4278 40.3421 92.885 45.3941 96.7457 48.2107L96.7444 41.2726L72.1565 33.1225L64.019 29.4603L55.9254 33.1225L31.3376 41.2726Z" fill="white"/>\n<path d="M64.002 17.8531L76.3191 34.3162L69.9896 33.0463L64.002 30.5526L58.4562 33.0463L51.6849 34.3162L64.002 17.8531Z" fill="white"/>\n<path d="M31.247 31.7716L31.3391 41.3307L41.5907 39.1542L31.247 31.7716Z" fill="white"/>\n<path d="M45.7552 23.9604L38.6074 38.9674L55.6521 34.8275L45.7552 23.9604Z" fill="white"/>\n<path d="M96.7457 31.7716V41.3863L86.4021 39.1542L96.7457 31.7716Z" fill="white"/>\n<path d="M82.2374 23.9604L89.3852 38.9674L72.3405 34.8275L82.2374 23.9604Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M31.6364 51.6304L33.0687 50.5854C36.5526 48.0436 45.3686 43.3069 55.8948 41.8123C56.127 42.394 56.4786 42.9391 56.9496 43.41L60.6532 47.1136C62.512 48.9725 65.5259 48.9725 67.3847 47.1136L71.0883 43.41C71.5609 42.9375 71.9133 42.3903 72.1456 41.8064C82.6901 43.2944 91.5247 48.0403 95.0132 50.5854L96.3343 51.5492C101.164 61.7415 103.306 72.9333 102.107 85.371C96.2285 89.7175 89.6449 93.0185 82.6453 95.129C81.0692 93.0141 79.6756 90.769 78.4797 88.4181C80.758 87.5666 82.9571 86.5167 85.0516 85.2803C84.5074 84.9115 83.9694 84.5004 83.4434 84.0711C77.3606 86.9317 70.7217 88.4148 63.9999 88.4148C57.2781 88.4148 50.6391 86.9317 44.5564 84.0711C44.0364 84.4701 43.4983 84.8812 42.9482 85.2803C45.0386 86.5147 47.2337 87.5626 49.5079 88.412C48.3105 90.7641 46.9171 93.011 45.3423 95.129C38.3487 93.01 31.7702 89.7074 25.8928 85.3649C24.8354 74.2698 26.2436 63.0505 31.6364 51.6304Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M51.1513 78.4046C56.521 78.4046 60.874 73.4656 60.874 67.3731C60.874 61.2805 56.521 56.3416 51.1513 56.3416C45.7816 56.3416 41.4286 61.2805 41.4286 67.3731C41.4286 73.4656 45.7816 78.4046 51.1513 78.4046ZM53.1325 76.0511C55.5076 76.0511 57.4329 73.8746 57.4329 71.1898C57.4329 68.5049 55.5076 66.3284 53.1325 66.3284C50.7575 66.3284 48.8321 68.5049 48.8321 71.1898C48.8321 73.8746 50.7575 76.0511 53.1325 76.0511Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M76.7211 78.4046C71.3514 78.4046 66.9984 73.4656 66.9984 67.3731C66.9984 61.2805 71.3514 56.3416 76.7211 56.3416C82.0908 56.3416 86.4438 61.2805 86.4438 67.3731C86.4438 73.4656 82.0908 78.4046 76.7211 78.4046ZM74.7399 76.0511C72.3648 76.0511 70.4395 73.8746 70.4395 71.1898C70.4395 68.5049 72.3648 66.3284 74.7399 66.3284C77.115 66.3284 79.0403 68.5049 79.0403 71.1898C79.0403 73.8746 77.115 76.0511 74.7399 76.0511Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M51.0403 78.1268C56.2748 78.1268 60.5182 73.3121 60.5182 67.373C60.5182 61.4338 56.2748 56.6191 51.0403 56.6191C45.8057 56.6191 41.5623 61.4338 41.5623 67.373C41.5623 73.3121 45.8057 78.1268 51.0403 78.1268ZM54.8646 72.1119C57.1799 72.1119 59.0568 69.9902 59.0568 67.373C59.0568 64.7557 57.1799 62.634 54.8646 62.634C52.5494 62.634 50.6725 64.7557 50.6725 67.373C50.6725 69.9902 52.5494 72.1119 54.8646 72.1119Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M76.9659 78.1268C71.7313 78.1268 67.4879 73.3121 67.4879 67.373C67.4879 61.4338 71.7313 56.6191 76.9659 56.6191C82.2004 56.6191 86.4438 61.4338 86.4438 67.373C86.4438 73.3121 82.2004 78.1268 76.9659 78.1268ZM73.1692 72.1119C70.8539 72.1119 68.977 69.9902 68.977 67.373C68.977 64.7557 70.8539 62.634 73.1692 62.634C75.4845 62.634 77.3614 64.7557 77.3614 67.373C77.3614 69.9902 75.4845 72.1119 73.1692 72.1119Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 0.707107 0.707107 0.707107 55.5483 60.0604)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 0.707107 0.707107 0.707107 55.5483 60.0604)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 0.707107 0.707107 0.707107 81.4739 60.0605)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 0.707107 0.707107 0.707107 81.4739 60.0605)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 58.3527 71.8809)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 58.3527 71.8809)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 84.2784 71.881)" fill="#4F5660"/>\n<rect width="16.7167" height="3.96597" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 84.2784 71.881)" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M90.6803 39.75C85.63 37.4379 80.2985 35.7976 74.822 34.871C74.0726 36.2107 73.3945 37.5891 72.7906 39.0003C66.957 38.1213 61.0246 38.1213 55.191 39.0003C54.5868 37.5892 53.9087 36.2109 53.1596 34.871C47.6796 35.8054 42.3446 37.4496 37.2892 39.7621C27.2531 54.6108 24.5324 69.0906 25.8928 83.3649C31.7702 87.7074 38.3487 91.0099 45.3423 93.129C46.9171 91.011 48.3105 88.7641 49.5079 86.412C47.2337 85.5626 45.0386 84.5147 42.9482 83.2803C43.4983 82.8812 44.0364 82.4701 44.5564 82.0711C50.6391 84.9317 57.2781 86.4148 63.9999 86.4148C70.7217 86.4148 77.3606 84.9317 83.4434 82.0711C83.9694 82.5003 84.5074 82.9115 85.0516 83.2803C82.9571 84.5167 80.758 85.5666 78.4797 86.4181C79.6756 88.769 81.0692 91.0141 82.6453 93.129C89.6449 91.0185 96.2285 87.7175 102.107 83.371C103.703 66.8174 99.3803 52.4705 90.6803 39.75Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M55.0733 39.1998C54.7676 39.2233 54.4586 39.2353 54.1469 39.2353C47.573 39.2353 42.2418 33.9143 42.2253 27.3442C39.8204 28.9572 38.2375 31.7009 38.2375 34.8142C38.2375 39.7783 42.2616 43.8025 47.2257 43.8025C50.5972 43.8025 53.5352 41.9461 55.0733 39.1998Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M72.9267 39.1998C73.2324 39.2233 73.5414 39.2353 73.8531 39.2353C80.427 39.2353 85.7582 33.9143 85.7747 27.3442C88.1796 28.9572 89.7625 31.7009 89.7625 34.8142C89.7625 39.7783 85.7384 43.8025 80.7743 43.8025C77.4028 43.8025 74.4648 41.9461 72.9267 39.1998Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M37.3059 39.7573C46.4554 35.535 56.5681 33.8207 64 33.8207C71.4319 33.8207 81.5446 35.535 90.6941 39.7573L90.9373 41.6884L64 40.3616L37.0627 41.6884L37.3059 39.7573Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M48.1544 59.6353C45.6252 61.117 43.9317 64.0265 43.9317 67.35C43.9317 69.3208 44.5404 71.1461 45.5628 72.6144C46.0966 72.7303 46.6328 72.8585 47.1706 72.9992C49.7861 73.6833 52.2234 74.6054 54.416 75.7004C57.6921 74.5776 60.0225 71.2486 60.0225 67.35C60.0252 67.1858 60.0236 67.0226 60.0177 66.8606C58.3667 66.4104 56.6469 65.7359 54.9408 64.8379C54.8902 66.8679 54.3168 69.1444 52.827 71.4828V71.4828C50.6612 68.0833 50.432 64.8146 50.9307 62.2437C49.8764 61.4116 48.9444 60.5322 48.1544 59.6353Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M79.8483 59.635C82.3774 61.1168 84.0709 64.0262 84.0709 67.3497C84.0709 69.3206 83.462 71.146 82.4395 72.6143C81.9058 72.7303 81.3697 72.8585 80.8319 72.9991C78.2165 73.6832 75.7793 74.6053 73.5868 75.7002C70.3106 74.5775 67.9801 71.2484 67.9801 67.3497C67.9774 67.1856 67.979 67.0225 67.9848 66.8605C69.6358 66.4103 71.3556 65.7358 73.0618 64.8378C73.1124 66.8678 73.6858 69.1442 75.1756 71.4825V71.4824C77.3413 68.083 77.5705 64.8145 77.0719 62.2436C78.1263 61.4115 79.0583 60.532 79.8483 59.635Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M74.8219 34.44C80.2985 35.3666 85.63 37.0069 90.6802 39.319C96.9907 48.5457 100.998 58.628 102.114 69.7874L100.691 70.924C98.2098 72.9043 93.9626 75.7196 89.4606 77.9873C84.8362 80.3167 80.4642 81.7968 77.5602 81.6648C75.0886 81.5525 73.4405 81.216 72.2607 80.8393C71.0878 80.4649 70.2851 80.0245 69.414 79.542L69.3467 79.5047C68.048 78.7851 66.4894 77.9214 63.9989 77.9214C61.5085 77.9214 59.9499 78.7851 58.6512 79.5047L58.5839 79.542C57.7128 80.0245 56.9101 80.4649 55.7372 80.8393C54.5574 81.216 52.9093 81.5525 50.4377 81.6648C47.5337 81.7968 43.1617 80.3167 38.5373 77.9873C34.0353 75.7196 29.7881 72.9043 27.3073 70.924L25.8812 69.7856C26.8783 59.7755 30.32 49.6422 37.2892 39.3311C42.3445 37.0186 47.6795 35.3744 53.1596 34.44C53.9087 35.7799 54.5868 37.1582 55.191 38.5693C61.0246 37.6903 66.9569 37.6903 72.7905 38.5693C73.3944 37.1581 74.0725 35.7797 74.8219 34.44ZM25.6244 73.4217L25.6244 73.4214C25.6234 73.2931 25.6229 73.1641 25.6229 73.0341C26.3973 73.6523 27.3253 74.341 28.3681 75.0649C30.8831 76.8109 34.0663 78.7621 37.3756 80.4253C36.8263 82.6372 36.4645 86.1582 36.3996 89.739C36.3759 91.0461 36.3911 92.3913 36.4554 93.7132C36.0742 93.5201 35.6669 93.3318 35.2418 93.1353L35.2414 93.1351L35.2411 93.135L35.241 93.1349C34.8809 92.9685 34.5146 92.7834 34.1457 92.5765C31.5631 91.1278 28.8501 88.6056 27.1971 83.8725C26.492 81.8535 25.9798 79.4321 25.7529 76.5202C25.6768 75.5436 25.6328 74.5119 25.6244 73.4217ZM39.0991 89.7879C39.1578 86.5506 39.4658 83.5387 39.8729 81.6111C43.7254 83.3285 47.5655 84.4982 50.5603 84.3621C55.891 84.1198 58.114 82.8887 59.892 81.904C61.1638 81.1997 62.2079 80.6214 63.9989 80.6214C65.79 80.6214 66.8341 81.1997 68.1059 81.904C69.8839 82.8887 72.1069 84.1198 77.4376 84.3621C80.4329 84.4982 84.2737 83.3281 88.1269 81.6102C88.5342 83.5378 88.8422 86.5501 88.9009 89.7879C88.9344 91.6389 88.8851 93.5013 88.7395 95.2163C88.653 95.2607 88.5656 95.3054 88.4773 95.3503C81.7869 98.7543 70.1952 103.554 63.999 103.554C63.1138 103.554 62.1185 103.456 61.0431 103.279C54.4923 102.195 44.9696 98.147 39.2606 95.2174C39.1149 93.5021 39.0656 91.6393 39.0991 89.7879ZM91.5447 93.7121C91.8902 93.5371 92.2573 93.366 92.6395 93.1892L92.757 93.1349C95.8048 91.7262 99.2919 89.8223 101.115 83.6591C101.685 81.729 102.093 79.3813 102.272 76.5003C102.34 75.4217 102.375 74.2683 102.375 73.0341L102.356 73.049C101.588 73.6614 100.67 74.3424 99.6399 75.0579C97.1238 76.8054 93.9372 78.7592 90.6242 80.4244C91.1736 82.6362 91.5355 86.1577 91.6004 89.739C91.6241 91.0457 91.6089 92.3905 91.5447 93.7121ZM80.0715 90.9666H47.9285V88.9666H80.0715V90.9666ZM51.4586 96.9923H76.5414V94.9923H51.4586V96.9923Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M39.7996 59.1705C41.8401 61.8199 46.4484 62.66 49.4203 62.1967L48.9944 65.6777C41.1855 65.3382 39.9411 60.5852 39.7996 59.1705Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M48.1539 60.8102C49.9425 61.247 51.9206 61.2971 53.6104 61.0255C52.165 61.7913 49.4327 62.441 46.6519 62.2693C45.5906 63.6441 44.9572 65.4364 44.9572 67.3883C44.9572 71.6847 48.1365 75.177 51.9848 75.177C55.9068 75.177 58.9388 71.6847 59.0063 67.3883C59.0738 63.0919 55.9191 59.5688 51.9725 59.5688C50.5518 59.5688 49.2449 60.0254 48.1539 60.8102Z" fill="#4F5660"/>\n<path d="M90.0967 59.1705C88.0562 61.8199 83.4479 62.66 80.476 62.1967L80.9019 65.6777C88.7108 65.3382 89.9552 60.5852 90.0967 59.1705Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M81.7424 60.8102C79.9538 61.247 77.9757 61.2971 76.2859 61.0255C77.7313 61.7913 80.4636 62.441 83.2444 62.2693C84.3057 63.6441 84.9391 65.4364 84.9391 67.3883C84.9391 71.6847 81.7598 75.177 77.9115 75.177C73.9895 75.177 70.9575 71.6847 70.89 67.3883C70.8225 63.0919 73.9772 59.5688 77.9238 59.5688C79.3445 59.5688 80.6514 60.0254 81.7424 60.8102Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<ellipse cx="52.4836" cy="67.6228" rx="4.46318" ry="5.11087" fill="#4F5660"/>\n<ellipse rx="4.46318" ry="5.11087" transform="matrix(-1 0 0 1 77.5166 67.6228)" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M51.5227 75.3684C55.8004 75.3684 59.2682 71.9006 59.2682 67.6229C59.2682 63.3452 55.8004 59.8774 51.5227 59.8774C47.2449 59.8774 43.7771 63.3452 43.7771 67.6229C43.7771 71.9006 47.2449 75.3684 51.5227 75.3684ZM51.5227 78.2511C57.3924 78.2511 62.1508 73.4927 62.1508 67.6229C62.1508 61.7531 57.3924 56.9948 51.5227 56.9948C45.6529 56.9948 40.8945 61.7531 40.8945 67.6229C40.8945 73.4927 45.6529 78.2511 51.5227 78.2511Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M78.4775 75.3684C74.1998 75.3684 70.732 71.9006 70.732 67.6229C70.732 63.3452 74.1998 59.8774 78.4775 59.8774C82.7553 59.8774 86.2231 63.3452 86.2231 67.6229C86.2231 71.9006 82.7553 75.3684 78.4775 75.3684ZM78.4775 78.2511C72.6078 78.2511 67.8494 73.4927 67.8494 67.6229C67.8494 61.7531 72.6078 56.9948 78.4775 56.9948C84.3473 56.9948 89.1057 61.7531 89.1057 67.6229C89.1057 73.4927 84.3473 78.2511 78.4775 78.2511Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M64.4673 64.0702C63.0584 64.1726 61.8788 64.5252 61.2763 64.786L60.131 62.1407C61.0334 61.75 62.5298 61.3208 64.2584 61.1951C65.992 61.0691 68.0546 61.2419 70.0159 62.1572L68.7969 64.7694C67.4076 64.1211 65.8712 63.9681 64.4673 64.0702Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<ellipse cx="50.8444" cy="69.7245" rx="4.67586" ry="5.35442" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M63.5486 66.1217C62.5415 66.1949 61.7058 66.4474 61.2996 66.6233L60.0997 63.8519C60.8201 63.54 61.9878 63.2072 63.3297 63.1097C64.6769 63.0118 66.2996 63.1441 67.8535 63.8693L66.5764 66.6059C65.6218 66.1605 64.5502 66.0489 63.5486 66.1217Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M42.2439 63.1867V72.059H59.5753V63.1867H42.2439ZM41.2372 60.1667C40.1253 60.1667 39.2239 61.0681 39.2239 62.1801V73.0656C39.2239 74.1776 40.1253 75.079 41.2372 75.079H60.5819C61.6939 75.079 62.5952 74.1776 62.5952 73.0656V62.1801C62.5952 61.0681 61.6939 60.1667 60.5819 60.1667H41.2372Z" fill="#4F5660"/>\n<ellipse rx="4.67586" ry="5.35442" transform="matrix(-1 0 0 1 77.4184 69.7245)" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M86.019 63.1867V72.059H68.6876V63.1867H86.019ZM87.0257 60.1667C88.1376 60.1667 89.039 61.0681 89.039 62.1801V73.0656C89.039 74.1776 88.1376 75.079 87.0257 75.079H67.681C66.569 75.079 65.6676 74.1776 65.6676 73.0656V62.1801C65.6676 61.0681 66.569 60.1667 67.6809 60.1667H87.0257Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M35.1563 43.0918C26.8685 56.7782 24.6343 70.1595 25.8928 83.3649C31.7702 87.7074 38.3487 91.01 45.3423 93.129C46.9171 91.011 48.3105 88.7641 49.5079 86.412C47.2337 85.5626 45.0386 84.5147 42.9482 83.2803C43.4983 82.8812 44.0364 82.4701 44.5564 82.0711C50.6391 84.9317 57.2781 86.4148 63.9999 86.4148C70.7217 86.4148 77.3606 84.9317 83.4434 82.0711C83.9694 82.5004 84.5074 82.9115 85.0516 83.2803C82.9571 84.5167 80.758 85.5666 78.4797 86.4181C79.6756 88.769 81.0692 91.0141 82.6453 93.129C89.6449 91.0185 96.2285 87.7175 102.107 83.371C103.532 68.5961 100.241 55.5792 93.3312 43.9075C90.9123 45.0745 87.8207 45.6709 83.7786 45.0079C82.7076 44.8322 82.1778 45.0037 80.8288 45.4403C80.5267 45.5381 80.1834 45.6492 79.7839 45.7727C77.587 46.4515 74.7462 47.0323 69.8485 46.4794C64.8891 45.9194 60.6922 44.5685 57.2812 43.4705L57.2812 43.4705L57.2811 43.4705L57.2811 43.4704C56.0775 43.083 54.9717 42.7271 53.9648 42.4485C51.9495 41.8909 50.2673 41.601 48.6626 41.6907C47.1048 41.7778 45.4825 42.2312 43.6199 43.3737C41.7746 44.5055 39.7299 45.3795 37.7989 44.9469C36.5098 44.6582 35.6805 43.9276 35.1563 43.0918Z" fill="white"/>\n<path d="M38.5073 33.2625C39.6104 29.8505 43.7996 26.3249 48.685 27.6325C53.5705 28.9401 56.9253 29.181 67.1022 25C66.715 27.2086 64.4037 29.7706 61.8295 31.5921C67.2527 30.8983 74.7034 30.8125 79.8987 32.8327C87.745 35.8839 96.7046 37.2295 98 36.6241C95.7793 38.2586 93.0736 43.7964 84.2156 42.3435C80.0176 41.6549 79.1581 44.8132 70.1514 43.7964C57.282 42.3435 51.0908 35.6236 42.2082 41.0721C35.1021 45.431 36.78 37.6819 38.5073 33.2625Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M63.9813 23.3207C55.5483 22.9921 36.4479 25.9163 27.5113 40.2415C16.3405 58.1479 12.991 66.3017 19.1116 67.9219C20.9735 68.4147 28.1687 69.7461 32.1114 67.5119L38.1897 42.2129H48.3841L52.2832 36.4099L55.7518 42.2129H63.9813H89.7731L95.8515 67.5119C99.7942 69.7461 105.772 68.4147 107.634 67.9219C114.419 66.1257 111.622 58.1479 100.452 40.2415C91.515 25.9163 72.4144 22.9921 63.9813 23.3207Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M40.3967 45.0129L34.5498 69.3484L33.4918 69.948C31.2079 71.2422 28.3699 71.5708 25.9494 71.5667C25.44 76.1908 25.4566 80.7884 25.8928 85.3649C31.7702 89.7074 38.3487 93.0099 45.3423 95.129C46.9171 93.011 48.3105 90.764 49.5079 88.412C47.2337 87.5626 45.0386 86.5147 42.9482 85.2803C43.4983 84.8812 44.0364 84.4701 44.5564 84.0711C50.6391 86.9317 57.2781 88.4148 63.9999 88.4148C70.7217 88.4148 77.3606 86.9317 83.4434 84.0711C83.9694 84.5003 84.5074 84.9115 85.0516 85.2803C82.9571 86.5167 80.758 87.5666 78.4797 88.4181C79.6756 90.769 81.0692 93.0141 82.6453 95.129C89.6449 93.0184 96.2285 89.7175 102.107 85.371C102.568 80.5876 102.535 75.9886 102.045 71.5598C99.723 71.6176 96.9035 71.3264 94.4711 69.948L93.4131 69.3484L87.5662 45.0129H54.1634L52.145 41.6361L49.8761 45.0129H40.3967Z" fill="white"/>\n<path d="M84.7581 23.2967L86.9488 29.9539L90.8921 33.1972L96.5332 29.9539L90.2349 29.2711L84.7581 23.2967Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M55.191 39.0003C58.1138 38.5599 61.0615 38.3401 64.009 38.341C66.9566 38.3401 69.9043 38.5599 72.8271 39.0003C73.4313 37.5892 74.1094 36.2109 74.8585 34.871C80.3386 35.8054 85.6736 37.4496 90.7289 39.7621C100.765 54.6108 102.43 68.8951 102.43 83.1287C102.43 87.5526 100.434 90.8153 95.276 90.8153C89.8898 90.8153 89.523 85.7147 89.1386 80.3694C89.1192 80.1001 89.0998 79.8302 89.0797 79.5604C86.3857 80.6978 85.0428 81.3276 83.4618 82.0711C77.3791 84.9317 70.7401 86.4148 64.0183 86.4148H64.009H63.9998C57.278 86.4148 50.639 84.9317 44.5563 82.0711C42.9753 81.3276 41.6323 80.6978 38.9383 79.5604C38.9182 79.8302 38.8988 80.1001 38.8795 80.3694C38.495 85.7147 38.1282 90.8153 32.7421 90.8153C27.5845 90.8153 25.588 87.5526 25.588 83.1287C25.5879 68.8951 27.253 54.6108 37.2892 39.7621C42.3445 37.4496 47.6795 35.8054 53.1596 34.871C53.9087 36.2109 54.5867 37.5892 55.191 39.0003Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M74.822 34.4428C80.2985 35.3694 85.63 37.0097 90.6803 39.3219C96.9907 48.5485 100.998 58.6308 102.115 69.7902L100.691 70.9268C98.2099 72.9071 93.9627 75.7225 89.4606 77.9902C84.8362 80.3195 80.4643 81.7997 77.5602 81.6677C75.0886 81.5553 73.4406 81.2189 72.2607 80.8422C71.0878 80.4677 70.2852 80.0273 69.414 79.5449L69.3467 79.5076C68.048 78.7879 66.4894 77.9243 63.999 77.9243C61.5086 77.9243 59.95 78.7879 58.6513 79.5076L58.5839 79.5449C57.7128 80.0273 56.9101 80.4677 55.7372 80.8422C54.5574 81.2189 52.9094 81.5553 50.4378 81.6677C47.5337 81.7997 43.1618 80.3195 38.5373 77.9902C34.0353 75.7225 29.7881 72.9071 27.3074 70.9268L25.8813 69.7884C26.8784 59.7783 30.32 49.6451 37.2892 39.3339C42.3446 37.0214 47.6796 35.3772 53.1596 34.4428C53.9087 35.7827 54.5868 37.161 55.191 38.5722C61.0246 37.6931 66.957 37.6931 72.7906 38.5722C73.3945 37.1609 74.0726 35.7825 74.822 34.4428ZM25.6244 73.4245C25.6244 73.4244 25.6244 73.4243 25.6244 73.4243C25.6235 73.296 25.623 73.1669 25.623 73.037C26.3974 73.6552 27.3253 74.3438 28.3681 75.0677C34.4141 79.265 44.3214 84.6485 50.5604 84.3649C55.891 84.1226 58.114 82.8915 59.892 81.9069C61.1638 81.2025 62.208 80.6243 63.999 80.6243C65.79 80.6243 66.8341 81.2025 68.106 81.9069C69.8839 82.8915 72.1069 84.1226 77.4376 84.3649C83.68 84.6486 93.5948 79.2591 99.6399 75.0608C100.67 74.3452 101.588 73.6642 102.356 73.0518C102.363 73.0469 102.369 73.0419 102.375 73.037C102.375 74.2712 102.34 75.4245 102.272 76.5032C102.095 79.3473 101.696 81.6717 101.136 83.5876C99.3199 89.8099 95.817 91.7234 92.757 93.1378C92.7177 93.1559 92.6785 93.174 92.6396 93.192C92.0548 93.4625 91.5057 93.7195 91.0146 93.9978C90.2889 94.4091 89.4331 94.8669 88.4773 95.3531C81.7869 98.7571 70.1953 103.557 63.999 103.557C63.1138 103.557 62.1185 103.459 61.0431 103.281C53.5155 102.036 42.0634 96.8765 36.9834 93.9978C36.4596 93.701 35.8698 93.4284 35.2411 93.1378C35.2411 93.1378 35.2411 93.1378 35.241 93.1378C34.878 92.97 34.5087 92.7833 34.1368 92.5743C31.5333 91.1116 28.7985 88.5567 27.152 83.7448C26.4702 81.7522 25.975 79.3725 25.7529 76.523C25.6769 75.5465 25.6328 74.5147 25.6244 73.4245ZM75.303 93.3008C75.303 95.3753 73.7251 97.0813 71.704 97.2841V89.3176C73.7251 89.5204 75.303 91.2263 75.303 93.3008ZM65.435 89.2974H69.1128V97.3043H65.435V89.2974ZM59.1659 97.3043H62.8438V89.2974H59.1659V97.3043ZM56.5747 89.2993C54.4211 89.3648 52.6953 91.1313 52.6953 93.3008C52.6953 95.4704 54.4211 97.2369 56.5747 97.3024V89.2993Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M70.1896 69.4179C70.0314 68.7706 69.9469 68.0902 69.9469 67.3883C69.9469 63.0919 73.0157 59.5689 76.9684 59.5689C80.9211 59.5689 84.0513 63.0919 83.9838 67.3883C83.9728 68.0847 83.8842 68.7599 83.7266 69.4026C81.9277 67.6281 79.56 66.5505 76.9659 66.5505C74.3643 66.5505 71.9905 67.6343 70.1896 69.4179Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M44.2702 69.4179C44.1119 68.7706 44.0274 68.0902 44.0274 67.3883C44.0274 63.0919 47.0962 59.5689 51.0489 59.5689C55.0016 59.5689 58.1318 63.0919 58.0643 67.3883C58.0534 68.0847 57.9647 68.7599 57.8071 69.4026C56.0082 67.6281 53.6405 66.5505 51.0464 66.5505C48.4448 66.5505 46.071 67.6343 44.2702 69.4179Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M93.5096 44.2668C91.253 43.4323 82.5214 40.3595 72.7926 38.9956L72.7906 39.0003C72.6123 38.9735 72.434 38.9474 72.2556 38.9222C70.2927 38.6609 68.2936 38.4716 66.3028 38.3863C64.8293 38.3286 63.3542 38.3261 61.8805 38.3788C59.7262 38.4641 57.5606 38.6725 55.4401 38.9633C55.3571 38.9755 55.274 38.9878 55.191 39.0003L55.1901 38.998C45.4681 40.3632 36.7454 43.4329 34.4903 44.2669C35.0125 44.9903 35.2887 45.8541 35.3726 46.8151C35.4872 48.1271 35.2595 49.7503 34.8673 51.6964C34.4648 53.6939 33.8317 56.2846 33.0016 59.6272C32.1696 62.9774 31.5022 65.5656 30.9028 67.5263C30.3177 69.4401 29.7354 70.9764 29.0025 72.0801C28.1838 73.313 27.0845 74.1353 25.6063 74.3249C25.501 77.3483 25.6065 80.3612 25.8928 83.3649C31.7702 87.7074 38.3487 91.0099 45.3423 93.129C46.9171 91.011 48.3105 88.764 49.5079 86.412C47.2337 85.5626 45.0386 84.5146 42.9482 83.2803C43.4983 82.8812 44.0364 82.4701 44.5564 82.0711C50.6391 84.9316 57.2781 86.4148 63.9999 86.4148C70.7217 86.4148 77.3606 84.9316 83.4434 82.0711C83.9694 82.5003 84.5074 82.9115 85.0516 83.2803C82.9571 84.5166 80.758 85.5666 78.4797 86.4181C79.6756 88.769 81.0692 91.0141 82.6453 93.129C89.6449 91.0184 96.2285 87.7175 102.107 83.3709C102.405 80.2798 102.497 77.2657 102.392 74.3247C100.915 74.1347 99.8157 73.3126 98.9973 72.0801C98.2645 70.9764 97.6821 69.4401 97.0971 67.5263C96.4977 65.5656 95.8302 62.9774 94.9983 59.6272C94.1681 56.2846 93.5351 53.6939 93.1325 51.6964C92.7403 49.7503 92.5127 48.1271 92.6272 46.8151C92.7112 45.8541 92.9874 44.9903 93.5096 44.2668Z" fill="white"/>\n<path d="M30.7704 59.0731C27.4375 72.4932 26.9732 72.7441 22.6957 71.6818C17.5077 70.3934 14.8307 63.1936 16.7164 55.6007C18.6021 48.0078 24.3364 42.897 29.5243 44.1854C34.0181 45.3014 34.1032 45.653 30.7704 59.0731Z" fill="white"/>\n<path d="M97.2296 59.0731C100.562 72.4932 101.027 72.7441 105.304 71.6818C110.492 70.3934 113.169 63.1936 111.284 55.6007C109.398 48.0078 103.664 42.897 98.4757 44.1854C93.9819 45.3014 93.8968 45.653 97.2296 59.0731Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M63.8892 33.285C42.64 33.285 33.3487 41.9848 31.4139 45.8088L29.0047 44.5899C31.5441 39.571 41.9885 30.585 63.8892 30.585C85.7979 30.585 96.9323 39.5698 99.8503 44.5131L97.5251 45.8856C95.2233 41.986 85.1306 33.285 63.8892 33.285Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M57.8472 61.1598C56.9993 60.2401 55.8359 59.7336 54.5709 59.7336C53.6254 59.7336 52.7595 60.0326 51.9972 60.622C51.6126 60.9196 51.2641 61.2836 50.9568 61.7085C50.6496 61.2837 50.3009 60.9196 49.9162 60.622C49.154 60.0326 48.2881 59.7336 47.3426 59.7336C46.0777 59.7336 44.9141 60.2401 44.0662 61.1598C43.2284 62.0687 42.7669 63.3103 42.7669 64.6562C42.7669 66.0415 43.2831 67.3095 44.3915 68.6469C45.383 69.8432 46.808 71.0577 48.4582 72.4639C49.0216 72.9442 49.6604 73.4885 50.3236 74.0684C50.4988 74.2218 50.7236 74.3063 50.9568 74.3063C51.1898 74.3063 51.4148 74.2218 51.5897 74.0686C52.2529 73.4887 52.892 72.9441 53.4557 72.4636C55.1057 71.0575 56.5307 69.8432 57.5222 68.6468C58.6305 67.3095 59.1466 66.0415 59.1466 64.6561C59.1466 63.3103 58.6851 62.0687 57.8472 61.1598Z" fill="#4F5660"/>\n<path d="M83.9337 61.1598C83.0858 60.2401 81.9223 59.7336 80.6574 59.7336C79.7119 59.7336 78.846 60.0326 78.0837 60.622C77.6991 60.9196 77.3505 61.2836 77.0432 61.7085C76.7361 61.2837 76.3874 60.9196 76.0026 60.622C75.2405 60.0326 74.3746 59.7336 73.4291 59.7336C72.1642 59.7336 71.0006 60.2401 70.1527 61.1598C69.3149 62.0687 68.8534 63.3103 68.8534 64.6562C68.8534 66.0415 69.3696 67.3095 70.478 68.6469C71.4695 69.8432 72.8945 71.0577 74.5447 72.4639C75.1081 72.9442 75.7468 73.4885 76.41 74.0684C76.5852 74.2218 76.8101 74.3063 77.0432 74.3063C77.2763 74.3063 77.5013 74.2218 77.6762 74.0686C78.3394 73.4887 78.9785 72.9441 79.5422 72.4636C81.1922 71.0575 82.6172 69.8432 83.6087 68.6468C84.717 67.3095 85.2331 66.0415 85.2331 64.6561C85.2331 63.3103 84.7716 62.0687 83.9337 61.1598Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M30.0015 55.3864C30.1588 55.3773 30.2853 55.361 30.3706 55.3491C30.8564 55.2815 31.3272 55.1409 31.7033 55.0146C32.4399 54.7671 33.37 54.3786 34.3484 53.9699L34.4419 53.9308C38.0776 52.4123 44.1276 49.8866 52.4866 48.5407C55.9358 47.9854 59.7781 47.6309 64.0061 47.6309C78.4807 47.6309 88.4348 51.7858 93.5707 53.9308L93.6642 53.9699L93.6644 53.97L93.8811 54.0605C94.7795 54.4355 95.6273 54.7855 96.3093 55.0146C96.6853 55.1409 97.1561 55.2815 97.6419 55.3491C97.7262 55.3608 97.8506 55.3769 98.0053 55.3861C101.644 64.5353 103.158 74.4751 102.107 85.371C96.2285 89.7175 89.6449 93.0185 82.6453 95.129C81.0692 93.0141 79.6756 90.769 78.4797 88.4181C80.758 87.5666 82.9571 86.5167 85.0516 85.2803C84.5074 84.9115 83.9694 84.5004 83.4434 84.0711C77.3606 86.9317 70.7217 88.4148 63.9999 88.4148C57.2781 88.4148 50.6391 86.9317 44.5564 84.0711C44.0364 84.4701 43.4983 84.8813 42.9482 85.2803C45.0386 86.5147 47.2337 87.5626 49.5079 88.412C48.3105 90.7641 46.9171 93.011 45.3423 95.129C38.3487 93.01 31.7702 89.7074 25.8928 85.3649C24.9516 75.4885 25.964 65.5137 30.0015 55.3864Z" fill="white"/>\n<path d="M29.491 40.8279C28.3731 41.1131 26.4174 42.8466 26.6964 44.0063C26.7974 44.426 26.9075 44.9374 27.0284 45.4989L27.0284 45.4989C27.5766 48.0448 28.3459 51.6181 29.491 52.3192C29.8928 52.5653 31.1665 52.0333 33.2805 51.1503C38.5201 48.962 48.9217 44.6176 64.0061 44.6176C79.0904 44.6176 89.4925 48.962 94.732 51.1503L94.7321 51.1503C96.8461 52.0333 98.1197 52.5652 98.5215 52.3192C99.6666 51.6181 100.436 48.0448 100.984 45.4989C101.105 44.9374 101.215 44.426 101.316 44.0063C101.514 43.186 99.6394 41.1131 98.5215 40.8279C84.4364 34.7644 69.5935 34.3487 64.0061 34.3487C58.4187 34.3487 43.5762 34.7644 29.491 40.8279Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M33.3037 36.3789C36.743 30.1112 45.7955 21.7116 64.0061 21.5219C82.2166 21.7116 91.2691 30.1111 94.7085 36.3787C81.6987 31.8946 69.0546 31.57 64.0062 31.57C58.9576 31.57 46.3137 31.8947 33.3037 36.3789Z" fill="white"/>\n<path d="M62.9429 14.7405C62.0806 14.8224 61.2613 14.9958 60.5071 15.2459L60.806 18.3099L58.0506 16.4957C56.993 17.2824 56.2635 18.2767 56.0095 19.3784C58.4685 18.9963 61.1209 18.7732 63.9769 18.7435L64.0058 18.7432L64.0347 18.7435C66.9529 18.7739 69.6584 19.0062 72.1624 19.4035C71.914 18.2929 71.1826 17.2903 70.1187 16.498L67.5884 18.1639L67.8661 15.3171C67.2253 15.089 66.5344 14.917 65.8077 14.8108L64.1876 17.7679L62.9429 14.7405Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M51.2525 61.0615L59.5048 69.3139L57.1343 71.6844L51.2525 65.8026L45.3707 71.6844L43.0001 69.3139L51.2525 61.0615Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M76.7476 61.0615L85 69.3139L82.6295 71.6844L76.7476 65.8026L70.8658 71.6844L68.4953 69.3139L76.7476 61.0615Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M85.8051 66.8072L70.1785 71.4687L69.1254 67.9384L84.752 63.2769L85.8051 66.8072Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M42.1949 66.8072L57.8215 71.4687L58.8746 67.9384L43.248 63.2769L42.1949 66.8072Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M74.705 34.9059V44.8367H53.295V34.7546C54.292 34.5898 55.1026 34.4955 55.6955 34.4446C55.7457 34.4363 55.7949 34.4279 55.8432 34.4197C56.1756 34.3631 56.4708 34.3128 56.816 34.3128C60.8364 33.7855 65.3842 33.6537 70.1296 34.181C71.6298 34.3547 73.1564 34.5927 74.705 34.9059Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M77.405 47.5367H50.595V39.7735C42.7717 41.3045 36.2905 43.5996 34.4505 44.2816C26.7419 57.5541 24.6708 70.5425 25.8928 83.3649C31.7702 87.7074 38.3487 91.01 45.3423 93.129C46.9171 91.011 48.3105 88.7641 49.5079 86.412C47.2337 85.5626 45.0386 84.5147 42.9482 83.2803C43.4983 82.8812 44.0364 82.4701 44.5564 82.0711C50.6391 84.9317 57.2781 86.4148 63.9999 86.4148C70.7217 86.4148 77.3606 84.9317 83.4434 82.0711C83.9694 82.5004 84.5074 82.9115 85.0516 83.2803C82.9571 84.5167 80.758 85.5666 78.4797 86.4181C79.6756 88.769 81.0692 91.0141 82.6453 93.129C89.6449 91.0185 96.2285 87.7175 102.107 83.371C103.516 68.754 100.311 55.8577 93.5516 44.2824C91.7146 43.6014 85.2313 41.3051 77.405 39.7735V47.5367Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M44.0151 67.3883C44.0151 71.6847 47.1945 75.177 51.0428 75.177C54.9648 75.177 57.9968 71.6847 58.0643 67.3883C58.1318 63.0919 54.9771 59.5688 51.0305 59.5688C47.084 59.5688 44.0151 63.0919 44.0151 67.3883Z" fill="#4F5660"/>\n<path d="M69.9469 67.3883C69.9469 71.6847 73.1139 75.177 76.9684 75.177C80.8904 75.177 83.9163 71.6847 83.9838 67.3883C84.0513 63.0919 80.9211 59.5688 76.9684 59.5688C73.0157 59.5688 69.9469 63.0919 69.9469 67.3883Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M87.8638 62.3163L40.1362 62.3163L40.1362 59.5688L87.8638 59.5689L87.8638 62.3163Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M44.0151 66.8883C44.0151 71.1847 47.1945 74.677 51.0428 74.677C54.9648 74.677 57.9968 71.1847 58.0643 66.8883C58.1318 62.5919 54.9771 59.0688 51.0305 59.0688C47.084 59.0688 44.0151 62.5919 44.0151 66.8883Z" fill="#4F5660"/>\n<path d="M69.9469 66.8883C69.9469 71.1847 73.1139 74.677 76.9684 74.677C80.8904 74.677 83.9163 71.1847 83.9838 66.8883C84.0513 62.5919 80.9211 59.0688 76.9684 59.0688C73.0157 59.0688 69.9469 62.5919 69.9469 66.8883Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M51.0403 77.1858C56.7359 77.1858 61.3531 72.5686 61.3531 66.8729C61.3531 61.1773 56.7359 56.56 51.0403 56.56C45.3446 56.56 40.7274 61.1773 40.7274 66.8729C40.7274 72.5686 45.3446 77.1858 51.0403 77.1858ZM51.0403 81.0239C58.8556 81.0239 65.1912 74.6883 65.1912 66.8729C65.1912 59.0575 58.8556 52.7219 51.0403 52.7219C43.2249 52.7219 36.8893 59.0575 36.8893 66.8729C36.8893 74.6883 43.2249 81.0239 51.0403 81.0239Z" fill="#4F5660"/>\n<circle cx="34.2768" cy="66.9316" r="1.86085" fill="#4F5660"/>\n<circle cx="34.2768" cy="72.0137" r="1.86085" fill="#4F5660"/>\n<circle cx="34.2768" cy="77.0952" r="1.86085" fill="#4F5660"/>\n<circle cx="34.2768" cy="82.1692" r="1.86085" fill="#4F5660"/>\n<circle cx="34.2768" cy="87.2428" r="1.86085" fill="#4F5660"/>\n<circle cx="34.2768" cy="92.3165" r="1.86085" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M55.0939 36.9236C52.8588 37.4047 51.0073 37.9873 49.7079 38.5139C47.4297 39.3653 45.2306 40.4153 43.1361 41.6517C43.6802 42.0205 44.2183 42.4316 44.7443 42.8608C50.827 40.0003 57.466 38.5171 64.1878 38.5171C70.9096 38.5171 77.5486 40.0003 83.6313 42.8608C84.1512 42.4618 84.6893 42.0507 85.2395 41.6517C83.149 40.4173 80.954 39.3693 78.6797 38.5199C76.7812 37.738 74.8525 37.1604 72.9335 36.7498C74.0693 29.8175 80.0875 24.528 87.3411 24.528C95.4047 24.528 101.941 31.0648 101.941 39.1284C101.941 43.6304 99.9038 47.6566 96.7004 50.3349C101.272 60.316 103.275 71.2521 102.107 83.371C96.2285 87.7175 89.6449 91.0185 82.6453 93.129C81.0692 91.0141 79.6756 88.769 78.4797 86.4181C80.758 85.5666 82.9571 84.5167 85.0516 83.2803C84.5074 82.9115 83.9694 82.5004 83.4434 82.0711C77.3606 84.9317 70.7217 86.4148 63.9999 86.4148C57.2781 86.4148 50.6391 84.9317 44.5564 82.0711C44.0364 82.4701 43.4983 82.8812 42.9482 83.2803C45.0386 84.5147 47.2337 85.5626 49.5079 86.412C48.3105 88.7641 46.9171 91.011 45.3423 93.129C38.3487 91.01 31.7702 87.7074 25.8928 83.3649C24.8573 72.4998 26.1863 61.5156 31.3061 50.3403C28.099 47.662 26.0585 43.6335 26.0585 39.1284C26.0585 31.0648 32.5953 24.528 40.6589 24.528C47.973 24.528 54.031 29.9062 55.0939 36.9236Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M47.1705 31.9283C46.338 32.5178 46.2556 32.9071 46.2556 33.0198C46.2556 33.1324 46.338 33.5217 47.1705 34.1112C47.9662 34.6746 49.2084 35.2393 50.8695 35.7369C54.1738 36.7266 58.8225 37.359 64.0169 37.359C69.2113 37.359 73.86 36.7266 77.1643 35.7369C78.8254 35.2393 80.0677 34.6746 80.8634 34.1112C81.6958 33.5217 81.7782 33.1324 81.7782 33.0198C81.7782 32.9071 81.6958 32.5178 80.8634 31.9283C80.0677 31.3649 78.8254 30.8002 77.1643 30.3027C73.86 29.313 69.2113 28.6806 64.0169 28.6806C58.8225 28.6806 54.1738 29.313 50.8695 30.3027C49.2084 30.8002 47.9662 31.3649 47.1705 31.9283ZM50.0661 27.6204C53.6968 26.5329 58.6288 25.8806 64.0169 25.8806C69.405 25.8806 74.337 26.5329 77.9677 27.6204C79.7741 28.1615 81.338 28.8335 82.4815 29.6433C83.5883 30.427 84.5782 31.5476 84.5782 33.0198C84.5782 34.4919 83.5883 35.6125 82.4815 36.3962C81.338 37.206 79.7741 37.8781 77.9677 38.4191C74.337 39.5066 69.405 40.159 64.0169 40.159C58.6288 40.159 53.6968 39.5066 50.0661 38.4191C48.2597 37.8781 46.6958 37.206 45.5523 36.3962C44.4455 35.6125 43.4556 34.4919 43.4556 33.0198C43.4556 31.5476 44.4455 30.427 45.5523 29.6433C46.6958 28.8335 48.2597 28.1615 50.0661 27.6204Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M42.4431 37.6702C42.907 38.1509 43.3903 38.5413 43.8186 38.8445C45.3346 39.9181 47.2429 40.7052 49.2053 41.293C53.1858 42.4852 58.4213 43.1589 64.0169 43.1589C69.6125 43.1589 74.848 42.4852 78.8285 41.293C80.7909 40.7052 82.6992 39.9181 84.2153 38.8445C84.6411 38.543 85.1214 38.1553 85.583 37.6782C86.1569 37.883 86.7279 38.0961 87.2959 38.3174C88.3263 38.7171 89.3504 39.1463 90.3632 39.6059C90.469 39.6536 90.5747 39.7017 90.6803 39.75L90.6812 39.7513L90.6941 39.7573L90.6962 39.7732C99.3855 52.488 103.702 66.8274 102.107 83.371L64.0975 79.6004L25.8928 83.3649C24.5324 69.0906 27.2531 54.6108 37.2892 39.7621C37.5794 39.6294 37.8705 39.4988 38.1626 39.3705C39.1685 38.9261 40.1847 38.5113 41.2062 38.1251C41.617 37.9692 42.0293 37.8176 42.4431 37.6702Z" fill="white"/>\n<ellipse cx="64" cy="20.4865" rx="14.228" ry="4.76272" fill="white"/>\n<ellipse cx="64" cy="29.4004" rx="15.1217" ry="5.06189" fill="white"/>\n<rect x="49.772" y="20.4865" width="28.4559" height="8.15968" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M48.4036 99.8839C44.3592 99.8839 34.8283 93.5409 25.8971 83.3325L40.2186 75.9424L90.4585 76.8227L102.109 83.3325C93.1783 93.5409 84.4129 99.8839 79.6029 99.8839C77.3654 99.8839 75.2098 99.1096 72.904 98.2814C70.2531 97.3293 67.4037 96.3059 64.0033 96.3059C60.7277 96.3059 57.5687 97.3825 54.7165 98.3546C52.3691 99.1546 50.2294 99.8839 48.4036 99.8839ZM86.1799 93.033C84.0973 94.426 80.8324 95.1323 76.4757 95.1323C69.1678 95.1323 65.8467 91.836 64.3374 90.338C64.2145 90.216 64.1035 90.1059 64.0035 90.0105C63.9034 90.1058 63.7926 90.2159 63.6697 90.3378C62.1607 91.8357 58.8393 95.1323 51.5312 95.1323C47.1746 95.1323 43.9096 94.426 41.827 93.033C39.0371 91.1667 40.1008 87.4007 40.2103 87.0129C40.2147 86.9975 40.2177 86.9868 40.2186 86.9827C40.2835 86.6971 40.7201 86.4933 41.2098 86.5156C41.6999 86.5395 42.0717 86.7843 42.0554 87.0722C42.0552 87.0888 42.0509 87.1212 42.0449 87.1667C41.9787 87.6691 41.702 89.768 44.3905 89.8047L44.4201 89.8049C45.7323 89.8048 47.1256 88.5145 48.4725 87.2673C50.4951 85.3938 55.1248 82.8065 58.914 82.8065C61.9551 82.8065 62.7031 84.1079 63.2952 85.1383C63.516 85.5225 63.7152 85.869 64.0035 86.0963C64.2918 85.8691 64.4909 85.5225 64.7118 85.1383C65.304 84.108 66.052 82.8065 69.093 82.8065C72.8822 82.8065 77.5121 85.3943 79.5348 87.2676C80.8816 88.515 82.2744 89.8049 83.5869 89.8048L83.6166 89.8045C86.3029 89.7679 86.0287 87.6725 85.962 87.1627C85.9559 87.116 85.9516 87.0826 85.9514 87.0654C85.9347 86.7774 86.307 86.536 86.7972 86.5121C87.2839 86.4886 87.7233 86.697 87.7883 86.9826C87.7893 86.9868 87.7922 86.997 87.7967 87.0129C87.9063 87.4014 88.9696 91.1669 86.1799 93.033Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M74.822 34.871C80.2985 35.7976 85.63 37.4379 90.6803 39.75C99.3803 52.4705 103.703 66.8174 102.107 83.371C96.2285 87.7175 90.5725 76.5462 83.5729 78.6567C65.1284 82.1032 50.6334 80.0927 45.8843 78.6567C38.8907 76.5377 31.7702 87.7074 25.8928 83.3649C24.5324 69.0906 27.2531 54.6108 37.2892 39.7621C42.3446 37.4496 47.6796 35.8054 53.1596 34.871C53.9087 36.2109 54.5868 37.5892 55.191 39.0003C61.0246 38.1213 66.957 38.1213 72.7906 39.0003C73.3945 37.5891 74.0726 36.2107 74.822 34.871Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M48.4036 99.9209C44.3592 99.9209 34.8283 93.5779 25.8971 83.3695L40.2186 75.9795L90.4585 76.8597L102.109 83.3695C93.1783 93.5779 84.4129 99.9209 79.6029 99.9209C77.3654 99.9209 75.2098 99.1466 72.904 98.3185C70.2531 97.3663 67.4037 96.3429 64.0033 96.3429C60.7277 96.3429 57.5687 97.4195 54.7165 98.3916C52.3691 99.1916 50.2294 99.9209 48.4036 99.9209ZM86.1799 93.07C84.0973 94.463 80.8324 95.1693 76.4757 95.1693C69.1678 95.1693 65.8467 91.873 64.3374 90.375C64.2145 90.253 64.1035 90.1429 64.0035 90.0475C63.9034 90.1428 63.7926 90.2529 63.6697 90.3748C62.1607 91.8727 58.8393 95.1693 51.5312 95.1693C47.1746 95.1693 43.9096 94.463 41.827 93.07C39.0371 91.2037 40.1008 87.4377 40.2103 87.05C40.2147 87.0345 40.2177 87.0238 40.2186 87.0197C40.2835 86.7341 40.7201 86.5303 41.2098 86.5526C41.6999 86.5765 42.0717 86.8213 42.0554 87.1093C42.0552 87.1258 42.0509 87.1582 42.0449 87.2037C41.9787 87.7061 41.702 89.805 44.3905 89.8417L44.4201 89.842C45.7323 89.8418 47.1256 88.5515 48.4725 87.3043C50.4951 85.4308 55.1248 82.8435 58.914 82.8435C61.9551 82.8435 62.7031 84.1449 63.2952 85.1753C63.516 85.5595 63.7152 85.906 64.0035 86.1334C64.2918 85.9061 64.4909 85.5596 64.7118 85.1753C65.304 84.145 66.052 82.8435 69.093 82.8435C72.8822 82.8435 77.5121 85.4313 79.5348 87.3046C80.8816 88.552 82.2744 89.842 83.5869 89.8418L83.6166 89.8415C86.3029 89.8049 86.0287 87.7095 85.962 87.1997C85.9559 87.153 85.9516 87.1197 85.9514 87.1024C85.9347 86.8144 86.307 86.573 86.7972 86.5491C87.2839 86.5256 87.7233 86.734 87.7883 87.0196C87.7893 87.0238 87.7922 87.034 87.7967 87.0499C87.9063 87.4384 88.9696 91.2039 86.1799 93.07Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M96.588 49.8905C88.4831 46.9769 76.9852 45.0869 64.0656 45.0869C51.146 45.0869 39.6481 46.9769 31.5432 49.8905C31.1538 50.0305 30.7745 50.172 30.4053 50.315C30.7934 48.8769 32.2028 44.6753 34.7355 39.3734C43.1156 37.197 53.2479 35.9559 64.0656 35.9559C74.9583 35.9559 85.1562 37.2143 93.5699 39.4188C96.1038 44.7627 97.4097 48.9147 97.7458 50.3227C97.3703 50.1771 96.9844 50.033 96.588 49.8905Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M31.0875 52.8225C31.2053 52.7791 31.3242 52.7359 31.4441 52.6928C39.4435 49.8171 50.976 47.898 64.0653 47.898C77.1546 47.898 88.6871 49.8171 96.6865 52.6928C96.7571 52.7182 96.8274 52.7436 96.8974 52.7691C101.329 62.633 103.259 73.4276 102.107 85.371C96.2285 89.7175 89.6449 93.0184 82.6453 95.129C81.0692 93.0141 79.6756 90.769 78.4797 88.4181C80.758 87.5666 82.9571 86.5167 85.0516 85.2803C84.5074 84.9115 83.9694 84.5004 83.4434 84.0711C77.3606 86.9317 70.7217 88.4148 63.9999 88.4148C57.2781 88.4148 50.6391 86.9317 44.5564 84.0711C44.0364 84.4701 43.4983 84.8812 42.9482 85.2803C45.0386 86.5147 47.2337 87.5626 49.5079 88.412C48.3105 90.7641 46.9171 93.011 45.3423 95.129C38.3487 93.0099 31.7702 89.7074 25.8928 85.3649C24.8722 74.6561 26.1486 63.8316 31.0875 52.8225Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M91.7153 35.9559C83.5869 34.0732 74.0963 33.0245 64.0655 33.0245C54.0417 33.0245 44.5578 34.0717 36.4337 35.9517L34.5082 31.5462L33.7378 30.0951L42.091 32.6834L45.3209 27.4232L51.6695 31.5462L57.2383 25.3775L64.0754 31.5461L70.9125 25.3775L76.4814 31.5462L82.8299 27.4232L86.0598 32.6834L94.413 30.0951L93.6427 31.5462L91.7153 35.9559Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M28.2379 51.5926L28.061 52.0796C25.6445 58.7306 23.2709 67.1923 22.2612 76.6341L15.8644 70.7037L24.8153 62.1664L13.9315 65.6056L11.2566 54.7972L28.2379 51.5926Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M66.1612 38.3809C65.463 41.5612 68.1966 44.546 71.5063 44.0113L79.182 42.7713C80.3905 45.0367 82.5567 46.8286 85.1969 47.6788C87.8186 48.523 90.6009 48.3404 92.8942 47.228L97.2159 51.4895C101.421 61.158 103.231 71.7177 102.107 83.371C96.2285 87.7175 89.6449 91.0184 82.6453 93.129C81.0692 91.0141 79.6756 88.769 78.4797 86.4181C80.758 85.5666 82.9571 84.5167 85.0516 83.2803C84.5074 82.9115 83.9694 82.5003 83.4434 82.0711C77.3606 84.9317 70.7217 86.4148 63.9999 86.4148C57.2781 86.4148 50.6391 84.9317 44.5564 82.0711C44.0364 82.4701 43.4983 82.8812 42.9482 83.2803C45.0386 84.5147 47.2337 85.5626 49.5079 86.412C48.3105 88.7641 46.9171 91.011 45.3423 93.129C38.3487 91.0099 31.7702 87.7074 25.8928 83.3649C24.5324 69.0906 27.2531 54.6108 37.2892 39.7621C42.3446 37.4496 47.6796 35.8054 53.1596 34.871C53.9087 36.2109 54.5868 37.5892 55.191 39.0003C58.8253 38.4527 62.498 38.2462 66.1612 38.3809Z" fill="white"/>\n<ellipse cx="87.913" cy="39.2441" rx="7.15796" ry="6.16125" transform="rotate(17.8491 87.913 39.2441)" fill="white"/>\n<path d="M72.4867 27.4741C72.955 26.0197 74.8153 25.6064 75.8554 26.7256L84.1221 35.6207C84.5937 36.1282 84.7691 36.8436 84.5857 37.5117L84.4517 38.0001C84.2443 38.7553 83.6152 39.32 82.842 39.445L71.0757 41.3459C69.601 41.5841 68.3951 40.1804 68.853 38.7585L72.4867 27.4741Z" fill="white"/>\n<path d="M107.308 38.69C107.776 37.235 106.505 35.8135 105.007 36.1168L92.9976 38.548C92.2777 38.6937 91.6956 39.2223 91.4814 39.9248L91.3378 40.3956C91.1208 41.1073 91.3168 41.8807 91.8466 42.4031L100.361 50.7993C101.422 51.8452 103.213 51.4062 103.669 49.9883L107.308 38.69Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M44.98 66.7481C44.9649 66.9593 44.9572 67.1728 44.9572 67.3883C44.9572 71.6847 48.1365 75.177 51.9848 75.177C55.9068 75.177 58.9388 71.6847 59.0063 67.3883C59.0398 65.26 58.2825 63.3215 57.03 61.907C56.8499 62.0086 56.6686 62.1095 56.4862 62.2095C52.5771 64.3544 48.6349 65.8727 44.98 66.7481Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M84.8723 66.7481C84.8875 66.9593 84.8952 67.1728 84.8952 67.3883C84.8952 71.6847 81.7158 75.177 77.8675 75.177C73.9455 75.177 70.9135 71.6847 70.846 67.3883C70.8126 65.26 71.5698 63.3215 72.8224 61.907C73.0025 62.0086 73.1837 62.1095 73.3661 62.2095C77.2752 64.3544 81.2174 65.8727 84.8723 66.7481Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M24.1921 65.3792L14.9286 90.5461C16.741 92.1054 25.4469 95.4932 31.4179 95.5954L31.5514 92.2069C29.0363 90.8112 26.6098 89.2517 24.2883 87.5364L23.3193 86.8204L23.2049 85.621C22.568 78.9378 22.7936 72.1907 24.1921 65.3792ZM96.4488 92.2133L96.5821 95.5954C102.553 95.4932 111.259 92.1054 113.071 90.5461L103.798 65.3533C105.112 71.7545 105.482 78.5024 104.795 85.63L104.679 86.827L103.712 87.5419C101.391 89.2581 98.9645 90.818 96.4488 92.2133Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M63.9308 48.627C63.9542 48.6243 63.9772 48.6214 64 48.6184C64.0228 48.6214 64.0459 48.6243 64.0692 48.627C66.2384 48.6225 69.4021 48.5085 72.3271 47.4704C69.6497 47.3591 66.8635 47.3001 64 47.3001C63.8739 47.3001 63.748 47.3002 63.6222 47.3004L63.7748 48.6265C63.7502 48.6264 63.7256 48.6263 63.7009 48.6261L63.5587 47.3006C60.8501 47.3063 58.2126 47.3648 55.673 47.4704C58.4962 48.4724 61.5418 48.6134 63.7009 48.6261L64.0014 51.4272L63.9065 51.4274L63.903 51.427C61.7972 51.4219 58.4988 51.3221 55.2857 50.2943C53.6235 49.7627 51.9251 48.9615 50.4122 47.7654C45.1831 48.1375 40.5152 48.7169 36.6906 49.4446C34.988 49.7685 33.4855 50.1159 32.1946 50.4763C26.3412 62.295 24.7998 73.8963 25.8928 85.3649C31.7702 89.7074 38.3487 93.0099 45.3423 95.129C46.9171 93.011 48.3105 90.7641 49.5079 88.412C47.2337 87.5626 45.0386 86.5147 42.9482 85.2803C43.4983 84.8812 44.0364 84.4701 44.5564 84.0711C50.6391 86.9317 57.2781 88.4148 63.9999 88.4148C70.7217 88.4148 77.3606 86.9317 83.4434 84.0711C83.9694 84.5003 84.5074 84.9115 85.0516 85.2803C82.9571 86.5167 80.758 87.5666 78.4797 88.4181C79.6756 90.769 81.0692 93.0141 82.6453 95.129C89.6449 93.0184 96.2285 89.7175 102.107 85.371C103.348 72.4966 101.009 60.957 95.8156 50.4792C94.5225 50.1177 93.0164 49.7694 91.3094 49.4446C87.4848 48.7169 82.8169 48.1375 77.5878 47.7654C76.0749 48.9615 74.3765 49.7627 72.7144 50.2943C69.5012 51.3221 66.2027 51.4219 64.0969 51.427L63.7748 48.6265C63.8273 48.6268 63.8794 48.6269 63.9308 48.627ZM80.0011 45.2453C85.4834 45.7103 90.3035 46.407 94.1178 47.27L94.0326 47.1189C94.2884 46.4524 94.4215 45.7686 94.4215 45.0716C94.4215 41.5124 90.953 38.2955 85.3662 35.9914C83.8685 38.0958 82.4101 40.5228 81.271 43.0404C80.9041 43.8512 80.4765 44.5837 80.0011 45.2453ZM82.6454 34.9959C81.2107 37.0805 79.8292 39.4347 78.72 41.8861C78.1539 43.1372 77.4 44.1567 76.5227 44.9874C72.5892 44.7362 68.3781 44.6001 64 44.6001C63.7701 44.6001 63.5407 44.6005 63.3117 44.6012L63.0002 41.8934C63.3198 41.8894 63.6524 41.8861 64 41.8861C64.4456 41.8861 64.8661 41.8916 65.2666 41.8968L65.2684 41.8968C67.5692 41.9267 69.2102 41.948 71.1458 40.8796C73.4168 39.626 74.6639 36.5113 75.3855 33.2607C78.0055 33.6964 80.4455 34.2833 82.6454 34.9959ZM72.6047 32.8638C72.5646 33.0376 72.5229 33.2106 72.4795 33.3825C72.1407 34.7235 71.7221 35.8881 71.2214 36.7931C70.717 37.7048 70.2186 38.1931 69.7927 38.4282C68.5839 39.0955 67.654 39.1275 65.3047 39.097L65.3011 39.097L65.2961 39.0969L65.2958 39.0969C64.8992 39.0918 64.4636 39.0861 64 39.0861C63.5358 39.0861 63.0997 39.0918 62.7026 39.0969L62.7024 39.0969L62.6955 39.097L62.6786 39.0972C60.3416 39.1274 59.4133 39.0939 58.2073 38.4282C57.7814 38.1931 57.2831 37.7048 56.7786 36.7931C56.2779 35.8881 55.8594 34.7235 55.5206 33.3825C55.4851 33.2421 55.4508 33.101 55.4176 32.9593C58.2509 32.585 61.2648 32.3833 64.3901 32.3833C67.2383 32.3833 69.9939 32.5508 72.6047 32.8638ZM42.8137 36.246C37.5799 38.5297 34.3588 41.6417 34.3588 45.0716C34.3588 45.4613 34.4004 45.847 34.4818 46.2278C34.2798 46.575 34.0816 46.922 33.8872 47.2688C37.7008 46.4064 42.5191 45.7101 47.9989 45.2453C47.5236 44.5837 47.0959 43.8512 46.729 43.0404C45.6356 40.6237 44.2479 38.2905 42.8137 36.246ZM51.4773 44.9874C55.1914 44.7502 59.153 44.6156 63.2691 44.6014L62.9786 41.8936C62.9858 41.8935 62.993 41.8935 63.0002 41.8934L62.6786 39.0972L62.9786 41.8936C62.8955 41.8947 62.8134 41.8957 62.7321 41.8968L62.7316 41.8968C60.4308 41.9266 58.7898 41.9479 56.8542 40.8796C54.6135 39.6427 53.3696 36.594 52.6436 33.3906C50.056 33.8557 47.6544 34.4698 45.4994 35.2074C46.8821 37.2392 48.2082 39.5173 49.28 41.8861C49.8461 43.1372 50.6001 44.1567 51.4773 44.9874ZM64.0969 51.427L64.0014 51.4272L64.0936 51.4274L64.0969 51.427Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M64 48.6184C63.9772 48.6214 63.9542 48.6243 63.9308 48.627C59.8218 48.6184 52.1446 48.2171 49.28 41.8861C45.9667 34.5633 40.2238 28.1083 37.8885 27.1138C37.8885 27.1138 40.739 25.2677 44.5258 24.8185C48.3126 24.3692 51.5643 25.2369 51.5643 25.2369C51.5809 25.4279 51.5982 25.6321 51.6164 25.8479C51.9686 30.0254 52.6901 38.5811 56.8542 40.8795C58.7898 41.9479 60.4308 41.9266 62.7316 41.8968C63.1327 41.8916 63.5538 41.8861 64 41.8861V48.6184ZM64 48.6184C64.0228 48.6214 64.0459 48.6243 64.0692 48.627C68.1783 48.6184 75.8555 48.2171 78.72 41.8861C82.0333 34.5633 87.7762 28.1083 90.1115 27.1138C90.1115 27.1138 87.261 25.2677 83.4742 24.8185C79.6875 24.3692 76.4357 25.2369 76.4357 25.2369C76.4191 25.4279 76.4019 25.6321 76.3837 25.8479C76.0314 30.0254 75.3099 38.5811 71.1458 40.8796C69.2102 41.9479 67.5692 41.9266 65.2684 41.8968C64.8673 41.8916 64.4462 41.8861 64 41.8861V48.6184Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M44.0151 67.3883C44.0151 71.6847 47.1945 75.177 51.0428 75.177C54.9648 75.177 57.9968 71.6847 58.0643 67.3883C58.1318 63.0919 54.9771 59.5688 51.0305 59.5688C47.084 59.5688 44.0151 63.0919 44.0151 67.3883Z" fill="#4F5660"/>\n<path d="M69.9469 67.3883C69.9469 71.6847 73.1139 75.177 76.9684 75.177C80.8904 75.177 83.9163 71.6847 83.9838 67.3883C84.0513 63.0919 80.9211 59.5688 76.9684 59.5688C73.0157 59.5688 69.9469 63.0919 69.9469 67.3883Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M45.9407 56.3729C41.8539 58.0595 39 62.365 39 67.3695C39 72.3808 41.9252 76.6911 46 78.3729C43.3405 75.5874 41.6767 71.6778 41.6767 67.3695C41.6767 63.0648 43.3017 59.158 45.9407 56.3729Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M82.0593 56.3729C86.1461 58.0595 89 62.365 89 67.3695C89 72.3808 86.0748 76.6911 82 78.3729C84.6595 75.5874 86.3233 71.6778 86.3233 67.3695C86.3233 63.0648 84.6983 59.158 82.0593 56.3729Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M55.191 39.0003C58.1109 38.5603 61.0554 38.3406 64 38.341C66.9446 38.3406 69.8891 38.5603 72.809 39.0003C73.4132 37.5892 74.0913 36.2109 74.8404 34.871C80.3204 35.8054 85.6554 37.4496 90.7108 39.7621C100.747 54.6108 103.468 69.0906 102.107 83.3649C96.2298 87.7074 89.6513 91.0099 82.6577 93.129C81.0829 91.011 79.6895 88.7641 78.4921 86.412C80.7663 85.5626 82.9614 84.5147 85.0518 83.2803C85.6892 82.9447 86.2912 82.5912 86.8596 82.2223L90.5995 85.3865L89.1774 80.4833C90.2445 79.5592 91.1536 78.5757 91.925 77.5622L96.0373 78.8162L93.4234 75.2676C94.0284 74.1773 94.499 73.0781 94.8585 72.0034L97.9438 71.8772L95.4345 69.905C95.6394 68.9582 95.763 68.0513 95.8235 67.2106L98.2647 66.4593L95.8534 65.2514C95.832 64.7828 95.7899 64.3526 95.7322 63.9683C95.676 64.3946 95.6097 64.8137 95.5338 65.2253L92.9574 66.0183L95.1123 67.0977C94.8869 67.9417 94.6218 68.7511 94.324 69.5259L91.0797 69.6586L93.4512 71.5225C92.9504 72.5406 92.3958 73.4881 91.8079 74.3652L88.1908 73.2622L90.4017 76.2637C89.6083 77.2365 88.7867 78.0965 87.9784 78.8442L84.3816 75.801L85.786 80.6426C84.9118 81.2722 84.1089 81.7483 83.4436 82.0711C77.3609 84.9317 70.7219 86.4148 64.0001 86.4148H64H63.9999C57.2781 86.4148 50.6391 84.9317 44.5564 82.0711C43.8911 81.7483 43.0882 81.2722 42.2141 80.6426L43.6184 75.801L40.0216 78.8442C39.2133 78.0965 38.3917 77.2365 37.5983 76.2637L39.8092 73.2622L36.1921 74.3652C35.6042 73.4881 35.0496 72.5406 34.5488 71.5225L36.9203 69.6586L33.676 69.5259C33.3782 68.7511 33.1131 67.9417 32.8877 67.0977L35.0426 66.0183L32.4662 65.2253C32.3903 64.8137 32.324 64.3946 32.2678 63.9683C32.2101 64.3526 32.168 64.7828 32.1466 65.2514L29.7353 66.4593L32.1765 67.2106C32.237 68.0513 32.3606 68.9582 32.5655 69.905L30.0562 71.8772L33.1415 72.0034C33.501 73.0781 33.9716 74.1773 34.5766 75.2676L31.9627 78.8162L36.075 77.5622C36.8464 78.5757 37.7555 79.5592 38.8226 80.4833L37.4005 85.3865L41.1404 82.2223C41.7088 82.5912 42.3108 82.9447 42.9482 83.2803C45.0386 84.5147 47.2337 85.5626 49.5079 86.412C48.3105 88.7641 46.9171 91.011 45.3423 93.129C38.3487 91.0099 31.7702 87.7074 25.8928 83.3649C24.5324 69.0906 27.2531 54.6108 37.2892 39.7621C42.3446 37.4496 47.6796 35.8054 53.1596 34.871C53.9087 36.2109 54.5868 37.5892 55.191 39.0003Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M44.9861 67.3883C44.9861 71.6847 48.1655 75.1771 52.0138 75.1771C55.9358 75.1771 58.9678 71.6847 59.0353 67.3883C59.0731 64.9854 58.1029 62.8244 56.5499 61.3863C55.3263 60.2532 53.6436 61.3862 51.9044 61.3862C50.1651 61.3862 48.6935 60.2532 47.4827 61.3863C45.9461 62.8244 44.9861 64.9854 44.9861 67.3883Z" fill="#4F5660"/>\n<path d="M70.9179 67.3883C70.9179 71.6847 74.085 75.177 77.9394 75.177C81.8614 75.177 84.8873 71.6847 84.9548 67.3883C85.0223 63.0919 81.8921 59.5688 77.9394 59.5688C73.9868 59.5688 70.9179 63.0919 70.9179 67.3883Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M72.4367 58.1346C71.0718 59.2363 70.1905 60.5583 69.8129 61.3886L67.5613 60.4791C68.0753 59.3488 69.1719 57.73 70.8432 56.381C72.5304 55.0192 74.8503 53.8978 77.7676 53.8978C80.68 53.8978 83.0524 55.0154 84.8056 56.3633C86.5464 57.7017 87.7338 59.3083 88.3125 60.4286L86.1098 61.4391C85.6759 60.5989 84.7038 59.2647 83.2571 58.1523C81.8228 57.0496 79.9798 56.2066 77.7676 56.2066C75.5602 56.2066 73.7857 57.0458 72.4367 58.1346Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M61.2754 61.73C53.0493 64.9226 45.584 63.088 42.7471 61.6848L43.8645 59.4256C46.161 60.5615 52.8879 62.2816 60.3635 59.3804L61.2754 61.73Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M63.4999 77.8814C69.2408 77.8814 73.8948 72.601 73.8948 66.0872C73.8948 59.5734 69.2408 54.293 63.4999 54.293C57.7589 54.293 53.105 59.5734 53.105 66.0872C53.105 72.601 57.7589 77.8814 63.4999 77.8814ZM63.3002 65.8875C65.8395 65.8875 67.898 63.5605 67.898 60.69C67.898 57.8195 65.8395 55.4926 63.3002 55.4926C60.761 55.4926 58.7025 57.8195 58.7025 60.69C58.7025 63.5605 60.761 65.8875 63.3002 65.8875Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M48.8558 67.3883C48.8558 71.6847 52.0351 75.177 55.8834 75.177C59.8054 75.177 62.8374 71.6847 62.9049 67.3883C62.9725 63.0919 59.8177 59.5688 55.8712 59.5688C51.9246 59.5688 48.8558 63.0919 48.8558 67.3883Z" fill="#4F5660"/>\n<path d="M36.3116 65.5985C36.3116 68.9115 38.7633 71.6045 41.7308 71.6045C44.7551 71.6045 47.0931 68.9115 47.1452 65.5985C47.1973 62.2855 44.7646 59.5688 41.7213 59.5688C38.6781 59.5688 36.3116 62.2855 36.3116 65.5985Z" fill="#4F5660"/>\n<path d="M80.854 65.5985C80.854 68.9115 83.3056 71.6045 86.2731 71.6045C89.2974 71.6045 91.6355 68.9115 91.6875 65.5985C91.7396 62.2855 89.3069 59.5688 86.2637 59.5688C83.2204 59.5688 80.854 62.2855 80.854 65.5985Z" fill="#4F5660"/>\n<path d="M65.1063 67.3883C65.1063 71.6847 68.2733 75.177 72.1278 75.177C76.0498 75.177 79.0756 71.6847 79.1432 67.3883C79.2107 63.0919 76.0805 59.5688 72.1278 59.5688C68.1751 59.5688 65.1063 63.0919 65.1063 67.3883Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M83.8544 61.969L84.8144 65.5516L72.5568 68.836L70.8604 65.4533L83.8544 61.969Z" fill="#4F5660"/>\n<path d="M83.8544 72.7767L84.8144 69.1941L71.3388 65.5833L70.4557 69.1865L83.8544 72.7767Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M78.0174 67.3729L70.8522 65.453L69.5374 65.8053L69.1174 67.3729L69.5374 68.9405L70.8522 69.2928L78.0174 67.3729Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M78.0174 67.3729L70.8522 65.453L69.5374 65.8053L69.1174 67.3729L69.5374 68.9405L70.8522 69.2928L78.0174 67.3729Z" fill="#4F5660"/>\n<path d="M44.1517 61.969L43.1918 65.5516L55.4494 68.836L57.1458 65.4533L44.1517 61.969Z" fill="#4F5660"/>\n<path d="M44.1517 72.7767L43.1918 69.1941L56.6673 65.5833L57.5505 69.1865L44.1517 72.7767Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M49.9887 67.3729L57.154 65.453L58.4687 65.8053L58.8888 67.3729L58.4687 68.9405L57.154 69.2928L49.9887 67.3729Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M49.9887 67.3729L57.154 65.453L58.4687 65.8053L58.8888 67.3729L58.4687 68.9405L57.154 69.2928L49.9887 67.3729Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M50.1096 58.2606C50.495 57.5967 51.4538 57.5967 51.8392 58.2606L54.0596 62.0852C54.201 62.3289 54.4387 62.5016 54.7142 62.5608L59.0378 63.4906C59.7883 63.652 60.0846 64.5639 59.5723 65.1356L56.6209 68.4292C56.4329 68.639 56.3421 68.9184 56.3709 69.1987L56.8227 73.598C56.9011 74.3617 56.1254 74.9252 55.4233 74.6147L51.3789 72.8256C51.1213 72.7116 50.8275 72.7116 50.5698 72.8256L46.5254 74.6147C45.8234 74.9252 45.0477 74.3617 45.1261 73.598L45.5779 69.1987C45.6067 68.9184 45.5159 68.639 45.3279 68.4292L42.3765 65.1356C41.8642 64.5639 42.1605 63.652 42.911 63.4906L47.2346 62.5608C47.5101 62.5016 47.7477 62.3289 47.8892 62.0852L50.1096 58.2606Z" fill="#4F5660"/>\n<path d="M76.1608 58.2606C76.5462 57.5967 77.505 57.5967 77.8905 58.2606L80.1108 62.0852C80.2523 62.3289 80.49 62.5016 80.7654 62.5608L85.089 63.4906C85.8395 63.652 86.1358 64.5639 85.6235 65.1356L82.6722 68.4292C82.4841 68.639 82.3934 68.9184 82.4221 69.1987L82.8739 73.598C82.9523 74.3617 82.1766 74.9252 81.4746 74.6147L77.4302 72.8256C77.1725 72.7116 76.8787 72.7116 76.6211 72.8256L72.5767 74.6147C71.8746 74.9252 71.0989 74.3617 71.1774 73.598L71.6291 69.1987C71.6579 68.9184 71.5671 68.639 71.3791 68.4292L68.4278 65.1356C67.9155 64.5639 68.2117 63.652 68.9623 63.4906L73.2859 62.5608C73.5613 62.5016 73.799 62.3289 73.9404 62.0852L76.1608 58.2606Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M63.5278 65.5464C62.837 65.6065 62.265 65.8151 62.0001 65.9524L60.7679 63.5759C61.3368 63.2809 62.2478 62.9706 63.2957 62.8794C64.3544 62.7873 65.6373 62.9127 66.8596 63.5957L65.5537 65.9326C64.9192 65.578 64.2077 65.4872 63.5278 65.5464Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M47.0859 60.4528C44.2427 60.3304 41.8707 62.6024 41.8707 65.4482V69.2964C41.8707 72.3972 44.6639 74.7503 47.7197 74.2238L59.267 72.2343C61.1858 71.9037 62.5878 70.2395 62.5878 68.2924V63.9941C62.5878 62.3875 61.3221 61.066 59.7169 60.9969L47.0859 60.4528ZM53.7037 62.3219C52.9654 62.2838 52.3361 62.8515 52.2981 63.5898C52.2601 64.328 52.8278 64.9573 53.566 64.9953L59.2988 65.2906C60.037 65.3286 60.6663 64.7609 60.7044 64.0227C60.7424 63.2844 60.1747 62.6551 59.4365 62.6171L53.7037 62.3219Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M80.9144 60.4528C83.7576 60.3304 86.1296 62.6024 86.1296 65.4482V69.2964C86.1296 72.3972 83.3364 74.7503 80.2806 74.2238L68.7333 72.2343C66.8145 71.9037 65.4125 70.2395 65.4125 68.2924V63.9941C65.4125 62.3875 66.6782 61.066 68.2834 60.9969L80.9144 60.4528ZM76.088 62.1886C75.3496 62.2239 74.7796 62.8511 74.8149 63.5895C74.8502 64.3279 75.4774 64.8978 76.2158 64.8625L81.9496 64.5884C82.688 64.5531 83.258 63.9259 83.2227 63.1875C83.1874 62.4491 82.5602 61.8791 81.8218 61.9144L76.088 62.1886Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M86.3331 68.579C86.1839 63.8509 81.6115 59.6767 76.9134 59.8249L76.8941 59.8255L76.8747 59.8255C72.7739 59.8255 68.2677 62.7605 68.2677 68.183C68.2677 72.621 71.5761 75.0281 74.9756 74.9215C78.4141 74.8025 80.9592 72.3541 80.8549 69.0488C80.79 66.9932 78.8987 65.2188 76.9134 65.2815C75.8541 65.3149 75.0744 65.6885 74.5677 66.2303C74.0609 66.7722 73.7333 67.5828 73.7675 68.6654C73.7848 69.2126 74.3837 69.795 75.1213 69.795C75.2595 69.795 75.4899 69.7264 75.6709 69.5681C75.8216 69.4364 75.9245 69.259 75.9158 68.9815C75.8944 68.3037 76.4265 67.7369 77.1044 67.7155C77.7822 67.6941 78.349 68.2262 78.3704 68.9041C78.4411 71.1427 76.4947 72.2509 75.1213 72.2509C73.3774 72.2509 71.3814 70.9137 71.3129 68.7428C71.2612 67.1072 71.7617 65.6352 72.7741 64.5528C73.7866 63.4702 75.217 62.8779 76.836 62.8268C80.2073 62.7204 83.2029 65.5906 83.3096 68.9713C83.4626 73.8199 79.6526 77.2182 75.0579 77.376L75.0545 77.3761C70.4196 77.5224 65.8118 74.1549 65.8118 68.183C65.8118 61.0673 71.7763 57.379 76.8554 57.3697C82.8635 57.1916 88.5947 62.3862 88.7877 68.5016C88.8091 69.1794 88.277 69.7462 87.5991 69.7676C86.9213 69.789 86.3545 69.2569 86.3331 68.579Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M40.6672 68.579C40.8164 63.8509 45.3888 59.6767 50.0868 59.8249L50.1062 59.8255L50.1256 59.8255C54.2263 59.8255 58.7326 62.7605 58.7326 68.183C58.7326 72.621 55.4242 75.0281 52.0247 74.9215C48.5861 74.8025 46.0411 72.3541 46.1454 69.0488C46.2102 66.9932 48.1015 65.2188 50.0868 65.2815C51.1462 65.3149 51.9259 65.6885 52.4326 66.2303C52.9394 66.7722 53.267 67.5828 53.2328 68.6654C53.2155 69.2126 52.6166 69.795 51.879 69.795C51.7408 69.795 51.5104 69.7264 51.3293 69.5681C51.1787 69.4364 51.0757 69.259 51.0845 68.9815C51.1059 68.3037 50.5737 67.7369 49.8959 67.7155C49.2181 67.6941 48.6512 68.2262 48.6299 68.9041C48.5592 71.1427 50.5056 72.2509 51.879 72.2509C53.6229 72.2509 55.6189 70.9137 55.6874 68.7428C55.739 67.1072 55.2385 65.6352 54.2262 64.5528C53.2137 63.4702 51.7832 62.8779 50.1643 62.8268C46.793 62.7204 43.7974 65.5906 43.6907 68.9713C43.5377 73.8199 47.3477 77.2182 51.9424 77.376L51.9458 77.3761C56.5807 77.5224 61.1885 74.1549 61.1885 68.183C61.1885 61.0673 55.224 57.379 50.1449 57.3697C44.1367 57.1916 38.4056 62.3862 38.2126 68.5016C38.1912 69.1794 38.7233 69.7462 39.4012 69.7676C40.079 69.789 40.6458 69.2569 40.6672 68.579Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M64 89.6598C61.0553 89.6603 58.1107 89.4405 55.1907 89.0005C54.5865 90.4117 53.9084 91.7901 53.1592 93.13C47.679 92.1956 42.3438 90.5513 37.2883 88.2387C27.2518 73.3895 24.5311 58.9092 25.8914 44.6344C31.769 40.2918 38.3478 36.9891 45.3417 34.87C46.9165 36.9881 48.31 39.2351 49.5074 41.5872C49.7627 42.0979 50.3134 43.2218 50.4747 43.6321C54.8434 42.2782 59.4022 41.5844 64.0001 41.5844C68.5978 41.5844 73.1566 42.2782 77.5253 43.6321C77.6865 43.2218 78.2373 42.0979 78.4926 41.5872C79.69 39.2351 81.0835 36.9881 82.6583 34.87C89.6522 36.9891 96.231 40.2918 102.109 44.6344C103.469 58.9092 100.748 73.3895 90.7117 88.2387C85.6562 90.5513 80.321 92.1956 74.8408 93.13C74.0916 91.7901 73.4135 90.4117 72.8093 89.0005C69.8893 89.4405 66.9447 89.6603 64 89.6598Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M64 38.3402C66.9447 38.3397 69.8893 38.5595 72.8093 38.9995C73.4135 37.5883 74.0916 36.2099 74.8408 34.87C80.321 35.8044 85.6562 37.4487 90.7117 39.7613C100.748 54.6105 103.469 69.0908 102.109 83.3656C96.231 87.7082 89.6522 91.0109 82.6583 93.13C81.0835 91.0119 79.69 88.7649 78.4926 86.4128C78.2374 85.9021 77.6866 84.7782 77.5253 84.3679C73.1566 85.7218 68.5978 86.4156 63.9999 86.4156C59.4023 86.4156 54.8434 85.7218 50.4747 84.3679C50.3135 84.7782 49.7627 85.9021 49.5074 86.4128C48.31 88.7649 46.9165 91.0119 45.3417 93.13C38.3478 91.0109 31.7691 87.7082 25.8914 83.3656C24.5311 69.0908 27.2518 54.6105 37.2883 39.7613C42.3438 37.4487 47.679 35.8044 53.1592 34.87C53.9084 36.2099 54.5865 37.5883 55.1907 38.9995C58.1107 38.5595 61.0553 38.3397 64 38.3402Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="129" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M44.0151 69.3883C44.0151 73.6847 47.1945 77.177 51.0428 77.177C54.9648 77.177 57.9968 73.6847 58.0643 69.3883C58.1318 65.0919 54.9771 61.5688 51.0305 61.5688C47.084 61.5688 44.0151 65.0919 44.0151 69.3883Z" fill="#4F5660"/>\n<path d="M56.9749 58.7113C56.9749 63.0077 60.1542 66.5 64.0025 66.5C67.9245 66.5 70.9565 63.0077 71.0241 58.7113C71.0916 54.4149 67.9368 50.8918 63.9903 50.8918C60.0437 50.8918 56.9749 54.4149 56.9749 58.7113Z" fill="#4F5660"/>\n<path d="M69.9469 69.3883C69.9469 73.6847 73.1139 77.177 76.9684 77.177C80.8904 77.177 83.9163 73.6847 83.9838 69.3883C84.0513 65.0919 80.9211 61.5688 76.9684 61.5688C73.0157 61.5688 69.9469 65.0919 69.9469 69.3883Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M47.1705 33.9283C46.338 34.5178 46.2556 34.9071 46.2556 35.0197C46.2556 35.1324 46.338 35.5217 47.1705 36.1112C47.9662 36.6746 49.2084 37.2393 50.8695 37.7368C54.1738 38.7265 58.8225 39.3589 64.0169 39.3589C69.2113 39.3589 73.86 38.7265 77.1643 37.7368C78.8254 37.2393 80.0677 36.6746 80.8634 36.1112C81.6958 35.5217 81.7782 35.1324 81.7782 35.0197C81.7782 34.9071 81.6958 34.5178 80.8634 33.9283C80.0677 33.3648 78.8254 32.8002 77.1643 32.3026C73.86 31.3129 69.2113 30.6805 64.0169 30.6805C58.8225 30.6805 54.1738 31.3129 50.8695 32.3026C49.2084 32.8002 47.9662 33.3648 47.1705 33.9283ZM50.0661 29.6204C53.6968 28.5329 58.6288 27.8805 64.0169 27.8805C69.405 27.8805 74.337 28.5329 77.9677 29.6204C79.7741 30.1614 81.338 30.8335 82.4815 31.6432C83.5883 32.427 84.5782 33.5476 84.5782 35.0197C84.5782 36.4919 83.5883 37.6125 82.4815 38.3962C81.338 39.206 79.7741 39.878 77.9677 40.4191C74.337 41.5066 69.405 42.1589 64.0169 42.1589C58.6288 42.1589 53.6968 41.5066 50.0661 40.4191C48.2597 39.878 46.6958 39.206 45.5523 38.3962C44.4455 37.6125 43.4556 36.4919 43.4556 35.0197C43.4556 33.5476 44.4455 32.427 45.5523 31.6432C46.6958 30.8335 48.2597 30.1614 50.0661 29.6204Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M42.4431 39.6702C42.907 40.1509 43.3903 40.5413 43.8186 40.8445C45.3346 41.9181 47.243 42.7052 49.2053 43.293C53.1858 44.4852 58.4213 45.1589 64.0169 45.1589C69.6125 45.1589 74.848 44.4852 78.8285 43.293C80.7909 42.7052 82.6992 41.9181 84.2153 40.8445C84.6411 40.543 85.1214 40.1553 85.583 39.6782C86.1569 39.883 86.7279 40.0961 87.2959 40.3174C88.3263 40.7171 89.3504 41.1463 90.3632 41.6059C90.469 41.6536 90.5747 41.7017 90.6803 41.75L90.6812 41.7513L90.6941 41.7573L90.6962 41.7732C99.3855 54.488 103.702 68.8274 102.107 85.371C96.2285 89.7175 89.6449 93.0185 82.6453 95.129C81.0692 93.0141 79.6756 90.769 78.4797 88.4181C80.758 87.5666 82.9571 86.5167 85.0516 85.2803C84.5074 84.9115 83.9694 84.5003 83.4434 84.0711C77.3606 86.9317 70.7217 88.4148 63.9999 88.4148C57.2781 88.4148 50.6391 86.9317 44.5564 84.0711C44.0364 84.4701 43.4983 84.8812 42.9482 85.2803C45.0386 86.5147 47.2337 87.5626 49.5079 88.412C48.3105 90.7641 46.9171 93.011 45.3423 95.129C38.3487 93.0099 31.7702 89.7074 25.8928 85.3649C24.5324 71.0906 27.2531 56.6108 37.2892 41.7621C37.5794 41.6294 37.8705 41.4988 38.1626 41.3705C39.1685 40.9261 40.1847 40.5113 41.2062 40.1251C41.617 39.9692 42.0293 39.8176 42.4431 39.6702Z" fill="white"/>\n<ellipse cx="64" cy="22.4865" rx="14.228" ry="4.76272" fill="white"/>\n<ellipse cx="64" cy="31.4004" rx="15.1217" ry="5.06189" fill="white"/>\n<rect x="49.772" y="22.4865" width="28.4559" height="8.15968" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M62.471 89.0822C60.7817 88.9896 59.2357 88.7419 57.896 88.4217L55.0439 87.7399V92.1138C55.0439 97.0601 59.0537 101.07 64 101.07C68.9463 101.07 72.9561 97.0601 72.9561 92.1138V87.6557L70.0827 88.3715C68.4975 88.7664 66.9492 88.9865 65.471 89.0751C65.471 89.0773 65.471 89.0795 65.471 89.0817V93.8523C65.471 94.6808 64.7995 95.3523 63.971 95.3523C63.1426 95.3523 62.471 94.6808 62.471 93.8523V89.0822Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M90.6803 39.75C85.63 37.4379 80.2985 35.7976 74.822 34.871C74.0726 36.2107 73.3945 37.5891 72.7906 39.0003C66.957 38.1213 61.0246 38.1213 55.191 39.0003C54.5868 37.5892 53.9087 36.2109 53.1596 34.871C47.6796 35.8054 42.3446 37.4496 37.2892 39.7621C27.2531 54.6108 24.5324 69.0906 25.8928 83.3649C31.7702 87.7074 38.3487 91.0099 45.3423 93.129C46.8685 93.5905 49.3614 94.1113 52.6542 94.4913C52.5162 93.7772 52.4439 93.0397 52.4439 92.2853L52.6171 87.4776C51.5761 87.1678 50.5376 86.8038 49.508 86.3798C47.2338 85.5304 45.0387 84.4824 42.9483 83.248C43.4984 82.849 44.0365 82.4379 44.5565 82.0389C50.6392 84.8994 57.2782 86.3826 64 86.3826C70.7218 86.3826 77.3607 84.8994 83.4435 82.0389C83.9695 82.4681 84.5076 82.8793 85.0517 83.248C82.9572 84.4844 80.7581 85.5344 78.4798 86.3859C77.6945 86.7041 76.7075 87.0428 75.5561 87.3672V92.2853C75.5561 92.9535 75.4994 93.6083 75.3905 94.2454C77.7206 93.9637 80.1431 93.5965 82.6453 93.129C89.6449 91.0184 96.2285 87.7175 102.107 83.371C103.703 66.8174 99.3803 52.4705 90.6803 39.75ZM55.0439 92.2853V88.1043C57.5649 88.6596 60.0717 88.9246 62.4742 88.9836C62.4721 89.0161 62.471 89.0487 62.471 89.0817V93.8523C62.471 94.3304 62.6947 94.7563 63.0431 95.031C63.0407 95.031 63.0382 95.031 63.0357 95.031C60.2264 95.0435 57.6646 94.9364 55.3891 94.7561C55.1643 93.9713 55.0439 93.1424 55.0439 92.2853ZM64.9313 95.0047C67.3534 94.9486 69.9403 94.8028 72.6697 94.5406C72.8566 93.8201 72.9561 93.0643 72.9561 92.2853V88.0056C70.7672 88.4693 68.2187 88.8339 65.4657 88.9541C65.4692 88.9962 65.471 89.0387 65.471 89.0817V93.8523C65.471 94.3155 65.2611 94.7296 64.9313 95.0047Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M72.7926 38.9956C82.5829 40.3682 91.3634 43.4712 93.5516 44.2824C100.311 55.8577 103.516 68.754 102.107 83.3709C96.2285 87.7175 89.6449 91.0184 82.6453 93.129C81.0692 91.0141 79.6756 88.769 78.4797 86.4181C80.758 85.5666 82.9571 84.5167 85.0516 83.2803C84.5074 82.9115 83.9694 82.5003 83.4434 82.0711C77.3606 84.9317 70.7217 86.4148 63.9999 86.4148C57.2781 86.4148 50.6391 84.9317 44.5564 82.0711C44.0364 82.4701 43.4983 82.8812 42.9482 83.2803C45.0386 84.5147 47.2337 85.5626 49.5079 86.412C48.3105 88.764 46.9171 91.011 45.3423 93.129C38.3487 91.0099 31.7702 87.7074 25.8928 83.3649C24.6708 70.5424 26.7419 57.5541 34.4505 44.2816C36.6411 43.4696 45.41 40.3714 55.1901 38.998C55.1904 38.9988 55.1907 38.9996 55.191 39.0003C55.274 38.9878 55.3571 38.9755 55.4401 38.9633C57.5606 38.6725 59.7262 38.4641 61.8805 38.3788C63.3542 38.3261 64.8293 38.3286 66.3028 38.3863C68.2937 38.4716 70.2927 38.6609 72.2556 38.9222C72.434 38.9474 72.6123 38.9735 72.7906 39.0003C72.7912 38.9988 72.7919 38.9972 72.7926 38.9956Z" fill="white"/>\n<path d="M84.1043 31.2858L93.7146 44.5533L34.3851 44.3457L43.2537 31.2858L48.3285 37.6094L56.5347 28.8145L64.0211 37.6094L71.113 28.8145L78.8351 37.6094L84.1043 31.2858Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M55.191 39.0003C58.1109 38.5603 61.0554 38.3406 64 38.341C66.9446 38.3406 69.8891 38.5603 72.809 39.0003C73.4132 37.5892 74.0913 36.2109 74.8404 34.871C80.3204 35.8054 85.6554 37.4496 90.7108 39.7621C100.747 54.6108 103.468 69.0906 102.107 83.3649C96.2298 87.7074 89.6513 91.0099 82.6577 93.129C81.0829 91.011 79.6895 88.7641 78.4921 86.412C79.876 85.8952 81.2305 85.3048 82.5501 84.6436L86.2966 89.4705L89.7158 79.767C89.7185 79.7641 89.7213 79.7612 89.724 79.7583L87.8788 78.9971C86.4764 80.2703 84.3377 81.5769 83.4436 82.0711C77.3609 84.9317 70.7219 86.4148 64.0001 86.4148H64H63.9999C57.2781 86.4148 50.6391 84.9317 44.5564 82.0711C43.6623 81.5769 41.5236 80.2703 40.1212 78.9971L38.276 79.7583L38.2863 79.7692L41.7047 89.4705L45.4509 84.6441C46.7701 85.305 48.1243 85.8953 49.5079 86.412C48.3105 88.7641 46.9171 91.011 45.3423 93.129C38.3487 91.0099 31.7702 87.7074 25.8928 83.3649C24.5324 69.0906 27.2531 54.6108 37.2892 39.7621C42.3446 37.4496 47.6796 35.8054 53.1596 34.871C53.9087 36.2109 54.5868 37.5892 55.191 39.0003Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M25.5667 57.6427C23.549 52.1495 20.7262 45.6569 17.5776 41.2488C13.1863 35.1009 15.6141 46.6712 17.3783 55.0794C18.1117 58.5746 18.7305 61.5234 18.6971 62.4259C18.3943 70.6105 20.0493 73.4868 22.9277 72.6527C23.4784 67.1931 24.4496 62.1232 25.5667 57.6427ZM21.5882 63.7793C21.0839 64.2388 20.6972 63.9402 20.7481 62.0552C20.767 61.3564 20.7846 60.7083 20.7714 60.2681C20.7379 59.1473 20.4732 57.5095 20.1861 55.7327C20.1221 55.3365 20.057 54.9334 19.993 54.5276C20.3142 52.5062 22.5851 57.2103 22.7229 58.4247C22.8606 59.639 22.2794 63.1494 21.5882 63.7793Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M102.329 57.6136C104.378 52.132 107.239 45.656 110.413 41.2661C114.839 35.1437 112.345 46.6997 110.532 55.0976C109.778 58.5885 109.142 61.5336 109.171 62.4364C109.426 70.6225 107.754 73.4892 104.881 72.6386C104.362 67.1759 103.42 62.1004 102.329 57.6136ZM106.272 63.773C106.773 64.2354 107.162 63.939 107.122 62.0538C107.107 61.3549 107.093 60.7067 107.109 60.2666C107.149 59.146 107.423 57.5097 107.72 55.7347C107.787 55.3389 107.854 54.9361 107.92 54.5307C107.611 52.5075 105.313 57.1984 105.168 58.4119C105.023 59.6254 105.584 63.1391 106.272 63.773Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M55.191 39.0003C58.1109 38.5603 61.0554 38.3406 64 38.341C66.9446 38.3406 69.8891 38.5603 72.809 39.0003C73.4132 37.5892 74.0913 36.2109 74.8404 34.871C80.3204 35.8054 85.6554 37.4496 90.7108 39.7621C100.747 54.6108 103.468 69.0906 102.107 83.3649C96.2298 87.7074 89.6513 91.0099 82.6577 93.129C81.0829 91.011 79.6895 88.7641 78.4921 86.412C79.876 85.8952 81.2305 85.3048 82.5501 84.6436L86.2966 89.4705L89.7158 79.767C89.7185 79.7641 89.7213 79.7612 89.724 79.7583L87.8788 78.9971C86.4764 80.2703 84.3377 81.5769 83.4436 82.0711C77.3609 84.9317 70.7219 86.4148 64.0001 86.4148H64H63.9999C57.2781 86.4148 50.6391 84.9317 44.5564 82.0711C43.6623 81.5769 41.5236 80.2703 40.1212 78.9971L38.276 79.7583L38.2863 79.7692L41.7047 89.4705L45.4509 84.6441C46.7701 85.305 48.1243 85.8953 49.5079 86.412C48.3105 88.7641 46.9171 91.011 45.3423 93.129C38.3487 91.0099 31.7702 87.7074 25.8928 83.3649C24.5324 69.0906 27.2531 54.6108 37.2892 39.7621C42.3446 37.4496 47.6796 35.8054 53.1596 34.871C53.9087 36.2109 54.5868 37.5892 55.191 39.0003Z" fill="white"/>\n</svg>\n'
    }, function(t, e) {
        t.exports = '<svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M44.0436 66.8883C44.0436 71.1847 47.223 74.6771 51.0713 74.6771C54.9933 74.6771 58.0253 71.1847 58.0928 66.8883C58.1603 62.5919 55.0056 59.0689 51.059 59.0689C47.1125 59.0689 44.0436 62.5919 44.0436 66.8883Z" fill="#4F5660"/>\n<path d="M83.8829 61.4691L84.8429 65.0517L72.5853 68.3361L70.8889 64.9534L83.8829 61.4691Z" fill="#4F5660"/>\n<path d="M83.8829 72.2769L84.8429 68.6942L71.3673 65.0835L70.4841 68.6867L83.8829 72.2769Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M78.0459 66.873L70.8807 64.9531L69.5659 65.3054L69.1459 66.873L69.5659 68.4406L70.8807 68.7929L78.0459 66.873Z" fill="#4F5660"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M78.0459 66.873L70.8807 64.9531L69.5659 65.3054L69.1459 66.873L69.5659 68.4406L70.8807 68.7929L78.0459 66.873Z" fill="#4F5660"/>\n</svg>\n'
    }, function(t, e, o) {
        var map = {
            "./8-bit-shades-clip-path.svg": 533,
            "./angry-brows-clip-path.svg": 534,
            "./angry-clip-path.svg": 535,
            "./annoyed-clip-path.svg": 536,
            "./base-eyes-clip-path.svg": 537,
            "./cat-eyes-clip-path.svg": 538,
            "./chubby-clip-path.svg": 539,
            "./crazy-eyes-clip-path.svg": 540,
            "./cute-clip-path.svg": 541,
            "./cute-downwards-clip-path.svg": 542,
            "./dead-clip-path.svg": 543,
            "./evil-eyes-clip-path.svg": 544,
            "./female-lashes-clip-path.svg": 545,
            "./glasses-1-clip-path.svg": 546,
            "./glasses-2-clip-path.svg": 547,
            "./happy-clip-path.svg": 548,
            "./heart-eyes-clip-path.svg": 549,
            "./line-eyes-clip-path.svg": 550,
            "./line-eyes-happy-clip-path.svg": 551,
            "./mono-brow-clip-path.svg": 552,
            "./monocle-clip-path.svg": 553,
            "./sad-clip-path.svg": 554,
            "./scared-clip-path.svg": 555,
            "./sceptical-clip-path.svg": 556,
            "./single-eye-clip-path.svg": 557,
            "./spider-eyes-clip-path.svg": 558,
            "./squinting-clip-path.svg": 559,
            "./star-eyes-clip-path.svg": 560,
            "./sunglasses-clip-path.svg": 561,
            "./swirly-eyes-clip-path.svg": 562,
            "./third-eye-clip-path.svg": 563,
            "./wink-clip-path.svg": 564
        };

        function l(t) {
            var e = n(t);
            return o(e)
        }

        function n(t) {
            if (!o.o(map, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return map[t]
        }
        l.keys = function() {
            return Object.keys(map)
        }, l.resolve = n, t.exports = l, l.id = 782
    }, function(t, e, o) {
        var map = {
            "./8-bit-shades-clip-path.svg": 565,
            "./angry-brows-clip-path.svg": 566,
            "./angry-clip-path.svg": 567,
            "./annoyed-clip-path.svg": 568,
            "./base-eyes-clip-path.svg": 569,
            "./cat-eyes-clip-path.svg": 570,
            "./chubby-clip-path.svg": 571,
            "./crazy-eyes-clip-path.svg": 572,
            "./cute-clip-path.svg": 573,
            "./cute-downwards-clip-path.svg": 574,
            "./dead-clip-path.svg": 575,
            "./evil-eyes-clip-path.svg": 576,
            "./female-lashes-clip-path.svg": 577,
            "./glasses-1-clip-path.svg": 578,
            "./glasses-2-clip-path.svg": 579,
            "./happy-clip-path.svg": 580,
            "./heart-eyes-clip-path.svg": 581,
            "./line-eyes-clip-path.svg": 582,
            "./line-eyes-happy-clip-path.svg": 583,
            "./mono-brow-clip-path.svg": 584,
            "./monocle-clip-path.svg": 585,
            "./sad-clip-path.svg": 586,
            "./scared-clip-path.svg": 587,
            "./sceptical-clip-path.svg": 588,
            "./single-eye-clip-path.svg": 589,
            "./spider-eyes-clip-path.svg": 590,
            "./squinting-clip-path.svg": 591,
            "./star-eyes-clip-path.svg": 592,
            "./sunglasses-clip-path.svg": 593,
            "./swirly-eyes-clip-path.svg": 594,
            "./third-eye-clip-path.svg": 595,
            "./wink-clip-path.svg": 596
        };

        function l(t) {
            var e = n(t);
            return o(e)
        }

        function n(t) {
            if (!o.o(map, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return map[t]
        }
        l.keys = function() {
            return Object.keys(map)
        }, l.resolve = n, t.exports = l, l.id = 783
    }, function(t, e, o) {
        "use strict";
        o(597)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-b559ba66]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-b559ba66]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-b559ba66]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-b559ba66]{--svg-custom-transition:all .3s}.avatar-wrapper[data-v-b559ba66]{display:flex;border-radius:50%;overflow:hidden;will-change:transform}.avatar[data-v-b559ba66],.avatar-wrapper[data-v-b559ba66]{width:128px;height:128px;position:relative}.svg-wrapper[data-v-b559ba66]{position:absolute;left:0;top:0}.mask[data-v-b559ba66]{position:absolute;z-index:5;left:-2px;top:-2px;--svg-custom-color:var(--color-white)}.custom-background-upload[data-v-b559ba66],.custom-shape-upload[data-v-b559ba66]{position:absolute;left:0;top:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%}.custom-background-upload img[data-v-b559ba66],.custom-shape-upload img[data-v-b559ba66]{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.custom-background-upload[data-v-b559ba66]{z-index:-1}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(598)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-f9077e76]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-f9077e76]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-f9077e76]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-f9077e76]{--svg-custom-transition:all .3s}#avatarGif[data-v-f9077e76]{overflow:hidden}.avatar-wrapper[data-v-f9077e76]{display:flex;border-radius:50%;overflow:hidden;will-change:transform}.avatar[data-v-f9077e76],.avatar-wrapper[data-v-f9077e76]{width:128px;height:128px;position:relative}.svg-wrapper[data-v-f9077e76]{position:absolute;left:0;top:0;width:100%;height:100%}.mask[data-v-f9077e76]{position:absolute;z-index:5;left:-2px;top:-2px;--svg-custom-color:var(--color-white)}.body-animation[data-v-f9077e76]{position:relative;width:128px;height:128px}.lower-effect-animation[data-v-f9077e76],.upper-effect-animation[data-v-f9077e76]{position:absolute;width:100%;height:100%;top:0;left:0;z-index:10}.lower-effect-animation[data-v-f9077e76]{z-index:auto}.custom-background-upload[data-v-f9077e76],.custom-shape-upload[data-v-f9077e76]{position:absolute;left:0;top:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%}.custom-background-upload img[data-v-f9077e76],.custom-shape-upload img[data-v-f9077e76]{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.custom-background-upload[data-v-f9077e76]{z-index:-1}.black-background[data-v-f9077e76]{width:100%;height:100%;position:absolute;left:0;top:0;z-index:-10;background-color:#000}", ""]), t.exports = e
    }, , , function(t, e, o) {
        t.exports = o.p + "0a87880d0ef87c11aadd2a798fbce413.svg"
    }, function(t, e, o) {
        t.exports = o.p + "2e58c1ce1650f33b76675f40d10d0c6c.svg"
    }, function(t, e, o) {
        t.exports = o.p + "3fc79778eded56ac4b136a8f0408c465.svg"
    }, function(t, e, o) {
        "use strict";
        o(599)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-8ffaf124]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-8ffaf124]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-8ffaf124]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-8ffaf124]{--svg-custom-transition:all .3s}.download-button[data-v-8ffaf124]{background-color:#f2f3f5;background-color:var(--color-almost-white);border-radius:100px;display:flex;width:195px;height:62px;cursor:pointer;transition:all .3s ease;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.download-button .text[data-v-8ffaf124]{padding:10px 0 13px 10px}.download-button .text h2[data-v-8ffaf124]{font-weight:700;font-size:1rem}.download-button .text h2[data-v-8ffaf124],.download-button .text p[data-v-8ffaf124]{color:#4f5660;color:var(--color-grey-dark);margin:0;transition:all .3s}.download-button .text p[data-v-8ffaf124]{opacity:.4;font-size:.85rem;line-height:.9;font-weight:500}@media(max-width:330px){.download-button[data-v-8ffaf124]{height:48px;width:166px}.download-button .text h2[data-v-8ffaf124]{font-size:.8rem}.download-button .text p[data-v-8ffaf124]{font-size:.7rem}}.download-button .settings[data-v-8ffaf124]{display:flex;justify-content:center;align-items:center;padding:10px;margin-left:10px;margin-right:-10px;border-left:1px solid rgba(183,186,192,.5);border-left:1px solid var(--color-grey-transparent)}.download-button .cog-wheel-icon[data-v-8ffaf124]{--svg-custom-color:var(--color-grey)}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(600)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-eb056eee]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-eb056eee]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-eb056eee]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-eb056eee]{--svg-custom-transition:all .3s}.round-button[data-v-eb056eee]{background-color:#f2f3f5;background-color:var(--color-almost-white);border-radius:100px;display:flex;width:62px;height:62px;cursor:pointer;transition:all .3s ease;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media(max-width:360px){.round-button[data-v-eb056eee]{width:48px;height:48px}}", ""]), t.exports = e
    }, , , function(t, e, o) {
        "use strict";
        o(601)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-58bd003e]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-58bd003e]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-58bd003e]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-58bd003e]{--svg-custom-transition:all .3s}.selectable-item[data-v-58bd003e]{width:48px;height:48px;position:relative;margin:4px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.selectable-item__inner[data-v-58bd003e]{border-radius:50%;width:48px;height:48px;border:2px solid #fff;border-color:var(--color-white);box-sizing:border-box;transition:border-color .3s;position:relative;overflow:hidden;will-change:transform}.selectable-item__inner.outside-shape[data-v-58bd003e]{background-color:#4f5660;background-color:var(--outside-shape-bg);--svg-custom-color:var(--outside-shape-fill)}.selectable-item__inner.inside-shape[data-v-58bd003e]{background-color:#fff;background-color:var(--inside-shape-bg);--svg-custom-color:var(--inside-shape-fill)}.selectable-item__inner.icon-select[data-v-58bd003e]{display:flex;justify-content:center;align-items:center;background-color:#d4d7dc;background-color:var(--color-grey-light)}.selectable-item__inner.animation[data-v-58bd003e]{display:flex;justify-content:center;align-items:center;background-color:#4f5660;background-color:var(--outside-shape-bg);--svg-custom-color:var(--outside-shape-fill)}.selectable-item__inner.animation .animation-moving[data-v-58bd003e]{display:none}.selectable-item__inner.animation:hover .animation-moving[data-v-58bd003e]{display:block}.selectable-item__inner.animation:hover .animation-icon[data-v-58bd003e]{display:none}.selectable-item .selection-ring[data-v-58bd003e]{position:absolute;left:-2px;top:-2px;border:2px solid #3ba55c;border:2px solid var(--color-success);border-radius:50%;width:48px;height:48px}.selectable-item .svg-shape[data-v-58bd003e]{position:relative;width:100%;height:100%}@media(min-width:1000px){.selectable-item[data-v-58bd003e],.selectable-item .selection-ring[data-v-58bd003e],.selectable-item__inner[data-v-58bd003e]{width:60px;height:60px}}.selectable-item .animation-wrapper[data-v-58bd003e]{width:100%;height:100%;border-radius:50%;overflow:hidden;position:relative}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(602)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, '[data-v-e5af882e]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-e5af882e]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-e5af882e]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-e5af882e]{--svg-custom-transition:all .3s}.color-chooser[data-v-e5af882e]{margin-bottom:25px}.title[data-v-e5af882e]{color:#2e3338;color:var(--color-almost-black);font-weight:500;font-size:1rem;margin:0 0 0 5px;transition:all .3s}.options[data-v-e5af882e]{display:flex;flex-wrap:wrap}.color-picker-wrapper[data-v-e5af882e]{margin:10px 0;background-color:#fff;background-color:var(--color-white);padding:20px;border-radius:10px;box-shadow:0 2px 4px rgba(0,0,0,.06);width:100%;display:flex;flex-direction:column;align-items:center}.color-input[data-v-e5af882e]{border:none;border-radius:10px;height:30px;color:#4f5660;color:var(--color-grey-dark);background-color:#f2f3f5;background-color:var(--color-almost-white);padding:10px 10px 8px;font-family:"Hind",sans-serif;font-size:1em;font-weight:500;width:70px;display:block;margin:20px auto 0;text-align:center}', ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(603)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}.vue-range-slider.slider-component .slider{background-color:#d4d7dc;background-color:var(--color-grey-light)}.vue-range-slider.slider-component .slider .slider-dot{z-index:3}.vue-range-slider.slider-component .slider .slider-dot .slider-dot-handle,.vue-range-slider.slider-component .slider .slider-process{background-color:#3ba55c;background-color:var(--color-success)}.vue-range-slider.slider-component .slider-tooltip-wrap .slider-tooltip{color:#2e3338;color:var(--color-almost-black);border:1px solid #3ba55c;border:1px solid var(--color-success);background-color:#3ba55c;background-color:var(--color-success)}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(604)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-50360983]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-50360983]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-50360983]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-50360983]{--svg-custom-transition:all .3s}.upload-wrapper[data-v-50360983]{margin:10px 0;background-color:#fff;background-color:var(--color-white);padding:20px;border-radius:10px;box-shadow:0 2px 4px rgba(0,0,0,.06);width:100%;box-sizing:border-box}.drop-area[data-v-50360983]{border:2px dashed #b7bac0;border:2px dashed var(--color-grey);min-height:100px;display:flex;justify-content:center;align-items:center;position:relative;transition:all .3s}.drop-area--highlighted[data-v-50360983]{background-color:rgba(88,101,242,.2);background-color:var(--color-primary-transparent)}.file-input[data-v-50360983]{display:none}.label[data-v-50360983]{width:100%;height:100px;display:flex;justify-content:center;align-items:center;cursor:pointer}.drag-text[data-v-50360983]{margin-top:-5px}.description[data-v-50360983],.drag-text[data-v-50360983]{color:#b7bac0;color:var(--color-grey);text-align:center}.description[data-v-50360983]{font-size:.85rem;font-weight:500;margin-top:10px}.file-preview[data-v-50360983]{display:flex;justify-content:center;align-items:center;padding:0 10px;max-width:calc(100% - 20px)}.file-preview__img[data-v-50360983]{width:50px;height:50px;-o-object-fit:contain;object-fit:contain}.file-preview__name[data-v-50360983]{margin-left:10px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.error[data-v-50360983]{display:flex;justify-content:center}.error--visible .error__inner[data-v-50360983]{visibility:visible;opacity:1}.error__inner[data-v-50360983]{color:#fff;color:var(--color-white);height:62px;width:160px;border-radius:100px;padding:0 30px;z-index:20;position:absolute;top:calc(50% - 31px);left:calc(50% - 110px);display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:500;transition:all .3s ease;opacity:0;visibility:hidden;background-color:#fa7a0b;background-color:var(--color-fail)}.scale__label[data-v-50360983]{font-weight:500;color:#2e3338;color:var(--color-almost-black);margin:10px 0}.scale__label[data-v-50360983],.scale__reset[data-v-50360983]{font-size:.85rem;text-align:center}.scale__reset[data-v-50360983]{color:#b7bac0;color:var(--color-grey);max-height:0;transition:all .3s ease;overflow:hidden;margin-top:10px}.scale__reset span[data-v-50360983]{cursor:pointer}.scale__reset--visible[data-v-50360983]{max-height:20px;padding-top:0}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(605)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-f5612d80]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-f5612d80]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-f5612d80]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-f5612d80]{--svg-custom-transition:all .3s}.shape-chooser[data-v-f5612d80]{margin-bottom:25px}.title[data-v-f5612d80]{color:#2e3338;color:var(--color-almost-black);font-weight:500;font-size:1rem;margin:0 0 0 5px;transition:all .3s}.options[data-v-f5612d80]{display:flex;flex-wrap:wrap}.item-button[data-v-f5612d80]{width:48px;height:48px;position:relative;margin:4px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-button__inner[data-v-f5612d80]{border-radius:50%;width:48px;height:48px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;background-color:#d4d7dc;background-color:var(--color-grey-light);transition:all .3s}@media(min-width:1000px){.item-button[data-v-f5612d80],.item-button__inner[data-v-f5612d80]{width:60px;height:60px}}", ""]), t.exports = e
    }, function(t) {
        t.exports = JSON.parse('[{"hex":"#747F8D"},{"hex":"#7289DA"},{"hex":"#3BA3E8"},{"hex":"#3AB8BA"},{"hex":"#43B581"},{"hex":"#88C800"},{"hex":"#FAA61A"},{"hex":"#FA7A0B"},{"hex":"#F04747"},{"hex":"#F35AB9"},{"hex":"#9D7BD5"}]')
    }, function(t, e, o) {
        "use strict";
        o(611)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-78ccdc5a]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-78ccdc5a]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-78ccdc5a]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-78ccdc5a]{--svg-custom-transition:all .3s}.customizer[data-v-78ccdc5a]{padding:30px 25px;display:flex;transition:all .3s}.customizer .choosers-wrapper[data-v-78ccdc5a]{display:flex;flex-direction:column}.customizer .choosers-wrapper .chooser[data-v-78ccdc5a]{max-width:340px;padding:0 15px}@media(max-width:420px){.customizer .choosers-wrapper .chooser[data-v-78ccdc5a]{padding:0}}@media(min-width:1000px){.customizer .choosers-wrapper .chooser[data-v-78ccdc5a]{max-width:410px}}@media(min-width:1500px){.customizer .choosers-wrapper .chooser[data-v-78ccdc5a]{max-width:615px}}@media(max-width:800px){.customizer[data-v-78ccdc5a]{flex-direction:column}.customizer .choosers-wrapper .chooser[data-v-78ccdc5a]{max-width:510px}}@media(max-width:420px){.customizer[data-v-78ccdc5a]{padding:30px 20px}.customizer .choosers-wrapper .chooser[data-v-78ccdc5a]{max-width:340px}}.disabled[data-v-78ccdc5a]{opacity:.3;pointer-events:none}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(614)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-27d48aec]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-27d48aec]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-27d48aec]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-27d48aec]{--svg-custom-transition:all .3s}.animation-chooser[data-v-27d48aec]{margin-bottom:25px}.title[data-v-27d48aec]{color:#2e3338;color:var(--color-almost-black);font-weight:500;font-size:1rem;margin:0 0 0 5px;transition:all .3s}.options[data-v-27d48aec]{display:flex;flex-wrap:wrap}.item-button[data-v-27d48aec]{width:48px;height:48px;position:relative;margin:4px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-button__inner[data-v-27d48aec]{border-radius:50%;width:48px;height:48px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;background-color:#d4d7dc;background-color:var(--color-grey-light);transition:all .3s}@media(min-width:1000px){.item-button[data-v-27d48aec],.item-button__inner[data-v-27d48aec]{width:60px;height:60px}}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(615)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-c84c9980]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-c84c9980]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-c84c9980]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-c84c9980]{--svg-custom-transition:all .3s}.effect-order-chooser[data-v-c84c9980]{margin-bottom:25px}.title[data-v-c84c9980]{color:#2e3338;color:var(--color-almost-black);font-weight:500;font-size:1rem;margin:0 0 0 5px;transition:all .3s}.options[data-v-c84c9980]{display:flex;flex-wrap:wrap}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(616)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-5e8f4002]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-5e8f4002]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-5e8f4002]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-5e8f4002]{--svg-custom-transition:all .3s}.customizer[data-v-5e8f4002]{padding:30px 25px;display:flex;transition:all .3s}.customizer .choosers-wrapper[data-v-5e8f4002]{display:flex;flex-direction:column}.customizer .choosers-wrapper .chooser[data-v-5e8f4002]{max-width:340px;padding:0 15px}@media(max-width:420px){.customizer .choosers-wrapper .chooser[data-v-5e8f4002]{padding:0}}@media(min-width:1000px){.customizer .choosers-wrapper .chooser[data-v-5e8f4002]{max-width:410px}}@media(min-width:1500px){.customizer .choosers-wrapper .chooser[data-v-5e8f4002]{max-width:615px}}@media(max-width:800px){.customizer[data-v-5e8f4002]{flex-direction:column}.customizer .choosers-wrapper .chooser[data-v-5e8f4002]{max-width:510px}}@media(max-width:420px){.customizer[data-v-5e8f4002]{padding:30px 20px}.customizer .choosers-wrapper .chooser[data-v-5e8f4002]{max-width:340px}}.animation-length-wrapper .title[data-v-5e8f4002]{color:#2e3338;color:var(--color-almost-black);font-weight:500;font-size:1rem;margin:0 0 0 5px;transition:all .3s}.animation-length-wrapper .slider[data-v-5e8f4002]{margin-top:10px}.animation-length-wrapper .reset[data-v-5e8f4002]{font-size:.85rem;color:#b7bac0;color:var(--color-grey);text-align:center;max-height:0;transition:all .3s ease;overflow:hidden;margin-top:10px}.animation-length-wrapper .reset span[data-v-5e8f4002]{cursor:pointer}.animation-length-wrapper .reset--visible[data-v-5e8f4002]{max-height:20px;padding-top:0}", ""]), t.exports = e
    }, , , function(t, e, o) {
        "use strict";
        o(618)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-e5813870]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-e5813870]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-e5813870]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-e5813870]{--svg-custom-transition:all .3s}.about[data-v-e5813870]{padding:50px 20px}.about__inner[data-v-e5813870]{max-width:600px;margin:0 auto}.about__title[data-v-e5813870]{font-size:1.8rem;margin:0 0 20px;line-height:1}.announcement[data-v-e5813870]{background-color:#f2f3f5;background-color:var(--color-almost-white);padding:20px;border-radius:20px;font-weight:500;display:flex;transition:all .3s}.announcement img[data-v-e5813870]{width:90px;align-self:center;border-radius:50%}.announcement p[data-v-e5813870]{margin:0 0 0 20px}@media(max-width:460px){.announcement img[data-v-e5813870]{width:50px;align-self:flex-start}.announcement p[data-v-e5813870]{margin-left:15px}}@media(max-width:330px){.announcement[data-v-e5813870]{flex-direction:column;align-content:center}.announcement img[data-v-e5813870]{align-self:center;margin-bottom:10px}}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(619)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-44253766]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-44253766]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-44253766]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-44253766]{--svg-custom-transition:all .3s}.loading-wrapper[data-v-44253766]{position:relative;width:64px;height:64px;-webkit-animation:spinning-animation 3s infinite;animation:spinning-animation 3s infinite}.loading-wrapper .icon[data-v-44253766]{position:absolute;top:0;left:0;width:100%;height:100%}.loading-wrapper .icon-shape[data-v-44253766]{--svg-custom-color:var(--color-grey)}.loading-wrapper .icon-eyes[data-v-44253766]{--svg-custom-color:var(--color-almost-white)}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(620)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-7e51565e]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-7e51565e]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-7e51565e]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-7e51565e]{--svg-custom-transition:all .3s}.toggle-switch[data-v-7e51565e]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:50px;height:30px}.toggle-switch__inner[data-v-7e51565e]{position:relative;height:100%}.toggle-switch__background[data-v-7e51565e]{position:absolute;top:5px;background-color:#d4d7dc;background-color:var(--color-grey-light);width:100%;height:20px;border-radius:20px;transition:all .3s}.toggle-switch__background--active[data-v-7e51565e]{background-color:#6873f3;background-color:var(--color-primary)}.toggle-switch__circle[data-v-7e51565e]{--svg-custom-color:var(--color-primary);position:absolute;z-index:5;left:0;width:30px;height:30px;border-radius:30px;box-shadow:0 0 5px rgba(0,0,0,.19);box-shadow:var(--box-shadow-basic);background-color:#fff;background-color:var(--color-white);transition:all .3s;display:flex;justify-content:center;align-items:center}.toggle-switch--active .toggle-switch__circle[data-v-7e51565e]{left:20px}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(621)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-4f3c02be]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-4f3c02be]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-4f3c02be]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-4f3c02be]{--svg-custom-transition:all .3s}.navigation-bar[data-v-4f3c02be]{background-color:#f2f3f5;background-color:var(--color-almost-white);display:flex;justify-content:center;position:relative;transition:all .3s ease}@media(max-width:500px){.navigation-bar[data-v-4f3c02be]{justify-content:flex-start}}.navigation-bar li[data-v-4f3c02be],.navigation-bar ul[data-v-4f3c02be]{margin:0;padding:0;list-style-type:none;display:inline-block}.navigation-bar__item[data-v-4f3c02be]{display:flex;justify-content:center;align-items:center;padding:10px 20px;color:#4f5660;color:var(--color-grey-dark);cursor:pointer;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--svg-custom-color:var(--color-grey-dark)}.navigation-bar__item .item-icon[data-v-4f3c02be]{margin-right:5px}.navigation-bar__item .label[data-v-4f3c02be]{margin-top:2px;font-weight:700}.navigation-bar__item .beta-badge[data-v-4f3c02be]{background-color:#6873f3;background-color:var(--color-primary);color:#f2f3f5;color:var(--color-almost-white);border-radius:100px;font-size:12px;font-weight:500;padding:0 7px;display:flex;justify-content:center;align-items:center;margin-left:5px;transition:all .3s ease}.navigation-bar__item .beta-badge span[data-v-4f3c02be]{margin-top:1px}.navigation-bar__item--active[data-v-4f3c02be]{background-color:#fff;background-color:var(--color-white);color:#2e3338;color:var(--color-almost-black);cursor:default;--svg-custom-color:var(--color-almost-black)}@media(max-width:360px){.navigation-bar__item[data-v-4f3c02be]{padding:10px 15px}.navigation-bar__item .label[data-v-4f3c02be]{font-size:14px;font-weight:500}}.settings[data-v-4f3c02be]{position:absolute;right:16px;top:9px;display:flex;justify-content:flex-end}.settings .settings-switch[data-v-4f3c02be]{display:flex;align-items:center}.settings .settings-switch__label[data-v-4f3c02be]{font-size:.85rem;margin-right:10px;margin-left:20px;color:#4f5660;color:var(--color-grey-dark)}.settings .dots-menu[data-v-4f3c02be]{display:none;cursor:pointer;padding:0 20px;--svg-custom-color:var(--color-grey)}.settings .top-settings-menu-wrapper[data-v-4f3c02be]{position:fixed;top:0;left:0;z-index:10;width:100vw;height:100vh}.settings .top-settings-menu[data-v-4f3c02be]{background-color:#fff;background-color:var(--color-white);box-shadow:0 0 5px rgba(0,0,0,.19);box-shadow:var(--box-shadow-basic);position:fixed;top:50px;right:5px;padding:20px;border-radius:20px;z-index:20}.settings .top-settings-menu .settings-switch[data-v-4f3c02be]{justify-content:space-between}.settings .top-settings-menu .settings-switch[data-v-4f3c02be]:first-child{margin-bottom:15px}.settings .top-settings-menu .settings-switch__label[data-v-4f3c02be]{margin-right:15px;margin-left:0}@media(max-width:1200px){.settings[data-v-4f3c02be]{right:0;top:14px}.settings .settings-switch--desktop[data-v-4f3c02be]{display:none}.settings .dots-menu[data-v-4f3c02be]{display:block}}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(622)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-8a44713e]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-8a44713e]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-8a44713e]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-8a44713e]{--svg-custom-transition:all .3s}.wrapper[data-v-8a44713e]{display:flex;justify-content:center;align-items:center}.wrapper .nerdordie-button[data-v-8a44713e]{display:inline-block;background-color:#d4d7dc;background-color:var(--color-grey-light);padding:18px 25px;border-radius:20px;transition:all .3s}.wrapper .nerdordie-button--light-bg[data-v-8a44713e]{background-color:#f2f3f5;background-color:var(--color-almost-white)}.wrapper .nerdordie-button__inner[data-v-8a44713e]{display:flex;align-items:center}.wrapper .nerdordie-button__inner .logo[data-v-8a44713e]{--svg-custom-color:var(--color-black);width:170px;height:40px;display:block}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(623)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-272eed92]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-272eed92]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-272eed92]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-272eed92]{--svg-custom-transition:all .3s}.settings-heading[data-v-272eed92]{font-size:1rem;margin:0 0 8px;text-align:center}.radio-icon[data-v-272eed92]{margin-right:5px;opacity:.5}.recommended-reset[data-v-272eed92]{font-size:14px;color:#b7bac0;color:var(--color-grey);text-align:center;cursor:pointer;max-height:0;transition:all .3s ease;overflow:hidden;padding-top:10px}.recommended-reset--visible[data-v-272eed92]{max-height:20px;padding-top:0}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(624)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-4e26bc2a]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-4e26bc2a]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-4e26bc2a]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-4e26bc2a]{--svg-custom-transition:all .3s}.overlay[data-v-4e26bc2a]{position:fixed;top:0;left:0;background-color:rgba(0,0,0,.5);z-index:10;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center}.overlay__scroll-wrapper[data-v-4e26bc2a]{overflow:auto;width:100%;max-width:350px;max-height:80vh;background-color:#fff;background-color:var(--color-white);border-radius:20px;box-sizing:border-box;z-index:1}.overlay__inner[data-v-4e26bc2a]{padding:30px}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(625)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-38e07f1a]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-38e07f1a]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-38e07f1a]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-38e07f1a]{--svg-custom-transition:all .3s}.loader[data-v-38e07f1a]{display:flex;justify-content:center;align-items:center;width:100px;height:100px;margin:0 auto;position:relative}.loader #main-circle[data-v-38e07f1a]{position:absolute;display:block;transform:rotate(180deg) scaleX(-1)}.loader #main-circle path[data-v-38e07f1a]{transition:all .5s;stroke-dasharray:313}.loader #background-loading-circle[data-v-38e07f1a]{position:absolute;display:block;-webkit-animation:rotate-circle-data-v-38e07f1a 5s linear 0s infinite;animation:rotate-circle-data-v-38e07f1a 5s linear 0s infinite}.loader .percentage[data-v-38e07f1a]{color:#6873f3;color:var(--color-primary);font-weight:700;font-size:1.3rem;margin-top:5px}@-webkit-keyframes rotate-circle-data-v-38e07f1a{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes rotate-circle-data-v-38e07f1a{0%{transform:rotate(0)}to{transform:rotate(1turn)}}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(626)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-7d79d536]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-7d79d536]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-7d79d536]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-7d79d536]{--svg-custom-transition:all .3s}.after-download[data-v-7d79d536]{text-align:center}.after-download__thumbs-up[data-v-7d79d536]{width:106px;height:106px;--svg-custom-color:var(--color-primary)}.after-download__title[data-v-7d79d536]{margin:5px 0;font-size:1.3rem;line-height:1;font-weight:700}.after-download__spaced-title[data-v-7d79d536]{margin-bottom:15px}.after-download__subtitle[data-v-7d79d536]{margin:0}.after-download__subtitle[data-v-7d79d536],.after-download p[data-v-7d79d536]{color:#4f5660;color:var(--color-grey-dark);font-weight:500}.after-download p[data-v-7d79d536]{font-size:.85rem;margin:7px 0 14px}.after-download .button-outside-label[data-v-7d79d536]{margin:15px 0 10px}.after-download .gif-loader[data-v-7d79d536]{margin:0 0 20px}.after-download .cancel-gif-generation[data-v-7d79d536]{color:#6873f3;color:var(--color-primary);cursor:pointer}.slide-inner-wrapper[data-v-7d79d536]{flex-direction:column;height:170px}.community-button[data-v-7d79d536],.slide-inner-wrapper[data-v-7d79d536]{display:flex;justify-content:center;align-items:center}.community-button__logo[data-v-7d79d536]{height:40px;margin-right:10px;border-radius:50%}.community-button__link[data-v-7d79d536]{display:flex;justify-content:center;align-items:center;color:#2e3338;color:var(--color-almost-black);text-decoration:none;font-weight:500;border-radius:20px;transition:all .3s;background-color:#f2f3f5;background-color:var(--color-almost-white);padding:18px 25px}.slider[data-v-7d79d536]{width:100%;height:200px;margin:0 auto}.voucher-promotion a[data-v-7d79d536]{text-decoration:none;color:unset}.voucher-promotion img[data-v-7d79d536]{max-width:100%}.voucher-promotion .affiliate-notice[data-v-7d79d536]{margin-top:5px;opacity:.7;font-size:.7rem}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(627)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, ":root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg{--svg-custom-transition:all .3s}.vueperslides__bullets:not(.vueperslides__bullets--outside){color:#4f5660;color:var(--color-grey-dark)}.vueperslides__bullets{bottom:-10px}.vueperslides__bullet{margin:0 5px;padding:12px 0;border:none}.vueperslides__bullet .default{width:30px;height:3px;border:none;background-color:#2e3338;background-color:var(--color-almost-black);opacity:.17;border-radius:3px;box-shadow:none}.vueperslides__bullet--active .default{background-color:#6873f3;background-color:var(--color-primary);opacity:1}.green-text{color:#3ba55c;color:var(--color-success)}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o(628)
    }, function(t, e, o) {
        (e = o(4)(!1)).push([t.i, "[data-v-a96fedac]:root{--color-white:#fff;--color-almost-white:#f2f3f5;--color-grey-light:#d4d7dc;--color-grey:#b7bac0;--color-grey-transparent:rgba(183,186,192,0.5);--color-grey-dark:#4f5660;--color-almost-black:#2e3338;--color-black:#000;--color-primary:#6873f3;--color-primary-transparent:rgba(88,101,242,0.2);--color-success:#3ba55c;--color-fail:#fa7a0b;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.19);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.1);--outside-shape-bg:var(--color-grey-dark);--outside-shape-fill:var(--color-white);--inside-shape-bg:var(--color-white);--inside-shape-fill:var(--color-grey-dark)}.classic-theme[data-v-a96fedac]{--color-primary:#7289da;--color-primary-transparent:rgba(114,137,218,0.2);--color-success:#43b581;--color-fail:#fa7a0b}.dark-theme[data-v-a96fedac]{--color-white:#36393f;--color-almost-white:#2f3136;--color-grey-light:#202225;--color-grey:#76797f;--color-grey-transparent:rgba(118,121,127,0.3);--color-grey-dark:#b9bbbe;--color-almost-black:#fff;--color-black:#fff;--box-shadow-basic:0px 0px 5px rgba(0,0,0,0.5);--box-shadow-inset-basic:inset 0px 0px 11px rgba(0,0,0,0.25);--outside-shape-bg:var(--color-white);--outside-shape-fill:var(--color-grey-dark);--inside-shape-bg:var(--color-grey-dark);--inside-shape-fill:var(--color-grey-light)}svg[data-v-a96fedac]{--svg-custom-transition:all .3s}.top-section[data-v-a96fedac]{height:398px;width:100%;position:fixed;top:0;background-color:#fff;background-color:var(--color-white);z-index:5;transition:all .3s}.top-section .top-collapsable-section[data-v-a96fedac]{transition:all .3s;height:153px;overflow:hidden}.top-section--partially-reduced[data-v-a96fedac]{height:268px}.top-section--partially-reduced .top-collapsable-section[data-v-a96fedac]{height:0;padding:0}.top-section--partially-reduced .main-wrapper[data-v-a96fedac]{margin-top:20px}@media(max-width:800px){.top-section--reduced[data-v-a96fedac]{height:168px}.top-section--reduced .top-collapsable-section[data-v-a96fedac]{height:0;padding:0;overflow:hidden}.top-section--reduced .button-group[data-v-a96fedac]{height:0;margin:0}.top-section--reduced .main-wrapper[data-v-a96fedac]{margin:20px 0}}.customizer-wrapper[data-v-a96fedac]{padding-top:398px;display:flex;flex-direction:column;align-items:center;background-color:#f2f3f5;background-color:var(--color-almost-white);transition:all .3s}.top-text[data-v-a96fedac]{padding:20px 30px 25px;height:60px;transition:all .3s;position:relative}.top-text h1[data-v-a96fedac]{text-align:center;color:#2e3338;color:var(--color-almost-black);font-size:1.8rem;letter-spacing:-.009em;margin:0 0 3px;transition:all .3s}@media(max-width:500px){.top-text h1[data-v-a96fedac]{font-size:1.4em}}.top-text h2[data-v-a96fedac]{font-size:.85rem;font-weight:400;margin:-7px 0 0;color:#b7bac0;color:var(--color-grey);font-weight:500;text-align:center;transition:all .3s}@media(max-width:320px){.top-text h2[data-v-a96fedac]{font-size:.8rem}}.main-wrapper[data-v-a96fedac]{display:flex;flex-direction:column;align-items:center;margin-bottom:30px;transition:all .3s}.avatar-placeholder-wrapper[data-v-a96fedac]{width:128px;height:128px;border-radius:50%;background-color:#f2f3f5;background-color:var(--color-almost-white);display:flex;justify-content:center;align-items:center}.button-group[data-v-a96fedac]{display:flex;flex-wrap:wrap;align-items:center;margin-top:25px;height:62px;transition:all .3s;overflow:hidden}.button-group .randomize-button[data-v-a96fedac],.button-group .share-button[data-v-a96fedac]{margin-right:10px}.support-wrapper[data-v-a96fedac]{text-align:center;padding:0 20px 50px;flex-direction:column;background-color:#f2f3f5;background-color:var(--color-almost-white);transition:all .3s}.support-wrapper h3[data-v-a96fedac]{margin:0 20px}.support-wrapper p[data-v-a96fedac]{margin:12px auto;max-width:400px;color:#4f5660;color:var(--color-grey-dark)}.copy-notification[data-v-a96fedac]{display:flex;justify-content:center}.copy-notification--visible .copy-notification__inner[data-v-a96fedac]{visibility:visible;opacity:1}.copy-notification__inner[data-v-a96fedac]{color:#fff;color:var(--color-white);height:62px;border-radius:100px;padding:0 30px;z-index:20;position:fixed;top:20px;display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:500;transition:all .3s ease;opacity:0;visibility:hidden}.copy-notification--success .copy-notification__inner[data-v-a96fedac]{background-color:#3ba55c;background-color:var(--color-success)}.copy-notification--fail .copy-notification__inner[data-v-a96fedac]{background-color:#fa7a0b;background-color:var(--color-fail)}.classic-mode-tooltip[data-v-a96fedac]{position:fixed;top:36px;right:193px;max-width:250px}@media(max-width:1200px){.classic-mode-tooltip[data-v-a96fedac]{right:22px}}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(101), o(293), o(58), o(38), o(64), o(62), o(37);
        var l = o(10),
            n = o(630),
            r = o(629),
            c = o(631),
            d = o(632),
            v = o(633),
            h = o(634),
            C = o(606),
            f = o(607),
            m = o(528),
            w = o(608),
            x = o(609),
            y = o(610),
            L = o(612),
            M = o(613),
            k = (o(164), o(617)),
            Z = o.n(k),
            z = o(818),
            _ = {
                methods: {
                    saveAs: z.saveAs,
                    makeRandomString: function(t) {
                        for (var e = [], o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", l = o.length, i = 0; i < t; i++) e.push(o.charAt(Math.floor(Math.random() * l)));
                        return e.join("")
                    },
                    downloadPngAvatar: function(t) {
                        var e = this;
                        return Object(l.a)(regeneratorRuntime.mark((function o() {
                            var l, n;
                            return regeneratorRuntime.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        return l = e.makeRandomString(5), n = document.getElementById("avatarPng"), o.next = 4, Z.a.toPng(n);
                                    case 4:
                                        Z.a.toBlob(n, {
                                            width: t,
                                            height: t,
                                            style: {
                                                transform: "scale(" + t / 128 + ")",
                                                transformOrigin: "top left"
                                            }
                                        }).then((function(e) {
                                            Object(z.saveAs)(e, "discord-avatar-".concat(t, "-").concat(l, ".png"))
                                        }));
                                    case 5:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    downloadGifAvatar: function(t, e) {
                        Object(z.saveAs)(t, "discord-avatar-".concat(e, "-").concat(this.makeRandomString(5), ".gif"))
                    }
                }
            },
            F = (o(59), o(21), o(60), o(61), o(82), o(291), o(30)),
            H = {
                data: function() {
                    return {
                        framesPerSecond: 60
                    }
                },
                computed: {
                    isCanceled: function() {
                        return this.$store.state.cancelGifGeneration
                    },
                    animationDurationSeconds: function() {
                        return this.$store.state.customization.animationLength
                    }
                },
                methods: {
                    generateGif: function(t) {
                        var e = this;
                        return Object(l.a)(regeneratorRuntime.mark((function l() {
                            var n, r, c, d, v, h, i, C;
                            return regeneratorRuntime.wrap((function(l) {
                                for (;;) switch (l.prev = l.next) {
                                    case 0:
                                        n = o(819), r = new n({
                                            workers: 16,
                                            quality: 10,
                                            workerScript: "gif-js-worker/gif.worker.js"
                                        }), (c = document.getElementsByClassName("animated")).forEach((function(t) {
                                            t.style["animation-play-state"] = "paused";
                                            var e = t.cloneNode(!0);
                                            t.parentNode.replaceChild(e, t)
                                        })), c = document.getElementsByClassName("animated"), d = document.getElementById("avatarGif"), v = e.framesPerSecond * e.animationDurationSeconds, h = regeneratorRuntime.mark((function o(i) {
                                            var l, n;
                                            return regeneratorRuntime.wrap((function(o) {
                                                for (;;) switch (o.prev = o.next) {
                                                    case 0:
                                                        if (!e.isCanceled) {
                                                            o.next = 3;
                                                            break
                                                        }
                                                        return c.forEach((function(t) {
                                                            t.style["animation-play-state"] = "running"
                                                        })), o.abrupt("return", {
                                                            v: void 0
                                                        });
                                                    case 3:
                                                        return o.next = 5, Z.a.toPng(d);
                                                    case 5:
                                                        return o.next = 7, e.addToGif(d, r, t);
                                                    case 7:
                                                        l = 100 / v, n = e.animationDurationSeconds / 100 * l * i, c.forEach((function(t) {
                                                            t.style["animation-delay"] = -n + "s"
                                                        })), e.$store.commit("setGeneratingGifProgress", Math.round((i + 1) / v * 100));
                                                    case 11:
                                                    case "end":
                                                        return o.stop()
                                                }
                                            }), o)
                                        })), i = 0;
                                    case 9:
                                        if (!(i < v)) {
                                            l.next = 17;
                                            break
                                        }
                                        return l.delegateYield(h(i), "t0", 11);
                                    case 11:
                                        if (C = l.t0, "object" !== Object(F.a)(C)) {
                                            l.next = 14;
                                            break
                                        }
                                        return l.abrupt("return", C.v);
                                    case 14:
                                        i++, l.next = 9;
                                        break;
                                    case 17:
                                        return l.abrupt("return", new Promise((function(t, e) {
                                            r.on("finished", (function(e) {
                                                c.forEach((function(t) {
                                                    t.style["animation-play-state"] = "running"
                                                })), t(URL.createObjectURL(e))
                                            })), r.render()
                                        })));
                                    case 18:
                                    case "end":
                                        return l.stop()
                                }
                            }), l)
                        })))()
                    },
                    addToGif: function(element, t, e) {
                        var o = this;
                        return Object(l.a)(regeneratorRuntime.mark((function l() {
                            var data;
                            return regeneratorRuntime.wrap((function(l) {
                                for (;;) switch (l.prev = l.next) {
                                    case 0:
                                        return l.next = 2, Z.a.toPng(element, {
                                            width: e,
                                            height: e,
                                            style: {
                                                transform: "scale(" + e / 128 + ")",
                                                transformOrigin: "top left"
                                            }
                                        });
                                    case 2:
                                        return data = l.sent, l.abrupt("return", new Promise((function(e, l) {
                                            var img = new Image;
                                            img.src = data, img.onload = function() {
                                                var l = 1e3 * o.animationDurationSeconds / (o.framesPerSecond * o.animationDurationSeconds);
                                                t.addFrame(img, {
                                                    delay: l
                                                }), e()
                                            }, img.onerror = function() {
                                                l(new Error("Image could not be loaded!"))
                                            }
                                        })));
                                    case 4:
                                    case "end":
                                        return l.stop()
                                }
                            }), l)
                        })))()
                    }
                }
            },
            B = o(635),
            V = o(520),
            S = o(636),
            O = o(637),
            $ = o(529),
            E = o(638),
            A = o(639),
            D = {
                name: "App",
                components: {
                    Avatar: n.default,
                    AnimatedAvatar: r.default,
                    DownloadButton: c.default,
                    RoundButton: d.default,
                    Customizer: v.default,
                    AnimationCustomizer: h.default,
                    AboutText: B.default,
                    ChameleonIcon: V.default,
                    LoadingSpinner: S.default,
                    NavigationBar: O.default,
                    NerdOrDieButton: $.default,
                    DownloadSettingsOverlay: E.default,
                    DownloadOverlay: A.default
                },
                mixins: [_, H],
                data: function() {
                    return {
                        backgroundColors: C,
                        foregroundColors: f,
                        customEyeColors: w,
                        customEffectColors: m,
                        outsideShapes: x,
                        insideShapes: y,
                        bodyAnimations: L,
                        effectAnimations: M,
                        isBackgroundUpload: !1,
                        showAbout: !1,
                        showSettings: !1,
                        showCopySuccess: !1,
                        showCopyFail: !1,
                        showAfterDownload: !1,
                        reducedTopSection: !1,
                        isAtTop: !0,
                        scrollThreshold: 38,
                        hasSharedCustomBg: !1,
                        hasSharedCustomFg: !1,
                        hasSharedCustomEc: !1,
                        hasSharedCustomEyc: !1,
                        isLoaded: !1
                    }
                },
                computed: {
                    isGeneratingGif: function() {
                        return this.$store.state.isGeneratingGif
                    },
                    generatingGifProgress: function() {
                        return this.$store.state.generatingGifProgress
                    },
                    colorBackground: function() {
                        return this.$store.state.customization.colorBackground
                    },
                    colorForeground: function() {
                        return this.$store.state.customization.colorForeground
                    },
                    customEyeColor: function() {
                        return this.$store.state.customization.customEyeColor
                    },
                    outsideShape: function() {
                        return this.$store.state.customization.outsideShape
                    },
                    insideShape: function() {
                        return this.$store.state.customization.insideShape
                    },
                    bodyAnimation: function() {
                        return this.$store.state.customization.bodyAnimation
                    },
                    effectAnimation: function() {
                        return this.$store.state.customization.effectAnimation
                    },
                    customEffectColor: function() {
                        return this.$store.state.customization.customEffectColor
                    },
                    customEffectOrder: function() {
                        return this.$store.state.customization.customEffectOrder
                    },
                    animationLength: function() {
                        return this.$store.state.customization.animationLength
                    },
                    isAnimationState: {
                        get: function() {
                            return this.$store.state.isAnimationState
                        },
                        set: function(t) {
                            this.$store.commit("setIsAnimationState", t)
                        }
                    },
                    downloadDimensions: {
                        get: function() {
                            return this.$store.state.downloadDimensions
                        },
                        set: function(t) {
                            this.$store.commit("setDownloadDimensions", t)
                        }
                    },
                    gifDownloadDimensions: {
                        get: function() {
                            return this.$store.state.gifDownloadDimensions
                        },
                        set: function(t) {
                            this.$store.commit("setGifDownloadDimensions", t)
                        }
                    },
                    backgroundType: {
                        get: function() {
                            return this.$store.state.backgroundType
                        },
                        set: function(t) {
                            this.$store.commit("setBackgroundType", t)
                        }
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$store.commit("localStorage/incrementTimesVisited"), this.changeBodyAnimation(this.bodyAnimations[0]), this.changeEffectAnimation(this.effectAnimations[0]), this.randomizeValues();
                    var q = this.$route.query;
                    q.bg && (this.changeBackgroundColor("#" + q.bg), this.hasSharedCustomBg = !0), q.fg && (this.changeForegroundColor("#" + q.fg), this.hasSharedCustomFg = !0), q.eyc && "none" !== q.eyc && (this.changeEyeColor("#" + q.eyc), this.hasSharedCustomEyc = !0), q.os && this.changeOutsideShape(q.os), q.is && this.changeInsideShape(q.is), q.ec && "none" !== q.ec && (this.changeEffectColor("#" + q.ec), this.hasSharedCustomEc = !0), q.ba && ("none" !== q.ba ? this.changeBodyAnimation(this.bodyAnimations.find((function(t) {
                        return t.name === q.ba
                    }))) : this.changeBodyAnimation({})), q.ea && ("none" !== q.ea ? this.changeEffectAnimation(this.effectAnimations.find((function(t) {
                        return t.name === q.ea
                    }))) : this.changeEffectAnimation({})), q.al && this.changeAnimationLength(q.al), q.eo && this.changeEffectOrder(q.eo), this.isAnimationState = !!(q.ec || q.ba || q.ea), window.addEventListener("scroll", (function() {
                        window.scrollY > t.scrollThreshold ? t.isAtTop = !1 : t.isAtTop = !0
                    })), this.isLoaded = !0
                },
                methods: {
                    randomizeValues: function() {
                        this.randomizeCustomization(), this.randomizeAnimation()
                    },
                    randomizeCustomization: function() {
                        this.isBackgroundUpload = !1, this.$refs.customizer && this.$refs.customizer.closeAllExpanded(), this.changeEyeColor(void 0), this.changeBackgroundColor(C[Math.floor(Math.random() * Math.floor(C.length))].hex), this.colorBackground === this.backgroundColors[0].hex || this.colorBackground === this.backgroundColors[1].hex || this.colorBackground === this.backgroundColors[10].hex ? this.changeForegroundColor(f[0].hex) : this.changeForegroundColor(f[Math.floor(Math.random() * Math.floor(f.length))].hex), this.changeOutsideShape(x[Math.floor(Math.random() * this.outsideShapes.length)].name), this.changeInsideShape(y[Math.floor(Math.random() * this.insideShapes.length)].name)
                    },
                    randomizeAnimation: function() {
                        this.changeEffectAnimation(M[Math.floor(Math.random() * this.effectAnimations.length)]), this.changeBodyAnimation(L[Math.floor(Math.random() * this.bodyAnimations.length)])
                    },
                    handleDownload: function() {
                        var t = this;
                        return Object(l.a)(regeneratorRuntime.mark((function e() {
                            var o;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.isAnimationState) {
                                            e.next = 11;
                                            break
                                        }
                                        return t.$store.commit("setIsGeneratingGif", !0), t.showAfterDownload = !0, e.next = 5, t.generateGif(t.gifDownloadDimensions);
                                    case 5:
                                        o = e.sent, t.$store.commit("setIsGeneratingGif", !1), t.$store.commit("setGeneratingGifProgress", 0), t.$store.state.cancelGifGeneration || t.downloadGifAvatar(o, t.gifDownloadDimensions), e.next = 12;
                                        break;
                                    case 11:
                                        t.downloadPngAvatar(t.downloadDimensions);
                                    case 12:
                                        t.showAfterDownload = !0, t.$store.state.cancelGifGeneration && (t.$store.commit("setCancelGifGeneration", !1), t.showAfterDownload = !1);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    copyShareLink: function() {
                        var t = this;
                        "custom-upload" === this.outsideShape || this.isBackgroundUpload ? (this.showCopyFail = !0, setTimeout((function() {
                            t.showCopyFail = !1
                        }), 3e3)) : (this.copyToClipboard(this.generateShareLink()), this.showCopySuccess = !0, setTimeout((function() {
                            t.showCopySuccess = !1
                        }), 3e3))
                    },
                    changeBackgroundColor: function(t) {
                        this.$store.commit("customization/setColorBackground", t)
                    },
                    changeForegroundColor: function(t) {
                        this.$store.commit("customization/setColorForeground", t)
                    },
                    changeEyeColor: function(t) {
                        this.$store.commit("customization/setCustomEyeColor", t)
                    },
                    changeOutsideShape: function(t) {
                        this.$store.commit("customization/setOutsideShape", t)
                    },
                    changeInsideShape: function(t) {
                        this.$store.commit("customization/setInsideShape", t)
                    },
                    changeBodyAnimation: function(t) {
                        this.$store.commit("customization/setBodyAnimation", t)
                    },
                    changeEffectAnimation: function(t) {
                        this.$store.commit("customization/setEffectAnimation", t)
                    },
                    changeEffectColor: function(t) {
                        this.$store.commit("customization/setCustomEffectColor", t)
                    },
                    changeEffectOrder: function(t) {
                        this.$store.commit("customization/setCustomEffectOrder", t)
                    },
                    changeAnimationLength: function(t) {
                        this.$store.commit("customization/setAnimationLength", t)
                    },
                    toggleAboutOverlay: function() {
                        this.showAbout = !this.showAbout
                    },
                    toggleAfterDownloadOverlay: function() {
                        this.showAfterDownload = !this.showAfterDownload
                    },
                    toggleSettingsOverlay: function() {
                        this.showSettings = !this.showSettings
                    },
                    setAnimationState: function(t) {
                        this.isAnimationState = t
                    },
                    setReducedTopSection: function(t) {
                        this.reducedTopSection = t
                    },
                    cancelGifGeneration: function() {
                        this.$store.commit("setCancelGifGeneration", !0)
                    },
                    setClassicModeTooltipSeen: function(t) {
                        this.classicModeTooltipSeen = t
                    },
                    generateShareLink: function() {
                        var t = this.colorBackground.replace("#", ""),
                            e = this.colorForeground.replace("#", ""),
                            o = "none";
                        if (this.customEyeColor && (o = this.customEyeColor.replace("#", "")), !this.isAnimationState) return "".concat(window.location.origin, "?bg=").concat(t, "&fg=").concat(e, "&eyc=").concat(o, "&os=").concat(this.outsideShape, "&is=").concat(this.insideShape);
                        var l = "none",
                            n = "none",
                            r = "none";
                        this.customEffectColor && (l = this.customEffectColor.replace("#", "")), this.bodyAnimation && this.bodyAnimation.name && (n = this.bodyAnimation.name), this.effectAnimation && this.effectAnimation.name && (r = this.effectAnimation.name);
                        var c = "".concat(window.location.origin, "?bg=").concat(t, "&fg=").concat(e, "&eyc=").concat(o, "&os=").concat(this.outsideShape, "&is=").concat(this.insideShape, "&ec=").concat(l, "&ba=").concat(n, "&ea=").concat(r);
                        return 3 !== parseFloat(this.animationLength) && (c = c.concat("&al=".concat(this.animationLength))), this.customEffectOrder && (c = c.concat("&eo=".concat(this.customEffectOrder))), c
                    },
                    copyToClipboard: function(t) {
                        var e = document.createElement("textarea");
                        e.value = t, document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e)
                    }
                }
            },
            j = (o(840), o(6)),
            component = Object(j.a)(D, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    attrs: {
                        id: "app"
                    }
                }, [o("div", {
                    staticClass: "top-section",
                    class: {
                        "top-section--reduced": t.reducedTopSection,
                        "top-section--partially-reduced": !t.isAtTop
                    }
                }, [o("div", {
                    staticClass: "top-collapsable-section"
                }, [o("navigation-bar", {
                    attrs: {
                        "animation-active": t.isAnimationState
                    },
                    on: {
                        "animation-state-change": function(e) {
                            return t.setAnimationState(e)
                        }
                    }
                }), t._v(" "), t._m(0)], 1), t._v(" "), o("div", {
                    staticClass: "main-wrapper"
                }, [o("div", {
                    staticClass: "avatar-placeholder-wrapper"
                }, [t.isLoaded ? t._e() : o("loading-spinner", {
                    staticClass: "loader"
                }), t._v(" "), o("no-ssr", [t.isAnimationState ? o("animated-avatar", {
                    attrs: {
                        "is-background-upload": t.isBackgroundUpload
                    }
                }) : o("avatar", {
                    attrs: {
                        "background-type": t.backgroundType,
                        "is-background-upload": t.isBackgroundUpload
                    }
                })], 1)], 1), t._v(" "), o("div", {
                    staticClass: "button-group"
                }, [o("round-button", {
                    staticClass: "randomize-button",
                    nativeOn: {
                        click: function(e) {
                            t.isAnimationState ? t.randomizeAnimation() : t.randomizeCustomization()
                        }
                    }
                }, [o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "random"
                    }
                })], 1), t._v(" "), o("round-button", {
                    staticClass: "share-button",
                    nativeOn: {
                        click: function(e) {
                            return t.copyShareLink()
                        }
                    }
                }, [o("chameleon-icon", {
                    staticClass: "standard-icon",
                    attrs: {
                        name: "share"
                    }
                })], 1), t._v(" "), o("download-button", {
                    attrs: {
                        "download-type": t.isAnimationState ? "GIF" : "PNG",
                        "download-dimensions": t.isAnimationState ? t.gifDownloadDimensions : t.downloadDimensions
                    },
                    on: {
                        "settings-click": function(e) {
                            return t.toggleSettingsOverlay()
                        }
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.handleDownload()
                        }
                    }
                })], 1)])]), t._v(" "), o("div", {
                    staticClass: "customizer-wrapper"
                }, [t.isAnimationState ? o("animation-customizer", {
                    ref: "animation-customizer",
                    attrs: {
                        "initial-custom-effect-color": t.hasSharedCustomEc ? t.customEffectColor : void 0
                    }
                }) : o("customizer", {
                    ref: "customizer",
                    attrs: {
                        "initial-custom-background-color": t.hasSharedCustomBg ? t.colorBackground : void 0,
                        "initial-custom-foreground-color": t.hasSharedCustomFg ? t.colorForeground : void 0,
                        "initial-custom-eye-color": t.hasSharedCustomEyc ? t.customEyeColor : void 0,
                        "is-background-upload": t.isBackgroundUpload
                    },
                    on: {
                        "color-input-focus": function(e) {
                            return t.setReducedTopSection(!0)
                        },
                        "color-input-blur": function(e) {
                            return t.setReducedTopSection(!1)
                        },
                        "is-background-upload": function(e) {
                            t.isBackgroundUpload = e
                        }
                    }
                })], 1), t._v(" "), o("div", {
                    staticClass: "support-wrapper"
                }, [o("h3", [t._v("Support future development and updates")]), t._v(" "), o("p", [t._v("\n      We're actively working on new animations, designs, and features.\n      Support us and future development of this site by visiting our main website:\n    ")]), t._v(" "), o("nerd-or-die-button")], 1), t._v(" "), o("about-text"), t._v(" "), t.showSettings ? o("download-settings-overlay", {
                    on: {
                        close: t.toggleSettingsOverlay
                    }
                }) : t._e(), t._v(" "), t.showAfterDownload ? o("download-overlay", {
                    attrs: {
                        "is-generating-gif": t.isGeneratingGif,
                        "generating-gif-progress": t.generatingGifProgress
                    },
                    on: {
                        "cancel-gif": t.cancelGifGeneration,
                        close: t.toggleAfterDownloadOverlay
                    }
                }) : t._e(), t._v(" "), o("div", {
                    staticClass: "copy-notification copy-notification--success",
                    class: {
                        "copy-notification--visible": t.showCopySuccess
                    }
                }, [t._m(1)]), t._v(" "), o("div", {
                    staticClass: "copy-notification copy-notification--fail",
                    class: {
                        "copy-notification--visible": t.showCopyFail
                    }
                }, [t._m(2)])], 1)
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "top-text"
                }, [e("h1", [this._v("Discord Avatar Maker")]), this._v(" "), e("h2", [this._v("\n          Fan-Made PFP / Server Logo Generator\n        ")])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "copy-notification__inner"
                }, [e("span", [this._v("Link to your creation copied!")])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "copy-notification__inner"
                }, [e("span", [this._v("Creations with custom uploads can't be shared.")])])
            }], !1, null, "a96fedac", null);
        e.default = component.exports;
        installComponents(component, {
            NavigationBar: o(637).default,
            LoadingSpinner: o(636).default,
            Avatar: o(630).default,
            AnimatedAvatar: o(629).default,
            ChameleonIcon: o(520).default,
            RoundButton: o(632).default,
            DownloadButton: o(631).default,
            Customizer: o(633).default,
            AnimationCustomizer: o(634).default,
            NerdOrDieButton: o(529).default,
            AboutText: o(635).default,
            DownloadSettingsOverlay: o(638).default,
            DownloadOverlay: o(639).default
        })
    }])
]);