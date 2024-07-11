"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 99366:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 76446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
}];
class DashboardPageRoutingModule {}
DashboardPageRoutingModule.ɵfac = function DashboardPageRoutingModule_Factory(t) {
  return new (t || DashboardPageRoutingModule)();
};
DashboardPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DashboardPageRoutingModule
});
DashboardPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 71659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 99366);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 76446);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ 14142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);








class DashboardPageModule {}
DashboardPageModule.ɵfac = function DashboardPageModule_Factory(t) {
  return new (t || DashboardPageModule)();
};
DashboardPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: DashboardPageModule
});
DashboardPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__.NgxChartsModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardPageModule, {
    declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__.NgxChartsModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule]
  });
})();

/***/ }),

/***/ 76446:
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/api.service */ 45146);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89265);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ 14142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);








const _c0 = ["width"];
function DashboardPage_h1_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r0.totalHoursLastWeek, "1.0-2"));
  }
}
function DashboardPage_ion_skeleton_text_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-skeleton-text", 9);
  }
}
function DashboardPage_h1_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r2.chargeabilityLastWeek, "1.0-0"), "%");
  }
}
function DashboardPage_ion_skeleton_text_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-skeleton-text", 9);
  }
}
function DashboardPage_h1_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r4.totalHoursLastMonth, "1.0-2"));
  }
}
function DashboardPage_ion_skeleton_text_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-skeleton-text", 9);
  }
}
function DashboardPage_h1_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r6.chargeabilityLastMonth, "1.0-0"), "%");
  }
}
function DashboardPage_ion_skeleton_text_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-skeleton-text", 9);
  }
}
function DashboardPage_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-charts-pie-chart", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("view", ctx_r9.view)("scheme", ctx_r9.colorScheme)("results", ctx_r9.data)("gradient", ctx_r9.gradient)("legend", ctx_r9.showLegend)("legendPosition", ctx_r9.legendPosition)("labels", ctx_r9.showLabels)("doughnut", ctx_r9.isDoughnut);
  }
}
function DashboardPage_h2_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "No data available"));
  }
}
class DashboardPage {
  constructor(apiService, utils) {
    this.apiService = apiService;
    this.utils = utils;
    this.view = null;
    this.timesheets = [];
    this.timesheetsLastWeek = [];
    this.timesheetsLastMonth = [];
    this.lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    this.lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    this.totalHoursLastWeek = 0;
    this.payedHoursLastWeek = 0;
    this.chargeabilityLastWeek = 0;
    this.totalHoursLastMonth = 0;
    this.payedHoursLastMonth = 0;
    this.chargeabilityLastMonth = 0;
    this.data = [];
    this.loading = false;
    // options
    this.gradient = false;
    this.showLegend = true;
    this.showLabels = false;
    this.isDoughnut = false;
    this.legendPosition = 'left';
    this.colorScheme = {
      domain: ['#093948', '#A2C003', '#0085BA', '#DCC521', '#DB7C00', '#C81919']
    };
    this.projects = {};
    this.doRefresh();
    this.apiService.timesUpdated.subscribe(() => this.doRefresh());
  }
  ionViewDidEnter() {
    let width = this.widthElement.el.scrollWidth;
    this.view = [width, width];
  }
  doRefresh(event, force = false) {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      _this.data = [];
      setTimeout(() => {
        _this.calculateStatistics();
        if (event) {
          event.target.complete();
        }
        _this.loading = false;
      }, 1000);
    })();
  }
  calculateStatistics() {
    var _this2 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.timesheets = yield _this2.apiService.getMyTimesheets();
      _this2.timesheetsLastWeek = _this2.timesheets.filter(timesheet => new Date(timesheet.date) >= _this2.lastWeek);
      _this2.timesheetsLastMonth = _this2.timesheets.filter(timesheet => new Date(timesheet.date) >= _this2.lastMonth);
      _this2.totalHoursLastWeek = _this2.timesheetsLastWeek.map(timesheet => _this2.utils.parseDuration(timesheet.duration)).reduce((a, b) => a + b, 0);
      _this2.payedHoursLastWeek = _this2.timesheetsLastWeek.filter(timesheet => timesheet.allowable_bill).map(timesheet => _this2.utils.parseDuration(timesheet.duration)).reduce((a, b) => a + b, 0);
      _this2.chargeabilityLastWeek = _this2.payedHoursLastWeek > 0 ? _this2.payedHoursLastWeek / _this2.totalHoursLastWeek * 100 : 0;
      _this2.totalHoursLastMonth = _this2.timesheetsLastMonth.map(timesheet => _this2.utils.parseDuration(timesheet.duration)).reduce((a, b) => a + b, 0);
      _this2.payedHoursLastMonth = _this2.timesheetsLastMonth.filter(timesheet => timesheet.allowable_bill).map(timesheet => _this2.utils.parseDuration(timesheet.duration)).reduce((a, b) => a + b, 0);
      _this2.chargeabilityLastMonth = _this2.payedHoursLastMonth > 0 ? _this2.payedHoursLastMonth / _this2.totalHoursLastMonth * 100 : 0;
      for (var i = 0; i < _this2.timesheetsLastMonth.length; i++) {
        let timesheet = _this2.timesheetsLastMonth[i];
        if (timesheet.project) {
          if (timesheet.project.name in _this2.projects) {
            _this2.projects[timesheet.project.name] += _this2.utils.parseDuration(timesheet.duration);
          } else {
            _this2.projects[timesheet.project.name] = _this2.utils.parseDuration(timesheet.duration);
          }
        } else {
          if ('Unknown' in _this2.projects) {
            _this2.projects['Unknown'] += _this2.utils.parseDuration(timesheet.duration);
          } else {
            _this2.projects['Unknown'] = _this2.utils.parseDuration(timesheet.duration);
          }
        }
      }
      let data = [];
      for (const [key, value] of Object.entries(_this2.projects)) {
        data.push({
          "name": key,
          "value": value
        });
      }
      _this2.data = data;
    })();
  }
}
DashboardPage.ɵfac = function DashboardPage_Factory(t) {
  return new (t || DashboardPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService));
};
DashboardPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DashboardPage,
  selectors: [["app-dashboard"]],
  viewQuery: function DashboardPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.widthElement = _t.first);
    }
  },
  decls: 79,
  vars: 46,
  consts: [["color", "primary"], ["slot", "fixed", 3, "ionRefresh"], ["size", "6", "size-md", "3"], [4, "ngIf"], ["animated", "", 4, "ngIf"], ["size", "12", "size-md", "6", "size-lg", "3"], ["width", ""], ["id", "pie-chart-parent", 4, "ngIf"], ["expand", "full", "onclick", "window.open('https://feedback.bextrack.com', '_system', 'location=yes'); return false;"], ["animated", ""], ["id", "pie-chart-parent"], [3, "view", "scheme", "results", "gradient", "legend", "legendPosition", "labels", "doughnut"]],
  template: function DashboardPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-content")(6, "ion-refresher", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionRefresh", function DashboardPage_Template_ion_refresher_ionRefresh_6_listener($event) {
        return ctx.doRefresh($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-refresher-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-grid")(9, "ion-row")(10, "ion-col", 2)(11, "ion-card")(12, "ion-card-header")(13, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, DashboardPage_h1_20_Template, 3, 4, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, DashboardPage_ion_skeleton_text_21_Template, 1, 0, "ion-skeleton-text", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-col", 2)(23, "ion-card")(24, "ion-card-header")(25, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, DashboardPage_h1_32_Template, 3, 4, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, DashboardPage_ion_skeleton_text_33_Template, 1, 0, "ion-skeleton-text", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-col", 2)(35, "ion-card")(36, "ion-card-header")(37, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "ion-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, DashboardPage_h1_44_Template, 3, 4, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, DashboardPage_ion_skeleton_text_45_Template, 1, 0, "ion-skeleton-text", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "ion-col", 2)(47, "ion-card")(48, "ion-card-header")(49, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "ion-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, DashboardPage_h1_56_Template, 3, 4, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, DashboardPage_ion_skeleton_text_57_Template, 1, 0, "ion-skeleton-text", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "ion-col", 5)(59, "ion-card")(60, "ion-card-header")(61, "ion-card-title", null, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "ion-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, DashboardPage_div_66_Template, 2, 8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, DashboardPage_h2_67_Template, 3, 3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "ion-col", 5)(69, "ion-card")(70, "ion-card-header")(71, "ion-card-title", null, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](74, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "ion-card-content")(76, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](78, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 22, "Dashboard"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 24, "7 days"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 26, "Hours"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 28, "7 days"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 30, "Billable"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 32, "30 days"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 34, "Hours"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 36, "30 days"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 38, "Billable"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 40, "Hours by Project"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.view && ctx.data.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](74, 42, "missing-a-report"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](78, 44, "Provide Feedback"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__.PieChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: xx-large;\n  color: black;\n  font-weight: bold;\n}\n\n#pie-chart-parent[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 400px;\n}\n\n@media (min-width: 820px) {\n  ion-grid[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n}\nion-skeleton-text[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 25px;\n  margin: auto;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n}\n\nion-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  min-height: 62px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksMkJBQUE7RUFDTjtBQUNGO0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFBTiIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3BpZS1jaGFydC1wYXJlbnQgeyBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgICBpb24tZ3JpZCB7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgfVxufVxuXG5pb24tc2tlbGV0b24tdGV4dHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICB9XG5cbiAgaW9uLWNhcmQtdGl0bGV7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBtaW4taGVpZ2h0OiA2MnB4O1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map