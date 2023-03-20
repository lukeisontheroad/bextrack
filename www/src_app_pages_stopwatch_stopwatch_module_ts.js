"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_stopwatch_stopwatch_module_ts"],{

/***/ 82002:
/*!*****************************************************!*\
  !*** ./src/app/pages/stopwatch/stopwatch.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateStopwatchPageModule": () => (/* binding */ CreateStopwatchPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _stopwatch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stopwatch.page */ 27225);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 25073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);










class CreateStopwatchPageModule {}
CreateStopwatchPageModule.ɵfac = function CreateStopwatchPageModule_Factory(t) {
  return new (t || CreateStopwatchPageModule)();
};
CreateStopwatchPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CreateStopwatchPageModule
});
CreateStopwatchPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
    path: '',
    component: _stopwatch_page__WEBPACK_IMPORTED_MODULE_0__.StopwatchPage
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CreateStopwatchPageModule, {
    declarations: [_stopwatch_page__WEBPACK_IMPORTED_MODULE_0__.StopwatchPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 27225:
/*!***************************************************!*\
  !*** ./src/app/pages/stopwatch/stopwatch.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopwatchPage": () => (/* binding */ StopwatchPage)
/* harmony export */ });
/* harmony import */ var _Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _models_stopwatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/stopwatch */ 81052);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/constants */ 47432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ 45146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_stopwatches_stopwatches_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/stopwatches/stopwatches.service */ 73018);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89265);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 33935);













function StopwatchPage_ion_title_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Update stopwatch"));
  }
}
function StopwatchPage_ion_title_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Create stopwatch"));
  }
}
function StopwatchPage_ion_select_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clientService_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", clientService_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", clientService_r6.name, " ");
  }
}
function StopwatchPage_ion_select_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", project_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", project_r7.name, " ");
  }
}
function StopwatchPage_ion_select_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const package_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", package_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", package_r8.name, " ");
  }
}
function StopwatchPage_ion_select_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", status_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", status_r9.name, " ");
  }
}
class StopwatchPage {
  constructor(apiService, router, route, stopwatchesService, navController, storage, utils) {
    this.apiService = apiService;
    this.router = router;
    this.route = route;
    this.stopwatchesService = stopwatchesService;
    this.navController = navController;
    this.storage = storage;
    this.utils = utils;
    this.isUpdate = false;
    this.availablePackages = [];
    this.projects = [];
    this.clientServices = [];
    this.timesheetStatus = [];
    this.contact = null;
    this.stopwatch = new _models_stopwatch__WEBPACK_IMPORTED_MODULE_1__.Stopwatch();
    this.init();
  }
  // private contactSearch: Observable<Contact[]> = null // = this.apiService.searchContact()
  init() {
    var _this = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.projects = yield _this.apiService.getProjects();
      _this.clientServices = yield _this.apiService.getClientService();
      _this.timesheetStatus = yield _this.apiService.getTimesheetStatus();
      if ((yield _this.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE.SETTINGS_LAST_SERVICE, src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULTS.SERVICE_ID)) != src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.TYPES.NONE) {
        _this.stopwatch.client_service_id = yield _this.storage.getNumber(src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE.SETTINGS_LAST_SERVICE_ID);
        _this.updateClientServices();
      }
      if ((yield _this.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE.SETTINGS_LAST_STATUS, src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULTS.STATUS_ID)) != src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.TYPES.NONE) {
        _this.stopwatch.status_id = yield _this.storage.getNumber(src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE.SETTINGS_LAST_STATUS_ID);
        _this.updateStatus();
      }
      if ((yield _this.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE.SETTINGS_LAST_PROJECT, src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULTS.PROJECT_ID)) != src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.TYPES.NONE) {
        _this.stopwatch.pr_project_id = yield _this.storage.getNumber(src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE.SETTINGS_LAST_PROJECT_ID);
        _this.availablePackages = yield _this.apiService.getPackagesForProject(_this.stopwatch.pr_project_id);
        _this.updateSelectTexts();
      }
      _this.route.params.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          if (params['stopwatch_id']) {
            _this.isUpdate = true;
            let stopwatch = yield _this.stopwatchesService.get(params['stopwatch_id']);
            if (stopwatch) {
              _this.stopwatch = stopwatch;
              _this.availablePackages = yield _this.apiService.getPackagesForProject(_this.stopwatch.pr_project_id);
            }
          }
          _this.updateSelectTexts();
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  updateClientServices() {
    var _this2 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const filteredClientServices = _this2.clientServices.filter(i => i.id == _this2.stopwatch.client_service_id);
      if (filteredClientServices.length > 0) {
        _this2.stopwatch.selectedClientServiceText = filteredClientServices[0].name;
      }
    })();
  }
  updateStatus() {
    var _this3 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const filteredStatus = _this3.timesheetStatus.filter(i => i.id == _this3.stopwatch.status_id);
      if (filteredStatus.length > 0) {
        _this3.stopwatch.selectedStatusText = filteredStatus[0].name;
      }
    })();
  }
  updateSelectTexts() {
    var _this4 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // set project
      const filteredProjects = _this4.projects.filter(i => i.id == _this4.stopwatch.pr_project_id);
      if (filteredProjects.length > 0) {
        _this4.stopwatch.selectedProjectText = filteredProjects[0].name;
        _this4.stopwatch.contact_id = filteredProjects[0].contact_id;
        console.log('selectedProjectText', _this4.stopwatch.selectedProjectText);
        console.log('pr_package_id', _this4.stopwatch.pr_package_id);
        if (_this4.stopwatch.pr_package_id) {
          _this4.stopwatch.selectedPackageText = (yield _this4.apiService.getPackageForProjectWithId(_this4.stopwatch.pr_project_id, _this4.stopwatch.pr_package_id)).name;
          console.log('selectedPackageText', _this4.stopwatch.selectedPackageText);
        }
      }
    })();
  }
  onProjectSelected() {
    var _this5 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.availablePackages = yield _this5.apiService.getPackagesForProject(_this5.stopwatch.pr_project_id);
      _this5.updateSelectTexts();
    })();
  }
  save() {
    var _this6 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this6.stopwatch.title || _this6.stopwatch.title.length < 1 || !_this6.stopwatch.text || _this6.stopwatch.text.length < 1 || !_this6.stopwatch.client_service_id || !_this6.stopwatch.status_id) {
        _this6.utils.showToast('Missing information');
        return false;
      }
      yield _this6.stopwatchesService.add(_this6.stopwatch);
      if (_this6.isUpdate) {
        _this6.utils.showToast('Updated');
      } else {
        _this6.utils.showToast('Created');
      }
      _this6.navController.navigateRoot('/tabs/stopwatches');
    })();
  }
  contactChange(event) {
    console.log('port:', event.value);
  }
  searchContact(event) {
    var _this7 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let text = event.text.trim().toLowerCase();
      event.component.startSearch();
      event.component.items = yield _this7.apiService.searchContact(text);
      event.component.endSearch();
    })();
  }
}
StopwatchPage.ɵfac = function StopwatchPage_Factory(t) {
  return new (t || StopwatchPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_stopwatches_stopwatches_service__WEBPACK_IMPORTED_MODULE_4__.StopwatchesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService));
};
StopwatchPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: StopwatchPage,
  selectors: [["app-stopwatch"]],
  decls: 68,
  vars: 66,
  consts: [["color", "primary"], ["slot", "start"], ["mode", "md", "defaultHref", "/tabs/stopwatches"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "save"], [4, "ngIf"], ["position", "stacked"], ["autoGrow", "true", "placeholder", "Text", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [3, "placeholder", "ngModel", "selectedText", "ionChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["position", "floating"], ["placeholder", "Select", 3, "ngModel", "selectedText", "ionChange", "ngModelChange"], [3, "placeholder", "ngModel", "ngModelChange"], [3, "value"]],
  template: function StopwatchPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-buttons", 3)(5, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StopwatchPage_Template_ion_button_click_5_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, StopwatchPage_ion_title_7_Template, 3, 3, "ion-title", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, StopwatchPage_ion_title_8_Template, 3, 3, "ion-title", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-content")(10, "ion-list")(11, "ion-item")(12, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ion-textarea", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function StopwatchPage_Template_ion_textarea_ngModelChange_15_listener($event) {
        return ctx.stopwatch.title = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-item")(17, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ion-toggle", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function StopwatchPage_Template_ion_toggle_ngModelChange_20_listener($event) {
        return ctx.stopwatch.allowable_bill = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "ion-item")(22, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ion-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function StopwatchPage_Template_ion_select_ionChange_25_listener() {
        return ctx.updateClientServices();
      })("ngModelChange", function StopwatchPage_Template_ion_select_ngModelChange_25_listener($event) {
        return ctx.stopwatch.client_service_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, StopwatchPage_ion_select_option_27_Template, 2, 2, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "ion-item")(29, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "ion-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function StopwatchPage_Template_ion_select_ionChange_32_listener() {
        return ctx.onProjectSelected();
      })("ngModelChange", function StopwatchPage_Template_ion_select_ngModelChange_32_listener($event) {
        return ctx.stopwatch.pr_project_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, StopwatchPage_ion_select_option_34_Template, 2, 2, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "ion-item")(36, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "ion-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function StopwatchPage_Template_ion_select_ionChange_39_listener() {
        return ctx.onProjectSelected();
      })("ngModelChange", function StopwatchPage_Template_ion_select_ngModelChange_39_listener($event) {
        return ctx.stopwatch.pr_package_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, StopwatchPage_ion_select_option_41_Template, 2, 2, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "ion-item")(43, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "ion-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function StopwatchPage_Template_ion_select_ionChange_46_listener() {
        return ctx.updateStatus();
      })("ngModelChange", function StopwatchPage_Template_ion_select_ngModelChange_46_listener($event) {
        return ctx.stopwatch.status_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, StopwatchPage_ion_select_option_47_Template, 2, 2, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "ion-item")(49, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](51, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "ion-textarea", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function StopwatchPage_Template_ion_textarea_ngModelChange_52_listener($event) {
        return ctx.stopwatch.text = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "ion-item")(54, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](56, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "ion-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function StopwatchPage_Template_ion_select_ngModelChange_57_listener($event) {
        return ctx.stopwatch.strategy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](58, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "ion-select-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "ion-select-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](64, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "ion-select-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](67, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isUpdate);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isUpdate);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 36, "Stopwatch title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.stopwatch.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 38, "Chargeable"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.stopwatch.allowable_bill);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 40, "Service"), "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 42, "Service"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.stopwatch.client_service_id)("selectedText", ctx.stopwatch.selectedClientServiceText);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.clientServices);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 44, "Project"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 46, "Project"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.stopwatch.pr_project_id)("selectedText", ctx.stopwatch.selectedProjectText);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.projects);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](38, 48, "Package"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](40, 50, "Package"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.stopwatch.pr_package_id)("selectedText", ctx.stopwatch.selectedPackageText);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.availablePackages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](45, 52, "Status"), "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.stopwatch.status_id)("selectedText", ctx.stopwatch.selectedStatusText);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.timesheetStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](51, 54, "Description"), "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.stopwatch.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](56, 56, "Strategy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](58, 58, "Strategy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.stopwatch.strategy);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](61, 60, "Always ask"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](64, 62, "Automatically create"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](67, 64, "Always edit"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stopwatch_stopwatch_module_ts.js.map