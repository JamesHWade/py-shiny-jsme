"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb2, mod) => function __require() {
    return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
      if (decorator = decorators[i5])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/jsme-editor/jsme.nocache.js
  var require_jsme_nocache = __commonJS({
    "node_modules/jsme-editor/jsme.nocache.js"(exports, module) {
      function jsme() {
        var U = "", R = " top: -1000px;", pb = '" for "gwt:onLoadErrorFn"', nb = '" for "gwt:onPropertyErrorFn"', $ = '");', qb = "#", mc = ".cache.js", sb = "/", yb = "//", Vb = "870EF2BAB6A388B0F864EB54CB3F82A8", lc = ":", Xb = ":1", Yb = ":10", Zb = ":11", $b = ":12", _b = ":13", ac = ":14", bc = ":15", cc = ":2", dc = ":3", ec = ":4", fc = ":5", gc = ":6", hc = ":7", ic = ":8", jc = ":9", hb = "::", T = "<!doctype html>", V = "<html><head></head><body></body></html>", kb = "=", rb = "?", Ab = "BackCompat", mb = 'Bad handler "', S = "CSS1Compat", Y = "Chrome", X = "DOMContentLoaded", M = "DUMMY", kc = "FEB169D74546A3B279D22AE09AFB86BD", Fb = "android", xb = "base", vb = "baseUrl", H = "begin", N = "body", G = "bootstrap", ub = "clear.cache.gif", zb = "compat.mode", jb = "content", Bb = "drag_and_drop_support_html5", vc = "end", Z = 'eval("', Ub = "false", Pb = "gecko", Qb = "gecko1_8", I = "gwt.codesvr.jsme=", J = "gwt.codesvr=", tc = "gwt/chrome/chrome.css", uc = "gwt/chrome/mosaic.css", ob = "gwt:onLoadErrorFn", lb = "gwt:onPropertyErrorFn", ib = "gwt:property", db = "head", qc = "href", Ob = "ie6", Nb = "ie8", Mb = "ie9", O = "iframe", tb = "img", Eb = "ipad", Db = "iphone", Cb = "is_android_or_ios", ab = "javascript", P = 'javascript:""', sc = "jsa.css", K = "jsme", Tb = "jsme.devmode.js", wb = "jsme.nocache.js", gb = "jsme::", nc = "link", rc = "loadExternalRefs", eb = "meta", cb = "moduleRequested", bb = "moduleStartup", Lb = "msie", Gb = "msie_clipboard", fb = "name", Ib = "opera", Q = "position:absolute; width:0; height:0; border:none; left: -1000px;", oc = "rel", Kb = "safari", _ = "script", Sb = "selectingPermutation", L = "startup", pc = "stylesheet", Wb = "true", W = "undefined", Rb = "unknown", Hb = "user.agent", Jb = "webkit";
        var o = window;
        var p = document;
        r(G, H);
        function q() {
          var a3 = o.location.search;
          return a3.indexOf(I) != -1 || a3.indexOf(J) != -1;
        }
        function r(a3, b3) {
          if (o.__gwtStatsEvent) {
            o.__gwtStatsEvent({ moduleName: K, sessionId: o.__gwtStatsSessionId, subSystem: L, evtGroup: a3, millis: (/* @__PURE__ */ new Date()).getTime(), type: b3 });
          }
        }
        jsme.__sendStats = r;
        jsme.__moduleName = K;
        jsme.__errFn = null;
        jsme.__moduleBase = M;
        jsme.__softPermutationId = 0;
        jsme.__computePropValue = null;
        jsme.__getPropMap = null;
        jsme.__gwtInstallCode = function() {
        };
        jsme.__gwtStartLoadingFragment = function() {
          return null;
        };
        var s = function() {
          return false;
        };
        var t = function() {
          return null;
        };
        __propertyErrorFunction = null;
        var u = o.__gwt_activeModules = o.__gwt_activeModules || {};
        u[K] = { moduleName: K };
        var v;
        function w() {
          y();
          return v;
        }
        function x() {
          y();
          return v.getElementsByTagName(N)[0];
        }
        function y() {
          if (v) {
            return;
          }
          var a3 = p.createElement(O);
          a3.src = P;
          a3.id = K;
          a3.style.cssText = Q + R;
          a3.tabIndex = -1;
          p.body.appendChild(a3);
          v = a3.contentDocument;
          if (!v) {
            v = a3.contentWindow.document;
          }
          v.open();
          var b3 = document.compatMode == S ? T : U;
          v.write(b3 + V);
          v.close();
        }
        function z(k3) {
          function l4(a3) {
            function b3() {
              if (typeof p.readyState == W) {
                return typeof p.body != W && p.body != null;
              }
              return /loaded|complete/.test(p.readyState);
            }
            var c5 = b3();
            if (c5) {
              a3();
              return;
            }
            function d4() {
              if (!c5) {
                c5 = true;
                a3();
                if (p.removeEventListener) {
                  p.removeEventListener(X, d4, false);
                }
                if (e6) {
                  clearInterval(e6);
                }
              }
            }
            if (p.addEventListener) {
              p.addEventListener(X, d4, false);
            }
            var e6 = setInterval(function() {
              if (b3()) {
                d4();
              }
            }, 50);
          }
          function m3(c5) {
            function d4(a3, b3) {
              a3.removeChild(b3);
            }
            var e6 = x();
            var f4 = w();
            var g3;
            if (navigator.userAgent.indexOf(Y) > -1 && window.JSON) {
              var h4 = f4.createDocumentFragment();
              h4.appendChild(f4.createTextNode(Z));
              for (var i5 = 0; i5 < c5.length; i5++) {
                var j3 = window.JSON.stringify(c5[i5]);
                h4.appendChild(f4.createTextNode(j3.substring(1, j3.length - 1)));
              }
              h4.appendChild(f4.createTextNode($));
              g3 = f4.createElement(_);
              g3.language = ab;
              g3.appendChild(h4);
              e6.appendChild(g3);
              d4(e6, g3);
            } else {
              for (var i5 = 0; i5 < c5.length; i5++) {
                g3 = f4.createElement(_);
                g3.language = ab;
                g3.text = c5[i5];
                e6.appendChild(g3);
                d4(e6, g3);
              }
            }
          }
          jsme.onScriptDownloaded = function(a3) {
            l4(function() {
              m3(a3);
            });
          };
          r(bb, cb);
          var n5 = p.createElement(_);
          n5.src = k3;
          p.getElementsByTagName(db)[0].appendChild(n5);
        }
        jsme.__startLoadingFragment = function(a3) {
          return C(a3);
        };
        jsme.__installRunAsyncCode = function(a3) {
          var b3 = x();
          var c5 = w().createElement(_);
          c5.language = ab;
          c5.text = a3;
          b3.appendChild(c5);
          b3.removeChild(c5);
        };
        function A() {
          var c = {};
          var d;
          var e;
          var f = p.getElementsByTagName(eb);
          for (var g = 0, h = f.length; g < h; ++g) {
            var i = f[g], j = i.getAttribute(fb), k;
            if (j) {
              j = j.replace(gb, U);
              if (j.indexOf(hb) >= 0) {
                continue;
              }
              if (j == ib) {
                k = i.getAttribute(jb);
                if (k) {
                  var l, m = k.indexOf(kb);
                  if (m >= 0) {
                    j = k.substring(0, m);
                    l = k.substring(m + 1);
                  } else {
                    j = k;
                    l = U;
                  }
                  c[j] = l;
                }
              } else if (j == lb) {
                k = i.getAttribute(jb);
                if (k) {
                  try {
                    d = eval(k);
                  } catch (a3) {
                    alert(mb + k + nb);
                  }
                }
              } else if (j == ob) {
                k = i.getAttribute(jb);
                if (k) {
                  try {
                    e = eval(k);
                  } catch (a3) {
                    alert(mb + k + pb);
                  }
                }
              }
            }
          }
          t = function(a3) {
            var b3 = c[a3];
            return b3 == null ? null : b3;
          };
          __propertyErrorFunction = d;
          jsme.__errFn = e;
        }
        function B() {
          function e6(a3) {
            var b3 = a3.lastIndexOf(qb);
            if (b3 == -1) {
              b3 = a3.length;
            }
            var c5 = a3.indexOf(rb);
            if (c5 == -1) {
              c5 = a3.length;
            }
            var d4 = a3.lastIndexOf(sb, Math.min(c5, b3));
            return d4 >= 0 ? a3.substring(0, d4 + 1) : U;
          }
          function f4(a3) {
            if (a3.match(/^\w+:\/\//)) {
            } else {
              var b3 = p.createElement(tb);
              b3.src = a3 + ub;
              a3 = e6(b3.src);
            }
            return a3;
          }
          function g3() {
            var a3 = t(vb);
            if (a3 != null) {
              return a3;
            }
            return U;
          }
          function h4() {
            var a3 = p.getElementsByTagName(_);
            for (var b3 = 0; b3 < a3.length; ++b3) {
              if (a3[b3].src.indexOf(wb) != -1) {
                return e6(a3[b3].src);
              }
            }
            return U;
          }
          function i5() {
            var a3 = p.getElementsByTagName(xb);
            if (a3.length > 0) {
              return a3[a3.length - 1].href;
            }
            return U;
          }
          function j3() {
            var a3 = p.location;
            return a3.href == a3.protocol + yb + a3.host + a3.pathname + a3.search + a3.hash;
          }
          var k3 = g3();
          if (k3 == U) {
            k3 = h4();
          }
          if (k3 == U) {
            k3 = i5();
          }
          if (k3 == U && j3()) {
            k3 = e6(p.location.href);
          }
          k3 = f4(k3);
          return k3;
        }
        function C(a3) {
          if (a3.match(/^\//)) {
            return a3;
          }
          if (a3.match(/^[a-zA-Z]+:\/\//)) {
            return a3;
          }
          return jsme.__moduleBase + a3;
        }
        function D() {
          var f4 = [];
          var g3;
          function h4(a3, b3) {
            var c5 = f4;
            for (var d4 = 0, e6 = a3.length - 1; d4 < e6; ++d4) {
              c5 = c5[a3[d4]] || (c5[a3[d4]] = []);
            }
            c5[a3[e6]] = b3;
          }
          var i5 = [];
          var j3 = [];
          function k3(a3) {
            var b3 = j3[a3](), c5 = i5[a3];
            if (b3 in c5) {
              return b3;
            }
            var d4 = [];
            for (var e6 in c5) {
              d4[c5[e6]] = e6;
            }
            if (__propertyErrorFunc) {
              __propertyErrorFunc(a3, d4, b3);
            }
            throw null;
          }
          j3[zb] = function() {
            return document.compatMode == S ? S : Ab;
          };
          i5[zb] = { BackCompat: 0, CSS1Compat: 1 };
          j3[Bb] = function() {
            return U + (window.FileReader != void 0);
          };
          i5[Bb] = { "false": 0, "true": 1 };
          j3[Cb] = function() {
            var a3 = navigator.userAgent.toLowerCase();
            return U + (a3.indexOf(Db) != -1 || (a3.indexOf(Eb) != -1 || a3.indexOf(Fb) != -1));
          };
          i5[Cb] = { "false": 0, "true": 1 };
          j3[Gb] = function() {
            return U + (window.clipboardData != void 0);
          };
          i5[Gb] = { "false": 0, "true": 1 };
          j3[Hb] = function() {
            var b3 = navigator.userAgent.toLowerCase();
            var c5 = function(a3) {
              return parseInt(a3[1]) * 1e3 + parseInt(a3[2]);
            };
            if (function() {
              return b3.indexOf(Ib) != -1;
            }())
              return Ib;
            if (function() {
              return b3.indexOf(Jb) != -1;
            }())
              return Kb;
            if (function() {
              return b3.indexOf(Lb) != -1 && p.documentMode >= 9;
            }())
              return Mb;
            if (function() {
              return b3.indexOf(Lb) != -1 && p.documentMode >= 8;
            }())
              return Nb;
            if (function() {
              var a3 = /msie ([0-9]+)\.([0-9]+)/.exec(b3);
              if (a3 && a3.length == 3)
                return c5(a3) >= 6e3;
            }())
              return Ob;
            if (function() {
              return b3.indexOf(Pb) != -1;
            }())
              return Qb;
            return Rb;
          };
          i5[Hb] = { gecko1_8: 0, ie6: 1, ie8: 2, ie9: 3, opera: 4, safari: 5 };
          s = function(a3, b3) {
            return b3 in i5[a3];
          };
          jsme.__getPropMap = function() {
            var a3 = {};
            for (var b3 in i5) {
              if (i5.hasOwnProperty(b3)) {
                a3[b3] = k3(b3);
              }
            }
            return a3;
          };
          jsme.__computePropValue = k3;
          o.__gwt_activeModules[K].bindings = jsme.__getPropMap;
          r(G, Sb);
          if (q()) {
            return C(Tb);
          }
          var l4;
          try {
            h4([Ab, Ub, Ub, Ub, Qb], Vb);
            h4([Ab, Ub, Wb, Ub, Qb], Vb);
            h4([Ab, Wb, Ub, Ub, Qb], Vb);
            h4([Ab, Wb, Wb, Ub, Qb], Vb);
            h4([Ab, Ub, Ub, Ub, Kb], Vb + Xb);
            h4([Ab, Ub, Wb, Ub, Kb], Vb + Xb);
            h4([Ab, Wb, Ub, Ub, Kb], Vb + Xb);
            h4([Ab, Wb, Wb, Ub, Kb], Vb + Xb);
            h4([Ab, Ub, Ub, Wb, Qb], Vb + Yb);
            h4([Ab, Ub, Wb, Wb, Qb], Vb + Yb);
            h4([Ab, Wb, Ub, Wb, Qb], Vb + Yb);
            h4([Ab, Wb, Wb, Wb, Qb], Vb + Yb);
            h4([Ab, Ub, Ub, Wb, Kb], Vb + Zb);
            h4([Ab, Ub, Wb, Wb, Kb], Vb + Zb);
            h4([Ab, Wb, Ub, Wb, Kb], Vb + Zb);
            h4([Ab, Wb, Wb, Wb, Kb], Vb + Zb);
            h4([Ab, Ub, Ub, Ub, Qb], Vb + $b);
            h4([Ab, Ub, Wb, Ub, Qb], Vb + $b);
            h4([Ab, Wb, Ub, Ub, Qb], Vb + $b);
            h4([Ab, Wb, Wb, Ub, Qb], Vb + $b);
            h4([Ab, Ub, Ub, Ub, Kb], Vb + _b);
            h4([Ab, Ub, Wb, Ub, Kb], Vb + _b);
            h4([Ab, Wb, Ub, Ub, Kb], Vb + _b);
            h4([Ab, Wb, Wb, Ub, Kb], Vb + _b);
            h4([Ab, Ub, Ub, Wb, Qb], Vb + ac);
            h4([Ab, Ub, Wb, Wb, Qb], Vb + ac);
            h4([Ab, Wb, Ub, Wb, Qb], Vb + ac);
            h4([Ab, Wb, Wb, Wb, Qb], Vb + ac);
            h4([Ab, Ub, Ub, Wb, Kb], Vb + bc);
            h4([Ab, Ub, Wb, Wb, Kb], Vb + bc);
            h4([Ab, Wb, Ub, Wb, Kb], Vb + bc);
            h4([Ab, Wb, Wb, Wb, Kb], Vb + bc);
            h4([Ab, Ub, Ub, Wb, Qb], Vb + cc);
            h4([Ab, Ub, Wb, Wb, Qb], Vb + cc);
            h4([Ab, Wb, Ub, Wb, Qb], Vb + cc);
            h4([Ab, Wb, Wb, Wb, Qb], Vb + cc);
            h4([Ab, Ub, Ub, Wb, Kb], Vb + dc);
            h4([Ab, Ub, Wb, Wb, Kb], Vb + dc);
            h4([Ab, Wb, Ub, Wb, Kb], Vb + dc);
            h4([Ab, Wb, Wb, Wb, Kb], Vb + dc);
            h4([Ab, Ub, Ub, Ub, Qb], Vb + ec);
            h4([Ab, Ub, Wb, Ub, Qb], Vb + ec);
            h4([Ab, Wb, Ub, Ub, Qb], Vb + ec);
            h4([Ab, Wb, Wb, Ub, Qb], Vb + ec);
            h4([Ab, Ub, Ub, Ub, Kb], Vb + fc);
            h4([Ab, Ub, Wb, Ub, Kb], Vb + fc);
            h4([Ab, Wb, Ub, Ub, Kb], Vb + fc);
            h4([Ab, Wb, Wb, Ub, Kb], Vb + fc);
            h4([Ab, Ub, Ub, Wb, Qb], Vb + gc);
            h4([Ab, Ub, Wb, Wb, Qb], Vb + gc);
            h4([Ab, Wb, Ub, Wb, Qb], Vb + gc);
            h4([Ab, Wb, Wb, Wb, Qb], Vb + gc);
            h4([Ab, Ub, Ub, Wb, Kb], Vb + hc);
            h4([Ab, Ub, Wb, Wb, Kb], Vb + hc);
            h4([Ab, Wb, Ub, Wb, Kb], Vb + hc);
            h4([Ab, Wb, Wb, Wb, Kb], Vb + hc);
            h4([Ab, Ub, Ub, Ub, Qb], Vb + ic);
            h4([Ab, Ub, Wb, Ub, Qb], Vb + ic);
            h4([Ab, Wb, Ub, Ub, Qb], Vb + ic);
            h4([Ab, Wb, Wb, Ub, Qb], Vb + ic);
            h4([Ab, Ub, Ub, Ub, Kb], Vb + jc);
            h4([Ab, Ub, Wb, Ub, Kb], Vb + jc);
            h4([Ab, Wb, Ub, Ub, Kb], Vb + jc);
            h4([Ab, Wb, Wb, Ub, Kb], Vb + jc);
            h4([S, Ub, Ub, Ub, Qb], kc);
            h4([S, Ub, Wb, Ub, Qb], kc);
            h4([S, Wb, Ub, Ub, Qb], kc);
            h4([S, Wb, Wb, Ub, Qb], kc);
            h4([S, Ub, Ub, Ub, Kb], kc + Xb);
            h4([S, Ub, Wb, Ub, Kb], kc + Xb);
            h4([S, Wb, Ub, Ub, Kb], kc + Xb);
            h4([S, Wb, Wb, Ub, Kb], kc + Xb);
            h4([S, Ub, Ub, Wb, Qb], kc + Yb);
            h4([S, Ub, Wb, Wb, Qb], kc + Yb);
            h4([S, Wb, Ub, Wb, Qb], kc + Yb);
            h4([S, Wb, Wb, Wb, Qb], kc + Yb);
            h4([S, Ub, Ub, Wb, Kb], kc + Zb);
            h4([S, Ub, Wb, Wb, Kb], kc + Zb);
            h4([S, Wb, Ub, Wb, Kb], kc + Zb);
            h4([S, Wb, Wb, Wb, Kb], kc + Zb);
            h4([S, Ub, Ub, Ub, Qb], kc + $b);
            h4([S, Ub, Wb, Ub, Qb], kc + $b);
            h4([S, Wb, Ub, Ub, Qb], kc + $b);
            h4([S, Wb, Wb, Ub, Qb], kc + $b);
            h4([S, Ub, Ub, Ub, Kb], kc + _b);
            h4([S, Ub, Wb, Ub, Kb], kc + _b);
            h4([S, Wb, Ub, Ub, Kb], kc + _b);
            h4([S, Wb, Wb, Ub, Kb], kc + _b);
            h4([S, Ub, Ub, Wb, Qb], kc + ac);
            h4([S, Ub, Wb, Wb, Qb], kc + ac);
            h4([S, Wb, Ub, Wb, Qb], kc + ac);
            h4([S, Wb, Wb, Wb, Qb], kc + ac);
            h4([S, Ub, Ub, Wb, Kb], kc + bc);
            h4([S, Ub, Wb, Wb, Kb], kc + bc);
            h4([S, Wb, Ub, Wb, Kb], kc + bc);
            h4([S, Wb, Wb, Wb, Kb], kc + bc);
            h4([S, Ub, Ub, Wb, Qb], kc + cc);
            h4([S, Ub, Wb, Wb, Qb], kc + cc);
            h4([S, Wb, Ub, Wb, Qb], kc + cc);
            h4([S, Wb, Wb, Wb, Qb], kc + cc);
            h4([S, Ub, Ub, Wb, Kb], kc + dc);
            h4([S, Ub, Wb, Wb, Kb], kc + dc);
            h4([S, Wb, Ub, Wb, Kb], kc + dc);
            h4([S, Wb, Wb, Wb, Kb], kc + dc);
            h4([S, Ub, Ub, Ub, Qb], kc + ec);
            h4([S, Ub, Wb, Ub, Qb], kc + ec);
            h4([S, Wb, Ub, Ub, Qb], kc + ec);
            h4([S, Wb, Wb, Ub, Qb], kc + ec);
            h4([S, Ub, Ub, Ub, Kb], kc + fc);
            h4([S, Ub, Wb, Ub, Kb], kc + fc);
            h4([S, Wb, Ub, Ub, Kb], kc + fc);
            h4([S, Wb, Wb, Ub, Kb], kc + fc);
            h4([S, Ub, Ub, Wb, Qb], kc + gc);
            h4([S, Ub, Wb, Wb, Qb], kc + gc);
            h4([S, Wb, Ub, Wb, Qb], kc + gc);
            h4([S, Wb, Wb, Wb, Qb], kc + gc);
            h4([S, Ub, Ub, Wb, Kb], kc + hc);
            h4([S, Ub, Wb, Wb, Kb], kc + hc);
            h4([S, Wb, Ub, Wb, Kb], kc + hc);
            h4([S, Wb, Wb, Wb, Kb], kc + hc);
            h4([S, Ub, Ub, Ub, Qb], kc + ic);
            h4([S, Ub, Wb, Ub, Qb], kc + ic);
            h4([S, Wb, Ub, Ub, Qb], kc + ic);
            h4([S, Wb, Wb, Ub, Qb], kc + ic);
            h4([S, Ub, Ub, Ub, Kb], kc + jc);
            h4([S, Ub, Wb, Ub, Kb], kc + jc);
            h4([S, Wb, Ub, Ub, Kb], kc + jc);
            h4([S, Wb, Wb, Ub, Kb], kc + jc);
            l4 = f4[k3(zb)][k3(Bb)][k3(Cb)][k3(Gb)][k3(Hb)];
            var m3 = l4.indexOf(lc);
            if (m3 != -1) {
              g3 = parseInt(l4.substring(m3 + 1), 10);
              l4 = l4.substring(0, m3);
            }
          } catch (a3) {
          }
          jsme.__softPermutationId = g3;
          return C(l4 + mc);
        }
        function E() {
          if (!o.__gwt_stylesLoaded) {
            o.__gwt_stylesLoaded = {};
          }
          function c5(a3) {
            if (!__gwt_stylesLoaded[a3]) {
              var b3 = p.createElement(nc);
              b3.setAttribute(oc, pc);
              b3.setAttribute(qc, C(a3));
              p.getElementsByTagName(db)[0].appendChild(b3);
              __gwt_stylesLoaded[a3] = true;
            }
          }
          r(rc, H);
          c5(sc);
          c5(tc);
          c5(uc);
          r(rc, vc);
        }
        A();
        jsme.__moduleBase = B();
        u[K].moduleBase = jsme.__moduleBase;
        var F = D();
        E();
        r(G, vc);
        z(F);
        return true;
      }
      jsme.succeeded = jsme();
    }
  });

  // node_modules/@lit/reactive-element/css-tag.js
  var t2 = globalThis;
  var e2 = t2.ShadowRoot && (void 0 === t2.ShadyCSS || t2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s2 = Symbol();
  var o2 = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t4, e6, o6) {
      if (this._$cssResult$ = true, o6 !== s2)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4, this.t = e6;
    }
    get styleSheet() {
      let t4 = this.o;
      const s5 = this.t;
      if (e2 && void 0 === t4) {
        const e6 = void 0 !== s5 && 1 === s5.length;
        e6 && (t4 = o2.get(s5)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o2.set(s5, t4));
      }
      return t4;
    }
    toString() {
      return this.cssText;
    }
  };
  var r2 = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s2);
  var i2 = (t4, ...e6) => {
    const o6 = 1 === t4.length ? t4[0] : e6.reduce((e7, s5, o7) => e7 + ((t5) => {
      if (true === t5._$cssResult$)
        return t5.cssText;
      if ("number" == typeof t5)
        return t5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s5) + t4[o7 + 1], t4[0]);
    return new n(o6, t4, s2);
  };
  var S2 = (s5, o6) => {
    if (e2)
      s5.adoptedStyleSheets = o6.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
    else
      for (const e6 of o6) {
        const o7 = document.createElement("style"), n5 = t2.litNonce;
        void 0 !== n5 && o7.setAttribute("nonce", n5), o7.textContent = e6.cssText, s5.appendChild(o7);
      }
  };
  var c2 = e2 ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
    let e6 = "";
    for (const s5 of t5.cssRules)
      e6 += s5.cssText;
    return r2(e6);
  })(t4) : t4;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i3, defineProperty: e3, getOwnPropertyDescriptor: r3, getOwnPropertyNames: h2, getOwnPropertySymbols: o3, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c3 = a.trustedTypes;
  var l2 = c3 ? c3.emptyScript : "";
  var p2 = a.reactiveElementPolyfillSupport;
  var d2 = (t4, s5) => t4;
  var u2 = { toAttribute(t4, s5) {
    switch (s5) {
      case Boolean:
        t4 = t4 ? l2 : null;
        break;
      case Object:
      case Array:
        t4 = null == t4 ? t4 : JSON.stringify(t4);
    }
    return t4;
  }, fromAttribute(t4, s5) {
    let i5 = t4;
    switch (s5) {
      case Boolean:
        i5 = null !== t4;
        break;
      case Number:
        i5 = null === t4 ? null : Number(t4);
        break;
      case Object:
      case Array:
        try {
          i5 = JSON.parse(t4);
        } catch (t5) {
          i5 = null;
        }
    }
    return i5;
  } };
  var f2 = (t4, s5) => !i3(t4, s5);
  var y2 = { attribute: true, type: String, converter: u2, reflect: false, hasChanged: f2 };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var b = class extends HTMLElement {
    static addInitializer(t4) {
      this._$Ei(), (this.l ??= []).push(t4);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t4, s5 = y2) {
      if (s5.state && (s5.attribute = false), this._$Ei(), this.elementProperties.set(t4, s5), !s5.noAccessor) {
        const i5 = Symbol(), r7 = this.getPropertyDescriptor(t4, i5, s5);
        void 0 !== r7 && e3(this.prototype, t4, r7);
      }
    }
    static getPropertyDescriptor(t4, s5, i5) {
      const { get: e6, set: h4 } = r3(this.prototype, t4) ?? { get() {
        return this[s5];
      }, set(t5) {
        this[s5] = t5;
      } };
      return { get() {
        return e6?.call(this);
      }, set(s6) {
        const r7 = e6?.call(this);
        h4.call(this, s6), this.requestUpdate(t4, r7, i5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      return this.elementProperties.get(t4) ?? y2;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d2("elementProperties")))
        return;
      const t4 = n2(this);
      t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d2("finalized")))
        return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d2("properties"))) {
        const t5 = this.properties, s5 = [...h2(t5), ...o3(t5)];
        for (const i5 of s5)
          this.createProperty(i5, t5[i5]);
      }
      const t4 = this[Symbol.metadata];
      if (null !== t4) {
        const s5 = litPropertyMetadata.get(t4);
        if (void 0 !== s5)
          for (const [t5, i5] of s5)
            this.elementProperties.set(t5, i5);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t5, s5] of this.elementProperties) {
        const i5 = this._$Eu(t5, s5);
        void 0 !== i5 && this._$Eh.set(i5, t5);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s5) {
      const i5 = [];
      if (Array.isArray(s5)) {
        const e6 = new Set(s5.flat(1 / 0).reverse());
        for (const s6 of e6)
          i5.unshift(c2(s6));
      } else
        void 0 !== s5 && i5.push(c2(s5));
      return i5;
    }
    static _$Eu(t4, s5) {
      const i5 = s5.attribute;
      return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$Eg = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$ES(), this.requestUpdate(), this.constructor.l?.forEach((t4) => t4(this));
    }
    addController(t4) {
      (this._$E_ ??= /* @__PURE__ */ new Set()).add(t4), void 0 !== this.renderRoot && this.isConnected && t4.hostConnected?.();
    }
    removeController(t4) {
      this._$E_?.delete(t4);
    }
    _$ES() {
      const t4 = /* @__PURE__ */ new Map(), s5 = this.constructor.elementProperties;
      for (const i5 of s5.keys())
        this.hasOwnProperty(i5) && (t4.set(i5, this[i5]), delete this[i5]);
      t4.size > 0 && (this._$Ep = t4);
    }
    createRenderRoot() {
      const t4 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S2(t4, this.constructor.elementStyles), t4;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$E_?.forEach((t4) => t4.hostConnected?.());
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      this._$E_?.forEach((t4) => t4.hostDisconnected?.());
    }
    attributeChangedCallback(t4, s5, i5) {
      this._$AK(t4, i5);
    }
    _$EO(t4, s5) {
      const i5 = this.constructor.elementProperties.get(t4), e6 = this.constructor._$Eu(t4, i5);
      if (void 0 !== e6 && true === i5.reflect) {
        const r7 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u2).toAttribute(s5, i5.type);
        this._$Em = t4, null == r7 ? this.removeAttribute(e6) : this.setAttribute(e6, r7), this._$Em = null;
      }
    }
    _$AK(t4, s5) {
      const i5 = this.constructor, e6 = i5._$Eh.get(t4);
      if (void 0 !== e6 && this._$Em !== e6) {
        const t5 = i5.getPropertyOptions(e6), r7 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== t5.converter?.fromAttribute ? t5.converter : u2;
        this._$Em = e6, this[e6] = r7.fromAttribute(s5, t5.type), this._$Em = null;
      }
    }
    requestUpdate(t4, s5, i5, e6 = false, r7) {
      if (void 0 !== t4) {
        if (i5 ??= this.constructor.getPropertyOptions(t4), !(i5.hasChanged ?? f2)(e6 ? r7 : this[t4], s5))
          return;
        this.C(t4, s5, i5);
      }
      false === this.isUpdatePending && (this._$Eg = this._$EP());
    }
    C(t4, s5, i5) {
      this._$AL.has(t4) || this._$AL.set(t4, s5), true === i5.reflect && this._$Em !== t4 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t4);
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$Eg;
      } catch (t5) {
        Promise.reject(t5);
      }
      const t4 = this.scheduleUpdate();
      return null != t4 && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending)
        return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t6, s6] of this._$Ep)
            this[t6] = s6;
          this._$Ep = void 0;
        }
        const t5 = this.constructor.elementProperties;
        if (t5.size > 0)
          for (const [s6, i5] of t5)
            true !== i5.wrapped || this._$AL.has(s6) || void 0 === this[s6] || this.C(s6, this[s6], i5);
      }
      let t4 = false;
      const s5 = this._$AL;
      try {
        t4 = this.shouldUpdate(s5), t4 ? (this.willUpdate(s5), this._$E_?.forEach((t5) => t5.hostUpdate?.()), this.update(s5)) : this._$ET();
      } catch (s6) {
        throw t4 = false, this._$ET(), s6;
      }
      t4 && this._$AE(s5);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      this._$E_?.forEach((t5) => t5.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
    }
    _$ET() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$Eg;
    }
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      this._$Ej &&= this._$Ej.forEach((t5) => this._$EO(t5, this[t5])), this._$ET();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  };
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d2("elementProperties")] = /* @__PURE__ */ new Map(), b[d2("finalized")] = /* @__PURE__ */ new Map(), p2?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.2");

  // node_modules/lit-html/lit-html.js
  var t3 = globalThis;
  var i4 = t3.trustedTypes;
  var s3 = i4 ? i4.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var e4 = "$lit$";
  var h3 = `lit$${(Math.random() + "").slice(9)}$`;
  var o4 = "?" + h3;
  var n3 = `<${o4}>`;
  var r4 = document;
  var l3 = () => r4.createComment("");
  var c4 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
  var a2 = Array.isArray;
  var u3 = (t4) => a2(t4) || "function" == typeof t4?.[Symbol.iterator];
  var d3 = "[ 	\n\f\r]";
  var f3 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v2 = /-->/g;
  var _2 = />/g;
  var m2 = RegExp(`>|${d3}(?:([^\\s"'>=/]+)(${d3}*=${d3}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p3 = /'/g;
  var g2 = /"/g;
  var $2 = /^(?:script|style|textarea|title)$/i;
  var y3 = (t4) => (i5, ...s5) => ({ _$litType$: t4, strings: i5, values: s5 });
  var x2 = y3(1);
  var b2 = y3(2);
  var w2 = Symbol.for("lit-noChange");
  var T2 = Symbol.for("lit-nothing");
  var A2 = /* @__PURE__ */ new WeakMap();
  var E2 = r4.createTreeWalker(r4, 129);
  function C2(t4, i5) {
    if (!Array.isArray(t4) || !t4.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== s3 ? s3.createHTML(i5) : i5;
  }
  var P2 = (t4, i5) => {
    const s5 = t4.length - 1, o6 = [];
    let r7, l4 = 2 === i5 ? "<svg>" : "", c5 = f3;
    for (let i6 = 0; i6 < s5; i6++) {
      const s6 = t4[i6];
      let a3, u4, d4 = -1, y4 = 0;
      for (; y4 < s6.length && (c5.lastIndex = y4, u4 = c5.exec(s6), null !== u4); )
        y4 = c5.lastIndex, c5 === f3 ? "!--" === u4[1] ? c5 = v2 : void 0 !== u4[1] ? c5 = _2 : void 0 !== u4[2] ? ($2.test(u4[2]) && (r7 = RegExp("</" + u4[2], "g")), c5 = m2) : void 0 !== u4[3] && (c5 = m2) : c5 === m2 ? ">" === u4[0] ? (c5 = r7 ?? f3, d4 = -1) : void 0 === u4[1] ? d4 = -2 : (d4 = c5.lastIndex - u4[2].length, a3 = u4[1], c5 = void 0 === u4[3] ? m2 : '"' === u4[3] ? g2 : p3) : c5 === g2 || c5 === p3 ? c5 = m2 : c5 === v2 || c5 === _2 ? c5 = f3 : (c5 = m2, r7 = void 0);
      const x3 = c5 === m2 && t4[i6 + 1].startsWith("/>") ? " " : "";
      l4 += c5 === f3 ? s6 + n3 : d4 >= 0 ? (o6.push(a3), s6.slice(0, d4) + e4 + s6.slice(d4) + h3 + x3) : s6 + h3 + (-2 === d4 ? i6 : x3);
    }
    return [C2(t4, l4 + (t4[s5] || "<?>") + (2 === i5 ? "</svg>" : "")), o6];
  };
  var V2 = class _V {
    constructor({ strings: t4, _$litType$: s5 }, n5) {
      let r7;
      this.parts = [];
      let c5 = 0, a3 = 0;
      const u4 = t4.length - 1, d4 = this.parts, [f4, v3] = P2(t4, s5);
      if (this.el = _V.createElement(f4, n5), E2.currentNode = this.el.content, 2 === s5) {
        const t5 = this.el.content.firstChild;
        t5.replaceWith(...t5.childNodes);
      }
      for (; null !== (r7 = E2.nextNode()) && d4.length < u4; ) {
        if (1 === r7.nodeType) {
          if (r7.hasAttributes())
            for (const t5 of r7.getAttributeNames())
              if (t5.endsWith(e4)) {
                const i5 = v3[a3++], s6 = r7.getAttribute(t5).split(h3), e6 = /([.?@])?(.*)/.exec(i5);
                d4.push({ type: 1, index: c5, name: e6[2], strings: s6, ctor: "." === e6[1] ? k2 : "?" === e6[1] ? H2 : "@" === e6[1] ? I2 : R2 }), r7.removeAttribute(t5);
              } else
                t5.startsWith(h3) && (d4.push({ type: 6, index: c5 }), r7.removeAttribute(t5));
          if ($2.test(r7.tagName)) {
            const t5 = r7.textContent.split(h3), s6 = t5.length - 1;
            if (s6 > 0) {
              r7.textContent = i4 ? i4.emptyScript : "";
              for (let i5 = 0; i5 < s6; i5++)
                r7.append(t5[i5], l3()), E2.nextNode(), d4.push({ type: 2, index: ++c5 });
              r7.append(t5[s6], l3());
            }
          }
        } else if (8 === r7.nodeType)
          if (r7.data === o4)
            d4.push({ type: 2, index: c5 });
          else {
            let t5 = -1;
            for (; -1 !== (t5 = r7.data.indexOf(h3, t5 + 1)); )
              d4.push({ type: 7, index: c5 }), t5 += h3.length - 1;
          }
        c5++;
      }
    }
    static createElement(t4, i5) {
      const s5 = r4.createElement("template");
      return s5.innerHTML = t4, s5;
    }
  };
  function N2(t4, i5, s5 = t4, e6) {
    if (i5 === w2)
      return i5;
    let h4 = void 0 !== e6 ? s5._$Co?.[e6] : s5._$Cl;
    const o6 = c4(i5) ? void 0 : i5._$litDirective$;
    return h4?.constructor !== o6 && (h4?._$AO?.(false), void 0 === o6 ? h4 = void 0 : (h4 = new o6(t4), h4._$AT(t4, s5, e6)), void 0 !== e6 ? (s5._$Co ??= [])[e6] = h4 : s5._$Cl = h4), void 0 !== h4 && (i5 = N2(t4, h4._$AS(t4, i5.values), h4, e6)), i5;
  }
  var S3 = class {
    constructor(t4, i5) {
      this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t4) {
      const { el: { content: i5 }, parts: s5 } = this._$AD, e6 = (t4?.creationScope ?? r4).importNode(i5, true);
      E2.currentNode = e6;
      let h4 = E2.nextNode(), o6 = 0, n5 = 0, l4 = s5[0];
      for (; void 0 !== l4; ) {
        if (o6 === l4.index) {
          let i6;
          2 === l4.type ? i6 = new M2(h4, h4.nextSibling, this, t4) : 1 === l4.type ? i6 = new l4.ctor(h4, l4.name, l4.strings, this, t4) : 6 === l4.type && (i6 = new L2(h4, this, t4)), this._$AV.push(i6), l4 = s5[++n5];
        }
        o6 !== l4?.index && (h4 = E2.nextNode(), o6++);
      }
      return E2.currentNode = r4, e6;
    }
    p(t4) {
      let i5 = 0;
      for (const s5 of this._$AV)
        void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t4, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t4[i5])), i5++;
    }
  };
  var M2 = class _M {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t4, i5, s5, e6) {
      this.type = 2, this._$AH = T2, this._$AN = void 0, this._$AA = t4, this._$AB = i5, this._$AM = s5, this.options = e6, this._$Cv = e6?.isConnected ?? true;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === t4?.nodeType && (t4 = i5.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i5 = this) {
      t4 = N2(this, t4, i5), c4(t4) ? t4 === T2 || null == t4 || "" === t4 ? (this._$AH !== T2 && this._$AR(), this._$AH = T2) : t4 !== this._$AH && t4 !== w2 && this._(t4) : void 0 !== t4._$litType$ ? this.g(t4) : void 0 !== t4.nodeType ? this.$(t4) : u3(t4) ? this.T(t4) : this._(t4);
    }
    k(t4) {
      return this._$AA.parentNode.insertBefore(t4, this._$AB);
    }
    $(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.k(t4));
    }
    _(t4) {
      this._$AH !== T2 && c4(this._$AH) ? this._$AA.nextSibling.data = t4 : this.$(r4.createTextNode(t4)), this._$AH = t4;
    }
    g(t4) {
      const { values: i5, _$litType$: s5 } = t4, e6 = "number" == typeof s5 ? this._$AC(t4) : (void 0 === s5.el && (s5.el = V2.createElement(C2(s5.h, s5.h[0]), this.options)), s5);
      if (this._$AH?._$AD === e6)
        this._$AH.p(i5);
      else {
        const t5 = new S3(e6, this), s6 = t5.u(this.options);
        t5.p(i5), this.$(s6), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i5 = A2.get(t4.strings);
      return void 0 === i5 && A2.set(t4.strings, i5 = new V2(t4)), i5;
    }
    T(t4) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s5, e6 = 0;
      for (const h4 of t4)
        e6 === i5.length ? i5.push(s5 = new _M(this.k(l3()), this.k(l3()), this, this.options)) : s5 = i5[e6], s5._$AI(h4), e6++;
      e6 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e6), i5.length = e6);
    }
    _$AR(t4 = this._$AA.nextSibling, i5) {
      for (this._$AP?.(false, true, i5); t4 && t4 !== this._$AB; ) {
        const i6 = t4.nextSibling;
        t4.remove(), t4 = i6;
      }
    }
    setConnected(t4) {
      void 0 === this._$AM && (this._$Cv = t4, this._$AP?.(t4));
    }
  };
  var R2 = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t4, i5, s5, e6, h4) {
      this.type = 1, this._$AH = T2, this._$AN = void 0, this.element = t4, this.name = i5, this._$AM = e6, this.options = h4, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = T2;
    }
    _$AI(t4, i5 = this, s5, e6) {
      const h4 = this.strings;
      let o6 = false;
      if (void 0 === h4)
        t4 = N2(this, t4, i5, 0), o6 = !c4(t4) || t4 !== this._$AH && t4 !== w2, o6 && (this._$AH = t4);
      else {
        const e7 = t4;
        let n5, r7;
        for (t4 = h4[0], n5 = 0; n5 < h4.length - 1; n5++)
          r7 = N2(this, e7[s5 + n5], i5, n5), r7 === w2 && (r7 = this._$AH[n5]), o6 ||= !c4(r7) || r7 !== this._$AH[n5], r7 === T2 ? t4 = T2 : t4 !== T2 && (t4 += (r7 ?? "") + h4[n5 + 1]), this._$AH[n5] = r7;
      }
      o6 && !e6 && this.O(t4);
    }
    O(t4) {
      t4 === T2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
    }
  };
  var k2 = class extends R2 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    O(t4) {
      this.element[this.name] = t4 === T2 ? void 0 : t4;
    }
  };
  var H2 = class extends R2 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    O(t4) {
      this.element.toggleAttribute(this.name, !!t4 && t4 !== T2);
    }
  };
  var I2 = class extends R2 {
    constructor(t4, i5, s5, e6, h4) {
      super(t4, i5, s5, e6, h4), this.type = 5;
    }
    _$AI(t4, i5 = this) {
      if ((t4 = N2(this, t4, i5, 0) ?? T2) === w2)
        return;
      const s5 = this._$AH, e6 = t4 === T2 && s5 !== T2 || t4.capture !== s5.capture || t4.once !== s5.once || t4.passive !== s5.passive, h4 = t4 !== T2 && (s5 === T2 || e6);
      e6 && this.element.removeEventListener(this.name, this, s5), h4 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  var L2 = class {
    constructor(t4, i5, s5) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      N2(this, t4);
    }
  };
  var Z2 = t3.litHtmlPolyfillSupport;
  Z2?.(V2, M2), (t3.litHtmlVersions ??= []).push("3.1.0");
  var j2 = (t4, i5, s5) => {
    const e6 = s5?.renderBefore ?? i5;
    let h4 = e6._$litPart$;
    if (void 0 === h4) {
      const t5 = s5?.renderBefore ?? null;
      e6._$litPart$ = h4 = new M2(i5.insertBefore(l3(), t5), t5, void 0, s5 ?? {});
    }
    return h4._$AI(t4), h4;
  };

  // node_modules/lit-element/lit-element.js
  var s4 = class extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t4 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t4.firstChild, t4;
    }
    update(t4) {
      const i5 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = j2(i5, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return w2;
    }
  };
  s4._$litElement$ = true, s4["finalized", "finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: s4 });
  var r5 = globalThis.litElementPolyfillSupport;
  r5?.({ LitElement: s4 });
  (globalThis.litElementVersions ??= []).push("4.0.2");

  // node_modules/@lit/reactive-element/decorators/property.js
  var o5 = { attribute: true, type: String, converter: u2, reflect: false, hasChanged: f2 };
  var r6 = (t4 = o5, e6, r7) => {
    const { kind: n5, metadata: i5 } = r7;
    let s5 = globalThis.litPropertyMetadata.get(i5);
    if (void 0 === s5 && globalThis.litPropertyMetadata.set(i5, s5 = /* @__PURE__ */ new Map()), s5.set(r7.name, t4), "accessor" === n5) {
      const { name: o6 } = r7;
      return { set(r8) {
        const n6 = e6.get.call(this);
        e6.set.call(this, r8), this.requestUpdate(o6, n6, t4);
      }, init(e7) {
        return void 0 !== e7 && this.C(o6, void 0, t4), e7;
      } };
    }
    if ("setter" === n5) {
      const { name: o6 } = r7;
      return function(r8) {
        const n6 = this[o6];
        e6.call(this, r8), this.requestUpdate(o6, n6, t4);
      };
    }
    throw Error("Unsupported decorator location: " + n5);
  };
  function n4(t4) {
    return (e6, o6) => "object" == typeof o6 ? r6(t4, e6, o6) : ((t5, e7, o7) => {
      const r7 = e7.hasOwnProperty(o7);
      return e7.constructor.createProperty(o7, r7 ? { ...t5, wrapped: true } : t5), r7 ? Object.getOwnPropertyDescriptor(e7, o7) : void 0;
    })(t4, e6, o6);
  }

  // node_modules/@posit-dev/shiny-bindings-core/dist/utils.js
  var Shiny = window.Shiny;

  // node_modules/@posit-dev/shiny-bindings-core/dist/makeInputBinding.js
  function makeInputBinding(tagName, el, opts = { registerElement: true, type: null }) {
    if (!Shiny) {
      return;
    }
    class NewCustomBinding extends Shiny["InputBinding"] {
      constructor() {
        super();
      }
      find(scope) {
        return $(scope).find(tagName);
      }
      getValue(el2) {
        return el2.value;
      }
      getType(_3) {
        return opts.type ?? null;
      }
      subscribe(el2, callback) {
        el2.notifyBindingOfChange = (ad) => callback(ad ?? false);
      }
      unsubscribe(el2) {
        el2.notifyBindingOfChange = (_3) => {
        };
      }
    }
    if (opts.registerElement) {
      customElements.define(tagName, el);
    }
    Shiny.inputBindings.register(new NewCustomBinding(), `${tagName}-Binding`);
  }

  // srcts/index.ts
  var import_jsme_editor = __toESM(require_jsme_nocache());
  var _JsmeWidgetEl = class _JsmeWidgetEl extends s4 {
    constructor() {
      super(...arguments);
      this.jsmeWidgetValue = "";
      this.value = "";
      /*
       * The callback function that is called when the value of the input changes.
       * This alerts Shiny that the value has changed and it should check for the
       * latest value. This is set by the input binding.
       */
      this.notifyBindingOfChange = () => {
      };
    }
    static {
      this.styles = i2`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
      width: fit-content;
    }
  `;
    }
    static {
      // Potentially adjust dimensions if needed
      this.DEFAULT_WIDTH = "380px";
    }
    static {
      this.DEFAULT_HEIGHT = "340px";
    }
    connectedCallback() {
      super.connectedCallback();
      this.initializeJsme();
    }
    initializeJsme() {
      const jsmeContainer = document.createElement("div");
      jsmeContainer.id = "jsme_container";
      this.shadowRoot?.appendChild(jsmeContainer);
      if (typeof import_jsme_editor.default !== "undefined") {
        this.jsmeApplet = new import_jsme_editor.default.JSME(
          "jsme_container",
          _JsmeWidgetEl.DEFAULT_WIDTH,
          _JsmeWidgetEl.DEFAULT_HEIGHT
        );
      } else {
        console.error("JSME Library not found. Please check how it's loaded.");
      }
    }
  };
  __decorateClass([
    n4({ type: String })
  ], _JsmeWidgetEl.prototype, "jsmeWidgetValue", 2);
  __decorateClass([
    n4({ type: String })
  ], _JsmeWidgetEl.prototype, "value", 2);
  var JsmeWidgetEl = _JsmeWidgetEl;
  makeInputBinding("jsme-widget", JsmeWidgetEl, {
    registerElement: true
  });
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
