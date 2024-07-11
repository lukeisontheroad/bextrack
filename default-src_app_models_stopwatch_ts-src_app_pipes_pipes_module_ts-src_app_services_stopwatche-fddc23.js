(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_models_stopwatch_ts-src_app_pipes_pipes_module_ts-src_app_services_stopwatche-fddc23"],{

/***/ 81052:
/*!*************************************!*\
  !*** ./src/app/models/stopwatch.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stopwatch": () => (/* binding */ Stopwatch)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ 99485);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timesheet */ 71988);



class Stopwatch {
  constructor() {
    this.allowable_bill = false;
    this.strategy = 0;
    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
  }
  toTimesheet(user_id) {
    let timesheet = new _timesheet__WEBPACK_IMPORTED_MODULE_1__.Timesheet();
    timesheet.user_id = user_id;
    timesheet.status_id = this.status_id;
    timesheet.client_service_id = this.client_service_id;
    timesheet.text = this.text;
    timesheet.allowable_bill = this.allowable_bill;
    timesheet.contact_id = this.contact_id;
    timesheet.pr_project_id = this.pr_project_id;
    timesheet.pr_package_id = this.pr_package_id;
    let duration = this.timerDisplay.substring(0, 5);
    timesheet.tracking = {
      "type": "duration",
      "date": new _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd'),
      "duration": duration
    };
    return timesheet;
  }
}

/***/ }),

/***/ 71988:
/*!*************************************!*\
  !*** ./src/app/models/timesheet.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timesheet": () => (/* binding */ Timesheet)
/* harmony export */ });
/* harmony import */ var _timesheet_tracking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timesheet_tracking */ 38190);

class Timesheet {
  constructor() {
    this.tracking = new _timesheet_tracking__WEBPACK_IMPORTED_MODULE_0__.TimesheetTracking();
  }
}

/***/ }),

/***/ 38190:
/*!**********************************************!*\
  !*** ./src/app/models/timesheet_tracking.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimesheetTracking": () => (/* binding */ TimesheetTracking)
/* harmony export */ });
class TimesheetTracking {
  constructor() {
    this.type = 'duration';
    let today = new Date();
    today.setSeconds(0, 0);
    this.start = today.toISOString();
    this.date = today.toISOString();
  }
}

/***/ }),

/***/ 21443:
/*!***********************************************!*\
  !*** ./src/app/pipes/format-duration.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatDurationPipe": () => (/* binding */ FormatDurationPipe)
/* harmony export */ });
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/utils/utils.service */ 89265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class FormatDurationPipe {
  transform(value, ...args) {
    if (value === null || value === '') return '00:00';
    const splitted = value.split(':');
    return _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.pad(splitted[0]) + ':' + _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.pad(splitted[1]);
  }
}
FormatDurationPipe.ɵfac = function FormatDurationPipe_Factory(t) {
  return new (t || FormatDurationPipe)();
};
FormatDurationPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "formatDuration",
  type: FormatDurationPipe,
  pure: true
});

/***/ }),

/***/ 35503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _format_duration_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format-duration.pipe */ 21443);
/* harmony import */ var _to_duration_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-duration.pipe */ 93212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class PipesModule {}
PipesModule.ɵfac = function PipesModule_Factory(t) {
  return new (t || PipesModule)();
};
PipesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PipesModule
});
PipesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PipesModule, {
    declarations: [_to_duration_pipe__WEBPACK_IMPORTED_MODULE_1__.ToDurationPipe, _format_duration_pipe__WEBPACK_IMPORTED_MODULE_0__.FormatDurationPipe],
    exports: [_to_duration_pipe__WEBPACK_IMPORTED_MODULE_1__.ToDurationPipe, _format_duration_pipe__WEBPACK_IMPORTED_MODULE_0__.FormatDurationPipe]
  });
})();

/***/ }),

/***/ 93212:
/*!*******************************************!*\
  !*** ./src/app/pipes/to-duration.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDurationPipe": () => (/* binding */ ToDurationPipe)
/* harmony export */ });
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/utils/utils.service */ 89265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ToDurationPipe {
  transform(value, ...args) {
    const splitted = (value + '').split('.');
    const hours = parseInt(splitted[0]);
    const minutes = Math.round(parseFloat('0.' + splitted[1]) * 60);
    return _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.pad(hours) + ':' + _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.pad(minutes);
  }
}
ToDurationPipe.ɵfac = function ToDurationPipe_Factory(t) {
  return new (t || ToDurationPipe)();
};
ToDurationPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "toDuration",
  type: ToDurationPipe,
  pure: true
});

/***/ }),

/***/ 73018:
/*!*************************************************************!*\
  !*** ./src/app/services/stopwatches/stopwatches.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopwatchesService": () => (/* binding */ StopwatchesService)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/constants */ 47432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ 86578);





class StopwatchesService {
  constructor(storage) {
    this.storage = storage;
    this.internalStopwatches = [];
    this.stopwatches = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject();
    this.currentStopwatch = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.init();
  }
  init() {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.internalStopwatches = JSON.parse(yield _this.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.STOPWATCHES, src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.STOPWATCHES));
      _this.sendUpdate();
    })();
  }
  setCurrentStopwatch(stopwatch) {
    this.currentStopwatch.next(stopwatch);
  }
  getCurrentStopwatch() {
    return this.currentStopwatch;
  }
  sendUpdate() {
    this.internalStopwatches = this.internalStopwatches.sort((a, b) => a.title > b.title ? 1 : -1);
    this.stopwatches.next(this.internalStopwatches);
  }
  add(stopwatch) {
    var _this2 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          yield _this2.delete(stopwatch, false);
          _this2.internalStopwatches.push(stopwatch);
          yield _this2.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.STOPWATCHES, JSON.stringify(_this2.internalStopwatches));
          _this2.sendUpdate();
          resolve();
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  get(id) {
    var _this3 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          let filtered = _this3.internalStopwatches.filter(stopwatch => stopwatch.id === id);
          if (filtered.length === 1) {
            let stopwatch = filtered[0];
            for (var i = 0; i < src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.STOPWATCHES_FIELDS.length; i++) {
              stopwatch[src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.STOPWATCHES_FIELDS[i]] = yield _this3.storage.getString(stopwatch.id + '_' + src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.STOPWATCHES_FIELDS[i]);
            }
            resolve(stopwatch);
          } else {
            resolve(null);
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  delete(stopwatch, cleanTimeState = true) {
    var _this4 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this4.internalStopwatches = _this4.internalStopwatches.filter(obj => obj.id !== stopwatch.id);
          yield _this4.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.STOPWATCHES, JSON.stringify(_this4.internalStopwatches));
          if (cleanTimeState) {
            for (var i = 0; i < src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.STOPWATCHES_FIELDS.length; i++) {
              let field = stopwatch.id + '_' + src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.STOPWATCHES_FIELDS[i];
              _this4.storage.removeItem(field);
            }
          }
          _this4.sendUpdate();
          resolve();
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
}
StopwatchesService.ɵfac = function StopwatchesService_Factory(t) {
  return new (t || StopwatchesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService));
};
StopwatchesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: StopwatchesService,
  factory: StopwatchesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 99485:
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var v1 = __webpack_require__(/*! ./v1 */ 20582);
var v4 = __webpack_require__(/*! ./v4 */ 98627);
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
module.exports = uuid;

/***/ }),

/***/ 44099:
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}
function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}
module.exports = bytesToUuid;

/***/ }),

/***/ 65354:
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/***/ ((module) => {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }
    return rnds;
  };
}

/***/ }),

/***/ 20582:
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(/*! ./lib/rng */ 65354);
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ 44099);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf ? buf : bytesToUuid(b);
}
module.exports = v1;

/***/ }),

/***/ 98627:
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(/*! ./lib/rng */ 65354);
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ 44099);
function v4(options, buf, offset) {
  var i = buf && offset || 0;
  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};
  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }
  return buf || bytesToUuid(rnds);
}
module.exports = v4;

/***/ })

}]);
//# sourceMappingURL=default-src_app_models_stopwatch_ts-src_app_pipes_pipes_module_ts-src_app_services_stopwatche-fddc23.js.map