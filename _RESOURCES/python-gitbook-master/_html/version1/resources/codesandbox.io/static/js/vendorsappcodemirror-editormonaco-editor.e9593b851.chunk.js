(this.csbJsonP = this.csbJsonP || []).push([
  ['vendors~app~codemirror-editor~monaco-editor'],
  {
    '../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js':
      function (e, t, n) {
        'use strict';

        function o(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        n.d(t, 'a', function () {
          return o;
        });
      },
    '../../node_modules/downshift/dist/downshift.esm.js': function (e, t, n) {
      'use strict';
      var o = n(
          '../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
        ),
        i = n('../../node_modules/@babel/runtime/helpers/esm/extends.js'),
        r = n(
          '../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js'
        ),
        s = n('../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js'),
        u = n('../../node_modules/prop-types/index.js'),
        a = n.n(u),
        l = n('../../node_modules/react/index.js');
      n('../../node_modules/react-is/index.js');

      function d(e) {
        return null != e && 'object' === typeof e && 1 === e.nodeType;
      }

      function c(e, t) {
        return (!t || 'hidden' !== e) && 'visible' !== e && 'clip' !== e;
      }

      function p(e, t) {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
          var n = getComputedStyle(e, null);
          return (
            c(n.overflowY, t) ||
            c(n.overflowX, t) ||
            (function (e) {
              var t = (function (e) {
                return e.ownerDocument && e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView.frameElement
                  : null;
              })(e);
              return (
                !!t &&
                (t.clientHeight < e.scrollHeight ||
                  t.clientWidth < e.scrollWidth)
              );
            })(e)
          );
        }
        return !1;
      }

      function h(e, t, n, o, i, r, s, u) {
        return (r < e && s > t) || (r > e && s < t)
          ? 0
          : (r <= e && u <= n) || (s >= t && u >= n)
          ? r - e - o
          : (s > t && u < n) || (r < e && u > n)
          ? s - t + i
          : 0;
      }
      var f = 0;

      function g(e) {
        return 'function' === typeof e ? e : m;
      }

      function m() {}

      function v(e, t) {
        null !== e &&
          (function (e, t) {
            var n = t.scrollMode,
              o = t.block,
              i = t.inline,
              r = t.boundary,
              s = t.skipOverflowHiddenElements,
              u =
                'function' === typeof r
                  ? r
                  : function (e) {
                      return e !== r;
                    };
            if (!d(e)) throw new TypeError('Invalid target');
            for (
              var a = document.scrollingElement || document.documentElement,
                l = [],
                c = e;
              d(c) && u(c);

            ) {
              if ((c = c.parentNode) === a) {
                l.push(c);
                break;
              }
              (c === document.body && p(c) && !p(document.documentElement)) ||
                (p(c, s) && l.push(c));
            }
            for (
              var f = window.visualViewport ? visualViewport.width : innerWidth,
                g = window.visualViewport ? visualViewport.height : innerHeight,
                m = window.scrollX || pageXOffset,
                v = window.scrollY || pageYOffset,
                I = e.getBoundingClientRect(),
                b = I.height,
                y = I.width,
                S = I.top,
                w = I.right,
                O = I.bottom,
                x = I.left,
                H =
                  'start' === o || 'nearest' === o
                    ? S
                    : 'end' === o
                    ? O
                    : S + b / 2,
                j = 'center' === i ? x + y / 2 : 'end' === i ? w : x,
                C = [],
                E = 0;
              E < l.length;
              E++
            ) {
              var D = l[E],
                M = D.getBoundingClientRect(),
                P = M.height,
                _ = M.width,
                A = M.top,
                T = M.right,
                k = M.bottom,
                R = M.left;
              if (
                'if-needed' === n &&
                S >= 0 &&
                x >= 0 &&
                O <= g &&
                w <= f &&
                S >= A &&
                O <= k &&
                x >= R &&
                w <= T
              )
                return C;
              var V = getComputedStyle(D),
                K = parseInt(V.borderLeftWidth, 10),
                B = parseInt(V.borderTopWidth, 10),
                L = parseInt(V.borderRightWidth, 10),
                N = parseInt(V.borderBottomWidth, 10),
                W = 0,
                U = 0,
                F =
                  'offsetWidth' in D
                    ? D.offsetWidth - D.clientWidth - K - L
                    : 0,
                q =
                  'offsetHeight' in D
                    ? D.offsetHeight - D.clientHeight - B - N
                    : 0;
              if (a === D)
                (W =
                  'start' === o
                    ? H
                    : 'end' === o
                    ? H - g
                    : 'nearest' === o
                    ? h(v, v + g, g, B, N, v + H, v + H + b, b)
                    : H - g / 2),
                  (U =
                    'start' === i
                      ? j
                      : 'center' === i
                      ? j - f / 2
                      : 'end' === i
                      ? j - f
                      : h(m, m + f, f, K, L, m + j, m + j + y, y)),
                  (W = Math.max(0, W + v)),
                  (U = Math.max(0, U + m));
              else {
                (W =
                  'start' === o
                    ? H - A - B
                    : 'end' === o
                    ? H - k + N + q
                    : 'nearest' === o
                    ? h(A, k, P, B, N + q, H, H + b, b)
                    : H - (A + P / 2) + q / 2),
                  (U =
                    'start' === i
                      ? j - R - K
                      : 'center' === i
                      ? j - (R + _ / 2) + F / 2
                      : 'end' === i
                      ? j - T + L + F
                      : h(R, T, _, K, L + F, j, j + y, y));
                var z = D.scrollLeft,
                  X = D.scrollTop;
                (H +=
                  X -
                  (W = Math.max(0, Math.min(X + W, D.scrollHeight - P + q)))),
                  (j +=
                    z -
                    (U = Math.max(0, Math.min(z + U, D.scrollWidth - _ + F))));
              }
              C.push({
                el: D,
                top: W,
                left: U,
              });
            }
            return C;
          })(e, {
            boundary: t,
            block: 'nearest',
            scrollMode: 'if-needed',
          }).forEach(function (e) {
            var t = e.el,
              n = e.top,
              o = e.left;
            (t.scrollTop = n), (t.scrollLeft = o);
          });
      }

      function I(e, t) {
        return e === t || (e.contains && e.contains(t));
      }

      function b(e, t) {
        var n;

        function o() {
          n && clearTimeout(n);
        }

        function i() {
          for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
          o(),
            (n = setTimeout(function () {
              (n = null), e.apply(void 0, r);
            }, t));
        }
        return (i.cancel = o), i;
      }

      function y() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          for (
            var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            o[i - 1] = arguments[i];
          return t.some(function (t) {
            return (
              t && t.apply(void 0, [e].concat(o)),
              e.preventDownshiftDefault ||
                (e.hasOwnProperty('nativeEvent') &&
                  e.nativeEvent.preventDownshiftDefault)
            );
          });
        };
      }

      function S() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          t.forEach(function (t) {
            'function' === typeof t ? t(e) : t && (t.current = e);
          });
        };
      }

      function w() {
        return String(f++);
      }

      function O(e) {
        var t = e.isOpen,
          n = e.resultCount;
        return t
          ? n
            ? n +
              ' result' +
              (1 === n ? ' is' : 's are') +
              ' available, use up and down arrow keys to navigate. Press Enter key to select.'
            : 'No results are available.'
          : '';
      }

      function x(e, t) {
        return !(e = Array.isArray(e) ? e[0] : e) && t ? t : e;
      }

      function H(e) {
        return 'string' === typeof e.type;
      }

      function j(e) {
        return e.props;
      }
      var C = [
        'highlightedIndex',
        'inputValue',
        'isOpen',
        'selectedItem',
        'type',
      ];

      function E(e) {
        void 0 === e && (e = {});
        var t = {};
        return (
          C.forEach(function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }),
          t
        );
      }

      function D(e, t) {
        return Object.keys(e).reduce(function (n, o) {
          return (n[o] = M(t, o) ? t[o] : e[o]), n;
        }, {});
      }

      function M(e, t) {
        return void 0 !== e[t];
      }

      function P(e) {
        var t = e.key,
          n = e.keyCode;
        return n >= 37 && n <= 40 && 0 !== t.indexOf('Arrow') ? 'Arrow' + t : t;
      }

      function _(e, t, n, o, i) {
        void 0 === i && (i = !0);
        var r = n - 1;
        ('number' !== typeof t || t < 0 || t >= n) && (t = e > 0 ? -1 : r + 1);
        var s = t + e;
        s < 0 ? (s = i ? r : 0) : s > r && (s = i ? 0 : r);
        var u = A(e, s, n, o, i);
        return -1 === u ? t : u;
      }

      function A(e, t, n, o, i) {
        var r = o(t);
        if (!r || !r.hasAttribute('disabled')) return t;
        if (e > 0) {
          for (var s = t + 1; s < n; s++)
            if (!o(s).hasAttribute('disabled')) return s;
        } else
          for (var u = t - 1; u >= 0; u--)
            if (!o(u).hasAttribute('disabled')) return u;
        return i ? (e > 0 ? A(1, 0, n, o, !1) : A(-1, n - 1, n, o, !1)) : -1;
      }

      function T(e, t, n, o) {
        return (
          void 0 === o && (o = !0),
          t.some(function (t) {
            return t && (I(t, e) || (o && I(t, n.activeElement)));
          })
        );
      }
      var k = b(function () {
        V().textContent = '';
      }, 500);

      function R(e, t) {
        var n = V(t);
        e && ((n.textContent = e), k());
      }

      function V(e) {
        void 0 === e && (e = document);
        var t = e.getElementById('a11y-status-message');
        return (
          t ||
          ((t = e.createElement('div')).setAttribute(
            'id',
            'a11y-status-message'
          ),
          t.setAttribute('role', 'status'),
          t.setAttribute('aria-live', 'polite'),
          t.setAttribute('aria-relevant', 'additions text'),
          Object.assign(t.style, {
            border: '0',
            clip: 'rect(0 0 0 0)',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: '0',
            position: 'absolute',
            width: '1px',
          }),
          e.body.appendChild(t),
          t)
        );
      }
      var K = Object.freeze({
          __proto__: null,
          unknown: 0,
          mouseUp: 1,
          itemMouseEnter: 2,
          keyDownArrowUp: 3,
          keyDownArrowDown: 4,
          keyDownEscape: 5,
          keyDownEnter: 6,
          keyDownHome: 7,
          keyDownEnd: 8,
          clickItem: 9,
          blurInput: 10,
          changeInput: 11,
          keyDownSpaceButton: 12,
          clickButton: 13,
          blurButton: 14,
          controlledPropUpdatedSelectedItem: 15,
          touchEnd: 16,
        }),
        B = (function () {
          var e = (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              (n.id = n.props.id || 'downshift-' + w()),
                (n.menuId = n.props.menuId || n.id + '-menu'),
                (n.labelId = n.props.labelId || n.id + '-label'),
                (n.inputId = n.props.inputId || n.id + '-input'),
                (n.getItemId =
                  n.props.getItemId ||
                  function (e) {
                    return n.id + '-item-' + e;
                  }),
                (n.input = null),
                (n.items = []),
                (n.itemCount = null),
                (n.previousResultCount = 0),
                (n.timeoutIds = []),
                (n.internalSetTimeout = function (e, t) {
                  var o = setTimeout(function () {
                    (n.timeoutIds = n.timeoutIds.filter(function (e) {
                      return e !== o;
                    })),
                      e();
                  }, t);
                  n.timeoutIds.push(o);
                }),
                (n.setItemCount = function (e) {
                  n.itemCount = e;
                }),
                (n.unsetItemCount = function () {
                  n.itemCount = null;
                }),
                (n.setHighlightedIndex = function (e, t) {
                  void 0 === e && (e = n.props.defaultHighlightedIndex),
                    void 0 === t && (t = {}),
                    (t = E(t)),
                    n.internalSetState(
                      Object(i.default)(
                        {
                          highlightedIndex: e,
                        },
                        t
                      )
                    );
                }),
                (n.clearSelection = function (e) {
                  n.internalSetState(
                    {
                      selectedItem: null,
                      inputValue: '',
                      highlightedIndex: n.props.defaultHighlightedIndex,
                      isOpen: n.props.defaultIsOpen,
                    },
                    e
                  );
                }),
                (n.selectItem = function (e, t, o) {
                  (t = E(t)),
                    n.internalSetState(
                      Object(i.default)(
                        {
                          isOpen: n.props.defaultIsOpen,
                          highlightedIndex: n.props.defaultHighlightedIndex,
                          selectedItem: e,
                          inputValue: n.props.itemToString(e),
                        },
                        t
                      ),
                      o
                    );
                }),
                (n.selectItemAtIndex = function (e, t, o) {
                  var i = n.items[e];
                  null != i && n.selectItem(i, t, o);
                }),
                (n.selectHighlightedItem = function (e, t) {
                  return n.selectItemAtIndex(
                    n.getState().highlightedIndex,
                    e,
                    t
                  );
                }),
                (n.internalSetState = function (e, t) {
                  var o,
                    r,
                    s = {},
                    u = 'function' === typeof e;
                  return (
                    !u &&
                      e.hasOwnProperty('inputValue') &&
                      n.props.onInputValueChange(
                        e.inputValue,
                        Object(i.default)({}, n.getStateAndHelpers(), {}, e)
                      ),
                    n.setState(
                      function (t) {
                        t = n.getState(t);
                        var a = u ? e(t) : e;
                        (a = n.props.stateReducer(t, a)),
                          (o = a.hasOwnProperty('selectedItem'));
                        var l = {},
                          d = {};
                        return (
                          o &&
                            a.selectedItem !== t.selectedItem &&
                            (r = a.selectedItem),
                          (a.type = a.type || 0),
                          Object.keys(a).forEach(function (e) {
                            t[e] !== a[e] && (s[e] = a[e]),
                              'type' !== e &&
                                ((d[e] = a[e]), M(n.props, e) || (l[e] = a[e]));
                          }),
                          u &&
                            a.hasOwnProperty('inputValue') &&
                            n.props.onInputValueChange(
                              a.inputValue,
                              Object(i.default)(
                                {},
                                n.getStateAndHelpers(),
                                {},
                                a
                              )
                            ),
                          l
                        );
                      },
                      function () {
                        g(t)(),
                          Object.keys(s).length > 1 &&
                            n.props.onStateChange(s, n.getStateAndHelpers()),
                          o &&
                            n.props.onSelect(
                              e.selectedItem,
                              n.getStateAndHelpers()
                            ),
                          void 0 !== r &&
                            n.props.onChange(r, n.getStateAndHelpers()),
                          n.props.onUserAction(s, n.getStateAndHelpers());
                      }
                    )
                  );
                }),
                (n.rootRef = function (e) {
                  return (n._rootNode = e);
                }),
                (n.getRootProps = function (e, t) {
                  var r;
                  void 0 === e && (e = {});
                  var s = (void 0 === t ? {} : t).suppressRefError,
                    u = void 0 !== s && s,
                    a = e,
                    l = a.refKey,
                    d = void 0 === l ? 'ref' : l,
                    c = a.ref,
                    p = Object(o.default)(a, ['refKey', 'ref']);
                  (n.getRootProps.called = !0),
                    (n.getRootProps.refKey = d),
                    (n.getRootProps.suppressRefError = u);
                  var h = n.getState().isOpen;
                  return Object(i.default)(
                    (((r = {})[d] = S(c, n.rootRef)),
                    (r.role = 'combobox'),
                    (r['aria-expanded'] = h),
                    (r['aria-haspopup'] = 'listbox'),
                    (r['aria-owns'] = h ? n.menuId : null),
                    (r['aria-labelledby'] = n.labelId),
                    r),
                    p
                  );
                }),
                (n.keyDownHandlers = {
                  ArrowDown: function (e) {
                    var t = this;
                    if ((e.preventDefault(), this.getState().isOpen)) {
                      var n = e.shiftKey ? 5 : 1;
                      this.moveHighlightedIndex(n, {
                        type: 4,
                      });
                    } else
                      this.internalSetState(
                        {
                          isOpen: !0,
                          type: 4,
                        },
                        function () {
                          var e = t.getItemCount();
                          if (e > 0) {
                            var n = _(
                              1,
                              t.getState().highlightedIndex,
                              e,
                              function (e) {
                                return t.getItemNodeFromIndex(e);
                              }
                            );
                            t.setHighlightedIndex(n, {
                              type: 4,
                            });
                          }
                        }
                      );
                  },
                  ArrowUp: function (e) {
                    var t = this;
                    if ((e.preventDefault(), this.getState().isOpen)) {
                      var n = e.shiftKey ? -5 : -1;
                      this.moveHighlightedIndex(n, {
                        type: 3,
                      });
                    } else
                      this.internalSetState(
                        {
                          isOpen: !0,
                          type: 3,
                        },
                        function () {
                          var e = t.getItemCount();
                          if (e > 0) {
                            var n = _(
                              -1,
                              t.getState().highlightedIndex,
                              e,
                              function (e) {
                                return t.getItemNodeFromIndex(e);
                              }
                            );
                            t.setHighlightedIndex(n, {
                              type: 3,
                            });
                          }
                        }
                      );
                  },
                  Enter: function (e) {
                    var t = this.getState(),
                      n = t.isOpen,
                      o = t.highlightedIndex;
                    if (n && null != o) {
                      e.preventDefault();
                      var i = this.items[o],
                        r = this.getItemNodeFromIndex(o);
                      if (null == i || (r && r.hasAttribute('disabled')))
                        return;
                      this.selectHighlightedItem({
                        type: 6,
                      });
                    }
                  },
                  Escape: function (e) {
                    e.preventDefault(),
                      this.reset({
                        type: 5,
                        selectedItem: null,
                        inputValue: '',
                      });
                  },
                }),
                (n.buttonKeyDownHandlers = Object(i.default)(
                  {},
                  n.keyDownHandlers,
                  {
                    ' ': function (e) {
                      e.preventDefault(),
                        this.toggleMenu({
                          type: 12,
                        });
                    },
                  }
                )),
                (n.inputKeyDownHandlers = Object(i.default)(
                  {},
                  n.keyDownHandlers,
                  {
                    Home: function (e) {
                      var t = this;
                      e.preventDefault();
                      var n = this.getItemCount(),
                        o = this.getState().isOpen;
                      if (!(n <= 0) && o) {
                        var i = A(
                          1,
                          0,
                          n,
                          function (e) {
                            return t.getItemNodeFromIndex(e);
                          },
                          !1
                        );
                        this.setHighlightedIndex(i, {
                          type: 7,
                        });
                      }
                    },
                    End: function (e) {
                      var t = this;
                      e.preventDefault();
                      var n = this.getItemCount(),
                        o = this.getState().isOpen;
                      if (!(n <= 0) && o) {
                        var i = A(
                          -1,
                          n - 1,
                          n,
                          function (e) {
                            return t.getItemNodeFromIndex(e);
                          },
                          !1
                        );
                        this.setHighlightedIndex(i, {
                          type: 8,
                        });
                      }
                    },
                  }
                )),
                (n.getToggleButtonProps = function (e) {
                  void 0 === e && (e = {});
                  var t = e,
                    r = t.onClick,
                    s = (t.onPress, t.onKeyDown),
                    u = t.onKeyUp,
                    a = t.onBlur,
                    l = Object(o.default)(t, [
                      'onClick',
                      'onPress',
                      'onKeyDown',
                      'onKeyUp',
                      'onBlur',
                    ]),
                    d = n.getState().isOpen,
                    c = {
                      onClick: y(r, n.buttonHandleClick),
                      onKeyDown: y(s, n.buttonHandleKeyDown),
                      onKeyUp: y(u, n.buttonHandleKeyUp),
                      onBlur: y(a, n.buttonHandleBlur),
                    },
                    p = l.disabled ? {} : c;
                  return Object(i.default)(
                    {
                      type: 'button',
                      role: 'button',
                      'aria-label': d ? 'close menu' : 'open menu',
                      'aria-haspopup': !0,
                      'data-toggle': !0,
                    },
                    p,
                    {},
                    l
                  );
                }),
                (n.buttonHandleKeyUp = function (e) {
                  e.preventDefault();
                }),
                (n.buttonHandleKeyDown = function (e) {
                  var t = P(e);
                  n.buttonKeyDownHandlers[t] &&
                    n.buttonKeyDownHandlers[t].call(Object(r.a)(n), e);
                }),
                (n.buttonHandleClick = function (e) {
                  e.preventDefault(),
                    n.props.environment.document.activeElement ===
                      n.props.environment.document.body && e.target.focus(),
                    n.internalSetTimeout(function () {
                      return n.toggleMenu({
                        type: 13,
                      });
                    });
                }),
                (n.buttonHandleBlur = function (e) {
                  var t = e.target;
                  n.internalSetTimeout(function () {
                    n.isMouseDown ||
                      (null != n.props.environment.document.activeElement &&
                        n.props.environment.document.activeElement.id ===
                          n.inputId) ||
                      n.props.environment.document.activeElement === t ||
                      n.reset({
                        type: 14,
                      });
                  });
                }),
                (n.getLabelProps = function (e) {
                  return Object(i.default)(
                    {
                      htmlFor: n.inputId,
                      id: n.labelId,
                    },
                    e
                  );
                }),
                (n.getInputProps = function (e) {
                  void 0 === e && (e = {});
                  var t = e,
                    r = t.onKeyDown,
                    s = t.onBlur,
                    u = t.onChange,
                    a = t.onInput,
                    l =
                      (t.onChangeText,
                      Object(o.default)(t, [
                        'onKeyDown',
                        'onBlur',
                        'onChange',
                        'onInput',
                        'onChangeText',
                      ])),
                    d = {};
                  var c,
                    p = n.getState(),
                    h = p.inputValue,
                    f = p.isOpen,
                    g = p.highlightedIndex;
                  l.disabled ||
                    (((c = {}).onChange = y(u, a, n.inputHandleChange)),
                    (c.onKeyDown = y(r, n.inputHandleKeyDown)),
                    (c.onBlur = y(s, n.inputHandleBlur)),
                    (d = c));
                  return Object(i.default)(
                    {
                      'aria-autocomplete': 'list',
                      'aria-activedescendant':
                        f && 'number' === typeof g && g >= 0
                          ? n.getItemId(g)
                          : null,
                      'aria-controls': f ? n.menuId : null,
                      'aria-labelledby': n.labelId,
                      autoComplete: 'off',
                      value: h,
                      id: n.inputId,
                    },
                    d,
                    {},
                    l
                  );
                }),
                (n.inputHandleKeyDown = function (e) {
                  var t = P(e);
                  t &&
                    n.inputKeyDownHandlers[t] &&
                    n.inputKeyDownHandlers[t].call(Object(r.a)(n), e);
                }),
                (n.inputHandleChange = function (e) {
                  n.internalSetState({
                    type: 11,
                    isOpen: !0,
                    inputValue: e.target.value,
                    highlightedIndex: n.props.defaultHighlightedIndex,
                  });
                }),
                (n.inputHandleBlur = function () {
                  n.internalSetTimeout(function () {
                    var e =
                      n.props.environment.document &&
                      !!n.props.environment.document.activeElement &&
                      !!n.props.environment.document.activeElement.dataset &&
                      n.props.environment.document.activeElement.dataset
                        .toggle &&
                      n._rootNode &&
                      n._rootNode.contains(
                        n.props.environment.document.activeElement
                      );
                    n.isMouseDown ||
                      e ||
                      n.reset({
                        type: 10,
                      });
                  });
                }),
                (n.menuRef = function (e) {
                  n._menuNode = e;
                }),
                (n.getMenuProps = function (e, t) {
                  var r;
                  void 0 === e && (e = {});
                  var s = (void 0 === t ? {} : t).suppressRefError,
                    u = void 0 !== s && s,
                    a = e,
                    l = a.refKey,
                    d = void 0 === l ? 'ref' : l,
                    c = a.ref,
                    p = Object(o.default)(a, ['refKey', 'ref']);
                  return (
                    (n.getMenuProps.called = !0),
                    (n.getMenuProps.refKey = d),
                    (n.getMenuProps.suppressRefError = u),
                    Object(i.default)(
                      (((r = {})[d] = S(c, n.menuRef)),
                      (r.role = 'listbox'),
                      (r['aria-labelledby'] =
                        p && p['aria-label'] ? null : n.labelId),
                      (r.id = n.menuId),
                      r),
                      p
                    )
                  );
                }),
                (n.getItemProps = function (e) {
                  var t;
                  void 0 === e && (e = {});
                  var r = e,
                    s = r.onMouseMove,
                    u = r.onMouseDown,
                    a = r.onClick,
                    l = (r.onPress, r.index),
                    d = r.item,
                    c = void 0 === d ? void 0 : d,
                    p = Object(o.default)(r, [
                      'onMouseMove',
                      'onMouseDown',
                      'onClick',
                      'onPress',
                      'index',
                      'item',
                    ]);
                  void 0 === l
                    ? (n.items.push(c), (l = n.items.indexOf(c)))
                    : (n.items[l] = c);
                  var h = a,
                    f =
                      (((t = {
                        onMouseMove: y(s, function () {
                          l !== n.getState().highlightedIndex &&
                            (n.setHighlightedIndex(l, {
                              type: 2,
                            }),
                            (n.avoidScrolling = !0),
                            n.internalSetTimeout(function () {
                              return (n.avoidScrolling = !1);
                            }, 250));
                        }),
                        onMouseDown: y(u, function (e) {
                          e.preventDefault();
                        }),
                      }).onClick = y(h, function () {
                        n.selectItemAtIndex(l, {
                          type: 9,
                        });
                      })),
                      t),
                    g = p.disabled
                      ? {
                          onMouseDown: f.onMouseDown,
                        }
                      : f;
                  return Object(i.default)(
                    {
                      id: n.getItemId(l),
                      role: 'option',
                      'aria-selected': n.getState().highlightedIndex === l,
                    },
                    g,
                    {},
                    p
                  );
                }),
                (n.clearItems = function () {
                  n.items = [];
                }),
                (n.reset = function (e, t) {
                  void 0 === e && (e = {}),
                    (e = E(e)),
                    n.internalSetState(function (t) {
                      var o = t.selectedItem;
                      return Object(i.default)(
                        {
                          isOpen: n.props.defaultIsOpen,
                          highlightedIndex: n.props.defaultHighlightedIndex,
                          inputValue: n.props.itemToString(o),
                        },
                        e
                      );
                    }, t);
                }),
                (n.toggleMenu = function (e, t) {
                  void 0 === e && (e = {}),
                    (e = E(e)),
                    n.internalSetState(
                      function (t) {
                        var o = t.isOpen;
                        return Object(i.default)(
                          {
                            isOpen: !o,
                          },
                          o && {
                            highlightedIndex: n.props.defaultHighlightedIndex,
                          },
                          {},
                          e
                        );
                      },
                      function () {
                        var o = n.getState(),
                          i = o.isOpen,
                          r = o.highlightedIndex;
                        i &&
                          n.getItemCount() > 0 &&
                          'number' === typeof r &&
                          n.setHighlightedIndex(r, e),
                          g(t)();
                      }
                    );
                }),
                (n.openMenu = function (e) {
                  n.internalSetState(
                    {
                      isOpen: !0,
                    },
                    e
                  );
                }),
                (n.closeMenu = function (e) {
                  n.internalSetState(
                    {
                      isOpen: !1,
                    },
                    e
                  );
                }),
                (n.updateStatus = b(function () {
                  var e = n.getState(),
                    t = n.items[e.highlightedIndex],
                    o = n.getItemCount(),
                    r = n.props.getA11yStatusMessage(
                      Object(i.default)(
                        {
                          itemToString: n.props.itemToString,
                          previousResultCount: n.previousResultCount,
                          resultCount: o,
                          highlightedItem: t,
                        },
                        e
                      )
                    );
                  (n.previousResultCount = o),
                    R(r, n.props.environment.document);
                }, 200));
              var s = n.props,
                u = s.defaultHighlightedIndex,
                a = s.initialHighlightedIndex,
                l = void 0 === a ? u : a,
                d = s.defaultIsOpen,
                c = s.initialIsOpen,
                p = void 0 === c ? d : c,
                h = s.initialInputValue,
                f = void 0 === h ? '' : h,
                m = s.initialSelectedItem,
                v = void 0 === m ? null : m,
                I = n.getState({
                  highlightedIndex: l,
                  isOpen: p,
                  inputValue: f,
                  selectedItem: v,
                });
              return (
                null != I.selectedItem &&
                  void 0 === n.props.initialInputValue &&
                  (I.inputValue = n.props.itemToString(I.selectedItem)),
                (n.state = I),
                n
              );
            }
            Object(s.a)(t, e);
            var n = t.prototype;
            return (
              (n.internalClearTimeouts = function () {
                this.timeoutIds.forEach(function (e) {
                  clearTimeout(e);
                }),
                  (this.timeoutIds = []);
              }),
              (n.getState = function (e) {
                return void 0 === e && (e = this.state), D(e, this.props);
              }),
              (n.getItemCount = function () {
                var e = this.items.length;
                return (
                  null != this.itemCount
                    ? (e = this.itemCount)
                    : void 0 !== this.props.itemCount &&
                      (e = this.props.itemCount),
                  e
                );
              }),
              (n.getItemNodeFromIndex = function (e) {
                return this.props.environment.document.getElementById(
                  this.getItemId(e)
                );
              }),
              (n.scrollHighlightedItemIntoView = function () {
                var e = this.getItemNodeFromIndex(
                  this.getState().highlightedIndex
                );
                this.props.scrollIntoView(e, this._menuNode);
              }),
              (n.moveHighlightedIndex = function (e, t) {
                var n = this,
                  o = this.getItemCount(),
                  i = this.getState().highlightedIndex;
                if (o > 0) {
                  var r = _(e, i, o, function (e) {
                    return n.getItemNodeFromIndex(e);
                  });
                  this.setHighlightedIndex(r, t);
                }
              }),
              (n.getStateAndHelpers = function () {
                var e = this.getState(),
                  t = e.highlightedIndex,
                  n = e.inputValue,
                  o = e.selectedItem,
                  i = e.isOpen,
                  r = this.props.itemToString,
                  s = this.id,
                  u = this.getRootProps,
                  a = this.getToggleButtonProps,
                  l = this.getLabelProps,
                  d = this.getMenuProps,
                  c = this.getInputProps,
                  p = this.getItemProps,
                  h = this.openMenu,
                  f = this.closeMenu,
                  g = this.toggleMenu,
                  m = this.selectItem,
                  v = this.selectItemAtIndex,
                  I = this.selectHighlightedItem,
                  b = this.setHighlightedIndex,
                  y = this.clearSelection,
                  S = this.clearItems;
                return {
                  getRootProps: u,
                  getToggleButtonProps: a,
                  getLabelProps: l,
                  getMenuProps: d,
                  getInputProps: c,
                  getItemProps: p,
                  reset: this.reset,
                  openMenu: h,
                  closeMenu: f,
                  toggleMenu: g,
                  selectItem: m,
                  selectItemAtIndex: v,
                  selectHighlightedItem: I,
                  setHighlightedIndex: b,
                  clearSelection: y,
                  clearItems: S,
                  setItemCount: this.setItemCount,
                  unsetItemCount: this.unsetItemCount,
                  setState: this.internalSetState,
                  itemToString: r,
                  id: s,
                  highlightedIndex: t,
                  inputValue: n,
                  isOpen: i,
                  selectedItem: o,
                };
              }),
              (n.componentDidMount = function () {
                var e = this;
                var t = function () {
                    e.isMouseDown = !0;
                  },
                  n = function (t) {
                    (e.isMouseDown = !1),
                      !T(
                        t.target,
                        [e._rootNode, e._menuNode],
                        e.props.environment.document
                      ) &&
                        e.getState().isOpen &&
                        e.reset(
                          {
                            type: 1,
                          },
                          function () {
                            return e.props.onOuterClick(e.getStateAndHelpers());
                          }
                        );
                  },
                  o = function () {
                    e.isTouchMove = !1;
                  },
                  i = function () {
                    e.isTouchMove = !0;
                  },
                  r = function (t) {
                    var n = T(
                      t.target,
                      [e._rootNode, e._menuNode],
                      e.props.environment.document,
                      !1
                    );
                    e.isTouchMove ||
                      n ||
                      !e.getState().isOpen ||
                      e.reset(
                        {
                          type: 16,
                        },
                        function () {
                          return e.props.onOuterClick(e.getStateAndHelpers());
                        }
                      );
                  },
                  s = this.props.environment;
                s.addEventListener('mousedown', t),
                  s.addEventListener('mouseup', n),
                  s.addEventListener('touchstart', o),
                  s.addEventListener('touchmove', i),
                  s.addEventListener('touchend', r),
                  (this.cleanup = function () {
                    e.internalClearTimeouts(),
                      e.updateStatus.cancel(),
                      s.removeEventListener('mousedown', t),
                      s.removeEventListener('mouseup', n),
                      s.removeEventListener('touchstart', o),
                      s.removeEventListener('touchmove', i),
                      s.removeEventListener('touchend', r);
                  });
              }),
              (n.shouldScroll = function (e, t) {
                var n = (
                    void 0 === this.props.highlightedIndex
                      ? this.getState()
                      : this.props
                  ).highlightedIndex,
                  o = (void 0 === t.highlightedIndex ? e : t).highlightedIndex;
                return (n && this.getState().isOpen && !e.isOpen) || n !== o;
              }),
              (n.componentDidUpdate = function (e, t) {
                M(this.props, 'selectedItem') &&
                  this.props.selectedItemChanged(
                    e.selectedItem,
                    this.props.selectedItem
                  ) &&
                  this.internalSetState({
                    type: 15,
                    inputValue: this.props.itemToString(
                      this.props.selectedItem
                    ),
                  }),
                  !this.avoidScrolling &&
                    this.shouldScroll(t, e) &&
                    this.scrollHighlightedItemIntoView(),
                  this.updateStatus();
              }),
              (n.componentWillUnmount = function () {
                this.cleanup();
              }),
              (n.render = function () {
                var e = x(this.props.children, m);
                this.clearItems(),
                  (this.getRootProps.called = !1),
                  (this.getRootProps.refKey = void 0),
                  (this.getRootProps.suppressRefError = void 0),
                  (this.getMenuProps.called = !1),
                  (this.getMenuProps.refKey = void 0),
                  (this.getMenuProps.suppressRefError = void 0),
                  (this.getLabelProps.called = !1),
                  (this.getInputProps.called = !1);
                var t = x(e(this.getStateAndHelpers()));
                return t
                  ? this.getRootProps.called || this.props.suppressRefError
                    ? t
                    : H(t)
                    ? Object(l.cloneElement)(t, this.getRootProps(j(t)))
                    : void 0
                  : null;
              }),
              t
            );
          })(l.Component);
          return (
            (e.defaultProps = {
              defaultHighlightedIndex: null,
              defaultIsOpen: !1,
              getA11yStatusMessage: O,
              itemToString: function (e) {
                return null == e ? '' : String(e);
              },
              onStateChange: m,
              onInputValueChange: m,
              onUserAction: m,
              onChange: m,
              onSelect: m,
              onOuterClick: m,
              selectedItemChanged: function (e, t) {
                return e !== t;
              },
              environment: 'undefined' === typeof window ? {} : window,
              stateReducer: function (e, t) {
                return t;
              },
              suppressRefError: !1,
              scrollIntoView: v,
            }),
            (e.stateChangeTypes = K),
            e
          );
        })();
      var L = {
        itemToString: function (e) {
          return e ? String(e) : '';
        },
        stateReducer: function (e, t) {
          return t.changes;
        },
        getA11ySelectionMessage: function (e) {
          var t = e.selectedItem;
          return (0, e.itemToString)(t) + ' has been selected.';
        },
        scrollIntoView: v,
        circularNavigation: !1,
        environment: 'undefined' === typeof window ? {} : window,
      };
      a.a.array.isRequired,
        a.a.func,
        a.a.func,
        a.a.func,
        a.a.bool,
        a.a.number,
        a.a.number,
        a.a.number,
        a.a.bool,
        a.a.bool,
        a.a.bool,
        a.a.any,
        a.a.any,
        a.a.any,
        a.a.string,
        a.a.string,
        a.a.string,
        a.a.func,
        a.a.string,
        a.a.func,
        a.a.func,
        a.a.func,
        a.a.func,
        a.a.func,
        a.a.shape({
          addEventListener: a.a.func,
          removeEventListener: a.a.func,
          document: a.a.shape({
            getElementById: a.a.func,
            activeElement: a.a.any,
            body: a.a.any,
          }),
        });
      Object(i.default)({}, L, {
        getA11yStatusMessage: function (e) {
          var t = e.isOpen,
            n = e.resultCount;
          return t
            ? n
              ? n +
                ' result' +
                (1 === n ? ' is' : 's are') +
                ' available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.'
              : 'No results are available.'
            : '';
        },
      });
      a.a.array.isRequired,
        a.a.func,
        a.a.func,
        a.a.func,
        a.a.bool,
        a.a.number,
        a.a.number,
        a.a.number,
        a.a.bool,
        a.a.bool,
        a.a.bool,
        a.a.any,
        a.a.any,
        a.a.any,
        a.a.string,
        a.a.string,
        a.a.string,
        a.a.string,
        a.a.string,
        a.a.string,
        a.a.func,
        a.a.string,
        a.a.string,
        a.a.func,
        a.a.func,
        a.a.func,
        a.a.func,
        a.a.func,
        a.a.func,
        a.a.shape({
          addEventListener: a.a.func,
          removeEventListener: a.a.func,
          document: a.a.shape({
            getElementById: a.a.func,
            activeElement: a.a.any,
            body: a.a.any,
          }),
        }),
        Object(i.default)({}, L, {
          getA11yStatusMessage: O,
          circularNavigation: !0,
        });
      t.a = B;
    },
    '../../node_modules/lodash-es/_isIterateeCall.js': function (e, t, n) {
      'use strict';
      var o = n('../../node_modules/lodash-es/eq.js'),
        i = n('../../node_modules/lodash-es/isArrayLike.js'),
        r = n('../../node_modules/lodash-es/_isIndex.js'),
        s = n('../../node_modules/lodash-es/isObject.js');
      t.a = function (e, t, n) {
        if (!Object(s.a)(n)) return !1;
        var u = typeof t;
        return (
          !!('number' == u
            ? Object(i.a)(n) && Object(r.a)(t, n.length)
            : 'string' == u && t in n) && Object(o.a)(n[t], e)
        );
      };
    },
    '../../node_modules/lodash-es/_overRest.js': function (e, t, n) {
      'use strict';
      var o = function (e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, n[0]);
            case 2:
              return e.call(t, n[0], n[1]);
            case 3:
              return e.call(t, n[0], n[1], n[2]);
          }
          return e.apply(t, n);
        },
        i = Math.max;
      t.a = function (e, t, n) {
        return (
          (t = i(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var r = arguments, s = -1, u = i(r.length - t, 0), a = Array(u);
              ++s < u;

            )
              a[s] = r[t + s];
            s = -1;
            for (var l = Array(t + 1); ++s < t; ) l[s] = r[s];
            return (l[t] = n(a)), o(e, this, l);
          }
        );
      };
    },
    '../../node_modules/lodash-es/_setToString.js': function (e, t, n) {
      'use strict';
      var o = function (e) {
          return function () {
            return e;
          };
        },
        i = n('../../node_modules/lodash-es/_defineProperty.js'),
        r = n('../../node_modules/lodash-es/identity.js'),
        s = i.a
          ? function (e, t) {
              return Object(i.a)(e, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: o(t),
                writable: !0,
              });
            }
          : r.a,
        u = Date.now;
      var a = (function (e) {
        var t = 0,
          n = 0;
        return function () {
          var o = u(),
            i = 16 - (o - n);
          if (((n = o), i > 0)) {
            if (++t >= 800) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
        };
      })(s);
      t.a = a;
    },
    '../../node_modules/lodash-es/sortBy.js': function (e, t, n) {
      'use strict';
      var o = n('../../node_modules/lodash-es/_baseFlatten.js'),
        i = n('../../node_modules/lodash-es/_baseOrderBy.js'),
        r = n('../../node_modules/lodash-es/identity.js'),
        s = n('../../node_modules/lodash-es/_overRest.js'),
        u = n('../../node_modules/lodash-es/_setToString.js');
      var a = function (e, t) {
          return Object(u.a)(Object(s.a)(e, t, r.a), e + '');
        },
        l = n('../../node_modules/lodash-es/_isIterateeCall.js'),
        d = a(function (e, t) {
          if (null == e) return [];
          var n = t.length;
          return (
            n > 1 && Object(l.a)(e, t[0], t[1])
              ? (t = [])
              : n > 2 && Object(l.a)(t[0], t[1], t[2]) && (t = [t[0]]),
            Object(i.a)(e, Object(o.a)(t, 1), [])
          );
        });
      t.a = d;
    },
  },
]);
//# sourceMappingURL=vendors~app~codemirror-editor~monaco-editor.e9593b851.chunk.js.map
