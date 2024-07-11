"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/pipes.module */ 35503);
/* harmony import */ var _stopwatch_template_stopwatch_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stopwatch-template/stopwatch-template.component */ 67066);
/* harmony import */ var _time_display_time_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-display/time-display.component */ 89910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);








class ComponentsModule {}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) {
  return new (t || ComponentsModule)();
};
ComponentsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ComponentsModule
});
ComponentsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComponentsModule, {
    declarations: [_stopwatch_template_stopwatch_template_component__WEBPACK_IMPORTED_MODULE_1__.StopwatchTemplateComponent, _time_display_time_display_component__WEBPACK_IMPORTED_MODULE_2__.TimeDisplayComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
    exports: [_stopwatch_template_stopwatch_template_component__WEBPACK_IMPORTED_MODULE_1__.StopwatchTemplateComponent, _time_display_time_display_component__WEBPACK_IMPORTED_MODULE_2__.TimeDisplayComponent]
  });
})();

/***/ }),

/***/ 67066:
/*!*******************************************************************************!*\
  !*** ./src/app/components/stopwatch-template/stopwatch-template.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopwatchTemplateComponent": () => (/* binding */ StopwatchTemplateComponent)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var src_app_models_stopwatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/stopwatch */ 81052);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/constants */ 47432);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89265);
/* harmony import */ var src_app_services_stopwatches_stopwatches_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/stopwatches/stopwatches.service */ 73018);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api/api.service */ 45146);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);













function StopwatchTemplateComponent_ion_avatar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-avatar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function StopwatchTemplateComponent_ion_avatar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-avatar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function StopwatchTemplateComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "Project"), ": ", ctx_r2.stopwatch == null ? null : ctx_r2.stopwatch.selectedProjectText, "");
  }
}
function StopwatchTemplateComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "Package"), ": ", ctx_r3.stopwatch == null ? null : ctx_r3.stopwatch.selectedPackageText, "");
  }
}
function StopwatchTemplateComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "Service"), ": ", ctx_r4.stopwatch == null ? null : ctx_r4.stopwatch.selectedClientServiceText, "");
  }
}
function StopwatchTemplateComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "Status"), ": ", ctx_r5.stopwatch == null ? null : ctx_r5.stopwatch.selectedStatusText, "");
  }
}
function StopwatchTemplateComponent_ion_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StopwatchTemplateComponent_ion_button_15_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.startTimer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "Start"), "");
  }
}
function StopwatchTemplateComponent_ion_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StopwatchTemplateComponent_ion_button_16_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.startTimer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "Continue"), "");
  }
}
function StopwatchTemplateComponent_ion_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StopwatchTemplateComponent_ion_button_17_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.pauseTimer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "Pause"), "");
  }
}
const {
  LocalNotifications
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Plugins;
class StopwatchTemplateComponent {
  constructor(translateService, storage, utils, stopwatchesService, apiService, alertController, navController) {
    this.translateService = translateService;
    this.storage = storage;
    this.utils = utils;
    this.stopwatchesService = stopwatchesService;
    this.apiService = apiService;
    this.alertController = alertController;
    this.navController = navController;
    this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.timerDisplay = '00:00:00';
    this.difference = 0;
    this.savedTime = 0;
    this.paused = 0;
    this.running = 0;
    this.resolution = 100;
  }
  ngOnInit() {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.loadCurrentState();
      if (_this.running === 1 && _this.paused === 0) {
        _this.tInterval = setInterval(() => {
          _this.getShowTime();
        }, _this.resolution);
      }
    })();
  }
  edit() {
    var _this2 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.onEdit.emit(_this2.stopwatch.id);
    })();
  }
  delete() {
    var _this3 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (yield _this3.utils.confirm('Are you sure?', 'Delete ' + _this3.stopwatch.title)) {
        yield _this3.stopwatchesService.delete(_this3.stopwatch);
        _this3.utils.showToast('Deleted');
        _this3.onDelete.emit(true);
      } else {
        _this3.onDelete.emit(false);
      }
    })();
  }
  startTimer() {
    this.startTime = new Date().getTime();
    this.tInterval = setInterval(() => {
      this.getShowTime();
    }, this.resolution);
    this.paused = 0;
    this.running = 1;
    this.saveCurrentState();
    this.startNotification();
    this.stopwatchesService.setCurrentStopwatch(this.stopwatch);
  }
  loadItem(field) {
    var _this4 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
        let value = yield _this4.storage.getString(_this4.stopwatch.id + '_' + field, null);
        if (value != null) {
          if (typeof _this4[field + ''] === 'number') {
            _this4[field + ''] = parseFloat(value);
          } else {
            _this4[field + ''] = value;
          }
        }
        resolve();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  saveItem(field, value) {
    return this.storage.setItem(this.stopwatch.id + '_' + field, value);
  }
  loadCurrentState() {
    var _this5 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          let promises = [];
          for (var i = 0; i < src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.STOPWATCHES_FIELDS.length; i++) {
            let field = src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.STOPWATCHES_FIELDS[i];
            promises.push(_this5.loadItem(field));
          }
          yield Promise.all(promises);
          resolve();
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  saveCurrentState() {
    var _this6 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promises = [];
      for (var i = 0; i < src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.STOPWATCHES_FIELDS.length; i++) {
        let field = src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.STOPWATCHES_FIELDS[i];
        promises.push(_this6.saveItem(field, _this6[field]));
      }
      yield Promise.all(promises);
    })();
  }
  pauseTimer() {
    if (!this.difference) {
      // if timer never started, don't allow pause button to do anything
    } else if (!this.paused) {
      clearInterval(this.tInterval);
      this.savedTime = this.difference;
      this.paused = 1;
      this.running = 0;
      this.saveCurrentState();
      this.stopNotification();
    }
  }
  processTimesheet() {
    var _this7 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          if (_this7.difference === 0) {
            resolve(true);
            _this7.navController.navigateRoot('/create-time/stopwatch/' + _this7.stopwatch.id);
          } else if (_this7.stopwatch.strategy === 0) {
            _this7.pauseTimer();
            const alert = yield _this7.alertController.create({
              header: 'Create time',
              message: 'Do you want to edit the timeentry before creating it?',
              buttons: [{
                text: 'Edit before create',
                handler: function () {
                  var _ref4 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                    resolve(true);
                    _this7.navController.navigateRoot('/create-time/stopwatch/' + _this7.stopwatch.id);
                  });
                  return function handler() {
                    return _ref4.apply(this, arguments);
                  };
                }()
              }, {
                text: 'Create without edit',
                handler: () => {
                  resolve(true);
                  _this7.createTimesheet();
                }
              }, {
                text: 'Continue stopwatch',
                role: 'cancel',
                handler: () => {
                  _this7.startTimer();
                }
              }, {
                text: 'Reset stopwatch',
                cssClass: 'secondary',
                handler: () => {
                  resolve(true);
                }
              }]
            });
            alert.present();
          } else if (_this7.stopwatch.strategy === 1) {
            yield _this7.createTimesheet();
            resolve(true);
          } else if (_this7.stopwatch.strategy === 2) {
            _this7.navController.navigateRoot('/create-time/stopwatch/' + _this7.stopwatch.id);
            resolve(true);
          } else {
            console.error('Strategy not implemented');
            resolve(false);
          }
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  createTimesheet() {
    var _this8 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref5 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
        let stopwatch = yield _this8.stopwatchesService.get(_this8.stopwatch.id);
        stopwatch = Object.assign(new src_app_models_stopwatch__WEBPACK_IMPORTED_MODULE_2__.Stopwatch(), _this8.stopwatch);
        let timesheet = yield stopwatch.toTimesheet((yield _this8.apiService.getUser()).id);
        let minTime = (yield _this8.storage.getNumber(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_STEPS)) * 60;
        let splitted = stopwatch.timerDisplay.split(':').map(i => parseInt(i));
        if (splitted[0] > 0 || splitted[1] >= minTime / 60) {
          yield _this8.apiService.postTimesheet(timesheet);
          _this8.utils.showToast('Time entry created');
          resolve(true);
        } else {
          _this8.utils.showToast('Duration below minimum tracking time of ' + minTime / 60 + 'min');
          resolve(false);
        }
      });
      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  }
  stopTimer() {
    var _this9 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (yield _this9.processTimesheet()) {
        clearInterval(_this9.tInterval);
        _this9.savedTime = 0;
        _this9.difference = 0;
        _this9.paused = 0;
        _this9.running = 0;
        _this9.timerDisplay = '00:00:00';
        _this9.stopNotification();
        setTimeout(() => {
          _this9.saveCurrentState();
        }, 1000);
      } else {
        _this9.pauseTimer();
      }
    })();
  }
  getShowTime() {
    this.updatedTime = new Date().getTime();
    if (this.savedTime) {
      this.difference = this.updatedTime - this.startTime + this.savedTime;
    } else {
      this.difference = this.updatedTime - this.startTime;
    }
    // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(this.difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(this.difference % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(this.difference % (1000 * 60) / 1000);
    var milliseconds = Math.floor(this.difference % (1000 * 60) / 100);
    let hours_string = hours < 10 ? "0" + hours : hours;
    let minutes_string = minutes < 10 ? "0" + minutes : minutes;
    let seconds_string = seconds < 10 ? "0" + seconds : seconds;
    // let milliseconds_string = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
    this.timerDisplay = hours_string + ':' + minutes_string + ':' + seconds_string;
  }
  startNotification() {
    var _this10 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Start notification');
      if (!(yield LocalNotifications.requestPermission())) {
        console.warn('No notification permission');
        return;
      }
      try {
        cordova.plugins.notification.local.schedule({
          id: parseInt('0x' + _this10.stopwatch.id.substring(0, 8)),
          title: yield _this10.translateService.get('BexTrack').toPromise(),
          text: yield _this10.translateService.get('timewatch-is-running').toPromise(),
          sticky: true,
          ongoing: true,
          autoClear: false
        });
      } catch (e) {
        console.error('Notificaiton error', e);
      }
    })();
  }
  stopNotification() {
    var _this11 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Stop notification');
      try {
        cordova.plugins.notification.local.cancel(parseInt('0x' + _this11.stopwatch.id.substring(0, 8)));
      } catch (e) {
        console.error('Notificaiton error', e);
      }
    })();
  }
}
StopwatchTemplateComponent.ɵfac = function StopwatchTemplateComponent_Factory(t) {
  return new (t || StopwatchTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_stopwatches_stopwatches_service__WEBPACK_IMPORTED_MODULE_6__.StopwatchesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController));
};
StopwatchTemplateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: StopwatchTemplateComponent,
  selectors: [["app-stopwatch-template"]],
  inputs: {
    stopwatch: "stopwatch"
  },
  outputs: {
    onEdit: "onEdit",
    onDelete: "onDelete"
  },
  decls: 33,
  vars: 24,
  consts: [["slot", "start", 4, "ngIf"], [4, "ngIf"], ["slot", "end", 1, "controls"], ["slot", "end", 3, "click", 4, "ngIf"], ["slot", "end", "color", "warning", 3, "click", 4, "ngIf"], ["fill", "clear", "slot", "end"], ["color", "secondary", "slot", "end", "slot", "end", 3, "click"], ["name", "create-outline"], ["side", "end"], ["color", "warning", 3, "click"], ["color", "danger", 3, "click"], ["slot", "start"], ["src", "/assets/paid.png"], ["src", "/assets/free.png"], ["slot", "end", 3, "click"], ["name", "play-outline"], ["slot", "end", "color", "warning", 3, "click"], ["name", "pause-outline"]],
  template: function StopwatchTemplateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item-sliding")(1, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, StopwatchTemplateComponent_ion_avatar_2_Template, 2, 0, "ion-avatar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, StopwatchTemplateComponent_ion_avatar_3_Template, 2, 0, "ion-avatar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-label")(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, StopwatchTemplateComponent_p_7_Template, 3, 4, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, StopwatchTemplateComponent_p_8_Template, 3, 4, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, StopwatchTemplateComponent_p_9_Template, 3, 4, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, StopwatchTemplateComponent_p_10_Template, 3, 4, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, StopwatchTemplateComponent_ion_button_15_Template, 4, 3, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, StopwatchTemplateComponent_ion_button_16_Template, 4, 3, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, StopwatchTemplateComponent_ion_button_17_Template, 4, 3, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StopwatchTemplateComponent_Template_ion_button_click_22_listener() {
        return ctx.stopTimer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "ion-item-options", 8)(27, "ion-item-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StopwatchTemplateComponent_Template_ion_item_option_click_27_listener() {
        return ctx.edit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "ion-item-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StopwatchTemplateComponent_Template_ion_item_option_click_30_listener() {
        return ctx.delete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stopwatch.allowable_bill);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.stopwatch.allowable_bill);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.stopwatch == null ? null : ctx.stopwatch.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stopwatch == null ? null : ctx.stopwatch.selectedProjectText);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stopwatch == null ? null : ctx.stopwatch.selectedPackageText);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stopwatch == null ? null : ctx.stopwatch.selectedClientServiceText);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stopwatch == null ? null : ctx.stopwatch.selectedStatusText);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 16, "Description"), ": ", ctx.stopwatch == null ? null : ctx.stopwatch.text, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.difference == 0 && (ctx.running == 0 || ctx.paused == 1));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.difference > 0 && (ctx.running == 0 || ctx.paused == 1));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.running == 1 && ctx.paused != 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.timerDisplay);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 18, "Create"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 20, "Edit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 22, "Delete"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["ion-button[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9wd2F0Y2gtdGVtcGxhdGUvc3RvcHdhdGNoLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue1xuICAgIHdpZHRoOjExMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuaDJ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 89910:
/*!*******************************************************************!*\
  !*** ./src/app/components/time-display/time-display.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeDisplayComponent": () => (/* binding */ TimeDisplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 33935);



function TimeDisplayComponent_p_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "Time estimated"), ": ", ctx_r0.object == null ? null : ctx_r0.object.spent_time_in_hours, " / ", ctx_r0.object == null ? null : ctx_r0.object.estimated_time_in_hours, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "hours"), "");
  }
}
function TimeDisplayComponent_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "Time spend"), ": ", ctx_r1.object == null ? null : ctx_r1.object.spent_time_in_hours, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "hours"), "");
  }
}
function TimeDisplayComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "Time spend"), ": ", ctx_r2.object == null ? null : ctx_r2.object.spent_time_in_hours, " / ", ctx_r2.object == null ? null : ctx_r2.object.estimated_time_in_hours, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "hours"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, (ctx_r2.object == null ? null : ctx_r2.object.spent_time_in_hours) / (ctx_r2.object == null ? null : ctx_r2.object.estimated_time_in_hours) * 100, "1.0-0"), "%)");
  }
}
class TimeDisplayComponent {
  constructor() {
    this.object = null;
  }
}
TimeDisplayComponent.ɵfac = function TimeDisplayComponent_Factory(t) {
  return new (t || TimeDisplayComponent)();
};
TimeDisplayComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TimeDisplayComponent,
  selectors: [["app-time-display"]],
  inputs: {
    object: "object"
  },
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"]],
  template: function TimeDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TimeDisplayComponent_p_0_Template, 4, 8, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimeDisplayComponent_p_1_Template, 4, 7, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimeDisplayComponent_p_2_Template, 5, 12, "p", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.object == null ? null : ctx.object.estimated_time_in_hours) > 0 && (ctx.object == null ? null : ctx.object.spent_time_in_hours) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.object == null ? null : ctx.object.estimated_time_in_hours) == 0 && (ctx.object == null ? null : ctx.object.spent_time_in_hours) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.object == null ? null : ctx.object.estimated_time_in_hours) > 0 && (ctx.object == null ? null : ctx.object.spent_time_in_hours) > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
  styles: ["p[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.4);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90aW1lLWRpc3BsYXkvdGltZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbInB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map