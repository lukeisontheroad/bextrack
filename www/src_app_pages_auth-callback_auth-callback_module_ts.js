"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth-callback_auth-callback_module_ts"],{

/***/ 99292:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth-callback/auth-callback.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthCallbackPageModule": () => (/* binding */ AuthCallbackPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _auth_callback_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-callback.page */ 59298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [{
  path: '',
  component: _auth_callback_page__WEBPACK_IMPORTED_MODULE_0__.AuthCallbackPage
}];
class AuthCallbackPageModule {}
AuthCallbackPageModule.ɵfac = function AuthCallbackPageModule_Factory(t) {
  return new (t || AuthCallbackPageModule)();
};
AuthCallbackPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AuthCallbackPageModule
});
AuthCallbackPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthCallbackPageModule, {
    declarations: [_auth_callback_page__WEBPACK_IMPORTED_MODULE_0__.AuthCallbackPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 59298:
/*!***********************************************************!*\
  !*** ./src/app/pages/auth-callback/auth-callback.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthCallbackPage": () => (/* binding */ AuthCallbackPage)
/* harmony export */ });
/* harmony import */ var _Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-appauth */ 77798);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 45146);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89265);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);








class AuthCallbackPage {
  constructor(auth, apiService, utilsService, navCtrl, router) {
    this.auth = auth;
    this.apiService = apiService;
    this.utilsService = utilsService;
    this.navCtrl = navCtrl;
    this.router = router;
  }
  ngOnInit() {
    this.observer = this.auth.addActionListener(action => this.postCallback(action));
    this.auth.handleCallback(window.location.origin + this.router.url);
  }
  ngOnDestroy() {
    this.auth.removeActionObserver(this.observer);
  }
  postCallback(action) {
    var _this = this;
    return (0,_Users_lukas_Projects_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthActions.SignInSuccess) {
        try {
          yield _this.apiService.init();
          _this.navCtrl.navigateRoot('tabs');
        } catch (e) {
          if (e.error && e.error.error_code && e.error.error_code == 403 && e.error.message && e.error.message == 'You are not allowed to access this ressource.') {
            _this.utilsService.showToast('no-time-permissions');
          } else if (e.error && e.error.message) {
            _this.utilsService.showToast(e.error.message);
          } else if (e.message) {
            _this.utilsService.showToast(e.message);
          } else {
            _this.utilsService.showToast('Error: ' + JSON.stringify(e));
          }
          _this.navCtrl.navigateRoot('login');
        }
      }
      if (action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthActions.SignInFailed) {
        _this.utilsService.showToast('sign-in-failed');
        console.log('SignInFailed redirect to login');
        _this.navCtrl.navigateRoot('login');
      }
    })();
  }
}
AuthCallbackPage.ɵfac = function AuthCallbackPage_Factory(t) {
  return new (t || AuthCallbackPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
AuthCallbackPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AuthCallbackPage,
  selectors: [["app-auth-callback"]],
  decls: 2,
  vars: 0,
  consts: [["color", "primary"], ["color", "secondary", 2, "position", "absolute", "left", "40%", "top", "40%", "width", "20%", "height", "20%"]],
  template: function AuthCallbackPage_Template(rf, ctx) {
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
//# sourceMappingURL=src_app_pages_auth-callback_auth-callback_module_ts.js.map