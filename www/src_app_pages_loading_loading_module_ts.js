"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_loading_loading_module_ts"],{

/***/ 47467:
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPageModule": () => (/* binding */ LoadingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.page */ 50839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);







class LoadingPageModule {}
LoadingPageModule.ɵfac = function LoadingPageModule_Factory(t) {
  return new (t || LoadingPageModule)();
};
LoadingPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LoadingPageModule
});
LoadingPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _loading_page__WEBPACK_IMPORTED_MODULE_0__.LoadingPage
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoadingPageModule, {
    declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_0__.LoadingPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 50839:
/*!***********************************************!*\
  !*** ./src/app/pages/loading/loading.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPage": () => (/* binding */ LoadingPage)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-appauth */ 77798);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 45146);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89265);







class LoadingPage {
  constructor(auth, apiService, navCtrl, utilsService) {
    this.auth = auth;
    this.apiService = apiService;
    this.navCtrl = navCtrl;
    this.utilsService = utilsService;
  }
  ngOnInit() {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.observer = _this.auth.addActionListener(action => _this.actionHandler(action));
      _this.auth.loadTokenFromStorage().then( /*#__PURE__*/function () {
        var _ref = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (value) {
          _this.auth.getValidToken().then( /*#__PURE__*/(0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this.initApiService();
          })).catch(() => {
            _this.auth.refreshToken().then( /*#__PURE__*/function () {
              var _ref3 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (value) {
                _this.initApiService();
              });
              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }());
          });
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  initApiService() {
    var _this2 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.apiService.init();
        _this2.navCtrl.navigateRoot('tabs');
      } catch (e) {
        if (e.error && e.error.error_code && e.error.error_code == 403 && e.error.message && e.error.message == 'You are not allowed to access this ressource.') {
          _this2.utilsService.showToast('no-time-permissions');
        } else if (e.error && e.error.message) {
          _this2.utilsService.showToast(e.error.message);
        } else if (e.message) {
          _this2.utilsService.showToast(e.message);
        } else {
          _this2.utilsService.showToast('Error: ' + JSON.stringify(e));
        }
        _this2.navCtrl.navigateRoot('login');
      }
    })();
  }
  actionHandler(action) {
    console.log('actionhandler', action);
    if (action.error && action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthActions.LoadUserInfoFailed) {
      this.navCtrl.navigateRoot('login');
    }
  }
  ngOnDestroy() {
    this.auth.removeActionObserver(this.observer);
  }
}
LoadingPage.ɵfac = function LoadingPage_Factory(t) {
  return new (t || LoadingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService));
};
LoadingPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LoadingPage,
  selectors: [["app-loading"]],
  decls: 2,
  vars: 0,
  consts: [["color", "primary"], ["color", "secondary", 2, "position", "absolute", "left", "40%", "top", "40%", "width", "20%", "height", "20%"]],
  template: function LoadingPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-spinner", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSpinner],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_loading_loading_module_ts.js.map