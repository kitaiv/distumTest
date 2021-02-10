/**
 * @license
 * Video.js 7.10.2 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
!(function (e, t) {
   "object" == typeof exports && "undefined" != typeof module
       ? (module.exports = t(require("global/window"), require("global/document")))
       : "function" == typeof define && define.amd
       ? define(["global/window", "global/document"], t)
       : ((e = e || self).videojs = t(e.window, e.document));
})(this, function (T, d) {
   "use strict";
   (T = T && Object.prototype.hasOwnProperty.call(T, "default") ? T.default : T), (d = d && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d);
   var h = "7.10.2",
       l = [],
       e = function (o, u) {
           return function (e, t, i) {
               var n = u.levels[t],
                   r = new RegExp("^(" + n + ")$");
               if (("log" !== e && i.unshift(e.toUpperCase() + ":"), i.unshift(o + ":"), l)) {
                   l.push([].concat(i));
                   var a = l.length - 1e3;
                   l.splice(0, 0 < a ? a : 0);
               }
               if (T.console) {
                   var s = T.console[e];
                   s || "debug" !== e || (s = T.console.info || T.console.log), s && n && r.test(e) && s[Array.isArray(i) ? "apply" : "call"](T.console, i);
               }
           };
       };
   var p = (function t(i) {
           function n() {
               for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
               r("log", a, t);
           }
           var r,
               a = "info";
           return (
               (r = e(i, n)),
               (n.createLogger = function (e) {
                   return t(i + ": " + e);
               }),
               (n.levels = { all: "debug|log|warn|error", off: "", debug: "debug|log|warn|error", info: "log|warn|error", warn: "warn|error", error: "error", DEFAULT: a }),
               (n.level = function (e) {
                   if ("string" == typeof e) {
                       if (!n.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level');
                       a = e;
                   }
                   return a;
               }),
               ((n.history = function () {
                   return l ? [].concat(l) : [];
               }).filter = function (t) {
                   return (l || []).filter(function (e) {
                       return new RegExp(".*" + t + ".*").test(e[0]);
                   });
               }),
               (n.history.clear = function () {
                   l && (l.length = 0);
               }),
               (n.history.disable = function () {
                   null !== l && ((l.length = 0), (l = null));
               }),
               (n.history.enable = function () {
                   null === l && (l = []);
               }),
               (n.error = function () {
                   for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                   return r("error", a, t);
               }),
               (n.warn = function () {
                   for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                   return r("warn", a, t);
               }),
               (n.debug = function () {
                   for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                   return r("debug", a, t);
               }),
               n
           );
       })("VIDEOJS"),
       f = p.createLogger;
   function t(e) {
       return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
   }
   function i(e, t) {
       return e((t = { exports: {} }), t.exports), t.exports;
   }
   var m = i(function (e) {
           function t() {
               return (
                   (e.exports = t =
                       Object.assign ||
                       function (e) {
                           for (var t = 1; t < arguments.length; t++) {
                               var i = arguments[t];
                               for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                           }
                           return e;
                       }),
                   t.apply(this, arguments)
               );
           }
           e.exports = t;
       }),
       n = Object.prototype.toString,
       a = function (e) {
           return s(e) ? Object.keys(e) : [];
       };
   function r(t, i) {
       a(t).forEach(function (e) {
           return i(t[e], e);
       });
   }
   function g(i) {
       for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
       return Object.assign
           ? m.apply(void 0, [i].concat(t))
           : (t.forEach(function (e) {
                 e &&
                     r(e, function (e, t) {
                         i[t] = e;
                     });
             }),
             i);
   }
   function s(e) {
       return !!e && "object" == typeof e;
   }
   function o(e) {
       return s(e) && "[object Object]" === n.call(e) && e.constructor === Object;
   }
   function u(e, t) {
       if (!e || !t) return "";
       if ("function" != typeof T.getComputedStyle) return "";
       var i = T.getComputedStyle(e);
       return i ? i.getPropertyValue(t) || i[t] : "";
   }
   function c(e) {
       return "string" == typeof e && Boolean(e.trim());
   }
   function v(e) {
       if (0 <= e.indexOf(" ")) throw new Error("class has illegal whitespace characters");
   }
   function y() {
       return d === T.document;
   }
   function _(e) {
       return s(e) && 1 === e.nodeType;
   }
   function b() {
       try {
           return T.parent !== T.self;
       } catch (e) {
           return !0;
       }
   }
   function S(n) {
       return function (e, t) {
           if (!c(e)) return d[n](null);
           c(t) && (t = d.querySelector(t));
           var i = _(t) ? t : d;
           return i[n] && i[n](e);
       };
   }
   function k(e, i, t, n) {
       void 0 === e && (e = "div"), void 0 === i && (i = {}), void 0 === t && (t = {});
       var r = d.createElement(e);
       return (
           Object.getOwnPropertyNames(i).forEach(function (e) {
               var t = i[e];
               -1 !== e.indexOf("aria-") || "role" === e || "type" === e
                   ? (p.warn("Setting attributes in the second argument of createEl()\nhas been deprecated. Use the third argument instead.\ncreateEl(type, properties, attributes). Attempting to set " + e + " to " + t + "."),
                     r.setAttribute(e, t))
                   : "textContent" === e
                   ? C(r, t)
                   : r[e] !== t && (r[e] = t);
           }),
           Object.getOwnPropertyNames(t).forEach(function (e) {
               r.setAttribute(e, t[e]);
           }),
           n && H(r, n),
           r
       );
   }
   function C(e, t) {
       return "undefined" == typeof e.textContent ? (e.innerText = t) : (e.textContent = t), e;
   }
   function E(e, t) {
       t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e);
   }
   function w(e, t) {
       return (
           v(t),
           e.classList
               ? e.classList.contains(t)
               : (function (e) {
                     return new RegExp("(^|\\s)" + e + "($|\\s)");
                 })(t).test(e.className)
       );
   }
   function I(e, t) {
       return e.classList ? e.classList.add(t) : w(e, t) || (e.className = (e.className + " " + t).trim()), e;
   }
   function A(e, t) {
       return (
           e.classList
               ? e.classList.remove(t)
               : (v(t),
                 (e.className = e.className
                     .split(/\s+/)
                     .filter(function (e) {
                         return e !== t;
                     })
                     .join(" "))),
           e
       );
   }
   function x(e, t, i) {
       var n = w(e, t);
       if (("function" == typeof i && (i = i(e, t)), "boolean" != typeof i && (i = !n), i !== n)) return i ? I(e, t) : A(e, t), e;
   }
   function P(i, n) {
       Object.getOwnPropertyNames(n).forEach(function (e) {
           var t = n[e];
           null === t || "undefined" == typeof t || !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t);
       });
   }
   function L(e) {
       var t = {},
           i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
       if (e && e.attributes && 0 < e.attributes.length)
           for (var n = e.attributes, r = n.length - 1; 0 <= r; r--) {
               var a = n[r].name,
                   s = n[r].value;
               ("boolean" != typeof e[a] && -1 === i.indexOf("," + a + ",")) || (s = null !== s), (t[a] = s);
           }
       return t;
   }
   function O(e, t) {
       return e.getAttribute(t);
   }
   function D(e, t, i) {
       e.setAttribute(t, i);
   }
   function M(e, t) {
       e.removeAttribute(t);
   }
   function R() {
       d.body.focus(),
           (d.onselectstart = function () {
               return !1;
           });
   }
   function N() {
       d.onselectstart = function () {
           return !0;
       };
   }
   function U(e) {
       if (e && e.getBoundingClientRect && e.parentNode) {
           var t = e.getBoundingClientRect(),
               i = {};
           return (
               ["bottom", "height", "left", "right", "top", "width"].forEach(function (e) {
                   void 0 !== t[e] && (i[e] = t[e]);
               }),
               i.height || (i.height = parseFloat(u(e, "height"))),
               i.width || (i.width = parseFloat(u(e, "width"))),
               i
           );
       }
   }
   function F(e) {
       if (!e || (e && !e.offsetParent)) return { left: 0, top: 0, width: 0, height: 0 };
       for (var t = e.offsetWidth, i = e.offsetHeight, n = 0, r = 0; (n += e.offsetLeft), (r += e.offsetTop), (e = e.offsetParent); );
       return { left: n, top: r, width: t, height: i };
   }
   function B(e, t) {
       var i = {},
           n = F(t.target),
           r = F(e),
           a = r.width,
           s = r.height,
           o = t.offsetY - (r.top - n.top),
           u = t.offsetX - (r.left - n.left);
       return t.changedTouches && ((u = t.changedTouches[0].pageX - r.left), (o = t.changedTouches[0].pageY + r.top)), (i.y = 1 - Math.max(0, Math.min(1, o / s))), (i.x = Math.max(0, Math.min(1, u / a))), i;
   }
   function j(e) {
       return s(e) && 3 === e.nodeType;
   }
   function V(e) {
       for (; e.firstChild; ) e.removeChild(e.firstChild);
       return e;
   }
   function q(e) {
       return (
           "function" == typeof e && (e = e()),
           (Array.isArray(e) ? e : [e])
               .map(function (e) {
                   return "function" == typeof e && (e = e()), _(e) || j(e) ? e : "string" == typeof e && /\S/.test(e) ? d.createTextNode(e) : void 0;
               })
               .filter(function (e) {
                   return e;
               })
       );
   }
   function H(t, e) {
       return (
           q(e).forEach(function (e) {
               return t.appendChild(e);
           }),
           t
       );
   }
   function W(e, t) {
       return H(V(e), t);
   }
   function z(e) {
       return (void 0 === e.button && void 0 === e.buttons) || (0 === e.button && void 0 === e.buttons) || ("mouseup" === e.type && 0 === e.button && 0 === e.buttons) || (0 === e.button && 1 === e.buttons);
   }
   var G,
       X = S("querySelector"),
       K = S("querySelectorAll"),
       Y = Object.freeze({
           __proto__: null,
           isReal: y,
           isEl: _,
           isInFrame: b,
           createEl: k,
           textContent: C,
           prependTo: E,
           hasClass: w,
           addClass: I,
           removeClass: A,
           toggleClass: x,
           setAttributes: P,
           getAttributes: L,
           getAttribute: O,
           setAttribute: D,
           removeAttribute: M,
           blockTextSelection: R,
           unblockTextSelection: N,
           getBoundingClientRect: U,
           findPosition: F,
           getPointerPosition: B,
           isTextNode: j,
           emptyEl: V,
           normalizeContent: q,
           appendContent: H,
           insertContent: W,
           isSingleLeftClick: z,
           $: X,
           $$: K,
       }),
       $ = !1,
       Q = function () {
           if (y() && !1 !== G.options.autoSetup) {
               var e = Array.prototype.slice.call(d.getElementsByTagName("video")),
                   t = Array.prototype.slice.call(d.getElementsByTagName("audio")),
                   i = Array.prototype.slice.call(d.getElementsByTagName("video-js")),
                   n = e.concat(t, i);
               if (n && 0 < n.length)
                   for (var r = 0, a = n.length; r < a; r++) {
                       var s = n[r];
                       if (!s || !s.getAttribute) {
                           J(1);
                           break;
                       }
                       void 0 === s.player && null !== s.getAttribute("data-setup") && G(s);
                   }
               else $ || J(1);
           }
       };
   function J(e, t) {
       t && (G = t), T.setTimeout(Q, e);
   }
   function Z() {
       ($ = !0), T.removeEventListener("load", Z);
   }
   y() && ("complete" === d.readyState ? Z() : T.addEventListener("load", Z));
   function ee(e) {
       var t = d.createElement("style");
       return (t.className = e), t;
   }
   function te(e, t) {
       e.styleSheet ? (e.styleSheet.cssText = t) : (e.textContent = t);
   }
   var ie,
       ne = 3;
   function re() {
       return ne++;
   }
   T.WeakMap ||
       (ie = (function () {
           function e() {
               (this.vdata = "vdata" + Math.floor((T.performance && T.performance.now()) || Date.now())), (this.data = {});
           }
           var t = e.prototype;
           return (
               (t.set = function (e, t) {
                   var i = e[this.vdata] || re();
                   return e[this.vdata] || (e[this.vdata] = i), (this.data[i] = t), this;
               }),
               (t.get = function (e) {
                   var t = e[this.vdata];
                   if (t) return this.data[t];
                   p("We have no data for this element", e);
               }),
               (t.has = function (e) {
                   return e[this.vdata] in this.data;
               }),
               (t.delete = function (e) {
                   var t = e[this.vdata];
                   t && (delete this.data[t], delete e[this.vdata]);
               }),
               e
           );
       })());
   var ae,
       se = T.WeakMap ? new WeakMap() : new ie();
   function oe(e, t) {
       if (se.has(e)) {
           var i = se.get(e);
           0 === i.handlers[t].length && (delete i.handlers[t], e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)),
               Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled),
               0 === Object.getOwnPropertyNames(i).length && se.delete(e);
       }
   }
   function ue(t, i, e, n) {
       e.forEach(function (e) {
           t(i, e, n);
       });
   }
   function le(e) {
       if (e.fixed_) return e;
       function t() {
           return !0;
       }
       function i() {
           return !1;
       }
       if (!e || !e.isPropagationStopped) {
           var n = e || T.event;
           for (var r in ((e = {}), n)) "layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && (("returnValue" === r && n.preventDefault) || (e[r] = n[r]));
           if (
               (e.target || (e.target = e.srcElement || d),
               e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement),
               (e.preventDefault = function () {
                   n.preventDefault && n.preventDefault(), (e.returnValue = !1), (n.returnValue = !1), (e.defaultPrevented = !0);
               }),
               (e.defaultPrevented = !1),
               (e.stopPropagation = function () {
                   n.stopPropagation && n.stopPropagation(), (e.cancelBubble = !0), (n.cancelBubble = !0), (e.isPropagationStopped = t);
               }),
               (e.isPropagationStopped = i),
               (e.stopImmediatePropagation = function () {
                   n.stopImmediatePropagation && n.stopImmediatePropagation(), (e.isImmediatePropagationStopped = t), e.stopPropagation();
               }),
               (e.isImmediatePropagationStopped = i),
               null !== e.clientX && void 0 !== e.clientX)
           ) {
               var a = d.documentElement,
                   s = d.body;
               (e.pageX = e.clientX + ((a && a.scrollLeft) || (s && s.scrollLeft) || 0) - ((a && a.clientLeft) || (s && s.clientLeft) || 0)),
                   (e.pageY = e.clientY + ((a && a.scrollTop) || (s && s.scrollTop) || 0) - ((a && a.clientTop) || (s && s.clientTop) || 0));
           }
           (e.which = e.charCode || e.keyCode), null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0);
       }
       return (e.fixed_ = !0), e;
   }
   var ce = function () {
           if ("boolean" != typeof ae) {
               ae = !1;
               try {
                   var e = Object.defineProperty({}, "passive", {
                       get: function () {
                           ae = !0;
                       },
                   });
                   T.addEventListener("test", null, e), T.removeEventListener("test", null, e);
               } catch (e) {}
           }
           return ae;
       },
       de = ["touchstart", "touchmove"];
   function he(s, e, t) {
       if (Array.isArray(e)) return ue(he, s, e, t);
       se.has(s) || se.set(s, {});
       var o = se.get(s);
       if (
           (o.handlers || (o.handlers = {}),
           o.handlers[e] || (o.handlers[e] = []),
           t.guid || (t.guid = re()),
           o.handlers[e].push(t),
           o.dispatcher ||
               ((o.disabled = !1),
               (o.dispatcher = function (e, t) {
                   if (!o.disabled) {
                       e = le(e);
                       var i = o.handlers[e.type];
                       if (i)
                           for (var n = i.slice(0), r = 0, a = n.length; r < a && !e.isImmediatePropagationStopped(); r++)
                               try {
                                   n[r].call(s, e, t);
                               } catch (e) {
                                   p.error(e);
                               }
                   }
               })),
           1 === o.handlers[e].length)
       )
           if (s.addEventListener) {
               var i = !1;
               ce() && -1 < de.indexOf(e) && (i = { passive: !0 }), s.addEventListener(e, o.dispatcher, i);
           } else s.attachEvent && s.attachEvent("on" + e, o.dispatcher);
   }
   function pe(e, t, i) {
       if (se.has(e)) {
           var n = se.get(e);
           if (n.handlers) {
               if (Array.isArray(t)) return ue(pe, e, t, i);
               var r = function (e, t) {
                   (n.handlers[t] = []), oe(e, t);
               };
               if (void 0 !== t) {
                   var a = n.handlers[t];
                   if (a)
                       if (i) {
                           if (i.guid) for (var s = 0; s < a.length; s++) a[s].guid === i.guid && a.splice(s--, 1);
                           oe(e, t);
                       } else r(e, t);
               } else for (var o in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, o) && r(e, o);
           }
       }
   }
   function fe(e, t, i) {
       var n = se.has(e) ? se.get(e) : {},
           r = e.parentNode || e.ownerDocument;
       if (("string" == typeof t ? (t = { type: t, target: e }) : t.target || (t.target = e), (t = le(t)), n.dispatcher && n.dispatcher.call(e, t, i), r && !t.isPropagationStopped() && !0 === t.bubbles)) fe.call(null, r, t, i);
       else if (!r && !t.defaultPrevented && t.target && t.target[t.type]) {
           se.has(t.target) || se.set(t.target, {});
           var a = se.get(t.target);
           t.target[t.type] && ((a.disabled = !0), "function" == typeof t.target[t.type] && t.target[t.type](), (a.disabled = !1));
       }
       return !t.defaultPrevented;
   }
   function me(e, t, i) {
       if (Array.isArray(t)) return ue(me, e, t, i);
       function n() {
           pe(e, t, n), i.apply(this, arguments);
       }
       (n.guid = i.guid = i.guid || re()), he(e, t, n);
   }
   function ge(e, t, i) {
       function n() {
           pe(e, t, n), i.apply(this, arguments);
       }
       (n.guid = i.guid = i.guid || re()), he(e, t, n);
   }
   function ve(e, t, i) {
       t.guid || (t.guid = re());
       var n = t.bind(e);
       return (n.guid = i ? i + "_" + t.guid : t.guid), n;
   }
   function ye(t, i) {
       var n = T.performance.now();
       return function () {
           var e = T.performance.now();
           i <= e - n && (t.apply(void 0, arguments), (n = e));
       };
   }
   function _e() {}
   var be,
       Te = Object.freeze({ __proto__: null, fixEvent: le, on: he, off: pe, trigger: fe, one: me, any: ge });
   (_e.prototype.allowedEvents_ = {}),
       (_e.prototype.addEventListener = _e.prototype.on = function (e, t) {
           var i = this.addEventListener;
           (this.addEventListener = function () {}), he(this, e, t), (this.addEventListener = i);
       }),
       (_e.prototype.removeEventListener = _e.prototype.off = function (e, t) {
           pe(this, e, t);
       }),
       (_e.prototype.one = function (e, t) {
           var i = this.addEventListener;
           (this.addEventListener = function () {}), me(this, e, t), (this.addEventListener = i);
       }),
       (_e.prototype.any = function (e, t) {
           var i = this.addEventListener;
           (this.addEventListener = function () {}), ge(this, e, t), (this.addEventListener = i);
       }),
       (_e.prototype.dispatchEvent = _e.prototype.trigger = function (e) {
           var t = e.type || e;
           "string" == typeof e && (e = { type: t }), (e = le(e)), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), fe(this, e);
       }),
       (_e.prototype.queueTrigger = function (e) {
           var t = this;
           be = be || new Map();
           var i = e.type || e,
               n = be.get(this);
           n || ((n = new Map()), be.set(this, n));
           var r = n.get(i);
           n.delete(i), T.clearTimeout(r);
           var a = T.setTimeout(function () {
               0 === n.size && ((n = null), be.delete(t)), t.trigger(e);
           }, 0);
           n.set(i, a);
       });
   function Se(e) {
       return ("string" == typeof e && /\S/.test(e)) || (Array.isArray(e) && !!e.length);
   }
   function ke(e) {
       if (!e.nodeName && !Ae(e)) throw new Error("Invalid target; must be a DOM node or evented object.");
   }
   function Ce(e) {
       if (!Se(e)) throw new Error("Invalid event type; must be a non-empty string or array.");
   }
   function Ee(e) {
       if ("function" != typeof e) throw new Error("Invalid listener; must be a function.");
   }
   function we(e, t) {
       var i,
           n,
           r,
           a = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_;
       return (r = a ? ((i = e.eventBusEl_), 3 <= t.length && t.shift(), (n = t[0]), t[1]) : ((i = t[0]), (n = t[1]), t[2])), ke(i), Ce(n), Ee(r), { isTargetingSelf: a, target: i, type: n, listener: (r = ve(e, r)) };
   }
   function Ie(e, t, i, n) {
       ke(e), e.nodeName ? Te[t](e, i, n) : e[t](i, n);
   }
   var Ae = function (t) {
           return (
               t instanceof _e ||
               (!!t.eventBusEl_ &&
                   ["on", "one", "off", "trigger"].every(function (e) {
                       return "function" == typeof t[e];
                   }))
           );
       },
       xe = {
           on: function () {
               for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
               var r = we(this, i),
                   a = r.isTargetingSelf,
                   s = r.target,
                   o = r.type,
                   u = r.listener;
               if ((Ie(s, "on", o, u), !a)) {
                   var l = function () {
                       return e.off(s, o, u);
                   };
                   l.guid = u.guid;
                   var c = function () {
                       return e.off("dispose", l);
                   };
                   (c.guid = u.guid), Ie(this, "on", "dispose", l), Ie(s, "on", "dispose", c);
               }
           },
           one: function () {
               for (var r = this, e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
               var n = we(this, t),
                   a = n.isTargetingSelf,
                   s = n.target,
                   o = n.type,
                   u = n.listener;
               if (a) Ie(s, "one", o, u);
               else {
                   var l = function e() {
                       r.off(s, o, e);
                       for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                       u.apply(null, i);
                   };
                   (l.guid = u.guid), Ie(s, "one", o, l);
               }
           },
           any: function () {
               for (var r = this, e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
               var n = we(this, t),
                   a = n.isTargetingSelf,
                   s = n.target,
                   o = n.type,
                   u = n.listener;
               if (a) Ie(s, "any", o, u);
               else {
                   var l = function e() {
                       r.off(s, o, e);
                       for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                       u.apply(null, i);
                   };
                   (l.guid = u.guid), Ie(s, "any", o, l);
               }
           },
           off: function (e, t, i) {
               if (!e || Se(e)) pe(this.eventBusEl_, e, t);
               else {
                   var n = e,
                       r = t;
                   ke(n), Ce(r), Ee(i), (i = ve(this, i)), this.off("dispose", i), n.nodeName ? (pe(n, r, i), pe(n, "dispose", i)) : Ae(n) && (n.off(r, i), n.off("dispose", i));
               }
           },
           trigger: function (e, t) {
               return fe(this.eventBusEl_, e, t);
           },
       };
   function Pe(e, t) {
       void 0 === t && (t = {});
       var i = t.eventBusKey;
       if (i) {
           if (!e[i].nodeName) throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
           e.eventBusEl_ = e[i];
       } else e.eventBusEl_ = k("span", { className: "vjs-event-bus" });
       return (
           g(e, xe),
           e.eventedCallbacks &&
               e.eventedCallbacks.forEach(function (e) {
                   e();
               }),
           e.on("dispose", function () {
               e.off(),
                   T.setTimeout(function () {
                       e.eventBusEl_ = null;
                   }, 0);
           }),
           e
       );
   }
   var Le = {
       state: {},
       setState: function (e) {
           var i,
               n = this;
           return (
               "function" == typeof e && (e = e()),
               r(e, function (e, t) {
                   n.state[t] !== e && ((i = i || {})[t] = { from: n.state[t], to: e }), (n.state[t] = e);
               }),
               i && Ae(this) && this.trigger({ changes: i, type: "statechanged" }),
               i
           );
       },
   };
   function Oe(e, t) {
       return g(e, Le), (e.state = g({}, e.state, t)), "function" == typeof e.handleStateChanged && Ae(e) && e.on("statechanged", e.handleStateChanged), e;
   }
   function De(e) {
       return "string" != typeof e
           ? e
           : e.replace(/./, function (e) {
                 return e.toLowerCase();
             });
   }
   function Me(e) {
       return "string" != typeof e
           ? e
           : e.replace(/./, function (e) {
                 return e.toUpperCase();
             });
   }
   function Re() {
       for (var i = {}, e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
       return (
           t.forEach(function (e) {
               e &&
                   r(e, function (e, t) {
                       o(e) ? (o(i[t]) || (i[t] = {}), (i[t] = Re(i[t], e))) : (i[t] = e);
                   });
           }),
           i
       );
   }
   var Ne = (function () {
           function e() {
               this.map_ = {};
           }
           var t = e.prototype;
           return (
               (t.has = function (e) {
                   return e in this.map_;
               }),
               (t.delete = function (e) {
                   var t = this.has(e);
                   return delete this.map_[e], t;
               }),
               (t.set = function (e, t) {
                   return (this.set_[e] = t), this;
               }),
               (t.forEach = function (e, t) {
                   for (var i in this.map_) e.call(t, this.map_[i], i, this);
               }),
               e
           );
       })(),
       Ue = T.Map ? T.Map : Ne,
       Fe = (function () {
           function e() {
               this.set_ = {};
           }
           var t = e.prototype;
           return (
               (t.has = function (e) {
                   return e in this.set_;
               }),
               (t.delete = function (e) {
                   var t = this.has(e);
                   return delete this.set_[e], t;
               }),
               (t.add = function (e) {
                   return (this.set_[e] = 1), this;
               }),
               (t.forEach = function (e, t) {
                   for (var i in this.set_) e.call(t, i, i, this);
               }),
               e
           );
       })(),
       Be = T.Set ? T.Set : Fe,
       je = (function () {
           function l(e, t, i) {
               if (
                   (!e && this.play ? (this.player_ = e = this) : (this.player_ = e),
                   (this.isDisposed_ = !1),
                   (this.parentComponent_ = null),
                   (this.options_ = Re({}, this.options_)),
                   (t = this.options_ = Re(this.options_, t)),
                   (this.id_ = t.id || (t.el && t.el.id)),
                   !this.id_)
               ) {
                   var n = (e && e.id && e.id()) || "no_player";
                   this.id_ = n + "_component_" + re();
               }
               (this.name_ = t.name || null),
                   t.el ? (this.el_ = t.el) : !1 !== t.createEl && (this.el_ = this.createEl()),
                   !1 !== t.evented && Pe(this, { eventBusKey: this.el_ ? "el_" : null }),
                   Oe(this, this.constructor.defaultState),
                   (this.children_ = []),
                   (this.childIndex_ = {}),
                   (this.childNameIndex_ = {}),
                   (this.setTimeoutIds_ = new Be()),
                   (this.setIntervalIds_ = new Be()),
                   (this.rafIds_ = new Be()),
                   (this.namedRafs_ = new Ue()),
                   (this.clearingTimersOnDispose_ = !1) !== t.initChildren && this.initChildren(),
                   this.ready(i),
                   !1 !== t.reportTouchActivity && this.enableTouchActivity();
           }
           var e = l.prototype;
           return (
               (e.dispose = function () {
                   if (!this.isDisposed_) {
                       if ((this.trigger({ type: "dispose", bubbles: !1 }), (this.isDisposed_ = !0), this.children_)) for (var e = this.children_.length - 1; 0 <= e; e--) this.children_[e].dispose && this.children_[e].dispose();
                       (this.children_ = null),
                           (this.childIndex_ = null),
                           (this.childNameIndex_ = null),
                           (this.parentComponent_ = null),
                           this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), se.has(this.el_) && se.delete(this.el_), (this.el_ = null)),
                           (this.player_ = null);
                   }
               }),
               (e.isDisposed = function () {
                   return Boolean(this.isDisposed_);
               }),
               (e.player = function () {
                   return this.player_;
               }),
               (e.options = function (e) {
                   return e && (this.options_ = Re(this.options_, e)), this.options_;
               }),
               (e.el = function () {
                   return this.el_;
               }),
               (e.createEl = function (e, t, i) {
                   return k(e, t, i);
               }),
               (e.localize = function (e, r, t) {
                   void 0 === t && (t = e);
                   var i = this.player_.language && this.player_.language(),
                       n = this.player_.languages && this.player_.languages(),
                       a = n && n[i],
                       s = i && i.split("-")[0],
                       o = n && n[s],
                       u = t;
                   return (
                       a && a[e] ? (u = a[e]) : o && o[e] && (u = o[e]),
                       r &&
                           (u = u.replace(/\{(\d+)\}/g, function (e, t) {
                               var i = r[t - 1],
                                   n = i;
                               return "undefined" == typeof i && (n = e), n;
                           })),
                       u
                   );
               }),
               (e.contentEl = function () {
                   return this.contentEl_ || this.el_;
               }),
               (e.id = function () {
                   return this.id_;
               }),
               (e.name = function () {
                   return this.name_;
               }),
               (e.children = function () {
                   return this.children_;
               }),
               (e.getChildById = function (e) {
                   return this.childIndex_[e];
               }),
               (e.getChild = function (e) {
                   if (e) return this.childNameIndex_[e];
               }),
               (e.getDescendant = function () {
                   for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                   t = t.reduce(function (e, t) {
                       return e.concat(t);
                   }, []);
                   for (var n = this, r = 0; r < t.length; r++) if (!(n = n.getChild(t[r])) || !n.getChild) return;
                   return n;
               }),
               (e.addChild = function (e, t, i) {
                   var n, r;
                   if ((void 0 === t && (t = {}), void 0 === i && (i = this.children_.length), "string" == typeof e)) {
                       r = Me(e);
                       var a = t.componentClass || r;
                       t.name = r;
                       var s = l.getComponent(a);
                       if (!s) throw new Error("Component " + a + " does not exist");
                       if ("function" != typeof s) return null;
                       n = new s(this.player_ || this, t);
                   } else n = e;
                   if (
                       (n.parentComponent_ && n.parentComponent_.removeChild(n),
                       this.children_.splice(i, 0, n),
                       (n.parentComponent_ = this),
                       "function" == typeof n.id && (this.childIndex_[n.id()] = n),
                       (r = r || (n.name && Me(n.name()))) && ((this.childNameIndex_[r] = n), (this.childNameIndex_[De(r)] = n)),
                       "function" == typeof n.el && n.el())
                   ) {
                       var o = null;
                       this.children_[i + 1] && (this.children_[i + 1].el_ ? (o = this.children_[i + 1].el_) : _(this.children_[i + 1]) && (o = this.children_[i + 1])), this.contentEl().insertBefore(n.el(), o);
                   }
                   return n;
               }),
               (e.removeChild = function (e) {
                   if (("string" == typeof e && (e = this.getChild(e)), e && this.children_)) {
                       for (var t = !1, i = this.children_.length - 1; 0 <= i; i--)
                           if (this.children_[i] === e) {
                               (t = !0), this.children_.splice(i, 1);
                               break;
                           }
                       if (t) {
                           (e.parentComponent_ = null), (this.childIndex_[e.id()] = null), (this.childNameIndex_[Me(e.name())] = null), (this.childNameIndex_[De(e.name())] = null);
                           var n = e.el();
                           n && n.parentNode === this.contentEl() && this.contentEl().removeChild(e.el());
                       }
                   }
               }),
               (e.initChildren = function () {
                   var r = this,
                       n = this.options_.children;
                   if (n) {
                       var e,
                           a = this.options_,
                           i = l.getComponent("Tech");
                       (e = Array.isArray(n) ? n : Object.keys(n))
                           .concat(
                               Object.keys(this.options_).filter(function (t) {
                                   return !e.some(function (e) {
                                       return "string" == typeof e ? t === e : t === e.name;
                                   });
                               })
                           )
                           .map(function (e) {
                               var t, i;
                               return (i = "string" == typeof e ? n[(t = e)] || r.options_[t] || {} : ((t = e.name), e)), { name: t, opts: i };
                           })
                           .filter(function (e) {
                               var t = l.getComponent(e.opts.componentClass || Me(e.name));
                               return t && !i.isTech(t);
                           })
                           .forEach(function (e) {
                               var t = e.name,
                                   i = e.opts;
                               if ((void 0 !== a[t] && (i = a[t]), !1 !== i)) {
                                   !0 === i && (i = {}), (i.playerOptions = r.options_.playerOptions);
                                   var n = r.addChild(t, i);
                                   n && (r[t] = n);
                               }
                           });
                   }
               }),
               (e.buildCSSClass = function () {
                   return "";
               }),
               (e.ready = function (e, t) {
                   if ((void 0 === t && (t = !1), e)) return this.isReady_ ? void (t ? e.call(this) : this.setTimeout(e, 1)) : ((this.readyQueue_ = this.readyQueue_ || []), void this.readyQueue_.push(e));
               }),
               (e.triggerReady = function () {
                   (this.isReady_ = !0),
                       this.setTimeout(function () {
                           var e = this.readyQueue_;
                           (this.readyQueue_ = []),
                               e &&
                                   0 < e.length &&
                                   e.forEach(function (e) {
                                       e.call(this);
                                   }, this),
                               this.trigger("ready");
                       }, 1);
               }),
               (e.$ = function (e, t) {
                   return X(e, t || this.contentEl());
               }),
               (e.$$ = function (e, t) {
                   return K(e, t || this.contentEl());
               }),
               (e.hasClass = function (e) {
                   return w(this.el_, e);
               }),
               (e.addClass = function (e) {
                   I(this.el_, e);
               }),
               (e.removeClass = function (e) {
                   A(this.el_, e);
               }),
               (e.toggleClass = function (e, t) {
                   x(this.el_, e, t);
               }),
               (e.show = function () {
                   this.removeClass("vjs-hidden");
               }),
               (e.hide = function () {
                   this.addClass("vjs-hidden");
               }),
               (e.lockShowing = function () {
                   this.addClass("vjs-lock-showing");
               }),
               (e.unlockShowing = function () {
                   this.removeClass("vjs-lock-showing");
               }),
               (e.getAttribute = function (e) {
                   return O(this.el_, e);
               }),
               (e.setAttribute = function (e, t) {
                   D(this.el_, e, t);
               }),
               (e.removeAttribute = function (e) {
                   M(this.el_, e);
               }),
               (e.width = function (e, t) {
                   return this.dimension("width", e, t);
               }),
               (e.height = function (e, t) {
                   return this.dimension("height", e, t);
               }),
               (e.dimensions = function (e, t) {
                   this.width(e, !0), this.height(t);
               }),
               (e.dimension = function (e, t, i) {
                   if (void 0 !== t)
                       return (
                           (null !== t && t == t) || (t = 0),
                           -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? (this.el_.style[e] = t) : (this.el_.style[e] = "auto" === t ? "" : t + "px"),
                           void (i || this.trigger("componentresize"))
                       );
                   if (!this.el_) return 0;
                   var n = this.el_.style[e],
                       r = n.indexOf("px");
                   return -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + Me(e)], 10);
               }),
               (e.currentDimension = function (e) {
                   var t = 0;
                   if ("width" !== e && "height" !== e) throw new Error("currentDimension only accepts width or height value");
                   if (((t = u(this.el_, e)), 0 === (t = parseFloat(t)) || isNaN(t))) {
                       var i = "offset" + Me(e);
                       t = this.el_[i];
                   }
                   return t;
               }),
               (e.currentDimensions = function () {
                   return { width: this.currentDimension("width"), height: this.currentDimension("height") };
               }),
               (e.currentWidth = function () {
                   return this.currentDimension("width");
               }),
               (e.currentHeight = function () {
                   return this.currentDimension("height");
               }),
               (e.focus = function () {
                   this.el_.focus();
               }),
               (e.blur = function () {
                   this.el_.blur();
               }),
               (e.handleKeyDown = function (e) {
                   this.player_ && (e.stopPropagation(), this.player_.handleKeyDown(e));
               }),
               (e.handleKeyPress = function (e) {
                   this.handleKeyDown(e);
               }),
               (e.emitTapEvents = function () {
                   var n,
                       t = 0,
                       r = null;
                   this.on("touchstart", function (e) {
                       1 === e.touches.length && ((r = { pageX: e.touches[0].pageX, pageY: e.touches[0].pageY }), (t = T.performance.now()), (n = !0));
                   }),
                       this.on("touchmove", function (e) {
                           if (1 < e.touches.length) n = !1;
                           else if (r) {
                               var t = e.touches[0].pageX - r.pageX,
                                   i = e.touches[0].pageY - r.pageY;
                               10 < Math.sqrt(t * t + i * i) && (n = !1);
                           }
                       });
                   function e() {
                       n = !1;
                   }
                   this.on("touchleave", e),
                       this.on("touchcancel", e),
                       this.on("touchend", function (e) {
                           !(r = null) === n && T.performance.now() - t < 200 && (e.preventDefault(), this.trigger("tap"));
                       });
               }),
               (e.enableTouchActivity = function () {
                   if (this.player() && this.player().reportUserActivity) {
                       var t,
                           i = ve(this.player(), this.player().reportUserActivity);
                       this.on("touchstart", function () {
                           i(), this.clearInterval(t), (t = this.setInterval(i, 250));
                       });
                       var e = function (e) {
                           i(), this.clearInterval(t);
                       };
                       this.on("touchmove", i), this.on("touchend", e), this.on("touchcancel", e);
                   }
               }),
               (e.setTimeout = function (e, t) {
                   var i,
                       n = this;
                   return (
                       (e = ve(this, e)),
                       this.clearTimersOnDispose_(),
                       (i = T.setTimeout(function () {
                           n.setTimeoutIds_.has(i) && n.setTimeoutIds_.delete(i), e();
                       }, t)),
                       this.setTimeoutIds_.add(i),
                       i
                   );
               }),
               (e.clearTimeout = function (e) {
                   return this.setTimeoutIds_.has(e) && (this.setTimeoutIds_.delete(e), T.clearTimeout(e)), e;
               }),
               (e.setInterval = function (e, t) {
                   (e = ve(this, e)), this.clearTimersOnDispose_();
                   var i = T.setInterval(e, t);
                   return this.setIntervalIds_.add(i), i;
               }),
               (e.clearInterval = function (e) {
                   return this.setIntervalIds_.has(e) && (this.setIntervalIds_.delete(e), T.clearInterval(e)), e;
               }),
               (e.requestAnimationFrame = function (e) {
                   var t,
                       i = this;
                   return this.supportsRaf_
                       ? (this.clearTimersOnDispose_(),
                         (e = ve(this, e)),
                         (t = T.requestAnimationFrame(function () {
                             i.rafIds_.has(t) && i.rafIds_.delete(t), e();
                         })),
                         this.rafIds_.add(t),
                         t)
                       : this.setTimeout(e, 1e3 / 60);
               }),
               (e.requestNamedAnimationFrame = function (e, t) {
                   var i = this;
                   if (!this.namedRafs_.has(e)) {
                       this.clearTimersOnDispose_(), (t = ve(this, t));
                       var n = this.requestAnimationFrame(function () {
                           t(), i.namedRafs_.has(e) && i.namedRafs_.delete(e);
                       });
                       return this.namedRafs_.set(e, n), e;
                   }
               }),
               (e.cancelNamedAnimationFrame = function (e) {
                   this.namedRafs_.has(e) && (this.cancelAnimationFrame(this.namedRafs_.get(e)), this.namedRafs_.delete(e));
               }),
               (e.cancelAnimationFrame = function (e) {
                   return this.supportsRaf_ ? (this.rafIds_.has(e) && (this.rafIds_.delete(e), T.cancelAnimationFrame(e)), e) : this.clearTimeout(e);
               }),
               (e.clearTimersOnDispose_ = function () {
                   var n = this;
                   this.clearingTimersOnDispose_ ||
                       ((this.clearingTimersOnDispose_ = !0),
                       this.one("dispose", function () {
                           [
                               ["namedRafs_", "cancelNamedAnimationFrame"],
                               ["rafIds_", "cancelAnimationFrame"],
                               ["setTimeoutIds_", "clearTimeout"],
                               ["setIntervalIds_", "clearInterval"],
                           ].forEach(function (e) {
                               var t = e[0],
                                   i = e[1];
                               n[t].forEach(function (e, t) {
                                   return n[i](t);
                               });
                           }),
                               (n.clearingTimersOnDispose_ = !1);
                       }));
               }),
               (l.registerComponent = function (e, t) {
                   if ("string" != typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
                   var i,
                       n = l.getComponent("Tech"),
                       r = n && n.isTech(t),
                       a = l === t || l.prototype.isPrototypeOf(t.prototype);
                   if (r || !a) throw ((i = r ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass"), new Error('Illegal component, "' + e + '"; ' + i + "."));
                   (e = Me(e)), l.components_ || (l.components_ = {});
                   var s = l.getComponent("Player");
                   if ("Player" === e && s && s.players) {
                       var o = s.players,
                           u = Object.keys(o);
                       if (
                           o &&
                           0 < u.length &&
                           u
                               .map(function (e) {
                                   return o[e];
                               })
                               .every(Boolean)
                       )
                           throw new Error("Can not register Player component after player has been created.");
                   }
                   return (l.components_[e] = t), (l.components_[De(e)] = t);
               }),
               (l.getComponent = function (e) {
                   if (e && l.components_) return l.components_[e];
               }),
               l
           );
       })();
   (je.prototype.supportsRaf_ = "function" == typeof T.requestAnimationFrame && "function" == typeof T.cancelAnimationFrame), je.registerComponent("Component", je);
   var Ve = function (e) {
       if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
       return e;
   };
   i(function (t) {
       function i(e) {
           return (
               "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                   ? (t.exports = i = function (e) {
                         return typeof e;
                     })
                   : (t.exports = i = function (e) {
                         return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                     }),
               i(e)
           );
       }
       t.exports = i;
   }),
       i(function (t) {
           function i(e) {
               return (
                   (t.exports = i = Object.setPrototypeOf
                       ? Object.getPrototypeOf
                       : function (e) {
                             return e.__proto__ || Object.getPrototypeOf(e);
                         }),
                   i(e)
               );
           }
           t.exports = i;
       });
   var qe,
       He,
       We,
       ze,
       Ge = function (e, t) {
           (e.prototype = Object.create(t.prototype)), ((e.prototype.constructor = e).__proto__ = t);
       },
       Xe = (T.navigator && T.navigator.userAgent) || "",
       Ke = /AppleWebKit\/([\d.]+)/i.exec(Xe),
       Ye = Ke ? parseFloat(Ke.pop()) : null,
       $e = /iPod/i.test(Xe),
       Qe = (qe = Xe.match(/OS (\d+)_/i)) && qe[1] ? qe[1] : null,
       Je = /Android/i.test(Xe),
       Ze = (function () {
           var e = Xe.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
           if (!e) return null;
           var t = e[1] && parseFloat(e[1]),
               i = e[2] && parseFloat(e[2]);
           return t && i ? parseFloat(e[1] + "." + e[2]) : t || null;
       })(),
       et = Je && Ze < 5 && Ye < 537,
       tt = /Firefox/i.test(Xe),
       it = /Edg/i.test(Xe),
       nt = !it && (/Chrome/i.test(Xe) || /CriOS/i.test(Xe)),
       rt = (He = Xe.match(/(Chrome|CriOS)\/(\d+)/)) && He[2] ? parseFloat(He[2]) : null,
       at = ((We = /MSIE\s(\d+)\.\d/.exec(Xe)), !(ze = We && parseFloat(We[1])) && /Trident\/7.0/i.test(Xe) && /rv:11.0/.test(Xe) && (ze = 11), ze),
       st = /Safari/i.test(Xe) && !nt && !Je && !it,
       ot = /Windows/i.test(Xe),
       ut = y() && ("ontouchstart" in T || T.navigator.maxTouchPoints || (T.DocumentTouch && T.document instanceof T.DocumentTouch)),
       lt = /iPad/i.test(Xe) || (st && ut && !/iPhone/i.test(Xe)),
       ct = /iPhone/i.test(Xe) && !lt,
       dt = ct || lt || $e,
       ht = (st || dt) && !nt,
       pt = Object.freeze({
           __proto__: null,
           IS_IPOD: $e,
           IOS_VERSION: Qe,
           IS_ANDROID: Je,
           ANDROID_VERSION: Ze,
           IS_NATIVE_ANDROID: et,
           IS_FIREFOX: tt,
           IS_EDGE: it,
           IS_CHROME: nt,
           CHROME_VERSION: rt,
           IE_VERSION: at,
           IS_SAFARI: st,
           IS_WINDOWS: ot,
           TOUCH_ENABLED: ut,
           IS_IPAD: lt,
           IS_IPHONE: ct,
           IS_IOS: dt,
           IS_ANY_SAFARI: ht,
       });
   function ft(e, t, i, n) {
       return (
           (function (e, t, i) {
               if ("number" != typeof t || t < 0 || i < t) throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + i + ").");
           })(e, n, i.length - 1),
           i[n][t]
       );
   }
   function mt(e) {
       return void 0 === e || 0 === e.length
           ? {
                 length: 0,
                 start: function () {
                     throw new Error("This TimeRanges object is empty");
                 },
                 end: function () {
                     throw new Error("This TimeRanges object is empty");
                 },
             }
           : { length: e.length, start: ft.bind(null, "start", 0, e), end: ft.bind(null, "end", 1, e) };
   }
   function gt(e, t) {
       return Array.isArray(e) ? mt(e) : void 0 === e || void 0 === t ? mt() : mt([[e, t]]);
   }
   function vt(e, t) {
       var i,
           n,
           r = 0;
       if (!t) return 0;
       (e && e.length) || (e = gt(0, 0));
       for (var a = 0; a < e.length; a++) (i = e.start(a)), t < (n = e.end(a)) && (n = t), (r += n - i);
       return r / t;
   }
   for (
       var yt,
           _t = { prefixed: !0 },
           bt = [
               ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"],
               ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
               ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
               ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"],
           ],
           Tt = bt[0],
           St = 0;
       St < bt.length;
       St++
   )
       if (bt[St][1] in d) {
           yt = bt[St];
           break;
       }
   if (yt) {
       for (var kt = 0; kt < yt.length; kt++) _t[Tt[kt]] = yt[kt];
       _t.prefixed = yt[0] !== Tt[0];
   }
   function Ct(e) {
       if (e instanceof Ct) return e;
       "number" == typeof e ? (this.code = e) : "string" == typeof e ? (this.message = e) : s(e) && ("number" == typeof e.code && (this.code = e.code), g(this, e)), this.message || (this.message = Ct.defaultMessages[this.code] || "");
   }
   (Ct.prototype.code = 0),
       (Ct.prototype.message = ""),
       (Ct.prototype.status = null),
       (Ct.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"]),
       (Ct.defaultMessages = {
           1: "You aborted the media playback",
           2: "A network error caused the media download to fail part-way.",
           3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
           4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
           5: "The media is encrypted and we do not have the keys to decrypt it.",
       });
   for (var Et = 0; Et < Ct.errorTypes.length; Et++) (Ct[Ct.errorTypes[Et]] = Et), (Ct.prototype[Ct.errorTypes[Et]] = Et);
   var wt = function (e, t) {
       var i,
           n = null;
       try {
           i = JSON.parse(e, t);
       } catch (e) {
           n = e;
       }
       return [n, i];
   };
   function It(e) {
       return null != e && "function" == typeof e.then;
   }
   function At(e) {
       It(e) && e.then(null, function (e) {});
   }
   function xt(n) {
       return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(
           function (e, t, i) {
               return n[t] && (e[t] = n[t]), e;
           },
           {
               cues:
                   n.cues &&
                   Array.prototype.map.call(n.cues, function (e) {
                       return { startTime: e.startTime, endTime: e.endTime, text: e.text, id: e.id };
                   }),
           }
       );
   }
   var Pt = function (e) {
           var t = e.$$("track"),
               i = Array.prototype.map.call(t, function (e) {
                   return e.track;
               });
           return Array.prototype.map
               .call(t, function (e) {
                   var t = xt(e.track);
                   return e.src && (t.src = e.src), t;
               })
               .concat(
                   Array.prototype.filter
                       .call(e.textTracks(), function (e) {
                           return -1 === i.indexOf(e);
                       })
                       .map(xt)
               );
       },
       Lt = function (e, i) {
           return (
               e.forEach(function (e) {
                   var t = i.addRemoteTextTrack(e).track;
                   !e.src &&
                       e.cues &&
                       e.cues.forEach(function (e) {
                           return t.addCue(e);
                       });
               }),
               i.textTracks()
           );
       },
       Ot = i(function (e, t) {
           function i(e) {
               if (e && "object" == typeof e) {
                   var t = e.which || e.keyCode || e.charCode;
                   t && (e = t);
               }
               if ("number" == typeof e) return s[e];
               var i,
                   n = String(e);
               return (i = r[n.toLowerCase()]) ? i : (i = a[n.toLowerCase()]) || (1 === n.length ? n.charCodeAt(0) : void 0);
           }
           i.isEventKey = function (e, t) {
               if (e && "object" == typeof e) {
                   var i = e.which || e.keyCode || e.charCode;
                   if (null == i) return !1;
                   if ("string" == typeof t) {
                       var n;
                       if ((n = r[t.toLowerCase()])) return n === i;
                       if ((n = a[t.toLowerCase()])) return n === i;
                   } else if ("number" == typeof t) return t === i;
                   return !1;
               }
           };
           var r = ((t = e.exports = i).code = t.codes = {
                   backspace: 8,
                   tab: 9,
                   enter: 13,
                   shift: 16,
                   ctrl: 17,
                   alt: 18,
                   "pause/break": 19,
                   "caps lock": 20,
                   esc: 27,
                   space: 32,
                   "page up": 33,
                   "page down": 34,
                   end: 35,
                   home: 36,
                   left: 37,
                   up: 38,
                   right: 39,
                   down: 40,
                   insert: 45,
                   delete: 46,
                   command: 91,
                   "left command": 91,
                   "right command": 93,
                   "numpad *": 106,
                   "numpad +": 107,
                   "numpad -": 109,
                   "numpad .": 110,
                   "numpad /": 111,
                   "num lock": 144,
                   "scroll lock": 145,
                   "my computer": 182,
                   "my calculator": 183,
                   ";": 186,
                   "=": 187,
                   ",": 188,
                   "-": 189,
                   ".": 190,
                   "/": 191,
                   "`": 192,
                   "[": 219,
                   "\\": 220,
                   "]": 221,
                   "'": 222,
               }),
               a = (t.aliases = {
                   windows: 91,
                   "⇧": 16,
                   "⌥": 18,
                   "⌃": 17,
                   "⌘": 91,
                   ctl: 17,
                   control: 17,
                   option: 18,
                   pause: 19,
                   break: 19,
                   caps: 20,
                   return: 13,
                   escape: 27,
                   spc: 32,
                   spacebar: 32,
                   pgup: 33,
                   pgdn: 34,
                   ins: 45,
                   del: 46,
                   cmd: 91,
               });
           for (n = 97; n < 123; n++) r[String.fromCharCode(n)] = n - 32;
           for (var n = 48; n < 58; n++) r[n - 48] = n;
           for (n = 1; n < 13; n++) r["f" + n] = n + 111;
           for (n = 0; n < 10; n++) r["numpad " + n] = n + 96;
           var s = (t.names = t.title = {});
           for (n in r) s[r[n]] = n;
           for (var o in a) r[o] = a[o];
       }),
       Dt = (Ot.code, Ot.codes, Ot.aliases, Ot.names, Ot.title, "vjs-modal-dialog"),
       Mt = (function (n) {
           function e(e, t) {
               var i;
               return (
                   ((i = n.call(this, e, t) || this).opened_ = i.hasBeenOpened_ = i.hasBeenFilled_ = !1),
                   i.closeable(!i.options_.uncloseable),
                   i.content(i.options_.content),
                   (i.contentEl_ = k("div", { className: Dt + "-content" }, { role: "document" })),
                   (i.descEl_ = k("p", { className: Dt + "-description vjs-control-text", id: i.el().getAttribute("aria-describedby") })),
                   C(i.descEl_, i.description()),
                   i.el_.appendChild(i.descEl_),
                   i.el_.appendChild(i.contentEl_),
                   i
               );
           }
           Ge(e, n);
           var t = e.prototype;
           return (
               (t.createEl = function () {
                   return n.prototype.createEl.call(this, "div", { className: this.buildCSSClass(), tabIndex: -1 }, { "aria-describedby": this.id() + "_description", "aria-hidden": "true", "aria-label": this.label(), role: "dialog" });
               }),
               (t.dispose = function () {
                   (this.contentEl_ = null), (this.descEl_ = null), (this.previouslyActiveEl_ = null), n.prototype.dispose.call(this);
               }),
               (t.buildCSSClass = function () {
                   return Dt + " vjs-hidden " + n.prototype.buildCSSClass.call(this);
               }),
               (t.label = function () {
                   return this.localize(this.options_.label || "Modal Window");
               }),
               (t.description = function () {
                   var e = this.options_.description || this.localize("This is a modal window.");
                   return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e;
               }),
               (t.open = function () {
                   if (!this.opened_) {
                       var e = this.player();
                       this.trigger("beforemodalopen"),
                           (this.opened_ = !0),
                           (!this.options_.fillAlways && (this.hasBeenOpened_ || this.hasBeenFilled_)) || this.fill(),
                           (this.wasPlaying_ = !e.paused()),
                           this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(),
                           this.on("keydown", this.handleKeyDown),
                           (this.hadControls_ = e.controls()),
                           e.controls(!1),
                           this.show(),
                           this.conditionalFocus_(),
                           this.el().setAttribute("aria-hidden", "false"),
                           this.trigger("modalopen"),
                           (this.hasBeenOpened_ = !0);
                   }
               }),
               (t.opened = function (e) {
                   return "boolean" == typeof e && this[e ? "open" : "close"](), this.opened_;
               }),
               (t.close = function () {
                   if (this.opened_) {
                       var e = this.player();
                       this.trigger("beforemodalclose"),
                           (this.opened_ = !1),
                           this.wasPlaying_ && this.options_.pauseOnOpen && e.play(),
                           this.off("keydown", this.handleKeyDown),
                           this.hadControls_ && e.controls(!0),
                           this.hide(),
                           this.el().setAttribute("aria-hidden", "true"),
                           this.trigger("modalclose"),
                           this.conditionalBlur_(),
                           this.options_.temporary && this.dispose();
                   }
               }),
               (t.closeable = function (e) {
                   if ("boolean" == typeof e) {
                       var t = (this.closeable_ = !!e),
                           i = this.getChild("closeButton");
                       if (t && !i) {
                           var n = this.contentEl_;
                           (this.contentEl_ = this.el_), (i = this.addChild("closeButton", { controlText: "Close Modal Dialog" })), (this.contentEl_ = n), this.on(i, "close", this.close);
                       }
                       !t && i && (this.off(i, "close", this.close), this.removeChild(i), i.dispose());
                   }
                   return this.closeable_;
               }),
               (t.fill = function () {
                   this.fillWith(this.content());
               }),
               (t.fillWith = function (e) {
                   var t = this.contentEl(),
                       i = t.parentNode,
                       n = t.nextSibling;
                   this.trigger("beforemodalfill"), (this.hasBeenFilled_ = !0), i.removeChild(t), this.empty(), W(t, e), this.trigger("modalfill"), n ? i.insertBefore(t, n) : i.appendChild(t);
                   var r = this.getChild("closeButton");
                   r && i.appendChild(r.el_);
               }),
               (t.empty = function () {
                   this.trigger("beforemodalempty"), V(this.contentEl()), this.trigger("modalempty");
               }),
               (t.content = function (e) {
                   return "undefined" != typeof e && (this.content_ = e), this.content_;
               }),
               (t.conditionalFocus_ = function () {
                   var e = d.activeElement,
                       t = this.player_.el_;
                   (this.previouslyActiveEl_ = null), (!t.contains(e) && t !== e) || ((this.previouslyActiveEl_ = e), this.focus());
               }),
               (t.conditionalBlur_ = function () {
                   this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), (this.previouslyActiveEl_ = null));
               }),
               (t.handleKeyDown = function (e) {
                   if ((e.stopPropagation(), Ot.isEventKey(e, "Escape") && this.closeable())) return e.preventDefault(), void this.close();
                   if (Ot.isEventKey(e, "Tab")) {
                       for (var t, i = this.focusableEls_(), n = this.el_.querySelector(":focus"), r = 0; r < i.length; r++)
                           if (n === i[r]) {
                               t = r;
                               break;
                           }
                       d.activeElement === this.el_ && (t = 0), e.shiftKey && 0 === t ? (i[i.length - 1].focus(), e.preventDefault()) : e.shiftKey || t !== i.length - 1 || (i[0].focus(), e.preventDefault());
                   }
               }),
               (t.focusableEls_ = function () {
                   var e = this.el_.querySelectorAll("*");
                   return Array.prototype.filter.call(e, function (e) {
                       return (
                           ((e instanceof T.HTMLAnchorElement || e instanceof T.HTMLAreaElement) && e.hasAttribute("href")) ||
                           ((e instanceof T.HTMLInputElement || e instanceof T.HTMLSelectElement || e instanceof T.HTMLTextAreaElement || e instanceof T.HTMLButtonElement) && !e.hasAttribute("disabled")) ||
                           e instanceof T.HTMLIFrameElement ||
                           e instanceof T.HTMLObjectElement ||
                           e instanceof T.HTMLEmbedElement ||
                           (e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex")) ||
                           e.hasAttribute("contenteditable")
                       );
                   });
               }),
               e
           );
       })(je);
   (Mt.prototype.options_ = { pauseOnOpen: !0, temporary: !0 }), je.registerComponent("ModalDialog", Mt);
   var Rt = (function (n) {
       function e(e) {
           var t;
           void 0 === e && (e = []),
               ((t = n.call(this) || this).tracks_ = []),
               Object.defineProperty(Ve(t), "length", {
                   get: function () {
                       return this.tracks_.length;
                   },
               });
           for (var i = 0; i < e.length; i++) t.addTrack(e[i]);
           return t;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.addTrack = function (e) {
               var t = this.tracks_.length;
               "" + t in this ||
                   Object.defineProperty(this, t, {
                       get: function () {
                           return this.tracks_[t];
                       },
                   }),
                   -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({ track: e, type: "addtrack", target: this }));
           }),
           (t.removeTrack = function (e) {
               for (var t, i = 0, n = this.length; i < n; i++)
                   if (this[i] === e) {
                       (t = this[i]).off && t.off(), this.tracks_.splice(i, 1);
                       break;
                   }
               t && this.trigger({ track: t, type: "removetrack", target: this });
           }),
           (t.getTrackById = function (e) {
               for (var t = null, i = 0, n = this.length; i < n; i++) {
                   var r = this[i];
                   if (r.id === e) {
                       t = r;
                       break;
                   }
               }
               return t;
           }),
           e
       );
   })(_e);
   for (var Nt in ((Rt.prototype.allowedEvents_ = { change: "change", addtrack: "addtrack", removetrack: "removetrack" }), Rt.prototype.allowedEvents_)) Rt.prototype["on" + Nt] = null;
   function Ut(e, t) {
       for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1);
   }
   function Ft(e, t) {
       for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1);
   }
   function Bt(e) {
       var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
           i = d.createElement("a");
       i.href = e;
       var n,
           r = "" === i.host && "file:" !== i.protocol;
       r && (((n = d.createElement("div")).innerHTML = '<a href="' + e + '"></a>'), (i = n.firstChild), n.setAttribute("style", "display:none; position:absolute;"), d.body.appendChild(n));
       for (var a = {}, s = 0; s < t.length; s++) a[t[s]] = i[t[s]];
       return "http:" === a.protocol && (a.host = a.host.replace(/:80$/, "")), "https:" === a.protocol && (a.host = a.host.replace(/:443$/, "")), a.protocol || (a.protocol = T.location.protocol), r && d.body.removeChild(n), a;
   }
   function jt(e) {
       if (!e.match(/^https?:\/\//)) {
           var t = d.createElement("div");
           (t.innerHTML = '<a href="' + e + '">x</a>'), (e = t.firstChild.href);
       }
       return e;
   }
   function Vt(e) {
       if ("string" == typeof e) {
           var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e);
           if (t) return t.pop().toLowerCase();
       }
       return "";
   }
   function qt(e, t) {
       void 0 === t && (t = T.location);
       var i = Bt(e);
       return (":" === i.protocol ? t.protocol : i.protocol) + i.host !== t.protocol + t.host;
   }
   var Ht = (function (n) {
           function e(e) {
               var t;
               void 0 === e && (e = []);
               for (var i = e.length - 1; 0 <= i; i--)
                   if (e[i].enabled) {
                       Ut(e, e[i]);
                       break;
                   }
               return ((t = n.call(this, e) || this).changing_ = !1), t;
           }
           Ge(e, n);
           var t = e.prototype;
           return (
               (t.addTrack = function (e) {
                   var t = this;
                   e.enabled && Ut(this, e),
                       n.prototype.addTrack.call(this, e),
                       e.addEventListener &&
                           ((e.enabledChange_ = function () {
                               t.changing_ || ((t.changing_ = !0), Ut(t, e), (t.changing_ = !1), t.trigger("change"));
                           }),
                           e.addEventListener("enabledchange", e.enabledChange_));
               }),
               (t.removeTrack = function (e) {
                   n.prototype.removeTrack.call(this, e), e.removeEventListener && e.enabledChange_ && (e.removeEventListener("enabledchange", e.enabledChange_), (e.enabledChange_ = null));
               }),
               e
           );
       })(Rt),
       Wt = (function (n) {
           function e(e) {
               var t;
               void 0 === e && (e = []);
               for (var i = e.length - 1; 0 <= i; i--)
                   if (e[i].selected) {
                       Ft(e, e[i]);
                       break;
                   }
               return (
                   ((t = n.call(this, e) || this).changing_ = !1),
                   Object.defineProperty(Ve(t), "selectedIndex", {
                       get: function () {
                           for (var e = 0; e < this.length; e++) if (this[e].selected) return e;
                           return -1;
                       },
                       set: function () {},
                   }),
                   t
               );
           }
           Ge(e, n);
           var t = e.prototype;
           return (
               (t.addTrack = function (e) {
                   var t = this;
                   e.selected && Ft(this, e),
                       n.prototype.addTrack.call(this, e),
                       e.addEventListener &&
                           ((e.selectedChange_ = function () {
                               t.changing_ || ((t.changing_ = !0), Ft(t, e), (t.changing_ = !1), t.trigger("change"));
                           }),
                           e.addEventListener("selectedchange", e.selectedChange_));
               }),
               (t.removeTrack = function (e) {
                   n.prototype.removeTrack.call(this, e), e.removeEventListener && e.selectedChange_ && (e.removeEventListener("selectedchange", e.selectedChange_), (e.selectedChange_ = null));
               }),
               e
           );
       })(Rt),
       zt = (function (i) {
           function e() {
               return i.apply(this, arguments) || this;
           }
           Ge(e, i);
           var t = e.prototype;
           return (
               (t.addTrack = function (e) {
                   var t = this;
                   i.prototype.addTrack.call(this, e),
                       this.queueChange_ ||
                           (this.queueChange_ = function () {
                               return t.queueTrigger("change");
                           }),
                       this.triggerSelectedlanguagechange ||
                           (this.triggerSelectedlanguagechange_ = function () {
                               return t.trigger("selectedlanguagechange");
                           }),
                       e.addEventListener("modechange", this.queueChange_);
                   -1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", this.triggerSelectedlanguagechange_);
               }),
               (t.removeTrack = function (e) {
                   i.prototype.removeTrack.call(this, e),
                       e.removeEventListener && (this.queueChange_ && e.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_ && e.removeEventListener("modechange", this.triggerSelectedlanguagechange_));
               }),
               e
           );
       })(Rt),
       Gt = (function () {
           function e(e) {
               void 0 === e && (e = []),
                   (this.trackElements_ = []),
                   Object.defineProperty(this, "length", {
                       get: function () {
                           return this.trackElements_.length;
                       },
                   });
               for (var t = 0, i = e.length; t < i; t++) this.addTrackElement_(e[t]);
           }
           var t = e.prototype;
           return (
               (t.addTrackElement_ = function (e) {
                   var t = this.trackElements_.length;
                   "" + t in this ||
                       Object.defineProperty(this, t, {
                           get: function () {
                               return this.trackElements_[t];
                           },
                       }),
                       -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e);
               }),
               (t.getTrackElementByTrack_ = function (e) {
                   for (var t, i = 0, n = this.trackElements_.length; i < n; i++)
                       if (e === this.trackElements_[i].track) {
                           t = this.trackElements_[i];
                           break;
                       }
                   return t;
               }),
               (t.removeTrackElement_ = function (e) {
                   for (var t = 0, i = this.trackElements_.length; t < i; t++)
                       if (e === this.trackElements_[t]) {
                           this.trackElements_[t].track && "function" == typeof this.trackElements_[t].track.off && this.trackElements_[t].track.off(),
                               "function" == typeof this.trackElements_[t].off && this.trackElements_[t].off(),
                               this.trackElements_.splice(t, 1);
                           break;
                       }
               }),
               e
           );
       })(),
       Xt = (function () {
           function t(e) {
               t.prototype.setCues_.call(this, e),
                   Object.defineProperty(this, "length", {
                       get: function () {
                           return this.length_;
                       },
                   });
           }
           var e = t.prototype;
           return (
               (e.setCues_ = function (e) {
                   var t = this.length || 0,
                       i = 0,
                       n = e.length;
                   (this.cues_ = e), (this.length_ = e.length);
                   function r(e) {
                       "" + e in this ||
                           Object.defineProperty(this, "" + e, {
                               get: function () {
                                   return this.cues_[e];
                               },
                           });
                   }
                   if (t < n) for (i = t; i < n; i++) r.call(this, i);
               }),
               (e.getCueById = function (e) {
                   for (var t = null, i = 0, n = this.length; i < n; i++) {
                       var r = this[i];
                       if (r.id === e) {
                           t = r;
                           break;
                       }
                   }
                   return t;
               }),
               t
           );
       })(),
       Kt = { alternative: "alternative", captions: "captions", main: "main", sign: "sign", subtitles: "subtitles", commentary: "commentary" },
       Yt = { alternative: "alternative", descriptions: "descriptions", main: "main", "main-desc": "main-desc", translation: "translation", commentary: "commentary" },
       $t = { subtitles: "subtitles", captions: "captions", descriptions: "descriptions", chapters: "chapters", metadata: "metadata" },
       Qt = { disabled: "disabled", hidden: "hidden", showing: "showing" },
       Jt = (function (a) {
           function e(e) {
               var t;
               void 0 === e && (e = {}), (t = a.call(this) || this);
               function i(e) {
                   Object.defineProperty(Ve(t), e, {
                       get: function () {
                           return n[e];
                       },
                       set: function () {},
                   });
               }
               var n = { id: e.id || "vjs_track_" + re(), kind: e.kind || "", label: e.label || "", language: e.language || "" };
               for (var r in n) i(r);
               return t;
           }
           return Ge(e, a), e;
       })(_e),
       Zt = Object.freeze({ __proto__: null, parseUrl: Bt, getAbsoluteURL: jt, getFileExtension: Vt, isCrossOrigin: qt }),
       ei = function (e) {
           var t = ti.call(e);
           return "[object Function]" === t || ("function" == typeof e && "[object RegExp]" !== t) || ("undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt));
       },
       /**
        * @license
        * slighly modified parse-headers 2.0.2 <https://github.com/kesla/parse-headers/>
        * Copyright (c) 2014 David Björklund
        * Available under the MIT license
        * <https://github.com/kesla/parse-headers/blob/master/LICENCE>
        */ ti = Object.prototype.toString;
   var ii = function (e) {
           var r = {};
           return (
               e &&
                   e
                       .trim()
                       .split("\n")
                       .forEach(function (e) {
                           var t = e.indexOf(":"),
                               i = e.slice(0, t).trim().toLowerCase(),
                               n = e.slice(t + 1).trim();
                           "undefined" == typeof r[i] ? (r[i] = n) : Array.isArray(r[i]) ? r[i].push(n) : (r[i] = [r[i], n]);
                       }),
               r
           );
       },
       ni = si,
       ri = si;
   function ai(e, t, i) {
       var n = e;
       return ei(t) ? ((i = t), "string" == typeof e && (n = { uri: e })) : (n = m({}, t, { uri: e })), (n.callback = i), n;
   }
   function si(e, t, i) {
       return oi((t = ai(e, t, i)));
   }
   function oi(n) {
       if ("undefined" == typeof n.callback) throw new Error("callback argument missing");
       var r = !1,
           a = function (e, t, i) {
               r || ((r = !0), n.callback(e, t, i));
           };
       function t(e) {
           return clearTimeout(o), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), (e.statusCode = 0), a(e, m);
       }
       function e() {
           if (!s) {
               var e;
               clearTimeout(o), (e = n.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status);
               var t = m,
                   i = null;
               return (
                   0 !== e
                       ? ((t = {
                             body: (function () {
                                 var e = void 0;
                                 if (
                                     ((e = u.response
                                         ? u.response
                                         : u.responseText ||
                                           (function (e) {
                                               try {
                                                   if ("document" === e.responseType) return e.responseXML;
                                                   var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                                                   if ("" === e.responseType && !t) return e.responseXML;
                                               } catch (e) {}
                                               return null;
                                           })(u)),
                                     f)
                                 )
                                     try {
                                         e = JSON.parse(e);
                                     } catch (e) {}
                                 return e;
                             })(),
                             statusCode: e,
                             method: c,
                             headers: {},
                             url: l,
                             rawRequest: u,
                         }),
                         u.getAllResponseHeaders && (t.headers = ii(u.getAllResponseHeaders())))
                       : (i = new Error("Internal XMLHttpRequest Error")),
                   a(i, t, t.body)
               );
           }
       }
       var i,
           s,
           o,
           u = n.xhr || null,
           l = ((u = u || (n.cors || n.useXDR ? new si.XDomainRequest() : new si.XMLHttpRequest())).url = n.uri || n.url),
           c = (u.method = n.method || "GET"),
           d = n.body || n.data,
           h = (u.headers = n.headers || {}),
           p = !!n.sync,
           f = !1,
           m = { body: void 0, headers: {}, statusCode: 0, method: c, url: l, rawRequest: u };
       if (
           ("json" in n &&
               !1 !== n.json &&
               ((f = !0),
               h.accept || h.Accept || (h.Accept = "application/json"),
               "GET" !== c && "HEAD" !== c && (h["content-type"] || h["Content-Type"] || (h["Content-Type"] = "application/json"), (d = JSON.stringify(!0 === n.json ? d : n.json)))),
           (u.onreadystatechange = function () {
               4 === u.readyState && setTimeout(e, 0);
           }),
           (u.onload = e),
           (u.onerror = t),
           (u.onprogress = function () {}),
           (u.onabort = function () {
               s = !0;
           }),
           (u.ontimeout = t),
           u.open(c, l, !p, n.username, n.password),
           p || (u.withCredentials = !!n.withCredentials),
           !p &&
               0 < n.timeout &&
               (o = setTimeout(function () {
                   if (!s) {
                       (s = !0), u.abort("timeout");
                       var e = new Error("XMLHttpRequest timeout");
                       (e.code = "ETIMEDOUT"), t(e);
                   }
               }, n.timeout)),
           u.setRequestHeader)
       )
           for (i in h) h.hasOwnProperty(i) && u.setRequestHeader(i, h[i]);
       else if (
           n.headers &&
           !(function (e) {
               for (var t in e) if (e.hasOwnProperty(t)) return !1;
               return !0;
           })(n.headers)
       )
           throw new Error("Headers cannot be set on an XDomainRequest object");
       return "responseType" in n && (u.responseType = n.responseType), "beforeSend" in n && "function" == typeof n.beforeSend && n.beforeSend(u), u.send(d || null), u;
   }
   (si.XMLHttpRequest = T.XMLHttpRequest || function () {}),
       (si.XDomainRequest = "withCredentials" in new si.XMLHttpRequest() ? si.XMLHttpRequest : T.XDomainRequest),
       (function (e, t) {
           for (var i = 0; i < e.length; i++) t(e[i]);
       })(["get", "put", "post", "patch", "head", "delete"], function (n) {
           si["delete" === n ? "del" : n] = function (e, t, i) {
               return ((t = ai(e, t, i)).method = n.toUpperCase()), oi(t);
           };
       }),
       (ni.default = ri);
   function ui(e, t) {
       var i = new T.WebVTT.Parser(T, T.vttjs, T.WebVTT.StringDecoder()),
           n = [];
       (i.oncue = function (e) {
           t.addCue(e);
       }),
           (i.onparsingerror = function (e) {
               n.push(e);
           }),
           (i.onflush = function () {
               t.trigger({ type: "loadeddata", target: t });
           }),
           i.parse(e),
           0 < n.length &&
               (T.console && T.console.groupCollapsed && T.console.groupCollapsed("Text Track parsing errors for " + t.src),
               n.forEach(function (e) {
                   return p.error(e);
               }),
               T.console && T.console.groupEnd && T.console.groupEnd()),
           i.flush();
   }
   function li(e, n) {
       var t = { uri: e },
           i = qt(e);
       i && (t.cors = i);
       var r = "use-credentials" === n.tech_.crossOrigin();
       r && (t.withCredentials = r),
           ni(
               t,
               ve(this, function (e, t, i) {
                   if (e) return p.error(e, t);
                   (n.loaded_ = !0),
                       "function" != typeof T.WebVTT
                           ? n.tech_ &&
                             n.tech_.any(["vttjsloaded", "vttjserror"], function (e) {
                                 if ("vttjserror" !== e.type) return ui(i, n);
                                 p.error("vttjs failed to load, stopping trying to process " + n.src);
                             })
                           : ui(i, n);
               })
           );
   }
   var ci = (function (l) {
       function e(e) {
           var t;
           if ((void 0 === e && (e = {}), !e.tech)) throw new Error("A tech was not provided.");
           var i = Re(e, { kind: $t[e.kind] || "subtitles", language: e.language || e.srclang || "" }),
               n = Qt[i.mode] || "disabled",
               r = i.default;
           ("metadata" !== i.kind && "chapters" !== i.kind) || (n = "hidden"), ((t = l.call(this, i) || this).tech_ = i.tech), (t.cues_ = []), (t.activeCues_ = []), (t.preload_ = !1 !== t.tech_.preloadTextTracks);
           var a = new Xt(t.cues_),
               s = new Xt(t.activeCues_),
               o = !1,
               u = ve(Ve(t), function () {
                   (this.activeCues = this.activeCues), o && (this.trigger("cuechange"), (o = !1));
               });
           return (
               "disabled" !== n &&
                   t.tech_.ready(function () {
                       t.tech_.on("timeupdate", u);
                   }, !0),
               Object.defineProperties(Ve(t), {
                   default: {
                       get: function () {
                           return r;
                       },
                       set: function () {},
                   },
                   mode: {
                       get: function () {
                           return n;
                       },
                       set: function (e) {
                           var t = this;
                           Qt[e] &&
                               ((n = e),
                               this.preload_ || "disabled" === n || 0 !== this.cues.length || li(this.src, this),
                               "disabled" !== n
                                   ? this.tech_.ready(function () {
                                         t.tech_.on("timeupdate", u);
                                     }, !0)
                                   : this.tech_.off("timeupdate", u),
                               this.trigger("modechange"));
                       },
                   },
                   cues: {
                       get: function () {
                           return this.loaded_ ? a : null;
                       },
                       set: function () {},
                   },
                   activeCues: {
                       get: function () {
                           if (!this.loaded_) return null;
                           if (0 === this.cues.length) return s;
                           for (var e = this.tech_.currentTime(), t = [], i = 0, n = this.cues.length; i < n; i++) {
                               var r = this.cues[i];
                               r.startTime <= e && r.endTime >= e ? t.push(r) : r.startTime === r.endTime && r.startTime <= e && r.startTime + 0.5 >= e && t.push(r);
                           }
                           if (((o = !1), t.length !== this.activeCues_.length)) o = !0;
                           else for (var a = 0; a < t.length; a++) -1 === this.activeCues_.indexOf(t[a]) && (o = !0);
                           return (this.activeCues_ = t), s.setCues_(this.activeCues_), s;
                       },
                       set: function () {},
                   },
               }),
               i.src ? ((t.src = i.src), t.preload_ || (t.loaded_ = !0), (t.preload_ || r || ("subtitles" !== i.kind && "captions" !== i.kind)) && li(t.src, Ve(t))) : (t.loaded_ = !0),
               t
           );
       }
       Ge(e, l);
       var t = e.prototype;
       return (
           (t.addCue = function (e) {
               var t = e;
               if (T.vttjs && !(e instanceof T.vttjs.VTTCue)) {
                   for (var i in ((t = new T.vttjs.VTTCue(e.startTime, e.endTime, e.text)), e)) i in t || (t[i] = e[i]);
                   (t.id = e.id), (t.originalCue_ = e);
               }
               for (var n = this.tech_.textTracks(), r = 0; r < n.length; r++) n[r] !== this && n[r].removeCue(t);
               this.cues_.push(t), this.cues.setCues_(this.cues_);
           }),
           (t.removeCue = function (e) {
               for (var t = this.cues_.length; t--; ) {
                   var i = this.cues_[t];
                   if (i === e || (i.originalCue_ && i.originalCue_ === e)) {
                       this.cues_.splice(t, 1), this.cues.setCues_(this.cues_);
                       break;
                   }
               }
           }),
           e
       );
   })(Jt);
   ci.prototype.allowedEvents_ = { cuechange: "cuechange" };
   var di = (function (r) {
           function e(e) {
               var t;
               void 0 === e && (e = {});
               var i = Re(e, { kind: Yt[e.kind] || "" });
               t = r.call(this, i) || this;
               var n = !1;
               return (
                   Object.defineProperty(Ve(t), "enabled", {
                       get: function () {
                           return n;
                       },
                       set: function (e) {
                           "boolean" == typeof e && e !== n && ((n = e), this.trigger("enabledchange"));
                       },
                   }),
                   i.enabled && (t.enabled = i.enabled),
                   (t.loaded_ = !0),
                   t
               );
           }
           return Ge(e, r), e;
       })(Jt),
       hi = (function (r) {
           function e(e) {
               var t;
               void 0 === e && (e = {});
               var i = Re(e, { kind: Kt[e.kind] || "" });
               t = r.call(this, i) || this;
               var n = !1;
               return (
                   Object.defineProperty(Ve(t), "selected", {
                       get: function () {
                           return n;
                       },
                       set: function (e) {
                           "boolean" == typeof e && e !== n && ((n = e), this.trigger("selectedchange"));
                       },
                   }),
                   i.selected && (t.selected = i.selected),
                   t
               );
           }
           return Ge(e, r), e;
       })(Jt),
       pi = (function (r) {
           function e(e) {
               var t, i;
               void 0 === e && (e = {}), (t = r.call(this) || this);
               var n = new ci(e);
               return (
                   (t.kind = n.kind),
                   (t.src = n.src),
                   (t.srclang = n.language),
                   (t.label = n.label),
                   (t.default = n.default),
                   Object.defineProperties(Ve(t), {
                       readyState: {
                           get: function () {
                               return i;
                           },
                       },
                       track: {
                           get: function () {
                               return n;
                           },
                       },
                   }),
                   (i = 0),
                   n.addEventListener("loadeddata", function () {
                       (i = 2), t.trigger({ type: "load", target: Ve(t) });
                   }),
                   t
               );
           }
           return Ge(e, r), e;
       })(_e);
   (pi.prototype.allowedEvents_ = { load: "load" }), (pi.NONE = 0), (pi.LOADING = 1), (pi.LOADED = 2), (pi.ERROR = 3);
   var fi = { audio: { ListClass: Ht, TrackClass: di, capitalName: "Audio" }, video: { ListClass: Wt, TrackClass: hi, capitalName: "Video" }, text: { ListClass: zt, TrackClass: ci, capitalName: "Text" } };
   Object.keys(fi).forEach(function (e) {
       (fi[e].getterName = e + "Tracks"), (fi[e].privateName = e + "Tracks_");
   });
   var mi = {
           remoteText: { ListClass: zt, TrackClass: ci, capitalName: "RemoteText", getterName: "remoteTextTracks", privateName: "remoteTextTracks_" },
           remoteTextEl: { ListClass: Gt, TrackClass: pi, capitalName: "RemoteTextTrackEls", getterName: "remoteTextTrackEls", privateName: "remoteTextTrackEls_" },
       },
       gi = m({}, fi, mi);
   (mi.names = Object.keys(mi)), (fi.names = Object.keys(fi)), (gi.names = [].concat(mi.names).concat(fi.names));
   var vi =
       Object.create ||
       function (e) {
           if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
           return (yi.prototype = e), new yi();
       };
   function yi() {}
   function _i(e, t) {
       (this.name = "ParsingError"), (this.code = e.code), (this.message = t || e.message);
   }
   function bi(e) {
       function t(e, t, i, n) {
           return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | n) / 1e3;
       }
       var i = e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
       return i ? (i[3] ? t(i[1], i[2], i[3].replace(":", ""), i[4]) : 59 < i[1] ? t(i[1], i[2], 0, i[4]) : t(0, i[1], i[2], i[4])) : null;
   }
   function Ti() {
       this.values = vi(null);
   }
   function Si(e, t, i, n) {
       var r = n ? e.split(n) : [e];
       for (var a in r)
           if ("string" == typeof r[a]) {
               var s = r[a].split(i);
               if (2 === s.length) t(s[0], s[1]);
           }
   }
   function ki(t, e, s) {
       var i = t;
       function n() {
           var e = bi(t);
           if (null === e) throw new _i(_i.Errors.BadTimeStamp, "Malformed timestamp: " + i);
           return (t = t.replace(/^[^\sa-zA-Z-]+/, "")), e;
       }
       function r() {
           t = t.replace(/^\s+/, "");
       }
       if ((r(), (e.startTime = n()), r(), "--\x3e" !== t.substr(0, 3))) throw new _i(_i.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
       (t = t.substr(3)),
           r(),
           (e.endTime = n()),
           r(),
           (function (e, t) {
               var a = new Ti();
               Si(
                   e,
                   function (e, t) {
                       switch (e) {
                           case "region":
                               for (var i = s.length - 1; 0 <= i; i--)
                                   if (s[i].id === t) {
                                       a.set(e, s[i].region);
                                       break;
                                   }
                               break;
                           case "vertical":
                               a.alt(e, t, ["rl", "lr"]);
                               break;
                           case "line":
                               var n = t.split(","),
                                   r = n[0];
                               a.integer(e, r), a.percent(e, r) && a.set("snapToLines", !1), a.alt(e, r, ["auto"]), 2 === n.length && a.alt("lineAlign", n[1], ["start", "center", "end"]);
                               break;
                           case "position":
                               (n = t.split(",")), a.percent(e, n[0]), 2 === n.length && a.alt("positionAlign", n[1], ["start", "center", "end"]);
                               break;
                           case "size":
                               a.percent(e, t);
                               break;
                           case "align":
                               a.alt(e, t, ["start", "center", "end", "left", "right"]);
                       }
                   },
                   /:/,
                   /\s/
               ),
                   (t.region = a.get("region", null)),
                   (t.vertical = a.get("vertical", ""));
               try {
                   t.line = a.get("line", "auto");
               } catch (e) {}
               (t.lineAlign = a.get("lineAlign", "start")), (t.snapToLines = a.get("snapToLines", !0)), (t.size = a.get("size", 100));
               try {
                   t.align = a.get("align", "center");
               } catch (e) {
                   t.align = a.get("align", "middle");
               }
               try {
                   t.position = a.get("position", "auto");
               } catch (e) {
                   t.position = a.get("position", { start: 0, left: 0, center: 50, middle: 50, end: 100, right: 100 }, t.align);
               }
               t.positionAlign = a.get("positionAlign", { start: "start", left: "start", center: "center", middle: "center", end: "end", right: "end" }, t.align);
           })(t, e);
   }
   (((_i.prototype = vi(Error.prototype)).constructor = _i).Errors = { BadSignature: { code: 0, message: "Malformed WebVTT signature." }, BadTimeStamp: { code: 1, message: "Malformed time stamp." } }),
       (Ti.prototype = {
           set: function (e, t) {
               this.get(e) || "" === t || (this.values[e] = t);
           },
           get: function (e, t, i) {
               return i ? (this.has(e) ? this.values[e] : t[i]) : this.has(e) ? this.values[e] : t;
           },
           has: function (e) {
               return e in this.values;
           },
           alt: function (e, t, i) {
               for (var n = 0; n < i.length; ++n)
                   if (t === i[n]) {
                       this.set(e, t);
                       break;
                   }
           },
           integer: function (e, t) {
               /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
           },
           percent: function (e, t) {
               return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (t = parseFloat(t)) && t <= 100) && (this.set(e, t), !0);
           },
       });
   var Ci = d.createElement("textarea"),
       Ei = { c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span" },
       wi = { white: "rgba(255,255,255,1)", lime: "rgba(0,255,0,1)", cyan: "rgba(0,255,255,1)", red: "rgba(255,0,0,1)", yellow: "rgba(255,255,0,1)", magenta: "rgba(255,0,255,1)", blue: "rgba(0,0,255,1)", black: "rgba(0,0,0,1)" },
       Ii = { v: "title", lang: "lang" },
       Ai = { rt: "ruby" };
   function xi(a, i) {
       function e() {
           if (!i) return null;
           var e,
               t = i.match(/^([^<]*)(<[^>]*>?)?/);
           return (e = t[1] ? t[1] : t[2]), (i = i.substr(e.length)), e;
       }
       function t(e, t) {
           var i = Ei[e];
           if (!i) return null;
           var n = a.document.createElement(i),
               r = Ii[e];
           return r && t && (n[r] = t.trim()), n;
       }
       for (var n, r, s, o, u = a.document.createElement("div"), l = u, c = []; null !== (n = e()); )
           if ("<" !== n[0]) l.appendChild(a.document.createTextNode(((r = n), (Ci.innerHTML = r), (r = Ci.textContent), (Ci.textContent = ""), r)));
           else {
               if ("/" === n[1]) {
                   c.length && c[c.length - 1] === n.substr(2).replace(">", "") && (c.pop(), (l = l.parentNode));
                   continue;
               }
               var d,
                   h = bi(n.substr(1, n.length - 2));
               if (h) {
                   (d = a.document.createProcessingInstruction("timestamp", h)), l.appendChild(d);
                   continue;
               }
               var p = n.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
               if (!p) continue;
               if (!(d = t(p[1], p[3]))) continue;
               if (((s = l), Ai[(o = d).localName] && Ai[o.localName] !== s.localName)) continue;
               if (p[2]) {
                   var f = p[2].split(".");
                   f.forEach(function (e) {
                       var t = /^bg_/.test(e),
                           i = t ? e.slice(3) : e;
                       if (wi.hasOwnProperty(i)) {
                           var n = t ? "background-color" : "color",
                               r = wi[i];
                           d.style[n] = r;
                       }
                   }),
                       (d.className = f.join(" "));
               }
               c.push(p[1]), l.appendChild(d), (l = d);
           }
       return u;
   }
   var Pi = [
       [1470, 1470],
       [1472, 1472],
       [1475, 1475],
       [1478, 1478],
       [1488, 1514],
       [1520, 1524],
       [1544, 1544],
       [1547, 1547],
       [1549, 1549],
       [1563, 1563],
       [1566, 1610],
       [1645, 1647],
       [1649, 1749],
       [1765, 1766],
       [1774, 1775],
       [1786, 1805],
       [1807, 1808],
       [1810, 1839],
       [1869, 1957],
       [1969, 1969],
       [1984, 2026],
       [2036, 2037],
       [2042, 2042],
       [2048, 2069],
       [2074, 2074],
       [2084, 2084],
       [2088, 2088],
       [2096, 2110],
       [2112, 2136],
       [2142, 2142],
       [2208, 2208],
       [2210, 2220],
       [8207, 8207],
       [64285, 64285],
       [64287, 64296],
       [64298, 64310],
       [64312, 64316],
       [64318, 64318],
       [64320, 64321],
       [64323, 64324],
       [64326, 64449],
       [64467, 64829],
       [64848, 64911],
       [64914, 64967],
       [65008, 65020],
       [65136, 65140],
       [65142, 65276],
       [67584, 67589],
       [67592, 67592],
       [67594, 67637],
       [67639, 67640],
       [67644, 67644],
       [67647, 67669],
       [67671, 67679],
       [67840, 67867],
       [67872, 67897],
       [67903, 67903],
       [67968, 68023],
       [68030, 68031],
       [68096, 68096],
       [68112, 68115],
       [68117, 68119],
       [68121, 68147],
       [68160, 68167],
       [68176, 68184],
       [68192, 68223],
       [68352, 68405],
       [68416, 68437],
       [68440, 68466],
       [68472, 68479],
       [68608, 68680],
       [126464, 126467],
       [126469, 126495],
       [126497, 126498],
       [126500, 126500],
       [126503, 126503],
       [126505, 126514],
       [126516, 126519],
       [126521, 126521],
       [126523, 126523],
       [126530, 126530],
       [126535, 126535],
       [126537, 126537],
       [126539, 126539],
       [126541, 126543],
       [126545, 126546],
       [126548, 126548],
       [126551, 126551],
       [126553, 126553],
       [126555, 126555],
       [126557, 126557],
       [126559, 126559],
       [126561, 126562],
       [126564, 126564],
       [126567, 126570],
       [126572, 126578],
       [126580, 126583],
       [126585, 126588],
       [126590, 126590],
       [126592, 126601],
       [126603, 126619],
       [126625, 126627],
       [126629, 126633],
       [126635, 126651],
       [1114109, 1114109],
   ];
   function Li(e) {
       for (var t = 0; t < Pi.length; t++) {
           var i = Pi[t];
           if (e >= i[0] && e <= i[1]) return !0;
       }
       return !1;
   }
   function Oi() {}
   function Di(e, t, i) {
       Oi.call(this), (this.cue = t), (this.cueDiv = xi(e, t.text));
       var n = {
           color: "rgba(255, 255, 255, 1)",
           backgroundColor: "rgba(0, 0, 0, 0.8)",
           position: "relative",
           left: 0,
           right: 0,
           top: 0,
           bottom: 0,
           display: "inline",
           writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
           unicodeBidi: "plaintext",
       };
       this.applyStyles(n, this.cueDiv),
           (this.div = e.document.createElement("div")),
           (n = {
               direction: (function (e) {
                   var t = [],
                       i = "";
                   if (!e || !e.childNodes) return "ltr";
                   function r(e, t) {
                       for (var i = t.childNodes.length - 1; 0 <= i; i--) e.push(t.childNodes[i]);
                   }
                   function a(e) {
                       if (!e || !e.length) return null;
                       var t = e.pop(),
                           i = t.textContent || t.innerText;
                       if (i) {
                           var n = i.match(/^.*(\n|\r)/);
                           return n ? n[(e.length = 0)] : i;
                       }
                       return "ruby" === t.tagName ? a(e) : t.childNodes ? (r(e, t), a(e)) : void 0;
                   }
                   for (r(t, e); (i = a(t)); ) for (var n = 0; n < i.length; n++) if (Li(i.charCodeAt(n))) return "rtl";
                   return "ltr";
               })(this.cueDiv),
               writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
               unicodeBidi: "plaintext",
               textAlign: "middle" === t.align ? "center" : t.align,
               font: i.font,
               whiteSpace: "pre-line",
               position: "absolute",
           }),
           this.applyStyles(n),
           this.div.appendChild(this.cueDiv);
       var r = 0;
       switch (t.positionAlign) {
           case "start":
               r = t.position;
               break;
           case "center":
               r = t.position - t.size / 2;
               break;
           case "end":
               r = t.position - t.size;
       }
       "" === t.vertical ? this.applyStyles({ left: this.formatStyle(r, "%"), width: this.formatStyle(t.size, "%") }) : this.applyStyles({ top: this.formatStyle(r, "%"), height: this.formatStyle(t.size, "%") }),
           (this.move = function (e) {
               this.applyStyles({
                   top: this.formatStyle(e.top, "px"),
                   bottom: this.formatStyle(e.bottom, "px"),
                   left: this.formatStyle(e.left, "px"),
                   right: this.formatStyle(e.right, "px"),
                   height: this.formatStyle(e.height, "px"),
                   width: this.formatStyle(e.width, "px"),
               });
           });
   }
   function Mi(e) {
       var t, i, n, r;
       if (e.div) {
           (i = e.div.offsetHeight), (n = e.div.offsetWidth), (r = e.div.offsetTop);
           var a = (a = e.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
           (e = e.div.getBoundingClientRect()), (t = a ? Math.max((a[0] && a[0].height) || 0, e.height / a.length) : 0);
       }
       (this.left = e.left), (this.right = e.right), (this.top = e.top || r), (this.height = e.height || i), (this.bottom = e.bottom || r + (e.height || i)), (this.width = e.width || n), (this.lineHeight = void 0 !== t ? t : e.lineHeight);
   }
   function Ri(e, t, o, u) {
       var i = new Mi(t),
           n = t.cue,
           r = (function (e) {
               if ("number" == typeof e.line && (e.snapToLines || (0 <= e.line && e.line <= 100))) return e.line;
               if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return -1;
               for (var t = e.track, i = t.textTrackList, n = 0, r = 0; r < i.length && i[r] !== t; r++) "showing" === i[r].mode && n++;
               return -1 * ++n;
           })(n),
           a = [];
       if (n.snapToLines) {
           var s;
           switch (n.vertical) {
               case "":
                   (a = ["+y", "-y"]), (s = "height");
                   break;
               case "rl":
                   (a = ["+x", "-x"]), (s = "width");
                   break;
               case "lr":
                   (a = ["-x", "+x"]), (s = "width");
           }
           var l = i.lineHeight,
               c = l * Math.round(r),
               d = o[s] + l,
               h = a[0];
           Math.abs(c) > d && ((c = c < 0 ? -1 : 1), (c *= Math.ceil(d / l) * l)), r < 0 && ((c += "" === n.vertical ? o.height : o.width), (a = a.reverse())), i.move(h, c);
       } else {
           var p = (i.lineHeight / o.height) * 100;
           switch (n.lineAlign) {
               case "center":
                   r -= p / 2;
                   break;
               case "end":
                   r -= p;
           }
           switch (n.vertical) {
               case "":
                   t.applyStyles({ top: t.formatStyle(r, "%") });
                   break;
               case "rl":
                   t.applyStyles({ left: t.formatStyle(r, "%") });
                   break;
               case "lr":
                   t.applyStyles({ right: t.formatStyle(r, "%") });
           }
           (a = ["+y", "-x", "+x", "-y"]), (i = new Mi(t));
       }
       var f = (function (e, t) {
           for (var i, n = new Mi(e), r = 1, a = 0; a < t.length; a++) {
               for (; e.overlapsOppositeAxis(o, t[a]) || (e.within(o) && e.overlapsAny(u)); ) e.move(t[a]);
               if (e.within(o)) return e;
               var s = e.intersectPercentage(o);
               s < r && ((i = new Mi(e)), (r = s)), (e = new Mi(n));
           }
           return i || n;
       })(i, a);
       t.move(f.toCSSCompatValues(o));
   }
   function Ni() {}
   (Oi.prototype.applyStyles = function (e, t) {
       for (var i in ((t = t || this.div), e)) e.hasOwnProperty(i) && (t.style[i] = e[i]);
   }),
       (Oi.prototype.formatStyle = function (e, t) {
           return 0 === e ? 0 : e + t;
       }),
       ((Di.prototype = vi(Oi.prototype)).constructor = Di),
       (Mi.prototype.move = function (e, t) {
           switch (((t = void 0 !== t ? t : this.lineHeight), e)) {
               case "+x":
                   (this.left += t), (this.right += t);
                   break;
               case "-x":
                   (this.left -= t), (this.right -= t);
                   break;
               case "+y":
                   (this.top += t), (this.bottom += t);
                   break;
               case "-y":
                   (this.top -= t), (this.bottom -= t);
           }
       }),
       (Mi.prototype.overlaps = function (e) {
           return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top;
       }),
       (Mi.prototype.overlapsAny = function (e) {
           for (var t = 0; t < e.length; t++) if (this.overlaps(e[t])) return !0;
           return !1;
       }),
       (Mi.prototype.within = function (e) {
           return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right;
       }),
       (Mi.prototype.overlapsOppositeAxis = function (e, t) {
           switch (t) {
               case "+x":
                   return this.left < e.left;
               case "-x":
                   return this.right > e.right;
               case "+y":
                   return this.top < e.top;
               case "-y":
                   return this.bottom > e.bottom;
           }
       }),
       (Mi.prototype.intersectPercentage = function (e) {
           return (Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top))) / (this.height * this.width);
       }),
       (Mi.prototype.toCSSCompatValues = function (e) {
           return { top: this.top - e.top, bottom: e.bottom - this.bottom, left: this.left - e.left, right: e.right - this.right, height: this.height, width: this.width };
       }),
       (Mi.getSimpleBoxPosition = function (e) {
           var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0,
               i = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0,
               n = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
           return { left: (e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e).left, right: e.right, top: e.top || n, height: e.height || t, bottom: e.bottom || n + (e.height || t), width: e.width || i };
       }),
       (Ni.StringDecoder = function () {
           return {
               decode: function (e) {
                   if (!e) return "";
                   if ("string" != typeof e) throw new Error("Error - expected string data.");
                   return decodeURIComponent(encodeURIComponent(e));
               },
           };
       }),
       (Ni.convertCueToDOMTree = function (e, t) {
           return e && t ? xi(e, t) : null;
       });
   (Ni.processCues = function (n, r, e) {
       if (!n || !r || !e) return null;
       for (; e.firstChild; ) e.removeChild(e.firstChild);
       var a = n.document.createElement("div");
       if (
           ((a.style.position = "absolute"),
           (a.style.left = "0"),
           (a.style.right = "0"),
           (a.style.top = "0"),
           (a.style.bottom = "0"),
           (a.style.margin = "1.5%"),
           e.appendChild(a),
           (function (e) {
               for (var t = 0; t < e.length; t++) if (e[t].hasBeenReset || !e[t].displayState) return !0;
               return !1;
           })(r))
       ) {
           var s = [],
               o = Mi.getSimpleBoxPosition(a),
               u = { font: Math.round(0.05 * o.height * 100) / 100 + "px sans-serif" };
           !(function () {
               for (var e, t, i = 0; i < r.length; i++) (t = r[i]), (e = new Di(n, t, u)), a.appendChild(e.div), Ri(0, e, o, s), (t.displayState = e.div), s.push(Mi.getSimpleBoxPosition(e));
           })();
       } else for (var t = 0; t < r.length; t++) a.appendChild(r[t].displayState);
   }),
       ((Ni.Parser = function (e, t, i) {
           i || ((i = t), (t = {})), (t = t || {}), (this.window = e), (this.vttjs = t), (this.state = "INITIAL"), (this.buffer = ""), (this.decoder = i || new TextDecoder("utf8")), (this.regionList = []);
       }).prototype = {
           reportOrThrowError: function (e) {
               if (!(e instanceof _i)) throw e;
               this.onparsingerror && this.onparsingerror(e);
           },
           parse: function (e) {
               var n = this;
               function t() {
                   for (var e = n.buffer, t = 0; t < e.length && "\r" !== e[t] && "\n" !== e[t]; ) ++t;
                   var i = e.substr(0, t);
                   return "\r" === e[t] && ++t, "\n" === e[t] && ++t, (n.buffer = e.substr(t)), i;
               }
               function i(e) {
                   e.match(/X-TIMESTAMP-MAP/)
                       ? Si(
                             e,
                             function (e, t) {
                                 switch (e) {
                                     case "X-TIMESTAMP-MAP":
                                         !(function (e) {
                                             var i = new Ti();
                                             Si(
                                                 e,
                                                 function (e, t) {
                                                     switch (e) {
                                                         case "MPEGT":
                                                             i.integer(e + "S", t);
                                                             break;
                                                         case "LOCA":
                                                             i.set(e + "L", bi(t));
                                                     }
                                                 },
                                                 /[^\d]:/,
                                                 /,/
                                             ),
                                                 n.ontimestampmap && n.ontimestampmap({ MPEGTS: i.get("MPEGTS"), LOCAL: i.get("LOCAL") });
                                         })(t);
                                 }
                             },
                             /=/
                         )
                       : Si(
                             e,
                             function (e, t) {
                                 switch (e) {
                                     case "Region":
                                         !(function (e) {
                                             var r = new Ti();
                                             if (
                                                 (Si(
                                                     e,
                                                     function (e, t) {
                                                         switch (e) {
                                                             case "id":
                                                                 r.set(e, t);
                                                                 break;
                                                             case "width":
                                                                 r.percent(e, t);
                                                                 break;
                                                             case "lines":
                                                                 r.integer(e, t);
                                                                 break;
                                                             case "regionanchor":
                                                             case "viewportanchor":
                                                                 var i = t.split(",");
                                                                 if (2 !== i.length) break;
                                                                 var n = new Ti();
                                                                 if ((n.percent("x", i[0]), n.percent("y", i[1]), !n.has("x") || !n.has("y"))) break;
                                                                 r.set(e + "X", n.get("x")), r.set(e + "Y", n.get("y"));
                                                                 break;
                                                             case "scroll":
                                                                 r.alt(e, t, ["up"]);
                                                         }
                                                     },
                                                     /=/,
                                                     /\s/
                                                 ),
                                                 r.has("id"))
                                             ) {
                                                 var t = new (n.vttjs.VTTRegion || n.window.VTTRegion)();
                                                 (t.width = r.get("width", 100)),
                                                     (t.lines = r.get("lines", 3)),
                                                     (t.regionAnchorX = r.get("regionanchorX", 0)),
                                                     (t.regionAnchorY = r.get("regionanchorY", 100)),
                                                     (t.viewportAnchorX = r.get("viewportanchorX", 0)),
                                                     (t.viewportAnchorY = r.get("viewportanchorY", 100)),
                                                     (t.scroll = r.get("scroll", "")),
                                                     n.onregion && n.onregion(t),
                                                     n.regionList.push({ id: r.get("id"), region: t });
                                             }
                                         })(t);
                                 }
                             },
                             /:/
                         );
               }
               e && (n.buffer += n.decoder.decode(e, { stream: !0 }));
               try {
                   var r;
                   if ("INITIAL" === n.state) {
                       if (!/\r\n|\n/.test(n.buffer)) return this;
                       var a = (r = t()).match(/^WEBVTT([ \t].*)?$/);
                       if (!a || !a[0]) throw new _i(_i.Errors.BadSignature);
                       n.state = "HEADER";
                   }
                   for (var s = !1; n.buffer; ) {
                       if (!/\r\n|\n/.test(n.buffer)) return this;
                       switch ((s ? (s = !1) : (r = t()), n.state)) {
                           case "HEADER":
                               /:/.test(r) ? i(r) : r || (n.state = "ID");
                               continue;
                           case "NOTE":
                               r || (n.state = "ID");
                               continue;
                           case "ID":
                               if (/^NOTE($|[ \t])/.test(r)) {
                                   n.state = "NOTE";
                                   break;
                               }
                               if (!r) continue;
                               n.cue = new (n.vttjs.VTTCue || n.window.VTTCue)(0, 0, "");
                               try {
                                   n.cue.align = "center";
                               } catch (e) {
                                   n.cue.align = "middle";
                               }
                               if (((n.state = "CUE"), -1 === r.indexOf("--\x3e"))) {
                                   n.cue.id = r;
                                   continue;
                               }
                           case "CUE":
                               try {
                                   ki(r, n.cue, n.regionList);
                               } catch (e) {
                                   n.reportOrThrowError(e), (n.cue = null), (n.state = "BADCUE");
                                   continue;
                               }
                               n.state = "CUETEXT";
                               continue;
                           case "CUETEXT":
                               var o = -1 !== r.indexOf("--\x3e");
                               if (!r || (o && (s = !0))) {
                                   n.oncue && n.oncue(n.cue), (n.cue = null), (n.state = "ID");
                                   continue;
                               }
                               n.cue.text && (n.cue.text += "\n"), (n.cue.text += r.replace(/\u2028/g, "\n").replace(/u2029/g, "\n"));
                               continue;
                           case "BADCUE":
                               r || (n.state = "ID");
                               continue;
                       }
                   }
               } catch (e) {
                   n.reportOrThrowError(e), "CUETEXT" === n.state && n.cue && n.oncue && n.oncue(n.cue), (n.cue = null), (n.state = "INITIAL" === n.state ? "BADWEBVTT" : "BADCUE");
               }
               return this;
           },
           flush: function () {
               var t = this;
               try {
                   if (((t.buffer += t.decoder.decode()), (!t.cue && "HEADER" !== t.state) || ((t.buffer += "\n\n"), t.parse()), "INITIAL" === t.state)) throw new _i(_i.Errors.BadSignature);
               } catch (e) {
                   t.reportOrThrowError(e);
               }
               return t.onflush && t.onflush(), this;
           },
       });
   var Ui = Ni,
       Fi = { "": 1, lr: 1, rl: 1 },
       Bi = { start: 1, center: 1, end: 1, left: 1, right: 1, auto: 1, "line-left": 1, "line-right": 1 };
   function ji(e) {
       return "string" == typeof e && !!Bi[e.toLowerCase()] && e.toLowerCase();
   }
   function Vi(e, t, i) {
       this.hasBeenReset = !1;
       var n = "",
           r = !1,
           a = e,
           s = t,
           o = i,
           u = null,
           l = "",
           c = !0,
           d = "auto",
           h = "start",
           p = "auto",
           f = "auto",
           m = 100,
           g = "center";
       Object.defineProperties(this, {
           id: {
               enumerable: !0,
               get: function () {
                   return n;
               },
               set: function (e) {
                   n = "" + e;
               },
           },
           pauseOnExit: {
               enumerable: !0,
               get: function () {
                   return r;
               },
               set: function (e) {
                   r = !!e;
               },
           },
           startTime: {
               enumerable: !0,
               get: function () {
                   return a;
               },
               set: function (e) {
                   if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                   (a = e), (this.hasBeenReset = !0);
               },
           },
           endTime: {
               enumerable: !0,
               get: function () {
                   return s;
               },
               set: function (e) {
                   if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                   (s = e), (this.hasBeenReset = !0);
               },
           },
           text: {
               enumerable: !0,
               get: function () {
                   return o;
               },
               set: function (e) {
                   (o = "" + e), (this.hasBeenReset = !0);
               },
           },
           region: {
               enumerable: !0,
               get: function () {
                   return u;
               },
               set: function (e) {
                   (u = e), (this.hasBeenReset = !0);
               },
           },
           vertical: {
               enumerable: !0,
               get: function () {
                   return l;
               },
               set: function (e) {
                   var t = (function (e) {
                       return "string" == typeof e && !!Fi[e.toLowerCase()] && e.toLowerCase();
                   })(e);
                   if (!1 === t) throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");
                   (l = t), (this.hasBeenReset = !0);
               },
           },
           snapToLines: {
               enumerable: !0,
               get: function () {
                   return c;
               },
               set: function (e) {
                   (c = !!e), (this.hasBeenReset = !0);
               },
           },
           line: {
               enumerable: !0,
               get: function () {
                   return d;
               },
               set: function (e) {
                   if ("number" != typeof e && "auto" !== e) throw new SyntaxError("Line: an invalid number or illegal string was specified.");
                   (d = e), (this.hasBeenReset = !0);
               },
           },
           lineAlign: {
               enumerable: !0,
               get: function () {
                   return h;
               },
               set: function (e) {
                   var t = ji(e);
                   t && ((h = t), (this.hasBeenReset = !0));
               },
           },
           position: {
               enumerable: !0,
               get: function () {
                   return p;
               },
               set: function (e) {
                   if (e < 0 || 100 < e) throw new Error("Position must be between 0 and 100.");
                   (p = e), (this.hasBeenReset = !0);
               },
           },
           positionAlign: {
               enumerable: !0,
               get: function () {
                   return f;
               },
               set: function (e) {
                   var t = ji(e);
                   t && ((f = t), (this.hasBeenReset = !0));
               },
           },
           size: {
               enumerable: !0,
               get: function () {
                   return m;
               },
               set: function (e) {
                   if (e < 0 || 100 < e) throw new Error("Size must be between 0 and 100.");
                   (m = e), (this.hasBeenReset = !0);
               },
           },
           align: {
               enumerable: !0,
               get: function () {
                   return g;
               },
               set: function (e) {
                   var t = ji(e);
                   if (!t) throw new SyntaxError("align: an invalid or illegal alignment string was specified.");
                   (g = t), (this.hasBeenReset = !0);
               },
           },
       }),
           (this.displayState = void 0);
   }
   Vi.prototype.getCueAsHTML = function () {
       return WebVTT.convertCueToDOMTree(window, this.text);
   };
   var qi = Vi,
       Hi = { "": !0, up: !0 };
   function Wi(e) {
       return "number" == typeof e && 0 <= e && e <= 100;
   }
   function zi() {
       var t = 100,
           i = 3,
           n = 0,
           r = 100,
           a = 0,
           s = 100,
           o = "";
       Object.defineProperties(this, {
           width: {
               enumerable: !0,
               get: function () {
                   return t;
               },
               set: function (e) {
                   if (!Wi(e)) throw new Error("Width must be between 0 and 100.");
                   t = e;
               },
           },
           lines: {
               enumerable: !0,
               get: function () {
                   return i;
               },
               set: function (e) {
                   if ("number" != typeof e) throw new TypeError("Lines must be set to a number.");
                   i = e;
               },
           },
           regionAnchorY: {
               enumerable: !0,
               get: function () {
                   return r;
               },
               set: function (e) {
                   if (!Wi(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
                   r = e;
               },
           },
           regionAnchorX: {
               enumerable: !0,
               get: function () {
                   return n;
               },
               set: function (e) {
                   if (!Wi(e)) throw new Error("RegionAnchorY must be between 0 and 100.");
                   n = e;
               },
           },
           viewportAnchorY: {
               enumerable: !0,
               get: function () {
                   return s;
               },
               set: function (e) {
                   if (!Wi(e)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                   s = e;
               },
           },
           viewportAnchorX: {
               enumerable: !0,
               get: function () {
                   return a;
               },
               set: function (e) {
                   if (!Wi(e)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                   a = e;
               },
           },
           scroll: {
               enumerable: !0,
               get: function () {
                   return o;
               },
               set: function (e) {
                   var t = (function (e) {
                       return "string" == typeof e && !!Hi[e.toLowerCase()] && e.toLowerCase();
                   })(e);
                   !1 === t || (o = t);
               },
           },
       });
   }
   var Gi = i(function (e) {
       var t = (e.exports = { WebVTT: Ui, VTTCue: qi, VTTRegion: zi });
       (T.vttjs = t), (T.WebVTT = t.WebVTT);
       var i = t.VTTCue,
           n = t.VTTRegion,
           r = T.VTTCue,
           a = T.VTTRegion;
       (t.shim = function () {
           (T.VTTCue = i), (T.VTTRegion = n);
       }),
           (t.restore = function () {
               (T.VTTCue = r), (T.VTTRegion = a);
           }),
           T.VTTCue || t.shim();
   });
   Gi.WebVTT, Gi.VTTCue, Gi.VTTRegion;
   var Xi = (function (t) {
       function i(i, e) {
           var n;
           return (
               void 0 === i && (i = {}),
               void 0 === e && (e = function () {}),
               (i.reportTouchActivity = !1),
               ((n = t.call(this, null, i, e) || this).hasStarted_ = !1),
               n.on("playing", function () {
                   this.hasStarted_ = !0;
               }),
               n.on("loadstart", function () {
                   this.hasStarted_ = !1;
               }),
               gi.names.forEach(function (e) {
                   var t = gi[e];
                   i && i[t.getterName] && (n[t.privateName] = i[t.getterName]);
               }),
               n.featuresProgressEvents || n.manualProgressOn(),
               n.featuresTimeupdateEvents || n.manualTimeUpdatesOn(),
               ["Text", "Audio", "Video"].forEach(function (e) {
                   !1 === i["native" + e + "Tracks"] && (n["featuresNative" + e + "Tracks"] = !1);
               }),
               !1 === i.nativeCaptions || !1 === i.nativeTextTracks ? (n.featuresNativeTextTracks = !1) : (!0 !== i.nativeCaptions && !0 !== i.nativeTextTracks) || (n.featuresNativeTextTracks = !0),
               n.featuresNativeTextTracks || n.emulateTextTracks(),
               (n.preloadTextTracks = !1 !== i.preloadTextTracks),
               (n.autoRemoteTextTracks_ = new gi.text.ListClass()),
               n.initTrackListeners(),
               i.nativeControlsForTouch || n.emitTapEvents(),
               n.constructor && (n.name_ = n.constructor.name || "Unknown Tech"),
               n
           );
       }
       Ge(i, t);
       var e = i.prototype;
       return (
           (e.triggerSourceset = function (e) {
               var t = this;
               this.isReady_ ||
                   this.one("ready", function () {
                       return t.setTimeout(function () {
                           return t.triggerSourceset(e);
                       }, 1);
                   }),
                   this.trigger({ src: e, type: "sourceset" });
           }),
           (e.manualProgressOn = function () {
               this.on("durationchange", this.onDurationChange), (this.manualProgress = !0), this.one("ready", this.trackProgress);
           }),
           (e.manualProgressOff = function () {
               (this.manualProgress = !1), this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange);
           }),
           (e.trackProgress = function (e) {
               this.stopTrackingProgress(),
                   (this.progressInterval = this.setInterval(
                       ve(this, function () {
                           var e = this.bufferedPercent();
                           this.bufferedPercent_ !== e && this.trigger("progress"), 1 === (this.bufferedPercent_ = e) && this.stopTrackingProgress();
                       }),
                       500
                   ));
           }),
           (e.onDurationChange = function (e) {
               this.duration_ = this.duration();
           }),
           (e.buffered = function () {
               return gt(0, 0);
           }),
           (e.bufferedPercent = function () {
               return vt(this.buffered(), this.duration_);
           }),
           (e.stopTrackingProgress = function () {
               this.clearInterval(this.progressInterval);
           }),
           (e.manualTimeUpdatesOn = function () {
               (this.manualTimeUpdates = !0), this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime);
           }),
           (e.manualTimeUpdatesOff = function () {
               (this.manualTimeUpdates = !1), this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime);
           }),
           (e.trackCurrentTime = function () {
               this.currentTimeInterval && this.stopTrackingCurrentTime(),
                   (this.currentTimeInterval = this.setInterval(function () {
                       this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 });
                   }, 250));
           }),
           (e.stopTrackingCurrentTime = function () {
               this.clearInterval(this.currentTimeInterval), this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 });
           }),
           (e.dispose = function () {
               this.clearTracks(fi.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this);
           }),
           (e.clearTracks = function (e) {
               var r = this;
               (e = [].concat(e)).forEach(function (e) {
                   for (var t = r[e + "Tracks"]() || [], i = t.length; i--; ) {
                       var n = t[i];
                       "text" === e && r.removeRemoteTextTrack(n), t.removeTrack(n);
                   }
               });
           }),
           (e.cleanupAutoTextTracks = function () {
               for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--; ) {
                   var i = e[t];
                   this.removeRemoteTextTrack(i);
               }
           }),
           (e.reset = function () {}),
           (e.crossOrigin = function () {}),
           (e.setCrossOrigin = function () {}),
           (e.error = function (e) {
               return void 0 !== e && ((this.error_ = new Ct(e)), this.trigger("error")), this.error_;
           }),
           (e.played = function () {
               return this.hasStarted_ ? gt(0, 0) : gt();
           }),
           (e.setScrubbing = function () {}),
           (e.setCurrentTime = function () {
               this.manualTimeUpdates && this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 });
           }),
           (e.initTrackListeners = function () {
               var r = this;
               fi.names.forEach(function (e) {
                   function t() {
                       r.trigger(e + "trackchange");
                   }
                   var i = fi[e],
                       n = r[i.getterName]();
                   n.addEventListener("removetrack", t),
                       n.addEventListener("addtrack", t),
                       r.on("dispose", function () {
                           n.removeEventListener("removetrack", t), n.removeEventListener("addtrack", t);
                       });
               });
           }),
           (e.addWebVttScript_ = function () {
               var e = this;
               if (!T.WebVTT)
                   if (d.body.contains(this.el())) {
                       if (!this.options_["vtt.js"] && o(Gi) && 0 < Object.keys(Gi).length) return void this.trigger("vttjsloaded");
                       var t = d.createElement("script");
                       (t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js"),
                           (t.onload = function () {
                               e.trigger("vttjsloaded");
                           }),
                           (t.onerror = function () {
                               e.trigger("vttjserror");
                           }),
                           this.on("dispose", function () {
                               (t.onload = null), (t.onerror = null);
                           }),
                           (T.WebVTT = !0),
                           this.el().parentNode.appendChild(t);
                   } else this.ready(this.addWebVttScript_);
           }),
           (e.emulateTextTracks = function () {
               function t(e) {
                   return n.addTrack(e.track);
               }
               function i(e) {
                   return n.removeTrack(e.track);
               }
               var e = this,
                   n = this.textTracks(),
                   r = this.remoteTextTracks();
               r.on("addtrack", t), r.on("removetrack", i), this.addWebVttScript_();
               function a() {
                   return e.trigger("texttrackchange");
               }
               function s() {
                   a();
                   for (var e = 0; e < n.length; e++) {
                       var t = n[e];
                       t.removeEventListener("cuechange", a), "showing" === t.mode && t.addEventListener("cuechange", a);
                   }
               }
               s(),
                   n.addEventListener("change", s),
                   n.addEventListener("addtrack", s),
                   n.addEventListener("removetrack", s),
                   this.on("dispose", function () {
                       r.off("addtrack", t), r.off("removetrack", i), n.removeEventListener("change", s), n.removeEventListener("addtrack", s), n.removeEventListener("removetrack", s);
                       for (var e = 0; e < n.length; e++) {
                           n[e].removeEventListener("cuechange", a);
                       }
                   });
           }),
           (e.addTextTrack = function (e, t, i) {
               if (!e) throw new Error("TextTrack kind is required but was not provided");
               return (function (e, t, i, n, r) {
                   void 0 === r && (r = {});
                   var a = e.textTracks();
                   (r.kind = t), i && (r.label = i), n && (r.language = n), (r.tech = e);
                   var s = new gi.text.TrackClass(r);
                   return a.addTrack(s), s;
               })(this, e, t, i);
           }),
           (e.createRemoteTextTrack = function (e) {
               var t = Re(e, { tech: this });
               return new mi.remoteTextEl.TrackClass(t);
           }),
           (e.addRemoteTextTrack = function (e, t) {
               var i = this;
               void 0 === e && (e = {});
               var n = this.createRemoteTextTrack(e);
               return (
                   !0 !== t && !1 !== t && (p.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), (t = !0)),
                   this.remoteTextTrackEls().addTrackElement_(n),
                   this.remoteTextTracks().addTrack(n.track),
                   !0 !== t &&
                       this.ready(function () {
                           return i.autoRemoteTextTracks_.addTrack(n.track);
                       }),
                   n
               );
           }),
           (e.removeRemoteTextTrack = function (e) {
               var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
               this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e);
           }),
           (e.getVideoPlaybackQuality = function () {
               return {};
           }),
           (e.requestPictureInPicture = function () {
               var e = this.options_.Promise || T.Promise;
               if (e) return e.reject();
           }),
           (e.disablePictureInPicture = function () {
               return !0;
           }),
           (e.setDisablePictureInPicture = function () {}),
           (e.setPoster = function () {}),
           (e.playsinline = function () {}),
           (e.setPlaysinline = function () {}),
           (e.overrideNativeAudioTracks = function () {}),
           (e.overrideNativeVideoTracks = function () {}),
           (e.canPlayType = function () {
               return "";
           }),
           (i.canPlayType = function () {
               return "";
           }),
           (i.canPlaySource = function (e, t) {
               return i.canPlayType(e.type);
           }),
           (i.isTech = function (e) {
               return e.prototype instanceof i || e instanceof i || e === i;
           }),
           (i.registerTech = function (e, t) {
               if ((i.techs_ || (i.techs_ = {}), !i.isTech(t))) throw new Error("Tech " + e + " must be a Tech");
               if (!i.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
               if (!i.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
               return (e = Me(e)), (i.techs_[e] = t), (i.techs_[De(e)] = t), "Tech" !== e && i.defaultTechOrder_.push(e), t;
           }),
           (i.getTech = function (e) {
               if (e)
                   return i.techs_ && i.techs_[e]
                       ? i.techs_[e]
                       : ((e = Me(e)), T && T.videojs && T.videojs[e] ? (p.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), T.videojs[e]) : void 0);
           }),
           i
       );
   })(je);
   gi.names.forEach(function (e) {
       var t = gi[e];
       Xi.prototype[t.getterName] = function () {
           return (this[t.privateName] = this[t.privateName] || new t.ListClass()), this[t.privateName];
       };
   }),
       (Xi.prototype.featuresVolumeControl = !0),
       (Xi.prototype.featuresMuteControl = !0),
       (Xi.prototype.featuresFullscreenResize = !1),
       (Xi.prototype.featuresPlaybackRate = !1),
       (Xi.prototype.featuresProgressEvents = !1),
       (Xi.prototype.featuresSourceset = !1),
       (Xi.prototype.featuresTimeupdateEvents = !1),
       (Xi.prototype.featuresNativeTextTracks = !1),
       (Xi.withSourceHandlers = function (r) {
           (r.registerSourceHandler = function (e, t) {
               var i = r.sourceHandlers;
               (i = i || (r.sourceHandlers = [])), void 0 === t && (t = i.length), i.splice(t, 0, e);
           }),
               (r.canPlayType = function (e) {
                   for (var t, i = r.sourceHandlers || [], n = 0; n < i.length; n++) if ((t = i[n].canPlayType(e))) return t;
                   return "";
               }),
               (r.selectSourceHandler = function (e, t) {
                   for (var i = r.sourceHandlers || [], n = 0; n < i.length; n++) if (i[n].canHandleSource(e, t)) return i[n];
                   return null;
               }),
               (r.canPlaySource = function (e, t) {
                   var i = r.selectSourceHandler(e, t);
                   return i ? i.canHandleSource(e, t) : "";
               });
           ["seekable", "seeking", "duration"].forEach(function (e) {
               var t = this[e];
               "function" == typeof t &&
                   (this[e] = function () {
                       return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments);
                   });
           }, r.prototype),
               (r.prototype.setSource = function (e) {
                   var t = r.selectSourceHandler(e, this.options_);
                   t || (r.nativeSourceHandler ? (t = r.nativeSourceHandler) : p.error("No source handler found for the current source.")),
                       this.disposeSourceHandler(),
                       this.off("dispose", this.disposeSourceHandler),
                       t !== r.nativeSourceHandler && (this.currentSource_ = e),
                       (this.sourceHandler_ = t.handleSource(e, this, this.options_)),
                       this.one("dispose", this.disposeSourceHandler);
               }),
               (r.prototype.disposeSourceHandler = function () {
                   this.currentSource_ && (this.clearTracks(["audio", "video"]), (this.currentSource_ = null)),
                       this.cleanupAutoTextTracks(),
                       this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), (this.sourceHandler_ = null));
               });
       }),
       je.registerComponent("Tech", Xi),
       Xi.registerTech("Tech", Xi),
       (Xi.defaultTechOrder_ = []);
   var Ki = {},
       Yi = {},
       $i = {};
   function Qi(e, t, i) {
       e.setTimeout(function () {
           return (function i(n, e, r, a, s, o) {
               void 0 === n && (n = {});
               void 0 === e && (e = []);
               void 0 === s && (s = []);
               void 0 === o && (o = !1);
               var t = e,
                   u = t[0],
                   l = t.slice(1);
               if ("string" == typeof u) i(n, Ki[u], r, a, s, o);
               else if (u) {
                   var c = rn(a, u);
                   if (!c.setSource) return s.push(c), i(n, l, r, a, s, o);
                   c.setSource(g({}, n), function (e, t) {
                       if (e) return i(n, l, r, a, s, o);
                       s.push(c), i(t, n.type === t.type ? l : Ki[t.type], r, a, s, o);
                   });
               } else l.length ? i(n, l, r, a, s, o) : o ? r(n, s) : i(n, Ki["*"], r, a, s, !0);
           })(t, Ki[t.type], i, e);
       }, 1);
   }
   function Ji(e, t, i, n) {
       void 0 === n && (n = null);
       var r = "call" + Me(i),
           a = e.reduce(nn(r), n),
           s = a === $i,
           o = s ? null : t[i](a);
       return (
           (function (e, t, i, n) {
               for (var r = e.length - 1; 0 <= r; r--) {
                   var a = e[r];
                   a[t] && a[t](n, i);
               }
           })(e, i, o, s),
           o
       );
   }
   var Zi = { buffered: 1, currentTime: 1, duration: 1, muted: 1, played: 1, paused: 1, seekable: 1, volume: 1 },
       en = { setCurrentTime: 1, setMuted: 1, setVolume: 1 },
       tn = { play: 1, pause: 1 };
   function nn(i) {
       return function (e, t) {
           return e === $i ? $i : t[i] ? t[i](e) : e;
       };
   }
   function rn(e, t) {
       var i = Yi[e.id()],
           n = null;
       if (null == i) return (n = t(e)), (Yi[e.id()] = [[t, n]]), n;
       for (var r = 0; r < i.length; r++) {
           var a = i[r],
               s = a[0],
               o = a[1];
           s === t && (n = o);
       }
       return null === n && ((n = t(e)), i.push([t, n])), n;
   }
   function an(e) {
       void 0 === e && (e = "");
       var t = Vt(e);
       return sn[t.toLowerCase()] || "";
   }
   var sn = {
       opus: "video/ogg",
       ogv: "video/ogg",
       mp4: "video/mp4",
       mov: "video/mp4",
       m4v: "video/mp4",
       mkv: "video/x-matroska",
       m4a: "audio/mp4",
       mp3: "audio/mpeg",
       aac: "audio/aac",
       caf: "audio/x-caf",
       flac: "audio/flac",
       oga: "audio/ogg",
       wav: "audio/wav",
       m3u8: "application/x-mpegURL",
       jpg: "image/jpeg",
       jpeg: "image/jpeg",
       gif: "image/gif",
       png: "image/png",
       svg: "image/svg+xml",
       webp: "image/webp",
   };
   function on(e) {
       if (!e.type) {
           var t = an(e.src);
           t && (e.type = t);
       }
       return e;
   }
   var un = (function (l) {
       function e(e, t, i) {
           var n,
               r = Re({ createEl: !1 }, t);
           if (((n = l.call(this, e, r, i) || this), t.playerOptions.sources && 0 !== t.playerOptions.sources.length)) e.src(t.playerOptions.sources);
           else
               for (var a = 0, s = t.playerOptions.techOrder; a < s.length; a++) {
                   var o = Me(s[a]),
                       u = Xi.getTech(o);
                   if ((o || (u = je.getComponent(o)), u && u.isSupported())) {
                       e.loadTech_(o);
                       break;
                   }
               }
           return n;
       }
       return Ge(e, l), e;
   })(je);
   je.registerComponent("MediaLoader", un);
   var ln = (function (r) {
       function e(e, t) {
           var i;
           return (i = r.call(this, e, t) || this).emitTapEvents(), i.enable(), i;
       }
       Ge(e, r);
       var t = e.prototype;
       return (
           (t.createEl = function (e, t, i) {
               void 0 === e && (e = "div"),
                   void 0 === t && (t = {}),
                   void 0 === i && (i = {}),
                   (t = g({ innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>', className: this.buildCSSClass(), tabIndex: 0 }, t)),
                   "button" === e && p.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."),
                   (i = g({ role: "button" }, i)),
                   (this.tabIndex_ = t.tabIndex);
               var n = r.prototype.createEl.call(this, e, t, i);
               return this.createControlTextEl(n), n;
           }),
           (t.dispose = function () {
               (this.controlTextEl_ = null), r.prototype.dispose.call(this);
           }),
           (t.createControlTextEl = function (e) {
               return (this.controlTextEl_ = k("span", { className: "vjs-control-text" }, { "aria-live": "polite" })), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_;
           }),
           (t.controlText = function (e, t) {
               if ((void 0 === t && (t = this.el()), void 0 === e)) return this.controlText_ || "Need Text";
               var i = this.localize(e);
               (this.controlText_ = e), C(this.controlTextEl_, i), this.nonIconControl || t.setAttribute("title", i);
           }),
           (t.buildCSSClass = function () {
               return "vjs-control vjs-button " + r.prototype.buildCSSClass.call(this);
           }),
           (t.enable = function () {
               this.enabled_ ||
                   ((this.enabled_ = !0),
                   this.removeClass("vjs-disabled"),
                   this.el_.setAttribute("aria-disabled", "false"),
                   "undefined" != typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_),
                   this.on(["tap", "click"], this.handleClick),
                   this.on("keydown", this.handleKeyDown));
           }),
           (t.disable = function () {
               (this.enabled_ = !1),
                   this.addClass("vjs-disabled"),
                   this.el_.setAttribute("aria-disabled", "true"),
                   "undefined" != typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"),
                   this.off("mouseover", this.handleMouseOver),
                   this.off("mouseout", this.handleMouseOut),
                   this.off(["tap", "click"], this.handleClick),
                   this.off("keydown", this.handleKeyDown);
           }),
           (t.handleClick = function (e) {
               this.options_.clickHandler && this.options_.clickHandler.call(this, arguments);
           }),
           (t.handleKeyDown = function (e) {
               Ot.isEventKey(e, "Space") || Ot.isEventKey(e, "Enter") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : r.prototype.handleKeyDown.call(this, e);
           }),
           e
       );
   })(je);
   je.registerComponent("ClickableComponent", ln);
   var cn = (function (n) {
       function e(e, t) {
           var i;
           return (i = n.call(this, e, t) || this).update(), e.on("posterchange", ve(Ve(i), i.update)), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.dispose = function () {
               this.player().off("posterchange", this.update), n.prototype.dispose.call(this);
           }),
           (t.createEl = function () {
               return k("div", { className: "vjs-poster", tabIndex: -1 });
           }),
           (t.update = function (e) {
               var t = this.player().poster();
               this.setSrc(t), t ? this.show() : this.hide();
           }),
           (t.setSrc = function (e) {
               var t = "";
               e && (t = 'url("' + e + '")'), (this.el_.style.backgroundImage = t);
           }),
           (t.handleClick = function (e) {
               if (this.player_.controls()) {
                   var t = this.player_.usingPlugin("eme") && this.player_.eme.sessions && 0 < this.player_.eme.sessions.length;
                   !this.player_.tech(!0) || ((at || it) && t) || this.player_.tech(!0).focus(), this.player_.paused() ? At(this.player_.play()) : this.player_.pause();
               }
           }),
           e
       );
   })(ln);
   je.registerComponent("PosterImage", cn);
   var dn = "#222",
       hn = {
           monospace: "monospace",
           sansSerif: "sans-serif",
           serif: "serif",
           monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
           monospaceSerif: '"Courier New", monospace',
           proportionalSansSerif: "sans-serif",
           proportionalSerif: "serif",
           casual: '"Comic Sans MS", Impact, fantasy',
           script: '"Monotype Corsiva", cursive',
           smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif',
       };
   function pn(e, t) {
       var i;
       if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
       else {
           if (7 !== e.length) throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
           i = e.slice(1);
       }
       return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")";
   }
   function fn(e, t, i) {
       try {
           e.style[t] = i;
       } catch (e) {
           return;
       }
   }
   var mn = (function (a) {
       function e(i, e, t) {
           var n;
           n = a.call(this, i, e, t) || this;
           var r = ve(Ve(n), n.updateDisplay);
           return (
               i.on("loadstart", ve(Ve(n), n.toggleDisplay)),
               i.on("texttrackchange", r),
               i.on("loadedmetadata", ve(Ve(n), n.preselectTrack)),
               i.ready(
                   ve(Ve(n), function () {
                       if (i.tech_ && i.tech_.featuresNativeTextTracks) this.hide();
                       else {
                           i.on("fullscreenchange", r),
                               i.on("playerresize", r),
                               T.addEventListener("orientationchange", r),
                               i.on("dispose", function () {
                                   return T.removeEventListener("orientationchange", r);
                               });
                           for (var e = this.options_.playerOptions.tracks || [], t = 0; t < e.length; t++) this.player_.addRemoteTextTrack(e[t], !0);
                           this.preselectTrack();
                       }
                   })
               ),
               n
           );
       }
       Ge(e, a);
       var t = e.prototype;
       return (
           (t.preselectTrack = function () {
               for (var e, t, i, n = { captions: 1, subtitles: 1 }, r = this.player_.textTracks(), a = this.player_.cache_.selectedLanguage, s = 0; s < r.length; s++) {
                   var o = r[s];
                   a && a.enabled && a.language && a.language === o.language && o.kind in n
                       ? (i = o.kind === a.kind ? o : i || o)
                       : a && !a.enabled
                       ? (t = e = i = null)
                       : o.default && ("descriptions" !== o.kind || e ? o.kind in n && !t && (t = o) : (e = o));
               }
               i ? (i.mode = "showing") : t ? (t.mode = "showing") : e && (e.mode = "showing");
           }),
           (t.toggleDisplay = function () {
               this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show();
           }),
           (t.createEl = function () {
               return a.prototype.createEl.call(this, "div", { className: "vjs-text-track-display" }, { "aria-live": "off", "aria-atomic": "true" });
           }),
           (t.clearDisplay = function () {
               "function" == typeof T.WebVTT && T.WebVTT.processCues(T, [], this.el_);
           }),
           (t.updateDisplay = function () {
               var e = this.player_.textTracks(),
                   t = this.options_.allowMultipleShowingTracks;
               if ((this.clearDisplay(), t)) {
                   for (var i = [], n = 0; n < e.length; ++n) {
                       var r = e[n];
                       "showing" === r.mode && i.push(r);
                   }
                   this.updateForTrack(i);
               } else {
                   for (var a = null, s = null, o = e.length; o--; ) {
                       var u = e[o];
                       "showing" === u.mode && ("descriptions" === u.kind ? (a = u) : (s = u));
                   }
                   s
                       ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(s))
                       : a && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(a));
               }
           }),
           (t.updateDisplayState = function (e) {
               for (var t = this.player_.textTrackSettings.getValues(), i = e.activeCues, n = i.length; n--; ) {
                   var r = i[n];
                   if (r) {
                       var a = r.displayState;
                       if (
                           (t.color && (a.firstChild.style.color = t.color),
                           t.textOpacity && fn(a.firstChild, "color", pn(t.color || "#fff", t.textOpacity)),
                           t.backgroundColor && (a.firstChild.style.backgroundColor = t.backgroundColor),
                           t.backgroundOpacity && fn(a.firstChild, "backgroundColor", pn(t.backgroundColor || "#000", t.backgroundOpacity)),
                           t.windowColor && (t.windowOpacity ? fn(a, "backgroundColor", pn(t.windowColor, t.windowOpacity)) : (a.style.backgroundColor = t.windowColor)),
                           t.edgeStyle &&
                               ("dropshadow" === t.edgeStyle
                                   ? (a.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px " + dn)
                                   : "raised" === t.edgeStyle
                                   ? (a.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px " + dn)
                                   : "depressed" === t.edgeStyle
                                   ? (a.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px " + dn)
                                   : "uniform" === t.edgeStyle && (a.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px " + dn)),
                           t.fontPercent && 1 !== t.fontPercent)
                       ) {
                           var s = T.parseFloat(a.style.fontSize);
                           (a.style.fontSize = s * t.fontPercent + "px"), (a.style.height = "auto"), (a.style.top = "auto");
                       }
                       t.fontFamily && "default" !== t.fontFamily && ("small-caps" === t.fontFamily ? (a.firstChild.style.fontVariant = "small-caps") : (a.firstChild.style.fontFamily = hn[t.fontFamily]));
                   }
               }
           }),
           (t.updateForTrack = function (e) {
               if (
                   (Array.isArray(e) || (e = [e]),
                   "function" == typeof T.WebVTT &&
                       !e.every(function (e) {
                           return !e.activeCues;
                       }))
               ) {
                   for (var t = [], i = 0; i < e.length; ++i) for (var n = e[i], r = 0; r < n.activeCues.length; ++r) t.push(n.activeCues[r]);
                   T.WebVTT.processCues(T, t, this.el_);
                   for (var a = 0; a < e.length; ++a) {
                       for (var s = e[a], o = 0; o < s.activeCues.length; ++o) {
                           var u = s.activeCues[o].displayState;
                           I(u, "vjs-text-track-cue"), I(u, "vjs-text-track-cue-" + (s.language ? s.language : a));
                       }
                       this.player_.textTrackSettings && this.updateDisplayState(s);
                   }
               }
           }),
           e
       );
   })(je);
   je.registerComponent("TextTrackDisplay", mn);
   var gn = (function (r) {
       function e() {
           return r.apply(this, arguments) || this;
       }
       return (
           Ge(e, r),
           (e.prototype.createEl = function () {
               var e = this.player_.isAudio(),
                   t = this.localize(e ? "Audio Player" : "Video Player"),
                   i = k("span", { className: "vjs-control-text", innerHTML: this.localize("{1} is loading.", [t]) }),
                   n = r.prototype.createEl.call(this, "div", { className: "vjs-loading-spinner", dir: "ltr" });
               return n.appendChild(i), n;
           }),
           e
       );
   })(je);
   je.registerComponent("LoadingSpinner", gn);
   var vn = (function (t) {
       function e() {
           return t.apply(this, arguments) || this;
       }
       Ge(e, t);
       var i = e.prototype;
       return (
           (i.createEl = function (e, t, i) {
               void 0 === t && (t = {}), void 0 === i && (i = {}), (t = g({ innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>', className: this.buildCSSClass() }, t)), (i = g({ type: "button" }, i));
               var n = je.prototype.createEl.call(this, "button", t, i);
               return this.createControlTextEl(n), n;
           }),
           (i.addChild = function (e, t) {
               void 0 === t && (t = {});
               var i = this.constructor.name;
               return p.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), je.prototype.addChild.call(this, e, t);
           }),
           (i.enable = function () {
               t.prototype.enable.call(this), this.el_.removeAttribute("disabled");
           }),
           (i.disable = function () {
               t.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled");
           }),
           (i.handleKeyDown = function (e) {
               Ot.isEventKey(e, "Space") || Ot.isEventKey(e, "Enter") ? e.stopPropagation() : t.prototype.handleKeyDown.call(this, e);
           }),
           e
       );
   })(ln);
   je.registerComponent("Button", vn);
   var yn = (function (n) {
       function e(e, t) {
           var i;
           return ((i = n.call(this, e, t) || this).mouseused_ = !1), i.on("mousedown", i.handleMouseDown), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-big-play-button";
           }),
           (t.handleClick = function (e) {
               var t = this.player_.play();
               if (this.mouseused_ && e.clientX && e.clientY) {
                   var i = this.player_.usingPlugin("eme") && this.player_.eme.sessions && 0 < this.player_.eme.sessions.length;
                   return At(t), void (!this.player_.tech(!0) || ((at || it) && i) || this.player_.tech(!0).focus());
               }
               var n = this.player_.getChild("controlBar"),
                   r = n && n.getChild("playToggle");
               if (r) {
                   var a = function () {
                       return r.focus();
                   };
                   It(t) ? t.then(a, function () {}) : this.setTimeout(a, 1);
               } else this.player_.tech(!0).focus();
           }),
           (t.handleKeyDown = function (e) {
               (this.mouseused_ = !1), n.prototype.handleKeyDown.call(this, e);
           }),
           (t.handleMouseDown = function (e) {
               this.mouseused_ = !0;
           }),
           e
       );
   })(vn);
   (yn.prototype.controlText_ = "Play Video"), je.registerComponent("BigPlayButton", yn);
   var _n = (function (n) {
       function e(e, t) {
           var i;
           return (i = n.call(this, e, t) || this).controlText((t && t.controlText) || i.localize("Close")), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-close-button " + n.prototype.buildCSSClass.call(this);
           }),
           (t.handleClick = function (e) {
               this.trigger({ type: "close", bubbles: !1 });
           }),
           (t.handleKeyDown = function (e) {
               Ot.isEventKey(e, "Esc") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : n.prototype.handleKeyDown.call(this, e);
           }),
           e
       );
   })(vn);
   je.registerComponent("CloseButton", _n);
   var bn = (function (n) {
       function e(e, t) {
           var i;
           return void 0 === t && (t = {}), (i = n.call(this, e, t) || this), (t.replay = void 0 === t.replay || t.replay), i.on(e, "play", i.handlePlay), i.on(e, "pause", i.handlePause), t.replay && i.on(e, "ended", i.handleEnded), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-play-control " + n.prototype.buildCSSClass.call(this);
           }),
           (t.handleClick = function (e) {
               this.player_.paused() ? this.player_.play() : this.player_.pause();
           }),
           (t.handleSeeked = function (e) {
               this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e);
           }),
           (t.handlePlay = function (e) {
               this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause");
           }),
           (t.handlePause = function (e) {
               this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play");
           }),
           (t.handleEnded = function (e) {
               this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked);
           }),
           e
       );
   })(vn);
   (bn.prototype.controlText_ = "Play"), je.registerComponent("PlayToggle", bn);
   function Tn(e, t) {
       e = e < 0 ? 0 : e;
       var i = Math.floor(e % 60),
           n = Math.floor((e / 60) % 60),
           r = Math.floor(e / 3600),
           a = Math.floor((t / 60) % 60),
           s = Math.floor(t / 3600);
       return (!isNaN(e) && e !== 1 / 0) || (r = n = i = "-"), (r = 0 < r || 0 < s ? r + ":" : "") + (n = ((r || 10 <= a) && n < 10 ? "0" + n : n) + ":") + (i = i < 10 ? "0" + i : i);
   }
   var Sn = Tn;
   function kn(e, t) {
       return void 0 === t && (t = e), Sn(e, t);
   }
   var Cn = (function (n) {
       function e(e, t) {
           var i;
           return (i = n.call(this, e, t) || this).on(e, ["timeupdate", "ended"], i.updateContent), i.updateTextNode_(), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.createEl = function () {
               var e = this.buildCSSClass(),
                   t = n.prototype.createEl.call(this, "div", { className: e + " vjs-time-control vjs-control", innerHTML: '<span class="vjs-control-text" role="presentation">' + this.localize(this.labelText_) + " </span>" });
               return (this.contentEl_ = k("span", { className: e + "-display" }, { "aria-live": "off", role: "presentation" })), t.appendChild(this.contentEl_), t;
           }),
           (t.dispose = function () {
               (this.contentEl_ = null), (this.textNode_ = null), n.prototype.dispose.call(this);
           }),
           (t.updateTextNode_ = function (e) {
               var t = this;
               void 0 === e && (e = 0),
                   (e = kn(e)),
                   this.formattedTime_ !== e &&
                       ((this.formattedTime_ = e),
                       this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", function () {
                           if (t.contentEl_) {
                               var e = t.textNode_;
                               (t.textNode_ = d.createTextNode(t.formattedTime_)), t.textNode_ && (e ? t.contentEl_.replaceChild(t.textNode_, e) : t.contentEl_.appendChild(t.textNode_));
                           }
                       }));
           }),
           (t.updateContent = function (e) {}),
           e
       );
   })(je);
   (Cn.prototype.labelText_ = "Time"), (Cn.prototype.controlText_ = "Time"), je.registerComponent("TimeDisplay", Cn);
   var En = (function (e) {
       function t() {
           return e.apply(this, arguments) || this;
       }
       Ge(t, e);
       var i = t.prototype;
       return (
           (i.buildCSSClass = function () {
               return "vjs-current-time";
           }),
           (i.updateContent = function (e) {
               var t;
               (t = this.player_.ended() ? this.player_.duration() : this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()), this.updateTextNode_(t);
           }),
           t
       );
   })(Cn);
   (En.prototype.labelText_ = "Current Time"), (En.prototype.controlText_ = "Current Time"), je.registerComponent("CurrentTimeDisplay", En);
   var wn = (function (n) {
       function e(e, t) {
           var i;
           return (i = n.call(this, e, t) || this).on(e, "durationchange", i.updateContent), i.on(e, "loadstart", i.updateContent), i.on(e, "loadedmetadata", i.updateContent), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-duration";
           }),
           (t.updateContent = function (e) {
               var t = this.player_.duration();
               this.updateTextNode_(t);
           }),
           e
       );
   })(Cn);
   (wn.prototype.labelText_ = "Duration"), (wn.prototype.controlText_ = "Duration"), je.registerComponent("DurationDisplay", wn);
   var In = (function (e) {
       function t() {
           return e.apply(this, arguments) || this;
       }
       return (
           Ge(t, e),
           (t.prototype.createEl = function () {
               return e.prototype.createEl.call(this, "div", { className: "vjs-time-control vjs-time-divider", innerHTML: "<div><span>/</span></div>" }, { "aria-hidden": !0 });
           }),
           t
       );
   })(je);
   je.registerComponent("TimeDivider", In);
   var An = (function (n) {
       function e(e, t) {
           var i;
           return (i = n.call(this, e, t) || this).on(e, "durationchange", i.updateContent), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-remaining-time";
           }),
           (t.createEl = function () {
               var e = n.prototype.createEl.call(this);
               return e.insertBefore(k("span", {}, { "aria-hidden": !0 }, "-"), this.contentEl_), e;
           }),
           (t.updateContent = function (e) {
               var t;
               "number" == typeof this.player_.duration() && ((t = this.player_.ended() ? 0 : this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() : this.player_.remainingTime()), this.updateTextNode_(t));
           }),
           e
       );
   })(Cn);
   (An.prototype.labelText_ = "Remaining Time"), (An.prototype.controlText_ = "Remaining Time"), je.registerComponent("RemainingTimeDisplay", An);
   var xn = (function (n) {
       function e(e, t) {
           var i;
           return (i = n.call(this, e, t) || this).updateShowing(), i.on(i.player(), "durationchange", i.updateShowing), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.createEl = function () {
               var e = n.prototype.createEl.call(this, "div", { className: "vjs-live-control vjs-control" });
               return (
                   (this.contentEl_ = k("div", { className: "vjs-live-display", innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE") }, { "aria-live": "off" })),
                   e.appendChild(this.contentEl_),
                   e
               );
           }),
           (t.dispose = function () {
               (this.contentEl_ = null), n.prototype.dispose.call(this);
           }),
           (t.updateShowing = function (e) {
               this.player().duration() === 1 / 0 ? this.show() : this.hide();
           }),
           e
       );
   })(je);
   je.registerComponent("LiveDisplay", xn);
   var Pn = (function (n) {
       function e(e, t) {
           var i;
           return (i = n.call(this, e, t) || this).updateLiveEdgeStatus(), i.player_.liveTracker && i.on(i.player_.liveTracker, "liveedgechange", i.updateLiveEdgeStatus), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.createEl = function () {
               var e = n.prototype.createEl.call(this, "button", { className: "vjs-seek-to-live-control vjs-control" });
               return (this.textEl_ = k("span", { className: "vjs-seek-to-live-text", innerHTML: this.localize("LIVE") }, { "aria-hidden": "true" })), e.appendChild(this.textEl_), e;
           }),
           (t.updateLiveEdgeStatus = function () {
               !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge()
                   ? (this.setAttribute("aria-disabled", !0), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live"))
                   : (this.setAttribute("aria-disabled", !1), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"));
           }),
           (t.handleClick = function () {
               this.player_.liveTracker.seekToLiveEdge();
           }),
           (t.dispose = function () {
               this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatus), (this.textEl_ = null), n.prototype.dispose.call(this);
           }),
           e
       );
   })(vn);
   (Pn.prototype.controlText_ = "Seek to live, currently playing live"), je.registerComponent("SeekToLive", Pn);
   function Ln(e, t, i) {
       return (e = Number(e)), Math.min(i, Math.max(t, isNaN(e) ? t : e));
   }
   var On = (function (n) {
       function e(e, t) {
           var i;
           return ((i = n.call(this, e, t) || this).bar = i.getChild(i.options_.barName)), i.vertical(!!i.options_.vertical), i.enable(), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.enabled = function () {
               return this.enabled_;
           }),
           (t.enable = function () {
               this.enabled() ||
                   (this.on("mousedown", this.handleMouseDown),
                   this.on("touchstart", this.handleMouseDown),
                   this.on("keydown", this.handleKeyDown),
                   this.on("click", this.handleClick),
                   this.on(this.player_, "controlsvisible", this.update),
                   this.playerEvent && this.on(this.player_, this.playerEvent, this.update),
                   this.removeClass("disabled"),
                   this.setAttribute("tabindex", 0),
                   (this.enabled_ = !0));
           }),
           (t.disable = function () {
               if (this.enabled()) {
                   var e = this.bar.el_.ownerDocument;
                   this.off("mousedown", this.handleMouseDown),
                       this.off("touchstart", this.handleMouseDown),
                       this.off("keydown", this.handleKeyDown),
                       this.off("click", this.handleClick),
                       this.off(this.player_, "controlsvisible", this.update),
                       this.off(e, "mousemove", this.handleMouseMove),
                       this.off(e, "mouseup", this.handleMouseUp),
                       this.off(e, "touchmove", this.handleMouseMove),
                       this.off(e, "touchend", this.handleMouseUp),
                       this.removeAttribute("tabindex"),
                       this.addClass("disabled"),
                       this.playerEvent && this.off(this.player_, this.playerEvent, this.update),
                       (this.enabled_ = !1);
               }
           }),
           (t.createEl = function (e, t, i) {
               return (
                   void 0 === t && (t = {}),
                   void 0 === i && (i = {}),
                   (t.className = t.className + " vjs-slider"),
                   (t = g({ tabIndex: 0 }, t)),
                   (i = g({ role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100, tabIndex: 0 }, i)),
                   n.prototype.createEl.call(this, e, t, i)
               );
           }),
           (t.handleMouseDown = function (e) {
               var t = this.bar.el_.ownerDocument;
               "mousedown" === e.type && e.preventDefault(),
                   "touchstart" !== e.type || nt || e.preventDefault(),
                   R(),
                   this.addClass("vjs-sliding"),
                   this.trigger("slideractive"),
                   this.on(t, "mousemove", this.handleMouseMove),
                   this.on(t, "mouseup", this.handleMouseUp),
                   this.on(t, "touchmove", this.handleMouseMove),
                   this.on(t, "touchend", this.handleMouseUp),
                   this.handleMouseMove(e);
           }),
           (t.handleMouseMove = function (e) {}),
           (t.handleMouseUp = function () {
               var e = this.bar.el_.ownerDocument;
               N(),
                   this.removeClass("vjs-sliding"),
                   this.trigger("sliderinactive"),
                   this.off(e, "mousemove", this.handleMouseMove),
                   this.off(e, "mouseup", this.handleMouseUp),
                   this.off(e, "touchmove", this.handleMouseMove),
                   this.off(e, "touchend", this.handleMouseUp),
                   this.update();
           }),
           (t.update = function () {
               var t = this;
               if (this.el_ && this.bar) {
                   var i = this.getProgress();
                   return (
                       i === this.progress_ ||
                           ((this.progress_ = i),
                           this.requestNamedAnimationFrame("Slider#update", function () {
                               var e = t.vertical() ? "height" : "width";
                               t.bar.el().style[e] = (100 * i).toFixed(2) + "%";
                           })),
                       i
                   );
               }
           }),
           (t.getProgress = function () {
               return Number(Ln(this.getPercent(), 0, 1).toFixed(4));
           }),
           (t.calculateDistance = function (e) {
               var t = B(this.el_, e);
               return this.vertical() ? t.y : t.x;
           }),
           (t.handleKeyDown = function (e) {
               Ot.isEventKey(e, "Left") || Ot.isEventKey(e, "Down")
                   ? (e.preventDefault(), e.stopPropagation(), this.stepBack())
                   : Ot.isEventKey(e, "Right") || Ot.isEventKey(e, "Up")
                   ? (e.preventDefault(), e.stopPropagation(), this.stepForward())
                   : n.prototype.handleKeyDown.call(this, e);
           }),
           (t.handleClick = function (e) {
               e.stopPropagation(), e.preventDefault();
           }),
           (t.vertical = function (e) {
               if (void 0 === e) return this.vertical_ || !1;
               (this.vertical_ = !!e), this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal");
           }),
           e
       );
   })(je);
   je.registerComponent("Slider", On);
   function Dn(e, t) {
       return Ln((e / t) * 100, 0, 100).toFixed(2) + "%";
   }
   var Mn = (function (r) {
       function e(e, t) {
           var i;
           return ((i = r.call(this, e, t) || this).partEls_ = []), i.on(e, "progress", i.update), i;
       }
       Ge(e, r);
       var t = e.prototype;
       return (
           (t.createEl = function () {
               var e = r.prototype.createEl.call(this, "div", { className: "vjs-load-progress" }),
                   t = k("span", { className: "vjs-control-text" }),
                   i = k("span", { textContent: this.localize("Loaded") }),
                   n = d.createTextNode(": ");
               return (this.percentageEl_ = k("span", { className: "vjs-control-text-loaded-percentage", textContent: "0%" })), e.appendChild(t), t.appendChild(i), t.appendChild(n), t.appendChild(this.percentageEl_), e;
           }),
           (t.dispose = function () {
               (this.partEls_ = null), (this.percentageEl_ = null), r.prototype.dispose.call(this);
           }),
           (t.update = function (e) {
               var d = this;
               this.requestNamedAnimationFrame("LoadProgressBar#update", function () {
                   var e = d.player_.liveTracker,
                       t = d.player_.buffered(),
                       i = e && e.isLive() ? e.seekableEnd() : d.player_.duration(),
                       n = d.player_.bufferedEnd(),
                       r = d.partEls_,
                       a = Dn(n, i);
                   d.percent_ !== a && ((d.el_.style.width = a), C(d.percentageEl_, a), (d.percent_ = a));
                   for (var s = 0; s < t.length; s++) {
                       var o = t.start(s),
                           u = t.end(s),
                           l = r[s];
                       l || ((l = d.el_.appendChild(k())), (r[s] = l)), (l.dataset.start === o && l.dataset.end === u) || ((l.dataset.start = o), (l.dataset.end = u), (l.style.left = Dn(o, n)), (l.style.width = Dn(u - o, n)));
                   }
                   for (var c = r.length; c > t.length; c--) d.el_.removeChild(r[c - 1]);
                   r.length = t.length;
               });
           }),
           e
       );
   })(je);
   je.registerComponent("LoadProgressBar", Mn);
   var Rn = (function (n) {
       function e(e, t) {
           var i;
           return ((i = n.call(this, e, t) || this).update = ye(ve(Ve(i), i.update), 30)), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.createEl = function () {
               return n.prototype.createEl.call(this, "div", { className: "vjs-time-tooltip" }, { "aria-hidden": "true" });
           }),
           (t.update = function (e, t, i) {
               var n = F(this.el_),
                   r = U(this.player_.el()),
                   a = e.width * t;
               if (r && n) {
                   var s = e.left - r.left + a,
                       o = e.width - a + (r.right - e.right),
                       u = n.width / 2;
                   s < u ? (u += u - s) : o < u && (u = o), u < 0 ? (u = 0) : u > n.width && (u = n.width), (this.el_.style.right = "-" + u + "px"), this.write(i);
               }
           }),
           (t.write = function (e) {
               C(this.el_, e);
           }),
           (t.updateTime = function (r, a, s, o) {
               var u = this;
               this.requestNamedAnimationFrame("TimeTooltip#updateTime", function () {
                   var e,
                       t = u.player_.duration();
                   if (u.player_.liveTracker && u.player_.liveTracker.isLive()) {
                       var i = u.player_.liveTracker.liveWindow(),
                           n = i - a * i;
                       e = (n < 1 ? "" : "-") + kn(n, i);
                   } else e = kn(s, t);
                   u.update(r, a, e), o && o();
               });
           }),
           e
       );
   })(je);
   je.registerComponent("TimeTooltip", Rn);
   var Nn = (function (n) {
       function e(e, t) {
           var i;
           return ((i = n.call(this, e, t) || this).update = ye(ve(Ve(i), i.update), 30)), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.createEl = function () {
               return n.prototype.createEl.call(this, "div", { className: "vjs-play-progress vjs-slider-bar" }, { "aria-hidden": "true" });
           }),
           (t.update = function (e, t) {
               var i = this.getChild("timeTooltip");
               if (i) {
                   var n = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                   i.updateTime(e, t, n);
               }
           }),
           e
       );
   })(je);
   (Nn.prototype.options_ = { children: [] }), dt || Je || Nn.prototype.options_.children.push("timeTooltip"), je.registerComponent("PlayProgressBar", Nn);
   var Un = (function (n) {
       function e(e, t) {
           var i;
           return ((i = n.call(this, e, t) || this).update = ye(ve(Ve(i), i.update), 30)), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.createEl = function () {
               return n.prototype.createEl.call(this, "div", { className: "vjs-mouse-display" });
           }),
           (t.update = function (e, t) {
               var i = this,
                   n = t * this.player_.duration();
               this.getChild("timeTooltip").updateTime(e, t, n, function () {
                   i.el_.style.left = e.width * t + "px";
               });
           }),
           e
       );
   })(je);
   (Un.prototype.options_ = { children: ["timeTooltip"] }), je.registerComponent("MouseTimeDisplay", Un);
   var Fn = (function (a) {
       function e(e, t) {
           var i;
           return (i = a.call(this, e, t) || this).setEventHandlers_(), i;
       }
       Ge(e, a);
       var t = e.prototype;
       return (
           (t.setEventHandlers_ = function () {
               (this.update_ = ve(this, this.update)),
                   (this.update = ye(this.update_, 30)),
                   this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update),
                   this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update),
                   (this.updateInterval = null),
                   this.on(this.player_, ["playing"], this.enableInterval_),
                   this.on(this.player_, ["ended", "pause", "waiting"], this.disableInterval_),
                   "hidden" in d && "visibilityState" in d && this.on(d, "visibilitychange", this.toggleVisibility_);
           }),
           (t.toggleVisibility_ = function (e) {
               d.hidden ? this.disableInterval_(e) : (this.enableInterval_(), this.update());
           }),
           (t.enableInterval_ = function () {
               this.updateInterval || (this.updateInterval = this.setInterval(this.update, 30));
           }),
           (t.disableInterval_ = function (e) {
               (this.player_.liveTracker && this.player_.liveTracker.isLive() && e && "ended" !== e.type) || (this.updateInterval && (this.clearInterval(this.updateInterval), (this.updateInterval = null)));
           }),
           (t.createEl = function () {
               return a.prototype.createEl.call(this, "div", { className: "vjs-progress-holder" }, { "aria-label": this.localize("Progress Bar") });
           }),
           (t.update = function (e) {
               var n = this,
                   r = a.prototype.update.call(this);
               return (
                   this.requestNamedAnimationFrame("SeekBar#update", function () {
                       var e = n.player_.ended() ? n.player_.duration() : n.getCurrentTime_(),
                           t = n.player_.liveTracker,
                           i = n.player_.duration();
                       t && t.isLive() && (i = n.player_.liveTracker.liveCurrentTime()),
                           n.percent_ !== r && (n.el_.setAttribute("aria-valuenow", (100 * r).toFixed(2)), (n.percent_ = r)),
                           (n.currentTime_ === e && n.duration_ === i) ||
                               (n.el_.setAttribute("aria-valuetext", n.localize("progress bar timing: currentTime={1} duration={2}", [kn(e, i), kn(i, i)], "{1} of {2}")), (n.currentTime_ = e), (n.duration_ = i)),
                           n.bar && n.bar.update(U(n.el()), n.getProgress());
                   }),
                   r
               );
           }),
           (t.getCurrentTime_ = function () {
               return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
           }),
           (t.getPercent = function () {
               var e,
                   t = this.getCurrentTime_(),
                   i = this.player_.liveTracker;
               return i && i.isLive() ? ((e = (t - i.seekableStart()) / i.liveWindow()), i.atLiveEdge() && (e = 1)) : (e = t / this.player_.duration()), e;
           }),
           (t.handleMouseDown = function (e) {
               z(e) && (e.stopPropagation(), this.player_.scrubbing(!0), (this.videoWasPlaying = !this.player_.paused()), this.player_.pause(), a.prototype.handleMouseDown.call(this, e));
           }),
           (t.handleMouseMove = function (e) {
               if (z(e)) {
                   var t,
                       i = this.calculateDistance(e),
                       n = this.player_.liveTracker;
                   if (n && n.isLive()) {
                       if (0.99 <= i) return void n.seekToLiveEdge();
                       var r = n.seekableStart(),
                           a = n.liveCurrentTime();
                       if ((a <= (t = r + i * n.liveWindow()) && (t = a), t <= r && (t = r + 0.1), t === 1 / 0)) return;
                   } else (t = i * this.player_.duration()) === this.player_.duration() && (t -= 0.1);
                   this.player_.currentTime(t);
               }
           }),
           (t.enable = function () {
               a.prototype.enable.call(this);
               var e = this.getChild("mouseTimeDisplay");
               e && e.show();
           }),
           (t.disable = function () {
               a.prototype.disable.call(this);
               var e = this.getChild("mouseTimeDisplay");
               e && e.hide();
           }),
           (t.handleMouseUp = function (e) {
               a.prototype.handleMouseUp.call(this, e),
                   e && e.stopPropagation(),
                   this.player_.scrubbing(!1),
                   this.player_.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }),
                   this.videoWasPlaying ? At(this.player_.play()) : this.update_();
           }),
           (t.stepForward = function () {
               this.player_.currentTime(this.player_.currentTime() + 5);
           }),
           (t.stepBack = function () {
               this.player_.currentTime(this.player_.currentTime() - 5);
           }),
           (t.handleAction = function (e) {
               this.player_.paused() ? this.player_.play() : this.player_.pause();
           }),
           (t.handleKeyDown = function (e) {
               if (Ot.isEventKey(e, "Space") || Ot.isEventKey(e, "Enter")) e.preventDefault(), e.stopPropagation(), this.handleAction(e);
               else if (Ot.isEventKey(e, "Home")) e.preventDefault(), e.stopPropagation(), this.player_.currentTime(0);
               else if (Ot.isEventKey(e, "End")) e.preventDefault(), e.stopPropagation(), this.player_.currentTime(this.player_.duration());
               else if (/^[0-9]$/.test(Ot(e))) {
                   e.preventDefault(), e.stopPropagation();
                   var t = (10 * (Ot.codes[Ot(e)] - Ot.codes[0])) / 100;
                   this.player_.currentTime(this.player_.duration() * t);
               } else
                   Ot.isEventKey(e, "PgDn")
                       ? (e.preventDefault(), e.stopPropagation(), this.player_.currentTime(this.player_.currentTime() - 60))
                       : Ot.isEventKey(e, "PgUp")
                       ? (e.preventDefault(), e.stopPropagation(), this.player_.currentTime(this.player_.currentTime() + 60))
                       : a.prototype.handleKeyDown.call(this, e);
           }),
           (t.dispose = function () {
               this.disableInterval_(),
                   this.off(this.player_, ["ended", "durationchange", "timeupdate"], this.update),
                   this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update),
                   this.off(this.player_, ["playing"], this.enableInterval_),
                   this.off(this.player_, ["ended", "pause", "waiting"], this.disableInterval_),
                   "hidden" in d && "visibilityState" in d && this.off(d, "visibilitychange", this.toggleVisibility_),
                   a.prototype.dispose.call(this);
           }),
           e
       );
   })(On);
   (Fn.prototype.options_ = { children: ["loadProgressBar", "playProgressBar"], barName: "playProgressBar" }), dt || Je || Fn.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), je.registerComponent("SeekBar", Fn);
   var Bn = (function (n) {
       function e(e, t) {
           var i;
           return ((i = n.call(this, e, t) || this).handleMouseMove = ye(ve(Ve(i), i.handleMouseMove), 30)), (i.throttledHandleMouseSeek = ye(ve(Ve(i), i.handleMouseSeek), 30)), i.enable(), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.createEl = function () {
               return n.prototype.createEl.call(this, "div", { className: "vjs-progress-control vjs-control" });
           }),
           (t.handleMouseMove = function (e) {
               var t = this.getChild("seekBar");
               if (t) {
                   var i = t.getChild("playProgressBar"),
                       n = t.getChild("mouseTimeDisplay");
                   if (i || n) {
                       var r = t.el(),
                           a = F(r),
                           s = B(r, e).x;
                       (s = Ln(s, 0, 1)), n && n.update(a, s), i && i.update(a, t.getProgress());
                   }
               }
           }),
           (t.handleMouseSeek = function (e) {
               var t = this.getChild("seekBar");
               t && t.handleMouseMove(e);
           }),
           (t.enabled = function () {
               return this.enabled_;
           }),
           (t.disable = function () {
               this.children().forEach(function (e) {
                   return e.disable && e.disable();
               }),
                   this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), (this.enabled_ = !1));
           }),
           (t.enable = function () {
               this.children().forEach(function (e) {
                   return e.enable && e.enable();
               }),
                   this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), (this.enabled_ = !0));
           }),
           (t.handleMouseDown = function (e) {
               var t = this.el_.ownerDocument,
                   i = this.getChild("seekBar");
               i && i.handleMouseDown(e),
                   this.on(t, "mousemove", this.throttledHandleMouseSeek),
                   this.on(t, "touchmove", this.throttledHandleMouseSeek),
                   this.on(t, "mouseup", this.handleMouseUp),
                   this.on(t, "touchend", this.handleMouseUp);
           }),
           (t.handleMouseUp = function (e) {
               var t = this.el_.ownerDocument,
                   i = this.getChild("seekBar");
               i && i.handleMouseUp(e),
                   this.off(t, "mousemove", this.throttledHandleMouseSeek),
                   this.off(t, "touchmove", this.throttledHandleMouseSeek),
                   this.off(t, "mouseup", this.handleMouseUp),
                   this.off(t, "touchend", this.handleMouseUp);
           }),
           e
       );
   })(je);
   (Bn.prototype.options_ = { children: ["seekBar"] }), je.registerComponent("ProgressControl", Bn);
   var jn = (function (n) {
       function e(e, t) {
           var i;
           return (
               (i = n.call(this, e, t) || this).on(e, ["enterpictureinpicture", "leavepictureinpicture"], i.handlePictureInPictureChange),
               i.on(e, ["disablepictureinpicturechanged", "loadedmetadata"], i.handlePictureInPictureEnabledChange),
               i.disable(),
               i
           );
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-picture-in-picture-control " + n.prototype.buildCSSClass.call(this);
           }),
           (t.handlePictureInPictureEnabledChange = function () {
               d.pictureInPictureEnabled && !1 === this.player_.disablePictureInPicture() ? this.enable() : this.disable();
           }),
           (t.handlePictureInPictureChange = function (e) {
               this.player_.isInPictureInPicture() ? this.controlText("Exit Picture-in-Picture") : this.controlText("Picture-in-Picture"), this.handlePictureInPictureEnabledChange();
           }),
           (t.handleClick = function (e) {
               this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture();
           }),
           e
       );
   })(vn);
   (jn.prototype.controlText_ = "Picture-in-Picture"), je.registerComponent("PictureInPictureToggle", jn);
   var Vn = (function (n) {
       function e(e, t) {
           var i;
           return (i = n.call(this, e, t) || this).on(e, "fullscreenchange", i.handleFullscreenChange), !1 === d[e.fsApi_.fullscreenEnabled] && i.disable(), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-fullscreen-control " + n.prototype.buildCSSClass.call(this);
           }),
           (t.handleFullscreenChange = function (e) {
               this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen");
           }),
           (t.handleClick = function (e) {
               this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen();
           }),
           e
       );
   })(vn);
   (Vn.prototype.controlText_ = "Fullscreen"), je.registerComponent("FullscreenToggle", Vn);
   var qn = (function (e) {
       function t() {
           return e.apply(this, arguments) || this;
       }
       return (
           Ge(t, e),
           (t.prototype.createEl = function () {
               return e.prototype.createEl.call(this, "div", { className: "vjs-volume-level", innerHTML: '<span class="vjs-control-text"></span>' });
           }),
           t
       );
   })(je);
   je.registerComponent("VolumeLevel", qn);
   var Hn = (function (n) {
       function e(e, t) {
           var i;
           return (
               (i = n.call(this, e, t) || this).on("slideractive", i.updateLastVolume_),
               i.on(e, "volumechange", i.updateARIAAttributes),
               e.ready(function () {
                   return i.updateARIAAttributes();
               }),
               i
           );
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.createEl = function () {
               return n.prototype.createEl.call(this, "div", { className: "vjs-volume-bar vjs-slider-bar" }, { "aria-label": this.localize("Volume Level"), "aria-live": "polite" });
           }),
           (t.handleMouseDown = function (e) {
               z(e) && n.prototype.handleMouseDown.call(this, e);
           }),
           (t.handleMouseMove = function (e) {
               z(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)));
           }),
           (t.checkMuted = function () {
               this.player_.muted() && this.player_.muted(!1);
           }),
           (t.getPercent = function () {
               return this.player_.muted() ? 0 : this.player_.volume();
           }),
           (t.stepForward = function () {
               this.checkMuted(), this.player_.volume(this.player_.volume() + 0.1);
           }),
           (t.stepBack = function () {
               this.checkMuted(), this.player_.volume(this.player_.volume() - 0.1);
           }),
           (t.updateARIAAttributes = function (e) {
               var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
               this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%");
           }),
           (t.volumeAsPercentage_ = function () {
               return Math.round(100 * this.player_.volume());
           }),
           (t.updateLastVolume_ = function () {
               var e = this,
                   t = this.player_.volume();
               this.one("sliderinactive", function () {
                   0 === e.player_.volume() && e.player_.lastVolume_(t);
               });
           }),
           e
       );
   })(On);
   (Hn.prototype.options_ = { children: ["volumeLevel"], barName: "volumeLevel" }), (Hn.prototype.playerEvent = "volumechange"), je.registerComponent("VolumeBar", Hn);
   var Wn = (function (n) {
       function e(e, t) {
           var i;
           return (
               void 0 === t && (t = {}),
               (t.vertical = t.vertical || !1),
               ("undefined" != typeof t.volumeBar && !o(t.volumeBar)) || ((t.volumeBar = t.volumeBar || {}), (t.volumeBar.vertical = t.vertical)),
               (i = n.call(this, e, t) || this),
               (function (e, t) {
                   t.tech_ && !t.tech_.featuresVolumeControl && e.addClass("vjs-hidden"),
                       e.on(t, "loadstart", function () {
                           t.tech_.featuresVolumeControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden");
                       });
               })(Ve(i), e),
               (i.throttledHandleMouseMove = ye(ve(Ve(i), i.handleMouseMove), 30)),
               i.on("mousedown", i.handleMouseDown),
               i.on("touchstart", i.handleMouseDown),
               i.on(i.volumeBar, ["focus", "slideractive"], function () {
                   i.volumeBar.addClass("vjs-slider-active"), i.addClass("vjs-slider-active"), i.trigger("slideractive");
               }),
               i.on(i.volumeBar, ["blur", "sliderinactive"], function () {
                   i.volumeBar.removeClass("vjs-slider-active"), i.removeClass("vjs-slider-active"), i.trigger("sliderinactive");
               }),
               i
           );
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.createEl = function () {
               var e = "vjs-volume-horizontal";
               return this.options_.vertical && (e = "vjs-volume-vertical"), n.prototype.createEl.call(this, "div", { className: "vjs-volume-control vjs-control " + e });
           }),
           (t.handleMouseDown = function (e) {
               var t = this.el_.ownerDocument;
               this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp);
           }),
           (t.handleMouseUp = function (e) {
               var t = this.el_.ownerDocument;
               this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp);
           }),
           (t.handleMouseMove = function (e) {
               this.volumeBar.handleMouseMove(e);
           }),
           e
       );
   })(je);
   (Wn.prototype.options_ = { children: ["volumeBar"] }), je.registerComponent("VolumeControl", Wn);
   var zn = (function (n) {
       function e(e, t) {
           var i;
           return (
               (i = n.call(this, e, t) || this),
               (function (e, t) {
                   t.tech_ && !t.tech_.featuresMuteControl && e.addClass("vjs-hidden"),
                       e.on(t, "loadstart", function () {
                           t.tech_.featuresMuteControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden");
                       });
               })(Ve(i), e),
               i.on(e, ["loadstart", "volumechange"], i.update),
               i
           );
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-mute-control " + n.prototype.buildCSSClass.call(this);
           }),
           (t.handleClick = function (e) {
               var t = this.player_.volume(),
                   i = this.player_.lastVolume_();
               if (0 === t) {
                   var n = i < 0.1 ? 0.1 : i;
                   this.player_.volume(n), this.player_.muted(!1);
               } else this.player_.muted(!this.player_.muted());
           }),
           (t.update = function (e) {
               this.updateIcon_(), this.updateControlText_();
           }),
           (t.updateIcon_ = function () {
               var e = this.player_.volume(),
                   t = 3;
               dt && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted), 0 === e || this.player_.muted() ? (t = 0) : e < 0.33 ? (t = 1) : e < 0.67 && (t = 2);
               for (var i = 0; i < 4; i++) A(this.el_, "vjs-vol-" + i);
               I(this.el_, "vjs-vol-" + t);
           }),
           (t.updateControlText_ = function () {
               var e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
               this.controlText() !== e && this.controlText(e);
           }),
           e
       );
   })(vn);
   (zn.prototype.controlText_ = "Mute"), je.registerComponent("MuteToggle", zn);
   var Gn = (function (n) {
       function e(e, t) {
           var i;
           return (
               void 0 === t && (t = {}),
               "undefined" != typeof t.inline ? (t.inline = t.inline) : (t.inline = !0),
               ("undefined" != typeof t.volumeControl && !o(t.volumeControl)) || ((t.volumeControl = t.volumeControl || {}), (t.volumeControl.vertical = !t.inline)),
               (i = n.call(this, e, t) || this).on(e, ["loadstart"], i.volumePanelState_),
               i.on(i.muteToggle, "keyup", i.handleKeyPress),
               i.on(i.volumeControl, "keyup", i.handleVolumeControlKeyUp),
               i.on("keydown", i.handleKeyPress),
               i.on("mouseover", i.handleMouseOver),
               i.on("mouseout", i.handleMouseOut),
               i.on(i.volumeControl, ["slideractive"], i.sliderActive_),
               i.on(i.volumeControl, ["sliderinactive"], i.sliderInactive_),
               i
           );
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.sliderActive_ = function () {
               this.addClass("vjs-slider-active");
           }),
           (t.sliderInactive_ = function () {
               this.removeClass("vjs-slider-active");
           }),
           (t.volumePanelState_ = function () {
               this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"),
                   this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only");
           }),
           (t.createEl = function () {
               var e = "vjs-volume-panel-horizontal";
               return this.options_.inline || (e = "vjs-volume-panel-vertical"), n.prototype.createEl.call(this, "div", { className: "vjs-volume-panel vjs-control " + e });
           }),
           (t.dispose = function () {
               this.handleMouseOut(), n.prototype.dispose.call(this);
           }),
           (t.handleVolumeControlKeyUp = function (e) {
               Ot.isEventKey(e, "Esc") && this.muteToggle.focus();
           }),
           (t.handleMouseOver = function (e) {
               this.addClass("vjs-hover"), he(d, "keyup", ve(this, this.handleKeyPress));
           }),
           (t.handleMouseOut = function (e) {
               this.removeClass("vjs-hover"), pe(d, "keyup", ve(this, this.handleKeyPress));
           }),
           (t.handleKeyPress = function (e) {
               Ot.isEventKey(e, "Esc") && this.handleMouseOut();
           }),
           e
       );
   })(je);
   (Gn.prototype.options_ = { children: ["muteToggle", "volumeControl"] }), je.registerComponent("VolumePanel", Gn);
   var Xn = (function (n) {
       function e(e, t) {
           var i;
           return (
               (i = n.call(this, e, t) || this),
               t && (i.menuButton_ = t.menuButton),
               (i.focusedChild_ = -1),
               i.on("keydown", i.handleKeyDown),
               (i.boundHandleBlur_ = ve(Ve(i), i.handleBlur)),
               (i.boundHandleTapClick_ = ve(Ve(i), i.handleTapClick)),
               i
           );
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.addEventListenerForItem = function (e) {
               e instanceof je && (this.on(e, "blur", this.boundHandleBlur_), this.on(e, ["tap", "click"], this.boundHandleTapClick_));
           }),
           (t.removeEventListenerForItem = function (e) {
               e instanceof je && (this.off(e, "blur", this.boundHandleBlur_), this.off(e, ["tap", "click"], this.boundHandleTapClick_));
           }),
           (t.removeChild = function (e) {
               "string" == typeof e && (e = this.getChild(e)), this.removeEventListenerForItem(e), n.prototype.removeChild.call(this, e);
           }),
           (t.addItem = function (e) {
               var t = this.addChild(e);
               t && this.addEventListenerForItem(t);
           }),
           (t.createEl = function () {
               var e = this.options_.contentElType || "ul";
               (this.contentEl_ = k(e, { className: "vjs-menu-content" })), this.contentEl_.setAttribute("role", "menu");
               var t = n.prototype.createEl.call(this, "div", { append: this.contentEl_, className: "vjs-menu" });
               return (
                   t.appendChild(this.contentEl_),
                   he(t, "click", function (e) {
                       e.preventDefault(), e.stopImmediatePropagation();
                   }),
                   t
               );
           }),
           (t.dispose = function () {
               (this.contentEl_ = null), (this.boundHandleBlur_ = null), (this.boundHandleTapClick_ = null), n.prototype.dispose.call(this);
           }),
           (t.handleBlur = function (e) {
               var t = e.relatedTarget || d.activeElement;
               if (
                   !this.children().some(function (e) {
                       return e.el() === t;
                   })
               ) {
                   var i = this.menuButton_;
                   i && i.buttonPressed_ && t !== i.el().firstChild && i.unpressButton();
               }
           }),
           (t.handleTapClick = function (t) {
               if (this.menuButton_) {
                   this.menuButton_.unpressButton();
                   var e = this.children();
                   if (!Array.isArray(e)) return;
                   var i = e.filter(function (e) {
                       return e.el() === t.target;
                   })[0];
                   if (!i) return;
                   "CaptionSettingsMenuItem" !== i.name() && this.menuButton_.focus();
               }
           }),
           (t.handleKeyDown = function (e) {
               Ot.isEventKey(e, "Left") || Ot.isEventKey(e, "Down")
                   ? (e.preventDefault(), e.stopPropagation(), this.stepForward())
                   : (Ot.isEventKey(e, "Right") || Ot.isEventKey(e, "Up")) && (e.preventDefault(), e.stopPropagation(), this.stepBack());
           }),
           (t.stepForward = function () {
               var e = 0;
               void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e);
           }),
           (t.stepBack = function () {
               var e = 0;
               void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e);
           }),
           (t.focus = function (e) {
               void 0 === e && (e = 0);
               var t = this.children().slice();
               t.length && t[0].className && /vjs-menu-title/.test(t[0].className) && t.shift(), 0 < t.length && (e < 0 ? (e = 0) : e >= t.length && (e = t.length - 1), t[(this.focusedChild_ = e)].el_.focus());
           }),
           e
       );
   })(je);
   je.registerComponent("Menu", Xn);
   var Kn = (function (r) {
       function e(e, t) {
           var i;
           void 0 === t && (t = {}), ((i = r.call(this, e, t) || this).menuButton_ = new vn(e, t)), i.menuButton_.controlText(i.controlText_), i.menuButton_.el_.setAttribute("aria-haspopup", "true");
           var n = vn.prototype.buildCSSClass();
           return (
               (i.menuButton_.el_.className = i.buildCSSClass() + " " + n),
               i.menuButton_.removeClass("vjs-control"),
               i.addChild(i.menuButton_),
               i.update(),
               (i.enabled_ = !0),
               i.on(i.menuButton_, "tap", i.handleClick),
               i.on(i.menuButton_, "click", i.handleClick),
               i.on(i.menuButton_, "keydown", i.handleKeyDown),
               i.on(i.menuButton_, "mouseenter", function () {
                   i.addClass("vjs-hover"), i.menu.show(), he(d, "keyup", ve(Ve(i), i.handleMenuKeyUp));
               }),
               i.on("mouseleave", i.handleMouseLeave),
               i.on("keydown", i.handleSubmenuKeyDown),
               i
           );
       }
       Ge(e, r);
       var t = e.prototype;
       return (
           (t.update = function () {
               var e = this.createMenu();
               this.menu && (this.menu.dispose(), this.removeChild(this.menu)),
                   (this.menu = e),
                   this.addChild(e),
                   (this.buttonPressed_ = !1),
                   this.menuButton_.el_.setAttribute("aria-expanded", "false"),
                   this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show();
           }),
           (t.createMenu = function () {
               var e = new Xn(this.player_, { menuButton: this });
               if (((this.hideThreshold_ = 0), this.options_.title)) {
                   var t = k("li", { className: "vjs-menu-title", innerHTML: Me(this.options_.title), tabIndex: -1 });
                   this.hideThreshold_ += 1;
                   var i = new je(this.player_, { el: t });
                   e.addItem(i);
               }
               if (((this.items = this.createItems()), this.items)) for (var n = 0; n < this.items.length; n++) e.addItem(this.items[n]);
               return e;
           }),
           (t.createItems = function () {}),
           (t.createEl = function () {
               return r.prototype.createEl.call(this, "div", { className: this.buildWrapperCSSClass() }, {});
           }),
           (t.buildWrapperCSSClass = function () {
               var e = "vjs-menu-button";
               return !0 === this.options_.inline ? (e += "-inline") : (e += "-popup"), "vjs-menu-button " + e + " " + vn.prototype.buildCSSClass() + " " + r.prototype.buildCSSClass.call(this);
           }),
           (t.buildCSSClass = function () {
               var e = "vjs-menu-button";
               return !0 === this.options_.inline ? (e += "-inline") : (e += "-popup"), "vjs-menu-button " + e + " " + r.prototype.buildCSSClass.call(this);
           }),
           (t.controlText = function (e, t) {
               return void 0 === t && (t = this.menuButton_.el()), this.menuButton_.controlText(e, t);
           }),
           (t.dispose = function () {
               this.handleMouseLeave(), r.prototype.dispose.call(this);
           }),
           (t.handleClick = function (e) {
               this.buttonPressed_ ? this.unpressButton() : this.pressButton();
           }),
           (t.handleMouseLeave = function (e) {
               this.removeClass("vjs-hover"), pe(d, "keyup", ve(this, this.handleMenuKeyUp));
           }),
           (t.focus = function () {
               this.menuButton_.focus();
           }),
           (t.blur = function () {
               this.menuButton_.blur();
           }),
           (t.handleKeyDown = function (e) {
               Ot.isEventKey(e, "Esc") || Ot.isEventKey(e, "Tab")
                   ? (this.buttonPressed_ && this.unpressButton(), Ot.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus()))
                   : (Ot.isEventKey(e, "Up") || Ot.isEventKey(e, "Down")) && (this.buttonPressed_ || (e.preventDefault(), this.pressButton()));
           }),
           (t.handleMenuKeyUp = function (e) {
               (Ot.isEventKey(e, "Esc") || Ot.isEventKey(e, "Tab")) && this.removeClass("vjs-hover");
           }),
           (t.handleSubmenuKeyPress = function (e) {
               this.handleSubmenuKeyDown(e);
           }),
           (t.handleSubmenuKeyDown = function (e) {
               (Ot.isEventKey(e, "Esc") || Ot.isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(), Ot.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus()));
           }),
           (t.pressButton = function () {
               if (this.enabled_) {
                   if (((this.buttonPressed_ = !0), this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), dt && b())) return;
                   this.menu.focus();
               }
           }),
           (t.unpressButton = function () {
               this.enabled_ && ((this.buttonPressed_ = !1), this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"));
           }),
           (t.disable = function () {
               this.unpressButton(), (this.enabled_ = !1), this.addClass("vjs-disabled"), this.menuButton_.disable();
           }),
           (t.enable = function () {
               (this.enabled_ = !0), this.removeClass("vjs-disabled"), this.menuButton_.enable();
           }),
           e
       );
   })(je);
   je.registerComponent("MenuButton", Kn);
   var Yn = (function (a) {
       function e(e, t) {
           var i,
               n = t.tracks;
           if (((i = a.call(this, e, t) || this).items.length <= 1 && i.hide(), !n)) return Ve(i);
           var r = ve(Ve(i), i.update);
           return (
               n.addEventListener("removetrack", r),
               n.addEventListener("addtrack", r),
               i.player_.on("ready", r),
               i.player_.on("dispose", function () {
                   n.removeEventListener("removetrack", r), n.removeEventListener("addtrack", r);
               }),
               i
           );
       }
       return Ge(e, a), e;
   })(Kn);
   je.registerComponent("TrackButton", Yn);
   var $n = ["Tab", "Esc", "Up", "Down", "Right", "Left"],
       Qn = (function (n) {
           function e(e, t) {
               var i;
               return (
                   ((i = n.call(this, e, t) || this).selectable = t.selectable),
                   (i.isSelected_ = t.selected || !1),
                   (i.multiSelectable = t.multiSelectable),
                   i.selected(i.isSelected_),
                   i.selectable ? (i.multiSelectable ? i.el_.setAttribute("role", "menuitemcheckbox") : i.el_.setAttribute("role", "menuitemradio")) : i.el_.setAttribute("role", "menuitem"),
                   i
               );
           }
           Ge(e, n);
           var t = e.prototype;
           return (
               (t.createEl = function (e, t, i) {
                   return (
                       (this.nonIconControl = !0),
                       n.prototype.createEl.call(this, "li", g({ className: "vjs-menu-item", innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>", tabIndex: -1 }, t), i)
                   );
               }),
               (t.handleKeyDown = function (t) {
                   $n.some(function (e) {
                       return Ot.isEventKey(t, e);
                   }) || n.prototype.handleKeyDown.call(this, t);
               }),
               (t.handleClick = function (e) {
                   this.selected(!0);
               }),
               (t.selected = function (e) {
                   this.selectable &&
                       (e
                           ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), (this.isSelected_ = !0))
                           : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), (this.isSelected_ = !1)));
               }),
               e
           );
       })(ln);
   je.registerComponent("MenuItem", Qn);
   var Jn = (function (u) {
       function e(e, t) {
           var n,
               i = t.track,
               r = e.textTracks();
           (t.label = i.label || i.language || "Unknown"), (t.selected = "showing" === i.mode), ((n = u.call(this, e, t) || this).track = i), (n.kinds = (t.kinds || [t.kind || n.track.kind]).filter(Boolean));
           function a() {
               for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
               n.handleTracksChange.apply(Ve(n), t);
           }
           function s() {
               for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
               n.handleSelectedLanguageChange.apply(Ve(n), t);
           }
           var o;
           e.on(["loadstart", "texttrackchange"], a),
               r.addEventListener("change", a),
               r.addEventListener("selectedlanguagechange", s),
               n.on("dispose", function () {
                   e.off(["loadstart", "texttrackchange"], a), r.removeEventListener("change", a), r.removeEventListener("selectedlanguagechange", s);
               }),
               void 0 === r.onchange &&
                   n.on(["tap", "click"], function () {
                       if ("object" != typeof T.Event)
                           try {
                               o = new T.Event("change");
                           } catch (e) {}
                       o || (o = d.createEvent("Event")).initEvent("change", !0, !0), r.dispatchEvent(o);
                   });
           return n.handleTracksChange(), n;
       }
       Ge(e, u);
       var t = e.prototype;
       return (
           (t.handleClick = function (e) {
               var t = this.track,
                   i = this.player_.textTracks();
               if ((u.prototype.handleClick.call(this, e), i))
                   for (var n = 0; n < i.length; n++) {
                       var r = i[n];
                       -1 !== this.kinds.indexOf(r.kind) && (r === t ? "showing" !== r.mode && (r.mode = "showing") : "disabled" !== r.mode && (r.mode = "disabled"));
                   }
           }),
           (t.handleTracksChange = function (e) {
               var t = "showing" === this.track.mode;
               t !== this.isSelected_ && this.selected(t);
           }),
           (t.handleSelectedLanguageChange = function (e) {
               if ("showing" === this.track.mode) {
                   var t = this.player_.cache_.selectedLanguage;
                   if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return;
                   this.player_.cache_.selectedLanguage = { enabled: !0, language: this.track.language, kind: this.track.kind };
               }
           }),
           (t.dispose = function () {
               (this.track = null), u.prototype.dispose.call(this);
           }),
           e
       );
   })(Qn);
   je.registerComponent("TextTrackMenuItem", Jn);
   var Zn = (function (i) {
       function e(e, t) {
           return (
               (t.track = { player: e, kind: t.kind, kinds: t.kinds, default: !1, mode: "disabled" }),
               t.kinds || (t.kinds = [t.kind]),
               t.label ? (t.track.label = t.label) : (t.track.label = t.kinds.join(" and ") + " off"),
               (t.selectable = !0),
               (t.multiSelectable = !1),
               i.call(this, e, t) || this
           );
       }
       Ge(e, i);
       var t = e.prototype;
       return (
           (t.handleTracksChange = function (e) {
               for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
                   var a = t[n];
                   if (-1 < this.options_.kinds.indexOf(a.kind) && "showing" === a.mode) {
                       i = !1;
                       break;
                   }
               }
               i !== this.isSelected_ && this.selected(i);
           }),
           (t.handleSelectedLanguageChange = function (e) {
               for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
                   var a = t[n];
                   if (-1 < ["captions", "descriptions", "subtitles"].indexOf(a.kind) && "showing" === a.mode) {
                       i = !1;
                       break;
                   }
               }
               i && (this.player_.cache_.selectedLanguage = { enabled: !1 });
           }),
           e
       );
   })(Jn);
   je.registerComponent("OffTextTrackMenuItem", Zn);
   var er = (function (i) {
       function e(e, t) {
           return void 0 === t && (t = {}), (t.tracks = e.textTracks()), i.call(this, e, t) || this;
       }
       return (
           Ge(e, i),
           (e.prototype.createItems = function (e, t) {
               var i;
               void 0 === e && (e = []), void 0 === t && (t = Jn), this.label_ && (i = this.label_ + " off"), e.push(new Zn(this.player_, { kinds: this.kinds_, kind: this.kind_, label: i })), (this.hideThreshold_ += 1);
               var n = this.player_.textTracks();
               Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
               for (var r = 0; r < n.length; r++) {
                   var a = n[r];
                   if (-1 < this.kinds_.indexOf(a.kind)) {
                       var s = new t(this.player_, { track: a, kinds: this.kinds_, kind: this.kind_, selectable: !0, multiSelectable: !1 });
                       s.addClass("vjs-" + a.kind + "-menu-item"), e.push(s);
                   }
               }
               return e;
           }),
           e
       );
   })(Yn);
   je.registerComponent("TextTrackButton", er);
   var tr = (function (s) {
       function e(e, t) {
           var i,
               n = t.track,
               r = t.cue,
               a = e.currentTime();
           return (
               (t.selectable = !0),
               (t.multiSelectable = !1),
               (t.label = r.text),
               (t.selected = r.startTime <= a && a < r.endTime),
               ((i = s.call(this, e, t) || this).track = n),
               (i.cue = r),
               n.addEventListener("cuechange", ve(Ve(i), i.update)),
               i
           );
       }
       Ge(e, s);
       var t = e.prototype;
       return (
           (t.handleClick = function (e) {
               s.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime);
           }),
           (t.update = function (e) {
               var t = this.cue,
                   i = this.player_.currentTime();
               this.selected(t.startTime <= i && i < t.endTime);
           }),
           e
       );
   })(Qn);
   je.registerComponent("ChaptersTrackMenuItem", tr);
   var ir = (function (n) {
       function e(e, t, i) {
           return n.call(this, e, t, i) || this;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-chapters-button " + n.prototype.buildCSSClass.call(this);
           }),
           (t.buildWrapperCSSClass = function () {
               return "vjs-chapters-button " + n.prototype.buildWrapperCSSClass.call(this);
           }),
           (t.update = function (e) {
               (this.track_ && (!e || ("addtrack" !== e.type && "removetrack" !== e.type))) || this.setTrack(this.findChaptersTrack()), n.prototype.update.call(this);
           }),
           (t.setTrack = function (e) {
               if (this.track_ !== e) {
                   if ((this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_)) {
                       var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                       t && t.removeEventListener("load", this.updateHandler_), (this.track_ = null);
                   }
                   if (((this.track_ = e), this.track_)) {
                       this.track_.mode = "hidden";
                       var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                       i && i.addEventListener("load", this.updateHandler_);
                   }
               }
           }),
           (t.findChaptersTrack = function () {
               for (var e = this.player_.textTracks() || [], t = e.length - 1; 0 <= t; t--) {
                   var i = e[t];
                   if (i.kind === this.kind_) return i;
               }
           }),
           (t.getMenuCaption = function () {
               return this.track_ && this.track_.label ? this.track_.label : this.localize(Me(this.kind_));
           }),
           (t.createMenu = function () {
               return (this.options_.title = this.getMenuCaption()), n.prototype.createMenu.call(this);
           }),
           (t.createItems = function () {
               var e = [];
               if (!this.track_) return e;
               var t = this.track_.cues;
               if (!t) return e;
               for (var i = 0, n = t.length; i < n; i++) {
                   var r = t[i],
                       a = new tr(this.player_, { track: this.track_, cue: r });
                   e.push(a);
               }
               return e;
           }),
           e
       );
   })(er);
   (ir.prototype.kind_ = "chapters"), (ir.prototype.controlText_ = "Chapters"), je.registerComponent("ChaptersButton", ir);
   var nr = (function (s) {
       function e(e, t, i) {
           var n;
           n = s.call(this, e, t, i) || this;
           var r = e.textTracks(),
               a = ve(Ve(n), n.handleTracksChange);
           return (
               r.addEventListener("change", a),
               n.on("dispose", function () {
                   r.removeEventListener("change", a);
               }),
               n
           );
       }
       Ge(e, s);
       var t = e.prototype;
       return (
           (t.handleTracksChange = function (e) {
               for (var t = this.player().textTracks(), i = !1, n = 0, r = t.length; n < r; n++) {
                   var a = t[n];
                   if (a.kind !== this.kind_ && "showing" === a.mode) {
                       i = !0;
                       break;
                   }
               }
               i ? this.disable() : this.enable();
           }),
           (t.buildCSSClass = function () {
               return "vjs-descriptions-button " + s.prototype.buildCSSClass.call(this);
           }),
           (t.buildWrapperCSSClass = function () {
               return "vjs-descriptions-button " + s.prototype.buildWrapperCSSClass.call(this);
           }),
           e
       );
   })(er);
   (nr.prototype.kind_ = "descriptions"), (nr.prototype.controlText_ = "Descriptions"), je.registerComponent("DescriptionsButton", nr);
   var rr = (function (n) {
       function e(e, t, i) {
           return n.call(this, e, t, i) || this;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-subtitles-button " + n.prototype.buildCSSClass.call(this);
           }),
           (t.buildWrapperCSSClass = function () {
               return "vjs-subtitles-button " + n.prototype.buildWrapperCSSClass.call(this);
           }),
           e
       );
   })(er);
   (rr.prototype.kind_ = "subtitles"), (rr.prototype.controlText_ = "Subtitles"), je.registerComponent("SubtitlesButton", rr);
   var ar = (function (n) {
       function e(e, t) {
           var i;
           return (
               (t.track = { player: e, kind: t.kind, label: t.kind + " settings", selectable: !1, default: !1, mode: "disabled" }),
               (t.selectable = !1),
               (t.name = "CaptionSettingsMenuItem"),
               (i = n.call(this, e, t) || this).addClass("vjs-texttrack-settings"),
               i.controlText(", opens " + t.kind + " settings dialog"),
               i
           );
       }
       return (
           Ge(e, n),
           (e.prototype.handleClick = function (e) {
               this.player().getChild("textTrackSettings").open();
           }),
           e
       );
   })(Jn);
   je.registerComponent("CaptionSettingsMenuItem", ar);
   var sr = (function (n) {
       function e(e, t, i) {
           return n.call(this, e, t, i) || this;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-captions-button " + n.prototype.buildCSSClass.call(this);
           }),
           (t.buildWrapperCSSClass = function () {
               return "vjs-captions-button " + n.prototype.buildWrapperCSSClass.call(this);
           }),
           (t.createItems = function () {
               var e = [];
               return (
                   (this.player().tech_ && this.player().tech_.featuresNativeTextTracks) || !this.player().getChild("textTrackSettings") || (e.push(new ar(this.player_, { kind: this.kind_ })), (this.hideThreshold_ += 1)),
                   n.prototype.createItems.call(this, e)
               );
           }),
           e
       );
   })(er);
   (sr.prototype.kind_ = "captions"), (sr.prototype.controlText_ = "Captions"), je.registerComponent("CaptionsButton", sr);
   var or = (function (r) {
       function e() {
           return r.apply(this, arguments) || this;
       }
       return (
           Ge(e, r),
           (e.prototype.createEl = function (e, t, i) {
               var n = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
               return (
                   "captions" === this.options_.track.kind && (n += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "),
                   (n += "</span>"),
                   r.prototype.createEl.call(this, e, g({ innerHTML: n }, t), i)
               );
           }),
           e
       );
   })(Jn);
   je.registerComponent("SubsCapsMenuItem", or);
   var ur = (function (n) {
       function e(e, t) {
           var i;
           return (
               void 0 === t && (t = {}), ((i = n.call(this, e, t) || this).label_ = "subtitles"), -1 < ["en", "en-us", "en-ca", "fr-ca"].indexOf(i.player_.language_) && (i.label_ = "captions"), i.menuButton_.controlText(Me(i.label_)), i
           );
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-subs-caps-button " + n.prototype.buildCSSClass.call(this);
           }),
           (t.buildWrapperCSSClass = function () {
               return "vjs-subs-caps-button " + n.prototype.buildWrapperCSSClass.call(this);
           }),
           (t.createItems = function () {
               var e = [];
               return (
                   (this.player().tech_ && this.player().tech_.featuresNativeTextTracks) || !this.player().getChild("textTrackSettings") || (e.push(new ar(this.player_, { kind: this.label_ })), (this.hideThreshold_ += 1)),
                   (e = n.prototype.createItems.call(this, e, or))
               );
           }),
           e
       );
   })(er);
   (ur.prototype.kinds_ = ["captions", "subtitles"]), (ur.prototype.controlText_ = "Subtitles"), je.registerComponent("SubsCapsButton", ur);
   var lr = (function (s) {
       function e(e, t) {
           var n,
               i = t.track,
               r = e.audioTracks();
           (t.label = i.label || i.language || "Unknown"), (t.selected = i.enabled), ((n = s.call(this, e, t) || this).track = i), n.addClass("vjs-" + i.kind + "-menu-item");
           function a() {
               for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
               n.handleTracksChange.apply(Ve(n), t);
           }
           return (
               r.addEventListener("change", a),
               n.on("dispose", function () {
                   r.removeEventListener("change", a);
               }),
               n
           );
       }
       Ge(e, s);
       var t = e.prototype;
       return (
           (t.createEl = function (e, t, i) {
               var n = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
               return (
                   "main-desc" === this.options_.track.kind && (n += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "),
                   (n += "</span>"),
                   s.prototype.createEl.call(this, e, g({ innerHTML: n }, t), i)
               );
           }),
           (t.handleClick = function (e) {
               var t = this.player_.audioTracks();
               s.prototype.handleClick.call(this, e);
               for (var i = 0; i < t.length; i++) {
                   var n = t[i];
                   n.enabled = n === this.track;
               }
           }),
           (t.handleTracksChange = function (e) {
               this.selected(this.track.enabled);
           }),
           e
       );
   })(Qn);
   je.registerComponent("AudioTrackMenuItem", lr);
   var cr = (function (i) {
       function e(e, t) {
           return void 0 === t && (t = {}), (t.tracks = e.audioTracks()), i.call(this, e, t) || this;
       }
       Ge(e, i);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-audio-button " + i.prototype.buildCSSClass.call(this);
           }),
           (t.buildWrapperCSSClass = function () {
               return "vjs-audio-button " + i.prototype.buildWrapperCSSClass.call(this);
           }),
           (t.createItems = function (e) {
               void 0 === e && (e = []), (this.hideThreshold_ = 1);
               for (var t = this.player_.audioTracks(), i = 0; i < t.length; i++) {
                   var n = t[i];
                   e.push(new lr(this.player_, { track: n, selectable: !0, multiSelectable: !1 }));
               }
               return e;
           }),
           e
       );
   })(Yn);
   (cr.prototype.controlText_ = "Audio Track"), je.registerComponent("AudioTrackButton", cr);
   var dr = (function (a) {
       function e(e, t) {
           var i,
               n = t.rate,
               r = parseFloat(n, 10);
           return (t.label = n), (t.selected = 1 === r), (t.selectable = !0), (t.multiSelectable = !1), ((i = a.call(this, e, t) || this).label = n), (i.rate = r), i.on(e, "ratechange", i.update), i;
       }
       Ge(e, a);
       var t = e.prototype;
       return (
           (t.handleClick = function (e) {
               a.prototype.handleClick.call(this), this.player().playbackRate(this.rate);
           }),
           (t.update = function (e) {
               this.selected(this.player().playbackRate() === this.rate);
           }),
           e
       );
   })(Qn);
   (dr.prototype.contentElType = "button"), je.registerComponent("PlaybackRateMenuItem", dr);
   var hr = (function (n) {
       function e(e, t) {
           var i;
           return (i = n.call(this, e, t) || this).updateVisibility(), i.updateLabel(), i.on(e, "loadstart", i.updateVisibility), i.on(e, "ratechange", i.updateLabel), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.createEl = function () {
               var e = n.prototype.createEl.call(this);
               return (this.labelEl_ = k("div", { className: "vjs-playback-rate-value", innerHTML: "1x" })), e.appendChild(this.labelEl_), e;
           }),
           (t.dispose = function () {
               (this.labelEl_ = null), n.prototype.dispose.call(this);
           }),
           (t.buildCSSClass = function () {
               return "vjs-playback-rate " + n.prototype.buildCSSClass.call(this);
           }),
           (t.buildWrapperCSSClass = function () {
               return "vjs-playback-rate " + n.prototype.buildWrapperCSSClass.call(this);
           }),
           (t.createMenu = function () {
               var e = new Xn(this.player()),
                   t = this.playbackRates();
               if (t) for (var i = t.length - 1; 0 <= i; i--) e.addChild(new dr(this.player(), { rate: t[i] + "x" }));
               return e;
           }),
           (t.updateARIAAttributes = function () {
               this.el().setAttribute("aria-valuenow", this.player().playbackRate());
           }),
           (t.handleClick = function (e) {
               for (var t = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++)
                   if (i[r] > t) {
                       n = i[r];
                       break;
                   }
               this.player().playbackRate(n);
           }),
           (t.playbackRates = function () {
               return this.options_.playbackRates || (this.options_.playerOptions && this.options_.playerOptions.playbackRates);
           }),
           (t.playbackRateSupported = function () {
               return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && 0 < this.playbackRates().length;
           }),
           (t.updateVisibility = function (e) {
               this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden");
           }),
           (t.updateLabel = function (e) {
               this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x");
           }),
           e
       );
   })(Kn);
   (hr.prototype.controlText_ = "Playback Rate"), je.registerComponent("PlaybackRateMenuButton", hr);
   var pr = (function (e) {
       function t() {
           return e.apply(this, arguments) || this;
       }
       Ge(t, e);
       var i = t.prototype;
       return (
           (i.buildCSSClass = function () {
               return "vjs-spacer " + e.prototype.buildCSSClass.call(this);
           }),
           (i.createEl = function () {
               return e.prototype.createEl.call(this, "div", { className: this.buildCSSClass() });
           }),
           t
       );
   })(je);
   je.registerComponent("Spacer", pr);
   var fr = (function (t) {
       function e() {
           return t.apply(this, arguments) || this;
       }
       Ge(e, t);
       var i = e.prototype;
       return (
           (i.buildCSSClass = function () {
               return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this);
           }),
           (i.createEl = function () {
               var e = t.prototype.createEl.call(this, { className: this.buildCSSClass() });
               return (e.innerHTML = " "), e;
           }),
           e
       );
   })(pr);
   je.registerComponent("CustomControlSpacer", fr);
   var mr = (function (e) {
       function t() {
           return e.apply(this, arguments) || this;
       }
       return (
           Ge(t, e),
           (t.prototype.createEl = function () {
               return e.prototype.createEl.call(this, "div", { className: "vjs-control-bar", dir: "ltr" });
           }),
           t
       );
   })(je);
   (mr.prototype.options_ = {
       children: [
           "playToggle",
           "volumePanel",
           "currentTimeDisplay",
           "timeDivider",
           "durationDisplay",
           "progressControl",
           "liveDisplay",
           "seekToLive",
           "remainingTimeDisplay",
           "customControlSpacer",
           "playbackRateMenuButton",
           "chaptersButton",
           "descriptionsButton",
           "subsCapsButton",
           "audioTrackButton",
           "fullscreenToggle",
       ],
   }),
       "exitPictureInPicture" in d && mr.prototype.options_.children.splice(mr.prototype.options_.children.length - 1, 0, "pictureInPictureToggle"),
       je.registerComponent("ControlBar", mr);
   var gr = (function (n) {
       function e(e, t) {
           var i;
           return (i = n.call(this, e, t) || this).on(e, "error", i.open), i;
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.buildCSSClass = function () {
               return "vjs-error-display " + n.prototype.buildCSSClass.call(this);
           }),
           (t.content = function () {
               var e = this.player().error();
               return e ? this.localize(e.message) : "";
           }),
           e
       );
   })(Mt);
   (gr.prototype.options_ = m({}, Mt.prototype.options_, { pauseOnOpen: !1, fillAlways: !0, temporary: !1, uncloseable: !0 })), je.registerComponent("ErrorDisplay", gr);
   var vr = "vjs-text-track-settings",
       yr = ["#000", "Black"],
       _r = ["#00F", "Blue"],
       br = ["#0FF", "Cyan"],
       Tr = ["#0F0", "Green"],
       Sr = ["#F0F", "Magenta"],
       kr = ["#F00", "Red"],
       Cr = ["#FFF", "White"],
       Er = ["#FF0", "Yellow"],
       wr = ["1", "Opaque"],
       Ir = ["0.5", "Semi-Transparent"],
       Ar = ["0", "Transparent"],
       xr = {
           backgroundColor: { selector: ".vjs-bg-color > select", id: "captions-background-color-%s", label: "Color", options: [yr, Cr, kr, Tr, _r, Er, Sr, br] },
           backgroundOpacity: { selector: ".vjs-bg-opacity > select", id: "captions-background-opacity-%s", label: "Transparency", options: [wr, Ir, Ar] },
           color: { selector: ".vjs-fg-color > select", id: "captions-foreground-color-%s", label: "Color", options: [Cr, yr, kr, Tr, _r, Er, Sr, br] },
           edgeStyle: {
               selector: ".vjs-edge-style > select",
               id: "%s",
               label: "Text Edge Style",
               options: [
                   ["none", "None"],
                   ["raised", "Raised"],
                   ["depressed", "Depressed"],
                   ["uniform", "Uniform"],
                   ["dropshadow", "Dropshadow"],
               ],
           },
           fontFamily: {
               selector: ".vjs-font-family > select",
               id: "captions-font-family-%s",
               label: "Font Family",
               options: [
                   ["proportionalSansSerif", "Proportional Sans-Serif"],
                   ["monospaceSansSerif", "Monospace Sans-Serif"],
                   ["proportionalSerif", "Proportional Serif"],
                   ["monospaceSerif", "Monospace Serif"],
                   ["casual", "Casual"],
                   ["script", "Script"],
                   ["small-caps", "Small Caps"],
               ],
           },
           fontPercent: {
               selector: ".vjs-font-percent > select",
               id: "captions-font-size-%s",
               label: "Font Size",
               options: [
                   ["0.50", "50%"],
                   ["0.75", "75%"],
                   ["1.00", "100%"],
                   ["1.25", "125%"],
                   ["1.50", "150%"],
                   ["1.75", "175%"],
                   ["2.00", "200%"],
                   ["3.00", "300%"],
                   ["4.00", "400%"],
               ],
               default: 2,
               parser: function (e) {
                   return "1.00" === e ? null : Number(e);
               },
           },
           textOpacity: { selector: ".vjs-text-opacity > select", id: "captions-foreground-opacity-%s", label: "Transparency", options: [wr, Ir] },
           windowColor: { selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color" },
           windowOpacity: { selector: ".vjs-window-opacity > select", id: "captions-window-opacity-%s", label: "Transparency", options: [Ar, Ir, wr] },
       };
   function Pr(e, t) {
       if ((t && (e = t(e)), e && "none" !== e)) return e;
   }
   xr.windowColor.options = xr.backgroundColor.options;
   var Lr = (function (n) {
       function e(e, t) {
           var i;
           return (
               (t.temporary = !1),
               ((i = n.call(this, e, t) || this).updateDisplay = ve(Ve(i), i.updateDisplay)),
               i.fill(),
               (i.hasBeenOpened_ = i.hasBeenFilled_ = !0),
               (i.endDialog = k("p", { className: "vjs-control-text", textContent: i.localize("End of dialog window.") })),
               i.el().appendChild(i.endDialog),
               i.setDefaults(),
               void 0 === t.persistTextTrackSettings && (i.options_.persistTextTrackSettings = i.options_.playerOptions.persistTextTrackSettings),
               i.on(i.$(".vjs-done-button"), "click", function () {
                   i.saveSettings(), i.close();
               }),
               i.on(i.$(".vjs-default-button"), "click", function () {
                   i.setDefaults(), i.updateDisplay();
               }),
               r(xr, function (e) {
                   i.on(i.$(e.selector), "change", i.updateDisplay);
               }),
               i.options_.persistTextTrackSettings && i.restoreSettings(),
               i
           );
       }
       Ge(e, n);
       var t = e.prototype;
       return (
           (t.dispose = function () {
               (this.endDialog = null), n.prototype.dispose.call(this);
           }),
           (t.createElSelect_ = function (e, t, i) {
               var n = this;
               void 0 === t && (t = ""), void 0 === i && (i = "label");
               var r = xr[e],
                   a = r.id.replace("%s", this.id_),
                   s = [t, a].join(" ").trim();
               return ["<" + i + ' id="' + a + '" class="' + ("label" === i ? "vjs-label" : "") + '">', this.localize(r.label), "</" + i + ">", '<select aria-labelledby="' + s + '">']
                   .concat(
                       r.options.map(function (e) {
                           var t = a + "-" + e[1].replace(/\W+/g, "");
                           return ['<option id="' + t + '" value="' + e[0] + '" ', 'aria-labelledby="' + s + " " + t + '">', n.localize(e[1]), "</option>"].join("");
                       })
                   )
                   .concat("</select>")
                   .join("");
           }),
           (t.createElFgColor_ = function () {
               var e = "captions-text-legend-" + this.id_;
               return [
                   '<fieldset class="vjs-fg-color vjs-track-setting">',
                   '<legend id="' + e + '">',
                   this.localize("Text"),
                   "</legend>",
                   this.createElSelect_("color", e),
                   '<span class="vjs-text-opacity vjs-opacity">',
                   this.createElSelect_("textOpacity", e),
                   "</span>",
                   "</fieldset>",
               ].join("");
           }),
           (t.createElBgColor_ = function () {
               var e = "captions-background-" + this.id_;
               return [
                   '<fieldset class="vjs-bg-color vjs-track-setting">',
                   '<legend id="' + e + '">',
                   this.localize("Background"),
                   "</legend>",
                   this.createElSelect_("backgroundColor", e),
                   '<span class="vjs-bg-opacity vjs-opacity">',
                   this.createElSelect_("backgroundOpacity", e),
                   "</span>",
                   "</fieldset>",
               ].join("");
           }),
           (t.createElWinColor_ = function () {
               var e = "captions-window-" + this.id_;
               return [
                   '<fieldset class="vjs-window-color vjs-track-setting">',
                   '<legend id="' + e + '">',
                   this.localize("Window"),
                   "</legend>",
                   this.createElSelect_("windowColor", e),
                   '<span class="vjs-window-opacity vjs-opacity">',
                   this.createElSelect_("windowOpacity", e),
                   "</span>",
                   "</fieldset>",
               ].join("");
           }),
           (t.createElColors_ = function () {
               return k("div", { className: "vjs-track-settings-colors", innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("") });
           }),
           (t.createElFont_ = function () {
               return k("div", {
                   className: "vjs-track-settings-font",
                   innerHTML: [
                       '<fieldset class="vjs-font-percent vjs-track-setting">',
                       this.createElSelect_("fontPercent", "", "legend"),
                       "</fieldset>",
                       '<fieldset class="vjs-edge-style vjs-track-setting">',
                       this.createElSelect_("edgeStyle", "", "legend"),
                       "</fieldset>",
                       '<fieldset class="vjs-font-family vjs-track-setting">',
                       this.createElSelect_("fontFamily", "", "legend"),
                       "</fieldset>",
                   ].join(""),
               });
           }),
           (t.createElControls_ = function () {
               var e = this.localize("restore all settings to the default values");
               return k("div", {
                   className: "vjs-track-settings-controls",
                   innerHTML: [
                       '<button type="button" class="vjs-default-button" title="' + e + '">',
                       this.localize("Reset"),
                       '<span class="vjs-control-text"> ' + e + "</span>",
                       "</button>",
                       '<button type="button" class="vjs-done-button">' + this.localize("Done") + "</button>",
                   ].join(""),
               });
           }),
           (t.content = function () {
               return [this.createElColors_(), this.createElFont_(), this.createElControls_()];
           }),
           (t.label = function () {
               return this.localize("Caption Settings Dialog");
           }),
           (t.description = function () {
               return this.localize("Beginning of dialog window. Escape will cancel and close the window.");
           }),
           (t.buildCSSClass = function () {
               return n.prototype.buildCSSClass.call(this) + " vjs-text-track-settings";
           }),
           (t.getValues = function () {
               var r = this;
               return (function (i, n, e) {
                   return (
                       void 0 === e && (e = 0),
                       a(i).reduce(function (e, t) {
                           return n(e, i[t], t);
                       }, e)
                   );
               })(
                   xr,
                   function (e, t, i) {
                       var n = (function (e, t) {
                           return Pr(e.options[e.options.selectedIndex].value, t);
                       })(r.$(t.selector), t.parser);
                       return void 0 !== n && (e[i] = n), e;
                   },
                   {}
               );
           }),
           (t.setValues = function (i) {
               var n = this;
               r(xr, function (e, t) {
                   !(function (e, t, i) {
                       if (t)
                           for (var n = 0; n < e.options.length; n++)
                               if (Pr(e.options[n].value, i) === t) {
                                   e.selectedIndex = n;
                                   break;
                               }
                   })(n.$(e.selector), i[t], e.parser);
               });
           }),
           (t.setDefaults = function () {
               var i = this;
               r(xr, function (e) {
                   var t = e.hasOwnProperty("default") ? e.default : 0;
                   i.$(e.selector).selectedIndex = t;
               });
           }),
           (t.restoreSettings = function () {
               var e;
               try {
                   e = JSON.parse(T.localStorage.getItem(vr));
               } catch (e) {
                   p.warn(e);
               }
               e && this.setValues(e);
           }),
           (t.saveSettings = function () {
               if (this.options_.persistTextTrackSettings) {
                   var e = this.getValues();
                   try {
                       Object.keys(e).length ? T.localStorage.setItem(vr, JSON.stringify(e)) : T.localStorage.removeItem(vr);
                   } catch (e) {
                       p.warn(e);
                   }
               }
           }),
           (t.updateDisplay = function () {
               var e = this.player_.getChild("textTrackDisplay");
               e && e.updateDisplay();
           }),
           (t.conditionalBlur_ = function () {
               this.previouslyActiveEl_ = null;
               var e = this.player_.controlBar,
                   t = e && e.subsCapsButton,
                   i = e && e.captionsButton;
               t ? t.focus() : i && i.focus();
           }),
           e
       );
   })(Mt);
   je.registerComponent("TextTrackSettings", Lr);
   var Or = (function (a) {
       function e(e, t) {
           var i,
               n = t.ResizeObserver || T.ResizeObserver;
           null === t.ResizeObserver && (n = !1);
           var r = Re({ createEl: !n, reportTouchActivity: !1 }, t);
           return (
               ((i = a.call(this, e, r) || this).ResizeObserver = t.ResizeObserver || T.ResizeObserver),
               (i.loadListener_ = null),
               (i.resizeObserver_ = null),
               (i.debouncedHandler_ = (function (n, r, a, s) {
                   var o;
                   void 0 === s && (s = T);
                   function e() {
                       var e = this,
                           t = arguments,
                           i = function () {
                               (i = o = null), a || n.apply(e, t);
                           };
                       !o && a && n.apply(e, t), s.clearTimeout(o), (o = s.setTimeout(i, r));
                   }
                   return (
                       (e.cancel = function () {
                           s.clearTimeout(o), (o = null);
                       }),
                       e
                   );
               })(
                   function () {
                       i.resizeHandler();
                   },
                   100,
                   !1,
                   Ve(i)
               )),
               n
                   ? ((i.resizeObserver_ = new i.ResizeObserver(i.debouncedHandler_)), i.resizeObserver_.observe(e.el()))
                   : ((i.loadListener_ = function () {
                         if (i.el_ && i.el_.contentWindow) {
                             var e = i.debouncedHandler_,
                                 t = (i.unloadListener_ = function () {
                                     pe(this, "resize", e), pe(this, "unload", t), (t = null);
                                 });
                             he(i.el_.contentWindow, "unload", t), he(i.el_.contentWindow, "resize", e);
                         }
                     }),
                     i.one("load", i.loadListener_)),
               i
           );
       }
       Ge(e, a);
       var t = e.prototype;
       return (
           (t.createEl = function () {
               return a.prototype.createEl.call(this, "iframe", { className: "vjs-resize-manager", tabIndex: -1 }, { "aria-hidden": "true" });
           }),
           (t.resizeHandler = function () {
               this.player_ && this.player_.trigger && this.player_.trigger("playerresize");
           }),
           (t.dispose = function () {
               this.debouncedHandler_ && this.debouncedHandler_.cancel(),
                   this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()),
                   this.loadListener_ && this.off("load", this.loadListener_),
                   this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow),
                   (this.ResizeObserver = null),
                   (this.resizeObserver = null),
                   (this.debouncedHandler_ = null),
                   (this.loadListener_ = null),
                   a.prototype.dispose.call(this);
           }),
           e
       );
   })(je);
   je.registerComponent("ResizeManager", Or);
   var Dr = { trackingThreshold: 30, liveTolerance: 15 },
       Mr = (function (r) {
           function e(e, t) {
               var i,
                   n = Re(Dr, t, { createEl: !1 });
               return (i = r.call(this, e, n) || this).reset_(), i.on(i.player_, "durationchange", i.handleDurationchange), at && "hidden" in d && "visibilityState" in d && i.on(d, "visibilitychange", i.handleVisibilityChange), i;
           }
           Ge(e, r);
           var t = e.prototype;
           return (
               (t.handleVisibilityChange = function () {
                   this.player_.duration() === 1 / 0 && (d.hidden ? this.stopTracking() : this.startTracking());
               }),
               (t.trackLive_ = function () {
                   var e = this.player_.seekable();
                   if (e && e.length) {
                       var t = Number(T.performance.now().toFixed(4)),
                           i = -1 === this.lastTime_ ? 0 : (t - this.lastTime_) / 1e3;
                       (this.lastTime_ = t), (this.pastSeekEnd_ = this.pastSeekEnd() + i);
                       var n = this.liveCurrentTime(),
                           r = this.player_.currentTime(),
                           a = this.player_.paused() || this.seekedBehindLive_ || Math.abs(n - r) > this.options_.liveTolerance;
                       (this.timeupdateSeen_ && n !== 1 / 0) || (a = !1), a !== this.behindLiveEdge_ && ((this.behindLiveEdge_ = a), this.trigger("liveedgechange"));
                   }
               }),
               (t.handleDurationchange = function () {
                   this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold
                       ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"), this.startTracking())
                       : (this.player_.removeClass("vjs-liveui"), this.stopTracking());
               }),
               (t.startTracking = function () {
                   this.isTracking() ||
                       (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()),
                       (this.trackingInterval_ = this.setInterval(this.trackLive_, 30)),
                       this.trackLive_(),
                       this.on(this.player_, ["play", "pause"], this.trackLive_),
                       this.timeupdateSeen_ ? this.on(this.player_, "seeked", this.handleSeeked) : (this.one(this.player_, "play", this.handlePlay), this.one(this.player_, "timeupdate", this.handleFirstTimeupdate)));
               }),
               (t.handleFirstTimeupdate = function () {
                   (this.timeupdateSeen_ = !0), this.on(this.player_, "seeked", this.handleSeeked);
               }),
               (t.handleSeeked = function () {
                   var e = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
                   (this.seekedBehindLive_ = !this.skipNextSeeked_ && 2 < e), (this.skipNextSeeked_ = !1), this.trackLive_();
               }),
               (t.handlePlay = function () {
                   this.one(this.player_, "timeupdate", this.seekToLiveEdge);
               }),
               (t.reset_ = function () {
                   (this.lastTime_ = -1),
                       (this.pastSeekEnd_ = 0),
                       (this.lastSeekEnd_ = -1),
                       (this.behindLiveEdge_ = !0),
                       (this.timeupdateSeen_ = !1),
                       (this.seekedBehindLive_ = !1),
                       (this.skipNextSeeked_ = !1),
                       this.clearInterval(this.trackingInterval_),
                       (this.trackingInterval_ = null),
                       this.off(this.player_, ["play", "pause"], this.trackLive_),
                       this.off(this.player_, "seeked", this.handleSeeked),
                       this.off(this.player_, "play", this.handlePlay),
                       this.off(this.player_, "timeupdate", this.handleFirstTimeupdate),
                       this.off(this.player_, "timeupdate", this.seekToLiveEdge);
               }),
               (t.stopTracking = function () {
                   this.isTracking() && (this.reset_(), this.trigger("liveedgechange"));
               }),
               (t.seekableEnd = function () {
                   for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--; ) t.push(e.end(i));
                   return t.length ? t.sort()[t.length - 1] : 1 / 0;
               }),
               (t.seekableStart = function () {
                   for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--; ) t.push(e.start(i));
                   return t.length ? t.sort()[0] : 0;
               }),
               (t.liveWindow = function () {
                   var e = this.liveCurrentTime();
                   return e === 1 / 0 ? 1 / 0 : e - this.seekableStart();
               }),
               (t.isLive = function () {
                   return this.isTracking();
               }),
               (t.atLiveEdge = function () {
                   return !this.behindLiveEdge();
               }),
               (t.liveCurrentTime = function () {
                   return this.pastSeekEnd() + this.seekableEnd();
               }),
               (t.pastSeekEnd = function () {
                   var e = this.seekableEnd();
                   return -1 !== this.lastSeekEnd_ && e !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0), (this.lastSeekEnd_ = e), this.pastSeekEnd_;
               }),
               (t.behindLiveEdge = function () {
                   return this.behindLiveEdge_;
               }),
               (t.isTracking = function () {
                   return "number" == typeof this.trackingInterval_;
               }),
               (t.seekToLiveEdge = function () {
                   (this.seekedBehindLive_ = !1), this.atLiveEdge() || ((this.skipNextSeeked_ = !0), this.player_.currentTime(this.liveCurrentTime()));
               }),
               (t.dispose = function () {
                   this.off(d, "visibilitychange", this.handleVisibilityChange), this.stopTracking(), r.prototype.dispose.call(this);
               }),
               e
           );
       })(je);
   je.registerComponent("LiveTracker", Mr);
   function Rr(e) {
       var t = e.el();
       if (t.hasAttribute("src")) return e.triggerSourceset(t.src), !0;
       var i = e.$$("source"),
           n = [],
           r = "";
       if (!i.length) return !1;
       for (var a = 0; a < i.length; a++) {
           var s = i[a].src;
           s && -1 === n.indexOf(s) && n.push(s);
       }
       return !!n.length && (1 === n.length && (r = n[0]), e.triggerSourceset(r), !0);
   }
   function Nr(e, t) {
       for (var i = {}, n = 0; n < e.length && !((i = Object.getOwnPropertyDescriptor(e[n], t)) && i.set && i.get); n++);
       return (i.enumerable = !0), (i.configurable = !0), i;
   }
   function Ur(a) {
       var s = a.el();
       if (!s.resetSourceWatch_) {
           var t = {},
               e = (function (e) {
                   return Nr([e.el(), T.HTMLMediaElement.prototype, T.Element.prototype, Vr], "innerHTML");
               })(a),
               i = function (r) {
                   return function () {
                       for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                       var n = r.apply(s, t);
                       return Rr(a), n;
                   };
               };
           ["append", "appendChild", "insertAdjacentHTML"].forEach(function (e) {
               s[e] && ((t[e] = s[e]), (s[e] = i(t[e])));
           }),
               Object.defineProperty(s, "innerHTML", Re(e, { set: i(e.set) })),
               (s.resetSourceWatch_ = function () {
                   (s.resetSourceWatch_ = null),
                       Object.keys(t).forEach(function (e) {
                           s[e] = t[e];
                       }),
                       Object.defineProperty(s, "innerHTML", e);
               }),
               a.one("sourceset", s.resetSourceWatch_);
       }
   }
   function Fr(n) {
       if (n.featuresSourceset) {
           var r = n.el();
           if (!r.resetSourceset_) {
               var i = (function (e) {
                       return Nr([e.el(), T.HTMLMediaElement.prototype, qr], "src");
                   })(n),
                   a = r.setAttribute,
                   t = r.load;
               Object.defineProperty(
                   r,
                   "src",
                   Re(i, {
                       set: function (e) {
                           var t = i.set.call(r, e);
                           return n.triggerSourceset(r.src), t;
                       },
                   })
               ),
                   (r.setAttribute = function (e, t) {
                       var i = a.call(r, e, t);
                       return /src/i.test(e) && n.triggerSourceset(r.src), i;
                   }),
                   (r.load = function () {
                       var e = t.call(r);
                       return Rr(n) || (n.triggerSourceset(""), Ur(n)), e;
                   }),
                   r.currentSrc ? n.triggerSourceset(r.currentSrc) : Rr(n) || Ur(n),
                   (r.resetSourceset_ = function () {
                       (r.resetSourceset_ = null), (r.load = t), (r.setAttribute = a), Object.defineProperty(r, "src", i), r.resetSourceWatch_ && r.resetSourceWatch_();
                   });
           }
       }
   }
   function Br(t, i, n, e) {
       function r(e) {
           return Object.defineProperty(t, i, { value: e, enumerable: !0, writable: !0 });
       }
       void 0 === e && (e = !0);
       var a = {
           configurable: !0,
           enumerable: !0,
           get: function () {
               var e = n();
               return r(e), e;
           },
       };
       return e && (a.set = r), Object.defineProperty(t, i, a);
   }
   var jr,
       Vr = Object.defineProperty({}, "innerHTML", {
           get: function () {
               return this.cloneNode(!0).innerHTML;
           },
           set: function (e) {
               var t = d.createElement(this.nodeName.toLowerCase());
               t.innerHTML = e;
               for (var i = d.createDocumentFragment(); t.childNodes.length; ) i.appendChild(t.childNodes[0]);
               return (this.innerText = ""), T.Element.prototype.appendChild.call(this, i), this.innerHTML;
           },
       }),
       qr = Object.defineProperty({}, "src", {
           get: function () {
               return this.hasAttribute("src") ? jt(T.Element.prototype.getAttribute.call(this, "src")) : "";
           },
           set: function (e) {
               return T.Element.prototype.setAttribute.call(this, "src", e), e;
           },
       }),
       Hr = (function (c) {
           function o(e, t) {
               var i;
               i = c.call(this, e, t) || this;
               var n = e.source,
                   r = !1;
               if ((n && (i.el_.currentSrc !== n.src || (e.tag && 3 === e.tag.initNetworkState_)) ? i.setSource(n) : i.handleLateInit_(i.el_), e.enableSourceset && i.setupSourcesetHandling_(), i.el_.hasChildNodes())) {
                   for (var a = i.el_.childNodes, s = a.length, o = []; s--; ) {
                       var u = a[s];
                       "track" === u.nodeName.toLowerCase() &&
                           (i.featuresNativeTextTracks
                               ? (i.remoteTextTrackEls().addTrackElement_(u), i.remoteTextTracks().addTrack(u.track), i.textTracks().addTrack(u.track), r || i.el_.hasAttribute("crossorigin") || !qt(u.src) || (r = !0))
                               : o.push(u));
                   }
                   for (var l = 0; l < o.length; l++) i.el_.removeChild(o[l]);
               }
               return (
                   i.proxyNativeTracks_(),
                   i.featuresNativeTextTracks && r && p.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading."),
                   i.restoreMetadataTracksInIOSNativePlayer_(),
                   (ut || ct || et) && !0 === e.nativeControlsForTouch && i.setControls(!0),
                   i.proxyWebkitFullscreen_(),
                   i.triggerReady(),
                   i
               );
           }
           Ge(o, c);
           var e = o.prototype;
           return (
               (e.dispose = function () {
                   this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), o.disposeMediaElement(this.el_), (this.options_ = null), c.prototype.dispose.call(this);
               }),
               (e.setupSourcesetHandling_ = function () {
                   Fr(this);
               }),
               (e.restoreMetadataTracksInIOSNativePlayer_ = function () {
                   function e() {
                       i = [];
                       for (var e = 0; e < n.length; e++) {
                           var t = n[e];
                           "metadata" === t.kind && i.push({ track: t, storedMode: t.mode });
                       }
                   }
                   var i,
                       n = this.textTracks();
                   e(),
                       n.addEventListener("change", e),
                       this.on("dispose", function () {
                           return n.removeEventListener("change", e);
                       });
                   function r() {
                       for (var e = 0; e < i.length; e++) {
                           var t = i[e];
                           "disabled" === t.track.mode && t.track.mode !== t.storedMode && (t.track.mode = t.storedMode);
                       }
                       n.removeEventListener("change", r);
                   }
                   this.on("webkitbeginfullscreen", function () {
                       n.removeEventListener("change", e), n.removeEventListener("change", r), n.addEventListener("change", r);
                   }),
                       this.on("webkitendfullscreen", function () {
                           n.removeEventListener("change", e), n.addEventListener("change", e), n.removeEventListener("change", r);
                       });
               }),
               (e.overrideNative_ = function (e, t) {
                   var i = this;
                   if (t === this["featuresNative" + e + "Tracks"]) {
                       var n = e.toLowerCase();
                       this[n + "TracksListeners_"] &&
                           Object.keys(this[n + "TracksListeners_"]).forEach(function (e) {
                               i.el()[n + "Tracks"].removeEventListener(e, i[n + "TracksListeners_"][e]);
                           }),
                           (this["featuresNative" + e + "Tracks"] = !t),
                           (this[n + "TracksListeners_"] = null),
                           this.proxyNativeTracksForType_(n);
                   }
               }),
               (e.overrideNativeAudioTracks = function (e) {
                   this.overrideNative_("Audio", e);
               }),
               (e.overrideNativeVideoTracks = function (e) {
                   this.overrideNative_("Video", e);
               }),
               (e.proxyNativeTracksForType_ = function (i) {
                   var n = this,
                       e = fi[i],
                       r = this.el()[e.getterName],
                       a = this[e.getterName]();
                   if (this["featuresNative" + e.capitalName + "Tracks"] && r && r.addEventListener) {
                       var s = {
                               change: function (e) {
                                   var t = { type: "change", target: a, currentTarget: a, srcElement: a };
                                   a.trigger(t), "text" === i && n[mi.remoteText.getterName]().trigger(t);
                               },
                               addtrack: function (e) {
                                   a.addTrack(e.track);
                               },
                               removetrack: function (e) {
                                   a.removeTrack(e.track);
                               },
                           },
                           t = function () {
                               for (var e = [], t = 0; t < a.length; t++) {
                                   for (var i = !1, n = 0; n < r.length; n++)
                                       if (r[n] === a[t]) {
                                           i = !0;
                                           break;
                                       }
                                   i || e.push(a[t]);
                               }
                               for (; e.length; ) a.removeTrack(e.shift());
                           };
                       (this[e.getterName + "Listeners_"] = s),
                           Object.keys(s).forEach(function (t) {
                               var i = s[t];
                               r.addEventListener(t, i),
                                   n.on("dispose", function (e) {
                                       return r.removeEventListener(t, i);
                                   });
                           }),
                           this.on("loadstart", t),
                           this.on("dispose", function (e) {
                               return n.off("loadstart", t);
                           });
                   }
               }),
               (e.proxyNativeTracks_ = function () {
                   var t = this;
                   fi.names.forEach(function (e) {
                       t.proxyNativeTracksForType_(e);
                   });
               }),
               (e.createEl = function () {
                   var e = this.options_.tag;
                   if (!e || (!this.options_.playerElIngest && !this.movingMediaElementInDOM)) {
                       if (e) {
                           var t = e.cloneNode(!0);
                           e.parentNode && e.parentNode.insertBefore(t, e), o.disposeMediaElement(e), (e = t);
                       } else {
                           e = d.createElement("video");
                           var i = Re({}, this.options_.tag && L(this.options_.tag));
                           (ut && !0 === this.options_.nativeControlsForTouch) || delete i.controls, P(e, g(i, { id: this.options_.techId, class: "vjs-tech" }));
                       }
                       e.playerId = this.options_.playerId;
                   }
                   "undefined" != typeof this.options_.preload && D(e, "preload", this.options_.preload), void 0 !== this.options_.disablePictureInPicture && (e.disablePictureInPicture = this.options_.disablePictureInPicture);
                   for (var n = ["loop", "muted", "playsinline", "autoplay"], r = 0; r < n.length; r++) {
                       var a = n[r],
                           s = this.options_[a];
                       "undefined" != typeof s && (s ? D(e, a, a) : M(e, a), (e[a] = s));
                   }
                   return e;
               }),
               (e.handleLateInit_ = function (e) {
                   if (0 !== e.networkState && 3 !== e.networkState) {
                       if (0 === e.readyState) {
                           var t = !1,
                               i = function () {
                                   t = !0;
                               };
                           this.on("loadstart", i);
                           var n = function () {
                               t || this.trigger("loadstart");
                           };
                           return (
                               this.on("loadedmetadata", n),
                               void this.ready(function () {
                                   this.off("loadstart", i), this.off("loadedmetadata", n), t || this.trigger("loadstart");
                               })
                           );
                       }
                       var r = ["loadstart"];
                       r.push("loadedmetadata"),
                           2 <= e.readyState && r.push("loadeddata"),
                           3 <= e.readyState && r.push("canplay"),
                           4 <= e.readyState && r.push("canplaythrough"),
                           this.ready(function () {
                               r.forEach(function (e) {
                                   this.trigger(e);
                               }, this);
                           });
                   }
               }),
               (e.setScrubbing = function (e) {
                   this.isScrubbing_ = e;
               }),
               (e.setCurrentTime = function (e) {
                   try {
                       this.isScrubbing_ && this.el_.fastSeek && ht ? this.el_.fastSeek(e) : (this.el_.currentTime = e);
                   } catch (e) {
                       p(e, "Video is not ready. (Video.js)");
                   }
               }),
               (e.duration = function () {
                   var t = this;
                   if (this.el_.duration === 1 / 0 && Je && nt && 0 === this.el_.currentTime) {
                       return (
                           this.on("timeupdate", function e() {
                               0 < t.el_.currentTime && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", e));
                           }),
                           NaN
                       );
                   }
                   return this.el_.duration || NaN;
               }),
               (e.width = function () {
                   return this.el_.offsetWidth;
               }),
               (e.height = function () {
                   return this.el_.offsetHeight;
               }),
               (e.proxyWebkitFullscreen_ = function () {
                   var e = this;
                   if ("webkitDisplayingFullscreen" in this.el_) {
                       var t = function () {
                               this.trigger("fullscreenchange", { isFullscreen: !1 });
                           },
                           i = function () {
                               "webkitPresentationMode" in this.el_ &&
                                   "picture-in-picture" !== this.el_.webkitPresentationMode &&
                                   (this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", { isFullscreen: !0, nativeIOSFullscreen: !0 }));
                           };
                       this.on("webkitbeginfullscreen", i),
                           this.on("dispose", function () {
                               e.off("webkitbeginfullscreen", i), e.off("webkitendfullscreen", t);
                           });
                   }
               }),
               (e.supportsFullScreen = function () {
                   if ("function" == typeof this.el_.webkitEnterFullScreen) {
                       var e = (T.navigator && T.navigator.userAgent) || "";
                       if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return !0;
                   }
                   return !1;
               }),
               (e.enterFullScreen = function () {
                   var e = this.el_;
                   if (e.paused && e.networkState <= e.HAVE_METADATA)
                       At(this.el_.play()),
                           this.setTimeout(function () {
                               e.pause();
                               try {
                                   e.webkitEnterFullScreen();
                               } catch (e) {
                                   this.trigger("fullscreenerror", e);
                               }
                           }, 0);
                   else
                       try {
                           e.webkitEnterFullScreen();
                       } catch (e) {
                           this.trigger("fullscreenerror", e);
                       }
               }),
               (e.exitFullScreen = function () {
                   this.el_.webkitDisplayingFullscreen ? this.el_.webkitExitFullScreen() : this.trigger("fullscreenerror", new Error("The video is not fullscreen"));
               }),
               (e.requestPictureInPicture = function () {
                   return this.el_.requestPictureInPicture();
               }),
               (e.src = function (e) {
                   if (void 0 === e) return this.el_.src;
                   this.setSrc(e);
               }),
               (e.reset = function () {
                   o.resetMediaElement(this.el_);
               }),
               (e.currentSrc = function () {
                   return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc;
               }),
               (e.setControls = function (e) {
                   this.el_.controls = !!e;
               }),
               (e.addTextTrack = function (e, t, i) {
                   return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, t, i) : c.prototype.addTextTrack.call(this, e, t, i);
               }),
               (e.createRemoteTextTrack = function (e) {
                   if (!this.featuresNativeTextTracks) return c.prototype.createRemoteTextTrack.call(this, e);
                   var t = d.createElement("track");
                   return (
                       e.kind && (t.kind = e.kind),
                       e.label && (t.label = e.label),
                       (e.language || e.srclang) && (t.srclang = e.language || e.srclang),
                       e.default && (t.default = e.default),
                       e.id && (t.id = e.id),
                       e.src && (t.src = e.src),
                       t
                   );
               }),
               (e.addRemoteTextTrack = function (e, t) {
                   var i = c.prototype.addRemoteTextTrack.call(this, e, t);
                   return this.featuresNativeTextTracks && this.el().appendChild(i), i;
               }),
               (e.removeRemoteTextTrack = function (e) {
                   if ((c.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks)) for (var t = this.$$("track"), i = t.length; i--; ) (e !== t[i] && e !== t[i].track) || this.el().removeChild(t[i]);
               }),
               (e.getVideoPlaybackQuality = function () {
                   if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
                   var e = {};
                   return (
                       "undefined" != typeof this.el().webkitDroppedFrameCount &&
                           "undefined" != typeof this.el().webkitDecodedFrameCount &&
                           ((e.droppedVideoFrames = this.el().webkitDroppedFrameCount), (e.totalVideoFrames = this.el().webkitDecodedFrameCount)),
                       T.performance && "function" == typeof T.performance.now
                           ? (e.creationTime = T.performance.now())
                           : T.performance && T.performance.timing && "number" == typeof T.performance.timing.navigationStart && (e.creationTime = T.Date.now() - T.performance.timing.navigationStart),
                       e
                   );
               }),
               o
           );
       })(Xi);
   Br(Hr, "TEST_VID", function () {
       if (y()) {
           var e = d.createElement("video"),
               t = d.createElement("track");
           return (t.kind = "captions"), (t.srclang = "en"), (t.label = "English"), e.appendChild(t), e;
       }
   }),
       (Hr.isSupported = function () {
           try {
               Hr.TEST_VID.volume = 0.5;
           } catch (e) {
               return !1;
           }
           return !(!Hr.TEST_VID || !Hr.TEST_VID.canPlayType);
       }),
       (Hr.canPlayType = function (e) {
           return Hr.TEST_VID.canPlayType(e);
       }),
       (Hr.canPlaySource = function (e, t) {
           return Hr.canPlayType(e.type);
       }),
       (Hr.canControlVolume = function () {
           try {
               var e = Hr.TEST_VID.volume;
               return (Hr.TEST_VID.volume = e / 2 + 0.1), e !== Hr.TEST_VID.volume;
           } catch (e) {
               return !1;
           }
       }),
       (Hr.canMuteVolume = function () {
           try {
               var e = Hr.TEST_VID.muted;
               return (Hr.TEST_VID.muted = !e), Hr.TEST_VID.muted ? D(Hr.TEST_VID, "muted", "muted") : M(Hr.TEST_VID, "muted"), e !== Hr.TEST_VID.muted;
           } catch (e) {
               return !1;
           }
       }),
       (Hr.canControlPlaybackRate = function () {
           if (Je && nt && rt < 58) return !1;
           try {
               var e = Hr.TEST_VID.playbackRate;
               return (Hr.TEST_VID.playbackRate = e / 2 + 0.1), e !== Hr.TEST_VID.playbackRate;
           } catch (e) {
               return !1;
           }
       }),
       (Hr.canOverrideAttributes = function () {
           try {
               var e = function () {};
               Object.defineProperty(d.createElement("video"), "src", { get: e, set: e }),
                   Object.defineProperty(d.createElement("audio"), "src", { get: e, set: e }),
                   Object.defineProperty(d.createElement("video"), "innerHTML", { get: e, set: e }),
                   Object.defineProperty(d.createElement("audio"), "innerHTML", { get: e, set: e });
           } catch (e) {
               return !1;
           }
           return !0;
       }),
       (Hr.supportsNativeTextTracks = function () {
           return ht || (dt && nt);
       }),
       (Hr.supportsNativeVideoTracks = function () {
           return !(!Hr.TEST_VID || !Hr.TEST_VID.videoTracks);
       }),
       (Hr.supportsNativeAudioTracks = function () {
           return !(!Hr.TEST_VID || !Hr.TEST_VID.audioTracks);
       }),
       (Hr.Events = [
           "loadstart",
           "suspend",
           "abort",
           "error",
           "emptied",
           "stalled",
           "loadedmetadata",
           "loadeddata",
           "canplay",
           "canplaythrough",
           "playing",
           "waiting",
           "seeking",
           "seeked",
           "ended",
           "durationchange",
           "timeupdate",
           "progress",
           "play",
           "pause",
           "ratechange",
           "resize",
           "volumechange",
       ]),
       [
           ["featuresVolumeControl", "canControlVolume"],
           ["featuresMuteControl", "canMuteVolume"],
           ["featuresPlaybackRate", "canControlPlaybackRate"],
           ["featuresSourceset", "canOverrideAttributes"],
           ["featuresNativeTextTracks", "supportsNativeTextTracks"],
           ["featuresNativeVideoTracks", "supportsNativeVideoTracks"],
           ["featuresNativeAudioTracks", "supportsNativeAudioTracks"],
       ].forEach(function (e) {
           var t = e[0],
               i = e[1];
           Br(
               Hr.prototype,
               t,
               function () {
                   return Hr[i]();
               },
               !0
           );
       }),
       (Hr.prototype.movingMediaElementInDOM = !dt),
       (Hr.prototype.featuresFullscreenResize = !0),
       (Hr.prototype.featuresProgressEvents = !0),
       (Hr.prototype.featuresTimeupdateEvents = !0),
       (Hr.patchCanPlayType = function () {
           4 <= Ze &&
               !tt &&
               !nt &&
               ((jr = Hr.TEST_VID && Hr.TEST_VID.constructor.prototype.canPlayType),
               (Hr.TEST_VID.constructor.prototype.canPlayType = function (e) {
                   return e && /^application\/(?:x-|vnd\.apple\.)mpegurl/i.test(e) ? "maybe" : jr.call(this, e);
               }));
       }),
       (Hr.unpatchCanPlayType = function () {
           var e = Hr.TEST_VID.constructor.prototype.canPlayType;
           return jr && (Hr.TEST_VID.constructor.prototype.canPlayType = jr), e;
       }),
       Hr.patchCanPlayType(),
       (Hr.disposeMediaElement = function (e) {
           if (e) {
               for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes(); ) e.removeChild(e.firstChild);
               e.removeAttribute("src"),
                   "function" == typeof e.load &&
                       (function () {
                           try {
                               e.load();
                           } catch (e) {}
                       })();
           }
       }),
       (Hr.resetMediaElement = function (e) {
           if (e) {
               for (var t = e.querySelectorAll("source"), i = t.length; i--; ) e.removeChild(t[i]);
               e.removeAttribute("src"),
                   "function" == typeof e.load &&
                       (function () {
                           try {
                               e.load();
                           } catch (e) {}
                       })();
           }
       }),
       ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function (e) {
           Hr.prototype[e] = function () {
               return this.el_[e] || this.el_.hasAttribute(e);
           };
       }),
       ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function (t) {
           Hr.prototype["set" + Me(t)] = function (e) {
               (this.el_[t] = e) ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t);
           };
       }),
       [
           "paused",
           "currentTime",
           "buffered",
           "volume",
           "poster",
           "preload",
           "error",
           "seeking",
           "seekable",
           "ended",
           "playbackRate",
           "defaultPlaybackRate",
           "disablePictureInPicture",
           "played",
           "networkState",
           "readyState",
           "videoWidth",
           "videoHeight",
           "crossOrigin",
       ].forEach(function (e) {
           Hr.prototype[e] = function () {
               return this.el_[e];
           };
       }),
       ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "crossOrigin"].forEach(function (t) {
           Hr.prototype["set" + Me(t)] = function (e) {
               this.el_[t] = e;
           };
       }),
       ["pause", "load", "play"].forEach(function (e) {
           Hr.prototype[e] = function () {
               return this.el_[e]();
           };
       }),
       Xi.withSourceHandlers(Hr),
       (Hr.nativeSourceHandler = {}),
       (Hr.nativeSourceHandler.canPlayType = function (e) {
           try {
               return Hr.TEST_VID.canPlayType(e);
           } catch (e) {
               return "";
           }
       }),
       (Hr.nativeSourceHandler.canHandleSource = function (e, t) {
           if (e.type) return Hr.nativeSourceHandler.canPlayType(e.type);
           if (e.src) {
               var i = Vt(e.src);
               return Hr.nativeSourceHandler.canPlayType("video/" + i);
           }
           return "";
       }),
       (Hr.nativeSourceHandler.handleSource = function (e, t, i) {
           t.setSrc(e.src);
       }),
       (Hr.nativeSourceHandler.dispose = function () {}),
       Hr.registerSourceHandler(Hr.nativeSourceHandler),
       Xi.registerTech("Html5", Hr);
   var Wr = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
       zr = { canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked" },
       Gr = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"],
       Xr = {};
   Gr.forEach(function (e) {
       var t = "x" === e.charAt(0) ? "x-" + e.substring(1) : e;
       Xr[e] = "vjs-layout-" + t;
   });
   var Kr = { tiny: 210, xsmall: 320, small: 425, medium: 768, large: 1440, xlarge: 2560, huge: 1 / 0 },
       Yr = (function (c) {
           function l(e, t, i) {
               var n;
               if (((e.id = e.id || t.id || "vjs_video_" + re()), ((t = g(l.getTagSettings(e), t)).initChildren = !1), (t.createEl = !1), (t.evented = !1), (t.reportTouchActivity = !1), !t.language))
                   if ("function" == typeof e.closest) {
                       var r = e.closest("[lang]");
                       r && r.getAttribute && (t.language = r.getAttribute("lang"));
                   } else
                       for (var a = e; a && 1 === a.nodeType; ) {
                           if (L(a).hasOwnProperty("lang")) {
                               t.language = a.getAttribute("lang");
                               break;
                           }
                           a = a.parentNode;
                       }
               if (
                   (((n = c.call(this, null, t, i) || this).boundDocumentFullscreenChange_ = ve(Ve(n), n.documentFullscreenChange_)),
                   (n.boundFullWindowOnEscKey_ = ve(Ve(n), n.fullWindowOnEscKey)),
                   (n.isFullscreen_ = !1),
                   (n.log = f(n.id_)),
                   (n.fsApi_ = _t),
                   (n.isPosterFromTech_ = !1),
                   (n.queuedCallbacks_ = []),
                   (n.isReady_ = !1),
                   (n.hasStarted_ = !1),
                   (n.userActive_ = !1),
                   (n.debugEnabled_ = !1),
                   !n.options_ || !n.options_.techOrder || !n.options_.techOrder.length)
               )
                   throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
               if (((n.tag = e), (n.tagAttributes = e && L(e)), n.language(n.options_.language), t.languages)) {
                   var s = {};
                   Object.getOwnPropertyNames(t.languages).forEach(function (e) {
                       s[e.toLowerCase()] = t.languages[e];
                   }),
                       (n.languages_ = s);
               } else n.languages_ = l.prototype.options_.languages;
               n.resetCache_(),
                   (n.poster_ = t.poster || ""),
                   (n.controls_ = !!t.controls),
                   (e.controls = !1),
                   e.removeAttribute("controls"),
                   (n.changingSrc_ = !1),
                   (n.playCallbacks_ = []),
                   (n.playTerminatedQueue_ = []),
                   e.hasAttribute("autoplay") ? n.autoplay(!0) : n.autoplay(n.options_.autoplay),
                   t.plugins &&
                       Object.keys(t.plugins).forEach(function (e) {
                           if ("function" != typeof n[e]) throw new Error('plugin "' + e + '" does not exist');
                       }),
                   (n.scrubbing_ = !1),
                   (n.el_ = n.createEl()),
                   Pe(Ve(n), { eventBusKey: "el_" }),
                   n.fsApi_.requestFullscreen && (he(d, n.fsApi_.fullscreenchange, n.boundDocumentFullscreenChange_), n.on(n.fsApi_.fullscreenchange, n.boundDocumentFullscreenChange_)),
                   n.fluid_ && n.on("playerreset", n.updateStyleEl_);
               var o = Re(n.options_);
               t.plugins &&
                   Object.keys(t.plugins).forEach(function (e) {
                       n[e](t.plugins[e]);
                   }),
                   t.debug && n.debug(!0),
                   (n.options_.playerOptions = o),
                   (n.middleware_ = []),
                   n.initChildren(),
                   n.isAudio("audio" === e.nodeName.toLowerCase()),
                   n.controls() ? n.addClass("vjs-controls-enabled") : n.addClass("vjs-controls-disabled"),
                   n.el_.setAttribute("role", "region"),
                   n.isAudio() ? n.el_.setAttribute("aria-label", n.localize("Audio Player")) : n.el_.setAttribute("aria-label", n.localize("Video Player")),
                   n.isAudio() && n.addClass("vjs-audio"),
                   n.flexNotSupported_() && n.addClass("vjs-no-flex"),
                   ut && n.addClass("vjs-touch-enabled"),
                   dt || n.addClass("vjs-workinghover"),
                   (l.players[n.id_] = Ve(n));
               var u = h.split(".")[0];
               return (
                   n.addClass("vjs-v" + u),
                   n.userActive(!0),
                   n.reportUserActivity(),
                   n.one("play", n.listenForUserActivity_),
                   n.on("stageclick", n.handleStageClick_),
                   n.on("keydown", n.handleKeyDown),
                   n.breakpoints(n.options_.breakpoints),
                   n.responsive(n.options_.responsive),
                   n
               );
           }
           Ge(l, c);
           var e = l.prototype;
           return (
               (e.dispose = function () {
                   var n = this;
                   this.trigger("dispose"),
                       this.off("dispose"),
                       pe(d, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_),
                       pe(d, "keydown", this.boundFullWindowOnEscKey_),
                       this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), (this.styleEl_ = null)),
                       (l.players[this.id_] = null),
                       this.tag && this.tag.player && (this.tag.player = null),
                       this.el_ && this.el_.player && (this.el_.player = null),
                       this.tech_ && (this.tech_.dispose(), (this.isPosterFromTech_ = !1), (this.poster_ = "")),
                       this.playerElIngest_ && (this.playerElIngest_ = null),
                       this.tag && (this.tag = null),
                       (function (e) {
                           Yi[e.id()] = null;
                       })(this),
                       gi.names.forEach(function (e) {
                           var t = gi[e],
                               i = n[t.getterName]();
                           i && i.off && i.off();
                       }),
                       c.prototype.dispose.call(this);
               }),
               (e.createEl = function () {
                   var t,
                       i = this.tag,
                       e = (this.playerElIngest_ = i.parentNode && i.parentNode.hasAttribute && i.parentNode.hasAttribute("data-vjs-player")),
                       n = "video-js" === this.tag.tagName.toLowerCase();
                   e ? (t = this.el_ = i.parentNode) : n || (t = this.el_ = c.prototype.createEl.call(this, "div"));
                   var r = L(i);
                   if (n) {
                       for (t = this.el_ = i, i = this.tag = d.createElement("video"); t.children.length; ) i.appendChild(t.firstChild);
                       w(t, "video-js") || I(t, "video-js"),
                           t.appendChild(i),
                           (e = this.playerElIngest_ = t),
                           Object.keys(t).forEach(function (e) {
                               try {
                                   i[e] = t[e];
                               } catch (e) {}
                           });
                   }
                   if (
                       (i.setAttribute("tabindex", "-1"),
                       (r.tabindex = "-1"),
                       (at || (nt && ot)) && (i.setAttribute("role", "application"), (r.role = "application")),
                       i.removeAttribute("width"),
                       i.removeAttribute("height"),
                       "width" in r && delete r.width,
                       "height" in r && delete r.height,
                       Object.getOwnPropertyNames(r).forEach(function (e) {
                           (n && "class" === e) || t.setAttribute(e, r[e]), n && i.setAttribute(e, r[e]);
                       }),
                       (i.playerId = i.id),
                       (i.id += "_html5_api"),
                       (i.className = "vjs-tech"),
                       (i.player = t.player = this),
                       this.addClass("vjs-paused"),
                       !0 !== T.VIDEOJS_NO_DYNAMIC_STYLE)
                   ) {
                       this.styleEl_ = ee("vjs-styles-dimensions");
                       var a = X(".vjs-styles-defaults"),
                           s = X("head");
                       s.insertBefore(this.styleEl_, a ? a.nextSibling : s.firstChild);
                   }
                   (this.fill_ = !1),
                       (this.fluid_ = !1),
                       this.width(this.options_.width),
                       this.height(this.options_.height),
                       this.fill(this.options_.fill),
                       this.fluid(this.options_.fluid),
                       this.aspectRatio(this.options_.aspectRatio),
                       this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
                   for (var o = i.getElementsByTagName("a"), u = 0; u < o.length; u++) {
                       var l = o.item(u);
                       I(l, "vjs-hidden"), l.setAttribute("hidden", "hidden");
                   }
                   return (i.initNetworkState_ = i.networkState), i.parentNode && !e && i.parentNode.insertBefore(t, i), E(i, t), this.children_.unshift(i), this.el_.setAttribute("lang", this.language_), (this.el_ = t);
               }),
               (e.crossOrigin = function (e) {
                   if (!e) return this.techGet_("crossOrigin");
                   "anonymous" === e || "use-credentials" === e ? this.techCall_("setCrossOrigin", e) : p.warn('crossOrigin must be "anonymous" or "use-credentials", given "' + e + '"');
               }),
               (e.width = function (e) {
                   return this.dimension("width", e);
               }),
               (e.height = function (e) {
                   return this.dimension("height", e);
               }),
               (e.dimension = function (e, t) {
                   var i = e + "_";
                   if (void 0 === t) return this[i] || 0;
                   if ("" === t || "auto" === t) return (this[i] = void 0), void this.updateStyleEl_();
                   var n = parseFloat(t);
                   isNaN(n) ? p.error('Improper value "' + t + '" supplied for for ' + e) : ((this[i] = n), this.updateStyleEl_());
               }),
               (e.fluid = function (e) {
                   if (void 0 === e) return !!this.fluid_;
                   (this.fluid_ = !!e),
                       Ae(this) && this.off("playerreset", this.updateStyleEl_),
                       e
                           ? (this.addClass("vjs-fluid"),
                             this.fill(!1),
                             (function (e, t) {
                                 Ae(e) ? t() : (e.eventedCallbacks || (e.eventedCallbacks = []), e.eventedCallbacks.push(t));
                             })(function () {
                                 this.on("playerreset", this.updateStyleEl_);
                             }))
                           : this.removeClass("vjs-fluid"),
                       this.updateStyleEl_();
               }),
               (e.fill = function (e) {
                   if (void 0 === e) return !!this.fill_;
                   (this.fill_ = !!e), e ? (this.addClass("vjs-fill"), this.fluid(!1)) : this.removeClass("vjs-fill");
               }),
               (e.aspectRatio = function (e) {
                   if (void 0 === e) return this.aspectRatio_;
                   if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                   (this.aspectRatio_ = e), this.fluid(!0), this.updateStyleEl_();
               }),
               (e.updateStyleEl_ = function () {
                   if (!0 !== T.VIDEOJS_NO_DYNAMIC_STYLE) {
                       var e,
                           t,
                           i,
                           n = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : 0 < this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
                           r = n[1] / n[0];
                       (e = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / r : this.videoWidth() || 300),
                           (t = void 0 !== this.height_ ? this.height_ : e * r),
                           (i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions"),
                           this.addClass(i),
                           te(this.styleEl_, "\n      ." + i + " {\n        width: " + e + "px;\n        height: " + t + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * r + "%;\n      }\n    ");
                   } else {
                       var a = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                           s = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                           o = this.tech_ && this.tech_.el();
                       o && (0 <= a && (o.width = a), 0 <= s && (o.height = s));
                   }
               }),
               (e.loadTech_ = function (e, t) {
                   var i = this;
                   this.tech_ && this.unloadTech_();
                   var n = Me(e),
                       r = e.charAt(0).toLowerCase() + e.slice(1);
                   "Html5" !== n && this.tag && (Xi.getTech("Html5").disposeMediaElement(this.tag), (this.tag.player = null), (this.tag = null)), (this.techName_ = n), (this.isReady_ = !1);
                   var a = {
                       source: t,
                       autoplay: "string" != typeof this.autoplay() && this.autoplay(),
                       nativeControlsForTouch: this.options_.nativeControlsForTouch,
                       playerId: this.id(),
                       techId: this.id() + "_" + r + "_api",
                       playsinline: this.options_.playsinline,
                       preload: this.options_.preload,
                       loop: this.options_.loop,
                       disablePictureInPicture: this.options_.disablePictureInPicture,
                       muted: this.options_.muted,
                       poster: this.poster(),
                       language: this.language(),
                       playerElIngest: this.playerElIngest_ || !1,
                       "vtt.js": this.options_["vtt.js"],
                       canOverridePoster: !!this.options_.techCanOverridePoster,
                       enableSourceset: this.options_.enableSourceset,
                       Promise: this.options_.Promise,
                   };
                   gi.names.forEach(function (e) {
                       var t = gi[e];
                       a[t.getterName] = i[t.privateName];
                   }),
                       g(a, this.options_[n]),
                       g(a, this.options_[r]),
                       g(a, this.options_[e.toLowerCase()]),
                       this.tag && (a.tag = this.tag),
                       t && t.src === this.cache_.src && 0 < this.cache_.currentTime && (a.startTime = this.cache_.currentTime);
                   var s = Xi.getTech(e);
                   if (!s) throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'");
                   (this.tech_ = new s(a)),
                       this.tech_.ready(ve(this, this.handleTechReady_), !0),
                       Lt(this.textTracksJson_ || [], this.tech_),
                       Wr.forEach(function (e) {
                           i.on(i.tech_, e, i["handleTech" + Me(e) + "_"]);
                       }),
                       Object.keys(zr).forEach(function (t) {
                           i.on(i.tech_, t, function (e) {
                               0 === i.tech_.playbackRate() && i.tech_.seeking() ? i.queuedCallbacks_.push({ callback: i["handleTech" + zr[t] + "_"].bind(i), event: e }) : i["handleTech" + zr[t] + "_"](e);
                           });
                       }),
                       this.on(this.tech_, "loadstart", this.handleTechLoadStart_),
                       this.on(this.tech_, "sourceset", this.handleTechSourceset_),
                       this.on(this.tech_, "waiting", this.handleTechWaiting_),
                       this.on(this.tech_, "ended", this.handleTechEnded_),
                       this.on(this.tech_, "seeking", this.handleTechSeeking_),
                       this.on(this.tech_, "play", this.handleTechPlay_),
                       this.on(this.tech_, "firstplay", this.handleTechFirstPlay_),
                       this.on(this.tech_, "pause", this.handleTechPause_),
                       this.on(this.tech_, "durationchange", this.handleTechDurationChange_),
                       this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_),
                       this.on(this.tech_, "fullscreenerror", this.handleTechFullscreenError_),
                       this.on(this.tech_, "enterpictureinpicture", this.handleTechEnterPictureInPicture_),
                       this.on(this.tech_, "leavepictureinpicture", this.handleTechLeavePictureInPicture_),
                       this.on(this.tech_, "error", this.handleTechError_),
                       this.on(this.tech_, "loadedmetadata", this.updateStyleEl_),
                       this.on(this.tech_, "posterchange", this.handleTechPosterChange_),
                       this.on(this.tech_, "textdata", this.handleTechTextData_),
                       this.on(this.tech_, "ratechange", this.handleTechRateChange_),
                       this.usingNativeControls(this.techGet_("controls")),
                       this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(),
                       this.tech_.el().parentNode === this.el() || ("Html5" === n && this.tag) || E(this.tech_.el(), this.el()),
                       this.tag && ((this.tag.player = null), (this.tag = null));
               }),
               (e.unloadTech_ = function () {
                   var i = this;
                   gi.names.forEach(function (e) {
                       var t = gi[e];
                       i[t.privateName] = i[t.getterName]();
                   }),
                       (this.textTracksJson_ = Pt(this.tech_)),
                       (this.isReady_ = !1),
                       this.tech_.dispose(),
                       (this.tech_ = !1),
                       this.isPosterFromTech_ && ((this.poster_ = ""), this.trigger("posterchange")),
                       (this.isPosterFromTech_ = !1);
               }),
               (e.tech = function (e) {
                   return void 0 === e && p.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n"), this.tech_;
               }),
               (e.addTechControlsListeners_ = function () {
                   this.removeTechControlsListeners_(),
                       this.on(this.tech_, "mouseup", this.handleTechClick_),
                       this.on(this.tech_, "dblclick", this.handleTechDoubleClick_),
                       this.on(this.tech_, "touchstart", this.handleTechTouchStart_),
                       this.on(this.tech_, "touchmove", this.handleTechTouchMove_),
                       this.on(this.tech_, "touchend", this.handleTechTouchEnd_),
                       this.on(this.tech_, "tap", this.handleTechTap_);
               }),
               (e.removeTechControlsListeners_ = function () {
                   this.off(this.tech_, "tap", this.handleTechTap_),
                       this.off(this.tech_, "touchstart", this.handleTechTouchStart_),
                       this.off(this.tech_, "touchmove", this.handleTechTouchMove_),
                       this.off(this.tech_, "touchend", this.handleTechTouchEnd_),
                       this.off(this.tech_, "mouseup", this.handleTechClick_),
                       this.off(this.tech_, "dblclick", this.handleTechDoubleClick_);
               }),
               (e.handleTechReady_ = function () {
                   this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_();
               }),
               (e.handleTechLoadStart_ = function () {
                   this.removeClass("vjs-ended"),
                       this.removeClass("vjs-seeking"),
                       this.error(null),
                       this.handleTechDurationChange_(),
                       this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")),
                       this.manualAutoplay_(this.autoplay());
               }),
               (e.manualAutoplay_ = function (t) {
                   var n = this;
                   if (this.tech_ && "string" == typeof t) {
                       var e,
                           i = function () {
                               var e = n.muted();
                               n.muted(!0);
                               function t() {
                                   n.muted(e);
                               }
                               n.playTerminatedQueue_.push(t);
                               var i = n.play();
                               if (It(i)) return i.catch(t);
                           };
                       if (("any" === t && !0 !== this.muted() ? It((e = this.play())) && (e = e.catch(i)) : (e = "muted" === t && !0 !== this.muted() ? i() : this.play()), It(e)))
                           return e
                               .then(function () {
                                   n.trigger({ type: "autoplay-success", autoplay: t });
                               })
                               .catch(function (e) {
                                   n.trigger({ type: "autoplay-failure", autoplay: t });
                               });
                   }
               }),
               (e.updateSourceCaches_ = function (e) {
                   void 0 === e && (e = "");
                   var t = e,
                       i = "";
                   "string" != typeof t && ((t = e.src), (i = e.type)),
                       (this.cache_.source = this.cache_.source || {}),
                       (this.cache_.sources = this.cache_.sources || []),
                       t &&
                           !i &&
                           (i = (function (e, t) {
                               if (!t) return "";
                               if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type;
                               var i = e.cache_.sources.filter(function (e) {
                                   return e.src === t;
                               });
                               if (i.length) return i[0].type;
                               for (var n = e.$$("source"), r = 0; r < n.length; r++) {
                                   var a = n[r];
                                   if (a.type && a.src && a.src === t) return a.type;
                               }
                               return an(t);
                           })(this, t)),
                       (this.cache_.source = Re({}, e, { src: t, type: i }));
                   for (
                       var n = this.cache_.sources.filter(function (e) {
                               return e.src && e.src === t;
                           }),
                           r = [],
                           a = this.$$("source"),
                           s = [],
                           o = 0;
                       o < a.length;
                       o++
                   ) {
                       var u = L(a[o]);
                       r.push(u), u.src && u.src === t && s.push(u.src);
                   }
                   s.length && !n.length ? (this.cache_.sources = r) : n.length || (this.cache_.sources = [this.cache_.source]), (this.cache_.src = t);
               }),
               (e.handleTechSourceset_ = function (e) {
                   var i = this;
                   if (!this.changingSrc_) {
                       var t = function (e) {
                               return i.updateSourceCaches_(e);
                           },
                           n = this.currentSource().src,
                           r = e.src;
                       n && !/^blob:/.test(n) && /^blob:/.test(r) && ((this.lastSource_ && (this.lastSource_.tech === r || this.lastSource_.player === n)) || (t = function () {})),
                           t(r),
                           e.src ||
                               this.tech_.any(["sourceset", "loadstart"], function (e) {
                                   if ("sourceset" !== e.type) {
                                       var t = i.techGet("currentSrc");
                                       (i.lastSource_.tech = t), i.updateSourceCaches_(t);
                                   }
                               });
                   }
                   (this.lastSource_ = { player: this.currentSource().src, tech: e.src }), this.trigger({ src: e.src, type: "sourceset" });
               }),
               (e.hasStarted = function (e) {
                   if (void 0 === e) return this.hasStarted_;
                   e !== this.hasStarted_ && ((this.hasStarted_ = e), this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"));
               }),
               (e.handleTechPlay_ = function () {
                   this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play");
               }),
               (e.handleTechRateChange_ = function () {
                   0 < this.tech_.playbackRate() &&
                       0 === this.cache_.lastPlaybackRate &&
                       (this.queuedCallbacks_.forEach(function (e) {
                           return e.callback(e.event);
                       }),
                       (this.queuedCallbacks_ = [])),
                       (this.cache_.lastPlaybackRate = this.tech_.playbackRate()),
                       this.trigger("ratechange");
               }),
               (e.handleTechWaiting_ = function () {
                   var t = this;
                   this.addClass("vjs-waiting"), this.trigger("waiting");
                   var i = this.currentTime();
                   this.on("timeupdate", function e() {
                       i !== t.currentTime() && (t.removeClass("vjs-waiting"), t.off("timeupdate", e));
                   });
               }),
               (e.handleTechCanPlay_ = function () {
                   this.removeClass("vjs-waiting"), this.trigger("canplay");
               }),
               (e.handleTechCanPlayThrough_ = function () {
                   this.removeClass("vjs-waiting"), this.trigger("canplaythrough");
               }),
               (e.handleTechPlaying_ = function () {
                   this.removeClass("vjs-waiting"), this.trigger("playing");
               }),
               (e.handleTechSeeking_ = function () {
                   this.addClass("vjs-seeking"), this.trigger("seeking");
               }),
               (e.handleTechSeeked_ = function () {
                   this.removeClass("vjs-seeking"), this.removeClass("vjs-ended"), this.trigger("seeked");
               }),
               (e.handleTechFirstPlay_ = function () {
                   this.options_.starttime && (p.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay");
               }),
               (e.handleTechPause_ = function () {
                   this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause");
               }),
               (e.handleTechEnded_ = function () {
                   this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended");
               }),
               (e.handleTechDurationChange_ = function () {
                   this.duration(this.techGet_("duration"));
               }),
               (e.handleTechClick_ = function (e) {
                   z(e) && this.controls_ && (this.paused() ? At(this.play()) : this.pause());
               }),
               (e.handleTechDoubleClick_ = function (t) {
                   this.controls_ &&
                       (Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), function (e) {
                           return e.contains(t.target);
                       }) ||
                           (void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.doubleClick && !1 === this.options_.userActions.doubleClick) ||
                           (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.doubleClick
                               ? this.options_.userActions.doubleClick.call(this, t)
                               : this.isFullscreen()
                               ? this.exitFullscreen()
                               : this.requestFullscreen()));
               }),
               (e.handleTechTap_ = function () {
                   this.userActive(!this.userActive());
               }),
               (e.handleTechTouchStart_ = function () {
                   this.userWasActive = this.userActive();
               }),
               (e.handleTechTouchMove_ = function () {
                   this.userWasActive && this.reportUserActivity();
               }),
               (e.handleTechTouchEnd_ = function (e) {
                   e.preventDefault();
               }),
               (e.handleStageClick_ = function () {
                   this.reportUserActivity();
               }),
               (e.toggleFullscreenClass_ = function () {
                   this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen");
               }),
               (e.documentFullscreenChange_ = function (e) {
                   var t = e.target.player;
                   if (!t || t === this) {
                       var i = this.el(),
                           n = d[this.fsApi_.fullscreenElement] === i;
                       !n && i.matches ? (n = i.matches(":" + this.fsApi_.fullscreen)) : !n && i.msMatchesSelector && (n = i.msMatchesSelector(":" + this.fsApi_.fullscreen)), this.isFullscreen(n);
                   }
               }),
               (e.handleTechFullscreenChange_ = function (e, t) {
                   t && (t.nativeIOSFullscreen && this.toggleClass("vjs-ios-native-fs"), this.isFullscreen(t.isFullscreen));
               }),
               (e.handleTechFullscreenError_ = function (e, t) {
                   this.trigger("fullscreenerror", t);
               }),
               (e.togglePictureInPictureClass_ = function () {
                   this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture");
               }),
               (e.handleTechEnterPictureInPicture_ = function (e) {
                   this.isInPictureInPicture(!0);
               }),
               (e.handleTechLeavePictureInPicture_ = function (e) {
                   this.isInPictureInPicture(!1);
               }),
               (e.handleTechError_ = function () {
                   var e = this.tech_.error();
                   this.error(e);
               }),
               (e.handleTechTextData_ = function (e, t) {
                   var i = null;
                   1 < arguments.length && (i = t), this.trigger("textdata", i);
               }),
               (e.getCache = function () {
                   return this.cache_;
               }),
               (e.resetCache_ = function () {
                   this.cache_ = {
                       currentTime: 0,
                       initTime: 0,
                       inactivityTimeout: this.options_.inactivityTimeout,
                       duration: NaN,
                       lastVolume: 1,
                       lastPlaybackRate: this.defaultPlaybackRate(),
                       media: null,
                       src: "",
                       source: {},
                       sources: [],
                       volume: 1,
                   };
               }),
               (e.techCall_ = function (e, t) {
                   this.ready(function () {
                       if (e in en)
                           return (function (e, t, i, n) {
                               return t[i](e.reduce(nn(i), n));
                           })(this.middleware_, this.tech_, e, t);
                       if (e in tn) return Ji(this.middleware_, this.tech_, e, t);
                       try {
                           this.tech_ && this.tech_[e](t);
                       } catch (e) {
                           throw (p(e), e);
                       }
                   }, !0);
               }),
               (e.techGet_ = function (t) {
                   if (this.tech_ && this.tech_.isReady_) {
                       if (t in Zi)
                           return (function (e, t, i) {
                               return e.reduceRight(nn(i), t[i]());
                           })(this.middleware_, this.tech_, t);
                       if (t in tn) return Ji(this.middleware_, this.tech_, t);
                       try {
                           return this.tech_[t]();
                       } catch (e) {
                           if (void 0 === this.tech_[t]) throw (p("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e), e);
                           if ("TypeError" === e.name) throw (p("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), (this.tech_.isReady_ = !1), e);
                           throw (p(e), e);
                       }
                   }
               }),
               (e.play = function () {
                   var t = this,
                       e = this.options_.Promise || T.Promise;
                   return e
                       ? new e(function (e) {
                             t.play_(e);
                         })
                       : this.play_();
               }),
               (e.play_ = function (e) {
                   var t = this;
                   void 0 === e && (e = At), this.playCallbacks_.push(e);
                   var i = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc()));
                   if ((this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_), (this.waitToPlay_ = null)), !this.isReady_ || !i))
                       return (
                           (this.waitToPlay_ = function (e) {
                               t.play_();
                           }),
                           this.one(["ready", "loadstart"], this.waitToPlay_),
                           void (i || (!ht && !dt) || this.load())
                       );
                   var n = this.techGet_("play");
                   null === n ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(n);
               }),
               (e.runPlayTerminatedQueue_ = function () {
                   var e = this.playTerminatedQueue_.slice(0);
                   (this.playTerminatedQueue_ = []),
                       e.forEach(function (e) {
                           e();
                       });
               }),
               (e.runPlayCallbacks_ = function (t) {
                   var e = this.playCallbacks_.slice(0);
                   (this.playCallbacks_ = []),
                       (this.playTerminatedQueue_ = []),
                       e.forEach(function (e) {
                           e(t);
                       });
               }),
               (e.pause = function () {
                   this.techCall_("pause");
               }),
               (e.paused = function () {
                   return !1 !== this.techGet_("paused");
               }),
               (e.played = function () {
                   return this.techGet_("played") || gt(0, 0);
               }),
               (e.scrubbing = function (e) {
                   if ("undefined" == typeof e) return this.scrubbing_;
                   (this.scrubbing_ = !!e), this.techCall_("setScrubbing", this.scrubbing_), e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing");
               }),
               (e.currentTime = function (e) {
                   return "undefined" != typeof e
                       ? (e < 0 && (e = 0),
                         this.isReady_ && !this.changingSrc_ && this.tech_ && this.tech_.isReady_
                             ? (this.techCall_("setCurrentTime", e), void (this.cache_.initTime = 0))
                             : ((this.cache_.initTime = e), this.off("canplay", this.applyInitTime_), void this.one("canplay", this.applyInitTime_)))
                       : ((this.cache_.currentTime = this.techGet_("currentTime") || 0), this.cache_.currentTime);
               }),
               (e.applyInitTime_ = function () {
                   this.currentTime(this.cache_.initTime);
               }),
               (e.duration = function (e) {
                   if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
                   (e = parseFloat(e)) < 0 && (e = 1 / 0), e !== this.cache_.duration && ((this.cache_.duration = e) === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), isNaN(e) || this.trigger("durationchange"));
               }),
               (e.remainingTime = function () {
                   return this.duration() - this.currentTime();
               }),
               (e.remainingTimeDisplay = function () {
                   return Math.floor(this.duration()) - Math.floor(this.currentTime());
               }),
               (e.buffered = function () {
                   var e = this.techGet_("buffered");
                   return (e && e.length) || (e = gt(0, 0)), e;
               }),
               (e.bufferedPercent = function () {
                   return vt(this.buffered(), this.duration());
               }),
               (e.bufferedEnd = function () {
                   var e = this.buffered(),
                       t = this.duration(),
                       i = e.end(e.length - 1);
                   return t < i && (i = t), i;
               }),
               (e.volume = function (e) {
                   var t;
                   return void 0 !== e
                       ? ((t = Math.max(0, Math.min(1, parseFloat(e)))), (this.cache_.volume = t), this.techCall_("setVolume", t), void (0 < t && this.lastVolume_(t)))
                       : ((t = parseFloat(this.techGet_("volume"))), isNaN(t) ? 1 : t);
               }),
               (e.muted = function (e) {
                   if (void 0 === e) return this.techGet_("muted") || !1;
                   this.techCall_("setMuted", e);
               }),
               (e.defaultMuted = function (e) {
                   return void 0 !== e ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1;
               }),
               (e.lastVolume_ = function (e) {
                   if (void 0 === e || 0 === e) return this.cache_.lastVolume;
                   this.cache_.lastVolume = e;
               }),
               (e.supportsFullScreen = function () {
                   return this.techGet_("supportsFullScreen") || !1;
               }),
               (e.isFullscreen = function (e) {
                   if (void 0 === e) return this.isFullscreen_;
                   var t = this.isFullscreen_;
                   return (this.isFullscreen_ = Boolean(e)), this.isFullscreen_ !== t && this.fsApi_.prefixed && this.trigger("fullscreenchange"), void this.toggleFullscreenClass_();
               }),
               (e.requestFullscreen = function (s) {
                   var e = this.options_.Promise || T.Promise;
                   if (e) {
                       var o = this;
                       return new e(function (e, i) {
                           function n() {
                               o.off("fullscreenerror", r), o.off("fullscreenchange", t);
                           }
                           function t() {
                               n(), e();
                           }
                           function r(e, t) {
                               n(), i(t);
                           }
                           o.one("fullscreenchange", t), o.one("fullscreenerror", r);
                           var a = o.requestFullscreenHelper_(s);
                           if (a) return a.then(n, n), a;
                       });
                   }
                   return this.requestFullscreenHelper_();
               }),
               (e.requestFullscreenHelper_ = function (e) {
                   var t,
                       i = this;
                   if ((this.fsApi_.prefixed || ((t = (this.options_.fullscreen && this.options_.fullscreen.options) || {}), void 0 !== e && (t = e)), this.fsApi_.requestFullscreen)) {
                       var n = this.el_[this.fsApi_.requestFullscreen](t);
                       return (
                           n &&
                               n.then(
                                   function () {
                                       return i.isFullscreen(!0);
                                   },
                                   function () {
                                       return i.isFullscreen(!1);
                                   }
                               ),
                           n
                       );
                   }
                   this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : this.enterFullWindow();
               }),
               (e.exitFullscreen = function () {
                   var e = this.options_.Promise || T.Promise;
                   if (e) {
                       var s = this;
                       return new e(function (e, i) {
                           function n() {
                               s.off("fullscreenerror", r), s.off("fullscreenchange", t);
                           }
                           function t() {
                               n(), e();
                           }
                           function r(e, t) {
                               n(), i(t);
                           }
                           s.one("fullscreenchange", t), s.one("fullscreenerror", r);
                           var a = s.exitFullscreenHelper_();
                           if (a) return a.then(n, n), a;
                       });
                   }
                   return this.exitFullscreenHelper_();
               }),
               (e.exitFullscreenHelper_ = function () {
                   var e = this;
                   if (this.fsApi_.requestFullscreen) {
                       var t = d[this.fsApi_.exitFullscreen]();
                       return (
                           t &&
                               t.then(function () {
                                   return e.isFullscreen(!1);
                               }),
                           t
                       );
                   }
                   this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : this.exitFullWindow();
               }),
               (e.enterFullWindow = function () {
                   this.isFullscreen(!0),
                       (this.isFullWindow = !0),
                       (this.docOrigOverflow = d.documentElement.style.overflow),
                       he(d, "keydown", this.boundFullWindowOnEscKey_),
                       (d.documentElement.style.overflow = "hidden"),
                       I(d.body, "vjs-full-window"),
                       this.trigger("enterFullWindow");
               }),
               (e.fullWindowOnEscKey = function (e) {
                   Ot.isEventKey(e, "Esc") && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow());
               }),
               (e.exitFullWindow = function () {
                   this.isFullscreen(!1), (this.isFullWindow = !1), pe(d, "keydown", this.boundFullWindowOnEscKey_), (d.documentElement.style.overflow = this.docOrigOverflow), A(d.body, "vjs-full-window"), this.trigger("exitFullWindow");
               }),
               (e.disablePictureInPicture = function (e) {
                   if (void 0 === e) return this.techGet_("disablePictureInPicture");
                   this.techCall_("setDisablePictureInPicture", e), (this.options_.disablePictureInPicture = e), this.trigger("disablepictureinpicturechanged");
               }),
               (e.isInPictureInPicture = function (e) {
                   return void 0 !== e ? ((this.isInPictureInPicture_ = !!e), void this.togglePictureInPictureClass_()) : !!this.isInPictureInPicture_;
               }),
               (e.requestPictureInPicture = function () {
                   if ("pictureInPictureEnabled" in d && !1 === this.disablePictureInPicture()) return this.techGet_("requestPictureInPicture");
               }),
               (e.exitPictureInPicture = function () {
                   if ("pictureInPictureEnabled" in d) return d.exitPictureInPicture();
               }),
               (e.handleKeyDown = function (e) {
                   var t = this.options_.userActions;
                   if (t && t.hotkeys) {
                       !(function (e) {
                           var t = e.tagName.toLowerCase();
                           if (e.isContentEditable) return !0;
                           if ("input" === t) return -1 === ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(e.type);
                           return -1 !== ["textarea"].indexOf(t);
                       })(this.el_.ownerDocument.activeElement) && ("function" == typeof t.hotkeys ? t.hotkeys.call(this, e) : this.handleHotkeys(e));
                   }
               }),
               (e.handleHotkeys = function (e) {
                   var t = this.options_.userActions ? this.options_.userActions.hotkeys : {},
                       i = t.fullscreenKey,
                       n =
                           void 0 === i
                               ? function (e) {
                                     return Ot.isEventKey(e, "f");
                                 }
                               : i,
                       r = t.muteKey,
                       a =
                           void 0 === r
                               ? function (e) {
                                     return Ot.isEventKey(e, "m");
                                 }
                               : r,
                       s = t.playPauseKey,
                       o =
                           void 0 === s
                               ? function (e) {
                                     return Ot.isEventKey(e, "k") || Ot.isEventKey(e, "Space");
                                 }
                               : s;
                   if (n.call(this, e)) {
                       e.preventDefault(), e.stopPropagation();
                       var u = je.getComponent("FullscreenToggle");
                       !1 !== d[this.fsApi_.fullscreenEnabled] && u.prototype.handleClick.call(this, e);
                   } else if (a.call(this, e)) {
                       e.preventDefault(), e.stopPropagation(), je.getComponent("MuteToggle").prototype.handleClick.call(this, e);
                   } else if (o.call(this, e)) {
                       e.preventDefault(), e.stopPropagation(), je.getComponent("PlayToggle").prototype.handleClick.call(this, e);
                   }
               }),
               (e.canPlayType = function (e) {
                   for (var t, i = 0, n = this.options_.techOrder; i < n.length; i++) {
                       var r = n[i],
                           a = Xi.getTech(r);
                       if ((a = a || je.getComponent(r))) {
                           if (a.isSupported() && (t = a.canPlayType(e))) return t;
                       } else p.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.');
                   }
                   return "";
               }),
               (e.selectSource = function (e) {
                   function t(e, i, n) {
                       var r;
                       return (
                           e.some(function (t) {
                               return i.some(function (e) {
                                   if ((r = n(t, e))) return !0;
                               });
                           }),
                           r
                       );
                   }
                   function i(e, t) {
                       var i = e[0];
                       if (e[1].canPlaySource(t, r.options_[i.toLowerCase()])) return { source: t, tech: i };
                   }
                   var n,
                       r = this,
                       a = this.options_.techOrder
                           .map(function (e) {
                               return [e, Xi.getTech(e)];
                           })
                           .filter(function (e) {
                               var t = e[0],
                                   i = e[1];
                               return i ? i.isSupported() : (p.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1);
                           });
                   return (
                       (this.options_.sourceOrder
                           ? t(
                                 e,
                                 a,
                                 ((n = i),
                                 function (e, t) {
                                     return n(t, e);
                                 })
                             )
                           : t(a, e, i)) || !1
                   );
               }),
               (e.src = function (e) {
                   var i = this;
                   if ("undefined" == typeof e) return this.cache_.src || "";
                   var n = (function t(e) {
                       if (Array.isArray(e)) {
                           var i = [];
                           e.forEach(function (e) {
                               (e = t(e)), Array.isArray(e) ? (i = i.concat(e)) : s(e) && i.push(e);
                           }),
                               (e = i);
                       } else e = "string" == typeof e && e.trim() ? [on({ src: e })] : s(e) && "string" == typeof e.src && e.src && e.src.trim() ? [on(e)] : [];
                       return e;
                   })(e);
                   n.length
                       ? ((this.changingSrc_ = !0),
                         (this.cache_.sources = n),
                         this.updateSourceCaches_(n[0]),
                         Qi(this, n[0], function (e, t) {
                             if (((i.middleware_ = t), (i.cache_.sources = n), i.updateSourceCaches_(e), i.src_(e)))
                                 return 1 < n.length
                                     ? i.src(n.slice(1))
                                     : ((i.changingSrc_ = !1),
                                       i.setTimeout(function () {
                                           this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) });
                                       }, 0),
                                       void i.triggerReady());
                             !(function (e, t) {
                                 e.forEach(function (e) {
                                     return e.setTech && e.setTech(t);
                                 });
                             })(t, i.tech_);
                         }))
                       : this.setTimeout(function () {
                             this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) });
                         }, 0);
               }),
               (e.src_ = function (e) {
                   var t = this,
                       i = this.selectSource([e]);
                   return (
                       !i ||
                       ((function (e, t) {
                           return Me(e) === Me(t);
                       })(i.tech, this.techName_)
                           ? this.ready(function () {
                                 this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), (this.changingSrc_ = !1);
                             }, !0)
                           : ((this.changingSrc_ = !0),
                             this.loadTech_(i.tech, i.source),
                             this.tech_.ready(function () {
                                 t.changingSrc_ = !1;
                             })),
                       !1)
                   );
               }),
               (e.load = function () {
                   this.techCall_("load");
               }),
               (e.reset = function () {
                   var e = this,
                       t = this.options_.Promise || T.Promise;
                   this.paused() || !t
                       ? this.doReset_()
                       : At(
                             this.play().then(function () {
                                 return e.doReset_();
                             })
                         );
               }),
               (e.doReset_ = function () {
                   this.tech_ && this.tech_.clearTracks("text"),
                       this.resetCache_(),
                       this.poster(""),
                       this.loadTech_(this.options_.techOrder[0], null),
                       this.techCall_("reset"),
                       this.resetControlBarUI_(),
                       Ae(this) && this.trigger("playerreset");
               }),
               (e.resetControlBarUI_ = function () {
                   this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_();
               }),
               (e.resetProgressBar_ = function () {
                   this.currentTime(0);
                   var e = this.controlBar,
                       t = e.durationDisplay,
                       i = e.remainingTimeDisplay;
                   t && t.updateContent(), i && i.updateContent();
               }),
               (e.resetPlaybackRate_ = function () {
                   this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_();
               }),
               (e.resetVolumeBar_ = function () {
                   this.volume(1), this.trigger("volumechange");
               }),
               (e.currentSources = function () {
                   var e = this.currentSource(),
                       t = [];
                   return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t;
               }),
               (e.currentSource = function () {
                   return this.cache_.source || {};
               }),
               (e.currentSrc = function () {
                   return (this.currentSource() && this.currentSource().src) || "";
               }),
               (e.currentType = function () {
                   return (this.currentSource() && this.currentSource().type) || "";
               }),
               (e.preload = function (e) {
                   return void 0 !== e ? (this.techCall_("setPreload", e), void (this.options_.preload = e)) : this.techGet_("preload");
               }),
               (e.autoplay = function (e) {
                   if (void 0 === e) return this.options_.autoplay || !1;
                   var t;
                   "string" == typeof e && /(any|play|muted)/.test(e) ? ((this.options_.autoplay = e), this.manualAutoplay_(e), (t = !1)) : (this.options_.autoplay = !!e),
                       (t = "undefined" == typeof t ? this.options_.autoplay : t),
                       this.tech_ && this.techCall_("setAutoplay", t);
               }),
               (e.playsinline = function (e) {
                   return void 0 !== e ? (this.techCall_("setPlaysinline", e), (this.options_.playsinline = e), this) : this.techGet_("playsinline");
               }),
               (e.loop = function (e) {
                   return void 0 !== e ? (this.techCall_("setLoop", e), void (this.options_.loop = e)) : this.techGet_("loop");
               }),
               (e.poster = function (e) {
                   if (void 0 === e) return this.poster_;
                   (e = e || "") !== this.poster_ && ((this.poster_ = e), this.techCall_("setPoster", e), (this.isPosterFromTech_ = !1), this.trigger("posterchange"));
               }),
               (e.handleTechPosterChange_ = function () {
                   if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                       var e = this.tech_.poster() || "";
                       e !== this.poster_ && ((this.poster_ = e), (this.isPosterFromTech_ = !0), this.trigger("posterchange"));
                   }
               }),
               (e.controls = function (e) {
                   if (void 0 === e) return !!this.controls_;
                   (e = !!e),
                       this.controls_ !== e &&
                           ((this.controls_ = e),
                           this.usingNativeControls() && this.techCall_("setControls", e),
                           this.controls_
                               ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_())
                               : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()));
               }),
               (e.usingNativeControls = function (e) {
                   if (void 0 === e) return !!this.usingNativeControls_;
                   (e = !!e),
                       this.usingNativeControls_ !== e &&
                           ((this.usingNativeControls_ = e),
                           this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")));
               }),
               (e.error = function (e) {
                   if (void 0 === e) return this.error_ || null;
                   if (this.options_.suppressNotSupportedError && e && 4 === e.code) {
                       var t = function () {
                           this.error(e);
                       };
                       return (
                           (this.options_.suppressNotSupportedError = !1),
                           this.any(["click", "touchstart"], t),
                           void this.one("loadstart", function () {
                               this.off(["click", "touchstart"], t);
                           })
                       );
                   }
                   if (null === e) return (this.error_ = e), this.removeClass("vjs-error"), void (this.errorDisplay && this.errorDisplay.close());
                   (this.error_ = new Ct(e)), this.addClass("vjs-error"), p.error("(CODE:" + this.error_.code + " " + Ct.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error");
               }),
               (e.reportUserActivity = function (e) {
                   this.userActivity_ = !0;
               }),
               (e.userActive = function (e) {
                   if (void 0 === e) return this.userActive_;
                   if ((e = !!e) !== this.userActive_) {
                       if (((this.userActive_ = e), this.userActive_)) return (this.userActivity_ = !0), this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
                       this.tech_ &&
                           this.tech_.one("mousemove", function (e) {
                               e.stopPropagation(), e.preventDefault();
                           }),
                           (this.userActivity_ = !1),
                           this.removeClass("vjs-user-active"),
                           this.addClass("vjs-user-inactive"),
                           this.trigger("userinactive");
                   }
               }),
               (e.listenForUserActivity_ = function () {
                   function e(e) {
                       r(), this.clearInterval(t);
                   }
                   var t,
                       i,
                       n,
                       r = ve(this, this.reportUserActivity);
                   this.on("mousedown", function () {
                       r(), this.clearInterval(t), (t = this.setInterval(r, 250));
                   }),
                       this.on("mousemove", function (e) {
                           (e.screenX === i && e.screenY === n) || ((i = e.screenX), (n = e.screenY), r());
                       }),
                       this.on("mouseup", e),
                       this.on("mouseleave", e);
                   var a,
                       s = this.getChild("controlBar");
                   !s ||
                       dt ||
                       Je ||
                       (s.on("mouseenter", function (e) {
                           (this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout), (this.player().options_.inactivityTimeout = 0);
                       }),
                       s.on("mouseleave", function (e) {
                           this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout;
                       })),
                       this.on("keydown", r),
                       this.on("keyup", r),
                       this.setInterval(function () {
                           if (this.userActivity_) {
                               (this.userActivity_ = !1), this.userActive(!0), this.clearTimeout(a);
                               var e = this.options_.inactivityTimeout;
                               e <= 0 ||
                                   (a = this.setTimeout(function () {
                                       this.userActivity_ || this.userActive(!1);
                                   }, e));
                           }
                       }, 250);
               }),
               (e.playbackRate = function (e) {
                   if (void 0 === e) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
                   this.techCall_("setPlaybackRate", e);
               }),
               (e.defaultPlaybackRate = function (e) {
                   return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1;
               }),
               (e.isAudio = function (e) {
                   if (void 0 === e) return !!this.isAudio_;
                   this.isAudio_ = !!e;
               }),
               (e.addTextTrack = function (e, t, i) {
                   if (this.tech_) return this.tech_.addTextTrack(e, t, i);
               }),
               (e.addRemoteTextTrack = function (e, t) {
                   if (this.tech_) return this.tech_.addRemoteTextTrack(e, t);
               }),
               (e.removeRemoteTextTrack = function (e) {
                   void 0 === e && (e = {});
                   var t = e.track;
                   if (((t = t || e), this.tech_)) return this.tech_.removeRemoteTextTrack(t);
               }),
               (e.getVideoPlaybackQuality = function () {
                   return this.techGet_("getVideoPlaybackQuality");
               }),
               (e.videoWidth = function () {
                   return (this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth()) || 0;
               }),
               (e.videoHeight = function () {
                   return (this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight()) || 0;
               }),
               (e.language = function (e) {
                   if (void 0 === e) return this.language_;
                   this.language_ = String(e).toLowerCase();
               }),
               (e.languages = function () {
                   return Re(l.prototype.options_.languages, this.languages_);
               }),
               (e.toJSON = function () {
                   var e = Re(this.options_),
                       t = e.tracks;
                   e.tracks = [];
                   for (var i = 0; i < t.length; i++) {
                       var n = t[i];
                       ((n = Re(n)).player = void 0), (e.tracks[i] = n);
                   }
                   return e;
               }),
               (e.createModal = function (e, t) {
                   var i = this;
                   (t = t || {}).content = e || "";
                   var n = new Mt(this, t);
                   return (
                       this.addChild(n),
                       n.on("dispose", function () {
                           i.removeChild(n);
                       }),
                       n.open(),
                       n
                   );
               }),
               (e.updateCurrentBreakpoint_ = function () {
                   if (this.responsive())
                       for (var e = this.currentBreakpoint(), t = this.currentWidth(), i = 0; i < Gr.length; i++) {
                           var n = Gr[i];
                           if (t <= this.breakpoints_[n]) {
                               if (e === n) return;
                               e && this.removeClass(Xr[e]), this.addClass(Xr[n]), (this.breakpoint_ = n);
                               break;
                           }
                       }
               }),
               (e.removeCurrentBreakpoint_ = function () {
                   var e = this.currentBreakpointClass();
                   (this.breakpoint_ = ""), e && this.removeClass(e);
               }),
               (e.breakpoints = function (e) {
                   return void 0 === e || ((this.breakpoint_ = ""), (this.breakpoints_ = g({}, Kr, e)), this.updateCurrentBreakpoint_()), g(this.breakpoints_);
               }),
               (e.responsive = function (e) {
                   return void 0 === e
                       ? this.responsive_
                       : (e = Boolean(e)) !== this.responsive_
                       ? ((this.responsive_ = e) ? (this.on("playerresize", this.updateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.updateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e)
                       : void 0;
               }),
               (e.currentBreakpoint = function () {
                   return this.breakpoint_;
               }),
               (e.currentBreakpointClass = function () {
                   return Xr[this.breakpoint_] || "";
               }),
               (e.loadMedia = function (e, t) {
                   var i = this;
                   if (e && "object" == typeof e) {
                       this.reset(), (this.cache_.media = Re(e));
                       var n = this.cache_.media,
                           r = n.artwork,
                           a = n.poster,
                           s = n.src,
                           o = n.textTracks;
                       !r && a && (this.cache_.media.artwork = [{ src: a, type: an(a) }]),
                           s && this.src(s),
                           a && this.poster(a),
                           Array.isArray(o) &&
                               o.forEach(function (e) {
                                   return i.addRemoteTextTrack(e, !1);
                               }),
                           this.ready(t);
                   }
               }),
               (e.getMedia = function () {
                   if (this.cache_.media) return Re(this.cache_.media);
                   var e = this.poster(),
                       t = {
                           src: this.currentSources(),
                           textTracks: Array.prototype.map.call(this.remoteTextTracks(), function (e) {
                               return { kind: e.kind, label: e.label, language: e.language, src: e.src };
                           }),
                       };
                   return e && ((t.poster = e), (t.artwork = [{ src: t.poster, type: an(t.poster) }])), t;
               }),
               (l.getTagSettings = function (e) {
                   var t = { sources: [], tracks: [] },
                       i = L(e),
                       n = i["data-setup"];
                   if ((w(e, "vjs-fill") && (i.fill = !0), w(e, "vjs-fluid") && (i.fluid = !0), null !== n)) {
                       var r = wt(n || "{}"),
                           a = r[0],
                           s = r[1];
                       a && p.error(a), g(i, s);
                   }
                   if ((g(t, i), e.hasChildNodes()))
                       for (var o = e.childNodes, u = 0, l = o.length; u < l; u++) {
                           var c = o[u],
                               d = c.nodeName.toLowerCase();
                           "source" === d ? t.sources.push(L(c)) : "track" === d && t.tracks.push(L(c));
                       }
                   return t;
               }),
               (e.flexNotSupported_ = function () {
                   var e = d.createElement("i");
                   return !("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style || "msFlexOrder" in e.style);
               }),
               (e.debug = function (e) {
                   if (void 0 === e) return this.debugEnabled_;
                   e
                       ? (this.trigger("debugon"), (this.previousLogLevel_ = this.log.level), this.log.level("debug"), (this.debugEnabled_ = !0))
                       : (this.trigger("debugoff"), this.log.level(this.previousLogLevel_), (this.previousLogLevel_ = void 0), (this.debugEnabled_ = !1));
               }),
               l
           );
       })(je);
   gi.names.forEach(function (e) {
       var t = gi[e];
       Yr.prototype[t.getterName] = function () {
           return this.tech_ ? this.tech_[t.getterName]() : ((this[t.privateName] = this[t.privateName] || new t.ListClass()), this[t.privateName]);
       };
   }),
       (Yr.prototype.crossorigin = Yr.prototype.crossOrigin),
       (Yr.players = {});
   var $r = T.navigator;
   (Yr.prototype.options_ = {
       techOrder: Xi.defaultTechOrder_,
       html5: {},
       flash: {},
       inactivityTimeout: 2e3,
       playbackRates: [],
       liveui: !1,
       children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
       language: ($r && (($r.languages && $r.languages[0]) || $r.userLanguage || $r.language)) || "en",
       languages: {},
       notSupportedMessage: "No compatible source was found for this media.",
       fullscreen: { options: { navigationUI: "hide" } },
       breakpoints: {},
       responsive: !1,
   }),
       ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (e) {
           Yr.prototype[e] = function () {
               return this.techGet_(e);
           };
       }),
       Wr.forEach(function (e) {
           Yr.prototype["handleTech" + Me(e) + "_"] = function () {
               return this.trigger(e);
           };
       }),
       je.registerComponent("Player", Yr);
   var Qr = i(function (i) {
       function n(e, t) {
           return (
               (i.exports = n =
                   Object.setPrototypeOf ||
                   function (e, t) {
                       return (e.__proto__ = t), e;
                   }),
               n(e, t)
           );
       }
       i.exports = n;
   });
   function Jr(e) {
       return oa.hasOwnProperty(e);
   }
   function Zr(e) {
       return Jr(e) ? oa[e] : void 0;
   }
   function ea(e, t) {
       (e[sa] = e[sa] || {}), (e[sa][t] = !0);
   }
   function ta(e, t, i) {
       var n = (i ? "before" : "") + "pluginsetup";
       e.trigger(n, t), e.trigger(n + ":" + t.name, t);
   }
   function ia(r, a) {
       return (
           (a.prototype.name = r),
           function () {
               ta(this, { name: r, plugin: a, instance: null }, !0);
               for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
               var n = ra(a, [this].concat(t));
               return (
                   (this[r] = function () {
                       return n;
                   }),
                   ta(this, n.getEventHash()),
                   n
               );
           }
       );
   }
   var na = function () {
           if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
           if (Reflect.construct.sham) return !1;
           if ("function" == typeof Proxy) return !0;
           try {
               return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
           } catch (e) {
               return !1;
           }
       },
       ra = i(function (n) {
           function r(e, t, i) {
               return (
                   na()
                       ? (n.exports = r = Reflect.construct)
                       : (n.exports = r = function (e, t, i) {
                             var n = [null];
                             n.push.apply(n, t);
                             var r = new (Function.bind.apply(e, n))();
                             return i && Qr(r, i.prototype), r;
                         }),
                   r.apply(null, arguments)
               );
           }
           n.exports = r;
       }),
       aa = "plugin",
       sa = "activePlugins_",
       oa = {},
       ua = (function () {
           function i(e) {
               if (this.constructor === i) throw new Error("Plugin must be sub-classed; not directly instantiated.");
               (this.player = e),
                   this.log || (this.log = this.player.log.createLogger(this.name)),
                   Pe(this),
                   delete this.trigger,
                   Oe(this, this.constructor.defaultState),
                   ea(e, this.name),
                   (this.dispose = ve(this, this.dispose)),
                   e.on("dispose", this.dispose);
           }
           var e = i.prototype;
           return (
               (e.version = function () {
                   return this.constructor.VERSION;
               }),
               (e.getEventHash = function (e) {
                   return void 0 === e && (e = {}), (e.name = this.name), (e.plugin = this.constructor), (e.instance = this), e;
               }),
               (e.trigger = function (e, t) {
                   return void 0 === t && (t = {}), fe(this.eventBusEl_, e, this.getEventHash(t));
               }),
               (e.handleStateChanged = function (e) {}),
               (e.dispose = function () {
                   var e = this.name,
                       t = this.player;
                   this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), (t[sa][e] = !1), (this.player = this.state = null), (t[e] = ia(e, oa[e]));
               }),
               (i.isBasic = function (e) {
                   var t = "string" == typeof e ? Zr(e) : e;
                   return "function" == typeof t && !i.prototype.isPrototypeOf(t.prototype);
               }),
               (i.registerPlugin = function (e, t) {
                   if ("string" != typeof e) throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + typeof e + ".");
                   if (Jr(e)) p.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!');
                   else if (Yr.prototype.hasOwnProperty(e)) throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!');
                   if ("function" != typeof t) throw new Error('Illegal plugin for "' + e + '", must be a function, was ' + typeof t + ".");
                   return (
                       (oa[e] = t),
                       e !== aa &&
                           (i.isBasic(t)
                               ? (Yr.prototype[e] = (function (t, i) {
                                     function n() {
                                         ta(this, { name: t, plugin: i, instance: null }, !0);
                                         var e = i.apply(this, arguments);
                                         return ea(this, t), ta(this, { name: t, plugin: i, instance: e }), e;
                                     }
                                     return (
                                         Object.keys(i).forEach(function (e) {
                                             n[e] = i[e];
                                         }),
                                         n
                                     );
                                 })(e, t))
                               : (Yr.prototype[e] = ia(e, t))),
                       t
                   );
               }),
               (i.deregisterPlugin = function (e) {
                   if (e === aa) throw new Error("Cannot de-register base plugin.");
                   Jr(e) && (delete oa[e], delete Yr.prototype[e]);
               }),
               (i.getPlugins = function (e) {
                   var i;
                   return (
                       void 0 === e && (e = Object.keys(oa)),
                       e.forEach(function (e) {
                           var t = Zr(e);
                           t && ((i = i || {})[e] = t);
                       }),
                       i
                   );
               }),
               (i.getPluginVersion = function (e) {
                   var t = Zr(e);
                   return (t && t.VERSION) || "";
               }),
               i
           );
       })();
   (ua.getPlugin = Zr),
       (ua.BASE_PLUGIN_NAME = aa),
       ua.registerPlugin(aa, ua),
       (Yr.prototype.usingPlugin = function (e) {
           return !!this[sa] && !0 === this[sa][e];
       }),
       (Yr.prototype.hasPlugin = function (e) {
           return !!Jr(e);
       });
   var la = function (e, t) {
           if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
           (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && Qr(e, t);
       },
       ca = function (e) {
           return 0 === e.indexOf("#") ? e.slice(1) : e;
       };
   function da(e, i, t) {
       var n = da.getPlayer(e);
       if (n) return i && p.warn('Player "' + e + '" is already initialised. Options will not be applied.'), t && n.ready(t), n;
       var r = "string" == typeof e ? X("#" + ca(e)) : e;
       if (!_(r)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
       (r.ownerDocument.defaultView && r.ownerDocument.body.contains(r)) || p.warn("The element supplied is not included in the DOM"),
           (i = i || {}),
           da.hooks("beforesetup").forEach(function (e) {
               var t = e(r, Re(i));
               s(t) && !Array.isArray(t) ? (i = Re(i, t)) : p.error("please return an object in beforesetup hooks");
           });
       var a = je.getComponent("Player");
       return (
           (n = new a(r, i, t)),
           da.hooks("setup").forEach(function (e) {
               return e(n);
           }),
           n
       );
   }
   if (
       ((da.hooks_ = {}),
       (da.hooks = function (e, t) {
           return (da.hooks_[e] = da.hooks_[e] || []), t && (da.hooks_[e] = da.hooks_[e].concat(t)), da.hooks_[e];
       }),
       (da.hook = function (e, t) {
           da.hooks(e, t);
       }),
       (da.hookOnce = function (i, e) {
           da.hooks(
               i,
               [].concat(e).map(function (t) {
                   return function e() {
                       return da.removeHook(i, e), t.apply(void 0, arguments);
                   };
               })
           );
       }),
       (da.removeHook = function (e, t) {
           var i = da.hooks(e).indexOf(t);
           return !(i <= -1) && ((da.hooks_[e] = da.hooks_[e].slice()), da.hooks_[e].splice(i, 1), !0);
       }),
       !0 !== T.VIDEOJS_NO_DYNAMIC_STYLE && y())
   ) {
       var ha = X(".vjs-styles-defaults");
       if (!ha) {
           ha = ee("vjs-styles-defaults");
           var pa = X("head");
           pa && pa.insertBefore(ha, pa.firstChild), te(ha, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ");
       }
   }
   function fa(e) {
       return e && "object" == typeof e && "default" in e ? e : { default: e };
   }
   J(1, da),
       (da.VERSION = h),
       (da.options = Yr.prototype.options_),
       (da.getPlayers = function () {
           return Yr.players;
       }),
       (da.getPlayer = function (e) {
           var t,
               i = Yr.players;
           if ("string" == typeof e) {
               var n = ca(e),
                   r = i[n];
               if (r) return r;
               t = X("#" + n);
           } else t = e;
           if (_(t)) {
               var a = t,
                   s = a.player,
                   o = a.playerId;
               if (s || i[o]) return s || i[o];
           }
       }),
       (da.getAllPlayers = function () {
           return Object.keys(Yr.players)
               .map(function (e) {
                   return Yr.players[e];
               })
               .filter(Boolean);
       }),
       (da.players = Yr.players),
       (da.getComponent = je.getComponent),
       (da.registerComponent = function (e, t) {
           Xi.isTech(t) && p.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), je.registerComponent.call(je, e, t);
       }),
       (da.getTech = Xi.getTech),
       (da.registerTech = Xi.registerTech),
       (da.use = function (e, t) {
           (Ki[e] = Ki[e] || []), Ki[e].push(t);
       }),
       Object.defineProperty(da, "middleware", { value: {}, writeable: !1, enumerable: !0 }),
       Object.defineProperty(da.middleware, "TERMINATOR", { value: $i, writeable: !1, enumerable: !0 }),
       (da.browser = pt),
       (da.TOUCH_ENABLED = ut),
       (da.extend = function (e, t) {
           void 0 === t && (t = {});
           var i = function () {
                   e.apply(this, arguments);
               },
               n = {};
           for (var r in ("object" == typeof t ? (t.constructor !== Object.prototype.constructor && (i = t.constructor), (n = t)) : "function" == typeof t && (i = t), la(i, e), e && (i.super_ = e), n))
               n.hasOwnProperty(r) && (i.prototype[r] = n[r]);
           return i;
       }),
       (da.mergeOptions = Re),
       (da.bind = ve),
       (da.registerPlugin = ua.registerPlugin),
       (da.deregisterPlugin = ua.deregisterPlugin),
       (da.plugin = function (e, t) {
           return p.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), ua.registerPlugin(e, t);
       }),
       (da.getPlugins = ua.getPlugins),
       (da.getPlugin = ua.getPlugin),
       (da.getPluginVersion = ua.getPluginVersion),
       (da.addLanguage = function (e, t) {
           var i;
           return (e = ("" + e).toLowerCase()), (da.options.languages = Re(da.options.languages, (((i = {})[e] = t), i))), da.options.languages[e];
       }),
       (da.log = p),
       (da.createLogger = f),
       (da.createTimeRange = da.createTimeRanges = gt),
       (da.formatTime = kn),
       (da.setFormatTime = function (e) {
           Sn = e;
       }),
       (da.resetFormatTime = function () {
           Sn = Tn;
       }),
       (da.parseUrl = Bt),
       (da.isCrossOrigin = qt),
       (da.EventTarget = _e),
       (da.on = he),
       (da.one = me),
       (da.off = pe),
       (da.trigger = fe),
       (da.xhr = ni),
       (da.TextTrack = ci),
       (da.AudioTrack = di),
       (da.VideoTrack = hi),
       ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function (e) {
           da[e] = function () {
               return p.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"), Y[e].apply(null, arguments);
           };
       }),
       (da.computedStyle = u),
       (da.dom = Y),
       (da.url = Zt),
       (da.defineLazyProperty = Br);
   var ma = fa(
           i(function (e, t) {
               var i, c, n, r, d;
               (i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/),
                   (c = /^([^\/?#]*)(.*)$/),
                   (n = /(?:\/|^)\.(?=\/)/g),
                   (r = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g),
                   (d = {
                       buildAbsoluteURL: function (e, t, i) {
                           if (((i = i || {}), (e = e.trim()), !(t = t.trim()))) {
                               if (!i.alwaysNormalize) return e;
                               var n = d.parseURL(e);
                               if (!n) throw new Error("Error trying to parse base URL.");
                               return (n.path = d.normalizePath(n.path)), d.buildURLFromParts(n);
                           }
                           var r = d.parseURL(t);
                           if (!r) throw new Error("Error trying to parse relative URL.");
                           if (r.scheme) return i.alwaysNormalize ? ((r.path = d.normalizePath(r.path)), d.buildURLFromParts(r)) : t;
                           var a = d.parseURL(e);
                           if (!a) throw new Error("Error trying to parse base URL.");
                           if (!a.netLoc && a.path && "/" !== a.path[0]) {
                               var s = c.exec(a.path);
                               (a.netLoc = s[1]), (a.path = s[2]);
                           }
                           a.netLoc && !a.path && (a.path = "/");
                           var o = { scheme: a.scheme, netLoc: r.netLoc, path: null, params: r.params, query: r.query, fragment: r.fragment };
                           if (!r.netLoc && ((o.netLoc = a.netLoc), "/" !== r.path[0]))
                               if (r.path) {
                                   var u = a.path,
                                       l = u.substring(0, u.lastIndexOf("/") + 1) + r.path;
                                   o.path = d.normalizePath(l);
                               } else (o.path = a.path), r.params || ((o.params = a.params), r.query || (o.query = a.query));
                           return null === o.path && (o.path = i.alwaysNormalize ? d.normalizePath(r.path) : r.path), d.buildURLFromParts(o);
                       },
                       parseURL: function (e) {
                           var t = i.exec(e);
                           return t ? { scheme: t[1] || "", netLoc: t[2] || "", path: t[3] || "", params: t[4] || "", query: t[5] || "", fragment: t[6] || "" } : null;
                       },
                       normalizePath: function (e) {
                           for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(r, "")).length; );
                           return e.split("").reverse().join("");
                       },
                       buildURLFromParts: function (e) {
                           return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment;
                       },
                   }),
                   (e.exports = d);
           })
       ),
       ga = fa(T),
       va = function (e, t) {
           return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = ma.default.buildAbsoluteURL((ga.default.location && ga.default.location.href) || "", e)), ma.default.buildAbsoluteURL(e, t));
       },
       ya = (function () {
           function e() {
               this.listeners = {};
           }
           var t = e.prototype;
           return (
               (t.on = function (e, t) {
                   this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t);
               }),
               (t.off = function (e, t) {
                   if (!this.listeners[e]) return !1;
                   var i = this.listeners[e].indexOf(t);
                   return (this.listeners[e] = this.listeners[e].slice(0)), this.listeners[e].splice(i, 1), -1 < i;
               }),
               (t.trigger = function (e, t) {
                   var i = this.listeners[e];
                   if (i)
                       if (2 === arguments.length) for (var n = i.length, r = 0; r < n; ++r) i[r].call(this, t);
                       else for (var a = Array.prototype.slice.call(arguments, 1), s = i.length, o = 0; o < s; ++o) i[o].apply(this, a);
               }),
               (t.dispose = function () {
                   this.listeners = {};
               }),
               (t.pipe = function (t) {
                   this.on("data", function (e) {
                       t.push(e);
                   });
               }),
               e
           );
       })();
   function _a(e) {
       return e && "object" == typeof e && "default" in e ? e : { default: e };
   }
   var ba = _a(T);
   function Ta(e) {
       for (var t, i = e.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), n = {}, r = i.length; r--; )
           "" !== i[r] && (((t = /([^=]*)=(.*)/.exec(i[r]).slice(1))[0] = t[0].replace(/^\s+|\s+$/g, "")), (t[1] = t[1].replace(/^\s+|\s+$/g, "")), (t[1] = t[1].replace(/^['"](.*)['"]$/g, "$1")), (n[t[0]] = t[1]));
       return n;
   }
   var Sa = function (e) {
           for (
               var t = (function (e) {
                       return ba.default.atob ? ba.default.atob(e) : Buffer.from(e, "base64").toString("binary");
                   })(e),
                   i = new Uint8Array(t.length),
                   n = 0;
               n < t.length;
               n++
           )
               i[n] = t.charCodeAt(n);
           return i;
       },
       ka = (function (t) {
           function e() {
               var e;
               return ((e = t.call(this) || this).buffer = ""), e;
           }
           return (
               Ge(e, t),
               (e.prototype.push = function (e) {
                   var t;
                   for (this.buffer += e, t = this.buffer.indexOf("\n"); -1 < t; t = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, t)), (this.buffer = this.buffer.substring(t + 1));
               }),
               e
           );
       })(ya),
       Ca = (function (t) {
           function e() {
               var e;
               return ((e = t.call(this) || this).customParsers = []), (e.tagMappers = []), e;
           }
           Ge(e, t);
           var i = e.prototype;
           return (
               (i.push = function (n) {
                   var u,
                       l,
                       c = this;
                   0 !== (n = n.trim()).length &&
                       ("#" === n[0]
                           ? this.tagMappers
                                 .reduce(
                                     function (e, t) {
                                         var i = t(n);
                                         return i === n ? e : e.concat([i]);
                                     },
                                     [n]
                                 )
                                 .forEach(function (e) {
                                     for (var t = 0; t < c.customParsers.length; t++) if (c.customParsers[t].call(c, e)) return;
                                     if (0 === e.indexOf("#EXT"))
                                         if (((e = e.replace("\r", "")), (u = /^#EXTM3U/.exec(e)))) c.trigger("data", { type: "tag", tagType: "m3u" });
                                         else {
                                             if ((u = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e))) return (l = { type: "tag", tagType: "inf" }), u[1] && (l.duration = parseFloat(u[1])), u[2] && (l.title = u[2]), void c.trigger("data", l);
                                             if ((u = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e))) return (l = { type: "tag", tagType: "targetduration" }), u[1] && (l.duration = parseInt(u[1], 10)), void c.trigger("data", l);
                                             if ((u = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e))) return (l = { type: "tag", tagType: "totalduration" }), u[1] && (l.duration = parseInt(u[1], 10)), void c.trigger("data", l);
                                             if ((u = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(e))) return (l = { type: "tag", tagType: "version" }), u[1] && (l.version = parseInt(u[1], 10)), void c.trigger("data", l);
                                             if ((u = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e))) return (l = { type: "tag", tagType: "media-sequence" }), u[1] && (l.number = parseInt(u[1], 10)), void c.trigger("data", l);
                                             if ((u = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)))
                                                 return (l = { type: "tag", tagType: "discontinuity-sequence" }), u[1] && (l.number = parseInt(u[1], 10)), void c.trigger("data", l);
                                             if ((u = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e))) return (l = { type: "tag", tagType: "playlist-type" }), u[1] && (l.playlistType = u[1]), void c.trigger("data", l);
                                             if ((u = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e)))
                                                 return (l = { type: "tag", tagType: "byterange" }), u[1] && (l.length = parseInt(u[1], 10)), u[2] && (l.offset = parseInt(u[2], 10)), void c.trigger("data", l);
                                             if ((u = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e))) return (l = { type: "tag", tagType: "allow-cache" }), u[1] && (l.allowed = !/NO/.test(u[1])), void c.trigger("data", l);
                                             if ((u = /^#EXT-X-MAP:?(.*)$/.exec(e))) {
                                                 if (((l = { type: "tag", tagType: "map" }), u[1])) {
                                                     var i = Ta(u[1]);
                                                     if ((i.URI && (l.uri = i.URI), i.BYTERANGE)) {
                                                         var n = i.BYTERANGE.split("@"),
                                                             r = n[0],
                                                             a = n[1];
                                                         (l.byterange = {}), r && (l.byterange.length = parseInt(r, 10)), a && (l.byterange.offset = parseInt(a, 10));
                                                     }
                                                 }
                                                 c.trigger("data", l);
                                             } else if ((u = /^#EXT-X-STREAM-INF:?(.*)$/.exec(e))) {
                                                 if (((l = { type: "tag", tagType: "stream-inf" }), u[1])) {
                                                     if (((l.attributes = Ta(u[1])), l.attributes.RESOLUTION)) {
                                                         var s = l.attributes.RESOLUTION.split("x"),
                                                             o = {};
                                                         s[0] && (o.width = parseInt(s[0], 10)), s[1] && (o.height = parseInt(s[1], 10)), (l.attributes.RESOLUTION = o);
                                                     }
                                                     l.attributes.BANDWIDTH && (l.attributes.BANDWIDTH = parseInt(l.attributes.BANDWIDTH, 10)),
                                                         l.attributes["PROGRAM-ID"] && (l.attributes["PROGRAM-ID"] = parseInt(l.attributes["PROGRAM-ID"], 10));
                                                 }
                                                 c.trigger("data", l);
                                             } else {
                                                 if ((u = /^#EXT-X-MEDIA:?(.*)$/.exec(e))) return (l = { type: "tag", tagType: "media" }), u[1] && (l.attributes = Ta(u[1])), void c.trigger("data", l);
                                                 if ((u = /^#EXT-X-ENDLIST/.exec(e))) c.trigger("data", { type: "tag", tagType: "endlist" });
                                                 else if ((u = /^#EXT-X-DISCONTINUITY/.exec(e))) c.trigger("data", { type: "tag", tagType: "discontinuity" });
                                                 else {
                                                     if ((u = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e)))
                                                         return (l = { type: "tag", tagType: "program-date-time" }), u[1] && ((l.dateTimeString = u[1]), (l.dateTimeObject = new Date(u[1]))), void c.trigger("data", l);
                                                     if ((u = /^#EXT-X-KEY:?(.*)$/.exec(e)))
                                                         return (
                                                             (l = { type: "tag", tagType: "key" }),
                                                             u[1] &&
                                                                 ((l.attributes = Ta(u[1])),
                                                                 l.attributes.IV &&
                                                                     ("0x" === l.attributes.IV.substring(0, 2).toLowerCase() && (l.attributes.IV = l.attributes.IV.substring(2)),
                                                                     (l.attributes.IV = l.attributes.IV.match(/.{8}/g)),
                                                                     (l.attributes.IV[0] = parseInt(l.attributes.IV[0], 16)),
                                                                     (l.attributes.IV[1] = parseInt(l.attributes.IV[1], 16)),
                                                                     (l.attributes.IV[2] = parseInt(l.attributes.IV[2], 16)),
                                                                     (l.attributes.IV[3] = parseInt(l.attributes.IV[3], 16)),
                                                                     (l.attributes.IV = new Uint32Array(l.attributes.IV)))),
                                                             void c.trigger("data", l)
                                                         );
                                                     if ((u = /^#EXT-X-START:?(.*)$/.exec(e)))
                                                         return (
                                                             (l = { type: "tag", tagType: "start" }),
                                                             u[1] && ((l.attributes = Ta(u[1])), (l.attributes["TIME-OFFSET"] = parseFloat(l.attributes["TIME-OFFSET"])), (l.attributes.PRECISE = /YES/.test(l.attributes.PRECISE))),
                                                             void c.trigger("data", l)
                                                         );
                                                     if ((u = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e))) return (l = { type: "tag", tagType: "cue-out-cont" }), u[1] ? (l.data = u[1]) : (l.data = ""), void c.trigger("data", l);
                                                     if ((u = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(e))) return (l = { type: "tag", tagType: "cue-out" }), u[1] ? (l.data = u[1]) : (l.data = ""), void c.trigger("data", l);
                                                     if ((u = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e))) return (l = { type: "tag", tagType: "cue-in" }), u[1] ? (l.data = u[1]) : (l.data = ""), void c.trigger("data", l);
                                                     c.trigger("data", { type: "tag", data: e.slice(4) });
                                                 }
                                             }
                                         }
                                     else c.trigger("data", { type: "comment", text: e.slice(1) });
                                 })
                           : this.trigger("data", { type: "uri", uri: n }));
               }),
               (i.addParser = function (e) {
                   var t = this,
                       i = e.expression,
                       n = e.customType,
                       r = e.dataParser,
                       a = e.segment;
                   "function" != typeof r &&
                       (r = function (e) {
                           return e;
                       }),
                       this.customParsers.push(function (e) {
                           if (i.exec(e)) return t.trigger("data", { type: "custom", data: r(e), customType: n, segment: a }), !0;
                       });
               }),
               (i.addTagMapper = function (e) {
                   var t = e.expression,
                       i = e.map;
                   this.tagMappers.push(function (e) {
                       return t.test(e) ? i(e) : e;
                   });
               }),
               e
           );
       })(ya),
       Ea = (function (t) {
           function e() {
               var e;
               ((e = t.call(this) || this).lineStream = new ka()), (e.parseStream = new Ca()), e.lineStream.pipe(e.parseStream);
               var r,
                   a,
                   s = Ve(e),
                   o = [],
                   u = {},
                   l = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} },
                   c = 0;
               e.manifest = { allowCache: !0, discontinuityStarts: [], segments: [] };
               var d = 0;
               return (
                   e.parseStream.on("data", function (t) {
                       var i, n;
                       ({
                           tag: function () {
                               ((
                                   {
                                       "allow-cache": function () {
                                           (this.manifest.allowCache = t.allowed), "allowed" in t || (this.trigger("info", { message: "defaulting allowCache to YES" }), (this.manifest.allowCache = !0));
                                       },
                                       byterange: function () {
                                           var e = {};
                                           "length" in t && (((u.byterange = e).length = t.length), "offset" in t || (t.offset = d)), "offset" in t && ((u.byterange = e).offset = t.offset), (d = e.offset + e.length);
                                       },
                                       endlist: function () {
                                           this.manifest.endList = !0;
                                       },
                                       inf: function () {
                                           "mediaSequence" in this.manifest || ((this.manifest.mediaSequence = 0), this.trigger("info", { message: "defaulting media sequence to zero" })),
                                               "discontinuitySequence" in this.manifest || ((this.manifest.discontinuitySequence = 0), this.trigger("info", { message: "defaulting discontinuity sequence to zero" })),
                                               0 < t.duration && (u.duration = t.duration),
                                               0 === t.duration && ((u.duration = 0.01), this.trigger("info", { message: "updating zero segment duration to a small value" })),
                                               (this.manifest.segments = o);
                                       },
                                       key: function () {
                                           if (t.attributes)
                                               if ("NONE" !== t.attributes.METHOD)
                                                   if (t.attributes.URI) {
                                                       if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === t.attributes.KEYFORMAT) {
                                                           return -1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(t.attributes.METHOD)
                                                               ? void this.trigger("warn", { message: "invalid key method provided for Widevine" })
                                                               : ("SAMPLE-AES-CENC" === t.attributes.METHOD && this.trigger("warn", { message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead" }),
                                                                 "data:text/plain;base64," !== t.attributes.URI.substring(0, 23)
                                                                     ? void this.trigger("warn", { message: "invalid key URI provided for Widevine" })
                                                                     : t.attributes.KEYID && "0x" === t.attributes.KEYID.substring(0, 2)
                                                                     ? void (this.manifest.contentProtection = {
                                                                           "com.widevine.alpha": { attributes: { schemeIdUri: t.attributes.KEYFORMAT, keyId: t.attributes.KEYID.substring(2) }, pssh: Sa(t.attributes.URI.split(",")[1]) },
                                                                       })
                                                                     : void this.trigger("warn", { message: "invalid key ID provided for Widevine" }));
                                                       }
                                                       t.attributes.METHOD || this.trigger("warn", { message: "defaulting key method to AES-128" }),
                                                           (a = { method: t.attributes.METHOD || "AES-128", uri: t.attributes.URI }),
                                                           "undefined" != typeof t.attributes.IV && (a.iv = t.attributes.IV);
                                                   } else this.trigger("warn", { message: "ignoring key declaration without URI" });
                                               else a = null;
                                           else this.trigger("warn", { message: "ignoring key declaration without attribute list" });
                                       },
                                       "media-sequence": function () {
                                           isFinite(t.number) ? (this.manifest.mediaSequence = t.number) : this.trigger("warn", { message: "ignoring invalid media sequence: " + t.number });
                                       },
                                       "discontinuity-sequence": function () {
                                           isFinite(t.number) ? ((this.manifest.discontinuitySequence = t.number), (c = t.number)) : this.trigger("warn", { message: "ignoring invalid discontinuity sequence: " + t.number });
                                       },
                                       "playlist-type": function () {
                                           /VOD|EVENT/.test(t.playlistType) ? (this.manifest.playlistType = t.playlistType) : this.trigger("warn", { message: "ignoring unknown playlist type: " + t.playlist });
                                       },
                                       map: function () {
                                           (r = {}), t.uri && (r.uri = t.uri), t.byterange && (r.byterange = t.byterange);
                                       },
                                       "stream-inf": function () {
                                           (this.manifest.playlists = o),
                                               (this.manifest.mediaGroups = this.manifest.mediaGroups || l),
                                               t.attributes ? (u.attributes || (u.attributes = {}), m(u.attributes, t.attributes)) : this.trigger("warn", { message: "ignoring empty stream-inf attributes" });
                                       },
                                       media: function () {
                                           if (((this.manifest.mediaGroups = this.manifest.mediaGroups || l), t.attributes && t.attributes.TYPE && t.attributes["GROUP-ID"] && t.attributes.NAME)) {
                                               var e = this.manifest.mediaGroups[t.attributes.TYPE];
                                               (e[t.attributes["GROUP-ID"]] = e[t.attributes["GROUP-ID"]] || {}),
                                                   (i = e[t.attributes["GROUP-ID"]]),
                                                   (n = { default: /yes/i.test(t.attributes.DEFAULT) }).default ? (n.autoselect = !0) : (n.autoselect = /yes/i.test(t.attributes.AUTOSELECT)),
                                                   t.attributes.LANGUAGE && (n.language = t.attributes.LANGUAGE),
                                                   t.attributes.URI && (n.uri = t.attributes.URI),
                                                   t.attributes["INSTREAM-ID"] && (n.instreamId = t.attributes["INSTREAM-ID"]),
                                                   t.attributes.CHARACTERISTICS && (n.characteristics = t.attributes.CHARACTERISTICS),
                                                   t.attributes.FORCED && (n.forced = /yes/i.test(t.attributes.FORCED)),
                                                   (i[t.attributes.NAME] = n);
                                           } else this.trigger("warn", { message: "ignoring incomplete or missing media group" });
                                       },
                                       discontinuity: function () {
                                           (c += 1), (u.discontinuity = !0), this.manifest.discontinuityStarts.push(o.length);
                                       },
                                       "program-date-time": function () {
                                           "undefined" == typeof this.manifest.dateTimeString && ((this.manifest.dateTimeString = t.dateTimeString), (this.manifest.dateTimeObject = t.dateTimeObject)),
                                               (u.dateTimeString = t.dateTimeString),
                                               (u.dateTimeObject = t.dateTimeObject);
                                       },
                                       targetduration: function () {
                                           !isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", { message: "ignoring invalid target duration: " + t.duration }) : (this.manifest.targetDuration = t.duration);
                                       },
                                       totalduration: function () {
                                           !isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", { message: "ignoring invalid total duration: " + t.duration }) : (this.manifest.totalDuration = t.duration);
                                       },
                                       start: function () {
                                           t.attributes && !isNaN(t.attributes["TIME-OFFSET"])
                                               ? (this.manifest.start = { timeOffset: t.attributes["TIME-OFFSET"], precise: t.attributes.PRECISE })
                                               : this.trigger("warn", { message: "ignoring start declaration without appropriate attribute list" });
                                       },
                                       "cue-out": function () {
                                           u.cueOut = t.data;
                                       },
                                       "cue-out-cont": function () {
                                           u.cueOutCont = t.data;
                                       },
                                       "cue-in": function () {
                                           u.cueIn = t.data;
                                       },
                                   }[t.tagType] || function () {}
                               ).call(s));
                           },
                           uri: function () {
                               (u.uri = t.uri),
                                   o.push(u),
                                   !this.manifest.targetDuration || "duration" in u || (this.trigger("warn", { message: "defaulting segment duration to the target duration" }), (u.duration = this.manifest.targetDuration)),
                                   a && (u.key = a),
                                   (u.timeline = c),
                                   r && (u.map = r),
                                   (u = {});
                           },
                           comment: function () {},
                           custom: function () {
                               t.segment ? ((u.custom = u.custom || {}), (u.custom[t.customType] = t.data)) : ((this.manifest.custom = this.manifest.custom || {}), (this.manifest.custom[t.customType] = t.data));
                           },
                       }[t.type].call(s));
                   }),
                   e
               );
           }
           Ge(e, t);
           var i = e.prototype;
           return (
               (i.push = function (e) {
                   this.lineStream.push(e);
               }),
               (i.end = function () {
                   this.lineStream.push("\n");
               }),
               (i.addParser = function (e) {
                   this.parseStream.addParser(e);
               }),
               (i.addTagMapper = function (e) {
                   this.parseStream.addTagMapper(e);
               }),
               e
           );
       })(ya),
       wa = i(function (e, t) {
           Object.defineProperty(t, "__esModule", { value: !0 });
           var i = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i,
               n = /^application\/dash\+xml/i;
           t.simpleTypeFromSourceType = function (e) {
               return i.test(e) ? "hls" : n.test(e) ? "dash" : "application/vnd.videojs.vhs+json" === e ? "vhs-json" : null;
           };
       });
   /*! @name m3u8-parser @version 4.5.0 @license Apache-2.0 */ t(wa);
   var Ia = wa.simpleTypeFromSourceType,
       Aa = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
       xa = new RegExp("[\\-\\.0-9" + Aa.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
       Pa = new RegExp("^" + Aa.source + xa.source + "*(?::" + Aa.source + xa.source + "*)?$"),
       La = 0,
       Oa = 1,
       Da = 2,
       Ma = 3,
       Ra = 4,
       Na = 5,
       Ua = 6,
       Fa = 7;
   function Ba() {}
   function ja(e, t) {
       return (t.lineNumber = e.lineNumber), (t.columnNumber = e.columnNumber), t;
   }
   function Va(e, t, i, n, r, a) {
       for (var s, o = ++t, u = La; ; ) {
           var l = e.charAt(o);
           switch (l) {
               case "=":
                   if (u === Oa) (s = e.slice(t, o)), (u = Ma);
                   else {
                       if (u !== Da) throw new Error("attribute equal must after attrName");
                       u = Ma;
                   }
                   break;
               case "'":
               case '"':
                   if (u === Ma || u === Oa) {
                       if ((u === Oa && (a.warning('attribute value must after "="'), (s = e.slice(t, o))), (t = o + 1), !(0 < (o = e.indexOf(l, t))))) throw new Error("attribute value no end '" + l + "' match");
                       (c = e.slice(t, o).replace(/&#?\w+;/g, r)), i.add(s, c, t - 1), (u = Na);
                   } else {
                       if (u != Ra) throw new Error('attribute value must after "="');
                       (c = e.slice(t, o).replace(/&#?\w+;/g, r)), i.add(s, c, t), a.warning('attribute "' + s + '" missed start quot(' + l + ")!!"), (t = o + 1), (u = Na);
                   }
                   break;
               case "/":
                   switch (u) {
                       case La:
                           i.setTagName(e.slice(t, o));
                       case Na:
                       case Ua:
                       case Fa:
                           (u = Fa), (i.closed = !0);
                       case Ra:
                       case Oa:
                       case Da:
                           break;
                       default:
                           throw new Error("attribute invalid close char('/')");
                   }
                   break;
               case "":
                   return a.error("unexpected end of input"), u == La && i.setTagName(e.slice(t, o)), o;
               case ">":
                   switch (u) {
                       case La:
                           i.setTagName(e.slice(t, o));
                       case Na:
                       case Ua:
                       case Fa:
                           break;
                       case Ra:
                       case Oa:
                           "/" === (c = e.slice(t, o)).slice(-1) && ((i.closed = !0), (c = c.slice(0, -1)));
                       case Da:
                           u === Da && (c = s),
                               u == Ra
                                   ? (a.warning('attribute "' + c + '" missed quot(")!!'), i.add(s, c.replace(/&#?\w+;/g, r), t))
                                   : (("http://www.w3.org/1999/xhtml" === n[""] && c.match(/^(?:disabled|checked|selected)$/i)) || a.warning('attribute "' + c + '" missed value!! "' + c + '" instead!!'), i.add(c, c, t));
                           break;
                       case Ma:
                           throw new Error("attribute value missed!!");
                   }
                   return o;
               case "":
                   l = " ";
               default:
                   if (l <= " ")
                       switch (u) {
                           case La:
                               i.setTagName(e.slice(t, o)), (u = Ua);
                               break;
                           case Oa:
                               (s = e.slice(t, o)), (u = Da);
                               break;
                           case Ra:
                               var c = e.slice(t, o).replace(/&#?\w+;/g, r);
                               a.warning('attribute "' + c + '" missed quot(")!!'), i.add(s, c, t);
                           case Na:
                               u = Ua;
                       }
                   else
                       switch (u) {
                           case Da:
                               i.tagName;
                               ("http://www.w3.org/1999/xhtml" === n[""] && s.match(/^(?:disabled|checked|selected)$/i)) || a.warning('attribute "' + s + '" missed value!! "' + s + '" instead2!!'), i.add(s, s, t), (t = o), (u = Oa);
                               break;
                           case Na:
                               a.warning('attribute space is required"' + s + '"!!');
                           case Ua:
                               (u = Oa), (t = o);
                               break;
                           case Ma:
                               (u = Ra), (t = o);
                               break;
                           case Fa:
                               throw new Error("elements closed character '/' and '>' must be connected to");
                       }
           }
           o++;
       }
   }
   function qa(e, t, i) {
       for (var n = e.tagName, r = null, a = e.length; a--; ) {
           var s = e[a],
               o = s.qName,
               u = s.value;
           if (0 < (h = o.indexOf(":")))
               var l = (s.prefix = o.slice(0, h)),
                   c = o.slice(h + 1),
                   d = "xmlns" === l && c;
           else (l = null), (d = "xmlns" === (c = o) && "");
           (s.localName = c), !1 !== d && (null == r && ((r = {}), za(i, (i = {}))), (i[d] = r[d] = u), (s.uri = "http://www.w3.org/2000/xmlns/"), t.startPrefixMapping(d, u));
       }
       for (a = e.length; a--; ) {
           (l = (s = e[a]).prefix) && ("xml" === l && (s.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== l && (s.uri = i[l || ""]));
       }
       var h;
       c = 0 < (h = n.indexOf(":")) ? ((l = e.prefix = n.slice(0, h)), (e.localName = n.slice(h + 1))) : ((l = null), (e.localName = n));
       var p = (e.uri = i[l || ""]);
       if ((t.startElement(p, c, n, e), !e.closed)) return (e.currentNSMap = i), (e.localNSMap = r), !0;
       if ((t.endElement(p, c, n), r)) for (l in r) t.endPrefixMapping(l);
   }
   function Ha(e, t, i, n, r) {
       if (/^(?:script|textarea)$/i.test(i)) {
           var a = e.indexOf("</" + i + ">", t),
               s = e.substring(t + 1, a);
           if (/[&<]/.test(s)) return /^script$/i.test(i) || (s = s.replace(/&#?\w+;/g, n)), r.characters(s, 0, s.length), a;
       }
       return t + 1;
   }
   function Wa(e, t, i, n) {
       var r = n[i];
       return null == r && ((r = e.lastIndexOf("</" + i + ">")) < t && (r = e.lastIndexOf("</" + i)), (n[i] = r)), r < t;
   }
   function za(e, t) {
       for (var i in e) t[i] = e[i];
   }
   function Ga(e, t, i, n) {
       switch (e.charAt(t + 2)) {
           case "-":
               return "-" !== e.charAt(t + 3) ? -1 : t < (r = e.indexOf("--\x3e", t + 4)) ? (i.comment(e, t + 4, r - t - 4), r + 3) : (n.error("Unclosed comment"), -1);
           default:
               if ("CDATA[" == e.substr(t + 3, 6)) {
                   var r = e.indexOf("]]>", t + 9);
                   return i.startCDATA(), i.characters(e, t + 9, r - t - 9), i.endCDATA(), r + 3;
               }
               var a = (function (e, t) {
                       var i,
                           n = [],
                           r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                       (r.lastIndex = t), r.exec(e);
                       for (; (i = r.exec(e)); ) if ((n.push(i), i[1])) return n;
                   })(e, t),
                   s = a.length;
               if (1 < s && /!doctype/i.test(a[0][0])) {
                   var o = a[1][0],
                       u = 3 < s && /^public$/i.test(a[2][0]) && a[3][0],
                       l = 4 < s && a[4][0],
                       c = a[s - 1];
                   return i.startDTD(o, u && u.replace(/^(['"])(.*?)\1$/, "$2"), l && l.replace(/^(['"])(.*?)\1$/, "$2")), i.endDTD(), c.index + c[0].length;
               }
       }
       return -1;
   }
   function Xa(e, t, i) {
       var n = e.indexOf("?>", t);
       if (n) {
           var r = e.substring(t, n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
           if (r) {
               r[0].length;
               return i.processingInstruction(r[1], r[2]), n + 2;
           }
           return -1;
       }
       return -1;
   }
   function Ka(e) {}
   function Ya(e, t) {
       return (e.__proto__ = t), e;
   }
   (Ba.prototype = {
       parse: function (e, t, i) {
           var n = this.domBuilder;
           n.startDocument(),
               za(t, (t = {})),
               (function (i, e, n, r, a) {
                   function s(e) {
                       var t = e.slice(1, -1);
                       return t in n
                           ? n[t]
                           : "#" === t.charAt(0)
                           ? (function (e) {
                                 if (65535 < e) {
                                     var t = 55296 + ((e -= 65536) >> 10),
                                         i = 56320 + (1023 & e);
                                     return String.fromCharCode(t, i);
                                 }
                                 return String.fromCharCode(e);
                             })(parseInt(t.substr(1).replace("x", "0x")))
                           : (a.error("entity not found:" + e), e);
                   }
                   function t(e) {
                       if (f < e) {
                           var t = i.substring(f, e).replace(/&#?\w+;/g, s);
                           d && o(f), r.characters(t, 0, e - f), (f = e);
                       }
                   }
                   function o(e, t) {
                       for (; l <= e && (t = c.exec(i)); ) (u = t.index), (l = u + t[0].length), d.lineNumber++;
                       d.columnNumber = e - u + 1;
                   }
                   var u = 0,
                       l = 0,
                       c = /.*(?:\r\n?|\n)|.*$/g,
                       d = r.locator,
                       h = [{ currentNSMap: e }],
                       p = {},
                       f = 0;
                   for (;;) {
                       try {
                           var m = i.indexOf("<", f);
                           if (m < 0) {
                               if (!i.substr(f).match(/^\s*$/)) {
                                   var g = r.doc,
                                       v = g.createTextNode(i.substr(f));
                                   g.appendChild(v), (r.currentElement = v);
                               }
                               return;
                           }
                           switch ((f < m && t(m), i.charAt(m + 1))) {
                               case "/":
                                   var y = i.indexOf(">", m + 3),
                                       _ = i.substring(m + 2, y),
                                       b = h.pop();
                                   y < 0
                                       ? ((_ = i.substring(m + 2).replace(/[\s<].*/, "")), a.error("end tag name: " + _ + " is not complete:" + b.tagName), (y = m + 1 + _.length))
                                       : _.match(/\s</) && ((_ = _.replace(/[\s<].*/, "")), a.error("end tag name: " + _ + " maybe not complete"), (y = m + 1 + _.length));
                                   var T = b.localNSMap,
                                       S = b.tagName == _;
                                   if (S || (b.tagName && b.tagName.toLowerCase() == _.toLowerCase())) {
                                       if ((r.endElement(b.uri, b.localName, _), T)) for (var k in T) r.endPrefixMapping(k);
                                       S || a.fatalError("end tag name: " + _ + " is not match the current start tagName:" + b.tagName);
                                   } else h.push(b);
                                   y++;
                                   break;
                               case "?":
                                   d && o(m), (y = Xa(i, m, r));
                                   break;
                               case "!":
                                   d && o(m), (y = Ga(i, m, r, a));
                                   break;
                               default:
                                   d && o(m);
                                   var C = new Ka(),
                                       E = h[h.length - 1].currentNSMap,
                                       w = ((y = Va(i, m, C, E, s, a)), C.length);
                                   if ((!C.closed && Wa(i, y, C.tagName, p) && ((C.closed = !0), n.nbsp || a.warning("unclosed xml attribute")), d && w)) {
                                       for (var I = ja(d, {}), A = 0; A < w; A++) {
                                           var x = C[A];
                                           o(x.offset), (x.locator = ja(d, {}));
                                       }
                                       (r.locator = I), qa(C, r, E) && h.push(C), (r.locator = d);
                                   } else qa(C, r, E) && h.push(C);
                                   "http://www.w3.org/1999/xhtml" !== C.uri || C.closed ? y++ : (y = Ha(i, y, C.tagName, s, r));
                           }
                       } catch (e) {
                           a.error("element parse error: " + e), (y = -1);
                       }
                       f < y ? (f = y) : t(Math.max(m, f) + 1);
                   }
               })(e, t, i, n, this.errorHandler),
               n.endDocument();
       },
   }),
       (Ka.prototype = {
           setTagName: function (e) {
               if (!Pa.test(e)) throw new Error("invalid tagName:" + e);
               this.tagName = e;
           },
           add: function (e, t, i) {
               if (!Pa.test(e)) throw new Error("invalid attribute:" + e);
               this[this.length++] = { qName: e, value: t, offset: i };
           },
           length: 0,
           getLocalName: function (e) {
               return this[e].localName;
           },
           getLocator: function (e) {
               return this[e].locator;
           },
           getQName: function (e) {
               return this[e].qName;
           },
           getURI: function (e) {
               return this[e].uri;
           },
           getValue: function (e) {
               return this[e].value;
           },
       }),
       Ya({}, Ya.prototype) instanceof Ya ||
           (Ya = function (e, t) {
               function i() {}
               for (t in ((i.prototype = t), (i = new i()), e)) i[t] = e[t];
               return i;
           });
   var $a = { XMLReader: Ba };
   function Qa(e, t) {
       for (var i in e) t[i] = e[i];
   }
   function Ja(e, t) {
       var i = e.prototype;
       if (Object.create) {
           var n = Object.create(t.prototype);
           i.__proto__ = n;
       }
       if (!(i instanceof t)) {
           var r = function () {};
           (r.prototype = t.prototype), Qa(i, (r = new r())), (e.prototype = i = r);
       }
       i.constructor != e && (i.constructor = e);
   }
   var Za = "http://www.w3.org/1999/xhtml",
       es = {},
       ts = (es.ELEMENT_NODE = 1),
       is = (es.ATTRIBUTE_NODE = 2),
       ns = (es.TEXT_NODE = 3),
       rs = (es.CDATA_SECTION_NODE = 4),
       as = (es.ENTITY_REFERENCE_NODE = 5),
       ss = (es.ENTITY_NODE = 6),
       os = (es.PROCESSING_INSTRUCTION_NODE = 7),
       us = (es.COMMENT_NODE = 8),
       ls = (es.DOCUMENT_NODE = 9),
       cs = (es.DOCUMENT_TYPE_NODE = 10),
       ds = (es.DOCUMENT_FRAGMENT_NODE = 11),
       hs = (es.NOTATION_NODE = 12),
       ps = {},
       fs = {},
       ms = ((ps.INDEX_SIZE_ERR = ((fs[1] = "Index size error"), 1)), (ps.DOMSTRING_SIZE_ERR = ((fs[2] = "DOMString size error"), 2)), (ps.HIERARCHY_REQUEST_ERR = ((fs[3] = "Hierarchy request error"), 3))),
       gs =
           ((ps.WRONG_DOCUMENT_ERR = ((fs[4] = "Wrong document"), 4)),
           (ps.INVALID_CHARACTER_ERR = ((fs[5] = "Invalid character"), 5)),
           (ps.NO_DATA_ALLOWED_ERR = ((fs[6] = "No data allowed"), 6)),
           (ps.NO_MODIFICATION_ALLOWED_ERR = ((fs[7] = "No modification allowed"), 7)),
           (ps.NOT_FOUND_ERR = ((fs[8] = "Not found"), 8))),
       vs = ((ps.NOT_SUPPORTED_ERR = ((fs[9] = "Not supported"), 9)), (ps.INUSE_ATTRIBUTE_ERR = ((fs[10] = "Attribute in use"), 10)));
   (ps.INVALID_STATE_ERR = ((fs[11] = "Invalid state"), 11)),
       (ps.SYNTAX_ERR = ((fs[12] = "Syntax error"), 12)),
       (ps.INVALID_MODIFICATION_ERR = ((fs[13] = "Invalid modification"), 13)),
       (ps.NAMESPACE_ERR = ((fs[14] = "Invalid namespace"), 14)),
       (ps.INVALID_ACCESS_ERR = ((fs[15] = "Invalid access"), 15));
   function ys(e, t) {
       if (t instanceof Error) var i = t;
       else (i = this), Error.call(this, fs[e]), (this.message = fs[e]), Error.captureStackTrace && Error.captureStackTrace(this, ys);
       return (i.code = e), t && (this.message = this.message + ": " + t), i;
   }
   function _s() {}
   function bs(e, t) {
       (this._node = e), (this._refresh = t), Ts(this);
   }
   function Ts(e) {
       var t = e._node._inc || e._node.ownerDocument._inc;
       if (e._inc != t) {
           var i = e._refresh(e._node);
           Qs(e, "length", i.length), Qa(i, e), (e._inc = t);
       }
   }
   function Ss() {}
   function ks(e, t) {
       for (var i = e.length; i--; ) if (e[i] === t) return i;
   }
   function Cs(e, t, i, n) {
       if ((n ? (t[ks(t, n)] = i) : (t[t.length++] = i), e)) {
           var r = (i.ownerElement = e).ownerDocument;
           r &&
               (n && Ls(r, e, n),
               (function (e, t, i) {
                   e && e._inc++, "http://www.w3.org/2000/xmlns/" == i.namespaceURI && (t._nsMap[i.prefix ? i.localName : ""] = i.value);
               })(r, e, i));
       }
   }
   function Es(e, t, i) {
       var n = ks(t, i);
       if (!(0 <= n)) throw ys(gs, new Error(e.tagName + "@" + i));
       for (var r = t.length - 1; n < r; ) t[n] = t[++n];
       if (((t.length = r), e)) {
           var a = e.ownerDocument;
           a && (Ls(a, e, i), (i.ownerElement = null));
       }
   }
   function ws(e) {
       if (((this._features = {}), e)) for (var t in e) this._features = e[t];
   }
   function Is() {}
   function As(e) {
       return ("<" == e ? "&lt;" : ">" == e && "&gt;") || ("&" == e && "&amp;") || ('"' == e && "&quot;") || "&#" + e.charCodeAt() + ";";
   }
   function xs(e, t) {
       if (t(e)) return !0;
       if ((e = e.firstChild))
           do {
               if (xs(e, t)) return !0;
           } while ((e = e.nextSibling));
   }
   function Ps() {}
   function Ls(e, t, i) {
       e && e._inc++, "http://www.w3.org/2000/xmlns/" == i.namespaceURI && delete t._nsMap[i.prefix ? i.localName : ""];
   }
   function Os(e, t, i) {
       if (e && e._inc) {
           e._inc++;
           var n = t.childNodes;
           if (i) n[n.length++] = i;
           else {
               for (var r = t.firstChild, a = 0; r; ) r = (n[a++] = r).nextSibling;
               n.length = a;
           }
       }
   }
   function Ds(e, t) {
       var i = t.previousSibling,
           n = t.nextSibling;
       return i ? (i.nextSibling = n) : (e.firstChild = n), n ? (n.previousSibling = i) : (e.lastChild = i), Os(e.ownerDocument, e), t;
   }
   function Ms(e, t, i) {
       var n = t.parentNode;
       if ((n && n.removeChild(t), t.nodeType === ds)) {
           var r = t.firstChild;
           if (null == r) return t;
           var a = t.lastChild;
       } else r = a = t;
       var s = i ? i.previousSibling : e.lastChild;
       for (r.previousSibling = s, a.nextSibling = i, s ? (s.nextSibling = r) : (e.firstChild = r), null == i ? (e.lastChild = a) : (i.previousSibling = a); (r.parentNode = e), r !== a && (r = r.nextSibling); );
       return Os(e.ownerDocument || e, e), t.nodeType == ds && (t.firstChild = t.lastChild = null), t;
   }
   function Rs() {
       this._nsMap = {};
   }
   function Ns() {}
   function Us() {}
   function Fs() {}
   function Bs() {}
   function js() {}
   function Vs() {}
   function qs() {}
   function Hs() {}
   function Ws() {}
   function zs() {}
   function Gs() {}
   function Xs() {}
   function Ks(e, t) {
       var i = [],
           n = 9 == this.nodeType ? this.documentElement : this,
           r = n.prefix,
           a = n.namespaceURI;
       if (a && null == r && null == (r = n.lookupPrefix(a))) var s = [{ namespace: a, prefix: null }];
       return $s(this, i, e, t, s), i.join("");
   }
   function Ys(e, t, i) {
       var n = e.prefix || "",
           r = e.namespaceURI;
       if (!n && !r) return !1;
       if (("xml" === n && "http://www.w3.org/XML/1998/namespace" === r) || "http://www.w3.org/2000/xmlns/" == r) return !1;
       for (var a = i.length; a--; ) {
           var s = i[a];
           if (s.prefix == n) return s.namespace != r;
       }
       return !0;
   }
   function $s(e, t, i, n, r) {
       if (n) {
           if (!(e = n(e))) return;
           if ("string" == typeof e) return void t.push(e);
       }
       switch (e.nodeType) {
           case ts:
               r = r || [];
               var a = e.attributes,
                   s = a.length,
                   o = e.firstChild,
                   u = e.tagName;
               (i = Za === e.namespaceURI || i), t.push("<", u);
               for (var l = 0; l < s; l++) {
                   "xmlns" == (c = a.item(l)).prefix ? r.push({ prefix: c.localName, namespace: c.value }) : "xmlns" == c.nodeName && r.push({ prefix: "", namespace: c.value });
               }
               for (l = 0; l < s; l++) {
                   var c;
                   if (Ys((c = a.item(l)), 0, r)) {
                       var d = c.prefix || "",
                           h = c.namespaceURI,
                           p = d ? " xmlns:" + d : " xmlns";
                       t.push(p, '="', h, '"'), r.push({ prefix: d, namespace: h });
                   }
                   $s(c, t, i, n, r);
               }
               if (Ys(e, 0, r)) {
                   (d = e.prefix || ""), (h = e.namespaceURI), (p = d ? " xmlns:" + d : " xmlns");
                   t.push(p, '="', h, '"'), r.push({ prefix: d, namespace: h });
               }
               if (o || (i && !/^(?:meta|link|img|br|hr|input)$/i.test(u))) {
                   if ((t.push(">"), i && /^script$/i.test(u))) for (; o; ) o.data ? t.push(o.data) : $s(o, t, i, n, r), (o = o.nextSibling);
                   else for (; o; ) $s(o, t, i, n, r), (o = o.nextSibling);
                   t.push("</", u, ">");
               } else t.push("/>");
               return;
           case ls:
           case ds:
               for (o = e.firstChild; o; ) $s(o, t, i, n, r), (o = o.nextSibling);
               return;
           case is:
               return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, As), '"');
           case ns:
               return t.push(e.data.replace(/[<&]/g, As));
           case rs:
               return t.push("<![CDATA[", e.data, "]]>");
           case us:
               return t.push("\x3c!--", e.data, "--\x3e");
           case cs:
               var f = e.publicId,
                   m = e.systemId;
               if ((t.push("<!DOCTYPE ", e.name), f)) t.push(' PUBLIC "', f), m && "." != m && t.push('" "', m), t.push('">');
               else if (m && "." != m) t.push(' SYSTEM "', m, '">');
               else {
                   var g = e.internalSubset;
                   g && t.push(" [", g, "]"), t.push(">");
               }
               return;
           case os:
               return t.push("<?", e.target, " ", e.data, "?>");
           case as:
               return t.push("&", e.nodeName, ";");
           default:
               t.push("??", e.nodeName);
       }
   }
   function Qs(e, t, i) {
       e[t] = i;
   }
   (ys.prototype = Error.prototype),
       Qa(ps, ys),
       (_s.prototype = {
           length: 0,
           item: function (e) {
               return this[e] || null;
           },
           toString: function (e, t) {
               for (var i = [], n = 0; n < this.length; n++) $s(this[n], i, e, t);
               return i.join("");
           },
       }),
       (bs.prototype.item = function (e) {
           return Ts(this), this[e];
       }),
       Ja(bs, _s),
       (Ss.prototype = {
           length: 0,
           item: _s.prototype.item,
           getNamedItem: function (e) {
               for (var t = this.length; t--; ) {
                   var i = this[t];
                   if (i.nodeName == e) return i;
               }
           },
           setNamedItem: function (e) {
               var t = e.ownerElement;
               if (t && t != this._ownerElement) throw new ys(vs);
               var i = this.getNamedItem(e.nodeName);
               return Cs(this._ownerElement, this, e, i), i;
           },
           setNamedItemNS: function (e) {
               var t,
                   i = e.ownerElement;
               if (i && i != this._ownerElement) throw new ys(vs);
               return (t = this.getNamedItemNS(e.namespaceURI, e.localName)), Cs(this._ownerElement, this, e, t), t;
           },
           removeNamedItem: function (e) {
               var t = this.getNamedItem(e);
               return Es(this._ownerElement, this, t), t;
           },
           removeNamedItemNS: function (e, t) {
               var i = this.getNamedItemNS(e, t);
               return Es(this._ownerElement, this, i), i;
           },
           getNamedItemNS: function (e, t) {
               for (var i = this.length; i--; ) {
                   var n = this[i];
                   if (n.localName == t && n.namespaceURI == e) return n;
               }
               return null;
           },
       }),
       (ws.prototype = {
           hasFeature: function (e, t) {
               var i = this._features[e.toLowerCase()];
               return !(!i || (t && !(t in i)));
           },
           createDocument: function (e, t, i) {
               var n = new Ps();
               if (((n.implementation = this), (n.childNodes = new _s()), (n.doctype = i) && n.appendChild(i), t)) {
                   var r = n.createElementNS(e, t);
                   n.appendChild(r);
               }
               return n;
           },
           createDocumentType: function (e, t, i) {
               var n = new Vs();
               return (n.name = e), (n.nodeName = e), (n.publicId = t), (n.systemId = i), n;
           },
       }),
       (Is.prototype = {
           firstChild: null,
           lastChild: null,
           previousSibling: null,
           nextSibling: null,
           attributes: null,
           parentNode: null,
           childNodes: null,
           ownerDocument: null,
           nodeValue: null,
           namespaceURI: null,
           prefix: null,
           localName: null,
           insertBefore: function (e, t) {
               return Ms(this, e, t);
           },
           replaceChild: function (e, t) {
               this.insertBefore(e, t), t && this.removeChild(t);
           },
           removeChild: function (e) {
               return Ds(this, e);
           },
           appendChild: function (e) {
               return this.insertBefore(e, null);
           },
           hasChildNodes: function () {
               return null != this.firstChild;
           },
           cloneNode: function (e) {
               return (function e(t, i, n) {
                   var r = new i.constructor();
                   for (var a in i) {
                       var s = i[a];
                       "object" != typeof s && s != r[a] && (r[a] = s);
                   }
                   i.childNodes && (r.childNodes = new _s());
                   r.ownerDocument = t;
                   switch (r.nodeType) {
                       case ts:
                           var o = i.attributes,
                               u = (r.attributes = new Ss()),
                               l = o.length;
                           u._ownerElement = r;
                           for (var c = 0; c < l; c++) r.setAttributeNode(e(t, o.item(c), !0));
                           break;
                       case is:
                           n = !0;
                   }
                   if (n) for (var d = i.firstChild; d; ) r.appendChild(e(t, d, n)), (d = d.nextSibling);
                   return r;
               })(this.ownerDocument || this, this, e);
           },
           normalize: function () {
               for (var e = this.firstChild; e; ) {
                   var t = e.nextSibling;
                   t && t.nodeType == ns && e.nodeType == ns ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), (e = t));
               }
           },
           isSupported: function (e, t) {
               return this.ownerDocument.implementation.hasFeature(e, t);
           },
           hasAttributes: function () {
               return 0 < this.attributes.length;
           },
           lookupPrefix: function (e) {
               for (var t = this; t; ) {
                   var i = t._nsMap;
                   if (i) for (var n in i) if (i[n] == e) return n;
                   t = t.nodeType == is ? t.ownerDocument : t.parentNode;
               }
               return null;
           },
           lookupNamespaceURI: function (e) {
               for (var t = this; t; ) {
                   var i = t._nsMap;
                   if (i && e in i) return i[e];
                   t = t.nodeType == is ? t.ownerDocument : t.parentNode;
               }
               return null;
           },
           isDefaultNamespace: function (e) {
               return null == this.lookupPrefix(e);
           },
       }),
       Qa(es, Is),
       Qa(es, Is.prototype),
       (Ps.prototype = {
           nodeName: "#document",
           nodeType: ls,
           doctype: null,
           documentElement: null,
           _inc: 1,
           insertBefore: function (e, t) {
               if (e.nodeType != ds) return null == this.documentElement && e.nodeType == ts && (this.documentElement = e), Ms(this, e, t), (e.ownerDocument = this), e;
               for (var i = e.firstChild; i; ) {
                   var n = i.nextSibling;
                   this.insertBefore(i, t), (i = n);
               }
               return e;
           },
           removeChild: function (e) {
               return this.documentElement == e && (this.documentElement = null), Ds(this, e);
           },
           importNode: function (e, t) {
               return (function e(t, i, n) {
                   var r;
                   switch (i.nodeType) {
                       case ts:
                           (r = i.cloneNode(!1)).ownerDocument = t;
                       case ds:
                           break;
                       case is:
                           n = !0;
                   }
                   r = r || i.cloneNode(!1);
                   r.ownerDocument = t;
                   r.parentNode = null;
                   if (n) for (var a = i.firstChild; a; ) r.appendChild(e(t, a, n)), (a = a.nextSibling);
                   return r;
               })(this, e, t);
           },
           getElementById: function (t) {
               var i = null;
               return (
                   xs(this.documentElement, function (e) {
                       if (e.nodeType == ts && e.getAttribute("id") == t) return (i = e), !0;
                   }),
                   i
               );
           },
           createElement: function (e) {
               var t = new Rs();
               return (t.ownerDocument = this), (t.nodeName = e), (t.tagName = e), (t.childNodes = new _s()), ((t.attributes = new Ss())._ownerElement = t);
           },
           createDocumentFragment: function () {
               var e = new zs();
               return (e.ownerDocument = this), (e.childNodes = new _s()), e;
           },
           createTextNode: function (e) {
               var t = new Fs();
               return (t.ownerDocument = this), t.appendData(e), t;
           },
           createComment: function (e) {
               var t = new Bs();
               return (t.ownerDocument = this), t.appendData(e), t;
           },
           createCDATASection: function (e) {
               var t = new js();
               return (t.ownerDocument = this), t.appendData(e), t;
           },
           createProcessingInstruction: function (e, t) {
               var i = new Gs();
               return (i.ownerDocument = this), (i.tagName = i.target = e), (i.nodeValue = i.data = t), i;
           },
           createAttribute: function (e) {
               var t = new Ns();
               return (t.ownerDocument = this), (t.name = e), (t.nodeName = e), (t.localName = e), (t.specified = !0), t;
           },
           createEntityReference: function (e) {
               var t = new Ws();
               return (t.ownerDocument = this), (t.nodeName = e), t;
           },
           createElementNS: function (e, t) {
               var i = new Rs(),
                   n = t.split(":"),
                   r = (i.attributes = new Ss());
               return (i.childNodes = new _s()), (i.ownerDocument = this), (i.nodeName = t), (i.tagName = t), (i.namespaceURI = e), 2 == n.length ? ((i.prefix = n[0]), (i.localName = n[1])) : (i.localName = t), (r._ownerElement = i);
           },
           createAttributeNS: function (e, t) {
               var i = new Ns(),
                   n = t.split(":");
               return (i.ownerDocument = this), (i.nodeName = t), (i.name = t), (i.namespaceURI = e), (i.specified = !0), 2 == n.length ? ((i.prefix = n[0]), (i.localName = n[1])) : (i.localName = t), i;
           },
       }),
       Ja(Ps, Is),
       (Ps.prototype.getElementsByTagName = (Rs.prototype = {
           nodeType: ts,
           hasAttribute: function (e) {
               return null != this.getAttributeNode(e);
           },
           getAttribute: function (e) {
               var t = this.getAttributeNode(e);
               return (t && t.value) || "";
           },
           getAttributeNode: function (e) {
               return this.attributes.getNamedItem(e);
           },
           setAttribute: function (e, t) {
               var i = this.ownerDocument.createAttribute(e);
               (i.value = i.nodeValue = "" + t), this.setAttributeNode(i);
           },
           removeAttribute: function (e) {
               var t = this.getAttributeNode(e);
               t && this.removeAttributeNode(t);
           },
           appendChild: function (e) {
               return e.nodeType === ds
                   ? this.insertBefore(e, null)
                   : (function (e, t) {
                         var i = t.parentNode;
                         if (i) {
                             var n = e.lastChild;
                             i.removeChild(t);
                             n = e.lastChild;
                         }
                         return (n = e.lastChild), (t.parentNode = e), (t.previousSibling = n), (t.nextSibling = null), n ? (n.nextSibling = t) : (e.firstChild = t), (e.lastChild = t), Os(e.ownerDocument, e, t), t;
                     })(this, e);
           },
           setAttributeNode: function (e) {
               return this.attributes.setNamedItem(e);
           },
           setAttributeNodeNS: function (e) {
               return this.attributes.setNamedItemNS(e);
           },
           removeAttributeNode: function (e) {
               return this.attributes.removeNamedItem(e.nodeName);
           },
           removeAttributeNS: function (e, t) {
               var i = this.getAttributeNodeNS(e, t);
               i && this.removeAttributeNode(i);
           },
           hasAttributeNS: function (e, t) {
               return null != this.getAttributeNodeNS(e, t);
           },
           getAttributeNS: function (e, t) {
               var i = this.getAttributeNodeNS(e, t);
               return (i && i.value) || "";
           },
           setAttributeNS: function (e, t, i) {
               var n = this.ownerDocument.createAttributeNS(e, t);
               (n.value = n.nodeValue = "" + i), this.setAttributeNode(n);
           },
           getAttributeNodeNS: function (e, t) {
               return this.attributes.getNamedItemNS(e, t);
           },
           getElementsByTagName: function (n) {
               return new bs(this, function (t) {
                   var i = [];
                   return (
                       xs(t, function (e) {
                           e === t || e.nodeType != ts || ("*" !== n && e.tagName != n) || i.push(e);
                       }),
                       i
                   );
               });
           },
           getElementsByTagNameNS: function (n, r) {
               return new bs(this, function (t) {
                   var i = [];
                   return (
                       xs(t, function (e) {
                           e === t || e.nodeType !== ts || ("*" !== n && e.namespaceURI !== n) || ("*" !== r && e.localName != r) || i.push(e);
                       }),
                       i
                   );
               });
           },
       }).getElementsByTagName),
       (Ps.prototype.getElementsByTagNameNS = Rs.prototype.getElementsByTagNameNS),
       Ja(Rs, Is),
       (Ns.prototype.nodeType = is),
       Ja(Ns, Is),
       (Us.prototype = {
           data: "",
           substringData: function (e, t) {
               return this.data.substring(e, e + t);
           },
           appendData: function (e) {
               (e = this.data + e), (this.nodeValue = this.data = e), (this.length = e.length);
           },
           insertData: function (e, t) {
               this.replaceData(e, 0, t);
           },
           appendChild: function (e) {
               throw new Error(fs[ms]);
           },
           deleteData: function (e, t) {
               this.replaceData(e, t, "");
           },
           replaceData: function (e, t, i) {
               (i = this.data.substring(0, e) + i + this.data.substring(e + t)), (this.nodeValue = this.data = i), (this.length = i.length);
           },
       }),
       Ja(Us, Is),
       (Fs.prototype = {
           nodeName: "#text",
           nodeType: ns,
           splitText: function (e) {
               var t = this.data,
                   i = t.substring(e);
               (t = t.substring(0, e)), (this.data = this.nodeValue = t), (this.length = t.length);
               var n = this.ownerDocument.createTextNode(i);
               return this.parentNode && this.parentNode.insertBefore(n, this.nextSibling), n;
           },
       }),
       Ja(Fs, Us),
       (Bs.prototype = { nodeName: "#comment", nodeType: us }),
       Ja(Bs, Us),
       (js.prototype = { nodeName: "#cdata-section", nodeType: rs }),
       Ja(js, Us),
       (Vs.prototype.nodeType = cs),
       Ja(Vs, Is),
       (qs.prototype.nodeType = hs),
       Ja(qs, Is),
       (Hs.prototype.nodeType = ss),
       Ja(Hs, Is),
       (Ws.prototype.nodeType = as),
       Ja(Ws, Is),
       (zs.prototype.nodeName = "#document-fragment"),
       (zs.prototype.nodeType = ds),
       Ja(zs, Is),
       (Gs.prototype.nodeType = os),
       Ja(Gs, Is),
       (Xs.prototype.serializeToString = function (e, t, i) {
           return Ks.call(e, t, i);
       }),
       (Is.prototype.toString = Ks);
   try {
       if (Object.defineProperty) {
           Object.defineProperty(bs.prototype, "length", {
               get: function () {
                   return Ts(this), this.$$length;
               },
           }),
               Object.defineProperty(Is.prototype, "textContent", {
                   get: function () {
                       return (function e(t) {
                           switch (t.nodeType) {
                               case ts:
                               case ds:
                                   var i = [];
                                   for (t = t.firstChild; t; ) 7 !== t.nodeType && 8 !== t.nodeType && i.push(e(t)), (t = t.nextSibling);
                                   return i.join("");
                               default:
                                   return t.nodeValue;
                           }
                       })(this);
                   },
                   set: function (e) {
                       switch (this.nodeType) {
                           case ts:
                           case ds:
                               for (; this.firstChild; ) this.removeChild(this.firstChild);
                               (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                               break;
                           default:
                               (this.data = e), (this.value = e), (this.nodeValue = e);
                       }
                   },
               }),
               (Qs = function (e, t, i) {
                   e["$$" + t] = i;
               });
       }
   } catch (e) {}
   function Js(e) {
       return !!e && "object" == typeof e;
   }
   function Zs() {
       for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
       return t.reduce(function (t, i) {
           return (
               Object.keys(i).forEach(function (e) {
                   Array.isArray(t[e]) && Array.isArray(i[e]) ? (t[e] = t[e].concat(i[e])) : Js(t[e]) && Js(i[e]) ? (t[e] = Zs(t[e], i[e])) : (t[e] = i[e]);
               }),
               t
           );
       }, {});
   }
   function eo(e) {
       return e.reduce(function (e, t) {
           return e.concat(t);
       }, []);
   }
   function to(e) {
       if (!e.length) return [];
       for (var t = [], i = 0; i < e.length; i++) t.push(e[i]);
       return t;
   }
   function io(e) {
       var t = e.baseUrl,
           i = void 0 === t ? "" : t,
           n = e.source,
           r = void 0 === n ? "" : n,
           a = e.range,
           s = void 0 === a ? "" : a,
           o = e.indexRange,
           u = void 0 === o ? "" : o,
           l = { uri: r, resolvedUri: va(i || "", r) };
       if (s || u) {
           var c = (s || u).split("-"),
               d = parseInt(c[0], 10),
               h = parseInt(c[1], 10);
           l.byterange = { length: h - d + 1, offset: d };
       }
       return l;
   }
   function no(e) {
       var t = e.type,
           i = void 0 === t ? "static" : t,
           n = e.duration,
           r = e.timescale,
           a = void 0 === r ? 1 : r,
           s = e.sourceDuration,
           o = No[i](e),
           u = (function (e, t) {
               for (var i = [], n = e; n < t; n++) i.push(n);
               return i;
           })(o.start, o.end).map(
               (function (o) {
                   return function (e, t) {
                       var i = o.duration,
                           n = o.timescale,
                           r = void 0 === n ? 1 : n,
                           a = o.periodIndex,
                           s = o.startNumber;
                       return { number: (void 0 === s ? 1 : s) + e, duration: i / r, timeline: a, time: t * i };
                   };
               })(e)
           );
       if ("static" === i) {
           var l = u.length - 1;
           u[l].duration = s - (n / a) * l;
       }
       return u;
   }
   function ro(e) {
       var t = e.baseUrl,
           i = e.initialization,
           n = void 0 === i ? {} : i,
           r = e.sourceDuration,
           a = e.indexRange,
           s = void 0 === a ? "" : a,
           o = e.duration;
       if (!t) throw new Error(Do);
       var u = io({ baseUrl: t, source: n.sourceURL, range: n.range }),
           l = io({ baseUrl: t, source: t, indexRange: s });
       if (((l.map = u), o)) {
           var c = no(e);
           c.length && ((l.duration = c[0].duration), (l.timeline = c[0].timeline));
       } else r && ((l.duration = r), (l.timeline = 0));
       return (l.number = 0), [l];
   }
   function ao(e, t, i) {
       for (
           var n = e.sidx.map ? e.sidx.map : null,
               r = e.sidx.duration,
               a = e.timeline || 0,
               s = e.sidx.byterange,
               o = s.offset + s.length,
               u = t.timescale,
               l = t.references.filter(function (e) {
                   return 1 !== e.referenceType;
               }),
               c = [],
               d = o + t.firstOffset,
               h = 0;
           h < l.length;
           h++
       ) {
           var p = t.references[h],
               f = p.referencedSize,
               m = p.subsegmentDuration,
               g = ro({ baseUrl: i, timescale: u, timeline: a, periodIndex: a, duration: m, sourceDuration: r, indexRange: d + "-" + (d + f - 1) })[0];
           n && (g.map = n), c.push(g), (d += f);
       }
       return (e.segments = c), e;
   }
   function so(e) {
       return (function (t) {
           return Object.keys(t).map(function (e) {
               return t[e];
           });
       })(
           e.reduce(function (e, t) {
               var i,
                   n = t.attributes.id + (t.attributes.lang || "");
               e[n]
                   ? (t.segments[0] && (t.segments[0].discontinuity = !0), (i = e[n].segments).push.apply(i, t.segments), t.attributes.contentProtection && (e[n].attributes.contentProtection = t.attributes.contentProtection))
                   : (e[n] = t);
               return e;
           }, {})
       ).map(function (e) {
           return (
               (e.discontinuityStarts = (function (e, n) {
                   return e.reduce(function (e, t, i) {
                       return t[n] && e.push(i), e;
                   }, []);
               })(e.segments, "discontinuity")),
               e
           );
       });
   }
   function oo(e, t) {
       if ((void 0 === t && (t = {}), !Object.keys(t).length)) return e;
       for (var i in e) {
           var n = e[i];
           if (n.sidx) {
               var r = n.sidx.uri + "-" + ((s = n.sidx.byterange), void 0, (o = s.offset + s.length - 1), s.offset + "-" + o),
                   a = t[r] && t[r].sidx;
               n.sidx && a && ao(n, a, n.sidx.resolvedUri);
           }
       }
       var s, o;
       return e;
   }
   function uo(e) {
       var t,
           i = e.attributes,
           n = e.segments,
           r = e.sidx,
           a = {
               attributes: ((t = { NAME: i.id, AUDIO: "audio", SUBTITLES: "subs", RESOLUTION: { width: i.width, height: i.height }, CODECS: i.codecs, BANDWIDTH: i.bandwidth }), (t["PROGRAM-ID"] = 1), t),
               uri: "",
               endList: "static" === (i.type || "static"),
               timeline: i.periodIndex,
               resolvedUri: "",
               targetDuration: i.duration,
               segments: n,
               mediaSequence: n.length ? n[0].number : 1,
           };
       return i.contentProtection && (a.contentProtection = i.contentProtection), r && (a.sidx = r), a;
   }
   function lo(e, t, i) {
       var n;
       if ((void 0 === i && (i = {}), !e.length)) return {};
       var r = e[0].attributes,
           a = r.sourceDuration,
           s = r.type,
           o = void 0 === s ? "static" : s,
           u = r.suggestedPresentationDelay,
           l = r.minimumUpdatePeriod,
           c = so(
               e.filter(function (e) {
                   var t = e.attributes;
                   return "video/mp4" === t.mimeType || "video" === t.contentType;
               })
           ).map(uo),
           d = so(
               e.filter(function (e) {
                   var t = e.attributes;
                   return "audio/mp4" === t.mimeType || "audio" === t.contentType;
               })
           ),
           h = e.filter(function (e) {
               var t = e.attributes;
               return "text/vtt" === t.mimeType || "text" === t.contentType;
           }),
           p = { allowCache: !0, discontinuityStarts: [], segments: [], endList: !0, mediaGroups: ((n = { AUDIO: {}, VIDEO: {} }), (n["CLOSED-CAPTIONS"] = {}), (n.SUBTITLES = {}), n), uri: "", duration: a, playlists: oo(c, i) };
       return (
           0 <= l && (p.minimumUpdatePeriod = 1e3 * l),
           t && (p.locations = t),
           "dynamic" === o && (p.suggestedPresentationDelay = u),
           d.length &&
               (p.mediaGroups.AUDIO.audio = (function (e, s) {
                   var o;
                   void 0 === s && (s = {});
                   var t = e.reduce(function (e, t) {
                       var i = (t.attributes.role && t.attributes.role.value) || "",
                           n = t.attributes.lang || "",
                           r = "main";
                       if (n) {
                           var a = i ? " (" + i + ")" : "";
                           r = t.attributes.lang + a;
                       }
                       return (
                           (e[r] && e[r].playlists[0].attributes.BANDWIDTH > t.attributes.bandwidth) ||
                               ((e[r] = {
                                   language: n,
                                   autoselect: !0,
                                   default: "main" === i,
                                   playlists: oo(
                                       [
                                           (function (e) {
                                               var t,
                                                   i = e.attributes,
                                                   n = e.segments,
                                                   r = e.sidx,
                                                   a = {
                                                       attributes: ((t = { NAME: i.id, BANDWIDTH: i.bandwidth, CODECS: i.codecs }), (t["PROGRAM-ID"] = 1), t),
                                                       uri: "",
                                                       endList: "static" === (i.type || "static"),
                                                       timeline: i.periodIndex,
                                                       resolvedUri: "",
                                                       targetDuration: i.duration,
                                                       segments: n,
                                                       mediaSequence: n.length ? n[0].number : 1,
                                                   };
                                               return i.contentProtection && (a.contentProtection = i.contentProtection), r && (a.sidx = r), a;
                                           })(t),
                                       ],
                                       s
                                   ),
                                   uri: "",
                               }),
                               "undefined" == typeof o && "main" === i && ((o = t).default = !0)),
                           e
                       );
                   }, {});
                   o || (t[Object.keys(t)[0]].default = !0);
                   return t;
               })(d, i)),
           h.length &&
               (p.mediaGroups.SUBTITLES.subs = (function (e, n) {
                   return (
                       void 0 === n && (n = {}),
                       e.reduce(function (e, t) {
                           var i = t.attributes.lang || "text";
                           return (
                               e[i] ||
                                   (e[i] = {
                                       language: i,
                                       default: !1,
                                       autoselect: !1,
                                       playlists: oo(
                                           [
                                               (function (e) {
                                                   var t,
                                                       i = e.attributes,
                                                       n = e.segments;
                                                   "undefined" == typeof n && ((n = [{ uri: i.baseUrl, timeline: i.periodIndex, resolvedUri: i.baseUrl || "", duration: i.sourceDuration, number: 0 }]), (i.duration = i.sourceDuration));
                                                   var r = (((t = { NAME: i.id, BANDWIDTH: i.bandwidth })["PROGRAM-ID"] = 1), t);
                                                   return (
                                                       i.codecs && (r.CODECS = i.codecs),
                                                       {
                                                           attributes: r,
                                                           uri: "",
                                                           endList: "static" === (i.type || "static"),
                                                           timeline: i.periodIndex,
                                                           resolvedUri: i.baseUrl || "",
                                                           targetDuration: i.duration,
                                                           segments: n,
                                                           mediaSequence: n.length ? n[0].number : 1,
                                                       }
                                                   );
                                               })(t),
                                           ],
                                           n
                                       ),
                                       uri: "",
                                   }),
                               e
                           );
                       }, {})
                   );
               })(h, i)),
           p
       );
   }
   function co(e, t) {
       for (
           var i,
               n,
               r,
               a,
               s,
               o,
               u,
               l,
               c,
               d,
               h,
               p,
               f = e.type,
               m = void 0 === f ? "static" : f,
               g = e.minimumUpdatePeriod,
               v = void 0 === g ? 0 : g,
               y = e.media,
               _ = void 0 === y ? "" : y,
               b = e.sourceDuration,
               T = e.timescale,
               S = void 0 === T ? 1 : T,
               k = e.startNumber,
               C = void 0 === k ? 1 : k,
               E = e.periodIndex,
               w = [],
               I = -1,
               A = 0;
           A < t.length;
           A++
       ) {
           var x = t[A],
               P = x.d,
               L = x.r || 0,
               O = x.t || 0;
           I < 0 && (I = O), O && I < O && (I = O);
           var D = void 0;
           if (L < 0) {
               var M = A + 1;
               D =
                   M === t.length
                       ? "dynamic" === m && 0 < v && 0 < _.indexOf("$Number$")
                           ? ((n = I),
                             (r = P),
                             void 0,
                             (a = (i = e).NOW),
                             (s = i.clientOffset),
                             (o = i.availabilityStartTime),
                             (u = i.timescale),
                             (l = void 0 === u ? 1 : u),
                             (c = i.start),
                             (d = void 0 === c ? 0 : c),
                             (h = i.minimumUpdatePeriod),
                             (p = (a + s) / 1e3 + (void 0 === h ? 0 : h) - (o + d)),
                             Math.ceil((p * l - n) / r))
                           : (b * S - I) / P
                       : (t[M].t - I) / P;
           } else D = L + 1;
           for (var R = C + w.length + D, N = C + w.length; N < R; ) w.push({ number: N, duration: P / S, time: I, timeline: E }), (I += P), N++;
       }
       return w;
   }
   function ho(e, t) {
       return e.replace(
           Uo,
           (function (a) {
               return function (e, t, i, n) {
                   if ("$$" === e) return "$";
                   if ("undefined" == typeof a[t]) return e;
                   var r = "" + a[t];
                   return "RepresentationID" === t ? r : (n = i ? parseInt(n, 10) : 1) <= r.length ? r : new Array(n - r.length + 1).join("0") + r;
               };
           })(t)
       );
   }
   function po(i, e) {
       var n = { RepresentationID: i.id, Bandwidth: i.bandwidth || 0 },
           t = i.initialization,
           r = void 0 === t ? { sourceURL: "", range: "" } : t,
           a = io({ baseUrl: i.baseUrl, source: ho(r.sourceURL, n), range: r.range });
       return (function (e, t) {
           return e.duration || t ? (e.duration ? no(e) : co(e, t)) : [{ number: e.startNumber || 1, duration: e.sourceDuration, time: 0, timeline: e.periodIndex }];
       })(i, e).map(function (e) {
           (n.Number = e.number), (n.Time = e.time);
           var t = ho(i.media || "", n);
           return { uri: t, timeline: e.timeline, duration: e.duration, resolvedUri: va(i.baseUrl || "", t), map: a, number: e.number };
       });
   }
   function fo(t, e) {
       var i = t.duration,
           n = t.segmentUrls,
           r = void 0 === n ? [] : n;
       if ((!i && !e) || (i && e)) throw new Error(Mo);
       var a,
           s = r.map(function (e) {
               return (function (e, t) {
                   var i = e.baseUrl,
                       n = e.initialization,
                       r = void 0 === n ? {} : n,
                       a = io({ baseUrl: i, source: r.sourceURL, range: r.range }),
                       s = io({ baseUrl: i, source: t.media, range: t.mediaRange });
                   return (s.map = a), s;
               })(t, e);
           });
       return (
           i && (a = no(t)),
           e && (a = co(t, e)),
           a
               .map(function (e, t) {
                   if (s[t]) {
                       var i = s[t];
                       return (i.timeline = e.timeline), (i.duration = e.duration), (i.number = e.number), i;
                   }
               })
               .filter(function (e) {
                   return e;
               })
       );
   }
   function mo(e) {
       var t,
           i,
           n = e.attributes,
           r = e.segmentInfo;
       r.template ? ((i = po), (t = Zs(n, r.template))) : r.base ? ((i = ro), (t = Zs(n, r.base))) : r.list && ((i = fo), (t = Zs(n, r.list)));
       var a = { attributes: n };
       if (!i) return a;
       var s = i(t, r.timeline);
       if (t.duration) {
           var o = t,
               u = o.duration,
               l = o.timescale,
               c = void 0 === l ? 1 : l;
           t.duration = u / c;
       } else
           s.length
               ? (t.duration = s.reduce(function (e, t) {
                     return Math.max(e, Math.ceil(t.duration));
                 }, 0))
               : (t.duration = 0);
       return (a.attributes = t), (a.segments = s), r.base && t.indexRange && ((a.sidx = s[0]), (a.segments = [])), a;
   }
   function go(e, t) {
       return to(e.childNodes).filter(function (e) {
           return e.tagName === t;
       });
   }
   function vo(e) {
       return e.textContent.trim();
   }
   function yo(e) {
       var t = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e);
       if (!t) return 0;
       var i = t.slice(1),
           n = i[0],
           r = i[1],
           a = i[2],
           s = i[3],
           o = i[4],
           u = i[5];
       return 31536e3 * parseFloat(n || 0) + 2592e3 * parseFloat(r || 0) + 86400 * parseFloat(a || 0) + 3600 * parseFloat(s || 0) + 60 * parseFloat(o || 0) + parseFloat(u || 0);
   }
   function _o(e) {
       return e && e.attributes
           ? to(e.attributes).reduce(function (e, t) {
                 var i = Fo[t.name] || Fo.DEFAULT;
                 return (e[t.name] = i(t.value)), e;
             }, {})
           : {};
   }
   function bo(e, i) {
       return i.length
           ? eo(
                 e.map(function (t) {
                     return i.map(function (e) {
                         return va(t, vo(e));
                     });
                 })
             )
           : e;
   }
   function To(e) {
       var t = go(e, "SegmentTemplate")[0],
           i = go(e, "SegmentList")[0],
           n =
               i &&
               go(i, "SegmentURL").map(function (e) {
                   return Zs({ tag: "SegmentURL" }, _o(e));
               }),
           r = go(e, "SegmentBase")[0],
           a = i || t,
           s = a && go(a, "SegmentTimeline")[0],
           o = i || r || t,
           u = o && go(o, "Initialization")[0],
           l = t && _o(t);
       l && u ? (l.initialization = u && _o(u)) : l && l.initialization && (l.initialization = { sourceURL: l.initialization });
       var c = {
           template: l,
           timeline:
               s &&
               go(s, "S").map(function (e) {
                   return _o(e);
               }),
           list: i && Zs(_o(i), { segmentUrls: n, initialization: _o(u) }),
           base: r && Zs(_o(r), { initialization: _o(u) }),
       };
       return (
           Object.keys(c).forEach(function (e) {
               c[e] || delete c[e];
           }),
           c
       );
   }
   function So(c, d, h) {
       return function (e) {
           var t = _o(e),
               i = bo(d, go(e, "BaseURL")),
               n = go(e, "Role")[0],
               r = { role: _o(n) },
               a = Zs(c, t, r),
               s = (function (e) {
                   return e.reduce(function (e, t) {
                       var i = _o(t),
                           n = Bo[i.schemeIdUri];
                       if (n) {
                           e[n] = { attributes: i };
                           var r = go(t, "cenc:pssh")[0];
                           if (r) {
                               var a = vo(r),
                                   s = a && Sa(a);
                               e[n].pssh = s;
                           }
                       }
                       return e;
                   }, {});
               })(go(e, "ContentProtection"));
           Object.keys(s).length && (a = Zs(a, { contentProtection: s }));
           var o = To(e),
               u = go(e, "Representation"),
               l = Zs(h, o);
           return eo(
               u.map(
                   (function (a, s, o) {
                       return function (e) {
                           var t = go(e, "BaseURL"),
                               i = bo(s, t),
                               n = Zs(a, _o(e)),
                               r = To(e);
                           return i.map(function (e) {
                               return { segmentInfo: Zs(o, r), attributes: Zs(n, { baseUrl: e }) };
                           });
                       };
                   })(a, i, l)
               )
           );
       };
   }
   function ko(e, t) {
       void 0 === t && (t = {});
       var i = t,
           n = i.manifestUri,
           r = void 0 === n ? "" : n,
           a = i.NOW,
           s = void 0 === a ? Date.now() : a,
           o = i.clientOffset,
           u = void 0 === o ? 0 : o,
           l = go(e, "Period");
       if (!l.length) throw new Error(Po);
       var c = go(e, "Location"),
           d = _o(e),
           h = bo([r], go(e, "BaseURL"));
       return (
           (d.sourceDuration = d.mediaPresentationDuration || 0),
           (d.NOW = s),
           (d.clientOffset = u),
           c.length && (d.locations = c.map(vo)),
           {
               locations: d.locations,
               representationInfo: eo(
                   l.map(
                       (function (l, c) {
                           return function (e, t) {
                               var i = bo(c, go(e, "BaseURL")),
                                   n = _o(e),
                                   r = parseInt(n.id, 10),
                                   a = T.isNaN(r) ? t : r,
                                   s = Zs(l, { periodIndex: a }),
                                   o = go(e, "AdaptationSet"),
                                   u = To(e);
                               return eo(o.map(So(s, i, u)));
                           };
                       })(d, h)
                   )
               ),
           }
       );
   }
   function Co(e) {
       if ("" === e) throw new Error(Lo);
       var t = new xo().parseFromString(e, "application/xml"),
           i = t && "MPD" === t.documentElement.tagName ? t.documentElement : null;
       if (!i || (i && 0 < i.getElementsByTagName("parsererror").length)) throw new Error(Oo);
       return i;
   }
   function Eo(e, t) {
       void 0 === t && (t = {});
       var i = ko(Co(e), t),
           n = (function (e) {
               return e.map(mo);
           })(i.representationInfo);
       return lo(n, i.locations, t.sidxMapping);
   }
   function wo(e) {
       return (function (e) {
           var t = go(e, "UTCTiming")[0];
           if (!t) return null;
           var i = _o(t);
           switch (i.schemeIdUri) {
               case "urn:mpeg:dash:utc:http-head:2014":
               case "urn:mpeg:dash:utc:http-head:2012":
                   i.method = "HEAD";
                   break;
               case "urn:mpeg:dash:utc:http-xsdate:2014":
               case "urn:mpeg:dash:utc:http-iso:2014":
               case "urn:mpeg:dash:utc:http-xsdate:2012":
               case "urn:mpeg:dash:utc:http-iso:2012":
                   i.method = "GET";
                   break;
               case "urn:mpeg:dash:utc:direct:2014":
               case "urn:mpeg:dash:utc:direct:2012":
                   (i.method = "DIRECT"), (i.value = Date.parse(i.value));
                   break;
               case "urn:mpeg:dash:utc:http-ntp:2014":
               case "urn:mpeg:dash:utc:ntp:2014":
               case "urn:mpeg:dash:utc:sntp:2014":
               default:
                   throw new Error(Ro);
           }
           return i;
       })(Co(e));
   }
   var Io = { DOMImplementation: ws, XMLSerializer: Xs },
       Ao = i(function (e, t) {
           function i(e) {
               this.options = e || { locator: {} };
           }
           function l() {
               this.cdata = !1;
           }
           function c(e, t) {
               (t.lineNumber = e.lineNumber), (t.columnNumber = e.columnNumber);
           }
           function d(e) {
               if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
           }
           function r(e, t, i) {
               return "string" == typeof e ? e.substr(t, i) : e.length >= t + i || t ? new java.lang.String(e, t, i) + "" : e;
           }
           function h(e, t) {
               e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
           }
           (i.prototype.parseFromString = function (e, t) {
               var i = this.options,
                   n = new p(),
                   r = i.domBuilder || new l(),
                   a = i.errorHandler,
                   s = i.locator,
                   o = i.xmlns || {},
                   u = { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" };
               return (
                   s && r.setDocumentLocator(s),
                   (n.errorHandler = (function (n, e, r) {
                       if (!n) {
                           if (e instanceof l) return e;
                           n = e;
                       }
                       var a = {},
                           s = n instanceof Function;
                       function t(t) {
                           var i = n[t];
                           !i &&
                               s &&
                               (i =
                                   2 == n.length
                                       ? function (e) {
                                             n(t, e);
                                         }
                                       : n),
                               (a[t] =
                                   (i &&
                                       function (e) {
                                           i("[xmldom " + t + "]\t" + e + d(r));
                                       }) ||
                                   function () {});
                       }
                       return (r = r || {}), t("warning"), t("error"), t("fatalError"), a;
                   })(a, r, s)),
                   (n.domBuilder = i.domBuilder || r),
                   /\/x?html?$/.test(t) && ((u.nbsp = " "), (u.copy = "©"), (o[""] = "http://www.w3.org/1999/xhtml")),
                   (o.xml = o.xml || "http://www.w3.org/XML/1998/namespace"),
                   e ? n.parse(e, o, u) : n.errorHandler.error("invalid doc source"),
                   r.doc
               );
           }),
               (l.prototype = {
                   startDocument: function () {
                       (this.doc = new n().createDocument(null, null, null)), this.locator && (this.doc.documentURI = this.locator.systemId);
                   },
                   startElement: function (e, t, i, n) {
                       var r = this.doc,
                           a = r.createElementNS(e, i || t),
                           s = n.length;
                       h(this, a), (this.currentElement = a), this.locator && c(this.locator, a);
                       for (var o = 0; o < s; o++) {
                           e = n.getURI(o);
                           var u = n.getValue(o),
                               l = ((i = n.getQName(o)), r.createAttributeNS(e, i));
                           this.locator && c(n.getLocator(o), l), (l.value = l.nodeValue = u), a.setAttributeNode(l);
                       }
                   },
                   endElement: function (e, t, i) {
                       var n = this.currentElement;
                       n.tagName;
                       this.currentElement = n.parentNode;
                   },
                   startPrefixMapping: function (e, t) {},
                   endPrefixMapping: function (e) {},
                   processingInstruction: function (e, t) {
                       var i = this.doc.createProcessingInstruction(e, t);
                       this.locator && c(this.locator, i), h(this, i);
                   },
                   ignorableWhitespace: function (e, t, i) {},
                   characters: function (e, t, i) {
                       if ((e = r.apply(this, arguments))) {
                           if (this.cdata) var n = this.doc.createCDATASection(e);
                           else n = this.doc.createTextNode(e);
                           this.currentElement ? this.currentElement.appendChild(n) : /^\s*$/.test(e) && this.doc.appendChild(n), this.locator && c(this.locator, n);
                       }
                   },
                   skippedEntity: function (e) {},
                   endDocument: function () {
                       this.doc.normalize();
                   },
                   setDocumentLocator: function (e) {
                       (this.locator = e) && (e.lineNumber = 0);
                   },
                   comment: function (e, t, i) {
                       e = r.apply(this, arguments);
                       var n = this.doc.createComment(e);
                       this.locator && c(this.locator, n), h(this, n);
                   },
                   startCDATA: function () {
                       this.cdata = !0;
                   },
                   endCDATA: function () {
                       this.cdata = !1;
                   },
                   startDTD: function (e, t, i) {
                       var n = this.doc.implementation;
                       if (n && n.createDocumentType) {
                           var r = n.createDocumentType(e, t, i);
                           this.locator && c(this.locator, r), h(this, r);
                       }
                   },
                   warning: function (e) {},
                   error: function (e) {},
                   fatalError: function (e) {
                       throw e;
                   },
               }),
               "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (e) {
                   l.prototype[e] = function () {
                       return null;
                   };
               });
           var p = $a.XMLReader,
               n = (t.DOMImplementation = Io.DOMImplementation);
           (t.XMLSerializer = Io.XMLSerializer), (t.DOMParser = i);
       }),
       xo = (Ao.DOMImplementation, Ao.XMLSerializer, Ao.DOMParser),
       Po = "INVALID_NUMBER_OF_PERIOD",
       Lo = "DASH_EMPTY_MANIFEST",
       Oo = "DASH_INVALID_XML",
       Do = "NO_BASE_URL",
       Mo = "SEGMENT_TIME_UNSPECIFIED",
       Ro = "UNSUPPORTED_UTC_TIMING_SCHEME",
       No = {
           static: function (e) {
               var t = e.duration,
                   i = e.timescale,
                   n = void 0 === i ? 1 : i,
                   r = e.sourceDuration;
               return { start: 0, end: Math.ceil(r / (t / n)) };
           },
           dynamic: function (e) {
               var t = e.NOW,
                   i = e.clientOffset,
                   n = e.availabilityStartTime,
                   r = e.timescale,
                   a = void 0 === r ? 1 : r,
                   s = e.duration,
                   o = e.start,
                   u = void 0 === o ? 0 : o,
                   l = e.minimumUpdatePeriod,
                   c = void 0 === l ? 0 : l,
                   d = e.timeShiftBufferDepth,
                   h = void 0 === d ? 1 / 0 : d,
                   p = (t + i) / 1e3,
                   f = n + u,
                   m = p + c - f,
                   g = Math.ceil((m * a) / s),
                   v = Math.floor(((p - f - h) * a) / s),
                   y = Math.floor(((p - f) * a) / s);
               return { start: Math.max(0, v), end: Math.min(g, y) };
           },
       },
       Uo = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
       Fo = {
           mediaPresentationDuration: function (e) {
               return yo(e);
           },
           availabilityStartTime: function (e) {
               return (
                   (function (e) {
                       return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e) && (e += "Z"), Date.parse(e);
                   })(e) / 1e3
               );
           },
           minimumUpdatePeriod: function (e) {
               return yo(e);
           },
           suggestedPresentationDelay: function (e) {
               return yo(e);
           },
           type: function (e) {
               return e;
           },
           timeShiftBufferDepth: function (e) {
               return yo(e);
           },
           start: function (e) {
               return yo(e);
           },
           width: function (e) {
               return parseInt(e, 10);
           },
           height: function (e) {
               return parseInt(e, 10);
           },
           bandwidth: function (e) {
               return parseInt(e, 10);
           },
           startNumber: function (e) {
               return parseInt(e, 10);
           },
           timescale: function (e) {
               return parseInt(e, 10);
           },
           duration: function (e) {
               var t = parseInt(e, 10);
               return isNaN(t) ? yo(e) : t;
           },
           d: function (e) {
               return parseInt(e, 10);
           },
           t: function (e) {
               return parseInt(e, 10);
           },
           r: function (e) {
               return parseInt(e, 10);
           },
           DEFAULT: function (e) {
               return e;
           },
       },
       Bo = {
           "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
           "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
           "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
           "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime",
       },
       jo = function (e) {
           var t,
               i = new DataView(e.buffer, e.byteOffset, e.byteLength),
               n = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), references: [], referenceId: i.getUint32(4), timescale: i.getUint32(8), earliestPresentationTime: i.getUint32(12), firstOffset: i.getUint32(16) },
               r = i.getUint16(22);
           for (t = 24; r; t += 12, r--)
               n.references.push({
                   referenceType: (128 & e[t]) >>> 7,
                   referencedSize: 2147483647 & i.getUint32(t),
                   subsegmentDuration: i.getUint32(t + 4),
                   startsWithSap: !!(128 & e[t + 8]),
                   sapType: (112 & e[t + 8]) >>> 4,
                   sapDeltaTime: 268435455 & i.getUint32(t + 8),
               });
           return n;
       },
       Vo = i(function (e, t) {
           Object.defineProperty(t, "__esModule", { value: !0 });
           function n(e) {
               return e instanceof Uint8Array ? e : new Uint8Array((e && e.buffer) || e, (e && e.byteOffset) || 0, (e && e.byteLength) || 0);
           }
           function r(e) {
               if (!e) return "";
               e = Array.prototype.slice.call(e);
               var t = String.fromCharCode.apply(null, n(e));
               try {
                   return decodeURIComponent(escape(t));
               } catch (e) {}
               return t;
           }
           function i(e, t) {
               void 0 === t && (t = 0);
               var i = ((e = n(e))[t + 6] << 21) | (e[t + 7] << 14) | (e[t + 8] << 7) | e[t + 9];
               return (16 & e[t + 5]) >> 4 ? 20 + i : 10 + i;
           }
           function a(e, t) {
               return void 0 === t && (t = 0), (e = n(e)).length - t < 10 || "ID3" !== r(e.subarray(t, t + 3)) ? t : a(e, (t += i(e, t)));
           }
           var s = {
                   aac: function (e) {
                       var t = a(e);
                       return e.length >= t + 2 && 255 == (255 & e[t]) && 224 == (224 & e[t + 1]) && 16 == (22 & e[t + 1]);
                   },
                   mp3: function (e) {
                       var t = a(e);
                       return e.length >= t + 2 && 255 == (255 & e[t]) && 224 == (224 & e[t + 1]) && 2 == (6 & e[t + 1]);
                   },
                   webm: function (e) {
                       return 4 <= e.length && 26 == (255 & e[0]) && 69 == (255 & e[1]) && 223 == (255 & e[2]) && 163 == (255 & e[3]);
                   },
                   mp4: function (e) {
                       return 8 <= e.length && /^(f|s)typ$/.test(r(e.subarray(4, 8))) && !/^ftyp3g$/.test(r(e.subarray(4, 10)));
                   },
                   "3gp": function (e) {
                       return 10 <= e.length && /^ftyp3g$/.test(r(e.subarray(4, 10)));
                   },
                   ts: function (e) {
                       if (e.length < 189 && 1 <= e.length) return 71 === e[0];
                       for (var t = 0; t + 188 < e.length && t < 188; ) {
                           if (71 === e[t] && 71 === e[t + 188]) return !0;
                           t += 1;
                       }
                       return !1;
                   },
                   flac: function (e) {
                       return 4 <= e.length && /^fLaC$/.test(r(e.subarray(0, 4)));
                   },
                   ogg: function (e) {
                       return 4 <= e.length && /^OggS$/.test(r(e.subarray(0, 4)));
                   },
               },
               o = Object.keys(s)
                   .filter(function (e) {
                       return "ts" !== e;
                   })
                   .concat("ts");
           o.forEach(function (e) {
               var t = s[e];
               s[e] = function (e) {
                   return t(n(e));
               };
           });
           (t.detectContainerForBytes = function (e) {
               e = n(e);
               for (var t = 0; t < o.length; t++) {
                   var i = o[t];
                   if (s[i](e)) return i;
               }
               return "";
           }),
               (t.getId3Offset = a),
               (t.id3Size = i),
               (t.isLikely = s),
               (t.isLikelyFmp4MediaSegment = function (e) {
                   e = n(e);
                   for (var t = 0; t < e.length; ) {
                       var i = ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0;
                       if ("moof" === r(e.subarray(t + 4, t + 8))) return !0;
                       0 == i || i + t > e.length ? (t = e.length) : (t += i);
                   }
                   return !1;
               });
       });
   t(Vo);
   var qo = Vo.detectContainerForBytes,
       Ho = Vo.getId3Offset,
       Wo = (Vo.id3Size, Vo.isLikely, Vo.isLikelyFmp4MediaSegment),
       zo = i(function (e, t) {
           Object.defineProperty(t, "__esModule", { value: !0 });
           function s(e) {
               return e instanceof Uint8Array ? e : new Uint8Array((e && e.buffer) || e, (e && e.byteOffset) || 0, (e && e.byteLength) || 0);
           }
           (t.bytesToString = function (e) {
               if (!e) return "";
               e = Array.prototype.slice.call(e);
               var t = String.fromCharCode.apply(null, s(e));
               try {
                   return decodeURIComponent(escape(t));
               } catch (e) {}
               return t;
           }),
               (t.concatTypedArrays = function () {
                   for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                   var n = t.reduce(function (e, t) {
                           return (e += (t && (t.byteLength || t.length)) || 0);
                       }, 0),
                       r = new Uint8Array(n),
                       a = 0;
                   return (
                       t.forEach(function (e) {
                           (e = s(e)), r.set(e, a), (a += e.byteLength);
                       }),
                       r
                   );
               }),
               (t.isTypedArray = function (e) {
                   return ArrayBuffer.isView(e);
               }),
               (t.stringToBytes = function (e, t) {
                   void 0 === t && (t = !1);
                   return (
                       "string" != typeof e && e && "function" == typeof e.toString && (e = e.toString()),
                       "string" != typeof e
                           ? []
                           : (t || (e = unescape(encodeURIComponent(e))),
                             e.split("").map(function (e) {
                                 return 255 & e.charCodeAt(0);
                             }))
                   );
               }),
               (t.toUint8 = s);
       });
   t(zo);
   zo.bytesToString;
   function Go() {
       this.init = function () {
           var a = {};
           (this.on = function (e, t) {
               a[e] || (a[e] = []), (a[e] = a[e].concat(t));
           }),
               (this.off = function (e, t) {
                   var i;
                   return !!a[e] && ((i = a[e].indexOf(t)), (a[e] = a[e].slice()), a[e].splice(i, 1), -1 < i);
               }),
               (this.trigger = function (e) {
                   var t, i, n, r;
                   if ((t = a[e]))
                       if (2 === arguments.length) for (n = t.length, i = 0; i < n; ++i) t[i].call(this, arguments[1]);
                       else {
                           for (r = [], i = arguments.length, i = 1; i < arguments.length; ++i) r.push(arguments[i]);
                           for (n = t.length, i = 0; i < n; ++i) t[i].apply(this, r);
                       }
               }),
               (this.dispose = function () {
                   a = {};
               });
       };
   }
   var Xo = zo.concatTypedArrays,
       Ko = (zo.isTypedArray, zo.stringToBytes),
       Yo = zo.toUint8,
       $o = 27,
       Qo = 15,
       Jo = 21;
   (Go.prototype.pipe = function (t) {
       return (
           this.on("data", function (e) {
               t.push(e);
           }),
           this.on("done", function (e) {
               t.flush(e);
           }),
           this.on("partialdone", function (e) {
               t.partialFlush(e);
           }),
           this.on("endedtimeline", function (e) {
               t.endTimeline(e);
           }),
           this.on("reset", function (e) {
               t.reset(e);
           }),
           t
       );
   }),
       (Go.prototype.push = function (e) {
           this.trigger("data", e);
       }),
       (Go.prototype.flush = function (e) {
           this.trigger("done", e);
       }),
       (Go.prototype.partialFlush = function (e) {
           this.trigger("partialdone", e);
       }),
       (Go.prototype.endTimeline = function (e) {
           this.trigger("endedtimeline", e);
       }),
       (Go.prototype.reset = function (e) {
           this.trigger("reset", e);
       });
   function Zo(e, t) {
       var i = 1;
       for (t < e && (i = -1); 4294967296 < Math.abs(t - e); ) e += 8589934592 * i;
       return e;
   }
   new Go();
   function eu(e) {
       var t = 31 & e[1];
       return (t <<= 8), (t |= e[2]);
   }
   function tu(e) {
       return !!(64 & e[1]);
   }
   function iu(e) {
       var t = 0;
       return 1 < (48 & e[3]) >>> 4 && (t += e[4] + 1), t;
   }
   function nu(e) {
       switch (e) {
           case 5:
               return "slice_layer_without_partitioning_rbsp_idr";
           case 6:
               return "sei_rbsp";
           case 7:
               return "seq_parameter_set_rbsp";
           case 8:
               return "pic_parameter_set_rbsp";
           case 9:
               return "access_unit_delimiter_rbsp";
           default:
               return null;
       }
   }
   function ru(e, t) {
       var i = (e[t + 6] << 21) | (e[t + 7] << 14) | (e[t + 8] << 7) | e[t + 9];
       return (i = 0 <= i ? i : 0), (16 & e[t + 5]) >> 4 ? i + 20 : i + 10;
   }
   function au(e) {
       return (e[0] << 21) | (e[1] << 14) | (e[2] << 7) | e[3];
   }
   var su,
       ou,
       uu,
       lu,
       cu = {
           parseType: function (e, t) {
               var i = eu(e);
               return 0 === i ? "pat" : i === t ? "pmt" : t ? "pes" : null;
           },
           parsePat: function (e) {
               var t = tu(e),
                   i = 4 + iu(e);
               return t && (i += e[i] + 1), ((31 & e[i + 10]) << 8) | e[i + 11];
           },
           parsePmt: function (e) {
               var t = {},
                   i = tu(e),
                   n = 4 + iu(e);
               if ((i && (n += e[n] + 1), 1 & e[n + 5])) {
                   var r;
                   r = 3 + (((15 & e[n + 1]) << 8) | e[n + 2]) - 4;
                   for (var a = 12 + (((15 & e[n + 10]) << 8) | e[n + 11]); a < r; ) {
                       var s = n + a;
                       (t[((31 & e[s + 1]) << 8) | e[s + 2]] = e[s]), (a += 5 + (((15 & e[s + 3]) << 8) | e[s + 4]));
                   }
                   return t;
               }
           },
           parsePayloadUnitStartIndicator: tu,
           parsePesType: function (e, t) {
               switch (t[eu(e)]) {
                   case $o:
                       return "video";
                   case Qo:
                       return "audio";
                   case Jo:
                       return "timed-metadata";
                   default:
                       return null;
               }
           },
           parsePesTime: function (e) {
               if (!tu(e)) return null;
               var t = 4 + iu(e);
               if (t >= e.byteLength) return null;
               var i,
                   n = null;
               return (
                   192 & (i = e[t + 7]) &&
                       (((n = {}).pts = ((14 & e[t + 9]) << 27) | ((255 & e[t + 10]) << 20) | ((254 & e[t + 11]) << 12) | ((255 & e[t + 12]) << 5) | ((254 & e[t + 13]) >>> 3)),
                       (n.pts *= 4),
                       (n.pts += (6 & e[t + 13]) >>> 1),
                       (n.dts = n.pts),
                       64 & i && ((n.dts = ((14 & e[t + 14]) << 27) | ((255 & e[t + 15]) << 20) | ((254 & e[t + 16]) << 12) | ((255 & e[t + 17]) << 5) | ((254 & e[t + 18]) >>> 3)), (n.dts *= 4), (n.dts += (6 & e[t + 18]) >>> 1))),
                   n
               );
           },
           videoPacketContainsKeyFrame: function (e) {
               for (var t = 4 + iu(e), i = e.subarray(t), n = 0, r = 0, a = !1; r < i.byteLength - 3; r++)
                   if (1 === i[r + 2]) {
                       n = r + 5;
                       break;
                   }
               for (; n < i.byteLength; )
                   switch (i[n]) {
                       case 0:
                           if (0 !== i[n - 1]) {
                               n += 2;
                               break;
                           }
                           if (0 !== i[n - 2]) {
                               n++;
                               break;
                           }
                           for (r + 3 !== n - 2 && "slice_layer_without_partitioning_rbsp_idr" === nu(31 & i[r + 3]) && (a = !0); 1 !== i[++n] && n < i.length; );
                           (r = n - 2), (n += 3);
                           break;
                       case 1:
                           if (0 !== i[n - 1] || 0 !== i[n - 2]) {
                               n += 3;
                               break;
                           }
                           "slice_layer_without_partitioning_rbsp_idr" === nu(31 & i[r + 3]) && (a = !0), (r = n - 2), (n += 3);
                           break;
                       default:
                           n += 3;
                   }
               return (i = i.subarray(r)), (n -= r), (r = 0), i && 3 < i.byteLength && "slice_layer_without_partitioning_rbsp_idr" === nu(31 & i[r + 3]) && (a = !0), a;
           },
       },
       du = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
       hu = {
           isLikelyAacData: function (e) {
               var t = (function e(t, i) {
                   return t.length - i < 10 || t[i] !== "I".charCodeAt(0) || t[i + 1] !== "D".charCodeAt(0) || t[i + 2] !== "3".charCodeAt(0) ? i : e(t, (i += ru(t, i)));
               })(e, 0);
               return e.length >= t + 2 && 255 == (255 & e[t]) && 240 == (240 & e[t + 1]) && 16 == (22 & e[t + 1]);
           },
           parseId3TagSize: ru,
           parseAdtsSize: function (e, t) {
               var i = (224 & e[t + 5]) >> 5,
                   n = e[t + 4] << 3;
               return (6144 & e[t + 3]) | n | i;
           },
           parseType: function (e, t) {
               return e[t] === "I".charCodeAt(0) && e[t + 1] === "D".charCodeAt(0) && e[t + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & e[t] && 240 == (240 & e[t + 1]) ? "audio" : null;
           },
           parseSampleRate: function (e) {
               for (var t = 0; t + 5 < e.length; ) {
                   if (255 === e[t] && 240 == (246 & e[t + 1])) return du[(60 & e[t + 2]) >>> 2];
                   t++;
               }
               return null;
           },
           parseAacTimestamp: function (e) {
               var t, i, n;
               (t = 10), 64 & e[5] && ((t += 4), (t += au(e.subarray(10, 14))));
               do {
                   if ((i = au(e.subarray(t + 4, t + 8))) < 1) return null;
                   if ("PRIV" === String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3])) {
                       n = e.subarray(t + 10, t + i + 10);
                       for (var r = 0; r < n.byteLength; r++)
                           if (0 === n[r]) {
                               if (
                                   "com.apple.streaming.transportStreamTimestamp" !==
                                   unescape(
                                       (function (e, t, i) {
                                           var n,
                                               r = "";
                                           for (n = t; n < i; n++) r += "%" + ("00" + e[n].toString(16)).slice(-2);
                                           return r;
                                       })(n, 0, r)
                                   )
                               )
                                   break;
                               var a = n.subarray(r + 1),
                                   s = ((1 & a[3]) << 30) | (a[4] << 22) | (a[5] << 14) | (a[6] << 6) | (a[7] >>> 2);
                               return (s *= 4), (s += 3 & a[7]);
                           }
                   }
                   (t += 10), (t += i);
               } while (t < e.byteLength);
               return null;
           },
       },
       pu = 9e4,
       fu =
           ((su = function (e) {
               return 9e4 * e;
           }),
           (ou = function (e, t) {
               return e * t;
           }),
           (uu = function (e) {
               return e / 9e4;
           }),
           (lu = function (e, t) {
               return e / t;
           }),
           pu),
       mu = Zo,
       gu = {};
   (gu.ts = cu), (gu.aac = hu);
   function vu(e, t, i) {
       for (var n, r, a, s, o = 0, u = Cu, l = !1; u <= e.byteLength; )
           if (71 !== e[o] || (71 !== e[u] && u !== e.byteLength)) o++, u++;
           else {
               switch (((n = e.subarray(o, u)), gu.ts.parseType(n, t.pid))) {
                   case "pes":
                       (r = gu.ts.parsePesType(n, t.table)), (a = gu.ts.parsePayloadUnitStartIndicator(n)), "audio" === r && a && (s = gu.ts.parsePesTime(n)) && ((s.type = "audio"), i.audio.push(s), (l = !0));
               }
               if (l) break;
               (o += Cu), (u += Cu);
           }
       for (o = (u = e.byteLength) - Cu, l = !1; 0 <= o; )
           if (71 !== e[o] || (71 !== e[u] && u !== e.byteLength)) o--, u--;
           else {
               switch (((n = e.subarray(o, u)), gu.ts.parseType(n, t.pid))) {
                   case "pes":
                       (r = gu.ts.parsePesType(n, t.table)), (a = gu.ts.parsePayloadUnitStartIndicator(n)), "audio" === r && a && (s = gu.ts.parsePesTime(n)) && ((s.type = "audio"), i.audio.push(s), (l = !0));
               }
               if (l) break;
               (o -= Cu), (u -= Cu);
           }
   }
   function yu(e, t, i) {
       for (var n, r, a, s, o, u, l, c = 0, d = Cu, h = !1, p = { data: [], size: 0 }; d < e.byteLength; )
           if (71 !== e[c] || 71 !== e[d]) c++, d++;
           else {
               switch (((n = e.subarray(c, d)), gu.ts.parseType(n, t.pid))) {
                   case "pes":
                       if (
                           ((r = gu.ts.parsePesType(n, t.table)),
                           (a = gu.ts.parsePayloadUnitStartIndicator(n)),
                           "video" === r && (a && !h && (s = gu.ts.parsePesTime(n)) && ((s.type = "video"), i.video.push(s), (h = !0)), !i.firstKeyFrame))
                       ) {
                           if (a && 0 !== p.size) {
                               for (o = new Uint8Array(p.size), u = 0; p.data.length; ) (l = p.data.shift()), o.set(l, u), (u += l.byteLength);
                               if (gu.ts.videoPacketContainsKeyFrame(o)) {
                                   var f = gu.ts.parsePesTime(o);
                                   f && ((i.firstKeyFrame = f), (i.firstKeyFrame.type = "video"));
                               }
                               p.size = 0;
                           }
                           p.data.push(n), (p.size += n.byteLength);
                       }
               }
               if (h && i.firstKeyFrame) break;
               (c += Cu), (d += Cu);
           }
       for (c = (d = e.byteLength) - Cu, h = !1; 0 <= c; )
           if (71 !== e[c] || 71 !== e[d]) c--, d--;
           else {
               switch (((n = e.subarray(c, d)), gu.ts.parseType(n, t.pid))) {
                   case "pes":
                       (r = gu.ts.parsePesType(n, t.table)), (a = gu.ts.parsePayloadUnitStartIndicator(n)), "video" === r && a && (s = gu.ts.parsePesTime(n)) && ((s.type = "video"), i.video.push(s), (h = !0));
               }
               if (h) break;
               (c -= Cu), (d -= Cu);
           }
   }
   function _u(e) {
       var t = { pid: null, table: null },
           i = {};
       for (var n in ((function (e, t) {
           for (var i, n = 0, r = Cu; r < e.byteLength; )
               if (71 !== e[n] || 71 !== e[r]) n++, r++;
               else {
                   switch (((i = e.subarray(n, r)), gu.ts.parseType(i, t.pid))) {
                       case "pat":
                           t.pid || (t.pid = gu.ts.parsePat(i));
                           break;
                       case "pmt":
                           t.table || (t.table = gu.ts.parsePmt(i));
                   }
                   if (t.pid && t.table) return;
                   (n += Cu), (r += Cu);
               }
       })(e, t),
       t.table)) {
           if (t.table.hasOwnProperty(n))
               switch (t.table[n]) {
                   case $o:
                       (i.video = []), yu(e, t, i), 0 === i.video.length && delete i.video;
                       break;
                   case Qo:
                       (i.audio = []), vu(e, t, i), 0 === i.audio.length && delete i.audio;
               }
       }
       return i;
   }
   var bu,
       Tu,
       Su,
       ku = pu,
       Cu = 188,
       Eu = function (e, t) {
           var i;
           return (i = gu.aac.isLikelyAacData(e)
               ? (function (e) {
                     for (var t, i = !1, n = 0, r = null, a = null, s = 0, o = 0; 3 <= e.length - o; ) {
                         switch (gu.aac.parseType(e, o)) {
                             case "timed-metadata":
                                 if (e.length - o < 10) {
                                     i = !0;
                                     break;
                                 }
                                 if ((s = gu.aac.parseId3TagSize(e, o)) > e.length) {
                                     i = !0;
                                     break;
                                 }
                                 null === a && ((t = e.subarray(o, o + s)), (a = gu.aac.parseAacTimestamp(t))), (o += s);
                                 break;
                             case "audio":
                                 if (e.length - o < 7) {
                                     i = !0;
                                     break;
                                 }
                                 if ((s = gu.aac.parseAdtsSize(e, o)) > e.length) {
                                     i = !0;
                                     break;
                                 }
                                 null === r && ((t = e.subarray(o, o + s)), (r = gu.aac.parseSampleRate(t))), n++, (o += s);
                                 break;
                             default:
                                 o++;
                         }
                         if (i) return null;
                     }
                     if (null === r || null === a) return null;
                     var u = ku / r;
                     return {
                         audio: [
                             { type: "audio", dts: a, pts: a },
                             { type: "audio", dts: a + 1024 * n * u, pts: a + 1024 * n * u },
                         ],
                     };
                 })(e)
               : _u(e)) &&
               (i.audio || i.video)
               ? ((function (e, t) {
                     if (e.audio && e.audio.length) {
                         var i = t;
                         "undefined" == typeof i && (i = e.audio[0].dts),
                             e.audio.forEach(function (e) {
                                 (e.dts = mu(e.dts, i)), (e.pts = mu(e.pts, i)), (e.dtsTime = e.dts / ku), (e.ptsTime = e.pts / ku);
                             });
                     }
                     if (e.video && e.video.length) {
                         var n = t;
                         if (
                             ("undefined" == typeof n && (n = e.video[0].dts),
                             e.video.forEach(function (e) {
                                 (e.dts = mu(e.dts, n)), (e.pts = mu(e.pts, n)), (e.dtsTime = e.dts / ku), (e.ptsTime = e.pts / ku);
                             }),
                             e.firstKeyFrame)
                         ) {
                             var r = e.firstKeyFrame;
                             (r.dts = mu(r.dts, n)), (r.pts = mu(r.pts, n)), (r.dtsTime = r.dts / ku), (r.ptsTime = r.dts / ku);
                         }
                     }
                 })(i, t),
                 i)
               : null;
       },
       wu = function (e) {
           return e >>> 0;
       },
       Iu = function (e) {
           var t = "";
           return (t += String.fromCharCode(e[0])), (t += String.fromCharCode(e[1])), (t += String.fromCharCode(e[2])), (t += String.fromCharCode(e[3]));
       },
       Au = wu,
       xu = function e(t, i) {
           var n,
               r,
               a,
               s,
               o,
               u = [];
           if (!i.length) return null;
           for (n = 0; n < t.byteLength; )
               (r = Au((t[n] << 24) | (t[n + 1] << 16) | (t[n + 2] << 8) | t[n + 3])),
                   (a = Iu(t.subarray(n + 4, n + 8))),
                   (s = 1 < r ? n + r : t.byteLength),
                   a === i[0] && (1 === i.length ? u.push(t.subarray(n + 8, s)) : (o = e(t.subarray(n + 8, s), i.slice(1))).length && (u = u.concat(o))),
                   (n = s);
           return u;
       },
       Pu = function (e) {
           var t,
               i = new DataView(e.buffer, e.byteOffset, e.byteLength),
               n = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), trackId: i.getUint32(4) },
               r = 1 & n.flags[2],
               a = 2 & n.flags[2],
               s = 8 & n.flags[2],
               o = 16 & n.flags[2],
               u = 32 & n.flags[2],
               l = 65536 & n.flags[0],
               c = 131072 & n.flags[0];
           return (
               (t = 8),
               r && ((t += 4), (n.baseDataOffset = i.getUint32(12)), (t += 4)),
               a && ((n.sampleDescriptionIndex = i.getUint32(t)), (t += 4)),
               s && ((n.defaultSampleDuration = i.getUint32(t)), (t += 4)),
               o && ((n.defaultSampleSize = i.getUint32(t)), (t += 4)),
               u && (n.defaultSampleFlags = i.getUint32(t)),
               l && (n.durationIsEmpty = !0),
               !r && c && (n.baseDataOffsetIsMoof = !0),
               n
           );
       },
       Lu = function (e) {
           return {
               isLeading: (12 & e[0]) >>> 2,
               dependsOn: 3 & e[0],
               isDependedOn: (192 & e[1]) >>> 6,
               hasRedundancy: (48 & e[1]) >>> 4,
               paddingValue: (14 & e[1]) >>> 1,
               isNonSyncSample: 1 & e[1],
               degradationPriority: (e[2] << 8) | e[3],
           };
       },
       Ou = function (e) {
           var t,
               i = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), samples: [] },
               n = new DataView(e.buffer, e.byteOffset, e.byteLength),
               r = 1 & i.flags[2],
               a = 4 & i.flags[2],
               s = 1 & i.flags[1],
               o = 2 & i.flags[1],
               u = 4 & i.flags[1],
               l = 8 & i.flags[1],
               c = n.getUint32(4),
               d = 8;
           for (
               r && ((i.dataOffset = n.getInt32(d)), (d += 4)),
                   a &&
                       c &&
                       ((t = { flags: Lu(e.subarray(d, d + 4)) }),
                       (d += 4),
                       s && ((t.duration = n.getUint32(d)), (d += 4)),
                       o && ((t.size = n.getUint32(d)), (d += 4)),
                       l && (1 === i.version ? (t.compositionTimeOffset = n.getInt32(d)) : (t.compositionTimeOffset = n.getUint32(d)), (d += 4)),
                       i.samples.push(t),
                       c--);
               c--;

           )
               (t = {}),
                   s && ((t.duration = n.getUint32(d)), (d += 4)),
                   o && ((t.size = n.getUint32(d)), (d += 4)),
                   u && ((t.flags = Lu(e.subarray(d, d + 4))), (d += 4)),
                   l && (1 === i.version ? (t.compositionTimeOffset = n.getInt32(d)) : (t.compositionTimeOffset = n.getUint32(d)), (d += 4)),
                   i.samples.push(t);
           return i;
       },
       Du = wu,
       Mu = function (e) {
           var t = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), baseMediaDecodeTime: Du((e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7]) };
           return 1 === t.version && ((t.baseMediaDecodeTime *= Math.pow(2, 32)), (t.baseMediaDecodeTime += Du((e[8] << 24) | (e[9] << 16) | (e[10] << 8) | e[11]))), t;
       },
       Ru = wu,
       Nu = function (e) {
           return ("00" + e.toString(16)).slice(-2);
       };
   (bu = function (r, e) {
       var t, i, n;
       return (
           (t = xu(e, ["moof", "traf"])),
           (i = [].concat.apply(
               [],
               t.map(function (n) {
                   return xu(n, ["tfhd"]).map(function (e) {
                       var t, i;
                       return (
                           (t = Ru((e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7])),
                           (i = r[t] || 9e4),
                           (xu(n, ["tfdt"]).map(function (e) {
                               var t, i;
                               return (t = e[0]), (i = Ru((e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7])), 1 === t && ((i *= Math.pow(2, 32)), (i += Ru((e[8] << 24) | (e[9] << 16) | (e[10] << 8) | e[11]))), i;
                           })[0] || 1 / 0) / i
                       );
                   });
               })
           )),
           (n = Math.min.apply(null, i)),
           isFinite(n) ? n : 0
       );
   }),
       (Tu = function (e) {
           var t = xu(e, ["moov", "trak"]),
               h = [];
           return (
               t.forEach(function (e) {
                   var t,
                       i,
                       n = {},
                       r = xu(e, ["tkhd"])[0];
                   r && ((i = (t = new DataView(r.buffer, r.byteOffset, r.byteLength)).getUint8(0)), (n.id = 0 === i ? t.getUint32(12) : t.getUint32(20)));
                   var a = xu(e, ["mdia", "hdlr"])[0];
                   if (a) {
                       var s = Iu(a.subarray(8, 12));
                       n.type = "vide" === s ? "video" : "soun" === s ? "audio" : s;
                   }
                   var o = xu(e, ["mdia", "minf", "stbl", "stsd"])[0];
                   if (o) {
                       var u = o.subarray(8);
                       n.codec = Iu(u.subarray(4, 8));
                       var l,
                           c = xu(u, [n.codec])[0];
                       c &&
                           (/^[a-z]vc[1-9]$/i.test(n.codec)
                               ? ((l = c.subarray(78)), "avcC" === Iu(l.subarray(4, 8)) && 11 < l.length ? ((n.codec += "."), (n.codec += Nu(l[9])), (n.codec += Nu(l[10])), (n.codec += Nu(l[11]))) : (n.codec = "avc1.4d400d"))
                               : /^mp4[a,v]$/i.test(n.codec) &&
                                 ((l = c.subarray(28)),
                                 "esds" === Iu(l.subarray(4, 8)) && 20 < l.length && 0 !== l[19] ? ((n.codec += "." + Nu(l[19])), (n.codec += "." + Nu((l[20] >>> 2) & 63).replace(/^0/, ""))) : (n.codec = "mp4a.40.2")));
                   }
                   var d = xu(e, ["mdia", "mdhd"])[0];
                   d && (n.timescale = Su(d)), h.push(n);
               }),
               h
           );
       });
   var Uu = bu,
       Fu = Tu,
       Bu =
           ((Su = function (e) {
               var t = 0 === e[0] ? 12 : 20;
               return Ru((e[t] << 24) | (e[1 + t] << 16) | (e[2 + t] << 8) | e[3 + t]);
           }),
           i(function (e, t) {
               function i(e) {
                   return e && "object" == typeof e && "default" in e ? e : { default: e };
               }
               Object.defineProperty(t, "__esModule", { value: !0 });
               function r(e) {
                   return e
                       ? e.replace(/avc1\.(\d+)\.(\d+)/i, function (e, t, i) {
                             return "avc1." + ("00" + Number(t).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2);
                         })
                       : e;
               }
               function n(e) {
                   return e.map(r);
               }
               function a(e) {
                   void 0 === e && (e = "");
                   var t = e.split(","),
                       a = {};
                   return (
                       t.forEach(function (r) {
                           (r = r.trim()),
                               ["video", "audio"].forEach(function (e) {
                                   var t = l[e].exec(r.toLowerCase());
                                   if (t && !(t.length <= 1)) {
                                       var i = r.substring(0, t[1].length),
                                           n = r.replace(i, "");
                                       a[e] = { type: i, details: n };
                                   }
                               });
                       }),
                       a
                   );
               }
               function s(e) {
                   return void 0 === e && (e = ""), l.audio.test(e.trim().toLowerCase());
               }
               function o(e) {
                   if (e && "string" == typeof e) {
                       var t = e
                               .toLowerCase()
                               .split(",")
                               .map(function (e) {
                                   return r(e.trim());
                               }),
                           i = "video";
                       1 === t.length && s(t[0]) && (i = "audio");
                       var n = "mp4";
                       return (
                           t.every(function (e) {
                               return l.mp4.test(e);
                           })
                               ? (n = "mp4")
                               : t.every(function (e) {
                                     return l.webm.test(e);
                                 })
                               ? (n = "webm")
                               : t.every(function (e) {
                                     return l.ogg.test(e);
                                 }) && (n = "ogg"),
                           i + "/" + n + ';codecs="' + e + '"'
                       );
                   }
               }
               var u = i(T),
                   l = {
                       mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v)/,
                       webm: /^(vp0?[89]|av0?1|opus|vorbis)/,
                       ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/,
                       video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,
                       audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3)/,
                       muxerVideo: /^(avc0?1)/,
                       muxerAudio: /^(mp4a)/,
                   };
               (t.DEFAULT_AUDIO_CODEC = "mp4a.40.2"),
                   (t.DEFAULT_VIDEO_CODEC = "avc1.4d400d"),
                   (t.browserSupportsCodec = function (e) {
                       return void 0 === e && (e = ""), (u.default.MediaSource && u.default.MediaSource.isTypeSupported && u.default.MediaSource.isTypeSupported(o(e))) || !1;
                   }),
                   (t.codecsFromDefault = function (e, t) {
                       if (!e.mediaGroups.AUDIO || !t) return null;
                       var i = e.mediaGroups.AUDIO[t];
                       if (!i) return null;
                       for (var n in i) {
                           var r = i[n];
                           if (r.default && r.playlists) return a(r.playlists[0].attributes.CODECS);
                       }
                       return null;
                   }),
                   (t.getMimeForCodec = o),
                   (t.isAudioCodec = s),
                   (t.isVideoCodec = function (e) {
                       return void 0 === e && (e = ""), l.video.test(e.trim().toLowerCase());
                   }),
                   (t.mapLegacyAvcCodecs = function (e) {
                       return e.replace(/avc1\.(\d+)\.(\d+)/i, function (e) {
                           return n([e])[0];
                       });
                   }),
                   (t.muxerSupportsCodec = function (e) {
                       return (
                           void 0 === e && (e = ""),
                           e
                               .toLowerCase()
                               .split(",")
                               .every(function (e) {
                                   return (e = e.trim()), l.muxerVideo.test(e) || l.muxerAudio.test(e);
                               })
                       );
                   }),
                   (t.parseCodecs = a),
                   (t.translateLegacyCodec = r),
                   (t.translateLegacyCodecs = n);
           }));
   t(Bu);
   function ju(e, t, i) {
       return e && i && i.responseURL && t !== i.responseURL ? i.responseURL : t;
   }
   function Vu(e, t) {
       return e + "-" + t;
   }
   function qu(e) {
       var t = e.manifestString,
           i = e.customTagParsers,
           n = void 0 === i ? [] : i,
           r = e.customTagMappers,
           a = void 0 === r ? [] : r,
           s = new Ea();
       return (
           n.forEach(function (e) {
               return s.addParser(e);
           }),
           a.forEach(function (e) {
               return s.addTagMapper(e);
           }),
           s.push(t),
           s.end(),
           s.manifest
       );
   }
   function Hu(r, a) {
       ["AUDIO", "SUBTITLES"].forEach(function (e) {
           for (var t in r.mediaGroups[e])
               for (var i in r.mediaGroups[e][t]) {
                   var n = r.mediaGroups[e][t][i];
                   a(n, e, t, i);
               }
       });
   }
   function Wu(e) {
       var t = e.playlist,
           i = e.uri,
           n = e.id;
       (t.id = n), i && (t.uri = i), (t.attributes = t.attributes || {});
   }
   function zu(s, e) {
       s.uri = e;
       for (var t = 0; t < s.playlists.length; t++)
           if (!s.playlists[t].uri) {
               var i = "placeholder-uri-" + t;
               s.playlists[t].uri = i;
           }
       Hu(s, function (e, t, i, n) {
           if (e.playlists && e.playlists.length && !e.playlists[0].uri) {
               var r = "placeholder-uri-" + t + "-" + i + "-" + n,
                   a = Vu(0, r);
               (e.playlists[0].uri = r), (e.playlists[0].id = a), (s.playlists[a] = e.playlists[0]), (s.playlists[r] = e.playlists[0]);
           }
       }),
           (function (e) {
               for (var t = e.playlists.length; t--; ) {
                   var i = e.playlists[t];
                   Wu({ playlist: i, id: Vu(t, i.uri) }),
                       (i.resolvedUri = $l(e.uri, i.uri)),
                       (e.playlists[i.id] = i),
                       (e.playlists[i.uri] = i).attributes.BANDWIDTH || Ql.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.");
               }
           })(s),
           (function (t) {
               Hu(t, function (e) {
                   e.uri && (e.resolvedUri = $l(t.uri, e.uri));
               });
           })(s);
   }
   function Gu(e, t) {
       e.resolvedUri || (e.resolvedUri = $l(t, e.uri)), e.key && !e.key.resolvedUri && (e.key.resolvedUri = $l(t, e.key.uri)), e.map && !e.map.resolvedUri && (e.map.resolvedUri = $l(t, e.map.uri));
   }
   function Xu(e, t) {
       var i = Jl(e, {}),
           n = i.playlists[t.id];
       if (!n) return null;
       if (n.segments && t.segments && n.segments.length === t.segments.length && n.endList === t.endList && n.mediaSequence === t.mediaSequence) return null;
       var r = Jl(n, t);
       n.segments &&
           (r.segments = (function (e, t, i) {
               var n = t.slice();
               i = i || 0;
               for (var r = Math.min(e.length, t.length + i), a = i; a < r; a++) n[a - i] = Jl(e[a], n[a - i]);
               return n;
           })(n.segments, t.segments, t.mediaSequence - n.mediaSequence)),
           r.segments.forEach(function (e) {
               Gu(e, r.resolvedUri);
           });
       for (var a = 0; a < i.playlists.length; a++) i.playlists[a].id === t.id && (i.playlists[a] = r);
       return (i.playlists[t.id] = r), (i.playlists[t.uri] = r), i;
   }
   function Ku(e, t) {
       var i = e.segments[e.segments.length - 1];
       return t && i && i.duration ? 1e3 * i.duration : 500 * (e.targetDuration || 10);
   }
   function Yu(e, t) {
       var i,
           n = [];
       if (e && e.length) for (i = 0; i < e.length; i++) t(e.start(i), e.end(i)) && n.push([e.start(i), e.end(i)]);
       return da.createTimeRanges(n);
   }
   function $u(e, i) {
       return Yu(e, function (e, t) {
           return e - 0.1 <= i && i <= t + 0.1;
       });
   }
   function Qu(e, t) {
       return Yu(e, function (e) {
           return t <= e - ec;
       });
   }
   function Ju(e) {
       var t = [];
       if (!e || !e.length) return "";
       for (var i = 0; i < e.length; i++) t.push(e.start(i) + " => " + e.end(i));
       return t.join(", ");
   }
   function Zu(e) {
       for (var t = [], i = 0; i < e.length; i++) t.push({ start: e.start(i), end: e.end(i) });
       return t;
   }
   function el(e, t, i) {
       if (("undefined" == typeof t && (t = e.mediaSequence + e.segments.length), t < e.mediaSequence)) return 0;
       var n = (function (e, t) {
           var i = 0,
               n = t - e.mediaSequence,
               r = e.segments[n];
           if (r) {
               if ("undefined" != typeof r.start) return { result: r.start, precise: !0 };
               if ("undefined" != typeof r.end) return { result: r.end - r.duration, precise: !0 };
           }
           for (; n--; ) {
               if ("undefined" != typeof (r = e.segments[n]).end) return { result: i + r.end, precise: !0 };
               if (((i += r.duration), "undefined" != typeof r.start)) return { result: i + r.start, precise: !0 };
           }
           return { result: i, precise: !1 };
       })(e, t);
       if (n.precise) return n.result;
       var r = (function (e, t) {
           for (var i, n = 0, r = t - e.mediaSequence; r < e.segments.length; r++) {
               if ("undefined" != typeof (i = e.segments[r]).start) return { result: i.start - n, precise: !0 };
               if (((n += i.duration), "undefined" != typeof i.end)) return { result: i.end - n, precise: !0 };
           }
           return { result: -1, precise: !1 };
       })(e, t);
       return r.precise ? r.result : n.result + i;
   }
   function tl(e, t, i) {
       if (!e) return 0;
       if (("number" != typeof i && (i = 0), "undefined" == typeof t)) {
           if (e.totalDuration) return e.totalDuration;
           if (!e.endList) return T.Infinity;
       }
       return el(e, t, i);
   }
   function il(e, t, i) {
       var n = 0;
       if (i < t) {
           var r = [i, t];
           (t = r[0]), (i = r[1]);
       }
       if (t < 0) {
           for (var a = t; a < Math.min(0, i); a++) n += e.targetDuration;
           t = 0;
       }
       for (var s = t; s < i; s++) n += e.segments[s].duration;
       return n;
   }
   function nl(e, t) {
       if (!e.segments.length) return 0;
       var i = e.segments.length,
           n = e.segments[i - 1].duration || e.targetDuration,
           r = "number" == typeof t ? t : n + 2 * e.targetDuration;
       if (0 === r) return i;
       for (var a = 0; i-- && !(r <= (a += e.segments[i].duration)); );
       return Math.max(0, i);
   }
   function rl(e, t, i, n) {
       if (!e || !e.segments) return null;
       if (e.endList) return tl(e);
       if (null === t) return null;
       t = t || 0;
       var r = i ? nl(e, n) : e.segments.length;
       return el(e, e.mediaSequence + r, t);
   }
   function al(e) {
       return e.excludeUntil && e.excludeUntil > Date.now();
   }
   function sl(e) {
       return e.excludeUntil && e.excludeUntil === 1 / 0;
   }
   function ol(e) {
       var t = al(e);
       return !e.disabled && !t;
   }
   function ul(e, t) {
       return t.attributes && t.attributes[e];
   }
   function ll(e, t) {
       if (1 === e.playlists.length) return !0;
       var i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
       return (
           0 ===
           e.playlists.filter(function (e) {
               return !!ol(e) && (e.attributes.BANDWIDTH || 0) < i;
           }).length
       );
   }
   function cl(e, t, i, n) {
       var r = "arraybuffer" === e.responseType ? e.response : e.responseText;
       !t && r && ((e.responseTime = Date.now()), (e.roundTripTime = e.responseTime - e.requestTime), (e.bytesReceived = r.byteLength || r.length), e.bandwidth || (e.bandwidth = Math.floor((e.bytesReceived / e.roundTripTime) * 8 * 1e3))),
           i.headers && (e.responseHeaders = i.headers),
           t && "ETIMEDOUT" === t.code && (e.timedout = !0),
           t || e.aborted || 200 === i.statusCode || 206 === i.statusCode || 0 === i.statusCode || (t = new Error("XHR Failed with a response of: " + (e && (r || e.responseText)))),
           n(t, e);
   }
   function dl() {
       return function e(t, i) {
           t = rc({ timeout: 45e3 }, t);
           var n = e.beforeRequest || da.Vhs.xhr.beforeRequest;
           if (n && "function" == typeof n) {
               var r = n(t);
               r && (t = r);
           }
           var a = nc(t, function (e, t) {
                   return cl(a, e, t, i);
               }),
               s = a.abort;
           return (
               (a.abort = function () {
                   return (a.aborted = !0), s.apply(a, arguments);
               }),
               (a.uri = t.uri),
               (a.requestTime = Date.now()),
               a
           );
       };
   }
   function hl(e) {
       var t = {};
       return (
           e.byterange &&
               (t.Range = (function (e) {
                   var t = e.offset + e.length - 1;
                   return "bytes=" + e.offset + "-" + t;
               })(e.byterange)),
           t
       );
   }
   function pl(e, t) {
       var i = e.toString(16);
       return "00".substring(0, 2 - i.length) + i + (t % 2 ? " " : "");
   }
   function fl(e) {
       return 32 <= e && e < 126 ? String.fromCharCode(e) : ".";
   }
   function ml(i) {
       var n = {};
       return (
           Object.keys(i).forEach(function (e) {
               var t = i[e];
               ArrayBuffer.isView(t) ? (n[e] = { bytes: t.buffer, byteOffset: t.byteOffset, byteLength: t.byteLength }) : (n[e] = t);
           }),
           n
       );
   }
   function gl(e) {
       var t = e.byterange || { length: 1 / 0, offset: 0 };
       return [t.length, t.offset, e.resolvedUri].join(",");
   }
   function vl(e) {
       return e.resolvedUri;
   }
   function yl(e) {
       for (var t = Array.prototype.slice.call(e), i = "", n = 0; n < t.length / 16; n++)
           i +=
               t
                   .slice(16 * n, 16 * n + 16)
                   .map(pl)
                   .join("") +
               " " +
               t
                   .slice(16 * n, 16 * n + 16)
                   .map(fl)
                   .join("") +
               "\n";
       return i;
   }
   function _l(e) {
       var t = e.playlist,
           i = e.time,
           n = void 0 === i ? void 0 : i,
           r = e.callback;
       if (!r) throw new Error("getProgramTime: callback must be provided");
       if (!t || void 0 === n) return r({ message: "getProgramTime: playlist and time must be provided" });
       var a = (function (e, t) {
           if (!t || !t.segments || 0 === t.segments.length) return null;
           for (var i, n = 0, r = 0; r < t.segments.length && !(e <= (n = (i = t.segments[r]).videoTimingInfo ? i.videoTimingInfo.transmuxedPresentationEnd : n + i.duration)); r++);
           var a = t.segments[t.segments.length - 1];
           if (a.videoTimingInfo && a.videoTimingInfo.transmuxedPresentationEnd < e) return null;
           if (n < e) {
               if (e > n + 0.25 * a.duration) return null;
               i = a;
           }
           return { segment: i, estimatedStart: i.videoTimingInfo ? i.videoTimingInfo.transmuxedPresentationStart : n - i.duration, type: i.videoTimingInfo ? "accurate" : "estimate" };
       })(n, t);
       if (!a) return r({ message: "valid programTime was not found" });
       if ("estimate" === a.type) return r({ message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again", seekTime: a.estimatedStart });
       var s = { mediaSeconds: n },
           o = (function (e, t) {
               if (!t.dateTimeObject) return null;
               var i = t.videoTimingInfo.transmuxerPrependedSeconds,
                   n = e - (t.videoTimingInfo.transmuxedPresentationStart + i);
               return new Date(t.dateTimeObject.getTime() + 1e3 * n);
           })(n, a.segment);
       return o && (s.programDateTime = o.toISOString()), r(null, s);
   }
   function bl(e) {
       var t = e.programTime,
           i = e.playlist,
           n = e.retryCount,
           r = void 0 === n ? 2 : n,
           a = e.seekTo,
           s = e.pauseAfterSeek,
           o = void 0 === s || s,
           u = e.tech,
           l = e.callback;
       if (!l) throw new Error("seekToProgramTime: callback must be provided");
       if ("undefined" == typeof t || !i || !a) return l({ message: "seekToProgramTime: programTime, seekTo and playlist must be provided" });
       if (!i.endList && !u.hasStarted_) return l({ message: "player must be playing a live stream to start buffering" });
       if (
           !(function (e) {
               if (!e.segments || 0 === e.segments.length) return !1;
               for (var t = 0; t < e.segments.length; t++) {
                   if (!e.segments[t].dateTimeObject) return !1;
               }
               return !0;
           })(i)
       )
           return l({ message: "programDateTime tags must be provided in the manifest " + i.resolvedUri });
       var c = (function (e, t) {
           var i;
           try {
               i = new Date(e);
           } catch (e) {
               return null;
           }
           if (!t || !t.segments || 0 === t.segments.length) return null;
           var n = t.segments[0];
           if (i < n.dateTimeObject) return null;
           for (var r = 0; r < t.segments.length - 1; r++) {
               if (((n = t.segments[r]), i < t.segments[r + 1].dateTimeObject)) break;
           }
           var a = t.segments[t.segments.length - 1],
               s = a.dateTimeObject,
               o = a.videoTimingInfo
                   ? (function (e) {
                         return e.transmuxedPresentationEnd - e.transmuxedPresentationStart - e.transmuxerPrependedSeconds;
                     })(a.videoTimingInfo)
                   : a.duration + 0.25 * a.duration;
           return new Date(s.getTime() + 1e3 * o) < i
               ? null
               : (s < i && (n = a),
                 { segment: n, estimatedStart: n.videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationStart : ic.duration(t, t.mediaSequence + t.segments.indexOf(n)), type: n.videoTimingInfo ? "accurate" : "estimate" });
       })(t, i);
       if (!c) return l({ message: t + " was not found in the stream" });
       var d = c.segment,
           h = (function (e, t) {
               var i, n;
               try {
                   (i = new Date(e)), (n = new Date(t));
               } catch (e) {}
               var r = i.getTime();
               return (n.getTime() - r) / 1e3;
           })(d.dateTimeObject, t);
       if ("estimate" === c.type)
           return 0 === r
               ? l({ message: t + " is not buffered yet. Try again" })
               : (a(c.estimatedStart + h),
                 void u.one("seeked", function () {
                     bl({ programTime: t, playlist: i, retryCount: r - 1, seekTo: a, pauseAfterSeek: o, tech: u, callback: l });
                 }));
       var p = d.start + h;
       u.one("seeked", function () {
           return l(null, u.currentTime());
       }),
           o && u.pause(),
           a(p);
   }
   function Tl(e, t) {
       if (4 === e.readyState) return t();
   }
   function Sl(e) {
       var t = e.masterXml,
           i = e.srcUrl,
           n = e.clientOffset,
           r = e.sidxMapping,
           a = Eo(t, { manifestUri: i, clientOffset: n, sidxMapping: r });
       return zu(a, i), a;
   }
   function kl(e, t) {
       for (var s = !0, o = sc(e, { duration: t.duration, minimumUpdatePeriod: t.minimumUpdatePeriod }), i = 0; i < t.playlists.length; i++) {
           var n = Xu(o, t.playlists[i]);
           n && ((o = n), (s = !1));
       }
       return (
           Hu(t, function (e, t, i, n) {
               if (e.playlists && e.playlists.length) {
                   var r = e.playlists[0].id,
                       a = Xu(o, e.playlists[0]);
                   a && (((o = a).mediaGroups[t][i][n].playlists[0] = o.playlists[r]), (s = !1));
               }
           }),
           t.minimumUpdatePeriod !== e.minimumUpdatePeriod && (s = !1),
           s ? null : o
       );
   }
   function Cl(e) {
       var t = e.byterange.offset + e.byterange.length - 1;
       return e.uri + "-" + e.byterange.offset + "-" + t;
   }
   function El(e, t) {
       var i,
           n,
           r = {};
       for (var a in e) {
           var s = e[a].sidx;
           if (s) {
               var o = Cl(s);
               if (!t[o]) break;
               var u = t[o].sidxInfo;
               (i = u),
                   (n = s),
                   (Boolean(!i.map && !n.map) || Boolean(i.map && n.map && i.map.byterange.offset === n.map.byterange.offset && i.map.byterange.length === n.map.byterange.length)) &&
                       i.uri === n.uri &&
                       i.byterange.offset === n.byterange.offset &&
                       i.byterange.length === n.byterange.length &&
                       (r[o] = t[o]);
           }
       }
       return r;
   }
   function wl(o, e, u, l, t, c) {
       var d = { uri: ju(t.handleManifestRedirects, e.resolvedUri), byterange: e.byterange, playlist: u },
           h = da.mergeOptions(d, { responseType: "arraybuffer", headers: hl(d) });
       return (function (e, t, r) {
           function a(e, t, i, n) {
               return t.abort(), (u = !0), r(e, t, i, n);
           }
           function i(e, t) {
               if (!u) {
                   if (e) return a(e, t, "", o);
                   var i = t.responseText.substring((o && o.byteLength) || 0, t.responseText.length);
                   if (((o = Xo(o, Ko(i, !0))), (s = s || Ho(o)), o.length < 10 || (s && o.length < s + 2)))
                       return Tl(t, function () {
                           return a(e, t, "", o);
                       });
                   var n = qo(o);
                   return "ts" === n && o.length < 188
                       ? Tl(t, function () {
                             return a(e, t, "", o);
                         })
                       : !n && o.length < 376
                       ? Tl(t, function () {
                             return a(e, t, "", o);
                         })
                       : a(null, t, n, o);
               }
           }
           var s,
               o = [],
               u = !1,
               n = t(
                   {
                       uri: e,
                       beforeSend: function (t) {
                           t.overrideMimeType("text/plain; charset=x-user-defined"),
                               t.addEventListener("progress", function (e) {
                                   e.total, e.loaded;
                                   return cl(t, null, { statusCode: t.status }, i);
                               });
                       },
                   },
                   function (e, t) {
                       return cl(n, e, t, i);
                   }
               );
           return n;
       })(d.uri, l, function (e, t, i, n) {
           if (e) return c(e, t);
           if (!i || "mp4" !== i)
               return c({ status: t.status, message: "Unsupported " + (i || "unknown") + " container type for sidx segment at URL: " + d.uri, response: "", playlist: u, internal: !0, blacklistDuration: 1 / 0, code: 2 }, t);
           var r = d.byterange,
               a = r.offset,
               s = r.length;
           if (n.length >= s + a) return c(e, { response: n.subarray(a, a + s), status: t.status, uri: t.uri });
           o.request = l(h, c);
       });
   }
   function Il(e) {
       for (var t = new Uint8Array(new ArrayBuffer(e.length)), i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
       return t.buffer;
   }
   function Al(e) {
       var t = e.transmuxer,
           i = e.bytes,
           n = e.audioAppendStart,
           r = e.gopsToAlignWith,
           a = e.isPartial,
           s = e.remux,
           o = e.onData,
           u = e.onTrackInfo,
           l = e.onAudioTimingInfo,
           c = e.onVideoTimingInfo,
           d = e.onVideoSegmentTimingInfo,
           h = e.onId3,
           p = e.onCaptions,
           f = e.onDone,
           m = { isPartial: a, buffer: [] };
       if (
           ((t.onmessage = function (e) {
               Bl &&
                   ("data" === e.data.action &&
                       (function (e, t, i) {
                           var n = e.data.segment,
                               r = n.type,
                               a = n.initSegment,
                               s = n.captions,
                               o = n.captionStreams,
                               u = n.metadata,
                               l = n.videoFrameDtsTime,
                               c = n.videoFramePtsTime;
                           t.buffer.push({ captions: s, captionStreams: o, metadata: u });
                           var d = e.data.segment.boxes || { data: e.data.segment.data },
                               h = { type: r, data: new Uint8Array(d.data, d.data.byteOffset, d.data.byteLength), initSegment: new Uint8Array(a.data, a.byteOffset, a.byteLength) };
                           "undefined" != typeof l && (h.videoFrameDtsTime = l), "undefined" != typeof c && (h.videoFramePtsTime = c), i(h);
                       })(e, m, o),
                   "trackinfo" === e.data.action && u(e.data.trackInfo),
                   "gopInfo" === e.data.action &&
                       (function (e, t) {
                           t.gopInfo = e.data.gopInfo;
                       })(e, m),
                   "audioTimingInfo" === e.data.action && l(e.data.audioTimingInfo),
                   "videoTimingInfo" === e.data.action && c(e.data.videoTimingInfo),
                   "videoSegmentTimingInfo" === e.data.action && d(e.data.videoSegmentTimingInfo),
                   "id3Frame" === e.data.action && h([e.data.id3Frame], e.data.id3Frame.dispatchType),
                   "caption" === e.data.action && p(e.data.caption),
                   "transmuxed" === e.data.type &&
                       ((t.onmessage = null),
                       (function (e) {
                           var t = e.transmuxedData,
                               i = e.callback;
                           (t.buffer = []), i(t);
                       })({ transmuxedData: m, callback: f }),
                       cc()));
           }),
           n && t.postMessage({ action: "setAudioAppendStart", appendStart: n }),
           Array.isArray(r) && t.postMessage({ action: "alignGopsWith", gopsToAlignWith: r }),
           "undefined" != typeof s && t.postMessage({ action: "setRemux", remux: s }),
           i.byteLength)
       ) {
           var g = i instanceof ArrayBuffer ? i : i.buffer,
               v = i instanceof ArrayBuffer ? 0 : i.byteOffset;
           t.postMessage({ action: "push", data: g, byteOffset: v, byteLength: i.byteLength }, [g]);
       }
       t.postMessage({ action: a ? "partialFlush" : "flush" });
   }
   function xl(e, t) {
       e.postMessage({ action: t }), cc();
   }
   function Pl(e, t) {
       Bl ? lc.push(xl.bind(null, t, e)) : xl(t, (Bl = e));
   }
   function Ll(e) {
       Bl ? lc.push(e) : Al((Bl = e));
   }
   function Ol(e) {
       e.forEach(function (e) {
           e.abort();
       });
   }
   function Dl(e, t) {
       return t.timedout
           ? { status: t.status, message: "HLS request timed-out at URL: " + t.uri, code: mc, xhr: t }
           : t.aborted
           ? { status: t.status, message: "HLS request aborted at URL: " + t.uri, code: gc, xhr: t }
           : e
           ? { status: t.status, message: "HLS request errored at URL: " + t.uri, code: fc, xhr: t }
           : null;
   }
   function Ml(e) {
       var i = e.segment,
           t = e.bytes,
           n = e.isPartial,
           r = e.trackInfoFn,
           a = e.timingInfoFn,
           s = e.videoSegmentTimingInfoFn,
           o = e.id3Fn,
           u = e.captionsFn,
           l = e.dataFn,
           c = e.doneFn,
           d = (i.map && i.map.tracks) || {},
           h = Boolean(d.audio && d.video),
           p = a.bind(null, i, "audio", "start"),
           f = a.bind(null, i, "audio", "end"),
           m = a.bind(null, i, "video", "start"),
           g = a.bind(null, i, "video", "end");
       if (!n && !i.lastReachedChar) {
           var v = (function (e, t) {
               var i = Eu(e, t * fu);
               if (!i) return null;
               var n = { hasVideo: (i.video && 2 === i.video.length) || !1, hasAudio: (i.audio && 2 === i.audio.length) || !1 };
               return n.hasVideo && (n.videoStart = i.video[0].ptsTime), n.hasAudio && (n.audioStart = i.audio[0].ptsTime), n;
           })(t, i.baseStartTime);
           v && (r(i, { hasAudio: v.hasAudio, hasVideo: v.hasVideo, isMuxed: h }), (r = null), v.hasAudio && !h && p(v.audioStart), v.hasVideo && m(v.videoStart), (m = p = null));
       }
       Ll({
           bytes: t,
           transmuxer: i.transmuxer,
           audioAppendStart: i.audioAppendStart,
           gopsToAlignWith: i.gopsToAlignWith,
           isPartial: n,
           remux: h,
           onData: function (e) {
               (e.type = "combined" === e.type ? "video" : e.type), l(i, e);
           },
           onTrackInfo: function (e) {
               r && (h && (e.isMuxed = !0), r(i, e));
           },
           onAudioTimingInfo: function (e) {
               p && "undefined" != typeof e.start && (p(e.start), (p = null)), f && "undefined" != typeof e.end && f(e.end);
           },
           onVideoTimingInfo: function (e) {
               m && "undefined" != typeof e.start && (m(e.start), (m = null)), g && "undefined" != typeof e.end && g(e.end);
           },
           onVideoSegmentTimingInfo: function (e) {
               s(e);
           },
           onId3: function (e, t) {
               o(i, e, t);
           },
           onCaptions: function (e) {
               u(i, [e]);
           },
           onDone: function (e) {
               c && !n && ((e.type = "combined" === e.type ? "video" : e.type), c(null, i, e));
           },
       });
   }
   function Rl(e) {
       var n = e.segment,
           r = e.bytes,
           t = e.isPartial,
           i = e.trackInfoFn,
           a = e.timingInfoFn,
           s = e.videoSegmentTimingInfoFn,
           o = e.id3Fn,
           u = e.captionsFn,
           l = e.dataFn,
           c = e.doneFn,
           d = new Uint8Array(r);
       if (Wo(d)) {
           n.isFmp4 = !0;
           var h = n.map.tracks,
               p = { isFmp4: !0, hasVideo: !!h.video, hasAudio: !!h.audio };
           h.audio && h.audio.codec && "enca" !== h.audio.codec && (p.audioCodec = h.audio.codec), h.video && h.video.codec && "encv" !== h.video.codec && (p.videoCodec = h.video.codec), h.video && h.audio && (p.isMuxed = !0), i(n, p);
           var f = Uu(n.map.timescales, d);
           p.hasAudio && !p.isMuxed && a(n, "audio", "start", f), p.hasVideo && a(n, "video", "start", f);
           var m = function (e) {
               l(n, { data: r, type: p.hasAudio && !p.isMuxed ? "audio" : "video" }), e && e.length && u(n, e), c(null, n, {});
           };
           if (!h.video || !r.byteLength || !n.transmuxer) return void m();
           var g = r instanceof ArrayBuffer ? r : r.buffer,
               v = r instanceof ArrayBuffer ? 0 : r.byteOffset;
           return (
               n.transmuxer.addEventListener("message", function e(t) {
                   if ("mp4Captions" === t.data.action) {
                       n.transmuxer.removeEventListener("message", e);
                       var i = t.data.data;
                       (n.bytes = r = new Uint8Array(i, i.byteOffset || 0, i.byteLength)), m(t.data.captions);
                   }
               }),
               void n.transmuxer.postMessage({ action: "pushMp4Captions", timescales: n.map.timescales, trackIds: [h.video.id], data: g, byteOffset: v, byteLength: r.byteLength }, [g])
           );
       }
       if (n.transmuxer) {
           if (("undefined" == typeof n.container && (n.container = qo(d)), "ts" !== n.container && "aac" !== n.container)) return i(n, { hasAudio: !1, hasVideo: !1 }), void c(null, n, {});
           Ml({ segment: n, bytes: r, isPartial: t, trackInfoFn: i, timingInfoFn: a, videoSegmentTimingInfoFn: s, id3Fn: o, captionsFn: u, dataFn: l, doneFn: c });
       } else c(null, n, {});
   }
   function Nl(e) {
       var i = e.activeXhrs,
           n = e.decryptionWorker,
           r = e.trackInfoFn,
           a = e.timingInfoFn,
           s = e.videoSegmentTimingInfoFn,
           o = e.id3Fn,
           u = e.captionsFn,
           l = e.dataFn,
           c = e.doneFn,
           d = 0,
           h = !1;
       return function (e, t) {
           if (!h) {
               if (e) return (h = !0), Ol(i), c(e, t);
               if ((d += 1) === i.length) {
                   if (((t.endOfAllRequests = Date.now()), t.encryptedBytes))
                       return (function (e) {
                           var t,
                               n = e.decryptionWorker,
                               r = e.segment,
                               a = e.trackInfoFn,
                               s = e.timingInfoFn,
                               o = e.videoSegmentTimingInfoFn,
                               u = e.id3Fn,
                               l = e.captionsFn,
                               c = e.dataFn,
                               d = e.doneFn;
                           n.addEventListener("message", function e(t) {
                               if (t.data.source === r.requestId) {
                                   n.removeEventListener("message", e);
                                   var i = t.data.decrypted;
                                   (r.bytes = new Uint8Array(i.bytes, i.byteOffset, i.byteLength)),
                                       Rl({ segment: r, bytes: r.bytes, isPartial: !1, trackInfoFn: a, timingInfoFn: s, videoSegmentTimingInfoFn: o, id3Fn: u, captionsFn: l, dataFn: c, doneFn: d });
                               }
                           }),
                               (t = r.key.bytes.slice ? r.key.bytes.slice() : new Uint32Array(Array.prototype.slice.call(r.key.bytes))),
                               n.postMessage(ml({ source: r.requestId, encrypted: r.encryptedBytes, key: t, iv: r.key.iv }), [r.encryptedBytes.buffer, t.buffer]);
                       })({ decryptionWorker: n, segment: t, trackInfoFn: r, timingInfoFn: a, videoSegmentTimingInfoFn: s, id3Fn: o, captionsFn: u, dataFn: l, doneFn: c });
                   Rl({ segment: t, bytes: t.bytes, isPartial: !1, trackInfoFn: r, timingInfoFn: a, videoSegmentTimingInfoFn: s, id3Fn: o, captionsFn: u, dataFn: l, doneFn: c });
               }
           }
       };
   }
   function Ul(e) {
       var n = e.segment,
           r = e.progressFn,
           a = e.trackInfoFn,
           s = e.timingInfoFn,
           o = e.videoSegmentTimingInfoFn,
           u = e.id3Fn,
           l = e.captionsFn,
           c = e.dataFn,
           d = e.handlePartialData;
       return function (e) {
           var t = e.target;
           if (!t.aborted) {
               if (d && !n.key && t.responseText && 8 <= t.responseText.length) {
                   var i = Il(t.responseText.substring(n.lastReachedChar || 0));
                   (!n.lastReachedChar && Wo(new Uint8Array(i))) ||
                       ((n.lastReachedChar = t.responseText.length), Rl({ segment: n, bytes: i, isPartial: !0, trackInfoFn: a, timingInfoFn: s, videoSegmentTimingInfoFn: o, id3Fn: u, captionsFn: l, dataFn: c }));
               }
               return (
                   (n.stats = da.mergeOptions(
                       n.stats,
                       (function (e) {
                           var t = e.target,
                               i = { bandwidth: 1 / 0, bytesReceived: 0, roundTripTime: Date.now() - t.requestTime || 0 };
                           return (i.bytesReceived = e.loaded), (i.bandwidth = Math.floor((i.bytesReceived / i.roundTripTime) * 8 * 1e3)), i;
                       })(e)
                   )),
                   !n.stats.firstBytesReceivedAt && n.stats.bytesReceived && (n.stats.firstBytesReceivedAt = Date.now()),
                   r(e, n)
               );
           }
       };
   }
   function Fl(e) {
       var t = e.xhr,
           i = e.xhrOptions,
           n = e.decryptionWorker,
           r = e.segment,
           a = e.abortFn,
           s = e.progressFn,
           o = e.trackInfoFn,
           u = e.timingInfoFn,
           l = e.videoSegmentTimingInfoFn,
           c = e.id3Fn,
           d = e.captionsFn,
           h = e.dataFn,
           p = e.doneFn,
           f = e.handlePartialData,
           m = [],
           g = Nl({ activeXhrs: m, decryptionWorker: n, trackInfoFn: o, timingInfoFn: u, videoSegmentTimingInfoFn: l, id3Fn: c, captionsFn: d, dataFn: h, doneFn: p });
       if (r.key && !r.key.bytes) {
           var v = t(
               da.mergeOptions(i, { uri: r.key.resolvedUri, responseType: "arraybuffer" }),
               (function (a, s) {
                   return function (e, t) {
                       var i = t.response,
                           n = Dl(e, t);
                       if (n) return s(n, a);
                       if (16 !== i.byteLength) return s({ status: t.status, message: "Invalid HLS key at URL: " + t.uri, code: fc, xhr: t }, a);
                       var r = new DataView(i);
                       return (a.key.bytes = new Uint32Array([r.getUint32(0), r.getUint32(4), r.getUint32(8), r.getUint32(12)])), s(null, a);
                   };
               })(r, g)
           );
           m.push(v);
       }
       if (r.map && !r.map.bytes) {
           var y = t(
               da.mergeOptions(i, { uri: r.map.resolvedUri, responseType: "arraybuffer", headers: hl(r.map) }),
               (function (e) {
                   var a = e.segment,
                       s = e.finishProcessingFn;
                   return function (e, t) {
                       var i = t.response,
                           n = Dl(e, t);
                       if (n) return s(n, a);
                       if (0 === i.byteLength) return s({ status: t.status, message: "Empty HLS segment content at URL: " + t.uri, code: fc, xhr: t }, a);
                       a.map.bytes = new Uint8Array(t.response);
                       var r = qo(a.map.bytes);
                       return "mp4" !== r
                           ? s({ status: t.status, message: "Found unsupported " + (r || "unknown") + " container for initialization segment at URL: " + t.uri, code: fc, internal: !0, xhr: t }, a)
                           : (Fu(a.map.bytes).forEach(function (e) {
                                 (a.map.tracks = a.map.tracks || {}), a.map.tracks[e.type] || ((a.map.tracks[e.type] = e).id && e.timescale && ((a.map.timescales = a.map.timescales || {}), (a.map.timescales[e.id] = e.timescale)));
                             }),
                             s(null, a));
                   };
               })({ segment: r, finishProcessingFn: g })
           );
           m.push(y);
       }
       var _ = da.mergeOptions(i, { uri: r.resolvedUri, responseType: "arraybuffer", headers: hl(r) });
       f &&
           ((_.responseType = "text"),
           (_.beforeSend = function (e) {
               e.overrideMimeType("text/plain; charset=x-user-defined");
           }));
       var b = t(
           _,
           (function (e) {
               var a = e.segment,
                   s = e.finishProcessingFn,
                   o = e.responseType;
               return function (e, t) {
                   var i = t.response,
                       n = Dl(e, t);
                   if (n) return s(n, a);
                   var r = "arraybuffer" !== o && t.responseText ? Il(t.responseText.substring(a.lastReachedChar || 0)) : t.response;
                   return 0 === i.byteLength
                       ? s({ status: t.status, message: "Empty HLS segment content at URL: " + t.uri, code: fc, xhr: t }, a)
                       : ((a.stats = (function (e) {
                             return { bandwidth: e.bandwidth, bytesReceived: e.bytesReceived || 0, roundTripTime: e.roundTripTime || 0 };
                         })(t)),
                         a.key ? (a.encryptedBytes = new Uint8Array(r)) : (a.bytes = new Uint8Array(r)),
                         s(null, a));
               };
           })({ segment: r, finishProcessingFn: g, responseType: _.responseType })
       );
       b.addEventListener("progress", Ul({ segment: r, progressFn: s, trackInfoFn: o, timingInfoFn: u, videoSegmentTimingInfoFn: l, id3Fn: c, captionsFn: d, dataFn: h, handlePartialData: f })), m.push(b);
       var T = {};
       return (
           m.forEach(function (e) {
               e.addEventListener(
                   "loadend",
                   (function (e) {
                       var t = e.loadendState,
                           i = e.abortFn;
                       return function (e) {
                           e.target.aborted && i && !t.calledAbortFn && (i(), (t.calledAbortFn = !0));
                       };
                   })({ loadendState: T, abortFn: a })
               );
           }),
           function () {
               return Ol(m);
           }
       );
   }
   var Bl,
       jl = Bu.DEFAULT_AUDIO_CODEC,
       Vl = Bu.DEFAULT_VIDEO_CODEC,
       ql = Bu.browserSupportsCodec,
       Hl = Bu.codecsFromDefault,
       Wl = Bu.getMimeForCodec,
       zl = Bu.isAudioCodec,
       Gl = Bu.isVideoCodec,
       Xl = (Bu.mapLegacyAvcCodecs, Bu.muxerSupportsCodec),
       Kl = Bu.parseCodecs,
       Yl = Bu.translateLegacyCodec,
       $l = (Bu.translateLegacyCodecs, va),
       Ql = da.log,
       Jl = da.mergeOptions,
       Zl = (function (c) {
           function e(e, t, i) {
               var n;
               if ((void 0 === i && (i = {}), (n = c.call(this) || this), !e)) throw new Error("A non-empty playlist URL or object is required");
               var r = i,
                   a = r.withCredentials,
                   s = void 0 !== a && a,
                   o = r.handleManifestRedirects,
                   u = void 0 !== o && o;
               (n.src = e), (n.vhs_ = t), (n.withCredentials = s), (n.handleManifestRedirects = u);
               var l = t.options_;
               return (
                   (n.customTagParsers = (l && l.customTagParsers) || []),
                   (n.customTagMappers = (l && l.customTagMappers) || []),
                   (n.state = "HAVE_NOTHING"),
                   n.on("mediaupdatetimeout", function () {
                       "HAVE_METADATA" === n.state &&
                           ((n.state = "HAVE_CURRENT_METADATA"),
                           (n.request = n.vhs_.xhr({ uri: $l(n.master.uri, n.media().uri), withCredentials: n.withCredentials }, function (e, t) {
                               if (n.request) return e ? n.playlistRequestError(n.request, n.media(), "HAVE_METADATA") : void n.haveMetadata({ playlistString: n.request.responseText, url: n.media().uri, id: n.media().id });
                           })));
                   }),
                   n
               );
           }
           Ge(e, c);
           var t = e.prototype;
           return (
               (t.playlistRequestError = function (e, t, i) {
                   var n = t.uri,
                       r = t.id;
                   (this.request = null),
                       i && (this.state = i),
                       (this.error = { playlist: this.master.playlists[r], status: e.status, message: "HLS playlist request error at URL: " + n + ".", responseText: e.responseText, code: 500 <= e.status ? 4 : 2 }),
                       this.trigger("error");
               }),
               (t.haveMetadata = function (e) {
                   var t = this,
                       i = e.playlistString,
                       n = e.playlistObject,
                       r = e.url,
                       a = e.id;
                   (this.request = null), (this.state = "HAVE_METADATA");
                   var s = n || qu({ manifestString: i, customTagParsers: this.customTagParsers, customTagMappers: this.customTagMappers });
                   Wu({ playlist: s, uri: r, id: a });
                   var o = Xu(this.master, s);
                   (this.targetDuration = s.targetDuration),
                       o ? ((this.master = o), (this.media_ = this.master.playlists[a])) : this.trigger("playlistunchanged"),
                       this.media().endList ||
                           (T.clearTimeout(this.mediaUpdateTimeout),
                           (this.mediaUpdateTimeout = T.setTimeout(function () {
                               t.trigger("mediaupdatetimeout");
                           }, Ku(this.media(), !!o)))),
                       this.trigger("loadedplaylist");
               }),
               (t.dispose = function () {
                   this.trigger("dispose"), this.stopRequest(), T.clearTimeout(this.mediaUpdateTimeout), T.clearTimeout(this.finalRenditionTimeout), this.off();
               }),
               (t.stopRequest = function () {
                   if (this.request) {
                       var e = this.request;
                       (this.request = null), (e.onreadystatechange = null), e.abort();
                   }
               }),
               (t.media = function (i, e) {
                   var n = this;
                   if (!i) return this.media_;
                   if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
                   if ("string" == typeof i) {
                       if (!this.master.playlists[i]) throw new Error("Unknown playlist URI: " + i);
                       i = this.master.playlists[i];
                   }
                   if ((T.clearTimeout(this.finalRenditionTimeout), e)) {
                       var t = (i.targetDuration / 2) * 1e3 || 5e3;
                       this.finalRenditionTimeout = T.setTimeout(this.media.bind(this, i, !1), t);
                   } else {
                       var r = this.state,
                           a = !this.media_ || i.id !== this.media_.id;
                       if (this.master.playlists[i.id].endList || (i.endList && i.segments.length))
                           return (
                               this.request && ((this.request.onreadystatechange = null), this.request.abort(), (this.request = null)),
                               (this.state = "HAVE_METADATA"),
                               (this.media_ = i),
                               void (a && (this.trigger("mediachanging"), "HAVE_MASTER" === r ? this.trigger("loadedmetadata") : this.trigger("mediachange")))
                           );
                       if (a) {
                           if (((this.state = "SWITCHING_MEDIA"), this.request)) {
                               if (i.resolvedUri === this.request.url) return;
                               (this.request.onreadystatechange = null), this.request.abort(), (this.request = null);
                           }
                           this.media_ && this.trigger("mediachanging"),
                               (this.request = this.vhs_.xhr({ uri: i.resolvedUri, withCredentials: this.withCredentials }, function (e, t) {
                                   if (n.request) {
                                       if (((i.resolvedUri = ju(n.handleManifestRedirects, i.resolvedUri, t)), e)) return n.playlistRequestError(n.request, i, r);
                                       n.haveMetadata({ playlistString: t.responseText, url: i.uri, id: i.id }), "HAVE_MASTER" === r ? n.trigger("loadedmetadata") : n.trigger("mediachange");
                                   }
                               }));
                       }
                   }
               }),
               (t.pause = function () {
                   this.stopRequest(),
                       T.clearTimeout(this.mediaUpdateTimeout),
                       "HAVE_NOTHING" === this.state && (this.started = !1),
                       "SWITCHING_MEDIA" === this.state ? (this.media_ ? (this.state = "HAVE_METADATA") : (this.state = "HAVE_MASTER")) : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA");
               }),
               (t.load = function (e) {
                   var t = this;
                   T.clearTimeout(this.mediaUpdateTimeout);
                   var i = this.media();
                   if (e) {
                       var n = i ? (i.targetDuration / 2) * 1e3 : 5e3;
                       this.mediaUpdateTimeout = T.setTimeout(function () {
                           return t.load();
                       }, n);
                   } else this.started ? (i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist")) : this.start();
               }),
               (t.start = function () {
                   var n = this;
                   if (((this.started = !0), "object" == typeof this.src))
                       return (
                           this.src.uri || (this.src.uri = T.location.href),
                           (this.src.resolvedUri = this.src.uri),
                           void setTimeout(function () {
                               n.setupInitialPlaylist(n.src);
                           }, 0)
                       );
                   this.request = this.vhs_.xhr({ uri: this.src, withCredentials: this.withCredentials }, function (e, t) {
                       if (n.request) {
                           if (((n.request = null), e))
                               return (
                                   (n.error = { status: t.status, message: "HLS playlist request error at URL: " + n.src + ".", responseText: t.responseText, code: 2 }), "HAVE_NOTHING" === n.state && (n.started = !1), n.trigger("error")
                               );
                           n.src = ju(n.handleManifestRedirects, n.src, t);
                           var i = qu({ manifestString: t.responseText, customTagParsers: n.customTagParsers, customTagMappers: n.customTagMappers });
                           n.setupInitialPlaylist(i);
                       }
                   });
               }),
               (t.srcUri = function () {
                   return "string" == typeof this.src ? this.src : this.src.uri;
               }),
               (t.setupInitialPlaylist = function (e) {
                   if (((this.state = "HAVE_MASTER"), e.playlists))
                       return (
                           (this.master = e),
                           zu(this.master, this.srcUri()),
                           e.playlists.forEach(function (t) {
                               t.segments &&
                                   t.segments.forEach(function (e) {
                                       Gu(e, t.resolvedUri);
                                   });
                           }),
                           this.trigger("loadedplaylist"),
                           void (this.request || this.media(this.master.playlists[0]))
                       );
                   var t = this.srcUri() || T.location.href;
                   (this.master = (function (e, t) {
                       var i = Vu(0, t),
                           n = { mediaGroups: { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, uri: T.location.href, resolvedUri: T.location.href, playlists: [{ uri: t, id: i, resolvedUri: t, attributes: {} }] };
                       return (n.playlists[i] = n.playlists[0]), (n.playlists[t] = n.playlists[0]), n;
                   })(0, t)),
                       this.haveMetadata({ playlistObject: e, url: t, id: this.master.playlists[0].id }),
                       this.trigger("loadedmetadata");
               }),
               e
           );
       })(da.EventTarget),
       ec = 1 / 30,
       tc = da.createTimeRange,
       ic = {
           duration: tl,
           seekable: function (e, t, i) {
               var n = t || 0,
                   r = rl(e, t, !0, i);
               return null === r ? tc() : tc(n, r);
           },
           safeLiveIndex: nl,
           getMediaInfoForTime: function (e, t, i, n) {
               var r,
                   a = e.segments.length,
                   s = t - n;
               if (s < 0) {
                   if (0 < i) for (r = i - 1; 0 <= r; r--) if (0 < (s += e.segments[r].duration + ec)) return { mediaIndex: r, startTime: n - il(e, i, r) };
                   return { mediaIndex: 0, startTime: t };
               }
               if (i < 0) {
                   for (r = i; r < 0; r++) if ((s -= e.targetDuration) < 0) return { mediaIndex: 0, startTime: t };
                   i = 0;
               }
               for (r = i; r < a; r++) if ((s -= e.segments[r].duration + ec) < 0) return { mediaIndex: r, startTime: n + il(e, i, r) };
               return { mediaIndex: a - 1, startTime: t };
           },
           isEnabled: ol,
           isDisabled: function (e) {
               return e.disabled;
           },
           isBlacklisted: al,
           isIncompatible: sl,
           playlistEnd: rl,
           isAes: function (e) {
               for (var t = 0; t < e.segments.length; t++) if (e.segments[t].key) return !0;
               return !1;
           },
           hasAttribute: ul,
           estimateSegmentRequestTime: function (e, t, i, n) {
               return void 0 === n && (n = 0), ul("BANDWIDTH", i) ? (e * i.attributes.BANDWIDTH - 8 * n) / t : NaN;
           },
           isLowestEnabledRendition: ll,
       },
       nc = da.xhr,
       rc = da.mergeOptions,
       ac = Object.freeze({
           __proto__: null,
           createTransferableMessage: ml,
           initSegmentId: gl,
           segmentKeyId: vl,
           hexDump: yl,
           tagDump: function (e) {
               var t = e.bytes;
               return yl(t);
           },
           textRanges: function (e) {
               var t,
                   i,
                   n,
                   r = "";
               for (t = 0; t < e.length; t++) r += ((n = t), (i = e).start(n) + "-" + i.end(n) + " ");
               return r;
           },
       }),
       sc = da.mergeOptions,
       oc = (function (c) {
           function e(e, t, i, n) {
               var r;
               void 0 === i && (i = {}), (r = c.call(this) || this);
               var a = i,
                   s = a.withCredentials,
                   o = void 0 !== s && s,
                   u = a.handleManifestRedirects,
                   l = void 0 !== u && u;
               if (((r.vhs_ = t), (r.withCredentials = o), (r.handleManifestRedirects = l), !e)) throw new Error("A non-empty playlist URL or object is required");
               return (
                   r.on("minimumUpdatePeriod", function () {
                       r.refreshXml_();
                   }),
                   r.on("mediaupdatetimeout", function () {
                       r.refreshMedia_(r.media().id);
                   }),
                   (r.state = "HAVE_NOTHING"),
                   (r.loadedPlaylists_ = {}),
                   "string" == typeof e ? ((r.srcUrl = e), (r.sidxMapping_ = {}), Ve(r)) : (r.setupChildLoader(n, e), r)
               );
           }
           Ge(e, c);
           var t = e.prototype;
           return (
               (t.setupChildLoader = function (e, t) {
                   (this.masterPlaylistLoader_ = e), (this.childPlaylist_ = t);
               }),
               (t.dispose = function () {
                   this.trigger("dispose"), this.stopRequest(), (this.loadedPlaylists_ = {}), T.clearTimeout(this.minimumUpdatePeriodTimeout_), T.clearTimeout(this.mediaRequest_), T.clearTimeout(this.mediaUpdateTimeout), this.off();
               }),
               (t.hasPendingRequest = function () {
                   return this.request || this.mediaRequest_;
               }),
               (t.stopRequest = function () {
                   if (this.request) {
                       var e = this.request;
                       (this.request = null), (e.onreadystatechange = null), e.abort();
                   }
               }),
               (t.sidxRequestFinished_ = function (r, a, s, o) {
                   var u = this;
                   return function (e, t) {
                       if (u.request) {
                           if (((u.request = null), e))
                               return (u.error = "object" == typeof e ? e : { status: t.status, message: "DASH playlist request error at URL: " + r.uri, response: t.response, code: 2 }), s && (u.state = s), void u.trigger("error");
                           var i = Yo(t.response),
                               n = jo(i.subarray(8));
                           return o(a, n);
                       }
                   };
               }),
               (t.media = function (i) {
                   var n = this;
                   if (!i) return this.media_;
                   if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
                   var r = this.state;
                   if ("string" == typeof i) {
                       if (!this.master.playlists[i]) throw new Error("Unknown playlist URI: " + i);
                       i = this.master.playlists[i];
                   }
                   var e = !this.media_ || i.id !== this.media_.id;
                   if (e && this.loadedPlaylists_[i.id] && this.loadedPlaylists_[i.id].endList) return (this.state = "HAVE_METADATA"), (this.media_ = i), void (e && (this.trigger("mediachanging"), this.trigger("mediachange")));
                   if (e)
                       if ((this.media_ && this.trigger("mediachanging"), i.sidx)) {
                           var t, a;
                           a = this.masterPlaylistLoader_ ? ((t = this.masterPlaylistLoader_.master), this.masterPlaylistLoader_.sidxMapping_) : ((t = this.master), this.sidxMapping_);
                           var s = Cl(i.sidx);
                           (a[s] = { sidxInfo: i.sidx }),
                               (this.request = wl(
                                   this,
                                   i.sidx,
                                   i,
                                   this.vhs_.xhr,
                                   { handleManifestRedirects: this.handleManifestRedirects },
                                   this.sidxRequestFinished_(i, t, r, function (e, t) {
                                       if (!e || !t) throw new Error("failed to request sidx");
                                       (a[s].sidx = t), n.haveMetadata({ startingState: r, playlist: e.playlists[i.id] });
                                   })
                               ));
                       } else this.mediaRequest_ = T.setTimeout(this.haveMetadata.bind(this, { startingState: r, playlist: i }), 0);
               }),
               (t.haveMetadata = function (e) {
                   var t = e.startingState,
                       i = e.playlist;
                   (this.state = "HAVE_METADATA"), (this.loadedPlaylists_[i.id] = i), (this.mediaRequest_ = null), this.refreshMedia_(i.id), "HAVE_MASTER" === t ? this.trigger("loadedmetadata") : this.trigger("mediachange");
               }),
               (t.pause = function () {
                   this.stopRequest(), T.clearTimeout(this.mediaUpdateTimeout), T.clearTimeout(this.minimumUpdatePeriodTimeout_), "HAVE_NOTHING" === this.state && (this.started = !1);
               }),
               (t.load = function (e) {
                   var t = this;
                   T.clearTimeout(this.mediaUpdateTimeout), T.clearTimeout(this.minimumUpdatePeriodTimeout_);
                   var i = this.media();
                   if (e) {
                       var n = i ? (i.targetDuration / 2) * 1e3 : 5e3;
                       this.mediaUpdateTimeout = T.setTimeout(function () {
                           return t.load();
                       }, n);
                   } else this.started ? (i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist")) : this.start();
               }),
               (t.start = function () {
                   var i = this;
                   (this.started = !0),
                       this.masterPlaylistLoader_
                           ? (this.mediaRequest_ = T.setTimeout(this.haveMaster_.bind(this), 0))
                           : (this.request = this.vhs_.xhr({ uri: this.srcUrl, withCredentials: this.withCredentials }, function (e, t) {
                                 if (i.request) {
                                     if (((i.request = null), e))
                                         return (
                                             (i.error = { status: t.status, message: "DASH playlist request error at URL: " + i.srcUrl, responseText: t.responseText, code: 2 }),
                                             "HAVE_NOTHING" === i.state && (i.started = !1),
                                             i.trigger("error")
                                         );
                                     (i.masterXml_ = t.responseText),
                                         t.responseHeaders && t.responseHeaders.date ? (i.masterLoaded_ = Date.parse(t.responseHeaders.date)) : (i.masterLoaded_ = Date.now()),
                                         (i.srcUrl = ju(i.handleManifestRedirects, i.srcUrl, t)),
                                         i.syncClientServerClock_(i.onClientServerClockSync_.bind(i));
                                 }
                             }));
               }),
               (t.syncClientServerClock_ = function (n) {
                   var r = this,
                       a = wo(this.masterXml_);
                   return null === a
                       ? ((this.clientOffset_ = this.masterLoaded_ - Date.now()), n())
                       : "DIRECT" === a.method
                       ? ((this.clientOffset_ = a.value - Date.now()), n())
                       : void (this.request = this.vhs_.xhr({ uri: $l(this.srcUrl, a.value), method: a.method, withCredentials: this.withCredentials }, function (e, t) {
                             if (r.request) {
                                 if (e) return (r.clientOffset_ = r.masterLoaded_ - Date.now()), n();
                                 var i;
                                 (i = "HEAD" === a.method ? (t.responseHeaders && t.responseHeaders.date ? Date.parse(t.responseHeaders.date) : r.masterLoaded_) : Date.parse(t.responseText)), (r.clientOffset_ = i - Date.now()), n();
                             }
                         }));
               }),
               (t.haveMaster_ = function () {
                   (this.state = "HAVE_MASTER"),
                       (this.mediaRequest_ = null),
                       this.masterPlaylistLoader_
                           ? this.media_ || this.media(this.childPlaylist_)
                           : (this.updateMainManifest_(Sl({ masterXml: this.masterXml_, srcUrl: this.srcUrl, clientOffset: this.clientOffset_, sidxMapping: this.sidxMapping_ })), this.trigger("loadedplaylist"));
               }),
               (t.updateMinimumUpdatePeriodTimeout_ = function () {
                   var t = this;
                   T.clearTimeout(this.minimumUpdatePeriodTimeout_);
                   function e(e) {
                       t.minimumUpdatePeriodTimeout_ = T.setTimeout(function () {
                           t.trigger("minimumUpdatePeriod");
                       }, e);
                   }
                   var i = this.master && this.master.minimumUpdatePeriod;
                   0 < i
                       ? e(i)
                       : 0 === i &&
                         (this.media()
                             ? e(1e3 * this.media().targetDuration)
                             : this.one("loadedplaylist", function () {
                                   e(1e3 * t.media().targetDuration);
                               }));
               }),
               (t.onClientServerClockSync_ = function () {
                   this.haveMaster_(), this.hasPendingRequest() || this.media_ || this.media(this.master.playlists[0]), this.updateMinimumUpdatePeriodTimeout_();
               }),
               (t.updateMainManifest_ = function (e) {
                   if (((this.master = e), this.master.locations && this.master.locations.length)) {
                       var t = this.master.locations[0];
                       t !== this.srcUrl && (this.srcUrl = t);
                   }
               }),
               (t.refreshXml_ = function () {
                   var o = this;
                   this.request = this.vhs_.xhr({ uri: this.srcUrl, withCredentials: this.withCredentials }, function (e, t) {
                       if (o.request) {
                           if (((o.request = null), e))
                               return (o.error = { status: t.status, message: "DASH playlist request error at URL: " + o.srcUrl, responseText: t.responseText, code: 2 }), "HAVE_NOTHING" === o.state && (o.started = !1), o.trigger("error");
                           (o.masterXml_ = t.responseText),
                               (o.sidxMapping_ = (function (e, t, i, a) {
                                   var n = Eo(e, { manifestUri: t, clientOffset: i }),
                                       s = El(n.playlists, a);
                                   return (
                                       Hu(n, function (e, t, i, n) {
                                           if (e.playlists && e.playlists.length) {
                                               var r = e.playlists;
                                               s = sc(s, El(r, a));
                                           }
                                       }),
                                       s
                                   );
                               })(o.masterXml_, o.srcUrl, o.clientOffset_, o.sidxMapping_));
                           var i = Sl({ masterXml: o.masterXml_, srcUrl: o.srcUrl, clientOffset: o.clientOffset_, sidxMapping: o.sidxMapping_ }),
                               n = kl(o.master, i),
                               r = o.media().sidx;
                           if (n)
                               if (r) {
                                   var a = Cl(r);
                                   if (!o.sidxMapping_[a]) {
                                       var s = o.media();
                                       o.request = wl(
                                           o,
                                           s.sidx,
                                           s,
                                           o.vhs_.xhr,
                                           { handleManifestRedirects: o.handleManifestRedirects },
                                           o.sidxRequestFinished_(s, i, o.state, function (e, t) {
                                               if (!e || !t) throw new Error("failed to request sidx on minimumUpdatePeriod");
                                               (o.sidxMapping_[a].sidx = t), o.updateMinimumUpdatePeriodTimeout_(), o.refreshMedia_(o.media().id);
                                           })
                                       );
                                   }
                               } else o.updateMainManifest_(n), o.media_ && (o.media_ = o.master.playlists[o.media_.id]);
                           o.updateMinimumUpdatePeriodTimeout_();
                       }
                   });
               }),
               (t.refreshMedia_ = function (e) {
                   var t,
                       i,
                       n = this;
                   if (!e) throw new Error("refreshMedia_ must take a media id");
                   i = this.masterPlaylistLoader_
                       ? ((t = this.masterPlaylistLoader_.master),
                         Sl({ masterXml: this.masterPlaylistLoader_.masterXml_, srcUrl: this.masterPlaylistLoader_.srcUrl, clientOffset: this.masterPlaylistLoader_.clientOffset_, sidxMapping: this.masterPlaylistLoader_.sidxMapping_ }))
                       : ((t = this.master), Sl({ masterXml: this.masterXml_, srcUrl: this.srcUrl, clientOffset: this.clientOffset_, sidxMapping: this.sidxMapping_ }));
                   var r = kl(t, i);
                   r ? (this.masterPlaylistLoader_ ? (this.masterPlaylistLoader_.master = r) : (this.master = r), (this.media_ = r.playlists[e])) : ((this.media_ = t.playlists[e]), this.trigger("playlistunchanged")),
                       this.media().endList ||
                           (this.mediaUpdateTimeout = T.setTimeout(function () {
                               n.trigger("mediaupdatetimeout");
                           }, Ku(this.media(), !!r))),
                       this.trigger("loadedplaylist");
               }),
               e
           );
       })(da.EventTarget),
       uc = {
           GOAL_BUFFER_LENGTH: 30,
           MAX_GOAL_BUFFER_LENGTH: 60,
           BACK_BUFFER_LENGTH: 30,
           GOAL_BUFFER_LENGTH_RATE: 1,
           INITIAL_BANDWIDTH: 4194304,
           BANDWIDTH_VARIANCE: 1.2,
           BUFFER_LOW_WATER_LINE: 0,
           MAX_BUFFER_LOW_WATER_LINE: 30,
           BUFFER_LOW_WATER_LINE_RATE: 1,
       },
       lc = [],
       cc = function () {
           (Bl = null), lc.length && ("function" == typeof (Bl = lc.shift()) ? Bl() : Al(Bl));
       },
       dc = function (e) {
           Pl("reset", e);
       },
       hc = function () {
           (Bl = null), (lc.length = 0);
       },
       pc = function (e) {
           Pl("endTimeline", e);
       },
       fc = 2,
       mc = -101,
       gc = -102,
       vc = "undefined" != typeof window ? window : {},
       yc = "undefined" == typeof Symbol ? "__target" : Symbol(),
       _c = "application/javascript",
       bc = vc.BlobBuilder || vc.WebKitBlobBuilder || vc.MozBlobBuilder || vc.MSBlobBuilder,
       Tc = vc.URL || vc.webkitURL || (Tc && Tc.msURL),
       Sc = vc.Worker;
   function kc(r, a) {
       return function (e) {
           var t = this;
           if (!a) return new Sc(r);
           if (Sc && !e) {
               var i = Ic(
                   a
                       .toString()
                       .replace(/^function.+?{/, "")
                       .slice(0, -1)
               );
               return (
                   (this[yc] = new Sc(i)),
                   (function (e, t) {
                       if (!e || !t) return;
                       var i = e.terminate;
                       (e.objURL = t),
                           (e.terminate = function () {
                               e.objURL && Tc.revokeObjectURL(e.objURL), i.call(e);
                           });
                   })(this[yc], i),
                   this[yc]
               );
           }
           var n = {
               postMessage: function (e) {
                   t.onmessage &&
                       setTimeout(function () {
                           t.onmessage({ data: e, target: n });
                       });
               },
           };
           a.call(n),
               (this.postMessage = function (e) {
                   setTimeout(function () {
                       n.onmessage({ data: e, target: t });
                   });
               }),
               (this.isThisThread = !0);
       };
   }
   if (Sc) {
       var Cc,
           Ec = Ic("self.onmessage = function () {}"),
           wc = new Uint8Array(1);
       try {
           (Cc = new Sc(Ec)).postMessage(wc, [wc.buffer]);
       } catch (e) {
           Sc = null;
       } finally {
           Tc.revokeObjectURL(Ec), Cc && Cc.terminate();
       }
   }
   function Ic(t) {
       try {
           return Tc.createObjectURL(new Blob([t], { type: _c }));
       } catch (e) {
           var i = new bc();
           return i.append(t), Tc.createObjectURL(i.getBlob(type));
       }
   }
   function Ac(e, t) {
       var i = t.attributes || {};
       return e && e.mediaGroups && e.mediaGroups.AUDIO && i.AUDIO && e.mediaGroups.AUDIO[i.AUDIO];
   }
   function xc(e, t) {
       var i = t.attributes || {},
           n =
               (function (e) {
                   var t = e.attributes || {};
                   if (t.CODECS) return Kl(t.CODECS);
               })(t) || {};
       if (
           Ac(e, t) &&
           !n.audio &&
           !(function (e, t) {
               if (!Ac(e, t)) return !0;
               var i = t.attributes || {},
                   n = e.mediaGroups.AUDIO[i.AUDIO];
               for (var r in n) if (!n[r].uri && !n[r].playlists) return !0;
               return !1;
           })(e, t)
       ) {
           var r = Hl(e, i.AUDIO);
           r && (n.audio = r.audio);
       }
       var a = {};
       return n.video && (a.video = Yl("" + n.video.type + n.video.details)), n.audio && (a.audio = Yl("" + n.audio.type + n.audio.details)), a;
   }
   function Pc(e) {
       return da.log.debug ? da.log.debug.bind(da, "VHS:", e + " >") : function () {};
   }
   function Lc(e) {
       if (e && e.playlist) {
           var t = e.playlist;
           return JSON.stringify({ id: t.id, bandwidth: e.bandwidth, width: e.width, height: e.height, codecs: (t.attributes && t.attributes.CODECS) || "" });
       }
   }
   function Oc(e, t) {
       if (!e) return "";
       var i = T.getComputedStyle(e);
       return i ? i[t] : "";
   }
   function Dc(e, n) {
       var r = e.slice();
       e.sort(function (e, t) {
           var i = n(e, t);
           return 0 === i ? r.indexOf(e) - r.indexOf(t) : i;
       });
   }
   function Mc(e, t) {
       var i, n;
       return e.attributes.BANDWIDTH && (i = e.attributes.BANDWIDTH), (i = i || T.Number.MAX_VALUE), t.attributes.BANDWIDTH && (n = t.attributes.BANDWIDTH), i - (n = n || T.Number.MAX_VALUE);
   }
   function Rc(e) {
       var t = e.inbandTextTracks,
           i = e.metadataArray,
           n = e.timestampOffset,
           r = e.videoDuration;
       if (i) {
           var a = T.WebKitDataCue || T.VTTCue,
               s = t.metadataTrack_;
           if (
               s &&
               (i.forEach(function (e) {
                   var i = e.cueTime + n;
                   !("number" != typeof i || T.isNaN(i) || i < 0) &&
                       i < 1 / 0 &&
                       e.frames.forEach(function (e) {
                           var t = new a(i, i, e.value || e.url || e.data || "");
                           (t.frame = e),
                               (t.value = e),
                               (function (e) {
                                   Object.defineProperties(e.frame, {
                                       id: {
                                           get: function () {
                                               return da.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), e.value.key;
                                           },
                                       },
                                       value: {
                                           get: function () {
                                               return da.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), e.value.data;
                                           },
                                       },
                                       privateData: {
                                           get: function () {
                                               return da.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), e.value.data;
                                           },
                                       },
                                   });
                               })(t),
                               s.addCue(t);
                       });
               }),
               s.cues && s.cues.length)
           ) {
               for (var o = s.cues, u = [], l = 0; l < o.length; l++) o[l] && u.push(o[l]);
               var c = u.reduce(function (e, t) {
                       var i = e[t.startTime] || [];
                       return i.push(t), (e[t.startTime] = i), e;
                   }, {}),
                   d = Object.keys(c).sort(function (e, t) {
                       return Number(e) - Number(t);
                   });
               d.forEach(function (e, t) {
                   var i = c[e],
                       n = Number(d[t + 1]) || r;
                   i.forEach(function (e) {
                       e.endTime = n;
                   });
               });
           }
       }
   }
   function Nc(e, t, i) {
       var n, r;
       if (i && i.cues) for (n = i.cues.length; n--; ) (r = i.cues[n]).startTime >= e && r.endTime <= t && i.removeCue(r);
   }
   function Uc(e) {
       return "number" == typeof e && isFinite(e);
   }
   function Fc(e) {
       return e + "TimingInfo";
   }
   function Bc(e) {
       var t = e.segmentTimeline,
           i = e.currentTimeline,
           n = e.startOfSegment,
           r = e.buffered;
       return e.overrideCheck || t !== i ? (r.length ? r.end(r.length - 1) : n) : null;
   }
   function jc(e) {
       var t = e.timelineChangeController,
           i = e.currentTimeline,
           n = e.segmentTimeline,
           r = e.loaderType,
           a = e.audioDisabled;
       if (i === n) return !1;
       if ("audio" === r) {
           var s = t.lastTimelineChange({ type: "main" });
           return !s || s.to !== n;
       }
       if ("main" === r && a) {
           var o = t.pendingTimelineChange({ type: "audio" });
           return !o || o.to !== n;
       }
       return !1;
   }
   var Vc = new kc("./transmuxer-worker.worker.js", function (e, t) {
           var Zt = this;
           /*! @name @videojs/http-streaming @version 2.2.4 @license Apache-2.0 */ !(function () {
               function e() {
                   this.init = function () {
                       var a = {};
                       (this.on = function (e, t) {
                           a[e] || (a[e] = []), (a[e] = a[e].concat(t));
                       }),
                           (this.off = function (e, t) {
                               var i;
                               return !!a[e] && ((i = a[e].indexOf(t)), (a[e] = a[e].slice()), a[e].splice(i, 1), -1 < i);
                           }),
                           (this.trigger = function (e) {
                               var t, i, n, r;
                               if ((t = a[e]))
                                   if (2 === arguments.length) for (n = t.length, i = 0; i < n; ++i) t[i].call(this, arguments[1]);
                                   else {
                                       for (r = [], i = arguments.length, i = 1; i < arguments.length; ++i) r.push(arguments[i]);
                                       for (n = t.length, i = 0; i < n; ++i) t[i].apply(this, r);
                                   }
                           }),
                           (this.dispose = function () {
                               a = {};
                           });
                   };
               }
               (e.prototype.pipe = function (t) {
                   return (
                       this.on("data", function (e) {
                           t.push(e);
                       }),
                       this.on("done", function (e) {
                           t.flush(e);
                       }),
                       this.on("partialdone", function (e) {
                           t.partialFlush(e);
                       }),
                       this.on("endedtimeline", function (e) {
                           t.endTimeline(e);
                       }),
                       this.on("reset", function (e) {
                           t.reset(e);
                       }),
                       t
                   );
               }),
                   (e.prototype.push = function (e) {
                       this.trigger("data", e);
                   }),
                   (e.prototype.flush = function (e) {
                       this.trigger("done", e);
                   }),
                   (e.prototype.partialFlush = function (e) {
                       this.trigger("partialdone", e);
                   }),
                   (e.prototype.endTimeline = function (e) {
                       this.trigger("endedtimeline", e);
                   }),
                   (e.prototype.reset = function (e) {
                       this.trigger("reset", e);
                   });
               var l,
                   t,
                   i,
                   r,
                   a,
                   n,
                   s,
                   o,
                   u,
                   c,
                   d,
                   h,
                   p,
                   f,
                   m,
                   g,
                   v,
                   y,
                   _,
                   b,
                   T,
                   S,
                   k,
                   C,
                   E,
                   w,
                   I,
                   A,
                   x,
                   P,
                   L,
                   O,
                   D,
                   M,
                   R,
                   N,
                   U,
                   F,
                   B,
                   j,
                   V = e,
                   q = Math.pow(2, 32) - 1;
               !(function () {
                   var e;
                   if (
                       ((S = {
                           avc1: [],
                           avcC: [],
                           btrt: [],
                           dinf: [],
                           dref: [],
                           esds: [],
                           ftyp: [],
                           hdlr: [],
                           mdat: [],
                           mdhd: [],
                           mdia: [],
                           mfhd: [],
                           minf: [],
                           moof: [],
                           moov: [],
                           mp4a: [],
                           mvex: [],
                           mvhd: [],
                           pasp: [],
                           sdtp: [],
                           smhd: [],
                           stbl: [],
                           stco: [],
                           stsc: [],
                           stsd: [],
                           stsz: [],
                           stts: [],
                           styp: [],
                           tfdt: [],
                           tfhd: [],
                           traf: [],
                           trak: [],
                           trun: [],
                           trex: [],
                           tkhd: [],
                           vmhd: [],
                       }),
                       "undefined" != typeof Uint8Array)
                   ) {
                       for (e in S) S.hasOwnProperty(e) && (S[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                       (k = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)])),
                           (E = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)])),
                           (C = new Uint8Array([0, 0, 0, 1])),
                           (w = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0])),
                           (I = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0])),
                           (A = { video: w, audio: I }),
                           (L = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1])),
                           (P = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                           (O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                           (D = O),
                           (M = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                           (R = O),
                           (x = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]));
                   }
               })(),
                   (l = function (e) {
                       var t,
                           i,
                           n = [],
                           r = 0;
                       for (t = 1; t < arguments.length; t++) n.push(arguments[t]);
                       for (t = n.length; t--; ) r += n[t].byteLength;
                       for (i = new Uint8Array(r + 8), new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength), i.set(e, 4), t = 0, r = 8; t < n.length; t++) i.set(n[t], r), (r += n[t].byteLength);
                       return i;
                   }),
                   (t = function () {
                       return l(S.dinf, l(S.dref, L));
                   }),
                   (i = function (e) {
                       return l(
                           S.esds,
                           new Uint8Array([
                               0,
                               0,
                               0,
                               0,
                               3,
                               25,
                               0,
                               0,
                               0,
                               4,
                               17,
                               64,
                               21,
                               0,
                               6,
                               0,
                               0,
                               0,
                               218,
                               192,
                               0,
                               0,
                               218,
                               192,
                               5,
                               2,
                               (e.audioobjecttype << 3) | (e.samplingfrequencyindex >>> 1),
                               (e.samplingfrequencyindex << 7) | (e.channelcount << 3),
                               6,
                               1,
                               2,
                           ])
                       );
                   }),
                   (m = function (e) {
                       return l(S.hdlr, A[e]);
                   }),
                   (f = function (e) {
                       var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, (e.duration >>> 24) & 255, (e.duration >>> 16) & 255, (e.duration >>> 8) & 255, 255 & e.duration, 85, 196, 0, 0]);
                       return e.samplerate && ((t[12] = (e.samplerate >>> 24) & 255), (t[13] = (e.samplerate >>> 16) & 255), (t[14] = (e.samplerate >>> 8) & 255), (t[15] = 255 & e.samplerate)), l(S.mdhd, t);
                   }),
                   (p = function (e) {
                       return l(S.mdia, f(e), m(e.type), n(e));
                   }),
                   (a = function (e) {
                       return l(S.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]));
                   }),
                   (n = function (e) {
                       return l(S.minf, "video" === e.type ? l(S.vmhd, x) : l(S.smhd, P), t(), v(e));
                   }),
                   (s = function (e, t) {
                       for (var i = [], n = t.length; n--; ) i[n] = _(t[n]);
                       return l.apply(null, [S.moof, a(e)].concat(i));
                   }),
                   (o = function (e) {
                       for (var t = e.length, i = []; t--; ) i[t] = d(e[t]);
                       return l.apply(null, [S.moov, c(4294967295)].concat(i).concat(u(e)));
                   }),
                   (u = function (e) {
                       for (var t = e.length, i = []; t--; ) i[t] = b(e[t]);
                       return l.apply(null, [S.mvex].concat(i));
                   }),
                   (c = function (e) {
                       var t = new Uint8Array([
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           1,
                           0,
                           0,
                           0,
                           2,
                           0,
                           1,
                           95,
                           144,
                           (4278190080 & e) >> 24,
                           (16711680 & e) >> 16,
                           (65280 & e) >> 8,
                           255 & e,
                           0,
                           1,
                           0,
                           0,
                           1,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           1,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           1,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           64,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           255,
                           255,
                           255,
                           255,
                       ]);
                       return l(S.mvhd, t);
                   }),
                   (g = function (e) {
                       var t,
                           i,
                           n = e.samples || [],
                           r = new Uint8Array(4 + n.length);
                       for (i = 0; i < n.length; i++) (t = n[i].flags), (r[i + 4] = (t.dependsOn << 4) | (t.isDependedOn << 2) | t.hasRedundancy);
                       return l(S.sdtp, r);
                   }),
                   (v = function (e) {
                       return l(S.stbl, y(e), l(S.stts, R), l(S.stsc, D), l(S.stsz, M), l(S.stco, O));
                   }),
                   (y = function (e) {
                       return l(S.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === e.type ? N(e) : U(e));
                   }),
                   (N = function (e) {
                       var t,
                           i,
                           n = e.sps || [],
                           r = e.pps || [],
                           a = [],
                           s = [];
                       for (t = 0; t < n.length; t++) a.push((65280 & n[t].byteLength) >>> 8), a.push(255 & n[t].byteLength), (a = a.concat(Array.prototype.slice.call(n[t])));
                       for (t = 0; t < r.length; t++) s.push((65280 & r[t].byteLength) >>> 8), s.push(255 & r[t].byteLength), (s = s.concat(Array.prototype.slice.call(r[t])));
                       if (
                           ((i = [
                               S.avc1,
                               new Uint8Array([
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   1,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   (65280 & e.width) >> 8,
                                   255 & e.width,
                                   (65280 & e.height) >> 8,
                                   255 & e.height,
                                   0,
                                   72,
                                   0,
                                   0,
                                   0,
                                   72,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   1,
                                   19,
                                   118,
                                   105,
                                   100,
                                   101,
                                   111,
                                   106,
                                   115,
                                   45,
                                   99,
                                   111,
                                   110,
                                   116,
                                   114,
                                   105,
                                   98,
                                   45,
                                   104,
                                   108,
                                   115,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   0,
                                   24,
                                   17,
                                   17,
                               ]),
                               l(S.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([n.length], a, [r.length], s))),
                               l(S.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])),
                           ]),
                           e.sarRatio)
                       ) {
                           var o = e.sarRatio[0],
                               u = e.sarRatio[1];
                           i.push(l(S.pasp, new Uint8Array([(4278190080 & o) >> 24, (16711680 & o) >> 16, (65280 & o) >> 8, 255 & o, (4278190080 & u) >> 24, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u])));
                       }
                       return l.apply(null, i);
                   }),
                   (U = function (e) {
                       return l(
                           S.mp4a,
                           new Uint8Array([
                               0,
                               0,
                               0,
                               0,
                               0,
                               0,
                               0,
                               1,
                               0,
                               0,
                               0,
                               0,
                               0,
                               0,
                               0,
                               0,
                               (65280 & e.channelcount) >> 8,
                               255 & e.channelcount,
                               (65280 & e.samplesize) >> 8,
                               255 & e.samplesize,
                               0,
                               0,
                               0,
                               0,
                               (65280 & e.samplerate) >> 8,
                               255 & e.samplerate,
                               0,
                               0,
                           ]),
                           i(e)
                       );
                   }),
                   (h = function (e) {
                       var t = new Uint8Array([
                           0,
                           0,
                           0,
                           7,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           (4278190080 & e.id) >> 24,
                           (16711680 & e.id) >> 16,
                           (65280 & e.id) >> 8,
                           255 & e.id,
                           0,
                           0,
                           0,
                           0,
                           (4278190080 & e.duration) >> 24,
                           (16711680 & e.duration) >> 16,
                           (65280 & e.duration) >> 8,
                           255 & e.duration,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           1,
                           0,
                           0,
                           0,
                           0,
                           1,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           1,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           0,
                           64,
                           0,
                           0,
                           0,
                           (65280 & e.width) >> 8,
                           255 & e.width,
                           0,
                           0,
                           (65280 & e.height) >> 8,
                           255 & e.height,
                           0,
                           0,
                       ]);
                       return l(S.tkhd, t);
                   }),
                   (_ = function (e) {
                       var t, i, n, r, a, s;
                       return (
                           (t = l(S.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))),
                           (a = Math.floor(e.baseMediaDecodeTime / (1 + q))),
                           (s = Math.floor(e.baseMediaDecodeTime % (1 + q))),
                           (i = l(S.tfdt, new Uint8Array([1, 0, 0, 0, (a >>> 24) & 255, (a >>> 16) & 255, (a >>> 8) & 255, 255 & a, (s >>> 24) & 255, (s >>> 16) & 255, (s >>> 8) & 255, 255 & s]))),
                           92,
                           "audio" === e.type ? ((n = T(e, 92)), l(S.traf, t, i, n)) : ((r = g(e)), (n = T(e, r.length + 92)), l(S.traf, t, i, n, r))
                       );
                   }),
                   (d = function (e) {
                       return (e.duration = e.duration || 4294967295), l(S.trak, h(e), p(e));
                   }),
                   (b = function (e) {
                       var t = new Uint8Array([0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
                       return "video" !== e.type && (t[t.length - 1] = 0), l(S.trex, t);
                   }),
                   (j = function (e, t) {
                       var i = 0,
                           n = 0,
                           r = 0,
                           a = 0;
                       return (
                           e.length && (void 0 !== e[0].duration && (i = 1), void 0 !== e[0].size && (n = 2), void 0 !== e[0].flags && (r = 4), void 0 !== e[0].compositionTimeOffset && (a = 8)),
                           [0, 0, i | n | r | a, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
                       );
                   }),
                   (B = function (e, t) {
                       var i, n, r, a, s, o;
                       for (t += 20 + 16 * (a = e.samples || []).length, r = j(a, t), (n = new Uint8Array(r.length + 16 * a.length)).set(r), i = r.length, o = 0; o < a.length; o++)
                           (s = a[o]),
                               (n[i++] = (4278190080 & s.duration) >>> 24),
                               (n[i++] = (16711680 & s.duration) >>> 16),
                               (n[i++] = (65280 & s.duration) >>> 8),
                               (n[i++] = 255 & s.duration),
                               (n[i++] = (4278190080 & s.size) >>> 24),
                               (n[i++] = (16711680 & s.size) >>> 16),
                               (n[i++] = (65280 & s.size) >>> 8),
                               (n[i++] = 255 & s.size),
                               (n[i++] = (s.flags.isLeading << 2) | s.flags.dependsOn),
                               (n[i++] = (s.flags.isDependedOn << 6) | (s.flags.hasRedundancy << 4) | (s.flags.paddingValue << 1) | s.flags.isNonSyncSample),
                               (n[i++] = 61440 & s.flags.degradationPriority),
                               (n[i++] = 15 & s.flags.degradationPriority),
                               (n[i++] = (4278190080 & s.compositionTimeOffset) >>> 24),
                               (n[i++] = (16711680 & s.compositionTimeOffset) >>> 16),
                               (n[i++] = (65280 & s.compositionTimeOffset) >>> 8),
                               (n[i++] = 255 & s.compositionTimeOffset);
                       return l(S.trun, n);
                   }),
                   (F = function (e, t) {
                       var i, n, r, a, s, o;
                       for (t += 20 + 8 * (a = e.samples || []).length, r = j(a, t), (i = new Uint8Array(r.length + 8 * a.length)).set(r), n = r.length, o = 0; o < a.length; o++)
                           (s = a[o]),
                               (i[n++] = (4278190080 & s.duration) >>> 24),
                               (i[n++] = (16711680 & s.duration) >>> 16),
                               (i[n++] = (65280 & s.duration) >>> 8),
                               (i[n++] = 255 & s.duration),
                               (i[n++] = (4278190080 & s.size) >>> 24),
                               (i[n++] = (16711680 & s.size) >>> 16),
                               (i[n++] = (65280 & s.size) >>> 8),
                               (i[n++] = 255 & s.size);
                       return l(S.trun, i);
                   }),
                   (T = function (e, t) {
                       return "audio" === e.type ? F(e, t) : B(e, t);
                   });
               r = function () {
                   return l(S.ftyp, k, C, k, E);
               };
               function H(e, t) {
                   var i = { size: 0, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0, degradationPriority: 0, isNonSyncSample: 1 } };
                   return (
                       (i.dataOffset = t), (i.compositionTimeOffset = e.pts - e.dts), (i.duration = e.duration), (i.size = 4 * e.length), (i.size += e.byteLength), e.keyFrame && ((i.flags.dependsOn = 2), (i.flags.isNonSyncSample = 0)), i
                   );
               }
               function W(e) {
                   for (var t = []; e--; ) t.push(0);
                   return t;
               }
               function z() {
                   if (!X) {
                       var e = {
                           96e3: [ue, [227, 64], W(154), [56]],
                           88200: [ue, [231], W(170), [56]],
                           64e3: [ue, [248, 192], W(240), [56]],
                           48e3: [ue, [255, 192], W(268), [55, 148, 128], W(54), [112]],
                           44100: [ue, [255, 192], W(268), [55, 163, 128], W(84), [112]],
                           32e3: [ue, [255, 192], W(268), [55, 234], W(226), [112]],
                           24e3: [ue, [255, 192], W(268), [55, 255, 128], W(268), [111, 112], W(126), [224]],
                           16e3: [ue, [255, 192], W(268), [55, 255, 128], W(268), [111, 255], W(269), [223, 108], W(195), [1, 192]],
                           12e3: [le, W(268), [3, 127, 248], W(268), [6, 255, 240], W(268), [13, 255, 224], W(268), [27, 253, 128], W(259), [56]],
                           11025: [le, W(268), [3, 127, 248], W(268), [6, 255, 240], W(268), [13, 255, 224], W(268), [27, 255, 192], W(268), [55, 175, 128], W(108), [112]],
                           8e3: [le, W(268), [3, 121, 16], W(47), [7]],
                       };
                       X = (function (i) {
                           return Object.keys(i).reduce(function (e, t) {
                               return (
                                   (e[t] = new Uint8Array(
                                       i[t].reduce(function (e, t) {
                                           return e.concat(t);
                                       }, [])
                                   )),
                                   e
                               );
                           }, {});
                       })(e);
                   }
                   return X;
               }
               function G() {
                   G.prototype.init.call(this),
                       (this.captionPackets_ = []),
                       (this.ccStreams_ = [new Me(0, 0), new Me(0, 1), new Me(1, 0), new Me(1, 1)]),
                       this.reset(),
                       this.ccStreams_.forEach(function (e) {
                           e.on("data", this.trigger.bind(this, "data")), e.on("partialdone", this.trigger.bind(this, "partialdone")), e.on("done", this.trigger.bind(this, "done"));
                       }, this);
               }
               var X,
                   K,
                   Y,
                   $,
                   Q,
                   J = function (e) {
                       return l(S.mdat, e);
                   },
                   Z = s,
                   ee = function (e) {
                       var t,
                           i = r(),
                           n = o(e);
                       return (t = new Uint8Array(i.byteLength + n.byteLength)).set(i), t.set(n, i.byteLength), t;
                   },
                   te = function (e) {
                       var t,
                           i,
                           n = [],
                           r = [];
                       for (r.byteLength = 0, r.nalCount = 0, r.duration = 0, t = n.byteLength = 0; t < e.length; t++)
                           "access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType
                               ? (n.length && ((n.duration = i.dts - n.dts), (r.byteLength += n.byteLength), (r.nalCount += n.length), (r.duration += n.duration), r.push(n)),
                                 ((n = [i]).byteLength = i.data.byteLength),
                                 (n.pts = i.pts),
                                 (n.dts = i.dts))
                               : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0), (n.duration = i.dts - n.dts), (n.byteLength += i.data.byteLength), n.push(i));
                       return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration), (r.byteLength += n.byteLength), (r.nalCount += n.length), (r.duration += n.duration), r.push(n), r;
                   },
                   ie = function (e) {
                       var t,
                           i,
                           n = [],
                           r = [];
                       for (n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = e[0].pts, n.dts = e[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = e[0].pts, r.dts = e[0].dts, t = 0; t < e.length; t++)
                           (i = e[t]).keyFrame
                               ? (n.length && (r.push(n), (r.byteLength += n.byteLength), (r.nalCount += n.nalCount), (r.duration += n.duration)),
                                 ((n = [i]).nalCount = i.length),
                                 (n.byteLength = i.byteLength),
                                 (n.pts = i.pts),
                                 (n.dts = i.dts),
                                 (n.duration = i.duration))
                               : ((n.duration += i.duration), (n.nalCount += i.length), (n.byteLength += i.byteLength), n.push(i));
                       return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration), (r.byteLength += n.byteLength), (r.nalCount += n.nalCount), (r.duration += n.duration), r.push(n), r;
                   },
                   ne = function (e) {
                       var t;
                       return !e[0][0].keyFrame && 1 < e.length && ((t = e.shift()), (e.byteLength -= t.byteLength), (e.nalCount -= t.nalCount), (e[0][0].dts = t.dts), (e[0][0].pts = t.pts), (e[0][0].duration += t.duration)), e;
                   },
                   re = function (e, t) {
                       var i,
                           n,
                           r,
                           a,
                           s,
                           o = t || 0,
                           u = [];
                       for (i = 0; i < e.length; i++) for (a = e[i], n = 0; n < a.length; n++) (s = a[n]), (o += (r = H(s, o)).size), u.push(r);
                       return u;
                   },
                   ae = function (e) {
                       var t,
                           i,
                           n,
                           r,
                           a,
                           s,
                           o = 0,
                           u = e.byteLength,
                           l = e.nalCount,
                           c = new Uint8Array(u + 4 * l),
                           d = new DataView(c.buffer);
                       for (t = 0; t < e.length; t++) for (r = e[t], i = 0; i < r.length; i++) for (a = r[i], n = 0; n < a.length; n++) (s = a[n]), d.setUint32(o, s.data.byteLength), (o += 4), c.set(s.data, o), (o += s.data.byteLength);
                       return c;
                   },
                   se = function (e, t) {
                       var i,
                           n = [];
                       return (i = H(e, t || 0)), n.push(i), n;
                   },
                   oe = function (e) {
                       var t,
                           i,
                           n = 0,
                           r = e.byteLength,
                           a = e.length,
                           s = new Uint8Array(r + 4 * a),
                           o = new DataView(s.buffer);
                       for (t = 0; t < e.length; t++) (i = e[t]), o.setUint32(n, i.data.byteLength), (n += 4), s.set(i.data, n), (n += i.data.byteLength);
                       return s;
                   },
                   ue = [33, 16, 5, 32, 164, 27],
                   le = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
                   ce = 9e4,
                   de =
                       ((Y = function (e, t) {
                           return e * t;
                       }),
                       ($ = function (e) {
                           return e / 9e4;
                       })),
                   he =
                       ((Q = function (e, t) {
                           return e / t;
                       }),
                       function (e, t) {
                           return K(Q(e, t));
                       }),
                   pe = function (e, t) {
                       return Y($(e), t);
                   },
                   fe = function (e, t, i) {
                       return $(i ? e : e - t);
                   },
                   me = (K = function (e) {
                       return 9e4 * e;
                   }),
                   ge = de,
                   ve = function (e, t, i, n) {
                       var r,
                           a,
                           s,
                           o,
                           u,
                           l = 0,
                           c = 0,
                           d = 0;
                       if (t.length && ((r = he(e.baseMediaDecodeTime, e.samplerate)), (a = Math.ceil(ce / (e.samplerate / 1024))), i && n && ((l = r - Math.max(i, n)), (d = (c = Math.floor(l / a)) * a)), !(c < 1 || ce / 2 < d))) {
                           for (s = (s = z()[e.samplerate]) || t[0].data, o = 0; o < c; o++) (u = t[0]), t.splice(0, 0, { data: s, dts: u.dts - a, pts: u.pts - a });
                           e.baseMediaDecodeTime -= Math.floor(pe(d, e.samplerate));
                       }
                   },
                   ye = function (e, t, i) {
                       return t.minSegmentDts >= i
                           ? e
                           : ((t.minSegmentDts = 1 / 0),
                             e.filter(function (e) {
                                 return e.dts >= i && ((t.minSegmentDts = Math.min(t.minSegmentDts, e.dts)), (t.minSegmentPts = t.minSegmentDts), !0);
                             }));
                   },
                   _e = function (e) {
                       var t,
                           i,
                           n = [];
                       for (t = 0; t < e.length; t++) (i = e[t]), n.push({ size: i.data.byteLength, duration: 1024 });
                       return n;
                   },
                   be = function (e) {
                       var t,
                           i,
                           n = 0,
                           r = new Uint8Array(
                               (function (e) {
                                   var t,
                                       i = 0;
                                   for (t = 0; t < e.length; t++) i += e[t].data.byteLength;
                                   return i;
                               })(e)
                           );
                       for (t = 0; t < e.length; t++) (i = e[t]), r.set(i.data, n), (n += i.data.byteLength);
                       return r;
                   },
                   Te = ce,
                   Se = function (e) {
                       delete e.minSegmentDts, delete e.maxSegmentDts, delete e.minSegmentPts, delete e.maxSegmentPts;
                   },
                   ke = function (e, t) {
                       var i,
                           n = e.minSegmentDts;
                       return t || (n -= e.timelineStartInfo.dts), (i = e.timelineStartInfo.baseMediaDecodeTime), (i += n), (i = Math.max(0, i)), "audio" === e.type && ((i *= e.samplerate / Te), (i = Math.floor(i))), i;
                   },
                   Ce = function (e, t) {
                       "number" == typeof t.pts &&
                           (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts),
                           void 0 === e.minSegmentPts ? (e.minSegmentPts = t.pts) : (e.minSegmentPts = Math.min(e.minSegmentPts, t.pts)),
                           void 0 === e.maxSegmentPts ? (e.maxSegmentPts = t.pts) : (e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts))),
                           "number" == typeof t.dts &&
                               (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts),
                               void 0 === e.minSegmentDts ? (e.minSegmentDts = t.dts) : (e.minSegmentDts = Math.min(e.minSegmentDts, t.dts)),
                               void 0 === e.maxSegmentDts ? (e.maxSegmentDts = t.dts) : (e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts)));
                   },
                   Ee = function (e) {
                       for (var t = 0, i = { payloadType: -1, payloadSize: 0 }, n = 0, r = 0; t < e.byteLength && 128 !== e[t]; ) {
                           for (; 255 === e[t]; ) (n += 255), t++;
                           for (n += e[t++]; 255 === e[t]; ) (r += 255), t++;
                           if (((r += e[t++]), !i.payload && 4 === n)) {
                               if ("GA94" === String.fromCharCode(e[t + 3], e[t + 4], e[t + 5], e[t + 6])) {
                                   (i.payloadType = n), (i.payloadSize = r), (i.payload = e.subarray(t, t + r));
                                   break;
                               }
                               i.payload = void 0;
                           }
                           (t += r), (r = n = 0);
                       }
                       return i;
                   },
                   we = function (e) {
                       return 181 !== e.payload[0]
                           ? null
                           : 49 != ((e.payload[1] << 8) | e.payload[2])
                           ? null
                           : "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6])
                           ? null
                           : 3 !== e.payload[7]
                           ? null
                           : e.payload.subarray(8, e.payload.length - 1);
                   },
                   Ie = function (e, t) {
                       var i,
                           n,
                           r,
                           a,
                           s = [];
                       if (!(64 & t[0])) return s;
                       for (n = 31 & t[0], i = 0; i < n; i++) (a = { type: 3 & t[2 + (r = 3 * i)], pts: e }), 4 & t[2 + r] && ((a.ccData = (t[3 + r] << 8) | t[4 + r]), s.push(a));
                       return s;
                   },
                   Ae = function (e) {
                       for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2; ) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2), (a += 2)) : a++;
                       if (0 === r.length) return e;
                       (t = n - r.length), (i = new Uint8Array(t));
                       var s = 0;
                       for (a = 0; a < t; s++, a++) s === r[0] && (s++, r.shift()), (i[a] = e[s]);
                       return i;
                   },
                   xe = 4;
               ((G.prototype = new V()).push = function (e) {
                   var t, i, n;
                   if ("sei_rbsp" === e.nalUnitType && (t = Ee(e.escapedRBSP)).payloadType === xe && (i = we(t)))
                       if (e.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0;
                       else {
                           if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, void (this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
                           (n = Ie(e.pts, i)), (this.captionPackets_ = this.captionPackets_.concat(n)), this.latestDts_ !== e.dts && (this.numSameDts_ = 0), this.numSameDts_++, (this.latestDts_ = e.dts);
                       }
               }),
                   (G.prototype.flushCCStreams = function (t) {
                       this.ccStreams_.forEach(function (e) {
                           return "flush" === t ? e.flush() : e.partialFlush();
                       }, this);
                   }),
                   (G.prototype.flushStream = function (e) {
                       this.captionPackets_.length &&
                           (this.captionPackets_.forEach(function (e, t) {
                               e.presortIndex = t;
                           }),
                           this.captionPackets_.sort(function (e, t) {
                               return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts;
                           }),
                           this.captionPackets_.forEach(function (e) {
                               e.type < 2 && this.dispatchCea608Packet(e);
                           }, this),
                           (this.captionPackets_.length = 0)),
                           this.flushCCStreams(e);
                   }),
                   (G.prototype.flush = function () {
                       return this.flushStream("flush");
                   }),
                   (G.prototype.partialFlush = function () {
                       return this.flushStream("partialFlush");
                   }),
                   (G.prototype.reset = function () {
                       (this.latestDts_ = null),
                           (this.ignoreNextEqualDts_ = !1),
                           (this.numSameDts_ = 0),
                           (this.activeCea608Channel_ = [null, null]),
                           this.ccStreams_.forEach(function (e) {
                               e.reset();
                           });
                   }),
                   (G.prototype.dispatchCea608Packet = function (e) {
                       this.setsTextOrXDSActive(e) ? (this.activeCea608Channel_[e.type] = null) : this.setsChannel1Active(e) ? (this.activeCea608Channel_[e.type] = 0) : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1),
                           null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e);
                   }),
                   (G.prototype.setsChannel1Active = function (e) {
                       return 4096 == (30720 & e.ccData);
                   }),
                   (G.prototype.setsChannel2Active = function (e) {
                       return 6144 == (30720 & e.ccData);
                   }),
                   (G.prototype.setsTextOrXDSActive = function (e) {
                       return 256 == (28928 & e.ccData) || 4138 == (30974 & e.ccData) || 6186 == (30974 & e.ccData);
                   });
               function Pe(e) {
                   return null === e ? "" : ((e = Oe[e] || e), String.fromCharCode(e));
               }
               function Le() {
                   for (var e = [], t = 15; t--; ) e.push("");
                   return e;
               }
               var Oe = {
                       42: 225,
                       92: 233,
                       94: 237,
                       95: 243,
                       96: 250,
                       123: 231,
                       124: 247,
                       125: 209,
                       126: 241,
                       127: 9608,
                       304: 174,
                       305: 176,
                       306: 189,
                       307: 191,
                       308: 8482,
                       309: 162,
                       310: 163,
                       311: 9834,
                       312: 224,
                       313: 160,
                       314: 232,
                       315: 226,
                       316: 234,
                       317: 238,
                       318: 244,
                       319: 251,
                       544: 193,
                       545: 201,
                       546: 211,
                       547: 218,
                       548: 220,
                       549: 252,
                       550: 8216,
                       551: 161,
                       552: 42,
                       553: 39,
                       554: 8212,
                       555: 169,
                       556: 8480,
                       557: 8226,
                       558: 8220,
                       559: 8221,
                       560: 192,
                       561: 194,
                       562: 199,
                       563: 200,
                       564: 202,
                       565: 203,
                       566: 235,
                       567: 206,
                       568: 207,
                       569: 239,
                       570: 212,
                       571: 217,
                       572: 249,
                       573: 219,
                       574: 171,
                       575: 187,
                       800: 195,
                       801: 227,
                       802: 205,
                       803: 204,
                       804: 236,
                       805: 210,
                       806: 242,
                       807: 213,
                       808: 245,
                       809: 123,
                       810: 125,
                       811: 92,
                       812: 94,
                       813: 95,
                       814: 124,
                       815: 126,
                       816: 196,
                       817: 228,
                       818: 214,
                       819: 246,
                       820: 223,
                       821: 165,
                       822: 164,
                       823: 9474,
                       824: 197,
                       825: 229,
                       826: 216,
                       827: 248,
                       828: 9484,
                       829: 9488,
                       830: 9492,
                       831: 9496,
                   },
                   De = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
                   Me = function e(t, i) {
                       e.prototype.init.call(this),
                           (this.field_ = t || 0),
                           (this.dataChannel_ = i || 0),
                           (this.name_ = "CC" + (1 + ((this.field_ << 1) | this.dataChannel_))),
                           this.setConstants(),
                           this.reset(),
                           (this.push = function (e) {
                               var t, i, n, r, a;
                               if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
                                   if ((4096 == (61440 & t) ? (this.lastControlCode_ = t) : t !== this.PADDING_ && (this.lastControlCode_ = null), (n = t >>> 8), (r = 255 & t), t !== this.PADDING_))
                                       if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
                                       else if (t === this.END_OF_CAPTION_)
                                           (this.mode_ = "popOn"), this.clearFormatting(e.pts), this.flushDisplayed(e.pts), (i = this.displayed_), (this.displayed_ = this.nonDisplayed_), (this.nonDisplayed_ = i), (this.startPts_ = e.pts);
                                       else if (t === this.ROLL_UP_2_ROWS_) (this.rollUpRows_ = 2), this.setRollUp(e.pts);
                                       else if (t === this.ROLL_UP_3_ROWS_) (this.rollUpRows_ = 3), this.setRollUp(e.pts);
                                       else if (t === this.ROLL_UP_4_ROWS_) (this.rollUpRows_ = 4), this.setRollUp(e.pts);
                                       else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts), this.flushDisplayed(e.pts), this.shiftRowsUp_(), (this.startPts_ = e.pts);
                                       else if (t === this.BACKSPACE_)
                                           "popOn" === this.mode_ ? (this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1)) : (this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1));
                                       else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts), (this.displayed_ = Le());
                                       else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = Le();
                                       else if (t === this.RESUME_DIRECT_CAPTIONING_) "paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), (this.displayed_ = Le())), (this.mode_ = "paintOn"), (this.startPts_ = e.pts);
                                       else if (this.isSpecialCharacter(n, r)) (a = Pe((n = (3 & n) << 8) | r)), this[this.mode_](e.pts, a), this.column_++;
                                       else if (this.isExtCharacter(n, r))
                                           "popOn" === this.mode_ ? (this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1)) : (this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1)),
                                               (a = Pe((n = (3 & n) << 8) | r)),
                                               this[this.mode_](e.pts, a),
                                               this.column_++;
                                       else if (this.isMidRowCode(n, r))
                                           this.clearFormatting(e.pts), this[this.mode_](e.pts, " "), this.column_++, 14 == (14 & r) && this.addFormatting(e.pts, ["i"]), 1 == (1 & r) && this.addFormatting(e.pts, ["u"]);
                                       else if (this.isOffsetControlCode(n, r)) this.column_ += 3 & r;
                                       else if (this.isPAC(n, r)) {
                                           var s = De.indexOf(7968 & t);
                                           "rollUp" === this.mode_ && (s - this.rollUpRows_ + 1 < 0 && (s = this.rollUpRows_ - 1), this.setRollUp(e.pts, s)),
                                               s !== this.row_ && (this.clearFormatting(e.pts), (this.row_ = s)),
                                               1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]),
                                               16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)),
                                               this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(e.pts, ["i"]);
                                       } else this.isNormalChar(n) && (0 === r && (r = null), (a = Pe(n)), (a += Pe(r)), this[this.mode_](e.pts, a), (this.column_ += a.length));
                               } else this.lastControlCode_ = null;
                           });
                   };
               (Me.prototype = new V()),
                   (Me.prototype.flushDisplayed = function (e) {
                       var t = this.displayed_
                           .map(function (e) {
                               try {
                                   return e.trim();
                               } catch (e) {
                                   return "";
                               }
                           })
                           .join("\n")
                           .replace(/^\n+|\n+$/g, "");
                       t.length && this.trigger("data", { startPts: this.startPts_, endPts: e, text: t, stream: this.name_ });
                   }),
                   (Me.prototype.reset = function () {
                       (this.mode_ = "popOn"),
                           (this.topRow_ = 0),
                           (this.startPts_ = 0),
                           (this.displayed_ = Le()),
                           (this.nonDisplayed_ = Le()),
                           (this.lastControlCode_ = null),
                           (this.column_ = 0),
                           (this.row_ = 14),
                           (this.rollUpRows_ = 2),
                           (this.formatting_ = []);
                   }),
                   (Me.prototype.setConstants = function () {
                       0 === this.dataChannel_
                           ? ((this.BASE_ = 16), (this.EXT_ = 17), (this.CONTROL_ = (20 | this.field_) << 8), (this.OFFSET_ = 23))
                           : 1 === this.dataChannel_ && ((this.BASE_ = 24), (this.EXT_ = 25), (this.CONTROL_ = (28 | this.field_) << 8), (this.OFFSET_ = 31)),
                           (this.PADDING_ = 0),
                           (this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_),
                           (this.END_OF_CAPTION_ = 47 | this.CONTROL_),
                           (this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_),
                           (this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_),
                           (this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_),
                           (this.CARRIAGE_RETURN_ = 45 | this.CONTROL_),
                           (this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_),
                           (this.BACKSPACE_ = 33 | this.CONTROL_),
                           (this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_),
                           (this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_);
                   }),
                   (Me.prototype.isSpecialCharacter = function (e, t) {
                       return e === this.EXT_ && 48 <= t && t <= 63;
                   }),
                   (Me.prototype.isExtCharacter = function (e, t) {
                       return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && 32 <= t && t <= 63;
                   }),
                   (Me.prototype.isMidRowCode = function (e, t) {
                       return e === this.EXT_ && 32 <= t && t <= 47;
                   }),
                   (Me.prototype.isOffsetControlCode = function (e, t) {
                       return e === this.OFFSET_ && 33 <= t && t <= 35;
                   }),
                   (Me.prototype.isPAC = function (e, t) {
                       return e >= this.BASE_ && e < this.BASE_ + 8 && 64 <= t && t <= 127;
                   }),
                   (Me.prototype.isColorPAC = function (e) {
                       return (64 <= e && e <= 79) || (96 <= e && e <= 127);
                   }),
                   (Me.prototype.isNormalChar = function (e) {
                       return 32 <= e && e <= 127;
                   }),
                   (Me.prototype.setRollUp = function (e, t) {
                       if (("rollUp" !== this.mode_ && ((this.row_ = 14), (this.mode_ = "rollUp"), this.flushDisplayed(e), (this.nonDisplayed_ = Le()), (this.displayed_ = Le())), void 0 !== t && t !== this.row_))
                           for (var i = 0; i < this.rollUpRows_; i++) (this.displayed_[t - i] = this.displayed_[this.row_ - i]), (this.displayed_[this.row_ - i] = "");
                       void 0 === t && (t = this.row_), (this.topRow_ = t - this.rollUpRows_ + 1);
                   }),
                   (Me.prototype.addFormatting = function (e, t) {
                       this.formatting_ = this.formatting_.concat(t);
                       var i = t.reduce(function (e, t) {
                           return e + "<" + t + ">";
                       }, "");
                       this[this.mode_](e, i);
                   }),
                   (Me.prototype.clearFormatting = function (e) {
                       if (this.formatting_.length) {
                           var t = this.formatting_.reverse().reduce(function (e, t) {
                               return e + "</" + t + ">";
                           }, "");
                           (this.formatting_ = []), this[this.mode_](e, t);
                       }
                   }),
                   (Me.prototype.popOn = function (e, t) {
                       var i = this.nonDisplayed_[this.row_];
                       (i += t), (this.nonDisplayed_[this.row_] = i);
                   }),
                   (Me.prototype.rollUp = function (e, t) {
                       var i = this.displayed_[this.row_];
                       (i += t), (this.displayed_[this.row_] = i);
                   }),
                   (Me.prototype.shiftRowsUp_ = function () {
                       var e;
                       for (e = 0; e < this.topRow_; e++) this.displayed_[e] = "";
                       for (e = this.row_ + 1; e < 15; e++) this.displayed_[e] = "";
                       for (e = this.topRow_; e < this.row_; e++) this.displayed_[e] = this.displayed_[e + 1];
                       this.displayed_[this.row_] = "";
                   }),
                   (Me.prototype.paintOn = function (e, t) {
                       var i = this.displayed_[this.row_];
                       (i += t), (this.displayed_[this.row_] = i);
                   });
               function Re(e, t) {
                   var i = 1;
                   for (t < e && (i = -1); 4294967296 < Math.abs(t - e); ) e += 8589934592 * i;
                   return e;
               }
               function Ne(e) {
                   var t, i;
                   Ne.prototype.init.call(this),
                       (this.type_ = e || "shared"),
                       (this.push = function (e) {
                           ("shared" !== this.type_ && e.type !== this.type_) || (void 0 === i && (i = e.dts), (e.dts = Re(e.dts, i)), (e.pts = Re(e.pts, i)), (t = e.dts), this.trigger("data", e));
                       }),
                       (this.flush = function () {
                           (i = t), this.trigger("done");
                       }),
                       (this.endTimeline = function () {
                           this.flush(), this.trigger("endedtimeline");
                       }),
                       (this.discontinuity = function () {
                           t = i = void 0;
                       }),
                       (this.reset = function () {
                           this.discontinuity(), this.trigger("reset");
                       });
               }
               var Ue = { CaptionStream: G, Cea608Stream: Me },
                   Fe = { H264_STREAM_TYPE: 27, ADTS_STREAM_TYPE: 15, METADATA_STREAM_TYPE: 21 };
               Ne.prototype = new V();
               function Be(e, t, i) {
                   var n,
                       r = "";
                   for (n = t; n < i; n++) r += "%" + ("00" + e[n].toString(16)).slice(-2);
                   return r;
               }
               function je(e, t, i) {
                   return decodeURIComponent(Be(e, t, i));
               }
               function Ve(e) {
                   return (e[0] << 21) | (e[1] << 14) | (e[2] << 7) | e[3];
               }
               var qe,
                   He = Ne,
                   We = {
                       TXXX: function (e) {
                           var t;
                           if (3 === e.data[0]) {
                               for (t = 1; t < e.data.length; t++)
                                   if (0 === e.data[t]) {
                                       (e.description = je(e.data, 1, t)), (e.value = je(e.data, t + 1, e.data.length).replace(/\0*$/, ""));
                                       break;
                                   }
                               e.data = e.value;
                           }
                       },
                       WXXX: function (e) {
                           var t;
                           if (3 === e.data[0])
                               for (t = 1; t < e.data.length; t++)
                                   if (0 === e.data[t]) {
                                       (e.description = je(e.data, 1, t)), (e.url = je(e.data, t + 1, e.data.length));
                                       break;
                                   }
                       },
                       PRIV: function (e) {
                           var t, i;
                           for (t = 0; t < e.data.length; t++)
                               if (0 === e.data[t]) {
                                   e.owner = ((i = e.data), unescape(Be(i, 0, t)));
                                   break;
                               }
                           (e.privateData = e.data.subarray(t + 1)), (e.data = e.privateData);
                       },
                   };
               (qe = function (e) {
                   var t,
                       u = { debug: !(!e || !e.debug), descriptor: e && e.descriptor },
                       l = 0,
                       c = [],
                       d = 0;
                   if ((qe.prototype.init.call(this), (this.dispatchType = Fe.METADATA_STREAM_TYPE.toString(16)), u.descriptor))
                       for (t = 0; t < u.descriptor.length; t++) this.dispatchType += ("00" + u.descriptor[t].toString(16)).slice(-2);
                   this.push = function (e) {
                       var t, i, n, r, a;
                       if ("timed-metadata" === e.type)
                           if ((e.dataAlignmentIndicator && ((d = 0), (c.length = 0)), 0 === c.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0))))
                               u.debug;
                           else if ((c.push(e), (d += e.data.byteLength), 1 === c.length && ((l = Ve(e.data.subarray(6, 10))), (l += 10)), !(d < l))) {
                               for (t = { data: new Uint8Array(l), frames: [], pts: c[0].pts, dts: c[0].dts }, a = 0; a < l; )
                                   t.data.set(c[0].data.subarray(0, l - a), a), (a += c[0].data.byteLength), (d -= c[0].data.byteLength), c.shift();
                               (i = 10), 64 & t.data[5] && ((i += 4), (i += Ve(t.data.subarray(10, 14))), (l -= Ve(t.data.subarray(16, 20))));
                               do {
                                   if ((n = Ve(t.data.subarray(i + 4, i + 8))) < 1) return;
                                   if (
                                       (((r = { id: String.fromCharCode(t.data[i], t.data[i + 1], t.data[i + 2], t.data[i + 3]), data: t.data.subarray(i + 10, i + n + 10) }).key = r.id),
                                       We[r.id] && (We[r.id](r), "com.apple.streaming.transportStreamTimestamp" === r.owner))
                                   ) {
                                       var s = r.data,
                                           o = ((1 & s[3]) << 30) | (s[4] << 22) | (s[5] << 14) | (s[6] << 6) | (s[7] >>> 2);
                                       (o *= 4), (o += 3 & s[7]), (r.timeStamp = o), void 0 === t.pts && void 0 === t.dts && ((t.pts = r.timeStamp), (t.dts = r.timeStamp)), this.trigger("timestamp", r);
                                   }
                                   t.frames.push(r), (i += 10), (i += n);
                               } while (i < l);
                               this.trigger("data", t);
                           }
                   };
               }).prototype = new V();
               var ze,
                   Ge,
                   Xe,
                   Ke = qe,
                   Ye = He;
               ((ze = function () {
                   var r = new Uint8Array(188),
                       a = 0;
                   ze.prototype.init.call(this),
                       (this.push = function (e) {
                           var t,
                               i = 0,
                               n = 188;
                           for (a ? ((t = new Uint8Array(e.byteLength + a)).set(r.subarray(0, a)), t.set(e, a), (a = 0)) : (t = e); n < t.byteLength; )
                               71 !== t[i] || 71 !== t[n] ? (i++, n++) : (this.trigger("data", t.subarray(i, n)), (i += 188), (n += 188));
                           i < t.byteLength && (r.set(t.subarray(i), 0), (a = t.byteLength - i));
                       }),
                       (this.flush = function () {
                           188 === a && 71 === r[0] && (this.trigger("data", r), (a = 0)), this.trigger("done");
                       }),
                       (this.endTimeline = function () {
                           this.flush(), this.trigger("endedtimeline");
                       }),
                       (this.reset = function () {
                           (a = 0), this.trigger("reset");
                       });
               }).prototype = new V()),
                   ((Ge = function () {
                       var n, r, a, s;
                       Ge.prototype.init.call(this),
                           ((s = this).packetsWaitingForPmt = []),
                           (this.programMapTable = void 0),
                           (n = function (e, t) {
                               var i = 0;
                               t.payloadUnitStartIndicator && (i += e[i] + 1), "pat" === t.type ? r(e.subarray(i), t) : a(e.subarray(i), t);
                           }),
                           (r = function (e, t) {
                               (t.section_number = e[7]), (t.last_section_number = e[8]), (s.pmtPid = ((31 & e[10]) << 8) | e[11]), (t.pmtPid = s.pmtPid);
                           }),
                           (a = function (e, t) {
                               var i, n;
                               if (1 & e[5]) {
                                   for (s.programMapTable = { video: null, audio: null, "timed-metadata": {} }, i = 3 + (((15 & e[1]) << 8) | e[2]) - 4, n = 12 + (((15 & e[10]) << 8) | e[11]); n < i; ) {
                                       var r = e[n],
                                           a = ((31 & e[n + 1]) << 8) | e[n + 2];
                                       r === Fe.H264_STREAM_TYPE && null === s.programMapTable.video
                                           ? (s.programMapTable.video = a)
                                           : r === Fe.ADTS_STREAM_TYPE && null === s.programMapTable.audio
                                           ? (s.programMapTable.audio = a)
                                           : r === Fe.METADATA_STREAM_TYPE && (s.programMapTable["timed-metadata"][a] = r),
                                           (n += 5 + (((15 & e[n + 3]) << 8) | e[n + 4]));
                                   }
                                   t.programMapTable = s.programMapTable;
                               }
                           }),
                           (this.push = function (e) {
                               var t = {},
                                   i = 4;
                               if (((t.payloadUnitStartIndicator = !!(64 & e[1])), (t.pid = 31 & e[1]), (t.pid <<= 8), (t.pid |= e[2]), 1 < (48 & e[3]) >>> 4 && (i += e[i] + 1), 0 === t.pid))
                                   (t.type = "pat"), n(e.subarray(i), t), this.trigger("data", t);
                               else if (t.pid === this.pmtPid) for (t.type = "pmt", n(e.subarray(i), t), this.trigger("data", t); this.packetsWaitingForPmt.length; ) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
                               else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([e, i, t]) : this.processPes_(e, i, t);
                           }),
                           (this.processPes_ = function (e, t, i) {
                               i.pid === this.programMapTable.video
                                   ? (i.streamType = Fe.H264_STREAM_TYPE)
                                   : i.pid === this.programMapTable.audio
                                   ? (i.streamType = Fe.ADTS_STREAM_TYPE)
                                   : (i.streamType = this.programMapTable["timed-metadata"][i.pid]),
                                   (i.type = "pes"),
                                   (i.data = e.subarray(t)),
                                   this.trigger("data", i);
                           });
                   }).prototype = new V()),
                   (Ge.STREAM_TYPES = { h264: 27, adts: 15 }),
                   ((Xe = function () {
                       function n(e, t, i) {
                           var n,
                               r,
                               a = new Uint8Array(e.size),
                               s = { type: t },
                               o = 0,
                               u = 0;
                           if (e.data.length && !(e.size < 9)) {
                               for (s.trackId = e.data[0].pid, o = 0; o < e.data.length; o++) (r = e.data[o]), a.set(r.data, u), (u += r.data.byteLength);
                               !(function (e, t) {
                                   var i;
                                   (t.packetLength = 6 + ((e[4] << 8) | e[5])),
                                       (t.dataAlignmentIndicator = 0 != (4 & e[6])),
                                       192 & (i = e[7]) &&
                                           ((t.pts = ((14 & e[9]) << 27) | ((255 & e[10]) << 20) | ((254 & e[11]) << 12) | ((255 & e[12]) << 5) | ((254 & e[13]) >>> 3)),
                                           (t.pts *= 4),
                                           (t.pts += (6 & e[13]) >>> 1),
                                           (t.dts = t.pts),
                                           64 & i && ((t.dts = ((14 & e[14]) << 27) | ((255 & e[15]) << 20) | ((254 & e[16]) << 12) | ((255 & e[17]) << 5) | ((254 & e[18]) >>> 3)), (t.dts *= 4), (t.dts += (6 & e[18]) >>> 1))),
                                       (t.data = e.subarray(9 + e[8]));
                               })(a, s),
                                   (n = "video" === t || s.packetLength <= e.size),
                                   (i || n) && ((e.size = 0), (e.data.length = 0)),
                                   n && l.trigger("data", s);
                           }
                       }
                       var t,
                           l = this,
                           r = { data: [], size: 0 },
                           a = { data: [], size: 0 },
                           s = { data: [], size: 0 };
                       Xe.prototype.init.call(this),
                           (this.push = function (i) {
                               ({
                                   pat: function () {},
                                   pes: function () {
                                       var e, t;
                                       switch (i.streamType) {
                                           case Fe.H264_STREAM_TYPE:
                                               (e = r), (t = "video");
                                               break;
                                           case Fe.ADTS_STREAM_TYPE:
                                               (e = a), (t = "audio");
                                               break;
                                           case Fe.METADATA_STREAM_TYPE:
                                               (e = s), (t = "timed-metadata");
                                               break;
                                           default:
                                               return;
                                       }
                                       i.payloadUnitStartIndicator && n(e, t, !0), e.data.push(i), (e.size += i.data.byteLength);
                                   },
                                   pmt: function () {
                                       var e = { type: "metadata", tracks: [] };
                                       null !== (t = i.programMapTable).video && e.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +t.video, codec: "avc", type: "video" }),
                                           null !== t.audio && e.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +t.audio, codec: "adts", type: "audio" }),
                                           l.trigger("data", e);
                                   },
                               }[i.type]());
                           }),
                           (this.reset = function () {
                               (r.size = 0), (r.data.length = 0), (a.size = 0), (a.data.length = 0), this.trigger("reset");
                           }),
                           (this.flushStreams_ = function () {
                               n(r, "video"), n(a, "audio"), n(s, "timed-metadata");
                           }),
                           (this.flush = function () {
                               this.flushStreams_(), this.trigger("done");
                           });
                   }).prototype = new V());
               var $e = {
                   PAT_PID: 0,
                   MP2T_PACKET_LENGTH: 188,
                   TransportPacketStream: ze,
                   TransportParseStream: Ge,
                   ElementaryStream: Xe,
                   TimestampRolloverStream: Ye,
                   CaptionStream: Ue.CaptionStream,
                   Cea608Stream: Ue.Cea608Stream,
                   MetadataStream: Ke,
               };
               for (var Qe in Fe) Fe.hasOwnProperty(Qe) && ($e[Qe] = Fe[Qe]);
               var Je,
                   Ze = $e,
                   et = ce,
                   tt = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
               (Je = function (u) {
                   var l,
                       c = 0;
                   Je.prototype.init.call(this),
                       (this.push = function (e) {
                           var t,
                               i,
                               n,
                               r,
                               a,
                               s,
                               o = 0;
                           if ((u || (c = 0), "audio" === e.type))
                               for (l ? ((r = l), (l = new Uint8Array(r.byteLength + e.data.byteLength)).set(r), l.set(e.data, r.byteLength)) : (l = e.data); o + 5 < l.length; )
                                   if (255 === l[o] && 240 == (246 & l[o + 1])) {
                                       if (
                                           ((i = 2 * (1 & ~l[o + 1])),
                                           (t = ((3 & l[o + 3]) << 11) | (l[o + 4] << 3) | ((224 & l[o + 5]) >> 5)),
                                           (s = ((a = 1024 * (1 + (3 & l[o + 6]))) * et) / tt[(60 & l[o + 2]) >>> 2]),
                                           (n = o + t),
                                           l.byteLength < n)
                                       )
                                           return;
                                       if (
                                           (this.trigger("data", {
                                               pts: e.pts + c * s,
                                               dts: e.dts + c * s,
                                               sampleCount: a,
                                               audioobjecttype: 1 + ((l[o + 2] >>> 6) & 3),
                                               channelcount: ((1 & l[o + 2]) << 2) | ((192 & l[o + 3]) >>> 6),
                                               samplerate: tt[(60 & l[o + 2]) >>> 2],
                                               samplingfrequencyindex: (60 & l[o + 2]) >>> 2,
                                               samplesize: 16,
                                               data: l.subarray(o + 7 + i, n),
                                           }),
                                           c++,
                                           l.byteLength === n)
                                       )
                                           return void (l = void 0);
                                       l = l.subarray(n);
                                   } else o++;
                       }),
                       (this.flush = function () {
                           (c = 0), this.trigger("done");
                       }),
                       (this.reset = function () {
                           (l = void 0), this.trigger("reset");
                       }),
                       (this.endTimeline = function () {
                           (l = void 0), this.trigger("endedtimeline");
                       });
               }).prototype = new V();
               var it,
                   nt,
                   rt,
                   at = Je,
                   st = function (n) {
                       var r = n.byteLength,
                           a = 0,
                           s = 0;
                       (this.length = function () {
                           return 8 * r;
                       }),
                           (this.bitsAvailable = function () {
                               return 8 * r + s;
                           }),
                           (this.loadWord = function () {
                               var e = n.byteLength - r,
                                   t = new Uint8Array(4),
                                   i = Math.min(4, r);
                               if (0 === i) throw new Error("no bytes available");
                               t.set(n.subarray(e, e + i)), (a = new DataView(t.buffer).getUint32(0)), (s = 8 * i), (r -= i);
                           }),
                           (this.skipBits = function (e) {
                               var t;
                               e < s || ((e -= s), (e -= 8 * (t = Math.floor(e / 8))), (r -= t), this.loadWord()), (a <<= e), (s -= e);
                           }),
                           (this.readBits = function (e) {
                               var t = Math.min(s, e),
                                   i = a >>> (32 - t);
                               return 0 < (s -= t) ? (a <<= t) : 0 < r && this.loadWord(), 0 < (t = e - t) ? (i << t) | this.readBits(t) : i;
                           }),
                           (this.skipLeadingZeros = function () {
                               var e;
                               for (e = 0; e < s; ++e) if (0 != (a & (2147483648 >>> e))) return (a <<= e), (s -= e), e;
                               return this.loadWord(), e + this.skipLeadingZeros();
                           }),
                           (this.skipUnsignedExpGolomb = function () {
                               this.skipBits(1 + this.skipLeadingZeros());
                           }),
                           (this.skipExpGolomb = function () {
                               this.skipBits(1 + this.skipLeadingZeros());
                           }),
                           (this.readUnsignedExpGolomb = function () {
                               var e = this.skipLeadingZeros();
                               return this.readBits(e + 1) - 1;
                           }),
                           (this.readExpGolomb = function () {
                               var e = this.readUnsignedExpGolomb();
                               return 1 & e ? (1 + e) >>> 1 : -1 * (e >>> 1);
                           }),
                           (this.readBoolean = function () {
                               return 1 === this.readBits(1);
                           }),
                           (this.readUnsignedByte = function () {
                               return this.readBits(8);
                           }),
                           this.loadWord();
                   };
               ((nt = function () {
                   var n,
                       r,
                       a = 0;
                   nt.prototype.init.call(this),
                       (this.push = function (e) {
                           for (var t, i = (r = r ? ((t = new Uint8Array(r.byteLength + e.data.byteLength)).set(r), t.set(e.data, r.byteLength), t) : e.data).byteLength; a < i - 3; a++)
                               if (1 === r[a + 2]) {
                                   n = a + 5;
                                   break;
                               }
                           for (; n < i; )
                               switch (r[n]) {
                                   case 0:
                                       if (0 !== r[n - 1]) {
                                           n += 2;
                                           break;
                                       }
                                       if (0 !== r[n - 2]) {
                                           n++;
                                           break;
                                       }
                                       for (a + 3 !== n - 2 && this.trigger("data", r.subarray(a + 3, n - 2)); 1 !== r[++n] && n < i; );
                                       (a = n - 2), (n += 3);
                                       break;
                                   case 1:
                                       if (0 !== r[n - 1] || 0 !== r[n - 2]) {
                                           n += 3;
                                           break;
                                       }
                                       this.trigger("data", r.subarray(a + 3, n - 2)), (a = n - 2), (n += 3);
                                       break;
                                   default:
                                       n += 3;
                               }
                           (r = r.subarray(a)), (n -= a), (a = 0);
                       }),
                       (this.reset = function () {
                           (r = null), (a = 0), this.trigger("reset");
                       }),
                       (this.flush = function () {
                           r && 3 < r.byteLength && this.trigger("data", r.subarray(a + 3)), (r = null), (a = 0), this.trigger("done");
                       }),
                       (this.endTimeline = function () {
                           this.flush(), this.trigger("endedtimeline");
                       });
               }).prototype = new V()),
                   (rt = { 100: !0, 110: !0, 122: !0, 244: !0, 44: !0, 83: !0, 86: !0, 118: !0, 128: !0, 138: !0, 139: !0, 134: !0 }),
                   ((it = function () {
                       var i,
                           n,
                           r,
                           a,
                           s,
                           o,
                           _,
                           t = new nt();
                       it.prototype.init.call(this),
                           ((i = this).push = function (e) {
                               "video" === e.type && ((n = e.trackId), (r = e.pts), (a = e.dts), t.push(e));
                           }),
                           t.on("data", function (e) {
                               var t = { trackId: n, pts: r, dts: a, data: e };
                               switch (31 & e[0]) {
                                   case 5:
                                       t.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                                       break;
                                   case 6:
                                       (t.nalUnitType = "sei_rbsp"), (t.escapedRBSP = s(e.subarray(1)));
                                       break;
                                   case 7:
                                       (t.nalUnitType = "seq_parameter_set_rbsp"), (t.escapedRBSP = s(e.subarray(1))), (t.config = o(t.escapedRBSP));
                                       break;
                                   case 8:
                                       t.nalUnitType = "pic_parameter_set_rbsp";
                                       break;
                                   case 9:
                                       t.nalUnitType = "access_unit_delimiter_rbsp";
                               }
                               i.trigger("data", t);
                           }),
                           t.on("done", function () {
                               i.trigger("done");
                           }),
                           t.on("partialdone", function () {
                               i.trigger("partialdone");
                           }),
                           t.on("reset", function () {
                               i.trigger("reset");
                           }),
                           t.on("endedtimeline", function () {
                               i.trigger("endedtimeline");
                           }),
                           (this.flush = function () {
                               t.flush();
                           }),
                           (this.partialFlush = function () {
                               t.partialFlush();
                           }),
                           (this.reset = function () {
                               t.reset();
                           }),
                           (this.endTimeline = function () {
                               t.endTimeline();
                           }),
                           (_ = function (e, t) {
                               var i,
                                   n = 8,
                                   r = 8;
                               for (i = 0; i < e; i++) 0 !== r && (r = (n + t.readExpGolomb() + 256) % 256), (n = 0 === r ? n : r);
                           }),
                           (s = function (e) {
                               for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2; ) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2), (a += 2)) : a++;
                               if (0 === r.length) return e;
                               (t = n - r.length), (i = new Uint8Array(t));
                               var s = 0;
                               for (a = 0; a < t; s++, a++) s === r[0] && (s++, r.shift()), (i[a] = e[s]);
                               return i;
                           }),
                           (o = function (e) {
                               var t,
                                   i,
                                   n,
                                   r,
                                   a,
                                   s,
                                   o,
                                   u,
                                   l,
                                   c,
                                   d,
                                   h,
                                   p,
                                   f = 0,
                                   m = 0,
                                   g = 0,
                                   v = 0,
                                   y = 1;
                               if (
                                   ((i = (t = new st(e)).readUnsignedByte()),
                                   (r = t.readUnsignedByte()),
                                   (n = t.readUnsignedByte()),
                                   t.skipUnsignedExpGolomb(),
                                   rt[i] && (3 === (a = t.readUnsignedExpGolomb()) && t.skipBits(1), t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean()))
                               )
                                   for (d = 3 !== a ? 8 : 12, p = 0; p < d; p++) t.readBoolean() && _(p < 6 ? 16 : 64, t);
                               if ((t.skipUnsignedExpGolomb(), 0 === (s = t.readUnsignedExpGolomb()))) t.readUnsignedExpGolomb();
                               else if (1 === s) for (t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), o = t.readUnsignedExpGolomb(), p = 0; p < o; p++) t.skipExpGolomb();
                               if (
                                   (t.skipUnsignedExpGolomb(),
                                   t.skipBits(1),
                                   (u = t.readUnsignedExpGolomb()),
                                   (l = t.readUnsignedExpGolomb()),
                                   0 === (c = t.readBits(1)) && t.skipBits(1),
                                   t.skipBits(1),
                                   t.readBoolean() && ((f = t.readUnsignedExpGolomb()), (m = t.readUnsignedExpGolomb()), (g = t.readUnsignedExpGolomb()), (v = t.readUnsignedExpGolomb())),
                                   t.readBoolean() && t.readBoolean())
                               ) {
                                   switch (t.readUnsignedByte()) {
                                       case 1:
                                           h = [1, 1];
                                           break;
                                       case 2:
                                           h = [12, 11];
                                           break;
                                       case 3:
                                           h = [10, 11];
                                           break;
                                       case 4:
                                           h = [16, 11];
                                           break;
                                       case 5:
                                           h = [40, 33];
                                           break;
                                       case 6:
                                           h = [24, 11];
                                           break;
                                       case 7:
                                           h = [20, 11];
                                           break;
                                       case 8:
                                           h = [32, 11];
                                           break;
                                       case 9:
                                           h = [80, 33];
                                           break;
                                       case 10:
                                           h = [18, 11];
                                           break;
                                       case 11:
                                           h = [15, 11];
                                           break;
                                       case 12:
                                           h = [64, 33];
                                           break;
                                       case 13:
                                           h = [160, 99];
                                           break;
                                       case 14:
                                           h = [4, 3];
                                           break;
                                       case 15:
                                           h = [3, 2];
                                           break;
                                       case 16:
                                           h = [2, 1];
                                           break;
                                       case 255:
                                           h = [(t.readUnsignedByte() << 8) | t.readUnsignedByte(), (t.readUnsignedByte() << 8) | t.readUnsignedByte()];
                                   }
                                   h && (y = h[0] / h[1]);
                               }
                               return { profileIdc: i, levelIdc: n, profileCompatibility: r, width: Math.ceil((16 * (u + 1) - 2 * f - 2 * m) * y), height: (2 - c) * (l + 1) * 16 - 2 * g - 2 * v, sarRatio: h };
                           });
                   }).prototype = new V());
               function ot(e, t) {
                   var i = (e[t + 6] << 21) | (e[t + 7] << 14) | (e[t + 8] << 7) | e[t + 9];
                   return (i = 0 <= i ? i : 0), (16 & e[t + 5]) >> 4 ? i + 20 : i + 10;
               }
               var ut,
                   lt = { H264Stream: it, NalByteStream: nt },
                   ct = function (e) {
                       var t = (function e(t, i) {
                           return t.length - i < 10 || t[i] !== "I".charCodeAt(0) || t[i + 1] !== "D".charCodeAt(0) || t[i + 2] !== "3".charCodeAt(0) ? i : e(t, (i += ot(t, i)));
                       })(e, 0);
                       return e.length >= t + 2 && 255 == (255 & e[t]) && 240 == (240 & e[t + 1]) && 16 == (22 & e[t + 1]);
                   },
                   dt = ot,
                   ht = function (e, t) {
                       var i = (224 & e[t + 5]) >> 5,
                           n = e[t + 4] << 3;
                       return (6144 & e[t + 3]) | n | i;
                   };
               (ut = function () {
                   var o = new Uint8Array(),
                       u = 0;
                   ut.prototype.init.call(this),
                       (this.setTimestamp = function (e) {
                           u = e;
                       }),
                       (this.push = function (e) {
                           var t,
                               i,
                               n,
                               r,
                               a = 0,
                               s = 0;
                           for (o.length ? ((r = o.length), (o = new Uint8Array(e.byteLength + r)).set(o.subarray(0, r)), o.set(e, r)) : (o = e); 3 <= o.length - s; )
                               if (o[s] !== "I".charCodeAt(0) || o[s + 1] !== "D".charCodeAt(0) || o[s + 2] !== "3".charCodeAt(0))
                                   if (255 != (255 & o[s]) || 240 != (240 & o[s + 1])) s++;
                                   else {
                                       if (o.length - s < 7) break;
                                       if (s + (a = ht(o, s)) > o.length) break;
                                       (n = { type: "audio", data: o.subarray(s, s + a), pts: u, dts: u }), this.trigger("data", n), (s += a);
                                   }
                               else {
                                   if (o.length - s < 10) break;
                                   if (s + (a = dt(o, s)) > o.length) break;
                                   (i = { type: "timed-metadata", data: o.subarray(s, s + a) }), this.trigger("data", i), (s += a);
                               }
                           (t = o.length - s), (o = 0 < t ? o.subarray(s) : new Uint8Array());
                       }),
                       (this.reset = function () {
                           (o = new Uint8Array()), this.trigger("reset");
                       }),
                       (this.endTimeline = function () {
                           (o = new Uint8Array()), this.trigger("endedtimeline");
                       });
               }).prototype = new V();
               function pt(e, t) {
                   var i;
                   if (e.length !== t.length) return !1;
                   for (i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
                   return !0;
               }
               function ft(e, t, i, n, r, a) {
                   return { start: { dts: e, pts: e + (i - t) }, end: { dts: e + (n - t), pts: e + (r - i) }, prependedContentDuration: a, baseMediaDecodeTime: e };
               }
               var mt,
                   gt,
                   vt,
                   yt,
                   _t = ut,
                   bt = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
                   Tt = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"],
                   St = lt.H264Stream,
                   kt = ct,
                   Ct = ce;
               ((gt = function (a, s) {
                   var o = [],
                       u = 0,
                       l = 0,
                       c = 0,
                       d = 1 / 0;
                   (s = s || {}),
                       gt.prototype.init.call(this),
                       (this.push = function (t) {
                           Ce(a, t),
                               a &&
                                   bt.forEach(function (e) {
                                       a[e] = t[e];
                                   }),
                               o.push(t);
                       }),
                       (this.setEarliestDts = function (e) {
                           l = e;
                       }),
                       (this.setVideoBaseMediaDecodeTime = function (e) {
                           d = e;
                       }),
                       (this.setAudioAppendStart = function (e) {
                           c = e;
                       }),
                       (this.flush = function () {
                           var e, t, i, n, r;
                           0 !== o.length &&
                               ((e = ye(o, a, l)),
                               (a.baseMediaDecodeTime = ke(a, s.keepOriginalTimestamps)),
                               ve(a, e, c, d),
                               (a.samples = _e(e)),
                               (i = J(be(e))),
                               (o = []),
                               (t = Z(u, [a])),
                               (n = new Uint8Array(t.byteLength + i.byteLength)),
                               u++,
                               n.set(t),
                               n.set(i, t.byteLength),
                               Se(a),
                               (r = Math.ceil((1024 * Ct) / a.samplerate)),
                               e.length && this.trigger("timingInfo", { start: e[0].pts, end: e[0].pts + e.length * r }),
                               this.trigger("data", { track: a, boxes: n })),
                               this.trigger("done", "AudioSegmentStream");
                       }),
                       (this.reset = function () {
                           Se(a), (o = []), this.trigger("reset");
                       });
               }).prototype = new V()),
                   ((mt = function (c, d) {
                       var t,
                           i,
                           h = 0,
                           p = [],
                           f = [];
                       (d = d || {}),
                           mt.prototype.init.call(this),
                           delete c.minPTS,
                           (this.gopCache_ = []),
                           (this.push = function (e) {
                               Ce(c, e),
                                   "seq_parameter_set_rbsp" !== e.nalUnitType ||
                                       t ||
                                       ((t = e.config),
                                       (c.sps = [e.data]),
                                       Tt.forEach(function (e) {
                                           c[e] = t[e];
                                       }, this)),
                                   "pic_parameter_set_rbsp" !== e.nalUnitType || i || ((i = e.data), (c.pps = [e.data])),
                                   p.push(e);
                           }),
                           (this.flush = function () {
                               for (var e, t, i, n, r, a, s, o, u = 0; p.length && "access_unit_delimiter_rbsp" !== p[0].nalUnitType; ) p.shift();
                               if (0 === p.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                               if (
                                   ((e = te(p)),
                                   (i = ie(e))[0][0].keyFrame ||
                                       ((t = this.getGopForFusion_(p[0], c))
                                           ? ((u = t.duration), i.unshift(t), (i.byteLength += t.byteLength), (i.nalCount += t.nalCount), (i.pts = t.pts), (i.dts = t.dts), (i.duration += t.duration))
                                           : (i = ne(i))),
                                   f.length)
                               ) {
                                   var l;
                                   if (!(l = d.alignGopsAtEnd ? this.alignGopsAtEnd_(i) : this.alignGopsAtStart_(i)))
                                       return (
                                           this.gopCache_.unshift({ gop: i.pop(), pps: c.pps, sps: c.sps }),
                                           (this.gopCache_.length = Math.min(6, this.gopCache_.length)),
                                           (p = []),
                                           this.resetStream_(),
                                           void this.trigger("done", "VideoSegmentStream")
                                       );
                                   Se(c), (i = l);
                               }
                               Ce(c, i),
                                   (c.samples = re(i)),
                                   (r = J(ae(i))),
                                   (c.baseMediaDecodeTime = ke(c, d.keepOriginalTimestamps)),
                                   this.trigger(
                                       "processedGopsInfo",
                                       i.map(function (e) {
                                           return { pts: e.pts, dts: e.dts, byteLength: e.byteLength };
                                       })
                                   ),
                                   (s = i[0]),
                                   (o = i[i.length - 1]),
                                   this.trigger("segmentTimingInfo", ft(c.baseMediaDecodeTime, s.dts, s.pts, o.dts + o.duration, o.pts + o.duration, u)),
                                   this.trigger("timingInfo", { start: i[0].pts, end: i[i.length - 1].pts + i[i.length - 1].duration }),
                                   this.gopCache_.unshift({ gop: i.pop(), pps: c.pps, sps: c.sps }),
                                   (this.gopCache_.length = Math.min(6, this.gopCache_.length)),
                                   (p = []),
                                   this.trigger("baseMediaDecodeTime", c.baseMediaDecodeTime),
                                   this.trigger("timelineStartInfo", c.timelineStartInfo),
                                   (n = Z(h, [c])),
                                   (a = new Uint8Array(n.byteLength + r.byteLength)),
                                   h++,
                                   a.set(n),
                                   a.set(r, n.byteLength),
                                   this.trigger("data", { track: c, boxes: a }),
                                   this.resetStream_(),
                                   this.trigger("done", "VideoSegmentStream");
                           }),
                           (this.reset = function () {
                               this.resetStream_(), (p = []), (this.gopCache_.length = 0), (f.length = 0), this.trigger("reset");
                           }),
                           (this.resetStream_ = function () {
                               Se(c), (i = t = void 0);
                           }),
                           (this.getGopForFusion_ = function (e) {
                               var t,
                                   i,
                                   n,
                                   r,
                                   a,
                                   s = 1 / 0;
                               for (a = 0; a < this.gopCache_.length; a++)
                                   (n = (r = this.gopCache_[a]).gop),
                                       c.pps &&
                                           pt(c.pps[0], r.pps[0]) &&
                                           c.sps &&
                                           pt(c.sps[0], r.sps[0]) &&
                                           (n.dts < c.timelineStartInfo.dts || (-1e4 <= (t = e.dts - n.dts - n.duration) && t <= 45e3 && (!i || t < s) && ((i = r), (s = t))));
                               return i ? i.gop : null;
                           }),
                           (this.alignGopsAtStart_ = function (e) {
                               var t, i, n, r, a, s, o, u;
                               for (a = e.byteLength, s = e.nalCount, o = e.duration, t = i = 0; t < f.length && i < e.length && ((n = f[t]), (r = e[i]), n.pts !== r.pts); )
                                   r.pts > n.pts ? t++ : (i++, (a -= r.byteLength), (s -= r.nalCount), (o -= r.duration));
                               return 0 === i ? e : i === e.length ? null : (((u = e.slice(i)).byteLength = a), (u.duration = o), (u.nalCount = s), (u.pts = u[0].pts), (u.dts = u[0].dts), u);
                           }),
                           (this.alignGopsAtEnd_ = function (e) {
                               var t, i, n, r, a, s, o;
                               for (t = f.length - 1, i = e.length - 1, a = null, s = !1; 0 <= t && 0 <= i; ) {
                                   if (((n = f[t]), (r = e[i]), n.pts === r.pts)) {
                                       s = !0;
                                       break;
                                   }
                                   n.pts > r.pts ? t-- : (t === f.length - 1 && (a = i), i--);
                               }
                               if (!s && null === a) return null;
                               if (0 === (o = s ? i : a)) return e;
                               var u = e.slice(o),
                                   l = u.reduce(
                                       function (e, t) {
                                           return (e.byteLength += t.byteLength), (e.duration += t.duration), (e.nalCount += t.nalCount), e;
                                       },
                                       { byteLength: 0, duration: 0, nalCount: 0 }
                                   );
                               return (u.byteLength = l.byteLength), (u.duration = l.duration), (u.nalCount = l.nalCount), (u.pts = u[0].pts), (u.dts = u[0].dts), u;
                           }),
                           (this.alignGopsWith = function (e) {
                               f = e;
                           });
                   }).prototype = new V()),
                   ((yt = function (e, t) {
                       (this.numberOfTracks = 0),
                           (this.metadataStream = t),
                           "undefined" != typeof (e = e || {}).remux ? (this.remuxTracks = !!e.remux) : (this.remuxTracks = !0),
                           "boolean" == typeof e.keepOriginalTimestamps ? (this.keepOriginalTimestamps = e.keepOriginalTimestamps) : (this.keepOriginalTimestamps = !1),
                           (this.pendingTracks = []),
                           (this.videoTrack = null),
                           (this.pendingBoxes = []),
                           (this.pendingCaptions = []),
                           (this.pendingMetadata = []),
                           (this.pendingBytes = 0),
                           (this.emittedTracks = 0),
                           yt.prototype.init.call(this),
                           (this.push = function (e) {
                               return e.text
                                   ? this.pendingCaptions.push(e)
                                   : e.frames
                                   ? this.pendingMetadata.push(e)
                                   : (this.pendingTracks.push(e.track),
                                     (this.pendingBytes += e.boxes.byteLength),
                                     "video" === e.track.type && ((this.videoTrack = e.track), this.pendingBoxes.push(e.boxes)),
                                     void ("audio" === e.track.type && ((this.audioTrack = e.track), this.pendingBoxes.unshift(e.boxes))));
                           });
                   }).prototype = new V()),
                   (yt.prototype.flush = function (e) {
                       var t,
                           i,
                           n,
                           r,
                           a = 0,
                           s = { captions: [], captionStreams: {}, metadata: [], info: {} },
                           o = 0;
                       if (this.pendingTracks.length < this.numberOfTracks) {
                           if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e) return;
                           if (this.remuxTracks) return;
                           if (0 === this.pendingTracks.length) return this.emittedTracks++, void (this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), (this.emittedTracks = 0)));
                       }
                       if (
                           (this.videoTrack
                               ? ((o = this.videoTrack.timelineStartInfo.pts),
                                 Tt.forEach(function (e) {
                                     s.info[e] = this.videoTrack[e];
                                 }, this))
                               : this.audioTrack &&
                                 ((o = this.audioTrack.timelineStartInfo.pts),
                                 bt.forEach(function (e) {
                                     s.info[e] = this.audioTrack[e];
                                 }, this)),
                           this.videoTrack || this.audioTrack)
                       ) {
                           for (
                               1 === this.pendingTracks.length ? (s.type = this.pendingTracks[0].type) : (s.type = "combined"),
                                   this.emittedTracks += this.pendingTracks.length,
                                   n = ee(this.pendingTracks),
                                   s.initSegment = new Uint8Array(n.byteLength),
                                   s.initSegment.set(n),
                                   s.data = new Uint8Array(this.pendingBytes),
                                   r = 0;
                               r < this.pendingBoxes.length;
                               r++
                           )
                               s.data.set(this.pendingBoxes[r], a), (a += this.pendingBoxes[r].byteLength);
                           for (r = 0; r < this.pendingCaptions.length; r++)
                               ((t = this.pendingCaptions[r]).startTime = fe(t.startPts, o, this.keepOriginalTimestamps)), (t.endTime = fe(t.endPts, o, this.keepOriginalTimestamps)), (s.captionStreams[t.stream] = !0), s.captions.push(t);
                           for (r = 0; r < this.pendingMetadata.length; r++) ((i = this.pendingMetadata[r]).cueTime = fe(i.pts, o, this.keepOriginalTimestamps)), s.metadata.push(i);
                           for (
                               s.metadata.dispatchType = this.metadataStream.dispatchType,
                                   this.pendingTracks.length = 0,
                                   this.videoTrack = null,
                                   this.pendingBoxes.length = 0,
                                   this.pendingCaptions.length = 0,
                                   this.pendingBytes = 0,
                                   this.pendingMetadata.length = 0,
                                   this.trigger("data", s),
                                   r = 0;
                               r < s.captions.length;
                               r++
                           )
                               (t = s.captions[r]), this.trigger("caption", t);
                           for (r = 0; r < s.metadata.length; r++) (i = s.metadata[r]), this.trigger("id3Frame", i);
                       }
                       this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), (this.emittedTracks = 0));
                   }),
                   (yt.prototype.setRemux = function (e) {
                       this.remuxTracks = e;
                   }),
                   ((vt = function (n) {
                       var r,
                           a,
                           s = this,
                           i = !0;
                       vt.prototype.init.call(this),
                           (n = n || {}),
                           (this.baseMediaDecodeTime = n.baseMediaDecodeTime || 0),
                           (this.transmuxPipeline_ = {}),
                           (this.setupAacPipeline = function () {
                               var t = {};
                               ((this.transmuxPipeline_ = t).type = "aac"),
                                   (t.metadataStream = new Ze.MetadataStream()),
                                   (t.aacStream = new _t()),
                                   (t.audioTimestampRolloverStream = new Ze.TimestampRolloverStream("audio")),
                                   (t.timedMetadataTimestampRolloverStream = new Ze.TimestampRolloverStream("timed-metadata")),
                                   (t.adtsStream = new at()),
                                   (t.coalesceStream = new yt(n, t.metadataStream)),
                                   (t.headOfPipeline = t.aacStream),
                                   t.aacStream.pipe(t.audioTimestampRolloverStream).pipe(t.adtsStream),
                                   t.aacStream.pipe(t.timedMetadataTimestampRolloverStream).pipe(t.metadataStream).pipe(t.coalesceStream),
                                   t.metadataStream.on("timestamp", function (e) {
                                       t.aacStream.setTimestamp(e.timeStamp);
                                   }),
                                   t.aacStream.on("data", function (e) {
                                       ("timed-metadata" !== e.type && "audio" !== e.type) ||
                                           t.audioSegmentStream ||
                                           ((a = a || { timelineStartInfo: { baseMediaDecodeTime: s.baseMediaDecodeTime }, codec: "adts", type: "audio" }),
                                           t.coalesceStream.numberOfTracks++,
                                           (t.audioSegmentStream = new gt(a, n)),
                                           t.audioSegmentStream.on("timingInfo", s.trigger.bind(s, "audioTimingInfo")),
                                           t.adtsStream.pipe(t.audioSegmentStream).pipe(t.coalesceStream),
                                           s.trigger("trackinfo", { hasAudio: !!a, hasVideo: !!r }));
                                   }),
                                   t.coalesceStream.on("data", this.trigger.bind(this, "data")),
                                   t.coalesceStream.on("done", this.trigger.bind(this, "done"));
                           }),
                           (this.setupTsPipeline = function () {
                               var i = {};
                               ((this.transmuxPipeline_ = i).type = "ts"),
                                   (i.metadataStream = new Ze.MetadataStream()),
                                   (i.packetStream = new Ze.TransportPacketStream()),
                                   (i.parseStream = new Ze.TransportParseStream()),
                                   (i.elementaryStream = new Ze.ElementaryStream()),
                                   (i.timestampRolloverStream = new Ze.TimestampRolloverStream()),
                                   (i.adtsStream = new at()),
                                   (i.h264Stream = new St()),
                                   (i.captionStream = new Ze.CaptionStream()),
                                   (i.coalesceStream = new yt(n, i.metadataStream)),
                                   (i.headOfPipeline = i.packetStream),
                                   i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream).pipe(i.timestampRolloverStream),
                                   i.timestampRolloverStream.pipe(i.h264Stream),
                                   i.timestampRolloverStream.pipe(i.adtsStream),
                                   i.timestampRolloverStream.pipe(i.metadataStream).pipe(i.coalesceStream),
                                   i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream),
                                   i.elementaryStream.on("data", function (e) {
                                       var t;
                                       if ("metadata" === e.type) {
                                           for (t = e.tracks.length; t--; )
                                               r || "video" !== e.tracks[t].type
                                                   ? a || "audio" !== e.tracks[t].type || ((a = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime)
                                                   : ((r = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime);
                                           r &&
                                               !i.videoSegmentStream &&
                                               (i.coalesceStream.numberOfTracks++,
                                               (i.videoSegmentStream = new mt(r, n)),
                                               i.videoSegmentStream.on("timelineStartInfo", function (e) {
                                                   a && !n.keepOriginalTimestamps && ((a.timelineStartInfo = e), i.audioSegmentStream.setEarliestDts(e.dts - s.baseMediaDecodeTime));
                                               }),
                                               i.videoSegmentStream.on("processedGopsInfo", s.trigger.bind(s, "gopInfo")),
                                               i.videoSegmentStream.on("segmentTimingInfo", s.trigger.bind(s, "videoSegmentTimingInfo")),
                                               i.videoSegmentStream.on("baseMediaDecodeTime", function (e) {
                                                   a && i.audioSegmentStream.setVideoBaseMediaDecodeTime(e);
                                               }),
                                               i.videoSegmentStream.on("timingInfo", s.trigger.bind(s, "videoTimingInfo")),
                                               i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)),
                                               a &&
                                                   !i.audioSegmentStream &&
                                                   (i.coalesceStream.numberOfTracks++,
                                                   (i.audioSegmentStream = new gt(a, n)),
                                                   i.audioSegmentStream.on("timingInfo", s.trigger.bind(s, "audioTimingInfo")),
                                                   i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream)),
                                               s.trigger("trackinfo", { hasAudio: !!a, hasVideo: !!r });
                                       }
                                   }),
                                   i.coalesceStream.on("data", this.trigger.bind(this, "data")),
                                   i.coalesceStream.on("id3Frame", function (e) {
                                       (e.dispatchType = i.metadataStream.dispatchType), s.trigger("id3Frame", e);
                                   }),
                                   i.coalesceStream.on("caption", this.trigger.bind(this, "caption")),
                                   i.coalesceStream.on("done", this.trigger.bind(this, "done"));
                           }),
                           (this.setBaseMediaDecodeTime = function (e) {
                               var t = this.transmuxPipeline_;
                               n.keepOriginalTimestamps || (this.baseMediaDecodeTime = e),
                                   a && ((a.timelineStartInfo.dts = void 0), (a.timelineStartInfo.pts = void 0), Se(a), t.audioTimestampRolloverStream && t.audioTimestampRolloverStream.discontinuity()),
                                   r && (t.videoSegmentStream && (t.videoSegmentStream.gopCache_ = []), (r.timelineStartInfo.dts = void 0), (r.timelineStartInfo.pts = void 0), Se(r), t.captionStream.reset()),
                                   t.timestampRolloverStream && t.timestampRolloverStream.discontinuity();
                           }),
                           (this.setAudioAppendStart = function (e) {
                               a && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e);
                           }),
                           (this.setRemux = function (e) {
                               var t = this.transmuxPipeline_;
                               (n.remux = e), t && t.coalesceStream && t.coalesceStream.setRemux(e);
                           }),
                           (this.alignGopsWith = function (e) {
                               r && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e);
                           }),
                           (this.push = function (e) {
                               if (i) {
                                   var t = kt(e);
                                   t && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), (i = !1);
                               }
                               this.transmuxPipeline_.headOfPipeline.push(e);
                           }),
                           (this.flush = function () {
                               (i = !0), this.transmuxPipeline_.headOfPipeline.flush();
                           }),
                           (this.endTimeline = function () {
                               this.transmuxPipeline_.headOfPipeline.endTimeline();
                           }),
                           (this.reset = function () {
                               this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset();
                           }),
                           (this.resetCaptions = function () {
                               this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset();
                           });
                   }).prototype = new V());
               function Et(a, s) {
                   var o = [],
                       u = 0,
                       l = 0,
                       c = 0,
                       d = 1 / 0,
                       h = null,
                       p = null;
                   (s = s || {}),
                       Et.prototype.init.call(this),
                       (this.push = function (t) {
                           Ce(a, t),
                               a &&
                                   bt.forEach(function (e) {
                                       a[e] = t[e];
                                   }),
                               o.push(t);
                       }),
                       (this.setEarliestDts = function (e) {
                           l = e;
                       }),
                       (this.setVideoBaseMediaDecodeTime = function (e) {
                           d = e;
                       }),
                       (this.setAudioAppendStart = function (e) {
                           c = e;
                       }),
                       (this.processFrames_ = function () {
                           var e, t, i, n, r;
                           0 !== o.length &&
                               0 !== (e = ye(o, a, l)).length &&
                               ((a.baseMediaDecodeTime = ke(a, s.keepOriginalTimestamps)),
                               ve(a, e, c, d),
                               (a.samples = _e(e)),
                               (i = J(be(e))),
                               (o = []),
                               (t = Z(u, [a])),
                               u++,
                               (a.initSegment = ee([a])),
                               (n = new Uint8Array(t.byteLength + i.byteLength)).set(t),
                               n.set(i, t.byteLength),
                               Se(a),
                               null === h && (p = h = e[0].pts),
                               (p += e.length * ((1024 * At) / a.samplerate)),
                               (r = { start: h }),
                               this.trigger("timingInfo", r),
                               this.trigger("data", { track: a, boxes: n }));
                       }),
                       (this.flush = function () {
                           this.processFrames_(), this.trigger("timingInfo", { start: h, end: p }), this.resetTiming_(), this.trigger("done", "AudioSegmentStream");
                       }),
                       (this.partialFlush = function () {
                           this.processFrames_(), this.trigger("partialdone", "AudioSegmentStream");
                       }),
                       (this.endTimeline = function () {
                           this.flush(), this.trigger("endedtimeline", "AudioSegmentStream");
                       }),
                       (this.resetTiming_ = function () {
                           Se(a), (p = h = null);
                       }),
                       (this.reset = function () {
                           this.resetTiming_(), (o = []), this.trigger("reset");
                       });
               }
               var wt = { Transmuxer: vt, VideoSegmentStream: mt, AudioSegmentStream: gt, AUDIO_PROPERTIES: bt, VIDEO_PROPERTIES: Tt, generateVideoSegmentTimingInfo: ft }.Transmuxer,
                   It = { Adts: at, h264: lt },
                   At = ce;
               Et.prototype = new V();
               function xt(o, u) {
                   var t,
                       i,
                       l,
                       c = 0,
                       d = [],
                       h = [],
                       p = null,
                       f = null,
                       m = !0;
                   (u = u || {}),
                       xt.prototype.init.call(this),
                       (this.push = function (e) {
                           Ce(o, e),
                               "undefined" == typeof o.timelineStartInfo.dts && (o.timelineStartInfo.dts = e.dts),
                               "seq_parameter_set_rbsp" !== e.nalUnitType ||
                                   t ||
                                   ((t = e.config),
                                   (o.sps = [e.data]),
                                   Tt.forEach(function (e) {
                                       o[e] = t[e];
                                   }, this)),
                               "pic_parameter_set_rbsp" !== e.nalUnitType || i || ((i = e.data), (o.pps = [e.data])),
                               d.push(e);
                       }),
                       (this.processNals_ = function (e) {
                           var t;
                           for (d = h.concat(d); d.length && "access_unit_delimiter_rbsp" !== d[0].nalUnitType; ) d.shift();
                           if (0 !== d.length) {
                               var i = te(d);
                               if (i.length)
                                   if (((h = i[i.length - 1]), e && (i.pop(), (i.duration -= h.duration), (i.nalCount -= h.length), (i.byteLength -= h.byteLength)), i.length)) {
                                       if ((this.trigger("timelineStartInfo", o.timelineStartInfo), m)) {
                                           if (!(l = ie(i))[0][0].keyFrame) {
                                               if (!(l = ne(l))[0][0].keyFrame) return (d = [].concat.apply([], i).concat(h)), void (h = []);
                                               (i = [].concat.apply([], l)).duration = l.duration;
                                           }
                                           m = !1;
                                       }
                                       for (null === p && ((p = i[0].pts), (f = p)), f += i.duration, this.trigger("timingInfo", { start: p, end: f }), t = 0; t < i.length; t++) {
                                           var n = i[t];
                                           o.samples = se(n);
                                           var r = J(oe(n));
                                           Se(o), Ce(o, n), (o.baseMediaDecodeTime = ke(o, u.keepOriginalTimestamps));
                                           var a = Z(c, [o]);
                                           c++, (o.initSegment = ee([o]));
                                           var s = new Uint8Array(a.byteLength + r.byteLength);
                                           s.set(a), s.set(r, a.byteLength), this.trigger("data", { track: o, boxes: s, sequence: c, videoFrameDts: n.dts, videoFramePts: n.pts });
                                       }
                                       d = [];
                                   } else d = [];
                           }
                       }),
                       (this.resetTimingAndConfig_ = function () {
                           (i = t = void 0), (f = p = null);
                       }),
                       (this.partialFlush = function () {
                           this.processNals_(!0), this.trigger("partialdone", "VideoSegmentStream");
                       }),
                       (this.flush = function () {
                           this.processNals_(!1), this.resetTimingAndConfig_(), this.trigger("done", "VideoSegmentStream");
                       }),
                       (this.endTimeline = function () {
                           this.flush(), this.trigger("endedtimeline", "VideoSegmentStream");
                       }),
                       (this.reset = function () {
                           this.resetTimingAndConfig_(), (h = []), (d = []), (m = !0), this.trigger("reset");
                       });
               }
               var Pt = Et;
               xt.prototype = new V();
               function Lt(e) {
                   return (e.prototype = new V()), e.prototype.init.call(e), e;
               }
               function Ot(t, i) {
                   t.on("data", i.trigger.bind(i, "data")),
                       t.on("done", i.trigger.bind(i, "done")),
                       t.on("partialdone", i.trigger.bind(i, "partialdone")),
                       t.on("endedtimeline", i.trigger.bind(i, "endedtimeline")),
                       t.on("audioTimingInfo", i.trigger.bind(i, "audioTimingInfo")),
                       t.on("videoTimingInfo", i.trigger.bind(i, "videoTimingInfo")),
                       t.on("trackinfo", i.trigger.bind(i, "trackinfo")),
                       t.on("id3Frame", function (e) {
                           (e.dispatchType = t.metadataStream.dispatchType), (e.cueTime = de(e.pts)), i.trigger("id3Frame", e);
                       }),
                       t.on("caption", function (e) {
                           i.trigger("caption", e);
                       });
               }
               function Dt(i) {
                   var n = null,
                       r = !0;
                   (i = i || {}),
                       Dt.prototype.init.call(this),
                       (i.baseMediaDecodeTime = i.baseMediaDecodeTime || 0),
                       (this.push = function (e) {
                           if (r) {
                               var t = Rt(e);
                               !t || (n && "aac" === n.type)
                                   ? t ||
                                     (n && "ts" === n.type) ||
                                     ((n = (function (i) {
                                         var n = {
                                             type: "ts",
                                             tracks: { audio: null, video: null },
                                             packet: new Ze.TransportPacketStream(),
                                             parse: new Ze.TransportParseStream(),
                                             elementary: new Ze.ElementaryStream(),
                                             timestampRollover: new Ze.TimestampRolloverStream(),
                                             adts: new It.Adts(),
                                             h264: new It.h264.H264Stream(),
                                             captionStream: new Ze.CaptionStream(),
                                             metadataStream: new Ze.MetadataStream(),
                                         };
                                         return (
                                             (n.headOfPipeline = n.packet),
                                             n.packet.pipe(n.parse).pipe(n.elementary).pipe(n.timestampRollover),
                                             n.timestampRollover.pipe(n.h264),
                                             n.h264.pipe(n.captionStream),
                                             n.timestampRollover.pipe(n.metadataStream),
                                             n.timestampRollover.pipe(n.adts),
                                             n.elementary.on("data", function (e) {
                                                 if ("metadata" === e.type) {
                                                     for (var t = 0; t < e.tracks.length; t++)
                                                         n.tracks[e.tracks[t].type] || ((n.tracks[e.tracks[t].type] = e.tracks[t]), (n.tracks[e.tracks[t].type].timelineStartInfo.baseMediaDecodeTime = i.baseMediaDecodeTime));
                                                     n.tracks.video &&
                                                         !n.videoSegmentStream &&
                                                         ((n.videoSegmentStream = new Mt(n.tracks.video, i)),
                                                         n.videoSegmentStream.on("timelineStartInfo", function (e) {
                                                             n.tracks.audio && !i.keepOriginalTimestamps && n.audioSegmentStream.setEarliestDts(e.dts - i.baseMediaDecodeTime);
                                                         }),
                                                         n.videoSegmentStream.on("timingInfo", n.trigger.bind(n, "videoTimingInfo")),
                                                         n.videoSegmentStream.on("data", function (e) {
                                                             n.trigger("data", { type: "video", data: e });
                                                         }),
                                                         n.videoSegmentStream.on("done", n.trigger.bind(n, "done")),
                                                         n.videoSegmentStream.on("partialdone", n.trigger.bind(n, "partialdone")),
                                                         n.videoSegmentStream.on("endedtimeline", n.trigger.bind(n, "endedtimeline")),
                                                         n.h264.pipe(n.videoSegmentStream)),
                                                         n.tracks.audio &&
                                                             !n.audioSegmentStream &&
                                                             ((n.audioSegmentStream = new Pt(n.tracks.audio, i)),
                                                             n.audioSegmentStream.on("data", function (e) {
                                                                 n.trigger("data", { type: "audio", data: e });
                                                             }),
                                                             n.audioSegmentStream.on("done", n.trigger.bind(n, "done")),
                                                             n.audioSegmentStream.on("partialdone", n.trigger.bind(n, "partialdone")),
                                                             n.audioSegmentStream.on("endedtimeline", n.trigger.bind(n, "endedtimeline")),
                                                             n.audioSegmentStream.on("timingInfo", n.trigger.bind(n, "audioTimingInfo")),
                                                             n.adts.pipe(n.audioSegmentStream)),
                                                         n.trigger("trackinfo", { hasAudio: !!n.tracks.audio, hasVideo: !!n.tracks.video });
                                                 }
                                             }),
                                             n.captionStream.on("data", function (e) {
                                                 var t;
                                                 (t = (n.tracks.video && n.tracks.video.timelineStartInfo.pts) || 0),
                                                     (e.startTime = fe(e.startPts, t, i.keepOriginalTimestamps)),
                                                     (e.endTime = fe(e.endPts, t, i.keepOriginalTimestamps)),
                                                     n.trigger("caption", e);
                                             }),
                                             (n = Lt(n)).metadataStream.on("data", n.trigger.bind(n, "id3Frame")),
                                             n
                                         );
                                     })(i)),
                                     Ot(n, this))
                                   : ((n = (function (t) {
                                         var i = {
                                             type: "aac",
                                             tracks: { audio: null },
                                             metadataStream: new Ze.MetadataStream(),
                                             aacStream: new _t(),
                                             audioRollover: new Ze.TimestampRolloverStream("audio"),
                                             timedMetadataRollover: new Ze.TimestampRolloverStream("timed-metadata"),
                                             adtsStream: new at(!0),
                                         };
                                         return (
                                             (i.headOfPipeline = i.aacStream),
                                             i.aacStream.pipe(i.audioRollover).pipe(i.adtsStream),
                                             i.aacStream.pipe(i.timedMetadataRollover).pipe(i.metadataStream),
                                             i.metadataStream.on("timestamp", function (e) {
                                                 i.aacStream.setTimestamp(e.timeStamp);
                                             }),
                                             i.aacStream.on("data", function (e) {
                                                 ("timed-metadata" !== e.type && "audio" !== e.type) ||
                                                     i.audioSegmentStream ||
                                                     ((i.tracks.audio = i.tracks.audio || { timelineStartInfo: { baseMediaDecodeTime: t.baseMediaDecodeTime }, codec: "adts", type: "audio" }),
                                                     (i.audioSegmentStream = new Pt(i.tracks.audio, t)),
                                                     i.audioSegmentStream.on("data", function (e) {
                                                         i.trigger("data", { type: "audio", data: e });
                                                     }),
                                                     i.audioSegmentStream.on("partialdone", i.trigger.bind(i, "partialdone")),
                                                     i.audioSegmentStream.on("done", i.trigger.bind(i, "done")),
                                                     i.audioSegmentStream.on("endedtimeline", i.trigger.bind(i, "endedtimeline")),
                                                     i.audioSegmentStream.on("timingInfo", i.trigger.bind(i, "audioTimingInfo")),
                                                     i.adtsStream.pipe(i.audioSegmentStream),
                                                     i.trigger("trackinfo", { hasAudio: !!i.tracks.audio, hasVideo: !!i.tracks.video }));
                                             }),
                                             (i = Lt(i)).metadataStream.on("data", i.trigger.bind(i, "id3Frame")),
                                             i
                                         );
                                     })(i)),
                                     Ot(n, this)),
                                   (r = !1);
                           }
                           n.headOfPipeline.push(e);
                       }),
                       (this.flush = function () {
                           n && ((r = !0), n.headOfPipeline.flush());
                       }),
                       (this.partialFlush = function () {
                           n && n.headOfPipeline.partialFlush();
                       }),
                       (this.endTimeline = function () {
                           n && n.headOfPipeline.endTimeline();
                       }),
                       (this.reset = function () {
                           n && n.headOfPipeline.reset();
                       }),
                       (this.setBaseMediaDecodeTime = function (e) {
                           i.keepOriginalTimestamps || (i.baseMediaDecodeTime = e),
                               n &&
                                   (n.tracks.audio && ((n.tracks.audio.timelineStartInfo.dts = void 0), (n.tracks.audio.timelineStartInfo.pts = void 0), Se(n.tracks.audio), n.audioRollover && n.audioRollover.discontinuity()),
                                   n.tracks.video && (n.videoSegmentStream && (n.videoSegmentStream.gopCache_ = []), (n.tracks.video.timelineStartInfo.dts = void 0), (n.tracks.video.timelineStartInfo.pts = void 0), Se(n.tracks.video)),
                                   n.timestampRollover && n.timestampRollover.discontinuity());
                       }),
                       (this.setRemux = function (e) {
                           (i.remux = e), n && n.coalesceStream && n.coalesceStream.setRemux(e);
                       }),
                       (this.setAudioAppendStart = function (e) {
                           n && n.tracks.audio && n.audioSegmentStream && n.audioSegmentStream.setAudioAppendStart(e);
                       }),
                       (this.alignGopsWith = function (e) {});
               }
               var Mt = xt,
                   Rt = ct;
               Dt.prototype = new V();
               function Nt(e, t) {
                   for (var i = e, n = 0; n < t.length; n++) {
                       var r = t[n];
                       if (i < r.size) return r;
                       i -= r.size;
                   }
                   return null;
               }
               function Ut(e, c) {
                   var n = Ht(e, ["moof", "traf"]),
                       t = Ht(e, ["mdat"]),
                       d = {},
                       r = [];
                   return (
                       t.forEach(function (e, t) {
                           var i = n[t];
                           r.push({ mdat: e, traf: i });
                       }),
                       r.forEach(function (e) {
                           var t,
                               i = e.mdat,
                               n = e.traf,
                               r = Ht(n, ["tfhd"]),
                               a = Kt(r[0]),
                               s = a.trackId,
                               o = Ht(n, ["tfdt"]),
                               u = 0 < o.length ? zt(o[0]).baseMediaDecodeTime : 0,
                               l = Ht(n, ["trun"]);
                           c === s &&
                               0 < l.length &&
                               ((t = (function (e, t, i) {
                                   var n,
                                       r,
                                       a,
                                       s,
                                       o = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                       u = [];
                                   for (r = 0; r + 4 < e.length; r += a)
                                       if (((a = o.getUint32(r)), (r += 4), !(a <= 0)))
                                           switch (31 & e[r]) {
                                               case 6:
                                                   var l = e.subarray(r + 1, r + 1 + a),
                                                       c = Nt(r, t);
                                                   if (((n = { nalUnitType: "sei_rbsp", size: a, data: l, escapedRBSP: Yt(l), trackId: i }), c)) (n.pts = c.pts), (n.dts = c.dts), (s = c);
                                                   else {
                                                       if (!s) break;
                                                       (n.pts = s.pts), (n.dts = s.dts);
                                                   }
                                                   u.push(n);
                                           }
                                   return u;
                               })(
                                   i,
                                   (function (e, t, i) {
                                       var n = t,
                                           r = i.defaultSampleDuration || 0,
                                           a = i.defaultSampleSize || 0,
                                           s = i.trackId,
                                           o = [];
                                       return (
                                           e.forEach(function (e) {
                                               var t = Xt(e).samples;
                                               t.forEach(function (e) {
                                                   void 0 === e.duration && (e.duration = r),
                                                       void 0 === e.size && (e.size = a),
                                                       (e.trackId = s),
                                                       (e.dts = n),
                                                       void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0),
                                                       (e.pts = n + e.compositionTimeOffset),
                                                       (n += e.duration);
                                               }),
                                                   (o = o.concat(t));
                                           }),
                                           o
                                       );
                                   })(l, u, a),
                                   s
                               )),
                               d[s] || (d[s] = []),
                               (d[s] = d[s].concat(t)));
                       }),
                       d
                   );
               }
               function Ft(e) {
                   return "AudioSegmentStream" === e ? "audio" : "VideoSegmentStream" === e ? "video" : "";
               }
               var Bt = Dt,
                   jt = function (e) {
                       return e >>> 0;
                   },
                   Vt = function (e) {
                       var t = "";
                       return (t += String.fromCharCode(e[0])), (t += String.fromCharCode(e[1])), (t += String.fromCharCode(e[2])), (t += String.fromCharCode(e[3]));
                   },
                   qt = jt,
                   Ht = function e(t, i) {
                       var n,
                           r,
                           a,
                           s,
                           o,
                           u = [];
                       if (!i.length) return null;
                       for (n = 0; n < t.byteLength; )
                           (r = qt((t[n] << 24) | (t[n + 1] << 16) | (t[n + 2] << 8) | t[n + 3])),
                               (a = Vt(t.subarray(n + 4, n + 8))),
                               (s = 1 < r ? n + r : t.byteLength),
                               a === i[0] && (1 === i.length ? u.push(t.subarray(n + 8, s)) : (o = e(t.subarray(n + 8, s), i.slice(1))).length && (u = u.concat(o))),
                               (n = s);
                       return u;
                   },
                   Wt = jt,
                   zt = function (e) {
                       var t = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), baseMediaDecodeTime: Wt((e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7]) };
                       return 1 === t.version && ((t.baseMediaDecodeTime *= Math.pow(2, 32)), (t.baseMediaDecodeTime += Wt((e[8] << 24) | (e[9] << 16) | (e[10] << 8) | e[11]))), t;
                   },
                   Gt = function (e) {
                       return {
                           isLeading: (12 & e[0]) >>> 2,
                           dependsOn: 3 & e[0],
                           isDependedOn: (192 & e[1]) >>> 6,
                           hasRedundancy: (48 & e[1]) >>> 4,
                           paddingValue: (14 & e[1]) >>> 1,
                           isNonSyncSample: 1 & e[1],
                           degradationPriority: (e[2] << 8) | e[3],
                       };
                   },
                   Xt = function (e) {
                       var t,
                           i = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), samples: [] },
                           n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                           r = 1 & i.flags[2],
                           a = 4 & i.flags[2],
                           s = 1 & i.flags[1],
                           o = 2 & i.flags[1],
                           u = 4 & i.flags[1],
                           l = 8 & i.flags[1],
                           c = n.getUint32(4),
                           d = 8;
                       for (
                           r && ((i.dataOffset = n.getInt32(d)), (d += 4)),
                               a &&
                                   c &&
                                   ((t = { flags: Gt(e.subarray(d, d + 4)) }),
                                   (d += 4),
                                   s && ((t.duration = n.getUint32(d)), (d += 4)),
                                   o && ((t.size = n.getUint32(d)), (d += 4)),
                                   l && (1 === i.version ? (t.compositionTimeOffset = n.getInt32(d)) : (t.compositionTimeOffset = n.getUint32(d)), (d += 4)),
                                   i.samples.push(t),
                                   c--);
                           c--;

                       )
                           (t = {}),
                               s && ((t.duration = n.getUint32(d)), (d += 4)),
                               o && ((t.size = n.getUint32(d)), (d += 4)),
                               u && ((t.flags = Gt(e.subarray(d, d + 4))), (d += 4)),
                               l && (1 === i.version ? (t.compositionTimeOffset = n.getInt32(d)) : (t.compositionTimeOffset = n.getUint32(d)), (d += 4)),
                               i.samples.push(t);
                       return i;
                   },
                   Kt = function (e) {
                       var t,
                           i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                           n = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), trackId: i.getUint32(4) },
                           r = 1 & n.flags[2],
                           a = 2 & n.flags[2],
                           s = 8 & n.flags[2],
                           o = 16 & n.flags[2],
                           u = 32 & n.flags[2],
                           l = 65536 & n.flags[0],
                           c = 131072 & n.flags[0];
                       return (
                           (t = 8),
                           r && ((t += 4), (n.baseDataOffset = i.getUint32(12)), (t += 4)),
                           a && ((n.sampleDescriptionIndex = i.getUint32(t)), (t += 4)),
                           s && ((n.defaultSampleDuration = i.getUint32(t)), (t += 4)),
                           o && ((n.defaultSampleSize = i.getUint32(t)), (t += 4)),
                           u && (n.defaultSampleFlags = i.getUint32(t)),
                           l && (n.durationIsEmpty = !0),
                           !r && c && (n.baseDataOffsetIsMoof = !0),
                           n
                       );
                   },
                   Yt = Ae,
                   $t = Ue.CaptionStream,
                   Qt = function () {
                       var t,
                           a,
                           s,
                           o,
                           u,
                           i,
                           n = !1;
                       (this.isInitialized = function () {
                           return n;
                       }),
                           (this.init = function (e) {
                               (t = new $t()),
                                   (n = !0),
                                   (i = !!e && e.isPartial),
                                   t.on("data", function (e) {
                                       (e.startTime = e.startPts / o), (e.endTime = e.endPts / o), u.captions.push(e), (u.captionStreams[e.stream] = !0);
                                   });
                           }),
                           (this.isNewInit = function (e, t) {
                               return !((e && 0 === e.length) || (t && "object" == typeof t && 0 === Object.keys(t).length)) && (s !== e[0] || o !== t[s]);
                           }),
                           (this.parse = function (e, t, i) {
                               var n;
                               if (!this.isInitialized()) return null;
                               if (!t || !i) return null;
                               if (this.isNewInit(t, i)) (s = t[0]), (o = i[s]);
                               else if (null === s || !o) return a.push(e), null;
                               for (; 0 < a.length; ) {
                                   var r = a.shift();
                                   this.parse(r, t, i);
                               }
                               return null !==
                                   (n = (function (e, t, i) {
                                       return null === t ? null : { seiNals: Ut(e, t)[t], timescale: i };
                                   })(e, s, o)) && n.seiNals
                                   ? (this.pushNals(n.seiNals), this.flushStream(), u)
                                   : null;
                           }),
                           (this.pushNals = function (e) {
                               if (!this.isInitialized() || !e || 0 === e.length) return null;
                               e.forEach(function (e) {
                                   t.push(e);
                               });
                           }),
                           (this.flushStream = function () {
                               if (!this.isInitialized()) return null;
                               i ? t.partialFlush() : t.flush();
                           }),
                           (this.clearParsedCaptions = function () {
                               (u.captions = []), (u.captionStreams = {});
                           }),
                           (this.resetCaptionStream = function () {
                               if (!this.isInitialized()) return null;
                               t.reset();
                           }),
                           (this.clearAllCaptions = function () {
                               this.clearParsedCaptions(), this.resetCaptionStream();
                           }),
                           (this.reset = function () {
                               (a = []), (o = s = null), u ? this.clearParsedCaptions() : (u = { captions: [], captionStreams: {} }), this.resetCaptionStream();
                           }),
                           this.reset();
                   },
                   Jt = (function () {
                       function e(e, t) {
                           (this.options = t || {}), (this.self = e), this.init();
                       }
                       var t = e.prototype;
                       return (
                           (t.init = function () {
                               this.transmuxer && this.transmuxer.dispose(),
                                   (this.transmuxer = this.options.handlePartialData ? new Bt(this.options) : new wt(this.options)),
                                   this.options.handlePartialData
                                       ? (function (n, e) {
                                             e.on("data", function (e) {
                                                 var t = { data: e.data.track.initSegment.buffer, byteOffset: e.data.track.initSegment.byteOffset, byteLength: e.data.track.initSegment.byteLength },
                                                     i = { boxes: { data: e.data.boxes.buffer, byteOffset: e.data.boxes.byteOffset, byteLength: e.data.boxes.byteLength }, initSegment: t, type: e.type, sequence: e.data.sequence };
                                                 "undefined" != typeof e.data.videoFrameDts && (i.videoFrameDtsTime = ge(e.data.videoFrameDts)),
                                                     "undefined" != typeof e.data.videoFramePts && (i.videoFramePtsTime = ge(e.data.videoFramePts)),
                                                     n.postMessage({ action: "data", segment: i }, [i.boxes.data, i.initSegment.data]);
                                             }),
                                                 e.on("id3Frame", function (e) {
                                                     n.postMessage({ action: "id3Frame", id3Frame: e });
                                                 }),
                                                 e.on("caption", function (e) {
                                                     n.postMessage({ action: "caption", caption: e });
                                                 }),
                                                 e.on("done", function (e) {
                                                     n.postMessage({ action: "done", type: Ft(e) });
                                                 }),
                                                 e.on("partialdone", function (e) {
                                                     n.postMessage({ action: "partialdone", type: Ft(e) });
                                                 }),
                                                 e.on("endedsegment", function (e) {
                                                     n.postMessage({ action: "endedSegment", type: Ft(e) });
                                                 }),
                                                 e.on("trackinfo", function (e) {
                                                     n.postMessage({ action: "trackinfo", trackInfo: e });
                                                 }),
                                                 e.on("audioTimingInfo", function (e) {
                                                     if (null !== e.start) {
                                                         var t = { start: ge(e.start) };
                                                         e.end && (t.end = ge(e.end)), n.postMessage({ action: "audioTimingInfo", audioTimingInfo: t });
                                                     } else n.postMessage({ action: "audioTimingInfo", audioTimingInfo: e });
                                                 }),
                                                 e.on("videoTimingInfo", function (e) {
                                                     var t = { start: ge(e.start) };
                                                     e.end && (t.end = ge(e.end)), n.postMessage({ action: "videoTimingInfo", videoTimingInfo: t });
                                                 });
                                         })(this.self, this.transmuxer)
                                       : (function (n, e) {
                                             e.on("data", function (e) {
                                                 var t = e.initSegment;
                                                 e.initSegment = { data: t.buffer, byteOffset: t.byteOffset, byteLength: t.byteLength };
                                                 var i = e.data;
                                                 (e.data = i.buffer), n.postMessage({ action: "data", segment: e, byteOffset: i.byteOffset, byteLength: i.byteLength }, [e.data]);
                                             }),
                                                 e.on("done", function (e) {
                                                     n.postMessage({ action: "done" });
                                                 }),
                                                 e.on("gopInfo", function (e) {
                                                     n.postMessage({ action: "gopInfo", gopInfo: e });
                                                 }),
                                                 e.on("videoSegmentTimingInfo", function (e) {
                                                     var t = {
                                                         start: { decode: ge(e.start.dts), presentation: ge(e.start.pts) },
                                                         end: { decode: ge(e.end.dts), presentation: ge(e.end.pts) },
                                                         baseMediaDecodeTime: ge(e.baseMediaDecodeTime),
                                                     };
                                                     e.prependedContentDuration && (t.prependedContentDuration = ge(e.prependedContentDuration)), n.postMessage({ action: "videoSegmentTimingInfo", videoSegmentTimingInfo: t });
                                                 }),
                                                 e.on("id3Frame", function (e) {
                                                     n.postMessage({ action: "id3Frame", id3Frame: e });
                                                 }),
                                                 e.on("caption", function (e) {
                                                     n.postMessage({ action: "caption", caption: e });
                                                 }),
                                                 e.on("trackinfo", function (e) {
                                                     n.postMessage({ action: "trackinfo", trackInfo: e });
                                                 }),
                                                 e.on("audioTimingInfo", function (e) {
                                                     n.postMessage({ action: "audioTimingInfo", audioTimingInfo: { start: ge(e.start), end: ge(e.end) } });
                                                 }),
                                                 e.on("videoTimingInfo", function (e) {
                                                     n.postMessage({ action: "videoTimingInfo", videoTimingInfo: { start: ge(e.start), end: ge(e.end) } });
                                                 });
                                         })(this.self, this.transmuxer);
                           }),
                           (t.pushMp4Captions = function (e) {
                               this.captionParser || ((this.captionParser = new Qt()), this.captionParser.init());
                               var t = new Uint8Array(e.data, e.byteOffset, e.byteLength),
                                   i = this.captionParser.parse(t, e.trackIds, e.timescales);
                               this.self.postMessage({ action: "mp4Captions", captions: (i && i.captions) || [], data: t.buffer }, [t.buffer]);
                           }),
                           (t.clearAllMp4Captions = function () {
                               this.captionParser && this.captionParser.clearAllCaptions();
                           }),
                           (t.clearParsedMp4Captions = function () {
                               this.captionParser && this.captionParser.clearParsedCaptions();
                           }),
                           (t.push = function (e) {
                               var t = new Uint8Array(e.data, e.byteOffset, e.byteLength);
                               this.transmuxer.push(t);
                           }),
                           (t.reset = function () {
                               this.transmuxer.reset();
                           }),
                           (t.setTimestampOffset = function (e) {
                               var t = e.timestampOffset || 0;
                               this.transmuxer.setBaseMediaDecodeTime(Math.round(me(t)));
                           }),
                           (t.setAudioAppendStart = function (e) {
                               this.transmuxer.setAudioAppendStart(Math.ceil(me(e.appendStart)));
                           }),
                           (t.setRemux = function (e) {
                               this.transmuxer.setRemux(e.remux);
                           }),
                           (t.flush = function (e) {
                               this.transmuxer.flush(), Zt.postMessage({ action: "done", type: "transmuxed" });
                           }),
                           (t.partialFlush = function (e) {
                               this.transmuxer.partialFlush(), Zt.postMessage({ action: "partialdone", type: "transmuxed" });
                           }),
                           (t.endTimeline = function () {
                               this.transmuxer.endTimeline(), Zt.postMessage({ action: "endedtimeline", type: "transmuxed" });
                           }),
                           (t.alignGopsWith = function (e) {
                               this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice());
                           }),
                           e
                       );
                   })();
               new (function (t) {
                   t.onmessage = function (e) {
                       "init" === e.data.action && e.data.options
                           ? (this.messageHandlers = new Jt(t, e.data.options))
                           : (this.messageHandlers || (this.messageHandlers = new Jt(t)), e.data && e.data.action && "init" !== e.data.action && this.messageHandlers[e.data.action] && this.messageHandlers[e.data.action](e.data));
                   };
               })(Zt);
           })();
       }),
       qc = Pc("PlaylistSelector"),
       Hc = (function (n) {
           function e(e, t) {
               var i;
               if (((i = n.call(this) || this), !e)) throw new TypeError("Initialization settings are required");
               if ("function" != typeof e.currentTime) throw new TypeError("No currentTime getter specified");
               if (!e.mediaSource) throw new TypeError("No MediaSource specified");
               return (
                   (i.bandwidth = e.bandwidth),
                   (i.throughput = { rate: 0, count: 0 }),
                   (i.roundTrip = NaN),
                   i.resetStats_(),
                   (i.mediaIndex = null),
                   (i.hasPlayed_ = e.hasPlayed),
                   (i.currentTime_ = e.currentTime),
                   (i.seekable_ = e.seekable),
                   (i.seeking_ = e.seeking),
                   (i.duration_ = e.duration),
                   (i.mediaSource_ = e.mediaSource),
                   (i.vhs_ = e.vhs),
                   (i.loaderType_ = e.loaderType),
                   (i.currentMediaInfo_ = void 0),
                   (i.startingMediaInfo_ = void 0),
                   (i.segmentMetadataTrack_ = e.segmentMetadataTrack),
                   (i.goalBufferLength_ = e.goalBufferLength),
                   (i.sourceType_ = e.sourceType),
                   (i.sourceUpdater_ = e.sourceUpdater),
                   (i.inbandTextTracks_ = e.inbandTextTracks),
                   (i.state_ = "INIT"),
                   (i.handlePartialData_ = e.handlePartialData),
                   (i.timelineChangeController_ = e.timelineChangeController),
                   (i.shouldSaveSegmentTimingInfo_ = !0),
                   (i.checkBufferTimeout_ = null),
                   (i.error_ = void 0),
                   (i.currentTimeline_ = -1),
                   (i.pendingSegment_ = null),
                   (i.xhrOptions_ = null),
                   (i.pendingSegments_ = []),
                   (i.audioDisabled_ = !1),
                   (i.isPendingTimestampOffset_ = !1),
                   (i.gopBuffer_ = []),
                   (i.timeMapping_ = 0),
                   (i.safeAppend_ = 11 <= da.browser.IE_VERSION),
                   (i.appendInitSegment_ = { audio: !0, video: !0 }),
                   (i.playlistOfLastInitSegment_ = { audio: null, video: null }),
                   (i.callQueue_ = []),
                   (i.loadQueue_ = []),
                   (i.metadataQueue_ = { id3: [], caption: [] }),
                   (i.activeInitSegmentId_ = null),
                   (i.initSegments_ = {}),
                   (i.cacheEncryptionKeys_ = e.cacheEncryptionKeys),
                   (i.keyCache_ = {}),
                   (i.decrypter_ = e.decrypter),
                   (i.syncController_ = e.syncController),
                   (i.syncPoint_ = { segmentIndex: 0, time: 0 }),
                   (i.transmuxer_ = i.createTransmuxer_()),
                   (i.triggerSyncInfoUpdate_ = function () {
                       return i.trigger("syncinfoupdate");
                   }),
                   i.syncController_.on("syncinfoupdate", i.triggerSyncInfoUpdate_),
                   i.mediaSource_.addEventListener("sourceopen", function () {
                       i.isEndOfStream_() || (i.ended_ = !1);
                   }),
                   (i.fetchAtBuffer_ = !1),
                   (i.logger_ = Pc("SegmentLoader[" + i.loaderType_ + "]")),
                   Object.defineProperty(Ve(i), "state", {
                       get: function () {
                           return this.state_;
                       },
                       set: function (e) {
                           e !== this.state_ && (this.logger_(this.state_ + " -> " + e), (this.state_ = e), this.trigger("statechange"));
                       },
                   }),
                   i.sourceUpdater_.on("ready", function () {
                       i.hasEnoughInfoToAppend_() && i.processCallQueue_();
                   }),
                   "main" === i.loaderType_ &&
                       i.timelineChangeController_.on("pendingtimelinechange", function () {
                           i.hasEnoughInfoToAppend_() && i.processCallQueue_();
                       }),
                   "audio" === i.loaderType_ &&
                       i.timelineChangeController_.on("timelinechange", function () {
                           i.hasEnoughInfoToLoad_() && i.processLoadQueue_(), i.hasEnoughInfoToAppend_() && i.processCallQueue_();
                       }),
                   i
               );
           }
           Ge(e, n);
           var t = e.prototype;
           return (
               (t.createTransmuxer_ = function () {
                   var e = new Vc();
                   return e.postMessage({ action: "init", options: { remux: !1, alignGopsAtEnd: this.safeAppend_, keepOriginalTimestamps: !0, handlePartialData: this.handlePartialData_ } }), e;
               }),
               (t.resetStats_ = function () {
                   (this.mediaBytesTransferred = 0),
                       (this.mediaRequests = 0),
                       (this.mediaRequestsAborted = 0),
                       (this.mediaRequestsTimedout = 0),
                       (this.mediaRequestsErrored = 0),
                       (this.mediaTransferDuration = 0),
                       (this.mediaSecondsLoaded = 0);
               }),
               (t.dispose = function () {
                   this.trigger("dispose"),
                       (this.state = "DISPOSED"),
                       this.pause(),
                       this.abort_(),
                       this.transmuxer_ && (this.transmuxer_.terminate(), hc()),
                       this.resetStats_(),
                       this.checkBufferTimeout_ && T.clearTimeout(this.checkBufferTimeout_),
                       this.syncController_ && this.triggerSyncInfoUpdate_ && this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_),
                       this.off();
               }),
               (t.setAudio = function (e) {
                   (this.audioDisabled_ = !e), e ? (this.appendInitSegment_.audio = !0) : this.sourceUpdater_.removeAudio(0, this.duration_());
               }),
               (t.abort = function () {
                   "WAITING" === this.state ? (this.abort_(), (this.state = "READY"), this.paused() || this.monitorBuffer_()) : this.pendingSegment_ && (this.pendingSegment_ = null);
               }),
               (t.abort_ = function () {
                   this.pendingSegment_ && this.pendingSegment_.abortRequests && this.pendingSegment_.abortRequests(),
                       (this.pendingSegment_ = null),
                       (this.callQueue_ = []),
                       (this.loadQueue_ = []),
                       (this.metadataQueue_.id3 = []),
                       (this.metadataQueue_.caption = []),
                       this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_);
               }),
               (t.checkForAbort_ = function (e) {
                   return "APPENDING" !== this.state || this.pendingSegment_ ? !this.pendingSegment_ || this.pendingSegment_.requestId !== e : ((this.state = "READY"), !0);
               }),
               (t.error = function (e) {
                   return "undefined" != typeof e && (this.logger_("error occurred:", e), (this.error_ = e)), (this.pendingSegment_ = null), this.error_;
               }),
               (t.endOfStream = function () {
                   (this.ended_ = !0), this.transmuxer_ && dc(this.transmuxer_), (this.gopBuffer_.length = 0), this.pause(), this.trigger("ended");
               }),
               (t.buffered_ = function () {
                   if (!this.sourceUpdater_ || !this.startingMediaInfo_) return da.createTimeRanges();
                   if ("main" === this.loaderType_) {
                       var e = this.startingMediaInfo_,
                           t = e.hasAudio,
                           i = e.hasVideo,
                           n = e.isMuxed;
                       if (i && t && !this.audioDisabled_ && !n) return this.sourceUpdater_.buffered();
                       if (i) return this.sourceUpdater_.videoBuffered();
                   }
                   return this.sourceUpdater_.audioBuffered();
               }),
               (t.initSegmentForMap = function (e, t) {
                   if ((void 0 === t && (t = !1), !e)) return null;
                   var i = gl(e),
                       n = this.initSegments_[i];
                   return t && !n && e.bytes && (this.initSegments_[i] = n = { resolvedUri: e.resolvedUri, byterange: e.byterange, bytes: e.bytes, tracks: e.tracks, timescales: e.timescales }), n || e;
               }),
               (t.segmentKey = function (e, t) {
                   if ((void 0 === t && (t = !1), !e)) return null;
                   var i = vl(e),
                       n = this.keyCache_[i];
                   this.cacheEncryptionKeys_ && t && !n && e.bytes && (this.keyCache_[i] = n = { resolvedUri: e.resolvedUri, bytes: e.bytes });
                   var r = { resolvedUri: (n || e).resolvedUri };
                   return n && (r.bytes = n.bytes), r;
               }),
               (t.couldBeginLoading_ = function () {
                   return this.playlist_ && !this.paused();
               }),
               (t.load = function () {
                   if ((this.monitorBuffer_(), this.playlist_)) {
                       if ((this.syncController_.setDateTimeMapping(this.playlist_), "INIT" === this.state && this.couldBeginLoading_())) return this.init_();
                       !this.couldBeginLoading_() || ("READY" !== this.state && "INIT" !== this.state) || (this.state = "READY");
                   }
               }),
               (t.init_ = function () {
                   return (this.state = "READY"), this.resetEverything(), this.monitorBuffer_();
               }),
               (t.playlist = function (e, t) {
                   if ((void 0 === t && (t = {}), e)) {
                       var i = this.playlist_,
                           n = this.pendingSegment_;
                       (this.playlist_ = e), (this.xhrOptions_ = t), "INIT" === this.state && (e.syncInfo = { mediaSequence: e.mediaSequence, time: 0 });
                       var r = null;
                       if ((i && (i.id ? (r = i.id) : i.uri && (r = i.uri)), this.logger_("playlist update [" + r + " => " + (e.id || e.uri) + "]"), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()))
                           return this.init_();
                       if (!i || i.uri !== e.uri) return (null === this.mediaIndex && !this.handlePartialData_) || this.resyncLoader(), (this.currentMediaInfo_ = void 0), void this.trigger("playlistupdate");
                       var a = e.mediaSequence - i.mediaSequence;
                       this.logger_("live window shift [" + a + "]"),
                           null !== this.mediaIndex && (this.mediaIndex -= a),
                           n && ((n.mediaIndex -= a), 0 <= n.mediaIndex && (n.segment = e.segments[n.mediaIndex])),
                           this.syncController_.saveExpiredSegmentInfo(i, e);
                   }
               }),
               (t.pause = function () {
                   this.checkBufferTimeout_ && (T.clearTimeout(this.checkBufferTimeout_), (this.checkBufferTimeout_ = null));
               }),
               (t.paused = function () {
                   return null === this.checkBufferTimeout_;
               }),
               (t.resetEverything = function (e) {
                   (this.ended_ = !1), (this.appendInitSegment_ = { audio: !0, video: !0 }), this.resetLoader(), this.remove(0, 1 / 0, e), this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearAllMp4Captions" });
               }),
               (t.resetLoader = function () {
                   (this.fetchAtBuffer_ = !1), this.resyncLoader();
               }),
               (t.resyncLoader = function () {
                   this.transmuxer_ && dc(this.transmuxer_),
                       (this.mediaIndex = null),
                       (this.syncPoint_ = null),
                       (this.isPendingTimestampOffset_ = !1),
                       (this.callQueue_ = []),
                       (this.loadQueue_ = []),
                       (this.metadataQueue_.id3 = []),
                       (this.metadataQueue_.caption = []),
                       this.abort(),
                       this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearParsedMp4Captions" });
               }),
               (t.remove = function (e, t, i) {
                   if ((void 0 === i && (i = function () {}), t === 1 / 0 && (t = this.duration_()), this.sourceUpdater_ && this.currentMediaInfo_)) {
                       var n = 1,
                           r = function () {
                               0 === --n && i();
                           };
                       for (var a in (this.audioDisabled_ || (n++, this.sourceUpdater_.removeAudio(e, t, r)),
                       "main" === this.loaderType_ &&
                           this.currentMediaInfo_ &&
                           this.currentMediaInfo_.hasVideo &&
                           ((this.gopBuffer_ = (function (e, t, i, n) {
                               for (var r = Math.ceil((t - n) * fu), a = Math.ceil((i - n) * fu), s = e.slice(), o = e.length; o-- && !(e[o].pts <= a); );
                               if (-1 === o) return s;
                               for (var u = o + 1; u-- && !(e[u].pts <= r); );
                               return (u = Math.max(u, 0)), s.splice(u, o - u + 1), s;
                           })(this.gopBuffer_, e, t, this.timeMapping_)),
                           n++,
                           this.sourceUpdater_.removeVideo(e, t, r)),
                       this.inbandTextTracks_))
                           Nc(e, t, this.inbandTextTracks_[a]);
                       Nc(e, t, this.segmentMetadataTrack_), r();
                   }
               }),
               (t.monitorBuffer_ = function () {
                   this.checkBufferTimeout_ && T.clearTimeout(this.checkBufferTimeout_), (this.checkBufferTimeout_ = T.setTimeout(this.monitorBufferTick_.bind(this), 1));
               }),
               (t.monitorBufferTick_ = function () {
                   "READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && T.clearTimeout(this.checkBufferTimeout_), (this.checkBufferTimeout_ = T.setTimeout(this.monitorBufferTick_.bind(this), 500));
               }),
               (t.fillBuffer_ = function () {
                   if (!this.sourceUpdater_.updating()) {
                       this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                       var e = this.buffered_(),
                           t = this.checkBuffer_(e, this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                       t &&
                           ((t.timestampOffset = Bc({ segmentTimeline: t.timeline, currentTimeline: this.currentTimeline_, startOfSegment: t.startOfSegment, buffered: e, overrideCheck: this.isPendingTimestampOffset_ })),
                           (this.isPendingTimestampOffset_ = !1),
                           "number" == typeof t.timestampOffset && this.timelineChangeController_.pendingTimelineChange({ type: this.loaderType_, from: this.currentTimeline_, to: t.timeline }),
                           this.loadSegment_(t));
                   }
               }),
               (t.isEndOfStream_ = function (e, t) {
                   if ((void 0 === e && (e = this.mediaIndex), void 0 === t && (t = this.playlist_), !t || !this.mediaSource_)) return !1;
                   var i = e + 1 === t.segments.length;
                   return t.endList && "open" === this.mediaSource_.readyState && i;
               }),
               (t.checkBuffer_ = function (e, t, i, n, r, a) {
                   var s = 0;
                   e.length && (s = e.end(e.length - 1));
                   var o = Math.max(0, s - r);
                   if (!t.segments.length) return null;
                   if (o >= this.goalBufferLength_()) return null;
                   if (!n && 1 <= o) return null;
                   var u,
                       l = null,
                       c = !1;
                   if (null === a) (l = this.getSyncSegmentCandidate_(t)), (c = !0);
                   else if (null !== i) {
                       var d = t.segments[i];
                       (u = d && d.end ? d.end : s), (l = i + 1);
                   } else if (this.fetchAtBuffer_) {
                       var h = ic.getMediaInfoForTime(t, s, a.segmentIndex, a.time);
                       (l = h.mediaIndex), (u = h.startTime);
                   } else {
                       var p = ic.getMediaInfoForTime(t, r, a.segmentIndex, a.time);
                       (l = p.mediaIndex), (u = p.startTime);
                   }
                   var f = this.generateSegmentInfo_(t, l, u, c);
                   return !f || (this.mediaSource_ && this.playlist_ && f.mediaIndex === this.playlist_.segments.length - 1 && "ended" === this.mediaSource_.readyState && !this.seeking_())
                       ? void 0
                       : (this.logger_("checkBuffer_ returning " + f.uri, { segmentInfo: f, playlist: t, currentMediaIndex: i, nextMediaIndex: l, startOfSegment: u, isSyncRequest: c }), f);
               }),
               (t.getSyncSegmentCandidate_ = function (e) {
                   var t = this;
                   if (-1 === this.currentTimeline_) return 0;
                   var i = e.segments
                       .map(function (e, t) {
                           return { timeline: e.timeline, segmentIndex: t };
                       })
                       .filter(function (e) {
                           return e.timeline === t.currentTimeline_;
                       });
                   return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(e.segments.length - 1, 0);
               }),
               (t.generateSegmentInfo_ = function (e, t, i, n) {
                   if (t < 0 || t >= e.segments.length) return null;
                   var r,
                       a,
                       s = e.segments[t],
                       o = this.sourceUpdater_.audioBuffered(),
                       u = this.sourceUpdater_.videoBuffered();
                   return (
                       o.length && (r = o.end(o.length - 1) - this.sourceUpdater_.audioTimestampOffset()),
                       u.length &&
                           (a = (function (e, t, i) {
                               if ("undefined" == typeof t || null === t || !e.length) return [];
                               var n,
                                   r = Math.ceil((t - i + 3) * fu);
                               for (n = 0; n < e.length && !(e[n].pts > r); n++);
                               return e.slice(n);
                           })(this.gopBuffer_, this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(), this.timeMapping_)),
                       {
                           requestId: "segment-loader-" + Math.random(),
                           uri: s.resolvedUri,
                           mediaIndex: t,
                           isSyncRequest: n,
                           startOfSegment: i,
                           playlist: e,
                           bytes: null,
                           encryptedBytes: null,
                           timestampOffset: null,
                           timeline: s.timeline,
                           duration: s.duration,
                           segment: s,
                           byteLength: 0,
                           transmuxer: this.transmuxer_,
                           audioAppendStart: r,
                           gopsToAlignWith: a,
                       }
                   );
               }),
               (t.abortRequestEarly_ = function (e) {
                   if (this.vhs_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return !1;
                   if (Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3) return !1;
                   var t = this.currentTime_(),
                       i = e.bandwidth,
                       n = this.pendingSegment_.duration,
                       r = ic.estimateSegmentRequestTime(n, i, this.playlist_, e.bytesReceived),
                       a =
                           (function (e, t, i) {
                               return void 0 === i && (i = 1), ((e.length ? e.end(e.length - 1) : 0) - t) / i;
                           })(this.buffered_(), t, this.vhs_.tech_.playbackRate()) - 1;
                   if (r <= a) return !1;
                   var s = (function (e) {
                       var t = e.master,
                           i = e.currentTime,
                           n = e.bandwidth,
                           r = e.duration,
                           a = e.segmentDuration,
                           s = e.timeUntilRebuffer,
                           o = e.currentTimeline,
                           u = e.syncController,
                           l = t.playlists.filter(function (e) {
                               return !ic.isIncompatible(e);
                           }),
                           c = l.filter(ic.isEnabled);
                       c.length ||
                           (c = l.filter(function (e) {
                               return !ic.isDisabled(e);
                           }));
                       var d = c.filter(ic.hasAttribute.bind(null, "BANDWIDTH")).map(function (e) {
                               var t = u.getSyncPoint(e, r, o, i) ? 1 : 2;
                               return { playlist: e, rebufferingImpact: ic.estimateSegmentRequestTime(a, n, e) * t - s };
                           }),
                           h = d.filter(function (e) {
                               return e.rebufferingImpact <= 0;
                           });
                       return (
                           Dc(h, function (e, t) {
                               return Mc(t.playlist, e.playlist);
                           }),
                           h.length
                               ? h[0]
                               : (Dc(d, function (e, t) {
                                     return e.rebufferingImpact - t.rebufferingImpact;
                                 }),
                                 d[0] || null)
                       );
                   })({
                       master: this.vhs_.playlists.master,
                       currentTime: t,
                       bandwidth: i,
                       duration: this.duration_(),
                       segmentDuration: n,
                       timeUntilRebuffer: a,
                       currentTimeline: this.currentTimeline_,
                       syncController: this.syncController_,
                   });
                   if (s) {
                       var o = r - a - s.rebufferingImpact,
                           u = 0.5;
                       return (
                           a <= ec && (u = 1),
                           !s.playlist || s.playlist.uri === this.playlist_.uri || o < u ? !1 : ((this.bandwidth = s.playlist.attributes.BANDWIDTH * uc.BANDWIDTH_VARIANCE + 1), this.abort(), this.trigger("earlyabort"), !0)
                       );
                   }
               }),
               (t.handleAbort_ = function () {
                   this.mediaRequestsAborted += 1;
               }),
               (t.handleProgress_ = function (e, t) {
                   this.checkForAbort_(t.requestId) || this.abortRequestEarly_(t.stats) || this.trigger("progress");
               }),
               (t.handleTrackInfo_ = function (e, t) {
                   this.checkForAbort_(e.requestId) ||
                       this.abortRequestEarly_(e.stats) ||
                       this.checkForIllegalMediaSwitch(t) ||
                       ((t = t || {}),
                       (function (e, t) {
                           if ((!e && !t) || (!e && t) || (e && !t)) return !1;
                           if (e === t) return !0;
                           var i = Object.keys(e).sort(),
                               n = Object.keys(t).sort();
                           if (i.length !== n.length) return !1;
                           for (var r = 0; r < i.length; r++) {
                               var a = i[r];
                               if (a !== n[r]) return !1;
                               if (e[a] !== t[a]) return !1;
                           }
                           return !0;
                       })(this.currentMediaInfo_, t) || ((this.appendInitSegment_ = { audio: !0, video: !0 }), (this.startingMediaInfo_ = t), (this.currentMediaInfo_ = t), this.logger_("trackinfo update", t), this.trigger("trackinfo")),
                       this.checkForAbort_(e.requestId) || this.abortRequestEarly_(e.stats) || ((this.pendingSegment_.trackInfo = t), this.hasEnoughInfoToAppend_() && this.processCallQueue_()));
               }),
               (t.handleTimingInfo_ = function (e, t, i, n) {
                   if (!this.checkForAbort_(e.requestId) && !this.abortRequestEarly_(e.stats)) {
                       var r = this.pendingSegment_,
                           a = Fc(t);
                       (r[a] = r[a] || {}), (r[a][i] = n), this.logger_("timinginfo: " + t + " - " + i + " - " + n), this.hasEnoughInfoToAppend_() && this.processCallQueue_();
                   }
               }),
               (t.handleCaptions_ = function (e, t) {
                   var s = this;
                   if (!this.checkForAbort_(e.requestId) && !this.abortRequestEarly_(e.stats))
                       if (0 !== t.length)
                           if (this.pendingSegment_.hasAppendedData_) {
                               var o = null === this.sourceUpdater_.videoTimestampOffset() ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset(),
                                   u = {};
                               t.forEach(function (e) {
                                   u[e.stream] = u[e.stream] || { startTime: 1 / 0, captions: [], endTime: 0 };
                                   var t = u[e.stream];
                                   (t.startTime = Math.min(t.startTime, e.startTime + o)), (t.endTime = Math.max(t.endTime, e.endTime + o)), t.captions.push(e);
                               }),
                                   Object.keys(u).forEach(function (e) {
                                       var t = u[e],
                                           i = t.startTime,
                                           n = t.endTime,
                                           r = t.captions,
                                           a = s.inbandTextTracks_;
                                       s.logger_("adding cues from " + i + " -> " + n + " for " + e),
                                           (function (e, t, i) {
                                               if (!e[i]) {
                                                   t.trigger({ type: "usage", name: "vhs-608" }), t.trigger({ type: "usage", name: "hls-608" });
                                                   var n = t.textTracks().getTrackById(i);
                                                   e[i] = n || t.addRemoteTextTrack({ kind: "captions", id: i, label: i }, !1).track;
                                               }
                                           })(a, s.vhs_.tech_, e),
                                           Nc(i, n, a[e]),
                                           (function (e) {
                                               var i = e.inbandTextTracks,
                                                   t = e.captionArray,
                                                   n = e.timestampOffset;
                                               if (t) {
                                                   var r = T.WebKitDataCue || T.VTTCue;
                                                   t.forEach(function (e) {
                                                       var t = e.stream;
                                                       i[t].addCue(new r(e.startTime + n, e.endTime + n, e.text));
                                                   });
                                               }
                                           })({ captionArray: r, inbandTextTracks: a, timestampOffset: o });
                                   }),
                                   this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearParsedMp4Captions" });
                           } else this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e, t));
                       else this.logger_("SegmentLoader received no captions from a caption event");
               }),
               (t.handleId3_ = function (e, t, i) {
                   if (!this.checkForAbort_(e.requestId) && !this.abortRequestEarly_(e.stats))
                       if (this.pendingSegment_.hasAppendedData_) {
                           var n = null === this.sourceUpdater_.videoTimestampOffset() ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset();
                           !(function (e, t, i) {
                               e.metadataTrack_ || ((e.metadataTrack_ = i.addRemoteTextTrack({ kind: "metadata", label: "Timed Metadata" }, !1).track), (e.metadataTrack_.inBandMetadataTrackDispatchType = t));
                           })(this.inbandTextTracks_, i, this.vhs_.tech_),
                               Rc({ inbandTextTracks: this.inbandTextTracks_, metadataArray: t, timestampOffset: n, videoDuration: this.duration_() });
                       } else this.metadataQueue_.id3.push(this.handleId3_.bind(this, e, t, i));
               }),
               (t.processMetadataQueue_ = function () {
                   this.metadataQueue_.id3.forEach(function (e) {
                       return e();
                   }),
                       this.metadataQueue_.caption.forEach(function (e) {
                           return e();
                       }),
                       (this.metadataQueue_.id3 = []),
                       (this.metadataQueue_.caption = []);
               }),
               (t.processCallQueue_ = function () {
                   var e = this.callQueue_;
                   (this.callQueue_ = []),
                       e.forEach(function (e) {
                           return e();
                       });
               }),
               (t.processLoadQueue_ = function () {
                   var e = this.loadQueue_;
                   (this.loadQueue_ = []),
                       e.forEach(function (e) {
                           return e();
                       });
               }),
               (t.hasEnoughInfoToLoad_ = function () {
                   if ("audio" !== this.loaderType_) return !0;
                   var e = this.pendingSegment_;
                   return (
                       !!e &&
                       (!this.currentMediaInfo_ ||
                           !jc({ timelineChangeController: this.timelineChangeController_, currentTimeline: this.currentTimeline_, segmentTimeline: e.timeline, loaderType: this.loaderType_, audioDisabled: this.audioDisabled_ }))
                   );
               }),
               (t.hasEnoughInfoToAppend_ = function () {
                   if (!this.sourceUpdater_.ready()) return !1;
                   var e = this.pendingSegment_;
                   if (!e || !e.trackInfo) return !1;
                   if (!this.handlePartialData_) {
                       var t = this.currentMediaInfo_,
                           i = t.hasAudio,
                           n = t.hasVideo,
                           r = t.isMuxed;
                       if (n && !e.videoTimingInfo) return !1;
                       if (i && !this.audioDisabled_ && !r && !e.audioTimingInfo) return !1;
                   }
                   return !jc({ timelineChangeController: this.timelineChangeController_, currentTimeline: this.currentTimeline_, segmentTimeline: e.timeline, loaderType: this.loaderType_, audioDisabled: this.audioDisabled_ });
               }),
               (t.handleData_ = function (e, t) {
                   if (!this.checkForAbort_(e.requestId) && !this.abortRequestEarly_(e.stats))
                       if (!this.callQueue_.length && this.hasEnoughInfoToAppend_()) {
                           var i = this.pendingSegment_;
                           if ((this.setTimeMapping_(i.timeline), this.updateMediaSecondsLoaded_(i.segment), "closed" !== this.mediaSource_.readyState)) {
                               if ((e.map && ((e.map = this.initSegmentForMap(e.map, !0)), (i.segment.map = e.map)), e.key && this.segmentKey(e.key, !0), (i.isFmp4 = e.isFmp4), (i.timingInfo = i.timingInfo || {}), i.isFmp4))
                                   this.trigger("fmp4"), (i.timingInfo.start = i[Fc(t.type)].start);
                               else {
                                   var n,
                                       r = "main" === this.loaderType_ && this.currentMediaInfo_.hasVideo;
                                   r && (n = this.handlePartialData_ ? t.videoFramePtsTime : i.videoTimingInfo.start),
                                       (i.timingInfo.start = this.trueSegmentStart_({
                                           currentStart: i.timingInfo.start,
                                           playlist: i.playlist,
                                           mediaIndex: i.mediaIndex,
                                           currentVideoTimestampOffset: this.sourceUpdater_.videoTimestampOffset(),
                                           useVideoTimingInfo: r,
                                           firstVideoFrameTimeForData: n,
                                           videoTimingInfo: i.videoTimingInfo,
                                           audioTimingInfo: i.audioTimingInfo,
                                       }));
                               }
                               this.updateAppendInitSegmentStatus(i, t.type), this.updateSourceBufferTimestampOffset_(i), (i.hasAppendedData_ = !0), this.processMetadataQueue_(), this.appendData_(i, t);
                           }
                       } else this.callQueue_.push(this.handleData_.bind(this, e, t));
               }),
               (t.updateAppendInitSegmentStatus = function (e, t) {
                   "main" !== this.loaderType_ || "number" != typeof e.timestampOffset || e.changedTimestampOffset || (this.appendInitSegment_ = { audio: !0, video: !0 }),
                       this.playlistOfLastInitSegment_[t] !== e.playlist && (this.appendInitSegment_[t] = !0);
               }),
               (t.getInitSegmentAndUpdateState_ = function (e) {
                   var t = e.type,
                       i = e.initSegment,
                       n = e.map,
                       r = e.playlist;
                   if (n) {
                       var a = gl(n);
                       if (this.activeInitSegmentId_ === a) return null;
                       (i = this.initSegmentForMap(n, !0).bytes), (this.activeInitSegmentId_ = a);
                   }
                   return i && this.appendInitSegment_[t] ? ((this.playlistOfLastInitSegment_[t] = r), (this.appendInitSegment_[t] = !!n), (this.activeInitSegmentId_ = null), i) : null;
               }),
               (t.appendToSourceBuffer_ = function (e) {
                   var t = this,
                       i = e.segmentInfo,
                       n = e.type,
                       r = e.initSegment,
                       a = e.data,
                       s = [a],
                       o = a.byteLength;
                   r && (s.unshift(r), (o += r.byteLength));
                   var u = (function (e) {
                       var t,
                           i = 0;
                       return (
                           e.bytes &&
                               ((t = new Uint8Array(e.bytes)),
                               e.segments.forEach(function (e) {
                                   t.set(e, i), (i += e.byteLength);
                               })),
                           t
                       );
                   })({ bytes: o, segments: s });
                   this.sourceUpdater_.appendBuffer({ segmentInfo: i, type: n, bytes: u }, function (e) {
                       e && (t.error(n + " append of " + u.length + "b failed for segment #" + i.mediaIndex + " in playlist " + i.playlist.id), t.trigger("appenderror"));
                   });
               }),
               (t.handleVideoSegmentTimingInfo_ = function (e, t) {
                   if (this.pendingSegment_ && e === this.pendingSegment_.requestId) {
                       var i = this.pendingSegment_.segment;
                       i.videoTimingInfo || (i.videoTimingInfo = {}),
                           (i.videoTimingInfo.transmuxerPrependedSeconds = t.prependedContentDuration || 0),
                           (i.videoTimingInfo.transmuxedPresentationStart = t.start.presentation),
                           (i.videoTimingInfo.transmuxedPresentationEnd = t.end.presentation),
                           (i.videoTimingInfo.baseMediaDecodeTime = t.baseMediaDecodeTime);
                   }
               }),
               (t.appendData_ = function (e, t) {
                   var i = t.type,
                       n = t.data;
                   if (n && n.byteLength && ("audio" !== i || !this.audioDisabled_)) {
                       var r = this.getInitSegmentAndUpdateState_({ type: i, initSegment: t.initSegment, playlist: e.playlist, map: e.isFmp4 ? e.segment.map : null });
                       this.appendToSourceBuffer_({ segmentInfo: e, type: i, initSegment: r, data: n });
                   }
               }),
               (t.loadSegment_ = function (i) {
                   var n = this;
                   (this.state = "WAITING"),
                       (this.pendingSegment_ = i),
                       this.trimBackBuffer_(i),
                       "number" == typeof i.timestampOffset && this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearAllMp4Captions" }),
                       this.hasEnoughInfoToLoad_()
                           ? this.updateTransmuxerAndRequestSegment_(i)
                           : this.loadQueue_.push(function () {
                                 var e = n.buffered_();
                                 "number" == typeof i.timestampOffset && (i.timestampOffset = Bc({ segmentTimeline: i.timeline, currentTimeline: n.currentTimeline_, startOfSegment: i.startOfSegment, buffered: e, overrideCheck: !0 })),
                                     delete i.audioAppendStart;
                                 var t = n.sourceUpdater_.audioBuffered();
                                 t.length && (i.audioAppendStart = t.end(t.length - 1) - n.sourceUpdater_.audioTimestampOffset()), n.updateTransmuxerAndRequestSegment_(i);
                             });
               }),
               (t.updateTransmuxerAndRequestSegment_ = function (e) {
                   this.shouldUpdateTransmuxerTimestampOffset_(e.timestampOffset) &&
                       ((this.gopBuffer_.length = 0),
                       (e.gopsToAlignWith = []),
                       (this.timeMapping_ = 0),
                       this.transmuxer_.postMessage({ action: "reset" }),
                       this.transmuxer_.postMessage({ action: "setTimestampOffset", timestampOffset: e.timestampOffset }));
                   var t = this.createSimplifiedSegmentObj_(e);
                   e.abortRequests = Fl({
                       xhr: this.vhs_.xhr,
                       xhrOptions: this.xhrOptions_,
                       decryptionWorker: this.decrypter_,
                       segment: t,
                       handlePartialData: this.handlePartialData_,
                       abortFn: this.handleAbort_.bind(this),
                       progressFn: this.handleProgress_.bind(this),
                       trackInfoFn: this.handleTrackInfo_.bind(this),
                       timingInfoFn: this.handleTimingInfo_.bind(this),
                       videoSegmentTimingInfoFn: this.handleVideoSegmentTimingInfo_.bind(this, e.requestId),
                       captionsFn: this.handleCaptions_.bind(this),
                       id3Fn: this.handleId3_.bind(this),
                       dataFn: this.handleData_.bind(this),
                       doneFn: this.segmentRequestFinished_.bind(this),
                   });
               }),
               (t.trimBackBuffer_ = function (e) {
                   var t = (function (e, t, i) {
                       var n = t - uc.BACK_BUFFER_LENGTH;
                       e.length && (n = Math.max(n, e.start(0)));
                       var r = t - i;
                       return Math.min(r, n);
                   })(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
                   0 < t && this.remove(0, t);
               }),
               (t.createSimplifiedSegmentObj_ = function (e) {
                   var t = e.segment,
                       i = { resolvedUri: t.resolvedUri, byterange: t.byterange, requestId: e.requestId, transmuxer: e.transmuxer, audioAppendStart: e.audioAppendStart, gopsToAlignWith: e.gopsToAlignWith },
                       n = e.playlist.segments[e.mediaIndex];
                   if ((n && n.end && n.timeline === t.timeline && (i.baseStartTime = n.end + e.timestampOffset), t.key)) {
                       var r = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
                       (i.key = this.segmentKey(t.key)), (i.key.iv = r);
                   }
                   return t.map && (i.map = this.initSegmentForMap(t.map)), i;
               }),
               (t.saveTransferStats_ = function (e) {
                   (this.mediaRequests += 1), e && ((this.mediaBytesTransferred += e.bytesReceived), (this.mediaTransferDuration += e.roundTripTime));
               }),
               (t.saveBandwidthRelatedStats_ = function (e) {
                   (this.bandwidth = e.bandwidth), (this.roundTrip = e.roundTripTime), (this.pendingSegment_.byteLength = e.bytesReceived);
               }),
               (t.handleTimeout_ = function () {
                   (this.mediaRequestsTimedout += 1), (this.bandwidth = 1), (this.roundTrip = NaN), this.trigger("bandwidthupdate");
               }),
               (t.segmentRequestFinished_ = function (e, t, i) {
                   if (this.callQueue_.length) this.callQueue_.push(this.segmentRequestFinished_.bind(this, e, t, i));
                   else if ((this.saveTransferStats_(t.stats), this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId)) {
                       if (e) {
                           if (((this.pendingSegment_ = null), (this.state = "READY"), e.code === gc)) return;
                           return this.pause(), e.code === mc ? void this.handleTimeout_() : ((this.mediaRequestsErrored += 1), this.error(e), void this.trigger("error"));
                       }
                       this.saveBandwidthRelatedStats_(t.stats);
                       var n = this.pendingSegment_;
                       (n.endOfAllRequests = t.endOfAllRequests),
                           i.gopInfo &&
                               (this.gopBuffer_ = (function (e, t, i) {
                                   if (!t.length) return e;
                                   if (i) return t.slice();
                                   for (var n = t[0].pts, r = 0; r < e.length && !(e[r].pts >= n); r++);
                                   return e.slice(0, r).concat(t);
                               })(this.gopBuffer_, i.gopInfo, this.safeAppend_)),
                           (this.state = "APPENDING");
                       var r = this.isEndOfStream_(n.mediaIndex, n.playlist),
                           a = null !== this.mediaIndex,
                           s = n.timeline !== this.currentTimeline_ && 0 < n.timeline;
                       !n.isFmp4 && (r || (a && s)) && pc(this.transmuxer_), this.trigger("appending"), this.waitForAppendsToComplete_(n);
                   }
               }),
               (t.setTimeMapping_ = function (e) {
                   var t = this.syncController_.mappingForTimeline(e);
                   null !== t && (this.timeMapping_ = t);
               }),
               (t.updateMediaSecondsLoaded_ = function (e) {
                   "number" == typeof e.start && "number" == typeof e.end ? (this.mediaSecondsLoaded += e.end - e.start) : (this.mediaSecondsLoaded += e.duration);
               }),
               (t.shouldUpdateTransmuxerTimestampOffset_ = function (e) {
                   return null !== e && (("main" === this.loaderType_ && e !== this.sourceUpdater_.videoTimestampOffset()) || (!this.audioDisabled_ && e !== this.sourceUpdater_.audioTimestampOffset()));
               }),
               (t.trueSegmentStart_ = function (e) {
                   var t = e.currentStart,
                       i = e.playlist,
                       n = e.mediaIndex,
                       r = e.firstVideoFrameTimeForData,
                       a = e.currentVideoTimestampOffset,
                       s = e.useVideoTimingInfo,
                       o = e.videoTimingInfo,
                       u = e.audioTimingInfo;
                   if ("undefined" != typeof t) return t;
                   if (!s) return u.start;
                   var l = i.segments[n - 1];
                   return 0 !== n && l && "undefined" != typeof l.start && l.end === r + a ? o.start : r;
               }),
               (t.waitForAppendsToComplete_ = function (e) {
                   if (!this.currentMediaInfo_) return this.error({ message: "No starting media returned, likely due to an unsupported media format.", blacklistDuration: 1 / 0 }), void this.trigger("error");
                   var t = this.currentMediaInfo_,
                       i = t.hasAudio,
                       n = t.hasVideo,
                       r = t.isMuxed,
                       a = "main" === this.loaderType_ && n,
                       s = !this.audioDisabled_ && i && !r;
                   if (((e.waitingOnAppends = 0), !e.hasAppendedData_))
                       return (
                           e.timingInfo || "number" != typeof e.timestampOffset || (this.isPendingTimestampOffset_ = !0),
                           (e.timingInfo = { start: 0 }),
                           e.waitingOnAppends++,
                           this.isPendingTimestampOffset_ || (this.updateSourceBufferTimestampOffset_(e), this.processMetadataQueue_()),
                           void this.checkAppendsDone_(e)
                       );
                   a && e.waitingOnAppends++, s && e.waitingOnAppends++, a && this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, e)), s && this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, e));
               }),
               (t.checkAppendsDone_ = function (e) {
                   this.checkForAbort_(e.requestId) || (e.waitingOnAppends--, 0 === e.waitingOnAppends && this.handleAppendsDone_());
               }),
               (t.checkForIllegalMediaSwitch = function (e) {
                   var t = (function (e, t, i) {
                       return "main" === e && t && i
                           ? i.hasAudio || i.hasVideo
                               ? t.hasVideo && !i.hasVideo
                                   ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest."
                                   : !t.hasVideo && i.hasVideo
                                   ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest."
                                   : null
                               : "Neither audio nor video found in segment."
                           : null;
                   })(this.loaderType_, this.currentMediaInfo_, e);
                   return !!t && (this.error({ message: t, blacklistDuration: 1 / 0 }), this.trigger("error"), !0);
               }),
               (t.updateSourceBufferTimestampOffset_ = function (e) {
                   if (null !== e.timestampOffset && "number" == typeof e.timingInfo.start && !e.changedTimestampOffset && "main" === this.loaderType_) {
                       var t = !1;
                       (e.timestampOffset -= e.timingInfo.start),
                           (e.changedTimestampOffset = !0),
                           e.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() && (this.sourceUpdater_.videoTimestampOffset(e.timestampOffset), (t = !0)),
                           e.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() && (this.sourceUpdater_.audioTimestampOffset(e.timestampOffset), (t = !0)),
                           t && this.trigger("timestampoffset");
                   }
               }),
               (t.updateTimingInfoEnd_ = function (e) {
                   e.timingInfo = e.timingInfo || {};
                   var t = "main" === this.loaderType_ && this.currentMediaInfo_.hasVideo && e.videoTimingInfo ? e.videoTimingInfo : e.audioTimingInfo;
                   t && (e.timingInfo.end = "number" == typeof t.end ? t.end : t.start + e.duration);
               }),
               (t.handleAppendsDone_ = function () {
                   if ((this.pendingSegment_ && this.trigger("appendsdone"), !this.pendingSegment_)) return (this.state = "READY"), void (this.paused() || this.monitorBuffer_());
                   var e = this.pendingSegment_;
                   if (
                       (this.updateTimingInfoEnd_(e),
                       this.shouldSaveSegmentTimingInfo_ && this.syncController_.saveSegmentTimingInfo({ segmentInfo: e, shouldSaveTimelineMapping: "main" === this.loaderType_ }),
                       this.logger_(
                           (function (e) {
                               var t = e.segment,
                                   i = t.start,
                                   n = t.end,
                                   r = e.playlist,
                                   a = r.mediaSequence,
                                   s = r.id,
                                   o = r.segments,
                                   u = void 0 === o ? [] : o,
                                   l = e.mediaIndex,
                                   c = e.timeline;
                               return ["appending [" + l + "] of [" + a + ", " + (a + u.length) + "] from playlist [" + s + "]", "[" + i + " => " + n + "] in timeline [" + c + "]"].join(" ");
                           })(e)
                       ),
                       this.recordThroughput_(e),
                       (this.pendingSegment_ = null),
                       (this.state = "READY"),
                       e.isSyncRequest)
                   )
                       this.trigger("syncinfoupdate");
                   else {
                       this.addSegmentMetadataCue_(e),
                           (this.fetchAtBuffer_ = !0),
                           this.currentTimeline_ !== e.timeline &&
                               (this.timelineChangeController_.lastTimelineChange({ type: this.loaderType_, from: this.currentTimeline_, to: e.timeline }),
                               "main" !== this.loaderType_ || this.audioDisabled_ || this.timelineChangeController_.lastTimelineChange({ type: "audio", from: this.currentTimeline_, to: e.timeline })),
                           (this.currentTimeline_ = e.timeline),
                           this.trigger("syncinfoupdate");
                       var t = e.segment;
                       if (t.end && this.currentTime_() - t.end > 3 * e.playlist.targetDuration) this.resetEverything();
                       else
                           null !== this.mediaIndex && this.trigger("bandwidthupdate"),
                               this.trigger("progress"),
                               (this.mediaIndex = e.mediaIndex),
                               this.isEndOfStream_(e.mediaIndex, e.playlist) && this.endOfStream(),
                               this.trigger("appended"),
                               this.paused() || this.monitorBuffer_();
                   }
               }),
               (t.recordThroughput_ = function (e) {
                   var t = this.throughput.rate,
                       i = Date.now() - e.endOfAllRequests + 1,
                       n = Math.floor((e.byteLength / i) * 8 * 1e3);
                   this.throughput.rate += (n - t) / ++this.throughput.count;
               }),
               (t.addSegmentMetadataCue_ = function (e) {
                   if (this.segmentMetadataTrack_) {
                       var t = e.segment,
                           i = t.start,
                           n = t.end;
                       if (Uc(i) && Uc(n)) {
                           Nc(i, n, this.segmentMetadataTrack_);
                           var r = T.WebKitDataCue || T.VTTCue,
                               a = {
                                   custom: t.custom,
                                   dateTimeObject: t.dateTimeObject,
                                   dateTimeString: t.dateTimeString,
                                   bandwidth: e.playlist.attributes.BANDWIDTH,
                                   resolution: e.playlist.attributes.RESOLUTION,
                                   codecs: e.playlist.attributes.CODECS,
                                   byteLength: e.byteLength,
                                   uri: e.uri,
                                   timeline: e.timeline,
                                   playlist: e.playlist.id,
                                   start: i,
                                   end: n,
                               },
                               s = new r(i, n, JSON.stringify(a));
                           (s.value = a), this.segmentMetadataTrack_.addCue(s);
                       }
                   }
               }),
               e
           );
       })(da.EventTarget);
   function Wc() {}
   function zc(e) {
       return "string" != typeof e
           ? e
           : e.replace(/./, function (e) {
                 return e.toUpperCase();
             });
   }
   function Gc(e, t) {
       var i = t[e + "Buffer"];
       return (i && i.updating) || t.queuePending[e];
   }
   function Xc(e, t) {
       if (0 !== t.queue.length) {
           var i = 0,
               n = t.queue[i];
           if ("mediaSource" !== n.type) {
               if ("mediaSource" !== e && t.started_ && "closed" !== t.mediaSource.readyState && !Gc(e, t)) {
                   if (n.type !== e) {
                       if (
                           null ===
                           (i = (function (e, t) {
                               for (var i = 0; i < t.length; i++) {
                                   var n = t[i];
                                   if ("mediaSource" === n.type) return null;
                                   if (n.type === e) return i;
                               }
                               return null;
                           })(e, t.queue))
                       )
                           return;
                       n = t.queue[i];
                   }
                   t.queue.splice(i, 1), n.action(e, t), n.doneFn ? (t.queuePending[e] = n) : Xc(e, t);
               }
           } else t.updating() || "closed" === t.mediaSource.readyState || (t.queue.shift(), n.action(t), n.doneFn && n.doneFn(), Xc("audio", t), Xc("video", t));
       }
   }
   function Kc(e, t) {
       var i = t[e + "Buffer"],
           n = zc(e);
       i && (i.removeEventListener("updateend", t["on" + n + "UpdateEnd_"]), i.removeEventListener("error", t["on" + n + "Error_"]), (t.codecs[e] = null), (t[e + "Buffer"] = null));
   }
   function Yc(e, t) {
       return e && t && -1 !== Array.prototype.indexOf.call(e.sourceBuffers, t);
   }
   function $c(e) {
       var t = e.type,
           i = e.sourceUpdater,
           n = e.action,
           r = e.doneFn,
           a = e.name;
       i.queue.push({ type: t, action: n, doneFn: r, name: a }), Xc(t, i);
   }
   function Qc(i, n) {
       return function (e) {
           if (n.queuePending[i]) {
               var t = n.queuePending[i].doneFn;
               (n.queuePending[i] = null), t && t(n[i + "Error_"]);
           }
           Xc(i, n);
       };
   }
   function Jc(e) {
       return decodeURIComponent(escape(String.fromCharCode.apply(null, e)));
   }
   function Zc(e, t) {
       for (var i = e.cues, n = 0; n < i.length; n++) {
           var r = i[n];
           if (t >= r.adStartTime && t <= r.adEndTime) return r;
       }
       return null;
   }
   function ed(e, t) {
       e.abort(), e.pause(), t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), (t.activePlaylistLoader = null));
   }
   function td(e, t) {
       (t.activePlaylistLoader = e).load();
   }
   function id(t) {
       ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function (e) {
           wd[e](e, t);
       });
       var i = t.mediaTypes,
           e = t.masterPlaylistLoader,
           n = t.tech,
           r = t.vhs;
       ["AUDIO", "SUBTITLES"].forEach(function (e) {
           (i[e].activeGroup = (function (a, s) {
               return function (t) {
                   var e = s.masterPlaylistLoader,
                       i = s.mediaTypes[a].groups,
                       n = e.media();
                   if (!n) return null;
                   var r = null;
                   return (
                       n.attributes[a] && (r = i[n.attributes[a]]),
                       (r = r || i.main),
                       "undefined" == typeof t
                           ? r
                           : null === t
                           ? null
                           : r.filter(function (e) {
                                 return e.id === t.id;
                             })[0] || null
                   );
               };
           })(e, t)),
               (i[e].activeTrack = Id[e](e, t)),
               (i[e].onGroupChanged = (function (o, u) {
                   return function () {
                       var e = u.segmentLoaders,
                           t = e[o],
                           i = e.main,
                           n = u.mediaTypes[o],
                           r = n.activeTrack(),
                           a = n.activeGroup(r),
                           s = n.activePlaylistLoader;
                       ed(t, n), a && (a.playlistLoader ? (t.resyncLoader(), td(a.playlistLoader, n)) : s && i.resetEverything());
                   };
               })(e, t)),
               (i[e].onGroupChanging = (function (t, i) {
                   return function () {
                       var e = i.segmentLoaders[t];
                       e.abort(), e.pause();
                   };
               })(e, t)),
               (i[e].onTrackChanged = (function (o, u) {
                   return function () {
                       var e = u.segmentLoaders,
                           t = e[o],
                           i = e.main,
                           n = u.mediaTypes[o],
                           r = n.activeTrack(),
                           a = n.activeGroup(r),
                           s = n.activePlaylistLoader;
                       if ((ed(t, n), a)) {
                           if ("AUDIO" === o) {
                               if (!a.playlistLoader) return i.setAudio(!0), void i.resetEverything();
                               t.setAudio(!0), i.setAudio(!1);
                           }
                           s !== a.playlistLoader && (t.track && t.track(r), t.resetEverything()), td(a.playlistLoader, n);
                       }
                   };
               })(e, t));
       });
       var a = i.AUDIO.activeGroup();
       if (a) {
           var s = (
               a.filter(function (e) {
                   return e.default;
               })[0] || a[0]
           ).id;
           (i.AUDIO.tracks[s].enabled = !0), i.AUDIO.onTrackChanged();
       }
       function o() {
           i.AUDIO.onTrackChanged(), n.trigger({ type: "usage", name: "vhs-audio-change" }), n.trigger({ type: "usage", name: "hls-audio-change" });
       }
       for (var u in (e.on("mediachange", function () {
           ["AUDIO", "SUBTITLES"].forEach(function (e) {
               return i[e].onGroupChanged();
           });
       }),
       e.on("mediachanging", function () {
           ["AUDIO", "SUBTITLES"].forEach(function (e) {
               return i[e].onGroupChanging();
           });
       }),
       n.audioTracks().addEventListener("change", o),
       n.remoteTextTracks().addEventListener("change", i.SUBTITLES.onTrackChanged),
       r.on("dispose", function () {
           n.audioTracks().removeEventListener("change", o), n.remoteTextTracks().removeEventListener("change", i.SUBTITLES.onTrackChanged);
       }),
       n.clearTracks("audio"),
       i.AUDIO.tracks))
           n.audioTracks().addTrack(i.AUDIO.tracks[u]);
   }
   function nd(e, t, i) {
       var n = e.masterPlaylistController_,
           r = n[(e.options_.smoothQualityChange ? "smooth" : "fast") + "QualityChange_"].bind(n);
       if (t.attributes.RESOLUTION) {
           var a = t.attributes.RESOLUTION;
           (this.width = a.width), (this.height = a.height);
       }
       (this.bandwidth = t.attributes.BANDWIDTH),
           (this.codecs = xc(n.master(), t)),
           (this.playlist = t),
           (this.id = i),
           (this.enabled = (function (r, a, s) {
               return function (e) {
                   var t = r.master.playlists[a],
                       i = sl(t),
                       n = ol(t);
                   return "undefined" == typeof e ? n : (e ? delete t.disabled : (t.disabled = !0), e === n || i || (s(), e ? r.trigger("renditionenabled") : r.trigger("renditiondisabled")), e);
               };
           })(e.playlists, t.id, r));
   }
   function rd(e) {
       !(function t(i, e) {
           var n = 0,
               r = 0,
               a = da.mergeOptions(Od, e);
           i.ready(function () {
               i.trigger({ type: "usage", name: "vhs-error-reload-initialized" }), i.trigger({ type: "usage", name: "hls-error-reload-initialized" });
           });
           function s() {
               r && i.currentTime(r);
           }
           function o(e) {
               null != e &&
                   ((r = (i.duration() !== 1 / 0 && i.currentTime()) || 0), i.one("loadedmetadata", s), i.src(e), i.trigger({ type: "usage", name: "vhs-error-reload" }), i.trigger({ type: "usage", name: "hls-error-reload" }), i.play());
           }
           function u() {
               return Date.now() - n < 1e3 * a.errorInterval
                   ? (i.trigger({ type: "usage", name: "vhs-error-reload-canceled" }), void i.trigger({ type: "usage", name: "hls-error-reload-canceled" }))
                   : a.getSource && "function" == typeof a.getSource
                   ? ((n = Date.now()), a.getSource.call(i, o))
                   : void da.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!");
           }
           function l() {
               i.off("loadedmetadata", s), i.off("error", u), i.off("dispose", l);
           }
           i.on("error", u),
               i.on("dispose", l),
               (i.reloadSourceOnError = function (e) {
                   l(), t(i, e);
               });
       })(this, e);
   }
   var ad,
       sd = ["video", "audio"],
       od = function (n, r) {
           return function (e, t) {
               var i = t[e + "Buffer"];
               Yc(t.mediaSource, i) && (t.logger_("Appending segment " + r.mediaIndex + "'s " + n.length + " bytes to " + e + "Buffer"), i.appendBuffer(n));
           };
       },
       ud = function (n, r) {
           return function (e, t) {
               var i = t[e + "Buffer"];
               Yc(t.mediaSource, i) && (t.logger_("Removing " + n + " to " + r + " from " + e + "Buffer"), i.remove(n, r));
           };
       },
       ld = function (n) {
           return function (e, t) {
               var i = t[e + "Buffer"];
               Yc(t.mediaSource, i) && (t.logger_("Setting " + e + "timestampOffset to " + n), (i.timestampOffset = n));
           };
       },
       cd = function (i) {
           return function (e, t) {
               i();
           };
       },
       dd = function (t) {
           return function (e) {
               if ("open" === e.mediaSource.readyState) {
                   e.logger_("Calling mediaSource endOfStream(" + (t || "") + ")");
                   try {
                       e.mediaSource.endOfStream(t);
                   } catch (e) {
                       da.log.warn("Failed to call media source endOfStream", e);
                   }
               }
           };
       },
       hd = function (t) {
           return function (e) {
               e.logger_("Setting mediaSource duration to " + t);
               try {
                   e.mediaSource.duration = t;
               } catch (e) {
                   da.log.warn("Failed to set media source duration", e);
               }
           };
       },
       pd = function () {
           return function (t, e) {
               if ("open" === e.mediaSource.readyState) {
                   var i = e[t + "Buffer"];
                   if (Yc(e.mediaSource, i)) {
                       e.logger_("calling abort on " + t + "Buffer");
                       try {
                           i.abort();
                       } catch (e) {
                           da.log.warn("Failed to abort on " + t + "Buffer", e);
                       }
                   }
               }
           };
       },
       fd = function (r, a) {
           return function (e) {
               var t = zc(r),
                   i = Wl(a);
               e.logger_("Adding " + r + "Buffer with codec " + a + " to mediaSource");
               var n = e.mediaSource.addSourceBuffer(i);
               n.addEventListener("updateend", e["on" + t + "UpdateEnd_"]), n.addEventListener("error", e["on" + t + "Error_"]), (e.codecs[r] = a), (e[r + "Buffer"] = n);
           };
       },
       md = function (i) {
           return function (e) {
               var t = e[i + "Buffer"];
               if ((Kc(i, e), Yc(e.mediaSource, t))) {
                   e.logger_("Removing " + i + "Buffer with codec " + e.codecs[i] + " from mediaSource");
                   try {
                       e.mediaSource.removeSourceBuffer(t);
                   } catch (e) {
                       da.log.warn("Failed to removeSourceBuffer " + i + "Buffer", e);
                   }
               }
           };
       },
       gd = function (r) {
           return function (e, t) {
               var i = t[e + "Buffer"],
                   n = Wl(r);
               Yc(t.mediaSource, i) && t.codecs[e] !== r && (t.logger_("changing " + e + "Buffer codec from " + t.codecs[e] + " to " + r), i.changeType(n), (t.codecs[e] = r));
           };
       },
       vd = (function (i) {
           function e(e) {
               var t;
               return (
                   ((t = i.call(this) || this).mediaSource = e),
                   (t.sourceopenListener_ = function () {
                       return Xc("mediaSource", Ve(t));
                   }),
                   t.mediaSource.addEventListener("sourceopen", t.sourceopenListener_),
                   (t.logger_ = Pc("SourceUpdater")),
                   (t.audioTimestampOffset_ = 0),
                   (t.videoTimestampOffset_ = 0),
                   (t.queue = []),
                   (t.queuePending = { audio: null, video: null }),
                   (t.delayedAudioAppendQueue_ = []),
                   (t.videoAppendQueued_ = !1),
                   (t.codecs = {}),
                   (t.onVideoUpdateEnd_ = Qc("video", Ve(t))),
                   (t.onAudioUpdateEnd_ = Qc("audio", Ve(t))),
                   (t.onVideoError_ = function (e) {
                       t.videoError_ = e;
                   }),
                   (t.onAudioError_ = function (e) {
                       t.audioError_ = e;
                   }),
                   (t.started_ = !1),
                   t
               );
           }
           Ge(e, i);
           var t = e.prototype;
           return (
               (t.ready = function () {
                   return this.started_;
               }),
               (t.createSourceBuffers = function (e) {
                   this.ready() || (this.addOrChangeSourceBuffers(e), (this.started_ = !0), this.trigger("ready"));
               }),
               (t.addSourceBuffer = function (e, t) {
                   $c({ type: "mediaSource", sourceUpdater: this, action: fd(e, t), name: "addSourceBuffer" });
               }),
               (t.abort = function (e) {
                   $c({ type: e, sourceUpdater: this, action: pd(e), name: "abort" });
               }),
               (t.removeSourceBuffer = function (e) {
                   this.canRemoveSourceBuffer() ? $c({ type: "mediaSource", sourceUpdater: this, action: md(e), name: "removeSourceBuffer" }) : da.log.error("removeSourceBuffer is not supported!");
               }),
               (t.canRemoveSourceBuffer = function () {
                   return !da.browser.IE_VERSION && T.MediaSource && T.MediaSource.prototype && "function" == typeof T.MediaSource.prototype.removeSourceBuffer;
               }),
               (e.canChangeType = function () {
                   return T.SourceBuffer && T.SourceBuffer.prototype && "function" == typeof T.SourceBuffer.prototype.changeType;
               }),
               (t.canChangeType = function () {
                   return this.constructor.canChangeType();
               }),
               (t.changeType = function (e, t) {
                   this.canChangeType() ? $c({ type: e, sourceUpdater: this, action: gd(t), name: "changeType" }) : da.log.error("changeType is not supported!");
               }),
               (t.addOrChangeSourceBuffers = function (i) {
                   var n = this;
                   if (!i || "object" != typeof i || 0 === Object.keys(i).length) throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs");
                   Object.keys(i).forEach(function (e) {
                       var t = i[e];
                       if (!n.ready()) return n.addSourceBuffer(e, t);
                       n.canChangeType() && n.changeType(e, t);
                   });
               }),
               (t.appendBuffer = function (e, t) {
                   var i = this,
                       n = e.segmentInfo,
                       r = e.type,
                       a = e.bytes;
                   if (((this.processedAppend_ = !0), "audio" === r && this.videoBuffer && !this.videoAppendQueued_))
                       return this.delayedAudioAppendQueue_.push([e, t]), void this.logger_("delayed audio append of " + a.length + " until video append");
                   if (($c({ type: r, sourceUpdater: this, action: od(a, n || { mediaIndex: -1 }), doneFn: t, name: "appendBuffer" }), "video" === r)) {
                       if (((this.videoAppendQueued_ = !0), !this.delayedAudioAppendQueue_.length)) return;
                       var s = this.delayedAudioAppendQueue_.slice();
                       this.logger_("queuing delayed audio " + s.length + " appendBuffers"),
                           (this.delayedAudioAppendQueue_.length = 0),
                           s.forEach(function (e) {
                               i.appendBuffer.apply(i, e);
                           });
                   }
               }),
               (t.audioBuffered = function () {
                   return Yc(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered ? this.audioBuffer.buffered : da.createTimeRange();
               }),
               (t.videoBuffered = function () {
                   return Yc(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered ? this.videoBuffer.buffered : da.createTimeRange();
               }),
               (t.buffered = function () {
                   var e = Yc(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null,
                       t = Yc(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null;
                   return t && !e
                       ? this.audioBuffered()
                       : e && !t
                       ? this.videoBuffered()
                       : (function (e, t) {
                             var i = null,
                                 n = null,
                                 r = 0,
                                 a = [],
                                 s = [];
                             if (!(e && e.length && t && t.length)) return da.createTimeRange();
                             for (var o = e.length; o--; ) a.push({ time: e.start(o), type: "start" }), a.push({ time: e.end(o), type: "end" });
                             for (o = t.length; o--; ) a.push({ time: t.start(o), type: "start" }), a.push({ time: t.end(o), type: "end" });
                             for (
                                 a.sort(function (e, t) {
                                     return e.time - t.time;
                                 }),
                                     o = 0;
                                 o < a.length;
                                 o++
                             )
                                 "start" === a[o].type ? 2 === ++r && (i = a[o].time) : "end" === a[o].type && 1 === --r && (n = a[o].time), null !== i && null !== n && (s.push([i, n]), (n = i = null));
                             return da.createTimeRanges(s);
                         })(this.audioBuffered(), this.videoBuffered());
               }),
               (t.setDuration = function (e, t) {
                   void 0 === t && (t = Wc), $c({ type: "mediaSource", sourceUpdater: this, action: hd(e), name: "duration", doneFn: t });
               }),
               (t.endOfStream = function (e, t) {
                   void 0 === e && (e = null), void 0 === t && (t = Wc), "string" != typeof e && (e = void 0), $c({ type: "mediaSource", sourceUpdater: this, action: dd(e), name: "endOfStream", doneFn: t });
               }),
               (t.removeAudio = function (e, t, i) {
                   void 0 === i && (i = Wc), this.audioBuffered().length && 0 !== this.audioBuffered().end(0) ? $c({ type: "audio", sourceUpdater: this, action: ud(e, t), doneFn: i, name: "remove" }) : i();
               }),
               (t.removeVideo = function (e, t, i) {
                   void 0 === i && (i = Wc), this.videoBuffered().length && 0 !== this.videoBuffered().end(0) ? $c({ type: "video", sourceUpdater: this, action: ud(e, t), doneFn: i, name: "remove" }) : i();
               }),
               (t.updating = function () {
                   return !(!Gc("audio", this) && !Gc("video", this));
               }),
               (t.audioTimestampOffset = function (e) {
                   return (
                       "undefined" != typeof e && this.audioBuffer && this.audioTimestampOffset_ !== e && ($c({ type: "audio", sourceUpdater: this, action: ld(e), name: "timestampOffset" }), (this.audioTimestampOffset_ = e)),
                       this.audioTimestampOffset_
                   );
               }),
               (t.videoTimestampOffset = function (e) {
                   return (
                       "undefined" != typeof e && this.videoBuffer && this.videoTimestampOffset !== e && ($c({ type: "video", sourceUpdater: this, action: ld(e), name: "timestampOffset" }), (this.videoTimestampOffset_ = e)),
                       this.videoTimestampOffset_
                   );
               }),
               (t.audioQueueCallback = function (e) {
                   this.audioBuffer && $c({ type: "audio", sourceUpdater: this, action: cd(e), name: "callback" });
               }),
               (t.videoQueueCallback = function (e) {
                   this.videoBuffer && $c({ type: "video", sourceUpdater: this, action: cd(e), name: "callback" });
               }),
               (t.dispose = function () {
                   var t = this;
                   this.trigger("dispose"),
                       sd.forEach(function (e) {
                           t.abort(e),
                               t.canRemoveSourceBuffer()
                                   ? t.removeSourceBuffer(e)
                                   : t[e + "QueueCallback"](function () {
                                         return Kc(e, t);
                                     });
                       }),
                       (this.videoAppendQueued_ = !1),
                       (this.delayedAudioAppendQueue_.length = 0),
                       this.sourceopenListener_ && this.mediaSource.removeEventListener("sourceopen", this.sourceopenListener_),
                       this.off();
               }),
               e
           );
       })(da.EventTarget),
       yd = new Uint8Array(
           "\n\n".split("").map(function (e) {
               return e.charCodeAt(0);
           })
       ),
       _d = (function (n) {
           function e(e, t) {
               var i;
               return (
                   void 0 === t && (t = {}),
                   ((i = n.call(this, e, t) || this).handlePartialData_ = !1),
                   (i.mediaSource_ = null),
                   (i.subtitlesTrack_ = null),
                   (i.loaderType_ = "subtitle"),
                   (i.featuresNativeTextTracks_ = e.featuresNativeTextTracks),
                   (i.shouldSaveSegmentTimingInfo_ = !1),
                   i
               );
           }
           Ge(e, n);
           var t = e.prototype;
           return (
               (t.createTransmuxer_ = function () {
                   return null;
               }),
               (t.buffered_ = function () {
                   if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return da.createTimeRanges();
                   var e = this.subtitlesTrack_.cues,
                       t = e[0].startTime,
                       i = e[e.length - 1].startTime;
                   return da.createTimeRanges([[t, i]]);
               }),
               (t.initSegmentForMap = function (e, t) {
                   if ((void 0 === t && (t = !1), !e)) return null;
                   var i = gl(e),
                       n = this.initSegments_[i];
                   if (t && !n && e.bytes) {
                       var r = yd.byteLength + e.bytes.byteLength,
                           a = new Uint8Array(r);
                       a.set(e.bytes), a.set(yd, e.bytes.byteLength), (this.initSegments_[i] = n = { resolvedUri: e.resolvedUri, byterange: e.byterange, bytes: a });
                   }
                   return n || e;
               }),
               (t.couldBeginLoading_ = function () {
                   return this.playlist_ && this.subtitlesTrack_ && !this.paused();
               }),
               (t.init_ = function () {
                   return (this.state = "READY"), this.resetEverything(), this.monitorBuffer_();
               }),
               (t.track = function (e) {
                   return "undefined" == typeof e || ((this.subtitlesTrack_ = e), "INIT" === this.state && this.couldBeginLoading_() && this.init_()), this.subtitlesTrack_;
               }),
               (t.remove = function (e, t) {
                   Nc(e, t, this.subtitlesTrack_);
               }),
               (t.fillBuffer_ = function () {
                   var e = this;
                   this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                   var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                   if ((t = this.skipEmptySegments_(t))) {
                       if (null === this.syncController_.timestampOffsetForTimeline(t.timeline)) {
                           return (
                               this.syncController_.one("timestampoffset", function () {
                                   (e.state = "READY"), e.paused() || e.monitorBuffer_();
                               }),
                               void (this.state = "WAITING_ON_TIMELINE")
                           );
                       }
                       this.loadSegment_(t);
                   }
               }),
               (t.skipEmptySegments_ = function (e) {
                   for (; e && e.segment.empty; ) e = this.generateSegmentInfo_(e.playlist, e.mediaIndex + 1, e.startOfSegment + e.duration, e.isSyncRequest);
                   return e;
               }),
               (t.stopForError = function (e) {
                   this.error(e), (this.state = "READY"), this.pause(), this.trigger("error");
               }),
               (t.segmentRequestFinished_ = function (e, t, i) {
                   var n = this;
                   if (this.subtitlesTrack_) {
                       if ((this.saveTransferStats_(t.stats), !this.pendingSegment_)) return (this.state = "READY"), void (this.mediaRequestsAborted += 1);
                       if (e) return e.code === mc && this.handleTimeout_(), e.code === gc ? (this.mediaRequestsAborted += 1) : (this.mediaRequestsErrored += 1), void this.stopForError(e);
                       this.saveBandwidthRelatedStats_(t.stats), (this.state = "APPENDING"), this.trigger("appending");
                       var r = this.pendingSegment_,
                           a = r.segment;
                       if ((a.map && (a.map.bytes = t.map.bytes), (r.bytes = t.bytes), "function" != typeof T.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_)) {
                           var s,
                               o = function () {
                                   n.subtitlesTrack_.tech_.off("vttjsloaded", s), n.stopForError({ message: "Error loading vtt.js" });
                               };
                           return (
                               (s = function () {
                                   n.subtitlesTrack_.tech_.off("vttjserror", o), n.segmentRequestFinished_(e, t, i);
                               }),
                               (this.state = "WAITING_ON_VTTJS"),
                               this.subtitlesTrack_.tech_.one("vttjsloaded", s),
                               void this.subtitlesTrack_.tech_.one("vttjserror", o)
                           );
                       }
                       a.requested = !0;
                       try {
                           this.parseVTTCues_(r);
                       } catch (e) {
                           return void this.stopForError({ message: e.message });
                       }
                       if (
                           (this.updateTimeMapping_(r, this.syncController_.timelines[r.timeline], this.playlist_),
                           r.cues.length ? (r.timingInfo = { start: r.cues[0].startTime, end: r.cues[r.cues.length - 1].endTime }) : (r.timingInfo = { start: r.startOfSegment, end: r.startOfSegment + r.duration }),
                           r.isSyncRequest)
                       )
                           return this.trigger("syncinfoupdate"), (this.pendingSegment_ = null), void (this.state = "READY");
                       (r.byteLength = r.bytes.byteLength),
                           (this.mediaSecondsLoaded += a.duration),
                           r.cues.forEach(function (e) {
                               n.remove(e.startTime, e.endTime), n.subtitlesTrack_.addCue(n.featuresNativeTextTracks_ ? new T.VTTCue(e.startTime, e.endTime, e.text) : e);
                           }),
                           this.handleAppendsDone_();
                   } else this.state = "READY";
               }),
               (t.handleData_ = function () {}),
               (t.updateTimingInfoEnd_ = function () {}),
               (t.parseVTTCues_ = function (t) {
                   var e,
                       i = !1;
                   "function" == typeof T.TextDecoder ? (e = new T.TextDecoder("utf8")) : ((e = T.WebVTT.StringDecoder()), (i = !0));
                   var n = new T.WebVTT.Parser(T, T.vttjs, e);
                   if (
                       ((t.cues = []),
                       (t.timestampmap = { MPEGTS: 0, LOCAL: 0 }),
                       (n.oncue = t.cues.push.bind(t.cues)),
                       (n.ontimestampmap = function (e) {
                           t.timestampmap = e;
                       }),
                       (n.onparsingerror = function (e) {
                           da.log.warn("Error encountered when parsing cues: " + e.message);
                       }),
                       t.segment.map)
                   ) {
                       var r = t.segment.map.bytes;
                       i && (r = Jc(r)), n.parse(r);
                   }
                   var a = t.bytes;
                   i && (a = Jc(a)), n.parse(a), n.flush();
               }),
               (t.updateTimeMapping_ = function (e, t, i) {
                   var n = e.segment;
                   if (t)
                       if (e.cues.length) {
                           var r = e.timestampmap,
                               a = r.MPEGTS / fu - r.LOCAL + t.mapping;
                           if (
                               (e.cues.forEach(function (e) {
                                   (e.startTime += a), (e.endTime += a);
                               }),
                               !i.syncInfo)
                           ) {
                               var s = e.cues[0].startTime,
                                   o = e.cues[e.cues.length - 1].startTime;
                               i.syncInfo = { mediaSequence: i.mediaSequence + e.mediaIndex, time: Math.min(s, o - n.duration) };
                           }
                       } else n.empty = !0;
               }),
               e
           );
       })(Hc),
       bd = [
           {
               name: "VOD",
               run: function (e, t, i, n, r) {
                   if (i === 1 / 0) return null;
                   return { time: 0, segmentIndex: 0 };
               },
           },
           {
               name: "ProgramDateTime",
               run: function (e, t, i, n, r) {
                   if (!e.datetimeToDisplayTime) return null;
                   var a = t.segments || [],
                       s = null,
                       o = null;
                   r = r || 0;
                   for (var u = 0; u < a.length; u++) {
                       var l = a[u];
                       if (l.dateTimeObject) {
                           var c = l.dateTimeObject.getTime() / 1e3 + e.datetimeToDisplayTime,
                               d = Math.abs(r - c);
                           if (null !== o && (0 === d || o < d)) break;
                           (o = d), (s = { time: c, segmentIndex: u });
                       }
                   }
                   return s;
               },
           },
           {
               name: "Segment",
               run: function (e, t, i, n, r) {
                   var a = t.segments || [],
                       s = null,
                       o = null;
                   r = r || 0;
                   for (var u = 0; u < a.length; u++) {
                       var l = a[u];
                       if (l.timeline === n && "undefined" != typeof l.start) {
                           var c = Math.abs(r - l.start);
                           if (null !== o && o < c) break;
                           (!s || null === o || c <= o) && ((o = c), (s = { time: l.start, segmentIndex: u }));
                       }
                   }
                   return s;
               },
           },
           {
               name: "Discontinuity",
               run: function (e, t, i, n, r) {
                   var a = null;
                   if (((r = r || 0), t.discontinuityStarts && t.discontinuityStarts.length))
                       for (var s = null, o = 0; o < t.discontinuityStarts.length; o++) {
                           var u = t.discontinuityStarts[o],
                               l = t.discontinuitySequence + o + 1,
                               c = e.discontinuities[l];
                           if (c) {
                               var d = Math.abs(r - c.time);
                               if (null !== s && s < d) break;
                               (!a || null === s || d <= s) && ((s = d), (a = { time: c.time, segmentIndex: u }));
                           }
                       }
                   return a;
               },
           },
           {
               name: "Playlist",
               run: function (e, t, i, n, r) {
                   return t.syncInfo ? { time: t.syncInfo.time, segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence } : null;
               },
           },
       ],
       Td = (function (i) {
           function e(e) {
               var t;
               return ((t = i.call(this) || this).timelines = []), (t.discontinuities = []), (t.datetimeToDisplayTime = null), (t.logger_ = Pc("SyncController")), t;
           }
           Ge(e, i);
           var t = e.prototype;
           return (
               (t.getSyncPoint = function (e, t, i, n) {
                   var r = this.runStrategies_(e, t, i, n);
                   return r.length ? this.selectSyncPoint_(r, { key: "time", value: n }) : null;
               }),
               (t.getExpiredTime = function (e, t) {
                   if (!e || !e.segments) return null;
                   var i = this.runStrategies_(e, t, e.discontinuitySequence, 0);
                   if (!i.length) return null;
                   var n = this.selectSyncPoint_(i, { key: "segmentIndex", value: 0 });
                   return 0 < n.segmentIndex && (n.time *= -1), Math.abs(n.time + il(e, n.segmentIndex, 0));
               }),
               (t.runStrategies_ = function (e, t, i, n) {
                   for (var r = [], a = 0; a < bd.length; a++) {
                       var s = bd[a],
                           o = s.run(this, e, t, i, n);
                       o && ((o.strategy = s.name), r.push({ strategy: s.name, syncPoint: o }));
                   }
                   return r;
               }),
               (t.selectSyncPoint_ = function (e, t) {
                   for (var i = e[0].syncPoint, n = Math.abs(e[0].syncPoint[t.key] - t.value), r = e[0].strategy, a = 1; a < e.length; a++) {
                       var s = Math.abs(e[a].syncPoint[t.key] - t.value);
                       s < n && ((n = s), (i = e[a].syncPoint), (r = e[a].strategy));
                   }
                   return this.logger_("syncPoint for [" + t.key + ": " + t.value + "] chosen with strategy [" + r + "]: [time:" + i.time + ", segmentIndex:" + i.segmentIndex + "]"), i;
               }),
               (t.saveExpiredSegmentInfo = function (e, t) {
                   for (var i = t.mediaSequence - e.mediaSequence - 1; 0 <= i; i--) {
                       var n = e.segments[i];
                       if (n && "undefined" != typeof n.start) {
                           (t.syncInfo = { mediaSequence: e.mediaSequence + i, time: n.start }),
                               this.logger_("playlist refresh sync: [time:" + t.syncInfo.time + ", mediaSequence: " + t.syncInfo.mediaSequence + "]"),
                               this.trigger("syncinfoupdate");
                           break;
                       }
                   }
               }),
               (t.setDateTimeMapping = function (e) {
                   if (!this.datetimeToDisplayTime && e.segments && e.segments.length && e.segments[0].dateTimeObject) {
                       var t = e.segments[0].dateTimeObject.getTime() / 1e3;
                       this.datetimeToDisplayTime = -t;
                   }
               }),
               (t.saveSegmentTimingInfo = function (e) {
                   var t = e.segmentInfo,
                       i = e.shouldSaveTimelineMapping;
                   this.calculateSegmentTimeMapping_(t, t.timingInfo, i) &&
                       (this.saveDiscontinuitySyncInfo_(t), t.playlist.syncInfo || (t.playlist.syncInfo = { mediaSequence: t.playlist.mediaSequence + t.mediaIndex, time: t.segment.start }));
               }),
               (t.timestampOffsetForTimeline = function (e) {
                   return "undefined" == typeof this.timelines[e] ? null : this.timelines[e].time;
               }),
               (t.mappingForTimeline = function (e) {
                   return "undefined" == typeof this.timelines[e] ? null : this.timelines[e].mapping;
               }),
               (t.calculateSegmentTimeMapping_ = function (e, t, i) {
                   var n = e.segment,
                       r = this.timelines[e.timeline];
                   if (null !== e.timestampOffset)
                       (r = { time: e.startOfSegment, mapping: e.startOfSegment - t.start }),
                           i && ((this.timelines[e.timeline] = r), this.trigger("timestampoffset"), this.logger_("time mapping for timeline " + e.timeline + ": [time: " + r.time + "] [mapping: " + r.mapping + "]")),
                           (n.start = e.startOfSegment),
                           (n.end = t.end + r.mapping);
                   else {
                       if (!r) return !1;
                       (n.start = t.start + r.mapping), (n.end = t.end + r.mapping);
                   }
                   return !0;
               }),
               (t.saveDiscontinuitySyncInfo_ = function (e) {
                   var t = e.playlist,
                       i = e.segment;
                   if (i.discontinuity) this.discontinuities[i.timeline] = { time: i.start, accuracy: 0 };
                   else if (t.discontinuityStarts && t.discontinuityStarts.length)
                       for (var n = 0; n < t.discontinuityStarts.length; n++) {
                           var r = t.discontinuityStarts[n],
                               a = t.discontinuitySequence + n + 1,
                               s = r - e.mediaIndex,
                               o = Math.abs(s);
                           if (!this.discontinuities[a] || this.discontinuities[a].accuracy > o) {
                               var u = void 0;
                               (u = s < 0 ? i.start - il(t, e.mediaIndex, r) : i.end + il(t, e.mediaIndex + 1, r)), (this.discontinuities[a] = { time: u, accuracy: o });
                           }
                       }
               }),
               (t.dispose = function () {
                   this.trigger("dispose"), this.off();
               }),
               e
           );
       })(da.EventTarget),
       Sd = (function (t) {
           function e() {
               var e;
               return ((e = t.call(this) || this).pendingTimelineChanges_ = {}), (e.lastTimelineChanges_ = {}), e;
           }
           Ge(e, t);
           var i = e.prototype;
           return (
               (i.clearPendingTimelineChange = function (e) {
                   (this.pendingTimelineChanges_[e] = null), this.trigger("pendingtimelinechange");
               }),
               (i.pendingTimelineChange = function (e) {
                   var t = e.type,
                       i = e.from,
                       n = e.to;
                   return "number" == typeof i && "number" == typeof n && ((this.pendingTimelineChanges_[t] = { type: t, from: i, to: n }), this.trigger("pendingtimelinechange")), this.pendingTimelineChanges_[t];
               }),
               (i.lastTimelineChange = function (e) {
                   var t = e.type,
                       i = e.from,
                       n = e.to;
                   return "number" == typeof i && "number" == typeof n && ((this.lastTimelineChanges_[t] = { type: t, from: i, to: n }), delete this.pendingTimelineChanges_[t], this.trigger("timelinechange")), this.lastTimelineChanges_[t];
               }),
               (i.dispose = function () {
                   this.trigger("dispose"), (this.pendingTimelineChanges_ = {}), (this.lastTimelineChanges_ = {}), this.off();
               }),
               e
           );
       })(da.EventTarget),
       kd = new kc("./decrypter-worker.worker.js", function (e, t) {
           var i,
               n,
               r,
               c,
               g,
               l,
               s,
               a = this;
           /*! @name @videojs/http-streaming @version 2.2.4 @license Apache-2.0 */ (i = function (e, t, i) {
               return t && o(e.prototype, t), i && o(e, i), e;
           }),
               (n = function (e, t) {
                   (e.prototype = Object.create(t.prototype)), ((e.prototype.constructor = e).__proto__ = t);
               }),
               (r = (function () {
                   function e() {
                       this.listeners = {};
                   }
                   var t = e.prototype;
                   return (
                       (t.on = function (e, t) {
                           this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t);
                       }),
                       (t.off = function (e, t) {
                           if (!this.listeners[e]) return !1;
                           var i = this.listeners[e].indexOf(t);
                           return (this.listeners[e] = this.listeners[e].slice(0)), this.listeners[e].splice(i, 1), -1 < i;
                       }),
                       (t.trigger = function (e, t) {
                           var i = this.listeners[e];
                           if (i)
                               if (2 === arguments.length) for (var n = i.length, r = 0; r < n; ++r) i[r].call(this, t);
                               else for (var a = Array.prototype.slice.call(arguments, 1), s = i.length, o = 0; o < s; ++o) i[o].apply(this, a);
                       }),
                       (t.dispose = function () {
                           this.listeners = {};
                       }),
                       (t.pipe = function (t) {
                           this.on("data", function (e) {
                               t.push(e);
                           });
                       }),
                       e
                   );
               })()),
               (c = null),
               (g = (function () {
                   function e(e) {
                       var t, i, n;
                       (c =
                           c ||
                           (function () {
                               var e,
                                   t,
                                   i,
                                   n,
                                   r,
                                   a,
                                   s,
                                   o,
                                   u = [
                                       [[], [], [], [], []],
                                       [[], [], [], [], []],
                                   ],
                                   l = u[0],
                                   c = u[1],
                                   d = l[4],
                                   h = c[4],
                                   p = [],
                                   f = [];
                               for (e = 0; e < 256; e++) f[(p[e] = (e << 1) ^ (283 * (e >> 7))) ^ e] = e;
                               for (t = i = 0; !d[t]; t ^= n || 1, i = f[i] || 1)
                                   for (
                                       a = ((a = i ^ (i << 1) ^ (i << 2) ^ (i << 3) ^ (i << 4)) >> 8) ^ (255 & a) ^ 99,
                                           o = (16843009 * p[(r = p[(n = p[(h[(d[t] = a)] = t)])])]) ^ (65537 * r) ^ (257 * n) ^ (16843008 * t),
                                           s = (257 * p[a]) ^ (16843008 * a),
                                           e = 0;
                                       e < 4;
                                       e++
                                   )
                                       (l[e][t] = s = (s << 24) ^ (s >>> 8)), (c[e][a] = o = (o << 24) ^ (o >>> 8));
                               for (e = 0; e < 5; e++) (l[e] = l[e].slice(0)), (c[e] = c[e].slice(0));
                               return u;
                           })()),
                           (this._tables = [
                               [c[0][0].slice(), c[0][1].slice(), c[0][2].slice(), c[0][3].slice(), c[0][4].slice()],
                               [c[1][0].slice(), c[1][1].slice(), c[1][2].slice(), c[1][3].slice(), c[1][4].slice()],
                           ]);
                       var r = this._tables[0][4],
                           a = this._tables[1],
                           s = e.length,
                           o = 1;
                       if (4 !== s && 6 !== s && 8 !== s) throw new Error("Invalid aes key size");
                       var u = e.slice(0),
                           l = [];
                       for (this._key = [u, l], t = s; t < 4 * s + 28; t++)
                           (n = u[t - 1]),
                               (t % s == 0 || (8 === s && t % s == 4)) &&
                                   ((n = (r[n >>> 24] << 24) ^ (r[(n >> 16) & 255] << 16) ^ (r[(n >> 8) & 255] << 8) ^ r[255 & n]), t % s == 0 && ((n = (n << 8) ^ (n >>> 24) ^ (o << 24)), (o = (o << 1) ^ (283 * (o >> 7))))),
                               (u[t] = u[t - s] ^ n);
                       for (i = 0; t; i++, t--) (n = u[3 & i ? t : t - 4]), (l[i] = t <= 4 || i < 4 ? n : a[0][r[n >>> 24]] ^ a[1][r[(n >> 16) & 255]] ^ a[2][r[(n >> 8) & 255]] ^ a[3][r[255 & n]]);
                   }
                   return (
                       (e.prototype.decrypt = function (e, t, i, n, r, a) {
                           var s,
                               o,
                               u,
                               l,
                               c = this._key[1],
                               d = e ^ c[0],
                               h = n ^ c[1],
                               p = i ^ c[2],
                               f = t ^ c[3],
                               m = c.length / 4 - 2,
                               g = 4,
                               v = this._tables[1],
                               y = v[0],
                               _ = v[1],
                               b = v[2],
                               T = v[3],
                               S = v[4];
                           for (l = 0; l < m; l++)
                               (s = y[d >>> 24] ^ _[(h >> 16) & 255] ^ b[(p >> 8) & 255] ^ T[255 & f] ^ c[g]),
                                   (o = y[h >>> 24] ^ _[(p >> 16) & 255] ^ b[(f >> 8) & 255] ^ T[255 & d] ^ c[g + 1]),
                                   (u = y[p >>> 24] ^ _[(f >> 16) & 255] ^ b[(d >> 8) & 255] ^ T[255 & h] ^ c[g + 2]),
                                   (f = y[f >>> 24] ^ _[(d >> 16) & 255] ^ b[(h >> 8) & 255] ^ T[255 & p] ^ c[g + 3]),
                                   (g += 4),
                                   (d = s),
                                   (h = o),
                                   (p = u);
                           for (l = 0; l < 4; l++) (r[(3 & -l) + a] = (S[d >>> 24] << 24) ^ (S[(h >> 16) & 255] << 16) ^ (S[(p >> 8) & 255] << 8) ^ S[255 & f] ^ c[g++]), (s = d), (d = h), (h = p), (p = f), (f = s);
                       }),
                       e
                   );
               })()),
               (l = (function (t) {
                   function e() {
                       var e;
                       return ((e = t.call(this, r) || this).jobs = []), (e.delay = 1), (e.timeout_ = null), e;
                   }
                   n(e, t);
                   var i = e.prototype;
                   return (
                       (i.processJob_ = function () {
                           this.jobs.shift()(), this.jobs.length ? (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay)) : (this.timeout_ = null);
                       }),
                       (i.push = function (e) {
                           this.jobs.push(e), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay));
                       }),
                       e
                   );
               })(r)),
               (s = (function () {
                   function u(e, t, i, n) {
                       var r = u.STEP,
                           a = new Int32Array(e.buffer),
                           s = new Uint8Array(e.byteLength),
                           o = 0;
                       for (this.asyncStream_ = new l(), this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + r), t, i, s)), o = r; o < a.length; o += r)
                           (i = new Uint32Array([v(a[o - 4]), v(a[o - 3]), v(a[o - 2]), v(a[o - 1])])), this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + r), t, i, s));
                       this.asyncStream_.push(function () {
                           n(
                               null,
                               /*! @name pkcs7 @version 1.0.4 @license Apache-2.0 */
                               (function (e) {
                                   return e.subarray(0, e.byteLength - e[e.byteLength - 1]);
                               })(/*! @name aes-decrypter @version 3.1.0 @license Apache-2.0 */ s)
                           );
                       });
                   }
                   return (
                       (u.prototype.decryptChunk_ = function (t, i, n, r) {
                           return function () {
                               var e = (function (e, t, i) {
                                   var n,
                                       r,
                                       a,
                                       s,
                                       o,
                                       u,
                                       l,
                                       c,
                                       d,
                                       h = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
                                       p = new g(Array.prototype.slice.call(t)),
                                       f = new Uint8Array(e.byteLength),
                                       m = new Int32Array(f.buffer);
                                   for (n = i[0], r = i[1], a = i[2], s = i[3], d = 0; d < h.length; d += 4)
                                       (o = v(h[d])),
                                           (u = v(h[d + 1])),
                                           (l = v(h[d + 2])),
                                           (c = v(h[d + 3])),
                                           p.decrypt(o, u, l, c, m, d),
                                           (m[d] = v(m[d] ^ n)),
                                           (m[d + 1] = v(m[d + 1] ^ r)),
                                           (m[d + 2] = v(m[d + 2] ^ a)),
                                           (m[d + 3] = v(m[d + 3] ^ s)),
                                           (n = o),
                                           (r = u),
                                           (a = l),
                                           (s = c);
                                   return f;
                               })(t, i, n);
                               r.set(e, t.byteOffset);
                           };
                       }),
                       i(u, null, [
                           {
                               key: "STEP",
                               get: function () {
                                   return 32e3;
                               },
                           },
                       ]),
                       u
                   );
               })()),
               new (function (a) {
                   a.onmessage = function (e) {
                       var i = e.data,
                           t = new Uint8Array(i.encrypted.bytes, i.encrypted.byteOffset, i.encrypted.byteLength),
                           n = new Uint32Array(i.key.bytes, i.key.byteOffset, i.key.byteLength / 4),
                           r = new Uint32Array(i.iv.bytes, i.iv.byteOffset, i.iv.byteLength / 4);
                       new s(t, n, r, function (e, t) {
                           a.postMessage(
                               (function (i) {
                                   var n = {};
                                   return (
                                       Object.keys(i).forEach(function (e) {
                                           var t = i[e];
                                           ArrayBuffer.isView(t) ? (n[e] = { bytes: t.buffer, byteOffset: t.byteOffset, byteLength: t.byteLength }) : (n[e] = t);
                                       }),
                                       n
                                   );
                               })({ source: i.source, decrypted: t }),
                               [t.buffer]
                           );
                       });
                   };
               })(a);
           function o(e, t) {
               for (var i = 0; i < t.length; i++) {
                   var n = t[i];
                   (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
               }
           }
           function v(e) {
               return (e << 24) | ((65280 & e) << 8) | ((16711680 & e) >> 8) | (e >>> 24);
           }
       }),
       Cd = {
           AUDIO: function (u, l) {
               return function () {
                   var e = l.segmentLoaders[u],
                       t = l.mediaTypes[u],
                       i = l.blacklistCurrentPlaylist;
                   ed(e, t);
                   var n = t.activeTrack(),
                       r = t.activeGroup(),
                       a = (
                           r.filter(function (e) {
                               return e.default;
                           })[0] || r[0]
                       ).id,
                       s = t.tracks[a];
                   if (n !== s) {
                       for (var o in (da.log.warn("Problem encountered loading the alternate audio track.Switching back to default."), t.tracks)) t.tracks[o].enabled = t.tracks[o] === s;
                       t.onTrackChanged();
                   } else i({ message: "Problem encountered loading the default audio track." });
               };
           },
           SUBTITLES: function (n, r) {
               return function () {
                   var e = r.segmentLoaders[n],
                       t = r.mediaTypes[n];
                   da.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), ed(e, t);
                   var i = t.activeTrack();
                   i && (i.mode = "disabled"), t.onTrackChanged();
               };
           },
       },
       Ed = {
           AUDIO: function (e, t, i) {
               if (t) {
                   var n = i.tech,
                       r = i.requestOptions,
                       a = i.segmentLoaders[e];
                   t.on("loadedmetadata", function () {
                       var e = t.media();
                       a.playlist(e, r), (!n.paused() || (e.endList && "none" !== n.preload())) && a.load();
                   }),
                       t.on("loadedplaylist", function () {
                           a.playlist(t.media(), r), n.paused() || a.load();
                       }),
                       t.on("error", Cd[e](e, i));
               }
           },
           SUBTITLES: function (e, t, i) {
               var n = i.tech,
                   r = i.requestOptions,
                   a = i.segmentLoaders[e],
                   s = i.mediaTypes[e];
               t.on("loadedmetadata", function () {
                   var e = t.media();
                   a.playlist(e, r), a.track(s.activeTrack()), (!n.paused() || (e.endList && "none" !== n.preload())) && a.load();
               }),
                   t.on("loadedplaylist", function () {
                       a.playlist(t.media(), r), n.paused() || a.load();
                   }),
                   t.on("error", Cd[e](e, i));
           },
       },
       wd = {
           AUDIO: function (s, o) {
               var u = o.vhs,
                   l = o.sourceType,
                   e = o.segmentLoaders[s],
                   c = o.requestOptions,
                   t = o.master,
                   d = t.mediaGroups,
                   i = t.playlists,
                   n = o.mediaTypes[s],
                   h = n.groups,
                   p = n.tracks,
                   f = o.masterPlaylistLoader;
               (d[s] && 0 !== Object.keys(d[s]).length) || (d[s] = { main: { default: { default: !0 } } });
               function r(r) {
                   function e(e) {
                       var t = d[s][r][e];
                       a.filter(function (e) {
                           return e.resolvedUri === t.resolvedUri;
                       }).length && delete t.resolvedUri;
                       var i = void 0;
                       if (
                           ((i = "vhs-json" === l && t.playlists ? new Zl(t.playlists[0], u, c) : t.resolvedUri ? new Zl(t.resolvedUri, u, c) : t.playlists && "dash" === l ? new oc(t.playlists[0], u, c, f) : null),
                           (t = da.mergeOptions({ id: e, playlistLoader: i }, t)),
                           Ed[s](s, t.playlistLoader, o),
                           h[r].push(t),
                           "undefined" == typeof p[e])
                       ) {
                           var n = new da.AudioTrack({
                               id: e,
                               kind: (function (e) {
                                   var t = e.default ? "main" : "alternative";
                                   return e.characteristics && 0 <= e.characteristics.indexOf("public.accessibility.describes-video") && (t = "main-desc"), t;
                               })(t),
                               enabled: !1,
                               language: t.language,
                               default: t.default,
                               label: e,
                           });
                           p[e] = n;
                       }
                   }
                   h[r] || (h[r] = []);
                   var a = i.filter(function (e) {
                       return e.attributes[s] === r;
                   });
                   for (var t in d[s][r]) e(t);
               }
               for (var a in d[s]) r(a);
               e.on("error", Cd[s](s, o));
           },
           SUBTITLES: function (e, t) {
               var i = t.tech,
                   n = t.vhs,
                   r = t.sourceType,
                   a = t.segmentLoaders[e],
                   s = t.requestOptions,
                   o = t.master.mediaGroups,
                   u = t.mediaTypes[e],
                   l = u.groups,
                   c = u.tracks,
                   d = t.masterPlaylistLoader;
               for (var h in o[e])
                   for (var p in (l[h] || (l[h] = []), o[e][h]))
                       if (!o[e][h][p].forced) {
                           var f = o[e][h][p],
                               m = void 0;
                           if (
                               ("hls" === r ? (m = new Zl(f.resolvedUri, n, s)) : "dash" === r ? (m = new oc(f.playlists[0], n, s, d)) : "vhs-json" === r && (m = new Zl(f.playlists ? f.playlists[0] : f.resolvedUri, n, s)),
                               (f = da.mergeOptions({ id: p, playlistLoader: m }, f)),
                               Ed[e](e, f.playlistLoader, t),
                               l[h].push(f),
                               "undefined" == typeof c[p])
                           ) {
                               var g = i.addRemoteTextTrack({ id: p, kind: "subtitles", default: f.default && f.autoselect, language: f.language, label: p }, !1).track;
                               c[p] = g;
                           }
                       }
               a.on("error", Cd[e](e, t));
           },
           "CLOSED-CAPTIONS": function (e, t) {
               var i = t.tech,
                   n = t.master.mediaGroups,
                   r = t.mediaTypes[e],
                   a = r.groups,
                   s = r.tracks;
               for (var o in n[e])
                   for (var u in (a[o] || (a[o] = []), n[e][o])) {
                       var l = n[e][o][u];
                       if (l.instreamId.match(/CC\d/) && (a[o].push(da.mergeOptions({ id: u }, l)), "undefined" == typeof s[u])) {
                           var c = i.addRemoteTextTrack({ id: l.instreamId, kind: "captions", default: l.default && l.autoselect, language: l.language, label: u }, !1).track;
                           s[u] = c;
                       }
                   }
           },
       },
       Id = {
           AUDIO: function (i, n) {
               return function () {
                   var e = n.mediaTypes[i].tracks;
                   for (var t in e) if (e[t].enabled) return e[t];
                   return null;
               };
           },
           SUBTITLES: function (i, n) {
               return function () {
                   var e = n.mediaTypes[i].tracks;
                   for (var t in e) if ("showing" === e[t].mode || "hidden" === e[t].mode) return e[t];
                   return null;
               };
           },
       },
       Ad = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"],
       xd = (function (m) {
           function e(e) {
               var t;
               t = m.call(this) || this;
               var i = e.src,
                   n = e.handleManifestRedirects,
                   r = e.withCredentials,
                   a = e.tech,
                   s = e.bandwidth,
                   o = e.externVhs,
                   u = e.useCueTags,
                   l = e.blacklistDuration,
                   c = e.enableLowInitialPlaylist,
                   d = e.sourceType,
                   h = e.cacheEncryptionKeys,
                   p = e.handlePartialData;
               if (!i) throw new Error("A non-empty playlist URL or JSON manifest string is required");
               (ad = o),
                   (t.withCredentials = r),
                   (t.tech_ = a),
                   (t.vhs_ = a.vhs),
                   (t.sourceType_ = d),
                   (t.useCueTags_ = u),
                   (t.blacklistDuration = l),
                   (t.enableLowInitialPlaylist = c),
                   t.useCueTags_ && ((t.cueTagsTrack_ = t.tech_.addTextTrack("metadata", "ad-cues")), (t.cueTagsTrack_.inBandMetadataTrackDispatchType = "")),
                   (t.requestOptions_ = { withCredentials: r, handleManifestRedirects: n, timeout: null }),
                   t.on("error", t.pauseLoading),
                   (t.mediaTypes_ = (function () {
                       var t = {};
                       return (
                           ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function (e) {
                               t[e] = { groups: {}, tracks: {}, activePlaylistLoader: null, activeGroup: Wc, activeTrack: Wc, onGroupChanged: Wc, onTrackChanged: Wc };
                           }),
                           t
                       );
                   })()),
                   (t.mediaSource = new T.MediaSource()),
                   (t.handleDurationChange_ = t.handleDurationChange_.bind(Ve(t))),
                   (t.handleSourceOpen_ = t.handleSourceOpen_.bind(Ve(t))),
                   (t.handleSourceEnded_ = t.handleSourceEnded_.bind(Ve(t))),
                   t.mediaSource.addEventListener("durationchange", t.handleDurationChange_),
                   t.mediaSource.addEventListener("sourceopen", t.handleSourceOpen_),
                   t.mediaSource.addEventListener("sourceended", t.handleSourceEnded_),
                   (t.seekable_ = da.createTimeRanges()),
                   (t.hasPlayed_ = !1),
                   (t.syncController_ = new Td(e)),
                   (t.segmentMetadataTrack_ = a.addRemoteTextTrack({ kind: "metadata", label: "segment-metadata" }, !1).track),
                   (t.decrypter_ = new kd()),
                   (t.sourceUpdater_ = new vd(t.mediaSource)),
                   (t.inbandTextTracks_ = {}),
                   (t.timelineChangeController_ = new Sd());
               var f = {
                   vhs: t.vhs_,
                   mediaSource: t.mediaSource,
                   currentTime: t.tech_.currentTime.bind(t.tech_),
                   seekable: function () {
                       return t.seekable();
                   },
                   seeking: function () {
                       return t.tech_.seeking();
                   },
                   duration: function () {
                       return t.duration();
                   },
                   hasPlayed: function () {
                       return t.hasPlayed_;
                   },
                   goalBufferLength: function () {
                       return t.goalBufferLength();
                   },
                   bandwidth: s,
                   syncController: t.syncController_,
                   decrypter: t.decrypter_,
                   sourceType: t.sourceType_,
                   inbandTextTracks: t.inbandTextTracks_,
                   cacheEncryptionKeys: h,
                   handlePartialData: p,
                   sourceUpdater: t.sourceUpdater_,
                   timelineChangeController: t.timelineChangeController_,
               };
               return (
                   (t.masterPlaylistLoader_ = "dash" === t.sourceType_ ? new oc(i, t.vhs_, t.requestOptions_) : new Zl(i, t.vhs_, t.requestOptions_)),
                   t.setupMasterPlaylistLoaderListeners_(),
                   (t.mainSegmentLoader_ = new Hc(da.mergeOptions(f, { segmentMetadataTrack: t.segmentMetadataTrack_, loaderType: "main" }), e)),
                   (t.audioSegmentLoader_ = new Hc(da.mergeOptions(f, { loaderType: "audio" }), e)),
                   (t.subtitleSegmentLoader_ = new _d(da.mergeOptions(f, { loaderType: "vtt", featuresNativeTextTracks: t.tech_.featuresNativeTextTracks }), e)),
                   t.setupSegmentLoaderListeners_(),
                   Ad.forEach(function (e) {
                       t[e + "_"] = function (e) {
                           return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e];
                       }.bind(Ve(t), e);
                   }),
                   (t.logger_ = Pc("MPC")),
                   (t.triggeredFmp4Usage = !1),
                   t.masterPlaylistLoader_.load(),
                   t
               );
           }
           Ge(e, m);
           var t = e.prototype;
           return (
               (t.setupMasterPlaylistLoaderListeners_ = function () {
                   var i = this;
                   this.masterPlaylistLoader_.on("loadedmetadata", function () {
                       var e = i.masterPlaylistLoader_.media(),
                           t = 1.5 * e.targetDuration * 1e3;
                       ll(i.masterPlaylistLoader_.master, i.masterPlaylistLoader_.media()) ? (i.requestOptions_.timeout = 0) : (i.requestOptions_.timeout = t),
                           e.endList && "none" !== i.tech_.preload() && (i.mainSegmentLoader_.playlist(e, i.requestOptions_), i.mainSegmentLoader_.load()),
                           id({
                               sourceType: i.sourceType_,
                               segmentLoaders: { AUDIO: i.audioSegmentLoader_, SUBTITLES: i.subtitleSegmentLoader_, main: i.mainSegmentLoader_ },
                               tech: i.tech_,
                               requestOptions: i.requestOptions_,
                               masterPlaylistLoader: i.masterPlaylistLoader_,
                               vhs: i.vhs_,
                               master: i.master(),
                               mediaTypes: i.mediaTypes_,
                               blacklistCurrentPlaylist: i.blacklistCurrentPlaylist.bind(i),
                           }),
                           i.triggerPresenceUsage_(i.master(), e),
                           i.setupFirstPlay(),
                           !i.mediaTypes_.AUDIO.activePlaylistLoader || i.mediaTypes_.AUDIO.activePlaylistLoader.media()
                               ? i.trigger("selectedinitialmedia")
                               : i.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", function () {
                                     i.trigger("selectedinitialmedia");
                                 });
                   }),
                       this.masterPlaylistLoader_.on("loadedplaylist", function () {
                           var e = i.masterPlaylistLoader_.media();
                           if (!e) {
                               var t;
                               if (
                                   (i.excludeUnsupportedVariants_(),
                                   i.enableLowInitialPlaylist && (t = i.selectInitialPlaylist()),
                                   (t = t || i.selectPlaylist()),
                                   (i.initialMedia_ = t),
                                   i.masterPlaylistLoader_.media(i.initialMedia_),
                                   !("vhs-json" === i.sourceType_ && i.initialMedia_.segments))
                               )
                                   return;
                               e = i.initialMedia_;
                           }
                           i.handleUpdatedMediaPlaylist(e);
                       }),
                       this.masterPlaylistLoader_.on("error", function () {
                           i.blacklistCurrentPlaylist(i.masterPlaylistLoader_.error);
                       }),
                       this.masterPlaylistLoader_.on("mediachanging", function () {
                           i.mainSegmentLoader_.abort(), i.mainSegmentLoader_.pause();
                       }),
                       this.masterPlaylistLoader_.on("mediachange", function () {
                           var e = i.masterPlaylistLoader_.media(),
                               t = 1.5 * e.targetDuration * 1e3;
                           ll(i.masterPlaylistLoader_.master, i.masterPlaylistLoader_.media()) ? (i.requestOptions_.timeout = 0) : (i.requestOptions_.timeout = t),
                               i.mainSegmentLoader_.playlist(e, i.requestOptions_),
                               i.mainSegmentLoader_.load(),
                               i.tech_.trigger({ type: "mediachange", bubbles: !0 });
                       }),
                       this.masterPlaylistLoader_.on("playlistunchanged", function () {
                           var e = i.masterPlaylistLoader_.media();
                           i.stuckAtPlaylistEnd_(e) && (i.blacklistCurrentPlaylist({ message: "Playlist no longer updating." }), i.tech_.trigger("playliststuck"));
                       }),
                       this.masterPlaylistLoader_.on("renditiondisabled", function () {
                           i.tech_.trigger({ type: "usage", name: "vhs-rendition-disabled" }), i.tech_.trigger({ type: "usage", name: "hls-rendition-disabled" });
                       }),
                       this.masterPlaylistLoader_.on("renditionenabled", function () {
                           i.tech_.trigger({ type: "usage", name: "vhs-rendition-enabled" }), i.tech_.trigger({ type: "usage", name: "hls-rendition-enabled" });
                       });
               }),
               (t.handleUpdatedMediaPlaylist = function (e) {
                   this.useCueTags_ && this.updateAdCues_(e),
                       this.mainSegmentLoader_.playlist(e, this.requestOptions_),
                       this.updateDuration(!e.endList),
                       this.tech_.paused() || (this.mainSegmentLoader_.load(), this.audioSegmentLoader_ && this.audioSegmentLoader_.load());
               }),
               (t.triggerPresenceUsage_ = function (e, t) {
                   var i = e.mediaGroups || {},
                       n = !0,
                       r = Object.keys(i.AUDIO);
                   for (var a in i.AUDIO)
                       for (var s in i.AUDIO[a]) {
                           i.AUDIO[a][s].uri || (n = !1);
                       }
                   n && (this.tech_.trigger({ type: "usage", name: "vhs-demuxed" }), this.tech_.trigger({ type: "usage", name: "hls-demuxed" })),
                       Object.keys(i.SUBTITLES).length && (this.tech_.trigger({ type: "usage", name: "vhs-webvtt" }), this.tech_.trigger({ type: "usage", name: "hls-webvtt" })),
                       ad.Playlist.isAes(t) && (this.tech_.trigger({ type: "usage", name: "vhs-aes" }), this.tech_.trigger({ type: "usage", name: "hls-aes" })),
                       r.length && 1 < Object.keys(i.AUDIO[r[0]]).length && (this.tech_.trigger({ type: "usage", name: "vhs-alternate-audio" }), this.tech_.trigger({ type: "usage", name: "hls-alternate-audio" })),
                       this.useCueTags_ && (this.tech_.trigger({ type: "usage", name: "vhs-playlist-cue-tags" }), this.tech_.trigger({ type: "usage", name: "hls-playlist-cue-tags" }));
               }),
               (t.setupSegmentLoaderListeners_ = function () {
                   var n = this;
                   this.mainSegmentLoader_.on("bandwidthupdate", function () {
                       var e = n.selectPlaylist(),
                           t = n.masterPlaylistLoader_.media(),
                           i = n.tech_.buffered();
                       !(function (e) {
                           var t = e.currentPlaylist,
                               i = e.nextPlaylist,
                               n = e.forwardBuffer,
                               r = e.bufferLowWaterLine,
                               a = e.duration;
                           e.log;
                           return i ? !t.endList || a < uc.MAX_BUFFER_LOW_WATER_LINE || i.attributes.BANDWIDTH < t.attributes.BANDWIDTH || r <= n : (da.log.warn("We received no playlist to switch to. Please check your stream."), !1);
                       })({ currentPlaylist: t, nextPlaylist: e, forwardBuffer: i.length ? i.end(i.length - 1) - n.tech_.currentTime() : 0, bufferLowWaterLine: n.bufferLowWaterLine(), duration: n.duration(), log: n.logger_ }) ||
                           n.masterPlaylistLoader_.media(e),
                           n.tech_.trigger("bandwidthupdate");
                   }),
                       this.mainSegmentLoader_.on("progress", function () {
                           n.trigger("progress");
                       }),
                       this.mainSegmentLoader_.on("error", function () {
                           n.blacklistCurrentPlaylist(n.mainSegmentLoader_.error());
                       }),
                       this.mainSegmentLoader_.on("appenderror", function () {
                           (n.error = n.mainSegmentLoader_.error_), n.trigger("error");
                       }),
                       this.mainSegmentLoader_.on("syncinfoupdate", function () {
                           n.onSyncInfoUpdate_();
                       }),
                       this.mainSegmentLoader_.on("timestampoffset", function () {
                           n.tech_.trigger({ type: "usage", name: "vhs-timestamp-offset" }), n.tech_.trigger({ type: "usage", name: "hls-timestamp-offset" });
                       }),
                       this.audioSegmentLoader_.on("syncinfoupdate", function () {
                           n.onSyncInfoUpdate_();
                       }),
                       this.audioSegmentLoader_.on("appenderror", function () {
                           (n.error = n.audioSegmentLoader_.error_), n.trigger("error");
                       }),
                       this.mainSegmentLoader_.on("ended", function () {
                           n.logger_("main segment loader ended"), n.onEndOfStream();
                       }),
                       this.mainSegmentLoader_.on("earlyabort", function () {
                           n.blacklistCurrentPlaylist({ message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering." }, 120);
                       });
                   function e() {
                       if (!n.sourceUpdater_.ready()) return n.tryToCreateSourceBuffers_();
                       var e = n.getCodecsOrExclude_();
                       e && n.sourceUpdater_.addOrChangeSourceBuffers(e);
                   }
                   this.mainSegmentLoader_.on("trackinfo", e),
                       this.audioSegmentLoader_.on("trackinfo", e),
                       this.mainSegmentLoader_.on("fmp4", function () {
                           n.triggeredFmp4Usage || (n.tech_.trigger({ type: "usage", name: "vhs-fmp4" }), n.tech_.trigger({ type: "usage", name: "hls-fmp4" }), (n.triggeredFmp4Usage = !0));
                       }),
                       this.audioSegmentLoader_.on("fmp4", function () {
                           n.triggeredFmp4Usage || (n.tech_.trigger({ type: "usage", name: "vhs-fmp4" }), n.tech_.trigger({ type: "usage", name: "hls-fmp4" }), (n.triggeredFmp4Usage = !0));
                       }),
                       this.audioSegmentLoader_.on("ended", function () {
                           n.logger_("audioSegmentLoader ended"), n.onEndOfStream();
                       });
               }),
               (t.mediaSecondsLoaded_ = function () {
                   return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded);
               }),
               (t.load = function () {
                   this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load();
               }),
               (t.smoothQualityChange_ = function (e) {
                   void 0 === e && (e = this.selectPlaylist()), e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e), this.mainSegmentLoader_.resetLoader());
               }),
               (t.fastQualityChange_ = function (e) {
                   var t = this;
                   void 0 === e && (e = this.selectPlaylist()),
                       e !== this.masterPlaylistLoader_.media() &&
                           (this.masterPlaylistLoader_.media(e),
                           this.mainSegmentLoader_.resetEverything(function () {
                               da.browser.IE_VERSION || da.browser.IS_EDGE ? t.tech_.setCurrentTime(t.tech_.currentTime() + 0.04) : t.tech_.setCurrentTime(t.tech_.currentTime());
                           }));
               }),
               (t.play = function () {
                   if (!this.setupFirstPlay()) {
                       this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_ && this.load();
                       var e = this.tech_.seekable();
                       return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.tech_.setCurrentTime(e.end(e.length - 1)) : void 0;
                   }
               }),
               (t.setupFirstPlay = function () {
                   var e = this,
                       t = this.masterPlaylistLoader_.media();
                   if (!t || this.tech_.paused() || this.hasPlayed_) return !1;
                   if (!t.endList) {
                       var i = this.seekable();
                       if (!i.length) return !1;
                       if (da.browser.IE_VERSION && 0 === this.tech_.readyState())
                           return (
                               this.tech_.one("loadedmetadata", function () {
                                   e.trigger("firstplay"), e.tech_.setCurrentTime(i.end(0)), (e.hasPlayed_ = !0);
                               }),
                               !1
                           );
                       this.trigger("firstplay"), this.tech_.setCurrentTime(i.end(0));
                   }
                   return (this.hasPlayed_ = !0), this.load(), !0;
               }),
               (t.handleSourceOpen_ = function () {
                   if ((this.tryToCreateSourceBuffers_(), this.tech_.autoplay())) {
                       var e = this.tech_.play();
                       "undefined" != typeof e && "function" == typeof e.then && e.then(null, function (e) {});
                   }
                   this.trigger("sourceopen");
               }),
               (t.handleSourceEnded_ = function () {
                   if (this.inbandTextTracks_.metadataTrack_) {
                       var e = this.inbandTextTracks_.metadataTrack_.cues;
                       if (e && e.length) {
                           var t = this.duration();
                           e[e.length - 1].endTime = isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t;
                       }
                   }
               }),
               (t.handleDurationChange_ = function () {
                   this.tech_.trigger("durationchange");
               }),
               (t.onEndOfStream = function () {
                   var e = this.mainSegmentLoader_.ended_;
                   this.mediaTypes_.AUDIO.activePlaylistLoader &&
                       (e = !this.mainSegmentLoader_.currentMediaInfo_ || this.mainSegmentLoader_.currentMediaInfo_.hasVideo ? e && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_),
                       e && this.sourceUpdater_.endOfStream();
               }),
               (t.stuckAtPlaylistEnd_ = function (e) {
                   if (!this.seekable().length) return !1;
                   var t = this.syncController_.getExpiredTime(e, this.duration());
                   if (null === t) return !1;
                   var i = ad.Playlist.playlistEnd(e, t),
                       n = this.tech_.currentTime(),
                       r = this.tech_.buffered();
                   if (!r.length) return i - n <= 0.1;
                   var a = r.end(r.length - 1);
                   return a - n <= 0.1 && i - a <= 0.1;
               }),
               (t.blacklistCurrentPlaylist = function (e, t) {
                   void 0 === e && (e = {});
                   var i = e.playlist || this.masterPlaylistLoader_.media();
                   if (((t = t || e.blacklistDuration || this.blacklistDuration), !i)) return (this.error = e), void ("open" !== this.mediaSource.readyState ? this.trigger("error") : this.sourceUpdater_.endOfStream("network"));
                   var n = this.masterPlaylistLoader_.master.playlists,
                       r = n.filter(ol),
                       a = 1 === r.length && r[0] === i;
                   if (1 === n.length && t !== 1 / 0)
                       return da.log.warn("Problem encountered with playlist " + i.id + ". Trying again since it is the only playlist."), this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(a);
                   if (a) {
                       var s = !1;
                       n.forEach(function (e) {
                           if (e !== i) {
                               var t = e.excludeUntil;
                               "undefined" != typeof t && t !== 1 / 0 && ((s = !0), delete e.excludeUntil);
                           }
                       }),
                           s && (da.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded."), this.tech_.trigger("retryplaylist"));
                   }
                   (i.excludeUntil = Date.now() + 1e3 * t),
                       this.tech_.trigger("blacklistplaylist"),
                       this.tech_.trigger({ type: "usage", name: "vhs-rendition-blacklisted" }),
                       this.tech_.trigger({ type: "usage", name: "hls-rendition-blacklisted" });
                   var o = this.selectPlaylist();
                   if (!o) return (this.error = "Playback cannot continue. No available working or supported playlists."), void this.trigger("error");
                   var u = e.internal ? this.logger_ : da.log.warn,
                       l = e.message ? " " + e.message : "";
                   return (
                       u((e.internal ? "Internal problem" : "Problem") + " encountered with playlist " + i.id + "." + l + " Switching to playlist " + o.id + "."),
                       o.attributes.AUDIO !== i.attributes.AUDIO && this.delegateLoaders_("audio", ["abort", "pause"]),
                       o.attributes.SUBTITLES !== i.attributes.SUBTITLES && this.delegateLoaders_("subtitle", ["abort", "pause"]),
                       this.delegateLoaders_("main", ["abort", "pause"]),
                       this.masterPlaylistLoader_.media(o, a)
                   );
               }),
               (t.pauseLoading = function () {
                   this.delegateLoaders_("all", ["abort", "pause"]);
               }),
               (t.delegateLoaders_ = function (i, e) {
                   var n = this,
                       r = [],
                       t = "all" === i;
                   (!t && "main" !== i) || r.push(this.masterPlaylistLoader_);
                   var a = [];
                   (!t && "audio" !== i) || a.push("AUDIO"),
                       (!t && "subtitle" !== i) || (a.push("CLOSED-CAPTIONS"), a.push("SUBTITLES")),
                       a.forEach(function (e) {
                           var t = n.mediaTypes_[e] && n.mediaTypes_[e].activePlaylistLoader;
                           t && r.push(t);
                       }),
                       ["main", "audio", "subtitle"].forEach(function (e) {
                           var t = n[e + "SegmentLoader_"];
                           !t || (i !== e && "all" !== i) || r.push(t);
                       }),
                       r.forEach(function (t) {
                           return e.forEach(function (e) {
                               "function" == typeof t[e] && t[e]();
                           });
                       });
               }),
               (t.setCurrentTime = function (e) {
                   var t = $u(this.tech_.buffered(), e);
                   return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments
                       ? t && t.length
                           ? e
                           : (this.mainSegmentLoader_.resetEverything(),
                             this.mainSegmentLoader_.abort(),
                             this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()),
                             this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()),
                             void this.load())
                       : 0;
               }),
               (t.duration = function () {
                   if (!this.masterPlaylistLoader_) return 0;
                   var e = this.masterPlaylistLoader_.media();
                   return e ? (e.endList ? (this.mediaSource ? this.mediaSource.duration : ad.Playlist.duration(e)) : 1 / 0) : 0;
               }),
               (t.seekable = function () {
                   return this.seekable_;
               }),
               (t.onSyncInfoUpdate_ = function () {
                   var e;
                   if (this.masterPlaylistLoader_) {
                       var t = this.masterPlaylistLoader_.media();
                       if (t) {
                           var i = this.syncController_.getExpiredTime(t, this.duration());
                           if (null !== i) {
                               var n = this.masterPlaylistLoader_.master.suggestedPresentationDelay,
                                   r = ad.Playlist.seekable(t, i, n);
                               if (0 !== r.length) {
                                   if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                                       if (((t = this.mediaTypes_.AUDIO.activePlaylistLoader.media()), null === (i = this.syncController_.getExpiredTime(t, this.duration())))) return;
                                       if (0 === (e = ad.Playlist.seekable(t, i, n)).length) return;
                                   }
                                   var a, s;
                                   this.seekable_ && this.seekable_.length && ((a = this.seekable_.end(0)), (s = this.seekable_.start(0))),
                                       e
                                           ? e.start(0) > r.end(0) || r.start(0) > e.end(0)
                                               ? (this.seekable_ = r)
                                               : (this.seekable_ = da.createTimeRanges([[e.start(0) > r.start(0) ? e.start(0) : r.start(0), e.end(0) < r.end(0) ? e.end(0) : r.end(0)]]))
                                           : (this.seekable_ = r),
                                       (this.seekable_ && this.seekable_.length && this.seekable_.end(0) === a && this.seekable_.start(0) === s) ||
                                           (this.logger_("seekable updated [" + Ju(this.seekable_) + "]"), this.tech_.trigger("seekablechanged"));
                               }
                           }
                       }
                   }
               }),
               (t.updateDuration = function (e) {
                   if ((this.updateDuration_ && (this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), (this.updateDuration_ = null)), "open" !== this.mediaSource.readyState))
                       return (this.updateDuration_ = this.updateDuration.bind(this, e)), void this.mediaSource.addEventListener("sourceopen", this.updateDuration_);
                   if (e) {
                       var t = this.seekable();
                       if (!t.length) return;
                       (isNaN(this.mediaSource.duration) || this.mediaSource.duration < t.end(t.length - 1)) && this.sourceUpdater_.setDuration(t.end(t.length - 1));
                   } else {
                       var i = this.tech_.buffered(),
                           n = ad.Playlist.duration(this.masterPlaylistLoader_.media());
                       0 < i.length && (n = Math.max(n, i.end(i.length - 1))), this.mediaSource.duration !== n && this.sourceUpdater_.setDuration(n);
                   }
               }),
               (t.dispose = function () {
                   var n = this;
                   this.trigger("dispose"),
                       this.decrypter_.terminate(),
                       this.masterPlaylistLoader_.dispose(),
                       this.mainSegmentLoader_.dispose(),
                       ["AUDIO", "SUBTITLES"].forEach(function (e) {
                           var t = n.mediaTypes_[e].groups;
                           for (var i in t)
                               t[i].forEach(function (e) {
                                   e.playlistLoader && e.playlistLoader.dispose();
                               });
                       }),
                       this.audioSegmentLoader_.dispose(),
                       this.subtitleSegmentLoader_.dispose(),
                       this.sourceUpdater_.dispose(),
                       this.timelineChangeController_.dispose(),
                       this.updateDuration_ && this.mediaSource.removeEventListener("sourceopen", this.updateDuration_),
                       this.mediaSource.removeEventListener("durationchange", this.handleDurationChange_),
                       this.mediaSource.removeEventListener("sourceopen", this.handleSourceOpen_),
                       this.mediaSource.removeEventListener("sourceended", this.handleSourceEnded_),
                       this.off();
               }),
               (t.master = function () {
                   return this.masterPlaylistLoader_.master;
               }),
               (t.media = function () {
                   return this.masterPlaylistLoader_.media() || this.initialMedia_;
               }),
               (t.areMediaTypesKnown_ = function () {
                   var e = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
                   return !(!this.mainSegmentLoader_.currentMediaInfo_ || (e && !this.audioSegmentLoader_.currentMediaInfo_));
               }),
               (t.getCodecsOrExclude_ = function () {
                   var n = this,
                       i = { main: this.mainSegmentLoader_.currentMediaInfo_ || {}, audio: this.audioSegmentLoader_.currentMediaInfo_ || {} };
                   i.video = i.main;
                   var e = xc(this.master(), this.media()),
                       r = {},
                       t = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
                   if (
                       (i.main.hasVideo && (r.video = e.video || i.main.videoCodec || Vl),
                       i.main.isMuxed && (r.video += "," + (e.audio || i.main.audioCodec || jl)),
                       ((i.main.hasAudio && !i.main.isMuxed) || i.audio.hasAudio || t) &&
                           ((r.audio = e.audio || i.main.audioCodec || i.audio.audioCodec || jl), (i.audio.isFmp4 = i.main.hasAudio && !i.main.isMuxed ? i.main.isFmp4 : i.audio.isFmp4)),
                       r.audio || r.video)
                   ) {
                       var a,
                           s = {};
                       if (
                           (["video", "audio"].forEach(function (e) {
                               if (
                                   r.hasOwnProperty(e) &&
                                   !(function (e, t) {
                                       return e ? ql(t) : Xl(t);
                                   })(i[e].isFmp4, r[e])
                               ) {
                                   var t = i[e].isFmp4 ? "browser" : "muxer";
                                   (s[t] = s[t] || []), s[t].push(r[e]), "audio" === e && (a = t);
                               }
                           }),
                           t && a && this.media().attributes.AUDIO)
                       ) {
                           var o = this.media().attributes.AUDIO;
                           this.master().playlists.forEach(function (e) {
                               (e.attributes && e.attributes.AUDIO) === o && e !== n.media() && (e.excludeUntil = 1 / 0);
                           }),
                               this.logger_("excluding audio group " + o + " as " + a + ' does not support codec(s): "' + r.audio + '"');
                       }
                       if (!Object.keys(s).length) {
                           if (this.sourceUpdater_.ready() && !this.sourceUpdater_.canChangeType()) {
                               var u = [];
                               if (
                                   (["video", "audio"].forEach(function (e) {
                                       var t = (Kl(n.sourceUpdater_.codecs[e] || "")[e] || {}).type,
                                           i = (Kl(r[e] || "")[e] || {}).type;
                                       t && i && t.toLowerCase() !== i.toLowerCase() && u.push('"' + n.sourceUpdater_.codecs[e] + '" -> "' + r[e] + '"');
                                   }),
                                   u.length)
                               )
                                   return void this.blacklistCurrentPlaylist({ playlist: this.media(), message: "Codec switching not supported: " + u.join(", ") + ".", blacklistDuration: 1 / 0, internal: !0 });
                           }
                           return r;
                       }
                       var l =
                           Object.keys(s).reduce(function (e, t) {
                               return e && (e += ", "), (e += t + ' does not support codec(s): "' + s[t].join(",") + '"');
                           }, "") + ".";
                       this.blacklistCurrentPlaylist({ playlist: this.media(), internal: !0, message: l, blacklistDuration: 1 / 0 });
                   } else this.blacklistCurrentPlaylist({ playlist: this.media(), message: "Could not determine codecs for playlist.", blacklistDuration: 1 / 0 });
               }),
               (t.tryToCreateSourceBuffers_ = function () {
                   if ("open" === this.mediaSource.readyState && !this.sourceUpdater_.ready() && this.areMediaTypesKnown_()) {
                       var e = this.getCodecsOrExclude_();
                       if (e) {
                           this.sourceUpdater_.createSourceBuffers(e);
                           var t = [e.video, e.audio].filter(Boolean).join(",");
                           this.excludeIncompatibleVariants_(t);
                       }
                   }
               }),
               (t.excludeUnsupportedVariants_ = function () {
                   var i = this;
                   this.master().playlists.forEach(function (e) {
                       var t = xc(i.master, e);
                       !t.audio || Xl(t.audio) || ql(t.audio) || (e.excludeUntil = 1 / 0), !t.video || Xl(t.video) || ql(t.video) || (e.excludeUntil = 1 / 0);
                   });
               }),
               (t.excludeIncompatibleVariants_ = function (e) {
                   var s = this,
                       o = Kl(e),
                       u = Object.keys(o).length;
                   this.master().playlists.forEach(function (e) {
                       if (e.excludeUntil !== 1 / 0) {
                           var t = {},
                               i = 2,
                               n = [],
                               r = xc(s.masterPlaylistLoader_.master, e);
                           if (r.audio || r.video) {
                               var a = [r.video, r.audio].filter(Boolean).join(",");
                               (t = Kl(a)), (i = Object.keys(t).length);
                           }
                           i !== u && (n.push('codec count "' + i + '" !== "' + u + '"'), (e.excludeUntil = 1 / 0)),
                               s.sourceUpdater_.canChangeType() ||
                                   (t.video && o.video && t.video.type.toLowerCase() !== o.video.type.toLowerCase() && (n.push('video codec "' + t.video.type + '" !== "' + o.video.type + '"'), (e.excludeUntil = 1 / 0)),
                                   t.audio && o.audio && t.audio.type.toLowerCase() !== o.audio.type.toLowerCase() && ((e.excludeUntil = 1 / 0), n.push('audio codec "' + t.audio.type + '" !== "' + o.audio.type + '"'))),
                               n.length && s.logger_("blacklisting " + e.id + ": " + n.join(" && "));
                       }
                   });
               }),
               (t.updateAdCues_ = function (e) {
                   var t = 0,
                       i = this.seekable();
                   i.length && (t = i.start(0)),
                       (function (e, t, i) {
                           if ((void 0 === i && (i = 0), e.segments))
                               for (var n, r = i, a = 0; a < e.segments.length; a++) {
                                   var s = e.segments[a];
                                   if ((n = n || Zc(t, r + s.duration / 2))) {
                                       if ("cueIn" in s) {
                                           (n.endTime = r), (n.adEndTime = r), (r += s.duration), (n = null);
                                           continue;
                                       }
                                       if (r < n.endTime) {
                                           r += s.duration;
                                           continue;
                                       }
                                       n.endTime += s.duration;
                                   } else if (("cueOut" in s && (((n = new T.VTTCue(r, r + s.duration, s.cueOut)).adStartTime = r), (n.adEndTime = r + parseFloat(s.cueOut)), t.addCue(n)), "cueOutCont" in s)) {
                                       var o = s.cueOutCont.split("/").map(parseFloat),
                                           u = o[0],
                                           l = o[1];
                                       ((n = new T.VTTCue(r, r + s.duration, "")).adStartTime = r - u), (n.adEndTime = n.adStartTime + l), t.addCue(n);
                                   }
                                   r += s.duration;
                               }
                       })(e, this.cueTagsTrack_, t);
               }),
               (t.goalBufferLength = function () {
                   var e = this.tech_.currentTime(),
                       t = uc.GOAL_BUFFER_LENGTH,
                       i = uc.GOAL_BUFFER_LENGTH_RATE,
                       n = Math.max(t, uc.MAX_GOAL_BUFFER_LENGTH);
                   return Math.min(t + e * i, n);
               }),
               (t.bufferLowWaterLine = function () {
                   var e = this.tech_.currentTime(),
                       t = uc.BUFFER_LOW_WATER_LINE,
                       i = uc.BUFFER_LOW_WATER_LINE_RATE,
                       n = Math.max(t, uc.MAX_BUFFER_LOW_WATER_LINE);
                   return Math.min(t + e * i, n);
               }),
               e
           );
       })(da.EventTarget),
       Pd = ["seeking", "seeked", "pause", "playing", "error"],
       Ld = (function () {
           function e(e) {
               var t = this;
               (this.masterPlaylistController_ = e.masterPlaylistController),
                   (this.tech_ = e.tech),
                   (this.seekable = e.seekable),
                   (this.allowSeeksWithinUnsafeLiveWindow = e.allowSeeksWithinUnsafeLiveWindow),
                   (this.media = e.media),
                   (this.consecutiveUpdates = 0),
                   (this.lastRecordedTime = null),
                   (this.timer_ = null),
                   (this.checkCurrentTimeTimeout_ = null),
                   (this.logger_ = Pc("PlaybackWatcher")),
                   this.logger_("initialize");
               function i() {
                   return t.monitorCurrentTime_();
               }
               function n() {
                   return t.techWaiting_();
               }
               function r() {
                   return t.cancelTimer_();
               }
               function a() {
                   return t.fixesBadSeeks_();
               }
               var s = this.masterPlaylistController_,
                   o = ["main", "subtitle", "audio"],
                   u = {};
               o.forEach(function (e) {
                   (u[e] = {
                       reset: function () {
                           return t.resetSegmentDownloads_(e);
                       },
                       updateend: function () {
                           return t.checkSegmentDownloads_(e);
                       },
                   }),
                       s[e + "SegmentLoader_"].on("appendsdone", u[e].updateend),
                       s[e + "SegmentLoader_"].on("playlistupdate", u[e].reset),
                       t.tech_.on(["seeked", "seeking"], u[e].reset);
               }),
                   this.tech_.on("seekablechanged", a),
                   this.tech_.on("waiting", n),
                   this.tech_.on(Pd, r),
                   this.tech_.on("canplay", i),
                   (this.dispose = function () {
                       t.logger_("dispose"),
                           t.tech_.off("seekablechanged", a),
                           t.tech_.off("waiting", n),
                           t.tech_.off(Pd, r),
                           t.tech_.off("canplay", i),
                           o.forEach(function (e) {
                               s[e + "SegmentLoader_"].off("appendsdone", u[e].updateend), s[e + "SegmentLoader_"].off("playlistupdate", u[e].reset), t.tech_.off(["seeked", "seeking"], u[e].reset);
                           }),
                           t.checkCurrentTimeTimeout_ && T.clearTimeout(t.checkCurrentTimeTimeout_),
                           t.cancelTimer_();
                   });
           }
           var t = e.prototype;
           return (
               (t.monitorCurrentTime_ = function () {
                   this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && T.clearTimeout(this.checkCurrentTimeTimeout_), (this.checkCurrentTimeTimeout_ = T.setTimeout(this.monitorCurrentTime_.bind(this), 250));
               }),
               (t.resetSegmentDownloads_ = function (e) {
                   var t = this.masterPlaylistController_[e + "SegmentLoader_"];
                   0 < this[e + "StalledDownloads_"] && this.logger_("resetting possible stalled download count for " + e + " loader"), (this[e + "StalledDownloads_"] = 0), (this[e + "Buffered_"] = t.buffered_());
               }),
               (t.checkSegmentDownloads_ = function (e) {
                   var t = this.masterPlaylistController_,
                       i = t[e + "SegmentLoader_"],
                       n = i.buffered_(),
                       r = (function (e, t) {
                           if (e === t) return !1;
                           if ((!e && t) || (!t && e)) return !0;
                           if (e.length !== t.length) return !0;
                           for (var i = 0; i < e.length; i++) if (e.start(i) !== t.start(i) || e.end(i) !== t.end(i)) return !0;
                           return !1;
                       })(this[e + "Buffered_"], n);
                   (this[e + "Buffered_"] = n),
                       r
                           ? this.resetSegmentDownloads_(e)
                           : (this[e + "StalledDownloads_"]++,
                             this.logger_("found #" + this[e + "StalledDownloads_"] + " " + e + " appends that did not increase buffer (possible stalled download)", { playlistId: i.playlist_ && i.playlist_.id, buffered: Zu(n) }),
                             this[e + "StalledDownloads_"] < 10 ||
                                 (this.logger_(e + " loader stalled download exclusion"),
                                 this.resetSegmentDownloads_(e),
                                 this.tech_.trigger({ type: "usage", name: "vhs-" + e + "-download-exclusion" }),
                                 "subtitle" !== e && t.blacklistCurrentPlaylist({ message: "Excessive " + e + " segment downloading detected." }, 1 / 0)));
               }),
               (t.checkCurrentTime_ = function () {
                   if (this.tech_.seeking() && this.fixesBadSeeks_()) return (this.consecutiveUpdates = 0), void (this.lastRecordedTime = this.tech_.currentTime());
                   if (!this.tech_.paused() && !this.tech_.seeking()) {
                       var e = this.tech_.currentTime(),
                           t = this.tech_.buffered();
                       if (this.lastRecordedTime === e && (!t.length || e + 0.1 >= t.end(t.length - 1))) return this.techWaiting_();
                       5 <= this.consecutiveUpdates && e === this.lastRecordedTime
                           ? (this.consecutiveUpdates++, this.waiting_())
                           : e === this.lastRecordedTime
                           ? this.consecutiveUpdates++
                           : ((this.consecutiveUpdates = 0), (this.lastRecordedTime = e));
                   }
               }),
               (t.cancelTimer_ = function () {
                   (this.consecutiveUpdates = 0), this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)), (this.timer_ = null);
               }),
               (t.fixesBadSeeks_ = function () {
                   if (!this.tech_.seeking()) return !1;
                   var e,
                       t = this.seekable(),
                       i = this.tech_.currentTime();
                   this.afterSeekableWindow_(t, i, this.media(), this.allowSeeksWithinUnsafeLiveWindow) && (e = t.end(t.length - 1));
                   if (this.beforeSeekableWindow_(t, i)) {
                       var n = t.start(0);
                       e = n + (n === t.end(0) ? 0 : 0.1);
                   }
                   if ("undefined" != typeof e) return this.logger_("Trying to seek outside of seekable at time " + i + " with seekable range " + Ju(t) + ". Seeking to " + e + "."), this.tech_.setCurrentTime(e), !0;
                   var r = this.tech_.buffered();
                   return (
                       !!(function (e) {
                           var t = e.buffered,
                               i = e.targetDuration,
                               n = e.currentTime;
                           return !!t.length && !(t.end(0) - t.start(0) < 2 * i) && !(n > t.start(0)) && t.start(0) - n < i;
                       })({ buffered: r, targetDuration: this.media().targetDuration, currentTime: i }) &&
                       ((e = r.start(0) + 0.1), this.logger_("Buffered region starts (" + r.start(0) + ")  just beyond seek point (" + i + "). Seeking to " + e + "."), this.tech_.setCurrentTime(e), !0)
                   );
               }),
               (t.waiting_ = function () {
                   if (!this.techWaiting_()) {
                       var e = this.tech_.currentTime(),
                           t = this.tech_.buffered(),
                           i = $u(t, e);
                       return i.length && e + 3 <= i.end(0)
                           ? (this.cancelTimer_(),
                             this.tech_.setCurrentTime(e),
                             this.logger_("Stopped at " + e + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."),
                             this.tech_.trigger({ type: "usage", name: "vhs-unknown-waiting" }),
                             void this.tech_.trigger({ type: "usage", name: "hls-unknown-waiting" }))
                           : void 0;
                   }
               }),
               (t.techWaiting_ = function () {
                   var e = this.seekable(),
                       t = this.tech_.currentTime();
                   if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0;
                   if (this.tech_.seeking() || null !== this.timer_) return !0;
                   if (this.beforeSeekableWindow_(e, t)) {
                       var i = e.end(e.length - 1);
                       return (
                           this.logger_("Fell out of live window at time " + t + ". Seeking to live point (seekable end) " + i),
                           this.cancelTimer_(),
                           this.tech_.setCurrentTime(i),
                           this.tech_.trigger({ type: "usage", name: "vhs-live-resync" }),
                           this.tech_.trigger({ type: "usage", name: "hls-live-resync" }),
                           !0
                       );
                   }
                   var n = this.tech_.vhs.masterPlaylistController_.sourceUpdater_,
                       r = this.tech_.buffered();
                   if (this.videoUnderflow_({ audioBuffered: n.audioBuffered(), videoBuffered: n.videoBuffered(), currentTime: t }))
                       return this.cancelTimer_(), this.tech_.setCurrentTime(t), this.tech_.trigger({ type: "usage", name: "vhs-video-underflow" }), this.tech_.trigger({ type: "usage", name: "hls-video-underflow" }), !0;
                   var a = Qu(r, t);
                   if (0 < a.length) {
                       var s = a.start(0) - t;
                       return this.logger_("Stopped at " + t + ", setting timer for " + s + ", seeking to " + a.start(0)), this.cancelTimer_(), (this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * s, t)), !0;
                   }
                   return !1;
               }),
               (t.afterSeekableWindow_ = function (e, t, i, n) {
                   if ((void 0 === n && (n = !1), !e.length)) return !1;
                   var r = e.end(e.length - 1) + 0.1;
                   return !i.endList && n && (r = e.end(e.length - 1) + 3 * i.targetDuration), r < t;
               }),
               (t.beforeSeekableWindow_ = function (e, t) {
                   return !!(e.length && 0 < e.start(0) && t < e.start(0) - 0.1);
               }),
               (t.videoUnderflow_ = function (e) {
                   var t = e.videoBuffered,
                       i = e.audioBuffered,
                       n = e.currentTime;
                   if (t) {
                       var r;
                       if (t.length && i.length) {
                           var a = $u(t, n - 3),
                               s = $u(t, n),
                               o = $u(i, n);
                           o.length && !s.length && a.length && (r = { start: a.end(0), end: o.end(0) });
                       } else {
                           Qu(t, n).length || (r = this.gapFromVideoUnderflow_(t, n));
                       }
                       return !!r && (this.logger_("Encountered a gap in video from " + r.start + " to " + r.end + ". Seeking to current time " + n), !0);
                   }
               }),
               (t.skipTheGap_ = function (e) {
                   var t = this.tech_.buffered(),
                       i = this.tech_.currentTime(),
                       n = Qu(t, i);
                   this.cancelTimer_(),
                       0 !== n.length &&
                           i === e &&
                           (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", n.start(0)),
                           this.tech_.setCurrentTime(n.start(0) + ec),
                           this.tech_.trigger({ type: "usage", name: "vhs-gap-skip" }),
                           this.tech_.trigger({ type: "usage", name: "hls-gap-skip" }));
               }),
               (t.gapFromVideoUnderflow_ = function (e, t) {
                   for (
                       var i = (function (e) {
                               if (e.length < 2) return da.createTimeRanges();
                               for (var t = [], i = 1; i < e.length; i++) {
                                   var n = e.end(i - 1),
                                       r = e.start(i);
                                   t.push([n, r]);
                               }
                               return da.createTimeRanges(t);
                           })(e),
                           n = 0;
                       n < i.length;
                       n++
                   ) {
                       var r = i.start(n),
                           a = i.end(n);
                       if (t - r < 4 && 2 < t - r) return { start: r, end: a };
                   }
                   return null;
               }),
               e
           );
       })(),
       Od = {
           errorInterval: 30,
           getSource: function (e) {
               return e(this.tech({ IWillNotUseThisInPlugins: !0 }).currentSource_ || this.currentSource());
           },
       },
       Dd = {
           PlaylistLoader: Zl,
           Playlist: ic,
           utils: ac,
           STANDARD_PLAYLIST_SELECTOR: function () {
               var e = (this.useDevicePixelRatio && T.devicePixelRatio) || 1;
               return (function (e, t, i, n, r) {
                   var a = { bandwidth: t, width: i, height: n, limitRenditionByPlayerDimensions: r },
                       s = e.playlists.map(function (e) {
                           var t = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width,
                               i = e.attributes.RESOLUTION && e.attributes.RESOLUTION.height;
                           return { bandwidth: e.attributes.BANDWIDTH || T.Number.MAX_VALUE, width: t, height: i, playlist: e };
                       });
                   Dc(s, function (e, t) {
                       return e.bandwidth - t.bandwidth;
                   });
                   var o = (s = s.filter(function (e) {
                       return !ic.isIncompatible(e.playlist);
                   })).filter(function (e) {
                       return ic.isEnabled(e.playlist);
                   });
                   o.length ||
                       (o = s.filter(function (e) {
                           return !ic.isDisabled(e.playlist);
                       }));
                   var u = o.filter(function (e) {
                           return e.bandwidth * uc.BANDWIDTH_VARIANCE < t;
                       }),
                       l = u[u.length - 1],
                       c = u.filter(function (e) {
                           return e.bandwidth === l.bandwidth;
                       })[0];
                   if (!1 === r) {
                       var d = c || o[0] || s[0];
                       if (d && d.playlist) {
                           var h = "sortedPlaylistReps";
                           return c && (h = "bandwidthBestRep"), o[0] && (h = "enabledPlaylistReps"), qc("choosing " + Lc(d) + " using " + h + " with options", a), d.playlist;
                       }
                       return qc("could not choose a playlist with options", a), null;
                   }
                   var p = u.filter(function (e) {
                       return e.width && e.height;
                   });
                   Dc(p, function (e, t) {
                       return e.width - t.width;
                   });
                   var f = p.filter(function (e) {
                       return e.width === i && e.height === n;
                   });
                   l = f[f.length - 1];
                   var m,
                       g,
                       v,
                       y = f.filter(function (e) {
                           return e.bandwidth === l.bandwidth;
                       })[0];
                   y ||
                       ((g = (m = p.filter(function (e) {
                           return e.width > i || e.height > n;
                       })).filter(function (e) {
                           return e.width === m[0].width && e.height === m[0].height;
                       })),
                       (l = g[g.length - 1]),
                       (v = g.filter(function (e) {
                           return e.bandwidth === l.bandwidth;
                       })[0]));
                   var _ = v || y || c || o[0] || s[0];
                   if (_ && _.playlist) {
                       var b = "sortedPlaylistReps";
                       return v ? (b = "resolutionPlusOneRep") : y ? (b = "resolutionBestRep") : c ? (b = "bandwidthBestRep") : o[0] && (b = "enabledPlaylistReps"), qc("choosing " + Lc(_) + " using " + b + " with options", a), _.playlist;
                   }
                   return qc("could not choose a playlist with options", a), null;
               })(this.playlists.master, this.systemBandwidth, parseInt(Oc(this.tech_.el(), "width"), 10) * e, parseInt(Oc(this.tech_.el(), "height"), 10) * e, this.limitRenditionByPlayerDimensions);
           },
           INITIAL_PLAYLIST_SELECTOR: function () {
               var t = this,
                   e = this.playlists.master.playlists.filter(ic.isEnabled);
               return (
                   Dc(e, function (e, t) {
                       return Mc(e, t);
                   }),
                   e.filter(function (e) {
                       return !!xc(t.playlists.master, e).video;
                   })[0] || null
               );
           },
           comparePlaylistBandwidth: Mc,
           comparePlaylistResolution: function (e, t) {
               var i, n;
               return (
                   e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (i = e.attributes.RESOLUTION.width),
                   (i = i || T.Number.MAX_VALUE),
                   t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (n = t.attributes.RESOLUTION.width),
                   i === (n = n || T.Number.MAX_VALUE) && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH : i - n
               );
           },
           xhr: dl(),
       };
   ["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "BACK_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach(function (t) {
       Object.defineProperty(Dd, t, {
           get: function () {
               return da.log.warn("using Vhs." + t + " is UNSAFE be sure you know what you are doing"), uc[t];
           },
           set: function (e) {
               da.log.warn("using Vhs." + t + " is UNSAFE be sure you know what you are doing"), "number" != typeof e || e < 0 ? da.log.warn("value of Vhs." + t + " must be greater than or equal to 0") : (uc[t] = e);
           },
       });
   });
   function Md(e, t) {
       for (var i = t.media(), n = -1, r = 0; r < e.length; r++)
           if (e[r].id === i.id) {
               n = r;
               break;
           }
       (e.selectedIndex_ = n), e.trigger({ selectedIndex: n, type: "change" });
   }
   var Rd = "videojs-vhs";
   Dd.canPlaySource = function () {
       return da.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.");
   };
   function Nd(e) {
       var t = e.player,
           i = e.sourceKeySystems,
           n = e.media,
           r = e.audioMedia,
           a = e.mainPlaylists,
           s = (function (e, t, i) {
               if (!e) return e;
               var n = { video: t && t.attributes && t.attributes.CODECS, audio: i && i.attributes && i.attributes.CODECS };
               !n.audio &&
                   n.video &&
                   1 < n.video.split(",").length &&
                   n.video.split(",").forEach(function (e) {
                       (e = e.trim()), zl(e) ? (n.audio = e) : Gl(e) && (n.video = e);
                   });
               var r = n.video ? 'video/mp4;codecs="' + n.video + '"' : null,
                   a = n.audio ? 'audio/mp4;codecs="' + n.audio + '"' : null,
                   s = {};
               for (var o in e)
                   (s[o] = { audioContentType: a, videoContentType: r }),
                       t.contentProtection && t.contentProtection[o] && t.contentProtection[o].pssh && (s[o].pssh = t.contentProtection[o].pssh),
                       "string" == typeof e[o] && (s[o].url = e[o]);
               return da.mergeOptions(e, s);
           })(i, n, r);
       s &&
           (!(t.currentSource().keySystems = s) || t.eme
               ? 11 !== da.browser.IE_VERSION &&
                 t.eme.initializeMediaKeys &&
                 (function (e, i) {
                     return e.reduce(function (e, n) {
                         if (!n.contentProtection) return e;
                         var t = i.reduce(function (e, t) {
                             var i = n.contentProtection[t];
                             return i && i.pssh && (e[t] = { pssh: i.pssh }), e;
                         }, {});
                         return Object.keys(t).length && e.push(t), e;
                     }, []);
                 })(r ? a.concat([r]) : a, Object.keys(i)).forEach(function (e) {
                     t.eme.initializeMediaKeys({ keySystems: e });
                 })
               : da.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"));
   }
   function Ud() {
       if (!T.localStorage) return null;
       var e = T.localStorage.getItem(Rd);
       if (!e) return null;
       try {
           return JSON.parse(e);
       } catch (e) {
           return null;
       }
   }
   (Dd.supportsNativeHls = (function () {
       if (!d || !d.createElement) return !1;
       var t = d.createElement("video");
       if (!da.getTech("Html5").isSupported()) return !1;
       return ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function (e) {
           return /maybe|probably/i.test(t.canPlayType(e));
       });
   })()),
       (Dd.supportsNativeDash = !!(d && d.createElement && da.getTech("Html5").isSupported()) && /maybe|probably/i.test(d.createElement("video").canPlayType("application/dash+xml"))),
       (Dd.supportsTypeNatively = function (e) {
           return "hls" === e ? Dd.supportsNativeHls : "dash" === e && Dd.supportsNativeDash;
       }),
       (Dd.isSupported = function () {
           return da.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.");
       });
   var Fd = (function (a) {
           function e(e, t, i) {
               var n;
               if (((n = a.call(this, t, da.mergeOptions(i.hls, i.vhs)) || this), i.hls && Object.keys(i.hls).length && da.log.warn("Using hls options is deprecated. Use vhs instead."), t.options_ && t.options_.playerId)) {
                   var r = da(t.options_.playerId);
                   r.hasOwnProperty("hls") ||
                       Object.defineProperty(r, "hls", {
                           get: function () {
                               return da.log.warn("player.hls is deprecated. Use player.tech().vhs instead."), t.trigger({ type: "usage", name: "hls-player-access" }), Ve(n);
                           },
                           configurable: !0,
                       }),
                       r.hasOwnProperty("vhs") ||
                           Object.defineProperty(r, "vhs", {
                               get: function () {
                                   return da.log.warn("player.vhs is deprecated. Use player.tech().vhs instead."), t.trigger({ type: "usage", name: "vhs-player-access" }), Ve(n);
                               },
                               configurable: !0,
                           }),
                       r.hasOwnProperty("dash") ||
                           Object.defineProperty(r, "dash", {
                               get: function () {
                                   return da.log.warn("player.dash is deprecated. Use player.tech().vhs instead."), Ve(n);
                               },
                               configurable: !0,
                           }),
                       (n.player_ = r);
               }
               if (((n.tech_ = t), (n.source_ = e), (n.stats = {}), (n.ignoreNextSeekingEvent_ = !1), n.setOptions_(), n.options_.overrideNative && t.overrideNativeAudioTracks && t.overrideNativeVideoTracks))
                   t.overrideNativeAudioTracks(!0), t.overrideNativeVideoTracks(!0);
               else if (n.options_.overrideNative && (t.featuresNativeVideoTracks || t.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
               return (
                   n.on(d, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], function (e) {
                       var t = d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement;
                       t && t.contains(n.tech_.el()) && n.masterPlaylistController_.smoothQualityChange_();
                   }),
                   n.on(n.tech_, "seeking", function () {
                       this.ignoreNextSeekingEvent_ ? (this.ignoreNextSeekingEvent_ = !1) : this.setCurrentTime(this.tech_.currentTime());
                   }),
                   n.on(n.tech_, "error", function () {
                       this.tech_.error() && this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading();
                   }),
                   n.on(n.tech_, "play", n.play),
                   n
               );
           }
           Ge(e, a);
           var t = e.prototype;
           return (
               (t.setOptions_ = function () {
                   var t = this;
                   if (
                       ((this.options_.withCredentials = this.options_.withCredentials || !1),
                       (this.options_.handleManifestRedirects = !1 !== this.options_.handleManifestRedirects),
                       (this.options_.limitRenditionByPlayerDimensions = !1 !== this.options_.limitRenditionByPlayerDimensions),
                       (this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || !1),
                       (this.options_.smoothQualityChange = this.options_.smoothQualityChange || !1),
                       (this.options_.useBandwidthFromLocalStorage = "undefined" != typeof this.source_.useBandwidthFromLocalStorage ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || !1),
                       (this.options_.customTagParsers = this.options_.customTagParsers || []),
                       (this.options_.customTagMappers = this.options_.customTagMappers || []),
                       (this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || !1),
                       (this.options_.handlePartialData = this.options_.handlePartialData || !1),
                       "number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300),
                       "number" != typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage)
                   ) {
                       var e = Ud();
                       e &&
                           e.bandwidth &&
                           ((this.options_.bandwidth = e.bandwidth), this.tech_.trigger({ type: "usage", name: "vhs-bandwidth-from-local-storage" }), this.tech_.trigger({ type: "usage", name: "hls-bandwidth-from-local-storage" })),
                           e &&
                               e.throughput &&
                               ((this.options_.throughput = e.throughput), this.tech_.trigger({ type: "usage", name: "vhs-throughput-from-local-storage" }), this.tech_.trigger({ type: "usage", name: "hls-throughput-from-local-storage" }));
                   }
                   "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = uc.INITIAL_BANDWIDTH),
                       (this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === uc.INITIAL_BANDWIDTH),
                       [
                           "withCredentials",
                           "useDevicePixelRatio",
                           "limitRenditionByPlayerDimensions",
                           "bandwidth",
                           "smoothQualityChange",
                           "customTagParsers",
                           "customTagMappers",
                           "handleManifestRedirects",
                           "cacheEncryptionKeys",
                           "handlePartialData",
                       ].forEach(function (e) {
                           "undefined" != typeof t.source_[e] && (t.options_[e] = t.source_[e]);
                       }),
                       (this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions),
                       (this.useDevicePixelRatio = this.options_.useDevicePixelRatio);
               }),
               (t.src = function (e, t) {
                   var i = this;
                   e &&
                       (this.setOptions_(),
                       (this.options_.src = (function (e) {
                           return 0 === e.toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,") ? JSON.parse(e.substring(e.indexOf(",") + 1)) : e;
                       })(this.source_.src)),
                       (this.options_.tech = this.tech_),
                       (this.options_.externVhs = Dd),
                       (this.options_.sourceType = Ia(t)),
                       (this.options_.seekTo = function (e) {
                           i.tech_.setCurrentTime(e);
                       }),
                       (this.masterPlaylistController_ = new xd(this.options_)),
                       (this.playbackWatcher_ = new Ld(
                           da.mergeOptions(this.options_, {
                               seekable: function () {
                                   return i.seekable();
                               },
                               media: function () {
                                   return i.masterPlaylistController_.media();
                               },
                               masterPlaylistController: this.masterPlaylistController_,
                           })
                       )),
                       this.masterPlaylistController_.on("error", function () {
                           var e = da.players[i.tech_.options_.playerId],
                               t = i.masterPlaylistController_.error;
                           "object" != typeof t || t.code ? "string" == typeof t && (t = { message: t, code: 3 }) : (t.code = 3), e.error(t);
                       }),
                       (this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : Dd.STANDARD_PLAYLIST_SELECTOR.bind(this)),
                       (this.masterPlaylistController_.selectInitialPlaylist = Dd.INITIAL_PLAYLIST_SELECTOR.bind(this)),
                       (this.playlists = this.masterPlaylistController_.masterPlaylistLoader_),
                       (this.mediaSource = this.masterPlaylistController_.mediaSource),
                       Object.defineProperties(this, {
                           selectPlaylist: {
                               get: function () {
                                   return this.masterPlaylistController_.selectPlaylist;
                               },
                               set: function (e) {
                                   this.masterPlaylistController_.selectPlaylist = e.bind(this);
                               },
                           },
                           throughput: {
                               get: function () {
                                   return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate;
                               },
                               set: function (e) {
                                   (this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = e), (this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1);
                               },
                           },
                           bandwidth: {
                               get: function () {
                                   return this.masterPlaylistController_.mainSegmentLoader_.bandwidth;
                               },
                               set: function (e) {
                                   (this.masterPlaylistController_.mainSegmentLoader_.bandwidth = e), (this.masterPlaylistController_.mainSegmentLoader_.throughput = { rate: 0, count: 0 });
                               },
                           },
                           systemBandwidth: {
                               get: function () {
                                   var e,
                                       t = 1 / (this.bandwidth || 1);
                                   return (e = 0 < this.throughput ? 1 / this.throughput : 0), Math.floor(1 / (t + e));
                               },
                               set: function () {
                                   da.log.error('The "systemBandwidth" property is read-only');
                               },
                           },
                       }),
                       this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth),
                       this.options_.throughput && (this.throughput = this.options_.throughput),
                       Object.defineProperties(this.stats, {
                           bandwidth: {
                               get: function () {
                                   return i.bandwidth || 0;
                               },
                               enumerable: !0,
                           },
                           mediaRequests: {
                               get: function () {
                                   return i.masterPlaylistController_.mediaRequests_() || 0;
                               },
                               enumerable: !0,
                           },
                           mediaRequestsAborted: {
                               get: function () {
                                   return i.masterPlaylistController_.mediaRequestsAborted_() || 0;
                               },
                               enumerable: !0,
                           },
                           mediaRequestsTimedout: {
                               get: function () {
                                   return i.masterPlaylistController_.mediaRequestsTimedout_() || 0;
                               },
                               enumerable: !0,
                           },
                           mediaRequestsErrored: {
                               get: function () {
                                   return i.masterPlaylistController_.mediaRequestsErrored_() || 0;
                               },
                               enumerable: !0,
                           },
                           mediaTransferDuration: {
                               get: function () {
                                   return i.masterPlaylistController_.mediaTransferDuration_() || 0;
                               },
                               enumerable: !0,
                           },
                           mediaBytesTransferred: {
                               get: function () {
                                   return i.masterPlaylistController_.mediaBytesTransferred_() || 0;
                               },
                               enumerable: !0,
                           },
                           mediaSecondsLoaded: {
                               get: function () {
                                   return i.masterPlaylistController_.mediaSecondsLoaded_() || 0;
                               },
                               enumerable: !0,
                           },
                           buffered: {
                               get: function () {
                                   return Zu(i.tech_.buffered());
                               },
                               enumerable: !0,
                           },
                           currentTime: {
                               get: function () {
                                   return i.tech_.currentTime();
                               },
                               enumerable: !0,
                           },
                           currentSource: {
                               get: function () {
                                   return i.tech_.currentSource_;
                               },
                               enumerable: !0,
                           },
                           currentTech: {
                               get: function () {
                                   return i.tech_.name_;
                               },
                               enumerable: !0,
                           },
                           duration: {
                               get: function () {
                                   return i.tech_.duration();
                               },
                               enumerable: !0,
                           },
                           master: {
                               get: function () {
                                   return i.playlists.master;
                               },
                               enumerable: !0,
                           },
                           playerDimensions: {
                               get: function () {
                                   return i.tech_.currentDimensions();
                               },
                               enumerable: !0,
                           },
                           seekable: {
                               get: function () {
                                   return Zu(i.tech_.seekable());
                               },
                               enumerable: !0,
                           },
                           timestamp: {
                               get: function () {
                                   return Date.now();
                               },
                               enumerable: !0,
                           },
                           videoPlaybackQuality: {
                               get: function () {
                                   return i.tech_.getVideoPlaybackQuality();
                               },
                               enumerable: !0,
                           },
                       }),
                       this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),
                       this.tech_.on("bandwidthupdate", function () {
                           i.options_.useBandwidthFromLocalStorage &&
                               (function (e) {
                                   if (!T.localStorage) return;
                                   var t = Ud();
                                   t = t ? da.mergeOptions(t, e) : e;
                                   try {
                                       T.localStorage.setItem(Rd, JSON.stringify(t));
                                   } catch (e) {
                                       return;
                                   }
                               })({ bandwidth: i.bandwidth, throughput: Math.round(i.throughput) });
                       }),
                       this.masterPlaylistController_.on("selectedinitialmedia", function () {
                           !(function (i) {
                               var e = i.playlists;
                               i.representations = function () {
                                   return e && e.master && e.master.playlists
                                       ? e.master.playlists
                                             .filter(function (e) {
                                                 return !sl(e);
                                             })
                                             .map(function (e, t) {
                                                 return new nd(i, e, e.id);
                                             })
                                       : [];
                               };
                           })(i);
                       }),
                       this.masterPlaylistController_.sourceUpdater_.on("ready", function () {
                           var e = i.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader;
                           Nd({ player: i.player_, sourceKeySystems: i.source_.keySystems, media: i.playlists.media(), audioMedia: e && e.media(), mainPlaylists: i.playlists.master.playlists });
                       }),
                       this.on(this.masterPlaylistController_, "progress", function () {
                           this.tech_.trigger("progress");
                       }),
                       this.on(this.masterPlaylistController_, "firstplay", function () {
                           this.ignoreNextSeekingEvent_ = !0;
                       }),
                       this.setupQualityLevels_(),
                       this.tech_.el() && ((this.mediaSourceUrl_ = T.URL.createObjectURL(this.masterPlaylistController_.mediaSource)), this.tech_.src(this.mediaSourceUrl_)));
               }),
               (t.setupQualityLevels_ = function () {
                   var e = this,
                       t = da.players[this.tech_.options_.playerId];
                   t &&
                       t.qualityLevels &&
                       !this.qualityLevels_ &&
                       ((this.qualityLevels_ = t.qualityLevels()),
                       this.masterPlaylistController_.on("selectedinitialmedia", function () {
                           !(function (t, e) {
                               e.representations().forEach(function (e) {
                                   t.addQualityLevel(e);
                               }),
                                   Md(t, e.playlists);
                           })(e.qualityLevels_, e);
                       }),
                       this.playlists.on("mediachange", function () {
                           Md(e.qualityLevels_, e.playlists);
                       }));
               }),
               (e.version = function () {
                   return { "@videojs/http-streaming": "2.2.4", "mux.js": "5.6.7", "mpd-parser": "0.14.0", "m3u8-parser": "4.5.0", "aes-decrypter": "3.1.0" };
               }),
               (t.version = function () {
                   return this.constructor.version();
               }),
               (t.canChangeType = function () {
                   return vd.canChangeType();
               }),
               (t.play = function () {
                   this.masterPlaylistController_.play();
               }),
               (t.setCurrentTime = function (e) {
                   this.masterPlaylistController_.setCurrentTime(e);
               }),
               (t.duration = function () {
                   return this.masterPlaylistController_.duration();
               }),
               (t.seekable = function () {
                   return this.masterPlaylistController_.seekable();
               }),
               (t.dispose = function () {
                   this.playbackWatcher_ && this.playbackWatcher_.dispose(),
                       this.masterPlaylistController_ && this.masterPlaylistController_.dispose(),
                       this.qualityLevels_ && this.qualityLevels_.dispose(),
                       this.player_ && (delete this.player_.vhs, delete this.player_.dash, delete this.player_.hls),
                       this.tech_ && this.tech_.vhs && delete this.tech_.vhs,
                       this.tech_ && delete this.tech_.hls,
                       this.mediaSourceUrl_ && T.URL.revokeObjectURL && (T.URL.revokeObjectURL(this.mediaSourceUrl_), (this.mediaSourceUrl_ = null)),
                       a.prototype.dispose.call(this);
               }),
               (t.convertToProgramTime = function (e, t) {
                   return _l({ playlist: this.masterPlaylistController_.media(), time: e, callback: t });
               }),
               (t.seekToProgramTime = function (e, t, i, n) {
                   return (
                       void 0 === i && (i = !0),
                       void 0 === n && (n = 2),
                       bl({ programTime: e, playlist: this.masterPlaylistController_.media(), retryCount: n, pauseAfterSeek: i, seekTo: this.options_.seekTo, tech: this.options_.tech, callback: t })
                   );
               }),
               e
           );
       })(da.getComponent("Component")),
       Bd = {
           name: "videojs-http-streaming",
           VERSION: "2.2.4",
           canHandleSource: function (e, t) {
               void 0 === t && (t = {});
               var i = da.mergeOptions(da.options, t);
               return Bd.canPlayType(e.type, i);
           },
           handleSource: function (e, t, i) {
               void 0 === i && (i = {});
               var n = da.mergeOptions(da.options, i);
               return (
                   (t.vhs = new Fd(e, t, n)),
                   da.hasOwnProperty("hls") ||
                       Object.defineProperty(t, "hls", {
                           get: function () {
                               return da.log.warn("player.tech().hls is deprecated. Use player.tech().vhs instead."), t.vhs;
                           },
                           configurable: !0,
                       }),
                   (t.vhs.xhr = dl()),
                   t.vhs.src(e.src, e.type),
                   t.vhs
               );
           },
           canPlayType: function (e, t) {
               void 0 === t && (t = {});
               var i = da.mergeOptions(da.options, t).vhs.overrideNative,
                   n = void 0 === i ? !da.browser.IS_ANY_SAFARI : i,
                   r = Ia(e);
               return r && (!Dd.supportsTypeNatively(r) || n) ? "maybe" : "";
           },
       };
   return (
       ql("avc1.4d400d,mp4a.40.2") && da.getTech("Html5").registerSourceHandler(Bd, 0),
       (da.VhsHandler = Fd),
       Object.defineProperty(da, "HlsHandler", {
           get: function () {
               return da.log.warn("videojs.HlsHandler is deprecated. Use videojs.VhsHandler instead."), Fd;
           },
           configurable: !0,
       }),
       (da.VhsSourceHandler = Bd),
       Object.defineProperty(da, "HlsSourceHandler", {
           get: function () {
               return da.log.warn("videojs.HlsSourceHandler is deprecated. Use videojs.VhsSourceHandler instead."), Bd;
           },
           configurable: !0,
       }),
       (da.Vhs = Dd),
       Object.defineProperty(da, "Hls", {
           get: function () {
               return da.log.warn("videojs.Hls is deprecated. Use videojs.Vhs instead."), Dd;
           },
           configurable: !0,
       }),
       da.use || (da.registerComponent("Hls", Dd), da.registerComponent("Vhs", Dd)),
       (da.options.vhs = da.options.vhs || {}),
       (da.options.hls = da.options.hls || {}),
       da.registerPlugin ? da.registerPlugin("reloadSourceOnError", rd) : da.plugin("reloadSourceOnError", rd),
       da
   );
});
!(function () {
   !(function (a) {
       var b = a && a.videojs;
       b && (b.CDN_VERSION = "7.10.2");
   })(window);
})();
