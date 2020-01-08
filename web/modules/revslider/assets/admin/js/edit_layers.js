/************************************************
 * REVOLUTION 5.4.5 EDIT LAYER JS
 * @version: 2.0 (17.05.2017)
 * @author ThemePunch
 ************************************************/
jQuery.widget("custom.catcomplete", jQuery.ui.autocomplete, {
    _create: function () {
        this._super(), this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)")
    }, _renderMenu: function (a, b) {
        var c = this, d = "";
        b && jQuery.each(b, function (b, e) {
            var f;
            e.version != d && (a.closest("#tp-thelistoffonts").length > 0 ? a.append("<li class='ui-autocomplete-category' style='font-size: 24px;'>" + e.version + "</li>") : a.append("<li class='ui-autocomplete-category' style='font-size: 24px;'>Version: " + e.version + "</li>"), d = e.version), f = c._renderItemData(a, e), e.version && f.attr("aria-label", e.version + " : " + e.label)
        })
    }
});

!function (a) {
        "use strict";
        var b = a.GreenSockGlobals || a, c = function (a) {
            var c, d = a.split("."), e = b;
            for (c = 0; d.length > c; c++)e[d[c]] = e = e[d[c]] || {};
            return e
        }, d = c("com.greensock.utils"), e = function (a) {
            var b = a.nodeType, c = "";
            if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent)return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
            } else if (3 === b || 4 === b)return a.nodeValue;
            return c
        }, f = document, g = f.defaultView ? f.defaultView.getComputedStyle : function () {
        }, h = /([A-Z])/g, i = function (a, b, c, d) {
            var e;
            return (c = c || g(a, null)) ? (a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase()), e = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, e = c[b]), d ? e : parseInt(e, 10) || 0
        }, j = function (a) {
            return !!(a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]))
        }, k = function (a) {
            var b, c, d, e = [], f = a.length;
            for (b = 0; f > b; b++)if (c = a[b], j(c))for (d = c.length, d = 0; c.length > d; d++)e.push(c[d]); else e.push(c);
            return e
        }, l = ")eefec303079ad17405c", m = /(?:<br>|<br\/>|<br \/>)/gi, n = f.all && !f.addEventListener, o = "<div style='position:relative;display:inline-block;" + (n ? "*display:inline;*zoom:1;'" : "'"), p = function (a) {
            a = a || "";
            var b = -1 !== a.indexOf("++"), c = 1;
            return b && (a = a.split("++").join("")), function () {
                return o + (a ? " class='" + a + (b ? c++ : "") + "'>" : ">")
            }
        }, q = d.SplitText = b.SplitText = function (a, b) {
            if ("string" == typeof a && (a = q.selector(a)), !a)throw"cannot split a null element.";
            this.elements = j(a) ? k(a) : [a], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = b || {}, this.split(b)
        }, r = function (a, b, c, d, h) {
            m.test(a.innerHTML) && (a.innerHTML = a.innerHTML.replace(m, l));
            var j, k, n, o, q, r, s, t, u, v, w, x, y, z = e(a), A = b.type || b.split || "chars,words,lines", B = -1 !== A.indexOf("lines") ? [] : null, C = -1 !== A.indexOf("words"), D = -1 !== A.indexOf("chars"), E = "absolute" === b.position || !0 === b.absolute, F = E ? "&#173; " : " ", G = -999, H = g(a), I = i(a, "paddingLeft", H), J = i(a, "borderBottomWidth", H) + i(a, "borderTopWidth", H), K = i(a, "borderLeftWidth", H) + i(a, "borderRightWidth", H), L = i(a, "paddingTop", H) + i(a, "paddingBottom", H), M = i(a, "paddingLeft", H) + i(a, "paddingRight", H), N = i(a, "textAlign", H, !0), O = a.clientHeight, P = a.clientWidth, Q = z.length, R = "</div>", S = p(b.wordsClass), T = p(b.charsClass), U = -1 !== (b.linesClass || "").indexOf("++"), V = b.linesClass;
            for (U && (V = V.split("++").join("")), n = S(), o = 0; Q > o; o++)r = z.charAt(o), ")" === r && z.substr(o, 20) === l ? (n += R + "<BR/>", o !== Q - 1 && (n += " " + S()), o += 19) : " " === r && " " !== z.charAt(o - 1) && o !== Q - 1 ? (n += R, o !== Q - 1 && (n += F + S())) : n += D && " " !== r ? T() + r + "</div>" : r;
            for (a.innerHTML = n + R, q = a.getElementsByTagName("*"), Q = q.length, s = [], o = 0; Q > o; o++)s[o] = q[o];
            if (B || E)for (o = 0; Q > o; o++)t = s[o], ((k = t.parentNode === a) || E || D && !C) && (u = t.offsetTop, B && k && u !== G && "BR" !== t.nodeName && (j = [], B.push(j), G = u), E && (t._x = t.offsetLeft, t._y = u, t._w = t.offsetWidth, t._h = t.offsetHeight), B && (C !== k && D || (j.push(t), t._x -= I), k && o && (s[o - 1]._wordEnd = !0)));
            for (o = 0; Q > o; o++)t = s[o], k = t.parentNode === a, "BR" !== t.nodeName ? (E && (w = t.style, C || k || (t._x += t.parentNode._x, t._y += t.parentNode._y), w.left = t._x + "px", w.top = t._y + "px", w.position = "absolute", w.display = "block", w.width = t._w + 1 + "px", w.height = t._h + "px"), C ? k ? d.push(t) : D && c.push(t) : k ? (a.removeChild(t), s.splice(o--, 1), Q--) : !k && D && (u = !B && !E && t.nextSibling, a.appendChild(t), u || a.appendChild(f.createTextNode(" ")), c.push(t))) : B || E ? (a.removeChild(t), s.splice(o--, 1), Q--) : C || a.appendChild(t);
            if (B) {
                for (E && (v = f.createElement("div"), a.appendChild(v), x = v.offsetWidth + "px", u = v.offsetParent === a ? 0 : a.offsetLeft, a.removeChild(v)), w = a.style.cssText, a.style.cssText = "display:none;"; a.firstChild;)a.removeChild(a.firstChild);
                for (y = !E || !C && !D, o = 0; B.length > o; o++) {
                    for (j = B[o], v = f.createElement("div"), v.style.cssText = "display:block;text-align:" + N + ";position:" + (E ? "absolute;" : "relative;"), V && (v.className = V + (U ? o + 1 : "")), h.push(v), Q = j.length, q = 0; Q > q; q++)"BR" !== j[q].nodeName && (t = j[q], v.appendChild(t), y && (t._wordEnd || C) && v.appendChild(f.createTextNode(" ")), E && (0 === q && (v.style.top = t._y + "px", v.style.left = I + u + "px"), t.style.top = "0px", u && (t.style.left = t._x - u + "px")));
                    C || D || (v.innerHTML = e(v).split(String.fromCharCode(160)).join(" ")), E && (v.style.width = x, v.style.height = t._h + "px"), a.appendChild(v)
                }
                a.style.cssText = w
            }
            E && (O > a.clientHeight && (a.style.height = O - L + "px", O > a.clientHeight && (a.style.height = O + J + "px")), P > a.clientWidth && (a.style.width = P - M + "px", P > a.clientWidth && (a.style.width = P + K + "px")))
        }, s = q.prototype;
        s.split = function (a) {
            this.isSplit && this.revert(), this.vars = a || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var b = 0; this.elements.length > b; b++)this._originals[b] = this.elements[b].innerHTML, r(this.elements[b], this.vars, this.chars, this.words, this.lines);
            return this.isSplit = !0, this
        }, s.revert = function () {
            if (!this._originals)throw"revert() call wasn't scoped properly.";
            for (var a = this._originals.length; --a > -1;)this.elements[a].innerHTML = this._originals[a];
            return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
        }, q.selector = a.$ || a.jQuery || function (b) {
                return a.$ ? (q.selector = a.$, a.$(b)) : f ? f.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b
            }
    }(window || {}), function (a, b) {
        a.widget("ui.rotatable", a.ui.mouse, {
            options: {handle: !1, angle: !1, start: null, rotate: null, stop: null},
            handle: function (a) {
                return a === b ? this.options.handle : void(this.options.handle = a)
            },
            angle: function (a) {
                return a === b ? this.options.angle : (this.options.angle = a, void this.performRotation(this.options.angle))
            },
            _create: function () {
                var b;
                this.options.handle ? b = this.options.handle : (b = a(document.createElement("div")), b.addClass("ui-rotatable-handle")), this.listeners = {
                    rotateElement: a.proxy(this.rotateElement, this),
                    startRotate: a.proxy(this.startRotate, this),
                    stopRotate: a.proxy(this.stopRotate, this)
                }, b.draggable({
                    helper: "clone",
                    start: this.dragStart,
                    handle: b
                }), b.bind("mousedown", this.listeners.startRotate), b.appendTo(this.element), 0 != this.options.angle ? (this.elementCurrentAngle = this.options.angle, this.performRotation(this.elementCurrentAngle)) : this.elementCurrentAngle = 0
            },
            _destroy: function () {
                this.element.removeClass("ui-rotatable"), this.element.find(".ui-rotatable-handle").remove()
            },
            performRotation: function (a) {
                var b = 180 * a / Math.PI;
                punchgs.TweenLite.set(this.element, {rotationZ: b + "deg"})
            },
            getElementOffset: function () {
                this.performRotation(0);
                var a = this.element.offset();
                return this.performRotation(this.elementCurrentAngle), a
            },
            getElementCenter: function () {
                var a = this.getElementOffset(), b = a.left + this.element.width() / 2, c = a.top + this.element.height() / 2;
                return Array(b, c)
            },
            dragStart: function () {
                return !this.element && void 0
            },
            startRotate: function (b) {
                var c = this.getElementCenter(), d = b.pageX - c[0], e = b.pageY - c[1];
                return this.mouseStartAngle = Math.atan2(e, d), this.elementStartAngle = this.elementCurrentAngle, this.hasRotated = !1, this._propagate("start", b), a(document).bind("mousemove", this.listeners.rotateElement), a(document).bind("mouseup", this.listeners.stopRotate), !1
            },
            rotateElement: function (a) {
                if (!this.element)return !1;
                var b = this.getElementCenter(), c = a.pageX - b[0], d = a.pageY - b[1], e = Math.atan2(d, c), f = e - this.mouseStartAngle + this.elementStartAngle;
                this.performRotation(f);
                var g = this.elementCurrentAngle;
                return this.elementCurrentAngle = f, this._propagate("rotate", a), g != f && (this._trigger("rotate", a, this.ui()), this.hasRotated = !0), !1
            },
            stopRotate: function (b) {
                return this.element ? (a(document).unbind("mousemove", this.listeners.rotateElement), a(document).unbind("mouseup", this.listeners.stopRotate), this.elementStopAngle = this.elementCurrentAngle, this.hasRotated && this._propagate("stop", b), setTimeout(function () {
                    this.element = !1
                }, 10), !1) : void 0
            },
            _propagate: function (b, c) {
                a.ui.plugin.call(this, b, [c, this.ui()]), "rotate" !== b && this._trigger(b, c, this.ui())
            },
            plugins: {},
            ui: function () {
                return {
                    element: this.element,
                    angle: {start: this.elementStartAngle, current: this.elementCurrentAngle, stop: this.elementStopAngle}
                }
            }
        })
    }(jQuery), jQuery(document).ready(function () {
        UniteLayersRev.setGlobalAction(wp.template("rs-action-layer-wrap")), UniteLayersRev.setGlobalSlideImport(wp.template("rs-import-layer-wrap")), function (a) {
            "use strict";
            "function" == typeof define && define.amd ? define(["jquery", "jquery-ui/sortable"], a) : a(window.jQuery)
        }(function (a) {
            "use strict";
            function b(a, b, c) {
                return a > b && b + c > a
            }

            a.widget("mjs.nestedSortable", a.extend({}, a.ui.sortable.prototype, {
                options: {
                    disableParentChange: !1,
                    doNotClear: !1,
                    expandOnHover: 700,
                    isAllowed: function () {
                        return !0
                    },
                    isTree: !1,
                    listType: "ul",
                    maxLevels: 0,
                    protectRoot: !1,
                    rootID: null,
                    rtl: !1,
                    startCollapsed: !1,
                    tabSize: 20,
                    branchClass: "mjs-nestedSortable-branch",
                    collapsedClass: "mjs-nestedSortable-collapsed",
                    disableNestingClass: "mjs-nestedSortable-no-nesting",
                    errorClass: "mjs-nestedSortable-error",
                    expandedClass: "mjs-nestedSortable-expanded",
                    hoveringClass: "mjs-nestedSortable-hovering",
                    leafClass: "mjs-nestedSortable-leaf",
                    disabledClass: "mjs-nestedSortable-disabled"
                }, _create: function () {
                    var b, c = this;
                    if (this.element.data("ui-sortable", this.element.data("mjs-nestedSortable")), !this.element.is(this.options.listType))throw b = "nestedSortable: Please check that the listType option is set to your actual list type", new Error(b);
                    this.options.isTree && this.options.expandOnHover && (this.options.tolerance = "intersect"), a.ui.sortable.prototype._create.apply(this, arguments), this.options.isTree && a(this.items).each(function () {
                        var a = this.item, b = a.hasClass(c.options.collapsedClass), d = a.hasClass(c.options.expandedClass);
                        a.children(c.options.listType).length ? (a.addClass(c.options.branchClass), b || d || (c.options.startCollapsed ? a.addClass(c.options.collapsedClass) : a.addClass(c.options.expandedClass))) : a.addClass(c.options.leafClass)
                    })
                }, _destroy: function () {
                    return this.element.removeData("mjs-nestedSortable").removeData("ui-sortable"), a.ui.sortable.prototype._destroy.apply(this, arguments)
                }, _mouseDrag: function (b) {
                    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = this, t = this.options, u = !1, v = a(document);
                    for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < t.scrollSensitivity ? (u = this.scrollParent.scrollTop() + t.scrollSpeed, this.scrollParent.scrollTop(u)) : b.pageY - this.overflowOffset.top < t.scrollSensitivity && (u = this.scrollParent.scrollTop() - t.scrollSpeed, this.scrollParent.scrollTop(u)), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < t.scrollSensitivity ? (u = this.scrollParent.scrollLeft() + t.scrollSpeed, this.scrollParent.scrollLeft(u)) : b.pageX - this.overflowOffset.left < t.scrollSensitivity && (u = this.scrollParent.scrollLeft() - t.scrollSpeed, this.scrollParent.scrollLeft(u))) : (b.pageY - v.scrollTop() < t.scrollSensitivity ? (u = v.scrollTop() - t.scrollSpeed, v.scrollTop(u)) : a(window).height() - (b.pageY - v.scrollTop()) < t.scrollSensitivity && (u = v.scrollTop() + t.scrollSpeed, v.scrollTop(u)), b.pageX - v.scrollLeft() < t.scrollSensitivity ? (u = v.scrollLeft() - t.scrollSpeed, v.scrollLeft(u)) : a(window).width() - (b.pageX - v.scrollLeft()) < t.scrollSensitivity && (u = v.scrollLeft() + t.scrollSpeed, v.scrollLeft(u))), !1 !== u && a.ui.ddmanager && !t.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), g = this.placeholder.offset().top, this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), this.hovering = this.hovering ? this.hovering : null, this.mouseentered = !!this.mouseentered && this.mouseentered, function () {
                        var a = this.placeholder.parent().parent();
                        a && a.closest(".ui-sortable").length && (h = a)
                    }.call(this), i = this._getLevel(this.placeholder), j = this._getChildLevels(this.helper), m = document.createElement(t.listType), c = this.items.length - 1; c >= 0; c--)if (d = this.items[c], e = d.item[0], (f = this._intersectsWithPointer(d)) && d.instance === this.currentContainer) {
                        if (-1 !== e.className.indexOf(t.disabledClass))if (2 === f) {
                            if ((k = this.items[c + 1]) && k.item.hasClass(t.disabledClass))continue
                        } else if (1 === f && (l = this.items[c - 1]) && l.item.hasClass(t.disabledClass))continue;
                        if (n = 1 === f ? "next" : "prev", !(e === this.currentItem[0] || this.placeholder[n]()[0] === e || a.contains(this.placeholder[0], e) || "semi-dynamic" === this.options.type && a.contains(this.element[0], e))) {
                            if (this.mouseentered || (a(e).mouseenter(), this.mouseentered = !0), t.isTree && a(e).hasClass(t.collapsedClass) && t.expandOnHover && (this.hovering || (a(e).addClass(t.hoveringClass), this.hovering = window.setTimeout(function () {
                                    a(e).removeClass(t.collapsedClass).addClass(t.expandedClass), s.refreshPositions(), s._trigger("expand", b, s._uiHash())
                                }, t.expandOnHover))), this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d))break;
                            a(e).mouseleave(), this.mouseentered = !1, a(e).removeClass(t.hoveringClass), this.hovering && window.clearTimeout(this.hovering), this.hovering = null, !t.protectRoot || this.currentItem[0].parentNode === this.element[0] && e.parentNode !== this.element[0] ? t.protectRoot || this._rearrange(b, d) : this.currentItem[0].parentNode !== this.element[0] && e.parentNode === this.element[0] ? (a(e).children(t.listType).length || (e.appendChild(m), t.isTree && a(e).removeClass(t.leafClass).addClass(t.branchClass + " " + t.expandedClass)), o = "down" === this.direction ? a(e).prev().children(t.listType) : a(e).children(t.listType), void 0 !== o[0] && this._rearrange(b, null, o)) : this._rearrange(b, d), this._clearEmpty(e), this._trigger("change", b, this._uiHash());
                            break
                        }
                    }
                    if (function () {
                            var a = this.placeholder.prev();
                            p = a.length ? a : null
                        }.call(this), null != p)for (; "li" !== p[0].nodeName.toLowerCase() || -1 !== p[0].className.indexOf(t.disabledClass) || p[0] === this.currentItem[0] || p[0] === this.helper[0];) {
                        if (!p[0].previousSibling) {
                            p = null;
                            break
                        }
                        p = a(p[0].previousSibling)
                    }
                    if (function () {
                            var a = this.placeholder.next();
                            q = a.length ? a : null
                        }.call(this), null != q)for (; "li" !== q[0].nodeName.toLowerCase() || -1 !== q[0].className.indexOf(t.disabledClass) || q[0] === this.currentItem[0] || q[0] === this.helper[0];) {
                        if (!q[0].nextSibling) {
                            q = null;
                            break
                        }
                        q = a(q[0].nextSibling)
                    }
                    return this.beyondMaxLevels = 0, null == h || null != q || t.protectRoot && h[0].parentNode == this.element[0] || !(t.rtl && this.positionAbs.left + this.helper.outerWidth() > h.offset().left + h.outerWidth() || !t.rtl && this.positionAbs.left < h.offset().left) ? null == p || p.hasClass(t.disableNestingClass) || !(p.children(t.listType).length && p.children(t.listType).is(":visible") || !p.children(t.listType).length) || t.protectRoot && this.currentItem[0].parentNode === this.element[0] || !(t.rtl && this.positionAbs.left + this.helper.outerWidth() < p.offset().left + p.outerWidth() - t.tabSize || !t.rtl && this.positionAbs.left > p.offset().left + t.tabSize) ? this._isAllowed(h, i, i + j) : (this._isAllowed(p, i, i + j + 1), p.children(t.listType).length || (p[0].appendChild(m), t.isTree && p.removeClass(t.leafClass).addClass(t.branchClass + " " + t.expandedClass)), g && g <= p.offset().top ? p.children(t.listType).prepend(this.placeholder) : p.children(t.listType)[0].appendChild(this.placeholder[0]), void 0 !== h && this._clearEmpty(h[0]), this._trigger("change", b, this._uiHash())) : (h.after(this.placeholder[0]), r = !h.children(t.listItem).children("li:visible:not(.ui-sortable-helper)").length, t.isTree && r && h.removeClass(this.options.branchClass + " " + this.options.expandedClass).addClass(this.options.leafClass), void 0 !== h && this._clearEmpty(h[0]), this._trigger("change", b, this._uiHash())), this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                }, _mouseStop: function (b) {
                    this.beyondMaxLevels && (this.placeholder.removeClass(this.options.errorClass), this.domPosition.prev ? a(this.domPosition.prev).after(this.placeholder) : a(this.domPosition.parent).prepend(this.placeholder), this._trigger("revert", b, this._uiHash())), a("." + this.options.hoveringClass).mouseleave().removeClass(this.options.hoveringClass), this.mouseentered = !1, this.hovering && window.clearTimeout(this.hovering), this.hovering = null, this._relocate_event = b, this._pid_current = a(this.domPosition.parent).parent().attr("id"), this._sort_current = this.domPosition.prev ? a(this.domPosition.prev).next().index() : 0, a.ui.sortable.prototype._mouseStop.apply(this, arguments)
                }, _intersectsWithSides: function (a) {
                    var c = this.options.isTree ? .8 : .5, d = b(this.positionAbs.top + this.offset.click.top, a.top + a.height * c, a.height), e = b(this.positionAbs.top + this.offset.click.top, a.top - a.height * c, a.height), f = b(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width), g = this._getDragVerticalDirection(), h = this._getDragHorizontalDirection();
                    return this.floating && h ? "right" === h && f || "left" === h && !f : g && ("down" === g && d || "up" === g && e)
                }, _contactContainers: function () {
                    this.options.protectRoot && this.currentItem[0].parentNode === this.element[0] || a.ui.sortable.prototype._contactContainers.apply(this, arguments)
                }, _clear: function () {
                    var b, c;
                    for (a.ui.sortable.prototype._clear.apply(this, arguments), (this._pid_current !== this._uiHash().item.parent().parent().attr("id") || this._sort_current !== this._uiHash().item.index()) && this._trigger("relocate", this._relocate_event, this._uiHash()), b = this.items.length - 1; b >= 0; b--)c = this.items[b].item[0], this._clearEmpty(c)
                }, serialize: function (b) {
                    var c = a.extend({}, this.options, b), d = this._getItemsAsjQuery(c && c.connected), e = [];
                    return a(d).each(function () {
                        var b = (a(c.item || this).attr(c.attribute || "id") || "").match(c.expression || /(.+)[-=_](.+)/), d = (a(c.item || this).parent(c.listType).parent(c.items).attr(c.attribute || "id") || "").match(c.expression || /(.+)[-=_](.+)/);
                        b && e.push((c.key || b[1]) + "[" + (c.key && c.expression ? b[1] : b[2]) + "]=" + (d ? c.key && c.expression ? d[1] : d[2] : c.rootID))
                    }), !e.length && c.key && e.push(c.key + "="), e.join("&")
                }, toHierarchy: function (b) {
                    function c(b) {
                        var e, f = (a(b).attr(d.attribute || "id") || "").match(d.expression || /(.+)[-=_](.+)/), g = a(b).data();
                        return g.nestedSortableItem && delete g.nestedSortableItem, f ? (e = {id: f[2]}, e = a.extend({}, e, g), a(b).children(d.listType).children(d.items).length > 0 && (e.children = [], a(b).children(d.listType).children(d.items).each(function () {
                            var a = c(this);
                            e.children.push(a)
                        })), e) : void 0
                    }

                    var d = a.extend({}, this.options, b), e = [];
                    return a(this.element).children(d.items).each(function () {
                        var a = c(this);
                        e.push(a)
                    }), e
                }, toArray: function (b) {
                    function c(b, g, h) {
                        var i, j, k, l = h + 1;
                        if (a(b).children(d.listType).children(d.items).length > 0 && (g++, a(b).children(d.listType).children(d.items).each(function () {
                                l = c(a(this), g, l)
                            }), g--), i = a(b).attr(d.attribute || "id").match(d.expression || /(.+)[-=_](.+)/), g === e ? j = d.rootID : (k = a(b).parent(d.listType).parent(d.items).attr(d.attribute || "id").match(d.expression || /(.+)[-=_](.+)/), j = k[2]), i) {
                            var m = a(b).children("div").data(), n = a.extend(m, {
                                id: i[2],
                                parent_id: j,
                                depth: g,
                                left: h,
                                right: l
                            });
                            f.push(n)
                        }
                        return h = l + 1
                    }

                    var d = a.extend({}, this.options, b), e = d.startDepthCount || 0, f = [], g = 1;
                    return d.excludeRoot || (f.push({
                        item_id: d.rootID,
                        parent_id: null,
                        depth: e,
                        left: g,
                        right: 2 * (a(d.items, this.element).length + 1)
                    }), g++), a(this.element).children(d.items).each(function () {
                        g = c(this, e, g)
                    }), f = f.sort(function (a, b) {
                        return a.left - b.left
                    })
                }, _clearEmpty: function (b) {
                    function c(b, c, d, e) {
                        e && (c = [d, d = c][0]), a(b).removeClass(c).addClass(d)
                    }

                    var d = this.options, e = a(b).children(d.listType), f = e.has("li").length, g = d.doNotClear || f || d.protectRoot && a(b)[0] === this.element[0];
                    d.isTree && c(b, d.branchClass, d.leafClass, g), g || (e.parent().removeClass(d.expandedClass), e.remove())
                }, _getLevel: function (a) {
                    var b, c = 1;
                    if (this.options.listType)for (b = a.closest(this.options.listType); b && b.length > 0 && !b.is(".ui-sortable");)c++, b = b.parent().closest(this.options.listType);
                    return c
                }, _getChildLevels: function (b, c) {
                    var d = this, e = this.options, f = 0;
                    return c = c || 0, a(b).children(e.listType).children(e.items).each(function (a, b) {
                        f = Math.max(d._getChildLevels(b, c + 1), f)
                    }), c ? f + 1 : f
                }, _isAllowed: function (a, b, c) {
                    var d = this.options, e = this.placeholder.closest(".ui-sortable").nestedSortable("option", "maxLevels"), f = this.currentItem.parent().parent();
                    d.disableParentChange && (void 0 !== a && !f.is(a) || void 0 === a && f.is("li")) || !d.isAllowed(this.placeholder, a, this.currentItem) ? (this.placeholder.addClass(d.errorClass), this.beyondMaxLevels = c > e && 0 !== e ? c - e : 1) : c > e && 0 !== e ? (this.placeholder.addClass(d.errorClass), this.beyondMaxLevels = c - e) : (this.placeholder.removeClass(d.errorClass), this.beyondMaxLevels = 0)
                }
            })), a.mjs.nestedSortable.prototype.options = a.extend({}, a.ui.sortable.prototype.options, a.mjs.nestedSortable.prototype.options)
        })
    }),
        /** jQuery(document).ready(function () {
        jQuery.widget("custom.catcomplete", jQuery.ui.autocomplete, {
            _create: function () {
                this._super(), this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)")
            }, _renderMenu: function (a, b) {
                var c = this, d = "";
                b && jQuery.each(b, function (b, e) {
                    var f;
                    e.version != d && (a.closest("#tp-thelistoffonts").length > 0 ? a.append("<li class='ui-autocomplete-category' style='font-size: 24px;'>" + e.version + "</li>") : a.append("<li class='ui-autocomplete-category' style='font-size: 24px;'>Version: " + e.version + "</li>"), d = e.version), f = c._renderItemData(a, e), e.version && f.attr("aria-label", e.version + " : " + e.label)
                })
            }
        })
    }),*/ jQuery(document).ready(function () {
        "undefined" != typeof tp_color_picker_presets && tp_color_picker_presets || (tp_color_picker_presets = {
            colors: [],
            gradients: []
        }), tp_color_picker_presets.colors || (tp_color_picker_presets.colors = []), tp_color_picker_presets.gradients || (tp_color_picker_presets.gradients = []), jQuery.tpColorPicker({
            custom: tp_color_picker_presets,
            onAjax: function (a, b, c, d, e) {
                var f = !1, g = tp_color_picker_presets[c];
                switch (a) {
                    case"save":
                        g[g.length] = b, f = !0;
                        break;
                    case"delete":
                        for (var h = g.length, i = 0; i < h; i++)for (var j in g[i])j === b && g.splice(i, 1);
                        f = !0
                }
                f && UniteAdminRev.ajaxRequest("save_color_preset", {presets: tp_color_picker_presets}, function (a) {
                    var b = a.error || !1;
                    jQuery(document).trigger(d, [b])
                })
            }
        })
    });
    var timeline_timer = "", add_meta_into = "", UniteLayersRev = new function () {
        function initSliderMainOptions(a) {
            var b = a;
            var callid = (typeof b.data("callid") === 'string' && b.data("callid").length > 0) ? b.data("callid") : 'undefined_id';
            jQuery(".bgsrcchanger-div").each(function () {
                ("tp-bgimagesettings" != jQuery(this).attr("id") || "tp-bgimagesettings" == jQuery(this).attr("id") && "on" != b.data("imgsettings")) && ("tp-bgimagesettings" == jQuery(this).attr("id") ? jQuery(this).slideUp(200) : jQuery(this).css({display: "none"}))
            }), jQuery("#" + callid).css({display: "inline-block"}), "on" == b.data("imgsettings") && jQuery("#tp-bgimagesettings").slideDown(200), "image" == jQuery('input[name="background_type"]:checked').val() ? (jQuery(".rs-img-source-size").show(), jQuery("#alt_option").show(), jQuery("#title_option").show(), "custom" == jQuery("#alt_option").val() ? jQuery("#alt_attr").show() : jQuery("#alt_attr").hide(), "custom" == jQuery("#title_option").val() ? jQuery("#title_attr").show() : jQuery("#title_attr").hide()) : (jQuery("#alt_option").hide(), jQuery("#title_option").hide(), jQuery("#alt_attr").show(), jQuery("#title_attr").hide(), jQuery(".rs-img-source-size").hide()), "external" == jQuery('input[name="background_type"]:checked').val() ? jQuery(".ext_setting").show() : jQuery(".ext_setting").hide()
        }

        function checkKeyGroups(a) {
            var b = t.arrLayersChanges.undo && t.arrLayersChanges.undo.length > 0 ? t.arrLayersChanges.undo[t.arrLayersChanges.undo.length - 1].undogroup : "", c = t.arrLayersChanges.undo && t.arrLayersChanges.undo.length > 0 ? t.arrLayersChanges.undo[t.arrLayersChanges.undo.length - 1].serial : -77, d = a.split(".")[0], e = {};
            a = a.substring(a.indexOf(".") + 1), e.addtoarray = !1, e.serial = d;
            var g = a.indexOf("layer_action") >= 0, h = g ? "layer_action" : a;
            return jQuery.each(t.attributegroups, function (a, b) {
                -1 != jQuery.inArray(h, b.keys) && (e.undogroup = b.groupname, e.icon = b.icon, e.id = b.id)
            }), e.serial == c || 30 == e.id && "Order" == b ? e.undogroup != b ? e.addtoarray = !0 : e.addtoarray = "samegroup" : e.addtoarray = !0, void 0 == e.undogroup && (e.addtoarray = !1), e
        }

        function objRek(a, b, c, d) {
            return c = void 0 === c ? "" : c, jQuery.each(a, function (a, e) {
                if (d)return !0;
                if ("references" !== a)if (e instanceof Object) {
                    var f = c;
                    c = 0 == c.length ? a : c + "." + a, d = objRek(e, b[a], c, d), c = f
                } else {
                    var f = c;
                    if (c = void 0 == c || 0 == c.length ? a : c + "." + a, void 0 !== b && e !== b[a] && parseInt(e, 0) != parseInt(b[a], 0) && void 0 != e && void 0 != b[a] && "renderedData" != a)if (t.arrLayersChanges.undo && 0 == t.arrLayersChanges.undo.length || t.arrLayersChanges.undo[t.arrLayersChanges.undo.length - 1].chain != c) {
                        var g = checkKeyGroups(c);
                        !0 === g.addtoarray ? (t.arrLayersChanges.redo.splice(0, t.arrLayersChanges.redo.length), t.arrLayersChanges.undo.push({
                            amount: 0,
                            backup: jQuery.extend(!0, {}, t.arrLayersClone),
                            restore: jQuery.extend(!0, {}, t.arrLayers),
                            icon: g.icon,
                            id: g.id,
                            undogroup: g.undogroup,
                            serial: g.serial,
                            key: a,
                            chain: c,
                            oldval: e,
                            newval: b[a]
                        }), t.set_save_needed(!0), d = !0) : "samegroup" == g.addtoarray && (t.arrLayersChanges.redo.splice(0, t.arrLayersChanges.redo.length), t.arrLayersChanges.undo[t.arrLayersChanges.undo.length - 1].amount++, t.set_save_needed(!0), d = !0)
                    } else t.arrLayersChanges.undo[t.arrLayersChanges.undo.length - 1].chain === c && (t.arrLayersChanges.redo.splice(0, t.arrLayersChanges.redo.length), t.arrLayersChanges.undo[t.arrLayersChanges.undo.length - 1].amount++, t.set_save_needed(!0), d = !0);
                    c = f
                }
            }), d
        }

        function _len(a) {
            var b = 0;
            return jQuery.each(a, function (a) {
                b++
            }), b
        }

        function forceShowHideLayer(a, b) {
            void 0 !== a && !1 !== a && ("hide" == b ? (a.references.htmlLayer.addClass("layer-deleted"), void 0 != a.references.sorttable && (a.references.sorttable.layer.addClass("layer-deleted"), a.references.sorttable.timeline.addClass("layer-deleted"), a.references.quicklayer.addClass("layer-deleted"))) : (a.references.htmlLayer.removeClass("layer-deleted"), void 0 != a.references.sorttable && (a.references.sorttable.layer.removeClass("layer-deleted"), a.references.sorttable.timeline.removeClass("layer-deleted"), a.references.quicklayer.removeClass("layer-deleted"))), u.timeLineTableDimensionUpdate())
        }

        function showHideDeletedLayers(a) {
            jQuery.each(t.arrLayers, function (a, b) {
                b.layer_unavailable || !0 === b.deleted ? forceShowHideLayer(b, "hide") : forceShowHideLayer(b, "show")
            })
        }

        function checkInvisibleRedoItems() {
            jQuery.each(t.arrLayersChanges.redo, function (a, b) {
                jQuery.each(b.backup, function (a, b) {
                    b.layer_unavailable && forceShowHideLayer(b, "hide")
                })
            })
        }

        function checkChangedSources(a) {
            function b(b, c) {
                12 != b.id && 9 != b.id && 29 != b.id || jQuery.each(b[a], function (a, c) {
                    (12 == b.id && ("svg" == c.type || "image" == c.type) || 29 == b.id && ("audio" == c.type || "video" == c.type) || 9 == b.id && "text" == c.type) && redrawLayerHtml(c.serial), 29 == b.id && "audio" == c.type && u.drawAudioMap(c)
                })
            }

            jQuery.each(t.arrLayersChanges.redo, function (c, d) {
                b(d, a)
            }), jQuery.each(t.arrLayersChanges.undo, function (c, d) {
                b(d, a)
            })
        }

        var initTop = 100, initLeft = 100, initSpeed = 300, initTopVideo = 20, initLeftVideo = 20, g_startTime = 500, g_stepTime = 0, g_slideTime, initText = "Caption Text", initGroupName = "Group", initRowName = "Row", initColumnName = "Column", layout = "desktop", transSettings = [], t = this, u = tpLayerTimelinesRev, cm = tpLayerContextMenu, initArrFontTypes = [], containerID = "#divLayers", container, update_layer_changes = !0, id_counter = 0, initLayers = null, initDemoLayers = null, initStaticLayers = [], initDemoSettings = null, layerresized = !1, layerGeneralParamsStatus = !1, initLayerAnims = [], initLayerAnimsDefault = [], currentAnimationType = "customin", curDemoSlideID = 0, slideIDs = {}, alluniqueids = [], selectedLayerWidth = 0, selectedlayerHeight = 0, totalWidth = 0, totalHeight = 0, unique_layer_id = 0, global_action_template = null, global_layer_import_template = null, updateRevTimer = 0, updateRevChange = 0, save_needed = !1, import_slides = {}, lastchangedinput = "";
        t.core = 5, t.sub = 3, t.subsub = 0, t.newlayercoord = {x: -1, y: -1}, u.layout = layout, t.groupMove = {
            x: 0,
            y: 0
        }, t.selectedLayerSerial = -1, t.selectedLayers = new Array, t.justDropped = !1, t.arrLayers = {}, t.arrLayersClone = {}, t.arrLayersDemo = {}, t.arrLayersChanges = {
            undo: [],
            redo: []
        }, t.ignorAllUndoRedoLogs = !1, t.attributegroups = [{
            id: "0",
            icon: "move",
            groupname: "Layer Position",
            keys: ["left.desktop", "top.desktop", "align_hor.desktop", "align_vert.desktop", "left.notebook", "top.notebook", "align_hor.notebook", "align_vert.notebook", "left.tablet", "top.tablet", "align_hor.tablet", "align_vert.tablet", "left.mobile", "top.mobile", "align_hor.mobile", "align_vert.mobile"]
        }, {
            id: "1",
            icon: "play",
            groupname: "Start Animation",
            keys: ["text_c_start", "bg_c_start", "use_text_c_start", "use_bg_c_start", "x_rotate_start", "x_rotate_start_reverse", "x_start", "x_start_reverse", "y_rotate_start", "y_rotate_start_reverse", "y_start", "y_start_reverse", "z_rotate_start", "z_rotate_start_reverse", "z_start"]
        }, {
            id: "2",
            icon: "play",
            groupname: "End Animation",
            keys: ["text_c_end", "bg_c_end", "use_text_c_end", "use_bg_c_end", "x_end", "x_end_reverse", "x_origin_end", "x_rotate_end", "x_rotate_end_reverse", "y_end", "y_end_reverse", "y_rotate_end", "y_rotate_end_reverse", "z_end", "z_rotate_end", "z_rotate_end_reverse"]
        }, {
            id: "31",
            icon: "play",
            groupname: "Frames",
            keys: ["splitdelay", "animation", "split", "split_extratime", "relative_time", "easing", "speed", "time"]
        }, {
            id: "3",
            icon: "play",
            groupname: "Loop Animation",
            keys: ["loop_angle", "loop_animation", "loop_easing", "loop_enddeg", "loop_radius", "loop_speed", "loop_startdeg", "loop_xend", "loop_xorigin", "loop_xstart", "loop_yend", "loop_yorigin", "loop_ystart", "loop_zoomend", "loop_zoomstart"]
        }, {
            id: "4",
            icon: "play",
            groupname: "Mask Animation",
            keys: ["mask_ease_end", "mask_ease_start", "mask_end", "mask_speed_end", "mask_speed_start", "mask_start", "mask_x_end", "mask_x_end_reverse", "mask_x_start", "mask_x_start_reverse", "mask_y_end", "mask_y_end_reverse", "mask_y_start", "mask_y_start_reverse"]
        }, {
            id: "5",
            icon: "font",
            groupname: "Formatting",
            keys: ["displaymode.desktop", "displaymode.notebook", "displaymode.tablet", "displaymode.mobile", "autolinebreak", "whitespace.desktop", "whitespace.notebook", "whitespace.tablet", "whitespace.mobile", "html_tag", "layer-selectable"]
        }, {
            id: "6",
            icon: "cog",
            groupname: "Behavior",
            keys: ["basealign", "lazy-load", "resizeme", "resize-full", "responsive_offset"]
        }, {
            id: "7",
            icon: "eye",
            groupname: "Visibilty",
            keys: ["hiddenunder", "visible-desktop", "visible-notebook", "visible-tablet", "visible-mobile", "show-on-hover"]
        }, {
            id: "8",
            icon: "resize-full",
            groupname: "Sizing",
            keys: ["scaleProportional", "video_data.fullwidth", "video_data.cover", "originalWidth", "originalHeight", "cover_mode", "height", "width", "image-size", "video_height.desktop", "video_height.notebook", "video_height.tablet", "video_height.mobile", "video_width.desktop", "video_width.notebook", "video_width.tablet", "video_width.mobile", "max_height.desktop", "max_height.notebook", "max_height.tablet", "max_height.mobile", "min_height.desktop", "min_height.notebook", "min_height.tablet", "min_height.mobile", "max_width.desktop", "max_width.notebook", "max_width.tablet", "max_width.mobile", "scaleX.desktop", "scaleX.notebook", "scaleX.tablet", "scaleX.mobile", "scaleY.desktop", "scaleY.notebook", "scaleY.tablet", "scaleY.mobile"]
        }, {id: "9", icon: "font", groupname: "Naming and Alias", keys: ["text", "alias"]}, {
            id: "30",
            icon: "resize-vertical",
            groupname: "Order",
            keys: ["order", "p_uid"]
        }, {id: "10", icon: "cancel", groupname: "Deleted", keys: ["deleted"]}, {
            id: "11",
            icon: "plus",
            groupname: "Created",
            keys: ["layer_unavailable"]
        }, {id: "12", icon: "link", groupname: "Source", keys: ["svg.src", "image_url"]}, {
            id: "13",
            icon: "star",
            groupname: "SVG Style",
            keys: ["svg.svgstroke-color", "svg.svgstroke-dasharray", "svg.svgstroke-dashoffset", "svg.svgstroke-width", "svg.svgstroke-hover-color", "svg.svgstroke-hover-dasharray", "svg.svgstroke-hover-dashoffset", "svg.svgstroke-hover-width"]
        }, {
            id: "14",
            icon: "palette",
            groupname: "Main Styling",
            keys: ["static_styles.color.desktop", "static_styles.color.notebook", "static_styles.color.tablet", "static_styles.color.mobile", "static_styles.font-size.desktop", "static_styles.font-size.notebook", "static_styles.font-size.tablet", "static_styles.font-size.mobile", "static_styles.font-weight.desktop", "static_styles.font-weight.notebook", "static_styles.font-weight.tablet", "static_styles.font-weight.mobile", "static_styles.line-height.desktop", "static_styles.line-height.notebook", "static_styles.line-height.tablet", "static_styles.line-height.mobile"]
        }, {
            id: "15",
            icon: "thumbs-up",
            groupname: "Layer Action",
            keys: ["layer_action", "layer_action.action", "layer_action.action_delay", "layer_action.actioncallback", "layer_action.image_link", "layer_action.jump_to_slide", "layer_action.jump_to_slide", "layer_action.link_open_in", "layer_action.link_type", "layer_action.scrollunder_offset", "layer_action.toggle_class", "layer_action.toggle_layer_type", "layer_action.tooltip_event"]
        }, {
            id: "16",
            icon: "droplet",
            groupname: "Styling Text",
            keys: ["deformation.font-family", "deformation.font-style", "deformation.opacity", "deformation.text-align", "deformation.vertical-align", "deformation.display", "deformation.text-decoration"]
        }, {
            id: "17",
            icon: "droplet",
            groupname: "Styling Padding",
            keys: ["deformation.padding", "deformation.padding.0", "deformation.padding.1", "deformation.padding.2", "deformation.padding.3"]
        }, {
            id: "17",
            icon: "droplet",
            groupname: "Styling Margin",
            keys: ["margin.desktop", "margin.notebook", "margin.tablet", "margin.mobile"]
        }, {
            id: "18",
            icon: "droplet",
            groupname: "Styling Corners",
            keys: ["deformation.corner_left", "deformation.corner_right"]
        }, {id: "19", icon: "droplet", groupname: "Styling Background", keys: ["deformation.background-color"]}, {
            id: "20",
            icon: "droplet",
            groupname: "Styling Border",
            keys: ["deformation.border-color", "deformation.border-radius.0", "deformation.border-radius.1", "deformation.border-radius.2", "deformation.border-radius.3", "deformation.border-style", "deformation.border-width"]
        }, {
            id: "21",
            icon: "droplet",
            groupname: "Styling Transforms",
            keys: ["deformation.2d_origin_x", "deformation.2d_origin_y", "deformation.parallax", "deformation.pers", "deformation.scalex", "deformation.scaley", "deformation.skewx", "deformation.skewy", "deformation.text-transform", "deformation.x", "deformation.xrotate", "deformation.y", "deformation.yrotate", "deformation.z"]
        }, {
            id: "22",
            icon: "droplet",
            groupname: "Styling Hover",
            keys: ["hover", "deformation-hover.css_cursor", "deformation-hover.easing"]
        }, {
            id: "23",
            icon: "droplet",
            groupname: "Styling Hover Text",
            keys: ["deformation-hover.color", "deformation-hover.font-family", "deformation-hover.font-style", "deformation-hover.opacity", "deformation-hover.text-align", "deformation-hover.vertical-align", "deformation-hover.text-decoration"]
        }, {
            id: "24",
            icon: "droplet",
            groupname: "Styling Hover Padding",
            keys: ["deformation-hover.padding", "deformation-hover.padding.0", "deformation-hover.padding.1", "deformation-hover.padding.2", "deformation-hover.padding.3"]
        }, {
            id: "24",
            icon: "droplet",
            groupname: "Styling Hover Margin",
            keys: ["deformation-hover.margin", "deformation-hover.margin.0", "deformation-hover.margin.1", "deformation-hover.margin.2", "deformation-hover.margin.3"]
        }, {
            id: "25",
            icon: "droplet",
            groupname: "Styling Hover Corners",
            keys: ["deformation-hover.corner_left", "deformation-hover.corner_right"]
        }, {
            id: "26",
            icon: "droplet",
            groupname: "Styling Hover Background",
            keys: ["deformation-hover.background-color"]
        }, {
            id: "27",
            icon: "droplet",
            groupname: "Styling Hover Border",
            keys: ["deformation-hover.border-color", "deformation-hover.border-radius.0", "deformation-hover.border-radius.1", "deformation-hover.border-radius.2", "deformation-hover.border-radius.3", "deformation-hover.border-style", "deformation-hover.border-width"]
        }, {
            id: "28",
            icon: "droplet",
            groupname: "Styling Hover Transforms",
            keys: ["deformation-hover.2d_origin_x", "deformation-hover.2d_origin_y", "deformation-hover.parallax", "deformation-hover.pers", "deformation-hover.scalex", "deformation-hover.scaley", "deformation-hover.skewx", "deformation-hover.skewy", "deformation-hover.text-transform", "deformation-hover.x", "deformation-hover.xrotate", "deformation-hover.y", "deformation-hover.yrotate", "deformation-hover.z"]
        }, {
            id: "29",
            icon: "video",
            groupname: "Video/Audo Settings",
            keys: ["video_data.urlAudio", "video_data.previewimage", "video_data.link", "video_data.thumb_medium.url", "video_type", "video_data.id", "video_data.video_type", "video_data.title", "video_data.author", "video_data.description", "video_data.args", "video_data.autoplay", "video_data.nextslide", "video_data.forcerewind", "video_data.controls", "video_data.mute", "video_data.stopallvideo", "video_data.allowfullscreen", "video_data.videoloop", "video_data.show_cover_pause", "video_data.start_at", "video_data.end_at", "video_data.volume", "video_data.desc_small", "video_data.thumb_small.url", "video_data.thumb_small.width", "video_data.thumb_small.height", "video_data.thumb_medium.width", "video_data.thumb_medium.height", "video_data.video_height"]
        }], t.addon_callbacks = [], t.set_save_needed = function (a) {
            save_needed = a
        }, t.ulff_core = 0, t.setGlobalAction = function (a) {
            global_action_template = a
        }, t.setGlobalSlideImport = function (a) {
            global_layer_import_template = a
        }, t.getLayout = function () {
            return layout
        }, t.setInitSlideIds = function (a) {
            slideIDs = jQuery.parseJSON(a)
        }, t.setInitLayersJson = function (a) {
            initLayers = jQuery.parseJSON(a)
        }, t.setInitStaticLayersJson = function (a) {
            initStaticLayers = jQuery.parseJSON(a)
        }, t.setInitDemoLayersJson = function (a) {
            initDemoLayers = jQuery.parseJSON(a)
        }, t.setInitDemoSettingsJson = function (a) {
            initDemoSettings = jQuery.parseJSON(a)
        }, t.setInitLayerAnim = function (a) {
            initLayerAnims = jQuery.parseJSON(a)
        }, t.setInitLayerAnimsDefault = function (a) {
            initLayerAnimsDefault = jQuery.parseJSON(a)
        }, t.setInitTransSetting = function (a) {
            transSettings = jQuery.parseJSON(a)
        }, t.updateInitLayerAnim = function (a) {
            initLayerAnims = [], initLayerAnims = a
        }, t.setInitCaptionClasses = function (a) {
            initArrCaptionClasses = jQuery.parseJSON(a)
        }, t.setCaptionClasses = function (a) {
            initArrCaptionClasses = a
        }, t.setInitFontTypes = function (a) {
            initArrFontTypes = jQuery.parseJSON(a)
        }, t.getMaintime = function () {
            return g_slideTime
        }, t.setMaintime = function (a) {
            g_slideTime = a
        }, t.getObjectLength = function (a) {
            var b = 0;
            for (var c in a)b++;
            return b
        }, t.sortFontTypesByUsage = function () {
            for (var a in sgfamilies)for (var b in initArrFontTypes)if (void 0 !== initArrFontTypes[b] && void 0 !== initArrFontTypes[b].label && void 0 !== sgfamilies[a] && initArrFontTypes[b].label.replace(/\ /g, "+") == sgfamilies[a].replace(/\ /g, "+")) {
                void 0 === initArrFontTypes[b].top && (initArrFontTypes[b].top = !0);
                break
            }
            var c = {}, d = 0;
            for (var e in initArrFontTypes)c[d] = initArrFontTypes[e], d++;
            initArrFontTypes = c
        }, t.setVal = function (a, b, c, d, e, f) {
            if (-1 !== jQuery.inArray(b, transSettings))if (d) "object" != typeof a[b] && (a[b] = {}), void 0 == f || 0 == f ? a[b][layout] = c : (a[b].desktop = c, a[b].notebook = c, a[b].tablet = c, a[b].mobile = c); else if (void 0 !== e && null !== e)for (var g in e)void 0 !== a[b] && void 0 !== a[b][e[g]] ? a[b][e[g]] = c : (void 0 === a[b] && (a[b] = {}), a[b][e[g]] = c); else void 0 !== a[b] && void 0 !== a[b][layout] ? a[b][layout] = c : (void 0 === a[b] && (a[b] = {}), a[b][layout] = c); else a[b] = c;
            return a
        }, t.getVal = function (a, b, c) {
            if (c = void 0 === c ? layout : c, void 0 !== a) {
                if (-1 === jQuery.inArray(b, transSettings))return void 0 !== a[b] && "object" != typeof a[b] ? a[b] : void 0;
                if (void 0 !== a[b] && void 0 !== a[b][c])return a[b][c];
                if (void 0 !== a[b] && "object" != typeof a[b])return a[b];
                if (void 0 !== a[b]) {
                    var e = "novalue";
                    switch (c) {
                        case"desktop":
                            void 0 !== a[b].notebook ? (e = a[b].notebook, "notebook") : void 0 !== a[b].tablet ? (e = a[b].tablet, "tablet") : void 0 !== a[b].mobile && (e = a[b].mobile, "mobile");
                            break;
                        case"notebook":
                            void 0 !== a[b].desktop ? (e = a[b].desktop, "desktop") : void 0 !== a[b].tablet ? (e = a[b].tablet, "tablet") : void 0 !== a[b].mobile && (e = a[b].mobile, "mobile");
                            break;
                        case"tablet":
                            void 0 !== a[b].notebook ? (e = a[b].notebook, "notebook") : void 0 !== a[b].desktop ? (e = a[b].desktop, "desktop") : void 0 !== a[b].mobile && (e = a[b].mobile, "mobile");
                            break;
                        case"mobile":
                            void 0 !== a[b].tablet ? (e = a[b].tablet, "tablet") : void 0 !== a[b].notebook ? (e = a[b].notebook, "notebook") : void 0 !== a[b].desktop && (e = a[b].desktop, "desktop")
                    }
                    if ("novalue" != e)return e
                }
            }
        }, t.insertTemplate = function (a) {
            if ("" === add_meta_into) {
                if (-1 == t.selectedLayerSerial)return !1;
                a.lastIndexOf("%") < 0 && a.lastIndexOf("]") < 0 ? jQuery("#layer_text").val(jQuery("#layer_text").val() + "{{" + a + "}}") : jQuery("#layer_text").val(jQuery("#layer_text").val() + a), t.updateLayerFromFields()
            } else"object" == jQuery.type(add_meta_into) ? add_meta_into.val(add_meta_into.val() + "{{" + a + "}}").trigger("change") : jQuery('input[name="' + add_meta_into + '"]').val(jQuery('input[name="' + add_meta_into + '"]').val() + "{{" + a + "}}");
            jQuery("#dialog_template_insert").dialog("close")
        }, t.refreshGridSize = function () {
            var a = jQuery("#hor-css-linear .helplines-offsetcontainer"), b = jQuery("#ver-css-linear .helplines-offsetcontainer"), c = jQuery("#rs-grid-sizes").val(), d = jQuery("#rs-grid-snapto").val(), e = jQuery("#divLayers");
            if ("custom" != c) {
                e.css({position: "relative"}), e.find("#helpergrid").remove(), e.append('<div id="helpergrid" style="position:absolute;top:0px;left:0px;position:absolute;z-index:0;width:100%;height:100%"></div>');
                var f = e.find("#helpergrid");
                if (c > 4) {
                    for (var g = 1; g < e.height() / c; g++) {
                        var h = g * c;
                        f.append('<div class="helplines" style="background-color:#4affff;width:100%;height:1px;position:absolute;left:0px;top:' + h + 'px"></div>')
                    }
                    for (var g = 1; g < e.width() / c; g++) {
                        var h = g * c;
                        f.append('<div class="helplines" style="background-color:#4affff;height:100%;width:1px;position:absolute;top:0px;left:' + h + 'px"></div>')
                    }
                }
                punchgs.TweenLite.to(a, .3, {autoAlpha: 0}), punchgs.TweenLite.to(b, .3, {autoAlpha: 0})
            } else {
                punchgs.TweenLite.to(a, .3, {autoAlpha: 1}), punchgs.TweenLite.to(b, .3, {autoAlpha: 1}), e.find("#helpergrid").remove();
                try {
                    a.find(".helplines").draggable("destroy")
                } catch (a) {
                }
                try {
                    b.find(".helplines").draggable("destroy")
                } catch (a) {
                }
                a.find(".helplines").draggable({
                    handle: ".helpline-drag",
                    axis: "x"
                }), b.find(".helplines").draggable({handle: ".helpline-drag", axis: "y"})
            }
            for (var i in t.arrLayers) {
                t.getHtmlLayerFromSerial(i).draggable({drag: t.onLayerDrag, snap: d, snapMode: "outer"})
            }
        }, t.add_missing_unique_ids = function () {
            var a = t.getSimpleLayers(), b = {};
            for (var c in a)void 0 === a[c].unique_id ? b[c] = !0 : a[c].unique_id > unique_layer_id && (unique_layer_id = a[c].unique_id);
            for (var c in b) {
                unique_layer_id++;
                var d = {};
                d.unique_id = unique_layer_id, update_layer_changes = !1, t.updateLayer(c, d), update_layer_changes = !0
            }
        }, t.init = function (slideTime) {
            function edit_content_current_layer() {
                var a = t.getCurrentLayer();
                if (null !== a)switch (a.type) {
                    case"text":
                    case"button":
                        t.showHideContentEditor(!0), jQuery("#quick-layers-wrapper").slideUp(300), jQuery(".current-active-main-toolbar").removeClass("opened"), jQuery("#button_show_all_layer i").removeClass("eg-icon-up").addClass("eg-icon-menu"), jQuery("#layer_text").focus();
                        break;
                    case"video":
                        var b = a.video_data;
                        UniteAdminRev.openVideoDialog(function (a) {
                            var b = getVideoObjLayer(a);
                            t.updateCurrentLayer(b), updateHtmlLayersFromObject(t.selectedLayerSerial), t.updateLayerFormFields(t.selectedLayerSerial), redrawLayerHtml(t.selectedLayerSerial), scaleNormalVideo()
                        }, b);
                        break;
                    case"image":
                        "objectlibrary" === a.image_library ? (jQuery("#dialog_addobj").data("changeimg", !0), jQuery("#dialog_addobj").data("changeimgserial", a.serial), t.callObjectLibraryDialog("object")) : UniteAdminRev.openAddImageDialog(rev_lang.select_layer_image, function (a) {
                            var b = {};
                            b.image_url = a, t.updateCurrentLayer(b), redrawLayerHtml(t.selectedLayerSerial), t.add_layer_change(), scaleNormal()
                        });
                        break;
                    case"shape":
                        break;
                    case"svg":
                        jQuery("#dialog_addobj").data("changesvg", !0), jQuery("#dialog_addobj").data("changesvgserial", a.serial), t.callObjectLibraryDialog("object");
                        break;
                    case"audio":
                        var b = a.video_data;
                        UniteAdminRev.openVideoDialog(function (b) {
                            var c = getVideoObjLayer(b);
                            t.updateCurrentLayer(c), updateHtmlLayersFromObject(t.selectedLayerSerial), t.updateLayerFormFields(t.selectedLayerSerial), redrawLayerHtml(t.selectedLayerSerial), u.drawAudioMap(a)
                        }, b, "audio")
                }
            }

            void 0 != jQuery().draggable && void 0 != jQuery().autocomplete || jQuery("#jqueryui_error_message").show(), jQuery("body").addClass("rs-layer-editor-view"), g_slideTime = Number(slideTime), u.init(g_slideTime), container = jQuery(containerID);
            var demoRows = new Array;
            if (initDemoLayers) {
                var len = initDemoLayers.length;
                if (len)for (var i = 0; i < len; i++)for (var key in initDemoLayers[i])curDemoSlideID = i, "row" === initDemoLayers[i][key].type || "column" === initDemoLayers[i][key].type ? demoRows.push(initDemoLayers[i][key].unique_id) : -1 == jQuery.inArray(initDemoLayers[i][key].p_uid, demoRows) && addLayer(initDemoLayers[i][key], !0, !0, !0); else for (var i in initDemoLayers)for (var key in initDemoLayers[i])curDemoSlideID = i, "row" === initDemoLayers[i][key].type || "column" === initDemoLayers[i][key].type ? demoRows.push(initDemoLayers[i][key].unique_id) : -1 == jQuery.inArray(initDemoLayers[i][key].p_uid, demoRows) && addLayer(initDemoLayers[i][key], !0, !0, !0)
            }
            u.organiseGroupsAndLayer(!1, !0);
            var len = initLayers.length;
            if (initLayers) {
                if (len) {
                    for (var i = 0; i < len; i++)initLayers[i].addedToStage = !1;
                    for (var i = 0; i < len && "row" !== initLayers[i].type; i++)"row" !== initLayers[i].type && "column" !== initLayers[i].type && ("group" === initLayers[i].type && -1 !== initLayers[i].p_uid || (initLayers[i].addedToStage = !0, addLayer(initLayers[i], !0, !1, !0)));
                    t.add_missing_unique_ids();
                    for (var i = 0; i < len && "row" != initLayers[i].type; i++)!0 !== initLayers[i].addedToStage && "row" !== initLayers[i].type && "column" !== initLayers[i].type && "group" !== initLayers[i].type && (initLayers[i].addedToStage = !0, addLayer(initLayers[i], !0, !1, !0));
                    t.add_missing_unique_ids();
                    for (var i = 0; i < len; i++)!0 === initLayers[i].addedToStage || "group" !== initLayers[i].type && "row" !== initLayers[i].type || (initLayers[i].addedToStage = !0, addLayer(initLayers[i], !0, !1, !0));
                    t.add_missing_unique_ids();
                    for (var i = 0; i < len; i++)"column" === initLayers[i].type && (initLayers[i].addedToStage = !0, addLayer(initLayers[i], !0, !1, !0));
                    t.add_missing_unique_ids();
                    for (var i = 0; i < len; i++)!0 !== initLayers[i].addedToStage && addLayer(initLayers[i], !0, !1, !0)
                } else {
                    for (var i in initLayers)initLayers[i].addedToStage = !1;
                    for (var i in initLayers) {
                        if ("row" === initLayers[i].type)break;
                        "row" !== initLayers[i].type && "column" !== initLayers[i].type && ("group" === initLayers[i].type && -1 !== initLayers[i].p_uid || (initLayers[i].addedToStage = !0, addLayer(initLayers[i], !0, !1, !0)))
                    }
                    t.add_missing_unique_ids();
                    for (var i in initLayers) {
                        if ("row" == initLayers[i].type)break;
                        !0 !== initLayers[i].addedToStage && "row" !== initLayers[i].type && "column" !== initLayers[i].type && "group" !== initLayers[i].type && (initLayers[i].addedToStage = !0, addLayer(initLayers[i], !0, !1, !0))
                    }
                    t.add_missing_unique_ids();
                    for (var i in initLayers)!0 === initLayers[i].addedToStage || "group" !== initLayers[i].type && "row" !== initLayers[i].type || (initLayers[i].addedToStage = !0, addLayer(initLayers[i], !0, !1, !0));
                    t.add_missing_unique_ids();
                    for (var i in initLayers)"column" === initLayers[i].type && (initLayers[i].addedToStage = !0, addLayer(initLayers[i], !0, !1, !0));
                    t.add_missing_unique_ids();
                    for (var i in initLayers)!0 !== initLayers[i].addedToStage && addLayer(initLayers[i], !0, !1, !0)
                }
                t.add_missing_unique_ids()
            }
            u.timeLineTableDimensionUpdate(), u.updateAllLayerTimeline(), disableFormFields(), initMainEvents(), initButtons(), initHtmlFields(), initAlignTable(), initLoopFunctions(), scaleAndResetLayerInit(), positionChanged_Core(), initBackgroundFunctions(), jQuery("#tp-thelistofclasses ul, #tp-thelistoffonts ul").bind("scroll", function () {
                var a = jQuery(this), b = a.scrollTop(), c = a.data("olds"), f = (a.parent().height(), void 0 == c || c < b ? "up" : "down");
                a.find(".ui-autocomplete-category").each(function (a) {
                    var c = jQuery(this), d = c.next().position().top, e = 0 == a ? 0 : 15;
                    "up" == f && d < 50 || "down" == f && d < 0 - e ? (c.css({
                        position: "absolute",
                        top: b - e,
                        zIndex: a
                    }), c.next().css({marginTop: 50 + e})) : (c.css({
                        position: "relative",
                        top: 0,
                        zIndex: a
                    }), c.next().css({marginTop: 0}))
                }), a.data("olds", b)
            }), jQuery(".bgsrcchanger").each(function () {
                jQuery(this).attr('checked') === 'checked' && initSliderMainOptions(jQuery(this))
            }), jQuery(".bgsrcchanger").click(function () {
                initSliderMainOptions(jQuery(this))
            }), jQuery("#alt_option").change(function () {
                "custom" == jQuery("#alt_option").val() ? jQuery("#alt_attr").show() : jQuery("#alt_attr").hide()
            }), jQuery("#title_option").change(function () {
                "custom" == jQuery("#title_option").val() ? jQuery("#title_attr").show() : jQuery("#title_attr").hide()
            }), initDisallowCaptionsOnClick(), jQuery(".open_right_panel").click(function () {
                var a = jQuery(".layer_props_wrapper");
                a.hasClass("openeed") ? a.removeClass("openeed") : a.addClass("openeed")
            }), jQuery("#rs-grid-sizes, #rs-grid-snapto").change(function () {
                t.refreshGridSize()
            }), jQuery("#layer_alt_option").change(function () {
                "custom" == jQuery("#layer_alt_option").val() ? jQuery("#layer_alt").show() : jQuery("#layer_alt").hide()
            }), jQuery('select[name="rev_show_the_slides"]').change(function () {
                var a = jQuery("#divbgholder").find(".slotholder");
                if (jQuery(".demo_layer").addClass("invisible_demolayer"), a.addClass("trans_bg"), a.css("background-image", "none"), a.css("background-color", "transparent"), a.css("background-position", "top center"), a.css("background-size", "cover"), a.css("background-repeat", "no-repeat"), jQuery(".tp-bgimg").css({
                        backgroundImage: "none",
                        backgroundColor: "transparent"
                    }), "none" !== jQuery(this).val()) {
                    var b = jQuery(this).val();
                    if (jQuery(".demo_layer_" + b).show(), jQuery(".demo_layer_" + b).removeClass("invisible_demolayer"), void 0 !== initDemoSettings[b]) {
                        var c = "percentage" == initDemoSettings[b].bg_fit ? initDemoSettings[b].bg_fit_x + "% " + initDemoSettings[b].bg_fit_y + "% " : initDemoSettings[b].bg_fit, d = "percentage" == initDemoSettings[b].bg_position ? initDemoSettings[b].bg_position_x + "% " + initDemoSettings[b].bg_position_y + "% " : initDemoSettings[b].bg_position;
                        switch ("contain" == initDemoSettings[b].bg_fit ? jQuery("#divLayers-wrapper").css("maxWidth", jQuery("#divbgholder").css("minWidth")) : jQuery("#divLayers-wrapper").css("maxWidth", "none"), initDemoSettings[b].background_type) {
                            case"image":
                            case"meta":
                            case"streamyoutube":
                            case"streamvimeo":
                            case"streaminstagram":
                            case"youtube":
                            case"vimeo":
                            case"html5":
                                var e = initDemoSettings[b].image;
                                jQuery("#the_image_source_url").html(e), a.find(".defaultimg, .slotslidebg").css("background-image", "url('" + e + "')"), a.find(".defaultimg, .slotslidebg").css("background-color", "transparent"), a.find(".defaultimg, .slotslidebg").css("background-size", c), a.find(".defaultimg, .slotslidebg").css("background-position", d), a.find(".defaultimg, .slotslidebg").css("background-repeat", initDemoSettings[b].bg_repeat), a.find(".defaultimg, .slotslidebg").removeClass("trans_bg");
                                break;
                            case"trans":
                                a.find(".defaultimg, .slotslidebg").css("background-image", "none"), a.find(".defaultimg, .slotslidebg").css("background-color", "transparent"), a.find(".defaultimg, .slotslidebg").addClass("trans_bg");
                                break;
                            case"solid":
                                a.find(".defaultimg, .slotslidebg").css("background-image", "none"), a.find(".defaultimg, .slotslidebg").removeClass("trans_bg");
                                var f = window.RevColor.get(initDemoSettings[b].slide_bg_color);
                                a.find(".defaultimg, .slotslidebg").css("background-color", f);
                                break;
                            case"external":
                                var e = initDemoSettings[b].slide_bg_external;
                                jQuery("#the_image_source_url").html(e), a.find(".defaultimg, .slotslidebg").css("background-image", "url('" + e + "')"), a.find(".defaultimg, .slotslidebg").css("background-color", "transparent"), a.find(".defaultimg, .slotslidebg").css("background-size", c), a.find(".defaultimg, .slotslidebg").css("background-position", d), a.find(".defaultimg, .slotslidebg").css("background-repeat", initDemoSettings[b].bg_repeat), a.find(".defaultimg, .slotslidebg").removeClass("trans_bg")
                        }
                    }
                }
                jQuery("#divbgholder").css({backgroundImage: "none", backgroundColor: "transparent"})
            }), jQuery("#thumb_for_admin").on("change", function () {
                t.changeSlotBGs()
            }), jQuery("#slide_thumb_button_preview").find("div").length > 0 && jQuery(".show_on_thumbnail_exist").show(), jQuery(".rs-slide-device_selector").click(function () {
                if (0 != rev_adv_resp_sizes) {
                    var a = jQuery(this).data("val");
                    layout = a, u.layout = a;
                    var b = 0;
                    jQuery(".row-zone-container").each(function () {
                        b += jQuery(this).height()
                    }), b = b < rev_sizes[a][1] ? rev_sizes[a][1] : b, jQuery(".tp-bgimg.defaultimg, #divLayers").css({
                        width: rev_sizes[a][0],
                        height: b
                    }), "auto" != __slidertype ? (jQuery("#divbgholder").css({
                        minWidth: rev_sizes[a][0],
                        maxWidth: "100%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }), jQuery("#divbgholder").css({
                        minHeight: b,
                        height: b
                    }), jQuery(".slotholder .tp-bgimg.defaultimg").css({
                        minWidth: rev_sizes[a][0],
                        maxWidth: "100%"
                    }), jQuery(".tp-bgimg.defaultimg").css({width: "100%"})) : (jQuery("#divbgholder").css({
                        minWidth: rev_sizes[a][0],
                        maxWidth: rev_sizes[a][0],
                        marginLeft: "auto",
                        marginRight: "auto"
                    }), jQuery("#divbgholder").css({
                        minHeight: b,
                        height: b
                    }), jQuery(".slotholder .tp-bgimg.defaultimg").css({
                        minWidth: rev_sizes[a][0],
                        maxWidth: rev_sizes[a][0]
                    })), jQuery("#divLayers-wrapper").css("height", b + 1), jQuery(".rs-slide-device_selector").removeClass("selected"), jQuery(this).addClass("selected"), u.resetSlideAnimations(), jQuery(window).trigger("resize"), redrawAllLayerHtml(), t.setMiddleRowZone(100)
                }
            }), jQuery("#divbgholder .oldslotholder, #divbgholder .slotholder, #divbgholder .defaultimg, #top-toolbar-wrapper, #layer-settings-toolbar-bottom").on("click", function (a) {
                1 === (a.which || a.button) && cm.toggleMenuOff(), a.target == this && (u.checkMultipleSelectedItems(!0), unselectLayers())
            });
            var cfith = function (a, b) {
                return a["deformation-hover"][b] = a.deformation[b], a
            }, cfhti = function (a, b) {
                return a.deformation[b] = a["deformation-hover"][b], a
            };
            jQuery(".copy-from-idle").click(function () {
                if (confirm(rev_lang.copy_styles_to_idle_from_hover)) {
                    var a = t.getCurrentLayer();
                    a["deformation-hover"].color = t.getVal(a.static_styles, "color"), a["deformation-hover"]["2d_rotation"] = a["2d_rotation"], a = cfith(a, "2d_origin_x"), a = cfith(a, "2d_origin_y"), a = cfith(a, "background-color"), a = cfith(a, "border-color"), a = cfith(a, "border-radius"), a = cfith(a, "border-style"), a = cfith(a, "border-width"), a = cfith(a, "opacity"), a = cfith(a, "scalex"), a = cfith(a, "scaley"), a = cfith(a, "skewx"), a = cfith(a, "skewy"), a = cfith(a, "text-decoration"), a = cfith(a, "x"), a = cfith(a, "xrotate"), a = cfith(a, "y"), a = cfith(a, "yrotate"), a = cfith(a, "z"), t.updateLayerFormFields(t.selectedLayerSerial), t.updateLayerFromFields()
                }
            }), jQuery(".copy-from-hover").click(function () {
                if (confirm(rev_lang.copy_styles_to_hover_from_idle)) {
                    var a = t.getCurrentLayer();
                    a["2d_rotation"] = a["deformation-hover"]["2d_rotation"], a.static_styles = t.setVal(a.static_styles, "color", a["deformation-hover"].color, !1), a = cfhti(a, "2d_origin_x"), a = cfhti(a, "2d_origin_y"), a = cfhti(a, "background-color"), a = cfhti(a, "border-color"), a = cfhti(a, "border-radius"), a = cfhti(a, "border-style"), a = cfhti(a, "border-width"), a = cfhti(a, "opacity"), a = cfhti(a, "scalex"), a = cfhti(a, "scaley"), a = cfhti(a, "skewx"), a = cfhti(a, "skewy"), a = cfhti(a, "text-decoration"), a = cfhti(a, "x"), a = cfhti(a, "xrotate"), a = cfhti(a, "y"), a = cfhti(a, "yrotate"), a = cfhti(a, "z"), t.updateLayerFormFields(t.selectedLayerSerial), t.updateLayerFromFields()
                }
            }), jQuery("#button_css_reset").click(function () {
                var a = t.getCurrentLayer();
                null !== a && (t.reset_to_default_static_styles(a), updateSubStyleParameters(a, !0), t.updateLayerFromFields())
            });
            var getGridDimension = function () {
                var a = jQuery("#divLayers"), b = a.offset(), c = jQuery("#divLayers-wrapper").offset();
                return {
                    top: b.top - c.top,
                    left: b.left - c.left,
                    bottom: b.top - c.top + a.height(),
                    right: b.left - c.left + a.width()
                }
            };
            jQuery("body").on("dblclick", ".layer_selected", edit_content_current_layer), setTimeout(function () {
                jQuery("#form_slide_params").find("input, select").on("change", function () {
                    t.set_save_needed(!0)
                })
            }, 500), jQuery("body").on("click", ".button_change_image_source, .button_edit_layer, .button_change_video_settings, .button_reset_size, .button_edit_shape, .button_change_audio_settings, .button_change_svg_settings", function () {
                jQuery(":focus").blur();
                var a = jQuery(this), b = a.closest(".layer-toolbar-li").data("serial");
                t.setLayerSelected(b), a.hasClass("button_reset_size") ? resetCurrentElementSize() : edit_content_current_layer()
            }), jQuery("body").on("click", ".layer-title-with-icon", function () {
                var a = jQuery(this), b = a.find("input").is(":focus");
                b || jQuery(":focus").blur();
                var c = jQuery(this), d = c.closest(".layer-toolbar-li").data("serial");
                t.setLayerSelected(d, !1, b)
            }), jQuery("#button_edit_layer, #button_change_video_settings,#button_change_image_source").click(edit_content_current_layer), jQuery("body").on("click", ".button_delete_layer, #button_delete_layer", function () {
                jQuery(":focus").blur();
                var a = jQuery(this);
                if (a.hasClass("button-now-disabled"))return !1;
                if (a.hasClass("button_delete_layer")) {
                    var b = a.closest(".layer-toolbar-li").data("serial");
                    t.setLayerSelected(b)
                }
                var c = t.getCurrentLayer();
                if ("column" === c.type)return !1;
                if (("group" === c.type || "row" === c.type) && t.getLayersInGroup(c.unique_id).layers.length > 0) jQuery("#delete-full-group-dialog").dialog({
                    width: 600,
                    open: function () {
                    },
                    buttons: [{
                        text: "Remove All Layers", click: function () {
                            var a = t.getLayersInGroup(c.unique_id);
                            jQuery.each(a.layers, function (a, b) {
                                t.deleteLayer(b.serial)
                            }), jQuery.each(a.columns, function (a, b) {
                                t.deleteLayer(b.serial)
                            }), t.deleteLayer(c.serial), u.organiseGroupsAndLayer(!0), jQuery(this).dialog("close")
                        }
                    }, {
                        text: "Move Layers to Root", click: function () {
                            var a = t.getLayersInGroup(c.unique_id);
                            jQuery.each(a.layers, function (a, b) {
                                b.p_uid = -1
                            }), jQuery.each(a.columns, function (a, b) {
                                t.deleteLayer(b.serial)
                            }), t.deleteLayer(c.serial), u.organiseGroupsAndLayer(!0), jQuery(this).dialog("close")
                        }
                    }, {
                        text: "Cancel Action", click: function () {
                            jQuery(this).dialog("close")
                        }
                    }]
                }); else if (confirm(rev_lang.delete_layer)) {
                    if (a.hasClass("button_delete_layer")) {
                        var b = a.closest(".layer-toolbar-li").data("serial");
                        t.setLayerSelected(b)
                    }
                    deleteCurrentLayer(), unselectLayers()
                }
            }), t.makeRowSortableDroppable(), jQuery("body").on("click", ".button_duplicate_layer, #button_duplicate_layer", function () {
                jQuery(":focus").blur();
                var a = jQuery(this);
                if (a.hasClass("button-now-disabled"))return !1;
                if (a.hasClass("button_duplicate_layer")) {
                    var b = a.closest(".layer-toolbar-li").data("serial");
                    t.setLayerSelected(b)
                }
                return duplicateCurrentLayer(), !1
            }), t.showHideContentEditor(!1), t.changeSlotBGs(), jQuery("#hide_layer_content_editor").click(function () {
                t.showHideContentEditor(!1)
            }), jQuery("#layer_animation, #layer_endanimation").change(function () {
                var a = "layer_animation" == jQuery(this).attr("id") ? "in" : "out", b = jQuery(this).val(), c = !1;
                for (var d in initLayerAnims)if ("custom" + a + "-" + initLayerAnims[d].id == b) {
                    switch (a) {
                        case"in":
                            setNewAnimFromObj("start", initLayerAnims[d].params);
                            break;
                        case"out":
                            setNewAnimFromObj("end", initLayerAnims[d].params)
                    }
                    c = !0;
                    break
                }
                if (0 == c)for (var d in initLayerAnimsDefault)if (d == b) {
                    switch (a) {
                        case"in":
                            setNewAnimFromObj("start", initLayerAnimsDefault[d].params);
                            break;
                        case"out":
                            setNewAnimFromObj("end", initLayerAnimsDefault[d].params)
                    }
                    break
                }
                "out" == a && "auto" == b && jQuery("#masking-start").attr('checked') === 'checked' && 1 == jQuery("#masking-start").attr('checked') === 'checked' && (jQuery("#masking-end").attr("checked", !0), RevSliderSettings.onoffStatus(jQuery("#masking-end")), jQuery(".mask-end-settings").show()), t.checkAvailableAnimationFields(), t.updateLayerFromFields()
            }), jQuery("#layer_caption").change(function () {
                UniteCssEditorRev.checkIfHandleExists(jQuery(this).val()) ? jQuery("#extra_style_settings").removeClass("normal_rename normal_save save_rename save_save").addClass("normal_rename") : jQuery("#extra_style_settings").removeClass("normal_rename normal_save save_rename save_save").addClass("normal_save")
            }), jQuery(".save-current-animin, .save-current-animout").click(function () {
                var a = jQuery(this).hasClass("save-current-animin") ? "start" : "end", b = "start" == a ? jQuery('select[name="layer_animation"]').val() : jQuery('select[name="layer_endanimation"]').val();
                if ("custom" !== b)for (var c in initLayerAnimsDefault)if (c === b)return alert(rev_lang.cant_modify_default_anims), !1;
                var d = {};
                if (d.params = createNewAnimObj(a), "custom" == b) {
                    jQuery("#rs-save-under-animation").val("");
                    var e = t.getCurrentLayer();
                    "start" == a && void 0 !== e["orig-anim"] && jQuery("#rs-save-under-animation").val(e["orig-anim"]), "end" == a && void 0 !== e["orig-endanim"] && jQuery("#rs-save-under-animation").val(e["orig-endanim"]), jQuery("#dialog_save_animation").dialog({
                        modal: !0,
                        width: 300,
                        height: 200,
                        resizable: !1,
                        create: function (a) {
                            jQuery(a.target).parent().find(".ui-dialog-titlebar").addClass("tp-slider-new-dialog-title")
                        },
                        buttons: {
                            Save: function () {
                                var b = jQuery("#rs-save-under-animation").val(), c = UniteAdminRev.sanitize_input(b), e = !0;
                                for (var f in initLayerAnimsDefault)if (initLayerAnimsDefault[f].handle == c)return alert(rev_lang.name_is_default_animations_cant_be_changed), !1;
                                for (var f in initLayerAnims)if (initLayerAnims[f].handle == c) {
                                    e = "start" == a ? "customin" : "customout", e += "-" + initLayerAnims[f].id;
                                    break
                                }
                                d.handle = c, d.params.type = "start" == a ? "customin" : "customout", !0 === e ? (updateAnimInDb(c, d, !1), jQuery(this).dialog("close")) : confirm(rev_lang.override_animation) && (updateAnimInDb(e, d, !0), jQuery(this).dialog("close"))
                            }, Cancel: function () {
                                jQuery(this).dialog("close")
                            }
                        }
                    })
                } else d.params.type = "start" == a ? "customin" : "customout", confirm(rev_lang.overwrite_animation) && updateAnimInDb(b, d, !0)
            }), jQuery(".save-as-current-animin, .save-as-current-animout").click(function () {
                var a = jQuery(this).hasClass("save-as-current-animin") ? "start" : "end";
                jQuery(this).hasClass("save-as-current-animin") ? jQuery("#layer_animation").val() : jQuery("#layer_endanimation").val();
                currentAnimationType = jQuery(this).hasClass("save-as-current-animin") ? "customin" : "customout", jQuery("#dialog_save_as_animation").dialog({
                    modal: !0,
                    width: 300,
                    height: 200,
                    resizable: !1,
                    create: function (a) {
                        jQuery(a.target).parent().find(".ui-dialog-titlebar").addClass("tp-slider-new-dialog-title")
                    },
                    buttons: {
                        Save: function () {
                            var b = jQuery("#rs-save-as-animation").val(), c = UniteAdminRev.sanitize_input(b), d = !1, e = {};
                            for (var f in initLayerAnimsDefault)if (f == c) {
                                d = !0;
                                break
                            }
                            for (var f in initLayerAnims)if (initLayerAnims[f].handle == c) {
                                d = !0, c = "start" == a ? "customin" : "customout", c += "-" + initLayerAnims[f].id;
                                break
                            }
                            var g = !1;
                            if (d) {
                                if (!confirm(rev_lang.override_animation))return !1;
                                g = !0
                            }
                            e.params = createNewAnimObj(a), e.handle = c, e.params.type = currentAnimationType, updateAnimInDb(c, e, g), jQuery(this).dialog("close")
                        }, Cancel: function () {
                            jQuery(this).dialog("close")
                        }
                    }
                })
            }), jQuery(".rename-current-animin, .rename-current-animout").click(function () {
                var a = jQuery(this).hasClass("rename-current-animin") ? jQuery("#layer_animation").val() : jQuery("#layer_endanimation").val(), b = jQuery(this).hasClass("rename-current-animin") ? jQuery("#layer_animation option:selected").text() : jQuery("#layer_endanimation option:selected").text();
                if ("custom" !== a)for (var c in initLayerAnimsDefault)if (c === a)return alert(rev_lang.cant_modify_default_anims), !1;
                if ("custom" == a)return !1;
                var d = a.replace("customin-", "").replace("customout-", "");
                jQuery("#rs-rename-animation").val(b), jQuery("#dialog_rename_animation").dialog({
                    modal: !0,
                    width: 300,
                    height: 200,
                    resizable: !1,
                    create: function (a) {
                        jQuery(a.target).parent().find(".ui-dialog-titlebar").addClass("tp-slider-new-dialog-title")
                    },
                    buttons: {
                        Rename: function () {
                            var a = jQuery("#rs-rename-animation").val(), b = UniteAdminRev.sanitize_input(a), c = !1, e = !1;
                            for (var f in initLayerAnimsDefault)if (f == b) {
                                e = !0;
                                break
                            }
                            var g = "";
                            for (var f in initLayerAnims)if (f == b && (e = !0), initLayerAnims[f].id == d) {
                                c = !0, g = initLayerAnims[f].id;
                                break
                            }
                            return e ? (alert(rev_lang.anim_with_handle_exists), !1) : c ? (renameAnimInDb(g, b), jQuery(this).dialog("close"), !1) : void 0
                        }, Cancel: function () {
                            jQuery(this).dialog("close")
                        }
                    }
                })
            }), jQuery("#delete-current-animin, #delete-current-animout").click(function () {
                var a = "delete-current-animin" == jQuery(this).attr("id") ? jQuery("#layer_animation").val() : jQuery("#layer_endanimation").val(), b = "delete-current-animin" == jQuery(this).attr("id") ? jQuery("#layer_animation option:selected").text() : jQuery("#layer_endanimation option:selected").text();
                a.indexOf("custom") > -1 && "custom" != a ? confirm(rev_lang.really_delete_anim + ' "' + b + '"?') && deleteAnimInDb(a) : alert(rev_lang.default_animations_cant_delete)
            }), jQuery("#add_customanimation_in").click(function () {
                currentAnimationType = "customin";
                var a = jQuery(this), b = jQuery("#extra_start_animation_settings"), c = jQuery("#extra_end_animation_settings");
                "block" == b.css("display") ? (b.hide(200), a.removeClass("selected")) : (b.show(200), a.addClass("selected")), c.hide(200)
            }), jQuery("#add_customanimation_out").click(function () {
                currentAnimationType = "customout";
                var a = jQuery(this), b = jQuery("#extra_start_animation_settings"), c = jQuery("#extra_end_animation_settings");
                "block" == c.css("display") ? (c.hide(200), a.removeClass("selected")) : (c.show(200), a.addClass("selected")), b.hide(200)
            }), jQuery("#reset-current-animin, #reset-current-animout").click(function () {
                var a = jQuery(this).hasClass("reset-current-animin") ? "start" : "end", b = t.getCurrentLayer();
                "start" == a && void 0 !== b["orig-anim-handle"] && jQuery('#layer_animation').val(b["orig-anim-handle"]).change(), "end" == a && void 0 !== b["orig-endanim-handle"] && jQuery('#layer_endanimation').val(b["orig-endanim-handle"]).change()
            }), jQuery("#button_edit_css, #style-morestyle, .close_extra_settings").click(function () {
                var a = jQuery("#extra_style_settings"), b = jQuery("#button_edit_css"), c = jQuery("#style-morestyle");
                "block" == a.css("display") ? (a.hide(200), b.removeClass("selected"), c.removeClass("showmore")) : (a.show(200), b.addClass("selected"), c.addClass("showmore"))
            }), jQuery(".rename-current-css").click(function () {
                jQuery("#rs-rename-css").val(jQuery("#layer_caption").val()), jQuery("#dialog_rename_css").dialog({
                    modal: !0,
                    resizable: !1,
                    width: 400,
                    closeOnEscape: !0,
                    create: function (a) {
                        jQuery(a.target).parent().find(".ui-dialog-titlebar").addClass("tp-slider-new-dialog-title")
                    },
                    buttons: {
                        Rename: function () {
                            jQuery("#rs-rename-css").val(UniteAdminRev.sanitize_input(jQuery("#rs-rename-css").val()));
                            var a = jQuery("#rs-rename-css").val();
                            if ("" != a) {
                                var b = jQuery("#layer_caption").val(), c = UniteCssEditorRev.checkIfHandleExists(a);
                                if (!1 === UniteCssEditorRev.checkIfHandleExists(b))return alert(rev_lang.css_orig_name_does_not_exists), !1;
                                if (!1 !== c || b == a)return alert(rev_lang.css_name_already_exists), !1;
                                UniteCssEditorRev.renameStylesInDb(b, a)
                            }
                        }
                    }
                })
            }), jQuery(".save-as-current-css").click(function () {
                jQuery("#rs-save-as-css").val(jQuery("#layer_caption").val()), jQuery("#dialog_save_as_css").dialog({
                    modal: !0,
                    resizable: !1,
                    width: 400,
                    closeOnEscape: !0,
                    create: function (a) {
                        jQuery(a.target).parent().find(".ui-dialog-titlebar").addClass("tp-slider-new-dialog-title")
                    },
                    buttons: {
                        Save: function () {
                            jQuery("#rs-save-as-css").val(UniteAdminRev.sanitize_input(jQuery("#rs-save-as-css").val()));
                            var a = jQuery("#rs-save-as-css").val();
                            if ("" != a) {
                                if (!1 !== UniteCssEditorRev.checkIfHandleExists(a))return alert(rev_lang.css_name_already_exists), !1;
                                UniteCssEditorRev.saveStylesInDb(a, !0, jQuery("#dialog_save_as_css"))
                            }
                        }
                    }
                })
            }), jQuery(".delete-current-css").click(function () {
                if (!1 === confirm(rev_lang.delete_this_caption))return !1;
                var a = jQuery("#layer_caption").val(), b = UniteCssEditorRev.checkIfHandleExists(a);
                if (!1 === b)return alert(rev_lang.css_name_does_not_exists), !1;
                UniteCssEditorRev.deleteStylesInDb(a, b)
            }), jQuery(".save-current-css").click(function () {
                if (confirm(rev_lang.this_will_change_the_class)) {
                    var a = jQuery("#layer_caption").val();
                    !1 !== UniteCssEditorRev.checkIfHandleExists(a) ? UniteCssEditorRev.saveStylesInDb(a, !1) : UniteCssEditorRev.saveStylesInDb(a, !0)
                }
            }), jQuery(".reset-current-css").click(function () {
                jQuery('input[name="rs-css-set-on[]"]').each(function () {
                    jQuery(this).attr("checked", !0)
                }), jQuery('input[name="rs-css-include[]"]').each(function () {
                    jQuery(this).attr("checked", !0)
                });
                var a = t.getCurrentLayer();
                void 0 !== a.style && jQuery("#dialog-change-style-from-css").dialog({
                    buttons: {
                        OK: function () {
                            var b = !1, c = {device: [], include: []};
                            if (jQuery('input[name="rs-css-set-on[]"]').each(function () {
                                    jQuery(this).attr('checked') === 'checked' && (b = !0, c.device.push(jQuery(this).val()))
                                }), jQuery('input[name="rs-css-include[]"]').each(function () {
                                    jQuery(this).attr('checked') === 'checked' && c.include.push(jQuery(this).val())
                                }), !b)return alert(rev_lang.select_at_least_one_device_type), !0;
                            a.style = jQuery("#layer_caption").val(), t.reset_to_default_static_styles(a, c.include, c.device), updateSubStyleParameters(a, !0), jQuery("#layer_caption").change(), t.updateLayerFromFields(), jQuery("#dialog-change-style-from-css").dialog("close")
                        }, Close: function () {
                            jQuery("#dialog-change-style-from-css").dialog("close")
                        }
                    }, minWidth: 275, minHeight: 365, modal: !0, dialogClass: "tpdialogs", create: function (a) {
                        jQuery(a.target).parent().find(".ui-dialog-titlebar").addClass("tp-slider-new-dialog-title")
                    }, close: function (a, b) {
                    }, open: function () {
                        jQuery(".rs-style-device_input").each(function () {
                            var a = jQuery(this);
                            "checked" === a.attr("checked") ? a.siblings(".rs-style-device_selector_prev").addClass("selected") : a.siblings(".rs-style-device_selector_prev").removeClass("selected")
                        })
                    }
                })
            }), jQuery("body").on("click change", ".rs-style-device_input", function () {
                var a = jQuery(this);
                "checked" === a.attr("checked") ? a.siblings(".rs-style-device_selector_prev").addClass("selected") : a.siblings(".rs-style-device_selector_prev").removeClass("selected")
            }), jQuery(".rs-layer-animation-settings-tabs li, .rs-layer-settings-tabs li").click(function () {
                var a = jQuery(this), b = a.closest("ul").find(".selected");
                jQuery(b.data("content")).hide(0), b.removeClass("selected"), a.addClass("selected"), jQuery(a.data("content")).show(0), a.data("content")
            }), jQuery("body").on("mousemove", "#thelayer-editor-wrapper", function (a) {
                var b = a.pageX - jQuery(this).offset().left, c = a.pageY - jQuery(this).offset().top, d = jQuery("#divLayers"), e = parseInt(d.offset().left, 0) - parseInt(jQuery("#thelayer-editor-wrapper").offset().left, 0);
                jQuery("#verlinie").css({left: b + "px"}), jQuery("#horlinie").css({top: c + "px"}), jQuery("#verlinetext").html(Math.round(b - e)), jQuery("#horlinetext").html(Math.round(c - 40)), jQuery("#hor-css-linear .helplines-offsetcontainer").data("x", a.pageX - jQuery("#hor-css-linear .helplines-offsetcontainer").offset().left), jQuery("#hor-css-linear .helplines-offsetcontainer").data("y", c)
            }), jQuery("#hor-css-linear, #ver-css-linear, #verlinie, #horlinie").click(function () {
                var a = jQuery("#hor-css-linear .helplines-offsetcontainer"), b = jQuery("#ver-css-linear .helplines-offsetcontainer"), c = a.data("x"), d = a.data("y") + 10, e = jQuery("#thelayer-editor-wrapper").outerHeight(!0), f = jQuery("#thelayer-editor-wrapper").outerWidth(!0);
                jQuery("#helpergrid").remove(), jQuery("#rs-grid-sizes").val("custom"), punchgs.TweenLite.to(a, .3, {autoAlpha: 1}), punchgs.TweenLite.to(b, .3, {autoAlpha: 1}), d < 40 && c > 0 && a.append('<div class="helplines" data-left="' + c + '" data-top="' + d + '" style="position:absolute;width:1px;height:' + (e - 41) + "px;background:#4AFFFF;left:" + c + 'px;top:-15px"><i class="helpline-drag eg-icon-move"></i><i class="helpline-remove eg-icon-cancel"></i></div>'), c < 40 && d > 0 && b.append('<div class="helplines" data-left="' + c + '" data-top="' + d + '"  style="position:absolute;width:' + (f - 35) + "px;height:1px;background:#4AFFFF;top:" + d + 'px;left:-15px"><i class="helpline-drag eg-icon-move"></i><i class="helpline-remove eg-icon-cancel"></i></div>');
                try {
                    a.find(".helplines").draggable("destroy")
                } catch (a) {
                }
                try {
                    b.find(".helplines").draggable("destroy")
                } catch (a) {
                }
                a.find(".helplines").draggable({
                    handle: ".helpline-drag",
                    axis: "x"
                }), b.find(".helplines").draggable({handle: ".helpline-drag", axis: "y"})
            }), jQuery("body").on("click", ".helpline-remove", function () {
                jQuery(this).parent().remove()
            }), jQuery(".extra_sub_settings_wrapper").addClass("normal_rename"), jQuery("#extra_start_animation_settings input, #extra_end_animation_settings input").change(function () {
                if ("new_start_animation_name" === jQuery(this).attr("id") || "new_end_animation_name" === jQuery(this).attr("id"))return !1;
                var a = "customin" == currentAnimationType ? jQuery("#layer_animation") : jQuery("#layer_endanimation");
                "customin" == currentAnimationType ? jQuery(this).closest(".extra_start_animation_settings").removeClass("normal_rename normal_save save_rename save_save").addClass("normal_save") : jQuery(this).closest(".extra_end_animation_settings").removeClass("normal_rename normal_save save_rename save_save").addClass("normal_save");
                var b = a.find("option:selected").text(), c = a.find("option:selected").val();
                "custom" !== a.val() && (a.val("custom").change(), "customin" == currentAnimationType ? t.updateCurrentLayer({
                    animation: "custom",
                    "orig-anim": b,
                    "orig-anim-handle": c
                }) : t.updateCurrentLayer({endanimation: "custom", "orig-endanim": b, "orig-endanim-handle": c}))
            }), jQuery("#extra_style_settings input, #extra_style_settings select").change(function () {
                if ("overwrite_style_name" === jQuery(this).attr("id") || "new_style_name" === jQuery(this).attr("id"))return !1;
                jQuery("#extra_style_settings").removeClass("normal_rename normal_save save_rename save_save").addClass("normal_save")
            }), jQuery('input[name="background_type"], #slide_bg_fit, input[name="bg_fit_x"], input[name="bg_fit_y"], #slide_bg_position,input[name="bg_position_x"],input[name="bg_position_y"],#slide_bg_repeat ').change(function () {
                t.changeSlotBGs()
            }), jQuery("body").on("blur", ".timer-layer-text", function () {
                t.updateLayerFromFields()
            }), jQuery("#the_current-editing-layer-title").on("blur", function () {
                jQuery("#layer_sort_" + t.selectedLayerSerial + ">.layer_sort_inner_wrapper .timer-layer-text").val(jQuery(this).val()), t.updateLayerFromFields()
            }), jQuery("body").on("blur", ".layer-title-in-list", function () {
                var a = jQuery(this).closest("li").data("serial");
                if (void 0 === a || "" === a)return !1;
                jQuery("#layer_sort_" + a + " >.layer_sort_inner_wrapper .timer-layer-text").val(jQuery(this).val()), {}.alias = jQuery(this).val(), t.updateLayerFromFields()
            }), jQuery("body").on("click", ".quick-layer-lock", function () {
                var a = jQuery(this), c = (a.find("i"), a.closest(".layer-toolbar-li")), d = c.data("serial"), e = t.getHtmlLayerFromSerial(d);
                if (void 0 === d || "" === d)return !1;
                u.isLayerLocked(e) ? (u.unlockLayer(d), jQuery(".layer-toolbar-li").each(function () {
                    var a = jQuery(this);
                    if (a.data("serial") == d) {
                        var b = a.find(".quick-layer-lock"), c = b.find("i");
                        b.addClass("in-on").removeClass("in-off"), c.removeClass("eg-icon-lock").addClass("eg-icon-lock-open")
                    }
                })) : (u.lockLayer(d), jQuery(".layer-toolbar-li").each(function () {
                    var a = jQuery(this);
                    if (a.data("serial") == d) {
                        var b = a.find(".quick-layer-lock"), c = b.find("i");
                        b.addClass("in-off").removeClass("in-on"), c.removeClass("eg-icon-lock-open").addClass("eg-icon-lock")
                    }
                }))
            }), jQuery("body").on("click", ".quick-layer-view", function () {
                var a = jQuery(this), b = a.closest(".layer-toolbar-li"), c = b.data("serial");
                if (void 0 === c || "" === c)return !1;
                var d = t.getLayer(c);
                u.isLayerVisible(d.references.htmlLayer) ? (d.visible = !1, u.hideLayer(d), jQuery(".layer-toolbar-li").each(function () {
                    var a = jQuery(this);
                    if (a.data("serial") == c) {
                        var b = a.find(".quick-layer-view"), d = b.find("i");
                        b.addClass("in-off").removeClass("in-on"), d.removeClass("eg-icon-eye").addClass("eg-icon-eye-off")
                    }
                })) : (d.visible = !0, u.showLayer(d), jQuery(".layer-toolbar-li").each(function () {
                    var a = jQuery(this);
                    if (a.data("serial") == c) {
                        var b = a.find(".quick-layer-view"), d = b.find("i");
                        b.addClass("in-on").removeClass("in-off"), d.removeClass("eg-icon-eye-off").addClass("eg-icon-eye")
                    }
                }))
            }), jQuery(".rs-row-break-selector").click(function () {
                var a = jQuery(this);
                jQuery(".rs-row-break-selector.selected").removeClass("selected"), a.addClass("selected"), jQuery("#column_break_at option:selected").prop("selected", !1), jQuery('#column_break_at option[value="' + a.data("val") + '"]').attr("selected", "selected");
                var b = {};
                b.column_break_at = a.data("val"), t.updateLayer(t.selectedLayerSerial, b, !1, !0)
            }), jQuery("#rs-check-row-layout").click(function () {
                var row_layer = t.getCurrentLayer();
                if ("row" !== row_layer.type)return !1;
                var rl = jQuery('input[name="rs-row-layout"]').val(), rl_san = rl.replace(/[^\d\+\/ ]/gi, "");
                if (jQuery('input[name="rs-row-layout"]').val(rl_san), rl !== rl_san)return alert("Wrong format, please enter for example 1/2 + 1/4 + 1/4"), !1;
                var result = eval(rl_san);
                if (1 !== (result = Math.ceil(1e14 * result) / 1e14))return alert("The columns have to be added up to 1, so for example 1/2 + 1/8 is lower than 1"), !1;
                t.ignorAllUndoRedoLogs = !0;
                var columns_f = rl_san.split("+"), columns = new Array, undeleted_columns = new Array, deleted_columns = new Array;
                if (jQuery.each(t.arrLayers, function (a, b) {
                        "column" === b.type && b.p_uid == row_layer.unique_id && (columns.push(b), !0 !== b.deleted && undeleted_columns.push(b), !0 === b.deleted && deleted_columns.push(b))
                    }), columns_f.length > undeleted_columns.length) {
                    for (var availablecolumns = 0, i = columns.length; i < columns_f.length; i++) {
                        var c_objLayer = {
                            type: "column",
                            text: initColumnName + (id_counter + 1),
                            p_uid: row_layer.unique_id,
                            column_size: columns_f[i],
                            createdOnInit: !1
                        };
                        addLayer(c_objLayer), availablecolumns++
                    }
                    for (var i = 0; i < deleted_columns.length; i++) {
                        if (availablecolumns < columns_f.length - 1) {
                            var objData = {deleted: !1};
                            t.updateLayer(deleted_columns[i].serial, objData, !1, !0), deleted_columns[i].deleted = !1, deleted_columns[i].references.htmlLayer.removeClass("layer-deleted"), deleted_columns[i].references.quicklayer.removeClass("layer-deleted"), deleted_columns[i].references.sorttable.layer.removeClass("layer-deleted"), deleted_columns[i].references.sorttable.timeline.removeClass("layer-deleted")
                        }
                        availablecolumns++
                    }
                } else if (columns_f.length < undeleted_columns.length)for (var i = undeleted_columns.length; i > columns_f.length; i--) {
                    var highest = 0, second = 0;
                    jQuery.each(undeleted_columns, function (a, b) {
                        void 0 != b && b.unique_id > highest && !1 === b.deleted && (second = highest, highest = b.unique_id)
                    }), jQuery.each(t.arrLayers, function (a, b) {
                        b.p_uid === highest && (b.p_uid = second), b.unique_id === highest && t.deleteLayer(b.serial)
                    })
                }
                var i = 0;
                jQuery.each(t.arrLayers, function (a, b) {
                    b.p_uid == row_layer.unique_id && !1 === b.deleted && i < columns_f.length && (b.column_size = columns_f[i], i++)
                }), t.ignorAllUndoRedoLogs = !1, u.organiseGroupsAndLayer(u), u.allLayerToIdle(), t.makeRowSortableDroppable(), t.setLayerSelected(row_layer.serial), row_layer.references.htmlLayer.find(".row_editor").addClass("open_re"), jQuery("#rs-layout-row-composer").show(), u.timeLineTableDimensionUpdate(), t.hideRowLayoutComposer()
            }), jQuery("#button_change_background_image, #button_change_background_image_objlib").click(function () {
                var a = t.getCurrentLayer();
                null !== a && ("button_change_background_image_objlib" == jQuery(this).attr("id") ? (a.image_library = "objectlibrary", jQuery("#dialog_addobj").data("changeimg", !0), jQuery("#dialog_addobj").data("changeimgserial", a.serial), t.callObjectLibraryDialog("layer")) : (delete a.image_library, UniteAdminRev.openAddImageDialog(rev_lang.select_layer_image, function (a) {
                    switchLayerBackground({bgimage_url: a})
                })))
            }), jQuery("#button_clear_background_image").click(function () {
                switchLayerBackground({bgimage_url: ""})
            }), t.sortFontTypesByUsage(), t.cloneArrLayers(), cm.init()
        }, t.extendSlideHeightBasedOnRows = function () {
            var a = 0;
            "undefined" != typeof rev_sizes && void 0 !== rev_sizes && (jQuery(".row-zone-container").each(function () {
                var b = jQuery(this);
                b.hasClass("emptyzone") || (a += b.height())
            }), a = a < rev_sizes[layout][1] ? rev_sizes[layout][1] : a, jQuery(".tp-bgimg.defaultimg, #divLayers").each(function () {
                var b = jQuery(this);
                jQuery(this).hasClass("slide-transition-example") || b.css({height: a})
            }), __slidertype, jQuery("#divbgholder").css({
                minHeight: a,
                height: a
            }), jQuery("#divLayers-wrapper").css("height", a + 1))
        }, t.getLayersInGroup = function (a) {
            var b = {layers: [], columns: []};
            return jQuery.each(t.arrLayers, function (c, d) {
                d.p_uid === a && "column" === d.type && b.columns.push(d)
            }), jQuery.each(t.arrLayers, function (c, d) {
                d.p_uid === a && "column" !== d.type && b.layers.push(d);
                for (var e = 0; e < b.columns.length; e++)b.columns[e].unique_id === d.p_uid && b.layers.push(d)
            }), b
        }, t.getHighestGroupOrder = function (a) {
            var b = 0;
            for (key in t.arrLayers) {
                var c = t.arrLayers[key];
                "row" === c.type && t.getVal(c, "align_vert") === a && b <= c.groupOrder && (b = c.groupOrder + 1)
            }
            return b
        }, t.makeRowSortableDroppable = function () {
            jQuery("#divLayers, .tp_layer_group_inner_wrapper .slide_layer_type_column, .slide_layer_type_group .tp_layer_group_inner_wrapper").droppable({
                refreshPositions: !0,
                tolerance: "pointer",
                accept: ".slide_layer_type_text, .slide_layer_type_image, .slide_layer_type_video, .slide_layer_type_shape, .slide_layer_type_audio, .slide_layer_type_svg, .slide_layer_type_button",
                over: function (a, b) {
                    var c = jQuery(a.target);
                    jQuery(".slide_layer_type_column, .slide_layer_type_row, .slide_layer_type_group").removeClass("layer_selected").removeClass("layerchild_selected"), "divLayers" !== c[0].id && (punchgs.TweenLite.set(c, {zIndex: 0}), c.addClass("layer_selected").addClass("layerchild_selected")), a.target.id, c.closest(".slide_layer_type_row, .slide_layer_type_group").addClass("layer_selected"), c.closest(".row-zone-container").addClass("layerrow_selected")
                },
                out: function (a, b) {
                    var c = jQuery(a.target);
                    punchgs.TweenLite.set(c, {zIndex: 1}), "divLayers" !== c[0].id && c.removeClass("layer_selected").removeClass("layerchild_selected"), c.closest(".layer_selected").removeClass("layer_selected").removeClass("layerchild_selected"), c.find(".layer_selected").removeClass("layer_selected").removeClass("layerchild_selected"), c.closest(".row-zone-container").removeClass("layerrow_selected"), jQuery(b.draggable).addClass("layer_selected")
                },
                drop: function (a, b) {
                    jQuery(b.draggable).data("dropin", jQuery(a.target)), t.setMiddleRowZone(100), t.checkRowZoneContents(), jQuery(".row-zone-container").removeClass("nowyouseeme"), jQuery(".row-zone-container").removeClass("layerrow_selected")
                }
            }), jQuery("#row-zone-top, #row-zone-middle, #row-zone-bottom").sortable({
                refreshPositions: !0,
                handle: ".row_moveme",
                start: function (a, b) {
                    b.placeholder.html(b.item.html()), jQuery(".row-zone-container").addClass("nowyouseeme"), jQuery(".row-zone-container").addClass("layerrow_selected")
                },
                stop: function (a, b) {
                    jQuery(".row-zone-container").removeClass("nowyouseeme"), jQuery(".row-zone-container").removeClass("layerrow_selected"), t.setRowZoneOrders(), u.organiseGroupsAndLayer()
                },
                update: function (a, b) {
                    var c = t.getLayer(t.selectedLayerSerial);
                    switch (b.item[0].parentNode.id) {
                        case"row-zone-top":
                            c = t.setVal(c, "align_vert", "top", !0);
                            break;
                        case"row-zone-middle":
                            c = t.setVal(c, "align_vert", "middle", !0);
                            break;
                        case"row-zone-bottom":
                            c = t.setVal(c, "align_vert", "bottom", !0)
                    }
                    t.setRowZoneOrders(), u.organiseGroupsAndLayer(), t.updateLayerFormFields(c.serial), t.setMiddleRowZone(100), t.checkRowZoneContents()
                },
                sort: function (a, b) {
                }
            }), jQuery(".slide_layer_type_column .tp_layer_group_inner_wrapper").sortable({
                refreshPositions: !0,
                placeholder: "layer_placeholder_in_column",
                start: function (a, b) {
                    jQuery(".slide_layer_type_column, .slide_layer_type_row").removeClass("layer_selected").removeClass("layerchild_selected"), jQuery(".row-zone-container").removeClass("layerrow_selected"), b.placeholder.html(b.item.html());
                    var c = b.placeholder.find(".innerslide_layer>img");
                    c.length > 0 && c.css({width: b.item.width(), height: b.item.height()})
                },
                items: "> .slide_layer_type_text, > .slide_layer_type_image, > .slide_layer_type_video, > .slide_layer_type_shape, > .slide_layer_type_audio, > .slide_layer_type_svg, > .slide_layer_type_button",
                cancel: ".slide_layer_type_row, .slide_layer_type_column, .slide_layer_type_group",
                update: function (a, b) {
                    t.setInnerGroupOrders(jQuery(b.item[0].parentNode)), t.setMiddleRowZone(100)
                },
                sort: function (a, b) {
                    var c = jQuery(a.target);
                    c.closest(".slide_layer_type_column").addClass("layer_selected").addClass("layerchild_selected"), c.closest(".slide_layer_type_row").addClass("layer_selected")
                }
            })
        }, t.setRowZoneOrders = function () {
            t.setInnerGroupOrders(jQuery("#row-zone-top")), t.setInnerGroupOrders(jQuery("#row-zone-middle")), t.setInnerGroupOrders(jQuery("#row-zone-bottom"))
        }, t.setInnerGroupOrders = function (a) {
            for (var b = a.sortable("toArray", {attribute: "data-uniqueid"}), c = 0; c < b.length; c++) {
                var d = {groupOrder: c};
                t.updateLayer(t.getLayerByUniqueId(b[c]).serial, d, !1, !0)
            }
        }, t.droppedContainerCheck = function (a) {
            var d, b = a.references.htmlLayer, c = b.data("dropin");
            if ("row" === a.type || "column" === a.type || "group" === a.type); else if (void 0 != c && c[0].classList.contains("tp_layer_group_inner_wrapper"))if (c[0].contains(b[0])) d = a.p_uid; else {
                a = t.setVal(a, "align_hor", "left"), a = t.setVal(a, "align_vert", "top");
                var e = b.position(), f = {left: 0, top: 0}, g = {left: 0, top: 0};
                b.data("originalPosition");
                if (-1 != a.p_uid) {
                    var i = t.getLayerByUniqueId(a.p_uid);
                    if ("column" === i.type || "group" === i.type) {
                        f = i.references.htmlLayer.position();
                        var j = i.references.htmlLayer.closest(".row-zone-container");
                        g = void 0 === j || 0 == j.length ? {
                            left: 0,
                            top: 0
                        } : j.position(), g.top += void 0 === j || 0 == j.length ? 0 : parseInt(j.css("marginTop"), 0)
                    }
                }
                c[0].appendChild(b[0]), d = b.closest(".slide_layer_type_group").data("uniqueid");
                var k = t.getLayerByUniqueId(d);
                b.width(), b.height();
                a.p_uid = d, jQuery.each(k.left, function (b, c) {
                    void 0 !== a.top && void 0 !== k.top && void 0 !== k.top[b] && ("right" === k.align_hor[b] ? void 0 !== rev_sizes ? newl = Math.round(e.left + f.left - (rev_sizes[b][0] - (parseInt(k.left[b], 0) + parseInt(k.max_width[b], 0)))) : newl = Math.round(e.left + f.left - (jQuery("#divLayers").width() - parseInt(k.left[b], 0))) : newl = Math.round(e.left + f.left - parseInt(k.left[b], 0)), "bottom" === k.align_vert[b] ? void 0 !== rev_sizes ? newt = Math.round(e.top + f.top + g.top - (rev_sizes[b][1] - (parseInt(k.top[b], 0) + parseInt(k.max_height[b], 0)))) : newt = Math.round(e.top + f.top + g.top - (jQuery("#divLayers").height() - parseInt(k.top[b], 0))) : newt = Math.round(e.top + f.top + g.top - parseInt(k.top[b], 0)), a.left[b] = i ? newl : newl - 1, a.top[b] = i ? newt : newt - 1)
                }), t.updateHtmlLayerPosition(!1, a, t.getVal(a, "top"), t.getVal(a, "left"), t.getVal(a, "align_hor"), t.getVal(a, "align_vert")), u.organiseGroupsAndLayer(!1), k.references.htmlLayer.addClass("inwork"), jQuery("#focusongroup").addClass("inwork")
            } else if (void 0 != c && c[0].classList.contains("slide_layer_type_column")) {
                c[0].getElementsByClassName("tp_layer_group_inner_wrapper")[0].contains(b[0]) || c[0].getElementsByClassName("tp_layer_group_inner_wrapper")[0].appendChild(b[0]), d = b.closest(".slide_layer_type_column").data("uniqueid");
                var i = t.getLayerByUniqueId(a.p_uid);
                "column" !== i.type && "group" !== i.type && (a = t.setVal(a, "whitespace", "normal")), a.p_uid = d, u.organiseGroupsAndLayer(!1);
                var m = t.getVal(a, "align_hor"), n = t.getVal(a, "align_vert");
                if (m = "left", n = "top", a = t.setVal(a, "align_hor", m), a = t.setVal(a, "align_vert", n), "text" === a.type && (a = t.setVal(a, "max_height", "auto", !0)), "shape" === a.type) {
                    var o = jQuery("#layer_cover_mode").val();
                    if ("fullheight" === o || "cover" === o || "cover-proportional" === o) {
                        jQuery("#layer_cover_mode option:selected").prop("selected", !1);
                        var p = {};
                        "fullheight" === o ? (jQuery('#layer_cover_mode option[value="custom"]').attr("selected", "selected"), p = t.setVal(p, "cover_mode", "custom", !0)) : (jQuery('#layer_cover_mode option[value="fullwidth"]').attr("selected", "selected"), p = t.setVal(p, "cover_mode", "fullwidth", !0)), t.updateLayer(a.serial, p), t.set_cover_mode()
                    }
                }
                setTimeout(function () {
                    t.extendSlideHeightBasedOnRows()
                }, 100), unselectAllFocusedGroup()
            } else if (void 0 != c && "divLayers" === c[0].id && "divLayers" !== b[0].parentNode.id) {
                var e = b.position(), k = t.getLayerByUniqueId(a.p_uid), q = void 0 != k && void 0 != k.references && void 0 != k.references.htmlLayer ? k.references.htmlLayer.position() : {
                    top: 0,
                    left: 0
                }, g = {left: 0, top: 0}, r = {left: 0, top: 0};
                if (a = t.setVal(a, "align_hor", "left"), a = t.setVal(a, "align_vert", "top"), -1 != a.p_uid) {
                    var i = t.getLayerByUniqueId(a.p_uid);
                    if ("column" === i.type) {
                        f = i.references.htmlLayer.position();
                        var j = i.references.htmlLayer.closest(".row-zone-container"), s = i.references.htmlLayer.closest(".slide_layer_type_row");
                        r = void 0 === s || 0 == r.length ? {
                            left: 0,
                            top: 0
                        } : s.position(), g = void 0 === j || 0 == j.length ? {
                            left: 0,
                            top: 0
                        } : j.position(), g.top += void 0 === j || 0 == j.length ? 0 : parseInt(j.css("marginTop"), 0), r.top += void 0 === s || 0 == s.length ? 0 : parseInt(s.css("marginTop"), 0)
                    }
                }
                a.p_uid = -1, document.getElementById("divLayers").appendChild(b[0]), jQuery.each(a.left, function (b, c) {
                    a.left[b] = Math.round(e.left + 1 + q.left + g.left + r.left), a.top[b] = Math.round(e.top + 1 + q.top + g.top + r.top)
                }), t.updateHtmlLayerPosition(!1, a, t.getVal(a, "top"), t.getVal(a, "left"), "left", "top"), u.organiseGroupsAndLayer(!1), unselectAllFocusedGroup()
            }
            t.setMiddleRowZone(), t.resetLayerSelected(a)
        }, t.checkRowZoneContents = function () {
            jQuery(".row-zone-container").each(function () {
                0 === this.children.length ? jQuery(this).addClass("emptyzone") : jQuery(this).removeClass("emptyzone")
            })
        }, t.setMiddleRowZone = function (a) {
            a = void 0 === a ? 0 : a, setTimeout(function () {
                var a = document.getElementById("row-zone-middle");
                a.style.marginTop = 0 - jQuery(a).height() / 2 + "px"
            }, a)
        }, t.showHideToggleContent = function (a) {
            !0 === a.toggle ? jQuery("#layer_text_wrapper").addClass("withtoggle") : jQuery("#layer_text_wrapper").removeClass("withtoggle")
        }, t.showHideContentEditor = function (a) {
            a ? (jQuery("#button_edit_layer").hide(), jQuery("#button_delete_layer").hide(), jQuery("#button_duplicate_layer").hide(), jQuery("#tp-addiconbutton").show(), jQuery("#hide_layer_content_editor").show(), jQuery("#linkInsertTemplate").show(), jQuery("#layer_text_wrapper").show(), jQuery("#button_reset_size").hide(), jQuery("#button_change_video_settings").hide(), jQuery("#layer_text_wrapper").addClass("currently_editing_txt"), jQuery("#layer-short-tool-placeholder-a").hide(), jQuery("#layer-short-tool-placeholder-b").hide()) : (jQuery("#layer-short-tool-placeholder-a").show(), jQuery("#layer-short-tool-placeholder-b").show(), jQuery("#button_edit_layer").hide(), jQuery("#button_change_image_source").hide(), jQuery("#button_delete_layer").show(), jQuery("#button_duplicate_layer").show(), jQuery("#tp-addiconbutton").hide(), jQuery("#hide_layer_content_editor").hide(), jQuery("#linkInsertTemplate").hide(), jQuery("#button_reset_size").hide(), jQuery("#button_change_video_settings").hide(), jQuery("#layer_text_wrapper").hide(), jQuery("#layer_text_wrapper").removeClass("currently_editing_txt"));
            var b = -1 === t.selectedLayerSerial ? "" : t.getLayer(t.selectedLayerSerial);
            t.toolbarInPos(b), t.showHideToggleContent(b)
        }, t.changeSlotBGs = function () {
            var a = jQuery("#divbgholder").find(".slotholder"), b = jQuery("#image_url").val(), c = "percentage" == jQuery("#slide_bg_position").val() ? jQuery("input[name='bg_position_x']").val() + "% " + jQuery("input[name='bg_position_y']").val() + "% " : jQuery("#slide_bg_position").val(), d = "percentage" == jQuery("#slide_bg_fit").val() ? jQuery("input[name='bg_fit_x']").val() + "% " + jQuery("input[name='bg_fit_y']").val() + "% " : jQuery("#slide_bg_fit").val(), e = window.RevColor.get(jQuery("#slide_bg_color").val());
            gallery_type = jQuery('input[name="rs-gallery-type"]').val(), jQuery("#the_image_source_url").html(b), jQuery("#video-settings").hide(), jQuery("#bg-setting-wrap").show(), jQuery("#vid-rev-youtube-options").hide(), jQuery("#vid-rev-vimeo-options").hide(), jQuery("#streamvideo_cover").hide(), jQuery("#streamvideo_cover_both").hide(), jQuery("#button_change_image").show(), jQuery("#button_change_image_objlib").show(), jQuery(".video_volume_wrapper").hide(), jQuery("#slide_selector .list_slide_links li.selected .slide-media-container ").removeClass("mini-transparent").css({backgroundSize: "cover"});
            var f = jQuery('input[name="background_type"]:checked').data("bgtype");
            switch (f) {
                case"image":
                    switch (jQuery("#button_change_image").hide(), jQuery("#button_change_image_objlib").hide(), gallery_type) {
                        case"gallery":
                            jQuery("#button_change_image").show(), jQuery("#button_change_image_objlib").show();
                            break;
                        case"posts":
                            b = rs_plugin_url + "assets/public/assets/sources/post.png";
                            break;
                        case"woocommerce":
                            b = rs_plugin_url + "assets/public/assets/sources/wc.png";
                            break;
                        case"facebook":
                            b = rs_plugin_url + "assets/public/assets/sources/fb.png";
                            break;
                        case"twitter":
                            b = rs_plugin_url + "assets/public/assets/sources/tw.png";
                            break;
                        case"instagram":
                            b = rs_plugin_url + "assets/public/assets/sources/ig.png";
                            break;
                        case"flickr":
                            b = rs_plugin_url + "assets/public/assets/sources/fr.png";
                            break;
                        case"youtube":
                            b = rs_plugin_url + "assets/public/assets/sources/yt.png";
                            break;
                        case"vimeo":
                            b = rs_plugin_url + "assets/public/assets/sources/vm.png"
                    }
                    jQuery(".mainbg-sub-kenburns-selector").show(), jQuery(".mainbg-sub-parallax-selector").show(), jQuery(".mainbg-sub-settings-selector").show(), jQuery("#button_change_image").appendTo(jQuery("#tp-bgimagewpsrc")), jQuery("#button_change_image_objlib").appendTo(jQuery("#tp-bgimagewpsrc")), a.find(".defaultimg, .slotslidebg").css({
                        backgroundImage: "url(" + b + ")",
                        backgroundPosition: c,
                        backgroundSize: d,
                        backgroundColor: "transparent"
                    }), jQuery("#ken_burn_slot_example").css({
                        backgroundImage: "url(" + b + ")",
                        backgroundPosition: c,
                        backgroundSize: d,
                        backgroundColor: "transparent"
                    }).data("src", b), t.updateKenBurnExampleValues();
                    break;
                case"trans":
                    jQuery("#slide_selector .list_slide_links li.selected .slide-media-container ").css("background-image", "").css("background-repeat", "").addClass("mini-transparent").css({backgroundSize: "inherit"}), a.find(".defaultimg, .slotslidebg").css({
                        backgroundImage: "none",
                        backgroundPosition: c,
                        backgroundSize: d,
                        backgroundColor: "transparent"
                    }), jQuery(".mainbg-sub-kenburns-selector").hide(), jQuery(".mainbg-sub-parallax-selector").hide(), jQuery(".mainbg-sub-settings-selector").hide();
                    break;
                case"solid":
                    a.find(".defaultimg, .slotslidebg").css({
                        backgroundImage: "none",
                        backgroundPosition: c,
                        backgroundSize: d,
                        background: e
                    }), jQuery(".mainbg-sub-kenburns-selector").hide(), jQuery(".mainbg-sub-parallax-selector").hide(), jQuery(".mainbg-sub-settings-selector").hide(), jQuery("#slide_selector .list_slide_links li.selected .slide-media-container ").css({
                        backgroundImage: "none",
                        backgroundPosition: c,
                        backgroundSize: d,
                        background: e
                    });
                    break;
                case"external":
                    b = jQuery("#slide_bg_external").val(), jQuery("#the_image_source_url").html(b), a.find(".defaultimg, .slotslidebg").css({
                        backgroundImage: "url(" + b + ")",
                        backgroundPosition: c,
                        backgroundSize: d,
                        backgroundColor: "transparent"
                    }), jQuery("#ken_burn_slot_example").css({
                        backgroundImage: "url(" + b + ")",
                        backgroundPosition: c,
                        backgroundSize: d,
                        backgroundColor: "transparent"
                    }).data("src", b), t.updateKenBurnExampleValues(), jQuery(".mainbg-sub-kenburns-selector").show(), jQuery(".mainbg-sub-parallax-selector").show(), jQuery(".mainbg-sub-settings-selector").show();
                    break;
                case"streamtwitter":
                case"streamtwitterboth":
                    jQuery("#streamvideo_cover").show(), jQuery("#streamvideo_cover_both").show(), b = rs_plugin_url + "assets/public/assets/sources/tw.png", a.find(".defaultimg, .slotslidebg, #ken_burn_slot_example").css({
                        backgroundImage: "url(" + b + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundColor: "transparent"
                    }), jQuery("#ken_burn_slot_example").css({
                        backgroundImage: "url(" + b + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundColor: "transparent"
                    }).data("src", b), t.updateKenBurnExampleValues(), jQuery(".mainbg-sub-kenburns-selector").hide(), jQuery(".mainbg-sub-parallax-selector").show(), jQuery(".mainbg-sub-settings-selector").show(), jQuery("#button_change_image").appendTo(jQuery("#vimeo-image-picker")), jQuery("#button_change_image_objlib").appendTo(jQuery("#vimeo-image-picker")), jQuery("#video-settings").show(), jQuery("#bg-setting-wrap").hide(), jQuery("#vid-rev-vimeo-options").show(), jQuery("#vid-rev-youtube-options").show(), jQuery(".video_volume_wrapper").show();
                    break;
                case"streamyoutube":
                case"streamyoutubeboth":
                    jQuery("#streamvideo_cover").show(), jQuery("#streamvideo_cover_both").show(), b = rs_plugin_url + "assets/public/assets/sources/yt.png";
                case"youtube":
                    a.find(".defaultimg, .slotslidebg, #ken_burn_slot_example").css({
                        backgroundImage: "url(" + b + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundColor: "transparent"
                    }), jQuery("#ken_burn_slot_example").css({
                        backgroundImage: "url(" + b + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundColor: "transparent"
                    }).data("src", b), t.updateKenBurnExampleValues(), jQuery(".mainbg-sub-kenburns-selector").hide(), jQuery(".mainbg-sub-parallax-selector").show(), jQuery(".mainbg-sub-settings-selector").show(), jQuery("#button_change_image").appendTo(jQuery("#youtube-image-picker")), jQuery("#button_change_image_objlib").appendTo(jQuery("#youtube-image-picker")), jQuery("#video-settings").show(), jQuery("#bg-setting-wrap").hide(), jQuery("#vid-rev-youtube-options").show(), jQuery(".video_volume_wrapper").show();
                    break;
                case"streamvimeo":
                case"streamvimeoboth":
                    jQuery("#streamvideo_cover").show(), jQuery("#streamvideo_cover_both").show(), b = rs_plugin_url + "assets/public/assets/sources/vm.png";
                case"vimeo":
                    a.find(".defaultimg, .slotslidebg, #ken_burn_slot_example").css({
                        backgroundImage: "url(" + b + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundColor: "transparent"
                    }), jQuery("#ken_burn_slot_example").css({
                        backgroundImage: "url(" + b + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundColor: "transparent"
                    }).data("src", b), t.updateKenBurnExampleValues(), jQuery(".mainbg-sub-kenburns-selector").hide(), jQuery(".mainbg-sub-parallax-selector").show(), jQuery(".mainbg-sub-settings-selector").show(), jQuery("#button_change_image").appendTo(jQuery("#vimeo-image-picker")), jQuery("#button_change_image_objlib").appendTo(jQuery("#vimeo-image-picker")), jQuery("#video-settings").show(), jQuery("#bg-setting-wrap").hide(), jQuery("#vid-rev-vimeo-options").show(), jQuery(".video_volume_wrapper").show();
                    break;
                case"streaminstagram":
                case"streaminstagramboth":
                    jQuery("#streamvideo_cover").show(), jQuery("#streamvideo_cover_both").show(), b = rs_plugin_url + "assets/public/assets/sources/ig.png";
                case"html5":
                    a.find(".defaultimg, .slotslidebg").css({
                        backgroundImage: "url(" + b + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundColor: "transparent"
                    }), jQuery("#ken_burn_slot_example").css({
                        backgroundImage: "url(" + b + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundColor: "transparent"
                    }).data("src", b), t.updateKenBurnExampleValues(), jQuery(".mainbg-sub-kenburns-selector").hide(), jQuery(".mainbg-sub-parallax-selector").show(), jQuery(".mainbg-sub-settings-selector").show(), jQuery("#button_change_image").appendTo(jQuery("#html5video-image-picker")), jQuery("#button_change_image_objlib").appendTo(jQuery("#html5video-image-picker")), jQuery("#video-settings").show(), jQuery("#bg-setting-wrap").hide()
            }
            if ("solid" != f && "trans" != f && jQuery("#slide_selector .list_slide_links li.selected .slide-media-container ").css("background-image", "url(" + b + ")"), jQuery("#divbgholder").css({
                    background: "none",
                    backgroundImage: "none",
                    backgroundColor: "transparent"
                }), "checked" == jQuery("#thumb_for_admin").attr("checked")) {
                var g = jQuery("#slide_thumb_button_preview div").css("background-image");
                jQuery("#slide_selector .list_slide_links li.selected .slide-media-container").css({
                    "background-image": g,
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            }
            u.resetSlideAnimations(!1)
        };
        var initDisallowCaptionsOnClick = function () {
            jQuery(".slide_layer.tp-caption a").on("click", function () {
                return !1
            })
        }, initAlignTable = function () {
            jQuery(".rs-new-align-button").click(function () {
                var a = jQuery(this);
                if (jQuery(a).parent().hasClass("table_disabled"))return !1;
                var b = jQuery("#layer_left_text"), c = jQuery("#layer_top_text"), d = a.data("hor"), e = a.data("ver");
                if (void 0 === e) {
                    switch (jQuery("#rs-align-wrapper").find(".selected").removeClass("selected"), d) {
                        case"left":
                            b.html(b.data("textnormal")).css("width", "auto"), jQuery("#layer_left").val("0");
                            break;
                        case"right":
                        case"center":
                            b.html(b.data("textoffset")).css("width", "42px"), jQuery("#layer_left").val("0")
                    }
                    jQuery("#layer_align_hor").val(d)
                } else {
                    switch (jQuery("#rs-align-wrapper-ver").find(".selected").removeClass("selected"), e) {
                        case"top":
                            c.html(c.data("textnormal")).css("width", "auto"), jQuery("#layer_top").val("0");
                            break;
                        case"bottom":
                        case"middle":
                            c.html(c.data("textoffset")).css("width", "42px"), jQuery("#layer_top").val("0")
                    }
                    jQuery("#layer_align_vert").val(e)
                }
                var f = t.getLayer(t.selectedLayerSerial);
                if ("row" === f.type) {
                    switch (e) {
                        case"top":
                            document.getElementById("row-zone-top").appendChild(f.references.htmlLayer[0]);
                            break;
                        case"middle":
                            document.getElementById("row-zone-middle").appendChild(f.references.htmlLayer[0]);
                            break;
                        case"bottom":
                            document.getElementById("row-zone-bottom").appendChild(f.references.htmlLayer[0])
                    }
                    f = t.setVal(f, "align_vert", e, !0, null, !0), t.checkRowZoneContents()
                }
                a.addClass("selected"), t.updateLayerFromFields(), t.toolbarInPos(), t.setMiddleRowZone(100)
            })
        }, initMainEvents = function () {
            container.click(function (a) {
                layerresized ? layerresized = !1 : ((a.target == this || jQuery(a.target).hasClass("slide_layers_border")) && u.checkMultipleSelectedItems(!0), unselectLayers(), jQuery("#quick-layers-wrapper").slideUp(300), jQuery(".current-active-main-toolbar").removeClass("opened"), jQuery("#button_show_all_layer i").removeClass("eg-icon-up").addClass("eg-icon-menu"))
            })
        }, showHideLinkActions = function (a, b) {
            var c = a.closest("li"), d = a.val();
            switch (c.find(".action-link-wrapper").hide(), c.find(".action-jump-to-slide").hide(), c.find(".action-scrollofset").hide(), c.find(".action-speed-wrapper").hide(), c.find(".action-easing-wrapper").hide(), c.find(".action-target-layer").hide(), c.find(".action-callback").hide(), c.find(".action-toggle_layer").hide(), c.find(".action-toggleclass").hide(), c.find(".action-delay-wrapper").show(), d) {
                case"none":
                    c.find(".action-delay-wrapper").hide();
                    break;
                case"link":
                    c.find(".action-link-wrapper").show();
                    break;
                case"jumpto":
                    console.log('hello');
                    console.log('tg',c.find(".action-jump-to-slide"));
                    c.find(".action-jump-to-slide").show();
                    break;
                case"scroll_under":
                    c.find(".action-scrollofset").show(), c.find(".action-speed-wrapper").show(), c.find(".action-easing-wrapper").show();
                    break;
                case"callback":
                    c.find(".action-callback").show();
                    break;
                case"start_in":
                case"start_out":
                case"start_video":
                case"stop_video":
                case"mute_video":
                case"unmute_video":
                case"toggle_video":
                case"toggle_mute_video":
                    c.find(".action-target-layer").show();
                    break;
                case"toggle_layer":
                    c.find(".action-target-layer").show(), c.find(".action-toggle_layer").show();
                    break;
                case"simulate_click":
                    c.find(".action-target-layer").show();
                    break;
                case"toggle_class":
                    c.find(".action-target-layer").show(), c.find(".action-toggleclass").show()
            }
            switch (d) {
                case"start_in":
                case"start_out":
                case"toggle_layer":
                    c.find(".action-triggerstates").show();
                    break;
                default:
                    c.find(".action-triggerstates").hide()
            }
            switch (d) {
                case"toggle_video":
                case"mute_video":
                case"unmute_video":
                case"toggle_global_mute_video":
                case"toggle_mute_video":
                case"start_video":
                case"stop_video":
                    c.find(".action-target-layer").find('select[name="layer_target[]"] option').each(function () {
                        "video" !== jQuery(this).data("mytype") && "video-special" !== jQuery(this).data("mytype") && "audio" !== jQuery(this).data("mytype") ? "all" === jQuery(this).data("mytype") ? jQuery(this).show() : jQuery(this).hide() : jQuery(this).show()
                    });
                    break;
                default:
                    c.find(".action-target-layer").find('select[name="layer_target[]"] option').each(function () {
                        "video-special" !== jQuery(this).data("mytype") ? jQuery(this).show() : "all" === jQuery(this).data("mytype") ? jQuery(this).show() : jQuery(this).hide()
                    })
            }
            b && u.updateAllLayerTimeline()
        }, showHideToolTip = function () {
            var a = jQuery("#layer_tooltip_event").val(), b = jQuery(".tooltip-parrent-part"), c = jQuery(".tooltip-child-part");
            switch (a) {
                case"none":
                    b.hide(), c.hide();
                    break;
                case"parrent":
                    b.show(), c.hide();
                    break;
                case"child":
                    b.hide(), c.show()
            }
        }, specOrVal = function (a, b, c, d) {
            var e = parseFloat(a), f = void 0 === d && void 0 !== e && jQuery.isNumeric(e) && !jQuery.isNumeric(a) ? a.replace(e, "") : void 0 === d ? void 0 === c ? "" : c : d;
            return result = jQuery.inArray(a, b) >= 0 ? a : void 0 !== a && jQuery.isNumeric(parseInt(a)) && 0 !== a.length ? parseInt(a) + f : "", result
        };
        t.check_the_font_bold = function (a) {
            var b = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
            for (var c in initArrFontTypes)if (initArrFontTypes[c].label == a) {
                void 0 !== initArrFontTypes[c].variants && (b = initArrFontTypes[c].variants);
                break
            }
            var d = jQuery('select[name="font_weight_static"]'), e = d.find("option:selected").val();
            d.html("");
            for (var c in b)b[c].indexOf("italic") > -1 || d.append('<option value="' + b[c] + '">' + b[c] + "</option>");
            d.find('option[value="' + e + '"]').attr("selected", "selected")
        }, t.do_google_font_loading = function (a) {
            var b = [];
            for (var c in initArrFontTypes)if (initArrFontTypes[c].label == a) {
                if ("googlefont" == initArrFontTypes[c].type) {
                    var d = "";
                    for (var e in initArrFontTypes[c].variants)e > 0 && (d += ","), d += initArrFontTypes[c].variants[e];
                    if (void 0 !== initArrFontTypes[c].subsets) {
                        d += "&subset=";
                        for (var e in initArrFontTypes[c].subsets)e > 0 && (d += ","), d += initArrFontTypes[c].subsets[e]
                    }
                    fontclass = a.replace(/\ /g, "-"), a = a.replace(/\ /g, "+"), 0 == jQuery(".rev-css-" + fontclass).length && (b.push(a + ":" + d), jQuery("body").append('<div style="display:none" class="rev-css-' + fontclass + '">RevSliderFont</div>'), -1 == sgfamilies.indexOf(a) && sgfamilies.push(a), null !== b && b.length > 0 && tpWebFont.load({
                        google: {families: b},
                        loading: function () {
                            showWaitAMinute({fadeIn: 300, text: a + " is Loading..."})
                        },
                        active: function () {
                            setTimeout(function () {
                                showWaitAMinute({fadeOut: 300})
                            }, 300), u.allLayerToIdle({type: "text"})
                        },
                        inactive: function () {
                            setTimeout(function () {
                                showWaitAMinute({fadeOut: 300})
                            }, 300), u.allLayerToIdle({type: "text"})
                        }
                    }))
                }
                break
            }
            t.sortFontTypesByUsage()
        };
        var initHtmlFields = function () {
            jQuery("body").on("change", 'select[name="layer_action[]"], select[name="no_layer_action[]"]', function () {
                showHideLinkActions(jQuery(this))
            }), jQuery("body").on("click", "#kenburn-playpause-wrapper", function () {
                var a = jQuery("#kenburn-playpause-wrapper"), b = jQuery("#ken_burn_example").data("kbtl");
                a.hasClass("playing") ? (a.html('<i class="eg-icon-play"></i><span>PLAY</span>'), a.removeClass("playing"), b.pause()) : (a.html('<i class="eg-icon-pause"></i><span>PAUSE</span>'), a.addClass("playing"), b.play())
            }), jQuery("body").on("click", "#kenburn-backtoidle", function () {
                jQuery("#ken_burn_example").data("kbtl").progress(0)
            }), jQuery(".kb_input_values").change(t.updateKenBurnExampleValues), jQuery("#layer_tooltip_event").change(showHideToolTip), jQuery("#layer_caption").catcomplete({
                source: initArrCaptionClasses,
                minLength: 0,
                appendTo: "#tp-thelistofclasses",
                open: function (a, b) {
                    jQuery("#tp-thelistofclasses ul").height() > 450 && jQuery("#tp-thelistofclasses ul").perfectScrollbar("destroy").perfectScrollbar({
                        wheelPropagation: !1,
                        suppressScrollX: !0
                    })
                },
                close: function (a, b) {
                    var c = t.getCurrentLayer();
                    if (!1 === c || null == c)return !1;
                    void 0 !== c.style && c.style !== jQuery("#layer_caption").val() && (c.style = jQuery("#layer_caption").val(), t.reset_to_default_static_styles(c), updateSubStyleParameters(c, !0)), jQuery("#layer_caption").change(), jQuery("#css_font-family").change(), t.updateLayerFromFields()
                }
            }).data("customCatcomplete")._renderItem = function (a, b) {
                var c = jQuery("<li></li>").data("item.autocomplete", b).append("<a>" + b.label + "</a>").appendTo(a);
                return c.attr("original-title", b.value), c
            }, jQuery("#layer_captions_down").click(function (a) {
                a.stopPropagation(), jQuery("#css_font-family").catcomplete("close"), jQuery("#css_editor_expert").hide(), jQuery("#css_editor_wrap").hide(), 1 == jQuery("#layer_caption").data("is_open") ? jQuery("#layer_caption").catcomplete("close") : jQuery(this).hasClass("ui-state-active") && (jQuery("#layer_caption").catcomplete("search", "").data("customCatcomplete")._renderItem = function (a, b) {
                    var c = jQuery("<li></li>").data("item.autocomplete", b).append("<a>" + b.label + "</a>").appendTo(a);
                    return c.attr("original-title", b.value), c
                })
            }), jQuery("#layer_caption").bind("catcompleteopen", function () {
                jQuery(this).data("is_open", !0), jQuery(".ui-autocomplete li").tipsy({
                    delayIn: 70,
                    html: !0,
                    gravity: "w",
                    title: function () {
                        return setTimeout(function () {
                            jQuery(".tp-present-caption-small").parent().addClass("tp-present-wrapper-small"), jQuery(".tp-present-caption-small").parent().parent().addClass("tp-present-wrapper-parent-small")
                        }, 10), '<div class="tp-present-caption-small"><div class="example-dark-blinker"></div><div class="tp-caption ' + this.getAttribute("original-title") + '">example</div></div>'
                    }
                })
            }), jQuery("#layer_caption").bind("catcompleteclose", function () {
                jQuery(this).data("is_open", !1)
            }), t.setLayersAutoComplete(), jQuery('input[name="adbutton-fontfamily"]').autocomplete({
                source: initArrFontTypes,
                minLength: 0
            }), jQuery("#css_fonts_down").click(function (a) {
                a.stopPropagation(), jQuery("#layer_caption").catcomplete("close"), 1 == jQuery("#css_font-family").data("is_open") ? jQuery("#css_font-family").catcomplete("close") : jQuery(this).hasClass("ui-state-active") && jQuery("#css_font-family").catcomplete("search", "").data("ui-autocomplete")
            }), jQuery("body").click(function () {
                jQuery("#layer_caption").catcomplete("close"), jQuery("#css_font-family").catcomplete("close")
            }), jQuery("body").on("change", ".form_layers select, #layer_proportional_scale, #layer_auto_line_break, #layer_displaymode", function () {
                t.updateLayerFromFields()
            }), jQuery("#layer_proportional_scale, #layer_auto_line_break, #layer_displaymode").change(function () {
                jQuery(this).attr('checked') === 'checked' ? jQuery(this).parent().removeClass("notselected") : jQuery(this).parent().addClass("notselected")
            });
            var a;
            jQuery("#layer_text").keyup(function () {
                clearTimeout(a);
                var b = jQuery(this).val();
                a = setTimeout(function () {
                    updateLayerTextField("", jQuery(".sortlist li.ui-state-hover"), b), t.toolbarInPos(), t.updateLayerFromFields(), u.updateCurrentLayerTimeline()
                }, 150)
            }), jQuery("#layer_text_toggle").keyup(function () {
                clearTimeout(a);
                var b = jQuery(this).val();
                a = setTimeout(function () {
                    updateLayerTextField("", jQuery(".sortlist li.ui-state-hover"), b), t.toolbarInPos(), t.updateLayerFromFields()
                }, 150)
            }), jQuery(".rev-visibility-on-sizes input").click(function () {
                t.updateLayerFromFields()
            }), jQuery("body").on("blur", ".form_layers input, .form_layers textarea", function () {
                t.updateLayerFromFields()
            }), jQuery("body").on("change", ".form_layers input, .form_layers textarea", function () {
                t.updateLayerFromFields()
            }), jQuery("body").on("keypress", ".form_layers input, .form_layers textarea", function (a) {
                13 == a.keyCode && t.updateLayerFromFields()
            }), jQuery("#delay").keypress(function (a) {
                Number(jQuery("#delay").val()) > 0 && (g_slideTime = jQuery("#delay").val())
            }), jQuery("#delay").blur(function () {
                Number(jQuery("#delay").val()) > 0 && (g_slideTime = jQuery("#delay").val());
                var a = g_slideTime / 10;
                jQuery("#mastertimer-maxtime").css({left: a + "px"}), jQuery("#mastertimer-maxcurtime").html(u.convToTime(a)), jQuery(".slide-idle-section").css({left: a}), jQuery(".mastertimer-slide .tl-fullanim").css({width: a + "px"}), u.mainMaxTimeLeft = a, u.masterTimerPositionChange(!0), u.compareLayerEndsVSSlideEnd()
            }), jQuery(".form_layers input").on("click", function () {
                jQuery(this).select()
            }), jQuery(".form_layers input").on("change blur focus", function (a) {
                var b = jQuery(this), c = parseFloat(b.val()), d = parseFloat(b.data("min")), e = parseFloat(b.data("max")), f = b.val().slice(-1) || "", g = b.val().slice(-2) || "", h = b.data("suffix"), i = b.data("suffixalt");
                lastchangedinput = b.attr("id"), void 0 != h && jQuery.isNumeric(c) && c > -9999999 && c < 9999999 && (void 0 != d && c < d && (c = d), void 0 != d && c > e && (c = e), isNaN(c) && (c = 0), c = Math.round(100 * c) / 100, void 0 == i ? b.val(c + h) : f == i ? b.val(c + f) : g == i ? b.val(c + g) : b.val(c + h)), "focus" === a.type && this.select()
            }), jQuery(".form_layers select").on("change blur focus", function () {
                lastchangedinput = jQuery(this).attr("id")
            }), jQuery("#layer_speed, #layer_endspeed, #layer_splitdelay, #layer_endsplitdelay, #layer_split, #layer_endsplit, #layer_split_direction, #layer_endsplit_direction").on("change blur", function () {
                t.updateLayerFromFields(), u.updateCurrentLayerTimeline()
            }), jQuery("body").on("focus", "#layer_text, #layer_text_toggle", function () {
                jQuery("#layer_text").removeClass("lasteditedlayertext"), jQuery("#layer_text_toggle").removeClass("lasteditedlayertext"), jQuery(this).addClass("lasteditedlayertext")
            })
        };
        t.nextNewLayerToPosition = function (a) {
            t.newlayercoord.x = a.x, t.newlayercoord.y = a.y
        }, t.setLayersAutoComplete = function () {
            jQuery("#css_font-family").catcomplete({
                source: initArrFontTypes,
                appendTo: "#tp-thelistoffonts",
                open: function (a, b) {
                    jQuery("#tp-thelistoffonts ul").height() > 450 && (jQuery("#tp-thelistoffonts ul").perfectScrollbar("destroy").perfectScrollbar({
                        wheelPropagation: !1,
                        suppressScrollX: !0
                    }), jQuery("#tp-thelistoffonts ul").scrollTop(0))
                },
                minLength: 0,
                close: t.updateLayerFromFields,
                select: function (a, b) {
                    t.check_the_font_bold(b.item.label), t.do_google_font_loading(b.item.label)
                }
            }).data("customCatcomplete")._renderItem = function (a, b) {
                var c = jQuery("<li></li>").data("item.autocomplete", b).append("<a>" + b.label + "</a>");
                return b.top ? (c.prependTo(a), c.insertAfter("#insert-google-font-after-me")) : c.appendTo(a), "Dont Show Me" == b.label && (c.css({
                    display: "block",
                    height: "0px",
                    width: "0px",
                    visibility: "hidden"
                }), c.attr("id", "insert-google-font-after-me")), c.attr("original-title", b.value), c
            }, jQuery("#css_font-family").change(function () {
                var a = jQuery(this).val();
                t.check_the_font_bold(a), t.do_google_font_loading(a)
            }), jQuery("#css_font-family").bind("catcompleteopen", function () {
                jQuery(this).data("is_open", !0)
            }), jQuery("#css_font-family").bind("catcompleteclose", function () {
                jQuery(this).data("is_open", !1)
            })
        };
        var switchLayerBackground = function (a) {
            t.updateCurrentLayer(a), t.add_layer_change();
            var b = t.getCurrentLayer();
            u.rebuildLayerIdleProgress(b.references.htmlLayer)
        }, initButtons = function () {
            function a(a) {
                jQuery("#divbgholder").css("background-image", "url(" + a + ")"), jQuery("#slide_selector .list_slide_links li.selected .slide-media-container ").css("background-image", "url(" + a + ")"), jQuery("#image_url").val(a), jQuery("#image_id").val(""), t.changeSlotBGs(), jQuery(".bgsrcchanger:checked").click(), jQuery('input[name="kenburn_effect"]').attr("checked")==="checked" && jQuery('input[name="kb_start_fit"]').change()
            }

            function b(a) {
                var b = jQuery('input[name="background_type"]:checked').val();
                jQuery.inArray(b, -1 != ["trans", "solid", "external"]) && jQuery("#radio_back_image").attr("checked", "checked").change().click(), jQuery("#divbgholder").css("background-image", "url(" + a + ")"), jQuery("#slide_selector .list_slide_links li.selected .slide-media-container ").css("background-image", "url(" + a + ")"), jQuery("#image_url").val(a), jQuery("#image_id").val(""), t.changeSlotBGs(), jQuery(".bgsrcchanger:checked").click(), jQuery('input[name="kenburn_effect"]').is(":checked") && jQuery('input[name="kb_start_fit"]').change()
            }

            function c(a, c, d, e, f, g) {
                UniteAdminRev.ajaxRequest("load_library_object", {handle: a, type: "orig"}, function (a) {
                    if (a.success) {
                        var h = {
                            imgurl: a.url,
                            imglib: "objectlibrary",
                            imgproportion: !0,
                            imgwidth: parseInt(a.width, 0) * d,
                            imgheight: parseInt(a.height, 0) * d
                        };
                        if ("object" !== f || g) {
                            if ("background" === f) b(a.url); else if ("layer" === f) {
                                var i = {};
                                i.bgimage_url = a.url, i.image_librarysize = {}, i.image_librarysize.width = parseInt(a.width, 0) * d, i.image_librarysize.height = parseInt(a.height, 0) * d, switchLayerBackground(i)
                            }
                        } else if (e) {
                            var i = {};
                            i.image_url = a.url, i.image_librarysize = {}, i.image_librarysize.width = parseInt(a.width, 0) * d, i.image_librarysize.height = parseInt(a.height, 0) * d, i.scaleProportional = !0, t.updateCurrentLayer(i), resetCurrentElementSize(), redrawLayerHtml(t.selectedLayerSerial), t.add_layer_change()
                        } else addLayerImage(h, c)
                    }
                })
            }

            jQuery("#button_add_layer").click(function () {
                addLayerText(1 == jQuery(this).data("isstatic") ? "static" : null)
            }), jQuery("#button_add_layer_image").click(function () {
                var a = 1 == jQuery(this).data("isstatic") ? rev_lang.select_static_layer_image : rev_lang.select_layer_image, b = 1 == jQuery(this).data("isstatic") ? "static" : null;
                UniteAdminRev.openAddImageDialog(a, function (a, c, d, e) {
                    addLayerImage({imgurl: a, imgid: c, imgwidth: d, imgheight: e}, b)
                })
            }), jQuery("#button_add_layer_video").click(function () {
                var a = jQuery('input[name="rs-gallery-type"]').val();
                t.prepare_video_layer_add(a)
            }), jQuery("#button_add_layer_audio").click(function () {
                t.prepare_video_layer_add("audio")
            }), t.prepare_video_layer_add = function (a) {
                switch (jQuery("#video_dialog_form").trigger("reset"), jQuery("#reset_video_dialog_tab").click(), a) {
                    case"youtube":
                        jQuery(".rs-show-when-youtube-stream").show(), jQuery(".rs-hide-when-youtube-stream").show();
                        break;
                    case"vimeo":
                        jQuery(".rs-show-when-vimeo-stream").show(), jQuery(".rs-hide-when-vimeo-stream").show();
                        break;
                    case"instagram":
                        jQuery(".rs-show-when-instagram-stream").show(), jQuery(".rs-hide-when-instagram-stream").show()
                }
                var b = 1 == jQuery(this).data("isstatic") ? "static" : null;
                UniteAdminRev.openVideoDialog(function (a) {
                    addLayerVideo(a, b)
                }, !1, a)
            }, jQuery("#button_add_layer_button").click(function () {
                setExampleButtons(), jQuery("#dialog_addbutton").dialog({
                    buttons: {
                        Close: function () {
                            jQuery("#dialog_addbutton").dialog("close")
                        }
                    }, minWidth: 830, minHeight: 500, modal: !0, dialogClass: "tpdialogs", create: function (a) {
                        jQuery(a.target).parent().find(".ui-dialog-titlebar").addClass("tp-slider-new-dialog-title")
                    }
                })
            }), jQuery("#button_add_layer_svg, #button_add_object_layer").click(function () {
                setExampleButtons(), t.callObjectLibraryDialog("object")
            }), jQuery("#button_change_image_objlib").click(function () {
                setExampleButtons(), t.callObjectLibraryDialog("background")
            }), jQuery("#button_change_image_yt").click(function () {
                a("https://img.youtube.com/vi/" + jQuery("#slide_bg_youtube").val() + "/sddefault.jpg")
            }), jQuery("body").on("click", ".layer-link-type-element", function () {
                var a = jQuery(this), b = a.closest(".list-of-layer-links"), c = b.find(".layer-link-type-element-cs"), d = t.getLayerByUniqueId(b.data("uniqueid")), e = {};
                e.groupLink = a.data("linktype"), t.updateLayer(d.serial, e);
                for (var f = 0; f < 6; f++)c.removeClass("layer-link-type-" + f), d.references.htmlLayer.removeClass("ldles_" + f);
                d.references.htmlLayer.addClass("ldles_" + e.groupLink), c.addClass("layer-link-type-" + e.groupLink)
            }), jQuery("body").on("click", ".objadd-single-item, .obj-item-size-selector", function () {
                var a = jQuery(this);
                if (-1 === jQuery.inArray(a.data("type"), [1, 2, "1", "2", "img"])) {
                    if (a.hasClass("obj-item-size-selector")) {
                        var d = "1";
                        switch (a.data("s")) {
                            case"xs":
                                d = .1;
                                break;
                            case"s":
                                d = .25;
                                break;
                            case"m":
                                d = .5;
                                break;
                            case"l":
                                d = .75;
                                break;
                            case"o":
                                d = 1
                        }
                        a = a.closest(".objadd-single-item")
                    }
                    var e = jQuery("#dialog_addobj").data("last_open_state"), f = jQuery("#obj-layer-bg-switcher").hasClass("addthisasbg");
                    switch (f = ("2" === a.data("type") || 2 === a.data("type")) && f, f = "layer" !== e && f, a.data("type")) {
                        case"img":
                        case"1":
                        case"2":
                        case 1:
                        case 2:
                            if (!rs_plugin_validated)return show_premium_dialog("register-to-acess-object-library"), jQuery("#dialog_addobj").dialog("close"), !1;
                            var g = jQuery("#button_add_layer_image").data("isstatic"), i = (1 == g ? rev_lang.select_static_layer_image : rev_lang.select_layer_image, g ? "static" : null), j = a.data("origsrc");
                            if (-1 !== j.indexOf("/"))if (!0 !== jQuery("#dialog_addobj").data("changeimg")) {
                                var k = {
                                    imgurl: j,
                                    imglib: "objectlibrary",
                                    imgproportion: !0,
                                    imgwidth: parseInt(a.data("mediawidth"), 0) * d,
                                    imgheight: parseInt(a.data("mediaheight"), 0) * d
                                };
                                if ("object" !== e || f) {
                                    if ("background" === e || f) b(j); else if ("layer" === e) {
                                        var l = {};
                                        l.bgimage_url = j, l.image_librarysize = {}, l.image_librarysize.width = parseInt(a.data("mediawidth"), 0) * d, l.image_librarysize.height = parseInt(a.data("mediaheight"), 0) * d, switchLayerBackground(l)
                                    }
                                } else addLayerImage(k, i)
                            } else if ("object" !== e || f) {
                                if ("background" === e || f) b(j); else if ("layer" === e) {
                                    var l = {};
                                    l.bgimage_url = j, l.image_librarysize = {}, l.image_librarysize.width = parseInt(a.data("mediawidth"), 0) * d, l.image_librarysize.height = parseInt(a.data("mediaheight"), 0) * d, switchLayerBackground(l)
                                }
                            } else {
                                var l = {};
                                l.image_url = j, l.image_librarysize = {}, l.image_librarysize.width = parseInt(a.data("mediawidth"), 0) * d, l.image_librarysize.height = parseInt(a.data("mediaheight"), 0) * d, l.scaleProportional = !0, t.updateCurrentLayer(l), resetCurrentElementSize(), redrawLayerHtml(t.selectedLayerSerial), t.add_layer_change()
                            } else c(j, i, d, jQuery("#dialog_addobj").data("changeimg"), e, f);
                            jQuery("#dialog_addobj").data("changeimg", !1);
                            break;
                        case"svg":
                            var m = a.find("svg");
                            if (!0 !== jQuery("#dialog_addobj").data("changesvg")) {
                                var n = {}, o = m.attr("width"), p = m.attr("height");
                                n.static_styles = {}, n.static_styles = t.setVal(n.static_styles, "color", "#000000", !0), n.deformation = {}, n["deformation-hover"] = {}, n.text = " ", n.alias = "SVG", n.type = "svg", n.style = "", n.svg = {}, n.svg.src = jQuery(this).data("src"), n = t.setVal(n, "max_width", o, !0), n = t.setVal(n, "max_height", p, !0), n.createdOnInit = !1, addLayer(n)
                            } else {
                                var j = jQuery(this).data("src"), o = m.attr("width"), p = m.attr("height");
                                serial = jQuery("#dialog_addobj").data("changesvgserial"), jQuery.get(j, function (a) {
                                    jQuery("#slide_layer_" + serial + " .innerslide_layer.tp-caption").first().html(""), jQuery("#slide_layer_" + serial + " .innerslide_layer.tp-caption").first()[0].innerHTML = (new XMLSerializer).serializeToString(a.documentElement), u.rebuildLayerIdle(jQuery("#slide_layer_" + serial));
                                    var b = t.getLayer(serial), c = parseInt(t.getVal(b, "max_width"), 0);
                                    parseInt(t.getVal(b, "max_height"), 0);
                                    p *= c / o, o = c, b.svg.src = j, b = t.setVal(b, "max_width", o, !0), b = t.setVal(b, "max_height", p, !0)
                                }), t.add_layer_change(), jQuery("#dialog_addobj").data("changesvg", !1)
                            }
                            break;
                        case"icon":
                            addLayerText(1 == jQuery(this).data("isstatic") ? "static" : null, '<i class="' + a.data("src") + '"></i>', 50)
                    }
                    jQuery("#dialog_addobj").dialog("close")
                }
            }), jQuery("#button_add_layer_shape").click(function () {
                setExampleShape(), jQuery("#dialog_addshape").dialog({
                    buttons: {
                        Add: function () {
                            var a = {};
                            a.static_styles = {}, a.deformation = {}, a["deformation-hover"] = {}, a.text = " ", a.alias = "Shape", a.type = "shape", a.style = "", a.internal_class = "tp-shape tp-shapewrapper", a.autolinebreak = !1, a.deformation["background-color"] = jQuery('input[name="adshape-color-1"]').val(), a.deformation["border-color"] = jQuery('input[name="adshape-border-color"]').val(), a.deformation["border-width"] = jQuery('input[name="adshape-border-width"]').val(), a.deformation["border-style"] = "solid", a.deformation["border-radius"] = [jQuery(".example-shape").css("borderTopLeftRadius"), jQuery(".example-shape").css("borderTopRightRadius"), jQuery(".example-shape").css("borderBottomRightRadius"), jQuery(".example-shape").css("borderBottomLeftRadius")], jQuery('input[name="shape_fullwidth"]').attr('checked') === 'checked' ? (a.max_width = "100%", a.cover_mode = "fullwidth") : a.max_width = jQuery('input[name="shape_width"]').val(), jQuery('input[name="shape_fullheight"]').attr('checked') === 'checked' ? (a.max_height = "100%", a.cover_mode = "fullheight") : a.max_height = jQuery('input[name="shape_height"]').val(), jQuery('input[name="shape_fullheight"]') && jQuery('input[name="shape_fullwidth"]').attr('checked') === 'checked' && (a.cover_mode = "cover"), a.createdOnInit = !1, addLayer(a), jQuery("#dialog_addshape").dialog("close")
                        }, Close: function () {
                            jQuery("#dialog_addshape").dialog("close")
                        }
                    }, minWidth: 830, minHeight: 500, modal: !0, create: function (a) {
                        jQuery(a.target).parent().find(".ui-dialog-titlebar").addClass("tp-slider-new-dialog-title")
                    }, dialogClass: "tpdialogs"
                })
            }), jQuery("#button_add_layer_import").click(function () {
                t.reset_import_layer(), jQuery("#dialog_addimport").dialog({
                    minWidth: 830,
                    minHeight: 500,
                    modal: !0,
                    dialogClass: "tpdialogs",
                    create: function (a) {
                        jQuery(a.target).parent().find(".ui-dialog-titlebar").addClass("tp-slider-new-dialog-title")
                    }
                })
            }), jQuery("#button_add_layer_group, #add_new_group").click(function () {
                addLayerGroup(1 == jQuery(this).data("isstatic") ? "static" : null)
            }), jQuery("#add_new_row").click(function () {
                addLayerRow(1 == jQuery(this).data("isstatic") ? "static" : null)
            }), jQuery("#rs-import-layer-slider").change(function () {
                var a = jQuery(this).val();
                return "-" == a ? (t.reset_import_layer(), !1) : void 0 === import_slides[a] ? (UniteAdminRev.ajaxRequest("get_import_slides_data", a, function (b) {
                    return void 0 !== b.slides ? (import_slides[a] = b.slides, t.do_clear_layer_import(), t.do_clear_slide_import(), t.do_add_slide_import(), t.do_show_sliders_import(), !0) : (alert(rev_lang.empty_data_retrieved_for_slider), t.reset_import_layer(), !1)
                }), !1) : (t.do_clear_layer_import(), t.do_clear_slide_import(), t.do_add_slide_import(), t.do_show_sliders_import(), void 0)
            }), jQuery("#rs-import-layer-type").change(function () {
                t.do_clear_layer_import(), t.do_show_sliders_import()
            }), jQuery("#rs-import-layer-slide").change(function () {
                t.do_clear_layer_import(), t.do_show_sliders_import()
            }), jQuery("body").on("click", "#rs-import-layer-holder li .import-layer-now", function () {
                if (confirm(rev_lang.import_selected_layer)) {
                    var a = jQuery(this), b = a.closest("li"), c = b.data("sliderid"), d = b.data("slideid"), e = b.data("id");
                    b.data("actiondep");
                    if (void 0 === import_slides[c])return !1;
                    if (void 0 === import_slides[c][d])return !1;
                    var g = t.get_layers_to_add_through_actions(import_slides[c][d].layers, e);
                    if (null !== g && g.length > 0)if (g.length > 1 && confirm(rev_lang.import_all_layer_from_actions)) {
                        var h = [];
                        h = t.get_action_dependencies(b, d, h);
                        for (var i in g) {
                            g[i].createdOnInit = !1, addLayer(g[i], !0), b.addClass("layerimported"), a.find("i").addClass("eg-icon-ok").removeClass("eg-icon-plus");
                            for (var j in h) {
                                var k = jQuery("#to-import-layer-id-" + d + "-" + h[j]);
                                k.hasClass("layerimported") || (k.addClass("layerimported"), k.find(".import-layer-now i").addClass("eg-icon-ok").removeClass("eg-icon-plus"))
                            }
                        }
                    } else for (var i in g) {
                        g[i] = t.remove_import_layer_actions(g[i]), g[i].createdOnInit = !1, g[i].p_uid = -1, addLayer(g[i], !0), b.addClass("layerimported"), a.find("i").addClass("eg-icon-ok").removeClass("eg-icon-plus");
                        break
                    }
                }
            }), t.object_library_loaded = !1, t.callObjectLibraryDialog = function (a) {
                t.object_library_loaded ? t.call_object_dialog(a) : UniteAdminRev.ajaxRequest("load_object_library", {}, function (b) {
                    if (b.success) {
                        for (var c in b.data.html)"tag" == b.data.html[c].type ? jQuery(".object-tag-list").append('<span class="obj_library_cats" id="obj_library_cats_' + b.data.html[c].handle + '" data-tag="' + b.data.html[c].handle + '">' + b.data.html[c].name + "</span>") : "inner" == b.data.html[c].type && jQuery("#object_library_results-inner").append('<div style="display:none" class="rs-obj-library"></div>');
                        for (var c in b.data.list) {
                            var d = {handle: c, list: []};
                            for (var e in b.data.list[c])d.list.push(b.data.list[c][e]);
                            obj_libraries.push(d)
                        }
                        push_objects_to_library(), t.object_library_loaded = !0, t.call_object_dialog(a)
                    }
                })
            }, t.call_object_dialog = function (a) {
                jQuery("#dialog_addobj").dialog({
                    width: jQuery(window).width(),
                    height: jQuery(window).height(),
                    modal: !0,
                    dialogClass: "tpdialogs fullscreen-dialog-window objectlibrary_dialog",
                    create: function (a, b) {
                        var c = jQuery(a.target).parent().find(".ui-dialog-titlebar");
                        c.addClass("tp-slider-new-dialog-title"), c.prepend('<span class="revlogo-mini" style="margin-right:15px;"></span>')
                    },
                    hide: {effect: "", delay: 250},
                    open: function (b) {
                        var c = jQuery(b.target).parent();
                        if (setTimeout(function () {
                                c.addClass("show")
                            }, 200), jQuery("#dialog_addobj").data("last_open_state") !== a) {
                            jQuery("#dialog_addobj").data("last_open_state", a);
                            var d = c.find(".ui-dialog-titlebar .ui-dialog-title");
                            "background" === a ? (jQuery(".obj_library_cats_filter").hide(), jQuery("#object_library_results").addClass("backgrounds"), jQuery("#obj_lib_main_cat_filt_bgimage").show().click(), d.html("Add Background Image")) : "object" === a ? (jQuery("#object_library_results").removeClass("backgrounds"), jQuery(".obj_library_cats_filter").show(), jQuery("#obj_lib_main_cat_filt_all").show().click(), d.html("Add Object Layer")) : "layer" === a && (jQuery(".obj_library_cats_filter").hide(), jQuery("#object_library_results").addClass("backgrounds"), jQuery("#obj_lib_main_cat_filt_bgimage").show(), jQuery("#obj_lib_main_cat_filt_image").show(), jQuery("#obj_lib_main_cat_filt_allimages").click(), d.html("Add Image as Layer Background"))
                        }
                        jQuery("#object_library_results-inner").perfectScrollbar("update"), 0 == jQuery(".obj_library_cats.selected").length && jQuery(".obj_library_cats").first().click(), jQuery("#dialog_addobj").closest(".ui-dialog").addClass("visible-fullscreen-dialog"), t.setObjectLibraryHeight()
                    },
                    beforeClose: function (a) {
                        jQuery(a.target).parent().removeClass("show")
                    },
                    close: function (a) {
                        jQuery("#dialog_addobj").closest(".ui-dialog").removeClass("visible-fullscreen-dialog")
                    }
                })
            }, t.setObjectLibraryHeight = function () {
                var a = jQuery("#dialog_addobj");
                if (a.is(":visible")) {
                    var b = jQuery("#object_library_results"), c = jQuery(window).height(), d = jQuery("#addobj-dialog-header").height(), e = a.parent().find(".tp-slider-new-dialog-title").height(), f = c - (d + e + 100);
                    a.height(c - e), b.height(f)
                }
            }, t.get_action_dependencies = function (a, b, c) {
                var d = a.data("actiondep");
                if ("" !== d) {
                    d = d.toString().split(",");
                    for (var e in d)if ("backgroundvideo" !== d[e] && "firstvideo" !== d[e] && -1 == jQuery.inArray(d[e], c)) {
                        c.push(d[e]);
                        var f = t.get_action_dependencies(jQuery("#to-import-layer-id-" + b + "-" + d[e]), b, c);
                        for (var g in f)-1 == jQuery.inArray(f[g], c) && c.push(f[g])
                    }
                }
                return c
            }, t.remove_import_layer_actions = function (a) {
                var b = ["tooltip_event", "action", "image_link", "link_follow", "link_open_in", "jump_to_slide", "scrollunder_offset", "actioncallback", "layer_target", "action_delay", "link_type", "toggle_layer_type", "toggle_class"];
                if (void 0 !== a.layer_action && void 0 !== a.layer_action.action && a.layer_action.action.length > 0)for (var c in a.layer_action.action)switch (a.layer_action.action[c]) {
                    case"start_in":
                    case"start_out":
                    case"toggle_layer":
                    case"start_video":
                    case"stop_video":
                    case"toggle_video":
                    case"mute_video":
                    case"unmute_video":
                    case"toggle_global_mute_video":
                    case"toggle_mute_video":
                    case"simulate_click":
                    case"toggle_class":
                        for (var d in b)void 0 !== a.layer_action[b[d]] && void 0 !== a.layer_action[b[d]][c] && delete a.layer_action[b[d]][c]
                }
                return a
            }, t.get_layers_to_add_through_actions = function (a, b) {
                var c = [];
                return c = t.add_layer_to_queue_by_unique_id(a, b, c), c = t.check_actions_change_unique_ids(c)
            }, t.add_layer_to_queue_by_unique_id = function (a, b, c) {
                for (var d in a)if (a[d].unique_id == b && (c.push(jQuery.extend(!0, {}, a[d])), void 0 !== a[d].layer_action && void 0 !== a[d].layer_action.action && a[d].layer_action.action.length > 0)) {
                    var e = a[d].layer_action;
                    for (var f in e.action)switch (e.action[f]) {
                        case"start_in":
                        case"start_out":
                        case"toggle_layer":
                        case"start_video":
                        case"stop_video":
                        case"toggle_video":
                        case"mute_video":
                        case"unmute_video":
                        case"toggle_mute_video":
                        case"toggle_global_mute_video":
                        case"simulate_click":
                        case"toggle_class":
                            if (e.layer_target[f]) {
                                var g = !0;
                                for (var h in c)if (c[h].unique_id == e.layer_target[f]) {
                                    g = !1;
                                    break
                                }
                                if (g)for (var i in a)if (a[i].unique_id == e.layer_target[f]) {
                                    t.add_layer_to_queue_by_unique_id(a, a[i].unique_id, c);
                                    break
                                }
                            }
                    }
                }
                return c
            }, t.check_actions_change_unique_ids = function (a) {
                var b = {};
                for (var c in a)unique_layer_id++, b[a[c].unique_id] = unique_layer_id, a[c].unique_id = unique_layer_id;
                for (var c in a)if (void 0 !== a[c].layer_action && void 0 !== a[c].layer_action.action && a[c].layer_action.action.length > 0) {
                    for (var d in a[c].layer_action.layer_target)for (var e in b)if (e == a[c].layer_action.layer_target[d]) {
                        a[c].layer_action.layer_target[d] = b[e];
                        break
                    }
                    for (var d in a[c].layer_action.jump_to_slide)a[c].layer_action.jump_to_slide[d] = "-1"
                }
                return a
            }, t.reset_import_layer = function () {
                jQuery('#rs-import-layer-slider').val("-"), jQuery('#rs-import-layer-slide').val("-"), jQuery('#rs-import-layer-type').val("-")
            }, t.do_add_slide_import = function () {
                var a = jQuery("#rs-import-layer-slider").val();
                if ("-" == a || void 0 === import_slides[a])return !1;
                for (var b in import_slides[a])jQuery("#rs-import-layer-slide").append(jQuery("<option></option>").val(b).text("Slide: " + import_slides[a][b].params.title))
            }, t.do_clear_slide_import = function () {
                jQuery("#rs-import-layer-slide option").each(function () {
                    "all" !== jQuery(this).val() && "-" !== jQuery(this).val() && jQuery(this).remove()
                })
            }, t.do_clear_layer_import = function () {
                jQuery("#rs-import-layer-holder").html("")
            }, t.do_show_sliders_import = function () {
                var a = jQuery("#rs-import-layer-slider").val(), b = jQuery("#rs-import-layer-slide").val(), c = jQuery("#rs-import-layer-type").val();
                if ("-" == a)return !1;
                if (void 0 === import_slides[a])return !1;
                for (var d in import_slides[a])if ("all" == b || "-" == b || b == d) {
                    import_slides[a][d].layers.length > 0 && jQuery("#rs-import-layer-holder").append('<li class="layer-import-slide-seperator">Slide Title - ' + import_slides[a][d].params.title + "</li>");
                    for (var e in import_slides[a][d].layers)if ("all" == c || "-" == c || c == import_slides[a][d].layers[e].type) {
                        var f = [];
                        f = t.get_action_string_dependencies(import_slides[a][d].layers[e], b, f, import_slides[a][d].layers);
                        var g = "off";
                        if (void 0 !== import_slides[a][d].layers[e].layer_action && void 0 !== import_slides[a][d].layers[e].layer_action.action && import_slides[a][d].layers[e].layer_action.action.length > 0) {
                            for (var h in import_slides[a][d].layers[e].layer_action.action)switch (import_slides[a][d].layers[e].layer_action.action[h]) {
                                case"start_in":
                                case"start_out":
                                case"toggle_layer":
                                case"start_video":
                                case"stop_video":
                                case"toggle_video":
                                case"mute_video":
                                case"unmute_video":
                                case"toggle_mute_video":
                                case"toggle_global_mute_video":
                                case"simulate_click":
                                case"toggle_class":
                                    f.push(import_slides[a][d].layers[e].layer_action.layer_target[h])
                            }
                            g = "on"
                        }
                        var i = global_layer_import_template({
                            withaction: g,
                            action_layers: f,
                            type: import_slides[a][d].layers[e].type,
                            alias: import_slides[a][d].layers[e].alias,
                            width: import_slides[a][d].layers[e].width,
                            height: import_slides[a][d].layers[e].height,
                            unique_id: import_slides[a][d].layers[e].unique_id,
                            slider_id: a,
                            slide_id: d
                        });
                        jQuery("#rs-import-layer-holder").append(i)
                    }
                }
            }, t.get_action_string_dependencies = function (a, b, c, d) {
                if (void 0 !== a.layer_action && void 0 !== a.layer_action.action && a.layer_action.action.length > 0)for (var e in a.layer_action.action)switch (a.layer_action.action[e]) {
                    case"start_in":
                    case"start_out":
                    case"toggle_layer":
                    case"start_video":
                    case"stop_video":
                    case"toggle_video":
                    case"mute_video":
                    case"unmute_video":
                    case"toggle_mute_video":
                    case"toggle_global_mute_video":
                    case"simulate_click":
                    case"toggle_class":
                        if (void 0 !== a.layer_action.layer_target && void 0 !== a.layer_action.layer_target[e] && "backgroundvideo" !== a.layer_action.layer_target[e] && "firstvideo" !== a.layer_action.layer_target[e] && -1 == jQuery.inArray(a.layer_action.layer_target[e], c)) {
                            c.push(a.layer_action.layer_target[e]);
                            for (var f in d)if (d[f].unique_id == a.layer_action.layer_target[e]) {
                                var g = t.get_action_string_dependencies(d[f], b, c, d);
                                for (var h in g)-1 == jQuery.inArray(g[h], c) && c.push(g[h]);
                                break
                            }
                        }
                }
                return c
            }, jQuery("body").on("click", ".addbutton-examples-wrapper a.rev-btn", function () {
                var a = {};
                a.static_styles = {}, a.inline = {
                    idle: {},
                    hover: {}
                }, a.deformation = {}, a["deformation-hover"] = {}, a.text = jQuery('input[name="adbutton-text"]').val(), a.type = "button", a.subtype = "roundbutton", a.specialsettings = {}, a.alias = "Button", a.style = "", a.internal_class = jQuery(this).data("needclass"), a["resize-full"] = !1, a.resizeme = !1, a.static_styles.color = jQuery('input[name="adbutton-color-2"]').val(), a.static_styles["font-size"] = jQuery(this).css("font-size"), a.static_styles["line-height"] = jQuery(this).css("font-size"), a.static_styles["font-weight"] = jQuery(this).css("font-weight"), a.max_width = "auto", a.max_height = "auto", a.autolinebreak = !1, a.deformation.padding = [jQuery(this).css("paddingTop"), jQuery(this).css("paddingRight"), jQuery(this).css("paddingBottom"), jQuery(this).css("paddingLeft")], a.deformation["font-family"] = jQuery('input[name="adbutton-fontfamily"]').val(), a.deformation["background-color"] = jQuery('input[name="adbutton-color-1"]').val(), a.deformation["border-radius"] = [jQuery(this).css("borderTopLeftRadius"), jQuery(this).css("borderTopRightRadius"), jQuery(this).css("borderBottomRightRadius"), jQuery(this).css("borderBottomLeftRadius")], a.deformation["border-color"] = jQuery('input[name="adbutton-border-color"]').val(), a.deformation["border-opacity"] = jQuery('input[name="adbutton-border-opacity"]').val(), a.deformation["border-width"] = [jQuery('input[name="adbutton-border-width"]').val(), jQuery('input[name="adbutton-border-width"]').val(), jQuery('input[name="adbutton-border-width"]').val(), jQuery('input[name="adbutton-border-width"]').val()], a.deformation["border-style"] = "solid", jQuery(this).hasClass("rev-withicon") ? (a.deformation["icon-class"] = jQuery(".addbutton-icon i").attr("class"), a.text += '<i class="' + a.deformation["icon-class"] + '"></i>') : a.deformation["icon-class"] = "", a.hover = !0, a["deformation-hover"]["background-color"] = jQuery('input[name="adbutton-color-1-h"]').val(), a["deformation-hover"].color = jQuery('input[name="adbutton-color-2-h"]').val(), a["deformation-hover"]["border-radius"] = [jQuery(this).css("borderTopLeftRadius"), jQuery(this).css("borderTopRightRadius"), jQuery(this).css("borderBottomRightRadius"), jQuery(this).css("borderBottomLeftRadius")], a["deformation-hover"]["border-color"] = jQuery('input[name="adbutton-border-color-h"]').val(), a["deformation-hover"]["border-opacity"] = jQuery('input[name="adbutton-border-opacity-h"]').val(), a["deformation-hover"]["border-width"] = [jQuery('input[name="adbutton-border-width-h"]').val(), jQuery('input[name="adbutton-border-width-h"]').val(), jQuery('input[name="adbutton-border-width-h"]').val(), jQuery('input[name="adbutton-border-width-h"]').val()], a["deformation-hover"]["border-style"] = "solid", jQuery(this).hasClass("rev-hiddenicon") ? (a["deformation-hover"]["icon-class"] = jQuery(".addbutton-icon i").attr("class"), a.text += ' <i class="' + a["deformation-hover"]["icon-class"] + '"></i>') : a["deformation-hover"]["icon-class"] = "", jQuery(this).hasClass("rev-btn") && (a.deformation["text-decoration"] = "none", a["deformation-hover"].css_cursor = "pointer", a.inline.idle.outline = "none", a.inline.idle["box-shadow"] = "none", a.inline.idle["box-sizing"] = "border-box", a.inline.idle["-moz-box-sizing"] = "border-box", a.inline.idle["-webkit-box-sizing"] = "border-box"), jQuery(this).hasClass("rev-uppercase") && (a.inline.idle["text-transform"] = "uppercase", a.inline.idle["letter-spacing"] = "1px"), a.createdOnInit = !1, addLayer(a), jQuery("#dialog_addbutton").dialog("close")
            });
            var d = function (a) {
                var b = {};
                return b.static_styles = {}, b.inline = {
                    idle: {},
                    hover: {}
                }, b.deformation = {}, b["deformation-hover"] = {}, b.text = a.html(), b.type = "button", b.specialsettings = {}, b.style = "", b.internal_class = a.data("needclass"), b["resize-full"] = !1, b.resizeme = !1, b.max_width = a.css("width"), b.max_height = a.css("height"), b.deformation.padding = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")], b.deformation["background-color"] = a.css("backgroundColor"), b.deformation["border-color"] = a.css("borderTopColor"), b.deformation["border-radius"] = [a.css("borderTopLeftRadius"), a.css("borderTopRightRadius"), a.css("borderBottomRightRadius"), a.css("borderBottomLeftRadius")], b.deformation["border-width"] = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")], b.deformation["border-style"] = a.css("borderTopStyle"), b["deformation-hover"].css_cursor = a.css("cursor"), b.inline.idle["box-sizing"] = "border-box", b.inline.idle["-moz-box-sizing"] = "border-box", b.inline.idle["-webkit-box-sizing"] = "border-box", b
            };
            jQuery("body").on("click", ".addbutton-examples-wrapper div.rev-burger", function () {
                var a = d(jQuery(this));
                a.alias = "Burger Button", a.subtype = "burgerbutton", a.layer_action = {}, a.layer_action.tooltip_event = [], a.layer_action.tooltip_event.push("click"), a.layer_action.action = [], a.layer_action.action.push("toggle_class"), a.layer_action.layer_target = [], a.layer_action.layer_target.push("self"), a.layer_action.action_delay = [], a.layer_action.action_delay.push(0), a.layer_action.toggle_class = [], a.layer_action.toggle_class.push("open"), a.createdOnInit = !1, addLayer(a), jQuery("#dialog_addbutton").dialog("close")
            }), jQuery("body").on("click", ".addbutton-examples-wrapper span.rev-control-btn", function () {
                var a = d(jQuery(this));
                a.alias = "Control Button", a.subtype = "controlbutton", void 0 === a.static_styles && (a.static_styles = {}), a.static_styles["font-size"] = jQuery(this).css("font-size"), a.static_styles["line-height"] = jQuery(this).css("line-height"), a.static_styles["font-weight"] = jQuery(this).css("font-weight"), a.static_styles.color = jQuery(this).css("color"), a.deformation["font-family"] = jQuery(this).css("font-family"), a["text-align"] = jQuery(this).css("text-align"), a.deformation["vertical-align"] = jQuery(this).css("vertical-align"), a.createdOnInit = !1, addLayer(a), jQuery("#dialog_addbutton").dialog("close")
            }), jQuery("body").on("click", ".addbutton-examples-wrapper span.rev-scroll-btn", function () {
                var a = d(jQuery(this));
                a.subtype = "scrollbutton", a.alias = "Scroll Button", a.createdOnInit = !1, addLayer(a), jQuery("#dialog_addbutton").dialog("close")
            }), jQuery("#linkInsertTemplate").click(function () {
                if (jQuery(this).hasClass("disabled"))return !1;
                add_meta_into = "";
                var a = {
                    Cancel: function () {
                        jQuery("#dialog_template_insert").dialog("close")
                    }
                };
                jQuery("#dialog_template_insert").dialog({
                    buttons: a,
                    minWidth: 700,
                    dialogClass: "tpdialogs",
                    modal: !0,
                    create: function (a) {
                        jQuery(a.target).parent().find(".ui-dialog-titlebar").addClass("tp-slider-new-dialog-title")
                    }
                })
            }), jQuery(".rs-param-meta-open").click(function () {
                add_meta_into = "params_" + jQuery(this).data("curid");
                var a = {
                    Cancel: function () {
                        jQuery("#dialog_template_insert").dialog("close")
                    }
                };
                jQuery("#dialog_template_insert").dialog({
                    buttons: a,
                    minWidth: 700,
                    dialogClass: "tpdialogs",
                    modal: !0,
                    create: function (a) {
                        jQuery(a.target).parent().find(".ui-dialog-titlebar").addClass("tp-slider-new-dialog-title")
                    }
                })
            }), jQuery("#rs-undo-handler").click(function () {
                t.undo_redo_layer("undo")
            }), jQuery("#rs-redo-handler").click(function () {
                t.undo_redo_layer("redo")
            }), jQuery("body").on("click", ".rs-undo-step", function () {
                var a = jQuery(this).data("gotokey");
                t.undo_redo_layer("undo", a)
            }), jQuery("body").on("click", ".rs-redo-step", function () {
                var a = jQuery(this).data("gotokey");
                t.undo_redo_layer("redo", a)
            })
        }, createNewAnimObj = function (a) {
            var b = new Object;
            return "start" == a ? (b.movex = jQuery('input[name="layer_anim_xstart"]').val(), b.movey = jQuery('input[name="layer_anim_ystart"]').val(), b.mask = jQuery("#masking-start").attr('checked') === 'checked', b.use_text_c = jQuery("#use_text_color_start").attr('checked') === 'checked', b.use_bg_c = jQuery("#use_bg_color_start").attr('checked') === 'checked', b.movez = jQuery('input[name="layer_anim_zstart"]').val(), b.rotationx = jQuery('input[name="layer_anim_xrotate"]').val(), b.rotationy = jQuery('input[name="layer_anim_yrotate"]').val(), b.rotationz = jQuery('input[name="layer_anim_zrotate"]').val(), b.scalex = jQuery('input[name="layer_scale_xstart"]').val(), b.scaley = jQuery('input[name="layer_scale_ystart"]').val(), b.skewx = jQuery('input[name="layer_skew_xstart"]').val(), b.skewy = jQuery('input[name="layer_skew_ystart"]').val(), b.captionopacity = jQuery('input[name="layer_opacity_start"]').val(), b.blurfilter = jQuery('input[name="blurfilter_start"]').val(), b.grayscalefilter = jQuery('input[name="grayscalefilter_start"]').val(), b.brightnessfilter = jQuery('input[name="brightnessfilter_start"]').val(), b.mask_x = jQuery('input[name="mask_anim_xstart"]').val(), b.mask_y = jQuery('input[name="mask_anim_ystart"]').val(), b.text_c = jQuery('input[name="text_color_start"]').val(), b.bg_c = jQuery('input[name="bg_color_start"]').val(), b.mask_ease = jQuery('input[name="mask_easing"]').val(), b.mask_speed = jQuery('input[name="mask_speed"]').val(), b.easing = jQuery('select[name="layer_easing"]').val(), b.speed = jQuery('input[name="layer_speed"]').val(), b.split = jQuery('select[name="layer_split"]').val(), b.split_direction = jQuery('select[name="layer_split_direction"]').val(), b.splitdelay = jQuery('input[name="layer_splitdelay"]').val(), b.sfx_effect = jQuery("#sfx_in_effect").val(), b.movex_reverse = jQuery("#layer_anim_xstart_reverse").attr('checked') === 'checked', b.movey_reverse = jQuery("#layer_anim_ystart_reverse").attr('checked') === 'checked', b.rotationx_reverse = jQuery("#layer_anim_xrotate_reverse").attr('checked') === 'checked', b.rotationy_reverse = jQuery("#layer_anim_yrotate_reverse").attr('checked') === 'checked', b.rotationz_reverse = jQuery("#layer_anim_zrotate_reverse").attr('checked') === 'checked', b.scalex_reverse = jQuery("#layer_scale_xstart_reverse").attr('checked') === 'checked', b.scaley_reverse = jQuery("#layer_scale_ystart_reverse").attr('checked') === 'checked', b.skewx_reverse = jQuery("#layer_skew_xstart_reverse").attr('checked') === 'checked', b.skewy_reverse = jQuery("#layer_skew_ystart_reverse").attr('checked') === 'checked', b.mask_x_reverse = jQuery("#mask_anim_xstart_reverse").attr('checked') === 'checked', b.mask_y_reverse = jQuery("#mask_anim_ystart_reverse").attr('checked') === 'checked') : (b.use_text_c = jQuery("#use_text_color_end").attr('checked') === 'checked', b.use_bg_c = jQuery("#use_bg_color_end").attr('checked') === 'checked', b.text_c = jQuery('input[name="text_color_end"]').val(), b.bg_c = jQuery('input[name="bg_color_end"]').val(), b.movex = jQuery("#layer_anim_xend").val(), b.movey = jQuery("#layer_anim_yend").val(), b.movez = jQuery("#layer_anim_zend").val(), b.rotationx = jQuery("#layer_anim_xrotate_end").val(), b.rotationy = jQuery("#layer_anim_yrotate_end").val(), b.rotationz = jQuery("#layer_anim_zrotate_end").val(), b.scalex = jQuery("#layer_scale_xend").val(), b.scaley = jQuery("#layer_scale_yend").val(), b.skewx = jQuery("#layer_skew_xend").val(), b.skewy = jQuery("#layer_skew_yend").val(), b.captionopacity = jQuery("#layer_opacity_end").val(), b.mask = jQuery("#masking-end").attr('checked') === 'checked', b.mask_x = jQuery("#mask_anim_xend").val(), b.mask_y = jQuery("#mask_anim_yend").val(), b.easing = jQuery("#layer_endeasing").val(), b.speed = jQuery("#layer_endspeed").val(), b.split = jQuery("#layer_endsplit").val(), b.split_direction = jQuery("#layer_endsplit_direction").val(), b.splitdelay = jQuery("#layer_endsplitdelay").val(), b.sfx_effect = jQuery("#sfx_out_effect").val(), b.movex_reverse = jQuery("#layer_anim_xend_reverse").attr('checked') === 'checked', b.movey_reverse = jQuery("#layer_anim_yend_reverse").attr('checked') === 'checked', b.rotationx_reverse = jQuery("#layer_anim_xrotate_end_reverse").attr('checked') === 'checked', b.rotationy_reverse = jQuery("#layer_anim_yrotate_end_reverse").attr('checked') === 'checked', b.rotationz_reverse = jQuery("#layer_anim_zrotate_end_reverse").attr('checked') === 'checked', b.scalex_reverse = jQuery("#layer_scale_xend_reverse").attr('checked') === 'checked', b.scaley_reverse = jQuery("#layer_scale_yend_reverse").attr('checked') === 'checked', b.skewx_reverse = jQuery("#layer_skew_xend_reverse").attr('checked') === 'checked', b.skewy_reverse = jQuery("#layer_skew_yend_reverse").attr('checked') === 'checked', b.mask_x_reverse = jQuery("#mask_anim_xend_reverse").attr('checked') === 'checked', b.mask_y_reverse = jQuery("#mask_anim_xend_reverse").attr('checked') === 'checked'), b
        }, setNewAnimFromObj = function (a, b) {
            if (void 0 == b)return !0;
            "start" == a ? (void 0 !== b.movex ? jQuery('input[name="layer_anim_xstart"]').val(b.movex) : jQuery('input[name="layer_anim_xstart"]').val(0), void 0 !== b.movey ? jQuery('input[name="layer_anim_ystart"]').val(b.movey) : jQuery('input[name="layer_anim_ystart"]').val(0), void 0 !== b.movez ? jQuery('input[name="layer_anim_zstart"]').val(b.movez) : jQuery('input[name="layer_anim_zstart"]').val(0), void 0 !== b.rotationx ? jQuery('input[name="layer_anim_xrotate"]').val(b.rotationx) : jQuery('input[name="layer_anim_xrotate"]').val(0), void 0 !== b.rotationy ? jQuery('input[name="layer_anim_yrotate"]').val(b.rotationy) : jQuery('input[name="layer_anim_yrotate"]').val(0), void 0 !== b.rotationz ? jQuery('input[name="layer_anim_zrotate"]').val(b.rotationz) : jQuery('input[name="layer_anim_zrotate"]').val(0), void 0 !== b.scalex ? jQuery('input[name="layer_scale_xstart"]').val(b.scalex) : jQuery('input[name="layer_scale_xstart"]').val(0), void 0 !== b.scaley ? jQuery('input[name="layer_scale_ystart"]').val(b.scaley) : jQuery('input[name="layer_scale_ystart"]').val(0), void 0 !== b.skewx ? jQuery('input[name="layer_skew_xstart"]').val(b.skewx) : jQuery('input[name="layer_skew_xstart"]').val(0), void 0 !== b.skewy ? jQuery('input[name="layer_skew_ystart"]').val(b.skewy) : jQuery('input[name="layer_skew_ystart"]').val(0), void 0 !== b.captionopacity ? jQuery('input[name="layer_opacity_start"]').val(b.captionopacity) : jQuery('input[name="layer_opacity_start"]').val(0), void 0 !== b.blurfilter ? jQuery('input[name="blurfilter_start"]').val(b.blurfilter) : jQuery('input[name="blurfilter_start"]').val(0), void 0 !== b.grayscalefilter ? jQuery('input[name="grayscalefilter_start"]').val(b.grayscalefilter) : jQuery('input[name="grayscalefilter_start"]').val(0), void 0 !== b.brightnessfilter ? jQuery('input[name="brightnessfilter_start"]').val(b.brightnessfilter) : jQuery('input[name="brightnessfilter_start"]').val(100), void 0 === b.mask || "true" != b.mask && 1 != b.mask ? jQuery("#masking-start").attr("checked", !1) : jQuery("#masking-start").attr("checked", !0), void 0 === b.use_text_c || "true" != b.use_text_c && 1 != b.use_text_c ? jQuery("#use_text_color_start").attr("checked", !1) : jQuery("#use_text_color_start").attr("checked", !0), void 0 === b.use_bg_c || "true" != b.use_bg_c && 1 != b.use_bg_c ? jQuery("#use_bg_color_start").attr("checked", !1) : jQuery("#use_bg_color_start").attr("checked", !0), void 0 !== b.text_c ? jQuery('input[name="text_color_start"]').val(b.text_c) : jQuery('input[name="text_color_start"]').val("transparent"), void 0 !== b.bg_c ? jQuery('input[name="bg_color_start"]').val(b.bg_c) : jQuery('input[name="bg_color_start"]').val("transparent"), void 0 !== b.mask_x ? jQuery('input[name="mask_anim_xstart"]').val(b.mask_x) : jQuery('input[name="mask_anim_xstart"]').val(0), void 0 !== b.mask_y ? jQuery('input[name="mask_anim_ystart"]').val(b.mask_y) : jQuery('input[name="mask_anim_ystart"]').val(0), void 0 !== b.mask_ease ? jQuery('input[name="mask_easing"]').val(b.mask_ease) : jQuery('input[name="mask_easing"]').val(0), void 0 !== b.mask_speed ? jQuery('input[name="mask_speed"]').val(b.mask_speed) : jQuery('input[name="mask_speed"]').val(0), void 0 !== b.easing && jQuery('select[name="layer_easing"] option[value="' + b.easing + '"]').attr("selected", "selected"), void 0 !== b.speed && jQuery('input[name="layer_speed"]').val(b.speed), void 0 !== b.sfx_color_in && jQuery('input[name="sfx_color_in"]').val(b.sfx_color_in), void 0 !== b.split && jQuery('select[name="layer_split"] option[value="' + b.split + '"]').attr("selected", "selected"), void 0 !== b.split_direction && jQuery('select[name="layer_split_direction"] option[value="' + b.split_direction + '"]').attr("selected", "selected"), void 0 !== b.splitdelay && jQuery('input[name="layer_splitdelay"]').val(b.splitdelay), void 0 === b.movex_reverse || "true" != b.movex_reverse && 1 != b.movex_reverse ? jQuery("#layer_anim_xstart_reverse").attr("checked", !1) : jQuery("#layer_anim_xstart_reverse").attr("checked", !0), void 0 === b.movey_reverse || "true" != b.movey_reverse && 1 != b.movey_reverse ? jQuery("#layer_anim_ystart_reverse").attr("checked", !1) : jQuery("#layer_anim_ystart_reverse").attr("checked", !0), void 0 === b.rotationx_reverse || "true" != b.rotationx_reverse && 1 != b.rotationx_reverse ? jQuery('input[name="layer_anim_xrotate_start_reverse"]').attr("checked", !1) : jQuery('input[name="layer_anim_xrotate_start_reverse"]').attr("checked", !0), void 0 === b.rotationy_reverse || "true" != b.rotationy_reverse && 1 != b.rotationy_reverse ? jQuery('input[name="layer_anim_yrotate_start_reverse"]').attr("checked", !1) : jQuery('input[name="layer_anim_yrotate_start_reverse"]').attr("checked", !0), void 0 === b.rotationz_reverse || "true" != b.rotationz_reverse && 1 != b.rotationz_reverse ? jQuery('input[name="layer_anim_zrotate_start_reverse"]').attr("checked", !1) : jQuery('input[name="layer_anim_zrotate_start_reverse"]').attr("checked", !0), void 0 === b.scalex_reverse || "true" != b.scalex_reverse && 1 != b.scalex_reverse ? jQuery("#layer_scale_xstart_reverse").attr("checked", !1) : jQuery("#layer_scale_xstart_reverse").attr("checked", !0), void 0 === b.scaley_reverse || "true" != b.scaley_reverse && 1 != b.scaley_reverse ? jQuery("#layer_scale_ystart_reverse").attr("checked", !1) : jQuery("#layer_scale_ystart_reverse").attr("checked", !0), void 0 === b.skewx_reverse || "true" != b.skewx_reverse && 1 != b.skewx_reverse ? jQuery("#layer_skew_xstart_reverse").attr("checked", !1) : jQuery("#layer_skew_xstart_reverse").attr("checked", !0), void 0 === b.skewy_reverse || "true" != b.skewy_reverse && 1 != b.skewy_reverse ? jQuery("#layer_skew_ystart_reverse").attr("checked", !1) : jQuery("#layer_skew_ystart_reverse").attr("checked", !0), void 0 === b.mask_x_reverse || "true" != b.mask_x_reverse && 1 != b.mask_x_reverse ? jQuery("#mask_anim_xstart_reverse").attr("checked", !1) : jQuery("#mask_anim_xstart_reverse").attr("checked", !0), void 0 === b.mask_y_reverse || "true" != b.mask_y_reverse && 1 != b.mask_y_reverse ? jQuery("#mask_anim_ystart_reverse").attr("checked", !1) : jQuery("#mask_anim_ystart_reverse").attr("checked", !0)) : (void 0 === b.use_text_c || "true" != b.use_text_c && 1 != b.use_text_c ? jQuery("#use_text_color_end").attr("checked", !1) : jQuery("#use_text_color_end").attr("checked", !0), void 0 === b.use_bg_c || "true" != b.use_bg_c && 1 != b.use_bg_c ? jQuery("#use_bg_color_end").attr("checked", !1) : jQuery("#use_bg_color_end").attr("checked", !0), void 0 !== b.text_c ? jQuery('input[name="text_color_end"]').val(b.text_c) : jQuery('input[name="text_color_end"]').val("transparent"), void 0 !== b.bg_c ? jQuery('input[name="bg_color_end"]').val(b.bg_c) : jQuery('input[name="bg_color_end"]').val("transparent"), void 0 !== b.movex ? jQuery("#layer_anim_xend").val(b.movex) : jQuery("#layer_anim_xend").val(0), void 0 !== b.movey ? jQuery("#layer_anim_yend").val(b.movey) : jQuery("#layer_anim_yend").val(0), void 0 !== b.movez ? jQuery("#layer_anim_zend").val(b.movez) : jQuery("#layer_anim_zend").val(0), void 0 !== b.rotationx ? jQuery("#layer_anim_xrotate_end").val(b.rotationx) : jQuery("#layer_anim_xrotate_end").val(0), void 0 !== b.rotationy ? jQuery("#layer_anim_yrotate_end").val(b.rotationy) : jQuery("#layer_anim_yrotate_end").val(0), void 0 !== b.rotationz ? jQuery("#layer_anim_zrotate_end").val(b.rotationz) : jQuery("#layer_anim_zrotate_end").val(0), void 0 !== b.scalex ? jQuery("#layer_scale_xend").val(b.scalex) : jQuery("#layer_scale_xend").val(0), void 0 !== b.scaley ? jQuery("#layer_scale_yend").val(b.scaley) : jQuery("#layer_scale_yend").val(0), void 0 !== b.skewx ? jQuery("#layer_skew_xend").val(b.skewx) : jQuery("#layer_skew_xend").val(0), void 0 !== b.skewy ? jQuery("#layer_skew_yend").val(b.skewy) : jQuery("#layer_skew_yend").val(0), void 0 !== b.captionopacity ? jQuery("#layer_opacity_end").val(b.captionopacity) : jQuery("#layer_opacity_end").val(0), void 0 === b.mask || "true" != b.mask && 1 != b.mask ? jQuery("#masking-end").attr("checked", !1) : jQuery("#masking-end").attr("checked", !0), void 0 !== b.mask_x ? jQuery("#mask_anim_xend").val(b.mask_x) : jQuery("#mask_anim_xend").val(0), void 0 !== b.mask_y ? jQuery("#mask_anim_yend").val(b.mask_y) : jQuery("#mask_anim_yend").val(0), void 0 !== b.easing && jQuery('#layer_endeasing option[value="' + b.easing + '"]').attr("selected", "selected"), void 0 !== b.speed && jQuery("#layer_endspeed").val(b.speed), void 0 !== b.sfxcolor && jQuery('input[name="sfx_color_end"]').val(b.sfxcolor), void 0 !== b.split && jQuery('#layer_endsplit option[value="' + b.split + '"]').attr("selected", "selected"), void 0 !== b.split_direction && jQuery('#layer_endsplit_direction option[value="' + b.split_direction + '"]').attr("selected", "selected"), void 0 !== b.splitdelay && jQuery("#layer_endsplitdelay").val(b.splitdelay), void 0 === b.movex_reverse || "true" != b.movex_reverse && 1 != b.movex_reverse ? jQuery("#layer_anim_xend_reverse").attr("checked", !1) : jQuery("#layer_anim_xend_reverse").attr("checked", !0), void 0 === b.movey_reverse || "true" != b.movey_reverse && 1 != b.movey_reverse ? jQuery("#layer_anim_yend_reverse").attr("checked", !1) : jQuery("#layer_anim_yend_reverse").attr("checked", !0), void 0 === b.rotationx_reverse || "true" != b.rotationx_reverse && 1 != b.rotationx_reverse ? jQuery("#layer_anim_xrotate_end_reverse").attr("checked", !1) : jQuery("#layer_anim_xrotate_end_reverse").attr("checked", !0), void 0 === b.rotationy_reverse || "true" != b.rotationy_reverse && 1 != b.rotationy_reverse ? jQuery("#layer_anim_yrotate_end_reverse").attr("checked", !1) : jQuery("#layer_anim_yrotate_end_reverse").attr("checked", !0), void 0 === b.rotationz_reverse || "true" != b.rotationz_reverse && 1 != b.rotationz_reverse ? jQuery("#layer_anim_zrotate_end_reverse").attr("checked", !1) : jQuery("#layer_anim_zrotate_end_reverse").attr("checked", !0), void 0 === b.scalex_reverse || "true" != b.scalex_reverse && 1 != b.scalex_reverse ? jQuery("#layer_scale_xend_reverse").attr("checked", !1) : jQuery("#layer_scale_xend_reverse").attr("checked", !0), void 0 === b.scaley_reverse || "true" != b.scaley_reverse && 1 != b.scaley_reverse ? jQuery("#layer_scale_yend_reverse").attr("checked", !1) : jQuery("#layer_scale_yend_reverse").attr("checked", !0), void 0 === b.skewx_reverse || "true" != b.skewx_reverse && 1 != b.skewx_reverse ? jQuery("#layer_skew_xend_reverse").attr("checked", !1) : jQuery("#layer_skew_xend_reverse").attr("checked", !0), void 0 === b.skewy_reverse || "true" != b.skewy_reverse && 1 != b.skewy_reverse ? jQuery("#layer_skew_yend_reverse").attr("checked", !1) : jQuery("#layer_skew_yend_reverse").attr("checked", !0), void 0 === b.mask_x_reverse || "true" != b.mask_x_reverse && 1 != b.mask_x_reverse ? jQuery("#mask_anim_xend_reverse").attr("checked", !1) : jQuery("#mask_anim_xend_reverse").attr("checked", !0), void 0 === b.mask_y_reverse || "true" != b.mask_y_reverse && 1 != b.mask_y_reverse ? jQuery("#mask_anim_yend_reverse").attr("checked", !1) : jQuery("#mask_anim_yend_reverse").attr("checked", !0)), void 0 === b.mask || "true" != b.mask && 1 != b.mask ? jQuery(".mask-start-settings").hide() : jQuery(".mask-start-settings").show(), RevSliderSettings.onoffStatus(jQuery("#masking-start")), RevSliderSettings.onoffStatus(jQuery("#masking-end")), RevSliderSettings.onoffStatus(jQuery("#use_text_color_start")), RevSliderSettings.onoffStatus(jQuery("#use_bg_color_start")), RevSliderSettings.onoffStatus(jQuery("#use_text_color_end")), RevSliderSettings.onoffStatus(jQuery("#use_bg_color_end")), t.updateReverseList()
        }, checkMaskingAvailabity = function () {
            1 != jQuery("#layer__scalex").val() || 1 != jQuery("#layer__scaley").val() || 0 != parseInt(jQuery("#layer__skewx").val(), 0) || 0 != parseInt(jQuery("#layer__skewy").val(), 0) || 0 != parseInt(jQuery("#layer__xrotate").val(), 0) || 0 != parseInt(jQuery("#layer__yrotate").val(), 0) || 0 != parseInt(jQuery("#layer_2d_rotation").val(), 0) ? (jQuery(".mask-not-available").show(), jQuery(".mask-is-available").hide(), jQuery("#masking-start").attr("checked", !1), jQuery("#masking-end").attr("checked", !1), jQuery(".mask-start-settings").hide(), jQuery(".mask-end-settings").hide(), jQuery(".tp-showmask").removeClass("tp-showmask"), RevSliderSettings.onoffStatus(jQuery("#masking-start")), RevSliderSettings.onoffStatus(jQuery("#masking-end")), u.rebuildLayerIdle(getjQueryLayer()), t.updateLayerFromFields()) : (jQuery(".mask-not-available").hide(), jQuery(".mask-is-available").show())
        }, checkIfAnimExists = function (a) {
            if ("object" == typeof initLayerAnims && !jQuery.isEmptyObject(initLayerAnims))for (var b in initLayerAnims)if (initLayerAnims[b].handle == a)return initLayerAnims[b].id;
            return !1
        }, checkIfAnimIsEditable = function (a) {
            if ("object" == typeof initLayerAnims && !jQuery.isEmptyObject(initLayerAnims))for (var b in initLayerAnims)if (initLayerAnims[b].handle == a)return initLayerAnims[b].id;
            return !1
        }, deleteAnimInDb = function (a) {
            if (UniteAdminRev.setErrorMessageID("dialog_error_message"), "" != (a = jQuery.trim(a))) {
                "customin" == currentAnimationType ? jQuery("#layer_animation option") : jQuery("#layer_endanimation option");
                UniteAdminRev.ajaxRequest("delete_custom_anim", a, function (b) {
                    jQuery("#layer_animation option:selected") != a && jQuery("#layer_animation option:selected") != a.replace("customout", "customin") || jQuery('#layer_animation').val("tp-fade"), jQuery("#layer_endanimation option:selected") != a && jQuery("#layer_endanimation option:selected") != a.replace("customin", "customout") || jQuery('#layer_endanimation').val("tp-fade"), t.updateInitLayerAnim(b.customfull), updateLayerAnimsInput(b.customin, "customin"), updateLayerAnimsInput(b.customout, "customout")
                })
            }
        }, renameAnimInDb = function (a, b) {
            var c = {};
            c.id = a, c.handle = b, UniteAdminRev.ajaxRequest("update_custom_anim_name", c, function (a) {
                t.updateInitLayerAnim(a.customfull), updateLayerAnimsInput(a.customin, "customin"), updateLayerAnimsInput(a.customout, "customout"), selectLayerAnim(b)
            })
        }, updateAnimInDb = function (a, b, c) {
            UniteAdminRev.setErrorMessageID("dialog_error_message"), b.handle = a, !1 === c ? UniteAdminRev.ajaxRequest("insert_custom_anim", b, function (b) {
                t.updateInitLayerAnim(b.customfull), updateLayerAnimsInput(b.customin, "customin"), updateLayerAnimsInput(b.customout, "customout"), selectLayerAnim(a)
            }) : UniteAdminRev.ajaxRequest("update_custom_anim", b, function (c) {
                t.updateInitLayerAnim(c.customfull), updateLayerAnimsInput(c.customin, "customin"), updateLayerAnimsInput(c.customout, "customout"), selectLayerAnim(a);
                var d = a.replace("customin-", "").replace("customout-", "");
                for (var e in t.arrLayers)t.arrLayers[e].frames.frame_999.animation == "customout-" + d ? (t.arrLayers[e].x_end = b.params.movex, t.arrLayers[e].y_end = b.params.movey, t.arrLayers[e].z_end = b.params.movez, t.arrLayers[e].x_rotate_end = b.params.rotationx, t.arrLayers[e].y_rotate_end = b.params.rotationy, t.arrLayers[e].z_rotate_end = b.params.rotationz, t.arrLayers[e].scale_x_end = b.params.scalex, t.arrLayers[e].scale_y_end = b.params.scaley, t.arrLayers[e].opacity_end = b.params.captionopacity, t.arrLayers[e].skew_x_end = b.params.skewx, t.arrLayers[e].skew_y_end = b.params.skewy, t.arrLayers[e].mask_end = b.params.mask, t.arrLayers[e].mask_x_end = b.params.mask_x, t.arrLayers[e].mask_y_end = b.params.mask_y, t.arrLayers[e].mask_ease_end = b.params.mask_ease, t.arrLayers[e].mask_speed_end = b.params.mask_speed, t.arrLayers[e].use_text_c_end = b.params.use_text_c, t.arrLayers[e].use_bg_c_end = b.params.use_bg_c, t.arrLayers[e].text_c_end = b.params.text_c, t.arrLayers[e].bg_c_end = b.params.bg_c, t.arrLayers[e].x_end_reverse = b.params.movex_reverse, t.arrLayers[e].y_end_reverse = b.params.movey_reverse, t.arrLayers[e].x_rotate_end_reverse = b.params.rotationx_reverse, t.arrLayers[e].y_rotate_end_reverse = b.params.rotationy_reverse, t.arrLayers[e].z_rotate_end_reverse = b.params.rotationz_reverse, t.arrLayers[e].scale_x_end_reverse = b.params.scalex_reverse, t.arrLayers[e].scale_y_end_reverse = b.params.scaley_reverse, t.arrLayers[e].skew_x_end_reverse = b.params.skewx_reverse, t.arrLayers[e].skew_y_end_reverse = b.params.skewy_reverse, t.arrLayers[e].mask_x_end_reverse = b.params.mask_x_reverse, t.arrLayers[e].mask_y_end_reverse = b.params.mask_y_reverse, t.arrLayers[e].frames.frame_999.easing = b.params.easing, t.arrLayers[e].frames.frame_999.split = b.params.split, t.arrLayers[e].frames.frame_999.splitdelay = b.params.splitdelay, t.arrLayers[e].frames.frame_999.speed = b.params.speed) : t.arrLayers[e].frames.frame_0.animation == "customin-" + d && (t.arrLayers[e].x_start = b.params.movex, t.arrLayers[e].y_start = b.params.movey, t.arrLayers[e].z_start = b.params.movez, t.arrLayers[e].x_rotate_start = b.params.rotationx, t.arrLayers[e].y_rotate_start = b.params.rotationy, t.arrLayers[e].z_rotate_start = b.params.rotationz, t.arrLayers[e].scale_x_start = b.params.scalex, t.arrLayers[e].scale_y_start = b.params.scaley, t.arrLayers[e].opacity_start = b.params.captionopacity, t.arrLayers[e].blurfilter_start = b.params.blurfilter, t.arrLayers[e].grayscalefilter_start = b.params.grayscalefilter, t.arrLayers[e].brightnessfilter_start = b.params.brightnessfilter, t.arrLayers[e].skew_x_start = b.params.skewx, t.arrLayers[e].skew_y_start = b.params.skewy, t.arrLayers[e].mask_start = b.params.mask, t.arrLayers[e].mask_x_start = b.params.mask_x, t.arrLayers[e].mask_y_start = b.params.mask_y, t.arrLayers[e].mask_ease_start = b.params.mask_ease, t.arrLayers[e].mask_speed_start = b.params.mask_speed, t.arrLayers[e].use_text_c_start = b.params.use_text_c, t.arrLayers[e].use_bg_c_start = b.params.use_bg_c, t.arrLayers[e].text_c_start = b.params.text_c, t.arrLayers[e].bg_c_start = b.params.bg_c, t.arrLayers[e].x_start_reverse = b.params.movex_reverse, t.arrLayers[e].y_start_reverse = b.params.movey_reverse, t.arrLayers[e].x_rotate_start_reverse = b.params.rotationx_reverse, t.arrLayers[e].y_rotate_start_reverse = b.params.rotationy_reverse, t.arrLayers[e].z_rotate_start_reverse = b.params.rotationz_reverse, t.arrLayers[e].scale_x_start_reverse = b.params.scalex_reverse, t.arrLayers[e].scale_y_start_reverse = b.params.scaley_reverse, t.arrLayers[e].skew_x_start_reverse = b.params.skewx_reverse, t.arrLayers[e].skew_y_start_reverse = b.params.skewy_reverse, t.arrLayers[e].mask_x_start_reverse = b.params.mask_x_reverse, t.arrLayers[e].mask_y_start_reverse = b.params.mask_y_reverse, t.arrLayers[e].frames.frame_0.easing = b.params.easing, t.arrLayers[e].frames.frame_0.split = b.params.split, t.arrLayers[e].frames.frame_0.splitdelay = b.params.splitdelay, t.arrLayers[e].frames.frame_0.speed = b.params.speed)
            })
        }, selectLayerAnim = function (a) {
            ("customin" == currentAnimationType ? jQuery("#layer_animation option") : jQuery("#layer_endanimation option")).each(function () {
                jQuery(this).text() == a || jQuery(this).val() == a ? jQuery(this).prop("selected", !0) : jQuery(this).prop("selected", !1)
            }), ("customin" == currentAnimationType ? jQuery("#layer_animation option:selected") : jQuery("#layer_endanimation option:selected")).change()
        }, updateLayerAnimsInput = function (a, b) {
            if ("customin" == b)var c = jQuery("#layer_animation"), d = jQuery("#layer_animation option"), e = jQuery("#layer_animation").val(); else var c = jQuery("#layer_endanimation"), d = jQuery("#layer_endanimation option"), e = jQuery("#layer_endanimation").val();
            if (d.each(function () {
                    jQuery(this).val().indexOf(b) > -1 && jQuery(this).remove()
                }), "object" == typeof a && !jQuery.isEmptyObject(a))for (key in a)c.append(new Option(a[key], key));
            c.val(e), c.change()
        }, getFirstStyle = function () {
            var a = jQuery("#layer_caption").catcomplete("option", "source");
            return null == a || 0 == a.length ? "" : a[0].label
        }, disableFormFields = function () {
            jQuery(".form_layers")[0].reset(), jQuery(".form_layers input, .form_layers select, .form_layers textarea").attr("disabled", "disabled").addClass("setting-disabled"), jQuery("#button_delete_layer").addClass("button-now-disabled"), jQuery("#button_duplicate_layer").addClass("button-now-disabled"), jQuery(".form_layers label, .form_layers .setting_text, .form_layers .setting_unit").addClass("text-disabled"), jQuery("#layer_captions_down").removeClass("ui-state-active").addClass("ui-state-default"), jQuery("#css_fonts_down").removeClass("ui-state-active").addClass("ui-state-default"), jQuery("#linkInsertTemplate").addClass("disabled"), jQuery("#rs-align-wrapper").addClass("table_disabled"), jQuery("#rs-align-wrapper-ver").addClass("table_disabled"), jQuery("#preview_looper").hasClass("deactivated") || jQuery("#preview_looper").click(), layerGeneralParamsStatus = !1
        }, enableFormFields = function () {
            jQuery(".form_layers input, .form_layers select, .form_layers textarea").not(".rs_disabled_field").prop("disabled", !1).removeClass("setting-disabled"), jQuery("#button_delete_layer").removeClass("button-now-disabled"), jQuery("#button_duplicate_layer").removeClass("button-now-disabled"), jQuery(".form_layers label, .form_layers .setting_text, .form_layers .setting_unit").removeClass("text-disabled"), jQuery("#layer_captions_down").removeClass("ui-state-default").addClass("ui-state-active"), jQuery("#css_fonts_down").removeClass("ui-state-default").addClass("ui-state-active"), jQuery("#linkInsertTemplate").removeClass("disabled"), jQuery("#rs-align-wrapper").removeClass("table_disabled"), jQuery("#rs-align-wrapper-ver").removeClass("table_disabled"), jQuery("#preview_looper").hasClass("deactivated") && jQuery("#preview_looper").click(), layerGeneralParamsStatus = !0
        };
        t.getLayers = function () {
            return -1 != t.selectedLayerSerial && t.updateLayerFromFields(), updateLayersImageSizes(), t.arrLayers
        }, t.getSimpleLayers = function () {
            return t.arrLayers
        };
        var updateLayersImageSizes = function () {
            for (serial in t.arrLayers) {
                var a = t.arrLayers[serial];
                if ("image" == a.type) {
                    var b = a.references.htmlLayer, c = {};
                    c = t.setVal(c, "width", b.width()), c = t.setVal(c, "height", b.height()), t.updateLayer(serial, c)
                }
            }
        };
        t.clickInsideElement = function (a, b) {
            var c = a.srcElement || a.target;
            if (c.classList.contains(b))return c;
            for (; c = c.parentNode;)if (c.classList && c.classList.contains(b))return c;
            return !1
        };
        var unselectAllFocusedGroup = function () {
            jQuery(".slide_layer_type_group.inwork").removeClass("inwork"), jQuery("#focusongroup").removeClass("inwork")
        }, refreshEvents = function (a) {
            var b = t.getHtmlLayerFromSerial(a), c = jQuery("#rs-grid-sizes").val(), d = b[0].classList.contains("slide_layer_type_row") ? "#row-zone-top, #row-zone-middle, #row-zone-bottom" : b[0].classList.contains("slide_layer_type_column") || b[0].classList.contains("slide_layer_type_group") ? "" : ".slide_layer_type_column .tp_layer_group_inner_wrapper", e = !!b[0].classList.contains("slide_layer_type_row") && ".row_moveme";
            b.draggable({
                handle: e,
                start: onLayerDragStart,
                refreshPositions: !0,
                drag: t.onLayerDrag,
                connectToSortable: d,
                cancel: " textbox, #layer_text, .layer_on_lock",
                grid: [c, c],
                stop: onLayerDragEnd
            }), jQuery("#focusongroup").click(unselectAllFocusedGroup), jQuery("body").on("dblclick", ".inlaydecor", function (a) {
                jQuery(this).closest(".slide_layer_type_group").addClass("inwork"), jQuery("#focusongroup").addClass("inwork")
            }), b.click(function (c) {
                var d = t.clickInsideElement(c, "groupinfo");
                if (!1 !== d)return jQuery(d).closest(".slide_layer_type_group").addClass("inwork"), jQuery("#focusongroup").addClass("inwork"), !1;
                if (c.metaKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && c.ctrlKey) {
                    var e = t.getLayer(a), f = jQuery("input#lots_id_" + e.unique_id);
                    "checked" == f.attr("checked") ? f.attr("checked", !1) : f.attr("checked", "checked"), u.checkMultipleSelectedItems()
                } else {
                    if (cm.toggleMenuOff(), "rs-row-layout" === jQuery(":focus").attr("id"))return !1;
                    jQuery(":focus").blur(), t.setLayerSelected(a);
                    var e = t.getLayer(a), f = jQuery("input#lots_id_" + e.unique_id);
                    if (-1 == jQuery.inArray(e.unique_id, t.selectedLayers) && u.checkMultipleSelectedItems(!0), f.attr("checked", "checked"), t.setLayerSelected(a), b.hasClass("slide_layer_type_row")) {
                        var e = t.getCurrentLayer();
                        if (void 0 !== c.srcElement && ("eg-icon-menu" === c.srcElement.className || "row_editor" === c.srcElement.className) || void 0 != c.target && ("eg-icon-menu" === c.target.className || "row_editor" === c.target.className)) {
                            var g = b.find(".row_editor"), h = jQuery("#rs-layout-row-composer");
                            jQuery(".row_editor.open_re").removeClass("open_re"), g.addClass("open_re"), h.show(), jQuery(".rs-row-break-selector").removeClass("selected"), jQuery(".rs-row-break-selector.rs-slide-ds-" + jQuery("#column_break_at").val()).addClass("selected")
                        } else if (void 0 != c.srcElement && ("eg-icon-cancel" === c.srcElement.className || "row_editor" === c.srcElement.className) || void 0 != c.target && ("eg-icon-cancel" === c.target.className || "row_editor" === c.target.className)) {
                            var g = b.find(".row_editor"), h = jQuery("#rs-layout-row-composer");
                            jQuery(".row_editor.open_re").removeClass("open_re"), h.hide()
                        } else if (void 0 != c.srcElement && ("eg-icon-droplet" === c.srcElement.className || "row_config" === c.srcElement.className) || void 0 != c.target && ("eg-icon-droplet" === c.target.className || "row_config" === c.target.className)) {
                            var i = jQuery("#style-morestyle");
                            i.hasClass("showmore") || i.click()
                        }
                    }
                    c.stopPropagation(), u.checkAnimationTab() ? (u.stopAllLayerAnimation(), u.animateCurrentSelectedLayer(0)) : u.checkLoopTab() && (u.stopAllLayerAnimation(), u.callCaptionLoops())
                }
            })
        };
        t.getSerialFromID = function (a) {
            return void 0 != a && a.replace("slide_layer_", "").replace("demo_layer_", "")
        }, t.getSerialFromSortID = function (a) {
            var b = a.replace("layer_sort_time_", "");
            return b = b.replace("layer_sort_", ""), b = b.replace("layer_quicksort_", "")
        }, t.lockAllLayers = function (a) {
            for (a in t.arrLayers)u.lockLayer(a)
        }, t.unlockAllLayers = function (a) {
            for (a in t.arrLayers)u.unlockLayer(a)
        }, t.showAllLayers = function (a) {
            for (var b in t.arrLayers)a !== t.arrLayers[b].serial && u.showLayer(t.arrLayers[b], !0)
        }, t.hideAllLayers = function (a) {
            for (var b in t.arrLayers)a !== t.arrLayers[b].serial && u.hideLayer(t.arrLayers[b], !0)
        }, t.getHtmlLayerFromSerial = function (a, b) {
            if (b || (b = !1), b)var c = jQuery("#demo_layer_" + a); else var c = jQuery("#slide_layer_" + a);
            return null !== c && 0 == c.length && UniteAdminRev.showErrorMessage("Html Layer with serial: " + a + " not found!"), c
        }, t.getLayerByUniqueId = function (a) {
            for (var b in t.arrLayers)if (t.arrLayers[b].unique_id == a)return t.getLayer(b);
            for (var b in t.arrLayersDemo)if (t.arrLayersDemo[b].unique_id == a)return t.getLayer(b);
            return !1
        }, t.getLayerIdByUniqueId = function (a) {
            for (var b in t.arrLayers)if (t.arrLayers[b].unique_id == a)return b;
            for (var b in t.arrLayersDemo)if (t.arrLayersDemo[b].unique_id == a)return b;
            return !1
        }, t.getUniqueIdByLayer = function (a) {
            for (var b in t.arrLayers)if (b == a)return t.arrLayers[b].unique_id;
            return !1
        }, t.getLayer = function (a, b) {
            if (b)var c = t.arrLayersDemo[a]; else var c = t.arrLayers[a];
            if (!c)var c = t.arrLayersDemo[a];
            return !!c && (c.frames.frame_0.speed = Number(c.frames.frame_0.speed), c.frames.frame_999.speed = Number(c.frames.frame_999.speed), c)
        }, t.getCurrentLayer = function () {
            return -1 != t.selectedLayerSerial && t.getLayer(t.selectedLayerSerial)
        }, t.makeLayerHtml = function (a, b, c) {
            c || (c = !1);
            var d = "text";
            b.type && (d = b.type);
            var e = Number(b.order) + 100, f = "z-index:" + e + ";position:absolute;", g = "", h = "", i = "", j = "";
            "auto" !== t.getVal(b, "max_width") && (f += " width: " + t.getVal(b, "max_width") + ";"), "auto" !== t.getVal(b, "max_height") && (f += " height: " + t.getVal(b, "max_height") + ";"), f += " white-space: " + t.getVal(b, "whitespace") + ";";
            var k = "";
            void 0 !== b.special_type && "static" == b.special_type && (k = " static_layer");
            var l = "";
            void 0 === b.type || "button" != b.type && "shape" != b.type || (l = " " + b.internal_class);
            var m = b.groupLink;
            if (m = void 0 === m ? 0 : m, m = "ldles_" + m, "image" == d && (f += "line-height:0;"), "column" == d && (i = '<div class="slide_layer_col_sizer">', j = "</div>", h = '<div class="column_background"></div>'), c) {
                rev_adv_resp_sizes, void 0 != b.static_styles && (f += " font-size: " + t.getVal(b.static_styles, "font-size") + ";", f += " line-height: " + t.getVal(b.static_styles, "line-height") + ";", f += " font-weight: " + t.getVal(b.static_styles, "font-weight") + ";", f += " color: " + t.getVal(b.static_styles, "color") + ";", f += " letter-spacing: " + t.getVal(b.static_styles, "letter-spacing") + ";");
                var n = '<div id="demo_layer_' + a + '" data-uniqueid="' + b.unique_id + '" data-serial="' + a + '"  data-type="' + d + '" style="' + f + '" class="invisible_demolayer demo_layer_type_' + d + " demo_layer demo_layer_" + curDemoSlideID + ' slide_layer" >' + h + i + '<div style="' + g + '" class="innerslide_layer tp-caption ' + b.style + k + l + '" >'
            } else var n = '<div id="slide_layer_' + a + '" data-uniqueid="' + b.unique_id + '" data-serial="' + a + '" data-type="' + d + '" style="' + f + '"               class="slide_layer_type_' + d + " slide_layer " + m + '">' + h + i + '<div style="' + g + '" class="innerslide_layer tp-caption ' + b.style + k + l + '" >';
            switch (d) {
                case"image":
                    n += '<img src="' + b.image_url + '" alt="' + b.alt + '" style="' + "" + '"></img>';
                    break;
                default:
                case"text":
                case"button":
                    n += b.text;
                    break;
                case"group":
                    n += '<div class="inlaydecor"></div><div class="groupinfo"><i class="fa-icon-object-group"></i><span class="group_info_text">Edit Group Layers</span></div><div class="tp_layer_group_inner_wrapper"></div>';
                    break;
                case"column":
                    n += '<div class="tp_layer_group_inner_wrapper"></div>';
                    break;
                case"row":
                    n += '<div class="tp_layer_group_inner_wrapper"></div>', c || (n += '<div class="row_toolbar"><div class="row_editor"><i class="eg-icon-menu"></i><i class="eg-icon-cancel"></i></div><div class="row_moveme"><i class="eg-icon-arrow-combo"></i></div><div class="row_config"><i class="eg-icon-droplet"></i></div></div>');
                    break;
                case"video":
                    var p = "width:100%;height:100%";
                    if (void 0 !== b.video_data)var q = "" != jQuery.trim(b.video_data.previewimage) ? b.video_data.previewimage : b.video_image_url; else var q = b.video_image_url;
                    var r = b.video_type;
                    switch (b.video_type) {
                        case"youtube":
                        case"vimeo":
                            p += ";background-image:url(" + q + ");";
                            break;
                        case"html5":
                            void 0 !== q && "" != q && (p += ";background-image:url(" + q + ");");
                            break;
                        case"streamyoutube":
                            r = "youtube";
                            break;
                        case"streamvimeo":
                            r = "vimeo";
                            break;
                        case"streaminstagram":
                            r = "html5"
                    }
                    n += "<div class='slide_layer_video' style='" + p + "'><div class='video-layer-inner video-icon-" + r + "'>", n += "<div class='layer-video-title'>" + b.video_title + "</div>", n += "</div></div>";
                    break;
                case"audio":
                    n += "<div class='slide_layer_audio' style='" + "" + "'><div class='video-layer-inner video-icon-" + "" + "'>", n += '<div class="slide_layer_audio_c_wrapper">', n += '<audio controls src="' + b.video_data.urlAudio + '"></audio>', n += '<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div></div>', n += '<div class="slide_layer_audio_c_cover"></div>', n += "</div>", n += "<div class='layer-audio-title'><i class='rs-icon-layeraudio_n'></i>" + b.audio_title + "</div>", n += "</div></div>";
                    break;
                case"svg":
                    void 0 != b.svg && void 0 != b.svg.src && jQuery.get(b.svg.src, function (b) {
                        var d = c ? "#demo_layer_" : "#slide_layer_";
                        jQuery(d + a + " .innerslide_layer.tp-caption").first().html(""), jQuery(d + a + " .innerslide_layer.tp-caption").first()[0].innerHTML = (new XMLSerializer).serializeToString(b.documentElement), u.rebuildLayerIdle(jQuery(d + a))
                    })
            }
            return n += "</div>" + j, n += "<div class='icon_cross'></div>", n += "</div>"
        }, t.reset_to_default_static_styles = function (a, b, c) {
            if (void 0 !== a.style) {
                var d = UniteCssEditorRev.getStyleSettingsByHandle(a.style);
                !1 !== d && (void 0 !== d.params["font-size"] && (void 0 !== b && void 0 !== c ? -1 !== jQuery.inArray("font-size", b) && (a.static_styles = t.setVal(a.static_styles, "font-size", d.params["font-size"], !1, c), -1 !== jQuery.inArray(layout, c) && jQuery("#layer_font_size_s").val(d.params["font-size"])) : jQuery("#layer_font_size_s").val(d.params["font-size"])), void 0 !== d.params["line-height"] && (void 0 !== b && void 0 !== c ? -1 !== jQuery.inArray("line-height", b) && (a.static_styles = t.setVal(a.static_styles, "line-height", d.params["line-height"], !1, c), -1 !== jQuery.inArray(layout, c) && jQuery("#layer_line_height_s").val(d.params["line-height"])) : jQuery("#layer_line_height_s").val(d.params["line-height"])), void 0 !== d.params["letter-spacing"] && (void 0 !== b && void 0 !== c ? -1 !== jQuery.inArray("letter-spacing", b) && (a.static_styles = t.setVal(a.static_styles, "letter-spacing", d.params["letter-spacing"], !1, c), -1 !== jQuery.inArray(layout, c) && jQuery("#letter_spacing_s").val(d.params["letter-spacing"])) : jQuery("#letter_spacing_s").val(d.params["letter-spacing"])), void 0 !== d.params["font-weight"] && (void 0 !== b && void 0 !== c ? -1 !== jQuery.inArray("font-weight", b) && (a.static_styles = t.setVal(a.static_styles, "font-weight", d.params["font-weight"], !1, c), -1 !== jQuery.inArray(layout, c) && jQuery('#layer_font_weight_s').val(d.params["font-weight"])) : jQuery('#layer_font_weight_s').val(d.params["font-weight"])), void 0 !== d.params.color && (void 0 !== b && void 0 !== c ? (-1 !== jQuery.inArray("color", b) && (a.static_styles = t.setVal(a.static_styles, "color", d.params.color, !1, c)), -1 !== jQuery.inArray(layout, c) && (jQuery("#layer_color_s").val(d.params.color).tpColorPicker("refresh"), jQuery(".wp-color-result").each(function () {
                    jQuery(this).css("backgroundColor", jQuery(this).parent().find(".my-color-field").val())
                }))) : (jQuery("#layer_color_s").val(d.params.color).tpColorPicker("refresh"), jQuery(".wp-color-result").each(function () {
                    jQuery(this).css("backgroundColor", jQuery(this).parent().find(".my-color-field").val())
                }))))
            }
        }, t.updateLayer = function (a, b, c, d) {
            var e = t.getLayer(a);
            if (!e)return !1;
            var f = !1;
            if (void 0 !== b.style && b.style !== e.style && "none" == jQuery("#dialog-change-style-from-css").css("display") && (f = !0), void 0 !== c)for (var g in c)delete e[c[g]];
            for (var g in b)if ("object" == typeof b[g])for (var h in b[g])if ("object" == typeof e[g])if ("object" == typeof e[g][h])for (var i in b[g][h])e[g][h][i] = b[g][h][i]; else e[g][h] = b[g][h]; else e[g] = {}, e[g][h] = b[g][h]; else e[g] = b[g];
            if (f && (t.reset_to_default_static_styles(e), updateSubStyleParameters(e)), !t.arrLayers[a])return UniteAdminRev.showErrorMessage("setLayer error, Layer with ID: " + a + " not found"), !1;
            d || update_layer_changes && t.add_layer_change(a, b), t.arrLayers[a] = jQuery.extend({}, e), t.updateReverseList()
        }, t.cloneArrLayers = function () {
            t.arrLayersClone = jQuery.extend(!0, {}, t.arrLayers)
        }, t.add_layer_change = function () {
            if (!t.ignorAllUndoRedoLogs) {
                if (t.arrLayersChanges.undo.length - 1 > 27) {
                    t.arrLayersChanges.undo.splice(0, 1)
                }
                objRek(t.arrLayersClone, t.arrLayers, ""), 0 == t.arrLayersChanges.redo.length && t.arrLayersChanges.undo.length > 0 && (t.arrLayersChanges.undo[t.arrLayersChanges.undo.length - 1].restore = jQuery.extend(!0, {}, t.arrLayers)), t.cloneArrLayers(), t.update_undo_redo_list()
            }
        }, t.oneStepUndo = function () {
            t.arrLayersChanges.undo.length - 1 >= 0 && t.undo_redo_layer("undo", t.arrLayersChanges.undo.length - 1)
        }, t.oneStepRedo = function () {
            t.arrLayersChanges.redo.length - 1 >= 0 && t.undo_redo_layer("redo", 0)
        }, t.update_undo_redo_list = function () {
            0 == jQuery("#rs-undo-list").length && (jQuery("#layer-settings-toolbar-bottom").append('<div id="rs-undo-list"><div id="undo-redo-wrapper"></div></div>'), jQuery("body").on("click", ".undostep", function () {
                t.undo_redo_layer("undo", jQuery(this).data("undoindex"))
            }), jQuery("body").on("click", ".redostep", function () {
                t.undo_redo_layer("redo", jQuery(this).data("redoindex"))
            }), jQuery("body").on("click", "#undo-last-action", function () {
                t.arrLayersChanges.undo.length - 1 >= 0 && t.undo_redo_layer("undo", t.arrLayersChanges.undo.length - 1)
            }), jQuery("body").on("click", "#showhide_undolist", function () {
                var a = jQuery("#rs-undo-list");
                a.hasClass("inactive") ? (a.slideUp(200).removeClass("inactive"), jQuery("#showhide_undolist i").removeClass("eg-icon-down-open").addClass("eg-icon-menu"), setTimeout(function () {
                    var a = jQuery("#undo-redo-wrapper");
                    a.scrollTop(a.prop("scrollHeight")), a.perfectScrollbar("update")
                }, 250)) : (a.slideDown(200).addClass("inactive"), jQuery("#showhide_undolist i").addClass("eg-icon-down-open").removeClass("eg-icon-menu"))
            }), jQuery("#undo-redo-wrapper").perfectScrollbar({wheelPropagation: !0, suppressScrollX: !0}));
            var a = jQuery("#undo-redo-wrapper");
            a.find(".undoredostep").remove(), jQuery.each(t.arrLayersChanges.undo, function (b, c) {
                var d = '<div data-undoindex="' + b + '" class="undoredostep undostep">', e = t.arrLayers[c.serial].alias;
                switch (t.arrLayers[c.serial].type) {
                    case"text":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layerfont_n"></i></span>';
                        break;
                    case"shape":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layershape_n"></i></span>';
                        break;
                    case"button":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layerbutton_n"></i></span>';
                        break;
                    case"image":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layerimage_n"></i></span>';
                        break;
                    case"video":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layervideo_n"></i></span>';
                        break;
                    case"audio":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layeraudio_n"></i></span>';
                        break;
                    case"svg":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layersvg_n"></i></span>';
                        break;
                    case"row":
                    case"group":
                        d += '<span class="layer-title-with-icon"><i class="fa-icon-object-group"></i></span>';
                        break;
                    case"column":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layercolumn_n"></i></span>'
                }
                var g = "";
                c.amount > 0 && (g = " (" + c.amount + ")"), b == t.arrLayersChanges.undo.length - 1 && jQuery("#quick-undo .single-undo-action").html('<span class="undo-name">' + e + '</span><span class="undo-action"><i class="eg-icon-' + c.icon + '"></i>' + c.undogroup + g + "</span>"), d += '<span class="undo-name">' + e + '</span><span class="undo-action"><i class="eg-icon-' + c.icon + '"></i>' + c.undogroup + g + '</span><i class="eg-icon-cw"></i>', d += "</div>", a.append(d)
            }), t.arrLayersChanges.undo.length - 1 < 0 && jQuery("#quick-undo .single-undo-action").html('<span class="undo-name">' + jQuery(".single-undo-action").data("origtext") + "</span>"), jQuery.each(t.arrLayersChanges.redo, function (b, c) {
                var d = '<div data-redoindex="' + b + '" class="undoredostep redostep">', e = void 0 === t.arrLayers[c.serial] ? c.backup[c.serial].alias : t.arrLayers[c.serial].alias;
                switch (type = void 0 === t.arrLayers[c.serial] ? c.backup[c.serial].type : t.arrLayers[c.serial].type, type) {
                    case"text":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layerfont_n"></i></span>';
                        break;
                    case"shape":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layershape_n"></i></span>';
                        break;
                    case"button":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layerbutton_n"></i></span>';
                        break;
                    case"image":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layerimage_n"></i></span>';
                        break;
                    case"video":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layervideo_n"></i></span>';
                        break;
                    case"audio":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layeraudio_n"></i></span>';
                        break;
                    case"svg":
                        d += '<span class="layer-title-with-icon"><i class="rs-icon-layersvg_n"></i></span>'
                }
                var f = "";
                c.amount > 0 && (f = " (" + c.amount + ")"), d += '<span class="undo-name">' + e + '</span><span class="undo-action"><i class="eg-icon-' + c.icon + '"></i>' + c.undogroup + f + '</span><i class="eg-icon-cw"></i>', d += "</div>", a.append(d)
            }), a.data("steps") != t.arrLayersChanges.redo.length + t.arrLayersChanges.undo.length && (a.scrollTop(a.prop("scrollHeight")), a.data("steps", t.arrLayersChanges.redo.length + t.arrLayersChanges.undo.length)), a.perfectScrollbar("update")
        }, t.undo_redo_layer = function (a, b) {
            if (t.set_save_needed(!0), jQuery(".layer-on-timeline-selector").each(function () {
                    this.checked = !1
                }), t.selectedLayers = [], "undo" == a) {
                t.arrLayers = jQuery.extend(!0, {}, t.arrLayersChanges.undo[b].backup), showHideDeletedLayers();
                for (var c = t.arrLayersChanges.undo.length - b, d = 0; d < c; d++)t.arrLayersChanges.redo.unshift(t.arrLayersChanges.undo.pop());
                checkInvisibleRedoItems(), checkChangedSources("backup")
            } else if ("redo" == a) {
                t.arrLayers = jQuery.extend(!0, {}, t.arrLayersChanges.redo[b].restore), showHideDeletedLayers();
                for (var d = 0; d <= b; d++)t.arrLayersChanges.undo.push(t.arrLayersChanges.redo.shift());
                checkChangedSources("restore")
            }
            t.recreateLayerReferences(), u.redrawSortbox(), unselectLayers(), t.cloneArrLayers(), updateHtmlLayersFromObject(), u.allLayerToIdle(), u.stopAllLayerAnimation(), u.organiseGroupsAndLayer(), setTimeout(function () {
                t.update_undo_redo_list(), u.updateAllLayerTimeline()
            }, 10)
        }, t.recreateLayerReferences = function () {
            for (var a in t.arrLayers) {
                var b = t.arrLayers[a];
                b.references = void 0 === b.references ? {} : b.references, b.references.htmlLayer = jQuery(document.getElementById("slide_layer_" + b.serial)), b.references.sorttable.layer = jQuery(document.getElementById("layer_sort_" + b.serial)), b.references.sorttable.timeline = jQuery(document.getElementById("layer_sort_time_" + b.serial)), b.references.quicklayer = jQuery(document.getElementById("layer_quicksort_" + b.serial))
            }
            for (var a in t.arrLayersDemo) {
                var b = t.arrLayersDemo[a];
                b.references = void 0 === b.references ? {} : b.references, b.references.htmlLayer = jQuery(document.getElementById("demo_layer_" + b.serial)), b.references.sorttable.layer = jQuery(document.getElementById("demo_sort_" + b.serial)), b.references.sorttable.timeline = jQuery(document.getElementById("demo_sort_time_" + b.serial)), b.references.quicklayer = jQuery(document.getElementById("demo_quicksort_" + b.serial))
            }
        }, t.updateReverseList = function () {
            clearTimeout(updateRevTimer), updateRevTimer = setTimeout(function () {
                RevSliderSettings.onoffStatus(jQuery("#layer_anim_xstart_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_anim_ystart_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_anim_xrotate_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_anim_yrotate_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_anim_zrotate_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_scale_xstart_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_scale_ystart_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_skew_xstart_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_skew_ystart_reverse")), RevSliderSettings.onoffStatus(jQuery("#mask_anim_xstart_reverse")), RevSliderSettings.onoffStatus(jQuery("#mask_anim_ystart_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_anim_xend_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_anim_yend_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_anim_xrotate_end_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_anim_yrotate_end_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_anim_zrotate_end_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_scale_xend_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_scale_yend_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_skew_xend_reverse")), RevSliderSettings.onoffStatus(jQuery("#layer_skew_yend_reverse")), RevSliderSettings.onoffStatus(jQuery("#mask_anim_xend_reverse")), RevSliderSettings.onoffStatus(jQuery("#mask_anim_yend_reverse"))
            }, 100)
        }, t.updateCurrentLayer = function (a, b) {
            if (!t.arrLayers[t.selectedLayerSerial])return UniteAdminRev.showErrorMessage("error! the layer with serial: " + t.selectedLayerSerial + " doesn't exists"), !1;
            t.updateLayer(t.selectedLayerSerial, a, b)
        };
        var addLayerImage = function (a, b) {
            objLayer = {
                style: "",
                text: "Image " + (id_counter + 1),
                type: "image",
                image_url: a.imgurl
            }, void 0 !== a.imglib && (objLayer.image_library = a.imglib, objLayer.image_librarysize = {}, objLayer.image_librarysize.width = a.imgwidth, objLayer.image_librarysize.height = a.imgheight), objLayer.scaleProportional = !0, objLayer = t.setVal(objLayer, "scaleX", a.imgwidth, !0), objLayer = t.setVal(objLayer, "scaleY", a.imgheight, !0), objLayer = t.setVal(objLayer, "originalWidth", a.imgwidth, !0), objLayer = t.setVal(objLayer, "originalHeight", a.imgheight, !0), void 0 !== b && (objLayer.special_type = b), objLayer.createdOnInit = !1, addLayer(objLayer)
        }, getVideoObjLayer = function (a, b) {
            var c = {type: "video", style: "", video_type: a.video_type, video_data: a};
            switch (c.video_data.autoplayonlyfirsttime = !1, void 0 !== b && (c.video_width = a.video_width, c.video_height = a.video_height), "youtube" != c.video_type && "vimeo" != c.video_type || (c.video_id = a.id, c.video_title = a.title, c.video_image_url = a.thumb_medium.url, c.video_args = a.args), c.video_type) {
                case"youtube":
                    c.text = "Youtube: " + a.title;
                    break;
                case"vimeo":
                    c.text = "Vimeo: " + a.title;
                    break;
                case"streamyoutube":
                    c.text = "YouTube Stream", c.video_title = c.text, c.video_image_url = "", "" != a.urlPoster && (c.video_image_url = a.urlPoster);
                    break;
                case"streamvimeo":
                    c.text = "Vimeo Stream", c.video_title = c.text, c.video_image_url = "", "" != a.urlPoster && (c.video_image_url = a.urlPoster);
                    break;
                case"streaminstagram":
                    c.text = "Instagram Stream", c.video_title = c.text, c.video_image_url = "", "" != a.urlPoster && (c.video_image_url = a.urlPoster);
                    break;
                case"html5":
                    c.text = "Html5 Video", c.video_title = c.text, c.video_image_url = "", "" != a.urlPoster && (c.video_image_url = a.urlPoster);
                    break;
                case"audio":
                    c.text = "Audio Layer", c.audio_title = c.text, c.audio_image_url = "", "" != a.urlPoster && (c.audio_image_url = a.urlPoster), c.type = "audio"
            }
            return c
        }, addLayerVideo = function (a, b) {
            var c = getVideoObjLayer(a, !0);
            if (void 0 !== b && (c.special_type = b), c.createdOnInit = !1, addLayer(c), void 0 !== b && "audio" == b) {
                var d = t.getCurrentLayer();
                !1 !== d && u.drawAudioMap(d)
            }
        }, addLayerText = function (a, b) {
            b = void 0 === b ? initText + (id_counter + 1) : b;
            var c = {text: b, type: "text"};
            void 0 !== a && (c.special_type = a), c.createdOnInit = !1, addLayer(c), setTimeout(function () {
                t.showHideContentEditor(!0), jQuery("#layer_text").data("new_content", !0), jQuery("#layer_text").focus()
            }, 50)
        }, addLayerGroup = function (a) {
            var b = {type: "group", text: initGroupName + (id_counter + 1), createdOnInit: !1, grouptype: "logical"};
            void 0 !== a && (b.special_type = a);
            addLayer(b);
            t.makeRowSortableDroppable()
        }, addLayerRow = function (a) {
            var b = {type: "row", text: initRowName + (id_counter + 1), createdOnInit: !1}, c = {};
            void 0 !== a && (b.special_type = a);
            for (var d = addLayer(b), e = t.getLayer(d), f = e.unique_id, g = 0; g < 2; g++)c = {
                type: "column",
                text: initColumnName + (id_counter + 1),
                ref_group: f,
                p_uid: f,
                column_size: "1/2",
                createdOnInit: !1
            }, addLayer(c);
            t.makeRowSortableDroppable(), t.setLayerSelected(d)
        };
        jQuery(document).on("addLayer", function (a, b) {
            void 0 !== b && addLayer(b.objLayer, b.isInit, b.isDemo, b.skipScroller)
        });
        var addLayer = function (a, b, c, d) {
            void 0 === a.version && (void 0 !== a.endtime && void 0 !== a.endspeed && jQuery.isNumeric(a.endtime) && (a.endtime = a.endtime - a.endspeed), a.realEndTime && "undefined" != a.realEndTime && void 0 != a.realEndTime && (a.endtime = a.realEndTime, delete a.realEndTime, delete a.endTimeFinal, delete a.endSpeedFinal)), a.version = t.core + "" + t.sub + t.subsub, void 0 === a.frames && (a.frames = {}), b = b || !1, c = c || !1;
            var e = !1;
            void 0 == a.subtype && (a.subtype = ""), void 0 == a.specialsettings && (a.specialsettings = {}), void 0 == a.order && (a.order = id_counter), a.order = Number(a.order), 0 != b || c || (unique_layer_id++, a.unique_id = unique_layer_id), void 0 === a.unique_id && (unique_layer_id++, a.unique_id = unique_layer_id), jQuery.inArray(a.unique_id, alluniqueids) >= 0 && (a.unique_id = a.unique_id + Math.round(100 * Math.random() + 100), unique_layer_id = a.unique_id), unique_layer_id < a.unique_id && (unique_layer_id = a.unique_id + 1), c || alluniqueids.push(a.unique_id);
            var f = "video" === a.type ? initLeftVideo : initLeft, g = "video" === a.type ? initTopVideo : initTop;
            if (f = -1 !== t.newlayercoord.x ? t.newlayercoord.x : f, g = -1 !== t.newlayercoord.y ? t.newlayercoord.y : g, a = void 0 == t.getVal(a, "left") ? t.setVal(a, "left", f, !0) : "object" != typeof a.left ? t.setVal(a, "left", a.left, !0) : a, a = void 0 == t.getVal(a, "top") ? t.setVal(a, "top", g, !0) : "object" != typeof a.top ? t.setVal(a, "top", a.top, !0) : a, "video" == a.type && (a = checkUpdateFullwidthVideo(a)), t.newlayercoord.x = -1, t.newlayercoord.y = -1, a.isDemo = c, void 0 !== a.layer_action && void 0 !== a.layer_action.layer_target)for (var h in a.layer_action.layer_target)"self" == a.layer_action.layer_target[h] && (a.layer_action.layer_target[h] = a.unique_id);
            if (a.internal_class = a.internal_class || "", a.hover = void 0 !== a.hover && a.hover, a.alias = void 0 !== a.alias ? a.alias : u.getSortboxText(a.text).toLowerCase(), a.layer_unavailable = !1, a.deleted = !1, a.createdOnInit = void 0 != a.createdOnInit ? a.createdOnInit : 1 == b, a.layer_bg_position = void 0 !== a.layer_bg_position ? a.layer_bg_position : "center center", a.layer_bg_size = void 0 !== a.layer_bg_size ? a.layer_bg_size : "cover", a.layer_bg_repeat = void 0 !== a.layer_bg_repeat ? a.layer_bg_repeat : "no-repeat", a.loop_animation = void 0 !== a.loop_animation ? a.loop_animation : "none", a.loop_easing = void 0 !== a.loop_easing ? a.loop_easing : "linearEaseNone", a.loop_speed = void 0 != a.loop_speed ? a.loop_speed : 2, a.loop_startdeg = void 0 != a.loop_startdeg ? a.loop_startdeg : -20, a.loop_enddeg = void 0 != a.loop_enddeg ? a.loop_enddeg : 20, a.loop_xorigin = void 0 != a.loop_xorigin ? a.loop_xorigin : 50, a.loop_yorigin = void 0 != a.loop_yorigin ? a.loop_yorigin : 50, a.loop_xstart = void 0 != a.loop_xstart ? a.loop_xstart : 0, a.loop_xend = void 0 != a.loop_xend ? a.loop_xend : 0, a.loop_ystart = void 0 != a.loop_ystart ? a.loop_ystart : 0, a.loop_yend = void 0 != a.loop_yend ? a.loop_yend : 0, a.loop_zoomstart = void 0 != a.loop_zoomstart ? a.loop_zoomstart : 1, a.loop_zoomend = void 0 != a.loop_zoomend ? a.loop_zoomend : 1, a.loop_angle = void 0 != a.loop_angle ? a.loop_angle : 0, a.loop_radius = void 0 != a.loop_radius ? a.loop_radius : 10, a.layer_blend_mode = void 0 != a.layer_blend_mode ? a.layer_blend_mode : "normal", a.html_tag = void 0 !== a.html_tag ? a.html_tag : "div", a.parallax_layer_ddd_zlevel = void 0 !== a.parallax_layer_ddd_zlevel ? a.parallax_layer_ddd_zlevel : "front", a.mask_start = void 0 !== a.mask_start && a.mask_start, a.mask_end = void 0 !== a.mask_end && a.mask_end, "row" === a.type && (a.column_break_at = void 0 !== a.column_break_at ? a.column_break_at : "mobile"), a.x_start_reverse = void 0 !== a.x_start_reverse && a.x_start_reverse, a.y_start_reverse = void 0 !== a.y_start_reverse && a.y_start_reverse, a.x_end_reverse = void 0 !== a.x_end_reverse && a.x_end_reverse, a.y_end_reverse = void 0 !== a.y_end_reverse && a.y_end_reverse, a.x_rotate_start_reverse = void 0 !== a.x_rotate_start_reverse && a.x_rotate_start_reverse, a.y_rotate_start_reverse = void 0 !== a.y_rotate_start_reverse && a.y_rotate_start_reverse, a.z_rotate_start_reverse = void 0 !== a.z_rotate_start_reverse && a.z_rotate_start_reverse, a.x_rotate_end_reverse = void 0 !== a.x_rotate_end_reverse && a.x_rotate_end_reverse, a.y_rotate_end_reverse = void 0 !== a.y_rotate_end_reverse && a.y_rotate_end_reverse, a.z_rotate_end_reverse = void 0 !== a.z_rotate_end_reverse && a.z_rotate_end_reverse, a.scale_x_start_reverse = void 0 !== a.scale_x_start_reverse && a.scale_x_start_reverse, a.scale_y_start_reverse = void 0 !== a.scale_y_start_reverse && a.scale_y_start_reverse, a.scale_x_end_reverse = void 0 !== a.scale_x_end_reverse && a.scale_x_end_reverse, a.scale_y_end_reverse = void 0 !== a.scale_y_end_reverse && a.scale_y_end_reverse, a.skew_x_start_reverse = void 0 !== a.skew_x_start_reverse && a.skew_x_start_reverse, a.skew_y_start_reverse = void 0 !== a.skew_y_start_reverse && a.skew_y_start_reverse, a.skew_x_end_reverse = void 0 !== a.skew_x_end_reverse && a.skew_x_end_reverse, a.skew_y_end_reverse = void 0 !== a.skew_y_end_reverse && a.skew_y_end_reverse, a.mask_x_start_reverse = void 0 !== a.mask_x_start_reverse && a.mask_x_start_reverse, a.mask_y_start_reverse = void 0 !== a.mask_y_start_reverse && a.mask_y_start_reverse, a.mask_x_end_reverse = void 0 !== a.mask_x_end_reverse && a.mask_x_end_reverse, a.mask_y_end_reverse = void 0 !== a.mask_y_end_reverse && a.mask_y_end_reverse, a.mask_x_start = void 0 !== a.mask_x_start ? a.mask_x_start : 0, a.mask_y_start = void 0 !== a.mask_y_start ? a.mask_y_start : 0, a.mask_speed_start = void 0 !== a.mask_speed_start ? a.mask_speed_start : "inherit", a.mask_ease_start = void 0 !== a.mask_ease_start ? a.mask_ease_start : "inherit", a.mask_x_end = void 0 !== a.mask_x_end ? a.mask_x_end : 0, a.mask_y_end = void 0 !== a.mask_y_end ? a.mask_y_end : 0, a.mask_speed_end = void 0 !== a.mask_speed_end ? a.mask_speed_end : "inherit", a.mask_ease_end = void 0 !== a.mask_ease_end ? a.mask_ease_end : "inherit", a.alt_option = void 0 !== a.alt_option ? a.alt_option : "media_library", a.alt = void 0 !== a.alt ? a.alt : "", a.layer_action = void 0 !== a.layer_action ? a.layer_action : {}, a.layer_action.tooltip_event = void 0 !== a.layer_action.tooltip_event ? a.layer_action.tooltip_event : [], a.layer_action.action = void 0 !== a.layer_action.action ? a.layer_action.action : [], a.layer_action.image_link = void 0 !== a.layer_action.image_link ? a.layer_action.image_link : [], a.layer_action.link_open_in = void 0 !== a.layer_action.link_open_in ? a.layer_action.link_open_in : [], a.layer_action.link_follow = void 0 !== a.layer_action.link_follow ? a.layer_action.link_follow : [], a.layer_action.jump_to_slide = void 0 !== a.layer_action.jump_to_slide ? a.layer_action.jump_to_slide : [], a.layer_action.scrollunder_offset = void 0 !== a.layer_action.scrollunder_offset ? a.layer_action.scrollunder_offset : [], a.layer_action.actioncallback = void 0 !== a.layer_action.actioncallback ? a.layer_action.actioncallback : [], a.layer_action.layer_target = void 0 !== a.layer_action.layer_target ? a.layer_action.layer_target : [], a.layer_action.link_type = void 0 !== a.layer_action.link_type ? a.layer_action.link_type : [], a.layer_action.action_delay = void 0 !== a.layer_action.action_delay ? a.layer_action.action_delay : [], a.layer_action.toggle_layer_type = void 0 !== a.layer_action.toggle_layer_type ? a.layer_action.toggle_layer_type : [], a.layer_action.toggle_class = void 0 !== a.layer_action.toggle_class ? a.layer_action.toggle_class : [], a = void 0 == t.getVal(a, "max_height") ? t.setVal(a, "max_height", "auto", !0) : "object" != typeof a.max_height ? t.setVal(a, "max_height", a.max_height, !0) : a, a = void 0 == t.getVal(a, "min_height") ? t.setVal(a, "min_height", "40", !0) : "object" != typeof a.min_height ? t.setVal(a, "min_height", a.min_height, !0) : a, void 0 == t.getVal(a, "max_width") ? a = t.setVal(a, "max_width", "auto", !0) : "object" != typeof a.max_width && (a = t.setVal(a, "max_width", a.max_width, !0)), "group" === a.type && "auto" == t.getVal(a, "max_height") && (a = t.setVal(a, "max_width", "200", !0), a = t.setVal(a, "max_height", "200", !0)), "video" == a.type && void 0 === a.video_width && void 0 !== a.video_data.width && (a.video_width = a.video_data.width), void 0 == t.getVal(a, "video_width") ? a = t.setVal(a, "video_width", 480, !0) : "object" != typeof a.video_width && (a = t.setVal(a, "video_width", a.video_width, !0)), "video" == a.type && void 0 === a.video_height && void 0 !== a.video_data.height && (a.video_height = a.video_data.height), void 0 == t.getVal(a, "video_height") ? a = t.setVal(a, "video_height", 360, !0) : "object" != typeof a.video_height && (a = t.setVal(a, "video_height", a.video_height, !0)), a["2d_rotation"] = void 0 == a["2d_rotation"] && b ? 0 : a["2d_rotation"], a["2d_origin_x"] = void 0 != a["2d_origin_x"] ? a["2d_origin_x"] : 50, a["2d_origin_y"] = void 0 != a["2d_origin_y"] ? a["2d_origin_y"] : 50, void 0 == t.getVal(a, "whitespace") ? a = t.setVal(a, "whitespace", jQuery("#layer_whitespace").val(), !0) : "object" != typeof a.whitespace && (a = t.setVal(a, "whitespace", a.whitespace, !0)), void 0 == t.getVal(a, "display") ? a = t.setVal(a, "display", jQuery("#layer_display").val(), !0) : "object" != typeof a.display && (a = t.setVal(a, "display", a.display, !0)), void 0 == a.static_start && (a.static_start = jQuery("#layer_static_start").val()), void 0 == a.static_end && (a.static_end = "last"), void 0 == t.getVal(a, "align_hor") ? a = t.setVal(a, "align_hor", "left", !0) : "object" != typeof a.align_hor && (a = t.setVal(a, "align_hor", a.align_hor, !0)), void 0 == t.getVal(a, "align_vert") ? a = t.setVal(a, "align_vert", "top", !0) : "object" != typeof a.align_vert && (a = t.setVal(a, "align_vert", a.align_vert, !0)), a.hiddenunder = void 0 !== a.hiddenunder && a.hiddenunder, a.resizeme = void 0 === a.resizeme || a.resizeme, a["seo-optimized"] = void 0 !== a["seo-optimized"] && a["seo-optimized"], a.link = void 0 !== a.link ? a.link : "", a.link_open_in = void 0 !== a.link_open_in ? a.link_open_in : "same", a.link_follow = void 0 !== a.link_follow ? a.link_follow : "follow", a.link_slide = void 0 !== a.link_slide ? a.link_slide : "nothing", a.scrollunder_offset = void 0 !== a.scrollunder_offset ? a.scrollunder_offset : "",a.style = void 0 !== a.style ? a.style : "",a["visible-desktop"] = void 0 === a["visible-desktop"] || a["visible-desktop"],a["visible-notebook"] = void 0 === a["visible-notebook"] || a["visible-notebook"],a["visible-tablet"] = void 0 === a["visible-tablet"] || a["visible-tablet"],a["visible-mobile"] = void 0 === a["visible-mobile"] || a["visible-mobile"],a["resize-full"] = void 0 === a["resize-full"] || a["resize-full"],a.hiddenunder = void 0 !== a.hiddenunder && a.hiddenunder,a["show-on-hover"] = void 0 !== a["show-on-hover"] && a["show-on-hover"],a.basealign = void 0 !== a.basealign ? a.basealign : "grid",a.responsive_offset = void 0 === a.responsive_offset || a.responsive_offset,a.style = jQuery.trim(a.style),0 != b || "text" != a.type || a.style && "" != a.style || (e = !0),a["lazy-load"] = void 0 !== a["lazy-load"] ? a["lazy-load"] : "auto",a["image-size"] = void 0 !== a["image-size"] ? a["image-size"] : "auto",a["css-position"] = void 0 !== a["css-position"] ? a["css-position"] : "relative",void 0 !== a.time && (a.frames.frame_0 = {
                time: Number(a.time),
                delay: 0,
                split: a.split,
                split_direction: "forward",
                split_extratime: 0,
                splitdelay: a.splitdelay,
                speed: a.speed,
                animation: a.animation,
                easing: a.easing
            }, delete a.time, delete a.splitdelay, delete a.speed, delete a.split, delete a.easing, delete a.animation),void 0 !== a.endtime && (a.frames.frame_999 = {
                time: a.endtime,
                delay: 0,
                split: a.endsplit,
                split_extratime: 0,
                split_direction: "forward",
                splitdelay: a.endsplitdelay,
                speed: void 0 != a.endspeed ? a.endspeed : initSpeed,
                animation: a.endanimation,
                easing: a.endeasing
            }, delete a.endtime, delete a.endsplitdelay, delete a.endspeed, delete a.endeasing, delete a.endsplit, delete a.endanimation),void 0 === a.frames.frame_0 && (a.frames.frame_0 = {
                time: 0,
                delay: 0,
                split: "none",
                splitdelay: 10,
                split_extratime: 0,
                speed: 300,
                animation: "tp-fade",
                easing: "Power3.easeInOut"
            }),void 0 === a.frames.frame_999 && (a.frames.frame_999 = {
                time: g_slideTime,
                delay: 0,
                split: "none",
                splitdelay: 10,
                split_extratime: 0,
                speed: 300,
                animation: "tp-fade",
                easing: "Power3.easeInOut"
            }),a.frames.frame_0.text_c = void 0 !== a.frames.frame_0.text_c ? a.frames.frame_0.text_c : "transparent",a.frames.frame_0.bg_c = void 0 !== a.frames.frame_0.bg_c ? a.frames.frame_0.bg_c : "transparent",a.frames.frame_0.use_text_c = void 0 !== a.frames.frame_0.use_text_c && a.frames.frame_0.use_text_c,a.frames.frame_0.use_bg_c = void 0 !== a.frames.frame_0.use_bg_c && a.frames.frame_0.use_bg_c,a.frames.frame_0.time = void 0 === a.frames.frame_0.time ? 10 : a.frames.frame_0.time,a.frames.frame_0.delay = void 0 === a.frames.frame_0.delay ? 0 : a.frames.frame_0.delay,a.frames.frame_0.split = void 0 === a.frames.frame_0.split ? "none" : a.frames.frame_0.split,a.frames.frame_0.split_direction = void 0 === a.frames.frame_0.split_direction ? "forward" : a.frames.frame_0.split_direction,a.frames.frame_0.splitdelay = void 0 === a.frames.frame_0.splitdelay ? 10 : a.frames.frame_0.splitdelay,a.frames.frame_0.split_extratime = void 0 === a.frames.frame_0.split_extratime ? 0 : a.frames.frame_0.split_extratime,a.frames.frame_0.speed = void 0 === a.frames.frame_0.speed ? 300 : a.frames.frame_0.speed,a.frames.frame_0.sfxcolor = void 0 === a.frames.frame_0.sfxcolor ? "#ffffff" : a.frames.frame_0.sfxcolor,a.frames.frame_0.animation = void 0 === a.frames.frame_0.animation ? "tp-fade" : a.frames.frame_0.animation,a.frames.frame_0.easing = void 0 === a.frames.frame_0.easing ? "Power3.easeInOut" : a.frames.frame_0.easing,a.frames.frame_999.time = void 0 === a.frames.frame_999.time ? 10 : a.frames.frame_999.time,a.frames.frame_999.delay = void 0 === a.frames.frame_999.delay ? 0 : a.frames.frame_999.delay,a.frames.frame_999.split = void 0 === a.frames.frame_999.split ? "none" : a.frames.frame_999.split,a.frames.frame_999.split_direction = void 0 === a.frames.frame_999.split_direction ? "forward" : a.frames.frame_999.split_direction,a.frames.frame_999.splitdelay = void 0 === a.frames.frame_999.splitdelay ? 10 : a.frames.frame_999.splitdelay,a.frames.frame_999.split_extratime = void 0 === a.frames.frame_999.split_extratime ? 0 : a.frames.frame_999.split_extratime,a.frames.frame_999.speed = void 0 === a.frames.frame_999.speed ? 300 : a.frames.frame_999.speed,a.frames.frame_999.animation = void 0 === a.frames.frame_999.animation ? "tp-fade" : a.frames.frame_999.animation,a.frames.frame_999.easing = void 0 === a.frames.frame_999.easing ? "Power3.easeInOut" : a.frames.frame_999.easing,a.frames.frame_999.sfxcolor = void 0 === a.frames.frame_999.sfxcolor ? "#ffffff" : a.frames.frame_999.sfxcolor,a.frames.frame_999.use_text_c = void 0 !== a.frames.frame_0.use_text_c && a.frames.frame_0.use_text_c,a.frames.frame_999.use_bg_c = void 0 !== a.frames.frame_0.use_bg_c && a.frames.frame_0.use_bg_c,a.frames.frame_999.text_c = void 0 !== a.frames.frame_999.text_c ? a.frames.frame_999.text_c : "transparent",a.frames.frame_999.bg_c = void 0 !== a.frames.frame_999.bg_c ? a.frames.frame_999.bg_c : "transparent",void 0 == t.getVal(a, "width") ? a = t.setVal(a, "width", -1, !0) : "object" != typeof a.width && (a = t.setVal(a, "width", a.width, !0)),void 0 == t.getVal(a, "height") ? a = t.setVal(a, "height", -1, !0) : "object" != typeof a.height && (a = t.setVal(a, "height", a.height, !0)),void 0 == t.getVal(a, "cover_mode") && (a = t.setVal(a, "cover_mode", "custom", !0)),void 0 == a.static_styles ? (a.static_styles = {}, t.reset_to_default_static_styles(a), void 0 == t.getVal(a.static_styles, "font-size") && (a.static_styles = t.setVal(a.static_styles, "font-size", 20, !0)), void 0 == t.getVal(a.static_styles, "line-height") && (a.static_styles = t.setVal(a.static_styles, "line-height", 22, !0)), void 0 == t.getVal(a.static_styles, "font-weight") && (a.static_styles = t.setVal(a.static_styles, "font-weight", 400, !0)), void 0 == t.getVal(a.static_styles, "color") && (a.static_styles = t.setVal(a.static_styles, "color", "#ffffff", !0)), void 0 == t.getVal(a.static_styles, "letter-spacing") && (a.static_styles = t.setVal(a.static_styles, "letter-spacing", 0, !0))) : ("object" != typeof a.static_styles["font-size"] && (a.static_styles = t.setVal(a.static_styles, "font-size", a.static_styles["font-size"], !0)), "object" != typeof a.static_styles["line-height"] && (a.static_styles = t.setVal(a.static_styles, "line-height", a.static_styles["line-height"], !0)), "object" != typeof a.static_styles["font-weight"] && (a.static_styles = t.setVal(a.static_styles, "font-weight", a.static_styles["font-weight"], !0)), "object" != typeof a.static_styles.color && (a.static_styles = t.setVal(a.static_styles, "color", a.static_styles.color, !0)), "object" != typeof a.static_styles["letter-spacing"] && (a.static_styles = t.setVal(a.static_styles, "letter-spacing", a.static_styles["letter-spacing"], !0))),void 0 !== a.deformation) {
                if (void 0 !== a.deformation["color-transparency"]) {
                    for (var i in a.static_styles.color)void 0 !== a.static_styles.color[i] && a.static_styles.color[i].length > 0 && (a.static_styles.color[i] = window.RevColor.convert(a.static_styles.color[i], 100 * a.deformation["color-transparency"]));
                    delete a.deformation["color-transparency"]
                }
                void 0 !== a.deformation["background-transparency"] && void 0 !== a.deformation["background-color"] && a.deformation["background-color"].length > 0 && (a.deformation["background-color"] = window.RevColor.convert(a.deformation["background-color"], 100 * a.deformation["background-transparency"]), delete a.deformation["background-transparency"]), void 0 !== a.deformation["border-transparency"] && void 0 !== a.deformation["border-color"] && a.deformation["border-color"].length > 0 && (a.deformation["border-color"] = window.RevColor.convert(a.deformation["border-color"], 100 * a.deformation["border-transparency"]), delete a.deformation["border-transparency"])
            }
            if (void 0 !== a["deformation-hover"] && (void 0 !== a["deformation-hover"]["color-transparency"] && void 0 !== a["deformation-hover"].color && a["deformation-hover"].color.length > 0 && (a["deformation-hover"].color = window.RevColor.convert(a["deformation-hover"].color, 100 * a["deformation-hover"]["color-transparency"]), delete a["deformation-hover"]["color-transparency"]), void 0 !== a["deformation-hover"]["background-transparency"] && void 0 !== a["deformation-hover"]["background-color"] && a["deformation-hover"]["background-color"].length > 0 && (a["deformation-hover"]["background-color"] = window.RevColor.convert(a["deformation-hover"]["background-color"], 100 * a["deformation-hover"]["background-transparency"]), delete a["deformation-hover"]["background-transparency"]), void 0 !== a["deformation-hover"]["border-transparency"] && void 0 !== a["deformation-hover"]["border-color"] && a["deformation-hover"]["border-color"].length > 0 && (a["deformation-hover"]["border-color"] = window.RevColor.convert(a["deformation-hover"]["border-color"], 100 * a["deformation-hover"]["border-transparency"]), delete a["deformation-hover"]["border-transparency"])), void 0 !== a.svg && (void 0 !== a.svg["svgstroke-transparency"] && void 0 !== a.svg["svgstroke-color"] && a.svg["svgstroke-color"].length > 0 && (a.svg["svgstroke-color"] = window.RevColor.convert(a.svg["svgstroke-color"], 100 * a.svg["svgstroke-transparency"]), delete a.svg["svgstroke-transparency"]), void 0 !== a.svg["svgstroke-hover-transparency"] && void 0 !== a.svg["svgstroke-hover-color"] && a.svg["svgstroke-hover-color"].length > 0 && (a.svg["svgstroke-hover-color"] = window.RevColor.convert(a.svg["svgstroke-hover-color"], 100 * a.svg["svgstroke-hover-transparency"]), delete a.svg["svgstroke-hover-transparency"])), void 0 == a.margin) {
                a.margin = {};
                var j = [];
                jQuery('input[name="css_margin[]"]').each(function () {
                    j.push(0)
                }), a = t.setVal(a, "margin", j, !0)
            } else"object" != typeof a.margin && (a = t.setVal(a, "margin", a.margin, !0));
            if (void 0 == a.padding)if (void 0 !== a.deformation && void 0 !== a.deformation.padding) a = t.setVal(a, "padding", a.deformation.padding, !0); else {
                a.padding = {};
                var k = [];
                jQuery('input[name="css_padding[]"]').each(function () {
                    k.push(0)
                }), a = t.setVal(a, "padding", k, !0)
            } else if ("object" !== jQuery.type(a.padding)) {
                var l = a.padding;
                delete a.padding, a = t.setVal(a, "padding", l, !0)
            }
            if (void 0 == a["text-align"] ? a = void 0 !== a.deformation && void 0 !== a.deformation["text-align"] ? t.setVal(a, "text-align", a.deformation["text-align"], !0) : t.setVal(a, "text-align", "inherit", !0) : "object" !== jQuery.type(a["text-align"]) && (a = t.setVal(a, "text-align", a["text-align"], !0)), a = t.setVal(a, "top", Math.round(t.getVal(a, "top"))), a = t.setVal(a, "left", Math.round(t.getVal(a, "left"))), void 0 == a.x_start && (a.x_start = "inherit"), void 0 == a.y_start && (a.y_start = "inherit"), void 0 == a.z_start && (a.z_start = "inherit"), void 0 == a.x_end && (a.x_end = "inherit"), void 0 == a.y_end && (a.y_end = "inherit"), void 0 == a.z_end && (a.z_end = "inherit"), void 0 == a.opacity_start && (a.opacity_start = 0 == b ? "0" : "inherit"), void 0 == a.opacity_end && (a.opacity_end = 0 == b ? "0" : "inherit"), void 0 == a.blurfilter_start && (a.blurfilter_start = "0"), void 0 == a.blurfilter_end && (a.blurfilter_end = "0"), void 0 == a.grayscalefilter_start && (a.grayscalefilter_start = "0"), void 0 == a.grayscalefilter_end && (a.grayscalefilter_end = "0"), void 0 == a.brightnessfilter_start && (a.brightnessfilter_start = "100"), void 0 == a.brightnessfilter_end && (a.brightnessfilter_end = "100"), void 0 == a.x_rotate_start && (a.x_rotate_start = "inherit"), void 0 == a.y_rotate_start && (a.y_rotate_start = "inherit"), void 0 == a.z_rotate_start && (a.z_rotate_start = "inherit"), void 0 == a.x_rotate_end && (a.x_rotate_end = "inherit"), void 0 == a.y_rotate_end && (a.y_rotate_end = "inherit"), void 0 == a.z_rotate_end && (a.z_rotate_end = "inherit"), void 0 == a.scale_x_start && (a.scale_x_start = "inherit"), void 0 == a.scale_y_start && (a.scale_y_start = "inherit"), void 0 == a.scale_x_end && (a.scale_x_end = "inherit"), void 0 == a.scale_y_end && (a.scale_y_end = "inherit"), void 0 == a.skew_x_start && (a.skew_x_start = "inherit"), void 0 == a.skew_y_start && (a.skew_y_start = "inherit"), void 0 == a.skew_x_end && (a.skew_x_end = "inherit"), void 0 == a.skew_y_end && (a.skew_y_end = "inherit"), void 0 == a.pers_start && (a.pers_start = "inherit"), void 0 == a.pers_end && (a.pers_end = "inherit"), (void 0 == a.deformation || jQuery.isEmptyObject(a.deformation)) && (a.deformation = {}), void 0 != a.deformation["font-family"] || "text" != a.type && "button" != a.type ? "" !== a.deformation["font-family"] && -1 == sgfamilies.indexOf(a.deformation["font-family"]) && sgfamilies.push(a.deformation["font-family"]) : (a.deformation["font-family"] = "Open Sans", sgfamilies.push("Open Sans")), void 0 == a.deformation["font-style"] && (a.deformation["font-style"] = "normal"), void 0 == a.deformation["text-decoration"] && (a.deformation["text-decoration"] = "none"), void 0 == a.deformation["vertical-align"] && (a.deformation["vertical-align"] = "top"), void 0 == a.deformation["text-transform"] && (a.deformation["text-transform"] = "none"), void 0 == a.deformation["background-color"] && (a.deformation["background-color"] = "transparent"), void 0 == a.deformation["border-color"] && (a.deformation["border-color"] = "transparent"), void 0 == a.deformation["border-style"] && (a.deformation["border-style"] = "none"), void 0 == a.deformation["border-width"]) {
                var m = [];
                jQuery('input[name="css_border-width[]"]').each(function () {
                    m.push(0)
                }), a.deformation["border-width"] = m
            } else jQuery.isArray(a.deformation["border-width"]) || (a.deformation["border-width"] = [a.deformation["border-width"], a.deformation["border-width"], a.deformation["border-width"], a.deformation["border-width"]]);
            if (void 0 == a.deformation["border-radius"]) {
                var m = [];
                jQuery('input[name="css_border-radius[]"]').each(function () {
                    m.push(0)
                }), a.deformation["border-radius"] = m
            }
            if (void 0 == a.svg && (a.svg = {}), void 0 == a.svg["svgstroke-color"] && (a.svg["svgstroke-color"] = "transparent"), void 0 == a.svg["svgstroke-dasharray"] && (a.svg["svgstroke-dasharray"] = "0"), void 0 == a.svg["svgstroke-dashoffset"] && (a.svg["svgstroke-dashoffset"] = "0"), void 0 == a.svg["svgstroke-width"] && (a.svg["svgstroke-width"] = "0"), void 0 == a.svg["svgstroke-hover-color"] && (a.svg["svgstroke-hover-color"] = "transparent"), void 0 == a.svg["svgstroke-hover-dasharray"] && (a.svg["svgstroke-hover-dasharray"] = "0"), void 0 == a.svg["svgstroke-hover-dashoffset"] && (a.svg["svgstroke-hover-dashoffset"] = "0"), void 0 == a.svg["svgstroke-hover-width"] && (a.svg["svgstroke-hover-width"] = "0"), void 0 == a.deformation.x && (a.deformation.x = 0), void 0 == a.deformation.y && (a.deformation.y = 0), void 0 == a.deformation.z && (a.deformation.z = 0), void 0 == a.deformation.skewx && (a.deformation.skewx = 0), void 0 == a.deformation.skewy && (a.deformation.skewy = 0), void 0 == a.deformation.scalex && (a.deformation.scalex = 1), void 0 == a.deformation.scaley && (a.deformation.scaley = 1), void 0 == a.deformation.opacity && (a.deformation.opacity = 1), void 0 == a.deformation.xrotate && (a.deformation.xrotate = 0), void 0 == a.deformation.yrotate && (a.deformation.yrotate = 0), void 0 == a["2d_rotation"] && (a["2d_rotation"] = 0), void 0 == a.deformation["2d_origin_x"] && (a.deformation["2d_origin_x"] = 50), void 0 == a.deformation["2d_origin_y"] && (a.deformation["2d_origin_y"] = 50), void 0 == a.deformation.pers && (a.deformation.pers = 600), void 0 == a.deformation.corner_left && (a.deformation.corner_left = "nothing"), void 0 == a.deformation.corner_right && (a.deformation.corner_right = "nothing"), void 0 == a.deformation.parallax && (a.deformation.parallax = "-"), void 0 == a.deformation.blurfilter && (a.deformation.blurfilter = 0), void 0 == a.deformation.grayscalefilter && (a.deformation.grayscalefilter = 0), void 0 == a.deformation.brightnessfilter && (a.deformation.brightnessfilter = 100), (void 0 == a["deformation-hover"] || jQuery.isEmptyObject(a["deformation-hover"])) && (a["deformation-hover"] = {}), void 0 == a["deformation-hover"].blurfilter && (a["deformation-hover"].blurfilter = 0), void 0 == a["deformation-hover"].grayscalefilter && (a["deformation-hover"].grayscalefilter = 0), void 0 == a["deformation-hover"].brightnessfilter && (a["deformation-hover"].brightnessfilter = 100), void 0 == a["deformation-hover"].color && (a["deformation-hover"].color = "#ffffff"), void 0 == a["deformation-hover"]["text-decoration"] && (a["deformation-hover"]["text-decoration"] = "none"), void 0 == a["deformation-hover"]["background-color"] && (a["deformation-hover"]["background-color"] = "transparent"), void 0 == a["deformation-hover"]["border-color"] && (a["deformation-hover"]["border-color"] = "transparent"), void 0 == a["deformation-hover"]["border-style"] && (a["deformation-hover"]["border-style"] = "none"), void 0 == a["deformation-hover"]["border-width"] && (a["deformation-hover"]["border-width"] = 0), void 0 == a["deformation-hover"]["border-width"]) {
                var m = [];
                jQuery('input[name="hover_css_border-width[]"]').each(function () {
                    m.push(0)
                }), a["deformation-hover"]["border-width"] = m
            } else jQuery.isArray(a["deformation-hover"]["border-width"]) || (a["deformation-hover"]["border-width"] = [a["deformation-hover"]["border-width"], a["deformation-hover"]["border-width"], a["deformation-hover"]["border-width"], a["deformation-hover"]["border-width"]]);
            if (void 0 == a["deformation-hover"]["border-radius"]) {
                var m = [];
                jQuery('input[name="hover_css_border-radius[]"]').each(function () {
                    m.push(0)
                }), a["deformation-hover"]["border-radius"] = m
            }
            void 0 != a.svg && (void 0 == a.svg["svgstroke-hover-color"] && (a.svg["svgstroke-hover-color"] = "transparent"), void 0 == a.svg["svgstroke-hover-dasharray"] && (a.svg["svgstroke-hover-dasharray"] = "0"), void 0 == a.svg["svgstroke-hover-dashoffset"] && (a.svg["svgstroke-hover-dashoffset"] = "0"), void 0 == a.svg["svgstroke-hover-width"] && (a.svg["svgstroke-hover-width"] = "0")), void 0 == a["deformation-hover"].x && (a["deformation-hover"].x = 0), void 0 == a["deformation-hover"].y && (a["deformation-hover"].y = 0), void 0 == a["deformation-hover"].z && (a["deformation-hover"].z = 0), void 0 == a["deformation-hover"].skewx && (a["deformation-hover"].skewx = 0), void 0 == a["deformation-hover"].skewy && (a["deformation-hover"].skewy = 0), void 0 == a["deformation-hover"].scalex && (a["deformation-hover"].scalex = 1), void 0 == a["deformation-hover"].scaley && (a["deformation-hover"].scaley = 1), void 0 == a["deformation-hover"].opacity && (a["deformation-hover"].opacity = 1), void 0 == a["deformation-hover"].xrotate && (a["deformation-hover"].xrotate = 0), void 0 == a["deformation-hover"].yrotate && (a["deformation-hover"].yrotate = 0), void 0 == a["deformation-hover"]["2d_rotation"] && (a["deformation-hover"]["2d_rotation"] = 0), void 0 == a["deformation-hover"]["2d_origin_x"] && (a["deformation-hover"]["2d_origin_x"] = 50), void 0 == a["deformation-hover"]["2d_origin_y"] && (a["deformation-hover"]["2d_origin_y"] = 50), void 0 == a["deformation-hover"].speed && (a["deformation-hover"].speed = 0), void 0 == a["deformation-hover"].zindex && (a["deformation-hover"].zindex = "auto"), void 0 == a["deformation-hover"].easing && (a["deformation-hover"].easing = "Linear.easeNone"), void 0 == a["deformation-hover"].css_cursor && (a["deformation-hover"].css_cursor = "auto"), void 0 == a.visible && (a.visible = !0), void 0 == a.animation_overwrite && (a.animation_overwrite = "wait"), void 0 == a.trigger_memory && (a.trigger_memory = "keep"), a.serial = id_counter, a.isDemo = c;
            var n = t.makeLayerHtml(id_counter, a, c);
            return container.append(n), a.references = void 0 === a.references ? {} : a.references, a.references.htmlLayer = t.getHtmlLayerFromSerial(id_counter, c), jQuery.each(t.addon_callbacks, function (b, c) {
                var d = c.callback, e = c.environment, f = c.function_position;
                "add_layer_to_stage" === e && "data_definition" == f && (a = d(a))
            }), c ? t.arrLayersDemo[id_counter] = jQuery.extend({}, a) : t.arrLayers[id_counter] = jQuery.extend({}, a), c || (u.addToSortbox(id_counter, a), 1 != d && u.timeLineTableDimensionUpdate()), 0 != a.visible || c || u.hideLayer(a), c || refreshEvents(id_counter), !1 === a.createdOnInit && (c ? t.arrLayersDemo[id_counter].layer_unavailable = !0 : t.arrLayers[id_counter].layer_unavailable = !0, t.cloneArrLayers(), c ? t.arrLayersDemo[id_counter].layer_unavailable = !1 : t.arrLayers[id_counter].layer_unavailable = !1, t.add_layer_change()), id_counter++, jQuery("#button_delete_all").removeClass("button-now-disabled"), u.rebuildLayerIdle(a.references.htmlLayer, 0, c), 0 != b || c || (t.setLayerSelected(a.serial), jQuery("#layer_text").focus()), e && (t.reset_to_default_static_styles(a), updateSubStyleParameters(a, !0)), t.cloneArrLayers(), u.timeLineTableDimensionUpdate(), u.organiseGroupsAndLayer(!1, !1, !0), jQuery.each(t.addon_callbacks, function (b, c) {
                var d = c.callback, e = c.environment, f = c.function_position;
                "add_layer_to_stage" === e && "end" == f && (a = d(a))
            }), a.serial
        };
        t.deleteLayer = function (a) {
            var b = t.getLayer(a);
            b.deleted = !0, forceShowHideLayer(b, "hide"), t.add_layer_change(), u.timeLineTableDimensionUpdate()
        };
        var deleteCurrentLayer = function () {
            if (-1 == t.selectedLayerSerial)return !1;
            t.deleteLayer(t.selectedLayerSerial), t.selectedLayerSerial = -1, disableFormFields()
        }, duplicateLayerIntoNewGroup = function (a) {
            return a.order = void 0, a.time = void 0, a.createdOnInit = !1, unique_layer_id++, a.unique_id = unique_layer_id, addLayer(a, !0), u.timeLineTableDimensionUpdate(), unique_layer_id
        }, duplicateCurrentLayer = function () {
            if (-1 == t.selectedLayerSerial)return !1;
            var a = t.arrLayers[t.selectedLayerSerial], b = jQuery.extend(!0, {}, a);
            b = t.setVal(b, "left", t.getVal(b, "left") + 5), b = t.setVal(b, "top", t.getVal(b, "top") + 5), b.order = void 0, b.time = void 0, b.createdOnInit = !1, unique_layer_id++, b.unique_id = unique_layer_id, void 0 !== b.groupOrder && "row" === b.type && (b.groupOrder = t.getHighestGroupOrder(t.getVal(b, "align_vert"))), addLayer(b, !0), initDisallowCaptionsOnClick(), u.timeLineTableDimensionUpdate(), "group" === a.type && t.getLayersInGroup(a.unique_id).layers.length > 0 && (jQuery.each(t.getLayersInGroup(a.unique_id).layers, function (a, c) {
                var d = jQuery.extend(!0, {}, c);
                d.p_uid = b.unique_id, duplicateLayerIntoNewGroup(d)
            }), t.makeRowSortableDroppable()), "row" === a.type && t.getLayersInGroup(a.unique_id).layers.length > 0 && (jQuery.each(t.getLayersInGroup(a.unique_id).columns, function (a, c) {
                var d = jQuery.extend(!0, {}, c);
                d.p_uid = b.unique_id, d.ref_group = b.unique_id;
                var e = duplicateLayerIntoNewGroup(d);
                jQuery.each(t.getLayersInGroup(c.unique_id).layers, function (a, b) {
                    var c = jQuery.extend(!0, {}, b);
                    c.p_uid = e, duplicateLayerIntoNewGroup(c)
                })
            }), t.makeRowSortableDroppable());
            var c;
            jQuery.each(t.getLayers(), function (a, b) {
                c = a
            }), t.setLayerSelected(c), -1 !== b.p_uid && "group" !== t.getObjLayerType(b.p_uid) && t.setInnerGroupOrders(b.references.htmlLayer.parent())
        };
        t.updateHtmlLayerCorners = function (a) {
            htmlLayer = jQuery(a.references.htmlLayer[0].getElementsByClassName("innerslide_layer")[0]);
            var b = htmlLayer.outerHeight(), c = htmlLayer.css("backgroundColor"), d = UniteAdminRev.getTransparencyFromRgba(htmlLayer.css("backgroundColor"));
            if (d = !1 === d ? 1 : d, htmlLayer.find(".frontcorner").remove(), htmlLayer.find(".frontcornertop").remove(), htmlLayer.find(".backcorner").remove(), htmlLayer.find(".backcornertop").remove(), void 0 == a || 0 == a)return !1;
            switch (a.deformation.corner_left) {
                case"curved":
                    htmlLayer.append("<div class='frontcorner'></div>");
                    break;
                case"reverced":
                    htmlLayer.append("<div class='frontcornertop'></div>")
            }
            switch (a.deformation.corner_right) {
                case"curved":
                    htmlLayer.append("<div class='backcorner'></div>");
                    break;
                case"reverced":
                    htmlLayer.append("<div class='backcornertop'></div>")
            }
            htmlLayer.find(".frontcorner").css({
                borderWidth: b + "px",
                left: 0 - b + "px",
                borderRight: "0px solid transparent",
                borderTopColor: c
            }), htmlLayer.find(".frontcornertop").css({
                borderWidth: b + "px",
                left: 0 - b + "px",
                borderRight: "0px solid transparent",
                borderBottomColor: c
            }), htmlLayer.find(".backcorner").css({
                borderWidth: b + "px",
                right: 0 - b + "px",
                borderLeft: "0px solid transparent",
                borderBottomColor: c
            }), htmlLayer.find(".backcornertop").css({
                borderWidth: b + "px",
                right: 0 - b + "px",
                borderLeft: "0px solid transparent",
                borderTopColor: c
            })
        };
        var getjQueryLayer = function () {
            return jQuery("#slide_layer_" + t.selectedLayerSerial)
        }, updateLayerTextField = function (a, b, c) {
            var d = getjQueryLayer();
            -1 != t.selectedLayerSerial && d.length > 0 && (d[0].getElementsByClassName("innerslide_layer")[0].innerHTML = c);
            var e = b.closest("li");
            c = u.getSortboxText(c), void 0 != e && (e[0].getElementsByClassName("timer-layer-text")[0].innerHTML = c)
        };
        t.updateCrossIconPosition = function (a) {
            var b = jQuery(a.references.htmlLayer[0].getElementsByClassName("icon_cross")[0]), c = b.width(), d = b.height(), e = a.references.htmlLayer.outerWidth(), f = a.references.htmlLayer.outerHeight(), g = Math.round(c / 2), h = Math.round(d / 2), i = 0, j = 0;
            switch (t.getVal(a, "align_hor")) {
                case"left":
                    i = -g;
                    break;
                case"center":
                    i = (e - c) / 2;
                    break;
                case"right":
                    i = e - g
            }
            switch (t.getVal(a, "align_vert")) {
                case"top":
                    j = -h;
                    break;
                case"middle":
                    j = (f - d) / 2;
                    break;
                case"bottom":
                    j = f - h
            }
            b.css({left: i + "px", top: j + "px"})
        };
        var checkUpdateFullwidthVideo = function (a) {
            return "video" != a.type ? a : (void 0 !== a.video_data && a.video_data && a.video_data.fullwidth && 1 == a.video_data.fullwidth && (a = t.setVal(a, "top", 0), a = t.setVal(a, "left", 0), a = t.setVal(a, "align_hor", "left", !0), a = t.setVal(a, "align_vert", "top", !0), a.video_width = container.width(), a.video_height = container.height()), a)
        }, updateHtmlLayersFromObject = function (a, b, c) {
            a || (a = t.selectedLayerSerial);
            var d = t.getLayer(a, c);
            if (!d)return !1;
            var e = d.references.htmlLayer, f = "innerslide_layer tp-caption";
            switch (a == t.selectedLayerSerial && (e.addClass("layer_selected"), e.closest(".slide_layer_type_row").addClass("layerchild_selected"), e.closest(".slide_layer_type_column").addClass("layerchild_selected")), f += " " + d.style, d.type) {
                case"button":
                case"shape":
                    f += " " + d.internal_class
            }
            switch (e[0].getElementsByClassName("innerslide_layer")[0].className = f, d.type || "text") {
                case"image":
                    break;
                case"video":
                    d = checkUpdateFullwidthVideo(d);
                    break;
                case"row":
                case"group":
                case"column":
                    break;
                default:
                case"text":
                case"button":
                    e[0].getElementsByClassName("innerslide_layer")[0].innerHTML = d.text, t.makeCurrentLayerRotatable(a), t.updateHtmlLayerCorners(d);
                    break;
                case"svg":
                    d.svg.renderedData = e[0].getElementsByClassName("innerslide_layer")[0].innerHTML, t.makeCurrentLayerRotatable(a);
                    break;
                case"audio":
            }
            u.rebuildLayerIdle(getjQueryLayer())
        };
        t.makeCurrentLayerRotatable = function (a) {
            if (u.checkLoopTab() || u.checkAnimationTab())return t.removeCurrentLayerRotatable(), !1;
            var b = document.getElementsByClassName("slide_layer layer_selected")[0];
            if (void 0 != (b = void 0 != b ? jQuery(b.getElementsByClassName("innerslide_layer")[0]) : b) && null !== b && b.length > 0) {
                try {
                    b.rotatable("destroy")
                } catch (a) {
                }
                b.rotatable({
                    angle: b.data("angle"), start: function (a, b) {
                    }, rotate: function (a, b) {
                        jQuery("#layer_2d_rotation").val(getRotationDegrees(b.element)), b.element.data("angle", b.angle.current)
                    }, stop: function (a, b) {
                        t.updateLayerFromFields()
                    }
                })
            }
        }, t.removeCurrentLayerRotatable = function () {
            jQuery(".slide_layer .ui-rotatable-handle").each(function () {
                var a = jQuery(this);
                setTimeout(function () {
                    try {
                        a.parent().rotatable("destroy")
                    } catch (a) {
                    }
                    try {
                        a.remove()
                    } catch (a) {
                    }
                    try {
                        a.parent().find(".ui-rotatable-handle").remove()
                    } catch (a) {
                    }
                }, 50)
            })
        };
        var positionChanged = function (a) {
            jQuery("#layer_top, #layer_left").change(function () {
                setTimeout(function () {
                    updateHtmlLayersFromObject(t.getSerialFromID(jQuery(".layer_selected").attr("id")), !0)
                }, 19)
            })
        }, positionChanged_Core = function () {
            try {
                jQuery.each(t.arrLayers, function (a, b) {
                    try {
                        t.updateHtmlLayerPosition(!1, b, t.getVal(b, "top"), t.getVal(b, "left"), t.getVal(b, "align_hor"), t.getVal(b, "align_vert"))
                    } catch (a) {
                        console.log("Position Changed Core Internal Function Error:"), console.log(a)
                    }
                })
            } catch (a) {
                console.log("Position Changed Core Function Error:"), console.log(a)
            }
        };
        t.set_cover_mode = function () {
            var a = t.getLayer(t.selectedLayerSerial);
            switch (jQuery("#layer_scaleX").prop("disabled", !1), jQuery("#layer_scaleY").prop("disabled", !1), jQuery("#layer_max_width").prop("disabled", !1), jQuery("#layer_max_height").prop("disabled", !1), a.type) {
                case"shape":
                case"image":
                    switch (jQuery("#layer_cover_mode").val()) {
                        case"custom":
                            break;
                        case"fullwidth":
                            jQuery("#layer_scaleX").attr("disabled", "disabled"), jQuery("#layer_max_width").attr("disabled", "disabled");
                            break;
                        case"fullheight":
                            jQuery("#layer_scaleY").attr("disabled", "disabled"), jQuery("#layer_max_height").attr("disabled", "disabled");
                            break;
                        case"cover":
                        case"cover-proportional":
                            jQuery("#layer_scaleX").attr("disabled", "disabled"), jQuery("#layer_scaleY").attr("disabled", "disabled"), jQuery("#layer_max_width").attr("disabled", "disabled"), jQuery("#layer_max_height").attr("disabled", "disabled")
                    }
            }
        }, t.updateCurrentLayerPosition = function () {
            var a = {};
            a = t.setVal(a, "top", Number(parseInt(jQuery("#layer_top").val(), 0))), a = t.setVal(a, "left", Number(parseInt(jQuery("#layer_left").val(), 0))), t.updateCurrentLayer(a), u.rebuildLayerIdle(jQuery(".slide_layer.layer_selected"))
        }, t.updateLayerFromFields = function () {
            t.updateLayerFromFields_Core()
        }, t.updateLayerFromFields_Core = function () {
            var a = {};
            if (jQuery.each(t.addon_callbacks, function (b, c) {
                    var d = c.callback, e = c.environment, f = c.function_position;
                    "updateLayerFromFields_Core" === e && "start" == f && (a = d(a))
                }), -1 == t.selectedLayerSerial)return !1;
            UniteCssEditorRev.compare_to_original(), a.style = jQuery("#layer_caption").val(), a.hover = jQuery("#hover_allow").attr("checked") ? true : false, a.toggle = jQuery("#toggle_allow").attr("checked") ? true : false, a.toggle_use_hover = jQuery("#toggle_use_hover").attr("checked") ? true : false, a.toggle_inverse_content = jQuery("#toggle_inverse_content").attr("checked") ? true : false, a["visible-desktop"] = jQuery("#visible-desktop").attr("checked") ? true : false, a["visible-notebook"] = jQuery("#visible-notebook").attr("checked") ? true : false, a["visible-tablet"] = jQuery("#visible-tablet").attr("checked") ? true : false, a["visible-mobile"] = jQuery("#visible-mobile").attr("checked") ? true : false, a["show-on-hover"] = jQuery("#layer_on_slider_hover").attr("checked") ? true : false, a["lazy-load"] = jQuery("#layer-lazy-loading").val(), a["image-size"] = jQuery("#layer-image-size").val(), a["css-position"] = jQuery("#layer-css-position").val(), a.text = jQuery("#layer_text").val(), a.texttoggle = jQuery("#layer_text_toggle").val() || "", a.alias = jQuery("#layer_sort_" + t.selectedLayerSerial + ">.layer_sort_inner_wrapper .timer-layer-text").val(), jQuery("#layer_text").data("new_content") && jQuery("#layer_sort_" + t.selectedLayerSerial + ">.layer_sort_inner_wrapper .timer-layer-text").val(a.text), jQuery("#layer_quicksort_" + t.selectedLayerSerial + " .layer-title-in-list").val(a.alias), jQuery("#the_current-editing-layer-title").val(a.alias), jQuery("#layer-short-toolbar").data("serial", t.selectedLayerSerial), a = t.setVal(a, "top", Number(parseInt(jQuery("#layer_top").val(), 0))), a = t.setVal(a, "left", Number(parseInt(jQuery("#layer_left").val(), 0))), a = t.setVal(a, "whitespace", jQuery("#layer_whitespace").val()), a = t.setVal(a, "display", jQuery("#layer_display").val()), a = t.setVal(a, "max_height", jQuery("#layer_max_height").val()), a = t.setVal(a, "min_height", jQuery("#layer_min_height").val()), a = t.setVal(a, "max_width", jQuery("#layer_max_width").val()), a = t.setVal(a, "video_height", jQuery("#layer_video_height").val()), a = t.setVal(a, "video_width", jQuery("#layer_video_width").val()), a = t.setVal(a, "scaleX", jQuery("#layer_scaleX").val()), a = t.setVal(a, "scaleY", jQuery("#layer_scaleY").val()), a = t.setVal(a, "cover_mode", jQuery("#layer_cover_mode").val()), a["2d_rotation"] = parseInt(jQuery("#layer_2d_rotation").val(), 0), a["2d_origin_x"] = parseInt(jQuery("#layer_2d_origin_x").val(), 0), a["2d_origin_y"] = parseInt(jQuery("#layer_2d_origin_y").val(), 0), a.static_start = jQuery("#layer_static_start").val(), a.static_end = jQuery("#layer_static_end").val(), a.layer_bg_position = jQuery("#layer_bg_position").val(), a.layer_bg_size = jQuery("#layer_bg_size").val(), a.layer_bg_repeat = jQuery("#layer_bg_repeat").val(), a.loop_animation = jQuery("#layer_loop_animation").val(), a.loop_easing = jQuery("#layer_loop_easing").val(), a.loop_speed = jQuery("#layer_loop_speed").val(), a.loop_startdeg = parseInt(jQuery("#layer_loop_startdeg").val(), 0), a.loop_enddeg = parseInt(jQuery("#layer_loop_enddeg").val(), 0), a.loop_xorigin = parseInt(jQuery("#layer_loop_xorigin").val(), 0), a.loop_yorigin = parseInt(jQuery("#layer_loop_yorigin").val(), 0), a.loop_xstart = parseInt(jQuery("#layer_loop_xstart").val(), 0), a.loop_xend = parseInt(jQuery("#layer_loop_xend").val(), 0), a.loop_ystart = parseInt(jQuery("#layer_loop_ystart").val(), 0), a.loop_yend = parseInt(jQuery("#layer_loop_yend").val(), 0), a.loop_zoomstart = jQuery("#layer_loop_zoomstart").val(), a.loop_zoomend = jQuery("#layer_loop_zoomend").val(), a.loop_angle = jQuery("#layer_loop_angle").val(), a.loop_radius = jQuery("#layer_loop_radius").val(), a.html_tag = jQuery("#layer_html_tag").val(), a.parallax_layer_ddd_zlevel = jQuery("#parallax_layer_ddd_zlevel").val();
            var b = t.getHtmlLayerFromSerial(t.selectedLayerSerial);
            1 != jQuery("#layer__scalex").val() || 1 != jQuery("#layer__scaley").val() || 0 != parseInt(jQuery("#layer__skewx").val(), 0) || 0 != parseInt(jQuery("#layer__skewy").val(), 0) || 0 != parseInt(jQuery("#layer__xrotate").val(), 0) || 0 != parseInt(jQuery("#layer__yrotate").val(), 0) || 0 != parseInt(jQuery("#layer_2d_rotation").val(), 0) ? (jQuery(document.getElementsByClassName("mask-not-available")[0]).show(), jQuery(document.getElementsByClassName("mask-is-available")[0]).hide(), jQuery("#masking-start").removeAttr("checked"), jQuery("#masking-end").removeAttr("checked"), jQuery(document.getElementsByClassName("mask-start-settings")[0]).hide(), jQuery(document.getElementsByClassName("mask-end-settings")[0]).hide(), jQuery(".tp-showmask").removeClass("tp-showmask"), RevSliderSettings.onoffStatus(jQuery("#masking-start")), RevSliderSettings.onoffStatus(jQuery("#masking-end")), b.find(".tp-mask-wrap").css({overflow: "visible"})) : (jQuery(document.getElementsByClassName("mask-not-available")[0]).hide(), jQuery(document.getElementsByClassName("mask-is-available")[0]).show()), a.mask_start = jQuery("#masking-start").attr("checked") ? true : false, a.mask_end = jQuery("#masking-end").attr("checked") ? true : false, a.mask_x_start = jQuery("#mask_anim_xstart").val(), a.mask_y_start = jQuery("#mask_anim_ystart").val(), a.mask_x_end = jQuery("#mask_anim_xend").val(), a.mask_y_end = jQuery("#mask_anim_yend").val(), a = t.setVal(a, "align_hor", jQuery("#layer_align_hor").val()), a = t.setVal(a, "align_vert", jQuery("#layer_align_vert").val()), a.hiddenunder = jQuery("#layer_hidden").attr("checked") ? true : false, a.resizeme = jQuery("#layer_resizeme").attr("checked") ? true : false, a["resize-full"] = jQuery("#layer_resize-full").attr("checked") ? true : false, a.basealign = jQuery("#layer_align_base").val(), a.responsive_offset = jQuery("#layer_resp_offset").attr("checked") ? true : false, a.frames = {}, a.frames.frame_0 = {}, a.frames.frame_999 = {}, a.frames.frame_0.use_text_c = jQuery("#use_text_color_start").attr("checked") ? true : false, a.frames.frame_0.use_bg_c = jQuery("#use_bg_color_start").attr("checked") ? true : false, a.frames.frame_0.text_c = jQuery("#text_color_start").val(), a.frames.frame_0.bg_c = jQuery("#bg_color_start").val(), a.frames.frame_0.animation = jQuery("#layer_animation").val(), a.frames.frame_0.speed = jQuery("#layer_speed").val(), a.frames.frame_0.easing = jQuery("#layer_easing").val(), a.frames.frame_0.sfx_effect = jQuery("#sfx_in_effect").val(), a.frames.frame_0.sfxcolor = jQuery("#sfx_color_start").val(), a.frames.frame_0.split = jQuery("#layer_split").val(), a.frames.frame_0.split_direction = jQuery("#layer_split_direction").val(), a.frames.frame_0.splitdelay = jQuery("#layer_splitdelay").val(), a.frames.frame_999.split = jQuery("#layer_endsplit").val(), a.frames.frame_999.split_direction = jQuery("#layer_endsplit_direction").val(), a.frames.frame_999.splitdelay = jQuery("#layer_endsplitdelay").val(), a.frames.frame_999.animation = jQuery("#layer_endanimation").val(), a.frames.frame_999.speed = jQuery("#layer_endspeed").val(), a.frames.frame_999.sfxcolor = jQuery("#sfx_color_end").val(), a.frames.frame_999.easing = jQuery("#layer_endeasing").val(), a.frames.frame_999.sfx_effect = jQuery("#sfx_out_effect").val(), a.frames.frame_999.use_text_c = jQuery("#use_text_color_end").attr("checked") ? true : false, a.frames.frame_999.use_bg_c = jQuery("#use_bg_color_end").attr("checked") ? true : false, a.frames.frame_999.text_c = jQuery("#text_color_end").val(), a.frames.frame_999.bg_c = jQuery("#bg_color_end").val(), a.alt_option = jQuery("#layer_alt_option").val(), a.alt = jQuery("#layer_alt").val(), a = t.setVal(a, "scaleX", jQuery("#layer_scaleX").val()), a = t.setVal(a, "scaleY", jQuery("#layer_scaleY").val()), a.x_start = jQuery("#layer_anim_xstart").val(), a.y_start = jQuery("#layer_anim_ystart").val(), a.z_start = jQuery("#layer_anim_zstart").val(), a.x_end = jQuery("#layer_anim_xend").val(), a.y_end = jQuery("#layer_anim_yend").val(), a.z_end = jQuery("#layer_anim_zend").val(), a.opacity_start = jQuery("#layer_opacity_start").val(), a.opacity_end = jQuery("#layer_opacity_end").val(), a.blurfilter_start = jQuery("#blurfilter_start").val(), a.blurfilter_end = jQuery("#blurfilter_end").val(), a.grayscalefilter_start = jQuery("#grayscalefilter_start").val(), a.grayscalefilter_end = jQuery("#grayscalefilter_end").val(), a.brightnessfilter_start = jQuery("#brightnessfilter_start").val(), a.brightnessfilter_end = jQuery("#brightnessfilter_end").val(), a.x_rotate_start = jQuery("#layer_anim_xrotate").val(), a.y_rotate_start = jQuery("#layer_anim_yrotate").val(), a.z_rotate_start = jQuery("#layer_anim_zrotate").val(), a.x_rotate_end = jQuery("#layer_anim_xrotate_end").val(), a.y_rotate_end = jQuery("#layer_anim_yrotate_end").val(), a.z_rotate_end = jQuery("#layer_anim_zrotate_end").val(), a.scale_x_start = jQuery("#layer_scale_xstart").val(), a.scale_y_start = jQuery("#layer_scale_ystart").val(), a.scale_x_end = jQuery("#layer_scale_xend").val(), a.scale_y_end = jQuery("#layer_scale_yend").val(), a.skew_x_start = jQuery("#layer_skew_xstart").val(), a.skew_y_start = jQuery("#layer_skew_ystart").val(), a.skew_x_end = jQuery("#layer_skew_xend").val(), a.skew_y_end = jQuery("#layer_skew_yend").val(), a.x_start_reverse = jQuery("#layer_anim_xstart_reverse").attr("checked") ? true : false || !1, a.y_start_reverse = jQuery("#layer_anim_ystart_reverse").attr("checked") ? true : false || !1, a.x_end_reverse = jQuery("#layer_anim_xend_reverse").attr("checked") ? true : false || !1, a.y_end_reverse = jQuery("#layer_anim_yend_reverse").attr("checked") ? true : false || !1, a.x_rotate_start_reverse = jQuery("#layer_anim_xrotate_reverse").attr("checked") ? true : false || !1, a.y_rotate_start_reverse = jQuery("#layer_anim_yrotate_reverse").attr("checked") ? true : false || !1, a.z_rotate_start_reverse = jQuery("#layer_anim_zrotate_reverse").attr("checked") ? true : false || !1, a.x_rotate_end_reverse = jQuery("#layer_anim_xrotate_end_reverse").attr("checked") ? true : false || !1, a.y_rotate_end_reverse = jQuery("#layer_anim_yrotate_end_reverse").attr("checked") ? true : false || !1, a.z_rotate_end_reverse = jQuery("#layer_anim_zrotate_end_reverse").attr("checked") ? true : false || !1, a.scale_x_start_reverse = jQuery("#layer_scale_xstart_reverse").attr("checked") ? true : false || !1, a.scale_y_start_reverse = jQuery("#layer_scale_ystart_reverse").attr("checked") ? true : false || !1, a.scale_x_end_reverse = jQuery("#layer_scale_xend_reverse").attr("checked") ? true : false || !1, a.scale_y_end_reverse = jQuery("#layer_scale_yend_reverse").attr("checked") ? true : false || !1, a.skew_x_start_reverse = jQuery("#layer_skew_xstart_reverse").attr("checked") ? true : false || !1, a.skew_y_start_reverse = jQuery("#layer_skew_ystart_reverse").attr("checked") ? true : false || !1, a.skew_x_end_reverse = jQuery("#layer_skew_xend_reverse").attr("checked") ? true : false || !1, a.skew_y_end_reverse = jQuery("#layer_skew_yend_reverse").attr("checked") ? true : false || !1, a.mask_x_start_reverse = jQuery("#mask_anim_xstart_reverse").attr("checked") ? true : false || !1, a.mask_y_start_reverse = jQuery("#mask_anim_ystart_reverse").attr("checked") ? true : false || !1, a.mask_x_end_reverse = jQuery("#mask_anim_xend_reverse").attr("checked") ? true : false || !1, a.mask_y_end_reverse = jQuery("#mask_anim_yend_reverse").attr("checked") ? true : false || !1, a.autolinebreak = jQuery("#layer_auto_line_break").attr("checked") ? true : false, a.displaymode = jQuery("#layer_displaymode").attr("checked") ? true : false, a.scaleProportional = jQuery("#layer_proportional_scale").attr("checked") ? true : false, a.attrID = jQuery("#layer_id").val(), a.attrWrapperID = jQuery("#layer_wrapper_id").val(), a.attrClasses = jQuery("#layer_classes").val(),a.attrWrapperClasses = jQuery("#layer_wrapper_classes").val(),a.attrTitle = jQuery("#layer_title").val(),a.attrTabindex = jQuery("#layer_tabindex").val(),a.attrRel = jQuery("#layer_rel").val(),a = t.setVal(a, "scaleY", jQuery("#layer_scaleY").val()),jQuery("#clayer_start_speed").val(a.speed),jQuery("#clayer_end_speed").val(a.endspeed);
            var c = "layer_color_s" == lastchangedinput, d = "checked" == jQuery("#on_all_devices_color").attr("checked") || !1, e = "layer_font_size_s" == lastchangedinput, f = "checked" == jQuery("#on_all_devices_fontsize").attr("checked") || !1, g = "layer_font_weight_s" == lastchangedinput, h = "checked" == jQuery("#on_all_devices_fontweight").attr("checked") || !1, i = "layer_line_height_s" == lastchangedinput, j = "checked" == jQuery("#on_all_devices_lineheight").attr("checked") || !1, k = "letter_spacing_s" == lastchangedinput, l = "checked" == jQuery("#on_all_devices_letterspacing").attr("checked") || !1;
            void 0 == a.static_styles && (a.static_styles = {}), a.static_styles = t.setVal(a.static_styles, "font-size", jQuery("#layer_font_size_s").val(), e, null, f), a.static_styles = t.setVal(a.static_styles, "line-height", jQuery("#layer_line_height_s").val(), i, null, j), a.static_styles = t.setVal(a.static_styles, "font-weight", jQuery("#layer_font_weight_s").val(), g, null, h), a.static_styles = t.setVal(a.static_styles, "color", jQuery("#layer_color_s").val(), c, null, d), a.static_styles = t.setVal(a.static_styles, "letter-spacing", jQuery("#letter_spacing_s").val(), k, null, l), void 0 == a.deformation && (a.deformation = {}), void 0 == a.deformation["border-radius"] && (a.deformation["border-radius"] = ["0", "0", "0", "0"]), a["layer-selectable"] = jQuery("#css_layer_selectable").val(), a.deformation["font-style"] = jQuery("#css_font-style").attr('checked') === 'checked' ? "italic" : "normal", a.deformation["font-family"] = document.getElementById("css_font-family").value;
            var m = [];
            jQuery('input[name="css_padding[]"]').each(function (a) {
                m.push(jQuery(this).val())
            }), a = t.setVal(a, "padding", m, !0);
            var n = [];
            jQuery('input[name="css_margin[]"]').each(function (a) {
                n.push(jQuery(this).val())
            }), a = t.setVal(a, "margin", n, !0), a = t.setVal(a, "text-align", jQuery("#css_text-align").val()), a.deformation["text-decoration"] = jQuery("#css_text-decoration").val(), a.deformation.overflow = jQuery("#css_overflow").val(), a.column_break_at = jQuery("#column_break_at").val(), a.deformation["vertical-align"] = jQuery("#css_vertical-align").val(), a.deformation["text-transform"] = jQuery("#css_text-transform").val(), a.deformation["background-color"] = jQuery("#css_background-color").val(), a.deformation["border-color"] = jQuery("#css_border-color-show").val(), a.deformation["border-style"] = jQuery("#css_border-style").val(), void 0 == a.deformation["border-width"] && (a.deformation["border-width"] = []), jQuery('input[name="css_border-width[]"]').each(function (b) {
                a.deformation["border-width"][b] = jQuery(this).val()
            }), void 0 == a.deformation["border-radius"] && (a.deformation["border-radius"] = []), jQuery('input[name="css_border-radius[]"]').each(function (b) {
                a.deformation["border-radius"][b] = jQuery(this).val()
            }), a.layer_blend_mode = jQuery("#layer_blend_mode").val(), a.deformation.x = 0, a.deformation.y = 0, a.deformation.z = parseInt(jQuery("#layer__z").val(), 0), a.deformation.skewx = jQuery("#layer__skewx").val(), a.deformation.skewy = jQuery("#layer__skewy").val(), a.deformation.scalex = jQuery("#layer__scalex").val(), a.deformation.scaley = jQuery("#layer__scaley").val(), a.deformation.opacity = jQuery("#layer__opacity").val(), a.deformation.xrotate = parseInt(jQuery("#layer__xrotate").val(), 0), a.deformation.yrotate = parseInt(jQuery("#layer__yrotate").val(), 0), a["2d_rotation"] = parseInt(jQuery("#layer_2d_rotation").val(), 0), a.deformation["2d_origin_x"] = jQuery("#layer_2d_origin_x").val(), a.deformation["2d_origin_y"] = jQuery("#layer_2d_origin_y").val(), a.deformation.pers = jQuery("#layer__pers").val(), a.deformation.corner_left = jQuery("#layer_cornerleft").val(), a.deformation.corner_right = jQuery("#layer_cornerright").val(), a.deformation.parallax = jQuery("#parallax_level").val(), a.deformation.blurfilter = jQuery("#blurfilter_idle").val(), a.deformation.grayscalefilter = jQuery("#grayscalefilter_idle").val(), a.deformation.brightnessfilter = jQuery("#brightnessfilter_idle").val(), (void 0 == a["deformation-hover"] || jQuery.isEmptyObject(a["deformation-hover"])) && (a["deformation-hover"] = {}), a["deformation-hover"].color = jQuery("#hover_layer_color_s").val(), a["deformation-hover"]["text-decoration"] = jQuery("#hover_css_text-decoration").val(), a["deformation-hover"]["background-color"] = jQuery("#hover_css_background-color").val(), a["deformation-hover"].blurfilter = jQuery("#blurfilter_hover").val(), a["deformation-hover"].grayscalefilter = jQuery("#grayscalefilter_hover").val(), a["deformation-hover"].brightnessfilter = jQuery("#brightnessfilter_hover").val(), a["deformation-hover"]["border-color"] = jQuery("#hover_css_border-color-show").val(), a["deformation-hover"]["border-style"] = jQuery("#hover_css_border-style").val(), void 0 == a["deformation-hover"]["border-width"] && (a["deformation-hover"]["border-width"] = []), jQuery('input[name="hover_css_border-width[]"]').each(function (b) {
                a["deformation-hover"]["border-width"][b] = jQuery(this).val()
            }), void 0 == a["deformation-hover"]["border-radius"] && (a["deformation-hover"]["border-radius"] = []), jQuery('input[name="hover_css_border-radius[]"]').each(function (b) {
                a["deformation-hover"]["border-radius"][b] = jQuery(this).val()
            }), a["deformation-hover"].skewx = jQuery("#hover_layer__skewx").val(), a["deformation-hover"].skewy = jQuery("#hover_layer__skewy").val(), a["deformation-hover"].scalex = jQuery("#hover_layer__scalex").val(), a["deformation-hover"].scaley = jQuery("#hover_layer__scaley").val(), a["deformation-hover"].opacity = jQuery("#hover_layer__opacity").val(), a["deformation-hover"].xrotate = parseInt(jQuery("#hover_layer__xrotate").val(), 0), a["deformation-hover"].yrotate = parseInt(jQuery("#hover_layer__yrotate").val(), 0), a["deformation-hover"]["2d_rotation"] = parseInt(jQuery("#hover_layer_2d_rotation").val(), 0), a["deformation-hover"].speed = jQuery("#hover_speed").val(), a["deformation-hover"].zindex = jQuery("#hover_zindex").val(), a["deformation-hover"].easing = jQuery("#hover_easing").val(), a["deformation-hover"].css_cursor = jQuery("#css_cursor").val(), void 0 == a.svg && (a.svg = {}), a.svg["svgstroke-color"] = jQuery("#css_svgstroke-color-show").val(), a.svg["svgstroke-dasharray"] = jQuery("#css_svgstroke-dasharray").val(), a.svg["svgstroke-dashoffset"] = jQuery("#css_svgstroke-dashoffset").val(), a.svg["svgstroke-width"] = jQuery("#css_svgstroke-width").val(), a.svg["svgstroke-hover-color"] = jQuery("#css_svgstroke-hover-color-show").val(), a.svg["svgstroke-hover-dasharray"] = jQuery("#css_svgstroke-hover-dasharray").val(), a.svg["svgstroke-hover-dashoffset"] = jQuery("#css_svgstroke-hover-dashoffset").val(), a.svg["svgstroke-hover-width"] = jQuery("#css_svgstroke-hover-width").val(), (void 0 == a.layer_action || jQuery.isEmptyObject(a.layer_action)) && (a.layer_action = {}), a.layer_action.tooltip_event = [], jQuery('select[name="layer_tooltip_event[]"] option:selected').each(function () {
                a.layer_action.tooltip_event.push(jQuery(this).val())
            }), a.layer_action.action = [], jQuery('select[name="layer_action[]"] option:selected').each(function () {
                a.layer_action.action.push(jQuery(this).val())
            }), a.layer_action.image_link = [], jQuery('input[name="layer_image_link[]"]').each(function () {
                a.layer_action.image_link.push(jQuery(this).val())
            }), a.layer_action.link_open_in = [], jQuery('select[name="layer_link_open_in[]"] option:selected').each(function () {
                a.layer_action.link_open_in.push(jQuery(this).val())
            }), a.layer_action.link_follow = [], jQuery('select[name="layer_link_follow[]"] option:selected').each(function () {
                a.layer_action.link_follow.push(jQuery(this).val())
            }), a.layer_action.jump_to_slide = [], jQuery('select[name="jump_to_slide[]"] option:selected').each(function () {
                a.layer_action.jump_to_slide.push(jQuery(this).val())
            }), a.layer_action.scrollunder_offset = [], jQuery('input[name="layer_scrolloffset[]"]').each(function () {
                a.layer_action.scrollunder_offset.push(jQuery(this).val())
            }), a.layer_action.action_easing = [], jQuery('select[name="layer-action-easing[]"] option:selected').each(function () {
                a.layer_action.action_easing.push(jQuery(this).val())
            }), a.layer_action.action_speed = [], jQuery('input[name="layer_action_speed[]"]').each(function () {
                a.layer_action.action_speed.push(jQuery(this).val())
            }), a.layer_action.actioncallback = [], jQuery('input[name="layer_actioncallback[]"]').each(function () {
                a.layer_action.actioncallback.push(jQuery(this).val())
            }), a.layer_action.layer_target = [], jQuery('select[name="layer_target[]"] option:selected').each(function () {
                a.layer_action.layer_target.push(jQuery(this).val())
            }), a.layer_action.link_type = [], jQuery('select[name="layer_link_type[]"] option:selected').each(function () {
                a.layer_action.link_type.push(jQuery(this).val())
            }), a.layer_action.action_delay = [], jQuery('input[name="layer_action_delay[]"]').each(function () {
                a.layer_action.action_delay.push(jQuery(this).val())
            }), a.layer_action.toggle_layer_type = [], jQuery('select[name="toggle_layer_type[]"] option:selected').each(function () {
                a.layer_action.toggle_layer_type.push(jQuery(this).val())
            }), a.layer_action.toggle_class = [], jQuery('input[name="layer_toggleclass[]"]').each(function () {
                a.layer_action.toggle_class.push(jQuery(this).val())
            }),a.animation_overwrite = jQuery("#layer-animation-overwrite").val(),a.trigger_memory = jQuery("#layer-tigger-memory").val(),jQuery.each(t.addon_callbacks, function (b, c) {
                var d = c.callback, e = c.environment, f = c.function_position;
                "updateLayerFromFields_Core" === e && "end" == f && (a = d(a))
            }),t.updateCurrentLayer(a, ["layer_action"]),t.showHideToggleContent(a),updateHtmlLayersFromObject(),updateHtmlSortboxFromObject(),initDisallowCaptionsOnClick(),u.rebuildLayerIdle(b),t.set_cover_mode()
        };
        var updateHtmlSortboxFromObject = function (a) {
            a = void 0 != a ? a : t.selectedLayerSerial;
            var b = t.getLayer(a), c = u.getHtmlSortItemFromSerial(a);
            if (!b || !c)return !1;
            var d = u.getSortboxText(b.alias);
            c.find(">.layer_sort_inner_wrapper .timer-layer-text").text(d)
        }, redrawAllLayerHtml = function () {
            jQuery.each(t.arrLayers, function (a, b) {
                redrawLayerHtml(b.serial)
            }), jQuery.each(t.arrLayersDemo, function (a, b) {
                redrawLayerHtml(b.serial, !0)
            }), jQuery(".slide_layer").each(function () {
                u.rebuildLayerIdle(jQuery(this))
            }), t.updateLayerFormFields(t.selectedLayerSerial)
        }, redrawLayerHtml = function (a, b) {
            void 0 == b && (b = !1);
            var c = t.getLayer(a, b), d = t.makeLayerHtml(a, c, b);
            if ("group" != c.type && "row" != c.type && "column" != c.type) {
                var e = jQuery(d).html();
                c.references.htmlLayer.html(e)
            }
        }, nix = function (a) {
            return void 0 === a || 0 == a.length
        }, updateSubStyleParameters = function (a, b) {
            var c = void 0 !== b && !0 === b, d = UniteCssEditorRev.getStyleSettingsByHandle(a.style), e = d.params, f = UniteCssEditorRev.getStyleSettingsByHandle(a.svg), g = d.hover;
            void 0 == g && (g = {});
            var h = !1;
            try {
                h = void 0 !== d && (!!d.hasOwnProperty("settings") && (void 0 !== d.settings && void 0 !== typeof d.settings.hover && d.settings.hover))
            } catch (a) {
            }
            if (void 0 != a.deformation && (void 0 !== e )) {
                if ((nix(a.deformation["font-style"]) || c) && (a.deformation["font-style"] = nix(e["font-style"]) ? "normal" : e["font-style"]), (nix(a.deformation["font-family"]) || c) && (a.deformation["font-family"] = nix(e["font-family"]) ? "Arial" : e["font-family"]), nix(a.padding) || c)if (nix(e.padding))if (void 0 == a.padding) {
                    a.padding = {};
                    var i = [];
                    jQuery('input[name="css_padding[]"]').each(function () {
                        i.push(0)
                    }), a = t.setVal(a, "padding", i, !0)
                } else"object" != typeof a.padding && (a = t.setVal(a, "padding", a.padding, !0)); else void 0 != a.padding && delete a.padding, "object" == typeof e.padding && null !== e.padding ? a.padding = e.padding : a = t.setVal(a, "padding", e.padding.split(" "), !0);
                if (nix(a.margin) || c)if (nix(e.margin))if (void 0 == a.margin) {
                    a.margin = {};
                    var i = [];
                    jQuery('input[name="css_margin[]"]').each(function () {
                        i.push(0)
                    }), a = t.setVal(a, "margin", i, !0)
                } else"object" != typeof a.margin && (a = t.setVal(a, "margin", a.margin, !0)); else void 0 != a.margin && delete a.margin, "object" == typeof e.margin && null !== e.margin ? a.margin = e.margin : a = t.setVal(a, "margin", e.margin.split(" "), !0);
                if (nix(a["text-align"]) || c)if (nix(e["text-align"]))if (void 0 == a["text-align"]) {
                    a["text-align"] = {};
                    var i = [];
                    jQuery('input[name="css_text-align[]"]').each(function () {
                        i.push(0)
                    }), a = t.setVal(a, "text-align", i, !0)
                } else "object" != typeof a["text-align"] && (a = t.setVal(a, "text-align", a["text-align"], !0)); else void 0 != a["text-align"] && delete a["text-align"], "object" == typeof e["text-align"] && null !== e["text-align"] ? a["text-align"] = e["text-align"] : a = t.setVal(a, "text-align", e["text-align"], !0);
                if ((nix(a.deformation["text-decoration"]) || c) && (a.deformation["text-decoration"] = nix(e["text-decoration"]) ? "none" : e["text-decoration"]), (nix(a.deformation["vertical-align"]) || c) && (a.deformation["vertical-align"] = nix(e["vertical-align"]) ? "top" : e["vertical-align"]), (nix(a.deformation.display) || c) && (a.deformation.display = nix(e.display) ? "block" : e.display), (nix(a.deformation["background-color"]) || c) && (a.deformation["background-color"] = nix(e["background-color"]) ? "transparent" : e["background-color"]), (nix(a.deformation["border-color"]) || c) && (a.deformation["border-color"] = nix(e["border-color"]) ? "transparent" : e["border-color"]), (nix(a.deformation["border-style"]) || c) && (a.deformation["border-style"] = nix(e["border-style"]) ? "none" : e["border-style"]), nix(a.deformation["border-width"]) || nix(a.deformation["border-width"][0]) && nix(a.deformation["border-width"][1]) && nix(a.deformation["border-width"][2]) && nix(a.deformation["border-width"][3]) || c) {
                    var j = nix(e["border-width"]) ? ["0px", "0px", "0px", "0px"] : "object" != typeof e["border-width"] ? e["border-width"].split(" ") : e["border-width"];
                    a.deformation["border-width"] = ["0", "0", "0", "0"], jQuery(a.deformation["border-width"]).each(function (b) {
                        a.deformation["border-width"][b] = j.length < 2 ? j[0] : j.length < 4 ? 0 == b || 2 == b ? j[0] : j[1] : j[b]
                    })
                }
                if (nix(a.deformation["border-radius"]) || nix(a.deformation["border-radius"][0]) && nix(a.deformation["border-radius"][1]) && nix(a.deformation["border-radius"][2]) && nix(a.deformation["border-radius"][3]) || c) {
                    var j = nix(e["border-radius"]) ? ["0px", "0px", "0px", "0px"] : "object" != typeof e["border-radius"] ? e["border-radius"].split(" ") : e["border-radius"];
                    a.deformation["border-radius"] = ["0", "0", "0", "0"], jQuery(a.deformation["border-radius"]).each(function (b) {
                        a.deformation["border-radius"][b] = j.length < 2 ? j[0] : j.length < 4 ? 0 == b || 2 == b ? j[0] : j[1] : j[b]
                    })
                }
                (nix(a.deformation.corner_left) || c) && (a.deformation.corner_left = nix(e.corner_left) ? "nothing" : e.corner_left), (nix(a.deformation.corner_right) || c) && (a.deformation.corner_right = nix(e.corner_right) ? "nothing" : e.corner_right), (nix(a.deformation.parallax) || c) && (a.deformation.parallax = nix(e.parallax) ? "-" : e.parallax), (nix(a.deformation.x) || c) && (a.deformation.x = nix(e.x) ? 0 : e.x), (nix(a.deformation.y) || c) && (a.deformation.y = nix(e.y) ? 0 : e.y), (nix(a.deformation.z) || c) && (a.deformation.z = nix(e.z) ? 0 : e.z), (nix(a.deformation.skewx) || c) && (a.deformation.skewx = nix(e.skewx) ? 0 : e.skewx), (nix(a.deformation.skewy) || c) && (a.deformation.skewy = nix(e.skewy) ? 0 : e.skewy), (nix(a.deformation.scalex) || c) && (a.deformation.scalex = nix(e.scalex) ? 1 : e.scalex), (nix(a.deformation.scaley) || c) && (a.deformation.scaley = nix(e.scaley) ? 1 : e.scaley), (nix(a.deformation.opacity) || c) && (a.deformation.opacity = nix(e.opacity) ? 1 : e.opacity), (nix(a.deformation.xrotate) || c) && (a.deformation.xrotate = nix(e.xrotate) ? 0 : e.xrotate), (nix(a.deformation.yrotate) || c) && (a.deformation.yrotate = nix(e.yrotate) ? 0 : e.yrotate), (nix(a["2d_rotation"]) || c) && (a["2d_rotation"] = nix(e["2d_rotation"]) ? 0 : e["2d_rotation"]), (nix(a.deformation["2d_origin_x"]) || c) && (a.deformation["2d_origin_x"] = nix(e["2d_origin_x"]) ? 50 : e["2d_origin_x"]), (nix(a.deformation["2d_origin_y"]) || c) && (a.deformation["2d_origin_y"] = nix(e["2d_origin_y"]) ? 50 : e["2d_origin_y"]), (nix(a.deformation.pers) || c) && (a.deformation.pers = nix(e.pers) ? 600 : e.pers), (nix(a.deformation.blurfilter) || c) && (a.deformation.blurfilter = nix(e.blurfilter) ? 0 : e.blurfilter), (nix(a.deformation.grayscalefilter) || c) && (a.deformation.grayscalefilter = nix(e.grayscalefilter) ? 0 : e.grayscalefilter), (nix(a.deformation.brightnessfilter) || c) && (a.deformation.brightnessfilter = nix(e.brightnessfilter) ? 100 : e.brightnessfilter)
            }
            if (void 0 != a.svg && void 0 != f && ((nix(a.svg["svgstroke-color"]) || c) && (a.svg["svgstroke-color"] = nix(f["svgstroke-color"]) ? "transparent" : f["svgstroke-color"]), (nix(a.svg["svgstroke-dasharray"]) || c) && (a.svg["svgstroke-dasharray"] = nix(f["svgstroke-dasharray"]) ? "0" : f["svgstroke-dasharray"]), (nix(a.svg["svgstroke-dashoffset"]) || c) && (a.svg["svgstroke-dashoffset"] = nix(f["svgstroke-dashoffset"]) ? "0" : f["svgstroke-dashoffset"]), (nix(a.svg["svgstroke-width"]) || c) && (a.svg["svgstroke-width"] = nix(f["svgstroke-width"]) ? "0" : f["svgstroke-width"]), (nix(a.svg["svgstroke-hover-color"]) || c) && (a.svg["svgstroke-hover-color"] = nix(f["svgstroke-hover-color"]) ? "transparent" : f["svgstroke-hover-color"]), (nix(a.svg["svgstroke-hover-dasharray"]) || c) && (a.svg["svgstroke-hover-dasharray"] = nix(f["svgstroke-hover-dasharray"]) ? "0" : f["svgstroke-hover-dasharray"]), (nix(a.svg["svgstroke-hover-dashoffset"]) || c) && (a.svg["svgstroke-hover-dashoffset"] = nix(f["svgstroke-hover-dashoffset"]) ? "0" : f["svgstroke-hover-dashoffset"]), (nix(a.svg["svgstroke-hover-width"]) || c) && (a.svg["svgstroke-hover-width"] = nix(f["svgstroke-hover-width"]) ? "0" : f["svgstroke-hover-width"])), c && ("true" === h || !0 === h ? (jQuery("#hover_allow").attr("checked", !0), jQuery("#idle-hover-swapper").show()) : (jQuery("#hover_allow").attr("checked", !1), jQuery("#idle-hover-swapper").hide())), RevSliderSettings.onoffStatus(jQuery("#hover_allow")), RevSliderSettings.onoffStatus(jQuery("#toggle_allow")), RevSliderSettings.onoffStatus(jQuery("#toggle_use_hover")), RevSliderSettings.onoffStatus(jQuery("#toggle_inverse_content")), jQuery('#css_layer_selectable').val(a["layer-selectable"]), void 0 != a.deformation) {
                jQuery("#css_font-family").val(a.deformation["font-family"]);
                var i = t.getVal(a, "padding");
                void 0 === i && (i = a.deformation.padding), void 0 === i && (i = [0, 0, 0, 0]), jQuery('input[name="css_padding[]"]').each(function (a) {
                    jQuery(this).val(i[a])
                });
                var k = t.getVal(a, "margin");
                if (void 0 === k && (k = a.deformation.margin), void 0 === k && (k = [0, 0, 0, 0]), jQuery('input[name="css_margin[]"]').each(function (a) {
                        jQuery(this).val(k[a])
                    }), "italic" == a.deformation["font-style"] ? jQuery("#css_font-style").attr("checked", !0) : jQuery("#css_font-style").attr("checked", !1), RevSliderSettings.onoffStatus(jQuery("#css_font-style")), jQuery('#css_text-align').val(t.getVal(a, "text-align")), jQuery('#css_text-decoration').val(a.deformation["text-decoration"]), jQuery('#css_overflow').val(a.deformation.overflow), jQuery('#column_break_at').val(a.column_break_at), jQuery('#css_vertical-align').val(a.deformation["vertical-align"]), jQuery('#css_text-transform').val(a.deformation["text-transform"]), jQuery("#css_background-color").val(a.deformation["background-color"]).tpColorPicker("refresh"), jQuery("#css_border-color-show").val(a.deformation["border-color"]).tpColorPicker("refresh"), jQuery('#css_border-style').val(a.deformation["border-style"]), jQuery('input[name="css_border-width[]"]').each(function (b) {
                        jQuery(this).val(a.deformation["border-width"][b])
                    }), jQuery('input[name="css_border-radius[]"]').each(function (b) {
                        jQuery(this).val(a.deformation["border-radius"][b])
                    }), jQuery('input[name="layer__x"]').val(a.deformation.x), jQuery('input[name="layer__y"]').val(a.deformation.y), jQuery("#layer__z").val(a.deformation.z), jQuery("#layer__skewx").val(a.deformation.skewx), jQuery("#layer__skewy").val(a.deformation.skewy), jQuery("#layer__scalex").val(a.deformation.scalex), jQuery("#layer__scaley").val(a.deformation.scaley), jQuery("#layer__opacity").val(a.deformation.opacity), jQuery("#layer__xrotate").val(a.deformation.xrotate), jQuery("#layer__yrotate").val(a.deformation.yrotate), jQuery("#layer_2d_rotation").val(a["2d_rotation"]), jQuery("#layer_2d_origin_x").val(a.deformation["2d_origin_x"]), jQuery("#layer_2d_origin_y").val(a.deformation["2d_origin_y"]), jQuery("#layer__pers").val(a.deformation.pers), jQuery("#blurfilter_idle").val(a.deformation.blurfilter), jQuery("#grayscalefilter_idle").val(a.deformation.grayscalefilter), jQuery("#brightnessfilter_idle").val(a.deformation.brightnessfilter), jQuery("#blurfilter_hover").val(a["deformation-hover"].blurfilter), jQuery("#grayscalefilter_hover").val(a["deformation-hover"].grayscalefilter), jQuery("#brightnessfilter_hover").val(a["deformation-hover"].brightnessfilter), jQuery('#layer_cornerleft').val(a.deformation.corner_left), jQuery('#layer_blend_mode').val(a.layer_blend_mode), jQuery('#layer_cornerright').val(a.deformation.corner_right), jQuery('#parallax_level').val(a.deformation.parallax), (nix(a["deformation-hover"].color) || c) && (a["deformation-hover"].color = nix(g.color) ? "#000000" : g.color), (nix(a["deformation-hover"]["text-decoration"]) || c) && (a["deformation-hover"]["text-decoration"] = nix(g["text-decoration"]) ? "none" : g["text-decoration"]), (nix(a["deformation-hover"]["background-color"]) || c) && (a["deformation-hover"]["background-color"] = nix(g["background-color"]) ? "transparent" : g["background-color"]), (nix(a["deformation-hover"]["border-color"]) || c) && (a["deformation-hover"]["border-color"] = nix(g["border-color"]) ? "transparent" : g["border-color"]), (nix(a["deformation-hover"]["border-style"]) || c) && (a["deformation-hover"]["border-style"] = nix(g["border-style"]) ? "none" : g["border-style"]), nix(a["deformation-hover"]["border-width"]) || nix(a["deformation-hover"]["border-width"][0]) && nix(a["deformation-hover"]["border-width"][1]) && nix(a["deformation-hover"]["border-width"][2]) && nix(a["deformation-hover"]["border-width"][3]) || c) {
                    var j = nix(g["border-width"]) ? ["0px", "0px", "0px", "0px"] : "object" != typeof g["border-width"] ? g["border-width"].split(" ") : g["border-width"];
                    a["deformation-hover"]["border-width"] = ["0", "0", "0", "0"], jQuery(a["deformation-hover"]["border-width"]).each(function (b) {
                        a["deformation-hover"]["border-width"][b] = j.length < 2 ? j[0] : j.length < 4 ? 0 == b || 2 == b ? j[0] : j[1] : j[b]
                    })
                }
                if (nix(a["deformation-hover"]["border-radius"]) || nix(a["deformation-hover"]["border-radius"][0]) && nix(a["deformation-hover"]["border-radius"][1]) && nix(a["deformation-hover"]["border-radius"][2]) && nix(a["deformation-hover"]["border-radius"][3]) || c) {
                    var j = nix(g["border-radius"]) ? ["0px", "0px", "0px", "0px"] : "object" != typeof g["border-radius"] ? g["border-radius"].split(" ") : g["border-radius"];
                    a["deformation-hover"]["border-radius"] = ["0", "0", "0", "0"], jQuery(a["deformation-hover"]["border-radius"]).each(function (b) {
                        a["deformation-hover"]["border-radius"][b] = j.length < 2 ? j[0] : j.length < 4 ? 0 == b || 2 == b ? j[0] : j[1] : j[b]
                    })
                }
                (nix(a["deformation-hover"].skewx) || c) && (a["deformation-hover"].skewx = nix(g.skewx) ? 0 : g.skewx), (nix(a["deformation-hover"].skewy) || c) && (a["deformation-hover"].skewy = nix(g.skewy) ? 0 : g.skewy), (nix(a["deformation-hover"].scalex) || c) && (a["deformation-hover"].scalex = nix(g.scalex) ? 1 : g.scalex), (nix(a["deformation-hover"].scaley) || c) && (a["deformation-hover"].scaley = nix(g.scaley) ? 1 : g.scaley), (nix(a["deformation-hover"].opacity) || c) && (a["deformation-hover"].opacity = nix(g.opacity) ? 1 : g.opacity), (nix(a["deformation-hover"].xrotate) || c) && (a["deformation-hover"].xrotate = nix(g.xrotate) ? 0 : g.xrotate), (nix(a["deformation-hover"].yrotate) || c) && (a["deformation-hover"].yrotate = nix(g.yrotate) ? 0 : g.yrotate), (nix(a["deformation-hover"]["2d_rotation"]) || c) && (a["deformation-hover"]["2d_rotation"] = nix(g["2d_rotation"]) ? 0 : g["2d_rotation"]), (nix(a["deformation-hover"].css_cursor) || c) && (a["deformation-hover"].css_cursor = nix(g.css_cursor) ? "auto" : g.css_cursor), (nix(a["deformation-hover"].blurfilter) || c) && (a["deformation-hover"].blurfilter = nix(g.blurfilter) ? 0 : g.blurfilter), (nix(a["deformation-hover"].grayscalefilter) || c) && (a["deformation-hover"].grayscalefilter = nix(g.grayscalefilter) ? 0 : g.grayscalefilter), (nix(a["deformation-hover"].brightnessfilter) || c) && (a["deformation-hover"].brightnessfilter = nix(g.brightnessfilter) ? 100 : g.brightnessfilter), (nix(a["deformation-hover"].speed) || c) && (a["deformation-hover"].speed = nix(g.speed) ? "0" : g.speed), (nix(a["deformation-hover"].easing) || c) && (a["deformation-hover"].easing = nix(g.easing) ? "Linear.easeNone" : g.easing), void 0 != a["deformation-hover"] && (jQuery("#hover_layer_color_s").val(a["deformation-hover"].color).tpColorPicker("refresh"), jQuery('#hover_css_text-decoration').val(a["deformation-hover"]["text-decoration"]), jQuery("#hover_css_background-color").val(a["deformation-hover"]["background-color"]).tpColorPicker("refresh"), jQuery("#hover_css_border-color-show").val(a["deformation-hover"]["border-color"]), jQuery('#hover_css_border-style').val(a["deformation-hover"]["border-style"]), jQuery('input[name="hover_css_border-width[]"]').each(function (b) {
                    jQuery(this).val(a["deformation-hover"]["border-width"][b])
                }), jQuery('input[name="hover_css_border-radius[]"]').each(function (b) {
                    jQuery(this).val(a["deformation-hover"]["border-radius"][b])
                }), jQuery("#hover_layer__skewx").val(a["deformation-hover"].skewx), jQuery("#hover_layer__skewy").val(a["deformation-hover"].skewy), jQuery("#hover_layer__scalex").val(a["deformation-hover"].scalex), jQuery("#hover_layer__scaley").val(a["deformation-hover"].scaley), jQuery("#hover_layer__opacity").val(a["deformation-hover"].opacity), jQuery("#hover_layer__xrotate").val(a["deformation-hover"].xrotate), jQuery("#hover_layer__yrotate").val(a["deformation-hover"].yrotate), jQuery("#hover_layer_2d_rotation").val(a["deformation-hover"]["2d_rotation"]), jQuery('#css_cursor').val(a["deformation-hover"].css_cursor), jQuery("#hover_speed").val(a["deformation-hover"].speed), jQuery("#hover_zindex").val(a["deformation-hover"].zindex), jQuery('#hover_easing').val(a["deformation-hover"].easing))
            }
            return jQuery(".wp-color-result").each(function () {
                jQuery(this).css("backgroundColor", jQuery(this).parent().find(".my-color-field").val())
            }), a
        };
        t.updateLayerFormFields = function (a) {
            var b = t.arrLayers[a];
            if (jQuery.each(t.addon_callbacks, function (a, c) {
                    var d = c.callback, e = c.environment, f = c.function_position;
                    "updateLayerFormFields" === e && "start" == f && (b = d(b))
                }), void 0 === b)return !0;
            jQuery("#internal_classes").val(b.internal_class), jQuery(".rs-internal-class-wrapper").text(b.internal_class), jQuery("#layer_caption").val(b.style), jQuery("#layer_text").val(UniteAdminRev.stripslashes(b.text)), void 0 != b.texttoggle ? jQuery("#layer_text_toggle").val(UniteAdminRev.stripslashes(b.texttoggle)) : jQuery("#layer_text_toggle").val(""), jQuery("#layer_text").data("new_content", !1), jQuery('#layer_alt_option option[value="' + b.alt_option + '"]').attr("selected", "selected"), jQuery("#layer_alt").val(b.alt), jQuery("#layer_alias_name").val(b.alias), "true" == b.hover || 1 == b.hover ? (jQuery("#hover_allow").attr("checked", !0), jQuery("#idle-hover-swapper").show()) : (jQuery("#hover_allow").attr("checked", !1), jQuery("#idle-hover-swapper").hide()), "true" == b.toggle || 1 == b.toggle ? jQuery("#toggle_allow").attr("checked", !0) : jQuery("#toggle_allow").attr("checked", !1), "true" == b.toggle_use_hover || 1 == b.toggle_use_hover ? jQuery("#toggle_use_hover").attr("checked", !0) : jQuery("#toggle_use_hover").attr("checked", !1), "true" == b.toggle_inverse_content || 1 == b.toggle_inverse_content ? jQuery("#toggle_inverse_content").attr("checked", !0) : jQuery("#toggle_inverse_content").attr("checked", !1), "true" == b["visible-notebook"] || 1 == b["visible-notebook"] ? jQuery("#visible-notebook").attr("checked", !0) : jQuery("#visible-notebook").attr("checked", !1), "true" == b["visible-desktop"] || 1 == b["visible-desktop"] ? jQuery("#visible-desktop").attr("checked", !0) : jQuery("#visible-desktop").attr("checked", !1), "true" == b["visible-tablet"] || 1 == b["visible-tablet"] ? jQuery("#visible-tablet").attr("checked", !0) : jQuery("#visible-tablet").attr("checked", !1), "true" == b["visible-mobile"] || 1 == b["visible-mobile"] ? jQuery("#visible-mobile").attr("checked", !0) : jQuery("#visible-mobile").attr("checked", !1), "true" == b["show-on-hover"] || 1 == b["show-on-hover"] ? jQuery("#layer_on_slider_hover").attr("checked", !0) : jQuery("#layer_on_slider_hover").attr("checked", !1), jQuery('#layer-lazy-loading option[value="' + b["lazy-load"] + '"]').attr("selected", "selected"), jQuery('#layer-image-size option[value="' + b["image-size"] + '"]').attr("selected", "selected"), jQuery('#layer-css-position option[value="' + b["css-position"] + '"]').attr("selected", "selected"), RevSliderSettings.onoffStatus(jQuery("#hover_allow")), RevSliderSettings.onoffStatus(jQuery("#toggle_allow")), RevSliderSettings.onoffStatus(jQuery("#toggle_use_hover")), RevSliderSettings.onoffStatus(jQuery("#toggle_inverse_content")), RevSliderSettings.onoffStatus(jQuery("#visible-desktop")), RevSliderSettings.onoffStatus(jQuery("#visible-notebook")), RevSliderSettings.onoffStatus(jQuery("#visible-tablet")), RevSliderSettings.onoffStatus(jQuery("#visible-mobile")), RevSliderSettings.onoffStatus(jQuery("#layer_on_slider_hover")), jQuery("#layer_scaleX").val(specOrVal(t.getVal(b, "scaleX"), ["auto", "#1/1#", "#1/2#", "#1/3#", "#1/4#", "#1/5#", "#1/6#", "#2/3#", "#3/4#", "#2/5#", "#3/5#", "#4/5#", "#4/6#", "#5/6#"], "px")), jQuery("#layer_scaleY").val(specOrVal(t.getVal(b, "scaleY"), ["auto", "#1/1#", "#1/2#", "#1/3#", "#1/4#", "#1/5#", "#1/6#", "#2/3#", "#3/4#", "#2/5#", "#3/5#", "#4/5#", "#4/6#", "#5/6#"], "px")), jQuery('#layer_cover_mode option[value="' + b.cover_mode + '"]').attr("selected", "selected"), jQuery("#layer_max_height").val(specOrVal(t.getVal(b, "max_height"), ["auto", "#1/1#", "#1/2#", "#1/3#", "#1/4#", "#1/5#", "#1/6#", "#2/3#", "#3/4#", "#2/5#", "#3/5#", "#4/5#", "#4/6#", "#5/6#"], "px")), jQuery("#layer_min_height").val(specOrVal(t.getVal(b, "min_height"), ["auto", "#1/1#", "#1/2#", "#1/3#", "#1/4#", "#1/5#", "#1/6#", "#2/3#", "#3/4#", "#2/5#", "#3/5#", "#4/5#", "#4/6#", "#5/6#"], "px")), jQuery("#layer_max_width").val(specOrVal(t.getVal(b, "max_width"), ["auto", "#1/1#", "#1/2#", "#1/3#", "#1/4#", "#1/5#", "#1/6#", "#2/3#", "#3/4#", "#2/5#", "#3/5#", "#4/5#", "#4/6#", "#5/6#"], "px")), jQuery("#layer_video_height").val(specOrVal(t.getVal(b, "video_height"), ["auto", "#1/1#", "#1/2#", "#1/3#", "#1/4#", "#1/5#", "#1/6#", "#2/3#", "#3/4#", "#2/5#", "#3/5#", "#4/5#", "#4/6#", "#5/6#"], "px")), jQuery("#layer_video_width").val(specOrVal(t.getVal(b, "video_width"), ["auto", "#1/1#", "#1/2#", "#1/3#", "#1/4#", "#1/5#", "#1/6#", "#2/3#", "#3/4#", "#2/5#", "#3/5#", "#4/5#", "#4/6#", "#5/6#"], "px")), jQuery("#layer_2d_rotation").val(b["2d_rotation"]), jQuery("#layer_2d_origin_x").val(b["2d_origin_x"]), jQuery("#layer_2d_origin_y").val(b["2d_origin_y"]), jQuery("#layer_static_start").val(b.static_start), changeEndStaticFunctions(), jQuery("#layer_static_end").val(b.static_end), jQuery("#layer_whitespace").val(t.getVal(b, "whitespace")), jQuery("#layer_display").val(t.getVal(b, "display")), "true" == b.scaleProportional || 1 == b.scaleProportional ? (jQuery(".rs-proportion-check").removeClass("notselected"), jQuery("#layer_proportional_scale").attr("checked", !0)) : (jQuery("#layer_proportional_scale").attr("checked", !1), jQuery(".rs-proportion-check").addClass("notselected")), "normal" === t.getVal(b, "whitespace") ? (jQuery(".rs-linebreak-check").removeClass("notselected"), jQuery("#layer_auto_line_break").attr("checked", !0)) : (jQuery(".rs-linebreak-check").addClass("notselected"), jQuery("#layer_auto_line_break").attr("checked", !1)), "block" === t.getVal(b, "display") ? (jQuery("#layer-displaymode-wrapper").removeClass("notselected"), jQuery("#layer_displaymode").attr("checked", !0)) : (jQuery("#layer-displaymode-wrapper").addClass("notselected"), jQuery("#layer_displaymode").attr("checked", !1)), RevSliderSettings.onoffStatus(jQuery(".rs-proportion-check")), RevSliderSettings.onoffStatus(jQuery(".rs-linebreak-check")), jQuery("#layer_top").val(parseInt(t.getVal(b, "top"), 0) + "px"), jQuery("#layer_left").val(parseInt(t.getVal(b, "left"), 0) + "px"), jQuery("#layer_bg_position").val(b.layer_bg_position), jQuery("#layer_bg_size").val(b.layer_bg_size), jQuery("#layer_bg_repeat").val(b.layer_bg_repeat), jQuery("#layer_loop_animation").val(b.loop_animation), jQuery("#layer_loop_easing").val(b.loop_easing), jQuery("#layer_loop_speed").val(b.loop_speed), jQuery("#layer_loop_startdeg").val(b.loop_startdeg), jQuery("#layer_loop_enddeg").val(b.loop_enddeg), jQuery("#layer_loop_xorigin").val(b.loop_xorigin), jQuery("#layer_loop_yorigin").val(b.loop_yorigin), jQuery("#layer_loop_xstart").val(b.loop_xstart), jQuery("#layer_loop_xend").val(b.loop_xend), jQuery("#layer_loop_ystart").val(b.loop_ystart), jQuery("#layer_loop_yend").val(b.loop_yend), jQuery("#layer_loop_zoomstart").val(b.loop_zoomstart), jQuery("#layer_loop_zoomend").val(b.loop_zoomend), jQuery("#layer_loop_angle").val(b.loop_angle), jQuery("#layer_loop_radius").val(b.loop_radius), void 0 != b.svg && (jQuery("#css_svgstroke-color-show").val(b.svg["svgstroke-color"]), jQuery("#css_svgstroke-dasharray").val(b.svg["svgstroke-dasharray"]), jQuery("#css_svgstroke-dashoffset").val(b.svg["svgstroke-dashoffset"]), jQuery("#css_svgstroke-width").val(b.svg["svgstroke-width"]), jQuery("#css_svgstroke-hover-color-show").val(b.svg["svgstroke-hover-color"]), jQuery("#css_svgstroke-hover-dasharray").val(b.svg["svgstroke-hover-dasharray"]), jQuery("#css_svgstroke-hover-dashoffset").val(b.svg["svgstroke-hover-dashoffset"]), jQuery("#css_svgstroke-hover-width").val(b.svg["svgstroke-hover-width"])), jQuery("#layer_html_tag").val(b.html_tag), jQuery("#parallax_layer_ddd_zlevel").val(b.parallax_layer_ddd_zlevel), "true" == b.mask_start || 1 == b.mask_start ? (jQuery("#masking-start").attr("checked", !0), jQuery(".mask-start-settings").show()) : (jQuery("#masking-start").attr("checked", !1), jQuery(".mask-start-settings").hide()), "true" == b.mask_end || 1 == b.mask_end ? (jQuery("#masking-end").attr("checked", !0), jQuery(".mask-end-settings").show()) : (jQuery("#masking-end").attr("checked", !1), jQuery(".mask-end-settings").hide()), "true" == b.frames.frame_0.use_text_c || 1 == b.frames.frame_0.use_text_c ? (jQuery("#use_text_color_start").attr("checked", !0), jQuery(".use_text_color_wrap_start").show()) : (jQuery("#use_text_color_start").attr("checked", !1), jQuery(".use_text_color_wrap_start").hide()), "true" == b.frames.frame_0.use_bg_c || 1 == b.frames.frame_0.use_bg_c ? (jQuery("#use_bg_color_start").attr("checked", !0), jQuery(".use_bg_color_wrap_start").show()) : (jQuery("#use_bg_color_start").attr("checked", !1), jQuery(".use_bg_color_wrap_start").hide()), "true" == b.frames.frame_999.use_text_c || 1 == b.frames.frame_999.use_text_c ? (jQuery("#use_text_color_end").attr("checked", !0), jQuery(".use_text_color_wrap_end").show()) : (jQuery("#use_text_color_end").attr("checked", !1), jQuery(".use_text_color_wrap_end").hide()), "true" == b.frames.frame_999.use_bg_c || 1 == b.frames.frame_999.use_bg_c ? (jQuery("#use_bg_color_end").attr("checked", !0), jQuery(".use_bg_color_wrap_end").show()) : (jQuery("#use_bg_color_end").attr("checked", !1), jQuery(".use_bg_color_wrap_end").hide()), RevSliderSettings.onoffStatus(jQuery("#masking-start")), RevSliderSettings.onoffStatus(jQuery("#masking-end")), RevSliderSettings.onoffStatus(jQuery("#use_text_color_start")), RevSliderSettings.onoffStatus(jQuery("#use_bg_color_start")), RevSliderSettings.onoffStatus(jQuery("#use_text_color_end")), RevSliderSettings.onoffStatus(jQuery("#use_bg_color_end")), jQuery("#text_color_start").val(b.frames.frame_0.text_c).tpColorPicker("refresh"), jQuery("#bg_color_start").val(b.frames.frame_0.bg_c).tpColorPicker("refresh"), jQuery("#text_color_end").val(b.frames.frame_999.text_c).tpColorPicker("refresh"), jQuery("#bg_color_end").val(b.frames.frame_999.bg_c).tpColorPicker("refresh"), jQuery("#mask_anim_xstart").val(b.mask_x_start), jQuery("#mask_anim_ystart").val(b.mask_y_start), jQuery("#mask_speed").val(b.mask_speed_start), jQuery("#mask_easing").val(b.mask_ease_start), jQuery("#mask_anim_xend").val(b.mask_x_end), jQuery("#mask_anim_yend").val(b.mask_y_end), jQuery("#layer_animation").val(b.frames.frame_0.animation), jQuery("#layer_easing").val(b.frames.frame_0.easing), jQuery("#sfx_in_effect").val(b.frames.frame_0.sfx_effect), jQuery("#sfx_out_effect").val(b.frames.frame_999.sfx_effect), jQuery("#layer_split").val(b.frames.frame_0.split),jQuery("#layer_split_direction").val(b.frames.frame_0.split_direction),jQuery("#layer_endsplit").val(b.frames.frame_999.split),jQuery("#layer_endsplit_direction").val(b.frames.frame_999.split_direction),jQuery("#layer_splitdelay").val(b.frames.frame_0.splitdelay),jQuery("#layer_endsplitdelay").val(b.frames.frame_999.splitdelay),jQuery("#layer_speed").val(b.frames.frame_0.speed),jQuery("#sfx_color_start").val(b.frames.frame_0.sfxcolor).tpColorPicker("refresh"),jQuery("#layer_align_hor").val(t.getVal(b, "align_hor")),jQuery("#layer_align_vert").val(t.getVal(b, "align_vert")),"true" == b.hiddenunder || 1 == b.hiddenunder ? jQuery("#layer_hidden").attr("checked", !0) : jQuery("#layer_hidden").attr("checked", !1),"true" == b.resizeme || 1 == b.resizeme ? jQuery("#layer_resizeme").attr("checked", !0) : jQuery("#layer_resizeme").attr("checked", !1),"true" == b["seo-optimized"] || 1 == b["seo-optimized"] ? jQuery("#layer-seo-optimized").attr("checked", !0) : jQuery("#layer-seo-optimized").attr("checked", !1),"true" != b["resize-full"] && 1 != b["resize-full"] || "row" === b.type || "column" === b.type ? (jQuery("#layer_resize-full").attr("checked", !1), jQuery("#layer_resizeme").attr("checked", !1), b.resizeme = !1) : (jQuery("#layer_resize-full").attr("checked", !0), "group" === b.type && (jQuery("#layer_resizeme").attr("checked", !1), b.resizeme = !1)),jQuery("#layer_align_base").val(b.basealign),"true" == b.responsive_offset || 1 == b.responsive_offset ? jQuery("#layer_resp_offset").attr("checked", !0) : jQuery("#layer_resp_offset").attr("checked", !1),RevSliderSettings.onoffStatus(jQuery("#layer_hidden")),RevSliderSettings.onoffStatus(jQuery("#layer_resizeme")),RevSliderSettings.onoffStatus(jQuery("#layer_resize-full")),RevSliderSettings.onoffStatus(jQuery("#layer_resp_offset")),RevSliderSettings.onoffStatus(jQuery("#layer-seo-optimized")),jQuery("#layer_image_link").val(b.link),jQuery("#layer_link_follow").val(b.link_follow),jQuery("#layer_link_open_in").val(b.link_open_in),jQuery("#layer_link_id").val(b.link_id),jQuery("#layer_link_class").val(b.link_class),jQuery("#layer_link_title").val(b.link_title),jQuery("#layer_link_rel").val(b.link_rel),jQuery("#layer_auto_line_break").attr('checked',b.autolinebreak),jQuery("#layer_displaymode").val(b.displaymode),jQuery("#layer_endanimation").val(b.frames.frame_999.animation),jQuery("#layer_endeasing").val(b.frames.frame_999.easing),jQuery("#layer_endspeed").val(b.frames.frame_999.speed),jQuery("#sfx_color_end").val(b.frames.frame_999.sfxcolor).tpColorPicker("refresh"),jQuery("#layer_anim_xstart").val(b.x_start),jQuery("#layer_anim_ystart").val(b.y_start),jQuery("#layer_anim_zstart").val(b.z_start),jQuery("#layer_anim_xend").val(b.x_end),jQuery("#layer_anim_yend").val(b.y_end),jQuery("#layer_anim_zend").val(b.z_end),jQuery("#layer_opacity_start").val(b.opacity_start),jQuery("#layer_opacity_end").val(b.opacity_end),jQuery("#layer_anim_xrotate").val(b.x_rotate_start),jQuery("#layer_anim_yrotate").val(b.y_rotate_start),jQuery("#layer_anim_zrotate").val(b.z_rotate_start),jQuery("#layer_anim_xrotate_end").val(b.x_rotate_end),jQuery("#layer_anim_yrotate_end").val(b.y_rotate_end),jQuery("#layer_anim_zrotate_end").val(b.z_rotate_end),jQuery("#layer_scale_xstart").val(b.scale_x_start),jQuery("#layer_scale_ystart").val(b.scale_y_start),jQuery("#layer_scale_xend").val(b.scale_x_end),jQuery("#layer_scale_yend").val(b.scale_y_end),jQuery("#layer_skew_xstart").val(b.skew_x_start),jQuery("#layer_skew_ystart").val(b.skew_y_start),jQuery("#layer_skew_xend").val(b.skew_x_end),jQuery("#layer_skew_yend").val(b.skew_y_end),jQuery("#layer_pers_start").val(b.pers_start),jQuery("#layer_pers_end").val(b.pers_end),jQuery("#blurfilter_start").val(b.blurfilter_start),jQuery("#blurfilter_end").val(b.blurfilter_end),jQuery("#grayscalefilter_start").val(b.grayscalefilter_start),jQuery("#grayscalefilter_end").val(b.grayscalefilter_end),jQuery("#brightnessfilter_start").val(b.brightnessfilter_start),jQuery("#brightnessfilter_end").val(b.brightnessfilter_end),void 0 !== b["layer-selectable"] ? jQuery('#css_layer_selectable').val(b["layer-selectable"]) : jQuery('#css_layer_selectable').val("default"),void 0 === b.x_start_reverse || "true" != b.x_start_reverse && 1 != b.x_start_reverse ? jQuery("#layer_anim_xstart_reverse").attr("checked", !1) : jQuery("#layer_anim_xstart_reverse").attr("checked", !0),void 0 === b.y_start_reverse || "true" != b.y_start_reverse && 1 != b.y_start_reverse ? jQuery("#layer_anim_ystart_reverse").attr("checked", !1) : jQuery("#layer_anim_ystart_reverse").attr("checked", !0),void 0 === b.x_end_reverse || "true" != b.x_end_reverse && 1 != b.x_end_reverse ? jQuery("#layer_anim_xend_reverse").attr("checked", !1) : jQuery("#layer_anim_xend_reverse").attr("checked", !0),void 0 === b.y_end_reverse || "true" != b.y_end_reverse && 1 != b.y_end_reverse ? jQuery("#layer_anim_yend_reverse").attr("checked", !1) : jQuery("#layer_anim_yend_reverse").attr("checked", !0),void 0 === b.x_rotate_start_reverse || "true" != b.x_rotate_start_reverse && 1 != b.x_rotate_start_reverse ? jQuery("#layer_anim_xrotate_reverse").attr("checked", !1) : jQuery("#layer_anim_xrotate_reverse").attr("checked", !0),void 0 === b.y_rotate_start_reverse || "true" != b.y_rotate_start_reverse && 1 != b.y_rotate_start_reverse ? jQuery("#layer_anim_yrotate_reverse").attr("checked", !1) : jQuery("#layer_anim_yrotate_reverse").attr("checked", !0),void 0 === b.z_rotate_start_reverse || "true" != b.z_rotate_start_reverse && 1 != b.z_rotate_start_reverse ? jQuery("#layer_anim_zrotate_reverse").attr("checked", !1) : jQuery("#layer_anim_zrotate_reverse").attr("checked", !0),void 0 === b.x_rotate_end_reverse || "true" != b.x_rotate_end_reverse && 1 != b.x_rotate_end_reverse ? jQuery("#layer_anim_xrotate_end_reverse").attr("checked", !1) : jQuery("#layer_anim_xrotate_end_reverse").attr("checked", !0),void 0 === b.y_rotate_end_reverse || "true" != b.y_rotate_end_reverse && 1 != b.y_rotate_end_reverse ? jQuery("#layer_anim_yrotate_end_reverse").attr("checked", !1) : jQuery("#layer_anim_yrotate_end_reverse").attr("checked", !0),void 0 === b.z_rotate_end_reverse || "true" != b.z_rotate_end_reverse && 1 != b.z_rotate_end_reverse ? jQuery("#layer_anim_zrotate_end_reverse").attr("checked", !1) : jQuery("#layer_anim_zrotate_end_reverse").attr("checked", !0),void 0 === b.scale_x_start_reverse || "true" != b.scale_x_start_reverse && 1 != b.scale_x_start_reverse ? jQuery("#layer_scale_xstart_reverse").attr("checked", !1) : jQuery("#layer_scale_xstart_reverse").attr("checked", !0),void 0 === b.scale_y_start_reverse || "true" != b.scale_y_start_reverse && 1 != b.scale_y_start_reverse ? jQuery("#layer_scale_ystart_reverse").attr("checked", !1) : jQuery("#layer_scale_ystart_reverse").attr("checked", !0),void 0 === b.scale_x_end_reverse || "true" != b.scale_x_end_reverse && 1 != b.scale_x_end_reverse ? jQuery("#layer_scale_xend_reverse").attr("checked", !1) : jQuery("#layer_scale_xend_reverse").attr("checked", !0),void 0 === b.scale_y_end_reverse || "true" != b.scale_y_end_reverse && 1 != b.scale_y_end_reverse ? jQuery("#layer_scale_yend_reverse").attr("checked", !1) : jQuery("#layer_scale_yend_reverse").attr("checked", !0),void 0 === b.skew_x_start_reverse || "true" != b.skew_x_start_reverse && 1 != b.skew_x_start_reverse ? jQuery("#layer_skew_xstart_reverse").attr("checked", !1) : jQuery("#layer_skew_xstart_reverse").attr("checked", !0),void 0 === b.skew_y_start_reverse || "true" != b.skew_y_start_reverse && 1 != b.skew_y_start_reverse ? jQuery("#layer_skew_ystart_reverse").attr("checked", !1) : jQuery("#layer_skew_ystart_reverse").attr("checked", !0),void 0 === b.skew_x_end_reverse || "true" != b.skew_x_end_reverse && 1 != b.skew_x_end_reverse ? jQuery("#layer_skew_xend_reverse").attr("checked", !1) : jQuery("#layer_skew_xend_reverse").attr("checked", !0),void 0 === b.skew_y_end_reverse || "true" != b.skew_y_end_reverse && 1 != b.skew_y_end_reverse ? jQuery("#layer_skew_yend_reverse").attr("checked", !1) : jQuery("#layer_skew_yend_reverse").attr("checked", !0),void 0 === b.mask_x_start_reverse || "true" != b.mask_x_start_reverse && 1 != b.mask_x_start_reverse ? jQuery("#mask_anim_xstart_reverse").attr("checked", !1) : jQuery("#mask_anim_xstart_reverse").attr("checked", !0),void 0 === b.mask_y_start_reverse || "true" != b.mask_y_start_reverse && 1 != b.mask_y_start_reverse ? jQuery("#mask_anim_ystart_reverse").attr("checked", !1) : jQuery("#mask_anim_ystart_reverse").attr("checked", !0),void 0 === b.mask_x_end_reverse || "true" != b.mask_x_end_reverse && 1 != b.mask_x_end_reverse ? jQuery("#mask_anim_xend_reverse").attr("checked", !1) : jQuery("#mask_anim_xend_reverse").attr("checked", !0),void 0 === b.mask_y_end_reverse || "true" != b.mask_y_end_reverse && 1 != b.mask_y_end_reverse ? jQuery("#mask_anim_yend_reverse").attr("checked", !1) : jQuery("#mask_anim_yend_reverse").attr("checked", !0),t.updateReverseList(),void 0 != b.static_styles && (jQuery("#layer_font_size_s").val(t.getVal(b.static_styles, "font-size")), jQuery("#layer_line_height_s").val(t.getVal(b.static_styles, "line-height")), jQuery("#layer_font_weight_s").val(t.getVal(b.static_styles, "font-weight")), jQuery("#layer_color_s").val(t.getVal(b.static_styles, "color")).tpColorPicker("refresh"), jQuery("#letter_spacing_s").val(t.getVal(b.static_styles, "letter-spacing"))),void 0 != b.animation_overwrite ? jQuery('#layer-animation-overwrite').val(b.animation_overwrite) : jQuery('#layer-animation-overwrite').val("wait"),void 0 != b.trigger_memory ? jQuery('#layer-tigger-memory').val(b.trigger_memory) : jQuery('#layer-tigger-memory').val("keep"),t.remove_layer_actions(),t.add_layer_actions(b),b = updateSubStyleParameters(b);
            var c = t.getVal(b, "align_hor"), d = t.getVal(b, "align_vert");
            jQuery("#rs-align-wrapper a").removeClass("selected"), jQuery("#rs-align-wrapper-ver a").removeClass("selected"), jQuery("#rs-align-wrapper a[data-hor='" + c + "']").addClass("selected"), jQuery("#rs-align-wrapper-ver a[data-ver='" + d + "']").addClass("selected"), jQuery("#layer_id").val(b.attrID), jQuery("#layer_wrapper_id").val(b.attrWrapperID), jQuery("#layer_classes").val(b.attrClasses), jQuery("#layer_wrapper_classes").val(b.attrWrapperClasses), jQuery("#layer_title").val(b.attrTitle), jQuery("#layer_tabindex").val(b.attrTabindex), jQuery("#layer_rel").val(b.attrRel), jQuery('select[name="layer_action[]"], select[name="no_layer_action[]"]').each(function () {
                showHideLinkActions(jQuery(this))
            }), showHideToolTip(), showHideLoopFunctions(), jQuery.each(t.addon_callbacks, function (a, c) {
                var d = c.callback, e = c.environment, f = c.function_position;
                "updateLayerFormFields" === e && "end" == f && (b = d(b))
            })
        };
        var unselectHtmlLayers = function () {
            jQuery.each(t.addon_callbacks, function (a, b) {
                var c = b.callback, d = b.environment, e = b.function_position;
                "unselectHtmlLayers" === d && "start" == e && c()
            });
            var a = document.getElementById("divLayers");
            resizables = a.getElementsByClassName("ui-resizable"), rotatables = a.getElementsByClassName("ui-rotatable-handle");
            for (var b = 0; b < resizables.length - 1; b++)try {
                jQuery(resizables[b]).resizable("destroy")
            } catch (a) {
            }
            for (var b = 0; b < rotatables.length - 1; b++)try {
                jQuery(rotatables[b]).rotatable("destroy")
            } catch (a) {
            }
            jQuery(containerID + " .slide_layer").removeClass("layer_selected"), jQuery(".layerrow_selected").removeClass("layerrow_selected"), jQuery(".layerchild_selected").removeClass("layerchild_selected"), document.getElementById("id-esw").className = "", jQuery.each(t.addon_callbacks, function (a, b) {
                var c = b.callback, d = b.environment, e = b.function_position;
                "unselectHtmlLayers" === d && "end" == e && c()
            })
        };
        t.hideRowLayoutComposer = function () {
            jQuery("#rs-layout-row-composer").hide();
            for (var a = document.getElementsByClassName("row_editor open_re"), b = 0; b < a.length; b++)a[b].className = "row_editor"
        };
        var unselectLayers = function () {
            t.hideRowLayoutComposer(), unselectHtmlLayers(), jQuery("#timline-manual-dialog").appendTo(jQuery("#thelayer-editor-wrapper")).hide();
            for (var a = document.getElementsByClassName("layerchild_selected"), b = 0; b < a.length - 1; b++)jQuery(a[b]).removeClass("layerchild_selected");
            jQuery(".quicksortlayer.selected").removeClass("selected"), jQuery(".layerrow_selected").removeClass("layerrow_selected"), u.unselectSortboxItems(), t.selectedLayerSerial = -1, disableFormFields(), t.showHideContentEditor(!1), jQuery(".form_layers").addClass("notselected"), u.resetIdleSelector(), jQuery("#idle-hover-swapper").hide(), u.allLayerToIdle(), jQuery("#the_current-editing-layer-title").addClass("nolayerselectednow").val("No Layers Selected").attr("disabled", "disabled"), jQuery("#layer-short-toolbar").data("serial", "")
        };
        t.toolbarInPos = function (a) {
            if (a)switch (a.type) {
                case"image":
                    jQuery("#button_change_image_source").show(), jQuery("#button_edit_layer").hide(), jQuery("#button_reset_size").show(), jQuery("#button_change_video_settings").hide(), jQuery("#layer-short-tool-placeholder-a").hide(), jQuery("#layer-short-tool-placeholder-b").hide();
                    break;
                case"text":
                case"button":
                    jQuery("#layer_text_wrapper").hasClass("currently_editing_txt") ? (jQuery("#button_edit_layer").hide(), jQuery("#button_reset_size").hide()) : (jQuery("#button_edit_layer").show(), jQuery("#button_reset_size").show()), jQuery("#button_change_image_source").hide(), jQuery("#button_change_video_settings").hide(), jQuery("#layer-short-tool-placeholder-a").hide(), jQuery("#layer-short-tool-placeholder-b").hide();
                    break;
                case"audio":
                case"video":
                    jQuery("#button_edit_layer").hide(), jQuery("#button_change_image_source").hide(), jQuery("#button_reset_size").hide(), jQuery("#button_change_video_settings").show(), jQuery("#layer-short-tool-placeholder-a").show(), jQuery("#layer-short-tool-placeholder-b").hide();
                    break;
                case"shape":
                    jQuery("#button_change_image_source").hide(), jQuery("#button_change_video_settings").hide(), jQuery("#button_edit_layer").hide(), jQuery("#button_reset_size").hide(), jQuery("#layer-short-tool-placeholder-a").show(), jQuery("#layer-short-tool-placeholder-b").show();
                    break;
                case"svg":
                    jQuery("#button_change_image_source").hide(), jQuery("#button_edit_layer").hide(), jQuery("#button_reset_size").hide(), jQuery("#button_change_video_settings").hide(), jQuery("#layer-short-tool-placeholder-a").show(), jQuery("#layer-short-tool-placeholder-b").hide(), jQuery("#button_edit_layer").show(), jQuery("#layer-short-tool-placeholder-b").hide()
            }
        }, t.remove_layer_actions = function () {
            jQuery(".layer_action_wrap").each(function () {
                jQuery(this).remove()
            })
        }, t.checkActionsOnLayers = function (a) {
            var b = t.getSimpleLayers(), c = t.getUniqueIdByLayer(a);
            for (var d in b)if (void 0 !== b[d].layer_action)for (var e in b[d].layer_action.action)switch (b[d].layer_action.action[e]) {
                case"start_in":
                case"start_out":
                case"start_video":
                case"stop_video":
                case"toggle_layer":
                case"toggle_video":
                case"mute_video":
                case"unmute_video":
                case"toggle_mute_video":
                case"toggle_global_mute_video":
                case"simulate_click":
                case"toggle_class":
                    var f = b[d].layer_action.layer_target[e];
                    c == f && (b[d].layer_action.action && b[d].layer_action.action[e] && delete b[d].layer_action.action[e], b[d].layer_action.tooltip_event && b[d].layer_action.tooltip_event[e] && delete b[d].layer_action.tooltip_event[e], b[d].layer_action.image_link && b[d].layer_action.image_link[e] && delete b[d].layer_action.image_link[e], b[d].layer_action.link_open_in && b[d].layer_action.link_open_in[e] && delete b[d].layer_action.link_open_in[e], b[d].layer_action.link_follow && b[d].layer_action.link_follow[e] && delete b[d].layer_action.link_follow[e], b[d].layer_action.jump_to_slide && b[d].layer_action.jump_to_slide[e] && delete b[d].layer_action.jump_to_slide[e], b[d].layer_action.scrolloffset && b[d].layer_action.scrolloffset[e] && delete b[d].layer_action.scrolloffset[e], b[d].layer_action.actioncallback && b[d].layer_action.actioncallback[e] && delete b[d].layer_action.actioncallback[e], b[d].layer_action.layer_target && b[d].layer_action.layer_target[e] && delete b[d].layer_action.layer_target[e], b[d].layer_action.action_delay && b[d].layer_action.action_delay[e] && delete b[d].layer_action.action_delay[e], b[d].layer_action.link_type && b[d].layer_action.link_type[e] && delete b[d].layer_action.link_type[e], b[d].layer_action.toggle_layer_type && b[d].layer_action.toggle_layer_type[e] && delete b[d].layer_action.toggle_layer_type[e], b[d].layer_action.toggle_class && b[d].layer_action.toggle_class[e] && delete b[d].layer_action.toggle_class[e])
            }
        }, t.remove_action = function (a) {
            confirm(rev_lang.remove_this_action) && (a.closest("li").remove(), t.updateLayerFromFields(), u.updateAllLayerTimeline())
        }, t.checkLayerTriggered = function (a) {
            var b = t.getSimpleLayers(), c = {in: !1, out: !1};
            for (var d in b)if (void 0 !== b[d].layer_action)for (var e in b[d].layer_action.action)switch (b[d].layer_action.action[e]) {
                case"start_in":
                case"start_out":
                case"start_video":
                case"stop_video":
                case"toggle_layer":
                case"toggle_video":
                case"simulate_click":
                case"toggle_class":
                    var f = b[d].layer_action.layer_target[e];
                    if (a.unique_id == f)switch (b[d].layer_action.action[e]) {
                        case"start_in":
                            c.in = !0;
                            break;
                        case"start_out":
                            c.out = !0;
                            break;
                        case"toggle_layer":
                            c.in = !0, c.out = !0
                    }
            }
            return c
        }, t.add_layer_actions = function (a) {
            var b = t.getSimpleLayers();
            if (void 0 === a) {
                var c = global_action_template({edit: !0});
                jQuery(".layer_action_add_template").before(c), t.updateLayerFromFields()
            } else {
                jQuery("#triggered-element-behavior").hide();
                var d = t.getCurrentLayer();
                for (var e in b)if (void 0 !== b[e].layer_action) {
                    var f = !1;
                    for (var g in b[e].layer_action.action)switch (b[e].layer_action.action[g]) {
                        case"start_in":
                        case"start_out":
                        case"start_video":
                        case"stop_video":
                        case"toggle_layer":
                        case"toggle_video":
                        case"simulate_click":
                        case"toggle_class":
                            var h = b[e].layer_action.layer_target[g];
                            if (d.unique_id == h) {
                                switch (b[e].layer_action.action[g]) {
                                    case"start_in":
                                    case"start_out":
                                    case"toggle_layer":
                                        f = !0
                                }
                                var i = "";
                                switch (b[e].layer_action.action[g]) {
                                    case"start_in":
                                        i = rev_lang.start_layer_in;
                                        break;
                                    case"start_out":
                                        i = rev_lang.start_layer_out;
                                        break;
                                    case"start_video":
                                        i = rev_lang.start_video;
                                        break;
                                    case"stop_video":
                                        i = rev_lang.stop_video;
                                        break;
                                    case"toggle_layer":
                                        i = rev_lang.toggle_layer_anim;
                                        break;
                                    case"toggle_video":
                                        i = rev_lang.toggle_video;
                                        break;
                                    case"simulate_click":
                                        i = rev_lang.simulate_click;
                                        break;
                                    case"toggle_class":
                                        i = rev_lang.toggle_class
                                }
                                jQuery(".layer_action_add_template").before('<li class="layer_is_triggered layer_action_wrap">' + rev_lang.layer_action_by + " <a href=\"javascript:UniteLayersRev.setLayerSelected('" + e + "');void(0);\">" + b[e].alias + "</a> " + rev_lang.due_to_action + " " + i + "</li>")
                            }
                    }
                    f && jQuery("#triggered-element-behavior").show()
                }
                jQuery(".rs_disabled_field").each(function () {
                    jQuery(this).attr("disabled", "disabled")
                })
            }
            if (void 0 !== a && void 0 !== a.layer_action && void 0 !== a.layer_action.action)for (var e in a.layer_action.action) {
                var j = {};
                j.edit = !0, j.tooltip_event = void 0 !== a.layer_action.tooltip_event && void 0 !== a.layer_action.tooltip_event[e] ? a.layer_action.tooltip_event[e] : "click", j.action = void 0 !== a.layer_action.action && void 0 !== a.layer_action.action[e] ? a.layer_action.action[e] : "none", j.image_link = void 0 !== a.layer_action.image_link && void 0 !== a.layer_action.image_link[e] ? a.layer_action.image_link[e] : "", j.link_open_in = void 0 !== a.layer_action.link_open_in && void 0 !== a.layer_action.link_open_in[e] ? a.layer_action.link_open_in[e] : "same", j.link_follow = void 0 !== a.layer_action.link_follow && void 0 !== a.layer_action.link_follow[e] ? a.layer_action.link_follow[e] : "same", j.jump_to_slide = void 0 !== a.layer_action.jump_to_slide && void 0 !== a.layer_action.jump_to_slide[e] ? a.layer_action.jump_to_slide[e] : "", j.scrolloffset = void 0 !== a.layer_action.scrollunder_offset && void 0 !== a.layer_action.scrollunder_offset[e] ? a.layer_action.scrollunder_offset[e] : "", j.action_easing = void 0 !== a.layer_action.action_easing && void 0 !== a.layer_action.action_easing[e] ? a.layer_action.action_easing[e] : "Linear.easeNone", j.action_speed = void 0 !== a.layer_action.action_speed && void 0 !== a.layer_action.action_speed[e] ? a.layer_action.action_speed[e] : "300", j.actioncallback = void 0 !== a.layer_action.actioncallback && void 0 !== a.layer_action.actioncallback[e] ? a.layer_action.actioncallback[e] : "", j.layer_target = void 0 !== a.layer_action.layer_target && void 0 !== a.layer_action.layer_target[e] ? a.layer_action.layer_target[e] : "", j.action_delay = void 0 !== a.layer_action.action_delay && void 0 !== a.layer_action.action_delay[e] ? a.layer_action.action_delay[e] : "", j.link_type = void 0 !== a.layer_action.link_type && void 0 !== a.layer_action.link_type[e] ? a.layer_action.link_type[e] : "jquery", j.toggle_layer_type = void 0 !== a.layer_action.toggle_layer_type && void 0 !== a.layer_action.toggle_layer_type[e] ? a.layer_action.toggle_layer_type[e] : "visible", j.toggle_class = void 0 !== a.layer_action.toggle_class && void 0 !== a.layer_action.toggle_class[e] ? a.layer_action.toggle_class[e] : "", jQuery.each(t.addon_callbacks, function (b, c) {
                    var d = c.callback, f = c.environment, g = c.function_position;
                    "add_layer_actions" === f && "data_definition" == g && (j = d(j, a, e))
                });
                var c = global_action_template(j);
                jQuery(".layer_action_add_template").before(c)
            }
            jQuery('select[name="jump_to_slide[]"], select[name="no_jump_to_slide[]"]').each(function () {
                jQuery(this).html("");
                for (var a in slideIDs)for (var b in slideIDs[a])jQuery(this).append(jQuery("<option></option>").val(b).text("Slide: " + slideIDs[a][b]));
                var c = jQuery(this).data("selectoption");
                jQuery(this).val(c)
            }), jQuery('select[name="layer_target[]"], select[name="no_layer_target[]"]').each(function (a) {
                jQuery(this).html(""), jQuery(this).append(jQuery('<option data-mytype="video-special"></option>').val("backgroundvideo").text(rev_lang.background_video)), jQuery(this).append(jQuery('<option data-mytype="video-special"></option>').val("firstvideo").text(rev_lang.active_video));
                for (var c in b)!0 !== b[c].deleted && jQuery(this).append(jQuery('<option data-mytype="' + b[c].type + '"></option>').val(b[c].unique_id).text(b[c].alias));
                if (null !== initStaticLayers && initStaticLayers.length > 0) {
                    jQuery(this).append(jQuery('<option data-mytype="all" disabled="disabled"></option>').text(rev_lang.static_layers));
                    for (var c in initStaticLayers)jQuery(this).append(jQuery('<option data-mytype="' + initStaticLayers[c].type + '"></option>').val("static-" + initStaticLayers[c].unique_id).text(initStaticLayers[c].alias))
                }
                var d = jQuery(this).data("selectoption");
                jQuery(this).val(d);
                var e = t.getAnimTimingAndTrigger(d);
                jQuery(this).closest("li").find('select[name="do-layer-animation-overwrite[]"]').val(e.animation_overwrite), jQuery(this).closest("li").find('select[name="do-layer-trigger-memory[]"]').val(e.trigger_memory)
            })
        }, t.getAnimTimingAndTrigger = function (a) {
            var b = t.getLayerByUniqueId(a);
            return {animation_overwrite: b.animation_overwrite, trigger_memory: b.trigger_memory}
        }, t.setAnimTimingAndTrigger = function (a) {
            var b = t.getLayerByUniqueId(a);
            return {animation_overwrite: b.animation_overwrite, trigger_memory: b.trigger_memory}
        }, t.setLayerResizable = function (a) {
            var b = !1, c = a.references.htmlLayer;
            (jQuery("#layer_proportional_scale").attr('checked') === 'checked' || "svg" === a.type) && (b = !0);
            try {
                c.resizable("destroy")
            } catch (a) {
            }
            c.resizable({
                aspectRatio: b, handles: "all", start: function (d, e) {
                    switch (a.type) {
                        case"img":
                        case"audio":
                        case"video":
                            var f = b ? "auto" : "100%";
                            punchgs.TweenLite.set(e.element, {
                                width: e.originalSize.width,
                                height: e.originalSize.height
                            }), punchgs.TweenLite.set(e.element.find("img"), {
                                width: "100%",
                                height: f
                            }), punchgs.TweenLite.set(e.element.find(".innerslide_layer").first(), {
                                width: "100%",
                                height: f
                            });
                            break;
                        default:
                            if ("svg" === a) c.find(".innerslide_layer.tp-caption").first().css({
                                maxHeight: "none",
                                minHeight: 0,
                                maxWidth: "none"
                            }); else {
                                var g = c.outerWidth(), h = "shape" === a.type ? "none" : c.outerHeight();
                                "shape" !== a.type && c.css({height: "auto"}), punchgs.TweenLite.set(e.element[0].getElementsByClassName("innerslide_layer")[0], {
                                    height: "auto",
                                    maxHeight: "none",
                                    minHeight: h,
                                    maxWidth: g
                                })
                            }
                    }
                }, resize: function (c, d) {
                    switch (a.type) {
                        case"audio":
                        case"video":
                            jQuery("#layer_video_width").val(Math.round(d.size.width) + "px"), jQuery("#layer_video_height").val(Math.round(d.size.height) + "px");
                            var e = b ? "auto" : "100%";
                            d.element[0].getElementsByTagName("img").length > 0 && punchgs.TweenLite.set(d.element[0].getElementsByTagName("img")[0], {
                                width: "100%",
                                height: e
                            }), punchgs.TweenLite.set(d.element[0].getElementsByClassName("innerslide_layer")[0], {
                                maxWidth: "none",
                                maxHeight: "none",
                                width: "100%",
                                height: "100%"
                            }), punchgs.TweenLite.set(d.element[0].getElementsByClassName("slide_layer_video")[0], {
                                width: "100%",
                                height: "100%"
                            });
                            break;
                        case"image":
                            jQuery("#layer_scaleX").val(Math.round(d.size.width) + "px"), jQuery("#layer_scaleY").val(Math.round(d.size.height) + "px");
                            var e = b ? "auto" : "100%";
                            punchgs.TweenLite.set(d.element, {
                                width: Math.round(d.size.width),
                                height: Math.round(d.size.height)
                            }), punchgs.TweenLite.set(d.element[0].getElementsByTagName("img")[0], {
                                width: "100%",
                                height: e
                            }), punchgs.TweenLite.set(d.element[0].getElementsByClassName("innerslide_layer")[0], {
                                maxWidth: "100%",
                                maxHeight: "100%",
                                width: "100%",
                                height: e
                            });
                            break;
                        default:
                            var f = d.element[0].getElementsByClassName("innerslide_layer")[0], g = jQuery(f), h = g.outerHeight(), j = (g.outerWidth(), Math.round(d.size.height) + 1), k = Math.round(d.size.width) + 1;
                            "shape" !== a.type && "group" !== a.type ? (j = h >= j ? "auto" : j + "px", punchgs.TweenLite.set(f, {maxWidth: k})) : punchgs.TweenLite.set(g, {
                                maxWidth: k,
                                maxHeight: j,
                                minHeight: "none",
                                overwrite: "auto",
                                height: "100%"
                            }), jQuery("#layer_max_width").val(k + "px"), jQuery("#layer_max_height").val(j)
                    }
                    "group" === a.type && jQuery.each(t.getLayersInGroup(a.unique_id).layers, function (a, b) {
                        t.updateHtmlLayerPosition(!1, b, t.getVal(b, "top"), t.getVal(b, "left"), t.getVal(b, "align_hor"), t.getVal(b, "align_vert"))
                    })
                }, stop: function (a, b) {
                    layerresized = !0, setTimeout(function () {
                        layerresized = !1
                    }, 200), t.updateLayerFromFields()
                }
            })
        }, t.resetLayerSelected = function (a) {
            var b = a.references.htmlLayer;
            jQuery("#layer_cornerleft_row").hide(), jQuery("#layer_cornerright_row").hide(), jQuery("#layer_resizeme_row").hide(), jQuery("#layer_alt_row").hide(), jQuery("#layer_max_widthheight_wrapper").hide(), jQuery("#layer_video_widthheight_wrapper").hide(), jQuery("#layer_scaleXY_wrapper").hide(), jQuery("#layer_minwidthheight_wrapper").hide();
            var c = document.getElementById("id-esw"), d = "column" === t.getObjLayerType(a.p_uid);
            switch (c.className = "slt-" + a.type + "-w", d && (c.className += " sltic"), a.type) {
                case"audio":
                case"video":
                    jQuery("#linkInsertTemplate").addClass("disabled"), jQuery("#layer_video_widthheight_wrapper").show(), t.showHideContentEditor(!1), b.width() >= jQuery("#divLayers").width() && b.height() >= jQuery("#divLayers").height() ? b.addClass("fullscreen-video-layer") : b.removeClass("fullscreen-video-layer");
                    break;
                case"image":
                    jQuery("#layer_scaleXY_wrapper").show(), jQuery("#linkInsertTemplate").addClass("disabled"), jQuery("#layer_alt_row").show(), jQuery(".rs-lazy-load-images-wrap").show(), "custom" == jQuery("#layer_alt_option").val() ? jQuery("#layer_alt").show() : jQuery("#layer_alt").hide();
                    break;
                case"svg":
                    jQuery("#layer_max_widthheight_wrapper").show();
                    break;
                case"shape":
                    jQuery("#layer-covermode-wrapper").show(), jQuery("#layer_text_wrapper").removeClass("currently_editing_txt"), jQuery("#layer_max_widthheight_wrapper").show();
                    break;
                case"group":
                case"row":
                    jQuery("#layer_max_widthheight_wrapper").show();
                    break;
                case"column":
                    jQuery("#layer_minwidthheight_wrapper").show();
                    break;
                case"text":
                case"button":
                default:
                    jQuery("#layer_text_wrapper").addClass("currently_editing_txt"), jQuery("#layer_cornerleft_row").show(), jQuery("#layer_cornerright_row").show(), jQuery("#layer_resizeme_row").show(), jQuery("#layer_max_widthheight_wrapper").show()
            }
            "row" !== a.type && "column" !== a.type && (t.setLayerResizable(a), t.makeCurrentLayerRotatable()), jQuery("#hover_allow").attr('checked') === 'checked' ? jQuery("#idle-hover-swapper").show() : jQuery("#idle-hover-swapper").hide(), RevSliderSettings.onoffStatus(jQuery("#hover_allow")), RevSliderSettings.onoffStatus(jQuery("#toggle_allow")), RevSliderSettings.onoffStatus(jQuery("#toggle_use_hover")), RevSliderSettings.onoffStatus(jQuery("#toggle_inverse_content")), jQuery("#layer_caption").catcomplete("close"), jQuery(".wp-color-result").each(function () {
                jQuery(this).css("backgroundColor", jQuery(this).parent().find(".my-color-field").val())
            }), u.rebuildLayerIdleProgress(b)
        }, t.setLayerSelected = function (a, b, c) {
            if (t.selectedLayerSerial == a && !b)return !1;
            jQuery("#timline-manual-dialog").appendTo(jQuery("#thelayer-editor-wrapper")).hide(), t.hideRowLayoutComposer(), u.resetIdleSelector(), jQuery(".quicksortlayer.selected").removeClass("selected"), jQuery("#layer_quicksort_" + a).addClass("selected"), c || jQuery(".timer-layer-text:focus").blur(), t.remove_layer_actions();
            var d = t.getLayer(a);
            "text" !== d.type && "button" !== d.type || (void 0 !== d.deformation && void 0 !== d.deformation["font-family"] ? t.check_the_font_bold(d.deformation["font-family"]) : t.check_the_font_bold("")), t.showHideContentEditor(!1), t.toolbarInPos(d), unselectHtmlLayers();
            var e = d.references.htmlLayer, f = jQuery("#layer-short-toolbar");
            if (jQuery("#the_current-editing-layer-title").val(d.alias).prop("disabled", !1).removeClass("nolayerselectednow"), f.data("serial", a), u.isLayerLocked(e)) {
                var h = f.find(".quick-layer-lock"), i = h.find("i");
                h.addClass("in-off").removeClass("in-on"), i.removeClass("eg-icon-lock-open").addClass("eg-icon-lock")
            } else {
                var h = f.find(".quick-layer-lock"), i = h.find("i");
                h.addClass("in-on").removeClass("in-off"), i.removeClass("eg-icon-lock").addClass("eg-icon-lock-open")
            }
            if (u.isLayerVisible(e)) {
                var h = f.find(".quick-layer-view"), i = h.find("i");
                h.addClass("in-on").removeClass("in-off"), i.removeClass("eg-icon-eye-off").addClass("eg-icon-eye")
            } else {
                var h = f.find(".quick-layer-view"), i = h.find("i");
                h.addClass("in-off").removeClass("in-on"), i.removeClass("eg-icon-eye").addClass("eg-icon-eye-off")
            }
            "block" === t.getVal(d, "display") ? jQuery("#layer-displaymode-wrapper").removeClass("notselected") : jQuery("#layer-displaymode-wrapper").addClass("notselected"), e.addClass("layer_selected"), e.closest(".slide_layer_type_row").addClass("layerchild_selected"), e.closest(".row-zone-container").addClass("layerrow_selected"), e.closest(".slide_layer_type_column").addClass("layerchild_selected"), u.setSortboxItemSelected(a), t.selectedLayerSerial = a,t.updateLayerFormFields(a), enableFormFields(), jQuery.each(t.addon_callbacks, function (b, c) {
                var d = c.callback, e = c.environment, f = c.function_position;
                "setLayerSelected" === e && "start" == f && d(a)
            }), jQuery("#layer_text_wrapper").removeClass("currently_editing_txt"), jQuery(".rs-lazy-load-images-wrap").hide(), t.resetLayerSelected(d), checkMaskingAvailabity(), t.checkAvailableAnimationFields(), u.rebuildLayerIdle(e), reAlignAndrePosition(), jQuery(".form_layers").removeClass("notselected"), t.set_cover_mode(), UniteCssEditorRev.updateCaptionsInput(initArrCaptionClasses), t.updateReverseList(), jQuery("#parallax_level").change(), jQuery.each(t.addon_callbacks, function (b, c) {
                var d = c.callback, e = c.environment, f = c.envifunction_position;
                "setLayerSelected" === e && "end" == f && d(a)
            })
        };
        var getRotationDegrees = function (a) {
            var b = a.css("-webkit-transform") || a.css("-moz-transform") || a.css("-ms-transform") || a.css("-o-transform") || a.css("transform");
            if ("none" !== b)var c = b.split("(")[1].split(")")[0].split(","), d = c[0], e = c[1], f = Math.round(Math.atan2(e, d) * (180 / Math.PI)); else var f = 0;
            return f < 0 ? f += 360 : f
        }, isLayerSelected = function (a) {
            return a == t.selectedLayerSerial
        }, reAlignAndrePosition = function () {
        };
        t.checkAvailableAnimationFields = function () {
            jQuery.inArray(jQuery("#layer_animation").val(), ["blockfromleft", "blockfromright", "blockfromtop", "blockfrombottom"]) >= 0 ? (jQuery(".show-on-sfx_in, .hide-on-sfx_in, #add_customanimation_in").addClass("activestatus"), jQuery(".show-on-sfx_in, #add_customanimation_in").addClass("activestatus"), jQuery("#sfx_in_effect").val(jQuery("#layer_animation").val())) : (jQuery(".show-on-sfx_in, .hide-on-sfx_in, #add_customanimation_in").removeClass("activestatus"), jQuery("#sfx_in_effect").val("")), jQuery.inArray(jQuery("#layer_endanimation").val(), ["blocktoleft", "blocktoright", "blocktotop", "blocktobottom"]) >= 0 ? (jQuery(".show-on-sfx_out, .hide-on-sfx_out, #add_customanimation_out").addClass("activestatus"), jQuery("#sfx_out_effect").val(jQuery("#layer_endanimation").val())) : (jQuery(".show-on-sfx_out, .hide-on-sfx_out, #add_customanimation_out").removeClass("activestatus"), jQuery("#sfx_out_effect").val(""))
        };
        var getNextTime = function () {
            var a = 0;
            for (key in t.arrLayers) {
                var b = t.arrLayers[key];
                layerTime = b.time ? Number(b.time) : 0, layerTime > a && (a = layerTime)
            }
            var c;
            return c = 0 == a ? g_startTime : Number(a) + Number(g_stepTime), c >= g_slideTime && (c = g_slideTime / 2), c
        };
        t.updateHtmlLayerPosition = function (a, b, c, d, e, f) {
            if (void 0 !== b && !1 !== b) {
                var g = b.references.htmlLayer.outerWidth(), h = b.references.htmlLayer.outerHeight();
                totalWidth = container.width(), totalHeight = container.height();
                var i = totalWidth, j = totalHeight;
                -1 !== b.p_uid && "group" === t.getObjLayerType(b.p_uid) && (i = t.getLayerByUniqueId(b.p_uid).references.htmlLayer.width(), j = t.getLayerByUniqueId(b.p_uid).references.htmlLayer.height()), 1 == a && "image" == b.type && (-1 != t.getVal(b, "width") && (g = t.getVal(b, "width")), -1 != t.getVal(b, "height") && (h = t.getVal(b, "height")));
                var k = {};
                switch (b.type) {
                    case"row":
                    case"column":
                        d = 0, c = 0
                }
                var l = -1 !== b.p_uid && "column" === t.getObjLayerType(b.p_uid);
                switch (k.position = l || "row" === b.type ? "relative" : "absolute", e) {
                    default:
                    case"left":
                        k.right = "auto", k.left = l ? "auto" : d + "px";
                        break;
                    case"right":
                        k.left = "auto", k.right = l ? "auto" : d + "px";
                        break;
                    case"center":
                        var m = (i - g) / 2;
                        m = Math.round(m) + d, k.left = l ? "auto" : m + "px", k.right = "auto"
                }
                switch (f) {
                    default:
                    case"top":
                        k.bottom = "auto", k.top = l ? "auto" : c + "px";
                        break;
                    case"middle":
                        var n = (j - h) / 2;
                        n = "row" === b.type ? 0 : Math.round(n) + c, k.top = l ? "auto" : n + "px", k.bottom = "auto";
                        break;
                    case"bottom":
                        k.top = "auto", k.bottom = l ? "auto" : c + "px"
                }
                punchgs.TweenLite.set(b.references.htmlLayer, k), "group" === b.type && jQuery.each(t.getLayersInGroup(b.unique_id).layers, function (a, b) {
                    t.updateHtmlLayerPosition(!1, b, t.getVal(b, "top"), t.getVal(b, "left"), t.getVal(b, "align_hor"), t.getVal(b, "align_vert"))
                })
            }
        };
        var onLayerDragStart = function () {
            t.justDropped = !1, t.showHideContentEditor(!1), jQuery("#divLayers").addClass("onelayerinmove");
            var a = t.getSerialFromID(this.id), b = jQuery(this), c = t.getLayer(a);
            -1 == jQuery.inArray(c.unique_id, t.selectedLayers) && u.checkMultipleSelectedItems(!0), b.closest(".slide_layer_type_group").addClass("dragfromgroup"), b.data("originalPosition", b.position()), b.addClass("draggable_toponall"), selectedLayerWidth = b.outerWidth(), selectedlayerHeight = b.outerHeight(), totalWidth = container.width(), totalHeight = container.height(), b.closest(".slide_layer_type_column").addClass("column_from_draggable"), b.closest(".slide_layer_type_row").css({zIndex: 190}), jQuery("#layer_text_wrapper").removeClass("currently_editing_txt"), t.setLayerSelected(a), t.groupMove.x = 0, t.groupMove.y = 0, t.groupMove.sameGroup = t.getSameLinkedElements(c)
        };
        t.getSameLinkedElements = function (a) {
            var b = [];
            for (var c in t.selectedLayers) {
                var d = t.getLayerByUniqueId(t.selectedLayers[c]);
                d.unique_id !== a.unique_id && d.p_uid === a.p_uid && (d.positionCache = d.references.htmlLayer.position(), b.push(d))
            }
            return b
        }, t.getCurLinkedElements = function () {
            var a = [];
            for (var b in t.selectedLayers) {
                var c = t.getLayerByUniqueId(t.selectedLayers[b]);
                a.push(c)
            }
            if (0 === a.length) {
                var c = t.getLayer(t.selectedLayerSerial);
                a.push(c)
            }
            return a
        };
        var onLayerDragEnd = function (a, b) {
            var c = t.getSerialFromID(this.id), d = jQuery(this);
            if (d.removeClass("draggable_toponall"), jQuery(".row-zone-container").removeClass("nowyouseeme"), jQuery(".row-zone-container").removeClass("layerrow_selected"), jQuery(".column_from_draggable").removeClass("column_from_draggable"), t.droppedContainerCheck(t.getLayer(c)), t.groupMove && t.groupMove.sameGroup && t.groupMove.sameGroup.length > 0)for (var e = 0; e < t.groupMove.sameGroup.length; e++) {
                var f = t.groupMove.sameGroup[e];
                selectedLayerWidth = f.references.htmlLayer.outerWidth(), selectedlayerHeight = f.references.htmlLayer.outerHeight(), t.onLayerDrag("ende", f.serial, f.references.htmlLayer)
            }
            selectedLayerWidth = d.outerWidth(), selectedlayerHeight = d.outerHeight(), t.onLayerDrag("ende", c, d), jQuery(".layer_selected").each(function () {
                var a = jQuery(this);
                a.data("serial") != c && void 0 !== c && a.removeClass("layer_selected")
            }), t.setLayerSelected(c), jQuery("#divLayers").removeClass("onelayerinmove"), jQuery(".dragfromgroup").removeClass("dragfromgroup")
        };
        t.updateMovedLayers = function (a) {
            jQuery.each(t.keyboardmovedlayers, function (a, b) {
                void 0 !== b.references && (selectedLayerWidth = b.references.htmlLayer.outerWidth(), selectedlayerHeight = b.references.htmlLayer.outerHeight(), t.onLayerDrag("ende", b.serial, b.references.htmlLayer, !0))
            })
        }, t.adjustSelectedLayerPositions = function (a, b) {
            t.keyboardmovedlayers = t.getCurLinkedElements(), jQuery.each(t.keyboardmovedlayers, function (c, d) {
                void 0 !== d.references && ("top" == a ? punchgs.TweenLite.set(d.references.htmlLayer, {top: Math.round(d.references.htmlLayer.position().top) + b}) : punchgs.TweenLite.set(d.references.htmlLayer, {left: Math.round(d.references.htmlLayer.position().left) + b}))
            })
        }, t.onLayerDrag = function (a, b, c, d) {
            c = c || jQuery(this);
            var e = c.position(), f = Math.round(e.top), g = Math.round(e.left), h = 0, i = 0, j = void 0 === b.originapPosition ? t.getLayer(b) : t.getLayer(t.selectedLayerSerial), k = totalWidth, l = totalHeight;
            jQuery("#layer_text_wrapper").removeClass("currently_editing_txt"), t.toolbarInPos(j);
            var m = j.p_uid;
            if ("divLayers" === c.parent().attr("id") && (j.p_uid = -1), -1 !== m && -1 !== j.p_uid || m != j.p_uid && ("row" === j.type || -1 !== j.p_uid && "column" === t.getObjLayerType(j.p_uid) ? punchgs.TweenLite.set(c, {
                    left: "auto",
                    right: "auto",
                    top: "auto",
                    bottom: "auto",
                    display: "inline-block",
                    position: "relative"
                }) : punchgs.TweenLite.set(c, {
                    display: "block",
                    position: "absolute"
                })), -1 !== j.p_uid && "group" === t.getObjLayerType(j.p_uid) && (k = t.getLayerByUniqueId(j.p_uid).references.htmlLayer.width(), l = t.getLayerByUniqueId(j.p_uid).references.htmlLayer.height()), void 0 !== a.offsetX && void 0 !== b.originalPosition && t.groupMove.sameGroup.length > 0)for (var n = {
                x: b.originalPosition.left - b.position.left,
                y: b.originalPosition.top - b.position.top
            }, o = 0; o < t.groupMove.sameGroup.length; o++) {
                var p = t.groupMove.sameGroup[o];
                punchgs.TweenLite.set(p.references.htmlLayer, {
                    left: p.positionCache.left - n.x,
                    top: p.positionCache.top - n.y
                })
            }
            switch (t.getVal(j, "align_hor")) {
                case"left":
                    i = g;
                    break;
                case"right":
                    i = k - g - selectedLayerWidth;
                    break;
                case"center":
                    i = g - Math.round((k - selectedLayerWidth) / 2), i = Math.round(i);
                    break;
                case"left":
                default:
                    i = g
            }
            switch (t.getVal(j, "align_vert")) {
                case"bottom":
                    h = l - f - selectedlayerHeight;
                    break;
                case"middle":
                    h = f - Math.round((l - selectedlayerHeight) / 2), h = Math.round(h);
                    break;
                case"top":
                default:
                    h = f
            }
            if (-1 !== j.p_uid && "column" === t.getObjLayerType(j.p_uid) && (i = 0, h = 0), jQuery("#layer_left").val(i + "px"), jQuery("#layer_top").val(h + "px"), "ende" === a) {
                var q = {};
                q = t.setVal(q, "left", i), q = t.setVal(q, "top", h), q = t.setVal(q, "width", selectedLayerWidth), q = t.setVal(q, "height", selectedlayerHeight), t.updateLayer(b, q), t.updateHtmlLayerPosition(!1, j, t.getVal(q, "top"), t.getVal(q, "left"), t.getVal(j, "align_hor"), t.getVal(j, "align_vert")), isLayerSelected(b) && t.updateLayerFormFields(b)
            }
        }, t.getObjLayerType = function (a) {
            var b = t.getLayerByUniqueId(a);
            return !!b.type && b.type
        };
        var scaleAndResetLayerInit = function () {
            jQuery("#layer_scaleX").change(function () {
                jQuery("#layer_proportional_scale").attr('checked') === 'checked' ? scaleProportional(!0) : scaleNormal()
            }), jQuery("#layer_scaleY").change(function () {
                jQuery("#layer_proportional_scale").attr('checked') === 'checked' ? scaleProportional(!1) : scaleNormal()
            }), jQuery("#layer_video_width").change(function () {
                jQuery("#layer_proportional_scale").attr('checked') === 'checked' ? scaleProportionalVideo(!0) : scaleNormalVideo()
            }), jQuery("#layer_video_height").change(function () {
                jQuery("#layer_proportional_scale").attr('checked') === 'checked' ? scaleProportionalVideo(!1) : scaleNormalVideo()
            }), jQuery("#layer_proportional_scale").click(function () {
                var a = t.getLayer(t.selectedLayerSerial);
                this.checked ? (jQuery('#layer_cover_mode').val("custom"), jQuery(".rs-proportion-check").removeClass("notselected"), "video" === a.type || "audio" === a.type ? scaleProportionalVideo(!1) : "image" === a.type && scaleProportional(!0)) : (jQuery(".rs-proportion-check").addClass("notselected"), "video" === a.type || "audio" === a.type ? scaleNormalVideo(!1) : "image" === a.type && scaleNormal()), t.setLayerResizable(a)
            }), jQuery("#layer_auto_line_break").click(function () {
                t.clickOnAutoLineBreak()
            }), jQuery("#layer_displaymode").click(function () {
                jQuery(this).attr('checked') === 'checked' ? jQuery("#layer_display").val("block") : jQuery("#layer_display").val("inline-block")
            }), jQuery("#layer_cover_mode").change(function () {
                t.set_cover_mode()
            }), jQuery("#reset-scale, #button_reset_size").click(resetCurrentElementSize)
        };
        t.clickOnAutoLineBreak = function () {
            var a = t.selectedLayerSerial, b = jQuery("#slide_layer_" + a);
            t.getLayer(t.selectedLayerSerial);
            if (jQuery("#layer_auto_line_break").attr('checked') === 'checked') {
                jQuery(".rs-linebreak-check").removeClass("notselected"), jQuery("#layer_whitespace").val('normal');
                var d = b.outerWidth() + 1, e = b.outerHeight() + 1;
                b.css({height: "auto"}), b.find(".innerslide_layer.tp-caption").first().css({
                    maxHeight: "none",
                    minHeight: e,
                    maxWidth: d
                }), jQuery("#layer_max_width").val(d + "px"), jQuery("#layer_max_height").val("auto")
            } else jQuery(".rs-linebreak-check").addClass("notselected"), jQuery("#layer_whitespace").val("nowrap"), jQuery("#layer_max_width").val("auto"), jQuery("#layer_max_height").val("auto"), b.css({width: "auto"}), b.find(".innerslide_layer.tp-caption").first().css({
                maxHeight: "none",
                minHeight: "none",
                maxWidth: "none"
            });
            t.updateLayerFromFields()
        };
        var resetCurrentElementSize = function () {
            var a = t.getLayer(t.selectedLayerSerial);
            if ("shape" == a.type)return !1;
            if ("svg" == a.type)return !1;
            if ("audio" == a.type)return !1;
            if ("text" == a.type || "button" == a.type) {
                var b = jQuery(".slide_layer.layer_selected .innerslide_layer").first().outerWidth();
                parseInt(jQuery("#layer_max_width").val(), 0) > b && (b = void 0 === b ? "auto" : b + "px", jQuery("#layer_max_width").val("auto")), jQuery("#layer_max_height").val("auto")
            } else {
                "image" == a.type && jQuery('#layer_cover_mode').val("custom");
                var c = resetImageDimensions();
                jQuery("#layer_proportional_scale").attr("checked", !0), jQuery("#layer_scaleX_text").html(jQuery("#layer_scaleX_text").data("textnormal")).css("width", "10px");
                var d = void 0 != a.image_librarysize ? a.image_librarysize.width : c.width, e = void 0 != a.image_librarysize ? a.image_librarysize.height : c.height;
                jQuery("#layer_scaleX").val(d), jQuery("#layer_scaleY").val(e), jQuery("#slide_layer_" + t.selectedLayerSerial + " img").css("width", d), jQuery("#slide_layer_" + t.selectedLayerSerial + " img").css("height", e)
            }
            t.updateLayerFromFields()
        }, scaleProportional = function (a) {
            var b = t.selectedLayerSerial;
            resetImageDimensions();
            var d, e, f, g, h, c = new Image;
            c.src = jQuery("#slide_layer_" + b + " img").attr("src"), a ? (h = jQuery("#layer_scaleX").val(), d = parseFloat(h), f = h.replace(d, ""), isNaN(d) && (d = "%" === f ? 100 : c.width), e = "%" === f ? "auto" : Math.round(100 / c.width * d / 100 * c.height, 0), g = "") : (h = jQuery("#layer_scaleY").val(), e = parseFloat(h), g = h.replace(e, ""), isNaN(e) && (e = "%" === g ? 100 : c.height), d = "%" === g ? "auto" : Math.round(100 / c.height * e / 100 * c.width, 0), f = ""), jQuery("#slide_layer_" + b + " img").css("width", d + f), jQuery("#slide_layer_" + b + " img").css("height", e + g), jQuery("#slide_layer_" + b).css("width", jQuery("#slide_layer_" + b + " img").width() + f), jQuery("#slide_layer_" + b).css("height", jQuery("#slide_layer_" + b + " img").height() + g), jQuery("#slide_layer_" + b + " img").css("width", "100%"), jQuery("#slide_layer_" + b + " img").css("height", "100%"), jQuery("#layer_scaleX").val(d + f), jQuery("#layer_scaleY").val(e + g)
        }, scaleNormal = function () {
            var a = t.selectedLayerSerial, c = (resetImageDimensions(), jQuery("#slide_layer_" + a)), d = jQuery("#layer_scaleX").val(), e = jQuery("#layer_scaleY").val();
            d = jQuery.isNumeric(d) ? d + "px" : d, e = jQuery.isNumeric(e) ? e + "px" : e, punchgs.TweenLite.set(c, {
                width: d,
                height: e
            }), punchgs.TweenLite.set(c.find(".innerslide_layer").first(), {
                width: d,
                height: e
            }), punchgs.TweenLite.set(c.find("img"), {width: d, height: e})
        }, scaleProportionalVideo = function (a) {
            var b = t.selectedLayerSerial, c = jQuery("#slide_layer_" + b).find(".slide_layer_video");
            if (a) {
                var d = parseInt(jQuery("#layer_video_width").val());
                isNaN(d) && (d = c.width());
                var e = Math.round(100 / c.width() * d / 100 * c.height(), 0)
            } else {
                var e = parseInt(jQuery("#layer_video_height").val());
                isNaN(e) && (e = c.height());
                var d = Math.round(100 / c.height() * e / 100 * c.width(), 0)
            }
            c.css("width", d + "px"), c.css("height", e + "px"), jQuery("#slide_layer_" + b).css("width", d + "px"), jQuery("#slide_layer_" + b).css("height", e + "px"), jQuery("#layer_video_width").val(d), jQuery("#layer_video_height").val(e)
        }, scaleNormalVideo = function () {
            var a = t.selectedLayerSerial, b = jQuery("#slide_layer_" + a).find(".slide_layer_video"), c = jQuery("#layer_video_width").val(), d = jQuery("#layer_video_height").val();
            c = jQuery.isNumeric(c) ? c + "px" : c, d = jQuery.isNumeric(d) ? d + "px" : d, b.css("width", c), b.css("height", d), jQuery("#slide_layer_" + a).css("width", c), jQuery("#slide_layer_" + a).css("height", d)
        }, resetImageDimensions = function () {
            var a = new Image;
            return a.src = jQuery("#slide_layer_" + t.selectedLayerSerial + " img").attr("src"), jQuery("#slide_layer_" + t.selectedLayerSerial).css("width", a.width + "px"), jQuery("#slide_layer_" + t.selectedLayerSerial).css("height", a.height + "px"), {
                width: a.width,
                height: a.height
            }
        };
        t.getLayerGeneralParamsStatus = function () {
            return layerGeneralParamsStatus
        }, t.startKenBurn = function (a) {
            var b = jQuery("#ken_burn_example"), c = b.data(), e = (b.find(".defaultimg"), c.lastsrc), g = (c.owidth, c.oheight, b.width()), h = b.height();
            if (b.data("kbtl") && b.data("kbtl").kill(), a = a || 0, void 0 !== e) {
                b.find(".tp-kbimg").remove(), 0 == b.find(".tp-kbimg").length && (b.append('<div class="tp-kbimg-wrap" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="' + e + '" style="position:absolute;" width="' + c.owidth + '" height="' + c.oheight + '"></div>'), b.data("kenburn", b.find(".tp-kbimg")));
                var j = function (a, b, c, d, e, f, g) {
                    var h = a * c, i = b * c, j = Math.abs(d - h), k = Math.abs(e - i), l = new Object;
                    return l.l = (0 - f) * j, l.r = l.l + h, l.t = (0 - g) * k, l.b = l.t + i, l.h = f, l.v = g, l
                }, k = function (a, b, c, d, e) {
                    var f = a.bgposition.split(" ") || "center center", g = "center" == f[0] ? "50%" : "left" == f[0] || "left" == f[1] ? "0%" : "right" == f[0] || "right" == f[1] ? "100%" : f[0], h = "center" == f[1] ? "50%" : "top" == f[0] || "top" == f[1] ? "0%" : "bottom" == f[0] || "bottom" == f[1] ? "100%" : f[1];
                    g = parseInt(g, 0) / 100 || 0, h = parseInt(h, 0) / 100 || 0;
                    var i = new Object;
                    return i.start = j(e.start.width, e.start.height, e.start.scale, b, c, g, h), i.end = j(e.start.width, e.start.height, e.end.scale, b, c, g, h), i
                }, l = function (a, b, c) {
                    var d = c.scalestart / 100, e = c.scaleend / 100, f = void 0 != c.offsetstart ? c.offsetstart.split(" ") || [0, 0] : [0, 0], g = void 0 != c.offsetend ? c.offsetend.split(" ") || [0, 0] : [0, 0];
                    c.bgposition = "center center" == c.bgposition ? "50% 50%" : c.bgposition;
                    var h = new Object, i = a * d, l = (c.owidth, c.oheight, a * e);
                    c.owidth, c.oheight;
                    if (h.start = new Object, h.starto = new Object, h.end = new Object, h.endo = new Object, h.start.width = a, h.start.height = h.start.width / c.owidth * c.oheight, h.start.height < b) {
                        var n = b / h.start.height;
                        h.start.height = b, h.start.width = h.start.width * n
                    }
                    h.start.transformOrigin = c.bgposition, h.start.scale = d, h.end.scale = e, h.start.rotation = c.rotatestart + "deg", h.end.rotation = c.rotateend + "deg";
                    var o = k(c, a, b, f, h);
                    f[0] = parseFloat(f[0]) + o.start.l, g[0] = parseFloat(g[0]) + o.end.l, f[1] = parseFloat(f[1]) + o.start.t, g[1] = parseFloat(g[1]) + o.end.t;
                    var p = o.start.r - o.start.l, q = o.start.b - o.start.t, r = o.end.r - o.end.l, s = o.end.b - o.end.t;
                    return f[0] = f[0] > 0 ? 0 : p + f[0] < a ? a - p : f[0], g[0] = g[0] > 0 ? 0 : r + g[0] < a ? a - r : g[0], h.starto.x = f[0] + "px", h.endo.x = g[0] + "px", f[1] = f[1] > 0 ? 0 : q + f[1] < b ? b - q : f[1], g[1] = g[1] > 0 ? 0 : s + g[1] < b ? b - s : g[1], h.starto.y = f[1] + "px", h.endo.y = g[1] + "px", h.end.ease = h.endo.ease = c.ease, h.end.force3D = h.endo.force3D = !0, h
                };
                void 0 != b.data("kbtl") && (b.data("kbtl").kill(), b.removeData("kbtl"));
                var m = b.data("kenburn"), n = m.parent(), o = l(g, h, c), p = new punchgs.TimelineLite;
                p.pause(), o.start.transformOrigin = "0% 0%", o.starto.transformOrigin = "0% 0%", p.add(punchgs.TweenLite.fromTo(m, c.duration / 1e3, o.start, o.end), 0), p.add(punchgs.TweenLite.fromTo(n, c.duration / 1e3, o.starto, o.endo), 0), p.progress(a), jQuery("#kenburn-playpause-wrapper").hasClass("playing") ? p.play(0) : p.pause(), p.eventCallback("onComplete", function () {
                    p.play(0)
                }), b.data("kbtl", p)
            }
        }, t.updateKenBurnExampleValues = function () {
            var a = new Image, b = jQuery("#ken_burn_slot_example").data("src"), c = jQuery("#ken_burn_example").data("lastsrc");
            jQuery("#ken_burn_slot_example").data("inload") || (b !== c ? (jQuery("#ken_burn_slot_example").data("inload", !0), a.onload = function () {
                jQuery("#ken_burn_example").data({
                    lastsrc: this.src,
                    owidth: this.width,
                    oheight: this.height,
                    bgposition: jQuery("#slide_bg_position").val(),
                    duration: parseInt(jQuery("#kb_duration").val(), 0),
                    rotatestart: parseInt(jQuery("#kb_start_rotate").val(), 0),
                    rotateend: parseInt(jQuery("#kb_end_rotate").val(), 0),
                    scalestart: parseInt(jQuery("#kb_start_fit").val(), 0),
                    scaleend: parseInt(jQuery("#kb_end_fit").val(), 0),
                    offsetstart: jQuery("#kb_start_offset_x").val() + " " + jQuery("#kb_start_offset_y").val(),
                    offsetend: jQuery("#kb_end_offset_x").val() + " " + jQuery("#kb_end_offset_y").val(),
                    blurstart: jQuery("#kb_blur_start").val(),
                    blurend: jQuery("#kb_blur_end").val(),
                    ease: jQuery("#kb_easing").val()
                }), jQuery("#ken_burn_slot_example").data("inload", !1), t.startKenBurn()
            }, a.onerror = function () {
                console.log("Ken Burn Demo Image could not be Loaded")
            }, a.onabort = function () {
                console.log("Ken Burn Demo Image could not be Loaded")
            }, a.src = b) : (jQuery("#ken_burn_example").data({
                lastsrc: jQuery("#ken_burn_slot_example").data("src"),
                owidth: jQuery("#ken_burn_example").data("owidth"),
                oheight: jQuery("#ken_burn_example").data("oheight"),
                bgposition: jQuery("#slide_bg_position").val(),
                duration: parseInt(jQuery("#kb_duration").val(), 0),
                rotatestart: parseInt(jQuery("#kb_start_rotate").val(), 0),
                rotateend: parseInt(jQuery("#kb_end_rotate").val(), 0),
                scalestart: parseInt(jQuery("#kb_start_fit").val(), 0),
                scaleend: parseInt(jQuery("#kb_end_fit").val(), 0),
                offsetstart: jQuery("#kb_start_offset_x").val() + " " + jQuery("#kb_start_offset_y").val(),
                offsetend: jQuery("#kb_end_offset_x").val() + " " + jQuery("#kb_end_offset_y").val(),
                blurstart: jQuery("#kb_blur_start").val(),
                blurend: jQuery("#kb_blur_end").val(),
                ease: jQuery("#kb_easing").val()
            }), t.startKenBurn()))
        };
        var buildKenBurnExample = function () {
            var a = jQuery("#ken_burn_example"), c = (jQuery("#ken_burn_slot_example"), jQuery("#divLayers")), d = a.width() / c.width() * c.height();
            a.css({height: d + "px"}), t.updateKenBurnExampleValues()
        }, initBackgroundFunctions = function () {
            jQuery("body").on("change", 'select[name="layer_target[]"]', function () {
                jQuery(this).data("selectoption", jQuery(this).find("option:selected").val());
                var a = t.getAnimTimingAndTrigger(jQuery(this).find("option:selected").val());
                jQuery(this).closest("li").find('select[name="do-layer-animation-overwrite[]"]').val(a.animation_overwrite), jQuery(this).closest("li").find('select[name="do-layer-trigger-memory[]"]').val(a.trigger_memory)
            }), jQuery("body").on("change", 'select[name="jump_to_slide[]"]', function () {
                jQuery(this).data("selectoption", jQuery(this).find("option:selected").val())
            }), jQuery("body").on("change", 'select[name="do-layer-animation-overwrite[]"]', function () {
                var a = jQuery(this).closest("li").find('select[name="layer_target[]"]').val(), b = jQuery(this).val(), c = t.getLayerIdByUniqueId(a), d = {};
                d.animation_overwrite = b, update_layer_changes = !1, t.updateLayer(c, d), update_layer_changes = !0, t.getLayer(t.selectedLayerSerial).unique_id == a && jQuery('#layer-animation-overwrite').val(b), jQuery('select[name="layer_target[]"] option:selected').each(function () {
                    jQuery(this).val() == a && jQuery(this).closest("li").find('select[name="do-layer-animation-overwrite[]"]').val(b)
                })
            }), jQuery("body").on("change", 'select[name="do-layer-trigger-memory[]"]', function () {
                var a = jQuery(this).closest("li").find('select[name="layer_target[]"]').val(), b = jQuery(this).val(), c = t.getLayerIdByUniqueId(a), d = {};
                d.trigger_memory = b, update_layer_changes = !1, t.updateLayer(c, d), update_layer_changes = !0, t.getLayer(t.selectedLayerSerial).unique_id == a && jQuery('#layer-tigger-memory').val(b), jQuery('select[name="layer_target[]"] option:selected').each(function () {
                    jQuery(this).val() == a && jQuery(this).closest("li").find('select[name="do-layer-trigger-memory[]"]').val(b)
                })
            }), jQuery("#slide_bg_fit").change(function () {
                "percentage" == jQuery(this).val() ? (jQuery('input[name="bg_fit_x"]').show(), jQuery('input[name="bg_fit_y"]').show(), jQuery("#divbgholder").css("background-size", jQuery('input[name="bg_fit_x"]').val() + "% " + jQuery('input[name="bg_fit_y"]').val() + "%")) : (jQuery('input[name="bg_fit_x"]').hide(), jQuery('input[name="bg_fit_y"]').hide(), jQuery("#divbgholder").css("background-size", jQuery(this).val())), "contain" == jQuery(this).val() ? jQuery("#divLayers-wrapper").css("maxWidth", jQuery("#divbgholder").css("minWidth")) : jQuery("#divLayers-wrapper").css("maxWidth", "100%")
            }), jQuery("#slide_bg_fit").change(), jQuery('input[name="bg_fit_x"]').change(function () {
                jQuery("#divbgholder").css("background-size", jQuery('input[name="bg_fit_x"]').val() + "% " + jQuery('input[name="bg_fit_y"]').val() + "%")
            }), jQuery('input[name="bg_fit_y"]').change(function () {
                jQuery("#divbgholder").css("background-size", jQuery('input[name="bg_fit_x"]').val() + "% " + jQuery('input[name="bg_fit_y"]').val() + "%")
            }), jQuery("#slide_bg_position").change(function () {
                "percentage" == jQuery(this).val() ? (jQuery('input[name="bg_position_x"]').show(), jQuery('input[name="bg_position_y"]').show(), jQuery("#divbgholder").css("background-position", jQuery('input[name="bg_fit_x"]').val() + "% " + jQuery('input[name="bg_fit_y"]').val() + "%")) : (jQuery('input[name="bg_position_x"]').hide(), jQuery('input[name="bg_position_y"]').hide(), jQuery("#divbgholder").css("background-position", jQuery(this).val()))
            }), jQuery('input[name="bg_position_x"]').change(function () {
                jQuery("#divbgholder").css("background-position", jQuery('input[name="bg_position_x"]').val() + "% " + jQuery('input[name="bg_position_y"]').val() + "%")
            }), jQuery('input[name="bg_position_y"]').change(function () {
                jQuery("#divbgholder").css("background-position", jQuery('input[name="bg_position_x"]').val() + "% " + jQuery('input[name="bg_position_y"]').val() + "%")
            }), jQuery("#slide_bg_repeat").change(function () {
                jQuery("#divbgholder").find('.defaultimg').css("background-repeat", jQuery(this).val())
            }), jQuery('input[name="kenburn_effect"]').change(function () {
                jQuery(this).attr('checked') === 'checked' ? (jQuery("#kenburn_wrapper").show(), jQuery("#divbgholder").css("background-repeat", ""), jQuery("#divbgholder").css("background-position", ""), jQuery("#divbgholder").css("background-size", ""), jQuery('input[name="kb_start_fit"]').change(), jQuery("#divLayers-wrapper").css("maxWidth", "none"), jQuery("#slide_bg_position").change(), jQuery("#bg-setting-bgfit-wrap").css({display: "none"}), jQuery("#bg-setting-bgrep-wrap").css({display: "none"}), jQuery("#bg-setting-bgpos-wrap").prependTo("#kenburn_wrapper"), buildKenBurnExample()) : (jQuery("#kenburn_wrapper").hide(), jQuery("#slide_bg_repeat").change(), jQuery("#slide_bg_position").change(), jQuery("#slide_bg_fit").change(), jQuery("#bg-setting-bgfit-wrap").show(), jQuery("#bg-setting-bgrep-wrap").show(), jQuery("#bg-setting-bgpos-wrap").appendTo("#bg-setting-bgpos-def-wrap"), "contain" == jQuery("#slide_bg_fit").val() ? jQuery("#divLayers-wrapper").css("maxWidth", jQuery("#divbgholder").css("minWidth")) : jQuery("#divLayers-wrapper").css("maxWidth", "100%")), t.changeSlotBGs()
            }), jQuery('input[name="kenburn_effect"]:checked').change(), jQuery("body").on("mouseenter", ".inst-filter-griditem", function () {
                punchgs.TweenLite.to(jQuery(this).find(".inst-filter-griditem-img"), .5, {autoAlpha: 0})
            }), jQuery("body").on("mouseleave", ".inst-filter-griditem", function () {
                punchgs.TweenLite.to(jQuery(this).find(".inst-filter-griditem-img"), .5, {autoAlpha: 1})
            }), jQuery("body").on("click", ".inst-filter-griditem", function () {
                var a = jQuery(this);
                jQuery("#media-filter-type option:selected").prop("selected", !1), jQuery('#media-filter-type option[value="' + a.data("type") + '"]').attr("selected", "selected"), jQuery(".inst-filter-griditem.selected").removeClass("selected"), a.addClass("selected"), jQuery(".oldslotholder").attr("class", "oldslotholder " + a.data("type")), jQuery(".slotholder").attr("class", "slotholder " + a.data("type"))
            });
            var a = jQuery("#media-filter-type").val();
            void 0 !== a && (jQuery(".inst-filter-griditem.selected").removeClass("selected"), jQuery(".inst-filter-griditem.filter_" + a).addClass("selected"), jQuery(".oldslotholder").attr("class", "oldslotholder " + a), jQuery(".slotholder").attr("class", "slotholder " + a)), jQuery("#slide_bg_end_position").change(function () {
                "percentage" == jQuery(this).val() ? (jQuery('input[name="bg_end_position_x"]').show(), jQuery('input[name="bg_end_position_y"]').show()) : (jQuery('input[name="bg_end_position_x"]').hide(), jQuery('input[name="bg_end_position_y"]').hide())
            }), jQuery('input[name="kb_start_fit"]').change(function () {
                var a = parseInt(jQuery(this).val()), c = new Image;
                c.onload = function () {
                    b(a, c.width, c.height, jQuery("#divbgholder"))
                };
                var d = "";
                jQuery("#radio_back_image").attr('checked') === 'checked' ? d = jQuery("#image_url").val() : jQuery("#radio_back_external").attr('checked') === 'checked' && (d = jQuery("#slide_bg_external").val()), "" != d && (c.src = d), t.changeSlotBGs()
            });
            var b = function (a, b, c, d) {
                var e = b, f = c;
                d.width(), d.height();
                a += "%", jQuery("#divbgholder").css("background-size", a + " auto"), t.changeSlotBGs()
            };
            jQuery("#layer_resize-full").change(function () {
                jQuery(this).attr('checked') === 'checked' || (jQuery("#layer_resizeme").attr("checked", !1), RevSliderSettings.onoffStatus(jQuery("#layer_resizeme")))
            }), jQuery("#layer_resizeme").change(function () {
                jQuery(this).attr('checked') === 'checked' && (jQuery("#layer_resize-full").attr("checked", !0), RevSliderSettings.onoffStatus(jQuery("#layer_resize-full")))
            }), jQuery(window).resize(function () {
                if ("on" == jQuery('input[name="kenburn_effect"]:checked').val()) {
                    var a = parseInt(jQuery('input[name="kb_start_fit"]').val()), c = new Image;
                    c.onload = function () {
                        b(a, c.width, c.height, jQuery("#divbgholder"))
                    };
                    var d = "";
                    jQuery("#radio_back_image").attr('checked') === 'checked' ? d = jQuery("#image_url").val() : jQuery("#radio_back_external").attr('checked') === 'checked' && (d = jQuery("#slide_bg_external").val()), "" != d && (c.src = d)
                }
                t.setObjectLibraryHeight()
            })
        }, initLoopFunctions = function () {
            jQuery('select[name="layer_loop_animation"]').change(function () {
                showHideLoopFunctions()
            }), jQuery("#layer_static_start").change(function () {
                changeEndStaticFunctions()
            })
        }, showHideLoopFunctions = function () {
            jQuery('select[name="layer_loop_animation"]').each(function () {
                switch (jQuery("#layer_easing_wrapper").hide(), jQuery("#layer_speed_wrapper").hide(), jQuery("#layer_parameters_wrapper").hide(), jQuery("#layer_degree_wrapper").hide(), jQuery("#layer_origin_wrapper").hide(), jQuery("#layer_x_wrapper").hide(), jQuery("#layer_y_wrapper").hide(), jQuery("#layer_zoom_wrapper").hide(), jQuery("#layer_angle_wrapper").hide(), jQuery("#layer_radius_wrapper").hide(), jQuery(this).val()) {
                    case"none":
                        break;
                    case"rs-pendulum":
                    case"rs-rotate":
                        jQuery("#layer_easing_wrapper").show(), jQuery("#layer_speed_wrapper").show(), jQuery("#layer_parameters_wrapper").show(), jQuery("#layer_degree_wrapper").show(), jQuery("#layer_origin_wrapper").show();
                        break;
                    case"rs-slideloop":
                        jQuery("#layer_easing_wrapper").show(), jQuery("#layer_speed_wrapper").show(), jQuery("#layer_parameters_wrapper").show(), jQuery("#layer_x_wrapper").show(), jQuery("#layer_y_wrapper").show();
                        break;
                    case"rs-pulse":
                        jQuery("#layer_easing_wrapper").show(), jQuery("#layer_speed_wrapper").show(), jQuery("#layer_parameters_wrapper").show(), jQuery("#layer_zoom_wrapper").show();
                        break;
                    case"rs-wave":
                        jQuery("#layer_speed_wrapper").show(), jQuery("#layer_parameters_wrapper").show(), jQuery("#layer_angle_wrapper").show(), jQuery("#layer_radius_wrapper").show(), jQuery("#layer_origin_wrapper").show()
                }
            })
        }, changeEndStaticFunctions = function () {
            jQuery("#layer_static_start").each(function () {
                var a = parseInt(jQuery(this).val()), b = jQuery("#layer_static_end").val(), c = parseInt(jQuery("#layer_static_start option:last-child").val());
                jQuery("#layer_static_end").empty();
                for (var d = a + 1; d <= c; d++)jQuery("#layer_static_end").append('<option value="' + d + '">' + d + "</option>");
                jQuery("#layer_static_end").append('<option value="last">' + rev_lang.last_slide + "</option>"), jQuery("#layer_static_end").val(b)
            })
        };
        t.get_current_selected_layer = function () {
            return t.selectedLayerSerial
        }, t.addPreventLeave = function () {
            window.onbeforeunload = function (a) {
                if (save_needed) {
                    var b = rev_lang.leave_not_saved, a = a || window.event;
                    return a && (a.returnValue = b), b
                }
            }
        }
    };