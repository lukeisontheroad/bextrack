"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_time_time_module_ts"],{

/***/ 69299:
/*!*******************************************!*\
  !*** ./src/app/pages/time/time.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTimePageModule": () => (/* binding */ CreateTimePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _time_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.page */ 20476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 25073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);










class CreateTimePageModule {}
CreateTimePageModule.ɵfac = function CreateTimePageModule_Factory(t) {
  return new (t || CreateTimePageModule)();
};
CreateTimePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CreateTimePageModule
});
CreateTimePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
    path: '',
    component: _time_page__WEBPACK_IMPORTED_MODULE_0__.TimePage
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CreateTimePageModule, {
    declarations: [_time_page__WEBPACK_IMPORTED_MODULE_0__.TimePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 20476:
/*!*****************************************!*\
  !*** ./src/app/pages/time/time.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimePage": () => (/* binding */ TimePage)
/* harmony export */ });
/* harmony import */ var _Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var src_app_pipes_to_duration_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/to-duration.pipe */ 93212);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_models_timesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/timesheet */ 71988);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/constants */ 47432);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ion2-calendar */ 8325);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_models_stopwatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/stopwatch */ 81052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api/api.service */ 45146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89265);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_stopwatches_stopwatches_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/stopwatches/stopwatches.service */ 73018);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);


















function TimePage_ion_buttons_4_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TimePage_ion_buttons_4_ion_button_1_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function TimePage_ion_buttons_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-buttons", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, TimePage_ion_buttons_4_ion_button_1_Template, 2, 0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TimePage_ion_buttons_4_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r17.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isUpdate);
  }
}
function TimePage_ion_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-spinner", 22);
  }
}
function TimePage_ion_title_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "Create effort"));
  }
}
function TimePage_ion_title_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "Update effort"));
  }
}
function TimePage_ion_segment_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-segment", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionChange", function TimePage_ion_segment_11_Template_ion_segment_ionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.segmentChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-segment-button", 24)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-segment-button", 25)(6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r4.timesheet == null ? null : ctx_r4.timesheet.tracking == null ? null : ctx_r4.timesheet.tracking.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, "Duration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 5, "Range"));
  }
}
function TimePage_ion_item_12_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "Date(s)"));
  }
}
function TimePage_ion_item_12_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "Date"));
  }
}
function TimePage_ion_item_12_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const selectedDate_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, selectedDate_r24, "EEEE dd.MM.yyyy"));
  }
}
function TimePage_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TimePage_ion_item_12_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.openCalendar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, TimePage_ion_item_12_ion_label_1_Template, 3, 3, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, TimePage_ion_item_12_ion_label_2_Template, 3, 3, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, TimePage_ion_item_12_p_3_Template, 3, 4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r5.isUpdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.isUpdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r5.selectedDates);
  }
}
function TimePage_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "ion-item")(3, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-datetime", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TimePage_ion_row_13_Template_ion_datetime_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r27.timesheet.tracking.start = $event);
    })("ionChange", function TimePage_ion_row_13_Template_ion_datetime_ionChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r29.onTimeChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-col")(8, "ion-item")(9, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-datetime", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TimePage_ion_row_13_Template_ion_datetime_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r30.timesheet.tracking.start = $event);
    })("ionChange", function TimePage_ion_row_13_Template_ion_datetime_ionChange_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r31.onTimeChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 4, "Start"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r6.timesheet.tracking.start);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 6, "Time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r6.timesheet.tracking.start);
  }
}
function TimePage_ion_row_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "ion-item", 30)(3, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-datetime", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TimePage_ion_row_14_Template_ion_datetime_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r32.timesheet.tracking.end = $event);
    })("ionChange", function TimePage_ion_row_14_Template_ion_datetime_ionChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r34.onTimeChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-col")(8, "ion-item", 30)(9, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-datetime", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TimePage_ion_row_14_Template_ion_datetime_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r35.timesheet.tracking.end = $event);
    })("ionChange", function TimePage_ion_row_14_Template_ion_datetime_ionChange_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r33);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.onTimeChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 4, "End"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r7.timesheet.tracking.end);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 6, "Time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r7.timesheet.tracking.end);
  }
}
function TimePage_ion_item_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 30)(1, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "toDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-range", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TimePage_ion_item_15_Template_ion_range_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r37.selectedDuration = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 6, "Duration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 8, ctx_r8.selectedDuration), " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 10, "hour(s)"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", ctx_r8.steps)("step", ctx_r8.steps)("ngModel", ctx_r8.selectedDuration);
  }
}
function TimePage_ion_item_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 30)(1, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 3, "Duration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r9.timesheet == null ? null : ctx_r9.timesheet.tracking == null ? null : ctx_r9.timesheet.tracking.duration, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 5, "hour(s)"), "");
  }
}
function TimePage_ion_select_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clientService_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", clientService_r39.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", clientService_r39.name, " ");
  }
}
function TimePage_ion_select_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", project_r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", project_r40.name, " ");
  }
}
function TimePage_ion_select_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const package_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", package_r41.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", package_r41.name, " ");
  }
}
function TimePage_ion_select_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", status_r42.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", status_r42.name, " ");
  }
}
class TimePage {
  constructor(apiService, router, route, storage, utils, translateService, modalContoller, stopwatchesService) {
    this.apiService = apiService;
    this.router = router;
    this.route = route;
    this.storage = storage;
    this.utils = utils;
    this.translateService = translateService;
    this.modalContoller = modalContoller;
    this.stopwatchesService = stopwatchesService;
    this.today = new Date();
    this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe('en-US');
    this.isUpdate = false;
    this.isSaving = false;
    this.selectedDates = [new Date()];
    this.selectedProjectText = null;
    this.selectedPackageText = null;
    this.selectedDuration = 1;
    this.availablePackages = [];
    this.timesheet = new src_app_models_timesheet__WEBPACK_IMPORTED_MODULE_2__.Timesheet();
    this.projects = [];
    this.clientServices = [];
    this.timesheetStatus = [];
    this.steps = 1;
    this.contact = null;
    this.contactSearch = null; // = this.apiService.searchContact()
    this.init();
  }
  init() {
    var _this = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let user = yield _this.apiService.getUser();
      _this.timesheet.user_id = user.id;
      _this.timesheet.allowable_bill = false;
      _this.projects = yield _this.apiService.getProjects();
      _this.clientServices = yield _this.apiService.getClientService();
      _this.timesheetStatus = yield _this.apiService.getTimesheetStatus();
      _this.timesheet.tracking = _this.utils.prepareTracking(_this.timesheet.tracking);
      // Load default duration
      let defaultDuration = yield _this.storage.getNumber(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_DURATION, src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS.DURATION);
      _this.selectedDuration = defaultDuration;
      let endDate = new Date(_this.timesheet.tracking.start);
      endDate.setMinutes(endDate.getMinutes() + defaultDuration * 60);
      _this.timesheet.tracking.end = endDate.toISOString();
      _this.timesheet.tracking.duration = new src_app_pipes_to_duration_pipe__WEBPACK_IMPORTED_MODULE_1__.ToDurationPipe().transform(defaultDuration);
      // Load steps
      _this.steps = (yield _this.storage.getNumber(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_STEPS, src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS.STEPS)) / 60;
      if ((yield _this.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_LAST_SERVICE, src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS.SERVICE_ID)) != src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.TYPES.NONE) {
        _this.timesheet.client_service_id = yield _this.storage.getNumber(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_LAST_SERVICE_ID);
      }
      if ((yield _this.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_LAST_STATUS, src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS.STATUS_ID)) != src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.TYPES.NONE) {
        _this.timesheet.status_id = yield _this.storage.getNumber(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_LAST_STATUS_ID);
      }
      if ((yield _this.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_LAST_PROJECT, src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS.PROJECT_ID)) != src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.TYPES.NONE) {
        _this.timesheet.pr_project_id = yield _this.storage.getNumber(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_LAST_PROJECT_ID);
        _this.availablePackages = yield _this.apiService.getPackagesForProject(_this.timesheet.pr_project_id);
      }
      _this.route.params.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          if (params['stopwatch_id']) {
            let stopwatch = yield _this.stopwatchesService.get(params['stopwatch_id']);
            stopwatch = Object.assign(new src_app_models_stopwatch__WEBPACK_IMPORTED_MODULE_5__.Stopwatch(), stopwatch);
            _this.timesheet = stopwatch.toTimesheet((yield _this.apiService.getUser()).id);
            _this.selectedDuration = _this.utils.parseDuration(_this.timesheet.tracking.duration);
          }
          if (params['project_id']) {
            _this.timesheet.pr_project_id = parseInt(params['project_id']);
            _this.availablePackages = yield _this.apiService.getPackagesForProject(_this.timesheet.pr_project_id);
          }
          if (params['package_id']) {
            _this.timesheet.pr_package_id = parseInt(params['package_id']);
          }
          if (params['time_id']) {
            _this.isUpdate = true;
            try {
              _this.timesheet = yield _this.apiService.getTimesheet(parseInt(params['time_id']), true);
              _this.selectedDates = [new Date(_this.timesheet.date)];
              _this.selectedDuration = _this.utils.parseDuration(_this.timesheet.duration);
              _this.availablePackages = yield _this.apiService.getPackagesForProject(_this.timesheet.pr_project_id);
            } catch (e) {
              console.error('error', e);
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
  updateSelectTexts() {
    var _this2 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // set project
      const filteredProjects = _this2.projects.filter(i => i.id == _this2.timesheet.pr_project_id);
      if (filteredProjects.length > 0) {
        _this2.selectedProjectText = filteredProjects[0].name;
        _this2.timesheet.contact_id = filteredProjects[0].contact_id;
        if (_this2.timesheet.pr_package_id) {
          _this2.selectedPackageText = (yield _this2.apiService.getPackageForProjectWithId(_this2.timesheet.pr_project_id, _this2.timesheet.pr_package_id)).name;
        }
      }
    })();
  }
  onProjectSelected() {
    var _this3 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.availablePackages = yield _this3.apiService.getPackagesForProject(_this3.timesheet.pr_project_id);
      _this3.updateSelectTexts();
    })();
  }
  save() {
    var _this4 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('timesheet', _this4.timesheet);
      _this4.isSaving = true;
      if (_this4.contact != null) {
        _this4.timesheet.contact_id = _this4.contact.id;
      }
      if (_this4.isUpdate) {
        yield _this4.update();
      } else {
        yield _this4.create();
      }
      _this4.isSaving = false;
    })();
  }
  contactChange(event) {
    console.log('port:', event.value);
  }
  searchContact(event) {
    var _this5 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let text = event.text.trim().toLowerCase();
      event.component.startSearch();
      event.component.items = yield _this5.apiService.searchContact(text);
      event.component.endSearch();
    })();
  }
  validateTime() {
    if (!this.timesheet.client_service_id || !this.timesheet.status_id || !this.timesheet.text || this.timesheet.text.length < 1) {
      this.utils.showToast('Missing information');
      return false;
    }
    this.timesheet.tracking.duration = new src_app_pipes_to_duration_pipe__WEBPACK_IMPORTED_MODULE_1__.ToDurationPipe().transform(this.selectedDuration);
    return true;
  }
  onTimeChanged() {
    if (this.timesheet.tracking.type === 'range') {
      let diff = (Date.parse(this.timesheet.tracking.end) - Date.parse(this.timesheet.tracking.start)) / 36e5;
      this.timesheet.tracking.duration = new src_app_pipes_to_duration_pipe__WEBPACK_IMPORTED_MODULE_1__.ToDurationPipe().transform(diff);
      this.selectedDuration = new src_app_pipes_to_duration_pipe__WEBPACK_IMPORTED_MODULE_1__.ToDurationPipe().transform(diff);
    }
  }
  segmentChanged($event) {
    var _this6 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.timesheet.tracking.type = $event.detail.value === 'duration' ? 'duration' : 'range';
      console.log('changed type to ' + $event.detail.value);
      console.log('timesheet', _this6.timesheet);
    })();
  }
  storeLastUsed(timesheet) {
    var _this7 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if ((yield _this7.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_LAST_PROJECT, src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS.PROJECT_ID)) === src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.TYPES.LAST_USED) _this7.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_LAST_PROJECT_ID, timesheet.pr_project_id);
      if ((yield _this7.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_LAST_STATUS, src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS.STATUS_ID)) === src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.TYPES.LAST_USED) _this7.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_LAST_STATUS_ID, timesheet.status_id);
      if ((yield _this7.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_LAST_SERVICE, src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS.SERVICE_ID)) === src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.TYPES.LAST_USED) _this7.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_LAST_SERVICE_ID, timesheet.client_service_id);
    })();
  }
  update() {
    var _this8 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        if (_this8.validateTime()) {
          _this8.timesheet.tracking.date = _this8.datePipe.transform(_this8.selectedDates[0], 'yyyy-MM-dd');
          _this8.apiService.putTimesheet(_this8.timesheet).then( /*#__PURE__*/function () {
            var _ref2 = (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
              _this8.storeLastUsed(response);
              _this8.utils.showToast('Updated');
              _this8.router.navigateByUrl('tabs', {
                skipLocationChange: true
              });
              resolve();
            });
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }()).catch( /*#__PURE__*/function () {
            var _ref3 = (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reason) {
              _this8.utils.showToast('Failed: ' + reason.message);
              resolve();
            });
            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          }());
        } else {
          resolve();
        }
      });
    })();
  }
  openCalendar() {
    var _this9 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        from: new Date('2018-01-01'),
        defaultScrollTo: new Date(),
        pickMode: 'multi',
        title: yield _this9.translateService.get('Select date(s)').toPromise(),
        color: 'primary',
        weekStart: 1,
        defaultDates: _this9.selectedDates,
        defaultDate: _this9.selectedDates[0]
      };
      if (_this9.isUpdate) {
        options.pickMode = 'single';
        options.defaultDate = _this9.selectedDates[0], options.title = yield _this9.translateService.get('Date').toPromise();
      }
      const calendar = yield _this9.modalContoller.create({
        component: ion2_calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarModal,
        componentProps: {
          options
        }
      });
      calendar.present();
      const event = yield calendar.onDidDismiss();
      if (_this9.isUpdate) {
        _this9.selectedDates = [event.data?.dateObj];
      } else {
        let dates = [];
        for (var i = 0; i < event.data.length; i++) {
          if (event.data[i]) dates.push(event.data[i].dateObj);
        }
        _this9.selectedDates = dates;
      }
    })();
  }
  create() {
    var _this10 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref4 = (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          if (_this10.validateTime()) {
            // let timesheets = []
            // let promises = []
            for (var i = 0; i < _this10.selectedDates.length; i++) {
              let timesheet = JSON.parse(JSON.stringify(_this10.timesheet));
              // if(timesheet.tracking.type === 'duration'){
              timesheet.tracking.date = _this10.datePipe.transform(_this10.selectedDates[i], 'yyyy-MM-dd');
              // }
              // timesheets.push(timesheet)
              yield _this10.apiService.postTimesheet(timesheet);
            }
            // promises.push(...timesheets.map(timesheet => this.apiService.postTimesheet(timesheet)))
            // Not working because of Bexio API race condition
            // Promise.all(promises).then(async (values) => {
            _this10.storeLastUsed(_this10.timesheet);
            _this10.utils.showToast('Created');
            _this10.router.navigateByUrl('tabs', {
              skipLocationChange: true
            });
            // }).catch(async reason => {
            //   this.utils.showToast('Failed: ' + reason.message)
            // })
          }

          resolve();
        });
        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }
  delete() {
    var _this11 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (yield _this11.utils.confirm('Delete time entry', 'Are you sure?')) {
        yield _this11.apiService.deleteTimesheet(_this11.timesheet.id);
        _this11.utils.showToast('Deleted');
        _this11.router.navigateByUrl('/tabs/times');
      }
    })();
  }
}
TimePage.ɵfac = function TimePage_Factory(t) {
  return new (t || TimePage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_stopwatches_stopwatches_service__WEBPACK_IMPORTED_MODULE_9__.StopwatchesService));
};
TimePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: TimePage,
  selectors: [["app-time"]],
  decls: 51,
  vars: 40,
  consts: [["color", "primary"], ["slot", "start"], ["mode", "md", "defaultHref", "/tabs/projects"], ["slot", "end", 4, "ngIf"], ["slot", "end", "color", "light", 4, "ngIf"], [4, "ngIf"], [1, "type"], ["mode", "ios", 3, "value", "ionChange", 4, "ngIf"], [3, "click", 4, "ngIf"], ["lines", "none", 4, "ngIf"], [3, "ngModel", "ngModelChange"], ["position", "stacked"], ["placeholder", "Select", "interface", "popover", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["position", "floating"], ["placeholder", "Project", 3, "ngModel", "selectedText", "ionChange", "ngModelChange"], ["placeholder", "Package", 3, "ngModel", "selectedText", "ngModelChange"], ["autoGrow", "true", "placeholder", "Text", 3, "ngModel", "ngModelChange"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "save"], ["slot", "icon-only", "name", "trash-outline"], ["slot", "end", "color", "light"], ["mode", "ios", 3, "value", "ionChange"], ["value", "duration"], ["value", "range"], ["position", "stacked", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["displayFormat", "DDDD MMM D, YYYY", 3, "ngModel", "ngModelChange", "ionChange"], ["displayFormat", "HH:mm", 3, "ngModel", "ngModelChange", "ionChange"], ["lines", "none"], [2, "width", "100%", "text-align", "center", "padding", "16px"], ["max", "12", "snaps", "true", "ticks", "false", 3, "min", "step", "ngModel", "ngModelChange"], [2, "width", "100%", "text-align", "center"], [3, "value"], [2, "text-align", "right"]],
  template: function TimePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, TimePage_ion_buttons_4_Template, 4, 1, "ion-buttons", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, TimePage_ion_spinner_5_Template, 1, 0, "ion-spinner", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, TimePage_ion_title_6_Template, 3, 3, "ion-title", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, TimePage_ion_title_7_Template, 3, 3, "ion-title", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-content")(9, "ion-list")(10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, TimePage_ion_segment_11_Template, 9, 7, "ion-segment", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, TimePage_ion_item_12_Template, 4, 3, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, TimePage_ion_row_13_Template, 13, 8, "ion-row", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, TimePage_ion_row_14_Template, 13, 8, "ion-row", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, TimePage_ion_item_15_Template, 9, 12, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, TimePage_ion_item_16_Template, 7, 7, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "ion-item")(18, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "ion-toggle", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TimePage_Template_ion_toggle_ngModelChange_21_listener($event) {
        return ctx.timesheet.allowable_bill = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "ion-item")(23, "ion-label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "ion-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TimePage_Template_ion_select_ngModelChange_26_listener($event) {
        return ctx.timesheet.client_service_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, TimePage_ion_select_option_27_Template, 2, 2, "ion-select-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "ion-item")(29, "ion-label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "ion-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionChange", function TimePage_Template_ion_select_ionChange_32_listener() {
        return ctx.onProjectSelected();
      })("ngModelChange", function TimePage_Template_ion_select_ngModelChange_32_listener($event) {
        return ctx.timesheet.pr_project_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, TimePage_ion_select_option_33_Template, 4, 2, "ion-select-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "ion-item")(35, "ion-label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "ion-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TimePage_Template_ion_select_ngModelChange_38_listener($event) {
        return ctx.timesheet.pr_package_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, TimePage_ion_select_option_39_Template, 2, 2, "ion-select-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "ion-item")(41, "ion-label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "ion-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TimePage_Template_ion_select_ngModelChange_44_listener($event) {
        return ctx.timesheet.status_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, TimePage_ion_select_option_45_Template, 2, 2, "ion-select-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "ion-item")(47, "ion-label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "ion-textarea", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TimePage_Template_ion_textarea_ngModelChange_50_listener($event) {
        return ctx.timesheet.text = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isSaving);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isSaving);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isUpdate);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isUpdate);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isUpdate);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.timesheet == null ? null : ctx.timesheet.tracking == null ? null : ctx.timesheet.tracking.type) == "duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.timesheet == null ? null : ctx.timesheet.tracking == null ? null : ctx.timesheet.tracking.type) == "range");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.timesheet == null ? null : ctx.timesheet.tracking == null ? null : ctx.timesheet.tracking.type) == "range");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.timesheet == null ? null : ctx.timesheet.tracking == null ? null : ctx.timesheet.tracking.type) == "duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.timesheet == null ? null : ctx.timesheet.tracking == null ? null : ctx.timesheet.tracking.type) == "range");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 28, "Chargeable"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.timesheet.allowable_bill);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](25, 30, "Service"), "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.timesheet.client_service_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.clientServices);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](31, 32, "Project"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.timesheet.pr_project_id)("selectedText", ctx.selectedProjectText);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.projects);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](37, 34, "Package"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.timesheet.pr_package_id)("selectedText", ctx.selectedPackageText);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.availablePackages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](43, 36, "Status"), "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.timesheet.status_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.timesheetStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](49, 38, "Description"), "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.timesheet.text);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRange, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonBackButtonDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, src_app_pipes_to_duration_pipe__WEBPACK_IMPORTED_MODULE_1__.ToDurationPipe],
  styles: ["ion-spinner[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --ion-background-color:rgba(0,0,0,0);\n}\n\n.type[_ngcontent-%COMP%] {\n  margin: 8px;\n  padding: 8px;\n  border-radius: 7px;\n  background-color: #EEEEEE;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGltZS90aW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVDO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc3Bpbm5lcntcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbmlvbi1pdGVte1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKTtcbiB9XG5cbiAudHlwZXtcbiAgICBtYXJnaW46OHB4O1xuICAgIHBhZGRpbmc6OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFRUVFRUU7XG4gfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_time_time_module_ts.js.map