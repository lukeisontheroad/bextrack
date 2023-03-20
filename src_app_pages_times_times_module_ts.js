"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_times_times_module_ts"],{

/***/ 4690:
/*!*********************************************!*\
  !*** ./src/app/pages/times/times.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimesPageModule": () => (/* binding */ TimesPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _times_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./times.page */ 59080);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ion2-calendar */ 8325);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);










class TimesPageModule {}
TimesPageModule.ɵfac = function TimesPageModule_Factory(t) {
  return new (t || TimesPageModule)();
};
TimesPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: TimesPageModule
});
TimesPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, ion2_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
    path: '',
    component: _times_page__WEBPACK_IMPORTED_MODULE_0__.TimesPage
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TimesPageModule, {
    declarations: [_times_page__WEBPACK_IMPORTED_MODULE_0__.TimesPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, ion2_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 59080:
/*!*******************************************!*\
  !*** ./src/app/pages/times/times.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimesPage": () => (/* binding */ TimesPage)
/* harmony export */ });
/* harmony import */ var _Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89265);
/* harmony import */ var src_app_pipes_to_duration_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/to-duration.pipe */ 93212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ 45146);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ion2-calendar */ 8325);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pipes_format_duration_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/format-duration.pipe */ 21443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 33935);















function TimesPage_ion_list_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ion-list-header")(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-skeleton-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-skeleton-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-item", 17)(7, "ion-thumbnail", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-skeleton-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-label")(10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "ion-skeleton-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ion-skeleton-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "ion-skeleton-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function TimesPage_ion_list_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimesPage_ion_list_13_div_1_Template, 16, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.skeletons);
  }
}
function TimesPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22)(1, "ion-grid")(2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-row")(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 1, "No times found"));
  }
}
function TimesPage_div_16_ion_item_sliding_8_ion_avatar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-avatar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TimesPage_div_16_ion_item_sliding_8_ion_avatar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-avatar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TimesPage_div_16_ion_item_sliding_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item-sliding")(1, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TimesPage_div_16_ion_item_sliding_8_ion_avatar_2_Template, 2, 0, "ion-avatar", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TimesPage_div_16_ion_item_sliding_8_ion_avatar_3_Template, 2, 0, "ion-avatar", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-label")(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "formatDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-item-options", 28)(15, "ion-item-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimesPage_div_16_ion_item_sliding_8_Template_ion_item_option_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const time_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.copy(time_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-item-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimesPage_div_16_ion_item_sliding_8_Template_ion_item_option_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const time_r7 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.delete(time_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const time_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("routerLink", "/display-time/", time_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", time_r7.allowable_bill);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !time_r7.allowable_bill);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", time_r7 == null ? null : time_r7.project == null ? null : time_r7.project.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](time_r7 == null ? null : time_r7.package == null ? null : time_r7.package.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](time_r7 == null ? null : time_r7.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 9, time_r7 == null ? null : time_r7.duration));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 11, "Copy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 13, "Delete"));
  }
}
function TimesPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ion-list-header", 24)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "toDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, TimesPage_div_16_ion_item_sliding_8_Template, 21, 15, "ion-item-sliding", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", group_r5.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 4, group_r5.date, "EEEE dd.MM.yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 7, group_r5.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", group_r5.times);
  }
}
class TimesPage {
  constructor(apiService, utils) {
    this.apiService = apiService;
    this.utils = utils;
    this.times = [];
    this.groupedTimes = [];
    this.skeletons = new Array(12);
    this.loading = true;
    this.optionsMulti = {
      color: 'secondary',
      weekStart: 1
    };
    this.apiService.timesUpdated.subscribe(() => {
      this.updateTimes(false);
    });
    this.doRefresh(null, true);
    this.apiService.getPackages();
  }
  updateTimes(force) {
    var _this = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let groupedTimes = [];
      let daysConfig = new Array();
      _this.times = yield _this.apiService.getMyTimesheets(force);
      var groupedTimesMap = {};
      for (let time of _this.times) {
        if (!groupedTimesMap[time.date]) {
          groupedTimesMap[time.date] = [];
        }
        groupedTimesMap[time.date].push(time);
      }
      for (let key of Object.keys(groupedTimesMap)) {
        const total = groupedTimesMap[key].map(i => _this.utils.parseDuration(i.duration)).reduce((i, j) => i + j);
        groupedTimes.push({
          date: groupedTimesMap[key][0].date,
          times: groupedTimesMap[key],
          total: total
        });
        daysConfig.push({
          date: new Date(groupedTimesMap[key][0].date),
          subTitle: new src_app_pipes_to_duration_pipe__WEBPACK_IMPORTED_MODULE_2__.ToDurationPipe().transform(total),
          disable: false,
          cssClass: 'green'
        });
      }
      _this.groupedTimes = groupedTimes;
      _this.optionsMulti = {
        from: new Date(_this.times[_this.times.length - 1].date),
        to: new Date(_this.times[0].date),
        pickMode: 'single',
        daysConfig: daysConfig,
        color: 'secondary',
        weekStart: 1
      };
    })();
  }
  doRefresh(event, force = false) {
    var _this2 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.updateTimes(true);
      if (event) {
        event.target.complete();
      }
      setTimeout(() => {
        _this2.loading = false;
      }, 1000);
    })();
  }
  delete(timesheet) {
    var _this3 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (yield _this3.utils.confirm('Are you sure?', 'Delete ' + timesheet.date + ' ' + timesheet.duration + ' ' + timesheet.text)) {
        yield _this3.apiService.deleteTimesheet(timesheet.id);
        _this3.utils.showToast('Deleted');
        _this3.doRefresh();
      } else {
        _this3.list.closeSlidingItems();
      }
    })();
  }
  copy(timesheet) {
    var _this4 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      timesheet.id = null;
      _this4.apiService.postTimesheet(timesheet);
    })();
  }
  passedDate(selectedDate) {
    const date = new Date(selectedDate.time);
    const dateString = date.getFullYear() + '-' + src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService.pad(date.getMonth() + 1) + '-' + src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService.pad(date.getDate());
    this.scrollTo(dateString);
  }
  scrollTo(elementId) {
    let y = document.getElementById(elementId).offsetTop;
    this.content.scrollToPoint(0, y, 500);
  }
}
TimesPage.ɵfac = function TimesPage_Factory(t) {
  return new (t || TimesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService));
};
TimesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TimesPage,
  selectors: [["app-times"]],
  viewQuery: function TimesPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
    }
  },
  decls: 20,
  vars: 10,
  consts: [[1, "ion-no-border"], ["color", "primary"], [1, "tablet"], [1, "ion-justify-content-start"], ["size", "12", "size-md", "4", 1, "col-calendar"], ["sticky", "", 3, "ngModel", "options", "type", "format", "ngModelChange", "select"], ["size", "12", "size-md", "8", 1, "col-content"], ["slot", "fixed", 3, "ionRefresh"], [4, "ngIf"], ["class", "no-items", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["routerLink", "/create-time/", "color", "secondary"], ["name", "add"], ["animated", "", 2, "width", "30%"], [2, "width", "50px"], ["animated", ""], ["lines", "none"], ["slot", "start"], ["animated", "", 2, "width", "70%"], ["animated", "", 2, "width", "50%"], ["slot", "end", 2, "width", "35px"], [1, "no-items"], ["name", "timer-outline"], [2, "font-weight", "500", 3, "id"], ["lines", "none", 3, "routerLink"], ["slot", "start", 4, "ngIf"], ["slot", "end"], ["side", "end"], ["color", "primary", 3, "click"], ["color", "danger", 3, "click"], ["src", "/assets/paid.png"], ["src", "/assets/free.png"]],
  template: function TimesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-grid", 2)(6, "ion-row", 3)(7, "ion-col", 4)(8, "ion-calendar", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TimesPage_Template_ion_calendar_ngModelChange_8_listener($event) {
        return ctx.date = $event;
      })("select", function TimesPage_Template_ion_calendar_select_8_listener($event) {
        return ctx.passedDate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 6)(10, "ion-content")(11, "ion-refresher", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionRefresh", function TimesPage_Template_ion_refresher_ionRefresh_11_listener($event) {
        return ctx.doRefresh($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ion-refresher-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, TimesPage_ion_list_13_Template, 2, 1, "ion-list", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, TimesPage_div_14_Template, 8, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, TimesPage_div_16_Template, 9, 9, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-fab", 11)(18, "ion-fab-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "ion-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 8, "Times"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.date)("options", ctx.optionsMulti)("type", ctx.type)("format", "YYYY-MM-DD");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.times.length === 0 && !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.groupedTimes);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.RouterLinkDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, ion2_calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, src_app_pipes_to_duration_pipe__WEBPACK_IMPORTED_MODULE_2__.ToDurationPipe, _pipes_format_duration_pipe__WEBPACK_IMPORTED_MODULE_5__.FormatDurationPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: translucent;\n}\n\nion-list-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\nion-calendar[_ngcontent-%COMP%] {\n  background: #3B6C7A;\n}\n\n.col-calendar[_ngcontent-%COMP%] {\n  background-color: #3B6C7A;\n  min-height: 370px;\n}\n\n@media (max-width: 767px) {\n  .col-content[_ngcontent-%COMP%] {\n    height: calc(100% - 370px);\n  }\n}\n@media (max-height: 390px) {\n  ion-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.tablet[_ngcontent-%COMP%] {\n  margin: 0;\n  --ion-grid-padding: 0px;\n}\n.tablet[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.tablet[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n  .alert-wrapper {\n  --min-width: 80%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGltZXMvdGltZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFHRTtFQUNFLG1CQUFBO0FBQUo7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0k7SUFDRSwwQkFBQTtFQURKO0FBQ0Y7QUFJQTtFQUNFO0lBQ0UsYUFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtBQUhGO0FBS0U7RUFDRSxVQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7QUFKSjs7QUFRQTtFQUNFLGdCQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbmlvbi1saXN0LWhlYWRlcntcbiAgcHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5cbmlvbi1jYWxlbmRhcntcbiAgYmFja2dyb3VuZDogIzNCNkM3QTtcbn1cblxuLmNvbC1jYWxlbmRhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNCNkM3QTtcbiAgbWluLWhlaWdodDogMzcwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5jb2wtY29udGVudCB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM3MHB4KTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogMzkwcHgpIHtcbiAgaW9uLWhlYWRlcntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi50YWJsZXR7XG4gIG1hcmdpbjogMDtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHg7XG5cbiAgaW9uLWNvbHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgaW9uLXJvd3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5hbGVydC13cmFwcGVyIHtcbiAgLS1taW4td2lkdGg6IDgwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
//# sourceMappingURL=src_app_pages_times_times_module_ts.js.map