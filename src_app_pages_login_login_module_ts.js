"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);








class LoginPageModule {}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) {
  return new (t || LoginPageModule)();
};
LoginPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LoginPageModule
});
LoginPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
    path: '',
    component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageModule, {
    declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-appauth */ 77798);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);






class LoginPage {
  constructor(auth, navCtrl, authService) {
    this.auth = auth;
    this.navCtrl = navCtrl;
    this.authService = authService;
  }
  ngOnInit() {
    this.observer = this.auth.addActionListener(action => this.onSignInSuccess(action));
  }
  ngOnDestroy() {
    this.auth.removeActionObserver(this.observer);
  }
  onSignInSuccess(action) {
    this.action = action;
    if (action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthActions.SignInSuccess || action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthActions.LoadTokenFromStorageSuccess) {
      this.navCtrl.navigateRoot('loading');
    }
  }
  signIn() {
    this.auth.signIn();
  }
  signOut() {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.authService.signOut();
    })();
  }
}
LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["app-login"]],
  decls: 15,
  vars: 6,
  consts: [["color", "primary"], [1, "fullheight", "xc"], ["size", "12", 1, "ion-text-center"], ["src", "assets/icon/icon.png", 2, "width", "200px"], ["color", "secondary", 3, "click"], ["fill", "outline", "color", "secondary", 3, "click"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "ion-grid")(3, "ion-row")(4, "ion-col", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-row")(7, "ion-col", 2)(8, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_8_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-col", 2)(12, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_12_listener() {
        return ctx.signOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 2, "Sign in"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 4, "Sign out"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: [".fullheight[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.xc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi54YyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map