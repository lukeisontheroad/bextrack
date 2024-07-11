"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings_settings_module_ts"],{

/***/ 7850:
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 41902);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);









class SettingsPageModule {}
SettingsPageModule.ɵfac = function SettingsPageModule_Factory(t) {
  return new (t || SettingsPageModule)();
};
SettingsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SettingsPageModule
});
SettingsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
    path: '',
    component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingsPageModule, {
    declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 41902:
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/constants */ 47432);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ 45146);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-appauth */ 77798);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89265);
/* harmony import */ var _openid_appauth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @openid/appauth */ 17154);
/* harmony import */ var _openid_appauth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_openid_appauth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _pipes_to_duration_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/to-duration.pipe */ 93212);















function SettingsPage_ion_select_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-select-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stati_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", stati_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](stati_r3.name);
  }
}
function SettingsPage_ion_select_option_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-select-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const service_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", service_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](service_r4.name);
  }
}
function SettingsPage_ion_select_option_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-select-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", project_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](project_r5.name);
  }
}
class SettingsPage {
  constructor(apiService, authService, storage, utils, storageBackend, navCtrl) {
    var _this = this;
    this.apiService = apiService;
    this.authService = authService;
    this.storage = storage;
    this.utils = utils;
    this.storageBackend = storageBackend;
    this.navCtrl = navCtrl;
    this.services = [];
    this.status = [];
    this.projects = [];
    this.lastUsedService = src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.SERVICE_ID;
    this.lastUsedStatus = src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.STATUS_ID;
    this.lastUsedProject = src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.PROJECT_ID;
    this.stopwatchSingular = src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.STOPWATCH_SINGULAR;
    this.duration = src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.DURATION;
    this.steps = src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.STEPS;
    this.hoursPerDay = src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.HOURS_PER_DAY;
    this.notificationsChanged = lodash__WEBPACK_IMPORTED_MODULE_2__.debounce( /*#__PURE__*/(0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_DURATION, _this.duration);
      _this.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_STEPS, _this.steps);
      _this.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_HOURS_PER_DAY, _this.hoursPerDay);
      _this.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_LAST_SERVICE, _this.lastUsedService);
      _this.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_LAST_STATUS, _this.lastUsedStatus);
      _this.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_LAST_PROJECT, _this.lastUsedProject);
      _this.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_STOPWATCH_SINGULAR, _this.stopwatchSingular);
      if (parseInt(_this.lastUsedService) >= 0) _this.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_LAST_SERVICE_ID, _this.lastUsedService);
      if (parseInt(_this.lastUsedStatus) >= 0) _this.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_LAST_STATUS_ID, _this.lastUsedStatus);
      if (parseInt(_this.lastUsedProject) >= 0) _this.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_LAST_PROJECT_ID, _this.lastUsedProject);
      _this.utils.showToast('Updated');
    }), 2000);
    this.init();
  }
  init() {
    var _this2 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.duration = yield _this2.storage.getNumber(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_DURATION, src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.DURATION);
      _this2.steps = yield _this2.storage.getNumber(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_STEPS, src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.STEPS);
      _this2.hoursPerDay = yield _this2.storage.getNumber(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_HOURS_PER_DAY, src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.HOURS_PER_DAY);
      _this2.lastUsedService = yield _this2.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_LAST_SERVICE, src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.SERVICE_ID);
      _this2.lastUsedStatus = yield _this2.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_LAST_STATUS, src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.STATUS_ID);
      _this2.lastUsedProject = yield _this2.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_LAST_PROJECT, src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.PROJECT_ID);
      _this2.stopwatchSingular = yield _this2.storage.getBoolean(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.SETTINGS_STOPWATCH_SINGULAR, src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.STOPWATCH_SINGULAR);
      _this2.user = yield _this2.apiService.getUser();
      _this2.services = yield _this2.apiService.getClientService();
      _this2.status = yield _this2.apiService.getTimesheetStatus();
      _this2.projects = yield _this2.apiService.getProjects();
    })();
  }
  logout() {
    var _this3 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.authService.signOut();
      _this3.navCtrl.navigateRoot('auth/endsession');
      yield _this3.storageBackend.clear();
      window.location.href = '/';
    })();
  }
}
SettingsPage.ɵfac = function SettingsPage_Factory(t) {
  return new (t || SettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ionic_appauth__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_openid_appauth__WEBPACK_IMPORTED_MODULE_7__.StorageBackend), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController));
};
SettingsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: SettingsPage,
  selectors: [["app-settings"]],
  decls: 120,
  vars: 102,
  consts: [["color", "primary"], [1, "ion-align-items-center"], ["size", "12", 1, "ion-text-center"], ["name", "person-circle-outline", 2, "font-size", "180px"], ["shape", "round", 3, "click"], ["position", "stacked"], [2, "width", "100%", "text-align", "center", "padding", "16px"], ["min", "1", "max", "60", "step", "1", "snaps", "true", "ticks", "false", 3, "ngModel", "ngModelChange", "ionChange"], ["min", "0", "max", "12", "snaps", "true", "ticks", "false", 3, "step", "ngModel", "ngModelChange", "ionChange"], [3, "ngModel", "ngModelChange", "ionChange"], ["value", "-2"], ["value", "-1"], [3, "value", 4, "ngFor", "ngForOf"], ["routerLink", "/notification-settings"], ["routerLink", "/module-settings", "lines", "none"], ["onclick", "window.open('https://feedback.bextrack.com', '_system', 'location=yes'); return false;"], ["routerLink", "/about", "lines", "none"], [3, "value"]],
  template: function SettingsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-content")(6, "ion-grid")(7, "ion-row", 1)(8, "ion-col", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-row", 1)(11, "ion-col", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-row", 1)(14, "ion-col", 2)(15, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsPage_Template_ion_button_click_15_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-list")(19, "ion-list-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "ion-item")(23, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "ion-range", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_range_ngModelChange_29_listener($event) {
        return ctx.steps = $event;
      })("ionChange", function SettingsPage_Template_ion_range_ionChange_29_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-item")(31, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](36, "toDuration");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "ion-range", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_range_ngModelChange_38_listener($event) {
        return ctx.hoursPerDay = $event;
      })("ionChange", function SettingsPage_Template_ion_range_ionChange_38_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "ion-item")(40, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](45, "toDuration");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "ion-range", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_range_ngModelChange_47_listener($event) {
        return ctx.duration = $event;
      })("ionChange", function SettingsPage_Template_ion_range_ionChange_47_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "ion-item")(49, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](51, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "ion-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_select_ngModelChange_52_listener($event) {
        return ctx.lastUsedStatus = $event;
      })("ionChange", function SettingsPage_Template_ion_select_ionChange_52_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "ion-select-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](58, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, SettingsPage_ion_select_option_59_Template, 2, 2, "ion-select-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "ion-item")(61, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](63, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "ion-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_select_ngModelChange_64_listener($event) {
        return ctx.lastUsedService = $event;
      })("ionChange", function SettingsPage_Template_ion_select_ionChange_64_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "ion-select-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](67, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](70, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](71, SettingsPage_ion_select_option_71_Template, 2, 2, "ion-select-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "ion-item")(73, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](75, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "ion-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_select_ngModelChange_76_listener($event) {
        return ctx.lastUsedProject = $event;
      })("ionChange", function SettingsPage_Template_ion_select_ionChange_76_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "ion-select-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](79, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](82, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](83, SettingsPage_ion_select_option_83_Template, 2, 2, "ion-select-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "ion-item")(85, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](87, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "ion-checkbox", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_88_listener($event) {
        return ctx.stopwatchSingular = $event;
      })("ionChange", function SettingsPage_Template_ion_checkbox_ionChange_88_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "ion-item", 13)(90, "ion-label")(91, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](93, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](96, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "ion-item", 14)(98, "ion-label")(99, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](101, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](103);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](104, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "ion-list-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](107, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "ion-item", 15)(109, "ion-label")(110, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](111);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](112, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](114);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](115, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](116, "ion-item", 16)(117, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](118);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](119, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 44, "Settings"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx.user == null ? null : ctx.user.firstname, " ", ctx.user == null ? null : ctx.user.lastname, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 46, "Logout"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 48, "Settings"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](25, 50, "Duration steps"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx.steps, " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 52, "minute(s)"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.steps);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](33, 54, "Hours per day"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](36, 56, ctx.hoursPerDay), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](37, 58, "hour(s)"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("step", ctx.steps / 60)("ngModel", ctx.hoursPerDay);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](42, 60, "Default duration"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](45, 62, ctx.duration), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](46, 64, "hour(s)"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("step", ctx.steps / 60)("ngModel", ctx.duration);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](51, 66, "Default status"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.lastUsedStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](55, 68, "None"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](58, 70, "Last used"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](63, 72, "Default service"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.lastUsedService);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](67, 74, "None"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](70, 76, "Last used"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.services);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](75, 78, "Default project"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.lastUsedProject);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](79, 80, "None"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](82, 82, "Last used"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.projects);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](87, 84, "Only allow to run one stopwatch at the time"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.stopwatchSingular);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](93, 86, "Notifications"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](96, 88, "Never forget to track your time by setting a reminder."));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](101, 90, "Modules"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](104, 92, "Activate or deactivate modules"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](107, 94, "Support"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](112, 96, "Provide Feedback"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](115, 98, "help-me-to-improve-the-app"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](119, 100, "About"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRange, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.RouterLinkDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _pipes_to_duration_pipe__WEBPACK_IMPORTED_MODULE_8__.ToDurationPipe],
  styles: ["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: translucent;\n}\n\nion-list-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbmlvbi1saXN0LWhlYWRlcntcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 21443:
/*!***********************************************!*\
  !*** ./src/app/pipes/format-duration.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_settings_module_ts.js.map