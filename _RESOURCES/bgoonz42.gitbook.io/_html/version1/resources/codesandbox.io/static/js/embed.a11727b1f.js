!(function (e) {
  function t(t) {
    for (
      var o, r, a = t[0], c = t[1], d = t[2], l = 0, m = [];
      l < a.length;
      l++
    )
      (r = a[l]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && m.push(i[r][0]),
        (i[r] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    for (u && u(t); m.length; ) m.shift()();
    return s.push.apply(s, d || []), n();
  }

  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], o = !0, r = 1; r < n.length; r++) {
        var c = n[r];
        0 !== i[c] && (o = !1);
      }
      o && (s.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = {
      embed: 0,
    },
    i = {
      embed: 0,
    },
    s = [];

  function a(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = {
      i: t,
      l: !1,
      exports: {},
    });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.e = function (e) {
    var t = [];
    r[e]
      ? t.push(r[e])
      : 0 !== r[e] &&
        {
          "vendors~codemirror-editor": 1,
        }[e] &&
        t.push(
          (r[e] = new Promise(function (t, n) {
            for (
              var o =
                  "static/css/" +
                  ({
                    "vendors~app~codemirror-editor~monaco-editor~sandbox":
                      "vendors~app~codemirror-editor~monaco-editor~sandbox",
                    "vendors~app~codemirror-editor~monaco-editor":
                      "vendors~app~codemirror-editor~monaco-editor",
                    "vendors~app~monaco-editor": "vendors~app~monaco-editor",
                    "vendors~monaco-editor": "vendors~monaco-editor",
                    "default~app~monaco-editor": "default~app~monaco-editor",
                    "monaco-editor": "monaco-editor",
                    "vendors~codemirror-editor": "vendors~codemirror-editor",
                    "codemirror-editor": "codemirror-editor",
                    "codemirror-handlebars": "codemirror-handlebars",
                    "codemirror-tern": "codemirror-tern",
                    "vendors~codemirror-css~codemirror-html~codemirror-sass~codemirror-vue":
                      "vendors~codemirror-css~codemirror-html~codemirror-sass~codemirror-vue",
                    "codemirror-html": "codemirror-html",
                    "codemirror-sass": "codemirror-sass",
                    "vendors~codemirror-stylus~codemirror-vue":
                      "vendors~codemirror-stylus~codemirror-vue",
                    "vendors~codemirror-vue": "vendors~codemirror-vue",
                    "vendors~codemirror-markdown":
                      "vendors~codemirror-markdown",
                    "vendors~codemirror-vim": "vendors~codemirror-vim",
                  }[e] || e) +
                  "." +
                  {
                    "vendors~app~codemirror-editor~monaco-editor~sandbox":
                      "31d6cfe0",
                    "vendors~app~codemirror-editor~monaco-editor": "31d6cfe0",
                    "vendors~app~monaco-editor": "31d6cfe0",
                    "vendors~monaco-editor": "31d6cfe0",
                    "default~app~monaco-editor": "31d6cfe0",
                    "monaco-editor": "31d6cfe0",
                    "vendors~codemirror-editor": "3dbb558c",
                    "codemirror-editor": "31d6cfe0",
                    "codemirror-handlebars": "31d6cfe0",
                    "codemirror-tern": "31d6cfe0",
                    "vendors~codemirror-css~codemirror-html~codemirror-sass~codemirror-vue":
                      "31d6cfe0",
                    "codemirror-html": "31d6cfe0",
                    "codemirror-sass": "31d6cfe0",
                    "vendors~codemirror-stylus~codemirror-vue": "31d6cfe0",
                    "vendors~codemirror-vue": "31d6cfe0",
                    "vendors~codemirror-markdown": "31d6cfe0",
                    "vendors~codemirror-vim": "31d6cfe0",
                  }[e] +
                  ".chunk.css",
                i = a.p + o,
                s = document.getElementsByTagName("link"),
                c = 0;
              c < s.length;
              c++
            ) {
              var d =
                (u = s[c]).getAttribute("data-href") || u.getAttribute("href");
              if ("stylesheet" === u.rel && (d === o || d === i)) return t();
            }
            var l = document.getElementsByTagName("style");
            for (c = 0; c < l.length; c++) {
              var u;
              if ((d = (u = l[c]).getAttribute("data-href")) === o || d === i)
                return t();
            }
            var m = document.createElement("link");
            (m.rel = "stylesheet"),
              (m.type = "text/css"),
              (m.onload = t),
              (m.onerror = function (t) {
                var o = (t && t.target && t.target.src) || i,
                  s = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + o + ")"
                  );
                (s.code = "CSS_CHUNK_LOAD_FAILED"),
                  (s.request = o),
                  delete r[e],
                  m.parentNode.removeChild(m),
                  n(s);
              }),
              (m.href = i),
              document.getElementsByTagName("head")[0].appendChild(m);
          }).then(function () {
            r[e] = 0;
          }))
        );
    var n = i[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var o = new Promise(function (t, o) {
          n = i[e] = [t, o];
        });
        t.push((n[2] = o));
        var s,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          a.nc && c.setAttribute("nonce", a.nc),
          (c.src = (function (e) {
            return (
              a.p +
              "static/js/" +
              ({
                "vendors~app~codemirror-editor~monaco-editor~sandbox":
                  "vendors~app~codemirror-editor~monaco-editor~sandbox",
                "vendors~app~codemirror-editor~monaco-editor":
                  "vendors~app~codemirror-editor~monaco-editor",
                "vendors~app~monaco-editor": "vendors~app~monaco-editor",
                "vendors~monaco-editor": "vendors~monaco-editor",
                "default~app~monaco-editor": "default~app~monaco-editor",
                "monaco-editor": "monaco-editor",
                "vendors~codemirror-editor": "vendors~codemirror-editor",
                "codemirror-editor": "codemirror-editor",
                "codemirror-handlebars": "codemirror-handlebars",
                "codemirror-tern": "codemirror-tern",
                "vendors~codemirror-css~codemirror-html~codemirror-sass~codemirror-vue":
                  "vendors~codemirror-css~codemirror-html~codemirror-sass~codemirror-vue",
                "codemirror-html": "codemirror-html",
                "codemirror-sass": "codemirror-sass",
                "vendors~codemirror-stylus~codemirror-vue":
                  "vendors~codemirror-stylus~codemirror-vue",
                "vendors~codemirror-vue": "vendors~codemirror-vue",
                "vendors~codemirror-markdown": "vendors~codemirror-markdown",
                "vendors~codemirror-vim": "vendors~codemirror-vim",
              }[e] || e) +
              "." +
              {
                "vendors~app~codemirror-editor~monaco-editor~sandbox":
                  "5ca13c344",
                "vendors~app~codemirror-editor~monaco-editor": "e9593b851",
                "vendors~app~monaco-editor": "bba89dfbf",
                "vendors~monaco-editor": "d3087d044",
                "default~app~monaco-editor": "5a5d506e2",
                "monaco-editor": "e18eb5eef",
                "vendors~codemirror-editor": "36d524a7c",
                "codemirror-editor": "0b3edc5df",
                "codemirror-handlebars": "94cf611fe",
                "codemirror-tern": "f3943ae24",
                "vendors~codemirror-css~codemirror-html~codemirror-sass~codemirror-vue":
                  "c3140592f",
                "codemirror-html": "1afeb1761",
                "codemirror-sass": "01ed3bc7f",
                "vendors~codemirror-stylus~codemirror-vue": "15bd1a2e5",
                "vendors~codemirror-vue": "34adf959d",
                "vendors~codemirror-markdown": "0b121994b",
                "vendors~codemirror-vim": "634b1a2ff",
              }[e] +
              ".chunk.js"
            );
          })(e));
        var d = new Error();
        s = function (t) {
          (c.onerror = c.onload = null), clearTimeout(l);
          var n = i[e];
          if (0 !== n) {
            if (n) {
              var o = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src;
              (d.message =
                "Loading chunk " + e + " failed.\n(" + o + ": " + r + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = o),
                (d.request = r),
                n[1](d);
            }
            i[e] = void 0;
          }
        };
        var l = setTimeout(function () {
          s({
            type: "timeout",
            target: c,
          });
        }, 12e4);
        (c.onerror = c.onload = s), document.head.appendChild(c);
      }
    return Promise.all(t);
  }),
    (a.m = e),
    (a.c = o),
    (a.d = function (e, t, n) {
      a.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: n,
        });
    }),
    (a.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          a.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "https://codesandbox.io/"),
    (a.oe = function (e) {
      throw (console.error(e), e);
    });
  var c = (this.csbJsonP = this.csbJsonP || []),
    d = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var l = 0; l < c.length; l++) t(c[l]);
  var u = d;
  s.push([
    8,
    "vendors~app~embed~sandbox~sandbox-startup",
    "common-sandbox",
    0,
    "vendors~app~embed~sandbox-startup",
    "common",
    "default~app~embed~sandbox",
    "default~app~embed",
  ]),
    n();
})({
  "../../node_modules/react-icons/lib/fa/eye.js": function (e, t, n) {
    var o, r, i;
    "undefined" !== typeof globalThis
      ? globalThis
      : "undefined" !== typeof self && self,
      (r = []),
      void 0 ===
        (i =
          "function" ===
          typeof (o = function () {
            "use strict";
            Object.defineProperty(t, "__esModule", {
              value: !0,
            });
            var o =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (e[o] = n[o]);
                  }
                  return e;
                },
              r = s(n("../../node_modules/react/index.js")),
              i = s(n("../../node_modules/react-icon-base/lib/index.js"));

            function s(e) {
              return e && e.__esModule
                ? e
                : {
                    default: e,
                  };
            }
            (t.default = function (e) {
              return r.default.createElement(
                i.default,
                o(
                  {
                    viewBox: "0 0 40 40",
                  },
                  e
                ),
                r.default.createElement(
                  "g",
                  null,
                  r.default.createElement("path", {
                    d: "m37.1 21.4q-3.3-5.2-8.5-7.8 1.4 2.3 1.4 5 0 4.1-2.9 7t-7.1 3-7.1-3-2.9-7q0-2.7 1.4-5.1-5.1 2.7-8.5 7.9 2.9 4.6 7.4 7.3t9.7 2.7 9.7-2.7 7.4-7.3z m-16-8.5q0-0.5-0.3-0.8t-0.8-0.3q-2.8 0-4.8 2t-2 4.8q0 0.4 0.3 0.7t0.8 0.3 0.7-0.3 0.4-0.7q0-2 1.3-3.3t3.3-1.4q0.4 0 0.8-0.3t0.3-0.7z m18.9 8.5q0 0.8-0.4 1.6-3.2 5.1-8.4 8.2t-11.2 3.1-11.2-3.1-8.4-8.2q-0.4-0.8-0.4-1.6t0.4-1.5q3.2-5.1 8.4-8.2t11.2-3.1 11.1 3.1 8.5 8.2q0.4 0.8 0.4 1.5z",
                  })
                )
              );
            }),
              (e.exports = t.default);
          })
            ? o.apply(t, r)
            : o) || (e.exports = i);
  },
  "../../node_modules/react-icons/lib/go/heart.js": function (e, t, n) {
    var o, r, i;
    "undefined" !== typeof globalThis
      ? globalThis
      : "undefined" !== typeof self && self,
      (r = []),
      void 0 ===
        (i =
          "function" ===
          typeof (o = function () {
            "use strict";
            Object.defineProperty(t, "__esModule", {
              value: !0,
            });
            var o =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (e[o] = n[o]);
                  }
                  return e;
                },
              r = s(n("../../node_modules/react/index.js")),
              i = s(n("../../node_modules/react-icon-base/lib/index.js"));

            function s(e) {
              return e && e.__esModule
                ? e
                : {
                    default: e,
                  };
            }
            (t.default = function (e) {
              return r.default.createElement(
                i.default,
                o(
                  {
                    viewBox: "0 0 40 40",
                  },
                  e
                ),
                r.default.createElement(
                  "g",
                  null,
                  r.default.createElement("path", {
                    d: "m20 33.8c15.6-12.3 15-16.7 15-20s-2.8-7.5-7.5-7.5-7.5 5-7.5 5-2.8-5-7.5-5-7.5 4.1-7.5 7.5-0.6 7.7 15 20z",
                  })
                )
              );
            }),
              (e.exports = t.default);
          })
            ? o.apply(t, r)
            : o) || (e.exports = i);
  },
  "../../node_modules/react-icons/lib/go/repo-forked.js": function (e, t, n) {
    var o, r, i;
    "undefined" !== typeof globalThis
      ? globalThis
      : "undefined" !== typeof self && self,
      (r = []),
      void 0 ===
        (i =
          "function" ===
          typeof (o = function () {
            "use strict";
            Object.defineProperty(t, "__esModule", {
              value: !0,
            });
            var o =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (e[o] = n[o]);
                  }
                  return e;
                },
              r = s(n("../../node_modules/react/index.js")),
              i = s(n("../../node_modules/react-icon-base/lib/index.js"));

            function s(e) {
              return e && e.__esModule
                ? e
                : {
                    default: e,
                  };
            }
            (t.default = function (e) {
              return r.default.createElement(
                i.default,
                o(
                  {
                    viewBox: "0 0 40 40",
                  },
                  e
                ),
                r.default.createElement(
                  "g",
                  null,
                  r.default.createElement("path", {
                    d: "m35 5c0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.8 1 3.5 2.5 4.3v4.2l-7.5 8.3-7.5-8.3v-4.2c1.5-0.8 2.5-2.4 2.5-4.3 0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.8 1 3.5 2.5 4.3v6.1l10 11v4.3c-1.5 0.9-2.5 2.5-2.5 4.3 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.8-1-3.4-2.5-4.3v-4.3l10-11v-6.1c1.5-0.8 2.5-2.4 2.5-4.3z m-25-2.5c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.4-2.4 2.4-2.4-1.1-2.4-2.4 1.1-2.5 2.4-2.5z m10 34.8c-1.3 0-2.4-1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z m10-34.8c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.4-2.4 2.4-2.4-1.1-2.4-2.4 1.1-2.5 2.4-2.5z",
                  })
                )
              );
            }),
              (e.exports = t.default);
          })
            ? o.apply(t, r)
            : o) || (e.exports = i);
  },
  "../../node_modules/react-icons/lib/md/code.js": function (e, t, n) {
    var o, r, i;
    "undefined" !== typeof globalThis
      ? globalThis
      : "undefined" !== typeof self && self,
      (r = []),
      void 0 ===
        (i =
          "function" ===
          typeof (o = function () {
            "use strict";
            Object.defineProperty(t, "__esModule", {
              value: !0,
            });
            var o =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (e[o] = n[o]);
                  }
                  return e;
                },
              r = s(n("../../node_modules/react/index.js")),
              i = s(n("../../node_modules/react-icon-base/lib/index.js"));

            function s(e) {
              return e && e.__esModule
                ? e
                : {
                    default: e,
                  };
            }
            (t.default = function (e) {
              return r.default.createElement(
                i.default,
                o(
                  {
                    viewBox: "0 0 40 40",
                  },
                  e
                ),
                r.default.createElement(
                  "g",
                  null,
                  r.default.createElement("path", {
                    d: "m24.3 27.7l7.7-7.7-7.7-7.7 2.3-2.3 10 10-10 10z m-8.6 0l-2.3 2.3-10-10 10-10 2.3 2.3-7.7 7.7z",
                  })
                )
              );
            }),
              (e.exports = t.default);
          })
            ? o.apply(t, r)
            : o) || (e.exports = i);
  },
  "../../node_modules/react-icons/lib/md/dvr.js": function (e, t, n) {
    var o, r, i;
    "undefined" !== typeof globalThis
      ? globalThis
      : "undefined" !== typeof self && self,
      (r = []),
      void 0 ===
        (i =
          "function" ===
          typeof (o = function () {
            "use strict";
            Object.defineProperty(t, "__esModule", {
              value: !0,
            });
            var o =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (e[o] = n[o]);
                  }
                  return e;
                },
              r = s(n("../../node_modules/react/index.js")),
              i = s(n("../../node_modules/react-icon-base/lib/index.js"));

            function s(e) {
              return e && e.__esModule
                ? e
                : {
                    default: e,
                  };
            }
            (t.default = function (e) {
              return r.default.createElement(
                i.default,
                o(
                  {
                    viewBox: "0 0 40 40",
                  },
                  e
                ),
                r.default.createElement(
                  "g",
                  null,
                  r.default.createElement("path", {
                    d: "m11.6 20v3.4h-3.2v-3.4h3.2z m0-6.6v3.2h-3.2v-3.2h3.2z m20 6.6v3.4h-18.2v-3.4h18.2z m0-6.6v3.2h-18.2v-3.2h18.2z m3.4 15v-20h-30v20h30z m0-23.4c1.8 0 3.4 1.6 3.4 3.4l-0.1 20c0 1.8-1.5 3.2-3.3 3.2h-8.4v3.4h-13.2v-3.4h-8.4c-1.8 0-3.4-1.4-3.4-3.2v-20c0-1.8 1.6-3.4 3.4-3.4h30z",
                  })
                )
              );
            }),
              (e.exports = t.default);
          })
            ? o.apply(t, r)
            : o) || (e.exports = i);
  },
  "../../node_modules/reakit/es/Button/index.js": function (e, t, n) {
    "use strict";
    n.r(t);
    n("../../node_modules/react/index.js");
    var o = n("../../node_modules/reakit/es/Button/Button.js");
    n.d(t, "Button", function () {
      return o.a;
    }),
      n.d(t, "useButton", function () {
        return o.b;
      });
  },
  "../common/lib/components/Button/elements.js": function (e, t, n) {
    "use strict";
    var o =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, o) {
              void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                });
            }
          : function (e, t, n, o) {
              void 0 === o && (o = n), (e[o] = t[n]);
            }),
      r =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t,
              });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                o(t, e, n);
          return r(t, e), t;
        },
      s =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t.ReakitButton = t.AButton = t.LinkButton = t.styles = void 0);
    const a = s(n("../../node_modules/react/index.js")),
      c = n("../../node_modules/react-router-dom/esm/react-router-dom.js"),
      d = n("../../node_modules/reakit/es/Button/index.js"),
      l = i(
        n(
          "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
        )
      ),
      u = s(n("../common/lib/theme/index.js")),
      m = n("../common/lib/utils/index.js");
    (t.styles = l.css`
  transition: 0.3s ease all;
  font-family: Poppins, Roboto, sans-serif;

  border: none;
  outline: none;
  ${(e) =>
    (({ theme: e, disabled: t, red: n, secondary: o, danger: r }) =>
      t
        ? "background-color: " +
          (e.light ? "rgba(0, 0, 0, 0.4)" : u.default.background2.darken(0.3)())
        : r
        ? "background-color: " + u.default.dangerBackground()
        : o
        ? "background-color: transparent"
        : n
        ? "background-color: " + u.default.red.darken(0.2)()
        : e && e["button.background"]
        ? "background-color: " + e["button.background"]
        : "background-color: #40A9F3;")(e)};
  background-size: 720%;

  border: ${(e) =>
    (({ theme: e, secondary: t, danger: n, red: o, disabled: r }) =>
      r
        ? e.light
          ? "2px solid rgba(0, 0, 0, 0.3)"
          : "2px solid #161A1C"
        : o
        ? "2px solid #F27777"
        : n
        ? "2px solid #E25D6A"
        : e && e["button.hoverBackground"]
        ? "2px solid " + e["button.hoverBackground"]
        : "2px solid #66B9F4")(e)};
  border-radius: 4px;

  box-sizing: border-box;
  font-size: 1.125em;
  text-align: center;
  color: ${(e) =>
    (({ disabled: e, secondary: t, theme: n }) =>
      e
        ? u.default.background2.lighten(1.5)()
        : t
        ? n.light
          ? "rgba(0, 0, 0, 0.75)"
          : "rgba(255, 255, 255, 0.75)"
        : "white")(e)};
  font-weight: 600;
  width: ${(e) => (e.block ? "100%" : "inherit")};

  user-select: none;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${(e) =>
    e.small
      ? l.css`
          padding: 0.5em 0.7em;
          font-size: 0.875em;
        `
      : l.css`
          padding: 0.65em 2.25em;
        `};

  ${(e) =>
    !e.disabled &&
    l.css`
      cursor: pointer;
    `};

  &:hover,
  &:focus {
    ${(e) =>
      (({ theme: e, disabled: t, red: n, secondary: o, danger: r }) =>
        t
          ? "background-color: " +
            (e.light
              ? "rgba(0, 0, 0, 0.4)"
              : u.default.background2.darken(0.3)())
          : r
          ? "background-color: #E25D6A"
          : n
          ? "background-color: #F27777"
          : e && e["button.hoverBackground"]
          ? "background-color: " + e["button.hoverBackground"]
          : o
          ? "background-color: #66b9f4"
          : "background-color: #66b9f4;")(e)};
    ${(e) =>
      (({ secondary: e, disabled: t }) => (t ? "" : e ? "color: white" : ""))(
        e
      )};

    outline: 0 !important;
  }
`),
      (t.LinkButton = l.default(m.withoutProps("small")(c.Link))`
  ${t.styles};
`),
      (t.AButton = l.default(
        m.withoutProps("small")((e) =>
          a.default.createElement("a", Object.assign({}, e))
        )
      )`
  ${t.styles};
`),
      (t.ReakitButton = l.default(m.withoutProps("small")(d.Button))`
  ${t.styles}
`);
  },
  "../common/lib/components/Button/index.js": function (e, t, n) {
    "use strict";
    var o =
        (this && this.__rest) ||
        function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
      r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t.buttonStyles = t.Button = void 0);
    const i = r(n("../../node_modules/react/index.js")),
      s = n("../common/lib/components/Button/elements.js");
    Object.defineProperty(t, "buttonStyles", {
      enumerable: !0,
      get: function () {
        return s.styles;
      },
    });
    t.Button = (e) => {
      var { style: t = {} } = e,
        n = o(e, ["style"]);
      return "string" === typeof n.to
        ? i.default.createElement(
            s.LinkButton,
            Object.assign({}, n, {
              style: t,
              to: n.to,
            })
          )
        : n.href
        ? i.default.createElement(
            s.AButton,
            Object.assign({}, n, {
              style: t,
            })
          )
        : i.default.createElement(
            s.ReakitButton,
            Object.assign({}, n, {
              style: t,
            })
          );
    };
  },
  "../common/lib/components/Input/index.js": function (e, t, n) {
    "use strict";
    var o =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, o) {
              void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                });
            }
          : function (e, t, n, o) {
              void 0 === o && (o = n), (e[o] = t[n]);
            }),
      r =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t,
              });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                o(t, e, n);
          return r(t, e), t;
        };
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t.TextArea = t.styles = void 0);
    const s = i(
      n(
        "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
      )
    );
    t.styles = s.css`
  transition: 0.3s ease border-color;
  background-color: ${(e) =>
    e.theme["input.background"] || "rgba(0, 0, 0, 0.3)"};
  color: ${(e) =>
    e.theme["input.foreground"] || (e.theme.light ? "#636363" : "white")};
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0.25em;
  width: ${({ block: e, fullWidth: t }) => (e || t ? "100%" : "inherit")};
  box-sizing: border-box;

  border: 1px solid
    ${(e) => (e.error ? e.theme.red.clearer(0.5) : "rgba(0, 0, 0, 0.1)")};

  &:focus {
    border-color: ${(e) => e.theme.secondary.clearer(0.6)};
  }
`;
    const a = s.default.input`
  ${t.styles};
`;
    (t.TextArea = s.default.textarea`
  ${t.styles};
`),
      (t.default = a);
  },
  "../common/lib/components/Stats/Stat/elements.js": function (e, t, n) {
    "use strict";
    var o =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, o) {
              void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                });
            }
          : function (e, t, n, o) {
              void 0 === o && (o = n), (e[o] = t[n]);
            }),
      r =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t,
              });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                o(t, e, n);
          return r(t, e), t;
        };
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t.CenteredText = void 0);
    const s = i(
      n(
        "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
      )
    );
    t.CenteredText = s.default.div`
  ${(e) =>
    !e.disableCenter &&
    s.css`
      justify-content: center;
    `};
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  margin-bottom: 0.5rem;

  width: ${(e) => (e.text ? "10em" : "5em")};

  svg {
    opacity: 0.75;
    font-size: 1.125em;
  }
`;
  },
  "../common/lib/components/Stats/Stat/index.js": function (e, t, n) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      };
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    const r = o(n("../../node_modules/react/index.js")),
      i = n("../common/lib/components/Stats/Stat/elements.js");
    t.default = function ({
      Icon: e,
      text: t,
      textOne: n,
      count: o,
      vertical: s,
    }) {
      return r.default.createElement(
        i.CenteredText,
        {
          text: t,
          disableCenter: s,
        },
        e,
        r.default.createElement(
          "span",
          {
            style: {
              marginLeft: "0.5em",
            },
          },
          (function (e) {
            return e >= 1e6
              ? (e / 1e6).toFixed(1) + "M"
              : e >= 1e3
              ? (e / 1e3).toFixed(1) + "k"
              : "" + e;
          })(o),
          " ",
          t && ((1 === o && n) || t)
        )
      );
    };
  },
  "../common/lib/components/Stats/elements.js": function (e, t, n) {
    "use strict";
    var o =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, o) {
              void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                });
            }
          : function (e, t, n, o) {
              void 0 === o && (o = n), (e[o] = t[n]);
            }),
      r =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t,
              });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                o(t, e, n);
          return r(t, e), t;
        };
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t.Stats = void 0);
    const s = i(
      n(
        "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
      )
    );
    t.Stats = s.default.div`
  display: flex;

  ${(e) =>
    e.vertical
      ? s.css`
          flex-direction: column;
        `
      : s.css`
          flex-direction: row;
          align-items: center;
        `};

  height: 100%;
`;
  },
  "../common/lib/components/Stats/index.js": function (e, t, n) {
    "use strict";
    var o =
        (this && this.__rest) ||
        function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
      r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    const i = r(n("../../node_modules/react/index.js")),
      s = r(n("../../node_modules/react-icons/lib/fa/eye.js")),
      a = r(n("../../node_modules/react-icons/lib/go/repo-forked.js")),
      c = r(n("../../node_modules/react-icons/lib/go/heart.js")),
      d = r(n("../common/lib/components/Stats/Stat/index.js")),
      l = n("../common/lib/components/Stats/elements.js");
    t.default = function (e) {
      var {
          viewCount: t,
          likeCount: n,
          forkCount: r,
          vertical: u = !1,
          text: m = !1,
          style: f,
        } = e,
        p = o(e, [
          "viewCount",
          "likeCount",
          "forkCount",
          "vertical",
          "text",
          "style",
        ]);
      return i.default.createElement(
        l.Stats,
        Object.assign(
          {
            vertical: u,
          },
          p
        ),
        i.default.createElement(d.default, {
          text: m ? "views" : void 0,
          textOne: m ? "view" : void 0,
          vertical: u,
          Icon: i.default.createElement(s.default, null),
          count: t,
        }),
        i.default.createElement(d.default, {
          text: m ? "likes" : void 0,
          textOne: m ? "like" : void 0,
          vertical: u,
          Icon: i.default.createElement(c.default, null),
          count: n,
        }),
        i.default.createElement(d.default, {
          text: m ? "forks" : void 0,
          textOne: m ? "fork" : void 0,
          vertical: u,
          Icon: i.default.createElement(a.default, null),
          count: r,
        })
      );
    };
  },
  "../common/lib/components/icons/CodeSandbox.js": function (e, t, n) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      };
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t.CodeSandboxIcon = void 0);
    const r = o(n("../../node_modules/react/index.js")),
      i = o(n("../../node_modules/react-icons/IconBase.js"));
    t.CodeSandboxIcon = (e) =>
      r.default.createElement(
        i.default,
        Object.assign(
          {
            fill: "none",
            viewBox: "0 0 24 24",
          },
          e
        ),
        r.default.createElement(
          "g",
          {
            clipRule: "evenodd",
            fillRule: "evenodd",
          },
          r.default.createElement("path", {
            d: "m12 11.8847v6.7437c.1174 0 .1945-.0255.3-.0856l5.3999-3.0857c.2132-.1222.3001-.3114.3001-.5572v-6.25701c0-.12328-.0259-.19703-.0858-.29999l-5.7415 3.2441c-.1068.061-.1727.1746-.1727.2977zm2.9999 3.8724c0 .1714-.0642.2571-.2143.3428l-1.7999 1.0286c-.1286.0857-.3.0429-.3-.1286v-4.5857c0-.1226.1079-.2816.2142-.3428l4.1143-2.35709c.1143-.06577.2143.03956.2143.17142v2.44287c0 .1266-.0597.2404-.1715.3l-1.8428.9857c-.1117.0595-.2143.1733-.2143.2999z",
            fill: "#999",
          }),
          r.default.createElement("path", {
            d: "m6 14.8998v-6.257c0-.24607.12921-.4779.34285-.59999l5.22845-2.9571c.1127-.0597.3-.08571.4286-.08571s.3269.03184.4286.08571l5.1856 2.9571c.1026.06062.242.20026.3.29999l-5.7428 3.2571c-.1068.061-.1714.177-.1714.3v6.7285c-.1174 0-.2374-.0256-.3428-.0858l-5.27139-3.0427c-.21365-.1222-.38571-.354-.38571-.6001zm.77142-5.01417v2.44287c0 .1714.04286.2571.21428.3428l1.79997 1.0286c.17143.0857.21428.2142.21428.3428v1.7143c0 .1714.04286.2571.21429.3428l1.79996 1.0286c.1714.0857.3.0428.3-.1286v-4.5856c0-.1286-.0429-.2572-.2143-.3429l-4.02849-2.31423c-.12857-.08571-.29999-.04286-.29999.12856zm7.02848-2.91424-1.5857.89999c-.1286.08572-.3.08572-.4285 0l-1.5858-.89999c-.1043-.05899-.23827-.05869-.34282 0l-1.97139 1.11427c-.17143.08572-.17143.25714 0 .34285l3.94281 2.27139c.1055.0604.2373.0604.3428 0l3.9428-2.27139c.1286-.08571.1715-.25713 0-.34285l-1.9714-1.11427c-.1045-.05869-.2384-.05899-.3428 0z",
            fill: "#f2f2f2",
          })
        )
      );
  },
  "../common/lib/components/icons/Preview.js": function (e, t, n) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      };
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t.PreviewIcon = void 0);
    const r = o(n("../../node_modules/react/index.js")),
      i = o(n("../../node_modules/react-icons/IconBase.js"));
    t.PreviewIcon = (e) =>
      r.default.createElement(
        i.default,
        Object.assign(
          {
            fill: "none",
            viewBox: "0 0 24 24",
          },
          e
        ),
        r.default.createElement("path", {
          clipRule: "evenodd",
          d: "m6 17v-10h12v10zm-1-10.1875c0-.44873.36377-.8125.8125-.8125h12.375c.4487 0 .8125.36377.8125.8125v10.375c0 .4487-.3638.8125-.8125.8125h-12.375c-.44873 0-.8125-.3638-.8125-.8125zm5 8.1875 5-3-5-3z",
          fill: "currentColor",
          fillRule: "evenodd",
        })
      );
  },
  "../common/lib/templates/configuration/parse-sandbox-configurations.js":
    function (e, t, n) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.parseSandboxConfigurations = void 0);
      const r = o(n("../common/lib/templates/index.js")),
        i = o(n("../common/lib/templates/configuration/parse.js")),
        s = n(
          "../common/lib/templates/configuration/resolve-module-wrapped.js"
        );
      t.parseSandboxConfigurations = function (e) {
        const t = r.default(e.template);
        return i.default(
          e.template,
          t.configurationFiles,
          s.resolveModuleWrapped(e),
          e
        );
      };
    },
  "../common/lib/templates/configuration/resolve-module-wrapped.js": function (
    e,
    t,
    n
  ) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t.resolveDirectoryWrapped = t.resolveModuleWrapped = void 0);
    const o = n("../common/lib/sandbox/modules.js");
    Object.defineProperty(t, "resolveModuleWrapped", {
      enumerable: !0,
      get: function () {
        return o.resolveModuleWrapped;
      },
    }),
      Object.defineProperty(t, "resolveDirectoryWrapped", {
        enumerable: !0,
        get: function () {
          return o.resolveDirectoryWrapped;
        },
      });
  },
  "./src/app/components/CodeEditor/types.js": function (e, t) {},
  "./src/app/pages/Sandbox/Editor/Content/Tabs/ModuleTab/elements.js":
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var o = n("../../node_modules/react-icons/lib/go/primitive-dot.js"),
        r = n.n(o),
        i = n(
          "./src/app/pages/Sandbox/Editor/Content/Tabs/Tab/elements.ts"
        ).b.withComponent(r.a);
    },
  "./src/app/pages/Sandbox/Editor/Content/Tabs/Tab/elements.ts": function (
    e,
    t,
    n
  ) {
    "use strict";
    n.d(t, "a", function () {
      return b;
    }),
      n.d(t, "d", function () {
        return g;
      }),
      n.d(t, "c", function () {
        return v;
      }),
      n.d(t, "b", function () {
        return y;
      });
    var o = n(
        "../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"
      ),
      r = n.n(o),
      i = n(
        "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
      ),
      s = n("../../node_modules/react-icons/lib/go/x.js"),
      a = n.n(s);

    function c() {
      var e = r()(["\n      pointer-events: none;\n      opacity: 0;\n    "]);
      return (
        (c = function () {
          return e;
        }),
        e
      );
    }

    function d() {
      var e = r()([
        "\n  transition: 0.1s ease opacity;\n  width: 0.75em;\n\n  float: right;\n  opacity: 1;\n  color: ",
        ";\n  margin-right: 0;\n\n  ",
        ";\n",
      ]);
      return (
        (d = function () {
          return e;
        }),
        e
      );
    }

    function l() {
      var e = r()([
        "\n  color: rgba(255, 255, 255, 0.3);\n  padding-right: 0.5rem;\n  white-space: nowrap;\n",
      ]);
      return (
        (l = function () {
          return e;
        }),
        e
      );
    }

    function u() {
      var e = r()([
        "\n  padding-right: 0.5rem;\n  padding-left: 6px;\n  white-space: nowrap;\n",
      ]);
      return (
        (u = function () {
          return e;
        }),
        e
      );
    }

    function m() {
      var e = r()(["\n      font-style: italic;\n    "]);
      return (
        (m = function () {
          return e;
        }),
        e
      );
    }

    function f() {
      var e = r()([
        "\n      background-color: ",
        ";\n      border-color: ",
        ";\n      color: ",
        ";\n    ",
      ]);
      return (
        (f = function () {
          return e;
        }),
        e
      );
    }

    function p() {
      var e = r()(["\n      background-color: ", ";\n    "]);
      return (
        (p = function () {
          return e;
        }),
        e
      );
    }

    function h() {
      var e = r()([
        "\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 1;\n  height: 100%;\n  font-size: 0.875rem;\n  cursor: pointer;\n\n  border-bottom: 1px solid ",
        ";\n\n  padding: 0 1rem;\n  padding-left: 0.75rem;\n  padding-right: 0.125rem;\n  color: ",
        ";\n\n  svg {\n    font-size: 1rem;\n    margin-right: 0.5rem;\n  }\n\n  background-color: ",
        ";\n\n  ",
        ";\n  ",
        ";\n  ",
        ";\n",
      ]);
      return (
        (h = function () {
          return e;
        }),
        e
      );
    }
    var b = i.default.div.withConfig({
        displayName: "elements__Container",
        componentId: "sc-1hl7sj6-0",
      })(
        h(),
        function (e) {
          return e.theme["tab.border"];
        },
        function (e) {
          return (
            e.theme["tab.inactiveForeground"] ||
            (e.theme.light ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)")
          );
        },
        function (e) {
          return e.theme["tab.inactiveBackground"] || "transparent";
        },
        function (e) {
          return (
            e.isOver && Object(i.css)(p(), e.theme.background2.lighten(0.2))
          );
        },
        function (e) {
          return (
            e.active &&
            Object(i.css)(
              f(),
              e.theme["tab.activeBackground"] || e.theme.background2,
              e.theme["tab.activeBorder"],
              e.theme["tab.activeForeground"] ||
                e.theme["editor.foreground"] ||
                "white"
            )
          );
        },
        function (e) {
          return e.dirty && Object(i.css)(m());
        }
      ),
      g = i.default.div.withConfig({
        displayName: "elements__TabTitle",
        componentId: "sc-1hl7sj6-1",
      })(u()),
      v = i.default.div.withConfig({
        displayName: "elements__TabDir",
        componentId: "sc-1hl7sj6-2",
      })(l()),
      y = Object(i.default)(a.a).withConfig({
        displayName: "elements__StyledCloseIcon",
        componentId: "sc-1hl7sj6-3",
      })(
        d(),
        function (e) {
          return e.theme.light
            ? "rgba(0, 0, 0, 0.9)"
            : "rgba(255, 255, 255, 0.9)";
        },
        function (e) {
          return !e.show && Object(i.css)(c());
        }
      );
  },
  "./src/app/pages/Sandbox/Editor/Content/Tabs/Tab/index.js": function (
    e,
    t,
    n
  ) {
    "use strict";
    var o = n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),
      r = n.n(o),
      i = n("../../node_modules/@babel/runtime/helpers/createClass.js"),
      s = n.n(i),
      a = n(
        "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"
      ),
      c = n.n(a),
      d = n("../../node_modules/@babel/runtime/helpers/inherits.js"),
      l = n.n(d),
      u = n(
        "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"
      ),
      m = n.n(u),
      f = n("../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
      p = n.n(f),
      h = n("../../node_modules/@babel/runtime/helpers/defineProperty.js"),
      b = n.n(h),
      g = n("../../node_modules/react/index.js"),
      v = n("./src/app/components/ContextMenu/index.tsx"),
      y = n("./src/app/pages/Sandbox/Editor/Content/Tabs/Tab/elements.ts");

    function w(e) {
      var t = (function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          o = p()(e);
        if (t) {
          var r = p()(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);
        return m()(this, n);
      };
    }
    var x = (function (e) {
      l()(n, e);
      var t = w(n);

      function n() {
        var e;
        r()(this, n);
        for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
          i[s] = arguments[s];
        return (
          (e = t.call.apply(t, [this].concat(i))),
          b()(c()(e), "state", {
            hovering: !1,
          }),
          b()(c()(e), "handleMouseEnter", function () {
            e.setState({
              hovering: !0,
            });
          }),
          b()(c()(e), "handleMouseLeave", function () {
            e.setState({
              hovering: !1,
            });
          }),
          b()(c()(e), "onMouseDown", function (t) {
            1 === t.button && e.closeTab(t);
          }),
          b()(c()(e), "closeTab", function (t) {
            t.preventDefault(),
              t.stopPropagation(),
              e.props.closeTab &&
                e.props.closeTab(e.props.position, e.props.active);
          }),
          b()(c()(e), "renderTabStatus", function () {
            var t = e.props.tabCount;
            return e.state.hovering && t > 1
              ? g.createElement(y.b, {
                  onClick: e.closeTab,
                  show: "true",
                })
              : g.createElement(y.b, {
                  onClick: e.closeTab,
                  show: void 0,
                });
          }),
          e
        );
      }
      return (
        s()(n, [
          {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.active,
                n = e.dirty,
                o = e.isOver,
                r = e.onClick,
                i = e.onDoubleClick,
                s = e.children,
                a = e.title,
                c = e.items,
                d = this.state.hovering;
              return g.createElement(
                v.a,
                {
                  style: {
                    height: "calc(100% - 1px)",
                  },
                  items: c || [],
                },
                g.createElement(
                  y.a,
                  {
                    active: t,
                    dirty: n,
                    isOver: o,
                    onClick: r,
                    onDoubleClick: i,
                    onMouseDown: this.onMouseDown,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                  },
                  a
                    ? g.createElement(
                        g.Fragment,
                        null,
                        g.createElement(y.d, null, a),
                        this.renderTabStatus()
                      )
                    : s({
                        hovering: d,
                        closeTab: this.closeTab,
                      })
                )
              );
            },
          },
        ]),
        n
      );
    })(g.Component);
    t.a = x;
  },
  "./src/embed/components/Content/CodeEditor.tsx": function (e, t, n) {
    "use strict";
    var o = n("../../node_modules/@babel/runtime/helpers/extends.js"),
      r = n.n(o),
      i = n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),
      s = n.n(i),
      a = n("../../node_modules/@babel/runtime/helpers/createClass.js"),
      c = n.n(a),
      d = n(
        "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"
      ),
      l = n.n(d),
      u = n("../../node_modules/@babel/runtime/helpers/inherits.js"),
      m = n.n(u),
      f = n(
        "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"
      ),
      p = n.n(f),
      h = n("../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
      b = n.n(h),
      g = n("../../node_modules/@babel/runtime/helpers/defineProperty.js"),
      v = n.n(g),
      y = n("../common/lib/components/flex/Centered.js"),
      w = n.n(y),
      x = n("../common/lib/components/spacing/Margin.js"),
      j = n.n(x),
      C = n(
        "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
      ),
      _ = n("../common/lib/components/Tooltip/index.js"),
      E = n.n(_),
      O = n("../common/lib/sandbox/modules.js"),
      k = n("../common/lib/templates/index.js"),
      S = n.n(k),
      P = n("../common/lib/templates/configuration/ui.js"),
      M = n.n(P),
      z = n("../common/lib/utils/is-image.js"),
      I = n.n(z),
      D = n("../../node_modules/react/index.js"),
      T = n.n(D),
      R = n("../../node_modules/ot/lib/index.js"),
      N = n("./src/app/utils/get-type.ts"),
      B = n(
        "./src/app/pages/Sandbox/Editor/Workspace/Files/DirectoryEntry/Entry/EntryIcons/index.tsx"
      ),
      L = n("../../node_modules/react-icons/lib/md/code.js"),
      V = n.n(L),
      H = n(
        "../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"
      ),
      F = n.n(H);

    function W() {
      var e = F()([
        "\n      color: rgba(255, 255, 255, 0.5);\n      cursor: initial;\n\n      &:hover {\n        color: rgba(255, 255, 255, 0.5);\n      }\n    ",
      ]);
      return (
        (W = function () {
          return e;
        }),
        e
      );
    }

    function A() {
      var e = F()([
        "\n  transition: 0.3s ease color;\n  margin: 0.5rem;\n\n  color: ",
        ";\n  font-size: 1.25rem;\n\n  cursor: pointer;\n\n  &:hover {\n    color: white;\n  }\n\n  ",
        ";\n",
      ]);
      return (
        (A = function () {
          return e;
        }),
        e
      );
    }

    function Z() {
      var e = F()([
        "\n  font-size: 1;\n  line-height: 1.4;\n\n  color: ",
        ";\n",
      ]);
      return (
        (Z = function () {
          return e;
        }),
        e
      );
    }

    function q() {
      var e = F()([
        "\n  display: inline-block;\n  font-weight: 600;\n  font-size: 1.25rem;\n  color: rgba(255, 255, 255, 0.8);\n  text-transform: uppercase;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 1rem;\n  flex: 1;\n",
      ]);
      return (
        (q = function () {
          return e;
        }),
        e
      );
    }

    function U() {
      var e = F()([
        "\n  padding: 1rem;\n  color: rgba(255, 255, 255, 0.8);\n  box-sizing: border-box;\n  overflow: auto;\n  max-height: 100%;\n",
      ]);
      return (
        (U = function () {
          return e;
        }),
        e
      );
    }
    var $ = C.default.div.withConfig({
        displayName: "elements__Container",
        componentId: "d7qjwg-0",
      })(U()),
      J = C.default.h1.withConfig({
        displayName: "elements__Title",
        componentId: "d7qjwg-1",
      })(q()),
      X = C.default.p.withConfig({
        displayName: "elements__Description",
        componentId: "d7qjwg-2",
      })(Z(), function (e) {
        return e.theme.light
          ? "rgba(0, 0, 0, 0.7)"
          : "rgba(255, 255, 255, 0.7)";
      }),
      G = C.default.div.withConfig({
        displayName: "elements__Icon",
        componentId: "d7qjwg-3",
      })(
        A(),
        function (e) {
          return e.theme.light
            ? "rgba(0, 0, 0, 0.7)"
            : "rgba(255, 255, 255, 0.7)";
        },
        function (e) {
          return e.disabled && Object(C.css)(W());
        }
      );

    function K(e) {
      var t = (function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          o = b()(e);
        if (t) {
          var r = b()(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);
        return p()(this, n);
      };
    }
    var Y = (function (e) {
        m()(n, e);
        var t = K(n);

        function n(e) {
          var o;
          return (
            s()(this, n),
            (o = t.call(this, e)),
            v()(l()(o), "disposeInitializer", void 0),
            v()(l()(o), "currentModule", void 0),
            v()(l()(o), "receivingCode", !1),
            v()(l()(o), "changeCode", function (e) {
              o.forceUpdate();
            }),
            v()(l()(o), "setReceivingCode", function (e) {
              o.receivingCode = e;
            }),
            v()(l()(o), "sendLiveChanges", function (e) {
              var t = o.props,
                n = t.sendTransforms,
                r = t.isLive,
                i = t.onCodeReceived;
              if (n) {
                var s = o.currentModule.code || "",
                  a = new R.TextOperation();
                a.delete(s.length), a.insert(e), n(a);
              } else !r && i && i();
            }),
            v()(l()(o), "changeModule", function (e) {
              o.currentModule = e;
            }),
            v()(l()(o), "updateFile", function (e) {
              var t = o.props,
                n = t.isLive,
                r = t.sendTransforms;
              n && r && !o.receivingCode && o.sendLiveChanges(e),
                o.props.onChange(e);
            }),
            (o.currentModule = e.currentModule),
            o
          );
        }
        return (
          c()(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onInitialized &&
                  (this.disposeInitializer = this.props.onInitialized(this));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.disposeInitializer && this.disposeInitializer();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.config,
                  n = e.width,
                  o = e.height,
                  r = e.sandbox,
                  i = this.currentModule,
                  s = M()(t.type).ConfigWizard;
                return T.a.createElement(
                  $,
                  {
                    style: {
                      width: n,
                      height: o,
                    },
                  },
                  T.a.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                      },
                    },
                    T.a.createElement(B.a, {
                      width: 32,
                      height: 32,
                      type: Object(N.a)(i.title),
                    }),
                    T.a.createElement(J, null, t.title),
                    T.a.createElement(
                      E.a,
                      {
                        content: "Show Code",
                      },
                      T.a.createElement(
                        G,
                        {
                          onClick: this.props.toggleConfigUI,
                        },
                        T.a.createElement(V.a, null)
                      )
                    )
                  ),
                  T.a.createElement(
                    X,
                    null,
                    t.description,
                    " ",
                    T.a.createElement(
                      "a",
                      {
                        href: t.moreInfoUrl,
                        target: "_blank",
                        rel: "noreferrer noopener",
                      },
                      "More info..."
                    )
                  ),
                  T.a.createElement(s, {
                    sandbox: r,
                    updateFile: this.updateFile,
                    file: i.code,
                  })
                );
              },
            },
          ]),
          n
        );
      })(T.a.PureComponent),
      Q = n("./src/app/components/CodeEditor/elements.ts"),
      ee = n("./src/app/components/SubTitle.ts"),
      te = n("./src/app/components/Title.ts"),
      ne = n("./src/app/utils/Loadable.tsx"),
      oe = n("../../node_modules/react-icons/lib/md/dvr.js"),
      re = n.n(oe),
      ie = n("../components/lib/index.js"),
      se = n("../common/lib/components/Button/index.js"),
      ae = n("../common/lib/components/Input/index.js"),
      ce = n.n(ae);

    function de() {
      var e = F()([
        "\n  display: flex;\n  justify-content: centered;\n  flex-direction: row;\n  width: 80%;\n\n  input {\n    flex: 4;\n    font-size: 1.5rem;\n  }\n\n  button {\n    flex: 1;\n    margin-left: 1rem;\n  }\n",
      ]);
      return (
        (de = function () {
          return e;
        }),
        e
      );
    }

    function le() {
      var e = F()([
        "\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n\n  max-width: 80%;\n  max-height: 70%;\n",
      ]);
      return (
        (le = function () {
          return e;
        }),
        e
      );
    }

    function ue() {
      var e = F()(["\n  font-size: 1.5rem;\n  color: ", ";\n"]);
      return (
        (ue = function () {
          return e;
        }),
        e
      );
    }

    function me() {
      var e = F()([
        "\n  font-size: 2rem;\n  margin-top: 3rem;\n  margin: 1rem 0;\n",
      ]);
      return (
        (me = function () {
          return e;
        }),
        e
      );
    }

    function fe() {
      var e = F()([
        "\n  height: 100%;\n  color: ",
        ";\n  overflow: auto;\n  padding: 1rem;\n",
      ]);
      return (
        (fe = function () {
          return e;
        }),
        e
      );
    }
    var pe = Object(C.default)(w.a).withConfig({
        displayName: "elements__Container",
        componentId: "sc-58lydy-0",
      })(fe(), function (e) {
        return e.theme["editor.foreground"] || "rgba(255, 255, 255, 0.9)";
      }),
      he = C.default.div.withConfig({
        displayName: "elements__Title",
        componentId: "sc-58lydy-1",
      })(me()),
      be = C.default.div.withConfig({
        displayName: "elements__SubTitle",
        componentId: "sc-58lydy-2",
      })(ue(), function (e) {
        return e.theme.light
          ? "rgba(0, 0, 0, 0.7)"
          : "rgba(255, 255, 255, 0.7)";
      }),
      ge = C.default.img.withConfig({
        displayName: "elements__Image",
        componentId: "sc-58lydy-3",
      })(le()),
      ve = C.default.form.withConfig({
        displayName: "elements__MaxWidth",
        componentId: "sc-58lydy-4",
      })(de());

    function ye(e) {
      var t = (function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          o = b()(e);
        if (t) {
          var r = b()(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);
        return p()(this, n);
      };
    }
    var we = (function (e) {
        m()(n, e);
        var t = ye(n);

        function n() {
          var e;
          s()(this, n);
          for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
            r[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(r))),
            v()(l()(e), "onSubmit", function (t) {
              t.preventDefault(),
                e.props.onSave && e.props.onSave(e.input.value);
            }),
            v()(l()(e), "input", void 0),
            v()(l()(e), "doChangeCode", function (t) {
              e.props.onChange(t.target.value);
            }),
            e
          );
        }
        return (
          c()(n, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.currentModule;
                return T.a.createElement(
                  pe,
                  {
                    style: {
                      width: this.props.width,
                      height: this.props.height,
                    },
                    horizontal: !0,
                  },
                  T.a.createElement(he, null, "Image"),
                  T.a.createElement(
                    be,
                    null,
                    "We refer to these files by URL, you can edit this url to change the image."
                  ),
                  T.a.createElement(ge, {
                    src: t.code,
                    alt: t.code,
                  }),
                  T.a.createElement(
                    ve,
                    {
                      onSubmit: this.onSubmit,
                    },
                    T.a.createElement(ce.a, {
                      ref: function (t) {
                        e.input = t;
                      },
                      onChange: this.doChangeCode,
                      value: t.code,
                    }),
                    T.a.createElement(
                      se.Button,
                      {
                        disabled: !t.isNotSynced,
                        type: "submit",
                      },
                      "Save"
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(T.a.Component),
      xe = n("../../node_modules/@babel/runtime/regenerator/index.js"),
      je = n.n(xe),
      Ce = n("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),
      _e = n.n(Ce),
      Ee =
        (n("./src/app/components/CodeEditor/types.js"),
        n("./src/embed/components/Content/Monaco/define-theme.js")),
      Oe = n("./src/embed/components/Content/Monaco/elements.js"),
      ke = n("./src/embed/components/Content/Monaco/mode.ts"),
      Se = n("./src/embed/components/Content/Monaco/MonacoReactComponent.js"),
      Pe = n("./src/embed/components/Content/Monaco/settings.js");

    function Me(e) {
      var t = (function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          o = b()(e);
        if (t) {
          var r = b()(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);
        return p()(this, n);
      };
    }
    var ze = (function (e) {
      m()(n, e);
      var t = Me(n);

      function n(e) {
        var o;
        return (
          s()(this, n),
          (o = t.call(this, e)),
          v()(l()(o), "editor", void 0),
          v()(l()(o), "monaco", void 0),
          v()(l()(o), "sizeProbeInterval", void 0),
          v()(l()(o), "settings", void 0),
          v()(l()(o), "resizeEditor", function () {
            o.forceUpdate(function () {
              o.editor.layout();
            });
          }),
          v()(
            l()(o),
            "setDiff",
            (function () {
              var e = _e()(
                je.a.mark(function e(t, n, r) {
                  var i, s, a;
                  return je.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(ke.a)(r, o.monaco);
                        case 2:
                          if (((e.t0 = e.sent), e.t0)) {
                            e.next = 5;
                            break;
                          }
                          e.t0 = "typescript";
                        case 5:
                          (i = e.t0),
                            (s = o.monaco.editor.createModel(t, i)),
                            (a = o.monaco.editor.createModel(n, i)),
                            o.editor.setModel({
                              original: s,
                              modified: a,
                            });
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n, o) {
                return e.apply(this, arguments);
              };
            })()
          ),
          v()(
            l()(o),
            "configureEditor",
            (function () {
              var e = _e()(
                je.a.mark(function e(t, n) {
                  return je.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o.editor = t),
                            (o.monaco = n),
                            (e.next = 4),
                            o.setDiff(
                              o.props.originalCode,
                              o.props.modifiedCode,
                              o.props.title || ""
                            )
                          );
                        case 4:
                          window.addEventListener("resize", o.resizeEditor),
                            o.resizeEditor(),
                            (o.sizeProbeInterval = setInterval(
                              o.resizeEditor.bind(l()(o)),
                              3e3
                            ));
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })()
          ),
          (o.settings = e.settings),
          o
        );
      }
      return (
        c()(n, [
          {
            key: "UNSAFE_componentWillUpdate",
            value: function (e) {
              (this.props.originalCode === e.originalCode &&
                this.props.modifiedCode === e.modifiedCode) ||
                this.setDiff(e.originalCode, e.modifiedCode, e.title);
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              window.removeEventListener("resize", this.resizeEditor),
                clearInterval(this.sizeProbeInterval);
            },
          },
          {
            key: "render",
            value: function () {
              return T.a.createElement(
                Oe.b,
                null,
                T.a.createElement(
                  Oe.a,
                  null,
                  T.a.createElement(Se.a, {
                    diffEditor: !0,
                    theme: "CodeSandbox",
                    editorWillMount: Ee.a,
                    editorDidMount: this.configureEditor,
                    options: Object(Pe.a)(this.settings),
                  })
                )
              );
            },
          },
        ]),
        n
      );
    })(T.a.Component);

    function Ie(e) {
      var t = (function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          o = b()(e);
        if (t) {
          var r = b()(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);
        return p()(this, n);
      };
    }

    function De(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }

    function Te(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? De(Object(n), !0).forEach(function (t) {
              v()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : De(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    n.d(t, "a", function () {
      return Le;
    });
    var Re = Object(ne.a)(function () {
        return Promise.all([
          n.e("vendors~app~codemirror-editor~monaco-editor~sandbox"),
          n.e("vendors~app~codemirror-editor~monaco-editor"),
          n.e("vendors~codemirror-editor"),
          n.e("codemirror-editor"),
        ]).then(
          n.bind(null, "./src/app/components/CodeEditor/CodeMirror/index.js")
        );
      }),
      Ne = Object(ne.a)(function () {
        return Promise.all([
          n.e("vendors~app~codemirror-editor~monaco-editor~sandbox"),
          n.e("vendors~app~codemirror-editor~monaco-editor"),
          n.e("vendors~app~monaco-editor"),
          n.e("vendors~monaco-editor"),
          n.e("default~app~monaco-editor"),
          n.e("monaco-editor"),
        ]).then(n.bind(null, "./src/embed/components/Content/Monaco/index.js"));
      }),
      Be = (function (e) {
        m()(n, e);
        var t = Ie(n);

        function n() {
          var e;
          s()(this, n);
          for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
            r[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(r))),
            v()(l()(e), "state", {
              showConfigUI: !0,
            }),
            v()(l()(e), "toggleConfigUI", function () {
              e.setState(function (e) {
                return {
                  showConfigUI: !e.showConfigUI,
                };
              });
            }),
            e
          );
        }
        return (
          c()(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.isModuleSynced,
                  n = e.currentTab,
                  o = e.sandbox,
                  i = e.currentModule,
                  s = e.settings;
                if (n && "DIFF" === n.type)
                  return T.a.createElement(
                    "div",
                    {
                      style: {
                        height: e.height || "100%",
                        width: e.width || "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      },
                    },
                    T.a.createElement(
                      ze,
                      r()(
                        {
                          originalCode: n.codeA,
                          modifiedCode: n.codeB,
                          title: n.fileTitle,
                        },
                        e
                      )
                    )
                  );
                var a = (function (e) {
                    var t = e.modules.find(function (e) {
                      return (
                        "package.json" === e.title && null == e.directoryShortid
                      );
                    });
                    if (null == t)
                      return "function" === typeof e.npmDependencies.toJS
                        ? e.npmDependencies.toJS()
                        : e.npmDependencies;
                    try {
                      var n = JSON.parse(t.code || ""),
                        o = n.dependencies,
                        r = void 0 === o ? {} : o,
                        i = n.devDependencies,
                        s = void 0 === i ? {} : i,
                        a = {};
                      return (
                        Object.keys(s).forEach(function (e) {
                          e.startsWith("@types") && (a[e] = s[e]);
                        }),
                        Te(Te({}, r), a)
                      );
                    } catch (c) {
                      return console.error(c), null;
                    }
                  })(o),
                  c = S()(o.template),
                  d = Object(O.getModulePath)(o.modules, o.directories, i.id),
                  l = c.configurationFiles[d];
                if (l && M()(l.type) && this.state.showConfigUI)
                  return T.a.createElement(
                    ie.ThemeProvider,
                    {
                      theme: this.props.theme.vscodeTheme,
                    },
                    T.a.createElement(
                      Y,
                      r()({}, e, {
                        dependencies: a,
                        config: l,
                        toggleConfigUI: this.toggleConfigUI,
                      })
                    )
                  );
                if (i.isBinary)
                  return I()(i.title)
                    ? T.a.createElement(
                        we,
                        r()({}, e, {
                          dependencies: a,
                        })
                      )
                    : T.a.createElement(
                        j.a,
                        {
                          style: {
                            overflow: "auto",
                            height: e.height || "100%",
                            width: e.width || "100%",
                          },
                          top: 2,
                        },
                        T.a.createElement(
                          w.a,
                          {
                            horizontal: !0,
                            vertical: !0,
                          },
                          T.a.createElement(
                            te.a,
                            null,
                            "This file is too big to edit"
                          ),
                          T.a.createElement(
                            ee.a,
                            null,
                            "We will add support for this as soon as possible."
                          ),
                          T.a.createElement(
                            "a",
                            {
                              href: i.code,
                              target: "_blank",
                              rel: "noreferrer noopener",
                            },
                            "Open file externally"
                          )
                        )
                      );
                var u = s.codeMirror && !e.isLive ? Re : Ne;
                return T.a.createElement(
                  "div",
                  {
                    style: Te(
                      {
                        height: e.height || "100%",
                        width: e.width || "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      },
                      e.style
                    ),
                  },
                  !t(i.shortid) &&
                    "index.html" === i.title &&
                    T.a.createElement(
                      Q.b,
                      null,
                      "You may have to save this file and refresh the preview to see changes"
                    ),
                  l && M()(l.type)
                    ? T.a.createElement(
                        Q.b,
                        null,
                        T.a.createElement(
                          E.a,
                          {
                            content: "Switch to UI Configuration",
                          },
                          T.a.createElement(
                            Q.a,
                            {
                              onClick: this.toggleConfigUI,
                            },
                            T.a.createElement(re.a, null)
                          )
                        )
                      )
                    : null,
                  T.a.createElement(
                    u,
                    r()({}, e, {
                      dependencies: a,
                    })
                  )
                );
              },
            },
          ]),
          n
        );
      })(T.a.PureComponent),
      Le = Object(C.withTheme)(Be);
  },
  "./src/embed/components/Content/Monaco/MonacoReactComponent.js": function (
    e,
    t,
    n
  ) {
    "use strict";
    var o = n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),
      r = n.n(o),
      i = n("../../node_modules/@babel/runtime/helpers/createClass.js"),
      s = n.n(i),
      a = n(
        "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"
      ),
      c = n.n(a),
      d = n("../../node_modules/@babel/runtime/helpers/inherits.js"),
      l = n.n(d),
      u = n(
        "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"
      ),
      m = n.n(u),
      f = n("../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
      p = n.n(f),
      h = n("../../node_modules/@babel/runtime/helpers/defineProperty.js"),
      b = n.n(h),
      g = n("../../node_modules/react/index.js"),
      v = n.n(g),
      y = n(
        "../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"
      ),
      w = n.n(y);

    function x(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }

    function j(e) {
      var t = (function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          o = p()(e);
        if (t) {
          var r = p()(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);
        return m()(this, n);
      };
    }

    function C() {}
    var _ = (function (e) {
      l()(o, e);
      var t = j(o);

      function o(e) {
        var i;
        return (
          r()(this, o),
          (i = t.call(this, e)),
          b()(c()(i), "editorWillMount", function (e) {
            (0, i.props.editorWillMount)(e);
          }),
          b()(c()(i), "editorDidMount", function (e, t) {
            i.props.editorDidMount(e, t);
          }),
          b()(c()(i), "afterViewInit", function () {
            void 0 === (i.props.context || window).monaco
              ? n(
                  "./src/app/overmind/effects/vscode/vscode-script-loader.ts"
                ).default(!1, ["vs/editor/editor.main"])(function () {
                  i.initMonaco();
                })
              : i.initMonaco();
          }),
          b()(c()(i), "initMonaco", function () {
            var e = i.props,
              t = e.theme,
              n = e.options,
              o = e.diffEditor,
              r = void 0 !== o && o,
              s = i.props.context || window;
            if (i.containerElement && "undefined" !== typeof s.monaco) {
              i.editorWillMount(s.monaco),
                (window.monacoCodeSandbox = {
                  openModel: function (e) {
                    return i.props.openReference(e);
                  },
                });
              var a = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? x(Object(n), !0).forEach(function (t) {
                          b()(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : x(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({}, n),
                c = a.fontFamily.split(",").map(function (e) {
                  return e.trim();
                }),
                d = c[0];
              if ((d.startsWith('"') && (d = JSON.parse(d)), "MonoLisa" === d))
                new w.a(d).load().then(
                  function () {
                    i.editor &&
                      i.props.getEditorOptions &&
                      i.editor.updateOptions(i.props.getEditorOptions());
                  },
                  function () {}
                ),
                  (a.fontFamily = c.slice(1).join(", "));
              (i.editor = s.monaco.editor[r ? "createDiffEditor" : "create"](
                i.containerElement,
                a
              )),
                t && s.monaco.editor.setTheme(t),
                i.editorDidMount(i.editor, s.monaco);
            }
          }),
          b()(c()(i), "destroyMonaco", function () {
            "undefined" !== typeof i.editor && i.editor.dispose();
          }),
          b()(c()(i), "assignRef", function (e) {
            i.containerElement = e;
          }),
          (i.containerElement = void 0),
          i
        );
      }
      return (
        s()(o, [
          {
            key: "componentDidMount",
            value: function () {
              this.afterViewInit();
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.destroyMonaco();
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.width,
                n = e.height,
                o = {
                  width: t.toString().includes("%") ? t : "".concat(t, "px"),
                  height: n.toString().includes("%") ? n : "".concat(n, "px"),
                  overflow: "hidden",
                  position: "absolute",
                };
              return v.a.createElement("div", {
                ref: this.assignRef,
                style: o,
                className: "react-monaco-editor-container",
              });
            },
          },
        ]),
        o
      );
    })(v.a.PureComponent);
    (_.defaultProps = {
      width: "100%",
      height: "100%",
      theme: null,
      options: {},
      editorDidMount: C,
      editorWillMount: C,
      onChange: C,
      template: "",
      requireConfig: {},
    }),
      (t.a = _);
  },
  "./src/embed/components/Content/Monaco/define-theme.js": function (e, t, n) {
    "use strict";
    var o = n("../../node_modules/@babel/runtime/helpers/defineProperty.js"),
      r = n.n(o),
      i = n("./node_modules/color/index.js"),
      s = n.n(i),
      a = n("../common/lib/utils/notifications.js"),
      c = n("../notifications/lib/index.js");

    function d(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    var l = function (e) {
        if (!e) return e;
        if (/#......$/.test(e) || /#........$/.test(e)) return e;
        try {
          return new s.a(e).hexString();
        } catch (t) {
          return "#FF0000";
        }
      },
      u = function (e) {
        var t = e.tokenColors,
          n = void 0 === t ? [] : t,
          o = e.colors,
          i = void 0 === o ? {} : o,
          s = n
            .filter(function (e) {
              return (
                e.settings &&
                e.scope &&
                (function (e) {
                  var t = e.foreground,
                    n = e.background;
                  return "inherit" !== t && "inherit" !== n;
                })(e.settings)
              );
            })
            .reduce(function (e, t) {
              var n = {
                foreground: l(t.settings.foreground),
                background: l(t.settings.background),
                fontStyle: t.settings.fontStyle,
              };
              return (
                ("string" === typeof t.scope
                  ? t.scope.split(",").map(function (e) {
                      return e.trim();
                    })
                  : t.scope
                ).map(function (t) {
                  return e.push(
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? d(Object(n), !0).forEach(function (t) {
                              r()(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : d(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t)
                              );
                            });
                      }
                      return e;
                    })(
                      {
                        token: t,
                      },
                      n
                    )
                  );
                }),
                e
              );
            }, []),
          a = i;
        return (
          Object.keys(i).forEach(function (e) {
            return a[e] || delete a[e], e;
          }),
          {
            colors: a,
            rules: s,
            type: e.type,
          }
        );
      };
    t.a = function (e, t) {
      if (t && e.editor.defineTheme) {
        var n = u(t);
        try {
          e.editor.defineTheme("CodeSandbox", {
            base:
              ((o = n.type),
              "dark" === o ? "vs-dark" : "hc" === o ? "hc-black" : "vs"),
            inherit: !0,
            colors: n.colors,
            rules: n.rules,
          }),
            e.editor.setTheme("CodeSandbox");
        } catch (r) {
          console.error(r),
            a.notificationState.addNotification({
              message: "Problem initializing template in editor: ".concat(
                r.message
              ),
              status: c.NotificationStatus.ERROR,
            });
        }
      }
      var o;
    };
  },
  "./src/embed/components/Content/Monaco/elements.js": function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return l;
    }),
      n.d(t, "a", function () {
        return u;
      });
    var o = n(
        "../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"
      ),
      r = n.n(o),
      i = n(
        "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
      ),
      s = n("../common/lib/theme/index.js"),
      a = n.n(s);

    function c() {
      var e = r()([
        "\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 30;\n\n  .greensquiggly {\n    background: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20height%3D'3'%20width%3D'6'%3E%3Cg%20fill%3D'%23ffd399'%3E%3Cpolygon%20points%3D'5.5%2C0%202.5%2C3%201.1%2C3%204.1%2C0'%2F%3E%3Cpolygon%20points%3D'4%2C0%206%2C2%206%2C0.6%205.4%2C0'%2F%3E%3Cpolygon%20points%3D'0%2C2%201%2C3%202.4%2C3%200%2C0.6'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")\n      repeat-x bottom left !important;\n  }\n\n  .jest-success {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:after {\n      content: '';\n      width: 50%;\n      height: 50%;\n      background-color: ",
        ";\n      border-radius: 50%;\n    }\n  }\n\n  .jest-error {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:after {\n      content: '';\n      width: 50%;\n      height: 50%;\n      background-color: ",
        ";\n      border-radius: 50%;\n    }\n  }\n\n  /* For retina screens we will not do subpixel anti-aliasing. That looks uglier. */\n  @media (-webkit-min-device-pixel-ratio: 1.5) {\n    -webkit-font-smoothing: auto;\n  }\n",
      ]);
      return (
        (c = function () {
          return e;
        }),
        e
      );
    }

    function d() {
      var e = r()(["\n  width: 100%;\n  height: 100%;\n  z-index: 30;\n"]);
      return (
        (d = function () {
          return e;
        }),
        e
      );
    }
    var l = i.default.div.withConfig({
        displayName: "elements__Container",
        componentId: "sc-11co0kb-0",
      })(d()),
      u = i.default.div.withConfig({
        displayName: "elements__CodeContainer",
        componentId: "sc-11co0kb-1",
      })(c(), a.a.green(), a.a.red());
  },
  "./src/embed/components/Content/Monaco/mode.ts": function (e, t, n) {
    "use strict";
    var o = n("../../node_modules/@babel/runtime/regenerator/index.js"),
      r = n.n(o),
      i = n("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),
      s = n.n(i),
      a = function (e) {
        return new Promise(function (t) {
          return window.require(e, function () {
            return t();
          });
        });
      };
    t.a = (function () {
      var e = s()(
        r.a.mark(function e(t, n) {
          var o;
          return r.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (null != t) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", "javascript");
                case 2:
                  if (!(o = t.match(/\.([^.]*)$/))) {
                    e.next = 27;
                    break;
                  }
                  if ("css" !== o[1]) {
                    e.next = 6;
                    break;
                  }
                  return e.abrupt("return", "css");
                case 6:
                  if ("scss" !== o[1]) {
                    e.next = 8;
                    break;
                  }
                  return e.abrupt("return", "scss");
                case 8:
                  if ("json" !== o[1]) {
                    e.next = 10;
                    break;
                  }
                  return e.abrupt("return", "json");
                case 10:
                  if ("html" !== o[1]) {
                    e.next = 12;
                    break;
                  }
                  return e.abrupt("return", "html");
                case 12:
                  if ("svelte" !== o[1]) {
                    e.next = 14;
                    break;
                  }
                  return e.abrupt("return", "html");
                case 14:
                  if ("vue" !== o[1]) {
                    e.next = 19;
                    break;
                  }
                  if (
                    !n.languages.getLanguages ||
                    n.languages.getLanguages().find(function (e) {
                      return "vue" === e.id;
                    })
                  ) {
                    e.next = 18;
                    break;
                  }
                  return (
                    (e.next = 18), a(["vs/language/vue/monaco.contribution"])
                  );
                case 18:
                  return e.abrupt("return", "vue");
                case 19:
                  if ("less" !== o[1]) {
                    e.next = 21;
                    break;
                  }
                  return e.abrupt("return", "less");
                case 21:
                  if ("md" !== o[1]) {
                    e.next = 23;
                    break;
                  }
                  return e.abrupt("return", "markdown");
                case 23:
                  if (!/jsx?$/.test(o[1])) {
                    e.next = 25;
                    break;
                  }
                  return e.abrupt("return", "javascript");
                case 25:
                  if (!/tsx?$/.test(o[1])) {
                    e.next = 27;
                    break;
                  }
                  return e.abrupt("return", "typescript");
                case 27:
                  return e.abrupt("return", void 0);
                case 28:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (t, n) {
        return e.apply(this, arguments);
      };
    })();
  },
  "./src/embed/components/Content/Monaco/settings.js": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var o = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t
        .filter(Boolean)
        .map(function (e) {
          return -1 !== e.indexOf(" ") ? JSON.stringify(e) : e;
        })
        .join(", ");
    };

    function r(e) {
      return {
        selectOnLineNumbers: !0,
        fontSize: e.fontSize,
        fontFamily: o("MonoLisa", "Menlo", "Source Code Pro", "monospace"),
        fontLigatures: e.enableLigatures,
        minimap: {
          enabled: !1,
        },
        formatOnPaste: !0,
        lineHeight: (e.lineHeight || 1.5) * e.fontSize,
        folding: !0,
        glyphMargin: !1,
        fixedOverflowWidgets: !0,
      };
    }
  },
  "./src/embed/components/Content/elements.ts": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return d;
    }),
      n.d(t, "c", function () {
        return l;
      }),
      n.d(t, "b", function () {
        return u;
      });
    var o = n("../../node_modules/@babel/runtime/helpers/defineProperty.js"),
      r = n.n(o),
      i = n(
        "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
      ),
      s = n("../@styled-system/css/dist/index.js"),
      a = n.n(s),
      c = n("../common/lib/components/Preview/Navigator/elements.js"),
      d = i.default.div.withConfig({
        displayName: "elements__Container",
        componentId: "sc-17vifkg-0",
      })(
        a()(
          r()(
            {
              display: "flex",
              position: "relative",
              backgroundColor: "editor.background",
              height: "100%",
            },
            c.Container,
            {
              height: 31,
              minHeight: 31,
            }
          )
        )
      ),
      l = i.default.div.withConfig({
        displayName: "elements__Tabs",
        componentId: "sc-17vifkg-1",
      })(
        a()({
          display: "flex",
          height: 36,
          minHeight: 34,
          backgroundColor: "tab.inactiveBackground",
          boxShadow: function (e) {
            return "inset 0px -1px 0 " + e["sideBar.border"];
          },
          overflowX: "auto",
          fontSize: 3,
          "-ms-overflow-style": "none",
          overflow: "-moz-scrollbars-none",
          "&::-webkit-scrollbar": {
            height: "2px",
          },
          "> div:hover > div": {
            color: "tab.hoverForeground",
          },
        })
      ),
      u = i.default.button.withConfig({
        displayName: "elements__MenuInTabs",
        componentId: "sc-17vifkg-2",
      })(
        a()({
          display: "inline-flex",
          alignItems: "center",
          height: "100%",
          margin: 0,
          padding: 0,
          paddingLeft: 2,
          cursor: "pointer",
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
        })
      );
  },
  "./src/embed/components/Content/index.tsx": function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return F;
      });
      var o = n(
          "../../node_modules/@babel/runtime/helpers/toConsumableArray.js"
        ),
        r = n.n(o),
        i = n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),
        s = n.n(i),
        a = n("../../node_modules/@babel/runtime/helpers/createClass.js"),
        c = n.n(a),
        d = n(
          "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"
        ),
        l = n.n(d),
        u = n("../../node_modules/@babel/runtime/helpers/inherits.js"),
        m = n.n(u),
        f = n(
          "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"
        ),
        p = n.n(f),
        h = n("../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
        b = n.n(h),
        g = n("../../node_modules/@babel/runtime/helpers/defineProperty.js"),
        v = n.n(g),
        y = n("../common/lib/components/Preview/index.js"),
        w = n.n(y),
        x = n("../common/lib/components/RunOnClick/index.js"),
        j = n.n(x),
        C = n("../common/lib/sandbox/modules.js"),
        _ = n("../common/lib/templates/index.js"),
        E = n.n(_),
        O = n(
          "../common/lib/templates/configuration/parse-sandbox-configurations.js"
        ),
        k = n("../common/lib/templates/devtools/index.js"),
        S = n("./src/app/components/Preview/DevTools/index.tsx"),
        P = n(
          "./src/app/pages/Sandbox/Editor/Content/Tabs/ModuleTab/elements.js"
        ),
        M = n("./src/app/pages/Sandbox/Editor/Content/Tabs/Tab/index.js"),
        z = n("./src/app/pages/Sandbox/Editor/Content/Tabs/Tab/elements.ts"),
        I = n("./src/app/utils/corrections.ts"),
        D = n("../../node_modules/react/index.js"),
        T = n("./src/embed/components/legacy/Header/elements.js"),
        R = n("./src/embed/components/SplitPane/index.js"),
        N = n("./src/embed/components/Content/CodeEditor.tsx"),
        B = n("./src/embed/components/Content/elements.ts");

      function L(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }

      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }

      function H(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = b()(e);
          if (t) {
            var r = b()(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return p()(this, n);
        };
      }
      var F = (function (t) {
        m()(o, t);
        var n = H(o);

        function o(t) {
          var i;
          s()(this, o),
            (i = n.call(this, t)),
            v()(l()(i), "state", void 0),
            v()(l()(i), "setPane", function (e) {
              i.setState({
                currentDevToolPosition: e,
              });
            }),
            v()(l()(i), "getInitTabs", function (e) {
              var t = e.sandbox.modules.find(function (t) {
                return t.id === e.currentModule.id;
              });
              return e.tabs
                ? e.tabs
                    .map(function (t) {
                      try {
                        return Object(C.resolveModule)(
                          t,
                          e.sandbox.modules,
                          e.sandbox.directories
                        );
                      } catch (n) {
                        return;
                      }
                    })
                    .filter(Boolean)
                : e.sandbox.modules.length <= 5 || !t
                ? [t].concat(
                    r()(
                      e.sandbox.modules.filter(function (e) {
                        return e.id !== t.id;
                      })
                    )
                  )
                : [t];
            }),
            v()(l()(i), "renderTabStatus", function (e, t) {
              var n = i.props.isNotSynced;
              return e && n && 1 === i.state.tabs.length
                ? D.createElement(P.a, {
                    show: "true",
                  })
                : e && n && i.state.tabs.length > 1
                ? D.createElement(z.b, {
                    onClick: t,
                    show: "true",
                  })
                : e && 1 === i.state.tabs.length
                ? D.createElement(z.b, {
                    onClick: t,
                    show: void 0,
                  })
                : e && i.state.tabs.length > 1
                ? D.createElement(z.b, {
                    onClick: t,
                    show: "true",
                  })
                : !e && n
                ? D.createElement(P.a, {
                    show: "true",
                  })
                : D.createElement(P.a, {
                    show: void 0,
                  });
            }),
            v()(l()(i), "errors", void 0),
            v()(l()(i), "corrections", void 0),
            v()(l()(i), "editor", void 0),
            v()(l()(i), "preview", void 0),
            v()(l()(i), "setProjectView", function (e, t) {
              i.setState({
                isInProjectView: t,
              });
            }),
            v()(l()(i), "handleResize", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 500,
                t = 16 + (i.props.hideNavigation ? 48 : 96);
              if (i.props.autoResize)
                window.parent.postMessage(
                  JSON.stringify({
                    src: window.location.toString(),
                    context: "iframe.resize",
                    height: Math.max(e + t, 50),
                  }),
                  "*"
                );
              else if (i.props.showEditor && !i.props.showPreview) {
                var n = document.getElementsByClassName("CodeMirror-sizer")[0],
                  o = n ? n.getBoundingClientRect().height : 500;
                window.parent.postMessage(
                  JSON.stringify({
                    src: window.location.toString(),
                    context: "iframe.resize",
                    height: Math.max(o + t, 50),
                  }),
                  "*"
                );
              } else
                window.parent.postMessage(
                  JSON.stringify({
                    src: window.location.toString(),
                    context: "iframe.resize",
                    height: 500,
                  }),
                  "*"
                );
            }),
            v()(l()(i), "setCode", function (e) {
              i.props.currentModule.code = e;
              var t = i.getPreferences();
              i.preview &&
                t.livePreviewEnabled &&
                (t.instantPreviewEnabled
                  ? i.preview.executeCodeImmediately()
                  : i.preview.executeCode());
            }),
            v()(l()(i), "handleAction", function (e) {
              switch (e.action) {
                case "show-error":
                  return i.addError(e);
                case "show-correction":
                  return i.addCorrection(e);
                case "clear-corrections":
                  return i.clearCorrections(e);
                case "editor.open-module":
                  return i.setCurrentModuleFromPath(e.path);
                default:
                  return null;
              }
            }),
            v()(l()(i), "setCurrentModuleFromPath", function (e) {
              try {
                var t = Object(C.resolveModule)(
                  e,
                  i.props.sandbox.modules,
                  i.props.sandbox.directories
                );
                i.setCurrentModule(t.id);
              } catch (n) {}
            }),
            v()(l()(i), "addError", function (t) {
              e &&
                (i.errors.push(t),
                i.editor && i.editor.setErrors && i.editor.setErrors(i.errors));
            }),
            v()(l()(i), "addCorrection", function (e) {
              i.corrections.push(e),
                i.editor &&
                  i.editor.setCorrections &&
                  i.editor.setCorrections(i.corrections);
            }),
            v()(l()(i), "clearCorrections", function (e) {
              (i.corrections = Object(I.a)(i.corrections, e)),
                i.editor &&
                  i.editor.setCorrections &&
                  i.editor.setCorrections(i.corrections);
            }),
            v()(l()(i), "clearErrors", function () {
              (i.errors = []),
                i.editor && i.editor.setErrors && i.editor.setErrors(i.errors);
            }),
            v()(l()(i), "preferences", {
              livePreviewEnabled: !0,
            }),
            v()(l()(i), "getPreferences", function () {
              return V(
                V({}, i.preferences),
                {},
                {
                  forceRefresh: i.props.forceRefresh,
                  instantPreviewEnabled: !i.props.forceRefresh,
                  fontSize: i.props.fontSize,
                  autoDownloadTypes: !0,
                  lintEnabled: i.props.enableEslint,
                  codeMirror: i.props.useCodeMirror,
                  lineHeight: 1.6,
                  autoCompleteEnabled: !0,
                  vimMode: !1,
                  tabWidth: 2,
                  enableLigatures: !1,
                  clearConsoleEnabled: !1,
                  prettierConfig: null,
                  zenMode: !1,
                }
              );
            }),
            v()(l()(i), "setCurrentModule", function (e) {
              i.props.setCurrentModule(e);
            }),
            v()(l()(i), "closeTab", function (e, t) {
              if (t) {
                var n =
                  i.state.tabs[e - 1] || i.state.tabs[e + 1] || i.state.tabs[0];
                i.props.setCurrentModule(n.id);
              }
              i.setState(function (t) {
                return {
                  tabs: t.tabs.filter(function (t, n) {
                    return n !== e;
                  }),
                };
              });
            }),
            v()(l()(i), "onCodeEditorInitialized", function (e) {
              return (i.editor = e), function () {};
            }),
            v()(l()(i), "onToggleProjectView", function () {
              i.props.setProjectView(
                null,
                !i.props.isInProjectView,
                function () {
                  i.preview &&
                    i.preview.handleRefresh &&
                    i.preview.handleRefresh();
                }
              );
            }),
            v()(l()(i), "refresh", function () {
              i.preview && i.preview.handleRefresh && i.preview.handleRefresh();
            }),
            v()(l()(i), "setEditorSize", function (e) {
              i.setState({
                editorSize: e,
              });
            }),
            v()(l()(i), "openInNewWindow", function () {
              window.openNewWindow && window.openNewWindow();
            }),
            v()(l()(i), "onPreviewInitialized", function (e) {
              return (i.preview = e), function () {};
            }),
            v()(l()(i), "setDragging", function (e) {
              i.setState({
                dragging: e,
              });
            });
          var a = i.getInitTabs(t);
          return (
            (i.state = {
              running: !t.runOnClick,
              tabs: a,
              dragging: !1,
              isInProjectView: t.isInProjectView,
              currentDevToolPosition: {
                devToolIndex: 0,
                tabPosition: 0,
              },
              editorSize: i.props.editorSize,
            }),
            (i.errors = []),
            (i.corrections = []),
            i
          );
        }
        return (
          c()(o, [
            {
              key: "UNSAFE_componentWillReceiveProps",
              value: function (e) {
                if (this.props.currentModule !== e.currentModule) {
                  if (
                    !this.state.tabs.some(function (t) {
                      return t.id === e.currentModule.id;
                    })
                  ) {
                    var t = e.sandbox.modules.find(function (t) {
                      return t.id === e.currentModule.id;
                    });
                    t &&
                      this.setState(function (e) {
                        return {
                          tabs: [].concat(r()(e.tabs), [t]),
                        };
                      });
                  }
                  this.editor &&
                    this.editor.changeModule &&
                    this.editor.changeModule(e.currentModule);
                }
                this.props.sandbox.id !== e.sandbox.id &&
                  this.setState({
                    tabs: this.getInitTabs(e),
                  });
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                setTimeout(this.handleResize);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.sandbox,
                  o = t.showEditor,
                  r = t.showPreview,
                  i = t.previewWindow,
                  s = t.currentModule,
                  a = t.hideNavigation,
                  c = t.expandDevTools,
                  d = t.hideDevTools,
                  l = t.verticalMode,
                  u = t.sidebarOpen,
                  m = t.toggleSidebar,
                  f = t.toggleLike,
                  p = t.editorSize,
                  h = t.initialPath,
                  b = this.state.isInProjectView,
                  g = b ? Object(C.findMainModule)(n) : s;
                if (!g) throw new Error("Cannot find main module");
                var v = E()(n.template),
                  y = Object(O.parseSandboxConfigurations)(n),
                  x = Object(k.getPreviewTabs)(n, y),
                  _ = n.modules.find(function (e) {
                    return (
                      null == e.directoryShortid &&
                      "sandbox.config.json" === e.title
                    );
                  }),
                  P = "browser";
                if (i) P = i;
                else if (_)
                  try {
                    P = JSON.parse(_.code || "").view || "browser";
                  } catch (V) {}
                d && (x = [x[0]]),
                  "browser" !== P &&
                    ("console" === P
                      ? x[0].views.unshift({
                          id: "codesandbox.console",
                        })
                      : "tests" === P &&
                        x[0].views.unshift({
                          id: "codesandbox.tests",
                        })),
                  "undefined" !== typeof c && x[1] && (x[1].open = c);
                var I = this.getPreferences(),
                  L = {
                    id: "codesandbox.browser",
                    title: function (e) {
                      return e.port
                        ? "Browser (:".concat(e.port, ")")
                        : "Browser";
                    },
                    Content: function (t) {
                      var o = t.hidden,
                        r = t.options;
                      return D.createElement(w.a, {
                        onInitialized: e.onPreviewInitialized,
                        customNpmRegistries: n.npmRegistries,
                        previewSecret: n.previewSecret,
                        sandbox: n,
                        hide: o,
                        url: r.url ? r.url : void 0,
                        currentModule: g,
                        settings: I,
                        initialPath: h,
                        isInProjectView: b,
                        onClearErrors: e.clearErrors,
                        onAction: e.handleAction,
                        showNavigation: !a,
                        onToggleProjectView: e.onToggleProjectView,
                        onResize: e.handleResize,
                        dragging: e.state.dragging,
                        showScreenshotOverlay: !0,
                      });
                    },
                    actions: [],
                  };
                return D.createElement(
                  B.a,
                  {
                    style: {
                      flexDirection: l ? "column" : "row",
                    },
                  },
                  D.createElement(
                    R.a,
                    {
                      sandbox: n,
                      showEditor: o,
                      showPreview: r,
                      isSmallScreen: l,
                      sidebarOpen: u,
                      showNavigationActions: a,
                      refresh: this.refresh,
                      openInNewWindow: this.openInNewWindow,
                      toggleLike: f,
                      initialEditorSize: p,
                      initialPath: h,
                      setEditorSize: this.setEditorSize,
                      hideDevTools: d,
                      setDragging: this.setDragging,
                    },
                    D.createElement(
                      D.Fragment,
                      null,
                      D.createElement(
                        B.c,
                        null,
                        D.createElement(
                          B.b,
                          {
                            onClick: m,
                          },
                          D.createElement(T.a, null)
                        ),
                        this.state.tabs.map(function (t, o) {
                          var r = e.state.tabs.filter(function (e) {
                              return e.title === t.title;
                            }),
                            i = null;
                          if (r.length > 1 && t.directoryShortid) {
                            var a = n.directories.find(function (e) {
                              return e.shortid === t.directoryShortid;
                            });
                            a && (i = a.title);
                          }
                          var c = t.id === s.id;
                          return D.createElement(
                            M.a,
                            {
                              key: t.id,
                              active: c,
                              module: t,
                              onClick: function () {
                                return e.setCurrentModule(t.id);
                              },
                              tabCount: e.state.tabs.length,
                              position: o,
                              closeTab: e.closeTab,
                              dirName: i,
                            },
                            function (n) {
                              var o = n.hovering,
                                r = n.closeTab;
                              return D.createElement(
                                D.Fragment,
                                null,
                                D.createElement(z.d, null, t.title),
                                i && D.createElement(z.c, null, "../", i),
                                e.renderTabStatus(o, r)
                              );
                            }
                          );
                        })
                      ),
                      D.createElement(
                        "div",
                        {
                          style: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                          },
                        },
                        D.createElement(N.a, {
                          onInitialized: this.onCodeEditorInitialized,
                          currentModule: s || g,
                          isModuleSynced: function () {
                            return !0;
                          },
                          sandbox: n,
                          settings: this.getPreferences(),
                          readOnly: v.isServer,
                          onChange: this.setCode,
                          onModuleChange: this.setCurrentModule,
                          highlightedLines: this.props.highlightedLines,
                          width: this.state.editorSize,
                        })
                      )
                    ),
                    this.state.running
                      ? D.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              height: "100%",
                            },
                          },
                          x.map(function (t, o) {
                            return D.createElement(S.a, {
                              key: o,
                              devToolIndex: o,
                              addedViews: {
                                "codesandbox.browser": L,
                              },
                              setDragging: e.setDragging,
                              sandboxId: n.id,
                              template: n.template,
                              owned: !1,
                              primary: 0 === o,
                              hideTabs: 0 === o,
                              viewConfig: t,
                              setPane: e.setPane,
                              currentDevToolIndex:
                                e.state.currentDevToolPosition.devToolIndex,
                              currentTabPosition:
                                e.state.currentDevToolPosition.tabPosition,
                            });
                          })
                        )
                      : D.createElement(j.a, {
                          onClick: function () {
                            return e.setState({
                              running: !0,
                            });
                          },
                        })
                  )
                );
              },
            },
          ]),
          o
        );
      })(D.PureComponent);
    }.call(this, n("../../node_modules/webpack/buildin/harmony-module.js")(e)));
  },
  "./src/embed/components/SplitPane/index.js": function (e, t, n) {
    "use strict";
    var o = n("../../node_modules/@babel/runtime/helpers/extends.js"),
      r = n.n(o),
      i = n("../../node_modules/@babel/runtime/helpers/slicedToArray.js"),
      s = n.n(i),
      a = n(
        "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js"
      ),
      c = n.n(a),
      d = n("../../node_modules/react/index.js"),
      l = n.n(d),
      u = n("../../node_modules/react-split-pane/dist/index.esm.js"),
      m = !matchMedia("(pointer:fine)").matches;
    var f = n("../common/lib/components/Tooltip/index.js"),
      p = n.n(f),
      h = n("../common/lib/utils/url-generator.js"),
      b = n("../../node_modules/@codesandbox/ab/lib/index.js"),
      g = n(
        "../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"
      ),
      v = n.n(g),
      y = n("../../node_modules/@babel/runtime/helpers/defineProperty.js"),
      w = n.n(y),
      x = n(
        "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
      ),
      j = n("../@styled-system/css/dist/index.js"),
      C = n.n(j),
      _ = n("../common/lib/components/icons/CodeSandbox.js"),
      E = n("../common/lib/components/icons/Preview.js");

    function O() {
      var e = v()(["\n  padding: 0 3px;\n"]);
      return (
        (O = function () {
          return e;
        }),
        e
      );
    }
    var k = x.default.div.withConfig({
        displayName: "elements__Container",
        componentId: "sc-11wxdzz-0",
      })(function (e) {
        var t, n;
        return (
          (n = e.isDragging ? -32 : e.offsetBottom ? 44 : 16),
          C()(
            ((t = {
              position: "absolute",
            }),
            w()(t, e.align, 16),
            w()(t, "zIndex", 99),
            w()(t, "display", "flex"),
            w()(t, "* + *", {
              marginLeft: 1,
            }),
            w()(t, "bottom", n),
            w()(t, "opacity", e.isDragging ? 0 : 1),
            w()(t, "transitionProperty", "opacity, bottom"),
            w()(t, "transitionDuration", function (t) {
              return e.isDragging ? t.speed[3] : t.speed[5];
            }),
            t)
          )
        );
      }),
      S = x.default.button.withConfig({
        displayName: "elements__Button",
        componentId: "sc-11wxdzz-1",
      })(
        C()({
          display: "inline-flex",
          alignItems: "center",
          height: 32,
          paddingX: 3,
          paddingY: 0,
          fontSize: 3,
          fontWeight: "medium",
          border: "1px solid",
          borderColor: "grays.600",
          color: "white",
          backgroundColor: "grays.700",
          borderRadius: 4,
          textDecoration: "none",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "grays.600",
          },
        })
      ),
      P = Object(x.default)(function (e) {
        return l.a.createElement(
          "svg",
          r()(
            {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          l.a.createElement("path", {
            d: "M6.91607 12C17.423 6.10866 12.2269 -1.90872 6.91608 2.06249C1.8346 -1.90872 -3.36155 6.10865 6.91607 12Z",
            stroke: "none",
          })
        );
      }).withConfig({
        displayName: "elements__HeartIcon",
        componentId: "sc-11wxdzz-2",
      })(function (e) {
        return C()({
          path: {
            stroke: e.liked ? "reds.300" : "white",
            fill: e.liked ? "reds.300" : "none",
          },
        });
      }),
      M = Object(x.default)(S).withConfig({
        displayName: "elements__IconButton",
        componentId: "sc-11wxdzz-3",
      })(O()),
      z = Object(x.default)(_.CodeSandboxIcon).withConfig({
        displayName: "elements__CodeSandboxIcon",
        componentId: "sc-11wxdzz-4",
      })(function () {
        return C()({
          fontSize: 28,
        });
      }),
      I = Object(x.default)(E.PreviewIcon).withConfig({
        displayName: "elements__PreviewIcon",
        componentId: "sc-11wxdzz-5",
      })(function () {
        return C()({
          fontSize: 28,
        });
      }),
      D = function (e) {
        return l.a.createElement(
          "svg",
          r()(
            {
              width: "11",
              height: "11",
              viewBox: "0 0 11 11",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          l.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.99523 0.450012H11L11 4.97145V5.97621H5.97619V4.97145H9.94213C9.49598 3.16488 7.87424 1.8261 5.94194 1.8261C3.66552 1.8261 1.82013 3.68416 1.82013 5.9762C1.82013 8.26824 3.66552 10.1263 5.94194 10.1263C7.25318 10.1263 8.42143 9.50981 9.17634 8.54899L9.77639 9.19091C8.86113 10.2964 7.48313 11 5.94194 11C3.18628 11 0.952377 8.75077 0.952377 5.9762C0.952377 3.20163 3.18628 0.952389 5.94194 0.952389C7.61147 0.952389 9.08949 1.778 9.99523 3.04586V0.450012Z",
            fill: "currentcolor",
          })
        );
      },
      T = function (e) {
        return l.a.createElement(
          "svg",
          r()(
            {
              width: "15",
              height: "12",
              viewBox: "0 0 15 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          l.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.4545 0H10.5C10.1988 0 10 0.198754 10 0.5C10 0.801246 10.1988 1 10.5 1H13L9.5 4.5L10.5 5.5L14 2V4.5C14 4.80125 14.1988 5 14.5 5C14.8012 5 15 4.80125 15 4.5V0.545455C15 0.244208 14.7558 0 14.4545 0ZM1.73333 1H8.00001V1.86667H1.73333C1.25469 1.86667 0.866667 2.25469 0.866667 2.73333V9.32003C0.866667 9.79868 1.25469 10.1867 1.73333 10.1867H12.1333C12.612 10.1867 13 9.79868 13 9.32004V7.00003H13.8667V9.32004C13.8667 10.2773 13.0906 11.0534 12.1333 11.0534H1.73333C0.776041 11.0534 0 10.2773 0 9.32003V2.73333C0 1.77604 0.77604 1 1.73333 1Z",
            fill: "currentcolor",
          })
        );
      };

    function R(e) {
      var t = e.sandbox,
        n = e.toggleLike,
        o = e.offsetBottom,
        r = e.isDragging,
        i = e.openEditor,
        a = e.openPreview,
        c = e.smallTouchScreen,
        u = e.previewVisible,
        m = e.initialPath,
        f = Object(b.useExperimentResult)("embed-open-wording-iteration2"),
        g = Object(d.useState)(!1),
        v = s()(g, 2),
        y = v[0],
        w = v[1];
      Object(d.useEffect)(
        function () {
          f.then(function (e) {
            e === b.ExperimentValues.A
              ? w(!1)
              : e === b.ExperimentValues.B && w(!0);
          });
        },
        [f]
      );
      var x = u
          ? l.a.createElement(
              S,
              {
                onClick: i,
              },
              "View Source"
            )
          : l.a.createElement(
              M,
              {
                onClick: a,
              },
              l.a.createElement(I, null)
            ),
        j = window.parent !== window;
      return l.a.createElement(
        k,
        {
          align: "right",
          offsetBottom: o,
          isDragging: r,
        },
        n
          ? l.a.createElement(
              p.a,
              {
                content: t.userLiked ? "Dislike sandbox" : "Like sandbox",
              },
              l.a.createElement(
                S,
                {
                  onClick: n,
                  "aria-label": t.userLiked
                    ? "Dislike sandbox"
                    : "Like sandbox",
                },
                l.a.createElement(P, {
                  liked: t.userLiked,
                })
              )
            )
          : c &&
              j &&
              l.a.createElement(
                M,
                {
                  as: "a",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: Object(h.sandboxUrl)(t),
                },
                l.a.createElement(z, null)
              ),
        c
          ? x
          : l.a.createElement(
              S,
              {
                as: "a",
                target: "_blank",
                rel: "noopener noreferrer",
                href: m
                  ? ""
                      .concat(
                        Object(h.sandboxUrl)(t),
                        "?from-embed&initialpath="
                      )
                      .concat(encodeURIComponent(m))
                  : "".concat(Object(h.sandboxUrl)(t), "?from-embed"),
              },
              y ? "Open and Fork" : "Open Sandbox"
            )
      );
    }

    function N(e) {
      var t = e.refresh,
        n = e.openInNewWindow,
        o = e.offsetBottom,
        r = e.isDragging;
      return l.a.createElement(
        k,
        {
          align: "left",
          offsetBottom: o,
          isDragging: r,
        },
        l.a.createElement(
          p.a,
          {
            content: "Refresh preview",
          },
          l.a.createElement(
            S,
            {
              onClick: t,
              "aria-label": "Refresh preview",
            },
            l.a.createElement(D, null)
          )
        ),
        l.a.createElement(
          p.a,
          {
            content: "Open preview in new window",
          },
          l.a.createElement(
            S,
            {
              onClick: n,
              "aria-label": "Open preview in new window",
            },
            l.a.createElement(T, null)
          )
        )
      );
    }

    function B() {
      var e = v()([
        "\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n",
      ]);
      return (
        (B = function () {
          return e;
        }),
        e
      );
    }

    function L() {
      var e = v()([
        "\n  width: 100%;\n  height: 100%;\n\n  .Resizer {\n    /* Safari, sigh.\n      Quote: We recently encountered this and discovered that promoting the\n      affected element to a composite layer with translateZ in CSS fixed\n      the issue without needing extra JavaScript.\n      \u2014 https://stackoverflow.com/a/21947628/1501871\n    */\n    transform: translateZ(0);\n\n    background-color: ",
        ";\n    width: ",
        "px;\n    display: block;\n    height: 100%;\n    cursor: ew-resize;\n    z-index: 50;\n  }\n\n  .Resizer::after {\n    content: '';\n    display: flex;\n    background: ",
        ";\n    border-radius: 50px;\n    position: absolute;\n\n    width: ",
        "px;\n    height: 41px;\n    top: calc(50% - 20px);\n    margin-left: ",
        "px;\n    opacity: 1;\n  }\n\n  .Resizer::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin-left: -",
        "px;\n    width: ",
        "px;\n    z-index: 50;\n  }\n\n  .Pane {\n    transition: ",
        ";\n    overflow: hidden;\n  }\n\n  /*\n    When previewwindow=tests, SplitPane takes the above styles and the\n    resizer between Test and Test Summary appears vertical. Below styles\n    override the resizer to appear horizontally.\n\n    Note: Better fix will be injecting a custom className to resizer and\n    adding the styles based on className. ( SplitPane doesnt accept className prop )\n  */\n  .Pane .Resizer {\n    width: 100%;\n    height: ",
        "px;\n    cursor: ns-resize;\n  }\n\n  .Pane .Resizer::after {\n    width: 41px;\n    height: ",
        "px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n",
      ]);
      return (
        (L = function () {
          return e;
        }),
        e
      );
    }
    var V = x.default.div.withConfig({
        displayName: "elements__Container",
        componentId: "sc-8b6s89-0",
      })(
        L(),
        function (e) {
          return e.theme.colors.separator.background;
        },
        16,
        function (e) {
          return e.theme.colors.separator.foreground;
        },
        4,
        Math.floor(6),
        4,
        24,
        function (e) {
          return e.isDragging ? null : "width 200ms ease";
        },
        16,
        4
      ),
      H = x.default.div.withConfig({
        displayName: "elements__PaneContainer",
        componentId: "sc-8b6s89-1",
      })(B());

    function F(e) {
      var t = e.showEditor,
        n = e.showPreview,
        o = e.isSmallScreen,
        i = e.sidebarOpen,
        a = e.children,
        d = e.showNavigationActions,
        f = e.refresh,
        p = e.openInNewWindow,
        h = e.sandbox,
        b = e.toggleLike,
        g = e.initialEditorSize,
        v = void 0 === g ? 50 : g,
        y = e.initialPath,
        w = e.hideDevTools,
        x = e.setEditorSize,
        j = e.setDragging,
        C = c()(e, [
          "showEditor",
          "showPreview",
          "isSmallScreen",
          "sidebarOpen",
          "children",
          "showNavigationActions",
          "refresh",
          "openInNewWindow",
          "sandbox",
          "toggleLike",
          "initialEditorSize",
          "initialPath",
          "hideDevTools",
          "setEditorSize",
          "setDragging",
        ]),
        _ = document.body.clientWidth,
        E = (i ? _ - 250 : _) - 16,
        O = null;
      t && n ? (O = (v / 100) * E) : t && !n ? (O = E) : n && !t && (O = 0);
      var k = l.a.useState(O),
        S = s()(k, 2),
        P = S[0],
        M = S[1];
      l.a.useEffect(
        function () {
          x(P);
        },
        [P, x]
      );
      var z = l.a.useState(!1),
        I = s()(z, 2),
        D = I[0],
        T = I[1],
        B = function () {
          T(!0), j(!0);
        },
        L = E - P < 270,
        F = "undefined" !== typeof screen && screen.width < 800 && m;
      return l.a.createElement(
        V,
        {
          isDragging: D,
          size: P,
          maxSize: E,
          fullSize: P === E,
        },
        l.a.createElement(R, {
          sandbox: h,
          toggleLike: b,
          previewVisible: P < E,
          isDragging: D,
          offsetBottom: !w && P < E,
          openEditor: function () {
            M(E);
          },
          openPreview: function () {
            M(0);
          },
          smallTouchScreen: F,
          initialPath: y,
        }),
        l.a.createElement(
          u.a,
          r()(
            {
              split: "vertical",
              onDragStarted: B,
              onDragFinished: function (e) {
                T(!1),
                  j(!1),
                  (function (e) {
                    var t = o ? E / 2 : 50,
                      n = o ? E / 2 : E - 175;
                    e === P
                      ? o
                        ? M(0 === P ? E : 0)
                        : (0 !== P && P !== E) || M(E / 2)
                      : M(e < t ? 0 : e > n ? E : Math.min(e, E));
                  })(e || P),
                  x(P);
              },
              minSize: "0%",
              maxSize: E,
              onMouseEnter: B,
              size: P,
            },
            C
          ),
          l.a.createElement(H, null, a[0]),
          l.a.createElement(
            H,
            null,
            d && !L
              ? l.a.createElement(N, {
                  refresh: f,
                  openInNewWindow: p,
                  isDragging: D,
                  offsetBottom: !w && P < E,
                })
              : null,
            a[1]
          )
        )
      );
    }
    n.d(t, "a", function () {
      return F;
    });
  },
  "./src/embed/components/legacy/Header/elements.js": function (e, t, n) {
    "use strict";
    var o = n(
        "../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"
      ),
      r = n.n(o),
      i = n(
        "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
      ),
      s = n("../@styled-system/css/dist/index.js"),
      a = n.n(s),
      c = n("../../node_modules/@babel/runtime/helpers/extends.js"),
      d = n.n(c),
      l = n("../../node_modules/react/index.js"),
      u = n.n(l),
      m = n("./src/embed/util/constants.js");

    function f() {
      var e = r()([
        "\n  margin-left: 0.4rem;\n  @media (max-width: ",
        "px) {\n    display: none;\n  }\n",
      ]);
      return (
        (f = function () {
          return e;
        }),
        e
      );
    }

    function p() {
      var e = r()([
        "\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  flex: 1;\n\n  /* compatibility mode for the redesign */\n  font-size: 13px;\n\n  @media (min-width: ",
        "px) {\n    display: none;\n  }\n\n  @media (max-width: 450px) {\n    display: none;\n  }\n",
      ]);
      return (
        (p = function () {
          return e;
        }),
        e
      );
    }

    function h() {
      var e = r()([
        "\n  position: relative;\n  display: flex;\n  width: calc(50% - 100px);\n  height: 100%;\n  align-items: center;\n  justify-content: flex-end;\n",
      ]);
      return (
        (h = function () {
          return e;
        }),
        e
      );
    }

    function b() {
      var e = r()([
        "\n  position: relative;\n  display: flex;\n  width: 200px;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n",
      ]);
      return (
        (b = function () {
          return e;
        }),
        e
      );
    }

    function g() {
      var e = r()([
        "\n  position: relative;\n  display: flex;\n  width: calc(50% - 100px);\n  height: 100%;\n  align-items: center;\n  justify-content: flex-start;\n\n  @media (min-width: ",
        "px) {\n    svg {\n      visibility: hidden;\n      display: none;\n    }\n  }\n",
      ]);
      return (
        (g = function () {
          return e;
        }),
        e
      );
    }

    function v() {
      var e = r()([
        "\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  padding: 0 1rem;\n  box-sizing: border-box;\n  background-color: ",
        ";\n\n  /* compatibility mode for the redesign */\n  height: calc(32px + 1px);\n  border-bottom: 1px solid ",
        ";\n",
      ]);
      return (
        (v = function () {
          return e;
        }),
        e
      );
    }
    n.d(t, "a", function () {
      return w;
    });
    i.default.div.withConfig({
      displayName: "elements__Container",
      componentId: "t6f098-0",
    })(
      v(),
      function (e) {
        return e.theme["editor.background"];
      },
      function (e) {
        return e.theme["sideBar.border"];
      }
    ),
      i.default.div.withConfig({
        displayName: "elements__LeftAligned",
        componentId: "t6f098-1",
      })(g(), m.a),
      i.default.div.withConfig({
        displayName: "elements__CenterAligned",
        componentId: "t6f098-2",
      })(b()),
      i.default.div.withConfig({
        displayName: "elements__RightAligned",
        componentId: "t6f098-3",
      })(h()),
      i.default.div.withConfig({
        displayName: "elements__Title",
        componentId: "t6f098-4",
      })(p(), m.a),
      i.default.span.withConfig({
        displayName: "elements__OnlyShowWideText",
        componentId: "t6f098-5",
      })(f(), function (e) {
        return e.hideOn || 400;
      });
    var y = i.default.button.withConfig({
        displayName: "elements__Button",
        componentId: "t6f098-6",
      })(
        a()({
          background: "transparent",
          border: "none",
          color: "grays.400",
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingX: 2,
          cursor: "pointer",
          "&:hover": {
            svg: {
              color: "white",
            },
          },
        })
      ),
      w = Object(i.default)(function (e) {
        return u.a.createElement(
          "svg",
          d()(
            {
              width: "13",
              height: "9",
              viewBox: "0 0 13 9",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          u.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.3105 1H0.124207V0H12.3105V1ZM12.3105 4.50072H0.124207V3.50072H12.3105V4.50072ZM0.124207 8.00141H12.3105V7.00141H0.124207V8.00141Z",
            fill: "currentcolor",
          })
        );
      }).withConfig({
        displayName: "elements__MenuIcon",
        componentId: "t6f098-7",
      })(
        a()({
          color: "tab.activeForeground",
          marginRight: 2,
          cursor: "pointer",
          zIndex: 10,
        })
      ),
      x =
        (Object(i.default)(function (e) {
          return u.a.createElement(
            "svg",
            d()(
              {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            u.a.createElement("path", {
              d: "M6.66797 8.66648C6.95427 9.04923 7.31954 9.36594 7.739 9.59511C8.15846 9.82428 8.62231 9.96056 9.09907 9.9947C9.57583 10.0288 10.0544 9.96006 10.5022 9.793C10.95 9.62594 11.3567 9.36453 11.6946 9.02648L13.6946 7.02648C14.3018 6.39781 14.6378 5.5558 14.6302 4.68181C14.6226 3.80782 14.2721 2.97178 13.654 2.35375C13.036 1.73573 12.2 1.38516 11.326 1.37757C10.452 1.36997 9.60998 1.70595 8.9813 2.31315L7.83464 3.45315",
              stroke: "currentcolor",
              strokeWidth: "1.77778",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            u.a.createElement("path", {
              d: "M9.33347 7.33332C9.04716 6.95057 8.68189 6.63387 8.26243 6.40469C7.84297 6.17552 7.37913 6.03924 6.90237 6.0051C6.4256 5.97095 5.94708 6.03974 5.49924 6.2068C5.0514 6.37386 4.64472 6.63527 4.3068 6.97332L2.3068 8.97332C1.69961 9.60199 1.36363 10.444 1.37122 11.318C1.37881 12.192 1.72938 13.028 2.3474 13.646C2.96543 14.2641 3.80147 14.6146 4.67546 14.6222C5.54945 14.6298 6.39146 14.2938 7.02013 13.6867L8.16013 12.5467",
              stroke: "currentcolor",
              strokeWidth: "1.77778",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }).withConfig({
          displayName: "elements__LinkIcon",
          componentId: "t6f098-8",
        })(a()({})),
        Object(i.default)(y).withConfig({
          displayName: "elements__HeartButton",
          componentId: "t6f098-9",
        })(function (e) {
          return a()({
            "&:hover": {
              svg: {
                color: e.liked ? "reds.300" : "white",
              },
            },
          });
        }),
        Object(i.default)(function (e) {
          return u.a.createElement(
            "svg",
            d()(
              {
                width: "14",
                height: "13",
                viewBox: "0 0 14 13",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            u.a.createElement("path", {
              d: "M6.91607 12C17.423 6.10866 12.2269 -1.90872 6.91608 2.06249C1.8346 -1.90872 -3.36155 6.10865 6.91607 12Z",
              fill: "currentcolor",
              stroke: "currentcolor",
            })
          );
        }).withConfig({
          displayName: "elements__HeartIcon",
          componentId: "t6f098-10",
        })(function (e) {
          return a()({
            color: e.liked ? "reds.300" : "grays.400",
          });
        }),
        function (e) {
          return a()({
            color: e.active ? "white" : "grays.400",
            borderRadius: 2,
            cursor: "pointer",
            marginX: 1,
            ":hover": {
              color: "white",
            },
            path: {
              transitionProperty: "fill",
              transitionDuration: function (e) {
                return e.speed[2];
              },
            },
          });
        });
    Object(i.default)(function (e) {
      return u.a.createElement(
        "svg",
        d()(
          {
            width: "22",
            height: "16",
            viewBox: "0 0 22 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        u.a.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1 0C0.447715 0 0 0.447715 0 1V15C0 15.5523 0.447716 16 1 16H21C21.5523 16 22 15.5523 22 15V1C22 0.447715 21.5523 0 21 0H1ZM5 8.09089L8.92071 4L9.90089 5.02272L6.96033 8.09092L9.90087 11.1591L8.92069 12.1818L5 8.09089ZM17 8.09092L13.0793 12.1818L12.0991 11.1591L15.0396 8.09091L12.0991 5.02274L13.0793 4.00001L17 8.09092Z",
          fill: "currentcolor",
        })
      );
    }).withConfig({
      displayName: "elements__EditorViewIcon",
      componentId: "t6f098-11",
    })(x),
      Object(i.default)(function (e) {
        return u.a.createElement(
          "svg",
          d()(
            {
              width: "22",
              height: "16",
              viewBox: "0 0 22 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          u.a.createElement(
            "mask",
            {
              id: "path-1-inside-1",
              fill: "white",
            },
            u.a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M1 0C0.447715 0 0 0.447715 0 1V15C0 15.5523 0.447716 16 1 16H21C21.5523 16 22 15.5523 22 15V1C22 0.447715 21.5523 0 21 0H1ZM12 2H11V14H12V2Z",
            })
          ),
          u.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1 0C0.447715 0 0 0.447715 0 1V15C0 15.5523 0.447716 16 1 16H21C21.5523 16 22 15.5523 22 15V1C22 0.447715 21.5523 0 21 0H1ZM12 2H11V14H12V2Z",
            fill: "currentcolor",
          }),
          u.a.createElement("path", {
            d: "M11 2V1H10V2H11ZM12 2H13V1H12V2ZM11 14H10V15H11V14ZM12 14V15H13V14H12ZM1 1V-1C-0.104569 -1 -1 -0.10457 -1 1H1ZM1 15V1H-1V15H1ZM1 15H1H-1C-1 16.1046 -0.104568 17 1 17V15ZM21 15H1V17H21V15ZM21 15V17C22.1046 17 23 16.1046 23 15H21ZM21 1V15H23V1H21ZM21 1H23C23 -0.10457 22.1046 -1 21 -1V1ZM1 1H21V-1H1V1ZM11 3H12V1H11V3ZM12 14V2H10V14H12ZM12 13H11V15H12V13ZM11 2V14H13V2H11Z",
            fill: "currentcolor",
            mask: "url(#path-1-inside-1)",
          })
        );
      }).withConfig({
        displayName: "elements__SplitViewIcon",
        componentId: "t6f098-12",
      })(x),
      Object(i.default)(function (e) {
        return u.a.createElement(
          "svg",
          d()(
            {
              width: "22",
              height: "16",
              viewBox: "0 0 22 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          u.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1 0C0.447715 0 0 0.447715 0 1V15C0 15.5523 0.447716 16 1 16H21C21.5523 16 22 15.5523 22 15V1C22 0.447715 21.5523 0 21 0H1ZM9 11.4641L15 8L9 4.5359V11.4641Z",
            fill: "currentcolor",
          })
        );
      }).withConfig({
        displayName: "elements__PreviewViewIcon",
        componentId: "t6f098-13",
      })(x);
  },
  "./src/embed/index.js": function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n("../../node_modules/@babel/runtime/regenerator/index.js"),
      r = n.n(o),
      i = n("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),
      s = n.n(i),
      a = n("../../node_modules/react/index.js"),
      c = n.n(a),
      d = n("../../node_modules/react-dom/index.js"),
      l = n("../common/lib/load-dynamic-polyfills.js"),
      u = n.n(l),
      m =
        (n("../../node_modules/normalize.css/normalize.css"),
        n("../common/lib/global.css"),
        n("../common/lib/utils/analytics/index.js")),
      f = n.n(m),
      p = n("../../node_modules/@codesandbox/ab/lib/index.js"),
      h = n("../common/lib/config/env.js"),
      b = n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),
      g = n.n(b),
      v = n("../../node_modules/@babel/runtime/helpers/createClass.js"),
      y = n.n(v),
      w = n(
        "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"
      ),
      x = n.n(w),
      j = n("../../node_modules/@babel/runtime/helpers/inherits.js"),
      C = n.n(j),
      _ = n(
        "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"
      ),
      E = n.n(_),
      O = n("../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
      k = n.n(O),
      S = n("../../node_modules/@babel/runtime/helpers/defineProperty.js"),
      P = n.n(S),
      M = n(
        "../../node_modules/styled-components/dist/styled-components.browser.esm.js"
      ),
      z = n("../../node_modules/humps/humps.js"),
      I = n("../common/lib/templates/index.js"),
      D = n.n(I),
      T = n("../common/lib/components/flex/Centered.js"),
      R = n.n(T),
      N = n("../common/lib/url.js"),
      B = n("../common/lib/sandbox/modules.js"),
      L = n("../common/lib/utils/platform.js"),
      V = n("./src/app/components/Title.ts"),
      H = n("./src/app/components/SubTitle.ts"),
      F = n("./src/embed/components/Content/index.tsx"),
      W = n("../../node_modules/@babel/runtime/helpers/extends.js"),
      A = n.n(W),
      Z = n("../../node_modules/@babel/runtime/helpers/slicedToArray.js"),
      q = n.n(Z),
      U = n(
        "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js"
      ),
      $ = n.n(U),
      J = n("../@styled-system/css/dist/index.js"),
      X = n.n(J),
      G = M.default.div.withConfig({
        displayName: "elements__Body",
        componentId: "sc-1ntk86q-0",
      })(
        X()({
          borderBottom: "1px solid",
          borderColor: "sideBar.border",
          paddingTop: 4,
          paddingBottom: 8,
        })
      ),
      K = M.default.div.withConfig({
        displayName: "elements__Header",
        componentId: "sc-1ntk86q-1",
      })(
        X()({
          display: "flex",
          alignItems: "center",
          height: "32px",
          paddingX: 3,
          borderBottom: "1px solid",
          borderColor: "sideBar.border",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "sideBar.border",
            svg: {
              color: "grays.300",
            },
          },
        })
      ),
      Y = M.default.div.withConfig({
        displayName: "elements__Title",
        componentId: "sc-1ntk86q-2",
      })(
        X()({
          fontSize: 3,
        })
      ),
      Q = M.default.svg.withConfig({
        displayName: "elements__Icon",
        componentId: "sc-1ntk86q-3",
      })(function (e) {
        return X()({
          marginRight: 2,
          transform: e.open ? "rotate(0)" : "rotate(-90deg)",
          color: "grays.400",
        });
      });

    function ee(e) {
      return c.a.createElement(
        Q,
        A()(
          {
            width: "9",
            height: "6",
            viewBox: "0 0 9 6",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        c.a.createElement("path", {
          d: "M4.50009 6L-5.24537e-07 1.26364e-06L9 4.76837e-07L4.50009 6Z",
          fill: "currentcolor",
        })
      );
    }
    var te = function (e) {
        var t = e.openByDefault,
          n = e.title,
          o = e.children,
          r = $()(e, ["openByDefault", "title", "children"]),
          i = c.a.useState(t || !1),
          s = q()(i, 2),
          a = s[0],
          d = s[1];
        return c.a.createElement(
          "section",
          r,
          c.a.createElement(
            K,
            {
              onClick: function () {
                return d(!a);
              },
            },
            c.a.createElement(ee, {
              open: a,
            }),
            c.a.createElement(Y, null, n)
          ),
          a ? c.a.createElement(G, null, o) : null
        );
      },
      ne = n("../common/lib/utils/get-sandbox-name.js"),
      oe = n("../common/lib/utils/url-generator.js"),
      re = M.default.div.withConfig({
        displayName: "elements__Container",
        componentId: "sc-1imx2z-0",
      })(
        X()({
          display: "flex",
          alignItems: "center",
          marginBottom: 4,
        })
      ),
      ie = M.default.img.withConfig({
        displayName: "elements__Avatar",
        componentId: "sc-1imx2z-1",
      })(
        X()({
          size: "24px",
          borderRadius: "2px",
          border: "1px solid",
          borderColor: "grays.400",
        })
      ),
      se = M.default.span.withConfig({
        displayName: "elements__Name",
        componentId: "sc-1imx2z-2",
      })(
        X()({
          display: "inline-block",
          fontSize: 2,
          marginLeft: 2,
        })
      ),
      ae = function (e) {
        var t = e.url,
          n = e.name;
        return c.a.createElement(
          re,
          null,
          c.a.createElement(ie, {
            src: t,
          }),
          c.a.createElement(se, null, n)
        );
      },
      ce = n("../common/lib/components/Stats/index.js"),
      de = n.n(ce),
      le = n("../common/lib/components/Stats/Stat/elements.js"),
      ue = M.default.div.withConfig({
        displayName: "elements__Container",
        componentId: "zwo3qx-0",
      })(
        X()({
          paddingX: 4,
        })
      ),
      me = M.default.h1.withConfig({
        displayName: "elements__Title",
        componentId: "zwo3qx-1",
      })(
        X()({
          fontSize: 3,
          fontWeight: "medium",
          margin: 0,
          marginBottom: 1,
        })
      ),
      fe = M.default.h2.withConfig({
        displayName: "elements__Description",
        componentId: "zwo3qx-2",
      })(
        X()({
          fontSize: 2,
          fontWeight: "normal",
          color: "sideBar.foreground",
          marginBottom: 4,
        })
      ),
      pe = Object(M.default)(de.a).withConfig({
        displayName: "elements__Stats",
        componentId: "zwo3qx-3",
      })(
        X()(
          P()(
            {
              fontSize: 2,
              color: "grays.400",
              marginBottom: 2,
            },
            le.CenteredText,
            {
              justifyContent: "start",
            }
          )
        )
      ),
      he = M.default.a.withConfig({
        displayName: "elements__Button",
        componentId: "zwo3qx-4",
      })(
        X()({
          transition: "0.3s ease background-color",
          backgroundColor: function (e) {
            return e.light ? "grays.200" : "grays.500";
          },
          padding: 2,
          display: "block",
          color: function (e) {
            return e.light ? "grays.800" : "white";
          },
          border: "none",
          outline: "none",
          borderRadius: 2,
          width: "100%",
          fontSize: 3,
          boxSizing: "border-box",
          cursor: "pointer",
          textDecoration: "none",
          textAlign: "center",
          ":hover": {
            backgroundColor: function (e) {
              return e.light ? "grays.300" : "grays.600";
            },
          },
        })
      ),
      be = function (e) {
        var t = e.sandbox,
          n = Object(ne.getSandboxName)(t);
        return c.a.createElement(
          ue,
          null,
          c.a.createElement(
            me,
            {
              title: n,
            },
            n
          ),
          t.description && c.a.createElement(fe, null, t.description),
          t.author &&
            c.a.createElement(ae, {
              url: t.author.avatarUrl,
              name: t.author.username,
            }),
          c.a.createElement(pe, t),
          c.a.createElement(
            he,
            {
              href: Object(oe.sandboxUrl)(t) + "?from-embed",
              target: "_blank",
              rel: "noreferrer noopener",
            },
            "Edit Sandbox"
          )
        );
      },
      ge = n("./src/embed/components/Sidebar/FileTree/index.js"),
      ve = n("../common/lib/utils/ci.js"),
      ye = M.default.div.withConfig({
        displayName: "elements__Container",
        componentId: "ndjlbr-0",
      })(
        X()({
          paddingX: 4,
          fontSize: 3,
        })
      ),
      we = M.default.div.withConfig({
        displayName: "elements__Row",
        componentId: "ndjlbr-1",
      })(
        X()({
          display: "flex",
          justifyContent: "space-between",
          lineHeight: "24px",
        })
      ),
      xe = M.default.a.withConfig({
        displayName: "elements__Link",
        componentId: "ndjlbr-2",
      })(
        X()({
          color: "inherit",
          textDecoration: "none",
        })
      );
    var je = function (e) {
        var t = e.sandbox,
          n = t.npmDependencies,
          o = t.modules.find(function (e) {
            return "package.json" === e.title && null == e.directoryShortid;
          });
        if (o)
          try {
            n = JSON.parse(o.code).dependencies;
          } catch (r) {
            console.error(r);
          }
        return (
          (n = n || {}),
          c.a.createElement(
            ye,
            null,
            Object.keys(n).map(function (e) {
              return c.a.createElement(
                we,
                {
                  key: e,
                },
                c.a.createElement(
                  xe,
                  {
                    href: "/examples/package/".concat(e),
                    target: "_blank",
                  },
                  e
                ),
                c.a.createElement("span", null, Object(ve.formatVersion)(n[e]))
              );
            })
          )
        );
      },
      Ce = M.default.div.withConfig({
        displayName: "elements__Container",
        componentId: "jigt9u-0",
      })(
        X()({
          paddingX: 4,
          fontSize: 3,
        })
      ),
      _e = M.default.div.withConfig({
        displayName: "elements__Row",
        componentId: "jigt9u-1",
      })(
        X()({
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingY: 1,
        })
      );
    var Ee = function (e) {
        var t = e.sandbox.externalResources || [];
        return c.a.createElement(
          Ce,
          null,
          t.length > 0 &&
            c.a.createElement(
              c.a.Fragment,
              null,
              t.map(function (e) {
                return c.a.createElement(
                  _e,
                  {
                    key: e,
                  },
                  c.a.createElement(
                    "span",
                    null,
                    (function (e) {
                      if (e.includes("https://fonts.googleapis.com/css"))
                        return "".concat(
                          (t = e)
                            .slice(t.indexOf("?") + 1)
                            .split("&")
                            .find(function (e) {
                              return "family" === e.split("=")[0];
                            })
                            .split("=")[1]
                            .split("+")
                            .join(" "),
                          " (Google Fonts)"
                        );
                      var t;
                      if (e.endsWith(".css") || e.endsWith(".js")) {
                        var n = e.match(/.*\/(.*)/);
                        if (n && n[1]) return n[1];
                      }
                      return "".concat(e.replace(/\/$/g, ""), "/");
                    })(e)
                  ),
                  c.a.createElement(
                    "a",
                    {
                      href: e,
                      rel: "nofollow noopener noreferrer",
                      target: "_blank",
                    },
                    "open"
                  )
                );
              })
            )
        );
      },
      Oe = M.default.div.withConfig({
        displayName: "elements__Container",
        componentId: "tgaqm6-0",
      })(
        X()({
          flex: 250,
          width: 250,
          color: "sideBar.foreground",
          zIndex: 10,
          backgroundColor: "sideBar.background",
          overflow: "auto",
          fontFamily: "Inter, sans-serif",
          height: L.isIOS ? "100%" : "100vh",
        })
      );
    var ke = function (e) {
        var t = e.sandbox,
          n = e.setCurrentModule,
          o = e.currentModule;
        return a.createElement(
          Oe,
          null,
          a.createElement(
            te,
            {
              title: "CodeSandbox",
              openByDefault: !0,
            },
            a.createElement(be, {
              sandbox: t,
            })
          ),
          a.createElement(
            te,
            {
              title: "Files",
              openByDefault: !0,
            },
            a.createElement(ge.a, {
              sandbox: t,
              currentModuleId: o,
              setCurrentModuleId: n,
            })
          ),
          a.createElement(
            te,
            {
              title: "Dependencies",
              openByDefault: !0,
            },
            a.createElement(je, {
              sandbox: t,
            })
          ),
          a.createElement(
            te,
            {
              title: "External Resources",
              hidden: 0 === t.externalResources.length,
            },
            a.createElement(Ee, {
              sandbox: t,
            })
          )
        );
      },
      Se = n(
        "../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"
      ),
      Pe = n.n(Se);

    function Me() {
      var e = Pe()([
        "\n  transition: 0.3s ease all;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: ",
        "px;\n  right: 0;\n  width: ",
        ";\n  border: 1px solid;\n  /* 8 digit hex code with last 2 for opacity */\n  border-color: ",
        ";\n",
      ]);
      return (
        (Me = function () {
          return e;
        }),
        e
      );
    }
    var ze = M.default.div.withConfig({
        displayName: "elements__Container",
        componentId: "vemxx9-0",
      })(
        X()({
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100vw",
        })
      ),
      Ie = M.default.div.withConfig({
        displayName: "elements__Fullscreen",
        componentId: "vemxx9-1",
      })(
        X()({
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "editor.background",
          color: "editor.foreground",
          h1: {
            color: "editor.foreground",
          },
        })
      ),
      De = M.default.div.withConfig({
        displayName: "elements__Moving",
        componentId: "vemxx9-2",
      })(
        Me(),
        function (e) {
          return e.sidebarOpen ? 250 : 0;
        },
        function (e) {
          return e.sidebarOpen ? "calc(100% - 250px)" : "100%";
        },
        function (e) {
          return e.theme.colors.sideBar.border + "33";
        }
      ),
      Te = n("./src/embed/util/constants.js"),
      Re = n("../../node_modules/dot-object/index.js"),
      Ne = n.n(Re),
      Be = n("../common/lib/theme/index.js"),
      Le = n.n(Be),
      Ve = n("../common/lib/themes/codesandbox-black.js"),
      He = n.n(Ve),
      Fe = n("../common/lib/themes/codesandbox-light.json"),
      We = {
        white: "#fff",
        grays: {
          100: "#fff9f9",
          200: "#e6e6e6",
          300: "#999999",
          400: "#757575",
          500: "#242424",
          600: "#343434",
          700: "#151515",
          800: "#040404",
          900: "#111111",
        },
        blues: {
          300: "#6CC7F6",
          600: "#0971f1",
        },
        reds: {
          300: "#FF453A",
          500: "#E1270E",
        },
      },
      Ae = {
        colors: We,
        space: [0, 4, 8, 12, 16, 20, 24, 28, 32],
        fontSizes: [0, 9, 11, 13, 16],
        fontWeights: {
          thin: 100,
          light: 300,
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold: 800,
          black: 900,
        },
        speed: [0, "75ms", "100ms", "150ms", "200ms", "300ms", "500ms"],
        shadows: {
          active: "inset 0px -2px 0px ".concat(We.blues[300]),
          underline: "inset 0px -2px 0px ".concat(We.grays[100] + "1a"),
          fadeunder: "inset 0px 8px 8px 0px ".concat(We.grays[700] + "cc"),
        },
      };

    function Ze(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }

    function qe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ze(Object(n), !0).forEach(function (t) {
              P()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ze(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }

    function Ue(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }

    function $e(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ue(Object(n), !0).forEach(function (t) {
              P()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ue(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }

    function Je(e) {
      var t = (function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          o = k()(e);
        if (t) {
          var r = k()(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);
        return E()(this, n);
      };
    }
    new Map();
    var Xe = (function (e) {
      C()(n, e);
      var t = Je(n);

      function n(e) {
        var o;
        g()(this, n),
          (o = t.call(this, e)),
          P()(x()(o), "getId", function () {
            if (o.props.id) return o.props.id;
            if (o.props.sandbox) return o.props.sandbox.id;
            var e = location.pathname.match(/^\/embed\/(.*?)$/);
            return e && e.length > 1 ? e[1] : null;
          }),
          P()(x()(o), "getAppOrigin", function () {
            return location.origin.replace("embed.", "");
          }),
          P()(
            x()(o),
            "fetchSandbox",
            (function () {
              var e = s()(
                r.a.mark(function e(t) {
                  var n;
                  return r.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("custom" !== t) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (e.next = 3),
                              new Promise(function (e) {
                                window.parent.postMessage("ready", "*"),
                                  window.addEventListener(
                                    "message",
                                    function (t) {
                                      t.data &&
                                        t.data.sandbox &&
                                        (o.setState({
                                          sandbox: t.data.sandbox,
                                        }),
                                        e());
                                    }
                                  );
                              })
                            );
                          case 3:
                            e.next = 16;
                            break;
                          case 5:
                            return (
                              (e.prev = 5),
                              (e.next = 8),
                              fetch(
                                ""
                                  .concat(
                                    o.getAppOrigin(),
                                    "/api/v1/sandboxes/"
                                  )
                                  .concat(t),
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer ".concat(o.jwt()),
                                  },
                                }
                              )
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(z.camelizeKeys)
                            );
                          case 8:
                            (n = e.sent),
                              (document.title = "".concat(
                                n.data.title || n.data.id,
                                " - CodeSandbox"
                              )),
                              o.setState({
                                sandbox: n.data,
                              }),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(5)),
                              o.setState({
                                notFound: !0,
                              });
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 13]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          ),
          P()(x()(o), "setEditorView", function () {
            return o.setState({
              showEditor: !0,
              showPreview: !1,
            });
          }),
          P()(x()(o), "setPreviewView", function () {
            return o.setState({
              showEditor: !1,
              showPreview: !0,
            });
          }),
          P()(x()(o), "setMixedView", function () {
            return o.setState({
              showEditor: !0,
              showPreview: !0,
            });
          }),
          P()(x()(o), "setCurrentModule", function (e) {
            var t = {
              currentModule: e,
            };
            o.state.showEditor ||
              ((t.showEditor = !0),
              o.state.showPreview && (t.showPreview = !1)),
              o.setState(t);
          }),
          P()(x()(o), "toggleSidebar", function () {
            return o.setState(function (e) {
              return {
                sidebarOpen: !e.sidebarOpen,
              };
            });
          }),
          P()(x()(o), "setProjectView", function (e, t, n) {
            return o.setState(
              {
                isInProjectView: t,
              },
              n
            );
          }),
          P()(x()(o), "getCurrentModuleFromPath", function (e) {
            var t = o.state.currentModule;
            return Object(B.findCurrentModule)(
              e.modules,
              e.directories,
              t,
              Object(B.findMainModule)(e)
            );
          }),
          P()(x()(o), "jwt", function () {
            try {
              return JSON.parse(localStorage.getItem("jwt"));
            } catch (e) {
              return;
            }
          }),
          P()(x()(o), "toggleLike", function () {
            var e = o.jwt();
            f()("Embed - Toggle Like"),
              o.state.sandbox.userLiked && e
                ? (o.setState(function (e) {
                    return {
                      sandbox: $e(
                        $e({}, e.sandbox),
                        {},
                        {
                          userLiked: !1,
                          likeCount: e.sandbox.likeCount - 1,
                        }
                      ),
                    };
                  }),
                  fetch(
                    "/api/v1/sandboxes/".concat(o.state.sandbox.id, "/likes"),
                    {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(e),
                      },
                      body: JSON.stringify({
                        id: o.state.sandbox.id,
                      }),
                    }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      o.setState(function (t) {
                        return {
                          sandbox: $e(
                            $e({}, t.sandbox),
                            {},
                            {
                              userLiked: !1,
                              likeCount: e.count,
                            }
                          ),
                        };
                      });
                    })
                    .catch(function () {
                      o.setState(function (e) {
                        return {
                          sandbox: $e(
                            $e({}, e.sandbox),
                            {},
                            {
                              userLiked: !0,
                              likeCount: e.sandbox.likeCount + 1,
                            }
                          ),
                        };
                      });
                    }))
                : (o.setState(function (e) {
                    return {
                      sandbox: $e(
                        $e({}, e.sandbox),
                        {},
                        {
                          userLiked: !0,
                          likeCount: e.sandbox.likeCount + 1,
                        }
                      ),
                    };
                  }),
                  fetch(
                    "/api/v1/sandboxes/".concat(o.state.sandbox.id, "/likes"),
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(e),
                      },
                    }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      o.setState(function (t) {
                        return {
                          sandbox: $e(
                            $e({}, t.sandbox),
                            {},
                            {
                              userLiked: !0,
                              likeCount: e.count,
                            }
                          ),
                        };
                      });
                    })
                    .catch(function () {
                      o.setState(function (e) {
                        return {
                          sandbox: $e(
                            $e({}, e.sandbox),
                            {},
                            {
                              userLiked: !1,
                              likeCount: e.sandbox.likeCount - 1,
                            }
                          ),
                        };
                      });
                    }));
          }),
          P()(x()(o), "content", function () {
            if (o.state.notFound)
              return a.createElement(
                R.a,
                {
                  vertical: !0,
                  horizontal: !0,
                },
                a.createElement(
                  V.a,
                  {
                    delay: 0.1,
                  },
                  "Not Found"
                ),
                a.createElement(
                  H.a,
                  {
                    delay: 0.05,
                  },
                  "We could not find the sandbox you",
                  "'",
                  "re looking for."
                )
              );
            var e = o.state.sandbox;
            if (!e)
              return a.createElement(
                R.a,
                {
                  vertical: !0,
                  horizontal: !0,
                },
                a.createElement(
                  V.a,
                  {
                    delay: 0.3,
                  },
                  "Loading Sandbox..."
                )
              );
            var t = o.state,
              n = t.showEditor,
              r = t.verticalMode,
              i = t.showPreview,
              s = t.previewWindow,
              c = t.isInProjectView,
              d = t.runOnClick;
            return a.createElement(
              M.ThemeProvider,
              {
                theme: {
                  templateColor: D()(e.template).color,
                },
              },
              a.createElement(
                ze,
                null,
                a.createElement(F.a, {
                  showEditor: n,
                  showPreview: i,
                  setEditorView: o.setEditorView,
                  setPreviewView: o.setPreviewView,
                  setMixedView: o.setMixedView,
                  previewWindow: s,
                  isInProjectView: c,
                  setProjectView: o.setProjectView,
                  sandbox: e,
                  currentModule: o.getCurrentModuleFromPath(e),
                  hideNavigation: o.state.hideNavigation,
                  autoResize: o.state.autoResize,
                  fontSize: o.state.fontSize,
                  initialPath: o.state.initialPath,
                  setCurrentModule: o.setCurrentModule,
                  useCodeMirror: o.state.useCodeMirror,
                  enableEslint: o.state.enableEslint,
                  editorSize: o.state.editorSize,
                  highlightedLines: o.state.highlightedLines,
                  forceRefresh: o.state.forceRefresh,
                  expandDevTools: o.state.expandDevTools,
                  hideDevTools: o.state.hideDevTools,
                  tabs: o.state.tabs,
                  runOnClick: d,
                  verticalMode: r,
                  sidebarOpen: o.state.sidebarOpen,
                  toggleSidebar: o.toggleSidebar,
                  toggleLike: o.jwt() && o.toggleLike,
                })
              )
            );
          });
        var i =
            e.embedOptions ||
            Object(N.getSandboxOptions)(document.location.href),
          c = i.currentModule,
          d = i.initialPath,
          l = i.isInProjectView,
          u = i.isPreviewScreen,
          m = i.isEditorScreen,
          p = i.previewWindow,
          h = i.isSplitScreen,
          b = i.autoResize,
          v = i.hideNavigation,
          y = i.fontSize,
          w = i.enableEslint,
          j = i.useCodeMirror,
          C = i.editorSize,
          _ = i.highlightedLines,
          E = i.forceRefresh,
          O = i.expandDevTools,
          k = i.hideDevTools,
          S = i.runOnClick,
          I = i.verticalMode,
          T = void 0 === I ? window.innerWidth < window.innerHeight : I,
          W = i.tabs,
          A = i.theme,
          Z = void 0 === A ? "dark" : A;
        return (
          (o.state = {
            notFound: !1,
            sandbox: o.props.sandbox || null,
            fontSize: y || 16,
            showEditor: h || m,
            showPreview: h || u,
            previewWindow: p,
            isInProjectView: l,
            currentModule: c,
            initialPath: d,
            sidebarOpen: window.innerWidth > Te.a,
            autoResize: b,
            hideNavigation: v,
            enableEslint: w,
            useCodeMirror: j,
            editorSize: C,
            forceRefresh: E,
            expandDevTools: O,
            hideDevTools: k,
            tabs: W,
            theme: Z,
            runOnClick: void 0 === S ? L.isAndroid || L.isIOS : S,
            verticalMode: T,
            highlightedLines: _ || [],
          }),
          o
        );
      }
      return (
        y()(n, [
          {
            key: "UNSAFE_componentWillMount",
            value: function () {
              if (window.__SANDBOX_DATA__)
                this.setState({
                  sandbox: Object(z.camelizeKeys)(window.__SANDBOX_DATA__),
                });
              else {
                var e = this.getId();
                if (!e)
                  return void this.setState({
                    notFound: !0,
                  });
                this.fetchSandbox(e);
              }
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.state.sandbox,
                t = (function (e) {
                  var t = "light" === e ? Fe : He.a;
                  return (
                    Object.assign(Ae.colors, Ne.a.object(qe({}, t.colors))),
                    qe(
                      qe(
                        qe(qe({}, Le.a), t.colors),
                        {},
                        {
                          vscodeTheme: t,
                        },
                        Ae
                      ),
                      {},
                      {
                        light: "light" === e,
                      }
                    )
                  );
                })(this.state.theme);
              return a.createElement(
                M.ThemeProvider,
                {
                  theme: t,
                },
                a.createElement(
                  Ie,
                  {
                    sidebarOpen: this.state.sidebarOpen,
                  },
                  e &&
                    a.createElement(ke, {
                      setCurrentModule: this.setCurrentModule,
                      currentModule: this.getCurrentModuleFromPath(e).id,
                      sandbox: e,
                    }),
                  a.createElement(
                    De,
                    {
                      sidebarOpen: this.state.sidebarOpen,
                    },
                    this.content()
                  )
                )
              );
            },
          },
        ]),
        n
      );
    })(a.PureComponent);
    Object(p.initializeExperimentStore)(
      h.AB_TESTING_URL,
      h.getExperimentUserId,
      (function () {
        var e = s()(
          r.a.mark(function e(t, n) {
            return r.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Object(m.identify)(t, n);
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })()
    );
    try {
      Object(m.identifyOnce)("signed_in", !1);
    } catch (Ge) {}
    document.addEventListener("click", function e() {
      f()("Embed Interaction"), document.removeEventListener("click", e);
    }),
      u()().then(function () {
        var e;
        (e = Xe),
          Object(d.render)(
            c.a.createElement(e, null),
            document.getElementById("root")
          );
      });
  },
  "./src/embed/util/constants.js": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var o = 1280;
  },
  8: function (e, t, n) {
    n("./config/polyfills.js"), (e.exports = n("./src/embed/index.js"));
  },
});
//# sourceMappingURL=embed.a11727b1f.js.map
