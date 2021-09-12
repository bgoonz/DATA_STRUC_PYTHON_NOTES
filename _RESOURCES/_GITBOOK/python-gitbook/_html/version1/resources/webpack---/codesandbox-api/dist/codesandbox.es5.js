var transformers = [];

function transformError(error, module, modules) {
  var transformedErrors = transformers
    .map(function (c) {
      return c(error, module, modules);
    })
    .filter(function (x) {
      return x != null;
    });
  return transformedErrors[0];
}

function clearErrorTransformers() {
  transformers.length = 0;
}

function registerErrorTransformer(check) {
  transformers.push(check);
}

var __awaiter =
  (undefined && undefined.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (undefined && undefined.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2),
      }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false,
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true,
      };
    }
  };
var generateId = function () {
  // Such a random ID
  return Math.floor(Math.random() * 1000000 + Math.random() * 1000000);
};
var getConstructorName = function (x) {
  try {
    return x.constructor.name;
  } catch (e) {
    return '';
  }
};
var Protocol = /** @class */ (function () {
  function Protocol(type, handleMessage, target) {
    var _this = this;
    this.type = type;
    this.handleMessage = handleMessage;
    this.target = target;
    this.outgoingMessages = new Set();
    this._messageListener = function (e) {
      return __awaiter(_this, void 0, void 0, function () {
        var data, result, returnMessage;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              data = e.data;
              if (data.$type !== this.getTypeId()) {
                return [2 /*return*/];
              }
              // We are getting a response to the message
              if (this.outgoingMessages.has(data.$id)) {
                return [2 /*return*/];
              }
              return [4 /*yield*/, this.handleMessage(data.$data)];
            case 1:
              result = _a.sent();
              returnMessage = {
                $originId: this.internalId,
                $type: this.getTypeId(),
                $data: result,
                $id: data.$id,
              };
              if (e.source) {
                // @ts-ignore
                e.source.postMessage(returnMessage, '*');
              } else {
                this._postMessage(returnMessage);
              }
              return [2 /*return*/];
          }
        });
      });
    };
    this.createConnection();
    this.internalId = generateId();
    this.isWorker = getConstructorName(target) === 'Worker';
  }
  Protocol.prototype.getTypeId = function () {
    return 'p-' + this.type;
  };
  Protocol.prototype.createConnection = function () {
    self.addEventListener('message', this._messageListener);
  };
  Protocol.prototype.dispose = function () {
    self.removeEventListener('message', this._messageListener);
  };
  Protocol.prototype.sendMessage = function (data) {
    var _this = this;
    return new Promise(function (resolve) {
      var messageId = generateId();
      var message = {
        $originId: _this.internalId,
        $type: _this.getTypeId(),
        $data: data,
        $id: messageId,
      };
      _this.outgoingMessages.add(messageId);
      var listenFunction = function (e) {
        var data = e.data;
        if (
          data.$type === _this.getTypeId() &&
          data.$id === messageId &&
          data.$originId !== _this.internalId
        ) {
          resolve(data.$data);
          self.removeEventListener('message', listenFunction);
        }
      };
      self.addEventListener('message', listenFunction);
      _this._postMessage(message);
    });
  };
  Protocol.prototype._postMessage = function (m) {
    if (
      this.isWorker ||
      // @ts-ignore Unknown to TS
      (typeof DedicatedWorkerGlobalScope !== 'undefined' &&
        // @ts-ignore Unknown to TS
        this.target instanceof DedicatedWorkerGlobalScope)
    ) {
      // @ts-ignore
      this.target.postMessage(m);
    } else {
      this.target.postMessage(m, '*');
    }
  };
  return Protocol;
})();

/**
 * Returns an action that describes to open a notification in the editor
 *
 * @export
 * @param {string} title
 * @param {('notice' | 'warning' | 'error' | 'success')} [notificationType='notice']
 * @param {number} [timeAlive=2] How long the notification should show in seconds
 * @returns {NotificationAction}
 */
function show(title, notificationType, timeAlive) {
  if (notificationType === void 0) {
    notificationType = 'notice';
  }
  if (timeAlive === void 0) {
    timeAlive = 2;
  }
  // TODO automatically add type: 'action', maybe do this after conversion to TS
  return {
    type: 'action',
    action: 'notification',
    title: title,
    notificationType: notificationType,
    timeAlive: timeAlive,
  };
}

var notifications = Object.freeze({
  show: show,
});

function openModule(id, lineNumber, column) {
  // TODO automatically add type: 'action', maybe do this after conversion to TS
  return {
    type: 'action',
    action: 'editor.open-module',
    path: id,
    lineNumber: lineNumber,
    column: column,
  };
}

var editor = Object.freeze({
  openModule: openModule,
});

function add(dependencyName) {
  return {
    type: 'action',
    action: 'source.dependencies.add',
    dependency: dependencyName,
  };
}

var d = Object.freeze({
  add: add,
});

function rename(path, title) {
  return {
    type: 'action',
    action: 'source.module.rename',
    path: path,
    title: title,
  };
}

var m = Object.freeze({
  rename: rename,
});

var dependencies = d;
var modules = m;

var source = Object.freeze({
  dependencies: dependencies,
  modules: modules,
});

/**
 * Returns an action that describes to show an error
 * in the code of the editor (with the red squiggles)
 *
 * @export
 * @param {string} title
 * @param {string} message
 * @param {ErrorOptions} { line, column, path, payload }
 * @returns {ErrorAction}
 */
function show$1(title, message, _a) {
  var line = _a.line,
    column = _a.column,
    lineEnd = _a.lineEnd,
    columnEnd = _a.columnEnd,
    path = _a.path,
    payload = _a.payload,
    source = _a.source;
  return {
    title: title,
    message: message,
    line: line,
    column: column,
    path: path,
    payload: payload,
    lineEnd: lineEnd,
    columnEnd: columnEnd,
    severity: 'error',
    type: 'action',
    action: 'show-error',
    source: source || 'browser',
  };
}

function clear(path, source) {
  return {
    type: 'action',
    action: 'clear-errors',
    path: path,
    source: source,
  };
}

var error = Object.freeze({
  show: show$1,
  clear: clear,
});

/**
 * Returns an action that describes to show a correction
 * in the code of the editor (with the yellow/blue squiggles)
 *
 * @export
 * @param {string} title
 * @param {string} message
 * @param {CorrectionOptions} { line, column, payload }
 * @returns {CorrectionAction}
 */
function show$2(message, _a) {
  var _b =
      _a === void 0
        ? {
            path: '',
            severity: 'warning',
            source: '',
          }
        : _a,
    line = _b.line,
    column = _b.column,
    lineEnd = _b.lineEnd,
    columnEnd = _b.columnEnd,
    path = _b.path,
    payload = _b.payload,
    _c = _b.severity,
    severity = _c === void 0 ? 'warning' : _c,
    _d = _b.source,
    source = _d === void 0 ? '' : _d;
  return {
    message: message,
    line: line,
    column: column,
    lineEnd: lineEnd,
    columnEnd: columnEnd,
    path: path,
    payload: payload,
    severity: severity,
    source: source,
    type: 'action',
    action: 'show-correction',
  };
}

function clear$1(path, source) {
  return {
    type: 'action',
    action: 'clear-corrections',
    path: path,
    source: source,
  };
}

var correction = Object.freeze({
  show: show$2,
  clear: clear$1,
});

/**
 * Returns an action that describes to show a correction
 * in the code of the editor (with the yellow/blue squiggles)
 *
 * @export
 * @param {string} title
 * @param {string} message
 * @param {CorrectionOptions} { line, column, payload }
 * @returns {CorrectionAction}
 */
function show$3(_a) {
  var line = _a.line,
    path = _a.path,
    className = _a.className;
  return {
    line: line,
    path: path,
    className: className,
    type: 'action',
    action: 'show-glyph',
  };
}

var glyph = Object.freeze({
  show: show$3,
});

// All actions of the editor are defined here. The sandbox can send messages
// like `source.files.rename` which the editor will see as an action to rename
// a module. This will allow plugins to alter project content in the future
var actions = {
  notifications: notifications,
  editor: editor,
  source: source,
  error: error,
  correction: correction,
  glyph: glyph,
};

var host = typeof process !== 'undefined' && process.env.CODESANDBOX_HOST;
var host$1 = host || 'https://codesandbox.io';

var __assign =
  (undefined && undefined.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
// import * as debug from 'debug';
var bundlers = new Map();

function checkIsStandalone() {
  if (typeof window === 'undefined') {
    return true;
  }
  if (window.location && window.location.href.indexOf('?standalone') > -1) {
    return true;
  }
  if (window.opener || window.parent !== window) {
    if (window.location && window.location.href.indexOf(host$1) > -1) {
      // If this location href is codesandbox.io or something, we're most probably in an embed
      // iframed on another page. This means that we're actually standalone, but we're fooled
      // by the fact that we're embedded somewhere else.
      return true;
    }
    return false;
  }
  return true;
}
// Whether the tab has a connection with the editor
var isStandalone = checkIsStandalone();
var resolveIframeHandshake;
var iframeHandshakeDone = false;
/**
 * Resolves when the handshake between the frame and the editor has succeeded
 */
var iframeHandshake = new Promise(function (resolve) {
  resolveIframeHandshake = resolve;
});
// Field used by a "child" frame to determine its parent origin
var parentOrigin = null;
var parentId = null;
var parentOriginListener = function (e) {
  var _a;
  if (e.data.type === 'register-frame' && !parentId) {
    parentOrigin = e.data.origin;
    parentId = (_a = e.data.id) !== null && _a !== void 0 ? _a : null;
    if (!iframeHandshakeDone) {
      resolveIframeHandshake();
      iframeHandshakeDone = true;
    }
    self.removeEventListener('message', parentOriginListener);
  }
};
if (typeof window !== 'undefined') {
  self.addEventListener('message', parentOriginListener);
}

function resetState() {
  parentOrigin = null;
  bundlers.clear();
}
/**
 * Send a message to the editor, this is most probably an action you generated
 *
 * @export
 * @param {*} message
 * @returns
 */
function dispatch(message) {
  if (!message) return;
  var newMessage = __assign(__assign({}, message), {
    codesandbox: true,
  });
  if (parentId !== null) {
    newMessage.$id = parentId;
  }
  notifyListeners(newMessage);
  notifyFrames(newMessage);
  if (isStandalone) return;
  if (parentOrigin === null && message.type !== 'initialized') return;
  if (window.opener) {
    window.opener.postMessage(
      newMessage,
      parentOrigin === null ? '*' : parentOrigin
    );
  } else {
    window.parent.postMessage(
      newMessage,
      parentOrigin === null ? '*' : parentOrigin
    );
  }
}
var listeners = {};
var listenerId = 0;
/**
 * Listen to everything that comes in from either the editor or the sandbox
 * @param callback Call this function to 'unlisten'
 */
function listen(callback) {
  var id = ++listenerId;
  listeners[id] = callback;
  return function () {
    delete listeners[id];
  };
}

function notifyListeners(data, source) {
  // eslint-disable-next-line no-shadow
  Object.keys(listeners).forEach(function (listenerId) {
    if (listeners[listenerId]) {
      try {
        listeners[listenerId](data, source);
      } catch (e) {
        /**/
      }
    }
  });
}

function notifyFrames(message) {
  var rawMessage = JSON.parse(JSON.stringify(message));
  bundlers.forEach(function (origin, frame) {
    if (frame && frame.postMessage) {
      frame.postMessage(
        __assign(__assign({}, rawMessage), {
          codesandbox: true,
        }),
        origin
      );
    }
  });
}

function eventListener(e) {
  if (e.data.type === 'initialized' || isStandalone) {
    // iframe handshake is auto-resolved in the parent, only the child needs to wait for it
    // we detect the parent either by the "initialized" message which only the parent receives
    // or by the "isStandalone" flag which works for codesandbox.io and when sandpack is not inside an iframe
    iframeHandshakeDone = true;
  }
  if (!iframeHandshakeDone) {
    return;
  }
  var data = e.data;
  if (
    data &&
    data.codesandbox &&
    (parentOrigin === null || e.origin === parentOrigin) &&
    (data.$id == null || parentId === null || parentId === data.$id)
  ) {
    notifyListeners(data, e.source);
  }
}
/**
 * Register an window as a output the `dispatch` function can send messages to.
 *
 * @param frame
 */
function registerFrame(frame, origin, bundlerId) {
  bundlers.set(frame, origin);
  frame.postMessage(
    {
      type: 'register-frame',
      origin: document.location.origin,
      id: bundlerId,
    },
    origin
  );
}
if (typeof window !== 'undefined') {
  window.addEventListener('message', eventListener);
}

function reattach() {
  window.addEventListener('message', eventListener);
}

// Errors

export {
  Protocol,
  transformError,
  clearErrorTransformers,
  registerErrorTransformer,
  actions,
  isStandalone,
  iframeHandshake,
  resetState,
  dispatch,
  listen,
  notifyListeners,
  registerFrame,
  reattach,
};
//# sourceMappingURL=codesandbox.es5.js.map
