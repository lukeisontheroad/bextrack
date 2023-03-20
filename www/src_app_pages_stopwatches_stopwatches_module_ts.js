"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_stopwatches_stopwatches_module_ts"],{

/***/ 51184:
/*!*****************************************************************!*\
  !*** ./src/app/pages/stopwatches/stopwatches-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopwatchesPageRoutingModule": () => (/* binding */ StopwatchesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _stopwatches_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stopwatches.page */ 34176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _stopwatches_page__WEBPACK_IMPORTED_MODULE_0__.StopwatchesPage
}];
class StopwatchesPageRoutingModule {}
StopwatchesPageRoutingModule.ɵfac = function StopwatchesPageRoutingModule_Factory(t) {
  return new (t || StopwatchesPageRoutingModule)();
};
StopwatchesPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: StopwatchesPageRoutingModule
});
StopwatchesPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StopwatchesPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3801:
/*!*********************************************************!*\
  !*** ./src/app/pages/stopwatches/stopwatches.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopwatchesPageModule": () => (/* binding */ StopwatchesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _stopwatches_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stopwatches-routing.module */ 51184);
/* harmony import */ var _stopwatches_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stopwatches.page */ 34176);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);








class StopwatchesPageModule {}
StopwatchesPageModule.ɵfac = function StopwatchesPageModule_Factory(t) {
  return new (t || StopwatchesPageModule)();
};
StopwatchesPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: StopwatchesPageModule
});
StopwatchesPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _stopwatches_routing_module__WEBPACK_IMPORTED_MODULE_0__.StopwatchesPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StopwatchesPageModule, {
    declarations: [_stopwatches_page__WEBPACK_IMPORTED_MODULE_1__.StopwatchesPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _stopwatches_routing_module__WEBPACK_IMPORTED_MODULE_0__.StopwatchesPageRoutingModule]
  });
})();

/***/ }),

/***/ 34176:
/*!*******************************************************!*\
  !*** ./src/app/pages/stopwatches/stopwatches.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopwatchesPage": () => (/* binding */ StopwatchesPage)
/* harmony export */ });
/* harmony import */ var _Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_stopwatch_template_stopwatch_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/stopwatch-template/stopwatch-template.component */ 67066);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/constants */ 47432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_stopwatches_stopwatches_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/stopwatches/stopwatches.service */ 73018);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33935);












function StopwatchesPage_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "ion-grid")(2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row")(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 1, "No stopwatches found"));
  }
}
function StopwatchesPage_app_stopwatch_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-stopwatch-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onDelete", function StopwatchesPage_app_stopwatch_template_10_Template_app_stopwatch_template_onDelete_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.delete($event));
    })("onEdit", function StopwatchesPage_app_stopwatch_template_10_Template_app_stopwatch_template_onEdit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.edit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stopwatch_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stopwatch", stopwatch_r2);
  }
}
class StopwatchesPage {
  constructor(navController, stopwatchesService, storage) {
    var _this = this;
    this.navController = navController;
    this.stopwatchesService = stopwatchesService;
    this.storage = storage;
    this.stopwatches = [];
    this.loading = false;
    this.stopwatchesService.stopwatches.subscribe(stopwatches => this.stopwatches = stopwatches);
    this.stopwatchesService.getCurrentStopwatch().subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (stopwatch) {
        if (yield _this.storage.getBoolean(src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE.SETTINGS_STOPWATCH_SINGULAR, src_app_models_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULTS.STOPWATCH_SINGULAR)) {
          _this.stopwatchComponents.filter(s => s.stopwatch.id != stopwatch.id).map(s => s.pauseTimer());
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  doRefresh(event, force = false) {
    var _this2 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      if (event) {
        event.target.complete();
      }
      setTimeout(() => {
        _this2.loading = false;
      }, 1000);
    })();
  }
  delete(wasDeleted) {
    var _this3 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!wasDeleted) {
        _this3.list.closeSlidingItems();
      }
    })();
  }
  edit(id) {
    var _this4 = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.navController.navigateRoot('/stopwatch/' + id);
    })();
  }
}
StopwatchesPage.ɵfac = function StopwatchesPage_Factory(t) {
  return new (t || StopwatchesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_stopwatches_stopwatches_service__WEBPACK_IMPORTED_MODULE_3__.StopwatchesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService));
};
StopwatchesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: StopwatchesPage,
  selectors: [["app-stopwatches"]],
  viewQuery: function StopwatchesPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](src_app_components_stopwatch_template_stopwatch_template_component__WEBPACK_IMPORTED_MODULE_1__.StopwatchTemplateComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.stopwatchComponents = _t);
    }
  },
  decls: 14,
  vars: 5,
  consts: [["color", "primary"], ["slot", "fixed", 3, "ionRefresh"], ["class", "no-items", 4, "ngIf"], [3, "stopwatch", "onDelete", "onEdit", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["routerLink", "/stopwatch/", "color", "secondary"], ["name", "add"], [1, "no-items"], ["name", "stopwatch-outline"], [3, "stopwatch", "onDelete", "onEdit"]],
  template: function StopwatchesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-content")(6, "ion-refresher", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionRefresh", function StopwatchesPage_Template_ion_refresher_ionRefresh_6_listener($event) {
        return ctx.doRefresh($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-refresher-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, StopwatchesPage_div_8_Template, 8, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, StopwatchesPage_app_stopwatch_template_10_Template, 1, 1, "app-stopwatch-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-fab", 4)(12, "ion-fab-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, "Stopwatches"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.stopwatches.length === 0 && !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.stopwatches);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.RouterLinkDelegate, src_app_components_stopwatch_template_stopwatch_template_component__WEBPACK_IMPORTED_MODULE_1__.StopwatchTemplateComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stopwatches_stopwatches_module_ts.js.map