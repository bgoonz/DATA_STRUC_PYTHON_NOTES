!(function (A, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(require('@codesandbox/common/lib/utils/url-generator'))
    : 'function' == typeof define && define.amd
    ? define(['@codesandbox/common/lib/utils/url-generator'], e)
    : e(A.urlGenerator);
})(this, function (A) {
  'use strict';
  Object.freeze({
    show: function (A, e, t) {
      return (
        void 0 === e && (e = 'notice'),
        void 0 === t && (t = 2),
        {
          type: 'action',
          action: 'notification',
          title: A,
          notificationType: e,
          timeAlive: t,
        }
      );
    },
  });
  Object.freeze({
    openModule: function (A, e, t) {
      return {
        type: 'action',
        action: 'editor.open-module',
        path: A,
        lineNumber: e,
        column: t,
      };
    },
  });
  var e = Object.freeze({
      add: function (A) {
        return {
          type: 'action',
          action: 'source.dependencies.add',
          dependency: A,
        };
      },
    }),
    t = Object.freeze({
      rename: function (A, e) {
        return {
          type: 'action',
          action: 'source.module.rename',
          path: A,
          title: e,
        };
      },
    });
  Object.freeze({
    dependencies: e,
    modules: t,
  });
  Object.freeze({
    show: function (A, e, t) {
      var r = t.line,
        s = t.column,
        n = t.lineEnd,
        B = t.columnEnd;
      return {
        title: A,
        message: e,
        line: r,
        column: s,
        path: t.path,
        payload: t.payload,
        lineEnd: n,
        columnEnd: B,
        severity: 'error',
        type: 'action',
        action: 'show-error',
        source: t.source || 'browser',
      };
    },
    clear: function (A, e) {
      return {
        type: 'action',
        action: 'clear-errors',
        path: A,
        source: e,
      };
    },
  });
  Object.freeze({
    show: function (A, e) {
      var t =
          void 0 === e
            ? {
                path: '',
                severity: 'warning',
                source: '',
              }
            : e,
        r = t.line,
        s = t.column,
        n = t.lineEnd,
        B = t.columnEnd,
        o = t.path,
        i = t.payload,
        a = t.severity,
        c = void 0 === a ? 'warning' : a,
        Q = t.source;
      return {
        message: A,
        line: r,
        column: s,
        lineEnd: n,
        columnEnd: B,
        path: o,
        payload: i,
        severity: c,
        source: void 0 === Q ? '' : Q,
        type: 'action',
        action: 'show-correction',
      };
    },
    clear: function (A, e) {
      return {
        type: 'action',
        action: 'clear-corrections',
        path: A,
        source: e,
      };
    },
  });
  Object.freeze({
    show: function (A) {
      return {
        line: A.line,
        path: A.path,
        className: A.className,
        type: 'action',
        action: 'show-glyph',
      };
    },
  });
  var r =
      ('undefined' != typeof process && process.env.CODESANDBOX_HOST) ||
      'https://codesandbox.io',
    s = function () {
      return (s =
        Object.assign ||
        function (A) {
          for (var e, t = 1, r = arguments.length; t < r; t++)
            for (var s in (e = arguments[t]))
              Object.prototype.hasOwnProperty.call(e, s) && (A[s] = e[s]);
          return A;
        }).apply(this, arguments);
    },
    n = new Map();
  var B,
    o =
      'undefined' == typeof window ||
      !!(window.location && window.location.href.indexOf('?standalone') > -1) ||
      (!window.opener && window.parent === window) ||
      !!(window.location && window.location.href.indexOf(r) > -1),
    i = !1,
    a = new Promise(function (A) {
      B = A;
    }),
    c = null,
    Q = null,
    l = function (A) {
      var e;
      'register-frame' !== A.data.type ||
        Q ||
        ((c = A.data.origin),
        (Q = null !== (e = A.data.id) && void 0 !== e ? e : null),
        i || (B(), (i = !0)),
        self.removeEventListener('message', l));
    };

  function w(A) {
    if (A) {
      var e = s(s({}, A), {
        codesandbox: !0,
      });
      null !== Q && (e.$id = Q),
        C(e),
        (function (A) {
          var e = JSON.parse(JSON.stringify(A));
          n.forEach(function (A, t) {
            t &&
              t.postMessage &&
              t.postMessage(
                s(s({}, e), {
                  codesandbox: !0,
                }),
                A
              );
          });
        })(e),
        o ||
          (null === c && 'initialized' !== A.type) ||
          (window.opener
            ? window.opener.postMessage(e, null === c ? '*' : c)
            : window.parent.postMessage(e, null === c ? '*' : c));
    }
  }
  'undefined' != typeof window && self.addEventListener('message', l);
  var U = {},
    u = 0;

  function g(A) {
    var e = ++u;
    return (
      (U[e] = A),
      function () {
        delete U[e];
      }
    );
  }

  function C(A, e) {
    Object.keys(U).forEach(function (t) {
      if (U[t])
        try {
          U[t](A, e);
        } catch (A) {}
    });
  }
  'undefined' != typeof window &&
    window.addEventListener('message', function (A) {
      if ((('initialized' === A.data.type || o) && (i = !0), i)) {
        var e = A.data;
        !e ||
          !e.codesandbox ||
          (null !== c && A.origin !== c) ||
          (null != e.$id && null !== Q && Q !== e.$id) ||
          C(e, A.source);
      }
    });
  var h =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};

  function E(A) {
    return A &&
      A.__esModule &&
      Object.prototype.hasOwnProperty.call(A, 'default')
      ? A.default
      : A;
  }

  function d(A, e) {
    return (
      A(
        (e = {
          exports: {},
        }),
        e.exports
      ),
      e.exports
    );
  }
  var F = d(function (A, e) {
    e.__esModule = !0;
    e.default = [
      'log',
      'debug',
      'info',
      'warn',
      'error',
      'table',
      'clear',
      'time',
      'timeEnd',
      'count',
      'assert',
    ];
  });
  E(F);
  var H = d(function (A, e) {
    (e.__esModule = !0),
      (e.default = function () {
        var A = function () {
          return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
        };
        return (
          A() +
          A() +
          '-' +
          A() +
          '-' +
          A() +
          '-' +
          A() +
          '-' +
          A() +
          '-' +
          Date.now()
        );
      });
  });
  E(H);
  var f = d(function (A, e) {
    (e.__esModule = !0),
      (e.update = e.state = void 0),
      (e.update = function (A) {
        e.state = A;
      });
  });
  E(f);
  f.update, f.state;
  var p = d(function (A, e) {
    var t =
      (h && h.__assign) ||
      function () {
        return (t =
          Object.assign ||
          function (A) {
            for (var e, t = 1, r = arguments.length; t < r; t++)
              for (var s in (e = arguments[t]))
                Object.prototype.hasOwnProperty.call(e, s) && (A[s] = e[s]);
            return A;
          }).apply(this, arguments);
      };
    (e.__esModule = !0),
      (e.initialState = void 0),
      (e.initialState = {
        timings: {},
        count: {},
      }),
      (e.default = function (A, r) {
        var s, n, B;
        switch ((void 0 === A && (A = e.initialState), r.type)) {
          case 'COUNT':
            var o = A.count[r.name] || 0;
            return t(t({}, A), {
              count: t(t({}, A.count), ((s = {}), (s[r.name] = o + 1), s)),
            });
          case 'TIME_START':
            return t(t({}, A), {
              timings: t(
                t({}, A.timings),
                ((n = {}),
                (n[r.name] = {
                  start: performance.now() || +new Date(),
                }),
                n)
              ),
            });
          case 'TIME_END':
            var i = A.timings[r.name],
              a = performance.now() || +new Date(),
              c = a - i.start;
            return t(t({}, A), {
              timings: t(
                t({}, A.timings),
                ((B = {}),
                (B[r.name] = t(t({}, i), {
                  end: a,
                  time: c,
                })),
                B)
              ),
            });
          default:
            return A;
        }
      });
  });
  E(p);
  p.initialState;
  var N = d(function (A, e) {
    (e.__esModule = !0),
      (e.default = function (A) {
        f.update(p.default(f.state, A));
      });
  });
  E(N);
  var K = d(function (A, e) {
    (e.__esModule = !0),
      (e.timeEnd = e.timeStart = e.count = void 0),
      (e.count = function (A) {
        return {
          type: 'COUNT',
          name: A,
        };
      }),
      (e.timeStart = function (A) {
        return {
          type: 'TIME_START',
          name: A,
        };
      }),
      (e.timeEnd = function (A) {
        return {
          type: 'TIME_END',
          name: A,
        };
      });
  });
  E(K);
  K.timeEnd, K.timeStart, K.count;
  var m = d(function (A, e) {
    (e.__esModule = !0),
      (e.stop = e.start = void 0),
      (e.start = function (A) {
        N.default(K.timeStart(A));
      }),
      (e.stop = function (A) {
        var e =
          null === f.state || void 0 === f.state ? void 0 : f.state.timings[A];
        return e && !e.end
          ? (N.default(K.timeEnd(A)),
            {
              method: 'log',
              data: [A + ': ' + f.state.timings[A].time + 'ms'],
            })
          : {
              method: 'warn',
              data: ["Timer '" + A + "' does not exist"],
            };
      });
  });
  E(m);
  m.stop, m.start;
  var I = d(function (A, e) {
    (e.__esModule = !0),
      (e.increment = void 0),
      (e.increment = function (A) {
        return (
          N.default(K.count(A)),
          {
            method: 'log',
            data: [A + ': ' + f.state.count[A]],
          }
        );
      });
  });
  E(I);
  I.increment;
  var T = d(function (A, e) {
    var t =
      (h && h.__spreadArrays) ||
      function () {
        for (var A = 0, e = 0, t = arguments.length; e < t; e++)
          A += arguments[e].length;
        var r = Array(A),
          s = 0;
        for (e = 0; e < t; e++)
          for (var n = arguments[e], B = 0, o = n.length; B < o; B++, s++)
            r[s] = n[B];
        return r;
      };
    (e.__esModule = !0),
      (e.test = void 0),
      (e.test = function (A) {
        for (var e = [], r = 1; r < arguments.length; r++)
          e[r - 1] = arguments[r];
        return (
          !A &&
          (0 === e.length && e.push('console.assert'),
          {
            method: 'error',
            data: t(['Assertion failed:'], e),
          })
        );
      });
  });
  E(T);
  T.test;
  var R = d(function (A, e) {
    var t =
        (h && h.__assign) ||
        function () {
          return (t =
            Object.assign ||
            function (A) {
              for (var e, t = 1, r = arguments.length; t < r; t++)
                for (var s in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, s) && (A[s] = e[s]);
              return A;
            }).apply(this, arguments);
        },
      r =
        (h && h.__spreadArrays) ||
        function () {
          for (var A = 0, e = 0, t = arguments.length; e < t; e++)
            A += arguments[e].length;
          var r = Array(A),
            s = 0;
          for (e = 0; e < t; e++)
            for (var n = arguments[e], B = 0, o = n.length; B < o; B++, s++)
              r[s] = n[B];
          return r;
        };
    (e.__esModule = !0),
      (e.default = function (A, e, s) {
        var n = s || H.default();
        switch (A) {
          case 'clear':
            return {
              method: A,
              id: n,
            };
          case 'count':
            return (
              !!(B = 'string' == typeof e[0] ? e[0] : 'default') &&
              t(t({}, I.increment(B)), {
                id: n,
              })
            );
          case 'time':
          case 'timeEnd':
            var B;
            return (
              !!(B = 'string' == typeof e[0] ? e[0] : 'default') &&
              ('time' === A
                ? (m.start(B), !1)
                : t(t({}, m.stop(B)), {
                    id: n,
                  }))
            );
          case 'assert':
            if (0 !== e.length) {
              var o = T.test.apply(T, r([e[0]], e.slice(1)));
              if (o)
                return t(t({}, o), {
                  id: n,
                });
            }
            return !1;
          case 'error':
            return {
              method: A,
              id: n,
              data: e.map(function (A) {
                try {
                  return A.stack || A;
                } catch (e) {
                  return A;
                }
              }),
            };
          default:
            return {
              method: A,
              id: n,
              data: e,
            };
        }
      });
  });
  E(R);
  var O = d(function (A, e) {
    var t;
    (e.__esModule = !0),
      (function (A) {
        (A[(A.infinity = 0)] = 'infinity'),
          (A[(A.minusInfinity = 1)] = 'minusInfinity'),
          (A[(A.minusZero = 2)] = 'minusZero');
      })(t || (t = {})),
      (e.default = {
        type: 'Arithmetic',
        shouldTransform: function (A, e) {
          return (
            'number' === A &&
            (e === 1 / 0 ||
              e === -1 / 0 ||
              (function (A) {
                return 1 / A == -1 / 0;
              })(e))
          );
        },
        toSerializable: function (A) {
          return A === 1 / 0
            ? t.infinity
            : A === -1 / 0
            ? t.minusInfinity
            : t.minusZero;
        },
        fromSerializable: function (A) {
          return A === t.infinity
            ? 1 / 0
            : A === t.minusInfinity
            ? -1 / 0
            : A === t.minusZero
            ? -0
            : A;
        },
      });
  });
  E(O);
  var y = d(function (A, e) {
    (e.__esModule = !0),
      (e.default = {
        type: 'Function',
        shouldTransform: function (A, e) {
          return 'function' == typeof e;
        },
        toSerializable: function (A) {
          var e = '';
          try {
            e = A.toString().substring(e.indexOf('{') + 1, e.lastIndexOf('}'));
          } catch (A) {}
          return {
            name: A.name,
            body: e,
            proto: Object.getPrototypeOf(A).constructor.name,
          };
        },
        fromSerializable: function (A) {
          try {
            var e = function () {};
            return (
              'string' == typeof A.name &&
                Object.defineProperty(e, 'name', {
                  value: A.name,
                  writable: !1,
                }),
              'string' == typeof A.body &&
                Object.defineProperty(e, 'body', {
                  value: A.body,
                  writable: !1,
                }),
              'string' == typeof A.proto &&
                (e.constructor = {
                  name: A.proto,
                }),
              e
            );
          } catch (e) {
            return A;
          }
        },
      });
  });
  E(y);
  var L = d(function (A, e) {
    e.__esModule = !0;
    var t = document.implementation.createHTMLDocument('sandbox');

    function r(A) {
      for (var e = {}, t = 0, r = A.attributes; t < r.length; t++) {
        var s = r[t];
        e[s.name] = s.value;
      }
      return e;
    }
    e.default = {
      type: 'HTMLElement',
      shouldTransform: function (A, e) {
        return (
          e &&
          e.children &&
          'string' == typeof e.innerHTML &&
          'string' == typeof e.tagName
        );
      },
      toSerializable: function (A) {
        return {
          tagName: A.tagName.toLowerCase(),
          attributes: r(A),
          innerHTML: A.innerHTML,
        };
      },
      fromSerializable: function (A) {
        try {
          var e = t.createElement(A.tagName);
          e.innerHTML = A.innerHTML;
          for (var r = 0, s = Object.keys(A.attributes); r < s.length; r++) {
            var n = s[r];
            try {
              e.setAttribute(n, A.attributes[n]);
            } catch (A) {}
          }
          return e;
        } catch (e) {
          return A;
        }
      },
    };
  });
  E(L);
  var b = d(function (A, e) {
    var t =
      (h && h.__assign) ||
      function () {
        return (t =
          Object.assign ||
          function (A) {
            for (var e, t = 1, r = arguments.length; t < r; t++)
              for (var s in (e = arguments[t]))
                Object.prototype.hasOwnProperty.call(e, s) && (A[s] = e[s]);
            return A;
          }).apply(this, arguments);
      };
    (e.__esModule = !0),
      (e.default = {
        type: 'Map',
        shouldTransform: function (A, e) {
          return e && e.constructor && 'Map' === e.constructor.name;
        },
        toSerializable: function (A) {
          var e = {};
          return (
            A.forEach(function (A, t) {
              var r = 'object' == typeof t ? JSON.stringify(t) : t;
              e[r] = A;
            }),
            {
              name: 'Map',
              body: e,
              proto: Object.getPrototypeOf(A).constructor.name,
            }
          );
        },
        fromSerializable: function (A) {
          var e = A.body,
            r = t({}, e);
          return (
            'string' == typeof A.proto &&
              (r.constructor = {
                name: A.proto,
              }),
            r
          );
        },
      });
  });
  E(b);
  var S = d(function (A, e) {
    e.__esModule = !0;
    var t = /^#*@(t|r)$/,
      r = (0, eval)('this'),
      s = 'function' == typeof ArrayBuffer,
      n = 'function' == typeof Map,
      B = 'function' == typeof Set,
      o = [
        'Int8Array',
        'Uint8Array',
        'Uint8ClampedArray',
        'Int16Array',
        'Uint16Array',
        'Int32Array',
        'Uint32Array',
        'Float32Array',
        'Float64Array',
      ],
      i = Array.prototype.slice,
      a = {
        serialize: function (A) {
          return JSON.stringify(A);
        },
        deserialize: function (A) {
          return JSON.parse(A);
        },
      },
      c = (function () {
        function A(A, e) {
          (this.references = A),
            (this.transforms = e),
            (this.circularCandidates = []),
            (this.circularCandidatesDescrs = []),
            (this.circularRefCount = 0);
        }
        return (
          (A._createRefMark = function (A) {
            var e = Object.create(null);
            return (e['@r'] = A), e;
          }),
          (A.prototype._createCircularCandidate = function (A, e, t) {
            this.circularCandidates.push(A),
              this.circularCandidatesDescrs.push({
                parent: e,
                key: t,
                refIdx: -1,
              });
          }),
          (A.prototype._applyTransform = function (A, e, t, r) {
            var s = Object.create(null),
              n = r.toSerializable(A);
            return (
              'object' == typeof n && this._createCircularCandidate(A, e, t),
              (s['@t'] = r.type),
              (s.data = this._handleValue(
                function () {
                  return n;
                },
                e,
                t
              )),
              s
            );
          }),
          (A.prototype._handleArray = function (A) {
            for (
              var e = [],
                t = function (t) {
                  e[t] = r._handleValue(
                    function () {
                      return A[t];
                    },
                    e,
                    t
                  );
                },
                r = this,
                s = 0;
              s < A.length;
              s++
            )
              t(s);
            return e;
          }),
          (A.prototype._handlePlainObject = function (A) {
            var e,
              r,
              s = Object.create(null),
              n = function (e) {
                if (Reflect.has(A, e)) {
                  var r = t.test(e) ? '#' + e : e;
                  s[r] = B._handleValue(
                    function () {
                      return A[e];
                    },
                    s,
                    r
                  );
                }
              },
              B = this;
            for (var o in A) n(o);
            var i =
              null ===
                (r =
                  null === (e = null == A ? void 0 : A.__proto__) ||
                  void 0 === e
                    ? void 0
                    : e.constructor) || void 0 === r
                ? void 0
                : r.name;
            return (
              i &&
                'Object' !== i &&
                (s.constructor = {
                  name: i,
                }),
              s
            );
          }),
          (A.prototype._handleObject = function (A, e, t) {
            return (
              this._createCircularCandidate(A, e, t),
              Array.isArray(A)
                ? this._handleArray(A)
                : this._handlePlainObject(A)
            );
          }),
          (A.prototype._ensureCircularReference = function (e) {
            var t = this.circularCandidates.indexOf(e);
            if (t > -1) {
              var r = this.circularCandidatesDescrs[t];
              return (
                -1 === r.refIdx &&
                  (r.refIdx = r.parent ? ++this.circularRefCount : 0),
                A._createRefMark(r.refIdx)
              );
            }
            return null;
          }),
          (A.prototype._handleValue = function (A, e, t) {
            try {
              var r = A(),
                s = typeof r,
                n = 'object' === s && null !== r;
              if (n) {
                var B = this._ensureCircularReference(r);
                if (B) return B;
              }
              for (var o = 0, i = this.transforms; o < i.length; o++) {
                var a = i[o];
                if (a.shouldTransform(s, r))
                  return this._applyTransform(r, e, t, a);
              }
              return n ? this._handleObject(r, e, t) : r;
            } catch (A) {
              try {
                return this._handleValue(
                  function () {
                    return A instanceof Error ? A : new Error(A);
                  },
                  e,
                  t
                );
              } catch (A) {
                return null;
              }
            }
          }),
          (A.prototype.transform = function () {
            for (
              var e = this,
                t = [
                  this._handleValue(
                    function () {
                      return e.references;
                    },
                    null,
                    null
                  ),
                ],
                r = 0,
                s = this.circularCandidatesDescrs;
              r < s.length;
              r++
            ) {
              var n = s[r];
              n.refIdx > 0 &&
                ((t[n.refIdx] = n.parent[n.key]),
                (n.parent[n.key] = A._createRefMark(n.refIdx)));
            }
            return t;
          }),
          A
        );
      })(),
      Q = (function () {
        function A(A, e) {
          (this.activeTransformsStack = []),
            (this.visitedRefs = Object.create(null)),
            (this.references = A),
            (this.transformMap = e);
        }
        return (
          (A.prototype._handlePlainObject = function (A) {
            var e = Object.create(null);
            for (var r in ('constructor' in A &&
              ((A.constructor && 'string' == typeof A.constructor.name) ||
                (A.constructor = {
                  name: 'Object',
                })),
            A))
              A.hasOwnProperty(r) &&
                (this._handleValue(A[r], A, r),
                t.test(r) && ((e[r.substring(1)] = A[r]), delete A[r]));
            for (var s in e) A[s] = e[s];
          }),
          (A.prototype._handleTransformedObject = function (A, e, t) {
            var r = A['@t'],
              s = this.transformMap[r];
            if (!s)
              throw new Error('Can\'t find transform for "' + r + '" type.');
            this.activeTransformsStack.push(A),
              this._handleValue(A.data, A, 'data'),
              this.activeTransformsStack.pop(),
              (e[t] = s.fromSerializable(A.data));
          }),
          (A.prototype._handleCircularSelfRefDuringTransform = function (
            A,
            e,
            t
          ) {
            var r = this.references;
            Object.defineProperty(e, t, {
              val: void 0,
              configurable: !0,
              enumerable: !0,
              get: function () {
                return void 0 === this.val && (this.val = r[A]), this.val;
              },
              set: function (A) {
                this.val = A;
              },
            });
          }),
          (A.prototype._handleCircularRef = function (A, e, t) {
            this.activeTransformsStack.includes(this.references[A])
              ? this._handleCircularSelfRefDuringTransform(A, e, t)
              : (this.visitedRefs[A] ||
                  ((this.visitedRefs[A] = !0),
                  this._handleValue(this.references[A], this.references, A)),
                (e[t] = this.references[A]));
          }),
          (A.prototype._handleValue = function (A, e, t) {
            if ('object' == typeof A && null !== A) {
              var r = A['@r'];
              if (void 0 !== r) this._handleCircularRef(r, e, t);
              else if (A['@t']) this._handleTransformedObject(A, e, t);
              else if (Array.isArray(A))
                for (var s = 0; s < A.length; s++)
                  this._handleValue(A[s], A, s);
              else this._handlePlainObject(A);
            }
          }),
          (A.prototype.transform = function () {
            return (
              (this.visitedRefs[0] = !0),
              this._handleValue(this.references[0], this.references, 0),
              this.references[0]
            );
          }),
          A
        );
      })(),
      l = [
        {
          type: '[[NaN]]',
          shouldTransform: function (A, e) {
            return 'number' === A && isNaN(e);
          },
          toSerializable: function () {
            return '';
          },
          fromSerializable: function () {
            return NaN;
          },
        },
        {
          type: '[[undefined]]',
          shouldTransform: function (A) {
            return 'undefined' === A;
          },
          toSerializable: function () {
            return '';
          },
          fromSerializable: function () {},
        },
        {
          type: '[[Date]]',
          shouldTransform: function (A, e) {
            return e instanceof Date;
          },
          toSerializable: function (A) {
            return A.getTime();
          },
          fromSerializable: function (A) {
            var e = new Date();
            return e.setTime(A), e;
          },
        },
        {
          type: '[[RegExp]]',
          shouldTransform: function (A, e) {
            return e instanceof RegExp;
          },
          toSerializable: function (A) {
            var e = {
              src: A.source,
              flags: '',
            };
            return (
              A.global && (e.flags += 'g'),
              A.ignoreCase && (e.flags += 'i'),
              A.multiline && (e.flags += 'm'),
              e
            );
          },
          fromSerializable: function (A) {
            return new RegExp(A.src, A.flags);
          },
        },
        {
          type: '[[Error]]',
          shouldTransform: function (A, e) {
            return e instanceof Error;
          },
          toSerializable: function (A) {
            return {
              name: A.name,
              message: A.message,
              stack: A.stack,
            };
          },
          fromSerializable: function (A) {
            var e = new (r[A.name] || Error)(A.message);
            return (e.stack = A.stack), e;
          },
        },
        {
          type: '[[ArrayBuffer]]',
          shouldTransform: function (A, e) {
            return s && e instanceof ArrayBuffer;
          },
          toSerializable: function (A) {
            var e = new Int8Array(A);
            return i.call(e);
          },
          fromSerializable: function (A) {
            if (s) {
              var e = new ArrayBuffer(A.length);
              return new Int8Array(e).set(A), e;
            }
            return A;
          },
        },
        {
          type: '[[TypedArray]]',
          shouldTransform: function (A, e) {
            for (var t = 0, s = o; t < s.length; t++) {
              var n = s[t];
              if ('function' == typeof r[n] && e instanceof r[n]) return !0;
            }
            return !1;
          },
          toSerializable: function (A) {
            return {
              ctorName: A.constructor.name,
              arr: i.call(A),
            };
          },
          fromSerializable: function (A) {
            return 'function' == typeof r[A.ctorName]
              ? new r[A.ctorName](A.arr)
              : A.arr;
          },
        },
        {
          type: '[[Map]]',
          shouldTransform: function (A, e) {
            return n && e instanceof Map;
          },
          toSerializable: function (A) {
            var e = [];
            return (
              A.forEach(function (A, t) {
                e.push(t), e.push(A);
              }),
              e
            );
          },
          fromSerializable: function (A) {
            if (n) {
              for (var e = new Map(), t = 0; t < A.length; t += 2)
                e.set(A[t], A[t + 1]);
              return e;
            }
            for (var r = [], s = 0; s < A.length; s += 2)
              r.push([A[t], A[t + 1]]);
            return r;
          },
        },
        {
          type: '[[Set]]',
          shouldTransform: function (A, e) {
            return B && e instanceof Set;
          },
          toSerializable: function (A) {
            var e = [];
            return (
              A.forEach(function (A) {
                e.push(A);
              }),
              e
            );
          },
          fromSerializable: function (A) {
            if (B) {
              for (var e = new Set(), t = 0; t < A.length; t++) e.add(A[t]);
              return e;
            }
            return A;
          },
        },
      ],
      w = (function () {
        function A(A) {
          (this.transforms = []),
            (this.transformsMap = Object.create(null)),
            (this.serializer = A || a),
            this.addTransforms(l);
        }
        return (
          (A.prototype.addTransforms = function (A) {
            for (
              var e = 0, t = (A = Array.isArray(A) ? A : [A]);
              e < t.length;
              e++
            ) {
              var r = t[e];
              if (this.transformsMap[r.type])
                throw new Error(
                  'Transform with type "' + r.type + '" was already added.'
                );
              this.transforms.push(r), (this.transformsMap[r.type] = r);
            }
            return this;
          }),
          (A.prototype.removeTransforms = function (A) {
            for (
              var e = 0, t = (A = Array.isArray(A) ? A : [A]);
              e < t.length;
              e++
            ) {
              var r = t[e],
                s = this.transforms.indexOf(r);
              s > -1 && this.transforms.splice(s, 1),
                delete this.transformsMap[r.type];
            }
            return this;
          }),
          (A.prototype.encode = function (A) {
            var e = new c(A, this.transforms).transform();
            return this.serializer.serialize(e);
          }),
          (A.prototype.decode = function (A) {
            var e = this.serializer.deserialize(A);
            return new Q(e, this.transformsMap).transform();
          }),
          A
        );
      })();
    e.default = w;
  });
  E(S);
  var M = d(function (A, e) {
    (e.__esModule = !0), (e.Decode = e.Encode = void 0);
    var t = [L.default, y.default, O.default, b.default],
      r = new S.default();
    r.addTransforms(t),
      (e.Encode = function (A) {
        return JSON.parse(r.encode(A));
      }),
      (e.Decode = function (A) {
        return r.decode(JSON.stringify(A));
      });
  });
  E(M);
  M.Decode;
  var D = M.Encode,
    _ = E(
      d(function (A, e) {
        (e.__esModule = !0),
          (e.default = function (A, e, t) {
            void 0 === t && (t = !0);
            for (
              var r = A,
                s = {
                  pointers: {},
                  src: {
                    npm: 'https://npmjs.com/package/console-feed',
                    github: 'https://github.com/samdenty99/console-feed',
                  },
                },
                n = function (A) {
                  var n = r[A];
                  (r[A] = function () {
                    n.apply(this, arguments);
                    var r = [].slice.call(arguments);
                    setTimeout(function () {
                      var s = R.default(A, r);
                      if (s) {
                        var n = s;
                        t && (n = M.Encode(s)), e(n, s);
                      }
                    });
                  }),
                    (s.pointers[A] = n);
                },
                B = 0,
                o = F.default;
              B < o.length;
              B++
            ) {
              n(o[B]);
            }
            return (r.feed = s), r;
          });
      })
    );
  const v = window.history.__proto__,
    x = [];
  let P = -1,
    z = !1;

  function V(A) {
    w({
      type: 'urlchange',
      url: A,
      back: P > 0,
      forward: P < x.length - 1,
    });
  }

  function X(A, e) {
    x.splice(P + 1),
      x.push({
        url: A,
        state: e,
      }),
      (P = x.length - 1);
  }

  function J(A) {
    return `${A.pathname}${A.hash}`;
  }
  const G = (A) => {
    if (null === A) return;
    const e = document.cookie.replace(
      new RegExp(
        '(?:(?:^|.*;\\s*)csb_sandbox_secret\\s*\\=\\s*([^;]*).*$)|^.*$'
      ),
      '$1'
    );
    ((e && !A) || (A && !e) || e !== A) &&
      (A
        ? ((document.cookie = `csb_sandbox_secret=${A};samesite=none;secure;`),
          setTimeout(() => {
            location.reload();
          }, 1e3))
        : (document.cookie =
            'csb_sandbox_secret=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'));
  };
  o ||
    (_(window.console, async (A) => {
      await a,
        w({
          type: 'console',
          log: A,
        });
    }),
    g(function (A, e) {
      if (e && 'evaluate' === A.type) {
        let e = null,
          t = !1;
        try {
          if (A.command && '{' === A.command.charAt(0))
            try {
              const e = `(${A.command})`;
              new Function(e), (A.command = e);
            } catch (A) {}
          e = (0, eval)(A.command);
        } catch (A) {
          (e = A), (t = !0);
        }
        try {
          w({
            type: 'eval-result',
            error: t,
            result: D(e),
          });
        } catch (A) {
          console.error(A);
        }
      }
    }),
    Object.assign(window.history, {
      go(A) {
        const e = P + A;
        if (e >= 0 && e <= x.length - 1) {
          P = e;
          const { url: A, state: t } = x[P],
            r = document.location.href;
          v.replaceState.call(window.history, t, '', A);
          const s = document.location.href;
          V(s),
            window.dispatchEvent(
              new PopStateEvent('popstate', {
                state: t,
              })
            ),
            -1 !== s.indexOf('#') &&
              ((z = !0),
              window.dispatchEvent(
                new HashChangeEvent('hashchange', {
                  oldURL: r,
                  newURL: s,
                })
              ));
        }
      },
      back() {
        window.history.go(-1);
      },
      forward() {
        window.history.go(1);
      },
      pushState(A, e, t) {
        v.replaceState.call(window.history, A, e, t),
          X(t, A),
          V(document.location.href);
      },
      replaceState(A, e, t) {
        v.replaceState.call(window.history, A, e, t),
          (x[P] = {
            state: A,
            url: t,
          }),
          V(document.location.href);
      },
    }),
    Object.defineProperties(window.history, {
      length: {
        get: () => x.length,
      },
      state: {
        get: () => x[P].state,
      },
    }),
    window.addEventListener('hashchange', () => {
      z ? (z = !1) : (X(J(document.location), null), V(document.location.href));
    }),
    X(J(document.location), null),
    setTimeout(() => {
      V(document.location.href);
    }),
    g(function (A, e) {
      e &&
        ('urlback' === A.type
          ? history.back()
          : 'urlforward' === A.type
          ? history.forward()
          : 'refresh' === A.type && document.location.reload());
    }),
    (() => {
      const A = (A) => {
        if (A.data && 'preview-secret' === A.data.$type) {
          const { previewSecret: e } = A.data;
          G(e);
        }
      };
      window.addEventListener('message', A);
    })(),
    (function () {
      let A;
      g((e) => {
        'take-screenshot' === e.type
          ? Promise.resolve()
              .then(function () {
                return lB;
              })
              .then((A) => {
                (0, A.default)(document.documentElement, {
                  useCORS: (A) => !(e.data.isPrivateSandbox || !A),
                  proxy: 'https://h2c-proxy.csb.dev/',
                  logging: !1,
                  allowTaint: !1,
                }).then((A) => {
                  const e = document.createElement('canvas'),
                    t = document.documentElement.scrollLeft,
                    r = document.documentElement.scrollTop;
                  (e.width = A.width - t),
                    (e.height = A.height - r),
                    e
                      .getContext('2d')
                      .drawImage(
                        A,
                        t,
                        r,
                        e.width,
                        e.height,
                        0,
                        0,
                        e.width,
                        e.height
                      ),
                    w({
                      type: 'screenshot-generated',
                      screenshot: e.toDataURL(),
                    });
                });
              })
          : 'show-screenshot-cursor' === e.type
          ? ((A = document.documentElement.style.cursor),
            (document.documentElement.style.cursor =
              'url(\'data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16H0V8Z" fill="%23FF3B30"/></svg>\'), auto'))
          : 'hide-screenshot-cursor' === e.type &&
            (document.documentElement.style.cursor = A);
      }),
        window.addEventListener('keydown', (A) => {
          's' === A.key &&
            A.shiftKey &&
            (A.metaKey || A.ctrlKey) &&
            (A.preventDefault(),
            w({
              type: 'screenshot-requested-from-preview',
            }));
        });
    })(),
    w({
      type: 'initialized',
    })),
    setTimeout(() => {
      'function' == typeof window.__puppeteer__ && window.__puppeteer__('done');
    }, 1e3);
  class k {
    constructor(A, e, t, r) {
      (this.left = A), (this.top = e), (this.width = t), (this.height = r);
    }
    add(A, e, t, r) {
      return new k(
        this.left + A,
        this.top + e,
        this.width + t,
        this.height + r
      );
    }
    static fromClientRect(A) {
      return new k(A.left, A.top, A.width, A.height);
    }
  }
  const W = (A) => k.fromClientRect(A.getBoundingClientRect());
  for (
    var Y = function (A) {
        for (var e = [], t = 0, r = A.length; t < r; ) {
          var s = A.charCodeAt(t++);
          if (s >= 55296 && s <= 56319 && t < r) {
            var n = A.charCodeAt(t++);
            56320 == (64512 & n)
              ? e.push(((1023 & s) << 10) + (1023 & n) + 65536)
              : (e.push(s), t--);
          } else e.push(s);
        }
        return e;
      },
      j = function () {
        for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
        if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
        var t = A.length;
        if (!t) return '';
        for (var r = [], s = -1, n = ''; ++s < t; ) {
          var B = A[s];
          B <= 65535
            ? r.push(B)
            : ((B -= 65536), r.push(55296 + (B >> 10), (B % 1024) + 56320)),
            (s + 1 === t || r.length > 16384) &&
              ((n += String.fromCharCode.apply(String, r)), (r.length = 0));
        }
        return n;
      },
      q = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      Z = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
      $ = 0;
    $ < q.length;
    $++
  )
    Z[q.charCodeAt($)] = $;
  var AA,
    eA = function (A, e, t) {
      return A.slice
        ? A.slice(e, t)
        : new Uint16Array(Array.prototype.slice.call(A, e, t));
    },
    tA = (function () {
      function A(A, e, t, r, s, n) {
        (this.initialValue = A),
          (this.errorValue = e),
          (this.highStart = t),
          (this.highValueIndex = r),
          (this.index = s),
          (this.data = n);
      }
      return (
        (A.prototype.get = function (A) {
          var e;
          if (A >= 0) {
            if (A < 55296 || (A > 56319 && A <= 65535))
              return (
                (e = ((e = this.index[A >> 5]) << 2) + (31 & A)), this.data[e]
              );
            if (A <= 65535)
              return (
                (e =
                  ((e = this.index[2048 + ((A - 55296) >> 5)]) << 2) +
                  (31 & A)),
                this.data[e]
              );
            if (A < this.highStart)
              return (
                (e = 2080 + (A >> 11)),
                (e = this.index[e]),
                (e += (A >> 5) & 63),
                (e = ((e = this.index[e]) << 2) + (31 & A)),
                this.data[e]
              );
            if (A <= 1114111) return this.data[this.highValueIndex];
          }
          return this.errorValue;
        }),
        A
      );
    })(),
    rA = 10,
    sA = 13,
    nA = 15,
    BA = 17,
    oA = 18,
    iA = 19,
    aA = 20,
    cA = 21,
    QA = 22,
    lA = 24,
    wA = 25,
    UA = 26,
    uA = 27,
    gA = 28,
    CA = 30,
    hA = 32,
    EA = 33,
    dA = 34,
    FA = 35,
    HA = 37,
    fA = 38,
    pA = 39,
    NA = 40,
    KA = 42,
    mA = (function (A) {
      var e,
        t,
        r,
        s = (function (A) {
          var e,
            t,
            r,
            s,
            n,
            B = 0.75 * A.length,
            o = A.length,
            i = 0;
          '=' === A[A.length - 1] && (B--, '=' === A[A.length - 2] && B--);
          var a =
              'undefined' != typeof ArrayBuffer &&
              'undefined' != typeof Uint8Array &&
              void 0 !== Uint8Array.prototype.slice
                ? new ArrayBuffer(B)
                : new Array(B),
            c = Array.isArray(a) ? a : new Uint8Array(a);
          for (e = 0; e < o; e += 4)
            (t = Z[A.charCodeAt(e)]),
              (r = Z[A.charCodeAt(e + 1)]),
              (s = Z[A.charCodeAt(e + 2)]),
              (n = Z[A.charCodeAt(e + 3)]),
              (c[i++] = (t << 2) | (r >> 4)),
              (c[i++] = ((15 & r) << 4) | (s >> 2)),
              (c[i++] = ((3 & s) << 6) | (63 & n));
          return a;
        })(A),
        n = Array.isArray(s)
          ? (function (A) {
              for (var e = A.length, t = [], r = 0; r < e; r += 4)
                t.push(
                  (A[r + 3] << 24) | (A[r + 2] << 16) | (A[r + 1] << 8) | A[r]
                );
              return t;
            })(s)
          : new Uint32Array(s),
        B = Array.isArray(s)
          ? (function (A) {
              for (var e = A.length, t = [], r = 0; r < e; r += 2)
                t.push((A[r + 1] << 8) | A[r]);
              return t;
            })(s)
          : new Uint16Array(s),
        o = eA(B, 12, n[4] / 2),
        i =
          2 === n[5]
            ? eA(B, (24 + n[4]) / 2)
            : ((e = n),
              (t = Math.ceil((24 + n[4]) / 4)),
              e.slice
                ? e.slice(t, r)
                : new Uint32Array(Array.prototype.slice.call(e, t, r)));
      return new tA(n[0], n[1], n[2], n[3], o, i);
    })(
      'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA'
    ),
    IA = [CA, 36],
    TA = [1, 2, 3, 5],
    RA = [rA, 8],
    OA = [uA, UA],
    yA = TA.concat(RA),
    LA = [fA, pA, NA, dA, FA],
    bA = [nA, sA],
    SA = function (A, e, t, r) {
      var s = r[t];
      if (Array.isArray(A) ? -1 !== A.indexOf(s) : A === s)
        for (var n = t; n <= r.length; ) {
          if ((i = r[++n]) === e) return !0;
          if (i !== rA) break;
        }
      if (s === rA)
        for (n = t; n > 0; ) {
          var B = r[--n];
          if (Array.isArray(A) ? -1 !== A.indexOf(B) : A === B)
            for (var o = t; o <= r.length; ) {
              var i;
              if ((i = r[++o]) === e) return !0;
              if (i !== rA) break;
            }
          if (B !== rA) break;
        }
      return !1;
    },
    MA = function (A, e) {
      for (var t = A; t >= 0; ) {
        var r = e[t];
        if (r !== rA) return r;
        t--;
      }
      return 0;
    },
    DA = function (A, e, t, r, s) {
      if (0 === t[r]) return '×';
      var n = r - 1;
      if (Array.isArray(s) && !0 === s[n]) return '×';
      var B = n - 1,
        o = n + 1,
        i = e[n],
        a = B >= 0 ? e[B] : 0,
        c = e[o];
      if (2 === i && 3 === c) return '×';
      if (-1 !== TA.indexOf(i)) return '!';
      if (-1 !== TA.indexOf(c)) return '×';
      if (-1 !== RA.indexOf(c)) return '×';
      if (8 === MA(n, e)) return '÷';
      if (11 === mA.get(A[n]) && (c === HA || c === hA || c === EA)) return '×';
      if (7 === i || 7 === c) return '×';
      if (9 === i) return '×';
      if (-1 === [rA, sA, nA].indexOf(i) && 9 === c) return '×';
      if (-1 !== [BA, oA, iA, lA, gA].indexOf(c)) return '×';
      if (MA(n, e) === QA) return '×';
      if (SA(23, QA, n, e)) return '×';
      if (SA([BA, oA], cA, n, e)) return '×';
      if (SA(12, 12, n, e)) return '×';
      if (i === rA) return '÷';
      if (23 === i || 23 === c) return '×';
      if (16 === c || 16 === i) return '÷';
      if (-1 !== [sA, nA, cA].indexOf(c) || 14 === i) return '×';
      if (36 === a && -1 !== bA.indexOf(i)) return '×';
      if (i === gA && 36 === c) return '×';
      if (c === aA && -1 !== IA.concat(aA, iA, wA, HA, hA, EA).indexOf(i))
        return '×';
      if (
        (-1 !== IA.indexOf(c) && i === wA) ||
        (-1 !== IA.indexOf(i) && c === wA)
      )
        return '×';
      if (
        (i === uA && -1 !== [HA, hA, EA].indexOf(c)) ||
        (-1 !== [HA, hA, EA].indexOf(i) && c === UA)
      )
        return '×';
      if (
        (-1 !== IA.indexOf(i) && -1 !== OA.indexOf(c)) ||
        (-1 !== OA.indexOf(i) && -1 !== IA.indexOf(c))
      )
        return '×';
      if (
        (-1 !== [uA, UA].indexOf(i) &&
          (c === wA || (-1 !== [QA, nA].indexOf(c) && e[o + 1] === wA))) ||
        (-1 !== [QA, nA].indexOf(i) && c === wA) ||
        (i === wA && -1 !== [wA, gA, lA].indexOf(c))
      )
        return '×';
      if (-1 !== [wA, gA, lA, BA, oA].indexOf(c))
        for (var Q = n; Q >= 0; ) {
          if ((l = e[Q]) === wA) return '×';
          if (-1 === [gA, lA].indexOf(l)) break;
          Q--;
        }
      if (-1 !== [uA, UA].indexOf(c))
        for (Q = -1 !== [BA, oA].indexOf(i) ? B : n; Q >= 0; ) {
          var l;
          if ((l = e[Q]) === wA) return '×';
          if (-1 === [gA, lA].indexOf(l)) break;
          Q--;
        }
      if (
        (fA === i && -1 !== [fA, pA, dA, FA].indexOf(c)) ||
        (-1 !== [pA, dA].indexOf(i) && -1 !== [pA, NA].indexOf(c)) ||
        (-1 !== [NA, FA].indexOf(i) && c === NA)
      )
        return '×';
      if (
        (-1 !== LA.indexOf(i) && -1 !== [aA, UA].indexOf(c)) ||
        (-1 !== LA.indexOf(c) && i === uA)
      )
        return '×';
      if (-1 !== IA.indexOf(i) && -1 !== IA.indexOf(c)) return '×';
      if (i === lA && -1 !== IA.indexOf(c)) return '×';
      if (
        (-1 !== IA.concat(wA).indexOf(i) && c === QA) ||
        (-1 !== IA.concat(wA).indexOf(c) && i === oA)
      )
        return '×';
      if (41 === i && 41 === c) {
        for (var w = t[n], U = 1; w > 0 && 41 === e[--w]; ) U++;
        if (U % 2 != 0) return '×';
      }
      return i === hA && c === EA ? '×' : '÷';
    },
    _A = function (A, e) {
      e ||
        (e = {
          lineBreak: 'normal',
          wordBreak: 'normal',
        });
      var t = (function (A, e) {
          void 0 === e && (e = 'strict');
          var t = [],
            r = [],
            s = [];
          return (
            A.forEach(function (A, n) {
              var B = mA.get(A);
              if (
                (B > 50 ? (s.push(!0), (B -= 50)) : s.push(!1),
                -1 !== ['normal', 'auto', 'loose'].indexOf(e) &&
                  -1 !== [8208, 8211, 12316, 12448].indexOf(A))
              )
                return r.push(n), t.push(16);
              if (4 === B || 11 === B) {
                if (0 === n) return r.push(n), t.push(CA);
                var o = t[n - 1];
                return -1 === yA.indexOf(o)
                  ? (r.push(r[n - 1]), t.push(o))
                  : (r.push(n), t.push(CA));
              }
              return (
                r.push(n),
                31 === B
                  ? t.push('strict' === e ? cA : HA)
                  : B === KA || 29 === B
                  ? t.push(CA)
                  : 43 === B
                  ? (A >= 131072 && A <= 196605) || (A >= 196608 && A <= 262141)
                    ? t.push(HA)
                    : t.push(CA)
                  : void t.push(B)
              );
            }),
            [r, t, s]
          );
        })(A, e.lineBreak),
        r = t[0],
        s = t[1],
        n = t[2];
      return (
        ('break-all' !== e.wordBreak && 'break-word' !== e.wordBreak) ||
          (s = s.map(function (A) {
            return -1 !== [wA, CA, KA].indexOf(A) ? HA : A;
          })),
        [
          r,
          s,
          'keep-all' === e.wordBreak
            ? n.map(function (e, t) {
                return e && A[t] >= 19968 && A[t] <= 40959;
              })
            : void 0,
        ]
      );
    },
    vA = (function () {
      function A(A, e, t, r) {
        (this.codePoints = A),
          (this.required = '!' === e),
          (this.start = t),
          (this.end = r);
      }
      return (
        (A.prototype.slice = function () {
          return j.apply(void 0, this.codePoints.slice(this.start, this.end));
        }),
        A
      );
    })();
  !(function (A) {
    (A[(A.STRING_TOKEN = 0)] = 'STRING_TOKEN'),
      (A[(A.BAD_STRING_TOKEN = 1)] = 'BAD_STRING_TOKEN'),
      (A[(A.LEFT_PARENTHESIS_TOKEN = 2)] = 'LEFT_PARENTHESIS_TOKEN'),
      (A[(A.RIGHT_PARENTHESIS_TOKEN = 3)] = 'RIGHT_PARENTHESIS_TOKEN'),
      (A[(A.COMMA_TOKEN = 4)] = 'COMMA_TOKEN'),
      (A[(A.HASH_TOKEN = 5)] = 'HASH_TOKEN'),
      (A[(A.DELIM_TOKEN = 6)] = 'DELIM_TOKEN'),
      (A[(A.AT_KEYWORD_TOKEN = 7)] = 'AT_KEYWORD_TOKEN'),
      (A[(A.PREFIX_MATCH_TOKEN = 8)] = 'PREFIX_MATCH_TOKEN'),
      (A[(A.DASH_MATCH_TOKEN = 9)] = 'DASH_MATCH_TOKEN'),
      (A[(A.INCLUDE_MATCH_TOKEN = 10)] = 'INCLUDE_MATCH_TOKEN'),
      (A[(A.LEFT_CURLY_BRACKET_TOKEN = 11)] = 'LEFT_CURLY_BRACKET_TOKEN'),
      (A[(A.RIGHT_CURLY_BRACKET_TOKEN = 12)] = 'RIGHT_CURLY_BRACKET_TOKEN'),
      (A[(A.SUFFIX_MATCH_TOKEN = 13)] = 'SUFFIX_MATCH_TOKEN'),
      (A[(A.SUBSTRING_MATCH_TOKEN = 14)] = 'SUBSTRING_MATCH_TOKEN'),
      (A[(A.DIMENSION_TOKEN = 15)] = 'DIMENSION_TOKEN'),
      (A[(A.PERCENTAGE_TOKEN = 16)] = 'PERCENTAGE_TOKEN'),
      (A[(A.NUMBER_TOKEN = 17)] = 'NUMBER_TOKEN'),
      (A[(A.FUNCTION = 18)] = 'FUNCTION'),
      (A[(A.FUNCTION_TOKEN = 19)] = 'FUNCTION_TOKEN'),
      (A[(A.IDENT_TOKEN = 20)] = 'IDENT_TOKEN'),
      (A[(A.COLUMN_TOKEN = 21)] = 'COLUMN_TOKEN'),
      (A[(A.URL_TOKEN = 22)] = 'URL_TOKEN'),
      (A[(A.BAD_URL_TOKEN = 23)] = 'BAD_URL_TOKEN'),
      (A[(A.CDC_TOKEN = 24)] = 'CDC_TOKEN'),
      (A[(A.CDO_TOKEN = 25)] = 'CDO_TOKEN'),
      (A[(A.COLON_TOKEN = 26)] = 'COLON_TOKEN'),
      (A[(A.SEMICOLON_TOKEN = 27)] = 'SEMICOLON_TOKEN'),
      (A[(A.LEFT_SQUARE_BRACKET_TOKEN = 28)] = 'LEFT_SQUARE_BRACKET_TOKEN'),
      (A[(A.RIGHT_SQUARE_BRACKET_TOKEN = 29)] = 'RIGHT_SQUARE_BRACKET_TOKEN'),
      (A[(A.UNICODE_RANGE_TOKEN = 30)] = 'UNICODE_RANGE_TOKEN'),
      (A[(A.WHITESPACE_TOKEN = 31)] = 'WHITESPACE_TOKEN'),
      (A[(A.EOF_TOKEN = 32)] = 'EOF_TOKEN');
  })(AA || (AA = {}));
  const xA = (A) => A >= 48 && A <= 57,
    PA = (A) => xA(A) || (A >= 65 && A <= 70) || (A >= 97 && A <= 102),
    zA = (A) => 10 === A || 9 === A || 32 === A,
    VA = (A) =>
      ((A) =>
        ((A) => A >= 97 && A <= 122)(A) || ((A) => A >= 65 && A <= 90)(A))(A) ||
      ((A) => A >= 128)(A) ||
      95 === A,
    XA = (A) => VA(A) || xA(A) || 45 === A,
    JA = (A) =>
      (A >= 0 && A <= 8) || 11 === A || (A >= 14 && A <= 31) || 127 === A,
    GA = (A, e) => 92 === A && 10 !== e,
    kA = (A, e, t) =>
      45 === A ? VA(e) || GA(e, t) : !!VA(A) || !(92 !== A || !GA(A, e)),
    WA = (A, e, t) =>
      43 === A || 45 === A
        ? !!xA(e) || (46 === e && xA(t))
        : xA(46 === A ? e : A),
    YA = (A) => {
      let e = 0,
        t = 1;
      (43 !== A[e] && 45 !== A[e]) || (45 === A[e] && (t = -1), e++);
      const r = [];
      for (; xA(A[e]); ) r.push(A[e++]);
      const s = r.length ? parseInt(j(...r), 10) : 0;
      46 === A[e] && e++;
      const n = [];
      for (; xA(A[e]); ) n.push(A[e++]);
      const B = n.length,
        o = B ? parseInt(j(...n), 10) : 0;
      (69 !== A[e] && 101 !== A[e]) || e++;
      let i = 1;
      (43 !== A[e] && 45 !== A[e]) || (45 === A[e] && (i = -1), e++);
      const a = [];
      for (; xA(A[e]); ) a.push(A[e++]);
      const c = a.length ? parseInt(j(...a), 10) : 0;
      return t * (s + o * Math.pow(10, -B)) * Math.pow(10, i * c);
    },
    jA = {
      type: AA.LEFT_PARENTHESIS_TOKEN,
    },
    qA = {
      type: AA.RIGHT_PARENTHESIS_TOKEN,
    },
    ZA = {
      type: AA.COMMA_TOKEN,
    },
    $A = {
      type: AA.SUFFIX_MATCH_TOKEN,
    },
    Ae = {
      type: AA.PREFIX_MATCH_TOKEN,
    },
    ee = {
      type: AA.COLUMN_TOKEN,
    },
    te = {
      type: AA.DASH_MATCH_TOKEN,
    },
    re = {
      type: AA.INCLUDE_MATCH_TOKEN,
    },
    se = {
      type: AA.LEFT_CURLY_BRACKET_TOKEN,
    },
    ne = {
      type: AA.RIGHT_CURLY_BRACKET_TOKEN,
    },
    Be = {
      type: AA.SUBSTRING_MATCH_TOKEN,
    },
    oe = {
      type: AA.BAD_URL_TOKEN,
    },
    ie = {
      type: AA.BAD_STRING_TOKEN,
    },
    ae = {
      type: AA.CDO_TOKEN,
    },
    ce = {
      type: AA.CDC_TOKEN,
    },
    Qe = {
      type: AA.COLON_TOKEN,
    },
    le = {
      type: AA.SEMICOLON_TOKEN,
    },
    we = {
      type: AA.LEFT_SQUARE_BRACKET_TOKEN,
    },
    Ue = {
      type: AA.RIGHT_SQUARE_BRACKET_TOKEN,
    },
    ue = {
      type: AA.WHITESPACE_TOKEN,
    },
    ge = {
      type: AA.EOF_TOKEN,
    };
  class Ce {
    constructor() {
      this._value = [];
    }
    write(A) {
      this._value = this._value.concat(Y(A));
    }
    read() {
      const A = [];
      let e = this.consumeToken();
      for (; e !== ge; ) A.push(e), (e = this.consumeToken());
      return A;
    }
    consumeToken() {
      const A = this.consumeCodePoint();
      switch (A) {
        case 34:
          return this.consumeStringToken(34);
        case 35:
          const e = this.peekCodePoint(0),
            t = this.peekCodePoint(1),
            r = this.peekCodePoint(2);
          if (XA(e) || GA(t, r)) {
            const A = kA(e, t, r) ? 2 : 1,
              s = this.consumeName();
            return {
              type: AA.HASH_TOKEN,
              value: s,
              flags: A,
            };
          }
          break;
        case 36:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), $A;
          break;
        case 39:
          return this.consumeStringToken(39);
        case 40:
          return jA;
        case 41:
          return qA;
        case 42:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), Be;
          break;
        case 43:
          if (WA(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case 44:
          return ZA;
        case 45:
          const s = A,
            n = this.peekCodePoint(0),
            B = this.peekCodePoint(1);
          if (WA(s, n, B))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (kA(s, n, B))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (45 === n && 62 === B)
            return this.consumeCodePoint(), this.consumeCodePoint(), ce;
          break;
        case 46:
          if (WA(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case 47:
          if (42 === this.peekCodePoint(0))
            for (this.consumeCodePoint(); ; ) {
              let A = this.consumeCodePoint();
              if (42 === A && ((A = this.consumeCodePoint()), 47 === A))
                return this.consumeToken();
              if (-1 === A) return this.consumeToken();
            }
          break;
        case 58:
          return Qe;
        case 59:
          return le;
        case 60:
          if (
            33 === this.peekCodePoint(0) &&
            45 === this.peekCodePoint(1) &&
            45 === this.peekCodePoint(2)
          )
            return this.consumeCodePoint(), this.consumeCodePoint(), ae;
          break;
        case 64:
          const o = this.peekCodePoint(0),
            i = this.peekCodePoint(1),
            a = this.peekCodePoint(2);
          if (kA(o, i, a)) {
            const A = this.consumeName();
            return {
              type: AA.AT_KEYWORD_TOKEN,
              value: A,
            };
          }
          break;
        case 91:
          return we;
        case 92:
          if (GA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case 93:
          return Ue;
        case 61:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), Ae;
          break;
        case 123:
          return se;
        case 125:
          return ne;
        case 117:
        case 85:
          const c = this.peekCodePoint(0),
            Q = this.peekCodePoint(1);
          return (
            43 !== c ||
              (!PA(Q) && 63 !== Q) ||
              (this.consumeCodePoint(), this.consumeUnicodeRangeToken()),
            this.reconsumeCodePoint(A),
            this.consumeIdentLikeToken()
          );
        case 124:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), te;
          if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), ee;
          break;
        case 126:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), re;
          break;
        case -1:
          return ge;
      }
      return zA(A)
        ? (this.consumeWhiteSpace(), ue)
        : xA(A)
        ? (this.reconsumeCodePoint(A), this.consumeNumericToken())
        : VA(A)
        ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken())
        : {
            type: AA.DELIM_TOKEN,
            value: j(A),
          };
    }
    consumeCodePoint() {
      const A = this._value.shift();
      return void 0 === A ? -1 : A;
    }
    reconsumeCodePoint(A) {
      this._value.unshift(A);
    }
    peekCodePoint(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }
    consumeUnicodeRangeToken() {
      const A = [];
      let e = this.consumeCodePoint();
      for (; PA(e) && A.length < 6; ) A.push(e), (e = this.consumeCodePoint());
      let t = !1;
      for (; 63 === e && A.length < 6; )
        A.push(e), (e = this.consumeCodePoint()), (t = !0);
      if (t) {
        const e = parseInt(j(...A.map((A) => (63 === A ? 48 : A))), 16),
          t = parseInt(j(...A.map((A) => (63 === A ? 70 : A))), 16);
        return {
          type: AA.UNICODE_RANGE_TOKEN,
          start: e,
          end: t,
        };
      }
      const r = parseInt(j(...A), 16);
      if (45 === this.peekCodePoint(0) && PA(this.peekCodePoint(1))) {
        this.consumeCodePoint(), (e = this.consumeCodePoint());
        const A = [];
        for (; PA(e) && A.length < 6; )
          A.push(e), (e = this.consumeCodePoint());
        const t = parseInt(j(...A), 16);
        return {
          type: AA.UNICODE_RANGE_TOKEN,
          start: r,
          end: t,
        };
      }
      return {
        type: AA.UNICODE_RANGE_TOKEN,
        start: r,
        end: r,
      };
    }
    consumeIdentLikeToken() {
      const A = this.consumeName();
      return 'url' === A.toLowerCase() && 40 === this.peekCodePoint(0)
        ? (this.consumeCodePoint(), this.consumeUrlToken())
        : 40 === this.peekCodePoint(0)
        ? (this.consumeCodePoint(),
          {
            type: AA.FUNCTION_TOKEN,
            value: A,
          })
        : {
            type: AA.IDENT_TOKEN,
            value: A,
          };
    }
    consumeUrlToken() {
      const A = [];
      if ((this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)))
        return {
          type: AA.URL_TOKEN,
          value: '',
        };
      const e = this.peekCodePoint(0);
      if (39 === e || 34 === e) {
        const A = this.consumeStringToken(this.consumeCodePoint());
        return A.type === AA.STRING_TOKEN &&
          (this.consumeWhiteSpace(),
          -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0))
          ? (this.consumeCodePoint(),
            {
              type: AA.URL_TOKEN,
              value: A.value,
            })
          : (this.consumeBadUrlRemnants(), oe);
      }
      for (;;) {
        const e = this.consumeCodePoint();
        if (-1 === e || 41 === e)
          return {
            type: AA.URL_TOKEN,
            value: j(...A),
          };
        if (zA(e))
          return (
            this.consumeWhiteSpace(),
            -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)
              ? (this.consumeCodePoint(),
                {
                  type: AA.URL_TOKEN,
                  value: j(...A),
                })
              : (this.consumeBadUrlRemnants(), oe)
          );
        if (34 === e || 39 === e || 40 === e || JA(e))
          return this.consumeBadUrlRemnants(), oe;
        if (92 === e) {
          if (!GA(e, this.peekCodePoint(0)))
            return this.consumeBadUrlRemnants(), oe;
          A.push(this.consumeEscapedCodePoint());
        } else A.push(e);
      }
    }
    consumeWhiteSpace() {
      for (; zA(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }
    consumeBadUrlRemnants() {
      for (;;) {
        let A = this.consumeCodePoint();
        if (41 === A || -1 === A) return;
        GA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }
    consumeStringSlice(A) {
      let e = '';
      for (; A > 0; ) {
        const t = Math.min(6e4, A);
        (e += j(...this._value.splice(0, t))), (A -= t);
      }
      return this._value.shift(), e;
    }
    consumeStringToken(A) {
      let e = '',
        t = 0;
      for (;;) {
        const r = this._value[t];
        if (-1 === r || void 0 === r || r === A)
          return (
            (e += this.consumeStringSlice(t)),
            {
              type: AA.STRING_TOKEN,
              value: e,
            }
          );
        if (10 === r) return this._value.splice(0, t), ie;
        if (92 === r) {
          const A = this._value[t + 1];
          -1 !== A &&
            void 0 !== A &&
            (10 === A
              ? ((e += this.consumeStringSlice(t)),
                (t = -1),
                this._value.shift())
              : GA(r, A) &&
                ((e += this.consumeStringSlice(t)),
                (e += j(this.consumeEscapedCodePoint())),
                (t = -1)));
        }
        t++;
      }
    }
    consumeNumber() {
      let A = [],
        e = 4,
        t = this.peekCodePoint(0);
      for (
        (43 !== t && 45 !== t) || A.push(this.consumeCodePoint());
        xA(this.peekCodePoint(0));

      )
        A.push(this.consumeCodePoint());
      t = this.peekCodePoint(0);
      let r = this.peekCodePoint(1);
      if (46 === t && xA(r))
        for (
          A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8;
          xA(this.peekCodePoint(0));

        )
          A.push(this.consumeCodePoint());
      (t = this.peekCodePoint(0)), (r = this.peekCodePoint(1));
      let s = this.peekCodePoint(2);
      if (
        (69 === t || 101 === t) &&
        (((43 === r || 45 === r) && xA(s)) || xA(r))
      )
        for (
          A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8;
          xA(this.peekCodePoint(0));

        )
          A.push(this.consumeCodePoint());
      return [YA(A), e];
    }
    consumeNumericToken() {
      const [A, e] = this.consumeNumber(),
        t = this.peekCodePoint(0),
        r = this.peekCodePoint(1),
        s = this.peekCodePoint(2);
      if (kA(t, r, s)) {
        let t = this.consumeName();
        return {
          type: AA.DIMENSION_TOKEN,
          number: A,
          flags: e,
          unit: t,
        };
      }
      return 37 === t
        ? (this.consumeCodePoint(),
          {
            type: AA.PERCENTAGE_TOKEN,
            number: A,
            flags: e,
          })
        : {
            type: AA.NUMBER_TOKEN,
            number: A,
            flags: e,
          };
    }
    consumeEscapedCodePoint() {
      const A = this.consumeCodePoint();
      if (PA(A)) {
        let e = j(A);
        for (; PA(this.peekCodePoint(0)) && e.length < 6; )
          e += j(this.consumeCodePoint());
        zA(this.peekCodePoint(0)) && this.consumeCodePoint();
        const t = parseInt(e, 16);
        return 0 === t || ((A) => A >= 55296 && A <= 57343)(t) || t > 1114111
          ? 65533
          : t;
      }
      return -1 === A ? 65533 : A;
    }
    consumeName() {
      let A = '';
      for (;;) {
        const e = this.consumeCodePoint();
        if (XA(e)) A += j(e);
        else {
          if (!GA(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), A;
          A += j(this.consumeEscapedCodePoint());
        }
      }
    }
  }
  class he {
    constructor(A) {
      this._tokens = A;
    }
    static create(A) {
      const e = new Ce();
      return e.write(A), new he(e.read());
    }
    static parseValue(A) {
      return he.create(A).parseComponentValue();
    }
    static parseValues(A) {
      return he.create(A).parseComponentValues();
    }
    parseComponentValue() {
      let A = this.consumeToken();
      for (; A.type === AA.WHITESPACE_TOKEN; ) A = this.consumeToken();
      if (A.type === AA.EOF_TOKEN)
        throw new SyntaxError(
          'Error parsing CSS component value, unexpected EOF'
        );
      this.reconsumeToken(A);
      const e = this.consumeComponentValue();
      do {
        A = this.consumeToken();
      } while (A.type === AA.WHITESPACE_TOKEN);
      if (A.type === AA.EOF_TOKEN) return e;
      throw new SyntaxError(
        'Error parsing CSS component value, multiple values found when expecting only one'
      );
    }
    parseComponentValues() {
      const A = [];
      for (;;) {
        let e = this.consumeComponentValue();
        if (e.type === AA.EOF_TOKEN) return A;
        A.push(e), A.push();
      }
    }
    consumeComponentValue() {
      const A = this.consumeToken();
      switch (A.type) {
        case AA.LEFT_CURLY_BRACKET_TOKEN:
        case AA.LEFT_SQUARE_BRACKET_TOKEN:
        case AA.LEFT_PARENTHESIS_TOKEN:
          return this.consumeSimpleBlock(A.type);
        case AA.FUNCTION_TOKEN:
          return this.consumeFunction(A);
      }
      return A;
    }
    consumeSimpleBlock(A) {
      const e = {
        type: A,
        values: [],
      };
      let t = this.consumeToken();
      for (;;) {
        if (t.type === AA.EOF_TOKEN || me(t, A)) return e;
        this.reconsumeToken(t),
          e.values.push(this.consumeComponentValue()),
          (t = this.consumeToken());
      }
    }
    consumeFunction(A) {
      const e = {
        name: A.value,
        values: [],
        type: AA.FUNCTION,
      };
      for (;;) {
        const A = this.consumeToken();
        if (A.type === AA.EOF_TOKEN || A.type === AA.RIGHT_PARENTHESIS_TOKEN)
          return e;
        this.reconsumeToken(A), e.values.push(this.consumeComponentValue());
      }
    }
    consumeToken() {
      const A = this._tokens.shift();
      return void 0 === A ? ge : A;
    }
    reconsumeToken(A) {
      this._tokens.unshift(A);
    }
  }
  const Ee = (A) => A.type === AA.DIMENSION_TOKEN,
    de = (A) => A.type === AA.NUMBER_TOKEN,
    Fe = (A) => A.type === AA.IDENT_TOKEN,
    He = (A) => A.type === AA.STRING_TOKEN,
    fe = (A, e) => Fe(A) && A.value === e,
    pe = (A) => A.type !== AA.WHITESPACE_TOKEN,
    Ne = (A) => A.type !== AA.WHITESPACE_TOKEN && A.type !== AA.COMMA_TOKEN,
    Ke = (A) => {
      const e = [];
      let t = [];
      return (
        A.forEach((A) => {
          if (A.type === AA.COMMA_TOKEN) {
            if (0 === t.length)
              throw new Error(
                'Error parsing function args, zero tokens for arg'
              );
            return e.push(t), void (t = []);
          }
          A.type !== AA.WHITESPACE_TOKEN && t.push(A);
        }),
        t.length && e.push(t),
        e
      );
    },
    me = (A, e) =>
      (e === AA.LEFT_CURLY_BRACKET_TOKEN &&
        A.type === AA.RIGHT_CURLY_BRACKET_TOKEN) ||
      (e === AA.LEFT_SQUARE_BRACKET_TOKEN &&
        A.type === AA.RIGHT_SQUARE_BRACKET_TOKEN) ||
      (e === AA.LEFT_PARENTHESIS_TOKEN &&
        A.type === AA.RIGHT_PARENTHESIS_TOKEN),
    Ie = (A) => A.type === AA.NUMBER_TOKEN || A.type === AA.DIMENSION_TOKEN,
    Te = (A) => A.type === AA.PERCENTAGE_TOKEN || Ie(A),
    Re = (A) => (A.length > 1 ? [A[0], A[1]] : [A[0]]),
    Oe = {
      type: AA.NUMBER_TOKEN,
      number: 0,
      flags: 4,
    },
    ye = {
      type: AA.PERCENTAGE_TOKEN,
      number: 50,
      flags: 4,
    },
    Le = {
      type: AA.PERCENTAGE_TOKEN,
      number: 100,
      flags: 4,
    },
    be = (A, e, t) => {
      let [r, s] = A;
      return [Se(r, e), Se(void 0 !== s ? s : r, t)];
    },
    Se = (A, e) => {
      if (A.type === AA.PERCENTAGE_TOKEN) return (A.number / 100) * e;
      if (Ee(A))
        switch (A.unit) {
          case 'rem':
          case 'em':
            return 16 * A.number;
          case 'px':
          default:
            return A.number;
        }
      return A.number;
    },
    Me = (A) => {
      if (A.type === AA.DIMENSION_TOKEN)
        switch (A.unit) {
          case 'deg':
            return (Math.PI * A.number) / 180;
          case 'grad':
            return (Math.PI / 200) * A.number;
          case 'rad':
            return A.number;
          case 'turn':
            return 2 * Math.PI * A.number;
        }
      throw new Error('Unsupported angle type');
    },
    De = (A) =>
      A.type === AA.DIMENSION_TOKEN &&
      ('deg' === A.unit ||
        'grad' === A.unit ||
        'rad' === A.unit ||
        'turn' === A.unit),
    _e = (A) => {
      switch (
        A.filter(Fe)
          .map((A) => A.value)
          .join(' ')
      ) {
        case 'to bottom right':
        case 'to right bottom':
        case 'left top':
        case 'top left':
          return [Oe, Oe];
        case 'to top':
        case 'bottom':
          return ve(0);
        case 'to bottom left':
        case 'to left bottom':
        case 'right top':
        case 'top right':
          return [Oe, Le];
        case 'to right':
        case 'left':
          return ve(90);
        case 'to top left':
        case 'to left top':
        case 'right bottom':
        case 'bottom right':
          return [Le, Le];
        case 'to bottom':
        case 'top':
          return ve(180);
        case 'to top right':
        case 'to right top':
        case 'left bottom':
        case 'bottom left':
          return [Le, Oe];
        case 'to left':
        case 'right':
          return ve(270);
      }
      return 0;
    },
    ve = (A) => (Math.PI * A) / 180,
    xe = (A) => {
      if (A.type === AA.FUNCTION) {
        const e = We[A.name];
        if (void 0 === e)
          throw new Error(
            `Attempting to parse an unsupported color function "${A.name}"`
          );
        return e(A.values);
      }
      if (A.type === AA.HASH_TOKEN) {
        if (3 === A.value.length) {
          const e = A.value.substring(0, 1),
            t = A.value.substring(1, 2),
            r = A.value.substring(2, 3);
          return Ve(
            parseInt(e + e, 16),
            parseInt(t + t, 16),
            parseInt(r + r, 16),
            1
          );
        }
        if (4 === A.value.length) {
          const e = A.value.substring(0, 1),
            t = A.value.substring(1, 2),
            r = A.value.substring(2, 3),
            s = A.value.substring(3, 4);
          return Ve(
            parseInt(e + e, 16),
            parseInt(t + t, 16),
            parseInt(r + r, 16),
            parseInt(s + s, 16) / 255
          );
        }
        if (6 === A.value.length) {
          const e = A.value.substring(0, 2),
            t = A.value.substring(2, 4),
            r = A.value.substring(4, 6);
          return Ve(parseInt(e, 16), parseInt(t, 16), parseInt(r, 16), 1);
        }
        if (8 === A.value.length) {
          const e = A.value.substring(0, 2),
            t = A.value.substring(2, 4),
            r = A.value.substring(4, 6),
            s = A.value.substring(6, 8);
          return Ve(
            parseInt(e, 16),
            parseInt(t, 16),
            parseInt(r, 16),
            parseInt(s, 16) / 255
          );
        }
      }
      if (A.type === AA.IDENT_TOKEN) {
        const e = Ye[A.value.toUpperCase()];
        if (void 0 !== e) return e;
      }
      return Ye.TRANSPARENT;
    },
    Pe = (A) => 0 == (255 & A),
    ze = (A) => {
      const e = 255 & A,
        t = 255 & (A >> 8),
        r = 255 & (A >> 16),
        s = 255 & (A >> 24);
      return e < 255
        ? `rgba(${s},${r},${t},${e / 255})`
        : `rgb(${s},${r},${t})`;
    },
    Ve = (A, e, t, r) =>
      ((A << 24) | (e << 16) | (t << 8) | (Math.round(255 * r) << 0)) >>> 0,
    Xe = (A, e) => {
      if (A.type === AA.NUMBER_TOKEN) return A.number;
      if (A.type === AA.PERCENTAGE_TOKEN) {
        const t = 3 === e ? 1 : 255;
        return 3 === e
          ? (A.number / 100) * t
          : Math.round((A.number / 100) * t);
      }
      return 0;
    },
    Je = (A) => {
      const e = A.filter(Ne);
      if (3 === e.length) {
        const [A, t, r] = e.map(Xe);
        return Ve(A, t, r, 1);
      }
      if (4 === e.length) {
        const [A, t, r, s] = e.map(Xe);
        return Ve(A, t, r, s);
      }
      return 0;
    };

  function Ge(A, e, t) {
    return (
      t < 0 && (t += 1),
      t >= 1 && (t -= 1),
      t < 1 / 6
        ? (e - A) * t * 6 + A
        : t < 0.5
        ? e
        : t < 2 / 3
        ? 6 * (e - A) * (2 / 3 - t) + A
        : A
    );
  }
  const ke = (A) => {
      const e = A.filter(Ne),
        [t, r, s, n] = e,
        B = (t.type === AA.NUMBER_TOKEN ? ve(t.number) : Me(t)) / (2 * Math.PI),
        o = Te(r) ? r.number / 100 : 0,
        i = Te(s) ? s.number / 100 : 0,
        a = void 0 !== n && Te(n) ? Se(n, 1) : 1;
      if (0 === o) return Ve(255 * i, 255 * i, 255 * i, 1);
      const c = i <= 0.5 ? i * (o + 1) : i + o - i * o,
        Q = 2 * i - c,
        l = Ge(Q, c, B + 1 / 3),
        w = Ge(Q, c, B),
        U = Ge(Q, c, B - 1 / 3);
      return Ve(255 * l, 255 * w, 255 * U, a);
    },
    We = {
      hsl: ke,
      hsla: ke,
      rgb: Je,
      rgba: Je,
    },
    Ye = {
      ALICEBLUE: 4042850303,
      ANTIQUEWHITE: 4209760255,
      AQUA: 16777215,
      AQUAMARINE: 2147472639,
      AZURE: 4043309055,
      BEIGE: 4126530815,
      BISQUE: 4293182719,
      BLACK: 255,
      BLANCHEDALMOND: 4293643775,
      BLUE: 65535,
      BLUEVIOLET: 2318131967,
      BROWN: 2771004159,
      BURLYWOOD: 3736635391,
      CADETBLUE: 1604231423,
      CHARTREUSE: 2147418367,
      CHOCOLATE: 3530104575,
      CORAL: 4286533887,
      CORNFLOWERBLUE: 1687547391,
      CORNSILK: 4294499583,
      CRIMSON: 3692313855,
      CYAN: 16777215,
      DARKBLUE: 35839,
      DARKCYAN: 9145343,
      DARKGOLDENROD: 3095837695,
      DARKGRAY: 2846468607,
      DARKGREEN: 6553855,
      DARKGREY: 2846468607,
      DARKKHAKI: 3182914559,
      DARKMAGENTA: 2332068863,
      DARKOLIVEGREEN: 1433087999,
      DARKORANGE: 4287365375,
      DARKORCHID: 2570243327,
      DARKRED: 2332033279,
      DARKSALMON: 3918953215,
      DARKSEAGREEN: 2411499519,
      DARKSLATEBLUE: 1211993087,
      DARKSLATEGRAY: 793726975,
      DARKSLATEGREY: 793726975,
      DARKTURQUOISE: 13554175,
      DARKVIOLET: 2483082239,
      DEEPPINK: 4279538687,
      DEEPSKYBLUE: 12582911,
      DIMGRAY: 1768516095,
      DIMGREY: 1768516095,
      DODGERBLUE: 512819199,
      FIREBRICK: 2988581631,
      FLORALWHITE: 4294635775,
      FORESTGREEN: 579543807,
      FUCHSIA: 4278255615,
      GAINSBORO: 3705462015,
      GHOSTWHITE: 4177068031,
      GOLD: 4292280575,
      GOLDENROD: 3668254975,
      GRAY: 2155905279,
      GREEN: 8388863,
      GREENYELLOW: 2919182335,
      GREY: 2155905279,
      HONEYDEW: 4043305215,
      HOTPINK: 4285117695,
      INDIANRED: 3445382399,
      INDIGO: 1258324735,
      IVORY: 4294963455,
      KHAKI: 4041641215,
      LAVENDER: 3873897215,
      LAVENDERBLUSH: 4293981695,
      LAWNGREEN: 2096890111,
      LEMONCHIFFON: 4294626815,
      LIGHTBLUE: 2916673279,
      LIGHTCORAL: 4034953471,
      LIGHTCYAN: 3774873599,
      LIGHTGOLDENRODYELLOW: 4210742015,
      LIGHTGRAY: 3553874943,
      LIGHTGREEN: 2431553791,
      LIGHTGREY: 3553874943,
      LIGHTPINK: 4290167295,
      LIGHTSALMON: 4288707327,
      LIGHTSEAGREEN: 548580095,
      LIGHTSKYBLUE: 2278488831,
      LIGHTSLATEGRAY: 2005441023,
      LIGHTSLATEGREY: 2005441023,
      LIGHTSTEELBLUE: 2965692159,
      LIGHTYELLOW: 4294959359,
      LIME: 16711935,
      LIMEGREEN: 852308735,
      LINEN: 4210091775,
      MAGENTA: 4278255615,
      MAROON: 2147483903,
      MEDIUMAQUAMARINE: 1724754687,
      MEDIUMBLUE: 52735,
      MEDIUMORCHID: 3126187007,
      MEDIUMPURPLE: 2473647103,
      MEDIUMSEAGREEN: 1018393087,
      MEDIUMSLATEBLUE: 2070474495,
      MEDIUMSPRINGGREEN: 16423679,
      MEDIUMTURQUOISE: 1221709055,
      MEDIUMVIOLETRED: 3340076543,
      MIDNIGHTBLUE: 421097727,
      MINTCREAM: 4127193855,
      MISTYROSE: 4293190143,
      MOCCASIN: 4293178879,
      NAVAJOWHITE: 4292783615,
      NAVY: 33023,
      OLDLACE: 4260751103,
      OLIVE: 2155872511,
      OLIVEDRAB: 1804477439,
      ORANGE: 4289003775,
      ORANGERED: 4282712319,
      ORCHID: 3664828159,
      PALEGOLDENROD: 4008225535,
      PALEGREEN: 2566625535,
      PALETURQUOISE: 2951671551,
      PALEVIOLETRED: 3681588223,
      PAPAYAWHIP: 4293907967,
      PEACHPUFF: 4292524543,
      PERU: 3448061951,
      PINK: 4290825215,
      PLUM: 3718307327,
      POWDERBLUE: 2967529215,
      PURPLE: 2147516671,
      REBECCAPURPLE: 1714657791,
      RED: 4278190335,
      ROSYBROWN: 3163525119,
      ROYALBLUE: 1097458175,
      SADDLEBROWN: 2336560127,
      SALMON: 4202722047,
      SANDYBROWN: 4104413439,
      SEAGREEN: 780883967,
      SEASHELL: 4294307583,
      SIENNA: 2689740287,
      SILVER: 3233857791,
      SKYBLUE: 2278484991,
      SLATEBLUE: 1784335871,
      SLATEGRAY: 1887473919,
      SLATEGREY: 1887473919,
      SNOW: 4294638335,
      SPRINGGREEN: 16744447,
      STEELBLUE: 1182971135,
      TAN: 3535047935,
      TEAL: 8421631,
      THISTLE: 3636451583,
      TOMATO: 4284696575,
      TRANSPARENT: 0,
      TURQUOISE: 1088475391,
      VIOLET: 4001558271,
      WHEAT: 4125012991,
      WHITE: 4294967295,
      WHITESMOKE: 4126537215,
      YELLOW: 4294902015,
      YELLOWGREEN: 2597139199,
    };
  var je, qe;
  !(function (A) {
    (A[(A.VALUE = 0)] = 'VALUE'),
      (A[(A.LIST = 1)] = 'LIST'),
      (A[(A.IDENT_VALUE = 2)] = 'IDENT_VALUE'),
      (A[(A.TYPE_VALUE = 3)] = 'TYPE_VALUE'),
      (A[(A.TOKEN_VALUE = 4)] = 'TOKEN_VALUE');
  })(je || (je = {})),
    (function (A) {
      (A[(A.BORDER_BOX = 0)] = 'BORDER_BOX'),
        (A[(A.PADDING_BOX = 1)] = 'PADDING_BOX'),
        (A[(A.CONTENT_BOX = 2)] = 'CONTENT_BOX');
    })(qe || (qe = {}));
  const Ze = {
      name: 'background-clip',
      initialValue: 'border-box',
      prefix: !1,
      type: je.LIST,
      parse: (A) =>
        A.map((A) => {
          if (Fe(A))
            switch (A.value) {
              case 'padding-box':
                return qe.PADDING_BOX;
              case 'content-box':
                return qe.CONTENT_BOX;
            }
          return qe.BORDER_BOX;
        }),
    },
    $e = {
      name: 'background-color',
      initialValue: 'transparent',
      prefix: !1,
      type: je.TYPE_VALUE,
      format: 'color',
    },
    At = (A) => {
      const e = xe(A[0]),
        t = A[1];
      return t && Te(t)
        ? {
            color: e,
            stop: t,
          }
        : {
            color: e,
            stop: null,
          };
    },
    et = (A, e) => {
      const t = A[0],
        r = A[A.length - 1];
      null === t.stop && (t.stop = Oe), null === r.stop && (r.stop = Le);
      const s = [];
      let n = 0;
      for (let t = 0; t < A.length; t++) {
        const r = A[t].stop;
        if (null !== r) {
          const A = Se(r, e);
          A > n ? s.push(A) : s.push(n), (n = A);
        } else s.push(null);
      }
      let B = null;
      for (let A = 0; A < s.length; A++) {
        const e = s[A];
        if (null === e) null === B && (B = A);
        else if (null !== B) {
          const t = A - B,
            r = (e - s[B - 1]) / (t + 1);
          for (let A = 1; A <= t; A++) s[B + A - 1] = r * A;
          B = null;
        }
      }
      return A.map(({ color: A }, t) => ({
        color: A,
        stop: Math.max(Math.min(1, s[t] / e), 0),
      }));
    },
    tt = (A, e, t) => {
      const r =
          'number' == typeof A
            ? A
            : ((A, e, t) => {
                const r = e / 2,
                  s = t / 2,
                  n = Se(A[0], e) - r,
                  B = s - Se(A[1], t);
                return (Math.atan2(B, n) + 2 * Math.PI) % (2 * Math.PI);
              })(A, e, t),
        s = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)),
        n = e / 2,
        B = t / 2,
        o = s / 2,
        i = Math.sin(r - Math.PI / 2) * o,
        a = Math.cos(r - Math.PI / 2) * o;
      return [s, n - a, n + a, B - i, B + i];
    },
    rt = (A, e) => Math.sqrt(A * A + e * e),
    st = (A, e, t, r, s) =>
      [
        [0, 0],
        [0, e],
        [A, 0],
        [A, e],
      ].reduce(
        (A, e) => {
          const [n, B] = e,
            o = rt(t - n, r - B);
          return (s ? o < A.optimumDistance : o > A.optimumDistance)
            ? {
                optimumCorner: e,
                optimumDistance: o,
              }
            : A;
        },
        {
          optimumDistance: s ? 1 / 0 : -1 / 0,
          optimumCorner: null,
        }
      ).optimumCorner,
    nt = (A, e, t, r, s) => {
      let n = 0,
        B = 0;
      switch (A.size) {
        case Kt.CLOSEST_SIDE:
          A.shape === Nt.CIRCLE
            ? (n = B =
                Math.min(
                  Math.abs(e),
                  Math.abs(e - r),
                  Math.abs(t),
                  Math.abs(t - s)
                ))
            : A.shape === Nt.ELLIPSE &&
              ((n = Math.min(Math.abs(e), Math.abs(e - r))),
              (B = Math.min(Math.abs(t), Math.abs(t - s))));
          break;
        case Kt.CLOSEST_CORNER:
          if (A.shape === Nt.CIRCLE)
            n = B = Math.min(
              rt(e, t),
              rt(e, t - s),
              rt(e - r, t),
              rt(e - r, t - s)
            );
          else if (A.shape === Nt.ELLIPSE) {
            const A =
                Math.min(Math.abs(t), Math.abs(t - s)) /
                Math.min(Math.abs(e), Math.abs(e - r)),
              [o, i] = st(r, s, e, t, !0);
            (n = rt(o - e, (i - t) / A)), (B = A * n);
          }
          break;
        case Kt.FARTHEST_SIDE:
          A.shape === Nt.CIRCLE
            ? (n = B =
                Math.max(
                  Math.abs(e),
                  Math.abs(e - r),
                  Math.abs(t),
                  Math.abs(t - s)
                ))
            : A.shape === Nt.ELLIPSE &&
              ((n = Math.max(Math.abs(e), Math.abs(e - r))),
              (B = Math.max(Math.abs(t), Math.abs(t - s))));
          break;
        case Kt.FARTHEST_CORNER:
          if (A.shape === Nt.CIRCLE)
            n = B = Math.max(
              rt(e, t),
              rt(e, t - s),
              rt(e - r, t),
              rt(e - r, t - s)
            );
          else if (A.shape === Nt.ELLIPSE) {
            const A =
                Math.max(Math.abs(t), Math.abs(t - s)) /
                Math.max(Math.abs(e), Math.abs(e - r)),
              [o, i] = st(r, s, e, t, !1);
            (n = rt(o - e, (i - t) / A)), (B = A * n);
          }
      }
      return (
        Array.isArray(A.size) &&
          ((n = Se(A.size[0], r)),
          (B = 2 === A.size.length ? Se(A.size[1], s) : n)),
        [n, B]
      );
    },
    Bt = (A) => {
      let e = ve(180);
      const t = [];
      return (
        Ke(A).forEach((A, r) => {
          if (0 === r) {
            const t = A[0];
            if (
              t.type === AA.IDENT_TOKEN &&
              -1 !== ['top', 'left', 'right', 'bottom'].indexOf(t.value)
            )
              return void (e = _e(A));
            if (De(t)) return void (e = (Me(t) + ve(270)) % ve(360));
          }
          const s = At(A);
          t.push(s);
        }),
        {
          angle: e,
          stops: t,
          type: ft.LINEAR_GRADIENT,
        }
      );
    },
    ot = (A) => 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3],
    it = (A, e, t, r, s) => {
      const n = 'http://www.w3.org/2000/svg',
        B = document.createElementNS(n, 'svg'),
        o = document.createElementNS(n, 'foreignObject');
      return (
        B.setAttributeNS(null, 'width', A.toString()),
        B.setAttributeNS(null, 'height', e.toString()),
        o.setAttributeNS(null, 'width', '100%'),
        o.setAttributeNS(null, 'height', '100%'),
        o.setAttributeNS(null, 'x', t.toString()),
        o.setAttributeNS(null, 'y', r.toString()),
        o.setAttributeNS(null, 'externalResourcesRequired', 'true'),
        B.appendChild(o),
        o.appendChild(s),
        B
      );
    },
    at = (A) =>
      new Promise((e, t) => {
        const r = new Image();
        (r.onload = () => e(r)),
          (r.onerror = t),
          (r.src =
            'data:image/svg+xml;charset=utf-8,' +
            encodeURIComponent(new XMLSerializer().serializeToString(A)));
      }),
    ct = {
      get SUPPORT_RANGE_BOUNDS() {
        const A = ((A) => {
          if (A.createRange) {
            const e = A.createRange();
            if (e.getBoundingClientRect) {
              const t = A.createElement('boundtest');
              (t.style.height = '123px'),
                (t.style.display = 'block'),
                A.body.appendChild(t),
                e.selectNode(t);
              const r = e.getBoundingClientRect(),
                s = Math.round(r.height);
              if ((A.body.removeChild(t), 123 === s)) return !0;
            }
          }
          return !1;
        })(document);
        return (
          Object.defineProperty(ct, 'SUPPORT_RANGE_BOUNDS', {
            value: A,
          }),
          A
        );
      },
      get SUPPORT_SVG_DRAWING() {
        const A = ((A) => {
          const e = new Image(),
            t = A.createElement('canvas'),
            r = t.getContext('2d');
          if (!r) return !1;
          e.src =
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
          try {
            r.drawImage(e, 0, 0), t.toDataURL();
          } catch (A) {
            return !1;
          }
          return !0;
        })(document);
        return (
          Object.defineProperty(ct, 'SUPPORT_SVG_DRAWING', {
            value: A,
          }),
          A
        );
      },
      get SUPPORT_FOREIGNOBJECT_DRAWING() {
        const A =
          'function' == typeof Array.from && 'function' == typeof window.fetch
            ? ((A) => {
                const e = A.createElement('canvas');
                (e.width = 100), (e.height = 100);
                const t = e.getContext('2d');
                if (!t) return Promise.reject(!1);
                (t.fillStyle = 'rgb(0, 255, 0)'), t.fillRect(0, 0, 100, 100);
                const r = new Image(),
                  s = e.toDataURL();
                r.src = s;
                const n = it(100, 100, 0, 0, r);
                return (
                  (t.fillStyle = 'red'),
                  t.fillRect(0, 0, 100, 100),
                  at(n)
                    .then((e) => {
                      t.drawImage(e, 0, 0);
                      const r = t.getImageData(0, 0, 100, 100).data;
                      (t.fillStyle = 'red'), t.fillRect(0, 0, 100, 100);
                      const n = A.createElement('div');
                      return (
                        (n.style.backgroundImage = `url(${s})`),
                        (n.style.height = '100px'),
                        ot(r) ? at(it(100, 100, 0, 0, n)) : Promise.reject(!1)
                      );
                    })
                    .then(
                      (A) => (
                        t.drawImage(A, 0, 0),
                        ot(t.getImageData(0, 0, 100, 100).data)
                      )
                    )
                    .catch(() => !1)
                );
              })(document)
            : Promise.resolve(!1);
        return (
          Object.defineProperty(ct, 'SUPPORT_FOREIGNOBJECT_DRAWING', {
            value: A,
          }),
          A
        );
      },
      get SUPPORT_CORS_IMAGES() {
        const A = void 0 !== new Image().crossOrigin;
        return (
          Object.defineProperty(ct, 'SUPPORT_CORS_IMAGES', {
            value: A,
          }),
          A
        );
      },
      get SUPPORT_RESPONSE_TYPE() {
        const A = 'string' == typeof new XMLHttpRequest().responseType;
        return (
          Object.defineProperty(ct, 'SUPPORT_RESPONSE_TYPE', {
            value: A,
          }),
          A
        );
      },
      get SUPPORT_CORS_XHR() {
        const A = 'withCredentials' in new XMLHttpRequest();
        return (
          Object.defineProperty(ct, 'SUPPORT_CORS_XHR', {
            value: A,
          }),
          A
        );
      },
    };
  class Qt {
    constructor({ id: A, enabled: e }) {
      (this.id = A), (this.enabled = e), (this.start = Date.now());
    }
    debug(...A) {
      this.enabled &&
        ('undefined' != typeof window &&
        window.console &&
        'function' == typeof console.debug
          ? console.debug(this.id, this.getTime() + 'ms', ...A)
          : this.info(...A));
    }
    getTime() {
      return Date.now() - this.start;
    }
    static create(A) {
      Qt.instances[A.id] = new Qt(A);
    }
    static destroy(A) {
      delete Qt.instances[A];
    }
    static getInstance(A) {
      const e = Qt.instances[A];
      if (void 0 === e)
        throw new Error('No logger instance found with id ' + A);
      return e;
    }
    info(...A) {
      this.enabled &&
        'undefined' != typeof window &&
        window.console &&
        'function' == typeof console.info &&
        console.info(this.id, this.getTime() + 'ms', ...A);
    }
    error(...A) {
      this.enabled &&
        ('undefined' != typeof window &&
        window.console &&
        'function' == typeof console.error
          ? console.error(this.id, this.getTime() + 'ms', ...A)
          : this.info(...A));
    }
  }
  Qt.instances = {};
  class lt {
    static create(A, e) {
      return (lt._caches[A] = new wt(A, e));
    }
    static destroy(A) {
      delete lt._caches[A];
    }
    static open(A) {
      const e = lt._caches[A];
      if (void 0 !== e) return e;
      throw new Error(`Cache with key "${A}" not found`);
    }
    static getOrigin(A) {
      const e = lt._link;
      return e
        ? ((e.href = A), (e.href = e.href), e.protocol + e.hostname + e.port)
        : 'about:blank';
    }
    static isSameOrigin(A) {
      return lt.getOrigin(A) === lt._origin;
    }
    static setContext(A) {
      (lt._link = A.document.createElement('a')),
        (lt._origin = lt.getOrigin(A.location.href));
    }
    static getInstance() {
      const A = lt._current;
      if (null === A) throw new Error('No cache instance attached');
      return A;
    }
    static attachInstance(A) {
      lt._current = A;
    }
    static detachInstance() {
      lt._current = null;
    }
  }
  (lt._caches = {}), (lt._origin = 'about:blank'), (lt._current = null);
  class wt {
    constructor(A, e) {
      (this.id = A), (this._options = e), (this._cache = {});
    }
    addImage(A) {
      const e = Promise.resolve();
      return this.has(A)
        ? e
        : dt(A) || Ct(A)
        ? ((this._cache[A] = this.loadImage(A)), e)
        : e;
    }
    match(A) {
      return this._cache[A];
    }
    async loadImage(A) {
      const e = lt.isSameOrigin(A),
        t = !ht(A) && this._options.useCORS(e) && ct.SUPPORT_CORS_IMAGES,
        r =
          !ht(A) &&
          !e &&
          'string' == typeof this._options.proxy &&
          ct.SUPPORT_CORS_XHR &&
          !t;
      if (!(e || !1 !== this._options.allowTaint || ht(A) || r || t)) return;
      let s = A;
      return (
        r && (s = await this.proxy(s)),
        Qt.getInstance(this.id).debug('Added image ' + A.substring(0, 256)),
        await new Promise((A, r) => {
          const n = new Image();
          (n.onload = () => A(n)),
            (n.onerror = r),
            (Et(s) ||
              ('function' == typeof this._options.useCORS &&
                this._options.useCORS(e)) ||
              t) &&
              (n.crossOrigin = 'anonymous'),
            (n.src = s),
            !0 === n.complete && setTimeout(() => A(n), 500),
            this._options.imageTimeout > 0 &&
              setTimeout(
                () =>
                  r(
                    `Timed out (${this._options.imageTimeout}ms) loading image`
                  ),
                this._options.imageTimeout
              );
        })
      );
    }
    has(A) {
      return void 0 !== this._cache[A];
    }
    keys() {
      return Promise.resolve(Object.keys(this._cache));
    }
    proxy(A) {
      const e = this._options.proxy;
      if (!e) throw new Error('No proxy defined');
      const t = A.substring(0, 256);
      return new Promise((r, s) => {
        const n = ct.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text',
          B = new XMLHttpRequest();
        if (
          ((B.onload = () => {
            if (200 === B.status)
              if ('text' === n) r(B.response);
              else {
                const A = new FileReader();
                A.addEventListener('load', () => r(A.result), !1),
                  A.addEventListener('error', (A) => s(A), !1),
                  A.readAsDataURL(B.response);
              }
            else
              s(`Failed to proxy resource ${t} with status code ${B.status}`);
          }),
          (B.onerror = s),
          B.open('GET', `${e}?url=${encodeURIComponent(A)}&responseType=${n}`),
          'text' !== n && B instanceof XMLHttpRequest && (B.responseType = n),
          this._options.imageTimeout)
        ) {
          const A = this._options.imageTimeout;
          (B.timeout = A),
            (B.ontimeout = () => s(`Timed out (${A}ms) proxying ${t}`));
        }
        B.send();
      });
    }
  }
  const Ut = /^data:image\/svg\+xml/i,
    ut = /^data:image\/.*;base64,/i,
    gt = /^data:image\/.*/i,
    Ct = (A) => ct.SUPPORT_SVG_DRAWING || !Ft(A),
    ht = (A) => gt.test(A),
    Et = (A) => ut.test(A),
    dt = (A) => 'blob' === A.substr(0, 4),
    Ft = (A) => 'svg' === A.substr(-3).toLowerCase() || Ut.test(A),
    Ht = (A) => {
      let e = Nt.CIRCLE,
        t = Kt.FARTHEST_CORNER;
      const r = [],
        s = [];
      return (
        Ke(A).forEach((A, n) => {
          let B = !0;
          if (
            (0 === n
              ? (B = A.reduce((A, e) => {
                  if (Fe(e))
                    switch (e.value) {
                      case 'center':
                        return s.push(ye), !1;
                      case 'top':
                      case 'left':
                        return s.push(Oe), !1;
                      case 'right':
                      case 'bottom':
                        return s.push(Le), !1;
                    }
                  else if (Te(e) || Ie(e)) return s.push(e), !1;
                  return A;
                }, B))
              : 1 === n &&
                (B = A.reduce((A, r) => {
                  if (Fe(r))
                    switch (r.value) {
                      case 'circle':
                        return (e = Nt.CIRCLE), !1;
                      case 'ellipse':
                        return (e = Nt.ELLIPSE), !1;
                      case 'contain':
                      case 'closest-side':
                        return (t = Kt.CLOSEST_SIDE), !1;
                      case 'farthest-side':
                        return (t = Kt.FARTHEST_SIDE), !1;
                      case 'closest-corner':
                        return (t = Kt.CLOSEST_CORNER), !1;
                      case 'cover':
                      case 'farthest-corner':
                        return (t = Kt.FARTHEST_CORNER), !1;
                    }
                  else if (Ie(r) || Te(r))
                    return Array.isArray(t) || (t = []), t.push(r), !1;
                  return A;
                }, B)),
            B)
          ) {
            const e = At(A);
            r.push(e);
          }
        }),
        {
          size: t,
          shape: e,
          stops: r,
          position: s,
          type: ft.RADIAL_GRADIENT,
        }
      );
    };
  var ft;
  !(function (A) {
    (A[(A.URL = 0)] = 'URL'),
      (A[(A.LINEAR_GRADIENT = 1)] = 'LINEAR_GRADIENT'),
      (A[(A.RADIAL_GRADIENT = 2)] = 'RADIAL_GRADIENT');
  })(ft || (ft = {}));
  const pt = (A) => A.type === ft.RADIAL_GRADIENT;
  var Nt, Kt;
  !(function (A) {
    (A[(A.CIRCLE = 0)] = 'CIRCLE'), (A[(A.ELLIPSE = 1)] = 'ELLIPSE');
  })(Nt || (Nt = {})),
    (function (A) {
      (A[(A.CLOSEST_SIDE = 0)] = 'CLOSEST_SIDE'),
        (A[(A.FARTHEST_SIDE = 1)] = 'FARTHEST_SIDE'),
        (A[(A.CLOSEST_CORNER = 2)] = 'CLOSEST_CORNER'),
        (A[(A.FARTHEST_CORNER = 3)] = 'FARTHEST_CORNER');
    })(Kt || (Kt = {}));
  const mt = (A) => {
    if (A.type === AA.URL_TOKEN) {
      const e = {
        url: A.value,
        type: ft.URL,
      };
      return lt.getInstance().addImage(A.value), e;
    }
    if (A.type === AA.FUNCTION) {
      const e = It[A.name];
      if (void 0 === e)
        throw new Error(
          `Attempting to parse an unsupported image function "${A.name}"`
        );
      return e(A.values);
    }
    throw new Error('Unsupported image type');
  };
  const It = {
      'linear-gradient': (A) => {
        let e = ve(180);
        const t = [];
        return (
          Ke(A).forEach((A, r) => {
            if (0 === r) {
              const t = A[0];
              if (t.type === AA.IDENT_TOKEN && 'to' === t.value)
                return void (e = _e(A));
              if (De(t)) return void (e = Me(t));
            }
            const s = At(A);
            t.push(s);
          }),
          {
            angle: e,
            stops: t,
            type: ft.LINEAR_GRADIENT,
          }
        );
      },
      '-moz-linear-gradient': Bt,
      '-ms-linear-gradient': Bt,
      '-o-linear-gradient': Bt,
      '-webkit-linear-gradient': Bt,
      'radial-gradient': (A) => {
        let e = Nt.CIRCLE,
          t = Kt.FARTHEST_CORNER;
        const r = [],
          s = [];
        return (
          Ke(A).forEach((A, n) => {
            let B = !0;
            if (0 === n) {
              let r = !1;
              B = A.reduce((A, n) => {
                if (r)
                  if (Fe(n))
                    switch (n.value) {
                      case 'center':
                        return s.push(ye), A;
                      case 'top':
                      case 'left':
                        return s.push(Oe), A;
                      case 'right':
                      case 'bottom':
                        return s.push(Le), A;
                    }
                  else (Te(n) || Ie(n)) && s.push(n);
                else if (Fe(n))
                  switch (n.value) {
                    case 'circle':
                      return (e = Nt.CIRCLE), !1;
                    case 'ellipse':
                      return (e = Nt.ELLIPSE), !1;
                    case 'at':
                      return (r = !0), !1;
                    case 'closest-side':
                      return (t = Kt.CLOSEST_SIDE), !1;
                    case 'cover':
                    case 'farthest-side':
                      return (t = Kt.FARTHEST_SIDE), !1;
                    case 'contain':
                    case 'closest-corner':
                      return (t = Kt.CLOSEST_CORNER), !1;
                    case 'farthest-corner':
                      return (t = Kt.FARTHEST_CORNER), !1;
                  }
                else if (Ie(n) || Te(n))
                  return Array.isArray(t) || (t = []), t.push(n), !1;
                return A;
              }, B);
            }
            if (B) {
              const e = At(A);
              r.push(e);
            }
          }),
          {
            size: t,
            shape: e,
            stops: r,
            position: s,
            type: ft.RADIAL_GRADIENT,
          }
        );
      },
      '-moz-radial-gradient': Ht,
      '-ms-radial-gradient': Ht,
      '-o-radial-gradient': Ht,
      '-webkit-radial-gradient': Ht,
      '-webkit-gradient': (A) => {
        let e = ve(180);
        const t = [];
        let r = ft.LINEAR_GRADIENT,
          s = Nt.CIRCLE,
          n = Kt.FARTHEST_CORNER;
        return (
          Ke(A).forEach((A, e) => {
            const s = A[0];
            if (0 === e) {
              if (Fe(s) && 'linear' === s.value)
                return void (r = ft.LINEAR_GRADIENT);
              if (Fe(s) && 'radial' === s.value)
                return void (r = ft.RADIAL_GRADIENT);
            }
            if (s.type === AA.FUNCTION)
              if ('from' === s.name) {
                const A = xe(s.values[0]);
                t.push({
                  stop: Oe,
                  color: A,
                });
              } else if ('to' === s.name) {
                const A = xe(s.values[0]);
                t.push({
                  stop: Le,
                  color: A,
                });
              } else if ('color-stop' === s.name) {
                const A = s.values.filter(Ne);
                if (2 === A.length) {
                  const e = xe(A[1]),
                    r = A[0];
                  de(r) &&
                    t.push({
                      stop: {
                        type: AA.PERCENTAGE_TOKEN,
                        number: 100 * r.number,
                        flags: r.flags,
                      },
                      color: e,
                    });
                }
              }
          }),
          r === ft.LINEAR_GRADIENT
            ? {
                angle: (e + ve(180)) % ve(360),
                stops: t,
                type: r,
              }
            : {
                size: n,
                shape: s,
                stops: t,
                position: [],
                type: r,
              }
        );
      },
    },
    Tt = {
      name: 'background-image',
      initialValue: 'none',
      type: je.LIST,
      prefix: !1,
      parse: (A) => {
        if (0 === A.length) return [];
        const e = A[0];
        return e.type === AA.IDENT_TOKEN && 'none' === e.value
          ? []
          : A.filter(
              (A) =>
                Ne(A) &&
                (function (A) {
                  return A.type !== AA.FUNCTION || It[A.name];
                })(A)
            ).map(mt);
      },
    },
    Rt = {
      name: 'background-origin',
      initialValue: 'border-box',
      prefix: !1,
      type: je.LIST,
      parse: (A) =>
        A.map((A) => {
          if (Fe(A))
            switch (A.value) {
              case 'padding-box':
                return 1;
              case 'content-box':
                return 2;
            }
          return 0;
        }),
    },
    Ot = {
      name: 'background-position',
      initialValue: '0% 0%',
      type: je.LIST,
      prefix: !1,
      parse: (A) =>
        Ke(A)
          .map((A) => A.filter(Te))
          .map(Re),
    };
  var yt;
  !(function (A) {
    (A[(A.REPEAT = 0)] = 'REPEAT'),
      (A[(A.NO_REPEAT = 1)] = 'NO_REPEAT'),
      (A[(A.REPEAT_X = 2)] = 'REPEAT_X'),
      (A[(A.REPEAT_Y = 3)] = 'REPEAT_Y');
  })(yt || (yt = {}));
  const Lt = {
      name: 'background-repeat',
      initialValue: 'repeat',
      prefix: !1,
      type: je.LIST,
      parse: (A) =>
        Ke(A)
          .map((A) =>
            A.filter(Fe)
              .map((A) => A.value)
              .join(' ')
          )
          .map(bt),
    },
    bt = (A) => {
      switch (A) {
        case 'no-repeat':
          return yt.NO_REPEAT;
        case 'repeat-x':
        case 'repeat no-repeat':
          return yt.REPEAT_X;
        case 'repeat-y':
        case 'no-repeat repeat':
          return yt.REPEAT_Y;
        case 'repeat':
        default:
          return yt.REPEAT;
      }
    };
  var St;
  !(function (A) {
    (A.AUTO = 'auto'), (A.CONTAIN = 'contain'), (A.COVER = 'cover');
  })(St || (St = {}));
  const Mt = {
      name: 'background-size',
      initialValue: '0',
      prefix: !1,
      type: je.LIST,
      parse: (A) => Ke(A).map((A) => A.filter(Dt)),
    },
    Dt = (A) => Fe(A) || Te(A),
    _t = (A) => ({
      name: `border-${A}-color`,
      initialValue: 'transparent',
      prefix: !1,
      type: je.TYPE_VALUE,
      format: 'color',
    }),
    vt = _t('top'),
    xt = _t('right'),
    Pt = _t('bottom'),
    zt = _t('left'),
    Vt = (A) => ({
      name: 'border-radius-' + A,
      initialValue: '0 0',
      prefix: !1,
      type: je.LIST,
      parse: (A) => Re(A.filter(Te)),
    }),
    Xt = Vt('top-left'),
    Jt = Vt('top-right'),
    Gt = Vt('bottom-right'),
    kt = Vt('bottom-left');
  var Wt;
  !(function (A) {
    (A[(A.NONE = 0)] = 'NONE'), (A[(A.SOLID = 1)] = 'SOLID');
  })(Wt || (Wt = {}));
  const Yt = (A) => ({
      name: `border-${A}-style`,
      initialValue: 'solid',
      prefix: !1,
      type: je.IDENT_VALUE,
      parse: (A) => {
        switch (A) {
          case 'none':
            return Wt.NONE;
        }
        return Wt.SOLID;
      },
    }),
    jt = Yt('top'),
    qt = Yt('right'),
    Zt = Yt('bottom'),
    $t = Yt('left'),
    Ar = (A) => ({
      name: `border-${A}-width`,
      initialValue: '0',
      type: je.VALUE,
      prefix: !1,
      parse: (A) => (Ee(A) ? A.number : 0),
    }),
    er = Ar('top'),
    tr = Ar('right'),
    rr = Ar('bottom'),
    sr = Ar('left'),
    nr = {
      name: 'color',
      initialValue: 'transparent',
      prefix: !1,
      type: je.TYPE_VALUE,
      format: 'color',
    },
    Br = {
      name: 'display',
      initialValue: 'inline-block',
      prefix: !1,
      type: je.LIST,
      parse: (A) => A.filter(Fe).reduce((A, e) => A | or(e.value), 0),
    },
    or = (A) => {
      switch (A) {
        case 'block':
          return 2;
        case 'inline':
          return 4;
        case 'run-in':
          return 8;
        case 'flow':
          return 16;
        case 'flow-root':
          return 32;
        case 'table':
          return 64;
        case 'flex':
        case '-webkit-flex':
          return 128;
        case 'grid':
        case '-ms-grid':
          return 256;
        case 'ruby':
          return 512;
        case 'subgrid':
          return 1024;
        case 'list-item':
          return 2048;
        case 'table-row-group':
          return 4096;
        case 'table-header-group':
          return 8192;
        case 'table-footer-group':
          return 16384;
        case 'table-row':
          return 32768;
        case 'table-cell':
          return 65536;
        case 'table-column-group':
          return 131072;
        case 'table-column':
          return 262144;
        case 'table-caption':
          return 524288;
        case 'ruby-base':
          return 1048576;
        case 'ruby-text':
          return 2097152;
        case 'ruby-base-container':
          return 4194304;
        case 'ruby-text-container':
          return 8388608;
        case 'contents':
          return 16777216;
        case 'inline-block':
          return 33554432;
        case 'inline-list-item':
          return 67108864;
        case 'inline-table':
          return 134217728;
        case 'inline-flex':
          return 268435456;
        case 'inline-grid':
          return 536870912;
      }
      return 0;
    };
  var ir;
  !(function (A) {
    (A[(A.NONE = 0)] = 'NONE'),
      (A[(A.LEFT = 1)] = 'LEFT'),
      (A[(A.RIGHT = 2)] = 'RIGHT'),
      (A[(A.INLINE_START = 3)] = 'INLINE_START'),
      (A[(A.INLINE_END = 4)] = 'INLINE_END');
  })(ir || (ir = {}));
  const ar = {
      name: 'float',
      initialValue: 'none',
      prefix: !1,
      type: je.IDENT_VALUE,
      parse: (A) => {
        switch (A) {
          case 'left':
            return ir.LEFT;
          case 'right':
            return ir.RIGHT;
          case 'inline-start':
            return ir.INLINE_START;
          case 'inline-end':
            return ir.INLINE_END;
        }
        return ir.NONE;
      },
    },
    cr = {
      name: 'letter-spacing',
      initialValue: '0',
      prefix: !1,
      type: je.VALUE,
      parse: (A) =>
        A.type === AA.IDENT_TOKEN && 'normal' === A.value
          ? 0
          : A.type === AA.NUMBER_TOKEN || A.type === AA.DIMENSION_TOKEN
          ? A.number
          : 0,
    };
  var Qr;
  !(function (A) {
    (A.NORMAL = 'normal'), (A.STRICT = 'strict');
  })(Qr || (Qr = {}));
  const lr = {
      name: 'line-break',
      initialValue: 'normal',
      prefix: !1,
      type: je.IDENT_VALUE,
      parse: (A) => {
        switch (A) {
          case 'strict':
            return Qr.STRICT;
          case 'normal':
          default:
            return Qr.NORMAL;
        }
      },
    },
    wr = {
      name: 'line-height',
      initialValue: 'normal',
      prefix: !1,
      type: je.TOKEN_VALUE,
    },
    Ur = {
      name: 'list-style-image',
      initialValue: 'none',
      type: je.VALUE,
      prefix: !1,
      parse: (A) =>
        A.type === AA.IDENT_TOKEN && 'none' === A.value ? null : mt(A),
    };
  var ur;
  !(function (A) {
    (A[(A.INSIDE = 0)] = 'INSIDE'), (A[(A.OUTSIDE = 1)] = 'OUTSIDE');
  })(ur || (ur = {}));
  const gr = {
    name: 'list-style-position',
    initialValue: 'outside',
    prefix: !1,
    type: je.IDENT_VALUE,
    parse: (A) => {
      switch (A) {
        case 'inside':
          return ur.INSIDE;
        case 'outside':
        default:
          return ur.OUTSIDE;
      }
    },
  };
  var Cr;
  !(function (A) {
    (A[(A.NONE = -1)] = 'NONE'),
      (A[(A.DISC = 0)] = 'DISC'),
      (A[(A.CIRCLE = 1)] = 'CIRCLE'),
      (A[(A.SQUARE = 2)] = 'SQUARE'),
      (A[(A.DECIMAL = 3)] = 'DECIMAL'),
      (A[(A.CJK_DECIMAL = 4)] = 'CJK_DECIMAL'),
      (A[(A.DECIMAL_LEADING_ZERO = 5)] = 'DECIMAL_LEADING_ZERO'),
      (A[(A.LOWER_ROMAN = 6)] = 'LOWER_ROMAN'),
      (A[(A.UPPER_ROMAN = 7)] = 'UPPER_ROMAN'),
      (A[(A.LOWER_GREEK = 8)] = 'LOWER_GREEK'),
      (A[(A.LOWER_ALPHA = 9)] = 'LOWER_ALPHA'),
      (A[(A.UPPER_ALPHA = 10)] = 'UPPER_ALPHA'),
      (A[(A.ARABIC_INDIC = 11)] = 'ARABIC_INDIC'),
      (A[(A.ARMENIAN = 12)] = 'ARMENIAN'),
      (A[(A.BENGALI = 13)] = 'BENGALI'),
      (A[(A.CAMBODIAN = 14)] = 'CAMBODIAN'),
      (A[(A.CJK_EARTHLY_BRANCH = 15)] = 'CJK_EARTHLY_BRANCH'),
      (A[(A.CJK_HEAVENLY_STEM = 16)] = 'CJK_HEAVENLY_STEM'),
      (A[(A.CJK_IDEOGRAPHIC = 17)] = 'CJK_IDEOGRAPHIC'),
      (A[(A.DEVANAGARI = 18)] = 'DEVANAGARI'),
      (A[(A.ETHIOPIC_NUMERIC = 19)] = 'ETHIOPIC_NUMERIC'),
      (A[(A.GEORGIAN = 20)] = 'GEORGIAN'),
      (A[(A.GUJARATI = 21)] = 'GUJARATI'),
      (A[(A.GURMUKHI = 22)] = 'GURMUKHI'),
      (A[(A.HEBREW = 22)] = 'HEBREW'),
      (A[(A.HIRAGANA = 23)] = 'HIRAGANA'),
      (A[(A.HIRAGANA_IROHA = 24)] = 'HIRAGANA_IROHA'),
      (A[(A.JAPANESE_FORMAL = 25)] = 'JAPANESE_FORMAL'),
      (A[(A.JAPANESE_INFORMAL = 26)] = 'JAPANESE_INFORMAL'),
      (A[(A.KANNADA = 27)] = 'KANNADA'),
      (A[(A.KATAKANA = 28)] = 'KATAKANA'),
      (A[(A.KATAKANA_IROHA = 29)] = 'KATAKANA_IROHA'),
      (A[(A.KHMER = 30)] = 'KHMER'),
      (A[(A.KOREAN_HANGUL_FORMAL = 31)] = 'KOREAN_HANGUL_FORMAL'),
      (A[(A.KOREAN_HANJA_FORMAL = 32)] = 'KOREAN_HANJA_FORMAL'),
      (A[(A.KOREAN_HANJA_INFORMAL = 33)] = 'KOREAN_HANJA_INFORMAL'),
      (A[(A.LAO = 34)] = 'LAO'),
      (A[(A.LOWER_ARMENIAN = 35)] = 'LOWER_ARMENIAN'),
      (A[(A.MALAYALAM = 36)] = 'MALAYALAM'),
      (A[(A.MONGOLIAN = 37)] = 'MONGOLIAN'),
      (A[(A.MYANMAR = 38)] = 'MYANMAR'),
      (A[(A.ORIYA = 39)] = 'ORIYA'),
      (A[(A.PERSIAN = 40)] = 'PERSIAN'),
      (A[(A.SIMP_CHINESE_FORMAL = 41)] = 'SIMP_CHINESE_FORMAL'),
      (A[(A.SIMP_CHINESE_INFORMAL = 42)] = 'SIMP_CHINESE_INFORMAL'),
      (A[(A.TAMIL = 43)] = 'TAMIL'),
      (A[(A.TELUGU = 44)] = 'TELUGU'),
      (A[(A.THAI = 45)] = 'THAI'),
      (A[(A.TIBETAN = 46)] = 'TIBETAN'),
      (A[(A.TRAD_CHINESE_FORMAL = 47)] = 'TRAD_CHINESE_FORMAL'),
      (A[(A.TRAD_CHINESE_INFORMAL = 48)] = 'TRAD_CHINESE_INFORMAL'),
      (A[(A.UPPER_ARMENIAN = 49)] = 'UPPER_ARMENIAN'),
      (A[(A.DISCLOSURE_OPEN = 50)] = 'DISCLOSURE_OPEN'),
      (A[(A.DISCLOSURE_CLOSED = 51)] = 'DISCLOSURE_CLOSED');
  })(Cr || (Cr = {}));
  const hr = {
      name: 'list-style-type',
      initialValue: 'none',
      prefix: !1,
      type: je.IDENT_VALUE,
      parse: (A) => {
        switch (A) {
          case 'disc':
            return Cr.DISC;
          case 'circle':
            return Cr.CIRCLE;
          case 'square':
            return Cr.SQUARE;
          case 'decimal':
            return Cr.DECIMAL;
          case 'cjk-decimal':
            return Cr.CJK_DECIMAL;
          case 'decimal-leading-zero':
            return Cr.DECIMAL_LEADING_ZERO;
          case 'lower-roman':
            return Cr.LOWER_ROMAN;
          case 'upper-roman':
            return Cr.UPPER_ROMAN;
          case 'lower-greek':
            return Cr.LOWER_GREEK;
          case 'lower-alpha':
            return Cr.LOWER_ALPHA;
          case 'upper-alpha':
            return Cr.UPPER_ALPHA;
          case 'arabic-indic':
            return Cr.ARABIC_INDIC;
          case 'armenian':
            return Cr.ARMENIAN;
          case 'bengali':
            return Cr.BENGALI;
          case 'cambodian':
            return Cr.CAMBODIAN;
          case 'cjk-earthly-branch':
            return Cr.CJK_EARTHLY_BRANCH;
          case 'cjk-heavenly-stem':
            return Cr.CJK_HEAVENLY_STEM;
          case 'cjk-ideographic':
            return Cr.CJK_IDEOGRAPHIC;
          case 'devanagari':
            return Cr.DEVANAGARI;
          case 'ethiopic-numeric':
            return Cr.ETHIOPIC_NUMERIC;
          case 'georgian':
            return Cr.GEORGIAN;
          case 'gujarati':
            return Cr.GUJARATI;
          case 'gurmukhi':
            return Cr.GURMUKHI;
          case 'hebrew':
            return Cr.HEBREW;
          case 'hiragana':
            return Cr.HIRAGANA;
          case 'hiragana-iroha':
            return Cr.HIRAGANA_IROHA;
          case 'japanese-formal':
            return Cr.JAPANESE_FORMAL;
          case 'japanese-informal':
            return Cr.JAPANESE_INFORMAL;
          case 'kannada':
            return Cr.KANNADA;
          case 'katakana':
            return Cr.KATAKANA;
          case 'katakana-iroha':
            return Cr.KATAKANA_IROHA;
          case 'khmer':
            return Cr.KHMER;
          case 'korean-hangul-formal':
            return Cr.KOREAN_HANGUL_FORMAL;
          case 'korean-hanja-formal':
            return Cr.KOREAN_HANJA_FORMAL;
          case 'korean-hanja-informal':
            return Cr.KOREAN_HANJA_INFORMAL;
          case 'lao':
            return Cr.LAO;
          case 'lower-armenian':
            return Cr.LOWER_ARMENIAN;
          case 'malayalam':
            return Cr.MALAYALAM;
          case 'mongolian':
            return Cr.MONGOLIAN;
          case 'myanmar':
            return Cr.MYANMAR;
          case 'oriya':
            return Cr.ORIYA;
          case 'persian':
            return Cr.PERSIAN;
          case 'simp-chinese-formal':
            return Cr.SIMP_CHINESE_FORMAL;
          case 'simp-chinese-informal':
            return Cr.SIMP_CHINESE_INFORMAL;
          case 'tamil':
            return Cr.TAMIL;
          case 'telugu':
            return Cr.TELUGU;
          case 'thai':
            return Cr.THAI;
          case 'tibetan':
            return Cr.TIBETAN;
          case 'trad-chinese-formal':
            return Cr.TRAD_CHINESE_FORMAL;
          case 'trad-chinese-informal':
            return Cr.TRAD_CHINESE_INFORMAL;
          case 'upper-armenian':
            return Cr.UPPER_ARMENIAN;
          case 'disclosure-open':
            return Cr.DISCLOSURE_OPEN;
          case 'disclosure-closed':
            return Cr.DISCLOSURE_CLOSED;
          case 'none':
          default:
            return Cr.NONE;
        }
      },
    },
    Er = (A) => ({
      name: 'margin-' + A,
      initialValue: '0',
      prefix: !1,
      type: je.TOKEN_VALUE,
    }),
    dr = Er('top'),
    Fr = Er('right'),
    Hr = Er('bottom'),
    fr = Er('left');
  var pr;
  !(function (A) {
    (A[(A.VISIBLE = 0)] = 'VISIBLE'),
      (A[(A.HIDDEN = 1)] = 'HIDDEN'),
      (A[(A.SCROLL = 2)] = 'SCROLL'),
      (A[(A.AUTO = 3)] = 'AUTO');
  })(pr || (pr = {}));
  const Nr = {
    name: 'overflow',
    initialValue: 'visible',
    prefix: !1,
    type: je.LIST,
    parse: (A) =>
      A.filter(Fe).map((A) => {
        switch (A.value) {
          case 'hidden':
            return pr.HIDDEN;
          case 'scroll':
            return pr.SCROLL;
          case 'auto':
            return pr.AUTO;
          case 'visible':
          default:
            return pr.VISIBLE;
        }
      }),
  };
  var Kr;
  !(function (A) {
    (A.NORMAL = 'normal'), (A.BREAK_WORD = 'break-word');
  })(Kr || (Kr = {}));
  const mr = {
      name: 'overflow-wrap',
      initialValue: 'normal',
      prefix: !1,
      type: je.IDENT_VALUE,
      parse: (A) => {
        switch (A) {
          case 'break-word':
            return Kr.BREAK_WORD;
          case 'normal':
          default:
            return Kr.NORMAL;
        }
      },
    },
    Ir = (A) => ({
      name: 'padding-' + A,
      initialValue: '0',
      prefix: !1,
      type: je.TYPE_VALUE,
      format: 'length-percentage',
    }),
    Tr = Ir('top'),
    Rr = Ir('right'),
    Or = Ir('bottom'),
    yr = Ir('left');
  var Lr;
  !(function (A) {
    (A[(A.LEFT = 0)] = 'LEFT'),
      (A[(A.CENTER = 1)] = 'CENTER'),
      (A[(A.RIGHT = 2)] = 'RIGHT');
  })(Lr || (Lr = {}));
  const br = {
    name: 'text-align',
    initialValue: 'left',
    prefix: !1,
    type: je.IDENT_VALUE,
    parse: (A) => {
      switch (A) {
        case 'right':
          return Lr.RIGHT;
        case 'center':
        case 'justify':
          return Lr.CENTER;
        case 'left':
        default:
          return Lr.LEFT;
      }
    },
  };
  var Sr;
  !(function (A) {
    (A[(A.STATIC = 0)] = 'STATIC'),
      (A[(A.RELATIVE = 1)] = 'RELATIVE'),
      (A[(A.ABSOLUTE = 2)] = 'ABSOLUTE'),
      (A[(A.FIXED = 3)] = 'FIXED'),
      (A[(A.STICKY = 4)] = 'STICKY');
  })(Sr || (Sr = {}));
  const Mr = {
      name: 'position',
      initialValue: 'static',
      prefix: !1,
      type: je.IDENT_VALUE,
      parse: (A) => {
        switch (A) {
          case 'relative':
            return Sr.RELATIVE;
          case 'absolute':
            return Sr.ABSOLUTE;
          case 'fixed':
            return Sr.FIXED;
          case 'sticky':
            return Sr.STICKY;
        }
        return Sr.STATIC;
      },
    },
    Dr = {
      name: 'text-shadow',
      initialValue: 'none',
      type: je.LIST,
      prefix: !1,
      parse: (A) =>
        1 === A.length && fe(A[0], 'none')
          ? []
          : Ke(A).map((A) => {
              const e = {
                color: Ye.TRANSPARENT,
                offsetX: Oe,
                offsetY: Oe,
                blur: Oe,
              };
              let t = 0;
              for (let r = 0; r < A.length; r++) {
                const s = A[r];
                Ie(s)
                  ? (0 === t
                      ? (e.offsetX = s)
                      : 1 === t
                      ? (e.offsetY = s)
                      : (e.blur = s),
                    t++)
                  : (e.color = xe(s));
              }
              return e;
            }),
    };
  var _r;
  !(function (A) {
    (A[(A.NONE = 0)] = 'NONE'),
      (A[(A.LOWERCASE = 1)] = 'LOWERCASE'),
      (A[(A.UPPERCASE = 2)] = 'UPPERCASE'),
      (A[(A.CAPITALIZE = 3)] = 'CAPITALIZE');
  })(_r || (_r = {}));
  const vr = {
      name: 'text-transform',
      initialValue: 'none',
      prefix: !1,
      type: je.IDENT_VALUE,
      parse: (A) => {
        switch (A) {
          case 'uppercase':
            return _r.UPPERCASE;
          case 'lowercase':
            return _r.LOWERCASE;
          case 'capitalize':
            return _r.CAPITALIZE;
        }
        return _r.NONE;
      },
    },
    xr = {
      name: 'transform',
      initialValue: 'none',
      prefix: !0,
      type: je.VALUE,
      parse: (A) => {
        if (A.type === AA.IDENT_TOKEN && 'none' === A.value) return null;
        if (A.type === AA.FUNCTION) {
          const e = Pr[A.name];
          if (void 0 === e)
            throw new Error(
              `Attempting to parse an unsupported transform function "${A.name}"`
            );
          return e(A.values);
        }
        return null;
      },
    },
    Pr = {
      matrix: (A) => {
        const e = A.filter((A) => A.type === AA.NUMBER_TOKEN).map(
          (A) => A.number
        );
        return 6 === e.length ? e : null;
      },
      matrix3d: (A) => {
        const e = A.filter((A) => A.type === AA.NUMBER_TOKEN).map(
            (A) => A.number
          ),
          [t, r, {}, {}, s, n, {}, {}, {}, {}, {}, {}, B, o, {}, {}] = e;
        return 16 === e.length ? [t, r, s, n, B, o] : null;
      },
    },
    zr = {
      type: AA.PERCENTAGE_TOKEN,
      number: 50,
      flags: 4,
    },
    Vr = [zr, zr],
    Xr = {
      name: 'transform-origin',
      initialValue: '50% 50%',
      prefix: !0,
      type: je.LIST,
      parse: (A) => {
        const e = A.filter(Te);
        return 2 !== e.length ? Vr : [e[0], e[1]];
      },
    };
  var Jr;
  !(function (A) {
    (A[(A.VISIBLE = 0)] = 'VISIBLE'),
      (A[(A.HIDDEN = 1)] = 'HIDDEN'),
      (A[(A.COLLAPSE = 2)] = 'COLLAPSE');
  })(Jr || (Jr = {}));
  const Gr = {
    name: 'visible',
    initialValue: 'none',
    prefix: !1,
    type: je.IDENT_VALUE,
    parse: (A) => {
      switch (A) {
        case 'hidden':
          return Jr.HIDDEN;
        case 'collapse':
          return Jr.COLLAPSE;
        case 'visible':
        default:
          return Jr.VISIBLE;
      }
    },
  };
  var kr;
  !(function (A) {
    (A.NORMAL = 'normal'),
      (A.BREAK_ALL = 'break-all'),
      (A.KEEP_ALL = 'keep-all');
  })(kr || (kr = {}));
  const Wr = {
      name: 'word-break',
      initialValue: 'normal',
      prefix: !1,
      type: je.IDENT_VALUE,
      parse: (A) => {
        switch (A) {
          case 'break-all':
            return kr.BREAK_ALL;
          case 'keep-all':
            return kr.KEEP_ALL;
          case 'normal':
          default:
            return kr.NORMAL;
        }
      },
    },
    Yr = {
      name: 'z-index',
      initialValue: 'auto',
      prefix: !1,
      type: je.VALUE,
      parse: (A) => {
        if (A.type === AA.IDENT_TOKEN)
          return {
            auto: !0,
            order: 0,
          };
        if (de(A))
          return {
            auto: !1,
            order: A.number,
          };
        throw new Error('Invalid z-index number parsed');
      },
    },
    jr = {
      name: 'opacity',
      initialValue: '1',
      type: je.VALUE,
      prefix: !1,
      parse: (A) => (de(A) ? A.number : 1),
    },
    qr = {
      name: 'text-decoration-color',
      initialValue: 'transparent',
      prefix: !1,
      type: je.TYPE_VALUE,
      format: 'color',
    },
    Zr = {
      name: 'text-decoration-line',
      initialValue: 'none',
      prefix: !1,
      type: je.LIST,
      parse: (A) =>
        A.filter(Fe)
          .map((A) => {
            switch (A.value) {
              case 'underline':
                return 1;
              case 'overline':
                return 2;
              case 'line-through':
                return 3;
              case 'none':
                return 4;
            }
            return 0;
          })
          .filter((A) => 0 !== A),
    },
    $r = {
      name: 'font-family',
      initialValue: '',
      prefix: !1,
      type: je.LIST,
      parse: (A) => {
        const e = [],
          t = [];
        return (
          A.forEach((A) => {
            switch (A.type) {
              case AA.IDENT_TOKEN:
              case AA.STRING_TOKEN:
                e.push(A.value);
                break;
              case AA.NUMBER_TOKEN:
                e.push(A.number.toString());
                break;
              case AA.COMMA_TOKEN:
                t.push(e.join(' ')), (e.length = 0);
            }
          }),
          e.length && t.push(e.join(' ')),
          t.map((A) => (-1 === A.indexOf(' ') ? A : `'${A}'`))
        );
      },
    },
    As = {
      name: 'font-size',
      initialValue: '0',
      prefix: !1,
      type: je.TYPE_VALUE,
      format: 'length',
    },
    es = {
      name: 'font-weight',
      initialValue: 'normal',
      type: je.VALUE,
      prefix: !1,
      parse: (A) => {
        if (de(A)) return A.number;
        if (Fe(A))
          switch (A.value) {
            case 'bold':
              return 700;
            case 'normal':
            default:
              return 400;
          }
        return 400;
      },
    },
    ts = {
      name: 'font-variant',
      initialValue: 'none',
      type: je.LIST,
      prefix: !1,
      parse: (A) => A.filter(Fe).map((A) => A.value),
    };
  var rs;
  !(function (A) {
    (A.NORMAL = 'normal'), (A.ITALIC = 'italic'), (A.OBLIQUE = 'oblique');
  })(rs || (rs = {}));
  const ss = {
      name: 'font-style',
      initialValue: 'normal',
      prefix: !1,
      type: je.IDENT_VALUE,
      parse: (A) => {
        switch (A) {
          case 'oblique':
            return rs.OBLIQUE;
          case 'italic':
            return rs.ITALIC;
          case 'normal':
          default:
            return rs.NORMAL;
        }
      },
    },
    ns = (A, e) => 0 != (A & e),
    Bs = {
      name: 'content',
      initialValue: 'none',
      type: je.LIST,
      prefix: !1,
      parse: (A) => {
        if (0 === A.length) return [];
        const e = A[0];
        return e.type === AA.IDENT_TOKEN && 'none' === e.value ? [] : A;
      },
    },
    os = {
      name: 'counter-increment',
      initialValue: 'none',
      prefix: !0,
      type: je.LIST,
      parse: (A) => {
        if (0 === A.length) return null;
        const e = A[0];
        if (e.type === AA.IDENT_TOKEN && 'none' === e.value) return null;
        const t = [],
          r = A.filter(pe);
        for (let A = 0; A < r.length; A++) {
          const e = r[A],
            s = r[A + 1];
          if (e.type === AA.IDENT_TOKEN) {
            const A = s && de(s) ? s.number : 1;
            t.push({
              counter: e.value,
              increment: A,
            });
          }
        }
        return t;
      },
    },
    is = {
      name: 'counter-reset',
      initialValue: 'none',
      prefix: !0,
      type: je.LIST,
      parse: (A) => {
        if (0 === A.length) return [];
        const e = [],
          t = A.filter(pe);
        for (let A = 0; A < t.length; A++) {
          const r = t[A],
            s = t[A + 1];
          if (Fe(r) && 'none' !== r.value) {
            const A = s && de(s) ? s.number : 0;
            e.push({
              counter: r.value,
              reset: A,
            });
          }
        }
        return e;
      },
    },
    as = {
      name: 'quotes',
      initialValue: 'none',
      prefix: !0,
      type: je.LIST,
      parse: (A) => {
        if (0 === A.length) return null;
        const e = A[0];
        if (e.type === AA.IDENT_TOKEN && 'none' === e.value) return null;
        const t = [],
          r = A.filter(He);
        if (r.length % 2 != 0) return null;
        for (let A = 0; A < r.length; A += 2) {
          const e = r[A].value,
            s = r[A + 1].value;
          t.push({
            open: e,
            close: s,
          });
        }
        return t;
      },
    },
    cs = (A, e, t) => {
      if (!A) return '';
      const r = A[Math.min(e, A.length - 1)];
      return r ? (t ? r.open : r.close) : '';
    },
    Qs = {
      name: 'box-shadow',
      initialValue: 'none',
      type: je.LIST,
      prefix: !1,
      parse: (A) =>
        1 === A.length && fe(A[0], 'none')
          ? []
          : Ke(A).map((A) => {
              const e = {
                color: 255,
                offsetX: Oe,
                offsetY: Oe,
                blur: Oe,
                spread: Oe,
                inset: !1,
              };
              let t = 0;
              for (let r = 0; r < A.length; r++) {
                const s = A[r];
                fe(s, 'inset')
                  ? (e.inset = !0)
                  : Ie(s)
                  ? (0 === t
                      ? (e.offsetX = s)
                      : 1 === t
                      ? (e.offsetY = s)
                      : 2 === t
                      ? (e.blur = s)
                      : (e.spread = s),
                    t++)
                  : (e.color = xe(s));
              }
              return e;
            }),
    };
  class ls {
    constructor(A) {
      (this.backgroundClip = us(Ze, A.backgroundClip)),
        (this.backgroundColor = us($e, A.backgroundColor)),
        (this.backgroundImage = us(Tt, A.backgroundImage)),
        (this.backgroundOrigin = us(Rt, A.backgroundOrigin)),
        (this.backgroundPosition = us(Ot, A.backgroundPosition)),
        (this.backgroundRepeat = us(Lt, A.backgroundRepeat)),
        (this.backgroundSize = us(Mt, A.backgroundSize)),
        (this.borderTopColor = us(vt, A.borderTopColor)),
        (this.borderRightColor = us(xt, A.borderRightColor)),
        (this.borderBottomColor = us(Pt, A.borderBottomColor)),
        (this.borderLeftColor = us(zt, A.borderLeftColor)),
        (this.borderTopLeftRadius = us(Xt, A.borderTopLeftRadius)),
        (this.borderTopRightRadius = us(Jt, A.borderTopRightRadius)),
        (this.borderBottomRightRadius = us(Gt, A.borderBottomRightRadius)),
        (this.borderBottomLeftRadius = us(kt, A.borderBottomLeftRadius)),
        (this.borderTopStyle = us(jt, A.borderTopStyle)),
        (this.borderRightStyle = us(qt, A.borderRightStyle)),
        (this.borderBottomStyle = us(Zt, A.borderBottomStyle)),
        (this.borderLeftStyle = us($t, A.borderLeftStyle)),
        (this.borderTopWidth = us(er, A.borderTopWidth)),
        (this.borderRightWidth = us(tr, A.borderRightWidth)),
        (this.borderBottomWidth = us(rr, A.borderBottomWidth)),
        (this.borderLeftWidth = us(sr, A.borderLeftWidth)),
        (this.boxShadow = us(Qs, A.boxShadow)),
        (this.color = us(nr, A.color)),
        (this.display = us(Br, A.display)),
        (this.float = us(ar, A.cssFloat)),
        (this.fontFamily = us($r, A.fontFamily)),
        (this.fontSize = us(As, A.fontSize)),
        (this.fontStyle = us(ss, A.fontStyle)),
        (this.fontVariant = us(ts, A.fontVariant)),
        (this.fontWeight = us(es, A.fontWeight)),
        (this.letterSpacing = us(cr, A.letterSpacing)),
        (this.lineBreak = us(lr, A.lineBreak)),
        (this.lineHeight = us(wr, A.lineHeight)),
        (this.listStyleImage = us(Ur, A.listStyleImage)),
        (this.listStylePosition = us(gr, A.listStylePosition)),
        (this.listStyleType = us(hr, A.listStyleType)),
        (this.marginTop = us(dr, A.marginTop)),
        (this.marginRight = us(Fr, A.marginRight)),
        (this.marginBottom = us(Hr, A.marginBottom)),
        (this.marginLeft = us(fr, A.marginLeft)),
        (this.opacity = us(jr, A.opacity));
      const e = us(Nr, A.overflow);
      (this.overflowX = e[0]),
        (this.overflowY = e[e.length > 1 ? 1 : 0]),
        (this.overflowWrap = us(mr, A.overflowWrap)),
        (this.paddingTop = us(Tr, A.paddingTop)),
        (this.paddingRight = us(Rr, A.paddingRight)),
        (this.paddingBottom = us(Or, A.paddingBottom)),
        (this.paddingLeft = us(yr, A.paddingLeft)),
        (this.position = us(Mr, A.position)),
        (this.textAlign = us(br, A.textAlign)),
        (this.textDecorationColor = us(qr, A.textDecorationColor || A.color)),
        (this.textDecorationLine = us(Zr, A.textDecorationLine)),
        (this.textShadow = us(Dr, A.textShadow)),
        (this.textTransform = us(vr, A.textTransform)),
        (this.transform = us(xr, A.transform)),
        (this.transformOrigin = us(Xr, A.transformOrigin)),
        (this.visibility = us(Gr, A.visibility)),
        (this.wordBreak = us(Wr, A.wordBreak)),
        (this.zIndex = us(Yr, A.zIndex));
    }
    isVisible() {
      return (
        this.display > 0 && this.opacity > 0 && this.visibility === Jr.VISIBLE
      );
    }
    isTransparent() {
      return Pe(this.backgroundColor);
    }
    isTransformed() {
      return null !== this.transform;
    }
    isPositioned() {
      return this.position !== Sr.STATIC;
    }
    isPositionedWithZIndex() {
      return this.isPositioned() && !this.zIndex.auto;
    }
    isFloating() {
      return this.float !== ir.NONE;
    }
    isInlineLevel() {
      return (
        ns(this.display, 4) ||
        ns(this.display, 33554432) ||
        ns(this.display, 268435456) ||
        ns(this.display, 536870912) ||
        ns(this.display, 67108864) ||
        ns(this.display, 134217728)
      );
    }
  }
  class ws {
    constructor(A) {
      (this.content = us(Bs, A.content)), (this.quotes = us(as, A.quotes));
    }
  }
  class Us {
    constructor(A) {
      (this.counterIncrement = us(os, A.counterIncrement)),
        (this.counterReset = us(is, A.counterReset));
    }
  }
  const us = (A, e) => {
    const t = new Ce(),
      r = null != e ? e.toString() : A.initialValue;
    t.write(r);
    const s = new he(t.read());
    switch (A.type) {
      case je.IDENT_VALUE:
        const e = s.parseComponentValue();
        return A.parse(Fe(e) ? e.value : A.initialValue);
      case je.VALUE:
        return A.parse(s.parseComponentValue());
      case je.LIST:
        return A.parse(s.parseComponentValues());
      case je.TOKEN_VALUE:
        return s.parseComponentValue();
      case je.TYPE_VALUE:
        switch (A.format) {
          case 'angle':
            return Me(s.parseComponentValue());
          case 'color':
            return xe(s.parseComponentValue());
          case 'image':
            return mt(s.parseComponentValue());
          case 'length':
            const A = s.parseComponentValue();
            return Ie(A) ? A : Oe;
          case 'length-percentage':
            const e = s.parseComponentValue();
            return Te(e) ? e : Oe;
        }
    }
    throw new Error(
      'Attempting to parse unsupported css format type ' + A.format
    );
  };
  class gs {
    constructor(A) {
      (this.styles = new ls(window.getComputedStyle(A, null))),
        (this.textNodes = []),
        (this.elements = []),
        null !== this.styles.transform && ks(A) && (A.style.transform = 'none'),
        (this.bounds = W(A)),
        (this.flags = 0);
    }
  }
  class Cs {
    constructor(A, e) {
      (this.text = A), (this.bounds = e);
    }
  }
  const hs = (A) => {
      const e = A.ownerDocument;
      if (e) {
        const t = e.createElement('html2canvaswrapper');
        t.appendChild(A.cloneNode(!0));
        const r = A.parentNode;
        if (r) {
          r.replaceChild(t, A);
          const e = W(t);
          return t.firstChild && r.replaceChild(t.firstChild, t), e;
        }
      }
      return new k(0, 0, 0, 0);
    },
    Es = (A, e, t) => {
      const r = A.ownerDocument;
      if (!r) throw new Error('Node has no owner document');
      const s = r.createRange();
      return (
        s.setStart(A, e),
        s.setEnd(A, e + t),
        k.fromClientRect(s.getBoundingClientRect())
      );
    },
    ds = (A, e) => (0 !== e.letterSpacing ? Y(A).map((A) => j(A)) : Fs(A, e)),
    Fs = (A, e) => {
      const t = (function (A, e) {
          var t = Y(A),
            r = _A(t, e),
            s = r[0],
            n = r[1],
            B = r[2],
            o = t.length,
            i = 0,
            a = 0;
          return {
            next: function () {
              if (a >= o)
                return {
                  done: !0,
                  value: null,
                };
              for (var A = '×'; a < o && '×' === (A = DA(t, n, s, ++a, B)); );
              if ('×' !== A || a === o) {
                var e = new vA(t, A, i, a);
                return (
                  (i = a),
                  {
                    value: e,
                    done: !1,
                  }
                );
              }
              return {
                done: !0,
                value: null,
              };
            },
          };
        })(A, {
          lineBreak: e.lineBreak,
          wordBreak:
            e.overflowWrap === Kr.BREAK_WORD ? 'break-word' : e.wordBreak,
        }),
        r = [];
      let s;
      for (; !(s = t.next()).done; ) s.value && r.push(s.value.slice());
      return r;
    };
  class Hs {
    constructor(A, e) {
      (this.text = fs(A.data, e.textTransform)),
        (this.textBounds = ((A, e, t) => {
          const r = ds(A, e),
            s = [];
          let n = 0;
          return (
            r.forEach((A) => {
              if (e.textDecorationLine.length || A.trim().length > 0)
                if (ct.SUPPORT_RANGE_BOUNDS)
                  s.push(new Cs(A, Es(t, n, A.length)));
                else {
                  const e = t.splitText(A.length);
                  s.push(new Cs(A, hs(t))), (t = e);
                }
              else ct.SUPPORT_RANGE_BOUNDS || (t = t.splitText(A.length));
              n += A.length;
            }),
            s
          );
        })(this.text, e, A));
    }
  }
  const fs = (A, e) => {
      switch (e) {
        case _r.LOWERCASE:
          return A.toLowerCase();
        case _r.CAPITALIZE:
          return A.replace(ps, Ns);
        case _r.UPPERCASE:
          return A.toUpperCase();
        default:
          return A;
      }
    },
    ps = /(^|\s|:|-|\(|\))([a-z])/g,
    Ns = (A, e, t) => (A.length > 0 ? e + t.toUpperCase() : A);
  class Ks extends gs {
    constructor(A) {
      super(A),
        (this.src = A.currentSrc || A.src),
        (this.intrinsicWidth = A.naturalWidth),
        (this.intrinsicHeight = A.naturalHeight),
        lt.getInstance().addImage(this.src);
    }
  }
  class ms extends gs {
    constructor(A) {
      super(A),
        (this.canvas = A),
        (this.intrinsicWidth = A.width),
        (this.intrinsicHeight = A.height);
    }
  }
  class Is extends gs {
    constructor(A) {
      super(A);
      const e = new XMLSerializer();
      (this.svg =
        'data:image/svg+xml,' + encodeURIComponent(e.serializeToString(A))),
        (this.intrinsicWidth = A.width.baseVal.value),
        (this.intrinsicHeight = A.height.baseVal.value),
        lt.getInstance().addImage(this.svg);
    }
  }
  class Ts extends gs {
    constructor(A) {
      super(A), (this.value = A.value);
    }
  }
  class Rs extends gs {
    constructor(A) {
      super(A),
        (this.start = A.start),
        (this.reversed = 'boolean' == typeof A.reversed && !0 === A.reversed);
    }
  }
  const Os = [
      {
        type: AA.DIMENSION_TOKEN,
        flags: 0,
        unit: 'px',
        number: 3,
      },
    ],
    ys = [
      {
        type: AA.PERCENTAGE_TOKEN,
        flags: 0,
        number: 50,
      },
    ],
    Ls = 'password';
  class bs extends gs {
    constructor(A) {
      var e;
      switch (
        (super(A),
        (this.type = A.type.toLowerCase()),
        (this.checked = A.checked),
        (this.value = ((A) => {
          const e =
            A.type === Ls ? new Array(A.value.length + 1).join('•') : A.value;
          return 0 === e.length ? A.placeholder || '' : e;
        })(A)),
        ('checkbox' !== this.type && 'radio' !== this.type) ||
          ((this.styles.backgroundColor = 3739148031),
          (this.styles.borderTopColor =
            this.styles.borderRightColor =
            this.styles.borderBottomColor =
            this.styles.borderLeftColor =
              2779096575),
          (this.styles.borderTopWidth =
            this.styles.borderRightWidth =
            this.styles.borderBottomWidth =
            this.styles.borderLeftWidth =
              1),
          (this.styles.borderTopStyle =
            this.styles.borderRightStyle =
            this.styles.borderBottomStyle =
            this.styles.borderLeftStyle =
              Wt.SOLID),
          (this.styles.backgroundClip = [qe.BORDER_BOX]),
          (this.styles.backgroundOrigin = [0]),
          (this.bounds =
            (e = this.bounds).width > e.height
              ? new k(
                  e.left + (e.width - e.height) / 2,
                  e.top,
                  e.height,
                  e.height
                )
              : e.width < e.height
              ? new k(
                  e.left,
                  e.top + (e.height - e.width) / 2,
                  e.width,
                  e.width
                )
              : e)),
        this.type)
      ) {
        case 'checkbox':
          this.styles.borderTopRightRadius =
            this.styles.borderTopLeftRadius =
            this.styles.borderBottomRightRadius =
            this.styles.borderBottomLeftRadius =
              Os;
          break;
        case 'radio':
          this.styles.borderTopRightRadius =
            this.styles.borderTopLeftRadius =
            this.styles.borderBottomRightRadius =
            this.styles.borderBottomLeftRadius =
              ys;
      }
    }
  }
  class Ss extends gs {
    constructor(A) {
      super(A);
      const e = A.options[A.selectedIndex || 0];
      this.value = (e && e.text) || '';
    }
  }
  class Ms extends gs {
    constructor(A) {
      super(A), (this.value = A.value);
    }
  }
  const Ds = (A) => xe(he.create(A).parseComponentValue());
  class _s extends gs {
    constructor(A) {
      super(A),
        (this.src = A.src),
        (this.width = parseInt(A.width, 10) || 0),
        (this.height = parseInt(A.height, 10) || 0),
        (this.backgroundColor = this.styles.backgroundColor);
      try {
        if (
          A.contentWindow &&
          A.contentWindow.document &&
          A.contentWindow.document.documentElement
        ) {
          this.tree = zs(A.contentWindow.document.documentElement);
          const e = A.contentWindow.document.documentElement
              ? Ds(
                  getComputedStyle(A.contentWindow.document.documentElement)
                    .backgroundColor
                )
              : Ye.TRANSPARENT,
            t = A.contentWindow.document.body
              ? Ds(
                  getComputedStyle(A.contentWindow.document.body)
                    .backgroundColor
                )
              : Ye.TRANSPARENT;
          this.backgroundColor = Pe(e)
            ? Pe(t)
              ? this.styles.backgroundColor
              : t
            : e;
        }
      } catch (A) {}
    }
  }
  const vs = ['OL', 'UL', 'MENU'],
    xs = (A, e, t) => {
      for (let r, s = A.firstChild; s; s = r)
        if (((r = s.nextSibling), Js(s) && s.data.trim().length > 0))
          e.textNodes.push(new Hs(s, e.styles));
        else if (Gs(s)) {
          const A = Ps(s);
          A.styles.isVisible() &&
            (Vs(s, A, t) ? (A.flags |= 4) : Xs(A.styles) && (A.flags |= 2),
            -1 !== vs.indexOf(s.tagName) && (A.flags |= 8),
            e.elements.push(A),
            nn(s) || Zs(s) || Bn(s) || xs(s, A, t));
        }
    },
    Ps = (A) =>
      en(A)
        ? new Ks(A)
        : An(A)
        ? new ms(A)
        : Zs(A)
        ? new Is(A)
        : Ys(A)
        ? new Ts(A)
        : js(A)
        ? new Rs(A)
        : qs(A)
        ? new bs(A)
        : Bn(A)
        ? new Ss(A)
        : nn(A)
        ? new Ms(A)
        : tn(A)
        ? new _s(A)
        : new gs(A),
    zs = (A) => {
      const e = Ps(A);
      return (e.flags |= 4), xs(A, e, e), e;
    },
    Vs = (A, e, t) =>
      e.styles.isPositionedWithZIndex() ||
      e.styles.opacity < 1 ||
      e.styles.isTransformed() ||
      ($s(A) && t.styles.isTransparent()),
    Xs = (A) => A.isPositioned() || A.isFloating(),
    Js = (A) => A.nodeType === Node.TEXT_NODE,
    Gs = (A) => A.nodeType === Node.ELEMENT_NODE,
    ks = (A) => Gs(A) && void 0 !== A.style && !Ws(A),
    Ws = (A) => 'object' == typeof A.className,
    Ys = (A) => 'LI' === A.tagName,
    js = (A) => 'OL' === A.tagName,
    qs = (A) => 'INPUT' === A.tagName,
    Zs = (A) => 'svg' === A.tagName,
    $s = (A) => 'BODY' === A.tagName,
    An = (A) => 'CANVAS' === A.tagName,
    en = (A) => 'IMG' === A.tagName,
    tn = (A) => 'IFRAME' === A.tagName,
    rn = (A) => 'STYLE' === A.tagName,
    sn = (A) => 'SCRIPT' === A.tagName,
    nn = (A) => 'TEXTAREA' === A.tagName,
    Bn = (A) => 'SELECT' === A.tagName;
  class on {
    constructor() {
      this.counters = {};
    }
    getCounterValue(A) {
      const e = this.counters[A];
      return e && e.length ? e[e.length - 1] : 1;
    }
    getCounterValues(A) {
      const e = this.counters[A];
      return e || [];
    }
    pop(A) {
      A.forEach((A) => this.counters[A].pop());
    }
    parse(A) {
      const e = A.counterIncrement,
        t = A.counterReset;
      let r = !0;
      null !== e &&
        e.forEach((A) => {
          const e = this.counters[A.counter];
          e &&
            0 !== A.increment &&
            ((r = !1), (e[Math.max(0, e.length - 1)] += A.increment));
        });
      const s = [];
      return (
        r &&
          t.forEach((A) => {
            let e = this.counters[A.counter];
            s.push(A.counter),
              e || (e = this.counters[A.counter] = []),
              e.push(A.reset);
          }),
        s
      );
    }
  }
  const an = {
      integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      values: [
        'M',
        'CM',
        'D',
        'CD',
        'C',
        'XC',
        'L',
        'XL',
        'X',
        'IX',
        'V',
        'IV',
        'I',
      ],
    },
    cn = {
      integers: [
        9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500,
        400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5,
        4, 3, 2, 1,
      ],
      values: [
        'Ք',
        'Փ',
        'Ւ',
        'Ց',
        'Ր',
        'Տ',
        'Վ',
        'Ս',
        'Ռ',
        'Ջ',
        'Պ',
        'Չ',
        'Ո',
        'Շ',
        'Ն',
        'Յ',
        'Մ',
        'Ճ',
        'Ղ',
        'Ձ',
        'Հ',
        'Կ',
        'Ծ',
        'Խ',
        'Լ',
        'Ի',
        'Ժ',
        'Թ',
        'Ը',
        'Է',
        'Զ',
        'Ե',
        'Դ',
        'Գ',
        'Բ',
        'Ա',
      ],
    },
    Qn = {
      integers: [
        1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100,
        90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5,
        4, 3, 2, 1,
      ],
      values: [
        'י׳',
        'ט׳',
        'ח׳',
        'ז׳',
        'ו׳',
        'ה׳',
        'ד׳',
        'ג׳',
        'ב׳',
        'א׳',
        'ת',
        'ש',
        'ר',
        'ק',
        'צ',
        'פ',
        'ע',
        'ס',
        'נ',
        'מ',
        'ל',
        'כ',
        'יט',
        'יח',
        'יז',
        'טז',
        'טו',
        'י',
        'ט',
        'ח',
        'ז',
        'ו',
        'ה',
        'ד',
        'ג',
        'ב',
        'א',
      ],
    },
    ln = {
      integers: [
        1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600,
        500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6,
        5, 4, 3, 2, 1,
      ],
      values: [
        'ჵ',
        'ჰ',
        'ჯ',
        'ჴ',
        'ხ',
        'ჭ',
        'წ',
        'ძ',
        'ც',
        'ჩ',
        'შ',
        'ყ',
        'ღ',
        'ქ',
        'ფ',
        'ჳ',
        'ტ',
        'ს',
        'რ',
        'ჟ',
        'პ',
        'ო',
        'ჲ',
        'ნ',
        'მ',
        'ლ',
        'კ',
        'ი',
        'თ',
        'ჱ',
        'ზ',
        'ვ',
        'ე',
        'დ',
        'გ',
        'ბ',
        'ა',
      ],
    },
    wn = (A, e, t, r, s, n) =>
      A < e || A > t
        ? hn(A, s, n.length > 0)
        : r.integers.reduce((e, t, s) => {
            for (; A >= t; ) (A -= t), (e += r.values[s]);
            return e;
          }, '') + n,
    Un = (A, e, t, r) => {
      let s = '';
      do {
        t || A--, (s = r(A) + s), (A /= e);
      } while (A * e >= e);
      return s;
    },
    un = (A, e, t, r, s) => {
      const n = t - e + 1;
      return (
        (A < 0 ? '-' : '') +
        (Un(Math.abs(A), n, r, (A) => j(Math.floor(A % n) + e)) + s)
      );
    },
    gn = (A, e, t = '. ') => {
      const r = e.length;
      return Un(Math.abs(A), r, !1, (A) => e[Math.floor(A % r)]) + t;
    },
    Cn = (A, e, t, r, s, n) => {
      if (A < -9999 || A > 9999) return hn(A, Cr.CJK_DECIMAL, s.length > 0);
      let B = Math.abs(A),
        o = s;
      if (0 === B) return e[0] + o;
      for (let r = 0; B > 0 && r <= 4; r++) {
        let s = B % 10;
        0 === s && ns(n, 1) && '' !== o
          ? (o = e[s] + o)
          : s > 1 ||
            (1 === s && 0 === r) ||
            (1 === s && 1 === r && ns(n, 2)) ||
            (1 === s && 1 === r && ns(n, 4) && A > 100) ||
            (1 === s && r > 1 && ns(n, 8))
          ? (o = e[s] + (r > 0 ? t[r - 1] : '') + o)
          : 1 === s && r > 0 && (o = t[r - 1] + o),
          (B = Math.floor(B / 10));
      }
      return (A < 0 ? r : '') + o;
    },
    hn = (A, e, t) => {
      const r = t ? '. ' : '',
        s = t ? '、' : '',
        n = t ? ', ' : '',
        B = t ? ' ' : '';
      switch (e) {
        case Cr.DISC:
          return '•' + B;
        case Cr.CIRCLE:
          return '◦' + B;
        case Cr.SQUARE:
          return '◾' + B;
        case Cr.DECIMAL_LEADING_ZERO:
          const e = un(A, 48, 57, !0, r);
          return e.length < 4 ? '0' + e : e;
        case Cr.CJK_DECIMAL:
          return gn(A, '〇一二三四五六七八九', s);
        case Cr.LOWER_ROMAN:
          return wn(A, 1, 3999, an, Cr.DECIMAL, r).toLowerCase();
        case Cr.UPPER_ROMAN:
          return wn(A, 1, 3999, an, Cr.DECIMAL, r);
        case Cr.LOWER_GREEK:
          return un(A, 945, 969, !1, r);
        case Cr.LOWER_ALPHA:
          return un(A, 97, 122, !1, r);
        case Cr.UPPER_ALPHA:
          return un(A, 65, 90, !1, r);
        case Cr.ARABIC_INDIC:
          return un(A, 1632, 1641, !0, r);
        case Cr.ARMENIAN:
        case Cr.UPPER_ARMENIAN:
          return wn(A, 1, 9999, cn, Cr.DECIMAL, r);
        case Cr.LOWER_ARMENIAN:
          return wn(A, 1, 9999, cn, Cr.DECIMAL, r).toLowerCase();
        case Cr.BENGALI:
          return un(A, 2534, 2543, !0, r);
        case Cr.CAMBODIAN:
        case Cr.KHMER:
          return un(A, 6112, 6121, !0, r);
        case Cr.CJK_EARTHLY_BRANCH:
          return gn(A, '子丑寅卯辰巳午未申酉戌亥', s);
        case Cr.CJK_HEAVENLY_STEM:
          return gn(A, '甲乙丙丁戊己庚辛壬癸', s);
        case Cr.CJK_IDEOGRAPHIC:
        case Cr.TRAD_CHINESE_INFORMAL:
          return Cn(A, '零一二三四五六七八九', '十百千萬', '負', s, 14);
        case Cr.TRAD_CHINESE_FORMAL:
          return Cn(A, '零壹貳參肆伍陸柒捌玖', '拾佰仟萬', '負', s, 15);
        case Cr.SIMP_CHINESE_INFORMAL:
          return Cn(A, '零一二三四五六七八九', '十百千萬', '负', s, 14);
        case Cr.SIMP_CHINESE_FORMAL:
          return Cn(A, '零壹贰叁肆伍陆柒捌玖', '拾佰仟萬', '负', s, 15);
        case Cr.JAPANESE_INFORMAL:
          return Cn(A, '〇一二三四五六七八九', '十百千万', 'マイナス', s, 0);
        case Cr.JAPANESE_FORMAL:
          return Cn(A, '零壱弐参四伍六七八九', '拾百千万', 'マイナス', s, 7);
        case Cr.KOREAN_HANGUL_FORMAL:
          return Cn(A, '영일이삼사오육칠팔구', '십백천만', '마이너스', n, 7);
        case Cr.KOREAN_HANJA_INFORMAL:
          return Cn(A, '零一二三四五六七八九', '十百千萬', '마이너스', n, 0);
        case Cr.KOREAN_HANJA_FORMAL:
          return Cn(A, '零壹貳參四五六七八九', '拾百千', '마이너스', n, 7);
        case Cr.DEVANAGARI:
          return un(A, 2406, 2415, !0, r);
        case Cr.GEORGIAN:
          return wn(A, 1, 19999, ln, Cr.DECIMAL, r);
        case Cr.GUJARATI:
          return un(A, 2790, 2799, !0, r);
        case Cr.GURMUKHI:
          return un(A, 2662, 2671, !0, r);
        case Cr.HEBREW:
          return wn(A, 1, 10999, Qn, Cr.DECIMAL, r);
        case Cr.HIRAGANA:
          return gn(
            A,
            'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん'
          );
        case Cr.HIRAGANA_IROHA:
          return gn(
            A,
            'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす'
          );
        case Cr.KANNADA:
          return un(A, 3302, 3311, !0, r);
        case Cr.KATAKANA:
          return gn(
            A,
            'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン',
            s
          );
        case Cr.KATAKANA_IROHA:
          return gn(
            A,
            'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス',
            s
          );
        case Cr.LAO:
          return un(A, 3792, 3801, !0, r);
        case Cr.MONGOLIAN:
          return un(A, 6160, 6169, !0, r);
        case Cr.MYANMAR:
          return un(A, 4160, 4169, !0, r);
        case Cr.ORIYA:
          return un(A, 2918, 2927, !0, r);
        case Cr.PERSIAN:
          return un(A, 1776, 1785, !0, r);
        case Cr.TAMIL:
          return un(A, 3046, 3055, !0, r);
        case Cr.TELUGU:
          return un(A, 3174, 3183, !0, r);
        case Cr.THAI:
          return un(A, 3664, 3673, !0, r);
        case Cr.TIBETAN:
          return un(A, 3872, 3881, !0, r);
        case Cr.DECIMAL:
        default:
          return un(A, 48, 57, !0, r);
      }
    };
  class En {
    constructor(A, e) {
      if (
        ((this.options = e),
        (this.scrolledElements = []),
        (this.referenceElement = A),
        (this.counters = new on()),
        (this.quoteDepth = 0),
        !A.ownerDocument)
      )
        throw new Error('Cloned element does not have an owner document');
      this.documentElement = this.cloneNode(A.ownerDocument.documentElement);
    }
    toIFrame(A, e) {
      const t = Fn(A, e);
      if (!t.contentWindow)
        return Promise.reject('Unable to find iframe window');
      const r = A.defaultView.pageXOffset,
        s = A.defaultView.pageYOffset,
        n = t.contentWindow,
        B = n.document,
        o = Hn(t).then(async () => {
          this.scrolledElements.forEach(Kn),
            n &&
              (n.scrollTo(e.left, e.top),
              !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) ||
                (n.scrollY === e.top && n.scrollX === e.left) ||
                ((B.documentElement.style.top = -e.top + 'px'),
                (B.documentElement.style.left = -e.left + 'px'),
                (B.documentElement.style.position = 'absolute')));
          const A = this.options.onclone;
          return void 0 === this.clonedReferenceElement
            ? Promise.reject(
                `Error finding the ${this.referenceElement.nodeName} in the cloned document`
              )
            : (B.fonts && B.fonts.ready && (await B.fonts.ready),
              'function' == typeof A
                ? Promise.resolve()
                    .then(() => A(B))
                    .then(() => t)
                : t);
        });
      return (
        B.open(),
        B.write(pn(document.doctype) + '<html></html>'),
        Nn(this.referenceElement.ownerDocument, r, s),
        B.replaceChild(B.adoptNode(this.documentElement), B.documentElement),
        B.close(),
        o
      );
    }
    createElementClone(A) {
      if (An(A)) return this.createCanvasClone(A);
      if (rn(A)) return this.createStyleClone(A);
      const e = A.cloneNode(!1);
      return en(e) && 'lazy' === e.loading && (e.loading = 'eager'), e;
    }
    createStyleClone(A) {
      try {
        const e = A.sheet;
        if (e && e.cssRules) {
          const t = [].slice
              .call(e.cssRules, 0)
              .reduce(
                (A, e) =>
                  e && 'string' == typeof e.cssText ? A + e.cssText : A,
                ''
              ),
            r = A.cloneNode(!1);
          return (r.textContent = t), r;
        }
      } catch (A) {
        if (
          (Qt.getInstance(this.options.id).error(
            'Unable to access cssRules property',
            A
          ),
          'SecurityError' !== A.name)
        )
          throw A;
      }
      return A.cloneNode(!1);
    }
    createCanvasClone(A) {
      if (this.options.inlineImages && A.ownerDocument) {
        const e = A.ownerDocument.createElement('img');
        try {
          return (e.src = A.toDataURL()), e;
        } catch (A) {
          Qt.getInstance(this.options.id).info(
            'Unable to clone canvas contents, canvas is tainted'
          );
        }
      }
      const e = A.cloneNode(!1);
      try {
        (e.width = A.width), (e.height = A.height);
        const t = A.getContext('2d'),
          r = e.getContext('2d');
        return (
          r &&
            (t
              ? r.putImageData(t.getImageData(0, 0, A.width, A.height), 0, 0)
              : r.drawImage(A, 0, 0)),
          e
        );
      } catch (A) {}
      return e;
    }
    cloneNode(A) {
      if (Js(A)) return document.createTextNode(A.data);
      if (!A.ownerDocument) return A.cloneNode(!1);
      const e = A.ownerDocument.defaultView;
      if (e && Gs(A) && (ks(A) || Ws(A))) {
        const t = this.createElementClone(A),
          r = e.getComputedStyle(A),
          s = e.getComputedStyle(A, ':before'),
          n = e.getComputedStyle(A, ':after');
        this.referenceElement === A &&
          ks(t) &&
          (this.clonedReferenceElement = t),
          $s(t) && Tn(t);
        const B = this.counters.parse(new Us(r)),
          o = this.resolvePseudoContent(A, t, s, dn.BEFORE);
        for (let e = A.firstChild; e; e = e.nextSibling)
          (Gs(e) &&
            (sn(e) ||
              e.hasAttribute('data-html2canvas-ignore') ||
              ('function' == typeof this.options.ignoreElements &&
                this.options.ignoreElements(e)))) ||
            (this.options.copyStyles && Gs(e) && rn(e)) ||
            t.appendChild(this.cloneNode(e));
        o && t.insertBefore(o, t.firstChild);
        const i = this.resolvePseudoContent(A, t, n, dn.AFTER);
        return (
          i && t.appendChild(i),
          this.counters.pop(B),
          r && (this.options.copyStyles || Ws(A)) && !tn(A) && fn(r, t),
          (0 === A.scrollTop && 0 === A.scrollLeft) ||
            this.scrolledElements.push([t, A.scrollLeft, A.scrollTop]),
          (nn(A) || Bn(A)) && (nn(t) || Bn(t)) && (t.value = A.value),
          t
        );
      }
      return A.cloneNode(!1);
    }
    resolvePseudoContent(A, e, t, r) {
      if (!t) return;
      const s = t.content,
        n = e.ownerDocument;
      if (
        !n ||
        !s ||
        'none' === s ||
        '-moz-alt-content' === s ||
        'none' === t.display
      )
        return;
      this.counters.parse(new Us(t));
      const B = new ws(t),
        o = n.createElement('html2canvaspseudoelement');
      fn(t, o),
        B.content.forEach((e) => {
          if (e.type === AA.STRING_TOKEN)
            o.appendChild(n.createTextNode(e.value));
          else if (e.type === AA.URL_TOKEN) {
            const A = n.createElement('img');
            (A.src = e.value), (A.style.opacity = '1'), o.appendChild(A);
          } else if (e.type === AA.FUNCTION) {
            if ('attr' === e.name) {
              const t = e.values.filter(Fe);
              t.length &&
                o.appendChild(
                  n.createTextNode(A.getAttribute(t[0].value) || '')
                );
            } else if ('counter' === e.name) {
              const [A, t] = e.values.filter(Ne);
              if (A && Fe(A)) {
                const e = this.counters.getCounterValue(A.value),
                  r = t && Fe(t) ? hr.parse(t.value) : Cr.DECIMAL;
                o.appendChild(n.createTextNode(hn(e, r, !1)));
              }
            } else if ('counters' === e.name) {
              const [A, t, r] = e.values.filter(Ne);
              if (A && Fe(A)) {
                const e = this.counters.getCounterValues(A.value),
                  s = r && Fe(r) ? hr.parse(r.value) : Cr.DECIMAL,
                  B = t && t.type === AA.STRING_TOKEN ? t.value : '',
                  i = e.map((A) => hn(A, s, !1)).join(B);
                o.appendChild(n.createTextNode(i));
              }
            }
          } else if (e.type === AA.IDENT_TOKEN)
            switch (e.value) {
              case 'open-quote':
                o.appendChild(
                  n.createTextNode(cs(B.quotes, this.quoteDepth++, !0))
                );
                break;
              case 'close-quote':
                o.appendChild(
                  n.createTextNode(cs(B.quotes, --this.quoteDepth, !1))
                );
                break;
              default:
                o.appendChild(n.createTextNode(e.value));
            }
        }),
        (o.className = `${mn} ${In}`);
      const i = r === dn.BEFORE ? ' ' + mn : ' ' + In;
      return Ws(e) ? (e.className.baseValue += i) : (e.className += i), o;
    }
    static destroy(A) {
      return !!A.parentNode && (A.parentNode.removeChild(A), !0);
    }
  }
  var dn;
  !(function (A) {
    (A[(A.BEFORE = 0)] = 'BEFORE'), (A[(A.AFTER = 1)] = 'AFTER');
  })(dn || (dn = {}));
  const Fn = (A, e) => {
      const t = A.createElement('iframe');
      return (
        (t.className = 'html2canvas-container'),
        (t.style.visibility = 'hidden'),
        (t.style.position = 'fixed'),
        (t.style.left = '-10000px'),
        (t.style.top = '0px'),
        (t.style.border = '0'),
        (t.width = e.width.toString()),
        (t.height = e.height.toString()),
        (t.scrolling = 'no'),
        t.setAttribute('data-html2canvas-ignore', 'true'),
        A.body.appendChild(t),
        t
      );
    },
    Hn = (A) =>
      new Promise((e, t) => {
        const r = A.contentWindow;
        if (!r) return t('No window assigned for iframe');
        const s = r.document;
        r.onload =
          A.onload =
          s.onreadystatechange =
            () => {
              r.onload = A.onload = s.onreadystatechange = null;
              const t = setInterval(() => {
                s.body.childNodes.length > 0 &&
                  'complete' === s.readyState &&
                  (clearInterval(t), e(A));
              }, 50);
            };
      }),
    fn = (A, e) => {
      for (let t = A.length - 1; t >= 0; t--) {
        const r = A.item(t);
        'content' !== r && e.style.setProperty(r, A.getPropertyValue(r));
      }
      return e;
    },
    pn = (A) => {
      let e = '';
      return (
        A &&
          ((e += '<!DOCTYPE '),
          A.name && (e += A.name),
          A.internalSubset && (e += A.internalSubset),
          A.publicId && (e += `"${A.publicId}"`),
          A.systemId && (e += `"${A.systemId}"`),
          (e += '>')),
        e
      );
    },
    Nn = (A, e, t) => {
      A &&
        A.defaultView &&
        (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) &&
        A.defaultView.scrollTo(e, t);
    },
    Kn = ([A, e, t]) => {
      (A.scrollLeft = e), (A.scrollTop = t);
    },
    mn = '___html2canvas___pseudoelement_before',
    In = '___html2canvas___pseudoelement_after',
    Tn = (A) => {
      Rn(
        A,
        `.${mn}:before{\n    content: "" !important;\n    display: none !important;\n}\n         .${In}:after{\n    content: "" !important;\n    display: none !important;\n}`
      );
    },
    Rn = (A, e) => {
      const t = A.ownerDocument;
      if (t) {
        const r = t.createElement('style');
        (r.textContent = e), A.appendChild(r);
      }
    };
  var On;
  !(function (A) {
    (A[(A.VECTOR = 0)] = 'VECTOR'), (A[(A.BEZIER_CURVE = 1)] = 'BEZIER_CURVE');
  })(On || (On = {}));
  const yn = (A, e) => A.length === e.length && A.some((A, t) => A === e[t]);
  class Ln {
    constructor(A, e) {
      (this.type = On.VECTOR), (this.x = A), (this.y = e);
    }
    add(A, e) {
      return new Ln(this.x + A, this.y + e);
    }
  }
  const bn = (A, e, t) => new Ln(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  class Sn {
    constructor(A, e, t, r) {
      (this.type = On.BEZIER_CURVE),
        (this.start = A),
        (this.startControl = e),
        (this.endControl = t),
        (this.end = r);
    }
    subdivide(A, e) {
      const t = bn(this.start, this.startControl, A),
        r = bn(this.startControl, this.endControl, A),
        s = bn(this.endControl, this.end, A),
        n = bn(t, r, A),
        B = bn(r, s, A),
        o = bn(n, B, A);
      return e ? new Sn(this.start, t, n, o) : new Sn(o, B, s, this.end);
    }
    add(A, e) {
      return new Sn(
        this.start.add(A, e),
        this.startControl.add(A, e),
        this.endControl.add(A, e),
        this.end.add(A, e)
      );
    }
    reverse() {
      return new Sn(this.end, this.endControl, this.startControl, this.start);
    }
  }
  const Mn = (A) => A.type === On.BEZIER_CURVE;
  class Dn {
    constructor(A) {
      const e = A.styles,
        t = A.bounds;
      let [r, s] = be(e.borderTopLeftRadius, t.width, t.height),
        [n, B] = be(e.borderTopRightRadius, t.width, t.height),
        [o, i] = be(e.borderBottomRightRadius, t.width, t.height),
        [a, c] = be(e.borderBottomLeftRadius, t.width, t.height);
      const Q = [];
      Q.push((r + n) / t.width),
        Q.push((a + o) / t.width),
        Q.push((s + c) / t.height),
        Q.push((B + i) / t.height);
      const l = Math.max(...Q);
      l > 1 &&
        ((r /= l),
        (s /= l),
        (n /= l),
        (B /= l),
        (o /= l),
        (i /= l),
        (a /= l),
        (c /= l));
      const w = t.width - n,
        U = t.height - i,
        u = t.width - o,
        g = t.height - c,
        C = e.borderTopWidth,
        h = e.borderRightWidth,
        E = e.borderBottomWidth,
        d = e.borderLeftWidth,
        F = Se(e.paddingTop, A.bounds.width),
        H = Se(e.paddingRight, A.bounds.width),
        f = Se(e.paddingBottom, A.bounds.width),
        p = Se(e.paddingLeft, A.bounds.width);
      (this.topLeftBorderBox =
        r > 0 || s > 0
          ? vn(t.left, t.top, r, s, _n.TOP_LEFT)
          : new Ln(t.left, t.top)),
        (this.topRightBorderBox =
          n > 0 || B > 0
            ? vn(t.left + w, t.top, n, B, _n.TOP_RIGHT)
            : new Ln(t.left + t.width, t.top)),
        (this.bottomRightBorderBox =
          o > 0 || i > 0
            ? vn(t.left + u, t.top + U, o, i, _n.BOTTOM_RIGHT)
            : new Ln(t.left + t.width, t.top + t.height)),
        (this.bottomLeftBorderBox =
          a > 0 || c > 0
            ? vn(t.left, t.top + g, a, c, _n.BOTTOM_LEFT)
            : new Ln(t.left, t.top + t.height)),
        (this.topLeftPaddingBox =
          r > 0 || s > 0
            ? vn(
                t.left + d,
                t.top + C,
                Math.max(0, r - d),
                Math.max(0, s - C),
                _n.TOP_LEFT
              )
            : new Ln(t.left + d, t.top + C)),
        (this.topRightPaddingBox =
          n > 0 || B > 0
            ? vn(
                t.left + Math.min(w, t.width + d),
                t.top + C,
                w > t.width + d ? 0 : n - d,
                B - C,
                _n.TOP_RIGHT
              )
            : new Ln(t.left + t.width - h, t.top + C)),
        (this.bottomRightPaddingBox =
          o > 0 || i > 0
            ? vn(
                t.left + Math.min(u, t.width - d),
                t.top + Math.min(U, t.height + C),
                Math.max(0, o - h),
                i - E,
                _n.BOTTOM_RIGHT
              )
            : new Ln(t.left + t.width - h, t.top + t.height - E)),
        (this.bottomLeftPaddingBox =
          a > 0 || c > 0
            ? vn(
                t.left + d,
                t.top + g,
                Math.max(0, a - d),
                c - E,
                _n.BOTTOM_LEFT
              )
            : new Ln(t.left + d, t.top + t.height - E)),
        (this.topLeftContentBox =
          r > 0 || s > 0
            ? vn(
                t.left + d + p,
                t.top + C + F,
                Math.max(0, r - (d + p)),
                Math.max(0, s - (C + F)),
                _n.TOP_LEFT
              )
            : new Ln(t.left + d + p, t.top + C + F)),
        (this.topRightContentBox =
          n > 0 || B > 0
            ? vn(
                t.left + Math.min(w, t.width + d + p),
                t.top + C + F,
                w > t.width + d + p ? 0 : n - d + p,
                B - (C + F),
                _n.TOP_RIGHT
              )
            : new Ln(t.left + t.width - (h + H), t.top + C + F)),
        (this.bottomRightContentBox =
          o > 0 || i > 0
            ? vn(
                t.left + Math.min(u, t.width - (d + p)),
                t.top + Math.min(U, t.height + C + F),
                Math.max(0, o - (h + H)),
                i - (E + f),
                _n.BOTTOM_RIGHT
              )
            : new Ln(t.left + t.width - (h + H), t.top + t.height - (E + f))),
        (this.bottomLeftContentBox =
          a > 0 || c > 0
            ? vn(
                t.left + d + p,
                t.top + g,
                Math.max(0, a - (d + p)),
                c - (E + f),
                _n.BOTTOM_LEFT
              )
            : new Ln(t.left + d + p, t.top + t.height - (E + f)));
    }
  }
  var _n;
  !(function (A) {
    (A[(A.TOP_LEFT = 0)] = 'TOP_LEFT'),
      (A[(A.TOP_RIGHT = 1)] = 'TOP_RIGHT'),
      (A[(A.BOTTOM_RIGHT = 2)] = 'BOTTOM_RIGHT'),
      (A[(A.BOTTOM_LEFT = 3)] = 'BOTTOM_LEFT');
  })(_n || (_n = {}));
  const vn = (A, e, t, r, s) => {
      const n = ((Math.sqrt(2) - 1) / 3) * 4,
        B = t * n,
        o = r * n,
        i = A + t,
        a = e + r;
      switch (s) {
        case _n.TOP_LEFT:
          return new Sn(
            new Ln(A, a),
            new Ln(A, a - o),
            new Ln(i - B, e),
            new Ln(i, e)
          );
        case _n.TOP_RIGHT:
          return new Sn(
            new Ln(A, e),
            new Ln(A + B, e),
            new Ln(i, a - o),
            new Ln(i, a)
          );
        case _n.BOTTOM_RIGHT:
          return new Sn(
            new Ln(i, e),
            new Ln(i, e + o),
            new Ln(A + B, a),
            new Ln(A, a)
          );
        case _n.BOTTOM_LEFT:
        default:
          return new Sn(
            new Ln(i, a),
            new Ln(i - B, a),
            new Ln(A, e + o),
            new Ln(A, e)
          );
      }
    },
    xn = (A) => [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox,
    ],
    Pn = (A) => [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox,
    ];
  class zn {
    constructor(A, e, t) {
      (this.type = 0),
        (this.offsetX = A),
        (this.offsetY = e),
        (this.matrix = t),
        (this.target = 6);
    }
  }
  class Vn {
    constructor(A, e) {
      (this.type = 1), (this.target = e), (this.path = A);
    }
  }
  class Xn {
    constructor(A) {
      (this.element = A),
        (this.inlineLevel = []),
        (this.nonInlineLevel = []),
        (this.negativeZIndex = []),
        (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
        (this.positiveZIndex = []),
        (this.nonPositionedFloats = []),
        (this.nonPositionedInlineLevel = []);
    }
  }
  class Jn {
    constructor(A, e) {
      if (
        ((this.container = A),
        (this.effects = e.slice(0)),
        (this.curves = new Dn(A)),
        null !== A.styles.transform)
      ) {
        const e = A.bounds.left + A.styles.transformOrigin[0].number,
          t = A.bounds.top + A.styles.transformOrigin[1].number,
          r = A.styles.transform;
        this.effects.push(new zn(e, t, r));
      }
      if (A.styles.overflowX !== pr.VISIBLE) {
        const A = xn(this.curves),
          e = Pn(this.curves);
        yn(A, e)
          ? this.effects.push(new Vn(A, 6))
          : (this.effects.push(new Vn(A, 2)), this.effects.push(new Vn(e, 4)));
      }
    }
    getParentEffects() {
      const A = this.effects.slice(0);
      if (this.container.styles.overflowX !== pr.VISIBLE) {
        const e = xn(this.curves),
          t = Pn(this.curves);
        yn(e, t) || A.push(new Vn(t, 6));
      }
      return A;
    }
  }
  const Gn = (A, e, t, r) => {
      A.container.elements.forEach((s) => {
        const n = ns(s.flags, 4),
          B = ns(s.flags, 2),
          o = new Jn(s, A.getParentEffects());
        ns(s.styles.display, 2048) && r.push(o);
        const i = ns(s.flags, 8) ? [] : r;
        if (n || B) {
          const A = n || s.styles.isPositioned() ? t : e,
            r = new Xn(o);
          if (
            s.styles.isPositioned() ||
            s.styles.opacity < 1 ||
            s.styles.isTransformed()
          ) {
            const e = s.styles.zIndex.order;
            if (e < 0) {
              let t = 0;
              A.negativeZIndex.some((A, r) =>
                e > A.element.container.styles.zIndex.order
                  ? ((t = r), !1)
                  : t > 0
              ),
                A.negativeZIndex.splice(t, 0, r);
            } else if (e > 0) {
              let t = 0;
              A.positiveZIndex.some((A, r) =>
                e >= A.element.container.styles.zIndex.order
                  ? ((t = r + 1), !1)
                  : t > 0
              ),
                A.positiveZIndex.splice(t, 0, r);
            } else A.zeroOrAutoZIndexOrTransformedOrOpacity.push(r);
          } else
            s.styles.isFloating()
              ? A.nonPositionedFloats.push(r)
              : A.nonPositionedInlineLevel.push(r);
          Gn(o, r, n ? r : t, i);
        } else
          s.styles.isInlineLevel()
            ? e.inlineLevel.push(o)
            : e.nonInlineLevel.push(o),
            Gn(o, e, t, i);
        ns(s.flags, 8) && kn(s, i);
      });
    },
    kn = (A, e) => {
      let t = A instanceof Rs ? A.start : 1;
      const r = A instanceof Rs && A.reversed;
      for (let A = 0; A < e.length; A++) {
        const s = e[A];
        s.container instanceof Ts &&
          'number' == typeof s.container.value &&
          0 !== s.container.value &&
          (t = s.container.value),
          (s.listValue = hn(t, s.container.styles.listStyleType, !0)),
          (t += r ? -1 : 1);
      }
    },
    Wn = (A, e, t, r) => {
      const s = [];
      return (
        Mn(A) ? s.push(A.subdivide(0.5, !1)) : s.push(A),
        Mn(t) ? s.push(t.subdivide(0.5, !0)) : s.push(t),
        Mn(r) ? s.push(r.subdivide(0.5, !0).reverse()) : s.push(r),
        Mn(e) ? s.push(e.subdivide(0.5, !1).reverse()) : s.push(e),
        s
      );
    },
    Yn = (A) => {
      const e = A.bounds,
        t = A.styles;
      return e.add(
        t.borderLeftWidth,
        t.borderTopWidth,
        -(t.borderRightWidth + t.borderLeftWidth),
        -(t.borderTopWidth + t.borderBottomWidth)
      );
    },
    jn = (A) => {
      const e = A.styles,
        t = A.bounds,
        r = Se(e.paddingLeft, t.width),
        s = Se(e.paddingRight, t.width),
        n = Se(e.paddingTop, t.width),
        B = Se(e.paddingBottom, t.width);
      return t.add(
        r + e.borderLeftWidth,
        n + e.borderTopWidth,
        -(e.borderRightWidth + e.borderLeftWidth + r + s),
        -(e.borderTopWidth + e.borderBottomWidth + n + B)
      );
    },
    qn = (A, e, t) => {
      const r = ((A, e) => (0 === A ? e.bounds : 2 === A ? jn(e) : Yn(e)))(
          eB(A.styles.backgroundOrigin, e),
          A
        ),
        s =
          ((n = eB(A.styles.backgroundClip, e)),
          (B = A),
          n === qe.BORDER_BOX
            ? B.bounds
            : n === qe.CONTENT_BOX
            ? jn(B)
            : Yn(B));
      var n, B;
      const o = AB(eB(A.styles.backgroundSize, e), t, r),
        [i, a] = o,
        c = be(eB(A.styles.backgroundPosition, e), r.width - i, r.height - a);
      return [
        tB(eB(A.styles.backgroundRepeat, e), c, o, r, s),
        Math.round(r.left + c[0]),
        Math.round(r.top + c[1]),
        i,
        a,
      ];
    },
    Zn = (A) => Fe(A) && A.value === St.AUTO,
    $n = (A) => 'number' == typeof A,
    AB = (A, [e, t, r], s) => {
      const [n, B] = A;
      if (Te(n) && B && Te(B)) return [Se(n, s.width), Se(B, s.height)];
      const o = $n(r);
      if (Fe(n) && (n.value === St.CONTAIN || n.value === St.COVER)) {
        if ($n(r)) {
          return s.width / s.height < r != (n.value === St.COVER)
            ? [s.width, s.width / r]
            : [s.height * r, s.height];
        }
        return [s.width, s.height];
      }
      const i = $n(e),
        a = $n(t),
        c = i || a;
      if (Zn(n) && (!B || Zn(B))) {
        if (i && a) return [e, t];
        if (!o && !c) return [s.width, s.height];
        if (c && o) {
          return [i ? e : t * r, a ? t : e / r];
        }
        return [i ? e : s.width, a ? t : s.height];
      }
      if (o) {
        let A = 0,
          e = 0;
        return (
          Te(n) ? (A = Se(n, s.width)) : Te(B) && (e = Se(B, s.height)),
          Zn(n) ? (A = e * r) : (B && !Zn(B)) || (e = A / r),
          [A, e]
        );
      }
      let Q = null,
        l = null;
      if (
        (Te(n) ? (Q = Se(n, s.width)) : B && Te(B) && (l = Se(B, s.height)),
        null === Q || (B && !Zn(B)) || (l = i && a ? (Q / e) * t : s.height),
        null !== l && Zn(n) && (Q = i && a ? (l / t) * e : s.width),
        null !== Q && null !== l)
      )
        return [Q, l];
      throw new Error('Unable to calculate background-size for element');
    },
    eB = (A, e) => {
      const t = A[e];
      return void 0 === t ? A[0] : t;
    },
    tB = (A, [e, t], [r, s], n, B) => {
      switch (A) {
        case yt.REPEAT_X:
          return [
            new Ln(Math.round(n.left), Math.round(n.top + t)),
            new Ln(Math.round(n.left + n.width), Math.round(n.top + t)),
            new Ln(Math.round(n.left + n.width), Math.round(s + n.top + t)),
            new Ln(Math.round(n.left), Math.round(s + n.top + t)),
          ];
        case yt.REPEAT_Y:
          return [
            new Ln(Math.round(n.left + e), Math.round(n.top)),
            new Ln(Math.round(n.left + e + r), Math.round(n.top)),
            new Ln(Math.round(n.left + e + r), Math.round(n.height + n.top)),
            new Ln(Math.round(n.left + e), Math.round(n.height + n.top)),
          ];
        case yt.NO_REPEAT:
          return [
            new Ln(Math.round(n.left + e), Math.round(n.top + t)),
            new Ln(Math.round(n.left + e + r), Math.round(n.top + t)),
            new Ln(Math.round(n.left + e + r), Math.round(n.top + t + s)),
            new Ln(Math.round(n.left + e), Math.round(n.top + t + s)),
          ];
        default:
          return [
            new Ln(Math.round(B.left), Math.round(B.top)),
            new Ln(Math.round(B.left + B.width), Math.round(B.top)),
            new Ln(Math.round(B.left + B.width), Math.round(B.height + B.top)),
            new Ln(Math.round(B.left), Math.round(B.height + B.top)),
          ];
      }
    };
  class rB {
    constructor(A) {
      (this._data = {}), (this._document = A);
    }
    parseMetrics(A, e) {
      const t = this._document.createElement('div'),
        r = this._document.createElement('img'),
        s = this._document.createElement('span'),
        n = this._document.body;
      (t.style.visibility = 'hidden'),
        (t.style.fontFamily = A),
        (t.style.fontSize = e),
        (t.style.margin = '0'),
        (t.style.padding = '0'),
        n.appendChild(t),
        (r.src =
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'),
        (r.width = 1),
        (r.height = 1),
        (r.style.margin = '0'),
        (r.style.padding = '0'),
        (r.style.verticalAlign = 'baseline'),
        (s.style.fontFamily = A),
        (s.style.fontSize = e),
        (s.style.margin = '0'),
        (s.style.padding = '0'),
        s.appendChild(this._document.createTextNode('Hidden Text')),
        t.appendChild(s),
        t.appendChild(r);
      const B = r.offsetTop - s.offsetTop + 2;
      t.removeChild(s),
        t.appendChild(this._document.createTextNode('Hidden Text')),
        (t.style.lineHeight = 'normal'),
        (r.style.verticalAlign = 'super');
      const o = r.offsetTop - t.offsetTop + 2;
      return (
        n.removeChild(t),
        {
          baseline: B,
          middle: o,
        }
      );
    }
    getMetrics(A, e) {
      const t = `${A} ${e}`;
      return (
        void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)),
        this._data[t]
      );
    }
  }
  class sB {
    constructor(A) {
      (this._activeEffects = []),
        (this.canvas = A.canvas ? A.canvas : document.createElement('canvas')),
        (this.ctx = this.canvas.getContext('2d')),
        (this.options = A),
        A.canvas ||
          ((this.canvas.width = Math.floor(A.width * A.scale)),
          (this.canvas.height = Math.floor(A.height * A.scale)),
          (this.canvas.style.width = A.width + 'px'),
          (this.canvas.style.height = A.height + 'px')),
        (this.fontMetrics = new rB(document)),
        this.ctx.scale(this.options.scale, this.options.scale),
        this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY),
        (this.ctx.textBaseline = 'bottom'),
        (this._activeEffects = []),
        Qt.getInstance(A.id).debug(
          `Canvas renderer initialized (${A.width}x${A.height} at ${A.x},${A.y}) with scale ${A.scale}`
        );
    }
    applyEffects(A, e) {
      for (; this._activeEffects.length; ) this.popEffect();
      A.filter((A) => ns(A.target, e)).forEach((A) => this.applyEffect(A));
    }
    applyEffect(A) {
      this.ctx.save(),
        ((A) => 0 === A.type)(A) &&
          (this.ctx.translate(A.offsetX, A.offsetY),
          this.ctx.transform(
            A.matrix[0],
            A.matrix[1],
            A.matrix[2],
            A.matrix[3],
            A.matrix[4],
            A.matrix[5]
          ),
          this.ctx.translate(-A.offsetX, -A.offsetY)),
        ((A) => 1 === A.type)(A) && (this.path(A.path), this.ctx.clip()),
        this._activeEffects.push(A);
    }
    popEffect() {
      this._activeEffects.pop(), this.ctx.restore();
    }
    async renderStack(A) {
      const e = A.element.container.styles;
      e.isVisible() &&
        ((this.ctx.globalAlpha = e.opacity), await this.renderStackContent(A));
    }
    async renderNode(A) {
      A.container.styles.isVisible() &&
        (await this.renderNodeBackgroundAndBorders(A),
        await this.renderNodeContent(A));
    }
    renderTextWithLetterSpacing(A, e) {
      if (0 === e)
        this.ctx.fillText(
          A.text,
          A.bounds.left,
          A.bounds.top + A.bounds.height
        );
      else {
        Y(A.text)
          .map((A) => j(A))
          .reduce(
            (e, t) => (
              this.ctx.fillText(t, e, A.bounds.top + A.bounds.height),
              e + this.ctx.measureText(t).width
            ),
            A.bounds.left
          );
      }
    }
    createFontStyle(A) {
      const e = A.fontVariant
          .filter((A) => 'normal' === A || 'small-caps' === A)
          .join(''),
        t = A.fontFamily.join(', '),
        r = Ee(A.fontSize)
          ? `${A.fontSize.number}${A.fontSize.unit}`
          : A.fontSize.number + 'px';
      return [[A.fontStyle, e, A.fontWeight, r, t].join(' '), t, r];
    }
    async renderTextNode(A, e) {
      const [t, r, s] = this.createFontStyle(e);
      (this.ctx.font = t),
        A.textBounds.forEach((A) => {
          (this.ctx.fillStyle = ze(e.color)),
            this.renderTextWithLetterSpacing(A, e.letterSpacing);
          const t = e.textShadow;
          t.length &&
            A.text.trim().length &&
            (t
              .slice(0)
              .reverse()
              .forEach((e) => {
                (this.ctx.shadowColor = ze(e.color)),
                  (this.ctx.shadowOffsetX =
                    e.offsetX.number * this.options.scale),
                  (this.ctx.shadowOffsetY =
                    e.offsetY.number * this.options.scale),
                  (this.ctx.shadowBlur = e.blur.number),
                  this.ctx.fillText(
                    A.text,
                    A.bounds.left,
                    A.bounds.top + A.bounds.height
                  );
              }),
            (this.ctx.shadowColor = ''),
            (this.ctx.shadowOffsetX = 0),
            (this.ctx.shadowOffsetY = 0),
            (this.ctx.shadowBlur = 0)),
            e.textDecorationLine.length &&
              ((this.ctx.fillStyle = ze(e.textDecorationColor || e.color)),
              e.textDecorationLine.forEach((e) => {
                switch (e) {
                  case 1:
                    const { baseline: e } = this.fontMetrics.getMetrics(r, s);
                    this.ctx.fillRect(
                      A.bounds.left,
                      Math.round(A.bounds.top + e),
                      A.bounds.width,
                      1
                    );
                    break;
                  case 2:
                    this.ctx.fillRect(
                      A.bounds.left,
                      Math.round(A.bounds.top),
                      A.bounds.width,
                      1
                    );
                    break;
                  case 3:
                    const { middle: t } = this.fontMetrics.getMetrics(r, s);
                    this.ctx.fillRect(
                      A.bounds.left,
                      Math.ceil(A.bounds.top + t),
                      A.bounds.width,
                      1
                    );
                }
              }));
        });
    }
    renderReplacedElement(A, e, t) {
      if (t && A.intrinsicWidth > 0 && A.intrinsicHeight > 0) {
        const r = jn(A),
          s = Pn(e);
        this.path(s),
          this.ctx.save(),
          this.ctx.clip(),
          this.ctx.drawImage(
            t,
            0,
            0,
            A.intrinsicWidth,
            A.intrinsicHeight,
            r.left,
            r.top,
            r.width,
            r.height
          ),
          this.ctx.restore();
      }
    }
    async renderNodeContent(A) {
      this.applyEffects(A.effects, 4);
      const e = A.container,
        t = A.curves,
        r = e.styles;
      for (const A of e.textNodes) await this.renderTextNode(A, r);
      if (e instanceof Ks)
        try {
          const A = await this.options.cache.match(e.src);
          this.renderReplacedElement(e, t, A);
        } catch (A) {
          Qt.getInstance(this.options.id).error('Error loading image ' + e.src);
        }
      if (
        (e instanceof ms && this.renderReplacedElement(e, t, e.canvas),
        e instanceof Is)
      )
        try {
          const A = await this.options.cache.match(e.svg);
          this.renderReplacedElement(e, t, A);
        } catch (A) {
          Qt.getInstance(this.options.id).error(
            'Error loading svg ' + e.svg.substring(0, 255)
          );
        }
      if (e instanceof _s && e.tree) {
        const A = new sB({
            id: this.options.id,
            scale: this.options.scale,
            backgroundColor: e.backgroundColor,
            x: 0,
            y: 0,
            scrollX: 0,
            scrollY: 0,
            width: e.width,
            height: e.height,
            cache: this.options.cache,
            windowWidth: e.width,
            windowHeight: e.height,
          }),
          t = await A.render(e.tree);
        e.width &&
          e.height &&
          this.ctx.drawImage(
            t,
            0,
            0,
            e.width,
            e.height,
            e.bounds.left,
            e.bounds.top,
            e.bounds.width,
            e.bounds.height
          );
      }
      if (e instanceof bs) {
        const A = Math.min(e.bounds.width, e.bounds.height);
        'checkbox' === e.type
          ? e.checked &&
            (this.ctx.save(),
            this.path([
              new Ln(e.bounds.left + 0.39363 * A, e.bounds.top + 0.79 * A),
              new Ln(e.bounds.left + 0.16 * A, e.bounds.top + 0.5549 * A),
              new Ln(e.bounds.left + 0.27347 * A, e.bounds.top + 0.44071 * A),
              new Ln(e.bounds.left + 0.39694 * A, e.bounds.top + 0.5649 * A),
              new Ln(e.bounds.left + 0.72983 * A, e.bounds.top + 0.23 * A),
              new Ln(e.bounds.left + 0.84 * A, e.bounds.top + 0.34085 * A),
              new Ln(e.bounds.left + 0.39363 * A, e.bounds.top + 0.79 * A),
            ]),
            (this.ctx.fillStyle = ze(707406591)),
            this.ctx.fill(),
            this.ctx.restore())
          : 'radio' === e.type &&
            e.checked &&
            (this.ctx.save(),
            this.ctx.beginPath(),
            this.ctx.arc(
              e.bounds.left + A / 2,
              e.bounds.top + A / 2,
              A / 4,
              0,
              2 * Math.PI,
              !0
            ),
            (this.ctx.fillStyle = ze(707406591)),
            this.ctx.fill(),
            this.ctx.restore());
      }
      if (nB(e) && e.value.length) {
        ([this.ctx.font] = this.createFontStyle(r)),
          (this.ctx.fillStyle = ze(r.color)),
          (this.ctx.textBaseline = 'middle'),
          (this.ctx.textAlign = oB(e.styles.textAlign));
        const A = jn(e);
        let t = 0;
        switch (e.styles.textAlign) {
          case Lr.CENTER:
            t += A.width / 2;
            break;
          case Lr.RIGHT:
            t += A.width;
        }
        const s = A.add(t, 0, 0, -A.height / 2 + 1);
        this.ctx.save(),
          this.path([
            new Ln(A.left, A.top),
            new Ln(A.left + A.width, A.top),
            new Ln(A.left + A.width, A.top + A.height),
            new Ln(A.left, A.top + A.height),
          ]),
          this.ctx.clip(),
          this.renderTextWithLetterSpacing(new Cs(e.value, s), r.letterSpacing),
          this.ctx.restore(),
          (this.ctx.textBaseline = 'bottom'),
          (this.ctx.textAlign = 'left');
      }
      if (ns(e.styles.display, 2048))
        if (null !== e.styles.listStyleImage) {
          const A = e.styles.listStyleImage;
          if (A.type === ft.URL) {
            let t;
            const r = A.url;
            try {
              (t = await this.options.cache.match(r)),
                this.ctx.drawImage(
                  t,
                  e.bounds.left - (t.width + 10),
                  e.bounds.top
                );
            } catch (A) {
              Qt.getInstance(this.options.id).error(
                'Error loading list-style-image ' + r
              );
            }
          }
        } else if (A.listValue && e.styles.listStyleType !== Cr.NONE) {
          ([this.ctx.font] = this.createFontStyle(r)),
            (this.ctx.fillStyle = ze(r.color)),
            (this.ctx.textBaseline = 'middle'),
            (this.ctx.textAlign = 'right');
          const t = new k(
            e.bounds.left,
            e.bounds.top + Se(e.styles.paddingTop, e.bounds.width),
            e.bounds.width,
            ((A, e) =>
              Fe(A) && 'normal' === A.value
                ? 1.2 * e
                : A.type === AA.NUMBER_TOKEN
                ? e * A.number
                : Te(A)
                ? Se(A, e)
                : e)(r.lineHeight, r.fontSize.number) /
              2 +
              1
          );
          this.renderTextWithLetterSpacing(
            new Cs(A.listValue, t),
            r.letterSpacing
          ),
            (this.ctx.textBaseline = 'bottom'),
            (this.ctx.textAlign = 'left');
        }
    }
    async renderStackContent(A) {
      await this.renderNodeBackgroundAndBorders(A.element);
      for (const e of A.negativeZIndex) await this.renderStack(e);
      await this.renderNodeContent(A.element);
      for (const e of A.nonInlineLevel) await this.renderNode(e);
      for (const e of A.nonPositionedFloats) await this.renderStack(e);
      for (const e of A.nonPositionedInlineLevel) await this.renderStack(e);
      for (const e of A.inlineLevel) await this.renderNode(e);
      for (const e of A.zeroOrAutoZIndexOrTransformedOrOpacity)
        await this.renderStack(e);
      for (const e of A.positiveZIndex) await this.renderStack(e);
    }
    mask(A) {
      this.ctx.beginPath(),
        this.ctx.moveTo(0, 0),
        this.ctx.lineTo(this.canvas.width, 0),
        this.ctx.lineTo(this.canvas.width, this.canvas.height),
        this.ctx.lineTo(0, this.canvas.height),
        this.ctx.lineTo(0, 0),
        this.formatPath(A.slice(0).reverse()),
        this.ctx.closePath();
    }
    path(A) {
      this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath();
    }
    formatPath(A) {
      A.forEach((A, e) => {
        const t = Mn(A) ? A.start : A;
        0 === e ? this.ctx.moveTo(t.x, t.y) : this.ctx.lineTo(t.x, t.y),
          Mn(A) &&
            this.ctx.bezierCurveTo(
              A.startControl.x,
              A.startControl.y,
              A.endControl.x,
              A.endControl.y,
              A.end.x,
              A.end.y
            );
      });
    }
    renderRepeat(A, e, t, r) {
      this.path(A),
        (this.ctx.fillStyle = e),
        this.ctx.translate(t, r),
        this.ctx.fill(),
        this.ctx.translate(-t, -r);
    }
    resizeImage(A, e, t) {
      if (A.width === e && A.height === t) return A;
      const r = this.canvas.ownerDocument.createElement('canvas');
      return (
        (r.width = e),
        (r.height = t),
        r.getContext('2d').drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t),
        r
      );
    }
    async renderBackgroundImage(A) {
      let e = A.styles.backgroundImage.length - 1;
      for (const t of A.styles.backgroundImage.slice(0).reverse()) {
        if (t.type === ft.URL) {
          let r;
          const s = t.url;
          try {
            r = await this.options.cache.match(s);
          } catch (A) {
            Qt.getInstance(this.options.id).error(
              'Error loading background-image ' + s
            );
          }
          if (r) {
            const [t, s, n, B, o] = qn(A, e, [
                r.width,
                r.height,
                r.width / r.height,
              ]),
              i = this.ctx.createPattern(this.resizeImage(r, B, o), 'repeat');
            this.renderRepeat(t, i, s, n);
          }
        } else if (t.type === ft.LINEAR_GRADIENT) {
          const [r, s, n, B, o] = qn(A, e, [null, null, null]),
            [i, a, c, Q, l] = tt(t.angle, B, o),
            w = document.createElement('canvas');
          (w.width = B), (w.height = o);
          const U = w.getContext('2d'),
            u = U.createLinearGradient(a, Q, c, l);
          if (
            (et(t.stops, i).forEach((A) => u.addColorStop(A.stop, ze(A.color))),
            (U.fillStyle = u),
            U.fillRect(0, 0, B, o),
            B > 0 && o > 0)
          ) {
            const A = this.ctx.createPattern(w, 'repeat');
            this.renderRepeat(r, A, s, n);
          }
        } else if (pt(t)) {
          const [r, s, n, B, o] = qn(A, e, [null, null, null]),
            i = 0 === t.position.length ? [ye] : t.position,
            a = Se(i[0], B),
            c = Se(i[i.length - 1], o),
            [Q, l] = nt(t, a, c, B, o);
          if (Q > 0 && Q > 0) {
            const e = this.ctx.createRadialGradient(
              s + a,
              n + c,
              0,
              s + a,
              n + c,
              Q
            );
            if (
              (et(t.stops, 2 * Q).forEach((A) =>
                e.addColorStop(A.stop, ze(A.color))
              ),
              this.path(r),
              (this.ctx.fillStyle = e),
              Q !== l)
            ) {
              const e = A.bounds.left + 0.5 * A.bounds.width,
                t = A.bounds.top + 0.5 * A.bounds.height,
                r = l / Q,
                i = 1 / r;
              this.ctx.save(),
                this.ctx.translate(e, t),
                this.ctx.transform(1, 0, 0, r, 0, 0),
                this.ctx.translate(-e, -t),
                this.ctx.fillRect(s, i * (n - t) + t, B, o * i),
                this.ctx.restore();
            } else this.ctx.fill();
          }
        }
        e--;
      }
    }
    async renderBorder(A, e, t) {
      this.path(
        ((A, e) => {
          switch (e) {
            case 0:
              return Wn(
                A.topLeftBorderBox,
                A.topLeftPaddingBox,
                A.topRightBorderBox,
                A.topRightPaddingBox
              );
            case 1:
              return Wn(
                A.topRightBorderBox,
                A.topRightPaddingBox,
                A.bottomRightBorderBox,
                A.bottomRightPaddingBox
              );
            case 2:
              return Wn(
                A.bottomRightBorderBox,
                A.bottomRightPaddingBox,
                A.bottomLeftBorderBox,
                A.bottomLeftPaddingBox
              );
            case 3:
            default:
              return Wn(
                A.bottomLeftBorderBox,
                A.bottomLeftPaddingBox,
                A.topLeftBorderBox,
                A.topLeftPaddingBox
              );
          }
        })(t, e)
      ),
        (this.ctx.fillStyle = ze(A)),
        this.ctx.fill();
    }
    async renderNodeBackgroundAndBorders(A) {
      this.applyEffects(A.effects, 2);
      const e = A.container.styles,
        t = !Pe(e.backgroundColor) || e.backgroundImage.length,
        r = [
          {
            style: e.borderTopStyle,
            color: e.borderTopColor,
          },
          {
            style: e.borderRightStyle,
            color: e.borderRightColor,
          },
          {
            style: e.borderBottomStyle,
            color: e.borderBottomColor,
          },
          {
            style: e.borderLeftStyle,
            color: e.borderLeftColor,
          },
        ],
        s = BB(eB(e.backgroundClip, 0), A.curves);
      (t || e.boxShadow.length) &&
        (this.ctx.save(),
        this.path(s),
        this.ctx.clip(),
        Pe(e.backgroundColor) ||
          ((this.ctx.fillStyle = ze(e.backgroundColor)), this.ctx.fill()),
        await this.renderBackgroundImage(A.container),
        this.ctx.restore(),
        e.boxShadow
          .slice(0)
          .reverse()
          .forEach((e) => {
            this.ctx.save();
            const t = xn(A.curves),
              r = e.inset ? 0 : 1e4,
              s =
                ((n = t),
                (B = -r + (e.inset ? 1 : -1) * e.spread.number),
                (o = (e.inset ? 1 : -1) * e.spread.number),
                (i = e.spread.number * (e.inset ? -2 : 2)),
                (a = e.spread.number * (e.inset ? -2 : 2)),
                n.map((A, e) => {
                  switch (e) {
                    case 0:
                      return A.add(B, o);
                    case 1:
                      return A.add(B + i, o);
                    case 2:
                      return A.add(B + i, o + a);
                    case 3:
                      return A.add(B, o + a);
                  }
                  return A;
                }));
            var n, B, o, i, a;
            e.inset
              ? (this.path(t), this.ctx.clip(), this.mask(s))
              : (this.mask(t), this.ctx.clip(), this.path(s)),
              (this.ctx.shadowOffsetX = e.offsetX.number + r),
              (this.ctx.shadowOffsetY = e.offsetY.number),
              (this.ctx.shadowColor = ze(e.color)),
              (this.ctx.shadowBlur = e.blur.number),
              (this.ctx.fillStyle = e.inset ? ze(e.color) : 'rgba(0,0,0,1)'),
              this.ctx.fill(),
              this.ctx.restore();
          }));
      let n = 0;
      for (const e of r)
        e.style === Wt.NONE ||
          Pe(e.color) ||
          (await this.renderBorder(e.color, n, A.curves)),
          n++;
    }
    async render(A) {
      this.options.backgroundColor &&
        ((this.ctx.fillStyle = ze(this.options.backgroundColor)),
        this.ctx.fillRect(
          this.options.x - this.options.scrollX,
          this.options.y - this.options.scrollY,
          this.options.width,
          this.options.height
        ));
      const e = ((A) => {
        const e = new Jn(A, []),
          t = new Xn(e),
          r = [];
        return Gn(e, t, t, r), kn(e.container, r), t;
      })(A);
      return await this.renderStack(e), this.applyEffects([], 2), this.canvas;
    }
  }
  const nB = (A) =>
      A instanceof Ms ||
      A instanceof Ss ||
      (A instanceof bs && 'radio' !== A.type && 'checkbox' !== A.type),
    BB = (A, e) => {
      switch (A) {
        case qe.BORDER_BOX:
          return xn(e);
        case qe.CONTENT_BOX:
          return ((A) => [
            A.topLeftContentBox,
            A.topRightContentBox,
            A.bottomRightContentBox,
            A.bottomLeftContentBox,
          ])(e);
        case qe.PADDING_BOX:
        default:
          return Pn(e);
      }
    },
    oB = (A) => {
      switch (A) {
        case Lr.CENTER:
          return 'center';
        case Lr.RIGHT:
          return 'right';
        case Lr.LEFT:
        default:
          return 'left';
      }
    };
  class iB {
    constructor(A) {
      (this.canvas = A.canvas ? A.canvas : document.createElement('canvas')),
        (this.ctx = this.canvas.getContext('2d')),
        (this.options = A),
        (this.canvas.width = Math.floor(A.width * A.scale)),
        (this.canvas.height = Math.floor(A.height * A.scale)),
        (this.canvas.style.width = A.width + 'px'),
        (this.canvas.style.height = A.height + 'px'),
        this.ctx.scale(this.options.scale, this.options.scale),
        this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY),
        Qt.getInstance(A.id).debug(
          `EXPERIMENTAL ForeignObject renderer initialized (${A.width}x${A.height} at ${A.x},${A.y}) with scale ${A.scale}`
        );
    }
    async render(A) {
      const e = it(
          Math.max(this.options.windowWidth, this.options.width) *
            this.options.scale,
          Math.max(this.options.windowHeight, this.options.height) *
            this.options.scale,
          this.options.scrollX * this.options.scale,
          this.options.scrollY * this.options.scale,
          A
        ),
        t = await aB(e);
      return (
        this.options.backgroundColor &&
          ((this.ctx.fillStyle = ze(this.options.backgroundColor)),
          this.ctx.fillRect(
            0,
            0,
            this.options.width * this.options.scale,
            this.options.height * this.options.scale
          )),
        this.ctx.drawImage(
          t,
          -this.options.x * this.options.scale,
          -this.options.y * this.options.scale
        ),
        this.canvas
      );
    }
  }
  const aB = (A) =>
      new Promise((e, t) => {
        const r = new Image();
        (r.onload = () => {
          e(r);
        }),
          (r.onerror = t),
          (r.src =
            'data:image/svg+xml;charset=utf-8,' +
            encodeURIComponent(new XMLSerializer().serializeToString(A)));
      }),
    cB = (A) => xe(he.create(A).parseComponentValue());
  'undefined' != typeof window && lt.setContext(window);
  const QB = async (A, e) => {
    const t = A.ownerDocument;
    if (!t) throw new Error('Element is not attached to a Document');
    const r = t.defaultView;
    if (!r) throw new Error('Document is not attached to a Window');
    const s = (Math.round(1e3 * Math.random()) + Date.now()).toString(16),
      {
        width: n,
        height: B,
        left: o,
        top: i,
      } = $s(A) || 'HTML' === A.tagName
        ? ((A) => {
            const e = A.body,
              t = A.documentElement;
            if (!e || !t) throw new Error('Unable to get document size');
            const r = Math.max(
                Math.max(e.scrollWidth, t.scrollWidth),
                Math.max(e.offsetWidth, t.offsetWidth),
                Math.max(e.clientWidth, t.clientWidth)
              ),
              s = Math.max(
                Math.max(e.scrollHeight, t.scrollHeight),
                Math.max(e.offsetHeight, t.offsetHeight),
                Math.max(e.clientHeight, t.clientHeight)
              );
            return new k(0, 0, r, s);
          })(t)
        : W(A);
    const a = {
        ...{
          allowTaint: !1,
          imageTimeout: 15e3,
          proxy: void 0,
          useCORS: !1,
        },
        ...e,
      },
      c = {
        ...{
          backgroundColor: '#ffffff',
          cache: e.cache ? e.cache : lt.create(s, a),
          logging: !0,
          removeContainer: !0,
          foreignObjectRendering: !1,
          scale: r.devicePixelRatio || 1,
          windowWidth: r.innerWidth,
          windowHeight: r.innerHeight,
          scrollX: r.pageXOffset,
          scrollY: r.pageYOffset,
          x: o,
          y: i,
          width: Math.ceil(n),
          height: Math.ceil(B),
          id: s,
        },
        ...a,
        ...e,
      },
      Q = new k(c.scrollX, c.scrollY, c.windowWidth, c.windowHeight);
    Qt.create({
      id: s,
      enabled: c.logging,
    }),
      Qt.getInstance(s).debug('Starting document clone');
    const l = new En(A, {
        id: s,
        onclone: c.onclone,
        ignoreElements: c.ignoreElements,
        inlineImages: c.foreignObjectRendering,
        copyStyles: c.foreignObjectRendering,
      }),
      w = l.clonedReferenceElement;
    if (!w) return Promise.reject('Unable to find element in cloned iframe');
    const U = await l.toIFrame(t, Q),
      u = t.documentElement
        ? cB(getComputedStyle(t.documentElement).backgroundColor)
        : Ye.TRANSPARENT,
      g = t.body
        ? cB(getComputedStyle(t.body).backgroundColor)
        : Ye.TRANSPARENT,
      C = e.backgroundColor,
      h =
        'string' == typeof C ? cB(C) : null === C ? Ye.TRANSPARENT : 4294967295,
      E = A === t.documentElement ? (Pe(u) ? (Pe(g) ? h : g) : u) : h,
      d = {
        id: s,
        cache: c.cache,
        canvas: c.canvas,
        backgroundColor: E,
        scale: c.scale,
        x: c.x,
        y: c.y,
        scrollX: c.scrollX,
        scrollY: c.scrollY,
        width: c.width,
        height: c.height,
        windowWidth: c.windowWidth,
        windowHeight: c.windowHeight,
      };
    let F;
    if (c.foreignObjectRendering) {
      Qt.getInstance(s).debug(
        'Document cloned, using foreign object rendering'
      );
      const A = new iB(d);
      F = await A.render(w);
    } else {
      Qt.getInstance(s).debug('Document cloned, using computed rendering'),
        lt.attachInstance(c.cache),
        Qt.getInstance(s).debug('Starting DOM parsing');
      const A = zs(w);
      lt.detachInstance(),
        E === A.styles.backgroundColor &&
          (A.styles.backgroundColor = Ye.TRANSPARENT),
        Qt.getInstance(s).debug('Starting renderer');
      const e = new sB(d);
      F = await e.render(A);
    }
    return (
      !0 === c.removeContainer &&
        (En.destroy(U) ||
          Qt.getInstance(s).error(
            'Cannot detach cloned iframe as it is not in the DOM anymore'
          )),
      Qt.getInstance(s).debug('Finished rendering'),
      Qt.destroy(s),
      lt.destroy(s),
      F
    );
  };
  var lB = Object.freeze({
    default: (A, e = {}) => QB(A, e),
  });
});
